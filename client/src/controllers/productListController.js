export const productListController = ({ productsList }) => {
    productsList.addEventListener("click", e => {
        const element = e.target.closest(".card")

        if (!element || !productsList.contains(element)) {
            return
        }

        const productId = element.dataset.id

        const addButton = e.target.closest(".card__button")
        if (addButton) {
            const addEvent = new CustomEvent('add-product', {
                detail: {id: productId},
                bubbles: true,
            })
            productsList.dispatchEvent(addEvent)
            return
        }

        const customEvent = new CustomEvent('product-card-click', {
            detail: {id: productId},
            bubbles: true,
        })
        productsList.dispatchEvent(customEvent)
    })
}