import {StepSlider} from "../views/stepSlider.js"
import {Checkbox} from "../views/checkbox.js"

export const FiltersSection = () => {
    const filterGroup = document.createElement('div')
    filterGroup.className = 'filter-group'

    const label = document.createElement('label')
    label.className = 'label'
    label.textContent = 'Max spiciness'
    filterGroup.appendChild(label)

    const { stepSlider, sliderThumb, sliderValue, progress, value, steps } = StepSlider({ value: 0, steps: 5 })
    filterGroup.appendChild(stepSlider)

    const { filtersCheckbox: nutsCheckbox } = Checkbox({ title: 'No nuts', value: 'nuts' })
    const { filtersCheckbox: veganCheckbox } = Checkbox({ title: 'Vegetarian only', value: 'vegetarian' })
    filterGroup.appendChild(nutsCheckbox)
    filterGroup.appendChild(veganCheckbox)

    return {
        filterGroup,
        stepSlider,
        sliderThumb,
        sliderValue,
        progress,
        value,
        steps,
        nutsCheckbox,
        veganCheckbox
    }
}
