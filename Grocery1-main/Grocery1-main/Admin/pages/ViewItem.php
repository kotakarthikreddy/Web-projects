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
	      <th scope="col">Name</th>
	      <th scope="col">Brand</th>
	      <th scope="col">Catagory</th>
	      <th scope="col">Price</th>
	      <th scope="col">Stocks</th>
	      <th scope="col">Rating</th>
	      <th scope="col">Action</th>
	    </tr>
	  </thead>
	  <tbody>
	  	<?php
		  	$viewItem_qry = mysqli_query($con,"select * from items");
		  	while($viewItem_res = mysqli_fetch_assoc($viewItem_qry)){
		?>
	    <tr>
	      <th scope="row"><?php echo $viewItem_res['id'];?></th>
	      <td><?php echo $viewItem_res['name'];?></td>
	      <td><?php echo $viewItem_res['brand'];?></td>
	      <td><?php echo $viewItem_res['category'];?></td>
	      <td><?php echo $viewItem_res['price'];?></td>
	      <td><?php echo $viewItem_res['stocks'];?></td>
	      <td><?php echo $viewItem_res['ratings'];?></td>
	      <td>&emsp;<a href="EditItem.php?id=<?php echo $viewItem_res['id'];?>"><i class="fa fa-edit"></i></a></td>
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