function Alert(msg) { Alert(msg, true) }
function Alert(msg, onlyAtParent) {
    if (onlyAtParent) {
        if (window.parent.location != window.location) {
            window.parent.Alert(msg); return
        }
    }
    $('#SlotGameFakeContainer').show();
    $("<div id='LoginAlertMsg' style=''>" + msg + "</div>").dialog({
        modal: true,
        buttons: {
            OK: function () {
                $(this).dialog('close');
                $('#SlotGameFakeContainer').hide();
            }
        },
        close: function () {
            $(this).dialog('close');
            $('#SlotGameFakeContainer').hide();
        }
    })
}
function addCommas(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}
function FMNavigateTo(url) { var w = window; if (w.parent != null) { w = w.parent } w.location.href = url }
function FMChgPgIdx(uiFieldId, pgIdx) { var ui = $("#" + uiFieldId); ui.val(pgIdx); return true }
function newPage(url) {

    var pathname = window.location.pathname;
    var pathInSplit = pathname.split('/');
    var lastElement = pathInSplit.length - 1;

    if (pathInSplit[lastElement] == "") {
        url = "." + url;
    }
    window.location = url
}
function closeLoading() { $(".loadingGif").css("display", "none"); }
function getLoading() { var w = $(window).width() / 2; var h = $(window).height() / 2; $("#navigation").css("z-index", 0); $(".loadingGif").css("display", "block"); $(".loadingGif").find("img").css("padding-top", h) }
function refreshBalance() { if (window.opener) $(window.opener.document).find("#uiRefreshBalance").click(); else $("#uiRefreshBalance").click(); }
function CreateCookie(name, value, days) { if (days) { var date = new Date(); date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); var expires = "; expires=" + date.toGMTString(); } else var expires = ""; document.cookie = name + "=" + value + expires + "; path=/"; }
function AlertIframe(frameWidth, frameHeight, frameLink, openImmediately, frameScrolling, frameOverlayClose, frameEscKey, closeButton) {
    alert("frameLink = " + frameLink);
    $("#colorboxIndicator").attr("href", frameLink);
    $("#colorboxIndicator").colorbox({
        width: frameWidth,
        height: frameHeight,
        iframe: true,
        fixed: true,
        open: openImmediately,
        scrolling: frameScrolling,
        overlayClose: frameOverlayClose,
        escKey: frameEscKey,
        onLoad: function () {
            if (closeButton == false)
                $("#cboxClose").remove();
        }
    });
}
function FMNavigateNewWindowTo(url) {
    //popup after login
    /*if(!url.match("http"))
    url = "http://" + window.location.hostname + url;
    $("#ContButton").attr("onclick","javascript:popUpWindowManager('" + url + "', '' , 1020);window.location.href = window.location.href;");
    $.colorbox({
    inline: true,
    href:"#PL_loginSuccess_box",
    });
    $('#cboxClose').remove();*/
    //skip popup and only refresh page
    window.location.href = window.location.href;
}

function getLoginLoading() { var w = $(window).width() / 2; var h = $(window).height() / 2; $(".loadingLoginGif").css("display", "block"); $(".loadingLoginGif").find("img").css("padding-top", h) }
function endLoginLoading() { $(".loadingLoginGif").css("display", "none"); }

function open_new_window(URL) {
    var height = screen.availHeight;
    var width = height - 70;

    open_new_window(URL, width, height);
}

function open_new_window(URL, width, height) {
    NewWindow = window.open(URL, "_blank", "toolbar=no,menubar=0,status=0,copyhistory=0,scrollbars=yes,resizable=1,location=0,Width=" + width + ",Height=" + height + "\"");
    NewWindow.location = URL;
}

function OpenInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

/* To remove css file in the page (tgh@02-12-2013) */
function removejscssfile(filename, filetype) {
    var targetelement = (filetype == "js") ? "script" : (filetype == "css") ? "link" : "none";  //determine element type to create nodelist from
    var targetattr = (filetype == "js") ? "src" : (filetype == "css") ? "href" : "none";  //determine corresponding attribute to test for
    var allsuspects = document.getElementsByTagName(targetelement);
    for (var i = allsuspects.length; i >= 0; i--) { //search backwards within nodelist for matching elements to remove
        if (allsuspects[i] && allsuspects[i].getAttribute(targetattr) != null && allsuspects[i].getAttribute(targetattr).indexOf(filename) != -1)
            allsuspects[i].parentNode.removeChild(allsuspects[i]);  //remove element by calling parentNode.removeChild()
    }
}
function PopupMobileCDC() {
    $("#CDC_popup_box").css("display", "block");
    $("#slidesCDC .pagination li a").first().click();
    $.colorbox({
        top: 84,
        href: "#CDC_popup_box",
        innerWidth: 600,
        innerHeight: 500,
        inline: true,
        onClosed: function () {
            ClosePopupMobileCDC();
        }
    });
}

function ClosePopupMobileCDC() {
    $.colorbox.close();
    $("#CDC_popup_box").css("display", "none");
}

function sendDesktopGA(category, action, label) {
    ga('send', 'event', category, action, label);
}

function sendSiteBannerGA(banner) {
    sendDesktopGA('Site Banner', label, banner);
}

function sendQuickContactGA(button) {
    sendDesktopGA('Quick Contact', 'QuickContact', button);
}

function sendAndroidApkGA(label, button) {
    sendDesktopGA('Quick APK Download', label, button);
}

function sendAndroidApkGAMobilePage(label, button) {
    sendDesktopGA('Mobile Page APK Download', label, button);
}

function sendHomeContentGA(label, action) {
    sendDesktopGA('Home Page', label, action);
}

function sendMainMenuGA(action) {
    sendDesktopGA('Main Menu', 'Click', action);
}

window.gender = "";

/*Announcement*/
function emergencyAlert(topic, msg, URL, btn1, btn2) {
    if (window.parent.location != window.location) {
        window.parent.emergencyAlert(topic, msg, URL, btn1, btn2);
        return;
    }
    var btns = eval("({ '" + btn1 + "':function(){ $('div#msgDialog').dialog('close'); OpenFullScreen('" + URL + "');}, '" + btn2 + "':function(){$('div#msgDialog').dialog('close');} })");
    $("<div id='msgDialog' style=''>" + msg + "</div>").dialog({
        modal: true,
        title: topic,
        height: 220,
        width: 400,
        buttons: btns
    });
    $("div#msgDialog").dialog().prev().find(".ui-dialog-titlebar-close").hide();
}

