
$(document).ready(function () { 
/*Title*/
    $.ajax({
         type: "GET",
         url: 'http://59.110.10.115/fun/websiteInfo/getWebsitesetting',
         data: {},
         success: function(data) {
            var titlename = data.data.title;
            $("title").html(titlename);
         },
         error: function() {

         }
     });


    $.ajax({
         type: "GET",
         url: 'http://59.110.10.115/fun/websiteInfo/getImgAdList?key=logo',
         data: {},
         success: function(data) {
            var IMGurl = 'http://59.110.10.115'+data.data.adList[0].imgUrl;
          

        $("#logofun88").find(".logocn").css("background-image", "url(" + IMGurl + ")");

         },
         error: function() {

         }
     });


if (getCookie("Agnts")==1){
  var usertoken = getCookie("s");
    $("#LoginUserName").text(getCookie("userName"));
    $("#LoginUserId").text(getCookie("LoginUserId"));  
    getAgentDateInfo(usertoken) ;                     
    $("#hbtn5").css("display","none")
    $("#logout").css("display", "block");
    $(".NoSubMenu1").attr("style","display:block");
    $(".NoSubMenu2").attr("style","display:block");
    $(".NoSubMenu3").attr("style","display:block");
    $("#userInfo").attr("style","display:block");
    $("#login").css("display", "none");
    }else{
    $("#login").css("display", "block");
    $("#hbtn5").css("display","block");
    $("#logout").css("display", "none");
    $(".NoSubMenu1").css("display", "none");
    $(".NoSubMenu2").css("display", "none");
    $(".NoSubMenu3").css("display", "none");
    $("#userInfo").attr("style","display:none");                            
    }

});
 function getAgentDateInfo(s){
    $.ajax({
    type: "GET",
    url: 'http://59.110.10.115/fun/agent/getamount',
    data: {s},
    success: function (data) {
            $("#UserMainyue").text(data.data.amount);
            $("#Usermonthyue").text(data.data.monthAmount);
            CreateCookie("UserMainyue", data.data.amount, 0);
            CreateCookie("Usermonthyue", data.data.monthAmount,0);
        },
    error: function (a,b,c) {
       alert(data.errMsg);
         }
    });
 };


        function Login(){
            $ = jQuery;

        var userName = $("#UserName").val();
        var password = $("#Password").val();
        if (!userName || !password) {
            Alert('请输入您的用户名与密码。', true);
            return false;
            }


             $.ajax({
                    type: "GET",
                    url: 'http://59.110.10.115/fun/agent/login',
                    data: {username:userName,password:password},
                    success: function (data) {
                        if(data.errCode!=0){
                            alert(data.errMsg)
                            return;
                        }

                        if(data.data.status=="1"){   

                            var s = data.data.s;
                            CreateCookie("Agnts", "1", 0);
                            CreateCookie("s", s, 0);
                            CreateCookie("userName", userName, 0);
                            CreateCookie("LoginUserId", data.data.userid, 0);
                            getAgentDateInfo(s);

                            $("#LoginUserName").text(userName);
                            $("#LoginUserId").text(data.data.userid);
                            $("#login").css("display", "none");
                            $("#hbtn5").css("display","none")
                            $("#logout").css("display", "block");
                            $(".NoSubMenu1").attr("style","display:block");
                            $(".NoSubMenu2").attr("style","display:block");
                            $(".NoSubMenu3").attr("style","display:block");
                            $("#userInfo").attr("style","display:block");
                            var isLogin = true;
                            var PokerRegister = "False";
                            alert("登录成功！")
                        }else{
                            alert("密码错误")
                        }
                        },
                    error: function (a,b,c) {
                       alert(data.errMsg);
                         }
                    });
              
            };

 

function Logout(){
    $ = jQuery;
    var isLogin = false;
                 CreateCookie("Agnts", "", -1);

                $("#login").css("display", "block");
                $("#hbtn5").css("display","block")
                $("#logout").css("display", "none");
                $(".NoSubMenu1").css("display", "none");
                $(".NoSubMenu2").css("display", "none");
                $(".NoSubMenu3").css("display", "none");
                $("#userInfo").attr("style","display:none");
                 window.location.reload();
                if (getCookie("Agnts") == "1") {
                    CreateCookie("Agnts", "", -1);
                }
                   



/*     $.ajax({
            type: "GET",
            url: 'http://59.110.10.115/fun/user/login',
            data: {username:userName},
            success: function (data) {
                 CreateCookie("Agnts", "", -1);

                $("#login").css("display", "block");
                $("#hbtn5").css("display,block")
                $("#logout").css("display", "none");
                $(".NoSubMenu1").css("display", "none");
                $(".NoSubMenu2").css("display", "none");
                $(".NoSubMenu3").css("display", "none");
                $("#userInfo").attr("style","display:none");
                 window.location.reload();
                if (getCookie("Agnts") == "1") {
                    CreateCookie("Agnts", "", -1);
                }
                    alert("登录成功！")
                
                },
            error: function (a,b,c) {
               alert(data.data.errMsg);
                 }
            });*/
      
}
function getCookie(c_name) {
  var c_value = document.cookie;
  var c_start = c_value.indexOf(" " + c_name + "=");
  if (c_start == -1) {
      c_start = c_value.indexOf(c_name + "=");
  }
  if (c_start == -1) {
      c_value = null;
  }
  else {
      c_start = c_value.indexOf("=", c_start) + 1;
      var c_end = c_value.indexOf(";", c_start);
      if (c_end == -1) {
          c_end = c_value.length;
      }
      c_value = unescape(c_value.substring(c_start, c_end));
  }
  return c_value;
}