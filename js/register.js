$(function(){
	var obj={
		"3":"jtjx",
		"5":"0x56",
		"2":"rh4y",
		"1":"ahxf",
		"4":"nvbk",
		"6":"buse",
		"7":"nwwr"
		}
	$("#imgsj").click(function(){							//图形验证码
			let $index=parseInt(Math.random()*7+1);
			$("#imgsj").prop("src","imgs/index-gen_vcode-LOGINVCODE-4 ("+$index+").png");
			
		})
	$("#changema").click(function(){							//图形验证码
			let $index=parseInt(Math.random()*7+1);
			$("#imgsj").prop("src","imgs/index-gen_vcode-LOGINVCODE-4 ("+$index+").png");
			
		})
//	验证码
	$("#yzimg").focusout(function(){
		if($(this).val().length==""){
			$(this).siblings().fadeIn()
		}
		if($(this).val().length!=""){
			for(let i in obj){
				if($(this).val() != obj[i]){
					$("i-yz").text("请输入正确的验证码")
					$(this).siblings().fadeIn()	
				}else{
					$(this).siblings().fadeOut()
				}
			}
		}
	})
	
	//用户名
	//邮箱或手机号
	$("#username").focusout(function(){
		if($(this).val().length == ""){
			$(".i-name").text("请输入邮箱或手机号码");
			$(this).siblings().fadeIn()
		}else{
			if(checkAll("email",$("#username").val()) || checkAll("phoneNumber",$("#username").val())){
				$.post("php/username.php",			//地址 项目需在服务器下运行连接数据库发送请求
					{"username":$("#username").val()},		//data
					data=>{
						if(data == 0){
							$(this).siblings().fadeIn() //注意this转移
							$(".i-name").text("该邮箱/手机号码已被注册");

						}else{
							$(this).css({"border":"1px solid #4AD150"})
							$(this).siblings().fadeOut()

						}
					});
			}else{
				$(".i-name").text("不合法的邮箱地址/手机号码");
				$(this).siblings().fadeIn()
			}
//		数据库验证
			
		}
	});


	
	//密码
	$("#userpass").focusout(function(){
		if($(this).val().length ==""){
			$(this).siblings().fadeIn();
		}else{
			$(this).siblings().fadeOut();
			$(this).css({"border":"1px solid #4AD150"});
		}
	})
	$("#userpass").keyup(function(){		
//		if($(this).val().length >=1){
			$(".strength").fadeIn();
			if(checkAll("password",$("#userpass").val())){
				$(".weak").css({"z-index":"0"});
				$(".good").css({"z-index":"0"});
				$(".strong").css({"z-index":"0"});
				$(".poor").css({"z-index":"100"});
				
			}
			if(checkAll("pass-weak",$("#userpass").val())){
				
				$(".poor").css({"z-index":"0"});
				$(".good").css({"z-index":"0"});
				$(".strong").css({"z-index":"0"});
				$(".weak").css({"z-index":"100"});
				
			}
			if(checkAll("pass-good",$("#userpass").val())){
				$(".good").css({"z-index":"100"});
				$(".poor").css({"z-index":"0"});
				$(".strong").css({"z-index":"0"});
				$(".weak").css({"z-index":"0"});
			}
			if(checkAll("pass-strong",$("#userpass").val())){
				$(".strong").css({"z-index":"100"});
				$(".good").css({"z-index":"0"});
				$(".poor").css({"z-index":"0"});
				$(".weak").css({"z-index":"0"});
			}
//		}
		
	});
	
	
	
	//确认密码
	$("#qrpass").focusout(function(){
		if($("#qrpass").val()==""){
			$(this).siblings().fadeIn();
		}
		else if($("#qrpass").val() !=""){
			if($("#userpass").val() != $("#qrpass").val()){
				$(".i-qrpass").text("两次输入的密码不一致");			//文本提示
				$(this).siblings().fadeIn();				//文本框样式变化
			}else{
				$(this).siblings().fadeOut();
				$(this).css({"border":"1px solid #4AD150"});
			}
		}
		
	});
	
	
	$("#btnsubmit").click(function(){							//点击提交时间
		$.post("php/createSave.php",
			{"username":$("#username").val(),"userpass":$("#userpass").val()},
			(data)=>{
					if(data == 1){
					alert("注册成功");
					window.location.href="login.html";
					}else{
						alert("用户名重复");
					}
				
			}
		)
	})
	
	
function checkAll(type,value){
	var reg = null;
	switch(type){
		case "username":reg = /^\w{5,20}$/;break;
		case "password":reg = /^\d{1,6}$/;break;
		case "pass-weak":reg=/^\d{6,10}$/;break;
		case "pass-good":reg=/^\w{10,15}$/;break; 
		case "pass-strong":reg=/^[a-zA-z]\w{15,20}$/;break;
		case "email":reg = /^\w+@[a-zA-Z0-9]+\.(com|cn|net|top|vip)$/;break;
		case "phoneNumber":reg = /^1[^0126]\d{9}$/;break;
		case "personId":reg = /^[1-9]\d{5}(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])\d{3}[0-9xX]$/;break;
		default:;
	}
	if(reg!=null){
		if(reg.test(value)){
			return true;
		}
	}
	return false;	
}
})
