<?php 
if(filter_has_var(INPUT_POST))
{
    echo date in'
}
else{
    echo 'no data';
}

?>







<form method="post" action="<?php echo $SERVER['PHP_SELF']; ?>">
Name<input type="text" name="txt1">
<button type="submit" name="btn1">click me</button>
</form>
