// disable submit on press enter (only applied to text and password field)
$(document).keypress(function (evt) {
    evt = (evt) ? evt : ((event) ? event : null);
    var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
    if ((evt.keyCode == 13) && (node.type == "text" || node.type == "password")) {
        if (node.id == "UserName" && node.value) {
            if ($("#Password").val()) {
                $("#login .button").click();
            } else {
                $("#Password").focus();
            }
        }
        if (node.id == "Password" && node.value) {
            if ($("#UserName").val()) {
                $("#login .button").click();
            } else {
                $("#UserName").focus();
            }
        }
        if (node.id == "txtUsn" && node.value) {
            if ($("#txtPwd").val()) {
                $(".PL_login_btn .PL_button").click();
            } else {
                $("#txtPwd").focus();
            }
        }
        if (node.id == "txtPwd" && node.value) {
            if ($("#txtUsn").val()) {
                $(".PL_login_btn .PL_button").click();
            } else {
                $("#txtUsn").focus();
            }
        }
        return false;
    }
    return true;
});

