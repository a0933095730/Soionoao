//backToTop
$(window).on('scroll' , function(){
    // console.log($(window).scrollTop())
    if ( $(window).scrollTop() > 300){
        if( $('.backToTop').length == 0){
            $('body').append('<a href="javascript:void(0);" class="backToTop" style="display: none;"></a>');
            $(".backToTop").on('click', function() {
                $('body').animate({ scrollTop: 0} , 500);
            });
        }
        $('.backToTop').fadeIn(300);
    }
    else{
        $('.backToTop').fadeOut(300);
    }
});

//repalce text
$('.relaceText').on('click','a',function(){
    var $this = $(this);
    $this.parents('ul').prev().find(".spanText").text($this.text());
});
//rwd menu
if ( $(window).width() <= 992 ){
    $('#all-menu-open').click(function(){
        $('#all-menu-wrap').fadeIn(100);
        $('body').addClass("modal-open");
    })
    $('#all-menu-close').click(function(){
        $('#all-menu-wrap').fadeOut(100);
        $('body').removeClass("modal-open");
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
        $('body').append('<div class="mask"></div>');//.addClass('modal-open')
        $('.mask').addClass('fade');
    });
    $('#mask-toggle').mouseleave(function(){
        $('.mask').remove();
        // $('body').removeClass('modal-open');
    });
}
//search mode-col
$('#mode-col-toggle').click(function(){
    $('#mode-col-toggle').addClass('active');
    $('#mode-list-toggle').removeClass('active');    
    $('.mode-wrap').removeClass('mode-list');
    $('.mode-wrap').addClass('mode-col');
});
//search mode-list
$('#mode-list-toggle').click(function(){
    $('#mode-list-toggle').addClass('active');
    $('#mode-col-toggle').removeClass('active');
    $('.mode-wrap').removeClass('mode-col');
    $('.mode-wrap').addClass('mode-list');
    
});

var oldPositionY = 0; //給舊的$(window).scrollTop()初始值0
var navbarHeight =  $('#navbar').height(); //抓高度
var marginTopValue = $('#navbar').height() + 20 ; //header fixed之後給下面主框架一個margin-top
$(window).on('scroll',function(){
    var newPositionY = $(this).scrollTop();
    if($(this).scrollTop() > navbarHeight ){ //大於header高度才作用 比較自然
        if(newPositionY - oldPositionY > 0 ){ // 往下滑
            $('#navbar').css('position', '').removeClass('max').addClass('min');
            
            $('#offsetTop').css('margin-top', '0');
        }
        else{ //往上滑
            $('#navbar').css('position', 'fixed').addClass('max').removeClass('min');
            $('#offsetTop').css('margin-top', marginTopValue);
        } 
    } 
    else if($(this).scrollTop() <= 0){ //回到上方恢復初始值
        $('#navbar').css('position','');
        $('#offsetTop').css('margin-top', '0');
    }
    oldPositionY = newPositionY; //新的位置等於舊的位置
});