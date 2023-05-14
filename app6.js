const dropdown = document.querySelector('.dropdown');
const dropdownList = document.querySelector('.dropdown__list');
const shopBody = document.querySelector('.shop__body');
const dropdownLinks = document.querySelectorAll('.dropdown__link');
const formInput = document.querySelector('.form__input');
const formBtn = document.querySelector('.form__btn');
const modal = document.querySelector('.modal');
const modalBody = modal.querySelector('.modal__body');
const basket = document.querySelector('.basket');
const buyList = modalBody.querySelector('tbody');
const btnClose = document.createElement('div');


btnClose.classList.add('modal-close');
modalBody.prepend(btnClose);

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
    const newArr = [];
    // console.log(link.innerHTML); // тип кофе
    let typeCoffe = link.innerHTML;
    cards.forEach(el => {
      if (el.data === typeCoffe) {
        newArr.push(el);
      } else if (typeCoffe === 'ALL PRODUCTS') {
        newArr.push(el);
      }
    });
    paintCards(newArr);

  });
});

const imagesObj = {
  ETHIOPIA: 'shop__image_bg1',
  KENYA: 'shop__image_bg2',
  QUATEMALA: 'shop__image_bg3',
  COLUMBIA: 'shop__image_bg4',
};

// Функция которая отрисовывает блок shop__body
function paintCards(arr) {
  shopBody.innerHTML = '';
  arr.forEach(elem => {
      const cardItem = document.createElement('div');
      cardItem.classList.add('shop__item');
      const card = document.createElement('div');
      card.innerHTML = `
      <div class="shop__image ${imagesObj[elem.data]}">
      <a class="shop__link" data-id='${elem.id}' href="##">В корзину</a></div>
      <h3 class="shop__image_title">${elem.name}</h3>
      <p>${elem.price}</p>
      `;
      cardItem.append(card);
      shopBody.append(cardItem);

  });
 }

// Функция искать товар.
 const searchCards = (event) => {
   event.preventDefault();
   let inputValue = formInput.value;

   const findCards = cards.filter(el => el.name.toLowerCase().includes(inputValue.toLowerCase().trim()));
   
   if (findCards.length !== 0) {
     paintCards(findCards);
  }
};

// Скрытие модального окна
modal.addEventListener('click', (e)=> {
  if (e.target === btnClose || e.target === modal) {
    modal.classList.remove('modal-active');
  }
});

// Добавление класса при клике на корзину
basket.addEventListener('click', ()=> {
  modal.classList.toggle('modal-active');

  buyList.innerHTML = '';
  const getBuyList = JSON.parse(localStorage.getItem('shopCart'));

  showBuyProducts(getBuyList);

// Функция которая отрисовывает блок tbody
function showBuyProducts(arr) {
  arr.forEach(el => {
    let productItem = document.createElement('tr');

    productItem.innerHTML = `
      <td>${el.name}</td>
      <td class="table-image ${imagesObj[el.data]}"></td>
      <td>${el.price}</td>
      <td>${el.count}</td>
      <td>${parseInt(el.price) * el.count}</td>
      <td class="remove-item"></td>
    `;
    buyList.append(productItem);
  });
 }
});

//Поиск карточек.
 formBtn.addEventListener('click', searchCards);
 formInput.addEventListener('input', searchCards);


const cards = [
  {
    id: '01',
    name: 'ETHIOPIA COOFE 100гр.',
    img: 'img/s6-f1.png',
    price: '18 бел.р.',
    data: 'ETHIOPIA'
  },
  {
    id: '02',
    name: 'ETHIOPIA COOFE 200гр.',
    img: 'img/s6-f1.png',
    price: '20 бел.р.',
    data: 'ETHIOPIA'
  },
  {
    id: '03',
    name: 'ETHIOPIA COOFE 400гр.',
    img: 'img/s6-f1.png',
    price: '38 бел.р.',
    data: 'ETHIOPIA'
  },
  {
    id: '04',
    name: 'ETHIOPIA COOFE 1 кг.',
    img: 'img/s6-f1.png',
    price: '76 бел.р.',
    data: 'ETHIOPIA'
  },
  {
    id: '05',
    name: 'KENYA COOFE 100гр.',
    img: 'img/s6-f2.png',
    price: '20 бел.р.',
    data: 'KENYA'
  },
  {
    id: '06',
    name: 'KENYA COOFE 200гр.',
    img: 'img/s6-f2.png',
    price: '22 бел.р.',
    data: 'KENYA'
  },
  {
    id: '07',
    name: 'KENYA COOFE 400гр.',
    img: 'img/s6-f2.png',
    price: '40 бел.р.',
    data: 'KENYA'
  },
  {
    id: '08',
    name: 'KENYA COOFE 1 кг.',
    img: 'img/s6-f2.png',
    price: '80 бел.р.',
    data: 'KENYA'
  },
  {
    id: '09',
    name: 'QUATEMALA COOFE 100гр.',
    img: 'img/s6-f3.png',
    price: '26 бел.р.',
    data: 'QUATEMALA'
  },
  {
    id: '10',
    name: 'QUATEMALA COOFE 200гр.',
    img: 'img/s6-f3.png',
    price: '28 бел.р.',
    data: 'QUATEMALA'
  },
  {
    id: '11',
    name: 'QUATEMALA COOFE 400гр.',
    img: 'img/s6-f3.png',
    price: '46 бел.р.',
    data: 'QUATEMALA'
  },
  {
    id: '12',
    name: 'QUATEMALA COOFE 1 кг.',
    img: 'img/s6-f3.png',
    price: '92 бел.р.',
    data: 'QUATEMALA'
  },
  {
    id: '13',
    name: 'COLUMBIA COOFE 100гр.',
    img: 'img/s6-f4.png',
    price: '30 бел.р.',
    data: 'COLUMBIA'
  },
  {
    id: '14',
    name: 'COLUMBIA COOFE 200гр.',
    img: 'img/s6-f4.png',
    price: '32 бел.р.',
    data: 'COLUMBIA'
  },
  {
    id: '15',
    name: 'COLUMBIA COOFE 400гр.',
    img: 'img/s6-f4.png',
    price: '50 бел.р.',
    data: 'COLUMBIA'
  },
  {
    id: '16',
    name: 'COLUMBIA COOFE 1 кг.',
    img: 'img/s6-f4.png',
    price: '100 бел.р.',
    data: 'COLUMBIA'
  },
];


localStorage.setItem('cards', JSON.stringify(cards));

// записать данные в локал сторэд ('cards' - ключ / cards - массив ) 
// JSON.stringify - метод преобразования информации в строки для передачи в локал сторэдж