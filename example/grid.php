<?php

require_once '../vendor/autoload.php';

$twig = new Twig_Environment(new Twig_Loader_Filesystem('twig/'));

try{
	$data = json_decode(file_get_contents('data.json'));
}catch(Exception $e){
	$data = null;
}

?><!DOCTYPE html>
<html>
	<head>
	</head>
	<body>
		<?php if(!empty($data) && is_array($data)): ?>
			<?php echo $twig->render('grid.twig', array('grid' => $data)); ?>
		<?php endif; ?>
	</body>
</html>