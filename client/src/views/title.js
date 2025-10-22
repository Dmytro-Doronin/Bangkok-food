export const createTitle = ({ title }) => {
    const titleElement = document.createElement('h2')
    titleElement.className = 'title p40'
    titleElement.textContent = `${title}`
    return {titleElement}
}