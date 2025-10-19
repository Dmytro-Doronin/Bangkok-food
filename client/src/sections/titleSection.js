export const createTitleSection = ({ title, host }) => {
    const titleElement = document.createElement('h2')
    titleElement.className = 'title p40'
    titleElement.textContent = `${title}`
    host.appendChild(titleElement)
}