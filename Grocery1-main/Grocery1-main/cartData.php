<?php  
session_start();
$buttonId = $_SESSION["btnid"];
$fullName = $_SESSION["fullName"];
$userId = $_SESSION["userId"];


$connect = mysqli_connect("localhost", "root", "", "grocery_store");
$qer=mysqli_query($connect,"select * from items where id='$buttonId'");

$quantity = $_POST['getQty'];
$img = $_POST['getImg'];





while($res=mysqli_fetch_assoc($qer)) {
	$stocks = $res['stocks'];
	$price = $res['price'];
	$name = $res['name'];
}

$amt = $quantity * $price;

if ($stocks >= $quantity) {
	$sql="INSERT INTO cart (itemId,userId,amt,qty,name,img) 
	VALUES('$buttonId','$userId',$amt,$quantity,'$name','$img')";
	if (!mysqli_query($connect, $sql)) {
		die('Error: ' . mysqli_error($connect));
	} 
	$sql="UPDATE items SET stocks = stocks - $quantity WHERE id=$buttonId";
	if (!mysqli_query($connect, $sql)) {
		die('Error: ' . mysqli_error($connect));
	} echo "Item successfuly added to cart!";

	mysqli_close($connect);

}else{
	echo "We can`t give you that much have some mercy!";
}



?>