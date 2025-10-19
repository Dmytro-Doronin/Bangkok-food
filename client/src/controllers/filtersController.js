import { checkboxController } from './checkboxController.js'
import { StepSliderController } from './stepSliderController.js'

export const filtersController = ({
    filterGroup,
    stepSlider,
    sliderThumb,
    sliderValue,
    progress,
    value,
    steps,
    nutsCheckbox,
    veganCheckbox
}) => {
    StepSliderController({
        stepSlider,
        sliderThumb,
        sliderValue,
        progress,
        value,
        steps
    })
    checkboxController({ checkboxElement: nutsCheckbox })
    checkboxController({ checkboxElement: veganCheckbox })

    filterGroup.addEventListener('checkbox-change', (e) => {
        console.log(e.detail)
    })

    filterGroup.addEventListener('slider-change', (e) => {
        console.log(e.detail)
    })
}
