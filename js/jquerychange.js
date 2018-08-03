$(function(){
//		账号购物车
		$(".member_link ul li").hover(function(){
			$(this).children(".shopdetail").slideDown(200);
		},function(){
			$(this).children(".shopdetail").slideUp(200);
		})
//		二维码分享
		$(".share").hover(function(){
			$(this).children(".ewm").fadeIn(400);
		},function(){
			$(this).children(".ewm").fadeOut(400);
		})
//		导航品牌
		$(".nav_right ul li").hover(function(){
			$(this).children(".brand").show(400);
		},function(){
			$(this).children(".brand").hide(400);
		})
//		$(".detail_nav ul li p").each((i,k)=>{
//			$(k).css({
//			"background-position":"-5px "+(-(i*36+8))+"px"
//			})
//		})
//		侧边分类导航
		$(".detail_nav ul li").hover(function(){
			$(this).css({
			"background":"#fff"
			})
			$(this).children("div").children("a").css({
				"color":"#f23883"
			})
			$(this).addClass("fenleibg")
			$(this).children(".eachnav").css({"display":"block"})
		},function(){
			$(this).css({
			"background":"transparent"
			})
			$(this).children("div").children("a").css({
				"color":"#fff"
			})
			$(this).removeClass("fenleibg")
			$(this).children(".eachnav").css({"display":"none"})
		})
		//右侧边
		$(".cbox ul li").hover(function(){
			$(this).children(".cb_silde").fadeIn(400);
		},function(){
			$(this).children(".cb_silde").fadeOut(400);
		})
		$(".gotop").click(function(){
			$('body,html').animate({scrollTop:0}, 1500);	
		})
//		滚动触发事件
		$(window).scroll(function(){
			let ch = document.documentElement.clientHeight;
			let top1= $('body,html').scrollTop()
			if($('body,html').scrollTop()==0){
				$(".gotop").fadeOut(200)
			}else if($('body,html').scrollTop()>=ch){
				$(".gotop").fadeIn(200)
			}
			if($('body,html').scrollTop()>=1003 && $('body,html').scrollTop()<5266){
				$(".left_cb").fadeIn(200)
//				侧边跟随变色
//				if(top1>1003 && top1<2159){
//					$(".oneli").addClass("scro_li_change")
//				}else if(top1>=2159 && top1<=4563){
//					$(".twoli").addClass("scro_li_change")
//				}else if(top1>4563 && top1<5216){
//					$(".threeli").addClass("scro_li_change")
//				}else{
//					$(".fourli").addClass("scro_li_change")
//				}
				
			}else if($('body,html').scrollTop()>=5266 || $('body,html').scrollTop()<1003){
				$(".left_cb").fadeOut(200)
			}
		})
//		轮播图
		var mySwiper = new Swiper ('.swiper-container', {
			    direction: 'horizontal',
			    loop: true,
			    autoplay:4000,
			    effect : 'fade',
			    autoplayDisableOnInteraction : false,
			    // 如果需要分页器
			    pagination: '.swiper-pagination',
			    paginationClickable :true,
			    
			    // 如果需要前进后退按钮
			//  nextButton: '.swiper-button-next',
			//  prevButton: '.swiper-button-prev',
			    
			    // 如果需要滚动条
			//  scrollbar: '.swiper-scrollbar',
			  })
		//公告
		/*function gonggaosilde(){
			var top1=0;
			var Timer = setInterval(function(){
				top1-=28;
				if(top1<-112){
					top1 = 0
				}
				$(".ol")[0].style.top = top1+"px"
			},1000)
		};*/
		function gonggaosilde(){
			let i=0;
			let Timer = setInterval(function(){
				i--
				if(i<-4){
					$(".ol").css({
						"top":"0px"
					})
					i = 0
				}
			
				$(".ol").animate({
					"top":28*i+"px"
				},2000)
			},3000)
		};
		gonggaosilde();
//		倒计时
	function GetRTime(){
       var EndTime= new Date('2018/08/8 09:00:00');//这里设置你预定的时间
       var NowTime = new Date();
       var t =EndTime.getTime() - NowTime.getTime();
       
       var h=Math.floor(t/1000/60/60%24);
       var m=Math.floor(t/1000/60%60);
       var s=Math.floor(t/1000%60);
       
       
		function toDouble(n) {
         return n < 10 ? '0' + n : n;
     	}

       $(".hour").html(toDouble(h)+" ");
       $(".minite").html(toDouble(m)+" ");
       $(".second").html(toDouble(s));
       
	}
   	setInterval(GetRTime,0);
   	
// 	footer部分a标签title属性设置
	$(".dl_list dl dd").children("a").hover(function(){
//		console.log($(this))
		let tit = $(this).text()
		$(this).prop("title",tit)
	},function(){
		
	})
})