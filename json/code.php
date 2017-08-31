<?php
	header("Content-type:image/jpeg");
	$im=imagecreate(80,35);//生成画布
	imagecolorallocate($im,255,255,255);//背景色
	$white=imagecolorallocate($im,rand(0,255),rand(0,255),rand(0,255));//生成随机颜色
	for($i=0;$i<9;$i++) {
	 	imageline($im,rand(0,200),rand(0,100),rand(0,200),rand(0,100),$white);//生成干扰线条元素
	}
	for($i=0;$i<150;$i++) {
   		imagesetpixel($im,rand(0,200),rand(0,100),$white);//生成干扰点元素
	}
	
	$str='';
	
	for($i=0;$i<4;$i++) {
	 	switch(rand(1,3)) {
	  		case '1':
	  			$ch=rand(0,9);
	  			break; 
	  		case '2':
	  			$ch=sprintf('%c',rand(97,122));
	  			break;
	  		case '3':
	  			$ch=sprintf('%c',rand(65,90));
	  		break;
	 	}
	  	$str.=$ch;
	}
	
	$fnt="C:/WINDOWS/Fonts/SIMKAI.TTF";
	
	SetCookie('verificationCode', $str, time() + 7200, '/');
	
	imagettftext($im,16,rand(0,15),20,30,$white,$fnt,$str);//在画布上输出字符串
	
	imagejpeg($im);
	imagedestroy($im);
?>