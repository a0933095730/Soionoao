//商品輪播橫幅廣告
//一屏有6個商品
//總商品不要超過10個
//尺寸都可
//jqeury.js
//slick.js
//product-slider-v1.js.js

$(document).on('ready', function () {
    $(".responsive").slick({     
        lazyLoad: 'ondemand',       
        infinite: true,
        variableWidth: true,
        slidesToShow: 6,
        slideToScroll:1,
        dots: true,
        autoplay: true,//自動撥放
        autoplaySpeed: 1000,//自動撥放秒數                
        rows: 1,
        responsive: [
            {
                breakpoint: 480,
                settings: {                        
                    dots: false                
                }                    
            }
        ]
    });
    $('.responsive').on('afterChange', function(event, slick, currentSlide, nextSlide){
            $(".responsive").fadeIn( "slow" );
            $(".loading-block").hide();
    });              
});    
