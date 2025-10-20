import {addToCart} from "./cartLocalStorage.js"
import {updateCartElement} from "./updateCart.js"

export const addProductToCart = ({cartElement, products, id}) => {
    const product = products.find(product => product.id === id)
    addToCart(product)
    updateCartElement(cartElement)
}