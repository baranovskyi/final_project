$('.header-menu').click(function () {
    $('.header-menu_button').toggleClass('header-menu_button-noactive');
    $('.mobile').toggleClass('mobile-active');
});

$('#mobile-submenu').click(function() {
    $('.mobile-submenu').toggleClass('mobile-submenu_active');
})
