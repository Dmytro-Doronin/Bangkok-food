const baseUrl = 'http://localhost:3002/api/products'

export async function getRecommendations() {
    const res = await fetch(`${baseUrl}/recommendations`)
    if (!res.ok) {
        throw new Error('Failed to load recommendations')
    }
    return res.json()
}

export async function getProducts(filters = {}) {
    const url = new URL(baseUrl)

    Object.entries(filters).forEach(([key, value]) => {
        if (value !== null && value !== undefined && value !== false) {
            url.searchParams.append(key, value)
        }
    })

    const res = await fetch(url)
    if (!res.ok) {
        throw new Error('Failed to load products')
    }
    return res.json()
}

export const api = { getRecommendations, getProducts };