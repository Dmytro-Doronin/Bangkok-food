import {cartProductsList} from "../views/cartProductsList.js"
import {cartListController} from "../controllers/cartListController.js"


export const createCartListSection = ({products, host}) => {
    const {cartList} = cartProductsList({products})
    cartListController({cartList})
    host.appendChild(cartList)

    return {cartList}
}