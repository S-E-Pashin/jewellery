'use strict';

// Пока деактивирую

$(document).ready(function () {

  $('.faq__item').click(function (e) {
    let target = e.target;

    if ($(target).hasClass('faq__item--close')) {
      $(target).removeClass('faq__item--close');

    } else {
      $(target).addClass('faq__item--close');
    }
  });

  //Закрыть все открытые вопросы

  let closeAllFaqItem = function () {
    $('.faq__item').addClass('faq__item--close');
  }

  closeAllFaqItem();
});
