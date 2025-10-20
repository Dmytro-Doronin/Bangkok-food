import createElement from "../lib/createElement.js"

export const ProductCard = ({product}) => {
    const card = createElement(`
        <div class="card" data-id="${product.id}">
            <div class="card__top">
                <img src="${product.image}" class="card__image" alt="${product.title}">
                <span class="card__price">€${product.price.toFixed(2)}</span>
            </div>
            <div class="card__body">
                <div class="card__title">${product.title}</div>
                <button type="button" class="card__button">
                    <img src="/client/public/icons/plus-icon.svg" alt="icon">
                </button>
            </div>
        </div>
    `)

    const cardButton = card.querySelector('.card__button')

    return {card, cardButton}
}