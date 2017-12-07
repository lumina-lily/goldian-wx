(function(){
	$(function(){
		
		// init banner
        fnInitJlBanner();
		fnInitIMAGEBanner();
		// init operation
		//fnInitOperation();
		
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
                img: '../assets/imgs/index/index-jl1.png',
                text:'●金大元集团董事长顾文元先生在联合国总部获颁“世界和平贡献奖”，顾先生与联合国助理秘书长托马斯·盖斯握手畅谈。'
            }, {
                link: 'javascript:;',
                img: '../assets/imgs/index/index-jl2.png',
                text:"●高迪安集团的“人文”，共鸣于掌声响起的国际人文交流。在联合国总部，在联合国教科文组织，在B20峰会，在亚欧国际教育论坛，在许多世界级人物汇聚的场合，高迪安总是以自己的方式，向众人传递和分享着属于全社会的人文之光。高迪安集团董事长顾文元先生在联合国总部获颁“世界和平贡献奖”，顾先生与联合国助理秘书长托马斯·盖斯握手。"
            }, {
                link: 'javascript:;',
                img: '../assets/imgs/index/index-jl3.png',
                text:"●高迪安董事长顾文元先生在美国总统克林顿家中作客，并赠予海马龙、海马凤，与克林顿总统一家共叙人文与真爱。"
            }, {
                link: 'javascript:;',
                img: '../assets/imgs/index/index-jl4.png',
                text:"●高迪安董事长顾文元先生受邀出席德国总统花园庆典，在庆典上将海马龙、海马凤赠予德国联邦总统阿希姆•高克先生，高克总统盛赞“这是我见过的最美的礼物”。"
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
                img: '../assets/imgs/index/IMAGES2.png',
                text:['和平艾琳娜','融合东西方文化精髓，历经多年潜心创作，海马龙、海马凤、和平艾琳娜三大人文艺术瑰宝绽放，共同传播“和平、真爱”的世界愿景，成为企业人文地产品牌的创新特色，并参与了多项国际文化交流活动，得到了国内外友人的广告关注和好评融合东西方文化精髓，历经多年潜心创作，海马龙、海马凤、和']
            },{
                link: 'javascript:;',
                img: '../assets/imgs/index/IMAGES3.png',
                text:['海马龙','海马龙为海马与龙的结合，源自古老的东方大地，汲取西方文化的菁华，有着深厚的东西方文化历史底蕴。','海马龙','海马龙为海马与龙的结合，源自古老的东方大地，汲取西方文化的菁华，有着深厚的东西方文化历史底蕴。']
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