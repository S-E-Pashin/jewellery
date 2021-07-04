'use strict';

$(document).ready(function () {
  var filter = $('.catalog__filter-wrapper');
  var filterSwitch = $('.catalog__switch-filter');
  var filterButtonClose = $('.filter__close-button');

  filterSwitch.click(function () {
    if (filterSwitch.hasClass('catalog__switch-filter--visible')) {
      filterSwitch.removeClass('catalog__switch-filter--visible');
      openFilter();
    } else {
      filterSwitch.addClass('catalog__switch-filter--visible');
    }
  });

  filterButtonClose.click(function () {
    closeFilter();
    showFilterSwitch();
  });

  var closeFilter = function () {
    filter.addClass('catalog__filter-wrapper--close');
  };

  var openFilter = function () {
    filter.removeClass('catalog__filter-wrapper--close');
  };

  var showFilterSwitch = function () {
    filterSwitch.addClass('catalog__switch-filter--visible');
  };

  closeFilter();
  showFilterSwitch();
});
