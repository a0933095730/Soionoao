$('.mall-btn-wrap').on('click','a',function(){
    var offsetTopValue = $('#offsetTopValue').offset().top
    var $this = $(this);
    var flag = 0;    
    var targetMall = $('.index-banner-wrap').children(":eq(" + $this.data('tp') + ")");
    if ($this.hasClass('active')){
        flag == 1;
    }
    $('.mall-btn-wrap').find('a').removeClass('active');
    if(flag == 0){        
        $this.addClass('active');
        $('html,body').animate({scrollTop: targetMall.offset().top -offsetTopValue},500);
        
    }    
});