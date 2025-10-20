export const cartListController = ({ cartList }) => {
    cartList.addEventListener("click", e => {
        const element = e.target.closest(".cart-product")

        if (!element || !cartList.contains(element)) {
            return
        }

        const productId = element.dataset.id
        const plusButton = e.target.closest(".cart-counter__button_plus")
        const minusButton = e.target.closest(".cart-counter__button_minus")

        if (plusButton) {
            e.stopPropagation()
            const customEvent = new CustomEvent("cart-increment", {
                detail: { id: productId, element },
                bubbles: true,
            })
            cartList.dispatchEvent(customEvent)
            return
        }

        if (minusButton) {
            e.stopPropagation()
            const customEvent = new CustomEvent("cart-decrement", {
                detail: { id: productId, element },
                bubbles: true,
            })
            cartList.dispatchEvent(customEvent)
            return
        }
    })
}