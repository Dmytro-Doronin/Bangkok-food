import {navigate, router} from './router.js'

if (!location.hash) {
    navigate('#/products')
} else {
    router()
}

