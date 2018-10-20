<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>PHP</title>
</head>
<body>
	<?php
			function solution($str) {
			  $result = '';
			  for ($i = count($str) - 1; $i >= 0; $i--) {
			    $result .= $str[$i];
			    echo '<p>' . strlen($str) . '</p>';
			  }
			  
			  return $result;
			}

			solution('Hello');

			// echo '<p>' . solution('Hello') . '</p>';
	?>
</body>
</html>