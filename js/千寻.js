$(document).ready(function(){
	
	 
	 
	//设置七个页面切换的效果
	$('.nav ol li').click(function(e){
		var index = $(this).index();
		console.log(index);
		$(this).addClass('current').siblings().removeClass();
		$('.pageBox').stop().animate({top:-960*index+'px',},500);//让大盒子动
		//num = index;
		/*$('.pageBox').animate({
			top:-960*index+'px',
		},500);*/
	 });
})

