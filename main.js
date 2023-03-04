// Variables menu desktop

const navEmail = document.querySelector('.nav__email');
const desktopMenu = document.querySelector('.desktop-menu');

//variables menu mobile

const burguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

//variables menu carrito de compras

const cartIcon = document.querySelector('.nav__cart');
const asideCart = document.querySelector('.product-details');

//variables container de las cards
const cardsConstainer = document.querySelector('.card__container')

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

// lista de Productos

const productList = []; // creamos un array vacio 

// Lista de productos a agregar al array 

productList.push({ // agrega producto al array vacio 
  name: 'redShirt',
  price: '20',
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({ 
  name: 'blackShirt',
  price: '20',
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({ 
  name: 'earphones',
  price: '5',
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({ 
  name: 'smartphone',
  price: '350',
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({ 
  name: 'mueble',
  price: '300',
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({ 
  name: 'muebleOut',
  price: '200',
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div'); // crea la etiqueta HTML
    productCard.classList.add('card__product'); // Agrega una clase a la etiqueta HTML
    
    const productImage = document.createElement('img');
    productImage.classList.add('card__image');
    productImage.setAttribute('src', product.img); //añade la url de la imagen declarada
    
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