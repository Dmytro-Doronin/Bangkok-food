import createElement from "../lib/createElement.js"

export const CartProduct = ({product}) => {
    const cartItemElement = createElement(`
        <div class="cart-product" data-id="${product.id}">
            <div class="cart-product__img">
              <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="cart-product__info">
                <div class="cart-product__title">${product.title}</div>
                    <div class="cart-product__price-wrap">
                        <div class="cart-counter">
                            <button type="button" class="cart-counter__button cart-counter__button_minus">
                                <img src="/client/public/icons/square-minus-icon.svg" alt="minus">
                            </button>
                            <span class="cart-counter__count">${product.quantity}</span>
                            <button type="button" class="cart-counter__button cart-counter__button_plus">
                                <img src="/client/public/icons/square-plus-icon.svg" alt="plus">
                            </button>
                        </div>
                        <div class="cart-product__price">€${(product.price * product.quantity).toFixed(2)}</div>
                    </div>
                </div>
        </div>
    `)

    return {cartItemElement}
}