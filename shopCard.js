'use strict';

function shopCart() {
  const shopBody = document.querySelector('.shop__body');

  shopBody.addEventListener('click', (e)=> {
    e.preventDefault();
    
    let clickedCard = e.target;
    if(clickedCard.closest('shop__link')) {
      console.log(clickedCard.dataset.id);
      console.log(clickedCard.closest('.shop__link'));
            // метол closest поднимается вверх по объектам и возвращает объект с указанным селектором
    }
  });

      // const shopItem = document.querySelectorAll('shop__item');
    // shopItem.addEventListener('click', ()=> {
    //     console.log()
    // });
} shopCart();