


        function AddInputUrl() {   /*添加网址*/
            var divTo = document.getElementById("webTo"),
                divFrom = document.getElementById("webFrom");
            var childs = divFrom.childNodes;
            for (i = 0; i < childs.length; i++) {
                if (childs[i].nodeType == 1) {
                    if (validateWebsite(childs[i])) {
                        divTo.appendChild(childs[i].cloneNode(true));
                        childs[i].value = "http://";
                    }
                }
            }
            ResetHeight();
        }
        function NumericTextBox(event) {
            // CharCode
            var charCode = (event.which) ? event.which : event.keyCode

            if (charCode > 31 && (charCode < 48 || charCode > 57))
                return false;

            return true;
        }

        function MinusInputUrl() {
            var objTDWeb = document.getElementById("webTo");
            var childs = objTDWeb.childNodes;
            if (childs.length != 0) {
                objTDWeb.removeChild(childs[childs.length - 1]);
                ResetHeight();
            }
        }
        function isEmpty(a) {
            if ((a == '') || (a == null))
                return true;
            else
                return false;
        }

        function isEmail(email) {
            var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            return re.test(email);
        }

        function ResetHeight() {
            try {
                parent.document.getElementById('mainFrame').height = document.body.scrollHeight > 693 ? document.body.scrollHeight + 10 : 700;
            }
            catch (e) {
            }
        }
        function validateWebsite(obj) {
            if (!isURL(obj.value)) {
                alert(document.getElementById("WebTxtOuter").innerText + " " + "格式错误.");
                obj.style.borderColor = "Red";
                obj.focus();
                return false;
            }
            else {
                obj.style.borderColor = "";
                return true;
            }
        }

        function CheckUser(obj) {
            if (isEmpty(obj.value)) return true;
            if (AjaxUserCheck(obj.value)) {
                alert('用户名已经注册请选择其它名称！');
                obj.style.borderColor = "Red";                               
            }

        }
        function CheckAffCode(obj) {
            if (isEmpty(obj.value)) return true;
            if (AjaxCheck(obj.value)) {
                alert('推荐人编号不存在,请重新填写.');
                obj.style.borderColor = "Red";                
            }

        }
        function CheckEMail(obj) {
            if (isEmpty(obj.value)) return true;
            if (AjaxEMailCheck(obj.value)) {
                alert('Email已经存在！');
                obj.style.borderColor = "Red";
            }

        }
        
        function CheckUrl(obj) {
            if (isEmpty(obj.value) || obj.value.toUpperCase() == "HTTP://") return true;
            if (AjaxUrlCheck(obj.value)) {
                alert('网址已经存在！');
                obj.style.borderColor = "Red";
            }
        }


