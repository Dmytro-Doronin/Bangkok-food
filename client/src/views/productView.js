import createElement from "../lib/createElement.js"

export const ProductView = ({product}) => {
    return createElement(`
        <div class="product" data-id="${product.id}">
             <button type="button" class="back-button">
                ← Back
             </button>
            <img class="product__img" src="${product.image}" alt="">
            <h1 class="product__title">${product.title}</h1>
            <div class="product__description">${product.description}</div>
            <div class="product__info">
                <div class="product__spiciness">Spiciness: ${product.spiciness}</div>
                <div class="product__nuts">Nuts: ${product.nuts ? 'Yes' : 'No'}</div>
                <div class="product__vegetarian">Vegetarian: ${product.vegetarian ? 'Yes' : 'No'}</div>
            </div>
            <button type="button" class="add-button">
                <img src="./public/icons/plus-icon.svg" alt="icon">
            </button>
        </div>
    `)

}