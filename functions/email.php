<?php
$name = htmlspecialchars($_POST['name'], ENT_QUOTES);
$email_from = htmlspecialchars($_POST['email'], ENT_QUOTES);
$comment = htmlspecialchars($_POST['comment'], ENT_QUOTES);

// return $_POST;
header('Content-type: application/json');
header("Content-Type:text/html; charset=UTF-8");
mb_language("japanese");
mb_internal_encoding("utf-8");

$sub1 = $name. "様からの送信【ポートフォリオ】";
$mail_to = 'riris.lafih.lovecat@gmail.com';
// $mail_to = 'portfolio@kokoiine.weblike.jp';

$success1=mb_send_mail($mail_to,$sub1,$comment,"From:".$email_from);

$res = true;
header('Content-type: application/json');
echo json_encode( ['data' => $res ] );
exit;