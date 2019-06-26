"use strict";

(function ($) {
  var menuItem = $('.js_header-link');
  var menuCloud = $('.js_header__cloud');
  menuItem.each(function () {
    $(this).on('click', function (event) {
      var href = $(this).attr('data-href');
      $(this).closest('.header-menu__item').siblings().removeClass('is-active');
      $(this).closest('.header-menu__item').addClass('is-active');
      menuCloud.addClass('is-show');
      $(href).addClass('is-show');
      $(href).siblings().removeClass('is-show');
      event.preventDefault();
    });
  }); // закрытие по ESC и клику в любой области

  if ($('.js_language-list.is-show')) {
    $(document).on('keyup', function (event) {
      if (event.keyCode === 27) {
        menuItem.closest('.header-menu__item').siblings().removeClass('is-active');
        menuCloud.removeClass('is-show');
      }
    });
    $(document).mouseup(function (e) {
      if (menuCloud.has(e.target).length === 0) {
        menuItem.closest('.header-menu__item').siblings().removeClass('is-active');
        menuCloud.removeClass('is-show');
      }
    });
  }
})(jQuery);

(function ($) {
  var languageHeader = $('.js_language-action');
  var languageList = $('.js_language-list');
  languageHeader.click(function (e) {
    e.preventDefault();
    $(this).toggleClass('is-open');
    languageList.toggleClass('is-show');
  });

  if ($('.js_language-list.is-show')) {
    $(document).on('keyup', function (event) {
      if (event.keyCode === 27) {
        languageHeader.removeClass('is-open');
        languageList.removeClass('is-show');
      }
    });
    $(document).mouseup(function (e) {
      if (languageList.has(e.target).length === 0) {
        languageHeader.removeClass('is-open');
        languageList.removeClass('is-show');
      }
    });
  }
})(jQuery);
//# sourceMappingURL=maps/app.js.map
