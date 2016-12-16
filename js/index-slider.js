
//單張大輪播廣告
//最多六張 否則下方選單會過長
//使用套件slick-1.6.0
//語法規則請參考 https://github.com/kenwheeler/slick
//click切換
//尺寸沒有限制 唯一限制是每張尺寸都要一樣
//jqeury.js
//slick.js
//index-sldier.js

$('.lg-slider-for').on('init', function(event, slick, currentSlide, nextSlide){
    $('.lg-slider-for').fadeIn(1000);
    $(".loading-block").hide();
    $('.lg-slider-nav').not('.slick-initialized').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.lg-slider-for',
        dots: true,
        centerMode: false,
        arrows: false,
        focusOnSelect: true
        }).fadeIn(2000)
	}).not('.slick-initialized').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: false,
		asNavFor: '.lg-slider-nav',
		autoplay: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {                        					
					dots: true                
				}                    
			},
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
		]
	});

//如果要hover觸發 可用下面語法 但是好像有bug
// $('.slider-nav').on('mouseenter', '.slick-slide', function (e) {
//     var $currTarget = $(e.currentTarget), 
//         index = $currTarget.data('slick-index'),
//         slickObj = $('.slider-for').slick('getSlick');
//         slickObj.slickGoTo(index);
// }); 