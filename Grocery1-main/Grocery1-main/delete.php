
<?php 
$itemId = $_GET['id'];


$dbname = "grocery_store";
$conn = mysqli_connect("localhost", "root", "", $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "DELETE FROM cart WHERE itemId = $itemId"; 
	if (!mysqli_query($conn, $sql)) {
		die('Error: ' . mysqli_error($conn));
	}
$sql1 = "UPDATE items SET stocks = stocks + 3 WHERE id=$itemId";
    if (!mysqli_query($conn, $sql1)) {
		die('Error: ' . mysqli_error($conn));
	} 
	mysqli_close($conn);
     header('Location: viewCart.php');


 ?>

