export type productType =
    'all' |
    'salads' |
    'soups' |
    'chicken-dishes' |
    'beef-dishes' |
    'seafood-dishes' |
    'vegetable-dishes' |
    'bits-bites' |
    'on-the-side'

export type ProductType = {
    id:	string
    title: string
    description: string
    price:	number
    image:	string
    productType: productType
    spiciness: number
    nuts: boolean
    vegetarian: boolean
}


export type ProductInputModel = {
    productType?: productType
    spiciness?: number
    nuts?: boolean
    vegetarian?: boolean
    pageNumber?: number
    pageSize?: number
}

export type ProductOutputModel = {
    pageNumber?: number
    pagesCount?: number
    totalCount?: number
    pageSize?: number
    items: ProductType[]
}

export type FilterType = {
    productType?: productType
    spiciness?: number
    nuts?: boolean
    vegetarian?: boolean
}