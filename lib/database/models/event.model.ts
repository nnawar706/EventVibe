import {model, models, Schema} from "mongoose";
import {DiscountType} from "@/constants";

const EventSchema = new Schema({
    organizer: { type: Schema.Types.ObjectId, ref: "User" },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    title: { type: String, required: [true, "Event title is required."] },
    description: { type: String },
    location: { type: String },
    locationLat: { type: String },
    locationLng: { type: String },
    startDateTime: { type: Date, required: true },
    endDateTime: { type: Date, required: true },
    ticketPrice: { type: String },
    refererDiscount: { type: Number },
    refererDiscountType: { type: Number, enum: DiscountType, default: 0 },
    url: { type: String },
    imageUrl: { type: String, required: true }
},{
    timestamps: true
})

const Event = models.Event || model("Event", EventSchema)

export default Event