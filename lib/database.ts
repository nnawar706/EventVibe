import mongoose from 'mongoose'
import {defaultMongooseConnection} from "@/constants";

const MONGODB_URI = process.env.MONGODB_URI
let cachedConnection = (global as any).mongoose || defaultMongooseConnection

export const connectToDatabase = async () => {
    if (cachedConnection.conn) return cachedConnection.conn
}