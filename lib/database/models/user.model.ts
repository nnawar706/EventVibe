import {Schema, models, model} from "mongoose";

const UserSchema = new Schema({
    authId: { type: String, required: true, unique: true },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    email: { type: String, required: [true, "Email is required."], unique: [true, "This email address is taken."] },
    username: { type: String, required: [true, "Username is required."], unique: [true, "This username is taken."] },
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
},{
    timestamps: true
})

const User = models.User || model("User", UserSchema)

export default User