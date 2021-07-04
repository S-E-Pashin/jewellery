'use strict';

$(document).ready(function () {

  $('.faq__item').click(function (e) {
    var target = e.target;

    if ($(target).hasClass('faq__item--close')) {
      $(target).removeClass('faq__item--close');

    } else {
      $(target).addClass('faq__item--close');
    }
  });

  var closeAllFaqItem = function () {
    $('.faq__item').addClass('faq__item--close');
  };

  closeAllFaqItem();
});
