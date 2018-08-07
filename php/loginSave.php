<?php
	//接收前端的数据
	$username=$_POST['username'];
	$userpass=$_POST['userpass'];
	//连接数据库，添加到数据库中
	$conn=mysql_connect("localhost","root","root");
	if(!$conn){
		echo "connect fail";
	}else{
		//2.选择数据库
		mysql_select_db("myvip",$conn);
		//3.执行插入语句
		$sqlstr="select * from vip where useraccount='".$username."' and password='".$userpass."'";
		$result=mysql_query($sqlstr,$conn);
		if(mysql_num_rows($result)>0){
			$rows="1";					//代表用户存在
		}else{
			$rows="0";					//代表用户不存在
		}
		
		//4.关闭数据库
		mysql_close($conn);
	}
	echo $rows;
	
?>
