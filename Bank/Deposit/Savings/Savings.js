function getCookie(c_name) {
  var c_value = document.cookie;
  var c_start = c_value.indexOf(" " + c_name + "=");
  if (c_start == -1) {
      c_start = c_value.indexOf(c_name + "=");
  }
  if (c_start == -1) {
      c_value = null;
  }
  else {
      c_start = c_value.indexOf("=", c_start) + 1;
      var c_end = c_value.indexOf(";", c_start);
      if (c_end == -1) {
          c_end = c_value.length;
      }
      c_value = unescape(c_value.substring(c_start, c_end));
  }
  return c_value;
}





  userid = getCookie("userid");


$(document).ready(function(){

     $.ajax({
            type: "GET",
            url: 'http://59.110.10.115/fun/user/getuserplatformbalance',
            data: {userId:userid},
            success: function (data) {


				 for(i=1;i<data.data.platformBalanceList.length;i++){
				 		var platformId = data.data.platformBalanceList[i].platformId;
						var platformName = data.data.platformBalanceList[i].platformName;
            var platformNameCh = data.data.platformBalanceList[i].platformNameCh;
						var balance = data.data.platformBalanceList[i].balance;  

						var Option = '<option value="'+platformId+'" class="walletSP">'+platformName+'('+platformNameCh+')</option>';
    			        $("#AccFrom").append(Option);$("#AccTo").append(Option);
                  $("#ddlWalletFrom").append(Option);$("#ddlWalletTo").append(Option);
                  

    			    }
    			        
			

                },
            error: function () {
              alert(data.data.errMsg);
                 }
            });


})






  var MyS = getCookie("s");

    function SendSaving() {

       		 Savingamount = $("#txtAmount").val();
       		 SavingfromId = $("#AccFrom").find("option:selected").val(); 
       		 SavingtoId = $("#AccTo").find("option:selected").val();

       		

             $.ajax({
                    type: "GET",
                    url: 'http://59.110.10.115/fun/balance/balanceTransfer',
                    data: { fromId:SavingfromId,
                    		toId:SavingtoId,
                    		amount:Savingamount,
                    		s:MyS},

                    success: function (data) {
                			if (data.errCode=="0") {
                				alert("成功");
                				parent.getbankdetail();
                			}                			

                        },
                    error: function (a) {
                      alert(data.data.errMsg);
                         }
                    });

}



function searchzhuanzhang(){
$("#zhuanzhanglishi").empty();



  var ddlMonth =  $("#ddlMonth").find("option:selected").val();
  var ddlYear = $("#ddlYear").find("option:selected").val();
  var ddlWalletFrom = $("#ddlWalletFrom").find("option:selected").val();
  var ddlWalletTo = $("#ddlWalletTo").find("option:selected").val();


       $.ajax({
            type: "GET",
            url: 'http://59.110.10.115/fun/balance/getBalanceTransferRecord',
            data: {
                    month:ddlMonth,
                    year:ddlYear,
                    fromId:ddlWalletFrom,
                    toId:ddlWalletTo,
                    s:MyS

            },
            success: function (data) {
                for(i=0;i<data.data.record.length;i++){
                 var time = data.data.record[i].createTime;
                 var id = data.data.record[i].code
                 var qingkuang = data.data.record[i].describe
                 var beizhu = data.data.record[i].comment;
                 var RMB = data.data.record[i].amount;
                 var zhuanzhang = '<tr><td align="center">'+time+'</td><td align="center"><span >'+id+'</span></td><td align="center"><span >'+qingkuang+'</span></td><td align="center"><span >'+beizhu+'</span></td><td align="center"><span id="">RMB '+RMB+'</span></td></tr>'
                  $("#zhuanzhanglishi").append(zhuanzhang);
                 }
                  
                },
            error: function () {
              alert("网络错误请刷新重试");
                 }
            });
}
	
	
