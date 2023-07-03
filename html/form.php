<?php
$nom=$_POST['nom'];
$prenom=$_POST['prenom'];
$age=$_POST['age'];
$pass=$_POST['password'];
$pays=$_POST['pays'];
$ok=isset($_POST['ok']) ? 'oui' : "faux";

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <label for="">nom :</label><br>
    <label for="">prenom :</label><br>
    <label for="">age :</label><br>
    <label for="">password :</label><br>
    <label for="">pays :</label><br>
    <label for="">partage ses donner :</label><br>
</body>
</html>