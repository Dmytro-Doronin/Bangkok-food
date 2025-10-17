export const HeaderView = () => {
    const header = document.createElement('div')
    header.className = 'header container'

    header.innerHTML = `
      <h1 class="header__logo title">Bangkok Express</h1>
      <h3 class="header__subtitle">Great food・Free delivery・Fair price</h3>
    `
    return header
}