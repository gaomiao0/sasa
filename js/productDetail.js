$(function(){
	$(".public_header").load("public-header.html")
	$(".public_footer").load("public-footer.html")
	$(".public_cb").load("public-cb.html")
	$(".left_album").load("bigmirror.html")
	
	$(".nav_left").hover(function(){
		$(".detail_nav").css({"display":"block"})
	},function(){
		$(".detail_nav").css({"display":"none"})
	})
//	优惠
	$(".pro_act div span").hover(function(){
		$(this).children(".s").css({
			"display":"block",
		})
	},function(){
		$(this).children(".s").css({
			"display":"none",
		})
	})
	
//	规则
	$(".pro_rul_ul li div").hover(function(){
		$(this).addClass(".span");
	},function(){
		$(this).removeClass(".span");
	})
	
//	分享
	$(".share_div a").hover(function(){
		$(this).addClass("ah_share");
	},function(){
		$(this).removeClass("ah_share");
	})
	
	
  //加个屏幕滚动事件，c是滚动条相当于文档最顶端的距离

//  信息点击导航
	$(".clearfix li").on("click",function(){
		let w = $(this).width()
		let index=$(this).index()
		$(".nav_line").animate({
			"left":w*index+10+"px"
		},200)
	})
//	吸顶锚点导航
    $(document).scroll(function(){
  //当滚动的屏幕距离大于等于导航栏本身离最顶端的距离时（判断条件）给它加样式（根据自己业务的条件加样式，一般如下）*／
      	if($(document).scrollTop()>$('.prode_right').offset().top){
        	$('.nav-height').css({position:'fixed',top:'0'})
        }else{
    	 	$('.nav-height').css({'position':'relative',"top":"0"})
        }
        
        /*let w = $(".clearfix li").width()
		if($("html,body").scrollTop()>$("#section1").offset().top-70 && $("html,body").scrollTop()<$("#section2").offset().top-70){
			$(".nav_line").animate({
			"left":w+10+"px"
			},200)
			
		}else if($("html,body").scrollTop()>=$("#section2").offset().top-70 && $("html,body").scrollTop()<$("#section3").offset().top-70){
			$(".nav_line").animate({
			"left":w*1+10+"px"
			},200)
		}else if($("html,body").scrollTop()>$("#section3").offset().top-70){
			$(".nav_line").animate({
			"left":w*2+10+"px"
			},200)
		}*/
		
    })
    
	$("#div1Link").click(function() {
		console.log($(this).offset().top)
    $("html, body").animate({
        scrollTop: $("#section1").offset().top-70 }, );
    	return false;
    });
    $("#div2Link").click(function() {
		console.log($(this).offset().top)
        $("html, body").animate({
            scrollTop: $("#section2").offset().top-70 });
       		return false;
    });
    $("#div3Link").click(function() {
    	console.log($(this).offset().top)
        $("html, body").animate({
            scrollTop: $("#section3").offset().top-70 });
        	return false;
    });

	
		
    
})
