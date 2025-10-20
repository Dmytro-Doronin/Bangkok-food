import createElement from "../lib/createElement.js"
import {getCartCount} from "../utils/cartLocalStorage.js"

export const Cart = () => {
    const {count, price} = getCartCount()
    const cart = createElement(`
        <div class="cart">
            <div class="cart__wrapper">
                <div class="cart__info">
                     <span class="cart__count">${count}</span>
                     <span class="cart__price">€${price}</span>
                </div>
                
            </div>
        </div>
    `)

    return {cart}
}