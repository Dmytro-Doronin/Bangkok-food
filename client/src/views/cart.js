import createElement from "../lib/createElement.js"

export const Cart = () => {
    return createElement(`
        <div class="cart">
            <div class="cart__wrapper">
                <div class="cart__info">
                     <span class="cart__count">0</span>
                     <span class="cart__price">€0</span>
                </div>
                
            </div>
        </div>
    `)
}