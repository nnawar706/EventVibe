import { Document } from "mongoose";
import {User} from "@/types/model-user";
import {Event} from "@/types/model-event";

export interface IBill extends Document {
    _id: string;
    buyer: User;
    event: Event;
    stripeId: string;
    PayableAmount: string;
    discountAmount?: string;
    totalPaid: string;
    createdAt?: Date;
    updatedAt?: Date;
}