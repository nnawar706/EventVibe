import { Document } from "mongoose"
import {Role} from "@/constants";

export interface IUser extends User, Document {
    authId: string;
    role: Role;
    email: string;
    createdAt?: Date;
    updatedAt?: Date;
}

interface User {
    _id: string;
    username: string;
    name: string;
    imageUrl: string;
}

export interface CreateUser extends UpdateUser {
    authId: string;
}

export interface UpdateUser {
    username: string;
    name: string;
    email: string;
    imageUrl: string;
}