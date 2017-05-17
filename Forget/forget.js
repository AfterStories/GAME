
var ajaxurl = 'http://59.110.10.115';


$(document).ready(function () {

     $.ajax({
         type: "GET",
         url: ajaxurl+'/websiteInfo/getPasswordGetBackQuestionList',
         data: {

         },
         success: function(data) {
          for (var i = 0; i < data.data.questionList.length; i++) {
             var value = data.data.questionList[i].id;
             var ques = data.data.questionList[i].text;
         	 var options = '<option value="'+value+'">'+ques+'</option>'
            $('#ddlSecurityQuestion').append(options);
          }

         },
         error: function(a, b, c) {
             
         }
     });


})




function forgetPasswordBtn1(){

 var answer = $('#txtSecurityAnswer').val().trim();
 var question = $('#ddlSecurityQuestion').find("option:selected").val();
 var username = $('#username').val();
 var txtConfirmPassword = $('#txtConfirmPassword').val();
     $.ajax({
         type: "GET",
         url: ajaxurl+'/fun/user/forgetPassword',
         data: {
         	userName:username,
         	questionId:question,
         	answer:answer,
         	newPassword:txtConfirmPassword
         },
         success: function(data) {
             if (data.errCode != 0) {
                 alert(data.errMsg);
                 return;
             }
             Logout();
              alert("修改成功,请重新登录");
             window.location.href="../home/index.html"
            

         },
         error: function(a, b, c) {
             alert(data.data.errMsg);
         }
     });	
}


