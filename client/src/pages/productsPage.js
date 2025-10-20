import {HeaderView} from "../views/header.js"
import {api} from "../api/api.js"
import {createCarouselSection} from "../sections/carouselSection.js"
import {createFilterSection} from "../sections/createFilterSection.js"
import {createRibbonSection} from "../sections/createRibbonSection.js"
import {createProductsList} from "../sections/createProductsList.js"
import {createTitleSection} from "../sections/titleSection.js"
import {Modal} from "../views/modal.js"
import {Loader} from "../views/loader.js"
import {errorController} from "../controllers/errorController.js"
import {navigate, ROUTES} from "../router.js"
import {Cart} from "../views/cart.js"
import {addToCart} from "../utils/cartLocalStorage.js"

export const ProductsPage = async (host) =>{

    const state = {
        products: [],
        filters: {
            productType: 'all',
            vegetarian: false,
            pageNumber: 1,
            pageSize: 18,
            nuts: false,
            spiciness: 0,
        },
        recommendations: [],
        error: null,
    }

    const loader = Loader()
    async function fetchInitialData() {
        let modal
        try {
            modal = Modal(loader)
            host.appendChild(modal)

            const [recs, products] = await Promise.allSettled([
                api.getRecommendations(),
                api.getProducts(state.filters),
            ])

            if (recs.status === "fulfilled") {
                state.recommendations = recs.value
            } else {
                errorController({ message: recs.reason.message || "Failed to load recommendations" })
            }

            if (products.status === "fulfilled") {
                state.products = products.value.items
            } else {
                errorController({ message: products.reason.message || "Failed to load products" })
            }

            if (modal) {
                modal.remove()
            }

            renderPage()
        } catch (err) {
            state.error = err.message
            if (modal) {
                modal.remove()
            }
            errorController({message: err.message})
        }
    }


    async function fetchProducts() {
        productsContainer.classList.add('loading')
        try {
            productsContainer.appendChild(loader)
            const products = await api.getProducts(state.filters)
            state.products = products.items
            renderProducts()
        } catch (err) {
            state.error = err.message
            errorController({message: err.message})
        } finally {
            productsContainer.classList.remove('loading')
            if (loader.parentElement) {
                loader.remove()
            }
        }
    }

    let productsContainer

    function renderPage() {
        const header = HeaderView()
        host.appendChild(header)

        const {cart} = Cart()
        host.appendChild(cart)

        createCarouselSection({ recs: state.recommendations, host })
        createTitleSection({title: 'Our menu', host})

        const {ribbonMenu} = createRibbonSection(host)
        ribbonMenu.addEventListener('ribbon-select', (e) => {
            state.filters.productType = e.detail
            fetchProducts()
        })


        const filterGroup = createFilterSection(host)
        filterGroup.addEventListener('checkbox-change', (e) => {
            const { value, checked } = e.detail

            if (value === 'nuts') {
                state.filters.nuts = checked
            }

            if (value === 'vegetarian') {
                state.filters.vegetarian = checked
            }

            fetchProducts()
        })

        filterGroup.addEventListener('slider-change', (e) => {
            state.filters.spiciness = e.detail
            fetchProducts()
        })

        productsContainer = document.createElement('div')
        productsContainer.className = 'products-container'
        host.appendChild(productsContainer)

        renderProducts()
    }

    function renderProducts() {
        productsContainer.innerHTML = ''
        if (state.products.length === 0) {
            productsContainer.textContent = 'No products found.'
            return
        }
        const {productsList} = createProductsList({ products: state.products, host: productsContainer })
        productsList.addEventListener('product-card-click', e => {
            const id = e.detail.id
            navigate(`${ROUTES.product}${id}`)
        })

        productsList.addEventListener('add-product', e => {
            const id = e.detail.id
            const product = state.products.find(product => product.id === id)
            addToCart(product)
            const {cart} = Cart()
            host.appendChild(cart)
        })
    }

    await fetchInitialData()
    
}