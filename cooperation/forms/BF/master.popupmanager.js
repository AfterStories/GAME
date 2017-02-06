
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
        iframe:false,
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