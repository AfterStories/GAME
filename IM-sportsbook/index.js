  $(document).ready(function () {


 $.ajax({
        type: "GET",
        url:'http://59.110.10.115/fun/game/getgamelist?districtId=5',
        data: {},
        success: function (data) {

      var GameIframeSrc = data.data[0].url;
    $("#iframeContent").attr("src",GameIframeSrc);

            },
        error: function () {
            alert()
             }
        });


  })

