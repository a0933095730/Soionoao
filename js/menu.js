$(window).on('scroll' , function(){
    // console.log($(window).scrollTop())
    if ( $(window).scrollTop() > 300){
        if( $('.backToTop').length == 0){
            $('body').append('<a href="javascript:void(0);" class="backToTop" style="display: none;"></a>');
            $(".backToTop").on('click', function() {
                $('body').animate({ scrollTop: 0} , 500);
            });
        }
        $('.backToTop').fadeIn(500);
    }
    else{
        $('.backToTop').fadeOut(500);
    }
});


if ( $(window).width() <= 992 ){
    $('#all-menu-open').click(function(){
        $('#all-menu-wrap').fadeIn(100);
        $('body').addClass("hidden-y");
    })
    $('#all-menu-close').click(function(){
        $('#all-menu-wrap').fadeOut(100);
        $('body').removeClass("hidden-y");
    })
    $('.menu-switch').click(function(){
        var $this = $(this);
        var flag = 0;
        if ( $this.hasClass('active') == true){
            flag = 1;
        }
        $('.menu-switch').removeClass('active');
        $('.menu').slideUp(); 
        if ( flag == 0 ){
            $this.addClass("active");
            $(this).next('.menu').slideToggle(); 
        }   
    });
    $('.detail-switch').click(function(){
        var $this = $(this);
        var flag = 0;
        if ( $this.hasClass('active') == true){
            flag = 1;
        }
        $('.detail-switch').removeClass('active');
        $('.detail').slideUp(); 
        if ( flag == 0 ){
            $this.addClass("active");
            $(this).next('.detail').slideToggle(); 
        }   
    });
}
else{
    $('#mask-toggle').mouseenter(function(){
        $('body').append('<div class="mask"></div>');
        $('.mask').addClass('fade');
    });
    $('#mask-toggle').mouseleave(function(){
        $('.mask').remove();
    });
}
//多圖
$('#mode-col-toggle').click(function(){
    $('#mode-col-toggle').addClass('active');
    $('#mode-list-toggle').removeClass('active');
    $('.search-cont-wrap .c-main').removeClass('mode-list');
    $('.search-cont-wrap .c-main').addClass('mode-col');
});
//列表
$('#mode-list-toggle').click(function(){
    $('#mode-list-toggle').addClass('active');
    $('#mode-col-toggle').removeClass('active');
    $('.search-cont-wrap .c-main').removeClass('mode-col');
    $('.search-cont-wrap .c-main').addClass('mode-list');
});