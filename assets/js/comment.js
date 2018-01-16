(function(){
	$(function(){
		 var $oHeader = $('.header'),
		     _HeaderH = $oHeader.height() + 28;
		    $('.container').css('padding-top', _HeaderH);
		
		if ($('#slide').length > 0){
			// init banner
        	fnInitBanner();
		}
		
		if ($('.sliding-door').length > 0){
			// init sliding-door
			fnInitSlidDoor();
		}
		
		// init menu mask
		fnInitMask();
		
		// init menu nav
		fnInitMenuNav();
		
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
                img: '../assets/imgs/index/banner1.png'
            }, {
            	link: 'javascript:;',
                img: '../assets/imgs/index/banner2.png'
            }, {
                link: 'javascript:;',
                img: '../assets/imgs/index/banner3.png'
            }, {
                link: 'javascript:;',
                img: '../assets/imgs/index/banner4.png'
            }, {
                link: 'javascript:;',
                img: '../assets/imgs/index/banner5.png'
            }, {
                link: 'javascript:;',
                img: '../assets/imgs/index/banner6.png'
            }]
        };
        var _html = template('tplSlide', _data);
        $oSlide.find('.swiper-wrapper').html(_html);
		
        $oSlide.find('img').css({
            width: containerWidth,
            height: containerWidth / 2.5
        });
        if (swiperBanner !== null) {
            swiperBanner.destroy(true, true);
        }
        swiperBanner = null;
        swiperBanner = new Swiper('#slide', {
            pagination: '.swiper-pagination',
            width: containerWidth,
            height: containerWidth / 2.5,
            loop: true,
            centeredSlides: true,
            autoplay: 5000,
            speed: 500,
            autoplayDisableOnInteraction: false,
            preloadImages: false,
            lazyLoading: true
        });
    }
    
    // init sliding-door 
    function fnInitSlidDoor(){
    	var $oContent = $('.content'),
    		$oSlidDoor = $oContent.find('.sliding-door'),
    		$oBanner = $oSlidDoor.find('.banner'),
    		$aBannerItem = $oBanner.find('img'),
    		$oNav = $oSlidDoor.find('.nav'),
    		$aNavItem = $oNav.find('a'),
    		$oNavList = $oSlidDoor.find('.nav-list'),
    		$aNavListItem = $oNavList.find('li');
    		
		$aNavItem.on('click', function(){
			var _index = 0;
			if(!$(this).hasClass('active')){
				_index = $(this).index();
				$aNavItem.removeClass('active');
				$(this).addClass('active');
				$aBannerItem.hide().eq(_index).show();
				$aNavListItem.hide().eq(_index).show();
				
				if(!$(this).hasClass('no-nav')){
					$('.menu-nav:not(.hide)').find('li').removeClass('active').eq(_index).addClass('active');
				}
				
			}
			
		});
    }
    
    // init menu mask
    function fnInitMask(){
    	var $oHeader = $('.header'),
    		$oMenu = $oHeader.find('.menu'),
    		$oMask = $('#mask'),
    		$oMenuList = $oMask.find('.menu-list'),
    		$aMenuItem = $oMenuList.find('li'),
    		$aMenuNav = $oMask.find('.menu-nav'),
    		$aMenuNavItem = $aMenuNav.find('li');
    	
    	var _state = "",
			_html1 = "",
			_html0 = "";
    	
    	$oMenu.on('click', function(){
    		
    		if($(this).hasClass('active')){
    			
    			$oMask.animate({
					left: '-100%'
				},300);
				
				$('body').off("touchmove");
    			
    			$(this).removeClass('active');
    		} else {
    			if($('.nav-list .page-v').length>0) {
	    			_state = $(".nav-list .page-v").eq(0).html().length==0;
					_html1 = $(".nav-list .page-v").eq(1).html();
					_html0 = $(".nav-list .page-v").eq(0).html();
	    			
	    			if(_state){
		               	$(".nav-list .page-v").eq(1).html("");
		    		} else {
		               	$(".nav-list .page-v").eq(0).html("");
		    		}
	    		}
    			
    			// prohibit page sliding
		    	$("body").on("touchmove",function(event){
					event.preventDefault;
				}, false);
				
				$('#mask').css('top',$('.header').height()+28);
				
				$oMask.animate({
					left: 0
				},300,function(){
					
					if(_state){
		               	$(".nav-list .page-v").eq(1).html(_html1);
		    		} else {
		               	$(".nav-list .page-v").eq(0).html(_html0);
		    		}
				});
				
				$(this).addClass('active');
				
    		}
    		
    	});
    	
    	$aMenuItem.on('click', function(){
    		var _index = 0;
    		
    		$aMenuItem.removeClass('active');
    		$(this).addClass('active');
    		
    		switch ($(this).index()){
    			case 1:
    				_index = 0; 
    				break;
				case 2:
					_index = 1;
    				break;
				case 3:
					_index = 2;
    				break;
				case 4:
					_index = 3;
    				break;
				case 6:
					_index = 4;
    				break;
    			default:
    				_index = -1;
    				break;
    		}
    		
    		$aMenuNav.hide();
    		
    		if(_index >= 0){
    			$aMenuNav.eq(_index).show();
    		}
    	});
    	
    	$aMenuNavItem.on('click', function(){
    		$aMenuNavItem.removeClass('active');
    		$(this).addClass('active');
    	});
    	
    }
    
    // get url param
	function GetQueryString(name) {
	    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	    var r = window.location.search.substr(1).match(reg);
	    if(r!=null)return  unescape(r[2]); return null;
	}
	
	// init menu nav
	function fnInitMenuNav(){
		// get url param
		var myurl=GetQueryString("classify")
			_nav = 0,
			_index = 0;
		if(myurl !=null && myurl.toString().length>1)
		{
		  	switch (myurl){
			  	case 'jtjs':
			  		_nav = 0;
			  		_index = 0;
			  		break;
		  		case 'rylc':
		  			_nav = 0;
		  			_index = 1;
	  				break;
				case 'dzkw':
					_nav = 0;
					_index = 2;
			  		break;
		  		case 'zaqy':
		  			_nav = 3;
		  			_index = 0;
	  				break;
				case 'zasx':
			  		_nav = 3;
			  		_index = 1;
			  		break;
		  		case 'love':
	  				_nav = 3;
	  				_index = 2;
	  				break;
				case 'zayx':
			  		_nav = 3;
			  		_index = 3;
			  		break;
		  		case 'rcln':
		  			_nav = 4;
					_index = 0;
	  				break;
				case 'zxns':
					_nav = 4;
					_index = 1;
			  		break;
		  		case 'lxwm':
		  			_nav = 4;
		  			_index = 2;
	  				break;
			  	default:
			  		break;
		  	}
		  	var $aNav = $('.nav a'),
		  		$aNavItem = $('.nav-list li'),
		  		$aMenuNav = $('.menu-nav');
		  	
		  	$aNav.removeClass('active').eq(_index).addClass('active');
		  	$aNavItem.hide().eq(_index).show();
		  	$aMenuNav.addClass('hide').eq(_nav).removeClass('hide');
		  	var $aMenuNavItem = $aMenuNav.eq(_nav).find('li');
		  	$aMenuNavItem.removeClass('active').eq(_index).addClass('active');
		  	
		  	
		  	var _width = $('.content').width(),
           	_vid = "",
           	_html = '<p style="text-align: center;width:'+_width+'px;"><iframe id="v-iframe" class="video_iframe" style="z-index:1; width:'+_width+'px; margin:0 auto; display:block;" src="http://v.qq.com/iframe/player.html?vid=',
          	_html2 = '&amp;width='+_width+'&amp;auto=0" allowfullscreen="" frameborder="0"></iframe></p>';

		  	if(myurl == 'zasx'){
		  		_vid = "y0323pm2r1n";
               	$(".nav-list .page-v").eq(1).html("");
               	$(".nav-list .page-v").eq(0).html(_html+_vid+_html2);
		  	}else if (myurl == 'zayx'){
		  		_vid = "a0324jpbw0w";
               	$(".nav-list .page-v").eq(0).html("");
               	$(".nav-list .page-v").eq(1).html(_html+_vid+_html2);
		  	}
		}
	}

         
})();