// Variables menu desktop

const navEmail = document.querySelector('.nav__email');
const desktopMenu = document.querySelector('.desktop-menu');

//variables menu mobile

const burguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

//variables menu carrito de compras

const cartIcon = document.querySelector('.nav__cart');
const asideCart = document.querySelector('#cartContainer');

//variables container de las cards
const cardsConstainer = document.querySelector('.card__container');

//variable del product deteil

const closeIcon = document.querySelector('.product-close');
const productDetail = document.querySelector('#productDetail');
const imgProductDetail = document.querySelector('.product-img');
const priceProductDetail = document.querySelector('.product-info-price');
const nameProductDetail = document.querySelector('.product-info-name');



// Evento desktop menu

navEmail.addEventListener('click', toggleDesktopMenu);

//Evento mobile menu

burguerIcon.addEventListener('click', toggleMobileMenu);

//Evento carrito de compras

cartIcon.addEventListener('click', toggleCartaside);

//evento de prodcut detail

closeIcon.addEventListener('click', closeProductDetail);

//Función desktop menu
function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
  asideCart.classList.add('inactive');
  productDetail.classList.add('inactive')
}

//Función mobile menu
function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
  asideCart.classList.add('inactive');
  productDetail.classList.add('inactive')
}

//función menu carrito de compras 
function toggleCartaside() {
  asideCart.classList.toggle('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  productDetail.classList.add('inactive')
}

//función product detail
function openProductDetail() {
  productDetail.classList.remove('inactive');
  asideCart.classList.add('inactive');
  desktopMenu.classList.add('inactive');
}
function closeProductDetail() {
  productDetail.classList.add('inactive')
}
