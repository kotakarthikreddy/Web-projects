		</div>
	</div><!-- row -->
	</body>
	
	<script>
	$(document).ready(function(){

		$('#addItemform').on('submit',function(e){ 
		e.preventDefault();           
           $.ajax({  
                url:"addItemAjax.php",  
                method:"POST",  
                data: new FormData(this),
                contentType: false,
            	cache: false,
            	processData:false, 
                success:function(data)  
                {  
                     alert(data);  
                     window.location = 'ViewItem.php';
                     $('#uploadPic').reset();  
                }  
           });   
      });

		//add item
		/*$('#addItemSub').click(function(){
			$.ajax({
				url:"addItemAjax.php",
				method:"POST",
				data:$('#addItemform').serialize(),
				sucess:function(data)
				{
					alert(data);
					window.location='dashboard.php';
				}
			});
		});*/

		/*$('#editItemform').on('submit',function(e){ 
		e.preventDefault();           
           $.ajax({  
                url:"editItemAjax.php",  
                method:"POST",  
                data: new FormData(this),
                contentType: false,
            	cache: false,
            	processData:false, 
                success:function(data)  
                {  
                     alert(data);  
                     window.location = 'ViewItem.php';
                     $('#uploadPic').reset();  
                }  
           });   
      });*/
		//edit item
		$('#editItemSub').click(function(){
			$.ajax({
				url:"editItemAjax.php",
				method:"POST",
				data:$('#editItemform').serialize(),
                success:function(data)  
                {  
                     alert(data);  
                     window.location = 'ViewItem.php';
                } 
			});
		});

		var url = window.location.href;
	  	var array = url.split('/');
		var lastsegment = array[array.length-1];

      	$('.sidebar-menu li a').each(function(){
        	var li_url=$(this).attr('href');
          	if(li_url==lastsegment){
           	$(this).addClass('active');
           	}
        });

      	//change password
      	$('.pass_show').append('<span class="ptxt">Show</span>'); 


	});

	//change password
	$(document).on('click','.pass_show .ptxt', function(){ 
		$(this).text($(this).text() == "Show" ? "Hide" : "Show"); 
		$(this).prev().attr('type', function(index, attr){return attr == 'password' ? 'text' : 'password'; }); 
	});

	// Show mobile menu
	function MobileMenuShow() {
	  var x = document.getElementById("lft_menu");
	  if (x.style.display === "none") {
	    x.style.display = "block";
	  } else {
	    x.style.display = "none";
	  }
	}

</script>
<!--===============================================================================================-->
	<script src="../vendor/bootstrap/js/popper.js"></script>
	<script src="../vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
	<script src="../js/main.js"></script>


</html>
