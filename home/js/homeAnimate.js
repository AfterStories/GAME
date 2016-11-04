
        $(document).ready(function () {
            var _affiliateCode = getParameterByName('aff');


            if (_affiliateCode != null && _affiliateCode != "") {
                CreateCookie("CO_affiliate", "affiliate=" + _affiliateCode, 2);
            }

            //pass to registration page
            var _affiliateCode_1;
            try {
                _affiliateCode_1 = localStorage.setItem('_AffiliateCode', _affiliateCode);
            }
            catch (err) {

            }



        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(parent.location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }


            if (!$("#loadingCover").length) {
                //loading gif
                $("#loadingOverlay").hide();
            } else {
                //fun88 loading logo
                $("#loadingCover").hide();
            }



        /*游戏主栏目部分*/
        var speed = 250,
            motion = 3000,
            position = 295,
            endPosition = position * 2;

        var topMiniBanner = document.getElementById("topDivBanner");
        if (topMiniBanner != null)
            $targetImg = $("#topDivBanner");
        else
            $targetImg = $(".topMiniBanner");
        $.fn.animateBG = function (x, y, speed) {
            var pos = this.css('background-position').split(' ');
            this.x = parseInt(pos[0]) || 0,
            this.y = parseInt(pos[1]) || 0;

            $.Animation(this, {
                x: x,
                y: y
            }, {
                duration: speed
            }).progress(function (e) {
                if (this.x > endPosition - 1)
                    e.tweens[0].now = 0;
                this.css('background-position', e.tweens[0].now + 'px ' + e.tweens[1].now + 'px');
            });
            return this;
        }

        $.fn.animateBGX = function (x, speed) {
            var pos = this.css('background-position').split(' ');
            this.x = parseInt(pos[0]) || 0,
            this.y = parseInt(pos[1]) || 0;
            this.animateBG(x + this.x, this.y, speed);
        }

        $.fn.animateBGY = function (y, speed) {
            var pos = this.css('background-position').split(' ');
            this.x = parseInt(pos[0]) || 0,
            this.y = parseInt(pos[1]) || 0;
            this.animateBG(this.x, y + this.y, speed);
        }

        var timer = window.setInterval(function () { $targetImg.animateBGX(position, speed) }, motion);

        $targetImg.mouseover(
            function () {
                clearInterval(timer);
            }).mouseout(
            function () {
                timer = window.setInterval(function () { $targetImg.animateBGX(position, speed) }, motion);
            });
        


        });
