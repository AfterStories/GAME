function Alert(msg) { Alert(msg, true) }
function Alert(msg, onlyAtParent) { if (onlyAtParent) { if (window.parent.location != window.location) { window.parent.Alert(msg); return } } $("<div style=''>" + msg + "</div>").dialog({ modal: true, buttons: { OK: function () { $(this).dialog('close') } } }) }
function FMNavigateTo(url) { var w = window; if (w.parent != null) { w = w.parent } w.location.href = url }
function FMChgPgIdx(uiFieldId, pgIdx) { var ui = $("#" + uiFieldId); ui.val(pgIdx); return true }
function newPage(url) { window.location = url }
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



function open_new_window(URL) 
{
  var height = screen.availHeight;
  var width = height - 70;

  open_new_window(URL, width, height);
}

function open_new_window(URL, width, height) 
{    
    NewWindow = window.open(URL, "_blank", "toolbar=no,menubar=0,status=0,copyhistory=0,scrollbars=yes,resizable=1,location=0,Width=" + width + ",Height=" + height + "\"");
    NewWindow.location = URL;
}

