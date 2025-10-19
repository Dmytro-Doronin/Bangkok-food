import createElement from "../lib/createElement.js"
import {ProductCard} from "./productCard.js"

export const ProductsList = ({products}) => {
    const productsList = createElement(`
        <div class="product-list"></div>
    `)

    products.forEach(product => {
        const { card } = ProductCard({ product })
        productsList.appendChild(card)
    })

    return { productsList }
}