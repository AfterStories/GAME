var ajaxurl = 'http://59.110.10.115';

$(document).ready(function () {

     $.ajax({
         type: "GET",
         url: ajaxurl+'/websiteInfo/getPasswordGetBackQuestionList',
         data: {

         },
         success: function(data) {
          for (var i = 0; i < data.data.questionList.length; i++) {
             var registervalue = data.data.questionList[i].id;
             var registerques = data.data.questionList[i].text;
           var options = '<option value="'+registervalue+'">'+registerques+'</option>'
            $('#ddlSecurityQuestion').append(options);
          }
console.log(options)
         },
         error: function(a, b, c) {
             
         }
     });


})

function MyBtnSubmit(){
  var birthday = $("#hfPersonalBOB").val();
   var nickname = $("#nickname").val();
   var chkAgree =$('#chkAgree').is(':checked');
   var chkAcknowledge =$('#chkAcknowledge').is(':checked');
   var thequestion = $('#ddlSecurityQuestion').find("option:selected").val();
   var theanswer = $('#txtSecurityQuestion').val().trim();
   console.log(theanswer);
   

if (!thequestion&&!theanswer) {
    alert("安全提问及答案将用来核对您的身份,为必填项。")
    return;
}


   if (chkAgree&&chkAcknowledge) {
          $.ajax({
                    type: "GET",
                    url: ajaxurl+'/fun/user/register',
                    data: {
                      realName:($("#txtLastName").val() + $("#txtFirstName").val()),
                      birthday:$("#hfPersonalBOB").val(), 
                      sex:$('input:radio[name="rbtnGender"]:checked').val(),
                      nickname:$("#nickname").val(),
                      password:$("#txtPassword").val(),
                      email:$("#txtEmail").val(),
                      phoneNumber:$("#txtMobile").val(),
                      agentCode:$("#txtRefCode").val(),
                      passwordGetBackQuestionId:thequestion,
                      passwordGetBackAnswer:theanswer
                    },
                    success: function (data) {
                        if(data.errCode == 0){
                            alert("注册成功")
                        }
                        else{
                            alert(data.errMsg);
                        }

                    },
                    error: function () {                      
                       alert("网络错误请重试"); 
                    }

                });
    
   }else{
    alert("尚未同意并勾选相关条款以及年满18岁确认")
   }


}