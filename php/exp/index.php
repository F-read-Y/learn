<?php
	$booleans = [
		'Пустая строка' => (bool)'',
		'Число' => (bool)12,
		'Отрицательное число' => (bool)-1,
		'Строка' => (bool)'str',
		'Число с e' => (bool)2e5,
		'Массив' => (bool)array(12),
		'Пустой массив' => (bool)array(),
		'Строка с надписью false' => (bool)'false',
		'Ноль как число' => (bool)0,
		'Ноль как строка' => (bool)'0',
	]
?>

<!DOCTYPE html>
 <html>
 	<head>
 		<meta charset="utf-8">
 		<title>PHP</title>
 	</head>
 	<body>
		<p>
			<?php
				foreach ($booleans as $key => $value) {
					$temp = ($value) ? 'true' : 'false';
					echo "<b>$key</b> --> $temp";

					echo '<br>';
				}
			?>
		</p>
 	</body>
 </html>
