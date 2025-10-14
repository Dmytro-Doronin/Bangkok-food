import * as dotenv from 'dotenv'
import {MongoClient} from "mongodb";
import mongoose from 'mongoose'


dotenv.config()
export const url = process.env.MONGO_URL || ''


if (!url) {
    throw new Error('Url does`t find')
}

export const client = new MongoClient(url)


export async function runDB ()  {
    try {
        await client.connect()
        await mongoose.connect(url, {dbName: 'bangkok'})
        console.log('Connected success to server')
    } catch (e) {
        console.log(e)
        await client.close()
    }
}