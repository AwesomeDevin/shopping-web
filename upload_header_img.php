<?php
header('Content-type: text/html;charset=utf-8');

$user = $_POST['user'];
$head_img = $_POST['head_img'];
//printf($user);
//printf($head_img);
//$head_img='2nAmqlvsJw3NtslNNHKuxXSB8SxVVvhcyubrQ61A3NdvdltVqRXasdcFeKOgPYtI01eCevy55ftlSFrzB4qScReiZSlrqptJm79gm5bmlKmEygW+/vUOM+sjJZcrl5ZhB2ud4OvL4+MB6m+E4b0udxj1819U4syylSler9HW24nA4o6gnpUoWgU4KRXnWeSpQIxOS0/6M68CHD2Pu7m4Rf/GDRN7e3hIEIXXT8PzyzOPTXFkjw5HLKO1TnA44pkpiasF9hqOhLlwUNVXZ8fvv/4hleoRhrKG+P+zwPIcw8qmrnP265GJs8fHuPcM0Qfzd30zk+9uPHE850+krT8+v5NrA3wzboGWcRLiWofGWDgeMxkMdObebPWXR8of/+4pluVpUx+ORzaYk6qndVamiJOlZ3Ly70hxumwrxs59+J00z5P5+xuPTTO9aK9FUCXsOF6M+aeTiWioFGtplgtB7g3dRczhk/M/vvr6lRMugLDq9JEpACoWjkcv722viXsjxsGe9XiF+8e9/JbNM8uWLKrqiUmZqql+p27oMkhBblthGh+0YOs9OJmPiWOEtZ73eMX2Z69nKTlDXUrtMEJhEUcC7mysd4tSMl4sFr9Ml4pc//07O5xn39yums+NbarNNpJCYrkEU2MSewdW4TzpMMEwFdQVwpVQXy3RYLDbsd0ctJMtUMbXTM/V8RacEREee57zO5jw9LhC/+vm38o9/mDN7PbHelHSYOo42XY00OzwHhj0PzwbHNXFdQ8NdPz74PkKo7PsWtPtx/82oq/JP9qbg3+pHgrwoyY5npi9TxL/903v5/fdP7A+SvDB0lO+EpGxKOgG+C76pD6stSz3WpAODi8sRg/5AB22BhZAmpmnr3VbIVKbdtjVVU1PUNZ0U+G7I4nXJ/wMLxlJAceR5owAAAABJRU5ErkJggg==';
// $pwd = md5($pwd);

$conn = new mysqli('localhost', 'root', '123456', 'jd');

$conn->query('set names utf8');
//printf($user);
// printf()
//printf($head_img);
$sql = "UPDATE users SET head_img='$head_img' WHERE user='$user'";

$result = $conn->query($sql);
// $rs=MySQL_query($sql,$conn);

$data = array(
    'code' => 0,
    'msg'  => $head_img
);
echo json_encode($data);

// if (mysql_affected_rows()==0||mysql_affected_rows()>0) {


//     // $row = $result->fetch_assoc();

// //  $data['nickname'] = $row['nickname'];


//     echo json_encode($data);
// } else {
//     $data['code'] = 1;
//     $data['msg'] = '操作失败！';
//     echo json_encode($data);
// }

$conn->close();
 ?>