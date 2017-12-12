     	    var $oContentRwjl = $(".content-rwjl"),
	           $oMaxPic =$oContentRwjl.find("#max-pic"),
	           $aMaxPicItem = $oMaxPic.find("li"),
	           $aMaxPicBtn = $oMaxPic.find("a"),
	           $oMinPic =$oContentRwjl.find("#min-pic"),
	           $aMinPicItem = $oMinPic.find("li"),
	           $aMinPicBtn = $oMinPic.find("a"),
	           $oText =$oContentRwjl.find("#text"),
	           $aTextItem = $oText.find("li"),
	           _index = 0;
	           $.change = {
	           	changeIndex:function(_obj,_index){
                    var _len = $aMaxPicItem.length;
                    // alert(_obj);
                    if(_obj != null){
		           		 if($(_obj).hasClass("prev")){
	                  
	                  	if(_index ==0) {
			            	_index=3;
			            }
	                  	else{
			              	_index--;
			            }
	                  }else{
	                   if (_len-1>_index &&_index>0){
			              	_index++;
			            } else if(_index ==0) {
			            	_index++;
			            } else {
			            	_index = 0;
			            }
	                  }
                    } 
	           		$aMinPicItem.removeClass('img-active').eq(_index).addClass('img-active');
	            	$aMaxPicItem.addClass('hide').eq(_index).removeClass('hide');
	            	$aTextItem.addClass('hide').eq(_index).removeClass('hide');
	           	}
	           }
	           $aMinPicItem.on("click",function(){
	            _index = $(this).index();
	           		$.change.changeIndex(null,_index);
	            })
                 
	            $aMaxPicBtn.on("click",function(){
	             _index=$oMaxPic.find("li:not('.hide')").index();
                 $.change.changeIndex($(this),_index);
	            })

	             $aMinPicBtn.on("click",function(){
	             _index=$oMinPic.find(".img-active").index();
                  $.change.changeIndex($(this),_index);
	            })