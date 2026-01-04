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
<br>
<br>

<?php 
$originalOwner = $_SESSION["fullName"];

$qer=mysqli_query($con,"select * from booking where userId = '$userId'"); ?>
<div class="container-fluid">
 <?php 
 while($res=mysqli_fetch_assoc($qer)) {
   
   $itemName = $res["name"]; ?> 
      <div class="alert alert-success">
        <strong>Booking Confirmed!</strong> <?php echo "Your ".$itemName." will be delivered to you soon" ?>.
      </div>
    <?php }  ?>
    <div class="alert alert-info">
      <strong>Nothig New</strong> We will notify.
    </div>

</div> 


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
  }, 1000);
}); 
</script>



<?php 
include 'footer/footer.php'
?>