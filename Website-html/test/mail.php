Thanks for your message! 
<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$call = $_POST['call'];
$website = $_POST['website'];
$priority = $_POST['priority'];
$type = $_POST['type'];
$message = $_POST['message'];
$body=" From: $name \n Email: $email \n Phone: $phone \n Call Back: $call \n Website: $website \n Priority: $priority \n Type: $type \n Message: $message";
$to = "annnieford@gmail.com";
$subject = "Contact Form";
// $mailheader = "From: $email \r\n";
mail($to, $subject, $body) or die("Error!");
//echo "Thank You!";
?>
