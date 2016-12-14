var Category = "HotGames";
var Vendor = "AllVendor";
var Theme = "AllTheme";
var newGame = false;
var preRowId = 0;
var View = 0;
var SortView = 0;
var IsChangeSort = 0;

//New Items
$(document).ready(function () {
    CGInitEvents();
    CGInitData();
    CGSorting("");   /*游戏列表排序*/
    CGCatFilter();
  
    CGUpdateFilter();

    var catObj = $("#" + Category).parent();
    var imgSrc = catObj.find("img").attr("src");
    catObj.addClass("tdCategoryBtnChecked");
    catObj.find("img").attr("src", imgSrc.replace("arrow-blue", "arrow-white"));

    $("#AllTheme").addClass("ThemeBtnChecked");
    $("#AllVendor").addClass("VendorBtnChecked");

    // Hide LX Journey to the west game
    $("#cgbox396").parent().parent().parent().hide();
});



function CGInitData() {  
    $(window).scroll(sticky_relocate);

    $(".BoxView").addClass("boxViewChecked");   /*显示华丽版*/

    var pathVal = window.location.pathname.split('/').pop().replace(/-/g, "").toLowerCase();
   /* window.location.pathname.返回URL的域名后的部分*/
   
    if (pathVal == "videoslots") {
        pathVal = "VideoSlot";
    }

    else if (pathVal == "3dslots") {
        pathVal = "3DSlots";
    }
    else if (pathVal == "classicslots") {
        pathVal = "ClassicSlot";
    }
    else if (pathVal == "progressiveslots") {
        pathVal = "ProgressiveSlots";
    }
    else if (pathVal == "multiplayerslots") {
        pathVal = "MultiplayerSlots";
    }
    else if (pathVal == "chineseslots") {
        pathVal = "ChineseSlots";
    }
    else if (pathVal == "tablegames") {
        pathVal = "TableGames";
    }
    else if (pathVal == "othergames") {
        pathVal = "OtherGames";
    }
    else if (pathVal == "coldgames") {
        pathVal = "ColdGame";
    }
    else if (pathVal == "allgames") {
        pathVal = "AllGames";
    }
    else if (pathVal == "newgames") {
        pathVal = "NewGames";
    }
    else {
        pathVal = "HotGames";
    }

    Category = pathVal;   

    SortView = -1;
    var cgtimeout = 2000;

    if (window.attachEvent && !window.addEventListener) {
        cgtimeout = 10000;  // For IE8, set it to 10 seconds as the page load is slow for jackpot
    }

    setTimeout(function () {

        $("#cgjackpot > div").each(function () {
            var cgjpctrl = $(".cggamedata[data-dbid='" + $(this).attr("data-dbid") + "']");
            cgjpctrl.find(".cgjackpotamt").text($(this).text());
            cgjpctrl.find(".cgjackpot").show();
        });

        $("#cgJackpotMGS").remove();

        $(".cgjackpotamt").each(function () {
            var y = $(this).attr("id");
            var x = $("#" + y).text().trim();

            if (x.length > 0) {
                incrementalJackpot(y);
            }
        });

        UpdateSlotJackpot();
    }, cgtimeout);

    // Cache the elements we'll need
    var menu = $('#cssmenu');
    var menuList = menu.find('ul:first');
    var listItems = menu.find('li').not('#responsive-tab');

    // Create responsive trigger
    menuList.prepend('<li id="responsive-tab"><a href="#">Menu</a></li>');

    //Toggle menu visibility
    menu.on('click', '#responsive-tab', function () {
        listItems.slideToggle('slow');
        listItems.addClass('collapsed');
    });

}



/*游戏列表控制*/


