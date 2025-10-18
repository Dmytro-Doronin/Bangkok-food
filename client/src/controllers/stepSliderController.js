import {getPercent} from "../utils/getPercent.js"

export const StepSliderController = ({
     stepSlider,
     sliderThumb,
     sliderValue,
     progress,
     value,
     steps,
}) => {
    let currentValue = value
    const segments = steps - 1
    let isDragging = false
    let nextClick = false

    function updateSlider(newValue) {
        if (newValue < 0 || newValue > segments) {
            return 
        }

        currentValue = newValue
        const percent = getPercent(currentValue, segments)

        progress.style.width = `${percent}%`
        sliderThumb.style.left = `${percent}%`
        sliderValue.textContent = currentValue

        stepSlider.querySelectorAll('.slider__steps span').forEach((span, index) => {
            span.classList.toggle('slider__step-active', index === currentValue)
        })
    }


    function updateSliderByPosition(clientX) {
        const rect = stepSlider.getBoundingClientRect()
        let left = clientX - rect.left
        let leftRelative = left / rect.width

        leftRelative = Math.max(0, Math.min(1, leftRelative))

        const approximateValue = leftRelative * segments
        const newValue = Math.round(approximateValue)

        updateSlider(newValue)

        return newValue
    }
    
    stepSlider.addEventListener('click', (event) => {
        if (nextClick) {
            event.stopImmediatePropagation()
            event.preventDefault()
            nextClick = false
            return
        }
        if (isDragging) {
            return
        }
        const newValue = updateSliderByPosition(event.clientX)
        updateSlider(newValue)
        stepSlider.dispatchEvent(new CustomEvent('slider-change', {
            detail: currentValue,
            bubbles: true,
        }))
    }, true )

    sliderThumb.addEventListener("pointerdown", (event) => {
        event.preventDefault()
        isDragging = true
        sliderThumb.classList.add("slider__thumb_dragging")

        document.addEventListener("pointermove", onPointerMove)
        document.addEventListener("pointerup", onPointerUp)
    })

    function onPointerMove(event) {
        if (!isDragging) {
            return 
        }
        const value = updateSliderByPosition(event.clientX)
        updateSlider(value)
    }

    function onPointerUp(event) {
        if (!isDragging) {
            return
        }
        isDragging = false
        sliderThumb.classList.remove("slider__thumb_dragging")

        document.removeEventListener("pointermove", onPointerMove)
        document.removeEventListener("pointerup", onPointerUp)

        const newValue = updateSliderByPosition(event.clientX)
        updateSlider(newValue)

        stepSlider.dispatchEvent(new CustomEvent('slider-change', {
            detail: currentValue,
            bubbles: true,
        }))

        nextClick = true
    }

}