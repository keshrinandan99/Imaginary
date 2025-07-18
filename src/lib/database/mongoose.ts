import mongoose from "mongoose";
import { Mongoose } from "mongoose";

const MONGO_DB_URL = process.env.MONGO_DB_URL;

interface MongooseConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

declare global {
    var mongoose: MongooseConnection | undefined;
}

const cached: MongooseConnection = globalThis.mongoose || { conn: null, promise: null };

if (!globalThis.mongoose) {
    globalThis.mongoose = cached;
}

export const connectToDatabase = async () => {
    if (cached.conn) return cached.conn;

    if (!MONGO_DB_URL) throw new Error("Missing mongodb url");
    
    cached.promise = cached.promise || 
        mongoose.connect(MONGO_DB_URL, { 
            dbName: 'imaginify', 
            bufferCommands: false 
        });

    cached.conn = await cached.promise;
    return cached.conn;
};