/*Dialog Manager*/
function DialogManager_isLogin(memberCode) {
    if (memberCode == "") { return false; }
    else { return true; }
}
function DialogManager_showLoginFail(dialogTitle, dialogMessage) {
    dialogHtmlMessage = "<p>" + dialogMessage + "</p>";

    DialogManager_Show(dialogTitle, dialogHtmlMessage);

}
function DialogManager_Show(dialogTitle, dialogHtmlMessage) {
    //$("#dialog-message").html("Test change content msg"); 
    $("#dialog-message").html(dialogHtmlMessage);
    //$("#dialog-message").html('<%=GetGlobalResourceObject("Common", "PleaseLogin").ToString()%>');
    $("#dialog-message").dialog({
        title: dialogTitle,
        //text: "abc",
        modal: true,
        buttons: {
            Ok: function () {
                $(this).dialog("close");
            }
        }

    });

}

/*Window Manager*/
function OpenFullScreen(url) {
    var params = [
				'height=' + screen.height,
				'width=' + screen.width,
				'fullscreen=yes' // only works in IE, but here for completeness
    ].join(',');

    // and any other options from
    // https://developer.mozilla.org/en/DOM/window.open

    var popup = window.open(url, 'live_dealer_help', params);
    popup.moveTo(0, 0);
}

/*
START - {ColorBox} Popup [Iovation]
*/
function PopupIovation(strURL) {
    PopupIovation(strURL, true, "600px", "500px", "");
}

function PopupIovation(strURL, intShowCloseButton, intPageWidth, intPageHeight, strParenRedirectURL) {
    var bolShowCloseButton = (intShowCloseButton) ? true : false;

    $.colorbox(
    {
        href: strURL,
        escKey: false,
        overlayClose: false,
        width: intPageWidth,
        height: intPageHeight,
        inline: false,
        iframe: false,
        closeButton: bolShowCloseButton,
        onOpen: function () {
            $("#cboxClose").css({ visibility: 'hidden' });
        },
        onLoad: function () {

            if (!bolShowCloseButton) {
                $("#cboxClose").remove();
            }

        },
        onComplete: function () {
            $("#cboxClose").css({ top: '55px', right: '76px' });
            $("#cboxClose").css({ visibility: 'visible' });

        },
        onClosed: function () {
            if (strParenRedirectURL != "") {
                window.parent.location = strParenRedirectURL;
            }
        }
    });
}

function ClosePopupIovation(obj) {
    //alert("ClosePopupIovation");
    //ev.preventDefault();

    $.colorbox.close();
    //$.colorbox.css("display", "none");        

    //obj.click =

    //return false;
}
/*
END - Popup [Iovation]
*/

/*Video Manager*/
function OpenVideoWindow(url, onlyAtParent) {
    if (onlyAtParent) {
        if (window.parent.location != window.location) {
            window.parent.OpenVideoWindow(url);
            return false;
        }
    }

    $("#videoframe embed").attr("src", url);
    var embedObject = $("#videoframe").html();
    $("#videoframe embed").remove();
    $("#videoframe").html(embedObject).fadeId("fast");

    return false;
}

/*Mobile Redirection*/
/*based on the script from http://detectmobilebrowsers.com and YUI*/
function isMobileBrowser() { a = navigator.userAgent || navigator.vendor || window.opera; return (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))); }

/*function mobileRedirect(mobilesite) {
    YUI({ bootstrap: false }).use('*', function (Y) {
        var ForceDesktopViewCookieName = "DesktopView";
        if (isMobileBrowser()) {
            var querystring = (location.search.length > 1) ? location.search.substring(1) : "";
            var param = Y.QueryString.parse(querystring);
            if (/^desktop$/.test(param.view)) {
                Y.Cookie.set(ForceDesktopViewCookieName, '1', { path: '/' });
            } else if (!Y.Cookie.exists(ForceDesktopViewCookieName)) {
                location = mobilesite;
            }
        }
    });
}*/
/* End mobile redirection*/

