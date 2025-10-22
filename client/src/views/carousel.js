import createElement from "../lib/createElement.js";

export const CarouselView = (slides = []) => {
    const innerHtml = slides.length ? slides.map(SlideView).join('') : `<div>No recommendations</div>`

    const carousel = createElement(`
        <div class="carousel">
            <div class="carousel__arrow carousel__arrow_right">
                <img src="/client/public/icons/angle-icon.svg" alt="icon">
            </div>
            <div class="carousel__arrow carousel__arrow_left">
                <img src="/client/public/icons/angle-left-icon.svg" alt="icon">
            </div>
            <div class="carousel__inner">
                ${innerHtml}
            </div>
        </div>
    `)


    const leftArrow = carousel.querySelector('.carousel__arrow_left')
    const rightArrow = carousel.querySelector('.carousel__arrow_right')
    const carouselInner = carousel.querySelector('.carousel__inner')
    const slidesElements = carousel.querySelectorAll('.carousel__slide')

    return {carousel, leftArrow, rightArrow, carouselInner, slidesElements}

}

export const SlideView = (slide) => {
    return `
        <div class="carousel__slide" data-id="${slide.id}">
            <img src="${slide.image}" class="carousel__img" alt="slide">
            <div class="carousel__caption">
              <span class="carousel__price">€${slide.price.toFixed(2)}</span>
            <div class="carousel__title">${slide.title}</div>
              <button type="button" class="carousel__button">
                <img src="/client/public/icons/plus-icon.svg" alt="icon">
              </button>
            </div>
        </div>
    `
}