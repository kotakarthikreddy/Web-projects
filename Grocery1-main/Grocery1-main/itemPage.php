<?php 
session_start();
$userId = $_SESSION["userId"]; 
if (empty($_SESSION['userId']))
{
	echo "<script>window.location.href='login.php';</script>";
}

include 'header/header.php'
?>


<br>
<br>
<br>

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

			<li class="nav-item ">
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

$buttonId = $_SESSION["btnid"];	
$con=mysqli_connect("localhost","root","","grocery_store");
$qer=mysqli_query($con,"select * from items where id='$buttonId'");


?>

<?php while($res=mysqli_fetch_assoc($qer)) { ?>
	<div class="container">
		<div class="row">
			<div class="col-sm-6">
				<form method="POST" id="biddingForm">
					<div class="form-group">
						<img  id="myimg" class="img-thumbnail form-control"style="max-width:390px;" src="<?php echo 'Admin/pages/'.$res['img'] ?>" />
					</div>
					<div class="form-group">
						<h3 class="form-control" id="name" style="border:0px solid gray; font-size: 32px; text-transform:uppercase;"><?php echo $res['name']; ?>	
					</h3>
				</div>
				<div class="form-group">
					<h3 class="form-control" id="itemPrice" style="margin-top:0px; border:0px solid gray; font-size: 22px;">
						<?php echo "Price: &#x20b9; ".$res['price'];?>
					</h3> 
				</div>					
				<div class="form-group">
					<h3 class="form-control" id="stocks" style="margin-top:0px; border:0px solid gray; font-size: 22px;">
						<?php if($res['stocks'] == 1 ){
							echo "HURRY ONLY 1 LEFT!";
						}else{
							echo "ITEM IN STOCK";
						}?>
					</h3> 
				</div>				

				<div class="form-group">
					<label for="quantity" style="font-size: 24px;">Quantity</label>
					<?php if($res['stocks'] != 1 && $res['stocks'] != 0){ ?>
						<input type="text" id="quantity" class="form-control" name="quantity" placeholder="eg: 5">
					<?php }else{?>
						<span>We have only one item left!</span>
						<input type="text" id="quantity" disabled value ="1"class="form-control" name="quantity">
					<?php } ?>
					<br>
					<button id="submit" name="addCartBtn" class="btn btn-success">Add To Cart</button>
				</div>     		
			</form>
		</div>
		<div class="col-sm-6">
			<h1>DESCRIPTION OF THE PRODUCT.</h1>
			<br>
			<h5 style="color:#337ab7">Brand Name<a href="#"><?php echo "&nbsp;&nbsp;".$res['brand']; ?></a></h5>
			<br>
			<h5 style="color:#337ab7;">Rating <i style="color:#ffd700;" class="fa fa-star" aria-hidden="true"></i><a href="#"><?php echo "&nbsp;".$res['ratings']."/10"; ?></a></h5>
			<br>
			<p><?php echo $res['description']; ?></p>
		</div>                            
	</div>
</div>        

<?php } ?>

<br>
<br>
<br>

<script>

	$(document).ready(function(){

		var quantity = parseInt($("#quantity").text());

		$('input[type="text"]').on('input', function() {
			if ($(this).val() > 0 ) {
				$('#submit').attr("disabled", false);
			}else{
				$('#submit').attr("disabled", true);
			}
			
		});

		$("#submit").click(function(){
			var quantity=$("#quantity").val();
			
			var img = $('#myimg').attr('src');
			$.ajax({
				url:"cartData.php",
				method:"POST",
				data:{"getQty": quantity,"getImg":img},
				success:function(data)
				{
					alert(data);
					window.location='index.php';
				}
			});

		});
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
		}, 1000);
	});

</script>



<?php 
include 'footer/footer.php'
?>



