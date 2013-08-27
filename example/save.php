<?php

if(isset($_POST['data'])) file_put_contents('data.json', $_POST['data']);