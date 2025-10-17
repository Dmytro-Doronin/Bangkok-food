import createElement from "../lib/createElement.js";
import {categories} from "../data.js";

export const RibbonMenu = () => {
    const ribbonMenu = createElement(`
      <div class="ribbon">
        <button class="ribbon__arrow ribbon__arrow_left">
          <img src="/client/public/icons/angle-icon.svg" alt="icon">
        </button>

        <nav class="ribbon__inner">
          ${categories.map(ribbon => viewLinks(ribbon)).join('')}
        </nav>

        <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
          <img src="/client/public/icons/angle-icon.svg" alt="icon">
        </button>
      </div>
    `)

    const ribbonInner = ribbonMenu.querySelector(`.ribbon__inner`)
    const arrowLeft = ribbonMenu.querySelector(`.ribbon__arrow_left`)
    const arrowRight = ribbonMenu.querySelector(`.ribbon__arrow_right`)
    const ribbonElements = ribbonMenu.querySelectorAll('.ribbon__item')


    return {ribbonMenu, ribbonInner, arrowLeft, arrowRight, ribbonElements}
}

function viewLinks(ribbon) {
    return `<a href="#" class="ribbon__item" data-id="${ribbon.id}">${ribbon.name}</a>`
}