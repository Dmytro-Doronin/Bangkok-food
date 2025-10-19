import createElement from "../lib/createElement.js";

export const Checkbox = () => {
    const filtersCheckbox = createElement(`
        <div class="filters__checkbox">
              <input class="styled-checkbox" id="nuts-checkbox" type="checkbox" value="1">
              <label for="nuts-checkbox">
                <span class="filters__label">No nuts</span>
              </label>
        </div>
    `)

    return {filtersCheckbox}
}