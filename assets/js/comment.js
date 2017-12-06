(function(){
	$(function(){
		
		// init banner
        fnInitBanner();
		
		// init sliding-door
		fnInitSlidDoor();
		
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
                img: '../assets/imgs/index/banner.png'
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
    
    function fnInitSlidDoor(){
    	var $oContent = $('.content'),
    		$oSlidDoor = $oContent.find('.sliding-door'),
    		$oNav = $oSlidDoor.find('.nav'),
    		$oNavItem = $oNav.find('a'),
    		$oNavList = $oSlidDoor.find('.nav-list'),
    		$oNavListItem = $oNavList.find('li');
    		
		$oNavItem.on('click', function(){
			var _index = 0;
			if(!$(this).hasClass('active')){
				_index = $(this).index();
				$oNavItem.removeClass('active');
				$(this).addClass('active');
				$oNavListItem.hide().eq(_index).show();
			}
			
		});
    }
    
    
    
})();