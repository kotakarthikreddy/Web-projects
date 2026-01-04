<?php 
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
      <li class="nav-item active">
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
<br>

<div class="container">
	<div class="row">
		<?php 
   $con=mysqli_connect("localhost","root","","grocery_store");
   $qer=mysqli_query($con,"select * from items ORDER BY id DESC");

   while($res=mysqli_fetch_assoc($qer)) { 
    $idArray[] = array('id' => $res['id']);
    ?>
    <div class="col-sm-4">
     <form method="POST">

      <div class="card" style="width: 20rem;">
        <img style="max-height: 318px" class="card-img-top" src="<?php echo 'Admin/pages/'.$res['img'] ?>" alt="Card image cap">
        <div class="card-body">
          <h5  style="text-transform: uppercase;" class="card-title"><?php echo $res['name']; ?></h5>
          <p class="card-text">Price: <?php echo $res['price']; ?></p>
          <ul class="list-group list-group-flush">
            <?php if ($res['stocks'] != 0) { ?>
              <li class="list-group-item"><button name="<?php echo $res['id'] ?>" class="btn btn-block img-btn btn-warning">View Item</button></li>
            <?php }else{ ?>
              <li class="list-group-item"><button disabled  class="btn btn-block img-btn btn-warning">Item Out Of Stock</button></li>
            <?php } ?>

          </ul>
        </div>
        <div class="card-footer text-muted">
          <h5 style="color:#337ab7;">Rating <i style="color:#ffd700;" class="fa fa-star" aria-hidden="true"></i><a href="#"><?php echo "&nbsp;".$res['ratings']."/10"; ?></a></h5>
        </div>
      </div>

    </form><br><br>
  </div>
<?php } ?>
</div>
</div>

<?php 
foreach($idArray as $button){
  if(isset($_POST[$button['id']])){ 
   $_SESSION["btnid"] = $button['id'];
   echo "<script>window.location.href='itemPage.php';</script>";
 }
}
?>

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