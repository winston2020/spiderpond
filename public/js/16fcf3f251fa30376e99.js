webpackJsonp([0], Array(64).concat([function (e, t, a) {
    var n = a(0)(a(339), a(341), null, null, null);
    e.exports = n.exports
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, a) {
    (function (e) {
        !function (t, a) {
            e.exports = a()
        }(0, function () {
            "use strict";

            function t() {
                return Sn.apply(null, arguments)
            }

            function n(e) {
                return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
            }

            function s(e) {
                return null != e && "[object Object]" === Object.prototype.toString.call(e)
            }

            function i(e) {
                if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
                var t;
                for (t in e) if (e.hasOwnProperty(t)) return !1;
                return !0
            }

            function r(e) {
                return void 0 === e
            }

            function d(e) {
                return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
            }

            function o(e) {
                return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
            }

            function _(e, t) {
                var a, n = [];
                for (a = 0; a < e.length; ++a) n.push(t(e[a], a));
                return n
            }

            function u(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }

            function l(e, t) {
                for (var a in t) u(t, a) && (e[a] = t[a]);
                return u(t, "toString") && (e.toString = t.toString), u(t, "valueOf") && (e.valueOf = t.valueOf), e
            }

            function m(e, t, a, n) {
                return Tt(e, t, a, n, !0).utc()
            }

            function c() {
                return {
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
                }
            }

            function h(e) {
                return null == e._pf && (e._pf = c()), e._pf
            }

            function M(e) {
                if (null == e._isValid) {
                    var t = h(e), a = xn.call(t.parsedDateParts, function (e) {
                            return null != e
                        }),
                        n = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && a);
                    if (e._strict && (n = n && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return n;
                    e._isValid = n
                }
                return e._isValid
            }

            function f(e) {
                var t = m(NaN);
                return null != e ? l(h(t), e) : h(t).userInvalidated = !0, t
            }

            function p(e, t) {
                var a, n, s;
                if (r(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), r(t._i) || (e._i = t._i), r(t._f) || (e._f = t._f), r(t._l) || (e._l = t._l), r(t._strict) || (e._strict = t._strict), r(t._tzm) || (e._tzm = t._tzm), r(t._isUTC) || (e._isUTC = t._isUTC), r(t._offset) || (e._offset = t._offset), r(t._pf) || (e._pf = h(t)), r(t._locale) || (e._locale = t._locale), Hn.length > 0) for (a = 0; a < Hn.length; a++) n = Hn[a], s = t[n], r(s) || (e[n] = s);
                return e
            }

            function L(e) {
                p(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === jn && (jn = !0, t.updateOffset(this), jn = !1)
            }

            function y(e) {
                return e instanceof L || null != e && null != e._isAMomentObject
            }

            function Y(e) {
                return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
            }

            function g(e) {
                var t = +e, a = 0;
                return 0 !== t && isFinite(t) && (a = Y(t)), a
            }

            function v(e, t, a) {
                var n, s = Math.min(e.length, t.length), i = Math.abs(e.length - t.length), r = 0;
                for (n = 0; n < s; n++) (a && e[n] !== t[n] || !a && g(e[n]) !== g(t[n])) && r++;
                return r + i
            }

            function k(e) {
                !1 === t.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
            }

            function D(e, a) {
                var n = !0;
                return l(function () {
                    if (null != t.deprecationHandler && t.deprecationHandler(null, e), n) {
                        for (var s, i = [], r = 0; r < arguments.length; r++) {
                            if (s = "", "object" == typeof arguments[r]) {
                                s += "\n[" + r + "] ";
                                for (var d in arguments[0]) s += d + ": " + arguments[0][d] + ", ";
                                s = s.slice(0, -2)
                            } else s = arguments[r];
                            i.push(s)
                        }
                        k(e + "\nArguments: " + Array.prototype.slice.call(i).join("") + "\n" + (new Error).stack), n = !1
                    }
                    return a.apply(this, arguments)
                }, a)
            }

            function T(e, a) {
                null != t.deprecationHandler && t.deprecationHandler(e, a), Pn[e] || (k(a), Pn[e] = !0)
            }

            function w(e) {
                return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
            }

            function b(e) {
                var t, a;
                for (a in e) t = e[a], w(t) ? this[a] = t : this["_" + a] = t;
                this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
            }

            function S(e, t) {
                var a, n = l({}, e);
                for (a in t) u(t, a) && (s(e[a]) && s(t[a]) ? (n[a] = {}, l(n[a], e[a]), l(n[a], t[a])) : null != t[a] ? n[a] = t[a] : delete n[a]);
                for (a in e) u(e, a) && !u(t, a) && s(e[a]) && (n[a] = l({}, n[a]));
                return n
            }

            function x(e) {
                null != e && this.set(e)
            }

            function H(e, t, a) {
                var n = this._calendar[e] || this._calendar.sameElse;
                return w(n) ? n.call(t, a) : n
            }

            function j(e) {
                var t = this._longDateFormat[e], a = this._longDateFormat[e.toUpperCase()];
                return t || !a ? t : (this._longDateFormat[e] = a.replace(/MMMM|MM|DD|dddd/g, function (e) {
                    return e.slice(1)
                }), this._longDateFormat[e])
            }

            function P() {
                return this._invalidDate
            }

            function C(e) {
                return this._ordinal.replace("%d", e)
            }

            function W(e, t, a, n) {
                var s = this._relativeTime[a];
                return w(s) ? s(e, t, a, n) : s.replace(/%d/i, e)
            }

            function O(e, t) {
                var a = this._relativeTime[e > 0 ? "future" : "past"];
                return w(a) ? a(t) : a.replace(/%s/i, t)
            }

            function A(e, t) {
                var a = e.toLowerCase();
                In[a] = In[a + "s"] = In[t] = e
            }

            function E(e) {
                return "string" == typeof e ? In[e] || In[e.toLowerCase()] : void 0
            }

            function I(e) {
                var t, a, n = {};
                for (a in e) u(e, a) && (t = E(a)) && (n[t] = e[a]);
                return n
            }

            function F(e, t) {
                Fn[e] = t
            }

            function z(e) {
                var t = [];
                for (var a in e) t.push({unit: a, priority: Fn[a]});
                return t.sort(function (e, t) {
                    return e.priority - t.priority
                }), t
            }

            function $(e, t, a) {
                var n = "" + Math.abs(e), s = t - n.length;
                return (e >= 0 ? a ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + n
            }

            function N(e, t, a, n) {
                var s = n;
                "string" == typeof n && (s = function () {
                    return this[n]()
                }), e && (Jn[e] = s), t && (Jn[t[0]] = function () {
                    return $(s.apply(this, arguments), t[1], t[2])
                }), a && (Jn[a] = function () {
                    return this.localeData().ordinal(s.apply(this, arguments), e)
                })
            }

            function J(e) {
                return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
            }

            function R(e) {
                var t, a, n = e.match(zn);
                for (t = 0, a = n.length; t < a; t++) Jn[n[t]] ? n[t] = Jn[n[t]] : n[t] = J(n[t]);
                return function (t) {
                    var s, i = "";
                    for (s = 0; s < a; s++) i += w(n[s]) ? n[s].call(t, e) : n[s];
                    return i
                }
            }

            function U(e, t) {
                return e.isValid() ? (t = G(t, e.localeData()), Nn[t] = Nn[t] || R(t), Nn[t](e)) : e.localeData().invalidDate()
            }

            function G(e, t) {
                function a(e) {
                    return t.longDateFormat(e) || e
                }

                var n = 5;
                for ($n.lastIndex = 0; n >= 0 && $n.test(e);) e = e.replace($n, a), $n.lastIndex = 0, n -= 1;
                return e
            }

            function B(e, t, a) {
                ds[e] = w(t) ? t : function (e, n) {
                    return e && a ? a : t
                }
            }

            function V(e, t) {
                return u(ds, e) ? ds[e](t._strict, t._locale) : new RegExp(Z(e))
            }

            function Z(e) {
                return K(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, a, n, s) {
                    return t || a || n || s
                }))
            }

            function K(e) {
                return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }

            function q(e, t) {
                var a, n = t;
                for ("string" == typeof e && (e = [e]), d(t) && (n = function (e, a) {
                    a[t] = g(e)
                }), a = 0; a < e.length; a++) os[e[a]] = n
            }

            function Q(e, t) {
                q(e, function (e, a, n, s) {
                    n._w = n._w || {}, t(e, n._w, n, s)
                })
            }

            function X(e, t, a) {
                null != t && u(os, e) && os[e](t, a._a, a, e)
            }

            function ee(e) {
                return te(e) ? 366 : 365
            }

            function te(e) {
                return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
            }

            function ae() {
                return te(this.year())
            }

            function ne(e, a) {
                return function (n) {
                    return null != n ? (ie(this, e, n), t.updateOffset(this, a), this) : se(this, e)
                }
            }

            function se(e, t) {
                return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
            }

            function ie(e, t, a) {
                e.isValid() && !isNaN(a) && ("FullYear" === t && te(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](a, e.month(), _e(a, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](a))
            }

            function re(e) {
                return e = E(e), w(this[e]) ? this[e]() : this
            }

            function de(e, t) {
                if ("object" == typeof e) {
                    e = I(e);
                    for (var a = z(e), n = 0; n < a.length; n++) this[a[n].unit](e[a[n].unit])
                } else if (e = E(e), w(this[e])) return this[e](t);
                return this
            }

            function oe(e, t) {
                return (e % t + t) % t
            }

            function _e(e, t) {
                if (isNaN(e) || isNaN(t)) return NaN;
                var a = oe(t, 12);
                return e += (t - a) / 12, 1 === a ? te(e) ? 29 : 28 : 31 - a % 7 % 2
            }

            function ue(e, t) {
                return e ? n(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Ys).test(t) ? "format" : "standalone"][e.month()] : n(this._months) ? this._months : this._months.standalone
            }

            function le(e, t) {
                return e ? n(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Ys.test(t) ? "format" : "standalone"][e.month()] : n(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
            }

            function me(e, t, a) {
                var n, s, i, r = e.toLocaleLowerCase();
                if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) i = m([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(i, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(i, "").toLocaleLowerCase();
                return a ? "MMM" === t ? (s = Ls.call(this._shortMonthsParse, r), -1 !== s ? s : null) : (s = Ls.call(this._longMonthsParse, r), -1 !== s ? s : null) : "MMM" === t ? -1 !== (s = Ls.call(this._shortMonthsParse, r)) ? s : (s = Ls.call(this._longMonthsParse, r), -1 !== s ? s : null) : -1 !== (s = Ls.call(this._longMonthsParse, r)) ? s : (s = Ls.call(this._shortMonthsParse, r), -1 !== s ? s : null)
            }

            function ce(e, t, a) {
                var n, s, i;
                if (this._monthsParseExact) return me.call(this, e, t, a);
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
                    if (s = m([2e3, n]), a && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(s, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$", "i")), a || this._monthsParse[n] || (i = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[n] = new RegExp(i.replace(".", ""), "i")), a && "MMMM" === t && this._longMonthsParse[n].test(e)) return n;
                    if (a && "MMM" === t && this._shortMonthsParse[n].test(e)) return n;
                    if (!a && this._monthsParse[n].test(e)) return n
                }
            }

            function he(e, t) {
                var a;
                if (!e.isValid()) return e;
                if ("string" == typeof t) if (/^\d+$/.test(t)) t = g(t); else if (t = e.localeData().monthsParse(t), !d(t)) return e;
                return a = Math.min(e.date(), _e(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, a), e
            }

            function Me(e) {
                return null != e ? (he(this, e), t.updateOffset(this, !0), this) : se(this, "Month")
            }

            function fe() {
                return _e(this.year(), this.month())
            }

            function pe(e) {
                return this._monthsParseExact ? (u(this, "_monthsRegex") || ye.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (u(this, "_monthsShortRegex") || (this._monthsShortRegex = ks), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
            }

            function Le(e) {
                return this._monthsParseExact ? (u(this, "_monthsRegex") || ye.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (u(this, "_monthsRegex") || (this._monthsRegex = Ds), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
            }

            function ye() {
                function e(e, t) {
                    return t.length - e.length
                }

                var t, a, n = [], s = [], i = [];
                for (t = 0; t < 12; t++) a = m([2e3, t]), n.push(this.monthsShort(a, "")), s.push(this.months(a, "")), i.push(this.months(a, "")), i.push(this.monthsShort(a, ""));
                for (n.sort(e), s.sort(e), i.sort(e), t = 0; t < 12; t++) n[t] = K(n[t]), s[t] = K(s[t]);
                for (t = 0; t < 24; t++) i[t] = K(i[t]);
                this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
            }

            function Ye(e, t, a, n, s, i, r) {
                var d = new Date(e, t, a, n, s, i, r);
                return e < 100 && e >= 0 && isFinite(d.getFullYear()) && d.setFullYear(e), d
            }

            function ge(e) {
                var t = new Date(Date.UTC.apply(null, arguments));
                return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
            }

            function ve(e, t, a) {
                var n = 7 + t - a;
                return -(7 + ge(e, 0, n).getUTCDay() - t) % 7 + n - 1
            }

            function ke(e, t, a, n, s) {
                var i, r, d = (7 + a - n) % 7, o = ve(e, n, s), _ = 1 + 7 * (t - 1) + d + o;
                return _ <= 0 ? (i = e - 1, r = ee(i) + _) : _ > ee(e) ? (i = e + 1, r = _ - ee(e)) : (i = e, r = _), {
                    year: i,
                    dayOfYear: r
                }
            }

            function De(e, t, a) {
                var n, s, i = ve(e.year(), t, a), r = Math.floor((e.dayOfYear() - i - 1) / 7) + 1;
                return r < 1 ? (s = e.year() - 1, n = r + Te(s, t, a)) : r > Te(e.year(), t, a) ? (n = r - Te(e.year(), t, a), s = e.year() + 1) : (s = e.year(), n = r), {
                    week: n,
                    year: s
                }
            }

            function Te(e, t, a) {
                var n = ve(e, t, a), s = ve(e + 1, t, a);
                return (ee(e) - n + s) / 7
            }

            function we(e) {
                return De(e, this._week.dow, this._week.doy).week
            }

            function be() {
                return this._week.dow
            }

            function Se() {
                return this._week.doy
            }

            function xe(e) {
                var t = this.localeData().week(this);
                return null == e ? t : this.add(7 * (e - t), "d")
            }

            function He(e) {
                var t = De(this, 1, 4).week;
                return null == e ? t : this.add(7 * (e - t), "d")
            }

            function je(e, t) {
                return "string" != typeof e ? e : isNaN(e) ? (e = t.weekdaysParse(e), "number" == typeof e ? e : null) : parseInt(e, 10)
            }

            function Pe(e, t) {
                return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
            }

            function Ce(e, t) {
                return e ? n(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : n(this._weekdays) ? this._weekdays : this._weekdays.standalone
            }

            function We(e) {
                return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
            }

            function Oe(e) {
                return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
            }

            function Ae(e, t, a) {
                var n, s, i, r = e.toLocaleLowerCase();
                if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) i = m([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(i, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(i, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(i, "").toLocaleLowerCase();
                return a ? "dddd" === t ? (s = Ls.call(this._weekdaysParse, r), -1 !== s ? s : null) : "ddd" === t ? (s = Ls.call(this._shortWeekdaysParse, r), -1 !== s ? s : null) : (s = Ls.call(this._minWeekdaysParse, r), -1 !== s ? s : null) : "dddd" === t ? -1 !== (s = Ls.call(this._weekdaysParse, r)) ? s : -1 !== (s = Ls.call(this._shortWeekdaysParse, r)) ? s : (s = Ls.call(this._minWeekdaysParse, r), -1 !== s ? s : null) : "ddd" === t ? -1 !== (s = Ls.call(this._shortWeekdaysParse, r)) ? s : -1 !== (s = Ls.call(this._weekdaysParse, r)) ? s : (s = Ls.call(this._minWeekdaysParse, r), -1 !== s ? s : null) : -1 !== (s = Ls.call(this._minWeekdaysParse, r)) ? s : -1 !== (s = Ls.call(this._weekdaysParse, r)) ? s : (s = Ls.call(this._shortWeekdaysParse, r), -1 !== s ? s : null)
            }

            function Ee(e, t, a) {
                var n, s, i;
                if (this._weekdaysParseExact) return Ae.call(this, e, t, a);
                for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
                    if (s = m([2e3, 1]).day(n), a && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(s, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(s, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(s, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[n] || (i = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[n] = new RegExp(i.replace(".", ""), "i")), a && "dddd" === t && this._fullWeekdaysParse[n].test(e)) return n;
                    if (a && "ddd" === t && this._shortWeekdaysParse[n].test(e)) return n;
                    if (a && "dd" === t && this._minWeekdaysParse[n].test(e)) return n;
                    if (!a && this._weekdaysParse[n].test(e)) return n
                }
            }

            function Ie(e) {
                if (!this.isValid()) return null != e ? this : NaN;
                var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != e ? (e = je(e, this.localeData()), this.add(e - t, "d")) : t
            }

            function Fe(e) {
                if (!this.isValid()) return null != e ? this : NaN;
                var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == e ? t : this.add(e - t, "d")
            }

            function ze(e) {
                if (!this.isValid()) return null != e ? this : NaN;
                if (null != e) {
                    var t = Pe(e, this.localeData());
                    return this.day(this.day() % 7 ? t : t - 7)
                }
                return this.day() || 7
            }

            function $e(e) {
                return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Re.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (u(this, "_weekdaysRegex") || (this._weekdaysRegex = xs), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
            }

            function Ne(e) {
                return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Re.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (u(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Hs), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            }

            function Je(e) {
                return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Re.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (u(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = js), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            }

            function Re() {
                function e(e, t) {
                    return t.length - e.length
                }

                var t, a, n, s, i, r = [], d = [], o = [], _ = [];
                for (t = 0; t < 7; t++) a = m([2e3, 1]).day(t), n = this.weekdaysMin(a, ""), s = this.weekdaysShort(a, ""), i = this.weekdays(a, ""), r.push(n), d.push(s), o.push(i), _.push(n), _.push(s), _.push(i);
                for (r.sort(e), d.sort(e), o.sort(e), _.sort(e), t = 0; t < 7; t++) d[t] = K(d[t]), o[t] = K(o[t]), _[t] = K(_[t]);
                this._weekdaysRegex = new RegExp("^(" + _.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
            }

            function Ue() {
                return this.hours() % 12 || 12
            }

            function Ge() {
                return this.hours() || 24
            }

            function Be(e, t) {
                N(e, 0, 0, function () {
                    return this.localeData().meridiem(this.hours(), this.minutes(), t)
                })
            }

            function Ve(e, t) {
                return t._meridiemParse
            }

            function Ze(e) {
                return "p" === (e + "").toLowerCase().charAt(0)
            }

            function Ke(e, t, a) {
                return e > 11 ? a ? "pm" : "PM" : a ? "am" : "AM"
            }

            function qe(e) {
                return e ? e.toLowerCase().replace("_", "-") : e
            }

            function Qe(e) {
                for (var t, a, n, s, i = 0; i < e.length;) {
                    for (s = qe(e[i]).split("-"), t = s.length, a = qe(e[i + 1]), a = a ? a.split("-") : null; t > 0;) {
                        if (n = Xe(s.slice(0, t).join("-"))) return n;
                        if (a && a.length >= t && v(s, a, !0) >= t - 1) break;
                        t--
                    }
                    i++
                }
                return null
            }

            function Xe(t) {
                var n = null;
                if (!As[t] && void 0 !== e && e && e.exports) try {
                    n = Ps._abbr;
                    a(303)("./" + t), et(n)
                } catch (e) {
                }
                return As[t]
            }

            function et(e, t) {
                var a;
                return e && (a = r(t) ? nt(e) : tt(e, t)) && (Ps = a), Ps._abbr
            }

            function tt(e, t) {
                if (null !== t) {
                    var a = Os;
                    if (t.abbr = e, null != As[e]) T("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), a = As[e]._config; else if (null != t.parentLocale) {
                        if (null == As[t.parentLocale]) return Es[t.parentLocale] || (Es[t.parentLocale] = []), Es[t.parentLocale].push({
                            name: e,
                            config: t
                        }), null;
                        a = As[t.parentLocale]._config
                    }
                    return As[e] = new x(S(a, t)), Es[e] && Es[e].forEach(function (e) {
                        tt(e.name, e.config)
                    }), et(e), As[e]
                }
                return delete As[e], null
            }

            function at(e, t) {
                if (null != t) {
                    var a, n, s = Os;
                    n = Xe(e), null != n && (s = n._config), t = S(s, t), a = new x(t), a.parentLocale = As[e], As[e] = a, et(e)
                } else null != As[e] && (null != As[e].parentLocale ? As[e] = As[e].parentLocale : null != As[e] && delete As[e]);
                return As[e]
            }

            function nt(e) {
                var t;
                if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Ps;
                if (!n(e)) {
                    if (t = Xe(e)) return t;
                    e = [e]
                }
                return Qe(e)
            }

            function st() {
                return Cn(As)
            }

            function it(e) {
                var t, a = e._a;
                return a && -2 === h(e).overflow && (t = a[us] < 0 || a[us] > 11 ? us : a[ls] < 1 || a[ls] > _e(a[_s], a[us]) ? ls : a[ms] < 0 || a[ms] > 24 || 24 === a[ms] && (0 !== a[cs] || 0 !== a[hs] || 0 !== a[Ms]) ? ms : a[cs] < 0 || a[cs] > 59 ? cs : a[hs] < 0 || a[hs] > 59 ? hs : a[Ms] < 0 || a[Ms] > 999 ? Ms : -1, h(e)._overflowDayOfYear && (t < _s || t > ls) && (t = ls), h(e)._overflowWeeks && -1 === t && (t = fs), h(e)._overflowWeekday && -1 === t && (t = ps), h(e).overflow = t), e
            }

            function rt(e, t, a) {
                return null != e ? e : null != t ? t : a
            }

            function dt(e) {
                var a = new Date(t.now());
                return e._useUTC ? [a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()] : [a.getFullYear(), a.getMonth(), a.getDate()]
            }

            function ot(e) {
                var t, a, n, s, i, r = [];
                if (!e._d) {
                    for (n = dt(e), e._w && null == e._a[ls] && null == e._a[us] && _t(e), null != e._dayOfYear && (i = rt(e._a[_s], n[_s]), (e._dayOfYear > ee(i) || 0 === e._dayOfYear) && (h(e)._overflowDayOfYear = !0), a = ge(i, 0, e._dayOfYear), e._a[us] = a.getUTCMonth(), e._a[ls] = a.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = r[t] = n[t];
                    for (; t < 7; t++) e._a[t] = r[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                    24 === e._a[ms] && 0 === e._a[cs] && 0 === e._a[hs] && 0 === e._a[Ms] && (e._nextDay = !0, e._a[ms] = 0), e._d = (e._useUTC ? ge : Ye).apply(null, r), s = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ms] = 24), e._w && void 0 !== e._w.d && e._w.d !== s && (h(e).weekdayMismatch = !0)
                }
            }

            function _t(e) {
                var t, a, n, s, i, r, d, o;
                if (t = e._w, null != t.GG || null != t.W || null != t.E) i = 1, r = 4, a = rt(t.GG, e._a[_s], De(wt(), 1, 4).year), n = rt(t.W, 1), ((s = rt(t.E, 1)) < 1 || s > 7) && (o = !0); else {
                    i = e._locale._week.dow, r = e._locale._week.doy;
                    var _ = De(wt(), i, r);
                    a = rt(t.gg, e._a[_s], _.year), n = rt(t.w, _.week), null != t.d ? ((s = t.d) < 0 || s > 6) && (o = !0) : null != t.e ? (s = t.e + i, (t.e < 0 || t.e > 6) && (o = !0)) : s = i
                }
                n < 1 || n > Te(a, i, r) ? h(e)._overflowWeeks = !0 : null != o ? h(e)._overflowWeekday = !0 : (d = ke(a, n, s, i, r), e._a[_s] = d.year, e._dayOfYear = d.dayOfYear)
            }

            function ut(e) {
                var t, a, n, s, i, r, d = e._i, o = Is.exec(d) || Fs.exec(d);
                if (o) {
                    for (h(e).iso = !0, t = 0, a = $s.length; t < a; t++) if ($s[t][1].exec(o[1])) {
                        s = $s[t][0], n = !1 !== $s[t][2];
                        break
                    }
                    if (null == s) return void(e._isValid = !1);
                    if (o[3]) {
                        for (t = 0, a = Ns.length; t < a; t++) if (Ns[t][1].exec(o[3])) {
                            i = (o[2] || " ") + Ns[t][0];
                            break
                        }
                        if (null == i) return void(e._isValid = !1)
                    }
                    if (!n && null != i) return void(e._isValid = !1);
                    if (o[4]) {
                        if (!zs.exec(o[4])) return void(e._isValid = !1);
                        r = "Z"
                    }
                    e._f = s + (i || "") + (r || ""), Lt(e)
                } else e._isValid = !1
            }

            function lt(e, t, a, n, s, i) {
                var r = [mt(e), vs.indexOf(t), parseInt(a, 10), parseInt(n, 10), parseInt(s, 10)];
                return i && r.push(parseInt(i, 10)), r
            }

            function mt(e) {
                var t = parseInt(e, 10);
                return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
            }

            function ct(e) {
                return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim()
            }

            function ht(e, t, a) {
                if (e) {
                    if (bs.indexOf(e) !== new Date(t[0], t[1], t[2]).getDay()) return h(a).weekdayMismatch = !0, a._isValid = !1, !1
                }
                return !0
            }

            function Mt(e, t, a) {
                if (e) return Us[e];
                if (t) return 0;
                var n = parseInt(a, 10), s = n % 100;
                return (n - s) / 100 * 60 + s
            }

            function ft(e) {
                var t = Rs.exec(ct(e._i));
                if (t) {
                    var a = lt(t[4], t[3], t[2], t[5], t[6], t[7]);
                    if (!ht(t[1], a, e)) return;
                    e._a = a, e._tzm = Mt(t[8], t[9], t[10]), e._d = ge.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), h(e).rfc2822 = !0
                } else e._isValid = !1
            }

            function pt(e) {
                var a = Js.exec(e._i);
                if (null !== a) return void(e._d = new Date(+a[1]));
                ut(e), !1 === e._isValid && (delete e._isValid, ft(e), !1 === e._isValid && (delete e._isValid, t.createFromInputFallback(e)))
            }

            function Lt(e) {
                if (e._f === t.ISO_8601) return void ut(e);
                if (e._f === t.RFC_2822) return void ft(e);
                e._a = [], h(e).empty = !0;
                var a, n, s, i, r, d = "" + e._i, o = d.length, _ = 0;
                for (s = G(e._f, e._locale).match(zn) || [], a = 0; a < s.length; a++) i = s[a], n = (d.match(V(i, e)) || [])[0], n && (r = d.substr(0, d.indexOf(n)), r.length > 0 && h(e).unusedInput.push(r), d = d.slice(d.indexOf(n) + n.length), _ += n.length), Jn[i] ? (n ? h(e).empty = !1 : h(e).unusedTokens.push(i), X(i, n, e)) : e._strict && !n && h(e).unusedTokens.push(i);
                h(e).charsLeftOver = o - _, d.length > 0 && h(e).unusedInput.push(d), e._a[ms] <= 12 && !0 === h(e).bigHour && e._a[ms] > 0 && (h(e).bigHour = void 0), h(e).parsedDateParts = e._a.slice(0), h(e).meridiem = e._meridiem, e._a[ms] = yt(e._locale, e._a[ms], e._meridiem), ot(e), it(e)
            }

            function yt(e, t, a) {
                var n;
                return null == a ? t : null != e.meridiemHour ? e.meridiemHour(t, a) : null != e.isPM ? (n = e.isPM(a), n && t < 12 && (t += 12), n || 12 !== t || (t = 0), t) : t
            }

            function Yt(e) {
                var t, a, n, s, i;
                if (0 === e._f.length) return h(e).invalidFormat = !0, void(e._d = new Date(NaN));
                for (s = 0; s < e._f.length; s++) i = 0, t = p({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[s], Lt(t), M(t) && (i += h(t).charsLeftOver, i += 10 * h(t).unusedTokens.length, h(t).score = i, (null == n || i < n) && (n = i, a = t));
                l(e, a || t)
            }

            function gt(e) {
                if (!e._d) {
                    var t = I(e._i);
                    e._a = _([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function (e) {
                        return e && parseInt(e, 10)
                    }), ot(e)
                }
            }

            function vt(e) {
                var t = new L(it(kt(e)));
                return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
            }

            function kt(e) {
                var t = e._i, a = e._f;
                return e._locale = e._locale || nt(e._l), null === t || void 0 === a && "" === t ? f({nullInput: !0}) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), y(t) ? new L(it(t)) : (o(t) ? e._d = t : n(a) ? Yt(e) : a ? Lt(e) : Dt(e), M(e) || (e._d = null), e))
            }

            function Dt(e) {
                var a = e._i;
                r(a) ? e._d = new Date(t.now()) : o(a) ? e._d = new Date(a.valueOf()) : "string" == typeof a ? pt(e) : n(a) ? (e._a = _(a.slice(0), function (e) {
                    return parseInt(e, 10)
                }), ot(e)) : s(a) ? gt(e) : d(a) ? e._d = new Date(a) : t.createFromInputFallback(e)
            }

            function Tt(e, t, a, r, d) {
                var o = {};
                return !0 !== a && !1 !== a || (r = a, a = void 0), (s(e) && i(e) || n(e) && 0 === e.length) && (e = void 0), o._isAMomentObject = !0, o._useUTC = o._isUTC = d, o._l = a, o._i = e, o._f = t, o._strict = r, vt(o)
            }

            function wt(e, t, a, n) {
                return Tt(e, t, a, n, !1)
            }

            function bt(e, t) {
                var a, s;
                if (1 === t.length && n(t[0]) && (t = t[0]), !t.length) return wt();
                for (a = t[0], s = 1; s < t.length; ++s) t[s].isValid() && !t[s][e](a) || (a = t[s]);
                return a
            }

            function St() {
                return bt("isBefore", [].slice.call(arguments, 0))
            }

            function xt() {
                return bt("isAfter", [].slice.call(arguments, 0))
            }

            function Ht(e) {
                for (var t in e) if (-1 === Ls.call(Zs, t) || null != e[t] && isNaN(e[t])) return !1;
                for (var a = !1, n = 0; n < Zs.length; ++n) if (e[Zs[n]]) {
                    if (a) return !1;
                    parseFloat(e[Zs[n]]) !== g(e[Zs[n]]) && (a = !0)
                }
                return !0
            }

            function jt() {
                return this._isValid
            }

            function Pt() {
                return qt(NaN)
            }

            function Ct(e) {
                var t = I(e), a = t.year || 0, n = t.quarter || 0, s = t.month || 0, i = t.week || 0, r = t.day || 0,
                    d = t.hour || 0, o = t.minute || 0, _ = t.second || 0, u = t.millisecond || 0;
                this._isValid = Ht(t), this._milliseconds = +u + 1e3 * _ + 6e4 * o + 1e3 * d * 60 * 60, this._days = +r + 7 * i, this._months = +s + 3 * n + 12 * a, this._data = {}, this._locale = nt(), this._bubble()
            }

            function Wt(e) {
                return e instanceof Ct
            }

            function Ot(e) {
                return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
            }

            function At(e, t) {
                N(e, 0, 0, function () {
                    var e = this.utcOffset(), a = "+";
                    return e < 0 && (e = -e, a = "-"), a + $(~~(e / 60), 2) + t + $(~~e % 60, 2)
                })
            }

            function Et(e, t) {
                var a = (t || "").match(e);
                if (null === a) return null;
                var n = a[a.length - 1] || [], s = (n + "").match(Ks) || ["-", 0, 0], i = 60 * s[1] + g(s[2]);
                return 0 === i ? 0 : "+" === s[0] ? i : -i
            }

            function It(e, a) {
                var n, s;
                return a._isUTC ? (n = a.clone(), s = (y(e) || o(e) ? e.valueOf() : wt(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + s), t.updateOffset(n, !1), n) : wt(e).local()
            }

            function Ft(e) {
                return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
            }

            function zt(e, a, n) {
                var s, i = this._offset || 0;
                if (!this.isValid()) return null != e ? this : NaN;
                if (null != e) {
                    if ("string" == typeof e) {
                        if (null === (e = Et(ss, e))) return this
                    } else Math.abs(e) < 16 && !n && (e *= 60);
                    return !this._isUTC && a && (s = Ft(this)), this._offset = e, this._isUTC = !0, null != s && this.add(s, "m"), i !== e && (!a || this._changeInProgress ? aa(this, qt(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this
                }
                return this._isUTC ? i : Ft(this)
            }

            function $t(e, t) {
                return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
            }

            function Nt(e) {
                return this.utcOffset(0, e)
            }

            function Jt(e) {
                return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Ft(this), "m")), this
            }

            function Rt() {
                if (null != this._tzm) this.utcOffset(this._tzm, !1, !0); else if ("string" == typeof this._i) {
                    var e = Et(ns, this._i);
                    null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
                }
                return this
            }

            function Ut(e) {
                return !!this.isValid() && (e = e ? wt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
            }

            function Gt() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }

            function Bt() {
                if (!r(this._isDSTShifted)) return this._isDSTShifted;
                var e = {};
                if (p(e, this), e = kt(e), e._a) {
                    var t = e._isUTC ? m(e._a) : wt(e._a);
                    this._isDSTShifted = this.isValid() && v(e._a, t.toArray()) > 0
                } else this._isDSTShifted = !1;
                return this._isDSTShifted
            }

            function Vt() {
                return !!this.isValid() && !this._isUTC
            }

            function Zt() {
                return !!this.isValid() && this._isUTC
            }

            function Kt() {
                return !!this.isValid() && (this._isUTC && 0 === this._offset)
            }

            function qt(e, t) {
                var a, n, s, i = e, r = null;
                return Wt(e) ? i = {
                    ms: e._milliseconds,
                    d: e._days,
                    M: e._months
                } : d(e) ? (i = {}, t ? i[t] = e : i.milliseconds = e) : (r = qs.exec(e)) ? (a = "-" === r[1] ? -1 : 1, i = {
                    y: 0,
                    d: g(r[ls]) * a,
                    h: g(r[ms]) * a,
                    m: g(r[cs]) * a,
                    s: g(r[hs]) * a,
                    ms: g(Ot(1e3 * r[Ms])) * a
                }) : (r = Qs.exec(e)) ? (a = "-" === r[1] ? -1 : (r[1], 1), i = {
                    y: Qt(r[2], a),
                    M: Qt(r[3], a),
                    w: Qt(r[4], a),
                    d: Qt(r[5], a),
                    h: Qt(r[6], a),
                    m: Qt(r[7], a),
                    s: Qt(r[8], a)
                }) : null == i ? i = {} : "object" == typeof i && ("from" in i || "to" in i) && (s = ea(wt(i.from), wt(i.to)), i = {}, i.ms = s.milliseconds, i.M = s.months), n = new Ct(i), Wt(e) && u(e, "_locale") && (n._locale = e._locale), n
            }

            function Qt(e, t) {
                var a = e && parseFloat(e.replace(",", "."));
                return (isNaN(a) ? 0 : a) * t
            }

            function Xt(e, t) {
                var a = {milliseconds: 0, months: 0};
                return a.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(a.months, "M").isAfter(t) && --a.months, a.milliseconds = +t - +e.clone().add(a.months, "M"), a
            }

            function ea(e, t) {
                var a;
                return e.isValid() && t.isValid() ? (t = It(t, e), e.isBefore(t) ? a = Xt(e, t) : (a = Xt(t, e), a.milliseconds = -a.milliseconds, a.months = -a.months), a) : {
                    milliseconds: 0,
                    months: 0
                }
            }

            function ta(e, t) {
                return function (a, n) {
                    var s, i;
                    return null === n || isNaN(+n) || (T(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), i = a, a = n, n = i), a = "string" == typeof a ? +a : a, s = qt(a, n), aa(this, s, e), this
                }
            }

            function aa(e, a, n, s) {
                var i = a._milliseconds, r = Ot(a._days), d = Ot(a._months);
                e.isValid() && (s = null == s || s, d && he(e, se(e, "Month") + d * n), r && ie(e, "Date", se(e, "Date") + r * n), i && e._d.setTime(e._d.valueOf() + i * n), s && t.updateOffset(e, r || d))
            }

            function na(e, t) {
                var a = e.diff(t, "days", !0);
                return a < -6 ? "sameElse" : a < -1 ? "lastWeek" : a < 0 ? "lastDay" : a < 1 ? "sameDay" : a < 2 ? "nextDay" : a < 7 ? "nextWeek" : "sameElse"
            }

            function sa(e, a) {
                var n = e || wt(), s = It(n, this).startOf("day"), i = t.calendarFormat(this, s) || "sameElse",
                    r = a && (w(a[i]) ? a[i].call(this, n) : a[i]);
                return this.format(r || this.localeData().calendar(i, this, wt(n)))
            }

            function ia() {
                return new L(this)
            }

            function ra(e, t) {
                var a = y(e) ? e : wt(e);
                return !(!this.isValid() || !a.isValid()) && (t = E(r(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() > a.valueOf() : a.valueOf() < this.clone().startOf(t).valueOf())
            }

            function da(e, t) {
                var a = y(e) ? e : wt(e);
                return !(!this.isValid() || !a.isValid()) && (t = E(r(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() < a.valueOf() : this.clone().endOf(t).valueOf() < a.valueOf())
            }

            function oa(e, t, a, n) {
                return n = n || "()", ("(" === n[0] ? this.isAfter(e, a) : !this.isBefore(e, a)) && (")" === n[1] ? this.isBefore(t, a) : !this.isAfter(t, a))
            }

            function _a(e, t) {
                var a, n = y(e) ? e : wt(e);
                return !(!this.isValid() || !n.isValid()) && (t = E(t || "millisecond"), "millisecond" === t ? this.valueOf() === n.valueOf() : (a = n.valueOf(), this.clone().startOf(t).valueOf() <= a && a <= this.clone().endOf(t).valueOf()))
            }

            function ua(e, t) {
                return this.isSame(e, t) || this.isAfter(e, t)
            }

            function la(e, t) {
                return this.isSame(e, t) || this.isBefore(e, t)
            }

            function ma(e, t, a) {
                var n, s, i;
                if (!this.isValid()) return NaN;
                if (n = It(e, this), !n.isValid()) return NaN;
                switch (s = 6e4 * (n.utcOffset() - this.utcOffset()), t = E(t)) {
                    case"year":
                        i = ca(this, n) / 12;
                        break;
                    case"month":
                        i = ca(this, n);
                        break;
                    case"quarter":
                        i = ca(this, n) / 3;
                        break;
                    case"second":
                        i = (this - n) / 1e3;
                        break;
                    case"minute":
                        i = (this - n) / 6e4;
                        break;
                    case"hour":
                        i = (this - n) / 36e5;
                        break;
                    case"day":
                        i = (this - n - s) / 864e5;
                        break;
                    case"week":
                        i = (this - n - s) / 6048e5;
                        break;
                    default:
                        i = this - n
                }
                return a ? i : Y(i)
            }

            function ca(e, t) {
                var a, n, s = 12 * (t.year() - e.year()) + (t.month() - e.month()), i = e.clone().add(s, "months");
                return t - i < 0 ? (a = e.clone().add(s - 1, "months"), n = (t - i) / (i - a)) : (a = e.clone().add(s + 1, "months"), n = (t - i) / (a - i)), -(s + n) || 0
            }

            function ha() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }

            function Ma(e) {
                if (!this.isValid()) return null;
                var t = !0 !== e, a = t ? this.clone().utc() : this;
                return a.year() < 0 || a.year() > 9999 ? U(a, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : w(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this._d.valueOf()).toISOString().replace("Z", U(a, "Z")) : U(a, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
            }

            function fa() {
                if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                var e = "moment", t = "";
                this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
                var a = "[" + e + '("]', n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                    s = t + '[")]';
                return this.format(a + n + "-MM-DD[T]HH:mm:ss.SSS" + s)
            }

            function pa(e) {
                e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
                var a = U(this, e);
                return this.localeData().postformat(a)
            }

            function La(e, t) {
                return this.isValid() && (y(e) && e.isValid() || wt(e).isValid()) ? qt({
                    to: this,
                    from: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }

            function ya(e) {
                return this.from(wt(), e)
            }

            function Ya(e, t) {
                return this.isValid() && (y(e) && e.isValid() || wt(e).isValid()) ? qt({
                    from: this,
                    to: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }

            function ga(e) {
                return this.to(wt(), e)
            }

            function va(e) {
                var t;
                return void 0 === e ? this._locale._abbr : (t = nt(e), null != t && (this._locale = t), this)
            }

            function ka() {
                return this._locale
            }

            function Da(e) {
                switch (e = E(e)) {
                    case"year":
                        this.month(0);
                    case"quarter":
                    case"month":
                        this.date(1);
                    case"week":
                    case"isoWeek":
                    case"day":
                    case"date":
                        this.hours(0);
                    case"hour":
                        this.minutes(0);
                    case"minute":
                        this.seconds(0);
                    case"second":
                        this.milliseconds(0)
                }
                return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
            }

            function Ta(e) {
                return void 0 === (e = E(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
            }

            function wa() {
                return this._d.valueOf() - 6e4 * (this._offset || 0)
            }

            function ba() {
                return Math.floor(this.valueOf() / 1e3)
            }

            function Sa() {
                return new Date(this.valueOf())
            }

            function xa() {
                var e = this;
                return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
            }

            function Ha() {
                var e = this;
                return {
                    years: e.year(),
                    months: e.month(),
                    date: e.date(),
                    hours: e.hours(),
                    minutes: e.minutes(),
                    seconds: e.seconds(),
                    milliseconds: e.milliseconds()
                }
            }

            function ja() {
                return this.isValid() ? this.toISOString() : null
            }

            function Pa() {
                return M(this)
            }

            function Ca() {
                return l({}, h(this))
            }

            function Wa() {
                return h(this).overflow
            }

            function Oa() {
                return {input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict}
            }

            function Aa(e, t) {
                N(0, [e, e.length], 0, t)
            }

            function Ea(e) {
                return $a.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }

            function Ia(e) {
                return $a.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
            }

            function Fa() {
                return Te(this.year(), 1, 4)
            }

            function za() {
                var e = this.localeData()._week;
                return Te(this.year(), e.dow, e.doy)
            }

            function $a(e, t, a, n, s) {
                var i;
                return null == e ? De(this, n, s).year : (i = Te(e, n, s), t > i && (t = i), Na.call(this, e, t, a, n, s))
            }

            function Na(e, t, a, n, s) {
                var i = ke(e, t, a, n, s), r = ge(i.year, 0, i.dayOfYear);
                return this.year(r.getUTCFullYear()), this.month(r.getUTCMonth()), this.date(r.getUTCDate()), this
            }

            function Ja(e) {
                return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
            }

            function Ra(e) {
                var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == e ? t : this.add(e - t, "d")
            }

            function Ua(e, t) {
                t[Ms] = g(1e3 * ("0." + e))
            }

            function Ga() {
                return this._isUTC ? "UTC" : ""
            }

            function Ba() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }

            function Va(e) {
                return wt(1e3 * e)
            }

            function Za() {
                return wt.apply(null, arguments).parseZone()
            }

            function Ka(e) {
                return e
            }

            function qa(e, t, a, n) {
                var s = nt(), i = m().set(n, t);
                return s[a](i, e)
            }

            function Qa(e, t, a) {
                if (d(e) && (t = e, e = void 0), e = e || "", null != t) return qa(e, t, a, "month");
                var n, s = [];
                for (n = 0; n < 12; n++) s[n] = qa(e, n, a, "month");
                return s
            }

            function Xa(e, t, a, n) {
                "boolean" == typeof e ? (d(t) && (a = t, t = void 0), t = t || "") : (t = e, a = t, e = !1, d(t) && (a = t, t = void 0), t = t || "");
                var s = nt(), i = e ? s._week.dow : 0;
                if (null != a) return qa(t, (a + i) % 7, n, "day");
                var r, o = [];
                for (r = 0; r < 7; r++) o[r] = qa(t, (r + i) % 7, n, "day");
                return o
            }

            function en(e, t) {
                return Qa(e, t, "months")
            }

            function tn(e, t) {
                return Qa(e, t, "monthsShort")
            }

            function an(e, t, a) {
                return Xa(e, t, a, "weekdays")
            }

            function nn(e, t, a) {
                return Xa(e, t, a, "weekdaysShort")
            }

            function sn(e, t, a) {
                return Xa(e, t, a, "weekdaysMin")
            }

            function rn() {
                var e = this._data;
                return this._milliseconds = _i(this._milliseconds), this._days = _i(this._days), this._months = _i(this._months), e.milliseconds = _i(e.milliseconds), e.seconds = _i(e.seconds), e.minutes = _i(e.minutes), e.hours = _i(e.hours), e.months = _i(e.months), e.years = _i(e.years), this
            }

            function dn(e, t, a, n) {
                var s = qt(t, a);
                return e._milliseconds += n * s._milliseconds, e._days += n * s._days, e._months += n * s._months, e._bubble()
            }

            function on(e, t) {
                return dn(this, e, t, 1)
            }

            function _n(e, t) {
                return dn(this, e, t, -1)
            }

            function un(e) {
                return e < 0 ? Math.floor(e) : Math.ceil(e)
            }

            function ln() {
                var e, t, a, n, s, i = this._milliseconds, r = this._days, d = this._months, o = this._data;
                return i >= 0 && r >= 0 && d >= 0 || i <= 0 && r <= 0 && d <= 0 || (i += 864e5 * un(cn(d) + r), r = 0, d = 0), o.milliseconds = i % 1e3, e = Y(i / 1e3), o.seconds = e % 60, t = Y(e / 60), o.minutes = t % 60, a = Y(t / 60), o.hours = a % 24, r += Y(a / 24), s = Y(mn(r)), d += s, r -= un(cn(s)), n = Y(d / 12), d %= 12, o.days = r, o.months = d, o.years = n, this
            }

            function mn(e) {
                return 4800 * e / 146097
            }

            function cn(e) {
                return 146097 * e / 4800
            }

            function hn(e) {
                if (!this.isValid()) return NaN;
                var t, a, n = this._milliseconds;
                if ("month" === (e = E(e)) || "year" === e) return t = this._days + n / 864e5, a = this._months + mn(t), "month" === e ? a : a / 12;
                switch (t = this._days + Math.round(cn(this._months)), e) {
                    case"week":
                        return t / 7 + n / 6048e5;
                    case"day":
                        return t + n / 864e5;
                    case"hour":
                        return 24 * t + n / 36e5;
                    case"minute":
                        return 1440 * t + n / 6e4;
                    case"second":
                        return 86400 * t + n / 1e3;
                    case"millisecond":
                        return Math.floor(864e5 * t) + n;
                    default:
                        throw new Error("Unknown unit " + e)
                }
            }

            function Mn() {
                return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * g(this._months / 12) : NaN
            }

            function fn(e) {
                return function () {
                    return this.as(e)
                }
            }

            function pn() {
                return qt(this)
            }

            function Ln(e) {
                return e = E(e), this.isValid() ? this[e + "s"]() : NaN
            }

            function yn(e) {
                return function () {
                    return this.isValid() ? this._data[e] : NaN
                }
            }

            function Yn() {
                return Y(this.days() / 7)
            }

            function gn(e, t, a, n, s) {
                return s.relativeTime(t || 1, !!a, e, n)
            }

            function vn(e, t, a) {
                var n = qt(e).abs(), s = Ti(n.as("s")), i = Ti(n.as("m")), r = Ti(n.as("h")), d = Ti(n.as("d")),
                    o = Ti(n.as("M")), _ = Ti(n.as("y")),
                    u = s <= wi.ss && ["s", s] || s < wi.s && ["ss", s] || i <= 1 && ["m"] || i < wi.m && ["mm", i] || r <= 1 && ["h"] || r < wi.h && ["hh", r] || d <= 1 && ["d"] || d < wi.d && ["dd", d] || o <= 1 && ["M"] || o < wi.M && ["MM", o] || _ <= 1 && ["y"] || ["yy", _];
                return u[2] = t, u[3] = +e > 0, u[4] = a, gn.apply(null, u)
            }

            function kn(e) {
                return void 0 === e ? Ti : "function" == typeof e && (Ti = e, !0)
            }

            function Dn(e, t) {
                return void 0 !== wi[e] && (void 0 === t ? wi[e] : (wi[e] = t, "s" === e && (wi.ss = t - 1), !0))
            }

            function Tn(e) {
                if (!this.isValid()) return this.localeData().invalidDate();
                var t = this.localeData(), a = vn(this, !e, t);
                return e && (a = t.pastFuture(+this, a)), t.postformat(a)
            }

            function wn(e) {
                return (e > 0) - (e < 0) || +e
            }

            function bn() {
                if (!this.isValid()) return this.localeData().invalidDate();
                var e, t, a, n = bi(this._milliseconds) / 1e3, s = bi(this._days), i = bi(this._months);
                e = Y(n / 60), t = Y(e / 60), n %= 60, e %= 60, a = Y(i / 12), i %= 12;
                var r = a, d = i, o = s, _ = t, u = e, l = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
                    m = this.asSeconds();
                if (!m) return "P0D";
                var c = m < 0 ? "-" : "", h = wn(this._months) !== wn(m) ? "-" : "",
                    M = wn(this._days) !== wn(m) ? "-" : "", f = wn(this._milliseconds) !== wn(m) ? "-" : "";
                return c + "P" + (r ? h + r + "Y" : "") + (d ? h + d + "M" : "") + (o ? M + o + "D" : "") + (_ || u || l ? "T" : "") + (_ ? f + _ + "H" : "") + (u ? f + u + "M" : "") + (l ? f + l + "S" : "")
            }

            var Sn, xn;
            xn = Array.prototype.some ? Array.prototype.some : function (e) {
                for (var t = Object(this), a = t.length >>> 0, n = 0; n < a; n++) if (n in t && e.call(this, t[n], n, t)) return !0;
                return !1
            };
            var Hn = t.momentProperties = [], jn = !1, Pn = {};
            t.suppressDeprecationWarnings = !1, t.deprecationHandler = null;
            var Cn;
            Cn = Object.keys ? Object.keys : function (e) {
                var t, a = [];
                for (t in e) u(e, t) && a.push(t);
                return a
            };
            var Wn = {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                }, On = {
                    LTS: "h:mm:ss A",
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                }, An = /\d{1,2}/, En = {
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
                }, In = {}, Fn = {},
                zn = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                $n = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Nn = {}, Jn = {}, Rn = /\d/, Un = /\d\d/,
                Gn = /\d{3}/, Bn = /\d{4}/, Vn = /[+-]?\d{6}/, Zn = /\d\d?/, Kn = /\d\d\d\d?/, qn = /\d\d\d\d\d\d?/,
                Qn = /\d{1,3}/, Xn = /\d{1,4}/, es = /[+-]?\d{1,6}/, ts = /\d+/, as = /[+-]?\d+/,
                ns = /Z|[+-]\d\d:?\d\d/gi, ss = /Z|[+-]\d\d(?::?\d\d)?/gi, is = /[+-]?\d+(\.\d{1,3})?/,
                rs = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
                ds = {}, os = {}, _s = 0, us = 1, ls = 2, ms = 3, cs = 4, hs = 5, Ms = 6, fs = 7, ps = 8;
            N("Y", 0, 0, function () {
                var e = this.year();
                return e <= 9999 ? "" + e : "+" + e
            }), N(0, ["YY", 2], 0, function () {
                return this.year() % 100
            }), N(0, ["YYYY", 4], 0, "year"), N(0, ["YYYYY", 5], 0, "year"), N(0, ["YYYYYY", 6, !0], 0, "year"), A("year", "y"), F("year", 1), B("Y", as), B("YY", Zn, Un), B("YYYY", Xn, Bn), B("YYYYY", es, Vn), B("YYYYYY", es, Vn), q(["YYYYY", "YYYYYY"], _s), q("YYYY", function (e, a) {
                a[_s] = 2 === e.length ? t.parseTwoDigitYear(e) : g(e)
            }), q("YY", function (e, a) {
                a[_s] = t.parseTwoDigitYear(e)
            }), q("Y", function (e, t) {
                t[_s] = parseInt(e, 10)
            }), t.parseTwoDigitYear = function (e) {
                return g(e) + (g(e) > 68 ? 1900 : 2e3)
            };
            var Ls, ys = ne("FullYear", !0);
            Ls = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) {
                var t;
                for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
                return -1
            }, N("M", ["MM", 2], "Mo", function () {
                return this.month() + 1
            }), N("MMM", 0, 0, function (e) {
                return this.localeData().monthsShort(this, e)
            }), N("MMMM", 0, 0, function (e) {
                return this.localeData().months(this, e)
            }), A("month", "M"), F("month", 8), B("M", Zn), B("MM", Zn, Un), B("MMM", function (e, t) {
                return t.monthsShortRegex(e)
            }), B("MMMM", function (e, t) {
                return t.monthsRegex(e)
            }), q(["M", "MM"], function (e, t) {
                t[us] = g(e) - 1
            }), q(["MMM", "MMMM"], function (e, t, a, n) {
                var s = a._locale.monthsParse(e, n, a._strict);
                null != s ? t[us] = s : h(a).invalidMonth = e
            });
            var Ys = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                gs = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                vs = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), ks = rs, Ds = rs;
            N("w", ["ww", 2], "wo", "week"), N("W", ["WW", 2], "Wo", "isoWeek"), A("week", "w"), A("isoWeek", "W"), F("week", 5), F("isoWeek", 5), B("w", Zn), B("ww", Zn, Un), B("W", Zn), B("WW", Zn, Un), Q(["w", "ww", "W", "WW"], function (e, t, a, n) {
                t[n.substr(0, 1)] = g(e)
            });
            var Ts = {dow: 0, doy: 6};
            N("d", 0, "do", "day"), N("dd", 0, 0, function (e) {
                return this.localeData().weekdaysMin(this, e)
            }), N("ddd", 0, 0, function (e) {
                return this.localeData().weekdaysShort(this, e)
            }), N("dddd", 0, 0, function (e) {
                return this.localeData().weekdays(this, e)
            }), N("e", 0, 0, "weekday"), N("E", 0, 0, "isoWeekday"), A("day", "d"), A("weekday", "e"), A("isoWeekday", "E"), F("day", 11), F("weekday", 11), F("isoWeekday", 11), B("d", Zn), B("e", Zn), B("E", Zn), B("dd", function (e, t) {
                return t.weekdaysMinRegex(e)
            }), B("ddd", function (e, t) {
                return t.weekdaysShortRegex(e)
            }), B("dddd", function (e, t) {
                return t.weekdaysRegex(e)
            }), Q(["dd", "ddd", "dddd"], function (e, t, a, n) {
                var s = a._locale.weekdaysParse(e, n, a._strict);
                null != s ? t.d = s : h(a).invalidWeekday = e
            }), Q(["d", "e", "E"], function (e, t, a, n) {
                t[n] = g(e)
            });
            var ws = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                bs = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Ss = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), xs = rs, Hs = rs,
                js = rs;
            N("H", ["HH", 2], 0, "hour"), N("h", ["hh", 2], 0, Ue), N("k", ["kk", 2], 0, Ge), N("hmm", 0, 0, function () {
                return "" + Ue.apply(this) + $(this.minutes(), 2)
            }), N("hmmss", 0, 0, function () {
                return "" + Ue.apply(this) + $(this.minutes(), 2) + $(this.seconds(), 2)
            }), N("Hmm", 0, 0, function () {
                return "" + this.hours() + $(this.minutes(), 2)
            }), N("Hmmss", 0, 0, function () {
                return "" + this.hours() + $(this.minutes(), 2) + $(this.seconds(), 2)
            }), Be("a", !0), Be("A", !1), A("hour", "h"), F("hour", 13), B("a", Ve), B("A", Ve), B("H", Zn), B("h", Zn), B("k", Zn), B("HH", Zn, Un), B("hh", Zn, Un), B("kk", Zn, Un), B("hmm", Kn), B("hmmss", qn), B("Hmm", Kn), B("Hmmss", qn), q(["H", "HH"], ms), q(["k", "kk"], function (e, t, a) {
                var n = g(e);
                t[ms] = 24 === n ? 0 : n
            }), q(["a", "A"], function (e, t, a) {
                a._isPm = a._locale.isPM(e), a._meridiem = e
            }), q(["h", "hh"], function (e, t, a) {
                t[ms] = g(e), h(a).bigHour = !0
            }), q("hmm", function (e, t, a) {
                var n = e.length - 2;
                t[ms] = g(e.substr(0, n)), t[cs] = g(e.substr(n)), h(a).bigHour = !0
            }), q("hmmss", function (e, t, a) {
                var n = e.length - 4, s = e.length - 2;
                t[ms] = g(e.substr(0, n)), t[cs] = g(e.substr(n, 2)), t[hs] = g(e.substr(s)), h(a).bigHour = !0
            }), q("Hmm", function (e, t, a) {
                var n = e.length - 2;
                t[ms] = g(e.substr(0, n)), t[cs] = g(e.substr(n))
            }), q("Hmmss", function (e, t, a) {
                var n = e.length - 4, s = e.length - 2;
                t[ms] = g(e.substr(0, n)), t[cs] = g(e.substr(n, 2)), t[hs] = g(e.substr(s))
            });
            var Ps, Cs = /[ap]\.?m?\.?/i, Ws = ne("Hours", !0), Os = {
                    calendar: Wn,
                    longDateFormat: On,
                    invalidDate: "Invalid date",
                    ordinal: "%d",
                    dayOfMonthOrdinalParse: An,
                    relativeTime: En,
                    months: gs,
                    monthsShort: vs,
                    week: Ts,
                    weekdays: ws,
                    weekdaysMin: Ss,
                    weekdaysShort: bs,
                    meridiemParse: Cs
                }, As = {}, Es = {},
                Is = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                Fs = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                zs = /Z|[+-]\d\d(?::?\d\d)?/,
                $s = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
                Ns = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
                Js = /^\/?Date\((\-?\d+)/i,
                Rs = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
                Us = {
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
            t.createFromInputFallback = D("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) {
                e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
            }), t.ISO_8601 = function () {
            }, t.RFC_2822 = function () {
            };
            var Gs = D("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                    var e = wt.apply(null, arguments);
                    return this.isValid() && e.isValid() ? e < this ? this : e : f()
                }),
                Bs = D("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                    var e = wt.apply(null, arguments);
                    return this.isValid() && e.isValid() ? e > this ? this : e : f()
                }), Vs = function () {
                    return Date.now ? Date.now() : +new Date
                }, Zs = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
            At("Z", ":"), At("ZZ", ""), B("Z", ss), B("ZZ", ss), q(["Z", "ZZ"], function (e, t, a) {
                a._useUTC = !0, a._tzm = Et(ss, e)
            });
            var Ks = /([\+\-]|\d\d)/gi;
            t.updateOffset = function () {
            };
            var qs = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                Qs = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
            qt.fn = Ct.prototype, qt.invalid = Pt;
            var Xs = ta(1, "add"), ei = ta(-1, "subtract");
            t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var ti = D("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
                return void 0 === e ? this.localeData() : this.locale(e)
            });
            N(0, ["gg", 2], 0, function () {
                return this.weekYear() % 100
            }), N(0, ["GG", 2], 0, function () {
                return this.isoWeekYear() % 100
            }), Aa("gggg", "weekYear"), Aa("ggggg", "weekYear"), Aa("GGGG", "isoWeekYear"), Aa("GGGGG", "isoWeekYear"), A("weekYear", "gg"), A("isoWeekYear", "GG"), F("weekYear", 1), F("isoWeekYear", 1), B("G", as), B("g", as), B("GG", Zn, Un), B("gg", Zn, Un), B("GGGG", Xn, Bn), B("gggg", Xn, Bn), B("GGGGG", es, Vn), B("ggggg", es, Vn), Q(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, a, n) {
                t[n.substr(0, 2)] = g(e)
            }), Q(["gg", "GG"], function (e, a, n, s) {
                a[s] = t.parseTwoDigitYear(e)
            }), N("Q", 0, "Qo", "quarter"), A("quarter", "Q"), F("quarter", 7), B("Q", Rn), q("Q", function (e, t) {
                t[us] = 3 * (g(e) - 1)
            }), N("D", ["DD", 2], "Do", "date"), A("date", "D"), F("date", 9), B("D", Zn), B("DD", Zn, Un), B("Do", function (e, t) {
                return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
            }), q(["D", "DD"], ls), q("Do", function (e, t) {
                t[ls] = g(e.match(Zn)[0])
            });
            var ai = ne("Date", !0);
            N("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), A("dayOfYear", "DDD"), F("dayOfYear", 4), B("DDD", Qn), B("DDDD", Gn), q(["DDD", "DDDD"], function (e, t, a) {
                a._dayOfYear = g(e)
            }), N("m", ["mm", 2], 0, "minute"), A("minute", "m"), F("minute", 14), B("m", Zn), B("mm", Zn, Un), q(["m", "mm"], cs);
            var ni = ne("Minutes", !1);
            N("s", ["ss", 2], 0, "second"), A("second", "s"), F("second", 15), B("s", Zn), B("ss", Zn, Un), q(["s", "ss"], hs);
            var si = ne("Seconds", !1);
            N("S", 0, 0, function () {
                return ~~(this.millisecond() / 100)
            }), N(0, ["SS", 2], 0, function () {
                return ~~(this.millisecond() / 10)
            }), N(0, ["SSS", 3], 0, "millisecond"), N(0, ["SSSS", 4], 0, function () {
                return 10 * this.millisecond()
            }), N(0, ["SSSSS", 5], 0, function () {
                return 100 * this.millisecond()
            }), N(0, ["SSSSSS", 6], 0, function () {
                return 1e3 * this.millisecond()
            }), N(0, ["SSSSSSS", 7], 0, function () {
                return 1e4 * this.millisecond()
            }), N(0, ["SSSSSSSS", 8], 0, function () {
                return 1e5 * this.millisecond()
            }), N(0, ["SSSSSSSSS", 9], 0, function () {
                return 1e6 * this.millisecond()
            }), A("millisecond", "ms"), F("millisecond", 16), B("S", Qn, Rn), B("SS", Qn, Un), B("SSS", Qn, Gn);
            var ii;
            for (ii = "SSSS"; ii.length <= 9; ii += "S") B(ii, ts);
            for (ii = "S"; ii.length <= 9; ii += "S") q(ii, Ua);
            var ri = ne("Milliseconds", !1);
            N("z", 0, 0, "zoneAbbr"), N("zz", 0, 0, "zoneName");
            var di = L.prototype;
            di.add = Xs, di.calendar = sa, di.clone = ia, di.diff = ma, di.endOf = Ta, di.format = pa, di.from = La, di.fromNow = ya, di.to = Ya, di.toNow = ga, di.get = re, di.invalidAt = Wa, di.isAfter = ra, di.isBefore = da, di.isBetween = oa, di.isSame = _a, di.isSameOrAfter = ua, di.isSameOrBefore = la, di.isValid = Pa, di.lang = ti, di.locale = va, di.localeData = ka, di.max = Bs, di.min = Gs, di.parsingFlags = Ca, di.set = de, di.startOf = Da, di.subtract = ei, di.toArray = xa, di.toObject = Ha, di.toDate = Sa, di.toISOString = Ma, di.inspect = fa, di.toJSON = ja, di.toString = ha, di.unix = ba, di.valueOf = wa, di.creationData = Oa, di.year = ys, di.isLeapYear = ae, di.weekYear = Ea, di.isoWeekYear = Ia, di.quarter = di.quarters = Ja, di.month = Me, di.daysInMonth = fe, di.week = di.weeks = xe, di.isoWeek = di.isoWeeks = He, di.weeksInYear = za, di.isoWeeksInYear = Fa, di.date = ai, di.day = di.days = Ie, di.weekday = Fe, di.isoWeekday = ze, di.dayOfYear = Ra, di.hour = di.hours = Ws, di.minute = di.minutes = ni, di.second = di.seconds = si, di.millisecond = di.milliseconds = ri, di.utcOffset = zt, di.utc = Nt, di.local = Jt, di.parseZone = Rt, di.hasAlignedHourOffset = Ut, di.isDST = Gt, di.isLocal = Vt, di.isUtcOffset = Zt, di.isUtc = Kt, di.isUTC = Kt, di.zoneAbbr = Ga, di.zoneName = Ba, di.dates = D("dates accessor is deprecated. Use date instead.", ai), di.months = D("months accessor is deprecated. Use month instead", Me), di.years = D("years accessor is deprecated. Use year instead", ys), di.zone = D("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", $t), di.isDSTShifted = D("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Bt);
            var oi = x.prototype;
            oi.calendar = H, oi.longDateFormat = j, oi.invalidDate = P, oi.ordinal = C, oi.preparse = Ka, oi.postformat = Ka, oi.relativeTime = W, oi.pastFuture = O, oi.set = b, oi.months = ue, oi.monthsShort = le, oi.monthsParse = ce, oi.monthsRegex = Le, oi.monthsShortRegex = pe, oi.week = we, oi.firstDayOfYear = Se, oi.firstDayOfWeek = be, oi.weekdays = Ce, oi.weekdaysMin = Oe, oi.weekdaysShort = We, oi.weekdaysParse = Ee, oi.weekdaysRegex = $e, oi.weekdaysShortRegex = Ne, oi.weekdaysMinRegex = Je, oi.isPM = Ze, oi.meridiem = Ke, et("en", {
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function (e) {
                    var t = e % 10;
                    return e + (1 === g(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                }
            }), t.lang = D("moment.lang is deprecated. Use moment.locale instead.", et), t.langData = D("moment.langData is deprecated. Use moment.localeData instead.", nt);
            var _i = Math.abs, ui = fn("ms"), li = fn("s"), mi = fn("m"), ci = fn("h"), hi = fn("d"), Mi = fn("w"),
                fi = fn("M"), pi = fn("y"), Li = yn("milliseconds"), yi = yn("seconds"), Yi = yn("minutes"),
                gi = yn("hours"), vi = yn("days"), ki = yn("months"), Di = yn("years"), Ti = Math.round,
                wi = {ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11}, bi = Math.abs, Si = Ct.prototype;
            return Si.isValid = jt, Si.abs = rn, Si.add = on, Si.subtract = _n, Si.as = hn, Si.asMilliseconds = ui, Si.asSeconds = li, Si.asMinutes = mi, Si.asHours = ci, Si.asDays = hi, Si.asWeeks = Mi, Si.asMonths = fi, Si.asYears = pi, Si.valueOf = Mn, Si._bubble = ln, Si.clone = pn, Si.get = Ln, Si.milliseconds = Li, Si.seconds = yi, Si.minutes = Yi, Si.hours = gi, Si.days = vi, Si.weeks = Yn, Si.months = ki, Si.years = Di, Si.humanize = Tn, Si.toISOString = bn, Si.toString = bn, Si.toJSON = bn, Si.locale = va, Si.localeData = ka, Si.toIsoString = D("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", bn), Si.lang = ti, N("X", 0, 0, "unix"), N("x", 0, 0, "valueOf"), B("x", as), B("X", is), q("X", function (e, t, a) {
                a._d = new Date(1e3 * parseFloat(e, 10))
            }), q("x", function (e, t, a) {
                a._d = new Date(g(e))
            }), t.version = "2.20.1", function (e) {
                Sn = e
            }(wt), t.fn = di, t.min = St, t.max = xt, t.now = Vs, t.utc = m, t.unix = Va, t.months = en, t.isDate = o, t.locale = et, t.invalid = f, t.duration = qt, t.isMoment = y, t.weekdays = an, t.parseZone = Za, t.localeData = nt, t.isDuration = Wt, t.monthsShort = tn, t.weekdaysMin = sn, t.defineLocale = tt, t.updateLocale = at, t.locales = st, t.weekdaysShort = nn, t.normalizeUnits = E, t.relativeTimeRounding = kn, t.relativeTimeThreshold = Dn, t.calendarFormat = na, t.prototype = di, t.HTML5_FMT = {
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
    }).call(t, a(337)(e))
}, function (e, t, a) {
    "use strict";
    var n = (a(142), a(287)), s = {
        bind: function (e, t, a) {
            var s = (a.context, t.value);
            switch (s.widgetType) {
                case"dragZone":
                    e.setAttribute("draggable", "true"), n.a.add(e, "dragstart", function (e) {
                        n.a.onDragStart(e, t, a)
                    }), n.a.add(e, "drag", function (e) {
                        n.a.onDrag(e, t, a)
                    }), n.a.add(e, "dragend", function (e) {
                        n.a.onDragEnd(e, t, a)
                    });
                    break;
                case"dropZone":
                    n.a.add(e, "dragenter", function (e) {
                        n.a.onDragEnter(e, t, a)
                    }), n.a.add(e, "dragover", function (e) {
                        n.a.onDragOver(e, t, a)
                    }), n.a.add(e, "dragleave", function (e) {
                        n.a.onDragLeave(e, t, a)
                    }), n.a.add(e, "drop", function (e) {
                        n.a.onDrop(e, t, a)
                    }), n.a.add(e, "click", function (e) {
                        n.a.onClick(e, t, a)
                    }), n.a.add(e, "mouseover", function (s) {
                        s.target === e && n.a.onMouseover(s, t, a)
                    });
                    break;
                case"toolbar":
                    "drag" == s.action && (e.setAttribute("draggable", "true"), n.a.add(e, "dragstart", function (e) {
                        n.a.onDragStart(e, t, a)
                    }), n.a.add(e, "drag", function (e) {
                        n.a.onDrag(e, t, a)
                    }), n.a.add(e, "dragend", function (e) {
                        n.a.onDragEnd(e, t, a)
                    }))
            }
        }, inserted: function (e, t, a) {
        }, update: function (e, t, a, n) {
        }, componentUpdated: function (e, t, a, n) {
        }, unbind: function (e, t, a) {
        }
    };
    t.a = s
}, function (e, t, a) {
    "use strict"
}, function (e, t, a) {
    "use strict";
    var n = {
        mounted: function () {
        }, methods: {
            $_mixinResetDefaultBlock: function (e) {
                this.$bus.$emit("onResetDefaultBlock", e)
            }, $_mixinCatchDragEnd: function () {
                this.$bus.$emit("onWidgetDragEnd")
            }, $_mixinCatchDragStart: function () {
                this.$bus.$emit("onWidgetDragStart", {dropAction: this.dropAction})
            }
        }
    };
    t.a = n
}, function (e, t, a) {
    "use strict";
    var n = ["ChoiceArticle"], s = {
        mounted: function () {
        }, methods: {
            $_mixinCatchDragEnter: function () {
            }, $_mixinCatchDrop: function (e) {
                var t = e.dragedVm.widget,
                    a = {id: t.id, key: t.widget_key, name: t.name, widgetConfig: t.config, data: t.default_content},
                    n = {currentIndex: e.currentIndex, newIndex: e.newIndex, widgetData: a};
                this.$bus.$emit("onWidgetDroped", n)
            }, $_mixinCatchDragLeave: function () {
                this.$bus.$emit("onWidgetDragLeave")
            }, $_mixinCatchClick: function (e) {
                if (e.stopPropagation(), "page--preview" === this.$root.displayMode) return !0;
                if ("edit" === this.$root.getDisplayMode() && $.inArray(this.widget.content.key, n) > -1 && e.preventDefault(), "edit" === this.$root.getDisplayMode() && -1 === $.inArray(this.widget.content.key, n)) {
                    var t = {index: this.index, content: this.widget.content};
                    e.preventDefault(), this.$bus.$emit("onContentEditorOpen", t)
                }
            }, $_mixinCatchMouseover: function () {
                this.selectedWidget !== this.index && this.$bus.$emit("onSelectWidget", this.index)
            }
        }
    };
    t.a = s
}, function (e, t, a) {
    e.exports = {default: a(294), __esModule: !0}
}, function (e, t, a) {
    var n = a(37), s = a(6)("toStringTag"), i = "Arguments" == n(function () {
        return arguments
    }()), r = function (e, t) {
        try {
            return e[t]
        } catch (e) {
        }
    };
    e.exports = function (e) {
        var t, a, d;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(a = r(t = Object(e), s)) ? a : i ? n(t) : "Object" == (d = n(t)) && "function" == typeof t.callee ? "Arguments" : d
    }
}, function (e, t, a) {
    var n = a(9), s = a(3), i = a(22).f;
    e.exports = function (e) {
        return function (t) {
            for (var a, r = s(t), d = n(r), o = d.length, _ = 0, u = []; o > _;) i.call(r, a = d[_++]) && u.push(e ? [a, r[a]] : r[a]);
            return u
        }
    }
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("af", {
            months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
            weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
            weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
            meridiemParse: /vm|nm/i,
            isPM: function (e) {
                return /^nm$/i.test(e)
            },
            meridiem: function (e, t, a) {
                return e < 12 ? a ? "vm" : "VM" : a ? "nm" : "NM"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Vandag om] LT",
                nextDay: "[Môre om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[Gister om] LT",
                lastWeek: "[Laas] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oor %s",
                past: "%s gelede",
                s: "'n paar sekondes",
                ss: "%d sekondes",
                m: "'n minuut",
                mm: "%d minute",
                h: "'n uur",
                hh: "%d ure",
                d: "'n dag",
                dd: "%d dae",
                M: "'n maand",
                MM: "%d maande",
                y: "'n jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("ar-dz", {
            months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {dow: 0, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("ar-kw", {
            months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {dow: 0, doy: 12}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        var t = {1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 0: "0"}, a = function (e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
            }, n = {
                s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            }, s = function (e) {
                return function (t, s, i, r) {
                    var d = a(t), o = n[e][a(t)];
                    return 2 === d && (o = o[s ? 0 : 1]), o.replace(/%d/i, t)
                }
            },
            i = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
        return e.defineLocale("ar-ly", {
            months: i,
            monthsShort: i,
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/‏M/‏YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function (e) {
                return "م" === e
            },
            meridiem: function (e, t, a) {
                return e < 12 ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم عند الساعة] LT",
                nextDay: "[غدًا عند الساعة] LT",
                nextWeek: "dddd [عند الساعة] LT",
                lastDay: "[أمس عند الساعة] LT",
                lastWeek: "dddd [عند الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "بعد %s",
                past: "منذ %s",
                s: s("s"),
                ss: s("s"),
                m: s("m"),
                mm: s("m"),
                h: s("h"),
                hh: s("h"),
                d: s("d"),
                dd: s("d"),
                M: s("M"),
                MM: s("M"),
                y: s("y"),
                yy: s("y")
            },
            preparse: function (e) {
                return e.replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                }).replace(/,/g, "،")
            },
            week: {dow: 6, doy: 12}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("ar-ma", {
            months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {dow: 6, doy: 12}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        var t = {1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠"},
            a = {"١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0"};
        return e.defineLocale("ar-sa", {
            months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function (e) {
                return "م" === e
            },
            meridiem: function (e, t, a) {
                return e < 12 ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            preparse: function (e) {
                return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
                    return a[e]
                }).replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                }).replace(/,/g, "،")
            },
            week: {dow: 0, doy: 6}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("ar-tn", {
            months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        var t = {1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠"},
            a = {"١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0"},
            n = function (e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
            }, s = {
                s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            }, i = function (e) {
                return function (t, a, i, r) {
                    var d = n(t), o = s[e][n(t)];
                    return 2 === d && (o = o[a ? 0 : 1]), o.replace(/%d/i, t)
                }
            },
            r = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
        return e.defineLocale("ar", {
            months: r,
            monthsShort: r,
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/‏M/‏YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function (e) {
                return "م" === e
            },
            meridiem: function (e, t, a) {
                return e < 12 ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم عند الساعة] LT",
                nextDay: "[غدًا عند الساعة] LT",
                nextWeek: "dddd [عند الساعة] LT",
                lastDay: "[أمس عند الساعة] LT",
                lastWeek: "dddd [عند الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "بعد %s",
                past: "منذ %s",
                s: i("s"),
                ss: i("s"),
                m: i("m"),
                mm: i("m"),
                h: i("h"),
                hh: i("h"),
                d: i("d"),
                dd: i("d"),
                M: i("M"),
                MM: i("M"),
                y: i("y"),
                yy: i("y")
            },
            preparse: function (e) {
                return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
                    return a[e]
                }).replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                }).replace(/,/g, "،")
            },
            week: {dow: 6, doy: 12}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        var t = {
            1: "-inci",
            5: "-inci",
            8: "-inci",
            70: "-inci",
            80: "-inci",
            2: "-nci",
            7: "-nci",
            20: "-nci",
            50: "-nci",
            3: "-üncü",
            4: "-üncü",
            100: "-üncü",
            6: "-ncı",
            9: "-uncu",
            10: "-uncu",
            30: "-uncu",
            60: "-ıncı",
            90: "-ıncı"
        };
        return e.defineLocale("az", {
            months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
            monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
            weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
            weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
            weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugün saat] LT",
                nextDay: "[sabah saat] LT",
                nextWeek: "[gələn həftə] dddd [saat] LT",
                lastDay: "[dünən] LT",
                lastWeek: "[keçən həftə] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s əvvəl",
                s: "birneçə saniyyə",
                ss: "%d saniyə",
                m: "bir dəqiqə",
                mm: "%d dəqiqə",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir ay",
                MM: "%d ay",
                y: "bir il",
                yy: "%d il"
            },
            meridiemParse: /gecə|səhər|gündüz|axşam/,
            isPM: function (e) {
                return /^(gündüz|axşam)$/.test(e)
            },
            meridiem: function (e, t, a) {
                return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
            ordinal: function (e) {
                if (0 === e) return e + "-ıncı";
                var a = e % 10, n = e % 100 - a, s = e >= 100 ? 100 : null;
                return e + (t[a] || t[n] || t[s])
            },
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";

        function t(e, t) {
            var a = e.split("_");
            return t % 10 == 1 && t % 100 != 11 ? a[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? a[1] : a[2]
        }

        function a(e, a, n) {
            var s = {
                ss: a ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                mm: a ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                hh: a ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                dd: "дзень_дні_дзён",
                MM: "месяц_месяцы_месяцаў",
                yy: "год_гады_гадоў"
            };
            return "m" === n ? a ? "хвіліна" : "хвіліну" : "h" === n ? a ? "гадзіна" : "гадзіну" : e + " " + t(s[n], +e)
        }

        return e.defineLocale("be", {
            months: {
                format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
                standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
            },
            monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
            weekdays: {
                format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
                standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
                isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/
            },
            weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., HH:mm",
                LLLL: "dddd, D MMMM YYYY г., HH:mm"
            },
            calendar: {
                sameDay: "[Сёння ў] LT",
                nextDay: "[Заўтра ў] LT",
                lastDay: "[Учора ў] LT",
                nextWeek: function () {
                    return "[У] dddd [ў] LT"
                },
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return "[У мінулую] dddd [ў] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[У мінулы] dddd [ў] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "праз %s",
                past: "%s таму",
                s: "некалькі секунд",
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: "дзень",
                dd: a,
                M: "месяц",
                MM: a,
                y: "год",
                yy: a
            },
            meridiemParse: /ночы|раніцы|дня|вечара/,
            isPM: function (e) {
                return /^(дня|вечара)$/.test(e)
            },
            meridiem: function (e, t, a) {
                return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"M":
                    case"d":
                    case"DDD":
                    case"w":
                    case"W":
                        return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-ы" : e + "-і";
                    case"D":
                        return e + "-га";
                    default:
                        return e
                }
            },
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("bg", {
            months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
            weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Днес в] LT",
                nextDay: "[Утре в] LT",
                nextWeek: "dddd [в] LT",
                lastDay: "[Вчера в] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[В изминалата] dddd [в] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[В изминалия] dddd [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "след %s",
                past: "преди %s",
                s: "няколко секунди",
                ss: "%d секунди",
                m: "минута",
                mm: "%d минути",
                h: "час",
                hh: "%d часа",
                d: "ден",
                dd: "%d дни",
                M: "месец",
                MM: "%d месеца",
                y: "година",
                yy: "%d години"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function (e) {
                var t = e % 10, a = e % 100;
                return 0 === e ? e + "-ев" : 0 === a ? e + "-ен" : a > 10 && a < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
            },
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("bm", {
            months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),
            monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),
            weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
            weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
            weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "MMMM [tile] D [san] YYYY",
                LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
                LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"
            },
            calendar: {
                sameDay: "[Bi lɛrɛ] LT",
                nextDay: "[Sini lɛrɛ] LT",
                nextWeek: "dddd [don lɛrɛ] LT",
                lastDay: "[Kunu lɛrɛ] LT",
                lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s kɔnɔ",
                past: "a bɛ %s bɔ",
                s: "sanga dama dama",
                ss: "sekondi %d",
                m: "miniti kelen",
                mm: "miniti %d",
                h: "lɛrɛ kelen",
                hh: "lɛrɛ %d",
                d: "tile kelen",
                dd: "tile %d",
                M: "kalo kelen",
                MM: "kalo %d",
                y: "san kelen",
                yy: "san %d"
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        var t = {1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯", 0: "০"},
            a = {"১": "1", "২": "2", "৩": "3", "৪": "4", "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9", "০": "0"};
        return e.defineLocale("bn", {
            months: "জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
            monthsShort: "জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
            weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
            weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
            weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),
            longDateFormat: {
                LT: "A h:mm সময়",
                LTS: "A h:mm:ss সময়",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm সময়",
                LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
            },
            calendar: {
                sameDay: "[আজ] LT",
                nextDay: "[আগামীকাল] LT",
                nextWeek: "dddd, LT",
                lastDay: "[গতকাল] LT",
                lastWeek: "[গত] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s পরে",
                past: "%s আগে",
                s: "কয়েক সেকেন্ড",
                ss: "%d সেকেন্ড",
                m: "এক মিনিট",
                mm: "%d মিনিট",
                h: "এক ঘন্টা",
                hh: "%d ঘন্টা",
                d: "এক দিন",
                dd: "%d দিন",
                M: "এক মাস",
                MM: "%d মাস",
                y: "এক বছর",
                yy: "%d বছর"
            },
            preparse: function (e) {
                return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function (e) {
                    return a[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "রাত" === t && e >= 4 || "দুপুর" === t && e < 5 || "বিকাল" === t ? e + 12 : e
            },
            meridiem: function (e, t, a) {
                return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত"
            },
            week: {dow: 0, doy: 6}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        var t = {1: "༡", 2: "༢", 3: "༣", 4: "༤", 5: "༥", 6: "༦", 7: "༧", 8: "༨", 9: "༩", 0: "༠"},
            a = {"༡": "1", "༢": "2", "༣": "3", "༤": "4", "༥": "5", "༦": "6", "༧": "7", "༨": "8", "༩": "9", "༠": "0"};
        return e.defineLocale("bo", {
            months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
            monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
            weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
            weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
            weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[དི་རིང] LT",
                nextDay: "[སང་ཉིན] LT",
                nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
                lastDay: "[ཁ་སང] LT",
                lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ལ་",
                past: "%s སྔན་ལ",
                s: "ལམ་སང",
                ss: "%d སྐར་ཆ།",
                m: "སྐར་མ་གཅིག",
                mm: "%d སྐར་མ",
                h: "ཆུ་ཚོད་གཅིག",
                hh: "%d ཆུ་ཚོད",
                d: "ཉིན་གཅིག",
                dd: "%d ཉིན་",
                M: "ཟླ་བ་གཅིག",
                MM: "%d ཟླ་བ",
                y: "ལོ་གཅིག",
                yy: "%d ལོ"
            },
            preparse: function (e) {
                return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (e) {
                    return a[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "མཚན་མོ" === t && e >= 4 || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t ? e + 12 : e
            },
            meridiem: function (e, t, a) {
                return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ"
            },
            week: {dow: 0, doy: 6}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";

        function t(e, t, a) {
            return e + " " + s({mm: "munutenn", MM: "miz", dd: "devezh"}[a], e)
        }

        function a(e) {
            switch (n(e)) {
                case 1:
                case 3:
                case 4:
                case 5:
                case 9:
                    return e + " bloaz";
                default:
                    return e + " vloaz"
            }
        }

        function n(e) {
            return e > 9 ? n(e % 10) : e
        }

        function s(e, t) {
            return 2 === t ? i(e) : e
        }

        function i(e) {
            var t = {m: "v", b: "v", d: "z"};
            return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1)
        }

        return e.defineLocale("br", {
            months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
            monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
            weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
            weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h[e]mm A",
                LTS: "h[e]mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [a viz] MMMM YYYY",
                LLL: "D [a viz] MMMM YYYY h[e]mm A",
                LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
            },
            calendar: {
                sameDay: "[Hiziv da] LT",
                nextDay: "[Warc'hoazh da] LT",
                nextWeek: "dddd [da] LT",
                lastDay: "[Dec'h da] LT",
                lastWeek: "dddd [paset da] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "a-benn %s",
                past: "%s 'zo",
                s: "un nebeud segondennoù",
                ss: "%d eilenn",
                m: "ur vunutenn",
                mm: t,
                h: "un eur",
                hh: "%d eur",
                d: "un devezh",
                dd: t,
                M: "ur miz",
                MM: t,
                y: "ur bloaz",
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
            ordinal: function (e) {
                return e + (1 === e ? "añ" : "vet")
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";

        function t(e, t, a) {
            var n = e + " ";
            switch (a) {
                case"ss":
                    return n += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
                case"m":
                    return t ? "jedna minuta" : "jedne minute";
                case"mm":
                    return n += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                case"h":
                    return t ? "jedan sat" : "jednog sata";
                case"hh":
                    return n += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                case"dd":
                    return n += 1 === e ? "dan" : "dana";
                case"MM":
                    return n += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                case"yy":
                    return n += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
            }
        }

        return e.defineLocale("bs", {
            months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                }, lastDay: "[jučer u] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[prošlu] dddd [u] LT";
                        case 6:
                            return "[prošle] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prošli] dddd [u] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "dan",
                dd: t,
                M: "mjesec",
                MM: t,
                y: "godinu",
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("ca", {
            months: {
                standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
                isFormat: /D[oD]?(\s)+MMMM/
            },
            monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
            weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
            weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [de] YYYY",
                ll: "D MMM YYYY",
                LLL: "D MMMM [de] YYYY [a les] H:mm",
                lll: "D MMM YYYY, H:mm",
                LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
                llll: "ddd D MMM YYYY, H:mm"
            },
            calendar: {
                sameDay: function () {
                    return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                }, nextDay: function () {
                    return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                }, nextWeek: function () {
                    return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                }, lastDay: function () {
                    return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                }, lastWeek: function () {
                    return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: "d'aquí %s",
                past: "fa %s",
                s: "uns segons",
                ss: "%d segons",
                m: "un minut",
                mm: "%d minuts",
                h: "una hora",
                hh: "%d hores",
                d: "un dia",
                dd: "%d dies",
                M: "un mes",
                MM: "%d mesos",
                y: "un any",
                yy: "%d anys"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
            ordinal: function (e, t) {
                var a = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
                return "w" !== t && "W" !== t || (a = "a"), e + a
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";

        function t(e) {
            return e > 1 && e < 5 && 1 != ~~(e / 10)
        }

        function a(e, a, n, s) {
            var i = e + " ";
            switch (n) {
                case"s":
                    return a || s ? "pár sekund" : "pár sekundami";
                case"ss":
                    return a || s ? i + (t(e) ? "sekundy" : "sekund") : i + "sekundami";
                case"m":
                    return a ? "minuta" : s ? "minutu" : "minutou";
                case"mm":
                    return a || s ? i + (t(e) ? "minuty" : "minut") : i + "minutami";
                case"h":
                    return a ? "hodina" : s ? "hodinu" : "hodinou";
                case"hh":
                    return a || s ? i + (t(e) ? "hodiny" : "hodin") : i + "hodinami";
                case"d":
                    return a || s ? "den" : "dnem";
                case"dd":
                    return a || s ? i + (t(e) ? "dny" : "dní") : i + "dny";
                case"M":
                    return a || s ? "měsíc" : "měsícem";
                case"MM":
                    return a || s ? i + (t(e) ? "měsíce" : "měsíců") : i + "měsíci";
                case"y":
                    return a || s ? "rok" : "rokem";
                case"yy":
                    return a || s ? i + (t(e) ? "roky" : "let") : i + "lety"
            }
        }

        var n = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
            s = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");
        return e.defineLocale("cs", {
            months: n,
            monthsShort: s,
            monthsParse: function (e, t) {
                var a, n = [];
                for (a = 0; a < 12; a++) n[a] = new RegExp("^" + e[a] + "$|^" + t[a] + "$", "i");
                return n
            }(n, s),
            shortMonthsParse: function (e) {
                var t, a = [];
                for (t = 0; t < 12; t++) a[t] = new RegExp("^" + e[t] + "$", "i");
                return a
            }(s),
            longMonthsParse: function (e) {
                var t, a = [];
                for (t = 0; t < 12; t++) a[t] = new RegExp("^" + e[t] + "$", "i");
                return a
            }(n),
            weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
            weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
            weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm",
                l: "D. M. YYYY"
            },
            calendar: {
                sameDay: "[dnes v] LT", nextDay: "[zítra v] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[v neděli v] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [v] LT";
                        case 3:
                            return "[ve středu v] LT";
                        case 4:
                            return "[ve čtvrtek v] LT";
                        case 5:
                            return "[v pátek v] LT";
                        case 6:
                            return "[v sobotu v] LT"
                    }
                }, lastDay: "[včera v] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[minulou neděli v] LT";
                        case 1:
                        case 2:
                            return "[minulé] dddd [v] LT";
                        case 3:
                            return "[minulou středu v] LT";
                        case 4:
                        case 5:
                            return "[minulý] dddd [v] LT";
                        case 6:
                            return "[minulou sobotu v] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "před %s",
                s: a,
                ss: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: a,
                dd: a,
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("cv", {
            months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
            monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
            weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
            weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
            weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
                LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
                LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
            },
            calendar: {
                sameDay: "[Паян] LT [сехетре]",
                nextDay: "[Ыран] LT [сехетре]",
                lastDay: "[Ӗнер] LT [сехетре]",
                nextWeek: "[Ҫитес] dddd LT [сехетре]",
                lastWeek: "[Иртнӗ] dddd LT [сехетре]",
                sameElse: "L"
            },
            relativeTime: {
                future: function (e) {
                    return e + (/сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран")
                },
                past: "%s каялла",
                s: "пӗр-ик ҫеккунт",
                ss: "%d ҫеккунт",
                m: "пӗр минут",
                mm: "%d минут",
                h: "пӗр сехет",
                hh: "%d сехет",
                d: "пӗр кун",
                dd: "%d кун",
                M: "пӗр уйӑх",
                MM: "%d уйӑх",
                y: "пӗр ҫул",
                yy: "%d ҫул"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
            ordinal: "%d-мӗш",
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("cy", {
            months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
            monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
            weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
            weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Heddiw am] LT",
                nextDay: "[Yfory am] LT",
                nextWeek: "dddd [am] LT",
                lastDay: "[Ddoe am] LT",
                lastWeek: "dddd [diwethaf am] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "mewn %s",
                past: "%s yn ôl",
                s: "ychydig eiliadau",
                ss: "%d eiliad",
                m: "munud",
                mm: "%d munud",
                h: "awr",
                hh: "%d awr",
                d: "diwrnod",
                dd: "%d diwrnod",
                M: "mis",
                MM: "%d mis",
                y: "blwyddyn",
                yy: "%d flynedd"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
            ordinal: function (e) {
                var t = e, a = "",
                    n = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];
                return t > 20 ? a = 40 === t || 50 === t || 60 === t || 80 === t || 100 === t ? "fed" : "ain" : t > 0 && (a = n[t]), e + a
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("da", {
            months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "på dddd [kl.] LT",
                lastDay: "[i går kl.] LT",
                lastWeek: "[i] dddd[s kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "få sekunder",
                ss: "%d sekunder",
                m: "et minut",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dage",
                M: "en måned",
                MM: "%d måneder",
                y: "et år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";

        function t(e, t, a, n) {
            var s = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? s[a][0] : s[a][1]
        }

        return e.defineLocale("de-at", {
            months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";

        function t(e, t, a, n) {
            var s = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? s[a][0] : s[a][1]
        }

        return e.defineLocale("de-ch", {
            months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";

        function t(e, t, a, n) {
            var s = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? s[a][0] : s[a][1]
        }

        return e.defineLocale("de", {
            months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
            a = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
        return e.defineLocale("dv", {
            months: t,
            monthsShort: t,
            weekdays: a,
            weekdaysShort: a,
            weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/M/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /މކ|މފ/,
            isPM: function (e) {
                return "މފ" === e
            },
            meridiem: function (e, t, a) {
                return e < 12 ? "މކ" : "މފ"
            },
            calendar: {
                sameDay: "[މިއަދު] LT",
                nextDay: "[މާދަމާ] LT",
                nextWeek: "dddd LT",
                lastDay: "[އިއްޔެ] LT",
                lastWeek: "[ފާއިތުވި] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ތެރޭގައި %s",
                past: "ކުރިން %s",
                s: "ސިކުންތުކޮޅެއް",
                ss: "d% ސިކުންތު",
                m: "މިނިޓެއް",
                mm: "މިނިޓު %d",
                h: "ގަޑިއިރެއް",
                hh: "ގަޑިއިރު %d",
                d: "ދުވަހެއް",
                dd: "ދުވަސް %d",
                M: "މަހެއް",
                MM: "މަސް %d",
                y: "އަހަރެއް",
                yy: "އަހަރު %d"
            },
            preparse: function (e) {
                return e.replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/,/g, "،")
            },
            week: {dow: 7, doy: 12}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";

        function t(e) {
            return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
        }

        return e.defineLocale("el", {
            monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
            monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
            months: function (e, t) {
                return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
            },
            monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
            weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
            weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
            weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
            meridiem: function (e, t, a) {
                return e > 11 ? a ? "μμ" : "ΜΜ" : a ? "πμ" : "ΠΜ"
            },
            isPM: function (e) {
                return "μ" === (e + "").toLowerCase()[0]
            },
            meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendarEl: {
                sameDay: "[Σήμερα {}] LT",
                nextDay: "[Αύριο {}] LT",
                nextWeek: "dddd [{}] LT",
                lastDay: "[Χθες {}] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 6:
                            return "[το προηγούμενο] dddd [{}] LT";
                        default:
                            return "[την προηγούμενη] dddd [{}] LT"
                    }
                },
                sameElse: "L"
            },
            calendar: function (e, a) {
                var n = this._calendarEl[e], s = a && a.hours();
                return t(n) && (n = n.apply(a)), n.replace("{}", s % 12 == 1 ? "στη" : "στις")
            },
            relativeTime: {
                future: "σε %s",
                past: "%s πριν",
                s: "λίγα δευτερόλεπτα",
                ss: "%d δευτερόλεπτα",
                m: "ένα λεπτό",
                mm: "%d λεπτά",
                h: "μία ώρα",
                hh: "%d ώρες",
                d: "μία μέρα",
                dd: "%d μέρες",
                M: "ένας μήνας",
                MM: "%d μήνες",
                y: "ένας χρόνος",
                yy: "%d χρόνια"
            },
            dayOfMonthOrdinalParse: /\d{1,2}η/,
            ordinal: "%dη",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("en-au", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
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
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("en-ca", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "YYYY-MM-DD",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
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
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            }
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("en-gb", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
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
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("en-ie", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
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
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("en-nz", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
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
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("eo", {
            months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
            weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
            weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
            weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D[-a de] MMMM, YYYY",
                LLL: "D[-a de] MMMM, YYYY HH:mm",
                LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm"
            },
            meridiemParse: /[ap]\.t\.m/i,
            isPM: function (e) {
                return "p" === e.charAt(0).toLowerCase()
            },
            meridiem: function (e, t, a) {
                return e > 11 ? a ? "p.t.m." : "P.T.M." : a ? "a.t.m." : "A.T.M."
            },
            calendar: {
                sameDay: "[Hodiaŭ je] LT",
                nextDay: "[Morgaŭ je] LT",
                nextWeek: "dddd [je] LT",
                lastDay: "[Hieraŭ je] LT",
                lastWeek: "[pasinta] dddd [je] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "post %s",
                past: "antaŭ %s",
                s: "sekundoj",
                ss: "%d sekundoj",
                m: "minuto",
                mm: "%d minutoj",
                h: "horo",
                hh: "%d horoj",
                d: "tago",
                dd: "%d tagoj",
                M: "monato",
                MM: "%d monatoj",
                y: "jaro",
                yy: "%d jaroj"
            },
            dayOfMonthOrdinalParse: /\d{1,2}a/,
            ordinal: "%da",
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            a = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            n = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            s = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        return e.defineLocale("es-do", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function (e, n) {
                return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
            },
            monthsRegex: s,
            monthsShortRegex: s,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY h:mm A",
                LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function () {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, nextDay: function () {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, nextWeek: function () {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, lastDay: function () {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, lastWeek: function () {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            a = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
        return e.defineLocale("es-us", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function (e, n) {
                return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
            },
            monthsParseExact: !0,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "MM/DD/YYYY",
                LL: "MMMM [de] D [de] YYYY",
                LLL: "MMMM [de] D [de] YYYY h:mm A",
                LLLL: "dddd, MMMM [de] D [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function () {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, nextDay: function () {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, nextWeek: function () {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, lastDay: function () {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, lastWeek: function () {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 0, doy: 6}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            a = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            n = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            s = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        return e.defineLocale("es", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function (e, n) {
                return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
            },
            monthsRegex: s,
            monthsShortRegex: s,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function () {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, nextDay: function () {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, nextWeek: function () {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, lastDay: function () {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, lastWeek: function () {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";

        function t(e, t, a, n) {
            var s = {
                s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
                ss: [e + "sekundi", e + "sekundit"],
                m: ["ühe minuti", "üks minut"],
                mm: [e + " minuti", e + " minutit"],
                h: ["ühe tunni", "tund aega", "üks tund"],
                hh: [e + " tunni", e + " tundi"],
                d: ["ühe päeva", "üks päev"],
                M: ["kuu aja", "kuu aega", "üks kuu"],
                MM: [e + " kuu", e + " kuud"],
                y: ["ühe aasta", "aasta", "üks aasta"],
                yy: [e + " aasta", e + " aastat"]
            };
            return t ? s[a][2] ? s[a][2] : s[a][1] : n ? s[a][0] : s[a][1]
        }

        return e.defineLocale("et", {
            months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
            monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
            weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
            weekdaysShort: "P_E_T_K_N_R_L".split("_"),
            weekdaysMin: "P_E_T_K_N_R_L".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Täna,] LT",
                nextDay: "[Homme,] LT",
                nextWeek: "[Järgmine] dddd LT",
                lastDay: "[Eile,] LT",
                lastWeek: "[Eelmine] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s pärast",
                past: "%s tagasi",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: "%d päeva",
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("eu", {
            months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
            monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
            monthsParseExact: !0,
            weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
            weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
            weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY[ko] MMMM[ren] D[a]",
                LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                l: "YYYY-M-D",
                ll: "YYYY[ko] MMM D[a]",
                lll: "YYYY[ko] MMM D[a] HH:mm",
                llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
            },
            calendar: {
                sameDay: "[gaur] LT[etan]",
                nextDay: "[bihar] LT[etan]",
                nextWeek: "dddd LT[etan]",
                lastDay: "[atzo] LT[etan]",
                lastWeek: "[aurreko] dddd LT[etan]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s barru",
                past: "duela %s",
                s: "segundo batzuk",
                ss: "%d segundo",
                m: "minutu bat",
                mm: "%d minutu",
                h: "ordu bat",
                hh: "%d ordu",
                d: "egun bat",
                dd: "%d egun",
                M: "hilabete bat",
                MM: "%d hilabete",
                y: "urte bat",
                yy: "%d urte"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        var t = {1: "۱", 2: "۲", 3: "۳", 4: "۴", 5: "۵", 6: "۶", 7: "۷", 8: "۸", 9: "۹", 0: "۰"},
            a = {"۱": "1", "۲": "2", "۳": "3", "۴": "4", "۵": "5", "۶": "6", "۷": "7", "۸": "8", "۹": "9", "۰": "0"};
        return e.defineLocale("fa", {
            months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /قبل از ظهر|بعد از ظهر/,
            isPM: function (e) {
                return /بعد از ظهر/.test(e)
            },
            meridiem: function (e, t, a) {
                return e < 12 ? "قبل از ظهر" : "بعد از ظهر"
            },
            calendar: {
                sameDay: "[امروز ساعت] LT",
                nextDay: "[فردا ساعت] LT",
                nextWeek: "dddd [ساعت] LT",
                lastDay: "[دیروز ساعت] LT",
                lastWeek: "dddd [پیش] [ساعت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "در %s",
                past: "%s پیش",
                s: "چند ثانیه",
                ss: "ثانیه d%",
                m: "یک دقیقه",
                mm: "%d دقیقه",
                h: "یک ساعت",
                hh: "%d ساعت",
                d: "یک روز",
                dd: "%d روز",
                M: "یک ماه",
                MM: "%d ماه",
                y: "یک سال",
                yy: "%d سال"
            },
            preparse: function (e) {
                return e.replace(/[۰-۹]/g, function (e) {
                    return a[e]
                }).replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                }).replace(/,/g, "،")
            },
            dayOfMonthOrdinalParse: /\d{1,2}م/,
            ordinal: "%dم",
            week: {dow: 6, doy: 12}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";

        function t(e, t, n, s) {
            var i = "";
            switch (n) {
                case"s":
                    return s ? "muutaman sekunnin" : "muutama sekunti";
                case"ss":
                    return s ? "sekunnin" : "sekuntia";
                case"m":
                    return s ? "minuutin" : "minuutti";
                case"mm":
                    i = s ? "minuutin" : "minuuttia";
                    break;
                case"h":
                    return s ? "tunnin" : "tunti";
                case"hh":
                    i = s ? "tunnin" : "tuntia";
                    break;
                case"d":
                    return s ? "päivän" : "päivä";
                case"dd":
                    i = s ? "päivän" : "päivää";
                    break;
                case"M":
                    return s ? "kuukauden" : "kuukausi";
                case"MM":
                    i = s ? "kuukauden" : "kuukautta";
                    break;
                case"y":
                    return s ? "vuoden" : "vuosi";
                case"yy":
                    i = s ? "vuoden" : "vuotta"
            }
            return i = a(e, s) + " " + i
        }

        function a(e, t) {
            return e < 10 ? t ? s[e] : n[e] : e
        }

        var n = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
            s = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", n[7], n[8], n[9]];
        return e.defineLocale("fi", {
            months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
            monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
            weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
            weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
            weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "Do MMMM[ta] YYYY",
                LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                l: "D.M.YYYY",
                ll: "Do MMM YYYY",
                lll: "Do MMM YYYY, [klo] HH.mm",
                llll: "ddd, Do MMM YYYY, [klo] HH.mm"
            },
            calendar: {
                sameDay: "[tänään] [klo] LT",
                nextDay: "[huomenna] [klo] LT",
                nextWeek: "dddd [klo] LT",
                lastDay: "[eilen] [klo] LT",
                lastWeek: "[viime] dddd[na] [klo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s päästä",
                past: "%s sitten",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("fo", {
            months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
            weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
            weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D. MMMM, YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Í dag kl.] LT",
                nextDay: "[Í morgin kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[Í gjár kl.] LT",
                lastWeek: "[síðstu] dddd [kl] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "um %s",
                past: "%s síðani",
                s: "fá sekund",
                ss: "%d sekundir",
                m: "ein minutt",
                mm: "%d minuttir",
                h: "ein tími",
                hh: "%d tímar",
                d: "ein dagur",
                dd: "%d dagar",
                M: "ein mánaði",
                MM: "%d mánaðir",
                y: "eitt ár",
                yy: "%d ár"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("fr-ca", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function (e, t) {
                switch (t) {
                    default:
                    case"M":
                    case"Q":
                    case"D":
                    case"DDD":
                    case"d":
                        return e + (1 === e ? "er" : "e");
                    case"w":
                    case"W":
                        return e + (1 === e ? "re" : "e")
                }
            }
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("fr-ch", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function (e, t) {
                switch (t) {
                    default:
                    case"M":
                    case"Q":
                    case"D":
                    case"DDD":
                    case"d":
                        return e + (1 === e ? "er" : "e");
                    case"w":
                    case"W":
                        return e + (1 === e ? "re" : "e")
                }
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("fr", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"D":
                        return e + (1 === e ? "er" : "");
                    default:
                    case"M":
                    case"Q":
                    case"DDD":
                    case"d":
                        return e + (1 === e ? "er" : "e");
                    case"w":
                    case"W":
                        return e + (1 === e ? "re" : "e")
                }
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
            a = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
        return e.defineLocale("fy", {
            months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
            monthsShort: function (e, n) {
                return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
            },
            monthsParseExact: !0,
            weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
            weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
            weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[hjoed om] LT",
                nextDay: "[moarn om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[juster om] LT",
                lastWeek: "[ôfrûne] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oer %s",
                past: "%s lyn",
                s: "in pear sekonden",
                ss: "%d sekonden",
                m: "ien minút",
                mm: "%d minuten",
                h: "ien oere",
                hh: "%d oeren",
                d: "ien dei",
                dd: "%d dagen",
                M: "ien moanne",
                MM: "%d moannen",
                y: "ien jier",
                yy: "%d jierren"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        var t = ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"],
            a = ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
            n = ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
            s = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"], i = ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"];
        return e.defineLocale("gd", {
            months: t,
            monthsShort: a,
            monthsParseExact: !0,
            weekdays: n,
            weekdaysShort: s,
            weekdaysMin: i,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[An-diugh aig] LT",
                nextDay: "[A-màireach aig] LT",
                nextWeek: "dddd [aig] LT",
                lastDay: "[An-dè aig] LT",
                lastWeek: "dddd [seo chaidh] [aig] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ann an %s",
                past: "bho chionn %s",
                s: "beagan diogan",
                ss: "%d diogan",
                m: "mionaid",
                mm: "%d mionaidean",
                h: "uair",
                hh: "%d uairean",
                d: "latha",
                dd: "%d latha",
                M: "mìos",
                MM: "%d mìosan",
                y: "bliadhna",
                yy: "%d bliadhna"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function (e) {
                return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("gl", {
            months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
            monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function () {
                    return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                }, nextDay: function () {
                    return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                }, nextWeek: function () {
                    return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
                }, lastDay: function () {
                    return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
                }, lastWeek: function () {
                    return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: function (e) {
                    return 0 === e.indexOf("un") ? "n" + e : "en " + e
                },
                past: "hai %s",
                s: "uns segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "unha hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";

        function t(e, t, a, n) {
            var s = {
                s: ["thodde secondanim", "thodde second"],
                ss: [e + " secondanim", e + " second"],
                m: ["eka mintan", "ek minute"],
                mm: [e + " mintanim", e + " mintam"],
                h: ["eka horan", "ek hor"],
                hh: [e + " horanim", e + " hor"],
                d: ["eka disan", "ek dis"],
                dd: [e + " disanim", e + " dis"],
                M: ["eka mhoinean", "ek mhoino"],
                MM: [e + " mhoineanim", e + " mhoine"],
                y: ["eka vorsan", "ek voros"],
                yy: [e + " vorsanim", e + " vorsam"]
            };
            return t ? s[a][0] : s[a][1]
        }

        return e.defineLocale("gom-latn", {
            months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
            monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),
            weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
            weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "A h:mm [vazta]",
                LTS: "A h:mm:ss [vazta]",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY A h:mm [vazta]",
                LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",
                llll: "ddd, D MMM YYYY, A h:mm [vazta]"
            },
            calendar: {
                sameDay: "[Aiz] LT",
                nextDay: "[Faleam] LT",
                nextWeek: "[Ieta to] dddd[,] LT",
                lastDay: "[Kal] LT",
                lastWeek: "[Fatlo] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s",
                past: "%s adim",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"D":
                        return e + "er";
                    default:
                    case"M":
                    case"Q":
                    case"DDD":
                    case"d":
                    case"w":
                    case"W":
                        return e
                }
            },
            week: {dow: 1, doy: 4},
            meridiemParse: /rati|sokalli|donparam|sanje/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "rati" === t ? e < 4 ? e : e + 12 : "sokalli" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, a) {
                return e < 4 ? "rati" : e < 12 ? "sokalli" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati"
            }
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        var t = {1: "૧", 2: "૨", 3: "૩", 4: "૪", 5: "૫", 6: "૬", 7: "૭", 8: "૮", 9: "૯", 0: "૦"},
            a = {"૧": "1", "૨": "2", "૩": "3", "૪": "4", "૫": "5", "૬": "6", "૭": "7", "૮": "8", "૯": "9", "૦": "0"};
        return e.defineLocale("gu", {
            months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),
            monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),
            monthsParseExact: !0,
            weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),
            weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
            weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
            longDateFormat: {
                LT: "A h:mm વાગ્યે",
                LTS: "A h:mm:ss વાગ્યે",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm વાગ્યે",
                LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે"
            },
            calendar: {
                sameDay: "[આજ] LT",
                nextDay: "[કાલે] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ગઇકાલે] LT",
                lastWeek: "[પાછલા] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s મા",
                past: "%s પેહલા",
                s: "અમુક પળો",
                ss: "%d સેકંડ",
                m: "એક મિનિટ",
                mm: "%d મિનિટ",
                h: "એક કલાક",
                hh: "%d કલાક",
                d: "એક દિવસ",
                dd: "%d દિવસ",
                M: "એક મહિનો",
                MM: "%d મહિનો",
                y: "એક વર્ષ",
                yy: "%d વર્ષ"
            },
            preparse: function (e) {
                return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function (e) {
                    return a[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "રાત" === t ? e < 4 ? e : e + 12 : "સવાર" === t ? e : "બપોર" === t ? e >= 10 ? e : e + 12 : "સાંજ" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, a) {
                return e < 4 ? "રાત" : e < 10 ? "સવાર" : e < 17 ? "બપોર" : e < 20 ? "સાંજ" : "રાત"
            },
            week: {dow: 0, doy: 6}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("he", {
            months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
            monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
            weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
            weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
            weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [ב]MMMM YYYY",
                LLL: "D [ב]MMMM YYYY HH:mm",
                LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
                l: "D/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[היום ב־]LT",
                nextDay: "[מחר ב־]LT",
                nextWeek: "dddd [בשעה] LT",
                lastDay: "[אתמול ב־]LT",
                lastWeek: "[ביום] dddd [האחרון בשעה] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "בעוד %s",
                past: "לפני %s",
                s: "מספר שניות",
                ss: "%d שניות",
                m: "דקה",
                mm: "%d דקות",
                h: "שעה",
                hh: function (e) {
                    return 2 === e ? "שעתיים" : e + " שעות"
                },
                d: "יום",
                dd: function (e) {
                    return 2 === e ? "יומיים" : e + " ימים"
                },
                M: "חודש",
                MM: function (e) {
                    return 2 === e ? "חודשיים" : e + " חודשים"
                },
                y: "שנה",
                yy: function (e) {
                    return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים"
                }
            },
            meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
            isPM: function (e) {
                return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)
            },
            meridiem: function (e, t, a) {
                return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? a ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? a ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
            }
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        var t = {1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०"},
            a = {"१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0"};
        return e.defineLocale("hi", {
            months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
            monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
            monthsParseExact: !0,
            weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
                LT: "A h:mm बजे",
                LTS: "A h:mm:ss बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm बजे",
                LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[कल] LT",
                nextWeek: "dddd, LT",
                lastDay: "[कल] LT",
                lastWeek: "[पिछले] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s में",
                past: "%s पहले",
                s: "कुछ ही क्षण",
                ss: "%d सेकंड",
                m: "एक मिनट",
                mm: "%d मिनट",
                h: "एक घंटा",
                hh: "%d घंटे",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महीने",
                MM: "%d महीने",
                y: "एक वर्ष",
                yy: "%d वर्ष"
            },
            preparse: function (e) {
                return e.replace(/[१२३४५६७८९०]/g, function (e) {
                    return a[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            meridiemParse: /रात|सुबह|दोपहर|शाम/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "रात" === t ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, a) {
                return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात"
            },
            week: {dow: 0, doy: 6}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";

        function t(e, t, a) {
            var n = e + " ";
            switch (a) {
                case"ss":
                    return n += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
                case"m":
                    return t ? "jedna minuta" : "jedne minute";
                case"mm":
                    return n += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                case"h":
                    return t ? "jedan sat" : "jednog sata";
                case"hh":
                    return n += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                case"dd":
                    return n += 1 === e ? "dan" : "dana";
                case"MM":
                    return n += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                case"yy":
                    return n += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
            }
        }

        return e.defineLocale("hr", {
            months: {
                format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
            },
            monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                }, lastDay: "[jučer u] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[prošlu] dddd [u] LT";
                        case 6:
                            return "[prošle] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prošli] dddd [u] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "dan",
                dd: t,
                M: "mjesec",
                MM: t,
                y: "godinu",
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";

        function t(e, t, a, n) {
            var s = e;
            switch (a) {
                case"s":
                    return n || t ? "néhány másodperc" : "néhány másodperce";
                case"ss":
                    return s + (n || t) ? " másodperc" : " másodperce";
                case"m":
                    return "egy" + (n || t ? " perc" : " perce");
                case"mm":
                    return s + (n || t ? " perc" : " perce");
                case"h":
                    return "egy" + (n || t ? " óra" : " órája");
                case"hh":
                    return s + (n || t ? " óra" : " órája");
                case"d":
                    return "egy" + (n || t ? " nap" : " napja");
                case"dd":
                    return s + (n || t ? " nap" : " napja");
                case"M":
                    return "egy" + (n || t ? " hónap" : " hónapja");
                case"MM":
                    return s + (n || t ? " hónap" : " hónapja");
                case"y":
                    return "egy" + (n || t ? " év" : " éve");
                case"yy":
                    return s + (n || t ? " év" : " éve")
            }
            return ""
        }

        function a(e) {
            return (e ? "" : "[múlt] ") + "[" + n[this.day()] + "] LT[-kor]"
        }

        var n = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
        return e.defineLocale("hu", {
            months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
            monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
            weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
            weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
            weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYY. MMMM D.",
                LLL: "YYYY. MMMM D. H:mm",
                LLLL: "YYYY. MMMM D., dddd H:mm"
            },
            meridiemParse: /de|du/i,
            isPM: function (e) {
                return "u" === e.charAt(1).toLowerCase()
            },
            meridiem: function (e, t, a) {
                return e < 12 ? !0 === a ? "de" : "DE" : !0 === a ? "du" : "DU"
            },
            calendar: {
                sameDay: "[ma] LT[-kor]", nextDay: "[holnap] LT[-kor]", nextWeek: function () {
                    return a.call(this, !0)
                }, lastDay: "[tegnap] LT[-kor]", lastWeek: function () {
                    return a.call(this, !1)
                }, sameElse: "L"
            },
            relativeTime: {
                future: "%s múlva",
                past: "%s",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("hy-am", {
            months: {
                format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
                standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
            },
            monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
            weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
            weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY թ.",
                LLL: "D MMMM YYYY թ., HH:mm",
                LLLL: "dddd, D MMMM YYYY թ., HH:mm"
            },
            calendar: {
                sameDay: "[այսօր] LT", nextDay: "[վաղը] LT", lastDay: "[երեկ] LT", nextWeek: function () {
                    return "dddd [օրը ժամը] LT"
                }, lastWeek: function () {
                    return "[անցած] dddd [օրը ժամը] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: "%s հետո",
                past: "%s առաջ",
                s: "մի քանի վայրկյան",
                ss: "%d վայրկյան",
                m: "րոպե",
                mm: "%d րոպե",
                h: "ժամ",
                hh: "%d ժամ",
                d: "օր",
                dd: "%d օր",
                M: "ամիս",
                MM: "%d ամիս",
                y: "տարի",
                yy: "%d տարի"
            },
            meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
            isPM: function (e) {
                return /^(ցերեկվա|երեկոյան)$/.test(e)
            },
            meridiem: function (e) {
                return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան"
            },
            dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"DDD":
                    case"w":
                    case"W":
                    case"DDDo":
                        return 1 === e ? e + "-ին" : e + "-րդ";
                    default:
                        return e
                }
            },
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("id", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|siang|sore|malam/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, a) {
                return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Besok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kemarin pukul] LT",
                lastWeek: "dddd [lalu pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lalu",
                s: "beberapa detik",
                ss: "%d detik",
                m: "semenit",
                mm: "%d menit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";

        function t(e) {
            return e % 100 == 11 || e % 10 != 1
        }

        function a(e, a, n, s) {
            var i = e + " ";
            switch (n) {
                case"s":
                    return a || s ? "nokkrar sekúndur" : "nokkrum sekúndum";
                case"ss":
                    return t(e) ? i + (a || s ? "sekúndur" : "sekúndum") : i + "sekúnda";
                case"m":
                    return a ? "mínúta" : "mínútu";
                case"mm":
                    return t(e) ? i + (a || s ? "mínútur" : "mínútum") : a ? i + "mínúta" : i + "mínútu";
                case"hh":
                    return t(e) ? i + (a || s ? "klukkustundir" : "klukkustundum") : i + "klukkustund";
                case"d":
                    return a ? "dagur" : s ? "dag" : "degi";
                case"dd":
                    return t(e) ? a ? i + "dagar" : i + (s ? "daga" : "dögum") : a ? i + "dagur" : i + (s ? "dag" : "degi");
                case"M":
                    return a ? "mánuður" : s ? "mánuð" : "mánuði";
                case"MM":
                    return t(e) ? a ? i + "mánuðir" : i + (s ? "mánuði" : "mánuðum") : a ? i + "mánuður" : i + (s ? "mánuð" : "mánuði");
                case"y":
                    return a || s ? "ár" : "ári";
                case"yy":
                    return t(e) ? i + (a || s ? "ár" : "árum") : i + (a || s ? "ár" : "ári")
            }
        }

        return e.defineLocale("is", {
            months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
            weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
            weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
            weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
            },
            calendar: {
                sameDay: "[í dag kl.] LT",
                nextDay: "[á morgun kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[í gær kl.] LT",
                lastWeek: "[síðasta] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "eftir %s",
                past: "fyrir %s síðan",
                s: a,
                ss: a,
                m: a,
                mm: a,
                h: "klukkustund",
                hh: a,
                d: a,
                dd: a,
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("it", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[la scorsa] dddd [alle] LT";
                        default:
                            return "[lo scorso] dddd [alle] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function (e) {
                    return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                },
                past: "%s fa",
                s: "alcuni secondi",
                ss: "%d secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("ja", {
            months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
            weekdaysShort: "日_月_火_水_木_金_土".split("_"),
            weekdaysMin: "日_月_火_水_木_金_土".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日 HH:mm dddd",
                l: "YYYY/MM/DD",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日 HH:mm dddd"
            },
            meridiemParse: /午前|午後/i,
            isPM: function (e) {
                return "午後" === e
            },
            meridiem: function (e, t, a) {
                return e < 12 ? "午前" : "午後"
            },
            calendar: {
                sameDay: "[今日] LT",
                nextDay: "[明日] LT",
                nextWeek: "[来週]dddd LT",
                lastDay: "[昨日] LT",
                lastWeek: "[前週]dddd LT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}日/,
            ordinal: function (e, t) {
                switch (t) {
                    case"d":
                    case"D":
                    case"DDD":
                        return e + "日";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s後",
                past: "%s前",
                s: "数秒",
                ss: "%d秒",
                m: "1分",
                mm: "%d分",
                h: "1時間",
                hh: "%d時間",
                d: "1日",
                dd: "%d日",
                M: "1ヶ月",
                MM: "%dヶ月",
                y: "1年",
                yy: "%d年"
            }
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("jv", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
            weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /enjing|siyang|sonten|ndalu/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, a) {
                return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
            },
            calendar: {
                sameDay: "[Dinten puniko pukul] LT",
                nextDay: "[Mbenjang pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kala wingi pukul] LT",
                lastWeek: "dddd [kepengker pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "wonten ing %s",
                past: "%s ingkang kepengker",
                s: "sawetawis detik",
                ss: "%d detik",
                m: "setunggal menit",
                mm: "%d menit",
                h: "setunggal jam",
                hh: "%d jam",
                d: "sedinten",
                dd: "%d dinten",
                M: "sewulan",
                MM: "%d wulan",
                y: "setaun",
                yy: "%d taun"
            },
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("ka", {
            months: {
                standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
                format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
            },
            monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
            weekdays: {
                standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
                format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
                isFormat: /(წინა|შემდეგ)/
            },
            weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
            weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[დღეს] LT[-ზე]",
                nextDay: "[ხვალ] LT[-ზე]",
                lastDay: "[გუშინ] LT[-ზე]",
                nextWeek: "[შემდეგ] dddd LT[-ზე]",
                lastWeek: "[წინა] dddd LT-ზე",
                sameElse: "L"
            },
            relativeTime: {
                future: function (e) {
                    return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში"
                },
                past: function (e) {
                    return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის უკან") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის უკან") : void 0
                },
                s: "რამდენიმე წამი",
                ss: "%d წამი",
                m: "წუთი",
                mm: "%d წუთი",
                h: "საათი",
                hh: "%d საათი",
                d: "დღე",
                dd: "%d დღე",
                M: "თვე",
                MM: "%d თვე",
                y: "წელი",
                yy: "%d წელი"
            },
            dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
            ordinal: function (e) {
                return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "მე-" + e : e + "-ე"
            },
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        var t = {
            0: "-ші",
            1: "-ші",
            2: "-ші",
            3: "-ші",
            4: "-ші",
            5: "-ші",
            6: "-шы",
            7: "-ші",
            8: "-ші",
            9: "-шы",
            10: "-шы",
            20: "-шы",
            30: "-шы",
            40: "-шы",
            50: "-ші",
            60: "-шы",
            70: "-ші",
            80: "-ші",
            90: "-шы",
            100: "-ші"
        };
        return e.defineLocale("kk", {
            months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
            monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
            weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
            weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
            weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Бүгін сағат] LT",
                nextDay: "[Ертең сағат] LT",
                nextWeek: "dddd [сағат] LT",
                lastDay: "[Кеше сағат] LT",
                lastWeek: "[Өткен аптаның] dddd [сағат] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ішінде",
                past: "%s бұрын",
                s: "бірнеше секунд",
                ss: "%d секунд",
                m: "бір минут",
                mm: "%d минут",
                h: "бір сағат",
                hh: "%d сағат",
                d: "бір күн",
                dd: "%d күн",
                M: "бір ай",
                MM: "%d ай",
                y: "бір жыл",
                yy: "%d жыл"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
            ordinal: function (e) {
                var a = e % 10, n = e >= 100 ? 100 : null;
                return e + (t[e] || t[a] || t[n])
            },
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("km", {
            months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
                nextDay: "[ស្អែក ម៉ោង] LT",
                nextWeek: "dddd [ម៉ោង] LT",
                lastDay: "[ម្សិលមិញ ម៉ោង] LT",
                lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sទៀត",
                past: "%sមុន",
                s: "ប៉ុន្មានវិនាទី",
                ss: "%d វិនាទី",
                m: "មួយនាទី",
                mm: "%d នាទី",
                h: "មួយម៉ោង",
                hh: "%d ម៉ោង",
                d: "មួយថ្ងៃ",
                dd: "%d ថ្ងៃ",
                M: "មួយខែ",
                MM: "%d ខែ",
                y: "មួយឆ្នាំ",
                yy: "%d ឆ្នាំ"
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        var t = {1: "೧", 2: "೨", 3: "೩", 4: "೪", 5: "೫", 6: "೬", 7: "೭", 8: "೮", 9: "೯", 0: "೦"},
            a = {"೧": "1", "೨": "2", "೩": "3", "೪": "4", "೫": "5", "೬": "6", "೭": "7", "೮": "8", "೯": "9", "೦": "0"};
        return e.defineLocale("kn", {
            months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
            monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬ_ಅಕ್ಟೋಬ_ನವೆಂಬ_ಡಿಸೆಂಬ".split("_"),
            monthsParseExact: !0,
            weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
            weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
            weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[ಇಂದು] LT",
                nextDay: "[ನಾಳೆ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ನಿನ್ನೆ] LT",
                lastWeek: "[ಕೊನೆಯ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ನಂತರ",
                past: "%s ಹಿಂದೆ",
                s: "ಕೆಲವು ಕ್ಷಣಗಳು",
                ss: "%d ಸೆಕೆಂಡುಗಳು",
                m: "ಒಂದು ನಿಮಿಷ",
                mm: "%d ನಿಮಿಷ",
                h: "ಒಂದು ಗಂಟೆ",
                hh: "%d ಗಂಟೆ",
                d: "ಒಂದು ದಿನ",
                dd: "%d ದಿನ",
                M: "ಒಂದು ತಿಂಗಳು",
                MM: "%d ತಿಂಗಳು",
                y: "ಒಂದು ವರ್ಷ",
                yy: "%d ವರ್ಷ"
            },
            preparse: function (e) {
                return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (e) {
                    return a[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "ರಾತ್ರಿ" === t ? e < 4 ? e : e + 12 : "ಬೆಳಿಗ್ಗೆ" === t ? e : "ಮಧ್ಯಾಹ್ನ" === t ? e >= 10 ? e : e + 12 : "ಸಂಜೆ" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, a) {
                return e < 4 ? "ರಾತ್ರಿ" : e < 10 ? "ಬೆಳಿಗ್ಗೆ" : e < 17 ? "ಮಧ್ಯಾಹ್ನ" : e < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
            ordinal: function (e) {
                return e + "ನೇ"
            },
            week: {dow: 0, doy: 6}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("ko", {
            months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
            weekdaysShort: "일_월_화_수_목_금_토".split("_"),
            weekdaysMin: "일_월_화_수_목_금_토".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "YYYY.MM.DD",
                LL: "YYYY년 MMMM D일",
                LLL: "YYYY년 MMMM D일 A h:mm",
                LLLL: "YYYY년 MMMM D일 dddd A h:mm",
                l: "YYYY.MM.DD",
                ll: "YYYY년 MMMM D일",
                lll: "YYYY년 MMMM D일 A h:mm",
                llll: "YYYY년 MMMM D일 dddd A h:mm"
            },
            calendar: {
                sameDay: "오늘 LT",
                nextDay: "내일 LT",
                nextWeek: "dddd LT",
                lastDay: "어제 LT",
                lastWeek: "지난주 dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s 후",
                past: "%s 전",
                s: "몇 초",
                ss: "%d초",
                m: "1분",
                mm: "%d분",
                h: "한 시간",
                hh: "%d시간",
                d: "하루",
                dd: "%d일",
                M: "한 달",
                MM: "%d달",
                y: "일 년",
                yy: "%d년"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"d":
                    case"D":
                    case"DDD":
                        return e + "일";
                    case"M":
                        return e + "월";
                    case"w":
                    case"W":
                        return e + "주";
                    default:
                        return e
                }
            },
            meridiemParse: /오전|오후/,
            isPM: function (e) {
                return "오후" === e
            },
            meridiem: function (e, t, a) {
                return e < 12 ? "오전" : "오후"
            }
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        var t = {
            0: "-чү",
            1: "-чи",
            2: "-чи",
            3: "-чү",
            4: "-чү",
            5: "-чи",
            6: "-чы",
            7: "-чи",
            8: "-чи",
            9: "-чу",
            10: "-чу",
            20: "-чы",
            30: "-чу",
            40: "-чы",
            50: "-чү",
            60: "-чы",
            70: "-чи",
            80: "-чи",
            90: "-чу",
            100: "-чү"
        };
        return e.defineLocale("ky", {
            months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
            monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
            weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
            weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Бүгүн саат] LT",
                nextDay: "[Эртең саат] LT",
                nextWeek: "dddd [саат] LT",
                lastDay: "[Кече саат] LT",
                lastWeek: "[Өткен аптанын] dddd [күнү] [саат] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ичинде",
                past: "%s мурун",
                s: "бирнече секунд",
                ss: "%d секунд",
                m: "бир мүнөт",
                mm: "%d мүнөт",
                h: "бир саат",
                hh: "%d саат",
                d: "бир күн",
                dd: "%d күн",
                M: "бир ай",
                MM: "%d ай",
                y: "бир жыл",
                yy: "%d жыл"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
            ordinal: function (e) {
                var a = e % 10, n = e >= 100 ? 100 : null;
                return e + (t[e] || t[a] || t[n])
            },
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";

        function t(e, t, a, n) {
            var s = {
                m: ["eng Minutt", "enger Minutt"],
                h: ["eng Stonn", "enger Stonn"],
                d: ["een Dag", "engem Dag"],
                M: ["ee Mount", "engem Mount"],
                y: ["ee Joer", "engem Joer"]
            };
            return t ? s[a][0] : s[a][1]
        }

        function a(e) {
            return s(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
        }

        function n(e) {
            return s(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
        }

        function s(e) {
            if (e = parseInt(e, 10), isNaN(e)) return !1;
            if (e < 0) return !0;
            if (e < 10) return 4 <= e && e <= 7;
            if (e < 100) {
                var t = e % 10, a = e / 10;
                return s(0 === t ? a : t)
            }
            if (e < 1e4) {
                for (; e >= 10;) e /= 10;
                return s(e)
            }
            return e /= 1e3, s(e)
        }

        return e.defineLocale("lb", {
            months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
            weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm [Auer]",
                LTS: "H:mm:ss [Auer]",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm [Auer]",
                LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
            },
            calendar: {
                sameDay: "[Haut um] LT",
                sameElse: "L",
                nextDay: "[Muer um] LT",
                nextWeek: "dddd [um] LT",
                lastDay: "[Gëschter um] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 2:
                        case 4:
                            return "[Leschten] dddd [um] LT";
                        default:
                            return "[Leschte] dddd [um] LT"
                    }
                }
            },
            relativeTime: {
                future: a,
                past: n,
                s: "e puer Sekonnen",
                ss: "%d Sekonnen",
                m: t,
                mm: "%d Minutten",
                h: t,
                hh: "%d Stonnen",
                d: t,
                dd: "%d Deeg",
                M: t,
                MM: "%d Méint",
                y: t,
                yy: "%d Joer"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("lo", {
            months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
            monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
            weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "ວັນdddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
            isPM: function (e) {
                return "ຕອນແລງ" === e
            },
            meridiem: function (e, t, a) {
                return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
            },
            calendar: {
                sameDay: "[ມື້ນີ້ເວລາ] LT",
                nextDay: "[ມື້ອື່ນເວລາ] LT",
                nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
                lastDay: "[ມື້ວານນີ້ເວລາ] LT",
                lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ອີກ %s",
                past: "%sຜ່ານມາ",
                s: "ບໍ່ເທົ່າໃດວິນາທີ",
                ss: "%d ວິນາທີ",
                m: "1 ນາທີ",
                mm: "%d ນາທີ",
                h: "1 ຊົ່ວໂມງ",
                hh: "%d ຊົ່ວໂມງ",
                d: "1 ມື້",
                dd: "%d ມື້",
                M: "1 ເດືອນ",
                MM: "%d ເດືອນ",
                y: "1 ປີ",
                yy: "%d ປີ"
            },
            dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
            ordinal: function (e) {
                return "ທີ່" + e
            }
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";

        function t(e, t, a, n) {
            return t ? "kelios sekundės" : n ? "kelių sekundžių" : "kelias sekundes"
        }

        function a(e, t, a, n) {
            return t ? s(a)[0] : n ? s(a)[1] : s(a)[2]
        }

        function n(e) {
            return e % 10 == 0 || e > 10 && e < 20
        }

        function s(e) {
            return r[e].split("_")
        }

        function i(e, t, i, r) {
            var d = e + " ";
            return 1 === e ? d + a(e, t, i[0], r) : t ? d + (n(e) ? s(i)[1] : s(i)[0]) : r ? d + s(i)[1] : d + (n(e) ? s(i)[1] : s(i)[2])
        }

        var r = {
            ss: "sekundė_sekundžių_sekundes",
            m: "minutė_minutės_minutę",
            mm: "minutės_minučių_minutes",
            h: "valanda_valandos_valandą",
            hh: "valandos_valandų_valandas",
            d: "diena_dienos_dieną",
            dd: "dienos_dienų_dienas",
            M: "mėnuo_mėnesio_mėnesį",
            MM: "mėnesiai_mėnesių_mėnesius",
            y: "metai_metų_metus",
            yy: "metai_metų_metus"
        };
        return e.defineLocale("lt", {
            months: {
                format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
                standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
                isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
            },
            monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
            weekdays: {
                format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
                standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
                isFormat: /dddd HH:mm/
            },
            weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
            weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY [m.] MMMM D [d.]",
                LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                l: "YYYY-MM-DD",
                ll: "YYYY [m.] MMMM D [d.]",
                lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
            },
            calendar: {
                sameDay: "[Šiandien] LT",
                nextDay: "[Rytoj] LT",
                nextWeek: "dddd LT",
                lastDay: "[Vakar] LT",
                lastWeek: "[Praėjusį] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "po %s",
                past: "prieš %s",
                s: t,
                ss: i,
                m: a,
                mm: i,
                h: a,
                hh: i,
                d: a,
                dd: i,
                M: a,
                MM: i,
                y: a,
                yy: i
            },
            dayOfMonthOrdinalParse: /\d{1,2}-oji/,
            ordinal: function (e) {
                return e + "-oji"
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";

        function t(e, t, a) {
            return a ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
        }

        function a(e, a, n) {
            return e + " " + t(i[n], e, a)
        }

        function n(e, a, n) {
            return t(i[n], e, a)
        }

        function s(e, t) {
            return t ? "dažas sekundes" : "dažām sekundēm"
        }

        var i = {
            ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
            m: "minūtes_minūtēm_minūte_minūtes".split("_"),
            mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
            h: "stundas_stundām_stunda_stundas".split("_"),
            hh: "stundas_stundām_stunda_stundas".split("_"),
            d: "dienas_dienām_diena_dienas".split("_"),
            dd: "dienas_dienām_diena_dienas".split("_"),
            M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            y: "gada_gadiem_gads_gadi".split("_"),
            yy: "gada_gadiem_gads_gadi".split("_")
        };
        return e.defineLocale("lv", {
            months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
            weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
            weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY.",
                LL: "YYYY. [gada] D. MMMM",
                LLL: "YYYY. [gada] D. MMMM, HH:mm",
                LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
            },
            calendar: {
                sameDay: "[Šodien pulksten] LT",
                nextDay: "[Rīt pulksten] LT",
                nextWeek: "dddd [pulksten] LT",
                lastDay: "[Vakar pulksten] LT",
                lastWeek: "[Pagājušā] dddd [pulksten] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "pēc %s",
                past: "pirms %s",
                s: s,
                ss: a,
                m: n,
                mm: a,
                h: n,
                hh: a,
                d: n,
                dd: a,
                M: n,
                MM: a,
                y: n,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        var t = {
            words: {
                ss: ["sekund", "sekunda", "sekundi"],
                m: ["jedan minut", "jednog minuta"],
                mm: ["minut", "minuta", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mjesec", "mjeseca", "mjeseci"],
                yy: ["godina", "godine", "godina"]
            }, correctGrammaticalCase: function (e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            }, translate: function (e, a, n) {
                var s = t.words[n];
                return 1 === n.length ? a ? s[0] : s[1] : e + " " + t.correctGrammaticalCase(e, s)
            }
        };
        return e.defineLocale("me", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT", nextDay: "[sjutra u] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                }, lastDay: "[juče u] LT", lastWeek: function () {
                    return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "nekoliko sekundi",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "dan",
                dd: t.translate,
                M: "mjesec",
                MM: t.translate,
                y: "godinu",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("mi", {
            months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
            monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
            monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
            weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
            weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
            weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [i] HH:mm",
                LLLL: "dddd, D MMMM YYYY [i] HH:mm"
            },
            calendar: {
                sameDay: "[i teie mahana, i] LT",
                nextDay: "[apopo i] LT",
                nextWeek: "dddd [i] LT",
                lastDay: "[inanahi i] LT",
                lastWeek: "dddd [whakamutunga i] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "i roto i %s",
                past: "%s i mua",
                s: "te hēkona ruarua",
                ss: "%d hēkona",
                m: "he meneti",
                mm: "%d meneti",
                h: "te haora",
                hh: "%d haora",
                d: "he ra",
                dd: "%d ra",
                M: "he marama",
                MM: "%d marama",
                y: "he tau",
                yy: "%d tau"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("mk", {
            months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
            weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
            weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Денес во] LT",
                nextDay: "[Утре во] LT",
                nextWeek: "[Во] dddd [во] LT",
                lastDay: "[Вчера во] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[Изминатата] dddd [во] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Изминатиот] dddd [во] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "после %s",
                past: "пред %s",
                s: "неколку секунди",
                ss: "%d секунди",
                m: "минута",
                mm: "%d минути",
                h: "час",
                hh: "%d часа",
                d: "ден",
                dd: "%d дена",
                M: "месец",
                MM: "%d месеци",
                y: "година",
                yy: "%d години"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function (e) {
                var t = e % 10, a = e % 100;
                return 0 === e ? e + "-ев" : 0 === a ? e + "-ен" : a > 10 && a < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
            },
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("ml", {
            months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
            monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
            monthsParseExact: !0,
            weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
            weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
            weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
            longDateFormat: {
                LT: "A h:mm -നു",
                LTS: "A h:mm:ss -നു",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm -നു",
                LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
            },
            calendar: {
                sameDay: "[ഇന്ന്] LT",
                nextDay: "[നാളെ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ഇന്നലെ] LT",
                lastWeek: "[കഴിഞ്ഞ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s കഴിഞ്ഞ്",
                past: "%s മുൻപ്",
                s: "അൽപ നിമിഷങ്ങൾ",
                ss: "%d സെക്കൻഡ്",
                m: "ഒരു മിനിറ്റ്",
                mm: "%d മിനിറ്റ്",
                h: "ഒരു മണിക്കൂർ",
                hh: "%d മണിക്കൂർ",
                d: "ഒരു ദിവസം",
                dd: "%d ദിവസം",
                M: "ഒരു മാസം",
                MM: "%d മാസം",
                y: "ഒരു വർഷം",
                yy: "%d വർഷം"
            },
            meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "രാത്രി" === t && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e
            },
            meridiem: function (e, t, a) {
                return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി"
            }
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";

        function t(e, t, a, n) {
            var s = "";
            if (t) switch (a) {
                case"s":
                    s = "काही सेकंद";
                    break;
                case"ss":
                    s = "%d सेकंद";
                    break;
                case"m":
                    s = "एक मिनिट";
                    break;
                case"mm":
                    s = "%d मिनिटे";
                    break;
                case"h":
                    s = "एक तास";
                    break;
                case"hh":
                    s = "%d तास";
                    break;
                case"d":
                    s = "एक दिवस";
                    break;
                case"dd":
                    s = "%d दिवस";
                    break;
                case"M":
                    s = "एक महिना";
                    break;
                case"MM":
                    s = "%d महिने";
                    break;
                case"y":
                    s = "एक वर्ष";
                    break;
                case"yy":
                    s = "%d वर्षे"
            } else switch (a) {
                case"s":
                    s = "काही सेकंदां";
                    break;
                case"ss":
                    s = "%d सेकंदां";
                    break;
                case"m":
                    s = "एका मिनिटा";
                    break;
                case"mm":
                    s = "%d मिनिटां";
                    break;
                case"h":
                    s = "एका तासा";
                    break;
                case"hh":
                    s = "%d तासां";
                    break;
                case"d":
                    s = "एका दिवसा";
                    break;
                case"dd":
                    s = "%d दिवसां";
                    break;
                case"M":
                    s = "एका महिन्या";
                    break;
                case"MM":
                    s = "%d महिन्यां";
                    break;
                case"y":
                    s = "एका वर्षा";
                    break;
                case"yy":
                    s = "%d वर्षां"
            }
            return s.replace(/%d/i, e)
        }

        var a = {1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०"},
            n = {"१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0"};
        return e.defineLocale("mr", {
            months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
            monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
            monthsParseExact: !0,
            weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
                LT: "A h:mm वाजता",
                LTS: "A h:mm:ss वाजता",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm वाजता",
                LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[उद्या] LT",
                nextWeek: "dddd, LT",
                lastDay: "[काल] LT",
                lastWeek: "[मागील] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sमध्ये",
                past: "%sपूर्वी",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            preparse: function (e) {
                return e.replace(/[१२३४५६७८९०]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return a[e]
                })
            },
            meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "रात्री" === t ? e < 4 ? e : e + 12 : "सकाळी" === t ? e : "दुपारी" === t ? e >= 10 ? e : e + 12 : "सायंकाळी" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, a) {
                return e < 4 ? "रात्री" : e < 10 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री"
            },
            week: {dow: 0, doy: 6}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("ms-my", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, a) {
                return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                ss: "%d saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("ms", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, a) {
                return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                ss: "%d saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("mt", {
            months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),
            monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),
            weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),
            weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
            weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Illum fil-]LT",
                nextDay: "[Għada fil-]LT",
                nextWeek: "dddd [fil-]LT",
                lastDay: "[Il-bieraħ fil-]LT",
                lastWeek: "dddd [li għadda] [fil-]LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "f’ %s",
                past: "%s ilu",
                s: "ftit sekondi",
                ss: "%d sekondi",
                m: "minuta",
                mm: "%d minuti",
                h: "siegħa",
                hh: "%d siegħat",
                d: "ġurnata",
                dd: "%d ġranet",
                M: "xahar",
                MM: "%d xhur",
                y: "sena",
                yy: "%d sni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        var t = {1: "၁", 2: "၂", 3: "၃", 4: "၄", 5: "၅", 6: "၆", 7: "၇", 8: "၈", 9: "၉", 0: "၀"},
            a = {"၁": "1", "၂": "2", "၃": "3", "၄": "4", "၅": "5", "၆": "6", "၇": "7", "၈": "8", "၉": "9", "၀": "0"};
        return e.defineLocale("my", {
            months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
            monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
            weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
            weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ယနေ.] LT [မှာ]",
                nextDay: "[မနက်ဖြန်] LT [မှာ]",
                nextWeek: "dddd LT [မှာ]",
                lastDay: "[မနေ.က] LT [မှာ]",
                lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
                sameElse: "L"
            },
            relativeTime: {
                future: "လာမည့် %s မှာ",
                past: "လွန်ခဲ့သော %s က",
                s: "စက္ကန်.အနည်းငယ်",
                ss: "%d စက္ကန့်",
                m: "တစ်မိနစ်",
                mm: "%d မိနစ်",
                h: "တစ်နာရီ",
                hh: "%d နာရီ",
                d: "တစ်ရက်",
                dd: "%d ရက်",
                M: "တစ်လ",
                MM: "%d လ",
                y: "တစ်နှစ်",
                yy: "%d နှစ်"
            },
            preparse: function (e) {
                return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (e) {
                    return a[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("nb", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[i går kl.] LT",
                lastWeek: "[forrige] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "noen sekunder",
                ss: "%d sekunder",
                m: "ett minutt",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dager",
                M: "en måned",
                MM: "%d måneder",
                y: "ett år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        var t = {1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०"},
            a = {"१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0"};
        return e.defineLocale("ne", {
            months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
            monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
            monthsParseExact: !0,
            weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
            weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
            weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "Aको h:mm बजे",
                LTS: "Aको h:mm:ss बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, Aको h:mm बजे",
                LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
            },
            preparse: function (e) {
                return e.replace(/[१२३४५६७८९०]/g, function (e) {
                    return a[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "राति" === t ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "साँझ" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, a) {
                return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[भोलि] LT",
                nextWeek: "[आउँदो] dddd[,] LT",
                lastDay: "[हिजो] LT",
                lastWeek: "[गएको] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sमा",
                past: "%s अगाडि",
                s: "केही क्षण",
                ss: "%d सेकेण्ड",
                m: "एक मिनेट",
                mm: "%d मिनेट",
                h: "एक घण्टा",
                hh: "%d घण्टा",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महिना",
                MM: "%d महिना",
                y: "एक बर्ष",
                yy: "%d बर्ष"
            },
            week: {dow: 0, doy: 6}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
            a = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            n = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
            s = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        return e.defineLocale("nl-be", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function (e, n) {
                return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
            },
            monthsRegex: s,
            monthsShortRegex: s,
            monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                ss: "%d seconden",
                m: "één minuut",
                mm: "%d minuten",
                h: "één uur",
                hh: "%d uur",
                d: "één dag",
                dd: "%d dagen",
                M: "één maand",
                MM: "%d maanden",
                y: "één jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
            a = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            n = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
            s = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        return e.defineLocale("nl", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function (e, n) {
                return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
            },
            monthsRegex: s,
            monthsShortRegex: s,
            monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                ss: "%d seconden",
                m: "één minuut",
                mm: "%d minuten",
                h: "één uur",
                hh: "%d uur",
                d: "één dag",
                dd: "%d dagen",
                M: "één maand",
                MM: "%d maanden",
                y: "één jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("nn", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
            weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
            weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[I dag klokka] LT",
                nextDay: "[I morgon klokka] LT",
                nextWeek: "dddd [klokka] LT",
                lastDay: "[I går klokka] LT",
                lastWeek: "[Føregåande] dddd [klokka] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s sidan",
                s: "nokre sekund",
                ss: "%d sekund",
                m: "eit minutt",
                mm: "%d minutt",
                h: "ein time",
                hh: "%d timar",
                d: "ein dag",
                dd: "%d dagar",
                M: "ein månad",
                MM: "%d månader",
                y: "eit år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        var t = {1: "੧", 2: "੨", 3: "੩", 4: "੪", 5: "੫", 6: "੬", 7: "੭", 8: "੮", 9: "੯", 0: "੦"},
            a = {"੧": "1", "੨": "2", "੩": "3", "੪": "4", "੫": "5", "੬": "6", "੭": "7", "੮": "8", "੯": "9", "੦": "0"};
        return e.defineLocale("pa-in", {
            months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
            monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
            weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
            weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            longDateFormat: {
                LT: "A h:mm ਵਜੇ",
                LTS: "A h:mm:ss ਵਜੇ",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
                LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
            },
            calendar: {
                sameDay: "[ਅਜ] LT",
                nextDay: "[ਕਲ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ਕਲ] LT",
                lastWeek: "[ਪਿਛਲੇ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ਵਿੱਚ",
                past: "%s ਪਿਛਲੇ",
                s: "ਕੁਝ ਸਕਿੰਟ",
                ss: "%d ਸਕਿੰਟ",
                m: "ਇਕ ਮਿੰਟ",
                mm: "%d ਮਿੰਟ",
                h: "ਇੱਕ ਘੰਟਾ",
                hh: "%d ਘੰਟੇ",
                d: "ਇੱਕ ਦਿਨ",
                dd: "%d ਦਿਨ",
                M: "ਇੱਕ ਮਹੀਨਾ",
                MM: "%d ਮਹੀਨੇ",
                y: "ਇੱਕ ਸਾਲ",
                yy: "%d ਸਾਲ"
            },
            preparse: function (e) {
                return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (e) {
                    return a[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "ਰਾਤ" === t ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? e >= 10 ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, a) {
                return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ"
            },
            week: {dow: 0, doy: 6}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";

        function t(e) {
            return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
        }

        function a(e, a, n) {
            var s = e + " ";
            switch (n) {
                case"ss":
                    return s + (t(e) ? "sekundy" : "sekund");
                case"m":
                    return a ? "minuta" : "minutę";
                case"mm":
                    return s + (t(e) ? "minuty" : "minut");
                case"h":
                    return a ? "godzina" : "godzinę";
                case"hh":
                    return s + (t(e) ? "godziny" : "godzin");
                case"MM":
                    return s + (t(e) ? "miesiące" : "miesięcy");
                case"yy":
                    return s + (t(e) ? "lata" : "lat")
            }
        }

        var n = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
            s = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");
        return e.defineLocale("pl", {
            months: function (e, t) {
                return e ? "" === t ? "(" + s[e.month()] + "|" + n[e.month()] + ")" : /D MMMM/.test(t) ? s[e.month()] : n[e.month()] : n
            },
            monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
            weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
            weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
            weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Dziś o] LT", nextDay: "[Jutro o] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[W niedzielę o] LT";
                        case 2:
                            return "[We wtorek o] LT";
                        case 3:
                            return "[W środę o] LT";
                        case 6:
                            return "[W sobotę o] LT";
                        default:
                            return "[W] dddd [o] LT"
                    }
                }, lastDay: "[Wczoraj o] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[W zeszłą niedzielę o] LT";
                        case 3:
                            return "[W zeszłą środę o] LT";
                        case 6:
                            return "[W zeszłą sobotę o] LT";
                        default:
                            return "[W zeszły] dddd [o] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "%s temu",
                s: "kilka sekund",
                ss: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: "1 dzień",
                dd: "%d dni",
                M: "miesiąc",
                MM: a,
                y: "rok",
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("pt-br", {
            months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
            monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
            weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function () {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "%s atrás",
                s: "poucos segundos",
                ss: "%d segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº"
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("pt", {
            months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
            monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
            weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function () {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "há %s",
                s: "segundos",
                ss: "%d segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";

        function t(e, t, a) {
            var n = {ss: "secunde", mm: "minute", hh: "ore", dd: "zile", MM: "luni", yy: "ani"}, s = " ";
            return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (s = " de "), e + s + n[a]
        }

        return e.defineLocale("ro", {
            months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
            monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
            weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
            weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[azi la] LT",
                nextDay: "[mâine la] LT",
                nextWeek: "dddd [la] LT",
                lastDay: "[ieri la] LT",
                lastWeek: "[fosta] dddd [la] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "peste %s",
                past: "%s în urmă",
                s: "câteva secunde",
                ss: t,
                m: "un minut",
                mm: t,
                h: "o oră",
                hh: t,
                d: "o zi",
                dd: t,
                M: "o lună",
                MM: t,
                y: "un an",
                yy: t
            },
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";

        function t(e, t) {
            var a = e.split("_");
            return t % 10 == 1 && t % 100 != 11 ? a[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? a[1] : a[2]
        }

        function a(e, a, n) {
            var s = {
                ss: a ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                mm: a ? "минута_минуты_минут" : "минуту_минуты_минут",
                hh: "час_часа_часов",
                dd: "день_дня_дней",
                MM: "месяц_месяца_месяцев",
                yy: "год_года_лет"
            };
            return "m" === n ? a ? "минута" : "минуту" : e + " " + t(s[n], +e)
        }

        var n = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
        return e.defineLocale("ru", {
            months: {
                format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
                standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
            },
            monthsShort: {
                format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
                standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
            },
            weekdays: {
                standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
                isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
            },
            weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
            monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
            monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
            monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., H:mm",
                LLLL: "dddd, D MMMM YYYY г., H:mm"
            },
            calendar: {
                sameDay: "[Сегодня в] LT",
                nextDay: "[Завтра в] LT",
                lastDay: "[Вчера в] LT",
                nextWeek: function (e) {
                    if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                    switch (this.day()) {
                        case 0:
                            return "[В следующее] dddd [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В следующий] dddd [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В следующую] dddd [в] LT"
                    }
                },
                lastWeek: function (e) {
                    if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                    switch (this.day()) {
                        case 0:
                            return "[В прошлое] dddd [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В прошлый] dddd [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В прошлую] dddd [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "через %s",
                past: "%s назад",
                s: "несколько секунд",
                ss: a,
                m: a,
                mm: a,
                h: "час",
                hh: a,
                d: "день",
                dd: a,
                M: "месяц",
                MM: a,
                y: "год",
                yy: a
            },
            meridiemParse: /ночи|утра|дня|вечера/i,
            isPM: function (e) {
                return /^(дня|вечера)$/.test(e)
            },
            meridiem: function (e, t, a) {
                return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"M":
                    case"d":
                    case"DDD":
                        return e + "-й";
                    case"D":
                        return e + "-го";
                    case"w":
                    case"W":
                        return e + "-я";
                    default:
                        return e
                }
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        var t = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"],
            a = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
        return e.defineLocale("sd", {
            months: t,
            monthsShort: t,
            weekdays: a,
            weekdaysShort: a,
            weekdaysMin: a,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd، D MMMM YYYY HH:mm"
            },
            meridiemParse: /صبح|شام/,
            isPM: function (e) {
                return "شام" === e
            },
            meridiem: function (e, t, a) {
                return e < 12 ? "صبح" : "شام"
            },
            calendar: {
                sameDay: "[اڄ] LT",
                nextDay: "[سڀاڻي] LT",
                nextWeek: "dddd [اڳين هفتي تي] LT",
                lastDay: "[ڪالهه] LT",
                lastWeek: "[گزريل هفتي] dddd [تي] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s پوء",
                past: "%s اڳ",
                s: "چند سيڪنڊ",
                ss: "%d سيڪنڊ",
                m: "هڪ منٽ",
                mm: "%d منٽ",
                h: "هڪ ڪلاڪ",
                hh: "%d ڪلاڪ",
                d: "هڪ ڏينهن",
                dd: "%d ڏينهن",
                M: "هڪ مهينو",
                MM: "%d مهينا",
                y: "هڪ سال",
                yy: "%d سال"
            },
            preparse: function (e) {
                return e.replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/,/g, "،")
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("se", {
            months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
            monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
            weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
            weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
            weekdaysMin: "s_v_m_g_d_b_L".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "MMMM D. [b.] YYYY",
                LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
                LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
            },
            calendar: {
                sameDay: "[otne ti] LT",
                nextDay: "[ihttin ti] LT",
                nextWeek: "dddd [ti] LT",
                lastDay: "[ikte ti] LT",
                lastWeek: "[ovddit] dddd [ti] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s geažes",
                past: "maŋit %s",
                s: "moadde sekunddat",
                ss: "%d sekunddat",
                m: "okta minuhta",
                mm: "%d minuhtat",
                h: "okta diimmu",
                hh: "%d diimmut",
                d: "okta beaivi",
                dd: "%d beaivvit",
                M: "okta mánnu",
                MM: "%d mánut",
                y: "okta jahki",
                yy: "%d jagit"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("si", {
            months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
            monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
            weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
            weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
            weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "a h:mm",
                LTS: "a h:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY MMMM D",
                LLL: "YYYY MMMM D, a h:mm",
                LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
            },
            calendar: {
                sameDay: "[අද] LT[ට]",
                nextDay: "[හෙට] LT[ට]",
                nextWeek: "dddd LT[ට]",
                lastDay: "[ඊයේ] LT[ට]",
                lastWeek: "[පසුගිය] dddd LT[ට]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sකින්",
                past: "%sකට පෙර",
                s: "තත්පර කිහිපය",
                ss: "තත්පර %d",
                m: "මිනිත්තුව",
                mm: "මිනිත්තු %d",
                h: "පැය",
                hh: "පැය %d",
                d: "දිනය",
                dd: "දින %d",
                M: "මාසය",
                MM: "මාස %d",
                y: "වසර",
                yy: "වසර %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
            ordinal: function (e) {
                return e + " වැනි"
            },
            meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
            isPM: function (e) {
                return "ප.ව." === e || "පස් වරු" === e
            },
            meridiem: function (e, t, a) {
                return e > 11 ? a ? "ප.ව." : "පස් වරු" : a ? "පෙ.ව." : "පෙර වරු"
            }
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";

        function t(e) {
            return e > 1 && e < 5
        }

        function a(e, a, n, s) {
            var i = e + " ";
            switch (n) {
                case"s":
                    return a || s ? "pár sekúnd" : "pár sekundami";
                case"ss":
                    return a || s ? i + (t(e) ? "sekundy" : "sekúnd") : i + "sekundami";
                case"m":
                    return a ? "minúta" : s ? "minútu" : "minútou";
                case"mm":
                    return a || s ? i + (t(e) ? "minúty" : "minút") : i + "minútami";
                case"h":
                    return a ? "hodina" : s ? "hodinu" : "hodinou";
                case"hh":
                    return a || s ? i + (t(e) ? "hodiny" : "hodín") : i + "hodinami";
                case"d":
                    return a || s ? "deň" : "dňom";
                case"dd":
                    return a || s ? i + (t(e) ? "dni" : "dní") : i + "dňami";
                case"M":
                    return a || s ? "mesiac" : "mesiacom";
                case"MM":
                    return a || s ? i + (t(e) ? "mesiace" : "mesiacov") : i + "mesiacmi";
                case"y":
                    return a || s ? "rok" : "rokom";
                case"yy":
                    return a || s ? i + (t(e) ? "roky" : "rokov") : i + "rokmi"
            }
        }

        var n = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
            s = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
        return e.defineLocale("sk", {
            months: n,
            monthsShort: s,
            weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
            weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
            weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[dnes o] LT", nextDay: "[zajtra o] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[v nedeľu o] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [o] LT";
                        case 3:
                            return "[v stredu o] LT";
                        case 4:
                            return "[vo štvrtok o] LT";
                        case 5:
                            return "[v piatok o] LT";
                        case 6:
                            return "[v sobotu o] LT"
                    }
                }, lastDay: "[včera o] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[minulú nedeľu o] LT";
                        case 1:
                        case 2:
                            return "[minulý] dddd [o] LT";
                        case 3:
                            return "[minulú stredu o] LT";
                        case 4:
                        case 5:
                            return "[minulý] dddd [o] LT";
                        case 6:
                            return "[minulú sobotu o] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pred %s",
                s: a,
                ss: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: a,
                dd: a,
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";

        function t(e, t, a, n) {
            var s = e + " ";
            switch (a) {
                case"s":
                    return t || n ? "nekaj sekund" : "nekaj sekundami";
                case"ss":
                    return s += 1 === e ? t ? "sekundo" : "sekundi" : 2 === e ? t || n ? "sekundi" : "sekundah" : e < 5 ? t || n ? "sekunde" : "sekundah" : "sekund";
                case"m":
                    return t ? "ena minuta" : "eno minuto";
                case"mm":
                    return s += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || n ? "minuti" : "minutama" : e < 5 ? t || n ? "minute" : "minutami" : t || n ? "minut" : "minutami";
                case"h":
                    return t ? "ena ura" : "eno uro";
                case"hh":
                    return s += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || n ? "uri" : "urama" : e < 5 ? t || n ? "ure" : "urami" : t || n ? "ur" : "urami";
                case"d":
                    return t || n ? "en dan" : "enim dnem";
                case"dd":
                    return s += 1 === e ? t || n ? "dan" : "dnem" : 2 === e ? t || n ? "dni" : "dnevoma" : t || n ? "dni" : "dnevi";
                case"M":
                    return t || n ? "en mesec" : "enim mesecem";
                case"MM":
                    return s += 1 === e ? t || n ? "mesec" : "mesecem" : 2 === e ? t || n ? "meseca" : "mesecema" : e < 5 ? t || n ? "mesece" : "meseci" : t || n ? "mesecev" : "meseci";
                case"y":
                    return t || n ? "eno leto" : "enim letom";
                case"yy":
                    return s += 1 === e ? t || n ? "leto" : "letom" : 2 === e ? t || n ? "leti" : "letoma" : e < 5 ? t || n ? "leta" : "leti" : t || n ? "let" : "leti"
            }
        }

        return e.defineLocale("sl", {
            months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
            weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
            weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danes ob] LT", nextDay: "[jutri ob] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[v] [nedeljo] [ob] LT";
                        case 3:
                            return "[v] [sredo] [ob] LT";
                        case 6:
                            return "[v] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[v] dddd [ob] LT"
                    }
                }, lastDay: "[včeraj ob] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[prejšnjo] [nedeljo] [ob] LT";
                        case 3:
                            return "[prejšnjo] [sredo] [ob] LT";
                        case 6:
                            return "[prejšnjo] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prejšnji] dddd [ob] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "čez %s",
                past: "pred %s",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("sq", {
            months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
            monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
            weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
            weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
            weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /PD|MD/,
            isPM: function (e) {
                return "M" === e.charAt(0)
            },
            meridiem: function (e, t, a) {
                return e < 12 ? "PD" : "MD"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Sot në] LT",
                nextDay: "[Nesër në] LT",
                nextWeek: "dddd [në] LT",
                lastDay: "[Dje në] LT",
                lastWeek: "dddd [e kaluar në] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "në %s",
                past: "%s më parë",
                s: "disa sekonda",
                ss: "%d sekonda",
                m: "një minutë",
                mm: "%d minuta",
                h: "një orë",
                hh: "%d orë",
                d: "një ditë",
                dd: "%d ditë",
                M: "një muaj",
                MM: "%d muaj",
                y: "një vit",
                yy: "%d vite"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        var t = {
            words: {
                ss: ["секунда", "секунде", "секунди"],
                m: ["један минут", "једне минуте"],
                mm: ["минут", "минуте", "минута"],
                h: ["један сат", "једног сата"],
                hh: ["сат", "сата", "сати"],
                dd: ["дан", "дана", "дана"],
                MM: ["месец", "месеца", "месеци"],
                yy: ["година", "године", "година"]
            }, correctGrammaticalCase: function (e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            }, translate: function (e, a, n) {
                var s = t.words[n];
                return 1 === n.length ? a ? s[0] : s[1] : e + " " + t.correctGrammaticalCase(e, s)
            }
        };
        return e.defineLocale("sr-cyrl", {
            months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
            monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
            monthsParseExact: !0,
            weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
            weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
            weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[данас у] LT", nextDay: "[сутра у] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[у] [недељу] [у] LT";
                        case 3:
                            return "[у] [среду] [у] LT";
                        case 6:
                            return "[у] [суботу] [у] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[у] dddd [у] LT"
                    }
                }, lastDay: "[јуче у] LT", lastWeek: function () {
                    return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()]
                }, sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "пре %s",
                s: "неколико секунди",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "дан",
                dd: t.translate,
                M: "месец",
                MM: t.translate,
                y: "годину",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        var t = {
            words: {
                ss: ["sekunda", "sekunde", "sekundi"],
                m: ["jedan minut", "jedne minute"],
                mm: ["minut", "minute", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mesec", "meseca", "meseci"],
                yy: ["godina", "godine", "godina"]
            }, correctGrammaticalCase: function (e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            }, translate: function (e, a, n) {
                var s = t.words[n];
                return 1 === n.length ? a ? s[0] : s[1] : e + " " + t.correctGrammaticalCase(e, s)
            }
        };
        return e.defineLocale("sr", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedelju] [u] LT";
                        case 3:
                            return "[u] [sredu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                }, lastDay: "[juče u] LT", lastWeek: function () {
                    return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pre %s",
                s: "nekoliko sekundi",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "dan",
                dd: t.translate,
                M: "mesec",
                MM: t.translate,
                y: "godinu",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("ss", {
            months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
            monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
            weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
            weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
            weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Namuhla nga] LT",
                nextDay: "[Kusasa nga] LT",
                nextWeek: "dddd [nga] LT",
                lastDay: "[Itolo nga] LT",
                lastWeek: "dddd [leliphelile] [nga] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "nga %s",
                past: "wenteka nga %s",
                s: "emizuzwana lomcane",
                ss: "%d mzuzwana",
                m: "umzuzu",
                mm: "%d emizuzu",
                h: "lihora",
                hh: "%d emahora",
                d: "lilanga",
                dd: "%d emalanga",
                M: "inyanga",
                MM: "%d tinyanga",
                y: "umnyaka",
                yy: "%d iminyaka"
            },
            meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
            meridiem: function (e, t, a) {
                return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
            },
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: "%d",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("sv", {
            months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
            weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
            weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Idag] LT",
                nextDay: "[Imorgon] LT",
                lastDay: "[Igår] LT",
                nextWeek: "[På] dddd LT",
                lastWeek: "[I] dddd[s] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "för %s sedan",
                s: "några sekunder",
                ss: "%d sekunder",
                m: "en minut",
                mm: "%d minuter",
                h: "en timme",
                hh: "%d timmar",
                d: "en dag",
                dd: "%d dagar",
                M: "en månad",
                MM: "%d månader",
                y: "ett år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e")
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("sw", {
            months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
            weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
            weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[leo saa] LT",
                nextDay: "[kesho saa] LT",
                nextWeek: "[wiki ijayo] dddd [saat] LT",
                lastDay: "[jana] LT",
                lastWeek: "[wiki iliyopita] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s baadaye",
                past: "tokea %s",
                s: "hivi punde",
                ss: "sekunde %d",
                m: "dakika moja",
                mm: "dakika %d",
                h: "saa limoja",
                hh: "masaa %d",
                d: "siku moja",
                dd: "masiku %d",
                M: "mwezi mmoja",
                MM: "miezi %d",
                y: "mwaka mmoja",
                yy: "miaka %d"
            },
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        var t = {1: "௧", 2: "௨", 3: "௩", 4: "௪", 5: "௫", 6: "௬", 7: "௭", 8: "௮", 9: "௯", 0: "௦"},
            a = {"௧": "1", "௨": "2", "௩": "3", "௪": "4", "௫": "5", "௬": "6", "௭": "7", "௮": "8", "௯": "9", "௦": "0"};
        return e.defineLocale("ta", {
            months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
            monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
            weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
            weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
            weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, HH:mm",
                LLLL: "dddd, D MMMM YYYY, HH:mm"
            },
            calendar: {
                sameDay: "[இன்று] LT",
                nextDay: "[நாளை] LT",
                nextWeek: "dddd, LT",
                lastDay: "[நேற்று] LT",
                lastWeek: "[கடந்த வாரம்] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s இல்",
                past: "%s முன்",
                s: "ஒரு சில விநாடிகள்",
                ss: "%d விநாடிகள்",
                m: "ஒரு நிமிடம்",
                mm: "%d நிமிடங்கள்",
                h: "ஒரு மணி நேரம்",
                hh: "%d மணி நேரம்",
                d: "ஒரு நாள்",
                dd: "%d நாட்கள்",
                M: "ஒரு மாதம்",
                MM: "%d மாதங்கள்",
                y: "ஒரு வருடம்",
                yy: "%d ஆண்டுகள்"
            },
            dayOfMonthOrdinalParse: /\d{1,2}வது/,
            ordinal: function (e) {
                return e + "வது"
            },
            preparse: function (e) {
                return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (e) {
                    return a[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
            meridiem: function (e, t, a) {
                return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்"
            },
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "யாமம்" === t ? e < 2 ? e : e + 12 : "வைகறை" === t || "காலை" === t ? e : "நண்பகல்" === t && e >= 10 ? e : e + 12
            },
            week: {dow: 0, doy: 6}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("te", {
            months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
            monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
            monthsParseExact: !0,
            weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
            weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
            weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[నేడు] LT",
                nextDay: "[రేపు] LT",
                nextWeek: "dddd, LT",
                lastDay: "[నిన్న] LT",
                lastWeek: "[గత] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s లో",
                past: "%s క్రితం",
                s: "కొన్ని క్షణాలు",
                ss: "%d సెకన్లు",
                m: "ఒక నిమిషం",
                mm: "%d నిమిషాలు",
                h: "ఒక గంట",
                hh: "%d గంటలు",
                d: "ఒక రోజు",
                dd: "%d రోజులు",
                M: "ఒక నెల",
                MM: "%d నెలలు",
                y: "ఒక సంవత్సరం",
                yy: "%d సంవత్సరాలు"
            },
            dayOfMonthOrdinalParse: /\d{1,2}వ/,
            ordinal: "%dవ",
            meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "రాత్రి" === t ? e < 4 ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? e >= 10 ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, a) {
                return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి"
            },
            week: {dow: 0, doy: 6}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("tet", {
            months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juniu_Juliu_Augustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Aug_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sexta_Sabadu".split("_"),
            weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sext_Sab".split("_"),
            weekdaysMin: "Do_Seg_Te_Ku_Ki_Sex_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ohin iha] LT",
                nextDay: "[Aban iha] LT",
                nextWeek: "dddd [iha] LT",
                lastDay: "[Horiseik iha] LT",
                lastWeek: "dddd [semana kotuk] [iha] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "iha %s",
                past: "%s liuba",
                s: "minutu balun",
                ss: "minutu %d",
                m: "minutu ida",
                mm: "minutus %d",
                h: "horas ida",
                hh: "horas %d",
                d: "loron ida",
                dd: "loron %d",
                M: "fulan ida",
                MM: "fulan %d",
                y: "tinan ida",
                yy: "tinan %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("th", {
            months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
            monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
            monthsParseExact: !0,
            weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
            weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
            weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY เวลา H:mm",
                LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
            },
            meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
            isPM: function (e) {
                return "หลังเที่ยง" === e
            },
            meridiem: function (e, t, a) {
                return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง"
            },
            calendar: {
                sameDay: "[วันนี้ เวลา] LT",
                nextDay: "[พรุ่งนี้ เวลา] LT",
                nextWeek: "dddd[หน้า เวลา] LT",
                lastDay: "[เมื่อวานนี้ เวลา] LT",
                lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "อีก %s",
                past: "%sที่แล้ว",
                s: "ไม่กี่วินาที",
                ss: "%d วินาที",
                m: "1 นาที",
                mm: "%d นาที",
                h: "1 ชั่วโมง",
                hh: "%d ชั่วโมง",
                d: "1 วัน",
                dd: "%d วัน",
                M: "1 เดือน",
                MM: "%d เดือน",
                y: "1 ปี",
                yy: "%d ปี"
            }
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("tl-ph", {
            months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
            monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "MM/D/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY HH:mm",
                LLLL: "dddd, MMMM DD, YYYY HH:mm"
            },
            calendar: {
                sameDay: "LT [ngayong araw]",
                nextDay: "[Bukas ng] LT",
                nextWeek: "LT [sa susunod na] dddd",
                lastDay: "LT [kahapon]",
                lastWeek: "LT [noong nakaraang] dddd",
                sameElse: "L"
            },
            relativeTime: {
                future: "sa loob ng %s",
                past: "%s ang nakalipas",
                s: "ilang segundo",
                ss: "%d segundo",
                m: "isang minuto",
                mm: "%d minuto",
                h: "isang oras",
                hh: "%d oras",
                d: "isang araw",
                dd: "%d araw",
                M: "isang buwan",
                MM: "%d buwan",
                y: "isang taon",
                yy: "%d taon"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function (e) {
                return e
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";

        function t(e) {
            var t = e;
            return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq"
        }

        function a(e) {
            var t = e;
            return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret"
        }

        function n(e, t, a, n) {
            var i = s(e);
            switch (a) {
                case"ss":
                    return i + " lup";
                case"mm":
                    return i + " tup";
                case"hh":
                    return i + " rep";
                case"dd":
                    return i + " jaj";
                case"MM":
                    return i + " jar";
                case"yy":
                    return i + " DIS"
            }
        }

        function s(e) {
            var t = Math.floor(e % 1e3 / 100), a = Math.floor(e % 100 / 10), n = e % 10, s = "";
            return t > 0 && (s += i[t] + "vatlh"), a > 0 && (s += ("" !== s ? " " : "") + i[a] + "maH"), n > 0 && (s += ("" !== s ? " " : "") + i[n]), "" === s ? "pagh" : s
        }

        var i = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
        return e.defineLocale("tlh", {
            months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
            monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
            monthsParseExact: !0,
            weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[DaHjaj] LT",
                nextDay: "[wa’leS] LT",
                nextWeek: "LLL",
                lastDay: "[wa’Hu’] LT",
                lastWeek: "LLL",
                sameElse: "L"
            },
            relativeTime: {
                future: t,
                past: a,
                s: "puS lup",
                ss: n,
                m: "wa’ tup",
                mm: n,
                h: "wa’ rep",
                hh: n,
                d: "wa’ jaj",
                dd: n,
                M: "wa’ jar",
                MM: n,
                y: "wa’ DIS",
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        var t = {
            1: "'inci",
            5: "'inci",
            8: "'inci",
            70: "'inci",
            80: "'inci",
            2: "'nci",
            7: "'nci",
            20: "'nci",
            50: "'nci",
            3: "'üncü",
            4: "'üncü",
            100: "'üncü",
            6: "'ncı",
            9: "'uncu",
            10: "'uncu",
            30: "'uncu",
            60: "'ıncı",
            90: "'ıncı"
        };
        return e.defineLocale("tr", {
            months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
            monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
            weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
            weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
            weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugün saat] LT",
                nextDay: "[yarın saat] LT",
                nextWeek: "[gelecek] dddd [saat] LT",
                lastDay: "[dün] LT",
                lastWeek: "[geçen] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s önce",
                s: "birkaç saniye",
                ss: "%d saniye",
                m: "bir dakika",
                mm: "%d dakika",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir ay",
                MM: "%d ay",
                y: "bir yıl",
                yy: "%d yıl"
            },
            dayOfMonthOrdinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
            ordinal: function (e) {
                if (0 === e) return e + "'ıncı";
                var a = e % 10, n = e % 100 - a, s = e >= 100 ? 100 : null;
                return e + (t[a] || t[n] || t[s])
            },
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";

        function t(e, t, a, n) {
            var s = {
                s: ["viensas secunds", "'iensas secunds"],
                ss: [e + " secunds", e + " secunds"],
                m: ["'n míut", "'iens míut"],
                mm: [e + " míuts", e + " míuts"],
                h: ["'n þora", "'iensa þora"],
                hh: [e + " þoras", e + " þoras"],
                d: ["'n ziua", "'iensa ziua"],
                dd: [e + " ziuas", e + " ziuas"],
                M: ["'n mes", "'iens mes"],
                MM: [e + " mesen", e + " mesen"],
                y: ["'n ar", "'iens ar"],
                yy: [e + " ars", e + " ars"]
            };
            return n ? s[a][0] : t ? s[a][0] : s[a][1]
        }

        return e.defineLocale("tzl", {
            months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
            monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
            weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
            weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
            weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM [dallas] YYYY",
                LLL: "D. MMMM [dallas] YYYY HH.mm",
                LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
            },
            meridiemParse: /d\'o|d\'a/i,
            isPM: function (e) {
                return "d'o" === e.toLowerCase()
            },
            meridiem: function (e, t, a) {
                return e > 11 ? a ? "d'o" : "D'O" : a ? "d'a" : "D'A"
            },
            calendar: {
                sameDay: "[oxhi à] LT",
                nextDay: "[demà à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[ieiri à] LT",
                lastWeek: "[sür el] dddd [lasteu à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "osprei %s",
                past: "ja%s",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("tzm-latn", {
            months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[asdkh g] LT",
                nextDay: "[aska g] LT",
                nextWeek: "dddd [g] LT",
                lastDay: "[assant g] LT",
                lastWeek: "dddd [g] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dadkh s yan %s",
                past: "yan %s",
                s: "imik",
                ss: "%d imik",
                m: "minuḍ",
                mm: "%d minuḍ",
                h: "saɛa",
                hh: "%d tassaɛin",
                d: "ass",
                dd: "%d ossan",
                M: "ayowr",
                MM: "%d iyyirn",
                y: "asgas",
                yy: "%d isgasn"
            },
            week: {dow: 6, doy: 12}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("tzm", {
            months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
                nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
                nextWeek: "dddd [ⴴ] LT",
                lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
                lastWeek: "dddd [ⴴ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
                past: "ⵢⴰⵏ %s",
                s: "ⵉⵎⵉⴽ",
                ss: "%d ⵉⵎⵉⴽ",
                m: "ⵎⵉⵏⵓⴺ",
                mm: "%d ⵎⵉⵏⵓⴺ",
                h: "ⵙⴰⵄⴰ",
                hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
                d: "ⴰⵙⵙ",
                dd: "%d oⵙⵙⴰⵏ",
                M: "ⴰⵢoⵓⵔ",
                MM: "%d ⵉⵢⵢⵉⵔⵏ",
                y: "ⴰⵙⴳⴰⵙ",
                yy: "%d ⵉⵙⴳⴰⵙⵏ"
            },
            week: {dow: 6, doy: 12}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";

        function t(e, t) {
            var a = e.split("_");
            return t % 10 == 1 && t % 100 != 11 ? a[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? a[1] : a[2]
        }

        function a(e, a, n) {
            var s = {
                ss: a ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
                mm: a ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                hh: a ? "година_години_годин" : "годину_години_годин",
                dd: "день_дні_днів",
                MM: "місяць_місяці_місяців",
                yy: "рік_роки_років"
            };
            return "m" === n ? a ? "хвилина" : "хвилину" : "h" === n ? a ? "година" : "годину" : e + " " + t(s[n], +e)
        }

        function n(e, t) {
            var a = {
                nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
            };
            return e ? a[/(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : a.nominative
        }

        function s(e) {
            return function () {
                return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
            }
        }

        return e.defineLocale("uk", {
            months: {
                format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
                standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
            },
            monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
            weekdays: n,
            weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY р.",
                LLL: "D MMMM YYYY р., HH:mm",
                LLLL: "dddd, D MMMM YYYY р., HH:mm"
            },
            calendar: {
                sameDay: s("[Сьогодні "),
                nextDay: s("[Завтра "),
                lastDay: s("[Вчора "),
                nextWeek: s("[У] dddd ["),
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return s("[Минулої] dddd [").call(this);
                        case 1:
                        case 2:
                        case 4:
                            return s("[Минулого] dddd [").call(this)
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "%s тому",
                s: "декілька секунд",
                ss: a,
                m: a,
                mm: a,
                h: "годину",
                hh: a,
                d: "день",
                dd: a,
                M: "місяць",
                MM: a,
                y: "рік",
                yy: a
            },
            meridiemParse: /ночі|ранку|дня|вечора/,
            isPM: function (e) {
                return /^(дня|вечора)$/.test(e)
            },
            meridiem: function (e, t, a) {
                return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"M":
                    case"d":
                    case"DDD":
                    case"w":
                    case"W":
                        return e + "-й";
                    case"D":
                        return e + "-го";
                    default:
                        return e
                }
            },
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        var t = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
            a = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
        return e.defineLocale("ur", {
            months: t,
            monthsShort: t,
            weekdays: a,
            weekdaysShort: a,
            weekdaysMin: a,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd، D MMMM YYYY HH:mm"
            },
            meridiemParse: /صبح|شام/,
            isPM: function (e) {
                return "شام" === e
            },
            meridiem: function (e, t, a) {
                return e < 12 ? "صبح" : "شام"
            },
            calendar: {
                sameDay: "[آج بوقت] LT",
                nextDay: "[کل بوقت] LT",
                nextWeek: "dddd [بوقت] LT",
                lastDay: "[گذشتہ روز بوقت] LT",
                lastWeek: "[گذشتہ] dddd [بوقت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s بعد",
                past: "%s قبل",
                s: "چند سیکنڈ",
                ss: "%d سیکنڈ",
                m: "ایک منٹ",
                mm: "%d منٹ",
                h: "ایک گھنٹہ",
                hh: "%d گھنٹے",
                d: "ایک دن",
                dd: "%d دن",
                M: "ایک ماہ",
                MM: "%d ماہ",
                y: "ایک سال",
                yy: "%d سال"
            },
            preparse: function (e) {
                return e.replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/,/g, "،")
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("uz-latn", {
            months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
            monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
            weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
            weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
            weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Bugun soat] LT [da]",
                nextDay: "[Ertaga] LT [da]",
                nextWeek: "dddd [kuni soat] LT [da]",
                lastDay: "[Kecha soat] LT [da]",
                lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Yaqin %s ichida",
                past: "Bir necha %s oldin",
                s: "soniya",
                ss: "%d soniya",
                m: "bir daqiqa",
                mm: "%d daqiqa",
                h: "bir soat",
                hh: "%d soat",
                d: "bir kun",
                dd: "%d kun",
                M: "bir oy",
                MM: "%d oy",
                y: "bir yil",
                yy: "%d yil"
            },
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("uz", {
            months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
            monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
            weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
            weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Бугун соат] LT [да]",
                nextDay: "[Эртага] LT [да]",
                nextWeek: "dddd [куни соат] LT [да]",
                lastDay: "[Кеча соат] LT [да]",
                lastWeek: "[Утган] dddd [куни соат] LT [да]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Якин %s ичида",
                past: "Бир неча %s олдин",
                s: "фурсат",
                ss: "%d фурсат",
                m: "бир дакика",
                mm: "%d дакика",
                h: "бир соат",
                hh: "%d соат",
                d: "бир кун",
                dd: "%d кун",
                M: "бир ой",
                MM: "%d ой",
                y: "бир йил",
                yy: "%d йил"
            },
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("vi", {
            months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
            monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
            monthsParseExact: !0,
            weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
            weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /sa|ch/i,
            isPM: function (e) {
                return /^ch$/i.test(e)
            },
            meridiem: function (e, t, a) {
                return e < 12 ? a ? "sa" : "SA" : a ? "ch" : "CH"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [năm] YYYY",
                LLL: "D MMMM [năm] YYYY HH:mm",
                LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
                l: "DD/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hôm nay lúc] LT",
                nextDay: "[Ngày mai lúc] LT",
                nextWeek: "dddd [tuần tới lúc] LT",
                lastDay: "[Hôm qua lúc] LT",
                lastWeek: "dddd [tuần rồi lúc] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s tới",
                past: "%s trước",
                s: "vài giây",
                ss: "%d giây",
                m: "một phút",
                mm: "%d phút",
                h: "một giờ",
                hh: "%d giờ",
                d: "một ngày",
                dd: "%d ngày",
                M: "một tháng",
                MM: "%d tháng",
                y: "một năm",
                yy: "%d năm"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function (e) {
                return e
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("x-pseudo", {
            months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
            monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
            monthsParseExact: !0,
            weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
            weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
            weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[T~ódá~ý át] LT",
                nextDay: "[T~ómó~rró~w át] LT",
                nextWeek: "dddd [át] LT",
                lastDay: "[Ý~ést~érdá~ý át] LT",
                lastWeek: "[L~ást] dddd [át] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "í~ñ %s",
                past: "%s á~gó",
                s: "á ~féw ~sécó~ñds",
                ss: "%d s~écóñ~ds",
                m: "á ~míñ~úté",
                mm: "%d m~íñú~tés",
                h: "á~ñ hó~úr",
                hh: "%d h~óúrs",
                d: "á ~dáý",
                dd: "%d d~áýs",
                M: "á ~móñ~th",
                MM: "%d m~óñt~hs",
                y: "á ~ýéár",
                yy: "%d ý~éárs"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("yo", {
            months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
            monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
            weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
            weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
            weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Ònì ni] LT",
                nextDay: "[Ọ̀la ni] LT",
                nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
                lastDay: "[Àna ni] LT",
                lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ní %s",
                past: "%s kọjá",
                s: "ìsẹjú aayá die",
                ss: "aayá %d",
                m: "ìsẹjú kan",
                mm: "ìsẹjú %d",
                h: "wákati kan",
                hh: "wákati %d",
                d: "ọjọ́ kan",
                dd: "ọjọ́ %d",
                M: "osù kan",
                MM: "osù %d",
                y: "ọdún kan",
                yy: "ọdún %d"
            },
            dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
            ordinal: "ọjọ́ %d",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("zh-cn", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日Ah点mm分",
                LLLL: "YYYY年M月D日ddddAh点mm分",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
            },
            meridiem: function (e, t, a) {
                var n = 100 * e + t;
                return n < 600 ? "凌晨" : n < 900 ? "早上" : n < 1130 ? "上午" : n < 1230 ? "中午" : n < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: "[下]ddddLT",
                lastDay: "[昨天]LT",
                lastWeek: "[上]ddddLT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"d":
                    case"D":
                    case"DDD":
                        return e + "日";
                    case"M":
                        return e + "月";
                    case"w":
                    case"W":
                        return e + "周";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s内",
                past: "%s前",
                s: "几秒",
                ss: "%d 秒",
                m: "1 分钟",
                mm: "%d 分钟",
                h: "1 小时",
                hh: "%d 小时",
                d: "1 天",
                dd: "%d 天",
                M: "1 个月",
                MM: "%d 个月",
                y: "1 年",
                yy: "%d 年"
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("zh-hk", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, a) {
                var n = 100 * e + t;
                return n < 600 ? "凌晨" : n < 900 ? "早上" : n < 1130 ? "上午" : n < 1230 ? "中午" : n < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: "[下]ddddLT",
                lastDay: "[昨天]LT",
                lastWeek: "[上]ddddLT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"d":
                    case"D":
                    case"DDD":
                        return e + "日";
                    case"M":
                        return e + "月";
                    case"w":
                    case"W":
                        return e + "週";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s內",
                past: "%s前",
                s: "幾秒",
                ss: "%d 秒",
                m: "1 分鐘",
                mm: "%d 分鐘",
                h: "1 小時",
                hh: "%d 小時",
                d: "1 天",
                dd: "%d 天",
                M: "1 個月",
                MM: "%d 個月",
                y: "1 年",
                yy: "%d 年"
            }
        })
    })
}, function (e, t, a) {
    !function (e, t) {
        t(a(140))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("zh-tw", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, a) {
                var n = 100 * e + t;
                return n < 600 ? "凌晨" : n < 900 ? "早上" : n < 1130 ? "上午" : n < 1230 ? "中午" : n < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: "[下]ddddLT",
                lastDay: "[昨天]LT",
                lastWeek: "[上]ddddLT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"d":
                    case"D":
                    case"DDD":
                        return e + "日";
                    case"M":
                        return e + "月";
                    case"w":
                    case"W":
                        return e + "週";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s內",
                past: "%s前",
                s: "幾秒",
                ss: "%d 秒",
                m: "1 分鐘",
                mm: "%d 分鐘",
                h: "1 小時",
                hh: "%d 小時",
                d: "1 天",
                dd: "%d 天",
                M: "1 個月",
                MM: "%d 個月",
                y: "1 年",
                yy: "%d 年"
            }
        })
    })
}, function (e, t, a) {
    var n = a(0)(a(280), a(327), null, null, null);
    e.exports = n.exports
}, function (e, t, a) {
    "use strict";
    var n = a(316), s = a.n(n), i = a(314), r = a.n(i), d = a(312), o = a.n(d), _ = a(317), u = a.n(_), l = a(318),
        m = a.n(l), c = a(315), h = a.n(c), M = a(313), f = a.n(M), p = {
            TripleCoverage: s.a,
            CoverSlider: r.a,
            AvatarSlider: o.a,
            TripleList: u.a,
            TripleMixed: m.a,
            SextupleMixed: h.a,
            ChoiceArticle: f.a
        };
    t.a = p
}, function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = a(19), s = a.n(n), i = a(306), r = a.n(i), d = a(307), o = a.n(d), _ = a(310), u = a.n(_), l = a(311),
        m = a.n(l), c = {"left-side": r.a, "right-side": o.a, "content-editor-box": u.a, "menu-editor-box": m.a};
    t.default = {
        props: {
            currentWidgets: {
                type: Array, default: function () {
                    return []
                }
            }, widgetInstances: {
                type: Object, default: function () {
                    return {}
                }
            }, widgetStore: {
                type: Object, default: function () {
                    return {}
                }
            }
        }, data: function () {
            return {zoneStatus: {enterTarget: -1}, selectedWidget: null, actions: {dropAction: ""}}
        }, created: function () {
        }, mounted: function () {
            var e = this;
            this.$nextTick(function () {
                this.$root.afterContentMounted()
            }), this.$bus.$on("onWidgetDroped", function (t) {
                switch (e.actions.dropAction) {
                    case"copy":
                        e.insertWidget(t);
                        break;
                    case"move":
                        e.moveEmbededWidget(t);
                        break;
                    case"swap":
                        e.swapEmbededWidget(t)
                }
                e.setSelectedWidget(-1)
            }), this.$bus.$on("onResetDefaultBlock", function (t) {
                e.resetDefaultBlock(t)
            }), this.$bus.$on("onWidgetDragStart", function (t) {
                e.setActions("dropAction", t.dropAction)
            }), this.$bus.$on("onWidgetDragLeave", function (e) {
            }), this.$bus.$on("onWidgetDragEnd", function (t) {
                e.removeTmpWidget()
            }), this.$bus.$on("onSelectWidget", function (t) {
                e.setSelectedWidget(t)
            }), this.$bus.$on("onDeleteWidget", function (t) {
                e.deleteWidget(t), e.setSelectedWidget(-1)
            }), this.$bus.$on("onCloneWidget", function (t) {
                var a = JSON.parse(s()(e.currentWidgets[t.currentIndex].content));
                t.widgetData = a, e.insertWidget(t)
            }), this.$bus.$on("onUpdateWidget", function (t) {
                e.updateWidget(t)
            })
        }, methods: {
            insertWidget: function (e) {
                var t = (e.currentIndex, e.newIndex), a = e.widgetData, n = {vm: a.key, content: JSON.parse(s()(a))};
                "" === t || t < 0 ? this.currentWidgets.push(n) : this.currentWidgets.splice(t, 0, n)
            }, cloneWidget: function (e) {
                var t = e.currentIndex, a = e.newIndex;
                this.currentWidgets.splice(a, 0, this.currentWidgets[t])
            }, updateWidget: function (e) {
                var t = e.index, a = e.data, n = this;
                this.$nextTick(function () {
                    n.$set(n.currentWidgets[t].content, "data", JSON.parse(s()(a)))
                })
            }, moveEmbededWidget: function (e) {
                var t = e.currentIndex, a = e.newIndex;
                e.widgetData;
                if (t != a) {
                    var n = t > a ? 1 : -1;
                    n = n < 0 ? 0 : n, this.currentWidgets.splice(a, 0, this.currentWidgets[t]), this.$delete(this.currentWidgets, t + n)
                }
            }, swapEmbededWidget: function (e) {
                var t = e.currentIndex, a = e.newIndex;
                e.widgetData;
                if (t != a) {
                    var n = this.currentWidgets[a];
                    this.$set(this.currentWidgets, a, this.currentWidgets[t]), this.$set(this.currentWidgets, t, n), n = null
                }
            }, resetDefaultBlock: function (e) {
                var t = e.embedIndex;
                this.zoneStatus.enterTarget = t
            }, removeTmpWidget: function () {
                this.zoneStatus.enterTarget = -1
            }, setSelectedWidget: function (e) {
                this.selectedWidget = e
            }, setActions: function (e, t) {
                this.$set(this.actions, e, t)
            }, deleteWidget: function (e) {
                this.$delete(this.currentWidgets, e)
            }
        }, events: {}, components: c, beforeDestroy: function () {
            this.$bus.$off("onWidgetDroped"), this.$bus.$off("onResetDefaultBlock"), this.$bus.$off("onWidgetDragLeave"), this.$bus.$off("onWidgetDragEnd"), this.$bus.$off("onSelectWidget"), this.$bus.$off("onDeleteWidget"), this.$bus.$off("onCloneWidget")
        }
    }
}, function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = a(144), s = a(141), i = a(309), r = a.n(i), d = a(268), o = a(267), _ = a.n(o),
        u = {"default-widget": _.a, "widget-tool": r.a};
    t.default = {
        mixins: [n.a],
        directives: {draggable: s.a},
        props: {
            widgetCount: {type: Number, defulat: 0},
            widget: {
                type: Object, default: function () {
                    return {}
                }
            },
            index: {type: [String, Number], default: "1"},
            zoneStatus: {type: Object, default: {enterTarget: -1}},
            selectedWidget: {type: Number, default: null}
        },
        data: function () {
            return {allow: "drop", hashId: "", isOnHover: !1}
        },
        created: function () {
            this.attachId()
        },
        mounted: function () {
        },
        methods: {
            getVm: function (e) {
                return d.a[e]
            }, attachId: function () {
                this.hashId = "widget-uid-" + this._uid
            }, checkDropBlockDisplay: function () {
                if (!(this.zoneStatus.enterTarget < 0)) return this.index == this.zoneStatus.enterTarget
            }, isLast: function () {
                if (this.zoneStatus.enterTarget === this.index + 1) return this.widgetCount == this.zoneStatus.enterTarget
            }, onHover: function (e, t) {
                "edit" === this.$root.getDisplayMode() && (this.isOnHover = t)
            }
        },
        computed: {},
        components: u
    }
}, function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = a(305), s = a.n(n), i = a(267), r = a.n(i), d = {"drop-zone-component": s.a, "default-widget": r.a};
    t.default = {
        props: {
            zoneList: {type: Number, default: 2}, currentWidgets: {
                type: Array, default: function () {
                    return []
                }
            }, zoneStatus: {type: Object, default: {enterTarget: -1}}, selectedWidget: {type: Number, default: null}
        }, data: function () {
            return {}
        }, created: function () {
        }, methods: {
            getWidgetCount: function () {
                return this.currentWidgets.length
            }, getWidgetId: function (e) {
                return e.content.page_widget_id
            }, getHashKey: function (e, t) {
                return [this.$root.getCurrentPage().id, t, e.vm].join("-")
            }, showDefaultDropWidget: function (e, t) {
                var a = [e, t];
                this.$emit("appendTmpWidget", a)
            }
        }, mounted: function () {
        }, components: d
    }
}, function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = a(308), s = a.n(n), i = {"widget-store-block": s.a};
    t.default = {
        props: {
            widgetStore: {
                type: Object, default: function () {
                    return {}
                }
            }
        }, data: function () {
            return {}
        }, created: function () {
        }, methods: {
            openPanel: function () {
                "preview" != this.$root.displayMode && $(".pageWidgetStore").toggleClass("open")
            }
        }, components: i
    }
}, function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = a(36), s = a(143), i = a(141);
    t.default = {
        mixins: [s.a], directives: {draggable: i.a}, props: {
            widget: {
                type: Object, default: function () {
                    return {}
                }
            }
        }, data: function () {
            return {dropAction: "copy"}
        }, created: function () {
        }, methods: {
            getSrc: function () {
                return this.widget.cover.length > 0 ? this.widget.cover : [n.a.WidgetThumb, this.widget.id].join("")
            }, getWidgetKey: function () {
                return this.widget.key
            }
        }
    }
}, function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = a(143), s = a(141);
    a(36);
    t.default = {
        mixins: [n.a], directives: {draggable: s.a}, props: {
            widget: {
                type: Object, default: function () {
                    return {}
                }
            }, selectedWidget: {type: Number, default: null}, index: {type: [String, Number], default: "1"}
        }, data: function () {
            return {dropAction: "move"}
        }, created: function () {
        }, methods: {
            getToolbarDisplay: function () {
                return this.selectedWidget === this.index
            }, deleteWidget: function () {
                this.$bus.$emit("onDeleteWidget", this.index)
            }, cloneWidget: function () {
                var e = {currentIndex: this.index, newIndex: this.index + 1};
                this.$bus.$emit("onCloneWidget", e)
            }
        }
    }
}, function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = a(293), s = a.n(n), i = a(291), r = a.n(i), d = a(292), o = a.n(d), _ = a(145), u = a.n(_), l = a(20),
        m = a.n(l), c = a(19), h = a.n(c), M = a(14), f = a(36);
    t.default = {
        props: {}, data: function () {
            return {
                tmpData: [],
                widgetName: "",
                widgetConfig: {version: 1, tabSize: 1, tabSizeMin: 1, rowSize: 1},
                index: -1,
                activeIndex: 1,
                editorMode: "",
                activeAsyncLock: !1,
                syncMappingColumn: {
                    title: "title",
                    description: "description",
                    author: "author",
                    comments: "comments",
                    pageview: "pageview",
                    image: "image",
                    link: "link"
                }
            }
        }, mounted: function () {
            var e = this;
            this.$bus.$on("onContentEditorOpen", function (t) {
                e.open(t)
            })
        }, methods: {
            moveTo: function (e) {
                var t = this.tmpData.length, a = parseInt(this.activeIndex) + parseInt(e);
                if (!(a < 1 || a > t)) {
                    var n = this.activeIndex - 1, s = a - 1, i = [this.tmpData[s], this.tmpData[n]];
                    this.tmpData[n] = i[0], this.tmpData[s] = i[1], this.activeIndex = a
                }
            }, addTab: function () {
                var e = JSON.parse(h()(this.tmpData[this.tmpData.length - 1]));
                this.tmpData.push(e), this.widgetConfig.tabSize++
            }, delTab: function (e) {
                this.widgetConfig.tabSize <= this.widgetConfig.tabSizeMin || (this.tmpData.splice(e - 1, 1), this.widgetConfig.tabSize--, e < this.activeIndex ? this.activeIndex-- : e > this.widgetConfig.tabSize ? this.activeIndex = this.widgetConfig.tabSize : this.activeIndex = e)
            }, open: function (e) {
                var t = JSON.parse(h()(e.content.data));
                this.widgetName = e.content.name, this.tmpData = t, e.content.widgetConfig.tabSize = this.tmpData.length > 0 ? this.tmpData.length : e.content.widgetConfig.tabSize, this.widgetConfig = this.vaildConfig(e.content.widgetConfig), this.index = e.index, this.editorMode = this.widgetConfig.rowSize <= 1 ? "base" : "multi", this.activeIndex = 1, this.$nextTick(function () {
                    $("#editor-box").modal("show")
                })
            }, vaildConfig: function (e) {
                return {
                    version: e.version > 1 ? e.version : 1,
                    tabSize: e.tabSize > 1 ? e.tabSize : 1,
                    tabSizeMin: e.tabSizeMin > 1 ? e.tabSizeMin : 1,
                    rowSize: e.rowSize > 1 ? e.rowSize : 1,
                    tabExtendable: !0 === e.tabExtendable,
                    syncMappingColumn: e.hasOwnProperty("syncMappingColumn") ? e.syncMappingColumn : {}
                }
            }, save: function () {
                var e = {index: this.index, data: this.tmpData};
                this.$bus.$emit("onUpdateWidget", e), this.$nextTick(function () {
                    $("#editor-box").modal("hide")
                })
            }, selectTab: function (e) {
                this.activeIndex = e
            }, extendColumn: function (e, t, a) {
                if (t + 1 <= a && void 0 === e[t]) {
                    var n = {}, s = m()(e[t - 1]), i = !0, r = !1, d = void 0;
                    try {
                        for (var o, _ = u()(s); !(i = (o = _.next()).done); i = !0) {
                            n[o.value] = ""
                        }
                    } catch (e) {
                        r = !0, d = e
                    } finally {
                        try {
                            !i && _.return && _.return()
                        } finally {
                            if (r) throw d
                        }
                    }
                    e.push(n)
                }
                return !0
            }, getOlClass: function () {
                var e = ["form-horizontal"];
                return "multi" == this.editorMode && e.push("order-list"), e
            }, syncBloggerData: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                if (!this.checkAsyncLock()) {
                    var t = this, n = f.a.ApiSyncBlogger, s = {};
                    if (this.openLock(), 0 === e.length) return void Message.warning("請給我Blogger UID", function () {
                        t.closeLock()
                    }, 1500);
                    s.uid = e, a.i(M.a)(n, s, function (e, a) {
                        if (200 !== e.code) return void Message.warning("Oppps something is wrong...", function () {
                            t.closeLock()
                        }, 1500);
                        t.afterSyncData(e.data.blogger), Message.success("抓到啦!!!!!", function () {
                            t.closeLock()
                        }, 1500)
                    }, "GET")
                }
            }, syncPostData: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                if (!this.checkAsyncLock()) {
                    var n = this, s = f.a.ApiSyncPost;
                    if (this.openLock(), 0 === e.length) return void Message.warning("請給我Blogger UID", function () {
                        n.closeLock()
                    }, 1500);
                    if (0 === t) return void Message.warning("請給我Post ID", function () {
                        n.closeLock()
                    }, 1500);
                    var i = [{uid: e, post_id: t}];
                    a.i(M.a)(s, {list: i}, function (e, a) {
                        200 !== e.code && Message.warning("Oppps something is wrong...", function () {
                            n.closeLock()
                        }, 1500), n.afterSyncData(e.data[t]), Message.success("抓到啦!!!!!", function () {
                            n.closeLock()
                        }, 1500)
                    }, "POST")
                }
            }, afterSyncData: function (e) {
                var t = (m.a, o.a, r.a), a = this.tmpData[this.activeIndex - 1],
                    n = (this.activeIndex, this.widgetConfig.syncMappingColumn), i = !0, d = !1, _ = void 0;
                try {
                    for (var l, c = u()(t(e)); !(i = (l = c.next()).done); i = !0) {
                        var h = l.value, M = s()(h, 2), f = M[0], p = M[1];
                        a.hasOwnProperty(n[f]) && (a[n[f]] = p)
                    }
                } catch (e) {
                    d = !0, _ = e
                } finally {
                    try {
                        !i && c.return && c.return()
                    } finally {
                        if (d) throw _
                    }
                }
            }, checkAsyncLock: function () {
                return this.activeAsyncLock
            }, openLock: function () {
                this.activeAsyncLock = !0
            }, closeLock: function () {
                this.activeAsyncLock = !1
            }
        }, beforeDestroy: function () {
            this.$bus.$off("onContentEditorOpen"), this.$bus.$off("onUpdateWidget")
        }
    }
}, function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = a(20), s = a.n(n), i = a(19), r = a.n(i), d = a(61), o = a(140);
    t.default = {
        mixins: [d.a], props: {
            menuTabs: {
                type: Object, default: function () {
                    return {}
                }
            }
        }, data: function () {
            return {
                tmpData: {},
                currentTabContent: {},
                activeIndex: null,
                pageSize: 0,
                editorMode: "single",
                sortList: [],
                inputTitle: "",
                inputPublishTime: "",
                inputOfflineTime: "",
                titleLimit: 5,
                pageLimit: 10,
                defaultTabData: {
                    id: 0,
                    channel_id: 1,
                    color: "#000",
                    description: "DESC",
                    name: "TITLE",
                    sort: 0,
                    status: 1,
                    widget_limit: 10,
                    updated_at: 0,
                    created_at: 0,
                    offline_time: 0,
                    publish_time: 0
                }
            }
        }, created: function () {
            var e = this.$root.getChannelData();
            this.pageLimit = e.page_limit
        }, mounted: function () {
            var e = this;
            this.$bus.$on("onMenuEditorOpen", function (t) {
                e.openLightbox(t)
            }), $("#menu-box").on("hidden.bs.modal", function (e) {
                this.activeIndex = null
            })
        }, methods: {
            getPageSize: function () {
                return this.pageSize
            }, openLightbox: function (e) {
                this.tmpData = JSON.parse(r()(e.tabs)), this.sortList = JSON.parse(r()(e.sortList)), this.pageSize = this.sortList.length, this.activeIndex = e.activeIndex || 0, this.getCurrentTabContent(), this.$nextTick(function () {
                    $("#menu-box").modal("show")
                }), this.selectTab(this.activeIndex)
            }, getCurrentTabContent: function () {
                var e = this.sortList[this.activeIndex];
                return this.currentTabContent = this.tmpData[e], this.currentTabContent
            }, selectTab: function (e) {
                this.activeIndex = e, this.getCurrentTabContent(), this.inputTitle = this.currentTabContent.name, this.$nextTick(function () {
                    var e = o.unix(Number(this.currentTabContent.publish_time)).format("YYYY-MM-DD H:mm:ss"),
                        t = o.unix(Number(this.currentTabContent.offline_time)).format("YYYY-MM-DD H:mm:ss");
                    this.inputPublishTime = e, this.inputOfflineTime = t
                })
            }, getSize: function () {
                return s()(this.tmpData).length
            }, moveTo: function (e) {
                var t = this.sortList.length, a = parseInt(this.activeIndex) + parseInt(e);
                if (!(a < 0 || a >= t)) {
                    var n = JSON.parse(r()(this.sortList)), s = [n[a], n[this.activeIndex]];
                    n[this.activeIndex] = s[0], n[a] = s[1], this.sortList = n, this.activeIndex = a
                }
            }, addTab: function () {
                if (this.pageSize >= this.pageLimit) return void Message.warning("分頁已達上限");
                for (var e = JSON.parse(r()(this.defaultTabData)), t = o().unix(); this.tmpData.hasOwnProperty(t);) t++;
                e.id = t, this.tmpData[t] = e, this.sortList.push(t), this.selectTab(this.sortList.length - 1), this.pageSize++
            }, deleteTab: function (e) {
                if (!(this.getPageSize() <= 1)) {
                    e == this.activeIndex && e > 0 && this.selectTab(e - 1);
                    var t = this.sortList[e];
                    this.$nextTick(function () {
                        this.pageSize--, this.$set(this.tmpData[t], "status", 2), this.$delete(this.sortList, e)
                    })
                }
            }, save: function () {
                var e = {newMenuTabs: this.tmpData, sortList: this.sortList};
                this.$root.updateMenuData(e), this.$nextTick(function () {
                    $("#menu-box").modal("hide")
                })
            }, getOlClass: function () {
                var e = ["form-horizontal"];
                return "multi" == this.editorMode && e.push("order-list"), e
            }, transferTimeToDate: function (e) {
                return this.$_mixinTimestampToDate(e, "/")
            }, getDuraction: function (e, t) {
                var a = t - e;
                return Math.floor(a / 86400)
            }
        }, watch: {
            inputTitle: function (e) {
                this.inputTitle = e.substring(0, this.titleLimit), this.currentTabContent.name = this.inputTitle
            }, inputPublishTime: function (e) {
                this.currentTabContent.publish_time = o(e).unix()
            }, inputOfflineTime: function (e) {
                this.currentTabContent.offline_time = o(e).unix()
            }
        }, beforeDestroy: function () {
            this.$bus.$off("onMenuEditorOpen")
        }
    }
}, function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = a(61);
    t.default = {
        mixins: [n.a], props: {
            content: {
                type: Object, default: function () {
                    return {}
                }
            }, hashId: {type: String}
        }, data: function () {
            return {}
        }, created: function () {
        }, mounted: function () {
            this.slick()
        }, beforeUpdate: function () {
            this.unSlick()
        }, updated: function () {
            this.slick()
        }, methods: {
            getSlider: function () {
                return $("#" + this.hashId + " .slider")
            }, slick: function () {
                var e = this.content.data.length > 6 ? 6 : this.content.data.length;
                this.getSlider().slick({
                    infinite: !1,
                    speed: 300,
                    slidesToShow: e,
                    slidesToScroll: 4,
                    responsive: [{
                        breakpoint: 1200,
                        settings: {slidesToShow: 6, slidesToScroll: 4, infinite: !0}
                    }, {breakpoint: 920, settings: {slidesToShow: 4, slidesToScroll: 1}}, {
                        breakpoint: 660,
                        settings: {slidesToShow: 3, slidesToScroll: 1}
                    }, {breakpoint: 460, settings: {slidesToShow: 2, slidesToScroll: 1}}]
                })
            }, unSlick: function () {
                this.getSlider().slick("unslick")
            }
        }
    }
}, function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = a(286), s = a(319), i = a.n(s);
    t.default = {
        components: {Pagination: i.a}, data: function () {
            return {choiceArticleList: [], totalPage: 0, currentPage: 1, isFetch: !1}
        }, computed: {
            componentUniqueId: function () {
                return (new Date).getTime().toString()
            }
        }, created: function () {
            this.$bus.$on("changePage-" + this.componentUniqueId, this.changePageHandler), this.isFetch = !0
        }, destroyed: function () {
            this.choiceArticleList = [], this.totalPage = 0, this.currentPage = 1, this.isFetch = !1, this.$bus.$on("changePage-" + this.componentUniqueId, this.changePageHandler)
        }, watch: {
            isFetch: function (e, t) {
                if (e) {
                    var s = {page: this.currentPage}, i = this.udpateWidgetContent,
                        r = {completeCallback: this.disableIsFetch};
                    a.i(n.a)(s, i, r)
                }
            }
        }, methods: {
            changePageHandler: function (e) {
                this.isFetch = !0, this.currentPage = e
            }, udpateWidgetContent: function (e, t, a) {
                200 === e.code && "array" === $.type(e.data) && ("array" === $.type(e.data) && 0 === e.data.length || "object" === $.type(e.data[0]) && e.data[0].hasOwnProperty("totalPage") && e.data[0].hasOwnProperty("items") && (this.totalPage = e.data[0].totalPage, this.choiceArticleList = e.data[0].items))
            }, disableIsFetch: function (e, t) {
                this.isFetch = !1
            }
        }
    }
}, function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = a(61), s = a(289);
    t.default = {
        mixins: [n.a], props: {
            content: {
                type: Object, default: function () {
                    return {}
                }
            }, hashId: {type: String}
        }, data: function () {
            return {mode: ""}
        }, created: function () {
        }, mounted: function () {
            var e = this;
            this.$nextTick(function () {
                e.mode = e.$root.getDisplayMode(), "edit" === e.mode ? $("#" + e.hashId + " .slider").slick() : new s.a(e.hashId)
            })
        }, updated: function () {
        }, methods: {}
    }
}, function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = a(144), s = a(141);
    t.default = {
        mixins: [n.a],
        directives: {draggable: s.a},
        props: {
            index: {
                type: [String, Number], default: function () {
                    return 0
                }
            }
        },
        data: function () {
            return {}
        },
        created: function () {
        },
        methods: {}
    }
}, function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = a(20), s = a.n(n), i = a(61);
    t.default = {
        mixins: [i.a], props: {
            content: {
                type: Object, default: function () {
                    return {}
                }
            }
        }, data: function () {
            return {adCodes: {}}
        }, created: function () {
        }, mounted: function () {
            this.$nextTick(function () {
                s()(this.adCodes).length > 0 && this.$root.registerAd(this.adCodes)
            })
        }, methods: {
            checkContentType: function (e, t) {
                var a = e.hasOwnProperty(t);
                if ("googleAd" == t) {
                    var n = e.googleAd, s = {label: n.label, uid: n.uid, size: [parseInt(n.width), parseInt(n.height)]};
                    this.adCodes[n.uid] = s
                }
                return a
            }
        }
    }
}, function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = a(61), s = a(36);
    t.default = {
        mixins: [n.a], props: {
            content: {
                type: Object, default: function () {
                    return {}
                }
            }, hashId: {type: String}
        }, data: function () {
            return {mode: "edit", sortList: {}}
        }, created: function () {
            this.mode = this.$root.getDisplayMode()
        }, mounted: function () {
            if ("edit" !== this.mode) {
                var e = this.syncDataCallback, t = s.a.ApiGetPageViewCommentCount, a = [], n = this;
                this.content.data.forEach(function (e, t) {
                    e.hasOwnProperty("blogger_uid") && e.hasOwnProperty("sync_post_id") && (a.push({
                        blogger_id: parseInt(e.blogger_id),
                        uid: e.blogger_uid,
                        post_id: parseInt(e.sync_post_id)
                    }), n.sortList[e.sync_post_id] = t)
                }), a.length > 0 && this.$_mixinSyncData(t, {list: a}, e)
            }
        }, methods: {
            syncDataCallback: function (e, t) {
                var a = e.data.pageview, n = e.data.comment, i = {};
                for (var r in a) {
                    var d = this.sortList[r];
                    if (a.hasOwnProperty(r)) {
                        var o = a[r];
                        this.content.data[d].pageview = o.count
                    }
                    if (n.hasOwnProperty(r)) {
                        var _ = n[r];
                        this.content.data[d].comments = _.count
                    }
                }
                this.content.time.updated_at = e.data.updated_at, i[this.content.content_id] = {
                    page_widget_id: this.content.page_widget_id,
                    page_id: this.content.page_id,
                    content: this.content.data
                }, this.$_mixinAfterSyncData(s.a.ApiSyncUpdatedData, {updatedList: i})
            }, redirectToBlog: function (e) {
                return void 0 === e || e.length < 1 ? [s.a.Protocol, s.a.ProductionHost].join("") : [s.a.Protocol, e, ".", s.a.ProductionHost].join("")
            }
        }
    }
}, function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = a(61);
    t.default = {
        mixins: [n.a], props: {
            content: {
                type: Object, default: function () {
                    return {}
                }
            }, hashId: {type: String}
        }, data: function () {
            return {}
        }, created: function () {
        }, methods: {}
    }
}, function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = a(20), s = a.n(n), i = a(61);
    t.default = {
        mixins: [i.a], props: {
            content: {
                type: Object, default: function () {
                    return {}
                }
            }, hashId: {type: String}
        }, data: function () {
            return {adCodes: {}, tripleMixedSwitchVal: 0}
        }, created: function () {
        }, mounted: function () {
            this.$nextTick(function () {
                s()(this.adCodes).length > 0 && this.$root.registerAd(this.adCodes)
            })
        }, updated: function () {
        }, methods: {
            checkContentType: function (e, t) {
                var a = e.hasOwnProperty(t);
                if ("googleAd" == t) {
                    var n = e.googleAd, s = {label: n.label, uid: n.uid, size: [parseInt(n.width), parseInt(n.height)]};
                    this.adCodes[n.uid] = s
                }
                return a
            }, switchTitle: function (e) {
                this.tripleMixedSwitchVal = 0 == e ? 0 : 1
            }, clickGa: function (e, t, a) {
                ga("yamall.send", "event", e, t, a)
            }
        }
    }
}, function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = {
        props: {
            propsTotalPage: {
                type: Number,
                default: 0
            },
            propsPaginationButtonTotal: {type: Number, default: 3},
            propsParentComponentUniqueId: {type: String, default: ""}
        }, data: function () {
            return {
                currentPage: 1,
                totalPage: this.propsTotalPage,
                activePaginationButtonIndex: 0,
                paginationButtonStartPage: 1
            }
        }, computed: {
            paginationButtonTotal: function () {
                return this.totalPage >= this.propsPaginationButtonTotal ? this.propsPaginationButtonTotal : this.totalPage
            }, paginationButtonLastIndex: function () {
                return this.paginationButtonTotal - 1
            }
        }, destroyed: function () {
            this.currentPage = 1, this.activePaginationButtonIndex = 0, this.paginationButtonStartPage = 1
        }, watch: {
            currentPage: function (e) {
                this.$bus.$emit("changePage-" + this.propsParentComponentUniqueId, this.currentPage)
            }
        }, methods: {
            navigatedPage: function (e) {
                var t = e.target, a = t.dataset;
                a.hasOwnProperty("paginationButtonFirstPage") && (this.currentPage = 1, this.activePaginationButtonIndex = 0, this.paginationButtonStartPage = 1), a.hasOwnProperty("paginationButtonLastPage") && (this.currentPage = this.totalPage, this.activePaginationButtonIndex = this.paginationButtonLastIndex, this.paginationButtonStartPage = this.totalPage - this.paginationButtonLastIndex)
            }, specifiedPage: function (e) {
                var t = e.target, a = t.dataset, n = Number(a.paginationPages.trim()),
                    s = Number(a.paginationButtonIndex.trim());
                a.hasOwnProperty("paginationPages") && (this.currentPage = n), a.hasOwnProperty("paginationButtonIndex") && (this.activePaginationButtonIndex = s, 0 === s && 1 !== this.currentPage && (this.activePaginationButtonIndex++, this.paginationButtonStartPage--), s === this.paginationButtonLastIndex && this.totalPage - this.currentPage > 0 && (this.activePaginationButtonIndex--, this.paginationButtonStartPage++))
            }
        }
    }
}, function (e, t, a) {
    "use strict";

    function n(e, t, n) {
        var r = {};
        arguments.length < 2 || "object" !== $.type(e) || $.isEmptyObject(e) || "function" === $.type(t) && (void 0 === n || "object" === $.type(n) && !$.isEmptyObject(n)) && (r.url = i.a.getChoiceArticleList, r.method = "GET", r.data = e, a.i(s.a)(r, t, n))
    }

    a.d(t, "a", function () {
        return n
    });
    var s = a(288), i = a(36)
}, function (e, t, a) {
    "use strict";
    var n = (a(142), a(36)), s = null, i = null, r = {}, d = "", o = new Image;
    o.src = n.a.DragImgUrl;
    var _ = 0, u = window.innerHeight, l = u / 2, m = function () {
        return "default-widget" === i.$options._componentTag ? i.index : "default-widget" !== i.$options._componentTag && "bottom" === d ? i.index + 1 : i.index
    }, c = function (e) {
        var t = e.getBoundingClientRect(), a = 0, n = 0, s = 0;
        return a += t.top || 0, n = t.top + t.height / 2, s = t.bottom, {top: a, middle: n, bottom: s}
    }, h = function (e) {
        var t = window.scrollY, a = .18 * u, n = l + a, s = l - a;
        e > n ? t += 1.6 : e < s && (t -= 1.6), t <= 0 || window.innerHeight + t >= document.body.offsetHeight || window.scrollTo(0, t)
    }, M = {
        add: function (e, t, a) {
            var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            e.addEventListener(t, a, n)
        }, remove: function (e, t, a) {
            e.removeEventListener(t, a)
        }, onClick: function (e, t, a) {
            var n = a.context;
            if (void 0 !== t.value.action) switch (t.value.action) {
                case"select":
                    n.$_mixinCatchClick(e)
            }
        }, onMouseover: function (e, t, a) {
            var n = a.context;
            if (void 0 !== t.value.action) switch (t.value.action) {
                case"select":
                    n.$_mixinCatchMouseover()
            }
        }, onDragStart: function (e, t, a) {
            var n = e.target, _ = a.context;
            d = "", s = _, s.$el = n, r = {}, i = null, l = window.innerHeight / 2, o.src = ["/static/images/widget_cover/", _.widget.widget_key, ".jpg"].join(""), e.dataTransfer.setDragImage(o, 86, 57), _.$_mixinCatchDragStart()
        }, onDragEnter: function (e, t, a) {
            var n = (e.currentTarget, t.value, a.context);
            i = n, r = c(i.$el), _++, n.$_mixinCatchDragEnter()
        }, onDragOver: function (e, t, a) {
            e.preventDefault(), e.stopPropagation()
        }, onDrag: function (e, t, a) {
            var n = a.context;
            e.target;
            if (h(e.clientY), null != i && "drop" === i.allow) {
                if (e.clientY > r.middle) {
                    if ("bottom" === d) return;
                    d = "bottom"
                } else if (e.clientY > r.top) {
                    if ("top" === d) return;
                    d = "top"
                }
                var s = m();
                n.$_mixinResetDefaultBlock({embedIndex: s})
            }
        }, onDragLeave: function (e, t, a) {
            e.target;
            a.context.$_mixinCatchDragLeave()
        }, onDragEnd: function (e, t, a) {
            var n = (e.target, a.context);
            s = null, n.$_mixinCatchDragEnd()
        }, onDrop: function (e, t, a) {
            e.preventDefault();
            var n = a.context, i = m(), r = {currentIndex: s.index, newIndex: i, dragedVm: s};
            n.$_mixinCatchDrop(r)
        }
    };
    t.a = M
}, function (e, t, a) {
    "use strict";

    function n(e, t, a) {
        var e = JSON.parse(i()(e)), n = $('meta[name="csrf-token"]').attr("content");
        arguments.length < 2 || "object" !== $.type(e) || $.isEmptyObject(e) || e.hasOwnProperty("url") && "" !== e.url && e.hasOwnProperty("method") && "" !== e.method && e.hasOwnProperty("data") && !$.isEmptyObject(e.data) && "function" === $.type(t) && (void 0 === a || "object" === $.type(a) && !$.isEmptyObject(a)) && (void 0 !== n && "" !== n && "GET" !== e.method && (e.data._csrf = n), e.dataType = "json", e.success = function (e, a, n) {
            t(e, a, n)
        }, a.hasOwnProperty("errorCallback") && "function" === $.type(a.errorCallback) && (e.error = function (e, t, n) {
            a.errorCallback(n, t, e)
        }), a.hasOwnProperty("completeCallback") && "function" === $.type(a.completeCallback) && (e.complete = function (e, t) {
            a.completeCallback(t, e)
        }), $.ajax(e))
    }

    var s = a(19), i = a.n(s);
    t.a = n
}, function (e, t, a) {
    "use strict";
    var n = function (e) {
        var t, a, n = function () {
            t = $("#" + e + " .slider"), a = $("#" + e + " .coverSlider__pointer li")
        }, s = function () {
            t.slick({
                infinite: !0, speed: 300, slidesToShow: 1, autoplay: !0, customPaging: function (e, t) {
                    i(e, t)
                }, dots: !0
            }), t.on("beforeChange", function (e, t, n, s) {
                r(a[s])
            })
        }, i = function (e, t) {
            a.mouseenter(function (t) {
                var n = $(this).attr("data-pindex") - 1;
                e.slickGoTo(parseInt(n)), r(a[n])
            })
        }, r = function (e) {
            $(e).children("div").addClass("theme-border-color").end().siblings().children("div").removeClass("theme-border-color").end(), $(e).children("div").addClass("active").end().siblings().children("div").removeClass("active").end()
        };
        !function () {
            n(), s(), r(a[0])
        }()
    };
    t.a = n
}, function (e, t, a) {
    e.exports = {default: a(295), __esModule: !0}
}, function (e, t, a) {
    e.exports = {default: a(296), __esModule: !0}
}, function (e, t, a) {
    e.exports = {default: a(297), __esModule: !0}
}, function (e, t, a) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {default: e}
    }

    t.__esModule = !0;
    var s = a(290), i = n(s), r = a(145), d = n(r);
    t.default = function () {
        function e(e, t) {
            var a = [], n = !0, s = !1, i = void 0;
            try {
                for (var r, o = (0, d.default)(e); !(n = (r = o.next()).done) && (a.push(r.value), !t || a.length !== t); n = !0) ;
            } catch (e) {
                s = !0, i = e
            } finally {
                try {
                    !n && o.return && o.return()
                } finally {
                    if (s) throw i
                }
            }
            return a
        }

        return function (t, a) {
            if (Array.isArray(t)) return t;
            if ((0, i.default)(Object(t))) return e(t, a);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }()
}, function (e, t, a) {
    a(63), a(62), e.exports = a(299)
}, function (e, t, a) {
    a(63), a(62), e.exports = a(300)
}, function (e, t, a) {
    a(301), e.exports = a(1).Object.entries
}, function (e, t, a) {
    a(302), e.exports = a(1).Object.values
}, function (e, t, a) {
    var n = a(146), s = a(6)("iterator"), i = a(21);
    e.exports = a(1).getIteratorMethod = function (e) {
        if (void 0 != e) return e[s] || e["@@iterator"] || i[n(e)]
    }
}, function (e, t, a) {
    var n = a(13), s = a(298);
    e.exports = a(1).getIterator = function (e) {
        var t = s(e);
        if ("function" != typeof t) throw TypeError(e + " is not iterable!");
        return n(t.call(e))
    }
}, function (e, t, a) {
    var n = a(146), s = a(6)("iterator"), i = a(21);
    e.exports = a(1).isIterable = function (e) {
        var t = Object(e);
        return void 0 !== t[s] || "@@iterator" in t || i.hasOwnProperty(n(t))
    }
}, function (e, t, a) {
    var n = a(12), s = a(147)(!0);
    n(n.S, "Object", {
        entries: function (e) {
            return s(e)
        }
    })
}, function (e, t, a) {
    var n = a(12), s = a(147)(!1);
    n(n.S, "Object", {
        values: function (e) {
            return s(e)
        }
    })
}, function (e, t, a) {
    function n(e) {
        return a(s(e))
    }

    function s(e) {
        var t = i[e];
        if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
        return t
    }

    var i = {
        "./af": 148,
        "./af.js": 148,
        "./ar": 155,
        "./ar-dz": 149,
        "./ar-dz.js": 149,
        "./ar-kw": 150,
        "./ar-kw.js": 150,
        "./ar-ly": 151,
        "./ar-ly.js": 151,
        "./ar-ma": 152,
        "./ar-ma.js": 152,
        "./ar-sa": 153,
        "./ar-sa.js": 153,
        "./ar-tn": 154,
        "./ar-tn.js": 154,
        "./ar.js": 155,
        "./az": 156,
        "./az.js": 156,
        "./be": 157,
        "./be.js": 157,
        "./bg": 158,
        "./bg.js": 158,
        "./bm": 159,
        "./bm.js": 159,
        "./bn": 160,
        "./bn.js": 160,
        "./bo": 161,
        "./bo.js": 161,
        "./br": 162,
        "./br.js": 162,
        "./bs": 163,
        "./bs.js": 163,
        "./ca": 164,
        "./ca.js": 164,
        "./cs": 165,
        "./cs.js": 165,
        "./cv": 166,
        "./cv.js": 166,
        "./cy": 167,
        "./cy.js": 167,
        "./da": 168,
        "./da.js": 168,
        "./de": 171,
        "./de-at": 169,
        "./de-at.js": 169,
        "./de-ch": 170,
        "./de-ch.js": 170,
        "./de.js": 171,
        "./dv": 172,
        "./dv.js": 172,
        "./el": 173,
        "./el.js": 173,
        "./en-au": 174,
        "./en-au.js": 174,
        "./en-ca": 175,
        "./en-ca.js": 175,
        "./en-gb": 176,
        "./en-gb.js": 176,
        "./en-ie": 177,
        "./en-ie.js": 177,
        "./en-nz": 178,
        "./en-nz.js": 178,
        "./eo": 179,
        "./eo.js": 179,
        "./es": 182,
        "./es-do": 180,
        "./es-do.js": 180,
        "./es-us": 181,
        "./es-us.js": 181,
        "./es.js": 182,
        "./et": 183,
        "./et.js": 183,
        "./eu": 184,
        "./eu.js": 184,
        "./fa": 185,
        "./fa.js": 185,
        "./fi": 186,
        "./fi.js": 186,
        "./fo": 187,
        "./fo.js": 187,
        "./fr": 190,
        "./fr-ca": 188,
        "./fr-ca.js": 188,
        "./fr-ch": 189,
        "./fr-ch.js": 189,
        "./fr.js": 190,
        "./fy": 191,
        "./fy.js": 191,
        "./gd": 192,
        "./gd.js": 192,
        "./gl": 193,
        "./gl.js": 193,
        "./gom-latn": 194,
        "./gom-latn.js": 194,
        "./gu": 195,
        "./gu.js": 195,
        "./he": 196,
        "./he.js": 196,
        "./hi": 197,
        "./hi.js": 197,
        "./hr": 198,
        "./hr.js": 198,
        "./hu": 199,
        "./hu.js": 199,
        "./hy-am": 200,
        "./hy-am.js": 200,
        "./id": 201,
        "./id.js": 201,
        "./is": 202,
        "./is.js": 202,
        "./it": 203,
        "./it.js": 203,
        "./ja": 204,
        "./ja.js": 204,
        "./jv": 205,
        "./jv.js": 205,
        "./ka": 206,
        "./ka.js": 206,
        "./kk": 207,
        "./kk.js": 207,
        "./km": 208,
        "./km.js": 208,
        "./kn": 209,
        "./kn.js": 209,
        "./ko": 210,
        "./ko.js": 210,
        "./ky": 211,
        "./ky.js": 211,
        "./lb": 212,
        "./lb.js": 212,
        "./lo": 213,
        "./lo.js": 213,
        "./lt": 214,
        "./lt.js": 214,
        "./lv": 215,
        "./lv.js": 215,
        "./me": 216,
        "./me.js": 216,
        "./mi": 217,
        "./mi.js": 217,
        "./mk": 218,
        "./mk.js": 218,
        "./ml": 219,
        "./ml.js": 219,
        "./mr": 220,
        "./mr.js": 220,
        "./ms": 222,
        "./ms-my": 221,
        "./ms-my.js": 221,
        "./ms.js": 222,
        "./mt": 223,
        "./mt.js": 223,
        "./my": 224,
        "./my.js": 224,
        "./nb": 225,
        "./nb.js": 225,
        "./ne": 226,
        "./ne.js": 226,
        "./nl": 228,
        "./nl-be": 227,
        "./nl-be.js": 227,
        "./nl.js": 228,
        "./nn": 229,
        "./nn.js": 229,
        "./pa-in": 230,
        "./pa-in.js": 230,
        "./pl": 231,
        "./pl.js": 231,
        "./pt": 233,
        "./pt-br": 232,
        "./pt-br.js": 232,
        "./pt.js": 233,
        "./ro": 234,
        "./ro.js": 234,
        "./ru": 235,
        "./ru.js": 235,
        "./sd": 236,
        "./sd.js": 236,
        "./se": 237,
        "./se.js": 237,
        "./si": 238,
        "./si.js": 238,
        "./sk": 239,
        "./sk.js": 239,
        "./sl": 240,
        "./sl.js": 240,
        "./sq": 241,
        "./sq.js": 241,
        "./sr": 243,
        "./sr-cyrl": 242,
        "./sr-cyrl.js": 242,
        "./sr.js": 243,
        "./ss": 244,
        "./ss.js": 244,
        "./sv": 245,
        "./sv.js": 245,
        "./sw": 246,
        "./sw.js": 246,
        "./ta": 247,
        "./ta.js": 247,
        "./te": 248,
        "./te.js": 248,
        "./tet": 249,
        "./tet.js": 249,
        "./th": 250,
        "./th.js": 250,
        "./tl-ph": 251,
        "./tl-ph.js": 251,
        "./tlh": 252,
        "./tlh.js": 252,
        "./tr": 253,
        "./tr.js": 253,
        "./tzl": 254,
        "./tzl.js": 254,
        "./tzm": 256,
        "./tzm-latn": 255,
        "./tzm-latn.js": 255,
        "./tzm.js": 256,
        "./uk": 257,
        "./uk.js": 257,
        "./ur": 258,
        "./ur.js": 258,
        "./uz": 260,
        "./uz-latn": 259,
        "./uz-latn.js": 259,
        "./uz.js": 260,
        "./vi": 261,
        "./vi.js": 261,
        "./x-pseudo": 262,
        "./x-pseudo.js": 262,
        "./yo": 263,
        "./yo.js": 263,
        "./zh-cn": 264,
        "./zh-cn.js": 264,
        "./zh-hk": 265,
        "./zh-hk.js": 265,
        "./zh-tw": 266,
        "./zh-tw.js": 266
    };
    n.keys = function () {
        return Object.keys(i)
    }, n.resolve = s, e.exports = n, n.id = 303
}, function (e, t, a) {
    var n = a(0)(a(269), a(328), null, null, null);
    e.exports = n.exports
}, function (e, t, a) {
    var n = a(0)(a(270), a(330), null, null, null);
    e.exports = n.exports
}, function (e, t, a) {
    var n = a(0)(a(271), a(334), null, null, null);
    e.exports = n.exports
}, function (e, t, a) {
    var n = a(0)(a(272), a(331), null, null, null);
    e.exports = n.exports
}, function (e, t, a) {
    var n = a(0)(a(273), a(324), null, null, null);
    e.exports = n.exports
}, function (e, t, a) {
    var n = a(0)(a(274), a(326), null, null, null);
    e.exports = n.exports
}, function (e, t, a) {
    var n = a(0)(a(275), a(335), null, null, null);
    e.exports = n.exports
}, function (e, t, a) {
    var n = a(0)(a(276), a(332), null, null, null);
    e.exports = n.exports
}, function (e, t, a) {
    var n = a(0)(a(277), a(322), null, null, null);
    e.exports = n.exports
}, function (e, t, a) {
    var n = a(0)(a(278), a(321), null, null, null);
    e.exports = n.exports
}, function (e, t, a) {
    var n = a(0)(a(279), a(336), null, null, null);
    e.exports = n.exports
}, function (e, t, a) {
    var n = a(0)(a(281), a(333), null, null, null);
    e.exports = n.exports
}, function (e, t, a) {
    var n = a(0)(a(282), a(325), null, null, null);
    e.exports = n.exports
}, function (e, t, a) {
    var n = a(0)(a(283), a(323), null, null, null);
    e.exports = n.exports
}, function (e, t, a) {
    var n = a(0)(a(284), a(329), null, null, null);
    e.exports = n.exports
}, function (e, t, a) {
    var n = a(0)(a(285), a(320), null, null, null);
    e.exports = n.exports
}, function (e, t) {
    e.exports = {
        render: function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("ul", {staticClass: "pagination"}, [e.currentPage > 1 ? a("li", [a("div", {
                staticClass: "pagination-button-container",
                on: {click: e.navigatedPage}
            }, [a("i", {
                staticClass: "icon-angle-double-left",
                attrs: {"data-pagination-button-first-page": ""}
            })])]) : e._e(), e._v(" "), e._l(e.paginationButtonTotal, function (t) {
                return a("li", {on: {click: e.specifiedPage}}, [a("div", {
                    staticClass: "pagination-button-container",
                    class: {active: e.activePaginationButtonIndex === t - 1}
                }, [a("label", {
                    attrs: {
                        "data-pagination-button-index": t - 1,
                        "data-pagination-pages": e.paginationButtonStartPage + (t - 1)
                    }
                }, [e._v("\n        " + e._s(e.paginationButtonStartPage + (t - 1)) + "\n      ")])])])
            }), e._v(" "), e.currentPage < e.totalPage ? a("li", [a("div", {
                staticClass: "pagination-button-container",
                on: {click: e.navigatedPage}
            }, [a("i", {
                staticClass: "icon-angle-double-right",
                attrs: {"data-pagination-button-last-page": ""}
            })])]) : e._e()], 2)
        }, staticRenderFns: []
    }
}, function (e, t) {
    e.exports = {
        render: function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {staticClass: "choice-article"}, [a("ul", e._l(e.choiceArticleList, function (t, n) {
                return a("li", {key: n}, [a("div", {staticClass: "row cancel-grid-system-default-gutters"}, [a("div", {staticClass: "col-xs-4 col-md-4"}, [a("div", {staticClass: "choice-article-photo"}, [a("a", {
                    attrs: {
                        href: t.href,
                        target: "_blank"
                    }
                }, [a("img", {
                    style: {backgroundImage: "url('" + t.photo + "')"},
                    attrs: {src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAADICAQAAAD41hTeAAABcUlEQVR42u3SMQ0AAAzDsJU/6aGo1MOGECUHBZEAY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGIs1DzRSAMmH+z3fAAAAAElFTkSuQmCC"}
                })])])]), e._v(" "), a("div", {staticClass: "col-xs-8 col-md-8"}, [a("div", {staticClass: "choice-article-content"}, [a("div", {staticClass: "choice-article-title"}, [a("a", {
                    attrs: {
                        href: t.href,
                        target: "_blank"
                    }
                }, [a("h3", [e._v(e._s(t.title))])])]), e._v(" "), a("div", {staticClass: "choice-article-description"}, [e._v(e._s(t.description))]), e._v(" "), a("div", {staticClass: "choice-article-user-id"}, [a("a", {
                    attrs: {
                        href: t.userPostsHref,
                        target: "_blank"
                    }
                }, [a("span", [e._v(e._s(t.userID))])])])])])])])
            })), e._v(" "), e.totalPage > 1 ? a("div", [a("Pagination", {
                attrs: {
                    propsTotalPage: e.totalPage,
                    propsParentComponentUniqueId: e.componentUniqueId
                }
            })], 1) : e._e()])
        }, staticRenderFns: []
    }
}, function (e, t) {
    e.exports = {
        render: function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {
                staticClass: "avatarSlider wg--form",
                attrs: {id: e.hashId}
            }, [a("div", {staticClass: "row"}, [a("div", {staticClass: "col-xs-12 slider"}, e._l(this.content.data, function (t, n) {
                return a("a", {
                    staticClass: "slide__itm", attrs: {href: t.link}, on: {
                        click: function (a) {
                            a.preventDefault(), e.$_mixinRedirectAction(t.link, a)
                        }
                    }
                }, [a("div", {staticClass: "thumb-head"}, [a("img", {
                    style: {backgroundImage: "url(" + t.image + ")"},
                    attrs: {src: "/static/images/imgholder.png", alt: ""}
                })]), e._v(" "), a("div", [e._v(e._s(t.author))])])
            }))])])
        }, staticRenderFns: []
    }
}, function (e, t) {
    e.exports = {
        render: function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {
                staticClass: "tripleList wg--form",
                attrs: {id: e.hashId}
            }, [a("div", {staticClass: "row"}, e._l(this.content.data, function (t, n) {
                return a("div", {staticClass: "col-xs-12 col-sm-4"}, [a("h3", {staticClass: "title theme-border"}, [e._v(e._s(t.topic))]), e._v(" "), a("ul", {staticClass: "diamond-list"}, e._l(t.list, function (t, n) {
                    return t.title.length > 0 && t.link.length > 0 ? a("li", [a("a", {
                        attrs: {href: t.link},
                        on: {
                            click: function (a) {
                                a.preventDefault(), e.$_mixinRedirectAction(t.link, a)
                            }
                        }
                    }, [e._v(e._s(t.title))])]) : e._e()
                }))])
            }))])
        }, staticRenderFns: []
    }
}, function (e, t) {
    e.exports = {
        render: function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {
                directives: [{
                    name: "draggable",
                    rawName: "v-draggable",
                    value: {widgetType: "dragZone"},
                    expression: "{widgetType:'dragZone'}"
                }], attrs: {"widget-key": e.getWidgetKey()}
            }, [a("img", {staticClass: "example", attrs: {src: e.getSrc()}})])
        }, staticRenderFns: []
    }
}, function (e, t) {
    e.exports = {
        render: function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {
                staticClass: "tripleCoverage wg--form",
                attrs: {id: e.hashId}
            }, [a("div", {staticClass: "row"}, e._l(this.content.data, function (t, n) {
                return a("div", {staticClass: "col-xs-12 col-sm-4"}, [a("a", {
                    staticClass: "tripleCoverage__thumb",
                    attrs: {href: t.link, target: "_blank"},
                    on: {
                        click: function (a) {
                            a.preventDefault(), e.$_mixinRedirectAction(t.link, a)
                        }
                    }
                }, [a("img", {
                    style: {backgroundImage: "url(" + e.$_mixinGetCover(t.image) + ")"},
                    attrs: {src: "/static/images/imgholder.png", alt: ""}
                })]), e._v(" "), a("div", {staticClass: "tripleCoverage__body"}, [a("a", {
                    attrs: {href: t.link},
                    on: {
                        click: function (a) {
                            a.preventDefault(), e.$_mixinRedirectAction(t.link, a)
                        }
                    }
                }, [a("h3", [e._v("\n                        " + e._s(t.title) + "\n                    ")]), e._v(" "), a("div", [a("p", [e._v(e._s(t.description))])])])]), e._v(" "), a("div", {staticClass: "tripleCoverage__foot"}, [a("span", [a("i", {staticClass: "icon-eye theme-text"}), e._v(e._s(t.pageview) + "\n                ")]), e._v(" "), a("span", [a("i", {staticClass: "icon-commenting theme-text"}), e._v(e._s(t.comments) + "\n                ")]), e._v(" "), a("a", {
                    attrs: {
                        href: e.redirectToBlog(t.blogger_uid),
                        target: "_blank"
                    }, on: {
                        click: function (a) {
                            a.preventDefault(), e.$_mixinRedirectAction(e.redirectToBlog(t.blogger_uid), a)
                        }
                    }
                }, [e._v(e._s(t.author))])])])
            }))])
        }, staticRenderFns: []
    }
}, function (e, t) {
    e.exports = {
        render: function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {staticClass: "pageWidget__tool"}, [a("a", {
                directives: [{
                    name: "draggable",
                    rawName: "v-draggable",
                    value: {widgetType: "toolbar", action: "drag"},
                    expression: "{widgetType:'toolbar', action:'drag'}"
                }], attrs: {href: "#"}
            }, [a("i", {staticClass: "icon-move"})]), e._v(" "), e._m(0), e._v(" "), a("a", {
                attrs: {href: "#"},
                on: {
                    click: function (t) {
                        t.preventDefault(), e.cloneWidget()
                    }
                }
            }, [a("i", {staticClass: "icon-plus-add"})]), e._v(" "), a("a", {
                attrs: {href: "#"},
                on: {
                    click: function (t) {
                        t.preventDefault(), e.deleteWidget()
                    }
                }
            }, [a("i", {staticClass: "icon-minus"})])])
        }, staticRenderFns: [function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("a", {staticClass: "btn--edit", attrs: {href: "#"}}, [a("i", {staticClass: "icon-pencil"})])
        }]
    }
}, function (e, t) {
    e.exports = {
        render: function () {
            var e = this, t = e.$createElement;
            return (e._self._c || t)("div", {
                directives: [{
                    name: "draggable",
                    rawName: "v-draggable",
                    value: {widgetType: "dropZone"},
                    expression: "{widgetType:'dropZone'}"
                }], staticClass: "pageWidget__holder"
            })
        }, staticRenderFns: []
    }
}, function (e, t) {
    e.exports = {
        render: function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {staticClass: "site-wrapper"}, [a("left-side", {
                attrs: {
                    "current-widgets": e.currentWidgets,
                    zoneStatus: e.zoneStatus,
                    selectedWidget: e.selectedWidget
                }
            }), e._v(" "), "edit" === this.$root.getDisplayMode() ? a("right-side", {attrs: {widgetStore: e.widgetStore}}) : e._e(), e._v(" "), "edit" === this.$root.getDisplayMode() ? a("content-editor-box") : e._e(), e._v(" "), "edit" === this.$root.getDisplayMode() ? a("menu-editor-box") : e._e()], 1)
        }, staticRenderFns: []
    }
}, function (e, t) {
    e.exports = {
        render: function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {
                staticClass: "tripleMixed wg--form",
                attrs: {id: e.hashId}
            }, [0 === this.$root.serverNo ? a("div", {staticClass: "row"}, e._l(this.content.data, function (t, n) {
                return a("div", {
                    class: {
                        "col-xs-12 col-sm-6 col-lg-4 tripleMixedSwitch": n < 2,
                        "tripleMixedSwitch--hidden": n != e.tripleMixedSwitchVal && n < 2,
                        "col-xs-12 col-lg-4": 2 == n
                    }
                }, [e.checkContentType(t, "list") ? a("h3", {
                    staticClass: "title theme-border",
                    class: {"headerBtn--off": n != e.tripleMixedSwitchVal},
                    on: {
                        click: function (a) {
                            e.switchTitle(n), e.clickGa("abtest/切換/按鈕", "點擊", t.topic)
                        }
                    }
                }, [e._v(e._s(t.topic))]) : e._e(), e._v(" "), e.checkContentType(t, "list") ? a("ul", {staticClass: "diamond-list"}, e._l(t.list, function (t, n) {
                    return t.title.length > 0 && t.link.length > 0 ? a("li", [a("a", {
                        attrs: {href: t.link},
                        on: {
                            click: [function (a) {
                                a.preventDefault(), e.$_mixinRedirectAction(t.link, a)
                            }, function (a) {
                                e.clickGa("abtest/切換/列表", "點擊", t.title)
                            }]
                        }
                    }, [e._v(e._s(t.title))])]) : e._e()
                })) : e.checkContentType(t, "googleAd") ? a("div", {
                    staticClass: "widget-ad",
                    attrs: {"data-widget-ad": "w320h250"}
                }, [a("div", {style: e.$_mixinAdSizeToStyle(t.googleAd.size), attrs: {id: t.googleAd.uid}})]) : e._e()])
            })) : e._e(), e._v(" "), 1 === this.$root.serverNo ? a("div", {staticClass: "row"}, e._l(this.content.data, function (t, n) {
                return a("div", {
                    class: {
                        "col-xs-12 col-sm-6 col-lg-4": n < 2,
                        "col-xs-12 col-lg-4": 2 == n
                    }
                }, [e.checkContentType(t, "list") ? a("h3", {staticClass: "title theme-border"}, [e._v(e._s(t.topic))]) : e._e(), e._v(" "), e.checkContentType(t, "list") ? a("ul", {staticClass: "diamond-list"}, e._l(t.list, function (t, n) {
                    return t.title.length > 0 && t.link.length > 0 ? a("li", [a("a", {
                        attrs: {href: t.link},
                        on: {
                            click: function (a) {
                                a.preventDefault(), e.$_mixinRedirectAction(t.link, a), e.clickGa("abtest/上下排列/列表", "點擊", t.title)
                            }
                        }
                    }, [e._v(e._s(t.title))])]) : e._e()
                })) : e.checkContentType(t, "googleAd") ? a("div", {
                    staticClass: "widget-ad",
                    attrs: {"data-widget-ad": "w320h250"}
                }, [a("div", {style: e.$_mixinAdSizeToStyle(t.googleAd.size), attrs: {id: t.googleAd.uid}})]) : e._e()])
            })) : e._e()])
        }, staticRenderFns: []
    }
}, function (e, t) {
    e.exports = {
        render: function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {
                staticClass: "pageWidget",
                class: {"pageWidget--focus": e.isOnHover},
                on: {
                    mouseenter: function (t) {
                        e.onHover(t, !0)
                    }, mouseleave: function (t) {
                        e.onHover(t, !1)
                    }
                }
            }, [e.checkDropBlockDisplay() ? a("default-widget", {attrs: {index: e.index}}) : e._e(), e._v(" "), a(e.getVm(e.widget.vm), {
                directives: [{
                    name: "draggable",
                    rawName: "v-draggable",
                    value: {widgetType: "dropZone", action: "select"},
                    expression: "{widgetType:'dropZone', action:'select'}"
                }],
                tag: "component",
                attrs: {allow: e.allow, index: e.index, content: e.widget.content, hashId: e.hashId}
            }), e._v(" "), e.isLast() ? a("default-widget", {attrs: {index: e.index + 1}}) : e._e(), e._v(" "), a("widget-tool", {
                attrs: {
                    "selected-widget": e.selectedWidget,
                    widget: e.widget,
                    index: e.index
                }
            })], 1)
        }, staticRenderFns: []
    }
}, function (e, t) {
    e.exports = {
        render: function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {staticClass: "pageWidgetStore block r-block"}, [a("div", {
                staticClass: "pageWidgetStore__tab",
                on: {
                    click: function (t) {
                        t.preventDefault(), e.openPanel()
                    }
                }
            }, [a("i", {staticClass: "icon-left-open"})]), e._v(" "), a("div", {staticClass: "pageWidgetStore__inner"}, e._l(e.widgetStore, function (e, t) {
                return a("widget-store-block", {key: "store:" + e.id, attrs: {widget: e, index: t}})
            }))])
        }, staticRenderFns: []
    }
}, function (e, t) {
    e.exports = {
        render: function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {
                staticClass: "modal fade editor-box",
                attrs: {id: "menu-box", tabindex: "-1", role: "dialog"}
            }, [a("div", {
                staticClass: "modal-dialog modal-lg",
                attrs: {role: "document"}
            }, [a("div", {staticClass: "modal-content"}, [e._m(0), e._v(" "), a("div", {staticClass: "modal-body"}, [a("div", {staticClass: "wg-tab-box tab-box"}, [a("div", {staticClass: "wg-tabctrl"}, [e.getSize() > 0 ? a("ul", {
                staticClass: "nav nav-tabs nav-tabs--menu wg-tabctrl__tabs",
                attrs: {role: "tablist"}
            }, e._l(e.sortList, function (t, n) {
                return 2 !== e.tmpData[t].status ? a("li", {
                    class: {active: e.activeIndex == n},
                    attrs: {role: "presentation"},
                    on: {
                        click: function (t) {
                            t.preventDefault(), e.selectTab(n)
                        }
                    }
                }, [a("a", {
                    attrs: {
                        href: "#item-1",
                        "aria-controls": "data-group-1",
                        role: "tab",
                        "data-toggle": "tab"
                    }
                }, [a("span", {staticClass: "idx"}, [e._v(e._s(n + 1) + ".")]), e._v(" "), a("h4", [e._v(e._s(e.tmpData[t].name))]), e._v(" "), a("div", {
                    staticClass: "dates",
                    style: {borderColor: e.tmpData[t].color}
                }, [e._v("\n                                        " + e._s(e.transferTimeToDate(e.tmpData[t].publish_time)) + " -\n                                        "), a("span", [e._v(" " + e._s(e.getDuraction(e.tmpData[t].publish_time, e.tmpData[t].offline_time)) + " 天")])]), e._v(" "), a("button", {
                    staticClass: "btn-del",
                    on: {
                        click: function (t) {
                            t.stopPropagation(), t.preventDefault(), e.deleteTab(n)
                        }
                    }
                }, [a("i", {staticClass: "icon-cancel"})])])]) : e._e()
            })) : e._e(), e._v(" "), a("button", {
                staticClass: "wg-tabctrl__tab-add", on: {
                    click: function (t) {
                        e.addTab()
                    }
                }
            }, [a("i", {staticClass: "icon-plus-add"})]), e._v(" "), a("div", {staticClass: "wg-tabctrl__tab-move"}, [a("button", {
                staticClass: "btn",
                on: {
                    click: function (t) {
                        e.moveTo(-1)
                    }
                }
            }, [a("i", {staticClass: "icon-left"})]), e._v(" "), a("label", {attrs: {for: ""}}, [e._v("調整排序")]), e._v(" "), a("button", {
                staticClass: "btn",
                on: {
                    click: function (t) {
                        e.moveTo(1)
                    }
                }
            }, [a("i", {staticClass: "icon-right"})])])]), e._v(" "), a("div", {staticClass: "wg-tab-box__content tab-content"}, [a("div", {
                staticClass: "tab-pane active",
                attrs: {role: "tabpanel"}
            }, [a("ol", {class: e.getOlClass()}, [2 !== e.currentTabContent.status ? a("li", {}, [a("div", {staticClass: "form-group"}, [a("label", {
                staticClass: "col-sm-2 control-label",
                attrs: {for: ""}
            }, [e._v("標題")]), e._v(" "), a("div", {staticClass: "col-sm-10"}, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.trim",
                    value: e.inputTitle,
                    expression: "inputTitle",
                    modifiers: {trim: !0}
                }],
                staticClass: "form-control",
                attrs: {type: "text", id: "", placeholder: "標題"},
                domProps: {value: e.inputTitle},
                on: {
                    input: function (t) {
                        t.target.composing || (e.inputTitle = t.target.value.trim())
                    }, blur: function (t) {
                        e.$forceUpdate()
                    }
                }
            })])]), e._v(" "), a("div", {staticClass: "form-group"}, [a("label", {
                staticClass: "col-sm-2 control-label",
                attrs: {for: ""}
            }, [e._v("色碼")]), e._v(" "), a("div", {staticClass: "col-sm-10"}, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.trim",
                    value: e.currentTabContent.color,
                    expression: "currentTabContent.color",
                    modifiers: {trim: !0}
                }],
                staticClass: "form-control colorInvert",
                style: {background: e.currentTabContent.color},
                attrs: {type: "text", id: "", placeholder: "色碼"},
                domProps: {value: e.currentTabContent.color},
                on: {
                    input: function (t) {
                        t.target.composing || e.$set(e.currentTabContent, "color", t.target.value.trim())
                    }, blur: function (t) {
                        e.$forceUpdate()
                    }
                }
            })])]), e._v(" "), a("div", {staticClass: "form-group"}, [a("label", {
                staticClass: "col-sm-2 control-label",
                attrs: {for: ""}
            }, [e._v("說明")]), e._v(" "), a("div", {staticClass: "col-sm-10"}, [a("textarea", {
                directives: [{
                    name: "model",
                    rawName: "v-model.trim",
                    value: e.currentTabContent.description,
                    expression: "currentTabContent.description",
                    modifiers: {trim: !0}
                }],
                staticClass: "form-control",
                attrs: {rows: "3", placeholder: "頁簽說明"},
                domProps: {value: e.currentTabContent.description},
                on: {
                    input: function (t) {
                        t.target.composing || e.$set(e.currentTabContent, "description", t.target.value.trim())
                    }, blur: function (t) {
                        e.$forceUpdate()
                    }
                }
            })])]), e._v(" "), a("div", {staticClass: "form-group"}, [a("label", {
                staticClass: "col-sm-2 control-label",
                attrs: {for: ""}
            }, [e._v("狀態")]), e._v(" "), a("div", {staticClass: "col-sm-10"}, [a("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.currentTabContent.status,
                    expression: "currentTabContent.status"
                }], staticClass: "form-control", on: {
                    change: function (t) {
                        var a = Array.prototype.filter.call(t.target.options, function (e) {
                            return e.selected
                        }).map(function (e) {
                            return "_value" in e ? e._value : e.value
                        });
                        e.$set(e.currentTabContent, "status", t.target.multiple ? a : a[0])
                    }
                }
            }, [a("option", {
                attrs: {
                    disabled: "",
                    value: ""
                }
            }, [e._v("Please select one")]), e._v(" "), a("option", {attrs: {value: "0"}}, [e._v("隱藏")]), e._v(" "), a("option", {attrs: {value: "1"}}, [e._v("啟用")])])])]), e._v(" "), a("div", {staticClass: "form-group"}, [a("label", {
                staticClass: "col-sm-2 control-label",
                attrs: {for: ""}
            }, [e._v("發佈時間")]), e._v(" "), a("div", {staticClass: "col-sm-6"}, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.inputPublishTime,
                    expression: "inputPublishTime"
                }],
                staticClass: "input-datedropper form-control",
                attrs: {type: "text", placeholder: "timestamp"},
                domProps: {value: e.inputPublishTime},
                on: {
                    input: function (t) {
                        t.target.composing || (e.inputPublishTime = t.target.value)
                    }
                }
            })])]), e._v(" "), a("div", {staticClass: "form-group"}, [a("label", {
                staticClass: "col-sm-2 control-label",
                attrs: {for: ""}
            }, [e._v("下線時間")]), e._v(" "), a("div", {staticClass: "col-sm-6"}, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.inputOfflineTime,
                    expression: "inputOfflineTime"
                }],
                staticClass: "input-datedropper form-control",
                attrs: {type: "text", placeholder: "timestamp"},
                domProps: {value: e.inputOfflineTime},
                on: {
                    input: function (t) {
                        t.target.composing || (e.inputOfflineTime = t.target.value)
                    }
                }
            })])])]) : e._e()])])])])]), e._v(" "), a("div", {staticClass: "modal-footer"}, [a("button", {
                staticClass: "btn btn-default",
                attrs: {type: "button", "data-dismiss": "modal"}
            }, [e._v("Close")]), e._v(" "), a("button", {
                staticClass: "btn btn-primary",
                attrs: {type: "button"},
                on: {
                    click: function (t) {
                        t.preventDefault(), e.save()
                    }
                }
            }, [e._v("Save changes")])])])])])
        }, staticRenderFns: [function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {staticClass: "modal-header"}, [a("button", {
                staticClass: "close",
                attrs: {type: "button", "data-dismiss": "modal", "aria-label": "Close"}
            }, [a("span", {attrs: {"aria-hidden": "true"}}, [e._v("×")])]), e._v(" "), a("h4", {staticClass: "modal-title"}, [e._v("主題編輯")])])
        }]
    }
}, function (e, t) {
    e.exports = {
        render: function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {staticClass: "sextupleMixed wg--form"}, [a("div", {staticClass: "row"}, e._l(this.content.data, function (t, n) {
                return a("div", {staticClass: "col-xs-12 col-sm-6 col-lg-4"}, ["article" === t.type ? a("div", {staticClass: "borderSummary"}, [a("a", {
                    attrs: {href: t.link},
                    on: {
                        click: function (a) {
                            a.preventDefault(), e.$_mixinRedirectAction(t.link, a)
                        }
                    }
                }, [a("h3", [e._v(e._s(t.title))]), e._v(" "), a("p", [e._v(e._s(t.description))])])]) : "photo" === t.type ? a("div", {staticClass: "figure"}, [a("a", {
                    attrs: {href: t.link},
                    on: {
                        click: function (a) {
                            a.preventDefault(), e.$_mixinRedirectAction(t.link, a)
                        }
                    }
                }, [a("img", {
                    style: {backgroundImage: "url(" + t.image + ")"},
                    attrs: {src: "/static/images/imgholder.png", alt: ""}
                }), e._v(" "), a("p", [e._v(e._s(t.title))])])]) : e.checkContentType(t, t.type) ? a("div", {
                    staticClass: "widget-ad",
                    attrs: {"data-widget-ad": "w320h250"}
                }, [a("div", {style: e.$_mixinAdSizeToStyle(t.googleAd.size), attrs: {id: t.googleAd.uid}})]) : e._e()])
            }))])
        }, staticRenderFns: []
    }
}, function (e, t) {
    e.exports = {
        render: function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {staticClass: "wg-content block l-block"}, [e._l(e.currentWidgets, function (t, n) {
                return a("drop-zone-component", {
                    key: e.getHashKey(t, n),
                    attrs: {
                        index: n,
                        widgetCount: e.getWidgetCount(),
                        widget: t,
                        zoneStatus: e.zoneStatus,
                        selectedWidget: e.selectedWidget
                    }
                })
            }), e._v(" "), 0 == e.getWidgetCount() && "edit" === this.$root.getDisplayMode() ? a("div", {staticClass: "pageWidget"}, [a("default-widget")], 1) : e._e()], 2)
        }, staticRenderFns: []
    }
}, function (e, t) {
    e.exports = {
        render: function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {
                staticClass: "modal fade editor-box",
                attrs: {id: "editor-box", tabindex: "-1", role: "dialog"}
            }, [a("div", {
                staticClass: "modal-dialog modal-lg",
                attrs: {role: "document"}
            }, [a("div", {staticClass: "modal-content"}, [a("div", {staticClass: "modal-header"}, [e._m(0), e._v(" "), a("h4", {staticClass: "modal-title"}, [e._v(e._s(e.widgetName))])]), e._v(" "), a("div", {staticClass: "modal-body"}, [a("div", {staticClass: "wg-tab-box tab-box"}, [a("div", {staticClass: "wg-tabctrl"}, [e.widgetConfig.tabSize > 1 || e.widgetConfig.tabExtendable ? a("ul", {
                staticClass: "nav nav-tabs wg-tabctrl__tabs",
                attrs: {role: "tablist"}
            }, e._l(e.widgetConfig.tabSize, function (t, n) {
                return a("li", {
                    class: {active: e.activeIndex === t},
                    attrs: {role: "presentation"}
                }, [a("a", {
                    attrs: {
                        href: "#item-1",
                        "aria-controls": "data-group-1",
                        role: "tab",
                        "data-toggle": "tab"
                    }, on: {
                        click: function (a) {
                            a.preventDefault(), e.selectTab(t)
                        }
                    }
                }, [e._v(" " + e._s(t))]), e._v(" "), e.widgetConfig.tabExtendable ? a("button", {
                    staticClass: "wg-tabctrl__tab-del btn-del",
                    on: {
                        click: function (a) {
                            e.delTab(t)
                        }
                    }
                }, [a("i", {staticClass: "icon-cancel"})]) : e._e()])
            })) : e._e(), e._v(" "), e.widgetConfig.tabExtendable ? a("button", {
                staticClass: "wg-tabctrl__tab-add",
                on: {
                    click: function (t) {
                        e.addTab()
                    }
                }
            }, [a("i", {staticClass: "icon-plus-add"})]) : e._e(), e._v(" "), e.widgetConfig.tabSize > 1 && e.widgetConfig.tabExtendable ? a("div", {staticClass: "wg-tabctrl__tab-move"}, [a("button", {
                staticClass: "btn",
                on: {
                    click: function (t) {
                        e.moveTo(-1)
                    }
                }
            }, [a("i", {staticClass: "icon-left"})]), e._v(" "), a("label", {attrs: {for: ""}}, [e._v("調整排序")]), e._v(" "), a("button", {
                staticClass: "btn",
                on: {
                    click: function (t) {
                        e.moveTo(1)
                    }
                }
            }, [a("i", {staticClass: "icon-right"})])]) : e._e()]), e._v(" "), a("div", {staticClass: "wg-tab-box__content tab-content"}, [a("div", {
                staticClass: "tab-pane active",
                attrs: {role: "tabpanel"}
            }, [e.tmpData.length > 0 && e.tmpData[e.activeIndex - 1].hasOwnProperty("topic") ? a("div", {staticClass: "form-group row wg-tab-box__headline"}, [a("label", {
                staticClass: "col-sm-2 control-label",
                attrs: {for: ""}
            }, [e._v("主題名稱")]), e._v(" "), a("div", {staticClass: "col-sm-10"}, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.trim",
                    value: e.tmpData[e.activeIndex - 1].topic,
                    expression: "tmpData[activeIndex-1].topic",
                    modifiers: {trim: !0}
                }],
                staticClass: "form-control",
                attrs: {type: "text", id: "", placeholder: "主題名稱"},
                domProps: {value: e.tmpData[e.activeIndex - 1].topic},
                on: {
                    input: function (t) {
                        t.target.composing || e.$set(e.tmpData[e.activeIndex - 1], "topic", t.target.value.trim())
                    }, blur: function (t) {
                        e.$forceUpdate()
                    }
                }
            })])]) : e._e(), e._v(" "), e.tmpData.length > 0 && e.tmpData[e.activeIndex - 1].hasOwnProperty("googleAd") ? a("div", {staticClass: "form-group row wg-tab-box__headline"}, [a("label", {
                staticClass: "col-sm-2 control-label",
                attrs: {for: ""}
            }, [e._v("Google AD")])]) : e._e(), e._v(" "), e.tmpData.length > 0 ? a("ol", {class: e.getOlClass()}, [e._l(e.widgetConfig.rowSize, function (t) {
                return "multi" == e.editorMode && e.tmpData[e.activeIndex - 1].hasOwnProperty("list") ? a("li", {staticClass: "row"}, e._l(e.tmpData[e.activeIndex - 1].list[t - 1], function (n, s) {
                    return e.extendColumn(e.tmpData[e.activeIndex - 1].list, t, e.widgetConfig.rowSize) ? a("div", {}, ["sync-post" === s ? a("div", {staticClass: "form-group"}, [a("label", {
                        staticClass: "col-sm-2 control-label",
                        attrs: {for: ""}
                    }, [e._v("頁面連結")]), e._v(" "), a("div", {staticClass: "col-sm-10"}, [a("div", {staticClass: "input-group input-group-url"}, [e._m(1, !0), e._v(" "), a("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model.trim",
                            value: e.tmpData[e.activeIndex - 1].list[t - 1].link,
                            expression: "tmpData[activeIndex-1].list[rowNum-1].link",
                            modifiers: {trim: !0}
                        }],
                        staticClass: "form-control",
                        attrs: {type: "text", placeholder: "部落格 ID", "aria-describedby": "sizing-addon3"},
                        domProps: {value: e.tmpData[e.activeIndex - 1].list[t - 1].link},
                        on: {
                            input: function (a) {
                                a.target.composing || e.$set(e.tmpData[e.activeIndex - 1].list[t - 1], "link", a.target.value.trim())
                            }, blur: function (t) {
                                e.$forceUpdate()
                            }
                        }
                    }), e._v(" "), e._m(2, !0)])])]) : e._e(), e._v(" "), "link" === s ? a("div", {staticClass: "form-group"}, [a("label", {
                        staticClass: "col-sm-2 control-label",
                        attrs: {for: ""}
                    }, [e._v("頁面連結")]), e._v(" "), a("div", {staticClass: "col-sm-10"}, [a("div", {staticClass: "input-group input-group-url"}, [e._m(3, !0), e._v(" "), a("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model.trim",
                            value: e.tmpData[e.activeIndex - 1].list[t - 1].link,
                            expression: "tmpData[activeIndex-1].list[rowNum-1].link",
                            modifiers: {trim: !0}
                        }],
                        staticClass: "form-control",
                        attrs: {type: "url", placeholder: "部落格連結 url", "aria-describedby": "sizing-addon3"},
                        domProps: {value: e.tmpData[e.activeIndex - 1].list[t - 1].link},
                        on: {
                            input: function (a) {
                                a.target.composing || e.$set(e.tmpData[e.activeIndex - 1].list[t - 1], "link", a.target.value.trim())
                            }, blur: function (t) {
                                e.$forceUpdate()
                            }
                        }
                    })])])]) : e._e(), e._v(" "), "image" === s ? a("div", {staticClass: "form-group"}, [a("label", {
                        staticClass: "col-sm-2 control-label",
                        attrs: {for: ""}
                    }, [e._v("預覽圖")]), e._v(" "), a("div", {staticClass: "col-sm-10"}, [a("div", {staticClass: "input-group input-group-url"}, [e._m(4, !0), e._v(" "), a("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model.trim",
                            value: e.tmpData[e.activeIndex - 1].list[t - 1].image,
                            expression: "tmpData[activeIndex-1].list[rowNum-1].image",
                            modifiers: {trim: !0}
                        }],
                        staticClass: "form-control",
                        attrs: {type: "url", placeholder: "預覽圖 url", "aria-describedby": "sizing-addon3"},
                        domProps: {value: e.tmpData[e.activeIndex - 1].list[t - 1].image},
                        on: {
                            input: function (a) {
                                a.target.composing || e.$set(e.tmpData[e.activeIndex - 1].list[t - 1], "image", a.target.value.trim())
                            }, blur: function (t) {
                                e.$forceUpdate()
                            }
                        }
                    })])])]) : e._e(), e._v(" "), "title" === s ? a("div", {staticClass: "form-group"}, [a("label", {
                        staticClass: "col-sm-2 control-label",
                        attrs: {for: ""}
                    }, [e._v("標題")]), e._v(" "), a("div", {staticClass: "col-sm-10"}, [a("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model.trim",
                            value: e.tmpData[e.activeIndex - 1].list[t - 1].title,
                            expression: "tmpData[activeIndex-1].list[rowNum-1].title",
                            modifiers: {trim: !0}
                        }],
                        staticClass: "form-control",
                        attrs: {type: "text", id: "", placeholder: "標題"},
                        domProps: {value: e.tmpData[e.activeIndex - 1].list[t - 1].title},
                        on: {
                            input: function (a) {
                                a.target.composing || e.$set(e.tmpData[e.activeIndex - 1].list[t - 1], "title", a.target.value.trim())
                            }, blur: function (t) {
                                e.$forceUpdate()
                            }
                        }
                    })])]) : e._e(), e._v(" "), "description" === s ? a("div", {staticClass: "form-group"}, [a("label", {
                        staticClass: "col-sm-2 control-label",
                        attrs: {for: ""}
                    }, [e._v("文案內容")]), e._v(" "), a("div", {staticClass: "col-sm-10"}, [a("textarea", {
                        directives: [{
                            name: "model",
                            rawName: "v-model.trim",
                            value: e.tmpData[e.activeIndex - 1].list[t - 1].description,
                            expression: "tmpData[activeIndex-1].list[rowNum-1].description",
                            modifiers: {trim: !0}
                        }],
                        staticClass: "form-control",
                        attrs: {rows: "3", placeholder: "文案內容"},
                        domProps: {value: e.tmpData[e.activeIndex - 1].list[t - 1].description},
                        on: {
                            input: function (a) {
                                a.target.composing || e.$set(e.tmpData[e.activeIndex - 1].list[t - 1], "description", a.target.value.trim())
                            }, blur: function (t) {
                                e.$forceUpdate()
                            }
                        }
                    })])]) : e._e(), e._v(" "), "hr" === s ? a("hr") : e._e()]) : e._e()
                })) : "base" == e.editorMode ? a("li", [a("div", {staticClass: "row"}, e._l(e.tmpData[e.activeIndex - 1], function (t, n) {
                    return a("div", {staticClass: "col-xs-12"}, ["sync_post_id" === n ? a("div", {staticClass: "form-group"}, [a("label", {
                        staticClass: "col-sm-2 control-label",
                        attrs: {for: ""}
                    }, [e._v("同步文章")]), e._v(" "), a("div", {staticClass: "col-sm-10"}, [a("div", {staticClass: "input-group"}, [a("span", {
                        staticClass: "input-group-addon",
                        attrs: {id: ""}
                    }, [e._v("Blogger Uid")]), e._v(" "), a("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model.trim",
                            value: e.tmpData[e.activeIndex - 1].blogger_uid,
                            expression: "tmpData[activeIndex-1].blogger_uid",
                            modifiers: {trim: !0}
                        }],
                        staticClass: "form-control",
                        attrs: {type: "url", placeholder: "部落格Uid", "aria-describedby": "sizing-addon3"},
                        domProps: {value: e.tmpData[e.activeIndex - 1].blogger_uid},
                        on: {
                            input: function (t) {
                                t.target.composing || e.$set(e.tmpData[e.activeIndex - 1], "blogger_uid", t.target.value.trim())
                            }, blur: function (t) {
                                e.$forceUpdate()
                            }
                        }
                    }), e._v(" "), a("span", {
                        staticClass: "input-group-addon",
                        attrs: {id: ""}
                    }, [e._v("Post Id")]), e._v(" "), a("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model.trim",
                            value: e.tmpData[e.activeIndex - 1].sync_post_id,
                            expression: "tmpData[activeIndex-1].sync_post_id",
                            modifiers: {trim: !0}
                        }],
                        staticClass: "form-control",
                        attrs: {type: "url", placeholder: "文章ID", "aria-describedby": "sizing-addon3"},
                        domProps: {value: e.tmpData[e.activeIndex - 1].sync_post_id},
                        on: {
                            input: function (t) {
                                t.target.composing || e.$set(e.tmpData[e.activeIndex - 1], "sync_post_id", t.target.value.trim())
                            }, blur: function (t) {
                                e.$forceUpdate()
                            }
                        }
                    }), e._v(" "), a("span", {staticClass: "input-group-btn"}, [a("button", {
                        staticClass: "btn btn-default",
                        attrs: {type: "button"},
                        on: {
                            click: function (t) {
                                t.preventDefault(), e.syncPostData(e.tmpData[e.activeIndex - 1].blogger_uid, e.tmpData[e.activeIndex - 1].sync_post_id)
                            }
                        }
                    }, [e._v("同步")])])])])]) : e._e(), e._v(" "), "sync_blogger_id" === n ? a("div", {staticClass: "form-group"}, [a("label", {
                        staticClass: "col-sm-2 control-label",
                        attrs: {for: ""}
                    }, [e._v("部落格 ID")]), e._v(" "), a("div", {staticClass: "col-sm-10"}, [a("div", {staticClass: "input-group input-group-url"}, [e._m(5, !0), e._v(" "), a("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model.trim",
                            value: e.tmpData[e.activeIndex - 1].sync_blogger_id,
                            expression: "tmpData[activeIndex-1].sync_blogger_id",
                            modifiers: {trim: !0}
                        }],
                        staticClass: "form-control",
                        attrs: {type: "text", placeholder: "部落格 ID", "aria-describedby": "sizing-addon3"},
                        domProps: {value: e.tmpData[e.activeIndex - 1].sync_blogger_id},
                        on: {
                            input: function (t) {
                                t.target.composing || e.$set(e.tmpData[e.activeIndex - 1], "sync_blogger_id", t.target.value.trim())
                            }, blur: function (t) {
                                e.$forceUpdate()
                            }
                        }
                    }), e._v(" "), a("span", {staticClass: "input-group-btn"}, [a("button", {
                        staticClass: "btn btn-default",
                        attrs: {type: "button"},
                        on: {
                            click: function (t) {
                                t.preventDefault(), e.syncBloggerData(e.tmpData[e.activeIndex - 1].sync_blogger_id)
                            }
                        }
                    }, [e._v("同步部落客")])])])])]) : e._e(), e._v(" "), "link" === n ? a("div", {staticClass: "form-group"}, [a("label", {
                        staticClass: "col-sm-2 control-label",
                        attrs: {for: ""}
                    }, [e._v("頁面連結")]), e._v(" "), a("div", {staticClass: "col-sm-10"}, [a("div", {staticClass: "input-group input-group-url"}, [e._m(6, !0), e._v(" "), a("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model.trim",
                            value: e.tmpData[e.activeIndex - 1].link,
                            expression: "tmpData[activeIndex-1].link",
                            modifiers: {trim: !0}
                        }],
                        staticClass: "form-control",
                        attrs: {type: "url", placeholder: "放網址", "aria-describedby": "sizing-addon3"},
                        domProps: {value: e.tmpData[e.activeIndex - 1].link},
                        on: {
                            input: function (t) {
                                t.target.composing || e.$set(e.tmpData[e.activeIndex - 1], "link", t.target.value.trim())
                            }, blur: function (t) {
                                e.$forceUpdate()
                            }
                        }
                    })])])]) : e._e(), e._v(" "), "image" === n ? a("div", {staticClass: "form-group"}, [a("label", {
                        staticClass: "col-sm-2 control-label",
                        attrs: {for: ""}
                    }, [e._v("預覽圖")]), e._v(" "), a("div", {staticClass: "col-sm-10"}, [a("div", {staticClass: "input-group input-group-url"}, [e._m(7, !0), e._v(" "), a("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model.trim",
                            value: e.tmpData[e.activeIndex - 1].image,
                            expression: "tmpData[activeIndex-1].image",
                            modifiers: {trim: !0}
                        }],
                        staticClass: "form-control",
                        attrs: {type: "url", placeholder: "圖片連結", "aria-describedby": "sizing-addon3"},
                        domProps: {value: e.tmpData[e.activeIndex - 1].image},
                        on: {
                            input: function (t) {
                                t.target.composing || e.$set(e.tmpData[e.activeIndex - 1], "image", t.target.value.trim())
                            }, blur: function (t) {
                                e.$forceUpdate()
                            }
                        }
                    })])])]) : e._e(), e._v(" "), "title" === n ? a("div", {staticClass: "form-group"}, [a("label", {
                        staticClass: "col-sm-2 control-label",
                        attrs: {for: ""}
                    }, [e._v("標題")]), e._v(" "), a("div", {staticClass: "col-sm-10"}, [a("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model.trim",
                            value: e.tmpData[e.activeIndex - 1].title,
                            expression: "tmpData[activeIndex-1].title",
                            modifiers: {trim: !0}
                        }],
                        staticClass: "form-control",
                        attrs: {type: "text", id: "", placeholder: "標題"},
                        domProps: {value: e.tmpData[e.activeIndex - 1].title},
                        on: {
                            input: function (t) {
                                t.target.composing || e.$set(e.tmpData[e.activeIndex - 1], "title", t.target.value.trim())
                            }, blur: function (t) {
                                e.$forceUpdate()
                            }
                        }
                    })])]) : e._e(), e._v(" "), "description" === n ? a("div", {staticClass: "form-group"}, [a("label", {
                        staticClass: "col-sm-2 control-label",
                        attrs: {for: ""}
                    }, [e._v("文案內容")]), e._v(" "), a("div", {staticClass: "col-sm-10"}, [a("textarea", {
                        directives: [{
                            name: "model",
                            rawName: "v-model.trim",
                            value: e.tmpData[e.activeIndex - 1].description,
                            expression: "tmpData[activeIndex-1].description",
                            modifiers: {trim: !0}
                        }],
                        staticClass: "form-control",
                        attrs: {rows: "3", placeholder: "文案內容"},
                        domProps: {value: e.tmpData[e.activeIndex - 1].description},
                        on: {
                            input: function (t) {
                                t.target.composing || e.$set(e.tmpData[e.activeIndex - 1], "description", t.target.value.trim())
                            }, blur: function (t) {
                                e.$forceUpdate()
                            }
                        }
                    })])]) : e._e(), e._v(" "), "author" === n ? a("div", {staticClass: "form-group"}, [a("label", {
                        staticClass: "col-sm-2 control-label",
                        attrs: {for: ""}
                    }, [e._v("作者")]), e._v(" "), a("div", {staticClass: "col-sm-10"}, [a("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model.trim",
                            value: e.tmpData[e.activeIndex - 1].author,
                            expression: "tmpData[activeIndex-1].author",
                            modifiers: {trim: !0}
                        }],
                        staticClass: "form-control",
                        attrs: {type: "text", id: "", placeholder: "標題"},
                        domProps: {value: e.tmpData[e.activeIndex - 1].author},
                        on: {
                            input: function (t) {
                                t.target.composing || e.$set(e.tmpData[e.activeIndex - 1], "author", t.target.value.trim())
                            }, blur: function (t) {
                                e.$forceUpdate()
                            }
                        }
                    })])]) : e._e(), e._v(" "), "hr" === t ? a("hr") : e._e()])
                }))]) : e._e()
            }), e._v(" "), e.tmpData[e.activeIndex - 1].hasOwnProperty("googleAd") ? a("li", [a("div", {staticClass: "row"}, [a("div", {staticClass: "col-xs-12"}, [a("div", {staticClass: "form-group"}, [a("label", {
                staticClass: "col-sm-2 control-label",
                attrs: {for: ""}
            }, [e._v("Name")]), e._v(" "), a("div", {staticClass: "col-sm-10"}, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.trim",
                    value: e.tmpData[e.activeIndex - 1].googleAd.name,
                    expression: "tmpData[activeIndex-1]['googleAd'].name",
                    modifiers: {trim: !0}
                }],
                staticClass: "form-control",
                attrs: {type: "text", placeholder: "name"},
                domProps: {value: e.tmpData[e.activeIndex - 1].googleAd.name},
                on: {
                    input: function (t) {
                        t.target.composing || e.$set(e.tmpData[e.activeIndex - 1].googleAd, "name", t.target.value.trim())
                    }, blur: function (t) {
                        e.$forceUpdate()
                    }
                }
            })])]), e._v(" "), a("div", {staticClass: "form-group"}, [a("label", {
                staticClass: "col-sm-2 control-label",
                attrs: {for: ""}
            }, [e._v("Uid")]), e._v(" "), a("div", {staticClass: "col-sm-10"}, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.trim",
                    value: e.tmpData[e.activeIndex - 1].googleAd.uid,
                    expression: "tmpData[activeIndex-1]['googleAd'].uid",
                    modifiers: {trim: !0}
                }],
                staticClass: "form-control",
                attrs: {type: "text", placeholder: "uid"},
                domProps: {value: e.tmpData[e.activeIndex - 1].googleAd.uid},
                on: {
                    input: function (t) {
                        t.target.composing || e.$set(e.tmpData[e.activeIndex - 1].googleAd, "uid", t.target.value.trim())
                    }, blur: function (t) {
                        e.$forceUpdate()
                    }
                }
            })])]), e._v(" "), a("div", {staticClass: "form-group"}, [a("label", {
                staticClass: "col-sm-2 control-label",
                attrs: {for: ""}
            }, [e._v("Label")]), e._v(" "), a("div", {staticClass: "col-sm-10"}, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.trim",
                    value: e.tmpData[e.activeIndex - 1].googleAd.label,
                    expression: "tmpData[activeIndex-1]['googleAd'].label",
                    modifiers: {trim: !0}
                }],
                staticClass: "form-control",
                attrs: {type: "text", placeholder: "label"},
                domProps: {value: e.tmpData[e.activeIndex - 1].googleAd.label},
                on: {
                    input: function (t) {
                        t.target.composing || e.$set(e.tmpData[e.activeIndex - 1].googleAd, "label", t.target.value.trim())
                    }, blur: function (t) {
                        e.$forceUpdate()
                    }
                }
            })])]), e._v(" "), a("div", {staticClass: "form-group"}, [a("label", {
                staticClass: "col-sm-2 control-label",
                attrs: {for: ""}
            }, [e._v("Size")]), e._v(" "), a("div", {staticClass: "col-sm-10"}, [a("div", {staticClass: "input-group"}, [a("span", {staticClass: "input-group-addon"}, [e._v("Width")]), e._v(" "), a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.trim.number",
                    value: e.tmpData[e.activeIndex - 1].googleAd.width,
                    expression: "tmpData[activeIndex-1]['googleAd']['width']",
                    modifiers: {trim: !0, number: !0}
                }],
                staticClass: "form-control",
                attrs: {type: "number", placeholder: "Width"},
                domProps: {value: e.tmpData[e.activeIndex - 1].googleAd.width},
                on: {
                    input: function (t) {
                        t.target.composing || e.$set(e.tmpData[e.activeIndex - 1].googleAd, "width", e._n(t.target.value.trim()))
                    }, blur: function (t) {
                        e.$forceUpdate()
                    }
                }
            }), e._v(" "), a("span", {staticClass: "input-group-addon"}, [e._v("Height")]), e._v(" "), a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.trim.number",
                    value: e.tmpData[e.activeIndex - 1].googleAd.height,
                    expression: "tmpData[activeIndex-1]['googleAd']['height']",
                    modifiers: {trim: !0, number: !0}
                }],
                staticClass: "form-control",
                attrs: {type: "number", placeholder: "Height"},
                domProps: {value: e.tmpData[e.activeIndex - 1].googleAd.height},
                on: {
                    input: function (t) {
                        t.target.composing || e.$set(e.tmpData[e.activeIndex - 1].googleAd, "height", e._n(t.target.value.trim()))
                    }, blur: function (t) {
                        e.$forceUpdate()
                    }
                }
            })])])])])])]) : e._e()], 2) : e._e()])])])]), e._v(" "), a("div", {staticClass: "modal-footer"}, [a("button", {
                staticClass: "btn btn-default",
                attrs: {type: "button", "data-dismiss": "modal"}
            }, [e._v("Close")]), e._v(" "), a("button", {
                staticClass: "btn btn-primary",
                attrs: {type: "button"},
                on: {
                    click: function (t) {
                        t.preventDefault(), e.save()
                    }
                }
            }, [e._v("Save changes")])])])])])
        }, staticRenderFns: [function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("button", {
                staticClass: "close",
                attrs: {type: "button", "data-dismiss": "modal", "aria-label": "Close"}
            }, [a("span", {attrs: {"aria-hidden": "true"}}, [e._v("×")])])
        }, function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("span", {staticClass: "input-group-addon"}, [a("i", {staticClass: "icon-user"})])
        }, function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("span", {staticClass: "input-group-btn"}, [a("button", {
                staticClass: "btn btn-default",
                attrs: {type: "button"}
            }, [e._v("載入文字")])])
        }, function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("span", {staticClass: "input-group-addon"}, [a("i", {staticClass: "icon-link"})])
        }, function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("span", {staticClass: "input-group-addon"}, [a("i", {staticClass: "icon-picture"})])
        }, function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("span", {staticClass: "input-group-addon"}, [a("i", {staticClass: "icon-user"})])
        }, function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("span", {staticClass: "input-group-addon"}, [a("i", {staticClass: "icon-link"})])
        }, function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("span", {staticClass: "input-group-addon"}, [a("i", {staticClass: "icon-picture"})])
        }]
    }
}, function (e, t) {
    e.exports = {
        render: function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {
                staticClass: "coverSlider",
                attrs: {id: e.hashId}
            }, [a("div", {staticClass: "row"}, [a("div", {staticClass: "col-sm-8 col-xs-12 slider coverSlider__slider"}, e._l(this.content.data, function (t, n) {
                return a("a", {
                    staticClass: "slide__itm figure",
                    attrs: {target: "_blank", href: t.link},
                    on: {
                        click: function (a) {
                            a.preventDefault(), e.$_mixinRedirectAction(t.link, a)
                        }
                    }
                }, [a("img", {
                    style: {backgroundImage: "url(" + t.image + ")"},
                    attrs: {src: "/static/images/imgholder.png", alt: ""}
                }), e._v(" "), a("p", [e._v(e._s(t.title))])])
            })), e._v(" "), a("ul", {staticClass: "col-sm-4 col-xs-12 coverSlider__pointer wg--form"}, e._l(this.content.data, function (t, n) {
                return a("li", {
                    attrs: {"data-pindex": n + 1, target: "_blank"}, on: {
                        click: function (a) {
                            a.preventDefault(), e.$_mixinRedirectAction(t.link, a)
                        }
                    }
                }, [a("div", {staticClass: "theme-border"}, [a("span", {staticClass: "title"}, [e._v(e._s(t.title))]), e._v(" "), a("span", {staticClass: "author"}, [e._v(e._s(t.author))])])])
            }))])])
        }, staticRenderFns: []
    }
}, function (e, t) {
    e.exports = function (e) {
        return e.webpackPolyfill || (e.deprecate = function () {
        }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0, get: function () {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, , function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = a(304), s = a.n(n), i = {contentBlock: s.a};
    t.default = {
        props: {
            currentWidgets: {
                type: Array, default: function () {
                    return []
                }
            }
        }, data: function () {
            return {}
        }, methods: {}, beforeRouteEnter: function (e, t, a) {
            a(function (t) {
                t.$root.changeDisplayMode(e.name)
            })
        }, created: function () {
        }, components: i
    }
}, , function (e, t) {
    e.exports = {
        render: function () {
            var e = this, t = e.$createElement;
            return (e._self._c || t)("content-block", {attrs: {currentWidgets: e.currentWidgets}})
        }, staticRenderFns: []
    }
}]));