function CGInitEvents() {
     /*收藏游戏*/
    $(".cgboxfav, .cglistfav").click(function () {
        CGToggleFavo($(this));
    });
     /*鼠标掠过 半透明遮罩出现*/
    $(".cggamedata").mouseover(function () {
        $(this).find(".cgboxhover, .cglisthover").show().addClass("dimmed");
        $(this).find(".cgjackpot").addClass("cgjackpothovered");
    });
     /*鼠标离开 半透明遮罩隐藏*/
    $(".cggamedata").mouseleave(function () {
        $(this).find(".cgboxhover, .cglisthover").hide().removeClass("dimmed");
        $(this).find(".cgjackpot").removeClass("cgjackpothovered");
    });
/* 切换到盒子列表（华丽版）*/
    $(".BoxView").click(function () {
        if (View != 0) {
            $(this).addClass("boxViewChecked");
            $(".ListView").removeClass("ListViewChecked");
            View = 0;
            $(".btnPlayReal, .btnPlayDemo").css("opacity", "1").hover(function () {
                $(this).css("opacity", "1");
            }, function () {
                $(this).css("opacity", "1");
            });

            CGDisplayBox(); /*显示游戏列表*/
        }

    });
/* 切换到简洁列表*/
    $(".ListView").click(function () {
        if (View != 1) {
            $(this).addClass("ListViewChecked");
            $(".BoxView").removeClass("boxViewChecked");
            View = 1;

            $(".btnPlayReal, .btnPlayDemo").css("opacity", "0.5").hover(function () {
                $(this).css("opacity", "0.9");
            }, function () {
                $(this).css("opacity", "0.5");
            });
            //$(".expandtr, .emptyspace").hide();
            CGDisplayList();
        }
    });

    $(".AtoZView").click(function () {    //按游戏名首字母先后顺序排练,再次点击取消效果并还原.
        if (SortView != 0) {
            $(this).addClass("AtoZViewChecked");
            $(".ZtoAView").removeClass("ZtoAViewChecked");
            SortView = 0;
            CGSorting("a-z");
        }
        else {
            $(".AtoZView").removeClass("AtoZViewChecked");
            SortView = -1;
            CGSorting("");
        }
    });

    $(".ZtoAView").click(function () {
        if (SortView != 1) {
            $(this).addClass("ZtoAViewChecked");
            $(".AtoZView").removeClass("AtoZViewChecked");
            SortView = 1;
            CGSorting("z-a");
        }
        else {
            $(".ZtoAView").removeClass("ZtoAViewChecked");
            SortView = -1;
            CGSorting("");
        }
    });

    $(".Vendor").click(function () {        
        $(".Vendor").removeClass("VendorBtnChecked");
        $(this).addClass("VendorBtnChecked");

        var id = $(this).attr("id");
        Vendor = id;
        CGCatFilter();
        CGUpdateListBg();
        CGHideGameInfo();
    });

    $(".Theme").click(function () {      //选择主题

        $(".Theme").removeClass("ThemeBtnChecked");
        $(this).addClass("ThemeBtnChecked");

        var id = $(this).attr("id");
        Theme = id;
        CGCatFilter();
        CGUpdateListBg();
        CGHideGameInfo();
    });

    $(".tdCategoryBtn").mouseover(function () {
        $(this).addClass("tdCategoryBtnOver");

        if ($(this).hasClass("cattop"))
            $(this).find("img").attr("src", $(this).find("img").attr("src").replace("arrow-blue", "arrow-white"));

        if ($(this).hasClass("catbtm"))
            $(this).find("img").attr("src", $(this).find("img").attr("src").replace("_blue", "_white"));

    });

    $(".tdCategoryBtn").mouseleave(function () {
        $(this).removeClass("tdCategoryBtnOver");
        if (!$(this).hasClass("tdCategoryBtnChecked")) {

            if ($(this).hasClass("cattop"))
                $(this).find("img").attr("src", $(this).find("img").attr("src").replace("arrow-white", "arrow-blue"));

            if ($(this).hasClass("catbtm"))
                $(this).find("img").attr("src", $(this).find("img").attr("src").replace("_white", "_blue"));
        }

    });

    $(".itemtab, .itemmenu").mouseover(function () {
        $(this).parent().find(".itemmenu").show();
        $(this).parent().find(".itemtab").addClass("itemtabover");
        var img = $(this).parent().find(".itemtab > a > img");
        img.attr("src", img.attr("src").replace('arrow_down_black', 'arrow_down_white'));
    });

    $(".itemmenu, .itemtab").mouseleave(function () {
        $(this).parent().find(".itemmenu").hide();
        $(this).parent().find(".itemtab").removeClass("itemtabover");
        var img = $(this).parent().find(".itemtab > a > img");
        img.attr("src", img.attr("src").replace('arrow_down_white', 'arrow_down_black'));
    });

    $(".itemmenu>div").mouseover(function () {
        $(this).find("a").addClass("itemmenuover");
    }).mouseleave(function () {
        $(this).find("a").removeClass("itemmenuover");
    });

    $(".tdCategoryBtn").click(function () {
        //$(".expandtr, .emptyspace").hide();
        //preRowId = 0;
        //$(".Vendor").removeClass("VendorBtnChecked");

        $(".tdCategoryBtn.tdCategoryBtnChecked").each(function () {
            $(this).removeClass("tdCategoryBtnChecked");
            var imgCtrl = $(this).find("img");
            imgCtrl.attr("src", imgCtrl.attr("src").replace("arrow-white", "arrow-blue").replace("_white", "_blue"));
        });

        $(this).addClass("tdCategoryBtnChecked");

        var imgCtrl = $(this).find("img");
        imgCtrl.attr("src", imgCtrl.attr("src").replace("arrow-blue", "arrow-white").replace("_blue", "_white"));

        var id = $(this).children("p").attr("id");

        $(".Theme").removeClass("ThemeBtnChecked");
        $(".Vendor").removeClass("VendorBtnChecked");
        
        Category = id;
        Vendor = "AllVendor";
        Theme = "AllTheme";
        $("#AllTheme").addClass("ThemeBtnChecked");
        $("#AllVendor").addClass("VendorBtnChecked");

        CGCatFilter();
        CGUpdateFilter();
    });

    $(".btnGameInfo").click(function () {
        var ctrl = $(this).closest(".cggamedata");    /*向上结构匹配至最近父元素   点击游戏信息展开数据，已经点开则隐藏*/

        if ($("#cginfo").attr("data-dbid") == ctrl.attr("data-dbid")) {
            CGHideGameInfo();
        }
        else {
            CGDisplayGameInfo(ctrl);            
        }
    });

    $(".cginfoheaderclose").click(function () {
        CGHideGameInfo();
    });
}

