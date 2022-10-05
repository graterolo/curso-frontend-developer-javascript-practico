const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
//productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');

}

function toggleCarritoAside() {
   const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

   if(!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');  
   }

   const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

   if(!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive');  
   }

   shoppingCartContainer.classList.toggle('inactive');
}

/*function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');

}*/

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    id: 1,
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'This is the best Bike in the world'
});
productList.push({
    id: 2,
    name: 'Monitor',
    price: 220,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'This is the best Monitor in the world'
});
productList.push({
    id: 3,
    name: 'Computer',
    price: 620,
    image: 'https://images.pexels.com/photos/2225616/pexels-photo-2225616.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'This is the best Computer in the world'
}); 
productList.push({
    id: 4,
    name: 'Soun',
    price: 620,
    image: 'https://images.pexels.com/photos/191877/pexels-photo-191877.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'This is the best Soun in the world'
});
productList.push({
    id: 5,
    name: 'Glasses',
    price: 620,
    image: 'https://images.pexels.com/photos/13211184/pexels-photo-13211184.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'This is the best Glasses in the world'
});
productList.push({
    id: 6,
    name: 'Shoes',
    price: 620,
    image: 'https://images.pexels.com/photos/8188904/pexels-photo-8188904.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'This is the best Shoes in the world'
});
productList.push({
    id: 7,
    name: 'Glasses',
    price: 620,
    image: 'https://images.pexels.com/photos/13211184/pexels-photo-13211184.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'This is the best Glasses in the world'
});
productList.push({
    id: 8,
    name: 'Monitor',
    price: 220,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'This is the best Monitor in the world'
});
productList.push({
    id: 9,
    name: 'Computer',
    price: 620,
    image: 'https://images.pexels.com/photos/2225616/pexels-photo-2225616.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'This is the best Computer in the world'
}); 
productList.push({
    id: 10,
    name: 'Soun',
    price: 620,
    image: 'https://images.pexels.com/photos/191877/pexels-photo-191877.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'This is the best Soun in the world'
});


const openProductDetailAside = (id) => {  
  const isActiveAside = renderAsideDetail(id);
  shoppingCartContainer.classList.add('inactive');
  const isOpenMenuMobile = mobileMenu.classList.contains('inactive');
  productDetail.classList.remove('inactive');
}

const renderAsideDetail = (id) => {
  const product = productList.find(product => product.id == id);
  const htmlAside = `
    <div class="product-info-detail-close">
      <img src="./icons/icon_close.png" alt="close">
    </div>
    <img src="${product.image}" alt="${product.name}">
    <div class="info-datail">
      <p>$ ${product.price}</p>
      <p>${product.name}</p>
      <p>${product.description}</p>
      <button class="primary-button add-to-cart-button">
        <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
        Add to cart
      </button>
    </div>
  `;
  productDetail.innerHTML = htmlAside;
  productDetail.classList.remove('inactive');

  const iconCloseAsideProductInfoDetail = document.querySelector('.product-info-detail-close');
  iconCloseAsideProductInfoDetail.addEventListener('click', closeProductDetailAside)
  return true
}


/* Este codigo lo pegamos para guiarnos y construir esto desde js
<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>*/

function renderProducts(arr) {
    for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const id = product.id;

        // product = {name, price, image}
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
       // productImg.addEventListener('click', openProductDetailAside);
       productImg.addEventListener('click', () => openProductDetailAside(id))
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
       /* productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);*/
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }      
}
renderProducts(productList);