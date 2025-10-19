import {ProductsList} from "../views/productsList.js"

export const createProductsList = ({products, host}) => {
        const {productsList} = ProductsList({products})
        host.appendChild(productsList)

}