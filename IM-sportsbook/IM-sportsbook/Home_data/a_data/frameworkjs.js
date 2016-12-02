(function() {
	var n, t = function(n, t) {
			return function() {
				return n.apply(t, arguments)
			}
		},
		i = [].indexOf ||
	function(n) {
		for (var t = 0, i = this.length; t < i; t++) if (t in this && this[t] === n) return t;
		return -1
	};
	n = function() {
		function n(n) {
			this.$ = n;
			this.changeSelectLeagueButtonBackground = t(this.changeSelectLeagueButtonBackground, this)
		}
		var r, u, f;
		return r = "", u = "", f = [], n.prototype.selectAll = !0, n.prototype.initialize = function(n, t) {
			var r;
			return this.actionSrcId = "#" + n, this.containerId = "#" + t, this.selectedLeagues === [-1] && (this.selectAll = !0), r = $(this.actionSrcId), r.unbind("click"), r.bind("click", function(n) {
				return function() {
					var t, u, h, f, e, s, o;
					if ($.liteDialog("visible")) return !1;
					if (t = MemberSite.Web.oddsCriteria.getCriteria(), t.OddsPageCode !== 5 && !MemberSite.Web.oddsCriteria.isMatchFilterActive()) {
						if (t.OpenParlay === 1) {
							for (f = [], o = MemberSite.Web.oddsCriteria.parlayMarketArray, u = e = 0, s = o.length; e < s; u = ++e) h = o[u], MemberSite.Web.oddsCriteria.parlayMarketArray[u] && f.push(u);
							t.SelectedMarkets = f
						} else t.SelectedMarkets = [t.Market];
						return MemberSite.Web.webUtil.getServerData("GetLeagues", t, function(u) {
							var s, g, v, e, ft, f, c, y, nt, h, et, ot, p, o, l, w, tt, st, a, b, k, it, rt, d, ut;
							try {
								if (f = [], s = MemberSite.Web.oddsUI.getSelectedJSLanguage(), u && u.length > 0) {
									for (f.push('<div id="leagueSelectorContainer">'), t.OddsPageCode === 0 && t.Market === 0 ? (l = $("#oddsPageLayout").find("#selFilterPeriod"), w = l.length > 0 && l.val() !== "0" ? "&nbsp;&nbsp;&nbsp;(" + l[0].options[l[0].selectedIndex].text + ")" : "") : w = "", f.push('<div class="row" style="cursor:inherit;padding-bottom:5px"><label style="float:left;"><input type="checkbox" id="leagueSelectAll" class="checkBox" /><span class="checkBoxLabel" style="cursor:pointer;font-size:11px;font-weight:bold;padding-left:10px">' + s.all + w + "<\/span><\/lable><\/div>"), f.push('<div id="leagueScroll" style="cursor:inherit;font-size:0.8em;overflow-x:hidden;overflow-y:auto;width:100%;height:265px;height:expression( this.Height > 265 ? "266px" : "265" );max-height:266px"><div id="leagueCheckBoxesContainer" style="cursor:inherit;overflow-x:hidden;overflow-y:auto;height:260px; width:99%;">'), tt = u.length > 1, y = b = 0, it = u.length; b < it; y = ++b) {
										for (a = u[y], o = "", nt = a.Leagues.length, o += '<div class="selLeagueDiv"><div style="display:block;margin:2px;float:left;width:625px;" class="row">', v = !0, d = a.Leagues, c = k = 0, rt = d.length; k < rt; c = ++k) h = d[c], e = n.selectAll ? "checked" : n.selectedLeagues ? (ut = h.Id, i.call(n.selectedLeagues, ut) >= 0) ? "checked" : "" : "", g = '<div style="display:inline;font-size:11px;margin:2px;float:left;width:300px;" class="col"><label style="float:left;"><input type="checkbox" style="float:left;width:20px;" id="lgSel' + h.Id + '" class="checkBox" ' + e + ' /><div class="checkBoxLabel" style="width:274px;float:left;">' + h.Name + "<\/div><\/label><\/div>", o += g, c >= nt ? o += "<\/div>" : c % 2 == 1 && (o += '<\/div><div style="display:block;margin:2px;float:left;width:625px" class="row">'), v = e === "checked" ? !0 : !1;
										o += "<\/div><\/div>";
										tt ? f.push(n.getSportNameHtml(a, v) + o + "<\/div>") : f.push(o)
									}
									f.push("<\/div><\/div>");
									f.push('<div class="row" style="display:block;width:100%;height:35px;text-align:center;padding-top:5px;float:left;"><div style="float:left;width:215px;height:30px;">&nbsp;<\/div><input type="button" id="leagueSelectButton" style="float:left;" value=' + s.select + ' class="button leagueSelectButton" /><input type="button" id="leagueCancelButton" style="float:left;" value=' + s.cancel + ' class="button leagueSelectButton"/><div style="float:left;width:215px;height:30px;">&nbsp;<\/div><\/div>')
								} else f.push('<div style="text-align:center;font-size:11px;font-weight:bold;">' + s.noLeague + '<\/div><div class="row" style="display:block;width:100%;height:35px;text-align:center;padding-top:5px;float:left;"><div style="float:left;width:215px;height:30px;">&nbsp;<\/div><input type="button" id="leagueCancelButton" style="float:left;" value=' + s.cancel + ' class="button leagueSelectButton"/><div style="float:left;width:215px;height:30px;">&nbsp;<\/div><\/div>');
								return r = $(n.actionSrcId), t = MemberSite.Web.oddsCriteria.getCriteria(), st = t.SportId, et = t.OddsPageCode, ot = t.OpenParlay, p = [275, 50], $.liteDialog({
									html: f.join(""),
									top: p[1],
									left: p[0],
									width: 650,
									modal: !0
								}), $("#hyLiteDialog").addClass("LeagueSelectorDialog"), $("#leagueSelectAll").attr("checked", n.selectAll), $("#leagueSelectButton").unbind("click"), $("#leagueSelectButton").bind("click", function() {
									var t, i, r;
									if (t = $("#leagueCheckBoxesContainer input:checked"), t.length > 0) {
										for (n.selectedLeagues = [], i = 0, r = t.length; i < r; i++) h = t[i], n.selectedLeagues.push(parseInt(h.id.slice(5)));
										return $("#leagueSelectAll").attr("checked") === "checked" ? (MemberSite.Web.cookie2.setLeague(MemberSite.Web.oddsCriteria.sportId, MemberSite.Web.oddsCriteria.market, [-1]), n.changeSelectLeagueButtonBackground()) : (MemberSite.Web.cookie2.setLeague(MemberSite.Web.oddsCriteria.sportId, MemberSite.Web.oddsCriteria.market, n.selectedLeagues), n.changeSelectLeagueButtonBackground()), $.liteDialog("cleanHide"), $("#oddsPageLayout").find(".oddsDisplayContentDiv").css("display", "none").empty(), MemberSite.Web.oddsUI.refreshPage()
									}
									return $.liteDialog("cleanHide")
								}), $("#leagueCancelButton").unbind("click"), $("#leagueCancelButton").bind("click", function() {
									return $.liteDialog("cleanHide")
								}), $("#hyLiteDialog").unbind("click"), $("#hyLiteDialog").bind("click", function(t) {
									var f, r, o, i, u;
									i = $(t.target);
									i.is(":checkbox") && (u = i.attr("id"), u === "leagueSelectAll" ? (e = i.attr("checked") === "checked", $("#leagueScroll input:checkbox").attr("checked", e), e === !0 ? n.changeLeagueSelectButtonState(!0) : n.changeLeagueSelectButtonState(!1), n.selectAll = !0) : (u.substr(0, 5) === "spSel" ? (e = i.attr("checked") === "checked", r = $(i).closest(".selSportDiv").find(".selLeagueDiv"), r.find(":checkbox").attr("checked", e)) : (r = $(i).closest(".selLeagueDiv"), f = r.find("input:not(:checked)").length === 0, o = r.closest(".selSportDiv").find("input:checkbox.sport"), o.attr("checked", f)), $("#leagueScroll input:not(:checked)").length === 0 ? ($("#leagueSelectAll").attr("checked", !0), n.selectAll = !0, n.changeLeagueSelectButtonState(!0)) : $("#leagueScroll input:checked").length === 0 ? ($("#leagueSelectAll").attr("checked", !1), n.selectAll = !0, n.changeLeagueSelectButtonState(!1)) : ($("#leagueSelectAll").attr("checked", !1), n.selectAll = !1, n.changeLeagueSelectButtonState(!0))))
								})
							} catch (ht) {
								ft = ht
							}
						}), !1
					}
				}
			}(this))
		}, n.prototype.getSportNameHtml = function(n, t) {
			var r, i;
			return r = t ? "checked" : "", i = '<div style="display:block;margin:2px;float:left;width:625px" class="selSportDiv" >', i += '<div style="font-size:11px;margin:3px;float:left;width:620px;height:30px" class="col">', i += '<label style="float:left">', i += '<div class="bodyDiv SelectLeagueSportIconDiv leftTitleSportIcon_s' + n.SportId + '">&nbsp;<\/div>', i += r === "checked" ? '<input type="checkbox" style="margin-left:2px;float:left;width:20px;height:30px;" id="spSel' + n.SportId + '" class="checkBox sport" checked="' + r + '"/>' : '<input type="checkbox" style="margin-left:2px;float:left;width:20px;height:30px;" id="spSel' + n.SportId + '" class="checkBox sport"/>', i += '<div class="checkBoxLabel" style="width:274px;height:30px;line-height:30px;float:left;">' + n.SportName + "<\/div>", i + "<\/label><\/div>"
		}, n.prototype.getSelectedLeagues = function() {
			return this.selectAll ? [-1] : this.selectedLeagues
		}, n.prototype.changeLeagueSelectButtonState = function(n) {
			return n ? $("#leagueSelectButton").removeAttr("disabled") : $("#leagueSelectButton").attr("disabled", "disabled")
		}, n.prototype.changeSelectLeagueButtonBackground = function() {
			var n;
			return n = this.getSelectedLeagues(), n[0] === -1 ? $("#selectLeague").removeClass("criteriaButtonBackgroundSelected").addClass("criteriaButtonBackground") : $("#selectLeague").removeClass("criteriaButtonBackground").addClass("criteriaButtonBackgroundSelected")
		}, n
	}();
	MemberSite.Web.leaguesSelector2 = new n(jQuery)
}).call(this), function() {
	var n;
	n = function() {
		function n(n) {
			this.$ = n
		}
		return n.prototype.bind = function() {
			$("#selFilterPeriod").on("change", function() {
				var n;
				n = parseInt($("#selFilterPeriod").val());
				n = parseFloat("0." + n);
				MemberSite.Web.oddsCriteria.filterDay = 1 + n;
				MemberSite.Web.cookie2.setFilterDay(MemberSite.Web.oddsCriteria.sportId, MemberSite.Web.oddsCriteria.market, MemberSite.Web.oddsCriteria.filterDay);
				MemberSite.Web.oddsUI.refreshPage()
			});
			$("#selOddsType").on("change", function() {
				var n;
				n = parseInt($("#selOddsType").val());
				MemberSite.Web.cookie2.setOddsType(n);
				MemberSite.Web.oddsCriteria.oddsType = n;
				MemberSite.Web.oddsUI.refreshPage()
			});
			$("#selSortType").on("change", function() {
				var n;
				n = parseInt($("#selSortType").val());
				MemberSite.Web.cookie2.setSortType(n);
				MemberSite.Web.oddsCriteria.sortType = n;
				MemberSite.Web.oddsUI.refreshPage()
			});
			$("#selViewType").on("change", function() {
				var t, i, n;
				n = parseInt($("#selViewType").val());
				MemberSite.Web.cookie2.setViewType(n);
				MemberSite.Web.oddsCriteria.viewType = n;
				i = MemberSite.Web.oddsCriteria.market;
				t = MemberSite.Web.oddsCriteria.getCriteria(i);
				MemberSite.Web.oddsUI.refreshPageWithTemplate(t)
			});
			$("#parlayMarketsMainContainer").on("click", function(n) {
				var t, i;
				if (t = $(n.target), t.hasClass("parlayMarketCheckbox")) {
					if ($("#parlayMarketsMainContainer").find(".parlayMarketCheckbox:checked").length === 0) {
						t.attr("checked", !0);
						return
					}
					i = parseInt(t.val());
					t.attr("checked") === "checked" ? (t.attr("checked", !0), i === 2 && (MemberSite.Web.oddsCriteria.filterDay = -1), MemberSite.Web.oddsCriteria.parlayMarketArray[i] = !0, MemberSite.Web.oddsUI.refreshPage()) : (t.attr("checked", !1), MemberSite.Web.oddsCriteria.parlayMarketArray[i] = !1, MemberSite.Web.oddsUI.refreshPage())
				}
			});
			$("#refreshButton").on("click", function() {
				MemberSite.Web.leftPanelProcessor.refreshPageByCriteria()
			})
		}, n.prototype.unbind = function() {
			$("#selOddsType").off("change");
			$("#selSortType").off("change");
			$("#selViewType").off("change");
			$("#selMarket").off("change");
			$("#selFilterPeriod").off("change");
			$("#refreshButton").off("click")
		}, n
	}();
	MemberSite.Web.pageCriteria = new n(jQuery)
}.call(this), function() {
	var n, t = function(n, t) {
			return function() {
				return n.apply(t, arguments)
			}
		};
	n = function() {
		function n(n) {
			this.$ = n;
			this.updateMatchStatus = t(this.updateMatchStatus, this)
		}
		return n.prototype.updateOdds = function() {
			return []
		}, n.prototype.updateMatchStatus = function(n) {
			return this.updateMatchRedCard(n), MemberSite.Web.serverData.showBetTrade && this.updateBetTradeStatus(n), this.updateMatchTimeScore(n)
		}, n.prototype.updateMatchTimeScore = function(n) {
			var t, o, i, u, f, s, h, e, c, r, l;
			if (u = [], n.Market === 1 && n.RBTime !== "Live") for (s = "#m" + n.MatchId + " div.time", e = $(s), o = MemberSite.Web.bettingTime.BettingTimeToLocalTime(n.Time), i = MemberSite.Web.webUtil.formatMatchTime(n.Market, o, n.RBTime), i = this.translateHTRBTimeUpdate(i), r = 0, l = e.length; r < l; r++) h = e[r], t = $(h).children(), t.length >= 2 && (f = $(t[0]).children(), c = $(t[1]).children(), MemberSite.Web.webUtil.updateIfChange(f[0], n.Score) && u.push(f[0]), MemberSite.Web.webUtil.updateIfChange(c[0], i));
			return u
		}, n.prototype.updateMatchRedCard = function(n) {
			var c, i, t, u, r, o, s, f, e, h;
			if (n.Market === 1 && n.RBTime !== "Live") for (s = MemberSite.Web.oddsCriteria.oddsPageCode === 0 && MemberSite.Web.oddsCriteria.viewType ? "#m" + n.MatchId + (MemberSite.Web.oddsCriteria.language === 1 || MemberSite.Web.oddsCriteria.language === 2 ? " div.AHOU1X2teamChs div.AHOU1X2teamName" : " div.AHOU1X2team div.AHOU1X2teamName") : MemberSite.Web.oddsCriteria.oddsPageCode === 7 ? "#m" + n.MatchId + (MemberSite.Web.oddsCriteria.language === 1 || MemberSite.Web.oddsCriteria.language === 2 ? " div.CSteamChs div.CSteamName" : " div.CSteam div.CSteamName") : "#m" + n.MatchId + (MemberSite.Web.oddsCriteria.language === 1 || MemberSite.Web.oddsCriteria.language === 2 ? " div.teamChs div.teamName" : " div.team div.teamName"), f = $(s), i = MemberSite.Web.oddsCriteria.oddsPageCode === 7 ? $(f).find(".teamNameMargin") : $(f).children(), o = [n.HomeRedCard, n.AwayRedCard], t = e = 0, h = i.length; e < h; t = ++e) {
				if (c = i[t], t === 2) return;
				r = o[t % 2];
				r !== 0 ? (u = $(i[t]).children("span.redCard"), u.length === 0 ? $(i[t]).append('<span class="redCard">' + r + "<\/span>") : MemberSite.Web.webUtil.updateIfChange(u[0], r)) : $(i[t]).children("span.redCard").remove()
			}
		}, n.prototype.updateBetTradeStatus = function(n) {
			var t, i, r;
			r = "#m" + n.MatchId;
			i = $(r);
			n.BetTrade === 1 ? (t = i.find(".BetTradePlace"), $(t[0]).addClass("BetTradeDiv")) : (t = i.find(".BetTradePlace"), $(t[0]).removeClass("BetTradeDiv"))
		}, n.prototype.translateHTRBTimeUpdate = function(n) {
			var t;
			return t = MemberSite.Web.oddsUI.getSelectedJSLanguage(), n === "HT" && (n = t.ht), n
		}, n
	}();
	MemberSite.Classes.oddsDisplayBase = n
}.call(this), function() {
	var t, n = function(n, t) {
			return function() {
				return n.apply(t, arguments)
			}
		};
	t = function() {
		function t(t) {
			this.$ = t;
			this.getCriteria2 = n(this.getCriteria2, this);
			this.getCriteria = n(this.getCriteria, this);
			this.isMatchFilterActive = n(this.isMatchFilterActive, this);
			this.initailizeLeagueSelector2 = n(this.initailizeLeagueSelector2, this);
			this.initialize = n(this.initialize, this)
		}
		return t.prototype.pageSportIds = [-1], t.prototype.pageMarket = 0, t.prototype.sortType = 0, t.prototype.oddsType = 0, t.prototype.language = 0, t.prototype.filterDay = 1, t.prototype.openParlay = 0, t.prototype.parlayMarketArray = [!0, !0, !1], t.prototype.extraFilter = "", t.prototype.sportId = 0, t.prototype.market = 0, t.prototype.oddsPageCode = 0, t.prototype.viewType = 0, t.prototype.timeZones = -480, t.prototype.theme = 0, t.prototype.showStatistics = 0, t.prototype.SMVUpcomingLimit = 0, t.prototype.companyId = 45, t.prototype.isUserLogin = !1, t.prototype.token = "", t.prototype.memberCode = "", t.prototype.currency = "", t.prototype.memberGroupId = 1, t.prototype.isBetTradeEnabled = !1, t.prototype.betTradeToken = "", t.prototype.betTradeSiteId = "0", t.prototype.betTradeSubscribeUrl = "", t.prototype.betTradeSecurityToken = "", t.prototype.acceptAnyOdds = !1, t.prototype.acceptHigherOdds = !1, t.prototype.seasonId = 0, t.prototype.virtualSoccerMatchDay = 0, t.prototype.virtualBasketballMatchDay = 0, t.prototype.walletMode = 1, t.prototype.walletBalanceDisplayEnabled = !1, t.prototype.walletBalanceRefreshInterval = 0, t.prototype.walletCompanyGetBalanceUrl = "", t.prototype.walletAccessKey = "", t.prototype.vipSpread = 0, t.prototype.memberVIPSpread = 0, t.prototype.singleLeftPanelIdleTimeoutSeconds = 0, t.prototype.parlayLeftPanelIdleTimeoutSeconds = 0, t.prototype.sportFilter = 0, t.prototype.initialize = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, ft, et, ot, st, ht, ct, lt, at, vt, yt, pt, wt, bt) {
			n != null && $.isArray(n) && n.length > 0 && (this.pageSportIds = n, n[0] !== -1 && (this.sportId = parseInt(n[0])));
			this.pageMarket = parseInt(t);
			this.market = parseInt(t);
			this.oddsType = parseInt(i);
			this.language = r;
			this.filterDay = u;
			this.openParlay = f != null ? f : 0;
			this.oddsPageCode = e;
			this.viewType = parseInt(o);
			this.sortType = parseInt(s);
			this.theme = h;
			this.timeZones = c;
			this.parlayMarketArray = [!0, !0, !1];
			this.extraFilter = a ? a : "";
			this.companyId = v;
			this.isUserLogin = y;
			this.token = p;
			this.memberCode = w;
			this.currency = b;
			this.memberGroupId = k;
			this.isBetTradeEnabled = it;
			this.betTradeToken = d;
			this.betTradeSiteId = g;
			this.betTradeSubscribeUrl = rt;
			this.betTradeSecurityToken = ut;
			this.acceptAnyOdds = nt;
			this.acceptHigherOdds = tt;
			this.seasonId = ft;
			this.virtualSoccerMatchDay = et;
			this.virtualBasketballMatchDay = ot;
			this.walletMode = st;
			this.walletBalanceDisplayEnabled = ht;
			this.walletBalanceRefreshInterval = ct;
			this.walletCompanyGetBalanceUrl = lt;
			this.walletAccessKey = at;
			this.vipSpread = vt;
			this.memberVIPSpread = yt;
			this.singleLeftPanelIdleTimeoutSeconds = pt;
			this.parlayLeftPanelIdleTimeoutSeconds = wt;
			this.sportFilter = bt;
			l === !0 && this.setDataToCookie();
			this.retriveDataByCookie()
		}, t.prototype.initailizeLeagueSelector2 = function(n, t) {
			return this.market === 4 ? $("#selectLeague").remove() : MemberSite.Web.leaguesSelector2.initialize(n, t)
		}, t.prototype.setLeaguesSelector2ByCookie = function() {
			var n;
			return n = MemberSite.Web.cookie2.getLeague(this.sportId, this.market), n[0] === -1 ? (MemberSite.Web.leaguesSelector2.selectAll = !0, MemberSite.Web.leaguesSelector2.selectedLeagues = [-1]) : (MemberSite.Web.leaguesSelector2.selectAll = !1, MemberSite.Web.leaguesSelector2.selectedLeagues = n)
		}, t.prototype.retriveDataByCookie = function() {
			var n, t;
			this.setLeaguesSelector2ByCookie();
			this.sportId === 0 && this.market === 0 && this.oddsPageCode === 0 || (this.sportId === 0 && this.market === 0 && this.oddsPageCode !== 0 ? this.filterDay = this.filterDay : (t = MemberSite.Web.cookie2.getFilterDay(this.sportId, this.market), this.filterDay = t != null ? t : this.filterDay));
			this.extraFilter === "WC2014" && new Date < new Date(2014, 6, 12) && (this.filterDay = -1, MemberSite.Web.cookie2.setFilterDay(this.sportId, this.market, -1), $("#dateNavigationBar").find(".active").removeClass("active"), $("#daySel-1").parent().addClass("active"));
			this.extraFilter === "EURO2016" && new Date < new Date(2016, 6, 11) && (this.filterDay = -1, MemberSite.Web.cookie2.setFilterDay(this.sportId, this.market, -1), $("#dateNavigationBar").find(".active").removeClass("active"), $("#daySel-1").parent().addClass("active"));
			this.sportFilter === 1 && new Date < new Date(2016, 8, 3) && (this.filterDay = -1, MemberSite.Web.cookie2.setFilterDay(this.sportId, this.market, -1), $("#dateNavigationBar").find(".active").removeClass("active"), $("#daySel-1").parent().addClass("active"));
			n = MemberSite.Web.favourite.getFavouritesStorageWithDefault(null);
			MemberSite.Web.favourite.favourites = n != null ? n : MemberSite.Web.favourite.favourites;
			n === null && MemberSite.Web.favourite.setFavouritesStorageWithExpires(864e5)
		}, t.prototype.setDataToCookie = function() {
			return MemberSite.Web.cookie2.setOddsType(this.oddsType), MemberSite.Web.cookie2.setSortType(this.sortType), MemberSite.Web.cookie2.setViewType(this.viewType)
		}, t.prototype.getMatchFilterString = function() {
			var n, t;
			return (t = MemberSite.Web.cookie2.getMatchFilter(), t != null && (n = t.split("|"), n.length >= 4)) ? n[2] : ""
		}, t.prototype.isMatchFilterActive = function() {
			var n;
			return n = this.getMatchFilterString(), n != null && n !== ""
		}, t.prototype.getCriteria = function(n) {
			var f, t, i, r, u, e, o, s;
			return this.setLeaguesSelector2ByCookie(), t = [], t = MemberSite.Web.leaguesSelector2.getSelectedLeagues(), i = (e = this.oddsType) != null ? e : 0, r = (o = this.sortType) != null ? o : 0, u = (s = this.viewType) != null ? s : 0, $("#selOddsType").length > 0 && (i = $("#selOddsType").val()), $("#selSortType").length > 0 && (r = $("#selSortType").val()), $("#selViewType").length > 0 && (u = $("#selViewType").val()), n = n != null ? n : this.market, f = this.isMatchFilterActive(), {
				PageSportIds: this.pageSportIds,
				PageMarket: this.pageMarket,
				LeagueIdList: t,
				SortingType: parseInt(r),
				OddsType: parseInt(i),
				UserTimeZone: this.timeZones,
				Language: this.language,
				FilterDay: this.filterDay,
				OpenParlay: this.openParlay,
				Theme: this.theme,
				ShowStatistics: this.showStatistics,
				ExtraFilter: this.extraFilter,
				IsUserLogin: this.isUserLogin,
				MemberGroupId: this.memberGroupId,
				IsBetTradeEnabled: this.isBetTradeEnabled,
				BetTradeToken: this.betTradeToken,
				BetTradeSiteId: this.betTradeSiteId,
				BetTradeSubscribeUrl: this.betTradeSubscribeUrl,
				BetTradeSecurityToken: this.betTradeSecurityToken,
				AcceptAnyOdds: this.acceptAnyOdds,
				AcceptHigherOdds: this.acceptHigherOdds,
				SeasonId: this.seasonId,
				VirtualSoccerMatchDay: this.virtualSoccerMatchDay,
				VirtualBasketballMatchDay: this.virtualBasketballMatchDay,
				WalletMode: this.walletMode,
				WalletBalanceDisplayEnabled: this.walletBalanceDisplayEnabled,
				WalletBalanceRefreshInterval: this.walletBalanceRefreshInterval,
				WalletCompanyGetBalanceUrl: this.walletCompanyGetBalanceUrl,
				WalletAccessKey: this.walletAccessKey,
				VIPSpread: this.vipSpread,
				MemberVIPSpread: this.memberVIPSpread,
				SingleLeftPanelIdleTimeoutSeconds: this.singleLeftPanelIdleTimeoutSeconds,
				ParlayLeftPanelIdleTimeoutSeconds: this.parlayLeftPanelIdleTimeoutSeconds,
				SportFilter: this.sportFilter,
				SportId: this.sportId,
				Market: n,
				OddsPageCode: this.oddsPageCode,
				ViewType: parseInt(u),
				MatchIdList: [-1],
				ActiveMatchFilter: f,
				Token: this.token,
				SMVUpcomingLimit: this.SMVUpcomingLimit,
				Currency: this.currency,
				MemberCode: this.memberCode,
				CompanyId: this.companyId
			}
		}, t.prototype.getCriteria2 = function(n, t, i, r) {
			var s, u, f, e, o, h, c, l;
			return this.setLeaguesSelector2ByCookie(), u = [], u = MemberSite.Web.leaguesSelector2.getSelectedLeagues(), f = (h = this.oddsType) != null ? h : 0, e = (c = this.sortType) != null ? c : 0, o = (l = this.viewType) != null ? l : 0, $("#selOddsType").length > 0 && (f = $("#selOddsType").val()), $("#selSortType").length > 0 && (e = $("#selSortType").val()), $("#selViewType").length > 0 && (o = $("#selViewType").val()), s = this.isMatchFilterActive(), {
				PageSportIds: [n],
				PageMarket: this.pageMarket,
				LeagueIdList: u,
				SortingType: e,
				OddsType: f,
				UserTimeZone: this.timeZones,
				Language: MemberSite.Web.oddsCriteria.language,
				FilterDay: MemberSite.Web.oddsCriteria.filterDay,
				OpenParlay: this.openParlay,
				Theme: this.theme,
				ShowStatistics: this.showStatistics,
				IsUserLogin: MemberSite.Web.oddsConst.login,
				ExtraFilter: this.extraFilter,
				IsUserLogin: this.isUserLogin,
				MemberGroupId: this.memberGroupId,
				IsBetTradeEnabled: this.isBetTradeEnabled,
				BetTradeToken: this.betTradeToken,
				BetTradeSiteId: this.betTradeSiteId,
				BetTradeSubscribeUrl: this.betTradeSubscribeUrl,
				BetTradeSecurityToken: this.betTradeSecurityToken,
				AcceptAnyOdds: this.acceptAnyOdds,
				AcceptHigherOdds: this.acceptHigherOdds,
				SeasonId: this.seasonId,
				VirtualSoccerMatchDay: this.virtualSoccerMatchDay,
				VirtualBasketballMatchDay: this.virtualBasketballMatchDay,
				WalletMode: this.walletMode,
				WalletBalanceDisplayEnabled: this.walletBalanceDisplayEnabled,
				WalletBalanceRefreshInterval: this.walletBalanceRefreshInterval,
				WalletCompanyGetBalanceUrl: this.walletCompanyGetBalanceUrl,
				WalletAccessKey: this.walletAccessKey,
				VIPSpread: this.vipSpread,
				MemberVIPSpread: this.memberVIPSpread,
				SingleLeftPanelIdleTimeoutSeconds: this.singleLeftPanelIdleTimeoutSeconds,
				ParlayLeftPanelIdleTimeoutSeconds: this.parlayLeftPanelIdleTimeoutSeconds,
				SportFilter: this.sportFilter,
				SportId: n,
				Market: t,
				OddsPageCode: i,
				ViewType: parseInt(o),
				MatchIdList: r != null ? r : [-1],
				ActiveMatchFilter: s,
				Token: this.token,
				SMVUpcomingLimit: this.SMVUpcomingLimit,
				Currency: this.currency,
				MemberCode: this.memberCode,
				CompanyId: this.companyId
			}
		}, t
	}();
	MemberSite.Web.oddsCriteria = new t(jQuery)
}.call(this), function() {
	var t, n = function(n, t) {
			return function() {
				return n.apply(t, arguments)
			}
		};
	t = function() {
		function t(t) {
			var i, r;
			for (this.$ = t, this.getFavouritesCount2 = n(this.getFavouritesCount2, this), this.updateFavouriteGUIRefreshPartial = n(this.updateFavouriteGUIRefreshPartial, this), this.updateFavouriteGUIRefreshAll = n(this.updateFavouriteGUIRefreshAll, this), this.setLeagueFavOnObj = n(this.setLeagueFavOnObj, this), this.setMarketFavOnObj = n(this.setMarketFavOnObj, this), this.checkAllFavSelected = n(this.checkAllFavSelected, this), this.leagueFavDivDuplicatesProcessor = n(this.leagueFavDivDuplicatesProcessor, this), this.matchFavClicked = n(this.matchFavClicked, this), this.marketFavouriteProcessor_Market = n(this.marketFavouriteProcessor_Market, this), this.setFavouritesStorage = n(this.setFavouritesStorage, this), this.setFavouritesStorageWithExpires = n(this.setFavouritesStorageWithExpires, this), i = 0; i < 44;) r = t.extend(!0, {}, this.sport), this.favourites.sportArray.push(r), i++
		}
		return t.prototype.sport = {
			marketArray: [{
				marketFavOn: !1,
				leagueArray: []
			}, {
				marketFavOn: !1,
				leagueArray: []
			}, {
				marketFavOn: !1,
				leagueArray: []
			}]
		}, t.prototype.favourites = {
			sportArray: []
		}, t.prototype.setFavouritesStorageWithExpires = function(n) {
			return MemberSite.Web.jStorageUtil.setDataWithExpires("Favourites", this.favourites, n)
		}, t.prototype.setFavouritesStorage = function() {
			return MemberSite.Web.jStorageUtil.setData("Favourites", this.favourites)
		}, t.prototype.getFavouritesStorageWithDefault = function(n) {
			return MemberSite.Web.jStorageUtil.getDataWithDefault("Favourites", n)
		}, t.prototype.getFavouritesStorage = function() {
			return MemberSite.Web.jStorageUtil.getData("Favourites")
		}, t.prototype.deleteFavouritesStorage = function() {
			return MemberSite.Web.jStorageUtil.deleteData("Favourites")
		}, t.prototype.setFavouritesStorageExpires = function(n) {
			return MemberSite.Web.jStorageUtil.setExpires("Favourites", n)
		}, t.prototype.getJSONData = function(n, t, i) {
			return $.ajax({
				url: n,
				data: JSON.stringify(t),
				async: !0,
				dataType: "json",
				traditional: !0,
				contentType: "application/json, charset=utf-8",
				type: "POST",
				success: function(n) {
					var t;
					return t = n, i(t)
				},
				error: function() {
					return !1
				}
			})
		}, Array.prototype.removeByValue = function(n) {
			for (var t = 0; t < this.length;) {
				if (this[t] === n) {
					this.splice(t, 1);
					break
				}
				t++
			}
		}, Array.prototype.findIndexOfStringElement = function(n) {
			var u, i, t, r, f;
			if (n = $.trim(n), i = -1, this.length > 0) for (t = r = 0, f = this.length; r < f; t = ++r) if (u = this[t], u.toString().toLowerCase() === n.toLowerCase()) {
				i = t;
				break
			}
			return i
		}, Array.prototype.convertStringArrayToIntArray = function() {
			for (var i, t, n = t = 0, r = this.length; t < r; n = ++t) i = this[n], this[n] = parseInt(i, 10)
		}, Array.prototype.removeByIndex = function(n) {
			this.splice(n, 1)
		}, Array.prototype.addNewArray = function(n) {
			for (var i, t = 0, r = n.length; t < r; t++) i = n[t], this.push(i)
		}, Array.prototype.findElementInArray = function(n) {
			var r, i, t, u;
			if (i = !1, this.length > 0) for (t = 0, u = this.length; t < u; t++) if (r = this[t], r === n) {
				i = !0;
				break
			}
			return i
		}, t.prototype.marketfavToggleClassGUI = function(n) {
			return $(n).toggleClass("marketFavouritesDivIcon_s1").toggleClass("marketFavouritesDivIcon_s0")
		}, t.prototype.leaguefavToggleClassGUI = function(n) {
			return $(n).toggleClass("leagueFavouritesDivIcon_s1").toggleClass("leagueFavouritesDivIcon_s0")
		}, t.prototype.favToggleClassGUI = function(n) {
			return $(n).toggleClass("FavouritesDivIcon_s1").toggleClass("FavouritesDivIcon_s0")
		}, t.prototype.favToggleClassGUI2 = function(n) {
			return $(n).toggleClass("FavouritesDivIcon2_s1").toggleClass("FavouritesDivIcon2_s0")
		}, t.prototype.leftPanelfavToggleClassGUI = function(n) {
			return $(n).toggleClass("LeftpanelFavouritesDivIcon_s1").toggleClass("LeftpanelFavouritesDivIcon_s0")
		}, t.prototype.setMarketFavOnGUI = function(n) {
			return $(n).attr("marketFavOn") === "true" ? $(n).attr("marketFavOn", "false") : $(n).attr("marketFavOn", "true")
		}, t.prototype.setLeagueFavOnGUI = function(n) {
			return $(n).attr("leagueFavOn") === "true" ? $(n).attr("leagueFavOn", "false") : $(n).attr("leagueFavOn", "true")
		}, t.prototype.setMatchFavOnGUI = function(n) {
			return $(n).attr("FavOn") === "true" ? $(n).attr("FavOn", "false") : $(n).attr("FavOn", "true")
		}, t.prototype.stringToBoolConverter = function(n) {
			return n === "true" ? !0 : !1
		}, t.prototype.boolToStringConverter = function(n) {
			return n === !0 ? "true" : "false"
		}, t.prototype.isObjNull_Undefined = function(n) {
			return typeof n == "undefined" || n === void 0 || n === null ? !0 : !1
		}, t.prototype.marketFavouriteProcessor_Market = function(n, t, i, r, u, f, e) {
			var o, s, h;
			e.oddsData = [];
			e.matchIds = [];
			this.favourites.sportArray[r].marketArray[u].leagueArray = [];
			this.favourites.sportArray[r].marketArray[u].marketFavOn = !1;
			this.setFavouritesStorage();
			o = this.getMarketHeaderId(u);
			o = $(f).find(o);
			s = $(o).closest(".oddsDisplayContentDiv.fullDiv");
			h = $(s).attr("id");
			MemberSite.Web.oddsUI.unregisterModules(h)
		}, t.prototype.marketFavouriteProcessor_League = function(n, t, i, r, u, f, e) {
			var o, c, s, l, p, w, a, h, b, k, v, y;
			for (v = this.favourites.sportArray[r].marketArray[u].leagueArray, o = a = 0, b = v.length; a < b; o = ++a) if (c = v[o], c.Id === t) {
				for (y = c.matchArray, h = 0, k = y.length; h < k; h++) l = y[h], e.removeMatchInCache(l + ""), e.matchIds.removeByValue(l + "");
				this.favourites.sportArray[r].marketArray[u].leagueArray.removeByIndex(o);
				this.favourites.sportArray[r].marketArray[u].marketFavOn = !1;
				this.setFavouritesStorage();
				$("#lg" + t).stop(!0, !0).slideToggle(1e3).empty().remove();
				this.favourites.sportArray[r].marketArray[u].leagueArray.length === 0 && (this.favourites.sportArray[r].marketArray[u].marketFavOn = !1, this.setFavouritesStorage(), s = this.getMarketHeaderId(u), s = $(f).find(s), p = $(s).closest(".oddsDisplayContentDiv.fullDiv"), w = $(p).attr("id"), MemberSite.Web.oddsUI.unregisterModules(w));
				break
			}
		}, t.prototype.marketFavouriteProcessor_Match = function(n, t, i, r, u, f, e, o, s) {
			var c, h, l, y, p, a, w, v;
			for (v = this.favourites.sportArray[f].marketArray[e].leagueArray, c = a = 0, w = v.length; a < w; c = ++a) if (h = v[c], h.Id === r) {
				this.favourites.sportArray[f].marketArray[e].marketFavOn = !1;
				h.leagueFavOn = !1;
				s.removeMatchInCache(i + "");
				s.matchIds.removeByValue(i + "");
				h.matchArray.removeByValue(i);
				this.setFavouritesStorage();
				$("#m" + i).stop(!0, !0).slideToggle(1e3).empty().remove();
				h.matchArray.length === 0 && (this.favourites.sportArray[f].marketArray[e].leagueArray.removeByIndex(c), this.setFavouritesStorage(), $("#lg" + r).stop(!0, !0).slideToggle(1e3).empty().remove());
				this.favourites.sportArray[f].marketArray[e].leagueArray.length === 0 && (this.favourites.sportArray[f].marketArray[e].marketFavOn = !1, this.setFavouritesStorage(), l = this.getMarketHeaderId(e), l = $(o).find(l), y = $(l).closest(".oddsDisplayContentDiv.fullDiv"), p = $(y).attr("id"), MemberSite.Web.oddsUI.unregisterModules(p));
				break
			}
		}, t.prototype.getMarketHeaderId = function(n) {
			return n === 0 ? "#mkFavAH" : n === 1 ? "#mkFavRB" : "#mkFavEM"
		}, t.prototype.removeFavByMarket = function(n, t, i, r, u, f) {
			var o, e, s, c, h;
			for (h = n.leagueArray, o = s = 0, c = h.length; s < c; o = ++s) if (e = h[o], e.Id === u) {
				e.leagueFavOn = f;
				e.matchArray.removeByValue(r);
				e.matchArray.length === 0 && n.leagueArray.removeByIndex(o);
				this.setFavouritesStorage();
				break
			}
		}, t.prototype.addFavByMarket = function(n, t, i, r, u, f) {
			var s, e, c, o, l, h;
			for (s = !1, h = n.leagueArray, o = 0, l = h.length; o < l; o++) if (e = h[o], e.Id === u) {
				e.leagueFavOn = f;
				e.matchArray.push(r);
				this.setFavouritesStorage();
				s = !0;
				break
			}
			s === !1 && (c = {
				Id: u,
				leagueFavOn: f,
				matchArray: [r]
			}, n.leagueArray.push(c), this.setFavouritesStorage())
		}, t.prototype.matchFavClicked = function(n, t, i, r, u, f, e, o, s) {
			var h, c, l, a, v, y, p, g, nt, tt, it, w, b, k, d;
			if (MemberSite.Web.oddsCriteria.market === MemberSite.Web.oddsConst.Favourite) this.marketFavouriteProcessor_Match(n, t, i, r, u, f, e, o, s);
			else if (t === !1) {
				for (w = this.favourites.sportArray, h = a = 0, g = w.length; a < g; h = ++a) if (l = w[h], f === h) for (b = l.marketArray, h = v = 0, nt = b.length; v < nt; h = ++v) c = b[h], e === h && this.addFavByMarket(c, n, t, i, r, u, f, e)
			} else if (t === !0) for (k = this.favourites.sportArray, h = y = 0, tt = k.length; y < tt; h = ++y) if (l = k[h], f === h) for (d = l.marketArray, h = p = 0, it = d.length; p < it; h = ++p) c = d[h], e === h && this.removeFavByMarket(c, n, t, i, r, u, f, e)
		}, t.prototype.leagueFavClicked = function(n, t, i, r, u, f, e) {
			var o, s, c, h, l;
			if (MemberSite.Web.oddsCriteria.market === MemberSite.Web.oddsConst.Favourite) this.marketFavouriteProcessor_League(n, t, i, r, u, f, e);
			else {
				for (h = 0, l = n.length; h < l; h++) o = n[h], s = $(o).attr("FavOn"), s = this.stringToBoolConverter(s), c = $(o).closest(".matchDiv").attr("matchId"), s === i && (this.matchFavClicked(o, s, c, t, i, r, u, f, e), this.setMatchFavOnGUI(o), u === 0 || u === 2 ? this.favToggleClassGUI(o) : this.favToggleClassGUI2(o));
				i === !1 && (this.setLeagueFavOnObj(o, s, c, t, !0, r, u), this.setFavouritesStorage())
			}
		}, t.prototype.leagueFavDivDuplicatesProcessor = function(n, t, i, r, u) {
			var e, f, o, s, h;
			return o = parseInt(n.closest(".leagueDiv").attr("leagueId")), f = n.attr("leagueFavOn"), f = MemberSite.Web.favourite.stringToBoolConverter(f), e = n.closest(".leagueDiv"), s = $(e[0]).children(".matchDiv"), h = s.find(".FavouritesDiv"), this.leagueFavClicked(h, o, f, t, i, r, u), this.setLeagueFavOnGUI(n), this.leaguefavToggleClassGUI(n)
		}, t.prototype.checkAllFavSelected = function(n) {
			var t, u, f, i, e, r, o;
			for (u = $(n).children(".matchDiv"), i = u.find(".FavouritesDiv"), t = 0, r = 0, o = i.length; r < o; r++) f = i[r], e = this.stringToBoolConverter($(f).attr("FavOn")), e === !0 ? t++ : t--;
			return t === i.length ? "allTrue" : t === 0 - i.length ? "allFalse" : "notAll"
		}, t.prototype.setMarketFavOnObj = function(n, t, i) {
			return this.favourites.sportArray[n].marketArray[t].marketFavOn = i
		}, t.prototype.setLeagueFavOnObj = function(n, t, i, r, u) {
			var s, a, v, f, e, o, y, p, w, h, c, l;
			for (h = this.favourites.sportArray, f = 0, y = h.length; f < y; f++) for (v = h[f], c = v.marketArray, e = 0, p = c.length; e < p; e++) for (a = c[e], l = a.leagueArray, o = 0, w = l.length; o < w; o++) if (s = l[o], s.Id === r) {
				s.leagueFavOn = u;
				this.setFavouritesStorage();
				break
			}
		}, t.prototype.updateFavouritesOnOffAll = function(n, t, i, r) {
			var f, e, o, u;
			return f = "#" + i, o = $(f).find(".marketFavouritesDiv"), o.attr("marketFavOn") === "false" && (o.attr("marketFavOn", r), this.marketfavToggleClassGUI(o), e = $(f).find(".leagueFavouritesDiv"), e.attr("leagueFavOn") === "false" && (e.attr("leagueFavOn", r), this.leaguefavToggleClassGUI(e), u = $(f).find(".FavouritesDiv"), u.attr("FavOn") === "false")) ? (u.attr("FavOn", r), t === 0 || t === 2 ? this.favToggleClassGUI(u) : this.favToggleClassGUI2(u)) : void 0
		}, t.prototype.updateMarketGUIAfterRefresh = function(n, t, i) {
			var u, r;
			if (this.favourites.sportArray[n] && this.favourites.sportArray[n].marketArray[t].marketFavOn === !0 && (u = "#" + i, r = $(u).find(this.getMarketHeaderId(t)), r.length > 0 && r.attr("marketFavOn") === "false")) return r.attr("marketFavOn", "true"), this.marketfavToggleClassGUI(r)
		}, t.prototype.updateLeagueGUIAfterRefresh = function(n, t, i, r, u) {
			var e, f;
			r.leagueFavOn === !0 && (e = "#" + u, f = $(e).find("#lgFav" + r.Id), f.length > 0 && f.attr("leagueFavOn") === "false" && (f.attr("leagueFavOn", "true"), this.leaguefavToggleClassGUI(f)))
		}, t.prototype.updateMatchArrayGUIAfterRefresh = function(n, t, i, r, u) {
			var e, f, o;
			if (r.length > 0) for (f = 0, o = r.length; f < o; f++) e = r[f], this.updateMatchGUIAfterRefresh(n, t, i, e, u)
		}, t.prototype.updateMatchGUIAfterRefresh = function(n, t, i, r, u) {
			var e, f;
			e = "#" + u;
			f = $(e).find("#Fav" + r);
			f.length > 0 && f.attr("FavOn") === "false" && (f.attr("FavOn", "true"), t === 0 || t === 2 ? this.favToggleClassGUI(f) : this.favToggleClassGUI2(f))
		}, t.prototype.updateFavouriteGUIRefreshAll = function(n, t, i, r) {
			var f, u, e, s, o;
			if (MemberSite.Web.oddsCriteria.market === MemberSite.Web.oddsConst.Favourite) this.updateFavouritesOnOffAll(n, t, i, "true"), this.synchronizeFavouriteStorage(n, t, r);
			else if (this.updateMarketGUIAfterRefresh(n, t, i), this.favourites.sportArray[n] && this.favourites.sportArray[n].marketArray[t].leagueArray.length > 0) for (o = this.favourites.sportArray[n].marketArray[t].leagueArray, f = e = 0, s = o.length; e < s; f = ++e) u = o[f], u && (this.updateLeagueGUIAfterRefresh(n, t, f, u, i), this.updateMatchArrayGUIAfterRefresh(n, t, u, u.matchArray, i))
		}, t.prototype.updateFavouriteGUIRefreshPartial = function(n, t, i, r) {
			var f, u, h, c, p, l, e, o, s, w, b, k, d, a, v, y;
			if (r.length > 0 && this.favourites.sportArray[n].marketArray[t].leagueArray.length > 0) for (a = this.favourites.sportArray[n].marketArray[t].leagueArray, f = l = 0, w = a.length; l < w; f = ++l) if (u = a[f], u) for (e = 0, b = r.length; e < b; e++) if (h = r[e], u.Id === h.LeagueId) if (u.leagueFavOn === !0) this.updateLeagueGUIAfterRefresh(n, t, f, u, i), this.updateMatchArrayGUIAfterRefresh(n, t, u, u.matchArray, i);
			else for (v = u.matchArray, o = 0, k = v.length; o < k; o++) for (c = v[o], y = h.Matches, s = 0, d = y.length; s < d; s++) p = y[s], c === p.MatchId && this.updateMatchGUIAfterRefresh(n, t, u, c, i)
		}, t.prototype.synchronizeFavouriteStorage = function(n, t, i) {
			var r, l, a, o, s, h, u, f, e, v, y, p, c;
			if (this.favourites.sportArray[n].marketArray[t].leagueArray.length > 0) {
				for (s = this.favourites.sportArray[n].marketArray[t].leagueArray.slice(0), this.favourites.sportArray[n].marketArray[t].leagueArray = [], u = 0, v = s.length; u < v; u++) for (o = s[u], f = 0, y = i.length; f < y; f++) if (r = i[f], h = [], o.Id === r.LeagueId) {
					for (c = r.Matches, e = 0, p = c.length; e < p; e++) l = c[e], h.push(l.MatchId);
					a = {
						Id: r.LeagueId,
						leagueFavOn: o.leagueFavOn,
						matchArray: h
					};
					this.favourites.sportArray[n].marketArray[t].leagueArray.push(a)
				}
				this.setFavouritesStorage()
			}
		}, t.prototype.getFavouritesCount2 = function() {
			var n, f, e, t, i, o, s, r, u;
			for (n = 0, r = this.favourites.sportArray, t = 0, o = r.length; t < o; t++) {
				for (e = r[t], u = e.marketArray, i = 0, s = u.length; i < s; i++) if (f = u[i], f.leagueArray.length > 0) {
					n = 1;
					break
				}
				if (n > 0) break
			}
			return n
		}, t
	}();
	MemberSite.Web.favourite = new t(jQuery)
}.call(this), function() {
	var n, t = function(n, t) {
			return function() {
				return n.apply(t, arguments)
			}
		};
	n = function() {
		function n(n) {
			this.$ = n;
			this.resubscribeChannel = t(this.resubscribeChannel, this);
			this.subscribeChannel = t(this.subscribeChannel, this)
		}
		return n.prototype.updateMatchStatus = function(n, t) {
			var i;
			return this.updateMatchRedCard(n, t), MemberSite.Web.serverData.showBetTrade && this.updateBetTradeStatus(n, t), i = [], this.updateMatchTimeScore(n, t)
		}, n.prototype.updateMatchRedCard = function(n, t) {
			var i, u, r, f, e;
			n.Market === 1 && n.RBTime !== "Live" && (e = $(t).find("#m" + n.MatchId), r = e.find(".MoreBetHomeRedCard"), f = r.find("span.redCard"), n.HomeRedCard === 0 ? r.find("span.redCard").remove() : f.length === 0 ? r.append('<span class="redCard">' + n.HomeRedCard + "<\/span>") : MemberSite.Web.webUtil.updateIfChange(f[0], n.HomeRedCard), i = e.find(".MoreBetAwayRedCard"), u = i.find("span.redCard"), n.AwayRedCard === 0 ? i.find("span.redCard").remove() : u.length === 0 ? i.append('<span class="redCard">' + n.AwayRedCard + "<\/span>") : MemberSite.Web.webUtil.updateIfChange(u[0], n.AwayRedCard))
		}, n.prototype.updateBetTradeStatus = function(n, t) {
			var i, r;
			r = $(t).find("#m" + n.MatchId);
			n.BetTrade === 1 ? (i = r.find(".BetTradePlace"), $(i[0]).addClass("BetTradeDiv")) : (i = r.find(".BetTradePlace"), $(i[0]).removeClass("BetTradeDiv"))
		}, n.prototype.updateMatchTimeScore = function(n, t) {
			var e, r, i, u, f, o;
			return f = [], n.Market === 1 && n.RBTime !== "Live" && (r = $(t).find("#m" + n.MatchId), u = r.find(".MoreBetScoreDiv")[0], MemberSite.Web.webUtil.updateIfChange(u, n.Score) && f.push(u), o = r.find(".MoreBetTimeDiv")[0], e = MemberSite.Web.bettingTime.BettingTimeToLocalTime(n.Time), i = MemberSite.Web.webUtil.formatMatchTime(n.Market, e, n.RBTime), i = this.translateHTRBTimeUpdate(i), MemberSite.Web.webUtil.updateIfChange(o, i)), f
		}, n.prototype.translateHTRBTimeUpdate = function(n) {
			var t;
			return t = MemberSite.Web.oddsUI.getSelectedJSLanguage(), n === "HT" && (n = t.ht), n
		}, n.prototype.translateAndSortKeyProcess = function(n, t, i) {
			var p, w, b, s, e, r, f, u, o, g, h, c, l, a, nt, tt, it, rt, ut, ft, v, y, k, d;
			for (g = MemberSite.Web.oddsUI.getSelectedJSLanguage(), h = 0, nt = n.length; h < nt; h++) for (s = n[h], k = s.Matches, c = 0, tt = k.length; c < tt; c++) if (e = k[c], this.translateLiveAndHT(e, g, i), e.SortKey = i.SortingType === 0 ? e.SortKey2[0] + "#" + s.LeagueName[i.Language] + "#" + e.SortKey2[1] + "#" + e.SortKey2[2] + "#" + e.HomeTeam[i.Language] : e.SortKey2[2] + "#" + e.SortKey2[0] + "#" + s.LeagueName[i.Language] + "#" + e.SortKey2[1] + "#" + e.HomeTeam[i.Language], o = i.OddsType, t) for (d = e.OddsLines, l = 0, it = d.length; l < it; l++) {
				if (u = d[l], f = [], i.SportId === 0) {
					if (i.OddsPageCode === 0) f = [u.FTAH, u.FTOU, u.FHAH, u.FHOU], i.ViewType === 1 && f.push(u.SHAH, u.SHOU);
					else if (i.OddsPageCode === 4) f = [u.FT, u.FH, u.SH];
					else if (i.OddsPageCode === 9) f = [u.FTAHOU[0].AH, u.FTAHOU[0].OU];
					else if (i.OddsPageCode === 10) {
						for (b = [u.FTAHOU, u.FHAHOU, u.SHAHOU], a = 0, rt = b.length; a < rt; a++) for (w = b[a], v = 0, ut = w.length; v < ut; v++) p = w[v], f.push(p.AH), f.push(p.OU);
						f.push(u.FTOE);
						f.push(u.FHOE);
						f.push(u.SHOE)
					}
				} else f = i.SportId === 1 ? [u.FTAH, u.FTOU, u.FTOE, u.FHAH, u.FHOU, u.FHOE] : i.SportId === 8 ? [u.FTAH, u.FTOU, u.FHAH, u.FHOU] : [u.FTAH, u.FTOU, u.FTOE];
				for (y = 0, ft = f.length; y < ft; y++) if (r = f[y], r) if (r.HomeOddsStr) {
					if ((MemberSite.Web.oddsCriteria.vipSpread > 0 || MemberSite.Web.oddsCriteria.memberVIPSpread > 0) && (r.HomeOddsStr = MemberSite.Web.oddsUtil.convertMalayOddsToVIPOdds(r.HomeOddsStr, MemberSite.Web.oddsCriteria.vipSpread + MemberSite.Web.oddsCriteria.memberVIPSpread), r.AwayOddsStr = MemberSite.Web.oddsUtil.convertMalayOddsToVIPOdds(r.AwayOddsStr, MemberSite.Web.oddsCriteria.vipSpread + MemberSite.Web.oddsCriteria.memberVIPSpread), Math.abs(r.HomeOddsStr) <= .05 || Math.abs(r.AwayOddsStr) <= .05)) {
						r.HandicapStr = "";
						r.HomeOddsStr = "";
						r.AwayOddsStr = "";
						continue
					}
					o !== MemberSite.Web.oddsConst.MalayOdds && (r.HomeOddsStr = MemberSite.Web.oddsUtil.adjustFromMalayOddsType(r.HomeOddsStr, o), r.AwayOddsStr = MemberSite.Web.oddsUtil.adjustFromMalayOddsType(r.AwayOddsStr, o), r.HomeOddsClassTag = "", r.AwayOddsClassTag = "", o === MemberSite.Web.oddsConst.IndoOdds && (MemberSite.Web.oddsUtil.isNeedMakeRedToMinusOddsForIndoOdds(r.HomeOddsStr) && (r.HomeOddsClassTag = "oddsRed"), MemberSite.Web.oddsUtil.isNeedMakeRedToMinusOddsForIndoOdds(r.AwayOddsStr) && (r.AwayOddsClassTag = "oddsRed")))
				} else if (r.OddStr) {
					if ((MemberSite.Web.oddsCriteria.vipSpread > 0 || MemberSite.Web.oddsCriteria.memberVIPSpread > 0) && (r.OddStr = MemberSite.Web.oddsUtil.convertMalayOddsToVIPOdds(r.OddStr, MemberSite.Web.oddsCriteria.vipSpread + MemberSite.Web.oddsCriteria.memberVIPSpread), r.EvenStr = MemberSite.Web.oddsUtil.convertMalayOddsToVIPOdds(r.EvenStr, MemberSite.Web.oddsCriteria.vipSpread + MemberSite.Web.oddsCriteria.memberVIPSpread), Math.abs(r.OddStr) <= .05 || Math.abs(r.EvenStr) <= .05)) {
						r.OddStr = "";
						r.EvenStr = "";
						continue
					}
					o !== MemberSite.Web.oddsConst.MalayOdds && (r.OddStr = MemberSite.Web.oddsUtil.adjustFromMalayOddsType(r.OddStr, o), r.EvenStr = MemberSite.Web.oddsUtil.adjustFromMalayOddsType(r.EvenStr, o), r.OddClassTag = "", r.EvenClassTag = "", o === MemberSite.Web.oddsConst.IndoOdds && (MemberSite.Web.oddsUtil.isNeedMakeRedToMinusOddsForIndoOdds(r.OddStr) && (r.OddClassTag = "oddsRed"), MemberSite.Web.oddsUtil.isNeedMakeRedToMinusOddsForIndoOdds(r.EvenStr) && (r.EvenClassTag = "oddsRed")))
				}
			}
		}, n.prototype.translateLiveAndHT = function(n, t, i) {
			var f, e, o, r, s, u, c, h;
			if (i.Market === MemberSite.Web.oddsConst.TodayMarket) n.MatchDate.getMonth ? (o = MemberSite.Classes.moreBetHelper.getPaddingNumber(n.MatchDate.getMonth() + 1, 2), f = MemberSite.Classes.moreBetHelper.getPaddingNumber(n.MatchDate.getDate(), 2)) : (e = new Date(parseInt(n.MatchDate.substr(6))), o = MemberSite.Classes.moreBetHelper.getPaddingNumber(e.getMonth() + 1, 2), f = MemberSite.Classes.moreBetHelper.getPaddingNumber(e.getDate(), 2)), n.OddsLines[0].Time = f + "/" + o + " - " + n.OddsLines[0].Time;
			else if (i.Market === MemberSite.Web.oddsConst.LiveMarket) for (h = n.OddsLines, u = 0, c = h.length; u < c; u++) r = h[u], s = $.trim(r.Time).toLowerCase(), s === "ht" ? r.Time = t.ht : s === "live" && (r.Time = t.live)
		}, n.prototype.getPaddingNumber = function(n, t) {
			var i;
			return i = "0" + n, i.substr(i.length - t)
		}, n.prototype.MoreBetBetClickEventHandler = function(n, t, i) {
			MemberSite.Web.leftPanelBetClickProcessor.betClickEventHandler(n, t, i.SportId, i.Market, "", "MoreBetMatchDiv", i)
		}, n.prototype.subscribeChannel = function(n, t, i, r, u) {
			setTimeout(function(f) {
				return function() {
					var e;
					(i === 8 && (t = 0), n !== null && t !== null && i !== null && r !== null) && (e = MemberSite.Web.oddsUtil.formatOddsChannelName(n, t, i, r), f.isStringEmptyOrBlank(e) ? MemberSite.Web.oddsPageNav.refreshPageByCriteria() : MemberSite.Web.hubClient.subscribe(e, u))
				}
			}(this))
		}, n.prototype.subscribeChannelByCriteria = function(n, t) {
			MemberSite.Classes.moreBetHelper.subscribeChannel(n.SportId, n.Market, n.OddsPageCode, n.ViewType, t)
		}, n.prototype.unsubscribeChannel = function(n) {
			this.isStringEmptyOrBlank(n) || MemberSite.Web.hubClient.unsubscribe(n)
		}, n.prototype.unsubscribeChannelByCriteria = function(n) {
			var t;
			t = MemberSite.Web.oddsUtil.formatOddsChannelName(n.SportId, n.Market, n.OddsPageCode, n.ViewType);
			MemberSite.Classes.moreBetHelper.unsubscribeChannel(t)
		}, n.prototype.resubscribeChannel = function(n, t, i, r, u) {
			var f, e;
			try {
				e = MemberSite.Web.oddsUtil.formatOddsChannelName(n, t, i, r);
				this.unsubscribeChannel(e);
				this.subscribeChannel(n, t, i, r, u)
			} catch (o) {
				f = o;
				MemberSite.Web.webUtil.log(f)
			}
		}, n.prototype.isStringEmptyOrBlank = function(n) {
			return !n || n.length === 0 || /^\s*$/.test(n)
		}, n.prototype.isParlayIntToBooleanConverter = function(n) {
			return n === 1 ? !0 : !1
		}, n.prototype.getMoreBetOneLeagueArrayInLeagueArray = function(n, t) {
			var l, i, r, e, o, u, f, h, c, s;
			for (l = MemberSite.Web.moreBetPageProcessor, r = [], u = 0, h = n.length; u < h; u++) for (e = n[u], s = e.Matches, f = 0, c = s.length; f < c; f++) if (o = s[f], t === parseInt(o.MatchId)) return i = {}, i = $.extend(!0, {}, e), i.Matches[0] = $.extend(!0, {}, o), r.push(i), r;
			return r
		}, n
	}();
	MemberSite.Classes.moreBetHelper = new n(jQuery)
}.call(this), function() {
	var t, n = function(n, t) {
			return function() {
				return n.apply(t, arguments)
			}
		};
	t = function() {
		function t() {
			this.ShowMoreBetOneFromMoreBetRightEventHandler = n(this.ShowMoreBetOneFromMoreBetRightEventHandler, this);
			this.MoreBetRightEventHandler = n(this.MoreBetRightEventHandler, this);
			this.moreBetRightUpdatePushDataOnScreen = n(this.moreBetRightUpdatePushDataOnScreen, this);
			this.processRenderMoreBetRight = n(this.processRenderMoreBetRight, this);
			this.renderMoreBetRightByData = n(this.renderMoreBetRightByData, this);
			this.renderMoreBetRight = n(this.renderMoreBetRight, this)
		}
		return t.prototype.MoreBetRightMsgProcessor = {}, t.prototype.MoreBetRightCriteria = {}, t.prototype.HTMLContainer = "", t.prototype.renderMoreBetRight = function(n, t, i) {
			var r;
			r = this;
			r.HTMLContainer = "#MoreBetRightContentMarket" + n;
			r.MoreBetRightCriteria = MemberSite.Web.oddsCriteria.getCriteria();
			r.MoreBetRightCriteria.SportId = i;
			r.MoreBetRightCriteria.Market = n;
			r.MoreBetRightCriteria.FilterDay = n === MemberSite.Web.oddsConst.EarlyMarket ? -1 : 1;
			r.MoreBetRightCriteria.OddsPageCode = 9;
			r.MoreBetRightCriteria.OddsType = parseInt($("#MoreBetSelOddsType").val());
			r.MoreBetRightCriteria.ViewType = 0;
			r.MoreBetRightCriteria.SortingType = 1;
			r.MoreBetRightCriteria.OpenParlay = 0;
			r.MoreBetRightCriteria.ExtraFilter.indexOf(MemberSite.Web.oddsConst.Corner) === -1 && (r.MoreBetRightCriteria.ExtraFilter += "," + MemberSite.Web.oddsConst.Goal);
			r.MoreBetRightMsgProcessor = new MemberSite.Classes.S0M0MoreBetRight($);
			$(r.HTMLContainer).on("click", r.MoreBetRightEventHandler);
			n === MemberSite.Web.oddsConst.LiveMarket ? ($("#MoreBetInplayTab").removeClass("MoreBetTabInActive"), $("#MoreBetUpComingTab").addClass("MoreBetTabInActive")) : ($("#MoreBetUpComingTab").removeClass("MoreBetTabInActive"), $("#MoreBetInplayTab").addClass("MoreBetTabInActive"));
			r.MoreBetRightCriteria.SMVUpcomingLimit = t;
			MemberSite.Web.webUtil.getServerData("GetMoreBetRightUpcomingOdds", r.MoreBetRightCriteria, function() {
				return function(n) {
					n && n.length > 0 ? (r.renderMoreBetRightByData(n, !1, i), MemberSite.Classes.moreBetHelper.subscribeChannelByCriteria(r.MoreBetRightCriteria, r.processRenderMoreBetRight)) : ($(r.HTMLContainer).html(""), MemberSite.Classes.moreBetHelper.subscribeChannelByCriteria(r.MoreBetRightCriteria, r.processRenderMoreBetRight), MemberSite.Web.webUtil.log("MoreBetProcessor - renderMoreBetRight - GetOddsData2 return data null or undefined"))
				}
			}(this))
		}, t.prototype.renderMoreBetRightByData = function(n, t, i) {
			var r;
			r = this;
			$(r.HTMLContainer).html("");
			MemberSite.Classes.moreBetHelper.translateAndSortKeyProcess(n, t, r.MoreBetRightCriteria);
			$(r.HTMLContainer).append(MemberSite.Web.moreBetPageProcessor.MoreBetHTMLTemplateArray["S" + i + "MoreBetRightOddsPageTemplate"](n))
		}, t.prototype.processRenderMoreBetRight = function(n) {
			var t, s, h, l, r, f, i, p, u, a, e, o, v, y, c;
			if (t = this, n != null) if (n.Type === MemberSite.Web.oddsConst.RefreshAll) MemberSite.Web.moreBetPageProcessor.refreshMoreBetPage(MemberSite.Web.moreBetOneModule.MoreBetOneCriteria.Market, t.MoreBetRightCriteria.Market);
			else {
				if (n.Type === MemberSite.Web.oddsConst.RefreshTemplate) return;
				if (n.Type === MemberSite.Web.oddsConst.ClearAndRefreshPartial) i = MemberSite.Web.webUtil.uncompressData(n.Data), MemberSite.Classes.moreBetHelper.translateAndSortKeyProcess(i, !0, t.MoreBetRightCriteria), t.partialRenderMoreBetRight(i), t.ProcessMoreBetRightNewMatchCountLimit();
				else if (n.Type === MemberSite.Web.oddsConst.NewAndUpdateRefreshPartial) i = MemberSite.Web.webUtil.uncompressData(n.Data), MemberSite.Classes.moreBetHelper.translateAndSortKeyProcess(i, !0, t.MoreBetRightCriteria), t.partialRenderMoreBetRight(i), t.ProcessMoreBetRightNewMatchCountLimit();
				else if (n.Type === MemberSite.Web.oddsConst.RefreshPartial) {
					if (r = n.Data, r.CloseMatches && r.CloseMatches.length > 0) {
						for (c = r.CloseMatches, e = 0, v = c.length; e < v; e++) h = c[e], s = $(t.HTMLContainer).find("#m" + h), s.length > 0 && ($(s).remove(), l = {
							MatchId: h,
							StatusFlag: "2"
						}, MemberSite.Web.leftPanelBetClickProcessor.leftPanelBetClickedUpdateNotifier(l));
						t.ProcessMoreBetRightCloseMatchCountLimit()
					}
					r.ZeroOddsMatches && r.ZeroOddsMatches.length > 0 && (i = MemberSite.Web.webUtil.uncompressData(n.Data), t.partialRenderMoreBetRight(i), t.ProcessMoreBetRightNewMatchCountLimit());
					r.NewMatches && r.NewMatches.length > 0 && (i = MemberSite.Web.webUtil.uncompressData(n.Data), t.partialRenderMoreBetRight(i), t.ProcessMoreBetRightNewMatchCountLimit())
				} else if (n.Type === MemberSite.Web.oddsConst.ScreenUpdate && (u = n.Data, u && $.isArray(u) && u.length > 0)) {
					for (f = [], o = 0, y = u.length; o < y; o++) a = u[o], f.push(t.moreBetRightUpdatePushDataOnScreen(a));
					f.length > 0 && (p = MemberSite.Web.oddsUtil.hilightChanges(f))
				}
			}
		}, t.prototype.partialRenderMoreBetRight = function(n) {
			var c, k, i, r, t, u, v, f, e, y, l, o, s, h, p, w, b, a;
			if (c = this, n !== null && n.length !== 0) for (e = $(c.HTMLContainer).find(".MoreBetMatchDiv"), o = 0, p = n.length; o < p; o++) for (t = n[o], a = t.Matches, s = 0, w = a.length; s < w; s++) if (u = a[s], r = "Initial Status", i = "", k = {}, $(e).length === 0) r = "Insert Start", i = MemberSite.Web.moreBetPageProcessor.MoreBetHTMLTemplateArray["S" + t.SportId + "MoreBetRightMatchTemplate"]({
				parent: t,
				current: u
			}), $(".MoreBetRightsoccerBody").append(i);
			else {
				for (h = 0, b = e.length; h < b; h++) if (f = e[h], v = $(f).attr("MatchId"), u.MatchId === v) {
					r = "Replace Current";
					l = f;
					break
				} else if (y = $(f).attr("SortKey"), u.SortKey < y) {
					r = "Insert Middle or First";
					l = f;
					break
				}
				r === "Initial Status" && (r = "Insert Latest");
				r === "Insert Middle or First" ? (i = MemberSite.Web.moreBetPageProcessor.MoreBetHTMLTemplateArray["S" + t.SportId + "MoreBetRightMatchTemplate"]({
					parent: t,
					current: u
				}), $(l).before(i)) : r === "Insert Latest" ? (i = MemberSite.Web.moreBetPageProcessor.MoreBetHTMLTemplateArray["S" + t.SportId + "MoreBetRightMatchTemplate"]({
					parent: t,
					current: u
				}), $(c.HTMLContainer).find(".MoreBetRightsoccerBody").append(i)) : r === "Replace Current" && (i = MemberSite.Web.moreBetPageProcessor.MoreBetHTMLTemplateArray["S" + t.SportId + "MoreBetRightMatchTemplate"]({
					parent: t,
					current: u
				}), $(f).replaceWith(i))
			}
		}, t.prototype.moreBetRightUpdatePushDataOnScreen = function(n) {
			var t, i;
			return t = this, i = null, t.MoreBetRightMsgProcessor ? n.PushMessageType === MemberSite.Web.oddsConst.MatchStatusMsg ? (MemberSite.Web.leftPanelBetClickProcessor.leftPanelBetClickedUpdateNotifier(n), i = MemberSite.Classes.moreBetHelper.updateMatchStatus(n, $(t.HTMLContainer))) : n.PushMessageType === MemberSite.Web.oddsConst.OddsStatus ? MemberSite.Web.leftPanelBetClickProcessor.leftPanelBetClickedUpdateNotifier(n) : i = t.MoreBetRightMsgProcessor.updateOdds(n) : MemberSite.Web.webUtil.log("moreBetOneupdatePushDataOnScreen - moreBetMsgProcessor is NULL or Undefined"), i
		}, t.prototype.ProcessMoreBetRightNewMatchCountLimit = function() {
			var n;
			n = $("#MoreBetRightContent").find(".MoreBetMatchDiv");
			n.length >= 40 && MemberSite.Web.moreBetPageProcessor.refreshMoreBetRightModule(MemberSite.Web.oddsConst.TodayMarket)
		}, t.prototype.ProcessMoreBetRightCloseMatchCountLimit = function() {
			var n;
			n = $("#MoreBetRightContent").find(".MoreBetMatchDiv");
			n.length <= 3 && MemberSite.Web.moreBetPageProcessor.refreshMoreBetRightModule(MemberSite.Web.oddsConst.TodayMarket)
		}, t.prototype.MoreBetRightEventHandler = function(n) {
			var i, r, t;
			MemberSite.Web.webUtil.cancelBubbleUp(n);
			t = $(n.target);
			i = this;
			r = t.attr("feature");
			r === "betClick" ? MemberSite.Classes.moreBetHelper.MoreBetBetClickEventHandler(n, t, i.MoreBetRightCriteria) : i.ShowMoreBetOneFromMoreBetRightEventHandler(n, t)
		}, t.prototype.ShowMoreBetOneFromMoreBetRightEventHandler = function(n, t) {
			var i, r;
			i = this;
			r = t.closest(".MoreBetMatchDiv");
			$("#MoreBetRightContent").find(".ShowMoreBetOneSelected").removeClass("ShowMoreBetOneSelected");
			r.find(".MoreBetMatchInfo").addClass("ShowMoreBetOneSelected");
			MemberSite.Web.moreBetOneModule.MoreBetOneMatchId = parseInt(r.attr("matchId"));
			MemberSite.Classes.moreBetHelper.unsubscribeChannelByCriteria(MemberSite.Web.moreBetOneModule.MoreBetOneCriteria);
			MemberSite.Web.moreBetOneModule.renderMoreBetOne(i.MoreBetRightCriteria.Market, i.MoreBetRightCriteria.SportId)
		}, t.prototype.resetProperties = function() {
			var n;
			n = this;
			n.MoreBetRightMsgProcessor = {};
			n.MoreBetRightCriteria = {};
			$(n.HTMLContainer).off("click")
		}, t
	}();
	MemberSite.Web.moreBetRightModule = t
}.call(this), function() {
	var t, n = function(n, t) {
			return function() {
				return n.apply(t, arguments)
			}
		},
		i = [].indexOf ||
	function(n) {
		for (var t = 0, i = this.length; t < i; t++) if (t in this && this[t] === n) return t;
		return -1
	};
	t = function() {
		function t() {
			this.showMatch = n(this.showMatch, this);
			this.resetProperties = n(this.resetProperties, this);
			this.afterMatchFilterChanged = n(this.afterMatchFilterChanged, this)
		}
		return t.prototype.MoreBetOneMatchId = 0, t.prototype.MoreBetOneMsgProcessor = {}, t.prototype.MoreBetOneCriteria = {}, t.prototype.renderMoreBetOne = function(n, t) {
			var i;
			i = MemberSite.Web.moreBetOneModule;
			i.MoreBetOneCriteria = MemberSite.Web.oddsCriteria.getCriteria();
			i.MoreBetOneCriteria.SportId = t;
			i.MoreBetOneCriteria.Market = n;
			i.MoreBetOneCriteria.OddsPageCode = 10;
			$("#MoreBetSelOddsType").val(i.MoreBetOneCriteria.OddsType);
			i.MoreBetOneCriteria.ViewType = 0;
			i.MoreBetOneCriteria.MatchIds = i.MoreBetOneMatchId;
			i.MoreBetOneCriteria.LastRefreshTime = null;
			i.MoreBetOneCriteria.ExtraFilter = null;
			n === MemberSite.Web.oddsConst.EarlyMarket && (i.MoreBetOneCriteria.FilterDay = -1);
			t === 0 ? i.MoreBetOneMsgProcessor = new MemberSite.Classes.S0M0MoreBetOne($) : t === 43 && (i.MoreBetOneMsgProcessor = new MemberSite.Classes.S43M0MoreBetOne($));
			i.MoreBetOneCriteria.OpenParlay = 0;
			MemberSite.Web.webUtil.getServerData("GetOddsDataByMatchIds", i.MoreBetOneCriteria, function() {
				return function(n) {
					var u, f, e, o, r;
					n && n.length > 0 ? (i.renderMoreBetOneByData(n, !1, t), t === 43 && (o = $("#virtualSoccerSeasonId"), o.html(MemberSite.Web.oddsCriteria.seasonId), u = $("#virtualSoccerMatchday"), u.html(MemberSite.Web.oddsCriteria.virtualSoccerMatchDay), e = $("#virtualSoccerMoreBetHomeTeam"), r = MemberSite.Web.oddsCriteria.language, r !== 1 && r !== 2 && (r = 0), e.html(n[0].Matches[0].HomeTeam[r]), f = $("#virtualSoccerMoreBetAwayTeam"), f.html(n[0].Matches[0].AwayTeam[r])), MemberSite.Classes.moreBetHelper.subscribeChannelByCriteria(i.MoreBetOneCriteria, i.processRenderMoreBetOne)) : (MemberSite.Classes.moreBetHelper.subscribeChannelByCriteria(i.MoreBetOneCriteria, i.processRenderMoreBetOne), MemberSite.Web.oddsPageNav.showMessageBox("M154"))
				}
			}(this))
		}, t.prototype.renderMoreBetOneByData = function(n, t, i) {
			var r, u;
			r = MemberSite.Web.moreBetOneModule;
			u = MemberSite.Classes.moreBetHelper.getMoreBetOneLeagueArrayInLeagueArray(n, r.MoreBetOneMatchId);
			u.length > 0 && ($("#MoreBetMainContent").html(""), MemberSite.Classes.moreBetHelper.translateAndSortKeyProcess(u, t, r.MoreBetOneCriteria), $("#MoreBetMainContent").append(MemberSite.Web.moreBetPageProcessor.MoreBetHTMLTemplateArray["S" + i + "MoreBetOddsPageTemplate"](u)), r.processMoreBetBlockClearLeftDisplay())
		}, t.prototype.processRenderMoreBetOne = function(n) {
			var t, r, f, e, a, u, s, o, h, c, l;
			if (t = MemberSite.Web.moreBetOneModule, n != null) if (n.Type === MemberSite.Web.oddsConst.RefreshAll) MemberSite.Web.moreBetPageProcessor.refreshMoreBetPage(t.MoreBetOneCriteria.Market, MemberSite.Web.moreBetRightModule.MoreBetRightCriteria.Market, t.MoreBetOneCriteria.SportId);
			else {
				if (n.Type === MemberSite.Web.oddsConst.RefreshTemplate) return;
				if (n.Type === MemberSite.Web.oddsConst.ClearAndRefreshPartial) e = MemberSite.Web.webUtil.uncompressData(n.Data), t.renderMoreBetOneByData(e, !0, t.MoreBetOneCriteria.SportId);
				else if (n.Type === MemberSite.Web.oddsConst.NewAndUpdateRefreshPartial) e = MemberSite.Web.webUtil.uncompressData(n.Data), t.renderMoreBetOneByData(e, !0, t.MoreBetOneCriteria.SportId);
				else if (n.Type === MemberSite.Web.oddsConst.RefreshPartial) {
					if (r = n.Data, r.CloseMatches && r.CloseMatches.length > 0 && (c = t.MoreBetOneMatchId, i.call(r.CloseMatches, c) >= 0) && ($("#MoreBetMainContent").html(""), MemberSite.Web.oddsPageNav.callLeftPanelBetInfoChanged(r.CloseMatches, ["2"])), r.ZeroOddsMatches && r.ZeroOddsMatches.length > 0 && (l = t.MoreBetOneMatchId, i.call(r.ZeroOddsMatches, l) >= 0) && t.renderMoreBetOne(MoreBet.MoreBetOneCriteria.Market), r.NewMatches && r.NewMatches.length > 0) return
				} else if (n.Type === MemberSite.Web.oddsConst.ScreenUpdate && (u = n.Data, u && $.isArray(u) && u.length > 0)) {
					for (f = [], o = 0, h = u.length; o < h; o++) s = u[o], s.MatchId === t.MoreBetOneMatchId && f.push(t.moreBetOneUpdatePushDataOnScreen(s));
					f.length > 0 && (a = MemberSite.Web.oddsUtil.hilightChanges(f))
				}
			}
		}, t.prototype.moreBetOneUpdatePushDataOnScreen = function(n) {
			var i, t;
			if (MemberSite.Web.oddsCriteria.sportId !== 43) return i = MemberSite.Web.moreBetOneModule, t = null, i.MoreBetOneMsgProcessor ? n.PushMessageType === MemberSite.Web.oddsConst.MatchStatusMsg ? (MemberSite.Web.leftPanelBetClickProcessor.leftPanelBetClickedUpdateNotifier(n), t = MemberSite.Classes.moreBetHelper.updateMatchStatus(n, $("#MoreBetMainContent"))) : n.PushMessageType === MemberSite.Web.oddsConst.OddsStatus ? MemberSite.Web.leftPanelBetClickProcessor.leftPanelBetClickedUpdateNotifier(n) : t = i.MoreBetOneMsgProcessor.updateOdds(n) : MemberSite.Web.webUtil.log("moreBetOneupdatePushDataOnScreen - moreBetMsgProcessor is NULL or Undefined"), t
		}, t.prototype.processMoreBetBlockClearLeftDisplay = function() {
			var t, i, r, n, u;
			for (i = [4, 7, 10, 13], n = 0, u = i.length; n < u; n++) r = i[n], t = $(".MoreBetBlock:nth-child(" + r + ")"), t && t.addClass("clearLeft")
		}, t.prototype.MoreBetOneEventHandler = function(n, t) {
			var r, u, i, f, e, o;
			r = MemberSite.Web.moreBetOneModule;
			i = t.closest("[feature]");
			i && (u = i.attr("feature"), u === "betClick" ? MemberSite.Classes.moreBetHelper.MoreBetBetClickEventHandler(n, i, r.MoreBetOneCriteria) : u === "ReturnToOddsDisplay" ? r.MoreBetOneReturnToOddsDisplayEventHandler(n, i) : u === "wc2014Click" ? (f = i.attr("language"), e = i.attr("matchid"), this.wc2014ClickEventHandler(f, e)) : u === "showMatch" && (o = parseInt(i.attr("matchId")), r.showMatch(o, r.MoreBetOneCriteria.Market)))
		}, t.prototype.MoreBetOneReturnToOddsDisplayEventHandler = function() {
			MemberSite.Web.moreBetPageProcessor.switchMorebetToOddsPageContainer();
			MemberSite.Web.moreBetPageProcessor.restorePreviousCriteria();
			MemberSite.Web.leftPanelProcessor.refreshPageByCriteria2()
		}, t.prototype.MoreBetSelectOddsTypeHandler = function() {
			var n;
			n = parseInt($("#MoreBetSelOddsType").val());
			$("#selOddsType").val(n);
			MemberSite.Web.cookie2.setOddsType(n);
			MemberSite.Web.oddsCriteria.oddsType = n;
			$("#MoreBetSelOddsType").val(n);
			MemberSite.Web.moreBetPageProcessor.refreshMoreBetPage(MemberSite.Web.moreBetOneModule.MoreBetOneCriteria.Market, MemberSite.Web.oddsConst.TodayMarket, MemberSite.Web.moreBetOneModule.MoreBetOneCriteria.SportId)
		}, t.prototype.initializeMatchFilter = function() {
			var n, t;
			n = MemberSite.Web.moreBetOneModule;
			$("input#MoreBetMatchFilterTextBox").matchFilter({
				url: MemberSite.Web.serverData.root + "Sportsbook/GetMatchSchedule",
				sportId: 0,
				language: n.MoreBetOneCriteria.Language,
				minCharacters: 1,
				onSelect: n.afterMatchFilterChanged,
				buttonId: "MoreBetMatchFilterButton"
			});
			t = $("input#MoreBetMatchFilterTextBox")[0].value;
			t.length > 0 ? ($("input#MoreBetMatchFilterButton").removeClass("searchButton").addClass("searchClose"), $("input#MoreBetMatchFilterTextBox").val(t)) : $("input#MoreBetMatchFilterButton").removeClass("searchClose").attr("searchButton")
		}, t.prototype.afterMatchFilterChanged = function(n) {
			var i, t, r;
			(t = MemberSite.Web.moreBetOneModule, n !== null) && (i = 0, n.Matches != null && n.Matches.length > 0 ? (t.MoreBetOneMatchId = parseInt(n.Matches[0].MatchId), i = n.Matches[0].Market, r = n.Matches[0].SportId, $("input#MoreBetMatchFilterTextBox").val(n.Matches[0].HomeTeam + " vs " + n.Matches[0].AwayTeam)) : (t.MoreBetOneMatchId = parseInt(n.MatchId), i = n.Market, r = n.SportId), MemberSite.Classes.moreBetHelper.unsubscribeChannelByCriteria(t.MoreBetOneCriteria), t.renderMoreBetOne(i, r))
		}, t.prototype.resetProperties = function() {
			var n;
			n = MemberSite.Web.moreBetOneModule;
			n.MoreBetOneMatchId = 0;
			n.MoreBetOneMsgProcessor = {};
			n.MoreBetOneCriteria = {}
		}, t.prototype.wc2014ClickEventHandler = function(n, t) {
			var i;
			i = MemberSite.Web.serverData.betRadar_WC2014Url + n + "_" + t;
			window.open(i, "WC2014Window", "width=1090,height=610,top=0,left=0,scrollbars=1,menubar=0,status=0,toolbar=0,resizable=1,location=0,directories=0")
		}, t.prototype.showMatch = function(n, t) {
			var i;
			i = this;
			MemberSite.Web.moreBetOneModule.MoreBetOneMatchId = n;
			MemberSite.Classes.moreBetHelper.unsubscribeChannelByCriteria(MemberSite.Web.moreBetOneModule.MoreBetOneCriteria);
			MemberSite.Web.moreBetOneModule.renderMoreBetOne(t, MemberSite.Web.moreBetOneModule.MoreBetOneCriteria.SportId)
		}, t
	}();
	MemberSite.Web.moreBetOneModule = new t(jQuery)
}.call(this), function() {
	var n, t = function(n, t) {
			return function() {
				return n.apply(t, arguments)
			}
		};
	n = function() {
		function n() {
			this.PullMoreBetRightUpComing = t(this.PullMoreBetRightUpComing, this);
			this.PullMoreBetRightInplay = t(this.PullMoreBetRightInplay, this)
		}
		return n.prototype.MoreBetHTMLTemplateArray = {}, n.prototype.MoreBetRightModuleArray = [], n.prototype.initialize = function(n, t, i) {
			var r, u, f;
			r = MemberSite.Web.moreBetPageProcessor;
			MemberSite.Web.moreBetOneModule.MoreBetOneMatchId = t;
			MemberSite.Web.oddsUI.previousCriteria = MemberSite.Web.oddsCriteria.getCriteria();
			r.switchOddsPageToMorebetContainer();
			$.subscribe("finishSaveTemplate", function() {
				$.unsubscribe("finishSaveTemplate");
				$("#MoreBetoddsPageContainer").append(r.MoreBetHTMLTemplateArray["S" + i + "MoreBetContainerTemplate"]());
				r.refreshMoreBetPage(n, n, i);
				$("#MoreBetoddsPageContainer").on("click", r.MoreBetoddsPageContainerClickHandler);
				$("#MoreBetSelOddsType").on("change", MemberSite.Web.moreBetOneModule.MoreBetSelectOddsTypeHandler);
				if (i === 0) {
					$("#MoreBetInplayTab").on("click", MemberSite.Web.moreBetPageProcessor.PullMoreBetRightInplay);
					$("#MoreBetUpComingTab").on("click", MemberSite.Web.moreBetPageProcessor.PullMoreBetRightUpComing);
					$("#MoreBetAllMatchContent").on({
						mouseenter: function() {
							$(this).addClass("MoreBetRightHover")
						},
						mouseleave: function() {
							$(this).removeClass("MoreBetRightHover")
						}
					}, ".MoreBetRightMatchDiv");
					MemberSite.Web.moreBetOneModule.initializeMatchFilter()
				}
				i === 43 && $(".pageDiv").animate({
					scrollTop: $(".pageDiv")[0].scrollHeight
				}, "fast")
			});
			MemberSite.Web.oddsCriteria.oddsPageCode = 9;
			u = MemberSite.Web.oddsCriteria.getCriteria();
			u.SportId = i;
			u.Market = n;
			u.ViewType = 0;
			f = "MoreBetAHOUTemplate";
			i === 43 && (f = "S" + i + "MoreBetAHOUTemplate");
			r.MoreBetHTMLTemplateArray[f] ? $.publish("finishSaveTemplate", {}) : MemberSite.Web.webUtil.getServerData("GetTemplate2", u, function(n) {
				return function(t) {
					var r, u;
					return r = $("<div><\/div>"), r.append(t), u = MemberSite.Web.resig, i === 0 ? (n.MoreBetHTMLTemplateArray["S" + i + "MoreBetAHOUTemplate"] = u.compileTemplate($(r).find("#MoreBetAHOUTemplate").html()), n.MoreBetHTMLTemplateArray["S" + i + "MoreBet1X2Template"] = u.compileTemplate($(r).find("#MoreBet1X2Template").html()), n.MoreBetHTMLTemplateArray["S" + i + "MoreBet1X2EmptyTemplate"] = u.compileTemplate($(r).find("#MoreBet1X2EmptyTemplate").html()), n.MoreBetHTMLTemplateArray["S" + i + "MoreBetDCTemplate"] = u.compileTemplate($(r).find("#MoreBetDCTemplate").html()), n.MoreBetHTMLTemplateArray["S" + i + "MoreBetDCEmptyTemplate"] = u.compileTemplate($(r).find("#MoreBetDCEmptyTemplate").html()), n.MoreBetHTMLTemplateArray["S" + i + "MoreBetTGTemplate"] = u.compileTemplate($(r).find("#MoreBetTGTemplate").html()), n.MoreBetHTMLTemplateArray["S" + i + "MoreBetTGEmptyTemplate"] = u.compileTemplate($(r).find("#MoreBetTGEmptyTemplate").html()), n.MoreBetHTMLTemplateArray["S" + i + "MoreBetOETemplate"] = u.compileTemplate($(r).find("#MoreBetOETemplate").html()), n.MoreBetHTMLTemplateArray["S" + i + "MoreBetOEEmptyTemplate"] = u.compileTemplate($(r).find("#MoreBetOEEmptyTemplate").html()), n.MoreBetHTMLTemplateArray["S" + i + "MoreBetHTFTTemplate"] = u.compileTemplate($(r).find("#MoreBetHTFTTemplate").html()), n.MoreBetHTMLTemplateArray["S" + i + "MoreBetHTFTEmptyTemplate"] = u.compileTemplate($(r).find("#MoreBetHTFTEmptyTemplate").html()), n.MoreBetHTMLTemplateArray["S" + i + "MoreBetCSTemplate"] = u.compileTemplate($(r).find("#MoreBetCSTemplate").html()), n.MoreBetHTMLTemplateArray["S" + i + "MoreBetCSEmptyTemplate"] = u.compileTemplate($(r).find("#MoreBetCSEmptyTemplate").html()), n.MoreBetHTMLTemplateArray["S" + i + "MoreBetOddsLineTemplate"] = u.compileTemplate($(r).find("#MoreBetOddsLineTemplate").html()), n.MoreBetHTMLTemplateArray["S" + i + "MoreBetOddsPageTemplate"] = u.compileTemplate($(r).find("#MoreBetOddsPageTemplate").html()), n.MoreBetHTMLTemplateArray["S" + i + "MoreBetContainerTemplate"] = u.compileTemplate($(r).find("#MoreBetContainerTemplate").html()), n.MoreBetHTMLTemplateArray["S" + i + "MoreBetRightAHOUTemplate"] = u.compileTemplate($(r).find("#MoreBetRightAHOUTemplate").html()), n.MoreBetHTMLTemplateArray["S" + i + "MoreBetRightOddsLineTemplate"] = u.compileTemplate($(r).find("#MoreBetRightOddsLineTemplate").html()), n.MoreBetHTMLTemplateArray["S" + i + "MoreBetRightMatchTemplate"] = u.compileTemplate($(r).find("#MoreBetRightMatchTemplate").html()), n.MoreBetHTMLTemplateArray["S" + i + "MoreBetRightOddsPageTemplate"] = u.compileTemplate($(r).find("#MoreBetRightOddsPageTemplate").html())) : (n.MoreBetHTMLTemplateArray["S" + i + "MoreBetAHOUTemplate"] = u.compileTemplate($(r).find("#MoreBetAHOUTemplate").html()), n.MoreBetHTMLTemplateArray["S" + i + "MoreBet1X2Template"] = u.compileTemplate($(r).find("#MoreBet1X2Template").html()), n.MoreBetHTMLTemplateArray["S" + i + "MoreBet1X2EmptyTemplate"] = u.compileTemplate($(r).find("#MoreBet1X2EmptyTemplate").html()), n.MoreBetHTMLTemplateArray["S" + i + "MoreBetCSTemplate"] = u.compileTemplate($(r).find("#MoreBetCSTemplate").html()), n.MoreBetHTMLTemplateArray["S" + i + "MoreBetCSEmptyTemplate"] = u.compileTemplate($(r).find("#MoreBetCSEmptyTemplate").html()), n.MoreBetHTMLTemplateArray["S" + i + "MoreBetOddsLineTemplate"] = u.compileTemplate($(r).find("#MoreBetOddsLineTemplate").html()), n.MoreBetHTMLTemplateArray["S" + i + "MoreBetOddsPageTemplate"] = u.compileTemplate($(r).find("#MoreBetOddsPageTemplate").html()), n.MoreBetHTMLTemplateArray["S" + i + "MoreBetContainerTemplate"] = u.compileTemplate($(r).find("#MoreBetContainerTemplate").html())), $.publish("finishSaveTemplate", {})
				}
			}(this))
		}, n.prototype.refreshMoreBetPage = function(n, t, i) {
			MemberSite.Web.moreBetOneModule.renderMoreBetOne(n, i);
			i === 0 && MemberSite.Web.moreBetPageProcessor.refreshMoreBetRightModule(t, i)
		}, n.prototype.refreshMoreBetRightModule = function(n, t) {
			MemberSite.Web.moreBetPageProcessor.unregisterAllMoreBetRightModule();
			MemberSite.Web.moreBetPageProcessor.MoreBetRightModuleArray = [];
			$("#MoreBetRightContent").html("");
			n === MemberSite.Web.oddsConst.LiveMarket ? MemberSite.Web.moreBetPageProcessor.refreshMoreBetRightByMarket(MemberSite.Web.oddsConst.LiveMarket, 0, t) : ($.subscribe("finishMoreBetRightTodayEarlyMatchCount", function(n, i) {
				return $.unsubscribe("finishMoreBetRightTodayEarlyMatchCount"), MemberSite.Web.moreBetPageProcessor.refreshMoreBetRightByMarket(MemberSite.Web.oddsConst.TodayMarket, i.TodayMatchCount, t), MemberSite.Web.moreBetPageProcessor.refreshMoreBetRightByMarket(MemberSite.Web.oddsConst.EarlyMarket, i.EarlyMatchCount, t)
			}), MemberSite.Web.webUtil.getServerData("GetMoreBetRightTodayEarlyMatchCount", {
				extraFilter: MemberSite.Web.oddsCriteria.extraFilter
			}, function() {
				return function(n) {
					return $.publish("finishMoreBetRightTodayEarlyMatchCount", n)
				}
			}(this)))
		}, n.prototype.refreshMoreBetRightByMarket = function(n, t, i) {
			var u, r;
			r = new MemberSite.Web.moreBetRightModule($);
			MemberSite.Web.moreBetPageProcessor.MoreBetRightModuleArray.push(r);
			u = "MoreBetRightContentMarket" + n;
			$('<div id="' + u + '" class="bodyDiv MoreBetRightDiv"><\/div>').appendTo("#MoreBetRightContent");
			r.renderMoreBetRight(n, t, i)
		}, n.prototype.MoreBetoddsPageContainerClickHandler = function(n) {
			var i, r, t;
			MemberSite.Web.webUtil.cancelBubbleUp(n);
			t = $(n.target);
			i = t.closest(".container");
			r = i.attr("container");
			r === "MoreBetOne" && MemberSite.Web.moreBetOneModule.MoreBetOneEventHandler(n, t)
		}, n.prototype.switchOddsPageToMorebetContainer = function() {
			MemberSite.Web.oddsUI.unregisterAllModules();
			$("#oddsPageContainer").addClass("hideDisplay");
			$("#MoreBetoddsPageContainer").removeClass("hideDisplay");
			MemberSite.Web.oddsCriteria.getCriteria().SportId === 43 && $(".pageDiv").animate({
				scrollTop: $(".pageDiv")[0].scrollHeight
			}, "fast")
		}, n.prototype.switchMorebetToOddsPageContainer = function() {
			MemberSite.Web.moreBetPageProcessor.unregisterAllModules();
			$("#MoreBetoddsPageContainer").addClass("hideDisplay");
			$("#oddsPageContainer").removeClass("hideDisplay");
			MemberSite.Web.oddsCriteria.getCriteria().SportId === 43 && $(".pageDiv").animate({
				scrollTop: 0
			}, "fast")
		}, n.prototype.PullMoreBetRightInplay = function(n) {
			var t;
			MemberSite.Web.webUtil.cancelBubbleUp(n);
			t = $(n.target);
			$(t[0]).removeClass("MoreBetTabInActive");
			$("#MoreBetUpComingTab").addClass("MoreBetTabInActive");
			MemberSite.Web.moreBetPageProcessor.refreshMoreBetRightModule(MemberSite.Web.oddsConst.LiveMarket, MemberSite.Web.moreBetPageProcessor.MoreBetRightModuleArray[0].MoreBetRightCriteria.SportId)
		}, n.prototype.PullMoreBetRightUpComing = function(n) {
			var t;
			MemberSite.Web.webUtil.cancelBubbleUp(n);
			t = $(n.target);
			$(t[0]).removeClass("MoreBetTabInActive");
			$("#MoreBetInplayTab").addClass("MoreBetTabInActive");
			MemberSite.Web.moreBetPageProcessor.refreshMoreBetRightModule(MemberSite.Web.oddsConst.TodayMarket, MemberSite.Web.moreBetPageProcessor.MoreBetRightModuleArray[0].MoreBetRightCriteria.SportId)
		}, n.prototype.restorePreviousCriteria = function() {
			MemberSite.Web.oddsCriteria.oddsPageCode = MemberSite.Web.oddsUI.previousCriteria.OddsPageCode;
			MemberSite.Web.oddsCriteria.viewType = MemberSite.Web.oddsUI.previousCriteria.ViewType
		}, n.prototype.unregisterAllModules = function() {
			var n;
			n = MemberSite.Web.moreBetPageProcessor;
			$("#MoreBetAllMatchContent").off("mouseenter mouseleave");
			$("#MoreBetSelOddsType").off("change");
			$("#MoreBetoddsPageContainer").off("click");
			$("#MoreBetInplayTab").off("click");
			$("#MoreBetUpComingTab").off("click");
			$("#MoreBetoddsPageContainer").html("");
			MemberSite.Classes.moreBetHelper.unsubscribeChannelByCriteria(MemberSite.Web.moreBetOneModule.MoreBetOneCriteria);
			MemberSite.Web.moreBetOneModule.resetProperties();
			MemberSite.Web.moreBetPageProcessor.unregisterAllMoreBetRightModule();
			MemberSite.Web.moreBetPageProcessor.MoreBetRightModuleArray = []
		}, n.prototype.unregisterAllMoreBetRightModule = function() {
			var n, t, i, f, e, r, u;
			for (r = MemberSite.Web.moreBetPageProcessor.MoreBetRightModuleArray, t = 0, f = r.length; t < f; t++) n = r[t], MemberSite.Classes.moreBetHelper.unsubscribeChannelByCriteria(n.MoreBetRightCriteria);
			for (u = MemberSite.Web.moreBetPageProcessor.MoreBetRightModuleArray, i = 0, e = u.length; i < e; i++) n = u[i], n.resetProperties()
		}, n.prototype.DisplayMarket = function(n) {
			MemberSite.Web.webUtil.cancelBubbleUp(n);
			alert($(this).attr("id"))
		}, n
	}();
	MemberSite.Web.moreBetPageProcessor = new n(jQuery)
}.call(this), function() {
	var n, t = function(n, t) {
			return function() {
				return n.apply(t, arguments)
			}
		};
	n = function() {
		function n() {
			this.initialize = t(this.initialize, this)
		}
		return n.prototype.initialize = function(n, t, i, r) {
			var u, f, e;
			r.okTitle = r.okTitle + "!";
			r.okTxt = "<div>" + r.okTxt + "<\/div>";
			r.errTitle = r.errTitle + "!";
			r.errTxt = "<div>" + r.errTxt + "<\/div>";
			u = $;
			f = {
				autoOpen: !1,
				resizable: !1,
				modal: !1,
				width: 500,
				open: function() {
					$.ajax({
						url: MemberSite.Web.serverData.root + "PreferenceSetting/GetPreferenceDialog",
						data: {
							lang: n,
							theme: t
						},
						async: !0,
						cache: !1,
						dataType: "json",
						traditional: !0,
						type: "GET",
						success: function(n) {
							var t;
							u = $;
							t = u("#preferenceDialog");
							t.html(n.body);
							u("#preference_dialog_save_button_text").html(n.saveBtn);
							u("#preference_dialog_title").html(n.title)
						}
					})
				},
				buttons: [{
					text: "Save",
					click: function(n) {
						return function() {
							var t, f, e, o, s, h, c;
							u = $;
							e = u("#preferenceDialog #memberCode").val();
							o = n.getRadioButtonValue(u, "#preferenceDialog", "oddsType");
							h = n.getRadioButtonValue(u, "#preferenceDialog", "eventSorting");
							c = n.getRadioButtonValue(u, "#preferenceDialog", "oddsPageType");
							f = n.getRadioButtonValue(u, "#preferenceDialog", "acceptHigherOddsSingle");
							t = n.getRadioButtonValue(u, "#preferenceDialog", "acceptHigherOddsParlay");
							s = {
								MemberCode: e,
								OddsType: o,
								SortType: h,
								ViewType: c,
								AcceptHigherOdds: f === 1,
								AcceptAnyOdds: t === 1
							};
							$.post(MemberSite.Web.serverData.root + "PreferenceSetting/SavePreferenceSetting2", s, function(n) {
								n ? MemberSite.Web.preferencePopup.responseMsg(r.okTitle, r.okTxt, i) : MemberSite.Web.preferencePopup.responseMsg(r.errTitle, r.errTxt, i)
							});
							u("#preferenceDialog").dialog("close")
						}
					}(this)
				}]
			};
			e = u("#preferenceDialog");
			e.dialog(f);
			u(".ui-dialog-titlebar span:contains(Preference Settings)").attr("id", "preference_dialog_title");
			u(".ui-dialog-buttonset .ui-button-text").attr("id", "preference_dialog_save_button_text")
		}, n.prototype.getRadioButtonValue = function(n, t, i) {
			var u, r;
			return u = t + ' input[type="radio"][name="' + i + '"]:checked', r = n(u), r.length > 0 ? parseInt(r.attr("v")) : 0
		}, n.prototype.show = function() {
			var n, t;
			n = $;
			t = n("#preferenceDialog");
			t.dialog("open")
		}, n.prototype.responseMsg = function(n, t) {
			$(t).dialog({
				title: n,
				resizable: !1,
				buttons: [{
					text: "Save",
					click: function() {
						return $(this).closest(".ui-dialog-content").dialog("close")
					}
				}]
			})
		}, n
	}();
	MemberSite.Web.preferencePopup = new n
}.call(this), function() {
	var n;
	n = function() {
		function n(n) {
			this.$ = n
		}
		return n.prototype.currentMatchStatus = {}, n.prototype.isFromMoreBet = !1, n.prototype.setVflMatchdayHandler = function(n) {
			var t, i;
			t = parseInt(n.match_day);
			i = parseInt(/\d+/.exec(n.season_name)[0]);
			MemberSite.Web.webUtil.log("setVflMatchday - " + i + "," + t);
			MemberSite.Web.oddsCriteria.seasonId === 0 && this.currentMatchStatus.matchDay !== 30 ? (MemberSite.Web.oddsCriteria.seasonId = i, MemberSite.Web.oddsCriteria.virtualSoccerMatchDay = t, MemberSite.Web.leftPanelProcessor.refreshPageByCriteriaByValues([MemberSite.Web.oddsCriteria.sportId]), this.displaySeasonMatchDay(i, t)) : MemberSite.Web.oddsCriteria.seasonId === 0 && this.currentMatchStatus.matchDay === 30 ? MemberSite.Web.virtualSoccerModule.currentMatchStatus.period === "Pre Match" ? (MemberSite.Web.oddsCriteria.seasonId = i, MemberSite.Web.oddsCriteria.virtualSoccerMatchDay = t, MemberSite.Web.leftPanelProcessor.refreshPageByCriteriaByValues([MemberSite.Web.oddsCriteria.sportId]), this.displaySeasonMatchDay(MemberSite.Web.oddsCriteria.seasonId, t)) : (MemberSite.Web.oddsCriteria.seasonId = i, MemberSite.Web.oddsCriteria.virtualSoccerMatchDay = 1, MemberSite.Web.leftPanelProcessor.refreshPageByCriteriaByValues([MemberSite.Web.oddsCriteria.sportId]), this.displaySeasonMatchDay(MemberSite.Web.oddsCriteria.seasonId, 1)) : (MemberSite.Web.virtualSoccerModule.isFromMoreBet = MemberSite.Web.oddsCriteria.oddsPageCode === 9 ? !0 : !1, this.switchMatchDay(i, t))
		}, n.prototype.setVflStatusHandler = function(n) {
			var t, i, r;
			MemberSite.Web.webUtil.log("setVflStatus - " + n.season_name + "," + n.match_day + "," + n.period);
			i = parseInt(n.match_day);
			r = parseInt(/\d+/.exec(n.season_name)[0]);
			this.currentMatchStatus.season = r;
			this.currentMatchStatus.matchDay = i;
			this.currentMatchStatus.period = n.period;
			n.period === "Pre Match" && (t = n.countdown > 15 ? n.countdown - 15 : 0, setTimeout(function() {
				if (MemberSite.Web.virtualSoccerModule.currentMatchStatus.period === "Pre Match") return MemberSite.Web.virtualSoccerModule.currentMatchStatus.period = "Pre Match - Closed"
			}, t * 1e3))
		}, n.prototype.firstTimeLoad = function(n, t) {
			MemberSite.Web.oddsCriteria.seasonId = n;
			MemberSite.Web.oddsCriteria.virtualSoccerMatchDay = t;
			MemberSite.Web.leftPanelProcessor.refreshPageByCriteriaByValues([MemberSite.Web.oddsCriteria.sportId])
		}, n.prototype.switchSeason = function(n, t) {
			t = t || 1;
			this.currentMatchStatus = {
				season: selectedSeason,
				matchDay: t,
				period: "Pre League"
			}
		}, n.prototype.switchMatchDay = function(n, t) {
			this.currentMatchStatus.matchDay === 1 && this.currentMatchStatus.period !== "Pre League" && this.currentMatchStatus.period !== "Pre Match" && t <= 1 ? (this.displayMatchDayNotAvailable(), window.frames.virtualSoccerIFrame.setSelectedMatchday(this.getNextAvailableMatchDay())) : this.currentMatchStatus.matchDay > 1 && this.currentMatchStatus.matchDay < 30 && t < this.currentMatchStatus.matchDay ? (this.displayMatchDayNotAvailable(), window.frames.virtualSoccerIFrame.setSelectedMatchday(this.getNextAvailableMatchDay())) : this.currentMatchStatus.matchDay > 1 && this.currentMatchStatus.matchDay < 30 && t === this.currentMatchStatus.matchDay && this.currentMatchStatus.period !== "Pre Match" ? (this.displayMatchDayNotAvailable(), window.frames.virtualSoccerIFrame.setSelectedMatchday(this.getNextAvailableMatchDay())) : this.currentMatchStatus.matchDay === 30 && this.currentMatchStatus.period === "Pre Match" && t > 1 && t <= 30 ? (t < 30 && (this.displayMatchDayNotAvailable(), window.frames.virtualSoccerIFrame.setSelectedMatchday(this.getNextAvailableMatchDay())), MemberSite.Web.oddsCriteria.seasonId = n, MemberSite.Web.oddsCriteria.virtualSoccerMatchDay = 30, this.displaySeasonMatchDay(MemberSite.Web.oddsCriteria.seasonId, 30), MemberSite.Web.virtualSoccerModule.renderPage()) : this.currentMatchStatus.matchDay === 30 && t <= 30 && this.currentMatchStatus.season === n && this.currentMatchStatus.period !== "Pre Match" ? (this.displayMatchDayNotAvailable(), window.frames.virtualSoccerIFrame.setSelectedMatchday(this.getNextAvailableMatchDay())) : this.currentMatchStatus.matchDay === 30 && (t = 1 && this.currentMatchStatus.season !== n) ? (MemberSite.Web.oddsCriteria.seasonId = n, MemberSite.Web.oddsCriteria.virtualSoccerMatchDay = 1, this.displaySeasonMatchDay(n, 1), MemberSite.Web.virtualSoccerModule.renderPage()) : (MemberSite.Web.oddsCriteria.seasonId = this.currentMatchStatus.season, MemberSite.Web.oddsCriteria.virtualSoccerMatchDay = t, this.displaySeasonMatchDay(this.currentMatchStatus.season, t), MemberSite.Web.virtualSoccerModule.renderPage())
		}, n.prototype.getNextAvailableMatchDay = function() {
			return this.currentMatchStatus.matchDay < 30 ? this.currentMatchStatus.period === "Pre Match" || this.currentMatchStatus.period === "Pre League" ? this.currentMatchStatus.matchDay : this.currentMatchStatus.matchDay + 1 : this.currentMatchStatus.period === "Pre Match" || this.currentMatchStatus.period === "Pre League" ? 30 : 1
		}, n.prototype.renderPage = function() {
			MemberSite.Web.virtualSoccerModule.isFromMoreBet ? MemberSite.Web.moreBetOneModule.MoreBetOneReturnToOddsDisplayEventHandler() : MemberSite.Web.oddsUI.refreshPage()
		}, n.prototype.displaySeasonEndMsg = function() {
			var n, t;
			n = MemberSite.Web.oddsUI.getSelectedJSLanguage();
			t = (n.SelectedSeasonEnded || "").replace("{0}", this.currentMatchStatus.season);
			MemberSite.Web.leftPanelBetClickProcessorHelper.showDialogWithOkButton(t)
		}, n.prototype.displayMatchDayNotAvailable = function() {
			var n;
			n = MemberSite.Web.oddsUI.getSelectedJSLanguage();
			MemberSite.Web.leftPanelBetClickProcessorHelper.showDialogWithOkButton(n.SelectedMatchdayNotAvailable)
		}, n.prototype.displaySeasonMatchDay = function(n, t) {
			var i, r;
			MemberSite.Web.webUtil.log("displaySeasonMatchDay - " + n + "," + t);
			r = $("#virtualSoccerSeasonId");
			r.html(n);
			i = $("#virtualSoccerMatchday");
			i.html(t)
		}, n.prototype.getRequestLogVirtualSoccerInfo = function(n, t) {
			MemberSite.Web.virtualSoccerModule.logVirtualSoccerInfo({
				companyId: MemberSite.Web.oddsCriteria.companyId,
				memberCode: MemberSite.Web.oddsCriteria.memberCode,
				methodName: n,
				data: JSON.stringify(t)
			})
		}, n.prototype.logVirtualSoccerInfo = function(n) {
			MemberSite.Web.webUtil.getServerData2(MemberSite.Web.serverData.root + "Sportsbook/LogVirtualSoccerInfo", {
				request: JSON.stringify(n)
			}, function() {
				return function() {}
			}(this))
		}, n
	}();
	MemberSite.Web.virtualSoccerModule = new n(jQuery)
}.call(this), function() {
	var n;
	n = function() {
		function n(n) {
			this.$ = n
		}
		return n.prototype.currentMatchStatus = {}, n.prototype.firstLoad = 0, n.prototype.isFromMoreBet = !1, n.prototype.setVblMatchdayHandler = function(n) {
			var r, u, i, t, f, e;
			i = parseInt(n.match_day);
			t = parseInt(/\d+/.exec(n.season_name)[0]);
			MemberSite.Web.webUtil.log("setVblMatchday - " + t + "," + i);
			e = $("#virtualBasketballIFrame").contents().find("#titlebar_container .sportevent_group_title").html();
			u = e.slice(-5).replace(" ", "");
			f = $("#virtualBasketballIFrame").contents().find("#titlebar_container .sportevent_element_title").html();
			r = f.slice(-2).replace(" ", "");
			this.currentMatchStatus.season = parseInt(u);
			this.currentMatchStatus.matchDay = parseInt(r);
			i === 1 && (t = this.currentMatchStatus.season + 1);
			MemberSite.Web.oddsCriteria.seasonId === 0 && this.currentMatchStatus.matchDay !== 30 ? (MemberSite.Web.oddsCriteria.seasonId = t, MemberSite.Web.oddsCriteria.virtualBasketballMatchDay = i, MemberSite.Web.leftPanelProcessor.refreshPageByCriteriaByValues([MemberSite.Web.oddsCriteria.sportId]), this.displaySeasonMatchDay(t, i)) : MemberSite.Web.oddsCriteria.seasonId === 0 && this.currentMatchStatus.matchDay === 30 ? (MemberSite.Web.oddsCriteria.seasonId = t, MemberSite.Web.oddsCriteria.virtualBasketballMatchDay = 1, MemberSite.Web.leftPanelProcessor.refreshPageByCriteriaByValues([MemberSite.Web.oddsCriteria.sportId]), this.displaySeasonMatchDay(MemberSite.Web.oddsCriteria.seasonId, 1)) : this.switchMatchDay(t, i)
		}, n.prototype.switchSeason = function(n, t) {
			t = t || 1;
			this.currentMatchStatus = {
				season: selectedSeason,
				matchDay: t
			}
		}, n.prototype.switchMatchDay = function(n, t) {
			this.currentMatchStatus.matchDay === 1 && t < 1 ? (this.displayMatchDayNotAvailable(), window.frames.virtualBasketballIFrame.setSelectedMatchday(this.getNextAvailableMatchDay())) : this.currentMatchStatus.matchDay > 1 && this.currentMatchStatus.matchDay < 30 && t < this.currentMatchStatus.matchDay && t !== 1 ? (this.displayMatchDayNotAvailable(), window.frames.virtualBasketballIFrame.setSelectedMatchday(this.getNextAvailableMatchDay())) : this.currentMatchStatus.matchDay > 1 && this.currentMatchStatus.matchDay < 30 && t === this.currentMatchStatus.matchDay ? (this.displayMatchDayNotAvailable(), window.frames.virtualBasketballIFrame.setSelectedMatchday(this.getNextAvailableMatchDay())) : this.currentMatchStatus.matchDay === 30 && t > 1 && t <= 30 ? t < 31 && (this.displayMatchDayNotAvailable(), MemberSite.Web.oddsCriteria.seasonId = n + 1, this.displaySeasonMatchDay(MemberSite.Web.oddsCriteria.seasonId, 1), window.frames.virtualBasketballIFrame.setSelectedMatchday(1)) : this.currentMatchStatus.matchDay === 30 && t <= 30 && this.currentMatchStatus.season === n ? (this.displayMatchDayNotAvailable(), window.frames.virtualBasketballIFrame.setSelectedMatchday(this.getNextAvailableMatchDay())) : this.currentMatchStatus.matchDay === 30 && (t = 1 && this.currentMatchStatus.season !== n) ? (MemberSite.Web.oddsCriteria.seasonId = n, MemberSite.Web.oddsCriteria.virtualBasketballMatchDay = 1, MemberSite.Web.leftPanelProcessor.refreshPageByCriteriaByValues([MemberSite.Web.oddsCriteria.sportId]), this.displaySeasonMatchDay(MemberSite.Web.oddsCriteria.seasonId, 1)) : this.currentMatchStatus.matchDay === 1 && t < 2 ? (this.displayMatchDayNotAvailable(), window.frames.virtualBasketballIFrame.setSelectedMatchday(2)) : this.currentMatchStatus.matchDay === 29 && t === 1 ? (MemberSite.Web.oddsCriteria.seasonId = n, MemberSite.Web.oddsCriteria.virtualBasketballMatchDay = t, this.displaySeasonMatchDay(n, t), MemberSite.Web.virtualBasketballModule.renderPage()) : t < this.currentMatchStatus.matchDay && t === 1 ? (this.displayMatchDayNotAvailable(), window.frames.virtualBasketballIFrame.setSelectedMatchday(this.getNextAvailableMatchDay())) : (MemberSite.Web.oddsCriteria.seasonId = this.currentMatchStatus.season, MemberSite.Web.oddsCriteria.virtualBasketballMatchDay = t, this.displaySeasonMatchDay(this.currentMatchStatus.season, t), MemberSite.Web.virtualBasketballModule.renderPage())
		}, n.prototype.getNextAvailableMatchDay = function() {
			return this.currentMatchStatus.matchDay < 30 ? this.currentMatchStatus.matchDay + 1 : 30
		}, n.prototype.renderPage = function() {
			MemberSite.Web.virtualBasketballModule.isFromMoreBet ? MemberSite.Web.moreBetOneModule.MoreBetOneReturnToOddsDisplayEventHandler() : MemberSite.Web.oddsUI.refreshPage()
		}, n.prototype.displaySeasonEndMsg = function() {
			var n, t;
			n = MemberSite.Web.oddsUI.getSelectedJSLanguage();
			t = (n.SelectedSeasonEnded || "").replace("{0}", this.currentMatchStatus.season);
			MemberSite.Web.leftPanelBetClickProcessorHelper.showDialogWithOkButton(t)
		}, n.prototype.displayMatchDayNotAvailable = function() {
			var n;
			n = MemberSite.Web.oddsUI.getSelectedJSLanguage();
			MemberSite.Web.leftPanelBetClickProcessorHelper.showDialogWithOkButton(n.SelectedMatchdayNotAvailable)
		}, n.prototype.displaySeasonMatchDay = function(n, t) {
			var i, r;
			MemberSite.Web.webUtil.log("displaySeasonMatchDay - " + n + "," + t);
			r = $("#virtualBasketballSeasonId");
			r.html(n);
			i = $("#virtualBasketballMatchday");
			i.html(t)
		}, n.prototype.getRequestLogVirtualBasketballInfo = function(n, t) {
			MemberSite.Web.virtualBasketballModule.logVirtualBasketballInfo({
				companyId: MemberSite.Web.oddsCriteria.companyId,
				memberCode: MemberSite.Web.oddsCriteria.memberCode,
				methodName: n,
				data: JSON.stringify(t)
			})
		}, n.prototype.logVirtualBasketballInfo = function(n) {
			MemberSite.Web.webUtil.getServerData2(MemberSite.Web.serverData.root + "Sportsbook/LogVirtualBasketballInfo", {
				request: JSON.stringify(n)
			}, function() {
				return function() {}
			}(this))
		}, n
	}();
	MemberSite.Web.virtualBasketballModule = new n(jQuery)
}.call(this)