function CGDisplayBox() {
    $(".cggamedata > .cgbox").show();
    $(".cggamedata > .cglist").hide();
    $(".cggamedata").css("background-color", "#fff");

    $("img.lazy[src='']").lazyload({
        'effect': "fadeIn"
    });
}
/*隐藏盒子列表显示简洁列表*/
function CGDisplayList() {
    $(".cggamedata > .cgbox").hide();
    $(".cggamedata > .cglist").show();
    CGHideGameInfo();
    CGUpdateListBg();
}

function CGSorting(type) {
    var counteraz = 1;
    $(".cggamedata").sort(function (a, b) {
        if (type == "a-z") {
            
            if (($(a).attr("data-sort") > $(b).attr("data-sort"))) {
                return 1;
            } else if (($(a).attr("data-sort") == $(b).attr("data-sort"))) {
                return 0;
            } else {
                return -1;
            }
        } else if (type == "z-a") {
            if (($(a).attr("data-sort") < $(b).attr("data-sort"))) {
                return 1;
            } else if (($(a).attr("data-sort") == $(b).attr("data-sort"))) {
                return 0;
            } else {
                return -1;
            }
        } else {
            if (($(a).attr("data-i") > $(b).attr("data-i"))) {
                return 1;
            } else if (($(a).attr("data-i") == $(b).attr("data-i"))) {
                return 0;
            } else {
                return -1;
            }
        }
    }).each(function () {
        $(this).appendTo($(".cggamelist"));        
    });

    CGUpdateListBg();
    CGHideGameInfo();

    $("img.lazy[src='']").lazyload({
        'effect': "fadeIn",
    });
}
/*游戏列表  主题、平台 切换*/
function CGCatFilter() {
    $(".cggamedata").each(function () {
        if (Category == "AllGames" || $(this).hasClass(Category)) {
            $(this).removeClass("hide");
            var gameVen = $(this).attr("data-vendor");
            var gameTheme = $(this).attr("data-theme");
            
            if (Vendor == "AllVendor" && Theme != "AllTheme") {
                if (gameTheme == Theme) {
                    $(this).removeClass("hide");
                }
                else {
                    $(this).addClass("hide");
                }
            }
            else if (Vendor != "AllVendor" && Theme == "AllTheme") {
                if (gameVen == Vendor) {
                    $(this).removeClass("hide");
                }
                else {
                    $(this).addClass("hide");
                }
            }
            else if (Vendor != "AllVendor" && Theme != "AllTheme") {
                if (gameVen == Vendor && gameTheme == Theme) {
                    $(this).removeClass("hide");
                }
                else {
                    $(this).addClass("hide");
                }
            }
        }
        else if (Category == "NewGames") {
            $(this).removeClass("hide");
            var gameVen = $(this).attr("data-vendor");
            var gameTheme = $(this).attr("data-theme");
            var isNewGames = $(this).attr("data-new");


            if (isNewGames) {
                if (Vendor == "AllVendor" && Theme != "AllTheme") {
                    if (gameTheme == Theme) {
                        $(this).removeClass("hide");
                    }
                    else {
                        $(this).addClass("hide");
                    }
                }
                else if (Vendor != "AllVendor" && Theme == "AllTheme") {
                    if (gameVen == Vendor) {
                        $(this).removeClass("hide");
                    }
                    else {
                        $(this).addClass("hide");
                    }
                }
                else if (Vendor != "AllVendor" && Theme != "AllTheme") {
                    if (gameVen == Vendor && gameTheme == Theme) {
                        $(this).removeClass("hide");
                    }
                    else {
                        $(this).addClass("hide");
                    }
                }
            } else {
                $(this).addClass("hide");
            }
        }
        else
        {
            $(this).addClass("hide");
        }           
    });

    CGHideGameInfo();

    $("img.lazy[src='']").lazyload({
        'effect': "fadeIn",
    });
}

