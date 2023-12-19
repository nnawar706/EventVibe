"use server"

import {CreateUser, UpdateUser} from "@/types/model-user";
import {handleError} from "@/lib/utils";
import {connectToDatabase} from "@/lib/database/db";
import User from "../database/models/user.model"
import {auth} from "@clerk/nextjs";

export async function createUser (user: CreateUser) {
    try {
        await connectToDatabase()

        const newUser = await User.create(user)

        return newUser._id
    } catch (error) {
        handleError(error)
        return null
    }
}

export async function updateUser (authId: string, user: UpdateUser) {
    try {
        await connectToDatabase()

        const updatedUser = await User.findOneAndUpdate({ authId }, user, { new: true })

        return !!updatedUser
    } catch (error) {
        handleError(error)
    }
}

export async function deleteUser (authId: string) {
    try {
        await connectToDatabase()

        const deleteUser = await User.findOneAndUpdate({ authId }, { deletedAt: new Date() }, { new: true })

        return !!deleteUser
    } catch (error) {
        handleError(error)
    }
}