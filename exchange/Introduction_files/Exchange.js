function ExchangeRefresh() {
    function refreshPage() {
        $(this).dialog("close");
        window.RefreshCalled = false;
        window.location = window.location;
    }

    if (!window.RefreshCalled) {
        window.RefreshCalled = true;
        jQuery(document).ready(function ($) {
            $("<div id='LoginAlertMsg' style=''>" + window.refreshMsg + "<\/div>").dialog({
                modal: 1,
                buttons: {
                    OK: refreshPage
                },
                close: refreshPage
            });
        });
    }
}

function ExchangeDeposit() {
    $("#ddlWallets #depositLink").click();
    ga("send", "event", "Exchange", "Button", "Deposit");
}

function ExchangeSupport() {
    $("#hbtn4").click();
    ga("send", "event", "Exchange", "Button", "Support");
}
