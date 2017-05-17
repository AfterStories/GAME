/*getInfo*/

$(document).ready(function () {

        $.ajax({
            type: "GET",
            url: 'http://59.110.10.115/fun/websiteInfo/getWebsitesetting',
            data: {},
            success: function (data) {
            		$(".WebsiteName").text(data.data.title);
                    $(".E-mailAds").text(data.data.email);
                },
            error: function () {
                }
            });


})
