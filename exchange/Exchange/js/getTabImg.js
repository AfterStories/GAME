
    $(document).ready(function(){



    $.ajax({
         type: "GET",
         url: 'http://59.110.10.115/fun/websiteInfo/getImgAdList?key=必发交易广告图',
         data: {},
         success: function(data) {    
                   
                var bettype = 'http://59.110.10.115'+ data.data.adList[0].imgUrl;
                var layout = 'http://59.110.10.115'+ data.data.adList[1].imgUrl;
                var push = 'http://59.110.10.115'+ data.data.adList[2].imgUrl;
                var bettrade = 'http://59.110.10.115'+ data.data.adList[3].imgUrl;

                $("#content .bettype").attr("src",bettype);
                $("#content .layout").attr("src",layout);
                $("#content .push").attr("src",push);
                $("#content .bettrade").attr("src",bettrade);

         },
         error: function() {

         }
     });

});