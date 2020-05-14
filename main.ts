const burger = <HTMLDivElement>document.querySelector('.burger')
const button = <HTMLAnchorElement>document.querySelector('.nav-btn')
const menu = <HTMLUListElement>document.querySelector('.menu')

button.addEventListener('click', () => {
    burger.classList.toggle('clicked')
    menu.classList.toggle('clicked')
    button.classList.toggle('clicked')
})
