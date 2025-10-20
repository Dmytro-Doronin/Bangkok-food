import createElement from "../lib/createElement.js"
import {CartProduct} from "./cartProduct.js"

export const cartProductsList = ({products}) => {
    const cartList = createElement(`
        <div class="cart-list">
            <button type="button" class="back-button">
                ← Back
            </button>
        </div>
    `)

    Object.values(products).forEach(product => {
        const { cartItemElement } = CartProduct({ product })
        const countElement = cartItemElement.querySelector('.cart-counter__count')
        const priceElement = cartItemElement.querySelector('.cart-product__price')

        countElement.textContent = product.quantity
        priceElement.textContent = `€${(product.price * product.quantity).toFixed(2)}`

        cartList.appendChild(cartItemElement)
    })

    return {cartList}
}