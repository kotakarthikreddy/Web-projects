<?php
session_start();
$userId = $_SESSION["userId"]; 
if (empty($_SESSION['userId']))
{
echo "<script>window.location.href='../../login.php';</script>";
}
	include '../header/header.php';
?>
<div class="container" style="margin: 0px">
	<br>
	<form enctype="multipart/form-data" id="addItemform" method="POST">
		<div class="row">
			<div class="col-sm-6">
				<div class="form-group">
					<h3>Upload Image Of The Item</h3>
         			<input class="form-control inputarea-color" name="itemImg" type="file"><br>

         			<h3>Item Name</h3>
			        <input id="itemName" class="form-control inputarea-color" name="itemName" type="text"><br>

			        <h3>Brand</h3>
			        <input class="form-control inputarea-color" name="itemBrand" type="text"><br> 

			        <h3>Catagory</h3>
    				<select class="form-control inputarea-color" name="itemCat">
				      <option>Select</option>
				      <option value="Source1">Source1</option>
				      <option value="Source2">Source2</option>
				      <option value="Source3">Source3</option>
				      <option value="Source4">Source4</option>
				    </select><br>

			        <h3>Price</h3>
			        <input class="form-control inputarea-color" name="itemPrice" type="text"><br>

			        <h3>
			      	</h3>
			    </div> 
			      <input type="submit" name="addItemSub" class="btn btn-success" value="Submit" id="addItemSub">
			       <br>
			       <br>
			</div>
			<div class="col-sm-6">
				<div class="form-group">
					<h3>
				        Item Description
				    </h3>
			        <textarea name="itemDescription" class="form-control inputarea-color" name="itemDesc" id="" cols="45" rows="11" placeholder="Quantity , Storage Condition, Caloric Value, Dietary Preference, Maximum Shelf Life, Container Type, Common Name, etc."></textarea><br>

			        <h3>Rating</h3>
			        <input class="form-control inputarea-color" name="itemRate" type="text"><br>

			        <h3>Stocks</h3>
			        <input class="form-control inputarea-color" name="itemStocks" type="text"><br>
			    </div>
			</div>
		</div>
    </form>
		
  
	</div>
</div>
<?php
/*if(isset($_POST['addItemSub']))
{

	$images_arr = array();
	$filenamePic = $_FILES["itemImg"] ["name"];
	$tmpnamePic = $_FILES["itemImg"] ["tmp_name"];
	$folderPic = "../images/".$filenamePic;
	move_uploaded_file($tmpnamePic, $folderPic);

	//$itemImg = $_POST['itemImg'];
	$itemName = $_POST['itemName'];
	$itemBrand = $_POST['itemBrand'];
	$itemCat = $_POST['itemCat'];
	$itemPrice = $_POST['itemPrice'];
	$itemDescription = $_POST['itemDescription'];
	$itemStocks = $_POST['itemStocks'];
	$sql_qry = mysqli_query($con,"insert into items(name,price,category,stocks,description,img,brand) values('$itemName','$itemPrice','$itemCat','$itemStocks','$itemDescription','$folderPic','$itemBrand')");
	if (!$sql_qry)
	{
	  echo("Error description: " . mysqli_error($con));
	}
}*/
?>

<?php
	include '../footer/footer.php';
?>