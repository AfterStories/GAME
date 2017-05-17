/*getGamecard.js*/
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


function OpenGame(a){
     var Mys = getCookie("s"); 
          

             $.ajax({
                    type: "GET",
                    url: 'http://59.110.10.115/fun/game/launchGame',
                    data: {gameId:a,s:Mys},
                    success: function (data) {
                    	if (data.errCode!==0) {
                    		alert(data.errMsg);
                    	}

                        var GameSrc = data.data.launchUrl;                                              
                        popUpWindowManager(GameSrc);
                        },
                    error: function () {
                       alert("请先登陆");
                         }
                    });

}

function popUpWindowManager(defaultUrl) {
    var pathname = window.location.pathname;
    var pathInSplit = pathname.split("/");
    var lastElement = pathInSplit.length - 1;
    if (pathInSplit[lastElement] == "" && defaultUrl.indexOf("..") != -1) defaultUrl = defaultUrl.split("..").join("");
    var getHeight = screen.availHeight;
    var curHeight = getHeight - 70;
    window.open(defaultUrl)
}



  $(document).ready(function(){

	var AjaxUrl = 'http://59.110.10.115';

      $.ajax({
         type: "GET",
         url: AjaxUrl+'/fun/websiteInfo/getImgAdList?key=百乐城轮播图',
         data: {},
         success: function(data) {             
            for (var i = 0; i < data.data.adList.length ;i++) {
                  var PicSrc = AjaxUrl+data.data.adList[i].imgUrl;
                  var CasinoPic = '<div class="swiper-slide"><img src="'+PicSrc+'"/></div>'
                  $("#IM-Casino-Pic").append(CasinoPic);
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
     });            








    $.ajax({
         type: "GET",
         url: AjaxUrl+'/fun/game/getgamelist',
         data: {
                districtId:"1"
         },
         success: function(data) {

         		for (var i = 0; i < data.data.length; i++) {
         		//判断标签
         			for (var j = 0; j < data.data[i].gameGroup.length; j++) {

                     var gameid = data.data[i].id;
                     var gameImg =AjaxUrl+data.data[i].gameImgUrl;
                     var gamename = data.data[i].name_ch;  

         				if ( data.data[i].gameGroup[j]=="NewGames") {//新游戏
							var NewGames = '<div class="tdGames dy-unit normalCard" id="'+gameid+'"><div class="starcasinogame"><input class="hiddenGameId" value="" type="hidden"><a class="btnPTRealPlay" id="'+gameid+'" onclick="OpenGame('+gameid+');"><img alt="" src="'+gameImg+'"></a></div><div class="PT_button_hover" style="display: none;"><div class="f_right play4 msg_bold starcasinogame PTButtons"><input class="hiddenGameId" value="" type="hidden"><a class="btnPTRealPlay" id="'+gameid+'" onclick="OpenGame('+gameid+')">马上开始</a></div></div><div class="f_left text4 msg_bold">'+gamename+'</div></div>'
         					$("#Card-NewGames").append(NewGames); 
         				}

         				if ( data.data[i].gameGroup[j]=="HotGames") {//热门游戏
							var HotGames = '<div class="tdGames dy-unit normalCard" id="'+gameid+'"><div class="starcasinogame"><input class="hiddenGameId" value="" type="hidden"><a class="btnPTRealPlay" id="'+gameid+'" onclick="OpenGame('+gameid+');"><img alt="" src="'+gameImg+'"></a></div><div class="PT_button_hover" style="display: none;"><div class="f_right play4 msg_bold starcasinogame PTButtons"><input class="hiddenGameId" value="" type="hidden"><a class="btnPTRealPlay" id="'+gameid+'" onclick="OpenGame('+gameid+')">马上开始</a></div></div><div class="f_left text4 msg_bold">'+gamename+'</div></div>'
         					$("#Card-HotGames").append(HotGames); 
         				}

         				if ( data.data[i].gameGroup[j]=="3DSlots") {//3D老虎机
							var DSlots = '<div class="tdGames dy-unit normalCard" id="'+gameid+'"><div class="starcasinogame"><input class="hiddenGameId" value="" type="hidden"><a class="btnPTRealPlay" id="'+gameid+'" onclick="OpenGame('+gameid+');"><img alt="" src="'+gameImg+'"></a></div><div class="PT_button_hover" style="display: none;"><div class="f_right play4 msg_bold starcasinogame PTButtons"><input class="hiddenGameId" value="" type="hidden"><a class="btnPTRealPlay" id="'+gameid+'" onclick="OpenGame('+gameid+')">马上开始</a></div></div><div class="f_left text4 msg_bold">'+gamename+'</div></div>'
         					$("#Card-3DSlots").append(DSlots); 
         				}

         				if ( data.data[i].gameGroup[j]=="videoSlot") {//视频老虎机
							var videoSlot = '<div class="tdGames dy-unit normalCard" id="'+gameid+'"><div class="starcasinogame"><input class="hiddenGameId" value="" type="hidden"><a class="btnPTRealPlay" id="'+gameid+'" onclick="OpenGame('+gameid+');"><img alt="" src="'+gameImg+'"></a></div><div class="PT_button_hover" style="display: none;"><div class="f_right play4 msg_bold starcasinogame PTButtons"><input class="hiddenGameId" value="" type="hidden"><a class="btnPTRealPlay" id="'+gameid+'" onclick="OpenGame('+gameid+')">马上开始</a></div></div><div class="f_left text4 msg_bold">'+gamename+'</div></div>'
         					$("#Card-videoSlot").append(videoSlot); 
         				}

         				if ( data.data[i].gameGroup[j]=="ProgressiveSlots") {//大奖老虎机
							var ProgressiveSlots = '<div class="tdGames dy-unit normalCard" id="'+gameid+'"><div class="starcasinogame"><input class="hiddenGameId" value="" type="hidden"><a class="btnPTRealPlay" id="'+gameid+'" onclick="OpenGame('+gameid+');"><img alt="" src="'+gameImg+'"></a></div><div class="PT_button_hover" style="display: none;"><div class="f_right play4 msg_bold starcasinogame PTButtons"><input class="hiddenGameId" value="" type="hidden"><a class="btnPTRealPlay" id="'+gameid+'" onclick="OpenGame('+gameid+')">马上开始</a></div></div><div class="f_left text4 msg_bold">'+gamename+'</div></div>'
         					$("#Card-ProgressiveSlots").append(ProgressiveSlots); 
         				}         				         				         				         				

         			}

         		}



 				  $(".tdGames, .tdMain, .dvMain , .dvPtHover").hover(
 				  function () {
 				      $(this).children(".PT_hover_main").css("display", "block");
 				      $(this).children(".PT_button_hover").css("display", "block");
 				  }, function () {
 				      $(this).children(".PT_hover_main").css("display", "none");
 				      $(this).children(".PT_button_hover").css("display", "none");
 				  });    

        //导航按钮切换
    $('#ulGameType li').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected')
        
    })

    //内容切换
    $('#ulGameType li').click(function(){
        var cur = $(this).index();
        $('#pnl1-box .pnl1').eq(cur).show().siblings('.pnl1').hide();
    }) 				       		
 				      
         },
         error: function(data){
            
         }
     });   

  })
