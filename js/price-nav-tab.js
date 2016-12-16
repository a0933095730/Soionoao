$('#priceNavTabs').on('click','a',function(){
    var $this = $(this);
    var flag = 0
    if ($this.parent().hasClass('active')){
        flag == 1;
    }
    $('#priceNavTabs').find('li').removeClass('active');
    $('#priceNavCont').children().hide();
    if (flag == 0 ){
        $this.parent().addClass('active')
        $('#priceNavCont').children(":eq(" + $this.data("tp") + ")").fadeIn();
    }
});