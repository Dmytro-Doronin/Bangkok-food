import {HeaderView} from "../views/header.js"
import {api} from "../api/api.js"
import {errorController} from "../controllers/errorController.js"
import {Modal} from "../views/modal.js"
import {Loader} from "../views/loader.js"
import {createProductSection} from "../sections/createProductSection.js"

export const ProductPage = async (host, {cardId}) => {
    const header = HeaderView()
    host.appendChild(header)

    const loader = Loader()
    async function fetchProduct() {
        let modal
        try {
            modal = Modal(loader)
            host.appendChild(modal)
            const product = await api.getProduct(cardId)
            const {productElement} = createProductSection({product, host})
            productElement.addEventListener('add-product-from-page', (e) => {
                console.log(e.detail.id)
            })
        } catch (err) {
            if (modal) {
                modal.remove()
            }
            errorController({message: err.message})
        } finally {
            if (modal) {
                modal.remove()
            }
        }
    }

    await fetchProduct()

}