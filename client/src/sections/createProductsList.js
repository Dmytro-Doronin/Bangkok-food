import {ProductsList} from "../views/productsList.js"
import {productListController} from "../controllers/productListController.js"

export const createProductsList = ({products, host}) => {
    const {productsList} = ProductsList({products})
    productListController({productsList})
    host.appendChild(productsList)

    return {productsList}
}