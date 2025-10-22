"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
exports.app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const productRoute_1 = require("./routes/productRoute");
exports.app.use((0, cors_1.default)({
    origin: "https://bangkok-food-ld5m.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
exports.app.set('trust proxy', true);
exports.app.use(express_1.default.json());
exports.app.use('/api/products', productRoute_1.productRouter);
