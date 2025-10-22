import express from "express";

export const app = express()
import cors from 'cors'
import {productRouter} from "./routes/productRoute";

app.use(
    cors({
        origin: "https://bangkok-food-ld5m.vercel.app",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
)
app.set('trust proxy', true)
app.use(express.json())

app.use('/api/products', productRouter)