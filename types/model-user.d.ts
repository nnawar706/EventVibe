import { Document } from "mongoose"
import {Role} from "@/constants";

export interface IUser extends User, Document {
    authId: string;
    role: Role;
    email: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

interface User {
    _id: string;
    name: string;
    imageUrl: string;
}

export interface CreateUser extends UpdateUser {
    authId: string;
    email: string;
}

export interface UpdateUser {
    name: string;
    imageUrl: string;
}