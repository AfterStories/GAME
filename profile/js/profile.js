 var userName;
 var password;
 var repassword;
var s = getCookie("s");

$(document).ready(function () {

         $.ajax({
         type: "GET",
         url: 'http://59.110.10.115/fun/user/getUserInfo',
         data: {
            s:s
         },
         success: function(data) {
                $("#txtFirstName").val(data.data.realName);
                $("#txtLoginID").val(data.data.name);              
                $("#txtMobile").val(data.data.phoneNumber);
                $("#txtEmail").val(data.data.email);
                $("#txtAddress").text(data.data.addrDetailPart);
            },
         error: function(c) {
             alert("网络错误");
         }
     });

//获取银行卡列表
    $.ajax({
         type: "GET",
         url: 'http://59.110.10.115/fun/balance/getBankAccountList',
         data: {
                s:s
         },
         success: function(data) {              
            for (var i =0;i<data.data.bankAccountList.length;i++) {
                var options = '<option value='+data.data.bankAccountList[i].id+'>'+data.data.bankAccountList[i].name+'-'+data.data.bankAccountList[i].account+'</option>'
                $("#AccountList").append(options);
            }

         },
         error: function(a, b, c) {
             alert("网络错误");
         }
        });


})


function btnSetDefault(){
    
var currBank = $("#AccountList").find("option:selected").val();
    $.ajax({
         type: "GET",
         url: 'http://59.110.10.115/fun/user/setDefaultBankAccount',
         data: {
                s:s,
                bankAccountId:currBank
            },
         success: function(data) {                              
            if (data.errCode != 0) {
                 alert(data.errMsg);
                 return
             }else{
                alert("成功");
                }                    
         },
         error: function(a, b, c) {
             alert("网络错误");
         }
        });  
}


function RemoveBank(){
    
var currBank = $("#AccountList").find("option:selected").val();

    $.ajax({
         type: "GET",
         url: 'http://59.110.10.115/fun/user/removeBankAccount',
         data: {
                s:s,
                 bankAccountId:currBank
            },
         success: function(data) {                              
            if (data.errCode != 0) {
                 alert(data.errMsg);
                 return
             }else{
                window.location.href='http://192.168.1.207:8088/Game/profile/index.html?tab=bankDetails'

                alert("成功");
                }                    
         },
         error: function(a, b, c) {
             alert("网络错误");
         }
        });  
}
function LookUserBakeInfo(){

     $('.container_manageAcc .acc_manage_content').hide();
 $("#LookbankDetails").show();
var currBank = $("#AccountList").find("option:selected").val();
    $.ajax({
         type: "GET",
         url: 'http://59.110.10.115/fun/balance/getBankAccountDetail',
         data: {
                s:s,
                accountId:currBank
            },
         success: function(data) {                  
                 $("#txtFirstName").val(data.data.realName);
                 $("#DisplayBankName").val(data.data.bankName);

                    $("#BankAccountNumber").val(data.data.account);
                 $("#DisplayProvince").val(data.data.province);
                 $("#DisplayCity").val(data.data.city);
                 $("#DisplayBankAddress").val(data.data.subbranch);                     
         },
         error: function(a, b, c) {
             alert("网络错误");
         }
        });  
}


function ChangeInfo(){

    var MobileNum = $("#txtMobile").val();
    var Address = $("#txtAddress").text();

         $.ajax({
         type: "GET",
         url: 'http://59.110.10.115/fun/user/changeUserInfo',
         data: {
            phoneNumber:MobileNum,
            addrDetailPart:Address,
            s:s
         },
         success: function(data) {
             if (data.errCode != 0) {
                 alert(data.errMsg);
                 return
             }else{
                alert("修改成功")
                }
         },
         error: function(c) {
             alert("网络错误");
         }
     });
}






 function changepassword() {

     password = $("#txtCurrentPassword").val();
     repassword = $("#txtNewPassword").val();


     if (!password||!repassword) {
         Alert('有未输入的项', true);
         return false;
     }

     $.ajax({
         type: "GET",
         url: 'http://59.110.10.115/fun/user/changePassword',
         data: {
             password: password,
             newPassword: repassword,
             s:s
         },
         success: function(data) {
             if (data.errCode != 0) {
                 alert(data.errMsg);
                 return
             }else{
                alert("修改成功")
                }
         },
         error: function(c) {
             alert("网络错误");
         }
     });



 }



 function changepersonInfo() {

     txtAddress = $("#txtAddress").val();
     txtMobile = $("#txtMobile").val();


     if (!password||!repassword) {
         Alert('有未输入的项', true);
         return false;
     }

     $.ajax({
         type: "GET",
         url: 'http://59.110.10.115/fun/user/changePassword',
         data: {
             password: password,
             newPassword: repassword,
             s:s
         },
         success: function(data) {
             if (data.errCode != 0) {
                 alert(data.errMsg);
                 return;
             }else{
                alert("修改成功")
                }
         },
         error: function(c) {
             alert("网络错误");
         }
     });



 }





 function getCookie(c_name) {
     var c_value = document.cookie;
     var c_start = c_value.indexOf(" " + c_name + "=");
     if (c_start == -1) {
         c_start = c_value.indexOf(c_name + "=");
     }
     if (c_start == -1) {
         c_value = null;
     } else {
         c_start = c_value.indexOf("=", c_start) + 1;
         var c_end = c_value.indexOf(";", c_start);
         if (c_end == -1) {
             c_end = c_value.length;
         }
         c_value = unescape(c_value.substring(c_start, c_end));
     }
     return c_value;
 }