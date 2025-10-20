export const productController = ({productElement}) => {
    productElement.addEventListener('click', (e) => {
        const element = e.target.closest(".product")

        if (!element || !productElement.contains(element)) {
            return
        }

        const productId = element.dataset.id
        const addButton = e.target.closest(".add-button")
        const backButton = e.target.closest(".back-button")
        if (addButton) {
            const addEvent = new CustomEvent('add-product-from-page', {
                detail: {id: productId},
                bubbles: true,
            })
            productElement.dispatchEvent(addEvent)
            return
        }

        if (backButton) {
            window.history.back()
            return
        }

    })
}