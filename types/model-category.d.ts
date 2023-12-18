import { Document } from "mongoose"

export interface ICategory extends CreateUpdateCategory, Document {
    _id: string;
}

interface CreateUpdateCategory {
    name: string
}