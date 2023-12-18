import { Document } from "mongoose"

export interface IEvent extends Document {
    _id: string;
    organizer: {}
    title: string;
    description?: string
}