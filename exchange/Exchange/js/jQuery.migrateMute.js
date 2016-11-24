jQuery.migrateMute === void 0 && (jQuery.migrateMute = !0), function(n, t, i) {
	function r(i) {
		var r = t.console;
		o[i] || (o[i] = !0, n.migrateWarnings.push(i), r && r.warn && !n.migrateMute && (r.warn("JQMIGRATE: " + i), n.migrateTrace && r.trace && r.trace()))
	}
	function e(t, u, f, e) {
		if (Object.defineProperty) try {
			return Object.defineProperty(t, u, {
				configurable: !0,
				enumerable: !0,
				get: function() {
					return r(e), f
				},
				set: function(n) {
					r(e);
					f = n
				}
			}), i
		} catch (o) {}
		n._definePropertyBroken = !0;
		t[u] = f
	}
	var o = {},
		h, c, l;
	n.migrateWarnings = [];
	!n.migrateMute && t.console && t.console.log && t.console.log("JQMIGRATE: Logging is active");
	n.migrateTrace === i && (n.migrateTrace = !0);
	n.migrateReset = function() {
		o = {};
		n.migrateWarnings.length = 0
	};
	"BackCompat" === document.compatMode && r("jQuery is not compatible with Quirks Mode");
	var s = n("<input/>", {
		size: 1
	}).attr("size") && n.attrFn,
		a = n.attr,
		g = n.attrHooks.value && n.attrHooks.value.get ||
	function() {
		return null
	}, nt = n.attrHooks.value && n.attrHooks.value.set ||
	function() {
		return i
	}, tt = /^(?:input|button)$/i, it = /^[238]$/, rt = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, ut = /^(?:checked|selected)$/i;
	e(n, "attrFn", s || {}, "jQuery.attrFn is deprecated");
	n.attr = function(t, u, f, e) {
		var o = u.toLowerCase(),
			h = t && t.nodeType;
		return e && (4 > a.length && r("jQuery.fn.attr( props, pass ) is deprecated"), t && !it.test(h) && (s ? u in s : n.isFunction(n.fn[u]))) ? n(t)[u](f) : ("type" === u && f !== i && tt.test(t.nodeName) && t.parentNode && r("Can't change the 'type' of an input or button in IE 6/7/8"), !n.attrHooks[o] && rt.test(o) && (n.attrHooks[o] = {
			get: function(t, r) {
				var u, f = n.prop(t, r);
				return f === !0 || "boolean" != typeof f && (u = t.getAttributeNode(r)) && u.nodeValue !== !1 ? r.toLowerCase() : i
			},
			set: function(t, i, r) {
				var u;
				return i === !1 ? n.removeAttr(t, r) : (u = n.propFix[r] || r, u in t && (t[u] = !0), t.setAttribute(r, r.toLowerCase())), r
			}
		}, ut.test(o) && r("jQuery.fn.attr('" + o + "') may use property instead of attribute")), a.call(n, t, u, f))
	};
	n.attrHooks.value = {
		get: function(n, t) {
			var i = (n.nodeName || "").toLowerCase();
			return "button" === i ? g.apply(this, arguments) : ("input" !== i && "option" !== i && r("jQuery.fn.attr('value') no longer gets properties"), t in n ? n.value : null)
		},
		set: function(n, t) {
			var u = (n.nodeName || "").toLowerCase();
			return "button" === u ? nt.apply(this, arguments) : ("input" !== u && "option" !== u && r("jQuery.fn.attr('value', val) no longer sets properties"), n.value = t, i)
		}
	};
	var f, u, v = n.fn.init,
		ft = n.parseJSON,
		et = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
	n.fn.init = function(t, i, u) {
		var f;
		return t && "string" == typeof t && !n.isPlainObject(i) && (f = et.exec(n.trim(t))) && f[0] && ("<" !== t.charAt(0) && r("$(html) HTML strings must start with '<' character"), f[3] && r("$(html) HTML text after last tag is ignored"), "#" === f[0].charAt(0) && (r("HTML string cannot start with a '#' character"), n.error("JQMIGRATE: Invalid selector string (XSS)")), i && i.context && (i = i.context), n.parseHTML) ? v.call(this, n.parseHTML(f[2], i, !0), i, u) : v.apply(this, arguments)
	};
	n.fn.init.prototype = n.fn;
	n.parseJSON = function(n) {
		return n || null === n ? ft.apply(this, arguments) : (r("jQuery.parseJSON requires a valid JSON string"), null)
	};
	n.uaMatch = function(n) {
		n = n.toLowerCase();
		var t = /(chrome)[ \/]([\w.]+)/.exec(n) || /(webkit)[ \/]([\w.]+)/.exec(n) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(n) || /(msie) ([\w.]+)/.exec(n) || 0 > n.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n) || [];
		return {
			browser: t[1] || "",
			version: t[2] || "0"
		}
	};
	n.browser || (f = n.uaMatch(navigator.userAgent), u = {}, f.browser && (u[f.browser] = !0, u.version = f.version), u.chrome ? u.webkit = !0 : u.webkit && (u.safari = !0), n.browser = u);
	e(n, "browser", n.browser, "jQuery.browser is deprecated");
	n.sub = function() {
		function t(n, i) {
			return new t.fn.init(n, i)
		}
		n.extend(!0, t, this);
		t.superclass = this;
		t.fn = t.prototype = this();
		t.fn.constructor = t;
		t.sub = this.sub;
		t.fn.init = function(r, u) {
			return u && u instanceof n && !(u instanceof t) && (u = t(u)), n.fn.init.call(this, r, u, i)
		};
		t.fn.init.prototype = t.fn;
		var i = t(document);
		return r("jQuery.sub() is deprecated"), t
	};
	n.ajaxSetup({
		converters: {
			"text json": n.parseJSON
		}
	});
	h = n.fn.data;
	n.fn.data = function(t) {
		var f, u, e = this[0];
		return !e || "events" !== t || 1 !== arguments.length || (f = n.data(e, t), u = n._data(e, t), f !== i && f !== u || u === i) ? h.apply(this, arguments) : (r("Use of jQuery.fn.data('events') is deprecated"), u)
	};
	c = /\/(java|ecma)script/i;
	l = n.fn.andSelf || n.fn.addBack;
	n.fn.andSelf = function() {
		return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), l.apply(this, arguments)
	};
	n.clean || (n.clean = function(t, u, f, e) {
		u = u || document;
		u = !u.nodeType && u[0] || u;
		u = u.ownerDocument || u;
		r("jQuery.clean() is deprecated");
		var s, o, l, a, h = [];
		if (n.merge(h, n.buildFragment(t, u).childNodes), f) for (l = function(n) {
			return !n.type || c.test(n.type) ? e ? e.push(n.parentNode ? n.parentNode.removeChild(n) : n) : f.appendChild(n) : i
		}, s = 0; null != (o = h[s]); s++) n.nodeName(o, "script") && l(o) || (f.appendChild(o), o.getElementsByTagName !== i && (a = n.grep(n.merge([], o.getElementsByTagName("script")), l), h.splice.apply(h, [s + 1, 0].concat(a)), s += a.length));
		return h
	});
	var ot = n.event.add,
		st = n.event.remove,
		ht = n.event.trigger,
		ct = n.fn.toggle,
		y = n.fn.live,
		p = n.fn.die,
		w = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
		b = RegExp("\\b(?:" + w + ")\\b"),
		k = /(?:^|\s)hover(\.\S+|)\b/,
		d = function(t) {
			return "string" != typeof t || n.event.special.hover ? t : (k.test(t) && r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(k, "mouseenter$1 mouseleave$1"))
		};
	n.event.props && "attrChange" !== n.event.props[0] && n.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement");
	n.event.dispatch && e(n.event, "handle", n.event.dispatch, "jQuery.event.handle is undocumented and deprecated");
	n.event.add = function(n, t, i, u, f) {
		n !== document && b.test(t) && r("AJAX events should be attached to document: " + t);
		ot.call(this, n, d(t || ""), i, u, f)
	};
	n.event.remove = function(n, t, i, r, u) {
		st.call(this, n, d(t) || "", i, r, u)
	};
	n.fn.error = function() {
		var n = Array.prototype.slice.call(arguments, 0);
		return r("jQuery.fn.error() is deprecated"), n.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, n) : (this.triggerHandler.apply(this, n), this)
	};
	n.fn.toggle = function(t, i) {
		if (!n.isFunction(t) || !n.isFunction(i)) return ct.apply(this, arguments);
		r("jQuery.fn.toggle(handler, handler...) is deprecated");
		var u = arguments,
			e = t.guid || n.guid++,
			f = 0,
			o = function(i) {
				var r = (n._data(this, "lastToggle" + t.guid) || 0) % f;
				return n._data(this, "lastToggle" + t.guid, r + 1), i.preventDefault(), u[r].apply(this, arguments) || !1
			};
		for (o.guid = e; u.length > f;) u[f++].guid = e;
		return this.click(o)
	};
	n.fn.live = function(t, i, u) {
		return r("jQuery.fn.live() is deprecated"), y ? y.apply(this, arguments) : (n(this.context).on(t, this.selector, i, u), this)
	};
	n.fn.die = function(t, i) {
		return r("jQuery.fn.die() is deprecated"), p ? p.apply(this, arguments) : (n(this.context).off(t, this.selector || "**", i), this)
	};
	n.event.trigger = function(n, t, i, u) {
		return i || b.test(n) || r("Global events are undocumented and deprecated"), ht.call(this, n, t, i || document, u)
	};
	n.each(w.split("|"), function(t, i) {
		n.event.special[i] = {
			setup: function() {
				var t = this;
				return t !== document && (n.event.add(document, i + "." + n.guid, function() {
					n.event.trigger(i, null, t, !0)
				}), n._data(this, i, n.guid++)), !1
			},
			teardown: function() {
				return this !== document && n.event.remove(document, i + "." + n._data(this, i)), !1
			}
		}
	})
}(jQuery, window), function(n, t) {
	function i(t, i) {
		var u, f, e, o = t.nodeName.toLowerCase();
		return "area" === o ? (u = t.parentNode, f = u.name, !t.href || !f || u.nodeName.toLowerCase() !== "map" ? !1 : (e = n("img[usemap=#" + f + "]")[0], !! e && r(e))) : (/input|select|textarea|button|object/.test(o) ? !t.disabled : "a" === o ? t.href || i : i) && r(t)
	}
	function r(t) {
		return n.expr.filters.visible(t) && !n(t).parents().addBack().filter(function() {
			return n.css(this, "visibility") === "hidden"
		}).length
	}
	var u = 0,
		f = /^ui-id-\d+$/;
	(n.ui = n.ui || {}, n.ui.version) || (n.extend(n.ui, {
		version: "1.10.0",
		keyCode: {
			BACKSPACE: 8,
			COMMA: 188,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			LEFT: 37,
			NUMPAD_ADD: 107,
			NUMPAD_DECIMAL: 110,
			NUMPAD_DIVIDE: 111,
			NUMPAD_ENTER: 108,
			NUMPAD_MULTIPLY: 106,
			NUMPAD_SUBTRACT: 109,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		}
	}), n.fn.extend({
		_focus: n.fn.focus,
		focus: function(t, i) {
			return typeof t == "number" ? this.each(function() {
				var r = this;
				setTimeout(function() {
					n(r).focus();
					i && i.call(r)
				}, t)
			}) : this._focus.apply(this, arguments)
		},
		scrollParent: function() {
			var t;
			return t = n.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
				return /(relative|absolute|fixed)/.test(n.css(this, "position")) && /(auto|scroll)/.test(n.css(this, "overflow") + n.css(this, "overflow-y") + n.css(this, "overflow-x"))
			}).eq(0) : this.parents().filter(function() {
				return /(auto|scroll)/.test(n.css(this, "overflow") + n.css(this, "overflow-y") + n.css(this, "overflow-x"))
			}).eq(0), /fixed/.test(this.css("position")) || !t.length ? n(document) : t
		},
		zIndex: function(i) {
			if (i !== t) return this.css("zIndex", i);
			if (this.length) for (var r = n(this[0]), u, f; r.length && r[0] !== document;) {
				if (u = r.css("position"), (u === "absolute" || u === "relative" || u === "fixed") && (f = parseInt(r.css("zIndex"), 10), !isNaN(f) && f !== 0)) return f;
				r = r.parent()
			}
			return 0
		},
		uniqueId: function() {
			return this.each(function() {
				this.id || (this.id = "ui-id-" + ++u)
			})
		},
		removeUniqueId: function() {
			return this.each(function() {
				f.test(this.id) && n(this).removeAttr("id")
			})
		}
	}), n.extend(n.expr[":"], {
		data: n.expr.createPseudo ? n.expr.createPseudo(function(t) {
			return function(i) {
				return !!n.data(i, t)
			}
		}) : function(t, i, r) {
			return !!n.data(t, r[3])
		},
		focusable: function(t) {
			return i(t, !isNaN(n.attr(t, "tabindex")))
		},
		tabbable: function(t) {
			var r = n.attr(t, "tabindex"),
				u = isNaN(r);
			return (u || r >= 0) && i(t, !u)
		}
	}), n("<a>").outerWidth(1).jquery || n.each(["Width", "Height"], function(i, r) {
		function u(t, i, r, u) {
			return n.each(o, function() {
				i -= parseFloat(n.css(t, "padding" + this)) || 0;
				r && (i -= parseFloat(n.css(t, "border" + this + "Width")) || 0);
				u && (i -= parseFloat(n.css(t, "margin" + this)) || 0)
			}), i
		}
		var o = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
			f = r.toLowerCase(),
			e = {
				innerWidth: n.fn.innerWidth,
				innerHeight: n.fn.innerHeight,
				outerWidth: n.fn.outerWidth,
				outerHeight: n.fn.outerHeight
			};
		n.fn["inner" + r] = function(i) {
			return i === t ? e["inner" + r].call(this) : this.each(function() {
				n(this).css(f, u(this, i) + "px")
			})
		};
		n.fn["outer" + r] = function(t, i) {
			return typeof t != "number" ? e["outer" + r].call(this, t) : this.each(function() {
				n(this).css(f, u(this, t, !0, i) + "px")
			})
		}
	}), n.fn.addBack || (n.fn.addBack = function(n) {
		return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
	}), n("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (n.fn.removeData = function(t) {
		return function(i) {
			return arguments.length ? t.call(this, n.camelCase(i)) : t.call(this)
		}
	}(n.fn.removeData)), n.ui.ie = !! /msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), n.support.selectstart = "onselectstart" in document.createElement("div"), n.fn.extend({
		disableSelection: function() {
			return this.bind((n.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(n) {
				n.preventDefault()
			})
		},
		enableSelection: function() {
			return this.unbind(".ui-disableSelection")
		}
	}), n.extend(n.ui, {
		plugin: {
			add: function(t, i, r) {
				var u, f = n.ui[t].prototype;
				for (u in r) f.plugins[u] = f.plugins[u] || [], f.plugins[u].push([i, r[u]])
			},
			call: function(n, t, i) {
				var r, u = n.plugins[t];
				if (u && n.element[0].parentNode && n.element[0].parentNode.nodeType !== 11) for (r = 0; r < u.length; r++) n.options[u[r][0]] && u[r][1].apply(n.element, i)
			}
		},
		hasScroll: function(t, i) {
			if (n(t).css("overflow") === "hidden") return !1;
			var r = i && i === "left" ? "scrollLeft" : "scrollTop",
				u = !1;
			return t[r] > 0 ? !0 : (t[r] = 1, u = t[r] > 0, t[r] = 0, u)
		}
	}))
}(jQuery), function(n, t) {
	var r = 0,
		i = Array.prototype.slice,
		u = n.cleanData;
	n.cleanData = function(t) {
		for (var i = 0, r;
		(r = t[i]) != null; i++) try {
			n(r).triggerHandler("remove")
		} catch (f) {}
		u(t)
	};
	n.widget = function(t, i, r) {
		var s, f, u, o, h = {},
			e = t.split(".")[0];
		t = t.split(".")[1];
		s = e + "-" + t;
		r || (r = i, i = n.Widget);
		n.expr[":"][s.toLowerCase()] = function(t) {
			return !!n.data(t, s)
		};
		n[e] = n[e] || {};
		f = n[e][t];
		u = n[e][t] = function(n, t) {
			if (!this._createWidget) return new u(n, t);
			arguments.length && this._createWidget(n, t)
		};
		n.extend(u, f, {
			version: r.version,
			_proto: n.extend({}, r),
			_childConstructors: []
		});
		o = new i;
		o.options = n.widget.extend({}, o.options);
		n.each(r, function(t, r) {
			if (!n.isFunction(r)) {
				h[t] = r;
				return
			}
			h[t] = function() {
				var n = function() {
						return i.prototype[t].apply(this, arguments)
					},
					u = function(n) {
						return i.prototype[t].apply(this, n)
					};
				return function() {
					var i = this._super,
						f = this._superApply,
						t;
					return this._super = n, this._superApply = u, t = r.apply(this, arguments), this._super = i, this._superApply = f, t
				}
			}()
		});
		u.prototype = n.widget.extend(o, {
			widgetEventPrefix: f ? o.widgetEventPrefix : t
		}, h, {
			constructor: u,
			namespace: e,
			widgetName: t,
			widgetFullName: s
		});
		f ? (n.each(f._childConstructors, function(t, i) {
			var r = i.prototype;
			n.widget(r.namespace + "." + r.widgetName, u, i._proto)
		}), delete f._childConstructors) : i._childConstructors.push(u);
		n.widget.bridge(t, u)
	};
	n.widget.extend = function(r) {
		for (var o = i.call(arguments, 1), e = 0, s = o.length, u, f; e < s; e++) for (u in o[e]) f = o[e][u], o[e].hasOwnProperty(u) && f !== t && (r[u] = n.isPlainObject(f) ? n.isPlainObject(r[u]) ? n.widget.extend({}, r[u], f) : n.widget.extend({}, f) : f);
		return r
	};
	n.widget.bridge = function(r, u) {
		var f = u.prototype.widgetFullName || r;
		n.fn[r] = function(e) {
			var h = typeof e == "string",
				o = i.call(arguments, 1),
				s = this;
			return e = !h && o.length ? n.widget.extend.apply(null, [e].concat(o)) : e, h ? this.each(function() {
				var i, u = n.data(this, f);
				return u ? !n.isFunction(u[e]) || e.charAt(0) === "_" ? n.error("no such method '" + e + "' for " + r + " widget instance") : (i = u[e].apply(u, o), i !== u && i !== t ? (s = i && i.jquery ? s.pushStack(i.get()) : i, !1) : void 0) : n.error("cannot call methods on " + r + " prior to initialization; attempted to call method '" + e + "'")
			}) : this.each(function() {
				var t = n.data(this, f);
				t ? t.option(e || {})._init() : n.data(this, f, new u(e, this))
			}), s
		}
	};
	n.Widget = function() {};
	n.Widget._childConstructors = [];
	n.Widget.prototype = {
		widgetName: "widget",
		widgetEventPrefix: "",
		defaultElement: "<div>",
		options: {
			disabled: !1,
			create: null
		},
		_createWidget: function(t, i) {
			i = n(i || this.defaultElement || this)[0];
			this.element = n(i);
			this.uuid = r++;
			this.eventNamespace = "." + this.widgetName + this.uuid;
			this.options = n.widget.extend({}, this.options, this._getCreateOptions(), t);
			this.bindings = n();
			this.hoverable = n();
			this.focusable = n();
			i !== this && (n.data(i, this.widgetFullName, this), this._on(!0, this.element, {
				remove: function(n) {
					n.target === i && this.destroy()
				}
			}), this.document = n(i.style ? i.ownerDocument : i.document || i), this.window = n(this.document[0].defaultView || this.document[0].parentWindow));
			this._create();
			this._trigger("create", null, this._getCreateEventData());
			this._init()
		},
		_getCreateOptions: n.noop,
		_getCreateEventData: n.noop,
		_create: n.noop,
		_init: n.noop,
		destroy: function() {
			this._destroy();
			this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(n.camelCase(this.widgetFullName));
			this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
			this.bindings.unbind(this.eventNamespace);
			this.hoverable.removeClass("ui-state-hover");
			this.focusable.removeClass("ui-state-focus")
		},
		_destroy: n.noop,
		widget: function() {
			return this.element
		},
		option: function(i, r) {
			var o = i,
				u, f, e;
			if (arguments.length === 0) return n.widget.extend({}, this.options);
			if (typeof i == "string") if (o = {}, u = i.split("."), i = u.shift(), u.length) {
				for (f = o[i] = n.widget.extend({}, this.options[i]), e = 0; e < u.length - 1; e++) f[u[e]] = f[u[e]] || {}, f = f[u[e]];
				if (i = u.pop(), r === t) return f[i] === t ? null : f[i];
				f[i] = r
			} else {
				if (r === t) return this.options[i] === t ? null : this.options[i];
				o[i] = r
			}
			return this._setOptions(o), this
		},
		_setOptions: function(n) {
			var t;
			for (t in n) this._setOption(t, n[t]);
			return this
		},
		_setOption: function(n, t) {
			return this.options[n] = t, n === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !! t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
		},
		enable: function() {
			return this._setOption("disabled", !1)
		},
		disable: function() {
			return this._setOption("disabled", !0)
		},
		_on: function(t, i, r) {
			var f, u = this;
			typeof t != "boolean" && (r = i, i = t, t = !1);
			r ? (i = f = n(i), this.bindings = this.bindings.add(i)) : (r = i, i = this.element, f = this.widget());
			n.each(r, function(r, e) {
				function o() {
					if (t || u.options.disabled !== !0 && !n(this).hasClass("ui-state-disabled")) return (typeof e == "string" ? u[e] : e).apply(u, arguments)
				}
				typeof e != "string" && (o.guid = e.guid = e.guid || o.guid || n.guid++);
				var s = r.match(/^(\w+)\s*(.*)$/),
					h = s[1] + u.eventNamespace,
					c = s[2];
				c ? f.delegate(c, h, o) : i.bind(h, o)
			})
		},
		_off: function(n, t) {
			t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
			n.unbind(t).undelegate(t)
		},
		_delay: function(n, t) {
			function r() {
				return (typeof n == "string" ? i[n] : n).apply(i, arguments)
			}
			var i = this;
			return setTimeout(r, t || 0)
		},
		_hoverable: function(t) {
			this.hoverable = this.hoverable.add(t);
			this._on(t, {
				mouseenter: function(t) {
					n(t.currentTarget).addClass("ui-state-hover")
				},
				mouseleave: function(t) {
					n(t.currentTarget).removeClass("ui-state-hover")
				}
			})
		},
		_focusable: function(t) {
			this.focusable = this.focusable.add(t);
			this._on(t, {
				focusin: function(t) {
					n(t.currentTarget).addClass("ui-state-focus")
				},
				focusout: function(t) {
					n(t.currentTarget).removeClass("ui-state-focus")
				}
			})
		},
		_trigger: function(t, i, r) {
			var u, f, e = this.options[t];
			if (r = r || {}, i = n.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], f = i.originalEvent, f) for (u in f) u in i || (i[u] = f[u]);
			return this.element.trigger(i, r), !(n.isFunction(e) && e.apply(this.element[0], [i].concat(r)) === !1 || i.isDefaultPrevented())
		}
	};
	n.each({
		show: "fadeIn",
		hide: "fadeOut"
	}, function(t, i) {
		n.Widget.prototype["_" + t] = function(r, u, f) {
			typeof u == "string" && (u = {
				effect: u
			});
			var o, e = u ? u === !0 || typeof u == "number" ? i : u.effect || i : t;
			u = u || {};
			typeof u == "number" && (u = {
				duration: u
			});
			o = !n.isEmptyObject(u);
			u.complete = f;
			u.delay && r.delay(u.delay);
			o && n.effects && n.effects.effect[e] ? r[t](u) : e !== t && r[e] ? r[e](u.duration, u.easing, f) : r.queue(function(i) {
				n(this)[t]();
				f && f.call(r[0]);
				i()
			})
		}
	})
}(jQuery), function(n) {
	var t = !1;
	n(document).mouseup(function() {
		t = !1
	});
	n.widget("ui.mouse", {
		version: "1.10.0",
		options: {
			cancel: "input,textarea,button,select,option",
			distance: 1,
			delay: 0
		},
		_mouseInit: function() {
			var t = this;
			this.element.bind("mousedown." + this.widgetName, function(n) {
				return t._mouseDown(n)
			}).bind("click." + this.widgetName, function(i) {
				if (!0 === n.data(i.target, t.widgetName + ".preventClickEvent")) return n.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1
			});
			this.started = !1
		},
		_mouseDestroy: function() {
			this.element.unbind("." + this.widgetName);
			this._mouseMoveDelegate && n(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
		},
		_mouseDown: function(i) {
			if (!t) {
				this._mouseStarted && this._mouseUp(i);
				this._mouseDownEvent = i;
				var r = this,
					u = i.which === 1,
					f = typeof this.options.cancel == "string" && i.target.nodeName ? n(i.target).closest(this.options.cancel).length : !1;
				return !u || f || !this._mouseCapture(i) ? !0 : (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
					r.mouseDelayMet = !0
				}, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted)) ? (i.preventDefault(), !0) : (!0 === n.data(i.target, this.widgetName + ".preventClickEvent") && n.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(n) {
					return r._mouseMove(n)
				}, this._mouseUpDelegate = function(n) {
					return r._mouseUp(n)
				}, n(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), t = !0, !0)
			}
		},
		_mouseMove: function(t) {
			return n.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
		},
		_mouseUp: function(t) {
			return n(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && n.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
		},
		_mouseDistanceMet: function(n) {
			return Math.max(Math.abs(this._mouseDownEvent.pageX - n.pageX), Math.abs(this._mouseDownEvent.pageY - n.pageY)) >= this.options.distance
		},
		_mouseDelayMet: function() {
			return this.mouseDelayMet
		},
		_mouseStart: function() {},
		_mouseDrag: function() {},
		_mouseStop: function() {},
		_mouseCapture: function() {
			return !0
		}
	})
}(jQuery), function(n, t) {
	function e(n, t, i) {
		return [parseInt(n[0], 10) * (a.test(n[0]) ? t / 100 : 1), parseInt(n[1], 10) * (a.test(n[1]) ? i / 100 : 1)]
	}
	function r(t, i) {
		return parseInt(n.css(t, i), 10) || 0
	}
	function v(t) {
		var i = t[0];
		return i.nodeType === 9 ? {
			width: t.width(),
			height: t.height(),
			offset: {
				top: 0,
				left: 0
			}
		} : n.isWindow(i) ? {
			width: t.width(),
			height: t.height(),
			offset: {
				top: t.scrollTop(),
				left: t.scrollLeft()
			}
		} : i.preventDefault ? {
			width: 0,
			height: 0,
			offset: {
				top: i.pageY,
				left: i.pageX
			}
		} : {
			width: t.outerWidth(),
			height: t.outerHeight(),
			offset: t.offset()
		}
	}
	n.ui = n.ui || {};
	var f, u = Math.max,
		i = Math.abs,
		o = Math.round,
		s = /left|center|right/,
		h = /top|center|bottom/,
		c = /[\+\-]\d+%?/,
		l = /^\w+/,
		a = /%$/,
		y = n.fn.position;
	n.position = {
		scrollbarWidth: function() {
			if (f !== t) return f;
			var u, r, i = n("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'><\/div><\/div>"),
				e = i.children()[0];
			return n("body").append(i), u = e.offsetWidth, i.css("overflow", "scroll"), r = e.offsetWidth, u === r && (r = i[0].clientWidth), i.remove(), f = u - r
		},
		getScrollInfo: function(t) {
			var i = t.isWindow ? "" : t.element.css("overflow-x"),
				r = t.isWindow ? "" : t.element.css("overflow-y"),
				u = i === "scroll" || i === "auto" && t.width < t.element[0].scrollWidth,
				f = r === "scroll" || r === "auto" && t.height < t.element[0].scrollHeight;
			return {
				width: u ? n.position.scrollbarWidth() : 0,
				height: f ? n.position.scrollbarWidth() : 0
			}
		},
		getWithinInfo: function(t) {
			var i = n(t || window),
				r = n.isWindow(i[0]);
			return {
				element: i,
				isWindow: r,
				offset: i.offset() || {
					left: 0,
					top: 0
				},
				scrollLeft: i.scrollLeft(),
				scrollTop: i.scrollTop(),
				width: r ? i.width() : i.outerWidth(),
				height: r ? i.height() : i.outerHeight()
			}
		}
	};
	n.fn.position = function(t) {
		if (!t || !t.of) return y.apply(this, arguments);
		t = n.extend({}, t);
		var b, f, a, w, p, d, g = n(t.of),
			tt = n.position.getWithinInfo(t.within),
			it = n.position.getScrollInfo(tt),
			k = (t.collision || "flip").split(" "),
			nt = {};
		return d = v(g), g[0].preventDefault && (t.at = "left top"), f = d.width, a = d.height, w = d.offset, p = n.extend({}, w), n.each(["my", "at"], function() {
			var n = (t[this] || "").split(" "),
				i, r;
			n.length === 1 && (n = s.test(n[0]) ? n.concat(["center"]) : h.test(n[0]) ? ["center"].concat(n) : ["center", "center"]);
			n[0] = s.test(n[0]) ? n[0] : "center";
			n[1] = h.test(n[1]) ? n[1] : "center";
			i = c.exec(n[0]);
			r = c.exec(n[1]);
			nt[this] = [i ? i[0] : 0, r ? r[0] : 0];
			t[this] = [l.exec(n[0])[0], l.exec(n[1])[0]]
		}), k.length === 1 && (k[1] = k[0]), t.at[0] === "right" ? p.left += f : t.at[0] === "center" && (p.left += f / 2), t.at[1] === "bottom" ? p.top += a : t.at[1] === "center" && (p.top += a / 2), b = e(nt.at, f, a), p.left += b[0], p.top += b[1], this.each(function() {
			var y, d, h = n(this),
				c = h.outerWidth(),
				l = h.outerHeight(),
				rt = r(this, "marginLeft"),
				ut = r(this, "marginTop"),
				ft = c + rt + r(this, "marginRight") + it.width,
				et = l + ut + r(this, "marginBottom") + it.height,
				s = n.extend({}, p),
				v = e(nt.my, h.outerWidth(), h.outerHeight());
			t.my[0] === "right" ? s.left -= c : t.my[0] === "center" && (s.left -= c / 2);
			t.my[1] === "bottom" ? s.top -= l : t.my[1] === "center" && (s.top -= l / 2);
			s.left += v[0];
			s.top += v[1];
			n.support.offsetFractions || (s.left = o(s.left), s.top = o(s.top));
			y = {
				marginLeft: rt,
				marginTop: ut
			};
			n.each(["left", "top"], function(i, r) {
				n.ui.position[k[i]] && n.ui.position[k[i]][r](s, {
					targetWidth: f,
					targetHeight: a,
					elemWidth: c,
					elemHeight: l,
					collisionPosition: y,
					collisionWidth: ft,
					collisionHeight: et,
					offset: [b[0] + v[0], b[1] + v[1]],
					my: t.my,
					at: t.at,
					within: tt,
					elem: h
				})
			});
			t.using && (d = function(n) {
				var r = w.left - s.left,
					v = r + f - c,
					e = w.top - s.top,
					y = e + a - l,
					o = {
						target: {
							element: g,
							left: w.left,
							top: w.top,
							width: f,
							height: a
						},
						element: {
							element: h,
							left: s.left,
							top: s.top,
							width: c,
							height: l
						},
						horizontal: v < 0 ? "left" : r > 0 ? "right" : "center",
						vertical: y < 0 ? "top" : e > 0 ? "bottom" : "middle"
					};
				f < c && i(r + v) < f && (o.horizontal = "center");
				a < l && i(e + y) < a && (o.vertical = "middle");
				o.important = u(i(r), i(v)) > u(i(e), i(y)) ? "horizontal" : "vertical";
				t.using.call(this, n, o)
			});
			h.offset(n.extend(s, {
				using: d
			}))
		})
	};
	n.ui.position = {
		fit: {
			left: function(n, t) {
				var e = t.within,
					r = e.isWindow ? e.scrollLeft : e.offset.left,
					o = e.width,
					s = n.left - t.collisionPosition.marginLeft,
					i = r - s,
					f = s + t.collisionWidth - o - r,
					h;
				t.collisionWidth > o ? i > 0 && f <= 0 ? (h = n.left + i + t.collisionWidth - o - r, n.left += i - h) : n.left = f > 0 && i <= 0 ? r : i > f ? r + o - t.collisionWidth : r : i > 0 ? n.left += i : f > 0 ? n.left -= f : n.left = u(n.left - s, n.left)
			},
			top: function(n, t) {
				var o = t.within,
					r = o.isWindow ? o.scrollTop : o.offset.top,
					e = t.within.height,
					s = n.top - t.collisionPosition.marginTop,
					i = r - s,
					f = s + t.collisionHeight - e - r,
					h;
				t.collisionHeight > e ? i > 0 && f <= 0 ? (h = n.top + i + t.collisionHeight - e - r, n.top += i - h) : n.top = f > 0 && i <= 0 ? r : i > f ? r + e - t.collisionHeight : r : i > 0 ? n.top += i : f > 0 ? n.top -= f : n.top = u(n.top - s, n.top)
			}
		},
		flip: {
			left: function(n, t) {
				var r = t.within,
					y = r.offset.left + r.scrollLeft,
					c = r.width,
					o = r.isWindow ? r.scrollLeft : r.offset.left,
					l = n.left - t.collisionPosition.marginLeft,
					a = l - o,
					v = l + t.collisionWidth - c - o,
					u = t.my[0] === "left" ? -t.elemWidth : t.my[0] === "right" ? t.elemWidth : 0,
					f = t.at[0] === "left" ? t.targetWidth : t.at[0] === "right" ? -t.targetWidth : 0,
					e = -2 * t.offset[0],
					s, h;
				a < 0 ? (s = n.left + u + f + e + t.collisionWidth - c - y, (s < 0 || s < i(a)) && (n.left += u + f + e)) : v > 0 && (h = n.left - t.collisionPosition.marginLeft + u + f + e - o, (h > 0 || i(h) < v) && (n.left += u + f + e))
			},
			top: function(n, t) {
				var r = t.within,
					y = r.offset.top + r.scrollTop,
					a = r.height,
					o = r.isWindow ? r.scrollTop : r.offset.top,
					v = n.top - t.collisionPosition.marginTop,
					s = v - o,
					h = v + t.collisionHeight - a - o,
					p = t.my[1] === "top",
					u = p ? -t.elemHeight : t.my[1] === "bottom" ? t.elemHeight : 0,
					f = t.at[1] === "top" ? t.targetHeight : t.at[1] === "bottom" ? -t.targetHeight : 0,
					e = -2 * t.offset[1],
					c, l;
				s < 0 ? (l = n.top + u + f + e + t.collisionHeight - a - y, n.top + u + f + e > s && (l < 0 || l < i(s)) && (n.top += u + f + e)) : h > 0 && (c = n.top - t.collisionPosition.marginTop + u + f + e - o, n.top + u + f + e > h && (c > 0 || i(c) < h) && (n.top += u + f + e))
			}
		},
		flipfit: {
			left: function() {
				n.ui.position.flip.left.apply(this, arguments);
				n.ui.position.fit.left.apply(this, arguments)
			},
			top: function() {
				n.ui.position.flip.top.apply(this, arguments);
				n.ui.position.fit.top.apply(this, arguments)
			}
		}
	}, function() {
		var t, i, r, u, f, e = document.getElementsByTagName("body")[0],
			o = document.createElement("div");
		t = document.createElement(e ? "div" : "body");
		r = {
			visibility: "hidden",
			width: 0,
			height: 0,
			border: 0,
			margin: 0,
			background: "none"
		};
		e && n.extend(r, {
			position: "absolute",
			left: "-1000px",
			top: "-1000px"
		});
		for (f in r) t.style[f] = r[f];
		t.appendChild(o);
		i = e || document.documentElement;
		i.insertBefore(t, i.firstChild);
		o.style.cssText = "position: absolute; left: 10.7432222px;";
		u = n(o).offset().left;
		n.support.offsetFractions = u > 10 && u < 11;
		t.innerHTML = "";
		i.removeChild(t)
	}()
}(jQuery), function(n) {
	var r = 0,
		t = {},
		i = {};
	t.height = t.paddingTop = t.paddingBottom = t.borderTopWidth = t.borderBottomWidth = "hide";
	i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "show";
	n.widget("ui.accordion", {
		version: "1.10.0",
		options: {
			active: 0,
			animate: {},
			collapsible: !1,
			event: "click",
			header: "> li > :first-child,> :not(li):even",
			heightStyle: "auto",
			icons: {
				activeHeader: "ui-icon-triangle-1-s",
				header: "ui-icon-triangle-1-e"
			},
			activate: null,
			beforeActivate: null
		},
		_create: function() {
			var t = this.options;
			this.prevShow = this.prevHide = n();
			this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist");
			!t.collapsible && (t.active === !1 || t.active == null) && (t.active = 0);
			this._processPanels();
			t.active < 0 && (t.active += this.headers.length);
			this._refresh()
		},
		_getCreateEventData: function() {
			return {
				header: this.active,
				content: this.active.length ? this.active.next() : n()
			}
		},
		_createIcons: function() {
			var t = this.options.icons;
			t && (n("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
		},
		_destroyIcons: function() {
			this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
		},
		_destroy: function() {
			var n;
			this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
			this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
				/^ui-accordion/.test(this.id) && this.removeAttribute("id")
			});
			this._destroyIcons();
			n = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
				/^ui-accordion/.test(this.id) && this.removeAttribute("id")
			});
			this.options.heightStyle !== "content" && n.css("height", "")
		},
		_setOption: function(n, t) {
			if (n === "active") {
				this._activate(t);
				return
			}
			n === "event" && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t));
			this._super(n, t);
			n === "collapsible" && !t && this.options.active === !1 && this._activate(0);
			n === "icons" && (this._destroyIcons(), t && this._createIcons());
			n === "disabled" && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !! t)
		},
		_keydown: function(t) {
			if (!t.altKey && !t.ctrlKey) {
				var i = n.ui.keyCode,
					u = this.headers.length,
					f = this.headers.index(t.target),
					r = !1;
				switch (t.keyCode) {
				case i.RIGHT:
				case i.DOWN:
					r = this.headers[(f + 1) % u];
					break;
				case i.LEFT:
				case i.UP:
					r = this.headers[(f - 1 + u) % u];
					break;
				case i.SPACE:
				case i.ENTER:
					this._eventHandler(t);
					break;
				case i.HOME:
					r = this.headers[0];
					break;
				case i.END:
					r = this.headers[u - 1]
				}
				r && (n(t.target).attr("tabIndex", -1), n(r).attr("tabIndex", 0), r.focus(), t.preventDefault())
			}
		},
		_panelKeyDown: function(t) {
			t.keyCode === n.ui.keyCode.UP && t.ctrlKey && n(t.currentTarget).prev().focus()
		},
		refresh: function() {
			var t = this.options;
			this._processPanels();
			(t.active !== !1 || t.collapsible !== !0) && this.headers.length || (t.active = !1, this.active = n());
			t.active === !1 ? this._activate(0) : this.active.length && !n.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = n()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active);
			this._destroyIcons();
			this._refresh()
		},
		_processPanels: function() {
			this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all");
			this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
		},
		_refresh: function() {
			var t, i = this.options,
				u = i.heightStyle,
				e = this.element.parent(),
				f = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++r);
			this.active = this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top");
			this.active.next().addClass("ui-accordion-content-active").show();
			this.headers.attr("role", "tab").each(function(t) {
				var i = n(this),
					r = i.attr("id"),
					e = i.next(),
					u = e.attr("id");
				r || (r = f + "-header-" + t, i.attr("id", r));
				u || (u = f + "-panel-" + t, e.attr("id", u));
				i.attr("aria-controls", u);
				e.attr("aria-labelledby", r)
			}).next().attr("role", "tabpanel");
			this.headers.not(this.active).attr({
				"aria-selected": "false",
				tabIndex: -1
			}).next().attr({
				"aria-expanded": "false",
				"aria-hidden": "true"
			}).hide();
			this.active.length ? this.active.attr({
				"aria-selected": "true",
				tabIndex: 0
			}).next().attr({
				"aria-expanded": "true",
				"aria-hidden": "false"
			}) : this.headers.eq(0).attr("tabIndex", 0);
			this._createIcons();
			this._setupEvents(i.event);
			u === "fill" ? (t = e.height(), this.element.siblings(":visible").each(function() {
				var i = n(this),
					r = i.css("position");
				r !== "absolute" && r !== "fixed" && (t -= i.outerHeight(!0))
			}), this.headers.each(function() {
				t -= n(this).outerHeight(!0)
			}), this.headers.next().each(function() {
				n(this).height(Math.max(0, t - n(this).innerHeight() + n(this).height()))
			}).css("overflow", "auto")) : u === "auto" && (t = 0, this.headers.next().each(function() {
				t = Math.max(t, n(this).css("height", "").height())
			}).height(t))
		},
		_activate: function(t) {
			var i = this._findActive(t)[0];
			i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
				target: i,
				currentTarget: i,
				preventDefault: n.noop
			}))
		},
		_findActive: function(t) {
			return typeof t == "number" ? this.headers.eq(t) : n()
		},
		_setupEvents: function(t) {
			var i = {
				keydown: "_keydown"
			};
			t && n.each(t.split(" "), function(n, t) {
				i[t] = "_eventHandler"
			});
			this._off(this.headers.add(this.headers.next()));
			this._on(this.headers, i);
			this._on(this.headers.next(), {
				keydown: "_panelKeyDown"
			});
			this._hoverable(this.headers);
			this._focusable(this.headers)
		},
		_eventHandler: function(t) {
			var i = this.options,
				u = this.active,
				r = n(t.currentTarget),
				f = r[0] === u[0],
				e = f && i.collapsible,
				s = e ? n() : r.next(),
				h = u.next(),
				o = {
					oldHeader: u,
					oldPanel: h,
					newHeader: e ? n() : r,
					newPanel: s
				};
			(t.preventDefault(), (!f || i.collapsible) && this._trigger("beforeActivate", t, o) !== !1) && (i.active = e ? !1 : this.headers.index(r), this.active = f ? n() : r, this._toggle(o), u.removeClass("ui-accordion-header-active ui-state-active"), i.icons && u.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), f || (r.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && r.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), r.next().addClass("ui-accordion-content-active")))
		},
		_toggle: function(t) {
			var r = t.newPanel,
				i = this.prevShow.length ? this.prevShow : t.oldPanel;
			this.prevShow.add(this.prevHide).stop(!0, !0);
			this.prevShow = r;
			this.prevHide = i;
			this.options.animate ? this._animate(r, i, t) : (i.hide(), r.show(), this._toggleComplete(t));
			i.attr({
				"aria-expanded": "false",
				"aria-hidden": "true"
			});
			i.prev().attr("aria-selected", "false");
			r.length && i.length ? i.prev().attr("tabIndex", -1) : r.length && this.headers.filter(function() {
				return n(this).attr("tabIndex") === 0
			}).attr("tabIndex", -1);
			r.attr({
				"aria-expanded": "true",
				"aria-hidden": "false"
			}).prev().attr({
				"aria-selected": "true",
				tabIndex: 0
			})
		},
		_animate: function(n, r, u) {
			var l, f, e, a = this,
				h = 0,
				v = n.length && (!r.length || n.index() < r.index()),
				s = this.options.animate || {},
				o = v && s.down || s,
				c = function() {
					a._toggleComplete(u)
				};
			if (typeof o == "number" && (e = o), typeof o == "string" && (f = o), f = f || o.easing || s.easing, e = e || o.duration || s.duration, !r.length) return n.animate(i, e, f, c);
			if (!n.length) return r.animate(t, e, f, c);
			l = n.show().outerHeight();
			r.animate(t, {
				duration: e,
				easing: f,
				step: function(n, t) {
					t.now = Math.round(n)
				}
			});
			n.hide().animate(i, {
				duration: e,
				easing: f,
				complete: c,
				step: function(n, t) {
					t.now = Math.round(n);
					t.prop !== "height" ? h += t.now : a.options.heightStyle !== "content" && (t.now = Math.round(l - r.outerHeight() - h), h = 0)
				}
			})
		},
		_toggleComplete: function(n) {
			var t = n.oldPanel;
			t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");
			t.length && (t.parent()[0].className = t.parent()[0].className);
			this._trigger("activate", null, n)
		}
	})
}(jQuery), function(n) {
	var t = 0;
	n.widget("ui.autocomplete", {
		version: "1.10.0",
		defaultElement: "<input>",
		options: {
			appendTo: null,
			autoFocus: !1,
			delay: 300,
			minLength: 1,
			position: {
				my: "left top",
				at: "left bottom",
				collision: "none"
			},
			source: null,
			change: null,
			close: null,
			focus: null,
			open: null,
			response: null,
			search: null,
			select: null
		},
		pending: 0,
		_create: function() {
			var t, i, r;
			this.isMultiLine = this._isMultiLine();
			this.valueMethod = this.element[this.element.is("input,textarea") ? "val" : "text"];
			this.isNewMenu = !0;
			this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off");
			this._on(this.element, {
				keydown: function(u) {
					if (this.element.prop("readOnly")) {
						t = !0;
						r = !0;
						i = !0;
						return
					}
					t = !1;
					r = !1;
					i = !1;
					var f = n.ui.keyCode;
					switch (u.keyCode) {
					case f.PAGE_UP:
						t = !0;
						this._move("previousPage", u);
						break;
					case f.PAGE_DOWN:
						t = !0;
						this._move("nextPage", u);
						break;
					case f.UP:
						t = !0;
						this._keyEvent("previous", u);
						break;
					case f.DOWN:
						t = !0;
						this._keyEvent("next", u);
						break;
					case f.ENTER:
					case f.NUMPAD_ENTER:
						this.menu.active && (t = !0, u.preventDefault(), this.menu.select(u));
						break;
					case f.TAB:
						this.menu.active && this.menu.select(u);
						break;
					case f.ESCAPE:
						this.menu.element.is(":visible") && (this._value(this.term), this.close(u), u.preventDefault());
						break;
					default:
						i = !0;
						this._searchTimeout(u)
					}
				},
				keypress: function(r) {
					if (t) {
						t = !1;
						r.preventDefault();
						return
					}
					if (!i) {
						var u = n.ui.keyCode;
						switch (r.keyCode) {
						case u.PAGE_UP:
							this._move("previousPage", r);
							break;
						case u.PAGE_DOWN:
							this._move("nextPage", r);
							break;
						case u.UP:
							this._keyEvent("previous", r);
							break;
						case u.DOWN:
							this._keyEvent("next", r)
						}
					}
				},
				input: function(n) {
					if (r) {
						r = !1;
						n.preventDefault();
						return
					}
					this._searchTimeout(n)
				},
				focus: function() {
					this.selectedItem = null;
					this.previous = this._value()
				},
				blur: function(n) {
					if (this.cancelBlur) {
						delete this.cancelBlur;
						return
					}
					clearTimeout(this.searching);
					this.close(n);
					this._change(n)
				}
			});
			this._initSource();
			this.menu = n("<ul>").addClass("ui-autocomplete").appendTo(this._appendTo()).menu({
				input: n(),
				role: null
			}).zIndex(this.element.zIndex() + 1).hide().data("ui-menu");
			this._on(this.menu.element, {
				mousedown: function(t) {
					t.preventDefault();
					this.cancelBlur = !0;
					this._delay(function() {
						delete this.cancelBlur
					});
					var i = this.menu.element[0];
					n(t.target).closest(".ui-menu-item").length || this._delay(function() {
						var t = this;
						this.document.one("mousedown", function(r) {
							r.target === t.element[0] || r.target === i || n.contains(i, r.target) || t.close()
						})
					})
				},
				menufocus: function(t, i) {
					if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type))) {
						this.menu.blur();
						this.document.one("mousemove", function() {
							n(t.target).trigger(t.originalEvent)
						});
						return
					}
					var r = i.item.data("ui-autocomplete-item");
					!1 !== this._trigger("focus", t, {
						item: r
					}) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(r.value) : this.liveRegion.text(r.value)
				},
				menuselect: function(n, t) {
					var i = t.item.data("ui-autocomplete-item"),
						r = this.previous;
					this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = r, this._delay(function() {
						this.previous = r;
						this.selectedItem = i
					}));
					!1 !== this._trigger("select", n, {
						item: i
					}) && this._value(i.value);
					this.term = this._value();
					this.close(n);
					this.selectedItem = i
				}
			});
			this.liveRegion = n("<span>", {
				role: "status",
				"aria-live": "polite"
			}).addClass("ui-helper-hidden-accessible").insertAfter(this.element);
			this._on(this.window, {
				beforeunload: function() {
					this.element.removeAttr("autocomplete")
				}
			})
		},
		_destroy: function() {
			clearTimeout(this.searching);
			this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
			this.menu.element.remove();
			this.liveRegion.remove()
		},
		_setOption: function(n, t) {
			this._super(n, t);
			n === "source" && this._initSource();
			n === "appendTo" && this.menu.element.appendTo(this._appendTo());
			n === "disabled" && t && this.xhr && this.xhr.abort()
		},
		_appendTo: function() {
			var t = this.options.appendTo;
			return t && (t = t.jquery || t.nodeType ? n(t) : this.document.find(t).eq(0)), t || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
		},
		_isMultiLine: function() {
			return this.element.is("textarea") ? !0 : this.element.is("input") ? !1 : this.element.prop("isContentEditable")
		},
		_initSource: function() {
			var i, r, t = this;
			n.isArray(this.options.source) ? (i = this.options.source, this.source = function(t, r) {
				r(n.ui.autocomplete.filter(i, t.term))
			}) : typeof this.options.source == "string" ? (r = this.options.source, this.source = function(i, u) {
				t.xhr && t.xhr.abort();
				t.xhr = n.ajax({
					url: r,
					data: i,
					dataType: "json",
					success: function(n) {
						u(n)
					},
					error: function() {
						u([])
					}
				})
			}) : this.source = this.options.source
		},
		_searchTimeout: function(n) {
			clearTimeout(this.searching);
			this.searching = this._delay(function() {
				this.term !== this._value() && (this.selectedItem = null, this.search(null, n))
			}, this.options.delay)
		},
		search: function(n, t) {
			return (n = n != null ? n : this._value(), this.term = this._value(), n.length < this.options.minLength) ? this.close(t) : this._trigger("search", t) === !1 ? void 0 : this._search(n)
		},
		_search: function(n) {
			this.pending++;
			this.element.addClass("ui-autocomplete-loading");
			this.cancelSearch = !1;
			this.source({
				term: n
			}, this._response())
		},
		_response: function() {
			var n = this,
				i = ++t;
			return function(r) {
				i === t && n.__response(r);
				n.pending--;
				n.pending || n.element.removeClass("ui-autocomplete-loading")
			}
		},
		__response: function(n) {
			n && (n = this._normalize(n));
			this._trigger("response", null, {
				content: n
			});
			!this.options.disabled && n && n.length && !this.cancelSearch ? (this._suggest(n), this._trigger("open")) : this._close()
		},
		close: function(n) {
			this.cancelSearch = !0;
			this._close(n)
		},
		_close: function(n) {
			this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", n))
		},
		_change: function(n) {
			this.previous !== this._value() && this._trigger("change", n, {
				item: this.selectedItem
			})
		},
		_normalize: function(t) {
			return t.length && t[0].label && t[0].value ? t : n.map(t, function(t) {
				return typeof t == "string" ? {
					label: t,
					value: t
				} : n.extend({
					label: t.label || t.value,
					value: t.value || t.label
				}, t)
			})
		},
		_suggest: function(t) {
			var i = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
			this._renderMenu(i, t);
			this.menu.refresh();
			i.show();
			this._resizeMenu();
			i.position(n.extend({
				of: this.element
			}, this.options.position));
			this.options.autoFocus && this.menu.next()
		},
		_resizeMenu: function() {
			var n = this.menu.element;
			n.outerWidth(Math.max(n.width("").outerWidth() + 1, this.element.outerWidth()))
		},
		_renderMenu: function(t, i) {
			var r = this;
			n.each(i, function(n, i) {
				r._renderItemData(t, i)
			})
		},
		_renderItemData: function(n, t) {
			return this._renderItem(n, t).data("ui-autocomplete-item", t)
		},
		_renderItem: function(t, i) {
			return n("<li>").append(n("<a>").text(i.label)).appendTo(t)
		},
		_move: function(n, t) {
			if (!this.menu.element.is(":visible")) {
				this.search(null, t);
				return
			}
			if (this.menu.isFirstItem() && /^previous/.test(n) || this.menu.isLastItem() && /^next/.test(n)) {
				this._value(this.term);
				this.menu.blur();
				return
			}
			this.menu[n](t)
		},
		widget: function() {
			return this.menu.element
		},
		_value: function() {
			return this.valueMethod.apply(this.element, arguments)
		},
		_keyEvent: function(n, t) {
			(!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(n, t), t.preventDefault())
		}
	});
	n.extend(n.ui.autocomplete, {
		escapeRegex: function(n) {
			return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
		},
		filter: function(t, i) {
			var r = new RegExp(n.ui.autocomplete.escapeRegex(i), "i");
			return n.grep(t, function(n) {
				return r.test(n.label || n.value || n)
			})
		}
	});
	n.widget("ui.autocomplete", n.ui.autocomplete, {
		options: {
			messages: {
				noResults: "No search results.",
				results: function(n) {
					return n + (n > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
				}
			}
		},
		__response: function(n) {
			var t;
			(this._superApply(arguments), this.options.disabled || this.cancelSearch) || (t = n && n.length ? this.options.messages.results(n.length) : this.options.messages.noResults, this.liveRegion.text(t))
		}
	})
}(jQuery), function(n) {
	var i, r, u, t, f = "ui-button ui-widget ui-state-default ui-corner-all",
		s = "ui-state-hover ui-state-active ",
		e = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
		h = function() {
			var t = n(this).find(":ui-button");
			setTimeout(function() {
				t.button("refresh")
			}, 1)
		},
		o = function(t) {
			var i = t.name,
				r = t.form,
				u = n([]);
			return i && (i = i.replace(/'/g, "\\'"), u = r ? n(r).find("[name='" + i + "']") : n("[name='" + i + "']", t.ownerDocument).filter(function() {
				return !this.form
			})), u
		};
	n.widget("ui.button", {
		version: "1.10.0",
		defaultElement: "<button>",
		options: {
			disabled: null,
			text: !0,
			label: null,
			icons: {
				primary: null,
				secondary: null
			}
		},
		_create: function() {
			this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, h);
			typeof this.options.disabled != "boolean" ? this.options.disabled = !! this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled);
			this._determineButtonType();
			this.hasTitle = !! this.buttonElement.attr("title");
			var s = this,
				e = this.options,
				c = this.type === "checkbox" || this.type === "radio",
				a = c ? "" : "ui-state-active",
				l = "ui-state-focus";
			e.label === null && (e.label = this.type === "input" ? this.buttonElement.val() : this.buttonElement.html());
			this._hoverable(this.buttonElement);
			this.buttonElement.addClass(f).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
				e.disabled || this === i && n(this).addClass("ui-state-active")
			}).bind("mouseleave" + this.eventNamespace, function() {
				e.disabled || n(this).removeClass(a)
			}).bind("click" + this.eventNamespace, function(n) {
				e.disabled && (n.preventDefault(), n.stopImmediatePropagation())
			});
			this.element.bind("focus" + this.eventNamespace, function() {
				s.buttonElement.addClass(l)
			}).bind("blur" + this.eventNamespace, function() {
				s.buttonElement.removeClass(l)
			});
			c && (this.element.bind("change" + this.eventNamespace, function() {
				t || s.refresh()
			}), this.buttonElement.bind("mousedown" + this.eventNamespace, function(n) {
				e.disabled || (t = !1, r = n.pageX, u = n.pageY)
			}).bind("mouseup" + this.eventNamespace, function(n) {
				e.disabled || (r !== n.pageX || u !== n.pageY) && (t = !0)
			}));
			this.type === "checkbox" ? this.buttonElement.bind("click" + this.eventNamespace, function() {
				if (e.disabled || t) return !1
			}) : this.type === "radio" ? this.buttonElement.bind("click" + this.eventNamespace, function() {
				if (e.disabled || t) return !1;
				n(this).addClass("ui-state-active");
				s.buttonElement.attr("aria-pressed", "true");
				var i = s.element[0];
				o(i).not(i).map(function() {
					return n(this).button("widget")[0]
				}).removeClass("ui-state-active").attr("aria-pressed", "false")
			}) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
				if (e.disabled) return !1;
				n(this).addClass("ui-state-active");
				i = this;
				s.document.one("mouseup", function() {
					i = null
				})
			}).bind("mouseup" + this.eventNamespace, function() {
				if (e.disabled) return !1;
				n(this).removeClass("ui-state-active")
			}).bind("keydown" + this.eventNamespace, function(t) {
				if (e.disabled) return !1;
				(t.keyCode === n.ui.keyCode.SPACE || t.keyCode === n.ui.keyCode.ENTER) && n(this).addClass("ui-state-active")
			}).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
				n(this).removeClass("ui-state-active")
			}), this.buttonElement.is("a") && this.buttonElement.keyup(function(t) {
				t.keyCode === n.ui.keyCode.SPACE && n(this).click()
			}));
			this._setOption("disabled", e.disabled);
			this._resetButton()
		},
		_determineButtonType: function() {
			var n, t, i;
			this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button";
			this.type === "checkbox" || this.type === "radio" ? (n = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = n.find(t), this.buttonElement.length || (n = n.length ? n.siblings() : this.element.siblings(), this.buttonElement = n.filter(t), this.buttonElement.length || (this.buttonElement = n.find(t))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
		},
		widget: function() {
			return this.buttonElement
		},
		_destroy: function() {
			this.element.removeClass("ui-helper-hidden-accessible");
			this.buttonElement.removeClass(f + " " + s + " " + e).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
			this.hasTitle || this.buttonElement.removeAttr("title")
		},
		_setOption: function(n, t) {
			if (this._super(n, t), n === "disabled") {
				t ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1);
				return
			}
			this._resetButton()
		},
		refresh: function() {
			var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
			t !== this.options.disabled && this._setOption("disabled", t);
			this.type === "radio" ? o(this.element[0]).each(function() {
				n(this).is(":checked") ? n(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : n(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
			}) : this.type === "checkbox" && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
		},
		_resetButton: function() {
			if (this.type === "input") {
				this.options.label && this.element.val(this.options.label);
				return
			}
			var i = this.buttonElement.removeClass(e),
				f = n("<span><\/span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(i.empty()).text(),
				t = this.options.icons,
				u = t.primary && t.secondary,
				r = [];
			t.primary || t.secondary ? (this.options.text && r.push("ui-button-text-icon" + (u ? "s" : t.primary ? "-primary" : "-secondary")), t.primary && i.prepend("<span class='ui-button-icon-primary ui-icon " + t.primary + "'><\/span>"), t.secondary && i.append("<span class='ui-button-icon-secondary ui-icon " + t.secondary + "'><\/span>"), this.options.text || (r.push(u ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || i.attr("title", n.trim(f)))) : r.push("ui-button-text-only");
			i.addClass(r.join(" "))
		}
	});
	n.widget("ui.buttonset", {
		version: "1.10.0",
		options: {
			items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
		},
		_create: function() {
			this.element.addClass("ui-buttonset")
		},
		_init: function() {
			this.refresh()
		},
		_setOption: function(n, t) {
			n === "disabled" && this.buttons.button("option", n, t);
			this._super(n, t)
		},
		refresh: function() {
			var t = this.element.css("direction") === "rtl";
			this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
				return n(this).button("widget")[0]
			}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
		},
		_destroy: function() {
			this.element.removeClass("ui-buttonset");
			this.buttons.map(function() {
				return n(this).button("widget")[0]
			}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
		}
	})
}(jQuery), function(n, t) {
	function e() {
		this._curInst = null;
		this._keyEvent = !1;
		this._disabledInputs = [];
		this._datepickerShowing = !1;
		this._inDialog = !1;
		this._mainDivId = "ui-datepicker-div";
		this._inlineClass = "ui-datepicker-inline";
		this._appendClass = "ui-datepicker-append";
		this._triggerClass = "ui-datepicker-trigger";
		this._dialogClass = "ui-datepicker-dialog";
		this._disableClass = "ui-datepicker-disabled";
		this._unselectableClass = "ui-datepicker-unselectable";
		this._currentClass = "ui-datepicker-current-day";
		this._dayOverClass = "ui-datepicker-days-cell-over";
		this.regional = [];
		this.regional[""] = {
			closeText: "Done",
			prevText: "Prev",
			nextText: "Next",
			currentText: "Today",
			monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			weekHeader: "Wk",
			dateFormat: "mm/dd/yy",
			firstDay: 0,
			isRTL: !1,
			showMonthAfterYear: !1,
			yearSuffix: ""
		};
		this._defaults = {
			showOn: "focus",
			showAnim: "fadeIn",
			showOptions: {},
			defaultDate: null,
			appendText: "",
			buttonText: "...",
			buttonImage: "",
			buttonImageOnly: !1,
			hideIfNoPrevNext: !1,
			navigationAsDateFormat: !1,
			gotoCurrent: !1,
			changeMonth: !1,
			changeYear: !1,
			yearRange: "c-10:c+10",
			showOtherMonths: !1,
			selectOtherMonths: !1,
			showWeek: !1,
			calculateWeek: this.iso8601Week,
			shortYearCutoff: "+10",
			minDate: null,
			maxDate: null,
			duration: "fast",
			beforeShowDay: null,
			beforeShow: null,
			onSelect: null,
			onChangeMonthYear: null,
			onClose: null,
			numberOfMonths: 1,
			showCurrentAtPos: 0,
			stepMonths: 1,
			stepBigMonths: 12,
			altField: "",
			altFormat: "",
			constrainInput: !0,
			showButtonPanel: !1,
			autoSize: !1,
			disabled: !1
		};
		n.extend(this._defaults, this.regional[""]);
		this.dpDiv = o(n("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'><\/div>"))
	}
	function o(t) {
		var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
		return t.delegate(i, "mouseout", function() {
			n(this).removeClass("ui-state-hover");
			this.className.indexOf("ui-datepicker-prev") !== -1 && n(this).removeClass("ui-datepicker-prev-hover");
			this.className.indexOf("ui-datepicker-next") !== -1 && n(this).removeClass("ui-datepicker-next-hover")
		}).delegate(i, "mouseover", function() {
			n.datepicker._isDisabledDatepicker(f.inline ? t.parent()[0] : f.input[0]) || (n(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), n(this).addClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && n(this).addClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && n(this).addClass("ui-datepicker-next-hover"))
		})
	}
	function u(t, i) {
		n.extend(t, i);
		for (var r in i) i[r] == null && (t[r] = i[r]);
		return t
	}
	n.extend(n.ui, {
		datepicker: {
			version: "1.10.0"
		}
	});
	var i = "datepicker",
		r = (new Date).getTime(),
		f;
	n.extend(e.prototype, {
		markerClassName: "hasDatepicker",
		maxRows: 4,
		_widgetDatepicker: function() {
			return this.dpDiv
		},
		setDefaults: function(n) {
			return u(this._defaults, n || {}), this
		},
		_attachDatepicker: function(t, i) {
			var r, f, u;
			r = t.nodeName.toLowerCase();
			f = r === "div" || r === "span";
			t.id || (this.uuid += 1, t.id = "dp" + this.uuid);
			u = this._newInst(n(t), f);
			u.settings = n.extend({}, i || {});
			r === "input" ? this._connectDatepicker(t, u) : f && this._inlineDatepicker(t, u)
		},
		_newInst: function(t, i) {
			var r = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
			return {
				id: r,
				input: t,
				selectedDay: 0,
				selectedMonth: 0,
				selectedYear: 0,
				drawMonth: 0,
				drawYear: 0,
				inline: i,
				dpDiv: i ? o(n("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'><\/div>")) : this.dpDiv
			}
		},
		_connectDatepicker: function(t, r) {
			var u = n(t);
			(r.append = n([]), r.trigger = n([]), u.hasClass(this.markerClassName)) || (this._attachments(u, r), u.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(r), n.data(t, i, r), r.settings.disabled && this._disableDatepicker(t))
		},
		_attachments: function(t, i) {
			var u, r, f, e = this._get(i, "appendText"),
				o = this._get(i, "isRTL");
			i.append && i.append.remove();
			e && (i.append = n("<span class='" + this._appendClass + "'>" + e + "<\/span>"), t[o ? "before" : "after"](i.append));
			t.unbind("focus", this._showDatepicker);
			i.trigger && i.trigger.remove();
			u = this._get(i, "showOn");
			(u === "focus" || u === "both") && t.focus(this._showDatepicker);
			(u === "button" || u === "both") && (r = this._get(i, "buttonText"), f = this._get(i, "buttonImage"), i.trigger = n(this._get(i, "buttonImageOnly") ? n("<img/>").addClass(this._triggerClass).attr({
				src: f,
				alt: r,
				title: r
			}) : n("<button type='button'><\/button>").addClass(this._triggerClass).html(f ? n("<img/>").attr({
				src: f,
				alt: r,
				title: r
			}) : r)), t[o ? "before" : "after"](i.trigger), i.trigger.click(function() {
				return n.datepicker._datepickerShowing && n.datepicker._lastInput === t[0] ? n.datepicker._hideDatepicker() : n.datepicker._datepickerShowing && n.datepicker._lastInput !== t[0] ? (n.datepicker._hideDatepicker(), n.datepicker._showDatepicker(t[0])) : n.datepicker._showDatepicker(t[0]), !1
			}))
		},
		_autoSize: function(n) {
			if (this._get(n, "autoSize") && !n.inline) {
				var r, u, f, t, i = new Date(2009, 11, 20),
					e = this._get(n, "dateFormat");
				e.match(/[DM]/) && (r = function(n) {
					for (u = 0, f = 0, t = 0; t < n.length; t++) n[t].length > u && (u = n[t].length, f = t);
					return f
				}, i.setMonth(r(this._get(n, e.match(/MM/) ? "monthNames" : "monthNamesShort"))), i.setDate(r(this._get(n, e.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - i.getDay()));
				n.input.attr("size", this._formatDate(n, i).length)
			}
		},
		_inlineDatepicker: function(t, r) {
			var u = n(t);
			u.hasClass(this.markerClassName) || (u.addClass(this.markerClassName).append(r.dpDiv), n.data(t, i, r), this._setDate(r, this._getDefaultDate(r), !0), this._updateDatepicker(r), this._updateAlternate(r), r.settings.disabled && this._disableDatepicker(t), r.dpDiv.css("display", "block"))
		},
		_dialogDatepicker: function(t, r, f, e, o) {
			var h, c, l, a, v, s = this._dialogInst;
			return s || (this.uuid += 1, h = "dp" + this.uuid, this._dialogInput = n("<input type='text' id='" + h + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), n("body").append(this._dialogInput), s = this._dialogInst = this._newInst(this._dialogInput, !1), s.settings = {}, n.data(this._dialogInput[0], i, s)), u(s.settings, e || {}), r = r && r.constructor === Date ? this._formatDate(s, r) : r, this._dialogInput.val(r), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (c = document.documentElement.clientWidth, l = document.documentElement.clientHeight, a = document.documentElement.scrollLeft || document.body.scrollLeft, v = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [c / 2 - 100 + a, l / 2 - 150 + v]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), s.settings.onSelect = f, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), n.blockUI && n.blockUI(this.dpDiv), n.data(this._dialogInput[0], i, s), this
		},
		_destroyDatepicker: function(t) {
			var r, u = n(t),
				f = n.data(t, i);
			u.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(), n.removeData(t, i), r === "input" ? (f.append.remove(), f.trigger.remove(), u.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : (r === "div" || r === "span") && u.removeClass(this.markerClassName).empty())
		},
		_enableDatepicker: function(t) {
			var r, u, f = n(t),
				e = n.data(t, i);
			f.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(), r === "input" ? (t.disabled = !1, e.trigger.filter("button").each(function() {
				this.disabled = !1
			}).end().filter("img").css({
				opacity: "1.0",
				cursor: ""
			})) : (r === "div" || r === "span") && (u = f.children("." + this._inlineClass), u.children().removeClass("ui-state-disabled"), u.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = n.map(this._disabledInputs, function(n) {
				return n === t ? null : n
			}))
		},
		_disableDatepicker: function(t) {
			var r, u, f = n(t),
				e = n.data(t, i);
			f.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(), r === "input" ? (t.disabled = !0, e.trigger.filter("button").each(function() {
				this.disabled = !0
			}).end().filter("img").css({
				opacity: "0.5",
				cursor: "default"
			})) : (r === "div" || r === "span") && (u = f.children("." + this._inlineClass), u.children().addClass("ui-state-disabled"), u.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = n.map(this._disabledInputs, function(n) {
				return n === t ? null : n
			}), this._disabledInputs[this._disabledInputs.length] = t)
		},
		_isDisabledDatepicker: function(n) {
			if (!n) return !1;
			for (var t = 0; t < this._disabledInputs.length; t++) if (this._disabledInputs[t] === n) return !0;
			return !1
		},
		_getInst: function(t) {
			try {
				return n.data(t, i)
			} catch (r) {
				throw "Missing instance data for this datepicker";
			}
		},
		_optionDatepicker: function(i, r, f) {
			var o, c, s, h, e = this._getInst(i);
			if (arguments.length === 2 && typeof r == "string") return r === "defaults" ? n.extend({}, n.datepicker._defaults) : e ? r === "all" ? n.extend({}, e.settings) : this._get(e, r) : null;
			o = r || {};
			typeof r == "string" && (o = {}, o[r] = f);
			e && (this._curInst === e && this._hideDatepicker(), c = this._getDateDatepicker(i, !0), s = this._getMinMaxDate(e, "min"), h = this._getMinMaxDate(e, "max"), u(e.settings, o), s !== null && o.dateFormat !== t && o.minDate === t && (e.settings.minDate = this._formatDate(e, s)), h !== null && o.dateFormat !== t && o.maxDate === t && (e.settings.maxDate = this._formatDate(e, h)), "disabled" in o && (o.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)), this._attachments(n(i), e), this._autoSize(e), this._setDate(e, c), this._updateAlternate(e), this._updateDatepicker(e))
		},
		_changeDatepicker: function(n, t, i) {
			this._optionDatepicker(n, t, i)
		},
		_refreshDatepicker: function(n) {
			var t = this._getInst(n);
			t && this._updateDatepicker(t)
		},
		_setDateDatepicker: function(n, t) {
			var i = this._getInst(n);
			i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
		},
		_getDateDatepicker: function(n, t) {
			var i = this._getInst(n);
			return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
		},
		_doKeyDown: function(t) {
			var u, e, f, i = n.datepicker._getInst(t.target),
				r = !0,
				o = i.dpDiv.is(".ui-datepicker-rtl");
			if (i._keyEvent = !0, n.datepicker._datepickerShowing) switch (t.keyCode) {
			case 9:
				n.datepicker._hideDatepicker();
				r = !1;
				break;
			case 13:
				return f = n("td." + n.datepicker._dayOverClass + ":not(." + n.datepicker._currentClass + ")", i.dpDiv), f[0] && n.datepicker._selectDay(t.target, i.selectedMonth, i.selectedYear, f[0]), u = n.datepicker._get(i, "onSelect"), u ? (e = n.datepicker._formatDate(i), u.apply(i.input ? i.input[0] : null, [e, i])) : n.datepicker._hideDatepicker(), !1;
			case 27:
				n.datepicker._hideDatepicker();
				break;
			case 33:
				n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M");
				break;
			case 34:
				n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M");
				break;
			case 35:
				(t.ctrlKey || t.metaKey) && n.datepicker._clearDate(t.target);
				r = t.ctrlKey || t.metaKey;
				break;
			case 36:
				(t.ctrlKey || t.metaKey) && n.datepicker._gotoToday(t.target);
				r = t.ctrlKey || t.metaKey;
				break;
			case 37:
				(t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, o ? 1 : -1, "D");
				r = t.ctrlKey || t.metaKey;
				t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M");
				break;
			case 38:
				(t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, -7, "D");
				r = t.ctrlKey || t.metaKey;
				break;
			case 39:
				(t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, o ? -1 : 1, "D");
				r = t.ctrlKey || t.metaKey;
				t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M");
				break;
			case 40:
				(t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, 7, "D");
				r = t.ctrlKey || t.metaKey;
				break;
			default:
				r = !1
			} else t.keyCode === 36 && t.ctrlKey ? n.datepicker._showDatepicker(this) : r = !1;
			r && (t.preventDefault(), t.stopPropagation())
		},
		_doKeyPress: function(t) {
			var i, r, u = n.datepicker._getInst(t.target);
			if (n.datepicker._get(u, "constrainInput")) return i = n.datepicker._possibleChars(n.datepicker._get(u, "dateFormat")), r = String.fromCharCode(t.charCode == null ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || r < " " || !i || i.indexOf(r) > -1
		},
		_doKeyUp: function(t) {
			var r, i = n.datepicker._getInst(t.target);
			if (i.input.val() !== i.lastVal) try {
				r = n.datepicker.parseDate(n.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, n.datepicker._getFormatConfig(i));
				r && (n.datepicker._setDateFromField(i), n.datepicker._updateAlternate(i), n.datepicker._updateDatepicker(i))
			} catch (u) {}
			return !0
		},
		_showDatepicker: function(t) {
			if (t = t.target || t, t.nodeName.toLowerCase() !== "input" && (t = n("input", t.parentNode)[0]), !n.datepicker._isDisabledDatepicker(t) && n.datepicker._lastInput !== t) {
				var i, o, s, r, f, e, h;
				(i = n.datepicker._getInst(t), n.datepicker._curInst && n.datepicker._curInst !== i && (n.datepicker._curInst.dpDiv.stop(!0, !0), i && n.datepicker._datepickerShowing && n.datepicker._hideDatepicker(n.datepicker._curInst.input[0])), o = n.datepicker._get(i, "beforeShow"), s = o ? o.apply(t, [t, i]) : {}, s !== !1) && (u(i.settings, s), i.lastVal = null, n.datepicker._lastInput = t, n.datepicker._setDateFromField(i), n.datepicker._inDialog && (t.value = ""), n.datepicker._pos || (n.datepicker._pos = n.datepicker._findPos(t), n.datepicker._pos[1] += t.offsetHeight), r = !1, n(t).parents().each(function() {
					return r |= n(this).css("position") === "fixed", !r
				}), f = {
					left: n.datepicker._pos[0],
					top: n.datepicker._pos[1]
				}, n.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
					position: "absolute",
					display: "block",
					top: "-1000px"
				}), n.datepicker._updateDatepicker(i), f = n.datepicker._checkOffset(i, f, r), i.dpDiv.css({
					position: n.datepicker._inDialog && n.blockUI ? "static" : r ? "fixed" : "absolute",
					display: "none",
					left: f.left + "px",
					top: f.top + "px"
				}), i.inline || (e = n.datepicker._get(i, "showAnim"), h = n.datepicker._get(i, "duration"), i.dpDiv.zIndex(n(t).zIndex() + 1), n.datepicker._datepickerShowing = !0, n.effects && n.effects.effect[e] ? i.dpDiv.show(e, n.datepicker._get(i, "showOptions"), h) : i.dpDiv[e || "show"](e ? h : null), i.input.is(":visible") && !i.input.is(":disabled") && i.input.focus(), n.datepicker._curInst = i))
			}
		},
		_updateDatepicker: function(t) {
			this.maxRows = 4;
			f = t;
			t.dpDiv.empty().append(this._generateHTML(t));
			this._attachHandlers(t);
			t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
			var i, r = this._getNumberOfMonths(t),
				u = r[1];
			t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
			u > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + u).css("width", 17 * u + "em");
			t.dpDiv[(r[0] !== 1 || r[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
			t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
			t === n.datepicker._curInst && n.datepicker._datepickerShowing && t.input && t.input.is(":visible") && !t.input.is(":disabled") && t.input[0] !== document.activeElement && t.input.focus();
			t.yearshtml && (i = t.yearshtml, setTimeout(function() {
				i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml);
				i = t.yearshtml = null
			}, 0))
		},
		_getBorders: function(n) {
			var t = function(n) {
					return {
						thin: 1,
						medium: 2,
						thick: 3
					}[n] || n
				};
			return [parseFloat(t(n.css("border-left-width"))), parseFloat(t(n.css("border-top-width")))]
		},
		_checkOffset: function(t, i, r) {
			var u = t.dpDiv.outerWidth(),
				f = t.dpDiv.outerHeight(),
				h = t.input ? t.input.outerWidth() : 0,
				o = t.input ? t.input.outerHeight() : 0,
				e = document.documentElement.clientWidth + (r ? 0 : n(document).scrollLeft()),
				s = document.documentElement.clientHeight + (r ? 0 : n(document).scrollTop());
			return i.left -= this._get(t, "isRTL") ? u - h : 0, i.left -= r && i.left === t.input.offset().left ? n(document).scrollLeft() : 0, i.top -= r && i.top === t.input.offset().top + o ? n(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + u > e && e > u ? Math.abs(i.left + u - e) : 0), i.top -= Math.min(i.top, i.top + f > s && s > f ? Math.abs(f + o) : 0), i
		},
		_findPos: function(t) {
			for (var i, r = this._getInst(t), u = this._get(r, "isRTL"); t && (t.type === "hidden" || t.nodeType !== 1 || n.expr.filters.hidden(t));) t = t[u ? "previousSibling" : "nextSibling"];
			return i = n(t).offset(), [i.left, i.top]
		},
		_hideDatepicker: function(t) {
			var u, e, f, o, r = this._curInst;
			r && (!t || r === n.data(t, i)) && this._datepickerShowing && (u = this._get(r, "showAnim"), e = this._get(r, "duration"), f = function() {
				n.datepicker._tidyDialog(r)
			}, n.effects && (n.effects.effect[u] || n.effects[u]) ? r.dpDiv.hide(u, n.datepicker._get(r, "showOptions"), e, f) : r.dpDiv[u === "slideDown" ? "slideUp" : u === "fadeIn" ? "fadeOut" : "hide"](u ? e : null, f), u || f(), this._datepickerShowing = !1, o = this._get(r, "onClose"), o && o.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
				position: "absolute",
				left: "0",
				top: "-100px"
			}), n.blockUI && (n.unblockUI(), n("body").append(this.dpDiv))), this._inDialog = !1)
		},
		_tidyDialog: function(n) {
			n.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
		},
		_checkExternalClick: function(t) {
			if (n.datepicker._curInst) {
				var i = n(t.target),
					r = n.datepicker._getInst(i[0]);
				(i[0].id === n.datepicker._mainDivId || i.parents("#" + n.datepicker._mainDivId).length !== 0 || i.hasClass(n.datepicker.markerClassName) || i.closest("." + n.datepicker._triggerClass).length || !n.datepicker._datepickerShowing || n.datepicker._inDialog && n.blockUI) && (!i.hasClass(n.datepicker.markerClassName) || n.datepicker._curInst === r) || n.datepicker._hideDatepicker()
			}
		},
		_adjustDate: function(t, i, r) {
			var f = n(t),
				u = this._getInst(f[0]);
			this._isDisabledDatepicker(f[0]) || (this._adjustInstDate(u, i + (r === "M" ? this._get(u, "showCurrentAtPos") : 0), r), this._updateDatepicker(u))
		},
		_gotoToday: function(t) {
			var r, u = n(t),
				i = this._getInst(u[0]);
			this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear) : (r = new Date, i.selectedDay = r.getDate(), i.drawMonth = i.selectedMonth = r.getMonth(), i.drawYear = i.selectedYear = r.getFullYear());
			this._notifyChange(i);
			this._adjustDate(u)
		},
		_selectMonthYear: function(t, i, r) {
			var f = n(t),
				u = this._getInst(f[0]);
			u["selected" + (r === "M" ? "Month" : "Year")] = u["draw" + (r === "M" ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10);
			this._notifyChange(u);
			this._adjustDate(f)
		},
		_selectDay: function(t, i, r, u) {
			var f, e = n(t);
			n(u).hasClass(this._unselectableClass) || this._isDisabledDatepicker(e[0]) || (f = this._getInst(e[0]), f.selectedDay = f.currentDay = n("a", u).html(), f.selectedMonth = f.currentMonth = i, f.selectedYear = f.currentYear = r, this._selectDate(t, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)))
		},
		_clearDate: function(t) {
			var i = n(t);
			this._selectDate(i, "")
		},
		_selectDate: function(t, i) {
			var u, f = n(t),
				r = this._getInst(f[0]);
			i = i != null ? i : this._formatDate(r);
			r.input && r.input.val(i);
			this._updateAlternate(r);
			u = this._get(r, "onSelect");
			u ? u.apply(r.input ? r.input[0] : null, [i, r]) : r.input && r.input.trigger("change");
			r.inline ? this._updateDatepicker(r) : (this._hideDatepicker(), this._lastInput = r.input[0], typeof r.input[0] != "object" && r.input.focus(), this._lastInput = null)
		},
		_updateAlternate: function(t) {
			var i, r, u, f = this._get(t, "altField");
			f && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), r = this._getDate(t), u = this.formatDate(i, r, this._getFormatConfig(t)), n(f).each(function() {
				n(this).val(u)
			}))
		},
		noWeekends: function(n) {
			var t = n.getDay();
			return [t > 0 && t < 6, ""]
		},
		iso8601Week: function(n) {
			var i, t = new Date(n.getTime());
			return t.setDate(t.getDate() + 4 - (t.getDay() || 7)), i = t.getTime(), t.setMonth(0), t.setDate(1), Math.floor(Math.round((i - t) / 864e5) / 7) + 1
		},
		parseDate: function(t, i, r) {
			if (t == null || i == null) throw "Invalid arguments";
			if (i = typeof i == "object" ? i.toString() : i + "", i === "") return null;
			for (var a, v, f = 0, y = (r ? r.shortYearCutoff : null) || this._defaults.shortYearCutoff, d = typeof y != "string" ? y : (new Date).getFullYear() % 100 + parseInt(y, 10), g = (r ? r.dayNamesShort : null) || this._defaults.dayNamesShort, nt = (r ? r.dayNames : null) || this._defaults.dayNames, tt = (r ? r.monthNamesShort : null) || this._defaults.monthNamesShort, it = (r ? r.monthNames : null) || this._defaults.monthNames, e = -1, o = -1, s = -1, p = -1, w = !1, u, l = function(n) {
					var i = h + 1 < t.length && t.charAt(h + 1) === n;
					return i && h++, i
				}, c = function(n) {
					var r = l(n),
						u = n === "@" ? 14 : n === "!" ? 20 : n === "y" && r ? 4 : n === "o" ? 3 : 2,
						e = new RegExp("^\\d{1," + u + "}"),
						t = i.substring(f).match(e);
					if (!t) throw "Missing number at position " + f;
					return f += t[0].length, parseInt(t[0], 10)
				}, k = function(t, r, u) {
					var e = -1,
						o = n.map(l(t) ? u : r, function(n, t) {
							return [[t, n]]
						}).sort(function(n, t) {
							return -(n[1].length - t[1].length)
						});
					if (n.each(o, function(n, t) {
						var r = t[1];
						if (i.substr(f, r.length).toLowerCase() === r.toLowerCase()) return e = t[0], f += r.length, !1
					}), e !== -1) return e + 1;
					throw "Unknown name at position " + f;
				}, b = function() {
					if (i.charAt(f) !== t.charAt(h)) throw "Unexpected literal at position " + f;
					f++
				}, h = 0; h < t.length; h++) if (w) t.charAt(h) === "'" && !l("'") ? w = !1 : b();
			else switch (t.charAt(h)) {
			case "d":
				s = c("d");
				break;
			case "D":
				k("D", g, nt);
				break;
			case "o":
				p = c("o");
				break;
			case "m":
				o = c("m");
				break;
			case "M":
				o = k("M", tt, it);
				break;
			case "y":
				e = c("y");
				break;
			case "@":
				u = new Date(c("@"));
				e = u.getFullYear();
				o = u.getMonth() + 1;
				s = u.getDate();
				break;
			case "!":
				u = new Date((c("!") - this._ticksTo1970) / 1e4);
				e = u.getFullYear();
				o = u.getMonth() + 1;
				s = u.getDate();
				break;
			case "'":
				l("'") ? b() : w = !0;
				break;
			default:
				b()
			}
			if (f < i.length && (v = i.substr(f), !/^\s+/.test(v))) throw "Extra/unparsed characters found in date: " + v;
			if (e === -1 ? e = (new Date).getFullYear() : e < 100 && (e += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (e <= d ? 0 : -100)), p > -1) {
				o = 1;
				s = p;
				do {
					if (a = this._getDaysInMonth(e, o - 1), s <= a) break;
					o++;
					s -= a
				} while (1)
			}
			if (u = this._daylightSavingAdjust(new Date(e, o - 1, s)), u.getFullYear() !== e || u.getMonth() + 1 !== o || u.getDate() !== s) throw "Invalid date";
			return u
		},
		ATOM: "yy-mm-dd",
		COOKIE: "D, dd M yy",
		ISO_8601: "yy-mm-dd",
		RFC_822: "D, d M y",
		RFC_850: "DD, dd-M-y",
		RFC_1036: "D, d M y",
		RFC_1123: "D, d M yy",
		RFC_2822: "D, d M yy",
		RSS: "D, d M y",
		TICKS: "!",
		TIMESTAMP: "@",
		W3C: "yy-mm-dd",
		_ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 864e9,
		formatDate: function(n, t, i) {
			if (!t) return "";
			var u, h = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
				c = (i ? i.dayNames : null) || this._defaults.dayNames,
				l = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
				a = (i ? i.monthNames : null) || this._defaults.monthNames,
				f = function(t) {
					var i = u + 1 < n.length && n.charAt(u + 1) === t;
					return i && u++, i
				},
				e = function(n, t, i) {
					var r = "" + t;
					if (f(n)) while (r.length < i) r = "0" + r;
					return r
				},
				s = function(n, t, i, r) {
					return f(n) ? r[t] : i[t]
				},
				r = "",
				o = !1;
			if (t) for (u = 0; u < n.length; u++) if (o) n.charAt(u) === "'" && !f("'") ? o = !1 : r += n.charAt(u);
			else switch (n.charAt(u)) {
			case "d":
				r += e("d", t.getDate(), 2);
				break;
			case "D":
				r += s("D", t.getDay(), h, c);
				break;
			case "o":
				r += e("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
				break;
			case "m":
				r += e("m", t.getMonth() + 1, 2);
				break;
			case "M":
				r += s("M", t.getMonth(), l, a);
				break;
			case "y":
				r += f("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
				break;
			case "@":
				r += t.getTime();
				break;
			case "!":
				r += t.getTime() * 1e4 + this._ticksTo1970;
				break;
			case "'":
				f("'") ? r += "'" : o = !0;
				break;
			default:
				r += n.charAt(u)
			}
			return r
		},
		_possibleChars: function(n) {
			for (var i = "", r = !1, u = function(i) {
					var r = t + 1 < n.length && n.charAt(t + 1) === i;
					return r && t++, r
				}, t = 0; t < n.length; t++) if (r) n.charAt(t) === "'" && !u("'") ? r = !1 : i += n.charAt(t);
			else switch (n.charAt(t)) {
			case "d":
			case "m":
			case "y":
			case "@":
				i += "0123456789";
				break;
			case "D":
			case "M":
				return null;
			case "'":
				u("'") ? i += "'" : r = !0;
				break;
			default:
				i += n.charAt(t)
			}
			return i
		},
		_get: function(n, i) {
			return n.settings[i] !== t ? n.settings[i] : this._defaults[i]
		},
		_setDateFromField: function(n, t) {
			if (n.input.val() !== n.lastVal) {
				var f = this._get(n, "dateFormat"),
					r = n.lastVal = n.input ? n.input.val() : null,
					u = this._getDefaultDate(n),
					i = u,
					e = this._getFormatConfig(n);
				try {
					i = this.parseDate(f, r, e) || u
				} catch (o) {
					r = t ? "" : r
				}
				n.selectedDay = i.getDate();
				n.drawMonth = n.selectedMonth = i.getMonth();
				n.drawYear = n.selectedYear = i.getFullYear();
				n.currentDay = r ? i.getDate() : 0;
				n.currentMonth = r ? i.getMonth() : 0;
				n.currentYear = r ? i.getFullYear() : 0;
				this._adjustInstDate(n)
			}
		},
		_getDefaultDate: function(n) {
			return this._restrictMinMax(n, this._determineDate(n, this._get(n, "defaultDate"), new Date))
		},
		_determineDate: function(t, i, r) {
			var f = function(n) {
					var t = new Date;
					return t.setDate(t.getDate() + n), t
				},
				e = function(i) {
					try {
						return n.datepicker.parseDate(n.datepicker._get(t, "dateFormat"), i, n.datepicker._getFormatConfig(t))
					} catch (h) {}
					for (var o = (i.toLowerCase().match(/^c/) ? n.datepicker._getDate(t) : null) || new Date, f = o.getFullYear(), e = o.getMonth(), r = o.getDate(), s = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, u = s.exec(i); u;) {
						switch (u[2] || "d") {
						case "d":
						case "D":
							r += parseInt(u[1], 10);
							break;
						case "w":
						case "W":
							r += parseInt(u[1], 10) * 7;
							break;
						case "m":
						case "M":
							e += parseInt(u[1], 10);
							r = Math.min(r, n.datepicker._getDaysInMonth(f, e));
							break;
						case "y":
						case "Y":
							f += parseInt(u[1], 10);
							r = Math.min(r, n.datepicker._getDaysInMonth(f, e))
						}
						u = s.exec(i)
					}
					return new Date(f, e, r)
				},
				u = i == null || i === "" ? r : typeof i == "string" ? e(i) : typeof i == "number" ? isNaN(i) ? r : f(i) : new Date(i.getTime());
			return u = u && u.toString() === "Invalid Date" ? r : u, u && (u.setHours(0), u.setMinutes(0), u.setSeconds(0), u.setMilliseconds(0)), this._daylightSavingAdjust(u)
		},
		_daylightSavingAdjust: function(n) {
			return n ? (n.setHours(n.getHours() > 12 ? n.getHours() + 2 : 0), n) : null
		},
		_setDate: function(n, t, i) {
			var u = !t,
				f = n.selectedMonth,
				e = n.selectedYear,
				r = this._restrictMinMax(n, this._determineDate(n, t, new Date));
			n.selectedDay = n.currentDay = r.getDate();
			n.drawMonth = n.selectedMonth = n.currentMonth = r.getMonth();
			n.drawYear = n.selectedYear = n.currentYear = r.getFullYear();
			(f !== n.selectedMonth || e !== n.selectedYear) && !i && this._notifyChange(n);
			this._adjustInstDate(n);
			n.input && n.input.val(u ? "" : this._formatDate(n))
		},
		_getDate: function(n) {
			return !n.currentYear || n.input && n.input.val() === "" ? null : this._daylightSavingAdjust(new Date(n.currentYear, n.currentMonth, n.currentDay))
		},
		_attachHandlers: function(t) {
			var u = this._get(t, "stepMonths"),
				i = "#" + t.id.replace(/\\\\/g, "\\");
			t.dpDiv.find("[data-handler]").map(function() {
				var t = {
					prev: function() {
						window["DP_jQuery_" + r].datepicker._adjustDate(i, -u, "M")
					},
					next: function() {
						window["DP_jQuery_" + r].datepicker._adjustDate(i, +u, "M")
					},
					hide: function() {
						window["DP_jQuery_" + r].datepicker._hideDatepicker()
					},
					today: function() {
						window["DP_jQuery_" + r].datepicker._gotoToday(i)
					},
					selectDay: function() {
						return window["DP_jQuery_" + r].datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
					},
					selectMonth: function() {
						return window["DP_jQuery_" + r].datepicker._selectMonthYear(i, this, "M"), !1
					},
					selectYear: function() {
						return window["DP_jQuery_" + r].datepicker._selectMonthYear(i, this, "Y"), !1
					}
				};
				n(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
			})
		},
		_generateHTML: function(n) {
			var b, s, rt, h, ut, k, ft, et, ri, c, ot, ui, fi, ei, oi, st, g, si, ht, nt, f, y, ct, p, lt, l, u, at, vt, yt, pt, tt, wt, i, bt, kt, d, a, it, dt = new Date,
				gt = this._daylightSavingAdjust(new Date(dt.getFullYear(), dt.getMonth(), dt.getDate())),
				e = this._get(n, "isRTL"),
				li = this._get(n, "showButtonPanel"),
				hi = this._get(n, "hideIfNoPrevNext"),
				ni = this._get(n, "navigationAsDateFormat"),
				o = this._getNumberOfMonths(n),
				ai = this._get(n, "showCurrentAtPos"),
				ci = this._get(n, "stepMonths"),
				ti = o[0] !== 1 || o[1] !== 1,
				ii = this._daylightSavingAdjust(n.currentDay ? new Date(n.currentYear, n.currentMonth, n.currentDay) : new Date(9999, 9, 9)),
				w = this._getMinMaxDate(n, "min"),
				v = this._getMinMaxDate(n, "max"),
				t = n.drawMonth - ai,
				r = n.drawYear;
			if (t < 0 && (t += 12, r--), v) for (b = this._daylightSavingAdjust(new Date(v.getFullYear(), v.getMonth() - o[0] * o[1] + 1, v.getDate())), b = w && b < w ? w : b; this._daylightSavingAdjust(new Date(r, t, 1)) > b;) t--, t < 0 && (t = 11, r--);
			for (n.drawMonth = t, n.drawYear = r, s = this._get(n, "prevText"), s = ni ? this.formatDate(s, this._daylightSavingAdjust(new Date(r, t - ci, 1)), this._getFormatConfig(n)) : s, rt = this._canAdjustMonth(n, -1, r, t) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (e ? "e" : "w") + "'>" + s + "<\/span><\/a>" : hi ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (e ? "e" : "w") + "'>" + s + "<\/span><\/a>", h = this._get(n, "nextText"), h = ni ? this.formatDate(h, this._daylightSavingAdjust(new Date(r, t + ci, 1)), this._getFormatConfig(n)) : h, ut = this._canAdjustMonth(n, 1, r, t) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + h + "'><span class='ui-icon ui-icon-circle-triangle-" + (e ? "w" : "e") + "'>" + h + "<\/span><\/a>" : hi ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + h + "'><span class='ui-icon ui-icon-circle-triangle-" + (e ? "w" : "e") + "'>" + h + "<\/span><\/a>", k = this._get(n, "currentText"), ft = this._get(n, "gotoCurrent") && n.currentDay ? ii : gt, k = ni ? this.formatDate(k, ft, this._getFormatConfig(n)) : k, et = n.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(n, "closeText") + "<\/button>", ri = li ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (e ? et : "") + (this._isInRange(n, ft) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + k + "<\/button>" : "") + (e ? "" : et) + "<\/div>" : "", c = parseInt(this._get(n, "firstDay"), 10), c = isNaN(c) ? 0 : c, ot = this._get(n, "showWeek"), ui = this._get(n, "dayNames"), fi = this._get(n, "dayNamesMin"), ei = this._get(n, "monthNames"), oi = this._get(n, "monthNamesShort"), st = this._get(n, "beforeShowDay"), g = this._get(n, "showOtherMonths"), si = this._get(n, "selectOtherMonths"), ht = this._getDefaultDate(n), nt = "", f, y = 0; y < o[0]; y++) {
				for (ct = "", this.maxRows = 4, p = 0; p < o[1]; p++) {
					if (lt = this._daylightSavingAdjust(new Date(r, t, n.selectedDay)), l = " ui-corner-all", u = "", ti) {
						if (u += "<div class='ui-datepicker-group", o[1] > 1) switch (p) {
						case 0:
							u += " ui-datepicker-group-first";
							l = " ui-corner-" + (e ? "right" : "left");
							break;
						case o[1] - 1:
							u += " ui-datepicker-group-last";
							l = " ui-corner-" + (e ? "left" : "right");
							break;
						default:
							u += " ui-datepicker-group-middle";
							l = ""
						}
						u += "'>"
					}
					for (u += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + l + "'>" + (/all|left/.test(l) && y === 0 ? e ? ut : rt : "") + (/all|right/.test(l) && y === 0 ? e ? rt : ut : "") + this._generateMonthYearHeader(n, t, r, w, v, y > 0 || p > 0, ei, oi) + "<\/div><table class='ui-datepicker-calendar'><thead><tr>", at = ot ? "<th class='ui-datepicker-week-col'>" + this._get(n, "weekHeader") + "<\/th>" : "", f = 0; f < 7; f++) vt = (f + c) % 7, at += "<th" + ((f + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + ui[vt] + "'>" + fi[vt] + "<\/span><\/th>";
					for (u += at + "<\/tr><\/thead><tbody>", yt = this._getDaysInMonth(r, t), r === n.selectedYear && t === n.selectedMonth && (n.selectedDay = Math.min(n.selectedDay, yt)), pt = (this._getFirstDayOfMonth(r, t) - c + 7) % 7, tt = Math.ceil((pt + yt) / 7), wt = ti ? this.maxRows > tt ? this.maxRows : tt : tt, this.maxRows = wt, i = this._daylightSavingAdjust(new Date(r, t, 1 - pt)), bt = 0; bt < wt; bt++) {
						for (u += "<tr>", kt = ot ? "<td class='ui-datepicker-week-col'>" + this._get(n, "calculateWeek")(i) + "<\/td>" : "", f = 0; f < 7; f++) d = st ? st.apply(n.input ? n.input[0] : null, [i]) : [!0, ""], a = i.getMonth() !== t, it = a && !si || !d[0] || w && i < w || v && i > v, kt += "<td class='" + ((f + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (a ? " ui-datepicker-other-month" : "") + (i.getTime() === lt.getTime() && t === n.selectedMonth && n._keyEvent || ht.getTime() === i.getTime() && ht.getTime() === lt.getTime() ? " " + this._dayOverClass : "") + (it ? " " + this._unselectableClass + " ui-state-disabled" : "") + (a && !g ? "" : " " + d[1] + (i.getTime() === ii.getTime() ? " " + this._currentClass : "") + (i.getTime() === gt.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!a || g) && d[2] ? " title='" + d[2] + "'" : "") + (it ? "" : " data-handler='selectDay' data-event='click' data-month='" + i.getMonth() + "' data-year='" + i.getFullYear() + "'") + ">" + (a && !g ? "&#xa0;" : it ? "<span class='ui-state-default'>" + i.getDate() + "<\/span>" : "<a class='ui-state-default" + (i.getTime() === gt.getTime() ? " ui-state-highlight" : "") + (i.getTime() === ii.getTime() ? " ui-state-active" : "") + (a ? " ui-priority-secondary" : "") + "' href='#'>" + i.getDate() + "<\/a>") + "<\/td>", i.setDate(i.getDate() + 1), i = this._daylightSavingAdjust(i);
						u += kt + "<\/tr>"
					}
					t++;
					t > 11 && (t = 0, r++);
					u += "<\/tbody><\/table>" + (ti ? "<\/div>" + (o[0] > 0 && p === o[1] - 1 ? "<div class='ui-datepicker-row-break'><\/div>" : "") : "");
					ct += u
				}
				nt += ct
			}
			return nt += ri, n._keyEvent = !1, nt
		},
		_generateMonthYearHeader: function(n, t, i, r, u, f, e, o) {
			var k, d, h, v, y, p, s, a, w = this._get(n, "changeMonth"),
				b = this._get(n, "changeYear"),
				g = this._get(n, "showMonthAfterYear"),
				c = "<div class='ui-datepicker-title'>",
				l = "";
			if (f || !w) l += "<span class='ui-datepicker-month'>" + e[t] + "<\/span>";
			else {
				for (k = r && r.getFullYear() === i, d = u && u.getFullYear() === i, l += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", h = 0; h < 12; h++)(!k || h >= r.getMonth()) && (!d || h <= u.getMonth()) && (l += "<option value='" + h + "'" + (h === t ? " selected='selected'" : "") + ">" + o[h] + "<\/option>");
				l += "<\/select>"
			}
			if (g || (c += l + (f || !w || !b ? "&#xa0;" : "")), !n.yearshtml) if (n.yearshtml = "", f || !b) c += "<span class='ui-datepicker-year'>" + i + "<\/span>";
			else {
				for (v = this._get(n, "yearRange").split(":"), y = (new Date).getFullYear(), p = function(n) {
					var t = n.match(/c[+\-].*/) ? i + parseInt(n.substring(1), 10) : n.match(/[+\-].*/) ? y + parseInt(n, 10) : parseInt(n, 10);
					return isNaN(t) ? y : t
				}, s = p(v[0]), a = Math.max(s, p(v[1] || "")), s = r ? Math.max(s, r.getFullYear()) : s, a = u ? Math.min(a, u.getFullYear()) : a, n.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; s <= a; s++) n.yearshtml += "<option value='" + s + "'" + (s === i ? " selected='selected'" : "") + ">" + s + "<\/option>";
				n.yearshtml += "<\/select>";
				c += n.yearshtml;
				n.yearshtml = null
			}
			return c += this._get(n, "yearSuffix"), g && (c += (f || !w || !b ? "&#xa0;" : "") + l), c += "<\/div>", c
		},
		_adjustInstDate: function(n, t, i) {
			var u = n.drawYear + (i === "Y" ? t : 0),
				f = n.drawMonth + (i === "M" ? t : 0),
				e = Math.min(n.selectedDay, this._getDaysInMonth(u, f)) + (i === "D" ? t : 0),
				r = this._restrictMinMax(n, this._daylightSavingAdjust(new Date(u, f, e)));
			n.selectedDay = r.getDate();
			n.drawMonth = n.selectedMonth = r.getMonth();
			n.drawYear = n.selectedYear = r.getFullYear();
			(i === "M" || i === "Y") && this._notifyChange(n)
		},
		_restrictMinMax: function(n, t) {
			var i = this._getMinMaxDate(n, "min"),
				r = this._getMinMaxDate(n, "max"),
				u = i && t < i ? i : t;
			return r && u > r ? r : u
		},
		_notifyChange: function(n) {
			var t = this._get(n, "onChangeMonthYear");
			t && t.apply(n.input ? n.input[0] : null, [n.selectedYear, n.selectedMonth + 1, n])
		},
		_getNumberOfMonths: function(n) {
			var t = this._get(n, "numberOfMonths");
			return t == null ? [1, 1] : typeof t == "number" ? [1, t] : t
		},
		_getMinMaxDate: function(n, t) {
			return this._determineDate(n, this._get(n, t + "Date"), null)
		},
		_getDaysInMonth: function(n, t) {
			return 32 - this._daylightSavingAdjust(new Date(n, t, 32)).getDate()
		},
		_getFirstDayOfMonth: function(n, t) {
			return new Date(n, t, 1).getDay()
		},
		_canAdjustMonth: function(n, t, i, r) {
			var f = this._getNumberOfMonths(n),
				u = this._daylightSavingAdjust(new Date(i, r + (t < 0 ? t : f[0] * f[1]), 1));
			return t < 0 && u.setDate(this._getDaysInMonth(u.getFullYear(), u.getMonth())), this._isInRange(n, u)
		},
		_isInRange: function(n, t) {
			var i, r, e = this._getMinMaxDate(n, "min"),
				o = this._getMinMaxDate(n, "max"),
				u = null,
				f = null,
				s = this._get(n, "yearRange");
			return s && (i = s.split(":"), r = (new Date).getFullYear(), u = parseInt(i[0], 10) + r, f = parseInt(i[1], 10) + r), (!e || t.getTime() >= e.getTime()) && (!o || t.getTime() <= o.getTime()) && (!u || t.getFullYear() >= u) && (!f || t.getFullYear() <= f)
		},
		_getFormatConfig: function(n) {
			var t = this._get(n, "shortYearCutoff");
			return t = typeof t != "string" ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
				shortYearCutoff: t,
				dayNamesShort: this._get(n, "dayNamesShort"),
				dayNames: this._get(n, "dayNames"),
				monthNamesShort: this._get(n, "monthNamesShort"),
				monthNames: this._get(n, "monthNames")
			}
		},
		_formatDate: function(n, t, i, r) {
			t || (n.currentDay = n.selectedDay, n.currentMonth = n.selectedMonth, n.currentYear = n.selectedYear);
			var u = t ? typeof t == "object" ? t : this._daylightSavingAdjust(new Date(r, i, t)) : this._daylightSavingAdjust(new Date(n.currentYear, n.currentMonth, n.currentDay));
			return this.formatDate(this._get(n, "dateFormat"), u, this._getFormatConfig(n))
		}
	});
	n.fn.datepicker = function(t) {
		if (!this.length) return this;
		n.datepicker.initialized || (n(document).mousedown(n.datepicker._checkExternalClick), n.datepicker.initialized = !0);
		n("#" + n.datepicker._mainDivId).length === 0 && n("body").append(n.datepicker.dpDiv);
		var i = Array.prototype.slice.call(arguments, 1);
		return typeof t != "string" || t !== "isDisabled" && t !== "getDate" && t !== "widget" ? t === "option" && arguments.length === 2 && typeof arguments[1] == "string" ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i)) : this.each(function() {
			typeof t == "string" ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this].concat(i)) : n.datepicker._attachDatepicker(this, t)
		}) : n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i))
	};
	n.datepicker = new e;
	n.datepicker.initialized = !1;
	n.datepicker.uuid = (new Date).getTime();
	n.datepicker.version = "1.10.0";
	window["DP_jQuery_" + r] = n
}(jQuery), function(n) {
	var t = {
		buttons: !0,
		height: !0,
		maxHeight: !0,
		maxWidth: !0,
		minHeight: !0,
		minWidth: !0,
		width: !0
	},
		i = {
			maxHeight: !0,
			maxWidth: !0,
			minHeight: !0,
			minWidth: !0
		};
	n.widget("ui.dialog", {
		version: "1.10.0",
		options: {
			appendTo: "body",
			autoOpen: !0,
			buttons: [],
			closeOnEscape: !0,
			closeText: "close",
			dialogClass: "",
			draggable: !0,
			hide: null,
			height: "auto",
			maxHeight: null,
			maxWidth: null,
			minHeight: 150,
			minWidth: 150,
			modal: !1,
			position: {
				my: "center",
				at: "center",
				of: window,
				collision: "fit",
				using: function(t) {
					var i = n(this).css(t).offset().top;
					i < 0 && n(this).css("top", t.top - i)
				}
			},
			resizable: !0,
			show: null,
			title: null,
			width: 300,
			beforeClose: null,
			close: null,
			drag: null,
			dragStart: null,
			dragStop: null,
			focus: null,
			open: null,
			resize: null,
			resizeStart: null,
			resizeStop: null
		},
		_create: function() {
			this.originalCss = {
				display: this.element[0].style.display,
				width: this.element[0].style.width,
				minHeight: this.element[0].style.minHeight,
				maxHeight: this.element[0].style.maxHeight,
				height: this.element[0].style.height
			};
			this.originalPosition = {
				parent: this.element.parent(),
				index: this.element.parent().children().index(this.element)
			};
			this.originalTitle = this.element.attr("title");
			this.options.title = this.options.title || this.originalTitle;
			this._createWrapper();
			this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);
			this._createTitlebar();
			this._createButtonPane();
			this.options.draggable && n.fn.draggable && this._makeDraggable();
			this.options.resizable && n.fn.resizable && this._makeResizable();
			this._isOpen = !1
		},
		_init: function() {
			this.options.autoOpen && this.open()
		},
		_appendTo: function() {
			var t = this.options.appendTo;
			return t && (t.jquery || t.nodeType) ? n(t) : this.document.find(t || "body").eq(0)
		},
		_destroy: function() {
			var n, t = this.originalPosition;
			this._destroyOverlay();
			this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();
			this.uiDialog.stop(!0, !0).remove();
			this.originalTitle && this.element.attr("title", this.originalTitle);
			n = t.parent.children().eq(t.index);
			n.length && n[0] !== this.element[0] ? n.before(this.element) : t.parent.append(this.element)
		},
		widget: function() {
			return this.uiDialog
		},
		disable: n.noop,
		enable: n.noop,
		close: function(t) {
			var i = this;
			this._isOpen && this._trigger("beforeClose", t) !== !1 && (this._isOpen = !1, this._destroyOverlay(), this.opener.filter(":focusable").focus().length || n(this.document[0].activeElement).blur(), this._hide(this.uiDialog, this.options.hide, function() {
				i._trigger("close", t)
			}))
		},
		isOpen: function() {
			return this._isOpen
		},
		moveToTop: function() {
			this._moveToTop()
		},
		_moveToTop: function(n, t) {
			var i = !! this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
			return i && !t && this._trigger("focus", n), i
		},
		open: function() {
			if (this._isOpen) {
				this._moveToTop() && this._focusTabbable();
				return
			}
			this.opener = n(this.document[0].activeElement);
			this._size();
			this._position();
			this._createOverlay();
			this._moveToTop(null, !0);
			this._show(this.uiDialog, this.options.show);
			this._focusTabbable();
			this._isOpen = !0;
			this._trigger("open");
			this._trigger("focus")
		},
		_focusTabbable: function() {
			var n = this.element.find("[autofocus]");
			n.length || (n = this.element.find(":tabbable"));
			n.length || (n = this.uiDialogButtonPane.find(":tabbable"));
			n.length || (n = this.uiDialogTitlebarClose.filter(":tabbable"));
			n.length || (n = this.uiDialog);
			n.eq(0).focus()
		},
		_keepFocus: function(t) {
			function i() {
				var t = this.document[0].activeElement,
					i = this.uiDialog[0] === t || n.contains(this.uiDialog[0], t);
				i || this._focusTabbable()
			}
			t.preventDefault();
			i.call(this);
			this._delay(i)
		},
		_createWrapper: function() {
			this.uiDialog = n("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
				tabIndex: -1,
				role: "dialog"
			}).appendTo(this._appendTo());
			this._on(this.uiDialog, {
				keydown: function(t) {
					if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === n.ui.keyCode.ESCAPE) {
						t.preventDefault();
						this.close(t);
						return
					}
					if (t.keyCode === n.ui.keyCode.TAB) {
						var i = this.uiDialog.find(":tabbable"),
							r = i.filter(":first"),
							u = i.filter(":last");
						t.target !== u[0] && t.target !== this.uiDialog[0] || !! t.shiftKey ? (t.target === r[0] || t.target === this.uiDialog[0]) && t.shiftKey && (u.focus(1), t.preventDefault()) : (r.focus(1), t.preventDefault())
					}
				},
				mousedown: function(n) {
					this._moveToTop(n) && this._focusTabbable()
				}
			});
			this.element.find("[aria-describedby]").length || this.uiDialog.attr({
				"aria-describedby": this.element.uniqueId().attr("id")
			})
		},
		_createTitlebar: function() {
			var t;
			this.uiDialogTitlebar = n("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);
			this._on(this.uiDialogTitlebar, {
				mousedown: function(t) {
					n(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
				}
			});
			this.uiDialogTitlebarClose = n("<button><\/button>").button({
				label: this.options.closeText,
				icons: {
					primary: "ui-icon-closethick"
				},
				text: !1
			}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);
			this._on(this.uiDialogTitlebarClose, {
				click: function(n) {
					n.preventDefault();
					this.close(n)
				}
			});
			t = n("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);
			this._title(t);
			this.uiDialog.attr({
				"aria-labelledby": t.attr("id")
			})
		},
		_title: function(n) {
			this.options.title || n.html("&#160;");
			n.text(this.options.title)
		},
		_createButtonPane: function() {
			this.uiDialogButtonPane = n("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
			this.uiButtonSet = n("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);
			this._createButtons()
		},
		_createButtons: function() {
			var t = this,
				i = this.options.buttons;
			if (this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), n.isEmptyObject(i)) {
				this.uiDialog.removeClass("ui-dialog-buttons");
				return
			}
			n.each(i, function(i, r) {
				var u, f;
				r = n.isFunction(r) ? {
					click: r,
					text: i
				} : r;
				r = n.extend({
					type: "button"
				}, r);
				u = r.click;
				r.click = function() {
					u.apply(t.element[0], arguments)
				};
				f = {
					icons: r.icons,
					text: r.showText
				};
				delete r.icons;
				delete r.showText;
				n("<button><\/button>", r).button(f).appendTo(t.uiButtonSet)
			});
			this.uiDialog.addClass("ui-dialog-buttons");
			this.uiDialogButtonPane.appendTo(this.uiDialog)
		},
		_makeDraggable: function() {
			function i(n) {
				return {
					position: n.position,
					offset: n.offset
				}
			}
			var t = this,
				r = this.options;
			this.uiDialog.draggable({
				cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
				handle: ".ui-dialog-titlebar",
				containment: "document",
				start: function(r, u) {
					n(this).addClass("ui-dialog-dragging");
					t._trigger("dragStart", r, i(u))
				},
				drag: function(n, r) {
					t._trigger("drag", n, i(r))
				},
				stop: function(u, f) {
					r.position = [f.position.left - t.document.scrollLeft(), f.position.top - t.document.scrollTop()];
					n(this).removeClass("ui-dialog-dragging");
					t._trigger("dragStop", u, i(f))
				}
			})
		},
		_makeResizable: function() {
			function i(n) {
				return {
					originalPosition: n.originalPosition,
					originalSize: n.originalSize,
					position: n.position,
					size: n.size
				}
			}
			var r = this,
				t = this.options,
				u = t.resizable,
				f = this.uiDialog.css("position"),
				e = typeof u == "string" ? u : "n,e,s,w,se,sw,ne,nw";
			this.uiDialog.resizable({
				cancel: ".ui-dialog-content",
				containment: "document",
				alsoResize: this.element,
				maxWidth: t.maxWidth,
				maxHeight: t.maxHeight,
				minWidth: t.minWidth,
				minHeight: this._minHeight(),
				handles: e,
				start: function(t, u) {
					n(this).addClass("ui-dialog-resizing");
					r._trigger("resizeStart", t, i(u))
				},
				resize: function(n, t) {
					r._trigger("resize", n, i(t))
				},
				stop: function(u, f) {
					t.height = n(this).height();
					t.width = n(this).width();
					n(this).removeClass("ui-dialog-resizing");
					r._trigger("resizeStop", u, i(f))
				}
			}).css("position", f)
		},
		_minHeight: function() {
			var n = this.options;
			return n.height === "auto" ? n.minHeight : Math.min(n.minHeight, n.height)
		},
		_position: function() {
			var n = this.uiDialog.is(":visible");
			n || this.uiDialog.show();
			this.uiDialog.position(this.options.position);
			n || this.uiDialog.hide()
		},
		_setOptions: function(r) {
			var e = this,
				u = !1,
				f = {};
			n.each(r, function(n, r) {
				e._setOption(n, r);
				n in t && (u = !0);
				n in i && (f[n] = r)
			});
			u && (this._size(), this._position());
			this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", f)
		},
		_setOption: function(n, t) {
			var u, r, i = this.uiDialog;
			(n === "dialogClass" && i.removeClass(this.options.dialogClass).addClass(t), n !== "disabled") && (this._super(n, t), n === "appendTo" && this.uiDialog.appendTo(this._appendTo()), n === "buttons" && this._createButtons(), n === "closeText" && this.uiDialogTitlebarClose.button({
				label: "" + t
			}), n === "draggable" && (u = i.is(":data(ui-draggable)"), u && !t && i.draggable("destroy"), !u && t && this._makeDraggable()), n === "position" && this._position(), n === "resizable" && (r = i.is(":data(ui-resizable)"), r && !t && i.resizable("destroy"), r && typeof t == "string" && i.resizable("option", "handles", t), !r && t !== !1 && this._makeResizable()), n === "title" && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
		},
		_size: function() {
			var t, i, r, n = this.options;
			this.element.show().css({
				width: "auto",
				minHeight: 0,
				maxHeight: "none",
				height: 0
			});
			n.minWidth > n.width && (n.width = n.minWidth);
			t = this.uiDialog.css({
				height: "auto",
				width: n.width
			}).outerHeight();
			i = Math.max(0, n.minHeight - t);
			r = typeof n.maxHeight == "number" ? Math.max(0, n.maxHeight - t) : "none";
			n.height === "auto" ? this.element.css({
				minHeight: i,
				maxHeight: r,
				height: "auto"
			}) : this.element.height(Math.max(0, n.height - t));
			this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
		},
		_createOverlay: function() {
			this.options.modal && (n.ui.dialog.overlayInstances || this._delay(function() {
				n.ui.dialog.overlayInstances && this._on(this.document, {
					focusin: function(t) {
						n(t.target).closest(".ui-dialog").length || (t.preventDefault(), n(".ui-dialog:visible:last .ui-dialog-content").data("ui-dialog")._focusTabbable())
					}
				})
			}), this.overlay = n("<div>").addClass("ui-widget-overlay ui-front").appendTo(this.document[0].body), this._on(this.overlay, {
				mousedown: "_keepFocus"
			}), n.ui.dialog.overlayInstances++)
		},
		_destroyOverlay: function() {
			this.options.modal && (n.ui.dialog.overlayInstances--, n.ui.dialog.overlayInstances || this._off(this.document, "focusin"), this.overlay.remove())
		}
	});
	n.ui.dialog.overlayInstances = 0;
	n.uiBackCompat !== !1 && n.widget("ui.dialog", n.ui.dialog, {
		_position: function() {
			var t = this.options.position,
				i = [],
				r = [0, 0],
				u;
			t ? ((typeof t == "string" || typeof t == "object" && "0" in t) && (i = t.split ? t.split(" ") : [t[0], t[1]], i.length === 1 && (i[1] = i[0]), n.each(["left", "top"], function(n, t) {
				+i[n] === i[n] && (r[n] = i[n], i[n] = t)
			}), t = {
				my: i[0] + (r[0] < 0 ? r[0] : "+" + r[0]) + " " + i[1] + (r[1] < 0 ? r[1] : "+" + r[1]),
				at: i.join(" ")
			}), t = n.extend({}, n.ui.dialog.prototype.options.position, t)) : t = n.ui.dialog.prototype.options.position;
			u = this.uiDialog.is(":visible");
			u || this.uiDialog.show();
			this.uiDialog.position(t);
			u || this.uiDialog.hide()
		}
	})
}(jQuery), function(n) {
	n.widget("ui.draggable", n.ui.mouse, {
		version: "1.10.0",
		widgetEventPrefix: "drag",
		options: {
			addClasses: !0,
			appendTo: "parent",
			axis: !1,
			connectToSortable: !1,
			containment: !1,
			cursor: "auto",
			cursorAt: !1,
			grid: !1,
			handle: !1,
			helper: "original",
			iframeFix: !1,
			opacity: !1,
			refreshPositions: !1,
			revert: !1,
			revertDuration: 500,
			scope: "default",
			scroll: !0,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			snap: !1,
			snapMode: "both",
			snapTolerance: 20,
			stack: !1,
			zIndex: !1,
			drag: null,
			start: null,
			stop: null
		},
		_create: function() {
			this.options.helper !== "original" || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative");
			this.options.addClasses && this.element.addClass("ui-draggable");
			this.options.disabled && this.element.addClass("ui-draggable-disabled");
			this._mouseInit()
		},
		_destroy: function() {
			this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
			this._mouseDestroy()
		},
		_mouseCapture: function(t) {
			var i = this.options;
			return this.helper || i.disabled || n(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (n(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function() {
				n("<div class='ui-draggable-iframeFix' style='background: #fff;'><\/div>").css({
					width: this.offsetWidth + "px",
					height: this.offsetHeight + "px",
					position: "absolute",
					opacity: "0.001",
					zIndex: 1e3
				}).css(n(this).offset()).appendTo("body")
			}), !0) : !1)
		},
		_mouseStart: function(t) {
			var i = this.options;
			return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), n.ui.ddmanager && (n.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
				top: this.offset.top - this.margins.top,
				left: this.offset.left - this.margins.left
			}, n.extend(this.offset, {
				click: {
					left: t.pageX - this.offset.left,
					top: t.pageY - this.offset.top
				},
				parent: this._getParentOffset(),
				relative: this._getRelativeOffset()
			}), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), i.containment && this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), n.ui.ddmanager && n.ui.ddmanager.dragStart(this, t), !0)
		},
		_mouseDrag: function(t, i) {
			if (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), !i) {
				var r = this._uiHash();
				if (this._trigger("drag", t, r) === !1) return this._mouseUp({}), !1;
				this.position = r.position
			}
			return this.options.axis && this.options.axis === "y" || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && this.options.axis === "x" || (this.helper[0].style.top = this.position.top + "px"), n.ui.ddmanager && n.ui.ddmanager.drag(this, t), !1
		},
		_mouseStop: function(t) {
			var i, u = this,
				f = !1,
				r = !1;
			for (n.ui.ddmanager && !this.options.dropBehaviour && (r = n.ui.ddmanager.drop(this, t)), this.dropped && (r = this.dropped, this.dropped = !1), i = this.element[0]; i && (i = i.parentNode);) i === document && (f = !0);
			return !f && this.options.helper === "original" ? !1 : (this.options.revert === "invalid" && !r || this.options.revert === "valid" && r || this.options.revert === !0 || n.isFunction(this.options.revert) && this.options.revert.call(this.element, r) ? n(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
				u._trigger("stop", t) !== !1 && u._clear()
			}) : this._trigger("stop", t) !== !1 && this._clear(), !1)
		},
		_mouseUp: function(t) {
			return n("div.ui-draggable-iframeFix").each(function() {
				this.parentNode.removeChild(this)
			}), n.ui.ddmanager && n.ui.ddmanager.dragStop(this, t), n.ui.mouse.prototype._mouseUp.call(this, t)
		},
		cancel: function() {
			return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
		},
		_getHandle: function(t) {
			var i = !this.options.handle || !n(this.options.handle, this.element).length ? !0 : !1;
			return n(this.options.handle, this.element).find("*").addBack().each(function() {
				this === t.target && (i = !0)
			}), i
		},
		_createHelper: function(t) {
			var r = this.options,
				i = n.isFunction(r.helper) ? n(r.helper.apply(this.element[0], [t])) : r.helper === "clone" ? this.element.clone().removeAttr("id") : this.element;
			return i.parents("body").length || i.appendTo(r.appendTo === "parent" ? this.element[0].parentNode : r.appendTo), i[0] !== this.element[0] && !/(fixed|absolute)/.test(i.css("position")) && i.css("position", "absolute"), i
		},
		_adjustOffsetFromHelper: function(t) {
			typeof t == "string" && (t = t.split(" "));
			n.isArray(t) && (t = {
				left: +t[0],
				top: +t[1] || 0
			});
			"left" in t && (this.offset.click.left = t.left + this.margins.left);
			"right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left);
			"top" in t && (this.offset.click.top = t.top + this.margins.top);
			"bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
		},
		_getParentOffset: function() {
			this.offsetParent = this.helper.offsetParent();
			var t = this.offsetParent.offset();
			return this.cssPosition === "absolute" && this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && n.ui.ie) && (t = {
				top: 0,
				left: 0
			}), {
				top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset: function() {
			if (this.cssPosition === "relative") {
				var n = this.element.position();
				return {
					top: n.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
					left: n.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
				}
			}
			return {
				top: 0,
				left: 0
			}
		},
		_cacheMargins: function() {
			this.margins = {
				left: parseInt(this.element.css("marginLeft"), 10) || 0,
				top: parseInt(this.element.css("marginTop"), 10) || 0,
				right: parseInt(this.element.css("marginRight"), 10) || 0,
				bottom: parseInt(this.element.css("marginBottom"), 10) || 0
			}
		},
		_cacheHelperProportions: function() {
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			}
		},
		_setContainment: function() {
			var r, u, t, i = this.options;
			if (i.containment === "parent" && (i.containment = this.helper[0].parentNode), (i.containment === "document" || i.containment === "window") && (this.containment = [i.containment === "document" ? 0 : n(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, i.containment === "document" ? 0 : n(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (i.containment === "document" ? 0 : n(window).scrollLeft()) + n(i.containment === "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (i.containment === "document" ? 0 : n(window).scrollTop()) + (n(i.containment === "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(i.containment) || i.containment.constructor === Array) i.containment.constructor === Array && (this.containment = i.containment);
			else {
				if (u = n(i.containment), t = u[0], !t) return;
				r = n(t).css("overflow") !== "hidden";
				this.containment = [(parseInt(n(t).css("borderLeftWidth"), 10) || 0) + (parseInt(n(t).css("paddingLeft"), 10) || 0), (parseInt(n(t).css("borderTopWidth"), 10) || 0) + (parseInt(n(t).css("paddingTop"), 10) || 0), (r ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(n(t).css("borderLeftWidth"), 10) || 0) - (parseInt(n(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (r ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(n(t).css("borderTopWidth"), 10) || 0) - (parseInt(n(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom];
				this.relative_container = u
			}
		},
		_convertPositionTo: function(t, i) {
			i || (i = this.position);
			var r = t === "absolute" ? 1 : -1,
				u = this.cssPosition !== "absolute" || this.scrollParent[0] !== document && !! n.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
				f = /(html|body)/i.test(u[0].tagName);
			return {
				top: i.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : f ? 0 : u.scrollTop()) * r,
				left: i.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : f ? 0 : u.scrollLeft()) * r
			}
		},
		_generatePosition: function(t) {
			var i, e, u, f, r = this.options,
				h = this.cssPosition !== "absolute" || this.scrollParent[0] !== document && !! n.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
				c = /(html|body)/i.test(h[0].tagName),
				o = t.pageX,
				s = t.pageY;
			return this.originalPosition && (this.containment && (this.relative_container ? (e = this.relative_container.offset(), i = [this.containment[0] + e.left, this.containment[1] + e.top, this.containment[2] + e.left, this.containment[3] + e.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (o = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (s = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (o = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (s = i[3] + this.offset.click.top)), r.grid && (u = r.grid[1] ? this.originalPageY + Math.round((s - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, s = i ? u - this.offset.click.top >= i[1] || u - this.offset.click.top > i[3] ? u : u - this.offset.click.top >= i[1] ? u - r.grid[1] : u + r.grid[1] : u, f = r.grid[0] ? this.originalPageX + Math.round((o - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, o = i ? f - this.offset.click.left >= i[0] || f - this.offset.click.left > i[2] ? f : f - this.offset.click.left >= i[0] ? f - r.grid[0] : f + r.grid[0] : f)), {
				top: s - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : c ? 0 : h.scrollTop()),
				left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : c ? 0 : h.scrollLeft())
			}
		},
		_clear: function() {
			this.helper.removeClass("ui-draggable-dragging");
			this.helper[0] !== this.element[0] && !this.cancelHelperRemoval && this.helper.remove();
			this.helper = null;
			this.cancelHelperRemoval = !1
		},
		_trigger: function(t, i, r) {
			return r = r || this._uiHash(), n.ui.plugin.call(this, t, [i, r]), t === "drag" && (this.positionAbs = this._convertPositionTo("absolute")), n.Widget.prototype._trigger.call(this, t, i, r)
		},
		plugins: {},
		_uiHash: function() {
			return {
				helper: this.helper,
				position: this.position,
				originalPosition: this.originalPosition,
				offset: this.positionAbs
			}
		}
	});
	n.ui.plugin.add("draggable", "connectToSortable", {
		start: function(t, i) {
			var r = n(this).data("ui-draggable"),
				u = r.options,
				f = n.extend({}, i, {
					item: r.element
				});
			r.sortables = [];
			n(u.connectToSortable).each(function() {
				var i = n.data(this, "ui-sortable");
				i && !i.options.disabled && (r.sortables.push({
					instance: i,
					shouldRevert: i.options.revert
				}), i.refreshPositions(), i._trigger("activate", t, f))
			})
		},
		stop: function(t, i) {
			var r = n(this).data("ui-draggable"),
				u = n.extend({}, i, {
					item: r.element
				});
			n.each(r.sortables, function() {
				this.instance.isOver ? (this.instance.isOver = 0, r.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, r.options.helper === "original" && this.instance.currentItem.css({
					top: "auto",
					left: "auto"
				})) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, u))
			})
		},
		drag: function(t, i) {
			var r = n(this).data("ui-draggable"),
				u = this;
			n.each(r.sortables, function() {
				var f = !1,
					e = this;
				this.instance.positionAbs = r.positionAbs;
				this.instance.helperProportions = r.helperProportions;
				this.instance.offset.click = r.offset.click;
				this.instance._intersectsWith(this.instance.containerCache) && (f = !0, n.each(r.sortables, function() {
					return this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this !== e && this.instance._intersectsWith(this.instance.containerCache) && n.ui.contains(e.instance.element[0], this.instance.element[0]) && (f = !1), f
				}));
				f ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = n(u).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
					return i.helper[0]
				}, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = r.offset.click.top, this.instance.offset.click.left = r.offset.click.left, this.instance.offset.parent.left -= r.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= r.offset.parent.top - this.instance.offset.parent.top, r._trigger("toSortable", t), r.dropped = this.instance.element, r.currentItem = r.element, this.instance.fromOutside = r), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), r._trigger("fromSortable", t), r.dropped = !1)
			})
		}
	});
	n.ui.plugin.add("draggable", "cursor", {
		start: function() {
			var t = n("body"),
				i = n(this).data("ui-draggable").options;
			t.css("cursor") && (i._cursor = t.css("cursor"));
			t.css("cursor", i.cursor)
		},
		stop: function() {
			var t = n(this).data("ui-draggable").options;
			t._cursor && n("body").css("cursor", t._cursor)
		}
	});
	n.ui.plugin.add("draggable", "opacity", {
		start: function(t, i) {
			var r = n(i.helper),
				u = n(this).data("ui-draggable").options;
			r.css("opacity") && (u._opacity = r.css("opacity"));
			r.css("opacity", u.opacity)
		},
		stop: function(t, i) {
			var r = n(this).data("ui-draggable").options;
			r._opacity && n(i.helper).css("opacity", r._opacity)
		}
	});
	n.ui.plugin.add("draggable", "scroll", {
		start: function() {
			var t = n(this).data("ui-draggable");
			t.scrollParent[0] !== document && t.scrollParent[0].tagName !== "HTML" && (t.overflowOffset = t.scrollParent.offset())
		},
		drag: function(t) {
			var r = n(this).data("ui-draggable"),
				i = r.options,
				u = !1;
			r.scrollParent[0] !== document && r.scrollParent[0].tagName !== "HTML" ? (i.axis && i.axis === "x" || (r.overflowOffset.top + r.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? r.scrollParent[0].scrollTop = u = r.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - r.overflowOffset.top < i.scrollSensitivity && (r.scrollParent[0].scrollTop = u = r.scrollParent[0].scrollTop - i.scrollSpeed)), i.axis && i.axis === "y" || (r.overflowOffset.left + r.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? r.scrollParent[0].scrollLeft = u = r.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - r.overflowOffset.left < i.scrollSensitivity && (r.scrollParent[0].scrollLeft = u = r.scrollParent[0].scrollLeft - i.scrollSpeed))) : (i.axis && i.axis === "x" || (t.pageY - n(document).scrollTop() < i.scrollSensitivity ? u = n(document).scrollTop(n(document).scrollTop() - i.scrollSpeed) : n(window).height() - (t.pageY - n(document).scrollTop()) < i.scrollSensitivity && (u = n(document).scrollTop(n(document).scrollTop() + i.scrollSpeed))), i.axis && i.axis === "y" || (t.pageX - n(document).scrollLeft() < i.scrollSensitivity ? u = n(document).scrollLeft(n(document).scrollLeft() - i.scrollSpeed) : n(window).width() - (t.pageX - n(document).scrollLeft()) < i.scrollSensitivity && (u = n(document).scrollLeft(n(document).scrollLeft() + i.scrollSpeed))));
			u !== !1 && n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(r, t)
		}
	});
	n.ui.plugin.add("draggable", "snap", {
		start: function() {
			var t = n(this).data("ui-draggable"),
				i = t.options;
			t.snapElements = [];
			n(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function() {
				var i = n(this),
					r = i.offset();
				this !== t.element[0] && t.snapElements.push({
					item: this,
					width: i.outerWidth(),
					height: i.outerHeight(),
					top: r.top,
					left: r.left
				})
			})
		},
		drag: function(t, i) {
			for (var c, l, a, v, e, s, o, h, k, r = n(this).data("ui-draggable"), d = r.options, u = d.snapTolerance, y = i.offset.left, w = y + r.helperProportions.width, p = i.offset.top, b = p + r.helperProportions.height, f = r.snapElements.length - 1; f >= 0; f--) {
				if (e = r.snapElements[f].left, s = e + r.snapElements[f].width, o = r.snapElements[f].top, h = o + r.snapElements[f].height, !(e - u < y && y < s + u && o - u < p && p < h + u || e - u < y && y < s + u && o - u < b && b < h + u || e - u < w && w < s + u && o - u < p && p < h + u || e - u < w && w < s + u && o - u < b && b < h + u)) {
					r.snapElements[f].snapping && r.options.snap.release && r.options.snap.release.call(r.element, t, n.extend(r._uiHash(), {
						snapItem: r.snapElements[f].item
					}));
					r.snapElements[f].snapping = !1;
					continue
				}
				d.snapMode !== "inner" && (c = Math.abs(o - b) <= u, l = Math.abs(h - p) <= u, a = Math.abs(e - w) <= u, v = Math.abs(s - y) <= u, c && (i.position.top = r._convertPositionTo("relative", {
					top: o - r.helperProportions.height,
					left: 0
				}).top - r.margins.top), l && (i.position.top = r._convertPositionTo("relative", {
					top: h,
					left: 0
				}).top - r.margins.top), a && (i.position.left = r._convertPositionTo("relative", {
					top: 0,
					left: e - r.helperProportions.width
				}).left - r.margins.left), v && (i.position.left = r._convertPositionTo("relative", {
					top: 0,
					left: s
				}).left - r.margins.left));
				k = c || l || a || v;
				d.snapMode !== "outer" && (c = Math.abs(o - p) <= u, l = Math.abs(h - b) <= u, a = Math.abs(e - y) <= u, v = Math.abs(s - w) <= u, c && (i.position.top = r._convertPositionTo("relative", {
					top: o,
					left: 0
				}).top - r.margins.top), l && (i.position.top = r._convertPositionTo("relative", {
					top: h - r.helperProportions.height,
					left: 0
				}).top - r.margins.top), a && (i.position.left = r._convertPositionTo("relative", {
					top: 0,
					left: e
				}).left - r.margins.left), v && (i.position.left = r._convertPositionTo("relative", {
					top: 0,
					left: s - r.helperProportions.width
				}).left - r.margins.left));
				!r.snapElements[f].snapping && (c || l || a || v || k) && r.options.snap.snap && r.options.snap.snap.call(r.element, t, n.extend(r._uiHash(), {
					snapItem: r.snapElements[f].item
				}));
				r.snapElements[f].snapping = c || l || a || v || k
			}
		}
	});
	n.ui.plugin.add("draggable", "stack", {
		start: function() {
			var i, r = n(this).data("ui-draggable").options,
				t = n.makeArray(n(r.stack)).sort(function(t, i) {
					return (parseInt(n(t).css("zIndex"), 10) || 0) - (parseInt(n(i).css("zIndex"), 10) || 0)
				});
			t.length && (i = parseInt(t[0].style.zIndex, 10) || 0, n(t).each(function(n) {
				this.style.zIndex = i + n
			}), this[0].style.zIndex = i + t.length)
		}
	});
	n.ui.plugin.add("draggable", "zIndex", {
		start: function(t, i) {
			var r = n(i.helper),
				u = n(this).data("ui-draggable").options;
			r.css("zIndex") && (u._zIndex = r.css("zIndex"));
			r.css("zIndex", u.zIndex)
		},
		stop: function(t, i) {
			var r = n(this).data("ui-draggable").options;
			r._zIndex && n(i.helper).css("zIndex", r._zIndex)
		}
	})
}(jQuery), function(n) {
	function t(n, t, i) {
		return n > t && n < t + i
	}
	n.widget("ui.droppable", {
		version: "1.10.0",
		widgetEventPrefix: "drop",
		options: {
			accept: "*",
			activeClass: !1,
			addClasses: !0,
			greedy: !1,
			hoverClass: !1,
			scope: "default",
			tolerance: "intersect",
			activate: null,
			deactivate: null,
			drop: null,
			out: null,
			over: null
		},
		_create: function() {
			var t = this.options,
				i = t.accept;
			this.isover = !1;
			this.isout = !0;
			this.accept = n.isFunction(i) ? i : function(n) {
				return n.is(i)
			};
			this.proportions = {
				width: this.element[0].offsetWidth,
				height: this.element[0].offsetHeight
			};
			n.ui.ddmanager.droppables[t.scope] = n.ui.ddmanager.droppables[t.scope] || [];
			n.ui.ddmanager.droppables[t.scope].push(this);
			t.addClasses && this.element.addClass("ui-droppable")
		},
		_destroy: function() {
			for (var t = 0, i = n.ui.ddmanager.droppables[this.options.scope]; t < i.length; t++) i[t] === this && i.splice(t, 1);
			this.element.removeClass("ui-droppable ui-droppable-disabled")
		},
		_setOption: function(t, i) {
			t === "accept" && (this.accept = n.isFunction(i) ? i : function(n) {
				return n.is(i)
			});
			n.Widget.prototype._setOption.apply(this, arguments)
		},
		_activate: function(t) {
			var i = n.ui.ddmanager.current;
			this.options.activeClass && this.element.addClass(this.options.activeClass);
			i && this._trigger("activate", t, this.ui(i))
		},
		_deactivate: function(t) {
			var i = n.ui.ddmanager.current;
			this.options.activeClass && this.element.removeClass(this.options.activeClass);
			i && this._trigger("deactivate", t, this.ui(i))
		},
		_over: function(t) {
			var i = n.ui.ddmanager.current;
			i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(i)))
		},
		_out: function(t) {
			var i = n.ui.ddmanager.current;
			i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(i)))
		},
		_drop: function(t, i) {
			var r = i || n.ui.ddmanager.current,
				u = !1;
			return !r || (r.currentItem || r.element)[0] === this.element[0] ? !1 : (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
				var t = n.data(this, "ui-droppable");
				if (t.options.greedy && !t.options.disabled && t.options.scope === r.options.scope && t.accept.call(t.element[0], r.currentItem || r.element) && n.ui.intersect(r, n.extend(t, {
					offset: t.element.offset()
				}), t.options.tolerance)) return u = !0, !1
			}), u ? !1 : this.accept.call(this.element[0], r.currentItem || r.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(r)), this.element) : !1)
		},
		ui: function(n) {
			return {
				draggable: n.currentItem || n.element,
				helper: n.helper,
				position: n.position,
				offset: n.positionAbs
			}
		}
	});
	n.ui.intersect = function(n, i, r) {
		if (!i.offset) return !1;
		var a, v, e = (n.positionAbs || n.position.absolute).left,
			s = e + n.helperProportions.width,
			o = (n.positionAbs || n.position.absolute).top,
			h = o + n.helperProportions.height,
			u = i.offset.left,
			c = u + i.proportions.width,
			f = i.offset.top,
			l = f + i.proportions.height;
		switch (r) {
		case "fit":
			return u <= e && s <= c && f <= o && h <= l;
		case "intersect":
			return u < e + n.helperProportions.width / 2 && s - n.helperProportions.width / 2 < c && f < o + n.helperProportions.height / 2 && h - n.helperProportions.height / 2 < l;
		case "pointer":
			return a = (n.positionAbs || n.position.absolute).left + (n.clickOffset || n.offset.click).left, v = (n.positionAbs || n.position.absolute).top + (n.clickOffset || n.offset.click).top, t(v, f, i.proportions.height) && t(a, u, i.proportions.width);
		case "touch":
			return (o >= f && o <= l || h >= f && h <= l || o < f && h > l) && (e >= u && e <= c || s >= u && s <= c || e < u && s > c);
		default:
			return !1
		}
	};
	n.ui.ddmanager = {
		current: null,
		droppables: {
			"default": []
		},
		prepareOffsets: function(t, i) {
			var r, f, u = n.ui.ddmanager.droppables[t.options.scope] || [],
				o = i ? i.type : null,
				e = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
			n: for (r = 0; r < u.length; r++) if (!u[r].options.disabled && (!t || u[r].accept.call(u[r].element[0], t.currentItem || t.element))) {
				for (f = 0; f < e.length; f++) if (e[f] === u[r].element[0]) {
					u[r].proportions.height = 0;
					continue n
				}(u[r].visible = u[r].element.css("display") !== "none", u[r].visible) && (o === "mousedown" && u[r]._activate.call(u[r], i), u[r].offset = u[r].element.offset(), u[r].proportions = {
					width: u[r].element[0].offsetWidth,
					height: u[r].element[0].offsetHeight
				})
			}
		},
		drop: function(t, i) {
			var r = !1;
			return n.each(n.ui.ddmanager.droppables[t.options.scope] || [], function() {
				this.options && (!this.options.disabled && this.visible && n.ui.intersect(t, this, this.options.tolerance) && (r = this._drop.call(this, i) || r), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
			}), r
		},
		dragStart: function(t, i) {
			t.element.parentsUntil("body").bind("scroll.droppable", function() {
				t.options.refreshPositions || n.ui.ddmanager.prepareOffsets(t, i)
			})
		},
		drag: function(t, i) {
			t.options.refreshPositions && n.ui.ddmanager.prepareOffsets(t, i);
			n.each(n.ui.ddmanager.droppables[t.options.scope] || [], function() {
				if (!this.options.disabled && !this.greedyChild && this.visible) {
					var r, e, f, o = n.ui.intersect(t, this, this.options.tolerance),
						u = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
					u && (this.options.greedy && (e = this.options.scope, f = this.element.parents(":data(ui-droppable)").filter(function() {
						return n.data(this, "ui-droppable").options.scope === e
					}), f.length && (r = n.data(f[0], "ui-droppable"), r.greedyChild = u === "isover")), r && u === "isover" && (r.isover = !1, r.isout = !0, r._out.call(r, i)), this[u] = !0, this[u === "isout" ? "isover" : "isout"] = !1, this[u === "isover" ? "_over" : "_out"].call(this, i), r && u === "isout" && (r.isout = !1, r.isover = !0, r._over.call(r, i)))
				}
			})
		},
		dragStop: function(t, i) {
			t.element.parentsUntil("body").unbind("scroll.droppable");
			t.options.refreshPositions || n.ui.ddmanager.prepareOffsets(t, i)
		}
	}
}(jQuery);
jQuery.effects ||
function(n, t) {
	var i = "ui-effects-";
	n.effects = {
		effect: {}
	}, function(n, t) {
		function f(n, t, i) {
			var r = h[t.type] || {};
			return n == null ? i || !t.def ? null : t.def : (n = r.floor ? ~~n : parseFloat(n), isNaN(n) ? t.def : r.mod ? (n + r.mod) % r.mod : 0 > n ? 0 : r.max < n ? r.max : n)
		}
		function s(t) {
			var f = i(),
				o = f._rgba = [];
			return t = t.toLowerCase(), r(v, function(n, i) {
				var r, s = i.re.exec(t),
					h = s && i.parse(s),
					e = i.space || "rgba";
				if (h) return r = f[e](h), f[u[e].cache] = r[u[e].cache], o = f._rgba = r._rgba, !1
			}), o.length ? (o.join() === "0,0,0,0" && n.extend(o, e.transparent), f) : e[t]
		}
		function o(n, t, i) {
			return i = (i + 1) % 1, i * 6 < 1 ? n + (t - n) * i * 6 : i * 2 < 1 ? t : i * 3 < 2 ? n + (t - n) * (2 / 3 - i) * 6 : n
		}
		var a = /^([\-+])=\s*(\d+\.?\d*)/,
			v = [{
				re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
				parse: function(n) {
					return [n[1], n[2], n[3], n[4]]
				}
			}, {
				re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
				parse: function(n) {
					return [n[1] * 2.55, n[2] * 2.55, n[3] * 2.55, n[4]]
				}
			}, {
				re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
				parse: function(n) {
					return [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16)]
				}
			}, {
				re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
				parse: function(n) {
					return [parseInt(n[1] + n[1], 16), parseInt(n[2] + n[2], 16), parseInt(n[3] + n[3], 16)]
				}
			}, {
				re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
				space: "hsla",
				parse: function(n) {
					return [n[1], n[2] / 100, n[3] / 100, n[4]]
				}
			}],
			i = n.Color = function(t, i, r, u) {
				return new n.Color.fn.parse(t, i, r, u)
			},
			u = {
				rgba: {
					props: {
						red: {
							idx: 0,
							type: "byte"
						},
						green: {
							idx: 1,
							type: "byte"
						},
						blue: {
							idx: 2,
							type: "byte"
						}
					}
				},
				hsla: {
					props: {
						hue: {
							idx: 0,
							type: "degrees"
						},
						saturation: {
							idx: 1,
							type: "percent"
						},
						lightness: {
							idx: 2,
							type: "percent"
						}
					}
				}
			},
			h = {
				byte: {
					floor: !0,
					max: 255
				},
				percent: {
					max: 1
				},
				degrees: {
					mod: 360,
					floor: !0
				}
			},
			c = i.support = {},
			l = n("<p>")[0],
			e, r = n.each;
		l.style.cssText = "background-color:rgba(1,1,1,.5)";
		c.rgba = l.style.backgroundColor.indexOf("rgba") > -1;
		r(u, function(n, t) {
			t.cache = "_" + n;
			t.props.alpha = {
				idx: 3,
				type: "percent",
				def: 1
			}
		});
		i.fn = n.extend(i.prototype, {
			parse: function(o, h, c, l) {
				if (o === t) return this._rgba = [null, null, null, null], this;
				(o.jquery || o.nodeType) && (o = n(o).css(h), h = t);
				var a = this,
					v = n.type(o),
					y = this._rgba = [];
				return (h !== t && (o = [o, h, c, l], v = "array"), v === "string") ? this.parse(s(o) || e._default) : v === "array" ? (r(u.rgba.props, function(n, t) {
					y[t.idx] = f(o[t.idx], t)
				}), this) : v === "object" ? (o instanceof i ? r(u, function(n, t) {
					o[t.cache] && (a[t.cache] = o[t.cache].slice())
				}) : r(u, function(t, i) {
					var u = i.cache;
					r(i.props, function(n, t) {
						if (!a[u] && i.to) {
							if (n === "alpha" || o[n] == null) return;
							a[u] = i.to(a._rgba)
						}
						a[u][t.idx] = f(o[n], t, !0)
					});
					a[u] && n.inArray(null, a[u].slice(0, 3)) < 0 && (a[u][3] = 1, i.from && (a._rgba = i.from(a[u])))
				}), this) : void 0
			},
			is: function(n) {
				var e = i(n),
					t = !0,
					f = this;
				return r(u, function(n, i) {
					var o, u = e[i.cache];
					return u && (o = f[i.cache] || i.to && i.to(f._rgba) || [], r(i.props, function(n, i) {
						if (u[i.idx] != null) return t = u[i.idx] === o[i.idx], t
					})), t
				}), t
			},
			_space: function() {
				var n = [],
					t = this;
				return r(u, function(i, r) {
					t[r.cache] && n.push(i)
				}), n.pop()
			},
			transition: function(n, t) {
				var e = i(n),
					c = e._space(),
					o = u[c],
					l = this.alpha() === 0 ? i("transparent") : this,
					a = l[o.cache] || o.to(l._rgba),
					s = a.slice();
				return e = e[o.cache], r(o.props, function(n, i) {
					var c = i.idx,
						r = a[c],
						u = e[c],
						o = h[i.type] || {};
					u !== null && (r === null ? s[c] = u : (o.mod && (u - r > o.mod / 2 ? r += o.mod : r - u > o.mod / 2 && (r -= o.mod)), s[c] = f((u - r) * t + r, i)))
				}), this[c](s)
			},
			blend: function(t) {
				if (this._rgba[3] === 1) return this;
				var r = this._rgba.slice(),
					u = r.pop(),
					f = i(t)._rgba;
				return i(n.map(r, function(n, t) {
					return (1 - u) * f[t] + u * n
				}))
			},
			toRgbaString: function() {
				var i = "rgba(",
					t = n.map(this._rgba, function(n, t) {
						return n == null ? t > 2 ? 1 : 0 : n
					});
				return t[3] === 1 && (t.pop(), i = "rgb("), i + t.join() + ")"
			},
			toHslaString: function() {
				var i = "hsla(",
					t = n.map(this.hsla(), function(n, t) {
						return n == null && (n = t > 2 ? 1 : 0), t && t < 3 && (n = Math.round(n * 100) + "%"), n
					});
				return t[3] === 1 && (t.pop(), i = "hsl("), i + t.join() + ")"
			},
			toHexString: function(t) {
				var i = this._rgba.slice(),
					r = i.pop();
				return t && i.push(~~ (r * 255)), "#" + n.map(i, function(n) {
					return n = (n || 0).toString(16), n.length === 1 ? "0" + n : n
				}).join("")
			},
			toString: function() {
				return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
			}
		});
		i.fn.parse.prototype = i.fn;
		u.hsla.to = function(n) {
			if (n[0] == null || n[1] == null || n[2] == null) return [null, null, null, n[3]];
			var i = n[0] / 255,
				r = n[1] / 255,
				f = n[2] / 255,
				s = n[3],
				u = Math.max(i, r, f),
				e = Math.min(i, r, f),
				t = u - e,
				o = u + e,
				h = o * .5,
				c, l;
			return c = e === u ? 0 : i === u ? 60 * (r - f) / t + 360 : r === u ? 60 * (f - i) / t + 120 : 60 * (i - r) / t + 240, l = t === 0 ? 0 : h <= .5 ? t / o : t / (2 - o), [Math.round(c) % 360, l, h, s == null ? 1 : s]
		};
		u.hsla.from = function(n) {
			if (n[0] == null || n[1] == null || n[2] == null) return [null, null, null, n[3]];
			var r = n[0] / 360,
				u = n[1],
				t = n[2],
				e = n[3],
				i = t <= .5 ? t * (1 + u) : t + u - t * u,
				f = 2 * t - i;
			return [Math.round(o(f, i, r + 1 / 3) * 255), Math.round(o(f, i, r) * 255), Math.round(o(f, i, r - 1 / 3) * 255), e]
		};
		r(u, function(u, e) {
			var s = e.props,
				o = e.cache,
				h = e.to,
				c = e.from;
			i.fn[u] = function(u) {
				if (h && !this[o] && (this[o] = h(this._rgba)), u === t) return this[o].slice();
				var l, a = n.type(u),
					v = a === "array" || a === "object" ? u : arguments,
					e = this[o].slice();
				return r(s, function(n, t) {
					var i = v[a === "object" ? n : t.idx];
					i == null && (i = e[t.idx]);
					e[t.idx] = f(i, t)
				}), c ? (l = i(c(e)), l[o] = e, l) : i(e)
			};
			r(s, function(t, r) {
				i.fn[t] || (i.fn[t] = function(i) {
					var f = n.type(i),
						h = t === "alpha" ? this._hsla ? "hsla" : "rgba" : u,
						o = this[h](),
						s = o[r.idx],
						e;
					return f === "undefined" ? s : (f === "function" && (i = i.call(this, s), f = n.type(i)), i == null && r.empty ? this : (f === "string" && (e = a.exec(i), e && (i = s + parseFloat(e[2]) * (e[1] === "+" ? 1 : -1))), o[r.idx] = i, this[h](o)))
				})
			})
		});
		i.hook = function(t) {
			var u = t.split(" ");
			r(u, function(t, r) {
				n.cssHooks[r] = {
					set: function(t, u) {
						var o, f, e = "";
						if (u !== "transparent" && (n.type(u) !== "string" || (o = s(u)))) {
							if (u = i(o || u), !c.rgba && u._rgba[3] !== 1) {
								for (f = r === "backgroundColor" ? t.parentNode : t;
								(e === "" || e === "transparent") && f && f.style;) try {
									e = n.css(f, "backgroundColor");
									f = f.parentNode
								} catch (h) {}
								u = u.blend(e && e !== "transparent" ? e : "_default")
							}
							u = u.toRgbaString()
						}
						try {
							t.style[r] = u
						} catch (h) {}
					}
				};
				n.fx.step[r] = function(t) {
					t.colorInit || (t.start = i(t.elem, r), t.end = i(t.end), t.colorInit = !0);
					n.cssHooks[r].set(t.elem, t.start.transition(t.end, t.pos))
				}
			})
		};
		i.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor");
		n.cssHooks.borderColor = {
			expand: function(n) {
				var t = {};
				return r(["Top", "Right", "Bottom", "Left"], function(i, r) {
					t["border" + r + "Color"] = n
				}), t
			}
		};
		e = n.Color.names = {
			aqua: "#00ffff",
			black: "#000000",
			blue: "#0000ff",
			fuchsia: "#ff00ff",
			gray: "#808080",
			green: "#008000",
			lime: "#00ff00",
			maroon: "#800000",
			navy: "#000080",
			olive: "#808000",
			purple: "#800080",
			red: "#ff0000",
			silver: "#c0c0c0",
			teal: "#008080",
			white: "#ffffff",
			yellow: "#ffff00",
			transparent: [null, null, null, 0],
			_default: "#ffffff"
		}
	}(jQuery), function() {
		function i(t) {
			var r, u, i = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
				f = {};
			if (i && i.length && i[0] && i[i[0]]) for (u = i.length; u--;) r = i[u], typeof i[r] == "string" && (f[n.camelCase(r)] = i[r]);
			else for (r in i) typeof i[r] == "string" && (f[r] = i[r]);
			return f
		}
		function r(t, i) {
			var e = {},
				r, u;
			for (r in i) u = i[r], t[r] === u || f[r] || !n.fx.step[r] && isNaN(parseFloat(u)) || (e[r] = u);
			return e
		}
		var u = ["add", "remove", "toggle"],
			f = {
				border: 1,
				borderBottom: 1,
				borderColor: 1,
				borderLeft: 1,
				borderRight: 1,
				borderTop: 1,
				borderWidth: 1,
				margin: 1,
				padding: 1
			};
		n.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, i) {
			n.fx.step[i] = function(n) {
				(n.end === "none" || n.setAttr) && (n.pos !== 1 || n.setAttr) || (jQuery.style(n.elem, i, n.end), n.setAttr = !0)
			}
		});
		n.fn.addBack || (n.fn.addBack = function(n) {
			return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
		});
		n.effects.animateClass = function(t, f, e, o) {
			var s = n.speed(f, e, o);
			return this.queue(function() {
				var e = n(this),
					h = e.attr("class") || "",
					o, f = s.children ? e.find("*").addBack() : e;
				f = f.map(function() {
					var t = n(this);
					return {
						el: t,
						start: i(this)
					}
				});
				o = function() {
					n.each(u, function(n, i) {
						t[i] && e[i + "Class"](t[i])
					})
				};
				o();
				f = f.map(function() {
					return this.end = i(this.el[0]), this.diff = r(this.start, this.end), this
				});
				e.attr("class", h);
				f = f.map(function() {
					var i = this,
						t = n.Deferred(),
						r = n.extend({}, s, {
							queue: !1,
							complete: function() {
								t.resolve(i)
							}
						});
					return this.el.animate(this.diff, r), t.promise()
				});
				n.when.apply(n, f.get()).done(function() {
					o();
					n.each(arguments, function() {
						var t = this.el;
						n.each(this.diff, function(n) {
							t.css(n, "")
						})
					});
					s.complete.call(e[0])
				})
			})
		};
		n.fn.extend({
			_addClass: n.fn.addClass,
			addClass: function(t, i, r, u) {
				return i ? n.effects.animateClass.call(this, {
					add: t
				}, i, r, u) : this._addClass(t)
			},
			_removeClass: n.fn.removeClass,
			removeClass: function(t, i, r, u) {
				return i ? n.effects.animateClass.call(this, {
					remove: t
				}, i, r, u) : this._removeClass(t)
			},
			_toggleClass: n.fn.toggleClass,
			toggleClass: function(i, r, u, f, e) {
				return typeof r == "boolean" || r === t ? u ? n.effects.animateClass.call(this, r ? {
					add: i
				} : {
					remove: i
				}, u, f, e) : this._toggleClass(i, r) : n.effects.animateClass.call(this, {
					toggle: i
				}, r, u, f)
			},
			switchClass: function(t, i, r, u, f) {
				return n.effects.animateClass.call(this, {
					add: i,
					remove: t
				}, r, u, f)
			}
		})
	}(), function() {
		function r(t, i, r, u) {
			return n.isPlainObject(t) && (i = t, t = t.effect), t = {
				effect: t
			}, i == null && (i = {}), n.isFunction(i) && (u = i, r = null, i = {}), (typeof i == "number" || n.fx.speeds[i]) && (u = r, r = i, i = {}), n.isFunction(r) && (u = r, r = null), i && n.extend(t, i), r = r || i.duration, t.duration = n.fx.off ? 0 : typeof r == "number" ? r : r in n.fx.speeds ? n.fx.speeds[r] : n.fx.speeds._default, t.complete = u || i.complete, t
		}
		function u(t) {
			return !t || typeof t == "number" || n.fx.speeds[t] ? !0 : typeof t == "string" && !n.effects.effect[t]
		}
		n.extend(n.effects, {
			version: "1.10.0",
			save: function(n, t) {
				for (var r = 0; r < t.length; r++) t[r] !== null && n.data(i + t[r], n[0].style[t[r]])
			},
			restore: function(n, r) {
				for (var f, u = 0; u < r.length; u++) r[u] !== null && (f = n.data(i + r[u]), f === t && (f = ""), n.css(r[u], f))
			},
			setMode: function(n, t) {
				return t === "toggle" && (t = n.is(":hidden") ? "show" : "hide"), t
			},
			getBaseline: function(n, t) {
				var i, r;
				switch (n[0]) {
				case "top":
					i = 0;
					break;
				case "middle":
					i = .5;
					break;
				case "bottom":
					i = 1;
					break;
				default:
					i = n[0] / t.height
				}
				switch (n[1]) {
				case "left":
					r = 0;
					break;
				case "center":
					r = .5;
					break;
				case "right":
					r = 1;
					break;
				default:
					r = n[1] / t.width
				}
				return {
					x: r,
					y: i
				}
			},
			createWrapper: function(t) {
				if (t.parent().is(".ui-effects-wrapper")) return t.parent();
				var i = {
					width: t.outerWidth(!0),
					height: t.outerHeight(!0),
					float: t.css("float")
				},
					u = n("<div><\/div>").addClass("ui-effects-wrapper").css({
						fontSize: "100%",
						background: "transparent",
						border: "none",
						margin: 0,
						padding: 0
					}),
					f = {
						width: t.width(),
						height: t.height()
					},
					r = document.activeElement;
				try {
					r.id
				} catch (e) {
					r = document.body
				}
				return t.wrap(u), (t[0] === r || n.contains(t[0], r)) && n(r).focus(), u = t.parent(), t.css("position") === "static" ? (u.css({
					position: "relative"
				}), t.css({
					position: "relative"
				})) : (n.extend(i, {
					position: t.css("position"),
					zIndex: t.css("z-index")
				}), n.each(["top", "left", "bottom", "right"], function(n, r) {
					i[r] = t.css(r);
					isNaN(parseInt(i[r], 10)) && (i[r] = "auto")
				}), t.css({
					position: "relative",
					top: 0,
					left: 0,
					right: "auto",
					bottom: "auto"
				})), t.css(f), u.css(i).show()
			},
			removeWrapper: function(t) {
				var i = document.activeElement;
				return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || n.contains(t[0], i)) && n(i).focus()), t
			},
			setTransition: function(t, i, r, u) {
				return u = u || {}, n.each(i, function(n, i) {
					var f = t.cssUnit(i);
					f[0] > 0 && (u[i] = f[0] * r + f[1])
				}), u
			}
		});
		n.fn.extend({
			effect: function() {
				function i(i) {
					function u() {
						n.isFunction(f) && f.call(r[0]);
						n.isFunction(i) && i()
					}
					var r = n(this),
						f = t.complete,
						o = t.mode;
					(r.is(":hidden") ? o === "hide" : o === "show") ? u() : e.call(r[0], t, u)
				}
				var t = r.apply(this, arguments),
					u = t.mode,
					f = t.queue,
					e = n.effects.effect[t.effect];
				return n.fx.off || !e ? u ? this[u](t.duration, t.complete) : this.each(function() {
					t.complete && t.complete.call(this)
				}) : f === !1 ? this.each(i) : this.queue(f || "fx", i)
			},
			_show: n.fn.show,
			show: function(n) {
				if (u(n)) return this._show.apply(this, arguments);
				var t = r.apply(this, arguments);
				return t.mode = "show", this.effect.call(this, t)
			},
			_hide: n.fn.hide,
			hide: function(n) {
				if (u(n)) return this._hide.apply(this, arguments);
				var t = r.apply(this, arguments);
				return t.mode = "hide", this.effect.call(this, t)
			},
			__toggle: n.fn.toggle,
			toggle: function(t) {
				if (u(t) || typeof t == "boolean" || n.isFunction(t)) return this.__toggle.apply(this, arguments);
				var i = r.apply(this, arguments);
				return i.mode = "toggle", this.effect.call(this, i)
			},
			cssUnit: function(t) {
				var i = this.css(t),
					r = [];
				return n.each(["em", "px", "%", "pt"], function(n, t) {
					i.indexOf(t) > 0 && (r = [parseFloat(i), t])
				}), r
			}
		})
	}(), function() {
		var t = {};
		n.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(n, i) {
			t[i] = function(t) {
				return Math.pow(t, n + 2)
			}
		});
		n.extend(t, {
			Sine: function(n) {
				return 1 - Math.cos(n * Math.PI / 2)
			},
			Circ: function(n) {
				return 1 - Math.sqrt(1 - n * n)
			},
			Elastic: function(n) {
				return n === 0 || n === 1 ? n : -Math.pow(2, 8 * (n - 1)) * Math.sin(((n - 1) * 80 - 7.5) * Math.PI / 15)
			},
			Back: function(n) {
				return n * n * (3 * n - 2)
			},
			Bounce: function(n) {
				for (var t, i = 4; n < ((t = Math.pow(2, --i)) - 1) / 11;);
				return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((t * 3 - 2) / 22 - n, 2)
			}
		});
		n.each(t, function(t, i) {
			n.easing["easeIn" + t] = i;
			n.easing["easeOut" + t] = function(n) {
				return 1 - i(1 - n)
			};
			n.easing["easeInOut" + t] = function(n) {
				return n < .5 ? i(n * 2) / 2 : 1 - i(n * -2 + 2) / 2
			}
		})
	}()
}(jQuery), function(n) {
	var t = /up|down|vertical/,
		i = /up|left|vertical|horizontal/;
	n.effects.effect.blind = function(r, u) {
		var f = n(this),
			c = ["position", "top", "bottom", "left", "right", "height", "width"],
			p = n.effects.setMode(f, r.mode || "hide"),
			w = r.direction || "up",
			o = t.test(w),
			l = o ? "height" : "width",
			a = o ? "top" : "left",
			b = i.test(w),
			v = {},
			y = p === "show",
			e, s, h;
		f.parent().is(".ui-effects-wrapper") ? n.effects.save(f.parent(), c) : n.effects.save(f, c);
		f.show();
		e = n.effects.createWrapper(f).css({
			overflow: "hidden"
		});
		s = e[l]();
		h = parseFloat(e.css(a)) || 0;
		v[l] = y ? s : 0;
		b || (f.css(o ? "bottom" : "right", 0).css(o ? "top" : "left", "auto").css({
			position: "absolute"
		}), v[a] = y ? h : s + h);
		y && (e.css(l, 0), b || e.css(a, h + s));
		e.animate(v, {
			duration: r.duration,
			easing: r.easing,
			queue: !1,
			complete: function() {
				p === "hide" && f.hide();
				n.effects.restore(f, c);
				n.effects.removeWrapper(f);
				u()
			}
		})
	}
}(jQuery), function(n) {
	n.effects.effect.bounce = function(t, i) {
		var r = n(this),
			v = ["position", "top", "bottom", "left", "right", "height", "width"],
			k = n.effects.setMode(r, t.mode || "effect"),
			f = k === "hide",
			y = k === "show",
			h = t.direction || "up",
			u = t.distance,
			p = t.times || 5,
			d = p * 2 + (y || f ? 1 : 0),
			c = t.duration / d,
			l = t.easing,
			e = h === "up" || h === "down" ? "top" : "left",
			w = h === "up" || h === "left",
			b, o, s, a = r.queue(),
			g = a.length;
		for ((y || f) && v.push("opacity"), n.effects.save(r, v), r.show(), n.effects.createWrapper(r), u || (u = r[e === "top" ? "outerHeight" : "outerWidth"]() / 3), y && (s = {
			opacity: 1
		}, s[e] = 0, r.css("opacity", 0).css(e, w ? -u * 2 : u * 2).animate(s, c, l)), f && (u /= Math.pow(2, p - 1)), s = {}, s[e] = 0, b = 0; b < p; b++) o = {}, o[e] = (w ? "-=" : "+=") + u, r.animate(o, c, l).animate(s, c, l), u = f ? u * 2 : u / 2;
		f && (o = {
			opacity: 0
		}, o[e] = (w ? "-=" : "+=") + u, r.animate(o, c, l));
		r.queue(function() {
			f && r.hide();
			n.effects.restore(r, v);
			n.effects.removeWrapper(r);
			i()
		});
		g > 1 && a.splice.apply(a, [1, 0].concat(a.splice(g, d + 1)));
		r.dequeue()
	}
}(jQuery), function(n) {
	n.effects.effect.clip = function(t, i) {
		var r = n(this),
			h = ["position", "top", "bottom", "left", "right", "height", "width"],
			v = n.effects.setMode(r, t.mode || "hide"),
			f = v === "show",
			y = t.direction || "vertical",
			c = y === "vertical",
			o = c ? "height" : "width",
			l = c ? "top" : "left",
			s = {},
			a, u, e;
		n.effects.save(r, h);
		r.show();
		a = n.effects.createWrapper(r).css({
			overflow: "hidden"
		});
		u = r[0].tagName === "IMG" ? a : r;
		e = u[o]();
		f && (u.css(o, 0), u.css(l, e / 2));
		s[o] = f ? e : 0;
		s[l] = f ? 0 : e / 2;
		u.animate(s, {
			queue: !1,
			duration: t.duration,
			easing: t.easing,
			complete: function() {
				f || r.hide();
				n.effects.restore(r, h);
				n.effects.removeWrapper(r);
				i()
			}
		})
	}
}(jQuery), function(n) {
	n.effects.effect.drop = function(t, i) {
		var r = n(this),
			h = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
			c = n.effects.setMode(r, t.mode || "hide"),
			e = c === "show",
			u = t.direction || "left",
			o = u === "up" || u === "down" ? "top" : "left",
			s = u === "up" || u === "left" ? "pos" : "neg",
			l = {
				opacity: e ? 1 : 0
			},
			f;
		n.effects.save(r, h);
		r.show();
		n.effects.createWrapper(r);
		f = t.distance || r[o === "top" ? "outerHeight" : "outerWidth"](!0) / 2;
		e && r.css("opacity", 0).css(o, s === "pos" ? -f : f);
		l[o] = (e ? s === "pos" ? "+=" : "-=" : s === "pos" ? "-=" : "+=") + f;
		r.animate(l, {
			queue: !1,
			duration: t.duration,
			easing: t.easing,
			complete: function() {
				c === "hide" && r.hide();
				n.effects.restore(r, h);
				n.effects.removeWrapper(r);
				i()
			}
		})
	}
}(jQuery), function(n) {
	n.effects.effect.explode = function(t, i) {
		function b() {
			l.push(this);
			l.length === e * c && k()
		}
		function k() {
			r.css({
				visibility: "visible"
			});
			n(l).remove();
			u || r.hide();
			i()
		}
		for (var e = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3, c = e, r = n(this), d = n.effects.setMode(r, t.mode || "hide"), u = d === "show", w = r.show().css("visibility", "hidden").offset(), o = Math.ceil(r.outerWidth() / c), s = Math.ceil(r.outerHeight() / e), l = [], f, a, v, y, p, h = 0; h < e; h++) for (v = w.top + h * s, p = h - (e - 1) / 2, f = 0; f < c; f++) a = w.left + f * o, y = f - (c - 1) / 2, r.clone().appendTo("body").wrap("<div><\/div>").css({
			position: "absolute",
			visibility: "visible",
			left: -f * o,
			top: -h * s
		}).parent().addClass("ui-effects-explode").css({
			position: "absolute",
			overflow: "hidden",
			width: o,
			height: s,
			left: a + (u ? y * o : 0),
			top: v + (u ? p * s : 0),
			opacity: u ? 0 : 1
		}).animate({
			left: a + (u ? 0 : y * o),
			top: v + (u ? 0 : p * s),
			opacity: u ? 1 : 0
		}, t.duration || 500, t.easing, b)
	}
}(jQuery), function(n) {
	n.effects.effect.fade = function(t, i) {
		var r = n(this),
			u = n.effects.setMode(r, t.mode || "toggle");
		r.animate({
			opacity: u
		}, {
			queue: !1,
			duration: t.duration,
			easing: t.easing,
			complete: i
		})
	}
}(jQuery), function(n) {
	n.effects.effect.fold = function(t, i) {
		var r = n(this),
			s = ["position", "top", "bottom", "left", "right", "height", "width"],
			h = n.effects.setMode(r, t.mode || "hide"),
			e = h === "show",
			c = h === "hide",
			f = t.size || 15,
			l = /([0-9]+)%/.exec(f),
			a = !! t.horizFirst,
			v = e !== a,
			y = v ? ["width", "height"] : ["height", "width"],
			p = t.duration / 2,
			u, o, w = {},
			b = {};
		n.effects.save(r, s);
		r.show();
		u = n.effects.createWrapper(r).css({
			overflow: "hidden"
		});
		o = v ? [u.width(), u.height()] : [u.height(), u.width()];
		l && (f = parseInt(l[1], 10) / 100 * o[c ? 0 : 1]);
		e && u.css(a ? {
			height: 0,
			width: f
		} : {
			height: f,
			width: 0
		});
		w[y[0]] = e ? o[0] : f;
		b[y[1]] = e ? o[1] : 0;
		u.animate(w, p, t.easing).animate(b, p, t.easing, function() {
			c && r.hide();
			n.effects.restore(r, s);
			n.effects.removeWrapper(r);
			i()
		})
	}
}(jQuery), function(n) {
	n.effects.effect.highlight = function(t, i) {
		var r = n(this),
			u = ["backgroundImage", "backgroundColor", "opacity"],
			f = n.effects.setMode(r, t.mode || "show"),
			e = {
				backgroundColor: r.css("backgroundColor")
			};
		f === "hide" && (e.opacity = 0);
		n.effects.save(r, u);
		r.show().css({
			backgroundImage: "none",
			backgroundColor: t.color || "#ffff99"
		}).animate(e, {
			queue: !1,
			duration: t.duration,
			easing: t.easing,
			complete: function() {
				f === "hide" && r.hide();
				n.effects.restore(r, u);
				i()
			}
		})
	}
}(jQuery), function(n) {
	n.effects.effect.pulsate = function(t, i) {
		var r = n(this),
			e = n.effects.setMode(r, t.mode || "show"),
			h = e === "show",
			a = e === "hide",
			v = h || e === "hide",
			o = (t.times || 5) * 2 + (v ? 1 : 0),
			c = t.duration / o,
			u = 0,
			f = r.queue(),
			l = f.length,
			s;
		for ((h || !r.is(":visible")) && (r.css("opacity", 0).show(), u = 1), s = 1; s < o; s++) r.animate({
			opacity: u
		}, c, t.easing), u = 1 - u;
		r.animate({
			opacity: u
		}, c, t.easing);
		r.queue(function() {
			a && r.hide();
			i()
		});
		l > 1 && f.splice.apply(f, [1, 0].concat(f.splice(l, o + 1)));
		r.dequeue()
	}
}(jQuery), function(n) {
	n.effects.effect.puff = function(t, i) {
		var r = n(this),
			e = n.effects.setMode(r, t.mode || "hide"),
			o = e === "hide",
			s = parseInt(t.percent, 10) || 150,
			f = s / 100,
			u = {
				height: r.height(),
				width: r.width(),
				outerHeight: r.outerHeight(),
				outerWidth: r.outerWidth()
			};
		n.extend(t, {
			effect: "scale",
			queue: !1,
			fade: !0,
			mode: e,
			complete: i,
			percent: o ? s : 100,
			from: o ? u : {
				height: u.height * f,
				width: u.width * f,
				outerHeight: u.outerHeight * f,
				outerWidth: u.outerWidth * f
			}
		});
		r.effect(t)
	};
	n.effects.effect.scale = function(t, i) {
		var u = n(this),
			r = n.extend(!0, {}, t),
			f = n.effects.setMode(u, t.mode || "effect"),
			s = parseInt(t.percent, 10) || (parseInt(t.percent, 10) === 0 ? 0 : f === "hide" ? 0 : 100),
			h = t.direction || "both",
			c = t.origin,
			e = {
				height: u.height(),
				width: u.width(),
				outerHeight: u.outerHeight(),
				outerWidth: u.outerWidth()
			},
			o = {
				y: h !== "horizontal" ? s / 100 : 1,
				x: h !== "vertical" ? s / 100 : 1
			};
		r.effect = "size";
		r.queue = !1;
		r.complete = i;
		f !== "effect" && (r.origin = c || ["middle", "center"], r.restore = !0);
		r.from = t.from || (f === "show" ? {
			height: 0,
			width: 0,
			outerHeight: 0,
			outerWidth: 0
		} : e);
		r.to = {
			height: e.height * o.y,
			width: e.width * o.x,
			outerHeight: e.outerHeight * o.y,
			outerWidth: e.outerWidth * o.x
		};
		r.fade && (f === "show" && (r.from.opacity = 0, r.to.opacity = 1), f === "hide" && (r.from.opacity = 1, r.to.opacity = 0));
		u.effect(r)
	};
	n.effects.effect.size = function(t, i) {
		var f, l, u, r = n(this),
			w = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
			a = ["width", "height", "overflow"],
			v = ["fontSize"],
			e = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
			o = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
			h = n.effects.setMode(r, t.mode || "effect"),
			y = t.restore || h !== "effect",
			c = t.scale || "both",
			b = t.origin || ["middle", "center"],
			k = r.css("position"),
			s = y ? w : ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
			p = {
				height: 0,
				width: 0,
				outerHeight: 0,
				outerWidth: 0
			};
		h === "show" && r.show();
		f = {
			height: r.height(),
			width: r.width(),
			outerHeight: r.outerHeight(),
			outerWidth: r.outerWidth()
		};
		t.mode === "toggle" && h === "show" ? (r.from = t.to || p, r.to = t.from || f) : (r.from = t.from || (h === "show" ? p : f), r.to = t.to || (h === "hide" ? p : f));
		u = {
			from: {
				y: r.from.height / f.height,
				x: r.from.width / f.width
			},
			to: {
				y: r.to.height / f.height,
				x: r.to.width / f.width
			}
		};
		(c === "box" || c === "both") && (u.from.y !== u.to.y && (s = s.concat(e), r.from = n.effects.setTransition(r, e, u.from.y, r.from), r.to = n.effects.setTransition(r, e, u.to.y, r.to)), u.from.x !== u.to.x && (s = s.concat(o), r.from = n.effects.setTransition(r, o, u.from.x, r.from), r.to = n.effects.setTransition(r, o, u.to.x, r.to)));
		(c === "content" || c === "both") && u.from.y !== u.to.y && (s = s.concat(v).concat(a), r.from = n.effects.setTransition(r, v, u.from.y, r.from), r.to = n.effects.setTransition(r, v, u.to.y, r.to));
		n.effects.save(r, s);
		r.show();
		n.effects.createWrapper(r);
		r.css("overflow", "hidden").css(r.from);
		b && (l = n.effects.getBaseline(b, f), r.from.top = (f.outerHeight - r.outerHeight()) * l.y, r.from.left = (f.outerWidth - r.outerWidth()) * l.x, r.to.top = (f.outerHeight - r.to.outerHeight) * l.y, r.to.left = (f.outerWidth - r.to.outerWidth) * l.x);
		r.css(r.from);
		(c === "content" || c === "both") && (e = e.concat(["marginTop", "marginBottom"]).concat(v), o = o.concat(["marginLeft", "marginRight"]), a = w.concat(e).concat(o), r.find("*[width]").each(function() {
			var i = n(this),
				r = {
					height: i.height(),
					width: i.width(),
					outerHeight: i.outerHeight(),
					outerWidth: i.outerWidth()
				};
			y && n.effects.save(i, a);
			i.from = {
				height: r.height * u.from.y,
				width: r.width * u.from.x,
				outerHeight: r.outerHeight * u.from.y,
				outerWidth: r.outerWidth * u.from.x
			};
			i.to = {
				height: r.height * u.to.y,
				width: r.width * u.to.x,
				outerHeight: r.height * u.to.y,
				outerWidth: r.width * u.to.x
			};
			u.from.y !== u.to.y && (i.from = n.effects.setTransition(i, e, u.from.y, i.from), i.to = n.effects.setTransition(i, e, u.to.y, i.to));
			u.from.x !== u.to.x && (i.from = n.effects.setTransition(i, o, u.from.x, i.from), i.to = n.effects.setTransition(i, o, u.to.x, i.to));
			i.css(i.from);
			i.animate(i.to, t.duration, t.easing, function() {
				y && n.effects.restore(i, a)
			})
		}));
		r.animate(r.to, {
			queue: !1,
			duration: t.duration,
			easing: t.easing,
			complete: function() {
				r.to.opacity === 0 && r.css("opacity", r.from.opacity);
				h === "hide" && r.hide();
				n.effects.restore(r, s);
				y || (k === "static" ? r.css({
					position: "relative",
					top: r.to.top,
					left: r.to.left
				}) : n.each(["top", "left"], function(n, t) {
					r.css(t, function(t, i) {
						var f = parseInt(i, 10),
							u = n ? r.to.left : r.to.top;
						return i === "auto" ? u + "px" : f + u + "px"
					})
				}));
				n.effects.removeWrapper(r);
				i()
			}
		})
	}
}(jQuery), function(n) {
	n.effects.effect.shake = function(t, i) {
		var r = n(this),
			v = ["position", "top", "bottom", "left", "right", "height", "width"],
			k = n.effects.setMode(r, t.mode || "effect"),
			f = t.direction || "left",
			o = t.distance || 20,
			y = t.times || 3,
			p = y * 2 + 1,
			u = Math.round(t.duration / p),
			s = f === "up" || f === "down" ? "top" : "left",
			h = f === "up" || f === "left",
			c = {},
			l = {},
			w = {},
			a, e = r.queue(),
			b = e.length;
		for (n.effects.save(r, v), r.show(), n.effects.createWrapper(r), c[s] = (h ? "-=" : "+=") + o, l[s] = (h ? "+=" : "-=") + o * 2, w[s] = (h ? "-=" : "+=") + o * 2, r.animate(c, u, t.easing), a = 1; a < y; a++) r.animate(l, u, t.easing).animate(w, u, t.easing);
		r.animate(l, u, t.easing).animate(c, u / 2, t.easing).queue(function() {
			k === "hide" && r.hide();
			n.effects.restore(r, v);
			n.effects.removeWrapper(r);
			i()
		});
		b > 1 && e.splice.apply(e, [1, 0].concat(e.splice(b, p + 1)));
		r.dequeue()
	}
}(jQuery), function(n) {
	n.effects.effect.slide = function(t, i) {
		var r = n(this),
			s = ["position", "top", "bottom", "left", "right", "width", "height"],
			h = n.effects.setMode(r, t.mode || "show"),
			c = h === "show",
			f = t.direction || "left",
			e = f === "up" || f === "down" ? "top" : "left",
			o = f === "up" || f === "left",
			u, l = {};
		n.effects.save(r, s);
		r.show();
		u = t.distance || r[e === "top" ? "outerHeight" : "outerWidth"](!0);
		n.effects.createWrapper(r).css({
			overflow: "hidden"
		});
		c && r.css(e, o ? isNaN(u) ? "-" + u : -u : u);
		l[e] = (c ? o ? "+=" : "-=" : o ? "-=" : "+=") + u;
		r.animate(l, {
			queue: !1,
			duration: t.duration,
			easing: t.easing,
			complete: function() {
				h === "hide" && r.hide();
				n.effects.restore(r, s);
				n.effects.removeWrapper(r);
				i()
			}
		})
	}
}(jQuery), function(n) {
	n.effects.effect.transfer = function(t, i) {
		var u = n(this),
			r = n(t.to),
			f = r.css("position") === "fixed",
			e = n("body"),
			o = f ? e.scrollTop() : 0,
			s = f ? e.scrollLeft() : 0,
			h = r.offset(),
			l = {
				top: h.top - o,
				left: h.left - s,
				height: r.innerHeight(),
				width: r.innerWidth()
			},
			c = u.offset(),
			a = n("<div class='ui-effects-transfer'><\/div>").appendTo(document.body).addClass(t.className).css({
				top: c.top - o,
				left: c.left - s,
				height: u.innerHeight(),
				width: u.innerWidth(),
				position: f ? "fixed" : "absolute"
			}).animate(l, t.duration, t.easing, function() {
				a.remove();
				i()
			})
	}
}(jQuery), function(n) {
	n.widget("ui.menu", {
		version: "1.10.0",
		defaultElement: "<ul>",
		delay: 300,
		options: {
			icons: {
				submenu: "ui-icon-carat-1-e"
			},
			menus: "ul",
			position: {
				my: "left top",
				at: "right top"
			},
			role: "menu",
			blur: null,
			focus: null,
			select: null
		},
		_create: function() {
			this.activeMenu = this.element;
			this.mouseHandled = !1;
			this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !! this.element.find(".ui-icon").length).attr({
				role: this.options.role,
				tabIndex: 0
			}).bind("click" + this.eventNamespace, n.proxy(function(n) {
				this.options.disabled && n.preventDefault()
			}, this));
			this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true");
			this._on({
				"mousedown .ui-menu-item > a": function(n) {
					n.preventDefault()
				},
				"click .ui-state-disabled > a": function(n) {
					n.preventDefault()
				},
				"click .ui-menu-item:has(a)": function(t) {
					var i = n(t.target).closest(".ui-menu-item");
					!this.mouseHandled && i.not(".ui-state-disabled").length && (this.mouseHandled = !0, this.select(t), i.has(".ui-menu").length ? this.expand(t) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && this.active.parents(".ui-menu").length === 1 && clearTimeout(this.timer)))
				},
				"mouseenter .ui-menu-item": function(t) {
					var i = n(t.currentTarget);
					i.siblings().children(".ui-state-active").removeClass("ui-state-active");
					this.focus(t, i)
				},
				mouseleave: "collapseAll",
				"mouseleave .ui-menu": "collapseAll",
				focus: function(n, t) {
					var i = this.active || this.element.children(".ui-menu-item").eq(0);
					t || this.focus(n, i)
				},
				blur: function(t) {
					this._delay(function() {
						n.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
					})
				},
				keydown: "_keydown"
			});
			this.refresh();
			this._on(this.document, {
				click: function(t) {
					n(t.target).closest(".ui-menu").length || this.collapseAll(t);
					this.mouseHandled = !1
				}
			})
		},
		_destroy: function() {
			this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
			this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
				var t = n(this);
				t.data("ui-menu-submenu-carat") && t.remove()
			});
			this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
		},
		_keydown: function(t) {
			function o(n) {
				return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
			}
			var i, f, r, e, u, s = !0;
			switch (t.keyCode) {
			case n.ui.keyCode.PAGE_UP:
				this.previousPage(t);
				break;
			case n.ui.keyCode.PAGE_DOWN:
				this.nextPage(t);
				break;
			case n.ui.keyCode.HOME:
				this._move("first", "first", t);
				break;
			case n.ui.keyCode.END:
				this._move("last", "last", t);
				break;
			case n.ui.keyCode.UP:
				this.previous(t);
				break;
			case n.ui.keyCode.DOWN:
				this.next(t);
				break;
			case n.ui.keyCode.LEFT:
				this.collapse(t);
				break;
			case n.ui.keyCode.RIGHT:
				this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
				break;
			case n.ui.keyCode.ENTER:
			case n.ui.keyCode.SPACE:
				this._activate(t);
				break;
			case n.ui.keyCode.ESCAPE:
				this.collapse(t);
				break;
			default:
				s = !1;
				f = this.previousFilter || "";
				r = String.fromCharCode(t.keyCode);
				e = !1;
				clearTimeout(this.filterTimer);
				r === f ? e = !0 : r = f + r;
				u = new RegExp("^" + o(r), "i");
				i = this.activeMenu.children(".ui-menu-item").filter(function() {
					return u.test(n(this).children("a").text())
				});
				i = e && i.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : i;
				i.length || (r = String.fromCharCode(t.keyCode), u = new RegExp("^" + o(r), "i"), i = this.activeMenu.children(".ui-menu-item").filter(function() {
					return u.test(n(this).children("a").text())
				}));
				i.length ? (this.focus(t, i), i.length > 1 ? (this.previousFilter = r, this.filterTimer = this._delay(function() {
					delete this.previousFilter
				}, 1e3)) : delete this.previousFilter) : delete this.previousFilter
			}
			s && t.preventDefault()
		},
		_activate: function(n) {
			this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(n) : this.select(n))
		},
		refresh: function() {
			var t, r = this.options.icons.submenu,
				i = this.element.find(this.options.menus);
			i.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
				role: this.options.role,
				"aria-hidden": "true",
				"aria-expanded": "false"
			}).each(function() {
				var t = n(this),
					i = t.prev("a"),
					u = n("<span>").addClass("ui-menu-icon ui-icon " + r).data("ui-menu-submenu-carat", !0);
				i.attr("aria-haspopup", "true").prepend(u);
				t.attr("aria-labelledby", i.attr("id"))
			});
			t = i.add(this.element);
			t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
				tabIndex: -1,
				role: this._itemRole()
			});
			t.children(":not(.ui-menu-item)").each(function() {
				var t = n(this);
				/[^\-—–\s]/.test(t.text()) || t.addClass("ui-widget-content ui-menu-divider")
			});
			t.children(".ui-state-disabled").attr("aria-disabled", "true");
			this.active && !n.contains(this.element[0], this.active[0]) && this.blur()
		},
		_itemRole: function() {
			return {
				menu: "menuitem",
				listbox: "option"
			}[this.options.role]
		},
		_setOption: function(n, t) {
			n === "icons" && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu);
			this._super(n, t)
		},
		focus: function(n, t) {
			var i, r;
			this.blur(n, n && n.type === "focus");
			this._scrollIntoView(t);
			this.active = t.first();
			r = this.active.children("a").addClass("ui-state-focus");
			this.options.role && this.element.attr("aria-activedescendant", r.attr("id"));
			this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active");
			n && n.type === "keydown" ? this._close() : this.timer = this._delay(function() {
				this._close()
			}, this.delay);
			i = t.children(".ui-menu");
			i.length && /^mouse/.test(n.type) && this._startOpening(i);
			this.activeMenu = t.parent();
			this._trigger("focus", n, {
				item: t
			})
		},
		_scrollIntoView: function(t) {
			var e, o, i, r, u, f;
			this._hasScroll() && (e = parseFloat(n.css(this.activeMenu[0], "borderTopWidth")) || 0, o = parseFloat(n.css(this.activeMenu[0], "paddingTop")) || 0, i = t.offset().top - this.activeMenu.offset().top - e - o, r = this.activeMenu.scrollTop(), u = this.activeMenu.height(), f = t.height(), i < 0 ? this.activeMenu.scrollTop(r + i) : i + f > u && this.activeMenu.scrollTop(r + i - u + f))
		},
		blur: function(n, t) {
			(t || clearTimeout(this.timer), this.active) && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", n, {
				item: this.active
			}))
		},
		_startOpening: function(n) {
			(clearTimeout(this.timer), n.attr("aria-hidden") === "true") && (this.timer = this._delay(function() {
				this._close();
				this._open(n)
			}, this.delay))
		},
		_open: function(t) {
			var i = n.extend({
				of: this.active
			}, this.options.position);
			clearTimeout(this.timer);
			this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true");
			t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
		},
		collapseAll: function(t, i) {
			clearTimeout(this.timer);
			this.timer = this._delay(function() {
				var r = i ? this.element : n(t && t.target).closest(this.element.find(".ui-menu"));
				r.length || (r = this.element);
				this._close(r);
				this.blur(t);
				this.activeMenu = r
			}, this.delay)
		},
		_close: function(n) {
			n || (n = this.active ? this.active.parent() : this.element);
			n.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
		},
		collapse: function(n) {
			var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
			t && t.length && (this._close(), this.focus(n, t))
		},
		expand: function(n) {
			var t = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
			t && t.length && (this._open(t.parent()), this._delay(function() {
				this.focus(n, t)
			}))
		},
		next: function(n) {
			this._move("next", "first", n)
		},
		previous: function(n) {
			this._move("prev", "last", n)
		},
		isFirstItem: function() {
			return this.active && !this.active.prevAll(".ui-menu-item").length
		},
		isLastItem: function() {
			return this.active && !this.active.nextAll(".ui-menu-item").length
		},
		_move: function(n, t, i) {
			var r;
			this.active && (r = n === "first" || n === "last" ? this.active[n === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[n + "All"](".ui-menu-item").eq(0));
			r && r.length && this.active || (r = this.activeMenu.children(".ui-menu-item")[t]());
			this.focus(i, r)
		},
		nextPage: function(t) {
			var i, r, u;
			if (!this.active) {
				this.next(t);
				return
			}
			this.isLastItem() || (this._hasScroll() ? (r = this.active.offset().top, u = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
				return i = n(this), i.offset().top - r - u < 0
			}), this.focus(t, i)) : this.focus(t, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]()))
		},
		previousPage: function(t) {
			var i, r, u;
			if (!this.active) {
				this.next(t);
				return
			}
			this.isFirstItem() || (this._hasScroll() ? (r = this.active.offset().top, u = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
				return i = n(this), i.offset().top - r + u > 0
			}), this.focus(t, i)) : this.focus(t, this.activeMenu.children(".ui-menu-item").first()))
		},
		_hasScroll: function() {
			return this.element.outerHeight() < this.element.prop("scrollHeight")
		},
		select: function(t) {
			this.active = this.active || n(t.target).closest(".ui-menu-item");
			var i = {
				item: this.active
			};
			this.active.has(".ui-menu").length || this.collapseAll(t, !0);
			this._trigger("select", t, i)
		}
	})
}(jQuery), function(n, t) {
	n.widget("ui.progressbar", {
		version: "1.10.0",
		options: {
			max: 100,
			value: 0,
			change: null,
			complete: null
		},
		min: 0,
		_create: function() {
			this.oldValue = this.options.value = this._constrainedValue();
			this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
				role: "progressbar",
				"aria-valuemin": this.min
			});
			this.valueDiv = n("<div class='ui-progressbar-value ui-widget-header ui-corner-left'><\/div>").appendTo(this.element);
			this._refreshValue()
		},
		_destroy: function() {
			this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
			this.valueDiv.remove()
		},
		value: function(n) {
			if (n === t) return this.options.value;
			this.options.value = this._constrainedValue(n);
			this._refreshValue()
		},
		_constrainedValue: function(n) {
			return n === t && (n = this.options.value), this.indeterminate = n === !1, typeof n != "number" && (n = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, n))
		},
		_setOptions: function(n) {
			var t = n.value;
			delete n.value;
			this._super(n);
			this.options.value = this._constrainedValue(t);
			this._refreshValue()
		},
		_setOption: function(n, t) {
			n === "max" && (t = Math.max(this.min, t));
			this._super(n, t)
		},
		_percentage: function() {
			return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
		},
		_refreshValue: function() {
			var t = this.options.value,
				i = this._percentage();
			this.valueDiv.toggle(this.indeterminate || t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(i.toFixed(0) + "%");
			this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate);
			this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = n("<div class='ui-progressbar-overlay'><\/div>").appendTo(this.valueDiv))) : (this.element.attr({
				"aria-valuemax": this.options.max,
				"aria-valuenow": t
			}), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null));
			this.oldValue !== t && (this.oldValue = t, this._trigger("change"));
			t === this.options.max && this._trigger("complete")
		}
	})
}(jQuery), function(n) {
	function i(n) {
		return parseInt(n, 10) || 0
	}
	function t(n) {
		return !isNaN(parseInt(n, 10))
	}
	n.widget("ui.resizable", n.ui.mouse, {
		version: "1.10.0",
		widgetEventPrefix: "resize",
		options: {
			alsoResize: !1,
			animate: !1,
			animateDuration: "slow",
			animateEasing: "swing",
			aspectRatio: !1,
			autoHide: !1,
			containment: !1,
			ghost: !1,
			grid: !1,
			handles: "e,s,se",
			helper: !1,
			maxHeight: null,
			maxWidth: null,
			minHeight: 10,
			minWidth: 10,
			zIndex: 90,
			resize: null,
			start: null,
			stop: null
		},
		_create: function() {
			var e, f, r, i, o, u = this,
				t = this.options;
			if (this.element.addClass("ui-resizable"), n.extend(this, {
				_aspectRatio: !! t.aspectRatio,
				aspectRatio: t.aspectRatio,
				originalElement: this.element,
				_proportionallyResizeElements: [],
				_helper: t.helper || t.ghost || t.animate ? t.helper || "ui-resizable-helper" : null
			}), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(n("<div class='ui-wrapper' style='overflow: hidden;'><\/div>").css({
				position: this.element.css("position"),
				width: this.element.outerWidth(),
				height: this.element.outerHeight(),
				top: this.element.css("top"),
				left: this.element.css("left")
			})), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
				marginLeft: this.originalElement.css("marginLeft"),
				marginTop: this.originalElement.css("marginTop"),
				marginRight: this.originalElement.css("marginRight"),
				marginBottom: this.originalElement.css("marginBottom")
			}), this.originalElement.css({
				marginLeft: 0,
				marginTop: 0,
				marginRight: 0,
				marginBottom: 0
			}), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
				position: "static",
				zoom: 1,
				display: "block"
			})), this.originalElement.css({
				margin: this.originalElement.css("margin")
			}), this._proportionallyResize()), this.handles = t.handles || (n(".ui-resizable-handle", this.element).length ? {
				n: ".ui-resizable-n",
				e: ".ui-resizable-e",
				s: ".ui-resizable-s",
				w: ".ui-resizable-w",
				se: ".ui-resizable-se",
				sw: ".ui-resizable-sw",
				ne: ".ui-resizable-ne",
				nw: ".ui-resizable-nw"
			} : "e,s,se"), this.handles.constructor === String) for (this.handles === "all" && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, f = 0; f < e.length; f++) r = n.trim(e[f]), o = "ui-resizable-" + r, i = n("<div class='ui-resizable-handle " + o + "'><\/div>"), i.css({
				zIndex: t.zIndex
			}), "se" === r && i.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[r] = ".ui-resizable-" + r, this.element.append(i);
			this._renderAxis = function(t) {
				var i, r, u, f;
				t = t || this.element;
				for (i in this.handles) this.handles[i].constructor === String && (this.handles[i] = n(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (r = n(this.handles[i], this.element), f = /sw|ne|nw|se|n|s/.test(i) ? r.outerHeight() : r.outerWidth(), u = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(u, f), this._proportionallyResize()), !n(this.handles[i]).length
			};
			this._renderAxis(this.element);
			this._handles = n(".ui-resizable-handle", this.element).disableSelection();
			this._handles.mouseover(function() {
				u.resizing || (this.className && (i = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), u.axis = i && i[1] ? i[1] : "se")
			});
			t.autoHide && (this._handles.hide(), n(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
				t.disabled || (n(this).removeClass("ui-resizable-autohide"), u._handles.show())
			}).mouseleave(function() {
				t.disabled || u.resizing || (n(this).addClass("ui-resizable-autohide"), u._handles.hide())
			}));
			this._mouseInit()
		},
		_destroy: function() {
			this._mouseDestroy();
			var t, i = function(t) {
					n(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
				};
			return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({
				position: t.css("position"),
				width: t.outerWidth(),
				height: t.outerHeight(),
				top: t.css("top"),
				left: t.css("left")
			}).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
		},
		_mouseCapture: function(t) {
			var r, i, u = !1;
			for (r in this.handles) i = n(this.handles[r])[0], (i === t.target || n.contains(i, t.target)) && (u = !0);
			return !this.options.disabled && u
		},
		_mouseStart: function(t) {
			var f, e, o, u = this.options,
				s = this.element.position(),
				r = this.element;
			return this.resizing = !0, /absolute/.test(r.css("position")) ? r.css({
				position: "absolute",
				top: r.css("top"),
				left: r.css("left")
			}) : r.is(".ui-draggable") && r.css({
				position: "absolute",
				top: s.top,
				left: s.left
			}), this._renderProxy(), f = i(this.helper.css("left")), e = i(this.helper.css("top")), u.containment && (f += n(u.containment).scrollLeft() || 0, e += n(u.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
				left: f,
				top: e
			}, this.size = this._helper ? {
				width: r.outerWidth(),
				height: r.outerHeight()
			} : {
				width: r.width(),
				height: r.height()
			}, this.originalSize = this._helper ? {
				width: r.outerWidth(),
				height: r.outerHeight()
			} : {
				width: r.width(),
				height: r.height()
			}, this.originalPosition = {
				left: f,
				top: e
			}, this.sizeDiff = {
				width: r.outerWidth() - r.width(),
				height: r.outerHeight() - r.height()
			}, this.originalMousePosition = {
				left: t.pageX,
				top: t.pageY
			}, this.aspectRatio = typeof u.aspectRatio == "number" ? u.aspectRatio : this.originalSize.width / this.originalSize.height || 1, o = n(".ui-resizable-" + this.axis).css("cursor"), n("body").css("cursor", o === "auto" ? this.axis + "-resize" : o), r.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
		},
		_mouseDrag: function(t) {
			var i, e = this.helper,
				r = {},
				u = this.originalMousePosition,
				o = this.axis,
				s = this.position.top,
				h = this.position.left,
				c = this.size.width,
				l = this.size.height,
				a = t.pageX - u.left || 0,
				v = t.pageY - u.top || 0,
				f = this._change[o];
			return f ? (i = f.apply(this, [t, a, v]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), this.position.top !== s && (r.top = this.position.top + "px"), this.position.left !== h && (r.left = this.position.left + "px"), this.size.width !== c && (r.width = this.size.width + "px"), this.size.height !== l && (r.height = this.size.height + "px"), e.css(r), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), n.isEmptyObject(r) || this._trigger("resize", t, this.ui()), !1) : !1
		},
		_mouseStop: function(t) {
			this.resizing = !1;
			var r, u, f, e, o, s, h, c = this.options,
				i = this;
			return this._helper && (r = this._proportionallyResizeElements, u = r.length && /textarea/i.test(r[0].nodeName), f = u && n.ui.hasScroll(r[0], "left") ? 0 : i.sizeDiff.height, e = u ? 0 : i.sizeDiff.width, o = {
				width: i.helper.width() - e,
				height: i.helper.height() - f
			}, s = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null, h = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null, c.animate || this.element.css(n.extend(o, {
				top: h,
				left: s
			})), i.helper.height(i.size.height), i.helper.width(i.size.width), this._helper && !c.animate && this._proportionallyResize()), n("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
		},
		_updateVirtualBoundaries: function(n) {
			var u, f, e, o, i, r = this.options;
			i = {
				minWidth: t(r.minWidth) ? r.minWidth : 0,
				maxWidth: t(r.maxWidth) ? r.maxWidth : Infinity,
				minHeight: t(r.minHeight) ? r.minHeight : 0,
				maxHeight: t(r.maxHeight) ? r.maxHeight : Infinity
			};
			(this._aspectRatio || n) && (u = i.minHeight * this.aspectRatio, e = i.minWidth / this.aspectRatio, f = i.maxHeight * this.aspectRatio, o = i.maxWidth / this.aspectRatio, u > i.minWidth && (i.minWidth = u), e > i.minHeight && (i.minHeight = e), f < i.maxWidth && (i.maxWidth = f), o < i.maxHeight && (i.maxHeight = o));
			this._vBoundaries = i
		},
		_updateCache: function(n) {
			this.offset = this.helper.offset();
			t(n.left) && (this.position.left = n.left);
			t(n.top) && (this.position.top = n.top);
			t(n.height) && (this.size.height = n.height);
			t(n.width) && (this.size.width = n.width)
		},
		_updateRatio: function(n) {
			var i = this.position,
				r = this.size,
				u = this.axis;
			return t(n.height) ? n.width = n.height * this.aspectRatio : t(n.width) && (n.height = n.width / this.aspectRatio), u === "sw" && (n.left = i.left + (r.width - n.width), n.top = null), u === "nw" && (n.top = i.top + (r.height - n.height), n.left = i.left + (r.width - n.width)), n
		},
		_respectSize: function(n) {
			var i = this._vBoundaries,
				r = this.axis,
				u = t(n.width) && i.maxWidth && i.maxWidth < n.width,
				f = t(n.height) && i.maxHeight && i.maxHeight < n.height,
				e = t(n.width) && i.minWidth && i.minWidth > n.width,
				o = t(n.height) && i.minHeight && i.minHeight > n.height,
				s = this.originalPosition.left + this.originalSize.width,
				h = this.position.top + this.size.height,
				c = /sw|nw|w/.test(r),
				l = /nw|ne|n/.test(r);
			return e && (n.width = i.minWidth), o && (n.height = i.minHeight), u && (n.width = i.maxWidth), f && (n.height = i.maxHeight), e && c && (n.left = s - i.minWidth), u && c && (n.left = s - i.maxWidth), o && l && (n.top = h - i.minHeight), f && l && (n.top = h - i.maxHeight), !n.width && !n.height && !n.left && n.top ? n.top = null : !n.width && !n.height && !n.top && n.left && (n.left = null), n
		},
		_proportionallyResize: function() {
			if (this._proportionallyResizeElements.length) for (var t, i, u, n, f = this.helper || this.element, r = 0; r < this._proportionallyResizeElements.length; r++) {
				if (n = this._proportionallyResizeElements[r], !this.borderDif) for (this.borderDif = [], i = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")], u = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")], t = 0; t < i.length; t++) this.borderDif[t] = (parseInt(i[t], 10) || 0) + (parseInt(u[t], 10) || 0);
				n.css({
					height: f.height() - this.borderDif[0] - this.borderDif[2] || 0,
					width: f.width() - this.borderDif[1] - this.borderDif[3] || 0
				})
			}
		},
		_renderProxy: function() {
			var t = this.element,
				i = this.options;
			this.elementOffset = t.offset();
			this._helper ? (this.helper = this.helper || n("<div style='overflow:hidden;'><\/div>"), this.helper.addClass(this._helper).css({
				width: this.element.outerWidth() - 1,
				height: this.element.outerHeight() - 1,
				position: "absolute",
				left: this.elementOffset.left + "px",
				top: this.elementOffset.top + "px",
				zIndex: ++i.zIndex
			}), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
		},
		_change: {
			e: function(n, t) {
				return {
					width: this.originalSize.width + t
				}
			},
			w: function(n, t) {
				var i = this.originalSize,
					r = this.originalPosition;
				return {
					left: r.left + t,
					width: i.width - t
				}
			},
			n: function(n, t, i) {
				var r = this.originalSize,
					u = this.originalPosition;
				return {
					top: u.top + i,
					height: r.height - i
				}
			},
			s: function(n, t, i) {
				return {
					height: this.originalSize.height + i
				}
			},
			se: function(t, i, r) {
				return n.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, r]))
			},
			sw: function(t, i, r) {
				return n.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, r]))
			},
			ne: function(t, i, r) {
				return n.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, r]))
			},
			nw: function(t, i, r) {
				return n.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, r]))
			}
		},
		_propagate: function(t, i) {
			n.ui.plugin.call(this, t, [i, this.ui()]);
			t !== "resize" && this._trigger(t, i, this.ui())
		},
		plugins: {},
		ui: function() {
			return {
				originalElement: this.originalElement,
				element: this.element,
				helper: this.helper,
				position: this.position,
				size: this.size,
				originalSize: this.originalSize,
				originalPosition: this.originalPosition
			}
		}
	});
	n.ui.plugin.add("resizable", "animate", {
		stop: function(t) {
			var i = n(this).data("ui-resizable"),
				u = i.options,
				r = i._proportionallyResizeElements,
				f = r.length && /textarea/i.test(r[0].nodeName),
				s = f && n.ui.hasScroll(r[0], "left") ? 0 : i.sizeDiff.height,
				h = f ? 0 : i.sizeDiff.width,
				c = {
					width: i.size.width - h,
					height: i.size.height - s
				},
				e = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
				o = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
			i.element.animate(n.extend(c, o && e ? {
				top: o,
				left: e
			} : {}), {
				duration: u.animateDuration,
				easing: u.animateEasing,
				step: function() {
					var u = {
						width: parseInt(i.element.css("width"), 10),
						height: parseInt(i.element.css("height"), 10),
						top: parseInt(i.element.css("top"), 10),
						left: parseInt(i.element.css("left"), 10)
					};
					r && r.length && n(r[0]).css({
						width: u.width,
						height: u.height
					});
					i._updateCache(u);
					i._propagate("resize", t)
				}
			})
		}
	});
	n.ui.plugin.add("resizable", "containment", {
		start: function() {
			var u, e, o, s, h, c, l, t = n(this).data("ui-resizable"),
				a = t.options,
				v = t.element,
				f = a.containment,
				r = f instanceof n ? f.get(0) : /parent/.test(f) ? v.parent().get(0) : f;
			r && (t.containerElement = n(r), /document/.test(f) || f === document ? (t.containerOffset = {
				left: 0,
				top: 0
			}, t.containerPosition = {
				left: 0,
				top: 0
			}, t.parentData = {
				element: n(document),
				left: 0,
				top: 0,
				width: n(document).width(),
				height: n(document).height() || document.body.parentNode.scrollHeight
			}) : (u = n(r), e = [], n(["Top", "Right", "Left", "Bottom"]).each(function(n, t) {
				e[n] = i(u.css("padding" + t))
			}), t.containerOffset = u.offset(), t.containerPosition = u.position(), t.containerSize = {
				height: u.innerHeight() - e[3],
				width: u.innerWidth() - e[1]
			}, o = t.containerOffset, s = t.containerSize.height, h = t.containerSize.width, c = n.ui.hasScroll(r, "left") ? r.scrollWidth : h, l = n.ui.hasScroll(r) ? r.scrollHeight : s, t.parentData = {
				element: r,
				left: o.left,
				top: o.top,
				width: c,
				height: l
			}))
		},
		resize: function(t) {
			var f, o, s, h, i = n(this).data("ui-resizable"),
				a = i.options,
				r = i.containerOffset,
				c = i.position,
				e = i._aspectRatio || t.shiftKey,
				u = {
					top: 0,
					left: 0
				},
				l = i.containerElement;
			l[0] !== document && /static/.test(l.css("position")) && (u = r);
			c.left < (i._helper ? r.left : 0) && (i.size.width = i.size.width + (i._helper ? i.position.left - r.left : i.position.left - u.left), e && (i.size.height = i.size.width / i.aspectRatio), i.position.left = a.helper ? r.left : 0);
			c.top < (i._helper ? r.top : 0) && (i.size.height = i.size.height + (i._helper ? i.position.top - r.top : i.position.top), e && (i.size.width = i.size.height * i.aspectRatio), i.position.top = i._helper ? r.top : 0);
			i.offset.left = i.parentData.left + i.position.left;
			i.offset.top = i.parentData.top + i.position.top;
			f = Math.abs((i._helper ? i.offset.left - u.left : i.offset.left - u.left) + i.sizeDiff.width);
			o = Math.abs((i._helper ? i.offset.top - u.top : i.offset.top - r.top) + i.sizeDiff.height);
			s = i.containerElement.get(0) === i.element.parent().get(0);
			h = /relative|absolute/.test(i.containerElement.css("position"));
			s && h && (f -= i.parentData.left);
			f + i.size.width >= i.parentData.width && (i.size.width = i.parentData.width - f, e && (i.size.height = i.size.width / i.aspectRatio));
			o + i.size.height >= i.parentData.height && (i.size.height = i.parentData.height - o, e && (i.size.width = i.size.height * i.aspectRatio))
		},
		stop: function() {
			var t = n(this).data("ui-resizable"),
				r = t.options,
				u = t.containerOffset,
				f = t.containerPosition,
				e = t.containerElement,
				i = n(t.helper),
				o = i.offset(),
				s = i.outerWidth() - t.sizeDiff.width,
				h = i.outerHeight() - t.sizeDiff.height;
			t._helper && !r.animate && /relative/.test(e.css("position")) && n(this).css({
				left: o.left - f.left - u.left,
				width: s,
				height: h
			});
			t._helper && !r.animate && /static/.test(e.css("position")) && n(this).css({
				left: o.left - f.left - u.left,
				width: s,
				height: h
			})
		}
	});
	n.ui.plugin.add("resizable", "alsoResize", {
		start: function() {
			var r = n(this).data("ui-resizable"),
				t = r.options,
				i = function(t) {
					n(t).each(function() {
						var t = n(this);
						t.data("ui-resizable-alsoresize", {
							width: parseInt(t.width(), 10),
							height: parseInt(t.height(), 10),
							left: parseInt(t.css("left"), 10),
							top: parseInt(t.css("top"), 10)
						})
					})
				};
			typeof t.alsoResize == "object" && !t.alsoResize.parentNode ? t.alsoResize.length ? (t.alsoResize = t.alsoResize[0], i(t.alsoResize)) : n.each(t.alsoResize, function(n) {
				i(n)
			}) : i(t.alsoResize)
		},
		resize: function(t, i) {
			var r = n(this).data("ui-resizable"),
				u = r.options,
				f = r.originalSize,
				e = r.originalPosition,
				s = {
					height: r.size.height - f.height || 0,
					width: r.size.width - f.width || 0,
					top: r.position.top - e.top || 0,
					left: r.position.left - e.left || 0
				},
				o = function(t, r) {
					n(t).each(function() {
						var t = n(this),
							f = n(this).data("ui-resizable-alsoresize"),
							u = {},
							e = r && r.length ? r : t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
						n.each(e, function(n, t) {
							var i = (f[t] || 0) + (s[t] || 0);
							i && i >= 0 && (u[t] = i || null)
						});
						t.css(u)
					})
				};
			typeof u.alsoResize == "object" && !u.alsoResize.nodeType ? n.each(u.alsoResize, function(n, t) {
				o(n, t)
			}) : o(u.alsoResize)
		},
		stop: function() {
			n(this).removeData("resizable-alsoresize")
		}
	});
	n.ui.plugin.add("resizable", "ghost", {
		start: function() {
			var t = n(this).data("ui-resizable"),
				i = t.options,
				r = t.size;
			t.ghost = t.originalElement.clone();
			t.ghost.css({
				opacity: .25,
				display: "block",
				position: "relative",
				height: r.height,
				width: r.width,
				margin: 0,
				left: 0,
				top: 0
			}).addClass("ui-resizable-ghost").addClass(typeof i.ghost == "string" ? i.ghost : "");
			t.ghost.appendTo(t.helper)
		},
		resize: function() {
			var t = n(this).data("ui-resizable");
			t.ghost && t.ghost.css({
				position: "relative",
				height: t.size.height,
				width: t.size.width
			})
		},
		stop: function() {
			var t = n(this).data("ui-resizable");
			t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
		}
	});
	n.ui.plugin.add("resizable", "grid", {
		resize: function() {
			var t = n(this).data("ui-resizable"),
				i = t.options,
				v = t.size,
				f = t.originalSize,
				e = t.originalPosition,
				h = t.axis,
				c = typeof i.grid == "number" ? [i.grid, i.grid] : i.grid,
				o = c[0] || 1,
				s = c[1] || 1,
				l = Math.round((v.width - f.width) / o) * o,
				a = Math.round((v.height - f.height) / s) * s,
				r = f.width + l,
				u = f.height + a,
				y = i.maxWidth && i.maxWidth < r,
				p = i.maxHeight && i.maxHeight < u,
				w = i.minWidth && i.minWidth > r,
				b = i.minHeight && i.minHeight > u;
			i.grid = c;
			w && (r += o);
			b && (u += s);
			y && (r -= o);
			p && (u -= s);
			/^(se|s|e)$/.test(h) ? (t.size.width = r, t.size.height = u) : /^(ne)$/.test(h) ? (t.size.width = r, t.size.height = u, t.position.top = e.top - a) : /^(sw)$/.test(h) ? (t.size.width = r, t.size.height = u, t.position.left = e.left - l) : (t.size.width = r, t.size.height = u, t.position.top = e.top - a, t.position.left = e.left - l)
		}
	})
}(jQuery), function(n) {
	n.widget("ui.selectable", n.ui.mouse, {
		version: "1.10.0",
		options: {
			appendTo: "body",
			autoRefresh: !0,
			distance: 0,
			filter: "*",
			tolerance: "touch",
			selected: null,
			selecting: null,
			start: null,
			stop: null,
			unselected: null,
			unselecting: null
		},
		_create: function() {
			var t, i = this;
			this.element.addClass("ui-selectable");
			this.dragged = !1;
			this.refresh = function() {
				t = n(i.options.filter, i.element[0]);
				t.addClass("ui-selectee");
				t.each(function() {
					var t = n(this),
						i = t.offset();
					n.data(this, "selectable-item", {
						element: this,
						$element: t,
						left: i.left,
						top: i.top,
						right: i.left + t.outerWidth(),
						bottom: i.top + t.outerHeight(),
						startselected: !1,
						selected: t.hasClass("ui-selected"),
						selecting: t.hasClass("ui-selecting"),
						unselecting: t.hasClass("ui-unselecting")
					})
				})
			};
			this.refresh();
			this.selectees = t.addClass("ui-selectee");
			this._mouseInit();
			this.helper = n("<div class='ui-selectable-helper'><\/div>")
		},
		_destroy: function() {
			this.selectees.removeClass("ui-selectee").removeData("selectable-item");
			this.element.removeClass("ui-selectable ui-selectable-disabled");
			this._mouseDestroy()
		},
		_mouseStart: function(t) {
			var i = this,
				r = this.options;
			(this.opos = [t.pageX, t.pageY], this.options.disabled) || (this.selectees = n(r.filter, this.element[0]), this._trigger("start", t), n(r.appendTo).append(this.helper), this.helper.css({
				left: t.pageX,
				top: t.pageY,
				width: 0,
				height: 0
			}), r.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
				var r = n.data(this, "selectable-item");
				r.startselected = !0;
				t.metaKey || t.ctrlKey || (r.$element.removeClass("ui-selected"), r.selected = !1, r.$element.addClass("ui-unselecting"), r.unselecting = !0, i._trigger("unselecting", t, {
					unselecting: r.element
				}))
			}), n(t.target).parents().addBack().each(function() {
				var u, r = n.data(this, "selectable-item");
				if (r) return u = !t.metaKey && !t.ctrlKey || !r.$element.hasClass("ui-selected"), r.$element.removeClass(u ? "ui-unselecting" : "ui-selected").addClass(u ? "ui-selecting" : "ui-unselecting"), r.unselecting = !u, r.selecting = u, r.selected = u, u ? i._trigger("selecting", t, {
					selecting: r.element
				}) : i._trigger("unselecting", t, {
					unselecting: r.element
				}), !1
			}))
		},
		_mouseDrag: function(t) {
			if (this.dragged = !0, !this.options.disabled) {
				var e, o = this,
					s = this.options,
					i = this.opos[0],
					r = this.opos[1],
					u = t.pageX,
					f = t.pageY;
				return i > u && (e = u, u = i, i = e), r > f && (e = f, f = r, r = e), this.helper.css({
					left: i,
					top: r,
					width: u - i,
					height: f - r
				}), this.selectees.each(function() {
					var e = n.data(this, "selectable-item"),
						h = !1;
					e && e.element !== o.element[0] && (s.tolerance === "touch" ? h = !(e.left > u || e.right < i || e.top > f || e.bottom < r) : s.tolerance === "fit" && (h = e.left > i && e.right < u && e.top > r && e.bottom < f), h ? (e.selected && (e.$element.removeClass("ui-selected"), e.selected = !1), e.unselecting && (e.$element.removeClass("ui-unselecting"), e.unselecting = !1), e.selecting || (e.$element.addClass("ui-selecting"), e.selecting = !0, o._trigger("selecting", t, {
						selecting: e.element
					}))) : (e.selecting && ((t.metaKey || t.ctrlKey) && e.startselected ? (e.$element.removeClass("ui-selecting"), e.selecting = !1, e.$element.addClass("ui-selected"), e.selected = !0) : (e.$element.removeClass("ui-selecting"), e.selecting = !1, e.startselected && (e.$element.addClass("ui-unselecting"), e.unselecting = !0), o._trigger("unselecting", t, {
						unselecting: e.element
					}))), e.selected && !t.metaKey && !t.ctrlKey && !e.startselected && (e.$element.removeClass("ui-selected"), e.selected = !1, e.$element.addClass("ui-unselecting"), e.unselecting = !0, o._trigger("unselecting", t, {
						unselecting: e.element
					}))))
				}), !1
			}
		},
		_mouseStop: function(t) {
			var i = this;
			return this.dragged = !1, n(".ui-unselecting", this.element[0]).each(function() {
				var r = n.data(this, "selectable-item");
				r.$element.removeClass("ui-unselecting");
				r.unselecting = !1;
				r.startselected = !1;
				i._trigger("unselected", t, {
					unselected: r.element
				})
			}), n(".ui-selecting", this.element[0]).each(function() {
				var r = n.data(this, "selectable-item");
				r.$element.removeClass("ui-selecting").addClass("ui-selected");
				r.selecting = !1;
				r.selected = !0;
				r.startselected = !0;
				i._trigger("selected", t, {
					selected: r.element
				})
			}), this._trigger("stop", t), this.helper.remove(), !1
		}
	})
}(jQuery), function(n) {
	var t = 5;
	n.widget("ui.slider", n.ui.mouse, {
		version: "1.10.0",
		widgetEventPrefix: "slide",
		options: {
			animate: !1,
			distance: 0,
			max: 100,
			min: 0,
			orientation: "horizontal",
			range: !1,
			step: 1,
			value: 0,
			values: null,
			change: null,
			slide: null,
			start: null,
			stop: null
		},
		_create: function() {
			var i, r, t = this.options,
				u = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
				f = [];
			for (this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this.range = n([]), t.range && (t.range === !0 && (t.values ? t.values.length && t.values.length !== 2 ? t.values = [t.values[0], t.values[0]] : n.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range = n("<div><\/div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + (t.range === "min" || t.range === "max" ? " ui-slider-range-" + t.range : ""))), r = t.values && t.values.length || 1, i = u.length; i < r; i++) f.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'><\/a>");
			this.handles = u.add(n(f.join("")).appendTo(this.element));
			this.handle = this.handles.eq(0);
			this.handles.add(this.range).filter("a").click(function(n) {
				n.preventDefault()
			}).mouseenter(function() {
				t.disabled || n(this).addClass("ui-state-hover")
			}).mouseleave(function() {
				n(this).removeClass("ui-state-hover")
			}).focus(function() {
				t.disabled ? n(this).blur() : (n(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), n(this).addClass("ui-state-focus"))
			}).blur(function() {
				n(this).removeClass("ui-state-focus")
			});
			this.handles.each(function(t) {
				n(this).data("ui-slider-handle-index", t)
			});
			this._setOption("disabled", t.disabled);
			this._on(this.handles, this._handleEvents);
			this._refreshValue();
			this._animateOff = !1
		},
		_destroy: function() {
			this.handles.remove();
			this.range.remove();
			this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");
			this._mouseDestroy()
		},
		_mouseCapture: function(t) {
			var s, f, r, i, u, h, e, c, o = this,
				l = this.options;
			return l.disabled ? !1 : (this.elementSize = {
				width: this.element.outerWidth(),
				height: this.element.outerHeight()
			}, this.elementOffset = this.element.offset(), s = {
				x: t.pageX,
				y: t.pageY
			}, f = this._normValueFromMouse(s), r = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
				var e = Math.abs(f - o.values(t));
				(r > e || r === e && (t === o._lastChangedValue || o.values(t) === l.min)) && (r = e, i = n(this), u = t)
			}), h = this._start(t, u), h === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = u, i.addClass("ui-state-active").focus(), e = i.offset(), c = !n(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = c ? {
				left: 0,
				top: 0
			} : {
				left: t.pageX - e.left - i.width() / 2,
				top: t.pageY - e.top - i.height() / 2 - (parseInt(i.css("borderTopWidth"), 10) || 0) - (parseInt(i.css("borderBottomWidth"), 10) || 0) + (parseInt(i.css("marginTop"), 10) || 0)
			}, this.handles.hasClass("ui-state-hover") || this._slide(t, u, f), this._animateOff = !0, !0))
		},
		_mouseStart: function() {
			return !0
		},
		_mouseDrag: function(n) {
			var t = {
				x: n.pageX,
				y: n.pageY
			},
				i = this._normValueFromMouse(t);
			return this._slide(n, this._handleIndex, i), !1
		},
		_mouseStop: function(n) {
			return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(n, this._handleIndex), this._change(n, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
		},
		_detectOrientation: function() {
			this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
		},
		_normValueFromMouse: function(n) {
			var i, r, t, u, f;
			return this.orientation === "horizontal" ? (i = this.elementSize.width, r = n.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (i = this.elementSize.height, r = n.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), t = r / i, t > 1 && (t = 1), t < 0 && (t = 0), this.orientation === "vertical" && (t = 1 - t), u = this._valueMax() - this._valueMin(), f = this._valueMin() + t * u, this._trimAlignValue(f)
		},
		_start: function(n, t) {
			var i = {
				handle: this.handles[t],
				value: this.value()
			};
			return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", n, i)
		},
		_slide: function(n, t, i) {
			var r, f, u;
			this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1), this.options.values.length === 2 && this.options.range === !0 && (t === 0 && i > r || t === 1 && i < r) && (i = r), i !== this.values(t) && (f = this.values(), f[t] = i, u = this._trigger("slide", n, {
				handle: this.handles[t],
				value: i,
				values: f
			}), r = this.values(t ? 0 : 1), u !== !1 && this.values(t, i, !0))) : i !== this.value() && (u = this._trigger("slide", n, {
				handle: this.handles[t],
				value: i
			}), u !== !1 && this.value(i))
		},
		_stop: function(n, t) {
			var i = {
				handle: this.handles[t],
				value: this.value()
			};
			this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values());
			this._trigger("stop", n, i)
		},
		_change: function(n, t) {
			if (!this._keySliding && !this._mouseSliding) {
				var i = {
					handle: this.handles[t],
					value: this.value()
				};
				this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values());
				this._lastChangedValue = t;
				this._trigger("change", n, i)
			}
		},
		value: function(n) {
			if (arguments.length) {
				this.options.value = this._trimAlignValue(n);
				this._refreshValue();
				this._change(null, 0);
				return
			}
			return this._value()
		},
		values: function(t, i) {
			var u, f, r;
			if (arguments.length > 1) {
				this.options.values[t] = this._trimAlignValue(i);
				this._refreshValue();
				this._change(null, t);
				return
			}
			if (!arguments.length) return this._values();
			if (!n.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
			for (u = this.options.values, f = arguments[0], r = 0; r < u.length; r += 1) u[r] = this._trimAlignValue(f[r]), this._change(null, r);
			this._refreshValue()
		},
		_setOption: function(t, i) {
			var r, u = 0;
			n.isArray(this.options.values) && (u = this.options.values.length);
			n.Widget.prototype._setOption.apply(this, arguments);
			switch (t) {
			case "disabled":
				i ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.prop("disabled", !0)) : this.handles.prop("disabled", !1);
				break;
			case "orientation":
				this._detectOrientation();
				this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
				this._refreshValue();
				break;
			case "value":
				this._animateOff = !0;
				this._refreshValue();
				this._change(null, 0);
				this._animateOff = !1;
				break;
			case "values":
				for (this._animateOff = !0, this._refreshValue(), r = 0; r < u; r += 1) this._change(null, r);
				this._animateOff = !1;
				break;
			case "min":
			case "max":
				this._animateOff = !0;
				this._refreshValue();
				this._animateOff = !1
			}
		},
		_value: function() {
			var n = this.options.value;
			return n = this._trimAlignValue(n), n
		},
		_values: function(n) {
			var r, t, i;
			if (arguments.length) return r = this.options.values[n], r = this._trimAlignValue(r), r;
			for (t = this.options.values.slice(), i = 0; i < t.length; i += 1) t[i] = this._trimAlignValue(t[i]);
			return t
		},
		_trimAlignValue: function(n) {
			if (n <= this._valueMin()) return this._valueMin();
			if (n >= this._valueMax()) return this._valueMax();
			var t = this.options.step > 0 ? this.options.step : 1,
				i = (n - this._valueMin()) % t,
				r = n - i;
			return Math.abs(i) * 2 >= t && (r += i > 0 ? t : -t), parseFloat(r.toFixed(5))
		},
		_valueMin: function() {
			return this.options.min
		},
		_valueMax: function() {
			return this.options.max
		},
		_refreshValue: function() {
			var s, t, c, f, h, e = this.options.range,
				i = this.options,
				r = this,
				u = this._animateOff ? !1 : i.animate,
				o = {};
			this.options.values && this.options.values.length ? this.handles.each(function(f) {
				t = (r.values(f) - r._valueMin()) / (r._valueMax() - r._valueMin()) * 100;
				o[r.orientation === "horizontal" ? "left" : "bottom"] = t + "%";
				n(this).stop(1, 1)[u ? "animate" : "css"](o, i.animate);
				r.options.range === !0 && (r.orientation === "horizontal" ? (f === 0 && r.range.stop(1, 1)[u ? "animate" : "css"]({
					left: t + "%"
				}, i.animate), f === 1 && r.range[u ? "animate" : "css"]({
					width: t - s + "%"
				}, {
					queue: !1,
					duration: i.animate
				})) : (f === 0 && r.range.stop(1, 1)[u ? "animate" : "css"]({
					bottom: t + "%"
				}, i.animate), f === 1 && r.range[u ? "animate" : "css"]({
					height: t - s + "%"
				}, {
					queue: !1,
					duration: i.animate
				})));
				s = t
			}) : (c = this.value(), f = this._valueMin(), h = this._valueMax(), t = h !== f ? (c - f) / (h - f) * 100 : 0, o[this.orientation === "horizontal" ? "left" : "bottom"] = t + "%", this.handle.stop(1, 1)[u ? "animate" : "css"](o, i.animate), e === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[u ? "animate" : "css"]({
				width: t + "%"
			}, i.animate), e === "max" && this.orientation === "horizontal" && this.range[u ? "animate" : "css"]({
				width: 100 - t + "%"
			}, {
				queue: !1,
				duration: i.animate
			}), e === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[u ? "animate" : "css"]({
				height: t + "%"
			}, i.animate), e === "max" && this.orientation === "vertical" && this.range[u ? "animate" : "css"]({
				height: 100 - t + "%"
			}, {
				queue: !1,
				duration: i.animate
			}))
		},
		_handleEvents: {
			keydown: function(i) {
				var o, u, r, f, e = n(i.target).data("ui-slider-handle-index");
				switch (i.keyCode) {
				case n.ui.keyCode.HOME:
				case n.ui.keyCode.END:
				case n.ui.keyCode.PAGE_UP:
				case n.ui.keyCode.PAGE_DOWN:
				case n.ui.keyCode.UP:
				case n.ui.keyCode.RIGHT:
				case n.ui.keyCode.DOWN:
				case n.ui.keyCode.LEFT:
					if (i.preventDefault(), !this._keySliding && (this._keySliding = !0, n(i.target).addClass("ui-state-active"), o = this._start(i, e), o === !1)) return
				}
				f = this.options.step;
				u = r = this.options.values && this.options.values.length ? this.values(e) : this.value();
				switch (i.keyCode) {
				case n.ui.keyCode.HOME:
					r = this._valueMin();
					break;
				case n.ui.keyCode.END:
					r = this._valueMax();
					break;
				case n.ui.keyCode.PAGE_UP:
					r = this._trimAlignValue(u + (this._valueMax() - this._valueMin()) / t);
					break;
				case n.ui.keyCode.PAGE_DOWN:
					r = this._trimAlignValue(u - (this._valueMax() - this._valueMin()) / t);
					break;
				case n.ui.keyCode.UP:
				case n.ui.keyCode.RIGHT:
					if (u === this._valueMax()) return;
					r = this._trimAlignValue(u + f);
					break;
				case n.ui.keyCode.DOWN:
				case n.ui.keyCode.LEFT:
					if (u === this._valueMin()) return;
					r = this._trimAlignValue(u - f)
				}
				this._slide(i, e, r)
			},
			keyup: function(t) {
				var i = n(t.target).data("ui-slider-handle-index");
				this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), n(t.target).removeClass("ui-state-active"))
			}
		}
	})
}(jQuery), function(n) {
	function t(n, t, i) {
		return n > t && n < t + i
	}
	n.widget("ui.sortable", n.ui.mouse, {
		version: "1.10.0",
		widgetEventPrefix: "sort",
		ready: !1,
		options: {
			appendTo: "parent",
			axis: !1,
			connectWith: !1,
			containment: !1,
			cursor: "auto",
			cursorAt: !1,
			dropOnEmpty: !0,
			forcePlaceholderSize: !1,
			forceHelperSize: !1,
			grid: !1,
			handle: !1,
			helper: "original",
			items: "> *",
			opacity: !1,
			placeholder: !1,
			revert: !1,
			scroll: !0,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			scope: "default",
			tolerance: "intersect",
			zIndex: 1e3,
			activate: null,
			beforeStop: null,
			change: null,
			deactivate: null,
			out: null,
			over: null,
			receive: null,
			remove: null,
			sort: null,
			start: null,
			stop: null,
			update: null
		},
		_create: function() {
			var n = this.options;
			this.containerCache = {};
			this.element.addClass("ui-sortable");
			this.refresh();
			this.floating = this.items.length ? n.axis === "x" || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1;
			this.offset = this.element.offset();
			this._mouseInit();
			this.ready = !0
		},
		_destroy: function() {
			this.element.removeClass("ui-sortable ui-sortable-disabled");
			this._mouseDestroy();
			for (var n = this.items.length - 1; n >= 0; n--) this.items[n].item.removeData(this.widgetName + "-item");
			return this
		},
		_setOption: function(t, i) {
			t === "disabled" ? (this.options[t] = i, this.widget().toggleClass("ui-sortable-disabled", !! i)) : n.Widget.prototype._setOption.apply(this, arguments)
		},
		_mouseCapture: function(t, i) {
			var r = null,
				f = !1,
				u = this;
			return this.reverting ? !1 : this.options.disabled || this.options.type === "static" ? !1 : (this._refreshItems(t), n(t.target).parents().each(function() {
				if (n.data(this, u.widgetName + "-item") === u) return r = n(this), !1
			}), n.data(t.target, u.widgetName + "-item") === u && (r = n(t.target)), !r) ? !1 : this.options.handle && !i && (n(this.options.handle, r).find("*").addBack().each(function() {
				this === t.target && (f = !0)
			}), !f) ? !1 : (this.currentItem = r, this._removeCurrentsFromItems(), !0)
		},
		_mouseStart: function(t, i, r) {
			var f, u = this.options;
			if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
				top: this.offset.top - this.margins.top,
				left: this.offset.left - this.margins.left
			}, n.extend(this.offset, {
				click: {
					left: t.pageX - this.offset.left,
					top: t.pageY - this.offset.top
				},
				parent: this._getParentOffset(),
				relative: this._getRelativeOffset()
			}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, u.cursorAt && this._adjustOffsetFromHelper(u.cursorAt), this.domPosition = {
				prev: this.currentItem.prev()[0],
				parent: this.currentItem.parent()[0]
			}, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), u.containment && this._setContainment(), u.cursor && (n("body").css("cursor") && (this._storedCursor = n("body").css("cursor")), n("body").css("cursor", u.cursor)), u.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", u.opacity)), u.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", u.zIndex)), this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML" && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !r) for (f = this.containers.length - 1; f >= 0; f--) this.containers[f]._trigger("activate", t, this._uiHash(this));
			return n.ui.ddmanager && (n.ui.ddmanager.current = this), n.ui.ddmanager && !u.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
		},
		_mouseDrag: function(t) {
			var e, u, f, o, i = this.options,
				r = !1;
			for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - this.overflowOffset.top < i.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - i.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - this.overflowOffset.left < i.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - i.scrollSpeed)) : (t.pageY - n(document).scrollTop() < i.scrollSensitivity ? r = n(document).scrollTop(n(document).scrollTop() - i.scrollSpeed) : n(window).height() - (t.pageY - n(document).scrollTop()) < i.scrollSensitivity && (r = n(document).scrollTop(n(document).scrollTop() + i.scrollSpeed)), t.pageX - n(document).scrollLeft() < i.scrollSensitivity ? r = n(document).scrollLeft(n(document).scrollLeft() - i.scrollSpeed) : n(window).width() - (t.pageX - n(document).scrollLeft()) < i.scrollSensitivity && (r = n(document).scrollLeft(n(document).scrollLeft() + i.scrollSpeed))), r !== !1 && n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && this.options.axis === "y" || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && this.options.axis === "x" || (this.helper[0].style.top = this.position.top + "px"), e = this.items.length - 1; e >= 0; e--) if ((u = this.items[e], f = u.item[0], o = this._intersectsWithPointer(u), o) && u.instance === this.currentContainer && f !== this.currentItem[0] && this.placeholder[o === 1 ? "next" : "prev"]()[0] !== f && !n.contains(this.placeholder[0], f) && (this.options.type === "semi-dynamic" ? !n.contains(this.element[0], f) : !0)) {
				if (this.direction = o === 1 ? "down" : "up", this.options.tolerance !== "pointer" && !this._intersectsWithSides(u)) break;
				this._rearrange(t, u);
				this._trigger("change", t, this._uiHash());
				break
			}
			return this._contactContainers(t), n.ui.ddmanager && n.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
		},
		_mouseStop: function(t, i) {
			if (t) {
				if (n.ui.ddmanager && !this.options.dropBehaviour && n.ui.ddmanager.drop(this, t), this.options.revert) {
					var u = this,
						r = this.placeholder.offset();
					this.reverting = !0;
					n(this.helper).animate({
						left: r.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft),
						top: r.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)
					}, parseInt(this.options.revert, 10) || 500, function() {
						u._clear(t)
					})
				} else this._clear(t, i);
				return !1
			}
		},
		cancel: function() {
			if (this.dragging) {
				this._mouseUp({
					target: null
				});
				this.options.helper === "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
				for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
			}
			return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.options.helper !== "original" && this.helper && this.helper[0].parentNode && this.helper.remove(), n.extend(this, {
				helper: null,
				dragging: !1,
				reverting: !1,
				_noFinalSort: null
			}), this.domPosition.prev ? n(this.domPosition.prev).after(this.currentItem) : n(this.domPosition.parent).prepend(this.currentItem)), this
		},
		serialize: function(t) {
			var r = this._getItemsAsjQuery(t && t.connected),
				i = [];
			return t = t || {}, n(r).each(function() {
				var r = (n(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
				r && i.push((t.key || r[1] + "[]") + "=" + (t.key && t.expression ? r[1] : r[2]))
			}), !i.length && t.key && i.push(t.key + "="), i.join("&")
		},
		toArray: function(t) {
			var r = this._getItemsAsjQuery(t && t.connected),
				i = [];
			return t = t || {}, r.each(function() {
				i.push(n(t.item || this).attr(t.attribute || "id") || "")
			}), i
		},
		_intersectsWith: function(n) {
			var t = this.positionAbs.left,
				h = t + this.helperProportions.width,
				i = this.positionAbs.top,
				c = i + this.helperProportions.height,
				r = n.left,
				f = r + n.width,
				u = n.top,
				e = u + n.height,
				o = this.offset.click.top,
				s = this.offset.click.left,
				l = i + o > u && i + o < e && t + s > r && t + s < f;
			return this.options.tolerance === "pointer" || this.options.forcePointerForContainers || this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > n[this.floating ? "width" : "height"] ? l : r < t + this.helperProportions.width / 2 && h - this.helperProportions.width / 2 < f && u < i + this.helperProportions.height / 2 && c - this.helperProportions.height / 2 < e
		},
		_intersectsWithPointer: function(n) {
			var u = this.options.axis === "x" || t(this.positionAbs.top + this.offset.click.top, n.top, n.height),
				f = this.options.axis === "y" || t(this.positionAbs.left + this.offset.click.left, n.left, n.width),
				e = u && f,
				i = this._getDragVerticalDirection(),
				r = this._getDragHorizontalDirection();
			return e ? this.floating ? r && r === "right" || i === "down" ? 2 : 1 : i && (i === "down" ? 2 : 1) : !1
		},
		_intersectsWithSides: function(n) {
			var u = t(this.positionAbs.top + this.offset.click.top, n.top + n.height / 2, n.height),
				f = t(this.positionAbs.left + this.offset.click.left, n.left + n.width / 2, n.width),
				i = this._getDragVerticalDirection(),
				r = this._getDragHorizontalDirection();
			return this.floating && r ? r === "right" && f || r === "left" && !f : i && (i === "down" && u || i === "up" && !u)
		},
		_getDragVerticalDirection: function() {
			var n = this.positionAbs.top - this.lastPositionAbs.top;
			return n !== 0 && (n > 0 ? "down" : "up")
		},
		_getDragHorizontalDirection: function() {
			var n = this.positionAbs.left - this.lastPositionAbs.left;
			return n !== 0 && (n > 0 ? "right" : "left")
		},
		refresh: function(n) {
			return this._refreshItems(n), this.refreshPositions(), this
		},
		_connectWith: function() {
			var n = this.options;
			return n.connectWith.constructor === String ? [n.connectWith] : n.connectWith
		},
		_getItemsAsjQuery: function(t) {
			var r, u, e, i, s = [],
				f = [],
				o = this._connectWith();
			if (o && t) for (r = o.length - 1; r >= 0; r--) for (e = n(o[r]), u = e.length - 1; u >= 0; u--) i = n.data(e[u], this.widgetFullName), i && i !== this && !i.options.disabled && f.push([n.isFunction(i.options.items) ? i.options.items.call(i.element) : n(i.options.items, i.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), i]);
			for (f.push([n.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
				options: this.options,
				item: this.currentItem
			}) : n(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), r = f.length - 1; r >= 0; r--) f[r][0].each(function() {
				s.push(this)
			});
			return n(s)
		},
		_removeCurrentsFromItems: function() {
			var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
			this.items = n.grep(this.items, function(n) {
				for (var i = 0; i < t.length; i++) if (t[i] === n.item[0]) return !1;
				return !0
			})
		},
		_refreshItems: function(t) {
			this.items = [];
			this.containers = [this];
			var r, u, e, i, o, s, h, l, a = this.items,
				f = [
					[n.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
						item: this.currentItem
					}) : n(this.options.items, this.element), this]
				],
				c = this._connectWith();
			if (c && this.ready) for (r = c.length - 1; r >= 0; r--) for (e = n(c[r]), u = e.length - 1; u >= 0; u--) i = n.data(e[u], this.widgetFullName), i && i !== this && !i.options.disabled && (f.push([n.isFunction(i.options.items) ? i.options.items.call(i.element[0], t, {
				item: this.currentItem
			}) : n(i.options.items, i.element), i]), this.containers.push(i));
			for (r = f.length - 1; r >= 0; r--) for (o = f[r][1], s = f[r][0], u = 0, l = s.length; u < l; u++) h = n(s[u]), h.data(this.widgetName + "-item", o), a.push({
				item: h,
				instance: o,
				width: 0,
				height: 0,
				left: 0,
				top: 0
			})
		},
		refreshPositions: function(t) {
			this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
			for (var r, f, u, i = this.items.length - 1; i >= 0; i--)(r = this.items[i], r.instance !== this.currentContainer && this.currentContainer && r.item[0] !== this.currentItem[0]) || (f = this.options.toleranceElement ? n(this.options.toleranceElement, r.item) : r.item, t || (r.width = f.outerWidth(), r.height = f.outerHeight()), u = f.offset(), r.left = u.left, r.top = u.top);
			if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
			else for (i = this.containers.length - 1; i >= 0; i--) u = this.containers[i].element.offset(), this.containers[i].containerCache.left = u.left, this.containers[i].containerCache.top = u.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
			return this
		},
		_createPlaceholder: function(t) {
			t = t || this;
			var r, i = t.options;
			i.placeholder && i.placeholder.constructor !== String || (r = i.placeholder, i.placeholder = {
				element: function() {
					var i = n(document.createElement(t.currentItem[0].nodeName)).addClass(r || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
					return r || (i.style.visibility = "hidden"), i
				},
				update: function(n, u) {
					(!r || i.forcePlaceholderSize) && (u.height() || u.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), u.width() || u.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
				}
			});
			t.placeholder = n(i.placeholder.element.call(t.element, t.currentItem));
			t.currentItem.after(t.placeholder);
			i.placeholder.update(t, t.placeholder)
		},
		_contactContainers: function(t) {
			for (var u, c, e, s, l, o, f, a, h = null, i = null, r = this.containers.length - 1; r >= 0; r--) if (!n.contains(this.currentItem[0], this.containers[r].element[0])) if (this._intersectsWith(this.containers[r].containerCache)) {
				if (h && n.contains(this.containers[r].element[0], h.element[0])) continue;
				h = this.containers[r];
				i = r
			} else this.containers[r].containerCache.over && (this.containers[r]._trigger("out", t, this._uiHash(this)), this.containers[r].containerCache.over = 0);
			if (h) if (this.containers.length === 1) this.containers[i]._trigger("over", t, this._uiHash(this)), this.containers[i].containerCache.over = 1;
			else {
				for (c = 1e4, e = null, s = this.containers[i].floating ? "left" : "top", l = this.containers[i].floating ? "width" : "height", o = this.positionAbs[s] + this.offset.click[s], u = this.items.length - 1; u >= 0; u--) n.contains(this.containers[i].element[0], this.items[u].item[0]) && this.items[u].item[0] !== this.currentItem[0] && (f = this.items[u].item.offset()[s], a = !1, Math.abs(f - o) > Math.abs(f + this.items[u][l] - o) && (a = !0, f += this.items[u][l]), Math.abs(f - o) < c && (c = Math.abs(f - o), e = this.items[u], this.direction = a ? "up" : "down"));
				if (!e && !this.options.dropOnEmpty) return;
				this.currentContainer = this.containers[i];
				e ? this._rearrange(t, e, null, !0) : this._rearrange(t, null, this.containers[i].element, !0);
				this._trigger("change", t, this._uiHash());
				this.containers[i]._trigger("change", t, this._uiHash(this));
				this.options.placeholder.update(this.currentContainer, this.placeholder);
				this.containers[i]._trigger("over", t, this._uiHash(this));
				this.containers[i].containerCache.over = 1
			}
		},
		_createHelper: function(t) {
			var r = this.options,
				i = n.isFunction(r.helper) ? n(r.helper.apply(this.element[0], [t, this.currentItem])) : r.helper === "clone" ? this.currentItem.clone() : this.currentItem;
			return i.parents("body").length || n(r.appendTo !== "parent" ? r.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), i[0] === this.currentItem[0] && (this._storedCSS = {
				width: this.currentItem[0].style.width,
				height: this.currentItem[0].style.height,
				position: this.currentItem.css("position"),
				top: this.currentItem.css("top"),
				left: this.currentItem.css("left")
			}), (!i[0].style.width || r.forceHelperSize) && i.width(this.currentItem.width()), (!i[0].style.height || r.forceHelperSize) && i.height(this.currentItem.height()), i
		},
		_adjustOffsetFromHelper: function(t) {
			typeof t == "string" && (t = t.split(" "));
			n.isArray(t) && (t = {
				left: +t[0],
				top: +t[1] || 0
			});
			"left" in t && (this.offset.click.left = t.left + this.margins.left);
			"right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left);
			"top" in t && (this.offset.click.top = t.top + this.margins.top);
			"bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
		},
		_getParentOffset: function() {
			this.offsetParent = this.helper.offsetParent();
			var t = this.offsetParent.offset();
			return this.cssPosition === "absolute" && this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && n.ui.ie) && (t = {
				top: 0,
				left: 0
			}), {
				top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset: function() {
			if (this.cssPosition === "relative") {
				var n = this.currentItem.position();
				return {
					top: n.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
					left: n.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
				}
			}
			return {
				top: 0,
				left: 0
			}
		},
		_cacheMargins: function() {
			this.margins = {
				left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
				top: parseInt(this.currentItem.css("marginTop"), 10) || 0
			}
		},
		_cacheHelperProportions: function() {
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			}
		},
		_setContainment: function() {
			var t, r, u, i = this.options;
			i.containment === "parent" && (i.containment = this.helper[0].parentNode);
			(i.containment === "document" || i.containment === "window") && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, n(i.containment === "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (n(i.containment === "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]);
			/^(document|window|parent)$/.test(i.containment) || (t = n(i.containment)[0], r = n(i.containment).offset(), u = n(t).css("overflow") !== "hidden", this.containment = [r.left + (parseInt(n(t).css("borderLeftWidth"), 10) || 0) + (parseInt(n(t).css("paddingLeft"), 10) || 0) - this.margins.left, r.top + (parseInt(n(t).css("borderTopWidth"), 10) || 0) + (parseInt(n(t).css("paddingTop"), 10) || 0) - this.margins.top, r.left + (u ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(n(t).css("borderLeftWidth"), 10) || 0) - (parseInt(n(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, r.top + (u ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(n(t).css("borderTopWidth"), 10) || 0) - (parseInt(n(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
		},
		_convertPositionTo: function(t, i) {
			i || (i = this.position);
			var r = t === "absolute" ? 1 : -1,
				u = this.cssPosition !== "absolute" || this.scrollParent[0] !== document && !! n.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
				f = /(html|body)/i.test(u[0].tagName);
			return {
				top: i.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : f ? 0 : u.scrollTop()) * r,
				left: i.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : f ? 0 : u.scrollLeft()) * r
			}
		},
		_generatePosition: function(t) {
			var r, u, i = this.options,
				f = t.pageX,
				e = t.pageY,
				o = this.cssPosition !== "absolute" || this.scrollParent[0] !== document && !! n.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
				s = /(html|body)/i.test(o[0].tagName);
			return this.cssPosition === "relative" && (this.scrollParent[0] === document || this.scrollParent[0] === this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (e = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (e = this.containment[3] + this.offset.click.top)), i.grid && (r = this.originalPageY + Math.round((e - this.originalPageY) / i.grid[1]) * i.grid[1], e = this.containment ? r - this.offset.click.top >= this.containment[1] && r - this.offset.click.top <= this.containment[3] ? r : r - this.offset.click.top >= this.containment[1] ? r - i.grid[1] : r + i.grid[1] : r, u = this.originalPageX + Math.round((f - this.originalPageX) / i.grid[0]) * i.grid[0], f = this.containment ? u - this.offset.click.left >= this.containment[0] && u - this.offset.click.left <= this.containment[2] ? u : u - this.offset.click.left >= this.containment[0] ? u - i.grid[0] : u + i.grid[0] : u)), {
				top: e - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : s ? 0 : o.scrollTop()),
				left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : s ? 0 : o.scrollLeft())
			}
		},
		_rearrange: function(n, t, i, r) {
			i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], this.direction === "down" ? t.item[0] : t.item[0].nextSibling);
			this.counter = this.counter ? ++this.counter : 1;
			var u = this.counter;
			this._delay(function() {
				u === this.counter && this.refreshPositions(!r)
			})
		},
		_clear: function(t, i) {
			this.reverting = !1;
			var r, u = [];
			if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
				for (r in this._storedCSS)(this._storedCSS[r] === "auto" || this._storedCSS[r] === "static") && (this._storedCSS[r] = "");
				this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
			} else this.currentItem.show();
			for (this.fromOutside && !i && u.push(function(n) {
				this._trigger("receive", n, this._uiHash(this.fromOutside))
			}), (this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !i && u.push(function(n) {
				this._trigger("update", n, this._uiHash())
			}), this !== this.currentContainer && (i || (u.push(function(n) {
				this._trigger("remove", n, this._uiHash())
			}), u.push(function(n) {
				return function(t) {
					n._trigger("receive", t, this._uiHash(this))
				}
			}.call(this, this.currentContainer)), u.push(function(n) {
				return function(t) {
					n._trigger("update", t, this._uiHash(this))
				}
			}.call(this, this.currentContainer)))), r = this.containers.length - 1; r >= 0; r--) i || u.push(function(n) {
				return function(t) {
					n._trigger("deactivate", t, this._uiHash(this))
				}
			}.call(this, this.containers[r])), this.containers[r].containerCache.over && (u.push(function(n) {
				return function(t) {
					n._trigger("out", t, this._uiHash(this))
				}
			}.call(this, this.containers[r])), this.containers[r].containerCache.over = 0);
			if (this._storedCursor && n("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
				if (!i) {
					for (this._trigger("beforeStop", t, this._uiHash()), r = 0; r < u.length; r++) u[r].call(this, t);
					this._trigger("stop", t, this._uiHash())
				}
				return this.fromOutside = !1, !1
			}
			if (i || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !i) {
				for (r = 0; r < u.length; r++) u[r].call(this, t);
				this._trigger("stop", t, this._uiHash())
			}
			return this.fromOutside = !1, !0
		},
		_trigger: function() {
			n.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
		},
		_uiHash: function(t) {
			var i = t || this;
			return {
				helper: i.helper,
				placeholder: i.placeholder || n([]),
				position: i.position,
				originalPosition: i.originalPosition,
				offset: i.positionAbs,
				item: i.currentItem,
				sender: t ? t.element : null
			}
		}
	})
}(jQuery), function(n) {
	function t(n) {
		return function() {
			var t = this.element.val();
			n.apply(this, arguments);
			this._refresh();
			t !== this.element.val() && this._trigger("change")
		}
	}
	n.widget("ui.spinner", {
		version: "1.10.0",
		defaultElement: "<input>",
		widgetEventPrefix: "spin",
		options: {
			culture: null,
			icons: {
				down: "ui-icon-triangle-1-s",
				up: "ui-icon-triangle-1-n"
			},
			incremental: !0,
			max: null,
			min: null,
			numberFormat: null,
			page: 10,
			step: 1,
			change: null,
			spin: null,
			start: null,
			stop: null
		},
		_create: function() {
			this._setOption("max", this.options.max);
			this._setOption("min", this.options.min);
			this._setOption("step", this.options.step);
			this._value(this.element.val(), !0);
			this._draw();
			this._on(this._events);
			this._refresh();
			this._on(this.window, {
				beforeunload: function() {
					this.element.removeAttr("autocomplete")
				}
			})
		},
		_getCreateOptions: function() {
			var t = {},
				i = this.element;
			return n.each(["min", "max", "step"], function(n, r) {
				var u = i.attr(r);
				u !== undefined && u.length && (t[r] = u)
			}), t
		},
		_events: {
			keydown: function(n) {
				this._start(n) && this._keydown(n) && n.preventDefault()
			},
			keyup: "_stop",
			focus: function() {
				this.previous = this.element.val()
			},
			blur: function(n) {
				if (this.cancelBlur) {
					delete this.cancelBlur;
					return
				}
				this._refresh();
				this.previous !== this.element.val() && this._trigger("change", n)
			},
			mousewheel: function(n, t) {
				if (t) {
					if (!this.spinning && !this._start(n)) return !1;
					this._spin((t > 0 ? 1 : -1) * this.options.step, n);
					clearTimeout(this.mousewheelTimer);
					this.mousewheelTimer = this._delay(function() {
						this.spinning && this._stop(n)
					}, 100);
					n.preventDefault()
				}
			},
			"mousedown .ui-spinner-button": function(t) {
				function r() {
					var n = this.element[0] === this.document[0].activeElement;
					n || (this.element.focus(), this.previous = i, this._delay(function() {
						this.previous = i
					}))
				}
				var i;
				(i = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), t.preventDefault(), r.call(this), this.cancelBlur = !0, this._delay(function() {
					delete this.cancelBlur;
					r.call(this)
				}), this._start(t) !== !1) && this._repeat(null, n(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
			},
			"mouseup .ui-spinner-button": "_stop",
			"mouseenter .ui-spinner-button": function(t) {
				if (n(t.currentTarget).hasClass("ui-state-active")) {
					if (this._start(t) === !1) return !1;
					this._repeat(null, n(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
				}
			},
			"mouseleave .ui-spinner-button": "_stop"
		},
		_draw: function() {
			var n = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
			this.element.attr("role", "spinbutton");
			this.buttons = n.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all");
			this.buttons.height() > Math.ceil(n.height() * .5) && n.height() > 0 && n.height(n.height());
			this.options.disabled && this.disable()
		},
		_keydown: function(t) {
			var r = this.options,
				i = n.ui.keyCode;
			switch (t.keyCode) {
			case i.UP:
				return this._repeat(null, 1, t), !0;
			case i.DOWN:
				return this._repeat(null, -1, t), !0;
			case i.PAGE_UP:
				return this._repeat(null, r.page, t), !0;
			case i.PAGE_DOWN:
				return this._repeat(null, -r.page, t), !0
			}
			return !1
		},
		_uiSpinnerHtml: function() {
			return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'><\/span>"
		},
		_buttonHtml: function() {
			return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;<\/span><\/a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;<\/span><\/a>"
		},
		_start: function(n) {
			return !this.spinning && this._trigger("start", n) === !1 ? !1 : (this.counter || (this.counter = 1), this.spinning = !0, !0)
		},
		_repeat: function(n, t, i) {
			n = n || 500;
			clearTimeout(this.timer);
			this.timer = this._delay(function() {
				this._repeat(40, t, i)
			}, n);
			this._spin(t * this.options.step, i)
		},
		_spin: function(n, t) {
			var i = this.value() || 0;
			this.counter || (this.counter = 1);
			i = this._adjustValue(i + n * this._increment(this.counter));
			this.spinning && this._trigger("spin", t, {
				value: i
			}) === !1 || (this._value(i), this.counter++)
		},
		_increment: function(t) {
			var i = this.options.incremental;
			return i ? n.isFunction(i) ? i(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
		},
		_precision: function() {
			var n = this._precisionOf(this.options.step);
			return this.options.min !== null && (n = Math.max(n, this._precisionOf(this.options.min))), n
		},
		_precisionOf: function(n) {
			var t = n.toString(),
				i = t.indexOf(".");
			return i === -1 ? 0 : t.length - i - 1
		},
		_adjustValue: function(n) {
			var r, i, t = this.options;
			return r = t.min !== null ? t.min : 0, i = n - r, i = Math.round(i / t.step) * t.step, n = r + i, n = parseFloat(n.toFixed(this._precision())), t.max !== null && n > t.max ? t.max : t.min !== null && n < t.min ? t.min : n
		},
		_stop: function(n) {
			this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", n))
		},
		_setOption: function(n, t) {
			if (n === "culture" || n === "numberFormat") {
				var i = this._parse(this.element.val());
				this.options[n] = t;
				this.element.val(this._format(i));
				return
			}(n === "max" || n === "min" || n === "step") && typeof t == "string" && (t = this._parse(t));
			n === "icons" && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down));
			this._super(n, t);
			n === "disabled" && (t ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
		},
		_setOptions: t(function(n) {
			this._super(n);
			this._value(this.element.val())
		}),
		_parse: function(n) {
			return typeof n == "string" && n !== "" && (n = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(n, 10, this.options.culture) : +n), n === "" || isNaN(n) ? null : n
		},
		_format: function(n) {
			return n === "" ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(n, this.options.numberFormat, this.options.culture) : n
		},
		_refresh: function() {
			this.element.attr({
				"aria-valuemin": this.options.min,
				"aria-valuemax": this.options.max,
				"aria-valuenow": this._parse(this.element.val())
			})
		},
		_value: function(n, t) {
			var i;
			n !== "" && (i = this._parse(n), i !== null && (t || (i = this._adjustValue(i)), n = this._format(i)));
			this.element.val(n);
			this._refresh()
		},
		_destroy: function() {
			this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
			this.uiSpinner.replaceWith(this.element)
		},
		stepUp: t(function(n) {
			this._stepUp(n)
		}),
		_stepUp: function(n) {
			this._start() && (this._spin((n || 1) * this.options.step), this._stop())
		},
		stepDown: t(function(n) {
			this._stepDown(n)
		}),
		_stepDown: function(n) {
			this._start() && (this._spin((n || 1) * -this.options.step), this._stop())
		},
		pageUp: t(function(n) {
			this._stepUp((n || 1) * this.options.page)
		}),
		pageDown: t(function(n) {
			this._stepDown((n || 1) * this.options.page)
		}),
		value: function(n) {
			if (!arguments.length) return this._parse(this.element.val());
			t(this._value).call(this, n)
		},
		widget: function() {
			return this.uiSpinner
		}
	})
}(jQuery), function(n, t) {
	function u() {
		return ++f
	}
	function i(n) {
		return n.hash.length > 1 && decodeURIComponent(n.href.replace(r, "")) === decodeURIComponent(location.href.replace(r, ""))
	}
	var f = 0,
		r = /#.*$/;
	n.widget("ui.tabs", {
		version: "1.10.0",
		delay: 300,
		options: {
			active: null,
			collapsible: !1,
			event: "click",
			heightStyle: "content",
			hide: null,
			show: null,
			activate: null,
			beforeActivate: null,
			beforeLoad: null,
			load: null
		},
		_create: function() {
			var i = this,
				t = this.options;
			this.running = !1;
			this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", t.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(t) {
				n(this).is(".ui-state-disabled") && t.preventDefault()
			}).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
				n(this).closest("li").is(".ui-state-disabled") && this.blur()
			});
			this._processTabs();
			t.active = this._initialActive();
			n.isArray(t.disabled) && (t.disabled = n.unique(t.disabled.concat(n.map(this.tabs.filter(".ui-state-disabled"), function(n) {
				return i.tabs.index(n)
			}))).sort());
			this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(t.active) : n();
			this._refresh();
			this.active.length && this.load(t.active)
		},
		_initialActive: function() {
			var t = this.options.active,
				i = this.options.collapsible,
				r = location.hash.substring(1);
			return t === null && (r && this.tabs.each(function(i, u) {
				if (n(u).attr("aria-controls") === r) return t = i, !1
			}), t === null && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (t === null || t === -1) && (t = this.tabs.length ? 0 : !1)), t !== !1 && (t = this.tabs.index(this.tabs.eq(t)), t === -1 && (t = i ? !1 : 0)), !i && t === !1 && this.anchors.length && (t = 0), t
		},
		_getCreateEventData: function() {
			return {
				tab: this.active,
				panel: this.active.length ? this._getPanelForTab(this.active) : n()
			}
		},
		_tabKeydown: function(t) {
			var r = n(this.document[0].activeElement).closest("li"),
				i = this.tabs.index(r),
				u = !0;
			if (!this._handlePageNav(t)) {
				switch (t.keyCode) {
				case n.ui.keyCode.RIGHT:
				case n.ui.keyCode.DOWN:
					i++;
					break;
				case n.ui.keyCode.UP:
				case n.ui.keyCode.LEFT:
					u = !1;
					i--;
					break;
				case n.ui.keyCode.END:
					i = this.anchors.length - 1;
					break;
				case n.ui.keyCode.HOME:
					i = 0;
					break;
				case n.ui.keyCode.SPACE:
					t.preventDefault();
					clearTimeout(this.activating);
					this._activate(i);
					return;
				case n.ui.keyCode.ENTER:
					t.preventDefault();
					clearTimeout(this.activating);
					this._activate(i === this.options.active ? !1 : i);
					return;
				default:
					return
				}
				t.preventDefault();
				clearTimeout(this.activating);
				i = this._focusNextTab(i, u);
				t.ctrlKey || (r.attr("aria-selected", "false"), this.tabs.eq(i).attr("aria-selected", "true"), this.activating = this._delay(function() {
					this.option("active", i)
				}, this.delay))
			}
		},
		_panelKeydown: function(t) {
			this._handlePageNav(t) || t.ctrlKey && t.keyCode === n.ui.keyCode.UP && (t.preventDefault(), this.active.focus())
		},
		_handlePageNav: function(t) {
			return t.altKey && t.keyCode === n.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === n.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
		},
		_findNextTab: function(t, i) {
			function u() {
				return t > r && (t = 0), t < 0 && (t = r), t
			}
			for (var r = this.tabs.length - 1; n.inArray(u(), this.options.disabled) !== -1;) t = i ? t + 1 : t - 1;
			return t
		},
		_focusNextTab: function(n, t) {
			return n = this._findNextTab(n, t), this.tabs.eq(n).focus(), n
		},
		_setOption: function(n, t) {
			if (n === "active") {
				this._activate(t);
				return
			}
			if (n === "disabled") {
				this._setupDisabled(t);
				return
			}
			this._super(n, t);
			n === "collapsible" && (this.element.toggleClass("ui-tabs-collapsible", t), !t && this.options.active === !1 && this._activate(0));
			n === "event" && this._setupEvents(t);
			n === "heightStyle" && this._setupHeightStyle(t)
		},
		_tabId: function(n) {
			return n.attr("aria-controls") || "ui-tabs-" + u()
		},
		_sanitizeSelector: function(n) {
			return n ? n.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
		},
		refresh: function() {
			var t = this.options,
				i = this.tablist.children(":has(a[href])");
			t.disabled = n.map(i.filter(".ui-state-disabled"), function(n) {
				return i.index(n)
			});
			this._processTabs();
			t.active === !1 || !this.anchors.length ? (t.active = !1, this.active = n()) : this.active.length && !n.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = n()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active);
			this._refresh()
		},
		_refresh: function() {
			this._setupDisabled(this.options.disabled);
			this._setupEvents(this.options.event);
			this._setupHeightStyle(this.options.heightStyle);
			this.tabs.not(this.active).attr({
				"aria-selected": "false",
				tabIndex: -1
			});
			this.panels.not(this._getPanelForTab(this.active)).hide().attr({
				"aria-expanded": "false",
				"aria-hidden": "true"
			});
			this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
				"aria-selected": "true",
				tabIndex: 0
			}), this._getPanelForTab(this.active).show().attr({
				"aria-expanded": "true",
				"aria-hidden": "false"
			})) : this.tabs.eq(0).attr("tabIndex", 0)
		},
		_processTabs: function() {
			var t = this;
			this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist");
			this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
				role: "tab",
				tabIndex: -1
			});
			this.anchors = this.tabs.map(function() {
				return n("a", this)[0]
			}).addClass("ui-tabs-anchor").attr({
				role: "presentation",
				tabIndex: -1
			});
			this.panels = n();
			this.anchors.each(function(r, u) {
				var e, f, s, h = n(u).uniqueId().attr("id"),
					o = n(u).closest("li"),
					c = o.attr("aria-controls");
				i(u) ? (e = u.hash, f = t.element.find(t._sanitizeSelector(e))) : (s = t._tabId(o), e = "#" + s, f = t.element.find(e), f.length || (f = t._createPanel(s), f.insertAfter(t.panels[r - 1] || t.tablist)), f.attr("aria-live", "polite"));
				f.length && (t.panels = t.panels.add(f));
				c && o.data("ui-tabs-aria-controls", c);
				o.attr({
					"aria-controls": e.substring(1),
					"aria-labelledby": h
				});
				f.attr("aria-labelledby", h)
			});
			this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
		},
		_getList: function() {
			return this.element.find("ol,ul").eq(0)
		},
		_createPanel: function(t) {
			return n("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
		},
		_setupDisabled: function(t) {
			n.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
			for (var i = 0, r; r = this.tabs[i]; i++) t === !0 || n.inArray(i, t) !== -1 ? n(r).addClass("ui-state-disabled").attr("aria-disabled", "true") : n(r).removeClass("ui-state-disabled").removeAttr("aria-disabled");
			this.options.disabled = t
		},
		_setupEvents: function(t) {
			var i = {
				click: function(n) {
					n.preventDefault()
				}
			};
			t && n.each(t.split(" "), function(n, t) {
				i[t] = "_eventHandler"
			});
			this._off(this.anchors.add(this.tabs).add(this.panels));
			this._on(this.anchors, i);
			this._on(this.tabs, {
				keydown: "_tabKeydown"
			});
			this._on(this.panels, {
				keydown: "_panelKeydown"
			});
			this._focusable(this.tabs);
			this._hoverable(this.tabs)
		},
		_setupHeightStyle: function(t) {
			var i, r = this.element.parent();
			t === "fill" ? (i = r.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
				var t = n(this),
					r = t.css("position");
				r !== "absolute" && r !== "fixed" && (i -= t.outerHeight(!0))
			}), this.element.children().not(this.panels).each(function() {
				i -= n(this).outerHeight(!0)
			}), this.panels.each(function() {
				n(this).height(Math.max(0, i - n(this).innerHeight() + n(this).height()))
			}).css("overflow", "auto")) : t === "auto" && (i = 0, this.panels.each(function() {
				i = Math.max(i, n(this).height("").height())
			}).height(i))
		},
		_eventHandler: function(t) {
			var u = this.options,
				r = this.active,
				c = n(t.currentTarget),
				i = c.closest("li"),
				f = i[0] === r[0],
				e = f && u.collapsible,
				o = e ? n() : this._getPanelForTab(i),
				s = r.length ? this._getPanelForTab(r) : n(),
				h = {
					oldTab: r,
					oldPanel: s,
					newTab: e ? n() : i,
					newPanel: o
				};
			(t.preventDefault(), i.hasClass("ui-state-disabled") || i.hasClass("ui-tabs-loading") || this.running || f && !u.collapsible || this._trigger("beforeActivate", t, h) === !1) || (u.active = e ? !1 : this.tabs.index(i), this.active = f ? n() : i, this.xhr && this.xhr.abort(), !s.length && !o.length && n.error("jQuery UI Tabs: Mismatching fragment identifier."), o.length && this.load(this.tabs.index(i), t), this._toggle(t, h))
		},
		_toggle: function(t, i) {
			function e() {
				u.running = !1;
				u._trigger("activate", t, i)
			}
			function o() {
				i.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
				r.length && u.options.show ? u._show(r, u.options.show, e) : (r.show(), e())
			}
			var u = this,
				r = i.newPanel,
				f = i.oldPanel;
			this.running = !0;
			f.length && this.options.hide ? this._hide(f, this.options.hide, function() {
				i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
				o()
			}) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), f.hide(), o());
			f.attr({
				"aria-expanded": "false",
				"aria-hidden": "true"
			});
			i.oldTab.attr("aria-selected", "false");
			r.length && f.length ? i.oldTab.attr("tabIndex", -1) : r.length && this.tabs.filter(function() {
				return n(this).attr("tabIndex") === 0
			}).attr("tabIndex", -1);
			r.attr({
				"aria-expanded": "true",
				"aria-hidden": "false"
			});
			i.newTab.attr({
				"aria-selected": "true",
				tabIndex: 0
			})
		},
		_activate: function(t) {
			var r, i = this._findActive(t);
			i[0] !== this.active[0] && (i.length || (i = this.active), r = i.find(".ui-tabs-anchor")[0], this._eventHandler({
				target: r,
				currentTarget: r,
				preventDefault: n.noop
			}))
		},
		_findActive: function(t) {
			return t === !1 ? n() : this.tabs.eq(t)
		},
		_getIndex: function(n) {
			return typeof n == "string" && (n = this.anchors.index(this.anchors.filter("[href$='" + n + "']"))), n
		},
		_destroy: function() {
			this.xhr && this.xhr.abort();
			this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");
			this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");
			this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();
			this.tabs.add(this.panels).each(function() {
				n.data(this, "ui-tabs-destroy") ? n(this).remove() : n(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
			});
			this.tabs.each(function() {
				var t = n(this),
					i = t.data("ui-tabs-aria-controls");
				i ? t.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
			});
			this.panels.show();
			this.options.heightStyle !== "content" && this.panels.css("height", "")
		},
		enable: function(i) {
			var r = this.options.disabled;
			r !== !1 && (i === t ? r = !1 : (i = this._getIndex(i), r = n.isArray(r) ? n.map(r, function(n) {
				return n !== i ? n : null
			}) : n.map(this.tabs, function(n, t) {
				return t !== i ? t : null
			})), this._setupDisabled(r))
		},
		disable: function(i) {
			var r = this.options.disabled;
			if (r !== !0) {
				if (i === t) r = !0;
				else {
					if (i = this._getIndex(i), n.inArray(i, r) !== -1) return;
					r = n.isArray(r) ? n.merge([i], r).sort() : [i]
				}
				this._setupDisabled(r)
			}
		},
		load: function(t, r) {
			t = this._getIndex(t);
			var f = this,
				u = this.tabs.eq(t),
				o = u.find(".ui-tabs-anchor"),
				e = this._getPanelForTab(u),
				s = {
					tab: u,
					panel: e
				};
			i(o[0]) || (this.xhr = n.ajax(this._ajaxSettings(o, r, s)), this.xhr && this.xhr.statusText !== "canceled" && (u.addClass("ui-tabs-loading"), e.attr("aria-busy", "true"), this.xhr.success(function(n) {
				setTimeout(function() {
					e.html(n);
					f._trigger("load", r, s)
				}, 1)
			}).complete(function(n, t) {
				setTimeout(function() {
					t === "abort" && f.panels.stop(!1, !0);
					u.removeClass("ui-tabs-loading");
					e.removeAttr("aria-busy");
					n === f.xhr && delete f.xhr
				}, 1)
			})))
		},
		_ajaxSettings: function(t, i, r) {
			var u = this;
			return {
				url: t.attr("href"),
				beforeSend: function(t, f) {
					return u._trigger("beforeLoad", i, n.extend({
						jqXHR: t,
						ajaxSettings: f
					}, r))
				}
			}
		},
		_getPanelForTab: function(t) {
			var i = n(t).attr("aria-controls");
			return this.element.find(this._sanitizeSelector("#" + i))
		}
	})
}(jQuery), function(n) {
	function t(t, i) {
		var r = (t.attr("aria-describedby") || "").split(/\s+/);
		r.push(i);
		t.data("ui-tooltip-id", i).attr("aria-describedby", n.trim(r.join(" ")))
	}
	function i(t) {
		var u = t.data("ui-tooltip-id"),
			i = (t.attr("aria-describedby") || "").split(/\s+/),
			r = n.inArray(u, i);
		r !== -1 && i.splice(r, 1);
		t.removeData("ui-tooltip-id");
		i = n.trim(i.join(" "));
		i ? t.attr("aria-describedby", i) : t.removeAttr("aria-describedby")
	}
	var r = 0;
	n.widget("ui.tooltip", {
		version: "1.10.0",
		options: {
			content: function() {
				var t = n(this).attr("title") || "";
				return n("<a>").text(t).html()
			},
			hide: !0,
			items: "[title]:not([disabled])",
			position: {
				my: "left top+15",
				at: "left bottom",
				collision: "flipfit flip"
			},
			show: !0,
			tooltipClass: null,
			track: !1,
			close: null,
			open: null
		},
		_create: function() {
			this._on({
				mouseover: "open",
				focusin: "open"
			});
			this.tooltips = {};
			this.parents = {};
			this.options.disabled && this._disable()
		},
		_setOption: function(t, i) {
			var r = this;
			if (t === "disabled") {
				this[i ? "_disable" : "_enable"]();
				this.options[t] = i;
				return
			}
			this._super(t, i);
			t === "content" && n.each(this.tooltips, function(n, t) {
				r._updateContent(t)
			})
		},
		_disable: function() {
			var t = this;
			n.each(this.tooltips, function(i, r) {
				var u = n.Event("blur");
				u.target = u.currentTarget = r[0];
				t.close(u, !0)
			});
			this.element.find(this.options.items).addBack().each(function() {
				var t = n(this);
				t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).attr("title", "")
			})
		},
		_enable: function() {
			this.element.find(this.options.items).addBack().each(function() {
				var t = n(this);
				t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
			})
		},
		open: function(t) {
			var r = this,
				i = n(t ? t.target : this.element).closest(this.options.items);
			i.length && !i.data("ui-tooltip-id") && (i.attr("title") && i.data("ui-tooltip-title", i.attr("title")), i.data("ui-tooltip-open", !0), t && t.type === "mouseover" && i.parents().each(function() {
				var t = n(this),
					i;
				t.data("ui-tooltip-open") && (i = n.Event("blur"), i.target = i.currentTarget = this, r.close(i, !0));
				t.attr("title") && (t.uniqueId(), r.parents[this.id] = {
					element: this,
					title: t.attr("title")
				}, t.attr("title", ""))
			}), this._updateContent(i, t))
		},
		_updateContent: function(n, t) {
			var i, r = this.options.content,
				u = this,
				f = t ? t.type : null;
			if (typeof r == "string") return this._open(t, n, r);
			i = r.call(n[0], function(i) {
				n.data("ui-tooltip-open") && u._delay(function() {
					t && (t.type = f);
					this._open(t, n, i)
				})
			});
			i && this._open(t, n, i)
		},
		_open: function(i, r, u) {
			function o(n) {
				(s.of = n, f.is(":hidden")) || f.position(s)
			}
			var f, e, h, s = n.extend({}, this.options.position);
			if (u) {
				if (f = this._find(r), f.length) {
					f.find(".ui-tooltip-content").html(u);
					return
				}
				r.is("[title]") && (i && i.type === "mouseover" ? r.attr("title", "") : r.removeAttr("title"));
				f = this._tooltip(r);
				t(r, f.attr("id"));
				f.find(".ui-tooltip-content").html(u);
				this.options.track && i && /^mouse/.test(i.type) ? (this._on(this.document, {
					mousemove: o
				}), o(i)) : f.position(n.extend({
					of: r
				}, this.options.position));
				f.hide();
				this._show(f, this.options.show);
				this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function() {
					f.is(":visible") && (o(s.of), clearInterval(h))
				}, n.fx.interval));
				this._trigger("open", i, {
					tooltip: f
				});
				e = {
					keyup: function(t) {
						if (t.keyCode === n.ui.keyCode.ESCAPE) {
							var i = n.Event(t);
							i.currentTarget = r[0];
							this.close(i, !0)
						}
					},
					remove: function() {
						this._removeTooltip(f)
					}
				};
				i && i.type !== "mouseover" || (e.mouseleave = "close");
				i && i.type !== "focusin" || (e.focusout = "close");
				this._on(!0, r, e)
			}
		},
		close: function(t) {
			var f = this,
				r = n(t ? t.currentTarget : this.element),
				u = this._find(r);
			this.closing || (clearInterval(this.delayedShow), r.data("ui-tooltip-title") && r.attr("title", r.data("ui-tooltip-title")), i(r), u.stop(!0), this._hide(u, this.options.hide, function() {
				f._removeTooltip(n(this))
			}), r.removeData("ui-tooltip-open"), this._off(r, "mouseleave focusout keyup"), r[0] !== this.element[0] && this._off(r, "remove"), this._off(this.document, "mousemove"), t && t.type === "mouseleave" && n.each(this.parents, function(t, i) {
				n(i.element).attr("title", i.title);
				delete f.parents[t]
			}), this.closing = !0, this._trigger("close", t, {
				tooltip: u
			}), this.closing = !1)
		},
		_tooltip: function(t) {
			var u = "ui-tooltip-" + r++,
				i = n("<div>").attr({
					id: u,
					role: "tooltip"
				}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
			return n("<div>").addClass("ui-tooltip-content").appendTo(i), i.appendTo(this.document[0].body), this.tooltips[u] = t, i
		},
		_find: function(t) {
			var i = t.data("ui-tooltip-id");
			return i ? n("#" + i) : n()
		},
		_removeTooltip: function(n) {
			n.remove();
			delete this.tooltips[n.attr("id")]
		},
		_destroy: function() {
			var t = this;
			n.each(this.tooltips, function(i, r) {
				var u = n.Event("blur");
				u.target = u.currentTarget = r[0];
				t.close(u, !0);
				n("#" + i).remove();
				r.data("ui-tooltip-title") && (r.attr("title", r.data("ui-tooltip-title")), r.removeData("ui-tooltip-title"))
			})
		}
	})
}(jQuery), function(n) {
	n.isScrollToFixed = function(t) {
		return !!n(t).data("ScrollToFixed")
	};
	n.ScrollToFixed = function(t, i) {
		function et() {
			r.trigger("preUnfixed.ScrollToFixed");
			e();
			r.trigger("unfixed.ScrollToFixed");
			l = -1;
			d = r.offset().top;
			c = r.offset().left;
			u.options.offsets && (c += r.offset().left - r.position().left);
			ut == -1 && (ut = c);
			f = r.css("position");
			y = !0;
			u.options.bottom != -1 && (r.trigger("preFixed.ScrollToFixed"), p(), r.trigger("fixed.ScrollToFixed"))
		}
		function nt() {
			var n = u.options.limit;
			return n ? typeof n == "function" ? n.apply(r) : n : 0
		}
		function h() {
			return f === "fixed"
		}
		function tt() {
			return f === "absolute"
		}
		function a() {
			return !(h() || tt())
		}
		function p() {
			h() || (s.css({
				display: r.css("display"),
				width: r.outerWidth(!0),
				height: r.outerHeight(!0),
				float: r.css("float")
			}), cssOptions = {
				position: "fixed",
				top: u.options.bottom == -1 ? v() : "",
				bottom: u.options.bottom == -1 ? "" : u.options.bottom,
				"margin-left": "0px"
			}, u.options.dontSetWidth || (cssOptions.width = r.width()), r.css(cssOptions), r.addClass("scroll-to-fixed-fixed"), u.options.className && r.addClass(u.options.className), f = "fixed")
		}
		function it() {
			var n = nt(),
				t = c;
			u.options.removeOffsets && (t = 0, n = n - d);
			cssOptions = {
				position: "absolute",
				top: n,
				left: t,
				"margin-left": "0px",
				bottom: ""
			};
			u.options.dontSetWidth || (cssOptions.width = r.width());
			r.css(cssOptions);
			f = "absolute"
		}
		function e() {
			a() || (l = -1, s.css("display", "none"), r.css({
				width: "",
				position: k,
				left: "",
				top: rt.top,
				"margin-left": ""
			}), r.removeClass("scroll-to-fixed-fixed"), u.options.className && r.removeClass(u.options.className), f = null)
		}
		function w(n) {
			n != l && (r.css("left", c - n), l = n)
		}
		function v() {
			var n = u.options.marginTop;
			return n ? typeof n == "function" ? n.apply(r) : n : 0
		}
		function b() {
			var t;
			if (n.isScrollToFixed(r)) {
				t = y;
				y || et();
				var f = n(window).scrollLeft(),
					s = n(window).scrollTop(),
					i = nt();
				u.options.minWidth && n(window).width() < u.options.minWidth ? a() && t || (o(), r.trigger("preUnfixed.ScrollToFixed"), e(), r.trigger("unfixed.ScrollToFixed")) : u.options.bottom == -1 ? i > 0 && s >= i - v() ? tt() && t || (o(), r.trigger("preAbsolute.ScrollToFixed"), it(), r.trigger("unfixed.ScrollToFixed")) : s >= d - v() ? (h() && t || (o(), r.trigger("preFixed.ScrollToFixed"), p(), l = -1, r.trigger("fixed.ScrollToFixed")), w(f)) : a() && t || (o(), r.trigger("preUnfixed.ScrollToFixed"), e(), r.trigger("unfixed.ScrollToFixed")) : i > 0 ? s + n(window).height() - r.outerHeight(!0) >= i - (v() || -ot()) ? h() && (o(), r.trigger("preUnfixed.ScrollToFixed"), k === "absolute" ? it() : e(), r.trigger("unfixed.ScrollToFixed")) : (h() || (o(), r.trigger("preFixed.ScrollToFixed"), p()), w(f), r.trigger("fixed.ScrollToFixed")) : w(f)
			}
		}
		function ot() {
			return u.options.bottom ? u.options.bottom : 0
		}
		function o() {
			var n = r.css("position");
			n == "absolute" ? r.trigger("postAbsolute.ScrollToFixed") : n == "fixed" ? r.trigger("postFixed.ScrollToFixed") : r.trigger("postUnfixed.ScrollToFixed")
		}
		var u = this;
		u.$el = n(t);
		u.el = t;
		u.$el.data("ScrollToFixed", u);
		var y = !1,
			r = u.$el,
			f, k, rt, d = 0,
			c = 0,
			ut = -1,
			l = -1,
			s = null,
			g = function() {
				r.is(":visible") && (y = !1, b())
			},
			ft = function() {
				b()
			},
			ht = function() {
				var n = document.body,
					t, i, r, u, f;
				return document.createElement && n && n.appendChild && n.removeChild ? (t = document.createElement("div"), !t.getBoundingClientRect) ? null : (t.innerHTML = "x", t.style.cssText = "position:fixed;top:100px;", n.appendChild(t), i = n.style.height, r = n.scrollTop, n.style.height = "3000px", n.scrollTop = 500, u = t.getBoundingClientRect().top, n.style.height = i, f = u === 100, n.removeChild(t), n.scrollTop = r, f) : null
			},
			st = function(n) {
				n = n || window.event;
				n.preventDefault && n.preventDefault();
				n.returnValue = !1
			};
		u.init = function() {
			u.options = n.extend({}, n.ScrollToFixed.defaultOptions, i);
			u.$el.css("z-index", u.options.zIndex);
			s = n("<div />");
			f = r.css("position");
			k = r.css("position");
			rt = n.extend({}, r.offset());
			a() && u.$el.after(s);
			n(window).bind("resize.ScrollToFixed", g);
			n(window).bind("scroll.ScrollToFixed", ft);
			u.options.preFixed && r.bind("preFixed.ScrollToFixed", u.options.preFixed);
			u.options.postFixed && r.bind("postFixed.ScrollToFixed", u.options.postFixed);
			u.options.preUnfixed && r.bind("preUnfixed.ScrollToFixed", u.options.preUnfixed);
			u.options.postUnfixed && r.bind("postUnfixed.ScrollToFixed", u.options.postUnfixed);
			u.options.preAbsolute && r.bind("preAbsolute.ScrollToFixed", u.options.preAbsolute);
			u.options.postAbsolute && r.bind("postAbsolute.ScrollToFixed", u.options.postAbsolute);
			u.options.fixed && r.bind("fixed.ScrollToFixed", u.options.fixed);
			u.options.unfixed && r.bind("unfixed.ScrollToFixed", u.options.unfixed);
			u.options.spacerClass && s.addClass(u.options.spacerClass);
			r.bind("resize.ScrollToFixed", function() {
				s.height(r.height())
			});
			r.bind("scroll.ScrollToFixed", function() {
				r.trigger("preUnfixed.ScrollToFixed");
				e();
				r.trigger("unfixed.ScrollToFixed");
				b()
			});
			r.bind("detach.ScrollToFixed", function(t) {
				st(t);
				r.trigger("preUnfixed.ScrollToFixed");
				e();
				r.trigger("unfixed.ScrollToFixed");
				n(window).unbind("resize.ScrollToFixed", g);
				n(window).unbind("scroll.ScrollToFixed", ft);
				r.unbind(".ScrollToFixed");
				u.$el.removeData("ScrollToFixed")
			});
			g()
		};
		u.init()
	};
	n.ScrollToFixed.defaultOptions = {
		marginTop: 0,
		limit: 0,
		bottom: -1,
		zIndex: 1e3
	};
	n.fn.scrollToFixed = function(t) {
		return this.each(function() {
			new n.ScrollToFixed(this, t)
		})
	}
}(jQuery), function(n, t, i) {
	function e(i, r, u) {
		var f = t.createElement(i);
		return r && (f.id = h + r), u && (f.style.cssText = u), n(f)
	}
	function bt() {
		return i.innerHeight ? i.innerHeight : n(i).height()
	}
	function vt(n) {
		var i = c.length,
			t = (l + n) % i;
		return 0 > t ? i + t : t
	}
	function a(n, t) {
		return Math.round((/%/.test(n) ? ("x" === t ? b.width() : bt()) / 100 : 1) * parseInt(n, 10))
	}
	function vi(n, t) {
		return n.photo || n.photoRegex.test(t)
	}
	function yi(n, t) {
		return n.retinaUrl && i.devicePixelRatio > 1 ? t.replace(n.photoRegex, n.retinaSuffix) : t
	}
	function pi(n) {
		"contains" in u[0] && !u[0].contains(n.target) && (n.stopPropagation(), u.focus())
	}
	function wi() {
		var t, i = n.data(y, it);
		null == i ? (r = n.extend({}, oi), console && console.log && console.log("Error: cboxElement missing settings object")) : r = n.extend({}, i);
		for (t in r) n.isFunction(r[t]) && "on" !== t.slice(0, 2) && (r[t] = r[t].call(y));
		r.rel = r.rel || y.rel || n(y).data("rel") || "nofollow";
		r.href = r.href || n(y).attr("href");
		r.title = r.title || y.title;
		"string" == typeof r.href && (r.href = n.trim(r.href))
	}
	function rt(i, r) {
		n(t).trigger(i);
		ft.trigger(i);
		n.isFunction(r) && r.call(y)
	}
	function di() {
		var a, i, e, o, t, n = h + "Slideshow_",
			f = "click." + h;
		r.slideshow && c[1] ? (i = function() {
			clearTimeout(a)
		}, e = function() {
			(r.loop || c[l + 1]) && (a = setTimeout(s.next, r.slideshowSpeed))
		}, o = function() {
			st.html(r.slideshowStop).unbind(f).one(f, t);
			ft.bind(hi, e).bind(si, i).bind(ci, t);
			u.removeClass(n + "off").addClass(n + "on")
		}, t = function() {
			i();
			ft.unbind(hi, e).unbind(si, i).unbind(ci, t);
			st.html(r.slideshowStart).unbind(f).one(f, function() {
				s.next();
				o()
			});
			u.removeClass(n + "on").addClass(n + "off")
		}, r.slideshowAuto ? o() : t()) : u.removeClass(n + "off " + n + "on")
	}
	function yt(i) {
		at || (y = i, wi(), c = n(y), l = 0, "nofollow" !== r.rel && (c = n("." + et).filter(function() {
			var t, i = n.data(this, it);
			return i && (t = n(this).data("rel") || i.rel || this.rel), t === r.rel
		}), l = c.index(y), -1 === l && (c = c.add(y), l = c.length - 1)), w.css({
			opacity: parseFloat(r.opacity),
			cursor: r.overlayClose ? "pointer" : "auto",
			visibility: "visible"
		}).show(), fi && u.add(w).removeClass(fi), r.className && u.add(w).addClass(r.className), fi = r.className, ri.html(r.close).show(), tt || (tt = lt = !0, u.css({
			visibility: "hidden",
			display: "block"
		}), v = e(o, "LoadedContent", "width:0; height:0; overflow:hidden").appendTo(p), k = kt.height() + ni.height() + p.outerHeight(!0) - p.height(), d = dt.width() + gt.width() + p.outerWidth(!0) - p.width(), g = v.outerHeight(!0), nt = v.outerWidth(!0), r.w = a(r.initialWidth, "x"), r.h = a(r.initialHeight, "y"), s.position(), di(), rt(tr, r.onOpen), ui.add(ti).hide(), u.focus(), r.trapFocus && t.addEventListener && (t.addEventListener("focus", pi, !0), ft.one(li, function() {
			t.removeEventListener("focus", pi, !0)
		})), r.returnFocus && ft.one(li, function() {
			n(y).focus()
		})), nr())
	}
	function bi() {
		!u && t.body && (ei = !1, b = n(i), u = e(o).attr({
			id: it,
			"class": n.support.opacity === !1 ? h + "IE" : "",
			role: "dialog",
			tabindex: "-1"
		}).hide(), w = e(o, "Overlay").hide(), pt = e(o, "LoadingOverlay").add(e(o, "LoadingGraphic")), ut = e(o, "Wrapper"), p = e(o, "Content").append(ti = e(o, "Title"), ii = e(o, "Current"), ct = n('<button type="button"/>').attr({
			id: h + "Previous"
		}), ht = n('<button type="button"/>').attr({
			id: h + "Next"
		}), st = e("button", "Slideshow"), pt, ri = n('<button type="button"/>').attr({
			id: h + "Close"
		})), ut.append(e(o).append(e(o, "TopLeft"), kt = e(o, "TopCenter"), e(o, "TopRight")), e(o, !1, "clear:left").append(dt = e(o, "MiddleLeft"), p, gt = e(o, "MiddleRight")), e(o, !1, "clear:left").append(e(o, "BottomLeft"), ni = e(o, "BottomCenter"), e(o, "BottomRight"))).find("div div").css({
			float: "left"
		}), ot = e(o, !1, "position:absolute; width:9999px; visibility:hidden; display:none"), ui = ht.add(ct).add(ii).add(st), n(t.body).append(w, u.append(ut, ot)))
	}
	function gi() {
		function i(n) {
			n.which > 1 || n.shiftKey || n.altKey || n.metaKey || n.control || (n.preventDefault(), yt(this))
		}
		return u ? (ei || (ei = !0, ht.click(function() {
			s.next()
		}), ct.click(function() {
			s.prev()
		}), ri.click(function() {
			s.close()
		}), w.click(function() {
			r.overlayClose && s.close()
		}), n(t).bind("keydown." + h, function(n) {
			var t = n.keyCode;
			tt && r.escKey && 27 === t && (n.preventDefault(), s.close());
			tt && r.arrowKey && c[1] && !n.altKey && (37 === t ? (n.preventDefault(), ct.click()) : 39 === t && (n.preventDefault(), ht.click()))
		}), n.isFunction(n.fn.on) ? n(t).on("click." + h, "." + et, i) : n("." + et).live("click." + h, i)), !0) : !1
	}
	function nr() {
		var t, p, w, u = s.prep,
			b = ++ai;
		lt = !0;
		f = !1;
		y = c[l];
		wi();
		rt(wt);
		rt(si, r.onLoad);
		r.h = r.height ? a(r.height, "y") - g - k : r.innerHeight && a(r.innerHeight, "y");
		r.w = r.width ? a(r.width, "x") - nt - d : r.innerWidth && a(r.innerWidth, "x");
		r.mw = r.w;
		r.mh = r.h;
		r.maxWidth && (r.mw = a(r.maxWidth, "x") - nt - d, r.mw = r.w && r.w < r.mw ? r.w : r.mw);
		r.maxHeight && (r.mh = a(r.maxHeight, "y") - g - k, r.mh = r.h && r.h < r.mh ? r.h : r.mh);
		t = r.href;
		ki = setTimeout(function() {
			pt.show()
		}, 100);
		r.inline ? (w = e(o).hide().insertBefore(n(t)[0]), ft.one(wt, function() {
			w.replaceWith(v.children())
		}), u(n(t))) : r.iframe ? u(" ") : r.html ? u(r.html) : vi(r, t) ? (t = yi(r, t), n(f = new Image).addClass(h + "Photo").bind("error", function() {
			r.title = !1;
			u(e(o, "Error").html(r.imgError))
		}).one("load", function() {
			var t;
			b === ai && (f.alt = n(y).attr("alt") || n(y).attr("data-alt") || "", r.retinaImage && i.devicePixelRatio > 1 && (f.height = f.height / i.devicePixelRatio, f.width = f.width / i.devicePixelRatio), r.scalePhotos && (p = function() {
				f.height -= f.height * t;
				f.width -= f.width * t
			}, r.mw && f.width > r.mw && (t = (f.width - r.mw) / f.width, p()), r.mh && f.height > r.mh && (t = (f.height - r.mh) / f.height, p())), r.h && (f.style.marginTop = Math.max(r.mh - f.height, 0) / 2 + "px"), c[1] && (r.loop || c[l + 1]) && (f.style.cursor = "pointer", f.onclick = function() {
				s.next()
			}), f.style.width = f.width + "px", f.style.height = f.height + "px", setTimeout(function() {
				u(f)
			}, 1))
		}), setTimeout(function() {
			f.src = t
		}, 1)) : t && ot.load(t, r.data, function(t, i) {
			b === ai && u("error" === i ? e(o, "Error").html(r.xhrError) : n(this).contents())
		})
	}
	var w, u, ut, p, kt, dt, gt, ni, c, b, v, ot, pt, ti, ii, st, ht, ct, ri, ui, r, k, d, g, nt, y, l, f, tt, lt, at, ki, s, fi, ei, oi = {
		transition: "elastic",
		speed: 300,
		fadeOut: 300,
		width: !1,
		initialWidth: "600",
		innerWidth: !1,
		maxWidth: !1,
		height: !1,
		initialHeight: "450",
		innerHeight: !1,
		maxHeight: !1,
		scalePhotos: !0,
		scrolling: !0,
		inline: !1,
		html: !1,
		iframe: !1,
		fastIframe: !0,
		photo: !1,
		href: !1,
		title: !1,
		rel: !1,
		opacity: .6,
		preloading: !0,
		className: !1,
		retinaImage: !1,
		retinaUrl: !1,
		retinaSuffix: "@2x.$1",
		current: "image {current} of {total}",
		previous: "previous",
		next: "next",
		close: "close",
		xhrError: "This content failed to load.",
		imgError: "This image failed to load.",
		open: !1,
		returnFocus: !0,
		trapFocus: !0,
		reposition: !0,
		loop: !0,
		slideshow: !1,
		slideshowAuto: !0,
		slideshowSpeed: 2500,
		slideshowStart: "start slideshow",
		slideshowStop: "stop slideshow",
		photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,
		onOpen: !1,
		onLoad: !1,
		onComplete: !1,
		onCleanup: !1,
		onClosed: !1,
		overlayClose: !0,
		escKey: !0,
		arrowKey: !0,
		top: !1,
		bottom: !1,
		left: !1,
		right: !1,
		fixed: !1,
		data: void 0
	},
		it = "colorbox",
		h = "cbox",
		et = h + "Element",
		tr = h + "_open",
		si = h + "_load",
		hi = h + "_complete",
		ci = h + "_cleanup",
		li = h + "_closed",
		wt = h + "_purge",
		ft = n("<a/>"),
		o = "div",
		ai = 0;
	n.colorbox || (n(bi), s = n.fn[it] = n[it] = function(t, i) {
		var r = this;
		if (t = t || {}, bi(), gi()) {
			if (n.isFunction(r)) r = n("<a/>"), t.open = !0;
			else if (!r[0]) return r;
			i && (t.onComplete = i);
			r.each(function() {
				n.data(this, it, n.extend({}, n.data(this, it) || oi, t))
			}).addClass(et);
			(n.isFunction(t.open) && t.open.call(r) || t.open) && yt(r[0])
		}
		return r
	}, s.position = function(n, t) {
		function v(n) {
			kt[0].style.width = ni[0].style.width = p[0].style.width = parseInt(n.style.width, 10) - d + "px";
			p[0].style.height = dt[0].style.height = gt[0].style.height = parseInt(n.style.height, 10) - k + "px"
		}
		var f, e, o, c = 0,
			l = 0,
			i = u.offset();
		b.unbind("resize." + h);
		u.css({
			top: -9e4,
			left: -9e4
		});
		e = b.scrollTop();
		o = b.scrollLeft();
		r.fixed ? (i.top -= e, i.left -= o, u.css({
			position: "fixed"
		})) : (c = e, l = o, u.css({
			position: "absolute"
		}));
		l += r.right !== !1 ? Math.max(b.width() - r.w - nt - d - a(r.right, "x"), 0) : r.left !== !1 ? a(r.left, "x") : Math.round(Math.max(b.width() - r.w - nt - d, 0) / 2);
		c += r.bottom !== !1 ? Math.max(bt() - r.h - g - k - a(r.bottom, "y"), 0) : r.top !== !1 ? a(r.top, "y") : Math.round(Math.max(bt() - r.h - g - k, 0) / 2);
		u.css({
			top: i.top,
			left: i.left,
			visibility: "visible"
		});
		n = u.width() === r.w + nt && u.height() === r.h + g ? 0 : n || 0;
		ut[0].style.width = ut[0].style.height = "9999px";
		f = {
			width: r.w + nt + d,
			height: r.h + g + k,
			top: c,
			left: l
		};
		0 === n && u.css(f);
		u.dequeue().animate(f, {
			duration: n,
			complete: function() {
				v(this);
				lt = !1;
				ut[0].style.width = r.w + nt + d + "px";
				ut[0].style.height = r.h + g + k + "px";
				r.reposition && setTimeout(function() {
					b.bind("resize." + h, s.position)
				}, 1);
				t && t()
			},
			step: function() {
				v(this)
			}
		})
	}, s.resize = function(n) {
		tt && (n = n || {}, n.width && (r.w = a(n.width, "x") - nt - d), n.innerWidth && (r.w = a(n.innerWidth, "x")), v.css({
			width: r.w
		}), n.height && (r.h = a(n.height, "y") - g - k), n.innerHeight && (r.h = a(n.innerHeight, "y")), n.innerHeight || n.height || (v.css({
			height: "auto"
		}), r.h = v.height()), v.css({
			height: r.h
		}), s.position("none" === r.transition ? 0 : r.speed))
	}, s.prep = function(t) {
		function y() {
			return r.w = r.w || v.width(), r.w = r.mw && r.mw < r.w ? r.mw : r.w, r.w
		}
		function w() {
			return r.h = r.h || v.height(), r.h = r.mh && r.mh < r.h ? r.mh : r.h, r.h
		}
		if (tt) {
			var i, a = "none" === r.transition ? 0 : r.speed;
			v.empty().remove();
			v = e(o, "LoadedContent").append(t);
			v.hide().appendTo(ot.show()).css({
				width: y(),
				overflow: r.scrolling ? "auto" : "hidden"
			}).css({
				height: w()
			}).prependTo(p);
			ot.hide();
			n(f).css({
				float: "none"
			});
			i = function() {
				function o() {
					n.support.opacity === !1 && u[0].style.removeAttribute("filter")
				}
				var t, i, f = c.length,
					s = "frameBorder",
					y = "allowTransparency";
				tt && (i = function() {
					clearTimeout(ki);
					pt.hide();
					rt(hi, r.onComplete)
				}, ti.html(r.title).add(v).show(), f > 1 ? ("string" == typeof r.current && ii.html(r.current.replace("{current}", l + 1).replace("{total}", f)).show(), ht[r.loop || f - 1 > l ? "show" : "hide"]().html(r.next), ct[r.loop || l ? "show" : "hide"]().html(r.previous), r.slideshow && st.show(), r.preloading && n.each([vt(-1), vt(1)], function() {
					var t, u, r = c[this],
						i = n.data(r, it);
					i && i.href ? (t = i.href, n.isFunction(t) && (t = t.call(r))) : t = n(r).attr("href");
					t && vi(i, t) && (t = yi(i, t), u = new Image, u.src = t)
				})) : ui.hide(), r.iframe ? (t = e("iframe")[0], s in t && (t[s] = 0), y in t && (t[y] = "true"), r.scrolling || (t.scrolling = "no"), n(t).attr({
					src: r.href,
					name: (new Date).getTime(),
					"class": h + "Iframe",
					allowFullScreen: !0,
					webkitAllowFullScreen: !0,
					mozallowfullscreen: !0
				}).one("load", i).appendTo(v), ft.one(wt, function() {
					t.src = "//about:blank"
				}), r.fastIframe && n(t).trigger("load")) : i(), "fade" === r.transition ? u.fadeTo(a, 1, o) : o())
			};
			"fade" === r.transition ? u.fadeTo(a, 0, function() {
				s.position(0, i)
			}) : s.position(a, i)
		}
	}, s.next = function() {
		!lt && c[1] && (r.loop || c[l + 1]) && (l = vt(1), yt(c[l]))
	}, s.prev = function() {
		!lt && c[1] && (r.loop || l) && (l = vt(-1), yt(c[l]))
	}, s.close = function() {
		tt && !at && (at = !0, tt = !1, rt(ci, r.onCleanup), b.unbind("." + h), w.fadeTo(r.fadeOut || 0, 0), u.stop().fadeTo(r.fadeOut || 0, 0, function() {
			u.add(w).css({
				opacity: 1,
				cursor: "auto"
			}).hide();
			rt(wt);
			v.empty().remove();
			setTimeout(function() {
				at = !1;
				rt(li, r.onClosed)
			}, 1)
		}))
	}, s.remove = function() {
		u && (u.stop(), n.colorbox.close(), u.stop().remove(), w.remove(), at = !1, u = null, n("." + et).removeData(it).removeClass(et), n(t).unbind("click." + h))
	}, s.element = function() {
		return n(y)
	}, s.settings = oi)
}(jQuery, document, window), function(n) {
	n.fn.slides = function(t) {
		return t = n.extend({}, n.fn.slides.option, t), this.each(function() {
			function h(f, h, a) {
				if (!c && b) {
					c = !0;
					t.animationStart(o + 1);
					switch (f) {
					case "next":
						s = o;
						u = o + 1;
						u = l === u ? 0 : u;
						w = e * 2;
						f = -e * 2;
						o = u;
						break;
					case "prev":
						s = o;
						u = o - 1;
						u = u === -1 ? l - 1 : u;
						w = 0;
						f = 0;
						o = u;
						break;
					case "pagination":
						u = parseInt(a, 10);
						s = n("." + t.paginationClass + " li." + t.currentClass + " a", r).attr("href").match("[^#/]+$");
						u > s ? (w = e * 2, f = -e * 2) : (w = 0, f = 0);
						o = u
					}
					h === "fade" ? t.crossfade ? i.children(":eq(" + u + ")", r).css({
						zIndex: 10
					}).fadeIn(t.fadeSpeed, t.fadeEasing, function() {
						t.autoHeight ? i.animate({
							height: i.children(":eq(" + u + ")", r).outerHeight()
						}, t.autoHeightSpeed, function() {
							i.children(":eq(" + s + ")", r).css({
								display: "none",
								zIndex: 0
							});
							i.children(":eq(" + u + ")", r).css({
								zIndex: 0
							});
							t.animationComplete(u + 1);
							c = !1
						}) : (i.children(":eq(" + s + ")", r).css({
							display: "none",
							zIndex: 0
						}), i.children(":eq(" + u + ")", r).css({
							zIndex: 0
						}), t.animationComplete(u + 1), c = !1)
					}) : i.children(":eq(" + s + ")", r).fadeOut(t.fadeSpeed, t.fadeEasing, function() {
						t.autoHeight ? i.animate({
							height: i.children(":eq(" + u + ")", r).outerHeight()
						}, t.autoHeightSpeed, function() {
							i.children(":eq(" + u + ")", r).fadeIn(t.fadeSpeed, t.fadeEasing)
						}) : i.children(":eq(" + u + ")", r).fadeIn(t.fadeSpeed, t.fadeEasing, function() {
							n.browser.msie && n(this).get(0).style.removeAttribute("filter")
						});
						t.animationComplete(u + 1);
						c = !1
					}) : (i.children(":eq(" + u + ")").css({
						left: w,
						display: "block"
					}), t.autoHeight ? i.animate({
						left: f,
						height: i.children(":eq(" + u + ")").outerHeight()
					}, t.slideSpeed, t.slideEasing, function() {
						i.css({
							left: -e
						});
						i.children(":eq(" + u + ")").css({
							left: e,
							zIndex: 5
						});
						i.children(":eq(" + s + ")").css({
							left: e,
							display: "none",
							zIndex: 0
						});
						t.animationComplete(u + 1);
						c = !1
					}) : i.animate({
						left: f
					}, t.slideSpeed, t.slideEasing, function() {
						i.css({
							left: -e
						});
						i.children(":eq(" + u + ")").css({
							left: e,
							zIndex: 5
						});
						i.children(":eq(" + s + ")").css({
							left: e,
							display: "none",
							zIndex: 0
						});
						t.animationComplete(u + 1);
						c = !1
					}));
					t.pagination && (n("." + t.paginationClass + " li." + t.currentClass, r).removeClass(t.currentClass), n("." + t.paginationClass + " li:eq(" + u + ")", r).addClass(t.currentClass))
				}
			}
			function d() {
				clearInterval(r.data("interval"))
			}
			function y() {
				t.pause ? (clearTimeout(r.data("pause")), clearInterval(r.data("interval")), it = setTimeout(function() {
					clearTimeout(r.data("pause"));
					k = setInterval(function() {
						h("next", a)
					}, t.play);
					r.data("interval", k)
				}, t.pause), r.data("pause", it)) : d()
			}
			var g;
			n("." + t.container, n(this)).children().wrapAll('<div class="slides_control"/>');
			var r = n(this),
				i = n(".slides_control", r),
				l = i.children().size(),
				e = i.children().outerWidth(),
				rt = i.children().outerHeight(),
				f = t.start - 1,
				a = t.effect.indexOf(",") < 0 ? t.effect : t.effect.replace(" ", "").split(",")[0],
				nt = t.effect.indexOf(",") < 0 ? a : t.effect.replace(" ", "").split(",")[1],
				u = 0,
				s = 0,
				p = 0,
				o = 0,
				b, c, v, w, tt, it, k;
			if (l < 2) return n("." + t.container, n(this)).fadeIn(t.fadeSpeed, t.fadeEasing, function() {
				b = !0;
				t.slidesLoaded()
			}), n("." + t.next + ", ." + t.prev).fadeOut(0), !1;
			l < 2 || (f < 0 && (f = 0), f > l && (f = l - 1), t.start && (o = f), t.randomize && i.randomize(), n("." + t.container, r).css({
				overflow: "hidden",
				position: "relative"
			}), i.children().css({
				position: "absolute",
				top: 0,
				left: i.children().outerWidth(),
				zIndex: 0,
				display: "none"
			}), i.css({
				position: "relative",
				width: e * 3,
				height: rt,
				left: -e
			}), n("." + t.container, r).css({
				display: "block"
			}), t.autoHeight && (i.children().css({
				height: "auto"
			}), i.animate({
				height: i.children(":eq(" + f + ")").outerHeight()
			}, t.autoHeightSpeed)), t.preload && i.find("img:eq(" + f + ")").length ? (n("." + t.container, r).css({
				background: "url(" + t.preloadImage + ") no-repeat 50% 50%"
			}), g = i.find("img:eq(" + f + ")").attr("src") + "?" + (new Date).getTime(), tt = n("img", r).parent().attr("class") != "slides_control" ? i.children(":eq(0)")[0].tagName.toLowerCase() : i.find("img:eq(" + f + ")"), i.find("img:eq(" + f + ")").attr("src", g).load(function() {
				i.find(tt + ":eq(" + f + ")").fadeIn(t.fadeSpeed, t.fadeEasing, function() {
					n(this).css({
						zIndex: 5
					});
					n("." + t.container, r).css({
						background: ""
					});
					b = !0;
					t.slidesLoaded()
				})
			})) : i.children(":eq(" + f + ")").fadeIn(t.fadeSpeed, t.fadeEasing, function() {
				b = !0;
				t.slidesLoaded()
			}), t.bigTarget && (i.children().css({
				cursor: "pointer"
			}), i.children().click(function() {
				return h("next", a), !1
			})), t.hoverPause && t.play && (i.bind("mouseover", function() {
				d()
			}), i.bind("mouseleave", function() {
				y()
			})), t.generateNextPrev && (n("." + t.container, r).after('<a href="#" class="' + t.prev + '">Prev<\/a>'), n("." + t.prev, r).after('<a href="#" class="' + t.next + '">Next<\/a>')), n("." + t.next, r).click(function(n) {
				n.preventDefault();
				t.play && y();
				h("next", a)
			}), n("." + t.prev, r).click(function(n) {
				n.preventDefault();
				t.play && y();
				h("prev", a)
			}), t.generatePagination ? (t.prependPagination ? r.prepend("<ul class=" + t.paginationClass + "><\/ul>") : r.append("<ul class=" + t.paginationClass + "><\/ul>"), i.children().each(function() {
				n("." + t.paginationClass, r).append('<li><a href="#' + p + '">' + (p + 1) + "<\/a><\/li>");
				p++
			})) : n("." + t.paginationClass + " li a", r).each(function() {
				n(this).attr("href", "#" + p);
				p++
			}), n("." + t.paginationClass + " li:eq(" + f + ")", r).addClass(t.currentClass), n("." + t.paginationClass + " li a", r).click(function() {
				return t.play && y(), v = n(this).attr("href").match("[^#/]+$"), o != v && h("pagination", nt, v), !1
			}), n("a.link", r).click(function() {
				return t.play && y(), v = n(this).attr("href").match("[^#/]+$") - 1, o != v && h("pagination", nt, v), !1
			}), t.play && (k = setInterval(function() {
				h("next", a)
			}, t.play), r.data("interval", k)))
		})
	};
	n.fn.slides.option = {
		preload: !1,
		preloadImage: "/img/loading.gif",
		container: "slides_container",
		generateNextPrev: !1,
		next: "next",
		prev: "prev",
		pagination: !0,
		generatePagination: !0,
		prependPagination: !1,
		paginationClass: "pagination",
		currentClass: "current",
		fadeSpeed: 350,
		fadeEasing: "",
		slideSpeed: 350,
		slideEasing: "",
		start: 1,
		effect: "slide",
		crossfade: !1,
		randomize: !1,
		play: 0,
		pause: 0,
		hoverPause: !1,
		autoHeight: !1,
		autoHeightSpeed: 350,
		bigTarget: !1,
		animationStart: function() {},
		animationComplete: function() {},
		slidesLoaded: function() {}
	};
	n.fn.randomize = function(t) {
		function r() {
			return Math.round(Math.random()) - .5
		}
		return n(this).each(function() {
			var e = n(this),
				f = e.children(),
				o = f.length,
				u;
			if (o > 1) {
				for (f.hide(), u = [], i = 0; i < o; i++) u[u.length] = i;
				u = u.sort(r);
				n.each(u, function(n, i) {
					var r = f.eq(i),
						u = r.clone(!0);
					u.show().appendTo(e);
					t !== undefined && t(r, u);
					r.remove()
				})
			}
		})
	}
}(jQuery), function(n) {
	typeof define == "function" && define.amd ? define(["jquery"], n) : n(jQuery)
}(function(n) {
	function r(n) {
		return n
	}
	function u(n) {
		return decodeURIComponent(n.replace(f, " "))
	}
	function i(n) {
		n.indexOf('"') === 0 && (n = n.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
		try {
			return t.json ? JSON.parse(n) : n
		} catch (i) {}
	}
	var f = /\+/g,
		t = n.cookie = function(f, e, o) {
			var l, h, s, a;
			if (e !== undefined) return o = n.extend({}, t.defaults, o), typeof o.expires == "number" && (l = o.expires, h = o.expires = new Date, h.setDate(h.getDate() + l)), e = t.json ? JSON.stringify(e) : String(e), document.cookie = [t.raw ? f : encodeURIComponent(f), "=", t.raw ? e : encodeURIComponent(e), o.expires ? "; expires=" + o.expires.toUTCString() : "", o.path ? "; path=" + o.path : "", o.domain ? "; domain=" + o.domain : "", o.secure ? "; secure" : ""].join("");
			var v = t.raw ? r : u,
				y = document.cookie.split("; "),
				c = f ? undefined : {};
			for (s = 0, a = y.length; s < a; s++) {
				var p = y[s].split("="),
					w = v(p.shift()),
					b = v(p.join("="));
				if (f && f === w) {
					c = i(b);
					break
				}
				f || (c[w] = i(b))
			}
			return c
		};
	t.defaults = {};
	n.removeCookie = function(t, i) {
		return n.cookie(t) !== undefined ? (n.cookie(t, "", n.extend({}, i, {
			expires: -1
		})), !0) : !1
	}
})