'use strict';

$(document).ready(function () {
  getSwitchClass();
  removeHeaderJs();

  $('.header__menu-switch').click(function () {

    if ($('.header').hasClass('header--js-close')) {
      removeSwitchClass();
      getHeaderJs();

    } else {
      getSwitchClass();
      removeHeaderJs();
    }
  });
});

var getSwitchClass = function () {
  if ($('.header').not('header--js-close')) {
    $('.header').addClass('header--js-close');
  }
};

var removeSwitchClass = function () {
  $('.header').removeClass('header--js-close');
};

var getHeaderJs = function () {
  if ($('.header').not('header--js')) {
    $('.header').addClass('header--js');
  }
};

var removeHeaderJs = function () {
  if ($('.header').hasClass('header--js')) {
    $('.header').removeClass('header--js');
  }
};
