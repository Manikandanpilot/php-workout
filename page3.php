<?php



session_start();

$name=$_SESSION['name'];







?>






<!DOCTYPE html>
<html>
<head>
<title>mywebsite </title>
</head>
<body>
<h1>Hi welcome to my page</h1>
<h1><?php echo  $name ?></h1>


</form>
</body>

</html>