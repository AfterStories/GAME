
        $(document).ready(function () {
            function onlinealipayinmaintenance() {
                emergencyAlert('在线支付宝存款维护中','欲使用在线支付宝存款支付，请联系在线客服。','http://helpcn.fun585.com','在线客服','关闭');
            }
            function wechatinmaintenance() {
                emergencyAlert('微信存款维护中','欲使用微信存款支付，请联系在线客服。','http://helpcn.fun585.com','在线客服','关闭');
            }
            if(window.location.href.toLowerCase().indexOf("fun2008") > -1) {
                $('#WC_Container #txtWCAmount').attr('disabled', 'disabled');
            }
            $("#OpenWCP").hide();
            $("#WCP_Container").show();
            HideShowWCOn9AliContainer();

            $.support.placeholder = ('placeholder' in document.createElement('input'));
           
            
                $('#WC_Container #txtWCAmount').attr("placeholder", "请输入整数金额");
                $('#Ali_Container #txtAliAmount').attr("placeholder", "请输入整数金额");
            

            if (!$.support.placeholder && $('#WC_Container #txtWCAmount').val() == "") {
                $('#WC_Container #txtWCAmount').val($('#WC_Container #txtWCAmount').attr("placeholder")).css({ color: "#A0A0A0" });
            }
            if (!$.support.placeholder && $('#Ali_Container #txtAliAmount').val() == "") {
                $('#Ali_Container #txtAliAmount').val($('#Ali_Container #txtAliAmount').attr("placeholder")).css({ color: "#A0A0A0" });
            }
                        
            $('#WC_Container #txtWCAmount').focus(function () {
                if (!$.support.placeholder && $(this).val() == $(this).attr("placeholder")) {
                    $('#WC_Container #txtWCAmount').val("").css({ color: "#000" });
                }
            });
            $('#Ali_Container #txtAliAmount').focus(function () {
                if (!$.support.placeholder && $(this).val() == $(this).attr("placeholder")) {
                    $('#Ali_Container #txtAliAmount').val("").css({ color: "#000" });
                }
            });

            $('#WC_Container #txtWCAmount').blur(function () {
                if (!$.support.placeholder) {
                    if ($('#WC_Container #txtWCAmount').val() == "") {
                        $('#WC_Container #txtWCAmount').val($('#WC_Container #txtWCAmount').attr("placeholder")).css({ color: "#A0A0A0" });
                    }
                }
            });
            $('#Ali_Container #txtAliAmount').blur(function () {
                if (!$.support.placeholder) {
                    if ($('#Ali_Container #txtAliAmount').val() == "") {
                        $('#Ali_Container #txtAliAmount').val($('#Ali_Container #txtAliAmount').attr("placeholder")).css({ color: "#A0A0A0" });
                    }
                }
            });

            $('#WC_Container #txtWCAmount').keypress(function (e) {
                //if the letter is not digit then display error and don't type anything
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                    return false;
                }
            });
            $('#Ali_Container #txtAliAmount').keypress(function (e) {
                //if the letter is not digit then display error and don't type anything
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                    return false;
                }
            });

            $('#WC_Container #txtWCAmount').keyup(function () {
                trimZero("#WC_Container #txtWCAmount");
            });
            $('#Ali_Container #txtAliAmount').keyup(function () {
                trimZero("#WC_Container #txtWCAmount");
            });

            $("#BtnWCSubmit").click(function () {
                
                EnsureLogin(window.location.href);
                
            });

            $("#BtnAliSubmit").click(function () {
                
                EnsureLogin(window.location.href);
                
            });
        });
        	/*阿里*/
        function callOn9Ali() {
            getLoading();
            var amount = $('#Ali_Container #txtAliAmount').val();
            $.post("/Services/On9Alipay.ashx",
                { depositAmount: amount },
                    function (data) {
                        if (data != null) {
                            if (data.result === "success") {
                                On9AliPaySuccess();
                                $('#Ali_Container #txtAliAmount').val("");
                                $(".loadingGif").css("display", "none");
                                $('#Ali_Container').hide(); 
                                $('#BtnAliOpen').show();
                                resetWCP_ContainerImg();
                                popUpWindowManager('/zh-CN/Deposit-AlipayOnlinePopUp', 'OnlineAlipay', 1020);
                            } else {
                                $('#Ali_Container #txtAliAmount').val("");
                                $('#Ali_Container #txtAliAmount').focus();
                                $(".loadingGif").css("display", "none");
                                Alert(data.description, true);
                            }
                        }
                    }, "json").fail(function(){
                        $('#Ali_Container #txtAliAmount').val("");
                        $('#Ali_Container #txtAliAmount').focus();
                        $(".loadingGif").css("display", "none");
                        Alert(data.description, true);
                    });
        }
        /*唤起微信支付*/
       function callWeChat() {
           getLoading();
           var amount = $('#WC_Container #txtWCAmount').val();
            $.post("/Services/WeChat.ashx",
                { depositAmount: amount },
                    function (data) {
                        if (data != null) {
                            if (data.result === "success") {
                                WCPaySuccess();
                                $('#WC_Container #txtWCAmount').val("");
                                $(".loadingGif").css("display", "none");
                                $('#WC_Container').hide(); 
                                $('#BtnWCOpen').show();
                                resetWCP_ContainerImg();
                                popUpWindowManager('/zh-CN/Deposit-WeChatPopUp', 'WeChatPay', 1020);
                            } else {
                                $('#WC_Container #txtWCAmount').val("");
                                $('#WC_Container #txtWCAmount').focus();
                                $(".loadingGif").css("display", "none");
                                Alert(data.description, true);
                            }
                    }
                    }, "json").fail(function(){
                        $('#WC_Container #txtWCAmount').val("");
                        $('#WC_Container #txtWCAmount').focus();
                        $(".loadingGif").css("display", "none");
                        Alert(data.description, true);
                    });
       }

        function On9AliPaySuccess(){
            var amountdeposited = $('#Ali_Container #txtAliAmount').val();
            var Famountdeposited = amountdeposited * 3;
            ga('send', 'event', 'Deposit_CNY', 'Quick Online Alipay', 'Transaction', amountdeposited);
        }

        function WCPaySuccess(){
            var amountdeposited = $('#WC_Container #txtWCAmount').val();
            var Famountdeposited = amountdeposited * 3;
            ga('send', 'event', 'Deposit_CNY', 'Quick WeChat Pay', 'Transaction', amountdeposited);
        }

        function chgWCP_ContainerImg(){
            var string = '../lib/images/WCALI_long.png';
            document.getElementById("WCP_Container").style.backgroundImage = "url('" + string + "')";
            document.getElementById("WCP_Container").style.height = "170px";
        }
        function resetWCP_ContainerImg(){
            var string = '../lib/images/wcali_on.png';
            document.getElementById("WCP_Container").style.backgroundImage = "url('" + string + "')";
            document.getElementById("WCP_Container").style.height = "95px";
        }
        function HideShowWCOn9AliContainer(){
            
                $('#BtnAliOpen').show();
                $('#Ali_Container').hide();

                $('#BtnWCOpen').show();
                $('#WC_Container').hide();
            
        }
        function HideShowWCContainer(){
            
                $('#BtnWCOpen').show();
                $('#WC_Container').hide();
            
        }
        function HideShowOn9AliContainer(){
            
                $('#BtnAliOpen').show();
                $('#Ali_Container').hide();
            
        }
