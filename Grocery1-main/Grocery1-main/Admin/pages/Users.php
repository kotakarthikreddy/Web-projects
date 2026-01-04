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
   			<form method="POST">
	   			<table class="table table-hover table-dark">
				  <thead class="">
				    <tr>
				      <th scope="col">ID</th>
				      <th scope="col">Name</th>
				      <th scope="col">Email ID</th>
				      <th scope="col">Username</th>
				      <th scope="col">Block</th>
				    </tr>
				  </thead>
				  <tbody>
				  	<?php
					  	$viewUser_qry = mysqli_query($con,"select * from users where isAdmin = 0");
					  	while($viewUser_res = mysqli_fetch_assoc($viewUser_qry)){
					  		$idArray[] = array('id' => $viewUser_res['id']);
							$id = $viewUser_res['id'];
					?>
				    <tr>
				      <th scope="row"><?php echo $viewUser_res['id'];?></th>
				      <td><?php echo $viewUser_res['fullName'];?></td>
				      <td><?php echo $viewUser_res['email'];?></td>
				      <td><?php echo $viewUser_res['username'];?></td>
				      <td>
				      	<?php
							$ban_chck_qry= mysqli_query($con,"Select isBan from users where isAdmin = 0 && id = '$id'");
							while($ban_chck_res = mysqli_fetch_assoc($ban_chck_qry)){
								$isBan = $ban_chck_res['isBan'];
							}
							?>
							<button style="width: 62px;" name="<?php echo $viewUser_res['id'] ?>" class="">
								<?php
									if($isBan == 0){echo "Block";}
									elseif ($isBan == 1) { echo "Unblock";}
								?>
							</button>
				      </td>
				    </tr>
				<?php } ?>
				  </tbody>
				</table>
			</form>
   		</div>
   	</div>
</div>
<?php
	//BanUser//
		if(!empty($idArray))
		{
			foreach($idArray as $button)
			{
				if(isset($_POST[$button['id']]))
				{ 
					$id = $button['id'];
				   	$ban_chck_qry= mysqli_query($con,"Select isBan from users where isAdmin = 0 && id = '$id'");
					while($ban_chck_res = mysqli_fetch_assoc($ban_chck_qry)){
						$isBan = $ban_chck_res['isBan'];
					}
					if($isBan == 0){
						$Ban_qry = mysqli_query($con,"Update users SET isBan = 1 where id = '$id' ");
					}
					elseif ($isBan == 1) {
						$Ban_qry = mysqli_query($con,"Update users SET isBan = 0 where id = '$id' ");
					}
					if(!$Ban_qry)
					{
						echo $error;
					}
					else{
						echo "<script>window.location.href='Users.php';</script>";
					}
				}
			}
		}
	?>
<?php
	include '../footer/footer.php';
?>