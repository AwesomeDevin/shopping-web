<?php
header('Content-type: text/html;charset=utf-8');

$user = $_GET['email'];

// $pwd = md5($pwd);

$conn = new mysqli('localhost', 'root', '123456', 'jd');

$conn->query('set names utf8');

$sql = "SELECT * from users WHERE user='$user'";

$result = $conn->query($sql);



$data = array(
    'code' => 0,
    'msg'  => '登录成功！'
);

if ($result->num_rows > 0) {


    $row = $result->fetch_assoc();
    $data['password']=$row['password'];
//  $data['nickname'] = $row['nickname'];


    echo json_encode($data);
} else {
    $data['code'] = 1;
    $data['msg'] = '登录失败！';
    echo json_encode($data);
}

$conn->close();
 ?>