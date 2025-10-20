
export const updateCart = ({cartElement,count, price}) => {
    const countEl = cartElement.querySelector('.cart__count')
    const priceEl = cartElement.querySelector('.cart__price')

    if (countEl) {
        countEl.textContent = count
    }
    if (priceEl) {
        priceEl.textContent = `€${price.toFixed(2)}`
    }
}