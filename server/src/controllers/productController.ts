import {ProductQuery} from "../repositories/queryProduct";
import {RequestWithQuery, ResponseWithData} from "../types/appTypes";
import {ProductInputModel, ProductOutputModel, ProductType} from "../types/productType";
import {inject, injectable} from "inversify";

@injectable()
export class ProductController {
    constructor(@inject(ProductQuery) protected productQuery: ProductQuery){}

    async getAllProductsController(req: RequestWithQuery<ProductInputModel>, res: ResponseWithData<ProductOutputModel>) {
        const sortData = {
            productType: req.query.productType,
            spiciness: req.query.spiciness,
            nuts: req.query.nuts,
            vegetarian: req.query.vegetarian,
            pageNumber: req.query.pageNumber,
            pageSize: req.query.pageSize
        }

        const result = await this.productQuery.getAllProductsInDb(sortData)

        if (!result) {
            res.sendStatus(404)
            return
        }

        return res.status(200).send(result)
    }

    async getRecommendationsController(req: RequestWithQuery<unknown>, res: ResponseWithData<ProductType[]>) {
        const result = await this.productQuery.getRecommendations()

        if (!result || result.length === 0) {
            return res.status(200).send([])
        }
        return res.status(200).send(result)

    }
}