import {HeaderView} from "../views/header.js"
import {CarouselView} from "../views/carousel.js"
import {api} from "../api/api.js"
import {carouselController} from "../controllers/carouselController.js"
import {RibbonMenu} from "../views/ribbonMenu.js";
import {ribbonMenuController} from "../controllers/ribbonMenuController.js";
import {StepSlider} from "../views/stepSlider.js";
import {StepSliderController} from "../controllers/stepSliderController.js";
import {Checkbox} from "../views/checkbox.js";

export const ProductsPage = async (host) =>{
    const header = HeaderView()
    host.appendChild(header)

    try {
        const [recs, products] = await Promise.all([api.getRecommendations(), api.getProducts()])

        //Carousel
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

        //Title
        const title = document.createElement('h2')
        title.className = 'title p40'
        title.textContent = 'Our menu'

        host.appendChild(title)

        //RibbonMenu
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

        //Filter group
        const filterGroupEl = document.createElement('div')
        filterGroupEl.className = 'filter-group'

        const stepSliderLabel = document.createElement('label')
        stepSliderLabel.className = 'label'
        stepSliderLabel.textContent = 'Max spiciness'

        //Step slider
        const {
            stepSlider,
            sliderThumb,
            sliderValue,
            progress,
            value,
            steps
        } = StepSlider({
            value: 0,
            steps: 5
        })
        StepSliderController({
            stepSlider,
            sliderThumb,
            sliderValue,
            progress,
            value,
            steps
        })

        stepSlider.addEventListener('slider-change', (event) => {
            console.log(event.detail)
        })


        const {filtersCheckbox} = Checkbox()


        filterGroupEl.appendChild(stepSliderLabel)
        filterGroupEl.appendChild(stepSlider)
        filterGroupEl.appendChild(filtersCheckbox)

        host.appendChild(filterGroupEl)

    } catch (e) {
        console.error(e)
    }

}