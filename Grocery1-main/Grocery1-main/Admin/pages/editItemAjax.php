<?php

	$con = mysqli_connect("localhost","root","","grocery_store");
	session_start();
	$id = $_SESSION['id'];

	$itemName = $_POST['itemName'];
	$itemBrand = $_POST['itemBrand'];
	$itemCat = $_POST['itemCat'];
	$itemRate = $_POST['itemRate'];
	$itemPrice = $_POST['itemPrice'];
	$itemDescription = $_POST['itemDescription'];
	$itemStocks = $_POST['itemStocks'];
	$sql_qry = mysqli_query($con,"update items SET name='$itemName',price='$itemPrice',category='$itemCat',stocks='$itemStocks',description='$itemDescription',brand='$itemBrand',ratings='$itemRate' where id='$id'");
	if (!$sql_qry)
  	{
  		echo("Error description: " . mysqli_error($con));
  	}
  	if ($sql_qry)
  	{
  		echo("Saved Sucessesfully");
  		//echo "<script>window.location.href='ViewItem.php';</script>";
  	}
?>