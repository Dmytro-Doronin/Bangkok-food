const baseUrl = 'http://localhost:3002/api/products'

export async function getRecommendations() {
    const res = await fetch(`${baseUrl}/recommendations`)
    if (!res.ok) {
        throw new Error('Failed to load recommendations')
    }
    return res.json()
}

export async function getProducts() {
    const res = await fetch(`${baseUrl}`)
    if (!res.ok) {
        throw new Error('Failed to load products')
    }
    return res.json()
}

export const api = { getRecommendations, getProducts };