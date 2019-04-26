(function(){
	//进场动画数组
	window.enter=[function(){},function(){},function(){},function(){}];
	//退场动画数组
	window.exit=[function(){},function(){},function(){},function(){}];

	//进场动画
	enter[0]=function(){
		//console.log('0号,进场');
		// 动画效果渐显
		$('.page0').fadeIn(300);
		//logo 16 html,21
		$('.aofeilogo').animate({opacity:1,top:300},1000,'linear',function(){});
		$('.zoomIn').attr('class','animated'); //84 109 html,23
		$('#aofeiwen').attr('class','aofeiwen'); //66 html,20
		$('.fly span').html('点击起航');
		lock=true;
	}
	enter[1]=function(){
		//console.log('1号进场');
		// 动画效果渐显
		$('.page1').fadeIn(300);
		// html,38
		$('#index-title').attr('class','animated');
		$('#slick-slide li').attr('class','aofeiwen1'); //css,304 html,96
		$('#slick-slide').attr('class','aofeiwen1');
		lock=true;
	}
	enter[2]=function(){
		//console.log('2号进场');
		$('.page2').fadeIn(300);
		$('.page2 #index-title').attr('class','animated');
		lock=true;
	}
	enter[3]=function(){
		//console.log('3号进场');
		$('.page3').fadeIn(300);
		$('.page3 #index-title').attr('class','animated');
		$('.page3 #w1000').attr('class','animated5');
		$('.fly span').html('返回顶部');
		lock=true;
	}
	//退场动画
	exit[0]=function(){
		//console.log('0号,出场');
		$('.page0').fadeOut(330);
		lock=true;

	}
	exit[1]=function(){
		//console.log('1号出场');
		$('.page1').fadeOut(330);
		lock=true;
		
	}
	exit[2]=function(){
		//console.log('2号出场');
		$('.page2').fadeOut(300);
		lock=true;
	}
	exit[3]=function(){
		//console.log('3号出场');
		$('.page3').fadeOut(300);
		lock=true;
	}
})()



	
// $('#dataa .dataa').click(function () {
// 	var id = $(this).attr('dataid');
// 	console.log(id);
// 	window.open('index3.html#'+id,'_self');
// });



//登录注册
// var json=localStorage.json;
// console.log(json);
// var jsonObj=JSON.parse(json);
// $('.login').html('欢迎'+jsonObj.username+'<a href="javascript:;" class="close" style="margin-top:-5px;">注销</a>');
// $('.close').click(function(){
// 	localStorage.clear();
// 	$('.login').html('登录');
// 	window.open('login.html','_self');4
// })


