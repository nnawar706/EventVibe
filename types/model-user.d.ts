import { Document } from "mongoose"

export interface IUser extends Document {
    _id: string;
}

interface User {
    _id: string;
}