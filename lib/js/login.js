 
var userid ;
 var isLogin;

    function Login() {

        var userName = $("#UserName").val();
        var password = $("#Password").val();

  

        if (!userName || !password) {
            Alert('请输入您的用户名与密码。', true);
            return false;
        }

             $.ajax({
                    type: "GET",
                    url: 'http://192.168.1.2:16385/fun/user/login',
                    data: {username:userName,password:password},
                    success: function (data) {
                        
                         CreateCookie("verifyform", "1", 0);
                         CreateCookie("userid", data.data.userid, 0);
 
                         
                        $("#login").css("display", "none");
                        $(".leftBorder").css("display,none")
                        $("#logined-header").css("display", "block");
                       
                         isLogin = true;

                         userid = getCookie("userid");

                        getBankDetails(); 

    /*开户→存款*/
                    if(isLogin){            
                         $("#dy_RegistrationChgWording").html("立即存款");
                        

                    }
                          alert("登录成功！")

                        },
                    error: function (a,b,c) {
                       alert("网络超时，请重试");
                         }
                    });

      


}





function getBankDetails(){
  userid = getCookie("userid");

                $.ajax({
                    type: "GET",
                    url: 'http://192.168.1.2:16385/fun/user/getuserplatformbalance',
                    data: {userId:userid},
                    success: function (data) {
                            var zongshue = "RMB "+data.data.totalBalance;
                            var zhuzhanghu = "RMB "+data.data.mainBalance;
                            var PRG = "RMB "+data.data.platformBalanceList[0].balance;
                            var MSG = "RMB "+data.data.platformBalanceList[1].balance;
                            var MG = "RMB "+data.data.platformBalanceList[2].balance;
                            var ESG = "RMB "+data.data.platformBalanceList[3].balance;
                            var SW = "RMB "+data.data.platformBalanceList[4].balance;
                            var WG = "RMB "+data.data.platformBalanceList[5].balance;                              
                               

                              var bankDetailsList = '<table id="walletTable"><tbody><tr><td><div class="walletTOTAL BALANCE">&nbsp;</div></td><td style="width:40%;">总数额</td><td>:</td><td id="zongshue">'+zongshue+'</td></tr><tr><td><div class="walletMAIN">&nbsp;</div></td><td style="width:40%;">主账户</td><td>:</td><td>'+zhuzhanghu+'</td></tr><tr><td><div class="walletSP">&nbsp;</div></td><td style="width:40%;">PRG</td><td>:</td><td id="PRG">'+PRG+'</td></tr><tr><td><div class="walletIPSB">&nbsp;</div></td><td style="width:40%;">MGS</td><td>:</td><td id="MGS">'+MSG+'</td></tr><tr><td><div class="walletBFR">&nbsp;</div></td><td style="width:40%;">MG</td><td>:</td><td id="MG">'+MG+'</td></tr><tr><td><div class="walletGD">&nbsp;</div></td><td style="width:40%;">ESG</td><td>:</td><td>'+ESG+'</td></tr><tr><td><div class="walletAG">&nbsp;</div></td><td style="width:40%;">SW</td><td>:</td><td id="SW">'+SW+'</td></tr><tr><td><div class="walletSAG">&nbsp;</div></td><td style="width:40%;">WG</td><td>:</td><td id="WG">'+WG+'</td></tr></tbody></table>';
                            $("#balanceTable").empty();
                            $("#balanceTable").append(bankDetailsList);

                            $("#QuickBalance").val(zongshue);





        var uiUN = $("#UserName");

        var d1 = new DropDown($('#ddlSettings'));
        var d2 = new DropDown($('#ddlWallets'));

        $(document).click(function () {
            $('.wrapper-dropdown-5').removeClass('active');
        });

        $("#ddlWallets").mouseover(function () {
            if (!("ontouchstart" in window)) {
                $('#ddlSettings').removeClass('active');
                $("#ddlWallets").addClass('active');
            }
        });
        $("#ddlSettings").mouseover(function () {
            if (!("ontouchstart" in window)) {
                $('#ddlWallets').removeClass('active');
                $("#ddlSettings").addClass('active');
            }
        });

        $("#divWelMember").mouseover(function () {
            var memberLvl = document.getElementById("tooltipsRewardLvl");

            if (memberLvl != null && memberLvl != "")
                memberLvl.style.visibility = 'visible';
        });

        $("#divWelMember").mouseleave(function () {
            var memberLvl = document.getElementById("tooltipsRewardLvl");

            if (memberLvl != null && memberLvl != "")
                memberLvl.style.visibility = 'hidden';
        });



    /*$(document.body).ready(function () {*/

        UIObjRefreshBtn = $("#uiRefreshBalance");

        /*setTimeout(function () { BalancesQuickView.Init(); }, 1250);*/

        $(".walletList").css("display", "none");

        $("#dropdownlist").click(function (event) {

            if ($('.walletList').css('display') == 'none') {
                $(".walletList").show();
            } else {
                $(".walletList").hide();
            }

            event.stopPropagation();

        });

        $("#walletTable").click(function () {
            
            $(".walletList").hide();
        });

        $(document).click(function () {
            $(".walletList").hide();
        });

var isLogin 
    if (getCookie("verifyform")==1) {
    
            
            $("#login").css("display", "none");
            $(".leftBorder").css("display,none")
            $("#logined-header").css("display", "block");
            var isLogin = true;
            if(isLogin){       
            $("#dy_RegistrationChgWording").html("立即存款") 
            }
        
    }else{
        $("#login").css("display", "block");
            $(".leftBorder").css("display,block")
            $("#logined-header").css("display", "none");
            var isLogin =false;
            if(isLogin){           
            $("#dy_RegistrationChgWording").html("立即开户") 
            }
    }



addRowHandlers();





                        },
                    error: function (a) {
                      
                        
                    }

                });
            }









    var BalancesQuickView = {};
    var UIObjRefreshBtn = null;
    var UIObjBalancesList = null;
    var UIObjBalancesListOptionsRef = "QuickBalance";

    BalancesQuickView.Init = function () {
        UIObjRefreshBtn.click(function () {
            BalancesQuickView.RefreshBalance(false);
        });

        if ($("#QuickBalance").length == 0) BalancesQuickView.RefreshBalance(false);
    };

    BalancesQuickView.RefreshBalance = function (useCachedData) {
        UIObjRefreshBtn.attr("disabled", true);

        $(UIObjBalancesListOptionsRef).remove();

        document.getElementById("QuickBalance").value = '载入中...';

        $("#balanceTable").html("<table><tr><td>载入中...</td></tr></table>");

        var struseCachedData = "false";
        if (useCachedData) struseCachedData = "true";
/*        $.ajax({
            type: "POST",
            url: "/Services/AllBalance.ashx",
            data: { culture: 'zh-CN', useCachedData: struseCachedData },
            dataType: "json",
            success: BalancesQuickView.OnSuccess,
            error: BalancesQuickView.OnError
        });*/
    };
