(function(){
	$(function(){
		
		// init banner
        fnInitJlBanner();
		fnInitIMAGEBanner();
		// change communication
        fnChangeIndex1();
		
	});
    //COMMUNICATION  banner
    function fnInitJlBanner() {
        
        var swiperBanner = null,
            $oSlide = $('#slide-jl'),
            containerWidth = $oSlide.width();

        // 渲染swiper模板
        var _data = {
            list: [{
                link: 'javascript:;',
                img: '../assets/imgs/index/index-jl1.png'
            }, {
                link: 'javascript:;',
                img: '../assets/imgs/index/index-jl2.png'
            }, {
                link: 'javascript:;',
                img: '../assets/imgs/index/index-jl3.png'
            }, {
                link: 'javascript:;',
                img: '../assets/imgs/index/index-jl4.png'
            }, {
                link: 'javascript:;',
                img: '../assets/imgs/index/index-jl5.png'
            }, {
                link: 'javascript:;',
                img: '../assets/imgs/index/index-jl6.png'
            }, {
                link: 'javascript:;',
                img: '../assets/imgs/index/index-jl7.png'
            }, {
                link: 'javascript:;',
                img: '../assets/imgs/index/index-jl8.png'
            }, {
                link: 'javascript:;',
                img: '../assets/imgs/index/index-jl9.png'
            }, {
                link: 'javascript:;',
                img: '../assets/imgs/index/index-jl10.png'
            }, {
                link: 'javascript:;',
                img: '../assets/imgs/index/index-jl11.png'
            }, {
                link: 'javascript:;',
                img: '../assets/imgs/index/index-jl12.png'
            }, {
                link: 'javascript:;',
                img: '../assets/imgs/index/index-jl13.png'
            }]
        };
        var _html = template('tplSlideJl', _data);
        $oSlide.find('.swiper-wrapper').html(_html);
      
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
    function fnChangeIndex1(){
       var $oSlideJl = $('#slide-jl'),
            $aSlide =$oSlideJl.find('.swiper-slide'),
            $oJlList = $('.jl-list'),
            $aJlItem = $oJlList.find('li'),
            $oBtnPrev = $oSlideJl.find('.swiper-button-prev'),
            $oBtnNext = $oSlideJl.find('.swiper-button-next'),
            _len = $aJlItem.length;
            console.log(_len);
            _index = 0;
            $oBtnPrev.on('click',function(){
                // _index = $(this).siblings('.swiper-wrapper').find('.swiper-slide-active').index();
                 if (_index == 0) {
                    _index = 12;
                 }else{
                  _index -= 1;
               }
              console.log(_index);
             $aJlItem.addClass('hide').eq(_index).removeClass('hide');
            });
             $oBtnNext.on('click',function(){
                // _index = $(this).siblings('.swiper-wrapper').find('.swiper-slide-active').index();
                  if(_index == 12){
                    _index=0;
                  }else{
                      _index += 1;
                  }
             
              console.log(_index);
             $aJlItem.addClass('hide').eq(_index).removeClass('hide');
            });
         
    }
     //COMMUNICATION  banner
 
    function fnInitIMAGEBanner() {
        
        var swiperBanner = null,
            $oSlide = $('#slide-IMAGE'),
            containerWidth = $oSlide.width();
        // 渲染swiper模板
        var _data = {
            list: [{
                link: 'javascript:;',
                img: '../assets/imgs/index/IMAGES1.png',
                text:['人文艺术瑰宝','融合东西方文化精髓，历经多年潜心创作，海马龙、海马凤、和平艾琳娜三大人文艺术瑰宝绽放，共同传播“和平、真爱”的世界愿景，成为企业人文地产品牌的创新特色，并参与了多项国际文化交流活动，得到了国内外友人的广告关注和好评']
            }, {
                link: 'javascript:;',
                img: '../assets/imgs/index/IMAGES3.png',
                text:['和平艾琳娜','东西方文化交融的完美艺术形象代表，她挺拔优雅地站立在涌动的海浪之上，意喻广阔的胸怀和爱心；头戴海马凤凤冠，象征和谐与幸运；左手执海马龙权杖，代表公正与威严；右手托起口衔橄榄枝的和平鸽，向世界传达着和平及真、善、美的精神。']
            },{
                link: 'javascript:;',
                img: '../assets/imgs/index/IMAGES2.png',
                text:['海马龙','东西方文化交融的完美艺术形象代表，她挺拔优雅地站立在涌动的海浪之上，意喻广阔的胸怀和爱心；头戴海马凤凤冠，象征和谐与幸运；左手执海马龙权杖，代表公正与威严；右手托起口衔橄榄枝的和平鸽，向世界传达着和平及真、善、美的精神。','海马凤','海马凤是海马与凤的结合，传承了东西文化的深刻意涵，与海马龙的缘圆结合，升华了爱的真谛。']
            }]
        };
        var _html = template('tplSlideIMAGE', _data);
        $oSlide.find('.swiper-wrapper').html(_html);
         
        if (swiperBanner !== null) {
            swiperBanner.destroy(true, true);
        }
        swiperBanner = null;
        swiperBanner = new Swiper('#slide-IMAGE', {
            pagination: false,
            // width: containerWidth,
            loop: true,
            centeredSlides: true,
            autoplay: 2000,
            speed: 500,
            autoplayDisableOnInteraction: false,
            preloadImages: false,
            lazyLoading: true
        });
    }
    //slidebar  
    // var headerH = $(".header").height(),
    //     slideallW = $(".slideall").width(),
    //     slideallH = $(".slideall").height() - headerH;

})();