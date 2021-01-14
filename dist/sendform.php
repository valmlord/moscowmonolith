<?php
//Сбор данных из полей формы. 
$name = $_POST['name'];// Берём данные из input c атрибутом name="name"
$phone = $_POST['phone']; // Берём данные из input c атрибутом name="phone"

$token = "1544030197:AAG2VFiOGQ3enRDAjvUF_-nm-XmzHX1XE10"; // Тут пишем токен
$chat_id = "-326534097"; // Тут пишем ID группы, куда будут отправляться сообщения
$sitename = "Moscow Monolith"; //Указываем название сайта

$arr = array(

  'Заявка с сайта: ' => $sitename,
  'Имя: ' => $name,
  'Телефон: ' => $phone
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>