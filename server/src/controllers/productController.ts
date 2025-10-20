import {ProductQuery} from "../repositories/queryProduct";
import {RequestWithParams, RequestWithQuery, ResponseWithData} from "../types/appTypes";
import {ProductInputModel, ProductOutputModel, ProductType} from "../types/productType";
import {inject, injectable} from "inversify";
import {getLogger} from "nodemailer/lib/shared";
import {toBool, toNum} from "../utils/transformSortData";

@injectable()
export class ProductController {
    constructor(@inject(ProductQuery) protected productQuery: ProductQuery){}

    async getAllProductsController(req: RequestWithQuery<ProductInputModel>, res: ResponseWithData<ProductOutputModel | never[]>) {
        const sortData = {
            productType: req.query.productType,
            spiciness: toNum(req.query.spiciness),
            nuts: toBool(req.query.nuts),
            vegetarian: toBool(req.query.vegetarian),
            pageNumber: toNum(req.query.pageNumber),
            pageSize: toNum(req.query.pageSize)
        }

        const result = await this.productQuery.getAllProductsInDb(sortData)

        if (!result) {
            res.status(404).send([])
            return
        }

        return res.status(200).send(result)
    }

    async getRecommendationsController(req: RequestWithQuery<unknown>, res: ResponseWithData<ProductType[]>) {
        const result = await this.productQuery.getRecommendations()

        if (!result || result.length === 0) {
            return res.status(404).send([])
        }
        return res.status(200).send(result)
    }

    async getProductByIdController(req: RequestWithParams<{id: string}>, res: ResponseWithData<ProductType>) {
        const id = req.params.id
        const result = await this.productQuery.getProduct(id)

        if (!result) {
            return res.sendStatus(404)
        }
        return res.status(200).send(result)

    }
}