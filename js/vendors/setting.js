jQuery('.js-scroll').click(function(e) {
    jQuery('html,body').animate({ scrollTop: jQuery(this.hash).offset().top }, 1000);
    return false;
    e.preventDefault();
});