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
    openGameWindowBase(gamePath,curHeight, screen.availWidth-15)
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

        if (typeof(getId) == "string" && getId.toLowerCase().indexOf("exchange") !== -1) {
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
            window.open(GamePath.toString(),"_blank");
        } else if (getId.id.toLowerCase() == "btn_s1" || getId.id.toLowerCase() == "btn_s5") {
            openGameWindow(GamePath.toString());
        }else if (checkParent.toLowerCase() == "dvlinkbanner" || isDownload == true) {
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
                    gameId = $("#hdnGameId_BOY_3003").attr("value");
                    EnterGameTable(provider, gameId, memberCode, isGameLock, false);
                    break;
                case "area3":
                    gameId = $("#hdnGameId_BOY_3008").attr("value");
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