"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.ProductController = void 0;
const queryProduct_1 = require("../repositories/queryProduct");
const inversify_1 = require("inversify");
const transformSortData_1 = require("../utils/transformSortData");
let ProductController = class ProductController {
    constructor(productQuery) {
        this.productQuery = productQuery;
    }
    getAllProductsController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const sortData = {
                productType: req.query.productType,
                spiciness: (0, transformSortData_1.toNum)(req.query.spiciness),
                nuts: (0, transformSortData_1.toBool)(req.query.nuts),
                vegetarian: (0, transformSortData_1.toBool)(req.query.vegetarian),
                pageNumber: (0, transformSortData_1.toNum)(req.query.pageNumber),
                pageSize: (0, transformSortData_1.toNum)(req.query.pageSize)
            };
            const result = yield this.productQuery.getAllProductsInDb(sortData);
            if (!result) {
                res.status(404).send([]);
                return;
            }
            return res.status(200).send(result);
        });
    }
    getRecommendationsController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.productQuery.getRecommendations();
            if (!result || result.length === 0) {
                return res.status(404).send([]);
            }
            return res.status(200).send(result);
        });
    }
    getProductByIdController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const result = yield this.productQuery.getProduct(id);
            if (!result) {
                return res.sendStatus(404);
            }
            return res.status(200).send(result);
        });
    }
};
exports.ProductController = ProductController;
exports.ProductController = ProductController = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(queryProduct_1.ProductQuery)),
    __metadata("design:paramtypes", [queryProduct_1.ProductQuery])
], ProductController);
