const baseUrl = 'http://localhost:3002/api/products'

export async function getRecommendations() {
    const res = await fetch(`${baseUrl}/recommendations`)
    if (!res.ok) {
        throw new Error(`Failed to load recommendations ${res.status}`)
    }
    return res.json()
}

export async function getProducts(filters = {}) {
    const url = new URL(baseUrl)

    Object.entries(filters).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
            url.searchParams.set(key, String(value))
        }
    })

    const res = await fetch(url)

    if (!res.ok) {
        throw new Error(`Failed to load products ${res.status}`)
    }
    return res.json()
}

export async function getProduct(productId) {
    const res = await fetch(`${baseUrl}/${productId}`)

    if (!res.ok) {
        throw new Error(`Failed to load product ${productId} status ${res.status}`)
    }
    return res.json()

}

export const api = { getRecommendations, getProducts };