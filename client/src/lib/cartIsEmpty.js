export const cartIsEmpty = ({host}) => {
    const empty = document.createElement("div")
    empty.className = "cart-empty"
    empty.textContent = "Your cart is empty!"
    host.appendChild(empty)
}