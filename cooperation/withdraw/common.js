//去除空格
function Trim(str)
{
    return str.replace(/(^\s*)|(\s*$)/g,"");  
}

//是否为空(如果不是空格则返回false;如果是空格则返回true)
function IsNotEmpty(str)
{
    var pattern=/.+/;
    if (!pattern.exec(str)) return false; 
    return true;
}
//检验Email(如果格式不对则返回false)
function IsEmail(str)
{
    var pattern=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (!pattern.exec(str)) return false; 
    return true;
}
//检验日期格式是否正确(如果格式不对则返回false)
function IsDate(str)   
{   
    var re = new RegExp("(^([0-9]{4})[.-]{1}([0-9]{1,2})[.-]{1}([0-9]{1,2})$)");
        
    var res = true;
    
    if ((ar = re.exec(str)) != null){
        var i;
		
        i = parseFloat(ar[4]);
        // verify dd
        if (i <= 0 || i > 31){
			alert(i);
            res = false;
        }
        i = parseFloat(ar[3]);
        // verify mm
        if (i <= 0 || i > 12){
			alert(i+"-dd");
            res = false;
        }
    }else{
        res = false;
    }
    if (!res){
        //alert('请输入 YYYY-MM-DD 日期格式');
    }
    else{
     //alert("success");
    }
    return res;
} 

//检验日期格式
function IsDateTime(str)
{
    var pattern=/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})/;
    if (!pattern.exec(str))
    {
        if(IsDate(str)==true)
        {
            return true;
        }
        return false;
    }
    else
    {
        return true;
    }
//    try
//    {
//        Date.parse(str);  
//        return true;      
//    }
//    catch(ex)
//    {
//        return false;
//    }
   
}


