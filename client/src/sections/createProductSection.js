import {ProductView} from "../views/productView.js"
import {productController} from "../controllers/productController.js"

export const createProductSection = ({product, host}) => {
    const productElement = ProductView({product})
    productController({host, productElement})
    host.appendChild(productElement)
    return {productElement}
}