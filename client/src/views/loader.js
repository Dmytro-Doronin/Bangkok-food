import createElement from "../lib/createElement.js";

export const Loader = () => {
    return createElement(`
        <div class='loader-wrapper'>
            <div class='loader'></div>
        </div>
    `)
}

