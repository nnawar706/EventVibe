import {model, models, Schema} from "mongoose";

const CategorySchema = new Schema({
    name: { type: String, required: [true, "Category name is required."], unique: [true, "This category name is taken."] }
})

const Category = models.Category || model("Category", CategorySchema)

export default Category