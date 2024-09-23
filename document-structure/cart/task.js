/*
1 найти родителя всех карточек
2 повесить на него обработчик
3 если обработчик сработал на +-: 
  1 если обработчик сработал на +-: в обработчике использовать 
  const cList = event.target.classList для записи в переменную листа классов,
  для определения на какую кнопку было нажатие (+ product__quantity-control_inc
  или - product__quantity-control_dec)
  2 через event.target.closest(".product").dataset.id определить к какой
  продуктовой карточке принадлежит событие клика dataId
  3 если нажатие было на + cList.contains(product__quantity-control_inc) и
    Number(event.target.closest('.product__quantity-value').texContent) > 0 (qVal)
      qVal = Number(qVal) + 1
    если на минус cList.contains(product__quantity-control_deс) и 
    Number(qVal) > 1:
      qVal = Number(qVal) - 1
4 если обработчик сработал на Добавить в корзину (product__add): 
  1 найти изображение img = event.target.closest('.cart__product-image').src
  2 найти место куда добавить разметку carts = document.querySelector('.cart__products')
  3 если товар отсутствует в корзине carts 
    if (carts.querySelector('[data-id=${dataId}]'))добавить в разметку
    carts.InsertAdjacentHTML(`
    <div class="cart__product" data-id=${dataId}>
        <img class="cart__product-image" src=${img}>
        <div class="cart__product-count">${qVal}</div>
    </div>
    если есть else { carts.querySelector('[data-id=${dataId}].cart__product-count.textContent = qVal}
  `)
*/
//

const container = document.querySelector('.products');

container.addEventListener('click', event => {
  const cList = event.target.classList;
  const qVal = event.target.closest('.product__quantity')?.querySelector('.product__quantity-value');
  const dataId = event.target.closest('.product').dataset.id;
  const carts = document.querySelector('.cart__products'); 

  /*если обработчик сработал на кнопках + и -*/
  if (cList.contains('product__quantity-control_dec') || cList.contains('product__quantity-control_inc')) {

    /*определяем + или -*/
    if (cList.contains('product__quantity-control_inc') && Number(qVal.textContent) > 0) {
         qVal.textContent = +qVal.textContent + 1;
    } else if (cList.contains('product__quantity-control_dec') && Number(qVal.textContent) > 1) {
         qVal.textContent = +qVal.textContent - 1;
    }    
  }

  /*если обработчик сработал на кнопке Добавить в корзину*/
  else if (cList.contains('product__add')) {
      const img = event.target.closest('.product').querySelector('.product__image').src;

      /*если товара нет в корзине*/
      if (!carts.querySelector(`[data-id="${dataId}"]`)) {
        carts.insertAdjacentHTML('beforeEnd', 
          `<div class="cart__product" data-id="${dataId}">
              <img class="cart__product-image" src=${img}>
              <div class="cart__product-count">${qVal.textContent}</div>
           </div>`);

      /*если товар есть в корзине но надо увеличить*/ 
      } else {
        const localLink = carts.querySelector(`[data-id="${dataId}"] .cart__product-count`);
        localLink.textContent = Number(localLink.textContent) + Number(qVal.textContent);
      }
  }
})
