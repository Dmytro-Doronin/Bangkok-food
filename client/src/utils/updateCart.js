import {getCartCount} from "./cartLocalStorage.js"
import {updateCart} from "../lib/updateCart.js"

export const updateCartElement = (cartElement) => {
    const { count, price } = getCartCount()
    updateCart({cartElement, count, price})
}