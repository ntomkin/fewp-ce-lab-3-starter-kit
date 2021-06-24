function navMenuClicked() {
    isMenuOpened = $('.nav-bar').hasClass('opened');
    if(isMenuOpened) {
        $('.nav-bar').removeClass('opened');
    } else {
        $('.nav-bar').addClass('opened');
    }
}

$(function() {
    $('.nav-menu').on('click', navMenuClicked);
});