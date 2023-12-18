import { Document } from "mongoose"
import {User} from "@/types/model-user";
import {ICategory} from "@/types/model-category";
import {DiscountType} from "@/constants";

export interface IEvent extends Event, Document {
    organizer: User;
    category: ICategory;
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
    createdAt?: Date;
    updatedAt?: Date;
}

export interface Event {
    _id: string;
    title: string;
}