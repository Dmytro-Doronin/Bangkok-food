import {filtersController} from "../controllers/filtersController.js"
import {FiltersSection} from "./filtersSection.js"

export const createFilterSection = (host) => {
    const {
        filterGroup,
        stepSlider,
        sliderThumb,
        sliderValue,
        progress,
        value,
        steps ,
        nutsCheckbox,
        veganCheckbox
    } = FiltersSection()
    filtersController({
        filterGroup,
        stepSlider,
        sliderThumb,
        sliderValue,
        progress,
        value,
        steps,
        nutsCheckbox,
        veganCheckbox
    })
    host.appendChild(filterGroup)

    return filterGroup
}