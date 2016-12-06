
        var g_Cookie_PopUpWelcome = "PopUpWelcome";
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
       
        function setCookie(c_name, value, exdays) {
            var exdate = new Date();
            exdate.setDate(exdate.getDate() + exdays);
            var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
            document.cookie = c_name + "=" + c_value;
        }
        function deleteCookie(cname) {
            CreateCookie(cname, "", -1);
            document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
        function isCookieExist(strCookieKey) {
            var cookieValue = $.cookie(strCookieKey);
            if ($.cookie(strCookieKey) == "" || $.cookie(strCookieKey) == null || $.cookie(strCookieKey) == "undefined") {
                return false;
            }
            else
            {
                return true;
            }
        }
        function createCookie(strCookieKey) {
            $.cookie(strCookieKey, 1, 
            {
                expires: 3650          
            });
        }
        function deleteCookie(strCookieKey)
        {
            $.removeCookie(strCookieKey);
        }
        $(document).keypress(function (evt) {
            evt = (evt) ? evt : ((event) ? event : null);
            var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
            if ((evt.keyCode == 13) && (node.type == "text" || node.type == "password")) {
                if (node.id == "UserName" && node.value) {
                    if ($("#Password").val()) {
                        $("#login .button").click();
                    } else {
                        $("#Password").focus();
                    }
                }
                if (node.id == "Password" && node.value) {
                    if ($("#UserName").val()) {
                        $("#login .button").click();
                    } else {
                        $("#UserName").focus();
                    }
                }
                if (node.id == "txtUsn" && node.value) {
                    if ($("#txtPwd").val()) {
                        $(".PL_login_btn .PL_button").click();
                    } else {
                        $("#txtPwd").focus();
                    }
                }
                if (node.id == "txtPwd" && node.value) {
                    if ($("#txtUsn").val()) {
                        $(".PL_login_btn .PL_button").click();
                    } else {
                        $("#txtUsn").focus();
                    }
                }
                return false;
            }
            return true;
        });
