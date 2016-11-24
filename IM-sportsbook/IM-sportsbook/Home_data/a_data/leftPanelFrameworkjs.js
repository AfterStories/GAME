(function() {
	var n;
	n = function() {
		function n(n) {
			this.$ = n
		}
		return n.prototype.SportType = {
			"S-1": "AllSoccer",
			S0: "Soccer",
			"S0-WC": "WorldCup",
			"S0-CORNER": "SoccerCorner",
			S1: "Basketball",
			S2: "Tennis",
			S3: "MotorRacing",
			S4: "Golf",
			S5: "SoccerHT",
			S6: "AmericanFootball",
			S7: "IceHockey",
			S8: "Baseball",
			S9: "Volleyball",
			S10: "Badminton",
			S11: "Snooker",
			S12: "Boxing",
			S13: "Rugby",
			S14: "Cricket",
			S16: "Handball",
			S17: "FinancialBets",
			S18: "Futsal",
			S19: "Asian9Ball",
			S20: "Billiards",
			S21: "Darts",
			S22: "WaterPolo",
			S23: "Olympic",
			S24: "Cycling",
			S25: "BeachVolleyball",
			S26: "FieldHockey",
			S27: "TableTennis",
			S28: "Athletics",
			S29: "Archery",
			S30: "WeightLifting",
			S31: "Canoeing",
			S32: "Gymnastics",
			S33: "Equestrian",
			S34: "Triathlon",
			S35: "Swimming",
			S36: "Fencing",
			S37: "Judo",
			S38: "ModernPentathlon",
			S39: "Rowing",
			S40: "Sailing",
			S41: "Shooting",
			S42: "Taekwondo",
			S43: "VirtualSoccer",
			S44: "VirtualBasketball",
			S98: "OtherSports"
		}, n.prototype.OddsPageCode = {
			O0: "HandicapOverUnder",
			O1: "_1x2",
			O2: "DoubleChance",
			O3: "TotalGoal",
			O4: "OddEven",
			O5: "FirstGoalLastGoal",
			O6: "HalfTimeFullTime",
			O7: "CorrectScore",
			O8: "Outright",
			O12: "AllMarkets"
		}, n.prototype.leftPanelthemColorArray = {
			0: "rgb(10, 113, 86)",
			1: "rgb(148, 35, 41)",
			2: "rgb(51, 154, 214)",
			3: "rgb(43, 79, 102)",
			4: "rgb(1, 160, 52)",
			5: "rgb(1, 160, 52)",
			6: "rgb(55, 93, 132)",
			7: "rgb(51, 154, 214)",
			8: "rgb(51, 154, 214)",
			9: "rgb(1, 160, 52)"
		}, n.prototype.placedBetStakeTypeName = {
			ah: "Handicap",
			ou: "Over/Under",
			ix2: "1x2",
			dc: "Double Chance",
			oe: "Odd/Even",
			tg: "Total Goals",
			fl: "First Goal/Last Goal",
			hf: "Half Time/Full Time",
			cs: "Correct Score",
			or: "Outright"
		}, n.prototype.placedBetParlayStakeTypeName = {
			ah: "FT - Handicap",
			rb: "FT - RB Handicap",
			"1sthalfah": "1H - Handicap",
			"1sthfrb": "1H - RB Handicap",
			"2ndah": "2H - Handicap",
			rb2ndah: "2H - RB Handicap",
			ou: "FT - Over/Under",
			rbou: "FT - RB Over/Under",
			"1sthalfou": "1H - Over/Under",
			"1sthfrbou": "1H - RB Over/Under",
			"2ndou": "2H - Over/Under",
			rb2ndou: "2H - RB Over/Under",
			"1x2": "FT - 1x2",
			rb1x2: "FT - RB 1x2",
			"1sthalf1x2": "1H - 1x2",
			"1sthfrb1x2": "1H - RB 1x2",
			"2nd1x2": "2H - 1x2",
			rb2nd1x2: "2H - RB 1x2",
			dc: "FT - Double Chance",
			rbdc: "FT - RB Double Chance",
			"1sthalfdc": "1H - Double Chance",
			"1sthfrbdc": "1H - RB Double Chance",
			"2nddc": "2H - Double Chance",
			rb2nddc: "2H - RB Double Chance",
			oe: "FT - Odd/Even",
			rboe: "FT - RB Odd/Even",
			"1sthalfoe": "1H - Odd/Even",
			"1sthfrboe": "1H - Odd/Even",
			"2ndoe": "2H - Odd/Even",
			rb2ndoe: "2H - RB Odd/Even",
			tg: "FT - Total Goals",
			rbtg: "FT - RB Total Goals",
			"1sthalftg": "1H - Total Goals",
			"1sthfrbtg": "1H - Total Goals",
			"2ndtg": "2H - Total Goals",
			rb2ndtg: "2H - RB Total Goals",
			fl: "FT - First Goal/Last Goal",
			tmsco1st: "First Goal/Last Goal",
			rbfl: "FT - RB First Goal/Last Goal",
			"1sthalffl": "1H - First Goal/Last Goal",
			"1sthfrbfl": "1H - First Goal/Last Goal",
			"2ndfl": "2H - First Goal/Last Goal",
			rb2ndfl: "2H - RB First Goal/Last Goal",
			hf: "FT - Half Time/Full Time",
			rbhf: "FT - RB Half Time/Full Time",
			cs: "FT - Correct Score",
			rbcs: "FT - RB Correct Score",
			"1sthalfcs": "1H - Correct Score",
			"1sthfrbcs": "1H - Correct Score",
			"2ndcs": "2H - Correct Score",
			rb2ndcs: "2H - RB Correct Score",
			or: "Outright"
		}, n.prototype.placedBetParlayStakeTypeNameToStakeTypeID = {
			ah: 1,
			rb: 3,
			"1sthalfah": 7,
			"1sthfrb": 30,
			"2ndah": 81,
			rb2ndah: 201,
			ou: 2,
			rbou: 4,
			"1sthalfou": 8,
			"1sthfrbou": 31,
			"2ndou": 82,
			rb2ndou: 202,
			"1x2": 6,
			rb1x2: 36,
			"1sthalf1x2": 9,
			"1sthfrb1x2": 39,
			"2nd1x2": 86,
			rb2nd1x2: 206,
			dc: 16,
			rbdc: 136,
			"1sthalfdc": 56,
			"1sthfrbdc": 176,
			"2nddc": 96,
			rb2nddc: 216,
			oe: 5,
			rboe: 125,
			"1sthalfoe": 45,
			"1sthfrboe": 165,
			"2ndoe": 85,
			rb2ndoe: 205,
			tg: 12,
			rbtg: 132,
			"1sthalftg": 52,
			"1sthfrbtg": 172,
			"2ndtg": 92,
			rb2ndtg: 212,
			hf: 11,
			rbhf: 131,
			cs: 10,
			rbcs: 130,
			"1sthalfcs": 50,
			"1sthfrbcs": 170,
			"2ndcs": 90,
			rb2ndcs: 210,
			or: 13
		}, n.prototype.oddsTypeString = {
			O0: "Hong Kong",
			O1: "Euro",
			O2: "Malay",
			O3: "Indo"
		}, n.prototype.betInfoDBOddsType = {
			O0: "HK",
			O1: "EURO",
			O2: "MALAY",
			O3: "INDO"
		}, n.prototype.betInfoUIOddsType = {
			HK: "Hong Kong",
			EURO: "Euro",
			MALAY: "Malay",
			INDO: "Indo"
		}, n.prototype.messageObj = {
			M101: "invalidCountryId",
			M102: "invalidLeagueId",
			M103: "invalidTeamId",
			M104: "invalidPlayerId",
			M105: "invalidMatchNo",
			M106: "invalidDateFormat",
			M107: "invalidDateFormat",
			M108: "invalidBetNo",
			M109: "invalidSportsId",
			M110: "invalidReportType",
			M111: "invalidMemberCode",
			M112: "invalidStakeAmount",
			M113: "invalidCurrencyCode",
			M114: "invalidStakeTypeId",
			M115: "invalidDangerNumber",
			M150: "sellingPriceChanged",
			M151: "betAmountBetLimit",
			M152: "betAmountGameLimit",
			M153: "insufficientAccountBalance",
			M154: "matchIsClosed",
			M155: "matchIsPaused",
			M156: "oddsHasChanged",
			M157: "inActiveMember",
			M158: "betSelectionError",
			M159: "scoreHasChanged",
			M160: "redcardhaschanged",
			M161: "oddsnolongeravailable",
			M201: "invalidIP",
			M202: "stakeAmountMinimum",
			M203: "notMore10Matches",
			M204: "bothMatchNumber",
			M205: "notofferforparlay",
			M206: "least3matches",
			M207: "only1bettype",
			M208: "pausedselectanothermatch",
			M211: "reachedbetamountlimit",
			M212: "lowerstakeamount",
			M213: "selectionclosed",
			M214: "multiplelogin",
			M301: "systemBusy",
			M401: "noRecords"
		}, n.prototype.betSlipReMessage = {
			BET_CAN: "BetCancelled",
			DG_CF: "BetConfirmed",
			DG_CFX: "PendingConfirmation",
			DG_GOAL: "BetCancelledGoal",
			DG_REDCARD: "BetCancelledRedCard",
			MA_CAN: "MatchCancelled",
			MU_CF: "ManualConfirmed"
		}, n
	}();
	MemberSite.Web.leftPanelConstantHelper = new n(jQuery)
}).call(this), function() {
	var n;
	n = function() {
		function n(n) {
			this.$ = n
		}
		return n.prototype.marketDivClickHandler = function(n) {
			var r, i, u, t;
			(t = this, MemberSite.Web.webUtil.cancelBubbleUp(n), i = parseInt($(t).attr("market")), r = parseInt($(t).attr("parlay")), u = i === MemberSite.Web.oddsCriteria.pageMarket && r === MemberSite.Web.oddsCriteria.openParlay, u) || (MemberSite.Web.oddsUI.previousCriteria = MemberSite.Web.oddsCriteria.getCriteria(), MemberSite.Web.oddsCriteria.oddsPageCode === 9 && MemberSite.Web.moreBetPageProcessor.switchMorebetToOddsPageContainer(), MemberSite.Web.oddsCriteria.sportId === 43 && ($("#virtualSoccerContainer").html(""), $("#virtualBasketballContainer").html("")), MemberSite.Web.oddsCriteria.sportId === 44 && ($("#virtualSoccerContainer").html(""), $("#virtualBasketballContainer").html("")), MemberSite.Web.oddsCriteria.pageMarket = i, MemberSite.Web.oddsCriteria.market = i, MemberSite.Web.oddsCriteria.openParlay = r, r === 1 ? (MemberSite.Web.oddsCriteria.sportFilter = 0, MemberSite.Web.leftPanelMarketHelper.marketEventHandler(t, -1, "")) : i === MemberSite.Web.oddsConst.Favourite ? (MemberSite.Web.oddsCriteria.sportFilter = 0, MemberSite.Web.leftPanelMarketHelper.marketEventHandler(t, -1, "")) : i === MemberSite.Web.oddsConst.LiveMarket ? MemberSite.Web.leftPanelMarketHelper.marketEventHandler(t, -1, "") : (i === MemberSite.Web.oddsConst.TodayMarket || i === MemberSite.Web.oddsConst.EarlyMarket) && (MemberSite.Web.oddsCriteria.extraFilter = MemberSite.Web.oddsCriteria.pageMarket === 2 && parseInt($(t).attr("sport")) === 0 && $(t).attr("extrafilter") === "EURO2016" && new Date < new Date(2016, 6, 11) ? "EURO2016" : "", MemberSite.Web.oddsCriteria.sportId = 0, MemberSite.Web.oddsCriteria.oddsPageCode = 0, MemberSite.Web.leftPanelMarketHelper.marketEventHandler(t, MemberSite.Web.oddsCriteria.sportId, MemberSite.Web.oddsCriteria.extraFilter)))
		}, n.prototype.clickMarketGUI = function(n, t) {
			var i, r;
			MemberSite.Web.oddsCriteria.pageMarket === 2 && MemberSite.Web.oddsCriteria.sportId === 0 && t === "EURO2016" && new Date < new Date(2016, 6, 11) && (n = "#EarlyMaketDiv");
			$(n).parent().find("div.MarketActive").removeClass("MarketActive").css({
				"background-color": ""
			}).find("a.MarketAnchor").css({
				color: "#4c4c4c"
			});
			i = MemberSite.Web.oddsCriteria.theme === 4 || MemberSite.Web.oddsCriteria.theme === 5 || MemberSite.Web.oddsCriteria.theme === 9 ? "#A17D05" : MemberSite.Web.oddsCriteria.theme === 7 || MemberSite.Web.oddsCriteria.theme === 2 ? "#CBE8FA" : MemberSite.Web.leftPanelConstantHelper.leftPanelthemColorArray[MemberSite.Web.oddsCriteria.theme];
			r = MemberSite.Web.oddsCriteria.theme === 7 || MemberSite.Web.oddsCriteria.theme === 2 ? "black" : "white";
			$(n).addClass("MarketActive").css({
				"background-color": i
			}).find("a.MarketAnchor").css({
				color: r
			})
		}, n.prototype.marketEventHandler = function(n, t, i) {
			MemberSite.Web.leftPanelMarketHelper.clickMarketGUI(n, i);
			MemberSite.Web.oddsCriteria.sportFilter === 0 ? MemberSite.Web.leftPanelProcessor.renderSportPanelIndividual() : MemberSite.Web.oddsCriteria.sportFilter === 1 && (MemberSite.Web.leftPanelProcessor.checkOlympicSportCount(), MemberSite.Web.leftPanelProcessor.renderSportPanelIndividual());
			MemberSite.Web.leftPanelSportHelper.setLayoutForOtherSportsPages();
			MemberSite.Web.oddsCriteria.sportFilter === 0 && MemberSite.Web.leftPanelProcessor.refreshPageByCriteriaByValues(t)
		}, n
	}();
	MemberSite.Web.leftPanelMarketHelper = new n(jQuery)
}.call(this), function() {
	var n;
	n = function() {
		function n(n) {
			this.$ = n
		}
		return n.prototype.sportHeaderClickHandler = function(n, t) {
			var r, f, i, u;
			if (t = this, MemberSite.Web.webUtil.cancelBubbleUp(n), i = parseInt($(t).attr("sport")), r = $(t).attr("extrafilter"), u = !1, (MemberSite.Web.oddsCriteria.pageMarket === 0 || MemberSite.Web.oddsCriteria.pageMarket === 2) && MemberSite.Web.oddsCriteria.openParlay === 0 && (u = i === MemberSite.Web.oddsCriteria.sportId && r === MemberSite.Web.oddsCriteria.extraFilter), u) {
				$(t).next().slideToggle();
				return
			}
			MemberSite.Web.oddsUI.previousCriteria = MemberSite.Web.oddsCriteria.getCriteria();
			MemberSite.Web.oddsCriteria.oddsPageCode === 9 && MemberSite.Web.moreBetPageProcessor.switchMorebetToOddsPageContainer();
			i === 0 || i === 43 || i === 44 ? MemberSite.Web.oddsCriteria.openParlay === 0 && MemberSite.Web.oddsCriteria.pageMarket !== MemberSite.Web.oddsConst.LiveMarket && (MemberSite.Web.oddsCriteria.oddsPageCode = 0) : MemberSite.Web.oddsCriteria.oddsPageCode = 12;
			MemberSite.Web.oddsCriteria.viewType = MemberSite.Web.oddsUI.previousCriteria.viewType;
			MemberSite.Web.cookie2.setViewType(MemberSite.Web.oddsUI.previousCriteria.viewType);
			MemberSite.Web.oddsCriteria.sportId = i;
			MemberSite.Web.oddsCriteria.extraFilter = r;
			MemberSite.Web.oddsCriteria.openParlay === 1 || MemberSite.Web.oddsCriteria.pageMarket === MemberSite.Web.oddsConst.LiveMarket ? (f = MemberSite.Web.leftPanelSportHelper.getAllCheckedSportArrayAndExtraFilterArray(), MemberSite.Web.leftPanelSportHelper.setOddsPageCodeForParlayANDLive(f.sportArray), MemberSite.Web.leftPanelSportHelper.parlayORLiveSportHeaderEventHandler(t)) : MemberSite.Web.leftPanelSportHelper.todayAndEarlySportHeaderEventHandler(t)
		}, n.prototype.todayAndEarlySportHeaderEventHandler = function(n) {
			var t;
			MemberSite.Web.leftPanelSportHelper.toggleSportHeaderPanel(n);
			MemberSite.Web.leftPanelOddsPageHelper.oddsPageCodeDisplayEventBySportIdAndOddsPageCode(MemberSite.Web.oddsCriteria.sportId, MemberSite.Web.oddsCriteria.oddsPageCode);
			MemberSite.Web.oddsCriteria.seasonId = 0;
			MemberSite.Web.oddsCriteria.virtualSoccerMatchDay = 0;
			MemberSite.Web.oddsCriteria.virtualBasketballMatchDay = 0;
			MemberSite.Web.oddsCriteria.sportId === 43 ? (MemberSite.Web.oddsUI.unregisterAllModules(), MemberSite.Web.leftPanelSportHelper.setLayoutForVirtualSoccerPage(), $("#virtualBasketballContainer").html(""), t = MemberSite.Web.leftPanelProcessor.leftPanelCompliedTemplateArray.virtualSoccerIFrame({}), $("#virtualSoccerContainer").append(t)) : MemberSite.Web.oddsCriteria.sportId === 44 ? (MemberSite.Web.oddsUI.unregisterAllModules(), MemberSite.Web.leftPanelSportHelper.setLayoutForVirtualBasketballPage(), $("#virtualSoccerContainer").html(""), t = MemberSite.Web.leftPanelProcessor.leftPanelCompliedTemplateArray.virtualBasketballIFrame({}), $("#virtualBasketballContainer").append(t)) : ($("#virtualSoccerContainer").html(""), $("#virtualBasketballContainer").html(""), MemberSite.Web.leftPanelSportHelper.setLayoutForOtherSportsPages(), MemberSite.Web.leftPanelProcessor.refreshPageByCriteriaByValues([MemberSite.Web.oddsCriteria.sportId]))
		}, n.prototype.parlayORLiveSportHeaderEventHandler = function(n) {
			var t, i;
			parseInt($(n).attr("sport")) === -1 ? $("#Checked-1").attr("checked") === "checked" ? MemberSite.Web.leftPanelSportHelper.sportAllFalseStateParlayORLiveSportHeaderEventHandler() : MemberSite.Web.leftPanelSportHelper.sportAllTrueStateParlayORLiveSportHeaderEventHandler() : (t = $("#Checked" + MemberSite.Web.oddsCriteria.sportId), $(n).attr("extrafilter") === "CORNER" ? t = $("#Checked0-CORNER") : $(n).attr("extrafilter") === "EURO2016" && (t = $("#Checked0-EURO2016")), i = t.attr("checked"), i === "checked" ? MemberSite.Web.leftPanelSportHelper.sportRemoveStateParlayORLiveSportHeaderEventHandler(t) : MemberSite.Web.leftPanelSportHelper.sportAddStateParlayORLiveSportHeaderEventHandler(t))
		}, n.prototype.sportAllFalseStateParlayORLiveSportHeaderEventHandler = function() {
			MemberSite.Web.leftPanelSportHelper.setAllCheckedListCheckedAttr(!1, !1);
			MemberSite.Web.leftPanelProcessor.refreshPageByCriteriaByValues([98])
		}, n.prototype.sportAllTrueStateParlayORLiveSportHeaderEventHandler = function() {
			var n;
			MemberSite.Web.leftPanelSportHelper.setAllCheckedListCheckedAttr(!0, !0);
			n = MemberSite.Web.leftPanelSportHelper.getAllCheckedSportArrayAndExtraFilterArray();
			MemberSite.Web.leftPanelProcessor.refreshPageByCriteriaByValues2(n.sportArray, n.extraFilterArrayString)
		}, n.prototype.sportRemoveStateParlayORLiveSportHeaderEventHandler = function(n) {
			var t;
			MemberSite.Web.leftPanelSportHelper.setCheckedListCheckedAttr($("#Checked-1"), !1);
			MemberSite.Web.leftPanelSportHelper.setCheckedListCheckedAttr(n, !1);
			t = MemberSite.Web.leftPanelSportHelper.getAllCheckedSportArrayAndExtraFilterArray();
			MemberSite.Web.leftPanelProcessor.refreshPageByCriteriaByValues2(t.sportArray, t.extraFilterArrayString)
		}, n.prototype.sportAddStateParlayORLiveSportHeaderEventHandler = function(n) {
			var t;
			MemberSite.Web.leftPanelSportHelper.setCheckedListCheckedAttr(n, !0);
			$("#SportHeaderContainer input:not(:checked)").length === 0 && MemberSite.Web.leftPanelSportHelper.setCheckedListCheckedAttr($("#Checked-1"), !0);
			t = MemberSite.Web.leftPanelSportHelper.getAllCheckedSportArrayAndExtraFilterArray();
			MemberSite.Web.leftPanelProcessor.refreshPageByCriteriaByValues2(t.sportArray, t.extraFilterArrayString)
		}, n.prototype.getAllCheckedSportArrayAndExtraFilterArray = function() {
			var f, t, n, e, i, r, u, o;
			for (e = $("#SportPanelIndividual input:checked"), n = [], t = [], u = 0, o = e.length; u < o; u++) if (r = e[u], !$(r).parent().parent().parent().hasClass("hideDisplay")) {
				if (i = parseInt($(r).attr("sport")), i === -1) continue;
				i === 0 ? (f = $(r).attr("extrafilter"), f ? $.inArray(0, n) === -1 ? t.push(f) : n.push(0) : (t = [], $.inArray(0, n) === -1 && n.push(0))) : n.push(i)
			}
			return t.length > 0 && $.inArray(0, n) === -1 && n.unshift(0), {
				sportArray: n,
				extraFilterArrayString: t.join()
			}
		}, n.prototype.toggleSportHeaderPanel = function(n) {
			var i, t;
			t = $(n);
			t.parent().find("> .InnerSportPanel:visible").slideToggle();
			t.next().stop(!0, !0).slideToggle();
			i = t.find(".OddsPagePanel[oddsPageCode=" + MemberSite.Web.oddsCriteria.oddsPageCode + "]");
			i.parent().parent().find("div.OddsPagePanelActive").removeClass("OddsPagePanelActive");
			i.addClass("OddsPagePanelActive")
		}, n.prototype.setAllCheckedListCheckedAttr = function(n, t) {
			$('input[name="checkedList"]').attr("checked", n);
			$("#Checked-1").attr("checked", t)
		}, n.prototype.setCheckedListCheckedAttr = function(n, t) {
			n.attr("checked", t)
		}, n.prototype.storeCheckedListState = function() {
			var r, u, t, f, n, i, e;
			for (t = [], r = $("#SportPanelIndividual input:checked"), i = 0, e = r.length; i < e; i++) f = r[i], n = $(f).attr("sport"), u = $(f).attr("extrafilter"), n === "0" & u === "CORNER" ? t.push(n + "-CORNER") : n === "0" & u === "EURO2016" ? t.push(n + "-EURO2016") : t.push(n);
			return t
		}, n.prototype.restoreCheckedListState = function(n) {
			$.subscribe("finishRenderSportPanelIndividual", function() {
				var i, t, r;
				for ($.unsubscribe("finishRenderSportPanelIndividual"), MemberSite.Web.leftPanelSportHelper.setAllCheckedListCheckedAttr(!1, !1), t = 0, r = n.length; t < r; t++) i = n[t], MemberSite.Web.leftPanelSportHelper.setCheckedListCheckedAttr($("#Checked" + i), !0)
			})
		}, n.prototype.setOddsPageCodeForParlayANDLive = function(n) {
			$.inArray(0, n) !== -1 && (MemberSite.Web.oddsCriteria.oddsPageCode = MemberSite.Web.oddsUI.previousCriteria.OddsPageCode)
		}, n.prototype.setLayoutForVirtualSoccerPage = function() {
			$("#OddsPagePanelDiv").wrapInner('<div class="pageDiv"><\/div>');
			$("#announcementDiv").css("width", "807px");
			$("#announcementScroll").css("width", "784px");
			$(".oddsPageContainerDiv").css({
				height: "auto",
				width: "805px",
				"overflow-x": "hidden",
				"min-height": "initial"
			});
			$(".oddsPageLayoutDivAlign").css("width", "805px");
			$(".oddsPageLayoutDiv").css({
				"overflow-y": "hidden",
				height: "auto"
			});
			$(".MoreBetoddsPageContainerDiv").css({
				width: "805px",
				height: "auto"
			})
		}, n.prototype.setLayoutForVirtualBasketballPage = function() {
			$("#OddsPagePanelDiv").wrapInner('<div class="pageDiv"><\/div>');
			$("#announcementDiv").css("width", "807px");
			$("#announcementScroll").css("width", "784px");
			$(".oddsPageContainerDiv").css({
				height: "auto",
				width: "805px",
				"overflow-x": "hidden",
				"min-height": "initial"
			});
			$(".oddsPageLayoutDivAlign").css("width", "805px");
			$(".oddsPageLayoutDiv").css({
				"overflow-y": "hidden",
				height: "auto"
			});
			$(".MoreBetoddsPageContainerDiv").css({
				width: "805px",
				height: "auto"
			})
		}, n.prototype.setLayoutForOtherSportsPages = function() {
			$("#OddsPagePanelDiv > .pageDiv").contents().unwrap();
			$("#announcementDiv").css("width", "824px");
			$("#announcementScroll").css("width", "800px");
			$(".oddsPageContainerDiv").css({
				height: "99%",
				width: "821px",
				"min-height": "99%"
			});
			$(".oddsPageLayoutDivAlign").css("width", "819px");
			$(".oddsPageLayoutDiv").css({
				"overflow-y": "scroll",
				height: "99%"
			});
			$(".MoreBetoddsPageContainerDiv").css({
				width: "840px",
				height: "99%"
			})
		}, n
	}();
	MemberSite.Web.leftPanelSportHelper = new n(jQuery)
}.call(this), function() {
	var n;
	n = function() {
		function n(n) {
			this.$ = n
		}
		return n.prototype.oddsPageCodeClickHandler = function(n, t) {
			var u, r, f, i;
			if (t = this, MemberSite.Web.webUtil.cancelBubbleUp(n), r = parseInt($(t).attr("oddsPageCode")), f = r === MemberSite.Web.oddsCriteria.oddsPageCode, !f) {
				if (MemberSite.Web.oddsUI.previousCriteria = MemberSite.Web.oddsCriteria.getCriteria(), MemberSite.Web.oddsCriteria.oddsPageCode === 9 && MemberSite.Web.moreBetPageProcessor.switchMorebetToOddsPageContainer(), MemberSite.Web.oddsCriteria.openParlay === 1 || MemberSite.Web.oddsCriteria.pageMarket === MemberSite.Web.oddsConst.LiveMarket) if ($("#Checked-1").attr("checked") === "checked") i = -1;
				else {
					if ($("#Checked0").attr("checked") !== "checked") return;
					u = MemberSite.Web.leftPanelSportHelper.getAllCheckedSportArrayAndExtraFilterArray();
					i = u.sportArray
				} else i = MemberSite.Web.oddsCriteria.pageMarket === MemberSite.Web.oddsConst.Favourite ? -1 : parseInt($(t).attr("sport"));
				MemberSite.Web.oddsCriteria.oddsPageCode = r;
				MemberSite.Web.leftPanelOddsPageHelper.oddsPageCodeDisplayEvent(MemberSite.Web.oddsCriteria.sportId, MemberSite.Web.oddsCriteria.oddsPageCode);
				MemberSite.Web.leftPanelProcessor.refreshPageByCriteriaByValues(i)
			}
		}, n.prototype.oddsPageCodeDisplayEvent = function(n, t) {
			var i;
			i = $(".OddsPagePanel[sport=" + n + "][oddspagecode=" + t + "]");
			i.parent().parent().find("div.OddsPagePanelActive").removeClass("OddsPagePanelActive").find("a.OddsPagePanelAnchor").css({
				color: "",
				"font-weight": "bold"
			});
			i.addClass("OddsPagePanelActive").find("a.OddsPagePanelAnchor").css({
				color: "",
				"font-weight": "bold"
			}).css({
				color: MemberSite.Web.leftPanelConstantHelper.leftPanelthemColorArray[MemberSite.Web.oddsCriteria.theme]
			})
		}, n.prototype.oddsPageCodeDisplayEventBySportIdAndOddsPageCode = function(n, t) {
			t === 9 && (t = MemberSite.Web.oddsUI.previousCriteria.OddsPageCode);
			n === 44 && (t = 12);
			MemberSite.Web.leftPanelOddsPageHelper.oddsPageCodeDisplayEvent(n, t)
		}, n
	}();
	MemberSite.Web.leftPanelOddsPageHelper = new n(jQuery)
}.call(this), function() {
	var n;
	n = function() {
		function n(n) {
			this.$ = n
		}
		return n.prototype.selectedPlaceBetType = "single", n.prototype.currentBetClickMatchInfo = {}, n.prototype.singleBetInfoArray = {}, n.prototype.parlayBetInfoArray = {}, n.prototype.parlayCalculatedOdd = 0, n.prototype.betClickPanelIdleTimeoutProcessId = 0, n.prototype.parlayListCount = 0, n.prototype.betClickEventHandler = function(t, i, r, u, f, e, o) {
			var k, s, c, v, d, l, y, g, p, w, a, h, b, nt;
			n = MemberSite.Web.leftPanelBetClickProcessor;
			MemberSite.Web.oddsCriteria.isUserLogin === !0 && (s = i[0], $(s).hasClass("betClick") !== !0 || MemberSite.Web.leftPanelBetClickProcessorHelper.isStringEmptyOrBlank(s.innerHTML) || (l = $(s).closest("." + e), w = $(s).closest(".OddsGroupDiv"), y = parseInt($(l).attr("MatchId")), c = parseInt($(w).attr("BetTypeId")), b = $(s).attr("selection"), nt = MemberSite.Web.oddsUtil.isOR(c) ? $(s).attr("selectionORTeamId") : "", p = $(w).attr("ol"), d = MemberSite.Web.leftPanelBetClickProcessorHelper.isParlayIntToBooleanConverter(parseInt($(l).attr("OpenParlay"))), v = MemberSite.Web.webUtil.handicapHandler(s), h = parseFloat(s.innerHTML), r = parseInt($(l).attr("sportid")), u = parseInt($(l).attr("market")), a = o.OddsType, MemberSite.Web.oddsUtil.isAH_OU_OE(c) ? (h = MemberSite.Web.oddsUtil.convertToMalayOdds(h, a), h = parseFloat(h), a = 2) : a = 1, g = "M" + y, k = c + "|" + b + "|" + v + "|" + p, MemberSite.Web.oddsUI.betClickedMatchIdStorageArray[g] = k, n.betClickInfoRequestHandler(y, c, b, v, h, a, d, p, r, u, nt), MemberSite.Web.oddsCriteria.oddsType = o.OddsType, MemberSite.Web.oddsCriteria.walletMode === 2 && MemberSite.Web.leftPanelProcessor.getCommonWalletBalance(MemberSite.Web.oddsCriteria.companyId, MemberSite.Web.oddsCriteria.memberCode, MemberSite.Web.oddsCriteria.walletCompanyGetBalanceUrl, MemberSite.Web.oddsCriteria.walletAccessKey)))
		}, n.prototype.betClickInfoRequestHandler = function(t, i, r, u, f, e, o, s, h, c, l) {
			var a, v, y;
			n = MemberSite.Web.leftPanelBetClickProcessor;
			$.subscribe("finishGetBetInfo", function(t, i) {
				return $.unsubscribe("finishGetBetInfo"), MemberSite.Web.oddsCriteria.openParlay === 1 && (MemberSite.Web.leftPanelBetClickProcessor.selectedPlaceBetType = "parlay", MemberSite.Web.leftPanelBetClickProcessorHelper.setUISelectedBetClickTab($("#betClickParlayTab"))), n.betClickTabHandler(i), i.BetType === 13 ? $("#betClickSingleParlayTabContainer").hide() : $("#betClickSingleParlayTabContainer").show(), MemberSite.Web.leftPanelBetClickProcessorHelper.switchPanelsDisplay("LeftToBet"), $("#betPlaceStakeTextbox").focus()
			});
			MemberSite.Web.oddsUtil.isAH_OU_OE(i) ? (v = e, a = MemberSite.Web.leftPanelConstantHelper.betInfoDBOddsType["O" + e]) : (v = 1, a = "EURO");
			y = {
				Token: MemberSite.Web.oddsCriteria.token,
				MemberCode: MemberSite.Web.oddsCriteria.memberCode,
				CompanyId: MemberSite.Web.oddsCriteria.companyId,
				SportId: h,
				MatchId: t,
				Market: c,
				IsParlayMatch: o,
				BetType: i,
				Selection: r,
				SelectionORTeamId: l,
				Handicap: u,
				Odds: f,
				MemberGroupID: MemberSite.Web.oddsCriteria.memberGroupId,
				Language: MemberSite.Web.oddsCriteria.language,
				Currency: MemberSite.Web.oddsCriteria.currency,
				Oddstype: v,
				BetInfoOddsTypeString: a
			};
			n.getClickedBetInfo(y)
		}, n.prototype.getClickedBetInfo = function(t) {
			MemberSite.Web.webUtil.getServerData2(MemberSite.Web.serverData.root + "Sportsbook/GetBetInfo", t, function() {
				return function(t) {
					MemberSite.Web.leftPanelBetClickProcessor.maxBetOriValue = t.MaxStake;
					t.MaxStake = MemberSite.Web.leftPanelBetClickProcessorHelper.calculateMaxStake(t.MaxStake, t.MaxPayout, t.BetType, t.Odds, t.OddsType);
					t.MinStake > t.MaxStake && (t.MinStake = t.MaxStake);
					n.currentBetClickMatchInfo = t;
					$.publish("finishGetBetInfo", t)
				}
			}(this))
		}, n.prototype.betClickTabHandler = function(t) {
			var i, r, u;
			if (n = MemberSite.Web.leftPanelBetClickProcessor, r = MemberSite.Web.leftPanelBetClickProcessorHelper, i = MemberSite.Web.oddsUI.getSelectedJSLanguage(), n.selectedPlaceBetType === "single") t.IsBetOpen ? n.betClickSingleBetInfoHelper(t, "betClickInfoSingleWrapperContainer") : n.betClickSingleBetInfoHelper(t, "betClickInfoContainerBetClose"), MemberSite.Web.leftPanelBetClickProcessorHelper.startLeftPanelIdleTimeout(MemberSite.Web.oddsCriteria.singleLeftPanelIdleTimeoutSeconds);
			else if (n.selectedPlaceBetType === "parlay") {
				if (t.IsBetOpen) if (t.IsBetPause) MemberSite.Web.leftPanelBetClickProcessorHelper.showDialogWithOkButton(i.M208);
				else if (t.IsParlayMatch) {
					if (r.getParlayBetInfoArrayLength(n.parlayBetInfoArray) >= 10) {
						r.showDialogWithOkButton(i.M203);
						return
					}
					u = parseInt($("#betPlaceStakeTextbox").val()) || 0;
					delete n.parlayBetInfoArray["M" + t.MatchId];
					n.parlayBetInfoArray["M" + t.MatchId] = t;
					n.renderTabHTML("Parlay", "betClickInfoParlayWrapperContainer");
					r.leftPanelHighlightElementArray($("#betClickParlayOdds")[0]);
					u > 0 && ($("#betPlaceStakeTextbox").val(u), n.betPlaceStakeTextboxEventHandler(), r.leftPanelHighlightElementArray($("#betPlaceEstPayoutValue")[0]))
				} else MemberSite.Web.leftPanelBetClickProcessorHelper.showDialogWithOkButton(i.M205);
				else MemberSite.Web.leftPanelBetClickProcessorHelper.showDialogWithOkButton(i.M208);
				MemberSite.Web.leftPanelBetClickProcessorHelper.startLeftPanelIdleTimeout(MemberSite.Web.oddsCriteria.parlayLeftPanelIdleTimeoutSeconds)
			}
		}, n.prototype.betClickSingleBetInfoHelper = function(t, i) {
			n = MemberSite.Web.leftPanelBetClickProcessor;
			n.singleBetInfoArray = {};
			n.singleBetInfoArray["M" + t.MatchId] = t;
			n.renderTabHTML("Single", i)
		}, n.prototype.betClickSingleTabEventHandler = function(t) {
			var i;
			(n = MemberSite.Web.leftPanelBetClickProcessor, MemberSite.Web.webUtil.cancelBubbleUp(t), i = $("#betClickSingleTab"), i.hasClass("selectedBetClickTab")) || (MemberSite.Web.leftPanelBetClickProcessorHelper.startLeftPanelIdleTimeout(MemberSite.Web.oddsCriteria.singleLeftPanelIdleTimeoutSeconds), n.selectedPlaceBetType = "single", n.betClickSingleBetInfoHelper(n.currentBetClickMatchInfo, "betClickInfoSingleWrapperContainer"))
		}, n.prototype.betClickParlayTabEventHandler = function(t) {
			var i;
			(n = MemberSite.Web.leftPanelBetClickProcessor, i = MemberSite.Web.oddsUI.getSelectedJSLanguage(), MemberSite.Web.webUtil.cancelBubbleUp(t), $("#betClickParlayTab").hasClass("selectedBetClickTab")) || (MemberSite.Web.leftPanelBetClickProcessorHelper.startLeftPanelIdleTimeout(MemberSite.Web.oddsCriteria.parlayLeftPanelIdleTimeoutSeconds), n.selectedPlaceBetType = "parlay", n.currentBetClickMatchInfo.IsBetPause ? MemberSite.Web.leftPanelBetClickProcessorHelper.showDialogWithOkButton(i.M208) : n.currentBetClickMatchInfo.IsParlayMatch ? (delete n.parlayBetInfoArray["M" + n.currentBetClickMatchInfo.MatchId], n.parlayBetInfoArray["M" + n.currentBetClickMatchInfo.MatchId] = n.currentBetClickMatchInfo, n.renderTabHTML("Parlay", "betClickInfoParlayWrapperContainer")) : (n.parlayBetInfoArray = {}, n.selectedPlaceBetType = "single", MemberSite.Web.leftPanelBetClickProcessorHelper.setUISelectedBetClickTab($("#betClickSingleTab")), MemberSite.Web.leftPanelBetClickProcessorHelper.showDialogWithOkButton(i.M205)))
		}, n.prototype.renderTabHTML = function(t, i) {
			var r;
			n = MemberSite.Web.leftPanelBetClickProcessor;
			t === "Single" ? (n.selectedPlaceBetType = "single", $("#betClickParlayInfoContainer").addClass("hideDisplay"), n.renderBetInfoHTMLArray(n.singleBetInfoArray, i), MemberSite.Web.leftPanelBetClickProcessorHelper.setUISelectedBetClickTab($("#betClickSingleTab"))) : t === "Parlay" && (n.selectedPlaceBetType = "parlay", $("#betClickParlayInfoContainer").removeClass("hideDisplay"), n.renderBetInfoHTMLArray(n.parlayBetInfoArray, i), r = $("#betClickInfoWrapperContainer .betClickInfoInnerContainerTemplateWrapper:last"), r.hasClass("betClickInfoGrayBackground") || r.addClass("betClickInfoYellowBackground"), MemberSite.Web.leftPanelBetClickProcessorHelper.setUISelectedBetClickTab($("#betClickParlayTab")))
		}, n.prototype.renderBetInfoHTMLArray = function(n, t) {
			var i;
			$("#betClickInfoWrapperContainer").html("");
			i = MemberSite.Web.leftPanelProcessor.leftPanelCompliedTemplateArray[t](n);
			$("#betClickInfoWrapperContainer").append(i)
		}, n.prototype.leftPanelBetClickedUpdateNotifier = function(n) {
			var r, t, u, i, f;
			n === null || MemberSite.Web.leftPanelBetClickProcessorHelper.isStringEmptyOrBlank(n.StatusFlag) || MemberSite.Web.oddsCriteria.isUserLogin === !0 && (t = n.MatchId, f = n.StatusFlag, u = "M" + t, r = MemberSite.Web.oddsUI.betClickedMatchIdStorageArray[u], r && (i = f.split(","), i.length > 0 && MemberSite.Web.leftPanelBetClickProcessor.callLeftPanelBetInfoChanged([t], i)))
		}, n.prototype.callLeftPanelBetValueUpdater = function(t, i, r, u, f, e) {
			var h, v, l, a, o, s, c, y, p, w;
			n = MemberSite.Web.leftPanelBetClickProcessor;
			c = MemberSite.Web.leftPanelBetClickProcessorHelper;
			MemberSite.Web.oddsUtil.isAH_OU_OE(i) && n.currentBetClickMatchInfo.IsRBMatch && n.currentBetClickMatchInfo.GroupColorSpread > 0 && (e = parseFloat(MemberSite.Web.oddsUtil.convertMalayOddsToVIPOdds(e, n.currentBetClickMatchInfo.GroupColorSpread)));
			o = [];
			h = $("#betClickInfoOdds" + t);
			y = c.getBetClickInfoOddsAndOddsType(e, MemberSite.Web.oddsCriteria.oddsType, i);
			h.html("@" + y.odd);
			o.push(h[0]);
			a = $("#betPlaceMaxBetAmountValue");
			s = MemberSite.Web.leftPanelBetClickProcessorHelper.calculateMaxStake(MemberSite.Web.leftPanelBetClickProcessor.maxBetOriValue, n.currentBetClickMatchInfo.MaxPayout, i, e, 2);
			p = s;
			s = MemberSite.Web.leftPanelBetClickProcessorHelper.numberWithCommas(s.toFixed(2));
			n.currentBetClickMatchInfo.MinStake > p && $("#betPlaceMinBetAmountValue").html(s);
			n.selectedPlaceBetType !== "parlay" && a.html(s);
			o.push(a[0]);
			w = parseInt($("#betPlaceStakeTextbox").val()) || 0;
			w > 0 && o.push($("#betPlaceEstPayoutValue")[0]);
			h.length > 0 && (n.selectedPlaceBetType === "single" ? n.singleBetInfoArray["M" + t].Odds = e : n.selectedPlaceBetType === "parlay" && (n.parlayBetInfoArray["M" + t].Odds = e, n.parlayCalculatedOdd = c.betClickInfoCalculateParlayOdds(MemberSite.Web.leftPanelBetClickProcessor.parlayBetInfoArray), l = $("#betClickParlayOdds"), l.html(n.parlayCalculatedOdd), o.push(l[0]), n.parlayListCount = MemberSite.Web.leftPanelBetClickProcessorHelper.getParlayBetInfoArrayLength(n.parlayBetInfoArray), v = $("#betClickParlayCount"), v.html(n.parlayListCount)), n.betPlaceStakeTextboxEventHandler(), c.leftPanelHighlightElementArray(o))
		}, n.prototype.callLeftPanelBetInfoChanged = function(n, t) {
			for (var o, c, l, u, s, h, a, i, r, e, y, f = 0, v = n.length; f < v; f++) for (u = n[f], e = 0, y = t.length; e < y; e++) r = t[e], r.indexOf("|") > -1 ? (i = r.split("|"), i.length === 4 && (r = parseInt(i[0]), s = parseInt(i[1]), h = parseInt(i[2]), a = parseFloat(i[3]), l = s + "|" + h, o = MemberSite.Web.oddsUI.betClickedMatchIdStorageArray["M" + u].split("|"), c = o[0] + "|" + o[3], c === l && MemberSite.Web.leftPanelBetClickProcessor.AHOUHadicapChanged(u, s, a, h))) : MemberSite.Web.leftPanelBetClickProcessor.BetInfoChanged(u, parseInt(r))
		}, n.prototype.AHOUHadicapChanged = function(t, i, r) {
			var f, u, e, o, s;
			n.selectedPlaceBetType === "single" ? u = n.singleBetInfoArray["M" + t] : n.selectedPlaceBetType === "parlay" && (u = MemberSite.Web.leftPanelBetClickProcessor.parlayBetInfoArray["M" + t]);
			f = $("#betClickInfoHandicap" + t);
			f.length > 0 && (MemberSite.Web.oddsUtil.isAH(i) ? (r = Math.abs(parseFloat(r)), e = "", r !== 0 && (u.Selection === 0 ? e = u.IsHome ? "-" : "+" : u.Selection === 1 && (e = u.IsHome ? "+" : "-")), f.html(e + r.toFixed(2))) : f.html(r.toFixed(2)), MemberSite.Web.leftPanelBetClickProcessorHelper.leftPanelHighlightElementArray(f), o = MemberSite.Web.oddsUI.getSelectedJSLanguage(), s = {
				buttons: [{
					html: o.Yes,
					click: function() {
						return $("#dialog").dialog("close")
					}
				}, {
					html: o.No,
					click: function() {
						return $("#dialog").dialog("close"), MemberSite.Web.leftPanelBetClickProcessorHelper.switchPanelBetToLeftbyResetProperties()
					}
				}]
			}, MemberSite.Web.leftPanelBetClickProcessorHelper.showDialog(o.HandicapChangedConfirmation, s))
		}, n.prototype.BetInfoChanged = function(t, i) {
			var u, r;
			if (n = MemberSite.Web.leftPanelBetClickProcessor, r = MemberSite.Web.oddsUI.getSelectedJSLanguage(), n.selectedPlaceBetType === "single" ? u = n.singleBetInfoArray["M" + t] : n.selectedPlaceBetType === "parlay" && (u = MemberSite.Web.leftPanelBetClickProcessor.parlayBetInfoArray["M" + t]), i === 0 && n.BetInfoChangedStatusHandler(u, r.M159, r.ScoreChangedAffected), i === 1) n.BetInfoChangedStatusHandler(u, r.M160, r.AwardedRedCard);
			else if (i === 2) n.BetInfoChangedStatusHandler(u, r.M155, r.MatchPausedAffected);
			else if (i === 3) return
		}, n.prototype.BetInfoChangedStatusHandler = function(t, i, r) {
			var u;
			n.selectedPlaceBetType === "single" ? (MemberSite.Web.leftPanelBetClickProcessorHelper.showDialogWithOkButton(i), MemberSite.Web.leftPanelBetClickProcessorHelper.switchPanelBetToLeftbyResetProperties()) : n.selectedPlaceBetType === "parlay" && (t.IsRemovedFromParlayList = !0, MemberSite.Web.leftPanelBetClickProcessor.renderTabHTML("Parlay", "betClickInfoParlayWrapperContainer"), u = t.HomeTeamName + " vs " + t.AwayTeamName + r, MemberSite.Web.leftPanelBetClickProcessorHelper.showDialogWithOkButton(u))
		}, n.prototype.betPlaceStakeTextboxKeyPressFilterEventHandler = function(n) {
			$.inArray(n.which, [13, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 8, 127]) === -1 && n.preventDefault()
		}, n.prototype.betPlaceStakeTextboxKeyUpFilterEventHandler = function(n) {
			MemberSite.Web.webUtil.cancelBubbleUp(n);
			n.which === 13 ? $("#betPlacePlaceBetButton").trigger("click") : MemberSite.Web.leftPanelBetClickProcessor.betPlaceStakeTextboxEventHandler()
		}, n.prototype.betPlaceStakeTextboxEventHandler = function() {
			var r, t, e, u, i, f;
			if (i = parseInt($("#betPlaceStakeTextbox").val()) || 0, i > 0) {
				if (n = MemberSite.Web.leftPanelBetClickProcessor, n.selectedPlaceBetType === "single") {
					f = n.singleBetInfoArray;
					for (e in f) r = f[e], u = MemberSite.Web.leftPanelBetClickProcessorHelper.getBetClickInfoOddsAndOddsType(r.Odds, MemberSite.Web.oddsCriteria.oddsType, r.BetType), t = MemberSite.Web.leftPanelBetClickProcessorHelper.betClickInfoSingleEstimatePayoutCalculator(u.odd, u.oddType, i)
				} else n.selectedPlaceBetType === "parlay" && (t = (n.parlayCalculatedOdd - 1) * i);
				t = t.toFixed(2);
				t = MemberSite.Web.leftPanelBetClickProcessorHelper.numberWithCommas(t);
				$("#betPlaceEstPayoutValue").html(t)
			}
		}, n.prototype.betPlaceCancelKeyupEventHandler = function(n) {
			MemberSite.Web.webUtil.cancelBubbleUp(n);
			n.which === 13 && $("#betPlaceCancelButton").trigger("click")
		}, n.prototype.betPlaceCancelEventHandler = function(n) {
			MemberSite.Web.webUtil.cancelBubbleUp(n);
			MemberSite.Web.leftPanelBetClickProcessorHelper.switchPanelBetToLeftbyResetProperties()
		}, n.prototype.betClickInfoParlayCloseButtonEventHandler = function(t) {
			var i, u, r, f, e, o;
			MemberSite.Web.webUtil.cancelBubbleUp(t);
			n = MemberSite.Web.leftPanelBetClickProcessor;
			f = [];
			o = $(t.target);
			i = o.closest(".betClickInfoContainer");
			e = i.attr("betClickInfoMatchId");
			delete n.parlayBetInfoArray["M" + e];
			n.parlayCalculatedOdd = MemberSite.Web.leftPanelBetClickProcessorHelper.betClickInfoCalculateParlayOdds(MemberSite.Web.leftPanelBetClickProcessor.parlayBetInfoArray);
			r = $("#betClickParlayOdds");
			r.html(n.parlayCalculatedOdd);
			f.push(r[0]);
			n.parlayListCount = MemberSite.Web.leftPanelBetClickProcessorHelper.getParlayBetInfoArrayLength(n.parlayBetInfoArray);
			u = $("#betClickParlayCount");
			u.html(n.parlayListCount);
			i.remove();
			$.isEmptyObject(MemberSite.Web.leftPanelBetClickProcessor.parlayBetInfoArray) && n.betPlaceCancelEventHandler(t)
		}, n.prototype.placeBetHandler = function() {
			var t, r, u, f, i;
			n = MemberSite.Web.leftPanelBetClickProcessor;
			i = [];
			t = [];
			n.selectedPlaceBetType === "single" ? t = n.singleBetInfoArray : n.selectedPlaceBetType === "parlay" && (t = n.parlayBetInfoArray);
			for (u in t) r = t[u], f = n.getPlacedBetRequest(r), i.push(f);
			return MemberSite.Web.webUtil.getServerData2(MemberSite.Web.serverData.root + "Sportsbook/PlaceBet", i, function() {
				return function(n) {
					var t, r, i;
					MemberSite.Web.leftPanelBetClickProcessorHelper.switchPanelBetToLeftbyResetProperties();
					$.publish("RecievePlaceBetResponse", {});
					r = parseInt(n.betno) || 0;
					r !== 0 ? (MemberSite.Web.leftPanelProcessor.placeBetSuccessMenuSlideUp(), MemberSite.Web.leftPanelBetClickProcessorHelper.showDialogWithOkButton(MemberSite.Web.oddsUI.getSelectedJSLanguage().ThankYouPlacebet), MemberSite.Web.leftPanelPlacedBetListProcessor.getPlacedBetListHandler(), $("#placedBetInfoPendingTab").hasClass("placedBetInfoActive") && (i = MemberSite.Web.leftPanelPlacedBetListProcessor.getPendingBetList(MemberSite.Web.leftPanelPlacedBetListProcessor.placedBetList), i.length > 0 ? (MemberSite.Web.leftPanelPlacedBetListProcessor.pendingMainBetSlipNoArray = [], MemberSite.Web.leftPanelPlacedBetListProcessor.pendingMainBetSlipNoArray = i) : MemberSite.Web.leftPanelPlacedBetListProcessor.placedBetInfoConfirmTabHelper()), MemberSite.Web.oddsCriteria.walletMode === 2 ? MemberSite.Web.leftPanelProcessor.getCommonWalletBalance(MemberSite.Web.oddsCriteria.companyId, MemberSite.Web.oddsCriteria.memberCode, MemberSite.Web.oddsCriteria.walletCompanyGetBalanceUrl, MemberSite.Web.oddsCriteria.walletAccessKey) : MemberSite.Web.leftPanelProcessor.getMemberCredit(MemberSite.Web.oddsCriteria.companyId, MemberSite.Web.oddsCriteria.memberCode)) : (t = MemberSite.Web.oddsUI.getSelectedJSLanguage(), n.errorMsg === "Not allow Place Bet By IP" ? MemberSite.Web.leftPanelBetClickProcessorHelper.showDialogWithOkButton(t.NotAllowByIP) : MemberSite.Web.leftPanelBetClickProcessorHelper.showDialogWithOkButton(t[n.errorMsg]))
				}
			}(this))
		}, n.prototype.getPlacedBetRequest = function(n) {
			var r, t, i;
			return t = MemberSite.Web.leftPanelBetClickProcessorHelper.getBetClickInfoOddsAndOddsType(n.Odds, MemberSite.Web.oddsCriteria.oddsType, n.BetType), r = MemberSite.Web.leftPanelConstantHelper.betInfoDBOddsType["O" + t.oddType], i = {
				MemberCode: n.MemberCode,
				CompanyId: MemberSite.Web.oddsCriteria.companyId,
				RemoteIP: "",
				MatchNO: n.MatchId,
				StakeTypeID: n.BetType,
				Stake: parseFloat($("#betPlaceStakeTextbox").val()),
				Odds: parseFloat(t.odd),
				OddsType: t.oddType,
				BetInfoOddsTypeString: r,
				Handicap: n.Handicap,
				Handicapsign: "",
				Selection: n.Selection,
				HomeScore: n.HomeScore,
				AwayScore: n.AwayScore,
				IsHome: n.IsHome,
				ClientType: "INTERNET",
				IsAllowOddsChanged: !0,
				IsAllowMatchRemoved: !0,
				IsParlayPlaceBet: MemberSite.Web.leftPanelBetClickProcessor.selectedPlaceBetType === "parlay" ? !0 : !1,
				MaxPayout: n.ParlayMaxPayout,
				AcceptHigherOdds: $("#betClickHigherOddsCheckbox").prop("checked"),
				PlaceBetFrom: 1,
				SelectionORTeamId: n.SelectionORTeamId,
				BetOn: "",
				StakeType: "",
				SportType: n.SportId,
				LeagueName: n.LeagueName,
				SeasonId: n.SeasonId,
				VirtualSoccerMatchDay: n.VirtualSoccerMatchDay,
				VirtualBasketballMatchDay: n.VirtualBasketballMatchDay
			}, MemberSite.Web.oddsUtil.isAH(n.BetType) && (i.Handicapsign = n.IsHome ? "-" : "+"), i
		}, n.prototype.placeBetDialogKeyUpEventHandler = function(n) {
			MemberSite.Web.webUtil.cancelBubbleUp(n);
			n.which === 13 && $("#betPlacePlaceBetButton").trigger("click")
		}, n.prototype.placeBetDialogEventHandler = function(t) {
			var e, i, r, u, f, s, o;
			if (MemberSite.Web.webUtil.cancelBubbleUp(t), n = MemberSite.Web.leftPanelBetClickProcessor, r = MemberSite.Web.leftPanelBetClickProcessorHelper, i = MemberSite.Web.oddsUI.getSelectedJSLanguage(), e = $.trim($("#betPlaceStakeTextbox").val()), o = parseInt(e) || 0, n.selectedPlaceBetType === "parlay" && r.getParlayBetInfoArrayLength(n.parlayBetInfoArray) < 3) {
				r.showDialogWithOkButton(i.M206);
				return
			}
			e ? (f = n.selectedPlaceBetType === "parlay" ? n.currentBetClickMatchInfo.ParlayMinStake : n.currentBetClickMatchInfo.MinStake, u = n.selectedPlaceBetType === "parlay" ? n.parlayCalculatedOddMaxPayout : n.currentBetClickMatchInfo.MaxStake, f = parseInt(f), u = parseInt(u), o < f ? ($("#betPlaceStakeTextbox").val(f), n.betPlaceStakeTextboxEventHandler(), r.showDialogWithOkButtonWithFocusOnElementOnClose(i.BetAmountLessThanMinBet, $("#betPlaceStakeTextbox"))) : o > u ? ($("#betPlaceStakeTextbox").val(u), n.betPlaceStakeTextboxEventHandler(), r.showDialogWithOkButtonWithFocusOnElementOnClose(i.BetAmountMoreThanMaxBet, $("#betPlaceStakeTextbox"))) : (s = {
				buttons: [{
					html: i.OK,
					click: function() {
						return $(".ui-dialog-buttonpane :button").attr("disabled", !0).addClass("ui-state-disabled"), MemberSite.Web.leftPanelBetClickProcessor.placeBetHandler(), $.subscribe("RecievePlaceBetResponse", function() {
							return $.unsubscribe("RecievePlaceBetResponse"), $("#dialog").dialog("close")
						})
					}
				}, {
					html: i.cancel,
					click: function() {
						return $("#dialog").dialog("close"), setTimeout(function() {
							return function() {
								return $("#betPlaceStakeTextbox").focus()
							}
						}(this), 500)
					}
				}]
			}, r.showDialog(i.PleaseConfirmYourBet, s))) : r.showDialogWithOkButton(i.KindlyEnterStake)
		}, n.prototype.resetDefaultProperties = function() {
			var t, i;
			n = MemberSite.Web.leftPanelBetClickProcessor;
			n.selectedPlaceBetType = "single";
			n.currentBetClickMatchInfo = {};
			n.singleBetInfoArray = {};
			n.parlayBetInfoArray = {};
			i = 0;
			t = 0;
			({
				parlayListCount: 0
			});
			$("#betPlaceStakeTextbox").val("")
		}, n
	}();
	MemberSite.Web.leftPanelBetClickProcessor = new n(jQuery)
}.call(this), function() {
	var n;
	n = function() {
		function n(n) {
			this.$ = n
		}
		return n.prototype.betClickInfoSingleEstimatePayoutCalculator = function(n, t, i) {
			var r;
			return t === 0 ? r = n * i : t === 1 ? r = (n - 1) * i : t === 2 ? r = n < 0 ? i : n * i : t === 3 && (r = n < 0 ? i : n * i), r
		}, n.prototype.betClickInfoCalculateParlayOdds = function(n) {
			var t, s, i, f, e, r, o, u = 1;
			for (f in n) t = n[f], t.IsRemovedFromParlayList || (o = MemberSite.Web.leftPanelBetClickProcessorHelper.setOddsForParlayPlaceBetType(t.Odds, t.OddsType, t.BetType), u = u * o), s = t.BetType, e = t.ParlayMaxPayout, r = t.ParlayMaxStake;
			return i = e / (u - 1), i = i.toFixed(0), i < r ? ($("#betPlaceMaxBetAmountValue").html(MemberSite.Web.webUtil.truncate2digit(i).toFixed(2)), MemberSite.Web.leftPanelBetClickProcessor.parlayCalculatedOddMaxPayout = MemberSite.Web.webUtil.truncate2digit(i).toFixed(2)) : ($("#betPlaceMaxBetAmountValue").html(MemberSite.Web.webUtil.truncate2digit(r).toFixed(2)), MemberSite.Web.leftPanelBetClickProcessor.parlayCalculatedOddMaxPayout = MemberSite.Web.webUtil.truncate2digit(r).toFixed(2)), MemberSite.Web.webUtil.truncate2digit(u).toFixed(2)
		}, n.prototype.betClickInfoParlayEstimatePayoutCalculatorByBetInfoArray = function(n, t) {
			var i;
			return i = MemberSite.Web.leftPanelBetClickProcessorHelper.betClickInfoCalculateParlayOdds(n), (i - 1) * t
		}, n.prototype.getBetClickInfoOddsAndOddsType = function(n, t, i) {
			var u, f, r;
			return u = 0, r = "Euro", MemberSite.Web.leftPanelBetClickProcessor.selectedPlaceBetType === "parlay" ? (u = MemberSite.Web.leftPanelBetClickProcessorHelper.setOddsForParlayPlaceBetType(n, t, i), r = "Euro", f = 1) : (u = MemberSite.Web.leftPanelBetClickProcessorHelper.setOddsForSinglePlaceBetType(n, t, i), r = "Euro", f = 1, MemberSite.Web.oddsUtil.isAH_OU_OE(i) && (r = MemberSite.Web.leftPanelConstantHelper.oddsTypeString["O" + t], f = t)), {
				odd: u,
				oddTypeString: r,
				oddType: f
			}
		}, n.prototype.setOddsForSinglePlaceBetType = function(n, t, i) {
			var r;
			return MemberSite.Web.oddsUtil.isAH_OU_OE(i) ? t === 0 ? r = MemberSite.Web.oddsUtil.malayOdds2HKOdds(n) : t === 1 ? r = MemberSite.Web.oddsUtil.malayOdds2EuroOdds(n) : t === 2 ? r = n.toFixed(2) : t === 3 && (r = MemberSite.Web.oddsUtil.malayOdds2IndoOdds(n)) : r = n.toFixed(2), r
		}, n.prototype.setOddsForParlayPlaceBetType = function(n, t, i) {
			return MemberSite.Web.oddsUtil.isAH_OU_OE(i) ? MemberSite.Web.oddsUtil.malayOdds2EuroOdds(n) : n.toFixed(2)
		}, n.prototype.closeDialog = function() {
			$("#dialog").dialog("isOpen") && $("#dialog").dialog("close")
		}, n.prototype.startLeftPanelIdleTimeout = function(n) {
			window.clearTimeout(MemberSite.Web.leftPanelBetClickProcessor.betClickPanelIdleTimeoutProcessId);
			MemberSite.Web.leftPanelBetClickProcessor.betClickPanelIdleTimeoutProcessId = setTimeout(function() {
				MemberSite.Web.leftPanelBetClickProcessorHelper.closeDialog();
				MemberSite.Web.leftPanelBetClickProcessorHelper.switchPanelBetToLeftbyResetProperties()
			}, n * 1e3)
		}, n.prototype.switchPanelBetToLeftbyResetProperties = function() {
			MemberSite.Web.oddsUI.betClickedMatchIdStorageArray = {};
			MemberSite.Web.leftPanelBetClickProcessor.resetDefaultProperties();
			window.clearTimeout(MemberSite.Web.leftPanelBetClickProcessor.betClickPanelIdleTimeoutProcessId);
			MemberSite.Web.leftPanelBetClickProcessorHelper.switchPanelsDisplay("BetToLeft")
		}, n.prototype.switchPanelsDisplay = function(n) {
			var t, i, r, u;
			t = $("#LeftPanelMainContent");
			i = $("#betClickContainer");
			n === "LeftToBet" ? (r = t, u = i) : n === "BetToLeft" && (r = i, u = t);
			r.addClass("hideDisplay");
			u.removeClass("hideDisplay")
		}, n.prototype.showDialogWithOkButton = function(n) {
			var t, i;
			t = MemberSite.Web.oddsUI.getSelectedJSLanguage();
			i = {
				buttons: [{
					html: t.OK,
					click: function() {
						return $("#dialog").dialog("close")
					}
				}]
			};
			MemberSite.Web.leftPanelBetClickProcessorHelper.showDialog(n, i)
		}, n.prototype.showDialogWithOkButtonWithFocusOnElementOnClose = function(n, t) {
			var i, r;
			i = MemberSite.Web.oddsUI.getSelectedJSLanguage();
			r = {
				buttons: [{
					html: i.OK,
					click: function() {
						return $("#dialog").dialog("close"), setTimeout(function() {
							return function() {
								return t.focus()
							}
						}(this), 500)
					}
				}]
			};
			MemberSite.Web.leftPanelBetClickProcessorHelper.showDialog(n, r)
		}, n.prototype.showDialog = function(n, t) {
			var i;
			i = {
				resizable: !1,
				draggable: !1,
				modal: !0,
				open: function() {
					return $(".ui-dialog-titlebar").hide()
				},
				close: function() {
					return $(".ui-dialog-titlebar").show()
				}
			};
			t = t ? $.extend(!0, {}, i, t) : i;
			$("#dialog").html(n);
			$("#dialog").dialog(t).dialog("open")
		}, n.prototype.setUISelectedBetClickTab = function(n) {
			var t, i;
			$(n).siblings().removeClass("selectedBetClickTab").css({
				color: "",
				"background-color": ""
			});
			t = MemberSite.Web.oddsCriteria.theme === 4 || MemberSite.Web.oddsCriteria.theme === 5 || MemberSite.Web.oddsCriteria.theme === 9 ? "#A17D05" : MemberSite.Web.oddsCriteria.theme === 7 || MemberSite.Web.oddsCriteria.theme === 2 ? "#CBE8FA" : MemberSite.Web.leftPanelConstantHelper.leftPanelthemColorArray[MemberSite.Web.oddsCriteria.theme];
			i = MemberSite.Web.oddsCriteria.theme === 7 || MemberSite.Web.oddsCriteria.theme === 2 ? "black" : "white";
			$(n).addClass("selectedBetClickTab").css({
				color: i,
				"background-color": t,
				"font-weight": "bold"
			})
		}, n.prototype.IsParlayPlacedBet = function() {
			return MemberSite.Web.leftPanelBetClickProcessor.selectedPlaceBetType !== "single"
		}, n.prototype.isParlayIntToBooleanConverter = function(n) {
			return n === 1
		}, n.prototype.isStringEmptyOrBlank = function(n) {
			return !n || n.length === 0 || /^\s*$/.test(n)
		}, n.prototype.leftPanelHighlightElementArray = function(n) {
			$(n).length > 0 && ($(n).addClass("hilightChangesColor"), setTimeout(function() {
				return function() {
					return $(n).removeClass("hilightChangesColor")
				}
			}(this), 1e4))
		}, n.prototype.getParlayBetInfoArrayLength = function(n) {
			var i, t, r;
			t = 0;
			for (r in n) i = n[r], i.IsRemovedFromParlayList || t++;
			return t
		}, n.prototype.calculateMaxStake = function(n, t, i, r) {
			var f, u;
			return f = MemberSite.Web.leftPanelBetClickProcessorHelper.setOddsForSinglePlaceBetType(r, MemberSite.Web.oddsCriteria.oddsType, i), f = parseFloat(f), u = n > t ? t : n, MemberSite.Web.oddsUtil.isCS(i) ? u = f <= 10 ? u * 1 : f <= 20 ? u * .5 : u * .25 : MemberSite.Web.oddsUtil.isAH(i) || MemberSite.Web.oddsUtil.isOU(i) || MemberSite.Web.oddsUtil.isOE(i) ? MemberSite.Web.oddsCriteria.oddsType === 0 ? (f = f.toFixed(2), u = (n / f).toFixed(2), u > n && (u = n)) : MemberSite.Web.oddsCriteria.oddsType === 1 ? (f = (f - 1).toFixed(2), f <= 1 ? u = n : (u = (n / f).toFixed(2), u > n && (u = n))) : MemberSite.Web.oddsCriteria.oddsType === 2 ? (f = f.toFixed(2), u = n) : MemberSite.Web.oddsCriteria.oddsType === 3 && (f = f.toFixed(2), u = (n / f).toFixed(2), f < 1 ? u = n : u > n && (u = n)) : (f = (f - 1).toFixed(2), f <= 1 ? u = n : (u = (n / f).toFixed(2), u > n && (u = n))), u = parseFloat(Math.floor(u)).toFixed(2), parseFloat(u)
		}, n.prototype.numberWithCommas = function(n) {
			var t;
			return t = n.toString().split("."), t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","), t.join(".")
		}, n
	}();
	MemberSite.Web.leftPanelBetClickProcessorHelper = new n(jQuery)
}.call(this), function() {
	var n;
	n = function() {
		function n(n) {
			this.$ = n
		}
		return n.prototype.placedBetList = [], n.prototype.pendingMainBetSlipNoArray = [], n.prototype.pendingBetSlipRefreshTimerCount = 5, n.prototype.pullPendingBetSlipIntervalId = 0, n.prototype.getPlacedBetListHandler = function() {
			n = MemberSite.Web.leftPanelPlacedBetListProcessor;
			$.subscribe("finishGetPlacedBetList", function(t, i) {
				return $.unsubscribe("finishGetPlacedBetList"), n.pendingMainBetSlipNoArray = MemberSite.Web.leftPanelPlacedBetListProcessor.getPendingBetList(i.placedBetList), n.pendingMainBetSlipNoArray.length > 0 ? (n.renderPlacedBetInfoList(i.placedBetList), n.removeActivePlacedBetInfoTab($("#placedBetInfoConfirmTab")), n.setActivePlacedBetInfoTab($("#placedBetInfoPendingTab")), n.startPullPendingBetSlipRefreshInterval()) : ($.subscribe("finishGetPlacedBetList", function(t, i) {
					return $.unsubscribe("finishGetPlacedBetList"), i.placedBetList.length > 0 ? n.renderPlacedBetInfoList(i.placedBetList) : n.renderPlacedBetInfoNoRecordList(i.placedBetList), n.removeActivePlacedBetInfoTab($("#placedBetInfoPendingTab")), n.setActivePlacedBetInfoTab($("#placedBetInfoConfirmTab"))
				}), n.getPlacedBetList(!0))
			});
			n.getPlacedBetList(!1)
		}, n.prototype.getPlacedBetListRefresh = function(t) {
			var i, r = this;
			n = MemberSite.Web.leftPanelPlacedBetListProcessor;
			i = {
				CompanyId: MemberSite.Web.oddsCriteria.companyId,
				PendingMainBetSipNoArray: t
			};
			MemberSite.Web.webUtil.getServerData2(MemberSite.Web.serverData.root + "Sportsbook/GetBetListRefresh", i, function(n) {
				$.publish("finishGetBetListRefresh", {
					betSlipRefreshInfoList: n
				})
			})
		}, n.prototype.startPullPendingBetSlipRefreshInterval = function() {
			var t = this;
			n = MemberSite.Web.leftPanelPlacedBetListProcessor;
			n.stopPullPendingBetSlipRefreshInterval();
			n.pullPendingBetSlipIntervalId = setInterval(function() {
				$("#betListRefreshTimer").html("( " + n.pendingBetSlipRefreshTimerCount + " )");
				n.pendingBetSlipRefreshTimerCount--;
				n.pendingBetSlipRefreshTimerCount === 0 && (n.pendingBetSlipRefreshTimerCount = 5, n.pendingMainBetSlipNoArray.length > 0 && ($.subscribe("finishGetBetListRefresh", function(t, i) {
					var r, u, e, f;
					for ($.unsubscribe("finishGetBetListRefresh"), f = i.betSlipRefreshInfoList, u = 0, e = f.length; u < e; u++) r = f[u], (r.BetConfirm || r.ReasonType === "BET_CAN") && MemberSite.Web.webUtil.arrayRemoveByValue(n.pendingMainBetSlipNoArray, r.MainBetSlipNo);
					if (n.pendingMainBetSlipNoArray.length === 0) return n.stopPullPendingBetSlipRefreshInterval(), n.getPlacedBetListHandler()
				}), n.getPlacedBetListRefresh(n.pendingMainBetSlipNoArray)))
			}, 2e3)
		}, n.prototype.stopPullPendingBetSlipRefreshInterval = function() {
			n = MemberSite.Web.leftPanelPlacedBetListProcessor;
			window.clearTimeout(n.pullPendingBetSlipIntervalId);
			n.pendingBetSlipRefreshTimerCount = 5;
			$("#betListRefreshTimer").html("")
		}, n.prototype.getPlacedBetList = function(n) {
			var t, i = this;
			t = {
				MemberCode: MemberSite.Web.oddsCriteria.memberCode,
				Token: MemberSite.Web.oddsCriteria.token,
				CompanyId: MemberSite.Web.oddsCriteria.companyId,
				Language: MemberSite.Web.oddsCriteria.language,
				StartDate: moment().format("YYYY/MM/DD hh:mm:ss a"),
				EndDate: moment().add(23, "hours").add(59, "minutes").format("YYYY/MM/DD hh:mm:ss a"),
				BetConfirm: n,
				Count: 100
			};
			MemberSite.Web.webUtil.getServerData2(MemberSite.Web.serverData.root + "Sportsbook/GetBetList", t, function(n) {
				n ? (MemberSite.Web.leftPanelPlacedBetListProcessor.placedBetList = n, $.publish("finishGetPlacedBetList", {
					placedBetList: n
				})) : (MemberSite.Web.leftPanelPlacedBetListProcessor.placedBetList = [], $.publish("finishGetPlacedBetList", {
					placedBetList: []
				}))
			})
		}, n.prototype.getPendingBetList = function(n) {
			var i, r, t, u;
			for (r = [], t = 0, u = n.length; t < u; t++) i = n[t], i.MainBetSlipStatus === "Pending" && r.push(i.MainBetSlipNo);
			return r
		}, n.prototype.renderPlacedBetInfoList = function(n) {
			var t;
			t = MemberSite.Web.leftPanelProcessor.leftPanelCompliedTemplateArray.placedBetContainer(n);
			$("#placedBetPanel").html("");
			$("#placedBetPanel").append(t);
			MemberSite.Web.oddsCriteria.isBetTradeEnabled && n[0].MainBetSlipStatus === "Confirmed" && MemberSite.Web.betTradeProcessor.registerPlacedBetListToBetTrade(n)
		}, n.prototype.renderPlacedBetInfoNoRecordList = function() {
			var n;
			n = MemberSite.Web.leftPanelProcessor.leftPanelCompliedTemplateArray.placedBetInfoNoRecords();
			$("#placedBetPanel").html("");
			$("#placedBetPanel").append(n)
		}, n.prototype.placedBetInfoPendingTabHandler = function(n) {
			(MemberSite.Web.webUtil.cancelBubbleUp(n), $("#placedBetInfoPendingTab").hasClass("placedBetInfoActive")) || MemberSite.Web.leftPanelPlacedBetListProcessor.placedBetInfoPendingTabHelper()
		}, n.prototype.placedBetInfoPendingTabHelper = function() {
			n = MemberSite.Web.leftPanelPlacedBetListProcessor;
			$.subscribe("finishGetPlacedBetList", function(t, i) {
				$.unsubscribe("finishGetPlacedBetList");
				i.placedBetList.length > 0 ? n.renderPlacedBetInfoList(i.placedBetList) : n.renderPlacedBetInfoNoRecordList(i.placedBetList);
				n.removeActivePlacedBetInfoTab($("#placedBetInfoConfirmTab"));
				n.setActivePlacedBetInfoTab($("#placedBetInfoPendingTab"));
				n.pendingMainBetSlipNoArray = MemberSite.Web.leftPanelPlacedBetListProcessor.getPendingBetList(i.placedBetList);
				n.startPullPendingBetSlipRefreshInterval()
			});
			n.getPlacedBetList(!1)
		}, n.prototype.placedBetInfoConfirmTabHandler = function(n) {
			(MemberSite.Web.webUtil.cancelBubbleUp(n), $("#placedBetInfoConfirmTab").hasClass("placedBetInfoActive")) || MemberSite.Web.leftPanelPlacedBetListProcessor.placedBetInfoConfirmTabHelper()
		}, n.prototype.placedBetInfoConfirmTabHelper = function() {
			n = MemberSite.Web.leftPanelPlacedBetListProcessor;
			n.stopPullPendingBetSlipRefreshInterval();
			$.subscribe("finishGetPlacedBetList", function(t, i) {
				return $.unsubscribe("finishGetPlacedBetList"), i.placedBetList.length > 0 ? n.renderPlacedBetInfoList(i.placedBetList) : n.renderPlacedBetInfoNoRecordList(i.placedBetList), n.removeActivePlacedBetInfoTab($("#placedBetInfoPendingTab")), n.setActivePlacedBetInfoTab($("#placedBetInfoConfirmTab"))
			});
			n.getPlacedBetList(!0)
		}, n.prototype.placedBetInfobetListRefreshHandler = function() {
			MemberSite.Web.leftPanelProcessor.getPendingOrBetList();
			MemberSite.Web.oddsCriteria.walletMode === 2 ? MemberSite.Web.leftPanelProcessor.getCommonWalletBalance(MemberSite.Web.oddsCriteria.companyId, MemberSite.Web.oddsCriteria.memberCode, MemberSite.Web.oddsCriteria.walletCompanyGetBalanceUrl, MemberSite.Web.oddsCriteria.walletAccessKey) : MemberSite.Web.leftPanelProcessor.getMemberCredit(MemberSite.Web.oddsCriteria.companyId, MemberSite.Web.oddsCriteria.memberCode)
		}, n.prototype.parlayPlacedBetSlipShowHandler = function(n) {
			var t, i;
			MemberSite.Web.webUtil.cancelBubbleUp(n);
			i = $(n.target);
			$("#placedBetPanel").find(".placedBetInfoContainer").addClass("hideDisplay");
			t = i.closest(".parlayPlacedBetInfoContainer");
			t.find(".parlayWrapperContainer").addClass("hideDisplay");
			t.find(".parlayPlacedBetListInfoContainer").removeClass("hideDisplay");
			t.removeClass("hideDisplay");
			$("#LeftPanelSubContainer").addClass("hideDisplay")
		}, n.prototype.parlayPlacedBetSlipHideHandler = function(n) {
			var t, i;
			MemberSite.Web.webUtil.cancelBubbleUp(n);
			i = $(n.target);
			t = i.closest(".parlayPlacedBetInfoContainer");
			t.find(".parlayWrapperContainer").removeClass("hideDisplay");
			t.find(".parlayPlacedBetListInfoContainer").addClass("hideDisplay");
			$("#placedBetPanel").find(".placedBetInfoContainer").removeClass("hideDisplay");
			$("#LeftPanelSubContainer").removeClass("hideDisplay");
			MemberSite.Web.leftPanelPlacedBetListProcessor.placedBetInfobetListRefreshHandler(n)
		}, n.prototype.getParlayConfirmedBetSlipCount = function(n) {
			var i, r, u, t, f;
			for (r = 0, u = 0, t = 0, f = n.length; t < f; t++) i = n[t], i.BetSlipStatus === "Confirmed" ? r++ : i.BetSlipStatus === "Pending" && u++;
			return {
				parlayConfirmedBetSlipCount: r,
				parlayPendingBetSlipCount: u
			}
		}, n.prototype.setActivePlacedBetInfoTab = function(n) {
			$(n).addClass("placedBetInfoActive").addClass("betinfotabbgcolor" + MemberSite.Web.oddsCriteria.theme)
		}, n.prototype.removeActivePlacedBetInfoTab = function(n) {
			$(n).removeClass("placedBetInfoActive").removeClass("betinfotabbgcolor" + MemberSite.Web.oddsCriteria.theme)
		}, n.prototype.parlayPlacedBetSlipPrintHandler = function(n) {
			var t;
			MemberSite.Web.webUtil.cancelBubbleUp(n);
			t = $(n.target);
			window.print()
		}, n
	}();
	MemberSite.Web.leftPanelPlacedBetListProcessor = new n(jQuery)
}.call(this), function() {
	var n;
	n = function() {
		function n(n) {
			this.$ = n
		}
		return n.prototype.sportFilterDivClickHandler = function(n) {
			var i, t;
			t = this;
			MemberSite.Web.webUtil.cancelBubbleUp(n);
			i = parseInt($(t).attr("filter"));
			MemberSite.Web.oddsCriteria.sportFilter = i;
			MemberSite.Web.oddsUI.previousCriteria = MemberSite.Web.oddsCriteria.getCriteria();
			MemberSite.Web.oddsCriteria.oddsPageCode === 9 && (MemberSite.Web.moreBetPageProcessor.switchMorebetToOddsPageContainer(), MemberSite.Web.oddsCriteria.oddsPageCode = 0);
			MemberSite.Web.oddsCriteria.sportId === 43 && ($("#virtualSoccerContainer").html(""), $("#virtualBasketballContainer").html(""));
			MemberSite.Web.oddsCriteria.sportId === 44 && ($("#virtualSoccerContainer").html(""), $("#virtualBasketballContainer").html(""));
			MemberSite.Web.leftPanelSportFilterHelper.sportfilterEventHandler(t, MemberSite.Web.oddsCriteria.sportFilter, MemberSite.Web.oddsUI.previousCriteria.SportId, MemberSite.Web.oddsUI.previousCriteria.ExtraFilter)
		}, n.prototype.sportfilterEventHandler = function(n, t, i, r) {
			MemberSite.Web.leftPanelSportFilterHelper.clickSportFilterGUI(n);
			MemberSite.Web.oddsCriteria.pageMarket === MemberSite.Web.oddsConst.LiveMarket ? MemberSite.Web.leftPanelMarketHelper.marketEventHandler(n, -1, "") : MemberSite.Web.leftPanelMarketHelper.marketEventHandler(n, i, r)
		}, n.prototype.clickSportFilterGUI = function(n) {
			var t, i;
			$(n).parent().find("div.SportFilterActive").removeClass("SportFilterActive").css({
				"background-color": ""
			}).find("a.SportFilterAnchor").css({
				color: "#4c4c4c"
			});
			t = MemberSite.Web.oddsCriteria.theme === 4 || MemberSite.Web.oddsCriteria.theme === 5 || MemberSite.Web.oddsCriteria.theme === 9 ? "#A17D05" : MemberSite.Web.oddsCriteria.theme === 7 || MemberSite.Web.oddsCriteria.theme === 2 ? "#CBE8FA" : MemberSite.Web.leftPanelConstantHelper.leftPanelthemColorArray[MemberSite.Web.oddsCriteria.theme];
			i = MemberSite.Web.oddsCriteria.theme === 7 || MemberSite.Web.oddsCriteria.theme === 2 ? "black" : "white";
			$(n).addClass("SportFilterActive").css({
				"background-color": t
			}).find("a.SportFilterAnchor").css({
				color: i
			})
		}, n
	}();
	MemberSite.Web.leftPanelSportFilterHelper = new n(jQuery)
}.call(this), function() {
	var t, n = function(n, t) {
			return function() {
				return n.apply(t, arguments)
			}
		};
	t = function() {
		function t(t) {
			this.$ = t;
			this.instantCallDisplayOddsPage = n(this.instantCallDisplayOddsPage, this);
			this.refreshPageByCriteriaByValues2 = n(this.refreshPageByCriteriaByValues2, this);
			this.refreshPageByCriteriaByValues = n(this.refreshPageByCriteriaByValues, this);
			this.refreshPageByCriteria = n(this.refreshPageByCriteria, this);
			this.refreshPageByCriteria2 = n(this.refreshPageByCriteria2, this)
		}
		return t.prototype.leftPanelCompliedTemplateArray = {}, t.prototype.pullMemberCreditIntervalId = 0, t.prototype.memberBalance = 0, t.prototype.closeSportArray = [], t.prototype.closeSport44Array = [], t.prototype.pullCommonWalletIntervalId = 0, t.prototype.initialize = function() {
			MemberSite.Web.leftPanelProcessor.closeSportArray = MemberSite.Web.serverData.virtualSoccerOnOff === 1 ? [] : [43];
			MemberSite.Web.leftPanelProcessor.closeSport44Array = MemberSite.Web.serverData.virtualBasketballOnOff === 1 ? [] : [44];
			MemberSite.Web.hubClient.subscribe("/global", MemberSite.Web.leftPanelProcessor.processSportCloseMessage);
			MemberSite.Web.leftPanelProcessor.initailizeTemplatesArray();
			$.subscribe("finishRenderSportPanelIndividual", function() {
				return $.unsubscribe("finishRenderSportPanelIndividual"), MemberSite.Web.leftPanelProcessor.initailizeUIEvents(), MemberSite.Web.leftPanelProcessor.initailizeUIDisplayProcess(), MemberSite.Web.leftPanelProcessor.renderSportPanelIndividualRefreshInterval(), MemberSite.Web.oddsCriteria.isUserLogin ? (MemberSite.Web.oddsCriteria.walletMode === 2 ? (MemberSite.Web.leftPanelProcessor.getCommonWalletBalance(MemberSite.Web.oddsCriteria.companyId, MemberSite.Web.oddsCriteria.memberCode, MemberSite.Web.oddsCriteria.walletCompanyGetBalanceUrl, MemberSite.Web.oddsCriteria.walletAccessKey), MemberSite.Web.oddsCriteria.walletBalanceDisplayEnabled && MemberSite.Web.oddsCriteria.walletBalanceRefreshInterval > 0 && MemberSite.Web.leftPanelProcessor.startCommonWalletInterval()) : MemberSite.Web.leftPanelProcessor.getMemberCredit(MemberSite.Web.oddsCriteria.companyId, MemberSite.Web.oddsCriteria.memberCode), MemberSite.Web.oddsCriteria.isBetTradeEnabled && MemberSite.Web.betTradeProcessor.initialize(), MemberSite.Web.leftPanelPlacedBetListProcessor.getPlacedBetListHandler(), $("#dialog").dialog({
					autoOpen: !1
				}), MemberSite.Web.leftPanelProcessor.startUpdateTokenInterval()) : void 0
			});
			MemberSite.Web.leftPanelProcessor.renderSportPanelIndividual()
		}, t.prototype.initailizeTemplatesArray = function() {
			t = MemberSite.Web.leftPanelProcessor;
			t.leftPanelCompliedTemplateArray.SportBookAccountContainer = MemberSite.Web.resig.compileTemplate($("#SportBookAccountContainerTemplate").html());
			t.leftPanelCompliedTemplateArray.SportPanelIndividual = MemberSite.Web.resig.compileTemplate($("#SportPanelIndividualTemplate").html());
			t.leftPanelCompliedTemplateArray.betClickInfoSingleWrapperContainer = MemberSite.Web.resig.compileTemplate($("#betClickInfoSingleWrapperContainerTemplate").html());
			t.leftPanelCompliedTemplateArray.betClickInfoParlayWrapperContainer = MemberSite.Web.resig.compileTemplate($("#betClickInfoParlayWrapperContainerTemplate").html());
			t.leftPanelCompliedTemplateArray.betClickInfoStakeContainer = MemberSite.Web.resig.compileTemplate($("#betClickInfoStakeContainerTemplate").html());
			t.leftPanelCompliedTemplateArray.placedBetNumberInfo = MemberSite.Web.resig.compileTemplate($("#placedBetNumberInfoTemplate").html());
			t.leftPanelCompliedTemplateArray.placedBetBettradeInfo = MemberSite.Web.resig.compileTemplate($("#placedBetBettradeInfoTemplate").html());
			t.leftPanelCompliedTemplateArray.placedBetInfo = MemberSite.Web.resig.compileTemplate($("#placedBetInfoTemplate").html());
			t.leftPanelCompliedTemplateArray.placedBetInfoNoRecords = MemberSite.Web.resig.compileTemplate($("#placedBetInfoNoRecordsTemplate").html());
			t.leftPanelCompliedTemplateArray.placedBetContainer = MemberSite.Web.resig.compileTemplate($("#placedBetContainerTemplate").html());
			t.leftPanelCompliedTemplateArray.betClickInfoContainerBetOpen = MemberSite.Web.resig.compileTemplate($("#betClickInfoContainerBetOpenTemplate").html());
			t.leftPanelCompliedTemplateArray.betClickInfoContainerBetClose = MemberSite.Web.resig.compileTemplate($("#betClickInfoContainerBetCloseTemplate").html());
			t.leftPanelCompliedTemplateArray.betTradeSell = MemberSite.Web.resig.compileTemplate($("#betTradeSellTemplate").html());
			t.leftPanelCompliedTemplateArray.betTradeYesNo = MemberSite.Web.resig.compileTemplate($("#betTradeYesNoTemplate").html());
			t.leftPanelCompliedTemplateArray.betTradeReject = MemberSite.Web.resig.compileTemplate($("#betTradeRejectTemplate").html());
			t.leftPanelCompliedTemplateArray.betTradeProgress = MemberSite.Web.resig.compileTemplate($("#betTradeProgressTemplate").html());
			t.leftPanelCompliedTemplateArray.betTradeSold = MemberSite.Web.resig.compileTemplate($("#betTradeSoldTemplate").html());
			t.leftPanelCompliedTemplateArray.virtualSoccerIFrame = MemberSite.Web.resig.compileTemplate($("#virtualSoccerIFrameTemplate").html());
			t.leftPanelCompliedTemplateArray.virtualBasketballIFrame = MemberSite.Web.resig.compileTemplate($("#virtualBasketballIFrameTemplate").html())
		}, t.prototype.startUpdateTokenInterval = function() {
			setInterval(function() {
				return function() {
					return MemberSite.Web.webUtil.getServerData2(MemberSite.Web.serverData.root + "Sportsbook/UpdateToken", {}, function(n) {
						var t, i;
						if (n !== 1) return t = MemberSite.Web.oddsUI.getSelectedJSLanguage(), i = {
							buttons: [{
								html: t.OK,
								click: function() {
									return $("#dialog").dialog("close"), location.href = MemberSite.Web.webUtil.getDomainName() + "?languagecode=" + MemberSite.Web.webUtil.getLanguageStringFromLangaugeCode(MemberSite.Web.oddsCriteria.language)
								}
							}]
						}, MemberSite.Web.leftPanelBetClickProcessorHelper.showDialog(t[n === 0 ? "M214" : "SessionNotFound"], i)
					})
				}
			}(this), 6e4)
		}, t.prototype.getMemberByToken = function(n, t, i) {
			var r;
			r = {
				CompanyId: n,
				Token: t,
				IsRequireMemberSession: i
			};
			MemberSite.Web.webUtil.getServerData2(MemberSite.Web.serverData.root + "Sportsbook/GetMemberByToken", r, function() {
				return function(n) {
					MemberSite.Web.oddsCriteria.memberCode = n.Code;
					MemberSite.Web.oddsCriteria.currency = n.CurrencyCode;
					$.publish("finishGetMemberByToken", {})
				}
			}(this))
		}, t.prototype.getMemberCredit = function(n, t) {
			MemberSite.Web.webUtil.getServerData2(MemberSite.Web.serverData.root + "Sportsbook/GetMemberCredit", {
				CompanyId: n,
				MemberCode: t
			}, function() {
				return function(n) {
					var t;
					MemberSite.Web.leftPanelProcessor.memberBalance = n.BalanceAmount;
					$("#SportBookAccountContainer").html("");
					t = MemberSite.Web.leftPanelProcessor.leftPanelCompliedTemplateArray.SportBookAccountContainer(n);
					$("#SportBookAccountContainer").append(t);
					$("#SportBookAccountHeaderRefresh").removeClass("SportBookAccountHeaderRefreshAnimated").addClass("SportBookAccountHeaderRefreshIcon")
				}
			}(this))
		}, t.prototype.getPendingOrBetList = function() {
			var n;
			n = $("#betListPanelTabsContainer").find(".placedBetInfoActive");
			n.attr("id") === "placedBetInfoPendingTab" ? MemberSite.Web.leftPanelPlacedBetListProcessor.placedBetInfoPendingTabHelper() : MemberSite.Web.leftPanelPlacedBetListProcessor.placedBetInfoConfirmTabHelper()
		}, t.prototype.getMemberCreditRefreshHandler = function(n) {
			$("#SportBookAccountHeaderRefresh").removeClass("SportBookAccountHeaderRefreshIcon").addClass("SportBookAccountHeaderRefreshAnimated");
			MemberSite.Web.webUtil.cancelBubbleUp(n);
			MemberSite.Web.oddsCriteria.walletMode === 2 ? MemberSite.Web.leftPanelProcessor.getCommonWalletBalance(MemberSite.Web.oddsCriteria.companyId, MemberSite.Web.oddsCriteria.memberCode, MemberSite.Web.oddsCriteria.walletCompanyGetBalanceUrl, MemberSite.Web.oddsCriteria.walletAccessKey) : MemberSite.Web.leftPanelProcessor.getMemberCredit(MemberSite.Web.oddsCriteria.companyId, MemberSite.Web.oddsCriteria.memberCode);
			MemberSite.Web.leftPanelProcessor.getPendingOrBetList()
		}, t.prototype.startPullMemberCreditInterval = function() {
			var n;
			t = MemberSite.Web.leftPanelProcessor;
			t.stopPullMemberCreditInterval();
			n = MemberSite.Web.leftPanelProcessor.memberBalance;
			t.pullMemberCreditIntervalId = setInterval(function() {
				return function() {
					return MemberSite.Web.leftPanelProcessor.getMemberCredit(MemberSite.Web.oddsCriteria.companyId, MemberSite.Web.oddsCriteria.memberCode), MemberSite.Web.leftPanelProcessor.memberBalance !== n ? (MemberSite.Web.webUtil.log("Old Balance=" + n + ",New Balance=" + MemberSite.Web.leftPanelProcessor.memberBalance), t.stopPullMemberCreditInterval()) : void 0
				}
			}(this), 3e3)
		}, t.prototype.stopPullMemberCreditInterval = function() {
			window.clearTimeout(MemberSite.Web.leftPanelProcessor.pullMemberCreditIntervalId)
		}, t.prototype.renderSportPanelIndividual = function() {
			return MemberSite.Web.webUtil.getServerData2(MemberSite.Web.serverData.root + "Sportsbook/GetLeftPanelSportCountList", MemberSite.Web.oddsCriteria.getCriteria(), function() {
				return function(n) {
					var t;
					t = $("#SportPanelIndividual");
					t.html("");
					t.append(MemberSite.Web.leftPanelProcessor.leftPanelCompliedTemplateArray.SportPanelIndividual(n));
					MemberSite.Web.leftPanelOddsPageHelper.oddsPageCodeDisplayEventBySportIdAndOddsPageCode(MemberSite.Web.oddsCriteria.sportId, MemberSite.Web.oddsCriteria.oddsPageCode);
					$.publish("finishRenderSportPanelIndividual", {})
				}
			}(this))
		}, t.prototype.renderSportPanelIndividualRefreshInterval = function() {
			setInterval(function() {
				return function() {
					MemberSite.Web.leftPanelProcessor.renderSportPanelIndividualRefresh()
				}
			}(this), 6e4)
		}, t.prototype.renderSportPanelIndividualRefresh = function() {
			var n;
			n = [];
			(MemberSite.Web.oddsCriteria.openParlay === 1 || MemberSite.Web.oddsCriteria.pageMarket === 1) && (n = MemberSite.Web.leftPanelSportHelper.storeCheckedListState());
			MemberSite.Web.leftPanelProcessor.renderSportPanelIndividual();
			(MemberSite.Web.oddsCriteria.openParlay === 1 || MemberSite.Web.oddsCriteria.pageMarket === 1) && MemberSite.Web.leftPanelSportHelper.restoreCheckedListState(n)
		}, t.prototype.initailizeUIDisplayProcess = function() {
			var n;
			MemberSite.Web.leftPanelMarketHelper.clickMarketGUI($("#TodayMaketDiv"));
			MemberSite.Web.oddsCriteria.sportId === 43 && (MemberSite.Web.oddsUI.unregisterAllModules(), MemberSite.Web.leftPanelSportHelper.setLayoutForVirtualSoccerPage(), n = MemberSite.Web.leftPanelProcessor.leftPanelCompliedTemplateArray.virtualSoccerIFrame({}), $("#virtualSoccerContainer").append(n));
			MemberSite.Web.oddsCriteria.sportId === 44 && (MemberSite.Web.oddsUI.unregisterAllModules(), MemberSite.Web.leftPanelSportHelper.setLayoutForVirtualBasketballPage(), n = MemberSite.Web.leftPanelProcessor.leftPanelCompliedTemplateArray.virtualBasketballIFrame({}), $("#virtualBasketballContainer").append(n));
			MemberSite.Web.leftPanelOddsPageHelper.oddsPageCodeDisplayEventBySportIdAndOddsPageCode(MemberSite.Web.oddsCriteria.sportId, MemberSite.Web.oddsCriteria.oddsPageCode)
		}, t.prototype.initailizeUIEvents = function() {
			var n, i;
			t = MemberSite.Web.leftPanelProcessor;
			n = MemberSite.Web.leftPanelBetClickProcessor;
			i = MemberSite.Web.leftPanelPlacedBetListProcessor;
			$("#leftPanelDiv").off("click");
			$("#leftPanelDiv").off("keypress");
			$("#leftPanelDiv").off("keyup");
			$("#leftPanelDiv").on("click", ".MarketDivClick", MemberSite.Web.leftPanelMarketHelper.marketDivClickHandler);
			$("#leftPanelDiv").on("click", ".SportHeader", MemberSite.Web.leftPanelSportHelper.sportHeaderClickHandler);
			$("#leftPanelDiv").on("click", ".OddsPagePanel", MemberSite.Web.leftPanelOddsPageHelper.oddsPageCodeClickHandler);
			$("#leftPanelDiv").on("click", "#InfoSettingHeaderContainer", t.infoSettingPanelSlideHandler);
			$("#leftPanelDiv").on("click", "#MenuHeaderContainer", t.menuPanelSlideHandler);
			$("#leftPanelDiv").on("click", "#SportBookAccountHeaderRefresh", t.getMemberCreditRefreshHandler);
			$("#leftPanelDiv").on("click", "#betClickSingleTab", n.betClickSingleTabEventHandler);
			$("#leftPanelDiv").on("click", "#betClickParlayTab", n.betClickParlayTabEventHandler);
			$("#leftPanelDiv").on("click", "#betPlaceCancelButton", n.betPlaceCancelEventHandler);
			$("#leftPanelDiv").on("keyup", "#betPlaceCancelButton", n.betPlaceCancelKeyupEventHandler);
			$("#leftPanelDiv").on("click", "#betPlacePlaceBetButton", n.placeBetDialogEventHandler);
			$("#leftPanelDiv").on("keyup", "#betPlacePlaceBetButton", n.placeBetDialogKeyUpEventHandler);
			$("#leftPanelDiv").on("click", "#betPlaceReturnButton", n.betPlaceCancelEventHandler);
			$("#leftPanelDiv").on("click", ".betClickInfoParlayCloseButton", n.betClickInfoParlayCloseButtonEventHandler);
			$("#leftPanelDiv").on("keypress", "#betPlaceStakeTextbox", n.betPlaceStakeTextboxKeyPressFilterEventHandler);
			$("#leftPanelDiv").on("keyup", "#betPlaceStakeTextbox", n.betPlaceStakeTextboxKeyUpFilterEventHandler);
			$("#leftPanelDiv").on("click", ".parlayInfoContainer", i.parlayPlacedBetSlipShowHandler);
			$("#leftPanelDiv").on("click", ".parlayInfoReturn", i.parlayPlacedBetSlipHideHandler);
			$("#leftPanelDiv").on("click", ".parlayInfoPrint", i.parlayPlacedBetSlipPrintHandler);
			$("#leftPanelDiv").on("click", "#placedBetInfoPendingTab", i.placedBetInfoPendingTabHandler);
			$("#leftPanelDiv").on("click", "#placedBetInfoConfirmTab", i.placedBetInfoConfirmTabHandler);
			$("#leftPanelDiv").on("click", "#betListRefresh", i.placedBetInfobetListRefreshHandler);
			$("#leftPanelDiv").on("click", "#BettingRecords", t.bettingRecordsEventHandler);
			$("#leftPanelDiv").on("click", "#SportsResults", t.sportsResultsEventHandler);
			$("#leftPanelDiv").on("click", "#SportsRules", t.sportsRulesEventHandler);
			$("#leftPanelDiv").on("click", "#PreferenceSetting", t.preferenceSettingEventHandler);
			$("#leftPanelDiv").on("click", "#BetTradeGuide", t.betTradeGuideEventHandler);
			if (MemberSite.Web.oddsCriteria.isUserLogin && MemberSite.Web.oddsCriteria.isBetTradeEnabled) {
				$("#leftPanelDiv").on("click", ".betTradeSellButton", MemberSite.Web.betTradeProcessor.betTradeSellButtonEventHandler);
				$("#leftPanelDiv").on("click", ".betTradeNoButton", MemberSite.Web.betTradeProcessor.betTradeNoButtonEventHandler);
				$("#leftPanelDiv").on("click", ".betTradeYesButton", MemberSite.Web.betTradeProcessor.betTradeYesButtonEventHandler);
				$("#leftPanelDiv").on("click", ".betTradeOKButton", MemberSite.Web.betTradeProcessor.betTradeOKButtonEventHandler)
			}
		}, t.prototype.setCriteriaSportIdNOddsPageCode = function(n, t) {
			MemberSite.Web.oddsCriteria.sportId = n;
			MemberSite.Web.oddsCriteria.oddsPageCode = t
		}, t.prototype.refreshPageByCriteria2 = function() {
			var n;
			n = MemberSite.Web.oddsCriteria.getCriteria();
			MemberSite.Web.leftPanelProcessor.instantCallDisplayOddsPage(n.PageSportIds, n.Market, n.OddsPageCode, n.ViewType, n.SortingType, n.Language, n.OddsType, n.OpenParlay, n.FilterDay, new String(n.Theme), n.UserTimeZone, n.ShowStatistics, !1, n.ExtraFilter, n.CompanyId, n.IsUserLogin, n.Token, n.MemberCode, n.Currency, n.MemberGroupId, n.BetTradeToken, n.BetTradeSiteId, n.AcceptAnyOdds, n.AcceptHigherOdds, n.IsBetTradeEnabled, n.BetTradeSubscribeUrl, n.BetTradeSecurityToken, n.SeasonId, n.VirtualSoccerMatchDay, n.VirtualBasketballMatchDay, n.WalletMode, n.WalletBalanceDisplayEnabled, n.WalletBalanceRefreshInterval, n.WalletCompanyGetBalanceUrl, n.WalletAccessKey, n.VIPSpread, n.MemberVIPSpread, n.SingleLeftPanelIdleTimeoutSeconds, n.ParlayLeftPanelIdleTimeoutSeconds, n.SportFilter)
		}, t.prototype.refreshPageByCriteria = function() {
			var n, t, i;
			$(".refreshLeague", $("#oddsPageLayout")).removeClass("refreshLeagueBackground").addClass("refreshLeagueAnimatedBackground");
			i = (new Date).getTime();
			n = i - MemberSite.Web.oddsUI.lastRefreshLimitTime;
			t = Math.floor(n / 1e3);
			t > MemberSite.Web.serverData.refreshLimitSeconds ? (MemberSite.Web.oddsUI.refreshPage(), MemberSite.Web.oddsUI.pagePreviousLastPullTime = (new Date).getTime() + 1e3, MemberSite.Web.oddsUI.lastRefreshLimitTime = (new Date).getTime()) : setTimeout(function() {
				return function() {
					return $(".refreshLeague", $("#oddsPageLayout")).removeClass("refreshLeagueAnimatedBackground").addClass("refreshLeagueBackground")
				}
			}(this), 1e3)
		}, t.prototype.refreshPageByCriteriaByValues = function(n) {
			var t;
			t = MemberSite.Web.oddsCriteria.getCriteria();
			MemberSite.Web.leftPanelProcessor.instantCallDisplayOddsPage(n, t.PageMarket, t.OddsPageCode, t.ViewType, t.SortingType, t.Language, t.OddsType, t.OpenParlay, t.FilterDay, new String(t.Theme), t.UserTimeZone, t.ShowStatistics, !1, t.ExtraFilter, t.CompanyId, t.IsUserLogin, t.Token, t.MemberCode, t.Currency, t.MemberGroupId, t.BetTradeToken, t.BetTradeSiteId, t.AcceptAnyOdds, t.AcceptHigherOdds, t.IsBetTradeEnabled, t.BetTradeSubscribeUrl, t.BetTradeSecurityToken, t.SeasonId, t.VirtualSoccerMatchDay, t.VirtualBasketballMatchDay, t.WalletMode, t.WalletBalanceDisplayEnabled, t.WalletBalanceRefreshInterval, t.WalletCompanyGetBalanceUrl, t.WalletAccessKey, t.VIPSpread, t.MemberVIPSpread, t.SingleLeftPanelIdleTimeoutSeconds, t.ParlayLeftPanelIdleTimeoutSeconds, t.SportFilter)
		}, t.prototype.refreshPageByCriteriaByValues2 = function(n, t) {
			var i;
			i = MemberSite.Web.oddsCriteria.getCriteria();
			MemberSite.Web.leftPanelProcessor.instantCallDisplayOddsPage(n, i.PageMarket, i.OddsPageCode, i.ViewType, i.SortingType, i.Language, i.OddsType, i.OpenParlay, i.FilterDay, new String(i.Theme), i.UserTimeZone, i.ShowStatistics, !1, t, i.CompanyId, i.IsUserLogin, i.Token, i.MemberCode, i.Currency, i.MemberGroupId, i.BetTradeToken, i.BetTradeSiteId, i.AcceptAnyOdds, i.AcceptHigherOdds, i.IsBetTradeEnabled, i.BetTradeSubscribeUrl, i.BetTradeSecurityToken, i.SeasonId, i.VirtualSoccerMatchDay, i.VirtualBasketballMatchDay, i.WalletMode, i.WalletBalanceDisplayEnabled, i.WalletBalanceRefreshInterval, i.WalletCompanyGetBalanceUrl, i.WalletAccessKey, i.VIPSpread, i.MemberVIPSpread, i.SingleLeftPanelIdleTimeoutSeconds, i.ParlayLeftPanelIdleTimeoutSeconds, i.SportFilter)
		}, t.prototype.instantCallDisplayOddsPage = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, ft, et, ot, st, ht, ct, lt, at, vt, yt, pt, wt, bt, kt) {
			var ni, ti, ii, gt, ri, dt;
			dt = 0;
			MemberSite.Web.webUtil.isStringEmptyOrBlank(h) || (dt = MemberSite.Web.oddsConst.theme.findIndexOfStringElement(h), dt === -1 && (dt = 0));
			try {
				ti = MemberSite.Web.oddsUI;
				n === -1 ? (gt = MemberSite.Web.serverData.activeSports, v = "") : (ri = n + "", gt = function() {
					var n, r, t, i;
					for (t = ri.split(","), i = [], n = 0, r = t.length; n < r; n++) ii = t[n], i.push(parseInt(ii));
					return i
				}());
				ti.initializePage(gt, t, u, e, f, s, o, i, r, MemberSite.Web.oddsConst.theme[dt], c, l, a, v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, ft, et, ot, st, ht, ct, lt, at, vt, yt, pt, wt, bt, kt)
			} catch (ui) {
				ni = ui;
				alert(ni)
			}
		}, t.prototype.infoSettingPanelSlideHandler = function(n) {
			MemberSite.Web.webUtil.cancelBubbleUp(n);
			MemberSite.Web.leftPanelProcessor.slideHandler(n, $("#InfoSettingBodyContainer"), $("#InfoSettingHeaderIcon"))
		}, t.prototype.menuPanelSlideHandler = function(n) {
			MemberSite.Web.webUtil.cancelBubbleUp(n);
			MemberSite.Web.leftPanelProcessor.slideHandler(n, $("#MenuPanel"), $("#MenuHeaderIcon"))
		}, t.prototype.slideHandler = function(n, t, i) {
			MemberSite.Web.webUtil.cancelBubbleUp(n);
			$(t).css("display") === "none" ? ($(i).removeClass("IconDown"), $(i).addClass("IconUp")) : ($(i).removeClass("IconUp"), $(i).addClass("IconDown"));
			$(t).slideToggle()
		}, t.prototype.placeBetSuccessMenuSlideUp = function() {
			$("#InfoSettingBodyContainer").slideUp();
			$("#InfoSettingHeaderIcon").removeClass("IconUp").addClass("IconDown");
			$("#MenuPanel").slideUp();
			$("#MenuHeaderIcon").removeClass("IconUp").addClass("IconDown")
		}, t.prototype.bettingRecordsEventHandler = function() {
			var n;
			n = MemberSite.Web.serverData.root + "SportsBetRecords?lang=" + MemberSite.Web.oddsCriteria.language + "&theme=" + MemberSite.Web.oddsCriteria.theme;
			window.open(n, "BettingRecordsWindow", "width=1224,height=600,top=0,left=0,scrollbars=1,menubar=0,status=0,toolbar=0,resizable=1,location=0,directories=0")
		}, t.prototype.sportsResultsEventHandler = function() {
			var n;
			n = MemberSite.Web.serverData.root + "SportsResults?lang=" + MemberSite.Web.oddsCriteria.language + "&theme=" + MemberSite.Web.oddsCriteria.theme;
			window.open(n, "SportsResultsWindow", "width=827,height=600,top=0,left=0,scrollbars=1,menubar=0,status=0,toolbar=0,resizable=1,location=0,directories=0")
		}, t.prototype.sportsRulesEventHandler = function() {
			var n;
			n = MemberSite.Web.serverData.root + "SportsRules?lang=" + MemberSite.Web.oddsCriteria.language + "&theme=" + MemberSite.Web.oddsCriteria.theme;
			window.open(n, "SportsRulesWindow", "width=1024,height=600,top=0,left=0,scrollbars=1,menubar=0,status=0,toolbar=0,resizable=1,location=0,directories=0")
		}, t.prototype.preferenceSettingEventHandler = function() {
			MemberSite.Web.preferencePopup.show()
		}, t.prototype.betTradeGuideEventHandler = function() {
			var n;
			n = MemberSite.Web.serverData.root + "BetTradeGuide?lang=" + MemberSite.Web.oddsCriteria.language + "&theme=" + MemberSite.Web.oddsCriteria.theme;
			window.open(n, "BetTradeGuideWindow", "width=590,height=600,top=0,left=0,scrollbars=1,menubar=0,status=0,toolbar=0,resizable=1,location=0,directories=0")
		}, t.prototype.processSportCloseMessage = function(n) {
			var t;
			MemberSite.Web.webUtil.log(JSON.stringify(n));
			n.VS_ONOFF === 1 ? (MemberSite.Web.leftPanelProcessor.closeSportArray.removeByValue(43), MemberSite.Web.leftPanelProcessor.renderSportPanelIndividualRefresh()) : n.VS_ONOFF === 0 && $.inArray(43, MemberSite.Web.leftPanelProcessor.closeSportArray) === -1 && (MemberSite.Web.leftPanelProcessor.closeSportArray.push(43), MemberSite.Web.oddsCriteria.sportId === 43 ? (t = $(".SportHeader[sport=43]"), t.next().remove(), t.remove(), $('.SportHeader[sport=0][extrafilter=""]').click()) : MemberSite.Web.leftPanelProcessor.renderSportPanelIndividualRefresh());
			n.VB_ONOFF === 1 ? (MemberSite.Web.leftPanelProcessor.closeSportArray.removeByValue(44), MemberSite.Web.leftPanelProcessor.renderSportPanelIndividualRefresh()) : n.VB_ONOFF === 0 && $.inArray(44, MemberSite.Web.leftPanelProcessor.closeSportArray) === -1 && (MemberSite.Web.leftPanelProcessor.closeSportArray.push(44), MemberSite.Web.oddsCriteria.sportId === 44 ? (t = $(".SportHeader[sport=44]"), t.next().remove(), t.remove(), $('.SportHeader[sport=0][extrafilter=""]').click()) : MemberSite.Web.leftPanelProcessor.renderSportPanelIndividualRefresh())
		}, t.prototype.startCommonWalletInterval = function() {
			var n;
			t = MemberSite.Web.leftPanelProcessor;
			t.stopGetCommonWalletBalanceInterval();
			n = MemberSite.Web.leftPanelProcessor.memberBalance;
			t.pullCommonWalletIntervalId = setInterval(function() {
				return function() {
					return $("#SportBookAccountHeaderRefresh").removeClass("SportBookAccountHeaderRefreshIcon").addClass("SportBookAccountHeaderRefreshAnimated"), MemberSite.Web.leftPanelProcessor.getCommonWalletBalance(MemberSite.Web.oddsCriteria.companyId, MemberSite.Web.oddsCriteria.memberCode, MemberSite.Web.oddsCriteria.walletCompanyGetBalanceUrl, MemberSite.Web.oddsCriteria.walletAccessKey), MemberSite.Web.leftPanelProcessor.memberBalance !== n ? MemberSite.Web.webUtil.log("Old Common Wallet Balance=" + n + ", New Common Wallet Balance=" + MemberSite.Web.leftPanelProcessor.memberBalance) : void 0
				}
			}(this), MemberSite.Web.oddsCriteria.walletBalanceRefreshInterval * 1e3)
		}, t.prototype.stopGetCommonWalletBalanceInterval = function() {
			window.clearTimeout(MemberSite.Web.leftPanelProcessor.pullCommonWalletIntervalId)
		}, t.prototype.getCommonWalletBalance = function(n, t, i, r) {
			MemberSite.Web.webUtil.getServerData2(MemberSite.Web.serverData.root + "Sportsbook/GetCommonWalletBalance", {
				CompanyId: n,
				MemberCode: t,
				CompanyGetBalanceUrl: i,
				AccessKey: r
			}, function() {
				return function(n) {
					var t;
					MemberSite.Web.leftPanelProcessor.memberBalance = n.BalanceAmount;
					$("#SportBookAccountContainer").html("");
					t = MemberSite.Web.leftPanelProcessor.leftPanelCompliedTemplateArray.SportBookAccountContainer(n);
					$("#SportBookAccountContainer").append(t);
					$("#SportBookAccountHeaderRefresh").removeClass("SportBookAccountHeaderRefreshAnimated").addClass("SportBookAccountHeaderRefreshIcon")
				}
			}(this))
		}, t.prototype.checkOlympicSportCount = function() {
			MemberSite.Web.webUtil.getServerData2(MemberSite.Web.serverData.root + "Sportsbook/GetLeftPanelSportCountList", MemberSite.Web.oddsCriteria.getCriteria(), function() {
				return function(n) {
					var t, i, r;
					return MemberSite.Web.oddsCriteria.sportId === 0 ? (i = MemberSite.Web.oddsCriteria.extraFilter, n[0].ExtraFilter === "EURO2016" ? (n[0].SportId === 0 && n[0].Total === 0 && (MemberSite.Web.oddsCriteria.extraFilter = "", i !== MemberSite.Web.oddsCriteria.extraFilter && (t = 0)), n[1].SportId === 0 && n[1].Total === 0 && (MemberSite.Web.oddsCriteria.extraFilter = "", i !== MemberSite.Web.oddsCriteria.extraFilter && (t = 0))) : n[0].ExtraFilter === "CORNER" && n[0].SportId === 0 && n[0].Total === 0 && (MemberSite.Web.oddsCriteria.extraFilter = "", i !== MemberSite.Web.oddsCriteria.extraFilter && (t = 0)), t === 0 && (MemberSite.Web.oddsCriteria.oddsPageCode = 0)) : (r = n.filter(function(n) {
						return n.SportId === MemberSite.Web.oddsCriteria.sportId
					}), r.length === 0 && (MemberSite.Web.oddsCriteria.sportId = 0, MemberSite.Web.oddsCriteria.oddsPageCode = 0)), MemberSite.Web.leftPanelProcessor.refreshPageByCriteriaByValues(MemberSite.Web.oddsCriteria.sportId)
				}
			}(this))
		}, t
	}();
	MemberSite.Web.leftPanelProcessor = new t(jQuery)
}.call(this)