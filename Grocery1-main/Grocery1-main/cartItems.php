<?php
session_start();
$userId = $_SESSION["userId"];

$con=mysqli_connect("localhost","root","","grocery_store");
$qer=mysqli_query($con,"select count('itemId') from cart where userID = $userId");
$row=mysqli_fetch_array($qer);
echo "$row[0]";
?>