<!DOCTYPE html>
<?php
	$con = mysqli_connect("localhost","root","","grocery_store");
?>
<html>
<head>
	<title></title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!--===============================================================================================-->	
	<link rel="icon" type="image/png" href="../images/icons/favicon.ico"/>
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="../vendor/bootstrap/css/bootstrap.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="../fonts/font-awesome/css/font-awesome.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="../css/style.css">
	<!--===============================================================================================-->
	<script src="../vendor/jquery/jquery-3.2.1.min.js"></script>
	<!--===============================================================================================-->
	
</head>
<body>
	<div class="row">
		<div class="col-md-3">
			<div class="left-body">
				<div class="lb-header">
					<h1><div class="square"></div>&nbsp;Greenocery</h1>
				</div>
				<form class="projectmakers-search-form" role="search">
		          <div class="input-group">
		              <button type="submit" class="fa fa-search"></button>
		              <input type="text" class="form-control" placeholder="Search" name="srch-term" id="srch-term">           
		          </div>
		        </form>
		        <div class="mobile-menu-icon">
		            <i class="fa fa-bars" id="mobile_menuIcon" onclick="MobileMenuShow()"></i>
		        </div>
				<nav class="lft-menu" id="lft_menu">
					<ul class="sidebar-menu">
						<li class="treeview">
							<a href="AddItem.php">
								<i class="fa fa-plus"></i>
								<span>Add Items</span>
							</a>
						</li>
						<li class="treeview">
							<a href="ViewItem.php">
								<i class="fa fa-eye"></i>
								<span>View Items</span>
							</a>
						</li>
						<li class="treeview">
							<a href="Orders.php">
								<i class="fa fa-opencart"></i>
								<span>Orders</span>
							</a>
						</li>
						<li class="treeview">
							<a href="Users.php">
								<i class="fa fa-group"></i>
								<span>Users</span>
							</a>
						</li>
						<li class="treeview">
							<a href="Settings.php">
								<i class="fa fa-wrench"></i>
								<span>Settings</span>
							</a>
						</li>
						<li class="treeview">
							<a href="logout.php">
								<i class="fa fa-sign-out"></i>
								<span>Log out</span>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
		<div class="col-md-9">