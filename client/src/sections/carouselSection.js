import {CarouselView} from "../views/carousel.js"
import {carouselController} from "../controllers/carouselController.js"

export const createCarouselSection = ({recs, host}) => {
    const { carousel, carouselInner, leftArrow, rightArrow, slidesElements } = CarouselView(recs)
    carouselController({ carousel, carouselInner, leftArrow, rightArrow, slidesElements })

    host.appendChild(carousel)

    return {carousel}
}