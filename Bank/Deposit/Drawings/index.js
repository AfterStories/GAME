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


var token =getCookie("s")



$(document).ready(function(){
	

	$.ajax({
         type: "GET",
         url: 'http://59.110.10.115/fun/balance/getBankAccountList',
         data: {
         		s:token
         },
         success: function(data) {        		
         	for (var i =0;i<data.data.bankAccountList.length;i++) {
         		var options = '<option value='+data.data.bankAccountList[i].id+'>'+data.data.bankAccountList[i].name+'-'+data.data.bankAccountList[i].account+'</option>'
         		$("#ddlPreferBank").append(options);
         	}
         	getUserInfo();


         },
         error: function(a, b, c) {
             alert("网络错误");
         }
     	});


	$.ajax({
         type: "GET",
         url: 'http://59.110.10.115/fun/balance/getBankList',
         data: {
         },
         success: function(data) {        		
         	for (var i =0;i<data.data.bankList.length;i++) {
         		var options = '<option value='+data.data.bankList[i].id+'>'+data.data.bankList[i].name+'</option>'
         		$("#ddlBankName").append(options);
         	}         	

         },
         error: function(a, b, c) {
             alert("网络错误");
         }
     	});


function getUserInfo(){
var currBank = $("#ddlPreferBank").find("option:selected").val();
	$.ajax({
	     type: "GET",
	     url: 'http://59.110.10.115/fun/balance/getBankAccountDetail',
	     data: {
	     		s:token,
	     		 accountId:currBank
	     	},
	     success: function(data) {								
				 
				 $("#txtUsedBank").val(data.data.bankName);
				$("#txtUsedAcc").val(data.data.account);
				 $("#txtUsedProvince").val(data.data.province);
				 $("#txtUsedCity").val(data.data.city);
				 $("#txtUsedBranch").val(data.data.subbranch);	

				$("#hiddenBankId").val(data.data.bankId);							
	     },
	     error: function(a, b, c) {
	         alert("网络错误");
	     }
	 	});	 
}




//选择框事件

$("#ddlPreferBank").change(function () {
getUserInfo();

});


$("#ckNewAcc").click(function(){
	choosetype();
});
$("#ckPreferAcc").click(function(){
	choosetype();
})


function choosetype(){
	var usertype = $('input:radio[name="DepositMainContent"]:checked').val();

if (usertype=="ckNewAcc") {
	$("#divNewAcc").css("display","block");
	$("#divUsedAcc").css("display","none");

}else{
	$("#divNewAcc").css("display","none");
	$("#divUsedAcc").css("display","block");	
}


}




})




$("#BtnSubmit").click(function () {

});

function btnSubmitOnClick()
{
	

var txtAmount = $("#txtAmount").val();
var txtUsedName = null;
var txtUsedBank = null;
var txtUsedAcc = null;
var txtUsedProvince = null;
var txtUsedCity = null;
var txtUsedBranch = null;

var usertype = $('input:radio[name="DepositMainContent"]:checked').val();


if (usertype=="ckNewAcc") {

	txtUsedBank = $("#ddlBankName").find("option:selected").val();
	txtUsedName = $("#txtAccHolderName").val();
 	txtUsedAcc = $("#txtBankAcc").val();
 	txtUsedProvince = $("#txtSpecialProvince").val();
 	txtUsedCity = $("#txtSpecialCity").val();
 	txtUsedBranch = $("#txtSpecialBranch").val();

}else{
	txtUsedBank = $("#hiddenBankId").val();
 	txtUsedName = $("#txtUsedName").val(); 	
 	txtUsedAcc = $("#txtUsedAcc").val();
 	txtUsedProvince = $("#txtUsedProvince").val();
 	txtUsedCity = $("#txtUsedCity").val();
 	txtUsedBranch = $("#txtUsedBranch").val();
}

	$.ajax({
     		type: "GET",
     		url: 'http://59.110.10.115/fun/balance/draw',
     		data: {
     				s:token,
     				amount:txtAmount,
     				accountHolder:txtUsedName,
     				bankId:txtUsedBank,
     				account:txtUsedAcc,
     				province:txtUsedProvince,
     				city:txtUsedCity,
     				subbranch:txtUsedBranch

     		},
     		success: function(data) {		
					if (data.errCode=="0") {
						alert("申请成功");
					}else{
						alert(data.errMsg);
					}
					
     		},
     		error: function() {
     		    alert("网络错误");
     		}
     	});
}





function searchtikuan(){

$("#tikuanlishi").empty();

   var drawlogmin = $("#drawlogmin").find("option:selected").val();
   var drawlogmax = $("#drawlogmax").find("option:selected").val();
   var tikuanlDeptType = $("#tikuanlDeptType").find("option:selected").val();

var beizhu
       $.ajax({
            type: "GET",
            url: 'http://59.110.10.115/fun/balance/getDrawRecord',
            data: {
                fromDate: drawlogmin,
                toDate: drawlogmax,
                aa:tikuanlDeptType,
                s:token
            },
            success: function (data) {


         for(i=0;i<data.data.record.length;i++){
          var time = data.data.record[i].createTime;
          var id = data.data.record[i].code;
          var qingkuang = data.data.record[i].describe;
          var zhuangtai = data.data.record[i].status;
          var RMB = data.data.record[i].amount;

        if (zhuangtai=="0") {
            beizhu = "未知"
        }else if (zhuangtai=="1") {
            beizhu = "等待审核"
        }else if (zhuangtai=="2") {
            beizhu = "审核推迟"
        }else if (zhuangtai=="3") {
            beizhu = "审核通过"
        }else if (zhuangtai=="4") {
            beizhu = "审核失败"
        }else{
          beizhu = "错误"
        }          

          var tikuan = '<tr><td align="center">'+time+'</td><td align="center"><span >'+id+'</span></td><td align="center"><span >'+qingkuang+'</span></td><td align="center"><span >'+beizhu+'</span></td><td align="center"><span id="">RMB '+RMB+'</span></td></tr>'
           $("#tikuanlishi").append(tikuan);
          }
                  
                },
            error: function () {
               alert("网络错误请刷新重试");
                 }
            });
}
    
    
