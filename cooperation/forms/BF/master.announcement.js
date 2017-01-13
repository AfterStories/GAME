function emergencyAlert(topic, msg, URL, btn1, btn2) {
    if (window.parent.location != window.location) {
        window.parent.emergencyAlert(topic, msg, URL, btn1, btn2);
        return;
    }
    var btns = eval("({ '" + btn1 + "':function(){ $('div#msgDialog').dialog('close'); OpenFullScreen('" + URL + "');}, '" + btn2 + "':function(){$('div#msgDialog').dialog('close');} })");
    $("<div id='msgDialog' style=''>" + msg + "</div>").dialog({
        modal: true,
        title: topic,
        height: 220,
        width: 400,
        buttons: btns
    });
    $("div#msgDialog").dialog().prev().find(".ui-dialog-titlebar-close").hide();
}