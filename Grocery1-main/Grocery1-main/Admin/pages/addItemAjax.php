<?php
	$con = mysqli_connect("localhost","root","","grocery_store");

	$images_arr = array();
	$filenamePic = $_FILES["itemImg"] ["name"];
	$tmpnamePic = $_FILES["itemImg"] ["tmp_name"];
	$folderPic = "images/".$filenamePic;
	move_uploaded_file($tmpnamePic, $folderPic);

	//$itemImg = $_POST['itemImg'];
	$itemName = $_POST['itemName'];
	$itemBrand = $_POST['itemBrand'];
	$itemCat = $_POST['itemCat'];
	$itemPrice = $_POST['itemPrice'];
	$itemDescription = $_POST['itemDescription'];
	$itemRate = $_POST['itemRate'];
	$itemStocks = $_POST['itemStocks'];
	$sql_qry = mysqli_query($con,"insert into items(name,price,category,stocks,description,ratings,img,brand) values('$itemName','$itemPrice','$itemCat','$itemStocks','$itemDescription','$itemRate','$folderPic','$itemBrand')");
	if (!$sql_qry)
	{
	  echo("Error description: " . mysqli_error($con));
	}
	if ($sql_qry)
	{
	  echo("Item Added Successfully!!");
	}
?>