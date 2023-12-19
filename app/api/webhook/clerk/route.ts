import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import {CreateUser, UpdateUser} from "@/types/model-user";
import {generateKey} from "@/lib/utils";
import {createUser, deleteUser, updateUser} from "@/lib/actions/user.action";
import {clerkClient} from "@clerk/nextjs";
import {NextResponse} from "next/server";

export async function POST(req: Request) {

    // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
    const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET

    if (!WEBHOOK_SECRET) {
        throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
    }

    // Get the headers
    const headerPayload = headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response('Error occured -- no svix headers', {
            status: 400
        })
    }

    // Get the body
    const payload = await req.json()
    const body = JSON.stringify(payload);

    // Create a new Svix instance with your secret.
    const wh = new Webhook(WEBHOOK_SECRET);

    let evt: WebhookEvent

    // Verify the payload with the headers
    try {
        evt = wh.verify(body, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature,
        }) as WebhookEvent
    } catch (err) {
        console.error('Error verifying webhook:', err);
        return new Response('Error occured', {
            status: 400
        })
    }

    const eventType = evt.type;

    // create user

    if (eventType === 'user.created') {
        const { id, email_addresses, image_url, first_name, last_name } = evt.data

        const user: CreateUser = {
            authId: id,
            email: email_addresses[0].email_address,
            name: first_name + ' ' + last_name,
            imageUrl: image_url
        }

        const userId = await createUser(user)

        if (userId) {
            await clerkClient.users.updateUserMetadata(id, {
                publicMetadata: {
                    userId: userId
                }
            })
        }

        return NextResponse.json({
            status: true,
            message: 'Account created successfully.'
        }, { status: 201 })
    }

    // update user

    if (eventType === 'user.updated') {
        const {id, image_url, first_name, last_name } = evt.data

        const user: UpdateUser = {
            name: first_name + ' ' + last_name,
            imageUrl: image_url
        }

        const status = await updateUser(id, user)

        if (status) {
            return NextResponse.json({
                status: true,
                message: 'Account information updated successfully.'
            }, { status: 200 })
        }

        return NextResponse.json({
            status: false,
            message: 'No change detected.'
        }, { status: 304 })
    }

    // deactivate user

    if (eventType === 'user.deleted') {
        const { id } = evt.data

        const status = await deleteUser(id!)

        if (status) {
            return NextResponse.json({
                status: true,
                message: 'Account deactivated successfully.'
            }, { status: 200 })
        }

        return NextResponse.json({
            status: false,
            message: 'No change detected.'
        }, { status: 304 })
    }

    return new Response('', { status: 200 })
}
