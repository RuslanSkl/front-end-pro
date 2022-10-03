'use strict';
const $window = $(window);
let isModalShowed = false;
const debouncedResize = _.debounce(function () {
  if (!isModalShowed && $window.width() <= 768) {
    $('.btn-primary').trigger('click');
    isModalShowed = false;
  }
}, 500);
$window.on("resize", debouncedResize);