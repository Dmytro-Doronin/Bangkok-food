export function renderLoading(target, element) {
    const loaderSpace = document.querySelector(target)
    loaderSpace.innerHTML = ``
    loaderSpace.appendChild(element)
}