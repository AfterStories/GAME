
    var kenoMember = "";
    var memberCode = '';
    var isGameLock = '0';

    $(document).ready(function () {
        var lang = 'zh-CN';
        var twitterUrl = 'http://www.twitter.com/fun88';
        var krtwitterUrl = 'http://www.twitter.com/fun88kr';
        var jptwitterUrl = 'https://twitter.com/fun88japan';
        var fbUrl = 'http://www.facebook.com/fun88.';
        var fbkrUrl = 'http://www.facebook.com/fun88kr';
        var fbjpUrl = 'https://www.facebook.com/fun88.japan';
        var fbthUrl = 'https://www.facebook.com/thailand.fun88';
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
            $("#dvMedia07").click(function () { window.open(fbUrl + linklang, '_blank'); return false; });
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
/*
        $(".tooltip").tooltip();
*/
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
                resizable: false,
                width: 260
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
        },function () {
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
            }
        );
        jQuery(function ($) {
            var topLink = $('#topBannerLogoContainer, #topBannerLogo');
            var existing = $('.topBannerExisting');
            var hidden = false;
            $(window).scroll(function () {
                if ($(window).scrollTop() >= 70 || (document.documentElement && document.documentElement.scrollTop >= 70)) {
                    if (!hidden) {
                        existing.css("display", "none");
                        topLink.fadeIn(80).css("display", "inline-block");
                        hidden = true;
                    }
                } else if (hidden) {
                    topLink.css("display", "none");
                    existing.fadeIn(80);
                    hidden = false;
                }
            });
        });
    });
