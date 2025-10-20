import createElement from "../lib/createElement.js"

export const Form = () => {
    const form = createElement(`
        <form class="cart-form">
            <h5 class="cart-form__title">Delivery</h5>
                <div class="cart-form__group cart-form__group_row">
                    <input type="text" class="cart-form__input" placeholder="Name" required="" value="">
                    <input type="email" class="cart-form__input" placeholder="Email" required="" value="">
                    <input type="tel" class="cart-form__input" placeholder="Phone" required="" value="">
                </div>
                <div class="cart-form__group">
                    <input type="text" class="cart-form__input" placeholder="Address" required="" value="">
                </div>
                <div class="cart-buttons">
                    <div class="cart-buttons__buttons btn-group">
                        <div class="cart-buttons__info">
                            <span class="cart-buttons__info-text">total</span>
                            <span class="cart-buttons__info-price">€0</span>
                        </div>
                        <button type="submit" class="cart-buttons__button btn-group__button button">order</button>
                    </div>
                </div>
        </form>
    `)

    return {form}
}