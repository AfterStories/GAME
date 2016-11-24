if (!document.getElementsByClassName) {
    document.getElementsByClassName = function (className, element) {
        var children = (element || document).getElementsByTagName('*');
        var elements = new Array();
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            var classNames = child.className.split(' ');
            for (var j = 0; j < classNames.length; j++) {
                if (classNames[j] == className) {
                    elements.push(child);
                    break;
                }
            }
        }
        return elements;
    };
}

var moreClick = false;

var Sport_More = [];
var sKeeper_Sport = [];
var SportMore_ThreadId = [];
var Sport_More_End = [];
var retryCnt = [];
var TeamH = [];
var TeamA = [];
var bFromBtnClick = [];
var bOpenMore = [];
var oajaxData = [];
var bOpen1st = [];
var Category = [];
var CategoryList = [];
var MoreTmplList = [];
var MoreTmplCategory = [];
var MoreEventCount = [];
var MoreTmpSpecialLeague = [];
var MoreTmpSpecialOdds = [];
var MoreTmpSpecialEvent = [];
var htSession = '';
var ftSession = '';
var SelIdx221 = -1;
var SelIdx222 = -1;
var SelIdx223 = -1;
var SelIdx224 = -1;
var PreSelIdx221 = -1;
var PreSelIdx222 = -1;
var PreSelIdx223 = -1;
var PreSelIdx224 = -1;
var Arr221 = new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
var Arr222 = new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
var Arr223 = new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
var Arr224 = new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
//var FullTimeAllArray152 = ["F1:0", "F0:1", "F2:0", "F1:1", "F0:2",
//    "F3:0", "F2:1", "F1:2", "F0:3", "F4+", "F1:0",
//    "F2:0", "F1:1", "F3:0", "F2:1", "F1:2"
//];
var FullTimeAllArray416 = ["F0:0", "F0:1", "F0:2", "F0:3", "F0:4",
                        "F1:0", "F1:1", "F1:2", "F1:3", "F1:4",
                        "F2:0", "F2:1", "F2:2", "F2:3", "F2:4",
                        "F3:0", "F3:1", "F3:2", "F3:3", "F3:4",
                        "F4:0", "F4:1", "F4:2", "F4:3", "F4:4"
                        //"FAOS"
                       ];


//var HTArray152_00 = ["F1:0", "F0:1", "F2:0", "F1:1", "F0:2", "F3:0", "F2:1", "F1:2", "F0:3", "F4+"];
//var HTArray152_10 = ["F1:0", "F2:0", "F1:1", "F3:0", "F2:1", "F1:2", "F4+"];
//var HTArray152_01 = ["F0:1", "F1:1", "F0:2", "F2:1", "F1:2", "F0:3", "F4+"];
//var HTArray152_11 = ["F1:1", "F2:1", "F1:2", "F4+"];
//var HTArray152_20 = ["F2:0", "F3:0", "F2:1", "F4+"];
//var HTArray152_02 = ["F0:2", "F1:2", "F0:3", "F4+"];
//var HTArray152_21 = ["F2:1", "F4+"];
//var HTArray152_12 = ["F1:2", "F4+"];
//var HTArray152_30 = ["F3:0", "F4+"];
//var HTArray152_03 = ["F0:3", "F4+"];
////var HTArray152_4UP = ["F4+"];

var HTArray416_00 = ["F0:0", "F0:1", "F0:2", "F0:3", "F0:4", "F1:0", "F1:1", "F1:2", "F1:3", "F1:4", "F2:0", "F2:1", "F2:2", "F2:3", "F2:4", "F3:0", "F3:1", "F3:2", "F3:3", "F3:4", "F4:0", "F4:1", "F4:2", "F4:3", "F4:4", "FAOS"];
var HTArray416_01 = ["F0:1", "F0:2", "F0:3", "F0:4", "F1:1", "F1:2", "F1:3", "F1:4", "F2:1", "F2:2", "F2:3", "F2:4", "F3:1", "F3:2", "F3:3", "F3:4", "F4:1", "F4:2", "F4:3", "F4:4", "FAOS"];
var HTArray416_02 = ["F0:2", "F0:3", "F0:4", "F1:2", "F1:3", "F1:4", "F2:2", "F2:3", "F2:4", "F3:2", "F3:3", "F3:4", "F4:2", "F4:3", "F4:4", "FAOS"];
var HTArray416_03 = ["F0:3", "F0:4", "F1:3", "F1:4", "F2:3", "F2:4", "F3:3", "F3:4", "F4:3", "F4:4", "FAOS"];
var HTArray416_10 = ["F1:0", "F1:1", "F1:2", "F1:3", "F1:4", "F2:0", "F2:1", "F2:2", "F2:3", "F2:4", "F3:0", "F3:1", "F3:2", "F3:3", "F3:4", "F4:0", "F4:1", "F4:2", "F4:3", "F4:4", "FAOS"];
var HTArray416_11 = ["F1:1", "F1:2", "F1:3", "F1:4", "F2:1", "F2:2", "F2:3", "F2:4", "F3:1", "F3:2", "F3:3", "F3:4", "F4:1", "F4:2", "F4:3", "F4:4", "FAOS"];
var HTArray416_12 = ["F1:2", "F1:3", "F1:4", "F2:2", "F2:3", "F2:4", "F3:2", "F3:3", "F3:4", "F4:2", "F4:3", "F4:4", "FAOS"];
var HTArray416_13 = ["F1:3", "F1:4", "F2:3", "F2:4", "F3:3", "F3:4", "F4:3", "F4:4", "FAOS"];
var HTArray416_20 = ["F2:0", "F2:1", "F2:2", "F2:3", "F2:4", "F3:0", "F3:1", "F3:2", "F3:3", "F3:4", "F4:0", "F4:1", "F4:2", "F4:3", "F4:4", "FAOS"];
var HTArray416_21 = ["F2:1", "F2:2", "F2:3", "F2:4", "F3:1", "F3:2", "F3:3", "F3:4", "F4:1", "F4:2", "F4:3", "F4:4", "FAOS"];
var HTArray416_22 = ["F2:2", "F2:3", "F2:4", "F3:2", "F3:3", "F3:4", "F4:2", "F4:3", "F4:4", "FAOS"];
var HTArray416_23 = ["F2:3", "F2:4", "F3:3", "F3:4", "F4:3", "F4:4", "FAOS"];
var HTArray416_30 = ["F3:0", "F3:1", "F3:2", "F3:3", "F3:4", "F4:0", "F4:1", "F4:2", "F4:3", "F4:4", "FAOS"];
var HTArray416_31 = ["F3:1", "F3:2", "F3:3", "F3:4", "F4:1", "F4:2", "F4:3", "F4:4", "FAOS"];
var HTArray416_32 = ["F3:2", "F3:3", "F3:4", "F4:2", "F4:3", "F4:4", "FAOS"];
var HTArray416_33 = ["F3:3", "F3:4", "F4:3", "F4:4", "FAOS"];
//var HTArray416_AOS = ["F3:4", "F4:3", "F4:4", "FAOS"];

//var BetType152OddArray = ["0010", "0001", "0020", "0011", "0002",
//    "0030", "0021", "0012", "0003", "004UP", "1010",
//    "1020", "1011", "1030", "1021", "1012", "104UP",
//    "0101", "0111", "0102", "0121", "0112", "0103",
//    "014UP", "1111", "1121", "1112", "114UP", "2020",
//    "2030", "2021", "204UP", "0202", "0212", "0203",
//    "024UP", "2121", "214UP", "1212", "124UP", "3030",
//    "304UP", "0303", "034UP"
//];

var BetType416OddArray = ["0000", "0001", "0002", "0003", "0004",
    "0010", "0011", "0012", "0013", "0014",
    "0020", "0021", "0022", "0023", "0024",
    "0030", "0031", "0032", "0033", "0034",
    "0040", "0041", "0042", "0043", "0044", "00AOS",
    "0101", "0102", "0103", "0104",
    "0111", "0112", "0113", "0114",
    "0121", "0122", "0123", "0124",
    "0131", "0132", "0133", "0134",
    "0141", "0142", "0143", "0144", "01AOS",
    "0202", "0203", "0204",
    "0212", "0213", "0214",
    "0222", "0223", "0224",
    "0232", "0233", "0234",
    "0242", "0243", "0244", "02AOS",
    "0303", "0304",
    "0313", "0314",
    "0323", "0324",
    "0333", "0334",
    "0343", "0344", "03AOS",
    "1010", "1011", "1012", "1013", "1014",
    "1020", "1021", "1022", "1023", "1024",
    "1030", "1031", "1032", "1033", "1034",
    "1040", "1041", "1042", "1043", "1044", "10AOS",
    "1111", "1112", "1113", "1114",
    "1121", "1122", "1123", "1124",
    "1131", "1132", "1133", "1134",
    "1141", "1142", "1143", "1144", "11AOS",
    "1212", "1213", "1214",
    "1222", "1223", "1224",
    "1232", "1233", "1234",
    "1242", "1243", "1244", "12AOS",
    "1313", "1314",
    "1323", "1324",
    "1333", "1334",
    "1343", "1344", "13AOS",
    "2020", "2021", "2022", "2023", "2024",
    "2030", "2031", "2032", "2033", "2034",
    "2040", "2041", "2042", "2043", "2044", "20AOS",
    "2121", "2122", "2123", "2124",
    "2131", "2132", "2133", "2134",
    "2141", "2142", "2143", "2144", "21AOS",
    "2222", "2223", "2224",
    "2232", "2233", "2234",
    "2242", "2243", "2244", "22AOS",
    "2323", "2324",
    "2333", "2334",
    "2343", "2344", "23AOS",
    "3030", "3031", "3032", "3033", "3034",
    "3040", "3041", "3042", "3043", "3044", "30AOS",
    "3131", "3132", "3133", "3134",
    "3141", "3142", "3143", "3144", "31AOS",
    "3232", "3233", "3234",
    "3242", "3243", "3244", "32AOS",
    "3333", "3334",
    "3343", "3344", "33AOS"
    //"AOS34", "AOS43", "AOS44", "AOSAOS"

];
var haveHotEvent = false;

Init_MoreParams(1);
//Init_MoreParams(5);

function Init_MoreParams(SportType) {
    Sport_More[SportType] = false;
    sKeeper_Sport[SportType] = null;
    SportMore_ThreadId[SportType] = null;
    Sport_More_End[SportType] = false;
    retryCnt[SportType] = 0;
    TeamH[SportType] = "";
    TeamA[SportType] = "";
    bFromBtnClick[SportType] = false;
    bOpenMore[SportType] = false;
    bOpen1st[SportType] = false;
    oajaxData[SportType] = new Object();
    Category[SportType] = -1;
    CategoryList[SportType] = new Array(false, false, false, false, false, false, false, false);
    MoreTmplList[SportType] = new Array();
    MoreEventCount[SportType] = new Array("", "", "");
    MoreTmplCategory[SportType] = "";
    MoreTmpSpecialLeague[SportType] = new Array("", "");
    MoreTmpSpecialOdds[SportType] = new Array("", "", "", "");
    MoreTmpSpecialEvent[SportType] = new Array("", "", "", "");
}

function CheckMoreObj(SportType) {
    return typeof (sKeeper_Sport[SportType]) != "undefined" && sKeeper_Sport[SportType] != null && !Sport_More_End[SportType]
}

function OpenMoreDiv(SportType) {
    if (typeof (sKeeper_Sport[SportType]) != "undefined" && sKeeper_Sport[SportType] != null) {
        if (document.getElementById(document.getElementById("more_" + sKeeper_Sport[SportType].MatchId)) != null) {
            document.getElementById("more_" + sKeeper_Sport[SportType].MatchId).style.display = "";
        }
    }
    if (SportType == 1) {
        SetHTFTCSSelOdds();
    }
}

function gScrollTop() {
    var bodyTop = 0;
    if (typeof window.pageYOffset != "undefined") {
        bodyTop = window.pageYOffset;

    } else if (typeof document.compatMode != "undefined" &&
        document.compatMode != "BackCompat") {
        bodyTop = document.documentElement.scrollTop;

    } else if (typeof document.body != "undefined") {
        bodyTop = document.body.scrollTop;
    }

    return bodyTop;
}

function FocusMoreTd() {

    if ($('#btnSwitchBack').css('display') != "none") {
        return;
    }

    var itd = $('td.moreBetType.tag.displayOn');
    var mainFrameHeight = $(window).innerHeight(); //parent.mainFrame.innerHeight;
    //var moreDataHeight = itd[0].parentNode.clientHeight;
    var moreDataHeight = $(itd[0].parentNode).height();
    var scrolly = gScrollTop();

    if (itd.length > 0) {
        var y = itd.parent("tr").prev("tr").prev("tr").offset().top;
        /*if (navigator.userAgent.search("MSIE 8") > -1) {
        y=$(itd[0].parentNode.previousSibling.previousSibling).offset().top;
        }
        else {
        y=$(itd[0].parentNode.previousElementSibling.previousElementSibling).offset().top;
        }*/

        if (y + moreDataHeight >= scrolly + mainFrameHeight || scrolly > y) {

            $('html, body').animate({
                scrollTop: y
            }, 500);

        }
    }

}

function DisplayMoreHtml(SportType, MUID, newHash, MoreDivId) {
    // MoreDivId = "Soccer_More";
    if (typeof (sKeeper_Sport[SportType]) != "undefined" && sKeeper_Sport[SportType] != null) {
        if (sKeeper_Sport[SportType].MUID != MUID) {
            newHash["Display_More"] = CLS_LS_OFF;
            newHash["MoreData"] = "";
        } else {
            if (typeof (Sport_More[SportType]) != "undefined" && Sport_More[SportType]) {
                if (document.getElementById(MoreDivId).innerHTML == "") {
                    newHash["Display_More"] = CLS_LS_OFF;
                    newHash["MoreData"] = "";
                } else {
                    if (fFrame.DisplayMode == "3" || sKeeper_Sport[SportType].isParlay == 1) {
                        //var obj1 = document.getElementById(MoreDivId).getElementsByClassName("mover5");
                        var obj1 = $("#" + MoreDivId + " .mover5");
                        if (obj1.length > 0) {
                            obj1.parent().parent().parent().parent().parent().parent()[0].className = obj1.parent().parent().parent().parent().parent().parent()[0].className + " " + CLS_LS_OFF;
                        }
                        obj1 = $("#" + MoreDivId + " .mover15");
                        if (obj1.length > 0) {
                            obj1.parent().parent().parent().parent().parent().parent()[0].className = obj1.parent().parent().parent().parent().parent().parent()[0].className + " " + CLS_LS_OFF;
                        }
                        newHash["MoreData"] = document.getElementById(MoreDivId).innerHTML;
                    } else {
                        var obj1 = $("#" + MoreDivId + " .mover5");
                        if (obj1.length > 0) {
                            obj1.parent().parent().parent().parent().parent().parent()[0].className = obj1.parent().parent().parent().parent().parent().parent()[0].className.replace(CLS_LS_OFF, "");
                        }
                        obj1 = $("#" + MoreDivId + " .mover15");
                        if (obj1.length > 0) {
                            obj1.parent().parent().parent().parent().parent().parent()[0].className = obj1.parent().parent().parent().parent().parent().parent()[0].className.replace(CLS_LS_OFF, "");
                        }
                        newHash["MoreData"] = document.getElementById(MoreDivId).innerHTML;
                    }
                    newHash["Display_More"] = CLS_LS_ON;
                }
            } else {
                newHash["Display_More"] = CLS_LS_OFF;
                newHash["MoreData"] = "";
            }
        }
    } else {
        newHash["Display_More"] = CLS_LS_OFF;
        newHash["MoreData"] = "";
    }
}

