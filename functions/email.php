<?php 

$name = htmlspecialchars($_POST['name'], ENT_QUOTES);
$email_from = htmlspecialchars($_POST['email'], ENT_QUOTES);
$comment = htmlspecialchars($_POST['commenta'], ENT_QUOTES);

// return $_POST;
header('Content-type: application/json');
header("Content-Type:text/html; charset=UTF-8");
mb_language("japanese");
mb_internal_encoding("utf-8");
   
$mail = "info@startout.work";
$sub1 = $name. "プロフィールからの送信";
$mail_to = 'riris.lafih.lovecat@gmail.com';
   
   
$success1=mb_send_mail($mail_to,$sub1,$comment,"From:".$email_from);
   
$res = $name."送信が完了しました！";
header('Content-type: application/json');
// echo json_encode( ['data' => $res ] );
exit;