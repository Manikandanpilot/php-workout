<?php



session_start();

$name=$_SESSION['name'];
$email=$_SESSION['email'];






?>






<!DOCTYPE html>
<html>
<head>
<title>mywebsite </title>
</head>
<body>
<h1>Hi welcome to my page</h1>
<h1><?php echo  $name ?></h1>
<h2><?php echo  $email ?></h2>
<a href="page3.php">click here</a>
</form>
</body>

</html>