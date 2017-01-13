var xmlHttp=null;
function initXmlHttp()
{
    try
    {
        xmlHttp=new ActiveXObject("Msxml2.XMLHTTP") 
    } 
    catch (e) 
    {
        try 
        {
            xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (e1) 
        {
            
        }
    }
    if ( !xmlHttp && typeof XMLHttpRequest != "undefined" ) 
    {   
        xmlHttp=new XMLHttpRequest() 
    } 
}

function GetAjaxText(webUrl)
{
    if(xmlHttp==null) initXmlHttp();
    xmlHttp.open("get",webUrl,false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function isNum(str) 
{ 
    var Letters = "1234567890"; 
    for (i=0; i < str.length; i++) 
    { 
        var CheckChar = str.charAt(i); 
        if (Letters.indexOf(CheckChar) == -1) 
        { 
            return false; 
        }
    }
    return true;
}
function isURL(str) 
{
    var myRegExp = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;
    return (myRegExp.test(str));
}
function isUserName(str) 
{ 
    return (/^[a-zA-Z0-9_]{6,20}$/.test(str));
}
function isFloat(str) 
{ 
    var Letters = "1234567890";
    var dCount=0;
    for (i=0; i < str.length; i++) 
    { 
        var CheckChar = str.charAt(i);
        if(CheckChar==".")
        {
            if(i==0 || i==str.length-1 || dCount>0) return false;
            else dCount++;
        }
        else
        {
            if (Letters.indexOf(CheckChar) == -1)
            { 
                return false;
            }
        }
    }
    return true;
}
function isEmpty(str) 
{ 
    var reg =/^\s*$/;
    if(str.match(reg)) return true;
    else return false;
}
function getPosition(el)
{
    for (var lx=0,ly=0;el!=null;lx+=el.offsetLeft,ly+=el.offsetTop,el=el.offsetParent);
    return {x:lx,y:ly} 
}
function isEMail(str) 
{ 
    var reg =/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if(str.match(reg)) return true;
    else return false;
}
function isPwd(str) 
{
    var reg =/^[a-zA-Z0-9_]{6,16}$/;
    if(str.match(reg)) return true;
    else return false;
}
function isTelephone(str) 
{ 
    var Letters = "1234567890-+"; 
    for (i=0; i < str.length; i++) 
    { 
        var CheckChar = str.charAt(i); 
        if (Letters.indexOf(CheckChar) == -1) 
        { 
            return false; 
        }
    }
    return true;
}
function showDivDate(obj)
{
    var divObj=document.getElementById('divSelectDate');
    if(obj.innerHTML=='↑')
    {
        divObj.style.display='none';
        obj.innerHTML='↓'
    }
    else
    {
        var oTemp = getPosition(obj);
        divObj.style.top = (oTemp.y+22) + 'px';
        divObj.style.left = (oTemp.x-145) + 'px';
        divObj.style.display='';
        obj.innerHTML='↑'
    }
}
function drag(o,k){
    k.onselectstart=function() {return(false)};
    k.onmousedown=function(e){
        if(objDivZ) objDivZ.style.zIndex=500;o.style.zIndex=501;objDivZ=o;
        e=e||window.event;
        var x=e.layerX||e.offsetX;
        var y=e.layerY||e.offsetY;
            document.onmousemove=function(e){				
                e=e||window.event;
                o.style.left=(e.clientX-x)+"px";
                o.style.top=(e.clientY-y)+"px";
            };
        document.onmouseup=function(){document.onmousemove=null;};
    };
}