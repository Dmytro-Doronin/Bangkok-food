import {HeaderView} from "../views/header.js"
import {CarouselView} from "../views/carousel.js"
import {api} from "../api/api.js"
import {carouselController} from "../controllers/carouselController.js"

export const ProductsPage = async (host) =>{
    const header = HeaderView()
    host.appendChild(header)

    try {
        const [recs, products] = await Promise.all([api.getRecommendations(), api.getProducts()])
        const {
            carousel,
            carouselInner,
            leftArrow,
            rightArrow,
            slidesElements
        } = CarouselView(recs)

        carouselController({
            carousel,
            carouselInner,
            leftArrow,
            rightArrow,
            slidesElements
        })


        carousel.addEventListener('product-add', (event) => {
            const productId = event.detail
            console.log(productId)
        })
        host.appendChild(carousel)
    } catch (e) {
        console.error(e)
    }
}