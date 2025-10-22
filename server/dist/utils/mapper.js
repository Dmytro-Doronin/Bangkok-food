"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productMapper = void 0;
const productMapper = (product) => {
    return {
        id: product.id,
        title: product.title,
        description: product.description,
        price: product.price,
        image: product.image,
        productType: product.productType,
        spiciness: product.spiciness,
        nuts: product.nuts,
        vegetarian: product.vegetarian,
    };
};
exports.productMapper = productMapper;
