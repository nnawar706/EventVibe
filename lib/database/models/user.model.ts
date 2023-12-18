import {Schema, models, model} from "mongoose";
import {Role} from "@/constants";

const UserSchema = new Schema({
    authId: { type: String, required: true, unique: true },
    role: { type: String, enum: Role, default: "user" },
    email: { type: String, required: [true, "Email is required."], unique: [true, "This email address is taken."] },
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    deletedAt: { type: Date }
},{
    timestamps: true
})

const User = models.User || model("User", UserSchema)

export default User