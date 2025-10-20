import {updateCartElement} from "../utils/updateCart.js"
import {addToCart, getCart, removeFromCart} from "../utils/cartLocalStorage.js"
import {createCartListSection} from "../sections/createCartListSection.js"
import {updateCartItemElement} from "../lib/updateCartItem.js"

export function CartPage(host, cartElement) {
    updateCartElement(cartElement)
    const cartProducts = getCart()
    const cartValues = Object.values(cartProducts)

    if (!cartValues.length ) {
        const noElem = document.createElement("div")
        noElem.textContent = "Cart is empty!"
        host.appendChild(noElem)
        return
    }

    const {cartList} = createCartListSection({products: cartValues, host})

    cartList.addEventListener("cart-increment", e => {
        const { id, element } = e.detail
        const cartBefore = getCart()
        const product = cartBefore[id]

        if (product) {
            addToCart(product)
            const updatedCart = getCart()
            const updatedProduct = updatedCart[id]
            updateCartItemElement({element, product: updatedProduct})
            updateCartElement(cartElement)
        }

    })

    cartList.addEventListener("cart-decrement", e => {
        const { id, element } = e.detail
        removeFromCart(id)
        const cart = getCart()
        const product = cart[id]
        if (product) {
            updateCartItemElement({element, product})
        } else {
            element.remove()
        }
        updateCartElement(cartElement)
    })

}