function GetMore(SportType, MatchId, HomeName, AwayName, isParlay, isLive, MUID, tag, sender) {
    if (!initialTmpl("MorePop_tmpl", "MorePop_tmpl.aspx", function () {
        GetMore(SportType, MatchId, HomeName, AwayName, isParlay, isLive, MUID, tag, sender);
    })) {
        return;
    }
    Category[SportType] = -1;
    //close More
    var moreTD = $("td.moreBetType.tag.displayOn");
    if (moreTD.length > 0) {
        if (moreTD.find("#moreAddDiv").length == 0) {
            moreTD.html("<div id='moreAddDiv'>" + moreTD.html() + "</div>");
        }
        //$("#moreAddDiv").slideUp("normal", function () {

        //double line
        moreTD.parent().prev("tr").find("a").toggleClass("off");
        //single line
        $(".more.off").attr('class', 'more');
        moreTD.parent().toggleClass("tabtitle Alpha displayOff");
        moreTD.attr('class', 'moreBetType tag displayOff');

        //if ($(sender).parent().parent().prev("tr").offset() != null)
        //{
        //    if (gScrollTop() > $(sender).offset().top)
        //    {
        //        $('html, body').animate({
        //            scrollTop: $(sender).parent().parent().prev("tr").offset().top
        //        }, 500);
        //    }
        //}

        GetMore(SportType, MatchId, HomeName, AwayName, isParlay, isLive, MUID, tag, sender);
        //});

        return;
    }



    htSession = '';
    ftSession = '';
    SelIdx221 = -1;
    SelIdx222 = -1;
    SelIdx223 = -1;
    SelIdx224 = -1;
    PreSelIdx221 = -1;
    PreSelIdx222 = -1;
    PreSelIdx223 = -1;
    PreSelIdx224 = -1;
    Arr221 = new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
    Arr222 = new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
    Arr223 = new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
    Arr224 = new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");

    if (SportType == 1) {
        MoreId = "Soccer";
    }
    //    else if (SportType == 5)
    //    {
    //        MoreId = "Tennis";
    //        Init_MoreParams(1);
    //    }
    if (typeof (sKeeper_Sport[SportType]) != "undefined" && sKeeper_Sport[SportType] != null) {
        if (sKeeper_Sport[SportType].MUID == MUID) {
            bOpenMore[SportType] = !bOpenMore[SportType];
        }
    } else {
        bOpenMore[SportType] = !bOpenMore[SportType];
    }
    if (typeof (Sport_More[SportType]) != "undefined" && bOpenMore[SportType]) {
        bFromBtnClick[SportType] = true;
        Sport_More_End[SportType] = false;
        //document.getElementById(MoreId + "_More").innerHTML = fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("Loading").innerHTML;

        //single line
        $(sender).find("span").toggleClass("off");
        //double line
        $(sender).filter("a").toggleClass("off");
        var MoreTDObj = $(sender).parent("td").parent("tr").next("tr").find("td.moreBetType.tag.displayOff");
        MoreTDObj.html(fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("Loading").innerHTML);
        MoreTDObj.parent().attr('class', 'tabtitle Alpha displayOn');
        MoreTDObj.attr('class', 'moreBetType tag displayOn');

        //parse load odds data watting gif
        oajaxData[SportType] = new Object();
        var market = isLive
        sKeeper_Sport[SportType] = new SimpleOddsKeeper();
        TeamH[SportType] = HomeName;
        TeamA[SportType] = AwayName;
        sKeeper_Sport[SportType].MUID = MUID;
        sKeeper_Sport[SportType].MatchId = MatchId;
        sKeeper_Sport[SportType].isParlay = isParlay;
        sKeeper_Sport[SportType].Market = market;

        var param = new Object();
        param["matchid"] = MatchId;
        param["Market"] = market;
        param["tag"] = tag;
        param["isparlay"] = isParlay;
        SportMore_ThreadId[SportType] = tag; //GetTennisMore
        ExecAjax("MorePop_data.aspx", param, "GET", tag, tag);
        bOpen1st[SportType] = true;
        Sport_More[SportType] = true;
    } else {
        if (typeof (sKeeper_Sport[SportType]) != "undefined" && sKeeper_Sport[SportType] != null) {
            sKeeper_Sport[SportType] = null;
            Sport_More[SportType] = false;
            bOpen1st[SportType] = false;
            document.getElementById(MoreId + "_More").innerHTML = "";
        }
        if (SportType == 5) {
            ShowMore(SportType);
        }
    }
}

function ShowMore(SportType) {
    if (typeof (arr_ShowMixParlay) == "object") {
        if (arr_ShowMixParlay[SportType.toString()] != null) {
            var arr_OddsKeeper_L = new Array();
            var arr_OddsKeeper_D = new Array();
            if (g_OddsKeeper_L != null) {
                arr_OddsKeeper_L = g_OddsKeeper_L.getOddsKeeperArray();
            }
            if (g_OddsKeeper_D != null) {
                arr_OddsKeeper_D = g_OddsKeeper_D.getOddsKeeperArray();
            }
            if (arr_ShowMixParlay[SportType.toString()] && arr_OddsKeeper_L[SportType.toString()] != null) {
                var oddsKeeper = arr_OddsKeeper_L[SportType.toString()];
                oddsKeeper.paintOddsTable();
                paintRefreshBtn("l");
            }

            if (arr_ShowMixParlay[SportType.toString()] && arr_OddsKeeper_D[SportType.toString()] != null) {
                var oddsKeeper = arr_OddsKeeper_D[SportType.toString()];
                oddsKeeper.paintOddsTable();
                paintRefreshBtn("d");
            }
        }
    } else if (typeof (arr_OddsKeeper) == "object") {
        if (arr_OddsKeeper[SportType.toString()] != null) {
            arr_OddsKeeper[SportType.toString()].paintOddsTable();
            paintRefreshBtn("l");
        }
    } else {
        if (g_OddsKeeper_L != null) {
            g_OddsKeeper_L.paintOddsTable();
            paintRefreshBtn("L");
        }
        if (g_OddsKeeper_D != null) {
            g_OddsKeeper_D.paintOddsTable();
            paintRefreshBtn("D");
        }
    }
}
function GetTennisMore(Response) {
    eval(Response);
    if (Object.keys(ajaxData).length == 0) {
        document.getElementById("Tennis_More").innerHTML = fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("NoInfo").innerHTML;
        SportMore_ThreadId[5] = null;
        sKeeper_Sport[5] = null;
        Sport_More[5] = false;
        return;
    }
    if (sKeeper_Sport[5] == null) {
        return;
    }
    sKeeper_Sport[5].TableContainer = document.getElementById("Tennis_More");
    document.getElementById("Tennis_More").innerHTML = "";

    var betType = new Array("1302", "1324", "154", "155", "156", "1318", "1317");
    for (var i = 0; i < betType.length; i++) {
        if (typeof (ajaxData[betType[i]]) != "undefined" && ajaxData[betType[i]] != null) {
            var tmplid = "";
            switch (betType[i]) {
                case "1317":
                case "1321":
                case "1322":
                case "1325":
                case "1328":
                    tmplid = betType[i];
                    break;
                case "1302":
                    tmplid = betType[i] + "_" + GS;
                    break;
                case "1307":
                case "1309":
                case "1313":
                case "1330":
                    tmplid = "1307";
                    break;
                case "1320":
                    tmplid = "1320";
                    break;
                case "1315":
                case "1333":
                case "1334":
                    tmplid = "1315";
                    break;
                default:
                    tmplid = "1304";
                    break;
            }
            sKeeper_Sport[5].DivTmpl = fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreEvent_" + tmplid).innerHTML;
            ajaxData[betType[i]] = sortObject(ajaxData[betType[i]]);

            var objCnt = Object.keys(ajaxData[betType[i]]).length;
            for (var iCnt = 0; iCnt < objCnt; iCnt++) {
                var skey = Object.keys(ajaxData[betType[i]])[iCnt];
                sKeeper_Sport[5].setDatas(ajaxData[betType[i]][skey], MultiSportODDS_DEF[parseInt(betType[i], 10)]);
                //var oddsupd = false;
                if (oajaxData[5][betType[i]] != undefined && oajaxData[5][betType[i]][skey] != undefined) {
                    if (oajaxData[5][betType[i]][skey].toString() != ajaxData[betType[i]][skey].toString()) {
                        sKeeper_Sport[5].newHash["Changed"] = CLS_UPD;
                        //oddsupd = true;
                    } else {
                        sKeeper_Sport[5].newHash["Changed"] = "";
                    }
                }

                var sBtn = "";
                var sOddsUpd = "";
                if (fFrame.EnableArrowOddsChange) {
                    sBtn = " OddsBtn";
                }
                for (var k = 1; k < MultiSportODDS_DEF[betType[i]].length; k++) {
                    if (fFrame.EnableArrowOddsChange) {
                        if (oajaxData[5][betType[i]] != undefined) {

                            var newodds = ajaxData[betType[i]][skey][k];
                            var oldodds = oajaxData[5][betType[i]][skey][k];

                            if (newodds == oldodds) {
                                sOddsUpd = "";
                            } else if (newodds > oldodds) {
                                sOddsUpd = newodds < 0 ? " BadOdds" : " BestOdds";
                            } else {
                                sOddsUpd = oldodds < 0 ? " BestOdds" : " BadOdds";
                            }
                        }
                    }
                    if (sKeeper_Sport[5].oHash[MultiSportODDS_DEF[betType[i]][k]] != "") {
                        sKeeper_Sport[5].newHash[MultiSportODDS_DEF[betType[i]][k] + "_Cls"] = getOddsClass(sKeeper_Sport[5].oHash[MultiSportODDS_DEF[betType[i]][k]]) + sBtn + sOddsUpd;
                    } else {
                        sKeeper_Sport[5].newHash[MultiSportODDS_DEF[betType[i]][k] + "_Cls"] = "";
                    }
                }

                sKeeper_Sport[5].oHash["MatchId"] = sKeeper_Sport[5].MatchId;
                sKeeper_Sport[5].newHash["isParlay"] = sKeeper_Sport[5].isParlay;
                if (sKeeper_Sport[5].Market == "L") {
                    sKeeper_Sport[5].newHash["LorD"] = "liveligh";
                } else {
                    sKeeper_Sport[5].newHash["LorD"] = "bgcpe";
                }
                sKeeper_Sport[5].newHash["bettype"] = betType[i];
                if (tmplid == "1304") {
                    if (betType[i] == "156") {
                        sKeeper_Sport[5].newHash["betteamh"] = "o";
                        sKeeper_Sport[5].newHash["betteama"] = "u";
                    } else
                        if (betType[i] == "1318") {
                            sKeeper_Sport[5].newHash["betteamh"] = "o";
                            sKeeper_Sport[5].newHash["betteama"] = "e";
                        } else {
                            sKeeper_Sport[5].newHash["betteamh"] = "h";
                            sKeeper_Sport[5].newHash["betteama"] = "a";
                        }
                }

                switch (betType[i]) {
                    case "1304":
                    case "1310":
                    case "156":
                    case "1323":
                    case "1329":
                        sKeeper_Sport[5].newHash["TeamH"] = RES_MORE_OVER + " " + ajaxData[betType[i]][skey][ConvertArrayIndex(MultiSportODDS_DEF[parseInt(betType[i], 10)], "Goal")];
                        sKeeper_Sport[5].newHash["TeamA"] = RES_MORE_UNDER + " " + ajaxData[betType[i]][skey][ConvertArrayIndex(MultiSportODDS_DEF[parseInt(betType[i], 10)], "Goal")];
                        sKeeper_Sport[5].newHash["Home_Cls"] = CLS_HDP_N;
                        sKeeper_Sport[5].newHash["Away_Cls"] = CLS_HDP_N;
                        break;
                    case "1309":
                    case "1313":
                    case "1307":
                    case "1330":
                        sKeeper_Sport[5].newHash["TeamH"] = ajaxData[betType[i]][skey][ConvertArrayIndex(MultiSportODDS_DEF[parseInt(betType[i], 10)], "hdp1")];
                        sKeeper_Sport[5].newHash["TeamA"] = ajaxData[betType[i]][skey][ConvertArrayIndex(MultiSportODDS_DEF[parseInt(betType[i], 10)], "hdp2")];
                        sKeeper_Sport[5].newHash["TeamX"] = ajaxData[betType[i]][skey][ConvertArrayIndex(MultiSportODDS_DEF[parseInt(betType[i], 10)], "hdpx")];
                        break;
                    case "1320":
                        sKeeper_Sport[5].newHash["TeamH"] = TeamH[5];
                        sKeeper_Sport[5].newHash["TeamA"] = TeamA[5];
                        sKeeper_Sport[5].newHash["TeamX"] = RES_MORE_TIE;
                        break;
                    case "1315":
                        sKeeper_Sport[5].newHash["TeamH"] = TeamH[5];
                        sKeeper_Sport[5].newHash["TeamA"] = TeamA[5];
                        sKeeper_Sport[5].newHash["TeamX"] = RES_MORE_NOTIEBREAK;
                        break;
                    case "1333":
                        sKeeper_Sport[5].newHash["TeamH"] = TeamH[5];
                        sKeeper_Sport[5].newHash["TeamA"] = TeamA[5];
                        sKeeper_Sport[5].newHash["TeamX"] = RES_MORE_NEITHER;
                        break;
                    case "1334":
                        sKeeper_Sport[5].newHash["TeamH"] = RES_MORE_UNDER + " " + ajaxData[betType[i]][skey][ConvertArrayIndex(MultiSportODDS_DEF[parseInt(betType[i], 10)], "Goal")];
                        sKeeper_Sport[5].newHash["TeamA"] = RES_MORE_OVER + " " + ajaxData[betType[i]][skey][ConvertArrayIndex(MultiSportODDS_DEF[parseInt(betType[i], 10)], "Goal")];
                        sKeeper_Sport[5].newHash["TeamX"] = RES_MORE_EXACTLY + " " + ajaxData[betType[i]][skey][ConvertArrayIndex(MultiSportODDS_DEF[parseInt(betType[i], 10)], "Goal")];
                        break;
                    case "155":
                    case "1316":
                    case "1326":
                        var sFlag = ajaxData[betType[i]][skey][ConvertArrayIndex(MultiSportODDS_DEF[parseInt(betType[i], 10)], "FavorF")];
                        switch (sFlag) {
                            case "h":
                                sKeeper_Sport[5].newHash["Home_Cls"] = CLS_HDP_F;
                                sKeeper_Sport[5].newHash["Away_Cls"] = CLS_HDP_N;
                                sKeeper_Sport[5].newHash["TeamH"] = TeamH[5] + " (-" + ajaxData[betType[i]][skey][ConvertArrayIndex(MultiSportODDS_DEF[parseInt(betType[i], 10)], "Value")] + ")";
                                sKeeper_Sport[5].newHash["TeamA"] = TeamA[5] + " (+" + ajaxData[betType[i]][skey][ConvertArrayIndex(MultiSportODDS_DEF[parseInt(betType[i], 10)], "Value")] + ")";
                                break;
                            case "a":
                                sKeeper_Sport[5].newHash["Home_Cls"] = CLS_HDP_N;
                                sKeeper_Sport[5].newHash["Away_Cls"] = CLS_HDP_F;
                                sKeeper_Sport[5].newHash["TeamH"] = TeamH[5] + " (+" + ajaxData[betType[i]][skey][ConvertArrayIndex(MultiSportODDS_DEF[parseInt(betType[i], 10)], "Value")] + ")";
                                sKeeper_Sport[5].newHash["TeamA"] = TeamA[5] + " (-" + ajaxData[betType[i]][skey][ConvertArrayIndex(MultiSportODDS_DEF[parseInt(betType[i], 10)], "Value")] + ")";
                                break;
                            default:
                                sKeeper_Sport[5].newHash["Home_Cls"] = CLS_HDP_N;
                                sKeeper_Sport[5].newHash["Away_Cls"] = CLS_HDP_N;
                                sKeeper_Sport[5].newHash["TeamH"] = TeamH[5] + " (0)";
                                sKeeper_Sport[5].newHash["TeamA"] = TeamA[5] + " (0)";
                        }
                        break;
                    case "154":
                    case "1319":
                    case "1324":
                    case "1332":
                        sKeeper_Sport[5].newHash["Home_Cls"] = CLS_HDP_N;
                        sKeeper_Sport[5].newHash["Away_Cls"] = CLS_HDP_N;
                        sKeeper_Sport[5].newHash["TeamH"] = TeamH[5];
                        sKeeper_Sport[5].newHash["TeamA"] = TeamA[5];
                        break;
                    case "1314":
                    case "1327":
                        sKeeper_Sport[5].newHash["TeamH"] = RES_MORE_YES;
                        sKeeper_Sport[5].newHash["TeamA"] = RES_MORE_NO;
                        sKeeper_Sport[5].newHash["Home_Cls"] = CLS_HDP_N;
                        sKeeper_Sport[5].newHash["Away_Cls"] = CLS_HDP_N;
                        break;
                    case "1318":
                    case "1331":
                        sKeeper_Sport[5].newHash["TeamH"] = RES_MORE_ODD;
                        sKeeper_Sport[5].newHash["TeamA"] = RES_MORE_EVEN;
                        sKeeper_Sport[5].newHash["Home_Cls"] = CLS_HDP_N;
                        sKeeper_Sport[5].newHash["Away_Cls"] = CLS_HDP_N;
                        break;
                    case "1317":
                        sKeeper_Sport[5].newHash["HAOS"] = AOS[sKeeper_Sport[5].oHash["OddsId"]][0];
                        sKeeper_Sport[5].newHash["AAOS"] = AOS[sKeeper_Sport[5].oHash["OddsId"]][1];
                        sKeeper_Sport[5].newHash["BetTeamH"] = AOS[sKeeper_Sport[5].oHash["OddsId"]][2];
                        sKeeper_Sport[5].newHash["BetTeamA"] = AOS[sKeeper_Sport[5].oHash["OddsId"]][3];
                        sKeeper_Sport[5].newHash["HAOSALL"] = AOS[sKeeper_Sport[5].oHash["OddsId"]][4];
                        sKeeper_Sport[5].newHash["AAOSALL"] = AOS[sKeeper_Sport[5].oHash["OddsId"]][5];
                        break;
                    default:
                        break;
                }
                sKeeper_Sport[5].newHash["ResourceName"] = ResData[ajaxData[betType[i]][skey][ajaxData[betType[i]][skey].length - 1]];
                sKeeper_Sport[5].AppendOddsTable();
            }
        }
    }
    for (var o in ajaxData) { oajaxData[5][o] = ajaxData[o]; }

    Sport_More_End[5] = true;
    if (bFromBtnClick[5]) {
        if (typeof (arr_ShowMixParlay) == "object") {
            //parlay refresh
        } else if (typeof (arr_OddsKeeper) == "object") {
            if (arr_OddsKeeper["5"] != null) {
                arr_OddsKeeper["5"].paintOddsTable();
                paintRefreshBtn("l");
            }
        } else {
            if (g_OddsKeeper_L != null) {
                g_OddsKeeper_L.paintOddsTable();
                paintRefreshBtn("L");
            }
            if (g_OddsKeeper_D != null) {
                g_OddsKeeper_D.paintOddsTable();
                paintRefreshBtn("D");
            }
        }
        bFromBtnClick[5] = false;
    }

    if (bOpen1st[5]) {
        bOpen1st[5] = false;
        ShowMore(5);
        FocusMoreTd();
    }
}
function refreshMoreData(SportType) {
    if (typeof (Sport_More[SportType]) != "undefined" && Sport_More[SportType]) {
        if (sKeeper_Sport[SportType] != null) {
            if (sKeeper_Sport[SportType].Market == "L") {
                if (SportMore_ThreadId[SportType] != null && SportMore_ThreadId[SportType] != "") {
                    Sport_More_End[SportType] = false;
                    if (ThreadList[SportMore_ThreadId[SportType]].data.OddsType != DataForm.OddsType.value) {
                        oajaxData[SportType] = new Object();
                    }
                    ThreadList[SportMore_ThreadId[SportType]].data.OddsType = DataForm.OddsType.value;
                    recallAjax(SportMore_ThreadId[SportType]);
                }
            }
        } else {
            SportMore_ThreadId[SportType] = null;
        }
    } else {
        SportMore_ThreadId[SportType] = null;
    }
}

