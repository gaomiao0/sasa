$(function(){
	$.ajax({
		type:"GET",
		url: "php/getGoodsList.php",
   		success: function(data){
     		console.log(data);
     		let str = JSON.parse(data)
     		
   			for(var i=0;i<str.length;i++){
   				$(".p_img").eq(i).prop({src:str[i].goodsImg})
	     		$(".p_price").eq(i).text(str[i].goodsPrice)
	   			$(".zk").eq(i).html(str[i].beiyong2)
	   			$(".xiangqing").eq(i).text(str[i].goodsDesc)
	   			$(".p_tit").eq(i).text(str[i].goodsName)
	   			$(".guige").eq(i).text(str[i].beiyong1)
	   			$(".country2").eq(i).text(str[i].beiyong3)
   			}
   		}

	})
	
	
	
	$(".public_header").load("public-header.html")
	$(".public_footer").load("public-footer.html")
	$(".public_cb").load("public-cb.html")
	
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