function CGUpdateFilter() {

    $(".Theme, .Vendor").parent("div").hide();

    $(".Vendor:first, .Theme:first").parent("div").show();

    $(".cggamedata").not(".hide").each(function () {
        $(".Theme[id='" + $(this).attr("data-theme") + "']").parent("div").show();
        $(".Vendor[id='" + $(this).attr("data-vendor") + "']").parent("div").show();
    });

    CGUpdateListBg();
}

function CGUpdateListBg() {
    if (View == 1) {
        var cgIndex = 0;
        var cgFlip = true;

        $(".cggamedata").not(".hide").each(function () {
            if (cgIndex > 1) {
                cgFlip = !cgFlip;
                cgIndex = 0;
            }
            cgIndex++;

            if (cgFlip) {
                $(this).css("background-color", "#f2f2f2");
            }
            else {
                $(this).css("background-color", "#fff");
            }
        });
    }
}
/*获取li标签内的游戏信息属性，填充展示*/
function CGDisplayGameInfo(ctrl) {
    var cginfo = $("#cginfo");
    var gamelocalname = ctrl.find(".cgboxlocalname").text();
    var gametheme = $(".Theme[id='" + ctrl.attr("data-theme") + "']").text();
    var gameven = ctrl.attr("data-vendor");
    var gameiphone = ctrl.attr("data-miphone");
    var gameandroid = ctrl.attr("data-mandroid");
    var cginfomobile = cginfo.find(".cginfodetailbtmmobile");
    
    cginfo.attr("data-dbid", ctrl.attr("data-dbid"));
    cginfo.find(".cginfoheadertitle").text(gamelocalname);
    cginfo.find(".cginfoheadertheme").text(gametheme);
    cginfo.find(".cginfoheaderven > img").attr("src", gameven + ".png").attr("alt", gameven);
    cginfo.find(".cginfodetaildesc").text(ctrl.find(".cgdesc").html());
    cginfo.find(".cginfodetailbtmbtn > a.btnPlayReal").attr("id", "cginfo" + ctrl.attr("data-dbid") + "play");
    cginfo.find(".cginfodetailbtmbtn > a.btnPlayDemo").attr("id", "cginfo" + ctrl.attr("data-dbid") + "demo");

    if (ctrl.attr("data-demo") == "0") {
        cginfo.find(".cginfodetailbtmbtn > a.btnPlayDemo").hide();
    }
    else {
        cginfo.find(".cginfodetailbtmbtn > a.btnPlayDemo").show();
    }
 /*游戏信息  对号 错号显示*/
    cginfo.find(".cginfodetaillist > ul > li").each(function (index) {
        if (index == 0 || index == 3) {
           
            $(this).find("div:nth-child(2)").text(ctrl.attr("data-i" + index.toString()));
       
        }

        else {
            var cginfoflag = ctrl.attr("data-i" + index.toString()) == "1" ? "true" : "false";
            $(this).find("div:nth-child(2)").html("<img src=images/"+ cginfoflag +".jpg alt=\"" + cginfoflag + "\" />");
        }
    });

    cginfomobile.find("img").hide();

    if (gameiphone == "1" || gameandroid == "1") {        
        cginfomobile.removeClass("hide");

        if (gameiphone == "1")
            cginfomobile.find("img[alt='iphone']").show();
        if (gameandroid == "1")
            cginfomobile.find("img[alt='android']").show();
    }
    else {
        cginfomobile.addClass("hide");
    }

    cginfo.removeClass("tri-top1 tri-top2 tri-top3 tri-top4");
    
    var cgtriPos = ctrl.offset().left - $(".cggamedata").not(".hide").offset().left;

    if (cgtriPos > 550) {
        cginfo.addClass("tri-top4");
    }
    else if (cgtriPos > 350) {
        cginfo.addClass("tri-top3");
    }
    else if (cgtriPos > 150) {
        cginfo.addClass("tri-top2");
    }
    else {
        cginfo.addClass("tri-top1");
    }

    //$(".cginfoempty").hide();
    ctrl.find(".cginfoempty").addClass("showme").show();
    $(".cginfoempty").not(".showme").hide();

    ctrl.find(".cginfoempty").css("height", ($("#cginfo").height() + 30) + "px");        
    ctrl.find(".cginfoempty").removeClass("showme");

    $("#cginfo").css("top", ctrl.offset().top).show();
   
    cginfo.find(".cginfochart > .cginfocanvas").html("<canvas></canvas>");   /*canvas画出星芒图*/

    plotRadarPoints(cginfo.find(".cginfochart > .cginfocanvas > canvas")[0], [
            { 'label': $("#hdnReviewA").val(), 'points': ctrl.attr("data-ca") },
            { 'label': $("#hdnReviewB").val(), 'points': ctrl.attr("data-cb") },
            { 'label': $("#hdnReviewC").val(), 'points': ctrl.attr("data-cc") },
            { 'label': $("#hdnReviewD").val(), 'points': ctrl.attr("data-cd") },
            { 'label': $("#hdnReviewE").val(), 'points': ctrl.attr("data-ce") },
            { 'label': $("#hdnReviewF").val(), 'points': ctrl.attr("data-cf") }
    ]);

    if (View == 0) {
        $("html, body").animate({
            'scrollTop': (ctrl.find(".cginfoempty").offset().top - 230)
        }, 200);
    }
}

