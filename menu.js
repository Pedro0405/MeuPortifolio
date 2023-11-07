// Seu JavaScript (menu.js)
document.addEventListener("DOMContentLoaded", function () {
    let btnMenu = document.getElementById('btn-menu');
    let menu = document.getElementById('menu-mobile');
    let overlay = document.getElementById('overlay-menu');

    btnMenu.addEventListener('click', () => {
        menu.classList.toggle('abrir-menu');
        overlay.style.display = 'block';
    });

    overlay.addEventListener('click', () => {
        menu.classList.remove('abrir-menu');
        overlay.style.display = 'none';
    });

    let menuItems = document.querySelectorAll('.menu-mobile nav ul li a');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('abrir-menu');
            overlay.style.display = 'none';
        });
    });
});
