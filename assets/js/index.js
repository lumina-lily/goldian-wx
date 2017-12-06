(function(){
	$(function(){
		
		// init banner
       
		fnInitJlBanner();
		// init operation
		//fnInitOperation();
		
	});
    // init banner
    function fnInitJlBanner() {
        
        var swiperBanner = null,
            $oSlide = $('#slide-jl'),
            containerWidth = $oSlide.width();

        // 渲染swiper模板
        var _data = {
            list: [{
                link: 'javascript:;',
                img: '../assets/imgs/index/banner.png',
                text:'金大元集团董事长顾文元先生在联合国总部获颁“世界和平贡献奖”，顾先生与联合国助理秘书长托马斯·盖斯握手畅谈。'
            }, {
                link: 'javascript:;',
                img: '../assets/imgs/index/banner.png'
            }, {
                link: 'javascript:;',
                img: '../assets/imgs/index/banner.png'
            }, {
                link: 'javascript:;',
                img: '../assets/imgs/index/banner.png'
            }]
        };
        var _html = template('tplSlideJl', _data);
        $oSlide.find('.swiper-wrapper').html(_html);
        
        $oSlide.find('img').css({
            width: containerWidth,
            height: containerWidth / 2
        });
        if (swiperBanner !== null) {
            swiperBanner.destroy(true, true);
        }
        swiperBanner = null;
        swiperBanner = new Swiper('#slide-jl', {
            pagination: false,
            width: containerWidth,
            loop: true,
            centeredSlides: true,
            autoplay: false,
            speed: 500,
            autoplayDisableOnInteraction: false,
            preloadImages: false,
            lazyLoading: true,
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next'
        });
    }
     
})();