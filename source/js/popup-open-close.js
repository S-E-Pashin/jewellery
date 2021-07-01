'use strict';

$(document).ready(function () {
  $('.card__button-add').click(function () {
    if ($('.popup').hasClass('popup')) {
      $('.popup').removeClass('popup--close').addClass('popup--open');
      $('.body').addClass('body--restricted-travel');

      $('.popup__button-close').click(function () {
        $('.popup').removeClass('popup--open').addClass('popup--close');
        $('.body').removeClass('body--restricted-travel');
      });

      closingClickOverlay();

      $(document).keydown(function (e) {
        if (e.key === 'Escape') {
          $('.popup').removeClass('popup--open').addClass('popup--close');
          $('.body').removeClass('body--restricted-travel');
        }
      });
    }
  });

  var closingClickOverlay = function () {
    $(document).mousedown(function (e) {
      if ($('.popup').hasClass('popup--open')) {
        var popup = $('.popup__wrapper');
        if (!popup.is(e.target) && popup.has(e.target).length === 0) {
          $('.popup').removeClass('popup--open').addClass('popup--close');
          $('.body').removeClass('body--restricted-travel');
        }
      }
    });
  };
});
