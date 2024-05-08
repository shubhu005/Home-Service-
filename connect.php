<?php
	
	$Username = $_POST['Username'];
	$email = $_POST['email'];
	$Password = $_POST['Password'];
	$ConfirmPassword = $_POST['Confirm Password'];
	$MobileNumber = $_POST['Mobile Number'];
	$ServiceType = $_POST['Service Type'];
	$ServiceDescription = $_POST['Service Description'];
	$ServiceArea = $_POST['Service Area'];
	$HourlyRate= $_POST['Hourly Rate'];
	$FixedRate  = $_POST['Fixed Rate '];
	

	// Database connection
	$conn = new mysqli('localhost','root','','test');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registration( Username,email,Password, Confirm Password,
		Mobile Number,Service Type,Service Description,Service Area,Hourly Rate,Fixed Rate) 
		values(?, ?, ?, ?, ? ,? ,? ,? ,? ,?)");
		$stmt->bind_param("ssssisssii", $Username , $email, $Password, $ConfirmPassword,$MobileNumber 
		$ServiceType,$ServiceDescription,$ServiceArea,$HourlyRate,$FixedRate);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?>