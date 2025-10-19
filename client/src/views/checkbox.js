import createElement from "../lib/createElement.js";

export const Checkbox = ({title}) => {
    const filtersCheckbox = createElement(`
        <div class="filters__checkbox">
              <input class="styled-checkbox" id="${title}" type="checkbox" value="1">
              <label for="${title}">
                <span class="filters__label label">${title}</span>
              </label>
        </div>
    `)

    return {filtersCheckbox}
}