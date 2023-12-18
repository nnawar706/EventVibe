import { Document } from "mongoose"

export interface ICategory extends Category, Document {
    _id: string;
}

interface Category {
    name: string;
}