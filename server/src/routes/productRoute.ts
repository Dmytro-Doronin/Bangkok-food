import {ProductController} from "../controllers/productController";
import {container} from "../compositionRoot";
import {Router} from "express";

export const productRouter = Router()
const productControllerInstance = container.get(ProductController)


productRouter.get('/', productControllerInstance.getAllProductsController.bind(productControllerInstance))
productRouter.get('/recommendations', productControllerInstance.getRecommendationsController.bind(productControllerInstance))
productRouter.get('/:id', productControllerInstance.getProductByIdController.bind(productControllerInstance))