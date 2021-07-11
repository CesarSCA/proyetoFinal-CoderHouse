jQuery('document').ready(function($){

    var menuBtn = $('.menu-icon'),
        menu = $('.nav__navegacion');
        total = $('.nav__Logo__span')

    menuBtn.click(function(){

        if(menu.hasClass('show') && total.hasClass('mover')){
            menu.removeClass('show');
            total.removeClass('mover');
            menu.addClass(`unshow`)
            setTimeout(() => {
                menu.removeClass(`unshow`)
            }, 990);
        }else {
        menu.removeClass(`unshow`)
        menu.addClass('show');
        total.addClass('mover');
        }
    })
});