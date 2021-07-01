$(document).ready(function () {
  getSwitchClass();
  removeHeaderJs();

  $('.header__menu-switch').click(function (e) {
    let target = e.target;

    if ($('.header').hasClass('header--js-close')) {
      removeSwitchClass();
      getHeaderJs();

    } else {
      getSwitchClass();
      removeHeaderJs();
    }
  });
})

const getSwitchClass = function () {
  if ($('.header').not('header--js-close')) {
  $('.header').addClass('header--js-close');
  }
}

const removeSwitchClass = function () {
  $('.header').removeClass('header--js-close');
}

const getHeaderJs = function () {
  if ($('.header').not('header--js')) {
    $('.header').addClass('header--js');
  }
}

const removeHeaderJs = function () {
  if ($('.header').hasClass('header--js')) {
    $('.header').removeClass('header--js');
  }


}
