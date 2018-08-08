$(function(){
	$(".public_header").load("public-header.html")
	$(".public_footer").load("public-footer.html")
	$(".public_cb").load("public-cb.html")
	
//	$(".nav_left").hover(function(){
//		$(".detail_nav").css({"display":"block"})
//	},function(){
//		$(".detail_nav").css({"display":"none"})
//	})
	$(".s_img").hover(function(){
		$(this).parent().addClass("show")
		
	},function(){
		$(this).parent().removeClass("show")
	})
	
	$(".list ul li").each(function(i){
		if((i+1)%4==0){

			$(this).addClass("right_li");
			$(this).find(".goods_li_in").removeClass("goods_li_in").addClass("goods_right_li")
		}
	})
})