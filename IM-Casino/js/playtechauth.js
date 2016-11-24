function PTPopupLogin(url) {
    $("#PTProceedNextUrl").val(url);
    $.colorbox({
        inline: true,
        href: "#ptAuthenticationBox",
        innerWidth: 689,
        closeButton: false,
        overlayClose: false,
        escKey: false,
        // Work around for close button conflict (more than one colorbox)
        onLoad: function () { $('#cboxClose').remove(); }         
    });
}

function ClosePTLogin() {
    $.colorbox.close();
}

function EnsurePTAuth(url, isLogin) {
    if (isLogin) {        
        PTPopupLogin(url);
        return;
    }    
}

function ValidatePTAuthPopup(sender, args) {
    // ReSharper disable UseOfImplicitGlobalInFunctionScope    
    // ReSharper disable AssignedValueIsNeverUsed
    var isValid = true;
    // ReSharper restore AssignedValueIsNeverUsed
    $("#PTErrorMessage").text("");
    if (document.getElementById(sender.controltovalidate).value != "") {
        var password = $("#txtPTPassword").val();
        var confirmPassword = $("#txtPTConfirmPassword").val();
        var validateValue = document.getElementById(sender.controltovalidate).value;
        // Validation
        if (!validateValue || !validateValue.match('^[a-zA-Z0-9]{5,40}$')) {
            isValid = false;
        } else if ((password && confirmPassword) && (password != confirmPassword)) {
            isValid = false;
            $("#PTErrorMessage").text(passwordConfirmErrorMessagePT);
        } else {
            isValid = true;
        }
    } else {
        isValid = false;
    }
    // Return Result
    args.IsValid = isValid;
    if (!isValid) {
        $(".login_message").show();
        runHighlightEffect(sender.controltovalidate);
        $(".login_message").delay(5000).fadeOut("slow");
    }
    // ReSharper restore UseOfImplicitGlobalInFunctionScope
}

function getPTLoading() {        
    $(".loadingGif").css("display", "block").css("z-index", 1000000).find("img").css("padding-top", $(window).height() / 2);    
}

function closePTLoading() {
    $(".loadingGif").css("display", "none");
}

function PTAuthentication(action) {
    // ReSharper disable UseOfImplicitGlobalInFunctionScope
    var userName = "";
    var maxErrorMessageLength = 50;
    if (action == "create") {
        userName = encodeURIComponent($("#txtPTUserName").val());
    }
    var password = encodeURIComponent($("#txtPTPassword").val());
    var confirmPassword = encodeURIComponent($("#txtPTConfirmPassword").val());

    getPTLoading();

    $.post("/Services/PlayTech.ashx",
        { action: action, userName: userName, password: password, confirmPassword: confirmPassword },
        function (data) {
            if (data.result == "success") {
                Alert(successfulMessagePT, true);
                ClosePTLogin();
            } else {
                if (data.code == "passwordNotSame") {
                    $("#PTErrorMessage").text(passwordConfirmErrorMessagePT);
                } else if (data.code == "incomplete") {
                    $("#PTErrorMessage").text(incompleteFormErrorMessagePT);
                } else if (data.code == "passwordMatchError") {
                    $("#PTErrorMessage").text(passwordMatchErrorMessagePT);
                } else if (data.code == "passwordLengthError" || !password.match('^[a-zA-Z0-9]{5,40}$')) {
                    $("#PTErrorMessage").text(PTPasswordValidateErrorMessage);
                } else if (data.code == "FailToCreate") {
                    $("#PTErrorMessage").text(failToCreatePTuser);
                } else if (data.code == "InvalidMember") {
                    $("#PTErrorMessage").text(invalidUsernameErrorMessagePT);
                } else {
//                    var message = data.description;
//                    if (message && (message.length > maxErrorMessageLength)) {
//                        message = message.substring(0, maxErrorMessageLength - 3).concat("...");
//                    }
                    $("#PTErrorMessage").text(data.description);
                }
                $(".login_message").show().delay(5000).fadeOut("slow");
            }
            closePTLoading();
        }, "json");

        return false;
        // ReSharper restore UseOfImplicitGlobalInFunctionScope
}

function CloseAndRedirectPTLogin(returnUrl) {
    getPTLoading();
    window.location.href = returnUrl;
    return false;
}