const botaoMenu = document.querySelector('.cabecalho-menu')
const menuLateral = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () => {
    menuLateral.classList.toggle('menu-lateral-activo')
})