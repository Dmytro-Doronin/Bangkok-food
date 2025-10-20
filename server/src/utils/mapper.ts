import {WithId} from "mongodb";
import {ProductType} from "../types/productType";

export const productMapper = (product: WithId<ProductType>): ProductType  => {
    return {
        id:	product.id,
        title: product.title,
        description: product.description,
        price:	product.price,
        image:	product.image,
        productType: product.productType,
        spiciness: product.spiciness,
        nuts: product.nuts,
        vegetarian: product.vegetarian,
    }
}