<?php
session_start();
$userId = $_SESSION["userId"]; 
if (empty($_SESSION['userId']))
{
echo "<script>window.location.href='../../login.php';</script>";
}
	include '../header/header.php';
?>
<div class="container">
	<br>
	<div class="row">
		<div class="col-lg-12">

		    <form method="POST" enctype="">
		    	<h3>Change Password</h3><hr><br>
		    	<label>Current</label>
			    <div class="form-group pass_show"> 
	                <input type="password" class="form-control" placeholder="Enter your current password" name="crnt_psw"> 
	            </div> 
			       <label>New Password</label>
	            <div class="form-group pass_show"> 
	                <input type="password" class="form-control" placeholder="Enter a new password" name="psw1"> 
	                <div class="cp-pass-cntnt-msg" id="psw1ttl" ></div>
	            </div> 
			       <label>Confirm Password</label>
	            <div class="form-group pass_show"> 
	                <input type="password" class="form-control" placeholder="Confirm your password" name="psw2">
	                <div class="cp-pass-cntnt-msg" id="psw2ttl"></div>

	            </div> 
	            <br>
	            <div class="form-group">
	            	<input type="submit" name="passchng" class="btn btn-success">
	            </div>
		    </form>
		    
            
		</div>  
	</div>
</div>
<?php
	if(isset($_POST['passchng']))
	{
		$crnt_psw = $_POST['crnt_psw'];
		$psw1  = $_POST['psw1'];
		$psw2 = $_POST['psw2'];
		$psw_chck_qry = mysqli_query($con,"select * from users where id = 1");
		while($psw_chck_res = mysqli_fetch_assoc($psw_chck_qry))
		{
			$password = $psw_chck_res['password'];
		}
		if($password == $crnt_psw)
		{
			if($psw1 == $psw2)
			{
				$psw_upd_qry = mysqli_query($con,"Update users SET password ='$psw1' where id = 1");
			}
			else{
				echo "<script>alert('New password and cofirm password doesnt match!');</script>";
			}
			if($psw_upd_qry){ echo "<script>alert('Password changed sucessfully!!');</script>"; }
		}
		else
		{
			echo "<script>alert('Enter your current password correctly');</script>";
		}

	}
		


	?>
<?php
	include '../footer/footer.php';
?>