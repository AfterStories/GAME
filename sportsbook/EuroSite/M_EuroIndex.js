function DivLauncher(e, t, n) {
	function d(e) {
		for (var t = g ? event.srcElement : e.target, n = 0; t != F && t != S && t.tagName != p;) {
			if (t = t.parentNode, null == t) return;
			if (n >= 50) return;
			n++
		}
		t == F ? (_ = g ? event.clientX : e.clientX, i = g ? event.clientY : e.clientY, l = parseInt(p.style.left), u = parseInt(p.style.top), y = !0) : t == S && o()
	}
	function a() {
		y = !1
	}
	function r(e) {
		y && (g ? (p.style.left = parseInt(l) + parseInt(event.clientX) - parseInt(_) + "px", p.style.top = parseInt(u) + parseInt(event.clientY) - parseInt(i) + "px") : (p.style.left = parseInt(l) + parseInt(e.clientX) - parseInt(_) + "px", p.style.top = parseInt(u) + parseInt(e.clientY) - parseInt(i) + "px"))
	}
	function o() {
		R && (null == L.beforeClose || L.beforeClose(p)) && (document.onmousemove = m, document.onmousedown = c, document.onmouseup = D, p.style.display = "none", y = !1, R = !1, null != L.afterClose && L.afterClose(p))
	}
	function s(e, t) {
		if (null == L.beforeOpen || L.beforeOpen(p)) {
			var n, o;
			n = o = 0, document.documentElement && document.documentElement.scrollTop ? (n = document.documentElement.scrollTop, o = document.documentElement.scrollLeft) : document.body && (n = document.body.scrollTop, o = document.body.scrollLeft), p.style.top = parseInt(t) + parseInt(n) + "px", p.style.left = parseInt(e) + parseInt(o) + "px", R || (m = document.onmousemove, c = document.onmousedown, D = document.onmouseup, document.onmousemove = r, document.onmousedown = d, document.onmouseup = a, p.style.display = "inline", R = !0, null != L.afterOpen && L.afterOpen(p))
		}
	}
	var _, i, l, u, c, D, m, O = 50,
		E = 50,
		p = e,
		F = t,
		S = n,
		R = !1,
		y = !1,
		g = document.all,
		L = (!document.all && document.getElementById, this);
	this.beforeOpen = null, this.afterOpen = null, this.beforeClose = null, this.afterClose = null, this.onDragging = null, p.style.position = "absolute", p.style.display = "none", p.style.zIndex = 100, null != F && (F.style.cursor = "move"), this.close = function() {
		o()
	}, this.open = function(e, t) {
		arguments.length < 2 && (e = O, t = E), s(e, t)
	}
}
function getEvent() {
	if (document.all) return window.event;
	for (func = getEvent.caller; null != func;) {
		var e = func.arguments[0];
		if (e && (e.constructor == Event || e.constructor == MouseEvent || "object" == typeof e && e.preventDefault && e.stopPropagation)) return e;
		func = func.caller
	}
	return null
}
function DivOption(e, t) {
	function n(e) {
		window.clearTimeout(r)
	}
	function d(e) {
		window.clearTimeout(r), r = window.setTimeout(a, 1e3 * s.AutoCloseSec)
	}
	function a(e) {
		_ && (window.clearTimeout(r), o ? (window.detachEvent("onblur", a), s.Div.detachEvent("onmouseover", n), s.Div.detachEvent("onmouseout", d)) : (document.removeEventListener("click", a, !1), s.Div.removeEventListener("mouseover", n, !1), s.Div.removeEventListener("mouseout", d, !1)), _ = !1, s.Div.style.display = "none")
	}
	var r, o = window.ActiveXObject ? !0 : !1,
		s = this,
		_ = !1;
	this.Div = e, this.Div.style.display = "none", this.AutoCloseSec = t, this.isOpened = function() {
		return _
	}, this.close = function(e) {
		a(e)
	}, this.open = function(e, t, s) {
		_ || (window.event ? window.event.cancelBubble = !0 : e && e.stopPropagation(), o ? (document.detachEvent("onclick", a), document.attachEvent("onclick", a), this.Div.attachEvent("onmouseover", n), this.Div.attachEvent("onmouseout", d)) : (this.Div.removeEventListener("mouseover", n, !1), this.Div.addEventListener("mouseover", n, !1), this.Div.removeEventListener("mouseout", d, !1), this.Div.addEventListener("mouseout", d, !1)), window.clearTimeout(r), null != this.AutoCloseSec && (r = window.setTimeout(a, 1e3 * this.AutoCloseSec)), this.Div.style.position = "absolute", null != t && (this.Div.style.left = t), null != s && (this.Div.style.top = s), this.Div.style.display = "", _ = !0)
	}, this.act = function(e, t, n) {
		_ ? this.close(e) : this.open(e, t, n)
	}
}
function DivPop(e, t) {
	function n() {
		var e = document.activeElement.name;
		"txtUserName" == e || "txtPasswd" == e || "txtValidCode" == e || "txtID" == e || "txtPW" == e || "txtCode" == e ? this._Focus = !0 : this._Focus = !1
	}
	function d() {
		if (n(), s) {
			if (this._Focus) return void(a = window.setTimeout(d, 1e3 * o.AutoCloseSec));
			window.clearTimeout(a), r ? window.detachEvent("onblur", d) : document.removeEventListener("click", d, !1), s = !1, o.Div.style.display = "none"
		}
	}
	var a, r = window.ActiveXObject ? !0 : !1,
		o = this,
		s = !1;
	this.Div = e, this.Div.style.display = "none", this.AutoCloseSec = t, this.isOpened = function() {
		return s
	}, this.close = function() {
		d()
	}, this.open = function(e, t) {
		s || (window.clearTimeout(a), null != this.AutoCloseSec && (a = window.setTimeout(d, 1e3 * this.AutoCloseSec)), this.Div.style.position = "absolute", this.Div.style.display = "block", s = !0)
	}, this.act = function(e, t) {
		s ? this.close() : this.open(e, t)
	}
}
function DivSelectLeague(e, t, n) {
	function d(e) {
		for (var t = F ? event.srcElement : e.target, n = 0; t != O && t != E && t.tagName != m;) {
			if (t = t.parentNode, null == t) return;
			if (n >= 50) return;
			n++
		}
		t == O ? (s = F ? event.clientX : e.clientX, _ = F ? event.clientY : e.clientY, i = parseInt(m.style.left), l = parseInt(m.style.top), p = !0) : t == E && o()
	}
	function a() {
		p = !1
	}
	function r(e) {
		p && (F ? (m.style.left = parseInt(i) + parseInt(event.clientX) - parseInt(s) + "px", m.style.top = parseInt(l) + parseInt(event.clientY) - parseInt(_) + "px") : (m.style.left = parseInt(i) + parseInt(e.clientX) - parseInt(s) + "px", m.style.top = parseInt(l) + parseInt(e.clientY) - parseInt(_) + "px"))
	}
	function o() {
		document.onmousemove = D, document.onmousedown = u, document.onmouseup = c, p = !1
	}
	var s, _, i, l, u, c, D, m = e,
		O = t,
		E = n,
		p = !1,
		F = document.all;
	!document.all && document.getElementById;
	m.style.position = "absolute", m.style.zIndex = 100, null != O && (O.style.cursor = "move"), this.close = function() {
		o()
	}, this.open = function(e, t) {
		document.onmousemove = r, document.onmousedown = d, document.onmouseup = a;
		var n, o;
		n = o = 0, document.documentElement && document.documentElement.scrollTop ? (n = document.documentElement.scrollTop, o = document.documentElement.scrollLeft) : document.body && (n = document.body.scrollTop, o = document.body.scrollLeft), m.style.top = e + "px", m.style.left = t + "px", D = document.onmousemove, u = document.onmousedown, c = document.onmouseup
	}
}
function getParent(e) {
	for (var t = e, n = 0; 4 > n; n++) {
		if (null != t.SiteMode) return t;
		t = t.parent
	}
	return null
}
function indexOf(e, t) {
	for (var n = 0; n < e.length; n++) if (e[n] == t) return n;
	return -1
}
function addCommas(e) {
	for (var t = new RegExp("(-?[0-9]+)([0-9]{3})"); t.test(e);) e = e.replace(t, "$1,$2");
	return e
}
function removeCommas(e) {
	var t = /,/g;
	return e.replace(t, "")
}
function trim(e) {
	var t = /^(\s*)$/;
	return t.test(e) && (e = e.replace(t, ""), 0 == e.length) ? e : (t = /^(\s*)([\W\w]*)(\b\s*$)/, t.test(e) && (e = e.replace(t, "$2")), e)
}
function validateOnKD(e, t) {
	var n = document.all ? t.keyCode : t.which;
	return 86 != n
}
function validateOnKP(e, t, n, d) {
	var a = document.all ? t.keyCode : t.which;
	return e.value.length > 0 && 0 == n && 48 == a ? !1 : 13 == a ? null != d ? (d(t), !1) : ("Bingo_BPstake" == e.id ? betSubmitBingo(t) : betSubmit(t), !1) : /^$/.test(removeCommas(e.value)) && /0/.test(String.fromCharCode(a)) ? !1 : /[^0-9]/.test(String.fromCharCode(a)) && 8 != a && 0 != a ? !1 : !0
}
function validateOnKPPhone(e, t, n) {
	var d = document.all ? t.keyCode : t.which,
		a = n;
	return (13 != d && 8 != d && 45 != d || "stakeField" != a && "scoreField" != a) && (13 != d && 8 != d && 46 != d && 45 != d && 39 != d && 37 != d || "oddsField" != a && "hdpField" != a) && /[^0-9]/.test(String.fromCharCode(d)) ? !1 : !0
}
function payOutOnKU(fld, e) {
	fld.value = addCommas(removeCommas(fld.value));
	var s = fld.value;
	s = removeCommas(s);
	for (var z = "0123456789", i = 0; i < s.length; i++) if (tmp = s.substr(i, 1), -1 == z.indexOf(tmp)) return /.*[\u4e00-\u9fa5]+.*$/.test(fld.value) && (fld.value = ""), !1;
	if (/^$/.test(removeCommas(fld.value)))"1" == fFrame.siteMode ? document.getElementById("payOut_P").innerHTML = "" : "HorseBPstake" == fld.id ? (document.getElementById("hrspPayoutValue").innerHTML = "", document.getElementById("hrspMaxPayoutValue").innerHTML = "") : "Bingo_BPstake" == fld.id ? document.getElementById("Bingo_payOut").innerHTML = "" : document.getElementById("payOut").innerHTML = "";
	else {
		var bodds, bettype, sitetype, oddstype, bingobettype, bingooddstype;
		if ("1" == fFrame.SiteMode) switch (bettype = document.getElementById("bettype_P").value, sitetype = document.getElementById("siteType_P").value, oddstype = document.getElementById("oddsType_P").value, bettype) {
		case "1":
		case "7":
		case "28":
			bodds = document.getElementById("bp_odds3").value;
			break;
		case "3":
		case "8":
			bodds = document.getElementById("bp_odds2").value;
			break;
		default:
			bodds = document.getElementById("bp_odds1").value
		} else if ("HorseBPstake" == fld.id) {
			if (parseInt(fFrame.LastSelectedSport, 10) >= 181 && parseInt(fFrame.LastSelectedSport, 10) <= 185) {
				var oddsStr = document.getElementById("hrspOdds").innerHTML.replace("/", "+"),
					oddsValue = eval(oddsStr);
				document.getElementById("hrspPayoutValue").innerHTML = payOutCalculate(oddsValue, removeCommas(fld.value), !1), document.getElementById("hrspMaxPayoutValue").innerHTML = payOutCalculate(oddsValue, removeCommas(fld.value) / 2, !1)
			}
		} else "Bingo_BPstake" == fld.id ? (bettype = "", sitetype = "", oddstype = "", bingobettype = document.getElementById("Bingo_bettype").value, bingooddstype = document.getElementById("Bingo_oddsType").value) : (bettype = document.getElementById("bettype").value, sitetype = document.getElementById("siteType").value, oddstype = document.getElementById("oddsType").value, bingobettype = "", bingooddstype = "");
		var pairArray = ["1", "2", "3", "7", "8", "12", "20", "21", "153", "154", "155", "156", "1318", "1324", "18", "17", "184", "194", "197", "198", "203", "204", "205", "501", "401", "402", "403", "404"];
		if (-1 != indexOf(pairArray, bettype) && "1" != oddstype)"5" == oddstype ? document.getElementById("payOut").innerHTML = payOutCalculate(parseInt(removeCommas(document.getElementById("bodds").innerHTML), 10) / 100, removeCommas(fld.value), !0) : "1" == fFrame.SiteMode ? document.getElementById("payOut_P").innerHTML = payOutCalculate(removeCommas(bodds), removeCommas(fld.value), !0) : document.getElementById("payOut").innerHTML = payOutCalculate(removeCommas(document.getElementById("bodds").innerHTML), removeCommas(fld.value), !0);
		else {
			var bingoArray = ["81", "82", "83", "84", "85", "86", "87", "88", "89", "90"];
			if (-1 != indexOf(bingoArray, bingobettype)) 1 != bingooddstype ? "5" == bingooddstype && "89" != bingobettype && "5" == bingooddstype && "90" != bingobettype ? document.getElementById("Bingo_payOut").innerHTML = payOutCalculate(parseInt(removeCommas(document.getElementById("Bingo_bodds").innerHTML), 10) / 100, removeCommas(fld.value), !0) : document.getElementById("Bingo_payOut").innerHTML = payOutCalculate(removeCommas(document.getElementById("Bingo_bodds").innerHTML), removeCommas(fld.value), "89" != bingobettype && "90" != bingobettype) : document.getElementById("Bingo_payOut").innerHTML = payOutCalculate(removeCommas(document.getElementById("Bingo_bodds").innerHTML), removeCommas(fld.value), !1);
			else {
				var bettype = document.getElementById("bettype").value;
				"1" == fFrame.SiteMode ? document.getElementById("payOut_P").innerHTML = payOutCalculate(removeCommas(bodds), removeCommas(fld.value), !1) : document.getElementById("payOut").innerHTML = payOutCalculate(removeCommas(document.getElementById("bodds").innerHTML), removeCommas(fld.value), !1)
			}
		}
	}
}
function betSubmit(e) {
	var t = !1;
	if ("click" == e) t = !0;
	else {
		var n = document.all ? e.keyCode : e.which;
		13 == n && (t = !0)
	}
	return t ? null != fFrame ? "1" == fFrame.SiteMode ? formvalidationP("fomConfirmBetPhone") : formvalidation("fomConfirmBet") : void 0 : !0
}
function betSubmitMP(e) {
	var t = !1;
	if ("click" == e) t = !0;
	else {
		var n = document.all ? e.keyCode : e.which;
		13 == n && (t = !0)
	}
	return t ? MPformvalidation("betform") : !0
}
function betSubmitBingo(e) {
	var t = !1;
	if ("click" == e) t = !0;
	else {
		var n = document.all ? e.keyCode : e.which;
		13 == n && (t = !0)
	}
	return t ? Bingoformvalidation("fomBingoConfirmBet") : !0
}
function OpenNumberGameresresult(e) {
	switch (e) {
	case "NaN":
	case "":
		window.open("Result.aspx?sportType=161&mode=league&selectpop=1", "popupwindow", "width=810,height=600,scrollbars,resizable");
		break;
	default:
		window.open("Result.aspx?sportType=161&mode=league&selectpop=1&league=" + e, "popupwindow", "width=810,height=600,scrollbars,resizable")
	}
}
function payOutOnKUOT(e, t) {
	e.value = addCommas(removeCommas(e.value)), /^$/.test(removeCommas(e.value)) ? "1" == fFrame.SiteMode ? document.getElementById("payOut_P").innerHTML = "" : document.getElementById("payOut").innerHTML = "" : "1" == fFrame.SiteMode ? document.getElementById("payOut_P").innerHTML = payOutCalculate(removeCommas(document.getElementById("odds").value), removeCommas(e.value), !1) : document.getElementById("payOut").innerHTML = payOutCalculate(removeCommas(document.getElementById("bodds").innerHTML), removeCommas(e.value), !1)
}
function payOutOnKUPhone(e, t) {
	e.value = addCommas(removeCommas(e.value)), /^$/.test(removeCommas(e.value)) ? document.getElementById("payOut").innerHTML = "" : 1 != document.getElementById("bettype").value && 2 != document.getElementById("bettype").value && 3 != document.getElementById("bettype").value && 7 != document.getElementById("bettype").value && 8 != document.getElementById("bettype").value && 20 != document.getElementById("bettype").value || "DECIMAL" == document.getElementById("siteType").value || "DECIADD" == document.getElementById("siteType").value ? document.getElementById("payOut").innerHTML = payOutCalculate(removeCommas(document.getElementById("odds").innerHTML), removeCommas(e.value), !1) : document.getElementById("payOut").innerHTML = payOutCalculate(removeCommas(document.getElementById("odds").innerHTML), removeCommas(e.value), !0)
}
function payOutCalculate(e, t, n) {
	var d = "";
	return d = addCommas(n ? (t * (1 + Math.abs(e))).toFixed(2) : (t * Math.abs(e)).toFixed(2))
}
function checkValue(e, t, n) {
	for (var d = "0123456789", a = "", r = 0; r < e.value.length && "." != e.value.charAt(r); r++)"," != e.value.charAt(r) && -1 != d.indexOf(e.value.charAt(r)) && (a += e.value.charAt(r));
	var o = addCommas(a);
	if (e.value = o, null != t && "" != t && null != n && "" != n) {
		var s, _ = document.getElementById(t),
			i = document.getElementById(n);
		if (s = "INPUT" == _.tagName ? _.value : _.innerHTML, isNaN(s) || isNaN(a))"INPUT" == i.tagName ? i.value = "" : i.innerHTML = "";
		else {
			var l = parseFloat(s) * parseFloat(a),
				u = String(l.toFixed(2)),
				c = u.split("."),
				D = addCommas(c[0]) + "." + c[1];
			isNaN(l) ? "INPUT" == i.tagName ? i.value = "" : i.innerHTML = "" : "INPUT" == i.tagName ? i.value = D : i.innerHTML = D
		}
	}
}
function checkKeyPress(e, t, n) {
	var d = document.all ? t.keyCode : t.which;
	if (e.value.length > 0 && 0 == n && 48 == d) return !1;
	if (9 == d || 0 == d) return !0;
	var a = "0123456789",
		r = document.all ? t.keyCode : t.which;
	return 13 == r || 8 == r ? betSubmitMP(t) : (key = parseInt(String.fromCharCode(r), 10), -1 == a.indexOf(key) ? !1 : 0 == e.value.length && "0" == key ? !1 : !0)
}
function emailCheck(e) {
	var t = /^(.+)@(.+)$/,
		n = '\\(\\)<>@,;:\\\\\\"\\.\\[\\]',
		d = "[^\\s" + n + "]",
		a = '("[^"]*")',
		r = /^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/,
		o = d + "+",
		s = "(" + o + "|" + a + ")",
		_ = new RegExp("^" + s + "(\\." + s + ")*$"),
		i = new RegExp("^" + o + "(\\." + o + ")*$"),
		l = e.match(t);
	if (null == l) return !1;
	var u = l[1],
		c = l[2];
	if (null == u.match(_)) return !1;
	var D = c.match(r);
	if (null != D) {
		for (var m = 1; 4 >= m; m++) if (D[m] > 255) return !1;
		return !0
	}
	var O = c.match(i);
	if (null == O) return !1;
	var E = new RegExp(o, "g"),
		p = c.match(E),
		F = p.length;
	if (p[p.length - 1].length < 2 || p[p.length - 1].length > 4) return !1;
	if (2 > F) {
		return !1
	}
	return !0
}
function gotoSportsBookPage() {
	null != parent.top.LastSelectedMenu && (parent.top.LastSelectedMenu = 0, parent.top.LastSelectedSport = -1), parent.leftFrame.location = "leftAllInOne.aspx", parent.mainFrame.location = "UnderOver.aspx?Market=t&DispVer=new"
}
function SunPlus_Marquee() {
	function e() {
		var n;
		n = t.DivElm.style, t.marquee_mouse && t.marquee_flag && (n.left = parseInt(n.left, 10) - t.scroll_speed, parseInt(n.left, 10) <= -t.DivElm.offsetWidth && (n.left = t.scrollerwidth)), window.setTimeout(e, 100)
	}
	var t = this;
	this.marquee_mouse = 1, this.scroll_speed = 1, this.marquee_flag = !0, this.scrollerwidth = 500, this.DivElm = null, this.Mymarquee_scroll = function() {
		e()
	}
}
function isNum(e) {
	for (numtype = "0123456789", i = 0; i < e.length; i++) if (numtype.indexOf(e.substring(i, i + 1)) < 0) return !1;
	return !0
}
function check_email(e) {
	var t = e.length;
	if (0 == t) return !1;
	for (var n = 0; t > n; n++) {
		var d = e.charAt(n);
		if (!(d >= "A" && "Z" >= d || d >= "a" && "z" >= d || d >= "0" && "9" >= d || "-" == d || "_" == d || "." == d || "@" == d)) return !1
	}
	if (-1 == e.indexOf("@") || 0 == e.indexOf("@") || e.indexOf("@") == t - 1) return !1;
	if (-1 != e.indexOf("@") && -1 != e.substring(e.indexOf("@") + 1, t).indexOf("@")) return !1;
	if (-1 == e.indexOf(".") || 0 == e.indexOf(".") || e.lastIndexOf(".") == t - 1) return !1;
	var a, r;
	t = e.length, a = e.substring(e.indexOf("@") + 1, t);
	for (var o = a.indexOf("."); o > 0;) {
		if (r = a.substring(0, a.indexOf(".")), t = r.length, 2 > t) return !1;
		t = a.length, a = a.substring(a.indexOf(".") + 1, t), o = a.indexOf(".")
	}
	return t = a.length, 2 > t ? !1 : isNum(a) ? !1 : e.indexOf("@.") >= 0 ? !1 : !0
}
function replaceSubstring(e, t, n) {
	var d = e;
	if ("" == t) return e;
	if (-1 == n.indexOf(t)) for (; - 1 != d.indexOf(t);) {
		var a = d.substring(0, d.indexOf(t)),
			r = d.substring(d.indexOf(t) + t.length, d.length);
		d = a + n + r
	} else {
		for (var o = new Array("~", "`", "_", "^", "#"), s = 1, _ = "";
		"" == _;) for (var i = 0; i < o.length; i++) {
			for (var l = "", u = 0; s > u; u++) l += o[i]; - 1 == t.indexOf(l) && (_ = l, i = o.length + 1)
		}
		for (; - 1 != d.indexOf(t);) {
			var a = d.substring(0, d.indexOf(t)),
				r = d.substring(d.indexOf(t) + t.length, d.length);
			d = a + _ + r
		}
		for (; - 1 != d.indexOf(_);) {
			var a = d.substring(0, d.indexOf(_)),
				r = d.substring(d.indexOf(_) + _.length, d.length);
			d = a + n + r
		}
	}
	return d
}
function currencyFormat(e, t, n, d) {
	var a = "",
		r = j = 0,
		o = len2 = 0,
		s = "0123456789",
		_ = aux2 = "",
		i = document.all ? d.keyCode : d.which;
	if (8 == i && (e.value = ""), 13 == i) return !0;
	if (a = parseInt(String.fromCharCode(i), 10), -1 == s.indexOf(a)) return !1;
	for (o = e.value.length, r = 0; o > r && ("0" == e.value.charAt(r) || e.value.charAt(r) == n); r++);
	for (_ = ""; o > r; r++) - 1 != s.indexOf(e.value.charAt(r)) && (_ += e.value.charAt(r));
	if (_ += a, o = _.length, 0 == o && (e.value = ""), o > 0) {
		for (aux2 = "", j = 0, r = o - 1; r >= 0; r--) 3 == j && (aux2 += t, j = 0), aux2 += _.charAt(r), j++;
		for (e.value = "", len2 = aux2.length, r = len2 - 0; r >= 0; r--) e.value += aux2.charAt(r);
		e.value += _.substr(o, o)
	}
	return !1
}
function countPayOut() {
	var e = trim(removeCommas(document.getElementById("OTStake").value)),
		t = trim(removeCommas(document.getElementById("ot_spOddsValue").innerHTML));
	0 != e.length && 0 != t.length ? document.getElementById("OTpayOut").innerHTML = addCommas((e * t).toFixed(2)) : document.getElementById("OTpayOut").innerHTML = ""
}
function onKeyDownFunc(e, t) {
	var n = document.all ? t.keyCode : t.which;
	if (9 == n) {
		var d = document.getElementById(e);
		null != d && (d.focus(), d.select())
	}
}
function WordToHex(e) {
	var t, n, d = "",
		a = "";
	for (n = 0; 3 >= n; n++) t = e >>> 8 * n & 255, a = "0" + t.toString(16), d += a.substr(a.length - 2, 2);
	return d
}
function userBrowser() {
	var e = navigator.userAgent.toLowerCase();
	return /msie/i.test(e) && !/opera/.test(e) ? "IE" : /firefox/i.test(e) ? "Firefox" : /chrome/i.test(e) && /webkit/i.test(e) && /mozilla/i.test(e) ? "Chrome" : /opera/i.test(e) ? "Opera" : !/webkit/i.test(e) || /chrome/i.test(e) && /webkit/i.test(e) && /mozilla/i.test(e) ? "unKnow" : "Safari"
}
function SwitchDispHidden(e) {
	var e = document.getElementById(e);
	"none" == e.style.display ? e.style.display = "" : e.style.display = "none"
}
function SetHideDisStyleOptionList(e) {
	var t = 3;
	null == OptionListObj_DisStyle && (OptionListObj_DisStyle = new DivOption(document.getElementById("disstyle"), t)), OptionListObj_DisStyle.act(e, null, null)
}
function SetHideOddsTypeOptionList(e) {
	var t = 3;
	null == OptionListObj_OddsType && (OptionListObj_OddsType = new DivOption(document.getElementById("selOddsType"), t)), OptionListObj_OddsType.act(e, null, null)
}
function SetHideSecurityQOptionList(e) {
	var t = 3;
	null == OptionListObj_OddsType && (OptionListObj_OddsType = new DivOption(document.getElementById("selSecurityQ"), t)), OptionListObj_OddsType.act(e, null, null)
}
function SetHideOptionList(e) {
	var t = 3;
	null == OptionListObj_Other && (OptionListObj_Other = new DivOption(document.getElementById("selSecurityQ"), t)), OptionListObj_Other.act(e, null, null)
}
function SetHideLoginWindow(e) {
	var t = 3;
	null == LoginObj && (LoginObj = new DivPop(document.getElementById("loginact"), t)), LoginObj.act(e, null, null)
}
function SetHideBetWindow(e) {
	null != document.getElementById("BankingAct") && (document.getElementById("BankingAct").style.display = "none");
	var t = 3;
	null == BettingObj && (BettingObj = new DivPop(document.getElementById("BettingAct"), t)), BettingObj.act(e, null, null)
}
function SetHideBankingWindow(e) {
	null != document.getElementById("BettingAct") && (document.getElementById("BettingAct").style.display = "none");
	var t = 3;
	null == BankingObj && (BankingObj = new DivPop(document.getElementById("BankingAct"), t)), BankingObj.act(e, null, null)
}
function ShowPopWindow(e, t) {
	1 == t ? document.getElementById(e).style.display = "block" : document.getElementById(e).style.display = "none"
}
function openBingoRuleInfo() {
	(null == fFrame.RuleInfo || fFrame.RuleInfo.closed) && (fFrame.RuleInfo = fFrame.window.open("index_info.aspx?page=11", "RuleInfo"))
}
function switchAsia_Europe(e, t, n) {
	("4280" == fFrame.SiteId || "4200800" == fFrame.SiteId || "4200200" == fFrame.SiteId) && (1 == e && (fFrame.location.href="../index_18.html"), 2 == e && (fFrame.location.href="../index_18.html"))
}
function popScoreMap(e, t, n, d) {
	if (ScoreMapInfoUrl = "TickScoreMapPop.aspx?MatchId=" + e, t) {
		if (!maprefresh) return !1;
		if (strRefresh = n, strWaiting = d, null != window.opener && !window.opener.closed) return disableStyle() ? void setTimeout("RefreshScoreMap('" + ScoreMapInfoUrl + "')", 1e3) : !1;
		ClosedWin()
	} else {
		if (TimetoWait) return !1;
		TimetoWait = !0, setTimeout(function() {
			TimetoWait && (TimetoWait = !1)
		}, 5e3), wx = 610, wy = 660, x = (screen.width - wx) / 2, y = x = (screen.height - wx) / 2, (null == ScoreInfoPopWindow || ScoreInfoPopWindow.closed || preMatchId != e) && (ScoreInfoPopWindow = window.open(ScoreMapInfoUrl, "subInfo", "left=" + x + ",top=" + y + ",width=" + wx + ",height=" + wy), preMatchId = e), null != ScoreInfoPopWindow && ScoreInfoPopWindow.focus()
	}
}
function RefreshScoreMap(e) {
	maprefresh = !1, window.top.location.href = e
}
function ClosedWin() {
	window.open("", "_self", ""), window.opener = null, window.close()
}
function enableStyle() {
	for (var e = document.getElementById("sp_r1"), t = document.getElementById("sp_r2"), n = document.getElementById("sp_r3"), d = [e, t, n], a = d.length - 1; a >= 0; a--) d[a].style.color = "#4B5D8F", d[a].style.cursor = "pointer", "" != SiteId && "4200800" == SiteId ? d[a].innerHTML = "<span><span>" + strRefresh + "</span></span>" : d[a].innerHTML = "<span>" + strRefresh + "</span>", d[a].disabled = !1
}
function disableStyle() {
	var e = document.getElementById("sp_r1"),
		t = document.getElementById("sp_r2"),
		n = document.getElementById("sp_r3");
	if (e.disabled || t.disabled || n.disabled) return !1;
	for (var d = [e, t, n], a = d.length - 1; a >= 0; a--) {
		var r = d[a].cloneNode(!0);
		"" != SiteId && "4202000" == SiteId ? (r.style.color = "#000000", r.style.backgroundColor = "#CCCCCC") : r.style.color = "#ababab", r.style.cursor = "", "" != SiteId && "4200800" == SiteId ? r.innerHTML = "<span><span>" + strWaiting + "</span></span>" : r.innerHTML = "<span>" + strWaiting + "</span>", r.disabled = !0, d[a].className = d[a].className + " disabled", d[a].innerHTML = r.innerHTML
	}
	return !0
}
function NumberGroupTitle(e) {
	var t = e.innerHTML.split(" ");
	if (!(t.length <= 1)) {
		var n = t[t.length - 1].split("-");
		if (2 == t.length) {
			var d = parseInt(n[1], 10),
				a = "";
			switch (n[0]) {
			case "1":
				for (var r = 5 * d - 4; 5 * d >= r; r++) a = a + "," + r;
				break;
			case "2":
				for (var r = 15 * d - 14; 15 * d >= r; r++) a = a + "," + r;
				break;
			case "3":
				for (var r = 25 * d - 24; 25 * d >= r; r++) a = a + "," + r;
				break;
			case "4":
				for (var r = 0; 14 >= r; r++) {
					var o = 5 * r + d;
					a = a + "," + o
				}
			}
			e.title = a.substr(1)
		}
	}
}
function onOver(e) {
	$(".submenu li").removeClass("selected"), $(e).addClass("selected")
}
function onOut(e) {
	$(e).removeClass("selected")
}
function setSelecter(e, t, n, d) {
	null == d && (d = !1);
	var a = $("#" + e + "_Txt");
	if (d ? a.find("div")[0].className = $(t).find("span")[0].className : a.html($(t).html()), a.attr("title", $(t).attr("title")), $("#" + e).attr("value", n), "aSorter" == e) {
		var r, o = "D";
		null != document.DataForm_L ? (r = document.DataForm_L, o = "L") : (r = document.DataForm, o = "D"), n != r.OrderBy.value ? setRefreshSort() : "L" != o ? refreshData() : refreshAll()
	}
}
function getSelecterValue(e) {
	return $("#" + e).attr("value")
}
function onClickSelecter(e) {
	if (!(document.getElementById(e + "_Div").className.indexOf("disable") > -1)) {
		var t = document.getElementById(e + "_menu"),
			n = function(d) {
				d = d || window.event;
				var a = d.srcElement || d.target;
				a.id != e + "_Div" && a.id != e + "_Txt" && a.id != e + "_menu" && a.id != e + "_Icon" && (null != t && (t.style.visibility = "hidden"), $(document).unbind("click", n))
			};
		null != t && ($(document).unbind("click", n), "visible" == t.style.visibility ? t.style.visibility = "hidden" : (t.style.visibility = "visible", $(document).bind("click", n)))
	}
}
function setSelecterDisable(e, t) {
	var n = document.getElementById(e + "_Div"),
		d = $("#" + e + "_Txt").find("div").length > 0,
		a = d ? "dropDown icon" : "dropDown";
	null != n && (1 == t ? n.className = a + " disabled" : n.className = a)
}
function isFlashSupported() {
	if (window.ActiveXObject) try {
		if (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) return !0
	} catch (e) {}
	return navigator.plugins["Shockwave Flash"] ? !0 : !1
}
function checkFlashSupport(e) {
	return null == e && (e = isFlashSupported()), e
}
function switchNoSupportFlashTxt(e, t) {
	setTimeout(function() {
		$("#" + e) && (checkFlashSupport(fFrame.FlashSupport) ? ($("#" + e).hide(), null != t && $("#" + t).show()) : ($("#" + e).show(), null != t && $("#" + t).hide()))
	}, 1)
}
function getStringFormatPlaceHolderRegEx(e) {
	return new RegExp("({)?\\{" + e + "\\}(?!})", "gm")
}
function cleanStringFormatResult(e) {
	return null == e ? "" : e.replace(getStringFormatPlaceHolderRegEx("\\d+"), "")
}
function GetKenoURL(e, t, n, d, a, r) {
	var o = "",
		s = "",
		_ = "";
	"undefined" != typeof t && (o = "&date=" + t), "undefined" != typeof n && (_ = "&detail=" + n.toUpperCase()), s = "action=" + e + "&siteID=" + d + "&lang=" + a + o + _ + "&offSetTime=" + r;
	var i = location.href,
		l = i.split("/"),
		u = "http://" + l[2] + "/AuthorizationCustomer.ashx?cust=keno&" + s;
	return "AuthorizationCustomer.ashx?cust=keno&" + s + "&redirectURL=" + encodeURIComponent(u)
}
function OpenKenoWindow() {
	fFrame.CanBetKeno ? OpenKeno("M") : alert(fFrame.KenoMsg)
}
function OpenKeno(e, t, n) {
	var d = "",
		a = "",
		r = "",
		o = "";
	"undefined" != typeof t && null != t && (d = "&date=" + t), "undefined" != typeof n && null != n && (r = "&detail=" + n.toUpperCase()), o = "zhcn" == fFrame.UserLang ? "cs" : fFrame.UserLang, a = "action=" + e + "&siteID=" + fFrame.VendorSiteID + "&lang=" + o + d + r + "&offSetTime=" + fFrame.OffsetTime;
	var s = location.href,
		_ = s.split("/"),
		i = "http://" + _[2] + "/AuthorizationCustomer.ashx?cust=keno&" + a;
	if ("M" != e) {
		var l = function(e, t) {
				t || (e.location = "AuthorizationCustomer.ashx?cust=keno&" + a + "&redirectURL=" + encodeURIComponent(i))
			};
		fFrame.openWindowsHandle("keno" + e, fFrame.CanSeeKeno, fFrame.KenoFlashMsg, "AuthorizationCustomer.ashx?cust=keno&" + a + "&redirectURL=" + encodeURIComponent(i), "fullscreen=1,scrollbars=yes,resizable=yes", !1, l)
	} else fFrame.openWindowsHandle("keno" + e, fFrame.CanSeeKeno, fFrame.KenoFlashMsg, "AuthorizationCustomer.ashx?cust=keno&" + a + "&redirectURL=" + encodeURIComponent(i), "fullscreen=1,scrollbars=yes,resizable=yes")
}
function onKeyPressSelecter(e, t) {
	var n = $("#" + e + "_menu > .selected"),
		d = String.fromCharCode(t.charCode).toUpperCase();
	if ($(".submenu li").removeClass("selected"), 13 == t.keyCode) return void n.click();
	if (38 == t.keyCode && (0 == n.prev().length ? $("#" + e + "_Div .submenu li").siblings().last().addClass("selected") : (n.prev().addClass("selected"), CheckScrollMove(300, 22, n.prev().position().top) && $("#" + e + "_menu").scrollTop($("#" + e + "_menu").scrollTop() + n.prev().position().top))), 40 == t.keyCode && (0 == n.next().length ? $("#" + e + "_Div .submenu li").siblings().first().addClass("selected") : (n.next().addClass("selected"), CheckScrollMove(300, 22, n.next().position().top) && $("#" + e + "_menu").scrollTop($("#" + e + "_menu").scrollTop() + n.next().position().top))), 0 == n.length) $("#" + e + "_Div .submenu li").each(function() {
		return d == $(this).text().substring(0, 1) ? (SetScrollAndSelected(e, $(this)), !1) : void 0
	});
	else {
		var a = !0,
			r = !0;
		if (n.nextAll().each(function() {
			return d == $(this).text().substring(0, 1) ? (SetScrollAndSelected(e, $(this)), a = !1, r = !1, !1) : void 0
		}), a) {
			if (d == n.prevAll().last().text().substring(0, 1)) return SetScrollAndSelected(e, n.prevAll().last()), !1;
			n.prevAll().last().nextUntil($(this)).each(function() {
				return d == $(this).text().substring(0, 1) ? (SetScrollAndSelected(e, $(this)), r = !1, !1) : void 0
			})
		}
		r && d == n.text().substring(0, 1) && SetScrollAndSelected(e, n)
	}
}
function SportControl(e) {
	var t = document.getElementById("SportArea_" + e); - 1 != t.className.indexOf(Sport_Area_CLOSE) ? t.className = t.className.replace(Sport_Area_CLOSE, "").replace(/(^\s*)|(\s*$)/g, "") : t.className = t.className.replace(Sport_Area_OPEN, Sport_Area_OPEN + " " + Sport_Area_CLOSE).replace(/(^\s*)|(\s*$)/g, "")
}
function CheckIsIpad() {
	return EnableIPadStyle && (navigator.userAgent.match(/Android 4./i) || -1 != navigator.userAgent.toLowerCase().indexOf("android") || -1 != navigator.userAgent.toLowerCase().indexOf("mobile") || navigator.userAgent.match(/iPad/i)) ? !0 : !1
}
function showBetTradeTip() {
	var e = fFrame.leftFrame.document.getElementById("bettradeTips");
	null != e && (e.style.display = "", clearTimeout(btguideTimer), btguideTimer = setTimeout(function() {
		e.style.display = "none"
	}, 5e3))
}
function openBetTradeGuide() {
	window.open("betTrade_guide.aspx", "", "width=700,height=600,location=0,scrollbars=yes,resizable=no")
}
function switchAsiaSiteType() {
	fFrame.location.href = "/onebook?WebSkinType=2"
}
function ComboDataDisplay(e) {
	var t = "#Detail_" + e;
	$(t).hasClass("comboParlay expand") ? $(t).removeClass("comboParlay expand").addClass("comboParlay") : $(t).removeClass("comboParlay").addClass("comboParlay expand")
}
function ChkOpener() {
	null == window.opener && (window.open("", "_self", ""), window.opener = null, window.close())
}
function CloseWindow() {
	window.opener = null, window.close()
}
function getParent(e) {
	for (var t = e, n = 0; 4 > n; n++) {
		if (null != t.SiteMode) return t;
		if (null == t.parent) return null;
		t = t.parent
	}
	return null
}
function StandalonePlayer() {
	window.moveTo(0, 0);
	var e = GetIBC_IsLogin();
	if (!e && "4200800" != SiteID || !e && "4200800" == SiteID && "161" != ScheduleType) return alert(err_mainWindowClosed), null != fFrame && fFrame.IsCssControl ? window.FrameValidation.location.href = ImgServURL + TVImagePath : window.FrameValidation.location.href = ImgServURL + SkinPath + "images/tv_image.jpg", window.opener = null, window.open("", "_self"), void window.close();
	var t = document.getElementById("mintxtdiv"),
		n = document.getElementById("maxtxtdiv");
	if (t.disabled = !0, n.disabled = !0, "block" == document.getElementById("containerhead").style.display) {
		bStandalonePlayer = !0, document.getElementById("containerhead").style.display = "none", document.getElementById("containerhead").style.visibility = "hidden", document.getElementById("containerleft").style.display = "none", document.getElementById("containerleft").style.visibility = "hidden";
		var d = document.getElementById("footer");
		"undefined" != typeof d && null != d && (document.getElementById("footer").style.display = "none", document.getElementById("footer").style.visibility = "hidden"), document.getElementById("minimgdiv").style.display = "none", document.getElementById("minimgdiv").style.visibility = "hidden", document.getElementById("maximgdiv").style.display = "block", document.getElementById("maximgdiv").style.visibility = "visible", document.getElementById("mintxtdiv").style.display = "none", document.getElementById("mintxtdiv").style.visibility = "hidden", document.getElementById("maxtxtdiv").style.display = "block", document.getElementById("maxtxtdiv").style.visibility = "visible", document.getElementById("blueArea").style.display = "none"
	} else {
		bStandalonePlayer = !1, document.getElementById("containerhead").style.display = "block", document.getElementById("containerhead").style.visibility = "visible", document.getElementById("containerleft").style.display = "", document.getElementById("containerleft").style.visibility = "visible";
		var d = document.getElementById("footer");
		"undefined" != typeof d && null != d && (document.getElementById("footer").style.display = "block", document.getElementById("footer").style.visibility = "visible"), document.getElementById("minimgdiv").style.display = "block", document.getElementById("minimgdiv").style.visibility = "visible", document.getElementById("maximgdiv").style.display = "none", document.getElementById("maximgdiv").style.visibility = "hidden", document.getElementById("mintxtdiv").style.display = "block", document.getElementById("mintxtdiv").style.visibility = "visible", document.getElementById("maxtxtdiv").style.display = "none", document.getElementById("maxtxtdiv").style.visibility = "hidden", document.getElementById("blueArea").style.display = "block", void 0 != ScheduleType && ("151" == ScheduleType || "152" == ScheduleType || "153" == ScheduleType ? (document.getElementById("leftcont").src = "StreamingSchedule.aspx?Type=" + ScheduleType, window.leftcont.location.href = "StreamingSchedule.aspx?Type=" + ScheduleType) : "161" == ScheduleType ? (document.getElementById("leftcont").src = "StreamingSchedule.aspx?Type=161", window.leftcont.location.href = "StreamingSchedule.aspx?Type=161") : (document.getElementById("leftcont").src = "StreamingSchedule.aspx?Type=1", window.leftcont.location.href = "StreamingSchedule.aspx?Type=1"))
	}
	"" != mainplayer_Width && "" != mainplayer_Height && "" != singleplayer_Width && "" != singleplayer_Height ? ResizeByXY(bStandalonePlayer, singleplayer_Width, singleplayer_Height, mainplayer_Width, mainplayer_Height) : Resize(bStandalonePlayer), t.disabled = !1, n.disabled = !1
}
function Resize(e) {
	try {
		var t = GetIBC_IsLogin();
		if (!isReSizeLoading && t) {
			var n = getParent(window.opener);
			ImgServURL = n.imgServerURL
		}!t && "4200800" != SiteID || !t && "4200800" == SiteID && "161" != ScheduleType ? null != n && n.IsCssControl ? window.FrameValidation.location.href = ImgServURL + TVImagePath : window.FrameValidation.location.href = ImgServURL + SkinPath + "images/tv_image.jpg" : document.DataForm.submit(), AdjustSize(e), document.getElementById("containerMain").style.width = "100%", document.getElementById("containerMain").style.height = "100%", isReSizeLoading = !0
	} catch (d) {}
}
function AdjustSize(e) {
	if ("5" == document.getElementById("HorseChannelID").value) if ($("body").removeClass("maxWin"), $("body").removeClass("miniWin"), 1 == e) {
		$("body").addClass("double miniWin");
		try {
			window.resizeTo(1070, 590), window.outerWidth = 1085, window.outerHeight = 590
		} catch (t) {
			setTimeout("ResizeIE(1070,590,1085,590)", 1e3)
		}
	} else {
		$("body").addClass("double");
		try {
			window.resizeTo(1340, 710), window.outerWidth = 1355, window.outerHeight = 710
		} catch (t) {
			setTimeout("ResizeIE(1345,710,1355,710)", 1e3)
		}
	} else if ("3" == document.getElementById("StreamingSrc").value && "5" != document.getElementById("HorseChannelID").value) if ($("body").removeClass("maxWin"), $("body").removeClass("miniWin"), $("body").removeClass("double"), document.getElementById("FrameValidation").width = 484, 1 == e) {
		$("body").addClass("miniWin");
		try {
			window.resizeTo(550, 590), window.outerWidth = 565, window.outerHeight = 590
		} catch (t) {
			setTimeout("ResizeIE(550,590,565,590)", 1e3)
		}
	} else try {
		window.resizeTo(820, 700), window.outerWidth = 825, window.outerHeight = 700
	} catch (t) {
		setTimeout("ResizeIE(820,700,825,700)", 1e3)
	} else if ($("body").removeClass("double"), $("body").removeClass("double miniWin"), $("body").removeClass("maxWin"), $("body").removeClass("maxWin miniWin"), "8" == document.getElementById("StreamingSrc").value && 484 != document.getElementById("FrameValidation").width) if (1 == e) {
		$("body").addClass("maxWin miniWin");
		try {
			window.resizeTo(750, 590), window.outerWidth = 765, window.outerHeight = 590
		} catch (t) {
			setTimeout("ResizeIE(750,590,765,590)", 1e3)
		}
	} else {
		$("body").addClass("maxWin");
		try {
			window.resizeTo(1005, 700), window.outerWidth = 1010, window.outerHeight = 700
		} catch (t) {
			setTimeout("ResizeIE(1005,700,1010,700)", 1e3)
		}
	} else if ("9" == document.getElementById("StreamingSrc").value && 484 != document.getElementById("FrameValidation").width) if (1 == e) {
		$("body").addClass("wbWin miniWin");
		try {
			window.resizeTo(665, 650), window.outerWidth = 675, window.outerHeight = 650
		} catch (t) {
			setTimeout("ResizeIE(665,650,675,650)", 1e3)
		}
	} else {
		$("body").addClass("wbWin");
		try {
			window.resizeTo(930, 740), window.outerWidth = 945, window.outerHeight = 740
		} catch (t) {
			setTimeout("ResizeIE(930,740,945,740)", 1e3)
		}
	} else if (1 == e) {
		$("body").addClass("miniWin");
		var n = 500,
			d = 505;
		"true" == document.getElementById("bingoMode").value && "5" == document.getElementById("StreamingSrc").value && (n = 1030, d = 1045);
		try {
			window.resizeTo(n, 590), window.outerWidth = d, window.outerHeight = 590
		} catch (t) {
			setTimeout("ResizeIE(550,590,565,590)", 1e3)
		}
	} else {
		var a = 820,
			r = 825;
		"true" == document.getElementById("bingoMode").value && "5" == document.getElementById("StreamingSrc").value && ($("body").addClass("double"), a = 1340, r = 1355);
		try {
			window.resizeTo(a, 700), window.outerWidth = r, window.outerHeight = 700
		} catch (t) {
			setTimeout("ResizeIE(" + a + ",700," + r + ",700)", 1e3)
		}
	}
}
function ResizeByXY(e, t, n, d, a) {
	try {
		var r = GetIBC_IsLogin();
		if (!isReSizeLoading && r) {
			var o = getParent(window.opener);
			ImgServURL = o.imgServerURL
		}!r && "4200800" != SiteID || !r && "4200800" == SiteID && "161" != ScheduleType ? null != o && o.IsCssControl ? window.FrameValidation.location.href = ImgServURL + TVImagePath : window.FrameValidation.location.href = ImgServURL + SkinPath + "images/tv_image.jpg" : document.DataForm.submit(), singleplayer_Width = t, singleplayer_Height = n, mainplayer_Width = d, mainplayer_Height = a, 1 == e ? (window.resizeTo(t, n), window.outerWidth = t, window.outerHeight = n) : (window.resizeTo(d, a), window.outerWidth = d, window.outerHeight = a), document.getElementById("containerMain").style.width = "100%", document.getElementById("containerMain").style.height = "100%", isReSizeLoading = !0
	} catch (s) {}
}
function ResizeIE(e, t, n, d) {
	try {
		window.resizeTo(e, t), window.outerWidth = n, window.outerHeight = d
	} catch (a) {}
}
function Resize1(e) {
	(0 == e && "block" != document.getElementById("containerhead").style.display || 1 == e && "block" == document.getElementById("containerhead").style.display) && StandalonePlayer()
}
function SetTitle(e, t) {
	document.getElementById("GreyhoundsContainer").style.display = "none", document.getElementById("SportsContainer").style.display = "block", document.getElementById("left_title").innerHTML = t, document.getElementById("Button1").style.display = "0" == e ? "" : "none"
}
function Refresh_List() {
	var e = GetIBC_IsLogin();
	StreamingStatusIsLogin != e ? CloseWindow() : "151" == ScheduleType || "152" == ScheduleType || "153" == ScheduleType ? window.leftcont.location.href = "StreamingSchedule.aspx?Type=" + ScheduleType : "161" == ScheduleType ? window.leftcont.location.href = "StreamingSchedule.aspx?Type=161" : window.leftcont.location.href = "StreamingSchedule.aspx?Type=1", StreamingStatusIsLogin = e
}
function AutoRefreshLoginCheckin() {
	var e = GetIBC_IsLogin();
	if (StreamingStatusIsLogin != e && "4200800" != SiteID || StreamingStatusIsLogin != e && "4200800" == SiteID && "161" != ScheduleType) e || (alert(err_mainWindowClosed), null != fFrame && fFrame.IsCssControl ? window.FrameValidation.location.href = ImgServURL + TVImagePath : window.FrameValidation.location.href = ImgServURL + SkinPath + "images/tv_image.jpg", window.opener = null, window.open("", "_self"), window.close());
	else {
		var t = document.getElementById("containerleft");
		if (null != t && "block" == t.style.display) {
			var n = document.getElementById("leftcont");
			null != n && document.getElementById("leftcont").contentWindow.location.reload(!0)
		}
	}
	StreamingStatusIsLogin = e
}
function GetIBC_IsLogin() {
	try {
		return mainWindowIsClosed() ? !1 : window.opener.IsLogin || window.opener.IsUserStreaming
	} catch (e) {
		return !1
	}
}
function mainWindowIsClosed() {
	return null == window.opener || window.opener.closed
}
function swapHorseStreaming(e, t, n) {
	"2" != CurrentHorseChannelID && "3" != CurrentHorseChannelID ? isHorseStreaming && CurrentHorseChannelID != e && SetLoadVideoLocation("9999", "3", e, t, n) : !isHorseStreaming || CurrentLeagueID == t && CurrentRaceNumber == n || SetLoadVideoLocation("9999", "3", e, t, n)
}
function hTVbuttonTimmerCheck() {
	return 0 == hTVbuttonPush ? (hTVbuttonPush = !0, setTimeout(function() {
		1 == hTVbuttonPush && (hTVbuttonPush = !1)
	}, 5e3), !0) : !1
}
function OpenHorseStreaming() {
	if (CloseTVBox(), hTVbuttonTimmerCheck()) {
		var e = document.getElementById("HorseChannelID");
		null != e && openRacingStreaming("151")
	}
}
function hTV_euroButtonTimmerCheck() {
	return 0 == hTV_euroButtonPush ? (hTV_euroButtonPush = !0, setTimeout(function() {
		1 == hTV_euroButtonPush && (hTV_euroButtonPush = !1)
	}, 5e3), !0) : !1
}
function EuroOpenGreyhoundsStreaming() {
	if (CloseTVBox(), GreyTV_ButtonTimmerCheck()) {
		var e = document.getElementById("HorseChannelID");
		null != e && ("5" == e.value ? EuroOpenRacingStreaming("152") : null == fFrame.StreamingFrame || fFrame.StreamingFrame.closed ? (fFrame.StreamingFrame = fFrame.window.open("../StreamingFrame.aspx", "StreamingFrame", "top=20,left=20,height=680,width=810,status=no,toolbar=no,menubar=no,resizable=yes,location=no,scrollbars=no"), setTimeout("fFrame.StreamingFrame.ShowGreyhoundsContainer()", 1e3), setTimeout("EuroSwitchGreyhoundsStreaming()", 1500)) : EuroSwitchGreyhoundsStreaming())
	}
}
function EuroOpenHorseStreaming() {
	if (CloseTVBox(), hTVbuttonTimmerCheck()) {
		var e = document.getElementById("HorseChannelID"),
			t = document.getElementById("RacingLeagueID"),
			n = document.getElementById("RacingRaceNumber");
		if (null != e) {
			var d = "3";
			null == window.top.StreamingFrame || window.top.StreamingFrame.closed ? window.top.StreamingFrame = window.open("../StreamingFrame.aspx?Matchid=9999&StreamingSrc=" + d + "&HorseChannelID=" + e.value + "&RacingLeagueID=" + t.value + "&RacingRaceNumber=" + n.value, "StreamingFrame", "top=200,left=300,height=485,width=525,status=no,toolbar=no,menubar=no,resizable=yes,location=no") : (window.top.StreamingFrame.isHorseStreaming = !0, window.top.StreamingFrame.swapHorseStreaming(e, t, n)), window.top.StreamingFrame.focus()
		}
	}
}
function EuroOpenHarnessStreaming() {
	if (CloseTVBox(), hTVbuttonTimmerCheck()) {
		var e = document.getElementById("HorseChannelID");
		if (null != e) {
			var t = e.value,
				n = "3";
			null == fFrame.StreamingFrame || fFrame.StreamingFrame.closed ? fFrame.StreamingFrame = window.open("../StreamingFrame.aspx?Matchid=9999&StreamingSrc=" + n + "&HorseChannelID=" + t + "&RacingType=153", "StreamingFrame", GetEuroStreamingParameter(t)) : (fFrame.StreamingFrame.isHorseStreaming = !0, fFrame.StreamingFrame.swapHorseStreaming(t)), fFrame.StreamingFrame.focus()
		}
	}
}
function GetEuroStreamingParameter(e) {
	var t = 525,
		n = GetEuroStreamingDefaultHeigth(e);
	if ("5" == e) switch (SiteId) {
	case "4200400":
		t = 1055, n = 580;
		break;
	case "4201400":
		t = 1075, n = 580;
		break;
	case "4201400":
		t = 1065, n = 580
	}
	return "top=20,left=20,height=" + n + ",width=" + t + ",status=no,toolbar=no,menubar=no,resizable=yes,location=no,scrollbars=no"
}
function GetEuroStreamingDefaultHeigth(e) {
	return "153" == e ? 485 : 520
}
function ChagneHorseStream(e, t, n) {
	var d = fFrame.LastSelectedSport;
	$("#HorseChannelID").val(e), $("#RacingLeagueID").val(t), $("#RacingRaceNumber").val(n), null == getStreamingFrameHandle() || getStreamingFrameHandle().closed || ("6" == e ? getStreamingFrameHandle().CurrentHorseChannelID != e && (switchGreyhoundsStreaming(), getStreamingFrameHandle().CurrentHorseChannelID = e) : (getStreamingFrameHandle().isHorseStreaming = !0, getStreamingFrameHandle().ScheduleType = d, getStreamingFrameHandle().swapHorseStreaming(e, t, n), getStreamingFrameHandle().ShowHorseRacingSchule(parseInt(d, 10))))
}
function ChagneBingoStream() {
	null == getStreamingFrameHandle() || getStreamingFrameHandle().closed || (getStreamingFrameHandle().isHorseStreaming = !1, getStreamingFrameHandle().ScheduleType = "161", getStreamingFrameHandle().swapBingoStreaming(), getStreamingFrameHandle().ShowNumberGameSchule())
}
function EuroChagneHorseStream(e, t, n) {
	var d = document.getElementById("HorseChannelID"),
		a = fFrame.LastSelectedSport;
	return null == d ? void setTimeout("EuroChagneHorseStream('" + e + "','" + t + "','" + n + "')", 100) : (d.value = e, $("#RacingLeagueID").val(t), $("#RacingRaceNumber").val(n), void(null == StreamingFrame || StreamingFrame.closed || (StreamingFrame.swapHorseStreaming(e, t, n), StreamingFrame.ShowHorseRacingSchule(a))))
}
function swapBingoStreaming() {
	SetLoadVideoLocation("9999", "5", "0", "0", "0")
}
function SetLoadVideoLocation(e, t, n, d, a) {
	if (n = n || "0", d = d || "0", a = a || "0", ("3" == t && "5" != n || "1" == t || "4" == t || "9" == t) && (document.getElementById("FrameValidation").width = 484), "5" == t && ("true" == document.getElementById("bingoMode").value ? document.getElementById("FrameValidation").width = 978 : document.getElementById("FrameValidation").width = 484), "2" != n && "3" != n) {
		if (isPlaySuccess && document.getElementById("Matchid").value == e && document.getElementById("StreamingSrc").value == t && document.getElementById("HorseChannelID").value == n) return
	} else if (document.getElementById("StreamingSrc").value == t && document.getElementById("HorseChannelID").value == n && document.getElementById("RacingLeagueID").value == d && document.getElementById("RacingRaceNumber").value == a) return;
	bStandalonePlayer = "none" != document.getElementById("containerhead").style.display ? !1 : !0, "" != e && GetIBC_IsLogin() || "" != e && !GetIBC_IsLogin() && "4200800" == SiteID && "161" == ScheduleType ? null != document.getElementById("Matchid") && null != document.getElementById("StreamingSrc") && null != document.getElementById("HorseChannelID") && (document.getElementById("Matchid").value = e, document.getElementById("StreamingSrc").value = t, document.getElementById("HorseChannelID").value = n, document.getElementById("RacingLeagueID").value = d, document.getElementById("RacingRaceNumber").value = a, document.DataForm.submit(), AdjustSize(bStandalonePlayer)) : (null != fFrame && fFrame.IsCssControl ? window.FrameValidation.location.href = ImgServURL + TVImagePath : window.FrameValidation.location.href = ImgServURL + SkinPath + "images/tv_image.jpg", AdjustSize(bStandalonePlayer))
}
function getStreamingHtml(e, t, n) {
	return fFrame.CanSeeSportStreaming ? 0 == t ? "" : 1 == fFrame.SiteMode ? "" : n && fFrame.IsUserStreaming ? "<div class='icon displayOn'><span class='tv' onclick=openSingleStreaming(" + e + ",0)></span></div>" : "4200800" == fFrame.SiteId ? "<div class='icon displayOn'><span class='tv off' ></span></div>" : "4200100" == fFrame.SiteId ? "<div class='icon displayOn'><span class='tv off' ></span></div>" : fFrame.IsUserStreaming ? "<div class='icon displayOn'><span class='tv off' ></span></div>" : void 0 : ""
}
function OpenStreamingMenu(e) {
	"" == document.getElementById("tv" + e).innerHTML && (document.getElementById("tv" + e).innerHTML = getStreamingMenuHtml(e)), document.getElementById("tv" + e).style.display = "block"
}
function CloseStreamingMenu(e) {
	var t = document.getElementById("cm-nav");
	if (null != t) {
		var n = document.getElementById("tv" + e);
		null != n && (n.style.display = "none")
	}
}
function getStreamingMenuHtml(e) {
	var t = document.getElementById("cm-nav");
	if (null != t) {
		var n = t.innerHTML;
		return n = n.replace(/#L/, "javascript:openSingleStreaming(" + e + ",0);"), n = n.replace(/#S/, "javascript:openSingleStreaming(" + e + ",1);")
	}
	return ""
}
function getBingoStreamingHtml() {
	return "4200800" == fFrame.SiteId ? "<a id='bTV' href='javascript:openBingoStreaming();'><img border='0' src='" + fFrame.imgServerURL + fFrame.SkinRootPath + "public/images/layout/tv_L.gif' hspace='1' /></a>" : (fFrame.IsCssControl, "<div class='icon displayOn'><span class='tv' onclick=openBingoStreaming()></span></div>")
}
function ReflashSingleStreaming() {
	if (null != fFrame.leftFrame) {
		var e = fFrame.leftFrame.document.getElementById("iTV"),
			t = e.src;
		e.src = "", e.src = t
	}
}
function SwitchSingleStreaming() {
	if (null != fFrame.leftFrame) {
		var e = fFrame.leftFrame.document.getElementById("iTV"),
			t = e.src;
		t = t.substr(t.indexOf("StreamingLV.aspx")), t = t.replace("StreamingLV.aspx?Matchid=", ""), t = t.replace("&TVmode=small", ""), CloseTVBox(), openSingleStreaming(t, 0)
	}
}
function SingleTV_ButtonTimmerCheck() {
	return 0 == SingleTV_ButtonPush ? (SingleTV_ButtonPush = !0, setTimeout(function() {
		1 == SingleTV_ButtonPush && (SingleTV_ButtonPush = !1)
	}, 5e3), !0) : !1
}
function openSingleStreaming(e, t) {
	openSingleStreamingMain(e, t)
}
function openSingleStreamingMain(e, t) {
	if (SingleTV_ButtonTimmerCheck()) switch (CloseStreamingMenu(e), t) {
	case 0:
		CloseTVBox();
		var n = function(t, n) {
				if (null != t && !n) try {
					t.SetLoadVideoLocation(e, "1", "0", "0", "0")
				} catch (d) {}
			};
		fFrame.openWindowsHandle("StreamingFrame", !0, "", "StreamingFrame.aspx?Matchid=" + e, "top=20,left=20,height=520,width=525,status=no,toolbar=no,menubar=no,resizable=yes,location=no,scrollbars=yes", !1, n);
		break;
	case 1:
		var d = fFrame.getOpenWindowsHandle("StreamingFrame");
		if (null == d || d.closed || d.CloseWindow(), CloseTVBox(), "show_left" == fFrame.topFrame.document.getElementById("showhideleft").className && (fFrame.topFrame.SwitchShowHidLeft(), fFrame.topFrame.SwitchLefthideshow()), null != fFrame.leftFrame) {
			var a = fFrame.leftFrame.document.getElementById("iTV");
			a.src = "StreamingLV.aspx?Matchid=" + e + "&TVmode=small"
		}
		break;
	case 2:
	}
}
function BingoTV_ButtonTimmerCheck() {
	return 0 == BingoTV_ButtonPush ? (BingoTV_ButtonPush = !0, setTimeout(function() {
		1 == BingoTV_ButtonPush && (BingoTV_ButtonPush = !1)
	}, 5e3), !0) : !1
}
function openBingoStreaming() {
	CloseTVBox(), BingoTV_ButtonTimmerCheck() && openBingoStreamingMain()
}
function openBingoStreamingMain() {
	if (CanOpenStreaming()) {
		CloseTVBox();
		var e = function(e, t) {
				null != e && (e.isHorseStreaming = !1, e.ScheduleType = "161", t || (e.ShowNumberGameSchule(), e.swapBingoStreaming()))
			};
		fFrame.openWindowsHandle("StreamingFrame", !0, "", "StreamingFrame.aspx?Matchid=9999&StreamingSrc=5", "top=20,left=20,height=520,width=1030,status=no,toolbar=no,menubar=no,resizable=yes,location=no,scrollbars=no", !1, e)
	}
}
function CloseTVBox() {
	if (null != fFrame && null != fFrame.leftFrame) {
		var e = fFrame.leftFrame.document.getElementById("iTV");
		null != e && (e.src = "");
		var t = fFrame.leftFrame.document.getElementById("TVBox");
		null != t && (t.style.display = "none");
		var n = fFrame.leftFrame.document.getElementById("div_Casino");
		null != n && (n.style.display = "")
	}
}
function hTVHead_ButtonTimmerCheck() {
	return 0 == hTVHead_ButtonPush ? (hTVHead_ButtonPush = !0, setTimeout(function() {
		1 == hTVHead_ButtonPush && (hTVHead_ButtonPush = !1)
	}, 5e3), !0) : !1
}
function openStreaming(e) {
	CloseTVBox(), hTVHead_ButtonTimmerCheck() && openStreamingMain()
}
function openStreamingMain() {
	CloseTVBox();
	var e = topFrame.document.getElementById("iTV");
	if (null != e) {
		e.disabled = !0, e.href = "JavaScript:void(0);";
		var t = function(t, n) {
				null == t || n || (null != t.document.getElementById("containerhead") && "none" == t.document.getElementById("containerhead").style.display && t.StandalonePlayer(), "Chrome" == userBrowser() ? t.blur() : t.focus()), e.href = "JavaScript:fFrame.openStreamingMain();", e.disabled = !1
			}
	}
	fFrame.openWindowsHandle("StreamingFrame", !0, "", "StreamingFrame.aspx", "top=20,left=20,height=612,width=818,status=no,toolbar=no,menubar=no,resizable=yes,location=no,scrollbars=no", !1, t)
}
function CloseHorseInfoPopWindow() {
	try {
		null != HorseInfoPopWindow && HorseInfoPopWindow.open && (HorseInfoPopWindow.close(), HorseInfoPopWindow = null), (null != getStreamingFrameHandle() || getStreamingFrameHandle().open) && (getStreamingFrameHandle().close(), fFrame.windowsHandle.StreamingFrame = null)
	} catch (e) {}
}
function hTVBingo_ButtonTimmerCheck() {
	return 0 == hTVBingo_ButtonPush ? (hTVBingo_ButtonPush = !0, setTimeout(function() {
		1 == hTVBingo_ButtonPush && (hTVBingo_ButtonPush = !1)
	}, 5e3), !0) : !1
}
function OpenNumberGameStreaming() {
	CloseTVBox(), hTVBingo_ButtonTimmerCheck() && openBingoStreamingMain()
}
function GreyTV_ButtonTimmerCheck() {
	return 0 == GreyTV_ButtonPush ? (GreyTV_ButtonPush = !0, setTimeout(function() {
		1 == GreyTV_ButtonPush && (GreyTV_ButtonPush = !1)
	}, 5e3), !0) : !1
}
function OpenGreyhoundsStreaming() {
	if (CloseTVBox(), GreyTV_ButtonTimmerCheck()) {
		fFrame = getParent(window);
		var e = document.getElementById("HorseChannelID");
		if (null != e) if ("5" == e.value) openRacingStreaming("152");
		else if (CanOpenStreaming()) {
			var t = function(e, t) {
					null != e && (t ? (setTimeout("getStreamingFrameHandle().ShowGreyhoundsContainer();", 1e3), setTimeout("switchGreyhoundsStreaming();", 1500)) : switchGreyhoundsStreaming())
				};
			fFrame.openWindowsHandle("StreamingFrame", !0, "", "StreamingFrame.aspx", "top=20,left=20,height=680,width=825,status=no,toolbar=no,menubar=no,resizable=yes,location=no,scrollbars=yes", !1, t)
		}
	}
}
function EuroOpenRacingStreaming(e) {
	var t = "3",
		n = document.getElementById("HorseChannelID"),
		d = n.value;
	null == fFrame.StreamingFrame || fFrame.StreamingFrame.closed ? (fFrame.StreamingFrame = fFrame.window.open("../StreamingFrame.aspx?Matchid=9999&StreamingSrc=" + t + "&RacingType=" + e + "&HorseChannelID=" + d, "StreamingFrame", GetEuroStreamingParameter(d)), fFrame.StreamingFrame.isHorseStreaming = !0, fFrame.StreamingFrame.ScheduleType = e) : (fFrame.StreamingFrame.isHorseStreaming = !0, fFrame.StreamingFrame.ScheduleType = e, fFrame.StreamingFrame.swapHorseStreaming(d))
}
function HarnTV_ButtonTimmerCheck() {
	return 0 == HarnTV_ButtonPush ? (HarnTV_ButtonPush = !0, setTimeout(function() {
		1 == HarnTV_ButtonPush && (HarnTV_ButtonPush = !1)
	}, 5e3), !0) : !1
}
function OpenHarnessStreaming() {
	CloseTVBox(), HarnTV_ButtonTimmerCheck() && openRacingStreaming("153")
}
function CanOpenStreaming() {
	return OpenStreamingFlag ? !1 : (OpenStreamingFlag = !0, "undefined" != typeof setOpenStreamingTimer && clearTimeout(setOpenStreamingTimer), setOpenStreamingTimer = setTimeout("ReSetStreamingFlag()", 3e3), !0)
}
function ReSetStreamingFlag() {
	OpenStreamingFlag = !1
}
function openRacingStreaming(e) {
	if (CanOpenStreaming()) {
		var t = document.getElementById("HorseChannelID").value,
			n = document.getElementById("RacingLeagueID").value,
			d = document.getElementById("RacingRaceNumber").value;
		fFrame = getParent(window), fFrame.openRacingStreamingMain(e, t, n, d)
	}
}
function openRacingStreamingMain(e, t, n, d) {
	var a = "3",
		r = function(a, r) {
			null != a && (a.isHorseStreaming = !0, a.ScheduleType = e, r || (a.ShowHorseRacingSchule(e), a.swapHorseStreaming(t, n, d)))
		};
	null == fFrame && (fFrame = getParent(window)), fFrame.openWindowsHandle("StreamingFrame", !0, "", "StreamingFrame.aspx?Matchid=9999&StreamingSrc=" + a + "&RacingType=" + e + "&HorseChannelID=" + t + "&RacingLeagueID=" + n + "&RacingRaceNumber=" + d, "top=20,left=20,height=520,width=525,status=no,toolbar=no,menubar=no,resizable=yes,location=no,scrollbars=yes", !1, r)
}
function EuroSwitchGreyhoundsStreaming() {
	bStandalonePlayer = !1, fFrame.StreamingFrame.document.getElementById("containerhead").style.display = "block", fFrame.StreamingFrame.document.getElementById("containerhead").style.visibility = "visible", fFrame.StreamingFrame.document.getElementById("containerleft").style.display = "", fFrame.StreamingFrame.document.getElementById("containerleft").style.visibility = "visible", fFrame.StreamingFrame.document.getElementById("footer").style.display = "block", fFrame.StreamingFrame.document.getElementById("footer").style.visibility = "visible", null != fFrame.StreamingFrame.document.getElementById("minimgdiv") && (fFrame.StreamingFrame.document.getElementById("minimgdiv").style.display = "block", fFrame.StreamingFrame.document.getElementById("minimgdiv").style.visibility = "visible", fFrame.StreamingFrame.document.getElementById("mintxtdiv").style.display = "block", fFrame.StreamingFrame.document.getElementById("mintxtdiv").style.visibility = "visible"), null != fFrame.StreamingFrame.document.getElementById("maximgdiv") && (fFrame.StreamingFrame.document.getElementById("maximgdiv").style.display = "none", fFrame.StreamingFrame.document.getElementById("maximgdiv").style.visibility = "hidden", fFrame.StreamingFrame.document.getElementById("maxtxtdiv").style.display = "none", fFrame.StreamingFrame.document.getElementById("maxtxtdiv").style.visibility = "hidden"), fFrame.StreamingFrame.window.resizeTo(820, 760), fFrame.StreamingFrame.window.outerWidth = 820, fFrame.StreamingFrame.window.outerHeight = 760, fFrame.StreamingFrame.document.getElementById("containerMain").style.width = "100%", fFrame.StreamingFrame.document.getElementById("containerMain").style.height = "100%", fFrame.StreamingFrame.isHorseStreaming = !1, fFrame.StreamingFrame.ShowGreyhoundsContainer();
	var e = "",
		t = document.getElementById("Stadium"),
		n = "";
	null != t && (e = t.value), n = fFrame.StreamingFrame.document.getElementById("fgreyhounds").src, fFrame.StreamingFrame.document.getElementById("fgreyhounds").src = n + "&stadium=" + e
}
function switchGreyhoundsStreaming() {
	bStandalonePlayer = !1, getStreamingFrameHandle().document.getElementById("containerhead").style.display = "block", getStreamingFrameHandle().document.getElementById("containerhead").style.visibility = "visible", getStreamingFrameHandle().document.getElementById("containerleft").style.display = "", getStreamingFrameHandle().document.getElementById("containerleft").style.visibility = "visible";
	var e = getStreamingFrameHandle().document.getElementById("footer");
	null != e && (e.style.display = "block", e.style.visibility = "visible"), null != getStreamingFrameHandle().document.getElementById("minimgdiv") && (getStreamingFrameHandle().document.getElementById("minimgdiv").style.display = "block", getStreamingFrameHandle().document.getElementById("minimgdiv").style.visibility = "visible", getStreamingFrameHandle().document.getElementById("mintxtdiv").style.display = "block", getStreamingFrameHandle().document.getElementById("mintxtdiv").style.visibility = "visible"), null != getStreamingFrameHandle().document.getElementById("maxtxtdiv") && (getStreamingFrameHandle().document.getElementById("maximgdiv").style.display = "none", getStreamingFrameHandle().document.getElementById("maximgdiv").style.visibility = "hidden", getStreamingFrameHandle().document.getElementById("maxtxtdiv").style.display = "none", getStreamingFrameHandle().document.getElementById("maxtxtdiv").style.visibility = "hidden"), getStreamingFrameHandle().window.resizeTo(820, 760), getStreamingFrameHandle().window.outerWidth = 820, getStreamingFrameHandle().window.outerHeight = 760, getStreamingFrameHandle().document.getElementById("containerMain").style.width = "100%", getStreamingFrameHandle().document.getElementById("containerMain").style.height = "100%", getStreamingFrameHandle().isHorseStreaming = !1, getStreamingFrameHandle().CurrentHorseChannelID = "6", getStreamingFrameHandle().ShowGreyhoundsContainer()
}
function serviceOpenStreaming() {
	null == fFrame.StreamingFrame || fFrame.StreamingFrame.closed ? fFrame.StreamingFrame = fFrame.window.open("../StreamingFrame.aspx", "StreamingFrame", "top=200,left=300,height=630,width=800,status=no,toolbar=no,menubar=no,resizable=yes,location=no") : 630 == fFrame.StreamingFrame.height ? (fFrame.StreamingFrame.Resize(!1), fFrame.StreamingFrame.focus()) : (fFrame.StreamingFrame.close(), fFrame.StreamingFrame = fFrame.window.open("../StreamingFrame.aspx", "StreamingFrame", "top=200,left=300,height=630,width=800,status=no,toolbar=no,menubar=no,resizable=yes,location=no"))
}
function openGreyhoundUKStreamingBySchedule() {
	fFrame = getParent(window), null == fFrame.StreamingFrame || fFrame.StreamingFrame.closed ? (fFrame.StreamingFrame = fFrame.window.open("StreamingFrame.aspx", "StreamingFrame", "top=20,left=20,height=680,width=810,status=no,toolbar=no,menubar=no,resizable=yes,location=no,scrollbars=no"), setTimeout("fFrame.StreamingFrame.ShowGreyhoundsContainer()", 1e3), setTimeout("switchGreyhoundsStreaming()", 1500)) : switchGreyhoundsStreaming(), fFrame.StreamingFrame.focus()
}
function getStreamingFrameHandle() {
	return fFrame.IsLogin ? fFrame.getOpenWindowsHandle("StreamingFrame") : null
}
function setHeaddata(e) {
	var t = document.getElementById("head");
	t.innerHTML = e
}
function Getheadinfo() {
	var e = document.getElementById("frmhead");
	e.submit()
}
function ProcessHeadinfo(e, t, n, d, a, r) {
	var o = document.getElementById("frmhead");
	if (o.submit(), ReloadBetListMini(), GetBetslip(), IsLogin = e, UserName = t, IsUserStreaming = n, CanBetOutright = d, CanBetHorse = a, CanBetHorseOpenTote = r, "true" == e) {
		var s = fFrame.document.getElementById("Banner_FB");
		s.style.display = ""
	}
}
function MM_goToURL() {
	var i, args = MM_goToURL.arguments;
	for (document.MM_returnValue = !1, i = 0; i < args.length - 1; i += 2) eval(args[i] + ".location='" + args[i + 1] + "'")
}
function MM_openBrWindow(e, t, n) {
	window.open(e, t, n)
}
function MM_jumpMenu(targ, selObj, restore) {
	eval(targ + ".location='" + selObj.options[selObj.selectedIndex].value + "'"), restore && (selObj.selectedIndex = 0)
}
function clock() {
	sec++, 60 == sec && (sec = 0, min++), 60 == min && (min = 0, hrs++), 24 == hrs && (hrs = 0, sec = 0, min = 0, day++), min < 10 ? strmin = "0" + min : strmin = min, sec < 10 ? strsec = "0" + sec : strsec = sec, isDate(year, month, day) || (month++, day = 1), isDate(year, month, day) || (year++, month = 1, day = 1), hrs >= 12 ? stra = patraPM : stra = patraAM, hrs >= 12 ? strhrs = hrs - 12 : strhrs = hrs;
	var e = strhrs + ":" + strmin + ":" + strsec + " " + stra + " " + strMonth[month - 1] + " " + day + ", " + year + " UK Time",
		t = document.getElementById("clock");
	null != t && (t.innerHTML = e)
}
function isDate(e, t, n) {
	var d = new Date(parseFloat(e) + "/" + t + "/" + n);
	if (d.getYear() < 200) var a = d.getYear() + 1900;
	else var a = d.getYear();
	return a != parseFloat(e) || d.getMonth() + 1 != parseFloat(t) || d.getDate() != parseFloat(n) ? !1 : !0
}
function MM_openNewWindow(e, t, n) {
	var d = window.open(e, t, n);
	d.focus()
}
function loadTopNews() {
	var e = document.getElementById("Hotnews");
	newpubmsg = FrameLoginCheckin.pubmsg.replace(/\"/g, "&quot;"), newprimsg = FrameLoginCheckin.primsg.replace(/\"/g, " &quot;"), "2" == fFrame.SiteMode && "7" == fFrame.Deposit_SiteMode ? null == oldpubmsg || null == oldprimsg ? (null == oldpubmsg && (oldpubmsg = newpubmsg), null == oldprimsg && (oldprimsg = newprimsg)) : (newprimsg.length > 2 && oldprimsg != newprimsg && (hasPriMsg = !0, oldprimsg = newprimsg, e.style.display = ""), newpubmsg.length > 2 && oldpubmsg != newpubmsg && (oldpubmsg = newpubmsg, e.style.display = "")) : e.innerHTML = FrameLoginCheckin.pubmsg
}
function Click2News() {
	var e = document.getElementById("Hotnews");
	e.style.display = "none"
}
function refreshTopNewsData() {
	var e = document.getElementById("frmTopNewsData");
	e.submit()
}
function LoginCheck(e, t) {
	var n, d, a, r, o, s, _ = document.getElementById("hidlbl_UName").value,
		i = document.getElementById("hidlbl_Validation").value;
	return "" == document.getElementById("txtUserName").value || document.getElementById("txtUserName").value == _ ? void SetMsgBox(Login_UNameEmpty) : "" == document.getElementById("txtPasswd").value || "......" == document.getElementById("txtPasswd").value ? void SetMsgBox(Login_UPwdEmpty) : "" == document.getElementById("txtValidCode").value || document.getElementById("txtValidCode").value == i ? void SetMsgBox(Login_VCodeEmpty) : (s = document.getElementById("txtPasswd"), a = CFS(s.value), d = CFS(s.value.toLowerCase()), s.value = a, n = document.getElementById("txtValidCode"), o = n.value, n = document.getElementById("hidLowerCasePW"), r = d + o, n.value = MD5(r), n = document.getElementById("hidKey"), r = a + o, n.value = MD5(r), void document.frmLogin.submit())
}
function DoLogout() {
	document.getElementById("hidSubmit").value = "Logout", document.frmlogout.submit()
}
function CheckValue() {
	alert("IsLogin =" + IsLogin), alert("UserName =" + UserName), alert("IsUserStreaming =" + IsUserStreaming), alert("CanBetOutright =" + CanBetOutright), alert("CanBetHorse =" + CanBetHorse), alert("CanBetHorseOpenTote =" + CanBetHorseOpenTote)
}
function newWindow(e, t, n, d, a) {
	var r = (screen.width - n) / 2,
		o = (screen.height - d) / 2;
	0 > r && (r = 0), 0 > o && (o = 0);
	var s = "height=" + d + ",";
	s += "width=" + n + ",", s += "top=" + o + ",", s += "left=" + r + ",", s += a, win = window.open(e, t, s), win.window.focus()
}
function popupInfo(e) {
	"7" == fFrame.Deposit_SiteMode && 1 == hasPriMsg ? (hasPriMsg = !1, newWindow("MyInfo.aspx?mainAction=" + e + "&pageQuery=private", "popupInfo", 900, 693, "scrollbars=yes,resizable=yes")) : newWindow("MyInfo.aspx?mainAction=" + e, "popupInfo", 900, 693, "scrollbars=yes,resizable=yes")
}
function popupHorseInfo(e, t) {
	newWindow("MyInfo.aspx?mainAction=HorseResult&textfield=" + e + "&hrleague=" + t, "popupHorseInfo", 900, 693, "scrollbars=yes,resizable=yes")
}
function popupGreyhoundsInfo(e, t) {
	newWindow("MyInfo.aspx?mainAction=GreyhoundsResult&textfield=" + e + "&hrleague=" + t, "popupHorseInfo", 900, 693, "scrollbars=yes,resizable=yes")
}
function popupHarnessInfo(e, t) {
	newWindow("MyInfo.aspx?mainAction=HarnessResult&textfield=" + e + "&hrleague=" + t, "popupHorseInfo", 900, 693, "scrollbars=yes,resizable=yes")
}
function AutoRefreshLoginCheckin() {
	document.LoginCheckinForm.username.value = "", document.LoginCheckinForm.username.value = UserName, document.LoginCheckinForm.submit()
}
function SetLoginCheck() {
	"7" == fFrame.Deposit_SiteMode && AutoRefreshLoginCheckin(), setInterval("AutoRefreshLoginCheckin()", 6e4)
}
function Synctime(e, t, n, d, a, r) {
	year = e, month = t, day = n, hrs = d, min = a, sec = r
}
function SetBTimerStart() {
	null != BTimerHandle && window.clearTimeout(BTimerHandle), BTimerHandle = window.setTimeout(CloseBalanceInfo, 2e3)
}
function SetBTimerStop() {
	window.clearTimeout(BTimerHandle)
}
function CloseBalanceInfo() {
	var e = document.getElementById("Balinfo");
	e.style.display = "none"
}
function setBalanceInfo(e, t) {
	var n = document.getElementById("BalTag"),
		d = document.getElementById("OutStandTag");
	n.innerHTML = e, d.innerHTML = t;
	var n = document.getElementById("Balinfo");
	n.style.display = ""
}
function SwitchBalanceInfo() {
	var e = document.getElementById("Balinfo");
	if ("none" == e.style.display) {
		var t = document.getElementById("BalanceForm");
		t.submit(), BTimerHandle = window.setTimeout(CloseBalanceInfo, 2e3)
	} else e.style.display = "none"
}
function SwitchDispHidden(e) {
	var e = document.getElementById(e);
	"none" == e.style.display ? e.style.display = "" : e.style.display = "none"
}
function euro_changeLan(e) {
	UserLang != e ? (UserLang = e, document.frmChangeLang.hidSelLang.value = e, document.frmChangeLang.hidIsLogin.value = IsLogin, document.frmChangeLang.submit()) : SwitchDispHidden(1 == IsLogin ? "LangOptAft" : "LangOptBef")
}
function go_asiaWeb(e) {
	top.window.location.href = e + "/index.aspx?lng=en&return=true"
}
function OpenCasinoPage(e, t) {
	var n = "toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=1000,height=679";
	CasinoWindow ? CasinoWindow.closed ? CasinoWindow = window.open(e, t, n) : CasinoWindow.focus() : CasinoWindow = window.open(e, t, n)
}
function SetMsgBox(e) {
	var t = document.getElementById("MsgCont");
	t.innerHTML = e, reloadValidatecode(), SwitchDispHidden("MsgBox")
}
function SetMsgHDBox(e, t) {
	var n = document.getElementById("MsgHDCont");
	n.innerHTML = e, IsNeedLogout = t, SwitchDispHidden("MsgHDBox")
}
function reloadValidatecode() {
	i++, document.getElementById("validateCode").src = "../login_code.aspx?" + i
}
function SwitchHead(e) {
	var t = document.getElementById("hd_SP"),
		n = document.getElementById("hd_RC");
	switch (e) {
	case "hd_SP":
		t.className = "current", n.className = "", StartRun();
		break;
	case "hd_RC":
		t.className = "", n.className = "current", SwitchSport("T", "151")
	}
}
function SetHomeADDisp(e) {
	var t = "";
	e || (t = "none"), document.getElementById("EventAD").style.display = t, document.getElementById("DivMainOdds").innerHTML = '<center><img src="' + SkinRootPath + 'public/images/layout/loading.gif?v=20100601" vspace="2"></center>'
}
function CheckLogout() {
	IsNeedLogout ? top.window.location.href = "../index.aspx" : SwitchDispHidden("MsgHDBox")
}
function OpenFBPage() {
	var e = "scrollbars=yes,resizable=yes,width=510,height=500";
	FeedBackWindow ? FeedBackWindow.closed ? FeedBackWindow = window.open("FeedBack.aspx", "FeedBackPage", e) : FeedBackWindow.focus() : FeedBackWindow = window.open("FeedBack.aspx", "FeedBackPage", e)
}
function SetHideLanListBef(e) {
	var t = 3;
	null == LanListObjBef && (LanListObjBef = new DivOption(document.getElementById("LangOptBef"), t)), LanListObjBef.act(e, null, null)
}
function SetHideLanListAft(e) {
	var t = 3;
	null == LanListObjAft && (LanListObjAft = new DivOption(document.getElementById("LangOptAft"), t)), LanListObjAft.act(e, null, null);
}
function SetHideDateList(e) {
	var t = 3;
	null == DateListObj && (DateListObj = new DivOption(document.getElementById("dlDateFilter"), t)), DateListObj.act(e, null, null)
}
function RedrictToSplash(e) {
	top.window.location.href = e
}
function setControlShow(e) {
	document.getElementById(e).style.display = ""
}
function setControlHide(e) {
	document.getElementById(e).style.display = "none"
}
function DisplayCasinoNotices() {
	"undefined" != typeof msg_CasinoLeaveNotice && "" != msg_CasinoLeaveNotice && alert(msg_CasinoLeaveNotice)
}
function GetKenoURL(e, t, n, d, a, r) {
	var o = "",
		s = "",
		_ = "",
		i = "",
		l = "",
		u = "";
	"undefined" != typeof t && (o = "&date=" + t), "undefined" != typeof n && "" != n && (_ = "&detail=" + n.toUpperCase()), "undefined" != typeof a && (l = "&lang=" + a), "undefined" != typeof d && (u = "&siteID=" + d), "undefined" != typeof r && (i = "&offSetTime=" + r), s = "action=" + e + u + l + _ + o + i;
	var c = location.href,
		D = c.split("/"),
		m = "http://" + D[2] + "/AuthorizationCustomer.ashx?cust=keno&" + s;
	return "../AuthorizationCustomer.ashx?cust=keno&" + s + "&redirectURL=" + encodeURIComponent(m)
}
function OpenKeno(e, t, n, d, a, r) {
	var o = "",
		s = "",
		_ = "",
		i = "",
		l = "",
		u = "";
	"undefined" != typeof t && (o = "&date=" + t), "undefined" != typeof n && (_ = "&detail=" + n.toUpperCase()), "undefined" != typeof a && (l = "&lang=" + a), "undefined" != typeof d && (u = "&siteID=" + d), "undefined" != typeof r && (i = "&offSetTime=" + r), s = "action=" + e + u + l + o + _ + i;
	var c = location.href,
		D = c.split("/"),
		m = "http://" + D[2] + "..//AuthorizationCustomer.ashx?cust=keno&" + s;
	if ("M" != e) {
		var O = function(e, t) {
				t || (e.location = "../AuthorizationCustomer.ashx?cust=keno&" + s + "&redirectURL=" + encodeURIComponent(m))
			};
		openWindowsHandle("keno" + e, CanSeeKeno, "{{KenoFlashMsg}}", "../AuthorizationCustomer.ashx?cust=keno&" + s + "&redirectURL=" + encodeURIComponent(m), "fullscreen=1,scrollbars=yes,resizable=yes", !1, O)
	} else openWindowsHandle("keno" + e, CanSeeKeno, "{{KenoFlashMsg}}", "../AuthorizationCustomer.ashx?cust=keno&" + s + "&redirectURL=" + encodeURIComponent(m), "fullscreen=1,scrollbars=yes,resizable=yes")
}
function setflag(e, t, n) {
	var d = "",
		a = "",
		r = "m88test.com";
	d = "ko" == window.top.UserLang ? "kr" : window.top.UserLang;
	var o = !1;
	switch (("m88asia.com" == r || "m88asia.com" == r) && (o = !0), e) {
	case "1":
		a = "https://member." + r + "/MyAccount/Cashier.aspx?page=transfer&external=yes";
		break;
	case "2":
		a = o ? "https://help." + r + "/rules_general_" + d + ".asp" : "http://help." + r + "/rules_general_" + d + ".asp";
		break;
	case "3":
		a = o ? "https://help." + r + "/FAQ_general_" + d + ".asp" : "http://help." + r + "/FAQ_general_" + d + ".asp";
		break;
	case "4":
		a = o ? "https://help." + r + "/contactUs_" + d + ".asp" : "http://help." + r + "/contactUs_" + d + ".asp"
	}
	popMember(a)
}
function setLink(e) {
	var t = "",
		n = "",
		d = "m88test.com";
	t = "ko" == window.top.UserLang ? "kr" : window.top.UserLang;
	var a = "";
	switch (window.top.UserLang) {
	case "cs":
		a = "zh-CN";
		break;
	case "th":
		a = "th-TH";
		break;
	case "vn":
		a = "vi-VN";
		break;
	case "ko":
		a = "ko-KR";
		break;
	case "jp":
		a = "ja-JP";
		break;
	default:
		a = "en-US"
	}
	var r = !1;
	switch (("m88asia.com" == d || "m88asia.com" == d) && (r = !0), e) {
	case "1":
		n = r ? "https://www." + d + "/Main/AboutM88.aspx?Lang=" + a : "http://www." + d + "/Main/AboutM88.aspx?Lang=" + a;
		break;
	case "2":
		n = r ? "https://help." + d + "/termOfUse_tc_" + t + ".asp" : "http://help." + d + "/termOfUse_tc_" + t + ".asp";
		break;
	case "3":
		n = r ? "https://help." + d + "/termOfUse_disclaimer_" + t + ".asp" : "http://help." + d + "/termOfUse_disclaimer_" + t + ".asp";
		break;
	case "4":
		n = r ? "https://help." + d + "/termOfUse_privacyPolicy_" + t + ".asp" : "http://help." + d + "/termOfUse_privacyPolicy_" + t + ".asp"
	}
	popMember(n)
}
function setLiveHelpLink() {
	var e = "";
	switch (window.top.UserLang) {
	case "th":
		e = "https://server.iad.liveperson.net/hc/44922114/?cmd=file&amp;file=visitorWantsToChat&amp;site=44922114&amp;SESSIONVAR!visitor_profile=Thai%20Language&amp;referrer=http%3A//www.m88test.com/Main/";
		break;
	case "jp":
		e = "https://server.iad.liveperson.net/hc/44922114/?cmd=file&amp;file=visitorWantsToChat&amp;site=44922114&amp;SESSIONVAR!visitor_profile=Japanese&amp;referrer=http%3A//www.m88test.com/Main/";
		break;
	case "cs":
		e = "https://server.iad.liveperson.net/hc/44922114/?cmd=file&amp;file=visitorWantsToChat&amp;site=44922114&amp;SESSIONVAR!visitor_profile=Chinese&amp;referrer=http%3A//www.m88test.com/Main/";
		break;
	case "ko":
		e = "https://server.iad.liveperson.net/hc/44922114/?cmd=file&amp;file=visitorWantsToChat&amp;site=44922114&amp;SESSIONVAR!visitor_profile=Korean&amp;referrer=http%3A//www.m88test.com/Main/";
		break;
	case "id":
		e = "https://server.iad.liveperson.net/hc/44922114/?cmd=file&amp;file=visitorWantsToChat&amp;site=44922114&amp;SESSIONVAR!visitor_profile=Bahasa%20Indonesia&amp;referrer=http%3A//www.m88test.com//Main/sportbook.aspx";
		break;
	case "vn":
		e = "https://server.iad.liveperson.net/hc/44922114/?cmd=file&amp;file=visitorWantsToChat&amp;site=44922114&amp;SESSIONVAR!visitor_profile=Vietnamese&amp;referrer=http%3A//www.m88test.com//Main/sportbook.asp";
		break;
	default:
		e = "https://server.iad.liveperson.net/hc/44922114/?cmd=file&amp;file=visitorWantsToChat&amp;site=44922114&amp;SESSIONVAR!visitor_profile=English&amp;referrer=http%3A//www.m88test.com//Main/sportbook.aspx"
	}
	window.open(e, "", "scrollbars=yes,width=800,height=593")
}
function popMember(e) {
	var t = 910,
		n = screen.availHeight,
		d = screen.availWidth - t,
		a = 0;
	return memberWin = window.open(e, "winMember", "width=" + t + ",height=" + n + ",left=" + d + ",top=" + a + ",scrollbars=yes"), memberWin.focus(), !1
}
function getParent(e) {
	for (var t = e, n = 0; 4 > n; n++) {
		if (null != t.SiteMode) return t;
		t = t.parent
	}
	return null
}
function RestCount() {
	TotalCount.T = 0, TotalCount.L = 0;
	for (var e = 1; SportCount >= e; e++) Key = e + "T", SportCount[Key] = 0, Key = e + "L", SportCount[Key] = 0;
	SportCount["99T"] = 0, SportCount["99L"] = 0, SportCount["151T"] = 0, SportCount["152T"] = 0, SportCount["153T"] = 0, SportCount["154T"] = 0, SportCount["201T"] = 0
}
function sleep(e) {
	var t = new Date,
		n = t.getTime();
	do t = new Date;
	while (t.getTime() - n < 1e3 * e)
}
function GetDefaultMarket(e) {
	var t = document.getElementById("L_Body"),
		n = document.getElementById("T_Body");
	return 0 == TotalCount.L ? (t.style.display = "none", "L" == e && (e = "T", SwitchSport("T", 1, "false"), LastSelectedSport = 1, LastSelectedMArket = "T", sleep(1), fFrame.setMenuTypeChangeOddsDisplay("t"))) : t.style.display = "", 0 == TotalCount.T ? n.style.display = "none" : n.style.display = "", e
}
function GetSport(e) {
	for (var t = "", n = 1; SportCount >= n; n++) if (t = n + e, SportCount[t] > 0) return n;
	return t = "99" + e, SportCount[t] > 0 ? "99" : "L" != e && (t = "151" + e, SportCount[t] > 0) ? "151" : 0
}
function GetDefaultSport(e) {
	var t = "",
		n = 0;
	return null == LastSelectedSport || -1 == LastSelectedSport || 0 == LastSelectedSport ? n = GetSport(e) : (t = LastSelectedSport + e, n = null == SportCount[t] || SportCount[t] <= 0 ? GetSport(e) : LastSelectedSport), n
}
function SwitchMarket(e, t) {
	"" != LastSelectedCountry && "" != PrevSportType && "0" != PrevSportType && "" != PrevMarketType && (LayerId = document.getElementById(PrevMarketType + "_" + PrevSportType + "_" + LastSelectedCountry + "_layer"), null != LayerId && (LayerId.style.display = "none"), PrevMarketType = "", PrevSportType = "0");
	var n = document.getElementById("L_Head"),
		d = document.getElementById("T_Head"),
		a = document.getElementById("L_Body"),
		r = document.getElementById("T_Body"),
		o = document.getElementById("PL_Count");
	switch (e) {
	case "T":
		d.className = "menu_R", n.className = "menu_gr", r.style.display = "", a.style.display = "none", o.className = "menu_liveR";
		break;
	case "L":
		d.className = "menu_gr current", "7" == fFrame.Deposit_SiteMode ? n.className = "menu_R current" : n.className = "menu_R", r.style.display = "none", a.style.display = "", o.className = "menu_livevg"
	}
	var s;
	"0" == LastSelectedSport ? s = GetDefaultSport(e) : e == LastSelectedMArket ? s = LastSelectedSport : (s = GetDefaultSport(e), LastSelectedCountry = ""), SwitchSport(e, s, t), LastSelectedSport = s, LastSelectedMArket = e, "L" != e && (null != document.getElementById("iTV") && (document.getElementById("iTV").src = ""), null != document.getElementById("match_streaming") && (document.getElementById("match_streaming").style.display = "none"))
}
function SwitchSport(e, t, n) {
	"" != LastSelectedCountry && "" != PrevSportType && "0" != PrevSportType && "" != PrevMarketType && (LayerId = document.getElementById(PrevMarketType + "_" + PrevSportType + "_" + LastSelectedCountry + "_layer"), null != LayerId && (LayerId.style.display = "none"), LastSelectedCountry = ""), CloseAllSports(e), 151 == t || 152 == t || 153 == t ? (document.getElementById("T_150_body").style.display = "", 151 == t && !CanSeeHorse && CanSeeGreyhounds ? t = 152 : 151 != t || CanSeeHorse || CanSeeGreyhounds || !CanSeeHarness || (t = 153)) : document.getElementById("T_150_body").style.display = "none", "180" == t || "181" == t || "186" == t ? document.getElementById("T_18X_body").style.display = "" : document.getElementById("T_18X_body").style.display = "none", e != LastSelectedMArket || t != LastSelectedSport ? CloseAllMoreCountry(e) : SwitchMoreCountry(e, t, !0);
	var d = document.getElementById(e + "_" + t + "_body");
	if (null != d && d.hasChildNodes() && (d.style.display = ""), 0 != n) {
		if (OddsParamater1 = t, "99" == t) OddsParamater2 = SportName99;
		else {
			var a = document.getElementById(e + "_" + t + "_Name");
			null != a && (OddsParamater2 = a.innerHTML)
		}
		var r = e.toLowerCase();
		"t" == r && (r = "d"), setOddsDisplay(LastSelectedMenu, t, r, "Sport", t, OddsParamater1, OddsParamater2)
	}
	if (SwitchSymbol(), "" != e && "0" != t && "OT" != t && "MP" != t) {
		LastSelectedSport = t, LastSelectedMArket = e;
		var o;
		if (o = "151" == t || "152" == t || "153" == t ? document.getElementById(e + "&150") : "180" == t || "181" == t || "186" == t ? document.getElementById(e + "&18X") : document.getElementById(e + "&" + t), null == o) return;
		o.className = "navclose"
	}
}
function SwitchOutright(e, t, n) {
	if ("" != LastSelectedCountry && "" != PrevSportType && "0" != PrevSportType && "" != PrevMarketType && (LayerId = document.getElementById(PrevMarketType + "_" + PrevSportType + "_" + LastSelectedCountry + "_layer"), null != LayerId && (LayerId.style.display = "none"), PrevMarketType = "", PrevSportType = "0", LastSelectedCountry = ""), SwitchSymbol(), "OT" == t) {
		CloseAllSports(e);
		var d = document.getElementById(e + "_" + t + "_body");
		if (null != d && d.hasChildNodes() && (d.style.display = ""), t != LastSelectedSport || 0 != n) {
			OddsParamater1 = t, null != document.getElementById(e + "_" + t + "_Name") && (OddsParamater2 = document.getElementById(e + "_" + t + "_Name").innerHTML);
			var a = e.toLowerCase();
			"t" == a && (a = "d"), setOddsDisplay(LastSelectedMenu, 0, null, "Outright", null)
		}
	} else if (CloseCountry(e, t), t != LastSelectedSport || 0 != n) {
		OddsParamater1 = t + SSymbol + "OT", null != document.getElementById(e + "_" + t + "_Name") && null != document.getElementById(e + "_" + t + "_OT_Name") && (OddsParamater2 = document.getElementById(e + "_" + t + "_Name").innerHTML + SSymbol + document.getElementById(e + "_" + t + "_OT_Name").innerHTML);
		var a = e.toLowerCase();
		"t" == a && (a = "d"), setOddsDisplay(LastSelectedMenu, t, null, "Outright", null)
	}
	LastSelectedSport = t
}
function SwitchMixParlay(e, t, n) {
	if ("" != LastSelectedCountry && "" != PrevSportType && "0" != PrevSportType && "" != PrevMarketType && (LayerId = document.getElementById(PrevMarketType + "_" + PrevSportType + "_" + LastSelectedCountry + "_layer"), null != LayerId && (LayerId.style.display = "none"), PrevMarketType = "", PrevSportType = "0", LastSelectedCountry = ""), SwitchSymbol(), "MP" == t) {
		CloseAllSports(e);
		var d = document.getElementById(e + "_" + t + "_body");
		if (null != d && d.hasChildNodes() && (d.style.display = ""), t != LastSelectedSport || 0 != n) {
			OddsParamater1 = t, null != document.getElementById(e + "_" + t + "_Name") && (OddsParamater2 = document.getElementById(e + "_" + t + "_Name").innerHTML);
			var a = e.toLowerCase();
			"t" == a && (a = "d"), setOddsDisplay(LastSelectedMenu, t, a, "Sport", t, OddsParamater1, OddsParamater2)
		}
	} else if (CloseCountry(e, t), t != LastSelectedSport || 0 != n) {
		OddsParamater1 = t + SSymbol + "MP", null != document.getElementById(e + "_" + t + "_Name") && null != document.getElementById(e + "_" + t + "_MP_Name") && (OddsParamater2 = document.getElementById(e + "_" + t + "_Name").innerHTML + SSymbol + document.getElementById(e + "_" + t + "_MP_Name").innerHTML);
		var a = e.toLowerCase();
		"t" == a && (a = "d"), setOddsDisplay(LastSelectedMenu, t, a, "Sport", t, OddsParamater1, OddsParamater2)
	}
	LastSelectedSport = t
}
function SwitchSymbol() {
	if (-1 != LastSelectedSport && "" != LastSelectedMArket && "0" != LastSelectedSport && "OT" != LastSelectedSport && "MP" != LastSelectedSport) {
		var e;
		"151" == LastSelectedSport || "152" == LastSelectedSport || "153" == LastSelectedSport ? e = document.getElementById(LastSelectedMArket + "&150") : "180" == LastSelectedSport ? "T" == LastSelectedMArket && (e = document.getElementById(LastSelectedMArket + "&18X")) : e = document.getElementById(LastSelectedMArket + "&" + LastSelectedSport), e.className = "nav"
	}
}
function SwitchCountry(e, t, n, d) {
	if (null != PopLauncher && PopLauncher.close(), "" != e && "" != t && "" != n) {
		CloseCountry(e, t);
		var a = document.getElementById(e + "_" + t + "_" + n + "_layer");
		null != a && (a.style.display = ""), e == PrevMarketType && t == PrevSportType && n == LastSelectedCountry || ("" != LastSelectedCountry && "" != PrevSportType && "0" != PrevSportType && "" != PrevMarketType && (a = document.getElementById(PrevMarketType + "_" + PrevSportType + "_" + LastSelectedCountry + "_layer"), null != a && (a.style.display = "none")), PrevMarketType = e, PrevSportType = t);
		var r = document.getElementById(e + "_" + t + "_body");
		if (null != r) {
			var o = r.getElementsByTagName("div");
			if (null != o) {
				for (i = 0; i < o.length; i++)(-1 != o[i].id.indexOf(e + "_" + t + "_L_" + n + "_", 0) || -1 != o[i].id.indexOf(e + "_" + t + "_M_" + n + "_", 0)) && (o[i].style.display = "");
				LastSelectedCountry = n, LastSelectedSport = t, LastSelectedMArket = e, ShowCountry(e, t, n, d)
			}
		}
	}
}
function SwitchMoreCountry(e, t, n) {
	if ("" != e && "" != t) {
		CloseCountry(e, t), "" != LastSelectedCountry && "" != PrevSportType && "0" != PrevSportType && "" != PrevMarketType && (LayerId = document.getElementById(PrevMarketType + "_" + PrevSportType + "_" + LastSelectedCountry + "_layer"), null != LayerId && (LayerId.style.display = "none"));
		var d = document.getElementById(e + "_" + t + "_body");
		if (null != d) {
			var a = document.getElementById(e + "_" + t + "_R");
			if (null != a) {
				n ? a.className = OpenMoreRegion ? "subnav-hide" : "subnav-more" : "subnav-hide" == a.className ? (a.className = "subnav-more", OpenMoreRegion = !1) : (a.className = "subnav-hide", OpenMoreRegion = !0);
				var r = d.getElementsByTagName("div");
				if (null != r) for (i = 0; i < r.length; i++) - 1 != r[i].id.indexOf(e + "_" + t + "_R_", 0) && ("subnav-hide" == a.className ? r[i].style.display = "" : r[i].style.display = "none")
			}
		}
	}
}
function CloseAllSports(e) {
	for (var t = 1; SportCount >= t; t++) null != document.getElementById(e + "_" + t + "_body") && (document.getElementById(e + "_" + t + "_body").style.display = "none", CloseCountry(e, t));
	document.getElementById(e + "_99_body").style.display = "none", CloseCountry(e, 99);
	var n = document.getElementById(e + "_150_body");
	null != n && (n.style.display = "none", CloseMoreCountry(e, 150));
	var d = document.getElementById(e + "_154_body");
	null != d && (d.style.display = "none", CloseMoreCountry(e, 154));
	var a = document.getElementById(e + "_201_body");
	null != a && (a.style.display = "none", CloseCountry(e, 201))
}
function CloseCountry(e, t) {
	var n = document.getElementById(e + "_" + t + "_body");
	if (null != n) {
		var d = n.getElementsByTagName("div");
		if (null != d) for (i = 0; i < d.length; i++)(-1 != d[i].id.indexOf(e + "_" + t + "_L_", 0) || -1 != d[i].id.indexOf(e + "_" + t + "_M_", 0)) && (d[i].style.display = "none")
	}
}
function CloseAllMoreCountry(e) {
	if ("" != e) {
		for (var t = 1; SportCount >= t; t++) CloseMoreCountry(e, t);
		CloseMoreCountry(e, 99);
		var n = document.getElementById(e + "_150_body");
		null != n && CloseMoreCountry(e, 150);
		var d = document.getElementById(e + "_154_body");
		null != d && CloseMoreCountry(e, 154);
		var a = document.getElementById(e + "_201_body");
		null != a && CloseMoreCountry(e, 201)
	}
}
function CloseMoreCountry(e, t) {
	if ("" != e && "" != t) {
		OpenMoreRegion = !1;
		var n = document.getElementById(e + "_" + t + "_body");
		if (null != n) {
			var d = document.getElementById(e + "_" + t + "_R");
			if (null != d) {
				d.className = "subnav-more";
				var a = n.getElementsByTagName("div");
				if (null != a) for (i = 0; i < a.length; i++) - 1 != a[i].id.indexOf(e + "_" + t + "_R_", 0) && (a[i].style.display = "none")
			}
		}
	}
}
function UpdateLiveCount(e) {
	var t = document.getElementById("L_Count");
	e > 0 ? (t.innerHTML = e, t.style.display = "") : t.style.display = "none"
}
function UpdateSportItem(e, t, n, d, a) {
	var r = "",
		o = !1;
	switch (RestCountFlag || (RestCount(), RestCountFlag = !0), e) {
	case "O":
		var s = document.getElementById("T_OT");
		0 == d ? s.style.display = "none" : s.style.display = "";
		break;
	case "P":
		break;
	default:
		var _ = e + "_" + t,
			i = document.getElementById(_),
			l = document.getElementById(_ + "_body");
		if (null == i) return;
		if (0 == d) if ("151" != t && "152" != t && "153" != t && "18X" != t) i.style.display = "none";
		else if ("E" == e) i.style.display = "none";
		else if ("T_18X" == _) if (1 == CanSeeVirtualSports) if (null == EnableVirtualSportList || 0 == EnableVirtualSportList.length) i.style.display = "none";
		else {
			i.style.display = "";
			var u = document.getElementById("T&180"),
				c = document.getElementById("T&181"),
				D = document.getElementById("T&186");
			null != u && (u.style.display = "none"), null != c && (c.style.display = "none"), null != D && (D.style.display = "none");
			for (var m = EnableVirtualSportList.split(","), O = 0; O < m.length; O++) switch (m[O]) {
			case "180":
				null != u && null != u.style && (u.style.display = "");
				break;
			case "181":
				null != c && null != c.style && (c.style.display = "");
				break;
			case "186":
				null != D && null != D.style && (D.style.display = "")
			}
		} else i.style.display = "none";
		else 0 != LastSelectedMenu && (document.getElementById(e + "&" + t).style.display = "none");
		else i.style.display = "", TotalCount[e] += d, r = t + e, SportCount[r] = d;
		"18X" != t && (l.innerHTML = n)
	}
	if (a) {
		if (!Tmpl_Initialed) {
			var E = document.getElementById("subnav");
			E.style.display = "", ifrmaeresizt(), Tmpl_Initialed = !0
		}
		e = "" != LastSelectedMArket ? LastSelectedMArket : "T";
		var p = document.getElementById("T_201");
		if (p.style.display = "none", CanSeeHorse || (document.getElementById("T&151").style.display = "none"), CanSeeGreyhounds || (document.getElementById("T&152").style.display = "none"), CanSeeHarness || (document.getElementById("T&153").style.display = "none"), CanSeeHorse || CanSeeGreyhounds || CanSeeHarness ? document.getElementById("T_150").style.display = "" : document.getElementById("T_150").style.display = "none", CanSeeVirtualSports ? document.getElementById("T_18X").style.display = "" : document.getElementById("T_18X").style.display = "none", CanSeeHorseFixOdds || (document.getElementById("T&154").style.display = "none"), !CanSeeESport) {
			var F = document.getElementById("T_43");
			null != F && (document.getElementById("T_43").style.display = "none"), F = document.getElementById("L_43"), null != F && (document.getElementById("L_43").style.display = "none")
		}
		e = GetDefaultMarket(e), SwitchMarket(e, o), SwitchCountry(e, LastSelectedSport, LastSelectedCountry, o), RestCountFlag = !1
	}
}
function AutoRefreshMenuData() {
	var e = document.getElementById("hidForce");
	e.value = ForceMenuData;
	var t = document.getElementById("hidMenuType");
	t.value = LastSelectedMenu, document.frmMenuData.action = "menu/Menu_data_euro.aspx", document.frmMenuData.submit()
}
function ifrmaeresizt() {
	document.getElementById("MenuContainer").style.display = "inline"
}
function openMenu(e) {}
function ShowCountry(e, t, n, d) {
	if ("" == e && (e = LastSelectedMArket), 0 != d) {
		if (OddsParamater1 = t + SSymbol + n, null != document.getElementById(e + "_" + t + "_Name") && null != document.getElementById(e + "_" + t + "_" + n + "_Name")) {
			var a = "";
			a = "99" == t ? SportName99 : document.getElementById(e + "_" + t + "_Name").innerHTML, OddsParamater2 = a + SSymbol + document.getElementById(e + "_" + t + "_" + n + "_Name").innerHTML
		}
		var r = e.toLowerCase();
		"t" == r && (r = "d"), setOddsDisplay(LastSelectedMenu, t, r, "Country", n, OddsParamater1, OddsParamater2)
	}
}
function ShowLevel3(e, t, n, d, a) {
	if ("" == e && (e = LastSelectedMArket), OddsParamater1 = t + SSymbol + n + SSymbol + d, null != document.getElementById(e + "_" + t + "_Name") && null != document.getElementById(e + "_" + t + "_" + n + "_Name") && null != document.getElementById(e + "_" + t + "_" + n + "_" + d + "_Name")) {
		var r = "";
		r = "99" == t ? SportName99 : document.getElementById(e + "_" + t + "_Name").innerHTML, OddsParamater2 = r + SSymbol + document.getElementById(e + "_" + t + "_" + n + "_Name").innerHTML + SSymbol + document.getElementById(e + "_" + t + "_" + n + "_" + d + "_Name").innerHTML
	}
	var o = e.toLowerCase();
	"t" == o && (o = "d"), setOddsDisplay(LastSelectedMenu, t, o, a, d, OddsParamater1, OddsParamater2)
}
function m_mouseover(e, t) {
	var n;
	0 == e ? (n = document.getElementById("menu_all"), null != n && (n.className = "current"), n = document.getElementById("subnav_head"), null != n && (n.className = "item"), n = document.getElementById("menu_wp"), null != n && (n.className = "")) : 2 == e && (n = document.getElementById("menu_all"), null != n && (n.className = ""), n = document.getElementById("menu_wp"), null != n && (n.className = "current"))
}
function m_onmouseout(e) {
	var t;
	0 == LastSelectedMenu ? (t = document.getElementById("menu_all"), null != t && (t.className = "current"), t = document.getElementById("subnav_head"), null != t && (t.className = "item"), t = document.getElementById("menu_wp"), null != t && (t.className = "")) : 2 == LastSelectedMenu && (t = document.getElementById("menu_all"), null != t && (t.className = ""), t = document.getElementById("menu_wp"), null != t && (t.className = "current"))
}
function SwitchMenuType(e, t) {
	var n, d = $("#subnav_olympic").find("div").length;
	2 == d && (0 == e ? (n = document.getElementById("menu_type_3"), n.className = "menu_R current", n = document.getElementById("menu_type_1"), n && (n.className = "menu_gr current"), n = document.getElementById("menu_type_2"), n && (n.className = "menu_gr current")) : (n = document.getElementById("menu_type_1"), n && (n.className = "menu_R"), n = document.getElementById("menu_type_2"), n && (n.className = "menu_R"), n = document.getElementById("menu_type_3"), n.className = "menu_gr")), 3 == d && (2 == e || 3 == e ? (n = document.getElementById("menu_type_2"), n.className = "menu_gr current", n = document.getElementById("menu_type_1"), n.className = "menu_gr", n = document.getElementById("menu_type_0"), n.className = "menu_R") : 1 == e ? (n = document.getElementById("menu_type_1"), n.className = "menu_gr current", n = document.getElementById("menu_type_2"), n.className = "menu_gr", n = document.getElementById("menu_type_0"), n.className = "menu_R") : (n = document.getElementById("menu_type_0"), n.className = "menu_R current", n = document.getElementById("menu_type_2"), n.className = "menu_gr", n = document.getElementById("menu_type_1"), n.className = "menu_gr")), e != LastSelectedMenu && (IsChangeMenuType = !0, LastSelectedMenu = e, m_mouseover(e, t), ForceMenuData = !0, AutoRefreshMenuData());
	var a;
	"0" == LastSelectedSport ? a = GetDefaultSport("T") : "T" == LastSelectedMArket ? a = LastSelectedSport : (a = GetDefaultSport("T"), LastSelectedCountry = ""), SwitchSport("T", 0, "false"), LastSelectedSport = 0, LastSelectedMArket = "T", null != document.getElementById("iTV") && (document.getElementById("iTV").src = ""), null != document.getElementById("match_streaming") && (document.getElementById("match_streaming").style.display = "none")
}
function PopHorseFormGuide() {
	if (IsLogin) {
		wx = 990, wy = 450, x = (screen.width - wx) / 2, y = x = (screen.height - wx) / 2;
		var e = "http://icard.276868.com/";
		("ch" == UserLang || "cs" == UserLang) && (e = "http://icardchinese.276868.com"), !popWindow || popWindow.closed ? popWindow = window.open(e, "sub", "toolbar=yes, menubar=yes, scrollbars=yes, resizable=yes, location=yes, status=no,left=" + x + ",top=" + y + ",width=" + wx + ",height=" + wy) : popWindow.focus()
	}
}
function PopHorseInfo(e, t) {
	HorseInfoUrl = "HorseInfoPop.aspx?League=" + e + "&Race=" + t, !HorseInfoPopWindow || HorseInfoPopWindow.closed ? (wx = 610, wy = 700, x = (screen.width - wx) / 2, y = x = (screen.height - wx) / 2, HorseInfoPopWindow = window.open(HorseInfoUrl, "subInfo", "left=" + x + ",top=" + y + ",width=" + wx + ",height=" + wy)) : HorseInfoPopWindow.closed || (HorseInfoPopWindow.location.href = HorseInfoUrl, HorseInfoPopWindow.focus(), HorseInfoPopWindow.document.focus)
}
function CloseHorseInfoPopWindow() {
	try {
		null != HorseInfoPopWindow && HorseInfoPopWindow.open && (HorseInfoPopWindow.close(), HorseInfoPopWindow = null)
	} catch (e) {}
}
function setMenuTypeChangeOddsDisplay(e) {
	1 == LastSelectedMenu ? setOddsDisplay(1, 1, e, "Sport", 0, "", "") : 2 == LastSelectedMenu ? setOddsDisplay(2, 0, e, "Sport", 0, "", "") : 3 == LastSelectedMenu ? setOddsDisplay(3, 0, e, "Sport", 0, "", "") : setOddsDisplay(0, 0, e, "Sport", 0, "", "")
}
function ReloadBetListMini(e) {
	"yes" == e && (document.getElementById("aaRefresh").innerHTML = RES_PLEASE_WAIT), document.frmBetListMini.showSelectLine.value = "stakeline_open", document.frmBetListMini.showBetAcceptedMsg.value = "no", document.frmBetListMini.submit(), document.getElementById("div_BetListMini").style.display = "", document.getElementById("div_WaitingBets").style.display = "none"
}
function showBetAcceptedMsg(e) {
	alert(e)
}
function LastTenClick(e, t, n) {
	var d = document.getElementById("Last10");
	return "true" == d.name ? (document.getElementById("lbl_Last").innerHTML = n, d.name = "false", document.frmBetListMini.Last10Status.value = d.name, void selTenCount(e, "none")) : "false" == d.name ? (document.getElementById("lbl_Last").innerHTML = t, d.name = "true", document.frmBetListMini.Last10Status.value = d.name, void selTenCount(e, "")) : void 0
}
function selTenCount(e, t) {
	for (var n = 11; e >= n; n++) document.getElementById("table" + n).style.display = t
}
function SwitchBetListType(e) {
	"0" == e ? (DropTimeoutHandlers(), document.getElementById("lastrefresh_time") && (document.getElementById("lastrefresh_time").innerHTML = ""), null != document.getElementById("lbl_ctr") && (document.getElementById("lbl_ctr").innerHTML = "Hide"), null != document.getElementById("selectBetline") && (document.getElementById("selectBetline").className = "stakeline_open"), document.frmBetListMini.showSelectLine.value = "stakeline_open", document.frmBetListMini.action = "../BetListMini_data.aspx?IsFromBetListBtn=yes", document.frmBetListMini.submit(), document.getElementById("div_BetListMini").style.display = "", document.getElementById("div_WaitingBets").style.display = "none") : (DropTimeoutHandlers(), document.frmWaitingBets.action = "../WaitingBets_Data.aspx?IsFromWaitingBtn=yes", document.frmWaitingBets.submit(), document.getElementById("div_BetListMini").style.display = "none", document.getElementById("div_WaitingBets").style.display = "")
}
function loadWaitingBetList() {
	if (void 0 != WaitingBets.data) {
		var e = document.getElementById("WaitingBetsSpan");
		document.all ? e.innerHTML = WaitingBets.data : replaceHtml("WaitingBetsSpan", WaitingBets.data)
	}
}
function replaceHtml(e, t) {
	var n = "string" == typeof e ? document.getElementById(e) : e,
		d = n.cloneNode(!1);
	return d.innerHTML = t, n.parentNode.replaceChild(d, n), d
}
function ChangeSelectLine(e, t) {
	var n = "stakeline_open" == document.getElementById("selectBetline").className;
	n ? (document.getElementById("lbl_ctr").innerHTML = e, document.getElementById("selectBetline").className = "stakeline_close", document.frmBetListMini.showSelectLine.value = "stakeline_close", document.getElementById("divbetlist").style.display = "none") : (document.getElementById("lbl_ctr").innerHTML = t, document.getElementById("selectBetline").className = "stakeline_open", document.frmBetListMini.showSelectLine.value = "stakeline_open", document.getElementById("divbetlist").style.display = "block")
}
function counting(e) {
	document.getElementById("lastrefresh").style.display = "block";
	var t = e - 1;
	e - 1 > 0 && (TimeoutCountdownIndex = setTimeout("counting(" + t + ")", 1e3))
}
function ReloadWaitingBetList() {
	document.frmWaitingBets.action = "../WaitingBets_Data.aspx?IsFromWaitingBtn=yes", document.frmWaitingBets.submit()
}
function Countdown() {
	counting(6), TimeoutWaitingBetIndex = setTimeout("ReloadWaitingBetList()", 6e3)
}
function DropTimeoutHandlers() {
	null != TimeoutWaitingBetIndex && "undefined" != typeof TimeoutWaitingBetIndex && (clearTimeout(TimeoutWaitingBetIndex), TimeoutWaitingBetIndex = null), null != TimeoutCountdownIndex && "undefined" != typeof TimeoutCountdownIndex && (clearTimeout(TimeoutCountdownIndex), TimeoutCountdownIndex = null)
}
function InitBetslip(e) {
	IsEuro = e, IsEuro || (BetslipPath = "EuroSite/underover/")
}
function validateOnKP(e, t, n) {
	var d = document.all ? t.keyCode : t.which;
	return e.value.length > 0 && 0 == n && 48 == d ? !1 : 13 == d || 8 == d ? !0 : /^$/.test(removeCommas(e.value)) && /0/.test(String.fromCharCode(d)) ? !1 : /[^0-9]/.test(String.fromCharCode(d)) ? !1 : !0
}
function addCommas_euro(e) {
	for (var t = new RegExp("(-?[0-9]+)([0-9]{3})"); t.test(e);) e = e.replace(t, "$1,$2");
	return e
}
function removeCommas(e) {
	var t = /,/g;
	return e.replace(t, "")
}
function SetSingleBetEachWay(e, t, n) {
	var d = $("#txtSingleEachWay").val();
	d = removeCommas(d);
	for (var a = $("#divSingleTickets").find("input").length, r = a - 3; r > -1; r--) $("#divSingleTickets").find("input:eq(" + r + ")").val(d), SumSingleBetTotalStake($("#divSingleTickets").find("input:eq(" + r + ")").attr("id"), d);
	d = addCommas_euro(d), $("#txtSingleEachWay").val(d)
}
function GetBetslip() {
	$.ajax({
		type: "post",
		url: BetslipPath + "GetBetslip.aspx",
		data: {},
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		cache: !1,
		asyncBoolean: !1,
		error: function(e) {
			alert("Request error " + e)
		},
		success: function(e) {
			"" != e && ($("#Betslip").html(e), OpenMask())
		}
	})
}
function GetSingleBetConfirmBet() {
	$("#SingleBetConfirm").attr("disabled", !0);
	var e = $("#divSingleTickets").find("input").length,
		t = "",
		n = "",
		d = 0;
	for (d = 0; e - 2 > d; d++) {
		var a = "",
			r = 0;
		"" != $("#divSingleTickets").find("input:eq(" + i + ")").val(), a = $("#divSingleTickets").find("input:eq(" + d + ")").attr("id"), r = $("#divSingleTickets").find("input:eq(" + d + ")").val(), r = removeCommas(r), t = t + a + "|", n = n + r + "|", UpdateSingleBetStake(a, r)
	}
	$.ajax({
		type: "post",
		url: "underover/GetConfirmBet.aspx",
		data: {
			CurrentTab: 1,
			KeySet: t,
			StakeSet: n
		},
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		cache: !1,
		asyncBoolean: !1,
		complete: function() {
			$("#SingleBetConfirm").attr("disabled", !1)
		},
		error: function(e) {
			alert("Request error " + e)
		},
		success: function(e) {
			"" != e && ($("#Betslip").html(e), OpenMask())
		}
	})
}
function GetMixParlayConfirmBet() {
	$("#MixParlayConfirmBet").attr("disabled", !0);
	var e = {},
		t = null,
		n = "",
		d = !1,
		a = document.getElementById("euroComboList"),
		r = document.getElementById("ckKeepOdds").checked;
	return e.CurrentTab = 2, e.ckKeepOdds = r ? "ON" : "OFF", $(a).find("li").each(function(a) {
		var r = $(this).find("input")[0],
			o = removeCommas($(r).val()),
			s = $(r).attr("name"),
			_ = $(r).attr("max"),
			i = $(r).attr("min"),
			l = parseInt(o),
			u = parseInt(_),
			c = parseInt(i);
		$(r).attr("comboTypeIndicator");
		"0" == o && (o = null), $(this).find("div[name='stakeAlert']").css("display", "none"), o && (u >= l && l >= c ? (e[s] = o, n += $(r).attr("token") + "_") : (t = $(this), $(this).addClass("expand"), $(this).find("div[name='stakeAlert']").css("display", ""), d = !0))
	}), d && (n = ""), n ? (e.ComboHasStake = n, void $.ajax({
		type: "post",
		url: "underover/GetConfirmBet.aspx",
		data: e,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		cache: !1,
		asyncBoolean: !1,
		error: function(e) {
			alert("Request error " + e)
		},
		complete: function() {
			$("#MixParlayConfirmBet").attr("disabled", !1)
		},
		success: function(e) {
			"" != e && ($("#Betslip").html(e), OpenMask())
		}
	})) : (null != t && (t.addClass("expand"), t.find("div[name='stakeAlert']").css("display", ""), t.find("input")[0].focus()), !1)
}
function SingleBetPlaceBet() {
	$("#btnSingleBetPlaceBet").attr("disabled", !0);
	var e = document.getElementById("btnSingleBetPlaceBet");
	e.href = "JavaScript:", e.className = "disabled";
	var t = "";
	$(".hidKeyStake").each(function(e) {
		t = t + removeCommas($(this).text()) + "|"
	}), $.ajax({
		type: "post",
		url: BetslipPath + "SingleBetPlaceBet.aspx",
		data: {
			PlaceBetKeyStake: t
		},
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		cache: !1,
		asyncBoolean: !1,
		complete: function() {
			$("#btnSingleBetPlaceBet").attr("disabled", !1)
		},
		error: function(e) {
			document.getElementById("btnSingleBetPlaceBet");
			alert("Request error " + e)
		},
		success: function(e) {
			"" != e && ($("#Betslip").html(e), IsEuro && ShowBetListMini(), OpenMask())
		}
	}), e.href = "JavaScript:SingleBetPlaceBet();", e.className = "button"
}
function MixParlayPlaceBet() {
	$("#btnMixParlayPlaceBet").attr("disabled", !0);
	var e = document.getElementById("btnMixParlayPlaceBet");
	e.href = "JavaScript:", e.className = "disabled", $.ajax({
		type: "post",
		url: "mixcom/MixParlayPlaceBet.aspx",
		data: {},
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		cache: !1,
		asyncBoolean: !1,
		complete: function() {
			$("#btnMixParlayPlaceBet").attr("disabled", !1)
		},
		error: function(e) {
			alert("Request error " + e)
		},
		success: function(e) {
			"" != e && ($("#Betslip").html(e), ShowBetListMini(), OpenMask())
		}
	}), e.href = "JavaScript:MixParlayPlaceBet();", e.className = "button"
}
function AddOutrightBetTicket(e) {
	$.ajax({
		type: "post",
		url: BetslipPath + "AddOutrightBetTicket.aspx",
		data: {
			Params: e
		},
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		cache: !1,
		asyncBoolean: !1,
		error: function(e) {
			alert("Request error " + e)
		},
		success: function(e) {
			"" != e && ($("#Betslip").html(e), OpenMask())
		}
	})
}
function AddHorseTicket(e, t, n, d, a, r, o) {
	$.ajax({
		type: "post",
		url: BetslipPath + "AddHorseBetTicket.aspx",
		data: {
			OddsID: e,
			ProgramID: t,
			RaceNum: n,
			Runner: d,
			BType: a,
			SportType: r,
			PoolType: o
		},
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		cache: !1,
		asyncBoolean: !1,
		error: function(e) {
			alert("Request error " + e)
		},
		success: function(e) {
			"" != e && ($("#Betslip").html(e), OpenMask())
		}
	})
}
function FocusInputBox() {
	var e = 0;
	IsEuro ? ("none" != $("#divSingleTickets").attr("display") && (e = $("#divSingleTickets").find("input").length, $("#divSingleTickets").find("input:eq(" + (e - 3) + ")").focus()), "none" != $("#divParlayTickets").attr("display") && $("#divParlayTickets").find("input:eq(0)").focus()) : $("#txtSingleEachWay").focus()
}
function AddBetTicket(e, t, n) {
	$.ajax({
		type: "post",
		url: BetslipPath + "AddBetTicket.aspx",
		data: {
			OddsID: e,
			BTeam: t,
			Odds: n
		},
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		cache: !1,
		asyncBoolean: !1,
		error: function(e) {
			alert("Request error " + e)
		},
		success: function(e) {
			"" != e && ($("#Betslip").html(e), OpenMask(), FocusInputBox())
		}
	})
}
function flashDoJob() {
	$.ajax({
		type: "post",
		url: "underover/AddBetTicket.aspx",
		data: {
			KK: "1"
		},
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		cache: !1,
		asyncBoolean: !1,
		error: function(e) {
			alert("Request error " + e)
		},
		success: function(e) {
			"" != e && ($("#Betslip").html(e), OpenMask(), FocusInputBox())
		}
	})
}
function RemoveTicketByKey(e) {
	$("#div_Betslip_Mask").show(), OpenMask(), $.ajax({
		type: "post",
		url: BetslipPath + "RemoveBetTicket.aspx",
		data: {
			RT: 1,
			Key: e
		},
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		cache: !1,
		asyncBoolean: !1,
		error: function(e) {
			alert("Request error " + e), $("#div_Betslip_Mask").hide()
		},
		success: function(e) {
			"" != e && ($("#Betslip").html(e), OpenMask())
		}
	})
}
function RemoveAllTicket() {
	$("#div_Betslip_Mask").show(), OpenMask(), $.ajax({
		type: "post",
		url: BetslipPath + "RemoveBetTicket.aspx",
		data: {
			RT: 2
		},
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		cache: !1,
		asyncBoolean: !1,
		error: function(e) {
			alert("Request error " + e), $("#div_Betslip_Mask").hide()
		},
		success: function(e) {
			"" != e && ($("#Betslip").html(e), OpenMask())
		}
	})
}
function UpdateSingleBetStake(e, t) {
	t = removeCommas(t);
	var n = 0,
		d = e.replace("SingleStake", "Payout"),
		a = new Date;
	$.ajax({
		type: "post",
		url: BetslipPath + "UpdateBetStake.aspx",
		data: {
			Key: e,
			Stake: t,
			SentDate: a.getTime()
		},
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		cache: !1,
		error: function(e) {
			return alert("Request error " + e), !1
		},
		success: function(e) {
			var t = $("#divSingleTickets").find("input").length;
			for (i = 0; i < t - 2; i++) if ("" == $("#divSingleTickets").find("input:eq(" + i + ")").val()) n += 0;
			else {
				var a = $("#divSingleTickets").find("input:eq(" + i + ")").val();
				a = removeCommas(a), n += parseInt(a)
			}
			n = addCommas_euro(n.toString()), $("#divSingleTickets").find("input:eq(" + (t - 1) + ")").val(n), "" != e && (document.getElementById(d).innerHTML = e)
		}
	}), document.getElementById(e).value = addCommas_euro(t)
}
function SumSingleBetTotalStake(e, t) {
	var n = $("#divSingleTickets").find("input").length,
		d = 0,
		a = 0;
	for (a = 0; n - 2 > a; a++) if ("" == $("#divSingleTickets").find("input:eq(" + a + ")").val()) d += 0;
	else {
		var r = $("#divSingleTickets").find("input:eq(" + a + ")").val();
		r = removeCommas(r), d += parseInt(r)
	}
	d = addCommas_euro(d.toString()), $("#divSingleTickets").find("input:eq(" + (n - 1) + ")").val(d), document.getElementById(e).value = addCommas_euro(t)
}
function UpdateMixParlayStake(e, t) {
	for (var n = {}, d = "", a = document.getElementById("euroComboList"), r = a.getElementsByTagName("input"), o = r.length, s = document.getElementById("spb"), _ = 0; o > _; _++) {
		var i = r[_].value,
			l = r[_].name;
		n[l] = i, d += r[_].getAttribute("token") + "_"
	}
	n.Stake = e, n.ComboHasStake = d, e = removeCommas(e), "" != e ? $(s).addClass("active") : $(s).removeClass("active"), $.ajax({
		type: "post",
		url: "underover/UpdateBetStake.aspx",
		data: n,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		cache: !1,
		error: function(e) {
			alert("Request error " + e)
		},
		success: function(e) {
			UpdateSingleComboParlayStake()
		}
	})
}
function SwitchBetslipTab(e) {
	$.ajax({
		type: "post",
		url: "underover/UpdateBetslipCurrentTab.aspx",
		data: {
			CurrentTab: e
		},
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		cache: !1,
		error: function(e) {
			alert("Request error " + e)
		},
		success: function(t) {
			var n = document.getElementById("menu_single"),
				d = document.getElementById("menu_parlay"),
				a = document.getElementById("divSingleTickets"),
				r = document.getElementById("divParlayTickets"),
				o = document.getElementById("SingleNoData"),
				s = document.getElementById("ParlayNoData");
			1 == e ? (n.className = "TabOpen", d.className = "TabClose", a.display = "", r.display = "none", null != o ? (o.style.display = "", s.style.display = "none") : (a.style.display = "", r.style.display = "none")) : 2 == e && (n.className = "TabClose", d.className = "TabOpen", a.display = "none", r.display = "", null != s ? (o.style.display = "none", s.style.display = "") : (a.style.display = "none", r.style.display = ""))
		}
	})
}
function ConfirmGoBack() {
	$.ajax({
		type: "post",
		url: "underover/GetBetslip.aspx",
		data: {
			BACK: "B"
		},
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		cache: !1,
		error: function(e) {
			alert("Request error " + e)
		},
		success: function(e) {
			"" != e && ($("#Betslip").html(e), OpenMask())
		}
	})
}
function OpenMask() {
	var e = document.getElementById("div_Betslip_Mask"),
		t = document.getElementById("divSingleTickets"),
		n = document.getElementById("divParlayTickets"),
		d = document.getElementById("div_Title"),
		a = 0;
	if (e && (t && "" == t.style.display ? a = t.offsetHeight : n && "" == n.style.display && (a = n.offsetHeight), "" == e.style.display && d)) {
		e.style.display = "block";
		var r = d.offsetHeight;
		e.style.height = r + a + "px"
	}
}
function CloseMaskAndAlertBox() {
	var e = document.getElementById("div_Betslip_Mask");
	null != e && (e.style.display = "none");
	var e = document.getElementById("div_AlertBox");
	e.style.display = "none"
}
function SwitchSingleSelections() {
	var e = document.getElementById("divSingleSelections"),
		t = document.getElementById("divSingleSelectionTicket");
	"" == t.style.display ? (t.style.display = "none", e.className = "stakeline_close") : (t.style.display = "", e.className = "stakeline_open")
}
function SwitchMixParlaySelections() {
	var e = document.getElementById("divParlaySelections"),
		t = document.getElementById("divParlaySelectionTicket");
	"" == t.style.display ? (t.style.display = "none", e.className = "stakeline_close") : (t.style.display = "", e.className = "stakeline_open")
}
function SwitchMoreInfo(e, t) {
	var n = document.getElementById(e),
		d = document.getElementById(t);
	"" == n.style.display ? (n.style.display = "none", d.className = "infoclose") : (n.style.display = "", d.className = "infolink")
}
function BetslipFocus(e) {
	var t = document.getElementById("betslipFocus");
	t.value = e
}
function CheckBetslipFocus(e) {
	2 == e ? $("#MixParlayConfirmBet").focus() : $("#SingleBetConfirm").focus()
}
function ShowBetListMini() {
	$.ajax({
		type: "post",
		url: "BetslipToBetlist.aspx",
		data: {},
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		cache: !1,
		error: function(e) {
			alert("Request error " + e)
		},
		success: function(e) {
			"" != e && SwitchBetListType(e)
		}
	})
}
function SetComboBetStake(e) {
	for (var t, n = document.getElementById("euroComboList"), d = n.getElementsByTagName("input"), a = d.length, r = 0; a > r; r++) t = d[r].getAttribute("comboTypeIndicator"), "2" != t && "3" != t && (d[r].value = e)
}
function ToggleComboExpand(e) {
	var t = e.parentElement;
	$(t).toggleClass("expand")
}
function UpdateSingleComboParlayStake() {
	for (var e = document.getElementById("euroComboList"), t = e.getElementsByTagName("li"), n = t.length, d = 0, a = 0, r = 0; n > r; r++) {
		var o = t[r].getElementsByTagName("input"),
			s = o[0].getAttribute("odds"),
			_ = o[0].value,
			i = o[0].getAttribute("betcount");
		_ && "0" == _ && (_ = null), s && _ && i ? (_ = removeCommas(_), a += parseFloat(_) * parseFloat(s), d += _ * i, o[0].value = addCommas_euro(_), $(t[r]).addClass("active expand")) : $(t[r]).removeClass("active")
	}
	document.getElementById("txtParlayTotalStake").value = addCommas_euro(d.toString()), document.getElementById("MP_PayOut").innerHTML = addCommas_euro(a.toFixed(2).toString())
}
function ToggleAllComboExpand(e) {
	var t = document.getElementById("euroComboList"),
		n = document.getElementById("spb");
	$(e).is(":checked") ? ($(t).find("li").addClass("expand"), $(n).addClass("expand")) : ($(t).find("li").removeClass("expand"), $(n).removeClass("expand"))
}
function spbSwitch() {
	obj = document.getElementById("spb"), -1 == obj.className.indexOf("expand") ? $(obj).addClass("expand") : $(obj).removeClass("expand")
}
function getParent(e) {
	for (var t = e, n = 0; 4 > n; n++) {
		if (null != t.SiteMode) return t;
		t = t.parent
	}
	return null
}
function getParent(e) {
	for (var t = e, n = 0; 4 > n; n++) {
		if (null != t.SiteMode) return t;
		t = t.parent
	}
	return null
}
function getOddsClass(e) {
	return 0 > e ? CLS_EVEN : CLS_ODD
}
function refreshData() {
	REFRESH_GAP && (btnstop(), window.clearTimeout(RefresHandle), RefresHandle = window.setTimeout(refreshData, REFRESH_INTERVAL), null == g_OddsKeeper || 0 >= iRefreshCount ? (document.DataForm.RT.value = "W", iRefreshCount = REFRESH_COUNTDOWN) : iRefreshCount--, bShowLoading && (document.getElementById("BetList").style.display = "block", bShowLoading = !1), document.DataForm.submit())
}
function btnstop() {
	REFRESH_GAP = !1;
	var e = document.getElementById("divSelectDate");
	if (null != e && "none" != e.style.display) for (var t = 0; t < e.childNodes.length; t++) {
		var n = e.childNodes[t];
		null != n.tagName && "SPAN" == n.tagName.toUpperCase() && (n.disabled = !0)
	}
	var d = document.getElementById("selOddsType");
	null !== d && (d.disabled = !0);
	for (var a = document.getElementsByName("btnRefresh"), t = 0; t < a.length; t++) a[t].disabled = !0, a[t].innerHTML = "", a[t].innerHTML = "<span>" + RES_PLEASE_WAIT + "</sapn>", a[t].style.font.color = "gray";
	a = document.getElementsByName("btnRefresh_D");
	for (var t = 0; t < a.length; t++) a[t].disabled = !0, a[t].innerHTML = "", a[t].innerHTML = "<span>" + RES_PLEASE_WAIT + "</sapn>", a[t].style.font.color = "gray";
	a = document.getElementsByName("btnRefresh_L");
	for (var t = 0; t < a.length; t++) a[t].disabled = !0, a[t].innerHTML = "", a[t].innerHTML = "<span>" + RES_PLEASE_WAIT + "</sapn>", a[t].style.font.color = "gray";
	TimerBtnStar = setTimeout("btnstart()", 15e3)
}
function btnstart() {
	if (!REFRESH_GAP) {
		var e = document.getElementById("divSelectDate");
		if (null != e && "none" != e.style.display) for (var t = 0; t < e.childNodes.length; t++) {
			var n = e.childNodes[t];
			null != n.tagName && "SPAN" == n.tagName.toUpperCase() && (n.disabled = !1)
		}
		var d = document.getElementById("selOddsType");
		null !== d && (d.disabled = !1);
		for (var a = document.getElementsByName("btnRefresh"), t = 0; t < a.length; t++) a[t].innerHTML = "", a[t].innerHTML = "<span>" + RES_REFRESH + "</span>", a[t].disabled = !1, a[t].style.font.color = "black";
		a = document.getElementsByName("btnRefresh_L");
		for (var t = 0; t < a.length; t++) a[t].innerHTML = "", a[t].innerHTML = "<span>" + RES_REFRESH + "</span>", a[t].disabled = !1, a[t].style.font.color = "black";
		a = document.getElementsByName("btnRefresh_D");
		for (var t = 0; t < a.length; t++) a[t].innerHTML = "", a[t].innerHTML = "<span>" + RES_REFRESH + "</span>", a[t].disabled = !1, a[t].style.font.color = "black";
		REFRESH_GAP = !0
	}
}
function changeBGColor2(e, t) {
	var n = document.getElementById(e + "_1"),
		d = document.getElementById(e + "_2");
	n.style.backgroundColor = t, null != d && (d.style.backgroundColor = t)
}
function changeBGColor3(e, t) {
	var n = document.getElementById(e + "_1"),
		d = document.getElementById(e + "_2"),
		a = document.getElementById(e + "_3");
	n.style.backgroundColor = t, d.style.backgroundColor = t, a.style.backgroundColor = t
}
function initialTmpl(e, t, n) {
	if (null == fFrame.hash_TmplLoaded[e]) return fFrame.document.getElementById(e).src = t, fFrame.hash_TmplLoaded[e] = !0, window.setTimeout(n, 500), !1;
	var d = fFrame.document.getElementById(e),
		a = null;
	return a = d.contentDocument ? d.contentDocument.getElementById("tmplEnd") : d.contentWindow ? d.contentWindow.document.getElementById("tmplEnd") : d.Document.getElementById("tmplEnd"), null == a ? (window.setTimeout(n, 500), !1) : !0
}
function initialOddsBody(e, t, n) {
	var d = document.getElementById("DivMainOdds");
	return null == fFrame.hash_TmplLoaded[e] ? (fFrame.document.getElementById("OddsBodyFrame").src = t, fFrame.hash_TmplLoaded[e] = !0, window.setTimeout(n, 500), !1) : null == fFrame.OddsBody[e] ? (window.setTimeout(n, 500), !1) : (d.innerHTML = fFrame.OddsBody[e], d.name = e, !0)
}
function loadAllTmpl() {
	var e = new Array;
	if (e.UnderOver_tmpl_1 = "UnderOver_tmpl.aspx?form=1", e.UnderOver_tmpl_3 = "UnderOver_tmpl.aspx?form=3", e.UnderOver_tmpl_1F = "UnderOver_tmpl.aspx?form=1F", e.UnderOver_tmpl_1H = "UnderOver_tmpl.aspx?form=1H", e.NBA_tmpl = "NBA_tmpl.aspx", e.Baseball_tmpl = "Baseball_tmpl.aspx", e.Tennis_tmpl = "Tennis_tmpl.aspx", e.Cricket_tmpl = "Cricket_tmpl.aspx", e["1X2_tmpl"] = "1X2_tmpl.aspx", e.CorrectScore_tmpl = "CorrectScore_tmpl.aspx", e.OeTg_tmpl = "OeTg_tmpl.aspx", e.HTFT_tmpl = "HTFT_tmpl.aspx", e.OeTg_tmpl = "OeTg_tmpl.aspx", e.FGLG_tmpl = "FGLG_tmpl.aspx", e.MixParlay_tmpl = "MixParlay_tmpl.aspx?sport=1", e.MixParlay_tmpl_NBA = "MixParlay_tmpl.aspx?sport=2", e.MixParlay_tmpl_Tennis = "MixParlay_tmpl.aspx?sport=5", e.MixParlay_tmpl_Baseball = "MixParlay_tmpl.aspx?sport=8", e.MixParlay_tmpl_Cricket = "MixParlay_tmpl.aspx?sport=27", e.Horse_tmpl = "Horse_tmpl.aspx", e.Horse_Fixed_tmpl = "Horse_Fixed_tmpl.aspx", e.Finance_tmpl = "Finance_tmpl.aspx", e.Outright_tmpl = "/Outright_tmpl.aspx", e.League_tmpl = "Match_tmpl.aspx?Scope=League", e.Match_tmpl = "Match_tmpl.aspx?Scope=Match", LOAD_TMPL_GAP) {
		for (var t in e) if (null == fFrame.hash_TmplLoaded[t]) {
			var n = fFrame.document.getElementById(t);
			null != n && (fFrame.document.getElementById(t).contentWindow.location.href = e[t], fFrame.hash_TmplLoaded[t] = !0)
		}
		LOAD_TMPL_GAP = !1
	}
}
function selectDate(e, t) {
	if (REFRESH_GAP) {
		if (document.DataForm.DT.value != t) {
			for (var n = document.getElementById("divSelectDate"), d = 0; d < n.childNodes.length; d++) null != n.childNodes[d].tagName && "SPAN" == n.childNodes[d].tagName.toUpperCase() && (n.childNodes[d].style.color = "#003399");
			e.style.color = "#9F0915", document.DataForm.DT.value = t, document.DataForm.RT.value = "W"
		}
		refreshData()
	}
}
function getShowMatchHtml(e, t, n) {
	return "<a href='javascript:showMatchOdds(\"" + e + '", "' + t + '", "' + n + "\");'><img border='0' src='" + fFrame.imgServerURL + "template/public/images/more_game.gif' /></a>"
}
function getStatsHtml(e) {
	return fFrame.CanSeeStatsInfo ? fFrame.IsLogin ? vendorSetting.IsSpondemo ? "<img src='" + fFrame.imgServerURL + fFrame.SkinRootPath + "public/images/layout/spacer.gif' width='16' height='16' border='0' class='Stats' title='Stats' />" : "<a href='javascript:openStatsInfo(\"" + e + "\");'><img src='" + fFrame.imgServerURL + fFrame.SkinRootPath + "public/images/layout/spacer.gif' width='16' height='16' border='0' class='Stats' title='Stats' /></a>" : "<img src='" + fFrame.imgServerURL + fFrame.SkinRootPath + "public/images/layout/spacer.gif' width='16' height='16' border='0' class='Stats' title='Stats' />" : ""
}
function getSportRadarHtml(e) {
	return fFrame.CanSeeSportRadar ? fFrame.IsLogin ? vendorSetting.IsSpondemo ? "<img src='" + fFrame.imgServerURL + fFrame.SkinRootPath + "public/images/layout/spacer.gif' width='16' height='16' border='0' class='whistle title='whistle' />" : "<a href='javascript:openLiveInfo(\"" + e + "\");'><img src='" + fFrame.imgServerURL + fFrame.SkinRootPath + "public/images/layout/spacer.gif' width='16' height='16' border='0' class='whistle title='whistle' /></a>" : "<img src='" + fFrame.imgServerURL + fFrame.SkinRootPath + "public/images/layout/spacer.gif' width='16' height='16' border='0' class='whistle title='whistle' />" : ""
}
function openStatsInfo(e) {
	window.open("../StatsFrame.aspx?MatchId=" + e)
}
function openLiveInfo(e) {
	window.open("../LiveInfo.aspx?MatchId=" + e)
}
function getRedCardHtml(e) {
	for (var t = "", n = 0; e > n; n++) t += "" == fFrame.imgServerURL ? "<img class='code' border='0' src='/template/public/images/RedCard.gif' width='14' height='11' />" : "<img class='code' border='0' src='" + fFrame.imgServerURL + "template/public/images/RedCard.gif' width='14' height='11' />";
	return t
}
function getStreamingHtml(e, t, n) {
	return fFrame.CanSeeSportStreaming ? n && fFrame.IsUserStreaming ? vendorSetting.IsSpondemo ? "<img src='" + fFrame.imgServerURL + fFrame.SkinRootPath + "public/images/layout/spacer.gif' width='16' height='16' border='0' class='TV' title='TV' />" : "<a href='javascript:openStreaming(\"" + e + "\");'><img src='" + fFrame.imgServerURL + fFrame.SkinRootPath + "public/images/layout/spacer.gif' width='16' height='16' border='0' class='TV' title='TV' /></a>" : "<img border='0' src='" + fFrame.imgServerURL + fFrame.SkinRootPath + "public/images/layout/spacer.gif' width='16' height='16' border='0' class='TV' title='TV' />" : ""
}
function getFavoritesHtml(e, t, n, d) {
	if (1 == fFrame.SiteMode) return "";
	var a = n ? "check.gif" : "uncheck.gif";
	return "<div id='fav_" + e + "' style='display:inline'><a href='javascript:addFavorites(\"" + e + '","' + t + '",' + n + "," + d + ");'><img border='0' src='" + fFrame.imgServerURL + "template/public/images/" + a + "' /></a></div>"
}
function getScoreHtml(e, t) {
	return 1 == fFrame.SiteMode ? "" : "<div id='sco_" + e + "' style='display:inline'><a href='javascript:showScores(\"" + e + '","' + t + "\");'>Score</a></div>"
}
function bet(e, t, n, d, a) {
	0 != a && "" != a && AddBetTicket(n, d, a)
}
function openStreaming(e) {
	fFrame.StreamingFrame = fFrame.window.open("../StreamingFrame.aspx?Matchid=" + e, "StreamingFrame", "top=200,left=300,height=520,width=525,status=no,toolbar=no,menubar=no,resizable=yes,location=no"), fFrame.StreamingFrame.focus()
}
function openLeague(e, t, n, d, a, r, o) {
	document.getElementById("oPopContainer").innerHTML = "";
	var s = document.getElementById("PopFrame"),
		_ = 0 == fFrame.LastSelectedMenu ? "0,1,2" : fFrame.LastSelectedMenu;
	s && (s.src = "League.aspx?Sport=" + d + "&Market=" + n + "&Bettype=" + a + "&Mix=" + r + "&GameMode=" + _ + "&Page=" + o + "_data.aspx");
	var i = document.getElementById("PopDiv");
	i.style.width = e;
	var l = document.getElementById("PopTitleText");
	if (l.style.width = e + "px", l.innerHTML = t, null == PopLauncher) {
		var u = document.getElementById("PopTitle"),
			c = document.getElementById("PopCloser");
		PopLauncher = new DivLauncher(i, u, c)
	}
	PopLauncher.open(300, 50)
}
function checkLeague() {
	var e = document.getElementById("chkLFAll");
	e.checked = !1
}
function checkAll() {
	var e = document.LeagueForm.LF,
		t = document.getElementById("chkLFAll");
	for (i = 0; i < e.length; i++) e[i].checked = t.checked
}
function go() {
	var e = document.getElementById("chkLFAll");
	if (e.checked) {
		var t = document.getElementsByName("LF");
		for (i = 0; i < t.length; i++) t[i].checked = !1;
		e.checked = !0
	}
	btnstop(), document.LeagueForm.Game.value = fFrame.LastSelectedMenu, document.LeagueForm.Market.value = document.DataForm.Market.value, document.LeagueForm.submit(), PopLauncher.close()
}
function GetEventBGColor(e) {
	var t = "";
	return "1" == fFrame.SiteMode || "0" == fFrame.SiteMode ? t = "0" == e ? "#C6D4F1" : "#E4E4E4" : "2" == fFrame.SiteMode && (t = "1" == fFrame.Deposit_SiteMode || "2" == fFrame.Deposit_SiteMode ? "0" == e ? "#ffffff" : "#efefef" : "0" == e ? "#E5E5E5" : "#F5F5F5"), t
}
function GetLiveBGColor(e) {
	var t = "";
	return "1" == fFrame.SiteMode || "0" == fFrame.SiteMode ? t = "0" == e ? "#FFCCBC" : "#ffddd2" : "2" == fFrame.SiteMode && (t = "1" == fFrame.Deposit_SiteMode || "2" == fFrame.Deposit_SiteMode ? "0" == e ? "#ffccbc" : "#ffddd2" : "0" == e ? "#F9E6E6" : "#FBF0F0"), t
}
function changeOddsType(e) {
	var t = document.getElementById("selOddsType");
	t.value != e && (t.value = e), document.DataForm.OddsType.value = e, document.DataForm.RT.value = "W", refreshData()
}
function showLeagueOdds(e, t, n) {
	window.location.href = "Match.aspx?Scope=League&Id=" + e + "&Sport=" + t + "&Market=" + n
}
function showMatchOdds(e, t, n) {
	window.location.href = "Match.aspx?Scope=Match&Id=" + e + "&Sport=" + t + "&Market=" + n
}
function GetLiveBGCls(e) {
	var t = "";
	return t = "0" == e ? "bglivelight" : "bglive"
}
function GetEvenBGCls(e) {
	var t = "";
	return t = "0" == e ? "oddstr1" : "oddstr2"
}
function GetOutBGCls(e) {
	return fFrame.IsCssGenerator ? "0" == e ? ReturnCls = "oddstr1" : ReturnCls = "oddstr2" : "0" == e ? ReturnCls = "oddstr1" : ReturnCls = "oddstr2", ReturnCls
}
function EuroddsKeeper() {
	function e(e) {
		var t = "";
		return void 0 != e && (t = e.innerHTML, t = t.replace(/%7B/g, "{"), t = t.replace(/%7D/g, "}"), t = t.replace(/[	\n]/g, "")), t
	}
	function t(e) {
		var t = S.TemplateFrame.getElementById("tmplOdds_" + e);
		if (null != t) {
			var n = t.parentNode.innerHTML;
			return n = n.substring(0, n.indexOf(t.innerHTML)), n = n.substr(n.lastIndexOf("<"))
		}
		return "<table>"
	}
	function n(e) {
		if (null == R) return "";
		var t = R;
		return t = _replaceTags(S.EventList[e], t), null != S.afterNewDate && (t = S.afterNewDate(S.EventList, e, t)), t
	}
	function d(e) {
		var t = "True" == S.EventList[e].FlagLive ? g : y;
		return null == t ? "" : (t = _replaceTags(S.EventList[e], t), null != S.afterNewLeague && (t = S.afterNewLeague(S.EventList, e, t)), t)
	}
	function a(t, n) {
		var d = L[n];
		if (null == d) {
			var a = S.TemplateFrame.getElementById("tmplHeader_" + n);
			d = e(a), d = _formatTemplate(d, "{%", "}"), L[n] = d
		}
		return d = _replaceTags(S.EventList[t], d), null != S.afterNewHeader && (d = S.afterNewHeader(S.EventList, t, n, d)), d
	}
	function r(t, n) {
		var d, a, r = "True" == S.EventList[t].FlagLive;
		if (r) {
			var a = I[n];
			if (null == a) {
				var o = S.TemplateFrame.getElementById("tmplOdds_" + n + "_L");
				null == o && (o = S.TemplateFrame.getElementById("tmplOdds_" + n)), a = e(o), a = _formatTemplate(a, "{%", "}"), I[n] = a
			}
		} else {
			var a = M[n];
			if (null == a) {
				var o = S.TemplateFrame.getElementById("tmplOdds_" + n);
				a = e(o), a = _formatTemplate(a, "{%", "}"), M[n] = a
			}
		}
		if (13 == n) {
			var s = S.EventList[t];
			0 == s.Odds_13_HY && (S.EventList[t].Odds_13_HY = ""), 0 == s.Odds_13_HN && (S.EventList[t].Odds_13_HN = ""), 0 == s.Odds_13_AY && (S.EventList[t].Odds_13_AY = ""), 0 == s.Odds_13_AN && (S.EventList[t].Odds_13_AN = "")
		}
		return d = _replaceTags(S.EventList[t], a), null != S.afterNewEvent && (d = S.afterNewEvent(S.EventList, t, d, r)), d
	}
	function o(e) {
		for (var t = 0; t < e.length; t++) {
			var n = e[t][0],
				d = e[t][1],
				a = e[t][2],
				r = e[t][3],
				o = e[t][4],
				s = e[t][5],
				_ = e[t][6],
				i = f[n];
			if (null != i) {
				for (; i < S.EventList.length && S.EventList[i].MUID == n;) {
					var l = S.EventList[i];
					if (l.FlagLive = "True", "8" != S.EventList[i].Sporttype && (l.ShowTime = d), l.LivePeriod = o, l.CsStatus = a, l.InjuryTime = r, l.ScoreH != s || l.ScoreA != _) l.ScoreH = s, l.ScoreA = _, l.Changed_Score = O, A[n] = (new Date).getTime();
					else {
						var u = A[n];
						if (null != u) if ((new Date).getTime() - u > 3e4) {
							A[n] = void 0;
							for (var t = i; t < S.EventList.length; t++) {
								var c = S.EventList[t];
								if (c.MUID != n) break;
								c.Changed_Score = ""
							}
						} else l.Changed_Score = O
					}
					i++
				}
				h[n] = "live"
			}
		}
	}
	function s(e) {
		for (var t = 0; t < e.length; t++) {
			var n = e[t][0],
				d = f[n];
			if (null != d) {
				for (; d < S.EventList.length && S.EventList[d].MUID == n;) {
					var a = S.EventList[d];
					"True" != a.FlagLive && (a.ShowTime = e[t][1]), a.StatsId = e[t][2], a.SportRadar = e[t][3], a.StreamingId = e[t][4], a.Favorite = e[t][5], a.HomeName = e[t][6], a.AwayName = e[t][7], d++
				}
				h[n] = "Match"
			}
		}
	}
	function _(e) {
		var t = new Array;
		for (var n in v) if (!isNaN(n)) {
			var d = T[n];
			if (null == d) continue;
			null != S.EventList[d] && (S.EventList[d].OddsChangedCls = ""), t[n] = "oddsClear"
		}
		for (var a = 0; a < e.length; a++) {
			var r = (e[a][0], e[a][1]),
				n = e[a][2],
				d = T[n],
				o = S.convertBettype(r),
				s = _hashData(e[a], p[o]),
				_ = 0,
				i = !1;
			for (var l in s) _ >= 3 && S.EventList[d][l] != s[l] && (S.EventList[d][l] = s[l], i = !0), _++;
			i && (S.EventList[d].OddsChangedCls = O, t[n] = "oddsNew")
		}
		v = t
	}
	function i(e) {
		for (var t = 0; t < e.length; t++) {
			for (var n = e[t], d = f[n], a = d + 1; a < S.EventList.length;) {
				if (S.EventList[a].MUID != n) {
					a--;
					break
				}
				a++
			}
			S.EventList = arrayRemove(S.EventList, d, a);
			for (var r = S.EventList.length - 1; r >= d; r--) f[S.EventList[r].MUID] = r;
			A[n] = null
		}
	}
	function l(e) {
		for (var t, n, d = 0; d < e.length; d++) {
			n = _hashData(e[d], S.DataTags), "" == n.LeagueId && (n.LeagueId = t.LeagueId, n.LeagueName = t.LeagueName), "" == n.MUID && (n.MUID = t.MUID, n.MatchId = t.MatchId, n.MatchCode = t.MatchCode, n.HomeName = t.HomeName, n.AwayName = t.AwayName, n.KickoffTime = t.KickoffTime, n.ShowTime = t.ShowTime, n.StatsId = t.StatsId, n.SportRadar = t.SportRadar, n.StreamingId = t.StreamingId, n.Favorite = t.Favorite, n.ScoreH = t.ScoreH, n.ScoreA = t.ScoreA, n.MoreCount = t.MoreCount), n.KickoffDate = n.KickoffTime.substring(0, 8), n.BlockId = S.convertBettype(n.Bettype), n.ColSpan = F[n.BlockId];
			for (var a = p[n.BlockId], r = 2; r < a.length; r++) n[a[r]] = e[d][E.length + r - 2];
			var o;
			1 == S.SortType ? (o = S.findIndex("KickoffTime", n.KickoffTime), o = S.adjustIndex1(o, "KickoffTime", n.KickoffTime, n.MatchCode)) : (o = S.findIndex("MatchCode", n.MatchCode), o = S.adjustIndex0(o, "MatchCode", n.MatchCode, n.MUID)), t = n, S.EventList = arrayInsert(S.EventList, o, new Array(n)), h[n.MUID] = "ins"
		}
	}
	function u(e) {
		for (var t in e) {
			h[t] = "srt";
			for (var n = e[t], d = f[t], a = d + 1; a < S.EventList.length;) {
				if (S.EventList[a].MUID != t) {
					a--;
					break
				}
				a++
			}
			for (var r = S.EventList[d].MatchCode, o = S.EventList.slice(d, a + 1), s = 1 == S.SortType ? "KickoffTime" : "MatchCode", _ = 0; _ < o.length; _++) o[_][s] = n;
			S.EventList = arrayRemove(S.EventList, d, a);
			var i;
			1 == S.SortType ? (i = S.findIndex("KickoffTime", n), i = S.adjustIndex1(i, "KickoffTime", n, r)) : (i = S.findIndex("MatchCode", n), i = S.adjustIndex0(i, "MatchCode", n, t)), S.EventList = arrayInsert(S.EventList, i, o);
			for (var l = i > d ? d : i, _ = S.EventList.length - 1; _ >= l; _--) f[S.EventList[_].MUID] = _
		}
	}
	var c = "tmplDate",
		D = "tmplLeague",
		m = "tmplLeague_L",
		O = "Odds_Upd",
		E = new Array;
	E[0] = "MUID", E[1] = "MatchId", E[2] = "MatchCode", E[3] = "MatchCount", E[4] = "LeagueId", E[5] = "LeagueName", E[6] = "HomeName", E[7] = "AwayName", E[8] = "KickoffTime", E[9] = "StatsId", E[10] = "SportRadar", E[11] = "StreamingId", E[12] = "ShowTime", E[13] = "HasLive", E[14] = "Favorite", E[15] = "FlagLive", E[16] = "LivePeriod", E[17] = "CsStatus", E[18] = "InjuryTime", E[19] = "ScoreH", E[20] = "ScoreA", E[21] = "RedCardH", E[22] = "RedCardA", E[23] = "MoreCount", E[24] = "Sporttype", E[25] = "Bettype";
	var p = new Array;
	p[0] = new Array("MUID", "BetType", "OddsId", "Odds_0"), p[1] = new Array("MUID", "BetType", "OddsId", "Value_1", "Odds_1_H", "Odds_1_A", "FavorF"), p[2] = new Array("MUID", "BetType", "OddsId", "Odds_2_O", "Odds_2_E"), p[3] = new Array("MUID", "BetType", "OddsId", "Goal_3", "Odds_3_O", "Odds_3_U"), p[4] = new Array("MUID", "BetType", "OddsId", "Odds_4_00", "Odds_4_01", "Odds_4_02", "Odds_4_03", "Odds_4_04", "Odds_4_05", "Odds_4_10", "Odds_4_11", "Odds_4_12", "Odds_4_13", "Odds_4_14", "Odds_4_20", "Odds_4_21", "Odds_4_22", "Odds_4_23", "Odds_4_24", "Odds_4_30", "Odds_4_31", "Odds_4_32", "Odds_4_33", "Odds_4_34", "Odds_4_40", "Odds_4_41", "Odds_4_42", "Odds_4_43", "Odds_4_44", "Odds_4_50"), p[5] = new Array("MUID", "BetType", "OddsId", "Odds_5_1", "Odds_5_X", "Odds_5_2"), p[6] = new Array("MUID", "BetType", "OddsId", "Odds_6_01", "Odds_6_23", "Odds_6_46", "Odds_6_7"), p[7] = new Array("MUID", "BetType", "OddsId", "Value_7", "Odds_7_H", "Odds_7_A", "FavorH1"), p[8] = new Array("MUID", "BetType", "OddsId", "Goal_8", "Odds_8_O", "Odds_8_U"), p[12] = new Array("MUID", "BetType", "OddsId", "Odds_12_O", "Odds_12_E"), p[14] = new Array("MUID", "BetType", "OddsId", "Odds_14_NO", "Odds_14_HF", "Odds_14_HL", "Odds_14_AF", "Odds_14_AL"), p[15] = new Array("MUID", "BetType", "OddsId", "Odds_15_1", "Odds_15_X", "Odds_15_2"), p[16] = new Array("MUID", "BetType", "OddsId", "Odds_16_HH", "Odds_16_HD", "Odds_16_HA", "Odds_16_DH", "Odds_16_DD", "Odds_16_DA", "Odds_16_AH", "Odds_16_AD", "Odds_16_AA"), p[20] = new Array("MUID", "BetType", "OddsId", "Odds_20_H", "Odds_20_A"), p[21] = new Array("MUID", "BetType", "OddsId", "Odds_21_H", "Odds_21_A"), p[24] = new Array("MUID", "BetType", "OddsId", "Odds_24_1", "Odds_24_X", "Odds_24_2"), p[26] = new Array("MUID", "BetType", "OddsId", "Odds_26_1", "Odds_26_X", "Odds_26_2"), p[25] = new Array("MUID", "BetType", "OddsId", "Odds_25_H", "Odds_25_A"), p[27] = new Array("MUID", "BetType", "OddsId", "Odds_27_H", "Odds_27_A"), p[13] = new Array("MUID", "BetType", "OddsId", "Odds_13_HY", "Odds_13_HN", "Odds_13_AY", "Odds_13_AN"), p[28] = new Array("MUID", "BetType", "OddsId", "Odds_28_1", "Odds_28_X", "Odds_28_2", "Odds_28_hdp1", "Odds_28_hdpX", "Odds_28_hdp2"), p[121] = new Array("MUID", "BetType", "OddsId", "Odds_121_A", "Odds_121_H"), p[122] = new Array("MUID", "BetType", "OddsId", "Odds_122_H", "Odds_122_A"), p[123] = new Array("MUID", "BetType", "OddsId", "Odds_123_H", "Odds_123_A"), p[30] = new Array("MUID", "BetType", "OddsId", "Odds_30_00", "Odds_30_01", "Odds_30_02", "Odds_30_03", "Odds_30_04", "Odds_30_10", "Odds_30_11", "Odds_30_12", "Odds_30_13", "Odds_30_20", "Odds_30_21", "Odds_30_22", "Odds_30_23", "Odds_30_30", "Odds_30_31", "Odds_30_32", "Odds_30_33", "Odds_30_40"), p[126] = new Array("MUID", "BetType", "OddsId", "Odds_126_01", "Odds_126_23", "Odds_126_4"), p[127] = new Array("MUID", "BetType", "OddsId", "Odds_127_NO", "Odds_127_HF", "Odds_127_HL", "Odds_127_AF", "Odds_127_AL"), p[128] = new Array("MUID", "BetType", "OddsId", "Odds_128_OO", "Odds_128_OE", "Odds_128_EO", "Odds_128_EE"), p[133] = new Array("MUID", "BetType", "OddsId", "Odds_133_HY", "Odds_133_HN"), p[134] = new Array("MUID", "BetType", "OddsId", "Odds_134_AY", "Odds_134_AN"), p[135] = new Array("MUID", "BetType", "OddsId", "Odds_135_Y", "Odds_135_N"), p[140] = new Array("MUID", "BetType", "OddsId", "Odds_140_1H", "Odds_140_2H", "Odds_140_TIE"), p[141] = new Array("MUID", "BetType", "OddsId", "Odds_141_1H", "Odds_141_2H", "Odds_141_TIE"), p[142] = new Array("MUID", "BetType", "OddsId", "Odds_142_1H", "Odds_142_2H", "Odds_142_TIE"), p[145] = new Array("MUID", "BetType", "OddsId", "Odds_145_Y", "Odds_145_N"), p[146] = new Array("MUID", "BetType", "OddsId", "Odds_146_Y", "Odds_146_N"), p[147] = new Array("MUID", "BetType", "OddsId", "Odds_147_HY", "Odds_147_HN"), p[148] = new Array("MUID", "BetType", "OddsId", "Odds_148_AY", "Odds_148_AN"), p[149] = new Array("MUID", "BetType", "OddsId", "Odds_149_HY", "Odds_149_HN"), p[150] = new Array("MUID", "BetType", "OddsId", "Odds_150_AY", "Odds_150_AN"), p[151] = new Array("MUID", "BetType", "OddsId", "Odds_151_1X", "Odds_151_2X", "Odds_151_12"), p[152] = new Array("MUID", "BetType", "OddsId", "Odds_152_0000", "Odds_152_0010", "Odds_152_0001", "Odds_152_0020", "Odds_152_0011", "Odds_152_0002", "Odds_152_0030", "Odds_152_0021", "Odds_152_0012", "Odds_152_0003", "Odds_152_004UP", "Odds_152_1010", "Odds_152_1020", "Odds_152_1011", "Odds_152_1030", "Odds_152_1021", "Odds_152_1012", "Odds_152_104UP", "Odds_152_0101", "Odds_152_0111", "Odds_152_0102", "Odds_152_0121", "Odds_152_0112", "Odds_152_0103", "Odds_152_014UP", "Odds_152_1111", "Odds_152_1121", "Odds_152_1112", "Odds_152_114UP", "Odds_152_2020", "Odds_152_2030", "Odds_152_2021", "Odds_152_204UP", "Odds_152_0202", "Odds_152_0212", "Odds_152_0203", "Odds_152_024UP", "Odds_152_2121", "Odds_152_214UP", "Odds_152_1212", "Odds_152_124UP", "Odds_152_3030", "Odds_152_304UP", "Odds_152_0303", "Odds_152_034UP", "Odds_152_4UP4UP"), p[501] = new Array("MUID", "BetType", "OddsId", "Odds_501_H", "Odds_501_A", "Odds_501_CS10", "Odds_501_CS20"), p[502] = new Array("MUID", "BetType", "OddsId", "Odds_502_1", "Odds_502_X", "Odds_502_2");
	var F = new Array;
	fFrame.IsCssGenerator ? (F[1] = 8, F[2] = 8, F[3] = 8, F[4] = 3, F[5] = 9, F[6] = 3, F[7] = 8, F[8] = 8, F[12] = 8, F[14] = 3, F[15] = 9, F[16] = 4, F[20] = 7, F[21] = 4) : (F[1] = 8, F[2] = 8, F[3] = 8, F[4] = 3, F[5] = 9, F[6] = 3, F[7] = 8, F[8] = 8, F[12] = 8, F[14] = 3, F[15] = 9, F[16] = 4, F[20] = 7);
	var S = this,
		R = void 0,
		y = void 0,
		g = void 0,
		L = new Array,
		I = new Array,
		M = new Array,
		f = new Array,
		T = new Array,
		h = new Array,
		v = new Array,
		A = new Array;
	this.DivBase = 2, this.HashHeader = null, this.DataTags = null, this.EventList = null, this.TemplateFrame = null, this.DataFrame = null, this.BetTypes = null, this.SubTitleField, this.RegenEverytime = !1, this.SortType = 0, this.LeagueCloseMap = new Array, this.DateMap = new Array, this.convertBettype = function(e) {
		var t;
		switch (e) {
		default:
			t = e
		}
		return t
	}, this.setTemplate = function(t) {
		t.contentDocument ? this.TemplateFrame = t.contentDocument : t.contentWindow ? this.TemplateFrame = t.contentWindow.document : this.TemplateFrame = t.Document;
		var n = this.TemplateFrame.getElementById(c);
		null != n && (R = e(n), R = _formatTemplate(R, "{%", "}")), n = this.TemplateFrame.getElementById(D), null != n && (y = e(n), y = _formatTemplate(y, "{%", "}")), n = this.TemplateFrame.getElementById(m), null == n ? g = y : (g = e(n), g = _formatTemplate(g, "{%", "}"))
	}, this.setDatas = function(e) {
		this.DataTags = E;
		for (var t = new Array(e.length), n = 0; n < e.length; n++) {
			var d = _hashData(e[n], E);
			if ("" == d.LeagueId) {
				var a = t[n - 1];
				d.LeagueId = a.LeagueId, d.LeagueName = a.LeagueName
			}
			if ("" == d.MUID) {
				var a = t[n - 1];
				d.MUID = a.MUID, d.MatchId = a.MatchId, d.MatchCode = a.MatchCode, d.HomeName = a.HomeName, d.AwayName = a.AwayName, d.KickoffTime = a.KickoffTime, d.ShowTime = a.ShowTime, d.StatsId = a.StatsId, d.SportRadar = a.SportRadar, d.StreamingId = a.StreamingId, d.Favorite = a.Favorite, d.ScoreH = a.ScoreH, d.ScoreA = a.ScoreA, d.MoreCount = a.MoreCount, d.FlagLive = a.FlagLive, d.ColSpan = a.ColSpan
			} else if ("False" == d.FlagLive) {
				var r = d.ShowTime.split(" ");
				d.ShowTime = r[0] + " " + r[1] + "<br/>" + r[2] + " " + r[3]
			} else "8" == d.Sporttype && (d.ShowTime = "!Live");
			d.KickoffDate = d.KickoffTime.substring(0, 8), d.BlockId = this.convertBettype(d.Bettype), d.ColSpan = F[d.BlockId], null != this.afterSetData && this.afterSetData(n, d, t);
			var o = p[d.BlockId];
			if (void 0 != o) for (var s = 2; s < o.length; s++) d[o[s]] = e[n][E.length + s - 2];
			t[n] = d
		}
		this.EventList = t
	}, this.paintOddsTable = function() {
		var e = new Array,
			o = new Array;
		new Array;
		this.DateMap = new Array;
		for (var s, _, i = 0; i < this.EventList.length; i++) {
			var l = this.EventList[i],
				u = l.Bettype,
				c = this.convertBettype(u);
			T[l.OddsId] = i, null == e[c] && (e[c] = new Array, o[c] = new Array), s = this.EventList[i].MUID, _ != s && (_ = s, f[s] = i);
			var D = l.KickoffDate;
			this.DateMap[D] = D;
			var m = null,
				O = l.LeagueId,
				E = null;
			o[c].length > 0 && (m = o[c][o[c].length - 1].KickoffDate, E = o[c][o[c].length - 1].LeagueId), D != m && (e[c].push(n(i)), E = null), O != E && (e[c].push(d(i)), e[c].push(a(i, c))), o[c].push(l), l.Div = o[c].length % this.DivBase;
			var p = r(i, c);
			e[c].push(p)
		}
		for (var i = 0; i < e.length; i++) if (null != e[i] && e[i].length > 0) {
			var F = e[i].join("");
			F = t(i) + F + "</table>";
			var S = document.getElementById("OddsContainer_" + i);
			null != S && (S.innerHTML = F), null != this.afterRepaintTable && this.afterRepaintTable(i, S, this.EventList)
		}
		null != this.afterRepaintAllTable && this.afterRepaintAllTable(this.EventList, o)
	}, this.refreshOddsTable = function(e, t, n, d, a, r, c) {
		h = new Array, s(a), o(d), _(r), null != this.updateAppendFields && this.updateAppendFields(c, this.EventList, f, h), i(e), u(t), l(n), this.regenTableHtml()
	}, this.findIndex = function(e, t) {
		var n, d = 0,
			a = this.EventList.length - 1;
		if (0 == this.EventList.length) return 0;
		if (t >= this.EventList[a][e]) return a + 1;
		if (t < this.EventList[d][e]) return d;
		for (; a >= d;) {
			n = Math.ceil((d + a) / 2);
			var r = this.EventList[n][e];
			if (t > r) d = n + 1;
			else if (r > t) a = n - 1;
			else for (n += 1; n < this.EventList.length; n++) if (this.EventList[n][e] != t) return n
		}
		for (n + 1 >= this.EventList.length && (n = this.EventList.length - 2), n += 1; n >= 0; n--) if (this.EventList[n][e] <= t) return n + 1;
		return 0
	}, this.adjustIndex0 = function(e, t, n) {
		for (var d = e - 1; d >= 0 && this.EventList[d].MatchCode == t; d--) if (this.EventList[d].MUID >= n) return d + 1;
		return e
	}, this.adjustIndex1 = function(e, t, n) {
		for (var d = e - 1; d >= 0 && this.EventList[d].KickoffTime == t; d--) if (this.EventList[d].MatchCode >= n) return d + 1;
		return e
	}, this.adjustIndex1st = function(e, t, n, d) {
		var a;
		for (a = e - 1; a >= 0 && this.EventList[a][t] == n && this.EventList[a].MUID != d; a--);
		var r;
		for (r = a; r >= 0 && this.EventList[r][t] == n && this.EventList[r].MUID == d; r--);
		return r + 1
	}, this.regenTableHtml = function() {
		var e = new Array,
			o = new Array,
			s = (new Array, new Array);
		f = new Array, T = new Array, this.DateMap = new Array;
		for (var _, i, l, u, c, D, m, O, E, p = 0; p < this.EventList.length; p++) {
			var F = this.EventList[p];
			_ = F.Bettype, i = this.convertBettype(_), T[F.OddsId] = p;
			var S = F.BlockId + SEPARATOR + F.KickoffDate + SEPARATOR + F.LeagueId;
			null != this.LeagueCloseMap[S] && (s[S] = "closed"), null == e[i] && (e[i] = new Array, o[i] = new Array), m = this.EventList[p].MUID, O != m && (O = m, f[m] = p), l = F.KickoffDate, this.DateMap[l] = l, c = F.LeagueId, l = l.substr(0, 8), u = null, D = null, o[i].length > 0 && (u = o[i][o[i].length - 1].KickoffTime, u = u.substr(0, 8), D = o[i][o[i].length - 1].LeagueId), l != u && (e[i].push(n(p)), D = null), c != D && (e[i].push(d(p)), e[i].push(a(p, i))), o[i].push(F), F.Div = o[i].length % this.DivBase, E = r(p, i), e[i].push(E)
		}
		this.LeagueCloseMap = s;
		for (var p = 0; p < e.length; p++) if (null != e[p] && e[p].length > 0) {
			var R = e[p].join("");
			R = t(p) + R + "</table>";
			var y = document.getElementById("OddsContainer_" + p);
			null != y && (y.innerHTML = R), null != this.afterRepaintTable && this.afterRepaintTable(p, y, this.EventList)
		}
		null != this.afterRepaintAllTable && this.afterRepaintAllTable(this.EventList, o)
	}
}
function _replaceTags(e, t) {
	var n = new Array(2 * t.length - 1);
	n[0] = t[0];
	for (var d, a = 1; a < t.length; a++) d = 2 * a, n[d - 1] = e[t[a][0]], n[d] = t[a][1];
	return n.join("")
}
function replaceTags(e, t) {
	return _replaceTags(e, _formatTemplate(t, "{%", "}"))
}
function _formatTemplate(e, t, n) {
	for (var d = e.split(t), a = 1; a < d.length; a++) {
		var r = d[a].indexOf(n);
		d[a] = [d[a].substr(0, r), d[a].substr(r + 1, d[a].length - r)]
	}
	return d
}
function _hashData(e, t) {
	for (var n = new Array, d = 0; d < t.length; d++) n[t[d]] = e[d];
	return n
}
function arrayRemove(e, t, n) {
	if (null == n && (n = t), t > n) return e.concat([]);
	0 > t && (t = 0), n >= e.length && (n = e.length - 1);
	var d = e.slice(0, t),
		a = e.slice(n + 1);
	return d.concat(a)
}
function arrayInsert(e, t, n) {
	if (0 >= t) return n.concat(e);
	if (t >= e.length) return e.concat(n);
	var d = e.slice(0, t),
		a = e.slice(t);
	return d = d.concat(n), d.concat(a)
}
function OMOver(e) {
	e.style.backgroundColor = "#ea0605", e.style.color = "#ffffff"
}
function OMOut(e) {
	e.style.backgroundColor = "#e4e4e4", e.style.color = "#000000"
}
function setOddsDisplay(e, t, n, d, a, r, o) {
	window.clearTimeout(RefresHandle), window.clearTimeout(TimerBtnStar), g_DateOptioner = null, g_BetTypeOptioner = null, g_OddsTypeOptioner = null;
	var s = document.getElementById("DivMainOdds"),
		_ = Onebook.Identity.IsUltron;
	if (("Outright" == d || "151" == t || "152" == t || "153" == t || "180" == t || "0" == t && "l" != n || !_) && (React.unmountComponentAtNode(s), s.innerHTML = ""), SelectedDate = null, g_SelectedBetType = null, g_SelectedBetTypeText = RES_Text_all, "Outright" == d) {
		if (OddsDisp_PathIds = null, OddsDisp_PathNames = null, iRefreshCount = REFRESH_COUNTDOWN, window.clearTimeout(RefresHandle), window.clearTimeout(TimerBtnStar), RefresHandle = window.setTimeout(refreshData, REFRESH_INTERVAL), document.DataForm.action = "/Outright_data.aspx", document.DataForm.Game.value = e, document.DataForm.Sport.value = t, document.DataForm.Scope.value = d, document.DataForm.RT.value = "W", document.DataForm.OddsType.value = "1", document.DataForm.submit(), btnstop(), SetHomeADDisp(0 == t), IsSpondemo) {
			var i = "",
				l = document.getElementById("divADimg");
			l.innerHTML = "<img src='" + SkinRootPath + UserLang + "/images/events/OTEven_01.jpg' width='540' height='104' />", SetHomeADDisp(!1)
		}
	} else if ("151" == t || "152" == t || "153" == t) window.clearTimeout(RefresHandle), RT = "W", SelectRacingType = t, refreshRacingData(), SetHomeADDisp(!1);
	else if ("180" == t) window.clearTimeout(RefresHandle), SetHomeADDisp(!1), LoadData("VirtualSports", "../VirtualSports.aspx"), LoadTmpl(), setTimeout("GetEventData()", 3e3);
	else {
		if ("0" == t && "l" != n && (d = "TopOdds", a = "1", r = "1", o = "Soccer", t = "1", n = "topodds"), document.DataForm.Game.value = e, document.DataForm.Sport.value = t, document.DataForm.Market.value = n, document.DataForm.Scope.value = d, document.DataForm.Id.value = a, _) {
			var u = {
				Game: e,
				Scope: d,
				SportType: t,
				FixtureType: n,
				Id: a
			},
				c = {
					Ids: r,
					Names: o
				};
			Onebook.Identity.SelectedOddsType = fFrame.g_SelectedOddsType, OddsDisplay(u, c, s), "Match" == d || "League" == d || "Country" == d ? $("#EventAD").hide() : $("#EventAD").show()
		} else {
			OddsDisp_PathIds = null, OddsDisp_PathNames = null, iRefreshCount = REFRESH_COUNTDOWN, RefresHandle = window.setTimeout(refreshData, REFRESH_INTERVAL);
			var D = "Match" == d ? d : "League";
			window.TMPL_ID = D + "_tmpl", window.TMPL_URL = "Match_tmpl.aspx?Scope=" + D, window.ODDSBODY_ID = D, window.ODDSBODY_URL = "Match.aspx?Scope=" + D, document.DataForm.action = "Match_data.aspx", document.DataForm.OddsType.value = fFrame.g_SelectedOddsType, document.DataForm.RT.value = "W", document.DataForm.submit(), btnstop(), OddsDisp_PathIds = r, OddsDisp_PathNames = o, SetHomeADDisp("Match" == d || "League" == d || "Country" == d ? !1 : !0)
		}
		if (IsSpondemo) {
			var i = "";
			if (i = 10 > t ? "0" + t : t, 154 == t && (i = "151"), t > 0) {
				document.getElementById("EventAD").style.display = "none";
				var l = document.getElementById("divADimg");
				l.innerHTML = "<img src='" + SkinRootPath + UserLang + "/images/events/" + i + "Even_01.jpg' width='540' height='104' />", document.getElementById("divADimg").style.display = ""
			} else document.getElementById("divADimg").style.display = "none"
		}
	}
	AutoRefreshMenuData()
}
function OddsDisplay(e, t, n) {
	var d = Onebook.Widget.OddsPanel;
	React.render(React.createElement(d, {
		Breadcrumbs: t,
		MatchDataQstr: e
	}), n)
}
function clickMore_TopFeatured(e, t, n) {
	document.DataForm.Game.value = n, clickMore(e, t)
}
function clickMore_TopLive(e, t, n, d) {
	document.DataForm.Market.value = n, document.DataForm.Game.value = d, clickMore(e, t)
}
function clickMore(e, t) {
	htSession = "", ftSession = "", SelectedDate = null, g_SelectedBetType = null, g_SelectedBetTypeText = RES_Text_all, RefreshCount = REFRESH_COUNTDOWN, window.clearTimeout(RefresHandle), window.clearTimeout(TimerBtnStar), RefresHandle = window.setTimeout(refreshData, REFRESH_INTERVAL), SetHTFTCSSelOdds();
	var n = "Match";
	if (window.TMPL_ID = n + "_tmpl", window.TMPL_URL = "Match_tmpl.aspx?Scope=" + n, window.ODDSBODY_ID = n, window.ODDSBODY_URL = "Match.aspx?Scope=" + n, document.DataForm.action = "Match_data.aspx", document.DataForm.Sport.value = e, document.DataForm.Scope.value = "Match", document.DataForm.Id.value = t, document.DataForm.RT.value = "W", document.DataForm.submit(), btnstop(), SetHomeADDisp(!1), IsSpondemo) {
		var d = document.getElementById("divADimg");
		d.innerHTML = ""
	}
}
function setPathLink() {
	var e = "";
	if (null != OddsDisp_PathIds && null != OddsDisp_PathNames) {
		OddsDisp_PathIds += "";
		var t = OddsDisp_PathIds.split("_"),
			n = OddsDisp_PathNames.split("_");
		if (n.length >= 3) {
			var d = n[2].lastIndexOf("(");
			d > 0 && (n[2] = n[2].substr(0, d))
		}
		var a = document.getElementById("divLeagueTitle");
		if (null != a && (a.innerHTML = n[n.length - 1]), t.length == n.length) {
			for (var r = ["Sport", "Country", "League", "Match"], o = new Array, s = new Array, _ = new Array, i = 0; i < t.length; i++) {
				s.push(t[i]), _.push(n[i]);
				var l = "<a href='javascript:setOddsDisplay(\"" + document.DataForm.Game.value + '", "' + t[0] + '", "' + document.DataForm.Market.value + '", "' + r[i] + '", "' + t[i] + '", "' + s.join("_") + '", "' + _.join("_") + '" , "' + fFrame.g_SelectedOddsType + "\")'>";
				l += n[i] + "</a>", o.push(l)
			}
			e = o.join(" > ")
		}
	}
	var a = document.getElementById("divPathLink");
	a.innerHTML = e
}
function ShowBetList(e, t) {
	if (arrTicks = new Array, document.DataForm.CT.value = t, "U" == e) {
		if (null == g_OddsKeeper) return void refreshData();
		g_OddsKeeper.refreshOddsTable(DataFrame.Del, DataFrame.Srt, DataFrame.Ins, DataFrame.uL, DataFrame.uM, DataFrame.uO)
	} else {
		if (!initialOddsBody(ODDSBODY_ID, ODDSBODY_URL, "ShowBetList('" + e + "','" + t + "');")) return;
		if (!initialTmpl(TMPL_ID, TMPL_URL, "ShowBetList('" + e + "','" + t + "');")) return;
		setPathLink(), g_OddsKeeper = new EuroddsKeeper, g_OddsKeeper.afterNewEvent = afterNewEvent, g_OddsKeeper.afterNewLeague = afterNewLeague, g_OddsKeeper.afterNewHeader = afterNewHeader, g_OddsKeeper.afterRepaintAllTable = afterRepaintAllTable, g_OddsKeeper.setTemplate(fFrame.document.getElementById(TMPL_ID)), g_OddsKeeper.setDatas(DataFrame.N), g_OddsKeeper.paintOddsTable(), document.DataForm.RT.value = "U", null != document.getElementById("TVBar") && (MiniTV = !0);
		var n = document.getElementById("divOddsTypeOpt");
		null != n && "" != fFrame.g_SelectedOddsText && (n.innerHTML = "<span>" + fFrame.g_SelectedOddsText + "</span>")
	}
}
function afterNewLeague(e, t, n) {
	var d = e[t],
		a = formatDisplayDate(d.KickoffDate);
	n = "True" == d.FlagLive ? n.replace("{@MatchDate} - ", "") : n.replace("{@MatchDate}", a);
	var r = d.BlockId + SEPARATOR + d.KickoffDate + SEPARATOR + d.LeagueId,
		o = null == g_OddsKeeper.LeagueCloseMap[r] ? "Header-Open" : "Header-Close";
	return n = n.replace("{@Class}", o), o = null == SelectedDate || d.KickoffDate == SelectedDate ? "odds_open" : "odds_close", n = n.replace("{@DisplayCls}", o)
}
function afterNewHeader(e, t, n, d) {
	var a = e[t],
		r = a.BlockId + SEPARATOR + a.KickoffDate + SEPARATOR + a.LeagueId;
	return d = null != SelectedDate && SelectedDate != a.KickoffDate || null != g_OddsKeeper.LeagueCloseMap[r] ? d.replace("{@DisplayCls}", "odds_close") : d.replace("{@DisplayCls}", "odds_open")
}
function afterNewDate(e, t, n) {
	var d = e[t],
		a = d.BlockId + d.KickoffDate,
		r = null == g_OddsKeeper.DateCloseMap[a] ? "Header-Open" : "Header-Close";
	return n.replace("{@Class}", r)
}
function afterNewEvent(e, t, n, d) {
	var a = e[t],
		r = new Array,
		o = a.BlockId + SEPARATOR + a.KickoffDate + SEPARATOR + a.LeagueId;
	null != SelectedDate && SelectedDate != a.KickoffDate || null != g_OddsKeeper.LeagueCloseMap[o] ? r.DisplayCls = "odds_close" : r.DisplayCls = "odds_open", "44" == a.Sporttype ? (r.Home_Cls = "player-red", r.Away_Cls = "player-blue", r.showScore = "odds_close", r.showRound = "", "" == a.ScoreH || "0" == a.ScoreH ? r.Round = "" : r.Round = RES_ROUND + " " + parseInt(a.ScoreH)) : (r.showScore = "", r.showRound = "odds_close", r.Home_Cls = "rborder", r.Away_Cls = "rborder"), d ? r.LiveIcon = "<img src='" + fFrame.imgServerURL + fFrame.SkinRootPath + "public/images/layout/liveicon.gif'><br/>" : a.HasLive ? r.LiveIcon = "livetime" : r.LiveIcon = "";
	var s = a.Bettype;
	switch (s) {
	case 1:
		var _ = "+" + a.Value_1.replace("-", ", +");
		switch (a.FavorF) {
		case "h":
			r.Value_1_H = _.replace(new RegExp("\\+", "g"), "-"), r.Value_1_A = _;
			break;
		case "a":
			r.Value_1_H = _, r.Value_1_A = _.replace(new RegExp("\\+", "g"), "-");
			break;
		default:
			"" != a.Odds_1_H ? (r.Value_1_H = "+0", r.Value_1_A = "-0") : (r.Value_1_H = "", r.Value_1_A = "")
		}
		break;
	case 7:
		var i = "+" + a.Value_7.replace("-", ", ");
		switch (a.FavorH1) {
		case "h":
			r.Value_7_H = i.replace(new RegExp("\\+", "g"), "-"), r.Value_7_A = i;
			break;
		case "a":
			r.Value_7_H = i, r.Value_7_A = i.replace(new RegExp("\\+", "g"), "-");
			break;
		default:
			"" != a.Odds_7_H ? (r.Value_7_H = "+ 0", r.Value_7_A = "- 0") : (r.Value_7_H = "", r.Value_7_A = "")
		}
		break;
	case 28:
		var l = a.Odds_28_hdp1,
			u = a.Odds_28_hdpX,
			c = a.Odds_28_hdp2;
		parseInt(l) < 0 ? (r.Odds_28_hdp1 = l, r.Odds_28_DrawName = a.AwayName) : (r.Odds_28_hdp1 = "+" + l, r.Odds_28_DrawName = a.HomeName), parseInt(u) > 0 ? r.Odds_28_hdpX = "+" + u : r.Odds_28_hdpX = u, parseInt(c) > 0 ? r.Odds_28_hdp2 = "+" + c : r.Odds_28_hdp2 = c
	}
	return d ? (0 == a.LivePeriod ? r.LiveTimeCls = "1" == a.CsStatus ? "HalfTime" : "IsLive" : r.LiveTimeCls = "LiveTime", 0 == a.Div ? (r.Tr_Cls = GetLiveBGCls(a.Div), r.BgColor = GetLiveBGColor(a.Div)) : (r.Tr_Cls = GetLiveBGCls(a.Div), r.BgColor = GetLiveBGColor(a.Div)), r.InjuryTime = a.InjuryTime > "0" ? "+" + a.InjuryTime : "", r.RedCardH = getRedCardHtml(parseInt(a.RedCardH, 10)), r.RedCardA = getRedCardHtml(parseInt(a.RedCardA, 10))) : 0 == a.Div ? (r.Tr_Cls = GetEvenBGCls(a.Div), r.BgColor = GetEventBGColor(a.Div)) : (r.Tr_Cls = GetEvenBGCls(a.Div), r.BgColor = GetEventBGColor(a.Div)), r.Sporttype = document.DataForm.Sport.value, r.ShowTime = a.ShowTime, r.More = 0 == r.More ? "" : " + " + a.MoreCount, r.StatsInfo = "0" == a.StatsId ? "&nbsp;" : getStatsHtml(a.MatchId), r.SportRadar = 0 == a.SportRadar ? "&nbsp;" : getSportRadarHtml(a.MatchId), r.Streaming = "0" == a.StreamingId ? "&nbsp;" : getStreamingHtml(a.MatchId, a.StreamingId, d), r.isParlay = 0, n = _formatTemplate(n, "{@", "}"), n = _replaceTags(r, n)
}
function afterRepaintAllTable(e, t) {
	if (window.clearTimeout(btnStartHandle), btnStartHandle = setTimeout("btnstart()", 3e3), document.getElementById("BetList").style.display = "none", document.getElementById("OddsTr").style.display = "block", 0 == g_OddsKeeper.EventList.length ? (document.getElementById("TrNoInfo").style.display = "block", document.getElementById("OddsTr").style.display = "none") : (document.getElementById("TrNoInfo").style.display = "none", document.getElementById("OddsTr").style.display = "block"), e.length > 0) setupBettypeDisplay(t), setupDateFilter(), setupMatchInfo(e);
	else {
		var n = document.getElementById("divMatchInfo");
		null != n && (n.style.display = "none")
	}
}
function SwitchTVMin() {
	if (MiniTV) {
		var e = document.getElementById("TVBar");
		"TVOpen" == e.className ? (e.className = "TVClose", document.getElementById("TVBox").style.display = "none", document.getElementById("iTV").src = "", document.getElementById("TVFooter").style.display = "none") : (e.className = "TVOpen", document.getElementById("TVBox").style.display = "", document.getElementById("iTV").src = "/StreamingLV.aspx?Matchid=" + g_streaming + "&StreamingSrc=4&TVmode=min", document.getElementById("TVFooter").style.display = "")
	}
}
function SwitchTVMinRefresh() {
	if (MiniTV) {
		var e = document.getElementById("TVBar");
		e.className = "TVOpen", document.getElementById("TVBox").style.display = "", document.getElementById("iTV").src = "/StreamingLV.aspx?Matchid=" + g_streaming + "&StreamingSrc=4&TVmode=min", document.getElementById("TVFooter").style.display = ""
	}
}
function setupMatchInfo(e) {
	var t = e[0];
	if ("Match" != document.DataForm.Scope.value) return MiniTV && (document.getElementById("iTV").src = "", document.getElementById("match_streaming").style.display = "none"), void(g_streaming = "");
	if (0 == e.length) {
		MiniTV && (document.getElementById("iTV").src = "", document.getElementById("match_streaming").style.display = "none"), g_streaming = "";
		var n = document.getElementById("divMatchInfo");
		n.style.display = "none"
	} else {
		var n, t = e[0],
			d = "True" == t.FlagLive;
		n = document.getElementById("spnScoreH"), n.innerHTML = t.ScoreH, n = document.getElementById("spnScoreA"), n.innerHTML = t.ScoreA, n = document.getElementById("divLiveIcon"), n.style.display = d ? "" : "none", n = document.getElementById("TdLive"), n.style.display = d ? "" : "none", n = document.getElementById("spnHomeName"), n.innerHTML = t.HomeName, n.className = "44" == t.Sporttype ? "player-red" : "", n = document.getElementById("spnAwayName"), n.innerHTML = t.AwayName, n.className = "44" == t.Sporttype ? "player-blue" : "", d && "44" == t.Sporttype ? (n = document.getElementById("showRound"), "" == t.ScoreH || "0" == t.ScoreH ? n = "" : n.innerHTML = RES_ROUND + " " + parseInt(t.ScoreH), n = document.getElementById("showScore"), n.style.display = "none") : (n = document.getElementById("showRound"), n.innerHTML = "", n = document.getElementById("showScore"), n.style.display = ""), n = document.getElementById("divShowtime"), n.innerHTML = d ? "" : OddsDisp_MatchShowtime, n = document.getElementById("spnStartTime"), n.innerHTML = t.ShowTime + "+" + t.InjuryTime, n = document.getElementById("spnHomeRedCard"), n.innerHTML = getRedCardHtml(t.RedCardH), n = document.getElementById("spnAwayRedCard"), n.innerHTML = getRedCardHtml(t.RedCardA);
		var a = document.DataForm.Sport.value,
			r = document.getElementById("spnSportSwfTmpl").innerHTML,
			o = d ? "liveim_" + a : "noliveim_" + a;
		r = r.replace(new RegExp("Swf_Name", "g"), o), n = document.getElementById("spnSportSwf"), n.innerHTML = r, n = document.getElementById("tdSportRadar"), n.innerHTML = 0 == t.SportRadar ? "&nbsp;" : getSportRadarHtml(t.MatchId), n = document.getElementById("tdStatsInfo"), n.innerHTML = "0" == t.StatsId ? "&nbsp;" : getStatsHtml(t.MatchId), n = document.getElementById("tdStreaming"), n.innerHTML = "0" == t.StreamingId ? "&nbsp;" : getStreamingHtml(t.MatchId, t.StreamingId, d), "l" == document.DataForm.Market.value && "Match" == document.DataForm.Scope.value ? g_streaming != t.MatchId && ("0" != t.StreamingId ? (g_streaming = t.MatchId, MiniTV && (document.getElementById("iTV").src = "/StreamingLV.aspx?Matchid=" + g_streaming + "&StreamingSrc=4&TVmode=min", document.getElementById("TVBox").style.display = "", document.getElementById("TVBar").className = "TVOpen", document.getElementById("match_streaming").style.display = "", document.getElementById("TVFooter").style.display = "")) : (g_streaming = "", MiniTV && (document.getElementById("iTV").src = "", document.getElementById("match_streaming").style.display = "none"))) : (g_streaming = "", MiniTV && (document.getElementById("iTV").src = "", document.getElementById("match_streaming").style.display = "none")), n = document.getElementById("divMatchInfo"), n.style.display = ""
	}
}
function clickBettypeBar(e) {
	var t = e.id.split("_"),
		n = document.getElementById("OddsContainer_" + t[1]);
	"none" == n.style.display ? (e.className = "Header-Open2", n.style.display = "") : (e.className = "Header-Close2", n.style.display = "none")
}
function setupBettypeDisplay(e) {
	var t, n = document.getElementById("dlBetTypeOpt");
	document.getElementById("betTypeText"), document.getElementById("divBetTypeFilter");
	if (null == g_SelectedBetType || "0" == g_SelectedBetType) for (var d = 0; d < DISPLAY_BETTYPES.length; d++) {
		var a = DISPLAY_BETTYPES[d],
			r = document.getElementById("OddsBlock_" + a);
		if (null != r) {
			var o = document.getElementById("OddsContainer_" + a);
			null != r && (r.style.display = 0 == o.innerHTML.length ? "none" : "block", null != e && null == e[a] && (r.style.display = "none"))
		}
	} else for (var d = 0; d < DISPLAY_BETTYPES.length; d++) {
		var a = DISPLAY_BETTYPES[d],
			r = document.getElementById("OddsBlock_" + a);
		if (null != r) if (a == g_SelectedBetType) {
			var o = document.getElementById("OddsContainer_" + a);
			r.style.display = 0 == o.innerHTML.length ? "none" : "block"
		} else r.style.display = "none"
	}
	if (null != n) {
		t = "<dd><a href=\"javascript:changeSelectBetType('0','" + RES_Text_all + "');\">" + RES_Text_all + "</a></dd>";
		for (var d = 0; d < DISPLAY_BETTYPES.length; d++) {
			var a = DISPLAY_BETTYPES[d];
			null != e[a] && e[a].length > 0 && (t += "<dd><a href=\"javascript:changeSelectBetType('" + a + "','" + RES_BettypeName[a] + "');\">" + RES_BettypeName[a] + "</a></dd>")
		}
		n.innerHTML = t, changeSelectBetType(g_SelectedBetType, g_SelectedBetTypeText)
	}
}
function changeSelectBetType(e, t) {
	var n = document.getElementById("divBetTypeFilter");
	if (n.innerHTML = "<span>" + t + "</span>", null != g_BetTypeOptioner && g_BetTypeOptioner.close(), g_BetTypeOptioner != e) if (g_SelectedBetType = e, g_SelectedBetTypeText = t, "0" == e) for (var d = 0; d < DISPLAY_BETTYPES.length; d++) {
		var a = DISPLAY_BETTYPES[d],
			r = document.getElementById("OddsBlock_" + a),
			o = document.getElementById("OddsHeader_" + a),
			s = document.getElementById("OddsContainer_" + a);
		null != r && (r.style.display = 0 == s.innerHTML.length ? "none" : "block"), null != o && (o.className = "Header-Open2"), null != s && (s.style.display = "")
	} else for (var d = 0; d < DISPLAY_BETTYPES.length; d++) {
		var a = DISPLAY_BETTYPES[d],
			r = document.getElementById("OddsBlock_" + a);
		if (a == e) {
			var o = document.getElementById("OddsHeader_" + a),
				s = document.getElementById("OddsContainer_" + a);
			null != r && (r.style.display = 0 == s.innerHTML.length ? "none" : "block"), null != o && (o.className = "Header-Open2"), null != s && (s.style.display = "")
		} else null != r && (r.style.display = "none")
	}
}
function LeagueRowClick(e) {
	var t = e.id.split("_"),
		n = t[1],
		d = t[2],
		a = t[3],
		r = n + SEPARATOR + d + SEPARATOR + a,
		o = e.className.search("Header-Close") >= 0;
	o ? (g_OddsKeeper.LeagueCloseMap[r] = null, e.className = e.className.replace("Header-Close", "Header-Open")) : (g_OddsKeeper.LeagueCloseMap[r] = "closed", e.className = e.className.replace("Header-Open", "Header-Close"));
	for (var s = "_" + n + "_" + d + "_" + a, _ = e.parentNode.childNodes, i = !1, l = 0; l < _.length; l++) if (null != _[l] && null != _[l].id) if (_[l].id.match("^H" + s) == "H" + s) o ? _[l].className = _[l].className.replace("odds_close", "odds_open") : _[l].className = _[l].className.replace("odds_open", "odds_close");
	else if (_[l].id.match("^O" + s) == "O" + s) i = !0, o ? _[l].className = _[l].className.replace("odds_close", "odds_open") : _[l].className = _[l].className.replace("odds_open", "odds_close");
	else if (i) break
}
function setupDateFilter() {
	var e = document.getElementById("dlDateFilter"),
		t = null;
	if (null != e) {
		var n = new Array,
			d = new Array,
			a = 0;
		for (var r in g_OddsKeeper.DateMap) null != r && "" != r && (d[a] = r.toString(), a++);
		d.sort();
		for (var o = 0; o < d.length; o++) isNaN(d[o]) || (null == t && (t = d[o]), n.push("<dd><a href='javascript:selectDate(\"" + d[o] + "\");'>" + formatDisplayDate(d[o]) + "</a></dd>"));
		if (e.innerHTML = n.join(""), null == SelectedDate) SelectedDate = t;
		else for (var s = 0; s < DISPLAY_BETTYPES.length; s++) {
			var _ = DISPLAY_BETTYPES[s],
				i = document.getElementById("OddsContainer_" + _);
			if (null != i && i.childNodes.length > 0) {
				for (var l = i.childNodes[0].childNodes, u = !0, c = 0; c < l.length; c++) null != l[c] && null != l[c].id && (null == SelectedDate || l[c].id.indexOf("_" + SelectedDate + "_") > 0) && (u = !1);
				var D = document.getElementById("OddsBlock_" + _);
				D.style.display = u ? "none" : ""
			}
		}
		selectDate(SelectedDate)
	}
}
function selectDate(e) {
	var t = document.getElementById("divDateFilter");
	t.innerHTML = "<span>" + formatDisplayDate(e) + "</span>", null != g_DateOptioner && g_DateOptioner.close(), SelectedDate = e;
	for (var n = 0; n < DISPLAY_BETTYPES.length; n++) {
		var d = DISPLAY_BETTYPES[n],
			a = document.getElementById("OddsContainer_" + d);
		if (null != a && a.childNodes.length > 0) {
			for (var r = a.childNodes[0].childNodes, o = !0, s = 0; s < r.length; s++) null != r[s] && null != r[s].id && (null == e || r[s].id.indexOf("_" + e + "_") > 0 ? (r[s].className = r[s].className.replace("odds_close", "odds_open"), r[s].className = r[s].className.replace("Header-Close", "Header-Open"), o = !1) : (r[s].className = r[s].className.replace("odds_open", "odds_close"), r[s].className = r[s].className.replace("Header-Open", "Header-Close")));
			var _ = document.getElementById("OddsBlock_" + d);
			_.style.display = o ? "none" : ""
		}
	}
	if (null == e) g_OddsKeeper.LeagueCloseMap = new Array;
	else for (var i in g_OddsKeeper.LeagueCloseMap) i.indexOf(SEPARATOR + e + SEPARATOR) > 0 && (g_OddsKeeper.LeagueCloseMap[i] = null)
}
function clickDateFilter(e, t) {
	null != g_DateOptioner && (g_DateOptioner = null), g_DateOptioner = new DivOption(document.getElementById("dlDateFilter"), 5), g_DateOptioner.act(t)
}
function formatDisplayDate(e) {
	var t = e.substring(4, 6),
		n = parseInt(t, 10),
		d = e.substring(6, 8);
	return "4200200" == fFrame.SiteId && "ko_eu" == fFrame.UserLang ? t + ko_MONTH_DAY_NAME[0] + " " + d + ko_MONTH_DAY_NAME[1] : MONTH_LIST[n] + " " + d
}
function formatDisplayTime(e) {
	var t = parseInt(e, 10) - 1200 > 0 ? (parseInt(e, 10) - 1200 + 1e4 + "").substring(1, 5) + " PM" : e + " AM";
	return t.substring(0, 2) + ":" + t.substring(2, 7)
}
function clickBetTypeFilter(e, t) {
	null != g_BetTypeOptioner && (g_BetTypeOptioner = null), g_BetTypeOptioner = new DivOption(document.getElementById("dlBetTypeOpt"), 5), g_BetTypeOptioner.act(t)
}
function clickOddsTypeOpt(e, t) {
	null != g_OddsTypeOptioner && (g_OddsTypeOptioner = null), g_OddsTypeOptioner = new DivOption(document.getElementById("dlOddsTypeOpt"), 5), g_OddsTypeOptioner.act(t)
}
function changeSelectOddsType(e, t) {
	fFrame.g_SelectedOddsType != e && (fFrame.g_SelectedOddsType = e, fFrame.g_SelectedOddsText = t, null != g_OddsTypeOptioner && g_OddsTypeOptioner.close(), setOddsDisplay(document.DataForm.Game.value, document.DataForm.Sport.value, document.DataForm.Market.value, document.DataForm.Scope.value, document.DataForm.Id.value, OddsDisp_PathIds, OddsDisp_PathNames))
}
function clickHTCSOpt(e, t) {
	null != g_HTCSOptioner && (g_HTCSOptioner = null), g_HTCSOptioner = new DivOption(document.getElementById("HalfTime_CorrectScore_menu"), 5), g_HTCSOptioner.act(t)
}
function clickFTCSOpt(e, t) {
	null != g_FTCSOptioner && (g_FTCSOptioner = null), g_FTCSOptioner = new DivOption(document.getElementById("FullTime_CorrectScore_menu"), 5), g_FTCSOptioner.act(t)
}
function SetHTFTCSSelOdds() {
	if ("" != htSession && "" != ftSession) {
		document.getElementById("HalfTime_CorrectScore").value = htSession.replace("H", ""), document.getElementById("HalfTime_CorrectScore_Txt").title = document.getElementById("H" + htSession).innerHTML, document.getElementById("HalfTime_CorrectScore_Txt").innerHTML = document.getElementById("H" + htSession).innerHTML;
		for (var e = checkFullTimeArray(document.getElementById("HalfTime_CorrectScore").value), t = 0; t < FullTimeAllArray.length; t++) document.getElementById(FullTimeAllArray[t]).style.display = "none";
		for (var n = 0; n < e.length; n++) document.getElementById(e[n]).style.display = "";
		document.getElementById("FullTime_CorrectScore").value = ftSession.replace("F", ""), document.getElementById("FullTime_CorrectScore_Txt").title = document.getElementById("F" + ftSession).innerHTML, document.getElementById("FullTime_CorrectScore_Txt").innerHTML = document.getElementById("F" + ftSession).innerHTML, cganheOddsSelect()
	}
}
function cganheFullTimeSelect(e) {
	var t = checkFullTimeArray(e);
	document.getElementById("FullTime_CorrectScore").value = t[0].replace("F", ""), document.getElementById("FullTime_CorrectScore_Txt").title = document.getElementById(t[0]).innerHTML, document.getElementById("FullTime_CorrectScore_Txt").innerHTML = document.getElementById(t[0]).innerHTML;
	for (var n = 0; n < FullTimeAllArray.length; n++) document.getElementById(FullTimeAllArray[n]).style.display = "none";
	for (var d = 0; d < t.length; d++) document.getElementById(t[d]).style.display = "";
	document.getElementById("HalfTime_CorrectScore_Txt").title = document.getElementById("H" + e).innerHTML, document.getElementById("HalfTime_CorrectScore_Txt").innerHTML = document.getElementById("H" + e).innerHTML, document.getElementById("HalfTime_CorrectScore").value = e, htSession = document.getElementById("HalfTime_CorrectScore").value, document.getElementById("HalfTime_CorrectScore_menu").style.display = "none", cganheOddsSelect()
}
function changeFullTimeSelect(e) {
	document.getElementById("FullTime_CorrectScore_Txt").title = document.getElementById("F" + e).innerHTML, document.getElementById("FullTime_CorrectScore_Txt").innerHTML = document.getElementById("F" + e).innerHTML, document.getElementById("FullTime_CorrectScore").value = e, document.getElementById("FullTime_CorrectScore_menu").style.display = "none", cganheOddsSelect()
}
function cganheOddsSelect() {
	ftSession = document.getElementById("FullTime_CorrectScore").value;
	for (var e = document.getElementById("HalfTime_CorrectScore").value.replace(":", "").replace("+", "UP") + document.getElementById("FullTime_CorrectScore").value.replace(":", "").replace("+", "UP"), t = "Odds_152_", n = t + e, d = 0; d < BetType152OddArray.length; d++) document.getElementById(t + BetType152OddArray[d]).style.display = "none";
	document.getElementById(n).style.display = ""
}
function checkFullTimeArray(e) {
	var t = null;
	return "0:0" == e ? t = HTArray_00 : "1:0" == e ? t = HTArray_10 : "0:1" == e ? t = HTArray_01 : "1:1" == e ? t = HTArray_11 : "2:0" == e ? t = HTArray_20 : "0:2" == e ? t = HTArray_02 : "2:1" == e ? t = HTArray_21 : "1:2" == e ? t = HTArray_12 : "3:0" == e ? t = HTArray_30 : "0:3" == e ? t = HTArray_03 : "4+" == e && (t = HTArray_4UP), t
}
function OutrightKeeper() {
	function e(e) {
		var t = "";
		return void 0 != e && (t = e.innerHTML, t = t.replace(/%7B/g, "{"), t = t.replace(/%7D/g, "}"), t = t.replace(/[	\n]/g, "")), t
	}
	function t() {
		var e = p.TemplateFrame.getElementById(u);
		if (null != e) {
			var t = e.parentNode.innerHTML;
			return t = t.substring(0, t.indexOf(e.innerHTML)), t = t.substr(t.lastIndexOf("<"))
		}
		return "<table>"
	}
	function n(e) {
		var t = _replaceTags(p.EventList[e], R);
		return null != p.afterNewHeader && (t = p.afterNewHeader(p.EventList, e, t)), t
	}
	function d(e) {
		var t = _replaceTags(p.EventList[e], S);
		return null != p.afterNewLeague && (t = p.afterNewLeague(p.EventList, e, t)), t
	}
	function a(e) {
		var t;
		return t = _replaceTags(p.EventList[e], y), null != p.afterNewEvent && (t = p.afterNewEvent(p.EventList, e, t)), t
	}
	function r(e) {
		var t;
		return t = _replaceTags(p.EventList[e], g), null != p.afterNewEvent && (t = p.afterNewEvent(p.EventList, e, t)), t
	}
	function o(e) {
		for (var t in e) {
			var n = e[t],
				d = L[t];
			p.EventList[d].ShowTime = n, I[t] = "showtime"
		}
	}
	function s(e) {
		for (var t in M) if (!isNaN(t)) {
			var n = L[t];
			if (null == n) continue;
			p.EventList[n].Changed = "", I[t] = "oddsClear"
		}
		M = new Array;
		for (var d = 0; d < e.length; d++) {
			var t = e[d][0],
				a = e[d][1],
				n = L[t];
			if (null != n && p.EventList[n].Odds != a) {
				p.EventList[n].Odds = a, p.EventList[n].Changed = E, M[p.EventList[n].MatchId] = 1, I[p.EventList[n].MatchId] = "oddsNew";
				var r = p.EventList[n];
				p.EventList = arrayRemove(p.EventList, n, n), p.HtmlList = arrayRemove(p.HtmlList, n, n);
				for (var o = n; o > 0 && r.LeagueId == p.EventList[o - 1].LeagueId && parseFloat(a) < parseFloat(p.EventList[o - 1].Odds);) o--;
				for (; o < p.EventList.length && r.LeagueId == p.EventList[o].LeagueId && parseFloat(a) > parseFloat(p.EventList[o].Odds);) o++;
				p.EventList = arrayInsert(p.EventList, o, [r]), p.HtmlList = arrayInsert(p.HtmlList, o, ["update temp string"]);
				for (var s = o > n ? n : o, _ = p.EventList.length - 1; _ >= s; _--) L[p.EventList[_].MatchId] = _
			}
		}
	}
	function _(e) {
		for (var t = 0; t < e.length; t++) {
			var n = e[t],
				d = L[n];
			p.EventList = arrayRemove(p.EventList, d, d), p.HtmlList = arrayRemove(p.HtmlList, d, d);
			for (var a = p.EventList.length - 1; a >= d; a--) L[p.EventList[a].MatchId] = a
		}
	}
	function i(e) {
		for (var t, n, d = 0; d < e.length; d++) {
			n = _hashData(e[d], p.DataTags), "" == n.LeagueId && (n.LeagueId = t.LeagueId, n.LeagueName = t.LeagueName), "" == n.MatchId && (n.MatchId = t.MatchId, n.MatchCode = t.MatchCode, n.TeamName = t.TeamName), t = n;
			var a = p.findMatchCode(n.MatchCode, n.Odds);
			p.EventList = arrayInsert(p.EventList, a, new Array(n)), p.HtmlList = arrayInsert(p.HtmlList, a, ["insert temp string"]), I[n.MatchId] = "ins"
		}
	}
	function l(e) {
		for (var t in e) {
			I[t] = "srt";
			var n = e[t],
				d = L[t],
				a = p.EventList[d];
			a.MatchCode = n, p.EventList = arrayRemove(p.EventList, d, d), p.HtmlList = arrayRemove(p.HtmlList, d, d);
			var r = p.findMatchCode(n, a.Odds);
			p.EventList = arrayInsert(p.EventList, r, [a]), p.HtmlList = arrayInsert(p.HtmlList, r, ["resort temp string"]);
			for (var o = r > d ? d : r, s = p.EventList.length - 1; s >= o; s--) L[p.EventList[s].MatchId] = s
		}
	}
	var u = "tmplTable",
		c = "tmplHeader",
		D = "tmplLeague",
		m = "tmplEvent",
		O = "tmplEventMaster",
		E = "Odds_Upd",
		p = this,
		F = null,
		S = void 0,
		R = void 0,
		y = void 0,
		g = void 0,
		L = new Array,
		I = new Array,
		M = new Array;
	this.DivBase = 2, this.HashHeader = null, this.DataTags = null, this.EventList = null, this.HtmlList = null, this.TemplateFrame = null, this.DataFrame = null, this.TableContainer = null, this.BetTypes = null, this.LeagueCloseMap = new Array, this.getTable = function() {
		return F
	}, this.setTemplate = function(t) {
		t.contentDocument ? this.TemplateFrame = t.contentDocument : t.contentWindow ? this.TemplateFrame = t.contentWindow.document : this.TemplateFrame = t.Document;
		var n = this.TemplateFrame.getElementById(D);
		S = e(n), S = _formatTemplate(S, "{%", "}");
		var n = this.TemplateFrame.getElementById(c);
		R = e(n), R = _formatTemplate(R, "{%", "}"), n = this.TemplateFrame.getElementById(m), y = e(n), y = _formatTemplate(y, "{%", "}"), n = this.TemplateFrame.getElementById(O), null == n ? g = y : (g = e(n), g = _formatTemplate(g, "{%", "}"))
	}, this.setDatas = function(e, t) {
		this.DataTags = t;
		for (var n = new Array(e.length), d = 0; d < e.length; d++) {
			var a = _hashData(e[d], t);
			"" == a.LeagueId && (a.LeagueId = n[d - 1].LeagueId, a.LeagueName = n[d - 1].LeagueName, a.ShowTime = n[d - 1].ShowTime), a.Div = d % this.DivBase, null != this.afterSetData && this.afterSetData(d, a, n), n[d] = a
		}
		this.EventList = n
	}, this.paintOddsTable = function() {
		var e = new Array;
		this.HtmlList = new Array, this.HtmlList.length = this.EventList.length, e.push(t());
		for (var o, s, _, i = 0; i < this.EventList.length; i++) {
			var l = this.EventList[i].LeagueId;
			l != o && (o = l, e.push(d(i)), e.push(n(i)));
			var u = this.EventList[i].MatchId;
			s != u ? (s = u, L[u] = i, _ = r(i)) : _ = a(i), this.HtmlList[i] = _, e.push(_)
		}
		e.push("</Table>");
		var c = e.join("");
		this.TableContainer.innerHTML = c, F = this.TableContainer.childNodes[0], null != this.afterRepaintTable && this.afterRepaintTable(F, this.EventList)
	}, this.refreshOddsTable = function(e, t, n, d, a) {
		I = new Array, o(d), s(a), _(e), l(t), i(n), this.regenTableHtml(), void 0 != this.afterRepaintTable && this.afterRepaintTable(F)
	}, this.findMatchCode = function(e, t) {
		var n, d = 0,
			a = this.EventList.length - 1;
		if (0 == this.EventList.length) return 0;
		if (e >= this.EventList[a].MatchCode) return a + 1;
		if (e < this.EventList[d].MatchCode) return d;
		for (; a >= d;) {
			n = Math.ceil((d + a) / 2);
			var r = this.EventList[n].MatchCode;
			if (e > r) d = n + 1;
			else {
				if (!(r > e)) {
					for (; n < this.EventList.length && this.EventList[n].MatchCode == e && parseFloat(t) > parseFloat(this.EventList[n].Odds);) n++;
					for (; n > 0 && this.EventList[n - 1].MatchCode == e && parseFloat(t) < parseFloat(this.EventList[n - 1].Odds);) n--;
					return n
				}
				a = n - 1
			}
		}
		for (n + 1 >= this.EventList.length && (n = this.EventList.length - 2), n += 1; n >= 0; n--) if (this.EventList[n].MatchCode <= e) return n + 1;
		return 0
	}, this.regenTableHtml = function() {
		var e = new Array,
			o = new Array;
		e.push(t());
		for (var s, _, i, l = 0; l < this.EventList.length; l++) {
			var u = (l % this.DivBase, this.EventList[l]);
			if (s = u.LeagueId, s != _) {
				var c = u.ShowTime + SEPARATOR + u.LeagueId;
				null != this.LeagueCloseMap[c] && (o[c] = "closed"), _ = s, e.push(d(l)), e.push(n(l))
			}
			var D = this.EventList[l].MatchId;
			i != D ? e.push(r(l)) : e.push(a(l)), i != D && (i = D, L[D] = l)
		}
		this.LeagueCloseMap = o, e.push("</Table>");
		var m = e.join("");
		arrTicks.push((new Date).getTime()), this.TableContainer.innerHTML = m, F = this.TableContainer.childNodes[0]
	}
}
function _replaceTags(e, t) {
	var n = new Array(2 * t.length - 1);
	n[0] = t[0];
	for (var d, a = 1; a < t.length; a++) d = 2 * a, n[d - 1] = e[t[a][0]], n[d] = t[a][1];
	return n.join("")
}
function replaceTags(e, t) {
	return _replaceTags(e, _formatTemplate(t, "{%", "}"))
}
function _formatTemplate(e, t, n) {
	for (var d = e.split(t), a = 1; a < d.length; a++) {
		var r = d[a].indexOf(n),
			o = d[a].substr(0, r),
			s = d[a].substr(r + 1, d[a].length - r);
		d[a] = [o, s]
	}
	return d
}
function _initialTags(e) {
	for (var t = e.match(/{%.+?}/g), n = new Hashtable, d = 0; d < t.length; d++) {
		var a = t[d].substr(2, t[d].length - 3);
		n.put(a, a)
	}
	return n.getValues()
}
function _hashData(e, t) {
	for (var n = new Array, d = 0; d < t.length; d++) n[t[d]] = e[d];
	return n
}
function _mergeHash(e, t) {
	for (var n in t) e[n] = t[n]
}
function arrayRemove(e, t, n) {
	if (null == n && (n = t), t > n) return e;
	0 > t && (t = 0), n >= e.length && (n = e.length - 1);
	var d = e.slice(0, t),
		a = e.slice(n + 1);
	return d.concat(a)
}
function arrayInsert(e, t, n) {
	if (0 >= t) return n.concat(e);
	if (t >= e.length) return e.concat(n);
	var d = e.slice(0, t),
		a = e.slice(t);
	return d = d.concat(n), d.concat(a)
}
function showOutrightOddsDisplay(e, t) {
	if ("Outright" == document.DataForm.Scope.value) if (arrTicks = new Array, document.DataForm.CT.value = t, "U" == e) {
		if (null == g_OddsKeeper) return void refreshData();
		g_OddsKeeper.refreshOddsTable(DataFrame.Del, DataFrame.Srt, DataFrame.Ins, DataFrame.uT, DataFrame.uO)
	} else {
		if (!initialOddsBody("Outright", "Outright.aspx", "showOutrightOddsDisplay('" + e + "','" + t + "');")) return;
		if (!initialTmpl("Outright_tmpl", "Outright_tmpl.aspx", "showOutrightOddsDisplay('" + e + "','" + t + "');")) return;
		g_OddsKeeper = new OutrightKeeper, g_OddsKeeper.afterNewLeague = afterORNewLeague, g_OddsKeeper.afterNewHeader = afterORNewHeader, g_OddsKeeper.afterNewEvent = afterORNewEvent, g_OddsKeeper.afterRepaintTable = afterORRepaintTable, g_OddsKeeper.TableContainer = document.getElementById("oTableContainer"), g_OddsKeeper.BetTypes = [0], g_OddsKeeper.setTemplate(fFrame.document.getElementById("Outright_tmpl")), g_OddsKeeper.setDatas(DataFrame.N, OUTRIGHT_FIELDS_DEF), g_OddsKeeper.paintOddsTable(), document.DataForm.RT.value = "U"
	}
}
function afterORNewLeague(e, t, n) {
	var d = e[t],
		a = new Array,
		r = d.ShowTime.split("/");
	r = r[2] + r[0] + r[1], r = formatDisplayDate(r.replace(new RegExp("/", "g"), "")), a.MatchDate = r;
	var o = d.ShowTime + SEPARATOR + d.LeagueId,
		s = null == g_OddsKeeper.LeagueCloseMap[o] ? "Header-Open" : "Header-Close";
	return a.Class = s, n = _formatTemplate(n, "{@", "}"), n = _replaceTags(a, n)
}
function afterORNewHeader(e, t, n) {
	var d = e[t],
		a = d.ShowTime + SEPARATOR + d.LeagueId;
	return n = null == g_OddsKeeper.LeagueCloseMap[a] ? n.replace("{@DisplayCls}", "odds_open") : n.replace("{@DisplayCls}", "odds_close")
}
function afterORNewEvent(e, t, n, d) {
	var a = e[t],
		r = new Array,
		o = a.ShowTime + SEPARATOR + a.LeagueId;
	return null == g_OddsKeeper.LeagueCloseMap[o] ? r.DisplayCls = "odds_open" : r.DisplayCls = "odds_close", t % 2 == 0 ? (r.Tr_Cls = "oddstr1", r.BgColor = GetEventBGColor(0)) : (r.Tr_Cls = "oddstr2", r.BgColor = GetEventBGColor(1)), n = _formatTemplate(n, "{@", "}"), n = _replaceTags(r, n)
}
function refreshORData() {
	window.clearTimeout(RefresHandle), RefresHandle = window.setTimeout(refreshData, REFRESH_INTERVAL), null == g_OddsKeeper || 0 >= iRefreshCount ? (document.DataForm.RT.value = "W", iRefreshCount = REFRESH_COUNTDOWN) : iRefreshCount--, btnstop(), document.DataForm.submit()
}
function afterORRepaintTable(e) {
	window.clearTimeout(HandleBtnStart), HandleBtnStart = setTimeout("btnstart()", 3e3), document.getElementById("BetList").style.display = "none", document.getElementById("OddsTr").style.display = "block", 0 == g_OddsKeeper.EventList.length ? document.getElementById("TrNoInfo").style.display = "block" : document.getElementById("TrNoInfo").style.display = "none";
	var t = document.getElementById("btnSelectLeague");
	t.href = "javascript:openLeague(640, SelectLeagueTitle, 'Outright','" + document.DataForm.Sport.value + "','10','0','Outright');"
}
function clickORLeagueRow(e) {
	var t = e.id.split("_"),
		n = t[1],
		d = t[2],
		a = n + SEPARATOR + d,
		r = e.className.search("Header-Close") >= 0;
	r ? (g_OddsKeeper.LeagueCloseMap[a] = null, e.className = e.className.replace("Header-Close", "Header-Open")) : (g_OddsKeeper.LeagueCloseMap[a] = "closed", e.className = e.className.replace("Header-Open", "Header-Close"));
	for (var o = SEPARATOR + a, s = e.parentNode.childNodes, _ = !1, i = 0; i < s.length; i++) if (null != s[i] && null != s[i].id) if (s[i].id.match("^H" + o) == "H" + o) r ? s[i].className = s[i].className.replace("odds_close", "odds_open") : s[i].className = s[i].className.replace("odds_open", "odds_close");
	else if (s[i].id.match("^O" + o) == "O" + o) _ = !0, r ? s[i].className = s[i].className.replace("odds_close", "odds_open") : s[i].className = s[i].className.replace("odds_open", "odds_close");
	else if (_) break
}
function BetO(e) {
	AddOutrightBetTicket(e)
}
function MM_showHideLayers() {
	var i, v, obj, args = MM_showHideLayers.arguments;
	for (i = 0; i < args.length - 2; i += 3) with(document) getElementById && null != (obj = getElementById(args[i])) && (v = args[i + 2], obj.style && (obj = obj.style, v = "show" == v ? "visible" : "hide" == v ? "hidden" : v), obj.visibility = v);
	if ("visible" === obj.visibility) {
		var oDiv = document.getElementById("select-league");
		if (null != oDiv) {
			"undefined" == typeof beforeOpen && (oDivX = oDiv.offsetTop, oDivY = oDiv.offsetLeft, beforeOpen = !0);
			var oDragger = document.getElementById("PopTitle"),
				oCloser = document.getElementById("PopCloser");
			PopLauncher = new DivSelectLeague(oDiv, oDragger, oCloser), PopLauncher.open(oDivX, oDivY)
		}
	}
}
function ShowHorseBetList(e, t) {
	if (arrTicks = new Array, CT = t, "U" == e) {
		if ((SelectRacingCountry == RacingCountryCode || "" == RacingCountryCode) && null == g_HorseOddsKeeper) return void refreshRacingData();
		g_HorseOddsKeeper.refreshOddsTable(HDel, HSrt, HIns, HuM, HuO), g_HorseInfoKeeper.refreshOddsTable(HDel, HSrt, HIns, HuM, HuO)
	} else {
		if ("153" == LastSelectedSport) {
			if (!initialTmpl("Harness", "../Racing.aspx?SportType=" + LastSelectedSport + "&RM=" + LastSelectedMArket, "ShowHorseBetList('" + e + "','" + t + "');")) return;
			if ("AUS" == SelectRacingCountry) {
				if (!initialTmpl("AUS_Harness_tmpl", "../AUS_Harness_tmpl.aspx", "ShowHorseBetList('" + e + "','" + t + "');")) return
			} else if (!initialTmpl("Harness_tmpl", "../Harness_tmpl.aspx", "ShowHorseBetList('" + e + "','" + t + "');")) return;
			if (!initialTmpl("HarnessInfo_tmpl", "../HarnessInfoPop.aspx", "ShowHorseBetList('" + e + "','" + t + "');")) return
		} else if ("152" == LastSelectedSport) {
			if (!initialTmpl("Greyhounds", "../Racing.aspx?SportType=" + LastSelectedSport + "&RM=" + LastSelectedMArket, "ShowHorseBetList('" + e + "','" + t + "');")) return;
			if ("AUS" == SelectRacingCountry) {
				if (!initialTmpl("AUS_Greyhounds_tmpl", "../AUS_Greyhounds_tmpl.aspx", "ShowHorseBetList('" + e + "','" + t + "');")) return
			} else if (!initialTmpl("Greyhounds_tmpl", "../Greyhounds_tmpl.aspx", "ShowHorseBetList('" + e + "','" + t + "');")) return;
			if (!initialTmpl("GreyhoundsInfo_tmpl", "../GreyhoundsInfoPop.aspx", "ShowHorseBetList('" + e + "','" + t + "');")) return
		} else {
			if (!initialTmpl("Racing", "../Racing.aspx?SportType=" + LastSelectedSport + "&RM=" + LastSelectedMArket, "ShowHorseBetList('" + e + "','" + t + "');")) return;
			if ("AUS" == SelectRacingCountry) {
				if (!initialTmpl("AUS_Horse_tmpl", "../AUS_Horse_tmpl.aspx", "ShowHorseBetList('" + e + "','" + t + "');")) return
			} else if (!initialTmpl("Horse_tmpl", "../Horse_tmpl.aspx", "ShowHorseBetList('" + e + "','" + t + "');")) return;
			if (!initialTmpl("HorseInfo_tmpl", "../HorseInfoPop.aspx", "ShowHorseBetList('" + e + "','" + t + "');")) return
		}
		if (null == HorseBody) return void window.setTimeout(refreshRacingData, REFRESH_INTERVAL);
		var n = document.getElementById("HorseChannelID"),
			d = "";
		null != n && (d = n.value), HorseBody = document.getElementById("Racing").contentWindow.document.body.innerHTML, React.unmountComponentAtNode(document.getElementById("DivMainOdds")), document.getElementById("DivMainOdds").innerHTML = HorseBody, "" != d && (document.getElementById("HorseChannelID").value = d), "151" == LastSelectedSport ? (document.getElementById("maskpic").innerHTML = "<img src='" + SkinRootPath + "public/images/layout/HorseMaskRunning.gif' hspace='5'/>", document.getElementById("sporttitle").innerHTML = Racing151, document.getElementById("InfoHead").innerHTML = Racing151 + Info) : "152" == LastSelectedSport ? (document.getElementById("maskpic").innerHTML = "<img src='" + SkinRootPath + "public/images/layout/GreyhoundsMaskRunning.gif' hspace='5'/>", document.getElementById("sporttitle").innerHTML = Racing152, document.getElementById("InfoHead").innerHTML = Racing152 + Info) : "153" == LastSelectedSport && (document.getElementById("maskpic").innerHTML = "<img src='" + SkinRootPath + "public/images/layout/HarnessMaskRunning.gif' hspace='5'/>", document.getElementById("sporttitle").innerHTML = Racing153, document.getElementById("InfoHead").innerHTML = Racing153 + Info), g_HorseOddsKeeper = new HorseKeeper, g_HorseOddsKeeper.afterNewEvent = HorseafterNewEvent, g_HorseOddsKeeper.afterRepaintTable = HorseafterRepaintTable, g_HorseOddsKeeper.LeagueContainer = document.getElementById("lTableContainer"), g_HorseOddsKeeper.TableContainer = document.getElementById("oTableContainer"), g_HorseOddsKeeper.BetTypes = [0], "153" == LastSelectedSport ? "AUS" == SelectRacingCountry ? g_HorseOddsKeeper.setTemplate(document.getElementById("AUS_Harness_tmpl").contentWindow) : g_HorseOddsKeeper.setTemplate(document.getElementById("Harness_tmpl").contentWindow) : "152" == LastSelectedSport ? "AUS" == SelectRacingCountry ? g_HorseOddsKeeper.setTemplate(document.getElementById("AUS_Greyhounds_tmpl").contentWindow) : g_HorseOddsKeeper.setTemplate(document.getElementById("Greyhounds_tmpl").contentWindow) : "AUS" == SelectRacingCountry ? g_HorseOddsKeeper.setTemplate(document.getElementById("AUS_Horse_tmpl").contentWindow) : g_HorseOddsKeeper.setTemplate(document.getElementById("Horse_tmpl").contentWindow), g_HorseOddsKeeper.setDatas(OddsData, HORSE_FIELDS_DEF), g_HorseOddsKeeper.paintOddsTable(), g_HorseInfoKeeper = new HorseKeeper, g_HorseInfoKeeper.afterNewEvent = HorseafterNewEvent, g_HorseInfoKeeper.afterRepaintTable = HorseafterRepaintTable, g_HorseInfoKeeper.TableContainer = document.getElementById("oInfoContainer"), g_HorseInfoKeeper.BetTypes = [0], "153" == LastSelectedSport ? g_HorseInfoKeeper.setTemplate(document.getElementById("HarnessInfo_tmpl").contentWindow) : "152" == LastSelectedSport ? g_HorseInfoKeeper.setTemplate(document.getElementById("GreyhoundsInfo_tmpl").contentWindow) : g_HorseInfoKeeper.setTemplate(document.getElementById("HorseInfo_tmpl").contentWindow), g_HorseInfoKeeper.setDatas(OddsData, HORSE_FIELDS_DEF), g_HorseInfoKeeper.paintOddsTable(), RT = "U"
	}
	setLeagueData(LData, DefaultLeague), setRaceData(RData, DefaultRace), LoadFutureRaceData()
}
function LoadHorseOddsData() {
	var e = new Object;
	e.Market = LastSelectedMArket, e.Sport = SelectRacingType, e.RT = RT, e.CT = CT, e.League = SelLeague, e.RaceNumber = SelRaceNumber, ExecAjax("../Racing_Data.aspx", e, "POST", SelectRacingType, "ParseHorseOddsData", "RetryHorseOddsData")
}
function RetryHorseOddsData(e) {
	refreshHandle = window.setTimeout("LoadHorseOddsData();", 3e3)
}
function ParseHorseOddsData(e) {
	if (odata = JSON.parse(e || "null"), null != odata) {
		if ("W" == odata.UpdateMode) OddsData = odata.OddsData;
		else {
			if (RacingCountryCode != odata.CountryCode) return RT = "W", SelLeague = "-1", SelRaceNumber = "-1", void LoadHorseOddsData();
			HDel = odata.Del, HSrt = odata.Srt, HIns = odata.Ins, HuM = odata.uM, HuO = odata.uO
		}
		LData = odata.LeagueData, RData = odata.RaceData, DefaultLeague = odata.DefauleLeague, DefaultRace = odata.DefaultRace, fFrame.SelectRacingCountry = odata.CountryCode, window.setTimeout("ShowHorseBetList('" + odata.UpdateMode + "','" + odata.LastChangeTime + "')", 10), "W" == odata.UpdateMode && ("152" == sSport && ChagneStadium(odata.ChangeStadium), ChagneHorseCountryCode(odata.CountryCode), ChagneHorseNote(odata.NoteValue), EuroChagneHorseStream(odata.Stream, odata.DefauleLeague, odata.DefaultRace)), ("2" == odata.Stream || "3" == odata.Stream) && ChagneHorseStream(odata.Stream, odata.DefauleLeague, odata.DefaultRace)
	}
}
function LoadFutureRaceData() {
	var e = new Object;
	e.Market = LastSelectedMArket, e.SportType = LastSelectedSport, ExecAjax("../Racing_FutureRacesdata.aspx", e, "POST", LastSelectedSport, "ParseFutureRaceData", "RetryFutureRaceData")
}
function RetryFutureRaceData(e) {
	refreshHandle = window.setTimeout("LoadFutureRaceData();", 3e3)
}
function ParseFutureRaceData(e) {
	var t = JSON.parse(urldecode(e));
	if (null == t || 0 == t.LeagueDataList.length) return void(document.getElementById("RacingFutureRacesDiv").style.display = "none");
	var n = document.createElement("TABLE");
	n.border = "0", n.cellPadding = "0", n.cellSpacing = "0", n.width = "100%", n.setAttribute("class", "Oddstab racestab");
	var d = 0;
	d = t.LeagueDataList.length >= 5 ? 10 : 2 * t.LeagueDataList.length;
	var a = document.createElement("TR"),
		r = document.createElement("TH");
	r.colSpan = d, r.innerHTML = t.FutureTitle, a.appendChild(r);
	var o = Math.ceil(t.LeagueDataList.length / 3),
		s = t.LeagueDataList.length % 3;
	0 == s && (s = 3);
	for (var _, i, l, u = 3, c = 0; o > c; c++) {
		c + 1 == o && (u = s), a = document.createElement("TR");
		for (var D = 0; u > D; D++) i = 3 * c + D, r = document.createElement("TH"), r.setAttribute("class", "tabtitle3"), r.colSpan = 2, l = document.createElement("A"), l.title = t.LeagueTitle, l.href = "javascript:SelMeetingByFutureRace(" + t.LeagueDataList[i].LeagueID + ",-1);", l.innerHTML = t.LeagueDataList[i].LeagueName, r.appendChild(l), a.appendChild(r);
		n.appendChild(a), a = document.createElement("TR");
		for (var m = 0; u > m; m++) i = 3 * c + m, _ = document.createElement("TD"), _.setAttribute("class", "tabtitle2 Alpha"), _.colSpan = 2, l = document.createElement("A"), l.title = t.LeagueTitle, l.href = "javascript:SelMeetingByFutureRace(" + t.LeagueDataList[i].LeagueID + ",-1);", l.innerHTML = t.LeagueDataList[i].MTP, _.appendChild(l), a.appendChild(_);
		n.appendChild(a), i = 3 * c;
		for (var O = t.LeagueDataList[i].TrMaxRaceCount, E = 0; O > E; E++) {
			a = document.createElement("TR");
			for (var p = 0; u > p; p++) i = 3 * c + p, _ = document.createElement("TD"), _.setAttribute("class", "oddstr2 races"), null != t.LeagueDataList[i].RaceDataList && null != t.LeagueDataList[i].RaceDataList[E] ? (l = document.createElement("A"), l.title = t.RaceTitle, l.href = "javascript:SelMeetingByFutureRace(" + t.LeagueDataList[i].LeagueID + "," + t.LeagueDataList[i].RaceDataList[E].RaceNumber + ");", l.innerHTML = t.LeagueDataList[i].RaceDataList[E].RaceText, _.appendChild(l)) : _.innerHTML = "&nbsp;", a.appendChild(_), _ = document.createElement("TD"), _.setAttribute("class", "oddstr1"), null != t.LeagueDataList[i].RaceDataList && null != t.LeagueDataList[i].RaceDataList[E] ? (l = document.createElement("A"), l.title = t.RaceTitle, l.href = "javascript:SelMeetingByFutureRace(" + t.LeagueDataList[i].LeagueID + "," + t.LeagueDataList[i].RaceDataList[E].RaceNumber + ");", l.innerHTML = t.LeagueDataList[i].RaceDataList[E].RaceTime, _.appendChild(l)) : _.innerHTML = "&nbsp;", a.appendChild(_);
			n.appendChild(a)
		}
	}
	var F = parent.document.getElementById("RacingFutureRacesDiv");
	null != F ? (F.style.display = "inline-block", document.getElementById("RacingFutureRacesContainer").innerHTML = "", document.getElementById("RacingFutureRacesContainer").appendChild(n)) : window.setTimeout("ParseFutureRaceData('" + e + "')", 200)
}
function urldecode(e) {
	return decodeURIComponent((e + "").replace(/\+/g, "%20"))
}
function ShowHorseOddsMask() {
	var e = g_HorseOddsKeeper.EventList[0].oddsstatus,
		t = document.getElementById("div_Mask"),
		n = document.getElementById("horseliveimg"),
		d = document.getElementById("horsenoliveimg");
	if ("suspend" == e || "completed" == e) {
		if (null != t) {
			t.style.display = "block";
			var a = document.getElementById("div_gca");
			null != a && (t.style.width = a.offsetWidth + "px", t.style.height = a.offsetHeight + "px"), d.style.display = "none", n.style.display = "block"
		}
	} else null != t && (t.style.display = "none", d.style.display = "block", n.style.display = "none")
}
function HorseafterNewFooter(e, t) {
	var n = e[e.length - 1];
	t = _formatTemplate(t, "{%", "}"), t = _replaceTags(n, t)
}
function HorseafterNewEvent(e, t, n, d) {
	var a, r = e[t],
		o = new Array,
		s = document.getElementById("STRBET");
	return null != s && (a = s.value), 0 == r.Div ? o.Tr_Cls = "oddstr1" : o.Tr_Cls = "oddstr2", "" != r.Status ? (o.WinOdds2 = r.Status, o.PlaceOdds2 = r.Status, o.WP2 = r.Status, o.WinOdds = r.Status, o.PlaceOdds = r.Status, o.WP = r.Status, o.Tr_Cls = o.Tr_Cls + " boxEvent SCR") : ("&nbsp;" != r.WinOdds && ("-2.00" == r.WinOdds ? o.WinOdds = "<a href=\"javascript:betHorse('" + r.MatchId + "','" + r.ProgramId + "','" + r.intRaceNumber + "','" + r.Runner + "','31','1.00', '1');\">" + a + "</a>" : o.WinOdds = "<a href=\"javascript:betHorse('" + r.MatchId + "','" + r.ProgramId + "','" + r.intRaceNumber + "','" + r.Runner + "','31','" + r.WinOdds + "','1');\">" + r.WinOdds + "</a>"), "&nbsp;" != r.PlaceOdds && ("-2.00" == r.PlaceOdds ? o.PlaceOdds = "<a href=\"javascript:betHorse('" + r.MatchId + "','" + r.ProgramId + "','" + r.intRaceNumber + "','" + r.Runner + "','32','1.00', '1');\">" + a + "</a>" : o.PlaceOdds = "<a href=\"javascript:betHorse('" + r.MatchId + "','" + r.ProgramId + "','" + r.intRaceNumber + "','" + r.Runner + "','32','" + r.PlaceOdds + "','1');\">" + r.PlaceOdds + "</a>"), "&nbsp;" != r.WinOdds && "&nbsp;" != r.PlaceOdds ? o.WP = '<a title="' + r.BetNow + '" href="javascript:betHorse(\'' + r.MatchId + "','" + r.ProgramId + "','" + r.intRaceNumber + "','" + r.Runner + "','33', '0', '1');\">" + r.BetNow + "</a>" : o.WP = "&nbsp;", "&nbsp;" != r.WinOdds2 && ("-2.00" == r.WinOdds2 ? o.WinOdds2 = "<a href=\"javascript:betHorse('" + r.MatchId2 + "','" + r.ProgramId + "','" + r.intRaceNumber + "','" + r.Runner + "','31','1.00', '2');\">" + a + "</a>" : o.WinOdds2 = "<a href=\"javascript:betHorse('" + r.MatchId2 + "','" + r.ProgramId + "','" + r.intRaceNumber + "','" + r.Runner + "','31','" + r.WinOdds2 + "','2');\">" + r.WinOdds2 + "</a>"), "&nbsp;" != r.PlaceOdds2 && ("-2.00" == r.PlaceOdds2 ? o.PlaceOdds2 = "<a href=\"javascript:betHorse('" + r.MatchId2 + "','" + r.ProgramId + "','" + r.intRaceNumber + "','" + r.Runner + "','32','1.00', '2');\">" + a + "</a>" : o.PlaceOdds2 = "<a href=\"javascript:betHorse('" + r.MatchId2 + "','" + r.ProgramId + "','" + r.intRaceNumber + "','" + r.Runner + "','32','" + r.PlaceOdds2 + "','2');\">" + r.PlaceOdds2 + "</a>"), "&nbsp;" != r.WinOdds2 && "&nbsp;" != r.PlaceOdds2 ? o.WP2 = '<a title="' + r.BetNow + '" href="javascript:betHorse(\'' + r.MatchId2 + "','" + r.ProgramId + "','" + r.intRaceNumber + "','" + r.Runner + "','33', '0', '2');\">" + r.BetNow + "</a>" : o.WP2 = "&nbsp;"), CheckNum(r.ProgramId) && (o.WP = "", o.WP2 = ""), n = _formatTemplate(n, "{@", "}"), n = _replaceTags(o, n)
}
function CheckInfoData() {
	if (null != document.getElementById("selRACE")) {
		var e = document.getElementById("selRACE").innerHTML;
		(old_League != SelLeague || old_RaceNumber != e) && (old_League = SelLeague, old_RaceNumber = e, UpdateHorsePopInfo(SelLeague, e))
	}
}
function refreshRacingData() {
	LastSelectedSport != SelectRacingType && (g_HorseOddsKeeper = null, SelLeague = void 0, SelRaceNumber = void 0), window.clearTimeout(RefresHandle), RefresHandle = window.setTimeout(refreshRacingData, HORSE_REFRESH_INTERVAL), null == g_HorseOddsKeeper || 0 >= iRefreshCount ? (RT = "W", iRefreshCount = REFRESH_COUNTDOWN) : iRefreshCount--, btnstop(), LoadHorseOddsData(), LoadFutureRaceData(), CheckInfoData()
}
function HorseafterRepaintTable(e) {
	window.clearTimeout(btnStartHandle), btnStartHandle = setTimeout("btnstart()", 3e3), null != document.getElementById("BetList") && (document.getElementById("BetList").style.display = "none"), 0 == g_HorseOddsKeeper.EventList.length ? (document.getElementById("TrNoInfo").style.display = "block", null != LastSelectedMArket && "T" == LastSelectedMArket.toUpperCase() && (document.getElementById("tdRefNotes").style.display = "none", document.getElementById("tdMin2PostMsg").style.display = "none"), document.getElementById("OddsTr").style.display = "none", document.getElementById("LeagueTr").style.display = "none") : (document.getElementById("TrNoInfo").style.display = "none", null != LastSelectedMArket && "T" == LastSelectedMArket.toUpperCase() && (document.getElementById("tdRefNotes").style.display = "block", document.getElementById("tdMin2PostMsg").style.display = "block"), document.getElementById("OddsTr").style.display = "block", document.getElementById("LeagueTr").style.display = "block", ShowHorseOddsMask()), null != document.getElementById("HorseFormGuide") && (IsLogin ? ("AUS" == SelectRacingCountry ? document.getElementById("HorseFormGuide").style.display = "" : document.getElementById("HorseFormGuide").style.display = "none", document.getElementById("HorseResult").style.display = "", document.getElementById("HorseTV").style.display = "") : (document.getElementById("HorseFormGuide").style.display = "none", document.getElementById("HorseResult").style.display = "none", document.getElementById("HorseTV").style.display = "none"))
}
function setLeagueData(e, t) {
	var n = document.getElementById("dlLeagueFilter");
	if (null != n) {
		for (var d = new Array, a = !1, r = 0; r < e.length; r++) {
			var o = e[r].LeagueName,
				s = e[r].LeagueID;
			if (d.push("<dd><a href='javascript:selectLeague(\"" + s + '","' + o + "\");'>" + o + "</a></dd>"), s == t) {
				var _ = document.getElementById("spnMeeting");
				_.innerHTML = "<span>" + o + "</span>", a = !0
			}
		}
		if (n.innerHTML = d.join(""), !a) {
			t = e[0].LeagueID;
			var i = e[0].LeagueName,
				_ = document.getElementById("spnMeeting");
			_.innerHTML = "<span>" + i + "</span>"
		}
		SelLeague = t
	}
}
function clickLeagueFilter() {
	var e = document.getElementById("dlLeagueFilter");
	"none" != e.style.display ? e.style.display = "none" : e.style.display = "", window.clearTimeout(btnLeagueFilter), btnLeagueFilter = setTimeout("CloseLeagueFilter()", 3e3)
}
function CloseLeagueFilter() {
	var e = document.getElementById("dlLeagueFilter");
	null != e && (e.style.display = "none")
}
function selectLeague(e, t) {
	var n = document.getElementById("spnMeeting");
	n.innerHTML = "<span>" + t + "</span>";
	var d = document.getElementById("dlLeagueFilter");
	d.style.display = "none", 0 != e && (RT = "W", SelLeague = e, SelRaceNumber = "-1"), LoadHorseOddsData(), LoadFutureRaceData(), CheckInfoData()
}
function setRaceData(e, t) {
	var n = document.getElementById("dlRaceFilter");
	if (null != n) {
		for (var d = new Array, a = !1, r = 0; r < e.length; r++) {
			var o = e[r].RaceID,
				s = e[r].RaceNo;
			if (d.push("<dd><a href='javascript:selectRace(\"" + s + '","' + o + "\");'>" + o + "</a></dd>"), t == s) {
				var _ = document.getElementById("spnRace");
				_.innerHTML = "<span>" + t + "</span>", a = !0
			}
		}
		if (!a) {
			t = e[0].RaceNo;
			var _ = document.getElementById("spnRace");
			_.innerHTML = "<span>" + t + "</span>"
		}
		n.innerHTML = d.join(""), SelRaceNumber = t
	}
}
function clickRaceFilter() {
	var e = document.getElementById("dlRaceFilter");
	"none" != e.style.display ? e.style.display = "none" : e.style.display = "", window.clearTimeout(btnRaceFilter), btnRaceFilter = setTimeout("CloseRaceFilter()", 3e3)
}
function CloseRaceFilter() {
	var e = document.getElementById("dlRaceFilter");
	null != e && (e.style.display = "none")
}
function selectRace(e, t) {
	var n = document.getElementById("spnRace");
	n.innerHTML = "<span>" + t + "</span>";
	var d = document.getElementById("dlRaceFilter");
	d.style.display = "none", 0 != e && (RT = "W", SelRaceNumber = e), LoadHorseOddsData(), LoadFutureRaceData(), CheckInfoData()
}
function betHorse(e, t, n, d, a, r, o) {
	AddHorseTicket(e, t, n, d, a, LastSelectedSport, o)
}
function SelMeetingByLeagueId(e, t) {
	(e != SelLeague || t != SelRaceNumber) && (SelLeague = e, SelRaceNumber = t, RT = "W", LoadHorseOddsData(), LoadFutureRaceData(), CheckInfoData()), window.scrollTo(0, 0)
}
function SelMeetingByFutureRace(e, t) {
	SelMeetingByLeagueId(e, t)
}
function openWindowWithPost(e, t, n, d) {
	var a = 990,
		r = 450,
		o = (screen.width - a) / 2,
		s = o = (screen.height - a) / 2;
	null != popFormGuideWindow && (popFormGuideWindow.close(), popFormGuideWindow = null), popFormGuideWindow = window.open("", t, "toolbar=yes, menubar=yes, scrollbars=yes, resizable=yes, location=yes, status=no,left=" + o + ",top=" + s + ",width=" + a + ",height=" + r), popFormGuideWindow.location.replace(e);
	var _ = "";
	if (_ += "<html><head></head><body><form id='formid' method='post' action='" + e + "'>", n && d && n.length == d.length) for (var i = 0; i < n.length; i++) _ += "<input type='hidden' name='" + n[i] + "' value='" + d[i] + "'/>";
	return _ += "</form><script type='text/javascript'>document.getElementById(\"formid\").submit()</script></body></html>", popFormGuideWindow.document.write(_), popFormGuideWindow.focus(), popFormGuideWindow
}
function OpenAusFormGuide() {
	if (fFrame.IsLogin) {
		var e = [],
			t = [],
			n = "";
		e[0] = "password", t[0] = "tab.3827", n = GetHorseFormguideUrl("AUS", "en"), openWindowWithPost(n, "FormGuide", e, t)
	}
}
function GetHorseFormguideUrl(e, t) {
	var n = "";
	return n = "AUS" == e.toUpperCase() ? "http://www.tabracingdata.com/index.asp" : "ch" == t || "cs" == t ? "http://icardchinese.276868.com" : "http://icard.276868.com/"
}
function GetGreyhoundsFormguideUrl(e, t) {
	var n = "";
	return n = "AUS" == e.toUpperCase() ? "http://www.tabracingdata.com/index.asp" : "http://www.e-tote.com/acqua/raceform.php"
}
function GetHarnessFormguideUrl(e, t) {
	var n = "";
	return n = "AUS" == e.toUpperCase() ? "http://www.tabracingdata.com/index.asp" : "http://www.e-tote.com/acqua/raceform.php"
}
function HrFormG_ButtonTimmerCheck() {
	return 0 == HrFormG_ButtonPush ? (HrFormG_ButtonPush = !0, setTimeout(function() {
		1 == HrFormG_ButtonPush && (HrFormG_ButtonPush = !1)
	}, 5e3), !0) : !1
}
function ShowHorseFormGuide() {
	if (HrFormG_ButtonTimmerCheck() && IsLogin) {
		var e = "";
		"AUS" == RacingCountryCode.toUpperCase() || "" == RacingCountryCode.toUpperCase() ? OpenAusFormGuide() : (e = GetHorseFormguideUrl(RacingCountryCode, UserLang), !popFormGuideWindow || popFormGuideWindow.closed ? (wx = 990, wy = 450, x = (screen.width - wx) / 2, y = x = (screen.height - wx) / 2, popFormGuideWindow = window.open(e, "sub", "toolbar=yes, menubar=yes, scrollbars=yes, resizable=yes, location=yes, status=no,left=" + x + ",top=" + y + ",width=" + wx + ",height=" + wy)) : (popFormGuideWindow.location.replace(e), popFormGuideWindow.focus()))
	}
}
function GrFormG_ButtonTimmerCheck() {
	return 0 == GrFormG_ButtonPush ? (GrFormG_ButtonPush = !0, setTimeout(function() {
		1 == GrFormG_ButtonPush && (GrFormG_ButtonPush = !1)
	}, 5e3), !0) : !1
}
function ShowGreyhoundsFormGuide() {
	if (GrFormG_ButtonTimmerCheck() && IsLogin) {
		var e = "";
		"AUS" == RacingCountryCode.toUpperCase() || "" == RacingCountryCode.toUpperCase() ? OpenAusFormGuide() : (e = GetGreyhoundsFormguideUrl(RacingCountryCode, UserLang), !popFormGuideWindow || popFormGuideWindow.closed ? (wx = 990, wy = 450, x = (screen.width - wx) / 2, y = x = (screen.height - wx) / 2, popFormGuideWindow = window.open(e, "sub", "toolbar=yes, menubar=yes, scrollbars=yes, resizable=yes, location=yes, status=no,left=" + x + ",top=" + y + ",width=" + wx + ",height=" + wy)) : (popFormGuideWindow.location.replace(e), popFormGuideWindow.focus()))
	}
}
function HaFormG_ButtonTimmerCheck() {
	return 0 == HaFormG_ButtonPush ? (HaFormG_ButtonPush = !0, setTimeout(function() {
		1 == HaFormG_ButtonPush && (HaFormG_ButtonPush = !1)
	}, 5e3), !0) : !1
}
function ShowHarnessFormGuide() {
	if (HaFormG_ButtonTimmerCheck() && IsLogin) {
		var e = "";
		"AUS" == RacingCountryCode.toUpperCase() || "" == RacingCountryCode.toUpperCase() ? OpenAusFormGuide() : (e = GetHarnessFormguideUrl(RacingCountryCode, UserLang), !popFormGuideWindow || popFormGuideWindow.closed ? (wx = 990, wy = 450, x = (screen.width - wx) / 2, y = x = (screen.height - wx) / 2, popFormGuideWindow = window.open(e, "sub", "toolbar=yes, menubar=yes, scrollbars=yes, resizable=yes, location=yes, status=no,left=" + x + ",top=" + y + ",width=" + wx + ",height=" + wy)) : (popFormGuideWindow.location.replace(e), popFormGuideWindow.focus()))
	}
}
function HrResult_ButtonTimmerCheck() {
	return 0 == HrResult_ButtonPush ? (HrResult_ButtonPush = !0, setTimeout(function() {
		1 == HrResult_ButtonPush && (HrResult_ButtonPush = !1)
	}, 5e3), !0) : !1
}
function resultHorse() {
	if (HrResult_ButtonTimmerCheck()) {
		var e = new Date;
		e.setTime(e.getTime() - 423e5);
		var t = e.getMonth() + 1 + "/" + e.getDate() + "/" + e.getUTCFullYear(),
			n = SelLeague;
		if ("1" == fFrame.Deposit_SiteMode)"153" == LastSelectedSport ? popupHarnessInfo(t, n) : "152" == LastSelectedSport ? popupGreyhoundsInfo(t, n) : popupHorseInfo(t, n);
		else {
			var d = "../Result.aspx?selectDate=" + t + "&hrleague=" + n + "&sportType=" + LastSelectedSport + "&mode=sport&fromHorse=Yes";
			popHorseResult(d)
		}
	}
}
function popHorseResult(e) {
	IsLogin && (!popHorseResultWindow || popHorseResultWindow.closed ? (width = 800, height = 693, x = (screen.width - width) / 2, y = (screen.height - height) / 2, popHorseResultWindow = window.open(e, "sub", "scrollbars=yes, resizable=yes, left=" + x + ",top=" + y + ",width=" + width + ",height=" + height)) : (popHorseResultWindow.location.replace(e), popHorseResultWindow.focus()))
}
function ChagneHorseNote(e) {
	var t = document.getElementById("noteValue");
	null != t && "" != e ? t.innerHTML = e : setTimeout("ChagneHorseNote('" + e + "',100)")
}
function ChagneHorseCountryCode(e) {
	RacingCountryCode = e
}
function CheckNum(e) {
	return result = e.match(/[^0-9]/g), result || !e ? !1 : !0
}
function ChagneStadium(e) {
	var t = document.getElementById("Stadium");
	null != t && "" != e && (t.value = e)
}
function HorseKeeper() {
	function e(e) {
		var t = "";
		return void 0 != e && (t = e.innerHTML, t = t.replace(/%7B/g, "{"), t = t.replace(/%7D/g, "}"), t = t.replace(/[	\n]/g, "")), t
	}
	function t(e) {
		var t = O.TemplateFrame.document.getElementById(e);
		if (null != t) {
			var n = t.parentNode.innerHTML;
			return n = n.substring(0, n.indexOf(t.innerHTML) - 1), n = n.substr(n.lastIndexOf("<"))
		}
		return "<table>"
	}
	function n() {
		var e = O.TemplateFrame.document.getElementById(f);
		if (null != e) {
			var t = e.parentNode.innerHTML;
			return t = t.substring(0, t.indexOf(e.innerHTML) - 1), t = t.substr(t.lastIndexOf("<")), t + e.innerHTML + "</colgroup>"
		}
		return ""
	}
	function d() {
		if (0 == O.EventList.length) return "";
		var e = O.TemplateFrame.document.getElementById(T);
		return null != e ? e.innerHTML : ""
	}
	function a() {
		if (0 == O.EventList.length) return "";
		var e = _replaceTags(O.EventList[0], R);
		return null != O.afterNewFooter && (e = O.afterNewFooter(O.EventList, e)), e
	}
	function r(e) {
		var t = _replaceTags(O.EventList[e], p);
		return null != O.afterNewLeague && (t = O.afterNewLeague(O.EventList, e, t)), t
	}
	function o(e) {
		var t;
		return t = _replaceTags(O.EventList[e], F), null != O.afterNewEvent && (t = O.afterNewEvent(O.EventList, e, t)), t
	}
	function s(e) {
		var t;
		return t = _replaceTags(O.EventList[e], S), null != O.afterNewEvent && (t = O.afterNewEvent(O.EventList, e, t)), t
	}
	function _(e) {
		var _ = new Array;
		if (O.HtmlList = new Array, O.HtmlList.length = O.EventList.length, _.push(t(e)), _.push(n()), e == I) {
			O.EventList.length > 0 && _.push(r(0));
			var i = _.join("");
			return i
		}
		e == M && _.push("<THead>" + d() + "</THead><TBody>");
		for (var l, u, c = 0; c < O.EventList.length; c++) {
			var D = O.EventList[c].MatchId;
			l != D ? (l = D, y[D] = c, u = s(c)) : u = o(c), O.HtmlList[c] = u, _.push(u)
		}
		_.push("</TBody>"), _.push("<TFooter>" + a() + "</TFooter></Table>");
		var i = _.join("");
		return i
	}
	function i(e) {
		for (var t = 0; t < e.length; t++) {
			var n = e[t][0],
				d = y[n];
			if (null != d) {
				for (; d < O.EventList.length && O.EventList[d].MatchId == n;) {
					var a = O.EventList[d];
					a.Status = e[t][2], a.TrackCondition = e[t][3], a.oddsstatus = e[0][4], a.Minutes2Post = e[0][5], a.WinPool = e[0][6], a.PlacePool = e[0][7], a.WinPool2 = e[0][8], a.PlacePool2 = e[0][9], d++
				}
				g[n] = "Match"
			}
		}
	}
	function l(e) {
		for (var t in L) if (!isNaN(t)) {
			var n = y[t];
			if (null == n) continue;
			O.EventList[n].WinChanged = "", O.EventList[n].PlaceChanged = "", O.EventList[n].Win2Changed = "", O.EventList[n].Place2Changed = "", g[t] = "oddsClear"
		}
		L = new Array;
		for (var d = 0; d < e.length; d++) {
			var t = e[d][0],
				a = e[d][1],
				r = e[d][2],
				o = e[d][3],
				s = e[d][4],
				n = y[t];
			null != n && O.EventList[n].WinOdds != a && (O.EventList[n].WinOdds = a, O.EventList[n].WinChanged = B, L[O.EventList[n].MatchId] = 1, g[O.EventList[n].MatchId] = "oddsNew"), null != n && O.EventList[n].PlaceOdds != r && (O.EventList[n].PlaceOdds = r, O.EventList[n].PlaceChanged = B, L[O.EventList[n].MatchId] = 1, g[O.EventList[n].MatchId] = "oddsNew"), null != n && O.EventList[n].WinOdds2 != o && (O.EventList[n].WinOdds2 = o, O.EventList[n].Win2Changed = B, L[O.EventList[n].MatchId] = 1, g[O.EventList[n].MatchId] = "oddsNew"), null != n && O.EventList[n].PlaceOdds2 != s && (O.EventList[n].PlaceOdds2 = s, O.EventList[n].Place2Changed = B, L[O.EventList[n].MatchId] = 1, g[O.EventList[n].MatchId] = "oddsNew")
		}
	}
	function u(e) {
		for (var t = 0; t < e.length; t++) {
			var n = e[t],
				d = y[n];
			O.EventList = arrayRemove(O.EventList, d, d), O.HtmlList = arrayRemove(O.HtmlList, d, d);
			for (var a = O.EventList.length - 1; a >= d; a--) y[O.EventList[a].MatchId] = a
		}
	}
	function c(e) {
		for (var t, n, d = 0; d < e.length; d++) {
			n = _hashData(e[d], O.DataTags), "" == n.ProgramId && (n.ProgramId = t.ProgramId, n.LeagueName = t.LeagueName, n.RaceNumber = t.RaceNumber, n.TrackType = t.TrackType, n.Distance = t.Distance, n.RaceTime = t.RaceTime, n.RaceName = t.RaceName, n.PriceMoney = t.PriceMoney, n.RaceCondition = t.RaceCondition, n.TrackCondition = t.TrackCondition, n.WinPool = t.WinPool, n.PlacePool = t.PlacePool, n.WinPool2 = t.WinPool2, n.PlacePool2 = t.PlacePool2, n.intRaceNumber = t.intRaceNumber), t = n;
			var a = O.findMatchCode(n.MatchCode, n.Odds);
			O.EventList = arrayInsert(O.EventList, a, new Array(n)), O.HtmlList = arrayInsert(O.HtmlList, a, ["insert temp string"]), g[n.MatchId] = "ins"
		}
	}
	function D(e) {
		for (var t in e) {
			g[t] = "srt";
			var n = e[t],
				d = y[t],
				a = O.EventList[d];
			a.MatchCode = n, O.EventList = arrayRemove(O.EventList, d, d), O.HtmlList = arrayRemove(O.HtmlList, d, d);
			var r = O.findMatchCode(n, a.Odds);
			O.EventList = arrayInsert(O.EventList, r, [a]), O.HtmlList = arrayInsert(O.HtmlList, r, ["resort temp string"]);
			for (var o = r > d ? d : r, s = O.EventList.length - 1; s >= o; s--) y[O.EventList[s].MatchId] = s
		}
	}
	function m(e) {
		var _ = new Array;
		if (_.push(t(e)), _.push(n()), e == I) {
			O.EventList.length > 0 && _.push(r(0));
			var i = _.join("");
			return i
		}
		e == M && _.push("<THead>" + d() + "</THead><TBody>");
		for (var l, u = "0", c = 0; c < O.EventList.length; c++) {
			var D = c % O.DivBase,
				m = O.EventList[c],
				E = O.EventList[c].MatchId;
			(null != g[m.MatchId] || m.Div != D) && (m.Div = D, O.HtmlList[c] = l != E ? s(c) : o(c)), _.push(O.HtmlList[c]), l != E && (l = E, y[E] = c);
			var p = m.MatchCode;
			u = p
		}
		_.push("</TBody>"), _.push("<TFooter>" + a() + "</TFooter></Table>");
		var i = _.join("");
		return i
	}
	var O = this,
		E = null,
		p = void 0,
		F = void 0,
		S = void 0,
		R = void 0,
		y = new Array,
		g = new Array,
		L = new Array,
		I = "tmplLTable",
		M = "tmplTable",
		f = "tmplColgroup",
		T = "tmplHeader",
		h = "tmplFooter",
		v = "tmplLeague",
		A = "tmplEvent",
		P = "tmplEventMaster",
		B = "Odds_Upd";
	this.DivBase = 2, this.HashHeader = null, this.DataTags = null, this.EventList = null, this.HtmlList = null, this.TemplateFrame = null, this.DataFrame = null, this.LeagueContainer = null, this.TableContainer = null, this.BetTypes = null, this.getTable = function() {
		return E
	}, this.setTemplate = function(t) {
		this.TemplateFrame = t;
		var n = this.TemplateFrame.document.getElementById(v);
		p = e(n), p = _formatTemplate(p, "{%", "}"), n = this.TemplateFrame.document.getElementById(A), F = e(n), F = _formatTemplate(F, "{%", "}"), n = this.TemplateFrame.document.getElementById(P), null == n ? S = F : (S = e(n), S = _formatTemplate(S, "{%", "}")), n = this.TemplateFrame.document.getElementById(h), R = e(n), R = _formatTemplate(R, "{%", "}")
	}, this.setDatas = function(e, t) {
		this.DataTags = t;
		for (var n = new Array(e.length), d = 0; d < e.length; d++) {
			var a = _hashData(e[d], t),
				r = n[d - 1];
			"" == a.ProgramId && (a.ProgramId = r.ProgramId, a.LeagueName = r.LeagueName, a.RaceNumber = r.RaceNumber, a.TrackType = r.TrackType, a.Distance = r.Distance, a.RaceTime = r.RaceTime, a.RaceName = r.RaceName, a.PriceMoney = r.PriceMoney, a.RaceCondition = r.RaceCondition, a.TrackCondition = r.TrackCondition, a.WinPool = r.WinPool, a.PlacePool = r.PlacePool, a.WinPool2 = r.WinPool2, a.PlacePool2 = r.PlacePool2, a.intRaceNumber = r.intRaceNumber), a.Div = d % this.DivBase, null != this.afterSetData && this.afterSetData(d, a, n), n[d] = a
		}
		this.EventList = n
	}, this.paintOddsTable = function() {
		null != this.LeagueContainer && (this.LeagueContainer.innerHTML = _(I)), this.TableContainer.innerHTML = _(M), E = this.TableContainer.childNodes[0], null != this.afterRepaintTable && this.afterRepaintTable(E, this.EventList)
	}, this.refreshOddsTable = function(e, t, n, d, a) {
		g = new Array, i(d), l(a), u(e), D(t), c(n), this.regenTableHtml(), void 0 != this.afterRepaintTable && this.afterRepaintTable(E)
	}, this.findMatchCode = function(e) {
		var t, n = 0,
			d = this.EventList.length - 1;
		if (0 == this.EventList.length) return 0;
		if (e >= this.EventList[d].MatchCode) return d + 1;
		if (e < this.EventList[n].MatchCode) return n;
		for (; d >= n;) {
			t = Math.ceil((n + d) / 2);
			var a = this.EventList[t].MatchCode;
			if (e > a) n = t + 1;
			else if (a > e) d = t - 1;
			else for (t += 1; t < this.EventList.length; t++) if (this.EventList[t].MatchCode != e) return t
		}
		for (t + 1 >= this.EventList.length && (t = this.EventList.length - 2), t += 1; t >= 0; t--) if (this.EventList[t].MatchCode <= e) return t + 1;
		return 0
	}, this.regenTableHtml = function() {
		null != this.LeagueContainer && (this.LeagueContainer.innerHTML = m(I)), this.TableContainer.innerHTML = m(M), arrTicks.push((new Date).getTime()), E = this.TableContainer.childNodes[0]
	}
}
function _replaceTags(e, t) {
	var n = new Array(2 * t.length - 1);
	n[0] = t[0];
	for (var d, a = 1; a < t.length; a++) d = 2 * a, n[d - 1] = e[t[a][0]], n[d] = t[a][1];
	return n.join("")
}
function replaceTags(e, t) {
	return _replaceTags(e, _formatTemplate(t, "{%", "}"))
}
function _formatTemplate(e, t, n) {
	for (var d = e.split(t), a = 1; a < d.length; a++) {
		var r = d[a].indexOf(n),
			o = d[a].substr(0, r),
			s = d[a].substr(r + 1, d[a].length - r);
		d[a] = [o, s]
	}
	return d
}
function _initialTags(e) {
	for (var t = e.match(/{%.+?}/g), n = new Hashtable, d = 0; d < t.length; d++) {
		var a = t[d].substr(2, t[d].length - 3);
		n.put(a, a)
	}
	return n.getValues()
}
function _hashData(e, t) {
	for (var n = new Array, d = 0; d < t.length; d++) n[t[d]] = e[d];
	return n
}
function _mergeHash(e, t) {
	for (var n in t) e[n] = t[n]
}
function arrayRemove(e, t, n) {
	if (null == n && (n = t), t > n) return e;
	0 > t && (t = 0), n >= e.length && (n = e.length - 1);
	var d = e.slice(0, t),
		a = e.slice(n + 1);
	return d.concat(a)
}
function arrayInsert(e, t, n) {
	if (0 >= t) return n.concat(e);
	if (t >= e.length) return e.concat(n);
	var d = e.slice(0, t),
		a = e.slice(t);
	return d = d.concat(n), d.concat(a)
}
function refreshFeaturedData() {
	var e = document.getElementById(TMPL_TOPFeaturedDATA_ID);
	e.submit()
}
function FeaturedParser(e, t) {
	var n = "",
		d = "",
		a = "";
	d = 0 == e.length || 1 == $("#League_TOPValue").val() ? "style='display: none'" : "style='display:'", a = 0 == t.length ? "style='display: none'" : "style='display:'";
	var r = "<table class='Oddstab' id='H_TOP_1' " + d + ">" + document.getElementById(TMPL_TOPLeague_ID).innerHTML,
		o = "<table class='Oddstab' id='H_TOP_2' " + a + ">" + document.getElementById(TMPL_TOPLeague_ID2).innerHTML,
		s = League_tmpl.document.getElementById(TMPL_TOPHEADER_ID).innerHTML,
		_ = League_tmpl.document.getElementById(TMPL_TOPDATE_ID).innerHTML,
		l = League_tmpl.document.getElementById(TMPL_TOPDATE_L_ID).innerHTML,
		u = document.getElementById("DivMainOdds"),
		c = "</table>",
		D = '<tr align="center"><td colspan="9">No Data</td></tr>';
	if (s = s.replace(/{@DisplayCls}/g, "odds_open"), n += r + s, n = n.replace(/H_{%BlockId}_{%KickoffDate}_{%LeagueId}/g, "TopHead_1"), 0 == e.length) n += D;
	else for (i = 0; i < e.length; i++) n += Parser1x2(e[i], _, "t", i);
	if (n += c, n += o + s, n = n.replace(/H_{%BlockId}_{%KickoffDate}_{%LeagueId}/g, "TopHead_2"), 0 == t.length) n += D;
	else for (i = 0; i < t.length; i++) n += Parser1x2(t[i], l, "l", i);
	n += c, React.unmountComponentAtNode(u), u.innerHTML = n
}
function Parser1x2(e, t, n, d) {
	var a = t;
	a = a.replace(/{%Odds_5_1}/g, e[13]), a = a.replace(/{%Odds_5_X}/g, e[14]), a = a.replace(/{%Odds_5_2}/g, e[15]), a = a.replace(/{@DisplayCls}/g, "odds_open");
	var r = "{Breadcrumbs:{ Ids:'1',Names:'Soccer' },MatchDataQstr:{ FixtureType:'l',Game:0,Id:{%MatchId},Scope:'Match',SportType:'1',tstamp:0}}",
		o = "{Breadcrumbs:{ Ids:'1',Names:'Soccer' },MatchDataQstr:{ FixtureType:'e',Game:0,Id:{%MatchId},Scope:'Match',SportType:'1',tstamp:0}}";
	return a = "l" == n ? a.replace(/clickMore\({%Sporttype}\,\'{%MatchId}\'\)/g, "newQuery(" + r + ")") : a.replace(/clickMore\({%Sporttype}\,\'{%MatchId}\'\)/g, "newQuery(" + o + ")"), a = d % 2 == 0 ? "l" == n ? a.replace(/{@Tr_Cls}/g, "bglivelight") : a.replace(/{@Tr_Cls}/g, "oddstr1") : "l" == n ? a.replace(/{@Tr_Cls}/g, "bglive") : a.replace(/{@Tr_Cls}/g, "oddstr2"), a = "0" != e[17] ? 0 == IsLogin ? a.replace(/{@StatsInfo}/g, getStatsHtml(e[0])) : a.replace(/{@StatsInfo}/g, getStatsHtml(e[0])) : a.replace(/{@StatsInfo}/g, ""), a = "0" == e[18] ? a.replace(/{@Streaming}/g, "") : "l" == n ? a.replace(/{@Streaming}/g, getStreamingHtml(e[0], e[18], !0)) : a.replace(/{@Streaming}/g, getStreamingHtml(e[0], e[18], !1)), a = "True" != e[19] ? a.replace(/{@SportRadar}/g, "") : 0 == IsLogin ? a.replace(/{@SportRadar}/g, getSportRadarHtml(e[0])) : a.replace(/{@SportRadar}/g, getSportRadarHtml(e[0])), "l" == n ? (a = a.replace(/{%Changed_Score}/g, ""), a = a.replace(/{%ScoreH}/g, e[25]), a = a.replace(/{%ScoreA}/g, e[26]), a = a.replace(/{@LiveIcon}/g, "<img src='" + fFrame.imgServerURL + SkinRootPath + "public/images/layout/liveicon.gif'>"), a = e[16] ? a.replace(/{@LiveTimeCls}/g, "LiveTime") : a.replace(/{@LiveTimeCls}/g, "IsLive"), a = a.replace(/{@InjuryTime}/g, ""), a = a.replace(/{%ShowTime}/g, e[24])) : (a = a.replace(/{@LiveIcon}/g, ""), a = a.replace(/{%ShowTime}/g, e[28])), a = a.replace(/{@isParlay}/g, 0), a = a.replace(/{%OddsId}/g, e[27]), a = a.replace(/{%Sporttype}/g, 1), a = a.replace(/{%LeagueId}/g, e[7]), a = a.replace(/{%MatchId}/g, e[0]), a = a.replace(/{%MoreCount}/g, e[20]), a = a.replace(/{%HomeName}/g, e[22]), a = a.replace(/{%AwayName}/g, e[23])
}
function StartRun() {
	initialTmpl("League_tmpl", "Match_tmpl.aspx?Scope=League", "StartRun()") && (RefreshCount = REFRESH_COUNTDOWN, window.clearTimeout(RefresHandle), window.clearTimeout(TimerBtnStar), $("#League_TOPValue").val(0), setOddsDisplay("0", "0", "d", "League", "0", "0", "0"))
}
function InPlayRun() {
	initialTmpl("League_tmpl", "Match_tmpl.aspx?Scope=League", "StartRun()") && (RefreshCount = REFRESH_COUNTDOWN, window.clearTimeout(RefresHandle), window.clearTimeout(TimerBtnStar), setOddsDisplay("0", "0", "d", "League", "0", "0", "0"), $("#League_TOPValue").val(1), SetHomeADDisp(!0))
}
function fxn(e) {
	return 13 == e.keyCode ? callSubmit() : void 0
}
function callSubmit(e) {
	var t, n, d, a, r, o;
	return t = document.getElementById("txtID"), "" == t.value ? (t.focus(), alert(error_username), !1) : (a = document.getElementById("txtPW"), "" == a.value ? (a.focus(), alert(error_password), !1) : (r = document.getElementById("txtCode"), "" == r.value ? (r.focus(), alert(error_validation), !1) : (n = CFS(a.value), d = n + r.value, a.value = MD5(d), o = document.getElementById("hidubmit"), null != o && (o.value = e), void 0 != IeVer && null != document.getElementById("IEVerison") && (document.getElementById("IEVerison").value = IeVer), document.frmLogin.submit(), !1)))
}
function LoadData(e, t) {
	void 0 != e && !initialTmpl(e, t, "LoadData();")
}
function LoadTmpl() {
	return initialTmpl("VirtualSports_tmpl", "../VirtualSports_tmpl.aspx", "LoadTmpl();") ? !0 : !1
}
function GetEventData() {
	null != VirtualSporstBody && (document.getElementById("DivMainOdds").innerHTML = VirtualSporstBody, sKeeperList = null, sKeeperList = new SimpleOddsKeeper, sKeeperList.TableContainer = document.getElementById("MatchList"), sKeeperList.DivTmpl = document.getElementById("VirtualSports_tmpl").contentWindow.document.getElementById("MatchList_" + sSport).innerHTML, sKeeper = null, sKeeper = new SimpleOddsKeeper, sKeeper.TableContainer = document.getElementById("oTableContainer"), sKeeper.DivTmpl = document.getElementById("VirtualSports_tmpl").contentWindow.document.getElementById("Event_" + sSport).innerHTML, LoadOddsData(!1))
}
function LoadOddsData(e) {
	if (!e || !btnSwitch) {
		btnstop(), null != refreshHandle && "undefined" != typeof refreshHandle && (clearTimeout(refreshHandle), refreshHandle = null), null != oddsHandle && "undefined" != typeof oddsHandle && (clearTimeout(oddsHandle), oddsHandle = null);
		var t = new Object;
		switch (t.matchid = SelMatchid, t.tag = sSport, ThreadId = sSport, sSport) {
		case "180":
		default:
			ExecAjax("../VirtualSports_data.aspx", t, "POST", sSport, "ParseOddsData", "RetryOddsData")
		}
	}
}
function ClearOddsData() {
	null != oddsHandle && "undefined" != typeof oddsHandle && (clearTimeout(oddsHandle), oddsHandle = null), sKeeperList.newHash.trColor_0 = "live", sKeeperList.newHash.link_0 = "IsLive", sKeeperList.newHash.link_1 = "IsLive", sKeeperList.paintOddsTable()
}
function ParseOddsData(e) {
	odata = JSON.parse(e);
	var t = odata.MatchList,
		n = odata.NextTime;
	if (null == document.getElementById("MatchList")) return void(null != refreshHandle && window.clearTimeout(refreshHandle));
	if (t.length > 0) {
		if (refreshHandle = window.setTimeout("LoadOddsData(false);", 1e3 * (n + 120)), n > 0 && (oddsHandle = window.setTimeout("ClearOddsData();", 1e3 * (n - 1))), t.length > 4) {
			for (var d = 0; 5 > d; d++) sKeeperList.newHash["MatchId_" + d] = t[d][1], sKeeperList.newHash["ShowTime_" + d] = t[d][2], sKeeperList.newHash["TeamName_" + d] = t[d][3] + " vs " + t[d][4], sKeeperList.newHash["TeamNameA_" + d] = t[d][3], sKeeperList.newHash["TeamNameH_" + d] = t[d][4], sKeeperList.newHash["display_" + d] = CLS_LS_ON;
			for (var d = 0; 5 > d; d++) sKeeperList.newHash["display_" + d] = CLS_LS_OFF
		} else {
			for (var d = 0; d < t.length - 1; d++) sKeeperList.newHash["MatchId_" + d] = t[d][1], sKeeperList.newHash["ShowTime_" + d] = t[d][2], sKeeperList.newHash["TeamName_" + d] = t[d][3] + " vs " + t[d][4], sKeeperList.newHash["TeamNameA_" + d] = t[d][3], sKeeperList.newHash["TeamNameH_" + d] = t[d][4], sKeeperList.newHash["display_" + d] = CLS_LS_ON;
			for (var d = 0; d < t.length - 1; d++) sKeeperList.newHash["display_" + d] = CLS_LS_OFF
		}
		0 >= n ? (sKeeperList.newHash.trColor_0 = "live", sKeeperList.newHash.link_0 = "IsLive", sKeeperList.newHash.link_1 = "IsLive") : (sKeeperList.newHash.trColor_0 = "bgcpe", sKeeperList.newHash.link_0 = "text_time", sKeeperList.newHash.link_1 = "UdrDogTeamClass"), sKeeperList.paintOddsTable()
	}
	if (!(t.length > 0)) return document.getElementById("MatchList").style.display = "none", document.getElementById("NoInfo").style.display = "", document.getElementById("oTableContainer").innerHTML = "", document.getElementById("CurrEventTitle").innerHTML = "", void window.setTimeout("LoadOddsData(false)", 3e4);
	document.getElementById("MatchList").style.display = "", document.getElementById("NoInfo").style.display = "none", document.getElementById("CurrEventTitle").innerHTML = t[0][2] + " " + t[0][3] + " vs " + t[0][4];
	var a = document.getElementById("spnStartTime").innerHTML;
	("" == SelMatchid || a < t[0][2]) && (SelMatchid = t[0][1]);
	for (var d = 0; d < odata.OddsData.length; d++) if (odata.OddsData[d].MatchID == SelMatchid) {
		Odds = odata.OddsData[d];
		break
	}
	sKeeper.MUID = SelMatchid, sKeeper.MatchId = SelMatchid, sKeeper.oHash.MatchId = SelMatchid;
	for (var d = 0; d < t.length; d++) t[d][1] == SelMatchid && (sKeeper.newHash.SelTitle = t[d][2] + " " + t[d][3] + " vs " + t[d][4], sKeeper.newHash.NameH = t[d][3], sKeeper.newHash.NameA = t[d][4], null != document.getElementById("spnStartTime") && (document.getElementById("spnStartTime").innerHTML = t[d][2]), null != document.getElementById("spnHomeName") && (document.getElementById("spnHomeName").innerHTML = t[d][3]), null != document.getElementById("spnAwayName") && (document.getElementById("spnAwayName").innerHTML = t[d][4]));
	for (var r = new Array("1201", "1203", "1204", "1205", "1206", "1224"), d = 0; d < r.length; d++) null != Odds && null != Odds["BetType" + r[d]] && sKeeper.setDatas(Odds["BetType" + r[d]], MultiSportODDS_DEF[parseInt(r[d], 10)]);
	var o = "+" + sKeeper.oHash.Value_1201.replace("-", ", +");
	switch (sKeeper.oHash.FavorF) {
	case "h":
		sKeeper.newHash.Home_Cls = CLS_HDP_F, sKeeper.newHash.Away_Cls = CLS_HDP_N, sKeeper.newHash.Value_1201_H = o.replace(new RegExp("\\+", "g"), "-"), sKeeper.newHash.Value_1201_A = o;
		break;
	case "a":
		sKeeper.newHash.Home_Cls = CLS_HDP_N, sKeeper.newHash.Away_Cls = CLS_HDP_F, sKeeper.newHash.Value_1201_H = o, sKeeper.newHash.Value_1201_A = o.replace(new RegExp("\\+", "g"), "-");
		break;
	default:
		sKeeper.newHash.Home_Cls = CLS_HDP_N, sKeeper.newHash.Away_Cls = CLS_HDP_N, "" != sKeeper.oHash.Odds_1201_H ? (sKeeper.newHash.Value_1201_H = "+0", sKeeper.newHash.Value_1201_A = "-0") : (sKeeper.newHash.Value_1201_H = "", sKeeper.newHash.Value_1201_A = ""), sKeeper.newHash.Value_1201_A = ""
	}
	"" != sKeeper.oHash.OddsId_1205 ? sKeeper.newHash.draw = CLS_LS_ON : sKeeper.newHash.draw = CLS_LS_OFF, "" != sKeeper.oHash.Goal_1203 ? sKeeper.newHash.UNDER_1203 = CLS_LS_ON : sKeeper.newHash.UNDER_1203 = CLS_LS_OFF, sKeeper.paintOddsTable(), btnHandle = window.setTimeout("btnstart()", 3e3)
}
function SelMatch(e, t) {
	sSport = t, SelMatchid = e, LoadOddsData(!0)
}
function _formatTemplate(e, t, n) {
	for (var d = e.split(t), a = 1; a < d.length; a++) {
		var r = d[a].indexOf(n);
		d[a] = [d[a].substr(0, r), d[a].substr(r + 1, d[a].length - r)]
	}
	return d
}
function SimpleOddsKeeper() {
	function e(e, t, n) {
		for (var d = Math.min(e.length, t.length), a = 0; d > a; a++) n[t[a]] = e[a];
		return n
	}
	function t(e, t) {
		var n = new Array(2 * t.length - 1);
		n[0] = t[0];
		for (var d, a = 1; a < t.length; a++) d = 2 * a, n[d - 1] = e[t[a][0]], n[d] = t[a][1];
		return n.join("")
	}
	this.TableContainer = null, this.DivTmpl = null, this.newHash = new Array, this.oHash = new Array, this.MUID = null, this.MatchId = null, this.isParlay = "false", this.Market = "", this.setDatas = function(t, n) {
		this.oHash = e(t, n, this.oHash)
	}, this.paintOddsTable = function() {
		var e;
		this.TableContainer.innerHTML = this.DivTmpl, null != this.oHash && (e = _formatTemplate(this.TableContainer.innerHTML, "{%", "}"), this.TableContainer.innerHTML = t(this.oHash, e)), null != this.newHash && (e = _formatTemplate(this.TableContainer.innerHTML, "{@", "}"), this.TableContainer.innerHTML = t(this.newHash, e))
	}, this.updateOdds = function(e, t, n) {
		for (var d = !1, a = 0; a < n.length; a++) for (var r = 1; r < MultiSportODDS_DEF[parseInt(n[a], 10)].length; r++) {
			if (e[MultiSportODDS_DEF[parseInt(n[a], 10)][r]] != t[MultiSportODDS_DEF[parseInt(n[a], 10)][r]]) {
				t["Changed_" + n[a]] = CLS_UPD, d = !0;
				break
			}(new Date).getTime() - sKeeperUpdateOddsTime > 3e4 ? t["Changed_" + n[a]] = "" : t["Changed_" + n[a]] = CLS_UPD
		}
		return d && (sKeeperUpdateOddsTime = (new Date).getTime()), t
	}
}
function MargeOddsArray(e) {
	for (var t = new Array, n = 0; n < ARR_BETYPE_DEF[e].length; n++) t = t.concat(MultiSportODDS_DEF[ARR_BETYPE_DEF[e][n]]);
	return t
}
function getDataClass() {
	function e(e) {
		return 304 === e || e >= 200 && 207 >= e
	}
	function t(e) {
		return "" != e.url
	}
	function n(e, t) {
		d(u, l, e, t)
	}
	function d(e, n, d, a) {
		if ("undefined" == typeof c[e] && (c[e] = {
			queue: [],
			xhrObj: null
		}), "undefined" != typeof n) {
			var r = {};
			for (var o in n) r[o] = n[o];
			n = r, c[e].queue.push({
				options: n,
				originalComplete: r.complete,
				autoRepeat: a,
				interval: d,
				timer: null
			}), n.complete = function(n, d) {
				if (c[e].queue.length > 0) {
					var a = c[e].queue[0];
					c[e].queue.shift(), c[e].xhrObj = null, a.originalComplete && a.originalComplete(n, d), a.autoRepeat === !0 && c[e].queue.push(a), c[e].queue.length > 0 && t(c[e].queue[0].options) && (c[e].queue[0].timer = setTimeout(function() {
						c[e].xhrObj = jQuery.ajax(c[e].queue[0].options)
					}, c[e].queue[0].interval))
				}
			}, 1 == c[e].queue.length && null == c[e].xhrObj && (t(n) ? c[e].queue[0].timer = setTimeout(function() {
				c[e].xhrObj = jQuery.ajax(c[e].queue[0].options)
			}, c[e].queue[0].interval) : (c[e].queue.shift(), c[e].xhrObj = null))
		}
	}
	function a(e) {
		"undefined" != typeof c[e] && c[e].xhrObj && (c[e].xhrObj.abort(), c[e].xhrObj = null)
	}
	function r(e) {
		n(0, !1), n(e, !0)
	}
	function o() {
		"undefined" != typeof c[u] && (c[u].queue.length > 0 && clearTimeout(c[u].queue[0].timer), c[u].queue = []), a(u)
	}
	function s() {
		l = {
			url: i.url,
			data: i.param,
			contentType: _.contentType,
			dataType: _.dataType,
			type: _.type,
			ifModified: _.ifModified,
			cache: _.cache,
			async: !0,
			timeout: _.timeout,
			beforeSend: function() {},
			error: function(e, t, n) {},
			complete: function(t, n) {
				!e(t.status) || "success" != n && "notmodified" != n ? "function" == typeof i.feedBack && i.feedBack(t, n) : "function" == typeof i.callBack && i.callBack(t)
			}
		}
	}
	var _ = {
		contentType: "application/x-www-form-urlencoded",
		dataType: "script",
		type: "POST",
		cache: !0,
		ifModified: !0,
		timeout: 1e4
	},
		i = {
			url: "",
			param: "",
			callBack: null,
			feedBack: null
		},
		l = {},
		u = "OneXQueue",
		c = {};
	this.SetAjaxAttr = function(e, t) {
		"undefined" != typeof i[e] ? i[e] = t : "undefined" != typeof _[e] && (_[e] = t), s()
	}, this.GetAjaxAttr = function(e) {
		return "undefined" != typeof i[e] ? i[e] : "undefined" != typeof _[e] ? _[e] : void 0
	}, this.AutoGetData = function(e) {
		r(e)
	}, this.StopGetData = function() {
		o()
	}, this.GetData = function() {
		n(0, !1)
	}, this.GetDataCustomize = function(e, t) {
		d(e, t, 0, !1)
	}, this.AbortRequest = function(e) {
		a(e)
	}
}
function OverWriteFormSubmit() {
	if (null != ajaxDataObj) for (var e = 0; e < document.forms.length; e++) document.forms[e].submit = null, document.forms[e].submit = function() {
		Submit(this, null)
	}
}
function recallAjax(e) {
	null != ThreadList[e] && (ajaxDataObj.AbortRequest(e), ajaxDataObj.GetDataCustomize(e, ThreadList[e]))
}
function ExecAjax(url, param, type, ThreadId, FName_Success, FName_Timeout) {
	ajaxDataObj.AbortRequest(ThreadId);
	var Options = new Object;
	switch (Options.url = url, Options.data = param, Options.contentType = "application/x-www-form-urlencoded", Options.dataType = "text", type.toUpperCase()) {
	case "GET":
	case "POST":
		Options.type = type.toUpperCase();
		break;
	default:
		Options.type = "GET"
	}
	Options.ifModified = !0, Options.cache = !1, Options.async = !0, Options.timeout = 2e4, Options.beforeSend = null, Options.error = null, Options.complete = function(xhr, status) {
		HTTPStatusOK(xhr.status) && "success" == status ? eval(FName_Success + "(xhr.responseText);") : "timeout" == status && null != FName_Timeout && "" != FName_Timeout && "undefined" != FName_Timeout && eval(FName_Timeout + "();")
	}, ThreadList[ThreadId] = Options, ajaxDataObj.GetDataCustomize(ThreadId, Options)
}
function Submit(e, t) {
	null == t && (t = !0);
	var n = "#fomConfirmBet#,#fomConfirmBetPhone#,#betform#,#fomBingoConfirmBet#";
	n.indexOf("#" + e.name + "#") > -1 && (t = !1), ajaxDataObj.AbortRequest(e.name);
	var d = new Object,
		a = new Object;
	for (r = 0; r < e.elements.length; r++) switch (e.elements[r].type) {
	case "text":
	case "hidden":
	case "select-one":
		d[e.elements[r].name] = e.elements[r].value;
		break;
	case "checkbox":
		e.elements[r].checked && (void 0 == a[e.elements[r].name] ? a[e.elements[r].name] = e.elements[r].value : a[e.elements[r].name] = a[e.elements[r].name] + "," + e.elements[r].value)
	}
	for (var r = 0; r < Object.keys(a).length; r++) {
		var o = a[Object.keys(a)[r]].split(",");
		$("[name='" + Object.keys(a)[r] + "']").length > 1 ? d[Object.keys(a)[r]] = o : d[Object.keys(a)[r]] = o[0]
	}
	var s = new Object;
	s.url = e.action, s.data = d, s.contentType = "application/x-www-form-urlencoded", s.dataType = "text", "" == e.method ? s.type = "GET" : s.type = e.method.toUpperCase(), s.ifModified = !0, s.cache = !1, s.async = t, s.timeout = 2e4, s.beforeSend = null, s.error = null, s.complete = function(t, n) {
		HTTPStatusOK(t.status) && "success" == n && DataArrived(t, e.target)
	}, ajaxDataObj.GetDataCustomize(e.name, s)
}
function HTTPStatusOK(e) {
	return 304 === e || e >= 200 && 207 >= e
}
function DataArrived(e, t) {
	var n = document.getElementById(t);
	null == n && (n = document.getElementsByName(t)[0]), "iframe" == n.tagName.toLowerCase() ? putIFrameDocument(n, e.responseText) : n.innerHTML = e.responseText
}
function putIFrameDocument(e, t) {
	if (isIe) {
		var n = e.contentWindow;
		n.document.designMode = "on", n.document.open(), n.document.write(t), n.document.designMode = "off", n.document.close()
	} else {
		var n = e.contentWindow;
		n.document.open(), n.document.clear(), n.document.write(t), n.document.close()
	}
}
function getBrowserVer() {
	var e, t = {},
		n = navigator.userAgent.toLowerCase();
	return (e = n.match(/msie ([\d.]+)/)) ? t.ie = e[1] : (e = n.match(/firefox\/([\d.]+)/)) ? t.firefox = e[1] : (e = n.match(/chrome\/([\d.]+)/)) ? t.chrome = e[1] : (e = n.match(/opera.([\d.]+)/)) ? t.opera = e[1] : (e = n.match(/version\/([\d.]+).*safari/)) ? t.safari = e[1] : 0, t.ie ? "IE" + t.ie : t.firefox ? "Firefox" + t.firefox : t.chrome ? "Chrome" + t.chrome : t.opera ? "Opera" + t.opera : t.safari ? "Safari" + t.safari : void 0
}
function getEvent() {
	if (document.all) return window.event;
	for (func = getEvent.caller; null != func;) {
		var e = func.arguments[0];
		if (e && (e.constructor == Event || e.constructor == MouseEvent || "object" == typeof e && e.preventDefault && e.stopPropagation)) return e;
		func = func.caller
	}
	return null
}
function getDivH(e) {
	var t = e.style.display;
	if ("none" != t && null != t) return e.offsetHeight;
	var n = e.style,
		d = n.visibility,
		a = n.position,
		r = n.display;
	n.visibility = "hidden", n.position = "absolute", n.display = "block";
	var o = e.clientHeight;
	return n.display = r, n.position = a, n.visibility = d, o
}
function getDivW(e) {
	var t = e.style.display;
	if ("none" != t && null != t) return e.offsetWidth;
	var n = e.style,
		d = n.visibility,
		a = n.position,
		r = n.display;
	n.visibility = "hidden", n.position = "absolute", n.display = "block";
	var o = e.clientWidth;
	return n.display = r, n.position = a, n.visibility = d, o
}
function MsgBox(e, t, n, d) {
	function a() {
		"none" == E.style.display && (E.style.height = "0px", E.style.display = "block"), parseInt(E.style.height.replace("px", ""), 10) < o ? parseInt(E.style.height.replace("px", ""), 10) + u < o ? E.style.height = parseInt(E.style.height.replace("px", ""), 10) + u + "px" : E.style.height = o + "px" : (window.clearInterval(i), _ = setTimeout(function() {
			i = window.setInterval(function() {
				r()
			}, 10)
		}, l))
	}
	function r() {
		clearTimeout(_), parseInt(E.style.height.replace("px", ""), 10) > 0 ? parseInt(E.style.height.replace("px", ""), 10) - u > 0 ? E.style.height = parseInt(E.style.height.replace("px", ""), 10) - u + "px" : E.style.height = "0px" : (E.style.display = "none", window.clearInterval(i), D.removeChild(E), 0 == D.children.length && document.body.removeChild(D))
	}
	var o, s, _, i, l = t,
		u = n,
		c = getBrowserVer(),
		D = document.getElementById(d);
	if (null == D) {
		if (D = document.createElement("div"), D.id = d, -1 != c.indexOf("IE6")) {
			var m = document.getElementsByTagName("body")[0];
			m.style.height = "100%", m.style.overflowY = "auto";
			var O = document.getElementsByTagName("html")[0];
			O.style.overflowY = "hidden", D.style.cssText = "display:block;bottom:0px;right:1px!important;float: right;position:absolute;border:1px solid #fff;text-align:center;"
		} else D.style.cssText = "display:block;bottom:0px;right:1px!important;float: right;position:fixed;border:1px solid #fff;text-align:center;";
		document.body.appendChild(D)
	}
	var E = document.createElement("div");
	E.style.display = "none", E.style.overflow = "hidden", E.innerHTML = e, E.onclick = function() {
		var e = getEvent(),
			t = e.srcElement || e.target;
		"pointer" == t.style.cursor && (i = window.setInterval(function() {
			r()
		}, u))
	}, o = getDivH(E), s = getDivW(E), D.insertBefore(E, D.firstChild), o = getDivH(E), s = getDivW(E), E.style.width = s + "px", this.openMsg = function() {
		i = window.setInterval(function() {
			a()
		}, 10)
	}, this.closeMsg = function() {
		i = window.setInterval(function() {
			r()
		}, 10)
	}
}
function DivLauncher(e, t, n) {
	function d(e) {
		for (var t = S ? event.srcElement : e.target, n = 0; t != O && t != E && t.tagName != m;) {
			if (t = t.parentNode, null == t) return;
			if (n >= 50) return;
			n++
		}
		t == O ? (_ = S ? event.clientX : e.clientX, i = S ? event.clientY : e.clientY, l = parseInt(m.style.left), u = parseInt(m.style.top), F = !0) : t == E && o()
	}
	function a() {
		F = !1
	}
	function r(e) {
		F && (S ? (m.style.left = parseInt(l) + parseInt(event.clientX) - parseInt(_) + "px", m.style.top = parseInt(u) + parseInt(event.clientY) - parseInt(i) + "px") : (m.style.left = parseInt(l) + parseInt(e.clientX) - parseInt(_) + "px", m.style.top = parseInt(u) + parseInt(e.clientY) - parseInt(i) + "px"))
	}
	function o() {
		p && (null == R.beforeClose || R.beforeClose(m)) && (DivLauncherCnt--, 0 >= DivLauncherCnt && (document.onmousemove = DefDocMouseMove, document.onmousedown = DefDocMouseDown, document.onmouseup = DefDocMouseUp, DivLauncherCnt = 0), m.style.display = "none", F = !1, p = !1, null != R.afterClose && R.afterClose(m), R.isOpened = !1)
	}
	function s(e, t) {
		if (null == R.beforeOpen || R.beforeOpen(m)) {
			var n, o;
			n = o = 0, document.documentElement && document.documentElement.scrollTop ? (n = document.documentElement.scrollTop, o = document.documentElement.scrollLeft) : document.body && (n = document.body.scrollTop, o = document.body.scrollLeft), m.style.top = parseInt(t) + parseInt(n) + "px", m.style.left = parseInt(e) + parseInt(o) + "px", p || (0 == DivLauncherCnt && (DefDocMouseMove = document.onmousemove, DefDocMouseDown = document.onmousedown, DefDocMouseUp = document.onmouseup), DivLauncherCnt++, document.onmousemove = r, document.onmousedown = d, document.onmouseup = a, m.style.display = "inline", p = !0, null != R.afterOpen && R.afterOpen(m), R.isOpened = !0)
		}
	}
	var _, i, l, u, c = 50,
		D = 50,
		m = e,
		O = t,
		E = n,
		p = !1,
		F = !1,
		S = document.all,
		R = (!document.all && document.getElementById, this);
	this.beforeOpen = null, this.afterOpen = null, this.beforeClose = null, this.afterClose = null, this.onDragging = null, this.isOpened = !1, m.style.position = "absolute", m.style.display = "none", m.style.zIndex = 100, null != O && (O.style.cursor = "move"), this.close = function() {
		o()
	}, this.open = function(e, t) {
		arguments.length < 2 && (e = c, t = D), s(e, t)
	}
}
function DivOption(e, t) {
	function n(e) {
		window.clearTimeout(r)
	}
	function d(e) {
		window.clearTimeout(r), r = window.setTimeout(a, 1e3 * s.AutoCloseSec)
	}
	function a(e) {
		_ && (window.clearTimeout(r), o ? (window.detachEvent("onblur", a), s.Div.detachEvent("onmouseover", n), s.Div.detachEvent("onmouseout", d)) : (document.removeEventListener("click", a, !1), s.Div.removeEventListener("mouseover", n, !1), s.Div.removeEventListener("mouseout", d, !1)), _ = !1, s.Div.style.display = "none")
	}
	var r, o = window.ActiveXObject ? !0 : !1,
		s = this,
		_ = !1;
	this.Div = e, this.Div.style.display = "none", this.AutoCloseSec = t, this.isOpened = function() {
		return _
	}, this.close = function(e) {
		a(e)
	}, this.open = function(e, t, s) {
		_ || (window.event ? window.event.cancelBubble = !0 : e && e.stopPropagation(), o ? (document.detachEvent("onclick", a), document.attachEvent("onclick", a), this.Div.attachEvent("onmouseover", n), this.Div.attachEvent("onmouseout", d)) : (this.Div.removeEventListener("mouseover", n, !1), this.Div.addEventListener("mouseover", n, !1), this.Div.removeEventListener("mouseout", d, !1), this.Div.addEventListener("mouseout", d, !1)), window.clearTimeout(r), null != this.AutoCloseSec && (r = window.setTimeout(a, 1e3 * this.AutoCloseSec)), fFrame.IsNewCashSite || (this.Div.style.position = "absolute"), null != t && (this.Div.style.left = t), null != s && (this.Div.style.top = s), this.Div.style.display = "block", _ = !0)
	}, this.act = function(e, t, n) {
		_ ? this.close(e) : this.open(e, t, n)
	}
}
function DivPop(e, t) {
	function n() {
		var e = document.activeElement.name;
		"txtUserName" == e || "txtPasswd" == e || "txtValidCode" == e || "txtID" == e || "txtPW" == e || "txtCode" == e ? this._Focus = !0 : this._Focus = !1
	}
	function d() {
		if (n(), s) {
			if (this._Focus) return void(a = window.setTimeout(d, 1e3 * o.AutoCloseSec));
			window.clearTimeout(a), r ? window.detachEvent("onblur", d) : document.removeEventListener("click", d, !1), s = !1, o.Div.style.display = "none"
		}
	}
	var a, r = window.ActiveXObject ? !0 : !1,
		o = this,
		s = !1;
	this.Div = e, this.Div.style.display = "none", this.AutoCloseSec = t, this.isOpened = function() {
		return s
	}, this.close = function() {
		d()
	}, this.open = function(e, t) {
		s || (window.clearTimeout(a), null != this.AutoCloseSec && (a = window.setTimeout(d, 1e3 * this.AutoCloseSec)), this.Div.style.position = "absolute", this.Div.style.display = "block", s = !0)
	}, this.act = function(e, t) {
		s ? this.close() : this.open(e, t)
	}
}
var fFrame = getParent(window),
	EnableIPadStyle = !0,
	MD5 = function(e) {
		function t(e, t) {
			return e << t | e >>> 32 - t
		}
		function n(e, t) {
			var n, d, a, r, o;
			return a = 2147483648 & e, r = 2147483648 & t, n = 1073741824 & e, d = 1073741824 & t, o = (1073741823 & e) + (1073741823 & t), n & d ? 2147483648 ^ o ^ a ^ r : n | d ? 1073741824 & o ? 3221225472 ^ o ^ a ^ r : 1073741824 ^ o ^ a ^ r : o ^ a ^ r
		}
		function d(e, t, n) {
			return e & t | ~e & n
		}
		function a(e, t, n) {
			return e & n | t & ~n
		}
		function r(e, t, n) {
			return e ^ t ^ n
		}
		function o(e, t, n) {
			return t ^ (e | ~n)
		}
		function s(e, a, r, o, s, _, i) {
			return e = n(e, n(n(d(a, r, o), s), i)), n(t(e, _), a)
		}
		function _(e, d, r, o, s, _, i) {
			return e = n(e, n(n(a(d, r, o), s), i)), n(t(e, _), d)
		}
		function i(e, d, a, o, s, _, i) {
			return e = n(e, n(n(r(d, a, o), s), i)), n(t(e, _), d)
		}
		function l(e, d, a, r, s, _, i) {
			return e = n(e, n(n(o(d, a, r), s), i)), n(t(e, _), d)
		}
		function u(e) {
			for (var t, n = e.length, d = n + 8, a = (d - d % 64) / 64, r = 16 * (a + 1), o = Array(r - 1), s = 0, _ = 0; n > _;) t = (_ - _ % 4) / 4, s = _ % 4 * 8, o[t] = o[t] | e.charCodeAt(_) << s, _++;
			return t = (_ - _ % 4) / 4, s = _ % 4 * 8, o[t] = o[t] | 128 << s, o[r - 2] = n << 3, o[r - 1] = n >>> 29, o
		}
		function c(e) {
			e = e.replace(/\r\n/g, "\n");
			for (var t = "", n = 0; n < e.length; n++) {
				var d = e.charCodeAt(n);
				128 > d ? t += String.fromCharCode(d) : d > 127 && 2048 > d ? (t += String.fromCharCode(d >> 6 | 192), t += String.fromCharCode(63 & d | 128)) : (t += String.fromCharCode(d >> 12 | 224), t += String.fromCharCode(d >> 6 & 63 | 128), t += String.fromCharCode(63 & d | 128))
			}
			return t
		}
		var D, m, O, E, p, F, S, R, y, g = Array(),
			L = 7,
			I = 12,
			M = 17,
			f = 22,
			T = 5,
			h = 9,
			v = 14,
			A = 20,
			P = 4,
			B = 11,
			w = 16,
			C = 23,
			H = 6,
			b = 10,
			N = 15,
			U = 21;
		for (e = c(e), g = u(e), F = 1732584193, S = 4023233417, R = 2562383102, y = 271733878, D = 0; D < g.length; D += 16) m = F, O = S, E = R, p = y, F = s(F, S, R, y, g[D + 0], L, 3614090360), y = s(y, F, S, R, g[D + 1], I, 3905402710), R = s(R, y, F, S, g[D + 2], M, 606105819), S = s(S, R, y, F, g[D + 3], f, 3250441966), F = s(F, S, R, y, g[D + 4], L, 4118548399), y = s(y, F, S, R, g[D + 5], I, 1200080426), R = s(R, y, F, S, g[D + 6], M, 2821735955), S = s(S, R, y, F, g[D + 7], f, 4249261313), F = s(F, S, R, y, g[D + 8], L, 1770035416), y = s(y, F, S, R, g[D + 9], I, 2336552879), R = s(R, y, F, S, g[D + 10], M, 4294925233), S = s(S, R, y, F, g[D + 11], f, 2304563134), F = s(F, S, R, y, g[D + 12], L, 1804603682), y = s(y, F, S, R, g[D + 13], I, 4254626195), R = s(R, y, F, S, g[D + 14], M, 2792965006), S = s(S, R, y, F, g[D + 15], f, 1236535329), F = _(F, S, R, y, g[D + 1], T, 4129170786), y = _(y, F, S, R, g[D + 6], h, 3225465664), R = _(R, y, F, S, g[D + 11], v, 643717713), S = _(S, R, y, F, g[D + 0], A, 3921069994), F = _(F, S, R, y, g[D + 5], T, 3593408605), y = _(y, F, S, R, g[D + 10], h, 38016083), R = _(R, y, F, S, g[D + 15], v, 3634488961), S = _(S, R, y, F, g[D + 4], A, 3889429448), F = _(F, S, R, y, g[D + 9], T, 568446438), y = _(y, F, S, R, g[D + 14], h, 3275163606), R = _(R, y, F, S, g[D + 3], v, 4107603335), S = _(S, R, y, F, g[D + 8], A, 1163531501), F = _(F, S, R, y, g[D + 13], T, 2850285829), y = _(y, F, S, R, g[D + 2], h, 4243563512), R = _(R, y, F, S, g[D + 7], v, 1735328473), S = _(S, R, y, F, g[D + 12], A, 2368359562), F = i(F, S, R, y, g[D + 5], P, 4294588738), y = i(y, F, S, R, g[D + 8], B, 2272392833), R = i(R, y, F, S, g[D + 11], w, 1839030562), S = i(S, R, y, F, g[D + 14], C, 4259657740), F = i(F, S, R, y, g[D + 1], P, 2763975236), y = i(y, F, S, R, g[D + 4], B, 1272893353), R = i(R, y, F, S, g[D + 7], w, 4139469664), S = i(S, R, y, F, g[D + 10], C, 3200236656), F = i(F, S, R, y, g[D + 13], P, 681279174), y = i(y, F, S, R, g[D + 0], B, 3936430074), R = i(R, y, F, S, g[D + 3], w, 3572445317), S = i(S, R, y, F, g[D + 6], C, 76029189), F = i(F, S, R, y, g[D + 9], P, 3654602809), y = i(y, F, S, R, g[D + 12], B, 3873151461), R = i(R, y, F, S, g[D + 15], w, 530742520), S = i(S, R, y, F, g[D + 2], C, 3299628645), F = l(F, S, R, y, g[D + 0], H, 4096336452), y = l(y, F, S, R, g[D + 7], b, 1126891415), R = l(R, y, F, S, g[D + 14], N, 2878612391), S = l(S, R, y, F, g[D + 5], U, 4237533241), F = l(F, S, R, y, g[D + 12], H, 1700485571), y = l(y, F, S, R, g[D + 3], b, 2399980690), R = l(R, y, F, S, g[D + 10], N, 4293915773), S = l(S, R, y, F, g[D + 1], U, 2240044497), F = l(F, S, R, y, g[D + 8], H, 1873313359), y = l(y, F, S, R, g[D + 15], b, 4264355552), R = l(R, y, F, S, g[D + 6], N, 2734768916), S = l(S, R, y, F, g[D + 13], U, 1309151649), F = l(F, S, R, y, g[D + 4], H, 4149444226), y = l(y, F, S, R, g[D + 11], b, 3174756917), R = l(R, y, F, S, g[D + 2], N, 718787259), S = l(S, R, y, F, g[D + 9], U, 3951481745), F = n(F, m), S = n(S, O), R = n(R, E), y = n(y, p);
		var x = WordToHex(F) + WordToHex(S) + WordToHex(R) + WordToHex(y);
		return x.toLowerCase()
	},
	CFS = function(e) {
		function t(e) {
			for (var t = "", n = 1; n <= e.length; n++) t += e.charAt(n - 1).charCodeAt(0);
			var d = new Number(t);
			return t = d.toString(16)
		}
		var n, d, a = 30;
		if (n = a - e.length, n > 1) for (var r = 1; n >= r; r++) e += String.fromCharCode(21);
		for (var o = new Number(1), s = 1; a >= s; s++) d = a + e.charAt(s - 1).charCodeAt(0) * s, o *= d;
		var _ = new Number(o.toPrecision(15));
		e = _.toString().toUpperCase();
		for (var i = "", l = 1; l <= e.length; l++) i += t(e.substring(l - 1, l + 2));
		for (var u = "", l = 20; l <= i.length - 18; l += 2) u += i.charAt(l - 1);
		return u.toUpperCase()
	},
	OptionListObj_DisStyle = null,
	OptionListObj_OddsType = null,
	OptionListObj_SecurityQ = null,
	OptionListObj_Other = null,
	LoginObj = null,
	BettingObj = null,
	BankingObj = null,
	ScoreInfoPopWindow, ScoreMapInfoUrl, strRefresh, strWaiting, preMatchId, TimetoWait = !1;
String.format = function() {
	var e = arguments[0];
	if (null == e) return "";
	for (var t = 0; t < arguments.length - 1; t++) {
		var n = getStringFormatPlaceHolderRegEx(t);
		e = e.replace(n, null == arguments[t + 1] ? "" : arguments[t + 1])
	}
	return cleanStringFormatResult(e)
}, String.prototype.format = function() {
	for (var e = this.toString(), t = 0; t < arguments.length; t++) {
		var n = getStringFormatPlaceHolderRegEx(t);
		e = e.replace(n, null == arguments[t] ? "" : arguments[t])
	}
	return cleanStringFormatResult(e)
};
var Sport_Area_CLOSE = "closeEvents",
	Sport_Area_OPEN = "selectType",
	btguideTimer, bStandalonePlayer = !1,
	isReSizeLoading = !1,
	StreamingStatusIsLogin = GetIBC_IsLogin(),
	isPlaySuccess = !1,
	ImgServURL = "",
	CurrentHorseChannelID = "",
	CurrentLeagueID = "",
	CurrentRaceNumber = "",
	fFrame = getParent(window),
	mainplayer_Width = "",
	mainplayer_Height = "",
	singleplayer_Width = "",
	singleplayer_Height = "",
	OpenStreamingFlag = !1,
	setOpenStreamingTimer = null,
	hTVbuttonPush = !1,
	hTV_euroButtonPush = !1;
window.focus();
var SingleTV_ButtonPush = !1,
	BingoTV_ButtonPush = !1,
	hTVHead_ButtonPush = !1,
	hTVBingo_ButtonPush = !1,
	GreyTV_ButtonPush = !1,
	HarnTV_ButtonPush = !1,
	IsNeedLogout = !1,
	fFrame = window,
	hasPriMsg = !1,
	oldpubmsg, oldprimsg, newpubmsg, newprimsg, BTimerHandle, CasinoWindow = null,
	FeedBackWindow = null,
	LanListObjBef = null,
	LanListObjAft = null,
	DateListObj = null,
	memberWin, MaxMilliSec = 3e4,
	ForceMenuData = !0,
	IsChangeMenuType = !1,
	Tmpl_Initialed = !1,
	TotalCount = new Array,
	SportCount = new Array,
	RestCountFlag = !1,
	OpenMoreRegion = !1,
	PrevSportType = "0",
	PrevMarketType = "0",
	SSymbol = "_",
	OddsParamater1 = "",
	OddsParamater2 = "",
	SportCount = 50,
	popWindow = null,
	HorseInfoPopWindow, HorseInfoUrl, TimeoutWaitingBetIndex, TimeoutCountdownIndex, BetslipPath = "underover/",
	IsEuro = !0,
	fFrame = getParent(window),
	REFRESH_GAP = !0,
	CLS_ODD = "UdrDogOddsClass",
	CLS_EVEN = "FavOddsClass",
	DEPOSIT_LEAGUE_WIDTH = 600,
	MEMBER_LEAGUE_WIDTH = 640,
	hash_TmplLoaded = new Array,
	fFrame = window,
	TimerBtnStar, vendorSetting = {
		IsVendor: !1,
		IsM88: !1,
		IsALog: !1,
		IsTLC: !1,
		IsSpondemo: !1,
		IsDela: !1
	};
"2" == fFrame.SiteMode && ("3" == fFrame.Deposit_SiteMode ? vendorSetting.IsM88 = !0 : "4" == fFrame.Deposit_SiteMode ? vendorSetting.IsALog = !0 : "5" == fFrame.Deposit_SiteMode ? vendorSetting.IsDela = !0 : "6" == fFrame.Deposit_SiteMode ? vendorSetting.IsTLC = !0 : "7" == fFrame.Deposit_SiteMode && (vendorSetting.IsSpondemo = !0), vendorSetting.IsVendor = vendorSetting.IsM88 || vendorSetting.IsALog || vendorSetting.IsTLC || vendorSetting.IsSpondemo || vendorSetting.IsDela);
var bShowLoading = !1,
	iRefreshCount = REFRESH_COUNTDOWN,
	RefresHandle, LOAD_TMPL_GAP = !0,
	PopLauncher, TMPL_ID, TMPL_URL, OddsDisp_PathIds, OddsDisp_PathNames, OddsDisp_MatchShowtime, SelectedDate, TR_0 = "oddstr1",
	TR_1 = "oddstr2",
	DISPLAY_BETTYPES = [5, 15, 1, 7, 3, 8, 4, 30, 152, 16, 14, 127, 26, 6, 126, 2, 12, 128, 20, 21, 24, 151, 25, 121, 122, 123, 28, 13, 145, 146, 27, 149, 150, 133, 134, 147, 148, 140, 141, 142, 135, 501, 502],
	g_OddsKeeper = null,
	g_DateOptioner = null,
	SEPARATOR = "_",
	fFrame = window,
	g_BetTypeOptioner = null,
	g_SelectedBetType, g_SelectedBetTypeText, g_streaming = "",
	g_OddsTypeOptioner = null,
	IsSpondemo = !1;
"2" == fFrame.SiteMode && "7" == fFrame.Deposit_SiteMode && (IsSpondemo = !0);
var MiniTV = !1,
	htSession = "",
	ftSession = "",
	FullTimeAllArray = ["F1:0", "F0:1", "F2:0", "F1:1", "F0:2", "F3:0", "F2:1", "F1:2", "F0:3", "F4+", "F1:0", "F2:0", "F1:1", "F3:0", "F2:1", "F1:2"],
	HTArray_00 = ["F1:0", "F0:1", "F2:0", "F1:1", "F0:2", "F3:0", "F2:1", "F1:2", "F0:3", "F4+"],
	HTArray_10 = ["F1:0", "F2:0", "F1:1", "F3:0", "F2:1", "F1:2", "F4+"],
	HTArray_01 = ["F0:1", "F1:1", "F0:2", "F2:1", "F1:2", "F0:3", "F4+"],
	HTArray_11 = ["F1:1", "F2:1", "F1:2", "F4+"],
	HTArray_20 = ["F2:0", "F3:0", "F2:1", "F4+"],
	HTArray_02 = ["F0:2", "F1:2", "F0:3", "F4+"],
	HTArray_21 = ["F2:1", "F4+"],
	HTArray_12 = ["F1:2", "F4+"],
	HTArray_30 = ["F3:0", "F4+"],
	HTArray_03 = ["F0:3", "F4+"],
	BetType152OddArray = ["0010", "0001", "0020", "0011", "0002", "0030", "0021", "0012", "0003", "004UP", "1010", "1020", "1011", "1030", "1021", "1012", "104UP", "0101", "0111", "0102", "0121", "0112", "0103", "014UP", "1111", "1121", "1112", "114UP", "2020", "2030", "2021", "204UP", "0202", "0212", "0203", "024UP", "2121", "214UP", "1212", "124UP", "3030", "304UP", "0303", "034UP"],
	OddsBody = new Array,
	btnStartHandle, MONTH_LIST = [null, "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
	g_HTCSOptioner = null,
	g_FTCSOptioner = null,
	OUTRIGHT_FIELDS_DEF = new Array(8);
OUTRIGHT_FIELDS_DEF[0] = "MatchId", OUTRIGHT_FIELDS_DEF[1] = "MatchCode", OUTRIGHT_FIELDS_DEF[2] = "ShowTime", OUTRIGHT_FIELDS_DEF[3] = "LeagueId", OUTRIGHT_FIELDS_DEF[4] = "LeagueName", OUTRIGHT_FIELDS_DEF[5] = "TeamName", OUTRIGHT_FIELDS_DEF[6] = "Changed", OUTRIGHT_FIELDS_DEF[7] = "Odds";
var g_OddsKeeper = null,
	fFrame = window,
	IsM88 = !1;
"2" == fFrame.SiteMode && "3" == fFrame.Deposit_SiteMode && (IsM88 = !0);
var HandleBtnStart, HORSE_FIELDS_DEF = new Array(36);
HORSE_FIELDS_DEF[0] = "ProgramId", HORSE_FIELDS_DEF[1] = "LeagueName", HORSE_FIELDS_DEF[2] = "EventDate", HORSE_FIELDS_DEF[3] = "Minutes2Post", HORSE_FIELDS_DEF[4] = "RaceNumber", HORSE_FIELDS_DEF[5] = "TrackType", HORSE_FIELDS_DEF[6] = "Distance", HORSE_FIELDS_DEF[7] = "RaceTime", HORSE_FIELDS_DEF[8] = "RaceName", HORSE_FIELDS_DEF[9] = "PriceMoney", HORSE_FIELDS_DEF[10] = "RaceCondition", HORSE_FIELDS_DEF[11] = "TrackCondition", HORSE_FIELDS_DEF[12] = "WinPool", HORSE_FIELDS_DEF[13] = "PlacePool", HORSE_FIELDS_DEF[14] = "MatchId", HORSE_FIELDS_DEF[15] = "MatchCode", HORSE_FIELDS_DEF[16] = "Runner", HORSE_FIELDS_DEF[17] = "HorseName", HORSE_FIELDS_DEF[18] = "HorseTraniner", HORSE_FIELDS_DEF[19] = "HorseJockey", HORSE_FIELDS_DEF[20] = "HorseDraw", HORSE_FIELDS_DEF[21] = "HorseWgt", HORSE_FIELDS_DEF[22] = "Status", HORSE_FIELDS_DEF[23] = "WinOdds", HORSE_FIELDS_DEF[24] = "PlaceOdds", HORSE_FIELDS_DEF[25] = "ImgUrl", HORSE_FIELDS_DEF[26] = "imgError", HORSE_FIELDS_DEF[27] = "BetNow", HORSE_FIELDS_DEF[28] = "intRaceNumber", HORSE_FIELDS_DEF[29] = "oddsstatus", HORSE_FIELDS_DEF[30] = "WinOdds2", HORSE_FIELDS_DEF[31] = "PlaceOdds2", HORSE_FIELDS_DEF[32] = "CuurntRaceNumber", HORSE_FIELDS_DEF[33] = "MaxRaceNumber", HORSE_FIELDS_DEF[34] = "WinPool2", HORSE_FIELDS_DEF[35] = "PlacePool2", HORSE_FIELDS_DEF[36] = "MatchId2";
var g_HorseOddsKeeper = null,
	g_HorseInfoKeeper = null,
	HorseBody, SelectHashLeagues, SelectedLeagueId, SelectHashRace, SelectedRaceNo, refreshHandle = null,
	OddsData = null,
	LData = null,
	RData = null,
	DefaultLeague = "-1",
	DefaultRace = "-1",
	HDel, HSrt, HIns, HuM, HuO, SelectRacingType, RT = "W",
	CT = "",
	SelLeague, SelRaceNumber, RacingCountryCode, PopLauncher, beforeOpen, oDivX, oDivY, btnStartHandle, btnLeagueFilter, btnRaceFilter, popFormGuideWindow = null,
	HrFormG_ButtonPush = !1,
	GrFormG_ButtonPush = !1,
	HaFormG_ButtonPush = !1,
	HrResult_ButtonPush = !1,
	popHorseResultWindow = null,
	TMPL_TOPLeague_ID = "tmplLeague_TOP",
	TMPL_TOPLeague_ID2 = "tmplLeague_TOP2",
	TMPL_TOPHEADER_ID = "tmplHeader_5",
	TMPL_TOPDATE_ID = "tmplOdds_5",
	TMPL_TOPDATE_L_ID = "tmplOdds_5_L",
	TMPL_TOPFeaturedDATA_ID = "frmFeaturedData",
	newQuery = function(e) {
		var t = document.getElementById("DivMainOdds"),
			n = Onebook.Widget.OddsPanel;
		React.render(React.createElement(n, {
			Breadcrumbs: e.Breadcrumbs,
			MatchDataQstr: e.MatchDataQstr
		}), t)
	},
	IeVer = function() {
		for (var e, t = 3, n = document.createElement("div"), d = n.getElementsByTagName("i"); n.innerHTML = "<!--[if gt IE " + ++t + "]><i></i><![endif]-->", d[0];);
		return t > 4 ? t : e
	}(),
	sSport = "180",
	btnSwitch = !1,
	SelMatchid = "",
	refreshHandle = null,
	oddsHandle = null,
	sKeeperList = null,
	sKeeper = null,
	g_VirtualSportsOddsKeeper = null,
	VirtualSporstBody, CLS_HDP_F = "FavTeamClass",
	CLS_HDP_N = "UdrDogTeamClass",
	odata = null,
	btnSwitch = !1,
	CLS_LS_OFF = "displayOff",
	CLS_LS_ON = "displayOn",
	sKeeperUpdateOddsTime = null,
	COMMON_DEF = new Array;
COMMON_DEF[0] = new Array("MUID", "MatchId", "MatchCode", "MatchCount", "LeagueId", "LeagueName", "HomeName", "AwayName", "KickoffTime", "StatsId", "SportRadar", "StreamingId", "ShowTime", "HasLive", "Favorite", "TimerSuspend", "FavLeague"), COMMON_DEF[1] = new Array("SportType"), COMMON_DEF[2] = new Array("Combo"), COMMON_DEF[3] = new Array("IsMainMarket"), COMMON_DEF[4] = new Array("Category", "HotEvent", "MatchId"), COMMON_DEF[5] = new Array("Category", "HotEvent", "MatchId", "LeagueName", "HomeName", "AwayName", "ScoreH", "ScoreA");
var FIELDS_DEF = new Array;
FIELDS_DEF[0] = new Array("FlagLive", "LivePeriod", "CsStatus", "InjuryTime", "ScoreH", "ScoreA"), FIELDS_DEF[5] = new Array("MoreCount"), FIELDS_DEF[1] = new Array("RedCardH", "RedCardA", "MoreCount"), FIELDS_DEF[8] = new Array("PitcherH", "PitcherA"), FIELDS_DEF[161] = new Array("RedCardH", "RedCardA", "MoreCount", "Ball1", "Ball2");
var ExtFIELDS_DEF = new Array;
ExtFIELDS_DEF[1] = new Array("IsBetTrade");
var MultiSportODDS_DEF = new Array;
MultiSportODDS_DEF[0] = new Array("OddsId_0", "Odds_0"), MultiSportODDS_DEF[1] = new Array("OddsId_1", "Value_1", "Odds_1_H", "Odds_1_A", "FavorF"), MultiSportODDS_DEF[2] = new Array("OddsId_2", "Odds_2_O", "Odds_2_E"), MultiSportODDS_DEF[3] = new Array("OddsId_3", "Goal_3", "Odds_3_O", "Odds_3_U"), MultiSportODDS_DEF[4] = new Array("OddsId_4", "Odds_4_00", "Odds_4_01", "Odds_4_02", "Odds_4_03", "Odds_4_04", "Odds_4_05", "Odds_4_10", "Odds_4_11", "Odds_4_12", "Odds_4_13", "Odds_4_14", "Odds_4_20", "Odds_4_21", "Odds_4_22", "Odds_4_23", "Odds_4_24", "Odds_4_30", "Odds_4_31", "Odds_4_32", "Odds_4_33", "Odds_4_34", "Odds_4_40", "Odds_4_41", "Odds_4_42", "Odds_4_43", "Odds_4_44", "Odds_4_50"), MultiSportODDS_DEF[5] = new Array("OddsId_5", "Odds_5_1", "Odds_5_X", "Odds_5_2"), MultiSportODDS_DEF[6] = new Array("OddsId_6", "Odds_6_01", "Odds_6_23", "Odds_6_46", "Odds_6_7"), MultiSportODDS_DEF[7] = new Array("OddsId_7", "Value_7", "Odds_7_H", "Odds_7_A", "FavorH1"), MultiSportODDS_DEF[8] = new Array("OddsId_8", "Goal_8", "Odds_8_O", "Odds_8_U"), MultiSportODDS_DEF[11] = new Array("OddsId_11", "Odds_11_08", "Odds_11_911", "Odds_11_12"), MultiSportODDS_DEF[12] = new Array("OddsId_12", "Odds_12_O", "Odds_12_E"), MultiSportODDS_DEF[14] = new Array("OddsId_14", "Odds_14_NO", "Odds_14_HF", "Odds_14_HL", "Odds_14_AF", "Odds_14_AL"), MultiSportODDS_DEF[15] = new Array("OddsId_15", "Odds_15_1", "Odds_15_X", "Odds_15_2"), MultiSportODDS_DEF[16] = new Array("OddsId_16", "Odds_16_HH", "Odds_16_HD", "Odds_16_HA", "Odds_16_DH", "Odds_16_DD", "Odds_16_DA", "Odds_16_AH", "Odds_16_AD", "Odds_16_AA"), MultiSportODDS_DEF[17] = new Array("OddsId_17", "Value_17", "Odds_17_H", "Odds_17_A", "FavorF_17"), MultiSportODDS_DEF[18] = new Array("OddsId_18", "Goal_18", "Odds_18_O", "Odds_18_U"), MultiSportODDS_DEF[20] = new Array("OddsId_20", "Odds_20_H", "Odds_20_A"), MultiSportODDS_DEF[21] = new Array("OddsId_21", "Odds_21_H", "Odds_21_A"), MultiSportODDS_DEF[22] = new Array("OddsId_22", "Odds_22_1", "Odds_22_X", "Odds_22_2"), MultiSportODDS_DEF[30] = new Array("OddsId_30", "Odds_30_00", "Odds_30_01", "Odds_30_02", "Odds_30_03", "Odds_30_04", "Odds_30_10", "Odds_30_11", "Odds_30_12", "Odds_30_13", "Odds_30_20", "Odds_30_21", "Odds_30_22", "Odds_30_23", "Odds_30_30", "Odds_30_31", "Odds_30_32", "Odds_30_33", "Odds_30_40"), MultiSportODDS_DEF[81] = new Array("OddsId_81", "Goal_81", "Odds_81_O", "Odds_81_U"), MultiSportODDS_DEF[82] = new Array("OddsId_82", "Goal_82", "Odds_82_O", "Odds_82_U"), MultiSportODDS_DEF[83] = new Array("OddsId_83", "Odds_83_O", "Odds_83_E"), MultiSportODDS_DEF[84] = new Array("OddsId_84", "Odds_84_O", "Odds_84_E"), MultiSportODDS_DEF[85] = new Array("OddsId_85", "Goal_85", "Odds_85_O", "Odds_85_U"), MultiSportODDS_DEF[86] = new Array("OddsId_86", "Odds_86_O", "Odds_86_E"), MultiSportODDS_DEF[87] = new Array("OddsId_87", "Goal_87", "Odds_87_H", "Odds_87_L"), MultiSportODDS_DEF[88] = new Array("OddsId_88", "Odds_88_H", "Odds_88_A"), MultiSportODDS_DEF[89] = new Array("OddsId_89", "Odds_89_OO", "Odds_89_UO", "Odds_89_OE", "Odds_89_UE"), MultiSportODDS_DEF[901] = new Array("OddsId_901", "Odds_90_1_1", "Odds_90_1_2", "Odds_90_1_3", "Odds_90_1_4", "Odds_90_1_5", "Odds_90_1_6", "Odds_90_1_7", "Odds_90_1_8", "Odds_90_1_9", "Odds_90_1_10", "Odds_90_1_11", "Odds_90_1_12", "Odds_90_1_13", "Odds_90_1_14", "Odds_90_1_15"), MultiSportODDS_DEF[902] = new Array("OddsId_902", "Odds_90_2_1", "Odds_90_2_2", "Odds_90_2_3", "Odds_90_2_4", "Odds_90_2_5"), MultiSportODDS_DEF[903] = new Array("OddsId_903", "Odds_90_3_1", "Odds_90_3_2", "Odds_90_3_3"), MultiSportODDS_DEF[904] = new Array("OddsId_904", "Odds_90_4_1", "Odds_90_4_2", "Odds_90_4_3", "Odds_90_4_4", "Odds_90_4_5"), MultiSportODDS_DEF[905] = new Array("OddsId_905", "Odds_90_5_1", "Odds_90_5_2", "Odds_90_5_3", "Odds_90_5_4", "Odds_90_5_5", "Odds_90_5_6", "Odds_90_5_7", "Odds_90_5_8", "Odds_90_5_9", "Odds_90_5_10", "Odds_90_5_11", "Odds_90_5_12", "Odds_90_5_13", "Odds_90_5_14", "Odds_90_5_15", "Odds_90_5_16", "Odds_90_5_17", "Odds_90_5_18", "Odds_90_5_19", "Odds_90_5_20", "Odds_90_5_21", "Odds_90_5_22", "Odds_90_5_23", "Odds_90_5_24", "Odds_90_5_25", "Odds_90_5_26", "Odds_90_5_27", "Odds_90_5_28", "Odds_90_5_29", "Odds_90_5_30", "Odds_90_5_31", "Odds_90_5_32", "Odds_90_5_33", "Odds_90_5_34", "Odds_90_5_35", "Odds_90_5_36", "Odds_90_5_37", "Odds_90_5_38", "Odds_90_5_39", "Odds_90_5_40", "Odds_90_5_41", "Odds_90_5_42", "Odds_90_5_43", "Odds_90_5_44", "Odds_90_5_45", "Odds_90_5_46", "Odds_90_5_47", "Odds_90_5_48", "Odds_90_5_49", "Odds_90_5_50", "Odds_90_5_51", "Odds_90_5_52", "Odds_90_5_53", "Odds_90_5_54", "Odds_90_5_55", "Odds_90_5_56", "Odds_90_5_57", "Odds_90_5_58", "Odds_90_5_59", "Odds_90_5_60", "Odds_90_5_61", "Odds_90_5_62", "Odds_90_5_63", "Odds_90_5_64", "Odds_90_5_65", "Odds_90_5_66", "Odds_90_5_67", "Odds_90_5_68", "Odds_90_5_69", "Odds_90_5_70", "Odds_90_5_71", "Odds_90_5_72", "Odds_90_5_73", "Odds_90_5_74", "Odds_90_5_75"), MultiSportODDS_DEF[90] = MultiSportODDS_DEF[901].concat(MultiSportODDS_DEF[902]).concat(MultiSportODDS_DEF[903]).concat(MultiSportODDS_DEF[904]).concat(MultiSportODDS_DEF[905]), MultiSportODDS_DEF[24] = new Array("OddsId_24", "Odds_24_1X", "Odds_24_12", "Odds_24_2X"), MultiSportODDS_DEF[25] = new Array("OddsId_25", "Odds_25_H", "Odds_25_A"), MultiSportODDS_DEF[26] = new Array("OddsId_26", "Odds_26_O", "Odds_26_N", "Odds_26_B"), MultiSportODDS_DEF[27] = new Array("OddsId_27", "Odds_27_H", "Odds_27_A"), MultiSportODDS_DEF[13] = new Array("OddsId_13", "Odds_13_HY", "Odds_13_HN", "Odds_13_AY", "Odds_13_AN"), MultiSportODDS_DEF[28] = new Array("OddsId_28", "Odds_28_1", "Odds_28_X", "Odds_28_2", "Odds_28_hdp1", "Odds_28_hdpx", "Odds_28_hdp2"), MultiSportODDS_DEF[121] = new Array("OddsId_121", "Odds_121_A", "Odds_121_H"), MultiSportODDS_DEF[122] = new Array("OddsId_122", "Odds_122_H", "Odds_122_X"), MultiSportODDS_DEF[123] = new Array("OddsId_123", "Odds_123_H", "Odds_123_A"), MultiSportODDS_DEF[126] = new Array("OddsId_126", "Odds_126_01", "Odds_126_23", "Odds_126_4"), MultiSportODDS_DEF[127] = new Array("OddsId_127", "Odds_127_NO", "Odds_127_HF", "Odds_127_HL", "Odds_127_AF", "Odds_127_AL"), MultiSportODDS_DEF[128] = new Array("OddsId_128", "Odds_128_OO", "Odds_128_OE", "Odds_128_EO", "Odds_128_EE"), MultiSportODDS_DEF[133] = new Array("OddsId_133", "Odds_133_HY", "Odds_133_HN"), MultiSportODDS_DEF[134] = new Array("OddsId_134", "Odds_134_AY", "Odds_134_AN"), MultiSportODDS_DEF[135] = new Array("OddsId_135", "Odds_135_Y", "Odds_135_N"), MultiSportODDS_DEF[140] = new Array("OddsId_140", "Odds_140_1H", "Odds_140_2H", "Odds_140_TIE"), MultiSportODDS_DEF[141] = new Array("OddsId_141", "Odds_141_1H", "Odds_141_2H", "Odds_141_TIE"), MultiSportODDS_DEF[142] = new Array("OddsId_142", "Odds_142_1H", "Odds_142_2H", "Odds_142_TIE"), MultiSportODDS_DEF[145] = new Array("OddsId_145", "Odds_145_Y", "Odds_145_N"), MultiSportODDS_DEF[146] = new Array("OddsId_146", "Odds_146_Y", "Odds_146_N"), MultiSportODDS_DEF[147] = new Array("OddsId_147", "Odds_147_HY", "Odds_147_HN"), MultiSportODDS_DEF[148] = new Array("OddsId_148", "Odds_148_AY", "Odds_148_AN"), MultiSportODDS_DEF[149] = new Array("OddsId_149", "Odds_149_HY", "Odds_149_HN"), MultiSportODDS_DEF[150] = new Array("OddsId_150", "Odds_150_AY", "Odds_150_AN"), MultiSportODDS_DEF[151] = new Array("OddsId_151", "Odds_151_1X", "Odds_151_2X", "Odds_151_12"), MultiSportODDS_DEF[152] = new Array("OddsId_152", "Odds_152_0000", "Odds_152_0010", "Odds_152_0001", "Odds_152_0020", "Odds_152_0011", "Odds_152_0002", "Odds_152_0030", "Odds_152_0021", "Odds_152_0012", "Odds_152_0003", "Odds_152_004UP", "Odds_152_1010", "Odds_152_1020", "Odds_152_1011", "Odds_152_1030", "Odds_152_1021", "Odds_152_1012", "Odds_152_104UP", "Odds_152_0101", "Odds_152_0111", "Odds_152_0102", "Odds_152_0121", "Odds_152_0112", "Odds_152_0103", "Odds_152_014UP", "Odds_152_1111", "Odds_152_1121", "Odds_152_1112", "Odds_152_114UP", "Odds_152_2020", "Odds_152_2030", "Odds_152_2021", "Odds_152_204UP", "Odds_152_0202", "Odds_152_0212", "Odds_152_0203", "Odds_152_024UP", "Odds_152_2121", "Odds_152_214UP", "Odds_152_1212", "Odds_152_124UP", "Odds_152_3030", "Odds_152_304UP", "Odds_152_0303", "Odds_152_034UP", "Odds_152_4UP4UP"), MultiSportODDS_DEF[153] = new Array("OddsId_153", "Value_153", "Odds_153_H", "Odds_153_A", "FavorF_153"), MultiSportODDS_DEF[154] = new Array("OddsId", "Odds_0", "Odds_1", "Resourceid"), MultiSportODDS_DEF[155] = new Array("OddsId", "Value", "Odds_0", "Odds_1", "FavorF", "Resourceid"), MultiSportODDS_DEF[156] = new Array("OddsId", "Goal", "Odds_0", "Odds_1", "Resourceid"), MultiSportODDS_DEF[185] = new Array("OddsId_185", "Odds_185_H", "Odds_185_A"), MultiSportODDS_DEF[191] = new Array("OddsId_191", "Odds_191_H", "Odds_191_A"), MultiSportODDS_DEF[178] = new Array("OddsId_178", "Goal_178", "Odds_178_O", "Odds_178_U"), MultiSportODDS_DEF[204] = new Array("OddsId_204", "Goal_204", "Odds_204_O", "Odds_204_U"), MultiSportODDS_DEF[205] = new Array("OddsId_205", "Goal_205", "Odds_205_O", "Odds_205_U"), MultiSportODDS_DEF[189] = new Array("OddsId_189", "Odds_189_Y", "Odds_189_N"), MultiSportODDS_DEF[190] = new Array("OddsId_190", "Odds_190_Y", "Odds_190_N"), MultiSportODDS_DEF[197] = new Array("OddsId_197", "Goal_197", "Odds_197_O", "Odds_197_U"), MultiSportODDS_DEF[198] = new Array("OddsId_198", "Goal_198", "Odds_198_O", "Odds_198_U"), MultiSportODDS_DEF[167] = new Array("OddsId_167", "Odds_167_1", "Odds_167_X", "Odds_167_2"), MultiSportODDS_DEF[176] = new Array("OddsId_176", "Odds_176_1", "Odds_176_X", "Odds_176_2"), MultiSportODDS_DEF[177] = new Array("OddsId_177", "Odds_177_1", "Odds_177_X", "Odds_177_2"), MultiSportODDS_DEF[157] = new Array("OddsId_157", "Odds_157_O", "Odds_157_E"), MultiSportODDS_DEF[184] = new Array("OddsId_184", "Odds_184_O", "Odds_184_E"), MultiSportODDS_DEF[194] = new Array("OddsId_194", "Odds_194_O", "Odds_194_E"), MultiSportODDS_DEF[203] = new Array("OddsId_203", "Odds_203_O", "Odds_203_E"), MultiSportODDS_DEF[165] = new Array("OddsId_165", "Odds_165_00", "Odds_165_10", "Odds_165_20", "Odds_165_01", "Odds_165_11", "Odds_4_02"), MultiSportODDS_DEF[166] = new Array("OddsId_166", "Odds_166_00", "Odds_166_10", "Odds_166_20", "Odds_166_30", "Odds_166_01", "Odds_166_11", "Odds_166_21", "Odds_166_02", "Odds_166_12", "Odds_166_03"), MultiSportODDS_DEF[159] = new Array("OddsId_159", "Odds_159_G1", "Odds_159_G2", "Odds_159_G3", "Odds_159_G4", "Odds_159_G5", "Odds_159_G6", "Odds_159_G0"), MultiSportODDS_DEF[161] = new Array("OddsId_161", "Odds_161_G0", "Odds_161_G1", "Odds_161_G2", "Odds_161_G3"), MultiSportODDS_DEF[162] = new Array("OddsId_162", "Odds_162_G0", "Odds_162_G1", "Odds_162_G2", "Odds_162_G3"), MultiSportODDS_DEF[179] = new Array("OddsId_179", "Odds_179_G0", "Odds_179_G1", "Odds_179_G2", "Odds_179_G3", "Odds_179_G4"), MultiSportODDS_DEF[181] = new Array("OddsId_181", "Odds_181_G0", "Odds_181_G1", "Odds_181_G2", "Odds_181_G3"), MultiSportODDS_DEF[182] = new Array("OddsId_182", "Odds_182_G0", "Odds_182_G1", "Odds_182_G2", "Odds_182_G3"), MultiSportODDS_DEF[187] = new Array("OddsId_187", "Odds_187_G0", "Odds_187_G1", "Odds_187_G2"), MultiSportODDS_DEF[144] = new Array("OddsId_144", "Goal_144", "Odds_144_HU", "Odds_144_HO", "Odds_144_DU", "Odds_144_DO", "Odds_144_AU", "Odds_144_AO"), MultiSportODDS_DEF[164] = new Array("OddsId_164", "Odds_164_1", "Odds_164_X", "Odds_164_2"), MultiSportODDS_DEF[168] = new Array("OddsId_168", "Odds_168_H", "Odds_168_A"), MultiSportODDS_DEF[169] = new Array("OddsId_169", "Odds_169_115", "Odds_169_1630", "Odds_169_3145", "Odds_169_4660", "Odds_169_6175", "Odds_169_7690"), MultiSportODDS_DEF[170] = new Array("OddsId_170", "Odds_170_H", "Odds_170_A", "Odds_170_B", "Odds_170_N"), MultiSportODDS_DEF[171] = new Array("OddsId_171", "Odds_171_H1", "Odds_171_H2", "Odds_171_H3", "Odds_171_A1", "Odds_171_A2", "Odds_171_A3", "Odds_171_NG", "Odds_171_D"), MultiSportODDS_DEF[172] = new Array("OddsId_172", "Odds_172_HH", "Odds_172_DH", "Odds_172_AH", "Odds_172_HA", "Odds_172_DA", "Odds_172_AA", "Odds_172_NO"), MultiSportODDS_DEF[173] = new Array("OddsId_173", "Odds_173_Y", "Odds_173_N"), MultiSportODDS_DEF[174] = new Array("OddsId_174", "Odds_174_Y", "Odds_174_N"), MultiSportODDS_DEF[175] = new Array("OddsId_175", "Odds_175_HR", "Odds_175_HE", "Odds_175_HP", "Odds_175_AR", "Odds_175_AE", "Odds_175_AP"), MultiSportODDS_DEF[180] = new Array("OddsId_180", "Odds_180_1", "Odds_180_X", "Odds_180_2"), MultiSportODDS_DEF[186] = new Array("OddsId_186", "Odds_186_HD", "Odds_186_HA", "Odds_186_DA"), MultiSportODDS_DEF[188] = new Array("OddsId_188", "Odds_188_Y", "Odds_188_N"), MultiSportODDS_DEF[192] = new Array("OddsId_192", "Odds_192_110", "Odds_192_1120", "Odds_192_2130", "Odds_192_3140", "Odds_192_4150", "Odds_192_5160", "Odds_192_6170", "Odds_192_7180", "Odds_192_8190"), MultiSportODDS_DEF[193] = new Array("OddsId_193", "Odds_193_115", "Odds_193_1630", "Odds_193_3145", "Odds_193_4660", "Odds_193_6175", "Odds_193_7690"), MultiSportODDS_DEF[195] = new Array("OddsId_195", "Odds_195_02", "Odds_195_34", "Odds_195_56", "Odds_195_7"), MultiSportODDS_DEF[196] = new Array("OddsId_196", "Odds_196_02", "Odds_196_34", "Odds_196_56", "Odds_196_7"), MultiSportODDS_DEF[200] = new Array("OddsId_200", "Odds_200_01", "Odds_200_2", "Odds_200_3", "Odds_200_4"), MultiSportODDS_DEF[201] = new Array("OddsId_201", "Odds_201_01", "Odds_201_2", "Odds_201_3", "Odds_201_4"), MultiSportODDS_DEF[202] = new Array("OddsId_202", "Odds_202_04", "Odds_202_56", "Odds_202_7"), MultiSportODDS_DEF[206] = new Array("OddsId_206", "Odds_206_H", "Odds_206_A", "Odds_206_N"), MultiSportODDS_DEF[207] = new Array("OddsId_207", "Odds_207_H", "Odds_207_A", "Odds_207_N"), MultiSportODDS_DEF[208] = new Array("OddsId_208", "Odds_208_H", "Odds_208_A", "Odds_208_N"), MultiSportODDS_DEF[209] = new Array("OddsId_209", "Odds_209_H", "Odds_209_A", "Odds_209_N"), MultiSportODDS_DEF[210] = new Array("OddsId_210", "Odds_210_Y", "Odds_210_N"), MultiSportODDS_DEF[211] = new Array("OddsId_211", "Odds_211_Y", "Odds_211_N"), MultiSportODDS_DEF[212] = new Array("OddsId_212", "Odds_212_Y", "Odds_212_N"), MultiSportODDS_DEF[213] = new Array("OddsId_213", "Odds_213_Y", "Odds_213_N"), MultiSportODDS_DEF[214] = new Array("OddsId_214", "Odds_214_Y", "Odds_214_N"), MultiSportODDS_DEF[215] = new Array("OddsId_215", "Odds_215_Y", "Odds_215_N"), MultiSportODDS_DEF[216] = new Array("OddsId_216", "Odds_216_C01", "Odds_216_P01", "Odds_216_I01", "Odds_216_C02", "Odds_216_P02", "Odds_216_I02", "Odds_216_C03", "Odds_216_P03", "Odds_216_I03", "Odds_216_C04", "Odds_216_P04", "Odds_216_I04", "Odds_216_C05", "Odds_216_P05", "Odds_216_I05", "Odds_216_C06", "Odds_216_P06", "Odds_216_I06", "Odds_216_C07", "Odds_216_P07", "Odds_216_I07", "Odds_216_C08", "Odds_216_P08", "Odds_216_I08", "Odds_216_C09", "Odds_216_P09", "Odds_216_I09", "Odds_216_C10", "Odds_216_P10", "Odds_216_I10", "Odds_216_C11", "Odds_216_P11", "Odds_216_I11", "Odds_216_C12", "Odds_216_P12", "Odds_216_I12", "Odds_216_C13", "Odds_216_P13", "Odds_216_I13", "Odds_216_C14", "Odds_216_P14", "Odds_216_I14", "Odds_216_C15", "Odds_216_P15", "Odds_216_I15", "Odds_216_C16", "Odds_216_P16", "Odds_216_I16", "Odds_216_C17", "Odds_216_P17", "Odds_216_I17", "Odds_216_C18", "Odds_216_P18", "Odds_216_I18", "Odds_216_C19", "Odds_216_P19", "Odds_216_I19", "Odds_216_C20", "Odds_216_P20", "Odds_216_I20", "Odds_216_C21", "Odds_216_P21", "Odds_216_I21", "Odds_216_C22", "Odds_216_P22", "Odds_216_I22", "Odds_216_C23", "Odds_216_P23", "Odds_216_I23", "Odds_216_C24", "Odds_216_P24", "Odds_216_I24", "Odds_216_C25", "Odds_216_P25", "Odds_216_I25", "Odds_216_C26", "Odds_216_P26", "Odds_216_I26", "Odds_216_C27", "Odds_216_P27", "Odds_216_I27", "Odds_216_C28", "Odds_216_P28", "Odds_216_I28", "Odds_216_C29", "Odds_216_P29", "Odds_216_I29", "Odds_216_C30", "Odds_216_P30", "Odds_216_I30", "Odds_216_C31", "Odds_216_P31", "Odds_216_I31", "Odds_216_C32", "Odds_216_P32", "Odds_216_I32", "Odds_216_C33", "Odds_216_P33", "Odds_216_I33", "Odds_216_C34", "Odds_216_P34", "Odds_216_I34", "Odds_216_C35", "Odds_216_P35", "Odds_216_I35", "Odds_216_C36", "Odds_216_P36", "Odds_216_I36", "Odds_216_C37", "Odds_216_P37", "Odds_216_I37", "Odds_216_C38", "Odds_216_P38", "Odds_216_I38", "Odds_216_C39", "Odds_216_P39", "Odds_216_I39", "Odds_216_C40", "Odds_216_P40", "Odds_216_I40", "Odds_216_C41", "Odds_216_P41", "Odds_216_I41", "Odds_216_C42", "Odds_216_P42", "Odds_216_I42", "Odds_216_C43", "Odds_216_P43", "Odds_216_I43", "Odds_216_C44", "Odds_216_P44", "Odds_216_I44", "Odds_216_C45", "Odds_216_P45", "Odds_216_I45", "Odds_216_C46", "Odds_216_P46", "Odds_216_I46", "Odds_216_C47", "Odds_216_P47", "Odds_216_I47", "Odds_216_C48", "Odds_216_P48", "Odds_216_I48", "Odds_216_C49", "Odds_216_P49", "Odds_216_I49", "Odds_216_C50", "Odds_216_P50", "Odds_216_I50", "Odds_216_C51", "Odds_216_P51", "Odds_216_I51", "Odds_216_C52", "Odds_216_P52", "Odds_216_I52", "Odds_216_C53", "Odds_216_P53", "Odds_216_I53", "Odds_216_C54", "Odds_216_P54", "Odds_216_I54", "Odds_216_C55", "Odds_216_P55", "Odds_216_I55", "Odds_216_C56", "Odds_216_P56", "Odds_216_I56", "Odds_216_C57", "Odds_216_P57", "Odds_216_I57", "Odds_216_C58", "Odds_216_P58", "Odds_216_I58", "Odds_216_C59", "Odds_216_P59", "Odds_216_I59", "Odds_216_C60", "Odds_216_P60", "Odds_216_I60", "Odds_216_C61", "Odds_216_P61", "Odds_216_I61", "Odds_216_C62", "Odds_216_P62", "Odds_216_I62", "Odds_216_C63", "Odds_216_P63", "Odds_216_I63", "Odds_216_C64", "Odds_216_P64", "Odds_216_I64", "Odds_216_C65", "Odds_216_P65", "Odds_216_I65", "Odds_216_C66", "Odds_216_P66", "Odds_216_I66", "Odds_216_C67", "Odds_216_P67", "Odds_216_I67", "Odds_216_C68", "Odds_216_P68", "Odds_216_I68", "Odds_216_C69", "Odds_216_P69", "Odds_216_I69", "Odds_216_C70", "Odds_216_P70", "Odds_216_I70", "Odds_216_C71", "Odds_216_P71", "Odds_216_I71", "Odds_216_C72", "Odds_216_P72", "Odds_216_I72", "Odds_216_C73", "Odds_216_P73", "Odds_216_I73", "Odds_216_C74", "Odds_216_P74", "Odds_216_I74", "Odds_216_C75", "Odds_216_P75", "Odds_216_I75", "Odds_216_C76", "Odds_216_P76", "Odds_216_I76", "Odds_216_C77", "Odds_216_P77", "Odds_216_I77", "Odds_216_C78", "Odds_216_P78", "Odds_216_I78", "Odds_216_C79", "Odds_216_P79", "Odds_216_I79", "Odds_216_C80", "Odds_216_P80", "Odds_216_I80", "Odds_216_C81", "Odds_216_P81", "Odds_216_I81", "Odds_216_C82", "Odds_216_P82", "Odds_216_I82", "Odds_216_C83", "Odds_216_P83", "Odds_216_I83", "Odds_216_C84", "Odds_216_P84", "Odds_216_I84", "Odds_216_C85", "Odds_216_P85", "Odds_216_I85", "Odds_216_C86", "Odds_216_P86", "Odds_216_I86", "Odds_216_C87", "Odds_216_P87", "Odds_216_I87", "Odds_216_C88", "Odds_216_P88", "Odds_216_I88", "Odds_216_C89", "Odds_216_P89", "Odds_216_I89", "Odds_216_C90", "Odds_216_P90", "Odds_216_I90", "Odds_216_C91", "Odds_216_P91", "Odds_216_I91", "Odds_216_C92", "Odds_216_P92", "Odds_216_I92", "Odds_216_C93", "Odds_216_P93", "Odds_216_I93", "Odds_216_C94", "Odds_216_P94", "Odds_216_I94", "Odds_216_C95", "Odds_216_P95", "Odds_216_I95", "Odds_216_C96", "Odds_216_P96", "Odds_216_I96", "Odds_216_C97", "Odds_216_P97", "Odds_216_I97", "Odds_216_C98", "Odds_216_P98", "Odds_216_I98", "Odds_216_C99", "Odds_216_P99", "Odds_216_I99"), MultiSportODDS_DEF[217] = new Array("OddsId_217", "Odds_217_C01", "Odds_217_P01", "Odds_217_I01", "Odds_217_C02", "Odds_217_P02", "Odds_217_I02", "Odds_217_C03", "Odds_217_P03", "Odds_217_I03", "Odds_217_C04", "Odds_217_P04", "Odds_217_I04", "Odds_217_C05", "Odds_217_P05", "Odds_217_I05", "Odds_217_C06", "Odds_217_P06", "Odds_217_I06", "Odds_217_C07", "Odds_217_P07", "Odds_217_I07", "Odds_217_C08", "Odds_217_P08", "Odds_217_I08", "Odds_217_C09", "Odds_217_P09", "Odds_217_I09", "Odds_217_C10", "Odds_217_P10", "Odds_217_I10", "Odds_217_C11", "Odds_217_P11", "Odds_217_I11", "Odds_217_C12", "Odds_217_P12", "Odds_217_I12", "Odds_217_C13", "Odds_217_P13", "Odds_217_I13", "Odds_217_C14", "Odds_217_P14", "Odds_217_I14", "Odds_217_C15", "Odds_217_P15", "Odds_217_I15", "Odds_217_C16", "Odds_217_P16", "Odds_217_I16", "Odds_217_C17", "Odds_217_P17", "Odds_217_I17", "Odds_217_C18", "Odds_217_P18", "Odds_217_I18", "Odds_217_C19", "Odds_217_P19", "Odds_217_I19", "Odds_217_C20", "Odds_217_P20", "Odds_217_I20", "Odds_217_C21", "Odds_217_P21", "Odds_217_I21", "Odds_217_C22", "Odds_217_P22", "Odds_217_I22", "Odds_217_C23", "Odds_217_P23", "Odds_217_I23", "Odds_217_C24", "Odds_217_P24", "Odds_217_I24", "Odds_217_C25", "Odds_217_P25", "Odds_217_I25", "Odds_217_C26", "Odds_217_P26", "Odds_217_I26", "Odds_217_C27", "Odds_217_P27", "Odds_217_I27", "Odds_217_C28", "Odds_217_P28", "Odds_217_I28", "Odds_217_C29", "Odds_217_P29", "Odds_217_I29", "Odds_217_C30", "Odds_217_P30", "Odds_217_I30", "Odds_217_C31", "Odds_217_P31", "Odds_217_I31", "Odds_217_C32", "Odds_217_P32", "Odds_217_I32", "Odds_217_C33", "Odds_217_P33", "Odds_217_I33", "Odds_217_C34", "Odds_217_P34", "Odds_217_I34", "Odds_217_C35", "Odds_217_P35", "Odds_217_I35", "Odds_217_C36", "Odds_217_P36", "Odds_217_I36", "Odds_217_C37", "Odds_217_P37", "Odds_217_I37", "Odds_217_C38", "Odds_217_P38", "Odds_217_I38", "Odds_217_C39", "Odds_217_P39", "Odds_217_I39", "Odds_217_C40", "Odds_217_P40", "Odds_217_I40", "Odds_217_C41", "Odds_217_P41", "Odds_217_I41", "Odds_217_C42", "Odds_217_P42", "Odds_217_I42", "Odds_217_C43", "Odds_217_P43", "Odds_217_I43", "Odds_217_C44", "Odds_217_P44", "Odds_217_I44", "Odds_217_C45", "Odds_217_P45", "Odds_217_I45", "Odds_217_C46", "Odds_217_P46", "Odds_217_I46", "Odds_217_C47", "Odds_217_P47", "Odds_217_I47", "Odds_217_C48", "Odds_217_P48", "Odds_217_I48", "Odds_217_C49", "Odds_217_P49", "Odds_217_I49", "Odds_217_C50", "Odds_217_P50", "Odds_217_I50", "Odds_217_C51", "Odds_217_P51", "Odds_217_I51", "Odds_217_C52", "Odds_217_P52", "Odds_217_I52", "Odds_217_C53", "Odds_217_P53", "Odds_217_I53", "Odds_217_C54", "Odds_217_P54", "Odds_217_I54", "Odds_217_C55", "Odds_217_P55", "Odds_217_I55", "Odds_217_C56", "Odds_217_P56", "Odds_217_I56", "Odds_217_C57", "Odds_217_P57", "Odds_217_I57", "Odds_217_C58", "Odds_217_P58", "Odds_217_I58", "Odds_217_C59", "Odds_217_P59", "Odds_217_I59", "Odds_217_C60", "Odds_217_P60", "Odds_217_I60", "Odds_217_C61", "Odds_217_P61", "Odds_217_I61", "Odds_217_C62", "Odds_217_P62", "Odds_217_I62", "Odds_217_C63", "Odds_217_P63", "Odds_217_I63", "Odds_217_C64", "Odds_217_P64", "Odds_217_I64", "Odds_217_C65", "Odds_217_P65", "Odds_217_I65", "Odds_217_C66", "Odds_217_P66", "Odds_217_I66", "Odds_217_C67", "Odds_217_P67", "Odds_217_I67", "Odds_217_C68", "Odds_217_P68", "Odds_217_I68", "Odds_217_C69", "Odds_217_P69", "Odds_217_I69", "Odds_217_C70", "Odds_217_P70", "Odds_217_I70", "Odds_217_C71", "Odds_217_P71", "Odds_217_I71", "Odds_217_C72", "Odds_217_P72", "Odds_217_I72", "Odds_217_C73", "Odds_217_P73", "Odds_217_I73", "Odds_217_C74", "Odds_217_P74", "Odds_217_I74", "Odds_217_C75", "Odds_217_P75", "Odds_217_I75", "Odds_217_C76", "Odds_217_P76", "Odds_217_I76", "Odds_217_C77", "Odds_217_P77", "Odds_217_I77", "Odds_217_C78", "Odds_217_P78", "Odds_217_I78", "Odds_217_C79", "Odds_217_P79", "Odds_217_I79", "Odds_217_C80", "Odds_217_P80", "Odds_217_I80", "Odds_217_C81", "Odds_217_P81", "Odds_217_I81", "Odds_217_C82", "Odds_217_P82", "Odds_217_I82", "Odds_217_C83", "Odds_217_P83", "Odds_217_I83", "Odds_217_C84", "Odds_217_P84", "Odds_217_I84", "Odds_217_C85", "Odds_217_P85", "Odds_217_I85", "Odds_217_C86", "Odds_217_P86", "Odds_217_I86", "Odds_217_C87", "Odds_217_P87", "Odds_217_I87", "Odds_217_C88", "Odds_217_P88", "Odds_217_I88", "Odds_217_C89", "Odds_217_P89", "Odds_217_I89", "Odds_217_C90", "Odds_217_P90", "Odds_217_I90", "Odds_217_C91", "Odds_217_P91", "Odds_217_I91", "Odds_217_C92", "Odds_217_P92", "Odds_217_I92", "Odds_217_C93", "Odds_217_P93", "Odds_217_I93", "Odds_217_C94", "Odds_217_P94", "Odds_217_I94", "Odds_217_C95", "Odds_217_P95", "Odds_217_I95", "Odds_217_C96", "Odds_217_P96", "Odds_217_I96", "Odds_217_C97", "Odds_217_P97", "Odds_217_I97", "Odds_217_C98", "Odds_217_P98", "Odds_217_I98", "Odds_217_C99", "Odds_217_P99", "Odds_217_I99"), MultiSportODDS_DEF[401] = new Array("OddsId_401", "Goal_401", "Odds_401_O", "Odds_401_U"), MultiSportODDS_DEF[402] = new Array("OddsId_402", "Goal_402", "Odds_402_O", "Odds_402_U"), MultiSportODDS_DEF[403] = new Array("OddsId_403", "Goal_403", "Odds_403_O", "Odds_403_U"), MultiSportODDS_DEF[404] = new Array("OddsId_404", "Goal_404", "Odds_404_O", "Odds_404_U"), MultiSportODDS_DEF[405] = new Array("OddsId_405", "Odds_405_00", "Odds_405_01", "Odds_405_02", "Odds_405_03", "Odds_405_10", "Odds_405_11", "Odds_405_12", "Odds_405_13", "Odds_405_20", "Odds_405_21", "Odds_405_22", "Odds_405_23", "Odds_405_30", "Odds_405_31", "Odds_405_32", "Odds_405_33", "Odds_405_99", "Odds_405_livehomescore", "Odds_405_liveawayscore"), MultiSportODDS_DEF[412] = new Array("OddsId_412", "Odds_412_0", "Odds_412_1", "Odds_412_2", "Odds_412_3"), MultiSportODDS_DEF[413] = new Array("OddsId_413", "Odds_413_00", "Odds_413_01", "Odds_413_02", "Odds_413_03", "Odds_413_04", "Odds_413_10", "Odds_413_11", "Odds_413_12", "Odds_413_13", "Odds_413_14", "Odds_413_20", "Odds_413_21", "Odds_413_22", "Odds_413_23", "Odds_413_24", "Odds_413_30", "Odds_413_31", "Odds_413_32", "Odds_413_33", "Odds_413_34", "Odds_413_40", "Odds_413_41", "Odds_413_42", "Odds_413_43", "Odds_413_44", "Odds_413_99", "Odds_413_livehomescore", "Odds_413_liveawayscore"), MultiSportODDS_DEF[414] = new Array("OddsId_414", "Odds_414_00", "Odds_414_01", "Odds_414_02", "Odds_414_03", "Odds_414_10", "Odds_414_11", "Odds_414_12", "Odds_414_13", "Odds_414_20", "Odds_414_21", "Odds_414_22", "Odds_414_23", "Odds_414_30", "Odds_414_31", "Odds_414_32", "Odds_414_33", "Odds_414_99", "Odds_414_livehomescore", "Odds_414_liveawayscore"), MultiSportODDS_DEF[416] = new Array("OddsId_416", "Odds_416_0000", "Odds_416_0001", "Odds_416_0002", "Odds_416_0003", "Odds_416_0004", "Odds_416_0010", "Odds_416_0011", "Odds_416_0012", "Odds_416_0013", "Odds_416_0014", "Odds_416_0020", "Odds_416_0021", "Odds_416_0022", "Odds_416_0023", "Odds_416_0024", "Odds_416_0030", "Odds_416_0031", "Odds_416_0032", "Odds_416_0033", "Odds_416_0034", "Odds_416_0040", "Odds_416_0041", "Odds_416_0042", "Odds_416_0043", "Odds_416_0044", "Odds_416_00AOS", "Odds_416_0101", "Odds_416_0102", "Odds_416_0103", "Odds_416_0104", "Odds_416_0111", "Odds_416_0112", "Odds_416_0113", "Odds_416_0114", "Odds_416_0121", "Odds_416_0122", "Odds_416_0123", "Odds_416_0124", "Odds_416_0131", "Odds_416_0132", "Odds_416_0133", "Odds_416_0134", "Odds_416_0141", "Odds_416_0142", "Odds_416_0143", "Odds_416_0144", "Odds_416_01AOS", "Odds_416_0202", "Odds_416_0203", "Odds_416_0204", "Odds_416_0212", "Odds_416_0213", "Odds_416_0214", "Odds_416_0222", "Odds_416_0223", "Odds_416_0224", "Odds_416_0232", "Odds_416_0233", "Odds_416_0234", "Odds_416_0242", "Odds_416_0243", "Odds_416_0244", "Odds_416_02AOS", "Odds_416_0303", "Odds_416_0304", "Odds_416_0313", "Odds_416_0314", "Odds_416_0323", "Odds_416_0324", "Odds_416_0333", "Odds_416_0334", "Odds_416_0343", "Odds_416_0344", "Odds_416_03AOS", "Odds_416_1010", "Odds_416_1011", "Odds_416_1012", "Odds_416_1013", "Odds_416_1014", "Odds_416_1020", "Odds_416_1021", "Odds_416_1022", "Odds_416_1023", "Odds_416_1024", "Odds_416_1030", "Odds_416_1031", "Odds_416_1032", "Odds_416_1033", "Odds_416_1034", "Odds_416_1040", "Odds_416_1041", "Odds_416_1042", "Odds_416_1043", "Odds_416_1044", "Odds_416_10AOS", "Odds_416_1111", "Odds_416_1112", "Odds_416_1113", "Odds_416_1114", "Odds_416_1121", "Odds_416_1122", "Odds_416_1123", "Odds_416_1124", "Odds_416_1131", "Odds_416_1132", "Odds_416_1133", "Odds_416_1134", "Odds_416_1141", "Odds_416_1142", "Odds_416_1143", "Odds_416_1144", "Odds_416_11AOS", "Odds_416_1212", "Odds_416_1213", "Odds_416_1214", "Odds_416_1222", "Odds_416_1223", "Odds_416_1224", "Odds_416_1232", "Odds_416_1233", "Odds_416_1234", "Odds_416_1242", "Odds_416_1243", "Odds_416_1244", "Odds_416_12AOS", "Odds_416_1313", "Odds_416_1314", "Odds_416_1323", "Odds_416_1324", "Odds_416_1333", "Odds_416_1334", "Odds_416_1343", "Odds_416_1344", "Odds_416_13AOS", "Odds_416_2020", "Odds_416_2021", "Odds_416_2022", "Odds_416_2023", "Odds_416_2024", "Odds_416_2030", "Odds_416_2031", "Odds_416_2032", "Odds_416_2033", "Odds_416_2034", "Odds_416_2040", "Odds_416_2041", "Odds_416_2042", "Odds_416_2043", "Odds_416_2044", "Odds_416_20AOS", "Odds_416_2121", "Odds_416_2122", "Odds_416_2123", "Odds_416_2124", "Odds_416_2131", "Odds_416_2132", "Odds_416_2133", "Odds_416_2134", "Odds_416_2141", "Odds_416_2142", "Odds_416_2143", "Odds_416_2144", "Odds_416_21AOS", "Odds_416_2222", "Odds_416_2223", "Odds_416_2224", "Odds_416_2232", "Odds_416_2233", "Odds_416_2234", "Odds_416_2242", "Odds_416_2243", "Odds_416_2244", "Odds_416_22AOS", "Odds_416_2323", "Odds_416_2324", "Odds_416_2333", "Odds_416_2334", "Odds_416_2343", "Odds_416_2344", "Odds_416_23AOS", "Odds_416_3030", "Odds_416_3031", "Odds_416_3032", "Odds_416_3033", "Odds_416_3034", "Odds_416_3040", "Odds_416_3041", "Odds_416_3042", "Odds_416_3043", "Odds_416_3044", "Odds_416_30AOS", "Odds_416_3131", "Odds_416_3132", "Odds_416_3133", "Odds_416_3134", "Odds_416_3141", "Odds_416_3142", "Odds_416_3143", "Odds_416_3144", "Odds_416_31AOS", "Odds_416_3232", "Odds_416_3233", "Odds_416_3234", "Odds_416_3242", "Odds_416_3243", "Odds_416_3244", "Odds_416_32AOS", "Odds_416_3333", "Odds_416_3334", "Odds_416_3343", "Odds_416_3344", "Odds_416_33AOS"), MultiSportODDS_DEF[417] = new Array("OddsId_417", "Odds_417_YH", "Odds_417_YA", "Odds_417_YD", "Odds_417_NH", "Odds_417_NA", "Odds_417_ND"), MultiSportODDS_DEF[418] = new Array("OddsId_418", "Goal_418", "Odds_418_YO", "Odds_418_YU", "Odds_418_NO", "Odds_418_NU"), MultiSportODDS_DEF[419] = new Array("OddsId_419", "Odds_419_1H", "Odds_419_2H", "Odds_419_N"), MultiSportODDS_DEF[420] = new Array("OddsId_420", "Odds_420_1H", "Odds_420_2H", "Odds_420_N"), MultiSportODDS_DEF[421] = new Array("OddsId_421", "Odds_421_1H", "Odds_421_2H", "Odds_421_N"), MultiSportODDS_DEF[422] = new Array("OddsId_422", "Odds_422_H", "Odds_422_A", "Odds_422_N"), MultiSportODDS_DEF[423] = new Array("OddsId_423", "Odds_423_H", "Odds_423_A", "Odds_423_N"), MultiSportODDS_DEF[424] = new Array("OddsId_424", "Odds_424_S", "Odds_424_H", "Odds_424_P", "Odds_424_FK", "Odds_424_OG", "Odds_424_NG"), MultiSportODDS_DEF[425] = new Array("OddsId_425", "Odds_425_H", "Odds_425_A"), MultiSportODDS_DEF[426] = new Array("OddsId_426", "Odds_426_H1", "Odds_426_H2UP", "Odds_426_D", "Odds_426_A1", "Odds_426_A2UP", "Odds_426_NG"), MultiSportODDS_DEF[429] = new Array("OddsId_429", "Odds_429_0", "Odds_429_1", "Odds_429_2", "Odds_429_3OVER"), MultiSportODDS_DEF[445] = new Array("OddsId_445", "Odds_445_YY", "Odds_445_YN", "Odds_445_NY", "Odds_445_NN"), MultiSportODDS_DEF[446] = new Array("OddsId_446", "Odds_446_YY", "Odds_446_YN", "Odds_446_NY", "Odds_446_NN"), MultiSportODDS_DEF[447] = new Array("OddsId_447", "Odds_447_YY", "Odds_447_YN", "Odds_447_NY", "Odds_447_NN"), MultiSportODDS_DEF[221] = new Array("OddsId_221", "Value_221", "Odds_221_01", "Odds_221_02", "Odds_221_03", "Odds_221_04", "Odds_221_05"), MultiSportODDS_DEF[222] = new Array("OddsId_222", "Value_222", "Odds_222_01", "Odds_222_10", "Odds_222_02", "Odds_222_20", "Odds_222_13"), MultiSportODDS_DEF[223] = new Array("OddsId_223", "Value_223", "Odds_223_00", "Odds_223_01", "Odds_223_02", "Odds_223_03", "Odds_223_04", "Odds_223_05"), MultiSportODDS_DEF[224] = new Array("OddsId_224", "Value_224", "Odds_224_00", "Odds_224_01", "Odds_224_02", "Odds_224_12", "Odds_224_13"), MultiSportODDS_DEF[1201] = new Array("OddsId_1201", "Value_1201", "Odds_1201_H", "Odds_1201_A", "FavorF"), MultiSportODDS_DEF[1203] = new Array("OddsId_1203", "Goal_1203", "Odds_1203_O", "Odds_1203_U"), MultiSportODDS_DEF[1204] = new Array("OddsId_1204", "Odds_1204_00", "Odds_1204_01", "Odds_1204_02", "Odds_1204_03", "Odds_1204_04", "Odds_1204_10", "Odds_1204_11", "Odds_1204_12", "Odds_1204_13", "Odds_1204_20", "Odds_1204_21", "Odds_1204_22", "Odds_1204_30", "Odds_1204_31", "Odds_1204_40"), MultiSportODDS_DEF[1205] = new Array("OddsId_1205", "Odds_1205_1", "Odds_1205_X", "Odds_1205_2"), MultiSportODDS_DEF[1206] = new Array("OddsId_1206", "Odds_1206_0", "Odds_1206_1", "Odds_1206_2", "Odds_1206_3", "Odds_1206_4"), MultiSportODDS_DEF[1224] = new Array("OddsId_1224", "Odds_1224_1X", "Odds_1224_12", "Odds_1224_2X"), MultiSportODDS_DEF[1220] = new Array("OddsId_1220", "Odds_1220_H", "Odds_1220_A"), MultiSportODDS_DEF[1235] = new Array("OddsId_1235", "Odds_1235_01", "Odds_1235_02", "Odds_1235_03", "Odds_1235_04", "Odds_1235_10", "Odds_1235_20", "Odds_1235_30", "Odds_1235_40"), MultiSportODDS_DEF[1236] = new Array("OddsId_1236", "Odds_1236_0", "Odds_1236_1", "Odds_1236_2", "Odds_1236_3", "Odds_1236_4", "Odds_1236_5"), MultiSportODDS_DEF[1326] = new Array("OddsId", "Value", "Odds_0", "Odds_1", "FavorF", "Resourceid"), MultiSportODDS_DEF[1304] = new Array("OddsId", "Goal", "Odds_0", "Odds_1", "Resourceid"), MultiSportODDS_DEF[1310] = MultiSportODDS_DEF[1304], MultiSportODDS_DEF[1323] = MultiSportODDS_DEF[1304], MultiSportODDS_DEF[1329] = MultiSportODDS_DEF[1304], MultiSportODDS_DEF[1318] = new Array("OddsId", "Odds_0", "Odds_1", "Resourceid"), MultiSportODDS_DEF[1331] = MultiSportODDS_DEF[1318], MultiSportODDS_DEF[1307] = new Array("OddsId", "Odds_0", "Odds_1", "Odds_2", "hdp1", "hdpx", "hdp2", "Resourceid"), MultiSportODDS_DEF[1309] = MultiSportODDS_DEF[1307], MultiSportODDS_DEF[1313] = MultiSportODDS_DEF[1307], MultiSportODDS_DEF[1330] = MultiSportODDS_DEF[1307], MultiSportODDS_DEF[1334] = new Array("OddsId", "Goal", "Odds_0", "Odds_1", "Odds_2", "Resourceid"), MultiSportODDS_DEF[1328] = new Array("OddsId", "Odds_0", "Odds_1", "Odds_2", "Odds_3", "Resourceid"), MultiSportODDS_DEF[1302] = new Array("OddsId", "Odds_0", "Odds_1", "Odds_2", "Odds_3", "Odds_4", "Odds_5", "Odds_6", "Odds_7", "Odds_8", "Odds_9", "Resourceid"), MultiSportODDS_DEF[1317] = new Array("OddsId", "Odds_0", "Odds_1", "Odds_2", "Odds_3", "Odds_4", "Odds_5", "Odds_6", "Odds_7", "Odds_8", "Odds_9", "Odds_10", "Odds_11", "Odds_12", "Odds_13", "Resourceid"), MultiSportODDS_DEF[1320] = new Array("OddsId", "Odds_0", "Odds_1", "Odds_2", "Resourceid"), MultiSportODDS_DEF[1321] = new Array("OddsId", "Odds_0", "Odds_1", "Odds_2", "Odds_3", "Odds_4", "Resourceid"), MultiSportODDS_DEF[1322] = new Array("OddsId", "Odds_0", "Odds_1", "Odds_2", "Odds_3", "Odds_4", "Odds_5", "Odds_6", "Resourceid"), MultiSportODDS_DEF[1325] = new Array("OddsId", "Odds_0", "Odds_1", "Odds_2", "Odds_3", "Odds_4", "Odds_5", "Odds_6", "Odds_7", "Resourceid"), MultiSportODDS_DEF[1314] = new Array("OddsId", "Odds_0", "Odds_1", "Resourceid"), MultiSportODDS_DEF[1319] = MultiSportODDS_DEF[1314], MultiSportODDS_DEF[1324] = MultiSportODDS_DEF[1314], MultiSportODDS_DEF[1327] = MultiSportODDS_DEF[1314], MultiSportODDS_DEF[1332] = MultiSportODDS_DEF[1314], MultiSportODDS_DEF[1315] = MultiSportODDS_DEF[1320], MultiSportODDS_DEF[1333] = MultiSportODDS_DEF[1320], MultiSportODDS_DEF[501] = new Array("OddsId_501", "Odds_501_H", "Odds_501_A", "Odds_501_CS10", "Odds_501_CS20"), MultiSportODDS_DEF[502] = new Array("OddsId_502", "Odds_502_1", "Odds_502_X", "Odds_502_2");
var mMultiSportODDS_DEF = new Array;
mMultiSportODDS_DEF.B1_2_3_5 = COMMON_DEF[5].concat(MultiSportODDS_DEF[1]).concat(MultiSportODDS_DEF[2]).concat(MultiSportODDS_DEF[3]).concat(MultiSportODDS_DEF[5]), mMultiSportODDS_DEF.B7_12_8_15 = COMMON_DEF[5].concat(MultiSportODDS_DEF[7]).concat(MultiSportODDS_DEF[12]).concat(MultiSportODDS_DEF[8]).concat(MultiSportODDS_DEF[15]), mMultiSportODDS_DEF.B2 = COMMON_DEF[4].concat(MultiSportODDS_DEF[2]), mMultiSportODDS_DEF.B4 = COMMON_DEF[4].concat(MultiSportODDS_DEF[4]), mMultiSportODDS_DEF.B5 = COMMON_DEF[4].concat(MultiSportODDS_DEF[5]), mMultiSportODDS_DEF.B6 = COMMON_DEF[4].concat(MultiSportODDS_DEF[6]), mMultiSportODDS_DEF.B11 = COMMON_DEF[4].concat(MultiSportODDS_DEF[11]), mMultiSportODDS_DEF.B12 = COMMON_DEF[4].concat(MultiSportODDS_DEF[12]), mMultiSportODDS_DEF.B13 = COMMON_DEF[4].concat(MultiSportODDS_DEF[13]), mMultiSportODDS_DEF.B14 = COMMON_DEF[4].concat(MultiSportODDS_DEF[14]), mMultiSportODDS_DEF.B15 = COMMON_DEF[4].concat(MultiSportODDS_DEF[15]), mMultiSportODDS_DEF.B16 = COMMON_DEF[4].concat(MultiSportODDS_DEF[16]), mMultiSportODDS_DEF.B17 = COMMON_DEF[4].concat(MultiSportODDS_DEF[17]), mMultiSportODDS_DEF.B18 = COMMON_DEF[4].concat(MultiSportODDS_DEF[18]), mMultiSportODDS_DEF.B22 = COMMON_DEF[4].concat(MultiSportODDS_DEF[22]), mMultiSportODDS_DEF.B24 = COMMON_DEF[4].concat(MultiSportODDS_DEF[24]), mMultiSportODDS_DEF.B25 = COMMON_DEF[4].concat(MultiSportODDS_DEF[25]), mMultiSportODDS_DEF.B26 = COMMON_DEF[4].concat(MultiSportODDS_DEF[26]), mMultiSportODDS_DEF.B27 = COMMON_DEF[4].concat(MultiSportODDS_DEF[27]), mMultiSportODDS_DEF.B28 = COMMON_DEF[4].concat(MultiSportODDS_DEF[28]), mMultiSportODDS_DEF.B30 = COMMON_DEF[4].concat(MultiSportODDS_DEF[30]), mMultiSportODDS_DEF.B121 = COMMON_DEF[4].concat(MultiSportODDS_DEF[121]), mMultiSportODDS_DEF.B122 = COMMON_DEF[4].concat(MultiSportODDS_DEF[122]), mMultiSportODDS_DEF.B123 = COMMON_DEF[4].concat(MultiSportODDS_DEF[123]), mMultiSportODDS_DEF.B126 = COMMON_DEF[4].concat(MultiSportODDS_DEF[126]), mMultiSportODDS_DEF.B127 = COMMON_DEF[4].concat(MultiSportODDS_DEF[127]), mMultiSportODDS_DEF.B128 = COMMON_DEF[4].concat(MultiSportODDS_DEF[128]), mMultiSportODDS_DEF.B133 = COMMON_DEF[4].concat(MultiSportODDS_DEF[133]), mMultiSportODDS_DEF.B134 = COMMON_DEF[4].concat(MultiSportODDS_DEF[134]), mMultiSportODDS_DEF.B135 = COMMON_DEF[4].concat(MultiSportODDS_DEF[135]), mMultiSportODDS_DEF.B140 = COMMON_DEF[4].concat(MultiSportODDS_DEF[140]), mMultiSportODDS_DEF.B141 = COMMON_DEF[4].concat(MultiSportODDS_DEF[141]), mMultiSportODDS_DEF.B142 = COMMON_DEF[4].concat(MultiSportODDS_DEF[142]), mMultiSportODDS_DEF.B144 = COMMON_DEF[4].concat(MultiSportODDS_DEF[144]), mMultiSportODDS_DEF.B145 = COMMON_DEF[4].concat(MultiSportODDS_DEF[145]), mMultiSportODDS_DEF.B146 = COMMON_DEF[4].concat(MultiSportODDS_DEF[146]), mMultiSportODDS_DEF.B147 = COMMON_DEF[4].concat(MultiSportODDS_DEF[147]), mMultiSportODDS_DEF.B148 = COMMON_DEF[4].concat(MultiSportODDS_DEF[148]), mMultiSportODDS_DEF.B149 = COMMON_DEF[4].concat(MultiSportODDS_DEF[149]), mMultiSportODDS_DEF.B150 = COMMON_DEF[4].concat(MultiSportODDS_DEF[150]), mMultiSportODDS_DEF.B151 = COMMON_DEF[4].concat(MultiSportODDS_DEF[151]), mMultiSportODDS_DEF.B152 = COMMON_DEF[4].concat(MultiSportODDS_DEF[152]), mMultiSportODDS_DEF.B158 = COMMON_DEF[4].concat(MultiSportODDS_DEF[158]), mMultiSportODDS_DEF.B159 = COMMON_DEF[4].concat(MultiSportODDS_DEF[159]), mMultiSportODDS_DEF.B161 = COMMON_DEF[4].concat(MultiSportODDS_DEF[161]), mMultiSportODDS_DEF.B162 = COMMON_DEF[4].concat(MultiSportODDS_DEF[162]), mMultiSportODDS_DEF.B164 = COMMON_DEF[4].concat(MultiSportODDS_DEF[164]), mMultiSportODDS_DEF.B165 = COMMON_DEF[4].concat(MultiSportODDS_DEF[165]), mMultiSportODDS_DEF.B166 = COMMON_DEF[4].concat(MultiSportODDS_DEF[166]), mMultiSportODDS_DEF.B167 = COMMON_DEF[4].concat(MultiSportODDS_DEF[167]), mMultiSportODDS_DEF.B168 = COMMON_DEF[4].concat(MultiSportODDS_DEF[168]), mMultiSportODDS_DEF.B169 = COMMON_DEF[4].concat(MultiSportODDS_DEF[169]), mMultiSportODDS_DEF.B170 = COMMON_DEF[4].concat(MultiSportODDS_DEF[170]), mMultiSportODDS_DEF.B171 = COMMON_DEF[4].concat(MultiSportODDS_DEF[171]), mMultiSportODDS_DEF.B172 = COMMON_DEF[4].concat(MultiSportODDS_DEF[172]), mMultiSportODDS_DEF.B173 = COMMON_DEF[4].concat(MultiSportODDS_DEF[173]), mMultiSportODDS_DEF.B174 = COMMON_DEF[4].concat(MultiSportODDS_DEF[174]), mMultiSportODDS_DEF.B175 = COMMON_DEF[4].concat(MultiSportODDS_DEF[175]), mMultiSportODDS_DEF.B176 = COMMON_DEF[4].concat(MultiSportODDS_DEF[176]), mMultiSportODDS_DEF.B177 = COMMON_DEF[4].concat(MultiSportODDS_DEF[177]), mMultiSportODDS_DEF.B179 = COMMON_DEF[4].concat(MultiSportODDS_DEF[179]), mMultiSportODDS_DEF.B180 = COMMON_DEF[4].concat(MultiSportODDS_DEF[180]), mMultiSportODDS_DEF.B181 = COMMON_DEF[4].concat(MultiSportODDS_DEF[181]), mMultiSportODDS_DEF.B182 = COMMON_DEF[4].concat(MultiSportODDS_DEF[182]), mMultiSportODDS_DEF.B184 = COMMON_DEF[4].concat(MultiSportODDS_DEF[184]), mMultiSportODDS_DEF.B185 = COMMON_DEF[4].concat(MultiSportODDS_DEF[185]), mMultiSportODDS_DEF.B186 = COMMON_DEF[4].concat(MultiSportODDS_DEF[186]), mMultiSportODDS_DEF.B187 = COMMON_DEF[4].concat(MultiSportODDS_DEF[187]), mMultiSportODDS_DEF.B188 = COMMON_DEF[4].concat(MultiSportODDS_DEF[188]), mMultiSportODDS_DEF.B189 = COMMON_DEF[4].concat(MultiSportODDS_DEF[189]), mMultiSportODDS_DEF.B190 = COMMON_DEF[4].concat(MultiSportODDS_DEF[190]), mMultiSportODDS_DEF.B191 = COMMON_DEF[4].concat(MultiSportODDS_DEF[191]), mMultiSportODDS_DEF.B192 = COMMON_DEF[4].concat(MultiSportODDS_DEF[192]), mMultiSportODDS_DEF.B193 = COMMON_DEF[4].concat(MultiSportODDS_DEF[193]), mMultiSportODDS_DEF.B194 = COMMON_DEF[4].concat(MultiSportODDS_DEF[194]), mMultiSportODDS_DEF.B195 = COMMON_DEF[4].concat(MultiSportODDS_DEF[195]), mMultiSportODDS_DEF.B196 = COMMON_DEF[4].concat(MultiSportODDS_DEF[196]), mMultiSportODDS_DEF.B197 = COMMON_DEF[4].concat(MultiSportODDS_DEF[197]), mMultiSportODDS_DEF.B198 = COMMON_DEF[4].concat(MultiSportODDS_DEF[198]), mMultiSportODDS_DEF.B200 = COMMON_DEF[4].concat(MultiSportODDS_DEF[200]), mMultiSportODDS_DEF.B201 = COMMON_DEF[4].concat(MultiSportODDS_DEF[201]), mMultiSportODDS_DEF.B202 = COMMON_DEF[4].concat(MultiSportODDS_DEF[202]), mMultiSportODDS_DEF.B203 = COMMON_DEF[4].concat(MultiSportODDS_DEF[203]), mMultiSportODDS_DEF.B204 = COMMON_DEF[4].concat(MultiSportODDS_DEF[204]), mMultiSportODDS_DEF.B205 = COMMON_DEF[4].concat(MultiSportODDS_DEF[205]), mMultiSportODDS_DEF.B206 = COMMON_DEF[4].concat(MultiSportODDS_DEF[206]), mMultiSportODDS_DEF.B207 = COMMON_DEF[4].concat(MultiSportODDS_DEF[207]), mMultiSportODDS_DEF.B208 = COMMON_DEF[4].concat(MultiSportODDS_DEF[208]), mMultiSportODDS_DEF.B209 = COMMON_DEF[4].concat(MultiSportODDS_DEF[209]), mMultiSportODDS_DEF.B210 = COMMON_DEF[4].concat(MultiSportODDS_DEF[210]), mMultiSportODDS_DEF.B211 = COMMON_DEF[4].concat(MultiSportODDS_DEF[211]), mMultiSportODDS_DEF.B212 = COMMON_DEF[4].concat(MultiSportODDS_DEF[212]), mMultiSportODDS_DEF.B213 = COMMON_DEF[4].concat(MultiSportODDS_DEF[213]), mMultiSportODDS_DEF.B214 = COMMON_DEF[4].concat(MultiSportODDS_DEF[214]), mMultiSportODDS_DEF.B215 = COMMON_DEF[4].concat(MultiSportODDS_DEF[215]), mMultiSportODDS_DEF.B216 = COMMON_DEF[4].concat(MultiSportODDS_DEF[216]), mMultiSportODDS_DEF.B217 = COMMON_DEF[4].concat(MultiSportODDS_DEF[217]), mMultiSportODDS_DEF.B221 = COMMON_DEF[4].concat(MultiSportODDS_DEF[221]), mMultiSportODDS_DEF.B222 = COMMON_DEF[4].concat(MultiSportODDS_DEF[222]), mMultiSportODDS_DEF.B223 = COMMON_DEF[4].concat(MultiSportODDS_DEF[223]), mMultiSportODDS_DEF.B224 = COMMON_DEF[4].concat(MultiSportODDS_DEF[224]), mMultiSportODDS_DEF.B401 = COMMON_DEF[4].concat(MultiSportODDS_DEF[401]), mMultiSportODDS_DEF.B402 = COMMON_DEF[4].concat(MultiSportODDS_DEF[402]), mMultiSportODDS_DEF.B403 = COMMON_DEF[4].concat(MultiSportODDS_DEF[403]), mMultiSportODDS_DEF.B404 = COMMON_DEF[4].concat(MultiSportODDS_DEF[404]), mMultiSportODDS_DEF.B405 = COMMON_DEF[4].concat(MultiSportODDS_DEF[405]), mMultiSportODDS_DEF.B412 = COMMON_DEF[4].concat(MultiSportODDS_DEF[412]), mMultiSportODDS_DEF.B413 = COMMON_DEF[4].concat(MultiSportODDS_DEF[413]), mMultiSportODDS_DEF.B414 = COMMON_DEF[4].concat(MultiSportODDS_DEF[414]), mMultiSportODDS_DEF.B416 = COMMON_DEF[4].concat(MultiSportODDS_DEF[416]), mMultiSportODDS_DEF.B417 = COMMON_DEF[4].concat(MultiSportODDS_DEF[417]), mMultiSportODDS_DEF.B418 = COMMON_DEF[4].concat(MultiSportODDS_DEF[418]), mMultiSportODDS_DEF.B419 = COMMON_DEF[4].concat(MultiSportODDS_DEF[419]), mMultiSportODDS_DEF.B420 = COMMON_DEF[4].concat(MultiSportODDS_DEF[420]), mMultiSportODDS_DEF.B421 = COMMON_DEF[4].concat(MultiSportODDS_DEF[421]), mMultiSportODDS_DEF.B422 = COMMON_DEF[4].concat(MultiSportODDS_DEF[422]), mMultiSportODDS_DEF.B423 = COMMON_DEF[4].concat(MultiSportODDS_DEF[423]), mMultiSportODDS_DEF.B424 = COMMON_DEF[4].concat(MultiSportODDS_DEF[424]), mMultiSportODDS_DEF.B425 = COMMON_DEF[4].concat(MultiSportODDS_DEF[425]), mMultiSportODDS_DEF.B426 = COMMON_DEF[4].concat(MultiSportODDS_DEF[426]), mMultiSportODDS_DEF.B429 = COMMON_DEF[4].concat(MultiSportODDS_DEF[429]), mMultiSportODDS_DEF.B445 = COMMON_DEF[4].concat(MultiSportODDS_DEF[445]), mMultiSportODDS_DEF.B446 = COMMON_DEF[4].concat(MultiSportODDS_DEF[446]), mMultiSportODDS_DEF.B447 = COMMON_DEF[4].concat(MultiSportODDS_DEF[447]);
var LIVESCORE_DEF = new Array;
LIVESCORE_DEF[2] = new Array("GS", "LLP", "H1Q", "H2Q", "H3Q", "H4Q", "A1Q", "A2Q", "A3Q", "A4Q", "HOT", "AOT", "HIDE", "HTG", "ATG"), LIVESCORE_DEF[3] = new Array("GS", "LLP", "H1Q", "H2Q", "H3Q", "H4Q", "A1Q", "A2Q", "A3Q", "A4Q", "HOT", "AOT", "BALLON", "DOWN", "TOGO", "HIDE", "HTG", "ATG"), LIVESCORE_DEF[4] = new Array("GS", "LLP", "H1S", "H2S", "H3S", "A1S", "A2S", "A3S", "HOT", "AOT", "HIDE", "HTG", "ATG", "PP", "HPP", "APP"), LIVESCORE_DEF[7] = new Array("GS", "HFM", "AFM", "CFM", "HPT", "APT", "HLS", "TRN"), LIVESCORE_DEF[5] = new Array("GS", "LLP", "H1S", "H2S", "H3S", "H4S", "H5S", "A1S", "A2S", "A3S", "A4S", "A5S", "HPT", "APT", "HS", "AS", "SERVING", "GT", "HIDE", "HTG", "ATG", "INJ"), LIVESCORE_DEF[8] = new Array("GS", "LLP", "H1S", "H2S", "H3S", "H4S", "H5S", "H6S", "H7S", "H8S", "H9S", "A1S", "A2S", "A3S", "A4S", "A5S", "A6S", "A7S", "A8S", "A9S", "HOT", "AOT", "Battle", "B1", "B2", "B3", "Out", "HIDE", "HRUNS", "ARUNS"), LIVESCORE_DEF[26] = new Array("GS", "LLP"), LIVESCORE_DEF[28] = new Array("GS", "LLP");
var LIVE_SCORE_HEAD_DEF = new Array("MUID"),
	LIVE_SCORE_DEF = new Array;
LIVE_SCORE_DEF[2] = LIVE_SCORE_HEAD_DEF.concat(LIVESCORE_DEF[2]), LIVE_SCORE_DEF[3] = LIVE_SCORE_HEAD_DEF.concat(LIVESCORE_DEF[3]), LIVE_SCORE_DEF[4] = LIVE_SCORE_HEAD_DEF.concat(LIVESCORE_DEF[4]), LIVE_SCORE_DEF[5] = LIVE_SCORE_HEAD_DEF.concat(LIVESCORE_DEF[5]), LIVE_SCORE_DEF[6] = LIVE_SCORE_DEF[5], LIVE_SCORE_DEF[7] = LIVE_SCORE_HEAD_DEF.concat(LIVESCORE_DEF[7]), LIVE_SCORE_DEF[8] = LIVE_SCORE_HEAD_DEF.concat(LIVESCORE_DEF[8]), LIVE_SCORE_DEF[9] = LIVE_SCORE_DEF[5], LIVE_SCORE_DEF[26] = LIVE_SCORE_HEAD_DEF.concat(LIVESCORE_DEF[26]), LIVE_SCORE_DEF[28] = LIVE_SCORE_HEAD_DEF.concat(LIVESCORE_DEF[28]);
var ODDS_HEAD_DEF = new Array("MUID", "BetType"),
	ODDS_DEF = new Array;
ODDS_DEF[0] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[0]), ODDS_DEF[1] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[1]), ODDS_DEF[2] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[2]), ODDS_DEF[3] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[3]), ODDS_DEF[4] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[4]), ODDS_DEF[5] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[5]), ODDS_DEF[6] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[6]), ODDS_DEF[7] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[7]), ODDS_DEF[8] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[8]), ODDS_DEF[12] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[12]), ODDS_DEF[14] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[14]), ODDS_DEF[15] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[15]), ODDS_DEF[16] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[16]), ODDS_DEF[20] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[20]), ODDS_DEF[21] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[21]), ODDS_DEF[30] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[30]), ODDS_DEF[81] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[81]), ODDS_DEF[82] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[82]), ODDS_DEF[83] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[83]), ODDS_DEF[84] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[84]), ODDS_DEF[85] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[85]), ODDS_DEF[86] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[86]), ODDS_DEF[87] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[87]), ODDS_DEF[88] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[88]), ODDS_DEF[89] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[89]), ODDS_DEF[901] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[901]), ODDS_DEF[902] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[902]), ODDS_DEF[903] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[903]), ODDS_DEF[904] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[904]), ODDS_DEF[905] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[905]), ODDS_DEF[126] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[126]), ODDS_DEF[127] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[127]), ODDS_DEF[128] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[128]), ODDS_DEF[133] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[133]), ODDS_DEF[134] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[134]), ODDS_DEF[135] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[135]), ODDS_DEF[140] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[140]), ODDS_DEF[141] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[141]), ODDS_DEF[142] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[142]), ODDS_DEF[145] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[145]), ODDS_DEF[146] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[146]), ODDS_DEF[147] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[147]), ODDS_DEF[148] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[148]), ODDS_DEF[149] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[149]), ODDS_DEF[150] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[150]), ODDS_DEF[151] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[151]), ODDS_DEF[152] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[152]), ODDS_DEF[153] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[153]), ODDS_DEF[401] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[401]), ODDS_DEF[402] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[402]), ODDS_DEF[403] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[403]), ODDS_DEF[404] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[404]), ODDS_DEF[405] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[405]), ODDS_DEF[412] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[412]), ODDS_DEF[413] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[413]), ODDS_DEF[414] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[414]), ODDS_DEF[416] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[416]), ODDS_DEF[417] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[417]), ODDS_DEF[418] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[418]), ODDS_DEF[419] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[419]), ODDS_DEF[420] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[420]), ODDS_DEF[421] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[421]), ODDS_DEF[422] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[422]), ODDS_DEF[423] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[423]), ODDS_DEF[424] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[424]), ODDS_DEF[425] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[425]), ODDS_DEF[426] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[426]), ODDS_DEF[429] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[429]), ODDS_DEF[445] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[445]), ODDS_DEF[446] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[446]), ODDS_DEF[447] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[447]), ODDS_DEF[501] = ODDS_HEAD_DEF.concat(MultiSportODDS_DEF[501]);
var ARR_BETYPE_DEF = new Array;
ARR_BETYPE_DEF[1] = new Array(1, 3, 5, 7, 8, 15), ARR_BETYPE_DEF[2] = new Array(1, 2, 3, 7, 8, 12), ARR_BETYPE_DEF[3] = ARR_BETYPE_DEF[2], ARR_BETYPE_DEF[26] = ARR_BETYPE_DEF[2], ARR_BETYPE_DEF[32] = ARR_BETYPE_DEF[2], ARR_BETYPE_DEF[4] = new Array(1, 2, 3, 20), ARR_BETYPE_DEF[5] = new Array(1, 2, 3, 20, 153), ARR_BETYPE_DEF[6] = ARR_BETYPE_DEF[4], ARR_BETYPE_DEF[7] = ARR_BETYPE_DEF[4], ARR_BETYPE_DEF[8] = new Array(1, 3, 7, 8, 20, 21), ARR_BETYPE_DEF[9] = ARR_BETYPE_DEF[4], ARR_BETYPE_DEF[10] = ARR_BETYPE_DEF[4], ARR_BETYPE_DEF[11] = ARR_BETYPE_DEF[4], ARR_BETYPE_DEF[12] = ARR_BETYPE_DEF[4], ARR_BETYPE_DEF[13] = ARR_BETYPE_DEF[4], ARR_BETYPE_DEF[14] = ARR_BETYPE_DEF[4], ARR_BETYPE_DEF[15] = ARR_BETYPE_DEF[4], ARR_BETYPE_DEF[16] = ARR_BETYPE_DEF[4], ARR_BETYPE_DEF[17] = ARR_BETYPE_DEF[4], ARR_BETYPE_DEF[18] = ARR_BETYPE_DEF[4], ARR_BETYPE_DEF[19] = ARR_BETYPE_DEF[4], ARR_BETYPE_DEF[20] = ARR_BETYPE_DEF[4], ARR_BETYPE_DEF[21] = ARR_BETYPE_DEF[4], ARR_BETYPE_DEF[22] = ARR_BETYPE_DEF[4], ARR_BETYPE_DEF[23] = ARR_BETYPE_DEF[4], ARR_BETYPE_DEF[24] = ARR_BETYPE_DEF[4], ARR_BETYPE_DEF[25] = ARR_BETYPE_DEF[4], ARR_BETYPE_DEF[28] = ARR_BETYPE_DEF[4], ARR_BETYPE_DEF[29] = ARR_BETYPE_DEF[4], ARR_BETYPE_DEF[30] = ARR_BETYPE_DEF[4], ARR_BETYPE_DEF[31] = ARR_BETYPE_DEF[4], ARR_BETYPE_DEF[33] = ARR_BETYPE_DEF[4], ARR_BETYPE_DEF[34] = ARR_BETYPE_DEF[4], ARR_BETYPE_DEF[35] = ARR_BETYPE_DEF[4], ARR_BETYPE_DEF[36] = ARR_BETYPE_DEF[4], ARR_BETYPE_DEF[37] = ARR_BETYPE_DEF[4], ARR_BETYPE_DEF[38] = ARR_BETYPE_DEF[4], ARR_BETYPE_DEF[39] = ARR_BETYPE_DEF[4], ARR_BETYPE_DEF[40] = ARR_BETYPE_DEF[4], ARR_BETYPE_DEF[41] = ARR_BETYPE_DEF[4], ARR_BETYPE_DEF[42] = ARR_BETYPE_DEF[4], ARR_BETYPE_DEF[43] = new Array(1, 2, 3, 20), ARR_BETYPE_DEF[44] = ARR_BETYPE_DEF[4], ARR_BETYPE_DEF[99] = ARR_BETYPE_DEF[4], ARR_BETYPE_DEF[27] = new Array(1, 2, 3, 5, 20), ARR_BETYPE_DEF[154] = new Array("20"), ARR_BETYPE_DEF[161] = new Array(85, 86, 87, 88, 89, 901, 902, 903, 904, 905), ARR_BETYPE_DEF["161d"] = new Array(81, 82, 83, 84, 85, 86, 88), ARR_BETYPE_DEF.CS = new Array(4, 30, 405, 413, 414), ARR_BETYPE_DEF[50] = new Array(1, 2, 3, 5, 501, 502);
var ARR_FIELDS_DEF = new Array;
ARR_FIELDS_DEF[1] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(FIELDS_DEF[1]).concat(ExtFIELDS_DEF[1]).concat(COMMON_DEF[3]).concat(COMMON_DEF[1]).concat(MargeOddsArray("1")), ARR_FIELDS_DEF[2] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(COMMON_DEF[1]).concat(MargeOddsArray("2")).concat(LIVESCORE_DEF[2]), ARR_FIELDS_DEF[3] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(COMMON_DEF[1]).concat(MargeOddsArray("3")).concat(LIVESCORE_DEF[3]), ARR_FIELDS_DEF[26] = ARR_FIELDS_DEF[3], ARR_FIELDS_DEF[32] = ARR_FIELDS_DEF[3], ARR_FIELDS_DEF[10] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(COMMON_DEF[1]).concat(MargeOddsArray("4")), ARR_FIELDS_DEF[7] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(COMMON_DEF[1]).concat(MargeOddsArray("7")).concat(LIVESCORE_DEF[7]), ARR_FIELDS_DEF[4] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(COMMON_DEF[1]).concat(MargeOddsArray("4")).concat(LIVESCORE_DEF[4]), ARR_FIELDS_DEF[5] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(FIELDS_DEF[5]).concat(COMMON_DEF[1]).concat(MargeOddsArray("5")).concat(LIVESCORE_DEF[5]), ARR_FIELDS_DEF[6] = ARR_FIELDS_DEF[10].concat(LIVESCORE_DEF[5]), ARR_FIELDS_DEF[9] = ARR_FIELDS_DEF[6], ARR_FIELDS_DEF[11] = ARR_FIELDS_DEF[10], ARR_FIELDS_DEF[12] = ARR_FIELDS_DEF[10], ARR_FIELDS_DEF[13] = ARR_FIELDS_DEF[10], ARR_FIELDS_DEF[14] = ARR_FIELDS_DEF[10], ARR_FIELDS_DEF[15] = ARR_FIELDS_DEF[10], ARR_FIELDS_DEF[16] = ARR_FIELDS_DEF[10], ARR_FIELDS_DEF[17] = ARR_FIELDS_DEF[10], ARR_FIELDS_DEF[18] = ARR_FIELDS_DEF[10], ARR_FIELDS_DEF[19] = ARR_FIELDS_DEF[10], ARR_FIELDS_DEF[20] = ARR_FIELDS_DEF[10], ARR_FIELDS_DEF[21] = ARR_FIELDS_DEF[10], ARR_FIELDS_DEF[22] = ARR_FIELDS_DEF[10], ARR_FIELDS_DEF[23] = ARR_FIELDS_DEF[10], ARR_FIELDS_DEF[24] = ARR_FIELDS_DEF[10], ARR_FIELDS_DEF[25] = ARR_FIELDS_DEF[10], ARR_FIELDS_DEF[28] = ARR_FIELDS_DEF[10], ARR_FIELDS_DEF[29] = ARR_FIELDS_DEF[10], ARR_FIELDS_DEF[30] = ARR_FIELDS_DEF[10], ARR_FIELDS_DEF[31] = ARR_FIELDS_DEF[10], ARR_FIELDS_DEF[33] = ARR_FIELDS_DEF[10], ARR_FIELDS_DEF[34] = ARR_FIELDS_DEF[10], ARR_FIELDS_DEF[35] = ARR_FIELDS_DEF[10], ARR_FIELDS_DEF[36] = ARR_FIELDS_DEF[10], ARR_FIELDS_DEF[37] = ARR_FIELDS_DEF[10], ARR_FIELDS_DEF[38] = ARR_FIELDS_DEF[10], ARR_FIELDS_DEF[39] = ARR_FIELDS_DEF[10], ARR_FIELDS_DEF[40] = ARR_FIELDS_DEF[10], ARR_FIELDS_DEF[41] = ARR_FIELDS_DEF[10], ARR_FIELDS_DEF[42] = ARR_FIELDS_DEF[10], ARR_FIELDS_DEF[43] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(COMMON_DEF[1]).concat(MargeOddsArray("43")), ARR_FIELDS_DEF[44] = ARR_FIELDS_DEF[10], ARR_FIELDS_DEF[50] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(COMMON_DEF[1]).concat(MargeOddsArray("50")), ARR_FIELDS_DEF[99] = ARR_FIELDS_DEF[10], ARR_FIELDS_DEF[8] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(FIELDS_DEF[8]).concat(COMMON_DEF[1]).concat(MargeOddsArray("8")).concat(LIVESCORE_DEF[8]), ARR_FIELDS_DEF[27] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(COMMON_DEF[1]).concat(MargeOddsArray("27")), ARR_FIELDS_DEF[161] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(FIELDS_DEF[161]).concat(COMMON_DEF[1]).concat(MargeOddsArray("161"));
var ARR_FIELDS_DEF2 = new Array;
ARR_FIELDS_DEF2[1] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(FIELDS_DEF[1]).concat(ExtFIELDS_DEF[1]).concat(COMMON_DEF[2]).concat(MargeOddsArray("1")), ARR_FIELDS_DEF2[2] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(COMMON_DEF[2]).concat(MargeOddsArray("2")).concat(LIVESCORE_DEF[2]), ARR_FIELDS_DEF2[3] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(COMMON_DEF[2]).concat(MargeOddsArray("3")).concat(LIVESCORE_DEF[3]), ARR_FIELDS_DEF2[26] = ARR_FIELDS_DEF2[3], ARR_FIELDS_DEF2[32] = ARR_FIELDS_DEF2[3], ARR_FIELDS_DEF2[10] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(COMMON_DEF[2]).concat(MargeOddsArray("4")), ARR_FIELDS_DEF2[7] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(COMMON_DEF[2]).concat(MargeOddsArray("7")).concat(LIVESCORE_DEF[7]), ARR_FIELDS_DEF2[4] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(COMMON_DEF[2]).concat(MargeOddsArray("4")).concat(LIVESCORE_DEF[4]), ARR_FIELDS_DEF2[5] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(FIELDS_DEF[5]).concat(COMMON_DEF[2]).concat(MargeOddsArray("5")).concat(LIVESCORE_DEF[5]), ARR_FIELDS_DEF2[6] = ARR_FIELDS_DEF2[10].concat(LIVESCORE_DEF[5]), ARR_FIELDS_DEF2[9] = ARR_FIELDS_DEF2[6], ARR_FIELDS_DEF2[11] = ARR_FIELDS_DEF2[10], ARR_FIELDS_DEF2[12] = ARR_FIELDS_DEF2[10], ARR_FIELDS_DEF2[13] = ARR_FIELDS_DEF2[10], ARR_FIELDS_DEF2[14] = ARR_FIELDS_DEF2[10], ARR_FIELDS_DEF2[15] = ARR_FIELDS_DEF2[10], ARR_FIELDS_DEF2[16] = ARR_FIELDS_DEF2[10], ARR_FIELDS_DEF2[17] = ARR_FIELDS_DEF2[10], ARR_FIELDS_DEF2[18] = ARR_FIELDS_DEF2[10], ARR_FIELDS_DEF2[19] = ARR_FIELDS_DEF2[10], ARR_FIELDS_DEF2[20] = ARR_FIELDS_DEF2[10], ARR_FIELDS_DEF2[21] = ARR_FIELDS_DEF2[10], ARR_FIELDS_DEF2[22] = ARR_FIELDS_DEF2[10], ARR_FIELDS_DEF2[23] = ARR_FIELDS_DEF2[10], ARR_FIELDS_DEF2[24] = ARR_FIELDS_DEF2[10], ARR_FIELDS_DEF2[25] = ARR_FIELDS_DEF2[10], ARR_FIELDS_DEF2[28] = ARR_FIELDS_DEF2[10], ARR_FIELDS_DEF2[29] = ARR_FIELDS_DEF2[10], ARR_FIELDS_DEF2[30] = ARR_FIELDS_DEF2[10], ARR_FIELDS_DEF2[31] = ARR_FIELDS_DEF2[10], ARR_FIELDS_DEF2[33] = ARR_FIELDS_DEF2[10], ARR_FIELDS_DEF2[34] = ARR_FIELDS_DEF2[10], ARR_FIELDS_DEF2[35] = ARR_FIELDS_DEF2[10], ARR_FIELDS_DEF2[36] = ARR_FIELDS_DEF2[10], ARR_FIELDS_DEF2[37] = ARR_FIELDS_DEF2[10], ARR_FIELDS_DEF2[38] = ARR_FIELDS_DEF2[10], ARR_FIELDS_DEF2[39] = ARR_FIELDS_DEF2[10], ARR_FIELDS_DEF2[40] = ARR_FIELDS_DEF2[10], ARR_FIELDS_DEF2[41] = ARR_FIELDS_DEF2[10], ARR_FIELDS_DEF2[42] = ARR_FIELDS_DEF2[10], ARR_FIELDS_DEF2[43] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(COMMON_DEF[2]).concat(MargeOddsArray("43")), ARR_FIELDS_DEF2[50] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(COMMON_DEF[2]).concat(MargeOddsArray("50")), ARR_FIELDS_DEF2[99] = ARR_FIELDS_DEF2[10], ARR_FIELDS_DEF2[8] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(FIELDS_DEF[8]).concat(COMMON_DEF[2]).concat(MargeOddsArray("8")).concat(LIVESCORE_DEF[8]), ARR_FIELDS_DEF2[27] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(COMMON_DEF[2]).concat(MargeOddsArray("27")), ARR_FIELDS_DEF2[161] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(FIELDS_DEF[161]).concat(COMMON_DEF[2]).concat(MargeOddsArray("161"));
var ARR_FIELDS_DEF1 = new Array;
ARR_FIELDS_DEF1[1] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(FIELDS_DEF[1]).concat(ExtFIELDS_DEF[1]).concat(COMMON_DEF[3]).concat(MargeOddsArray("1")), ARR_FIELDS_DEF1[2] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(MargeOddsArray("2")).concat(LIVESCORE_DEF[2]), ARR_FIELDS_DEF1[3] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(MargeOddsArray("3")).concat(LIVESCORE_DEF[3]), ARR_FIELDS_DEF1[26] = ARR_FIELDS_DEF1[3], ARR_FIELDS_DEF1[32] = ARR_FIELDS_DEF1[3], ARR_FIELDS_DEF1[10] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(MargeOddsArray("4")), ARR_FIELDS_DEF1[7] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(MargeOddsArray("7")).concat(LIVESCORE_DEF[7]), ARR_FIELDS_DEF1[4] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(MargeOddsArray("4")).concat(LIVESCORE_DEF[4]), ARR_FIELDS_DEF1[5] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(FIELDS_DEF[5]).concat(MargeOddsArray("5")).concat(LIVESCORE_DEF[5]), ARR_FIELDS_DEF1[6] = ARR_FIELDS_DEF1[10].concat(LIVESCORE_DEF[5]), ARR_FIELDS_DEF1[9] = ARR_FIELDS_DEF1[6], ARR_FIELDS_DEF1[11] = ARR_FIELDS_DEF1[10], ARR_FIELDS_DEF1[12] = ARR_FIELDS_DEF1[10], ARR_FIELDS_DEF1[13] = ARR_FIELDS_DEF1[10], ARR_FIELDS_DEF1[14] = ARR_FIELDS_DEF1[10], ARR_FIELDS_DEF1[15] = ARR_FIELDS_DEF1[10], ARR_FIELDS_DEF1[16] = ARR_FIELDS_DEF1[10], ARR_FIELDS_DEF1[17] = ARR_FIELDS_DEF1[10], ARR_FIELDS_DEF1[18] = ARR_FIELDS_DEF1[10], ARR_FIELDS_DEF1[19] = ARR_FIELDS_DEF1[10], ARR_FIELDS_DEF1[20] = ARR_FIELDS_DEF1[10], ARR_FIELDS_DEF1[21] = ARR_FIELDS_DEF1[10], ARR_FIELDS_DEF1[22] = ARR_FIELDS_DEF1[10], ARR_FIELDS_DEF1[23] = ARR_FIELDS_DEF1[10], ARR_FIELDS_DEF1[24] = ARR_FIELDS_DEF1[10], ARR_FIELDS_DEF1[25] = ARR_FIELDS_DEF1[10], ARR_FIELDS_DEF1[28] = ARR_FIELDS_DEF1[10], ARR_FIELDS_DEF1[29] = ARR_FIELDS_DEF1[10], ARR_FIELDS_DEF1[30] = ARR_FIELDS_DEF1[10], ARR_FIELDS_DEF1[31] = ARR_FIELDS_DEF1[10], ARR_FIELDS_DEF1[33] = ARR_FIELDS_DEF1[10], ARR_FIELDS_DEF1[34] = ARR_FIELDS_DEF1[10], ARR_FIELDS_DEF1[35] = ARR_FIELDS_DEF1[10], ARR_FIELDS_DEF1[36] = ARR_FIELDS_DEF1[10], ARR_FIELDS_DEF1[37] = ARR_FIELDS_DEF1[10], ARR_FIELDS_DEF1[38] = ARR_FIELDS_DEF1[10], ARR_FIELDS_DEF1[39] = ARR_FIELDS_DEF1[10], ARR_FIELDS_DEF1[40] = ARR_FIELDS_DEF1[10], ARR_FIELDS_DEF1[41] = ARR_FIELDS_DEF1[10], ARR_FIELDS_DEF1[42] = ARR_FIELDS_DEF1[10], ARR_FIELDS_DEF1[43] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(MargeOddsArray("43")), ARR_FIELDS_DEF1[44] = ARR_FIELDS_DEF1[10], ARR_FIELDS_DEF1[50] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(MargeOddsArray("50")), ARR_FIELDS_DEF1[99] = ARR_FIELDS_DEF1[10], ARR_FIELDS_DEF1[154] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(MargeOddsArray("154")), ARR_FIELDS_DEF1[8] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(FIELDS_DEF[8]).concat(MargeOddsArray("8")).concat(LIVESCORE_DEF[8]), ARR_FIELDS_DEF1[27] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(MargeOddsArray("27")), ARR_FIELDS_DEF1[161] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(FIELDS_DEF[161]).concat(MargeOddsArray("161")), ARR_FIELDS_DEF1["161d"] = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(FIELDS_DEF[161]).concat(MargeOddsArray("161d"));
var FIELDS_DEF_1X2 = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(COMMON_DEF[3]).concat(MultiSportODDS_DEF[5]).concat(MultiSportODDS_DEF[15]),
	FIELDS_DEF_CorrectScore = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(COMMON_DEF[3]).concat(MargeOddsArray("CS")),
	FIELDS_DEF_FGLG = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(COMMON_DEF[3]).concat(MultiSportODDS_DEF[14]).concat(MultiSportODDS_DEF[127]),
	FIELDS_DEF_HTFT = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(COMMON_DEF[3]).concat(MultiSportODDS_DEF[16]),
	FIELDS_DEF_Oe = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(COMMON_DEF[3]).concat(MultiSportODDS_DEF[2]).concat(MultiSportODDS_DEF[12]),
	FIELDS_DEF_Tg = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(COMMON_DEF[3]).concat(MultiSportODDS_DEF[6]).concat(MultiSportODDS_DEF[126]),
	FIELDS_DEF_HTFTOE = COMMON_DEF[0].concat(FIELDS_DEF[0]).concat(COMMON_DEF[3]).concat(MultiSportODDS_DEF[128]),
	FIELDS_DEF_Outright = new Array("MatchId", "MatchCode", "ShowTime", "LeagueId", "LeagueName", "TeamName", "Changed", "Odds", "FavLeague"),
	ARR_TMPLID_DEF = new Array;
ARR_TMPLID_DEF[1] = new Array, ARR_TMPLID_DEF[1][1] = "UnderOver_tmpl_1", ARR_TMPLID_DEF[1][2] = "NBA_tmpl", ARR_TMPLID_DEF[1][3] = ARR_TMPLID_DEF[1][2], ARR_TMPLID_DEF[1][26] = ARR_TMPLID_DEF[1][2], ARR_TMPLID_DEF[1][32] = ARR_TMPLID_DEF[1][2], ARR_TMPLID_DEF[1][4] = "Tennis_tmpl", ARR_TMPLID_DEF[1][5] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][6] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][7] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][8] = "Baseball_tmpl", ARR_TMPLID_DEF[1][9] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][10] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][11] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][12] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][13] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][14] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][15] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][16] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][17] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][18] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][19] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][20] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][21] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][22] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][23] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][24] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][25] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][28] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][29] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][30] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][31] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][33] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][34] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][35] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][36] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][37] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][38] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][39] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][40] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][41] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][42] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][43] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][44] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][50] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][99] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][154] = ARR_TMPLID_DEF[1][4], ARR_TMPLID_DEF[1][27] = "Cricket_tmpl", ARR_TMPLID_DEF[1][161] = "Bingo_tmpl", ARR_TMPLID_DEF[3] = new Array, ARR_TMPLID_DEF[3][1] = "UnderOver_tmpl_3", ARR_TMPLID_DEF[3][2] = "NBA_tmpl", ARR_TMPLID_DEF[3][3] = ARR_TMPLID_DEF[3][2], ARR_TMPLID_DEF[3][26] = ARR_TMPLID_DEF[3][2], ARR_TMPLID_DEF[3][32] = ARR_TMPLID_DEF[3][2], ARR_TMPLID_DEF[3][4] = "Tennis_tmpl", ARR_TMPLID_DEF[3][5] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][6] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][7] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][8] = "Baseball_tmpl", ARR_TMPLID_DEF[3][9] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][10] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][11] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][12] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][13] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][14] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][15] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][16] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][17] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][18] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][19] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][20] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][21] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][22] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][23] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][24] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][25] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][28] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][29] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][30] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][31] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][33] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][34] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][35] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][36] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][37] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][38] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][39] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][40] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][41] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][42] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][43] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][44] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][50] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][99] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][154] = ARR_TMPLID_DEF[3][4], ARR_TMPLID_DEF[3][27] = "Cricket_tmpl", ARR_TMPLID_DEF[3][161] = "Bingo_tmpl", ARR_TMPLID_DEF["1F"] = new Array, ARR_TMPLID_DEF["1F"][1] = "UnderOver_tmpl_1F", ARR_TMPLID_DEF["1F"][2] = "NBA_tmpl", ARR_TMPLID_DEF["1F"][3] = ARR_TMPLID_DEF["1F"][2], ARR_TMPLID_DEF["1F"][26] = ARR_TMPLID_DEF["1F"][2], ARR_TMPLID_DEF["1F"][32] = ARR_TMPLID_DEF["1F"][2], ARR_TMPLID_DEF["1F"][4] = "Tennis_tmpl", ARR_TMPLID_DEF["1F"][5] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][6] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][7] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][8] = "Baseball_tmpl", ARR_TMPLID_DEF["1F"][9] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][10] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][11] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][12] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][13] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][14] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][15] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][16] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][17] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][18] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][19] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][20] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][21] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][22] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][23] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][24] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][25] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][28] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][29] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][30] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][31] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][33] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][34] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][35] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][36] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][37] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][38] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][39] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][40] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][41] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][42] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][43] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][44] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][50] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][99] = ARR_TMPLID_DEF["1F"][4], ARR_TMPLID_DEF["1F"][27] = "Cricket_tmpl", ARR_TMPLID_DEF["1F"][161] = "Bingo_tmpl", ARR_TMPLID_DEF["1H"] = new Array, ARR_TMPLID_DEF["1H"][1] = "UnderOver_tmpl_1H", ARR_TMPLID_DEF["1H"][2] = "NBA_tmpl", ARR_TMPLID_DEF["1H"][3] = ARR_TMPLID_DEF["1H"][2], ARR_TMPLID_DEF["1H"][26] = ARR_TMPLID_DEF["1H"][2], ARR_TMPLID_DEF["1H"][32] = ARR_TMPLID_DEF["1H"][2], ARR_TMPLID_DEF["1H"][4] = "Tennis_tmpl", ARR_TMPLID_DEF["1H"][5] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][6] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][7] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][8] = "Baseball_tmpl", ARR_TMPLID_DEF["1H"][9] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][10] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][11] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][12] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][13] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][14] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][15] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][16] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][17] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][18] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][19] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][20] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][21] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][22] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][23] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][24] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][25] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][28] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][29] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][30] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][31] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][33] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][34] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][35] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][36] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][37] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][38] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][39] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][40] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][41] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][42] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][43] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][44] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][50] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][99] = ARR_TMPLID_DEF["1H"][4], ARR_TMPLID_DEF["1H"][27] = "Cricket_tmpl", ARR_TMPLID_DEF["1H"][161] = "Bingo_tmpl";
var ARR_TMPLURL_DEF = new Array;
ARR_TMPLURL_DEF[1] = new Array, ARR_TMPLURL_DEF[1][1] = "UnderOver_tmpl.aspx?form=1", ARR_TMPLURL_DEF[1][2] = "NBA_tmpl.aspx", ARR_TMPLURL_DEF[1][3] = ARR_TMPLURL_DEF[1][2], ARR_TMPLURL_DEF[1][26] = ARR_TMPLURL_DEF[1][2], ARR_TMPLURL_DEF[1][32] = ARR_TMPLURL_DEF[1][2], ARR_TMPLURL_DEF[1][4] = "Tennis_tmpl.aspx", ARR_TMPLURL_DEF[1][5] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][6] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][7] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][8] = "Baseball_tmpl.aspx", ARR_TMPLURL_DEF[1][9] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][10] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][11] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][12] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][13] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][14] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][15] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][16] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][17] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][18] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][19] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][20] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][21] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][22] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][23] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][24] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][25] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][28] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][29] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][30] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][31] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][33] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][34] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][35] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][36] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][37] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][38] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][39] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][40] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][41] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][42] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][43] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][44] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][50] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][99] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][154] = ARR_TMPLURL_DEF[1][4], ARR_TMPLURL_DEF[1][27] = "Cricket_tmpl.aspx", ARR_TMPLURL_DEF[1][161] = "Bingo_tmpl.aspx", ARR_TMPLURL_DEF[3] = new Array, ARR_TMPLURL_DEF[3][1] = "UnderOver_tmpl.aspx?form=3", ARR_TMPLURL_DEF[3][2] = "NBA_tmpl.aspx", ARR_TMPLURL_DEF[3][3] = ARR_TMPLURL_DEF[3][2], ARR_TMPLURL_DEF[3][26] = ARR_TMPLURL_DEF[3][2], ARR_TMPLURL_DEF[3][32] = ARR_TMPLURL_DEF[3][2], ARR_TMPLURL_DEF[3][4] = "Tennis_tmpl.aspx", ARR_TMPLURL_DEF[3][5] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][6] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][7] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][8] = "Baseball_tmpl.aspx", ARR_TMPLURL_DEF[3][9] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][10] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][11] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][12] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][13] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][14] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][15] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][16] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][17] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][18] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][19] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][20] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][21] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][22] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][23] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][24] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][25] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][28] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][29] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][30] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][31] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][33] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][34] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][35] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][36] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][37] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][38] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][39] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][40] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][41] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][42] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][43] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][44] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][50] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][99] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][154] = ARR_TMPLURL_DEF[3][4], ARR_TMPLURL_DEF[3][27] = "Cricket_tmpl.aspx", ARR_TMPLURL_DEF[3][161] = "Bingo_tmpl.aspx", ARR_TMPLURL_DEF["1F"] = new Array, ARR_TMPLURL_DEF["1F"][1] = "UnderOver_tmpl.aspx?form=1F", ARR_TMPLURL_DEF["1F"][2] = "NBA_tmpl.aspx", ARR_TMPLURL_DEF["1F"][3] = ARR_TMPLURL_DEF["1F"][2], ARR_TMPLURL_DEF["1F"][26] = ARR_TMPLURL_DEF["1F"][2], ARR_TMPLURL_DEF["1F"][32] = ARR_TMPLURL_DEF["1F"][2], ARR_TMPLURL_DEF["1F"][4] = "Tennis_tmpl.aspx", ARR_TMPLURL_DEF["1F"][5] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][6] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][7] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][8] = "Baseball_tmpl.aspx", ARR_TMPLURL_DEF["1F"][9] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][10] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][11] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][12] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][13] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][14] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][15] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][16] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][17] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][18] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][19] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][20] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][21] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][22] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][23] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][24] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][25] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][28] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][29] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][30] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][31] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][33] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][34] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][35] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][36] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][37] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][38] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][39] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][40] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][41] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][42] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][43] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][44] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][50] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][99] = ARR_TMPLURL_DEF["1F"][4], ARR_TMPLURL_DEF["1F"][27] = "Cricket_tmpl.aspx", ARR_TMPLURL_DEF["1F"][161] = "Bingo_tmpl.aspx", ARR_TMPLURL_DEF["1H"] = new Array, ARR_TMPLURL_DEF["1H"][1] = "UnderOver_tmpl.aspx?form=1H", ARR_TMPLURL_DEF["1H"][2] = "NBA_tmpl.aspx", ARR_TMPLURL_DEF["1H"][3] = ARR_TMPLURL_DEF["1H"][2], ARR_TMPLURL_DEF["1H"][26] = ARR_TMPLURL_DEF["1H"][2], ARR_TMPLURL_DEF["1H"][32] = ARR_TMPLURL_DEF["1H"][2], ARR_TMPLURL_DEF["1H"][4] = "Tennis_tmpl.aspx", ARR_TMPLURL_DEF["1H"][5] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][6] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][7] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][8] = "Baseball_tmpl.aspx", ARR_TMPLURL_DEF["1H"][9] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][10] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][11] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][12] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][13] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][14] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][15] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][16] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][17] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][18] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][19] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][20] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][21] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][22] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][23] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][24] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][25] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][28] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][29] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][30] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][31] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][33] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][34] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][35] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][36] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][37] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][38] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][39] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][40] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][41] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][42] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][43] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][44] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][50] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][99] = ARR_TMPLURL_DEF["1H"][4], ARR_TMPLURL_DEF["1H"][27] = "Cricket_tmpl.aspx", ARR_TMPLURL_DEF["1H"][161] = "Bingo_tmpl.aspx";
var ajaxDataObj = null;
try {
	ajaxDataObj = new getDataClass
} catch (e) {
	ajaxDataObj = null
}
var ThreadId = null,
	ThreadList = new Object,
	isIe = window.ActiveXObject ? !0 : !1;
Object.keys || (Object.keys = function(e) {
	if (e !== Object(e)) throw new TypeError("Object.keys called on a non-object");
	var t, n = [];
	for (t in e) Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
	return n
});
var DivLauncherCnt = 0,
	DefDocMouseDown, DefDocMouseUp, DefDocMouseMove;