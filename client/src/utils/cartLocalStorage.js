
const cartKey = 'cart'

export const getCart = () => {
    const data = localStorage.getItem(cartKey)
    return data ? JSON.parse(data) : {}
}

export const saveCart = (cart) => {
    localStorage.setItem(cartKey, JSON.stringify(cart))
}


export const  addToCart = (product) => {
    const cart = getCart()
    const existing = cart[product.id]

    if (existing) {
        existing.quantity += 1
    } else {
        cart[product.id] = { ...product, quantity: 1 }
    }

    saveCart(cart)
}

export const removeFromCart = (productId) => {
    const cart = getCart()

    if (!cart[productId]) {
        return
    }

    cart[productId].quantity -= 1

    if (cart[productId].quantity <= 0) {
        delete cart[productId]
    }

    saveCart(cart)
}

export const getCartCount = () => {
    const cart = getCart()
    const count = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0)
    const price = Object.values(cart).reduce((sum, item) => sum + item.price * item.quantity, 0)
    return {count, price}
}