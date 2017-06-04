$('.btn-open').off('click').on('click',function(){
    $('.bd').addClass('open');
    $(this).hide();
});