$(document).ready(function() {

   
    
    // Filtro do portfolio

    $('.filter-btn').on('click', function() {

        let type = $(this).attr('id');
        let boxes = $('.project-box');

        $('.main-btn').removeClass('active');
        $(this).addClass('active');

        if(type == 'bolo-btn') {
            eachBoxes('bolo', boxes)
        } else if(type == 'pao-btn') {
            eachBoxes('pao', boxes);
        } else if(type == 'torta-btn') {
            eachBoxes('torta', boxes);
        } else if(type == 'doce-btn') {
            eachBoxes('doce', boxes);
        } else {
            eachBoxes('all', boxes);
        }
        

    });

    function eachBoxes(type, boxes) {

        if(type == 'all') {
            $(boxes).fadeIn();
        } else {
            $(boxes).each(function() {
                if(!$(this).hasClass(type)) {
                    $(this).fadeOut('slow');
                } else {
                    $(this).fadeIn();
                }
            });
        }
    }

});