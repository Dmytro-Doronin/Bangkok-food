import {createTitle} from "../views/title.js"

export const createTitleSection = ({ title, host }) => {
    const {titleElement} = createTitle({title})
    host.appendChild(titleElement)
}