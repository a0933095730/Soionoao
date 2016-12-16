//小商品輪播廣告
//一頁有三個商品
//右上角有頁碼
//mouserenter切換
//尺寸從240px~300px 過小跑板 過大不好看
//置放在jqeury.js之後
//不需要任何其他的套件

$('.xs-slider-nav').on('mouseenter', '.btn', function(){
    var $this = $(this); //btn
    var flag = 0;
    if ( $this.hasClass("active") == true){
        flag == 1;
    }
    $('.xs-slider-nav').find('.btn').removeClass("active");
    $('.xs-slider-for').children().hide();
    if (flag == 0){
        $this.addClass("active");
        $(".xs-slider-for").children(":eq(" + $this.data("tp") + ")").show();
    }
});