    function DialogManager_isLogin(memberCode) 
    {
        if (memberCode == "") { return false; }
        else { return true; }
    }


    function DialogManager_showLoginFail(dialogTitle, dialogMessage) 
    {
        dialogHtmlMessage = "<p>" + dialogMessage + "</p>";

        DialogManager_Show(dialogTitle, dialogHtmlMessage);

    }


    function DialogManager_Show(dialogTitle, dialogHtmlMessage) 
    {
       //$("#dialog-message").html("Test change content msg"); 
        $("#dialog-message").html(dialogHtmlMessage);
        //$("#dialog-message").html('<%=GetGlobalResourceObject("Common", "PleaseLogin").ToString()%>');
        $("#dialog-message").dialog({
            title: dialogTitle,
            //text: "abc",
            modal: true,
            buttons: {
                Ok: function () {
                    $(this).dialog("close");
                }
            }
           
        });
        
    }