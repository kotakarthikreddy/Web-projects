<?php
session_start();
$userId = $_SESSION["userId"]; 
if (empty($_SESSION['userId']))
{
echo "<script>window.location.href='../../login.php';</script>";
}
	include '../header/header.php';
?>
<?php
if(isset($_GET['id']))
{
	$id=$_GET['id'];
	$_SESSION['id']=$id;
}
?>
<div class="container" style="margin: 0px">
	<br>
	<form enctype="multipart/form-data" id="editItemform" method="POST">
		<div class="row">
			<?php
			  	$viewItem_qry = mysqli_query($con,"select * from items where id='$id'");
			  	while($viewItem_res = mysqli_fetch_assoc($viewItem_qry)){
			?>
			<div class="col-md-6">
				<div class="form-group">
         			<h3>Item Image</h3>
         			<img src="<?php echo $viewItem_res['img'];?>" alt="<?php echo $viewItem_res['img'];?>" class="img-thumbnail"><br><br>
					<!--<h3>Upload Image Of The Item</h3>
         			<input class="form-control inputarea-color" name="itemImg" type="file" value="<?php //echo $viewItem_res['img'];?>"><br>-->

         			<h3>Item Name</h3>
			        <input id="itemName" class="form-control inputarea-color" name="itemName" type="text" value="<?php echo $viewItem_res['name'];?>"><br>

			        <h3>Brand</h3>
			        <input class="form-control inputarea-color" name="itemBrand" type="text" value="<?php echo $viewItem_res['brand'];?>"><br> 

			        <h3>Price</h3>
			        <input class="form-control inputarea-color" name="itemPrice" type="text" value="<?php echo $viewItem_res['price'];?>"><br>

			        <h3>
			      	</h3>
			    </div> 
			      <input type="submit" class="btn btn-success" value="Save" id="editItemSub">
			       <br>
			       <br>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<h3>
				        Item Description
				    </h3>
			        <textarea name="itemDescription" class="form-control inputarea-color" name="itemDesc" id="" cols="45" rows="14" placeholder="Quantity , Storage Condition, Caloric Value, Dietary Preference, Maximum Shelf Life, Container Type, Common Name, etc."><?php echo $viewItem_res['description'];?></textarea><br>

			        <h3>Catagory</h3>
    				<select class="form-control inputarea-color" name="itemCat">
				      <option>Select</option>
				      <option value="Source1"<?php if($viewItem_res['category'] == 'Source1'){ echo ' selected="selected"'; } ?>>Source1</option>
				      <option value="Source2"<?php if($viewItem_res['category'] == 'Source2'){ echo ' selected="selected"'; } ?>>Source2</option>
				      <option value="Source3"<?php if($viewItem_res['category'] == 'Source3'){ echo ' selected="selected"'; } ?>>Source3</option>
				      <option value="Source4"<?php if($viewItem_res['category'] == 'Source4'){ echo ' selected="selected"'; } ?>>Source4</option>
				    </select><br>

			        <h3>Ratings</h3>
			        <input class="form-control inputarea-color" name="itemRate" type="text" value="<?php echo $viewItem_res['ratings'];?>"><br>

			        <h3>Stocks</h3>
			        <input class="form-control inputarea-color" name="itemStocks" type="text" value="<?php echo $viewItem_res['stocks'];}?>"><br>
			    </div>
			     <input type="submit" class="btn btn-danger" value="Delete" id="deleteItemSub" name="deleteItemSub">
			       <br>
			       <br>
			</div>
		</div>
    </form>
		
    <?php
    	if(isset($_POST['deleteItemSub']))
    	{
    		$deleteItem_qry = mysqli_query($con,"Delete from items where id='$id'");
    		if($deleteItem_qry)
    		{
    			echo "<script>window.location.href='ViewItem.php';</script>";
    		}
    	}
    ?>
	</div>
</div>

<?php
	include '../footer/footer.php';
?>