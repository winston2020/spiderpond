webpackJsonp([3], [, , , , , , , , , , , , , , function (t, e, n) {
    "use strict";
    var i = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "GET",
            a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 === t.length) return !1;
        var o = !1;
        "function" == typeof n && (o = !0);
        var r = $('meta[name="csrf-token"]').attr("content");
        void 0 !== r && "GET" !== i && (e._csrf = r), $.ajax({
            url: t,
            data: e,
            method: i,
            dataType: "json",
            xhrFields: {withCredentials: a}
        }).success(function (t, e) {
            o && n(t, e)
        }).error(function (t, e) {
            o && n(t, e)
        })
    };
    e.a = i
}, , , , function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = n(50), a = n.n(i), o = function (t) {
        return n.e(0).then(function () {
            var e = [n(64)];
            t.apply(null, e)
        }.bind(this)).catch(n.oe)
    }, r = function (t) {
        return n.e(1).then(function () {
            var e = [n(136)];
            t.apply(null, e)
        }.bind(this)).catch(n.oe)
    }, s = [{
        path: "/",
        component: a.a,
        children: [{name: "production", path: "", component: o}, {
            name: "edit",
            path: "edit",
            component: r
        }, {name: "preview", path: "preview", component: o}]
    }, {path: "*", redirect: {name: "production"}}];
    e.default = s
}, , , , , , , , , , , , , , , , , , function (t, e, n) {
    "use strict";
    var i = n(78), a = n.n(i), o = window.location, r = o.hostname, s = "https://" + r, c = function t() {
        a()(this, t)
    };
    c.RoutePath = o.pathname, c.ProductionHost = "tian.yam.com", c.Domain = r, c.Protocol = "https://", c.Host = s, c.DragImgUrl = "https://fakeimg.pl/160x80/?text=On Dragginggggggggg", c.WidgetThumb = "http://fakeimg.pl/172x114/?text=", c.ApiGetChannel = s + "/api/dnd/channel/get-collection", c.ApiSaveChannel = s + "/api/dnd/channel/save-all", c.ApiSyncBlogger = s + "/api/v1/blogger/get-blogger-by-uid", c.ApiSyncPost = s + "/api/v1/post/get-post-by-uid", c.ApiGetPageViewCommentCount = s + "/api/v1/post/get-page-view-comment-count", c.ApiGetPageView = s + "/api/v1/post/get-page-view", c.ApiSyncUpdatedData = s + "/api/dnd/channel/update-content", c.ApiGetNotices = s + "/ajax/notify/get", c.ApiReadNotice = s + "/ajax/notify/read-collection", c.CookieTianReadNotices = "Tian_Read_Notices", c.getChoiceArticleList = s + "/api/yam/submissions/get-submission-pass-data", e.a = c
}, , , , , , , , , , , , , , function (t, e, n) {
    function i(t) {
        n(110)
    }

    var a = n(0)(n(65), n(128), i, null, null);
    t.exports = a.exports
}, , , function (t, e, n) {
    "use strict";
    n(17).a.filter("capitalize", function (t) {
        return t ? (t = t.toString(), t.charAt(0).toUpperCase() + t.slice(1)) : ""
    })
}, function (t, e, n) {
    "use strict";
    var i = n(17), a = new i.a;
    Object.defineProperty(i.a.prototype, "$bus", {
        get: function () {
            return this.$root.bus
        }
    }), e.a = a
}, , , , , function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = n(50), a = n.n(i), o = function (t) {
        return n.e(0).then(function () {
            var e = [n(64)];
            t.apply(null, e)
        }.bind(this)).catch(n.oe)
    }, r = [{path: "/", component: a.a, children: [{name: "production", path: "", component: o}]}, {
        path: "*",
        redirect: {name: "production"}
    }];
    e.default = r
}, , function (t, e, n) {
    "use strict";
    var i = n(14), a = {
        methods: {
            $_mixinGetCover: function (t) {
                return null == t || 0 === t.length ? "http://via.placeholder.com/300x200" : t
            }, $_mixinRedirectAction: function (t, e) {
                "edit" !== this.$root.displayMode && (e.preventDefault(), e.stopPropagation(), window.open(t))
            }, $_mixinTimestampToDate: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ".",
                    n = new Date(1e3 * Number(t));
                return n.getFullYear() + e + ((n.getMonth() + 1 < 10 ? "0" + (n.getMonth() + 1) : n.getMonth() + 1) + e) + n.getDate()
            }, $_mixinSyncData: function (t, e) {
                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                n.i(i.a)(t, e, function (t, e) {
                    200 === t.code && "function" == typeof a && a(t, e)
                }, "POST")
            }, $_mixinAfterSyncData: function (t, e) {
                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                n.i(i.a)(t, e, function (t, e) {
                    t.code, "function" == typeof a && a(t, e)
                }, "POST")
            }, $_mixinAdSizeToStyle: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return t.length < 2 ? "" : ["width:" + t[0] + "px", "height:" + t[1] + "px"].join("; ")
            }
        }
    };
    e.a = a
}, , , , function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = n(117), a = n.n(i), o = n(116), r = n.n(o), s = n(115), c = n.n(s),
        u = {headerBlock: a.a, footerBlock: r.a, commonModals: c.a};
    e.default = {
        props: {
            allPageContent: {type: Object, defulat: {}},
            currentPage: {type: Object, default: {}},
            currentWidgets: {
                type: Array, default: function () {
                    return []
                }
            },
            menuTabs: {
                type: Object, default: function () {
                    return {}
                }
            },
            widgetStore: {
                type: Object, default: function () {
                    return {}
                }
            }
        }, data: function () {
            return {}
        }, methods: {}, created: function () {
        }, components: u
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = n(122), a = n.n(i), o = {"message-box": a.a};
    e.default = {props: {}, components: o}
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = n(119), a = n.n(i), o = n(118), r = n.n(o), s = {"nav-component": a.a, "menu-component": r.a};
    e.default = {
        props: {
            menuTabs: {
                type: Object, default: function () {
                    return {}
                }
            }
        }, data: function () {
            return {}
        }, created: function () {
        }, methods: {}, components: s
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
        props: {
            menuTabs: {
                type: Object,
                default: function () {
                    return {}
                }
            }
        }, data: function () {
            return {activeIndex: 0, initSystemTime: 0, currentPage: {}, pageLimit: 0}
        }, created: function () {
            this.injectStyleBlock(), this.setBodyId(), this.initSystemTime = this.$root.getSystemTime(), this.syncCurrentPage();
            var t = this.$root.getChannelData();
            this.pageLimit = t.page_limit
        }, updated: function () {
            var t = this;
            this.$nextTick(function () {
                t.injectStyleBlock(), t.syncCurrentPage()
            })
        }, methods: {
            getThemeClass: function (t) {
                var e = "theme-tabs";
                return this.currentPage.id == t && (e += " current"), e
            }, checkThemeDisplay: function (t) {
                var e = this.$root.getDisplayMode();
                if (2 == t.status) return !1;
                if ("edit" !== e) {
                    if (0 != t.publish_time && t.publish_time > this.initSystemTime) return !1;
                    if (0 != t.offline_time && t.offline_time < this.initSystemTime) return !1
                }
                return !0
            }, injectStyleBlock: function () {
                var t = document.createElement("style");
                document.head.appendChild(t);
                var e = t.sheet;
                for (var n in this.menuTabs.sortList) {
                    n = parseInt(n);
                    var i = this.menuTabs.sortList[n], a = this.menuTabs.tabs[i];
                    e.insertRule("#theme" + n + " {--colortag:" + a.color + ";}", 0), e.insertRule(".theme-tab li:nth-child(" + (n + 1) + ") { --tabcolor:" + a.color + ";}", 1)
                }
            }, setBodyId: function () {
                var t = "theme" + this.activeIndex;
                this.$nextTick(function () {
                    $("body").attr("id", t)
                })
            }, onSelectTheme: function (t, e) {
                e = parseInt(e), this.currentPage.id != t && (this.activeIndex = e, this.setBodyId(), this.$root.changePageContent(t, e))
            }, editMenu: function () {
                var t = this.menuTabs;
                t.activeIndex = this.activeIndex, this.$bus.$emit("onMenuEditorOpen", t)
            }, syncCurrentPage: function () {
                this.currentPage = this.$root.getCurrentPage()
            }
        }, computed: {
            activeMenus: function () {
                var t = this;
                return this.menuTabs.sortList.filter(function (e, n) {
                    return n < t.pageLimit
                })
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = n(121), a = n.n(i), o = n(120), r = n.n(o), s = {"production-nav": a.a, "editor-nav": r.a};
    e.default = {
        data: function () {
            return {}
        }, created: function () {
        }, methods: {}, components: s
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
        data: function () {
            return {isActive: !1}
        }, created: function () {
        }, methods: {
            saveData: function () {
                this.isActive || (this.isActive = !0, this.$root.saveData(this.afterSave))
            }, afterSave: function () {
                this.isActive = !1
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = n(19), a = n.n(i), o = n(61), r = n(14), s = n(111), c = n.n(s);
    e.default = {
        mixins: [o.a], data: function () {
            return {
                defaultMessage: "靜悄悄 沒有訊息",
                notices: {count: 0, unreadCount: 0, data: []},
                noticeActive: !1,
                menuActive: !1,
                role: "user",
                member: {},
                EnvProps: {}
            }
        }, created: function () {
            this.EnvProps = this.$root.getEnvProps();
            var t = c.a.getJSON(this.EnvProps.CookieTianReadNotices);
            t = void 0 !== t ? t : {};
            var e = this.$root.getClient();
            if (!0 === e.isGuest) return void(this.role = "user");
            !0 === e.isBlogger ? this.role = "blogger" : this.role = "member", this.member = window.JSVAR.member
        }, mounted: function () {
            this.apiGetNoticeData()
        }, methods: {
            noticeControl: function () {
                this.noticeActive = !this.noticeActive, this.menuActive = !1
            }, menuControl: function () {
                this.menuActive = !this.menuActive, this.noticeActive = !1
            }, onClickNotice: function (t, e) {
                "0" === t.status && (t.status = "1", this.notices.unreadCount > 0 && (this.notices.unreadCount -= 1), this.apiSendReadRequest(t.id, t.status)), this.$_mixinRedirectAction(t.url, e)
            }, apiGetNoticeData: function () {
                var t = this, e = this.EnvProps.ApiGetNotices,
                    i = c.a.getJSON(this.EnvProps.CookieTianReadNotices) || {};
                n.i(r.a)(e, {}, function (e, n) {
                    if (200 === e.code) {
                        var a = e.data, o = a.count, r = 0, s = [];
                        if (void 0 !== i) for (var c in a.notice) {
                            var u = a.notice[c].id;
                            i.hasOwnProperty(u) || (r++, s.push(a.notice[c]))
                        }
                        t.notices = {count: o, unreadCount: r, data: s}
                    }
                }, "POST")
            }, apiSendReadRequest: function (t, e) {
                var i = this.EnvProps.ApiReadNotice, a = {id: t, status: e}, o = this.updateNoticeCookie(t);
                n.i(r.a)(i, a, o, "POST")
            }, updateNoticeCookie: function (t) {
                var e = c.a.getJSON(this.EnvProps.CookieTianReadNotices);
                e = void 0 !== e ? e : {}, e[t] = 1, c.a.set(this.EnvProps.CookieTianReadNotices, a()(e), {expires: 600})
            }, isRead: function (t) {
                var e = t.status, n = c.a.getJSON(this.EnvProps.CookieTianReadNotices);
                return n = void 0 !== n ? n : {}, "1" === e || n.hasOwnProperty(t.id) ? "readed" : ""
            }, getMemberUrl: function () {
                return "https://users.tian.yam.com"
            }, getBloggerUrl: function () {
                return "blogger" === this.role ? this.member.blogURL : window.location.origin
            }, getApplyBlogUrl: function () {
                return [this.getMemberUrl(), "member", "settings?action=apply"].join("/")
            }, getSettingUrl: function () {
                var t = [];
                switch (this.role) {
                    case"blogger":
                        t = [this.getBloggerUrl(), "member", "settings"];
                        break;
                    case"member":
                        t = [this.getMemberUrl(), "member", "settings"];
                        break;
                    default:
                        t = [window.location.origin]
                }
                return t.join("/")
            }, getMemberName: function () {
                return "blogger" === this.role ? this.member.bloggerUid : "會員"
            }, getLogoutUrl: function () {
                return [window.location.origin, "user", "logout"].join("/")
            }
        }
    }
}, function (t, e) {
    var n = function () {
        var t, e, n = {bg: "", txt: "", icon: ""}, i = function () {
            t = $("body")
        }, a = function () {
        }, o = function () {
        }, r = function (i, a, o, r, s) {
            t.find(".update-message-block").remove(), n.bg = a, n.txt = i, n.icon = o, e = $(tmpl("tmpl-update-message-block", n)), t.append(e), "number" != typeof s && (s = 5e3);
            var c = s + 300;
            setTimeout(function () {
                e.addClass("active")
            }), setTimeout(function () {
            }, s), setTimeout(function () {
                e.remove(), r && r()
            }, c)
        }, s = function (t, e, n) {
            r(t, "#28a745", "icon-ok-circled", e, n)
        }, c = function (t, e, n) {
            r(t, "#dc3545", "icon-attention-circled", e, n)
        };
        !function () {
            i(), a(), o()
        }(), this.success = s, this.warning = c
    };
    window.Message = new n
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = n(20), a = n.n(i), o = n(19), r = n.n(o), s = n(17), c = n(60), u = n(36), l = n(14), d = n(54);
    n(53);
    s.a.config.productionTip = !1, s.a.use(c.a);
    var p = 0, m = "production", g = {edit: "page--edit", preview: "page--preview", production: ""}, h = [],
        f = function (t, e, i) {
            n.i(l.a)(t, e, function (t, e) {
                if (200 !== t.code) return;
                var n = t.data, a = {
                    menuTabs: {},
                    defaultPageId: 0,
                    channelData: {},
                    defaultAllPageContent: {},
                    widgetStore: {},
                    serverNo: 2
                };
                a.defaultPageId = n.channel.default_page, a.channelData = n.channel, a.menuTabs = n.page, a.widgetStore = n.widgetStore, a.serverNo = n.server, p = n.timestamp;
                var o = n.pageContent, s = null;
                for (s in a.menuTabs.sortList) {
                    var c = a.menuTabs.sortList[s], l = o[c], d = [], g = null;
                    for (g in l) {
                        var h = l[g], f = {
                            id: h.id,
                            page_id: h.page_id,
                            page_widget_id: h.page_widget_id,
                            content_id: h.content_id,
                            key: h.key,
                            name: h.name,
                            widgetConfig: h.widgetConfig,
                            data: h.data,
                            time: h.time
                        };
                        f.data.forEach(function (t, e, n) {
                            t.hasOwnProperty("description") && (t.description = t.description.replace(/\n/g, ""))
                        }), d.push({vm: h.key, content: JSON.parse(r()(f))})
                    }
                    a.defaultAllPageContent[c] = d
                }
                i(a)
            }, "POST")
        }, v = function (t) {
            var e = t.menuTabs.sortList[0], i = t.channelData, o = t.defaultAllPageContent, f = t.menuTabs,
                v = t.widgetStore, b = t.serverNo, _ = new c.a({mode: "history", routes: h});
            new s.a({
                router: _,
                el: "#app",
                template: '\n            <router-view\n                :currentPage="currentPage"\n                :allPageContent="allPageContent"\n                :menuTabs="menuTabs"\n                :currentWidgets="currentWidgets"\n                :widgetStore="widgetStore"\n                :serverNo="serverNo"\n            ></router-view>\n        ',
                data: function () {
                    return {
                        bus: d.a,
                        displayMode: m,
                        allPageContent: o,
                        currentWidgets: o[e],
                        menuTabs: f,
                        widgetStore: v,
                        currentPage: {id: e, index: 0},
                        channelData: i,
                        googleAd: {registeredList: {}, ads: []},
                        serverNo: b
                    }
                },
                created: function () {
                    console.log("%c %s", "font-size:18px;color:#000;text-shadow:0 1px 0 #999,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);text-decoration:none;", "\n Tian DnD System \n Built with Vue.js and yam\n Join us https://s.yam.com/BZB75 or See https://www.yam.com for more infomation.\n\n")
                },
                mounted: function () {
                },
                methods: {
                    changeDisplayMode: function (t) {
                        return void 0 != g[t] && (this.displayMode = t, $("body").attr("class", g[this.displayMode]), !0)
                    }, getDisplayMode: function () {
                        return this.displayMode
                    }, getTabs: function () {
                        return this.menuTabs
                    }, getWidgetStore: function () {
                        return this.widgetStore
                    }, getClient: function () {
                        return window.JSVAR.client
                    }, getMember: function () {
                        return window.JSVAR.member
                    }, getSystemTime: function () {
                        return p
                    }, ensurePageContent: function (t) {
                        this.allPageContent.hasOwnProperty(t) || this.$set(this.allPageContent, t, [])
                    }, changePageContent: function (t, e) {
                        this.updateCurrentPage(t, e)
                    }, updateCurrentPage: function (t, e) {
                        this.$set(this.currentPage, "id", t), this.$set(this.currentPage, "index", e), this.currentWidgets = this.allPageContent[t]
                    }, updateMenuData: function (t) {
                        var e = JSON.parse(r()(t.newMenuTabs)), n = JSON.parse(r()(t.sortList));
                        this.$set(this.menuTabs, "tabs", e), this.$set(this.menuTabs, "sortList", n);
                        var i = !1, a = this;
                        for (var o in this.menuTabs.tabs) {
                            if (this.menuTabs.tabs.hasOwnProperty(o)) {
                                var s = this.menuTabs.tabs[o], c = n.indexOf(parseInt(o)) + 1;
                                2 != s.status && c > 0 && (s.sort = c), 2 === s.status && s.id == a.currentPage.id && (i = !0)
                            }
                            this.ensurePageContent(o)
                        }
                        i && this.updateCurrentPage(n[0], 0)
                    }, saveData: function (t) {
                        var e = this, i = u.a.ApiSaveChannel, a = this.normalizeChannelData(), o = this.currentPage.id;
                        n.i(l.a)(i, a, function (n, i) {
                            if (200 !== n.code) {
                                var a = n.message.length > 0 ? n.message : "Opps something is wrong...";
                                return void Message.warning(a, t())
                            }
                            var r = n.data.pageIds, s = [];
                            for (var c in r) {
                                var u;
                                !function (t) {
                                    var n = e.menuTabs.sortList[t], i = r[t];
                                    e.menuTabs.tabs.hasOwnProperty(i) || (u = e.menuTabs.tabs[n], u.id = i, e.menuTabs.tabs[i] = u, e.$delete(e.menuTabs.tabs, n), e.$nextTick(function () {
                                        this.ensurePageContent(i), this.$set(this.allPageContent, i, this.allPageContent[n]), this.$delete(this.allPageContent, n)
                                    }), n == o && e.updateCurrentPage(i, parseInt(t))), s[t] = i
                                }(c)
                            }
                            e.$set(e.menuTabs, "sortList", s), Message.success("儲存成功", t(), 1500)
                        }, "POST", !0)
                    }, normalizeChannelData: function () {
                        var t = [], e = {}, n = this.getTabs(), i = 0, a = this;
                        return n.sortList.forEach(function (o, r) {
                            var s = n.tabs[o];
                            2 != s.status && a.allPageContent.hasOwnProperty(s.id) && (0 == r && (i = s.id), t = a.allPageContent[s.id], e[o] = [], t.forEach(function (t, n) {
                                e[o].push(t.content)
                            }))
                        }), this.$set(this.channelData, "default_page", i), {
                            channel: this.channelData,
                            menu: n,
                            contents: e
                        }
                    }, getEnvProps: function () {
                        return u.a
                    }, getGoogleAd: function () {
                        return this.googleAd
                    }, getCurrentPage: function () {
                        return this.currentPage
                    }, getChannelData: function () {
                        return this.channelData
                    }, registerAd: function (t) {
                        var e = this;
                        if (window.hasOwnProperty("DfpGenerator") && "edit" != this.displayMode) {
                            var n = !1, i = [];
                            a()(t).map(function (a) {
                                var o = t[a];
                                if (e.googleAd.registeredList.hasOwnProperty(o.uid)) return window.DfpGenerator.reflash(), void(n = !0);
                                e.googleAd.registeredList[o.uid] = 1, i.push(o), DfpGenerator.appendDfp([o])
                            })
                        }
                    }, afterContentMounted: function () {
                        "edit" !== this.displayMode && setTimeout(function () {
                            window.DfpGenerator.reflash()
                        }, 800)
                    }
                }
            })
        };
    !function (t) {
        var e = u.a.ApiGetChannel, i = {id: t};
        switch (u.a.RoutePath) {
            case"/edit":
                m = "edit", i.mode = m, h = n(18).default;
                break;
            case"/preview":
                m = "preview", i.mode = m, h = n(18).default;
                break;
            case"/production":
            default:
                h = n(59).default
        }
        f(e, i, v)
    }(1)
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (t, e) {
}, , , , , function (t, e, n) {
    var i = n(0)(n(66), n(129), null, null, null);
    t.exports = i.exports
}, function (t, e, n) {
    var i = n(0)(null, n(125), null, null, null);
    t.exports = i.exports
}, function (t, e, n) {
    var i = n(0)(n(67), n(124), null, null, null);
    t.exports = i.exports
}, function (t, e, n) {
    var i = n(0)(n(68), n(123), null, null, null);
    t.exports = i.exports
}, function (t, e, n) {
    var i = n(0)(n(69), n(126), null, null, null);
    t.exports = i.exports
}, function (t, e, n) {
    var i = n(0)(n(70), n(131), null, null, null);
    t.exports = i.exports
}, function (t, e, n) {
    var i = n(0)(n(71), n(130), null, null, null);
    t.exports = i.exports
}, function (t, e, n) {
    var i = n(0)(n(72), n(127), null, null, null);
    t.exports = i.exports
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "theme-tabs"}, ["edit" == t.$root.displayMode ? n("a", {
                staticClass: "theme-tabs__edit-btn",
                attrs: {href: "javascript:void(0)"},
                on: {
                    click: function (e) {
                        t.editMenu()
                    }
                }
            }, [n("i", {staticClass: "icon-pencil"})]) : t._e(), t._v(" "), n("ul", {
                staticClass: "theme-tabs__tabs theme-tab",
                attrs: {id: "theme-tab"}
            }, t._l(t.activeMenus, function (e, i) {
                return n("li", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.checkThemeDisplay(t.menuTabs.tabs[e]),
                        expression: "checkThemeDisplay(menuTabs.tabs[pageId])"
                    }], key: "menu:" + e
                }, [n("a", {
                    class: t.getThemeClass(e), attrs: {href: "javascript:void(0)"}, on: {
                        click: function (n) {
                            n.preventDefault(), t.onSelectTheme(e, i)
                        }
                    }
                }, [t._v("\n            " + t._s(t.menuTabs.tabs[e].name) + "\n            ")])])
            }))])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("header", {staticClass: "site-header"}, [n("nav-component"), t._v(" "), n("menu-component", {attrs: {menuTabs: t.menuTabs}})], 1)
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement;
            t._self._c;
            return t._m(0)
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("footer", {staticClass: "site-footer"}, [n("nav", [n("ul", [n("li", [n("a", {
                attrs: {
                    href: "/signup?action=signup",
                    target: "_blank",
                    title: "",
                    "ga-category": "Home/index",
                    "ga-label": "Footer/免費註冊/member"
                }
            }, [t._v("免費註冊")])]), t._v(" "), n("li", [n("a", {
                attrs: {
                    href: "http://member.yam.com/Notice/?duty.htm",
                    target: "_blank",
                    title: "",
                    "ga-category": "Home/index",
                    "ga-label": "Footer/服務條款/member"
                }
            }, [t._v("服務條款")])]), t._v(" "), n("li", [n("a", {
                attrs: {
                    href: "http://member.yam.com/Notice/?privacy.htm",
                    target: "_blank",
                    title: "",
                    "ga-category": "Home/index",
                    "ga-label": "Footer/隱私權政策/member"
                }
            }, [t._v("隱私權政策")])]), t._v(" "), n("li", [n("a", {
                attrs: {
                    href: "http://member.yam.com/SiteMap/?Type=1",
                    target: "_blank",
                    title: "",
                    "ga-category": "Home/index",
                    "ga-label": "Footer/網站導覽/member"
                }
            }, [t._v("網站導覽")])]), t._v(" "), n("li", [n("a", {
                attrs: {
                    href: "http://help.yam.com/",
                    target: "_blank",
                    title: "",
                    "ga-category": "Home/index",
                    "ga-label": "Footer/服務中心/member"
                }
            }, [t._v("服務中心")])]), t._v(" "), n("li", [n("a", {
                attrs: {
                    href: "http://help.yam.com/m/D21E22D0995A13158474FEB3442D7454C1CBB80DBABF567B950CC33AD56937E00713F2F9229FC23376F08A14C6D3F28D805A1A5AB0AF67C6F0C25339AF4D654E5334DA2C5EFED4393AD9EA94EDC39E1346F17B9A28BC6930",
                    target: "_blank",
                    title: "",
                    "ga-category": "Home/index",
                    "ga-label": "Footer/聯絡我們/member"
                }
            }, [t._v("聯絡我們")])]), t._v(" "), n("li", [n("a", {
                attrs: {
                    href: "http://value.yam.com/",
                    target: "_blank",
                    title: "",
                    "ga-category": "Home/index",
                    "ga-label": "Footer/行銷合作/member"
                }
            }, [t._v("行銷合作")])])])]), t._v(" "), n("div", [n("h3", [t._v("天空部落")]), t._v(" "), n("p", [t._v("專為您設計的創作平台，"), n("br"), t._v("\n            網誌、相簿、社群等，我們通通都有！\n        ")])]), t._v(" "), n("div", {staticClass: "small"}, [t._v("\n        © 2017 yam blog. All Rights Reserved.\n    ")])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("nav", {
                staticClass: "site-header__bar",
                attrs: {id: "site-header__bar"}
            }, [t._m(0), t._v(" "), n("production" === this.$root.getDisplayMode() ? "production-nav" : "editor-nav")], 1)
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("a", {
                staticClass: "site-header__brand",
                attrs: {href: "#"}
            }, [n("img", {attrs: {src: "/static/images/blog_logo.png", alt: ""}})])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("script", {
                attrs: {
                    type: "text/x-tmpl",
                    id: "tmpl-update-message-block"
                }
            }, [t._v('\n    <div class="update-message-block">\n    <div class="inner-block" style="background-color: {%=o.bg%}">\n        <i class="{%=o.icon%}" aria-hidden="true"></i>\n        <span>{%=o.txt %}</span>\n    </div>\n    </div>\n')])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("header-block", {attrs: {menuTabs: t.menuTabs}}), t._v(" "), n("router-view", {
                attrs: {
                    currentWidgets: t.currentWidgets,
                    widgetStore: t.widgetStore
                }
            }), t._v(" "), n("footer-block"), t._v(" "), n("common-modals")], 1)
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("message-box")
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {attrs: {"meta-dom": "member-nav"}}, [n("div", {staticClass: "site-header__mob"}, [n("button", {
                staticClass: "btn--tg-notice toggle--notice",
                class: {open: t.noticeActive},
                on: {
                    click: function (e) {
                        t.noticeControl()
                    }
                }
            }, [n("i", {staticClass: "icon-bell"}, [n("span", {
                staticClass: "badge notice-num",
                attrs: {id: "notice-num"}
            }, [t._v(t._s(t.notices.unreadCount))])])]), t._v(" "), n("button", {
                staticClass: "btn--tg-site-menu toggle--site-menu",
                class: {open: t.menuActive},
                on: {
                    click: function (e) {
                        t.menuControl()
                    }
                }
            }, [n("i", {staticClass: "icon-menu"})])]), t._v(" "), n("div", {staticClass: "site-header__desk"}, [n("div", {
                staticClass: "site-header-drop toggle--notice",
                class: {open: t.noticeActive},
                on: {
                    click: function (e) {
                        t.noticeControl()
                    }
                }
            }, [n("a", {
                staticClass: "site-header-drop__btn btn--tg-notice toggle--notice",
                class: {open: t.noticeActive},
                attrs: {href: "#", "aria-haspopup": "true", "aria-expanded": "false"}
            }, [n("i", {staticClass: "icon-bell"}, [n("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.notices.unreadCount > 0,
                    expression: "notices.unreadCount>0"
                }], staticClass: "badge notice-num"
            }, [t._v(t._s(t.notices.unreadCount))])])]), t._v(" "), n("div", {
                staticClass: "site-header-drop__menu",
                attrs: {id: "notice-list"}
            }, [n("div", {staticClass: "inner notice-list"}, [0 === t.notices.unreadCount ? n("div", {staticClass: "info"}, [t._v("\n                        " + t._s(t.defaultMessage) + "\n                    ")]) : t._l(t.notices.data, function (e, i) {
                return n("a", {
                    class: t.isRead(e), attrs: {href: e.url}, on: {
                        click: function (n) {
                            n.preventDefault(), t.onClickNotice(e, n)
                        }
                    }
                }, [n("div", {staticClass: "imgbox"}, [n("img", {attrs: {src: t.$_mixinGetCover(e.cover)}})]), t._v(" "), n("div", [n("span", {staticClass: "date"}, [t._v(t._s(t.$_mixinTimestampToDate(e.end_time)))]), t._v(" "), n("span", {staticClass: "userid"}, [t._v(t._s(e.author))]), t._v(" "), n("span", {staticClass: "msg"}, [t._v(t._s(e.msg))])])])
            })], 2)])]), t._v(" "), n("div", {
                staticClass: "site-header-drop toggle--site-menu",
                class: {open: t.menuActive}
            }, ["user" === t.role ? n("a", {attrs: {href: "https://tian.yam.com/signup"}}, [t._v("登入會員")]) : t._e(), t._v(" "), "user" === t.role ? n("a", {attrs: {href: "https://tian.yam.com/signup?action=signup"}}, [t._v("註冊會員")]) : t._e(), t._v(" "), "member" === t.role ? n("a", {attrs: {href: t.getApplyBlogUrl()}}, [t._v("申請成為部落客")]) : t._e(), t._v(" "), "member" === t.role ? n("a", {
                class: {open: t.menuActive},
                attrs: {href: "#"},
                on: {
                    click: function (e) {
                        t.menuControl()
                    }
                }
            }, [n("span", {staticClass: "thumb-head"}, [n("img", {
                style: {backgroundImage: "url(" + t.member.avatar + ")"},
                attrs: {src: "/static/images/imgholder.png", alt: t.getMemberName()}
            })])]) : "blogger" === t.role ? n("a", {
                staticClass: "site-header-drop__btn btn--memhello btn--tg-site-menu toggle--site-menu",
                class: {open: t.menuActive},
                attrs: {href: "#", "aria-haspopup": "true", "aria-expanded": "false"},
                on: {
                    click: function (e) {
                        t.menuControl()
                    }
                }
            }, [t._v("\n                親愛的 "), n("span", {
                staticClass: "member-id",
                attrs: {id: "member-id"}
            }, [t._v(t._s(t.getMemberName()))]), t._v(" 您好\n                "), n("span", {staticClass: "thumb-head"}, [n("img", {
                style: {backgroundImage: "url(" + t.member.avatar + ")"},
                attrs: {src: "/static/images/imgholder.png", alt: t.getMemberName()}
            })])]) : t._e(), t._v(" "), "user" !== t.role ? n("div", {staticClass: "site-header-drop__menu"}, [n("div", {staticClass: "inner"}, ["blogger" === t.role ? n("a", {attrs: {href: t.getBloggerUrl()}}, [t._v("我的部落格")]) : t._e(), t._v(" "), n("a", {attrs: {href: t.getSettingUrl()}}, [t._v("設定")]), t._v(" "), n("a", {attrs: {href: t.getLogoutUrl()}}, [t._v("登出")])])]) : t._e()])])])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "site-header__editor"}, [n("div", {staticClass: "btn btn-gp"}, [n("router-link", {
                staticClass: "btn btn-gp__item",
                class: {current: "edit" == this.$root.getDisplayMode()},
                attrs: {to: {name: "edit"}}
            }, [t._v("編輯")]), t._v(" "), n("router-link", {
                staticClass: "btn btn-gp__item",
                class: {current: "preview" == this.$root.getDisplayMode()},
                attrs: {to: {name: "preview"}}
            }, [t._v("預覽")])], 1), t._v(" "), "edit" == this.$root.getDisplayMode() ? n("a", {
                staticClass: "btn btn--draft",
                class: {disable: t.isActive},
                attrs: {href: "#"},
                on: {
                    click: function (e) {
                        e.preventDefault(), t.saveData()
                    }
                }
            }, [t._v("儲存變更\n    ")]) : t._e(), t._v(" "), n("router-link", {
                staticClass: "btn btn--public",
                class: {current: "production" == this.$root.getDisplayMode()},
                attrs: {to: "/"}
            }, [t._v("切換到正式模式")])], 1)
        }, staticRenderFns: []
    }
}], [73]);