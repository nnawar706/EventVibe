import { Document, Types } from "mongoose"
import {User} from "@/types/model-user";
import {ICategory} from "@/types/model-category";
import {DiscountType} from "@/constants";

export interface IEvent extends Event, Document {
    _id: string;
    createdAt?: Date;
    updatedAt?: Date;
}

interface Event {
    organizer: Types.ObjectId | User;
    category: Types.ObjectId | ICategory;
    title: string;
    description?: string;
    location?: string;
    locationLat?: string;
    locationLng?: string;
    startDateTime: Date;
    endDateTime: Date;
    ticketPrice?: string;
    refererDiscount?: number;
    refererDiscountType?: DiscountType;
    url?: string;
    imageUrl: string;
}