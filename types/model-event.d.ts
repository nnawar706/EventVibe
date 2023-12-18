import { Document, Types } from "mongoose"

export interface IEvent extends Event, Document {
    _id: string;
    createdAt?: Date;
    updatedAt?: Date;
}

interface Event {
    organizer: Types.ObjectId;
    category: Types.ObjectId;
    title: string;
    description?: string;
    location?: string;
    locationLat?: string;
    locationLng?: string;
    startDateTime: Date;
    endDateTime: Date;
    ticketPrice?: string;
    url?: string;
}