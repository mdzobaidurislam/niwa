(function ($) {
    "use strict";

    $('#show_mobaile_menu i').click(function () {
        $('#mobail_menu_hide').addClass('show_mobaile');
    });

    $('#hide_menu').click(function () {
        $('#mobail_menu_hide').removeClass('show_mobaile');
    });

    $('.tigger-m').click(function () {
        $('.mobaile-menu').toggleClass('m-open');
        $('.tigger-m').toggleClass('tigger-m-c');
    });
    $('#close').click(function () {
        $('.mobaile-menu').removeClass('m-open');
        $('.tigger-m').removeClass('tigger-m-c');
    });
    $('#close1').click(function () {
        $('.mobaile-menu').removeClass('m-open');
        $('.tigger-m').show();
        $('#close1').hide();
    });

})(jQuery);