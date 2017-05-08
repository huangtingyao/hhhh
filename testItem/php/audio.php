<?php
header('content-type:application:json;charset=utf8');  
header('Access-Control-Allow-Origin:*');  
header('Access-Control-Allow-Methods:POST');  
header('Access-Control-Allow-Headers:x-requested-with,content-type');  
	
	$db = mysql_connect("bdm27195635.my3w.com","bdm27195635","49586563hty");
	mysql_query("SET NAMES 'UTF8'");

	if($db){
		mysql_select_db("bdm27195635_db",$db);
		 $sql = "SELECT * FROM audio";
			$result = mysql_query($sql);   
		    $results=array();
		    
		   
			while ($row = mysql_fetch_assoc($result)) {
			$results[] = $row;
			}
			echo json_encode($results); 
			mysql_close($db);
	}else{
		echo "yyyy";
	}
?>