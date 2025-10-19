import {HeaderView} from "../views/header.js"
import {api} from "../api/api.js"
import {createCarouselSection} from "../sections/carouselSection.js"
import {createFilterSection} from "../sections/createFilterSection.js"
import {createRibbonSection} from "../sections/createRibbonSection.js"
import {createProductsList} from "../sections/createProductsList.js"
import {createTitleSection} from "../sections/titleSection.js"

export const ProductsPage = async (host) =>{

    const state = {
        products: [],
        filters: {
            productType: 'all',
            vegetarian: false,
            pageNumber: 1,
            pageSize: 6,
            nuts: false,
            spiciness: 0,
        },
        recommendations: [],
        loading: false,
        error: null,
    }

    async function fetchInitialData() {
        try {
            state.loading = true
            // renderLoading()
            const [recs, products] = await Promise.all([
                api.getRecommendations(),
                api.getProducts(state.filters),
            ])
            state.recommendations = recs
            state.products = products.items
            state.loading = false
            renderPage()
        } catch (err) {
            state.error = err.message
            renderError()
        }
    }

    async function fetchProducts() {
        try {
            state.loading = true
            renderProductsLoading()
            const products = await api.getProducts(state.filters)
            state.products = products.items
            renderProducts()
        } catch (err) {
            state.error = err.message
            renderError()
        }
    }

    // function renderLoading() {
    //     host.innerHTML = `<div class="loading">Loading...</div>`
    // }

    function renderError() {
        host.innerHTML = `<div class="error">Error: ${state.error}</div>`
    }

    function renderProductsLoading() {
        document.querySelector('.product-list').innerHTML = `<div>Loading...</div>`
    }

    let productsContainer

    function renderPage() {
        const header = HeaderView()
        host.appendChild(header)

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
        createProductsList({ products: state.products, host: productsContainer })
    }

    await fetchInitialData()
    
}