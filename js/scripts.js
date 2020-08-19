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

    // scroll para seções
    let navBtn = $('.nav-item');
    
    let bannerSection = $('#mainSlider');
    let cardapioSection = $('#cardapio-area');
    let contactSection = $('#contact-area');

    let scrollTo = '';

    $(navBtn).click(function() {

        let btnId = $(this).attr('id');

        console.log(btnId);

        if(btnId == 'home-menu') {
            scrollTo = bannerSection;
        } else if(btnId == 'cardapio-menu') {
            scrollTo = cardapioSection;
        } else if(btnId == 'contact-menu') {
            scrollTo = contactSection;
        } else {
            scrollTo = bannerSection
        }

        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 10
        }, 1500);
    

    });

    

});
// botão topo
    
window.onscroll = function() {
    scroll();
};
function scroll() {
    let btn = document.getElementById("btnTop");
    if(document.documentElement.scrollTop > 50) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}
function backToTop() {
    document.documentElement.scrollTop = 0;
}