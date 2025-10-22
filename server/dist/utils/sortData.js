"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildFilter = buildFilter;
function buildFilter(sortData) {
    const filter = {};
    if (sortData.productType && sortData.productType !== 'all') {
        filter.productType = sortData.productType;
    }
    if (sortData.spiciness !== undefined && sortData.spiciness !== null) {
        filter.spiciness = sortData.spiciness;
    }
    if (sortData.nuts === true) {
        filter.nuts = true;
    }
    if (sortData.vegetarian === true) {
        filter.vegetarian = true;
    }
    return filter;
}
