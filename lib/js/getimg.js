
$(document).ready(function () {

        $.ajax({
            type: "GET",
            url: 'http://59.110.10.115/fun/websiteInfo/getImgAdList?key=右下浮动窗图',
            data: {},
            success: function (data) {
                var grilPic = 'http://59.110.10.115'+data.data.adList[0].imgUrl;
                    $("#imgLiveChatGirl").attr("src",grilPic);
                },
            error: function () {
                }
            });
})



