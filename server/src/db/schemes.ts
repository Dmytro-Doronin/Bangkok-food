import mongoose from "mongoose";
import {WithId} from "mongodb";
import {ProductType} from "../types/productType";

export const ProductSchema = new mongoose.Schema<WithId<ProductType>>({
    id: {type: String, required: true },
    title: {type: String, required: true },
    description: {type: String, required: true },
    price: {type: Number, required: true },
    image: {type: String, required: true },
    productType: {type: String, required: true },
    spiciness: {type: Number, required: true },
    nuts: {type: Boolean, required: true },
    vegetarian: {type: Boolean, required: true },
})
export const ProductModel = mongoose.model<WithId<ProductType>>('product', ProductSchema)
export const RecommendationsModel = mongoose.model<WithId<ProductType>>('recommendations', ProductSchema)