function getParameterByName(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function formQuickRegistrationReferrer(site, source, medium) {
    var referrerLink = "";
    referrerLink = (site == null || site == "") ? "" : "|site=" + site;
    referrerLink += (source == null || source == "") ? "" : "|source=" + source;
    referrerLink += (medium == null || medium == "") ? "" : "|medium=" + medium;
    if (referrerLink != "")
        CreateCookie('qr_referrer', referrerLink, 3);
}

function submitQuickRegistrationReferrerGA() {
    if (getCookie('qr_referrer') != null) {
        var qr_referrer = getCookie('qr_referrer');
        ga('send', 'event', 'Quick Registration', 'Registered Success', 'UserID=' + GA_UserID + qr_referrer);
        deleteCookie('qr_referrer');
    }
}

// ========= Poker ===========
function EnterGamePoker(pokerType, playReal, memberCode, isGameLock) {

    if (PokerRegister == "True" && isLogin == "true") {
        PokerPopupLogin("");
        return false;
    }

    var GameUrl = "/CasinoGames/Lobby.aspx?ProductCode=IPK";

    // -- For user to login before enter Poker
    if (!DialogManager_isLogin(memberCode)) {
        EnsureLogin(window.location.href);
        return false;
    }

    if (isGameLock == '0') {
        GameUrl = GameUrl + "&GameId=" + pokerType + "&isDemo=" + playReal;

        var popupWin = popUpWindowManager(GameUrl, 'Keno', 1020);
        if (popupWin && typeof popupWin.focus == "function") { popupWin.focus(); }

        return false;
    } else {
        DialogManager_Show(" ", window.gameLockMessage);
        $(".ui-dialog-titlebar").css('height', '15px');
        return false;
    }

}

function PokerPopupLogin(url) {
    $("#PokerProceedNextUrl").val(url);
    $(".login_message").hide();
    $.colorbox({
        inline: true,
        href: "#pokerAuthenticationBox",
        innerWidth: 689,
        closeButton: false,
        overlayClose: false,
        escKey: false,
        // Work around for close button conflict (more than one colorbox)
        onLoad: function () { $('#cboxClose').remove(); }
    });
}

function ClosePokerLogin() {
    $.colorbox.close();
}

function CloseAndRedirectPokerLogin(returnUrl) {
    getPokerLoading();
    // For page that is pop out
    window.close();
    window.location.href = returnUrl;
    return false;
}

function getPokerLoading() {
    $(".loadingLoginGif").css("display", "block").css("z-index", 1000000).find("img").css("padding-top", $(window).height() / 2);
}

function closePokerLoading() {
    $(".loadingLoginGif").css("display", "none");
}

function PokerAuthentication() {
    var nickName = encodeURIComponent($("#txtPokerUserName").val());
    var maxErrorMessageLength = 50;

    getPokerLoading();

    $.post("/Services/PokerService.ashx",
        { nickName: nickName },
        function (data) {
            if (data.result == "success") {
                PokerRegister = "False";
                ClosePokerLogin();
            } else {

                if (data.code == "9001") {
                    $("#PokerErrorMessage").text(PokerMemberExist);
                } else if (data.code == "9002") {
                    $("#PokerErrorMessage").text(PokerLength);
                } else if (data.code == "9003") {
                    $("#PokerErrorMessage").text(PokerLetterNickName);
                } else if (data.code == "9004") {
                    $("#PokerErrorMessage").text(PokerMemberUnavailable);
                } else if (data.code == "9998") {
                    $("#PokerErrorMessage").text(PokerNotResponding);
                } else if (data.code == "9999") {
                    $("#PokerErrorMessage").text(PokerError);
                } else {
                    $("#PokerErrorMessage").text(data.description);
                }

                $(".login_message").show().delay(5000).fadeOut("slow");;
            }
            closePokerLoading();
        }, "json");

    return false;
}

function getPreviousURL() {
    var getUrl = window.location.pathname;
    var pathUrl = getUrl.replace(getUrl.substring(getUrl.lastIndexOf('/')), '');
    window.location = pathUrl;
}

var popupWin;

function openGameWindow(gamePath) {
    var centerHeight = screen.availHeight;
    var curHeight = centerHeight - 70;
    openGameWindowBase(gamePath, curHeight, 1060)
}

function openGameWindowFullScreen(gamePath) {
    var centerHeight = screen.availHeight;
    var curHeight = centerHeight - 70;
    openGameWindowBase(gamePath, curHeight, screen.availWidth - 15)
}

function openGameWindowBase(gamePath, height, width) {
    if (typeof (popupWin) != "object") {
        popupWin = window.open(gamePath, "0", "toolbar=0,menubar=0,location=0,status=0,height=" + height + ",width=" + width + ",scrollbars=no,resizable=yes");
    } else {
        if (!popupWin.closed) {
            popupWin.location.href = gamePath;
        } else {
            popupWin = window.open(gamePath, "0", "toolbar=0,menubar=0,location=0,status=0,height=" + height + ",width=" + width + ",scrollbars=no,resizable=yes");
        }
    }
    popupWin.focus();
}

function EnterSlotGame(getId, memberCode, isGameLock) {
    var UrlSlotGame = '/CasinoGames/SlotLobby.aspx?GameId=';
    if (isGameLock == "0") {
        if (Boolean(isLogin) && currency == "krw") {
            DialogManager_Show(" ", window.koreaMessage);
            $(".ui-dialog-titlebar").css('height', '15px');
            return false;
        }
        else {

            GameId = $("#" + getId.id).parent().find("#hdnGameId").attr("value");
            ProviderCategory = $("#" + getId.id).parent().find("#hdnGameProvider").attr("value");
            IsPlayFunReal = $("#" + getId.id).attr("class");

            //alert(IsPlayFunReal);
            if (IsPlayFunReal == "btnPlayReal")
                GamePath = UrlSlotGame + GameId + '&ProductCode=' + ProviderCategory;
            else
                GamePath = UrlSlotGame + GameId + '&ProductCode=' + ProviderCategory + "&IsDemo=1";

            if (IsPlayFunReal == "btnPlayReal") {
                if (!DialogManager_isLogin(memberCode)) {
                    EnsureSlotLogin(window.location.href);
                    return false;
                }
            }
            openGameWindow(GamePath.toString());
        }
    }
    else {
        DialogManager_Show(" ", window.gameLockMessage);
        $(".ui-dialog-titlebar").css('height', '15px');
        return false;
    }
}

function EnterGame(getId, memberCode, isGameLock) {
    var GamePath = null;
    var GameId;
    var IsPlayFunReal = "Default";
    var ProviderCategory;
    var UrlPath = '/CasinoGames/Lobby.aspx?GameId=';
    var UrlSlotGame = '/CasinoGames/SlotLobby.aspx?GameId=';
    var UrlPathMainLobby = '/CasinoGames/Lobby.aspx?';
    var checkParent = $("#" + getId.id).parent().attr("class");

    var playboyID = $('#hdnPlayboyGameId').val();
    var playboyGameProvider = $('#hdnPlayboyGameProvider').val();

    //alert(isGameLock);
    if (isGameLock == "0") {
        //alert("Game lock :" + isGameLock);
        if (Boolean(isLogin) && currency == "krw") {
            DialogManager_Show(" ", window.koreaMessage);
            $(".ui-dialog-titlebar").css('height', '15px');
            return false;
        }

        if (typeof (getId) == "string" && getId.toLowerCase().indexOf("exchange") !== -1) {
            GamePath = getId;
            ProviderCategory = "BFR";
        }
        else if (getId.id.toLowerCase() == "btn_s1" || getId.id.toLowerCase() == "btn_s5") { //Playboy slide button
            GamePath = UrlSlotGame + playboyID + '&ProductCode=' + playboyGameProvider;
        }
        else {
            if (checkParent.toLowerCase() == "popup") { //popup game slot
                GameId = $("#" + getId.id).parent().parent().parent().parent().parent().find("#hdnGameId").attr("value");
                ProviderCategory = $("#" + getId.id).parent().parent().parent().parent().parent().find("#hdnGameProvider").attr("value");
                IsPlayFunReal = $("#" + getId.id).attr("class");

                //alert(IsPlayFunReal);
                if (IsPlayFunReal == "btnPlayReal")
                    GamePath = UrlSlotGame + GameId + '&ProductCode=' + ProviderCategory;
                else
                    GamePath = UrlSlotGame + GameId + '&ProductCode=' + ProviderCategory + "&IsDemo=1";


            } else if (checkParent.toLowerCase() == "gamelist") { //Live casino game list
                GameId = $("#" + getId.id).parent().find(".hdnGameId").attr("value");
                var isDownload = $("#" + getId.id).parent().find(".lnkPlayDownload").length;
                ProviderCategory = $("#" + getId.id).parent().find(".hdnGameProvider").attr("value");
                if (ProviderCategory == 'BOY' && memberCode.length > 15) {
                    boyAlert();
                    return false;
                }

                if (isDownload == true)
                    GamePath = UrlPathMainLobby + "productcode=ea&platform=download";
                else
                    GamePath = UrlPath + GameId + '&ProductCode=' + ProviderCategory;


            } else if (checkParent.toLowerCase() == "mainlobby") { //Game lobby
                ProviderCategory = $("#" + getId.id).attr("id");
                if (ProviderCategory == 'MGSQF')
                    GamePath = UrlPath + $("#hdnGameId_MGSQF_LiveRoulette").attr("value") + '&ProductCode=' + ProviderCategory;
                else
                    GamePath = UrlPath + '0&ProductCode=' + ProviderCategory;

            } else if (checkParent.toLowerCase() == "menu-provider") { //Live casino menu provider
                ProviderCategory = $("#" + getId.id).attr("id");
                if (ProviderCategory == 'MGSQF')
                    GamePath = UrlPath + $("#hdnGameId_MGSQF_LiveRoulette").attr("value") + '&ProductCode=' + ProviderCategory;
                else if (ProviderCategory == 'BOY') {
                    if (memberCode.length > 15) {
                        boyAlert();
                        return false;
                    }
                    GamePath = UrlPath + '846&ProductCode=' + ProviderCategory;
                }
                else if (ProviderCategory == 'SUN') {
                    GamePath = UrlPath + $("#hdnGameId_SUN_Sunbet_Lobby").attr("value") + '&ProductCode=' + ProviderCategory;
                }
                else
                    GamePath = UrlPath + '0&ProductCode=' + ProviderCategory;

            } else if (checkParent.toLowerCase() == "dvlinkbanner") { // download games
                switch ($("#" + getId.id).parent().parent().find(".hdnGameProvider").attr("value")) {
                    case 'EA':
                        GamePath = UrlPathMainLobby + "productcode=ea&platform=download"; break;
                    case 'BOY':
                        GamePath = UrlPathMainLobby + "productcode=boy&platform=download"; break;
                    case 'AG':
                        GamePath = UrlPathMainLobby + "productcode=ag&platform=download"; break;
                }


            } else if (checkParent.toLowerCase() == "gamedetail" || checkParent.toLowerCase() == "dvrecommendedgames") { //Game Detail
                var isDownload = $("#" + getId.id).parent().find(".lnkPlayDownload").length;
                GameId = $("#" + getId.id).parent().find("#hdnGameId").attr("value");
                ProviderCategory = $("#" + getId.id).parent().find("#hdnGameProvider").attr("value");

                if (ProviderCategory == 'BOY' && memberCode.length > 15) {
                    boyAlert();
                    return false;
                }

                if (isDownload == true)
                    GamePath = UrlPathMainLobby + "productcode=ea&platform=download";
                else
                    GamePath = UrlPath + GameId + '&ProductCode=' + ProviderCategory;

            } else if (checkParent.toLowerCase() == "recommended") { //recommended games
                GameId = $("#" + getId.id).parent().find("#hdnGameId").attr("value");
                ProviderCategory = $("#" + getId.id).parent().find("#hdnGameProvider").attr("value");
                GamePath = UrlPath + GameId + '&ProductCode=' + ProviderCategory;

            } else if (checkParent.toLowerCase() == "map2") { //Live casino - hot games link
                ProviderCategory = $("#" + getId.id).attr("id");

                GamePath = UrlPathMainLobby + 'ProductCode=' + ProviderCategory;

            } else if (checkParent.toLowerCase() == "play-slot") { //Slot 3 games
                GameId = $("#" + getId.id).parent().find("input").attr("value");
                ProviderCategory = $("#" + getId.id).parent().find(".hdnGameProvider").attr("value");
                GamePath = UrlSlotGame + GameId + '&ProductCode=' + ProviderCategory;

            } else if (checkParent && checkParent.toLowerCase().indexOf("starcasinogame") >= 0) { //Star Casino
                GameId = $("#" + getId.id).parent().find("#hdnGameId").attr("value");
                IsPlayFunReal = $("#" + getId.id).attr("class");

                if (GameId == null || GameId == "undefined") {
                    GameId = $("#" + getId.id).parent().parent().find(".hiddenGameId").attr("value");
                }

                if (IsPlayFunReal == "btnPTRealPlay") {
                    GamePath = UrlPath + GameId + '&ProductCode=PT';
                } else {
                    GamePath = UrlPath + GameId + '&ProductCode=PT&IsDemo=1';
                }

            }
            else if (getId.id.toLowerCase() == "mgs_mppb" || getId.id.toLowerCase() == "mgs_mppb_cn" || getId.id.toLowerCase() == "btn_s1" || getId.id.toLowerCase() == "btn_s5") {
                GamePath = UrlSlotGame + playboyID + '&ProductCode=' + playboyGameProvider;
            }
            else if (checkParent.toLowerCase() == "popupnewslot" || checkParent.toLowerCase() == "popupnewslot dimmed" || checkParent.toLowerCase() == "popupnewslotinfo") {
                GameId = $("#" + getId.id).parent().parent().parent().attr("data-dbid");
                ProviderCategory = $("#" + getId.id).parent().parent().parent().attr("data-vendor");
                IsPlayFunReal = $("#" + getId.id).attr("class");

                if (IsPlayFunReal == "btnPlayReal")
                    GamePath = UrlSlotGame + GameId + '&ProductCode=' + ProviderCategory;
                else
                    GamePath = UrlSlotGame + GameId + '&ProductCode=' + ProviderCategory + "&IsDemo=1";
            }
            else if (checkParent.toLowerCase().indexOf("cgboxhover") > -1 || checkParent.toLowerCase().indexOf("cglisthover") > -1) {
                // From new slot page
                var egctrl = $("#" + getId.id).closest(".cggamedata");
                GameId = egctrl.attr("data-dbid");
                ProviderCategory = egctrl.attr("data-vendor");

                if ($("#" + getId.id).hasClass("btnPlayReal")) {
                    GamePath = UrlSlotGame + GameId + '&ProductCode=' + ProviderCategory;
                }
                else {
                    GamePath = UrlSlotGame + GameId + '&ProductCode=' + ProviderCategory + "&IsDemo=1";
                    IsPlayFunReal = "";
                }
            }
            else if (checkParent.toLowerCase().indexOf("cginfodetailbtmbtn") > -1) {
                // From new slot page
                var egctrl = $(".cggamedata[data-dbid='" + $("#" + getId.id).closest("#cginfo").attr("data-dbid") + "']");
                GameId = egctrl.attr("data-dbid");
                ProviderCategory = egctrl.attr("data-vendor");

                if ($("#" + getId.id).hasClass("btnPlayReal")) {
                    GamePath = UrlSlotGame + GameId + '&ProductCode=' + ProviderCategory;
                }
                else {
                    GamePath = UrlSlotGame + GameId + '&ProductCode=' + ProviderCategory + "&IsDemo=1";
                    IsPlayFunReal = "";
                }
            }
            //re-add this }
        }


        if (IsPlayFunReal == "btnPlayReal" || IsPlayFunReal == "btnPTRealPlay" || IsPlayFunReal == "Default") {
            if (!DialogManager_isLogin(memberCode)) {
                EnsureLogin(window.location.href);
                return false;
            }
        }

        if (!Is_TS_User(memberCode, ProviderCategory)) { return false; }
        else if (!Is_AB_User(memberCode, ProviderCategory)) { return false; }

        if (ProviderCategory === "BFR") {
            window.location.href = GamePath.toString();
        } else if (getId.id.toLowerCase() == "btn_s1" || getId.id.toLowerCase() == "btn_s5") {
            openGameWindow(GamePath.toString());
        } else if (checkParent.toLowerCase() == "dvlinkbanner" || isDownload == true) {
            window.location.href = GamePath;
        } else if (ProviderCategory === "SUN" || ProviderCategory === "BFR") {
            openGameWindowFullScreen(GamePath.toString());
        } else {
            openGameWindow(GamePath.toString());
        }
        return false;
    } else {
        DialogManager_Show(" ", window.gameLockMessage);
        $(".ui-dialog-titlebar").css('height', '15px');
        return false;
    }
}


// ========== Live Casino - Hot games link ==============

function EnterGameTable(provider, gameId, memberCode, isGameLock, isSlot) {

    if (!isSlot)
        var urlPath = '/CasinoGames/Lobby.aspx?GameId=';
    else
        var urlPath = '/CasinoGames/SlotLobby.aspx?GameId=';
    var provCode = '&ProductCode=';
    var gamePath;

    if (!DialogManager_isLogin(memberCode)) {
        if (!isSlot)
            EnsureLogin(window.location.href);
        else
            EnsureSlotLogin(window.location.href);
        return false;
    }

    if (!isSlot) {
        if (!Is_TS_User(memberCode, provider)) { return false; }
        else if (!Is_AB_User(memberCode, provider)) { return false; }
    }
    if (isGameLock == "0") {
        if (currency == "krw") {
            DialogManager_Show(" ", window.koreaMessage);
            $(".ui-dialog-titlebar").css('height', '15px');
            return false;
        }

        gamePath = urlPath + gameId + provCode + provider;

        switch (provider) {
            case "CLB":
                $.colorbox({ href: gameId });
                break;
            case "SUN":
                openGameWindowFullScreen(gamePath.toString());
                break;
            default:
                openGameWindow(gamePath.toString());
                break;
        }

        return false;
    } else {
        DialogManager_Show(" ", window.gameLockMessage);
        $(".ui-dialog-titlebar").css('height', '15px');
        return false;
    }
}

function getAreaBasedOnProvider(provider, area, memberCode, isGameLock) {
    var gameId;
    switch (provider) {
        case "EA":
            switch (area) {
                case "area1":
                case "area2":
                case "area3":
                case "area4":
                    //alert(provider + " : Super Baccarat");
                    gameId = $("#hdnGameId_EA_10001").attr("value");
                    EnterGameTable(provider, gameId, memberCode, isGameLock, false);
                    break;
            }
            break;
        case "MGSQF":
            switch (area) {
                case "area1":
                case "area2":
                case "area3":
                case "area4":
                    gameId = $("#hdnGameId_MGSQF_LiveRoulette").attr("value");
                    //alert(provider + " : LiveBaccarat : " + getValue);
                    EnterGameTable(provider, gameId, memberCode, isGameLock, false);
                    break;
            }
            break;
        case "CP":
            switch (area) {
                case "area1":
                    //alert(provider + " : Baccarat");
                    gameId = $("#hdnGameId_CP_1").attr("value");
                    EnterGameTable(provider, gameId, memberCode, isGameLock, false);
                    break;
                case "area2":
                    //alert(provider + " : Roulette");
                    gameId = $("#hdnGameId_CP_2").attr("value");
                    EnterGameTable(provider, gameId, memberCode, isGameLock, false);
                    break;
                case "area3":
                    //alert(provider + " : SicBo");
                    gameId = $("#hdnGameId_CP_3").attr("value");
                    EnterGameTable(provider, gameId, memberCode, isGameLock, false);
                    break;
                case "area4":
                    //alert(provider + " : SicBo Fan Tan");
                    gameId = $("#hdnGameId_CP_5").attr("value");
                    EnterGameTable(provider, gameId, memberCode, isGameLock, false);
                    break;
            }
            break;
        case "GD":
            switch (area) {
                case "area1":
                    //alert(provider + " : Traditional Baccarat");
                    gameId = $("#hdnGameId_GD_RN").attr("value");
                    EnterGameTable(provider, gameId, memberCode, isGameLock, false);
                    break;
                case "area2":
                    //alert(provider + " : Multigame Baccarat");
                    gameId = $("#hdnGameId_GD_MT").attr("value");
                    EnterGameTable(provider, gameId, memberCode, isGameLock, false);
                    break;
                case "area3":
                    ////alert(provider + " : Parlay Baccarat");
                    gameId = $("#hdnGameId_GD_MB").attr("value");
                    EnterGameTable(provider, gameId, memberCode, isGameLock, false);
                    break;
                case "area4":
                    //alert(provider + " : 3D Baccarat");
                    gameId = $("#hdnGameId_GD_3D").attr("value");
                    EnterGameTable(provider, gameId, memberCode, isGameLock, false);
                    break;
            }
            break;
        case "BOY":
            if (memberCode.length > 15) {
                boyAlert();
                return false;
            }
            switch (area) {
                case "area1":
                    gameId = $("#hdnGameId_BOY_3001").attr("value");
                    EnterGameTable(provider, gameId, memberCode, isGameLock, false);
                    break;
                case "area2":
                    gameId = $("#hdnGameId_BOY_3001").attr("value");
                    EnterGameTable(provider, gameId, memberCode, isGameLock, false);
                    break;
                case "area3":
                    gameId = $("#hdnGameId_BOY_3011").attr("value");
                    EnterGameTable(provider, gameId, memberCode, isGameLock, false);
                    break;
                case "area4":
                    gameId = $("#hdnGameId_BOY_3007").attr("value");
                    EnterGameTable(provider, gameId, memberCode, isGameLock, false);
                    break;
            }
            break;
        case "BD":
            switch (area) {
                case "area1":
                case "area2":
                case "area3":
                case "area4":
                    //alert(provider + " : Baccarat Supersix");
                    gameId = $("#hdnGameId_BD_BaccaratSuperSix").attr("value");
                    EnterGameTable(provider, gameId, memberCode, isGameLock, false);
                    break;
            }
            break;
        case "AG":
            switch (area) {
                case "area1":
                case "area2":
                case "area3":
                case "area4":
                    //alert(provider + " : Baccarat Supersix");
                    gameId = $("#hdnGameId_AG_").attr("value");
                    EnterGameTable(provider, gameId, memberCode, isGameLock, false);
                    break;
            }
            break;
        case "GE":
            switch (area) {
                case "area1":
                case "area2":
                case "area3":
                case "area4":
                    //alert(provider + " : Baccarat");
                    gameId = $("#hdnGameId_GE_Baccarat").attr("value");

                    EnterGameTable(provider, gameId, memberCode, isGameLock, false);
                    break;
            }
            break;
        case "OPUS":
            switch (area) {
                case "area1":
                    gameId = $("#OPUS_LiveCasino_Baccarat").find("#hdnGameId_OPUS_RoyalRuby").val();
                    EnterGameTable(provider, gameId, memberCode, isGameLock, false);
                    break;
                case "area2":
                    gameId = $("#OPUS_LiveCasino_DragonTiger").find("#hdnGameId_OPUS_RoyalRuby").val();
                    EnterGameTable(provider, gameId, memberCode, isGameLock, false);
                    break;
                case "area3":
                    gameId = $("#OPUS_LiveCasino_SicBo").find("#hdnGameId_OPUS_RoyalRuby").val();
                    EnterGameTable(provider, gameId, memberCode, isGameLock, false);
                    break;
                case "area4":
                    gameId = $("#OPUS_LiveCasino_Roulette").find("#hdnGameId_OPUS_RoyalRuby").val();
                    EnterGameTable(provider, gameId, memberCode, isGameLock, false);
                    break;
            }
            break;
        case "TS":

            switch (area) {
                case "area1":
                case "area2":
                case "area3":
                case "area4":
                    gameId = $("#hdnGameId_TS_").attr("value");

                    EnterGameTable(provider, gameId, memberCode, isGameLock, false);
                    break;
            }
            break;
        case "AB":
            switch (area) {
                case "area1":
                    gameId = $("#hdnGameId_AB_101").attr("value");
                    EnterGameTable(provider, gameId, memberCode, isGameLock, false);
                    break;
                case "area2":
                    gameId = $("#hdnGameId_AB_401").attr("value");
                    EnterGameTable(provider, gameId, memberCode, isGameLock, false);
                    break;
                case "area3":
                    gameId = $("#hdnGameId_AB_102").attr("value");
                    EnterGameTable(provider, gameId, memberCode, isGameLock, false);
                    break;
                case "area4":
                    gameId = $("#hdnGameId_AB_104").attr("value");
                    EnterGameTable(provider, gameId, memberCode, isGameLock, false);
                    break;
            }
            break;
        case "SAG":
            switch (area) {
                case "area1":
                    gameId = $("#SAG_LiveCasino_Baccarat").find("#hdnGameId_SAG_bac").val();
                    EnterGameTable(provider, gameId, memberCode, isGameLock, false);
                    break;
                case "area2":
                    gameId = $("#hdnGameId_SAG_ftan").val();
                    EnterGameTable(provider, gameId, memberCode, isGameLock, false);
                    break;
                case "area3":
                    gameId = $("#SAG_LiveCasino_QuickBaccarat").find("#hdnGameId_SAG_bac").val();
                    EnterGameTable(provider, gameId, memberCode, isGameLock, false);
                    break;
                case "area4":
                    gameId = $("#hdnGameId_SAG_rot86").val();
                    EnterGameTable(provider, gameId, memberCode, isGameLock, false);
                    break;
            }
            break;
        case "SUN":
            switch (area) {
                case "area1":
                    gameId = $("#SUN_LiveCasino_3CardPoker").find("#hdnGameId_SUN_3_Card_Poker").val();
                    EnterGameTable(provider, gameId, memberCode, isGameLock, false);
                    break;
                case "area2":
                    gameId = $("#SUN_LiveCasino_ChainBaccarat").find("#hdnGameId_SUN_All-In-One_Game").val();
                    EnterGameTable(provider, gameId, memberCode, isGameLock, false);
                    break;
                case "area3":
                    gameId = $("#SUN_LiveCasino_SuperBaccarat").find("#hdnGameId_SUN_Super_Baccarat_1").val();
                    EnterGameTable(provider, gameId, memberCode, isGameLock, false);
                    break;
                case "area4":
                    gameId = $("#SUN_LiveCasino_BullFight").find("#hdnGameId_SUN_Bullfight").val();
                    EnterGameTable(provider, gameId, memberCode, isGameLock, false);
                    break;
            }
            break;
    }
}
//Get incremental jackpot value
function isNumber(obj) {
    return !isNaN(parseFloat(obj)) && isFinite(obj);
}
function incrementalJackpot(gameId) {
    setInterval(function () {
        var getVal = $('#' + gameId).text().trim();
        var checkVal = Number(getVal);
        var convertVal = Number(getVal.replace(/[^0-9\.]+/g, ""));
        if (checkVal > 0 || checkVal != "NaN") {
            convertVal = convertVal + 0.01;
            if (typeof accounting !== 'undefined')
                $('#' + gameId).text(accounting.formatNumber(convertVal, 2, ",", "."));
        }

    }, 1000);
}

function incrementalJackpotByClass(gameClass) {
    setInterval(function () {
        var getVal = $('.' + gameClass + ":first").text().trim();
        var checkVal = Number(getVal);
        var convertVal = Number(getVal.replace(/[^0-9\.]+/g, ""));
        if (checkVal > 0 || checkVal != "NaN") {
            convertVal = convertVal + 0.01;
            if (typeof accounting !== 'undefined')
                $('.' + gameClass).text(accounting.formatNumber(convertVal, 2, ",", "."));
        }

    }, 1000);
}

function LoadGameDetails(id) {
    try {
        var dvGames = $(".dvGames.g" + id);
        var gameJson;
        if (window.gameObject != null) {
            for (var i in window.gameObject) {
                if (window.gameObject[i].GameCode == id) {
                    gameJson = window.gameObject[i];
                    break;
                }
            }
            if (gameJson != null /*&& $.inArray(id, window.gameLoaded) === -1*/ && dvGames.length > 0) {
                var z = dvGames.find("img.orignal");
                z.attr({ "src": gameJson.GameImage, "alt": gameJson.GameAltImage });
                var y = dvGames.find(".starcasinogame");
                y.find(".hiddenGameId").val(gameJson.GameID);
                y.find(".btnPTRealPlay").attr("id", gameJson.GameName).text(window.playNow);
                y.find(".btnPTDemoPlay").attr("id", "demo" + gameJson.GameName).text(window.demoPlay);
                dvGames.find(".f_left.text3.msg_bold").text(gameJson.Name);
                if (gameJson.JackpotAmount != "") {
                    var x = dvGames.find(".gameminijackpot");
                    x.find(".amount").addClass("jp" + gameJson.GameName).text(gameJson.JackpotAmount);
                    x.find(".spCurrency").text(gameJson.CurrencyCode);

                    $.when(incrementalJackpotByClass("jp" + gameJson.GameName)).then(x.removeClass("displayFalse"));
                }
                for (var j = 0; j < dvGames.length; j++) {
                    if ($(dvGames[j]).parents().eq(2).index() === 0) {
                        var item = $(dvGames[j]);
                        item.removeClass("dvGames").addClass("dvMain").append($("<div>", { "class": "hotbanner" })).find("img.orignal").css({ "height": "323px", "width": "450px" }).attr('src', gameJson.GameImage.replace(".jpg", "_b.jpg"));
                        item.find(".gameminijackpot").removeClass("gameminijackpot").addClass("gamelinejackpotmain").find(".spCurrency").removeClass("spCurrency").addClass("spCurrencyMain");
                        item.find(".starcasinogame").removeClass("play3").addClass("play2");
                        item.find(".PT_button_hover").removeClass("PT_button_hover").addClass("PT_hover_main");
                    }
                }

                if (!gameJson.IsDemoAvailable) {
                    dvGames.find(".btnPTDemoPlay").remove();
                    dvGames.find(".PT_hover_main .starcasinogame").css("top", "43%");
                    dvGames.find(".PT_button_hover .starcasinogame").css("top", "44%");
                }

                //window.gameLoaded.push(id);
                dvGames.show();
            }
        } else {
            window.setTimeout(function () { LoadGameDetails(id); }, 2000);
        }
    } catch (e) {
        window.setTimeout(function () { LoadGameDetails(id); }, 2000);
    }
}

function LoadSlotGameDetails(gameCode) {
    try {
        var rGame = $("#divrecommendedGame");
        var dvGames = $(".dvGames.name" + gameCode);
        var TotalGame = rGame.children().children().children().length;
        var gameJson;
        if (window.slotGame != null) {
            for (var i in window.slotGame) {
                if (window.slotGame[i].GameCode == gameCode) {
                    gameJson = window.slotGame[i];
                    break;
                }
            }
            if (gameJson != null) {
                var hiddenID = dvGames.find(".slotrg");
                hiddenID.find(".hiddenSlotGameID").val(gameJson.GameId);
                hiddenID.find(".hiddenSlotGameProvider").val(gameJson.GameProvider);
                hiddenID.find(".hiddenSlotGameCode").val(gameCode);

                var gamename = dvGames.find("#G" + gameCode);
                gamename.attr({ "title": gameJson.GameName });

                var gameImage = dvGames.find(".gameImg");
                var gameImageExt = gameJson.GameImage;
                var newGameImageExt = gameImageExt.replace("jpg", "png");
                gameImage.attr({ "src": "/Images/CasinoGames/SlotGameLobby/" + newGameImageExt });
                gameImage.attr({ "width": "101px" });
                gameImage.attr({ "height": "80px" });

                if (!DialogManager_isLogin(window.memberCode)) {
                    gamename.attr({ "class": "btnPlayFun" });
                }
                else {
                    gamename.attr({ "class": "btnPlayReal" });
                }

                dvGames.show();
            }
            else {
                dvGames.parent().remove();
            }
        }
        else {
            window.setTimeout(function () { LoadSlotGameDetails(gameCode); }, 2000);
        }
    } catch (e) {
        window.setTimeout(function () { LoadSlotGameDetails(gameCode); }, 2000);
    }
}

/*
 * This is Java Script library to customize FrontMember main menu
 * Created by: Indra Gunawan (indra.gunawan@nettium.net) 
 * Created Date: 20130521
 * Required Dependency: jQuery (http://jquery.com)
 */

function alignSubMenuToLeft(parentElement, ofElement) {
    // Do the magic trick
    $(parentElement + " li:first-child").css("margin-left", $(ofElement).position().left);
}

function alignSubMenuToRight(parentElement, ofElement) {
    // Apply CSS float right
    $(parentElement + " li").css("float", "right");
    // Reverse the order since float value is changed to right
    $(parentElement).children().each(function (i, li) { $(parentElement).prepend(li); });
    // Do the magic trick
    $(parentElement + " li:first-child").css("margin-right", $(parentElement).width() - calculateRightPosition($(ofElement)));
}

function calculateRightPosition(theElement) {
    return $(theElement).position().left + $(theElement).width() + 15;
}

function distributeMenuPadding(menuElement) {
    var maxWidth = $(menuElement).width();
    var nonChildLength = 0;
    var childLength = 0;
    var nonMenuElementWidth = 0;
    var menuElementWidth = 0;
    var nonChildPadding = 5;
    var childPadding = 0;

    $(menuElement).children().each(function (i, li) {
        if (i == 0 || $(li).hasClass("menuSeperator")) {
            nonMenuElementWidth += $(li).width();
            nonChildLength++;
        } else {
            menuElementWidth += $(li).children('a').width();
            childLength++;
        }
    });
    var availableWidth = (maxWidth - nonMenuElementWidth) - (nonChildPadding * nonChildLength * 2);
    $(menuElement).children().each(function (i, li) {
        if (i > 0 && !$(li).hasClass("menuSeperator")) {
            var proportion = ($(li).children('a').width() + parseInt($(li).children('a').css("padding-left")) + (childPadding * 2)) / (menuElementWidth + nonMenuElementWidth);
            $(li).width(proportion * availableWidth);
        } else {
            if (i > 0) {
                $(li).css("padding-left", nonChildPadding);
                $(li).css("padding-right", nonChildPadding);
            }
        }
    });
    $(menuElement).css("visibility", "visible");
}


/*  Pop up function for deposit, withdrawal, etc...       
    @tgh

    -   deposit, withdrawal, transfer, bonus : 
        width = 793,  title = popUpWindow
    -   How to play Content : width = 1020, title = GeneralRules      

*/
function popUpWindowManager(defaultUrl, titlePopup, widthPopup) {

    var pathname = window.location.pathname;
    var pathInSplit = pathname.split('/');
    var lastElement = pathInSplit.length - 1;

    if (pathInSplit[lastElement] == "" && defaultUrl.indexOf("..") != -1) {
        defaultUrl = defaultUrl.split('..').join('')
    }

    var getHeight = screen.availHeight;
    var curHeight = getHeight - 70;
    window.open(defaultUrl, titlePopup, 'height=' + curHeight + ', width=' + widthPopup + ',resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no, status=yes,top=0');

}

function popUpColorBox(defaultUrl) {
    $.colorbox
    ({
        top: 10,
        href: defaultUrl,
        fixed: true,
        onClosed: function () {
            $.colorbox.close();
        }
    });
}

function runShakeEffect(control) {
    // run the effect
    var jControl = $('#' + control);
    var options = { direction: "left", distance: "2", times: "3" };
    $(jControl).effect("shake", options, 400, function () {
        setTimeout(function () {
            $(control).removeAttr("style").hide().fadeIn();
        }, 1000);
    });
}

function runHighlightEffect(control) {
    // run the effect
    var jControl = $('#' + control);
    var options = { color: "#ff3333" };
    $(jControl).effect("highlight", options, 400, function () {
        setTimeout(function () {
            $(control).removeAttr("style").hide().fadeIn();
        }, 1000);
    });
}

function ValidateMember(sender, args) {
    if (document.getElementById(sender.controltovalidate).value != "") {
        var validateValue = document.getElementById(sender.controltovalidate).value;
        if (!validateValue || !validateValue.match('^[a-zA-Z0-9\-\_\.]+$')) {
            runHighlightEffect(sender.controltovalidate);
            args.IsValid = false;
        } else {
            args.IsValid = true;
        }
    } else {
        args.IsValid = false;
    }
}

function ValidateLoginPopup(sender, args) {
    if (document.getElementById(sender.controltovalidate).value != "") {
        var validateValue = document.getElementById(sender.controltovalidate).value;
        if (!validateValue || !validateValue.match('^[a-zA-Z0-9\-\_\.]+$')) {
            $(".login_message").show();
            runHighlightEffect(sender.controltovalidate);
            args.IsValid = false;
        } else {
            $(".login_message").delay(500).fadeOut("slow");
            args.IsValid = true;
        }
    } else {
        args.IsValid = false;
    }
}

// ========= Keno ===========
function EnterGameKeno(kenoType, playReal, memberCode, isGameLock) {

    var GameUrl = "/CasinoGames/Lobby.aspx?ProductCode=PK";

    // -- For user to login before enter Keno
    if (!DialogManager_isLogin(memberCode)) {
        EnsureLogin(window.location.href);
        return false;
    }

    if (isGameLock == '0') {
        if (currency == "krw") {
            DialogManager_Show(" ", window.koreaMessage);
            $(".ui-dialog-titlebar").css('height', '15px');
            return false;
        }

        GameUrl = GameUrl + "&GameId=" + kenoType + "&isDemo=" + playReal;

        //alert(GameUrl);
        var popupWin = popUpWindowManager(GameUrl, 'Keno', 1020);
        if (popupWin && typeof popupWin.focus == "function") { popupWin.focus(); }

        return false;
    } else {
        DialogManager_Show(" ", window.gameLockMessage);
        $(".ui-dialog-titlebar").css('height', '15px');
        return false;
    }

}

function EnterGameLBKeno(kenoType, playReal, memberCode, isGameLock) {

    var GameUrl = "/CasinoGames/Lobby.aspx?ProductCode=LBK";

    // -- For user to login before enter Keno
    if (!DialogManager_isLogin(memberCode)) {
        EnsureLogin(window.location.href);
        return false;
    }

    if (isGameLock == '0') {
        if (currency == "krw") {
            DialogManager_Show(" ", window.koreaMessage);
            $(".ui-dialog-titlebar").css('height', '15px');
            return false;
        }
        GameUrl = GameUrl + "&GameId=" + kenoType + "&isDemo=" + playReal;

        //alert(GameUrl);
        var popupWin = popUpWindowManager(GameUrl, 'Keno', 1020);
        if (popupWin && typeof popupWin.focus == "function") { popupWin.focus(); }

        return false;
    } else {
        DialogManager_Show(" ", window.gameLockMessage);
        $(".ui-dialog-titlebar").css('height', '15px');
        return false;
    }
}