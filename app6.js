const dropdown = document.querySelector('.dropdown');
const dropdownList = document.querySelector('.dropdown__list');
const shopBody = document.querySelector('.shop__body');
const dropdownLinks = document.querySelectorAll('.dropdown__link');
const formInput = document.querySelector('.form__input');
const formBtn = document.querySelector('.form__btn');

dropdown.addEventListener('click', ()=> {
  dropdownList.classList.toggle('active');

  if (dropdownList.classList.contains('active')) {
    dropdown.style.outline = '2px solid #f26600';
  } else {
    dropdown.style.outline = '';
  }

});

dropdownLinks.forEach(link => {
 
  link.addEventListener('click', ()=> {
    shopBody.innerHTML = '';

    return (link.innerHTML === 'ALL PRODUCTS') ?
            cards.forEach((item, i) => {
              showProduct(i);
            })                                 : 
  
            cards.forEach((item, i)=> {
              if (item.data === link.innerHTML) {
                showProduct(i);
              }
            });
  });
});

// Функция которая отрисовывает блок shop__body
function showProduct(i) {
  const shopItem = document.createElement('div');
  shopItem.classList.add('shop__item');
  shopBody.append(shopItem);
  
  const shopImg = document.createElement('div');
  shopImg.classList.add('shop__image');
  shopImg.style.backgroundImage = `url(${cards[i].img})`;
  shopItem.append(shopImg);

  const shopTitle = document.createElement('h3');
  shopTitle.classList.add('shop__image_title');
  shopTitle.innerHTML = cards[i].name; // [i] номер объекта по порядку
  shopItem.append(shopTitle);

  const price = document.createElement('p');
  price.innerHTML = cards[i].price; // [i] номер объекта по порядку
  shopItem.append(price);
 }

// Функция искать товар.
 const searchCards = (event) => {
    event.preventDefault();
    shopBody.innerHTML = '';
    let inputValue = formInput.value;

    const findCards = cards.filter(el => el.name.toLowerCase().includes(inputValue.toLowerCase().trim()));

    findCards.forEach((el, i) => {
      if (el.name.toLowerCase().includes(inputValue) && inputValue !== 0) {
        printCards(i);
      }
    });


    function printCards(i) {
      const shopItem = document.createElement('div');
      shopItem.classList.add('shop__item');
      shopBody.append(shopItem);
      
      const shopImg = document.createElement('div');
      shopImg.classList.add('shop__image');
      shopImg.style.backgroundImage = `url(${findCards[i].img})`;
      shopItem.append(shopImg);
    
      const shopTitle = document.createElement('h3');
      shopTitle.classList.add('shop__image_title');
      shopTitle.innerHTML = findCards[i].name; // [i] номер объекта по порядку
      shopItem.append(shopTitle);
    
      const price = document.createElement('p');
      price.innerHTML = findCards[i].price; // [i] номер объекта по порядку
      shopItem.append(price);
     }


    // if (findCards.length !== 0) { 
    //   console.log(findCards);
    //   showProduct(findCards);
    // }

 };

 formBtn.addEventListener('click', searchCards);
 formInput.addEventListener('input', searchCards);

const cards = [
  {
    id: 1,
    name: 'ETHIOPIA COOFE 100гр.',
    img: 'img/s6-f1.png',
    price: '18 бел.р.',
    data: 'ETHIOPIA'
  },
  {
    id: 2,
    name: 'ETHIOPIA COOFE 200гр.',
    img: 'img/s6-f1.png',
    price: '20 бел.р.',
    data: 'ETHIOPIA'
  },
  {
    id: 3,
    name: 'ETHIOPIA COOFE 400гр.',
    img: 'img/s6-f1.png',
    price: '38 бел.р.',
    data: 'ETHIOPIA'
  },
  {
    id: 4,
    name: 'ETHIOPIA COOFE 1 кг.',
    img: 'img/s6-f1.png',
    price: '76 бел.р.',
    data: 'ETHIOPIA'
  },
  {
    id: 5,
    name: 'KENYA COOFE 100гр.',
    img: 'img/s6-f2.png',
    price: '20 бел.р.',
    data: 'KENYA'
  },
  {
    id: 6,
    name: 'KENYA COOFE 200гр.',
    img: 'img/s6-f2.png',
    price: '22 бел.р.',
    data: 'KENYA'
  },
  {
    id: 7,
    name: 'KENYA COOFE 400гр.',
    img: 'img/s6-f2.png',
    price: '40 бел.р.',
    data: 'KENYA'
  },
  {
    id: 8,
    name: 'KENYA COOFE 1 кг.',
    img: 'img/s6-f2.png',
    price: '80 бел.р.',
    data: 'KENYA'
  },
  {
    id: 9,
    name: 'QUATEMALA COOFE 100гр.',
    img: 'img/s6-f3.png',
    price: '26 бел.р.',
    data: 'QUATEMALA'
  },
  {
    id: 10,
    name: 'QUATEMALA COOFE 200гр.',
    img: 'img/s6-f3.png',
    price: '28 бел.р.',
    data: 'QUATEMALA'
  },
  {
    id: 11,
    name: 'QUATEMALA COOFE 400гр.',
    img: 'img/s6-f3.png',
    price: '46 бел.р.',
    data: 'QUATEMALA'
  },
  {
    id: 12,
    name: 'QUATEMALA COOFE 1 кг.',
    img: 'img/s6-f3.png',
    price: '92 бел.р.',
    data: 'QUATEMALA'
  },
  {
    id: 13,
    name: 'COLUMBIA COOFE 100гр.',
    img: 'img/s6-f4.png',
    price: '30 бел.р.',
    data: 'COLUMBIA'
  },
  {
    id: 14,
    name: 'COLUMBIA COOFE 200гр.',
    img: 'img/s6-f4.png',
    price: '32 бел.р.',
    data: 'COLUMBIA'
  },
  {
    id: 15,
    name: 'COLUMBIA COOFE 400гр.',
    img: 'img/s6-f4.png',
    price: '50 бел.р.',
    data: 'COLUMBIA'
  },
  {
    id: 16,
    name: 'COLUMBIA COOFE 1 кг.',
    img: 'img/s6-f4.png',
    price: '100 бел.р.',
    data: 'COLUMBIA'
  },
];
