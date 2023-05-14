'use strict';

function shopCart() {
  const shopBody = document.querySelector('.shop__body');


  const paintShopCart = () => {
    const shopCart = JSON.parse(localStorage.getItem('shopCart')) || [];
  };

  const addCardToShopCart = (clickedCardId) => {
    // ShopCart - корзина (массив)
    // console.log(clickedCardId);
    const cardsLS = JSON.parse(localStorage.getItem('cards'));
    const card = cardsLS.find(el => el.id === clickedCardId);

    const shopCart = JSON.parse(localStorage.getItem('shopCart')) || [];
      // Есть ли в shopCart элемент с id равный card id 
  // Метод some возвращает первый true
  if (shopCart.some(el => el.id === card.id)) {
    shopCart.map(el => {
      if (el.id === card.id) {
          el.count++; /* (el.count = el.count + 1) */
      }
    });   
  } else {
      card.count = 1;
      shopCart.push(card);
  }
  localStorage.setItem('shopCart', JSON.stringify(shopCart));
  };



  shopBody.addEventListener('click', (e) => {
    e.preventDefault();

    let clickedCard = e.target;
    // console.log(e.target.closest('.shop__item').dataset.type);
    // console.log((clickedCard.dataset.id));
    if (e.target.closest('.shop__item')?.dataset.type) {
      const newArr = [];
      const type = e.target.closest('.shop__item').dataset.type;
      //  console.log(type);
      cards.forEach(el => {
        if (el.data === type) {
          newArr.push(el);
        }
      });
      paintCards(newArr);
    }

    if (clickedCard.closest('.shop__link')) {
      if (e.target.dataset.id !== undefined) {
        const clickedCardId = e.target.dataset.id;

        addCardToShopCart(clickedCardId);
      }
      // const arr = JSON.parse(localStorage.getItem('cards'));
      // console.log(arr);
    }
  });

}

shopCart();

// console.log(clickedCard.closest('.shop__link'));
// метол closest поднимается вверх по объектам и возвращает объект с указанным селектором