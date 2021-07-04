'use strict';

$(document).ready(function () {
  $('.header__login').click(function (e) {
    e.preventDefault();
    if ($('.login').hasClass('login')) {
      $('.login').removeClass('login--close').addClass('login--open');
      $('.body').addClass('body--restricted-travel');

      setTimeout(function () {
        $('#login-id-email').focus();
      }, 100);

      $('.login__button-close').click(function () {
        $('.login').removeClass('login--open').addClass('login--close');
        $('.body').removeClass('body--restricted-travel');
      });

      closingClickOverlayLogin();

      $(document).keydown(function (elem) {
        if (elem.key === 'Escape') {
          $('.login').removeClass('login--open').addClass('login--close');
          $('.body').removeClass('body--restricted-travel');
        }
      });
    }
  });

  var closingClickOverlayLogin = function () {
    $(document).mousedown(function (e) {
      if ($('.login').hasClass('login--open')) {
        var login = $('.login__wrapper');
        if (!login.is(e.target) && login.has(e.target).length === 0) {
          $('.login').removeClass('login--open').addClass('login--close');
          $('.body').removeClass('body--restricted-travel');
        }
      }
    });
  };
});
