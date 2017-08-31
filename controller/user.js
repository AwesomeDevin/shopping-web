var myCtrl = angular.module('myController3', []);

myCtrl.controller('userCtrl', ['$scope', '$state', '$rootScope', '$ionicPopup','$http', function($scope, $state, $rootScope, $ionicPopup,$http) {
    var loginuser = $rootScope.admin_user;

    if (!loginuser) {
        $state.go("main.login");
        return;
    }
    $scope.login_username = loginuser;
    $scope.showselect = false;
    $scope.decideselect = function() {
        $scope.showselect = !$scope.showselect;
    }

    $scope.quit_admin = function() {
        $scope.showConfirm();
    }


    $scope.showConfirm = function() {
        var confirmPopup = $ionicPopup.confirm({
            title: '退出登录',
            template: '您确认退出登录吗?',
            cancelText: '取消',
            okText: '确认'
        });
        confirmPopup.then(function(res) {
            if (res) {
                $rootScope.admin_user = null;
                localStorage.setItem('JDlogin_user', null);
                $state.go("main.home");
            } else {
                console.log('You are not sure');
            }
        });
    };

     $scope.showAlert = function() {
        var confirmPopup = $ionicPopup.alert({
           title:"信息",
            template: '修改成功!',

       buttons: [ {
            text: '确认',
            type: 'button-assertive',
           
          }]
        });
       
    };
   

    $scope.is_cut = false;

    $scope.uploadImage = function(files) {

        
        console.log(files[0]);
        if(!files[0])
        {
            return;
        }
        $scope.imgPreview(files[0])
    }

    $scope.headerImage = "";
    $scope.imgPreview = function(file) {
        var self = this;
        // var Orientation;
        EXIF.getData(file, function() {
                $scope.Orientation = EXIF.getTag(this, 'Orientation'); //去获取拍照时的信息，解决拍出来的照片旋转问题  
            })
            // 看支持不支持FileReader  
        if (!file || !window.FileReader) return;
        console.log(file.type);
        if (/^image/.test(file.type)) {
            // // 创建一个reader  
            // var reader = new FileReader();
            // // 将图片2将转成 base64 格式  
            // reader.readAsDataURL(file);
            // // 读取成功后的回调  
            // reader.onloadend = function() {
            //     var result = this.result;
            //     var img = new Image();
            //     img.src = result;
            //     //判断图片是否大于100K,是就直接上传，反之压缩图片  
            //     console.log(this.result.length)
            //     if (this.result.length <= (100 * 1024)) {
            //         $scope.headerImage = this.result;
            //         console.log($scope.headerImage);
            //     } else {
            //         img.onload = function() {
            //             var data = $scope.compress(img, Orientation);
            //             $scope.headerImage = data;
            //             console.log(this.result);
            //         }
            //     }
            // }
            var reader=null;
            reader = new FileReader();
            reader.readAsDataURL(file);
            console.log(file);
            reader.onload = function(e) {

                var oimg = document.getElementById("toshow_img");
                console.log(e);
                oimg.setAttribute("src", e.target.result);

                console.log(oimg);
                $scope.corpper(oimg);
            }
        } else {
            alert('不支持该图片格式');
        }
    }

    $scope.back=function(){
         $scope.cropper.destroy();
         $scope.is_cut=false;
    }


    $scope.toJudge=function(data){
         var img = new Image();
                img.src = data;
                //判断图片是否大于100K,是就直接上传，反之压缩图片  
                console.log(data.length)
                if (data.length <= (100 * 1024)) {
                    // $scope.headerImage = data;
                    console.log($scope.headerImage);
                    $scope.uploadToSave(data);
                } else {
                    img.onload = function() {
                        var data = $scope.compress(img, $scope.Orientation);
                        // $scope.headerImage = data;
                        // console.log(data);
                        $scope.uploadToSave(data);
                    }
                }
    }


    $scope.uploadToSave=function(imgdata){
        
        var data={
            user:$rootScope.admin_user,
            head_img:imgdata
        };
        postCfg = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            transformRequest: function (data) {
            return $.param(data);
            }
            };
        // var url='upload_header_img.php';
        // $http.post(url,data,postCfg).success(function(res,status){
        //     // console.log(res,status);
            // $scope.headerImage = data;
        // })
        var url='http://139.199.3.199:3000/data';
        $.ajax({
            url:url,
            type:'post',
            async:false,
            data:data,
            success:function(res,status){
                console.log(res,status);
                 $scope.headerImage = imgdata;
                // alert("修改头像成功!");
            }
        })
    }


    $scope.rotateImg = function(img, direction, canvas) {
        //最小与最大旋转方向，图片旋转4次后回到原方向      
        const min_step = 0;
        const max_step = 3;
        if (img == null) return;
        //img的高度和宽度不能在img元素隐藏后获取，否则会出错      
        var height = img.height;
        var width = img.width;
        var step = 2;
        if (step == null) {
            step = min_step;
        }
        if (direction == 'right') {
            step++;
            //旋转到原位置，即超过最大值      
            step > max_step && (step = min_step);
        } else {
            step--;
            step < min_step && (step = max_step);
        }
        //旋转角度以弧度值为参数      
        var degree = step * 90 * Math.PI / 180;
        var ctx = canvas.getContext('2d');
        switch (step) {
            case 0:
                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0);
                break;
            case 1:
                canvas.width = height;
                canvas.height = width;
                ctx.rotate(degree);
                ctx.drawImage(img, 0, -height);
                break;
            case 2:
                canvas.width = width;
                canvas.height = height;
                ctx.rotate(degree);
                ctx.drawImage(img, -width, -height);
                break;
            case 3:
                canvas.width = height;
                canvas.height = width;
                ctx.rotate(degree);
                ctx.drawImage(img, -width, 0);
                break;
        }

    }


    $scope.compress = function(img, Orientation) {
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext('2d');
        //瓦片canvas  
        var tCanvas = document.createElement("canvas");
        var tctx = tCanvas.getContext("2d");
        var initSize = img.src.length;
        var width = img.width;
        var height = img.height;
        //如果图片大于四百万像素，计算压缩比并将大小压至400万以下  
        var ratio;
        if ((ratio = width * height / 1000000) > 1) {
            console.log("大于100万像素")
            ratio = Math.sqrt(ratio);
            width /= ratio;
            height /= ratio;
        } else {
            ratio = 1;
        }
        canvas.width = width;
        canvas.height = height;
        //        铺底色  
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        //如果图片像素大于100万则使用瓦片绘制  
        var count;
        if ((count = width * height / 1000000) > 1) {
            console.log("超过100W像素");
            count = ~~(Math.sqrt(count) + 1); //计算要分成多少块瓦片  
            //            计算每块瓦片的宽和高  
            var nw = ~~(width / count);
            var nh = ~~(height / count);
            tCanvas.width = nw;
            tCanvas.height = nh;
            for (var i = 0; i < count; i++) {
                for (var j = 0; j < count; j++) {
                    tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);
                    ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
                }
            }
        } else {
            ctx.drawImage(img, 0, 0, width, height);
        }
        //修复ios上传图片的时候 被旋转的问题  
        if (Orientation != "" && Orientation != 1) {
            switch (Orientation) {
                case 6: //需要顺时针（向左）90度旋转  
                    $scope.rotateImg(img, 'left', canvas);
                    break;
                case 8: //需要逆时针（向右）90度旋转  
                    $scope.rotateImg(img, 'right', canvas);
                    break;
                case 3: //需要180度旋转  
                    $scope.rotateImg(img, 'right', canvas); //转两次  
                    $scope.rotateImg(img, 'right', canvas);
                    break;
            }
        }
        //进行最小压缩  
        var ndata = canvas.toDataURL('image/jpeg', 0.1);
        console.log('压缩前：' + initSize);
        console.log('压缩后：' + ndata.length);
        console.log('压缩率：' + ~~(100 * (initSize - ndata.length) / initSize) + "%");
        tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;
        return ndata;
    }

    $scope.ok=function(){
      
        
        // console.log($scope.cropper.getCroppedCanvas().toDataURL());
        // $scope.imgPreview($scope.cropper.getCroppedCanvas().toDataURL());
        $scope.toJudge($scope.cropper.getCroppedCanvas().toDataURL());
          $scope.cropper.destroy();
          $scope.is_cut=false;
    }


    $scope.corpper = function(image) {
        $scope.is_cut = true;
        console.log(image);
        $scope.cropper=null;
        $scope.cropper = new Cropper(image, {
            resizable:false,
            aspectRatio: 1 / 1,
            guides:false,
            dragCrop:false,
            background:false,
            autoCropArea:0.7,
            movable:false,
            crop: function(e) {
                console.log(e.detail.x);
                console.log(e.detail.y);
                console.log(e.detail.width);
                console.log(e.detail.height);
                console.log(e.detail.rotate);
                console.log(e.detail.scaleX);
                console.log(e.detail.scaleY);
            },
            ready: function() {
                // console.log(cropper.getCroppedCanvas(), image1);
                // cropper.getCroppedCanvas().setAttribute('id', 'canvas_img');


                // console.log(image1.toDataURL());
            },
            // cropend: function() {
            //     callbcak($scope.cropper.getCroppedCanvas().toDataURL());
            // }
        });
    }




    $http.getUserHeaderImage=function(){
         var data={
            user:$rootScope.admin_user,
            
        };
        postCfg = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            transformRequest: function (data) {
            return $.param(data);
            }
            };
        var url='get_header_img.php?user='+$rootScope.admin_user;
        $http.get(url).success(function(res,status){
            // console.log(res,status);
            $scope.headerImage=res.head_img;
        })
    }
     $http.getUserHeaderImage();
}])