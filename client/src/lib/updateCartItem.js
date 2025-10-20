export const updateCartItemElement = ({element, product}) => {
    const countEl = element.querySelector(".cart-counter__count")
    const priceEl = element.querySelector(".cart-product__price")

    countEl.textContent = product.quantity
    priceEl.textContent = `€${(product.price * product.quantity).toFixed(2)}`
}