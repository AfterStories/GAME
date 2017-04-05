
    $(document).ready(function(){
       
        $("#floatmenu").load("../lib/Publicdoms/quickMenu.html")

        $("#footer").load("../lib/Publicdoms/footer.html",function(){

        var lang = 'zh-CN';
        var twitterUrl = 'http://www.twitter.com/fun88';
        var krtwitterUrl = 'http://www.twitter.com/fun88kr';
        var jptwitterUrl = 'https://twitter.com/fun88japan';
        var fbUrl = 'http://www.facebook.com/fun88.';
        var fbIndoUrl = 'http://www.facebook.com/Fun88ID/';
        var fbkrUrl = 'http://www.facebook.com/fun88kr';
        var fbjpUrl = 'https://www.facebook.com/fun88.japan';
        var fbthUrl = 'https://www.facebook.com/Fun88ThaiOfficial/'
        var linklang;
        var twittlinklang = 'sea';
        if (lang.toLowerCase() == 'zh-cn') {
            $('.mediaCN').show();
            $('.mediaAll').hide();
            $('.mediaTH').hide();
            $('.mediaID').hide();
        }
        else if (lang.toLowerCase() == 'th-th') {
            $('.mediaCN').hide();
            $('.mediaTH').show();
            $('.mediaID').hide();
            $('.mediaAll').show();
            linklang = 'thai';
            $("#dvMedia06").click(function () { window.open(twitterUrl + twittlinklang, '_blank'); return false; });
            $("#dvMedia07").click(function () { window.open(fbthUrl, '_blank'); return false; });
        }
        else if (lang.toLowerCase() == 'vi-vn') {
            $('.mediaCN').hide();
            $('.mediaTH').show();
            $('.mediaID').hide();
            $('.mediaAll').show();
            linklang = 'viet';
            $("#dvMedia06").click(function () { window.open(twitterUrl + twittlinklang, '_blank'); return false; });
            $("#dvMedia07").click(function () { window.open(fbUrl + linklang, '_blank'); return false; });
        }
        else if (lang.toLowerCase() == 'id-id') {
            $('.mediaCN').hide();
            $('.mediaTH').hide();
            $('.mediaID').show();
            $('.mediaAll').show();
            linklang = 'indo';
            $("#dvMedia06").click(function () { window.open(twitterUrl + twittlinklang, '_blank'); return false; });
            $("#dvMedia07").click(function () { window.open(fbIndoUrl, '_blank'); return false; });
        } else {
            $('.mediaCN').hide();
            $('.mediaTH').hide();
            $('.mediaID').hide();
            $('.mediaAll').show();
            if (lang.toLowerCase() == 'en-us') {
                linklang = 'eng';
            } else if (lang.toLowerCase() == 'ja-jp') {
                $('.mediaTH').show();
                linklang = 'eng';
            } else if (lang.toLowerCase() == 'ko-kr') {
                linklang = 'korea';
            }

            
            $("#dvMedia06").click(function () { window.open(twitterUrl + linklang, '_blank'); return false; });
            $("#dvMedia07").click(function () { window.open(fbUrl + linklang, '_blank'); return false; });
            
        }

        $(".tooltip").tooltip();

        $("#hbtn3,#hbtn4").hover(function () {
            $(this).next().css('color', '#25AAE1');
        }, function () {
            $(this).next().css('color', '#615F5F');
        });

        $("a.jQueryBookmark").click(function (e) {

            var bookmarkUrl = window.location;
            var bookmarkTitle = document.title;
            if (document.all) { // For IE Favorite
                window.external.AddFavorite(bookmarkUrl, bookmarkTitle);
                return false;
            } else if (window.opera || window.sidebar) { // For Opera Browsers and For Mozilla Firefox Bookmark
                $("a.jQueryBookmark").attr("href", bookmarkUrl);
                $("a.jQueryBookmark").attr("title", bookmarkTitle);
                $("a.jQueryBookmark").attr("rel", "sidebar");
            } else if (window.external) { //For Chrome
                alert('您的浏览器不支持此书签行动，请手动');
                return false;
            } else { // for other browsers which does not support
                alert('您的浏览器不支持此书签行动，请手动');
                return false;
            }
        });

        $("#dvMedia08").click(function () {
            $("#wechat-dialog img").attr("src", "../lib/images/wechat-qr.jpg");
            $("#wechat-dialog").dialog({
                modal: true,
                draggable: false,
                resizable: false,
                width: 260
            });
            $(".ui-dialog-titlebar").hide();
        });

        $("#dvMedia09").click(function () {
            $("#line-dialog").dialog({
                modal: true,
                draggable: false,
                resizable: false
            });
            $(".ui-dialog-titlebar").hide();
        });

        $("#dvMedia10").click(function () {
            $("#BBM-dialog").dialog({
                modal: true,
                draggable: false,
                resizable: false,
                width: 260
            });
            $(".ui-dialog-titlebar").hide();
        });

        $("#wechat-dialog").click(function () {
            $(this).dialog("close");
        });

        $("#line-dialog").click(function () {
            $(this).dialog("close");
        });

        $("#BBM-dialog").click(function () {
            $(this).dialog("close");
        });

        $("#wechat-dialog").hover(function () {
            $(".close-message").slideDown("fast");
        }, function () {
            $(".close-message").slideUp("fast");
        }
        );

        $("#line-dialog").hover(function () {
            $(".close-message").slideDown("fast");
        }, function () {
            $(".close-message").slideUp("fast");
        }
        );

        $("#BBM-dialog").hover(function () {
            $(".close-message").slideDown("fast");
        }, function () {
            $(".close-message").slideUp("fast");
        })
})
       
        






        $("#header").load("../lib/Publicdoms/header.html", function(){
            
            createDropDown();
            $("#target dt").removeClass().addClass('zh-CN');
            var $dropTrigger = $(".dropdown dt a");
            var $dropTrigger2 = $(".dropdown dd span");
            var $languageList = $(".dropdown dd ul");

            // open and close list when button is clicked
            $dropTrigger.toggle(function () {
                $languageList.slideDown(200);
                $dropTrigger.addClass("active");
            }, function () {
                $languageList.slideUp(200);
                $(this).removeAttr("class");
            });

            $("span#arrow").click(function() {
                $dropTrigger.click();
            });


        $(document).bind('click', function (e) {

            var $clicked = $(e.target);
            if (!$clicked.parents().hasClass("dropdown") && $clicked.attr('id') !== 'arrow') {

                if ($dropTrigger.hasClass("active")) {
                    $dropTrigger.click();
                }
            }
        });

        // when a language is clicked, make the selection and then hide the list
        $(".dropdown dd ul li a").click(function () {
            var clickedValue = $(this).parent().attr("class");
            var clickedTitle = $(this).find("em").html();
            $("#target dt").removeClass().addClass(clickedValue);
            $("#target dt em").html(clickedTitle);
            $languageList.hide();
            $dropTrigger.removeAttr("class");


            var getLang = $(this).parent().attr("class");
           
            if (getLang == null) return;

            if (getLang.toLowerCase() != 'zh-cn') {
                var url = window.parent.location.href;
                var startIdx = 3;
                var urlPath = url;
                var extra = "";

                var parts = url.split('/'); // 0 = protocol, 1 = protocol-separator, 2 = domain, 3...
                if (parts.length > 3) {
                    var chk = parts[3];

                    if (chk.charAt(chk.length - 1) == '#') {
                        extra = '#';
                        chk = chk.substr(0, chk.length - 1);
                    }

                    if ((chk.length == 5) && (chk.charAt(2) == '-')) startIdx = 4;
                }

                url = "/" + getLang;
                for (var i = startIdx; i < parts.length; i++) {
                    var part = parts[i];
                    if (part.length > 0) url += "/" + part;
                }

                url += extra;

                window.parent.location ="../404/index.html";
            }


        });

    function createDropDown() {
       
        var $form = $("div.lang form");
        $form.hide();
        var source = $("#BaseMainContent_HeaderContent_ascxLang_uiLanguages");
        source.removeAttr("autocomplete");
        var selected = source.find("option:selected");
        var options = $("option", source);

        $(".lang").append('<dl id="target" class="dropdown"></dl>');
        $("#target").append('<dt class=""><a><span class="flag"></span></a></dt>');
        $("#target").append('<dd id="dd1"><ul></ul></dd>');
        options.each(function () {
            $("#target dd ul").append('<li class="' + $(this).val() + '" ><a><span class="flag"></span></a></li>');   
                     
        });
    }





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

/*    function bankDetails() {
        if (isSlotLobby) {
            OpenInNewTab("/zh-CN/Bank-Details");
        }
        else {
            window.location.href = "/zh-CN/Bank-Details";
        }
    }*/

        DropDown.prototype = {
        initEvents: function () {
            var obj = this;

            obj.dd.on('mouseover', function (event) {
                $(this).toggleClass('active');
                event.stopPropagation();
            });
        }
    };
    


        }); 


       


    if (getCookie("verifyform")==1) {

         getBankDetails();
            $("#login").css("display", "none");
            $(".leftBorder").css("display,none")
            $("#logined-header").css("display", "block");
          /*  var isLogin = true;*/

    }else{
        $("#login").css("display", "block");
            $(".leftBorder").css("display,block")
            $("#logined-header").css("display", "none");
          /*  var isLogin =false;*/
    }

            

        });
        


