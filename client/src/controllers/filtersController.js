import { checkboxController } from './checkboxController.js'
import { StepSliderController } from './stepSliderController.js'

export const filtersController = ({
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
}
