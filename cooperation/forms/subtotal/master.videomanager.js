function OpenVideoWindow(url, onlyAtParent) {
    if (onlyAtParent) {
        if (window.parent.location != window.location) {
            window.parent.OpenVideoWindow(url);
            return false;
        }
    }
    
    $("#videoframe embed").attr("src", url);
    var embedObject = $("#videoframe").html();        
    $("#videoframe embed").remove();
    $("#videoframe").html(embedObject).fadeId("fast");
    
    return false;
}
