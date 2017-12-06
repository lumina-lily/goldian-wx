(function(){
	$(function(){
		
		// init banner
        fnInitBanner();
		
		// init operation
		//fnInitOperation();
		
	});
	
	// init banner
    function fnInitBanner() {
        
        var swiperBanner = null,
            $oSlide = $('#slide'),
            containerWidth = $oSlide.width();

        // 渲染swiper模板
        var _data = {
            list: [{
             	link: 'javascript:;',
                img: '../assets/imgs/index/banner_01.jpg'
            }, {
            	link: 'javascript:;',
                img: '../assets/imgs/index/banner_01.jpg'
            }, {
                link: 'javascript:;',
                img: '../assets/imgs/index/banner_01.jpg'
            }, {
                link: 'javascript:;',
                img: '../assets/imgs/index/banner_01.jpg'
            }]
        };
        var _html = template('tplSlide', _data);
        $oSlide.find('.swiper-wrapper').html(_html);
		
        $oSlide.find('img').css({
            width: containerWidth,
            height: containerWidth / 2
        });
        if (swiperBanner !== null) {
            swiperBanner.destroy(true, true);
        }
        swiperBanner = null;
        swiperBanner = new Swiper('#slide', {
            pagination: '.swiper-pagination',
            width: containerWidth,
            height: containerWidth / 2,
            loop: true,
            centeredSlides: true,
            autoplay: 5000,
            speed: 500,
            autoplayDisableOnInteraction: false,
            preloadImages: false,
            lazyLoading: true
        });
    }
    
    
})();