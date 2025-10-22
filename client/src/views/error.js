import createElement from "../lib/createElement.js"

export const Error = ({message}) => {
    return createElement(`
        <div class="error">
              <span class="error__message">${message}</span>
        </div>
    `)
}