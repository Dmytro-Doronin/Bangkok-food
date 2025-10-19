import {Error} from "../views/error.js"


export const errorController = ({message}) => {
    const error = Error({message})

    document.body.appendChild(error)

    setTimeout(() => {
        error.classList.add('fade-out')
        setTimeout(() => {
            error.remove()
        }, 500)
    }, 5000)
}