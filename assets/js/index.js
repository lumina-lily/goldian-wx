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
            onlyExternal : true,
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
            // console.log(_len);
            _index = 0;
            $oBtnPrev.on('click',function(){
                // _index = $(this).siblings('.swiper-wrapper').find('.swiper-slide-active').index();
                 if (_index == 0) {
                    _index = 12;
                 }else{
                  _index -= 1;
               }
              // console.log(_index);
             $aJlItem.addClass('hide').eq(_index).removeClass('hide');
            });
             $oBtnNext.on('click',function(){
                // _index = $(this).siblings('.swiper-wrapper').find('.swiper-slide-active').index();
                  if(_index == 12){
                    _index=0;
                  }else{
                      _index += 1;
                  }
             
              // console.log(_index);
             $aJlItem.addClass('hide').eq(_index).removeClass('hide');
            });
         
    }

function fnChangeIndex1(){
    $oBtnPrev.on('click',function(){
        if(_index == 0){
            _index =12;
        }else{
            _index -=1;
        }
        $aJlItem.addClass('hide').eq(_index).removeClass('hide');
    });
    $oBtnNext.on('click',function(){
        if(_index == 12){
            _index
        }
    })  
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
                title:'人文艺术瑰宝',
                tit:'',
                text: ['融合东西方文化精髓，历经多年潜心创作，海马龙、海马凤、和平艾琳娜三大人文艺术瑰宝绽放，共同传播“和平、真爱”的世界愿景，成为企业人文地产品牌的创新特色，并参与了多项国际文化交流活动，得到了国内外友人的广告关注和好评']
            }, {
                link: 'javascript:;',
                img: '../assets/imgs/index/IMAGES2.png',
                title:'海马凤',
                tit:'和平 诚信 尊重',
                text:['海马与凤的结合 传承了东西方文化的深刻意涵，与海马龙的有缘结合，升华了爱的真谛。作为仁义礼智信这五种美德的象征与海马龙从容、大气相对应，柔美中蕴含着坚毅，呈现出自信、温柔、浪漫的唯美气息，也象征着互补、包容、和睦的情感真谛。']
            },{
                link: 'javascript:;',
                img: '../assets/imgs/index/IMAGES3.png',
                title:'海马龙',
                tit:'和平 包容 睿智',
                text:['海马与龙的结合，源自古老的东方大地，汲取西方文化的菁华，有着深厚的东西方文化历史内蕴，是人类美好希翼的象征，呈现出和平、包容、大度、大智慧的形象特征，体现了维护正义、扬善除恶，充满力量感的寓意。']
            },{
                link: 'javascript:;',
                img: '../assets/imgs/index/IMAGES4.png',
                title:'和平艾琳娜',
                tit:'和平 和谐 和美',
                text:['东西方文化交融的佳作，更是独创的完美艺术形象代表。头戴海马凤凤冠作为美的象征，意喻和谐与幸运；左手执海马龙法杖代表自信与尊严、右手托起展翅高飞的和平鸽，口衔五叶橄榄柱，向世界传达和平及人类真、善、美的精神。']
            }]
        };
        var _html = template('tplSlideIMAGE', _data);
        $oSlide.find('.swiper-wrapper').html(_html);
         
        if (swiperBanner !== null) {
            swiperBanner.destroy(true, true);
        }
        swiperBanner = null;
        swiperBanner = new Swiper('#slide-IMAGE', {
            // pagination: ture,
            // width: containerWidth,
            loop: true,
            centeredSlides: true,
            autoplay: 5000,
            speed: 500,
            autoplayDisableOnInteraction: false,
            preloadImages: false,
            autoHeight:true,
            lazyLoading: true
        });
           
    }

})();