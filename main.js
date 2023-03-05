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

// lista de Productos

const productList = []; // creamos un array vacio 

// Lista de productos a agregar al array 

productList.push({ // agrega producto al array vacio 
  name: 'Camisa Roja',
  price: '20',
  img: 'https://images.pexels.com/photos/1187852/pexels-photo-1187852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({ 
  name: 'Camiseta Negra',
  price: '20',
  img: 'https://images.pexels.com/photos/1267343/pexels-photo-1267343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({ 
  name: 'Audifonos',
  price: '15',
  img: 'https://images.pexels.com/photos/4526396/pexels-photo-4526396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({ 
  name: 'smartphone',
  price: '350',
  img: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({ 
  name: 'mueble',
  price: '300',
  img: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({ 
  name: 'Comedor',
  price: '200',
  img: 'https://images.pexels.com/photos/3935311/pexels-photo-3935311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({ 
  name: 'Carro de Juguete',
  price: '30',
  img: 'https://images.pexels.com/photos/35619/capri-ford-oldtimer-automotive.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({ 
  name: 'Dinosaurio de juguete',
  price: '5',
  img: 'https://images.pexels.com/photos/13825222/pexels-photo-13825222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({ 
  name: 'Ipad',
  price: '400',
  img: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({ 
  name: 'Control XBOX',
  price: '50',
  img: 'https://images.pexels.com/photos/12718985/pexels-photo-12718985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({ 
  name: 'Gorra LA',
  price: '15',
  img: 'https://images.pexels.com/photos/844867/pexels-photo-844867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});


function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div'); // crea la etiqueta HTML
    productCard.classList.add('card__product'); // Agrega una clase a la etiqueta HTML
    
    const productImage = document.createElement('img');
    productImage.classList.add('card__image');
    productImage.setAttribute('src', product.img); //añade la url de la imagen declarada
    productImage.addEventListener('click', openProductDetail);
    
    const productInfo = document.createElement('div');
    productInfo.classList.add('card__info');
    
    
    productCard.append(productImage, productInfo); // agrupando
    
    const productParagraph = document.createElement('div');
    productParagraph.classList.add('card__paragraph');
    
    
    const productPrice = document.createElement('p');
    productPrice.classList.add('card__price');
    productPrice.innerText = '$' + product.price;
    
    const productName = document.createElement('p');
    productName.classList.add('card__text');
    productName.innerText = product.name;
    
    productParagraph.append(productPrice, productName) // agrupando
    
    const productFigureCart = document.createElement('figure');
    productFigureCart.classList.add('card__icon');
    const productImageCart = document.createElement('img');
    productImageCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfo.append(productParagraph, productFigureCart); //agrupando
    
    productFigureCart.appendChild(productImageCart);
    
    cardsConstainer.appendChild(productCard);
  }
}

renderProducts(productList);