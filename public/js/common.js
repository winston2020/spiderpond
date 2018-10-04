webpackJsonp([5], {
    134: function (n, e, i) {
        i(52), n.exports = i(58)
    }, 52: function (n, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var t = i(75), o = i.n(t);
        !function (n) {
            window.JSVAR = window.JSVAR || {};
            var e = window.JSVAR.client || o()({isGuest: !0, isBlogger: !0});
            window.JSVAR.client = e
        }(window)
    }, 58: function (n, e, i) {
        "use strict";
        !function (n, e, i) {
            var t = function (n) {
                var i = window.googletag || (window.googletag = {}), t = [], o = function (n) {
                    console.log("DfpGenerator Init");
                    var e = this;
                    i.cmd = i.cmd || [], i.cmd.push(function () {
                        e.appendDfp(n)
                    })
                }, a = function () {
                    i.pubads().enableSingleRequest(), i.pubads().collapseEmptyDivs(), i.enableServices()
                }, s = function (n) {
                    var e = i.defineSlot(n.label, n.size, n.uid).addService(i.pubads());
                    return i.display(n.uid), e
                };
                this.appendDfp = function (n) {
                    e.each(n, function (n, e) {
                        a(), t.push(s(e))
                    })
                }, this.reflash = function () {
                    i.pubads().refresh(t)
                }, i && i.apiReady ? o.call(this, n.data.static) : (console.log("gpt installing..."), e.getScript("//www.googletagservices.com/tag/js/gpt.js").then(function (e) {
                    o.call(this, n.data.static)
                }.bind(this)))
            };
            n.DfpGenerator = new t({data: i})
        }(window, $, "undefined" != typeof TianDfp ? TianDfp : {})
    }
}, [134]);