$(function(){
	$("#btn").click(function(){
	$.post("php/loginSave.php",{"username":$("#username").val(),"userpass":$("#userpass").val()},
		function(data){
			if(data == 1){
				if($("#check").attr("checked") == "checked"){			//选中复选框时，保存cookie
					saveCookie("username",$("#username").val(),"7");
				}
					window.location.href="homepage.html";
			}else{
				alert("用户名或密码错误");
			}
		}
	)
	
})


function saveCookie(key,value,days){
	var d = new Date();
	d.setDate(d.getDate()+days);
	//var str = key+"="+value+";expires="+d.toGMTString();;
	//alert(str);
	//document.cookie = str //没有处理中文乱码
	document.cookie = key+"="+escape(value)+";expires="+d.toGMTString();//用escape进行中文编码
	
}
})