/*    BalancesQuickView.OnSuccess = function (data, status) {
        switch (data) {
            case 'timeout':
                window.location = '/zh-CN/Session-Timed-Out';
                break;
            case 'multi':
                window.location = '/zh-CN/Multiple-Login-Detected';
                break;
        }

        $(UIObjBalancesListOptionsRef).remove();

        var theTable = '<table id="walletTable">';

        for (var i = 0; i <= data.length - 1; i++) {

            if (data[i]["Name"] == "BOY2" && memberCode.length > 15) continue;
            if (data[i]["Name"] == "MGSQF")  {
                 
                continue;
                
            } 
            if (data[i]["Name"] == "MJ") continue;
            var text = data[i]["LocalizedName"] + ":" + data[i]["FormattedBalance"];
            if (data[i]["Name"] == "TOTAL BALANCE") {
                document.getElementById("BaseMainContent_HeaderContent_ascxMbrAuth_Balances1_QuickBalance").value = text;
            }
            var text1 = '<tr><td><div class="wallet' + data[i]["Name"] + '">&nbsp;</div></td><td style="width:40%;">' + data[i]["LocalizedName"] +
                    '</td><td>:</td><td>' + data[i]["FormattedBalance"] + "</td></tr>";
            theTable += text1;
        }

        theTable += "</table><iframe class='dvEmptyFrame' src=''></iframe>";

        $("#balanceTable").html(theTable);

        UIObjRefreshBtn.attr("disabled", false);

        addRowHandlers();


    };*/

    BalancesQuickView.OnError = function (request, status, error) {

    };

    var getUri = window.location.href.toLowerCase();
    var isSlotLobby = getUri.indexOf("slotlobby") !== -1;
    var depositDefaultLink = '';
    function ValidateMemberExt(sender, args) {
        sender.innerHTML = "仅可使用字母 'A-Z', 'a-z', 数字 '0-9', '.', '_' 和 '-'。";
        return ValidateMember(sender, args);
    }

    function DropDown(el) {
        this.dd = el;
        this.initEvents();
    }

    function bankDetails() {
        if (isSlotLobby) {
            OpenInNewTab("/zh-CN/Bank-Details");
        }
        else {
            window.location.href = "/zh-CN/Bank-Details";
        }
    }

        DropDown.prototype = {
        initEvents: function () {
            var obj = this;

            obj.dd.on('mouseover', function (event) {
                $(this).toggleClass('active');
                event.stopPropagation();
            });
        }
    };
    $(document).ready(function () {      //银行菜单
        var uiUN = $("#UserName");

        var d1 = new DropDown($('#ddlSettings'));
        var d2 = new DropDown($('#ddlWallets'));

        $(document).click(function () {
            $('.wrapper-dropdown-5').removeClass('active');
        });

        $("#ddlWallets").mouseover(function () {
            if (!("ontouchstart" in window)) {
                $('#ddlSettings').removeClass('active');
                $("#ddlWallets").addClass('active');
            }
        });
        $("#ddlSettings").mouseover(function () {
            if (!("ontouchstart" in window)) {
                $('#ddlWallets').removeClass('active');
                $("#ddlSettings").addClass('active');
            }
        });

        $("#divWelMember").mouseover(function () {
            var memberLvl = document.getElementById("tooltipsRewardLvl");

            if (memberLvl != null && memberLvl != "")
                memberLvl.style.visibility = 'visible';
        });

        $("#divWelMember").mouseleave(function () {
            var memberLvl = document.getElementById("tooltipsRewardLvl");

            if (memberLvl != null && memberLvl != "")
                memberLvl.style.visibility = 'hidden';
        });
    });

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

        function Logout() {
            
            var isLogin = false;

            if (true) {//ajax返回退出结果
                CreateCookie("verifyform", "", -1);
                if (getCookie("VIPLogin") == "1") {
                    CreateCookie("VIPLogin", "", -1);
                        $("#login").css("display", "block");
                        $(".leftBorder").css("display,block")
                        $("#logined-header").css("display", "none");
                } else {
                        $("#login").css("display", "block");
                        $(".leftBorder").css("display,block")
                        $("#logined-header").css("display", "none");

                       
            $("#dy_RegistrationChgWording").html("立即开户")
      
                }
            }else{
                alert("操作失败请稍后重试");
            }
       



/*        $.post("/Services/Login.ashx?action=logout",
                { dbLogout: true },
                function (data) {
                    if (data.IsLogout) {
                        CreateCookie("verifyform", "", -1);
                        if (getCookie("VIPLogin") == "1") {
                            CreateCookie("VIPLogin", "", -1);
                            window.location.href = "/zh-CN/Index";
                        } else {
                            window.location.href = "/zh-CN/Default";
                        }
                    }
                }, "json");

                $.post("/Rewards/RewardService/Logins.ashx?action=logout",
                        { dbLogout: true },
                        function (data) {
                        }, "json");

                return false;*/
            }




    function addRowHandlers() {
        var table = document.getElementById("walletTable");
        var rows = table.getElementsByTagName("tr");
        for (i = 0; i < rows.length; i++) {
            var currentRow = table.rows[i];
            var createClickHandler =
            function (row) {
                return function () {
                    document.getElementById("QuickBalance").value =
                    row.getElementsByTagName("td")[1].innerHTML +
                    row.getElementsByTagName("td")[2].innerHTML +
                    row.getElementsByTagName("td")[3].innerHTML;
                };
            };

            currentRow.onclick = createClickHandler(currentRow);
        }
    }

    $(document.body).ready(function () {

        UIObjRefreshBtn = $("#uiRefreshBalance");

        setTimeout(function () { BalancesQuickView.Init(); }, 1250);

        $(".walletList").css("display", "none");

        $(".dropdownlist").click(function (event) {

            if ($('.walletList').css('display') == 'none') {
                $(".walletList").show();
            } else {
                $(".walletList").hide();
            }

            event.stopPropagation();

        });

        $("#walletTable").click(function () {
            $(".walletList").hide();
        });

        $(document).click(function () {
            $(".walletList").hide();
        });

    });




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

