<?php
//Сбор данных из полей формы. 
$name = $_POST['name'];// Берём данные из input c атрибутом name="name"
$phone = $_POST['phone']; // Берём данные из input c атрибутом name="phone"

$token = "1400715371:AAHNdk981NcQnEsh7ZPUT9W7K6w_DjyBWWs"; // Тут пишем токен
$chat_id = "-358565516"; // Тут пишем ID группы, куда будут отправляться сообщения
$sitename = "Monolith Job"; //Указываем название сайта

$arr = array(

  'Заявка с сайта по подбору персонала: ' => $sitename,
  'Имя: ' => $name,
  'Телефон: ' => $phone
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>