function refreshMoreData_L(SportType) {
    if (typeof (Sport_More[SportType]) != "undefined" && Sport_More[SportType]) {
        if (typeof (sKeeper_Sport[SportType]) != "undefined" && sKeeper_Sport[SportType] != null) {
            if (sKeeper_Sport[SportType].Market == "L") {
                if (typeof (SportMore_ThreadId[SportType]) != "undefined" && SportMore_ThreadId[SportType] != null && SportMore_ThreadId[SportType] != "") {
                    Sport_More_End[SportType] = false;
                    if (ThreadList[SportMore_ThreadId[SportType]].data.OddsType != DataForm_L.OddsType.value) {
                        oajaxData[SportType] = new Object();
                    }
                    ThreadList[SportMore_ThreadId[SportType]].data.OddsType = DataForm_L.OddsType.value;
                    recallAjax(SportMore_ThreadId[SportType]);
                }
            }
        } else {
            SportMore_ThreadId[SportType] = null;
        }
    } else {
        SportMore_ThreadId[SportType] = null;
    }
}

function refreshMoreData_D(SportType) {
    if (typeof (Sport_More[SportType]) != "undefined" && Sport_More[SportType]) {
        if (typeof (sKeeper_Sport[SportType]) != "undefined" && sKeeper_Sport[SportType] != null) {
            if (sKeeper_Sport[SportType].Market == "D") {
                if (typeof (SportMore_ThreadId[SportType]) != "undefined" && SportMore_ThreadId[SportType] != null && SportMore_ThreadId[SportType] != "") {
                    Sport_More_End[SportType] = false;
                    if (ThreadList[SportMore_ThreadId[SportType]].data.OddsType != DataForm_D.OddsType.value) {
                        oajaxData[SportType] = new Object();
                    }
                    ThreadList[SportMore_ThreadId[SportType]].data.OddsType = DataForm_D.OddsType.value;
                    recallAjax(SportMore_ThreadId[SportType]);
                }
            }
        } else {
            SportMore_ThreadId[SportType] = null;
        }
    } else {
        SportMore_ThreadId[SportType] = null;
    }
}

