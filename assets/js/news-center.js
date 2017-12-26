(function(){
	$(function(){
		
			// bind news list
        	fnBindNewsList();
        	
        	// init news list
        	fnInitNewsList();
	});
	
	// init banner
    function fnBindNewsList() {
        
        var $oNewsList = $('.news-list');

        // 渲染swiper模板
        var _data = {
            list: [{
             	date: '7.15',
             	year: '2017',
                info: '今天，GOLDIAN与法国前总理交流真爱人文'
            }, {
            	date: '6.11',
             	year: '2017',
                info: '今天，GOLDIAN与法国前总理交流真爱人文'
            }]
        };
        var _html = template('tplNewsList', _data);
        $oNewsList.html(_html);
    }
    
    function fnInitNewsList(){
    	var $oContent = $('.content'),
    		$oNewsBox = $oContent.find('.news-box'),
			$oTitles = $oNewsBox.find('.titles'),
    		$oNewsList = $oContent.find('.news-list'),
    		$aItems = $oNewsList.find('li'),
    		$oBtnMore = $oContent.find('.btn-more'),
            _length = $aItems.length;
    		_height = 0;
    	
    	var titHeight = $oTitles.height();
    	//console.log(titHeight);
    	if(titHeight>36){
    		$oTitles.addClass('overflow').css('height','36px');
    	}
    	 
        if(_length>6){
           _height = ($aItems.height()+6)*6;
         }else{
           _height = ($aItems.height()+6)*_length;
        
         }
    	
    	$oNewsList.css('height',_height);
    	
    	$oBtnMore.on('click', function(){
    		var itemNum = $oNewsList.height()/($aItems.height()+6),
    			itemLength = $aItems.length;
    		if(itemLength-itemNum > 5){
    			_height += _height;
    			$oNewsList.animate({
    				height: _height
    			},200);
    		} else { 
    			_height = _height+($aItems.height()+6)*(itemLength-itemNum);
    			$oNewsList.animate({
    				height: _height
    			}, 200 ,function(){
    				$oBtnMore.text('已加载全部').unbind('click');
    			});
    		}
			
			
		});
    }
    
})();