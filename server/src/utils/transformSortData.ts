export const toBool = (v: unknown) => {
    return v === 'true' ? true : v === 'false' ? false : undefined
}


export const toNum = (v: unknown) => {
    return typeof v === 'string' && v.trim() !== '' ? Number(v) : undefined
}
