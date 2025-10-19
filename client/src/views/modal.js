import createElement from "../lib/createElement.js"

export const Modal = (element) => {
    const modal = createElement(`
        <div class="modal">
            <div class="modal__overlay"></div>
            <div class="modal__inner">
            </div>
          </div>
    `)

    const modalContent = modal.querySelector('.modal__inner')
    modalContent.appendChild(element)

    return modal
}