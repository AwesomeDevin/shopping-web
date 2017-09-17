<?php
header('Content-type: text/html;charset=utf-8');


// $postData=file_get_contents('php://input',true);
// $postData=json_decode($postData,true);
$user  = $_POST['user'];
$pwd = $_POST['pwd'];

// $password = md5($password);


$conn = new mysqli('localhost', 'root', '123456', 'jd');

$conn->query('set names utf8');

$data = array(
    'code' => 0,
    'msg'  => '注册成功！'
);

$sql1 = "SELECT id from users WHERE user='$user'";
$result = $conn->query($sql1);

if ($result->num_rows > 0) {
    $data['code'] = 2;
    $data['msg'] = '用户名已被注册了！';

    echo json_encode($data);
} else {
    $sql = "INSERT INTO users (user,password) VALUES ('$user', '$pwd')";

    if ($conn->query($sql) === true) {
        echo json_encode($data);
    } else {

        $data['code'] = 1;
        $data['msg'] = '注册失败！';

        echo json_encode($data);
    }
}

$conn->close();
?>