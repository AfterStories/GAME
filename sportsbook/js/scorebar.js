$(function () {
    "use strict";
    $.fn.AddScoreBar = function (opt) {
        if (!opt) {
            opt = {};
        } else if (typeof opt === "string") {
            opt = { language: opt };
        }
        opt = $.extend({
            REFRESH_TIME: 30000,
            AJAX_URL: "ScoreBar.ashx",
            tpl:
				{
				    ScoreBar: '<div class="worldcup-scorebar"><div class="image"></div><div class="arrow-left"><a href="#" class="disable"></a></div><div class="arrow-right"><a href="#" class="disable"></a></div><div class="matches"><ul class="slider" style="width:0px;"></ul></div></div>',
				    Match: '<li><div class="home-team"><span class="flag"></span><span class="country">-</span><span class="score"></span></div><div class="away-team"><span class="flag"/></span><span class="country">-</span><span class="score"></span></div><div class="status"><span>-</span></div></li>'
				},
            tplName: "worldcup",
            language: "",
            league: ""
        }, opt);
        this.each(function () {
            var $ScoreBar = $(opt.tpl.ScoreBar).css("position", "relative").appendTo(this),
				$container = $ScoreBar.find(".matches"),
				$arrowleft = $ScoreBar.find(".arrow-left"),
				$arrowright = $ScoreBar.find(".arrow-right"),
				$endligntL = $('<div class="endlight-left"></div>').hide().appendTo($container),
				$endligntR = $('<div class="endlight-right"></div>').hide().appendTo($container),
				$endlignt = $($endligntL).add($endligntR),
				$scrollBar = $("<div class='scrollbar'></div>").hide().appendTo($container),
				$slider = $ScoreBar.find(".slider").hide(),
				TimerCount = 0,
				containerWidth = $container.innerWidth(),
				matchsWidth = 0,
				matchCount = 0,
				sno = null, // scorebar first match item number
				doc = $slider.get(0).ownerDocument,
				MATCH_WIDTH = $(opt.tpl.Match).hide().appendTo($slider).width() + 1,
				PAGE_SIZE = Math.round(containerWidth / MATCH_WIDTH);

            var fillMatchData =
				function (matchDom, match) {
				    var fillTeam = function (teamDom, team) {
				        var $score = teamDom.find(".score"),
							score,
							delay = 0;

				        teamDom.find(".flag").addClass(team.icon.toLowerCase());
				        teamDom.find(".country").text(team.name);
				        score = team.score || "-";
				        if ($score.html() !== "") { delay = Math.random() * 3000; }
				        if ($score.html() !== score) {
				            $score.delay(delay)
								.animate({ opacity: 0, "font-size": "48px" }, "fast", function () {
								    $(this).html(score).animate({ opacity: 1, "font-size": "15px" }, "slow");
								});
				        }
				    };
				    fillTeam(matchDom.find(".home-team"), match.home);
				    fillTeam(matchDom.find(".away-team"), match.away);
				    matchDom.find(".status").text(match.status);
				},
				moveSlider =
				function (n, duration, fn) {
				    var d = (!duration && duration !== 0 ? 1000 : duration);
				    if (n > matchCount - PAGE_SIZE) { n = matchCount - PAGE_SIZE; }
				    if (n < 0) { n = 0; }

				    if (sno === n) { return; }
				    if (matchCount !== 0) {
				        $scrollBar.show().css("left", -$slider.position().left / matchsWidth * containerWidth).animate({ left: n / matchCount * containerWidth }, { duration: d, queue: false }).delay(d).fadeOut("slow");
				    }
				    sno = n;
				    $arrowleft.children("a").toggleClass("disable", n <= 0);
				    $arrowright.children("a").toggleClass("disable", n >= matchCount - PAGE_SIZE);
				    $slider.animate({ left: -sno * MATCH_WIDTH }, { duration: d, queue: false }, fn);
				},
				getMatchs =
				function (q) {
				    var params = {},
						success =
							function (data) {
							    var i, matchDom, first = -1, now = new Date();
							    //data = data.matchDatas;
							    if (!data || !data.length || data.length === 0) { return; }
							    if (q === "") {
							        matchCount = data.length;
							        matchsWidth = matchCount * MATCH_WIDTH;
							        if (matchsWidth < containerWidth) { matchsWidth = containerWidth; }
							        $slider.width(matchsWidth);
							        $slider.hide().empty().fadeIn({ duration: 2000, queue: false });
							        if (matchCount !== 0) {
							            $scrollBar.width(PAGE_SIZE / matchCount * containerWidth);
							        }

							        for (i = 0; i < data.length; i++) {// get First Mark
							            if (data[i].mark) {
							                if (first === -1) {
							                    first = i;
							                }
							            }
							        }
							        if (first < 0) {// no mark, get last finished match
							            for (i = 0; i < data.length; i++) {
							                try {
							                    if (data[i].GlobalShowTime && new Date(data[i].GlobalShowTime) < now) {
							                        first = i;
							                    }
							                } catch (e) { /* console.log(e); */ }
							            }
							        }
							        if (first < 0) { first = 0; }

							        moveSlider(first === 0 ? 3 : first > matchCount - 6 ? matchCount - 9 : first - 3, 0);
							        moveSlider(first, 2000);
							    }

							    for (i = 0; i < data.length; i++) {
							        matchDom = $slider.find(".match" + data[i].matchid);
							        if (q === "") {
							            matchDom = $(opt.tpl.Match);
							            matchDom.addClass("match" + data[i].matchid);
							            matchDom.appendTo($slider);
							            fillMatchData(matchDom, data[i]);
							        } else if (matchDom) {
							            fillMatchData(matchDom, data[i]);
							        } else {
							            getMatchs("");
							            return;
							        }
							    }
							};
				    q = matchCount === 0 ? "" : q || "l";
				    if (q) { $.extend(params, { q: q }); }
				    if (opt.league) { $.extend(params, { league: opt.league }); }
				    if (opt.language) { $.extend(params, { lang: opt.language }); }
				    $.post(opt.AJAX_URL, params, success, "json");
				    TimerCount = (TimerCount + 1) % 20;
				    if (TimerCount === 0) { getMatchs("f"); } // get final match score
				};

            $arrowright.click(function (evt) {
                evt.preventDefault();
                moveSlider(sno + PAGE_SIZE);
            });
            $arrowleft.click(function (evt) {
                evt.preventDefault();
                moveSlider(sno - PAGE_SIZE);
            });
            setTimeout(function () {
                getMatchs("");
                var TimerHandle = setInterval(getMatchs, opt.REFRESH_TIME); // get live match score
                $ScoreBar.data("timer", TimerHandle);
            }, 0);
            (function () {//Draging contorl
                var draging = false, mx0, mx, left0, handler,
					movingSlider = function () {
					    if (!draging) { return; }
					    if (mx !== null) {
					        var posLeft = $slider.position().left,
								ew = 0;
					        posLeft = left0 + mx - mx0;
					        if (posLeft > 0) {
					            ew = posLeft / 3;
					            $endligntL.width(ew > 100 ? 100 : ew).show();
					            posLeft = (posLeft) / 20;
					        } else if (matchsWidth + posLeft < containerWidth) {
					            ew = (containerWidth - matchsWidth - posLeft) / 3;
					            $endligntR.width(ew > 100 ? 100 : ew).show();
					            posLeft = containerWidth - matchsWidth + (matchsWidth + posLeft - containerWidth) / 20;
					        } else {
					            $endlignt.fadeOut("slow");
					        }
					        $scrollBar.show().css("left", -posLeft / matchsWidth * containerWidth);

					        $slider.css("left", posLeft);
					        mx = null;
					    }
					    handler = setTimeout(movingSlider, 1000 / 60);
					},
					getX = function (evt) {
					    return evt.pageX || evt.originalEvent.touches[0].pageX;
					},
					mDown = function (evt) {
					    if (draging || !(!evt.which || evt.which === 1)) {
					        return;
					    }
					    draging = true;
					    mx = mx0 = getX(evt);
					    left0 = $slider.position().left;
					    handler = setTimeout(movingSlider, 1000 / 60);
					},
					mUp = function (evt) {
					    if (!draging || !(!evt.which || evt.which === 1)) {
					        return;
					    }
					    var n = Math.round(-$slider.position().left / MATCH_WIDTH);
					    sno = -1;
					    moveSlider(n, 200);
					    draging = false;
					    $endlignt.fadeOut("slow");
					    $scrollBar.fadeOut("slow");
					},
					mMove = function (evt) {
					    if (!draging) { return; }
					    if (doc.getSelection) {
					        doc.getSelection().removeAllRanges();
					    } else {
					        doc.selection.empty();
					    }
					    evt.preventDefault();
					    mx = getX(evt);
					};

                $slider
					.mousedown(mDown)
					.on("touchstart", mDown);
                $(doc)
					.on("mouseup touchend mouseleave", mUp)
					.on("mousemove touchmove", mMove);
            } ());
        });
        return this;
    };
});