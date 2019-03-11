var cardsorting, lazysizes;
(function(n, t) {
    "use strict";
    typeof module == "object" && typeof module.exports == "object" ? module.exports = n.document ? t(n, !0) : function(n) {
        if (!n.document) throw new Error("jQuery requires a window with a document");
        return t(n)
    } : t(n)
})(typeof window != "undefined" ? window : this, function(n, t) {
    "use strict";

    function gi(n, t) {
        t = t || u;
        var i = t.createElement("script");
        i.text = n;
        t.head.appendChild(i).parentNode.removeChild(i)
    }

    function ui(n) {
        var t = !!n && "length" in n && n.length,
            r = i.type(n);
        return r === "function" || i.isWindow(n) ? !1 : r === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in n
    }

    function fi(n, t, r) {
        return i.isFunction(t) ? i.grep(n, function(n, i) {
            return !!t.call(n, i, n) !== r
        }) : t.nodeType ? i.grep(n, function(n) {
            return n === t !== r
        }) : typeof t != "string" ? i.grep(n, function(n) {
            return ot.call(t, n) > -1 !== r
        }) : df.test(t) ? i.filter(t, n, r) : (t = i.filter(t, n), i.grep(n, function(n) {
            return ot.call(t, n) > -1 !== r && n.nodeType === 1
        }))
    }

    function hr(n, t) {
        while ((n = n[t]) && n.nodeType !== 1);
        return n
    }

    function gf(n) {
        var t = {};
        return i.each(n.match(h) || [], function(n, i) {
            t[i] = !0
        }), t
    }

    function g(n) {
        return n
    }

    function pt(n) {
        throw n;
    }

    function cr(n, t, r) {
        var u;
        try {
            n && i.isFunction(u = n.promise) ? u.call(n).done(t).fail(r) : n && i.isFunction(u = n.then) ? u.call(n, t, r) : t.call(undefined, n)
        } catch (n) {
            r.call(undefined, n)
        }
    }

    function bt() {
        u.removeEventListener("DOMContentLoaded", bt);
        n.removeEventListener("load", bt);
        i.ready()
    }

    function ht() {
        this.expando = i.expando + ht.uid++
    }

    function ie(n) {
        return n === "true" ? !0 : n === "false" ? !1 : n === "null" ? null : n === +n + "" ? +n : ne.test(n) ? JSON.parse(n) : n
    }

    function ar(n, t, i) {
        var r;
        if (i === undefined && n.nodeType === 1)
            if (r = "data-" + t.replace(te, "-$&").toLowerCase(), i = n.getAttribute(r), typeof i == "string") {
                try {
                    i = ie(i)
                } catch (u) {}
                e.set(n, t, i)
            } else i = undefined;
        return i
    }

    function pr(n, t, r, u) {
        var h, e = 1,
            l = 20,
            c = u ? function() {
                return u.cur()
            } : function() {
                return i.css(n, t, "")
            },
            s = c(),
            o = r && r[3] || (i.cssNumber[t] ? "" : "px"),
            f = (i.cssNumber[t] || o !== "px" && +s) && ct.exec(i.css(n, t));
        if (f && f[3] !== o) {
            o = o || f[3];
            r = r || [];
            f = +s || 1;
            do e = e || ".5", f = f / e, i.style(n, t, f + o); while (e !== (e = c() / s) && e !== 1 && --l)
        }
        return r && (f = +f || +s || 0, h = r[1] ? f + (r[1] + 1) * r[2] : +r[2], u && (u.unit = o, u.start = f, u.end = h)), h
    }

    function re(n) {
        var r, f = n.ownerDocument,
            u = n.nodeName,
            t = ei[u];
        return t ? t : (r = f.body.appendChild(f.createElement(u)), t = i.css(r, "display"), r.parentNode.removeChild(r), t === "none" && (t = "block"), ei[u] = t, t)
    }

    function nt(n, t) {
        for (var e, u, f = [], i = 0, o = n.length; i < o; i++)(u = n[i], u.style) && (e = u.style.display, t ? (e === "none" && (f[i] = r.get(u, "display") || null, f[i] || (u.style.display = "")), u.style.display === "" && kt(u) && (f[i] = re(u))) : e !== "none" && (f[i] = "none", r.set(u, "display", e)));
        for (i = 0; i < o; i++) f[i] != null && (n[i].style.display = f[i]);
        return n
    }

    function o(n, t) {
        var r;
        return (r = typeof n.getElementsByTagName != "undefined" ? n.getElementsByTagName(t || "*") : typeof n.querySelectorAll != "undefined" ? n.querySelectorAll(t || "*") : [], t === undefined || t && i.nodeName(n, t)) ? i.merge([n], r) : r
    }

    function oi(n, t) {
        for (var i = 0, u = n.length; i < u; i++) r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"))
    }

    function gr(n, t, r, u, f) {
        for (var e, s, p, a, w, v, h = t.createDocumentFragment(), y = [], l = 0, b = n.length; l < b; l++)
            if (e = n[l], e || e === 0)
                if (i.type(e) === "object") i.merge(y, e.nodeType ? [e] : e);
                else if (dr.test(e)) {
            for (s = s || h.appendChild(t.createElement("div")), p = (br.exec(e) || ["", ""])[1].toLowerCase(), a = c[p] || c._default, s.innerHTML = a[1] + i.htmlPrefilter(e) + a[2], v = a[0]; v--;) s = s.lastChild;
            i.merge(y, s.childNodes);
            s = h.firstChild;
            s.textContent = ""
        } else y.push(t.createTextNode(e));
        for (h.textContent = "", l = 0; e = y[l++];) {
            if (u && i.inArray(e, u) > -1) {
                f && f.push(e);
                continue
            }
            if (w = i.contains(e.ownerDocument, e), s = o(h.appendChild(e), "script"), w && oi(s), r)
                for (v = 0; e = s[v++];) kr.test(e.type || "") && r.push(e)
        }
        return h
    }

    function gt() {
        return !0
    }

    function tt() {
        return !1
    }

    function tu() {
        try {
            return u.activeElement
        } catch (n) {}
    }

    function si(n, t, r, u, f, e) {
        var o, s;
        if (typeof t == "object") {
            typeof r != "string" && (u = u || r, r = undefined);
            for (s in t) si(n, s, r, u, t[s], e);
            return n
        }
        if (u == null && f == null ? (f = r, u = r = undefined) : f == null && (typeof r == "string" ? (f = u, u = undefined) : (f = u, u = r, r = undefined)), f === !1) f = tt;
        else if (!f) return n;
        return e === 1 && (o = f, f = function(n) {
            return i().off(n), o.apply(this, arguments)
        }, f.guid = o.guid || (o.guid = i.guid++)), n.each(function() {
            i.event.add(this, t, f, u, r)
        })
    }

    function iu(n, t) {
        return i.nodeName(n, "table") && i.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n : n
    }

    function le(n) {
        return n.type = (n.getAttribute("type") !== null) + "/" + n.type, n
    }

    function ae(n) {
        var t = he.exec(n.type);
        return t ? n.type = t[1] : n.removeAttribute("type"), n
    }

    function ru(n, t) {
        var f, c, o, s, h, l, a, u;
        if (t.nodeType === 1) {
            if (r.hasData(n) && (s = r.access(n), h = r.set(t, s), u = s.events, u)) {
                delete h.handle;
                h.events = {};
                for (o in u)
                    for (f = 0, c = u[o].length; f < c; f++) i.event.add(t, o, u[o][f])
            }
            e.hasData(n) && (l = e.access(n), a = i.extend({}, l), e.set(t, a))
        }
    }

    function ve(n, t) {
        var i = t.nodeName.toLowerCase();
        i === "input" && wr.test(n.type) ? t.checked = n.checked : (i === "input" || i === "textarea") && (t.defaultValue = n.defaultValue)
    }

    function it(n, t, u, e) {
        t = bi.apply([], t);
        var l, p, c, a, s, w, h = 0,
            v = n.length,
            k = v - 1,
            y = t[0],
            b = i.isFunction(y);
        if (b || v > 1 && typeof y == "string" && !f.checkClone && se.test(y)) return n.each(function(i) {
            var r = n.eq(i);
            b && (t[0] = y.call(this, i, r.html()));
            it(r, t, u, e)
        });
        if (v && (l = gr(t, n[0].ownerDocument, !1, n, e), p = l.firstChild, l.childNodes.length === 1 && (l = p), p || e)) {
            for (c = i.map(o(l, "script"), le), a = c.length; h < v; h++) s = l, h !== k && (s = i.clone(s, !0, !0), a && i.merge(c, o(s, "script"))), u.call(n[h], s, h);
            if (a)
                for (w = c[c.length - 1].ownerDocument, i.map(c, ae), h = 0; h < a; h++) s = c[h], kr.test(s.type || "") && !r.access(s, "globalEval") && i.contains(w, s) && (s.src ? i._evalUrl && i._evalUrl(s.src) : gi(s.textContent.replace(ce, ""), w))
        }
        return n
    }

    function uu(n, t, r) {
        for (var u, e = t ? i.filter(t, n) : n, f = 0;
            (u = e[f]) != null; f++) r || u.nodeType !== 1 || i.cleanData(o(u)), u.parentNode && (r && i.contains(u.ownerDocument, u) && oi(o(u, "script")), u.parentNode.removeChild(u));
        return n
    }

    function lt(n, t, r) {
        var o, s, h, u, e = n.style;
        return r = r || ni(n), r && (u = r.getPropertyValue(t) || r[t], u !== "" || i.contains(n.ownerDocument, n) || (u = i.style(n, t)), !f.pixelMarginRight() && hi.test(u) && fu.test(t) && (o = e.width, s = e.minWidth, h = e.maxWidth, e.minWidth = e.maxWidth = e.width = u, u = r.width, e.width = o, e.minWidth = s, e.maxWidth = h)), u !== undefined ? u + "" : u
    }

    function eu(n, t) {
        return {
            get: function() {
                if (n()) {
                    delete this.get;
                    return
                }
                return (this.get = t).apply(this, arguments)
            }
        }
    }

    function cu(n) {
        if (n in hu) return n;
        for (var i = n[0].toUpperCase() + n.slice(1), t = su.length; t--;)
            if (n = su[t] + i, n in hu) return n
    }

    function lu(n, t, i) {
        var r = ct.exec(t);
        return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t
    }

    function au(n, t, r, u, f) {
        for (var o = 0, e = r === (u ? "border" : "content") ? 4 : t === "width" ? 1 : 0; e < 4; e += 2) r === "margin" && (o += i.css(n, r + w[e], !0, f)), u ? (r === "content" && (o -= i.css(n, "padding" + w[e], !0, f)), r !== "margin" && (o -= i.css(n, "border" + w[e] + "Width", !0, f))) : (o += i.css(n, "padding" + w[e], !0, f), r !== "padding" && (o += i.css(n, "border" + w[e] + "Width", !0, f)));
        return o
    }

    function vu(n, t, r) {
        var u, o = !0,
            e = ni(n),
            s = i.css(n, "boxSizing", !1, e) === "border-box";
        if (n.getClientRects().length && (u = n.getBoundingClientRect()[t]), u <= 0 || u == null) {
            if (u = lt(n, t, e), (u < 0 || u == null) && (u = n.style[t]), hi.test(u)) return u;
            o = s && (f.boxSizingReliable() || u === n.style[t]);
            u = parseFloat(u) || 0
        }
        return u + au(n, t, r || (s ? "border" : "content"), o, e) + "px"
    }

    function s(n, t, i, r, u) {
        return new s.prototype.init(n, t, i, r, u)
    }

    function wu() {
        ut && (n.requestAnimationFrame(wu), i.fx.tick())
    }

    function bu() {
        return n.setTimeout(function() {
            rt = undefined
        }), rt = i.now()
    }

    function ti(n, t) {
        var r, u = 0,
            i = {
                height: n
            };
        for (t = t ? 1 : 0; u < 4; u += 2 - t) r = w[u], i["margin" + r] = i["padding" + r] = n;
        return t && (i.opacity = i.width = n), i
    }

    function ku(n, t, i) {
        for (var u, f = (l.tweeners[t] || []).concat(l.tweeners["*"]), r = 0, e = f.length; r < e; r++)
            if (u = f[r].call(i, t, n)) return u
    }

    function we(n, t, u) {
        var f, y, w, c, b, s, o, l, k = "width" in t || "height" in t,
            v = this,
            p = {},
            h = n.style,
            a = n.nodeType && kt(n),
            e = r.get(n, "fxshow");
        u.queue || (c = i._queueHooks(n, "fx"), c.unqueued == null && (c.unqueued = 0, b = c.empty.fire, c.empty.fire = function() {
            c.unqueued || b()
        }), c.unqueued++, v.always(function() {
            v.always(function() {
                c.unqueued--;
                i.queue(n, "fx").length || c.empty.fire()
            })
        }));
        for (f in t)
            if (y = t[f], yu.test(y)) {
                if (delete t[f], w = w || y === "toggle", y === (a ? "hide" : "show"))
                    if (y === "show" && e && e[f] !== undefined) a = !0;
                    else continue;
                p[f] = e && e[f] || i.style(n, f)
            }
        if (s = !i.isEmptyObject(t), s || !i.isEmptyObject(p)) {
            k && n.nodeType === 1 && (u.overflow = [h.overflow, h.overflowX, h.overflowY], o = e && e.display, o == null && (o = r.get(n, "display")), l = i.css(n, "display"), l === "none" && (o ? l = o : (nt([n], !0), o = n.style.display || o, l = i.css(n, "display"), nt([n]))), (l === "inline" || l === "inline-block" && o != null) && i.css(n, "float") === "none" && (s || (v.done(function() {
                h.display = o
            }), o == null && (l = h.display, o = l === "none" ? "" : l)), h.display = "inline-block"));
            u.overflow && (h.overflow = "hidden", v.always(function() {
                h.overflow = u.overflow[0];
                h.overflowX = u.overflow[1];
                h.overflowY = u.overflow[2]
            }));
            s = !1;
            for (f in p) s || (e ? "hidden" in e && (a = e.hidden) : e = r.access(n, "fxshow", {
                display: o
            }), w && (e.hidden = !a), a && nt([n], !0), v.done(function() {
                a || nt([n]);
                r.remove(n, "fxshow");
                for (f in p) i.style(n, f, p[f])
            })), s = ku(a ? e[f] : 0, f, v), f in e || (e[f] = s.start, a && (s.end = s.start, s.start = 0))
        }
    }

    function be(n, t) {
        var r, f, e, u, o;
        for (r in n)
            if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
                u = o.expand(u);
                delete n[f];
                for (r in u) r in n || (n[r] = u[r], t[r] = e)
            } else t[f] = e
    }

    function l(n, t, r) {
        var f, o, s = 0,
            a = l.prefilters.length,
            e = i.Deferred().always(function() {
                delete c.elem
            }),
            c = function() {
                if (o) return !1;
                for (var s = rt || bu(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, f = u.tweens.length; r < f; r++) u.tweens[r].run(i);
                return e.notifyWith(n, [u, i, t]), i < 1 && f ? t : (e.resolveWith(n, [u]), !1)
            },
            u = e.promise({
                elem: n,
                props: i.extend({}, t),
                opts: i.extend(!0, {
                    specialEasing: {},
                    easing: i.easing._default
                }, r),
                originalProperties: t,
                originalOptions: r,
                startTime: rt || bu(),
                duration: r.duration,
                tweens: [],
                createTween: function(t, r) {
                    var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(f), f
                },
                stop: function(t) {
                    var i = 0,
                        r = t ? u.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i < r; i++) u.tweens[i].run(1);
                    return t ? (e.notifyWith(n, [u, 1, 0]), e.resolveWith(n, [u, t])) : e.rejectWith(n, [u, t]), this
                }
            }),
            h = u.props;
        for (be(h, u.opts.specialEasing); s < a; s++)
            if (f = l.prefilters[s].call(u, n, h, u.opts), f) return i.isFunction(f.stop) && (i._queueHooks(u.elem, u.opts.queue).stop = i.proxy(f.stop, f)), f;
        return i.map(h, ku, u), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(c, {
            elem: n,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function b(n) {
        var t = n.match(h) || [];
        return t.join(" ")
    }

    function k(n) {
        return n.getAttribute && n.getAttribute("class") || ""
    }

    function ai(n, t, r, u) {
        var f;
        if (i.isArray(t)) i.each(t, function(t, i) {
            r || ke.test(n) ? u(n, i) : ai(n + "[" + (typeof i == "object" && i != null ? t : "") + "]", i, r, u)
        });
        else if (r || i.type(t) !== "object") u(n, t);
        else
            for (f in t) ai(n + "[" + f + "]", t[f], r, u)
    }

    function of(n) {
        return function(t, r) {
            typeof t != "string" && (r = t, t = "*");
            var u, f = 0,
                e = t.toLowerCase().match(h) || [];
            if (i.isFunction(r))
                while (u = e[f++]) u[0] === "+" ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
        }
    }

    function sf(n, t, r, u) {
        function e(s) {
            var h;
            return f[s] = !0, i.each(n[s] || [], function(n, i) {
                var s = i(t, r, u);
                if (typeof s != "string" || o || f[s]) {
                    if (o) return !(h = s)
                } else return t.dataTypes.unshift(s), e(s), !1
            }), h
        }
        var f = {},
            o = n === vi;
        return e(t.dataTypes[0]) || !f["*"] && e("*")
    }

    function pi(n, t) {
        var r, u, f = i.ajaxSettings.flatOptions || {};
        for (r in t) t[r] !== undefined && ((f[r] ? n : u || (u = {}))[r] = t[r]);
        return u && i.extend(!0, n, u), n
    }

    function eo(n, t, i) {
        for (var e, u, f, o, s = n.contents, r = n.dataTypes; r[0] === "*";) r.shift(), e === undefined && (e = n.mimeType || t.getResponseHeader("Content-Type"));
        if (e)
            for (u in s)
                if (s[u] && s[u].test(e)) {
                    r.unshift(u);
                    break
                }
        if (r[0] in i) f = r[0];
        else {
            for (u in i) {
                if (!r[0] || n.converters[u + " " + r[0]]) {
                    f = u;
                    break
                }
                o || (o = u)
            }
            f = f || o
        }
        if (f) return f !== r[0] && r.unshift(f), i[f]
    }

    function oo(n, t, i, r) {
        var h, u, f, s, e, o = {},
            c = n.dataTypes.slice();
        if (c[1])
            for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
        for (u = c.shift(); u;)
            if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift(), u)
                if (u === "*") u = e;
                else if (e !== "*" && e !== u) {
            if (f = o[e + " " + u] || o["* " + u], !f)
                for (h in o)
                    if (s = h.split(" "), s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]], f)) {
                        f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0], c.unshift(s[1]));
                        break
                    }
            if (f !== !0)
                if (f && n.throws) t = f(t);
                else try {
                    t = f(t)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: f ? l : "No conversion from " + e + " to " + u
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function cf(n) {
        return i.isWindow(n) ? n : n.nodeType === 9 && n.defaultView
    }
    var y = [],
        u = n.document,
        vf = Object.getPrototypeOf,
        p = y.slice,
        bi = y.concat,
        ri = y.push,
        ot = y.indexOf,
        vt = {},
        ki = vt.toString,
        yt = vt.hasOwnProperty,
        di = yt.toString,
        yf = di.call(Object),
        f = {},
        nr = "3.1.1",
        i = function(n, t) {
            return new i.fn.init(n, t)
        },
        pf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        wf = /^-ms-/,
        bf = /-([a-z])/g,
        kf = function(n, t) {
            return t.toUpperCase()
        },
        v, ur, fr, er, or, sr, h, lr, wt, a, st, ei, dr, rt, ut, yu, pu, du, ft, gu, nf, tf, ci, hf, et, wi, ii, lf, af;
    i.fn = i.prototype = {
        jquery: nr,
        constructor: i,
        length: 0,
        toArray: function() {
            return p.call(this)
        },
        get: function(n) {
            return n == null ? p.call(this) : n < 0 ? this[n + this.length] : this[n]
        },
        pushStack: function(n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this, t
        },
        each: function(n) {
            return i.each(this, n)
        },
        map: function(n) {
            return this.pushStack(i.map(this, function(t, i) {
                return n.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(p.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(n) {
            var i = this.length,
                t = +n + (n < 0 ? i : 0);
            return this.pushStack(t >= 0 && t < i ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ri,
        sort: y.sort,
        splice: y.splice
    };
    i.extend = i.fn.extend = function() {
        var e, f, r, t, o, s, n = arguments[0] || {},
            u = 1,
            c = arguments.length,
            h = !1;
        for (typeof n == "boolean" && (h = n, n = arguments[u] || {}, u++), typeof n == "object" || i.isFunction(n) || (n = {}), u === c && (n = this, u--); u < c; u++)
            if ((e = arguments[u]) != null)
                for (f in e)(r = n[f], t = e[f], n !== t) && (h && t && (i.isPlainObject(t) || (o = i.isArray(t))) ? (o ? (o = !1, s = r && i.isArray(r) ? r : []) : s = r && i.isPlainObject(r) ? r : {}, n[f] = i.extend(h, s, t)) : t !== undefined && (n[f] = t));
        return n
    };
    i.extend({
        expando: "jQuery" + (nr + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(n) {
            throw new Error(n);
        },
        noop: function() {},
        isFunction: function(n) {
            return i.type(n) === "function"
        },
        isArray: Array.isArray,
        isWindow: function(n) {
            return n != null && n === n.window
        },
        isNumeric: function(n) {
            var t = i.type(n);
            return (t === "number" || t === "string") && !isNaN(n - parseFloat(n))
        },
        isPlainObject: function(n) {
            var t, i;
            return !n || ki.call(n) !== "[object Object]" ? !1 : (t = vf(n), !t) ? !0 : (i = yt.call(t, "constructor") && t.constructor, typeof i == "function" && di.call(i) === yf)
        },
        isEmptyObject: function(n) {
            for (var t in n) return !1;
            return !0
        },
        type: function(n) {
            return n == null ? n + "" : typeof n == "object" || typeof n == "function" ? vt[ki.call(n)] || "object" : typeof n
        },
        globalEval: function(n) {
            gi(n)
        },
        camelCase: function(n) {
            return n.replace(wf, "ms-").replace(bf, kf)
        },
        nodeName: function(n, t) {
            return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(n, t) {
            var r, i = 0;
            if (ui(n)) {
                for (r = n.length; i < r; i++)
                    if (t.call(n[i], i, n[i]) === !1) break
            } else
                for (i in n)
                    if (t.call(n[i], i, n[i]) === !1) break; return n
        },
        trim: function(n) {
            return n == null ? "" : (n + "").replace(pf, "")
        },
        makeArray: function(n, t) {
            var r = t || [];
            return n != null && (ui(Object(n)) ? i.merge(r, typeof n == "string" ? [n] : n) : ri.call(r, n)), r
        },
        inArray: function(n, t, i) {
            return t == null ? -1 : ot.call(t, n, i)
        },
        merge: function(n, t) {
            for (var u = +t.length, i = 0, r = n.length; i < u; i++) n[r++] = t[i];
            return n.length = r, n
        },
        grep: function(n, t, i) {
            for (var u, f = [], r = 0, e = n.length, o = !i; r < e; r++) u = !t(n[r], r), u !== o && f.push(n[r]);
            return f
        },
        map: function(n, t, i) {
            var e, u, r = 0,
                f = [];
            if (ui(n))
                for (e = n.length; r < e; r++) u = t(n[r], r, i), u != null && f.push(u);
            else
                for (r in n) u = t(n[r], r, i), u != null && f.push(u);
            return bi.apply([], f)
        },
        guid: 1,
        proxy: function(n, t) {
            var u, f, r;
            return (typeof t == "string" && (u = n[t], t = n, n = u), !i.isFunction(n)) ? undefined : (f = p.call(arguments, 2), r = function() {
                return n.apply(t || this, f.concat(p.call(arguments)))
            }, r.guid = n.guid = n.guid || i.guid++, r)
        },
        now: Date.now,
        support: f
    });
    typeof Symbol == "function" && (i.fn[Symbol.iterator] = y[Symbol.iterator]);
    i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(n, t) {
        vt["[object " + t + "]"] = t.toLowerCase()
    });
    v = function(n) {
        function u(n, t, r, u) {
            var s, w, l, a, d, y, g, p = t && t.ownerDocument,
                v = t ? t.nodeType : 9;
            if (r = r || [], typeof n != "string" || !n || v !== 1 && v !== 9 && v !== 11) return r;
            if (!u && ((t ? t.ownerDocument || t : c) !== i && b(t), t = t || i, h)) {
                if (v !== 11 && (d = cr.exec(n)))
                    if (s = d[1]) {
                        if (v === 9)
                            if (l = t.getElementById(s)) {
                                if (l.id === s) return r.push(l), r
                            } else return r;
                        else if (p && (l = p.getElementById(s)) && et(t, l) && l.id === s) return r.push(l), r
                    } else {
                        if (d[2]) return k.apply(r, t.getElementsByTagName(n)), r;
                        if ((s = d[3]) && e.getElementsByClassName && t.getElementsByClassName) return k.apply(r, t.getElementsByClassName(s)), r
                    }
                if (e.qsa && !lt[n + " "] && (!o || !o.test(n))) {
                    if (v !== 1) p = t, g = n;
                    else if (t.nodeName.toLowerCase() !== "object") {
                        for ((a = t.getAttribute("id")) ? a = a.replace(vi, yi) : t.setAttribute("id", a = f), y = ft(n), w = y.length; w--;) y[w] = "#" + a + " " + yt(y[w]);
                        g = y.join(",");
                        p = ni.test(n) && ri(t.parentNode) || t
                    }
                    if (g) try {
                        return k.apply(r, p.querySelectorAll(g)), r
                    } catch (nt) {} finally {
                        a === f && t.removeAttribute("id")
                    }
                }
            }
            return si(n.replace(at, "$1"), t, r, u)
        }

        function ti() {
            function n(r, u) {
                return i.push(r + " ") > t.cacheLength && delete n[i.shift()], n[r + " "] = u
            }
            var i = [];
            return n
        }

        function l(n) {
            return n[f] = !0, n
        }

        function a(n) {
            var t = i.createElement("fieldset");
            try {
                return !!n(t)
            } catch (r) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }

        function ii(n, i) {
            for (var r = n.split("|"), u = r.length; u--;) t.attrHandle[r[u]] = i
        }

        function wi(n, t) {
            var i = t && n,
                r = i && n.nodeType === 1 && t.nodeType === 1 && n.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (i)
                while (i = i.nextSibling)
                    if (i === t) return -1;
            return n ? 1 : -1
        }

        function ar(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return i === "input" && t.type === n
            }
        }

        function vr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return (i === "input" || i === "button") && t.type === n
            }
        }

        function bi(n) {
            return function(t) {
                return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === n : t.disabled === n : t.isDisabled === n || t.isDisabled !== !n && lr(t) === n : t.disabled === n : "label" in t ? t.disabled === n : !1
            }
        }

        function it(n) {
            return l(function(t) {
                return t = +t, l(function(i, r) {
                    for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                })
            })
        }

        function ri(n) {
            return n && typeof n.getElementsByTagName != "undefined" && n
        }

        function ki() {}

        function yt(n) {
            for (var t = 0, r = n.length, i = ""; t < r; t++) i += n[t].value;
            return i
        }

        function pt(n, t, i) {
            var r = t.dir,
                u = t.next,
                e = u || r,
                o = i && e === "parentNode",
                s = di++;
            return t.first ? function(t, i, u) {
                while (t = t[r])
                    if (t.nodeType === 1 || o) return n(t, i, u);
                return !1
            } : function(t, i, h) {
                var c, l, a, y = [v, s];
                if (h) {
                    while (t = t[r])
                        if ((t.nodeType === 1 || o) && n(t, i, h)) return !0
                } else
                    while (t = t[r])
                        if (t.nodeType === 1 || o)
                            if (a = t[f] || (t[f] = {}), l = a[t.uniqueID] || (a[t.uniqueID] = {}), u && u === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((c = l[e]) && c[0] === v && c[1] === s) return y[2] = c[2];
                                if (l[e] = y, y[2] = n(t, i, h)) return !0
                            } return !1
            }
        }

        function ui(n) {
            return n.length > 1 ? function(t, i, r) {
                for (var u = n.length; u--;)
                    if (!n[u](t, i, r)) return !1;
                return !0
            } : n[0]
        }

        function yr(n, t, i) {
            for (var r = 0, f = t.length; r < f; r++) u(n, t[r], i);
            return i
        }

        function wt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = t != null; f < s; f++)(e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f));
            return o
        }

        function fi(n, t, i, r, u, e) {
            return r && !r[f] && (r = fi(r)), u && !u[f] && (u = fi(u, e)), l(function(f, e, o, s) {
                var l, c, a, p = [],
                    y = [],
                    w = e.length,
                    b = f || yr(t || "*", o.nodeType ? [o] : o, []),
                    v = n && (f || !t) ? wt(b, p, n, o, s) : b,
                    h = i ? u || (f ? n : w || r) ? [] : e : v;
                if (i && i(v, h, o, s), r)
                    for (l = wt(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                if (f) {
                    if (u || n) {
                        if (u) {
                            for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
                            u(null, h = [], l, s)
                        }
                        for (c = h.length; c--;)(a = h[c]) && (l = u ? nt(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                    }
                } else h = wt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : k.apply(e, h)
            })
        }

        function ei(n) {
            for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = pt(function(n) {
                    return n === o
                }, c, !0), a = pt(function(n) {
                    return nt(o, n) > -1
                }, c, !0), e = [function(n, t, i) {
                    var r = !h && (i || t !== ht) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
                    return o = null, r
                }]; i < s; i++)
                if (u = t.relative[n[i].type]) e = [pt(ui(e), u)];
                else {
                    if (u = t.filter[n[i].type].apply(null, n[i].matches), u[f]) {
                        for (r = ++i; r < s; r++)
                            if (t.relative[n[r].type]) break;
                        return fi(i > 1 && ui(e), i > 1 && yt(n.slice(0, i - 1).concat({
                            value: n[i - 2].type === " " ? "*" : ""
                        })).replace(at, "$1"), u, i < r && ei(n.slice(i, r)), r < s && ei(n = n.slice(r)), r < s && yt(n))
                    }
                    e.push(u)
                }
            return ui(e)
        }

        function pr(n, r) {
            var f = r.length > 0,
                e = n.length > 0,
                o = function(o, s, c, l, a) {
                    var y, nt, d, g = 0,
                        p = "0",
                        tt = o && [],
                        w = [],
                        it = ht,
                        rt = o || e && t.find.TAG("*", a),
                        ut = v += it == null ? 1 : Math.random() || .1,
                        ft = rt.length;
                    for (a && (ht = s === i || s || a); p !== ft && (y = rt[p]) != null; p++) {
                        if (e && y) {
                            for (nt = 0, s || y.ownerDocument === i || (b(y), c = !h); d = n[nt++];)
                                if (d(y, s || i, c)) {
                                    l.push(y);
                                    break
                                }
                            a && (v = ut)
                        }
                        f && ((y = !d && y) && g--, o && tt.push(y))
                    }
                    if (g += p, f && p !== g) {
                        for (nt = 0; d = r[nt++];) d(tt, w, s, c);
                        if (o) {
                            if (g > 0)
                                while (p--) tt[p] || w[p] || (w[p] = nr.call(l));
                            w = wt(w)
                        }
                        k.apply(l, w);
                        a && !o && w.length > 0 && g + r.length > 1 && u.uniqueSort(l)
                    }
                    return a && (v = ut, ht = it), tt
                };
            return f ? l(o) : o
        }
        var rt, e, t, st, oi, ft, bt, si, ht, w, ut, b, i, s, h, o, d, ct, et, f = "sizzle" + 1 * new Date,
            c = n.document,
            v = 0,
            di = 0,
            hi = ti(),
            ci = ti(),
            lt = ti(),
            kt = function(n, t) {
                return n === t && (ut = !0), 0
            },
            gi = {}.hasOwnProperty,
            g = [],
            nr = g.pop,
            tr = g.push,
            k = g.push,
            li = g.slice,
            nt = function(n, t) {
                for (var i = 0, r = n.length; i < r; i++)
                    if (n[i] === t) return i;
                return -1
            },
            dt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            r = "[\\x20\\t\\r\\n\\f]",
            tt = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ai = "\\[" + r + "*(" + tt + ")(?:" + r + "*([*^$|!~]?=)" + r + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + tt + "))|)" + r + "*\\]",
            gt = ":(" + tt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ai + ")*)|.*)\\)|)",
            ir = new RegExp(r + "+", "g"),
            at = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"),
            rr = new RegExp("^" + r + "*," + r + "*"),
            ur = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"),
            fr = new RegExp("=" + r + "*([^\\]'\"]*?)" + r + "*\\]", "g"),
            er = new RegExp(gt),
            or = new RegExp("^" + tt + "$"),
            vt = {
                ID: new RegExp("^#(" + tt + ")"),
                CLASS: new RegExp("^\\.(" + tt + ")"),
                TAG: new RegExp("^(" + tt + "|[*])"),
                ATTR: new RegExp("^" + ai),
                PSEUDO: new RegExp("^" + gt),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + dt + ")$", "i"),
                needsContext: new RegExp("^" + r + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + r + "*((?:-\\d)?\\d*)" + r + "*\\)|)(?=[^-]|$)", "i")
            },
            sr = /^(?:input|select|textarea|button)$/i,
            hr = /^h\d$/i,
            ot = /^[^{]+\{\s*\[native \w/,
            cr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ni = /[+~]/,
            y = new RegExp("\\\\([\\da-f]{1,6}" + r + "?|(" + r + ")|.)", "ig"),
            p = function(n, t, i) {
                var r = "0x" + t - 65536;
                return r !== r || i ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
            },
            vi = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            yi = function(n, t) {
                return t ? n === "\0" ? "�" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " " : "\\" + n
            },
            pi = function() {
                b()
            },
            lr = pt(function(n) {
                return n.disabled === !0 && ("form" in n || "label" in n)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            k.apply(g = li.call(c.childNodes), c.childNodes);
            g[c.childNodes.length].nodeType
        } catch (wr) {
            k = {
                apply: g.length ? function(n, t) {
                    tr.apply(n, li.call(t))
                } : function(n, t) {
                    for (var i = n.length, r = 0; n[i++] = t[r++];);
                    n.length = i - 1
                }
            }
        }
        e = u.support = {};
        oi = u.isXML = function(n) {
            var t = n && (n.ownerDocument || n).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        };
        b = u.setDocument = function(n) {
            var v, u, l = n ? n.ownerDocument || n : c;
            return l === i || l.nodeType !== 9 || !l.documentElement ? i : (i = l, s = i.documentElement, h = !oi(i), c !== i && (u = i.defaultView) && u.top !== u && (u.addEventListener ? u.addEventListener("unload", pi, !1) : u.attachEvent && u.attachEvent("onunload", pi)), e.attributes = a(function(n) {
                return n.className = "i", !n.getAttribute("className")
            }), e.getElementsByTagName = a(function(n) {
                return n.appendChild(i.createComment("")), !n.getElementsByTagName("*").length
            }), e.getElementsByClassName = ot.test(i.getElementsByClassName), e.getById = a(function(n) {
                return s.appendChild(n).id = f, !i.getElementsByName || !i.getElementsByName(f).length
            }), e.getById ? (t.filter.ID = function(n) {
                var t = n.replace(y, p);
                return function(n) {
                    return n.getAttribute("id") === t
                }
            }, t.find.ID = function(n, t) {
                if (typeof t.getElementById != "undefined" && h) {
                    var i = t.getElementById(n);
                    return i ? [i] : []
                }
            }) : (t.filter.ID = function(n) {
                var t = n.replace(y, p);
                return function(n) {
                    var i = typeof n.getAttributeNode != "undefined" && n.getAttributeNode("id");
                    return i && i.value === t
                }
            }, t.find.ID = function(n, t) {
                if (typeof t.getElementById != "undefined" && h) {
                    var i, u, f, r = t.getElementById(n);
                    if (r) {
                        if (i = r.getAttributeNode("id"), i && i.value === n) return [r];
                        for (f = t.getElementsByName(n), u = 0; r = f[u++];)
                            if (i = r.getAttributeNode("id"), i && i.value === n) return [r]
                    }
                    return []
                }
            }), t.find.TAG = e.getElementsByTagName ? function(n, t) {
                return typeof t.getElementsByTagName != "undefined" ? t.getElementsByTagName(n) : e.qsa ? t.querySelectorAll(n) : void 0
            } : function(n, t) {
                var i, r = [],
                    f = 0,
                    u = t.getElementsByTagName(n);
                if (n === "*") {
                    while (i = u[f++]) i.nodeType === 1 && r.push(i);
                    return r
                }
                return u
            }, t.find.CLASS = e.getElementsByClassName && function(n, t) {
                if (typeof t.getElementsByClassName != "undefined" && h) return t.getElementsByClassName(n)
            }, d = [], o = [], (e.qsa = ot.test(i.querySelectorAll)) && (a(function(n) {
                s.appendChild(n).innerHTML = "<a id='" + f + "'><\/a><select id='" + f + "-\r\\' msallowcapture=''><option selected=''><\/option><\/select>";
                n.querySelectorAll("[msallowcapture^='']").length && o.push("[*^$]=" + r + "*(?:''|\"\")");
                n.querySelectorAll("[selected]").length || o.push("\\[" + r + "*(?:value|" + dt + ")");
                n.querySelectorAll("[id~=" + f + "-]").length || o.push("~=");
                n.querySelectorAll(":checked").length || o.push(":checked");
                n.querySelectorAll("a#" + f + "+*").length || o.push(".#.+[+~]")
            }), a(function(n) {
                n.innerHTML = "<a href='' disabled='disabled'><\/a><select disabled='disabled'><option/><\/select>";
                var t = i.createElement("input");
                t.setAttribute("type", "hidden");
                n.appendChild(t).setAttribute("name", "D");
                n.querySelectorAll("[name=d]").length && o.push("name" + r + "*[*^$|!~]?=");
                n.querySelectorAll(":enabled").length !== 2 && o.push(":enabled", ":disabled");
                s.appendChild(n).disabled = !0;
                n.querySelectorAll(":disabled").length !== 2 && o.push(":enabled", ":disabled");
                n.querySelectorAll("*,:x");
                o.push(",.*:")
            })), (e.matchesSelector = ot.test(ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && a(function(n) {
                e.disconnectedMatch = ct.call(n, "*");
                ct.call(n, "[s!='']:x");
                d.push("!=", gt)
            }), o = o.length && new RegExp(o.join("|")), d = d.length && new RegExp(d.join("|")), v = ot.test(s.compareDocumentPosition), et = v || ot.test(s.contains) ? function(n, t) {
                var r = n.nodeType === 9 ? n.documentElement : n,
                    i = t && t.parentNode;
                return n === i || !!(i && i.nodeType === 1 && (r.contains ? r.contains(i) : n.compareDocumentPosition && n.compareDocumentPosition(i) & 16))
            } : function(n, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === n) return !0;
                return !1
            }, kt = v ? function(n, t) {
                if (n === t) return ut = !0, 0;
                var r = !n.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1, r & 1 || !e.sortDetached && t.compareDocumentPosition(n) === r) ? n === i || n.ownerDocument === c && et(c, n) ? -1 : t === i || t.ownerDocument === c && et(c, t) ? 1 : w ? nt(w, n) - nt(w, t) : 0 : r & 4 ? -1 : 1
            } : function(n, t) {
                if (n === t) return ut = !0, 0;
                var r, u = 0,
                    o = n.parentNode,
                    s = t.parentNode,
                    f = [n],
                    e = [t];
                if (o && s) {
                    if (o === s) return wi(n, t)
                } else return n === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0;
                for (r = n; r = r.parentNode;) f.unshift(r);
                for (r = t; r = r.parentNode;) e.unshift(r);
                while (f[u] === e[u]) u++;
                return u ? wi(f[u], e[u]) : f[u] === c ? -1 : e[u] === c ? 1 : 0
            }, i)
        };
        u.matches = function(n, t) {
            return u(n, null, null, t)
        };
        u.matchesSelector = function(n, t) {
            if ((n.ownerDocument || n) !== i && b(n), t = t.replace(fr, "='$1']"), e.matchesSelector && h && !lt[t + " "] && (!d || !d.test(t)) && (!o || !o.test(t))) try {
                var r = ct.call(n, t);
                if (r || e.disconnectedMatch || n.document && n.document.nodeType !== 11) return r
            } catch (f) {}
            return u(t, i, null, [n]).length > 0
        };
        u.contains = function(n, t) {
            return (n.ownerDocument || n) !== i && b(n), et(n, t)
        };
        u.attr = function(n, r) {
            (n.ownerDocument || n) !== i && b(n);
            var f = t.attrHandle[r.toLowerCase()],
                u = f && gi.call(t.attrHandle, r.toLowerCase()) ? f(n, r, !h) : undefined;
            return u !== undefined ? u : e.attributes || !h ? n.getAttribute(r) : (u = n.getAttributeNode(r)) && u.specified ? u.value : null
        };
        u.escape = function(n) {
            return (n + "").replace(vi, yi)
        };
        u.error = function(n) {
            throw new Error("Syntax error, unrecognized expression: " + n);
        };
        u.uniqueSort = function(n) {
            var r, u = [],
                t = 0,
                i = 0;
            if (ut = !e.detectDuplicates, w = !e.sortStable && n.slice(0), n.sort(kt), ut) {
                while (r = n[i++]) r === n[i] && (t = u.push(i));
                while (t--) n.splice(u[t], 1)
            }
            return w = null, n
        };
        st = u.getText = function(n) {
            var r, i = "",
                u = 0,
                t = n.nodeType;
            if (t) {
                if (t === 1 || t === 9 || t === 11) {
                    if (typeof n.textContent == "string") return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling) i += st(n)
                } else if (t === 3 || t === 4) return n.nodeValue
            } else
                while (r = n[u++]) i += st(r);
            return i
        };
        t = u.selectors = {
            cacheLength: 50,
            createPseudo: l,
            match: vt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(n) {
                    return n[1] = n[1].replace(y, p), n[3] = (n[3] || n[4] || n[5] || "").replace(y, p), n[2] === "~=" && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                },
                CHILD: function(n) {
                    return n[1] = n[1].toLowerCase(), n[1].slice(0, 3) === "nth" ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * (n[3] === "even" || n[3] === "odd")), n[5] = +(n[7] + n[8] || n[3] === "odd")) : n[3] && u.error(n[0]), n
                },
                PSEUDO: function(n) {
                    var i, t = !n[6] && n[2];
                    return vt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && er.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
                }
            },
            filter: {
                TAG: function(n) {
                    var t = n.replace(y, p).toLowerCase();
                    return n === "*" ? function() {
                        return !0
                    } : function(n) {
                        return n.nodeName && n.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(n) {
                    var t = hi[n + " "];
                    return t || (t = new RegExp("(^|" + r + ")" + n + "(" + r + "|$)")) && hi(n, function(n) {
                        return t.test(typeof n.className == "string" && n.className || typeof n.getAttribute != "undefined" && n.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, t, i) {
                    return function(r) {
                        var f = u.attr(r, n);
                        return f == null ? t === "!=" : t ? (f += "", t === "=" ? f === i : t === "!=" ? f !== i : t === "^=" ? i && f.indexOf(i) === 0 : t === "*=" ? i && f.indexOf(i) > -1 : t === "$=" ? i && f.slice(-i.length) === i : t === "~=" ? (" " + f.replace(ir, " ") + " ").indexOf(i) > -1 : t === "|=" ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(n, t, i, r, u) {
                    var s = n.slice(0, 3) !== "nth",
                        o = n.slice(-4) !== "last",
                        e = t === "of-type";
                    return r === 1 && u === 0 ? function(n) {
                        return !!n.parentNode
                    } : function(t, i, h) {
                        var p, w, y, c, a, b, k = s !== o ? "nextSibling" : "previousSibling",
                            d = t.parentNode,
                            nt = e && t.nodeName.toLowerCase(),
                            g = !h && !e,
                            l = !1;
                        if (d) {
                            if (s) {
                                while (k) {
                                    for (c = t; c = c[k];)
                                        if (e ? c.nodeName.toLowerCase() === nt : c.nodeType === 1) return !1;
                                    b = k = n === "only" && !b && "nextSibling"
                                }
                                return !0
                            }
                            if (b = [o ? d.firstChild : d.lastChild], o && g) {
                                for (c = d, y = c[f] || (c[f] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), p = w[n] || [], a = p[0] === v && p[1], l = a && p[2], c = a && d.childNodes[a]; c = ++a && c && c[k] || (l = a = 0) || b.pop();)
                                    if (c.nodeType === 1 && ++l && c === t) {
                                        w[n] = [v, a, l];
                                        break
                                    }
                            } else if (g && (c = t, y = c[f] || (c[f] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), p = w[n] || [], a = p[0] === v && p[1], l = a), l === !1)
                                while (c = ++a && c && c[k] || (l = a = 0) || b.pop())
                                    if ((e ? c.nodeName.toLowerCase() === nt : c.nodeType === 1) && ++l && (g && (y = c[f] || (c[f] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), w[n] = [v, l]), c === t)) break;
                            return l -= u, l === r || l % r == 0 && l / r >= 0
                        }
                    }
                },
                PSEUDO: function(n, i) {
                    var e, r = t.pseudos[n] || t.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                    return r[f] ? r(i) : r.length > 1 ? (e = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function(n, t) {
                        for (var u, f = r(n, i), e = f.length; e--;) u = nt(n, f[e]), n[u] = !(t[u] = f[e])
                    }) : function(n) {
                        return r(n, 0, e)
                    }) : r
                }
            },
            pseudos: {
                not: l(function(n) {
                    var t = [],
                        r = [],
                        i = bt(n.replace(at, "$1"));
                    return i[f] ? l(function(n, t, r, u) {
                        for (var e, o = i(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(t[f] = e))
                    }) : function(n, u, f) {
                        return t[0] = n, i(t, null, f, r), t[0] = null, !r.pop()
                    }
                }),
                has: l(function(n) {
                    return function(t) {
                        return u(n, t).length > 0
                    }
                }),
                contains: l(function(n) {
                    return n = n.replace(y, p),
                        function(t) {
                            return (t.textContent || t.innerText || st(t)).indexOf(n) > -1
                        }
                }),
                lang: l(function(n) {
                    return or.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(y, p).toLowerCase(),
                        function(t) {
                            var i;
                            do
                                if (i = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === n || i.indexOf(n + "-") === 0;
                            while ((t = t.parentNode) && t.nodeType === 1);
                            return !1
                        }
                }),
                target: function(t) {
                    var i = n.location && n.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(n) {
                    return n === s
                },
                focus: function(n) {
                    return n === i.activeElement && (!i.hasFocus || i.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                },
                enabled: bi(!1),
                disabled: bi(!0),
                checked: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return t === "input" && !!n.checked || t === "option" && !!n.selected
                },
                selected: function(n) {
                    return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
                },
                empty: function(n) {
                    for (n = n.firstChild; n; n = n.nextSibling)
                        if (n.nodeType < 6) return !1;
                    return !0
                },
                parent: function(n) {
                    return !t.pseudos.empty(n)
                },
                header: function(n) {
                    return hr.test(n.nodeName)
                },
                input: function(n) {
                    return sr.test(n.nodeName)
                },
                button: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return t === "input" && n.type === "button" || t === "button"
                },
                text: function(n) {
                    var t;
                    return n.nodeName.toLowerCase() === "input" && n.type === "text" && ((t = n.getAttribute("type")) == null || t.toLowerCase() === "text")
                },
                first: it(function() {
                    return [0]
                }),
                last: it(function(n, t) {
                    return [t - 1]
                }),
                eq: it(function(n, t, i) {
                    return [i < 0 ? i + t : i]
                }),
                even: it(function(n, t) {
                    for (var i = 0; i < t; i += 2) n.push(i);
                    return n
                }),
                odd: it(function(n, t) {
                    for (var i = 1; i < t; i += 2) n.push(i);
                    return n
                }),
                lt: it(function(n, t, i) {
                    for (var r = i < 0 ? i + t : i; --r >= 0;) n.push(r);
                    return n
                }),
                gt: it(function(n, t, i) {
                    for (var r = i < 0 ? i + t : i; ++r < t;) n.push(r);
                    return n
                })
            }
        };
        t.pseudos.nth = t.pseudos.eq;
        for (rt in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) t.pseudos[rt] = ar(rt);
        for (rt in {
                submit: !0,
                reset: !0
            }) t.pseudos[rt] = vr(rt);
        return ki.prototype = t.filters = t.pseudos, t.setFilters = new ki, ft = u.tokenize = function(n, i) {
            var e, f, s, o, r, h, c, l = ci[n + " "];
            if (l) return i ? 0 : l.slice(0);
            for (r = n, h = [], c = t.preFilter; r;) {
                (!e || (f = rr.exec(r))) && (f && (r = r.slice(f[0].length) || r), h.push(s = []));
                e = !1;
                (f = ur.exec(r)) && (e = f.shift(), s.push({
                    value: e,
                    type: f[0].replace(at, " ")
                }), r = r.slice(e.length));
                for (o in t.filter)(f = vt[o].exec(r)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
                    value: e,
                    type: o,
                    matches: f
                }), r = r.slice(e.length));
                if (!e) break
            }
            return i ? r.length : r ? u.error(n) : ci(n, h).slice(0)
        }, bt = u.compile = function(n, t) {
            var r, u = [],
                e = [],
                i = lt[n + " "];
            if (!i) {
                for (t || (t = ft(n)), r = t.length; r--;) i = ei(t[r]), i[f] ? u.push(i) : e.push(i);
                i = lt(n, pr(e, u));
                i.selector = n
            }
            return i
        }, si = u.select = function(n, i, r, u) {
            var o, f, e, l, a, c = typeof n == "function" && n,
                s = !u && ft(n = c.selector || n);
            if (r = r || [], s.length === 1) {
                if (f = s[0] = s[0].slice(0), f.length > 2 && (e = f[0]).type === "ID" && i.nodeType === 9 && h && t.relative[f[1].type]) {
                    if (i = (t.find.ID(e.matches[0].replace(y, p), i) || [])[0], i) c && (i = i.parentNode);
                    else return r;
                    n = n.slice(f.shift().value.length)
                }
                for (o = vt.needsContext.test(n) ? 0 : f.length; o--;) {
                    if (e = f[o], t.relative[l = e.type]) break;
                    if ((a = t.find[l]) && (u = a(e.matches[0].replace(y, p), ni.test(f[0].type) && ri(i.parentNode) || i))) {
                        if (f.splice(o, 1), n = u.length && yt(f), !n) return k.apply(r, u), r;
                        break
                    }
                }
            }
            return (c || bt(n, s))(u, i, !h, r, !i || ni.test(n) && ri(i.parentNode) || i), r
        }, e.sortStable = f.split("").sort(kt).join("") === f, e.detectDuplicates = !!ut, b(), e.sortDetached = a(function(n) {
            return n.compareDocumentPosition(i.createElement("fieldset")) & 1
        }), a(function(n) {
            return n.innerHTML = "<a href='#'><\/a>", n.firstChild.getAttribute("href") === "#"
        }) || ii("type|href|height|width", function(n, t, i) {
            if (!i) return n.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
        }), e.attributes && a(function(n) {
            return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), n.firstChild.getAttribute("value") === ""
        }) || ii("value", function(n, t, i) {
            if (!i && n.nodeName.toLowerCase() === "input") return n.defaultValue
        }), a(function(n) {
            return n.getAttribute("disabled") == null
        }) || ii(dt, function(n, t, i) {
            var r;
            if (!i) return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
        }), u
    }(n);
    i.find = v;
    i.expr = v.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.uniqueSort = i.unique = v.uniqueSort;
    i.text = v.getText;
    i.isXMLDoc = v.isXML;
    i.contains = v.contains;
    i.escapeSelector = v.escape;
    var d = function(n, t, r) {
            for (var u = [], f = r !== undefined;
                (n = n[t]) && n.nodeType !== 9;)
                if (n.nodeType === 1) {
                    if (f && i(n).is(r)) break;
                    u.push(n)
                }
            return u
        },
        tr = function(n, t) {
            for (var i = []; n; n = n.nextSibling) n.nodeType === 1 && n !== t && i.push(n);
            return i
        },
        ir = i.expr.match.needsContext,
        rr = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        df = /^.[^:#\[\.,]*$/;
    i.filter = function(n, t, r) {
        var u = t[0];
        return (r && (n = ":not(" + n + ")"), t.length === 1 && u.nodeType === 1) ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
            return n.nodeType === 1
        }))
    };
    i.fn.extend({
        find: function(n) {
            var t, r, u = this.length,
                f = this;
            if (typeof n != "string") return this.pushStack(i(n).filter(function() {
                for (t = 0; t < u; t++)
                    if (i.contains(f[t], this)) return !0
            }));
            for (r = this.pushStack([]), t = 0; t < u; t++) i.find(n, f[t], r);
            return u > 1 ? i.uniqueSort(r) : r
        },
        filter: function(n) {
            return this.pushStack(fi(this, n || [], !1))
        },
        not: function(n) {
            return this.pushStack(fi(this, n || [], !0))
        },
        is: function(n) {
            return !!fi(this, typeof n == "string" && ir.test(n) ? i(n) : n || [], !1).length
        }
    });
    fr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    er = i.fn.init = function(n, t, r) {
        var f, e;
        if (!n) return this;
        if (r = r || ur, typeof n == "string") {
            if (f = n[0] === "<" && n[n.length - 1] === ">" && n.length >= 3 ? [null, n, null] : fr.exec(n), f && (f[1] || !t)) {
                if (f[1]) {
                    if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(f[1], t && t.nodeType ? t.ownerDocument || t : u, !0)), rr.test(f[1]) && i.isPlainObject(t))
                        for (f in t) i.isFunction(this[f]) ? this[f](t[f]) : this.attr(f, t[f]);
                    return this
                }
                return e = u.getElementById(f[2]), e && (this[0] = e, this.length = 1), this
            }
            return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n)
        }
        return n.nodeType ? (this[0] = n, this.length = 1, this) : i.isFunction(n) ? r.ready !== undefined ? r.ready(n) : n(i) : i.makeArray(n, this)
    };
    er.prototype = i.fn;
    ur = i(u);
    or = /^(?:parents|prev(?:Until|All))/;
    sr = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    i.fn.extend({
        has: function(n) {
            var t = i(n, this),
                r = t.length;
            return this.filter(function() {
                for (var n = 0; n < r; n++)
                    if (i.contains(this, t[n])) return !0
            })
        },
        closest: function(n, t) {
            var r, f = 0,
                o = this.length,
                u = [],
                e = typeof n != "string" && i(n);
            if (!ir.test(n))
                for (; f < o; f++)
                    for (r = this[f]; r && r !== t; r = r.parentNode)
                        if (r.nodeType < 11 && (e ? e.index(r) > -1 : r.nodeType === 1 && i.find.matchesSelector(r, n))) {
                            u.push(r);
                            break
                        }
            return this.pushStack(u.length > 1 ? i.uniqueSort(u) : u)
        },
        index: function(n) {
            return n ? typeof n == "string" ? ot.call(i(n), this[0]) : ot.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(n, t) {
            return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t))))
        },
        addBack: function(n) {
            return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
        }
    });
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function(n) {
            return d(n, "parentNode")
        },
        parentsUntil: function(n, t, i) {
            return d(n, "parentNode", i)
        },
        next: function(n) {
            return hr(n, "nextSibling")
        },
        prev: function(n) {
            return hr(n, "previousSibling")
        },
        nextAll: function(n) {
            return d(n, "nextSibling")
        },
        prevAll: function(n) {
            return d(n, "previousSibling")
        },
        nextUntil: function(n, t, i) {
            return d(n, "nextSibling", i)
        },
        prevUntil: function(n, t, i) {
            return d(n, "previousSibling", i)
        },
        siblings: function(n) {
            return tr((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return tr(n.firstChild)
        },
        contents: function(n) {
            return n.contentDocument || i.merge([], n.childNodes)
        }
    }, function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return n.slice(-5) !== "Until" && (u = r), u && typeof u == "string" && (f = i.filter(u, f)), this.length > 1 && (sr[n] || i.uniqueSort(f), or.test(n) && f.reverse()), this.pushStack(f)
        }
    });
    h = /[^\x20\t\r\n\f]+/g;
    i.Callbacks = function(n) {
        n = typeof n == "string" ? gf(n) : i.extend({}, n);
        var f, r, h, e, t = [],
            o = [],
            u = -1,
            c = function() {
                for (e = n.once, h = f = !0; o.length; u = -1)
                    for (r = o.shift(); ++u < t.length;) t[u].apply(r[0], r[1]) === !1 && n.stopOnFalse && (u = t.length, r = !1);
                n.memory || (r = !1);
                f = !1;
                e && (t = r ? [] : "")
            },
            s = {
                add: function() {
                    return t && (r && !f && (u = t.length - 1, o.push(r)), function e(r) {
                        i.each(r, function(r, u) {
                            i.isFunction(u) ? n.unique && s.has(u) || t.push(u) : u && u.length && i.type(u) !== "string" && e(u)
                        })
                    }(arguments), r && !f && c()), this
                },
                remove: function() {
                    return i.each(arguments, function(n, r) {
                        for (var f;
                            (f = i.inArray(r, t, f)) > -1;) t.splice(f, 1), f <= u && u--
                    }), this
                },
                has: function(n) {
                    return n ? i.inArray(n, t) > -1 : t.length > 0
                },
                empty: function() {
                    return t && (t = []), this
                },
                disable: function() {
                    return e = o = [], t = r = "", this
                },
                disabled: function() {
                    return !t
                },
                lock: function() {
                    return e = o = [], r || f || (t = r = ""), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(n, t) {
                    return e || (t = t || [], t = [n, t.slice ? t.slice() : t], o.push(t), f || c()), this
                },
                fire: function() {
                    return s.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!h
                }
            };
        return s
    };
    i.extend({
        Deferred: function(t) {
            var u = [
                    ["notify", "progress", i.Callbacks("memory"), i.Callbacks("memory"), 2],
                    ["resolve", "done", i.Callbacks("once memory"), i.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", i.Callbacks("once memory"), i.Callbacks("once memory"), 1, "rejected"]
                ],
                e = "pending",
                f = {
                    state: function() {
                        return e
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    "catch": function(n) {
                        return f.then(null, n)
                    },
                    pipe: function() {
                        var n = arguments;
                        return i.Deferred(function(t) {
                            i.each(u, function(u, f) {
                                var e = i.isFunction(n[f[4]]) && n[f[4]];
                                r[f[1]](function() {
                                    var n = e && e.apply(this, arguments);
                                    n && i.isFunction(n.promise) ? n.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[f[0] + "With"](this, e ? [n] : arguments)
                                })
                            });
                            n = null
                        }).promise()
                    },
                    then: function(t, r, f) {
                        function o(t, r, u, f) {
                            return function() {
                                var s = this,
                                    h = arguments,
                                    l = function() {
                                        var n, c;
                                        if (!(t < e)) {
                                            if (n = u.apply(s, h), n === r.promise()) throw new TypeError("Thenable self-resolution");
                                            c = n && (typeof n == "object" || typeof n == "function") && n.then;
                                            i.isFunction(c) ? f ? c.call(n, o(e, r, g, f), o(e, r, pt, f)) : (e++, c.call(n, o(e, r, g, f), o(e, r, pt, f), o(e, r, g, r.notifyWith))) : (u !== g && (s = undefined, h = [n]), (f || r.resolveWith)(s, h))
                                        }
                                    },
                                    c = f ? l : function() {
                                        try {
                                            l()
                                        } catch (n) {
                                            i.Deferred.exceptionHook && i.Deferred.exceptionHook(n, c.stackTrace);
                                            t + 1 >= e && (u !== pt && (s = undefined, h = [n]), r.rejectWith(s, h))
                                        }
                                    };
                                t ? c() : (i.Deferred.getStackHook && (c.stackTrace = i.Deferred.getStackHook()), n.setTimeout(c))
                            }
                        }
                        var e = 0;
                        return i.Deferred(function(n) {
                            u[0][3].add(o(0, n, i.isFunction(f) ? f : g, n.notifyWith));
                            u[1][3].add(o(0, n, i.isFunction(t) ? t : g));
                            u[2][3].add(o(0, n, i.isFunction(r) ? r : pt))
                        }).promise()
                    },
                    promise: function(n) {
                        return n != null ? i.extend(n, f) : f
                    }
                },
                r = {};
            return i.each(u, function(n, t) {
                var i = t[2],
                    o = t[5];
                f[t[1]] = i.add;
                o && i.add(function() {
                    e = o
                }, u[3 - n][2].disable, u[0][2].lock);
                i.add(t[3].fire);
                r[t[0]] = function() {
                    return r[t[0] + "With"](this === r ? undefined : this, arguments), this
                };
                r[t[0] + "With"] = i.fireWith
            }), f.promise(r), t && t.call(r, r), r
        },
        when: function(n) {
            var f = arguments.length,
                t = f,
                e = Array(t),
                u = p.call(arguments),
                r = i.Deferred(),
                o = function(n) {
                    return function(t) {
                        e[n] = this;
                        u[n] = arguments.length > 1 ? p.call(arguments) : t;
                        --f || r.resolveWith(e, u)
                    }
                };
            if (f <= 1 && (cr(n, r.done(o(t)).resolve, r.reject), r.state() === "pending" || i.isFunction(u[t] && u[t].then))) return r.then();
            while (t--) cr(u[t], o(t), r.reject);
            return r.promise()
        }
    });
    lr = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    i.Deferred.exceptionHook = function(t, i) {
        n.console && n.console.warn && t && lr.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
    };
    i.readyException = function(t) {
        n.setTimeout(function() {
            throw t;
        })
    };
    wt = i.Deferred();
    i.fn.ready = function(n) {
        return wt.then(n).catch(function(n) {
            i.readyException(n)
        }), this
    };
    i.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(n) {
            n ? i.readyWait++ : i.ready(!0)
        },
        ready: function(n) {
            (n === !0 ? --i.readyWait : i.isReady) || (i.isReady = !0, n !== !0 && --i.readyWait > 0) || wt.resolveWith(u, [i])
        }
    });
    i.ready.then = wt.then;
    u.readyState !== "complete" && (u.readyState === "loading" || u.documentElement.doScroll) ? (u.addEventListener("DOMContentLoaded", bt), n.addEventListener("load", bt)) : n.setTimeout(i.ready);
    a = function(n, t, r, u, f, e, o) {
        var s = 0,
            c = n.length,
            h = r == null;
        if (i.type(r) === "object") {
            f = !0;
            for (s in r) a(n, t, s, r[s], !0, e, o)
        } else if (u !== undefined && (f = !0, i.isFunction(u) || (o = !0), h && (o ? (t.call(n, u), t = null) : (h = t, t = function(n, t, r) {
                return h.call(i(n), r)
            })), t))
            for (; s < c; s++) t(n[s], r, o ? u : u.call(n[s], s, t(n[s], r)));
        return f ? n : h ? t.call(n) : c ? t(n[0], r) : e
    };
    st = function(n) {
        return n.nodeType === 1 || n.nodeType === 9 || !+n.nodeType
    };
    ht.uid = 1;
    ht.prototype = {
        cache: function(n) {
            var t = n[this.expando];
            return t || (t = {}, st(n) && (n.nodeType ? n[this.expando] = t : Object.defineProperty(n, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(n, t, r) {
            var u, f = this.cache(n);
            if (typeof t == "string") f[i.camelCase(t)] = r;
            else
                for (u in t) f[i.camelCase(u)] = t[u];
            return f
        },
        get: function(n, t) {
            return t === undefined ? this.cache(n) : n[this.expando] && n[this.expando][i.camelCase(t)]
        },
        access: function(n, t, i) {
            return t === undefined || t && typeof t == "string" && i === undefined ? this.get(n, t) : (this.set(n, t, i), i !== undefined ? i : t)
        },
        remove: function(n, t) {
            var u, r = n[this.expando];
            if (r !== undefined) {
                if (t !== undefined)
                    for (i.isArray(t) ? t = t.map(i.camelCase) : (t = i.camelCase(t), t = t in r ? [t] : t.match(h) || []), u = t.length; u--;) delete r[t[u]];
                (t === undefined || i.isEmptyObject(r)) && (n.nodeType ? n[this.expando] = undefined : delete n[this.expando])
            }
        },
        hasData: function(n) {
            var t = n[this.expando];
            return t !== undefined && !i.isEmptyObject(t)
        }
    };
    var r = new ht,
        e = new ht,
        ne = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        te = /[A-Z]/g;
    i.extend({
        hasData: function(n) {
            return e.hasData(n) || r.hasData(n)
        },
        data: function(n, t, i) {
            return e.access(n, t, i)
        },
        removeData: function(n, t) {
            e.remove(n, t)
        },
        _data: function(n, t, i) {
            return r.access(n, t, i)
        },
        _removeData: function(n, t) {
            r.remove(n, t)
        }
    });
    i.fn.extend({
        data: function(n, t) {
            var o, f, s, u = this[0],
                h = u && u.attributes;
            if (n === undefined) {
                if (this.length && (s = e.get(u), u.nodeType === 1 && !r.get(u, "hasDataAttrs"))) {
                    for (o = h.length; o--;) h[o] && (f = h[o].name, f.indexOf("data-") === 0 && (f = i.camelCase(f.slice(5)), ar(u, f, s[f])));
                    r.set(u, "hasDataAttrs", !0)
                }
                return s
            }
            return typeof n == "object" ? this.each(function() {
                e.set(this, n)
            }) : a(this, function(t) {
                var i;
                if (u && t === undefined) return (i = e.get(u, n), i !== undefined) ? i : (i = ar(u, n), i !== undefined) ? i : void 0;
                this.each(function() {
                    e.set(this, n, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(n) {
            return this.each(function() {
                e.remove(this, n)
            })
        }
    });
    i.extend({
        queue: function(n, t, u) {
            var f;
            if (n) return t = (t || "fx") + "queue", f = r.get(n, t), u && (!f || i.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)), f || []
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t),
                e = r.length,
                u = r.shift(),
                f = i._queueHooks(n, t),
                o = function() {
                    i.dequeue(n, t)
                };
            u === "inprogress" && (u = r.shift(), e--);
            u && (t === "fx" && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function(n, t) {
            var u = t + "queueHooks";
            return r.get(n, u) || r.access(n, u, {
                empty: i.Callbacks("once memory").add(function() {
                    r.remove(n, [t + "queue", u])
                })
            })
        }
    });
    i.fn.extend({
        queue: function(n, t) {
            var r = 2;
            return (typeof n != "string" && (t = n, n = "fx", r--), arguments.length < r) ? i.queue(this[0], n) : t === undefined ? this : this.each(function() {
                var r = i.queue(this, n, t);
                i._queueHooks(this, n);
                n === "fx" && r[0] !== "inprogress" && i.dequeue(this, n)
            })
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            })
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, t) {
            var u, e = 1,
                o = i.Deferred(),
                f = this,
                s = this.length,
                h = function() {
                    --e || o.resolveWith(f, [f])
                };
            for (typeof n != "string" && (t = n, n = undefined), n = n || "fx"; s--;) u = r.get(f[s], n + "queueHooks"), u && u.empty && (e++, u.empty.add(h));
            return h(), o.promise(t)
        }
    });
    var vr = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ct = new RegExp("^(?:([+-])=|)(" + vr + ")([a-z%]*)$", "i"),
        w = ["Top", "Right", "Bottom", "Left"],
        kt = function(n, t) {
            return n = t || n, n.style.display === "none" || n.style.display === "" && i.contains(n.ownerDocument, n) && i.css(n, "display") === "none"
        },
        yr = function(n, t, i, r) {
            var f, u, e = {};
            for (u in t) e[u] = n.style[u], n.style[u] = t[u];
            f = i.apply(n, r || []);
            for (u in t) n.style[u] = e[u];
            return f
        };
    ei = {};
    i.fn.extend({
        show: function() {
            return nt(this, !0)
        },
        hide: function() {
            return nt(this)
        },
        toggle: function(n) {
            return typeof n == "boolean" ? n ? this.show() : this.hide() : this.each(function() {
                kt(this) ? i(this).show() : i(this).hide()
            })
        }
    });
    var wr = /^(?:checkbox|radio)$/i,
        br = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        kr = /^$|\/(?:java|ecma)script/i,
        c = {
            option: [1, "<select multiple='multiple'>", "<\/select>"],
            thead: [1, "<table>", "<\/table>"],
            col: [2, "<table><colgroup>", "<\/colgroup><\/table>"],
            tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
            td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
            _default: [0, "", ""]
        };
    c.optgroup = c.option;
    c.tbody = c.tfoot = c.colgroup = c.caption = c.thead;
    c.th = c.td;
    dr = /<|&#?\w+;/,
        function() {
            var i = u.createDocumentFragment(),
                n = i.appendChild(u.createElement("div")),
                t = u.createElement("input");
            t.setAttribute("type", "radio");
            t.setAttribute("checked", "checked");
            t.setAttribute("name", "t");
            n.appendChild(t);
            f.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked;
            n.innerHTML = "<textarea>x<\/textarea>";
            f.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue
        }();
    var dt = u.documentElement,
        ue = /^key/,
        fe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        nu = /^([^.]*)(?:\.(.+)|)/;
    i.event = {
        global: {},
        add: function(n, t, u, f, e) {
            var v, y, w, p, b, c, s, l, o, k, d, a = r.get(n);
            if (a)
                for (u.handler && (v = u, u = v.handler, e = v.selector), e && i.find.matchesSelector(dt, e), u.guid || (u.guid = i.guid++), (p = a.events) || (p = a.events = {}), (y = a.handle) || (y = a.handle = function(t) {
                        return typeof i != "undefined" && i.event.triggered !== t.type ? i.event.dispatch.apply(n, arguments) : undefined
                    }), t = (t || "").match(h) || [""], b = t.length; b--;)(w = nu.exec(t[b]) || [], o = d = w[1], k = (w[2] || "").split(".").sort(), o) && (s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, c = i.extend({
                    type: o,
                    origType: d,
                    data: f,
                    handler: u,
                    guid: u.guid,
                    selector: e,
                    needsContext: e && i.expr.match.needsContext.test(e),
                    namespace: k.join(".")
                }, v), (l = p[o]) || (l = p[o] = [], l.delegateCount = 0, s.setup && s.setup.call(n, f, k, y) !== !1 || n.addEventListener && n.addEventListener(o, y)), s.add && (s.add.call(n, c), c.handler.guid || (c.handler.guid = u.guid)), e ? l.splice(l.delegateCount++, 0, c) : l.push(c), i.event.global[o] = !0)
        },
        remove: function(n, t, u, f, e) {
            var y, k, c, v, p, s, l, a, o, b, d, w = r.hasData(n) && r.get(n);
            if (w && (v = w.events)) {
                for (t = (t || "").match(h) || [""], p = t.length; p--;) {
                    if (c = nu.exec(t[p]) || [], o = d = c[1], b = (c[2] || "").split(".").sort(), !o) {
                        for (o in v) i.event.remove(n, o + t[p], u, f, !0);
                        continue
                    }
                    for (l = i.event.special[o] || {}, o = (f ? l.delegateType : l.bindType) || o, a = v[o] || [], c = c[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = y = a.length; y--;) s = a[y], (e || d === s.origType) && (!u || u.guid === s.guid) && (!c || c.test(s.namespace)) && (!f || f === s.selector || f === "**" && s.selector) && (a.splice(y, 1), s.selector && a.delegateCount--, l.remove && l.remove.call(n, s));
                    k && !a.length && (l.teardown && l.teardown.call(n, b, w.handle) !== !1 || i.removeEvent(n, o, w.handle), delete v[o])
                }
                i.isEmptyObject(v) && r.remove(n, "handle events")
            }
        },
        dispatch: function(n) {
            var t = i.event.fix(n),
                u, c, s, e, f, l, h = new Array(arguments.length),
                a = (r.get(this, "events") || {})[t.type] || [],
                o = i.event.special[t.type] || {};
            for (h[0] = t, u = 1; u < arguments.length; u++) h[u] = arguments[u];
            if (t.delegateTarget = this, !o.preDispatch || o.preDispatch.call(this, t) !== !1) {
                for (l = i.event.handlers.call(this, t, a), u = 0;
                    (e = l[u++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = e.elem, c = 0;
                        (f = e.handlers[c++]) && !t.isImmediatePropagationStopped();)(!t.rnamespace || t.rnamespace.test(f.namespace)) && (t.handleObj = f, t.data = f.data, s = ((i.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), s !== undefined && (t.result = s) === !1 && (t.preventDefault(), t.stopPropagation()));
                return o.postDispatch && o.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(n, t) {
            var f, e, u, o, s, c = [],
                h = t.delegateCount,
                r = n.target;
            if (h && r.nodeType && !(n.type === "click" && n.button >= 1))
                for (; r !== this; r = r.parentNode || this)
                    if (r.nodeType === 1 && !(n.type === "click" && r.disabled === !0)) {
                        for (o = [], s = {}, f = 0; f < h; f++) e = t[f], u = e.selector + " ", s[u] === undefined && (s[u] = e.needsContext ? i(u, this).index(r) > -1 : i.find(u, this, null, [r]).length), s[u] && o.push(e);
                        o.length && c.push({
                            elem: r,
                            handlers: o
                        })
                    }
            return r = this, h < t.length && c.push({
                elem: r,
                handlers: t.slice(h)
            }), c
        },
        addProp: function(n, t) {
            Object.defineProperty(i.Event.prototype, n, {
                enumerable: !0,
                configurable: !0,
                get: i.isFunction(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[n]
                },
                set: function(t) {
                    Object.defineProperty(this, n, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(n) {
            return n[i.expando] ? n : new i.Event(n)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== tu() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === tu() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (this.type === "checkbox" && this.click && i.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(n) {
                    return i.nodeName(n.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(n) {
                    n.result !== undefined && n.originalEvent && (n.originalEvent.returnValue = n.result)
                }
            }
        }
    };
    i.removeEvent = function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i)
    };
    i.Event = function(n, t) {
        if (!(this instanceof i.Event)) return new i.Event(n, t);
        n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || n.defaultPrevented === undefined && n.returnValue === !1 ? gt : tt, this.target = n.target && n.target.nodeType === 3 ? n.target.parentNode : n.target, this.currentTarget = n.currentTarget, this.relatedTarget = n.relatedTarget) : this.type = n;
        t && i.extend(this, t);
        this.timeStamp = n && n.timeStamp || i.now();
        this[i.expando] = !0
    };
    i.Event.prototype = {
        constructor: i.Event,
        isDefaultPrevented: tt,
        isPropagationStopped: tt,
        isImmediatePropagationStopped: tt,
        isSimulated: !1,
        preventDefault: function() {
            var n = this.originalEvent;
            this.isDefaultPrevented = gt;
            n && !this.isSimulated && n.preventDefault()
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            this.isPropagationStopped = gt;
            n && !this.isSimulated && n.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var n = this.originalEvent;
            this.isImmediatePropagationStopped = gt;
            n && !this.isSimulated && n.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    i.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(n) {
            var t = n.button;
            return n.which == null && ue.test(n.type) ? n.charCode != null ? n.charCode : n.keyCode : !n.which && t !== undefined && fe.test(n.type) ? t & 1 ? 1 : t & 2 ? 3 : t & 4 ? 2 : 0 : n.which
        }
    }, i.event.addProp);
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, f = this,
                    r = n.relatedTarget,
                    e = n.handleObj;
                return r && (r === f || i.contains(f, r)) || (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u
            }
        }
    });
    i.fn.extend({
        on: function(n, t, i, r) {
            return si(this, n, t, i, r)
        },
        one: function(n, t, i, r) {
            return si(this, n, t, i, r, 1)
        },
        off: function(n, t, r) {
            var u, f;
            if (n && n.preventDefault && n.handleObj) return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this;
            if (typeof n == "object") {
                for (f in n) this.off(f, t, n[f]);
                return this
            }
            return (t === !1 || typeof t == "function") && (r = t, t = undefined), r === !1 && (r = tt), this.each(function() {
                i.event.remove(this, n, r, t)
            })
        }
    });
    var ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        oe = /<script|<style|<link/i,
        se = /checked\s*(?:[^=]|=\s*.checked.)/i,
        he = /^true\/(.*)/,
        ce = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    i.extend({
        htmlPrefilter: function(n) {
            return n.replace(ee, "<$1><\/$2>")
        },
        clone: function(n, t, r) {
            var u, c, s, e, h = n.cloneNode(!0),
                l = i.contains(n.ownerDocument, n);
            if (!f.noCloneChecked && (n.nodeType === 1 || n.nodeType === 11) && !i.isXMLDoc(n))
                for (e = o(h), s = o(n), u = 0, c = s.length; u < c; u++) ve(s[u], e[u]);
            if (t)
                if (r)
                    for (s = s || o(n), e = e || o(h), u = 0, c = s.length; u < c; u++) ru(s[u], e[u]);
                else ru(n, h);
            return e = o(h, "script"), e.length > 0 && oi(e, !l && o(n, "script")), h
        },
        cleanData: function(n) {
            for (var u, t, f, s = i.event.special, o = 0;
                (t = n[o]) !== undefined; o++)
                if (st(t)) {
                    if (u = t[r.expando]) {
                        if (u.events)
                            for (f in u.events) s[f] ? i.event.remove(t, f) : i.removeEvent(t, f, u.handle);
                        t[r.expando] = undefined
                    }
                    t[e.expando] && (t[e.expando] = undefined)
                }
        }
    });
    i.fn.extend({
        detach: function(n) {
            return uu(this, n, !0)
        },
        remove: function(n) {
            return uu(this, n)
        },
        text: function(n) {
            return a(this, function(n) {
                return n === undefined ? i.text(this) : this.empty().each(function() {
                    (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = n)
                })
            }, null, n, arguments.length)
        },
        append: function() {
            return it(this, arguments, function(n) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = iu(this, n);
                    t.appendChild(n)
                }
            })
        },
        prepend: function() {
            return it(this, arguments, function(n) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = iu(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function() {
            return it(this, arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this)
            })
        },
        after: function() {
            return it(this, arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
            })
        },
        empty: function() {
            for (var n, t = 0;
                (n = this[t]) != null; t++) n.nodeType === 1 && (i.cleanData(o(n, !1)), n.textContent = "");
            return this
        },
        clone: function(n, t) {
            return n = n == null ? !1 : n, t = t == null ? n : t, this.map(function() {
                return i.clone(this, n, t)
            })
        },
        html: function(n) {
            return a(this, function(n) {
                var t = this[0] || {},
                    r = 0,
                    u = this.length;
                if (n === undefined && t.nodeType === 1) return t.innerHTML;
                if (typeof n == "string" && !oe.test(n) && !c[(br.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = i.htmlPrefilter(n);
                    try {
                        for (; r < u; r++) t = this[r] || {}, t.nodeType === 1 && (i.cleanData(o(t, !1)), t.innerHTML = n);
                        t = 0
                    } catch (f) {}
                }
                t && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return it(this, arguments, function(t) {
                var r = this.parentNode;
                i.inArray(this, n) < 0 && (i.cleanData(o(this)), r && r.replaceChild(t, this))
            }, n)
        }
    });
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, t) {
        i.fn[n] = function(n) {
            for (var u, f = [], e = i(n), o = e.length - 1, r = 0; r <= o; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), ri.apply(f, u.get());
            return this.pushStack(f)
        }
    });
    var fu = /^margin/,
        hi = new RegExp("^(" + vr + ")(?!px)[a-z%]+$", "i"),
        ni = function(t) {
            var i = t.ownerDocument.defaultView;
            return i && i.opener || (i = n), i.getComputedStyle(t)
        };
    (function() {
        function r() {
            if (t) {
                t.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
                t.innerHTML = "";
                dt.appendChild(e);
                var i = n.getComputedStyle(t);
                o = i.top !== "1%";
                c = i.marginLeft === "2px";
                s = i.width === "4px";
                t.style.marginRight = "50%";
                h = i.marginRight === "4px";
                dt.removeChild(e);
                t = null
            }
        }
        var o, s, h, c, e = u.createElement("div"),
            t = u.createElement("div");
        t.style && (t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = t.style.backgroundClip === "content-box", e.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", e.appendChild(t), i.extend(f, {
            pixelPosition: function() {
                return r(), o
            },
            boxSizingReliable: function() {
                return r(), s
            },
            pixelMarginRight: function() {
                return r(), h
            },
            reliableMarginLeft: function() {
                return r(), c
            }
        }))
    })();
    var ye = /^(none|table(?!-c[ea]).+)/,
        pe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ou = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        su = ["Webkit", "Moz", "ms"],
        hu = u.createElement("div").style;
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = lt(n, "opacity");
                        return i === "" ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(n, t, r, u) {
            if (n && n.nodeType !== 3 && n.nodeType !== 8 && n.style) {
                var e, h, o, s = i.camelCase(t),
                    c = n.style;
                if (t = i.cssProps[s] || (i.cssProps[s] = cu(s) || s), o = i.cssHooks[t] || i.cssHooks[s], r !== undefined) {
                    if (h = typeof r, h === "string" && (e = ct.exec(r)) && e[1] && (r = pr(n, t, e), h = "number"), r == null || r !== r) return;
                    h === "number" && (r += e && e[3] || (i.cssNumber[s] ? "" : "px"));
                    f.clearCloneStyle || r !== "" || t.indexOf("background") !== 0 || (c[t] = "inherit");
                    o && "set" in o && (r = o.set(n, r, u)) === undefined || (c[t] = r)
                } else return o && "get" in o && (e = o.get(n, !1, u)) !== undefined ? e : c[t]
            }
        },
        css: function(n, t, r, u) {
            var f, s, o, e = i.camelCase(t);
            return (t = i.cssProps[e] || (i.cssProps[e] = cu(e) || e), o = i.cssHooks[t] || i.cssHooks[e], o && "get" in o && (f = o.get(n, !0, r)), f === undefined && (f = lt(n, t, u)), f === "normal" && t in ou && (f = ou[t]), r === "" || r) ? (s = parseFloat(f), r === !0 || isFinite(s) ? s || 0 : f) : f
        }
    });
    i.each(["height", "width"], function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) {
                if (r) return ye.test(i.css(n, "display")) && (!n.getClientRects().length || !n.getBoundingClientRect().width) ? yr(n, pe, function() {
                    return vu(n, t, u)
                }) : vu(n, t, u)
            },
            set: function(n, r, u) {
                var f, e = u && ni(n),
                    o = u && au(n, t, u, i.css(n, "boxSizing", !1, e) === "border-box", e);
                return o && (f = ct.exec(r)) && (f[3] || "px") !== "px" && (n.style[t] = r, r = i.css(n, t)), lu(n, r, o)
            }
        }
    });
    i.cssHooks.marginLeft = eu(f.reliableMarginLeft, function(n, t) {
        if (t) return (parseFloat(lt(n, "marginLeft")) || n.getBoundingClientRect().left - yr(n, {
            marginLeft: 0
        }, function() {
            return n.getBoundingClientRect().left
        })) + "px"
    });
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var r = 0, f = {}, u = typeof i == "string" ? i.split(" ") : [i]; r < 4; r++) f[n + w[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        fu.test(n) || (i.cssHooks[n + t].set = lu)
    });
    i.fn.extend({
        css: function(n, t) {
            return a(this, function(n, t, r) {
                var f, e, o = {},
                    u = 0;
                if (i.isArray(t)) {
                    for (f = ni(n), e = t.length; u < e; u++) o[t[u]] = i.css(n, t[u], !1, f);
                    return o
                }
                return r !== undefined ? i.style(n, t, r) : i.css(n, t)
            }, n, t, arguments.length > 1)
        }
    });
    i.Tween = s;
    s.prototype = {
        constructor: s,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || i.easing._default;
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() {
            var n = s.propHooks[this.prop];
            return n && n.get ? n.get(this) : s.propHooks._default.get(this)
        },
        run: function(n) {
            var t, r = s.propHooks[this.prop];
            return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : s.propHooks._default.set(this), this
        }
    };
    s.prototype.init.prototype = s.prototype;
    s.propHooks = {
        _default: {
            get: function(n) {
                var t;
                return n.elem.nodeType !== 1 || n.elem[n.prop] != null && n.elem.style[n.prop] == null ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, ""), !t || t === "auto" ? 0 : t)
            },
            set: function(n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.nodeType === 1 && (n.elem.style[i.cssProps[n.prop]] != null || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
            }
        }
    };
    s.propHooks.scrollTop = s.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    };
    i.easing = {
        linear: function(n) {
            return n
        },
        swing: function(n) {
            return .5 - Math.cos(n * Math.PI) / 2
        },
        _default: "swing"
    };
    i.fx = s.prototype.init;
    i.fx.step = {};
    yu = /^(?:toggle|show|hide)$/;
    pu = /queueHooks$/;
    i.Animation = i.extend(l, {
        tweeners: {
            "*": [function(n, t) {
                var i = this.createTween(n, t);
                return pr(i.elem, n, ct.exec(t), i), i
            }]
        },
        tweener: function(n, t) {
            i.isFunction(n) ? (t = n, n = ["*"]) : n = n.match(h);
            for (var r, u = 0, f = n.length; u < f; u++) r = n[u], l.tweeners[r] = l.tweeners[r] || [], l.tweeners[r].unshift(t)
        },
        prefilters: [we],
        prefilter: function(n, t) {
            t ? l.prefilters.unshift(n) : l.prefilters.push(n)
        }
    });
    i.speed = function(n, t, r) {
        var f = n && typeof n == "object" ? i.extend({}, n) : {
            complete: r || !r && t || i.isFunction(n) && n,
            duration: n,
            easing: r && t || t && !i.isFunction(t) && t
        };
        return i.fx.off || u.hidden ? f.duration = 0 : typeof f.duration != "number" && (f.duration = f.duration in i.fx.speeds ? i.fx.speeds[f.duration] : i.fx.speeds._default), (f.queue == null || f.queue === !0) && (f.queue = "fx"), f.old = f.complete, f.complete = function() {
            i.isFunction(f.old) && f.old.call(this);
            f.queue && i.dequeue(this, f.queue)
        }, f
    };
    i.fn.extend({
        fadeTo: function(n, t, i, r) {
            return this.filter(kt).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function(n, t, u, f) {
            var s = i.isEmptyObject(n),
                o = i.speed(t, u, f),
                e = function() {
                    var t = l(this, i.extend({}, n), o);
                    (s || r.get(this, "finish")) && t.stop(!0)
                };
            return e.finish = e, s || o.queue === !1 ? this.each(e) : this.queue(o.queue, e)
        },
        stop: function(n, t, u) {
            var f = function(n) {
                var t = n.stop;
                delete n.stop;
                t(u)
            };
            return typeof n != "string" && (u = t, t = n, n = undefined), t && n !== !1 && this.queue(n || "fx", []), this.each(function() {
                var s = !0,
                    t = n != null && n + "queueHooks",
                    o = i.timers,
                    e = r.get(this);
                if (t) e[t] && e[t].stop && f(e[t]);
                else
                    for (t in e) e[t] && e[t].stop && pu.test(t) && f(e[t]);
                for (t = o.length; t--;) o[t].elem === this && (n == null || o[t].queue === n) && (o[t].anim.stop(u), s = !1, o.splice(t, 1));
                (s || !u) && i.dequeue(this, n)
            })
        },
        finish: function(n) {
            return n !== !1 && (n = n || "fx"), this.each(function() {
                var t, e = r.get(this),
                    u = e[n + "queue"],
                    o = e[n + "queueHooks"],
                    f = i.timers,
                    s = u ? u.length : 0;
                for (e.finish = !0, i.queue(this, n, []), o && o.stop && o.stop.call(this, !0), t = f.length; t--;) f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0), f.splice(t, 1));
                for (t = 0; t < s; t++) u[t] && u[t].finish && u[t].finish.call(this);
                delete e.finish
            })
        }
    });
    i.each(["toggle", "show", "hide"], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) {
            return n == null || typeof n == "boolean" ? r.apply(this, arguments) : this.animate(ti(t, !0), n, i, u)
        }
    });
    i.each({
        slideDown: ti("show"),
        slideUp: ti("hide"),
        slideToggle: ti("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.timers = [];
    i.fx.tick = function() {
        var r, n = 0,
            t = i.timers;
        for (rt = i.now(); n < t.length; n++) r = t[n], r() || t[n] !== r || t.splice(n--, 1);
        t.length || i.fx.stop();
        rt = undefined
    };
    i.fx.timer = function(n) {
        i.timers.push(n);
        n() ? i.fx.start() : i.timers.pop()
    };
    i.fx.interval = 13;
    i.fx.start = function() {
        ut || (ut = n.requestAnimationFrame ? n.requestAnimationFrame(wu) : n.setInterval(i.fx.tick, i.fx.interval))
    };
    i.fx.stop = function() {
        n.cancelAnimationFrame ? n.cancelAnimationFrame(ut) : n.clearInterval(ut);
        ut = null
    };
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fn.delay = function(t, r) {
            return t = i.fx ? i.fx.speeds[t] || t : t, r = r || "fx", this.queue(r, function(i, r) {
                var u = n.setTimeout(i, t);
                r.stop = function() {
                    n.clearTimeout(u)
                }
            })
        },
        function() {
            var n = u.createElement("input"),
                t = u.createElement("select"),
                i = t.appendChild(u.createElement("option"));
            n.type = "checkbox";
            f.checkOn = n.value !== "";
            f.optSelected = i.selected;
            n = u.createElement("input");
            n.value = "t";
            n.type = "radio";
            f.radioValue = n.value === "t"
        }();
    ft = i.expr.attrHandle;
    i.fn.extend({
        attr: function(n, t) {
            return a(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        }
    });
    i.extend({
        attr: function(n, t, r) {
            var u, f, e = n.nodeType;
            if (e !== 3 && e !== 8 && e !== 2) {
                if (typeof n.getAttribute == "undefined") return i.prop(n, t, r);
                if (e === 1 && i.isXMLDoc(n) || (f = i.attrHooks[t.toLowerCase()] || (i.expr.match.bool.test(t) ? du : undefined)), r !== undefined) {
                    if (r === null) {
                        i.removeAttr(n, t);
                        return
                    }
                    return f && "set" in f && (u = f.set(n, r, t)) !== undefined ? u : (n.setAttribute(t, r + ""), r)
                }
                return f && "get" in f && (u = f.get(n, t)) !== null ? u : (u = i.find.attr(n, t), u == null ? undefined : u)
            }
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (!f.radioValue && t === "radio" && i.nodeName(n, "input")) {
                        var r = n.value;
                        return n.setAttribute("type", t), r && (n.value = r), t
                    }
                }
            }
        },
        removeAttr: function(n, t) {
            var i, u = 0,
                r = t && t.match(h);
            if (r && n.nodeType === 1)
                while (i = r[u++]) n.removeAttribute(i)
        }
    });
    du = {
        set: function(n, t, r) {
            return t === !1 ? i.removeAttr(n, r) : n.setAttribute(r, r), r
        }
    };
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
        var r = ft[t] || i.find.attr;
        ft[t] = function(n, t, i) {
            var f, e, u = t.toLowerCase();
            return i || (e = ft[u], ft[u] = f, f = r(n, t, i) != null ? u : null, ft[u] = e), f
        }
    });
    gu = /^(?:input|select|textarea|button)$/i;
    nf = /^(?:a|area)$/i;
    i.fn.extend({
        prop: function(n, t) {
            return a(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function(n) {
            return this.each(function() {
                delete this[i.propFix[n] || n]
            })
        }
    });
    i.extend({
        prop: function(n, t, r) {
            var f, u, e = n.nodeType;
            if (e !== 3 && e !== 8 && e !== 2) return (e === 1 && i.isXMLDoc(n) || (t = i.propFix[t] || t, u = i.propHooks[t]), r !== undefined) ? u && "set" in u && (f = u.set(n, r, t)) !== undefined ? f : n[t] = r : u && "get" in u && (f = u.get(n, t)) !== null ? f : n[t]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    var t = i.find.attr(n, "tabindex");
                    return t ? parseInt(t, 10) : gu.test(n.nodeName) || nf.test(n.nodeName) && n.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    f.optSelected || (i.propHooks.selected = {
        get: function(n) {
            var t = n.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(n) {
            var t = n.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        i.propFix[this.toLowerCase()] = this
    });
    i.fn.extend({
        addClass: function(n) {
            var o, r, t, u, f, s, e, c = 0;
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).addClass(n.call(this, t, k(this)))
            });
            if (typeof n == "string" && n)
                for (o = n.match(h) || []; r = this[c++];)
                    if (u = k(r), t = r.nodeType === 1 && " " + b(u) + " ", t) {
                        for (s = 0; f = o[s++];) t.indexOf(" " + f + " ") < 0 && (t += f + " ");
                        e = b(t);
                        u !== e && r.setAttribute("class", e)
                    }
            return this
        },
        removeClass: function(n) {
            var o, r, t, u, f, s, e, c = 0;
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).removeClass(n.call(this, t, k(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if (typeof n == "string" && n)
                for (o = n.match(h) || []; r = this[c++];)
                    if (u = k(r), t = r.nodeType === 1 && " " + b(u) + " ", t) {
                        for (s = 0; f = o[s++];)
                            while (t.indexOf(" " + f + " ") > -1) t = t.replace(" " + f + " ", " ");
                        e = b(t);
                        u !== e && r.setAttribute("class", e)
                    }
            return this
        },
        toggleClass: function(n, t) {
            var u = typeof n;
            return typeof t == "boolean" && u === "string" ? t ? this.addClass(n) : this.removeClass(n) : i.isFunction(n) ? this.each(function(r) {
                i(this).toggleClass(n.call(this, r, k(this), t), t)
            }) : this.each(function() {
                var t, e, f, o;
                if (u === "string")
                    for (e = 0, f = i(this), o = n.match(h) || []; t = o[e++];) f.hasClass(t) ? f.removeClass(t) : f.addClass(t);
                else(n === undefined || u === "boolean") && (t = k(this), t && r.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || n === !1 ? "" : r.get(this, "__className__") || ""))
            })
        },
        hasClass: function(n) {
            for (var t, r = 0, i = " " + n + " "; t = this[r++];)
                if (t.nodeType === 1 && (" " + b(k(t)) + " ").indexOf(i) > -1) return !0;
            return !1
        }
    });
    tf = /\r/g;
    i.fn.extend({
        val: function(n) {
            var t, r, f, u = this[0];
            return arguments.length ? (f = i.isFunction(n), this.each(function(r) {
                var u;
                this.nodeType === 1 && (u = f ? n.call(this, r, i(this).val()) : n, u == null ? u = "" : typeof u == "number" ? u += "" : i.isArray(u) && (u = i.map(u, function(n) {
                    return n == null ? "" : n + ""
                })), t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], t && "set" in t && t.set(this, u, "value") !== undefined || (this.value = u))
            })) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()], t && "get" in t && (r = t.get(u, "value")) !== undefined) ? r : (r = u.value, typeof r == "string") ? r.replace(tf, "") : r == null ? "" : r : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = i.find.attr(n, "value");
                    return t != null ? t : b(i.text(n))
                }
            },
            select: {
                get: function(n) {
                    for (var e, t, o = n.options, u = n.selectedIndex, f = n.type === "select-one", s = f ? null : [], h = f ? u + 1 : o.length, r = u < 0 ? h : f ? u : 0; r < h; r++)
                        if (t = o[r], (t.selected || r === u) && !t.disabled && (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) {
                            if (e = i(t).val(), f) return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(n, t) {
                    for (var u, r, f = n.options, e = i.makeArray(t), o = f.length; o--;) r = f[o], (r.selected = i.inArray(i.valHooks.option.get(r), e) > -1) && (u = !0);
                    return u || (n.selectedIndex = -1), e
                }
            }
        }
    });
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {
            set: function(n, t) {
                if (i.isArray(t)) return n.checked = i.inArray(i(n).val(), t) > -1
            }
        };
        f.checkOn || (i.valHooks[this].get = function(n) {
            return n.getAttribute("value") === null ? "on" : n.value
        })
    });
    ci = /^(?:focusinfocus|focusoutblur)$/;
    i.extend(i.event, {
        trigger: function(t, f, e, o) {
            var w, s, c, b, a, v, l, p = [e || u],
                h = yt.call(t, "type") ? t.type : t,
                y = yt.call(t, "namespace") ? t.namespace.split(".") : [];
            if ((s = c = e = e || u, e.nodeType !== 3 && e.nodeType !== 8) && !ci.test(h + i.event.triggered) && (h.indexOf(".") > -1 && (y = h.split("."), h = y.shift(), y.sort()), a = h.indexOf(":") < 0 && "on" + h, t = t[i.expando] ? t : new i.Event(h, typeof t == "object" && t), t.isTrigger = o ? 2 : 3, t.namespace = y.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = e), f = f == null ? [t] : i.makeArray(f, [t]), l = i.event.special[h] || {}, o || !l.trigger || l.trigger.apply(e, f) !== !1)) {
                if (!o && !l.noBubble && !i.isWindow(e)) {
                    for (b = l.delegateType || h, ci.test(b + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s), c = s;
                    c === (e.ownerDocument || u) && p.push(c.defaultView || c.parentWindow || n)
                }
                for (w = 0;
                    (s = p[w++]) && !t.isPropagationStopped();) t.type = w > 1 ? b : l.bindType || h, v = (r.get(s, "events") || {})[t.type] && r.get(s, "handle"), v && v.apply(s, f), v = a && s[a], v && v.apply && st(s) && (t.result = v.apply(s, f), t.result === !1 && t.preventDefault());
                return t.type = h, o || t.isDefaultPrevented() || (!l._default || l._default.apply(p.pop(), f) === !1) && st(e) && a && i.isFunction(e[h]) && !i.isWindow(e) && (c = e[a], c && (e[a] = null), i.event.triggered = h, e[h](), i.event.triggered = undefined, c && (e[a] = c)), t.result
            }
        },
        simulate: function(n, t, r) {
            var u = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0
            });
            i.event.trigger(u, null, t)
        }
    });
    i.fn.extend({
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function(n, t) {
            var r = this[0];
            if (r) return i.event.trigger(n, t, r, !0)
        }
    });
    i.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(n, t) {
        i.fn[t] = function(n, i) {
            return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
        }
    });
    i.fn.extend({
        hover: function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        }
    });
    f.focusin = "onfocusin" in n;
    f.focusin || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        var u = function(n) {
            i.event.simulate(t, n.target, i.event.fix(n))
        };
        i.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    f = r.access(i, t);
                f || i.addEventListener(n, u, !0);
                r.access(i, t, (f || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    f = r.access(i, t) - 1;
                f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0), r.remove(i, t))
            }
        }
    });
    var at = n.location,
        rf = i.now(),
        li = /\?/;
    i.parseXML = function(t) {
        var r;
        if (!t || typeof t != "string") return null;
        try {
            r = (new n.DOMParser).parseFromString(t, "text/xml")
        } catch (u) {
            r = undefined
        }
        return (!r || r.getElementsByTagName("parsererror").length) && i.error("Invalid XML: " + t), r
    };
    var ke = /\[\]$/,
        uf = /\r?\n/g,
        de = /^(?:submit|button|image|reset|file)$/i,
        ge = /^(?:input|select|textarea|keygen)/i;
    i.param = function(n, t) {
        var r, u = [],
            f = function(n, t) {
                var r = i.isFunction(t) ? t() : t;
                u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(r == null ? "" : r)
            };
        if (i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() {
            f(this.name, this.value)
        });
        else
            for (r in n) ai(r, n[r], t, f);
        return u.join("&")
    };
    i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this
            }).filter(function() {
                var n = this.type;
                return this.name && !i(this).is(":disabled") && ge.test(this.nodeName) && !de.test(n) && (this.checked || !wr.test(n))
            }).map(function(n, t) {
                var r = i(this).val();
                return r == null ? null : i.isArray(r) ? i.map(r, function(n) {
                    return {
                        name: t.name,
                        value: n.replace(uf, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(uf, "\r\n")
                }
            }).get()
        }
    });
    var no = /%20/g,
        to = /#.*$/,
        io = /([?&])_=[^&]*/,
        ro = /^(.*?):[ \t]*([^\r\n]*)$/mg,
        uo = /^(?:GET|HEAD)$/,
        fo = /^\/\//,
        ff = {},
        vi = {},
        ef = "*/".concat("*"),
        yi = u.createElement("a");
    return yi.href = at.href, i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: at.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(at.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ef,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(n, t) {
            return t ? pi(pi(n, i.ajaxSettings), t) : pi(i.ajaxSettings, n)
        },
        ajaxPrefilter: of(ff),
        ajaxTransport: of(vi),
        ajax: function(t, r) {
            function b(t, r, u, h) {
                var y, rt, g, p, b, a = r;
                s || (s = !0, d && n.clearTimeout(d), l = undefined, k = h || "", e.readyState = t > 0 ? 4 : 0, y = t >= 200 && t < 300 || t === 304, u && (p = eo(f, e, u)), p = oo(f, p, e, y), y ? (f.ifModified && (b = e.getResponseHeader("Last-Modified"), b && (i.lastModified[o] = b), b = e.getResponseHeader("etag"), b && (i.etag[o] = b)), t === 204 || f.type === "HEAD" ? a = "nocontent" : t === 304 ? a = "notmodified" : (a = p.state, rt = p.data, g = p.error, y = !g)) : (g = a, (t || !a) && (a = "error", t < 0 && (t = 0))), e.status = t, e.statusText = (r || a) + "", y ? tt.resolveWith(c, [rt, a, e]) : tt.rejectWith(c, [e, a, g]), e.statusCode(w), w = undefined, v && nt.trigger(y ? "ajaxSuccess" : "ajaxError", [e, f, y ? rt : g]), it.fireWith(c, [e, a]), v && (nt.trigger("ajaxComplete", [e, f]), --i.active || i.event.trigger("ajaxStop")))
            }
            typeof t == "object" && (r = t, t = undefined);
            r = r || {};
            var l, o, k, y, d, a, s, v, g, p, f = i.ajaxSetup({}, r),
                c = f.context || f,
                nt = f.context && (c.nodeType || c.jquery) ? i(c) : i.event,
                tt = i.Deferred(),
                it = i.Callbacks("once memory"),
                w = f.statusCode || {},
                rt = {},
                ut = {},
                ft = "canceled",
                e = {
                    readyState: 0,
                    getResponseHeader: function(n) {
                        var t;
                        if (s) {
                            if (!y)
                                for (y = {}; t = ro.exec(k);) y[t[1].toLowerCase()] = t[2];
                            t = y[n.toLowerCase()]
                        }
                        return t == null ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return s ? k : null
                    },
                    setRequestHeader: function(n, t) {
                        return s == null && (n = ut[n.toLowerCase()] = ut[n.toLowerCase()] || n, rt[n] = t), this
                    },
                    overrideMimeType: function(n) {
                        return s == null && (f.mimeType = n), this
                    },
                    statusCode: function(n) {
                        var t;
                        if (n)
                            if (s) e.always(n[e.status]);
                            else
                                for (t in n) w[t] = [w[t], n[t]];
                        return this
                    },
                    abort: function(n) {
                        var t = n || ft;
                        return l && l.abort(t), b(0, t), this
                    }
                };
            if (tt.promise(e), f.url = ((t || f.url || at.href) + "").replace(fo, at.protocol + "//"), f.type = r.method || r.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(h) || [""], f.crossDomain == null) {
                a = u.createElement("a");
                try {
                    a.href = f.url;
                    a.href = a.href;
                    f.crossDomain = yi.protocol + "//" + yi.host != a.protocol + "//" + a.host
                } catch (et) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && typeof f.data != "string" && (f.data = i.param(f.data, f.traditional)), sf(ff, f, r, e), s) return e;
            v = i.event && f.global;
            v && i.active++ == 0 && i.event.trigger("ajaxStart");
            f.type = f.type.toUpperCase();
            f.hasContent = !uo.test(f.type);
            o = f.url.replace(to, "");
            f.hasContent ? f.data && f.processData && (f.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (f.data = f.data.replace(no, "+")) : (p = f.url.slice(o.length), f.data && (o += (li.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (o = o.replace(io, "$1"), p = (li.test(o) ? "&" : "?") + "_=" + rf++ + p), f.url = o + p);
            f.ifModified && (i.lastModified[o] && e.setRequestHeader("If-Modified-Since", i.lastModified[o]), i.etag[o] && e.setRequestHeader("If-None-Match", i.etag[o]));
            (f.data && f.hasContent && f.contentType !== !1 || r.contentType) && e.setRequestHeader("Content-Type", f.contentType);
            e.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + (f.dataTypes[0] !== "*" ? ", " + ef + "; q=0.01" : "") : f.accepts["*"]);
            for (g in f.headers) e.setRequestHeader(g, f.headers[g]);
            if (f.beforeSend && (f.beforeSend.call(c, e, f) === !1 || s)) return e.abort();
            if (ft = "abort", it.add(f.complete), e.done(f.success), e.fail(f.error), l = sf(vi, f, r, e), l) {
                if (e.readyState = 1, v && nt.trigger("ajaxSend", [e, f]), s) return e;
                f.async && f.timeout > 0 && (d = n.setTimeout(function() {
                    e.abort("timeout")
                }, f.timeout));
                try {
                    s = !1;
                    l.send(rt, b)
                } catch (et) {
                    if (s) throw et;
                    b(-1, et)
                }
            } else b(-1, "No Transport");
            return e
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        },
        getScript: function(n, t) {
            return i.get(n, undefined, t, "script")
        }
    }), i.each(["get", "post"], function(n, t) {
        i[t] = function(n, r, u, f) {
            return i.isFunction(r) && (f = f || u, u = r, r = undefined), i.ajax(i.extend({
                url: n,
                type: t,
                dataType: f,
                data: r,
                success: u
            }, i.isPlainObject(n) && n))
        }
    }), i._evalUrl = function(n) {
        return i.ajax({
            url: n,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, i.fn.extend({
        wrapAll: function(n) {
            var t;
            return this[0] && (i.isFunction(n) && (n = n.call(this[0])), t = i(n, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var n = this; n.firstElementChild;) n = n.firstElementChild;
                return n
            }).append(this)), this
        },
        wrapInner: function(n) {
            return i.isFunction(n) ? this.each(function(t) {
                i(this).wrapInner(n.call(this, t))
            }) : this.each(function() {
                var t = i(this),
                    r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(n) {
            var t = i.isFunction(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function(n) {
            return this.parent(n).not("body").each(function() {
                i(this).replaceWith(this.childNodes)
            }), this
        }
    }), i.expr.pseudos.hidden = function(n) {
        return !i.expr.pseudos.visible(n)
    }, i.expr.pseudos.visible = function(n) {
        return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length)
    }, i.ajaxSettings.xhr = function() {
        try {
            return new n.XMLHttpRequest
        } catch (t) {}
    }, hf = {
        0: 200,
        1223: 204
    }, et = i.ajaxSettings.xhr(), f.cors = !!et && "withCredentials" in et, f.ajax = et = !!et, i.ajaxTransport(function(t) {
        var i, r;
        if (f.cors || et && !t.crossDomain) return {
            send: function(u, f) {
                var o, e = t.xhr();
                if (e.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (o in t.xhrFields) e[o] = t.xhrFields[o];
                t.mimeType && e.overrideMimeType && e.overrideMimeType(t.mimeType);
                t.crossDomain || u["X-Requested-With"] || (u["X-Requested-With"] = "XMLHttpRequest");
                for (o in u) e.setRequestHeader(o, u[o]);
                i = function(n) {
                    return function() {
                        i && (i = r = e.onload = e.onerror = e.onabort = e.onreadystatechange = null, n === "abort" ? e.abort() : n === "error" ? typeof e.status != "number" ? f(0, "error") : f(e.status, e.statusText) : f(hf[e.status] || e.status, e.statusText, (e.responseType || "text") !== "text" || typeof e.responseText != "string" ? {
                            binary: e.response
                        } : {
                            text: e.responseText
                        }, e.getAllResponseHeaders()))
                    }
                };
                e.onload = i();
                r = e.onerror = i("error");
                e.onabort !== undefined ? e.onabort = r : e.onreadystatechange = function() {
                    e.readyState === 4 && n.setTimeout(function() {
                        i && r()
                    })
                };
                i = i("abort");
                try {
                    e.send(t.hasContent && t.data || null)
                } catch (s) {
                    if (i) throw s;
                }
            },
            abort: function() {
                i && i()
            }
        }
    }), i.ajaxPrefilter(function(n) {
        n.crossDomain && (n.contents.script = !1)
    }), i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n), n
            }
        }
    }), i.ajaxPrefilter("script", function(n) {
        n.cache === undefined && (n.cache = !1);
        n.crossDomain && (n.type = "GET")
    }), i.ajaxTransport("script", function(n) {
        if (n.crossDomain) {
            var r, t;
            return {
                send: function(f, e) {
                    r = i("<script>").prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", t = function(n) {
                        r.remove();
                        t = null;
                        n && e(n.type === "error" ? 404 : 200, n.type)
                    });
                    u.head.appendChild(r[0])
                },
                abort: function() {
                    t && t()
                }
            }
        }
    }), wi = [], ii = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var n = wi.pop() || i.expando + "_" + rf++;
            return this[n] = !0, n
        }
    }), i.ajaxPrefilter("json jsonp", function(t, r, u) {
        var f, e, o, s = t.jsonp !== !1 && (ii.test(t.url) ? "url" : typeof t.data == "string" && (t.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && ii.test(t.data) && "data");
        if (s || t.dataTypes[0] === "jsonp") return f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ii, "$1" + f) : t.jsonp !== !1 && (t.url += (li.test(t.url) ? "&" : "?") + t.jsonp + "=" + f), t.converters["script json"] = function() {
            return o || i.error(f + " was not called"), o[0]
        }, t.dataTypes[0] = "json", e = n[f], n[f] = function() {
            o = arguments
        }, u.always(function() {
            e === undefined ? i(n).removeProp(f) : n[f] = e;
            t[f] && (t.jsonpCallback = r.jsonpCallback, wi.push(f));
            o && i.isFunction(e) && e(o[0]);
            o = e = undefined
        }), "script"
    }), f.createHTMLDocument = function() {
        var n = u.implementation.createHTMLDocument("").body;
        return n.innerHTML = "<form><\/form><form><\/form>", n.childNodes.length === 2
    }(), i.parseHTML = function(n, t, r) {
        if (typeof n != "string") return [];
        typeof t == "boolean" && (r = t, t = !1);
        var s, e, o;
        return (t || (f.createHTMLDocument ? (t = u.implementation.createHTMLDocument(""), s = t.createElement("base"), s.href = u.location.href, t.head.appendChild(s)) : t = u), e = rr.exec(n), o = !r && [], e) ? [t.createElement(e[1])] : (e = gr([n], t, o), o && o.length && i(o).remove(), i.merge([], e.childNodes))
    }, i.fn.load = function(n, t, r) {
        var u, o, s, f = this,
            e = n.indexOf(" ");
        return e > -1 && (u = b(n.slice(e)), n = n.slice(0, e)), i.isFunction(t) ? (r = t, t = undefined) : t && typeof t == "object" && (o = "POST"), f.length > 0 && i.ajax({
            url: n,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(n) {
            s = arguments;
            f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n)
        }).always(r && function(n, t) {
            f.each(function() {
                r.apply(this, s || [n.responseText, t, n])
            })
        }), this
    }, i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    }), i.expr.pseudos.animated = function(n) {
        return i.grep(i.timers, function(t) {
            return n === t.elem
        }).length
    }, i.offset = {
        setOffset: function(n, t, r) {
            var e, o, s, h, u, c, v, l = i.css(n, "position"),
                a = i(n),
                f = {};
            l === "static" && (n.style.position = "relative");
            u = a.offset();
            s = i.css(n, "top");
            c = i.css(n, "left");
            v = (l === "absolute" || l === "fixed") && (s + c).indexOf("auto") > -1;
            v ? (e = a.position(), h = e.top, o = e.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
            i.isFunction(t) && (t = t.call(n, r, i.extend({}, u)));
            t.top != null && (f.top = t.top - u.top + h);
            t.left != null && (f.left = t.left - u.left + o);
            "using" in t ? t.using.call(n, f) : a.css(f)
        }
    }, i.fn.extend({
        offset: function(n) {
            if (arguments.length) return n === undefined ? this : this.each(function(t) {
                i.offset.setOffset(this, n, t)
            });
            var u, f, t, e, r = this[0];
            if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), t.width || t.height) ? (e = r.ownerDocument, f = cf(e), u = e.documentElement, {
                top: t.top + f.pageYOffset - u.clientTop,
                left: t.left + f.pageXOffset - u.clientLeft
            }) : t : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var t, r, u = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                return i.css(u, "position") === "fixed" ? r = u.getBoundingClientRect() : (t = this.offsetParent(), r = this.offset(), i.nodeName(t[0], "html") || (n = t.offset()), n = {
                    top: n.top + i.css(t[0], "borderTopWidth", !0),
                    left: n.left + i.css(t[0], "borderLeftWidth", !0)
                }), {
                    top: r.top - n.top - i.css(u, "marginTop", !0),
                    left: r.left - n.left - i.css(u, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent; n && i.css(n, "position") === "static";) n = n.offsetParent;
                return n || dt
            })
        }
    }), i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(n, t) {
        var r = "pageYOffset" === t;
        i.fn[n] = function(i) {
            return a(this, function(n, i, u) {
                var f = cf(n);
                if (u === undefined) return f ? f[t] : n[i];
                f ? f.scrollTo(r ? f.pageXOffset : u, r ? u : f.pageYOffset) : n[i] = u
            }, n, i, arguments.length)
        }
    }), i.each(["top", "left"], function(n, t) {
        i.cssHooks[t] = eu(f.pixelPosition, function(n, r) {
            if (r) return r = lt(n, t), hi.test(r) ? i(n).position()[t] + "px" : r
        })
    }), i.each({
        Height: "height",
        Width: "width"
    }, function(n, t) {
        i.each({
            padding: "inner" + n,
            content: t,
            "": "outer" + n
        }, function(r, u) {
            i.fn[u] = function(f, e) {
                var o = arguments.length && (r || typeof f != "boolean"),
                    s = r || (f === !0 || e === !0 ? "margin" : "border");
                return a(this, function(t, r, f) {
                    var e;
                    return i.isWindow(t) ? u.indexOf("outer") === 0 ? t["inner" + n] : t.document.documentElement["client" + n] : t.nodeType === 9 ? (e = t.documentElement, Math.max(t.body["scroll" + n], e["scroll" + n], t.body["offset" + n], e["offset" + n], e["client" + n])) : f === undefined ? i.css(t, r, s) : i.style(t, r, f, s)
                }, t, o ? f : undefined, o)
            }
        })
    }), i.fn.extend({
        bind: function(n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null, t)
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return arguments.length === 1 ? this.off(n, "**") : this.off(t, n || "**", i)
        }
    }), i.parseJSON = JSON.parse, typeof define == "function" && define.amd && define("jquery", [], function() {
        return i
    }), lf = n.jQuery, af = n.$, i.noConflict = function(t) {
        return n.$ === i && (n.$ = af), t && n.jQuery === i && (n.jQuery = lf), i
    }, t || (n.jQuery = n.$ = i), i
}),
function(n) {
    n.extend(n.fn, {
        validate: function(t) {
            if (!this.length) {
                t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.");
                return
            }
            var i = n.data(this[0], "validator");
            return i ? i : (this.attr("novalidate", "novalidate"), i = new n.validator(t, this[0]), n.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function(t) {
                i.settings.submitHandler && (i.submitButton = t.target);
                n(t.target).hasClass("cancel") && (i.cancelSubmit = !0);
                n(t.target).attr("formnovalidate") !== undefined && (i.cancelSubmit = !0)
            }), this.submit(function(t) {
                function r() {
                    var r;
                    return i.settings.submitHandler ? (i.submitButton && (r = n("<input type='hidden'/>").attr("name", i.submitButton.name).val(n(i.submitButton).val()).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, t), i.submitButton && r.remove(), !1) : !0
                }
                return (i.settings.debug && t.preventDefault(), i.cancelSubmit) ? (i.cancelSubmit = !1, r()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : r() : (i.focusInvalid(), !1)
            })), i)
        },
        valid: function() {
            if (n(this[0]).is("form")) return this.validate().form();
            var t = !0,
                i = n(this[0].form).validate();
            return this.each(function() {
                t = t && i.element(this)
            }), t
        },
        removeAttrs: function(t) {
            var i = {},
                r = this;
            return n.each(t.split(/\s/), function(n, t) {
                i[t] = r.attr(t);
                r.removeAttr(t)
            }), i
        },
        rules: function(t, i) {
            var r = this[0],
                o, u, h;
            if (t) {
                var e = n.data(r.form, "validator").settings,
                    s = e.rules,
                    f = n.validator.staticRules(r);
                switch (t) {
                    case "add":
                        n.extend(f, n.validator.normalizeRule(i));
                        delete f.messages;
                        s[r.name] = f;
                        i.messages && (e.messages[r.name] = n.extend(e.messages[r.name], i.messages));
                        break;
                    case "remove":
                        return i ? (o = {}, n.each(i.split(/\s/), function(n, t) {
                            o[t] = f[t];
                            delete f[t]
                        }), o) : (delete s[r.name], f)
                }
            }
            return u = n.validator.normalizeRules(n.extend({}, n.validator.classRules(r), n.validator.attributeRules(r), n.validator.dataRules(r), n.validator.staticRules(r)), r), u.required && (h = u.required, delete u.required, u = n.extend({
                required: h
            }, u)), u
        }
    });
    n.extend(n.expr[":"], {
        blank: function(t) {
            return !n.trim("" + n(t).val())
        },
        filled: function(t) {
            return !!n.trim("" + n(t).val())
        },
        unchecked: function(t) {
            return !n(t).prop("checked")
        }
    });
    n.validator = function(t, i) {
        this.settings = n.extend(!0, {}, n.validator.defaults, t);
        this.currentForm = i;
        this.init()
    };
    n.validator.format = function(t, i) {
        return arguments.length === 1 ? function() {
            var i = n.makeArray(arguments);
            return i.unshift(t), n.validator.format.apply(this, i)
        } : (arguments.length > 2 && i.constructor !== Array && (i = n.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), n.each(i, function(n, i) {
            t = t.replace(new RegExp("\\{" + n + "\\}", "g"), function() {
                return i
            })
        }), t)
    };
    n.extend(n.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: n([]),
            errorLabelContainer: n([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(n) {
                this.lastActive = n;
                this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, n, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(n)).hide())
            },
            onfocusout: function(n) {
                !this.checkable(n) && (n.name in this.submitted || !this.optional(n)) && this.element(n)
            },
            onkeyup: function(n, t) {
                (t.which !== 9 || this.elementValue(n) !== "") && (n.name in this.submitted || n === this.lastElement) && this.element(n)
            },
            onclick: function(n) {
                n.name in this.submitted ? this.element(n) : n.parentNode.name in this.submitted && this.element(n.parentNode)
            },
            highlight: function(t, i, r) {
                t.type === "radio" ? this.findByName(t.name).addClass(i).removeClass(r) : n(t).addClass(i).removeClass(r)
            },
            unhighlight: function(t, i, r) {
                t.type === "radio" ? this.findByName(t.name).removeClass(i).addClass(r) : n(t).removeClass(i).addClass(r)
            }
        },
        setDefaults: function(t) {
            n.extend(n.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: n.validator.format("Please enter no more than {0} characters."),
            minlength: n.validator.format("Please enter at least {0} characters."),
            rangelength: n.validator.format("Please enter a value between {0} and {1} characters long."),
            range: n.validator.format("Please enter a value between {0} and {1}."),
            max: n.validator.format("Please enter a value less than or equal to {0}."),
            min: n.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function r(t) {
                    var i = n.data(this[0].form, "validator"),
                        r = "on" + t.type.replace(/^validate/, "");
                    i.settings[r] && i.settings[r].call(i, this[0], t)
                }
                var i, t;
                this.labelContainer = n(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || n(this.currentForm);
                this.containers = n(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                i = this.groups = {};
                n.each(this.settings.groups, function(t, r) {
                    typeof r == "string" && (r = r.split(/\s/));
                    n.each(r, function(n, r) {
                        i[r] = t
                    })
                });
                t = this.settings.rules;
                n.each(t, function(i, r) {
                    t[i] = n.validator.normalizeRule(r)
                });
                n(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", r).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", r);
                this.settings.invalidHandler && n(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.checkForm(), n.extend(this.submitted, this.errorMap), this.invalid = n.extend({}, this.errorMap), this.valid() || n(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var n = 0, t = this.currentElements = this.elements(); t[n]; n++) this.check(t[n]);
                return this.valid()
            },
            element: function(t) {
                t = this.validationTargetFor(this.clean(t));
                this.lastElement = t;
                this.prepareElement(t);
                this.currentElements = n(t);
                var i = this.check(t) !== !1;
                return i ? delete this.invalid[t.name] : this.invalid[t.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i
            },
            showErrors: function(t) {
                if (t) {
                    n.extend(this.errorMap, t);
                    this.errorList = [];
                    for (var i in t) this.errorList.push({
                        message: t[i],
                        element: this.findByName(i)[0]
                    });
                    this.successList = n.grep(this.successList, function(n) {
                        return !(n.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                n.fn.resetForm && n(this.currentForm).resetForm();
                this.submitted = {};
                this.lastElement = null;
                this.prepareForm();
                this.hideErrors();
                this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(n) {
                var t = 0;
                for (var i in n) t++;
                return t
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide()
            },
            valid: function() {
                return this.size() === 0
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    n(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (t) {}
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && n.grep(this.errorList, function(n) {
                    return n.element.name === t.name
                }).length === 1 && t
            },
            elements: function() {
                var t = this,
                    i = {};
                return n(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    return (!this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in i || !t.objectLength(n(this).rules())) ? !1 : (i[this.name] = !0, !0)
                })
            },
            clean: function(t) {
                return n(t)[0]
            },
            errors: function() {
                var t = this.settings.errorClass.replace(" ", ".");
                return n(this.settings.errorElement + "." + t, this.errorContext)
            },
            reset: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = n([]);
                this.toHide = n([]);
                this.currentElements = n([])
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(n) {
                this.reset();
                this.toHide = this.errorsFor(n)
            },
            elementValue: function(t) {
                var r = n(t).attr("type"),
                    i = n(t).val();
                return r === "radio" || r === "checkbox" ? n("input[name='" + n(t).attr("name") + "']:checked").val() : typeof i == "string" ? i.replace(/\r/g, "") : i
            },
            check: function(t) {
                var r, u;
                t = this.validationTargetFor(this.clean(t));
                var f = n(t).rules(),
                    e = !1,
                    s = this.elementValue(t),
                    i;
                for (r in f) {
                    u = {
                        method: r,
                        parameters: f[r]
                    };
                    try {
                        if (i = n.validator.methods[r].call(this, s, t, u.parameters), i === "dependency-mismatch") {
                            e = !0;
                            continue
                        }
                        if (e = !1, i === "pending") {
                            this.toHide = this.toHide.not(this.errorsFor(t));
                            return
                        }
                        if (!i) return this.formatAndAdd(t, u), !1
                    } catch (o) {
                        this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + u.method + "' method.", o);
                        throw o;
                    }
                }
                if (!e) return this.objectLength(f) && this.successList.push(t), !0
            },
            customDataMessage: function(t, i) {
                return n(t).data("msg-" + i.toLowerCase()) || t.attributes && n(t).attr("data-msg-" + i.toLowerCase())
            },
            customMessage: function(n, t) {
                var i = this.settings.messages[n];
                return i && (i.constructor === String ? i : i[t])
            },
            findDefined: function() {
                for (var n = 0; n < arguments.length; n++)
                    if (arguments[n] !== undefined) return arguments[n];
                return undefined
            },
            defaultMessage: function(t, i) {
                return this.findDefined(this.customMessage(t.name, i), this.customDataMessage(t, i), !this.settings.ignoreTitle && t.title || undefined, n.validator.messages[i], "<strong>Warning: No message defined for " + t.name + "<\/strong>")
            },
            formatAndAdd: function(t, i) {
                var r = this.defaultMessage(t, i.method),
                    u = /\$?\{(\d+)\}/g;
                typeof r == "function" ? r = r.call(this, i.parameters, t) : u.test(r) && (r = n.validator.format(r.replace(u, "{$1}"), i.parameters));
                this.errorList.push({
                    message: r,
                    element: t
                });
                this.errorMap[t.name] = r;
                this.submitted[t.name] = r
            },
            addWrapper: function(n) {
                return this.settings.wrapper && (n = n.add(n.parent(this.settings.wrapper))), n
            },
            defaultShowErrors: function() {
                for (var i, t, n = 0; this.errorList[n]; n++) t = this.errorList[n], this.settings.highlight && this.settings.highlight.call(this, t.element, this.settings.errorClass, this.settings.validClass), this.showLabel(t.element, t.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (n = 0; this.successList[n]; n++) this.showLabel(this.successList[n]);
                if (this.settings.unhighlight)
                    for (n = 0, i = this.validElements(); i[n]; n++) this.settings.unhighlight.call(this, i[n], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return n(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(t, i) {
                var r = this.errorsFor(t);
                r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass), r.html(i)) : (r = n("<" + this.settings.errorElement + ">").attr("for", this.idOrName(t)).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (r = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(r).length || (this.settings.errorPlacement ? this.settings.errorPlacement(r, n(t)) : r.insertAfter(t)));
                !i && this.settings.success && (r.text(""), typeof this.settings.success == "string" ? r.addClass(this.settings.success) : this.settings.success(r, t));
                this.toShow = this.toShow.add(r)
            },
            errorsFor: function(t) {
                var i = this.idOrName(t);
                return this.errors().filter(function() {
                    return n(this).attr("for") === i
                })
            },
            idOrName: function(n) {
                return this.groups[n.name] || (this.checkable(n) ? n.name : n.id || n.name)
            },
            validationTargetFor: function(n) {
                return this.checkable(n) && (n = this.findByName(n.name).not(this.settings.ignore)[0]), n
            },
            checkable: function(n) {
                return /radio|checkbox/i.test(n.type)
            },
            findByName: function(t) {
                return n(this.currentForm).find("[name='" + t + "']")
            },
            getLength: function(t, i) {
                switch (i.nodeName.toLowerCase()) {
                    case "select":
                        return n("option:selected", i).length;
                    case "input":
                        if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                }
                return t.length
            },
            depend: function(n, t) {
                return this.dependTypes[typeof n] ? this.dependTypes[typeof n](n, t) : !0
            },
            dependTypes: {
                boolean: function(n) {
                    return n
                },
                string: function(t, i) {
                    return !!n(t, i.form).length
                },
                "function": function(n, t) {
                    return n(t)
                }
            },
            optional: function(t) {
                var i = this.elementValue(t);
                return !n.validator.methods.required.call(this, i, t) && "dependency-mismatch"
            },
            startRequest: function(n) {
                this.pending[n.name] || (this.pendingRequest++, this.pending[n.name] = !0)
            },
            stopRequest: function(t, i) {
                this.pendingRequest--;
                this.pendingRequest < 0 && (this.pendingRequest = 0);
                delete this.pending[t.name];
                i && this.pendingRequest === 0 && this.formSubmitted && this.form() ? (n(this.currentForm).submit(), this.formSubmitted = !1) : !i && this.pendingRequest === 0 && this.formSubmitted && (n(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(t) {
                return n.data(t, "previousValue") || n.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(t, i) {
            t.constructor === String ? this.classRuleSettings[t] = i : n.extend(this.classRuleSettings, t)
        },
        classRules: function(t) {
            var i = {},
                r = n(t).attr("class");
            return r && n.each(r.split(" "), function() {
                this in n.validator.classRuleSettings && n.extend(i, n.validator.classRuleSettings[this])
            }), i
        },
        attributeRules: function(t) {
            var u = {},
                e = n(t),
                f = e[0].getAttribute("type"),
                r, i;
            for (r in n.validator.methods) r === "required" ? (i = e.get(0).getAttribute(r), i === "" && (i = !0), i = !!i) : i = e.attr(r), /min|max/.test(r) && (f === null || /number|range|text/.test(f)) && (i = Number(i)), i ? u[r] = i : f === r && f !== "range" && (u[r] = !0);
            return u.maxlength && /-1|2147483647|524288/.test(u.maxlength) && delete u.maxlength, u
        },
        dataRules: function(t) {
            var i, r, u = {},
                f = n(t);
            for (i in n.validator.methods) r = f.data("rule-" + i.toLowerCase()), r !== undefined && (u[i] = r);
            return u
        },
        staticRules: function(t) {
            var i = {},
                r = n.data(t.form, "validator");
            return r.settings.rules && (i = n.validator.normalizeRule(r.settings.rules[t.name]) || {}), i
        },
        normalizeRules: function(t, i) {
            return n.each(t, function(r, u) {
                if (u === !1) {
                    delete t[r];
                    return
                }
                if (u.param || u.depends) {
                    var f = !0;
                    switch (typeof u.depends) {
                        case "string":
                            f = !!n(u.depends, i.form).length;
                            break;
                        case "function":
                            f = u.depends.call(i, i)
                    }
                    f ? t[r] = u.param !== undefined ? u.param : !0 : delete t[r]
                }
            }), n.each(t, function(r, u) {
                t[r] = n.isFunction(u) ? u(i) : u
            }), n.each(["minlength", "maxlength"], function() {
                t[this] && (t[this] = Number(t[this]))
            }), n.each(["rangelength", "range"], function() {
                var i;
                t[this] && (n.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : typeof t[this] == "string" && (i = t[this].split(/[\s,]+/), t[this] = [Number(i[0]), Number(i[1])]))
            }), n.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
        },
        normalizeRule: function(t) {
            if (typeof t == "string") {
                var i = {};
                n.each(t.split(/\s/), function() {
                    i[this] = !0
                });
                t = i
            }
            return t
        },
        addMethod: function(t, i, r) {
            n.validator.methods[t] = i;
            n.validator.messages[t] = r !== undefined ? r : n.validator.messages[t];
            i.length < 3 && n.validator.addClassRules(t, n.validator.normalizeRule(t))
        },
        methods: {
            required: function(t, i, r) {
                if (!this.depend(r, i)) return "dependency-mismatch";
                if (i.nodeName.toLowerCase() === "select") {
                    var u = n(i).val();
                    return u && u.length > 0
                }
                return this.checkable(i) ? this.getLength(t, i) > 0 : n.trim(t).length > 0
            },
            email: function(n, t) {
                return this.optional(t) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(n)
            },
            url: function(n, t) {
                return this.optional(t) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(n)
            },
            date: function(n, t) {
                return this.optional(t) || !/Invalid|NaN/.test(new Date(n).toString())
            },
            dateISO: function(n, t) {
                return this.optional(t) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(n)
            },
            number: function(n, t) {
                return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(n)
            },
            digits: function(n, t) {
                return this.optional(t) || /^\d+$/.test(n)
            },
            creditcard: function(n, t) {
                var r, e;
                if (this.optional(t)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(n)) return !1;
                var f = 0,
                    i = 0,
                    u = !1;
                for (n = n.replace(/\D/g, ""), r = n.length - 1; r >= 0; r--) e = n.charAt(r), i = parseInt(e, 10), u && (i *= 2) > 9 && (i -= 9), f += i, u = !u;
                return f % 10 == 0
            },
            minlength: function(t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(n.trim(t), i);
                return this.optional(i) || u >= r
            },
            maxlength: function(t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(n.trim(t), i);
                return this.optional(i) || u <= r
            },
            rangelength: function(t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(n.trim(t), i);
                return this.optional(i) || u >= r[0] && u <= r[1]
            },
            min: function(n, t, i) {
                return this.optional(t) || n >= i
            },
            max: function(n, t, i) {
                return this.optional(t) || n <= i
            },
            range: function(n, t, i) {
                return this.optional(t) || n >= i[0] && n <= i[1]
            },
            equalTo: function(t, i, r) {
                var u = n(r);
                return this.settings.onfocusout && u.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    n(i).valid()
                }), t === u.val()
            },
            remote: function(t, i, r) {
                var f, u, e;
                return this.optional(i) ? "dependency-mismatch" : (f = this.previousValue(i), this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), f.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = f.message, r = typeof r == "string" && {
                    url: r
                } || r, f.old === t) ? f.valid : (f.old = t, u = this, this.startRequest(i), e = {}, e[i.name] = t, n.ajax(n.extend(!0, {
                    url: r,
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: e,
                    success: function(r) {
                        var e, h, s, o;
                        u.settings.messages[i.name].remote = f.originalMessage;
                        e = r === !0 || r === "true";
                        e ? (h = u.formSubmitted, u.prepareElement(i), u.formSubmitted = h, u.successList.push(i), delete u.invalid[i.name], u.showErrors()) : (s = {}, o = r || u.defaultMessage(i, "remote"), s[i.name] = f.message = n.isFunction(o) ? o(t) : o, u.invalid[i.name] = !0, u.showErrors(s));
                        f.valid = e;
                        u.stopRequest(i, e)
                    }
                }, r)), "pending")
            }
        }
    });
    n.format = n.validator.format
}(jQuery),
function(n) {
    var t = {},
        i;
    n.ajaxPrefilter ? n.ajaxPrefilter(function(n, i, r) {
        var u = n.port;
        n.mode === "abort" && (t[u] && t[u].abort(), t[u] = r)
    }) : (i = n.ajax, n.ajax = function(r) {
        var f = ("mode" in r ? r : n.ajaxSettings).mode,
            u = ("port" in r ? r : n.ajaxSettings).port;
        return f === "abort" ? (t[u] && t[u].abort(), t[u] = i.apply(this, arguments), t[u]) : i.apply(this, arguments)
    })
}(jQuery),
function(n) {
    n.extend(n.fn, {
        validateDelegate: function(t, i, r) {
            return this.bind(i, function(i) {
                var u = n(i.target);
                if (u.is(t)) return r.apply(u, arguments)
            })
        }
    })
}(jQuery),
function(n) {
    var t = !1,
        r, i;
    typeof define == "function" && define.amd && (define(n), t = !0);
    typeof exports == "object" && (module.exports = n(), t = !0);
    t || (r = window.Cookies, i = window.Cookies = n(), i.noConflict = function() {
        return window.Cookies = r, i
    })
}(function() {
    function n() {
        for (var n = 0, r = {}, t, i; n < arguments.length; n++) {
            t = arguments[n];
            for (i in t) r[i] = t[i]
        }
        return r
    }

    function t(i) {
        function r(t, u, f) {
            var o, h, l, e, s;
            if (typeof document != "undefined") {
                if (arguments.length > 1) {
                    f = n({
                        path: "/"
                    }, r.defaults, f);
                    typeof f.expires == "number" && (h = new Date, h.setMilliseconds(h.getMilliseconds() + f.expires * 864e5), f.expires = h);
                    try {
                        o = JSON.stringify(u);
                        /^[\{\[]/.test(o) && (u = o)
                    } catch (y) {}
                    return u = i.write ? i.write(u, t) : encodeURIComponent(String(u)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)), t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), t = t.replace(/[\(\)]/g, escape), document.cookie = [t, "=", u, f.expires ? "; expires=" + f.expires.toUTCString() : "", f.path ? "; path=" + f.path : "", f.domain ? "; domain=" + f.domain : "", f.secure ? "; secure" : ""].join("")
                }
                t || (o = {});
                for (var a = document.cookie ? document.cookie.split("; ") : [], v = /(%[0-9A-Z]{2})+/g, c = 0; c < a.length; c++) {
                    l = a[c].split("=");
                    e = l.slice(1).join("=");
                    e.charAt(0) === '"' && (e = e.slice(1, -1));
                    try {
                        if (s = l[0].replace(v, decodeURIComponent), e = i.read ? i.read(e, s) : i(e, s) || e.replace(v, decodeURIComponent), this.json) try {
                            e = JSON.parse(e)
                        } catch (y) {}
                        if (t === s) {
                            o = e;
                            break
                        }
                        t || (o[s] = e)
                    } catch (y) {}
                }
                return o
            }
        }
        return r.set = r, r.get = function(n) {
            return r.call(r, n)
        }, r.getJSON = function() {
            return r.apply({
                json: !0
            }, [].slice.call(arguments))
        }, r.defaults = {}, r.remove = function(t, i) {
            r(t, "", n(i, {
                expires: -1
            }))
        }, r.withConverter = t, r
    }
    return t(function() {})
}),
function() {
    "use strict";

    function s(n) {
        t.push(n);
        1 == t.length && e()
    }

    function h() {
        for (; t.length;) t[0](), t.shift()
    }

    function n(n) {
        this.a = i;
        this.b = void 0;
        this.f = [];
        var t = this;
        try {
            n(function(n) {
                o(t, n)
            }, function(n) {
                r(t, n)
            })
        } catch (u) {
            r(t, u)
        }
    }

    function c(t) {
        return new n(function(n, i) {
            i(t)
        })
    }

    function u(t) {
        return new n(function(n) {
            n(t)
        })
    }

    function o(n, t) {
        var u, e;
        if (n.a == i) {
            if (t == n) throw new TypeError;
            u = !1;
            try {
                if (e = t && t.then, null != t && "object" == typeof t && "function" == typeof e) {
                    e.call(t, function(t) {
                        u || o(n, t);
                        u = !0
                    }, function(t) {
                        u || r(n, t);
                        u = !0
                    });
                    return
                }
            } catch (s) {
                u || r(n, s);
                return
            }
            n.a = 0;
            n.b = t;
            f(n)
        }
    }

    function r(n, t) {
        if (n.a == i) {
            if (t == n) throw new TypeError;
            n.a = 1;
            n.b = t;
            f(n)
        }
    }

    function f(n) {
        s(function() {
            if (n.a != i)
                for (; n.f.length;) {
                    var t = n.f.shift(),
                        u = t[0],
                        f = t[1],
                        r = t[2],
                        t = t[3];
                    try {
                        0 == n.a ? "function" == typeof u ? r(u.call(void 0, n.b)) : r(n.b) : 1 == n.a && ("function" == typeof f ? r(f.call(void 0, n.b)) : t(n.b))
                    } catch (e) {
                        t(e)
                    }
                }
        })
    }

    function l(t) {
        return new n(function(n, i) {
            function o(i) {
                return function(r) {
                    f[i] = r;
                    e += 1;
                    e == t.length && n(f)
                }
            }
            var e = 0,
                f = [],
                r;
            for (0 == t.length && n(f), r = 0; r < t.length; r += 1) u(t[r]).c(o(r), i)
        })
    }

    function a(t) {
        return new n(function(n, i) {
            for (var r = 0; r < t.length; r += 1) u(t[r]).c(n, i)
        })
    }
    var e, t = [],
        i;
    e = function() {
        setTimeout(h)
    };
    i = 2;
    n.prototype.g = function(n) {
        return this.c(void 0, n)
    };
    n.prototype.c = function(t, i) {
        var r = this;
        return new n(function(n, u) {
            r.f.push([t, i, n, u]);
            f(r)
        })
    };
    window.Promise || (window.Promise = n, window.Promise.resolve = u, window.Promise.reject = c, window.Promise.race = a, window.Promise.all = l, window.Promise.prototype.then = n.prototype.c, window.Promise.prototype["catch"] = n.prototype.g)
}(),
function() {
    function s(n, t) {
        document.addEventListener ? n.addEventListener("scroll", t, !1) : n.attachEvent("scroll", t)
    }

    function c(n) {
        document.body ? n() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function t() {
            document.removeEventListener("DOMContentLoaded", t);
            n()
        }) : document.attachEvent("onreadystatechange", function i() {
            ("interactive" == document.readyState || "complete" == document.readyState) && (document.detachEvent("onreadystatechange", i), n())
        })
    }

    function r(n) {
        this.a = document.createElement("div");
        this.a.setAttribute("aria-hidden", "true");
        this.a.appendChild(document.createTextNode(n));
        this.b = document.createElement("span");
        this.c = document.createElement("span");
        this.h = document.createElement("span");
        this.f = document.createElement("span");
        this.g = -1;
        this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
        this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
        this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
        this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";
        this.b.appendChild(this.h);
        this.c.appendChild(this.f);
        this.a.appendChild(this.b);
        this.a.appendChild(this.c)
    }

    function t(n, t) {
        n.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:" + t + ";"
    }

    function h(n) {
        var t = n.a.offsetWidth,
            i = t + 100;
        return n.f.style.width = i + "px", n.c.scrollLeft = i, n.b.scrollLeft = n.b.scrollWidth + 100, n.g !== t ? (n.g = t, !0) : !1
    }

    function u(n, t) {
        function i() {
            var n = r;
            h(n) && null !== n.a.parentNode && t(n.g)
        }
        var r = n;
        s(n.b, i);
        s(n.c, i);
        h(n)
    }

    function i(n, t) {
        var i = t || {};
        this.family = n;
        this.style = i.style || "normal";
        this.weight = i.weight || "normal";
        this.stretch = i.stretch || "normal"
    }

    function l() {
        if (null === e) {
            var n = document.createElement("div");
            try {
                n.style.font = "condensed 100px sans-serif"
            } catch (t) {}
            e = "" !== n.style.font
        }
        return e
    }

    function n(n, t) {
        return [n.style, n.weight, l() ? n.stretch : "", "100px", t].join(" ")
    }
    var f = null,
        e = null,
        o = null;
    i.prototype.load = function(i, e) {
        var s = this,
            h = i || "BESbswy",
            l = e || 3e3,
            a = (new Date).getTime();
        return new Promise(function(i, e) {
            if (null === o && (o = !!window.FontFace), o) {
                var v = new Promise(function(t, i) {
                        function r() {
                            (new Date).getTime() - a >= l ? i() : document.fonts.load(n(s, s.family), h).then(function(n) {
                                1 <= n.length ? t() : setTimeout(r, 25)
                            }, function() {
                                i()
                            })
                        }
                        r()
                    }),
                    y = new Promise(function(n, t) {
                        setTimeout(t, l)
                    });
                Promise.race([y, v]).then(function() {
                    i(s)
                }, function() {
                    e(s)
                })
            } else c(function() {
                function k() {
                    var n;
                    (n = -1 != c && -1 != v || -1 != c && -1 != y || -1 != v && -1 != y) && ((n = c != v && c != y && v != y) || (null === f && (n = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), f = !!n && (536 > parseInt(n[1], 10) || 536 === parseInt(n[1], 10) && 11 >= parseInt(n[2], 10))), n = f && (c == d && v == d && y == d || c == g && v == g && y == g || c == nt && v == nt && y == nt)), n = !n);
                    n && (null !== o.parentNode && o.parentNode.removeChild(o), clearTimeout(it), i(s))
                }

                function tt() {
                    if ((new Date).getTime() - a >= l) null !== o.parentNode && o.parentNode.removeChild(o), e(s);
                    else {
                        var n = document.hidden;
                        (!0 === n || void 0 === n) && (c = p.a.offsetWidth, v = w.a.offsetWidth, y = b.a.offsetWidth, k());
                        it = setTimeout(tt, 50)
                    }
                }
                var p = new r(h),
                    w = new r(h),
                    b = new r(h),
                    c = -1,
                    v = -1,
                    y = -1,
                    d = -1,
                    g = -1,
                    nt = -1,
                    o = document.createElement("div"),
                    it = 0;
                o.dir = "ltr";
                t(p, n(s, "sans-serif"));
                t(w, n(s, "serif"));
                t(b, n(s, "monospace"));
                o.appendChild(p.a);
                o.appendChild(w.a);
                o.appendChild(b.a);
                document.body.appendChild(o);
                d = p.a.offsetWidth;
                g = w.a.offsetWidth;
                nt = b.a.offsetWidth;
                tt();
                u(p, function(n) {
                    c = n;
                    k()
                });
                t(p, n(s, '"' + s.family + '",sans-serif'));
                u(w, function(n) {
                    v = n;
                    k()
                });
                t(w, n(s, '"' + s.family + '",serif'));
                u(b, function(n) {
                    y = n;
                    k()
                });
                t(b, n(s, '"' + s.family + '",monospace'))
            })
        })
    };
    "undefined" != typeof module ? module.exports = i : (window.FontFaceObserver = i, window.FontFaceObserver.prototype.load = i.prototype.load)
}(),
function(n) {
    if (!(n.document.documentElement.className.indexOf("fonts-loaded") > -1)) {
        var t = new n.FontFaceObserver("opensans-light", {
                weight: 300
            }),
            i = new n.FontFaceObserver("opensans-regular", {
                weight: 300
            }),
            r = new n.FontFaceObserver("opensans-semibold", {
                weight: 300
            }),
            u = new n.FontFaceObserver("compare88-glyphs", {
                weight: 300
            });
        n.Promise.all([t.load(null, 5e3), i.load(null, 5e3), r.load(null, 5e3), u.load(null, 5e3)]).then(function() {
            n.document.documentElement.className += "fonts-loaded";
            var i = "lazyfonts-loaded",
                u = document.cookie.indexOf(i),
                f = window.location.hostname;
            if (u == -1) {
                var r = "",
                    t = new Date;
                t.setTime(t.getTime() + 5184e6);
                r = "; expires=" + t.toGMTString();
                document.cookie = i + "=1" + r + ";domain=;path=/"
            }
        })
    }
}(this),
function(n, t) {
    "use strict";
    typeof define == "function" && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        t(n, i)
    }) : typeof module == "object" && module.exports ? module.exports = t(n, require("jquery")) : n.jQueryBridget = t(n, n.jQuery)
}(window, function(n, t) {
    "use strict";

    function u(i, u, o) {
        function s(n, t, u) {
            var f, e = "$()." + i + '("' + t + '")';
            return n.each(function(n, s) {
                var h = o.data(s, i),
                    c, l;
                if (!h) {
                    r(i + " not initialized. Cannot call methods, i.e. " + e);
                    return
                }
                if (c = h[t], !c || t.charAt(0) == "_") {
                    r(e + " is not a valid method");
                    return
                }
                l = c.apply(h, u);
                f = f === undefined ? l : f
            }), f !== undefined ? f : n
        }

        function h(n, t) {
            n.each(function(n, r) {
                var f = o.data(r, i);
                f ? (f.option(t), f._init()) : (f = new u(r, t), o.data(r, i, f))
            })
        }(o = o || t || n.jQuery, o) && (u.prototype.option || (u.prototype.option = function(n) {
            o.isPlainObject(n) && (this.options = o.extend(!0, this.options, n))
        }), o.fn[i] = function(n) {
            if (typeof n == "string") {
                var t = e.call(arguments, 1);
                return s(this, n, t)
            }
            return h(this, n), this
        }, f(o))
    }

    function f(n) {
        !n || n && n.bridget || (n.bridget = u)
    }
    var e = Array.prototype.slice,
        i = n.console,
        r = typeof i == "undefined" ? function() {} : function(n) {
            i.error(n)
        };
    return f(t || n.jQuery), u
}),
function(n, t) {
    typeof define == "function" && define.amd ? define("ev-emitter/ev-emitter", t) : typeof module == "object" && module.exports ? module.exports = t() : n.EvEmitter = t()
}(typeof window != "undefined" ? window : this, function() {
    function t() {}
    var n = t.prototype;
    return n.on = function(n, t) {
        if (n && t) {
            var i = this._events = this._events || {},
                r = i[n] = i[n] || [];
            return r.indexOf(t) == -1 && r.push(t), this
        }
    }, n.once = function(n, t) {
        if (n && t) {
            this.on(n, t);
            var i = this._onceEvents = this._onceEvents || {},
                r = i[n] = i[n] || {};
            return r[t] = !0, this
        }
    }, n.off = function(n, t) {
        var i = this._events && this._events[n],
            r;
        if (i && i.length) return r = i.indexOf(t), r != -1 && i.splice(r, 1), this
    }, n.emitEvent = function(n, t) {
        var r = this._events && this._events[n],
            u, i, f, e;
        if (r && r.length) {
            for (u = 0, i = r[u], t = t || [], f = this._onceEvents && this._onceEvents[n]; i;) e = f && f[i], e && (this.off(n, i), delete f[i]), i.apply(this, t), u += e ? 0 : 1, i = r[u];
            return this
        }
    }, t
}),
function(n, t) {
    "use strict";
    typeof define == "function" && define.amd ? define("get-size/get-size", [], function() {
        return t()
    }) : typeof module == "object" && module.exports ? module.exports = t() : n.getSize = t()
}(window, function() {
    "use strict";

    function n(n) {
        var t = parseFloat(n),
            i = n.indexOf("%") == -1 && !isNaN(t);
        return i && t
    }

    function o() {}

    function h() {
        for (var u, r = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, n = 0; n < i; n++) u = t[n], r[u] = 0;
        return r
    }

    function r(n) {
        var t = getComputedStyle(n);
        return t || s("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), t
    }

    function c() {
        var t, i, o;
        u || (u = !0, t = document.createElement("div"), t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box", i = document.body || document.documentElement, i.appendChild(t), o = r(t), e.isBoxSizeOuter = f = n(o.width) == 200, i.removeChild(t))
    }

    function e(u) {
        var o, e, a, s, l;
        if (c(), typeof u == "string" && (u = document.querySelector(u)), u && typeof u == "object" && u.nodeType) {
            if (o = r(u), o.display == "none") return h();
            for (e = {}, e.width = u.offsetWidth, e.height = u.offsetHeight, a = e.isBorderBox = o.boxSizing == "border-box", s = 0; s < i; s++) {
                var v = t[s],
                    nt = o[v],
                    y = parseFloat(nt);
                e[v] = isNaN(y) ? 0 : y
            }
            var p = e.paddingLeft + e.paddingRight,
                w = e.paddingTop + e.paddingBottom,
                tt = e.marginLeft + e.marginRight,
                it = e.marginTop + e.marginBottom,
                b = e.borderLeftWidth + e.borderRightWidth,
                k = e.borderTopWidth + e.borderBottomWidth,
                d = a && f,
                g = n(o.width);
            return g !== !1 && (e.width = g + (d ? 0 : p + b)), l = n(o.height), l !== !1 && (e.height = l + (d ? 0 : w + k)), e.innerWidth = e.width - (p + b), e.innerHeight = e.height - (w + k), e.outerWidth = e.width + tt, e.outerHeight = e.height + it, e
        }
    }
    var s = typeof console == "undefined" ? o : function(n) {
            console.error(n)
        },
        t = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        i = t.length,
        u = !1,
        f;
    return e
}),
function(n, t) {
    "use strict";
    typeof define == "function" && define.amd ? define("desandro-matches-selector/matches-selector", t) : typeof module == "object" && module.exports ? module.exports = t() : n.matchesSelector = t()
}(window, function() {
    "use strict";
    var n = function() {
        var t = Element.prototype,
            i, n, u, r;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (i = ["webkit", "moz", "ms", "o"], n = 0; n < i.length; n++)
            if (u = i[n], r = u + "MatchesSelector", t[r]) return r
    }();
    return function(t, i) {
        return t[n](i)
    }
}),
function(n, t) {
    typeof define == "function" && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
        return t(n, i)
    }) : typeof module == "object" && module.exports ? module.exports = t(n, require("desandro-matches-selector")) : n.fizzyUIUtils = t(n, n.matchesSelector)
}(window, function(n, t) {
    var i = {},
        r;
    return i.extend = function(n, t) {
        for (var i in t) n[i] = t[i];
        return n
    }, i.modulo = function(n, t) {
        return (n % t + t) % t
    }, i.makeArray = function(n) {
        var t = [],
            i;
        if (Array.isArray(n)) t = n;
        else if (n && typeof n.length == "number")
            for (i = 0; i < n.length; i++) t.push(n[i]);
        else t.push(n);
        return t
    }, i.removeFrom = function(n, t) {
        var i = n.indexOf(t);
        i != -1 && n.splice(i, 1)
    }, i.getParent = function(n, i) {
        while (n != document.body)
            if (n = n.parentNode, t(n, i)) return n
    }, i.getQueryElement = function(n) {
        return typeof n == "string" ? document.querySelector(n) : n
    }, i.handleEvent = function(n) {
        var t = "on" + n.type;
        this[t] && this[t](n)
    }, i.filterFindElements = function(n, r) {
        n = i.makeArray(n);
        var u = [];
        return n.forEach(function(n) {
            var f, i;
            if (n instanceof HTMLElement) {
                if (!r) {
                    u.push(n);
                    return
                }
                for (t(n, r) && u.push(n), f = n.querySelectorAll(r), i = 0; i < f.length; i++) u.push(f[i])
            }
        }), u
    }, i.debounceMethod = function(n, t, i) {
        var u = n.prototype[t],
            r = t + "Timeout";
        n.prototype[t] = function() {
            var t = this[r],
                f, n;
            t && clearTimeout(t);
            f = arguments;
            n = this;
            this[r] = setTimeout(function() {
                u.apply(n, f);
                delete n[r]
            }, i || 100)
        }
    }, i.docReady = function(n) {
        var t = document.readyState;
        t == "complete" || t == "interactive" ? n() : document.addEventListener("DOMContentLoaded", n)
    }, i.toDashed = function(n) {
        return n.replace(/(.)([A-Z])/g, function(n, t, i) {
            return t + "-" + i
        }).toLowerCase()
    }, r = n.console, i.htmlInit = function(t, u) {
        i.docReady(function() {
            var e = i.toDashed(u),
                f = "data-" + e,
                s = document.querySelectorAll("[" + f + "]"),
                h = document.querySelectorAll(".js-" + e),
                c = i.makeArray(s).concat(i.makeArray(h)),
                l = f + "-options",
                o = n.jQuery;
            c.forEach(function(n) {
                var i = n.getAttribute(f) || n.getAttribute(l),
                    e, s;
                try {
                    e = i && JSON.parse(i)
                } catch (h) {
                    r && r.error("Error parsing " + f + " on " + n.className + ": " + h);
                    return
                }
                s = new t(n, e);
                o && o.data(n, u, s)
            })
        })
    }, i
}),
function(n, t) {
    typeof define == "function" && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], t) : typeof module == "object" && module.exports ? module.exports = t(require("ev-emitter"), require("get-size")) : (n.Outlayer = {}, n.Outlayer.Item = t(n.EvEmitter, n.getSize))
}(window, function(n, t) {
    "use strict";

    function l(n) {
        for (var t in n) return !1;
        return t = null, !0
    }

    function u(n, t) {
        n && (this.element = n, this.layout = t, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }

    function v(n) {
        return n.replace(/([A-Z])/g, function(n) {
            return "-" + n.toLowerCase()
        })
    }
    var f = document.documentElement.style,
        r = typeof f.transition == "string" ? "transition" : "WebkitTransition",
        e = typeof f.transform == "string" ? "transform" : "WebkitTransform",
        o = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        }[r],
        a = {
            transform: e,
            transition: r,
            transitionDuration: r + "Duration",
            transitionProperty: r + "Property",
            transitionDelay: r + "Delay"
        },
        i = u.prototype = Object.create(n.prototype),
        s, h, c;
    return i.constructor = u, i._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        };
        this.css({
            position: "absolute"
        })
    }, i.handleEvent = function(n) {
        var t = "on" + n.type;
        this[t] && this[t](n)
    }, i.getSize = function() {
        this.size = t(this.element)
    }, i.css = function(n) {
        var r = this.element.style,
            t, i;
        for (t in n) i = a[t] || t, r[i] = n[t]
    }, i.getPosition = function() {
        var f = getComputedStyle(this.element),
            e = this.layout._getOption("originLeft"),
            o = this.layout._getOption("originTop"),
            r = f[e ? "left" : "right"],
            u = f[o ? "top" : "bottom"],
            n = this.layout.size,
            t = r.indexOf("%") != -1 ? parseFloat(r) / 100 * n.width : parseInt(r, 10),
            i = u.indexOf("%") != -1 ? parseFloat(u) / 100 * n.height : parseInt(u, 10);
        t = isNaN(t) ? 0 : t;
        i = isNaN(i) ? 0 : i;
        t -= e ? n.paddingLeft : n.paddingRight;
        i -= o ? n.paddingTop : n.paddingBottom;
        this.position.x = t;
        this.position.y = i
    }, i.layoutPosition = function() {
        var r = this.layout.size,
            n = {},
            t = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            u = t ? "paddingLeft" : "paddingRight",
            f = t ? "left" : "right",
            e = t ? "right" : "left",
            o = this.position.x + r[u];
        n[f] = this.getXValue(o);
        n[e] = "";
        var s = i ? "paddingTop" : "paddingBottom",
            h = i ? "top" : "bottom",
            c = i ? "bottom" : "top",
            l = this.position.y + r[s];
        n[h] = this.getYValue(l);
        n[c] = "";
        this.css(n);
        this.emitEvent("layout", [this])
    }, i.getXValue = function(n) {
        var t = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !t ? n / this.layout.size.width * 100 + "%" : n + "px"
    }, i.getYValue = function(n) {
        var t = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && t ? n / this.layout.size.height * 100 + "%" : n + "px"
    }, i._transitionTo = function(n, t) {
        this.getPosition();
        var r = this.position.x,
            u = this.position.y,
            f = parseInt(n, 10),
            e = parseInt(t, 10),
            o = f === this.position.x && e === this.position.y;
        if (this.setPosition(n, t), o && !this.isTransitioning) {
            this.layoutPosition();
            return
        }
        var s = n - r,
            h = t - u,
            i = {};
        i.transform = this.getTranslate(s, h);
        this.transition({
            to: i,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }, i.getTranslate = function(n, t) {
        var i = this.layout._getOption("originLeft"),
            r = this.layout._getOption("originTop");
        return n = i ? n : -n, t = r ? t : -t, "translate3d(" + n + "px, " + t + "px, 0)"
    }, i.goTo = function(n, t) {
        this.setPosition(n, t);
        this.layoutPosition()
    }, i.moveTo = i._transitionTo, i.setPosition = function(n, t) {
        this.position.x = parseInt(n, 10);
        this.position.y = parseInt(t, 10)
    }, i._nonTransition = function(n) {
        this.css(n.to);
        n.isCleaning && this._removeStyles(n.to);
        for (var t in n.onTransitionEnd) n.onTransitionEnd[t].call(this)
    }, i.transition = function(n) {
        var i, t, r;
        if (!parseFloat(this.layout.options.transitionDuration)) {
            this._nonTransition(n);
            return
        }
        i = this._transn;
        for (t in n.onTransitionEnd) i.onEnd[t] = n.onTransitionEnd[t];
        for (t in n.to) i.ingProperties[t] = !0, n.isCleaning && (i.clean[t] = !0);
        n.from && (this.css(n.from), r = this.element.offsetHeight, r = null);
        this.enableTransition(n.to);
        this.css(n.to);
        this.isTransitioning = !0
    }, s = "opacity," + v(e), i.enableTransition = function() {
        if (!this.isTransitioning) {
            var n = this.layout.options.transitionDuration;
            n = typeof n == "number" ? n + "ms" : n;
            this.css({
                transitionProperty: s,
                transitionDuration: n,
                transitionDelay: this.staggerDelay || 0
            });
            this.element.addEventListener(o, this, !1)
        }
    }, i.onwebkitTransitionEnd = function(n) {
        this.ontransitionend(n)
    }, i.onotransitionend = function(n) {
        this.ontransitionend(n)
    }, h = {
        "-webkit-transform": "transform"
    }, i.ontransitionend = function(n) {
        var t, i, r;
        n.target === this.element && (t = this._transn, i = h[n.propertyName] || n.propertyName, delete t.ingProperties[i], l(t.ingProperties) && this.disableTransition(), i in t.clean && (this.element.style[n.propertyName] = "", delete t.clean[i]), i in t.onEnd && (r = t.onEnd[i], r.call(this), delete t.onEnd[i]), this.emitEvent("transitionEnd", [this]))
    }, i.disableTransition = function() {
        this.removeTransitionStyles();
        this.element.removeEventListener(o, this, !1);
        this.isTransitioning = !1
    }, i._removeStyles = function(n) {
        var t = {};
        for (var i in n) t[i] = "";
        this.css(t)
    }, c = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    }, i.removeTransitionStyles = function() {
        this.css(c)
    }, i.stagger = function(n) {
        n = isNaN(n) ? 0 : n;
        this.staggerDelay = n + "ms"
    }, i.removeElem = function() {
        this.element.parentNode.removeChild(this.element);
        this.css({
            display: ""
        });
        this.emitEvent("remove", [this])
    }, i.remove = function() {
        if (!r || !parseFloat(this.layout.options.transitionDuration)) {
            this.removeElem();
            return
        }
        this.once("transitionEnd", function() {
            this.removeElem()
        });
        this.hide()
    }, i.reveal = function() {
        delete this.isHidden;
        this.css({
            display: ""
        });
        var n = this.layout.options,
            t = {},
            i = this.getHideRevealTransitionEndProperty("visibleStyle");
        t[i] = this.onRevealTransitionEnd;
        this.transition({
            from: n.hiddenStyle,
            to: n.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: t
        })
    }, i.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }, i.getHideRevealTransitionEndProperty = function(n) {
        var t = this.layout.options[n],
            i;
        if (t.opacity) return "opacity";
        for (i in t) return i
    }, i.hide = function() {
        this.isHidden = !0;
        this.css({
            display: ""
        });
        var n = this.layout.options,
            t = {},
            i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        t[i] = this.onHideTransitionEnd;
        this.transition({
            from: n.visibleStyle,
            to: n.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: t
        })
    }, i.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"))
    }, i.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }, u
}),
function(n, t) {
    "use strict";
    typeof define == "function" && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, r, u, f) {
        return t(n, i, r, u, f)
    }) : typeof module == "object" && module.exports ? module.exports = t(n, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : n.Outlayer = t(n, n.EvEmitter, n.getSize, n.fizzyUIUtils, n.Outlayer.Item)
}(window, function(n, t, i, r, u) {
    "use strict";

    function e(n, t) {
        var i = r.getQueryElement(n),
            u, f;
        if (!i) {
            h && h.error("Bad element for " + this.constructor.namespace + ": " + (i || n));
            return
        }
        this.element = i;
        o && (this.$element = o(this.element));
        this.options = r.extend({}, this.constructor.defaults);
        this.option(t);
        u = ++v;
        this.element.outlayerGUID = u;
        s[u] = this;
        this._create();
        f = this._getOption("initLayout");
        f && this.layout()
    }

    function l(n) {
        function t() {
            n.apply(this, arguments)
        }
        return t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t
    }

    function y(n) {
        var r;
        if (typeof n == "number") return n;
        var t = n.match(/(^\d*\.?\d*)(\w*)/),
            i = t && t[1],
            u = t && t[2];
        return i.length ? (i = parseFloat(i), r = a[u] || 1, i * r) : 0
    }
    var h = n.console,
        o = n.jQuery,
        c = function() {},
        v = 0,
        s = {},
        f, a;
    return e.namespace = "outlayer", e.Item = u, e.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    }, f = e.prototype, r.extend(f, t.prototype), f.option = function(n) {
        r.extend(this.options, n)
    }, f._getOption = function(n) {
        var t = this.constructor.compatOptions[n];
        return t && this.options[t] !== undefined ? this.options[t] : this.options[n]
    }, e.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, f._create = function() {
        this.reloadItems();
        this.stamps = [];
        this.stamp(this.options.stamp);
        r.extend(this.element.style, this.options.containerStyle);
        var n = this._getOption("resize");
        n && this.bindResize()
    }, f.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }, f._itemize = function(n) {
        for (var u, f, i = this._filterFindItemElements(n), e = this.constructor.Item, r = [], t = 0; t < i.length; t++) u = i[t], f = new e(u, this), r.push(f);
        return r
    }, f._filterFindItemElements = function(n) {
        return r.filterFindElements(n, this.options.itemSelector)
    }, f.getItemElements = function() {
        return this.items.map(function(n) {
            return n.element
        })
    }, f.layout = function() {
        this._resetLayout();
        this._manageStamps();
        var n = this._getOption("layoutInstant"),
            t = n !== undefined ? n : !this._isLayoutInited;
        this.layoutItems(this.items, t);
        this._isLayoutInited = !0
    }, f._init = f.layout, f._resetLayout = function() {
        this.getSize()
    }, f.getSize = function() {
        this.size = i(this.element)
    }, f._getMeasurement = function(n, t) {
        var r = this.options[n],
            u;
        r ? (typeof r == "string" ? u = this.element.querySelector(r) : r instanceof HTMLElement && (u = r), this[n] = u ? i(u)[t] : r) : this[n] = 0
    }, f.layoutItems = function(n, t) {
        n = this._getItemsForLayout(n);
        this._layoutItems(n, t);
        this._postLayout()
    }, f._getItemsForLayout = function(n) {
        return n.filter(function(n) {
            return !n.isIgnored
        })
    }, f._layoutItems = function(n, t) {
        if (this._emitCompleteOnItems("layout", n), n && n.length) {
            var i = [];
            n.forEach(function(n) {
                var r = this._getItemLayoutPosition(n);
                r.item = n;
                r.isInstant = t || n.isLayoutInstant;
                i.push(r)
            }, this);
            this._processLayoutQueue(i)
        }
    }, f._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }, f._processLayoutQueue = function(n) {
        this.updateStagger();
        n.forEach(function(n, t) {
            this._positionItem(n.item, n.x, n.y, n.isInstant, t)
        }, this)
    }, f.updateStagger = function() {
        var n = this.options.stagger;
        if (n === null || n === undefined) {
            this.stagger = 0;
            return
        }
        return this.stagger = y(n), this.stagger
    }, f._positionItem = function(n, t, i, r, u) {
        r ? n.goTo(t, i) : (n.stagger(u * this.stagger), n.moveTo(t, i))
    }, f._postLayout = function() {
        this.resizeContainer()
    }, f.resizeContainer = function() {
        var t = this._getOption("resizeContainer"),
            n;
        t && (n = this._getContainerSize(), n && (this._setContainerMeasure(n.width, !0), this._setContainerMeasure(n.height, !1)))
    }, f._getContainerSize = c, f._setContainerMeasure = function(n, t) {
        if (n !== undefined) {
            var i = this.size;
            i.isBorderBox && (n += t ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth);
            n = Math.max(n, 0);
            this.element.style[t ? "width" : "height"] = n + "px"
        }
    }, f._emitCompleteOnItems = function(n, t) {
        function r() {
            f.dispatchEvent(n + "Complete", null, [t])
        }

        function e() {
            i++;
            i == u && r()
        }
        var f = this,
            u = t.length,
            i;
        if (!t || !u) {
            r();
            return
        }
        i = 0;
        t.forEach(function(t) {
            t.once(n, e)
        })
    }, f.dispatchEvent = function(n, t, i) {
        var u = t ? [t].concat(i) : i,
            r;
        this.emitEvent(n, u);
        o && (this.$element = this.$element || o(this.element), t ? (r = o.Event(t), r.type = n, this.$element.trigger(r, i)) : this.$element.trigger(n, i))
    }, f.ignore = function(n) {
        var t = this.getItem(n);
        t && (t.isIgnored = !0)
    }, f.unignore = function(n) {
        var t = this.getItem(n);
        t && delete t.isIgnored
    }, f.stamp = function(n) {
        (n = this._find(n), n) && (this.stamps = this.stamps.concat(n), n.forEach(this.ignore, this))
    }, f.unstamp = function(n) {
        (n = this._find(n), n) && n.forEach(function(n) {
            r.removeFrom(this.stamps, n);
            this.unignore(n)
        }, this)
    }, f._find = function(n) {
        if (n) return typeof n == "string" && (n = this.element.querySelectorAll(n)), r.makeArray(n)
    }, f._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, f._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect(),
            n = this.size;
        this._boundingRect = {
            left: t.left + n.paddingLeft + n.borderLeftWidth,
            top: t.top + n.paddingTop + n.borderTopWidth,
            right: t.right - (n.paddingRight + n.borderRightWidth),
            bottom: t.bottom - (n.paddingBottom + n.borderBottomWidth)
        }
    }, f._manageStamp = c, f._getElementOffset = function(n) {
        var t = n.getBoundingClientRect(),
            r = this._boundingRect,
            u = i(n);
        return {
            left: t.left - r.left - u.marginLeft,
            top: t.top - r.top - u.marginTop,
            right: r.right - t.right - u.marginRight,
            bottom: r.bottom - t.bottom - u.marginBottom
        }
    }, f.handleEvent = r.handleEvent, f.bindResize = function() {
        n.addEventListener("resize", this);
        this.isResizeBound = !0
    }, f.unbindResize = function() {
        n.removeEventListener("resize", this);
        this.isResizeBound = !1
    }, f.onresize = function() {
        this.resize()
    }, r.debounceMethod(e, "onresize", 100), f.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, f.needsResizeLayout = function() {
        var n = i(this.element),
            t = this.size && n;
        return t && n.innerWidth !== this.size.innerWidth
    }, f.addItems = function(n) {
        var t = this._itemize(n);
        return t.length && (this.items = this.items.concat(t)), t
    }, f.appended = function(n) {
        var t = this.addItems(n);
        t.length && (this.layoutItems(t, !0), this.reveal(t))
    }, f.prepended = function(n) {
        var t = this._itemize(n),
            i;
        t.length && (i = this.items.slice(0), this.items = t.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(i))
    }, f.reveal = function(n) {
        if (this._emitCompleteOnItems("reveal", n), n && n.length) {
            var t = this.updateStagger();
            n.forEach(function(n, i) {
                n.stagger(i * t);
                n.reveal()
            })
        }
    }, f.hide = function(n) {
        if (this._emitCompleteOnItems("hide", n), n && n.length) {
            var t = this.updateStagger();
            n.forEach(function(n, i) {
                n.stagger(i * t);
                n.hide()
            })
        }
    }, f.revealItemElements = function(n) {
        var t = this.getItems(n);
        this.reveal(t)
    }, f.hideItemElements = function(n) {
        var t = this.getItems(n);
        this.hide(t)
    }, f.getItem = function(n) {
        for (var i, t = 0; t < this.items.length; t++)
            if (i = this.items[t], i.element == n) return i
    }, f.getItems = function(n) {
        n = r.makeArray(n);
        var t = [];
        return n.forEach(function(n) {
            var i = this.getItem(n);
            i && t.push(i)
        }, this), t
    }, f.remove = function(n) {
        var t = this.getItems(n);
        (this._emitCompleteOnItems("remove", t), t && t.length) && t.forEach(function(n) {
            n.remove();
            r.removeFrom(this.items, n)
        }, this)
    }, f.destroy = function() {
        var n = this.element.style,
            t;
        n.height = "";
        n.position = "";
        n.width = "";
        this.items.forEach(function(n) {
            n.destroy()
        });
        this.unbindResize();
        t = this.element.outlayerGUID;
        delete s[t];
        delete this.element.outlayerGUID;
        o && o.removeData(this.element, this.constructor.namespace)
    }, e.data = function(n) {
        n = r.getQueryElement(n);
        var t = n && n.outlayerGUID;
        return t && s[t]
    }, e.create = function(n, t) {
        var i = l(e);
        return i.defaults = r.extend({}, e.defaults), r.extend(i.defaults, t), i.compatOptions = r.extend({}, e.compatOptions), i.namespace = n, i.data = e.data, i.Item = l(u), r.htmlInit(i, n), o && o.bridget && o.bridget(n, i), i
    }, a = {
        ms: 1,
        s: 1e3
    }, e.Item = u, e
}),
function(n, t) {
    typeof define == "function" && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], t) : typeof module == "object" && module.exports ? module.exports = t(require("outlayer")) : (n.Isotope = n.Isotope || {}, n.Isotope.Item = t(n.Outlayer))
}(window, function(n) {
    "use strict";

    function i() {
        n.Item.apply(this, arguments)
    }
    var t = i.prototype = Object.create(n.Item.prototype),
        u = t._create,
        r;
    return t._create = function() {
        this.id = this.layout.itemGUID++;
        u.call(this);
        this.sortData = {}
    }, t.updateSortData = function() {
        var t, i, n, r;
        if (!this.isIgnored) {
            this.sortData.id = this.id;
            this.sortData["original-order"] = this.id;
            this.sortData.random = Math.random();
            t = this.layout.options.getSortData;
            i = this.layout._sorters;
            for (n in t) r = i[n], this.sortData[n] = r(this.element, this)
        }
    }, r = t.destroy, t.destroy = function() {
        r.apply(this, arguments);
        this.css({
            display: ""
        })
    }, i
}),
function(n, t) {
    typeof define == "function" && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], t) : typeof module == "object" && module.exports ? module.exports = t(require("get-size"), require("outlayer")) : (n.Isotope = n.Isotope || {}, n.Isotope.LayoutMode = t(n.getSize, n.Outlayer))
}(window, function(n, t) {
    "use strict";

    function r(n) {
        this.isotope = n;
        n && (this.options = n.options[this.namespace], this.element = n.element, this.items = n.filteredItems, this.size = n.size)
    }
    var i = r.prototype;
    return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function(n) {
        i[n] = function() {
            return t.prototype[n].apply(this.isotope, arguments)
        }
    }), i.needsVerticalResizeLayout = function() {
        var t = n(this.isotope.element),
            i = this.isotope.size && t;
        return i && t.innerHeight != this.isotope.size.innerHeight
    }, i._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }, i.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }, i.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }, i.getSegmentSize = function(n, t) {
        var i = n + t,
            u = "outer" + t,
            r;
        (this._getMeasurement(i, u), this[i]) || (r = this.getFirstItemSize(), this[i] = r && r[u] || this.isotope.size["inner" + t])
    }, i.getFirstItemSize = function() {
        var t = this.isotope.filteredItems[0];
        return t && t.element && n(t.element)
    }, i.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }, i.getSize = function() {
        this.isotope.getSize();
        this.size = this.isotope.size
    }, r.modes = {}, r.create = function(n, t) {
        function u() {
            r.apply(this, arguments)
        }
        return u.prototype = Object.create(i), u.prototype.constructor = u, t && (u.options = t), u.prototype.namespace = n, r.modes[n] = u, u
    }, r
}),
function(n, t) {
    typeof define == "function" && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], t) : typeof module == "object" && module.exports ? module.exports = t(require("outlayer"), require("get-size")) : n.Masonry = t(n.Outlayer, n.getSize)
}(window, function(n, t) {
    var i = n.create("masonry");
    return i.compatOptions.fitWidth = "isFitWidth", i.prototype._resetLayout = function() {
        this.getSize();
        this._getMeasurement("columnWidth", "outerWidth");
        this._getMeasurement("gutter", "outerWidth");
        this.measureColumns();
        this.colYs = [];
        for (var n = 0; n < this.cols; n++) this.colYs.push(0);
        this.maxY = 0
    }, i.prototype.measureColumns = function() {
        var n, i;
        this.getContainerWidth();
        this.columnWidth || (n = this.items[0], i = n && n.element, this.columnWidth = i && t(i).outerWidth || this.containerWidth);
        var r = this.columnWidth += this.gutter,
            f = this.containerWidth + this.gutter,
            u = f / r,
            e = r - f % r,
            o = e && e < 1 ? "round" : "floor";
        u = Math[o](u);
        this.cols = Math.max(u, 1)
    }, i.prototype.getContainerWidth = function() {
        var i = this._getOption("fitWidth"),
            r = i ? this.element.parentNode : this.element,
            n = t(r);
        this.containerWidth = n && n.innerWidth
    }, i.prototype._getItemLayoutPosition = function(n) {
        var t;
        n.getSize();
        var f = n.size.outerWidth % this.columnWidth,
            o = f && f < 1 ? "round" : "ceil",
            i = Math[o](n.size.outerWidth / this.columnWidth);
        i = Math.min(i, this.cols);
        var r = this._getColGroup(i),
            u = Math.min.apply(Math, r),
            e = r.indexOf(u),
            s = {
                x: this.columnWidth * e,
                y: u
            },
            h = u + n.size.outerHeight,
            c = this.cols + 1 - r.length;
        for (t = 0; t < c; t++) this.colYs[e + t] = h;
        return s
    }, i.prototype._getColGroup = function(n) {
        var i, r, t, u;
        if (n < 2) return this.colYs;
        for (i = [], r = this.cols + 1 - n, t = 0; t < r; t++) u = this.colYs.slice(t, t + n), i[t] = Math.max.apply(Math, u);
        return i
    }, i.prototype._manageStamp = function(n) {
        var e = t(n),
            u = this._getElementOffset(n),
            l = this._getOption("originLeft"),
            o = l ? u.left : u.right,
            s = o + e.outerWidth,
            f = Math.floor(o / this.columnWidth),
            i, h, c, r;
        for (f = Math.max(0, f), i = Math.floor(s / this.columnWidth), i -= s % this.columnWidth ? 0 : 1, i = Math.min(this.cols - 1, i), h = this._getOption("originTop"), c = (h ? u.top : u.bottom) + e.outerHeight, r = f; r <= i; r++) this.colYs[r] = Math.max(c, this.colYs[r])
    }, i.prototype._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var n = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (n.width = this._getContainerFitWidth()), n
    }, i.prototype._getContainerFitWidth = function() {
        for (var n = 0, t = this.cols; --t;) {
            if (this.colYs[t] !== 0) break;
            n++
        }
        return (this.cols - n) * this.columnWidth - this.gutter
    }, i.prototype.needsResizeLayout = function() {
        var n = this.containerWidth;
        return this.getContainerWidth(), n != this.containerWidth
    }, i
}),
function(n, t) {
    typeof define == "function" && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], t) : typeof module == "object" && module.exports ? module.exports = t(require("../layout-mode"), require("masonry-layout")) : t(n.Isotope.LayoutMode, n.Masonry)
}(window, function(n, t) {
    "use strict";
    var u = n.create("masonry"),
        i = u.prototype,
        o = {
            _getElementOffset: !0,
            layout: !0,
            _getMeasurement: !0
        },
        r, f, e;
    for (r in t.prototype) o[r] || (i[r] = t.prototype[r]);
    return f = i.measureColumns, i.measureColumns = function() {
        this.items = this.isotope.filteredItems;
        f.call(this)
    }, e = i._getOption, i._getOption = function(n) {
        return n == "fitWidth" ? this.options.isFitWidth !== undefined ? this.options.isFitWidth : this.options.fitWidth : e.apply(this.isotope, arguments)
    }, u
}),
function(n, t) {
    typeof define == "function" && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], t) : typeof exports == "object" ? module.exports = t(require("../layout-mode")) : t(n.Isotope.LayoutMode)
}(window, function(n) {
    "use strict";
    var i = n.create("fitRows"),
        t = i.prototype;
    return t._resetLayout = function() {
        this.x = 0;
        this.y = 0;
        this.maxY = 0;
        this._getMeasurement("gutter", "outerWidth")
    }, t._getItemLayoutPosition = function(n) {
        var t, i, r;
        return n.getSize(), t = n.size.outerWidth + this.gutter, i = this.isotope.size.innerWidth + this.gutter, this.x !== 0 && t + this.x > i && (this.x = 0, this.y = this.maxY), r = {
            x: this.x,
            y: this.y
        }, this.maxY = Math.max(this.maxY, this.y + n.size.outerHeight), this.x += t, r
    }, t._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }, i
}),
function(n, t) {
    typeof define == "function" && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], t) : typeof module == "object" && module.exports ? module.exports = t(require("../layout-mode")) : t(n.Isotope.LayoutMode)
}(window, function(n) {
    "use strict";
    var i = n.create("vertical", {
            horizontalAlignment: 0
        }),
        t = i.prototype;
    return t._resetLayout = function() {
        this.y = 0
    }, t._getItemLayoutPosition = function(n) {
        n.getSize();
        var t = (this.isotope.size.innerWidth - n.size.outerWidth) * this.options.horizontalAlignment,
            i = this.y;
        return this.y += n.size.outerHeight, {
            x: t,
            y: i
        }
    }, t._getContainerSize = function() {
        return {
            height: this.y
        }
    }, i
}),
function(n, t) {
    typeof define == "function" && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, r, u, f, e, o) {
        return t(n, i, r, u, f, e, o)
    }) : typeof module == "object" && module.exports ? module.exports = t(n, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : n.Isotope = t(n, n.Outlayer, n.getSize, n.matchesSelector, n.fizzyUIUtils, n.Isotope.Item, n.Isotope.LayoutMode)
}(window, function(n, t, i, r, u, f, e) {
    function v(n, t) {
        return function(i, r) {
            for (var s, h, u = 0; u < n.length; u++) {
                var f = n[u],
                    e = i.sortData[f],
                    o = r.sortData[f];
                if (e > o || e < o) return s = t[f] !== undefined ? t[f] : t, h = s ? 1 : -1, (e > o ? 1 : -1) * h
            }
            return 0
        }
    }
    var h = n.jQuery,
        a = String.prototype.trim ? function(n) {
            return n.trim()
        } : function(n) {
            return n.replace(/^\s+|\s+$/g, "")
        },
        s = t.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0
        }),
        o, c, l;
    return s.Item = f, s.LayoutMode = e, o = s.prototype, o._create = function() {
        this.itemGUID = 0;
        this._sorters = {};
        this._getSorters();
        t.prototype._create.call(this);
        this.modes = {};
        this.filteredItems = this.items;
        this.sortHistory = ["original-order"];
        for (var n in e.modes) this._initLayoutMode(n)
    }, o.reloadItems = function() {
        this.itemGUID = 0;
        t.prototype.reloadItems.call(this)
    }, o._itemize = function() {
        for (var r, n = t.prototype._itemize.apply(this, arguments), i = 0; i < n.length; i++) r = n[i], r.id = this.itemGUID++;
        return this._updateItemsSortData(n), n
    }, o._initLayoutMode = function(n) {
        var t = e.modes[n],
            i = this.options[n] || {};
        this.options[n] = t.options ? u.extend(t.options, i) : i;
        this.modes[n] = new t(this)
    }, o.layout = function() {
        if (!this._isLayoutInited && this._getOption("initLayout")) {
            this.arrange();
            return
        }
        this._layout()
    }, o._layout = function() {
        var n = this._getIsInstant();
        this._resetLayout();
        this._manageStamps();
        this.layoutItems(this.filteredItems, n);
        this._isLayoutInited = !0
    }, o.arrange = function(n) {
        this.option(n);
        this._getIsInstant();
        var t = this._filter(this.items);
        this.filteredItems = t.matches;
        this._bindArrangeComplete();
        this._isInstant ? this._noTransition(this._hideReveal, [t]) : this._hideReveal(t);
        this._sort();
        this._layout()
    }, o._init = o.arrange, o._hideReveal = function(n) {
        this.reveal(n.needReveal);
        this.hide(n.needHide)
    }, o._getIsInstant = function() {
        var n = this._getOption("layoutInstant"),
            t = n !== undefined ? n : !this._isLayoutInited;
        return this._isInstant = t, t
    }, o._bindArrangeComplete = function() {
        function n() {
            t && i && r && u.dispatchEvent("arrangeComplete", null, [u.filteredItems])
        }
        var t, i, r, u = this;
        this.once("layoutComplete", function() {
            t = !0;
            n()
        });
        this.once("hideComplete", function() {
            i = !0;
            n()
        });
        this.once("revealComplete", function() {
            r = !0;
            n()
        })
    }, o._filter = function(n) {
        var u = this.options.filter,
            i, t, r;
        u = u || "*";
        var f = [],
            e = [],
            o = [],
            s = this._getFilterTest(u);
        for (i = 0; i < n.length; i++)(t = n[i], t.isIgnored) || (r = s(t), r && f.push(t), r && t.isHidden ? e.push(t) : r || t.isHidden || o.push(t));
        return {
            matches: f,
            needReveal: e,
            needHide: o
        }
    }, o._getFilterTest = function(n) {
        return h && this.options.isJQueryFiltering ? function(t) {
            return h(t.element).is(n)
        } : typeof n == "function" ? function(t) {
            return n(t.element)
        } : function(t) {
            return r(t.element, n)
        }
    }, o.updateSortData = function(n) {
        var t;
        n ? (n = u.makeArray(n), t = this.getItems(n)) : t = this.items;
        this._getSorters();
        this._updateItemsSortData(t)
    }, o._getSorters = function() {
        var t = this.options.getSortData,
            n, i;
        for (n in t) i = t[n], this._sorters[n] = c(i)
    }, o._updateItemsSortData = function(n) {
        for (var r, i = n && n.length, t = 0; i && t < i; t++) r = n[t], r.updateSortData()
    }, c = function() {
        function n(n) {
            if (typeof n != "string") return n;
            var i = a(n).split(" "),
                r = i[0],
                u = r.match(/^\[(.+)\]$/),
                o = u && u[1],
                f = t(o, r),
                e = s.sortDataParsers[i[1]];
            return e ? function(n) {
                return n && e(f(n))
            } : function(n) {
                return n && f(n)
            }
        }

        function t(n, t) {
            return n ? function(t) {
                return t.getAttribute(n)
            } : function(n) {
                var i = n.querySelector(t);
                return i && i.textContent
            }
        }
        return n
    }(), s.sortDataParsers = {
        parseInt: function(n) {
            return parseInt(n, 10)
        },
        parseFloat: function(n) {
            return parseFloat(n)
        }
    }, o._sort = function() {
        var n = this.options.sortBy,
            t, i;
        n && (t = [].concat.apply(n, this.sortHistory), i = v(t, this.options.sortAscending), this.filteredItems.sort(i), n != this.sortHistory[0] && this.sortHistory.unshift(n))
    }, o._mode = function() {
        var n = this.options.layoutMode,
            t = this.modes[n];
        if (!t) throw new Error("No layout mode: " + n);
        return t.options = this.options[n], t
    }, o._resetLayout = function() {
        t.prototype._resetLayout.call(this);
        this._mode()._resetLayout()
    }, o._getItemLayoutPosition = function(n) {
        return this._mode()._getItemLayoutPosition(n)
    }, o._manageStamp = function(n) {
        this._mode()._manageStamp(n)
    }, o._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }, o.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }, o.appended = function(n) {
        var t = this.addItems(n),
            i;
        t.length && (i = this._filterRevealAdded(t), this.filteredItems = this.filteredItems.concat(i))
    }, o.prepended = function(n) {
        var t = this._itemize(n),
            i;
        t.length && (this._resetLayout(), this._manageStamps(), i = this._filterRevealAdded(t), this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = t.concat(this.items))
    }, o._filterRevealAdded = function(n) {
        var t = this._filter(n);
        return this.hide(t.needHide), this.reveal(t.matches), this.layoutItems(t.matches, !0), t.matches
    }, o.insert = function(n) {
        var i = this.addItems(n),
            t, u, r, f;
        if (i.length) {
            for (r = i.length, t = 0; t < r; t++) u = i[t], this.element.appendChild(u.element);
            for (f = this._filter(i).matches, t = 0; t < r; t++) i[t].isLayoutInstant = !0;
            for (this.arrange(), t = 0; t < r; t++) delete i[t].isLayoutInstant;
            this.reveal(f)
        }
    }, l = o.remove, o.remove = function(n) {
        var t, r, i, f;
        for (n = u.makeArray(n), t = this.getItems(n), l.call(this, n), r = t && t.length, i = 0; r && i < r; i++) f = t[i], u.removeFrom(this.filteredItems, f)
    }, o.shuffle = function() {
        for (var t, n = 0; n < this.items.length; n++) t = this.items[n], t.sortData.random = Math.random();
        this.options.sortBy = "random";
        this._sort();
        this._layout()
    }, o._noTransition = function(n, t) {
        var r = this.options.transitionDuration,
            i;
        return this.options.transitionDuration = 0, i = n.apply(this, t), this.options.transitionDuration = r, i
    }, o.getFilteredItemElements = function() {
        return this.filteredItems.map(function(n) {
            return n.element
        })
    }, s
});
cardsorting = function(n, t) {
        var i = [function(n) {
                n(".card-list").each(function() {
                    var i = n(this),
                        f = "#" + n(this).data("menu"),
                        e = "#" + n(this).data("filter"),
                        t = {},
                        r, u;
                    i.isotope({
                        itemSelector: ".card",
                        layoutMode: "fitRows",
                        resizesContainer: !0
                    });
                    n("a", f).click(function(e) {
                        var s = n(f).data("filter-group"),
                            o = n(this).attr("data-filter-option");
                        o = o === "*" ? o : "." + o;
                        o = o === "*" ? "" : o;
                        t[s] = o;
                        o = r(t);
                        n(this).parent().siblings("li").removeClass("active");
                        n(this).parent().addClass("active");
                        i.isotope({
                            filter: o
                        });
                        n(f).hasClass("active") && n(f).removeClass("active");
                        u(o);
                        e.preventDefault()
                    });
                    n("select", e).change(function() {
                        var e = n(this).data("filter-group"),
                            f = n(this).find(":checked").attr("data-filter-option");
                        f = f === "*" ? f : "." + f;
                        f = f === "*" ? "" : f;
                        t[e] = f;
                        f = r(t);
                        u(f);
                        i.isotope({
                            filter: f
                        })
                    });
                    n('input[type="radio"]', e).change(function() {
                        var e = n(this).closest(".radio").data("filter-group"),
                            f = n(this).attr("data-filter-option");
                        f = f === "*" ? f : "." + f;
                        f = f === "*" ? "" : f;
                        t[e] = f;
                        f = r(t);
                        u(f);
                        i.isotope({
                            filter: f
                        })
                    });
                    n('input[type="checkbox"]', e).click(function() {
                        var f = [],
                            e = n(this).closest(".checkbox"),
                            o = n(this).closest(".checkbox").data("filter-group");
                        n("input[type=checkbox]:checked", e).each(function() {
                            var t = n(this).attr("data-filter-option");
                            t = t === "*" ? t : "." + t;
                            t = t === "*" ? "" : t;
                            f.push(t)
                        });
                        t[o] = f.join("");
                        selector = r(t);
                        u(selector);
                        i.isotope({
                            filter: selector
                        })
                    });
                    r = function(n) {
                        var t = "";
                        for (var i in n) t += n[i];
                        return t
                    };
                    u = function(t) {
                        n("#card-count").text(n("#cc-card-list section.card" + t).length)
                    }
                })
            }],
            r = function() {
                u()
            },
            u = function() {
                i.forEach(function(i) {
                    i(n, t)
                })
            };
        return {
            init: r
        }
    }(jQuery, document),
    function(n) {
        typeof define == "function" && define.amd ? define(["jquery", "../version", "../keycode"], n) : n(jQuery)
    }(function(n) {
        function e(n) {
            for (var t, i; n.length && n[0] !== document;) {
                if (t = n.css("position"), (t === "absolute" || t === "relative" || t === "fixed") && (i = parseInt(n.css("zIndex"), 10), !isNaN(i) && i !== 0)) return i;
                n = n.parent()
            }
            return 0
        }

        function r() {
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
            this.regional.en = n.extend(!0, {}, this.regional[""]);
            this.regional["en-US"] = n.extend(!0, {}, this.regional.en);
            this.dpDiv = u(n("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'><\/div>"))
        }

        function u(t) {
            var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return t.on("mouseout", i, function() {
                n(this).removeClass("ui-state-hover");
                this.className.indexOf("ui-datepicker-prev") !== -1 && n(this).removeClass("ui-datepicker-prev-hover");
                this.className.indexOf("ui-datepicker-next") !== -1 && n(this).removeClass("ui-datepicker-next-hover")
            }).on("mouseover", i, f)
        }

        function f() {
            n.datepicker._isDisabledDatepicker(t.inline ? t.dpDiv.parent()[0] : t.input[0]) || (n(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), n(this).addClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && n(this).addClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && n(this).addClass("ui-datepicker-next-hover"))
        }

        function i(t, i) {
            n.extend(t, i);
            for (var r in i) i[r] == null && (t[r] = i[r]);
            return t
        }
        n.extend(n.ui, {
            datepicker: {
                version: "@VERSION"
            }
        });
        var t;
        return n.extend(r.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function() {
                return this.dpDiv
            },
            setDefaults: function(n) {
                return i(this._defaults, n || {}), this
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
                    dpDiv: i ? u(n("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'><\/div>")) : this.dpDiv
                }
            },
            _connectDatepicker: function(t, i) {
                var r = n(t);
                if (i.append = n([]), i.trigger = n([]), !r.hasClass(this.markerClassName)) {
                    this._attachments(r, i);
                    r.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp);
                    this._autoSize(i);
                    n.data(t, "datepicker", i);
                    i.settings.disabled && this._disableDatepicker(t)
                }
            },
            _attachments: function(t, i) {
                var u, r, f, e = this._get(i, "appendText"),
                    o = this._get(i, "isRTL");
                if (i.append && i.append.remove(), e && (i.append = n("<span class='" + this._appendClass + "'>" + e + "<\/span>"), t[o ? "before" : "after"](i.append)), t.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), u = this._get(i, "showOn"), u === "focus" || u === "both") t.on("focus", this._showDatepicker);
                if (u === "button" || u === "both") {
                    r = this._get(i, "buttonText");
                    f = this._get(i, "buttonImage");
                    i.trigger = n(this._get(i, "buttonImageOnly") ? n("<img/>").addClass(this._triggerClass).attr({
                        src: f,
                        alt: r,
                        title: r
                    }) : n("<button type='button'><\/button>").addClass(this._triggerClass).html(f ? n("<img/>").attr({
                        src: f,
                        alt: r,
                        title: r
                    }) : r));
                    t[o ? "before" : "after"](i.trigger);
                    i.trigger.on("click", function() {
                        return n.datepicker._datepickerShowing && n.datepicker._lastInput === t[0] ? n.datepicker._hideDatepicker() : n.datepicker._datepickerShowing && n.datepicker._lastInput !== t[0] ? (n.datepicker._hideDatepicker(), n.datepicker._showDatepicker(t[0])) : n.datepicker._showDatepicker(t[0]), !1
                    })
                }
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
            _inlineDatepicker: function(t, i) {
                var r = n(t);
                r.hasClass(this.markerClassName) || (r.addClass(this.markerClassName).append(i.dpDiv), n.data(t, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function(t, r, u, f, e) {
                var s, h, c, l, a, o = this._dialogInst;
                if (!o) {
                    this.uuid += 1;
                    s = "dp" + this.uuid;
                    this._dialogInput = n("<input type='text' id='" + s + "' style='position: absolute; top: -100px; width: 0px;'/>");
                    this._dialogInput.on("keydown", this._doKeyDown);
                    n("body").append(this._dialogInput);
                    o = this._dialogInst = this._newInst(this._dialogInput, !1);
                    o.settings = {};
                    n.data(this._dialogInput[0], "datepicker", o)
                }
                return i(o.settings, f || {}), r = r && r.constructor === Date ? this._formatDate(o, r) : r, this._dialogInput.val(r), this._pos = e ? e.length ? e : [e.pageX, e.pageY] : null, this._pos || (h = document.documentElement.clientWidth, c = document.documentElement.clientHeight, l = document.documentElement.scrollLeft || document.body.scrollLeft, a = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + l, c / 2 - 150 + a]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), o.settings.onSelect = u, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), n.blockUI && n.blockUI(this.dpDiv), n.data(this._dialogInput[0], "datepicker", o), this
            },
            _destroyDatepicker: function(i) {
                var r, u = n(i),
                    f = n.data(i, "datepicker");
                u.hasClass(this.markerClassName) && (r = i.nodeName.toLowerCase(), n.removeData(i, "datepicker"), r === "input" ? (f.append.remove(), f.trigger.remove(), u.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : (r === "div" || r === "span") && u.removeClass(this.markerClassName).empty(), t === f && (t = null))
            },
            _enableDatepicker: function(t) {
                var i, r, u = n(t),
                    f = n.data(t, "datepicker");
                u.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), i === "input" ? (t.disabled = !1, f.trigger.filter("button").each(function() {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })) : (i === "div" || i === "span") && (r = u.children("." + this._inlineClass), r.children().removeClass("ui-state-disabled"), r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = n.map(this._disabledInputs, function(n) {
                    return n === t ? null : n
                }))
            },
            _disableDatepicker: function(t) {
                var i, r, u = n(t),
                    f = n.data(t, "datepicker");
                u.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), i === "input" ? (t.disabled = !0, f.trigger.filter("button").each(function() {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })) : (i === "div" || i === "span") && (r = u.children("." + this._inlineClass), r.children().addClass("ui-state-disabled"), r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = n.map(this._disabledInputs, function(n) {
                    return n === t ? null : n
                }), this._disabledInputs[this._disabledInputs.length] = t)
            },
            _isDisabledDatepicker: function(n) {
                if (!n) return !1;
                for (var t = 0; t < this._disabledInputs.length; t++)
                    if (this._disabledInputs[t] === n) return !0;
                return !1
            },
            _getInst: function(t) {
                try {
                    return n.data(t, "datepicker")
                } catch (i) {
                    throw "Missing instance data for this datepicker";
                }
            },
            _optionDatepicker: function(t, r, u) {
                var e, h, o, s, f = this._getInst(t);
                if (arguments.length === 2 && typeof r == "string") return r === "defaults" ? n.extend({}, n.datepicker._defaults) : f ? r === "all" ? n.extend({}, f.settings) : this._get(f, r) : null;
                e = r || {};
                typeof r == "string" && (e = {}, e[r] = u);
                f && (this._curInst === f && this._hideDatepicker(), h = this._getDateDatepicker(t, !0), o = this._getMinMaxDate(f, "min"), s = this._getMinMaxDate(f, "max"), i(f.settings, e), o !== null && e.dateFormat !== undefined && e.minDate === undefined && (f.settings.minDate = this._formatDate(f, o)), s !== null && e.dateFormat !== undefined && e.maxDate === undefined && (f.settings.maxDate = this._formatDate(f, s)), "disabled" in e && (e.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(n(t), f), this._autoSize(f), this._setDate(f, h), this._updateAlternate(f), this._updateDatepicker(f))
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
                    var r, s, h, u, f, o, c;
                    (r = n.datepicker._getInst(t), n.datepicker._curInst && n.datepicker._curInst !== r && (n.datepicker._curInst.dpDiv.stop(!0, !0), r && n.datepicker._datepickerShowing && n.datepicker._hideDatepicker(n.datepicker._curInst.input[0])), s = n.datepicker._get(r, "beforeShow"), h = s ? s.apply(t, [t, r]) : {}, h !== !1) && (i(r.settings, h), r.lastVal = null, n.datepicker._lastInput = t, n.datepicker._setDateFromField(r), n.datepicker._inDialog && (t.value = ""), n.datepicker._pos || (n.datepicker._pos = n.datepicker._findPos(t), n.datepicker._pos[1] += t.offsetHeight), u = !1, n(t).parents().each(function() {
                        return u |= n(this).css("position") === "fixed", !u
                    }), f = {
                        left: n.datepicker._pos[0],
                        top: n.datepicker._pos[1]
                    }, n.datepicker._pos = null, r.dpDiv.empty(), r.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px"
                    }), n.datepicker._updateDatepicker(r), f = n.datepicker._checkOffset(r, f, u), r.dpDiv.css({
                        position: n.datepicker._inDialog && n.blockUI ? "static" : u ? "fixed" : "absolute",
                        display: "none",
                        left: f.left + "px",
                        top: f.top + "px"
                    }), r.inline || (o = n.datepicker._get(r, "showAnim"), c = n.datepicker._get(r, "duration"), r.dpDiv.css("z-index", e(n(t)) + 1), n.datepicker._datepickerShowing = !0, n.effects && n.effects.effect[o] ? r.dpDiv.show(o, n.datepicker._get(r, "showOptions"), c) : r.dpDiv[o || "show"](o ? c : null), n.datepicker._shouldFocusInput(r) && r.input.trigger("focus"), n.datepicker._curInst = r))
                }
            },
            _updateDatepicker: function(i) {
                this.maxRows = 4;
                t = i;
                i.dpDiv.empty().append(this._generateHTML(i));
                this._attachHandlers(i);
                var r, u = this._getNumberOfMonths(i),
                    e = u[1],
                    o = i.dpDiv.find("." + this._dayOverClass + " a");
                o.length > 0 && f.apply(o.get(0));
                i.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
                e > 1 && i.dpDiv.addClass("ui-datepicker-multi-" + e).css("width", 17 * e + "em");
                i.dpDiv[(u[0] !== 1 || u[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
                i.dpDiv[(this._get(i, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
                i === n.datepicker._curInst && n.datepicker._datepickerShowing && n.datepicker._shouldFocusInput(i) && i.input.trigger("focus");
                i.yearshtml && (r = i.yearshtml, setTimeout(function() {
                    r === i.yearshtml && i.yearshtml && i.dpDiv.find("select.ui-datepicker-year:first").replaceWith(i.yearshtml);
                    r = i.yearshtml = null
                }, 0))
            },
            _shouldFocusInput: function(n) {
                return n.input && n.input.is(":visible") && !n.input.is(":disabled") && !n.input.is(":focus")
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
                var r, f, u, e, i = this._curInst;
                i && (!t || i === n.data(t, "datepicker")) && this._datepickerShowing && (r = this._get(i, "showAnim"), f = this._get(i, "duration"), u = function() {
                    n.datepicker._tidyDialog(i)
                }, n.effects && (n.effects.effect[r] || n.effects[r]) ? i.dpDiv.hide(r, n.datepicker._get(i, "showOptions"), f, u) : i.dpDiv[r === "slideDown" ? "slideUp" : r === "fadeIn" ? "fadeOut" : "hide"](r ? f : null, u), r || u(), this._datepickerShowing = !1, e = this._get(i, "onClose"), e && e.apply(i.input ? i.input[0] : null, [i.input ? i.input.val() : "", i]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), n.blockUI && (n.unblockUI(), n("body").append(this.dpDiv))), this._inDialog = !1)
            },
            _tidyDialog: function(n) {
                n.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
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
                r.inline ? this._updateDatepicker(r) : (this._hideDatepicker(), this._lastInput = r.input[0], typeof r.input[0] != "object" && r.input.trigger("focus"), this._lastInput = null)
            },
            _updateAlternate: function(t) {
                var i, r, u, f = this._get(t, "altField");
                f && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), r = this._getDate(t), u = this.formatDate(i, r, this._getFormatConfig(t)), n(f).val(u))
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
                for (var a, v, f = 0, y = (r ? r.shortYearCutoff : null) || this._defaults.shortYearCutoff, d = typeof y != "string" ? y : (new Date).getFullYear() % 100 + parseInt(y, 10), g = (r ? r.dayNamesShort : null) || this._defaults.dayNamesShort, nt = (r ? r.dayNames : null) || this._defaults.dayNames, tt = (r ? r.monthNamesShort : null) || this._defaults.monthNamesShort, it = (r ? r.monthNames : null) || this._defaults.monthNames, e = -1, s = -1, h = -1, p = -1, w = !1, u, l = function(n) {
                        var i = o + 1 < t.length && t.charAt(o + 1) === n;
                        return i && o++, i
                    }, c = function(n) {
                        var u = l(n),
                            r = n === "@" ? 14 : n === "!" ? 20 : n === "y" && u ? 4 : n === "o" ? 3 : 2,
                            e = n === "y" ? r : 1,
                            o = new RegExp("^\\d{" + e + "," + r + "}"),
                            t = i.substring(f).match(o);
                        if (!t) throw "Missing number at position " + f;
                        return f += t[0].length, parseInt(t[0], 10)
                    }, k = function(t, r, u) {
                        var e = -1,
                            o = n.map(l(t) ? u : r, function(n, t) {
                                return [
                                    [t, n]
                                ]
                            }).sort(function(n, t) {
                                return -(n[1].length - t[1].length)
                            });
                        if (n.each(o, function(n, t) {
                                var r = t[1];
                                if (i.substr(f, r.length).toLowerCase() === r.toLowerCase()) return e = t[0], f += r.length, !1
                            }), e !== -1) return e + 1;
                        throw "Unknown name at position " + f;
                    }, b = function() {
                        if (i.charAt(f) !== t.charAt(o)) throw "Unexpected literal at position " + f;
                        f++
                    }, o = 0; o < t.length; o++)
                    if (w) t.charAt(o) !== "'" || l("'") ? b() : w = !1;
                    else switch (t.charAt(o)) {
                        case "d":
                            h = c("d");
                            break;
                        case "D":
                            k("D", g, nt);
                            break;
                        case "o":
                            p = c("o");
                            break;
                        case "m":
                            s = c("m");
                            break;
                        case "M":
                            s = k("M", tt, it);
                            break;
                        case "y":
                            e = c("y");
                            break;
                        case "@":
                            u = new Date(c("@"));
                            e = u.getFullYear();
                            s = u.getMonth() + 1;
                            h = u.getDate();
                            break;
                        case "!":
                            u = new Date((c("!") - this._ticksTo1970) / 1e4);
                            e = u.getFullYear();
                            s = u.getMonth() + 1;
                            h = u.getDate();
                            break;
                        case "'":
                            l("'") ? b() : w = !0;
                            break;
                        default:
                            b()
                    }
                    if (f < i.length && (v = i.substr(f), !/^\s+/.test(v))) throw "Extra/unparsed characters found in date: " + v;
                if (e === -1 ? e = (new Date).getFullYear() : e < 100 && (e += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (e <= d ? 0 : -100)), p > -1) {
                    s = 1;
                    h = p;
                    do {
                        if (a = this._getDaysInMonth(e, s - 1), h <= a) break;
                        s++;
                        h -= a
                    } while (1)
                }
                if (u = this._daylightSavingAdjust(new Date(e, s - 1, h)), u.getFullYear() !== e || u.getMonth() + 1 !== s || u.getDate() !== h) throw "Invalid date";
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
            _ticksTo1970: (718685 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 864e9,
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
                        if (f(n))
                            while (r.length < i) r = "0" + r;
                        return r
                    },
                    s = function(n, t, i, r) {
                        return f(n) ? r[t] : i[t]
                    },
                    r = "",
                    o = !1;
                if (t)
                    for (u = 0; u < n.length; u++)
                        if (o) n.charAt(u) !== "'" || f("'") ? r += n.charAt(u) : o = !1;
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
                                r += f("y") ? t.getFullYear() : (t.getFullYear() % 100 < 10 ? "0" : "") + t.getFullYear() % 100;
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
                    }, t = 0; t < n.length; t++)
                    if (r) n.charAt(t) !== "'" || u("'") ? i += n.charAt(t) : r = !1;
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
            _get: function(n, t) {
                return n.settings[t] !== undefined ? n.settings[t] : this._defaults[t]
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
                f === n.selectedMonth && e === n.selectedYear || i || this._notifyChange(n);
                this._adjustInstDate(n);
                n.input && n.input.val(u ? "" : this._formatDate(n))
            },
            _getDate: function(n) {
                return !n.currentYear || n.input && n.input.val() === "" ? null : this._daylightSavingAdjust(new Date(n.currentYear, n.currentMonth, n.currentDay))
            },
            _attachHandlers: function(t) {
                var r = this._get(t, "stepMonths"),
                    i = "#" + t.id.replace(/\\\\/g, "\\");
                t.dpDiv.find("[data-handler]").map(function() {
                    var t = {
                        prev: function() {
                            n.datepicker._adjustDate(i, -r, "M")
                        },
                        next: function() {
                            n.datepicker._adjustDate(i, +r, "M")
                        },
                        hide: function() {
                            n.datepicker._hideDatepicker()
                        },
                        today: function() {
                            n.datepicker._gotoToday(i)
                        },
                        selectDay: function() {
                            return n.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        },
                        selectMonth: function() {
                            return n.datepicker._selectMonthYear(i, this, "M"), !1
                        },
                        selectYear: function() {
                            return n.datepicker._selectMonthYear(i, this, "Y"), !1
                        }
                    };
                    n(this).on(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function(n) {
                var b, s, rt, h, ut, k, ft, et, ri, c, ot, ui, fi, ei, oi, st, g, si, ht, nt, o, y, ct, p, lt, l, u, at, vt, yt, pt, tt, wt, i, bt, kt, d, a, it, dt = new Date,
                    gt = this._daylightSavingAdjust(new Date(dt.getFullYear(), dt.getMonth(), dt.getDate())),
                    f = this._get(n, "isRTL"),
                    li = this._get(n, "showButtonPanel"),
                    hi = this._get(n, "hideIfNoPrevNext"),
                    ni = this._get(n, "navigationAsDateFormat"),
                    e = this._getNumberOfMonths(n),
                    ai = this._get(n, "showCurrentAtPos"),
                    ci = this._get(n, "stepMonths"),
                    ti = e[0] !== 1 || e[1] !== 1,
                    ii = this._daylightSavingAdjust(n.currentDay ? new Date(n.currentYear, n.currentMonth, n.currentDay) : new Date(9999, 9, 9)),
                    w = this._getMinMaxDate(n, "min"),
                    v = this._getMinMaxDate(n, "max"),
                    t = n.drawMonth - ai,
                    r = n.drawYear;
                if (t < 0 && (t += 12, r--), v)
                    for (b = this._daylightSavingAdjust(new Date(v.getFullYear(), v.getMonth() - e[0] * e[1] + 1, v.getDate())), b = w && b < w ? w : b; this._daylightSavingAdjust(new Date(r, t, 1)) > b;) t--, t < 0 && (t = 11, r--);
                for (n.drawMonth = t, n.drawYear = r, s = this._get(n, "prevText"), s = ni ? this.formatDate(s, this._daylightSavingAdjust(new Date(r, t - ci, 1)), this._getFormatConfig(n)) : s, rt = this._canAdjustMonth(n, -1, r, t) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (f ? "e" : "w") + "'>" + s + "<\/span><\/a>" : hi ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (f ? "e" : "w") + "'>" + s + "<\/span><\/a>", h = this._get(n, "nextText"), h = ni ? this.formatDate(h, this._daylightSavingAdjust(new Date(r, t + ci, 1)), this._getFormatConfig(n)) : h, ut = this._canAdjustMonth(n, 1, r, t) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + h + "'><span class='ui-icon ui-icon-circle-triangle-" + (f ? "w" : "e") + "'>" + h + "<\/span><\/a>" : hi ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + h + "'><span class='ui-icon ui-icon-circle-triangle-" + (f ? "w" : "e") + "'>" + h + "<\/span><\/a>", k = this._get(n, "currentText"), ft = this._get(n, "gotoCurrent") && n.currentDay ? ii : gt, k = ni ? this.formatDate(k, ft, this._getFormatConfig(n)) : k, et = n.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(n, "closeText") + "<\/button>", ri = li ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (f ? et : "") + (this._isInRange(n, ft) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + k + "<\/button>" : "") + (f ? "" : et) + "<\/div>" : "", c = parseInt(this._get(n, "firstDay"), 10), c = isNaN(c) ? 0 : c, ot = this._get(n, "showWeek"), ui = this._get(n, "dayNames"), fi = this._get(n, "dayNamesMin"), ei = this._get(n, "monthNames"), oi = this._get(n, "monthNamesShort"), st = this._get(n, "beforeShowDay"), g = this._get(n, "showOtherMonths"), si = this._get(n, "selectOtherMonths"), ht = this._getDefaultDate(n), nt = "", y = 0; y < e[0]; y++) {
                    for (ct = "", this.maxRows = 4, p = 0; p < e[1]; p++) {
                        if (lt = this._daylightSavingAdjust(new Date(r, t, n.selectedDay)), l = " ui-corner-all", u = "", ti) {
                            if (u += "<div class='ui-datepicker-group", e[1] > 1) switch (p) {
                                case 0:
                                    u += " ui-datepicker-group-first";
                                    l = " ui-corner-" + (f ? "right" : "left");
                                    break;
                                case e[1] - 1:
                                    u += " ui-datepicker-group-last";
                                    l = " ui-corner-" + (f ? "left" : "right");
                                    break;
                                default:
                                    u += " ui-datepicker-group-middle";
                                    l = ""
                            }
                            u += "'>"
                        }
                        for (u += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + l + "'>" + (/all|left/.test(l) && y === 0 ? f ? ut : rt : "") + (/all|right/.test(l) && y === 0 ? f ? rt : ut : "") + this._generateMonthYearHeader(n, t, r, w, v, y > 0 || p > 0, ei, oi) + "<\/div><table class='ui-datepicker-calendar'><thead><tr>", at = ot ? "<th class='ui-datepicker-week-col'>" + this._get(n, "weekHeader") + "<\/th>" : "", o = 0; o < 7; o++) vt = (o + c) % 7, at += "<th scope='col'" + ((o + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + ui[vt] + "'>" + fi[vt] + "<\/span><\/th>";
                        for (u += at + "<\/tr><\/thead><tbody>", yt = this._getDaysInMonth(r, t), r === n.selectedYear && t === n.selectedMonth && (n.selectedDay = Math.min(n.selectedDay, yt)), pt = (this._getFirstDayOfMonth(r, t) - c + 7) % 7, tt = Math.ceil((pt + yt) / 7), wt = ti ? this.maxRows > tt ? this.maxRows : tt : tt, this.maxRows = wt, i = this._daylightSavingAdjust(new Date(r, t, 1 - pt)), bt = 0; bt < wt; bt++) {
                            for (u += "<tr>", kt = ot ? "<td class='ui-datepicker-week-col'>" + this._get(n, "calculateWeek")(i) + "<\/td>" : "", o = 0; o < 7; o++) d = st ? st.apply(n.input ? n.input[0] : null, [i]) : [!0, ""], a = i.getMonth() !== t, it = a && !si || !d[0] || w && i < w || v && i > v, kt += "<td class='" + ((o + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (a ? " ui-datepicker-other-month" : "") + (i.getTime() === lt.getTime() && t === n.selectedMonth && n._keyEvent || ht.getTime() === i.getTime() && ht.getTime() === lt.getTime() ? " " + this._dayOverClass : "") + (it ? " " + this._unselectableClass + " ui-state-disabled" : "") + (a && !g ? "" : " " + d[1] + (i.getTime() === ii.getTime() ? " " + this._currentClass : "") + (i.getTime() === gt.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!a || g) && d[2] ? " title='" + d[2].replace(/'/g, "&#39;") + "'" : "") + (it ? "" : " data-handler='selectDay' data-event='click' data-month='" + i.getMonth() + "' data-year='" + i.getFullYear() + "'") + ">" + (a && !g ? "&#xa0;" : it ? "<span class='ui-state-default'>" + i.getDate() + "<\/span>" : "<a class='ui-state-default" + (i.getTime() === gt.getTime() ? " ui-state-highlight" : "") + (i.getTime() === ii.getTime() ? " ui-state-active" : "") + (a ? " ui-priority-secondary" : "") + "' href='#'>" + i.getDate() + "<\/a>") + "<\/td>", i.setDate(i.getDate() + 1), i = this._daylightSavingAdjust(i);
                            u += kt + "<\/tr>"
                        }
                        t++;
                        t > 11 && (t = 0, r++);
                        u += "<\/tbody><\/table>" + (ti ? "<\/div>" + (e[0] > 0 && p === e[1] - 1 ? "<div class='ui-datepicker-row-break'><\/div>" : "") : "");
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
                if (g || (c += l + (f || !(w && b) ? "&#xa0;" : "")), !n.yearshtml)
                    if (n.yearshtml = "", f || !b) c += "<span class='ui-datepicker-year'>" + i + "<\/span>";
                    else {
                        for (v = this._get(n, "yearRange").split(":"), y = (new Date).getFullYear(), p = function(n) {
                                var t = n.match(/c[+\-].*/) ? i + parseInt(n.substring(1), 10) : n.match(/[+\-].*/) ? y + parseInt(n, 10) : parseInt(n, 10);
                                return isNaN(t) ? y : t
                            }, s = p(v[0]), a = Math.max(s, p(v[1] || "")), s = r ? Math.max(s, r.getFullYear()) : s, a = u ? Math.min(a, u.getFullYear()) : a, n.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; s <= a; s++) n.yearshtml += "<option value='" + s + "'" + (s === i ? " selected='selected'" : "") + ">" + s + "<\/option>";
                        n.yearshtml += "<\/select>";
                        c += n.yearshtml;
                        n.yearshtml = null
                    }
                return c += this._get(n, "yearSuffix"), g && (c += (f || !(w && b) ? "&#xa0;" : "") + l), c + "<\/div>"
            },
            _adjustInstDate: function(n, t, i) {
                var u = n.selectedYear + (i === "Y" ? t : 0),
                    f = n.selectedMonth + (i === "M" ? t : 0),
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
                var i, f, e = this._getMinMaxDate(n, "min"),
                    o = this._getMinMaxDate(n, "max"),
                    r = null,
                    u = null,
                    s = this._get(n, "yearRange");
                return s && (i = s.split(":"), f = (new Date).getFullYear(), r = parseInt(i[0], 10), u = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += f), i[1].match(/[+\-].*/) && (u += f)), (!e || t.getTime() >= e.getTime()) && (!o || t.getTime() <= o.getTime()) && (!r || t.getFullYear() >= r) && (!u || t.getFullYear() <= u)
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
        }), n.fn.datepicker = function(t) {
            if (!this.length) return this;
            if (!n.datepicker.initialized) {
                n(document).on("mousedown", n.datepicker._checkExternalClick);
                n.datepicker.initialized = !0
            }
            n("#" + n.datepicker._mainDivId).length === 0 && n("body").append(n.datepicker.dpDiv);
            var i = Array.prototype.slice.call(arguments, 1);
            return typeof t == "string" && (t === "isDisabled" || t === "getDate" || t === "widget") ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i)) : t === "option" && arguments.length === 2 && typeof arguments[1] == "string" ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i)) : this.each(function() {
                typeof t == "string" ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this].concat(i)) : n.datepicker._attachDatepicker(this, t)
            })
        }, n.datepicker = new r, n.datepicker.initialized = !1, n.datepicker.uuid = (new Date).getTime(), n.datepicker.version = "@VERSION", n.datepicker
    }),
    function(n) {
        n.extend({
            tablesorter: new function() {
                function r(n, t) {
                    e(n + "," + ((new Date).getTime() - t.getTime()) + "ms")
                }

                function e(n) {
                    typeof console != "undefined" && typeof console.debug != "undefined" ? console.log(n) : alert(n)
                }

                function h(t, i) {
                    var f, o, r, u;
                    if (t.config.debug && (f = ""), o = t.tBodies[0].rows, t.tBodies[0].rows[0]) {
                        var s = [],
                            h = o[0].cells,
                            l = h.length;
                        for (r = 0; r < l; r++) u = !1, n.metadata && n(i[r]).metadata() && n(i[r]).metadata().sorter ? u = c(n(i[r]).metadata().sorter) : t.config.headers[r] && t.config.headers[r].sorter && (u = c(t.config.headers[r].sorter)), u || (u = w(t, h[r])), t.config.debug && (f += "column:" + r + " parser:" + u.id + "\n"), s.push(u)
                    }
                    return t.config.debug && e(f), s
                }

                function w(i, r) {
                    for (var f = t.length, u = 1; u < f; u++)
                        if (t[u].is(n.trim(a(i.config, r)), i, r)) return t[u];
                    return t[0]
                }

                function c(n) {
                    for (var r = t.length, i = 0; i < r; i++)
                        if (t[i].id.toLowerCase() == n.toLowerCase()) return t[i];
                    return !1
                }

                function l(t) {
                    var s, u, e, f, i;
                    t.config.debug && (s = new Date);
                    var h = t.tBodies[0] && t.tBodies[0].rows.length || 0,
                        c = t.tBodies[0].rows[0] && t.tBodies[0].rows[0].cells.length || 0,
                        l = t.config.parsers,
                        o = {
                            row: [],
                            normalized: []
                        };
                    for (u = 0; u < h; ++u) {
                        for (e = t.tBodies[0].rows[u], f = [], o.row.push(n(e)), i = 0; i < c; ++i) f.push(l[i].format(a(t.config, e.cells[i]), t, e.cells[i]));
                        f.push(u);
                        o.normalized.push(f);
                        f = null
                    }
                    return t.config.debug && r("Building cache for " + h + " rows:", s), o
                }

                function a(t, i) {
                    return i ? t.textExtraction == "simple" ? i.childNodes[0] && i.childNodes[0].hasChildNodes() ? i.childNodes[0].innerHTML : i.innerHTML : typeof t.textExtraction == "function" ? t.textExtraction(i) : n(i).text() : ""
                }

                function o(t, i) {
                    var c, u, h, y, e;
                    t.config.debug && (c = new Date);
                    var l = i,
                        a = l.row,
                        f = l.normalized,
                        p = f.length,
                        v = f[0].length - 1,
                        w = n(t.tBodies[0]),
                        o = [];
                    for (u = 0; u < p; u++)
                        if (o.push(a[f[u][v]]), !t.config.appender)
                            for (h = a[f[u][v]], y = h.length, e = 0; e < y; e++) w[0].appendChild(h[e]);
                    t.config.appender && t.config.appender(t, o);
                    o = null;
                    t.config.debug && r("Rebuilt table:", c);
                    s(t);
                    setTimeout(function() {
                        n(t).trigger("sortEnd")
                    }, 0)
                }

                function b(t) {
                    var u, o, f, i;
                    for (t.config.debug && (u = new Date), o = n.metadata ? !0 : !1, f = [], i = 0; i < t.tHead.rows.length; i++) f[i] = 0;
                    return $tableHeaders = n("thead th", t), $tableHeaders.each(function(i) {
                        this.count = 0;
                        this.column = i;
                        this.order = nt(t.config.sortInitialOrder);
                        (d(this) || g(t, i)) && (this.sortDisabled = !0);
                        this.sortDisabled || n(this).addClass(t.config.cssHeader);
                        t.config.headerList[i] = this
                    }), t.config.debug && (r("Built headers:", u), e($tableHeaders)), $tableHeaders
                }

                function d(t) {
                    return n.metadata && n(t).metadata().sorter === !1 ? !0 : !1
                }

                function g(n, t) {
                    return n.config.headers[t] && n.config.headers[t].sorter === !1 ? !0 : !1
                }

                function s(n) {
                    for (var i = n.config.widgets, r = i.length, t = 0; t < r; t++) v(i[t]).format(n)
                }

                function v(n) {
                    for (var i = u.length, t = 0; t < i; t++)
                        if (u[t].id.toLowerCase() == n.toLowerCase()) return u[t]
                }

                function nt(n) {
                    return i = typeof n != "Number" ? n.toLowerCase() == "desc" ? 1 : 0 : n == 1 ? n : 0
                }

                function tt(n, t) {
                    for (var r = t.length, i = 0; i < r; i++)
                        if (t[i][0] == n) return !0;
                    return !1
                }

                function y(t, i, r, u) {
                    var e, o, f;
                    for (i.removeClass(u[0]).removeClass(u[1]), e = [], i.each(function() {
                            this.sortDisabled || (e[this.column] = n(this))
                        }), o = r.length, f = 0; f < o; f++) e[r[f][0]].addClass(u[r[f][1]])
                }

                function it(t) {
                    var r = t.config,
                        i;
                    r.widthFixed && (i = n("<colgroup>"), n("tr:first td", t.tBodies[0]).each(function() {
                        i.append(n("<col>").css("width", n(this).width()))
                    }), n(t).prepend(i))
                }

                function rt(n, t) {
                    for (var r, u, f = n.config, e = t.length, i = 0; i < e; i++) r = t[i], u = f.headerList[r[0]], u.count = r[1], u.count++
                }

                function f(n) {
                    var t = typeof n == "function",
                        i = t && (n.name && ["", n.name] || n.toString().match(/function ([^\(]+)/));
                    return !t && "not a function" || i && i[1] || "anonymous"
                }

                function p(table, sortList, cache) {
                    var sortTime, dynamicExp, l, orgOrderCol, i;
                    for (table.config.debug && (sortTime = new Date), dynamicExp = "var sortWrapper = function(a,b) {", l = sortList.length, i = 0; i < l; i++) {
                        var c = sortList[i][0],
                            order = sortList[i][1],
                            s = st(table.config.parsers, c) == "text" ? order == 0 ? f(ut) : f(ft) : order == 0 ? f(et) : f(ot),
                            e = "e" + i;
                        dynamicExp += "var " + e + " = " + s + "(a[" + c + "],b[" + c + "]); ";
                        dynamicExp += "if(" + e + ") { return " + e + "; } ";
                        dynamicExp += "else { "
                    }
                    for (orgOrderCol = cache.normalized[0].length - 1, dynamicExp += "return a[" + orgOrderCol + "]-b[" + orgOrderCol + "];", i = 0; i < l; i++) dynamicExp += "}; ";
                    return dynamicExp += "return 0; ", dynamicExp += "}; ", eval(dynamicExp), cache.normalized.sort(sortWrapper), table.config.debug && r("Sorting on " + sortList.toString() + " and dir " + order + " time:", sortTime), cache
                }

                function ut(n, t) {
                    return n < t ? -1 : n > t ? 1 : 0
                }

                function ft(n, t) {
                    return t < n ? -1 : t > n ? 1 : 0
                }

                function et(n, t) {
                    return n - t
                }

                function ot(n, t) {
                    return t - n
                }

                function st(n, t) {
                    return n[t].type
                }
                var t = [],
                    u = [];
                this.defaults = {
                    cssHeader: "header",
                    cssAsc: "headerSortUp",
                    cssDesc: "headerSortDown",
                    sortInitialOrder: "asc",
                    sortMultiSortKey: "shiftKey",
                    sortForce: null,
                    sortAppend: null,
                    textExtraction: "simple",
                    parsers: {},
                    widgets: [],
                    widgetZebra: {
                        css: ["even", "odd"]
                    },
                    headers: {},
                    widthFixed: !1,
                    cancelSelection: !0,
                    sortList: [],
                    headerList: [],
                    dateFormat: "us",
                    decimal: ".",
                    debug: !1
                };
                this.benchmark = r;
                this.construct = function(t) {
                    return this.each(function() {
                        var r, u, f, i, c, e;
                        this.tHead && this.tBodies && (c = 0, this.config = {}, i = n.extend(this.config, n.tablesorter.defaults, t), r = n(this), u = b(this), this.config.parsers = h(this, u), f = l(this), e = [i.cssDesc, i.cssAsc], it(this), u.click(function(t) {
                            var v, w, h, l, s, c, a;
                            if (r.trigger("sortStart"), v = r[0].tBodies[0] && r[0].tBodies[0].rows.length || 0, !this.sortDisabled && v > 0) {
                                if (w = n(this), h = this.column, this.order = this.count++ % 2, t[i.sortMultiSortKey])
                                    if (tt(h, i.sortList))
                                        for (s = 0; s < i.sortList.length; s++) c = i.sortList[s], a = i.headerList[c[0]], c[0] == h && (a.count = c[1], a.count++, c[1] = a.count % 2);
                                    else i.sortList.push([h, this.order]);
                                else {
                                    if (i.sortList = [], i.sortForce != null)
                                        for (l = i.sortForce, s = 0; s < l.length; s++) l[s][0] != h && i.sortList.push(l[s]);
                                    i.sortList.push([h, this.order])
                                }
                                return setTimeout(function() {
                                    y(r[0], u, i.sortList, e);
                                    o(r[0], p(r[0], i.sortList, f))
                                }, 1), !1
                            }
                        }).mousedown(function() {
                            if (i.cancelSelection) return this.onselectstart = function() {
                                return !1
                            }, !1
                        }), r.bind("update", function() {
                            this.config.parsers = h(this, u);
                            f = l(this)
                        }).bind("sorton", function(t, r) {
                            n(this).trigger("sortStart");
                            i.sortList = r;
                            var s = i.sortList;
                            rt(this, s);
                            y(this, u, s, e);
                            o(this, p(this, s, f))
                        }).bind("appendCache", function() {
                            o(this, f)
                        }).bind("applyWidgetId", function(n, t) {
                            v(t).format(this)
                        }).bind("applyWidgets", function() {
                            s(this)
                        }), n.metadata && n(this).metadata() && n(this).metadata().sortlist && (i.sortList = n(this).metadata().sortlist), i.sortList.length > 0 && r.trigger("sorton", [i.sortList]), s(this))
                    })
                };
                this.addParser = function(n) {
                    for (var u = t.length, r = !0, i = 0; i < u; i++) t[i].id.toLowerCase() == n.id.toLowerCase() && (r = !1);
                    r && t.push(n)
                };
                this.addWidget = function(n) {
                    u.push(n)
                };
                this.formatFloat = function(n) {
                    var t = parseFloat(n);
                    return isNaN(t) ? 0 : t
                };
                this.formatInt = function(n) {
                    var t = parseInt(n);
                    return isNaN(t) ? 0 : t
                };
                this.isDigit = function(t, i) {
                    var r = "\\" + i.decimal,
                        u = "/(^[+]?0(" + r + "0+)?$)|(^([-+]?[1-9][0-9]*)$)|(^([-+]?((0?|[1-9][0-9]*)" + r + "(0*[1-9][0-9]*)))$)|(^[-+]?[1-9]+[0-9]*" + r + "0+$)/";
                    return RegExp(u).test(n.trim(t))
                };
                this.clearTableBody = function(n) {
                    function t() {
                        while (this.firstChild) this.removeChild(this.firstChild)
                    }
                    t.apply(n.tBodies[0])
                }
            }
        });
        n.fn.extend({
            tablesorter: n.tablesorter.construct
        });
        var t = n.tablesorter;
        t.addParser({
            id: "text",
            is: function() {
                return !0
            },
            format: function(t) {
                return n.trim(t.toLowerCase())
            },
            type: "text"
        });
        t.addParser({
            id: "digit",
            is: function(t, i) {
                var r = i.config;
                return n.tablesorter.isDigit(t, r)
            },
            format: function(t) {
                return n.tablesorter.formatFloat(t)
            },
            type: "numeric"
        });
        t.addParser({
            id: "currency",
            is: function(n) {
                return /^[£$€?.]/.test(n)
            },
            format: function(t) {
                return n.tablesorter.formatFloat(t.replace(new RegExp(/[^0-9.]/g), ""))
            },
            type: "numeric"
        });
        t.addParser({
            id: "ipAddress",
            is: function(n) {
                return /^\d{2,3}[\.]\d{2,3}[\.]\d{2,3}[\.]\d{2,3}$/.test(n)
            },
            format: function(t) {
                for (var i, u = t.split("."), f = "", e = u.length, r = 0; r < e; r++) i = u[r], f += i.length == 2 ? "0" + i : i;
                return n.tablesorter.formatFloat(f)
            },
            type: "numeric"
        });
        t.addParser({
            id: "url",
            is: function(n) {
                return /^(https?|ftp|file):\/\/$/.test(n)
            },
            format: function(n) {
                return jQuery.trim(n.replace(new RegExp(/(https?|ftp|file):\/\//), ""))
            },
            type: "text"
        });
        t.addParser({
            id: "isoDate",
            is: function(n) {
                return /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(n)
            },
            format: function(t) {
                return n.tablesorter.formatFloat(t != "" ? new Date(t.replace(new RegExp(/-/g), "/")).getTime() : "0")
            },
            type: "numeric"
        });
        t.addParser({
            id: "percent",
            is: function(t) {
                return /\%$/.test(n.trim(t))
            },
            format: function(t) {
                return n.tablesorter.formatFloat(t.replace(new RegExp(/%/g), ""))
            },
            type: "numeric"
        });
        t.addParser({
            id: "usLongDate",
            is: function(n) {
                return n.match(new RegExp(/^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))$/))
            },
            format: function(t) {
                return n.tablesorter.formatFloat(new Date(t).getTime())
            },
            type: "numeric"
        });
        t.addParser({
            id: "shortDate",
            is: function(n) {
                return /\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/.test(n)
            },
            format: function(t, i) {
                var r = i.config;
                return t = t.replace(/\-/g, "/"), r.dateFormat == "us" ? t = t.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$1/$2") : r.dateFormat == "uk" ? t = t.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$2/$1") : (r.dateFormat == "dd/mm/yy" || r.dateFormat == "dd-mm-yy") && (t = t.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/, "$1/$2/$3")), n.tablesorter.formatFloat(new Date(t).getTime())
            },
            type: "numeric"
        });
        t.addParser({
            id: "time",
            is: function(n) {
                return /^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))$/.test(n)
            },
            format: function(t) {
                return n.tablesorter.formatFloat(new Date("2000/01/01 " + t).getTime())
            },
            type: "numeric"
        });
        t.addParser({
            id: "metadata",
            is: function() {
                return !1
            },
            format: function(t, i, r) {
                var u = i.config,
                    f = u.parserMetadataName ? u.parserMetadataName : "sortValue";
                return n(r).metadata()[f]
            },
            type: "numeric"
        });
        t.addWidget({
            id: "zebra",
            format: function(t) {
                if (t.config.debug) var i = new Date;
                n("tr:visible", t.tBodies[0]).filter(":even").removeClass(t.config.widgetZebra.css[1]).addClass(t.config.widgetZebra.css[0]).end().filter(":odd").removeClass(t.config.widgetZebra.css[0]).addClass(t.config.widgetZebra.css[1]);
                t.config.debug && n.tablesorter.benchmark("Applying Zebra widget", i)
            }
        })
    }(jQuery),
    function() {
        (function(n) {
            var r = this || eval("this"),
                t = r.document,
                f = r.navigator,
                i = r.jQuery,
                u = r.JSON;
            (function(n) {
                "function" == typeof define && define.amd ? define(["exports", "require"], n) : "object" == typeof exports && "object" == typeof module ? n(module.exports || exports) : n(r.ko = {})
            })(function(e, o) {
                function b(n, t) {
                    return null === n || typeof n in nt ? n === t : !1
                }

                function tt(t, i) {
                    var r;
                    return function() {
                        r || (r = s.a.setTimeout(function() {
                            r = n;
                            t()
                        }, i))
                    }
                }

                function it(n, t) {
                    var i;
                    return function() {
                        clearTimeout(i);
                        i = s.a.setTimeout(n, t)
                    }
                }

                function rt(n, t) {
                    t && t !== v ? "beforeChange" === t ? this.Ob(n) : this.Ja(n, t) : this.Pb(n)
                }

                function ut(n, t) {
                    null !== t && t.k && t.k()
                }

                function ft(n, t) {
                    var i = this.Mc,
                        r = i[h];
                    r.T || (this.ob && this.Oa[t] ? (i.Sb(t, n, this.Oa[t]), this.Oa[t] = null, --this.ob) : r.s[t] || i.Sb(t, n, r.t ? {
                        $: n
                    } : i.yc(n)), n.Ha && n.Hc())
                }

                function k(n, t, i, r) {
                    s.d[n] = {
                        init: function(n, u, f, e, o) {
                            var c, h;
                            return s.m(function() {
                                var l = u(),
                                    f = s.a.c(l),
                                    f = !i != !f,
                                    e = !h;
                                (e || t || f !== c) && (e && s.xa.Ca() && (h = s.a.wa(s.f.childNodes(n), !0)), f ? (e || s.f.fa(n, s.a.wa(h)), s.hb(r ? r(o, l) : o, n)) : s.f.za(n), c = f)
                            }, null, {
                                i: n
                            }), {
                                controlsDescendantBindings: !0
                            }
                        }
                    };
                    s.h.va[n] = !1;
                    s.f.aa[n] = !0
                }
                var s = "undefined" != typeof e ? e : {},
                    nt, v, l, y, a, p, h, d, g, w;
                s.b = function(n, t) {
                    for (var i = n.split("."), r = s, u = 0; u < i.length - 1; u++) r = r[i[u]];
                    r[i[i.length - 1]] = t
                };
                s.H = function(n, t, i) {
                    n[t] = i
                };
                s.version = "3.4.2";
                s.b("version", s.version);
                s.options = {
                    deferUpdates: !1,
                    useOnlyNativeEvents: !1
                };
                s.a = function() {
                    function o(n, t) {
                        for (var i in n) n.hasOwnProperty(i) && t(i, n[i])
                    }

                    function l(n, t) {
                        if (t)
                            for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
                        return n
                    }

                    function a(n, t) {
                        return n.__proto__ = t, n
                    }

                    function v(n, t, i, r) {
                        var u = n[t].match(c) || [];
                        s.a.r(i.match(c), function(n) {
                            s.a.ra(u, n, r)
                        });
                        n[t] = u.join(" ")
                    }
                    var y = {
                        __proto__: []
                    }
                    instanceof Array, w = "function" == typeof Symbol, h = {}, p = {};
                    h[f && /Firefox\/2/i.test(f.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"];
                    h.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
                    o(h, function(n, t) {
                        if (t.length)
                            for (var i = 0, r = t.length; i < r; i++) p[t[i]] = n
                    });
                    var b = {
                            propertychange: !0
                        },
                        e = t && function() {
                            for (var i = 3, r = t.createElement("div"), u = r.getElementsByTagName("i"); r.innerHTML = "<!--[if gt IE " + ++i + "]><i><\/i><![endif]-->", u[0];);
                            return 4 < i ? i : n
                        }(),
                        c = /\S+/g;
                    return {
                        gc: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
                        r: function(n, t) {
                            for (var i = 0, r = n.length; i < r; i++) t(n[i], i)
                        },
                        o: function(n, t) {
                            if ("function" == typeof Array.prototype.indexOf) return Array.prototype.indexOf.call(n, t);
                            for (var i = 0, r = n.length; i < r; i++)
                                if (n[i] === t) return i;
                            return -1
                        },
                        Vb: function(n, t, i) {
                            for (var r = 0, u = n.length; r < u; r++)
                                if (t.call(i, n[r], r)) return n[r];
                            return null
                        },
                        Na: function(n, t) {
                            var i = s.a.o(n, t);
                            0 < i ? n.splice(i, 1) : 0 === i && n.shift()
                        },
                        Wb: function(n) {
                            n = n || [];
                            for (var i = [], t = 0, r = n.length; t < r; t++) 0 > s.a.o(i, n[t]) && i.push(n[t]);
                            return i
                        },
                        ib: function(n, t) {
                            n = n || [];
                            for (var r = [], i = 0, u = n.length; i < u; i++) r.push(t(n[i], i));
                            return r
                        },
                        Ma: function(n, t) {
                            n = n || [];
                            for (var r = [], i = 0, u = n.length; i < u; i++) t(n[i], i) && r.push(n[i]);
                            return r
                        },
                        ta: function(n, t) {
                            if (t instanceof Array) n.push.apply(n, t);
                            else
                                for (var i = 0, r = t.length; i < r; i++) n.push(t[i]);
                            return n
                        },
                        ra: function(n, t, i) {
                            var r = s.a.o(s.a.Bb(n), t);
                            0 > r ? i && n.push(t) : i || n.splice(r, 1)
                        },
                        la: y,
                        extend: l,
                        $a: a,
                        ab: y ? a : l,
                        D: o,
                        Ea: function(n, t) {
                            if (!n) return n;
                            var r = {};
                            for (var i in n) n.hasOwnProperty(i) && (r[i] = t(n[i], i, n));
                            return r
                        },
                        rb: function(n) {
                            for (; n.firstChild;) s.removeNode(n.firstChild)
                        },
                        nc: function(n) {
                            n = s.a.W(n);
                            for (var r = (n[0] && n[0].ownerDocument || t).createElement("div"), i = 0, u = n.length; i < u; i++) r.appendChild(s.ba(n[i]));
                            return r
                        },
                        wa: function(n, t) {
                            for (var r, i = 0, f = n.length, u = []; i < f; i++) r = n[i].cloneNode(!0), u.push(t ? s.ba(r) : r);
                            return u
                        },
                        fa: function(n, t) {
                            if (s.a.rb(n), t)
                                for (var i = 0, r = t.length; i < r; i++) n.appendChild(t[i])
                        },
                        uc: function(n, t) {
                            var r = n.nodeType ? [n] : n;
                            if (0 < r.length) {
                                for (var f = r[0], e = f.parentNode, i = 0, u = t.length; i < u; i++) e.insertBefore(t[i], f);
                                for (i = 0, u = r.length; i < u; i++) s.removeNode(r[i])
                            }
                        },
                        Ba: function(n, t) {
                            if (n.length) {
                                for (t = 8 === t.nodeType && t.parentNode || t; n.length && n[0].parentNode !== t;) n.splice(0, 1);
                                for (; 1 < n.length && n[n.length - 1].parentNode !== t;) n.length--;
                                if (1 < n.length) {
                                    var i = n[0],
                                        r = n[n.length - 1];
                                    for (n.length = 0; i !== r;) n.push(i), i = i.nextSibling;
                                    n.push(r)
                                }
                            }
                            return n
                        },
                        wc: function(n, t) {
                            7 > e ? n.setAttribute("selected", t) : n.selected = t
                        },
                        cb: function(t) {
                            return null === t || t === n ? "" : t.trim ? t.trim() : t.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
                        },
                        sd: function(n, t) {
                            return n = n || "", t.length > n.length ? !1 : n.substring(0, t.length) === t
                        },
                        Rc: function(n, t) {
                            if (n === t) return !0;
                            if (11 === n.nodeType) return !1;
                            if (t.contains) return t.contains(3 === n.nodeType ? n.parentNode : n);
                            if (t.compareDocumentPosition) return 16 == (t.compareDocumentPosition(n) & 16);
                            for (; n && n != t;) n = n.parentNode;
                            return !!n
                        },
                        qb: function(n) {
                            return s.a.Rc(n, n.ownerDocument.documentElement)
                        },
                        Tb: function(n) {
                            return !!s.a.Vb(n, s.a.qb)
                        },
                        A: function(n) {
                            return n && n.tagName && n.tagName.toLowerCase()
                        },
                        Zb: function(n) {
                            return s.onError ? function() {
                                try {
                                    return n.apply(this, arguments)
                                } catch (t) {
                                    throw s.onError && s.onError(t), t;
                                }
                            } : n
                        },
                        setTimeout: function(n, t) {
                            return setTimeout(s.a.Zb(n), t)
                        },
                        dc: function(n) {
                            setTimeout(function() {
                                s.onError && s.onError(n);
                                throw n;
                            }, 0)
                        },
                        q: function(n, t, r) {
                            var u = s.a.Zb(r),
                                f, o;
                            if (r = e && b[t], s.options.useOnlyNativeEvents || r || !i)
                                if (r || "function" != typeof n.addEventListener)
                                    if ("undefined" != typeof n.attachEvent) f = function(t) {
                                        u.call(n, t)
                                    }, o = "on" + t, n.attachEvent(o, f), s.a.G.qa(n, function() {
                                        n.detachEvent(o, f)
                                    });
                                    else throw Error("Browser doesn't support addEventListener or attachEvent");
                            else n.addEventListener(t, u, !1);
                            else i(n).bind(t, u)
                        },
                        Fa: function(n, u) {
                            if (!n || !n.nodeType) throw Error("element must be a DOM node when calling triggerEvent");
                            var f;
                            if ("input" === s.a.A(n) && n.type && "click" == u.toLowerCase() ? (f = n.type, f = "checkbox" == f || "radio" == f) : f = !1, s.options.useOnlyNativeEvents || !i || f)
                                if ("function" == typeof t.createEvent)
                                    if ("function" == typeof n.dispatchEvent) f = t.createEvent(p[u] || "HTMLEvents"), f.initEvent(u, !0, !0, r, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, n), n.dispatchEvent(f);
                                    else throw Error("The supplied element doesn't support dispatchEvent");
                            else if (f && n.click) n.click();
                            else if ("undefined" != typeof n.fireEvent) n.fireEvent("on" + u);
                            else throw Error("Browser doesn't support triggering events");
                            else i(n).trigger(u)
                        },
                        c: function(n) {
                            return s.I(n) ? n() : n
                        },
                        Bb: function(n) {
                            return s.I(n) ? n.p() : n
                        },
                        fb: function(n, t, i) {
                            var r;
                            t && ("object" == typeof n.classList ? (r = n.classList[i ? "add" : "remove"], s.a.r(t.match(c), function(t) {
                                r.call(n.classList, t)
                            })) : "string" == typeof n.className.baseVal ? v(n.className, "baseVal", t, i) : v(n, "className", t, i))
                        },
                        bb: function(t, i) {
                            var r = s.a.c(i),
                                u;
                            (null === r || r === n) && (r = "");
                            u = s.f.firstChild(t);
                            !u || 3 != u.nodeType || s.f.nextSibling(u) ? s.f.fa(t, [t.ownerDocument.createTextNode(r)]) : u.data = r;
                            s.a.Wc(t)
                        },
                        vc: function(n, i) {
                            if (n.name = i, 7 >= e) try {
                                n.mergeAttributes(t.createElement("<input name='" + n.name + "'/>"), !1)
                            } catch (r) {}
                        },
                        Wc: function(n) {
                            9 <= e && (n = 1 == n.nodeType ? n : n.parentNode, n.style && (n.style.zoom = n.style.zoom))
                        },
                        Sc: function(n) {
                            if (e) {
                                var t = n.style.width;
                                n.style.width = 0;
                                n.style.width = t
                            }
                        },
                        nd: function(n, t) {
                            n = s.a.c(n);
                            t = s.a.c(t);
                            for (var r = [], i = n; i <= t; i++) r.push(i);
                            return r
                        },
                        W: function(n) {
                            for (var i = [], t = 0, r = n.length; t < r; t++) i.push(n[t]);
                            return i
                        },
                        bc: function(n) {
                            return w ? Symbol(n) : n
                        },
                        xd: 6 === e,
                        yd: 7 === e,
                        C: e,
                        ic: function(n, t) {
                            for (var r = s.a.W(n.getElementsByTagName("input")).concat(s.a.W(n.getElementsByTagName("textarea"))), f = "string" == typeof t ? function(n) {
                                    return n.name === t
                                } : function(n) {
                                    return t.test(n.name)
                                }, u = [], i = r.length - 1; 0 <= i; i--) f(r[i]) && u.push(r[i]);
                            return u
                        },
                        kd: function(n) {
                            return "string" == typeof n && (n = s.a.cb(n)) ? u && u.parse ? u.parse(n) : new Function("return " + n)() : null
                        },
                        Gb: function(n, t, i) {
                            if (!u || !u.stringify) throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                            return u.stringify(s.a.c(n), t, i)
                        },
                        ld: function(n, i, r) {
                            var v, e, h, f, u, c;
                            r = r || {};
                            var l = r.params || {},
                                a = r.includeFields || this.gc,
                                v = n;
                            if ("object" == typeof n && "form" === s.a.A(n))
                                for (v = n.action, e = a.length - 1; 0 <= e; e--)
                                    for (h = s.a.ic(n, a[e]), f = h.length - 1; 0 <= f; f--) l[h[f].name] = h[f].value;
                            i = s.a.c(i);
                            u = t.createElement("form");
                            u.style.display = "none";
                            u.action = v;
                            u.method = "post";
                            for (c in i) n = t.createElement("input"), n.type = "hidden", n.name = c, n.value = s.a.Gb(s.a.c(i[c])), u.appendChild(n);
                            o(l, function(n, i) {
                                var r = t.createElement("input");
                                r.type = "hidden";
                                r.name = n;
                                r.value = i;
                                u.appendChild(r)
                            });
                            t.body.appendChild(u);
                            r.submitter ? r.submitter(u) : u.submit();
                            setTimeout(function() {
                                u.parentNode.removeChild(u)
                            }, 0)
                        }
                    }
                }();
                s.b("utils", s.a);
                s.b("utils.arrayForEach", s.a.r);
                s.b("utils.arrayFirst", s.a.Vb);
                s.b("utils.arrayFilter", s.a.Ma);
                s.b("utils.arrayGetDistinctValues", s.a.Wb);
                s.b("utils.arrayIndexOf", s.a.o);
                s.b("utils.arrayMap", s.a.ib);
                s.b("utils.arrayPushAll", s.a.ta);
                s.b("utils.arrayRemoveItem", s.a.Na);
                s.b("utils.extend", s.a.extend);
                s.b("utils.fieldsIncludedWithJsonPost", s.a.gc);
                s.b("utils.getFormFields", s.a.ic);
                s.b("utils.peekObservable", s.a.Bb);
                s.b("utils.postJson", s.a.ld);
                s.b("utils.parseJson", s.a.kd);
                s.b("utils.registerEventHandler", s.a.q);
                s.b("utils.stringifyJson", s.a.Gb);
                s.b("utils.range", s.a.nd);
                s.b("utils.toggleDomNodeCssClass", s.a.fb);
                s.b("utils.triggerEvent", s.a.Fa);
                s.b("utils.unwrapObservable", s.a.c);
                s.b("utils.objectForEach", s.a.D);
                s.b("utils.addOrRemoveItem", s.a.ra);
                s.b("utils.setTextContent", s.a.bb);
                s.b("unwrap", s.a.c);
                Function.prototype.bind || (Function.prototype.bind = function(n) {
                    var t = this,
                        i;
                    return 1 === arguments.length ? function() {
                        return t.apply(n, arguments)
                    } : (i = Array.prototype.slice.call(arguments, 1), function() {
                        var r = i.slice(0);
                        return r.push.apply(r, arguments), t.apply(n, r)
                    })
                });
                s.a.e = new function() {
                    function r(r, f) {
                        var e = r[t];
                        if (!e || "null" === e || !i[e]) {
                            if (!f) return n;
                            e = r[t] = "ko" + u++;
                            i[e] = {}
                        }
                        return i[e]
                    }
                    var u = 0,
                        t = "__ko__" + (new Date).getTime(),
                        i = {};
                    return {
                        get: function(t, i) {
                            var u = r(t, !1);
                            return u === n ? n : u[i]
                        },
                        set: function(t, i, u) {
                            (u !== n || r(t, !1) !== n) && (r(t, !0)[i] = u)
                        },
                        clear: function(n) {
                            var r = n[t];
                            return r ? (delete i[r], n[t] = null, !0) : !1
                        },
                        J: function() {
                            return u++ + t
                        }
                    }
                };
                s.b("utils.domData", s.a.e);
                s.b("utils.domData.clear", s.a.e.clear);
                s.a.G = new function() {
                    function t(t, i) {
                        var r = s.a.e.get(t, u);
                        return r === n && i && (r = [], s.a.e.set(t, u, r)), r
                    }

                    function r(n) {
                        var i = t(n, !1),
                            u;
                        if (i)
                            for (i = i.slice(0), u = 0; u < i.length; u++) i[u](n);
                        if (s.a.e.clear(n), s.a.G.cleanExternalData(n), f[n.nodeType])
                            for (i = n.firstChild; n = i;) i = n.nextSibling, 8 === n.nodeType && r(n)
                    }
                    var u = s.a.e.J(),
                        e = {
                            1: !0,
                            8: !0,
                            9: !0
                        },
                        f = {
                            1: !0,
                            9: !0
                        };
                    return {
                        qa: function(n, i) {
                            if ("function" != typeof i) throw Error("Callback must be a function");
                            t(n, !0).push(i)
                        },
                        tc: function(i, r) {
                            var f = t(i, !1);
                            f && (s.a.Na(f, r), 0 == f.length && s.a.e.set(i, u, n))
                        },
                        ba: function(n) {
                            var t, i, u;
                            if (e[n.nodeType] && (r(n), f[n.nodeType]))
                                for (t = [], s.a.ta(t, n.getElementsByTagName("*")), i = 0, u = t.length; i < u; i++) r(t[i]);
                            return n
                        },
                        removeNode: function(n) {
                            s.ba(n);
                            n.parentNode && n.parentNode.removeChild(n)
                        },
                        cleanExternalData: function(n) {
                            i && "function" == typeof i.cleanData && i.cleanData([n])
                        }
                    }
                };
                s.ba = s.a.G.ba;
                s.removeNode = s.a.G.removeNode;
                s.b("cleanNode", s.ba);
                s.b("removeNode", s.removeNode);
                s.b("utils.domNodeDisposal", s.a.G);
                s.b("utils.domNodeDisposal.addDisposeCallback", s.a.G.qa);
                s.b("utils.domNodeDisposal.removeDisposeCallback", s.a.G.tc),
                    function() {
                        var h = [0, "", ""],
                            u = [1, "<table>", "<\/table>"],
                            f = [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
                            e = [1, "<select multiple='multiple'>", "<\/select>"],
                            c = {
                                thead: u,
                                tbody: u,
                                tfoot: u,
                                tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
                                td: f,
                                th: f,
                                option: e,
                                optgroup: e
                            },
                            o = 8 >= s.a.C;
                        s.a.na = function(n, u) {
                            var f, e;
                            if (i) {
                                if (i.parseHTML) f = i.parseHTML(n, u) || [];
                                else if ((f = i.clean([n], u)) && f[0]) {
                                    for (e = f[0]; e.parentNode && 11 !== e.parentNode.nodeType;) e = e.parentNode;
                                    e.parentNode && e.parentNode.removeChild(e)
                                }
                            } else {
                                (f = u) || (f = t);
                                var e = f.parentWindow || f.defaultView || r,
                                    v = s.a.cb(n).toLowerCase(),
                                    l = f.createElement("div"),
                                    a;
                                for (a = (v = v.match(/^<([a-z]+)[ >]/)) && c[v[1]] || h, v = a[0], a = "ignored<div>" + a[1] + n + a[2] + "<\/div>", "function" == typeof e.innerShiv ? l.appendChild(e.innerShiv(a)) : (o && f.appendChild(l), l.innerHTML = a, o && l.parentNode.removeChild(l)); v--;) l = l.lastChild;
                                f = s.a.W(l.lastChild.childNodes)
                            }
                            return f
                        };
                        s.a.Eb = function(t, r) {
                            if (s.a.rb(t), r = s.a.c(r), null !== r && r !== n)
                                if ("string" != typeof r && (r = r.toString()), i) i(t).html(r);
                                else
                                    for (var f = s.a.na(r, t.ownerDocument), u = 0; u < f.length; u++) t.appendChild(f[u])
                        }
                    }();
                s.b("utils.parseHtmlFragment", s.a.na);
                s.b("utils.setHtml", s.a.Eb);
                s.N = function() {
                    function i(n, t) {
                        var r;
                        if (n)
                            if (8 == n.nodeType) r = s.N.pc(n.nodeValue), null != r && t.push({
                                Qc: n,
                                hd: r
                            });
                            else if (1 == n.nodeType)
                            for (var r = 0, u = n.childNodes, f = u.length; r < f; r++) i(u[r], t)
                    }
                    var t = {};
                    return {
                        yb: function(n) {
                            if ("function" != typeof n) throw Error("You can only pass a function to ko.memoization.memoize()");
                            var i = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
                            return t[i] = n, "<!--[ko_memo:" + i + "]-->"
                        },
                        Bc: function(i, r) {
                            var u = t[i];
                            if (u === n) throw Error("Couldn't find any memo with ID " + i + ". Perhaps it's already been unmemoized.");
                            try {
                                return u.apply(null, r || []), !0
                            } finally {
                                delete t[i]
                            }
                        },
                        Cc: function(n, t) {
                            var f = [],
                                u, o, r, e;
                            for (i(n, f), u = 0, o = f.length; u < o; u++) r = f[u].Qc, e = [r], t && s.a.ta(e, t), s.N.Bc(f[u].hd, e), r.nodeValue = "", r.parentNode && r.parentNode.removeChild(r)
                        },
                        pc: function(n) {
                            return (n = n.match(/^\[ko_memo\:(.*?)\]$/)) ? n[1] : null
                        }
                    }
                }();
                s.b("memoization", s.N);
                s.b("memoization.memoize", s.N.yb);
                s.b("memoization.unmemoize", s.N.Bc);
                s.b("memoization.parseMemoText", s.N.pc);
                s.b("memoization.unmemoizeDomNodeAndDescendants", s.N.Cc);
                s.Z = function() {
                    function f() {
                        if (n)
                            for (var t = n, r = 0, f; i < n;)
                                if (f = u[i++]) {
                                    if (i > t) {
                                        if (5e3 <= ++r) {
                                            i = n;
                                            s.a.dc(Error("'Too much recursion' after processing " + r + " task groups."));
                                            break
                                        }
                                        t = n
                                    }
                                    try {
                                        f()
                                    } catch (e) {
                                        s.a.dc(e)
                                    }
                                }
                    }

                    function e() {
                        f();
                        i = n = u.length = 0
                    }
                    var u = [],
                        n = 0,
                        o = 1,
                        i = 0;
                    return {
                        scheduler: r.MutationObserver ? function(n) {
                            var i = t.createElement("div");
                            return new MutationObserver(n).observe(i, {
                                    attributes: !0
                                }),
                                function() {
                                    i.classList.toggle("foo")
                                }
                        }(e) : t && "onreadystatechange" in t.createElement("script") ? function(n) {
                            var i = t.createElement("script");
                            i.onreadystatechange = function() {
                                i.onreadystatechange = null;
                                t.documentElement.removeChild(i);
                                i = null;
                                n()
                            };
                            t.documentElement.appendChild(i)
                        } : function(n) {
                            setTimeout(n, 0)
                        },
                        Za: function(t) {
                            return n || s.Z.scheduler(e), u[n++] = t, o++
                        },
                        cancel: function(t) {
                            t -= o - n;
                            t >= i && t < n && (u[t] = null)
                        },
                        resetForTesting: function() {
                            var t = n - i;
                            return i = n = u.length = 0, t
                        },
                        rd: f
                    }
                }();
                s.b("tasks", s.Z);
                s.b("tasks.schedule", s.Z.Za);
                s.b("tasks.runEarly", s.Z.rd);
                s.Aa = {
                    throttle: function(n, t) {
                        n.throttleEvaluation = t;
                        var i = null;
                        return s.B({
                            read: n,
                            write: function(r) {
                                clearTimeout(i);
                                i = s.a.setTimeout(function() {
                                    n(r)
                                }, t)
                            }
                        })
                    },
                    rateLimit: function(n, t) {
                        var i, r, u;
                        "number" == typeof t ? i = t : (i = t.timeout, r = t.method);
                        n.gb = !1;
                        u = "notifyWhenChangesStop" == r ? it : tt;
                        n.Wa(function(n) {
                            return u(n, i)
                        })
                    },
                    deferred: function(t, i) {
                        if (!0 !== i) throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");
                        t.gb || (t.gb = !0, t.Wa(function(i) {
                            var u, r = !1;
                            return function() {
                                if (!r) {
                                    s.Z.cancel(u);
                                    u = s.Z.Za(i);
                                    try {
                                        r = !0;
                                        t.notifySubscribers(n, "dirty")
                                    } finally {
                                        r = !1
                                    }
                                }
                            }
                        }))
                    },
                    notify: function(n, t) {
                        n.equalityComparer = "always" == t ? null : b
                    }
                };
                nt = {
                    undefined: 1,
                    boolean: 1,
                    number: 1,
                    string: 1
                };
                s.b("extenders", s.Aa);
                s.zc = function(n, t, i) {
                    this.$ = n;
                    this.jb = t;
                    this.Pc = i;
                    this.T = !1;
                    s.H(this, "dispose", this.k)
                };
                s.zc.prototype.k = function() {
                    this.T = !0;
                    this.Pc()
                };
                s.K = function() {
                    s.a.ab(this, l);
                    l.ub(this)
                };
                v = "change";
                l = {
                    ub: function(n) {
                        n.F = {
                            change: []
                        };
                        n.Qb = 1
                    },
                    Y: function(n, t, i) {
                        var r = this,
                            u;
                        return i = i || v, u = new s.zc(r, t ? n.bind(t) : n, function() {
                            s.a.Na(r.F[i], u);
                            r.Ka && r.Ka(i)
                        }), r.ua && r.ua(i), r.F[i] || (r.F[i] = []), r.F[i].push(u), u
                    },
                    notifySubscribers: function(n, t) {
                        var u, i, r;
                        if (t = t || v, t === v && this.Kb(), this.Ra(t)) {
                            u = t === v && this.Fc || this.F[t].slice(0);
                            try {
                                for (s.l.Xb(), i = 0; r = u[i]; ++i) r.T || r.jb(n)
                            } finally {
                                s.l.end()
                            }
                        }
                    },
                    Pa: function() {
                        return this.Qb
                    },
                    Zc: function(n) {
                        return this.Pa() !== n
                    },
                    Kb: function() {
                        ++this.Qb
                    },
                    Wa: function(n) {
                        var t = this,
                            o = s.I(t),
                            u, f, r, i, e;
                        t.Ja || (t.Ja = t.notifySubscribers, t.notifySubscribers = rt);
                        e = n(function() {
                            t.Ha = !1;
                            o && i === t && (i = t.Mb ? t.Mb() : t());
                            var n = f || t.Ua(r, i);
                            f = u = !1;
                            n && t.Ja(r = i)
                        });
                        t.Pb = function(n) {
                            t.Fc = t.F[v].slice(0);
                            t.Ha = u = !0;
                            i = n;
                            e()
                        };
                        t.Ob = function(n) {
                            u || (r = n, t.Ja(n, "beforeChange"))
                        };
                        t.Hc = function() {
                            t.Ua(r, t.p(!0)) && (f = !0)
                        }
                    },
                    Ra: function(n) {
                        return this.F[n] && this.F[n].length
                    },
                    Xc: function(n) {
                        if (n) return this.F[n] && this.F[n].length || 0;
                        var t = 0;
                        return s.a.D(this.F, function(n, i) {
                            "dirty" !== n && (t += i.length)
                        }), t
                    },
                    Ua: function(n, t) {
                        return !this.equalityComparer || !this.equalityComparer(n, t)
                    },
                    extend: function(n) {
                        var t = this;
                        return n && s.a.D(n, function(n, i) {
                            var r = s.Aa[n];
                            "function" == typeof r && (t = r(t, i) || t)
                        }), t
                    }
                };
                s.H(l, "subscribe", l.Y);
                s.H(l, "extend", l.extend);
                s.H(l, "getSubscriptionsCount", l.Xc);
                s.a.la && s.a.$a(l, Function.prototype);
                s.K.fn = l;
                s.lc = function(n) {
                    return null != n && "function" == typeof n.Y && "function" == typeof n.notifySubscribers
                };
                s.b("subscribable", s.K);
                s.b("isSubscribable", s.lc);
                s.xa = s.l = function() {
                    function t(t) {
                        r.push(n);
                        n = t
                    }

                    function i() {
                        n = r.pop()
                    }
                    var r = [],
                        n, u = 0;
                    return {
                        Xb: t,
                        end: i,
                        sc: function(t) {
                            if (n) {
                                if (!s.lc(t)) throw Error("Only subscribable things can act as dependencies");
                                n.jb.call(n.Lc, t, t.Gc || (t.Gc = ++u))
                            }
                        },
                        w: function(n, r, u) {
                            try {
                                return t(), n.apply(r, u || [])
                            } finally {
                                i()
                            }
                        },
                        Ca: function() {
                            if (n) return n.m.Ca()
                        },
                        Va: function() {
                            if (n) return n.Va
                        }
                    }
                }();
                s.b("computedContext", s.xa);
                s.b("computedContext.getDependenciesCount", s.xa.Ca);
                s.b("computedContext.isInitial", s.xa.Va);
                s.b("ignoreDependencies", s.wd = s.l.w);
                y = s.a.bc("_latestValue");
                s.O = function(n) {
                    function t() {
                        return 0 < arguments.length ? (t.Ua(t[y], arguments[0]) && (t.ia(), t[y] = arguments[0], t.ha()), this) : (s.l.sc(t), t[y])
                    }
                    return t[y] = n, s.a.la || s.a.extend(t, s.K.fn), s.K.fn.ub(t), s.a.ab(t, a), s.options.deferUpdates && s.Aa.deferred(t, !0), t
                };
                a = {
                    equalityComparer: b,
                    p: function() {
                        return this[y]
                    },
                    ha: function() {
                        this.notifySubscribers(this[y])
                    },
                    ia: function() {
                        this.notifySubscribers(this[y], "beforeChange")
                    }
                };
                s.a.la && s.a.$a(a, s.K.fn);
                p = s.O.md = "__ko_proto__";
                a[p] = s.O;
                s.Qa = function(t, i) {
                    return null === t || t === n || t[p] === n ? !1 : t[p] === i ? !0 : s.Qa(t[p], i)
                };
                s.I = function(n) {
                    return s.Qa(n, s.O)
                };
                s.Da = function(n) {
                    return "function" == typeof n && n[p] === s.O || "function" == typeof n && n[p] === s.B && n.$c ? !0 : !1
                };
                s.b("observable", s.O);
                s.b("isObservable", s.I);
                s.b("isWriteableObservable", s.Da);
                s.b("isWritableObservable", s.Da);
                s.b("observable.fn", a);
                s.H(a, "peek", a.p);
                s.H(a, "valueHasMutated", a.ha);
                s.H(a, "valueWillMutate", a.ia);
                s.ma = function(n) {
                    if (n = n || [], "object" != typeof n || !("length" in n)) throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
                    return n = s.O(n), s.a.ab(n, s.ma.fn), n.extend({
                        trackArrayChanges: !0
                    })
                };
                s.ma.fn = {
                    remove: function(n) {
                        for (var u, r = this.p(), i = [], f = "function" != typeof n || s.I(n) ? function(t) {
                                return t === n
                            } : n, t = 0; t < r.length; t++) u = r[t], f(u) && (0 === i.length && this.ia(), i.push(u), r.splice(t, 1), t--);
                        return i.length && this.ha(), i
                    },
                    removeAll: function(t) {
                        if (t === n) {
                            var i = this.p(),
                                r = i.slice(0);
                            return this.ia(), i.splice(0, i.length), this.ha(), r
                        }
                        return t ? this.remove(function(n) {
                            return 0 <= s.a.o(t, n)
                        }) : []
                    },
                    destroy: function(n) {
                        var i = this.p(),
                            r = "function" != typeof n || s.I(n) ? function(t) {
                                return t === n
                            } : n,
                            t;
                        for (this.ia(), t = i.length - 1; 0 <= t; t--) r(i[t]) && (i[t]._destroy = !0);
                        this.ha()
                    },
                    destroyAll: function(t) {
                        return t === n ? this.destroy(function() {
                            return !0
                        }) : t ? this.destroy(function(n) {
                            return 0 <= s.a.o(t, n)
                        }) : []
                    },
                    indexOf: function(n) {
                        var t = this();
                        return s.a.o(t, n)
                    },
                    replace: function(n, t) {
                        var i = this.indexOf(n);
                        0 <= i && (this.ia(), this.p()[i] = t, this.ha())
                    }
                };
                s.a.la && s.a.$a(s.ma.fn, s.O.fn);
                s.a.r("pop push reverse shift sort splice unshift".split(" "), function(n) {
                    s.ma.fn[n] = function() {
                        var t = this.p(),
                            i;
                        return this.ia(), this.Yb(t, n, arguments), i = t[n].apply(t, arguments), this.ha(), i === t ? this : i
                    }
                });
                s.a.r(["slice"], function(n) {
                    s.ma.fn[n] = function() {
                        var t = this();
                        return t[n].apply(t, arguments)
                    }
                });
                s.b("observableArray", s.ma);
                s.Aa.trackArrayChanges = function(t, i) {
                    function l() {
                        if (!f) {
                            f = !0;
                            u = t.notifySubscribers;
                            t.notifySubscribers = function(n, t) {
                                return t && t !== v || ++e, u.apply(this, arguments)
                            };
                            var n = [].concat(t.p() || []);
                            r = null;
                            o = t.Y(function(i) {
                                if (i = [].concat(i || []), t.Ra("arrayChange")) {
                                    var u;
                                    (!r || 1 < e) && (r = s.a.lb(n, i, t.kb));
                                    u = r
                                }
                                n = i;
                                r = null;
                                e = 0;
                                u && u.length && t.notifySubscribers(u, "arrayChange")
                            })
                        }
                    }
                    if (t.kb = {}, i && "object" == typeof i && s.a.extend(t.kb, i), t.kb.sparse = !0, !t.Yb) {
                        var f = !1,
                            r = null,
                            o, e = 0,
                            u, h = t.ua,
                            c = t.Ka;
                        t.ua = function(n) {
                            h && h.call(t, n);
                            "arrayChange" === n && l()
                        };
                        t.Ka = function(i) {
                            c && c.call(t, i);
                            "arrayChange" !== i || t.Ra("arrayChange") || (u && (t.notifySubscribers = u, u = n), o.k(), f = !1)
                        };
                        t.Yb = function(n, t, i) {
                            function c(n, t, i) {
                                return l[l.length] = {
                                    status: n,
                                    value: t,
                                    index: i
                                }
                            }
                            if (f && !e) {
                                var l = [],
                                    u = n.length,
                                    h = i.length,
                                    o = 0;
                                switch (t) {
                                    case "push":
                                        o = u;
                                    case "unshift":
                                        for (t = 0; t < h; t++) c("added", i[t], o + t);
                                        break;
                                    case "pop":
                                        o = u - 1;
                                    case "shift":
                                        u && c("deleted", n[o], o);
                                        break;
                                    case "splice":
                                        t = Math.min(Math.max(0, 0 > i[0] ? u + i[0] : i[0]), u);
                                        for (var u = 1 === h ? u : Math.min(t + (i[1] || 0), u), h = t + h - 2, o = Math.max(u, h), a = [], v = [], y = 2; t < o; ++t, ++y) t < u && v.push(c("deleted", n[t], t)), t < h && a.push(c("added", i[y], t));
                                        s.a.hc(v, a);
                                        break;
                                    default:
                                        return
                                }
                                r = l
                            }
                        }
                    }
                };
                h = s.a.bc("_state");
                s.m = s.B = function(t, i, r) {
                    function u() {
                        if (0 < arguments.length) {
                            if ("function" == typeof e) e.apply(f.sb, arguments);
                            else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                            return this
                        }
                        return s.l.sc(u), (f.V || f.t && u.Sa()) && u.U(), f.M
                    }
                    if ("object" == typeof t ? r = t : (r = r || {}, t && (r.read = t)), "function" != typeof r.read) throw Error("Pass a function that returns the value of the ko.computed");
                    var e = r.write,
                        f = {
                            M: n,
                            da: !0,
                            V: !0,
                            Ta: !1,
                            Hb: !1,
                            T: !1,
                            Ya: !1,
                            t: !1,
                            od: r.read,
                            sb: i || r.owner,
                            i: r.disposeWhenNodeIsRemoved || r.i || null,
                            ya: r.disposeWhen || r.ya,
                            pb: null,
                            s: {},
                            L: 0,
                            fc: null
                        };
                    return u[h] = f, u.$c = "function" == typeof e, s.a.la || s.a.extend(u, s.K.fn), s.K.fn.ub(u), s.a.ab(u, c), r.pure ? (f.Ya = !0, f.t = !0, s.a.extend(u, et)) : r.deferEvaluation && s.a.extend(u, ot), s.options.deferUpdates && s.Aa.deferred(u, !0), f.i && (f.Hb = !0, f.i.nodeType || (f.i = null)), f.t || r.deferEvaluation || u.U(), f.i && u.ca() && s.a.G.qa(f.i, f.pb = function() {
                        u.k()
                    }), u
                };
                var c = {
                        equalityComparer: b,
                        Ca: function() {
                            return this[h].L
                        },
                        Sb: function(n, t, i) {
                            if (this[h].Ya && t === this) throw Error("A 'pure' computed must not be called recursively");
                            this[h].s[n] = i;
                            i.Ia = this[h].L++;
                            i.pa = t.Pa()
                        },
                        Sa: function() {
                            var t, n, i = this[h].s;
                            for (t in i)
                                if (i.hasOwnProperty(t) && (n = i[t], this.oa && n.$.Ha || n.$.Zc(n.pa))) return !0
                        },
                        gd: function() {
                            this.oa && !this[h].Ta && this.oa(!1)
                        },
                        ca: function() {
                            var n = this[h];
                            return n.V || 0 < n.L
                        },
                        qd: function() {
                            this.Ha ? this[h].V && (this[h].da = !0) : this.ec()
                        },
                        yc: function(n) {
                            if (n.gb && !this[h].i) {
                                var t = n.Y(this.gd, this, "dirty"),
                                    i = n.Y(this.qd, this);
                                return {
                                    $: n,
                                    k: function() {
                                        t.k();
                                        i.k()
                                    }
                                }
                            }
                            return n.Y(this.ec, this)
                        },
                        ec: function() {
                            var n = this,
                                t = n.throttleEvaluation;
                            t && 0 <= t ? (clearTimeout(this[h].fc), this[h].fc = s.a.setTimeout(function() {
                                n.U(!0)
                            }, t)) : n.oa ? n.oa(!0) : n.U(!0)
                        },
                        U: function(n) {
                            var t = this[h],
                                i = t.ya,
                                r = !1;
                            if (!t.Ta && !t.T) {
                                if (t.i && !s.a.qb(t.i) || i && i()) {
                                    if (!t.Hb) {
                                        this.k();
                                        return
                                    }
                                } else t.Hb = !1;
                                t.Ta = !0;
                                try {
                                    r = this.Vc(n)
                                } finally {
                                    t.Ta = !1
                                }
                                return t.L || this.k(), r
                            }
                        },
                        Vc: function(t) {
                            var i = this[h],
                                u = !1,
                                f = i.Ya ? n : !i.L,
                                r = {
                                    Mc: this,
                                    Oa: i.s,
                                    ob: i.L
                                };
                            return s.l.Xb({
                                Lc: r,
                                jb: ft,
                                m: this,
                                Va: f
                            }), i.s = {}, i.L = 0, r = this.Uc(i, r), this.Ua(i.M, r) && (i.t || this.notifySubscribers(i.M, "beforeChange"), i.M = r, i.t ? this.Kb() : t && this.notifySubscribers(i.M), u = !0), f && this.notifySubscribers(i.M, "awake"), u
                        },
                        Uc: function(n, t) {
                            try {
                                var i = n.od;
                                return n.sb ? i.call(n.sb) : i()
                            } finally {
                                s.l.end();
                                t.ob && !n.t && s.a.D(t.Oa, ut);
                                n.da = n.V = !1
                            }
                        },
                        p: function(n) {
                            var t = this[h];
                            return (t.V && (n || !t.L) || t.t && this.Sa()) && this.U(), t.M
                        },
                        Wa: function(n) {
                            s.K.fn.Wa.call(this, n);
                            this.Mb = function() {
                                return this[h].da ? this.U() : this[h].V = !1, this[h].M
                            };
                            this.oa = function(n) {
                                this.Ob(this[h].M);
                                this[h].V = !0;
                                n && (this[h].da = !0);
                                this.Pb(this)
                            }
                        },
                        k: function() {
                            var n = this[h];
                            !n.t && n.s && s.a.D(n.s, function(n, t) {
                                t.k && t.k()
                            });
                            n.i && n.pb && s.a.G.tc(n.i, n.pb);
                            n.s = null;
                            n.L = 0;
                            n.T = !0;
                            n.da = !1;
                            n.V = !1;
                            n.t = !1;
                            n.i = null
                        }
                    },
                    et = {
                        ua: function(n) {
                            var i = this,
                                t = i[h],
                                r;
                            !t.T && t.t && "change" == n && (t.t = !1, t.da || i.Sa() ? (t.s = null, t.L = 0, i.U() && i.Kb()) : (r = [], s.a.D(t.s, function(n, t) {
                                r[t.Ia] = n
                            }), s.a.r(r, function(n, r) {
                                var f = t.s[n],
                                    u = i.yc(f.$);
                                u.Ia = r;
                                u.pa = f.pa;
                                t.s[n] = u
                            })), t.T || i.notifySubscribers(t.M, "awake"))
                        },
                        Ka: function(t) {
                            var i = this[h];
                            i.T || "change" != t || this.Ra("change") || (s.a.D(i.s, function(n, t) {
                                t.k && (i.s[n] = {
                                    $: t.$,
                                    Ia: t.Ia,
                                    pa: t.pa
                                }, t.k())
                            }), i.t = !0, this.notifySubscribers(n, "asleep"))
                        },
                        Pa: function() {
                            var n = this[h];
                            return n.t && (n.da || this.Sa()) && this.U(), s.K.fn.Pa.call(this)
                        }
                    },
                    ot = {
                        ua: function(n) {
                            "change" != n && "beforeChange" != n || this.p()
                        }
                    };
                s.a.la && s.a.$a(c, s.K.fn);
                d = s.O.md;
                s.m[d] = s.O;
                c[d] = s.m;
                s.bd = function(n) {
                    return s.Qa(n, s.m)
                };
                s.cd = function(n) {
                    return s.Qa(n, s.m) && n[h] && n[h].Ya
                };
                s.b("computed", s.m);
                s.b("dependentObservable", s.m);
                s.b("isComputed", s.bd);
                s.b("isPureComputed", s.cd);
                s.b("computed.fn", c);
                s.H(c, "peek", c.p);
                s.H(c, "dispose", c.k);
                s.H(c, "isActive", c.ca);
                s.H(c, "getDependenciesCount", c.Ca);
                s.rc = function(n, t) {
                    return "function" == typeof n ? s.m(n, t, {
                        pure: !0
                    }) : (n = s.a.extend({}, n), n.pure = !0, s.m(n, t))
                };
                s.b("pureComputed", s.rc),
                    function() {
                        function t(u, f, e) {
                            if (e = e || new i, u = f(u), "object" != typeof u || null === u || u === n || u instanceof RegExp || u instanceof Date || u instanceof String || u instanceof Number || u instanceof Boolean) return u;
                            var o = u instanceof Array ? [] : {};
                            return e.save(u, o), r(u, function(i) {
                                var r = f(u[i]),
                                    s;
                                switch (typeof r) {
                                    case "boolean":
                                    case "number":
                                    case "string":
                                    case "function":
                                        o[i] = r;
                                        break;
                                    case "object":
                                    case "undefined":
                                        s = e.get(r);
                                        o[i] = s !== n ? s : t(r, f, e)
                                }
                            }), o
                        }

                        function r(n, t) {
                            if (n instanceof Array) {
                                for (var i = 0; i < n.length; i++) t(i);
                                "function" == typeof n.toJSON && t("toJSON")
                            } else
                                for (i in n) t(i)
                        }

                        function i() {
                            this.keys = [];
                            this.Lb = []
                        }
                        s.Ac = function(n) {
                            if (0 == arguments.length) throw Error("When calling ko.toJS, pass the object you want to convert.");
                            return t(n, function(n) {
                                for (var t = 0; s.I(n) && 10 > t; t++) n = n();
                                return n
                            })
                        };
                        s.toJSON = function(n, t, i) {
                            return n = s.Ac(n), s.a.Gb(n, t, i)
                        };
                        i.prototype = {
                            save: function(n, t) {
                                var i = s.a.o(this.keys, n);
                                0 <= i ? this.Lb[i] = t : (this.keys.push(n), this.Lb.push(t))
                            },
                            get: function(t) {
                                return t = s.a.o(this.keys, t), 0 <= t ? this.Lb[t] : n
                            }
                        }
                    }();
                s.b("toJS", s.Ac);
                s.b("toJSON", s.toJSON),
                    function() {
                        s.j = {
                            u: function(t) {
                                switch (s.a.A(t)) {
                                    case "option":
                                        return !0 === t.__ko__hasDomDataOptionValue__ ? s.a.e.get(t, s.d.options.zb) : 7 >= s.a.C ? t.getAttributeNode("value") && t.getAttributeNode("value").specified ? t.value : t.text : t.value;
                                    case "select":
                                        return 0 <= t.selectedIndex ? s.j.u(t.options[t.selectedIndex]) : n;
                                    default:
                                        return t.value
                                }
                            },
                            ja: function(t, i, r) {
                                switch (s.a.A(t)) {
                                    case "option":
                                        switch (typeof i) {
                                            case "string":
                                                s.a.e.set(t, s.d.options.zb, n);
                                                "__ko__hasDomDataOptionValue__" in t && delete t.__ko__hasDomDataOptionValue__;
                                                t.value = i;
                                                break;
                                            default:
                                                s.a.e.set(t, s.d.options.zb, i);
                                                t.__ko__hasDomDataOptionValue__ = !0;
                                                t.value = "number" == typeof i ? i : ""
                                        }
                                        break;
                                    case "select":
                                        ("" === i || null === i) && (i = n);
                                        for (var f = -1, u = 0, o = t.options.length, e; u < o; ++u)
                                            if (e = s.j.u(t.options[u]), e == i || "" == e && i === n) {
                                                f = u;
                                                break
                                            }(r || 0 <= f || i === n && 1 < t.size) && (t.selectedIndex = f);
                                        break;
                                    default:
                                        (null === i || i === n) && (i = "");
                                        t.value = i
                                }
                            }
                        }
                    }();
                s.b("selectExtensions", s.j);
                s.b("selectExtensions.readValue", s.j.u);
                s.b("selectExtensions.writeValue", s.j.ja);
                s.h = function() {
                    function n(n) {
                        var c, u, i;
                        n = s.a.cb(n);
                        123 === n.charCodeAt(0) && (n = n.slice(1, -1));
                        var a = [],
                            h = n.match(t),
                            o, r = [],
                            l = 0;
                        if (h)
                            for (h.push(","), c = 0; u = h[c]; ++c) {
                                if (i = u.charCodeAt(0), 44 === i) {
                                    if (0 >= l) {
                                        a.push(o && r.length ? {
                                            key: o,
                                            value: r.join("")
                                        } : {
                                            unknown: o || r.join("")
                                        });
                                        o = l = 0;
                                        r = [];
                                        continue
                                    }
                                } else if (58 === i) {
                                    if (!l && !o && 1 === r.length) {
                                        o = r.pop();
                                        continue
                                    }
                                } else 47 === i && c && 1 < u.length ? (i = h[c - 1].match(f)) && !e[i[0]] && (n = n.substr(n.indexOf(u) + 1), h = n.match(t), h.push(","), c = -1, u = "/") : 40 === i || 123 === i || 91 === i ? ++l : 41 === i || 125 === i || 93 === i ? --l : o || r.length || 34 !== i && 39 !== i || (u = u.slice(1, -1));
                                r.push(u)
                            }
                        return a
                    }
                    var r = ["true", "false", "null", "undefined"],
                        u = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,
                        t = RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]", "g"),
                        f = /[\])"'A-Za-z0-9_$]+$/,
                        e = {
                            "in": 1,
                            "return": 1,
                            "typeof": 1
                        },
                        i = {};
                    return {
                        va: [],
                        ga: i,
                        Ab: n,
                        Xa: function(t, f) {
                            function e(n, t) {
                                var a, f;
                                if (!l) {
                                    if (f = s.getBindingHandler(n), f && f.preprocess && !(t = f.preprocess(t, n, e))) return;
                                    (f = i[n]) && (a = t, 0 <= s.a.o(r, a) ? a = !1 : (f = a.match(u), a = null === f ? !1 : f[1] ? "Object(" + f[1] + ")" + f[2] : a), f = a);
                                    f && o.push("'" + n + "':function(_z){" + a + "=_z}")
                                }
                                c && (t = "function(){return " + t + " }");
                                h.push("'" + n + "':" + t)
                            }
                            f = f || {};
                            var h = [],
                                o = [],
                                c = f.valueAccessors,
                                l = f.bindingParams,
                                a = "string" == typeof t ? n(t) : t;
                            return s.a.r(a, function(n) {
                                e(n.key || n.unknown, n.value)
                            }), o.length && e("_ko_property_writers", "{" + o.join(",") + " }"), h.join(",")
                        },
                        fd: function(n, t) {
                            for (var i = 0; i < n.length; i++)
                                if (n[i].key == t) return !0;
                            return !1
                        },
                        Ga: function(n, t, i, r, u) {
                            n && s.I(n) ? !s.Da(n) || u && n.p() === r || n(r) : (n = t.get("_ko_property_writers")) && n[i] && n[i](r)
                        }
                    }
                }();
                s.b("expressionRewriting", s.h);
                s.b("expressionRewriting.bindingRewriteValidators", s.h.va);
                s.b("expressionRewriting.parseObjectLiteral", s.h.Ab);
                s.b("expressionRewriting.preProcessBindings", s.h.Xa);
                s.b("expressionRewriting._twoWayBindings", s.h.ga);
                s.b("jsonExpressionRewriting", s.h);
                s.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", s.h.Xa),
                    function() {
                        function n(n) {
                            return 8 == n.nodeType && e.test(i ? n.text : n.nodeValue)
                        }

                        function r(n) {
                            return 8 == n.nodeType && o.test(i ? n.text : n.nodeValue)
                        }

                        function u(t, i) {
                            for (var u = t, f = 1, e = []; u = u.nextSibling;) {
                                if (r(u) && (f--, 0 === f)) return e;
                                e.push(u);
                                n(u) && f++
                            }
                            if (!i) throw Error("Cannot find closing comment tag to match: " + t.nodeValue);
                            return null
                        }

                        function f(n, t) {
                            var i = u(n, t);
                            return i ? 0 < i.length ? i[i.length - 1].nextSibling : n.nextSibling : null
                        }
                        var i = t && "<!--test-->" === t.createComment("test").text,
                            e = i ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/,
                            o = i ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/,
                            h = {
                                ul: !0,
                                ol: !0
                            };
                        s.f = {
                            aa: {},
                            childNodes: function(t) {
                                return n(t) ? u(t) : t.childNodes
                            },
                            za: function(t) {
                                if (n(t)) {
                                    t = s.f.childNodes(t);
                                    for (var i = 0, r = t.length; i < r; i++) s.removeNode(t[i])
                                } else s.a.rb(t)
                            },
                            fa: function(t, i) {
                                if (n(t)) {
                                    s.f.za(t);
                                    for (var u = t.nextSibling, r = 0, f = i.length; r < f; r++) u.parentNode.insertBefore(i[r], u)
                                } else s.a.fa(t, i)
                            },
                            qc: function(t, i) {
                                n(t) ? t.parentNode.insertBefore(i, t.nextSibling) : t.firstChild ? t.insertBefore(i, t.firstChild) : t.appendChild(i)
                            },
                            kc: function(t, i, r) {
                                r ? n(t) ? t.parentNode.insertBefore(i, r.nextSibling) : r.nextSibling ? t.insertBefore(i, r.nextSibling) : t.appendChild(i) : s.f.qc(t, i)
                            },
                            firstChild: function(t) {
                                return n(t) ? !t.nextSibling || r(t.nextSibling) ? null : t.nextSibling : t.firstChild
                            },
                            nextSibling: function(t) {
                                return n(t) && (t = f(t)), t.nextSibling && r(t.nextSibling) ? null : t.nextSibling
                            },
                            Yc: n,
                            vd: function(n) {
                                return (n = (i ? n.text : n.nodeValue).match(e)) ? n[1] : null
                            },
                            oc: function(t) {
                                var o, i, u, e;
                                if (h[s.a.A(t)] && (o = t.firstChild, o))
                                    do
                                        if (1 === o.nodeType) {
                                            if (i = o.firstChild, u = null, i)
                                                do u ? u.push(i) : n(i) ? (e = f(i, !0), e ? i = e : u = [i]) : r(i) && (u = [i]); while (i = i.nextSibling);
                                            if (i = u)
                                                for (u = o.nextSibling, e = 0; e < i.length; e++) u ? t.insertBefore(i[e], u) : t.appendChild(i[e])
                                        }
                                while (o = o.nextSibling)
                            }
                        }
                    }();
                s.b("virtualElements", s.f);
                s.b("virtualElements.allowedBindings", s.f.aa);
                s.b("virtualElements.emptyNode", s.f.za);
                s.b("virtualElements.insertAfter", s.f.kc);
                s.b("virtualElements.prepend", s.f.qc);
                s.b("virtualElements.setDomNodeChildren", s.f.fa),
                    function() {
                        s.S = function() {
                            this.Kc = {}
                        };
                        s.a.extend(s.S.prototype, {
                            nodeHasBindings: function(n) {
                                switch (n.nodeType) {
                                    case 1:
                                        return null != n.getAttribute("data-bind") || s.g.getComponentNameForNode(n);
                                    case 8:
                                        return s.f.Yc(n);
                                    default:
                                        return !1
                                }
                            },
                            getBindings: function(n, t) {
                                var i = this.getBindingsString(n, t),
                                    i = i ? this.parseBindingsString(i, t, n) : null;
                                return s.g.Rb(i, n, t, !1)
                            },
                            getBindingAccessors: function(n, t) {
                                var i = this.getBindingsString(n, t),
                                    i = i ? this.parseBindingsString(i, t, n, {
                                        valueAccessors: !0
                                    }) : null;
                                return s.g.Rb(i, n, t, !0)
                            },
                            getBindingsString: function(n) {
                                switch (n.nodeType) {
                                    case 1:
                                        return n.getAttribute("data-bind");
                                    case 8:
                                        return s.f.vd(n);
                                    default:
                                        return null
                                }
                            },
                            parseBindingsString: function(n, t, i, r) {
                                var u, f, e, h, c;
                                try {
                                    return u = this.Kc, f = n + (r && r.valueAccessors || ""), (e = u[f]) || (c = "with($context){with($data||{}){return{" + s.h.Xa(n, r) + "}}}", h = new Function("$context", "$element", c), e = u[f] = h), e(t, i)
                                } catch (o) {
                                    throw o.message = "Unable to parse bindings.\nBindings value: " + n + "\nMessage: " + o.message, o;
                                }
                            }
                        });
                        s.S.instance = new s.S
                    }();
                s.b("bindingProvider", s.S),
                    function() {
                        function v(n) {
                            return function() {
                                return n
                            }
                        }

                        function u(n) {
                            return n()
                        }

                        function o(n) {
                            return s.a.Ea(s.l.w(n), function(t, i) {
                                return function() {
                                    return n()[i]
                                }
                            })
                        }

                        function y(n, t, i) {
                            return "function" == typeof n ? o(n.bind(null, t, i)) : s.a.Ea(n, v)
                        }

                        function p(n, t) {
                            return o(this.getBindings.bind(this, n, t))
                        }

                        function h(n, t, i) {
                            var r, u = s.f.firstChild(t),
                                f = s.S.instance,
                                e = f.preprocessNode;
                            if (e) {
                                for (; r = u;) u = s.f.nextSibling(r), e.call(f, r);
                                u = s.f.firstChild(t)
                            }
                            for (; r = u;) u = s.f.nextSibling(r), c(n, r, i)
                        }

                        function c(n, t, i) {
                            var u = !0,
                                r = 1 === t.nodeType;
                            r && s.f.oc(t);
                            (r && i || s.S.instance.nodeHasBindings(t)) && (u = l(t, null, n, i).shouldBindDescendants);
                            u && !a[s.a.A(t)] && h(n, t, !r)
                        }

                        function w(n) {
                            var i = [],
                                r = {},
                                t = [];
                            return s.a.D(n, function u(f) {
                                if (!r[f]) {
                                    var e = s.getBindingHandler(f);
                                    e && (e.after && (t.push(f), s.a.r(e.after, function(i) {
                                        if (n[i]) {
                                            if (-1 !== s.a.o(t, i)) throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + t.join(", "));
                                            u(i)
                                        }
                                    }), t.length--), i.push({
                                        key: f,
                                        jc: e
                                    }));
                                    r[f] = !0
                                }
                            }), i
                        }

                        function l(t, i, r, e) {
                            var v = s.a.e.get(t, f),
                                o, l, a, c;
                            if (!i) {
                                if (v) throw Error("You cannot apply bindings multiple times to the same element.");
                                s.a.e.set(t, f, !0)
                            }
                            if (!v && e && s.xc(t, r), i && "function" != typeof i) o = i;
                            else {
                                var y = s.S.instance,
                                    b = y.getBindingAccessors || p,
                                    h = s.B(function() {
                                        return (o = i ? i(r, t) : b.call(y, t, r)) && r.Q && r.Q(), o
                                    }, null, {
                                        i: t
                                    });
                                o && h.ca() || (h = null)
                            }
                            return o && (a = h ? function(n) {
                                return function() {
                                    return u(h()[n])
                                }
                            } : function(n) {
                                return o[n]
                            }, c = function() {
                                return s.a.Ea(h ? h() : o, u)
                            }, c.get = function(n) {
                                return o[n] && u(a(n))
                            }, c.has = function(n) {
                                return n in o
                            }, e = w(o), s.a.r(e, function(i) {
                                var e = i.jc.init,
                                    h = i.jc.update,
                                    u = i.key;
                                if (8 === t.nodeType && !s.f.aa[u]) throw Error("The binding '" + u + "' cannot be used with virtual elements");
                                try {
                                    "function" == typeof e && s.l.w(function() {
                                        var i = e(t, a(u), c, r.$data, r);
                                        if (i && i.controlsDescendantBindings) {
                                            if (l !== n) throw Error("Multiple bindings (" + l + " and " + u + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                                            l = u
                                        }
                                    });
                                    "function" == typeof h && s.B(function() {
                                        h(t, a(u), c, r.$data, r)
                                    }, null, {
                                        i: t
                                    })
                                } catch (f) {
                                    throw f.message = 'Unable to process binding "' + u + ": " + o[u] + '"\nMessage: ' + f.message, f;
                                }
                            })), {
                                shouldBindDescendants: l === n
                            }
                        }

                        function t(n) {
                            return n && n instanceof s.R ? n : new s.R(n)
                        }
                        var a, f, e;
                        s.d = {};
                        a = {
                            script: !0,
                            textarea: !0,
                            template: !0
                        };
                        s.getBindingHandler = function(n) {
                            return s.d[n]
                        };
                        s.R = function(t, i, r, u, f) {
                            function c() {
                                var f = a ? t() : t,
                                    n = s.a.c(f);
                                return i ? (i.Q && i.Q(), s.a.extend(e, i), e.Q = o) : (e.$parents = [], e.$root = n, e.ko = s), e.$rawData = f, e.$data = n, r && (e[r] = n), u && u(e, i, n), e.$data
                            }

                            function l() {
                                return h && !s.a.Tb(h)
                            }
                            var e = this,
                                a = "function" == typeof t && !s.I(t),
                                h, o;
                            f && f.exportDependencies ? c() : (o = s.B(c, null, {
                                ya: l,
                                i: !0
                            }), o.ca() && (e.Q = o, o.equalityComparer = null, h = [], o.Dc = function(t) {
                                h.push(t);
                                s.a.G.qa(t, function(t) {
                                    s.a.Na(h, t);
                                    h.length || (o.k(), e.Q = o = n)
                                })
                            }))
                        };
                        s.R.prototype.createChildContext = function(n, t, i, r) {
                            return new s.R(n, this, t, function(n, t) {
                                n.$parentContext = t;
                                n.$parent = t.$data;
                                n.$parents = (t.$parents || []).slice(0);
                                n.$parents.unshift(n.$parent);
                                i && i(n)
                            }, r)
                        };
                        s.R.prototype.extend = function(n) {
                            return new s.R(this.Q || this.$data, this, null, function(t, i) {
                                t.$rawData = i.$rawData;
                                s.a.extend(t, "function" == typeof n ? n() : n)
                            })
                        };
                        s.R.prototype.ac = function(n, t) {
                            return this.createChildContext(n, t, null, {
                                exportDependencies: !0
                            })
                        };
                        f = s.a.e.J();
                        e = s.a.e.J();
                        s.xc = function(n, t) {
                            if (2 == arguments.length) s.a.e.set(n, e, t), t.Q && t.Q.Dc(n);
                            else return s.a.e.get(n, e)
                        };
                        s.La = function(n, i, r) {
                            return 1 === n.nodeType && s.f.oc(n), l(n, i, t(r), !0)
                        };
                        s.Ic = function(n, i, r) {
                            return r = t(r), s.La(n, y(i, r, n), r)
                        };
                        s.hb = function(n, i) {
                            1 !== i.nodeType && 8 !== i.nodeType || h(t(n), i, !0)
                        };
                        s.Ub = function(n, u) {
                            if (!i && r.jQuery && (i = r.jQuery), u && 1 !== u.nodeType && 8 !== u.nodeType) throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
                            u = u || r.document.body;
                            c(t(n), u, !0)
                        };
                        s.nb = function(t) {
                            switch (t.nodeType) {
                                case 1:
                                case 8:
                                    var i = s.xc(t);
                                    if (i) return i;
                                    if (t.parentNode) return s.nb(t.parentNode)
                            }
                            return n
                        };
                        s.Oc = function(t) {
                            return (t = s.nb(t)) ? t.$data : n
                        };
                        s.b("bindingHandlers", s.d);
                        s.b("applyBindings", s.Ub);
                        s.b("applyBindingsToDescendants", s.hb);
                        s.b("applyBindingAccessorsToNode", s.La);
                        s.b("applyBindingsToNode", s.Ic);
                        s.b("contextFor", s.nb);
                        s.b("dataFor", s.Oc)
                    }(),
                    function(n) {
                        function u(t, u) {
                            var e = i.hasOwnProperty(t) ? i[t] : n,
                                o;
                            e ? e.Y(u) : (e = i[t] = new s.K, e.Y(u), f(t, function(n, u) {
                                var f = !(!u || !u.synchronous);
                                r[t] = {
                                    definition: n,
                                    dd: f
                                };
                                delete i[t];
                                o || f ? e.notifySubscribers(n) : s.Z.Za(function() {
                                    e.notifySubscribers(n)
                                })
                            }), o = !0)
                        }

                        function f(n, i) {
                            t("getConfig", [n], function(r) {
                                r ? t("loadComponent", [n, r], function(n) {
                                    i(n, r)
                                }) : i(null, null)
                            })
                        }

                        function t(i, r, u, f) {
                            var e, o, h;
                            if (f || (f = s.g.loaders.slice(0)), e = f.shift(), e)
                                if (o = e[i], o) {
                                    if (h = !1, o.apply(e, r.concat(function(n) {
                                            h ? u(null) : null !== n ? u(n) : t(i, r, u, f)
                                        })) !== n && (h = !0, !e.suppressLoaderExceptions)) throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");
                                } else t(i, r, u, f);
                            else u(null)
                        }
                        var i = {},
                            r = {};
                        s.g = {
                            get: function(t, i) {
                                var f = r.hasOwnProperty(t) ? r[t] : n;
                                f ? f.dd ? s.l.w(function() {
                                    i(f.definition)
                                }) : s.Z.Za(function() {
                                    i(f.definition)
                                }) : u(t, i)
                            },
                            $b: function(n) {
                                delete r[n]
                            },
                            Nb: t
                        };
                        s.g.loaders = [];
                        s.b("components", s.g);
                        s.b("components.get", s.g.get);
                        s.b("components.clearCachedDefinition", s.g.$b)
                    }(),
                    function() {
                        function l(n, t, r, f) {
                            function e() {
                                0 == --c && f(o)
                            }
                            var o = {},
                                c = 2,
                                h = r.template;
                            r = r.viewModel;
                            h ? u(t, h, function(t) {
                                s.g.Nb("loadTemplate", [n, t], function(n) {
                                    o.template = n;
                                    e()
                                })
                            }) : e();
                            r ? u(t, r, function(t) {
                                s.g.Nb("loadViewModel", [n, t], function(n) {
                                    o[i] = n;
                                    e()
                                })
                            }) : e()
                        }

                        function e(n, t, r) {
                            if ("function" == typeof t) r(function(n) {
                                return new t(n)
                            });
                            else if ("function" == typeof t[i]) r(t[i]);
                            else if ("instance" in t) {
                                var u = t.instance;
                                r(function() {
                                    return u
                                })
                            } else "viewModel" in t ? e(n, t.viewModel, r) : n("Unknown viewModel value: " + t)
                        }

                        function h(n) {
                            switch (s.a.A(n)) {
                                case "script":
                                    return s.a.na(n.text);
                                case "textarea":
                                    return s.a.na(n.value);
                                case "template":
                                    if (c(n.content)) return s.a.wa(n.content.childNodes)
                            }
                            return s.a.wa(n.childNodes)
                        }

                        function c(n) {
                            return r.DocumentFragment ? n instanceof DocumentFragment : n && 11 === n.nodeType
                        }

                        function u(n, t, i) {
                            "string" == typeof t.require ? o || r.require ? (o || r.require)([t.require], i) : n("Uses require, but no AMD loader is present") : i(t)
                        }

                        function f(n) {
                            return function(t) {
                                throw Error("Component '" + n + "': " + t);
                            }
                        }
                        var n = {},
                            i;
                        s.g.register = function(t, i) {
                            if (!i) throw Error("Invalid configuration for " + t);
                            if (s.g.wb(t)) throw Error("Component " + t + " is already registered");
                            n[t] = i
                        };
                        s.g.wb = function(t) {
                            return n.hasOwnProperty(t)
                        };
                        s.g.ud = function(t) {
                            delete n[t];
                            s.g.$b(t)
                        };
                        s.g.cc = {
                            getConfig: function(t, i) {
                                i(n.hasOwnProperty(t) ? n[t] : null)
                            },
                            loadComponent: function(n, t, i) {
                                var r = f(n);
                                u(r, t, function(t) {
                                    l(n, r, t, i)
                                })
                            },
                            loadTemplate: function(n, i, u) {
                                if (n = f(n), "string" == typeof i) u(s.a.na(i));
                                else if (i instanceof Array) u(i);
                                else if (c(i)) u(s.a.W(i.childNodes));
                                else if (i.element)
                                    if (i = i.element, r.HTMLElement ? i instanceof HTMLElement : i && i.tagName && 1 === i.nodeType) u(h(i));
                                    else if ("string" == typeof i) {
                                    var e = t.getElementById(i);
                                    e ? u(h(e)) : n("Cannot find element with ID " + i)
                                } else n("Unknown element type: " + i);
                                else n("Unknown template value: " + i)
                            },
                            loadViewModel: function(n, t, i) {
                                e(f(n), t, i)
                            }
                        };
                        i = "createViewModel";
                        s.b("components.register", s.g.register);
                        s.b("components.isRegistered", s.g.wb);
                        s.b("components.unregister", s.g.ud);
                        s.b("components.defaultLoader", s.g.cc);
                        s.g.loaders.push(s.g.cc);
                        s.g.Ec = n
                    }(),
                    function() {
                        function n(n, t) {
                            var r = n.getAttribute("params");
                            if (r) {
                                var r = i.parseBindingsString(r, t, n, {
                                        valueAccessors: !0,
                                        bindingParams: !0
                                    }),
                                    r = s.a.Ea(r, function(t) {
                                        return s.m(t, null, {
                                            i: n
                                        })
                                    }),
                                    u = s.a.Ea(r, function(t) {
                                        var i = t.p();
                                        return t.ca() ? s.m({
                                            read: function() {
                                                return s.a.c(t())
                                            },
                                            write: s.Da(i) && function(n) {
                                                t()(n)
                                            },
                                            i: n
                                        }) : i
                                    });
                                return u.hasOwnProperty("$raw") || (u.$raw = r), u
                            }
                            return {
                                $raw: {}
                            }
                        }
                        s.g.getComponentNameForNode = function(n) {
                            var t = s.a.A(n);
                            if (s.g.wb(t) && (-1 != t.indexOf("-") || "[object HTMLUnknownElement]" == "" + n || 8 >= s.a.C && n.tagName === t)) return t
                        };
                        s.g.Rb = function(t, i, r, u) {
                            var f, e;
                            if (1 === i.nodeType && (f = s.g.getComponentNameForNode(i), f)) {
                                if (t = t || {}, t.component) throw Error('Cannot use the "component" binding on a custom element matching a component');
                                e = {
                                    name: f,
                                    params: n(i, r)
                                };
                                t.component = u ? function() {
                                    return e
                                } : e
                            }
                            return t
                        };
                        var i = new s.S;
                        9 > s.a.C && (s.g.register = function(n) {
                            return function(i) {
                                return t.createElement(i), n.apply(this, arguments)
                            }
                        }(s.g.register), t.createDocumentFragment = function(n) {
                            return function() {
                                var t = n(),
                                    i = s.g.Ec;
                                for (var r in i) i.hasOwnProperty(r) && t.createElement(r);
                                return t
                            }
                        }(t.createDocumentFragment))
                    }(),
                    function(n) {
                        function t(n, t, i) {
                            if (t = t.template, !t) throw Error("Component '" + n + "' has no template");
                            n = s.a.wa(t);
                            s.f.fa(i, n)
                        }

                        function i(n, t, i, r) {
                            var u = n.createViewModel;
                            return u ? u.call(n, r, {
                                element: t,
                                templateNodes: i
                            }) : r
                        }
                        var r = 0;
                        s.d.component = {
                            init: function(u, f, e, o, h) {
                                function a() {
                                    var n = c && c.dispose;
                                    "function" == typeof n && n.call(c);
                                    l = c = null
                                }
                                var c, l, v = s.a.W(s.f.childNodes(u));
                                return s.a.G.qa(u, a), s.m(function() {
                                    var o = s.a.c(f()),
                                        e, y, p;
                                    if ("string" == typeof o ? e = o : (e = s.a.c(o.name), y = s.a.c(o.params)), !e) throw Error("No component name specified");
                                    p = l = ++r;
                                    s.g.get(e, function(r) {
                                        if (l === p) {
                                            if (a(), !r) throw Error("Unknown component '" + e + "'");
                                            t(e, r, u);
                                            var f = i(r, u, v, y);
                                            r = h.createChildContext(f, n, function(n) {
                                                n.$component = f;
                                                n.$componentTemplateNodes = v
                                            });
                                            c = f;
                                            s.hb(r, u)
                                        }
                                    })
                                }, null, {
                                    i: u
                                }), {
                                    controlsDescendantBindings: !0
                                }
                            }
                        };
                        s.f.aa.component = !0
                    }();
                g = {
                    "class": "className",
                    "for": "htmlFor"
                };
                s.d.attr = {
                        update: function(t, i) {
                            var r = s.a.c(i()) || {};
                            s.a.D(r, function(i, r) {
                                r = s.a.c(r);
                                var u = !1 === r || null === r || r === n;
                                u && t.removeAttribute(i);
                                8 >= s.a.C && i in g ? (i = g[i], u ? t.removeAttribute(i) : t[i] = r) : u || t.setAttribute(i, r.toString());
                                "name" === i && s.a.vc(t, u ? "" : r.toString())
                            })
                        }
                    },
                    function() {
                        s.d.checked = {
                            after: ["value", "attr"],
                            init: function(t, i, r) {
                                function l() {
                                    var l = t.checked,
                                        o = y ? f() : l,
                                        n, h;
                                    s.xa.Va() || e && !l || (n = s.l.w(i), u ? (h = a ? n.p() : n, c !== o ? (l && (s.a.ra(h, o, !0), s.a.ra(h, c, !1)), c = o) : s.a.ra(h, o, l), a && s.Da(n) && n(h)) : s.h.Ga(n, r, "checked", o, !0))
                                }

                                function v() {
                                    var n = s.a.c(i());
                                    t.checked = u ? 0 <= s.a.o(n, f()) : h ? n : f() === n
                                }
                                var f = s.rc(function() {
                                        return r.has("checkedValue") ? s.a.c(r.get("checkedValue")) : r.has("value") ? s.a.c(r.get("value")) : t.value
                                    }),
                                    h = "checkbox" == t.type,
                                    e = "radio" == t.type;
                                if (h || e) {
                                    var o = i(),
                                        u = h && s.a.c(o) instanceof Array,
                                        a = !(u && o.push && o.splice),
                                        c = u ? f() : n,
                                        y = e || u;
                                    e && !t.name && s.d.uniqueName.init(t, function() {
                                        return !0
                                    });
                                    s.m(l, null, {
                                        i: t
                                    });
                                    s.a.q(t, "click", l);
                                    s.m(v, null, {
                                        i: t
                                    });
                                    o = n
                                }
                            }
                        };
                        s.h.ga.checked = !0;
                        s.d.checkedValue = {
                            update: function(n, t) {
                                n.value = s.a.c(t())
                            }
                        }
                    }();
                s.d.css = {
                    update: function(n, t) {
                        var i = s.a.c(t());
                        null !== i && "object" == typeof i ? s.a.D(i, function(t, i) {
                            i = s.a.c(i);
                            s.a.fb(n, t, i)
                        }) : (i = s.a.cb(String(i || "")), s.a.fb(n, n.__ko__cssValue, !1), n.__ko__cssValue = i, s.a.fb(n, i, !0))
                    }
                };
                s.d.enable = {
                    update: function(n, t) {
                        var i = s.a.c(t());
                        i && n.disabled ? n.removeAttribute("disabled") : i || n.disabled || (n.disabled = !0)
                    }
                };
                s.d.disable = {
                    update: function(n, t) {
                        s.d.enable.update(n, function() {
                            return !s.a.c(t())
                        })
                    }
                };
                s.d.event = {
                    init: function(n, t, i, r, u) {
                        var f = t() || {};
                        s.a.D(f, function(f) {
                            "string" == typeof f && s.a.q(n, f, function(n) {
                                var o, h = t()[f],
                                    e;
                                if (h) {
                                    try {
                                        e = s.a.W(arguments);
                                        r = u.$data;
                                        e.unshift(r);
                                        o = h.apply(r, e)
                                    } finally {
                                        !0 !== o && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
                                    }!1 === i.get(f + "Bubble") && (n.cancelBubble = !0, n.stopPropagation && n.stopPropagation())
                                }
                            })
                        })
                    }
                };
                s.d.foreach = {
                    mc: function(n) {
                        return function() {
                            var i = n(),
                                t = s.a.Bb(i);
                            return !t || "number" == typeof t.length ? {
                                foreach: i,
                                templateEngine: s.X.vb
                            } : (s.a.c(i), {
                                foreach: t.data,
                                as: t.as,
                                includeDestroyed: t.includeDestroyed,
                                afterAdd: t.afterAdd,
                                beforeRemove: t.beforeRemove,
                                afterRender: t.afterRender,
                                beforeMove: t.beforeMove,
                                afterMove: t.afterMove,
                                templateEngine: s.X.vb
                            })
                        }
                    },
                    init: function(n, t) {
                        return s.d.template.init(n, s.d.foreach.mc(t))
                    },
                    update: function(n, t, i, r, u) {
                        return s.d.template.update(n, s.d.foreach.mc(t), i, r, u)
                    }
                };
                s.h.va.foreach = !1;
                s.f.aa.foreach = !0;
                s.d.hasfocus = {
                    init: function(n, t, i) {
                        function r(r) {
                            var u, f;
                            if (n.__ko_hasfocusUpdating = !0, u = n.ownerDocument, "activeElement" in u) {
                                try {
                                    f = u.activeElement
                                } catch (e) {
                                    f = u.body
                                }
                                r = f === n
                            }
                            u = t();
                            s.h.Ga(u, i, "hasfocus", r, !0);
                            n.__ko_hasfocusLastValue = r;
                            n.__ko_hasfocusUpdating = !1
                        }
                        var u = r.bind(null, !0),
                            f = r.bind(null, !1);
                        s.a.q(n, "focus", u);
                        s.a.q(n, "focusin", u);
                        s.a.q(n, "blur", f);
                        s.a.q(n, "focusout", f)
                    },
                    update: function(n, t) {
                        var i = !!s.a.c(t());
                        n.__ko_hasfocusUpdating || n.__ko_hasfocusLastValue === i || (i ? n.focus() : n.blur(), !i && n.__ko_hasfocusLastValue && n.ownerDocument.body.focus(), s.l.w(s.a.Fa, null, [n, i ? "focusin" : "focusout"]))
                    }
                };
                s.h.ga.hasfocus = !0;
                s.d.hasFocus = s.d.hasfocus;
                s.h.ga.hasFocus = !0;
                s.d.html = {
                    init: function() {
                        return {
                            controlsDescendantBindings: !0
                        }
                    },
                    update: function(n, t) {
                        s.a.Eb(n, t())
                    }
                };
                k("if");
                k("ifnot", !1, !0);
                k("with", !0, !1, function(n, t) {
                    return n.ac(t)
                });
                w = {};
                s.d.options = {
                    init: function(n) {
                        if ("select" !== s.a.A(n)) throw Error("options binding applies only to SELECT elements");
                        for (; 0 < n.length;) n.remove(0);
                        return {
                            controlsDescendantBindings: !0
                        }
                    },
                    update: function(t, i, r) {
                        function a() {
                            return s.a.Ma(t.options, function(n) {
                                return n.selected
                            })
                        }

                        function v(n, t, i) {
                            var r = typeof t;
                            return "function" == r ? t(n) : "string" == r ? n[t] : i
                        }

                        function y(n, i) {
                            if (o && e) s.j.ja(t, s.a.c(r.get("value")), !0);
                            else if (f.length) {
                                var u = 0 <= s.a.o(f, s.j.u(i[0]));
                                s.a.wc(i[0], u);
                                o && !u && s.l.w(s.a.Fa, null, [t, "change"])
                            }
                        }
                        var h = t.multiple,
                            c = 0 != t.length && h ? t.scrollTop : null,
                            u = s.a.c(i()),
                            e = r.get("valueAllowUnset") && r.has("value"),
                            p = r.get("optionsIncludeDestroyed"),
                            l, f, o;
                        i = {};
                        f = [];
                        e || (h ? f = s.a.ib(a(), s.j.u) : 0 <= t.selectedIndex && f.push(s.j.u(t.options[t.selectedIndex])));
                        u && ("undefined" == typeof u.length && (u = [u]), l = s.a.Ma(u, function(t) {
                            return p || t === n || null === t || !s.a.c(t._destroy)
                        }), r.has("optionsCaption") && (u = s.a.c(r.get("optionsCaption")), null !== u && u !== n && l.unshift(w)));
                        o = !1;
                        i.beforeRemove = function(n) {
                            t.removeChild(n)
                        };
                        u = y;
                        r.has("optionsAfterRender") && "function" == typeof r.get("optionsAfterRender") && (u = function(t, i) {
                            y(0, i);
                            s.l.w(r.get("optionsAfterRender"), null, [i[0], t !== w ? t : n])
                        });
                        s.a.Db(t, l, function(i, u, h) {
                            return h.length && (f = !e && h[0].selected ? [s.j.u(h[0])] : [], o = !0), u = t.ownerDocument.createElement("option"), i === w ? (s.a.bb(u, r.get("optionsCaption")), s.j.ja(u, n)) : (h = v(i, r.get("optionsValue"), i), s.j.ja(u, s.a.c(h)), i = v(i, r.get("optionsText"), h), s.a.bb(u, i)), [u]
                        }, i, u);
                        s.l.w(function() {
                            e ? s.j.ja(t, s.a.c(r.get("value")), !0) : (h ? f.length && a().length < f.length : f.length && 0 <= t.selectedIndex ? s.j.u(t.options[t.selectedIndex]) !== f[0] : f.length || 0 <= t.selectedIndex) && s.a.Fa(t, "change")
                        });
                        s.a.Sc(t);
                        c && 20 < Math.abs(c - t.scrollTop) && (t.scrollTop = c)
                    }
                };
                s.d.options.zb = s.a.e.J();
                s.d.selectedOptions = {
                    after: ["options", "foreach"],
                    init: function(n, t, i) {
                        s.a.q(n, "change", function() {
                            var u = t(),
                                r = [];
                            s.a.r(n.getElementsByTagName("option"), function(n) {
                                n.selected && r.push(s.j.u(n))
                            });
                            s.h.Ga(u, i, "selectedOptions", r)
                        })
                    },
                    update: function(n, t) {
                        if ("select" != s.a.A(n)) throw Error("values binding applies only to SELECT elements");
                        var i = s.a.c(t()),
                            r = n.scrollTop;
                        i && "number" == typeof i.length && s.a.r(n.getElementsByTagName("option"), function(n) {
                            var t = 0 <= s.a.o(i, s.j.u(n));
                            n.selected != t && s.a.wc(n, t)
                        });
                        n.scrollTop = r
                    }
                };
                s.h.ga.selectedOptions = !0;
                s.d.style = {
                    update: function(t, i) {
                        var r = s.a.c(i() || {});
                        s.a.D(r, function(i, r) {
                            r = s.a.c(r);
                            (null === r || r === n || !1 === r) && (r = "");
                            t.style[i] = r
                        })
                    }
                };
                s.d.submit = {
                    init: function(n, t, i, r, u) {
                        if ("function" != typeof t()) throw Error("The value for a submit binding must be a function");
                        s.a.q(n, "submit", function(i) {
                            var r, f = t();
                            try {
                                r = f.call(u.$data, n)
                            } finally {
                                !0 !== r && (i.preventDefault ? i.preventDefault() : i.returnValue = !1)
                            }
                        })
                    }
                };
                s.d.text = {
                    init: function() {
                        return {
                            controlsDescendantBindings: !0
                        }
                    },
                    update: function(n, t) {
                        s.a.bb(n, t())
                    }
                };
                s.f.aa.text = !0,
                    function() {
                        if (r && r.navigator) var t = function(n) {
                                if (n) return parseFloat(n[1])
                            },
                            e = r.opera && r.opera.version && parseInt(r.opera.version()),
                            i = r.navigator.userAgent,
                            o = t(i.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),
                            h = t(i.match(/Firefox\/([^ ]*)/));
                        if (10 > s.a.C) var u = s.a.e.J(),
                            f = s.a.e.J(),
                            c = function(n) {
                                var t = this.activeElement;
                                (t = t && s.a.e.get(t, f)) && t(n)
                            },
                            l = function(n, t) {
                                var i = n.ownerDocument;
                                s.a.e.get(i, u) || (s.a.e.set(i, u, !0), s.a.q(i, "selectionchange", c));
                                s.a.e.set(n, f, t)
                            };
                        s.d.textInput = {
                            init: function(t, i, r) {
                                function u(n, i) {
                                    s.a.q(t, n, i)
                                }

                                function p() {
                                    var r = s.a.c(i());
                                    (null === r || r === n) && (r = "");
                                    v !== n && r === v ? s.a.setTimeout(p, 4) : t.value !== r && (y = r, t.value = r)
                                }

                                function c() {
                                    a || (v = t.value, a = s.a.setTimeout(f, 4))
                                }

                                function f() {
                                    clearTimeout(a);
                                    v = a = n;
                                    var u = t.value;
                                    y !== u && (y = u, s.h.Ga(i(), r, "textInput", u))
                                }
                                var y = t.value,
                                    a, v, w = 9 == s.a.C ? c : f;
                                10 > s.a.C ? (u("propertychange", function(n) {
                                    "value" === n.propertyName && w(n)
                                }), 8 == s.a.C && (u("keyup", f), u("keydown", f)), 8 <= s.a.C && (l(t, w), u("dragend", c))) : (u("input", f), 5 > o && "textarea" === s.a.A(t) ? (u("keydown", c), u("paste", c), u("cut", c)) : 11 > e ? u("keydown", c) : 4 > h && (u("DOMAutoComplete", f), u("dragdrop", f), u("drop", f)));
                                u("change", f);
                                s.m(p, null, {
                                    i: t
                                })
                            }
                        };
                        s.h.ga.textInput = !0;
                        s.d.textinput = {
                            preprocess: function(n, t, i) {
                                i("textInput", n)
                            }
                        }
                    }();
                s.d.uniqueName = {
                    init: function(n, t) {
                        if (t()) {
                            var i = "ko_unique_" + ++s.d.uniqueName.Nc;
                            s.a.vc(n, i)
                        }
                    }
                };
                s.d.uniqueName.Nc = 0;
                s.d.value = {
                    after: ["options", "foreach"],
                    init: function(n, t, i) {
                        var o, h;
                        if ("input" != n.tagName.toLowerCase() || "checkbox" != n.type && "radio" != n.type) {
                            var r = ["change"],
                                u = i.get("valueUpdate"),
                                f = !1,
                                e = null;
                            u && ("string" == typeof u && (u = [u]), s.a.ta(r, u), r = s.a.Wb(r));
                            o = function() {
                                e = null;
                                f = !1;
                                var r = t(),
                                    u = s.j.u(n);
                                s.h.Ga(r, i, "value", u)
                            };
                            !s.a.C || "input" != n.tagName.toLowerCase() || "text" != n.type || "off" == n.autocomplete || n.form && "off" == n.form.autocomplete || -1 != s.a.o(r, "propertychange") || (s.a.q(n, "propertychange", function() {
                                f = !0
                            }), s.a.q(n, "focus", function() {
                                f = !1
                            }), s.a.q(n, "blur", function() {
                                f && o()
                            }));
                            s.a.r(r, function(t) {
                                var i = o;
                                s.a.sd(t, "after") && (i = function() {
                                    e = s.j.u(n);
                                    s.a.setTimeout(o, 0)
                                }, t = t.substring(5));
                                s.a.q(n, t, i)
                            });
                            h = function() {
                                var r = s.a.c(t()),
                                    u = s.j.u(n),
                                    f;
                                null !== e && r === e ? s.a.setTimeout(h, 0) : r !== u && ("select" === s.a.A(n) ? (f = i.get("valueAllowUnset"), u = function() {
                                    s.j.ja(n, r, f)
                                }, u(), f || r === s.j.u(n) ? s.a.setTimeout(u, 0) : s.l.w(s.a.Fa, null, [n, "change"])) : s.j.ja(n, r))
                            };
                            s.m(h, null, {
                                i: n
                            })
                        } else s.La(n, {
                            checkedValue: t
                        })
                    },
                    update: function() {}
                };
                s.h.ga.value = !0;
                s.d.visible = {
                        update: function(n, t) {
                            var i = s.a.c(t()),
                                r = "none" != n.style.display;
                            i && !r ? n.style.display = "" : !i && r && (n.style.display = "none")
                        }
                    },
                    function(n) {
                        s.d[n] = {
                            init: function(t, i, r, u, f) {
                                return s.d.event.init.call(this, t, function() {
                                    var t = {};
                                    return t[n] = i(), t
                                }, r, u, f)
                            }
                        }
                    }("click");
                s.P = function() {};
                s.P.prototype.renderTemplateSource = function() {
                    throw Error("Override renderTemplateSource");
                };
                s.P.prototype.createJavaScriptEvaluatorBlock = function() {
                    throw Error("Override createJavaScriptEvaluatorBlock");
                };
                s.P.prototype.makeTemplateSource = function(n, i) {
                    if ("string" == typeof n) {
                        i = i || t;
                        var r = i.getElementById(n);
                        if (!r) throw Error("Cannot find template with ID " + n);
                        return new s.v.n(r)
                    }
                    if (1 == n.nodeType || 8 == n.nodeType) return new s.v.sa(n);
                    throw Error("Unknown template type: " + n);
                };
                s.P.prototype.renderTemplate = function(n, t, i, r) {
                    return n = this.makeTemplateSource(n, r), this.renderTemplateSource(n, t, i, r)
                };
                s.P.prototype.isTemplateRewritten = function(n, t) {
                    return !1 === this.allowTemplateRewriting ? !0 : this.makeTemplateSource(n, t).data("isRewritten")
                };
                s.P.prototype.rewriteTemplate = function(n, t, i) {
                    n = this.makeTemplateSource(n, i);
                    t = t(n.text());
                    n.text(t);
                    n.data("isRewritten", !0)
                };
                s.b("templateEngine", s.P);
                s.Ib = function() {
                    function n(n, t, i, r) {
                        var o, f, u, e;
                        for (n = s.h.Ab(n), o = s.h.va, f = 0; f < n.length; f++)
                            if (u = n[f].key, o.hasOwnProperty(u))
                                if (e = o[u], "function" == typeof e) {
                                    if (u = e(n[f].value)) throw Error(u);
                                } else if (!e) throw Error("This template engine does not support the '" + u + "' binding within its templates");
                        return i = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + s.h.Xa(n, {
                            valueAccessors: !0
                        }) + " } })()},'" + i.toLowerCase() + "')", r.createJavaScriptEvaluatorBlock(i) + t
                    }
                    var t = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
                        i = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
                    return {
                        Tc: function(n, t, i) {
                            t.isTemplateRewritten(n, i) || t.rewriteTemplate(n, function(n) {
                                return s.Ib.jd(n, t)
                            }, i)
                        },
                        jd: function(r, u) {
                            return r.replace(t, function(t, i, r, f, e) {
                                return n(e, i, r, u)
                            }).replace(i, function(t, i) {
                                return n(i, "<!-- ko -->", "#comment", u)
                            })
                        },
                        Jc: function(n, t) {
                            return s.N.yb(function(i, r) {
                                var u = i.nextSibling;
                                u && u.nodeName.toLowerCase() === t && s.La(u, n, r)
                            })
                        }
                    }
                }();
                s.b("__tr_ambtns", s.Ib.Jc),
                    function() {
                        var i, t;
                        s.v = {};
                        s.v.n = function(n) {
                            if (this.n = n) {
                                var t = s.a.A(n);
                                this.eb = "script" === t ? 1 : "textarea" === t ? 2 : "template" == t && n.content && 11 === n.content.nodeType ? 3 : 4
                            }
                        };
                        s.v.n.prototype.text = function() {
                            var n = 1 === this.eb ? "text" : 2 === this.eb ? "value" : "innerHTML",
                                t;
                            if (0 == arguments.length) return this.n[n];
                            t = arguments[0];
                            "innerHTML" === n ? s.a.Eb(this.n, t) : this.n[n] = t
                        };
                        i = s.a.e.J() + "_";
                        s.v.n.prototype.data = function(n) {
                            if (1 === arguments.length) return s.a.e.get(this.n, i + n);
                            s.a.e.set(this.n, i + n, arguments[1])
                        };
                        t = s.a.e.J();
                        s.v.n.prototype.nodes = function() {
                            var i = this.n;
                            if (0 == arguments.length) return (s.a.e.get(i, t) || {}).mb || (3 === this.eb ? i.content : 4 === this.eb ? i : n);
                            s.a.e.set(i, t, {
                                mb: arguments[0]
                            })
                        };
                        s.v.sa = function(n) {
                            this.n = n
                        };
                        s.v.sa.prototype = new s.v.n;
                        s.v.sa.prototype.text = function() {
                            if (0 == arguments.length) {
                                var i = s.a.e.get(this.n, t) || {};
                                return i.Jb === n && i.mb && (i.Jb = i.mb.innerHTML), i.Jb
                            }
                            s.a.e.set(this.n, t, {
                                Jb: arguments[0]
                            })
                        };
                        s.b("templateSources", s.v);
                        s.b("templateSources.domElement", s.v.n);
                        s.b("templateSources.anonymousTemplate", s.v.sa)
                    }(),
                    function() {
                        function t(n, t, i) {
                            var r;
                            for (t = s.f.nextSibling(t); n && (r = n) !== t;) n = s.f.nextSibling(r), i(r, n)
                        }

                        function f(n, i) {
                            if (n.length) {
                                var r = n[0],
                                    u = n[n.length - 1],
                                    f = r.parentNode,
                                    e = s.S.instance,
                                    o = e.preprocessNode;
                                if (o) {
                                    if (t(r, u, function(n, t) {
                                            var f = n.previousSibling,
                                                i = o.call(e, n);
                                            i && (n === r && (r = i[0] || t), n === u && (u = i[i.length - 1] || f))
                                        }), n.length = 0, !r) return;
                                    r === u ? n.push(r) : (n.push(r, u), s.a.Ba(n, f))
                                }
                                t(r, u, function(n) {
                                    1 !== n.nodeType && 8 !== n.nodeType || s.Ub(i, n)
                                });
                                t(r, u, function(n) {
                                    1 !== n.nodeType && 8 !== n.nodeType || s.N.Cc(n, [i])
                                });
                                s.a.Ba(n, f)
                            }
                        }

                        function i(n) {
                            return n.nodeType ? n : 0 < n.length ? n[0] : null
                        }

                        function e(n, t, u, e, o) {
                            o = o || {};
                            var h = (n && i(n) || u || {}).ownerDocument,
                                c = o.templateEngine || r;
                            if (s.Ib.Tc(u, c, h), u = c.renderTemplate(u, e, o, h), "number" != typeof u.length || 0 < u.length && "number" != typeof u[0].nodeType) throw Error("Template engine must return an array of DOM nodes");
                            h = !1;
                            switch (t) {
                                case "replaceChildren":
                                    s.f.fa(n, u);
                                    h = !0;
                                    break;
                                case "replaceNode":
                                    s.a.uc(n, u);
                                    h = !0;
                                    break;
                                case "ignoreTargetNode":
                                    break;
                                default:
                                    throw Error("Unknown renderMode: " + t);
                            }
                            return h && (f(u, e), o.afterRender && s.l.w(o.afterRender, null, [u, e.$data])), u
                        }

                        function o(n, t, i) {
                            return s.I(n) ? n() : "function" == typeof n ? n(t, i) : n
                        }
                        var r, u;
                        s.Fb = function(t) {
                            if (t != n && !(t instanceof s.P)) throw Error("templateEngine must inherit from ko.templateEngine");
                            r = t
                        };
                        s.Cb = function(t, u, f, h, c) {
                            if (f = f || {}, (f.templateEngine || r) == n) throw Error("Set a template engine before calling renderTemplate");
                            if (c = c || "replaceChildren", h) {
                                var l = i(h);
                                return s.B(function() {
                                    var n = u && u instanceof s.R ? u : new s.R(u, null, null, null, {
                                            exportDependencies: !0
                                        }),
                                        r = o(t, n.$data, n),
                                        n = e(h, c, r, n, f);
                                    "replaceNode" == c && (h = n, l = i(h))
                                }, null, {
                                    ya: function() {
                                        return !l || !s.a.qb(l)
                                    },
                                    i: l && "replaceNode" == c ? l.parentNode : l
                                })
                            }
                            return s.N.yb(function(n) {
                                s.Cb(t, u, f, n, "replaceNode")
                            })
                        };
                        s.pd = function(t, i, r, u, h) {
                            function l(n, t) {
                                f(t, c);
                                r.afterRender && r.afterRender(t, n);
                                c = null
                            }

                            function a(n, i) {
                                c = h.createChildContext(n, r.as, function(n) {
                                    n.$index = i
                                });
                                var u = o(t, n, c);
                                return e(null, "ignoreTargetNode", u, c, r)
                            }
                            var c;
                            return s.B(function() {
                                var t = s.a.c(i) || [];
                                "undefined" == typeof t.length && (t = [t]);
                                t = s.a.Ma(t, function(t) {
                                    return r.includeDestroyed || t === n || null === t || !s.a.c(t._destroy)
                                });
                                s.l.w(s.a.Db, null, [u, t, a, r, l])
                            }, null, {
                                i: u
                            })
                        };
                        u = s.a.e.J();
                        s.d.template = {
                            init: function(n, t) {
                                var i = s.a.c(t());
                                if ("string" == typeof i || i.name) s.f.za(n);
                                else {
                                    if ("nodes" in i) {
                                        if (i = i.nodes || [], s.I(i)) throw Error('The "nodes" option must be a plain, non-observable array.');
                                    } else i = s.f.childNodes(n);
                                    i = s.a.nc(i);
                                    new s.v.sa(n).nodes(i)
                                }
                                return {
                                    controlsDescendantBindings: !0
                                }
                            },
                            update: function(t, i, r, f, e) {
                                var o = i();
                                i = s.a.c(o);
                                r = !0;
                                f = null;
                                "string" == typeof i ? i = {} : (o = i.name, "if" in i && (r = s.a.c(i["if"])), r && "ifnot" in i && (r = !s.a.c(i.ifnot)));
                                "foreach" in i ? f = s.pd(o || t, r && i.foreach || [], i, t, e) : r ? (e = "data" in i ? e.ac(i.data, i.as) : e, f = s.Cb(o || t, e, i, t)) : s.f.za(t);
                                e = f;
                                (i = s.a.e.get(t, u)) && "function" == typeof i.k && i.k();
                                s.a.e.set(t, u, e && e.ca() ? e : n)
                            }
                        };
                        s.h.va.template = function(n) {
                            return n = s.h.Ab(n), 1 == n.length && n[0].unknown || s.h.fd(n, "name") ? null : "This template engine does not support anonymous templates nested within its templates"
                        };
                        s.f.aa.template = !0
                    }();
                s.b("setTemplateEngine", s.Fb);
                s.b("renderTemplate", s.Cb);
                s.a.hc = function(n, t, i) {
                    if (n.length && t.length)
                        for (var o, r, f, e, u = o = 0;
                            (!i || u < i) && (f = n[o]); ++o) {
                            for (r = 0; e = t[r]; ++r)
                                if (f.value === e.value) {
                                    f.moved = e.index;
                                    e.moved = f.index;
                                    t.splice(r, 1);
                                    u = r = 0;
                                    break
                                }
                            u += r
                        }
                };
                s.a.lb = function() {
                    function n(n, t, i, r, u) {
                        for (var o = Math.min, l = Math.max, a = [], c = n.length, f, h = t.length, v = h - c || 1, w = c + h + 1, y, p, b, e = 0; e <= c; e++)
                            for (p = y, a.push(y = []), b = o(h, e + v), f = l(0, e - 1); f <= b; f++) y[f] = f ? e ? n[e - 1] === t[f - 1] ? p[f - 1] : o(p[f] || w, y[f - 1] || w) + 1 : f + 1 : e + 1;
                        for (o = [], l = [], v = [], e = c, f = h; e || f;) h = a[e][f] - 1, f && h === a[e][f - 1] ? l.push(o[o.length] = {
                            status: i,
                            value: t[--f],
                            index: f
                        }) : e && h === a[e - 1][f] ? v.push(o[o.length] = {
                            status: r,
                            value: n[--e],
                            index: e
                        }) : (--f, --e, u.sparse || o.push({
                            status: "retained",
                            value: t[f]
                        }));
                        return s.a.hc(v, l, !u.dontLimitMoves && 10 * c), o.reverse()
                    }
                    return function(t, i, r) {
                        return r = "boolean" == typeof r ? {
                            dontLimitMoves: r
                        } : r || {}, t = t || [], i = i || [], t.length < i.length ? n(t, i, "added", "deleted", r) : n(i, t, "deleted", "added", r)
                    }
                }();
                s.b("utils.compareArrays", s.a.lb),
                    function() {
                        function r(t, i, r, u, f) {
                            var e = [],
                                o = s.B(function() {
                                    var n = i(r, f, s.a.Ba(e, t)) || [];
                                    0 < e.length && (s.a.uc(e, n), u && s.l.w(u, null, [r, n, f]));
                                    e.length = 0;
                                    s.a.ta(e, n)
                                }, null, {
                                    i: t,
                                    ya: function() {
                                        return !s.a.Tb(e)
                                    }
                                });
                            return {
                                ea: e,
                                B: o.ca() ? o : n
                            }
                        }
                        var t = s.a.e.J(),
                            i = s.a.e.J();
                        s.a.Db = function(u, f, e, o, h) {
                            function ut(n, t) {
                                c = g[t];
                                tt !== t && (rt[n] = c);
                                c.tb(tt++);
                                s.a.Ba(c.ea, u);
                                w.push(c);
                                b.push(c)
                            }

                            function y(n, t) {
                                if (n)
                                    for (var i = 0, r = t.length; i < r; i++) t[i] && s.a.r(t[i].ea, function(r) {
                                        n(r, i, t[i].ka)
                                    })
                            }
                            var l, p, ft;
                            f = f || [];
                            o = o || {};
                            var p = s.a.e.get(u, t) === n,
                                g = s.a.e.get(u, t) || [],
                                nt = s.a.ib(g, function(n) {
                                    return n.ka
                                }),
                                a = s.a.lb(nt, f, o.dontLimitMoves),
                                w = [],
                                v = 0,
                                tt = 0,
                                it = [],
                                b = [];
                            f = [];
                            for (var rt = [], nt = [], c, l = 0, k, d; k = a[l]; l++) switch (d = k.moved, k.status) {
                                case "deleted":
                                    d === n && (c = g[v], c.B && (c.B.k(), c.B = n), s.a.Ba(c.ea, u).length && (o.beforeRemove && (w.push(c), b.push(c), c.ka === i ? c = null : f[l] = c), c && it.push.apply(it, c.ea)));
                                    v++;
                                    break;
                                case "retained":
                                    ut(l, v++);
                                    break;
                                case "added":
                                    d !== n ? ut(l, d) : (c = {
                                        ka: k.value,
                                        tb: s.O(tt++)
                                    }, w.push(c), b.push(c), p || (nt[l] = c))
                            }
                            for (s.a.e.set(u, t, w), y(o.beforeMove, rt), s.a.r(it, o.beforeRemove ? s.ba : s.removeNode), l = 0, p = s.f.firstChild(u); c = b[l]; l++) {
                                for (c.ea || s.a.extend(c, r(u, e, c.ka, h, c.tb)), v = 0; a = c.ea[v]; p = a.nextSibling, ft = a, v++) a !== p && s.f.kc(u, a, ft);
                                !c.ad && h && (h(c.ka, c.ea, c.tb), c.ad = !0)
                            }
                            for (y(o.beforeRemove, f), l = 0; l < f.length; ++l) f[l] && (f[l].ka = i);
                            y(o.afterMove, rt);
                            y(o.afterAdd, nt)
                        }
                    }();
                s.b("utils.setDomNodeChildrenFromArrayMapping", s.a.Db);
                s.X = function() {
                    this.allowTemplateRewriting = !1
                };
                s.X.prototype = new s.P;
                s.X.prototype.renderTemplateSource = function(n, t, i, r) {
                    return (t = (9 > s.a.C ? 0 : n.nodes) ? n.nodes() : null) ? s.a.W(t.cloneNode(!0).childNodes) : (n = n.text(), s.a.na(n, r))
                };
                s.X.vb = new s.X;
                s.Fb(s.X.vb);
                s.b("nativeTemplateEngine", s.X),
                    function() {
                        s.xb = function() {
                            var n = this.ed = function() {
                                if (!i || !i.tmpl) return 0;
                                try {
                                    if (0 <= i.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2
                                } catch (n) {}
                                return 1
                            }();
                            this.renderTemplateSource = function(r, u, f, e) {
                                if (e = e || t, f = f || {}, 2 > n) throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
                                var o = r.data("precompiled");
                                return o || (o = r.text() || "", o = i.template(null, "{{ko_with $item.koBindingContext}}" + o + "{{/ko_with}}"), r.data("precompiled", o)), r = [u.$data], u = i.extend({
                                    koBindingContext: u
                                }, f.templateOptions), u = i.tmpl(o, r, u), u.appendTo(e.createElement("div")), i.fragments = {}, u
                            };
                            this.createJavaScriptEvaluatorBlock = function(n) {
                                return "{{ko_code ((function() { return " + n + " })()) }}"
                            };
                            this.addTemplate = function(n, i) {
                                t.write("<script type='text/html' id='" + n + "'>" + i + "<\/script>")
                            };
                            0 < n && (i.tmpl.tag.ko_code = {
                                open: "__.push($1 || '');"
                            }, i.tmpl.tag.ko_with = {
                                open: "with($1) {",
                                close: "} "
                            })
                        };
                        s.xb.prototype = new s.P;
                        var n = new s.xb;
                        0 < n.ed && s.Fb(n);
                        s.b("jqueryTmplTemplateEngine", s.xb)
                    }()
            })
        })()
    }(),
    function(n, t) {
        var i = t(n, n.document);
        n.lazySizes = i;
        typeof module == "object" && module.exports && (module.exports = i)
    }(window, function(n, t) {
        "use strict";
        if (t.getElementsByClassName) {
            var i, s = t.documentElement,
                f = n.Date,
                ft = n.HTMLPictureElement,
                e = "addEventListener",
                r = "getAttribute",
                o = n[e],
                u = n.setTimeout,
                et = n.requestAnimationFrame || u,
                c = n.requestIdleCallback,
                tt = /^picture$/i,
                ot = ["load", "error", "lazyincluded", "_lazyloaded"],
                l = {},
                st = Array.prototype.forEach,
                a = function(n, t) {
                    return l[t] || (l[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), l[t].test(n[r]("class") || "") && l[t]
                },
                v = function(n, t) {
                    a(n, t) || n.setAttribute("class", (n[r]("class") || "").trim() + " " + t)
                },
                d = function(n, t) {
                    var i;
                    (i = a(n, t)) && n.setAttribute("class", (n[r]("class") || "").replace(i, " "))
                },
                h = function(n, t, i) {
                    var r = i ? e : "removeEventListener";
                    i && h(n, t);
                    ot.forEach(function(i) {
                        n[r](i, t)
                    })
                },
                y = function(n, i, r, u, f) {
                    var e = t.createEvent("CustomEvent");
                    return e.initCustomEvent(i, !u, !f, r || {}), n.dispatchEvent(e), e
                },
                g = function(t, r) {
                    var u;
                    !ft && (u = n.picturefill || i.pf) ? u({
                        reevaluate: !0,
                        elements: [t]
                    }) : r && r.src && (t.src = r.src)
                },
                p = function(n, t) {
                    return (getComputedStyle(n, null) || {})[t]
                },
                it = function(n, t, r) {
                    for (r = r || n.offsetWidth; r < i.minSize && t && !n._lazysizesWidth;) r = t.offsetWidth, t = t.parentNode;
                    return r
                },
                w = function() {
                    var n, i, r = [],
                        f = function() {
                            var t;
                            for (n = !0, i = !1; r.length;) t = r.shift(), t[0].apply(t[1], t[2]);
                            n = !1
                        };
                    return function(e) {
                        n ? e.apply(this, arguments) : (r.push([e, this, arguments]), i || (i = !0, (t.hidden ? u : et)(f)))
                    }
                }(),
                b = function(n, t) {
                    return t ? function() {
                        w(n)
                    } : function() {
                        var t = this,
                            i = arguments;
                        w(function() {
                            n.apply(t, i)
                        })
                    }
                },
                ht = function(n) {
                    var i, e = 0,
                        h = 125,
                        r = 999,
                        t = r,
                        o = function() {
                            i = !1;
                            e = f.now();
                            n()
                        },
                        s = c ? function() {
                            c(o, {
                                timeout: t
                            });
                            t !== r && (t = r)
                        } : b(function() {
                            u(o)
                        }, !0);
                    return function(n) {
                        var r;
                        ((n = n === !0) && (t = 66), i) || (i = !0, r = h - (f.now() - e), r < 0 && (r = 0), n || r < 9 && c ? s() : u(s, r))
                    }
                },
                rt = function(n) {
                    var t, r, i = 99,
                        e = function() {
                            t = null;
                            n()
                        },
                        o = function() {
                            var n = f.now() - r;
                            n < i ? u(o, i - n) : (c || e)(e)
                        };
                    return function() {
                        r = f.now();
                        t || (t = u(o, i))
                    }
                },
                ut = function() {
                    var l, vt, ut, gt, ft, ni, ti, ii, et, ot, ct, lt, kt, yt, dt, fi = /^img$/i,
                        ei = /^iframe$/i,
                        oi = "onscroll" in n && !/glebot/.test(navigator.userAgent),
                        si = 0,
                        at = 0,
                        k = 0,
                        it = 0,
                        pt = function(n) {
                            k--;
                            n && n.target && h(n.target, pt);
                            (!n || k < 0 || !n.target) && (k = 0)
                        },
                        hi = function(n, i) {
                            var u, r = n,
                                f = p(t.body, "visibility") == "hidden" || p(n, "visibility") != "hidden";
                            for (et -= i, lt += i, ot -= i, ct += i; f && (r = r.offsetParent) && r != t.body && r != s;) f = (p(r, "opacity") || 1) > 0, f && p(r, "overflow") != "visible" && (u = r.getBoundingClientRect(), f = ct > u.left && ot < u.right && lt > u.top - 1 && et < u.bottom + 1);
                            return f
                        },
                        ci = function() {
                            var c, n, u, f, o, t, h, e, a;
                            if ((ft = i.loadMode) && k < 8 && (c = l.length)) {
                                for (n = 0, it++, yt == null && ("expand" in i || (i.expand = s.clientHeight > 500 ? 500 : 400), kt = i.expand, yt = kt * i.expFactor), at < yt && k < 1 && it > 3 && ft > 2 ? (at = yt, it = 0) : at = ft > 1 && it > 2 && k < 6 ? kt : si; n < c; n++)
                                    if (l[n] && !l[n]._lazyRace) {
                                        if (!oi) {
                                            wt(l[n]);
                                            continue
                                        }
                                        if ((e = l[n][r]("data-expand")) && (t = e * 1) || (t = at), a !== t && (ti = innerWidth + t * dt, ii = innerHeight + t, h = t * -1, a = t), u = l[n].getBoundingClientRect(), (lt = u.bottom) >= h && (et = u.top) <= ii && (ct = u.right) >= h * dt && (ot = u.left) <= ti && (lt || ct || ot || et) && (ut && k < 3 && !e && (ft < 3 || it < 4) || hi(l[n], t))) {
                                            if (wt(l[n]), o = !0, k > 9) break
                                        } else !o && ut && !f && k < 4 && it < 4 && ft > 2 && (vt[0] || i.preloadAfterLoad) && (vt[0] || !e && (lt || ct || ot || et || l[n][r](i.sizesAttr) != "auto")) && (f = vt[0] || l[n])
                                    }
                                f && !o && wt(f)
                            }
                        },
                        c = ht(ci),
                        ri = function(n) {
                            v(n.target, i.loadedClass);
                            d(n.target, i.loadingClass);
                            h(n.target, ui)
                        },
                        li = b(ri),
                        ui = function(n) {
                            li({
                                target: n.target
                            })
                        },
                        ai = function(n, t) {
                            try {
                                n.contentWindow.location.replace(t)
                            } catch (i) {
                                n.src = t
                            }
                        },
                        vi = function(n) {
                            var t, u, f = n[r](i.srcsetAttr);
                            (t = i.customMedia[n[r]("data-media") || n[r]("media")]) && n.setAttribute("media", t);
                            f && n.setAttribute("srcset", f);
                            t && (u = n.parentNode, u.insertBefore(n.cloneNode(), n), u.removeChild(n))
                        },
                        yi = b(function(n, t, f, e, o) {
                            var s, c, a, l, p, b;
                            (p = y(n, "lazybeforeunveil", t)).defaultPrevented || (e && (f ? v(n, i.autosizesClass) : n.setAttribute("sizes", e)), c = n[r](i.srcsetAttr), s = n[r](i.srcAttr), o && (a = n.parentNode, l = a && tt.test(a.nodeName || "")), b = t.firesLoad || "src" in n && (c || s || l), p = {
                                target: n
                            }, b && (h(n, pt, !0), clearTimeout(gt), gt = u(pt, 2500), v(n, i.loadingClass), h(n, ui, !0)), l && st.call(a.getElementsByTagName("source"), vi), c ? n.setAttribute("srcset", c) : s && !l && (ei.test(n.nodeName) ? ai(n, s) : n.src = s), (c || l) && g(n, {
                                src: s
                            }));
                            w(function() {
                                n._lazyRace && delete n._lazyRace;
                                d(n, i.lazyClass);
                                (!b || n.complete) && (b ? pt(p) : k--, ri(p))
                            })
                        }),
                        wt = function(n) {
                            var f, t = fi.test(n.nodeName),
                                e = t && (n[r](i.sizesAttr) || n[r]("sizes")),
                                u = e == "auto";
                            (u || !ut) && t && (n.src || n.srcset) && !n.complete && !a(n, i.errorClass) || (f = y(n, "lazyunveilread").detail, u && nt.updateElem(n, !0, n.offsetWidth), n._lazyRace = !0, k++, yi(n, f, u, e, t))
                        },
                        bt = function() {
                            if (!ut) {
                                if (f.now() - ni < 999) {
                                    u(bt, 999);
                                    return
                                }
                                var n = rt(function() {
                                    i.loadMode = 3;
                                    c()
                                });
                                ut = !0;
                                i.loadMode = 3;
                                c();
                                o("scroll", function() {
                                    i.loadMode == 3 && (i.loadMode = 2);
                                    n()
                                }, !0)
                            }
                        };
                    return {
                        _: function() {
                            ni = f.now();
                            l = t.getElementsByClassName(i.lazyClass);
                            vt = t.getElementsByClassName(i.lazyClass + " " + i.preloadClass);
                            dt = i.hFac;
                            o("scroll", c, !0);
                            o("resize", c, !0);
                            n.MutationObserver ? new MutationObserver(c).observe(s, {
                                childList: !0,
                                subtree: !0,
                                attributes: !0
                            }) : (s[e]("DOMNodeInserted", c, !0), s[e]("DOMAttrModified", c, !0), setInterval(c, 999));
                            o("hashchange", c, !0);
                            ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function(n) {
                                t[e](n, c, !0)
                            });
                            /d$|^c/.test(t.readyState) ? bt() : (o("load", bt), t[e]("DOMContentLoaded", c), u(bt, 2e4));
                            c(l.length > 0)
                        },
                        checkElems: c,
                        unveil: wt
                    }
                }(),
                nt = function() {
                    var n, f = b(function(n, t, i, r) {
                            var f, u, e;
                            if (n._lazysizesWidth = r, r += "px", n.setAttribute("sizes", r), tt.test(t.nodeName || ""))
                                for (f = t.getElementsByTagName("source"), u = 0, e = f.length; u < e; u++) f[u].setAttribute("sizes", r);
                            i.detail.dataAttr || g(n, i.detail)
                        }),
                        r = function(n, t, i) {
                            var r, u = n.parentNode;
                            u && (i = it(n, u, i), r = y(n, "lazybeforesizes", {
                                width: i,
                                dataAttr: !!t
                            }), r.defaultPrevented || (i = r.detail.width, i && i !== n._lazysizesWidth && f(n, u, r, i)))
                        },
                        e = function() {
                            var t, i = n.length;
                            if (i)
                                for (t = 0; t < i; t++) r(n[t])
                        },
                        u = rt(e);
                    return {
                        _: function() {
                            n = t.getElementsByClassName(i.autosizesClass);
                            o("resize", u)
                        },
                        checkElems: u,
                        updateElem: r
                    }
                }(),
                k = function() {
                    k.i || (k.i = !0, nt._(), ut._())
                };
            return function() {
                var t, r = {
                    lazyClass: "lazyload",
                    loadedClass: "lazyloaded",
                    loadingClass: "lazyloading",
                    preloadClass: "lazypreload",
                    errorClass: "lazyerror",
                    autosizesClass: "lazyautosizes",
                    srcAttr: "data-src",
                    srcsetAttr: "data-srcset",
                    sizesAttr: "data-sizes",
                    minSize: 40,
                    customMedia: {},
                    init: !0,
                    expFactor: 1.6,
                    hFac: .8,
                    loadMode: 2
                };
                i = n.lazySizesConfig || n.lazysizesConfig || {};
                for (t in r) t in i || (i[t] = r[t]);
                n.lazySizesConfig = i;
                u(function() {
                    i.init && k()
                })
            }(), {
                cfg: i,
                autoSizer: nt,
                loader: ut,
                init: k,
                uP: g,
                aC: v,
                rC: d,
                hC: a,
                fire: y,
                gW: it,
                rAF: w
            }
        }
    });
lazysizes = function(n, t) {
    var i = [function(n, t) {
            t.addEventListener("lazybeforeunveil", function(t) {
                var e = function() {
                        var n = window.navigator.userAgent,
                            t = n.indexOf("MSIE ");
                        return t > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./) ? !0 : !1
                    },
                    r = function(n) {
                        var t = {},
                            u = n.split(", "),
                            r, i;
                        if (u.length > 1)
                            for (r = 0; r < u.length; r++) i = u[r].split(" "), i.length === 1 ? t[0] = i[0] : t[parseInt(i[1], 10)] = i[0];
                        else t[0] = n, t[1] = n, t[2] = n;
                        return t
                    };
                if (e()) {
                    var o = n(t.target),
                        i = r(t.target.getAttribute("data-srcset")),
                        u = window.devicePixelRatio >= 1.5,
                        f = i[window.devicePixelRatio] === undefined ? i[u ? 2 : 1] : i[Math.ceil(window.devicePixelRatio)];
                    t.target.src = f
                }
                if (n(t.target).closest("figure").hasClass("cover-graphic") || n(t.target).closest("figure").hasClass("cover-photo")) {
                    var o = n(t.target),
                        s = o.closest("figure"),
                        i = r(t.target.getAttribute("data-srcset")),
                        u = window.devicePixelRatio >= 1.5,
                        f = i[window.devicePixelRatio] === undefined ? i[u ? 2 : 1] : i[Math.ceil(window.devicePixelRatio)];
                    s.css("background-image", 'url("' + f + '")')
                } else n(t.target).closest("figure").hasClass("unveil") && setTimeout(function() {
                    n(t.target).closest("figure").addClass("unveiled")
                }, 600)
            })
        }, ],
        r = function() {
            u()
        },
        u = function() {
            i.forEach(function(i) {
                i(n, t)
            })
        };
    return {
        init: r
    }
}(jQuery, document);
lazysizes.init();
! function(n, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : n.moment = t()
}(this, function() {
    "use strict";

    function t() {
        return ke.apply(null, arguments)
    }

    function tt(n) {
        return n instanceof Array || "[object Array]" === Object.prototype.toString.call(n)
    }

    function hi(n) {
        return null != n && "[object Object]" === Object.prototype.toString.call(n)
    }

    function p(n) {
        return void 0 === n
    }

    function dt(n) {
        return "number" == typeof n || "[object Number]" === Object.prototype.toString.call(n)
    }

    function di(n) {
        return n instanceof Date || "[object Date]" === Object.prototype.toString.call(n)
    }

    function of(n, t) {
        for (var r = [], i = 0; i < n.length; ++i) r.push(t(n[i], i));
        return r
    }

    function l(n, t) {
        return Object.prototype.hasOwnProperty.call(n, t)
    }

    function vt(n, t) {
        for (var i in t) l(t, i) && (n[i] = t[i]);
        return l(t, "toString") && (n.toString = t.toString), l(t, "valueOf") && (n.valueOf = t.valueOf), n
    }

    function ft(n, t, i, r) {
        return re(n, t, i, r, !0).utc()
    }

    function u(n) {
        return null == n._pf && (n._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }), n._pf
    }

    function br(n) {
        if (null == n._isValid) {
            var t = u(n),
                r = de.call(t.parsedDateParts, function(n) {
                    return null != n
                }),
                i = !isNaN(n._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && r);
            if (n._strict && (i = i && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(n)) return i;
            n._isValid = i
        }
        return n._isValid
    }

    function gi(n) {
        var t = ft(NaN);
        return null != n ? vt(u(t), n) : u(t).userInvalidated = !0, t
    }

    function kr(n, t) {
        var i, r, f;
        if (p(t._isAMomentObject) || (n._isAMomentObject = t._isAMomentObject), p(t._i) || (n._i = t._i), p(t._f) || (n._f = t._f), p(t._l) || (n._l = t._l), p(t._strict) || (n._strict = t._strict), p(t._tzm) || (n._tzm = t._tzm), p(t._isUTC) || (n._isUTC = t._isUTC), p(t._offset) || (n._offset = t._offset), p(t._pf) || (n._pf = u(t)), p(t._locale) || (n._locale = t._locale), pu.length > 0)
            for (i = 0; i < pu.length; i++) p(f = t[r = pu[i]]) || (n[r] = f);
        return n
    }

    function ci(n) {
        kr(this, n);
        this._d = new Date(null != n._d ? n._d.getTime() : NaN);
        this.isValid() || (this._d = new Date(NaN));
        !1 === wu && (wu = !0, t.updateOffset(this), wu = !1)
    }

    function yt(n) {
        return n instanceof ci || null != n && null != n._isAMomentObject
    }

    function d(n) {
        return n < 0 ? Math.ceil(n) || 0 : Math.floor(n)
    }

    function f(n) {
        var t = +n,
            i = 0;
        return 0 !== t && isFinite(t) && (i = d(t)), i
    }

    function sf(n, t, i) {
        for (var e = Math.min(n.length, t.length), o = Math.abs(n.length - t.length), u = 0, r = 0; r < e; r++)(i && n[r] !== t[r] || !i && f(n[r]) !== f(t[r])) && u++;
        return u + o
    }

    function hf(n) {
        !1 === t.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + n)
    }

    function g(n, i) {
        var r = !0;
        return vt(function() {
            var u, e, f, o;
            if (null != t.deprecationHandler && t.deprecationHandler(null, n), r) {
                for (e = [], f = 0; f < arguments.length; f++) {
                    if (u = "", "object" == typeof arguments[f]) {
                        u += "\n[" + f + "] ";
                        for (o in arguments[0]) u += o + ": " + arguments[0][o] + ", ";
                        u = u.slice(0, -2)
                    } else u = arguments[f];
                    e.push(u)
                }
                hf(n + "\nArguments: " + Array.prototype.slice.call(e).join("") + "\n" + (new Error).stack);
                r = !1
            }
            return i.apply(this, arguments)
        }, i)
    }

    function cf(n, i) {
        null != t.deprecationHandler && t.deprecationHandler(n, i);
        ge[n] || (hf(i), ge[n] = !0)
    }

    function et(n) {
        return n instanceof Function || "[object Function]" === Object.prototype.toString.call(n)
    }

    function lf(n, t) {
        var i, r = vt({}, n);
        for (i in t) l(t, i) && (hi(n[i]) && hi(t[i]) ? (r[i] = {}, vt(r[i], n[i]), vt(r[i], t[i])) : null != t[i] ? r[i] = t[i] : delete r[i]);
        for (i in n) l(n, i) && !l(t, i) && hi(n[i]) && (r[i] = vt({}, r[i]));
        return r
    }

    function dr(n) {
        null != n && this.set(n)
    }

    function w(n, t) {
        var i = n.toLowerCase();
        pi[i] = pi[i + "s"] = pi[t] = n
    }

    function nt(n) {
        if ("string" == typeof n) return pi[n] || pi[n.toLowerCase()]
    }

    function gr(n) {
        var i, t, r = {};
        for (t in n) l(n, t) && (i = nt(t)) && (r[i] = n[t]);
        return r
    }

    function b(n, t) {
        to[n] = t
    }

    function ht(n, t, i) {
        var r = "" + Math.abs(n),
            u = t - r.length;
        return (n >= 0 ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, u)).toString().substr(1) + r
    }

    function r(n, t, i, r) {
        var u = r;
        "string" == typeof r && (u = function() {
            return this[r]()
        });
        n && (si[n] = u);
        t && (si[t[0]] = function() {
            return ht(u.apply(this, arguments), t[1], t[2])
        });
        i && (si[i] = function() {
            return this.localeData().ordinal(u.apply(this, arguments), n)
        })
    }

    function go(n) {
        return n.match(/\[[\s\S]/) ? n.replace(/^\[|\]$/g, "") : n.replace(/\\/g, "")
    }

    function nr(n, t) {
        return n.isValid() ? (t = af(t, n.localeData()), bu[t] = bu[t] || function(n) {
            for (var t = n.match(io), i = 0, r = t.length; i < r; i++) t[i] = si[t[i]] ? si[t[i]] : go(t[i]);
            return function(i) {
                for (var f = "", u = 0; u < r; u++) f += et(t[u]) ? t[u].call(i, n) : t[u];
                return f
            }
        }(t), bu[t](n)) : n.localeData().invalidDate()
    }

    function af(n, t) {
        function r(n) {
            return t.longDateFormat(n) || n
        }
        var i = 5;
        for (hr.lastIndex = 0; i >= 0 && hr.test(n);) n = n.replace(hr, r), hr.lastIndex = 0, i -= 1;
        return n
    }

    function i(n, t, i) {
        gu[n] = et(t) ? t : function(n) {
            return n && i ? i : t
        }
    }

    function ns(n, t) {
        return l(gu, n) ? gu[n](t._strict, t._locale) : new RegExp(function(n) {
            return gt(n.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(n, t, i, r, u) {
                return t || i || r || u
            }))
        }(n))
    }

    function gt(n) {
        return n.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function s(n, t) {
        var i, r = t;
        for ("string" == typeof n && (n = [n]), dt(t) && (r = function(n, i) {
                i[t] = f(n)
            }), i = 0; i < n.length; i++) nf[n[i]] = r
    }

    function li(n, t) {
        s(n, function(n, i, r, u) {
            r._w = r._w || {};
            t(n, r._w, r, u)
        })
    }

    function ts(n, t, i) {
        null != t && l(nf, n) && nf[n](t, i._a, i, n)
    }

    function ai(n) {
        return tr(n) ? 366 : 365
    }

    function tr(n) {
        return n % 4 == 0 && n % 100 != 0 || n % 400 == 0
    }

    function ui(n, i) {
        return function(r) {
            return null != r ? (vf(this, n, r), t.updateOffset(this, i), this) : ir(this, n)
        }
    }

    function ir(n, t) {
        return n.isValid() ? n._d["get" + (n._isUTC ? "UTC" : "") + t]() : NaN
    }

    function vf(n, t, i) {
        n.isValid() && !isNaN(i) && ("FullYear" === t && tr(n.year()) && 1 === n.month() && 29 === n.date() ? n._d["set" + (n._isUTC ? "UTC" : "") + t](i, n.month(), rr(i, n.month())) : n._d["set" + (n._isUTC ? "UTC" : "") + t](i))
    }

    function rr(n, t) {
        if (isNaN(n) || isNaN(t)) return NaN;
        var i = function(n, t) {
            return (n % t + t) % t
        }(t, 12);
        return n += (t - i) / 12, 1 === i ? tr(n) ? 29 : 28 : 31 - i % 7 % 2
    }

    function yf(n, t) {
        var i;
        if (!n.isValid()) return n;
        if ("string" == typeof t)
            if (/^\d+$/.test(t)) t = f(t);
            else if (t = n.localeData().monthsParse(t), !dt(t)) return n;
        return i = Math.min(n.date(), rr(n.year(), t)), n._d["set" + (n._isUTC ? "UTC" : "") + "Month"](t, i), n
    }

    function pf(n) {
        return null != n ? (yf(this, n), t.updateOffset(this, !0), this) : ir(this, "Month")
    }

    function wf() {
        function f(n, t) {
            return t.length - n.length
        }
        for (var i, r = [], u = [], t = [], n = 0; n < 12; n++) i = ft([2e3, n]), r.push(this.monthsShort(i, "")), u.push(this.months(i, "")), t.push(this.months(i, "")), t.push(this.monthsShort(i, ""));
        for (r.sort(f), u.sort(f), t.sort(f), n = 0; n < 12; n++) r[n] = gt(r[n]), u[n] = gt(u[n]);
        for (n = 0; n < 24; n++) t[n] = gt(t[n]);
        this._monthsRegex = new RegExp("^(" + t.join("|") + ")", "i");
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp("^(" + u.join("|") + ")", "i");
        this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
    }

    function vi(n) {
        var t = new Date(Date.UTC.apply(null, arguments));
        return n < 100 && n >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(n), t
    }

    function ur(n, t, i) {
        var r = 7 + t - i;
        return -((7 + vi(n, 0, r).getUTCDay() - t) % 7) + r - 1
    }

    function bf(n, t, i, r, u) {
        var e, o, f = 1 + 7 * (t - 1) + (7 + i - r) % 7 + ur(n, r, u);
        return f <= 0 ? o = ai(e = n - 1) + f : f > ai(n) ? (e = n + 1, o = f - ai(n)) : (e = n, o = f), {
            year: e,
            dayOfYear: o
        }
    }

    function yi(n, t, i) {
        var u, f, e = ur(n.year(), t, i),
            r = Math.floor((n.dayOfYear() - e - 1) / 7) + 1;
        return r < 1 ? u = r + ni(f = n.year() - 1, t, i) : r > ni(n.year(), t, i) ? (u = r - ni(n.year(), t, i), f = n.year() + 1) : (f = n.year(), u = r), {
            week: u,
            year: f
        }
    }

    function ni(n, t, i) {
        var r = ur(n, t, i),
            u = ur(n + 1, t, i);
        return (ai(n) - r + u) / 7
    }

    function nu() {
        function u(n, t) {
            return t.length - n.length
        }
        for (var f, e, o, s, h = [], i = [], r = [], t = [], n = 0; n < 7; n++) f = ft([2e3, 1]).day(n), e = this.weekdaysMin(f, ""), o = this.weekdaysShort(f, ""), s = this.weekdays(f, ""), h.push(e), i.push(o), r.push(s), t.push(e), t.push(o), t.push(s);
        for (h.sort(u), i.sort(u), r.sort(u), t.sort(u), n = 0; n < 7; n++) i[n] = gt(i[n]), r[n] = gt(r[n]), t[n] = gt(t[n]);
        this._weekdaysRegex = new RegExp("^(" + t.join("|") + ")", "i");
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;
        this._weekdaysStrictRegex = new RegExp("^(" + r.join("|") + ")", "i");
        this._weekdaysShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i");
        this._weekdaysMinStrictRegex = new RegExp("^(" + h.join("|") + ")", "i")
    }

    function tu() {
        return this.hours() % 12 || 12
    }

    function kf(n, t) {
        r(n, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
        })
    }

    function df(n, t) {
        return t._meridiemParse
    }

    function gf(n) {
        return n ? n.toLowerCase().replace("_", "-") : n
    }

    function iu(n) {
        var t = null;
        if (!y[n] && "undefined" != typeof module && module && module.exports) try {
            t = pr._abbr;
            require("./locale/" + n);
            fi(t)
        } catch (n) {}
        return y[n]
    }

    function fi(n, t) {
        var i;
        return n && (i = p(t) ? pt(n) : ru(n, t)) && (pr = i), pr._abbr
    }

    function ru(n, t) {
        if (null !== t) {
            var i = co;
            if (t.abbr = n, null != y[n]) cf("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), i = y[n]._config;
            else if (null != t.parentLocale) {
                if (null == y[t.parentLocale]) return bi[t.parentLocale] || (bi[t.parentLocale] = []), bi[t.parentLocale].push({
                    name: n,
                    config: t
                }), null;
                i = y[t.parentLocale]._config
            }
            return y[n] = new dr(lf(i, t)), bi[n] && bi[n].forEach(function(n) {
                ru(n.name, n.config)
            }), fi(n), y[n]
        }
        return delete y[n], null
    }

    function pt(n) {
        var t;
        if (n && n._locale && n._locale._abbr && (n = n._locale._abbr), !n) return pr;
        if (!tt(n)) {
            if (t = iu(n)) return t;
            n = [n]
        }
        return function(n) {
            for (var t, i, f, u, r = 0; r < n.length;) {
                for (t = (u = gf(n[r]).split("-")).length, i = (i = gf(n[r + 1])) ? i.split("-") : null; t > 0;) {
                    if (f = iu(u.slice(0, t).join("-"))) return f;
                    if (i && i.length >= t && sf(u, i, !0) >= t - 1) break;
                    t--
                }
                r++
            }
            return null
        }(n)
    }

    function uu(n) {
        var i, t = n._a;
        return t && -2 === u(n).overflow && (i = t[ct] < 0 || t[ct] > 11 ? ct : t[ot] < 1 || t[ot] > rr(t[rt], t[ct]) ? ot : t[v] < 0 || t[v] > 24 || 24 === t[v] && (0 !== t[ut] || 0 !== t[lt] || 0 !== t[ri]) ? v : t[ut] < 0 || t[ut] > 59 ? ut : t[lt] < 0 || t[lt] > 59 ? lt : t[ri] < 0 || t[ri] > 999 ? ri : -1, u(n)._overflowDayOfYear && (i < rt || i > ot) && (i = ot), u(n)._overflowWeeks && -1 === i && (i = fs), u(n)._overflowWeekday && -1 === i && (i = es), u(n).overflow = i), n
    }

    function ei(n, t, i) {
        return null != n ? n : null != t ? t : i
    }

    function fu(n) {
        var i, r, f, s, e, o = [];
        if (!n._d) {
            for (f = function(n) {
                    var i = new Date(t.now());
                    return n._useUTC ? [i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()] : [i.getFullYear(), i.getMonth(), i.getDate()]
                }(n), n._w && null == n._a[ot] && null == n._a[ct] && function(n) {
                    var t, o, f, i, r, e, h, s, l;
                    null != (t = n._w).GG || null != t.W || null != t.E ? (r = 1, e = 4, o = ei(t.GG, n._a[rt], yi(c(), 1, 4).year), f = ei(t.W, 1), ((i = ei(t.E, 1)) < 1 || i > 7) && (s = !0)) : (r = n._locale._week.dow, e = n._locale._week.doy, l = yi(c(), r, e), o = ei(t.gg, n._a[rt], l.year), f = ei(t.w, l.week), null != t.d ? ((i = t.d) < 0 || i > 6) && (s = !0) : null != t.e ? (i = t.e + r, (t.e < 0 || t.e > 6) && (s = !0)) : i = r);
                    f < 1 || f > ni(o, r, e) ? u(n)._overflowWeeks = !0 : null != s ? u(n)._overflowWeekday = !0 : (h = bf(o, f, i, r, e), n._a[rt] = h.year, n._dayOfYear = h.dayOfYear)
                }(n), null != n._dayOfYear && (e = ei(n._a[rt], f[rt]), (n._dayOfYear > ai(e) || 0 === n._dayOfYear) && (u(n)._overflowDayOfYear = !0), r = vi(e, 0, n._dayOfYear), n._a[ct] = r.getUTCMonth(), n._a[ot] = r.getUTCDate()), i = 0; i < 3 && null == n._a[i]; ++i) n._a[i] = o[i] = f[i];
            for (; i < 7; i++) n._a[i] = o[i] = null == n._a[i] ? 2 === i ? 1 : 0 : n._a[i];
            24 === n._a[v] && 0 === n._a[ut] && 0 === n._a[lt] && 0 === n._a[ri] && (n._nextDay = !0, n._a[v] = 0);
            n._d = (n._useUTC ? vi : function(n, t, i, r, u, f, e) {
                var o = new Date(n, t, i, r, u, f, e);
                return n < 100 && n >= 0 && isFinite(o.getFullYear()) && o.setFullYear(n), o
            }).apply(null, o);
            s = n._useUTC ? n._d.getUTCDay() : n._d.getDay();
            null != n._tzm && n._d.setUTCMinutes(n._d.getUTCMinutes() - n._tzm);
            n._nextDay && (n._a[v] = 24);
            n._w && void 0 !== n._w.d && n._w.d !== s && (u(n).weekdayMismatch = !0)
        }
    }

    function ne(n) {
        var t, r, o, e, f, s, h = n._i,
            i = ws.exec(h) || bs.exec(h);
        if (i) {
            for (u(n).iso = !0, t = 0, r = wr.length; t < r; t++)
                if (wr[t][1].exec(i[1])) {
                    e = wr[t][0];
                    o = !1 !== wr[t][2];
                    break
                }
            if (null == e) return void(n._isValid = !1);
            if (i[3]) {
                for (t = 0, r = rf.length; t < r; t++)
                    if (rf[t][1].exec(i[3])) {
                        f = (i[2] || " ") + rf[t][0];
                        break
                    }
                if (null == f) return void(n._isValid = !1)
            }
            if (!o && null != f) return void(n._isValid = !1);
            if (i[4]) {
                if (!ks.exec(i[4])) return void(n._isValid = !1);
                s = "Z"
            }
            n._f = e + (f || "") + (s || "");
            eu(n)
        } else n._isValid = !1
    }

    function is(n, t, i, r, u, f) {
        var e = [function(n) {
            var t = parseInt(n, 10);
            return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
        }(n), so.indexOf(t), parseInt(i, 10), parseInt(r, 10), parseInt(u, 10)];
        return f && e.push(parseInt(f, 10)), e
    }

    function te(n) {
        var t = gs.exec(function(n) {
                return n.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim()
            }(n._i)),
            i;
        if (t) {
            if (i = is(t[4], t[3], t[2], t[5], t[6], t[7]), ! function(n, t, i) {
                    return n && ho.indexOf(n) !== new Date(t[0], t[1], t[2]).getDay() ? (u(i).weekdayMismatch = !0, i._isValid = !1, !1) : !0
                }(t[1], i, n)) return;
            n._a = i;
            n._tzm = function(n, t, i) {
                if (n) return nh[n];
                if (t) return 0;
                var r = parseInt(i, 10),
                    u = r % 100;
                return (r - u) / 100 * 60 + u
            }(t[8], t[9], t[10]);
            n._d = vi.apply(null, n._a);
            n._d.setUTCMinutes(n._d.getUTCMinutes() - n._tzm);
            u(n).rfc2822 = !0
        } else n._isValid = !1
    }

    function eu(n) {
        if (n._f !== t.ISO_8601)
            if (n._f !== t.RFC_2822) {
                n._a = [];
                u(n).empty = !0;
                for (var r, f, s, i = "" + n._i, c = i.length, h = 0, o = af(n._f, n._locale).match(io) || [], e = 0; e < o.length; e++) f = o[e], (r = (i.match(ns(f, n)) || [])[0]) && ((s = i.substr(0, i.indexOf(r))).length > 0 && u(n).unusedInput.push(s), i = i.slice(i.indexOf(r) + r.length), h += r.length), si[f] ? (r ? u(n).empty = !1 : u(n).unusedTokens.push(f), ts(f, r, n)) : n._strict && !r && u(n).unusedTokens.push(f);
                u(n).charsLeftOver = c - h;
                i.length > 0 && u(n).unusedInput.push(i);
                n._a[v] <= 12 && !0 === u(n).bigHour && n._a[v] > 0 && (u(n).bigHour = void 0);
                u(n).parsedDateParts = n._a.slice(0);
                u(n).meridiem = n._meridiem;
                n._a[v] = function(n, t, i) {
                    var r;
                    return null == i ? t : null != n.meridiemHour ? n.meridiemHour(t, i) : null != n.isPM ? ((r = n.isPM(i)) && t < 12 && (t += 12), r || 12 !== t || (t = 0), t) : t
                }(n._locale, n._a[v], n._meridiem);
                fu(n);
                uu(n)
            } else te(n);
        else ne(n)
    }

    function ie(n) {
        var i = n._i,
            r = n._f;
        return n._locale = n._locale || pt(n._l), null === i || void 0 === r && "" === i ? gi({
            nullInput: !0
        }) : ("string" == typeof i && (n._i = i = n._locale.preparse(i)), yt(i) ? new ci(uu(i)) : (di(i) ? n._d = i : tt(r) ? function(n) {
            var t, e, f, r, i;
            if (0 === n._f.length) return u(n).invalidFormat = !0, void(n._d = new Date(NaN));
            for (r = 0; r < n._f.length; r++) i = 0, t = kr({}, n), null != n._useUTC && (t._useUTC = n._useUTC), t._f = n._f[r], eu(t), br(t) && (i += u(t).charsLeftOver, i += 10 * u(t).unusedTokens.length, u(t).score = i, (null == f || i < f) && (f = i, e = t));
            vt(n, e || t)
        }(n) : r ? eu(n) : function(n) {
            var i = n._i;
            p(i) ? n._d = new Date(t.now()) : di(i) ? n._d = new Date(i.valueOf()) : "string" == typeof i ? function(n) {
                var i = ds.exec(n._i);
                null === i ? (ne(n), !1 === n._isValid && (delete n._isValid, te(n), !1 === n._isValid && (delete n._isValid, t.createFromInputFallback(n)))) : n._d = new Date(+i[1])
            }(n) : tt(i) ? (n._a = of(i.slice(0), function(n) {
                return parseInt(n, 10)
            }), fu(n)) : hi(i) ? function(n) {
                if (!n._d) {
                    var t = gr(n._i);
                    n._a = of([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(n) {
                        return n && parseInt(n, 10)
                    });
                    fu(n)
                }
            }(n) : dt(i) ? n._d = new Date(i) : t.createFromInputFallback(n)
        }(n), br(n) || (n._d = null), n))
    }

    function re(n, t, i, r, u) {
        var f = {};
        return !0 !== i && !1 !== i || (r = i, i = void 0), (hi(n) && function(n) {
                if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(n).length;
                for (var t in n)
                    if (n.hasOwnProperty(t)) return !1;
                return !0
            }(n) || tt(n) && 0 === n.length) && (n = void 0), f._isAMomentObject = !0, f._useUTC = f._isUTC = u, f._l = i, f._i = n, f._f = t, f._strict = r,
            function(n) {
                var t = new ci(uu(ie(n)));
                return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
            }(f)
    }

    function c(n, t, i, r) {
        return re(n, t, i, r, !1)
    }

    function ue(n, t) {
        var r, i;
        if (1 === t.length && tt(t[0]) && (t = t[0]), !t.length) return c();
        for (r = t[0], i = 1; i < t.length; ++i) t[i].isValid() && !t[i][n](r) || (r = t[i]);
        return r
    }

    function fr(n) {
        var t = gr(n),
            i = t.year || 0,
            r = t.quarter || 0,
            u = t.month || 0,
            e = t.week || 0,
            o = t.day || 0,
            s = t.hour || 0,
            h = t.minute || 0,
            c = t.second || 0,
            l = t.millisecond || 0;
        this._isValid = function(n) {
            var i, r, t;
            for (i in n)
                if (-1 === a.call(ki, i) || null != n[i] && isNaN(n[i])) return !1;
            for (r = !1, t = 0; t < ki.length; ++t)
                if (n[ki[t]]) {
                    if (r) return !1;
                    parseFloat(n[ki[t]]) !== f(n[ki[t]]) && (r = !0)
                }
            return !0
        }(t);
        this._milliseconds = +l + 1e3 * c + 6e4 * h + 36e5 * s;
        this._days = +o + 7 * e;
        this._months = +u + 3 * r + 12 * i;
        this._data = {};
        this._locale = pt();
        this._bubble()
    }

    function ou(n) {
        return n instanceof fr
    }

    function su(n) {
        return n < 0 ? -1 * Math.round(-1 * n) : Math.round(n)
    }

    function fe(n, t) {
        r(n, 0, 0, function() {
            var n = this.utcOffset(),
                i = "+";
            return n < 0 && (n = -n, i = "-"), i + ht(~~(n / 60), 2) + t + ht(~~n % 60, 2)
        })
    }

    function hu(n, t) {
        var u = (t || "").match(n),
            i, r;
        return null === u ? null : (i = ((u[u.length - 1] || []) + "").match(lo) || ["-", 0, 0], r = 60 * i[1] + f(i[2]), 0 === r ? 0 : "+" === i[0] ? r : -r)
    }

    function cu(n, i) {
        var r, u;
        return i._isUTC ? (r = i.clone(), u = (yt(n) || di(n) ? n.valueOf() : c(n).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + u), t.updateOffset(r, !1), r) : c(n).local()
    }

    function lu(n) {
        return 15 * -Math.round(n._d.getTimezoneOffset() / 15)
    }

    function ee() {
        return !!this.isValid() && this._isUTC && 0 === this._offset
    }

    function it(n, t) {
        var u, e, o, r = n,
            i = null;
        return ou(n) ? r = {
            ms: n._milliseconds,
            d: n._days,
            M: n._months
        } : dt(n) ? (r = {}, t ? r[t] = n : r.milliseconds = n) : (i = ao.exec(n)) ? (u = "-" === i[1] ? -1 : 1, r = {
            y: 0,
            d: f(i[ot]) * u,
            h: f(i[v]) * u,
            m: f(i[ut]) * u,
            s: f(i[lt]) * u,
            ms: f(su(1e3 * i[ri])) * u
        }) : (i = vo.exec(n)) ? (u = "-" === i[1] ? -1 : (i[1], 1), r = {
            y: ti(i[2], u),
            M: ti(i[3], u),
            w: ti(i[4], u),
            d: ti(i[5], u),
            h: ti(i[6], u),
            m: ti(i[7], u),
            s: ti(i[8], u)
        }) : null == r ? r = {} : "object" == typeof r && ("from" in r || "to" in r) && (o = function(n, t) {
            var i;
            return !n.isValid() || !t.isValid() ? {
                milliseconds: 0,
                months: 0
            } : (t = cu(t, n), n.isBefore(t) ? i = oe(n, t) : ((i = oe(t, n)).milliseconds = -i.milliseconds, i.months = -i.months), i)
        }(c(r.from), c(r.to)), (r = {}).ms = o.milliseconds, r.M = o.months), e = new fr(r), ou(n) && l(n, "_locale") && (e._locale = n._locale), e
    }

    function ti(n, t) {
        var i = n && parseFloat(n.replace(",", "."));
        return (isNaN(i) ? 0 : i) * t
    }

    function oe(n, t) {
        var i = {
            milliseconds: 0,
            months: 0
        };
        return i.months = t.month() - n.month() + 12 * (t.year() - n.year()), n.clone().add(i.months, "M").isAfter(t) && --i.months, i.milliseconds = +t - +n.clone().add(i.months, "M"), i
    }

    function se(n, t) {
        return function(i, r) {
            var u, f;
            return null === r || isNaN(+r) || (cf(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), f = i, i = r, r = f), i = "string" == typeof i ? +i : i, u = it(i, r), he(this, u, n), this
        }
    }

    function he(n, i, r, u) {
        var o = i._milliseconds,
            f = su(i._days),
            e = su(i._months);
        n.isValid() && (u = null == u || u, e && yf(n, ir(n, "Month") + e * r), f && vf(n, "Date", ir(n, "Date") + f * r), o && n._d.setTime(n._d.valueOf() + o * r), u && t.updateOffset(n, f || e))
    }

    function au(n, t) {
        var u, r = 12 * (t.year() - n.year()) + (t.month() - n.month()),
            i = n.clone().add(r, "months");
        return u = t - i < 0 ? (t - i) / (i - n.clone().add(r - 1, "months")) : (t - i) / (n.clone().add(r + 1, "months") - i), -(r + u) || 0
    }

    function ce(n) {
        var t;
        return void 0 === n ? this._locale._abbr : (null != (t = pt(n)) && (this._locale = t), this)
    }

    function le() {
        return this._locale
    }

    function er(n, t) {
        r(0, [n, n.length], 0, t)
    }

    function ae(n, t, i, r, u) {
        var f;
        return null == n ? yi(this, r, u).year : (f = ni(n, r, u), t > f && (t = f), function(n, t, i, r, u) {
            var e = bf(n, t, i, r, u),
                f = vi(e.year, 0, e.dayOfYear);
            return this.year(f.getUTCFullYear()), this.month(f.getUTCMonth()), this.date(f.getUTCDate()), this
        }.call(this, n, t, i, r, u))
    }

    function rs(n, t) {
        t[ri] = f(1e3 * ("0." + n))
    }

    function ve(n) {
        return n
    }

    function or(n, t, i, r) {
        var u = pt(),
            f = ft().set(r, t);
        return u[i](f, n)
    }

    function ye(n, t, i) {
        if (dt(n) && (t = n, n = void 0), n = n || "", null != t) return or(n, t, i, "month");
        for (var u = [], r = 0; r < 12; r++) u[r] = or(n, r, i, "month");
        return u
    }

    function vu(n, t, i, r) {
        var o, f, u, e;
        if ("boolean" == typeof n ? (dt(t) && (i = t, t = void 0), t = t || "") : (i = t = n, n = !1, dt(t) && (i = t, t = void 0), t = t || ""), o = pt(), f = n ? o._week.dow : 0, null != i) return or(t, (i + f) % 7, r, "day");
        for (e = [], u = 0; u < 7; u++) e[u] = or(t, (u + f) % 7, r, "day");
        return e
    }

    function pe(n, t, i, r) {
        var u = it(t, i);
        return n._milliseconds += r * u._milliseconds, n._days += r * u._days, n._months += r * u._months, n._bubble()
    }

    function we(n) {
        return n < 0 ? Math.floor(n) : Math.ceil(n)
    }

    function be(n) {
        return 4800 * n / 146097
    }

    function yu(n) {
        return 146097 * n / 4800
    }

    function wt(n) {
        return function() {
            return this.as(n)
        }
    }

    function ii(n) {
        return function() {
            return this.isValid() ? this._data[n] : NaN
        }
    }

    function oi(n) {
        return (n > 0) - (n < 0) || +n
    }

    function sr() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var i, o, t = ef(this._milliseconds) / 1e3,
            v = ef(this._days),
            s = ef(this._months);
        o = d((i = d(t / 60)) / 60);
        t %= 60;
        i %= 60;
        var h = d(s / 12),
            c = s %= 12,
            l = v,
            r = o,
            u = i,
            f = t ? t.toFixed(3).replace(/\.?0+$/, "") : "",
            n = this.asSeconds();
        if (!n) return "P0D";
        var y = n < 0 ? "-" : "",
            a = oi(this._months) !== oi(n) ? "-" : "",
            p = oi(this._days) !== oi(n) ? "-" : "",
            e = oi(this._milliseconds) !== oi(n) ? "-" : "";
        return y + "P" + (h ? a + h + "Y" : "") + (c ? a + c + "M" : "") + (l ? p + l + "D" : "") + (r || u || f ? "T" : "") + (r ? e + r + "H" : "") + (u ? e + u + "M" : "") + (f ? e + f + "S" : "")
    }
    var ke, de, no, a, tf, lo, ao, vo, yo, po, uf, ff, wo, bo, bt, ko, n, o;
    de = Array.prototype.some ? Array.prototype.some : function(n) {
        for (var i = Object(this), r = i.length >>> 0, t = 0; t < r; t++)
            if (t in i && n.call(this, i[t], t, i)) return !0;
        return !1
    };
    var pu = t.momentProperties = [],
        wu = !1,
        ge = {};
    t.suppressDeprecationWarnings = !1;
    t.deprecationHandler = null;
    no = Object.keys ? Object.keys : function(n) {
        var t, i = [];
        for (t in n) l(n, t) && i.push(t);
        return i
    };
    var pi = {},
        to = {},
        io = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        hr = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        bu = {},
        si = {},
        ro = /\d/,
        k = /\d\d/,
        uo = /\d{3}/,
        ku = /\d{4}/,
        cr = /[+-]?\d{6}/,
        h = /\d\d?/,
        fo = /\d\d\d\d?/,
        eo = /\d\d\d\d\d\d?/,
        lr = /\d{1,3}/,
        du = /\d{1,4}/,
        ar = /[+-]?\d{1,6}/,
        vr = /[+-]?\d+/,
        us = /Z|[+-]\d\d:?\d\d/gi,
        yr = /Z|[+-]\d\d(?::?\d\d)?/gi,
        wi = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        gu = {},
        nf = {},
        rt = 0,
        ct = 1,
        ot = 2,
        v = 3,
        ut = 4,
        lt = 5,
        ri = 6,
        fs = 7,
        es = 8;
    r("Y", 0, 0, function() {
        var n = this.year();
        return n <= 9999 ? "" + n : "+" + n
    });
    r(0, ["YY", 2], 0, function() {
        return this.year() % 100
    });
    r(0, ["YYYY", 4], 0, "year");
    r(0, ["YYYYY", 5], 0, "year");
    r(0, ["YYYYYY", 6, !0], 0, "year");
    w("year", "y");
    b("year", 1);
    i("Y", vr);
    i("YY", h, k);
    i("YYYY", du, ku);
    i("YYYYY", ar, cr);
    i("YYYYYY", ar, cr);
    s(["YYYYY", "YYYYYY"], rt);
    s("YYYY", function(n, i) {
        i[rt] = 2 === n.length ? t.parseTwoDigitYear(n) : f(n)
    });
    s("YY", function(n, i) {
        i[rt] = t.parseTwoDigitYear(n)
    });
    s("Y", function(n, t) {
        t[rt] = parseInt(n, 10)
    });
    t.parseTwoDigitYear = function(n) {
        return f(n) + (f(n) > 68 ? 1900 : 2e3)
    };
    tf = ui("FullYear", !0);
    a = Array.prototype.indexOf ? Array.prototype.indexOf : function(n) {
        for (var t = 0; t < this.length; ++t)
            if (this[t] === n) return t;
        return -1
    };
    r("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    });
    r("MMM", 0, 0, function(n) {
        return this.localeData().monthsShort(this, n)
    });
    r("MMMM", 0, 0, function(n) {
        return this.localeData().months(this, n)
    });
    w("month", "M");
    b("month", 8);
    i("M", h);
    i("MM", h, k);
    i("MMM", function(n, t) {
        return t.monthsShortRegex(n)
    });
    i("MMMM", function(n, t) {
        return t.monthsRegex(n)
    });
    s(["M", "MM"], function(n, t) {
        t[ct] = f(n) - 1
    });
    s(["MMM", "MMMM"], function(n, t, i, r) {
        var f = i._locale.monthsParse(n, r, i._strict);
        null != f ? t[ct] = f : u(i).invalidMonth = n
    });
    var oo = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        os = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        so = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        ss = wi,
        hs = wi;
    r("w", ["ww", 2], "wo", "week");
    r("W", ["WW", 2], "Wo", "isoWeek");
    w("week", "w");
    w("isoWeek", "W");
    b("week", 5);
    b("isoWeek", 5);
    i("w", h);
    i("ww", h, k);
    i("W", h);
    i("WW", h, k);
    li(["w", "ww", "W", "WW"], function(n, t, i, r) {
        t[r.substr(0, 1)] = f(n)
    });
    r("d", 0, "do", "day");
    r("dd", 0, 0, function(n) {
        return this.localeData().weekdaysMin(this, n)
    });
    r("ddd", 0, 0, function(n) {
        return this.localeData().weekdaysShort(this, n)
    });
    r("dddd", 0, 0, function(n) {
        return this.localeData().weekdays(this, n)
    });
    r("e", 0, 0, "weekday");
    r("E", 0, 0, "isoWeekday");
    w("day", "d");
    w("weekday", "e");
    w("isoWeekday", "E");
    b("day", 11);
    b("weekday", 11);
    b("isoWeekday", 11);
    i("d", h);
    i("e", h);
    i("E", h);
    i("dd", function(n, t) {
        return t.weekdaysMinRegex(n)
    });
    i("ddd", function(n, t) {
        return t.weekdaysShortRegex(n)
    });
    i("dddd", function(n, t) {
        return t.weekdaysRegex(n)
    });
    li(["dd", "ddd", "dddd"], function(n, t, i, r) {
        var f = i._locale.weekdaysParse(n, r, i._strict);
        null != f ? t.d = f : u(i).invalidWeekday = n
    });
    li(["d", "e", "E"], function(n, t, i, r) {
        t[r] = f(n)
    });
    var cs = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        ho = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        ls = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        as = wi,
        vs = wi,
        ys = wi;
    r("H", ["HH", 2], 0, "hour");
    r("h", ["hh", 2], 0, tu);
    r("k", ["kk", 2], 0, function() {
        return this.hours() || 24
    });
    r("hmm", 0, 0, function() {
        return "" + tu.apply(this) + ht(this.minutes(), 2)
    });
    r("hmmss", 0, 0, function() {
        return "" + tu.apply(this) + ht(this.minutes(), 2) + ht(this.seconds(), 2)
    });
    r("Hmm", 0, 0, function() {
        return "" + this.hours() + ht(this.minutes(), 2)
    });
    r("Hmmss", 0, 0, function() {
        return "" + this.hours() + ht(this.minutes(), 2) + ht(this.seconds(), 2)
    });
    kf("a", !0);
    kf("A", !1);
    w("hour", "h");
    b("hour", 13);
    i("a", df);
    i("A", df);
    i("H", h);
    i("h", h);
    i("k", h);
    i("HH", h, k);
    i("hh", h, k);
    i("kk", h, k);
    i("hmm", fo);
    i("hmmss", eo);
    i("Hmm", fo);
    i("Hmmss", eo);
    s(["H", "HH"], v);
    s(["k", "kk"], function(n, t) {
        var i = f(n);
        t[v] = 24 === i ? 0 : i
    });
    s(["a", "A"], function(n, t, i) {
        i._isPm = i._locale.isPM(n);
        i._meridiem = n
    });
    s(["h", "hh"], function(n, t, i) {
        t[v] = f(n);
        u(i).bigHour = !0
    });
    s("hmm", function(n, t, i) {
        var r = n.length - 2;
        t[v] = f(n.substr(0, r));
        t[ut] = f(n.substr(r));
        u(i).bigHour = !0
    });
    s("hmmss", function(n, t, i) {
        var r = n.length - 4,
            e = n.length - 2;
        t[v] = f(n.substr(0, r));
        t[ut] = f(n.substr(r, 2));
        t[lt] = f(n.substr(e));
        u(i).bigHour = !0
    });
    s("Hmm", function(n, t) {
        var i = n.length - 2;
        t[v] = f(n.substr(0, i));
        t[ut] = f(n.substr(i))
    });
    s("Hmmss", function(n, t) {
        var i = n.length - 4,
            r = n.length - 2;
        t[v] = f(n.substr(0, i));
        t[ut] = f(n.substr(i, 2));
        t[lt] = f(n.substr(r))
    });
    var pr, ps = ui("Hours", !0),
        co = {
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            longDateFormat: {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            invalidDate: "Invalid date",
            ordinal: "%d",
            dayOfMonthOrdinalParse: /\d{1,2}/,
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            months: os,
            monthsShort: so,
            week: {
                dow: 0,
                doy: 6
            },
            weekdays: cs,
            weekdaysMin: ls,
            weekdaysShort: ho,
            meridiemParse: /[ap]\.?m?\.?/i
        },
        y = {},
        bi = {},
        ws = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        bs = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        ks = /Z|[+-]\d\d(?::?\d\d)?/,
        wr = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/]
        ],
        rf = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/]
        ],
        ds = /^\/?Date\((\-?\d+)/i,
        gs = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
        nh = {
            UT: 0,
            GMT: 0,
            EDT: -240,
            EST: -300,
            CDT: -300,
            CST: -360,
            MDT: -360,
            MST: -420,
            PDT: -420,
            PST: -480
        };
    t.createFromInputFallback = g("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(n) {
        n._d = new Date(n._i + (n._useUTC ? " UTC" : ""))
    });
    t.ISO_8601 = function() {};
    t.RFC_2822 = function() {};
    var th = g("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var n = c.apply(null, arguments);
            return this.isValid() && n.isValid() ? n < this ? this : n : gi()
        }),
        ih = g("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var n = c.apply(null, arguments);
            return this.isValid() && n.isValid() ? n > this ? this : n : gi()
        }),
        ki = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
    for (fe("Z", ":"), fe("ZZ", ""), i("Z", yr), i("ZZ", yr), s(["Z", "ZZ"], function(n, t, i) {
            i._useUTC = !0;
            i._tzm = hu(yr, n)
        }), lo = /([\+\-]|\d\d)/gi, t.updateOffset = function() {}, ao = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/, vo = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, it.fn = fr.prototype, it.invalid = function() {
            return it(NaN)
        }, yo = se(1, "add"), po = se(-1, "subtract"), t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]", uf = g("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(n) {
            return void 0 === n ? this.localeData() : this.locale(n)
        }), r(0, ["gg", 2], 0, function() {
            return this.weekYear() % 100
        }), r(0, ["GG", 2], 0, function() {
            return this.isoWeekYear() % 100
        }), er("gggg", "weekYear"), er("ggggg", "weekYear"), er("GGGG", "isoWeekYear"), er("GGGGG", "isoWeekYear"), w("weekYear", "gg"), w("isoWeekYear", "GG"), b("weekYear", 1), b("isoWeekYear", 1), i("G", vr), i("g", vr), i("GG", h, k), i("gg", h, k), i("GGGG", du, ku), i("gggg", du, ku), i("GGGGG", ar, cr), i("ggggg", ar, cr), li(["gggg", "ggggg", "GGGG", "GGGGG"], function(n, t, i, r) {
            t[r.substr(0, 2)] = f(n)
        }), li(["gg", "GG"], function(n, i, r, u) {
            i[u] = t.parseTwoDigitYear(n)
        }), r("Q", 0, "Qo", "quarter"), w("quarter", "Q"), b("quarter", 7), i("Q", ro), s("Q", function(n, t) {
            t[ct] = 3 * (f(n) - 1)
        }), r("D", ["DD", 2], "Do", "date"), w("date", "D"), b("date", 9), i("D", h), i("DD", h, k), i("Do", function(n, t) {
            return n ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
        }), s(["D", "DD"], ot), s("Do", function(n, t) {
            t[ot] = f(n.match(h)[0])
        }), ff = ui("Date", !0), r("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), w("dayOfYear", "DDD"), b("dayOfYear", 4), i("DDD", lr), i("DDDD", uo), s(["DDD", "DDDD"], function(n, t, i) {
            i._dayOfYear = f(n)
        }), r("m", ["mm", 2], 0, "minute"), w("minute", "m"), b("minute", 14), i("m", h), i("mm", h, k), s(["m", "mm"], ut), wo = ui("Minutes", !1), r("s", ["ss", 2], 0, "second"), w("second", "s"), b("second", 15), i("s", h), i("ss", h, k), s(["s", "ss"], lt), bo = ui("Seconds", !1), r("S", 0, 0, function() {
            return ~~(this.millisecond() / 100)
        }), r(0, ["SS", 2], 0, function() {
            return ~~(this.millisecond() / 10)
        }), r(0, ["SSS", 3], 0, "millisecond"), r(0, ["SSSS", 4], 0, function() {
            return 10 * this.millisecond()
        }), r(0, ["SSSSS", 5], 0, function() {
            return 100 * this.millisecond()
        }), r(0, ["SSSSSS", 6], 0, function() {
            return 1e3 * this.millisecond()
        }), r(0, ["SSSSSSS", 7], 0, function() {
            return 1e4 * this.millisecond()
        }), r(0, ["SSSSSSSS", 8], 0, function() {
            return 1e5 * this.millisecond()
        }), r(0, ["SSSSSSSSS", 9], 0, function() {
            return 1e6 * this.millisecond()
        }), w("millisecond", "ms"), b("millisecond", 16), i("S", lr, ro), i("SS", lr, k), i("SSS", lr, uo), bt = "SSSS"; bt.length <= 9; bt += "S") i(bt, /\d+/);
    for (bt = "S"; bt.length <= 9; bt += "S") s(bt, rs);
    ko = ui("Milliseconds", !1);
    r("z", 0, 0, "zoneAbbr");
    r("zz", 0, 0, "zoneName");
    n = ci.prototype;
    n.add = yo;
    n.calendar = function(n, i) {
        var u = n || c(),
            f = cu(u, this).startOf("day"),
            r = t.calendarFormat(this, f) || "sameElse",
            e = i && (et(i[r]) ? i[r].call(this, u) : i[r]);
        return this.format(e || this.localeData().calendar(r, this, c(u)))
    };
    n.clone = function() {
        return new ci(this)
    };
    n.diff = function(n, t, i) {
        var r, f, u;
        if (!this.isValid()) return NaN;
        if (!(r = cu(n, this)).isValid()) return NaN;
        switch (f = 6e4 * (r.utcOffset() - this.utcOffset()), t = nt(t)) {
            case "year":
                u = au(this, r) / 12;
                break;
            case "month":
                u = au(this, r);
                break;
            case "quarter":
                u = au(this, r) / 3;
                break;
            case "second":
                u = (this - r) / 1e3;
                break;
            case "minute":
                u = (this - r) / 6e4;
                break;
            case "hour":
                u = (this - r) / 36e5;
                break;
            case "day":
                u = (this - r - f) / 864e5;
                break;
            case "week":
                u = (this - r - f) / 6048e5;
                break;
            default:
                u = this - r
        }
        return i ? u : d(u)
    };
    n.endOf = function(n) {
        return void 0 === (n = nt(n)) || "millisecond" === n ? this : ("date" === n && (n = "day"), this.startOf(n).add(1, "isoWeek" === n ? "week" : n).subtract(1, "ms"))
    };
    n.format = function(n) {
        n || (n = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
        var i = nr(this, n);
        return this.localeData().postformat(i)
    };
    n.from = function(n, t) {
        return this.isValid() && (yt(n) && n.isValid() || c(n).isValid()) ? it({
            to: this,
            from: n
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    };
    n.fromNow = function(n) {
        return this.from(c(), n)
    };
    n.to = function(n, t) {
        return this.isValid() && (yt(n) && n.isValid() || c(n).isValid()) ? it({
            from: this,
            to: n
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    };
    n.toNow = function(n) {
        return this.to(c(), n)
    };
    n.get = function(n) {
        return n = nt(n), et(this[n]) ? this[n]() : this
    };
    n.invalidAt = function() {
        return u(this).overflow
    };
    n.isAfter = function(n, t) {
        var i = yt(n) ? n : c(n);
        return !(!this.isValid() || !i.isValid()) && ("millisecond" === (t = nt(p(t) ? "millisecond" : t)) ? this.valueOf() > i.valueOf() : i.valueOf() < this.clone().startOf(t).valueOf())
    };
    n.isBefore = function(n, t) {
        var i = yt(n) ? n : c(n);
        return !(!this.isValid() || !i.isValid()) && ("millisecond" === (t = nt(p(t) ? "millisecond" : t)) ? this.valueOf() < i.valueOf() : this.clone().endOf(t).valueOf() < i.valueOf())
    };
    n.isBetween = function(n, t, i, r) {
        return ("(" === (r = r || "()")[0] ? this.isAfter(n, i) : !this.isBefore(n, i)) && (")" === r[1] ? this.isBefore(t, i) : !this.isAfter(t, i))
    };
    n.isSame = function(n, t) {
        var i, r = yt(n) ? n : c(n);
        return !(!this.isValid() || !r.isValid()) && ("millisecond" === (t = nt(t || "millisecond")) ? this.valueOf() === r.valueOf() : (i = r.valueOf(), this.clone().startOf(t).valueOf() <= i && i <= this.clone().endOf(t).valueOf()))
    };
    n.isSameOrAfter = function(n, t) {
        return this.isSame(n, t) || this.isAfter(n, t)
    };
    n.isSameOrBefore = function(n, t) {
        return this.isSame(n, t) || this.isBefore(n, t)
    };
    n.isValid = function() {
        return br(this)
    };
    n.lang = uf;
    n.locale = ce;
    n.localeData = le;
    n.max = ih;
    n.min = th;
    n.parsingFlags = function() {
        return vt({}, u(this))
    };
    n.set = function(n, t) {
        if ("object" == typeof n)
            for (var r = function(n) {
                    var t = [];
                    for (var i in n) t.push({
                        unit: i,
                        priority: to[i]
                    });
                    return t.sort(function(n, t) {
                        return n.priority - t.priority
                    }), t
                }(n = gr(n)), i = 0; i < r.length; i++) this[r[i].unit](n[r[i].unit]);
        else if (n = nt(n), et(this[n])) return this[n](t);
        return this
    };
    n.startOf = function(n) {
        switch (n = nt(n)) {
            case "year":
                this.month(0);
            case "quarter":
            case "month":
                this.date(1);
            case "week":
            case "isoWeek":
            case "day":
            case "date":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
        }
        return "week" === n && this.weekday(0), "isoWeek" === n && this.isoWeekday(1), "quarter" === n && this.month(3 * Math.floor(this.month() / 3)), this
    };
    n.subtract = po;
    n.toArray = function() {
        return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()]
    };
    n.toObject = function() {
        return {
            years: this.year(),
            months: this.month(),
            date: this.date(),
            hours: this.hours(),
            minutes: this.minutes(),
            seconds: this.seconds(),
            milliseconds: this.milliseconds()
        }
    };
    n.toDate = function() {
        return new Date(this.valueOf())
    };
    n.toISOString = function(n) {
        if (!this.isValid()) return null;
        var i = !0 !== n,
            t = i ? this.clone().utc() : this;
        return t.year() < 0 || t.year() > 9999 ? nr(t, i ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : et(Date.prototype.toISOString) ? i ? this.toDate().toISOString() : new Date(this._d.valueOf()).toISOString().replace("Z", nr(t, "Z")) : nr(t, i ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
    };
    n.inspect = function() {
        var n, t;
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        n = "moment";
        t = "";
        this.isLocal() || (n = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
        var i = "[" + n + '("]',
            r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
            u = t + '[")]';
        return this.format(i + r + "-MM-DD[T]HH:mm:ss.SSS" + u)
    };
    n.toJSON = function() {
        return this.isValid() ? this.toISOString() : null
    };
    n.toString = function() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    };
    n.unix = function() {
        return Math.floor(this.valueOf() / 1e3)
    };
    n.valueOf = function() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    };
    n.creationData = function() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    };
    n.year = tf;
    n.isLeapYear = function() {
        return tr(this.year())
    };
    n.weekYear = function(n) {
        return ae.call(this, n, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    };
    n.isoWeekYear = function(n) {
        return ae.call(this, n, this.isoWeek(), this.isoWeekday(), 1, 4)
    };
    n.quarter = n.quarters = function(n) {
        return null == n ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (n - 1) + this.month() % 3)
    };
    n.month = pf;
    n.daysInMonth = function() {
        return rr(this.year(), this.month())
    };
    n.week = n.weeks = function(n) {
        var t = this.localeData().week(this);
        return null == n ? t : this.add(7 * (n - t), "d")
    };
    n.isoWeek = n.isoWeeks = function(n) {
        var t = yi(this, 1, 4).week;
        return null == n ? t : this.add(7 * (n - t), "d")
    };
    n.weeksInYear = function() {
        var n = this.localeData()._week;
        return ni(this.year(), n.dow, n.doy)
    };
    n.isoWeeksInYear = function() {
        return ni(this.year(), 1, 4)
    };
    n.date = ff;
    n.day = n.days = function(n) {
        if (!this.isValid()) return null != n ? this : NaN;
        var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != n ? (n = function(n, t) {
            return "string" != typeof n ? n : isNaN(n) ? "number" == typeof(n = t.weekdaysParse(n)) ? n : null : parseInt(n, 10)
        }(n, this.localeData()), this.add(n - t, "d")) : t
    };
    n.weekday = function(n) {
        if (!this.isValid()) return null != n ? this : NaN;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == n ? t : this.add(n - t, "d")
    };
    n.isoWeekday = function(n) {
        if (!this.isValid()) return null != n ? this : NaN;
        if (null != n) {
            var t = function(n, t) {
                return "string" == typeof n ? t.weekdaysParse(n) % 7 || 7 : isNaN(n) ? null : n
            }(n, this.localeData());
            return this.day(this.day() % 7 ? t : t - 7)
        }
        return this.day() || 7
    };
    n.dayOfYear = function(n) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == n ? t : this.add(n - t, "d")
    };
    n.hour = n.hours = ps;
    n.minute = n.minutes = wo;
    n.second = n.seconds = bo;
    n.millisecond = n.milliseconds = ko;
    n.utcOffset = function(n, i, r) {
        var u, f = this._offset || 0;
        if (!this.isValid()) return null != n ? this : NaN;
        if (null != n) {
            if ("string" == typeof n) {
                if (null === (n = hu(yr, n))) return this
            } else Math.abs(n) < 16 && !r && (n *= 60);
            return !this._isUTC && i && (u = lu(this)), this._offset = n, this._isUTC = !0, null != u && this.add(u, "m"), f !== n && (!i || this._changeInProgress ? he(this, it(n - f, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this
        }
        return this._isUTC ? f : lu(this)
    };
    n.utc = function(n) {
        return this.utcOffset(0, n)
    };
    n.local = function(n) {
        return this._isUTC && (this.utcOffset(0, n), this._isUTC = !1, n && this.subtract(lu(this), "m")), this
    };
    n.parseZone = function() {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) {
            var n = hu(us, this._i);
            null != n ? this.utcOffset(n) : this.utcOffset(0, !0)
        }
        return this
    };
    n.hasAlignedHourOffset = function(n) {
        return !!this.isValid() && (n = n ? c(n).utcOffset() : 0, (this.utcOffset() - n) % 60 == 0)
    };
    n.isDST = function() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    };
    n.isLocal = function() {
        return !!this.isValid() && !this._isUTC
    };
    n.isUtcOffset = function() {
        return !!this.isValid() && this._isUTC
    };
    n.isUtc = ee;
    n.isUTC = ee;
    n.zoneAbbr = function() {
        return this._isUTC ? "UTC" : ""
    };
    n.zoneName = function() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    };
    n.dates = g("dates accessor is deprecated. Use date instead.", ff);
    n.months = g("months accessor is deprecated. Use month instead", pf);
    n.years = g("years accessor is deprecated. Use year instead", tf);
    n.zone = g("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(n, t) {
        return null != n ? ("string" != typeof n && (n = -n), this.utcOffset(n, t), this) : -this.utcOffset()
    });
    n.isDSTShifted = g("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
        var n, t;
        return p(this._isDSTShifted) ? (n = {}, (kr(n, this), (n = ie(n))._a) ? (t = n._isUTC ? ft(n._a) : c(n._a), this._isDSTShifted = this.isValid() && sf(n._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted) : this._isDSTShifted
    });
    o = dr.prototype;
    o.calendar = function(n, t, i) {
        var r = this._calendar[n] || this._calendar.sameElse;
        return et(r) ? r.call(t, i) : r
    };
    o.longDateFormat = function(n) {
        var t = this._longDateFormat[n],
            i = this._longDateFormat[n.toUpperCase()];
        return t || !i ? t : (this._longDateFormat[n] = i.replace(/MMMM|MM|DD|dddd/g, function(n) {
            return n.slice(1)
        }), this._longDateFormat[n])
    };
    o.invalidDate = function() {
        return this._invalidDate
    };
    o.ordinal = function(n) {
        return this._ordinal.replace("%d", n)
    };
    o.preparse = ve;
    o.postformat = ve;
    o.relativeTime = function(n, t, i, r) {
        var u = this._relativeTime[i];
        return et(u) ? u(n, t, i, r) : u.replace(/%d/i, n)
    };
    o.pastFuture = function(n, t) {
        var i = this._relativeTime[n > 0 ? "future" : "past"];
        return et(i) ? i(t) : i.replace(/%s/i, t)
    };
    o.set = function(n) {
        var t;
        for (var i in n) et(t = n[i]) ? this[i] = t : this["_" + i] = t;
        this._config = n;
        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    };
    o.months = function(n, t) {
        return n ? tt(this._months) ? this._months[n.month()] : this._months[(this._months.isFormat || oo).test(t) ? "format" : "standalone"][n.month()] : tt(this._months) ? this._months : this._months.standalone
    };
    o.monthsShort = function(n, t) {
        return n ? tt(this._monthsShort) ? this._monthsShort[n.month()] : this._monthsShort[oo.test(t) ? "format" : "standalone"][n.month()] : tt(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    };
    o.monthsParse = function(n, t, i) {
        var r, u, f;
        if (this._monthsParseExact) return function(n, t, i) {
            var u, r, e, f = n.toLocaleLowerCase();
            if (!this._monthsParse)
                for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], u = 0; u < 12; ++u) e = ft([2e3, u]), this._shortMonthsParse[u] = this.monthsShort(e, "").toLocaleLowerCase(), this._longMonthsParse[u] = this.months(e, "").toLocaleLowerCase();
            return i ? "MMM" === t ? -1 !== (r = a.call(this._shortMonthsParse, f)) ? r : null : -1 !== (r = a.call(this._longMonthsParse, f)) ? r : null : "MMM" === t ? -1 !== (r = a.call(this._shortMonthsParse, f)) ? r : -1 !== (r = a.call(this._longMonthsParse, f)) ? r : null : -1 !== (r = a.call(this._longMonthsParse, f)) ? r : -1 !== (r = a.call(this._shortMonthsParse, f)) ? r : null
        }.call(this, n, t, i);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++)
            if ((u = ft([2e3, r]), i && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(u, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(u, "").replace(".", "") + "$", "i")), i || this._monthsParse[r] || (f = "^" + this.months(u, "") + "|^" + this.monthsShort(u, ""), this._monthsParse[r] = new RegExp(f.replace(".", ""), "i")), i && "MMMM" === t && this._longMonthsParse[r].test(n)) || i && "MMM" === t && this._shortMonthsParse[r].test(n) || !i && this._monthsParse[r].test(n)) return r
    };
    o.monthsRegex = function(n) {
        return this._monthsParseExact ? (l(this, "_monthsRegex") || wf.call(this), n ? this._monthsStrictRegex : this._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = hs), this._monthsStrictRegex && n ? this._monthsStrictRegex : this._monthsRegex)
    };
    o.monthsShortRegex = function(n) {
        return this._monthsParseExact ? (l(this, "_monthsRegex") || wf.call(this), n ? this._monthsShortStrictRegex : this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = ss), this._monthsShortStrictRegex && n ? this._monthsShortStrictRegex : this._monthsShortRegex)
    };
    o.week = function(n) {
        return yi(n, this._week.dow, this._week.doy).week
    };
    o.firstDayOfYear = function() {
        return this._week.doy
    };
    o.firstDayOfWeek = function() {
        return this._week.dow
    };
    o.weekdays = function(n, t) {
        return n ? tt(this._weekdays) ? this._weekdays[n.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][n.day()] : tt(this._weekdays) ? this._weekdays : this._weekdays.standalone
    };
    o.weekdaysMin = function(n) {
        return n ? this._weekdaysMin[n.day()] : this._weekdaysMin
    };
    o.weekdaysShort = function(n) {
        return n ? this._weekdaysShort[n.day()] : this._weekdaysShort
    };
    o.weekdaysParse = function(n, t, i) {
        var r, u, f;
        if (this._weekdaysParseExact) return function(n, t, i) {
            var f, r, e, u = n.toLocaleLowerCase();
            if (!this._weekdaysParse)
                for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], f = 0; f < 7; ++f) e = ft([2e3, 1]).day(f), this._minWeekdaysParse[f] = this.weekdaysMin(e, "").toLocaleLowerCase(), this._shortWeekdaysParse[f] = this.weekdaysShort(e, "").toLocaleLowerCase(), this._weekdaysParse[f] = this.weekdays(e, "").toLocaleLowerCase();
            return i ? "dddd" === t ? -1 !== (r = a.call(this._weekdaysParse, u)) ? r : null : "ddd" === t ? -1 !== (r = a.call(this._shortWeekdaysParse, u)) ? r : null : -1 !== (r = a.call(this._minWeekdaysParse, u)) ? r : null : "dddd" === t ? -1 !== (r = a.call(this._weekdaysParse, u)) ? r : -1 !== (r = a.call(this._shortWeekdaysParse, u)) ? r : -1 !== (r = a.call(this._minWeekdaysParse, u)) ? r : null : "ddd" === t ? -1 !== (r = a.call(this._shortWeekdaysParse, u)) ? r : -1 !== (r = a.call(this._weekdaysParse, u)) ? r : -1 !== (r = a.call(this._minWeekdaysParse, u)) ? r : null : -1 !== (r = a.call(this._minWeekdaysParse, u)) ? r : -1 !== (r = a.call(this._weekdaysParse, u)) ? r : -1 !== (r = a.call(this._shortWeekdaysParse, u)) ? r : null
        }.call(this, n, t, i);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++)
            if ((u = ft([2e3, 1]).day(r), i && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(u, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(u, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(u, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[r] || (f = "^" + this.weekdays(u, "") + "|^" + this.weekdaysShort(u, "") + "|^" + this.weekdaysMin(u, ""), this._weekdaysParse[r] = new RegExp(f.replace(".", ""), "i")), i && "dddd" === t && this._fullWeekdaysParse[r].test(n)) || i && "ddd" === t && this._shortWeekdaysParse[r].test(n) || i && "dd" === t && this._minWeekdaysParse[r].test(n) || !i && this._weekdaysParse[r].test(n)) return r
    };
    o.weekdaysRegex = function(n) {
        return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || nu.call(this), n ? this._weekdaysStrictRegex : this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = as), this._weekdaysStrictRegex && n ? this._weekdaysStrictRegex : this._weekdaysRegex)
    };
    o.weekdaysShortRegex = function(n) {
        return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || nu.call(this), n ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = vs), this._weekdaysShortStrictRegex && n ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    };
    o.weekdaysMinRegex = function(n) {
        return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || nu.call(this), n ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = ys), this._weekdaysMinStrictRegex && n ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    };
    o.isPM = function(n) {
        return "p" === (n + "").toLowerCase().charAt(0)
    };
    o.meridiem = function(n, t, i) {
        return n > 11 ? i ? "pm" : "PM" : i ? "am" : "AM"
    };
    fi("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(n) {
            var t = n % 10;
            return n + (1 === f(n % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
        }
    });
    t.lang = g("moment.lang is deprecated. Use moment.locale instead.", fi);
    t.langData = g("moment.langData is deprecated. Use moment.localeData instead.", pt);
    var at = Math.abs,
        rh = wt("ms"),
        uh = wt("s"),
        fh = wt("m"),
        eh = wt("h"),
        oh = wt("d"),
        sh = wt("w"),
        hh = wt("M"),
        ch = wt("y"),
        lh = ii("milliseconds"),
        ah = ii("seconds"),
        vh = ii("minutes"),
        yh = ii("hours"),
        ph = ii("days"),
        wh = ii("months"),
        bh = ii("years"),
        kt = Math.round,
        st = {
            ss: 44,
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        },
        ef = Math.abs,
        e = fr.prototype;
    return e.isValid = function() {
            return this._isValid
        }, e.abs = function() {
            var n = this._data;
            return this._milliseconds = at(this._milliseconds), this._days = at(this._days), this._months = at(this._months), n.milliseconds = at(n.milliseconds), n.seconds = at(n.seconds), n.minutes = at(n.minutes), n.hours = at(n.hours), n.months = at(n.months), n.years = at(n.years), this
        }, e.add = function(n, t) {
            return pe(this, n, t, 1)
        }, e.subtract = function(n, t) {
            return pe(this, n, t, -1)
        }, e.as = function(n) {
            if (!this.isValid()) return NaN;
            var t, r, i = this._milliseconds;
            if ("month" === (n = nt(n)) || "year" === n) return t = this._days + i / 864e5, r = this._months + be(t), "month" === n ? r : r / 12;
            switch (t = this._days + Math.round(yu(this._months)), n) {
                case "week":
                    return t / 7 + i / 6048e5;
                case "day":
                    return t + i / 864e5;
                case "hour":
                    return 24 * t + i / 36e5;
                case "minute":
                    return 1440 * t + i / 6e4;
                case "second":
                    return 86400 * t + i / 1e3;
                case "millisecond":
                    return Math.floor(864e5 * t) + i;
                default:
                    throw new Error("Unknown unit " + n);
            }
        }, e.asMilliseconds = rh, e.asSeconds = uh, e.asMinutes = fh, e.asHours = eh, e.asDays = oh, e.asWeeks = sh, e.asMonths = hh, e.asYears = ch, e.valueOf = function() {
            return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * f(this._months / 12) : NaN
        }, e._bubble = function() {
            var u, f, e, s, o, r = this._milliseconds,
                n = this._days,
                t = this._months,
                i = this._data;
            return r >= 0 && n >= 0 && t >= 0 || r <= 0 && n <= 0 && t <= 0 || (r += 864e5 * we(yu(t) + n), n = 0, t = 0), i.milliseconds = r % 1e3, u = d(r / 1e3), i.seconds = u % 60, f = d(u / 60), i.minutes = f % 60, e = d(f / 60), i.hours = e % 24, n += d(e / 24), o = d(be(n)), t += o, n -= we(yu(o)), s = d(t / 12), t %= 12, i.days = n, i.months = t, i.years = s, this
        }, e.clone = function() {
            return it(this)
        }, e.get = function(n) {
            return n = nt(n), this.isValid() ? this[n + "s"]() : NaN
        }, e.milliseconds = lh, e.seconds = ah, e.minutes = vh, e.hours = yh, e.days = ph, e.weeks = function() {
            return d(this.days() / 7)
        }, e.months = wh, e.years = bh, e.humanize = function(n) {
            if (!this.isValid()) return this.localeData().invalidDate();
            var t = this.localeData(),
                i = function(n, t, i) {
                    var r = it(n).abs(),
                        u = kt(r.as("s")),
                        e = kt(r.as("m")),
                        o = kt(r.as("h")),
                        s = kt(r.as("d")),
                        h = kt(r.as("M")),
                        c = kt(r.as("y")),
                        f = u <= st.ss && ["s", u] || u < st.s && ["ss", u] || e <= 1 && ["m"] || e < st.m && ["mm", e] || o <= 1 && ["h"] || o < st.h && ["hh", o] || s <= 1 && ["d"] || s < st.d && ["dd", s] || h <= 1 && ["M"] || h < st.M && ["MM", h] || c <= 1 && ["y"] || ["yy", c];
                    return f[2] = t, f[3] = +n > 0, f[4] = i,
                        function(n, t, i, r, u) {
                            return u.relativeTime(t || 1, !!i, n, r)
                        }.apply(null, f)
                }(this, !n, t);
            return n && (i = t.pastFuture(+this, i)), t.postformat(i)
        }, e.toISOString = sr, e.toString = sr, e.toJSON = sr, e.locale = ce, e.localeData = le, e.toIsoString = g("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", sr), e.lang = uf, r("X", 0, 0, "unix"), r("x", 0, 0, "valueOf"), i("x", vr), i("X", /[+-]?\d+(\.\d{1,3})?/), s("X", function(n, t, i) {
            i._d = new Date(1e3 * parseFloat(n, 10))
        }), s("x", function(n, t, i) {
            i._d = new Date(f(n))
        }), t.version = "2.20.1",
        function(n) {
            ke = n
        }(c), t.fn = n, t.min = function() {
            return ue("isBefore", [].slice.call(arguments, 0))
        }, t.max = function() {
            return ue("isAfter", [].slice.call(arguments, 0))
        }, t.now = function() {
            return Date.now ? Date.now() : +new Date
        }, t.utc = ft, t.unix = function(n) {
            return c(1e3 * n)
        }, t.months = function(n, t) {
            return ye(n, t, "months")
        }, t.isDate = di, t.locale = fi, t.invalid = gi, t.duration = it, t.isMoment = yt, t.weekdays = function(n, t, i) {
            return vu(n, t, i, "weekdays")
        }, t.parseZone = function() {
            return c.apply(null, arguments).parseZone()
        }, t.localeData = pt, t.isDuration = ou, t.monthsShort = function(n, t) {
            return ye(n, t, "monthsShort")
        }, t.weekdaysMin = function(n, t, i) {
            return vu(n, t, i, "weekdaysMin")
        }, t.defineLocale = ru, t.updateLocale = function(n, t) {
            if (null != t) {
                var i, r, u = co;
                null != (r = iu(n)) && (u = r._config);
                (i = new dr(t = lf(u, t))).parentLocale = y[n];
                y[n] = i;
                fi(n)
            } else null != y[n] && (null != y[n].parentLocale ? y[n] = y[n].parentLocale : null != y[n] && delete y[n]);
            return y[n]
        }, t.locales = function() {
            return no(y)
        }, t.weekdaysShort = function(n, t, i) {
            return vu(n, t, i, "weekdaysShort")
        }, t.normalizeUnits = nt, t.relativeTimeRounding = function(n) {
            return void 0 === n ? kt : "function" == typeof n && (kt = n, !0)
        }, t.relativeTimeThreshold = function(n, t) {
            return void 0 !== st[n] && (void 0 === t ? st[n] : (st[n] = t, "s" === n && (st.ss = t - 1), !0))
        }, t.calendarFormat = function(n, t) {
            var i = n.diff(t, "days", !0);
            return i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse"
        }, t.prototype = n, t.HTML5_FMT = {
            DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
            DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
            DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
            DATE: "YYYY-MM-DD",
            TIME: "HH:mm",
            TIME_SECONDS: "HH:mm:ss",
            TIME_MS: "HH:mm:ss.SSS",
            WEEK: "YYYY-[W]WW",
            MONTH: "YYYY-MM"
        }, t
})