function CGHideGameInfo() {
    $("#cginfo").hide().attr("data-dbid", "");
    $(".cginfoempty").hide();
}

function CGToggleFavo(ctrl) {
    if (ctrl.closest(".cggamedata").hasClass("FavouriteGames")) {
        CGRemoveFavourite(ctrl);
    }
    else {
        CGAddFavourite(ctrl);
    }
}

function CGAddFavourite(ctrl) {

    var cgCtrl = ctrl.closest(".cggamedata");
    var gameID = cgCtrl.attr("data-dbid");

    if (memberCode == "") {
        if (!DialogManager_isLogin(memberCode)) {
            EnsureLogin(window.location.href);
            return false;
        }
    }
    else {
        cgCtrl.find(".cgboxfav > img, .cglistfav > img").attr("src", "/Images/CasinoGames/favourite-star-after.png");
        cgCtrl.addClass("FavouriteGames");

        $.ajax({
            'type': "GET",
            'url': window.location.pathname + "?type=favourite&action=add&gameid=" + gameID + "&accid=" + memberCode
        });
    }


}

function CGRemoveFavourite(ctrl) {

    var cgCtrl = ctrl.closest(".cggamedata");
    var gameID = cgCtrl.attr("data-dbid");

    if (memberCode == "") {
        if (!DialogManager_isLogin(memberCode)) {
            EnsureLogin(window.location.href);
            return false;
        }
    }
    else {
        cgCtrl.find(".cgboxfav > img, .cglistfav > img").attr("src", "/Images/CasinoGames/favourite-star-before.png");
        cgCtrl.removeClass("FavouriteGames");
        $.ajax({
            'type': "GET",
            'url': window.location.pathname + "?type=favourite&action=rem&gameid=" + gameID + "&accid=" + memberCode
        });
    }
}
/*数据统计图*/
function plotRadarPoints(obj, points) {

    // This part is used for IE8 support
    if (typeof G_vmlCanvasManager != 'undefined') {
        G_vmlCanvasManager.initElement(obj);
    }

    var ctx = obj.getContext("2d");
    var prpoffsetleft = 5;
    obj.style.width = "300px";
    obj.style.height = "150px";
    ctx.beginPath();

    var dotPoint = [
        {
            'plotID': 0, 'details': [
                { 'points': 5, 'x': 90 + prpoffsetleft, 'y': 15 },
                { 'points': 4, 'x': 90 + prpoffsetleft, 'y': 25 },
                { 'points': 3, 'x': 90 + prpoffsetleft, 'y': 35 },
                { 'points': 2, 'x': 90 + prpoffsetleft, 'y': 45 },
                { 'points': 1, 'x': 90 + prpoffsetleft, 'y': 55 }
            ]
        },
        {
            'plotID': 1, 'details': [
                { 'points': 5, 'x': 135 + prpoffsetleft, 'y': 41 },
                { 'points': 4, 'x': 125 + prpoffsetleft, 'y': 46 },
                { 'points': 3, 'x': 115 + prpoffsetleft, 'y': 51 },
                { 'points': 2, 'x': 107 + prpoffsetleft, 'y': 56 },
                { 'points': 1, 'x': 99 + prpoffsetleft, 'y': 61 }
            ]
        },
        {
            'plotID': 2, 'details': [
                { 'points': 5, 'x': 135 + prpoffsetleft, 'y': 90 },
                { 'points': 4, 'x': 125 + prpoffsetleft, 'y': 85 },
                { 'points': 3, 'x': 115 + prpoffsetleft, 'y': 80 },
                { 'points': 2, 'x': 107 + prpoffsetleft, 'y': 74 },
                { 'points': 1, 'x': 99 + prpoffsetleft, 'y': 71 }
            ]
        },
        {
            'plotID': 3, 'details': [
                { 'points': 5, 'x': 90 + prpoffsetleft, 'y': 115 },
                { 'points': 4, 'x': 90 + prpoffsetleft, 'y': 105 },
                { 'points': 3, 'x': 90 + prpoffsetleft, 'y': 95 },
                { 'points': 2, 'x': 90 + prpoffsetleft, 'y': 85 },
                { 'points': 1, 'x': 90 + prpoffsetleft, 'y': 75 }
            ]
        },
        {
            'plotID': 4, 'details': [
                { 'points': 5, 'x': 45 + prpoffsetleft, 'y': 90 },
                { 'points': 4, 'x': 55 + prpoffsetleft, 'y': 85 },
                { 'points': 3, 'x': 65 + prpoffsetleft, 'y': 80 },
                { 'points': 2, 'x': 72 + prpoffsetleft, 'y': 74 },
                { 'points': 1, 'x': 81 + prpoffsetleft, 'y': 71 }
            ]
        },
        {
            'plotID': 5, 'details': [
                { 'points': 5, 'x': 45 + prpoffsetleft, 'y': 41 },
                { 'points': 4, 'x': 55 + prpoffsetleft, 'y': 46 },
                { 'points': 3, 'x': 65 + prpoffsetleft, 'y': 51 },
                { 'points': 2, 'x': 72 + prpoffsetleft, 'y': 56 },
                { 'points': 1, 'x': 81 + prpoffsetleft, 'y': 61 }
            ]
        }
    ];

    // Draw Line
    ctx.beginPath();
    ctx.strokeStyle = "#AAA";
    ctx.moveTo(45 + prpoffsetleft, 41);
    ctx.lineTo(135 + prpoffsetleft, 90);
    ctx.stroke();

    ctx.moveTo(45 + prpoffsetleft, 90);
    ctx.lineTo(135 + prpoffsetleft, 41);
    ctx.stroke();

    ctx.moveTo(90 + prpoffsetleft, 15);
    ctx.lineTo(90 + prpoffsetleft, 115);
    ctx.stroke();

    // Draw Circle
    ctx.beginPath();
    ctx.strokeStyle = "#AAA";
    ctx.arc(90 + prpoffsetleft, 65, 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(90 + prpoffsetleft, 65, 20, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(90 + prpoffsetleft, 65, 30, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(90 + prpoffsetleft, 65, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(90 + prpoffsetleft, 65, 50, 0, 2 * Math.PI);
    ctx.stroke();

    var plotData = [{}, {}, {}, {}, {}, {}, {}];

    for (var i = 0; i < points.length; i++) {
        var pointData = dotPoint[i];

        for (var j = 0; j < pointData.details.length; j++) {

            if (points[i].points == 0) {
                plotData[i].x = 90;
                plotData[i].y = 65;
            }
            else if (pointData.details[j].points == points[i].points) {
                var data = pointData.details[j];
                plotData[i].x = data.x;
                plotData[i].y = data.y;
            }
        }
    }

    plotData[plotData.length - 1] = plotData[0];

    // Put Words       
    for (var i = 0; i < 6; i++) {
        var txtLen = ctx.measureText(points[i].label).width;
        var splitTxt = new Array();

        if (txtLen > 55) {
            var splitTxtTmp = points[i].label.split(' ');
            var splitTxtTmp2 = "";

            for (var j = 0; j < splitTxtTmp.length; j++) {
                if (splitTxtTmp2.length > 0) splitTxtTmp2 += " ";

                if (splitTxtTmp2.length > 0 && ctx.measureText(splitTxtTmp2 + splitTxtTmp[j]).width > 55) {
                    splitTxt.push(splitTxtTmp2);
                    splitTxtTmp2 = splitTxtTmp[j];
                }
                else {
                    splitTxtTmp2 += splitTxtTmp[j];
                }
            }

            splitTxt.push(splitTxtTmp2);
        }
        else {
            splitTxt.push(points[i].label);
        }

        if (i == 0) {
            ctx.textAlign = "center";
            for (var j = 0; j < splitTxt.length; j++)
                ctx.fillText(splitTxt[j], 90 + prpoffsetleft, 10 + (j * 10));
        }
        else if (i == 1) {
            ctx.textAlign = "left";
            for (var j = 0; j < splitTxt.length; j++)
                ctx.fillText(splitTxt[j], 130 + prpoffsetleft, 38 + (j * 10));
        }
        else if (i == 2) {
            ctx.textAlign = "left";
            for (var j = 0; j < splitTxt.length; j++)
                ctx.fillText(splitTxt[j], 130 + prpoffsetleft, 100 + (j * 10));
        }
        else if (i == 3) {
            ctx.textAlign = "center";
            for (var j = 0; j < splitTxt.length; j++)
                ctx.fillText(splitTxt[j], 90 + prpoffsetleft, 125 + (j * 10));
        }
        else if (i == 4) {
            ctx.textAlign = "right";
            for (var j = 0; j < splitTxt.length; j++)
                ctx.fillText(splitTxt[j], 55 + prpoffsetleft, 100 + (j * 10));
        }
        else if (i == 5) {
            ctx.textAlign = "right";
            for (var j = 0; j < splitTxt.length; j++)
                ctx.fillText(splitTxt[j], 55 + prpoffsetleft, 38 + (j * 10));
        }

        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#4C0";
        ctx.moveTo(plotData[i].x, plotData[i].y);
        ctx.lineTo(plotData[i + 1].x, plotData[i + 1].y);
        ctx.stroke();
    }

}

function SlotGameIFeelLucky() {
    var topGames = $(".cggamedata.HotGames");
    var topGamesCount = topGames.length;
    var luckyNo = Math.floor(Math.random() * topGamesCount - 1) + 1;
    $(topGames[luckyNo]).find(".btnPlayReal").click();
}
/*固定菜单栏位置*/
function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    var btmHeight = $(".testtdRight06").height() - $("#footer").height();

    if (div_top - window_top < 32) {
        $('#slider04, #cate, .testtdRight06').addClass('stick');
        $('#slider04-hidden').show();
        $("#slider05").hide();

        var topH = (window_top - 112 - btmHeight);
        var cateH = $("#cate").height();

        if (topH > 112) {
            var setMT = $(".testtdRight06").height() - cateH - 20;

            if (setMT < 0) setMT = 0;
            $('#cate').removeClass('stick').css("margin-top", setMT);
        }
        else {
            $('#cate').css("margin-top", "0px");
        }


    } else {
        $('#slider04, #cate, .testtdRight06').removeClass('stick');
        $('#slider04-hidden').hide();
        $("#slider05").show();

        $('#cate').css("margin-top", "0px");
    }


}