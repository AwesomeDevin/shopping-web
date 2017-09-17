<?php
header('Content-type: text/html;charset=utf-8');

$user = $_POST['user'];
$pwd = $_POST['pwd'];

// $pwd = md5($pwd);

$conn = new mysqli('localhost', 'root', '123456', 'jd','3306');

// $conn->query('set names utf8');
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}

$sql = "SELECT * from users WHERE user='$user' and password='$pwd'";

$result = $conn->query($sql);


$data = array(
    'code' => 0,
    'msg'  => '登录成功！'
);

if ($result->num_rows > 0) {


    $row = $result->fetch_assoc();

//  $data['nickname'] = $row['nickname'];


    echo json_encode($data);
} else {
    $data['code'] = 1;
    $data['msg'] = '登录失败！';
    echo json_encode($data);
}

$conn->close();
?>