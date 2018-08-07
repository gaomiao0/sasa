<?php
	$username=$_POST['username'];
	
	$conn=mysql_connect("localhost","root","root");
	if(!$conn){
		echo "connect fail";
	}else{
		mysql_select_db("myvip",$conn);
		$sqlstr="select * from vip where useraccount='".$username."'";
		$result=mysql_query($sqlstr,$conn);
		if(mysql_num_rows($result)>0){
			$rows="0";
		}else{
			$rows="1";
		}
		
		mysql_close($conn);
	}
	echo $rows;
	
?>
