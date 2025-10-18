import createElement from "../lib/createElement.js";

export const HeaderView = () => {

    return createElement(`
        <div class="header container">
             <h1 class="header__logo title">Bangkok Express</h1>
             <h3 class="header__subtitle">Great food・Free delivery・Fair price</h3>
        </div>
    `)
}