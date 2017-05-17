  $(document).ready(function(){

	    var AjaxUrl = 'http://59.110.10.115';

      $.ajax({
         type: "GET",
         url: AjaxUrl+'/fun/websiteInfo/getImgAdList?key=天上人间广告大图',
         data: {},
         success: function(data) {        
              var Picurl =AjaxUrl+data.data.adList[0].imgUrl;
             $("#TheLoungePic").attr("src",Picurl);
             $("#TheLoungePicId").attr("src",data.data.adList[0].jmpUrl);



         },
         error: function() {

         }
     });  

      $.ajax({
         type: "GET",
         url: AjaxUrl+'/fun/websiteInfo/getImgAdList?key=天上人间轮播图',
         data: {},
         success: function(data) {        
            for (var i = 0; i < data.data.adList.length ;i++) {
                  var PicSrc = AjaxUrl+data.data.adList[i].imgUrl;
                  var PicJul = data.data.adList[0].jmpUrl;
                  var ThoungePic = '<div class="swiper-slide"><a href = "'+PicJul+'"><img src="'+PicSrc+'"/></a></div>'
                  $(".swiper-wrapper").append(ThoungePic);
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
         url: AjaxUrl+'/fun/websiteInfo/getImgAdList?key=天上人间广告小图',
         data: {},
         success: function(data) {        
            for (var i = 0; i < data.data.adList.length ;i++) {
                  var PicSrc = AjaxUrl+data.data.adList[i].imgUrl;
                  var Picdizhi = data.data.adList[i].jmpUrl;
                  var ThoungePic = '<li><div class="panel"><div class="subfeature"><a href="'+Picdizhi+'" target="_blank"><img src="'+PicSrc+'" alt="august-girl" width="84" height="96"></a><div class="subfeature-txt"><h2>'+(i+1)+'</h2></div></div></div></li>'
                  $("#foo3").append(ThoungePic);
            }


         },
         error: function() {

         }
     });  





});
