
import {ProductInputModel, ProductOutputModel, ProductType} from "../types/productType";
import {ProductModel, RecommendationsModel} from "../db/schemes";
import {buildFilter} from "../utils/sortData";
import {injectable, inject} from "inversify";

@injectable()
export class ProductQuery {
    async getAllProductsInDb(sortData: ProductInputModel):Promise<ProductOutputModel | null> {
        const pageNumber = sortData.pageNumber ?? 1
        const pageSize = sortData.pageSize ?? 10

        const filter = buildFilter(sortData)

        try {
            const products: ProductType[] = await ProductModel
                .find(filter)
                .skip((+pageNumber - 1) * +pageSize)
                .limit(+pageSize)
                .lean()

            if (!products) {
                return null
            }

            const totalCount: number = await ProductModel.countDocuments(filter)

            const pagesCount = Math.ceil(totalCount / +pageSize)

            return {
                pagesCount,
                pageNumber: +pageNumber,
                pageSize: +pageSize,
                totalCount,
                items: products
            }
        } catch (e) {
            throw new Error('Does not get all products')
        }

    }

    async getRecommendations(): Promise<ProductType[] | null> {

        try {
            const recommendations: ProductType[] = await RecommendationsModel.find().lean()
            if (!recommendations) {
                return null
            }

            return recommendations

        } catch (e) {
            throw new Error('Does not get all recommendations')
        }

    }
}
