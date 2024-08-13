document.querySelector('#watch-menu').onclick = function () {
  document.querySelector('.products').scrollIntoView({ behavior: 'smooth' });
};

let productsButtons = document.querySelectorAll('.products-button');
for (let i = 0; i < productsButtons.length; i++) {
  productsButtons[i].onclick = function () {
    document.querySelector('.order').scrollIntoView({ behavior: 'smooth' });
  };
}

let yourOrder = document.querySelector('#your-order'),
  yourName = document.querySelector('#your-name'),
  yourPhone = document.querySelector('#your-phone');
let orderButton = (document.querySelector('.order-button').onclick =
  function () {
    let hasError = false;

    [yourOrder, yourName, yourPhone].forEach((item) => {
      if (!item.value) {
        item.parentElement.style.background = 'red';
        hasError = true;
      } else {
        item.parentElement.style.background = '';
      }
    });

    if (!hasError) {
      [yourOrder, yourName, yourPhone].forEach((item) => {
        item.value = '';
      });
      alert('Cпасибо за заказ! Мы скоро с вами свяжемся!');
    }
  });

let prices = document.querySelectorAll('.products-item-price');

document.querySelector('.currency').onclick = function (e) {
  let currentCurrency = e.target.innerText,
    newCurrency = '$',
    coefficient = 1;

  if (currentCurrency === '$') {
    newCurrency = '₽';
    coefficient = 100;
  } else if (currentCurrency === '₽') {
    newCurrency = 'BYN';
    coefficient = 3;
  } else if (currentCurrency === 'BYN') {
    newCurrency = '€';
    coefficient = 1.1;
  } else if (currentCurrency === '€') {
    newCurrency = '¥';
    coefficient = 6.9;
  }

  e.target.innerText = newCurrency;

  for (let i = 0; i < prices.length; i++) {
    prices[i].innerText =
      +(prices[i].getAttribute('data-base-price') * coefficient).toFixed(1) +
      ' ' +
      newCurrency;
  }
};

//burger-menu
const burgerMenuButton = document.querySelector('.burger-menu');
const burgerMenu = document.querySelector('.menu-wrapper');
burgerMenuButton.addEventListener('click', () => {
  burgerMenuButton.classList.toggle('active');
  burgerMenu.classList.toggle('open')
})

//slider
const products = Array.from(document.querySelectorAll('.products-item'));
let currentProduct = products[0];
let count = 0;
const productSlideButtons = document.querySelectorAll('.product-slide-btn');
const productSlidePrev = productSlideButtons[0];
const productSlideNext = productSlideButtons[1];
 
productSlidePrev.addEventListener('click', () => {
  if (count === 0) {
    currentProduct.classList.add('hidden')
    currentProduct = products[11];
    currentProduct.classList.remove('hidden')  
    count = 11;
  } else {
    currentProduct.classList.add('hidden')
    currentProduct = products[count - 1];
    count = count - 1;
    currentProduct.classList.remove('hidden') 
  }
});

productSlideNext.addEventListener('click', () => {
  if (count === 11) {
    currentProduct.classList.add('hidden')
    currentProduct = products[0];
    currentProduct.classList.remove('hidden')  
    count = 0;
  } else {
    currentProduct.classList.add('hidden')
    currentProduct = products[count + 1];
    count = count + 1;
    currentProduct.classList.remove('hidden') 
  }
});

let screen = window.matchMedia("(max-width:768px)");
// window.addEventListener('resize', function () {
  if (screen.matches) {
    // 0...768
    productSlideButtons.forEach((button) => {
      button.classList.remove('hidden');
    });
    products.forEach((burger) => {
      if (burger != currentProduct) {
        return burger.classList.add('hidden');
      }
    });
  } else {
    // 769...Inf
    productSlideButtons.forEach((button) => {
      button.classList.add('hidden');
    });
    products.forEach((burger) => {
      return burger.classList.remove('hidden');
    });
  }
// });
