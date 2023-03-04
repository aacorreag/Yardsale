// Variables menu desktop

const navEmail = document.querySelector('.nav__email');
const desktopMenu = document.querySelector('.desktop-menu');

//variables menu mobile

const burguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

//variables menu carrito de compras

const cartIcon = document.querySelector('.nav__cart');
const asideCart = document.querySelector('.product-details');

// Evento desktop menu

navEmail.addEventListener('click', toggleDesktopMenu);

//Evento mobile menu

burguerIcon.addEventListener('click', toggleMobileMenu);

//Evento carrito de compras

cartIcon.addEventListener('click', toggleCartaside);

//Función desktop menu
function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
  asideCart.classList.add('inactive');
}

//Función mobile menu
function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
  asideCart.classList.add('inactive');
}

//función menu carrito de compras 
function toggleCartaside() {
  asideCart.classList.toggle('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
}