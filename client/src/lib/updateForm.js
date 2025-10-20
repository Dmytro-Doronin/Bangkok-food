import {getCartCount} from "../utils/cartLocalStorage.js"

export const updateForm = ({form}) => {
    const { price } = getCartCount()
    const priceEl = form.querySelector('.cart-buttons__info-price')

    if (priceEl) {
        priceEl.textContent = `€${price.toFixed(2)}`
    }
}