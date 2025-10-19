import {RibbonMenu} from "../views/ribbonMenu.js"
import {ribbonMenuController} from "../controllers/ribbonMenuController.js"

export const createRibbonSection = (host) => {
        const {
            ribbonMenu,
            ribbonElements,
            arrowLeft,
            arrowRight,
            ribbonInner
        } = RibbonMenu()

        ribbonMenuController({
            ribbonMenu,
            ribbonElements,
            arrowLeft,
            arrowRight,
            ribbonInner
        })

        host.appendChild(ribbonMenu)

    return {ribbonMenu}
}