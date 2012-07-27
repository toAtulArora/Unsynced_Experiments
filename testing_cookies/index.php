<?php
$expire=time() + 60*60*24*30;
setcookie("user", "Feynman", $expire);
?>

<html>
	<body>
		<h1><?php
			if (isset($_COOKIE["user"]))
				echo $_COOKIE["user"];
			else
				echo "Hello Mate!";
			?>
		</h1>
	</body>
</html>