
import {ProductPage} from "./pages/productPage.js"
import {ProductsPage} from "./pages/productsPage.js"
import {CartPage} from "./pages/cartPage.js"
import {HeaderView} from "./views/header.js"
import {Cart} from "./views/cart.js"


const root = document.getElementById("app")


export const ROUTES = {
    products: "#/products",
    cart: "#/cart",
    product: "#/product/",
}

export function navigate(path) {
    location.hash = path
}

export function router() {
    const hash = location.hash || ROUTES.products

    root.innerHTML = ""

    const header = HeaderView()
    root.appendChild(header)

    const cartElement = Cart()
    root.appendChild(cartElement)

    if (hash === ROUTES.products) {
        ProductsPage(root, cartElement)
        return
    }

    if (hash === ROUTES.cart) {
        CartPage(root)
        return
    }

    if (hash.startsWith(ROUTES.product)) {
        const [, , cardId] = hash.split('/')
        ProductPage({host: root, cartElement, cardId})
        return
    }

    root.innerHTML = "<h2>404 — Page not found</h2>"
}

window.addEventListener("hashchange", router)