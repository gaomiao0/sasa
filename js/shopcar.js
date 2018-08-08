$(function(){
	$(".public_footer").load("public-footer.html")
	$(".public_cb").load("public-cb.html")
//	购物车功能
//	加减功能
	$('.add').click(function(){
		var t = $(this).parents('.con').find('.vals');
		var p = $(this).parents('.con').find('.single i');
		var s = $(this).parents('.con').find('.sum i');
		t.val(parseInt(t.val())+1);
		s.html( (parseInt(t.val()) * parseFloat(p.html())).toFixed(2));
		sum();
	})
	
	$('.min').click(function(){
		var t = $(this).parents('.con').find('.vals');
		var p = $(this).parents('.con').find('.single i');
		var s = $(this).parents('.con').find('.sum i');
		t.val(parseInt(t.val())-1);
		if(t.val() <=1){
			t.val(1)
		}
		s.html( (parseInt(t.val()) * parseFloat(p.html())).toFixed(2))
		sum();
	})
//	选择功能
	$('.checkgoods').click(function(){
		if($('.checkgoods:checked').length == $('.checkgoods').length){
			$('.checkAll').prop('checked',true);
			sum();
		}else{
			$('.checkAll').prop('checked',false);
			sum();
		}
	})
//	全选功能
	$('.checkAll').click(function(){
		if($(this).is(':checked')){ 
			$(':checkbox').prop('checked',true);
			sum();
		}else{
			$(':checkbox').prop('checked',false);
			sum();
		}
	})
//删除商品
	$(".delete").click(function(){
		$(this).parentsUntil("dl").css({"display":"none"});
		$(this).addClass("hasdelete");
		sum();
	})
//选择,加减价格总计
	function sum(){
		var total_num = 0;
		var total_price = 0;
		$('.checkgoods').each(function(){
			if($(this).is(':checked')){
				var nums = parseInt($(this).parents('.con').find('.vals').val());
				var sums = parseFloat($(this).parents('.con').find('.sum i').html());	
					if($(this).parentsUntil("dl").find("delete").is("hasdelete")){
						nums=0;
						sums=0;
					}else{
						total_num += nums;
						total_price += sums;
					}
				
			}
			$('.already b').html(total_num);
			$('.totalpay b').html((total_price).toFixed(2))
		})
	}

//清空购物车
	$(".clearcar").click(function(){
		$(".con").css({"display":"none"})
	})

})