function GetSoccerMore(Response) {
    var ajaxData = new Array();
    var dataNull = false;
    if (Response == null) {
        for (var o in oajaxData[1]) ajaxData[o] = oajaxData[1][o];
        dataNull = true;
    } else {
        eval(Response);
    }
    if (Object.keys(ajaxData).length == 0) {
        document.getElementById("Soccer_More").innerHTML = fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("NoInfo").innerHTML;
        SportMore_ThreadId[1] = null;
        sKeeper_Sport[1] = null;
        Sport_More[1] = false;
        return;
    }
    if (sKeeper_Sport[1] == null) {
        return;
    }
    var CategoryList1X2 = new Array(0, 0, 0, 0, 0, 0, 0, 0);
    if (fFrame.DisplayMode == "3" || sKeeper_Sport[1].isParlay == 1) {
        if (typeof (ajaxData['B5']) != "undefined") {
            var iCat = ajaxData['B5'][0];
            CategoryList1X2[iCat] = CategoryList1X2[iCat] + 1;
        }
        if (typeof (ajaxData['B15']) != "undefined") {
            var iCat = ajaxData['B15'][0];
            CategoryList1X2[iCat] = CategoryList1X2[iCat] + 1;
        }

    }
    if (Category[1] == -1 || ((CategoryList[1][Category[1]] - CategoryList1X2[Category[1]]) == 0)) {
        //        if (sKeeper_Sport[1].Market == "L") {
        //            Category[1] = 1;
        //        } else
        if (haveHotEvent == false) {

            for (var i = 1; i < CategoryList[1].length; i++) //CategoryList[1][0] check have special league
            {
                if (CategoryList[1][i] - CategoryList1X2[i] > 0) {
                    Category[1] = i;
                    break;
                }
            }
        } else {
            Category[1] = 0;
        }
    }
    sKeeper_Sport[1].TableContainer = document.getElementById("Soccer_More");
    sKeeper_Sport[1].OddsHTML = "";
    //document.getElementById("Soccer_More").innerHTML = "";
    var specialCount = CategoryList[1][0];
    var sLeagueList = new Array();
    var sFOddsList = new Array();
    var sHOddsList = new Array();

    var sBtn = "";
    var sOddsUpd = "";
    if (fFrame.EnableArrowOddsChange) {
        sBtn = " OddsBtn";
    }
    for (var sCnt = 0; sCnt < specialCount; sCnt++) {
        var sLeaguename = ajaxData["B1_3_5_7_8_15"][sCnt.toString()][3];
        if (indexOf(sLeagueList, sLeaguename) == -1) {
            sLeagueList[sLeagueList.length] = sLeaguename;
            sFOddsList[sFOddsList.length] = "";
            sHOddsList[sHOddsList.length] = "";
        }
    }
    for (var SLidx = 0; SLidx < sLeagueList.length; SLidx++) {
        var OddsFrame = "";
        var Tr_Cls = "";
        if (sKeeper_Sport[1].Market == "L") {
            Tr_Cls = "liveligh";
        } else {
            Tr_Cls = "bgcpelight";
        }
        for (var sCnt = 0; sCnt < specialCount; sCnt++) {
            var havedata = false;
            var sMatchid = ajaxData["B1_3_5_7_8_15"][sCnt.toString()][2];
            if (ajaxData["B1_3_5_7_8_15"][sCnt.toString()][3] == sLeagueList[SLidx]) {
                if (Category[1].toString() == ajaxData["B1_3_5_7_8_15"][sCnt.toString()][0] || (Category[1] == 0 && ajaxData["B1_3_5_7_8_15"][sCnt.toString()][1] == "1")) {
                    havedata = true;
                }
            }
            if (havedata) {
                if (sKeeper_Sport[1].Market == "L") {
                    if (Tr_Cls == "liveligh") {
                        Tr_Cls = "live";
                    } else {
                        Tr_Cls = "liveligh";
                    }
                } else {
                    if (Tr_Cls == "bgcpelight") {
                        Tr_Cls = "bgcpe";
                    } else {
                        Tr_Cls = "bgcpelight";
                    }
                }
                if (sKeeper_Sport[1].Market == "L") {
                    if (MoreTmpSpecialLeague[1][0] == "") {
                        MoreTmpSpecialLeague[1][0] = fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreSpecialLeague_L").innerHTML;
                    }
                    OddsFrame = MoreTmpSpecialLeague[1][0];
                } else {
                    if (MoreTmpSpecialLeague[1][1] == "") {
                        MoreTmpSpecialLeague[1][1] = fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreSpecialLeague_D").innerHTML;
                    }
                    OddsFrame = MoreTmpSpecialLeague[1][1];
                }
                OddsFrame = OddsFrame.replace("LeagueName", ajaxData["B1_3_5_7_8_15"][sCnt.toString()][3]);
                //get max length
                var maxCntF = 0;
                if (typeof (ajaxData['B1_3_5_7_8_15'][sMatchid + "S1"]) != "undefined") {
                    maxCntF = ajaxData['B1_3_5_7_8_15'][sMatchid + "S1"].length;
                }
                if (typeof (ajaxData['B1_3_5_7_8_15'][sMatchid + "S2"]) != "undefined") {
                    if (ajaxData['B1_3_5_7_8_15'][sMatchid + "S2"].length > maxCntF) {
                        maxCntF = ajaxData['B1_3_5_7_8_15'][sMatchid + "S2"].length;
                    }
                }
                if (typeof (ajaxData['B1_3_5_7_8_15'][sMatchid + "S3"]) != "undefined") {
                    if (ajaxData['B1_3_5_7_8_15'][sMatchid + "S3"].length > maxCntF) {
                        maxCntF = ajaxData['B1_3_5_7_8_15'][sMatchid + "S3"].length;
                    }
                }
                if (typeof (ajaxData['B1_3_5_7_8_15'][sMatchid + "S5"]) != "undefined") {
                    if (ajaxData['B1_3_5_7_8_15'][sMatchid + "S5"].length > maxCntF) {
                        maxCntF = ajaxData['B1_3_5_7_8_15'][sMatchid + "S5"].length;
                    }
                }
                if (maxCntF == 0) { } else {
                    var oddstmpl = "";
                    var Eventtmpl = "";
                    for (var oCnt = 0; oCnt < maxCntF; oCnt++) {
                        if (sKeeper_Sport[1].Market == "L") {
                            //sKeeper_Sport[1].DivTmpl = fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("SpecialOdds_FL").innerHTML;
                            if (MoreTmpSpecialOdds[1][0] == "") {
                                MoreTmpSpecialOdds[1][0] = fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("SpecialOdds_FL").innerHTML;
                            }
                            //oddstmpl = fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("SpecialOdds_FL").innerHTML;
                            oddstmpl = MoreTmpSpecialOdds[1][0];
                        } else {
                            if (MoreTmpSpecialOdds[1][1] == "") {
                                MoreTmpSpecialOdds[1][1] = fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("SpecialOdds_FD").innerHTML;
                            }
                            //oddstmpl = fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("SpecialOdds_FD").innerHTML;
                            oddstmpl = MoreTmpSpecialOdds[1][1];
                        }

                        var s1 = new Array("", "", "", "", "");
                        var s2 = new Array("", "", "");
                        var s3 = new Array("", "", "", "");
                        var s5 = new Array("", "", "", "");
                        if (typeof (ajaxData['B1_3_5_7_8_15'][sMatchid + "S1"]) != "undefined") {
                            if (ajaxData['B1_3_5_7_8_15'][sMatchid + "S1"].length > oCnt) {
                                s1 = ajaxData['B1_3_5_7_8_15'][ajaxData['B1_3_5_7_8_15'][sMatchid + "S1"][oCnt]];
                            }
                        }
                        if (typeof (ajaxData['B1_3_5_7_8_15'][sMatchid + "S2"]) != "undefined") {
                            if (ajaxData['B1_3_5_7_8_15'][sMatchid + "S2"].length > oCnt) {
                                s2 = ajaxData['B1_3_5_7_8_15'][ajaxData['B1_3_5_7_8_15'][sMatchid + "S2"][oCnt]];
                            }
                        }
                        if (typeof (ajaxData['B1_3_5_7_8_15'][sMatchid + "S3"]) != "undefined") {
                            if (ajaxData['B1_3_5_7_8_15'][sMatchid + "S3"].length > oCnt) {
                                s3 = ajaxData['B1_3_5_7_8_15'][ajaxData['B1_3_5_7_8_15'][sMatchid + "S3"][oCnt]];
                            }
                        }
                        if (typeof (ajaxData['B1_3_5_7_8_15'][sMatchid + "S5"]) != "undefined") {
                            if (ajaxData['B1_3_5_7_8_15'][sMatchid + "S5"].length > oCnt) {
                                s5 = ajaxData['B1_3_5_7_8_15'][ajaxData['B1_3_5_7_8_15'][sMatchid + "S5"][oCnt]];
                            }
                        }
                        var tmpArr = ajaxData["B1_3_5_7_8_15"][sCnt.toString()].concat(s1).concat(s2).concat(s3).concat(s5);
                        sKeeper_Sport[1].newHash = new Array();
                        sKeeper_Sport[1].oHash = new Array();
                        sKeeper_Sport[1].setDatas(tmpArr, mMultiSportODDS_DEF["B1_2_3_5"]);
                        //sKeeper_Sport[1].oHash["MatchId"] = sMatchid;
                        sKeeper_Sport[1].newHash["Tr_Cls"] = Tr_Cls;
                        sKeeper_Sport[1].newHash["isParlay"] = sKeeper_Sport[1].isParlay;
                        if (sKeeper_Sport[1].Market == "L") {
                            sKeeper_Sport[1].newHash["Score"] = sKeeper_Sport[1].oHash["ScoreH"] + " - " + sKeeper_Sport[1].oHash["ScoreA"];
                        } else {
                            sKeeper_Sport[1].newHash["Score"] = "";
                        }
                        sKeeper_Sport[1].newHash["Odds_1_H_Cls"] = GetOddsChangeClass(sKeeper_Sport[1].oHash["Odds_1_H"]);
                        sKeeper_Sport[1].newHash["Odds_1_A_Cls"] = GetOddsChangeClass(sKeeper_Sport[1].oHash["Odds_1_A"]);
                        sKeeper_Sport[1].newHash["Odds_2_O_Cls"] = GetOddsChangeClass(sKeeper_Sport[1].oHash["Odds_2_O"]);
                        sKeeper_Sport[1].newHash["Odds_2_E_Cls"] = GetOddsChangeClass(sKeeper_Sport[1].oHash["Odds_2_E"]);
                        sKeeper_Sport[1].newHash["Odds_3_O_Cls"] = GetOddsChangeClass(sKeeper_Sport[1].oHash["Odds_3_O"]);
                        sKeeper_Sport[1].newHash["Odds_3_U_Cls"] = GetOddsChangeClass(sKeeper_Sport[1].oHash["Odds_3_U"]);
                        sKeeper_Sport[1].newHash["Odds_15_1_Cls"] = GetOddsChangeClass(sKeeper_Sport[1].oHash["Odds_15_1"]);
                        sKeeper_Sport[1].newHash["Odds_15_X_Cls"] = GetOddsChangeClass(sKeeper_Sport[1].oHash["Odds_15_X"]);
                        sKeeper_Sport[1].newHash["Odds_15_2_Cls"] = GetOddsChangeClass(sKeeper_Sport[1].oHash["Odds_15_2"]);
                        sKeeper_Sport[1].newHash["Odds_5_1_Cls"] = GetOddsChangeClass(sKeeper_Sport[1].oHash["Odds_5_1"]);
                        sKeeper_Sport[1].newHash["Odds_5_X_Cls"] = GetOddsChangeClass(sKeeper_Sport[1].oHash["Odds_5_X"]);
                        sKeeper_Sport[1].newHash["Odds_5_2_Cls"] = GetOddsChangeClass(sKeeper_Sport[1].oHash["Odds_5_2"]);

                        var sFlag = sKeeper_Sport[1].oHash["FavorF"];
                        switch (sFlag) {
                            case "h":
                                sKeeper_Sport[1].newHash["Home_Cls"] = CLS_HDP_F;
                                sKeeper_Sport[1].newHash["Away_Cls"] = CLS_HDP_N;
                                sKeeper_Sport[1].newHash["Value_1_H"] = sKeeper_Sport[1].oHash["Value_1"];
                                sKeeper_Sport[1].newHash["Value_1_A"] = "";
                                break;
                            case "a":
                                sKeeper_Sport[1].newHash["Home_Cls"] = CLS_HDP_N;
                                sKeeper_Sport[1].newHash["Away_Cls"] = CLS_HDP_F;
                                sKeeper_Sport[1].newHash["Value_1_H"] = "";
                                sKeeper_Sport[1].newHash["Value_1_A"] = sKeeper_Sport[1].oHash["Value_1"];
                                break;
                            default:
                                sKeeper_Sport[1].newHash["Home_Cls"] = CLS_HDP_N;
                                sKeeper_Sport[1].newHash["Away_Cls"] = CLS_HDP_N;
                                if (sKeeper_Sport[1].oHash["Odds_1_H"] != "") {
                                    sKeeper_Sport[1].newHash["Value_1_H"] = "0";
                                } else {
                                    sKeeper_Sport[1].newHash["Value_1_H"] = "";
                                }
                                sKeeper_Sport[1].newHash["Value_1_A"] = "";
                        }
                        //sKeeper_Sport[1].newHash["Home_Cls"] = (sFlag == "h") ? CLS_HDP_F : CLS_HDP_N;
                        //sKeeper_Sport[1].newHash["Away_Cls"] = (sFlag == "a") ? CLS_HDP_F : CLS_HDP_N;
                        //if (sKeeper_Sport[1].oHash["Odds_5_1"] == "" && sKeeper_Sport[1].oHash["Odds_5_X"] == "" && sKeeper_Sport[1].oHash["Odds_5_2"] == "")
                        if (sKeeper_Sport[1].oHash["OddsId_5"] == "") {
                            sKeeper_Sport[1].newHash["Draw_5"] = "";
                        } else {
                            sKeeper_Sport[1].newHash["Draw"] = RES_DRAW;
                        }
                        if (sKeeper_Sport[1].oHash["Odds_2_O"] == "" && sKeeper_Sport[1].oHash["Odds_2_E"] == "") {
                            sKeeper_Sport[1].newHash["disp_2"] = CLS_LS_OFF;
                        } else {
                            sKeeper_Sport[1].newHash["disp_2"] = CLS_LS_ON;
                        }
                        if (typeof (oajaxData[1]["B1_3_5_7_8_15"]) != "undefined") {
                            var oldDataIdx = 0;
                            while (typeof (oajaxData[1]["B1_3_5_7_8_15"][oldDataIdx.toString()]) != "undefined") {
                                if (oajaxData[1]["B1_3_5_7_8_15"][oldDataIdx.toString()][2] == sMatchid) {

                                    if (oajaxData[1]["B1_3_5_7_8_15"][oldDataIdx.toString()].slice(6, 8).toString() != ajaxData["B1_3_5_7_8_15"][sCnt.toString()].slice(6, 8).toString()) {
                                        sKeeper_Sport[1].newHash["Changed_Score"] = CLS_UPD;
                                    } else {
                                        sKeeper_Sport[1].newHash["Changed_Score"] = "";
                                    }
                                    break;
                                }
                                oldDataIdx++;
                            }

                            if (sKeeper_Sport[1].oHash["OddsId_1"] != "" && typeof (oajaxData[1]['B1_3_5_7_8_15'][sKeeper_Sport[1].oHash["OddsId_1"]]) != "undefined") {
                                if (ajaxData['B1_3_5_7_8_15'][sKeeper_Sport[1].oHash["OddsId_1"]].toString() != oajaxData[1]['B1_3_5_7_8_15'][sKeeper_Sport[1].oHash["OddsId_1"]].toString()) {
                                    sKeeper_Sport[1].newHash["Changed_1"] = CLS_UPD;
                                } else {
                                    sKeeper_Sport[1].newHash["Changed_1"] = "";
                                }
                            }

                            if (sKeeper_Sport[1].oHash["OddsId_2"] != "" && typeof (oajaxData[1]['B1_3_5_7_8_15'][sKeeper_Sport[1].oHash["OddsId_2"]]) != "undefined") {
                                if (ajaxData['B1_3_5_7_8_15'][sKeeper_Sport[1].oHash["OddsId_2"]].toString() != oajaxData[1]['B1_3_5_7_8_15'][sKeeper_Sport[1].oHash["OddsId_2"]].toString()) {
                                    sKeeper_Sport[1].newHash["Changed_2"] = CLS_UPD;
                                } else {
                                    sKeeper_Sport[1].newHash["Changed_2"] = "";
                                }
                            }

                            if (sKeeper_Sport[1].oHash["OddsId_3"] != "" && typeof (oajaxData[1]['B1_3_5_7_8_15'][sKeeper_Sport[1].oHash["OddsId_3"]]) != "undefined") {
                                if (ajaxData['B1_3_5_7_8_15'][sKeeper_Sport[1].oHash["OddsId_3"]].toString() != oajaxData[1]['B1_3_5_7_8_15'][sKeeper_Sport[1].oHash["OddsId_3"]].toString()) {
                                    sKeeper_Sport[1].newHash["Changed_3"] = CLS_UPD;
                                } else {
                                    sKeeper_Sport[1].newHash["Changed_3"] = "";
                                }
                            }

                            if (sKeeper_Sport[1].oHash["OddsId_5"] != "" && typeof (oajaxData[1]['B1_3_5_7_8_15'][sKeeper_Sport[1].oHash["OddsId_5"]]) != "undefined") {
                                if (ajaxData['B1_3_5_7_8_15'][sKeeper_Sport[1].oHash["OddsId_5"]].toString() != oajaxData[1]['B1_3_5_7_8_15'][sKeeper_Sport[1].oHash["OddsId_5"]].toString()) {
                                    sKeeper_Sport[1].newHash["Changed_5"] = CLS_UPD;
                                } else {
                                    sKeeper_Sport[1].newHash["Changed_5"] = "";
                                }
                            }
                        }
                        oddstmpl = _formatTemplate(oddstmpl, "{%", "}");
                        oddstmpl = _replaceTags(sKeeper_Sport[1].oHash, oddstmpl);
                        oddstmpl = _formatTemplate(oddstmpl, "{@", "}");
                        oddstmpl = _replaceTags(sKeeper_Sport[1].newHash, oddstmpl);
                        Eventtmpl = Eventtmpl + oddstmpl;
                    }
                    sFOddsList[SLidx] = sFOddsList[SLidx] + Eventtmpl;
                    //                    if (sKeeper_Sport[1].Market == "L")
                    //                    {
                    //                        OddsFrame = OddsFrame.replace("<!--SpecialOdds_FL-->", Eventtmpl);
                    //                    }
                    //                    else
                    //                    {
                    //                        OddsFrame = OddsFrame.replace("<!--SpecialOdds_FD-->", Eventtmpl);
                    //                    }
                }
                var maxCntH = 0;
                if (typeof (ajaxData['B1_3_5_7_8_15'][sMatchid + "S7"]) != "undefined") {
                    maxCntH = ajaxData['B1_3_5_7_8_15'][sMatchid + "S7"].length;
                }
                if (typeof (ajaxData['B1_3_5_7_8_15'][sMatchid + "S8"]) != "undefined") {
                    if (ajaxData['B1_3_5_7_8_15'][sMatchid + "S8"].length > maxCntH) {
                        maxCntH = ajaxData['B1_3_5_7_8_15'][sMatchid + "S8"].length;
                    }
                }
                if (typeof (ajaxData['B1_3_5_7_8_15'][sMatchid + "S12"]) != "undefined") {
                    if (ajaxData['B1_3_5_7_8_15'][sMatchid + "S12"].length > maxCntH) {
                        maxCntH = ajaxData['B1_3_5_7_8_15'][sMatchid + "S12"].length;
                    }
                }
                if (typeof (ajaxData['B1_3_5_7_8_15'][sMatchid + "S15"]) != "undefined") {
                    if (ajaxData['B1_3_5_7_8_15'][sMatchid + "S15"].length > maxCntH) {
                        maxCntH = ajaxData['B1_3_5_7_8_15'][sMatchid + "S15"].length;
                    }
                }
                if (maxCntH == 0) {
                    //                    if (sKeeper_Sport[1].Market == "L")
                    //                    {
                    //                        OddsFrame = OddsFrame.replace("<!--moreSpecialEvent_HL-->", "");
                    //                        OddsFrame = OddsFrame.replace("<!--SpecialOdds_HL-->", "");
                    //                    }
                    //                    else
                    //                    {
                    //                        OddsFrame = OddsFrame.replace("<!--moreSpecialEvent_HD-->", "");
                    //                        OddsFrame = OddsFrame.replace("<!--SpecialOdds_HD-->", "");
                    //                    }
                } else {
                    //                    if (sKeeper_Sport[1].Market == "L")
                    //                    {
                    //                        OddsFrame = OddsFrame.replace("<!--moreSpecialEvent_HL-->", fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreSpecialEvent_HL").innerHTML);
                    //                    }
                    //                    else
                    //                    {
                    //                        OddsFrame = OddsFrame.replace("<!--moreSpecialEvent_HD-->", fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreSpecialEvent_HD").innerHTML);
                    //                    }
                    var oddstmpl = "";
                    var Eventtmpl = "";
                    for (var oCnt = 0; oCnt < maxCntH; oCnt++) {
                        if (sKeeper_Sport[1].Market == "L") {
                            if (MoreTmpSpecialOdds[1][2] == "") {
                                MoreTmpSpecialOdds[1][2] = fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("SpecialOdds_HL").innerHTML;
                            }
                            //oddstmpl = fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("SpecialOdds_HL").innerHTML;
                            oddstmpl = MoreTmpSpecialOdds[1][2];
                        } else {
                            if (MoreTmpSpecialOdds[1][3] == "") {
                                MoreTmpSpecialOdds[1][3] = fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("SpecialOdds_HD").innerHTML;
                            }
                            //oddstmpl = fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("SpecialOdds_HD").innerHTML;
                            oddstmpl = MoreTmpSpecialOdds[1][3];
                        }

                        var s7 = new Array("", "", "", "", "");
                        var s12 = new Array("", "", "");
                        var s8 = new Array("", "", "", "");
                        var s15 = new Array("", "", "", "");
                        if (typeof (ajaxData['B1_3_5_7_8_15'][sMatchid + "S7"]) != "undefined") {
                            if (ajaxData['B1_3_5_7_8_15'][sMatchid + "S7"].length > oCnt) {
                                s7 = ajaxData['B1_3_5_7_8_15'][ajaxData['B1_3_5_7_8_15'][sMatchid + "S7"][oCnt]];
                            }
                        }
                        if (typeof (ajaxData['B1_3_5_7_8_15'][sMatchid + "S12"]) != "undefined") {
                            if (ajaxData['B1_3_5_7_8_15'][sMatchid + "S12"].length > oCnt) {
                                s12 = ajaxData['B1_3_5_7_8_15'][ajaxData['B1_3_5_7_8_15'][sMatchid + "S12"][oCnt]];
                            }
                        }
                        if (typeof (ajaxData['B1_3_5_7_8_15'][sMatchid + "S8"]) != "undefined") {
                            if (ajaxData['B1_3_5_7_8_15'][sMatchid + "S8"].length > oCnt) {
                                s8 = ajaxData['B1_3_5_7_8_15'][ajaxData['B1_3_5_7_8_15'][sMatchid + "S8"][oCnt]];
                            }
                        }
                        if (typeof (ajaxData['B1_3_5_7_8_15'][sMatchid + "S15"]) != "undefined") {
                            if (ajaxData['B1_3_5_7_8_15'][sMatchid + "S15"].length > oCnt) {
                                s15 = ajaxData['B1_3_5_7_8_15'][ajaxData['B1_3_5_7_8_15'][sMatchid + "S15"][oCnt]];
                            }
                        }
                        var tmpArr = ajaxData["B1_3_5_7_8_15"][sCnt.toString()].concat(s7).concat(s12).concat(s8).concat(s15);
                        sKeeper_Sport[1].newHash = new Array();
                        sKeeper_Sport[1].oHash = new Array();
                        sKeeper_Sport[1].setDatas(tmpArr, mMultiSportODDS_DEF["B7_12_8_15"]);
                        //sKeeper_Sport[1].oHash["MatchId"] = sMatchid;
                        sKeeper_Sport[1].newHash["Tr_Cls"] = Tr_Cls;
                        sKeeper_Sport[1].newHash["isParlay"] = sKeeper_Sport[1].isParlay;
                        if (sKeeper_Sport[1].Market == "L") {
                            sKeeper_Sport[1].newHash["Score"] = sKeeper_Sport[1].oHash["ScoreH"] + " - " + sKeeper_Sport[1].oHash["ScoreA"];
                        } else {
                            sKeeper_Sport[1].newHash["Score"] = "";
                        }

                        sKeeper_Sport[1].newHash["Odds_7_H_Cls"] = GetOddsChangeClass(sKeeper_Sport[1].oHash["Odds_7_H"]);
                        sKeeper_Sport[1].newHash["Odds_7_A_Cls"] = GetOddsChangeClass(sKeeper_Sport[1].oHash["Odds_7_A"]);
                        sKeeper_Sport[1].newHash["Odds_8_O_Cls"] = GetOddsChangeClass(sKeeper_Sport[1].oHash["Odds_8_O"]);
                        sKeeper_Sport[1].newHash["Odds_8_U_Cls"] = GetOddsChangeClass(sKeeper_Sport[1].oHash["Odds_8_U"]);
                        sKeeper_Sport[1].newHash["Odds_12_O_Cls"] = GetOddsChangeClass(sKeeper_Sport[1].oHash["Odds_12_O"]);
                        sKeeper_Sport[1].newHash["Odds_12_E_Cls"] = GetOddsChangeClass(sKeeper_Sport[1].oHash["Odds_12_E"]);
                        var sFlag = sKeeper_Sport[1].oHash["FavorH1"];
                        switch (sFlag) {
                            case "h":
                                sKeeper_Sport[1].newHash["Home_Cls"] = CLS_HDP_F;
                                sKeeper_Sport[1].newHash["Away_Cls"] = CLS_HDP_N;
                                sKeeper_Sport[1].newHash["Value_7_H"] = sKeeper_Sport[1].oHash["Value_7"];
                                sKeeper_Sport[1].newHash["Value_7_A"] = "";
                                break;
                            case "a":
                                sKeeper_Sport[1].newHash["Home_Cls"] = CLS_HDP_N;
                                sKeeper_Sport[1].newHash["Away_Cls"] = CLS_HDP_F;
                                sKeeper_Sport[1].newHash["Value_7_H"] = "";
                                sKeeper_Sport[1].newHash["Value_7_A"] = sKeeper_Sport[1].oHash["Value_7"];
                                break;
                            default:
                                sKeeper_Sport[1].newHash["Home_Cls"] = CLS_HDP_N;
                                sKeeper_Sport[1].newHash["Away_Cls"] = CLS_HDP_N;
                                if (sKeeper_Sport[1].oHash["Odds_7_H"] != "") {
                                    sKeeper_Sport[1].newHash["Value_7_H"] = "0";
                                } else {
                                    sKeeper_Sport[1].newHash["Value_7_H"] = "";
                                }
                                sKeeper_Sport[1].newHash["Value_7_A"] = "";
                        }

                        //sKeeper_Sport[1].newHash["Home_Cls"] = (sFlag == "h") ? CLS_HDP_F : CLS_HDP_N;
                        //sKeeper_Sport[1].newHash["Away_Cls"] = (sFlag == "a") ? CLS_HDP_F : CLS_HDP_N;

                        //if (sKeeper_Sport[1].oHash["Odds_15_1"] == "" && sKeeper_Sport[1].oHash["Odds_15_X"] == "" && sKeeper_Sport[1].oHash["Odds_15_2"] == "")
                        if (sKeeper_Sport[1].oHash["OddsId_15"] == "") {
                            sKeeper_Sport[1].newHash["Draw_15"] = "";
                        } else {
                            sKeeper_Sport[1].newHash["Draw"] = RES_DRAW;
                        }
                        if (sKeeper_Sport[1].oHash["Odds_12_O"] == "" && sKeeper_Sport[1].oHash["Odds_12_E"] == "") {
                            sKeeper_Sport[1].newHash["disp_12"] = CLS_LS_OFF;
                        } else {
                            sKeeper_Sport[1].newHash["disp_12"] = CLS_LS_ON;
                        }
                        if (typeof (oajaxData[1]["B1_3_5_7_8_15"]) != "undefined") {
                            var oldDataIdx = 0;
                            while (typeof (oajaxData[1]["B1_3_5_7_8_15"][oldDataIdx.toString()]) != "undefined") {
                                if (oajaxData[1]["B1_3_5_7_8_15"][oldDataIdx.toString()][2] == sMatchid) {

                                    if (oajaxData[1]["B1_3_5_7_8_15"][oldDataIdx.toString()].slice(6, 8).toString() != ajaxData["B1_3_5_7_8_15"][sCnt.toString()].slice(6, 8).toString()) {
                                        sKeeper_Sport[1].newHash["Changed_Score"] = CLS_UPD;
                                    } else {
                                        sKeeper_Sport[1].newHash["Changed_Score"] = "";
                                    }
                                    break;
                                }
                                oldDataIdx++;
                            }

                            if (sKeeper_Sport[1].oHash["OddsId_7"] != "" && typeof (oajaxData[1]['B1_3_5_7_8_15'][sKeeper_Sport[1].oHash["OddsId_7"]]) != "undefined") {
                                if (ajaxData['B1_3_5_7_8_15'][sKeeper_Sport[1].oHash["OddsId_7"]].toString() != oajaxData[1]['B1_3_5_7_8_15'][sKeeper_Sport[1].oHash["OddsId_7"]].toString()) {
                                    sKeeper_Sport[1].newHash["Changed_7"] = CLS_UPD;
                                } else {
                                    sKeeper_Sport[1].newHash["Changed_7"] = "";
                                }
                            }

                            if (sKeeper_Sport[1].oHash["OddsId_12"] != "" && typeof (oajaxData[1]['B1_3_5_7_8_15'][sKeeper_Sport[1].oHash["OddsId_12"]]) != "undefined") {
                                if (ajaxData['B1_3_5_7_8_15'][sKeeper_Sport[1].oHash["OddsId_12"]].toString() != oajaxData[1]['B1_3_5_7_8_15'][sKeeper_Sport[1].oHash["OddsId_12"]].toString()) {
                                    sKeeper_Sport[1].newHash["Changed_12"] = CLS_UPD;
                                } else {
                                    sKeeper_Sport[1].newHash["Changed_12"] = "";
                                }
                            }

                            if (sKeeper_Sport[1].oHash["OddsId_8"] != "" && typeof (oajaxData[1]['B1_3_5_7_8_15'][sKeeper_Sport[1].oHash["OddsId_8"]]) != "undefined") {
                                if (ajaxData['B1_3_5_7_8_15'][sKeeper_Sport[1].oHash["OddsId_8"]].toString() != oajaxData[1]['B1_3_5_7_8_15'][sKeeper_Sport[1].oHash["OddsId_8"]].toString()) {
                                    sKeeper_Sport[1].newHash["Changed_8"] = CLS_UPD;
                                } else {
                                    sKeeper_Sport[1].newHash["Changed_8"] = "";
                                }
                            }

                            if (sKeeper_Sport[1].oHash["OddsId_15"] != "" && typeof (oajaxData[1]['B1_3_5_7_8_15'][sKeeper_Sport[1].oHash["OddsId_15"]]) != "undefined") {
                                if (ajaxData['B1_3_5_7_8_15'][sKeeper_Sport[1].oHash["OddsId_15"]].toString() != oajaxData[1]['B1_3_5_7_8_15'][sKeeper_Sport[1].oHash["OddsId_15"]].toString()) {
                                    sKeeper_Sport[1].newHash["Changed_15"] = CLS_UPD;
                                } else {
                                    sKeeper_Sport[1].newHash["Changed_15"] = "";
                                }
                            }
                        }
                        oddstmpl = _formatTemplate(oddstmpl, "{%", "}");
                        oddstmpl = _replaceTags(sKeeper_Sport[1].oHash, oddstmpl);
                        oddstmpl = _formatTemplate(oddstmpl, "{@", "}");
                        oddstmpl = _replaceTags(sKeeper_Sport[1].newHash, oddstmpl);
                        Eventtmpl = Eventtmpl + oddstmpl;
                    }
                    sHOddsList[SLidx] = sHOddsList[SLidx] + Eventtmpl;
                    //                    if (sKeeper_Sport[1].Market == "L")
                    //                    {
                    //                        OddsFrame = OddsFrame.replace("<!--SpecialOdds_HL-->", Eventtmpl);
                    //                    }
                    //                    else
                    //                    {
                    //                        OddsFrame = OddsFrame.replace("<!--SpecialOdds_HD-->", Eventtmpl);
                    //                    }
                }
                //                sKeeper_Sport[1].DivTmpl = OddsFrame;
                //                sKeeper_Sport[1].AppendOddsTable();
            }
        }
        if (sFOddsList[SLidx] == "") {
            if (sKeeper_Sport[1].Market == "L") {
                OddsFrame = OddsFrame.replace("<!--moreSpecialEvent_FL-->", "");
                OddsFrame = OddsFrame.replace("<!--SpecialOdds_FL-->", "");
            } else {
                OddsFrame = OddsFrame.replace("<!--moreSpecialEvent_FD-->", "");
                OddsFrame = OddsFrame.replace("<!--SpecialOdds_FD-->", "");
            }
        } else {
            if (sKeeper_Sport[1].Market == "L") {
                if (MoreTmpSpecialEvent[1][0] == "") {
                    MoreTmpSpecialEvent[1][0] = fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreSpecialEvent_FL").innerHTML;
                }
                //OddsFrame = OddsFrame.replace("<!--moreSpecialEvent_FL-->", fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreSpecialEvent_FL").innerHTML);
                OddsFrame = OddsFrame.replace("<!--moreSpecialEvent_FL-->", MoreTmpSpecialEvent[1][0]);
                OddsFrame = OddsFrame.replace("<!--SpecialOdds_FL-->", sFOddsList[SLidx]);
            } else {
                if (MoreTmpSpecialEvent[1][1] == "") {
                    MoreTmpSpecialEvent[1][1] = fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreSpecialEvent_FD").innerHTML;
                }
                //OddsFrame = OddsFrame.replace("<!--moreSpecialEvent_FD-->", fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreSpecialEvent_FD").innerHTML);
                OddsFrame = OddsFrame.replace("<!--moreSpecialEvent_FD-->", MoreTmpSpecialEvent[1][1]);
                OddsFrame = OddsFrame.replace("<!--SpecialOdds_FD-->", sFOddsList[SLidx]);
            }
        }
        if (sHOddsList[SLidx] == "") {
            if (sKeeper_Sport[1].Market == "L") {
                OddsFrame = OddsFrame.replace("<!--moreSpecialEvent_HL-->", "");
                OddsFrame = OddsFrame.replace("<!--SpecialOdds_HL-->", "");
            } else {
                OddsFrame = OddsFrame.replace("<!--moreSpecialEvent_HD-->", "");
                OddsFrame = OddsFrame.replace("<!--SpecialOdds_HD-->", "");
            }

        } else {
            if (sKeeper_Sport[1].Market == "L") {
                if (MoreTmpSpecialEvent[1][2] == "") {
                    MoreTmpSpecialEvent[1][2] = fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreSpecialEvent_HL").innerHTML;
                }
                //OddsFrame = OddsFrame.replace("<!--moreSpecialEvent_HL-->", fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreSpecialEvent_HL").innerHTML);
                OddsFrame = OddsFrame.replace("<!--moreSpecialEvent_HL-->", MoreTmpSpecialEvent[1][2]);
                OddsFrame = OddsFrame.replace("<!--SpecialOdds_HL-->", sHOddsList[SLidx]);
            } else {
                if (MoreTmpSpecialEvent[1][3] == "") {
                    MoreTmpSpecialEvent[1][3] = fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreSpecialEvent_HD").innerHTML;
                }
                //OddsFrame = OddsFrame.replace("<!--moreSpecialEvent_HD-->", fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreSpecialEvent_HD").innerHTML);
                OddsFrame = OddsFrame.replace("<!--moreSpecialEvent_HD-->", MoreTmpSpecialEvent[1][3]);
                OddsFrame = OddsFrame.replace("<!--SpecialOdds_HD-->", sHOddsList[SLidx]);
            }
        }
        sKeeper_Sport[1].DivTmpl = OddsFrame;
        sKeeper_Sport[1].AppendOddsTable();
    }
    //"1_3_5_7_8_15" not include betType Array
    //var betType = new Array("15_5", "168", "4", "26_159", "6", "161_162", "28_13", "2_24", "128", "25_121", "122_123", "27", "171", "144", "169", "22_164", "166", "165", "167", "152", "16", "14", "145_170", "172", "175", "176", "173_174", "179", "181_182", "177_18", "140_180", "30", "127_126", "12_188", "151_191", "17_177", "18_184", "186_185", "187_140", "141_142", "133_149", "147", "134_150", "148", "146", "189_190", "206_208", "207_209", "197_198", "195_196", "11_194", "204_205", "200_201", "202_203", "11", "202", "192", "193", "210", "135_210", "212_214", "213_215", "211", "216", "217");
    //var betType = new Array("5", "15", "168", "401_402", "403_404", "4", "413", "414", "405", "416", "152", "16", "14", "26_6", "159", "161_162", "28_13", "171", "2_128", "24", "121_122", "25_123", "27_425", "144", "169", "22", "145_170", "172", "417", "418", "424_419", "420_421", "422_423", "175", "176", "173_174", "166", "165", "167", "30", "127_126", "179", "181_182", "191_188", "12_184", "17_18", "177", "186_185", "187_140", "141_142", "133_134", "149_150", "147_148", "146", "189_190", "180", "206_208", "197", "198", "195_196", "11", "194", "207_209", "204", "205", "200_201", "202", "203", "192", "193", "135", "210", "212_214", "213_215", "211", "217", "216", "426", "412_429", "412", "151", "221", "222", "223", "224", "445", "446_447");
    var betType = new Array("5", "15", "401_402", "403_404", "4", "413", "30", "414", "405", "416", "16", "6", "14", "2_128", "26_28", "24_13", "27_425", "171", "159", "161_162", "144", "172", "417_418", "424_419", "420_421", "422_423", "25_121", "122", "127_126", "426", "12_184", "151_186", "188_146", "412_429", "17_18", "177_140", "141_142", "133_134", "149_150", "147_148", "189_190", "445", "446_447", "191_185", "221", "222", "223", "224");
    if (fFrame.DisplayMode == "3" || sKeeper_Sport[1].isParlay == 1) {
        //betType = new Array("168", "401_402", "403_404", "4", "413", "414", "405", "416", "152", "16", "14", "26_6", "159", "161_162", "28_13", "171", "2_128", "24", "121_122", "25_123", "27_425", "144", "169", "22", "145_170", "172", "417", "418", "424_419", "420_421", "422_423", "175", "176", "173_174", "166", "165", "167", "30", "127_126", "179", "181_182", "191_188", "12_184", "17_18", "177", "186_185", "187_140", "141_142", "133_134", "149_150", "147_148", "146", "189_190", "180", "206_208", "197", "198", "195_196", "11", "194", "207_209", "204", "205", "200_201", "202", "203", "192", "193", "135", "210", "212_214", "213_215", "211", "217", "216", "426", "412_429", "412", "151", "221", "222", "223", "224", "445", "446_447");
        betType = new Array("168", "401_402", "403_404", "4", "413", "30", "414", "405", "416", "16", "6", "14", "2_128", "26_28", "24_13", "27_425", "171", "159", "161_162", "144", "172", "417_418", "424_419", "420_421", "422_423", "25_121", "122", "127_126", "426", "12_184", "151_186", "188_146", "412_429", "17_18", "177_140", "141_142", "133_134", "149_150", "147_148", "189_190", "445", "446_447", "191_185", "221", "222", "223", "224");
    }
    if (sKeeper_Sport[1].Market == "L") {
        //betType = new Array("5_15", "18", "177", "168", "4", "413", "414", "405", "16", "24_13", "28_6", "2", "26", "126_12", "151_159", "412", "121_122", "25_123", "191", "161_162", "171", "27", "144", "169", "22", "175", "164", "166", "165", "167_179", "181_182", "140", "180", "197", "198", "195_196", "11_194", "204", "205", "200_201", "202_203", "210", "216", "401_402", "403_404");
        betType = new Array("5", "401_402", "4", "413", "26_28", "27_13", "2_24", "6_159", "161_162", "15", "414", "405", "403_404", "126_412", "12_151", "221", "222", "223", "224");
        if (fFrame.DisplayMode == "3" || sKeeper_Sport[1].isParlay == 1) {
            //betType = new Array("18", "177", "168", "4", "413", "414", "405", "16", "24_13", "28_6", "2", "26", "126_12", "151_159", "412", "121_122", "25_123", "191", "161_162", "171", "27", "144", "169", "22", "175", "164", "166", "165", "167_179", "181_182", "140", "180", "197", "198", "195_196", "11_194", "204", "205", "200_201", "202_203", "210", "216", "401_402", "403_404");
            betType = new Array("401_402", "4", "413", "26_28", "27_13", "2_24", "6_159", "161_162", "403_404", "414", "405", "126_412", "12_151", "221", "222", "223", "224");
        }
    }
    if (haveHotEvent && Category[1] == 0) {
        //betType = new Array("5_15", "4", "30", "152", "16", "14_127", "6_126", "128", "26_13", "28_24");
        //betType = new Array("5_15", "4", "30", "413", "414", "405", "16", "159", "412", "24_151", "28_13", "6_126", "2_12", "26", "121_122", "25_191", "123", "161_162", "171", "27", "152", "14_127", "401_402", "403_404");
        if (sKeeper_Sport[1].Market == "L") {
            betType = new Array("401_402", "403_404", "4", "30", "413", "414", "405", "26_28", "27_13", "2_24", "6", "221", "222", "223", "224");
        }
        else {
            //betType = new Array("401_402", "403_404", "4", "30", "413", "414", "405", "416", "152", "16", "6", "14", "2_128", "26_28", "24_13", "27_425", "171", "221", "222", "223", "224", "426");
            //betType = new Array("4", "30", "413", "414", "405", "152", "16", "6", "14", "2_128", "26_28", "24_13", "27", "171", "221", "222", "223", "224");
            betType = new Array("401_402", "403_404", "4", "413", "30", "414", "405", "416", "16", "6", "14", "2_128", "26_28", "24_13", "27_425", "171", "221", "222", "223", "224");
        }
        if (fFrame.DisplayMode == "1" || fFrame.DisplayMode == "1F" || fFrame.DisplayMode == "1H") {
            //betType = new Array("4", "30", "413", "414", "405", "16", "159", "412", "24_151", "28_13", "6_126", "2_12", "26", "121_122", "25_191", "123", "161_162", "171", "27", "152", "14_127", "401_402", "403_404");
            if (sKeeper_Sport[1].Market == "L") {
                betType = new Array("5_15", "401_402", "403_404", "4", "30", "413", "414", "405", "26_28", "27_13", "2_24", "6", "221", "222", "223", "224");
            }
            else {
                //betType = new Array("5_15","401_402", "403_404", "4", "30", "413", "414", "405", "152", "16", "6", "14", "2_128", "26_28", "24_13", "27_425", "171", "221", "222", "223", "224", "426");
                //betType = new Array("5_15", "4", "30", "413", "414", "405", "152", "16", "6", "14", "2_128", "26_28", "24_13", "27", "171", "221", "222", "223", "224");
                betType = new Array("5_15", "401_402", "403_404", "4", "413", "30", "414", "405", "416", "16", "6", "14", "2_128", "26_28", "24_13", "27_425", "171", "221", "222", "223", "224");
            }
        }
        if (sKeeper_Sport[1].isParlay == 1) {
            if (sKeeper_Sport[1].Market == "L") {
                betType = new Array("401_402", "403_404", "4", "30", "413", "414", "405", "26_28", "27_13", "2_24", "6", "221", "222", "223", "224");
            }
            else {
                //betType = new Array("401_402", "403_404", "4", "30", "413", "414", "405", "416", "416", "152", "16", "6", "14", "2_128", "26_28", "24_13", "27_425", "171", "221", "222", "223", "224", "426");
                //betType = new Array("4", "30", "413", "414", "405", "152", "16", "6", "14", "2_128", "26_28", "24_13", "27", "171", "221", "222", "223", "224");
                betType = new Array("401_402", "403_404", "4", "413", "30", "414", "405", "416", "16", "6", "14", "2_128", "26_28", "24_13", "27_425", "171", "221", "222", "223", "224");
            }
        }
    }

    var MultiOddsArray = [/*17, 18,*/ 144, 197, 198, 204, 205, 221, 222, 223, 224]; //, 401, 402, 403, 404
    var CheckZeroOddsArray = [159, 406, 4, 413, 26, 408, 14, 6, 126, 30, 414, 412, 127, 171, 405, 161, 162, 151, 191, 13, 27, 24];
    Arr221 = new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
    Arr222 = new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
    Arr223 = new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
    Arr224 = new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
    for (var i = 0; i < betType.length; i++) {
        var b = [];
        var moreEventHTML = "";
        if (betType[i].indexOf("_") != -1) {
            b = betType[i].split("_");
            if (typeof (MoreTmplList[1][parseInt(b[0], 10)]) == "undefined" || MoreTmplList[1][parseInt(b[0], 10)] == "") {
                MoreTmplList[1][parseInt(b[0], 10)] = fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreEvent_" + b[0]).innerHTML;
            }
            if (typeof (MoreTmplList[1][parseInt(b[1], 10)]) == "undefined" || MoreTmplList[1][parseInt(b[1], 10)] == "") {
                MoreTmplList[1][parseInt(b[1], 10)] = fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreEvent_" + b[1]).innerHTML;
            }

            if (MoreEventCount[1][1] == "") {
                MoreEventCount[1][1] = fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreEventDouble").innerHTML;
            }
            //moreEventHTML = fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreEventDouble").innerHTML;
            moreEventHTML = MoreEventCount[1][1];
            if (typeof (ajaxData["B" + b[0]]) != "undefined" && ajaxData["B" + b[0]] != null && ((Category[1].toString()) == ajaxData["B" + b[0]][0] || (Category[1].toString() == "0" && ajaxData["B" + b[0]][1] == "1"))) {
                //moreEventHTML = moreEventHTML.replace("OddsData0", fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreEvent_" + b[0]).innerHTML);
                moreEventHTML = moreEventHTML.replace("OddsData0", MoreTmplList[1][parseInt(b[0], 10)]);
                if (typeof (ajaxData["B" + b[1]]) != "undefined" && ajaxData["B" + b[1]] != null && ((Category[1].toString()) == ajaxData["B" + b[1]][0] || (Category[1].toString() == "0" && ajaxData["B" + b[1]][1] == "1"))) {
                    //moreEventHTML = moreEventHTML.replace("OddsData1", fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreEvent_" + b[1]).innerHTML);
                    moreEventHTML = moreEventHTML.replace("OddsData1", MoreTmplList[1][parseInt(b[1], 10)]);
                } else {
                    moreEventHTML = moreEventHTML.replace("OddsData1", "");
                }
            } else {
                if (typeof (ajaxData["B" + b[1]]) != "undefined" && ajaxData["B" + b[1]] != null && ((Category[1].toString()) == ajaxData["B" + b[1]][0] || (Category[1].toString() == "0" && ajaxData["B" + b[1]][1] == "1"))) {
                    //moreEventHTML = moreEventHTML.replace("OddsData0", fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreEvent_" + b[1]).innerHTML);
                    moreEventHTML = moreEventHTML.replace("OddsData0", MoreTmplList[1][parseInt(b[1], 10)]);
                    moreEventHTML = moreEventHTML.replace("OddsData1", "");
                }
            }
        } else {
            b[0] = betType[i];
            if (typeof (MoreTmplList[1][parseInt(b[0], 10)]) == "undefined" || MoreTmplList[1][parseInt(b[0], 10)] == "") {
                MoreTmplList[1][parseInt(b[0], 10)] = fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreEvent_" + b[0]).innerHTML;
            }
            if (b[0] == 221 || b[0] == 222 || b[0] == 223 || b[0] == 224) {
                if (typeof (ajaxData['B' + b[0] + 'C' + Category[1]]) != "undefined" && ajaxData['B' + b[0] + 'C' + Category[1]] != null) {
                    var k = 0;
                    switch (b[0]) {
                        case "221":
                            for (var m = 0; m < ajaxData['B' + b[0] + 'C' + Category[1]].length; m++) {
                                Arr221[parseInt(ajaxData[ajaxData['B' + b[0] + 'C' + Category[1]][m]][4], 10)] = ajaxData['B' + b[0] + 'C' + Category[1]][m];
                            }
                            if (SelIdx221 == -1 || Arr221[SelIdx221] == "") {
                                for (var m = 0; m < Arr221.length; m++) {
                                    if (Arr221[m] != "") {
                                        SelIdx221 = m;
                                        break;
                                    }
                                }
                            }
                            for (var m = 0; m < ajaxData['B' + b[0] + 'C' + Category[1]].length; m++) {
                                if (ajaxData['B' + b[0] + 'C' + Category[1]][m] == Arr221[SelIdx221]) {
                                    k = m;
                                    break;
                                }
                            }
                            break;
                        case "222":
                            for (var m = 0; m < ajaxData['B' + b[0] + 'C' + Category[1]].length; m++) {
                                Arr222[parseInt(ajaxData[ajaxData['B' + b[0] + 'C' + Category[1]][m]][4], 10)] = ajaxData['B' + b[0] + 'C' + Category[1]][m];
                            }
                            if (SelIdx222 == -1 || Arr222[SelIdx222] == "") {
                                for (var m = 0; m < Arr222.length; m++) {
                                    if (Arr222[m] != "") {
                                        SelIdx222 = m;
                                        break;
                                    }
                                }
                            }
                            for (var m = 0; m < ajaxData['B' + b[0] + 'C' + Category[1]].length; m++) {
                                if (ajaxData['B' + b[0] + 'C' + Category[1]][m] == Arr222[SelIdx222]) {
                                    k = m;
                                    break;
                                }
                            }
                            break;
                        case "223":
                            for (var m = 0; m < ajaxData['B' + b[0] + 'C' + Category[1]].length; m++) {
                                Arr223[parseInt(ajaxData[ajaxData['B' + b[0] + 'C' + Category[1]][m]][4], 10)] = ajaxData['B' + b[0] + 'C' + Category[1]][m];
                            }
                            if (SelIdx223 == -1 || Arr223[SelIdx223] == "") {
                                for (var m = 0; m < Arr223.length; m++) {
                                    if (Arr223[m] != "") {
                                        SelIdx223 = m;
                                        break;
                                    }
                                }
                            }
                            for (var m = 0; m < ajaxData['B' + b[0] + 'C' + Category[1]].length; m++) {
                                if (ajaxData['B' + b[0] + 'C' + Category[1]][m] == Arr223[SelIdx223]) {
                                    k = m;
                                    break;
                                }
                            }
                            break;
                        case "224":
                            for (var m = 0; m < ajaxData['B' + b[0] + 'C' + Category[1]].length; m++) {
                                Arr224[parseInt(ajaxData[ajaxData['B' + b[0] + 'C' + Category[1]][m]][4], 10)] = ajaxData['B' + b[0] + 'C' + Category[1]][m];
                            }
                            if (SelIdx224 == -1 || Arr224[SelIdx224] == "") {
                                for (var m = 0; m < Arr224.length; m++) {
                                    if (Arr224[m] != "") {
                                        SelIdx224 = m;
                                        break;
                                    }
                                }
                            }
                            for (var m = 0; m < ajaxData['B' + b[0] + 'C' + Category[1]].length; m++) {
                                if (ajaxData['B' + b[0] + 'C' + Category[1]][m] == Arr224[SelIdx224]) {
                                    k = m;
                                    break;
                                }
                            }
                            break;
                    }
                }
                if (MoreEventCount[1][0] == "") {
                    MoreEventCount[1][0] = fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreEventSingle").innerHTML;
                }
                var TmpMoreEventHTML = MoreEventCount[1][0];
                TmpMoreEventHTML = TmpMoreEventHTML.replace("OddsData0", MoreTmplList[1][parseInt(b[0], 10)].replace(/{@/g, "{@" + k).replace(/{%/g, "{%" + k));
                moreEventHTML = moreEventHTML + TmpMoreEventHTML;
                if (sKeeper_Sport[1].Market == "L") {
                    if (typeof (ajaxData['B' + b[0] + 'C' + Category[1]]) != "undefined" && ajaxData['B' + b[0] + 'C' + Category[1]] != null) {
                        if (ajaxData['B' + b[0] + 'C' + Category[1]].length > 1) {
                            var TmpMoreEventHTML = MoreEventCount[1][0];
                            TmpMoreEventHTML = TmpMoreEventHTML.replace("OddsData0", MoreTmplList[1][parseInt(b[0], 10)].replace(/{@/g, "{@" + (k + 1)).replace(/{%/g, "{%" + (k + 1)));
                            moreEventHTML = moreEventHTML + TmpMoreEventHTML;
                            if (ajaxData['B' + b[0] + 'C' + Category[1]].length > 2) {
                                var TmpMoreEventHTML = MoreEventCount[1][0];
                                TmpMoreEventHTML = TmpMoreEventHTML.replace("OddsData0", MoreTmplList[1][parseInt(b[0], 10)].replace(/{@/g, "{@" + (k + 2)).replace(/{%/g, "{%" + (k + 2)));
                                moreEventHTML = moreEventHTML + TmpMoreEventHTML;
                            }
                        }
                    }
                }
            }
            else
                if (b[0] == 144) {
                    if (typeof (ajaxData['B' + b[0] + 'C' + Category[1]]) != "undefined" && ajaxData['B' + b[0] + 'C' + Category[1]] != null) {
                        for (var k = 0; k < ajaxData['B' + b[0] + 'C' + Category[1]].length; k++) {
                            if (MoreEventCount[1][0] == "") {
                                MoreEventCount[1][0] = fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreEventSingle").innerHTML;
                            }
                            //var TmpMoreEventHTML = fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreEventSingle").innerHTML;
                            var TmpMoreEventHTML = MoreEventCount[1][0];
                            //TmpMoreEventHTML = TmpMoreEventHTML.replace("OddsData0", fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreEvent_" + b[0]).innerHTML.replace(/{@/g, "{@" + k).replace(/{%/g, "{%" + k));
                            TmpMoreEventHTML = TmpMoreEventHTML.replace("OddsData0", MoreTmplList[1][parseInt(b[0], 10)].replace(/{@/g, "{@" + k).replace(/{%/g, "{%" + k));
                            moreEventHTML = moreEventHTML + TmpMoreEventHTML;
                        }
                    }
                } else
                    if (indexOf(MultiOddsArray, b[0]) != -1) {
                        if (typeof (ajaxData['B' + b[0] + 'C' + Category[1]]) != "undefined" && ajaxData['B' + b[0] + 'C' + Category[1]] != null) {
                            for (var k = 0; k < Math.ceil(ajaxData['B' + b[0] + 'C' + Category[1]].length / 3); k++) {
                                if (MoreEventCount[1][2] == "") {
                                    MoreEventCount[1][2] = fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreEventTriple").innerHTML;
                                }
                                //var TmpMoreEventHTML = fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreEventTriple").innerHTML;
                                var TmpMoreEventHTML = MoreEventCount[1][2];
                                if ((k + 1) == Math.ceil(ajaxData['B' + b[0] + 'C' + Category[1]].length / 3)) {
                                    switch (ajaxData['B' + b[0] + 'C' + Category[1]].length % 3) {
                                        case 0:
                                            //TmpMoreEventHTML = TmpMoreEventHTML.replace("OddsData0", fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreEvent_" + b[0]).innerHTML.replace(/{@/g, "{@" + (3 * k)).replace(/{%/g, "{%" + (3 * k)));
                                            //TmpMoreEventHTML = TmpMoreEventHTML.replace("OddsData1", fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreEvent_" + b[0]).innerHTML.replace(/{@/g, "{@" + ((3 * k) + 1)).replace(/{%/g, "{%" + ((3 * k) + 1)));
                                            //TmpMoreEventHTML = TmpMoreEventHTML.replace("OddsData2", fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreEvent_" + b[0]).innerHTML.replace(/{@/g, "{@" + ((3 * k) + 2)).replace(/{%/g, "{%" + ((3 * k) + 2)));
                                            TmpMoreEventHTML = TmpMoreEventHTML.replace("OddsData0", MoreTmplList[1][parseInt(b[0], 10)].replace(/{@/g, "{@" + (3 * k)).replace(/{%/g, "{%" + (3 * k)));
                                            TmpMoreEventHTML = TmpMoreEventHTML.replace("OddsData1", MoreTmplList[1][parseInt(b[0], 10)].replace(/{@/g, "{@" + ((3 * k) + 1)).replace(/{%/g, "{%" + ((3 * k) + 1)));
                                            TmpMoreEventHTML = TmpMoreEventHTML.replace("OddsData2", MoreTmplList[1][parseInt(b[0], 10)].replace(/{@/g, "{@" + ((3 * k) + 2)).replace(/{%/g, "{%" + ((3 * k) + 2)));
                                            break;
                                        case 1:
                                            //TmpMoreEventHTML = TmpMoreEventHTML.replace("OddsData0", fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreEvent_" + b[0]).innerHTML.replace(/{@/g, "{@" + (3 * k)).replace(/{%/g, "{%" + (3 * k)));
                                            TmpMoreEventHTML = TmpMoreEventHTML.replace("OddsData0", MoreTmplList[1][parseInt(b[0], 10)].replace(/{@/g, "{@" + (3 * k)).replace(/{%/g, "{%" + (3 * k)));
                                            TmpMoreEventHTML = TmpMoreEventHTML.replace("OddsData1", "");
                                            TmpMoreEventHTML = TmpMoreEventHTML.replace("OddsData2", "");
                                            break;
                                        case 2:
                                            //TmpMoreEventHTML = TmpMoreEventHTML.replace("OddsData0", fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreEvent_" + b[0]).innerHTML.replace(/{@/g, "{@" + (3 * k)).replace(/{%/g, "{%" + (3 * k)));
                                            //TmpMoreEventHTML = TmpMoreEventHTML.replace("OddsData1", fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreEvent_" + b[0]).innerHTML.replace(/{@/g, "{@" + ((3 * k) + 1)).replace(/{%/g, "{%" + ((3 * k) + 1)));
                                            TmpMoreEventHTML = TmpMoreEventHTML.replace("OddsData0", MoreTmplList[1][parseInt(b[0], 10)].replace(/{@/g, "{@" + (3 * k)).replace(/{%/g, "{%" + (3 * k)));
                                            TmpMoreEventHTML = TmpMoreEventHTML.replace("OddsData1", MoreTmplList[1][parseInt(b[0], 10)].replace(/{@/g, "{@" + ((3 * k) + 1)).replace(/{%/g, "{%" + ((3 * k) + 1)));
                                            TmpMoreEventHTML = TmpMoreEventHTML.replace("OddsData2", "");
                                            break;
                                    }
                                } else {
                                    TmpMoreEventHTML = TmpMoreEventHTML.replace("Odds_1_dsp", CLS_LS_ON);
                                    TmpMoreEventHTML = TmpMoreEventHTML.replace("Odds_2_dsp", CLS_LS_ON);
                                    //TmpMoreEventHTML = TmpMoreEventHTML.replace("OddsData0", fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreEvent_" + b[0]).innerHTML.replace(/{@/g, "{@" + (3 * k)).replace(/{%/g, "{%" + (3 * k)));
                                    //TmpMoreEventHTML = TmpMoreEventHTML.replace("OddsData1", fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreEvent_" + b[0]).innerHTML.replace(/{@/g, "{@" + ((3 * k) + 1)).replace(/{%/g, "{%" + ((3 * k) + 1)));
                                    //TmpMoreEventHTML = TmpMoreEventHTML.replace("OddsData2", fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreEvent_" + b[0]).innerHTML.replace(/{@/g, "{@" + ((3 * k) + 2)).replace(/{%/g, "{%" + ((3 * k) + 2)));
                                    TmpMoreEventHTML = TmpMoreEventHTML.replace("OddsData0", MoreTmplList[1][parseInt(b[0], 10)].replace(/{@/g, "{@" + (3 * k)).replace(/{%/g, "{%" + (3 * k)));
                                    TmpMoreEventHTML = TmpMoreEventHTML.replace("OddsData1", MoreTmplList[1][parseInt(b[0], 10)].replace(/{@/g, "{@" + ((3 * k) + 1)).replace(/{%/g, "{%" + ((3 * k) + 1)));
                                    TmpMoreEventHTML = TmpMoreEventHTML.replace("OddsData2", MoreTmplList[1][parseInt(b[0], 10)].replace(/{@/g, "{@" + ((3 * k) + 2)).replace(/{%/g, "{%" + ((3 * k) + 2)));
                                }
                                moreEventHTML = moreEventHTML + TmpMoreEventHTML;
                            }
                        }
                    } else {
                        if (typeof (ajaxData["B" + b[0]]) != "undefined" && ajaxData["B" + b[0]] != null && ((Category[1].toString()) == ajaxData["B" + b[0]][0] || (Category[1].toString() == "0" && ajaxData["B" + b[0]][1] == "1"))) {
                            if (MoreEventCount[1][0] == "") {
                                MoreEventCount[1][0] = fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreEventSingle").innerHTML;
                            }
                            //moreEventHTML = fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreEventSingle").innerHTML;
                            moreEventHTML = MoreEventCount[1][0];
                            //moreEventHTML = moreEventHTML.replace("OddsData0", fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("moreEvent_" + b[0]).innerHTML);
                            moreEventHTML = moreEventHTML.replace("OddsData0", MoreTmplList[1][parseInt(b[0], 10)]);
                        }
                    }
        }
        var havedata = false;
        for (var j = 0; j < b.length; j++) {


            if ((indexOf(MultiOddsArray, b[j]) != -1 && typeof (ajaxData['B' + b[j] + 'C' + Category[1]]) != "undefined" && ajaxData['B' + b[j] + 'C' + Category[1]] != null) ||
                (typeof (ajaxData["B" + b[j]]) != "undefined" && ajaxData["B" + b[j]] != null && ((Category[1].toString()) == ajaxData["B" + b[j]][0] || (Category[1].toString() == "0" && ajaxData["B" + b[j]][1] == "1")))) {
                havedata = true;
                sKeeper_Sport[1].DivTmpl = moreEventHTML;
                break;
            }
        }
        if (havedata) {
            sKeeper_Sport[1].newHash = new Array();
            sKeeper_Sport[1].oHash = new Array();
            for (var j = 0; j < b.length; j++) {
                var parseOdds = false;
                if ((indexOf(MultiOddsArray, b[j]) != -1 && typeof (ajaxData['B' + b[j] + 'C' + Category[1]]) != "undefined" && ajaxData['B' + b[j] + 'C' + Category[1]] != null)) {
                    parseOdds = true;
                } else
                    if (typeof (ajaxData["B" + b[j]]) != "undefined" && ajaxData["B" + b[j]] != null) {
                        //if hotevent have MultiOddsArray,change this rule
                        if (Category[1].toString() == "0") {
                            if (ajaxData["B" + b[j]][1] == "1") {
                                parseOdds = true;
                            }
                        } else {
                            parseOdds = true;
                        }
                    }
                if (parseOdds) {
                    for (var k = 1; k < MultiSportODDS_DEF[b[j]].length; k++) {
                        if (typeof sKeeper_Sport[1].newHash[MultiSportODDS_DEF[b[j]][k] + "_Cls"] == "undefined" || sKeeper_Sport[1].newHash[MultiSportODDS_DEF[b[j]][k] + "_Cls"] == "") {

                            if (sKeeper_Sport[1].newHash[MultiSportODDS_DEF[b[j]][k]] == "") {
                                sKeeper_Sport[1].newHash[MultiSportODDS_DEF[b[j]][k] + "_Cls"] = "UdrDogOddsClass";
                            } else {
                                sKeeper_Sport[1].newHash[MultiSportODDS_DEF[b[j]][k] + "_Cls"] = "UdrDogOddsClass" + sBtn;
                            }

                        }
                    }

                    for (var k = 1; k < mMultiSportODDS_DEF["B" + b[j]].length; k++) {
                        if (typeof sKeeper_Sport[1].newHash[mMultiSportODDS_DEF["B" + b[j]][k] + "_Cls"] == "undefined" || sKeeper_Sport[1].newHash[mMultiSportODDS_DEF["B" + b[j]][k] + "_Cls"] != "") {

                            if (sKeeper_Sport[1].newHash[mMultiSportODDS_DEF["B" + b[j]][k]] == "") {
                                sKeeper_Sport[1].newHash[mMultiSportODDS_DEF["B" + b[j]][k] + "_Cls"] = "UdrDogOddsClass";
                            } else {
                                sKeeper_Sport[1].newHash[mMultiSportODDS_DEF["B" + b[j]][k] + "_Cls"] = "UdrDogOddsClass" + sBtn;
                            }
                        }
                    }
                    if (indexOf(MultiOddsArray, b[j]) != -1) {
                        sKeeper_Sport[1].newHash = new Array();
                        sKeeper_Sport[1].oHash = new Array();
                        var stop = false;
                        var Cnt = 0;
                        for (var k = 0; k < ajaxData['B' + b[j] + 'C' + Category[1]].length; k++) {
                            if (stop) {
                                break;
                            }
                            switch (b[j]) {
                                case "221":
                                    if (sKeeper_Sport[1].Market != "L") {
                                        parseOdds = ajaxData['B' + b[j] + 'C' + Category[1]][k] == Arr221[SelIdx221];
                                        if (parseOdds) {
                                            stop = true;
                                        }
                                    }
                                    else {
                                        Cnt++;
                                        if (Cnt >= 3) {
                                            stop = true;
                                        }
                                    }
                                    break;
                                case "222":
                                    if (sKeeper_Sport[1].Market != "L") {
                                        parseOdds = ajaxData['B' + b[j] + 'C' + Category[1]][k] == Arr222[SelIdx222];
                                        if (parseOdds) {
                                            //k = SelIdx222;
                                            stop = true;
                                        }
                                    }
                                    else {
                                        Cnt++;
                                        if (Cnt >= 3) {
                                            stop = true;
                                        }
                                    }
                                    break;
                                case "223":
                                    if (sKeeper_Sport[1].Market != "L") {
                                        parseOdds = ajaxData['B' + b[j] + 'C' + Category[1]][k] == Arr223[SelIdx223];
                                        if (parseOdds) {
                                            //k = SelIdx223;
                                            stop = true;
                                        }
                                    }
                                    else {
                                        Cnt++;
                                        if (Cnt >= 3) {
                                            stop = true;
                                        }
                                    }
                                    break;
                                case "224":
                                    if (sKeeper_Sport[1].Market != "L") {
                                        parseOdds = ajaxData['B' + b[j] + 'C' + Category[1]][k] == Arr224[SelIdx224];
                                        if (parseOdds) {
                                            //k = SelIdx224;
                                            stop = true;
                                        }
                                    }
                                    else {
                                        Cnt++;
                                        if (Cnt >= 3) {
                                            stop = true;
                                        }
                                    }
                                    break;
                                default:
                                    parseOdds = true;
                            }

                            if (parseOdds) {

                                sKeeper_Sport[1].setDatas(ajaxData[ajaxData['B' + b[j] + 'C' + Category[1]][k]], addStr(mMultiSportODDS_DEF["B" + b[j]], k));
                                //ajaxData[ajaxData['B' + b[j] + 'C' + Category[1]][k]]

                                if (typeof (oajaxData[1][ajaxData['B' + b[j] + 'C' + Category[1]][k]]) != "undefined") {
                                    if (oajaxData[1][ajaxData['B' + b[j] + 'C' + Category[1]][k]].toString() != ajaxData[ajaxData['B' + b[j] + 'C' + Category[1]][k]].toString()) {
                                        sKeeper_Sport[1].newHash[k + "Changed_" + b[j]] = CLS_UPD;
                                    }
                                    else {
                                        sKeeper_Sport[1].newHash[k + "Changed_" + b[j]] = "";
                                    }
                                }
                                sKeeper_Sport[1].oHash[k + "MatchId"] = sKeeper_Sport[1].MatchId;
                                sKeeper_Sport[1].newHash[k + "isParlay"] = sKeeper_Sport[1].isParlay;
                                if (sKeeper_Sport[1].Market == "L") {
                                    sKeeper_Sport[1].newHash[k + "LorD"] = "liveligh";
                                } else {
                                    sKeeper_Sport[1].newHash[k + "LorD"] = "bgcpe";
                                }
                                switch (b[j]) {
                                    case "221":
                                        for (var m = 0; m < Arr221.length; m++) {
                                            if (Arr221[m] == "") {
                                                sKeeper_Sport[1].newHash[k + "disable" + m] = "disable";
                                            }
                                            else {
                                                sKeeper_Sport[1].newHash[k + "disable" + m] = "";
                                            }
                                        }
                                        var TimeArr = genTimeRange(b[j], parseInt(sKeeper_Sport[1].oHash[k + "Value_221"], 10));
                                        if (sKeeper_Sport[1].Market == "L") {
                                            sKeeper_Sport[1].newHash[k + "LTime"] = TimeArr[0];
                                            sKeeper_Sport[1].newHash[k + "DTime"] = CLS_LS_OFF;
                                        }
                                        else {
                                            sKeeper_Sport[1].newHash[k + "DTime"] = CLS_LS_ON;
                                            sKeeper_Sport[1].newHash[k + "LTime"] = "";
                                            sKeeper_Sport[1].newHash[k + "TimeRange"] = TimeArr[0];
                                            sKeeper_Sport[1].newHash[k + "TimeRange_txt"] = TimeArr[1];
                                            sKeeper_Sport[1].newHash[k + "TimeRange_title"] = TimeArr[2];
                                        }
                                        break;
                                    case "222":
                                        for (var m = 0; m < Arr222.length; m++) {
                                            if (Arr222[m] == "") {
                                                sKeeper_Sport[1].newHash[k + "disable" + m] = "disable";
                                            }
                                            else {
                                                sKeeper_Sport[1].newHash[k + "disable" + m] = "";
                                            }
                                        }
                                        var TimeArr = genTimeRange(b[j], parseInt(sKeeper_Sport[1].oHash[k + "Value_222"], 10));
                                        if (sKeeper_Sport[1].Market == "L") {
                                            sKeeper_Sport[1].newHash[k + "LTime"] = TimeArr[0];
                                            sKeeper_Sport[1].newHash[k + "DTime"] = CLS_LS_OFF;
                                        }
                                        else {
                                            sKeeper_Sport[1].newHash[k + "DTime"] = CLS_LS_ON;
                                            sKeeper_Sport[1].newHash[k + "LTime"] = "";
                                            sKeeper_Sport[1].newHash[k + "TimeRange"] = TimeArr[0];
                                            sKeeper_Sport[1].newHash[k + "TimeRange_txt"] = TimeArr[1];
                                            sKeeper_Sport[1].newHash[k + "TimeRange_title"] = TimeArr[2];
                                        }
                                        break;
                                    case "223":
                                        for (var m = 0; m < Arr223.length; m++) {
                                            if (Arr223[m] == "") {
                                                sKeeper_Sport[1].newHash[k + "disable" + m] = "disable";
                                            }
                                            else {
                                                sKeeper_Sport[1].newHash[k + "disable" + m] = "";
                                            }
                                        }
                                        var TimeArr = genTimeRange(b[j], parseInt(sKeeper_Sport[1].oHash[k + "Value_223"], 10));
                                        if (sKeeper_Sport[1].Market == "L") {
                                            sKeeper_Sport[1].newHash[k + "LTime"] = TimeArr[0];
                                            sKeeper_Sport[1].newHash[k + "DTime"] = CLS_LS_OFF;
                                        }
                                        else {
                                            sKeeper_Sport[1].newHash[k + "DTime"] = CLS_LS_ON;
                                            sKeeper_Sport[1].newHash[k + "LTime"] = "";
                                            sKeeper_Sport[1].newHash[k + "TimeRange"] = TimeArr[0];
                                            sKeeper_Sport[1].newHash[k + "TimeRange_txt"] = TimeArr[1];
                                            sKeeper_Sport[1].newHash[k + "TimeRange_title"] = TimeArr[2];
                                        }
                                        break;
                                    case "224":
                                        for (var m = 0; m < Arr224.length; m++) {
                                            if (Arr224[m] == "") {
                                                sKeeper_Sport[1].newHash[k + "disable" + m] = "disable";
                                            }
                                            else {
                                                sKeeper_Sport[1].newHash[k + "disable" + m] = "";
                                            }
                                        }
                                        var TimeArr = genTimeRange(b[j], parseInt(sKeeper_Sport[1].oHash[k + "Value_224"], 10));
                                        if (sKeeper_Sport[1].Market == "L") {
                                            sKeeper_Sport[1].newHash[k + "LTime"] = TimeArr[0];
                                            sKeeper_Sport[1].newHash[k + "DTime"] = CLS_LS_OFF;
                                        }
                                        else {
                                            sKeeper_Sport[1].newHash[k + "DTime"] = CLS_LS_ON;
                                            sKeeper_Sport[1].newHash[k + "LTime"] = "";
                                            sKeeper_Sport[1].newHash[k + "TimeRange"] = TimeArr[0];
                                            sKeeper_Sport[1].newHash[k + "TimeRange_txt"] = TimeArr[1];
                                            sKeeper_Sport[1].newHash[k + "TimeRange_title"] = TimeArr[2];
                                        }
                                        break;
                                    //case "17":
                                    //    sKeeper_Sport[1].newHash[k + "Odds_" + b[j] + "_H_Cls"] = GetOddsChangeClass(sKeeper_Sport[1].oHash[k + "Odds_" + b[j] + "_H"]);
                                    //    sKeeper_Sport[1].newHash[k + "Odds_" + b[j] + "_A_Cls"] = GetOddsChangeClass(sKeeper_Sport[1].oHash[k + "Odds_" + b[j] + "_A"]);
                                    //    if (sKeeper_Sport[1].oHash[k + "Value_" + b[j]] != "" && parseFloat(sKeeper_Sport[1].oHash[k + "Value_" + b[j]]) != 0) {
                                    //        if (sKeeper_Sport[1].oHash[k + "FavorF_" + b[j]] == "h") {
                                    //            sKeeper_Sport[1].newHash[k + "Value_" + b[j] + "_A"] = "(+" + sKeeper_Sport[1].oHash[k + "Value_" + b[j]] + ")";
                                    //            sKeeper_Sport[1].newHash[k + "Value_" + b[j] + "_H"] = "(-" + sKeeper_Sport[1].oHash[k + "Value_" + b[j]] + ")";
                                    //        } else {
                                    //            sKeeper_Sport[1].newHash[k + "Value_" + b[j] + "_A"] = "(-" + sKeeper_Sport[1].oHash[k + "Value_" + b[j]] + ")";
                                    //            sKeeper_Sport[1].newHash[k + "Value_" + b[j] + "_H"] = "(+" + sKeeper_Sport[1].oHash[k + "Value_" + b[j]] + ")";
                                    //        }
                                    //    } else {
                                    //        sKeeper_Sport[1].newHash[k + "Value_" + b[j] + "_A"] = "(0)";
                                    //        sKeeper_Sport[1].newHash[k + "Value_" + b[j] + "_H"] = "(0)";
                                    //    }
                                    //    break;
                                    //case "18":
                                    case "197":
                                    case "198":
                                    case "204":
                                    case "205":
                                        sKeeper_Sport[1].newHash[k + "Odds_" + b[j] + "_O_Cls"] = GetOddsChangeClass(sKeeper_Sport[1].oHash[k + "Odds_" + b[j] + "_O"]);
                                        sKeeper_Sport[1].newHash[k + "Odds_" + b[j] + "_U_Cls"] = GetOddsChangeClass(sKeeper_Sport[1].oHash[k + "Odds_" + b[j] + "_U"]);
                                        break;
                                }
                            }
                        }
                    } else {
                        if (indexOf(CheckZeroOddsArray, b[j]) != -1) {
                            var ChkDataArr = new Array();
                            ChkDataArr = ChkDataArr.concat(ajaxData["B" + b[j]]);
                            if (ChkDataArr.slice(4, ChkDataArr.length).toString().replace(/,/g, "") != "") {
                                for (var iZero = 4; iZero < ChkDataArr.length; iZero++) {
                                    if (ChkDataArr[iZero] == "") {
                                        ChkDataArr[iZero] = "--";
                                    }
                                }

                            }
                            sKeeper_Sport[1].setDatas(ChkDataArr, mMultiSportODDS_DEF["B" + b[j]]);
                        }
                        else {
                            sKeeper_Sport[1].setDatas(ajaxData["B" + b[j]], mMultiSportODDS_DEF["B" + b[j]]);
                        }


                        if (typeof (oajaxData[1]["B" + b[j]]) != "undefined") {
                            if (oajaxData[1]["B" + b[j]].toString() != ajaxData["B" + b[j]].toString()) {
                                sKeeper_Sport[1].newHash["Changed_" + b[j]] = CLS_UPD;
                            } else {
                                sKeeper_Sport[1].newHash["Changed_" + b[j]] = "";
                            }
                        }
                        //sKeeper_Sport[1].newHash["TeamH"] = TeamH[1];
                        //sKeeper_Sport[1].newHash["TeamA"] = TeamA[1];
                        //sKeeper_Sport[1].oHash["MatchId"] = sKeeper_Sport[1].MatchId;
                        sKeeper_Sport[1].newHash["isParlay"] = sKeeper_Sport[1].isParlay;
                        if (sKeeper_Sport[1].Market == "L") {
                            sKeeper_Sport[1].newHash["LorD"] = "liveligh";
                        } else {
                            sKeeper_Sport[1].newHash["LorD"] = "bgcpe";
                        }

                        switch (b[j]) {
                            case "17":
                                sKeeper_Sport[1].newHash["Odds_" + b[j] + "_H_Cls"] = getOddsClass(sKeeper_Sport[1].oHash["Odds_" + b[j] + "_H"]);
                                sKeeper_Sport[1].newHash["Odds_" + b[j] + "_A_Cls"] = getOddsClass(sKeeper_Sport[1].oHash["Odds_" + b[j] + "_A"]);
                                if (sKeeper_Sport[1].oHash["Value_" + b[j]] != "" && parseFloat(sKeeper_Sport[1].oHash["Value_" + b[j]]) != 0) {
                                    if (sKeeper_Sport[1].oHash["FavorF_" + b[j]] == "h") {
                                        sKeeper_Sport[1].newHash["Value_" + b[j] + "_A"] = "(+" + sKeeper_Sport[1].oHash["Value_" + b[j]] + ")";
                                        sKeeper_Sport[1].newHash["Value_" + b[j] + "_H"] = "(-" + sKeeper_Sport[1].oHash["Value_" + b[j]] + ")";
                                    } else {
                                        sKeeper_Sport[1].newHash["Value_" + b[j] + "_A"] = "(-" + sKeeper_Sport[1].oHash["Value_" + b[j]] + ")";
                                        sKeeper_Sport[1].newHash["Value_" + b[j] + "_H"] = "(+" + sKeeper_Sport[1].oHash["Value_" + b[j]] + ")";
                                    }
                                } else {
                                    sKeeper_Sport[1].newHash["Value_" + b[j] + "_A"] = "(0)";
                                    sKeeper_Sport[1].newHash["Value_" + b[j] + "_H"] = "(0)";
                                }
                                break;
                            case "18":
                                sKeeper_Sport[1].newHash["Odds_" + b[j] + "_O_Cls"] = getOddsClass(sKeeper_Sport[1].oHash["Odds_" + b[j] + "_O"]);
                                sKeeper_Sport[1].newHash["Odds_" + b[j] + "_U_Cls"] = getOddsClass(sKeeper_Sport[1].oHash["Odds_" + b[j] + "_U"]);
                                break;
                            case "2":
                            case "12":
                            case "184":
                            case "194":
                            case "203":
                                sKeeper_Sport[1].newHash["Odds_" + b[j] + "_O_Cls"] = GetOddsChangeClass(sKeeper_Sport[1].oHash["Odds_" + b[j] + "_O"]);
                                sKeeper_Sport[1].newHash["Odds_" + b[j] + "_E_Cls"] = GetOddsChangeClass(sKeeper_Sport[1].oHash["Odds_" + b[j] + "_E"]);
                                break;
                            case "401":
                            case "402":
                            case "403":
                            case "404":
                                sKeeper_Sport[1].newHash["Odds_" + b[j] + "_O_Cls"] = GetOddsChangeClass(sKeeper_Sport[1].oHash["Odds_" + b[j] + "_O"]);
                                sKeeper_Sport[1].newHash["Odds_" + b[j] + "_U_Cls"] = GetOddsChangeClass(sKeeper_Sport[1].oHash["Odds_" + b[j] + "_U"]);
                                break;
                            case "216":
                            case "217":
                                var FirstEmpty = true;
                                for (var iplayer = 1; iplayer <= 99; iplayer++) {
                                    var sIdx = iplayer.toString();
                                    if (iplayer < 10) {
                                        sIdx = "0" + sIdx;
                                    }

                                    if (typeof (sKeeper_Sport[1].oHash["Odds_" + b[j] + "_I" + sIdx]) != "undefined" && sKeeper_Sport[1].oHash["Odds_" + b[j] + "_I" + sIdx] != "") {
                                        sKeeper_Sport[1].newHash["Odds_P" + sIdx + "_dsp"] = CLS_LS_ON;

                                        if (typeof (oajaxData[1][sKeeper_Sport[1].oHash["OddsId_" + b[j]] + sKeeper_Sport[1].oHash["Odds_" + b[j] + "_C" + sIdx]]) != "undefined" && oajaxData[1][sKeeper_Sport[1].oHash["OddsId_" + b[j]] + sKeeper_Sport[1].oHash["Odds_" + b[j] + "_C" + sIdx]] != sKeeper_Sport[1].oHash["Odds_" + b[j] + "_P" + sIdx] + sKeeper_Sport[1].oHash["Odds_" + b[j] + "_I" + sIdx]) {
                                            sKeeper_Sport[1].newHash["Changed_" + b[j] + "_P" + sIdx] = CLS_UPD;
                                        } else {
                                            sKeeper_Sport[1].newHash["Changed_" + b[j] + "_P" + sIdx] = "";
                                        }
                                    } else {
                                        if (FirstEmpty) {
                                            if (iplayer % 2 == 0) {
                                                sKeeper_Sport[1].newHash["Odds_P" + sIdx + "_dsp"] = CLS_LS_ON;
                                            } else {
                                                sKeeper_Sport[1].newHash["Odds_P" + sIdx + "_dsp"] = CLS_LS_OFF;
                                            }
                                            FirstEmpty = false;
                                        } else {
                                            sKeeper_Sport[1].newHash["Odds_P" + sIdx + "_dsp"] = CLS_LS_OFF;
                                        }
                                    }
                                }
                                break;
                            case "28":
                                sKeeper_Sport[1].newHash["Odds_28_hdp"] = sKeeper_Sport[1].oHash["Odds_28_hdpx"].replace(" ", "");
                                break;
                        }
                    }
                }
            }
            sKeeper_Sport[1].AppendOddsTable();
        }
    }
    //if (sKeeper_Sport[1].Market != "L") 
    //{
    //var OddsHTML = sKeeper_Sport[1].TableContainer.innerHTML;
    var OddsHTML = sKeeper_Sport[1].OddsHTML;
    if (MoreTmplCategory[1] == "") {
        MoreTmplCategory[1] = fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("Category_1").innerHTML
    }
    //var Category_1 = fFrame.document.getElementById("MorePop_tmpl").contentWindow.document.getElementById("Category_1").innerHTML;
    var Category_1 = MoreTmplCategory[1];
    Category_1 = Category_1.replace("{@OddsHTML}", OddsHTML);
    for (var i = 1; i < CategoryList[1].length > 0; i++) {
        if (CategoryList[1][i] - CategoryList1X2[i] > 0) {
            Category_1 = Category_1.replace("{@category_disp" + i.toString() + "}", CLS_LS_ON);
        } else {
            Category_1 = Category_1.replace("{@category_disp" + i.toString() + "}", CLS_LS_OFF);
        }
        if (Category[1] == i) {
            Category_1 = Category_1.replace("{@current" + i.toString() + "}", "current");
        } else {
            Category_1 = Category_1.replace("{@current" + i.toString() + "}", "");
        }
    }
    if (haveHotEvent) {
        Category_1 = Category_1.replace("{@category_disp0}", CLS_LS_ON);
    } else {
        Category_1 = Category_1.replace("{@category_disp0}", CLS_LS_OFF);
    }
    if (Category[1] == 0) {
        Category_1 = Category_1.replace("{@current0}", "current");
    } else {
        Category_1 = Category_1.replace("{@current0}", "");
    }
    //sKeeper_Sport[1].TableContainer.innerHTML = Category_1;
    sKeeper_Sport[1].OddsHTML = Category_1;
    //}

    sKeeper_Sport[1].TableContainer.innerHTML = sKeeper_Sport[1].OddsHTML;

    oajaxData[1] = new Object();
    for (var o in ajaxData) oajaxData[1][o] = ajaxData[o];
    if (typeof (ajaxData["B216"]) != "undefined" && ajaxData["B216"] != null) {
        for (var idx = 6; idx < ajaxData["B216"].length; idx += 3) {
            oajaxData[1][ajaxData["B216"][3] + ajaxData["B216"][idx - 2]] = ajaxData["B216"][idx - 1] + ajaxData["B216"][idx];
        }
    }
    if (typeof (ajaxData["B217"]) != "undefined" && ajaxData["B217"] != null) {
        for (var idx = 6; idx < ajaxData["B217"].length; idx += 3) {
            oajaxData[1][ajaxData["B217"][3] + ajaxData["B217"][idx - 2]] = ajaxData["B217"][idx - 1] + ajaxData["B217"][idx];
        }
    }
    Sport_More_End[1] = true;
    if (bFromBtnClick[1]) {
        /*if (typeof (arr_ShowMixParlay) == "object") {
        //parlay refresh
            
        }
        else
        if (typeof (arr_OddsKeeper) == "object") {
        if (arr_OddsKeeper["1"] != null) {
        arr_OddsKeeper["1"].paintOddsTable();
        paintRefreshBtn("l");
        }
        }
        else {
        if (g_OddsKeeper_L != null) {
        g_OddsKeeper_L.paintOddsTable();
        paintRefreshBtn("L");
        }
        if (g_OddsKeeper_D != null) {
        g_OddsKeeper_D.paintOddsTable();
        paintRefreshBtn("D");
        }
        }*/
        //ShowMore(1);
        bFromBtnClick[1] = false;
    }

    if (bOpen1st[1]) {
        /*
        bOpen1st[1] = false;
        ShowMore(1);
        SetHTFTCSSelOdds();
        FocusMoreTd();
        */
        bOpen1st[1] = false;
        var tdobj = $("td.moreBetType.tag.displayOn");
        tdobj.html("<div id='moreAddDiv'>" + sKeeper_Sport[1].OddsHTML + "</div>");
        //$("#moreAddDiv").hide();
        //$("#moreAddDiv").slideDown("normal", function ()
        //{

        SetHTFTCSSelOdds();
        FocusMoreTd();
        //});

    } else {
        var tdobj = $("td.moreBetType.tag.displayOn");
        tdobj.html("<div id='moreAddDiv'>" + sKeeper_Sport[1].OddsHTML + "</div>");
        SetHTFTCSSelOdds();
        if (dataNull) {
            FocusMoreTd();
        }
    }

}

function addStr(arr, str) {
    var tmp_arr = new Array();
    for (var i = 0; i < arr.length; i++) {
        tmp_arr[i] = str + arr[i];
    }
    return tmp_arr;
}


function minuteSel(Sender, bettype, min) {
    if (Sender.className.indexOf("disable") != -1) {
        return;
    }
    switch (bettype) {
        case "221":
            SelIdx221 = parseInt(min, 10);
            break;
        case "222":
            SelIdx222 = parseInt(min, 10);
            break;
        case "223":
            SelIdx223 = parseInt(min, 10);
            break;
        case "224":
            SelIdx224 = parseInt(min, 10);
            break;
    }
}

function SetHTFTCSSelOdds() {
    if (htSession == '' && ftSession != "") {
        htSession = '0:0';
    }
    if (htSession != "" && ftSession != "" && document.getElementById('HalfTime_CorrectScore416') != null) {
        document.getElementById('HalfTime_CorrectScore416').value = htSession.replace('H', '');
        document.getElementById('HalfTime_CorrectScore416_Txt').title = document.getElementById("H" + htSession).innerHTML;
        document.getElementById('HalfTime_CorrectScore416_Txt').innerHTML = document.getElementById("H" + htSession).innerHTML;

        var findArray = checkFullTimeArray(document.getElementById('HalfTime_CorrectScore416').value);

        for (var i = 0; i < FullTimeAllArray416.length; i++) {
            document.getElementById(FullTimeAllArray416[i]).style.display = 'none';
        }

        for (var j = 0; j < findArray.length; j++) {
            document.getElementById(findArray[j]).style.display = '';
        }

        document.getElementById('FullTime_CorrectScore416').value = ftSession.replace('F', '');
        document.getElementById('FullTime_CorrectScore416_Txt').title = document.getElementById("F" + ftSession).innerHTML;
        document.getElementById('FullTime_CorrectScore416_Txt').innerHTML = document.getElementById("F" + ftSession).innerHTML;

        changeOddsSelect();
    }
}

function CheckHaveOdds(Sender) {
    if (Sender.innerHTML.match(/[0-9]/g) == null) {
        Sender.style.cursor = "default";
        return false;
    } else {
        Sender.style.cursor = "pointer";
        return true;
    }
}

function mover(bettype, classname1, classname2) {
    //var obj = document.getElementsByClassName("mover" + bettype);
    var obj = $(".mover" + bettype);
    for (var i = 0; i < obj.length; i++) {
        obj[i].className = obj[i].className.replace(classname1, classname2);
    }
}

function changeFullTimeSelect(changeKey) {
    var findArray = checkFullTimeArray(changeKey);

    document.getElementById('FullTime_CorrectScore416').value = findArray[0].replace('F', '');
    document.getElementById('FullTime_CorrectScore416_Txt').title = document.getElementById(findArray[0]).innerHTML;
    document.getElementById('FullTime_CorrectScore416_Txt').innerHTML = document.getElementById(findArray[0]).innerHTML;

    for (var i = 0; i < FullTimeAllArray416.length; i++) {
        document.getElementById(FullTimeAllArray416[i]).style.display = 'none';
    }

    for (var j = 0; j < findArray.length; j++) {
        document.getElementById(findArray[j]).style.display = '';
    }

    htSession = document.getElementById('HalfTime_CorrectScore416').value;

    changeOddsSelect();
}

function changeOddsSelect() {

    ftSession = document.getElementById('FullTime_CorrectScore').value;
    var OddsKey = document.getElementById('HalfTime_CorrectScore').value.replace(':', '').replace('+', 'UP') + document.getElementById('FullTime_CorrectScore').value.replace(':', '').replace('+', 'UP');

    var BetType152OddsTitle = "Odds_152_";
    var BetType152Odds = BetType152OddsTitle + OddsKey;

    for (var i = 0; i < BetType152OddArray.length; i++) {
        document.getElementById(BetType152OddsTitle + BetType152OddArray[i]).style.display = 'none';
    }

    document.getElementById(BetType152Odds).style.display = '';
}

function SwitchCategory(iDx) {
    Category[1] = iDx;
    GetSoccerMore(null);
    //ShowMore(1);
    //FocusMoreTd();
}

function changeOddsSelect() {

    ftSession = document.getElementById('FullTime_CorrectScore416').value;
    var OddsKey = document.getElementById('HalfTime_CorrectScore416').value.replace(':', '').replace('+', 'UP') + document.getElementById('FullTime_CorrectScore416').value.replace(':', '').replace('+', 'UP');

    //bettype 152
    //var BetType152OddsTitle = "Odds_152_";
    //var BetType152Odds = BetType152OddsTitle + OddsKey;

    var BetType416OddsTitle = "Odds_416_";
    var BetType416Odds = BetType416OddsTitle + OddsKey;

    //bettype 152
    //    for (var i = 0; i < BetType152OddArray.length; i++) {
    //        document.getElementById(BetType152OddsTitle + BetType152OddArray[i]).style.display = 'none';
    //    }

    for (var i = 0; i < BetType416OddArray.length; i++) {
        document.getElementById(BetType416OddsTitle + BetType416OddArray[i]).style.display = 'none';
    }

    //document.getElementById(BetType152Odds).style.display = '';
    document.getElementById(BetType416Odds).style.display = '';
}

function checkFullTimeArray(sKey) {

    var findArray = null;
    //bettype 152
    //    if (sKey == "0:0") {
    //        findArray = HTArray_00;
    //    } else if (sKey == "1:0") {
    //        findArray = HTArray_10;
    //    } else if (sKey == "0:1") {
    //        findArray = HTArray_01;
    //    } else if (sKey == "1:1") {
    //        findArray = HTArray_11;
    //    } else if (sKey == "2:0") {
    //        findArray = HTArray_20;
    //    } else if (sKey == "0:2") {
    //        findArray = HTArray_02;
    //    } else if (sKey == "2:1") {
    //        findArray = HTArray_21;
    //    } else if (sKey == "1:2") {
    //        findArray = HTArray_12;
    //    } else if (sKey == "3:0") {
    //        findArray = HTArray_30;
    //    } else if (sKey == "0:3") {
    //        findArray = HTArray_03;
    //    }
    //    /*else if (sKey == "4+") {
    //    findArray = HTArray_4UP;
    //    }*/

    switch (sKey) {
        case "0:0":
            findArray = HTArray416_00;
            break;
        case "0:1":
            findArray = HTArray416_01;
            break;
        case "0:2":
            findArray = HTArray416_02;
            break;
        case "0:3":
            findArray = HTArray416_03;
            break;
        case "1:0":
            findArray = HTArray416_10;
            break;
        case "1:1":
            findArray = HTArray416_11;
            break;
        case "1:2":
            findArray = HTArray416_12;
            break;
        case "1:3":
            findArray = HTArray416_13;
            break;
        case "2:0":
            findArray = HTArray416_20;
            break;
        case "2:1":
            findArray = HTArray416_21;
            break;
        case "2:2":
            findArray = HTArray416_22;
            break;
        case "2:3":
            findArray = HTArray416_23;
            break;
        case "3:0":
            findArray = HTArray416_30;
            break;
        case "3:1":
            findArray = HTArray416_31;
            break;
        case "3:2":
            findArray = HTArray416_32;
            break;
        default:
        //case "3:3":
            findArray = HTArray416_33;
            break;
        /*default:
            findArray = HTArray416_AOS;
            break;*/
    }

    return findArray;
}

function sortObject(o) {
    var sorted = {},
        key, a = [];

    for (key in o) {
        if (o.hasOwnProperty(key)) {
            a.push(key);
        }
    }

    a.sort();

    for (key = 0; key < a.length; key++) {
        sorted[a[key]] = o[a[key]];
    }
    return sorted;
}

function GetOddsChangeClass(odds) {
    if (odds == "") {
        return getOddsClass(odds);
    } else {
        var sBtn = "";
        if (fFrame.EnableArrowOddsChange) {
            sBtn = " OddsBtn";
        }
        return getOddsClass(odds) + sBtn;
    }

}

function TimeRangeSelecter(id) {
    if (PreSelIdx221 != SelIdx221 || PreSelIdx222 != SelIdx222 || PreSelIdx223 != SelIdx223 || PreSelIdx224 != SelIdx224) {
        PreSelIdx221 = SelIdx221;
        PreSelIdx222 = SelIdx222;
        PreSelIdx223 = SelIdx223;
        PreSelIdx224 = SelIdx224;
        GetSoccerMore(null);
        //        var SelIdx1 = 0;
        //        var SelIdx2 = 0;
        //        var SelIdxTXT1 = "";
        //        var SelIdxTXT2 = "";
        //        switch (id.replace("TimeRange_",""))
        //        {
        //            case "221":
        //                SelIdx1 = SelIdx221;
        //                if (SelIdx1 >= 10)
        //                {
        //                    SelIdxTXT1 = SelIdx1 + "";
        //                }
        //                else
        //                {
        //                    SelIdxTXT1 = "0" + SelIdx1;
        //                }
        //                SelIdx2 = SelIdx1;
        //                SelIdxTXT2 = SelIdxTXT1;
        //                break;
        //            case "222":
        //                SelIdx1 = SelIdx222;
        //                SelIdx2 = SelIdx1 + 4;
        //                if (SelIdx1 >= 10)
        //                {
        //                    SelIdxTXT1 = SelIdx1 + "";
        //                }
        //                else
        //                {
        //                    SelIdxTXT1 = "0" + SelIdx1;
        //                }
        //                if (SelIdx2 >= 10)
        //                {
        //                    SelIdxTXT2 = SelIdx2 + "";
        //                }
        //                else
        //                {
        //                    SelIdxTXT2 = "0" + SelIdx2;
        //                }
        //                break;
        //            case "223":
        //                SelIdx1 = SelIdx223;
        //                if (SelIdx1 >= 10)
        //                {
        //                    SelIdxTXT1 = SelIdx1 + "";
        //                }
        //                else
        //                {
        //                    SelIdxTXT1 = "0" + SelIdx1;
        //                }
        //                SelIdx2 = SelIdx1;
        //                SelIdxTXT2 = SelIdxTXT1;
        //                break;
        //            case "224":
        //                SelIdx1 = SelIdx224;
        //                SelIdx2 = SelIdx1 + 4;
        //                if (SelIdx1 >= 10)
        //                {
        //                    SelIdxTXT1 = SelIdx1 + "";
        //                }
        //                else
        //                {
        //                    SelIdxTXT1 = "0" + SelIdx1;
        //                }
        //                if (SelIdx2 >= 10)
        //                {
        //                    SelIdxTXT2 = SelIdx2 + "";
        //                }
        //                else
        //                {
        //                    SelIdxTXT2 = "0" + SelIdx2;
        //                }
        //                break;
        //            default:
        //                return;
        //        }
        //        var obj = document.getElementById("Sel" + id);
        //        obj.innerHTML = SelIdxTXT1 + ":00~" + SelIdxTXT2 + ":59";
        //        obj = document.getElementById("Select" + id);
        //        obj.innerHTML = SelIdxTXT1 + "'";
        //        obj.title = SelIdxTXT1 + ":00";
        //        //id=TimeRange_221  SelTimeRange_221 xx:00~xx:59
        //        //SelectTimeRange_221 title xx:00   innetHTML xx'
    }
    else {
        var obj = document.getElementById(id);
        if (obj.style.visibility == 'visible') {
            obj.style.visibility = 'hidden';
        } else {
            obj.style.visibility = 'visible';
        }
    }
}

function genTimeRange(bettype, selTime) {
    var SelIdx1 = 0;
    var SelIdx2 = 0;
    var SelIdxTXT1 = "";
    var SelIdxTXT2 = "";
    if (bettype == "221" || bettype == "223") {
        SelIdx1 = selTime;
        if (SelIdx1 >= 10) {
            SelIdxTXT1 = SelIdx1 + "";
        }
        else {
            SelIdxTXT1 = "0" + SelIdx1;
        }
        SelIdx2 = SelIdx1;
        SelIdxTXT2 = SelIdxTXT1;

    }
    else {
        SelIdx1 = selTime;
        SelIdx2 = SelIdx1 + 4;
        if (SelIdx1 >= 10) {
            SelIdxTXT1 = SelIdx1 + "";
        }
        else {
            SelIdxTXT1 = "0" + SelIdx1;
        }
        if (SelIdx2 >= 10) {
            SelIdxTXT2 = SelIdx2 + "";
        }
        else {
            SelIdxTXT2 = "0" + SelIdx2;
        }
    }
    var TXT0 = SelIdxTXT1 + ":00~" + SelIdxTXT2 + ":59";
    var TXT1 = SelIdxTXT1 + "'";
    var TXT2 = SelIdxTXT1 + ":00";
    return new Array(TXT0, TXT1, TXT2);
}