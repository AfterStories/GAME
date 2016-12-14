



 $(document).ready(function () {
        getswiperpic();//*获取轮播图 
        getfourpic1();getfourpic2();getfourpic3();getfourpic4();/*获取首页广告图*/



            function getswiperpic(){
                    $.ajax({
                        dataType:'json',
                        type:'GET',
                        data:{},        
                        url: AjaxURL+"fun/websiteInfo/getImgAdList?key=首页轮播图",
                        success:function(data) {           
                        for (var i = 0;i<data.data.adList.length; i++) {                               
                            var swiperPicContent = '<div class="swiper-slide"><img src="'+AjaxURL+data.data.adList[i].imgUrl+'"/></div>'               
                            $(".swiper-wrapper").append(swiperPicContent);            
                        }

                     /*   <!-- 实例化轮播图 -->*/
          var mySwiper = new Swiper ('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            autoplay: 3000,//可选选项，自动滑动   
            height: 420,//你的slide高度    
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            // 如果需要分页器
            pagination: '.pagination',
            paginationClickable :true,
            grabCursor:true,
        /*    paginationElement : 'li',*/
        
    });

        
        }
        });
}


/*获取首页广告图*/
            function getfourpic1(){
                    $.ajax({
                        dataType:'json',
                        type:'GET',
                        data:{},        
                        url: AjaxURL+"fun/websiteInfo/getImgAdList?key=首页广告图1",
                        success:function(data) {           
                        var bgimg = AjaxURL+data.data.adList[0].imgUrl                         
                        document.getElementById("topDivBanner").style.backgroundImage="url("+bgimg+")"; 
                    }
            });
            }

            function getfourpic2(){
                    $.ajax({
                        dataType:'json',
                        type:'GET',
                        data:{},        
                        url: AjaxURL+"fun/websiteInfo/getImgAdList?key=首页广告图2",
                        success:function(data) {           
                        var bgimg = AjaxURL+data.data.adList[0].imgUrl                         
                        document.getElementById("firstDiv").style.backgroundImage="url("+bgimg+")"; 
                    }
            });
            }


            function getfourpic3(){
                    $.ajax({
                        dataType:'json',
                        type:'GET',
                        data:{},        
                        url: AjaxURL+"fun/websiteInfo/getImgAdList?key=首页广告图3",
                        success:function(data) {           
                        var bgimg = AjaxURL+data.data.adList[0].imgUrl                         
                        document.getElementById("middleDiv").style.backgroundImage="url("+bgimg+")"; 
                    }
            });
            }


            function getfourpic4(){
                    $.ajax({
                        dataType:'json',
                        type:'GET',
                        data:{},        
                        url: AjaxURL+"fun/websiteInfo/getImgAdList?key=首页广告图4",
                        success:function(data) {           
                        var bgimg = AjaxURL+data.data.adList[0].imgUrl                         
                        document.getElementById("lastDiv").style.backgroundImage="url("+bgimg+")"; 
                    }
            });
            }


}); 