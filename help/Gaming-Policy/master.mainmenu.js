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