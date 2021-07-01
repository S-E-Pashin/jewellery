'use strict';

$(document).ready(function () {

  $('.filter__header').click(function (e) {
    let target = e.target;

    if ($(target).is(':not(.filter__section-switch)')) {
      if ($(target).hasClass('filter__header--close')) {
        $(target).removeClass('filter__header--close');

        if ($(target).parent().hasClass('filter__section--close')) {
          $(target).parent().removeClass('filter__section--close');
        }
      } else {$(target).addClass('filter__header--close');

        if ($(target).parent().hasClass('filter__section--close')) {
        } else {
          $(target).parent().addClass('filter__section--close');
        }
      }
    }
  });

  let closeAllFaqItem = function () {
    $('.faq__item').addClass('faq__item--close');
  }

  closeAllFaqItem();
});
