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

  var s = getCookie("s");


function getbankdetail(){
              

                $.ajax({
                    type: "GET",
                    url: 'http://59.110.10.115/fun/user/getuserplatformbalance',
                    data: {userId:userid},
                    success: function (data) {

                            $("#AccountBalanceContent").empty();

                            var zhanghuyue = data.data.totalBalance;
                             $("#BaseMainContent_Label1").text(zhanghuyue);
                           
                            var zhuzhanghu = data.data.platformBalanceList[0].balance;
                            $("#zhuzhanghu").val(zhuzhanghu);

var ZhuSPAN = '<span><div class="items"><table width="100%" cellspacing="0" cellpadding="0" border="0"><tbody><tr><td class="walletMAIN" width="3%">&nbsp;</td><td width="40%"><div class="BalTitle"><span>主账户</span></div></td><td width="1%">:</td><td width="56%"><div class="BalAmt" id="'+zhuzhanghu+'"><span class="walletBal">RMB '+zhuzhanghu+'</span></div></td></tr></tbody></table></div></span><br>'
 $("#AccountBalanceContent").append(ZhuSPAN);
                          
                            for(i=1;i<data.data.platformBalanceList.length;i++){
                                    var platformName = data.data.platformBalanceList[i].platformName;
                                    var balance = data.data.platformBalanceList[i].balance;   

var blanceSPAN = '<span><div class="items"><table width="100%" cellspacing="0" cellpadding="0" border="0"><tbody><tr><td class="walletMAIN" width="3%">&nbsp;</td><td width="40%"><div class="BalTitle"><span>'+platformName+'</span></div></td><td width="1%">:</td><td width="56%"><div class="BalAmt" id="'+platformName+'"><span class="walletBal">RMB '+balance+'</span></div></td></tr></tbody></table></div></span><br>'
                                    $("#AccountBalanceContent").append(blanceSPAN);
                              }
                    },
                    error: function (a) {
                      alert(data.data.errMsg);
                        
                    }

                });


}




function searchcunkuan(){

 $("#cunkuanlishi").empty();

   var logmin = $("#logmin").find("option:selected").val();
   var logmax = $("#logmax").find("option:selected").val();
   var ddlDeptType = $("#ddlDeptType").find("option:selected").val();

   
       $.ajax({
            type: "GET",
            url: 'http://59.110.10.115/fun/balance/getChargeRecord',
            data: {
              fromDate:logmin,
              toDate:logmax,
              kind:ddlDeptType,
              s:s
            },
            success: function (data) {


         for(i=0;i<data.data.record.length;i++){

          var time = data.data.record[i].createTime;
          var id = data.data.record[i].serialNumber;
          var qingkuang = data.data.record[i].describe;
          var zhuangtai = data.data.record[i].status;
          var RMB = data.data.record[i].amount;

        if (zhuangtai=="1") {
            beizhu = "未支付"
        }else if (zhuangtai=="2") {
            beizhu = "处理中"
        }else if (zhuangtai=="3") {
            beizhu = "审核"
        }else if (zhuangtai=="4") {
            beizhu = "拒绝"
        }else if (zhuangtai=="5") {
            beizhu = "完成"
        }else if (zhuangtai=="6") {
            beizhu = "取消"
        }else{
          beizhu = "错误"
        }

        var cunkuanlishi = '<tr><td align="center">'+time+'</td><td align="center"><span >'+id+'</span></td><td align="center"><span >'+qingkuang+'</span></td><td align="center"><span >'+beizhu+'</span></td><td align="center"><span id="">RMB '+RMB+'</span></td></tr>'
           $("#cunkuanlishi").append(cunkuanlishi);
          }
                  
                },
            error: function () {
              alert("网络错误请刷新重试");
                 }
            });
}
    













$(document).ready(function(){

    getbankdetail();
  
})