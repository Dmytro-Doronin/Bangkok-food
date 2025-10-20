export const carouselController = ({carousel, leftArrow, rightArrow, carouselInner, slidesElements}) => {

    let currentSlideIndex = 0
    let carouselWidth = getSlideWidth()
    updateArrows()
    function getSlideWidth() {
        return slidesElements.length ? carousel.querySelector('.carousel__slide').offsetWidth : 0
    }

    function nextSlide() {
        if (currentSlideIndex < slidesElements.length - 1) {
            currentSlideIndex++
            updateCarousel()
        }
    }

    function prevSlide() {
        if (currentSlideIndex > 0) {
            currentSlideIndex--
            updateCarousel()
        }
    }

    function updateCarousel() {
        const offset = -currentSlideIndex * carouselWidth
        carouselInner.style.transform = `translateX(${offset}px)`
        updateArrows()
    }

    function updateArrows() {
        leftArrow.style.display = currentSlideIndex === 0 ? 'none' : ''
        rightArrow.style.display = currentSlideIndex === slidesElements.length - 1 ? 'none' : ''
    }

    function onProductAdd(event) {
        const slide = event.target.closest('.carousel__slide')
        const id = slide.dataset.id
        const customEvent = new CustomEvent("product-add", {
            detail: {id},
            bubbles: true
        })
        carousel.dispatchEvent(customEvent)
    }


    carousel.addEventListener('click', (e) => {
        carouselWidth = getSlideWidth()
        if (e.target.closest('.carousel__arrow_right')) nextSlide()
        if (e.target.closest('.carousel__arrow_left')) prevSlide()
        if (e.target.closest('.carousel__button')) onProductAdd(e)
    })

}