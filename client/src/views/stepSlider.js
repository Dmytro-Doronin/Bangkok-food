import createElement from "../lib/createElement.js";
import {getPercent} from "../utils/getPercent.js";

export const StepSlider = ({value = 0, steps = 5}) => {
    const segments = steps - 1

    const stepSlider = createElement(`
        <div class="slider">
              <div class="slider__thumb" style="left: ${getPercent(value, segments)}%;">
                   <span class="slider__value">${value}</span>
              </div>
              <div class="slider__progress" style="width: ${getPercent(value, segments)}%;"></div>
              <div class="slider__steps">
                    ${Array.from({ length: steps }, (_, index) => {
                        const activeClass = index === value ? 'slider__step-active' : ''
                        return `<span class="${activeClass}" data-index="${index}"></span>`
                    }).join('')}
              </div>
        </div>
    `)

    const sliderThumb = stepSlider.querySelector('.slider__thumb')
    const sliderValue = stepSlider.querySelector('.slider__value')
    const progress = stepSlider.querySelector('.slider__progress')

    return {stepSlider, sliderThumb, sliderValue, progress, value, steps}
}

