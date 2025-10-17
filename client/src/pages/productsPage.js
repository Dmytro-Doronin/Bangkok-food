import {HeaderView} from "../views/header.js"
import {CarouselView} from "../views/carousel.js"
import {api} from "../api/api.js"
import {carouselController} from "../controllers/carouselController.js"
import {RibbonMenu} from "../views/ribbonMenu.js";
import {ribbonMenuController} from "../controllers/ribbonMenuController.js";

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


        const title = document.createElement('h2')
        title.className = 'title p40'
        title.textContent = 'Our menu'

        host.appendChild(title)

        const {
            ribbonMenu,
            ribbonElements,
            arrowLeft,
            arrowRight,
            ribbonInner
        } = RibbonMenu()

        ribbonMenuController({
            ribbonMenu,
            ribbonElements,
            arrowLeft,
            arrowRight,
            ribbonInner
        })

        ribbonMenu.addEventListener('ribbon-select', (event) => {
            console.log(event.detail)
        })

        host.appendChild(ribbonMenu)
    } catch (e) {
        console.error(e)
    }



}