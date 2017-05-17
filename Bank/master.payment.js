function popUpAlert(popupmsg, popuptitle) {
    msg = popupmsg.replace("{0}", '<span style="color:Red;">' + $("#ddlAccTo").find("option:selected").text() + "<\/span>").replace("{0}", '<span style="color:Red;">' + $("#ddlAccTo").find("option:selected").text() + "<\/span>"),
    $("<div >" + msg + "<\/div>").dialog({
        modal: !0,
        title: popuptitle,
        width: 400,
        buttons: {
            OK: function() {
                $(this).dialog("close")
            }
        }
    })
}
function updatePanel(btnClicked, year) {
    $("#tempBtnClicked").val(btnClicked),
    $("#tempYear").val(year),
    $("#btnReload").click(),
    $("html, body").animate({
        scrollTop: 400
    },
    "slow");
    var navHeight = $(".history_nav").height(),
    contentHeight = $(".historyContent").height(),
    totalHeight = navHeight + contentHeight + 20;
    $(".searchLoadingImg").css("display", "block"),
    $(".searchLoadingImg").css("height", totalHeight)
}
function setDate() {
    var getYear = $("#ddlYear").val(),
    getMonth = $("#ddlMonth").val();
    if (getMonth != "" && getYear != "") {
        var days = Math.round((new Date(getYear, getMonth) - new Date(getYear, getMonth - 1)) / 864e5),
        firstOfMonth = "1/" + getMonth + "/" + getYear,
        endOfMonth = days + "/" + getMonth + "/" + getYear;
        $("#lblPeriod").text(firstOfMonth + " - " + endOfMonth)
    } else {
        var d = new Date,
        c = d.getDate(),
        n = d.getMonth() + 1,
        y = d.getFullYear();
        d.setDate(d.getDate() - 7);
        var lc = d.getDate(),
        ln = d.getMonth() + 1,
        ly = d.getFullYear(),
        firstOfMonth = lc + "/" + ln + "/" + ly,
        endOfMonth = c + "/" + n + "/" + y;
        $("#lblPeriod").text(firstOfMonth + " - " + endOfMonth)
    }
}
function clickReload() {
    timeout && clearTimeout(timeout),
    xhr && xhr.abort(),
    timeout = setTimeout(function() {
        $("#btnReload").click()
    },
    500)
}
function getHistoryLoading() {
    var navHeight = $(".history_nav").height(),
    contentHeight = $(".historyContent").height(),
    totalHeight = navHeight + contentHeight + 20;
    $(".searchLoadingImg").css("display", "block"),
    $(".searchLoadingImg").css("height", totalHeight)
}
function resetForm(pageload) {
    $("#MainForm").clearForm(),
    pageload != !0 && $(".error,.amountError,#divMsg").html("")
}
function trimZero(txtbox) {
    var val = $(txtbox).val();
    if (val.indexOf(".") == -1 && val.length > 1) while (val.substring(0, 1) === "0") val = val.substring(1);
    else if (val.indexOf(".") != -1 && val.length > 2) {
        while (!/^\d+(\.{0,1}\d{0,2})?$/.test(val)) val = val.substring(0, val.length - 1);
        while (val.substring(0, 2) === "00") val = val.substring(1)
    }
    $(txtbox).val(val)
}
function checkDigit(e, obj, intsize, deczize) {
    var keycode, fieldval, dots;
    if (window.event) keycode = window.event.keyCode;
    else if (e) keycode = e.which;
    else return ! 0;
    return fieldval = obj.value,
    dots = fieldval.split(".").length,
    keycode == 46 || keycode == 8 || keycode == 9 || keycode == 27 || keycode == 13 || keycode == 190 || keycode == 65 && event.ctrlKey === !0 || keycode >= 35 && keycode <= 39 ? !0 : event.shiftKey || (keycode < 48 || keycode > 57) && (keycode < 96 || keycode > 105) ? (event.preventDefault(), !1) : !0
}
var timeout, xhr