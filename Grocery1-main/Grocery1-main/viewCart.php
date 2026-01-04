<?php 
$con = mysqli_connect("localhost","root","","grocery_store");
session_start();
$userId = $_SESSION["userId"]; 
if (empty($_SESSION['userId']))
{
	echo "<script>window.location.href='login.php';</script>";
}

include 'header/header.php'
?>

<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
	<a class="navbar-brand" href="index.php">GreenOcery</a>

	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="collapsibleNavbar">
		<ul class="navbar-nav">
			<li class="nav-item ">
				<a class="nav-link" href="index.php">
					Home
				</a> 
			</li>

			<li class="nav-item active">
				<a class="nav-link" href="noticeBoard.php">
					Notifications
				</a> 
			</li>
		</ul>&nbsp;&nbsp;
		<?php if ($userId != NULL) { ?>
			<ul class="navbar-nav ml-auto">
				<li><a class="nav-item nav-link active" href="viewCart.php">Cart Items:</a></li>
				<li><a class="nav-item nav-link active" id="cartItems" href="viewCart.php"></a></li>&nbsp;&nbsp;
				<li><a href="logout.php" id="logout" class="btn btn-success">Log Out</a></li>&nbsp;&nbsp;
			</ul>
		<?php } ?>
	</div>
</nav>
<br>
<br>
<br>
<br>
<?php 
$originalOwner = $_SESSION["fullName"];

$qer=mysqli_query($con,"select * from cart where userId = $userId"); ?>
<div class="container-fluid">
	<table class="table table-bordered">
		<thead style="background-color:#5cb85c;">
			<tr>
				<th scope="col">Item Name</th>
				<th scope="col">Item Price</th>
				<th scope="col">Quantity</th>
				<th scope="col">Total</th>
				<th scope="col">Remover Item</th>
			</tr>
		</thead>
		<?php 
		$total= 0;
		while($res=mysqli_fetch_assoc($qer)) {	
			$total += $res['amt'];
			?>
			<tbody>
				<tr>
					<td id="itemName"><?php echo $res['name']; ?></td>
					<td id="itemAmt"><?php echo $res['amt']/$res["qty"]; ?></td>
					<td id="item"><?php echo $res['qty']; ?></td>
					<td id="item"><?php echo $res['amt']; ?></td>
					<?php echo "<td id='item'><a href='delete.php?id=".$res['itemId']."' class='btn btn-danger'>Remove Item</a></td>"; ?>
				</tr>
			</tbody>
		<?php } ?> 
		<tfoot style="color:red; text-transform: uppercase; font-weight: 500px; font-size: 25px;">
			<tr>
				<td>Grand Total</td>
				<td id="total"><?php echo $total; ?></td>
			</tr>
		</tfoot>
	</table>
	<form method="POST">
		<button name="bookBtn" class="btn btn-success">Place The Order!</button>
	</form>


	<?php if (isset($_POST["bookBtn"])) {
		$sql = "INSERT INTO booking (userId, itemId, name, qty, amt) 
		SELECT userId, itemId, name, qty, amt 
		FROM cart WHERE userId = $userId";
		if (!mysqli_query($con, $sql)) {
			die('Error: ' . mysqli_error($con));
		}$sql1 = "DELETE FROM cart WHERE userId=$userId";
		if (!mysqli_query($con, $sql1)) {
			die('Error: ' . mysqli_error($con));
		}echo "<script>alert('BOOKED'); window.location.href='index.php';</script>";
		
	} ?>
	
	<script>
		$(document).ready(function(){

			function getData(){
				$.ajax({
					type: 'POST',
					url: 'cartItems.php',
					success: function(data){
						$('#cartItems').html(data);
					}
				});
			}
			getData();
			setInterval(function () {
				getData(); 
			}, 1000)
		});
	</script>

	<?php 
	include 'footer/footer.php'
	?>