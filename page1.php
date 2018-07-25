<?php
if(isset($_POST['submit']))
{
 session_start();
 $_SESSION['name']=$_POST['name'];
 $_SESSION['email']=$_POST['email'];
header('Location:page2.php');
}





?>






<!DOCTYPE html>
<html>
<head>
<title>mywebsite </title>
</head>
<body>
<h1>Hi welcome to my page</h1>
<form method="POST"   action="<?php echo $_SERVER['PHP_SELF'];?> ">
Name<input type="textbox" name="name" value="">
Email<input type="textbox" name="email" value="">
<button name="submit" value="submit">submit</button>
</form>
</body>

</html>