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
    /*$(document).on('scroll',function(){
      let c = $(document).scrollTop();
      let b= $('.nav-height').offset();//返回或设置导航栏相对于文档的偏移(位置)
  //当滚动的屏幕距离大于等于导航栏本身离最顶端的距离时（判断条件）给它加样式（根据自己业务的条件加样式，一般如下）*／
      if(b.top<=c){
        $('.nav-height').css({'position':'fixed','top':'0px'})
        }else{
          $('.nav-height').css({'position':'relative',"top":'0'})
        }
     })*/
//  信息点击导航
	$(".clearfix li").click(function(){
		let w = $(this).width()
		let index=$(this).index()
		$(".nav_line").animate({
			"left":w*index+10+"px"
		},200)
	})
})