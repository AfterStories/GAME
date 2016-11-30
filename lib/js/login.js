
 function Login() {
        var userName = $("#UserName").val();
        var password = $("#Password").val();

        // Variable for Login source checking
        var url404 = '../../../404/index.html';
        var url500 = 'http://www.fun8810.com/zh-CN/500';
        var accDenied = 'http://www.fun8810.com/zh-CN/Access-Denied';

        if (!userName || !password) {
            Alert('请输入您的用户名与密码。', true);
            return false;
        }
        
        getLoginLoading();
        $.post("/Services/Login.ashx?action=login",
                { login: userName, password: password, blackbox: $('input[id$=hidblackbox]').val() },
                function (data) {
                    if (data.Description === 'Success') {
                        CreateCookie("verifyform", "1", 0);
                        $("#RewardsDIV").html("<iframe id='RewardsOuterDIV' src='/Reward/zh-CN?Fun88Login=true' style='visibility:hidden;display:none;'></iframe>");

                        $("#RewardsOuterDIV").load(function () {
                            $(".loadingLoginGif").css("display", "none");
                            $("#RewardsDIV").html('');
                            if (window.location.href == url404 || window.location.href == url500 || window.location.href == accDenied) {
                                window.location.href = "/zh-CN/Default";
                            } else {
                                var location = window.location.href.indexOf('#');
                                window.location.href = (window.location.href.indexOf("/zh-CN/Home") != -1) ? "/zh-CN/Default" : ((location > 0) ? window.location.href.substring(0, location) : window.location.href);
                            }
                        });
                        window.gender = data.g;
                        
                    } else {
                        $(".loadingLoginGif").css("display", "none");
                        if (data.u === "registrationDeny") {
                            registerDeny();
                        } else
                            Alert(data.Description);
                    }
                },
                "json");
                return false;
            }



    function PopupLogin(Username, Password) {
        var userName = $("#txtUsn").val();
        var password = $("#txtPwd").val();
        var quickRegLogin = false;
        //Login overriding for quick registration
        if(Username && Password ) {
            userName = Username;
            password = Password;
            quickRegLogin = true;
        }

        if (!userName || !password || !window.Page_IsValid) {
            if (!userName || !password) {
                ClosePopupLogin();
                Alert('请输入您的用户名与密码。', true);
            }
            return false;
        }

        ClosePopupLogin();
        getLoginLoading();
        $.post("/Services/Login.ashx?action=login",
            { login: userName, password: password, blackbox: $('input[id$=hidblackbox]').val(), QuickRegLogin: quickRegLogin },
            function(data) {

                $(".loadingLoginGif").hide();
                if (data.Description === 'Success') {
                    CreateCookie("verifyform", "1", 0);

                    $("#RewardsControlDIV").html("<iframe id='RewardsOuterDIV' src='/Reward/zh-CN?Fun88Login=true' style='visibility:hidden;display:none;'></iframe>");

                    $("#RewardsOuterDIV").load(function(){
                        $("#RewardsControlDIV").html('');
                        if(getParameterByName("isRegSuccess"))
                            window.location.href = '/zh-CN/Registration-Success' + '?IsQuickReg=1';
                        else
                            window.location.href = (window.location.href.toLowerCase().indexOf("/zh-cn/home") != -1) ? "/zh-CN/Default" : window.location.href.substring(0, window.location.href.indexOf('#'));
                    });
                } else {
                    if (data.u === "registrationDeny") {
                        registerDeny();
                    } else
                        Alert(data.Description);
                }
            }, "json");

            return false;
        };


        

   function CBPopupLogin(url) {
        $("#ctl05_ProceedNextUrl").val(url);
        $.colorbox({
            inline: true,
            href: "#PL_notification_box",
            innerWidth: 364,
            innerHeight: 350
        });
        $('#cboxClose').remove();
    }

    function ClosePopupLogin() {
        if($('#SU_notification_box').parent().css('display') == "none" || 
            $('#FI_notification_box').parent().css('display' == "none")){
            $('#SlotGameFakeContainer').hide();
        }
        $.colorbox.close();
    }

    function EnsureLogin(url) {
        var isLogin = false;
        if (isLogin) {
            window.location.href = url;
            return;
        }
        CBPopupLogin(url);
    }

    function EnsureSlotLogin(url) {
        var isLogin = false;
        if (isLogin) {
            window.location.href = url;
            return;
        }
        SlotPopupLogin(url);
    }

    function SlotPopupLogin(url) {
        $('#SlotGameFakeContainer').show();
        $("#ctl05_ProceedNextUrl").val(url);
        $.colorbox({
            inline: true,
            href: "#PL_notification_box",
            innerWidth: 364,
            innerHeight: 350,
            escKey: false,
            overlayClose: false
        });
        $('#cboxClose').remove();
    }

