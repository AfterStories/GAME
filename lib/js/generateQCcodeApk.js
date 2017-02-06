
        var getUri = window.location.href.toLowerCase();
        var SliderButtonName = ['新会员迎新福利','恭喜会员赢PT大奖','必发交易','新会员打虎装备',];
        var checks = [];
        var affiliateCode = getCookie("CO_affiliate") == null ? "" : getCookie("CO_affiliate").replace("affiliate=", "");
        if (getUri.substr(getUri.lastIndexOf('/') + 1) == "") { getUri = getUri.substring(0, getUri.length - 1); }
        var nonHomepageBackground = getUri.substr(getUri.lastIndexOf('/') + 1).indexOf('im-casino') != -1 ||
        ((getUri.indexOf("im-casino") !== -1) && getUri.substr(getUri.lastIndexOf('/') + 1).indexOf('top-games') != -1) ||
        ((getUri.indexOf("worldcup") !== -1) && getUri.substr(getUri.lastIndexOf('/') + 1).indexOf('worldcup') != -1);
        function initiate_backgroundBanner(notDy) {
            if (getUri.indexOf("/zh-cn/default") != -1 ||
                    getUri.indexOf("/zh-cn/home") != -1 || nonHomepageBackground
            ) {
                var maximageObj = $("#maximage1");
                if (typeof (notDy) == 'undefined') {
                    for (var loop = 1; loop <= $(maximageObj).children().length; loop++)
                        checks.push(loop);
                }
                if (typeof maximageObj !== 'undefined' && $(maximageObj).children().length == checks.length && checks.length != 0) {
                    var tempButton = [];
                    var tempLinks = [];
                    for (var a = 0; a < checks.length; a++) {
                        var n = checks[a] - 1;
                        $($("#maximage1 > img")[n]).clone().appendTo($("#maximage"));
                        tempButton[a] = SliderButtonName[n];
                        tempLinks[a] = links[n];
                    }
                    SliderButtonName = tempButton;
                    links = tempLinks;
                    maximageObj.remove();
                    maximageObj = $("#maximage");
                    $(maximageObj).maximage({
                        cycleOptions: {
                            fx: 'scrollHorz',
                            speed: 1000, 
                            timeout: 8000,
                            prev: ".prev",
                            next: ".next",
                            pager: '#cycle-nav table tr',
                            pagerAnchorBuilder: function (idx, slide) {
                                var result = '<td id="homeBannerButton' + (idx + 1) + '" class="dy-unit" ><a href="javascript:void(0);">';
                                if (getUri.indexOf("/zh-cn/home") != -1 || getUri.indexOf("/zh-cn/default") != -1) {
                                    result += SliderButtonName[idx];
                                }
                                return result + '</a></td>';
                            }
                        },
                        onFirstImageLoaded: function () {
                            jQuery(maximageObj).fadeIn('fast');

                        }
                    });
                    $('.toggle').bind('click', function (e) {
                        e.preventDefault();
                        $(maximageObj).cycle('toggle');
                    });
                    $('div#slides').on('click', function () {
                        var num = $('td.activeSlide').attr('id').split('homeBannerButton').pop();
                        if (typeof DY !== "undefined")
                            DY.API('event', { name: 'HomeBannerClicked', properties: { BannerNumber: num } });
                        sendDesktopGA("Home Banner " + getCookie("CultureInfo").toLowerCase(), "Click", SliderButtonName[num - 1] + (isLogin === "true" ? " Auth" : " Anon"));
                        var func = new Function(links[--num]);
                        func();
                    });
                }
            }
        }
        $(function () {
            if ($.browser.msie && $.browser.version < '8.0') {
                $(window).ready(function () { initiate_backgroundBanner(); });
            } else {
                initiate_backgroundBanner();
            }
                  
            $("#slides, #cursorDiv, .prev, .next").mouseleave(function () {
                $("#cursorDiv .prev").css("visibility", "hidden");
                $("#cursorDiv .next").css("visibility", "hidden");
            }).mouseenter(function () {
                $("#cursorDiv .prev").css("visibility", "visible");
                $("#cursorDiv .next").css("visibility", "visible");
            });
        });
        function ClosePopupLiveStream() {
            $.colorbox.close();
            $("#PL_popup_box").css("display", "none");
        }

     

        function PopupVideo(video_link) {
            video_frame = document.getElementById('videoframe');
            video_frame.setAttribute('src', video_link);
            $("#Video_popup_box").css("display", "block");
            $.colorbox({
                top: 84,
                href: "#Video_popup_box",
                innerWidth: 700,
                innerHeight: 550,
                inline: true,
                onClosed: function () {
                    ClosePopupVideo();
                }
            });
            $("#cboxClose").css("display", "none");
        }

        function ClosePopupVideo() {
            $.colorbox.close();
            $("#Video_popup_box").css("display", "none");
        }

        $(function () {
            if (typeof (Sys) !== 'undefined' && Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.version === 10) {
                Sys.WebForms.PageRequestManager.getInstance()._onFormElementActive = function Sys$WebForms$PageRequestManager$_onFormElementActive(element, offsetX, offsetY) {
                    if (element.disabled) {
                        return;
                    }
                    this._activeElement = element;
                    this._postBackSettings = this._getPostBackSettings(element, element.name);
                    if (element.name) {
                        var tagName = element.tagName.toUpperCase();
                        if (tagName === 'INPUT') {
                            var type = element.type;
                            if (type === 'submit') {
                                this._additionalInput = encodeURIComponent(element.name) + '=' + encodeURIComponent(element.value);
                            } else if (type === 'image') {
                                this._additionalInput = encodeURIComponent(element.name) + '.x=' + Math.floor(offsetX) + '&' + encodeURIComponent(element.name) + '.y=' + Math.floor(offsetY);
                            }
                        } else if ((tagName === 'BUTTON') && (element.name.length !== 0) && (element.type === 'submit')) {
                            this._additionalInput = encodeURIComponent(element.name) + '=' + encodeURIComponent(element.value);
                        }
                    }
                };
            }
        });

        function registerDeny() { PopupIovation('/zh-CN/Registration-Deny?width=573&height=310',1, '673', '410' ,'/zh-CN/Default'); }

        var ptUrl = window.location.href.toLowerCase().indexOf("/zh-cn/im-casino") !== -1 || window.location.href.toLowerCase().indexOf("/zh-cn/update-im-account") !== -1;
        $(document).ready(function () {
            try {
                if (ptUrl && Boolean(true)) {
                    EnsurePTAuth('', Boolean(false));
                }
            } catch (err) {
            }
            
            
        });

    function generateAffiliateApk() {   
        $.ajax({
            type: "POST",
            url: "/Services/AndroidAffiliate.ashx",
            data: { AffiliateCode: affiliateCode, ProductType: "Fun88_Gaming" },
            dataType: "json",
            success: function (data) {
                if (data.Success && data.ResponseUrl != null && data.ResponseUrl != "") {
                        $('#fun88apk_dl_btn a').attr('href', data.ResponseUrl).css("display", "block");
                        $('#qr_generator').empty();
                        $('#qr_generator').qrcode({
                            "render": "image",
                            "size": 110,
                            "color": "#3a3",
                            "text": window.location.host + data.ResponseUrl
                        });
                        $('#qr_generator img').css("margin", "10px 15px 10px 18px");
                } else {
                    $('#fun88apk_dl_btn a').attr('href', "http://media.10010388.com/Download/Android/android-fun88.apk").css("display", "block");
                    $('#qr_generator').empty();
                    $('#qr_generator').qrcode({
                        "render": "image",
                        "size": 110,
                        "color": "#3a3",
                        "text": "http://media.10010388.com/Download/Android/android-fun88.apk"
                    });
                    $('#qr_generator img').css("margin", "10px 15px 10px 18px");
                }
            }
        });          
    }

    var apkGenerated = false;
    function genereteApkQr() {
        if (!apkGenerated) {
            generateAffiliateApk();
            
            $("#fun88APK_Container").css({'height':'342px'});
            $("#fun88apk_dl_btn").css({'margin-top':'77px'});
            $("#fun88apk_dl_btn").css({'margin-right':'1px'});
            
            apkGenerated = true;
        }
    }

    function quickchatopenclose() {
        if ($("#quickcontact").attr('class') == 'quickcontactcontainerbeforehover') {
            $("#quickcontact").removeClass('quickcontactcontainerbeforehover');
            $("#quickcontact").addClass('quickcontactcontainer');
            $("#SOSBonuszh").css("bottom", "405px");
            $("#SOSBonuszh").css("bottom", "446px");
            $("#PTButton").css("bottom", "405px");
        }
        else {
            $("#quickcontact").removeClass('quickcontactcontainer');
            $("#quickcontact").addClass('quickcontactcontainerbeforehover');
            $("#SOSBonuszh").css("bottom", "41px");
            $("#SOSBonuszh").css("bottom", "81px");
            $("#PTButton").css("bottom", "40px");
        }
    }


