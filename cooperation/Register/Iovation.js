

var blackbox = '';


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