//是否为电话号码(如果格式不对则返回false)
function IsPhone(str)
{
    var pattern=/^((\(\d{3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}$/;
    if (!pattern.exec(str)) return false; 
    return true;
}
//是否为手机号码(如果格式不对则返回false)
function IsMobile(str)
{
    var pattern=/^((\(\d{3}\))|(\d{3}\-))?13\d{9}$/;
    if (!pattern.exec(str)) return false; 
    return true;
}
//是否为正确身份证号(如果格式不对则返回false)
function IsSelfCard(str)
{
    var pattern=/^\d{15}(\d{2}[A-Za-z0-9])?$/;
    if (!pattern.exec(str)) return false; 
    return true;
}
//是否为数字(如果格式不对则返回false)
function IsNumber(str)
{
    var pattern=/^\d+$/;
    if (!pattern.exec(str)) return false; 
    return true;
}
//是否为正确邮编(如果格式不对则返回false)
function IsZip(str)
{
    var pattern=/^[1-9]\d{5}$/;
    if (!pattern.exec(str)) return false; 
    return true;
}
//是否为正确QQ号(如果格式不对则返回false)
function IsQQ(str)
{
    var pattern=/^[1-9]\d{4,8}$/;
    if (!pattern.exec(str)) return false; 
    return true;
}
//是否为整数(如果格式不对则返回false)
function IsInt(str)
{
    var pattern=/^[-\+]?\d+$/;
    if (!pattern.exec(str)) return false; 
    return true;
}
//是否为浮点型数值(如果格式不对则返回false)
function IsDouble(str)
{
    var pattern=/^[-\+]?\d+(\.\d+)?$/;
    if (!pattern.exec(str)) return false; 
    return true;
}
function IsMoney(str)
{
    var pattern=/^(\d|-)?(\d|,)+(\.\d{0,2})?$/;
    if(!pattern.exec(str)) return false;
}
function IsRate(str)
{
    var pattern=/^(\d|-)?(\d|,)+(\.\d{0,2})?$/;
    if(!pattern.exec(str)) return false;
}
//是否为英文(如果格式不对则返回false)
function IsEnglish()
{
    var pattern=/^[A-Za-z]+$/;
    if (!pattern.exec(str)) return false; 
    return true; 
}
//是否为中文(如果格式不对则返回false)
function IsChinese()
{
    var pattern=/^[\u0391-\uFFE5]+$/;
    if (!pattern.exec(str)) return false; 
    return true;
}
//字母开头的最长20位账号

function CheckID(str) 
{ 
    var pattern=/^[a-zA-Z]{1}(\w){3,19}$/; 
    if (!pattern.exec(str)) return false; 
    return true; 
} 
//4-20位的密码
function CheckPwd(str) 
{ 
    var pattern=/^(\w){4,20}$/; 
    if (!pattern.exec(str)) return false; 
    return true; 
}
//只能输入1~2位整数数字

function CheckNumber(str)
{
    var pattern=/^\d{1,3}$/;
    if (!pattern.exec(str)) return false; 
    return true; 
}
//只能输入1~2位小数的正实数

function CheckDot(str)
{
    var pattern=/^[0-9]+(.[0-9]{1,2})?$/;
    if (!pattern.exec(str)) return false; 
    return true; 
}
//检查一个字符串是否为一个正确日期（样式：2000-01-01）

String.prototype.isDate = function()   
{   
    var r = this.match(/^(\d{1,4})(-)(\d{1,2})\2(\d{1,2})$/);     
    if(r==null)return false;   
    var d = new Date(r[1],r[3]-1,r[4]);     
    return   (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]);   
} 
/*验证页面元素*/

function IsStr(str)
{
   var Letters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-abcdefghijklmnopqrstuvwxyz";
 for (i=0; i < str.length; i++)
  {
  var CheckChar = str.charAt(i);
  CheckChar = CheckChar.toUpperCase();
  if (Letters.indexOf(CheckChar) == -1)
   {
   //alert ("用户名只能为英文和中文和下划线！");
   return false;
   }
  }
}

function IsNum(str)
{
   var Letters = "0123456789-+() ";
 for (i=0; i < str.length; i++)
  {
  var CheckChar = str.charAt(i);
  CheckChar = CheckChar.toUpperCase();
  if (Letters.indexOf(CheckChar) == -1)
   {
   //alert ("用户名只能为英文和中文和下划线！");
   return false;
   }
  }
}



/*
* Added by Daeng 2007.7.27
* 限制输入的日期控件

* Param: txtName 为要限制输入的文本框的名称

*
* 功能描述：1，只能输入数字

*                    2，左右键可以移动编辑焦点
*                    3，上下键可以对数据进行微调

*                    4，控件包含了对日期的合法校验
*/


function regDateControl(txtName)
{
    var oInput = document.getElementById(txtName);
    oInput.title=oInput.title + "(只能输入数字,可用方向键 →　←　↑　↓来控件日期)";
	
		//oInput.middleChar = "-";
	if(!oInput.middleChar)
	{
		
			oInput.middleChar = "-";
		
	}
    oInput.selectIndex = 1; //默认选中年

    oInput.maxLength = 10;
    oInput.style.imeMode = "disabled";
    oInput.value = specialText_GetDate(oInput.middleChar);
    
    oInput.charWidth = oInput.createTextRange().boundingWidth / oInput.maxLength;
    //alert(oInput.createTextRange().boundingWidth+"|"+oInput.charWidth);
    //注册单击事件
    oInput.onclick = specialText_ClickEvent;
    oInput.onkeydown = specialText_KeyDownEvent;
    oInput.onfocus = function(){specialText_SelectYear(this);}
    oInput.onblur = function()
    {
        specialText_validYear(this);
        specialText_validMonth(this);
        specialText_validDate(this);
    }
    //屏蔽鼠标右键和拖动操作

    oInput.oncontextmenu = function(){return false;}
    oInput.ondrop = function(){return false;}
}

//鼠标单击，根据位置对日期进行分体选择
function specialText_ClickEvent()
{
    event.cancelBubble = true;
    specialText_validYear(this);
    specialText_validMonth(this);
    specialText_validDate(this);
    if(event.offsetX <= specialText_getCharWidth(this.charWidth,4))
        specialText_SelectYear(this);
    else if(event.offsetX > specialText_getCharWidth(this.charWidth,4)
            && event.offsetX <= specialText_getCharWidth(this.charWidth,7))
        specialText_SelectMonth(this);
    else if(event.offsetX > specialText_getCharWidth(this.charWidth,7))
        specialText_SelectDate(this);
}
//选中年份
function specialText_SelectYear(oInput)
{
    var oRange = oInput.createTextRange();
    oRange.moveStart("character",0);
    oRange.moveEnd("character",-6);
    //代表选中了年
    oInput.selectIndex = 1;
    oRange.select();
}
//选中月份
function specialText_SelectMonth(oInput)
{
    var oRange = oInput.createTextRange();
    oRange.moveStart("character",5);
    oRange.moveEnd("character",-3);
    //代表选中了月
    oInput.selectIndex = 2;
    oRange.select();
}
//选中日期
function specialText_SelectDate(oInput)
{
    var oRange = oInput.createTextRange();
    oRange.moveStart("character",8);
    //代表选中了日期

    oInput.selectIndex = 3;
    oRange.select();
}
//校验年份有效性

function specialText_validYear(oInput)
{
    var arrValue = oInput.value.split(oInput.middleChar);
    var strYear = arrValue[0];

    if(parseInt(strYear,10) == 0)
        arrValue[0] = 2000;
    //如果年份小于4位，则在2000基础上增加

    else if(strYear.length < 4)
        arrValue[0] = 2000 + parseInt(strYear,10);
    oInput.value = arrValue.join(oInput.middleChar);
}
//校验月份有效性

function specialText_validMonth(oInput)
{
    var arrValue = oInput.value.split(oInput.middleChar);
    var strMonth = arrValue[1];
    //如果月份输入了0，则按1月处理

    if(parseInt(strMonth,10) == 0)
         arrValue[1] = "01";
    //如果月份是一位，则前面补0
    else if(strMonth.length < 2)
        arrValue[1] = "0" + strMonth;
    //如果月份大于12月，自动转为12月

    else if(parseInt(strMonth,10) > 12)
        arrValue[1] = "12";
    oInput.value = arrValue.join(oInput.middleChar);
}
//校验日期有效性

function specialText_validDate(oInput)
{
    var arrValue = oInput.value.split(oInput.middleChar);
    var strYear = arrValue[0];
    var strMonth = arrValue[1];
    var strDate = arrValue[2];
    var intMonth = parseInt(strMonth,10);
    if(parseInt(strDate,10) == 0)
        arrValue[2] = "01";
    else if(strDate.length < 2)
        arrValue[2] = "0" + strDate;
    else
    {
        //如果超过了月份的最大天数，则置为最大天数

        var monthMaxDates = specialText_getMonthDates(strYear,strMonth);
        if(parseInt(strDate,10) > monthMaxDates)
            arrValue[2] = monthMaxDates;
    }
    oInput.value = arrValue.join(oInput.middleChar);
}

function specialText_YearAdd(oInput,isMinus)
{
    var arrValue = oInput.value.split(oInput.middleChar);
    var strYear = arrValue[0];
    if(isMinus)
    {
        arrValue[0] = parseInt(strYear,10) - 1;
        if(parseInt(arrValue[0],10) < 1)
            arrValue[0] = "0001";
    }
    else
        arrValue[0] = parseInt(strYear,10) + 1;
    oInput.value = arrValue.join(oInput.middleChar);
    specialText_validYear(oInput);
    specialText_SelectYear(oInput);
}

function specialText_MonthAdd(oInput,isMinus)
{
    var arrValue = oInput.value.split(oInput.middleChar);
    var strMonth = arrValue[1];
    if(isMinus)
    {
        arrValue[1] = parseInt(strMonth,10) - 1;
        if(parseInt(arrValue[1],10) == 0)
            arrValue[1] = "12";
    }
    else
    {
        arrValue[1] = parseInt(strMonth,10) + 1;
        if(parseInt(arrValue[1],10) == 13)
            arrValue[1] = "01";
    }
    oInput.value = arrValue.join(oInput.middleChar);
    specialText_validMonth(oInput);
    specialText_SelectMonth(oInput);
}

function specialText_DateAdd(oInput,isMinus)
{
    var arrValue = oInput.value.split(oInput.middleChar);
    var strYear = arrValue[0];
    var strMonth = arrValue[1];
    var strDate = arrValue[2];
    var monthMaxDates = specialText_getMonthDates(strYear,strMonth);

    if(isMinus)
    {
        arrValue[2] = parseInt(strDate,10) - 1;
        if(parseInt(arrValue[2],10) == 0)
            arrValue[2] = monthMaxDates;
    }
    else
    {
        arrValue[2] = parseInt(strDate,10) + 1;
        if(parseInt(arrValue[2],10) == (monthMaxDates + 1))
            arrValue[2] = "01";
    }
    oInput.value = arrValue.join(oInput.middleChar);
    specialText_validDate(oInput);
    specialText_SelectDate(oInput);
}

function specialText_KeyDownEvent()
{
    //如果按了数字键

    if((event.keyCode >= 48 && event.keyCode <= 57) ||
       (event.keyCode >= 96 && event.keyCode <= 105))
    {     
        var oRange = document.selection.createRange();
        if(oRange.text.indexOf(this.middleChar) != -1)
            event.returnValue = false;
        else
            event.returnValue = true;
    }
    //如果按了方向键

    else if(event.keyCode >= 37 && event.keyCode <= 40)
    {
        event.returnValue = false;
        var keyCode = event.keyCode;
        //按了左键
        if(keyCode == 37)
        {
            if(this.selectIndex == 1)
            {
                specialText_validYear(this);
                specialText_SelectDate(this);
            }
            else if(this.selectIndex == 2)
            {
                specialText_validMonth(this);
                specialText_SelectYear(this);
            }
            else if(this.selectIndex == 3)
            {
                specialText_validDate(this);
                specialText_SelectMonth(this);
            }
        }
        //按了右键
        if(keyCode == 39)
        {
            if(this.selectIndex == 1)
            {
                specialText_validYear(this);
                specialText_SelectMonth(this);
            }
            else if(this.selectIndex == 2)
            {
                specialText_validMonth(this);
                specialText_SelectDate(this);
            }
            else if(this.selectIndex == 3)
            {
                specialText_validDate(this);
                specialText_SelectYear(this);
            }
        }

        //按了上键
        if(keyCode == 38)
        {
            if(this.selectIndex == 1)
            {
                specialText_validYear(this);
                specialText_YearAdd(this,true);
            }
            else if(this.selectIndex == 2)
            {
                specialText_validMonth(this);
                specialText_MonthAdd(this,true);
            }
            else if(this.selectIndex == 3)
            {
                specialText_validDate(this);
                specialText_DateAdd(this,true);
            }
        }

        //按了下键
        if(keyCode == 40)
        {
            if(this.selectIndex == 1)
            {
                specialText_validYear(this);
                specialText_YearAdd(this,false);
            }
            else if(this.selectIndex == 2)
            {
                specialText_validMonth(this);
                specialText_MonthAdd(this,false);
            }
            else if(this.selectIndex == 3)
            {
                specialText_validDate(this);
                specialText_DateAdd(this,false);
            }
        }
    }
    //如果按了F5 或 TAB，不屏蔽
    else if(event.keyCode == 116 || event.keyCode == 9)
        event.returnValue = true;
    else
    {
        event.returnValue = false;
        //event.keyCode = 0;
    }
}

/*---------------------辅助函数-----------------------*/
//得到默认日期
function specialText_GetDate(middleChar)
{
    var oDate = new Date();
    return oDate.getYear() + middleChar
           + ((oDate.getMonth() + 1) < 10 ? ("0" + (oDate.getMonth() + 1)) : (oDate.getMonth() + 1)) + middleChar
           + (oDate.getDate() < 10 ? ("0" + oDate.getDate()) : oDate.getDate());
}
//得到字符像素宽度
function specialText_getCharWidth(charWidth,charNum)
{
    return charNum * charWidth;
}
//得到某年某月的最大天数

function specialText_getMonthDates(strYear,strMonth)
{
    var intMonth = parseInt(strMonth,10);
    if(intMonth == 1 || intMonth == 3 || intMonth == 5 || intMonth == 7
       || intMonth == 8 || intMonth == 10 || intMonth == 12)
        return 31;
    //处理30天的月份
    else if(intMonth == 4 || intMonth == 6 || intMonth == 9 || intMonth == 11)
        return 30;
    //处理2月份
    else
    {
        //闰年
        if(specialText_isLeapYear(strYear))
            return 29;
        //平年
        else
            return 28;
    }
}
//判断是否是闰年

function specialText_isLeapYear(strYear)
{
    var intYear = parseInt(strYear,10);
    if((intYear % 4 == 0 && intYear % 100 != 0) ||
       (intYear % 100 == 0 && intYear % 400 == 0))
        return true;
    else
        return false;
}

function changeHeight(iframeName)
	{
	   //alert('ok');
	    try
	    {
	       parent.window.document.getElementById(iframeName).height=document.body.scrollHeight;
	    }
	    catch(e)
	    {}
		
	}