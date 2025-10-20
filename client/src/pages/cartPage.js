import {updateCartElement} from "../utils/updateCart.js"
import {addToCart, getCart, removeFromCart} from "../utils/cartLocalStorage.js"
import {createCartListSection} from "../sections/createCartListSection.js"
import {updateCartItemElement} from "../lib/updateCartItem.js"
import {createFormSection} from "../sections/createFormSection.js"
import {updateForm} from "../lib/updateForm.js"
import {cartIsEmpty} from "../lib/cartIsEmpty.js"

export function CartPage(host, cartElement) {

    const cartProducts = getCart()
    const cartValues = Object.values(cartProducts)

    if (!cartValues.length ) {
        cartIsEmpty({host})
        return
    }

    const {cartList} = createCartListSection({products: cartValues, host})

    const { form } = createFormSection({
        host,
        onSubmit: (data) => {
            const cart = getCart()
            const order = { ...data, items: Object.values(cart) }


            alert("Order submitted!")
        },
    })
    updateCartElement(cartElement)
    updateForm({form})

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
            updateForm({form})
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
        updateForm({form})

        if (Object.keys(getCart()).length === 0) {
            form.remove()
            cartIsEmpty({host})
        }
    })
    host.appendChild(form)

}