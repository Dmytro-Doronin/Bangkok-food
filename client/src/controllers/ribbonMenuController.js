
export const ribbonMenuController = ({
    ribbonMenu,
    ribbonElements,
    arrowLeft,
    arrowRight,
    ribbonInner
}) => {

    let scrollLeft = 0
    let scrollRight = 0

    function getSliderWidth() {
        scrollLeft = ribbonInner.scrollLeft

        let scrollWidth = ribbonInner.scrollWidth
        let clientWidth = ribbonInner.clientWidth

        scrollRight = scrollWidth - scrollLeft - clientWidth
    }

    function scrollToRight() {
        ribbonInner.scrollBy(350, 0)
    }

    function scrollToLeft() {
        ribbonInner.scrollBy(-350, 0)
    }

    function updateCarousel() {
        getSliderWidth()
        if (scrollRight <= 10) {
            arrowRight.classList.remove('ribbon__arrow_visible')
        } else {
            arrowRight.classList.add('ribbon__arrow_visible')
        }

        if (scrollLeft <= 1) {
            arrowLeft.classList.remove('ribbon__arrow_visible')
        } else {
            arrowLeft.classList.add('ribbon__arrow_visible')
        }
    }

    function setActiveLink(element) {
        ribbonElements.forEach(el => {
            el.classList.remove('ribbon__item_active')
        })

        element.classList.add('ribbon__item_active')
    }

    function onProductSelect(event) {
        event.preventDefault()
        const element = event.target.closest('.ribbon__item')
        setActiveLink(element)
        const id = element.dataset.id
        const customEvent = new CustomEvent("ribbon-select", {
            detail: id,
            bubbles: true
        })
        ribbonMenu.dispatchEvent(customEvent)
    }

    ribbonMenu.addEventListener('click', e => {
        if (e.target.closest('.ribbon__arrow_right')) {
            scrollToRight()
        }

        if (e.target.closest('.ribbon__arrow_left')) {
            scrollToLeft()
        }

        if (e.target.closest('.ribbon__item')) {
            onProductSelect(e)
        }
    })

    ribbonInner.addEventListener('scroll', () => {
        updateCarousel()
    })
}