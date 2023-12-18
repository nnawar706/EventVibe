import {model, models, Schema} from "mongoose";

const BillSchema = new Schema({
    buyer: { type: Schema.Types.ObjectId, ref: "User" },
    event: { type: Schema.Types.ObjectId, ref: "Event" },
    stripeId: { type: String, required: true, unique: true },
    PayableAmount: { type: String, required: true },
    discountAmount: { type: String },
    totalPaid: { type: String }
}, {
    timestamps: true
})

const Bill = models.Bill || model("Bill", BillSchema)

export default Bill