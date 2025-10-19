import { FilterQuery } from 'mongoose'
import {FilterType, ProductInputModel} from "../types/productType";

export function buildFilter(sortData: ProductInputModel): FilterQuery<FilterType> {
    const filter: FilterQuery<FilterType> = {}

    if (sortData.productType && sortData.productType !== 'all') {
        filter.productType = sortData.productType
    }

    if (sortData.spiciness !== undefined && sortData.spiciness !== null) {
        filter.spiciness = sortData.spiciness
    }

    if (sortData.nuts === true) {
        filter.nuts = true
    }

    if (sortData.vegetarian === true) {
        filter.vegetarian = true
    }

    return filter
}