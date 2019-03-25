<?php

// include_once '../objet/class_comment.php';

$nom_prenom = (!empty($_POST['name'])) ? $_POST['name'] : '' ;
$mail = (!empty($_POST['mail'])) ? $_POST['mail'] : '' ;
$commentaire = (!empty($_POST['message'])) ? $_POST['message'] : '' ;


// -----------------------------------REQUÃŠTE POUR AJOUTER UN COMMENTAIRE
$connec = new PDO("mysql:dbname=Portfolio", 'root', '0000');
$connec->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$request = $connec->prepare("INSERT INTO contact (nom_prenom , mail, commentaire) VALUES ('$nom_prenom' , '$mail', '$commentaire')");
$request->execute();

// $commentaire = new Commentaire;

// $commentaire->id = $id;
// $commentaire->nom_prenom = $nom_prenom;
// $commentaire->mail = $mail;
// $commentaire->commentaire = $commentaire;

// echo (json_encode($commentaire));

Header('Location: /Portfolio/index.html');

?>