/*        function ChangeNation(obj) {
            for (var i = 0; i < obj.length; i++) {
                if (obj.options[i].selected) {

                    if (obj.options[i].value == 'CN') {
                        document.getElementById("trProvince").style.display = '';
                        ResetHeight();
                        return true;
                    }
                }
            }
            document.getElementById("trProvince").style.display = 'none';
            ResetHeight();
            return false;
        }
*/

       function AjaxUserCheck(str){
                
                $.ajax({
                    type: "GET",
                    url: 'http://59.110.10.115/fun/validate/checkagentname',
                    data: {name:str},
                    success: function (data) {
                        if (data.d=="1") {
                            return true
                        }
                        
                    },
                    error: function () {
                      
                    }

                });
        };



        function AjaxEMailCheck(str){
                
                $.ajax({
                    type: "GET",
                    url: 'http://59.110.10.115/fun/validate/checkagentemail',
                    data: {email:str},
                    success: function (data) {
                        if (data.d=="1") {
                            return true
                        }
                        
                    },
                    error: function () {
                      
                    }

                });
        };

        function AjaxUrlCheck(str){
                
                $.ajax({
                    type: "GET",
                    url: 'http://59.110.10.115/fun/validate/checkagenthomepage',
                    data: {homepage:str},
                    success: function (data) {
                        if (data.d=="1") {
                            return true
                        }
                        
                    },
                    error: function () {
                      
                    }

                });
        };




        function agentsRegister(){

    var objName = $("#txtName").val();
    var sex = $("input[name='rblGender']:checked").val();  
    var objEMail = $("#txtEMail").val();    
    var objTel = $("#txtTel").val();
    var objWebUrl = $("#txtWebUrl").val();
    var objWeb = $('#WebTypeDDL option:selected').val();//网站类型

    var objUserName = $("#txtUserName").val();
    var objPwd = $("#txtPwd").val();
    var objPwd2 = $("#txtPwd2").val();
    var txtParentName =$("#txtParentName").val(); 
    var objAgree = $("input[type='checkbox']").is(':checked');

    var objBirthYear = $('#ddlBirthYear option:selected').val();
    var objBirthMonth = $('#ddlBirthMonth option:selected').val();
    var objBirthDay = $('#txtBirthDay option:selected').val();
    var birthday = objBirthYear+"-"+objBirthMonth+"-"+objBirthDay;

            if (isEmpty(objName)) {
                alert('姓名 未输入请确认!');
                
                $("#txtName").focus();
                return false;
            }
            else {
                
            }

            if (!((document.getElementById("rblGender_0").checked) || (document.getElementById("rblGender_1").checked))) {
                alert('性別 未选取请确认!');
                document.getElementById("rblGender").focus();
                return false;
            }

            if (isEmpty(objEMail)) {
                alert('电子邮箱地址 未输入请确认!');
                
                $("#txtEMail").focus();
                return false;
            }
            else {
                $("#txtEMail").css("border-color","#bcbcbc");
            }

            if (!isEMail(objEMail)) {
                alert('电子邮箱地址 错误格式请确认!');
               
                $("#txtEMail").focus();
                return false;
            }
            else {
                $("#txtEMail").css("border-color","#bcbcbc");
            }

            if (isEmpty(objTel)) {
                alert('联系电话  未输入请确认!');

               
                $("#txtTel").focus();                

                return false;
            }
            else {
                $("#txtTel").css("border-color","#bcbcbc");
            }

            if (!isTelephone(objTel)) {
                alert('联系电话  错误格式请确认!');
                
                $("#txtTel").focus();   
                return false;
            }
            else {
                $("#txtTel").css("border-color","#bcbcbc");
            }

            if (isEmpty(objUserName)) {
                alert('用户名 未输入请确认!');
                
                $("#txtUserName").focus();
                return false;
            }
            else {
                $("#txtUserName").css("border-color","#bcbcbc");
            }

            if (!isUserName(objUserName)) {
                alert('仅可使用6-20字符的字母，数字和下划线组成。');
                
                $("#txtUserName").focus();
                return false;
            }
            else {
                $("#txtUserName").css("border-color","#bcbcbc");
            }

            if (isEmpty(objPwd)) {
                alert('输入您的新密码  未输入请确认!');
                
                $("#txtPwd").focus();
                return false;
            }
            else {
                $("#txtPwd").css("border-color","#bcbcbc");
            }

            if (isEmpty(objPwd2)) {
                alert('输入您的新密码  未输入请确认!');
                
                $("#txtPwd2").focus();
                return false;
            }
            else {
                $("#txtPwd2").css("border-color","#bcbcbc");
            }

            if (objPwd != objPwd2) {
                alert('输入您的新密码 和 再次输入您的新密码 不相同 请确认');
               
                $("#txtPwd2").focus();
                return false;
            }
            else {
                $("#txtPwd2").css("border-color","#bcbcbc");
            }

            if (!isPwd(objPwd)) {
                alert('数字和字母混合密码，必须至少要有６位并区分大小写!');
               
                $("#txtPwd").focus();
                return false;
            }
            else {
                $("#txtPwd").css("border-color","#bcbcbc");
            }

            if (objBirthYear == "") {
                alert('出生年 未选取请确认!');
                
                $("#ddlBirthYear").focus();
                return false;
            }
            else {
                $("#ddlBirthYear").css("border-color","#bcbcbc");
            }

            if (objBirthMonth == "") {
                alert('出生月 未选取请确认!');
                
                $("#ddlBirthMonth").focus();
                return false;
            }
            else {
                $("#ddlBirthMonth").css("border-color","#bcbcbc");
            }

            if (isEmpty(objBirthDay)) {
                alert('出生日期 未输入请确认!');
                
                $("#txtBirthDay").focus();
                return false;
            }
            else {
                $("#txtBirthDay").css("border-color","#bcbcbc");
            }

            if (!isNum(objBirthDay) || objBirthDay < 1 || objBirthDay > 31) {
                alert('格式错误.');
               
                $("#txtBirthDay").focus();
                return false;
            }
            else {
                $("#txtBirthDay").css("border-color","#bcbcbc");
            }



            if (objAgree == false) {
                alert('规则及规定 未勾选无法视为同意请确认!');
                return false;
            }
            else {
              
            }

            if (!isEmpty(objWebUrl) && objWebUrl.toUpperCase() != "HTTP://") {
                if (!isURL(objWebUrl)) {
                    alert('格式错误.');

                   
                    $("#txtWebUrl").focus();

                    return false;
                }
                else {
                    $("#txtWebUrl").css("border-color","#bcbcbc");
                }

            }


/*            var objWebUrl = document.getElementsByName("txtWebUrl");
            var objWeb = document.getElementById("txtWeb");
            var strTemp = '';
            for (var i = 0; i < objWebUrl.length; i++) {
                if (!isEmpty(objWebUrl[i].value) && objWebUrl[i].value.toUpperCase() != "HTTP://") {
                    if (!isURL(objWebUrl[i].value)) {
                        alert('格式错误.');
                        objWebUrl[i].style.borderColor = "Red";
                        objWebUrl[i].focus();
                        return false;
                    }
                    else {
                        objWebUrl[i].style.borderColor = "";
                    }
                    strTemp += objWebUrl[i].value;
                    strTemp += "||";
                }
            }
            strTemp = strTemp.substr(0, strTemp.length - 2);
            objWeb.value = strTemp;
            console.log(strTemp);
            return true;*/

MyBtnSubmit();
           



function MyBtnSubmit(){


$.ajax({
    type: "GET",
    url: 'http://59.110.10.115/fun/agent/register',
    data: {
        realName:objName,        
        sex:sex,
        email:objEMail,
        phoneNumber:objTel,
        homepage:objWebUrl,
        websiteKind:objWeb,
        name:objUserName,
        password:objPwd2,
        birthday:birthday,
        extensionCode:txtParentName

    },
    success: function (data) {

        if(data.errCode == 0){
            alert("注册成功");
        }
        else{
            alert("错误请重试");
        }

    },
    error: function () {
      
       alert(data.data.errMsg); 
    }

});

}
}

