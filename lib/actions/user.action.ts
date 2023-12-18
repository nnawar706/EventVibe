"use server"

import {CreateUser, UpdateUser} from "@/types/model-user";
import {handleError} from "@/lib/utils";
import {connectToDatabase} from "@/lib/database/db";
import User from "../database/models/user.model"

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