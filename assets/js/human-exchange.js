     	    var $oContentRwjl = $(".content-rwjl"),
	           $oMaxPic =$oContentRwjl.find("#max-pic"),
	           $aMaxPicItem = $oMaxPic.find("li"),
	           $aMaxPicBtn = $oMaxPic.find("a"),
	           $oMaxNextBtn = $oMaxPic.find("a.next"),
	           $oMaxPrevBtn = $oMaxPic.find("a.prev"),
	           $oMinPic =$oContentRwjl.find("#min-pic"),
	           $aMinPicItem = $oMinPic.find("li"),
	           $aMinPicBtn = $oMinPic.find("a"),
	           $oMinNextBtn = $oMinPic.find("a.next"),
	           $oMinPrevBtn = $oMinPic.find("a.prev"),
	           $oText =$oContentRwjl.find("#text"),
	           $aTextItem = $oText.find("li"),
	           $oPicList = $("#picList"),
	            _minwidth=0,
	            _minlenth=0,
	            _width=0;

               
	           _minwidth= $aMinPicItem.width() + 6;
	           _minlenth =  $aMinPicItem.length;
	           _width = _minwidth*_minlenth-2;

               $oMinPic.find("li").eq(_minlenth-1).addClass('col-last');
               $oPicList.width(_width);
                
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
	           	},

	           	moveright:function(_index){
                 if(_index>2){
                 	var _left = $oPicList.css('margin-left');
                 	 // console.log(_left);
                 	_left=_left.substr(0, _left.length-2);
                 	 // console.log(_left+'-----'+_index);
                 	$oPicList.css("margin-left",_left+_minwidth);
                 }
			    },

			    moveleft:function(_index){
	           	  	
	           	  	if(_index>=_minlenth-1){
			         	$oPicList.css("margin-left","0px");
			          	$aMinPicItem.eq(0).addClass('active-img');
			         }
			        else if(_index>2) {
				       $oPicList.css("margin-left",-_minwidth*(_index-2) +"px");
				    }
			      }
	            }
	           $aMinPicItem.on("click",function(){
	            _index = $(this).index();
	           		$.change.changeIndex(null,_index);
	           		if(_index>2) {
				       $oPicList.css("margin-left",-_minwidth*(_index-2) +"px");
				    }
	            })
                 
	            $aMaxPicBtn.on("click",function(){
	             _index=$oMaxPic.find("li:not('.hide')").index();
                 $.change.changeIndex($(this),_index);
	            })

	            $aMinPicBtn.on("click",function(){
	             _index=$oMinPic.find(".img-active").index();
                  $.change.changeIndex($(this),_index);
	            })

	            $oMaxNextBtn.on("click",function(){
	               $.change.moveleft(_index);  
	            })
	            $oMaxPrevBtn.on("click",function(){
                   $.change.moveright(_index);
	            })
	            $oMinNextBtn.on("click",function(){
	               $.change.moveleft(_index);  
	            })
	             $oMinPrevBtn.on("click",function(){
                   $.change.moveright(_index);
	             })
	