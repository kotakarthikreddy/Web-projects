<?php
session_start();
$userId = $_SESSION["userId"]; 
if (empty($_SESSION['userId']))
{
echo "<script>window.location.href='../../login.php';</script>";
}
	include '../header/header.php';
?>
<br>
<div class="container" style="margin: 0px">
   	<div class="row">
   		<div class="col-md-12">
   			<table class="table table-hover">
	  <thead class="thead-dark">
	    <tr>
	      <th scope="col">ID</th>
	      <th scope="col">User Name</th>
	      <th scope="col">Item Name</th>
	      <th scope="col">Quantity</th>
	      <th scope="col">Amount</th>
	      <th scope="col">Date</th>
	    </tr>
	  </thead>
	  <tbody>
	  	<?php
		  	$viewOrder_qry = mysqli_query($con,"select * from booking");
		  	while($viewOrder_res = mysqli_fetch_assoc($viewOrder_qry)){
		?>
	    <tr>
	      <th scope="row"><?php echo $viewOrder_res['id'];?></th>
	      <?php
	      	$orderid = $viewOrder_res['id'];
	      	$usrnm_qry = mysqli_query($con,"SELECT users.username FROM booking INNER JOIN users ON booking.userId=users.id WHERE booking.id='$orderid' ");
	      	while($usrnm_res=mysqli_fetch_assoc($usrnm_qry)){$username = $usrnm_res['username'];}
	      ?>
	      <td><?php echo $username;?></td>
	      <td><?php echo $viewOrder_res['name'];?></td>
	      <td><?php echo $viewOrder_res['qty'];?></td>
	      <td><?php echo $viewOrder_res['amt'];?></td>
	      <td><?php echo $viewOrder_res['date'];?></td>
	    </tr>
	<?php } ?>
	  </tbody>
	</table>
   		</div>
   	</div>
</div>
<?php
	include '../footer/footer.php';
?>