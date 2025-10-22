"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecommendationsModel = exports.ProductModel = exports.ProductSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.ProductSchema = new mongoose_1.default.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    productType: { type: String, required: true },
    spiciness: { type: Number, required: true },
    nuts: { type: Boolean, required: true },
    vegetarian: { type: Boolean, required: true },
});
exports.ProductModel = mongoose_1.default.model('product', exports.ProductSchema);
exports.RecommendationsModel = mongoose_1.default.model('recommendations', exports.ProductSchema);
