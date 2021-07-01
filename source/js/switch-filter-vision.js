'use strict';

$(document).ready(function () {
  let filter = $('.catalog__filter-wrapper');
  let filterSwitch = $('.catalog__switch-filter');
  let filterButtonClose = $('.filter__close-button');

  filterSwitch.click(function (e) {

    // if ($(target).is(':not(.filter__section-switch)')) {
    if (filterSwitch.hasClass('catalog__switch-filter--visible')) {
      filterSwitch.removeClass('catalog__switch-filter--visible');
      openFilter();
    } else {
      filterSwitch.addClass('catalog__switch-filter--visible');
    }
    // }
  });

  filterButtonClose.click(function () {
    closeFilter();
    showFilterSwitch();
  })

  let closeFilter = function () {
    filter.addClass('catalog__filter-wrapper--close');
  }

  let openFilter = function () {
    filter.removeClass('catalog__filter-wrapper--close');
  }

  let hideFilterSwitch = function () {
    // .addClass('');
  }

  let showFilterSwitch = function () {
    filterSwitch.addClass('catalog__switch-filter--visible');
  }

  closeFilter();
  showFilterSwitch();
});
