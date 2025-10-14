import {ProductQuery} from "../repositories/queryProduct";
import {RequestWithQuery, ResponseWithData} from "../types/appTypes";
import {ProductInputModel, ProductOutputModel} from "../types/productType";
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
}