<?php
	//接收前端的数据
	$username=$_POST['username'];
	$userpass=$_POST['userpass'];
//	$userid=$_POST['userid']
	//连接数据库，添加到数据库中
	//1.建立连接，（数据库服务器）
	$conn=mysql_connect("localhost","root","root");
	if(!$conn){
		echo "connect fail";
	}else{
		//2.选择数据库
		mysql_select_db("myvip",$conn);
		//3.执行插入语句
		$sqlstr="select * from vip where useraccount='".$username."'";
		$sqlins="insert into userinfo values('".$username."','".$userpass."')";
		$result=mysql_query($sqlstr,$conn);
		if(mysql_num_rows($result)>0){
			$rows="0";
		}else{
			mysql_query($sqlins);
			$rows="1";
		}
		
		//4.关闭数据库
		mysql_close($conn);
	}
	echo $rows;
	
?>
