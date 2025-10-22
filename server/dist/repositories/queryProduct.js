"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductQuery = void 0;
const schemes_1 = require("../db/schemes");
const sortData_1 = require("../utils/sortData");
const inversify_1 = require("inversify");
const mapper_1 = require("../utils/mapper");
let ProductQuery = class ProductQuery {
    getAllProductsInDb(sortData) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const pageNumber = (_a = sortData.pageNumber) !== null && _a !== void 0 ? _a : 1;
            const pageSize = (_b = sortData.pageSize) !== null && _b !== void 0 ? _b : 10;
            const filter = (0, sortData_1.buildFilter)(sortData);
            try {
                const products = yield schemes_1.ProductModel
                    .find(filter)
                    .skip((pageNumber - 1) * +pageSize)
                    .limit(pageSize)
                    .lean();
                if (!products) {
                    return null;
                }
                const totalCount = yield schemes_1.ProductModel.countDocuments(filter);
                const pagesCount = Math.ceil(totalCount / pageSize);
                return {
                    pagesCount,
                    pageNumber: pageNumber,
                    pageSize: pageSize,
                    totalCount,
                    items: products.map(mapper_1.productMapper)
                };
            }
            catch (e) {
                throw new Error('Does not get all products');
            }
        });
    }
    getRecommendations() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const recommendations = yield schemes_1.RecommendationsModel.find().lean();
                if (!recommendations) {
                    return null;
                }
                return recommendations.map(mapper_1.productMapper);
            }
            catch (e) {
                throw new Error('Does not get all recommendations');
            }
        });
    }
    getProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield schemes_1.ProductModel.findOne({ id }).lean();
                if (!product) {
                    return null;
                }
                return (0, mapper_1.productMapper)(product);
            }
            catch (e) {
                throw new Error('Does not get product');
            }
        });
    }
};
exports.ProductQuery = ProductQuery;
exports.ProductQuery = ProductQuery = __decorate([
    (0, inversify_1.injectable)()
], ProductQuery);
