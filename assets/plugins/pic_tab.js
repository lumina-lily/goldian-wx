//var $ = $.noConflict();
//ban_qh
$.fn.banqh = function(can){
	can = $.extend({
		box:null,//总框架
		pic:null,//大图框架
		pnum:null,//小图框架
		prev_btn:null,//小图左箭头
		next_btn:null,//小图右箭头
		prev:null,//大图左箭头
		next:null,//大图右箭头
		autoplay:false,//是否自动播放
		interTime:5000,//图片自动切换间隔
		delayTime:800,//切换一张图片时间
		order:0,//当前显示的图片（从0开始）
		min_picnum:null//小图显示数量
	}, can || {});
	
	var picnum = $(can.pic).find('ul li').length;
	var picw = $(can.pic).outerWidth(true);
	var picminnum = $(can.pnum).find('ul li').length;
	var picminw = (picw)/4;
	var pictime;
	var tpqhnum=0;
	var xtqhnum=0;

	var $oText = $("#text");
	var $aTextItem = $oText.find('li');
	
	$(can.pic).find('ul').width(picnum*picw);
	$(can.pic).find('ul li').width(picw);
	$(can.pnum).find('ul').width(picminnum*picminw);
	$(can.pnum).find('ul li').width(picminw-7);

	//点击小图切换大图
    $(can.pnum).find('li').click(function () {
        tpqhnum = xtqhnum = $(can.pnum).find('li').index(this);
        show(tpqhnum);
		minshow(xtqhnum);
    }).eq(can.order).trigger("click");

	if(can.autoplay==true){
		//自动播放
		pictime = setInterval(function(){
			show(tpqhnum);
			minshow(tpqhnum)
			tpqhnum++;
			xtqhnum++;
			if(tpqhnum==picnum){tpqhnum=0};	
			if(xtqhnum==picminnum){xtqhnum=0};
						
		},can.interTime);	
	}
	//小图左右切换			
	$(can.prev_btn).click(function(){
		if(tpqhnum==0){tpqhnum=picnum};
		if(xtqhnum==0){xtqhnum=picnum};
		xtqhnum--;
		tpqhnum--;
		show(tpqhnum);
		minshow(xtqhnum);	
	})
	$(can.next_btn).click(function(){
		if(tpqhnum==picnum-1){tpqhnum=-1};
		if(xtqhnum==picminnum-1){xtqhnum=-1};
		xtqhnum++;
		minshow(xtqhnum)
		tpqhnum++;
		show(tpqhnum);
	})	
	//大图左右切换	
	$(can.prev).click(function(){
		if(tpqhnum==0){tpqhnum=picnum};
		if(xtqhnum==0){xtqhnum=picnum};
		xtqhnum--;
		tpqhnum--;
		show(tpqhnum);
		minshow(xtqhnum);	
	})
	$(can.next).click(function(){
		if(tpqhnum==picnum-1){tpqhnum=-1};
		if(xtqhnum==picminnum-1){xtqhnum=-1};
		xtqhnum++;
		minshow(xtqhnum)
		tpqhnum++;
		show(tpqhnum);
	})
	//小图切换过程
	function minshow(xtqhnum){
		console.log(xtqhnum);
		var mingdjl_num =xtqhnum-can.min_picnum+2
		var mingdjl_w=-mingdjl_num*picminw;
		
		if(picminnum>can.min_picnum){
			if(xtqhnum<3){mingdjl_w=0;}
			if(xtqhnum==picminnum-1){mingdjl_w=-(mingdjl_num-1)*picminw;}
			$(can.pnum).find('ul').stop().animate({'marginLeft':mingdjl_w},can.delayTime);
		}
	}
	//大图切换过程
	function show(tpqhnum){
		var gdjl_w=-tpqhnum*picw;
		
		$(can.pic).find('ul').stop().animate({'marginLeft':gdjl_w},can.delayTime);
		
		$(can.pnum).find('li').eq(tpqhnum).addClass("on").siblings(this).removeClass("on");
	};
				
}
