(function(window, $, undefined) {

	// document ready events
	$(function() {
	    // 背景音乐
	    fnInitMusic();
	    // // 进度条的控制
	    //   initAudioEvent();
	});

// 背景音乐 
	function fnInitMusic(){
		var $oSongsSetion = $('.songs-setion'),
		    $oSongsBg = $oSongsSetion.find('.songs-bg')
			$oSongsMid = $oSongsBg.find('.songs-mid'),
			$oSongsR = $oSongsBg.find('.songs-right'),
			$oBtnPlayer = $oSongsR.find('.play-icon'),
//			$oBtnPause = $oSongsR.find('.pause-icon'),
			$oPlayer = $oSongsSetion.find('.player');
		
		$oBtnPlayer.on('click',function(){
			if($(this).hasClass('pause-icon')){
				$oSongsMid.removeClass('play-rotate');
				$(this).removeClass('pause-icon');
		  		$oPlayer.get(0).pause();
			}else {
				$oSongsMid.addClass('play-rotate');
          		$(this).addClass('pause-icon');
		  		$oPlayer.get(0).play();		
			}
          	
		});
//		$oBtnPause.on('click',function(){
//        $oSongsMid.removeClass('play-rotate');
//		  	$oPlayer.get(0).pause();
//		});
		$('.all-breadcrumb-right li').on('click',function(){
			 $oSongsMid.removeClass('play-rotate');
		  	$oPlayer.get(0).pause();
		});
		$('.header .nav-list li').on('click',function(){
			 $oSongsMid.removeClass('play-rotate');
		  	$oPlayer.get(0).pause();
		});
		$('.header .second-nav li').on('click',function(){
			 $oSongsMid.removeClass('play-rotate');
		  	$oPlayer.get(0).pause();
		});
		// $('.progress-bar').on('click',function(){
  //           $oSongsMid.addClass('play-rotate');
		//   	$oPlayer.get(0).play();	
  //      });
//		$('.page-v').on('click',function(){
//			console.log('-----'+$('#audio').get(0).paused);
//		});
	}
})(window, jQuery);