var UserLogined = getCookie("s");
var AjaxUrl = 'http://59.110.10.115';


$(document).ready(function(){



/*获取轮播图*/


var lunbotukey = "促销页轮播图"
	

      $.ajax({
         type: "GET",
         url: AjaxUrl+'/fun/websiteInfo/getImgAdList?key='+lunbotukey,
         data: {},
         success: function(data) {             
            for (var i = 0; i < data.data.adList.length ;i++) {
                  var picsrc = AjaxUrl+data.data.adList[i].imgUrl;
                  var picUrl = data.data.adList[i].jmpUrl;

                  var Pic = '<div class="swiper-slide"><a href="'+picUrl+'"><img src="'+picsrc+'"/></a></div>'
                  $("#IM-Casino-Pic").append(Pic);
              
            }


                /*   <!-- 实例化轮播图 -->*/
               var mySwiper = new Swiper ('.swiper-container', {
                   direction: 'horizontal',
                   loop: true,
                   autoplay: 3000,//可选选项，自动滑动
                  
                   height: 100,//你的slide高度
                   
                   nextButton: '.swiper-button-next',
                   prevButton: '.swiper-button-prev',
                   // 如果需要分页器
                   pagination: '.pagination',
                   paginationClickable :true,
                   grabCursor:true,
                  /*paginationElement : 'li',*/
        
  })

         },
         error: function() {

         }
});    /* AJAX结束*/  









//获取内容


$.ajax({
   type: "GET",
   url: AjaxUrl+'/fun/websiteinfo/getPreferentialInfoList',
   data: {},
   success: function(data) {

               var kinds = [];

                for (var i = 0; i < data.data.preferentialInfoList.length; i++) {


                        var kind = data.data.preferentialInfoList[i].kindName;

                        if(!kinds[kind]){
                            kinds[kind] = [];
                        }
                        kinds[kind].push(data.data.preferentialInfoList[i]);

                }


 
    for(var k in kinds)
    {

            var BoxKindId = kinds[k][0].kindId;



            /* 添加分类导航栏tab */
            var tabbtn = '<td id="navtd'+BoxKindId+'"><a class="active"><div class="ManageAcc_nav_text"><span class="nav_btn3"></span>'+k+'</div></a></td>'
            $("#nav-td").append(tabbtn);


            /*添加分类导航栏下对应分类的容器*/
            var cardTypeBOX = '<ul class="chuxiao-page"  style="display:none"><div class="contentList" id="'+BoxKindId+'"></div></ul>'
            $("#footer").before(cardTypeBOX);

            /*第一个tab显示*/
            $("#nav-td").children("div:first-child").attr("class","selected");




        for (var i = 0; i < kinds[k].length; i++) {

            var promotionsTypeId = kinds[k][i].kindId;
            var promotionsTypeCh = kinds[k][i].kindName;
            var promotionsTitle = kinds[k][i].title;
            var promotionsImg = AjaxUrl+kinds[k][i].imgUrl;
            var promotionssummary = kinds[k][i].summary;
            var promotionstime = kinds[k][i].endTime;
            var promotionscontent = kinds[k][i].detail
            var promotionId = kinds[k][i].id

            /*促销图片 */
var CardImg = '<li><div class="promoHeader" name="'+promotionsTitle+'"><div class="promo"><div class="promoicon"><img src="'+promotionsImg+'" alt="/"></div>'
/*促销名称 */
var CardName = '<div class="infoTxt"><ul><li class="promoTxtHdr nostyle">'+promotionsTitle+'</li><li class="promoTxtSub infoBtn_bot nostyle">'+promotionssummary+'</li></ul></div>'
/* 促销按钮 */



var CardBtnRes= '<div class="infoBtn"><div class="nav_tit_try  msg_bold applyBtn" onclick="window.location.href="../Registration/index.html"">立刻注册</div><div class="nav_tit_play infoBtn_bot msg_bold" onclick="$(this).parent().parent().parent().next().slideToggle();return false;">更多详情</div></div>'
var CardBtnapply  = '<div class="infoBtn"><div class="nav_tit_try  msg_bold applyBtn" onclick="applyNowBtn('+promotionId+')">立刻申请</div><div class="nav_tit_play infoBtn_bot msg_bold" onclick="$(this).parent().parent().parent().next().slideToggle();return false;">更多详情</div></div>'

var CardBtnShow 

if (UserLogined) {
    CardBtnShow = CardBtnapply;
}else{
   CardBtnShow = CardBtnRes;
}



/* 促销时间 */
var CardTime = '<div class="infotime"><div class="countdown_title"><span>本活动有效时间截至</span></div><br><ul class="countdown"><li >'+promotionstime+'</li></ul></div></div></div>'
/* 详细内容 */
var CardDetails = '<div class="terms" style="display:none">'+promotionscontent+'</div><img src="../lib/images/tbl-bg-03.png" alt="deco"></li>'

var promotionsCard =  CardImg+CardName+CardBtnShow+CardTime+CardDetails;


$("#"+BoxKindId).append(promotionsCard);




}

      


}


            /*第一个容器显示*/
            $(".myContent").children("ul:first-child").css("display","block");




              //导航按钮切换
             $('#nav-td td').click(function(){
                 $(this).addClass('selected').siblings().removeClass('selected')
                 
             })


             //内容切换
             $('#nav-td td').click(function(){
                 var cur = $(this).index();
                 $('.myContent .chuxiao-page').eq(cur).show().siblings('.myContent .chuxiao-page').hide();
             })








         },
         error: function(data){
            
         }
     });





var pronavtab = GetQueryString("pronavtab");
console.log("#navtd"+pronavtab)

     setTimeout(function(){
       Likeclick()
     }, 100)
      


      function Likeclick(){
       $("#navtd"+pronavtab).trigger("click");
     }



     })       
  /* ready结束*/  



var ApplyUser = getCookie("s");


function applyNowBtn(promotionId){

      $.ajax({
         type: "GET",
         url: AjaxUrl+'/fun/game/applyPreferential',
         data: {
                s:UserLogined,
                preferentialInfoId:promotionId

         },
         success: function(data) {
         	if (data.errCode==0) {
         		alert("申请成功！")
         	}else{
         		alert(data.errMsg);
         	}
         },
         error: function(data){
            
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



function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}



