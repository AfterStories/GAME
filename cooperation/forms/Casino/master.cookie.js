var g_Cookie_PopUpWelcome = "PopUpWelcome";

function isCookieExist(strCookieKey) {
    var cookieValue = $.cookie(strCookieKey);
    
    if ($.cookie(strCookieKey) == "" || $.cookie(strCookieKey) == null || $.cookie(strCookieKey) == "undefined") {
        return false
    }
    else
    {
       //deleteCookie(strCookieKey)
       return true;
     }
    
}


function createCookie(strCookieKey) {

    $.cookie(strCookieKey, 1, 
    {
        //expires: 10,           //expires in 10 days
        expires: 3650           //expires in 10 year

        //path: '/',          //The value of the path attribute of the cookie 
        //(default: path of page that created the cookie).

        //domain: 'Fun88P3.com',  //The value of the domain attribute of the cookie
        //(default: domain of page that created the cookie).

        //secure: false          //If set to true the secure attribute of the cookie
        //will be set and the cookie transmission will
        //require a secure protocol (defaults to false).
    });

    //var cookieValue = $.cookie(strCookieKey);

    //alert("Cookie Created: " + cookieValue);

}


function deleteCookie(strCookieKey)
{
  // Returns true when cookie was found, false when no cookie was found...
  $.removeCookie(strCookieKey);
}

