//For live https://mpsnare.iesnare.com/snare.js
//For Testing https://ci-mpsnare.iovation.com/snare.js

var blackbox = '';
$.getScript("https://ci-mpsnare.iovation.com/snare.js", function () {
    setTimeout(function () {
        var bb_info = ioGetBlackbox();
        if (bb_info)
            blackbox = bb_info.blackbox;
            if ($('input[id$=hidblackbox]').length)
                $('input[id$=hidblackbox]').val(blackbox)
    }, 2000);

});


var sent = false;

CheckTransaction = function () {

    if (sent)
        return;

    $.ajax({
        type: "POST",
        url: "/Services/FraudManagementWebService.asmx/CheckTransaction",
        data: "{'memberCode':'" + memberCode + "','ip':'" + ipAddress + "','blackBox':'" + blackbox + "','requestType':'" + RequestType + "' }",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: OnSuccess,
        error: OnError
    });
}

OnSuccess = function (data, status) {
    sent = true;
};

OnError = function (request, status, error) {
};

//var io_bb_callback = function (bb, complete) {
//    if (complete)
//        CheckTransaction(bb);
//   };

//$('#lnkSubmit').live('click', function () { CheckTransaction(); }); 

