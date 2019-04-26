!function (e) {
    function t(i) {
        if (n[i]) return n[i].exports;
        var o = n[i] = {exports: {}, id: i, loaded: !1};
        return e[i].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }

    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}(function (e) {
    for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) switch (typeof e[t]) {
        case"function":
            break;
        case"object":
            e[t] = function (t) {
                var n = t.slice(1), i = e[t[0]];
                return function (e, t, o) {
                    i.apply(this, [e, t, o].concat(n))
                }
            }(e[t]);
            break;
        default:
            e[t] = e[e[t]]
    }
    return e
}([function (e, t, n) {
    (function (e) {
        "use strict";

        function t(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function i(e, t) {
            var n = {
                dimensionConfig: p,
                optionConfig: f,
                periodConfig: g,
                api: l.api,
                pivot: l.pivot,
                appManager: h,
                calendarManager: A,
                requestManager: m,
                sessionStorageManager: x
            }, i = new l.manager.UiManager(n);
            n.uiManager = i, i.applyTo((0, s["default"])(l.api));
            var o = new l.manager.InstanceManager(n);
            n.instanceManager = o, o.apiResource = "reportTable", o.apiEndpoint = "reportTables", o.apiModule = "dhis-web-pivot", o.plugin = !0, o.dashboard = reportTablePlugin.dashboard, o.applyTo((0, s["default"])(l.api));
            var r = new l.manager.TableManager(n);
            n.tableManager = r, i.setInstanceManager(o), o.setFn(function (e) {
                var t, n = e.sorting ? e.sorting.id : null, o = "", a = function () {
                    var t = e.getResponse(), n = new l.pivot.TableAxis(e, t, "col"),
                        i = new l.pivot.TableAxis(e, t, "row");
                    return new l.pivot.Table(e, t, n, i, {skipTitle: !0})
                };
                n && "total" !== n && e.sort(), t = a(), n && "total" === n && (e.sort(t), t = a()), o += reportTablePlugin.showTitles ? i.getTitleHtml(e.title || e.name) : "", o += t.html, i.update(o, e.el), r.setColumnHeaderMouseHandlers(e, t), i.unmask()
            }), e.loadingIndicator && i.renderLoadingIndicator(t.el), t.id ? o.getById(t.id, function (e) {
                e = new l.api.Layout(n, (0, a["default"])(t, e)), o.getReport(e)
            }) : o.getReport(new l.api.Layout(n, t))
        }

        n(116);
        var o = n(246), a = t(o), r = n(52), s = t(r), l = n(32), d = n(109), u = "25";
        l.api.Layout = d.Layout;
        var c = {api: l.api, init: l.init, pivot: l.pivot}, p = new l.config.DimensionConfig;
        c.dimensionConfig = p;
        var f = new l.config.OptionConfig;
        c.optionConfig = f;
        var g = new l.config.PeriodConfig;
        c.periodConfig = g;
        var h = new l.manager.AppManager(c);
        c.appManager = h;
        var A = new l.manager.CalendarManager(c);
        c.calendarManager = A;
        var m = new l.manager.RequestManager(c);
        c.requestManager = m;
        var b = new l.manager.I18nManager(c);
        c.i18nManager = b;
        var x = new l.manager.SessionStorageManager(c);
        c.sessionStorageManager = x, p.setI18nManager(b), f.setI18nManager(b), g.setI18nManager(b), h.applyTo([].concat((0, s["default"])(l.api), (0, s["default"])(l.pivot))), p.applyTo((0, s["default"])(l.pivot)), f.applyTo([].concat((0, s["default"])(l.api), (0, s["default"])(l.pivot))), e.reportTablePlugin = new l.util.Plugin({
            refs: c,
            VERSION: u,
            renderFn: i
        })
    }).call(t, function () {
        return this
    }())
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = Array.isArray
}, [497, 106, 1], [499, 108], function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function o(e) {
        return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
    }

    function a(e, t) {
        var n = function (e, t, n) {
            if (!e || !e.length) return [];
            if ("string" == typeof e && (e = e.split("")), supportsSliceOnNodeList) return slice.call(e, t || 0, n || e.length);
            var i, o = [];
            for (t = t || 0, n = n ? n < 0 ? e.length + n : n : e.length, i = t; i < n; i++) o.push(e[i]);
            return o
        };
        if (void 0 === e || null === e) return [];
        if ((0, s["default"])(e)) return t ? Array.prototype.slice.call(e) : e;
        var i = "undefined" == typeof e ? "undefined" : o(e);
        return !e || void 0 === e.length || "string" === i || "function" === i && e.apply ? [e] : n(e)
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = a;
    var r = n(1), s = i(r)
}, [488, 1, 2, 3], function (e, t) {
    "use strict";

    function n(e, t) {
        return Array.prototype.indexOf.call(e, t) !== -1
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = n
}, , function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function o(e, t, n, i) {
        if ((0, u["default"])(e)) return n = n || (0, l["default"])(n) ? n : "name", e.sort(function (e, o) {
            return (0, p["default"])(e) && (0, p["default"])(o) && (e = e[n], o = o[n]), (0, u["default"])(e) && (0, u["default"])(o) && (e = e[n], o = o[n]), (0, r["default"])(e) && (0, r["default"])(o) ? (e = e.toLowerCase(), o = o.toLowerCase(), "DESC" === t ? e < o ? 1 : e > o ? -1 : 0 : e < o ? -1 : e > o ? 1 : 0) : (0, l["default"])(e) && (0, l["default"])(o) ? "DESC" === t ? o - e : e - o : void 0 === e || null === e ? i ? -1 : 1 : (void 0 === o || null === o) && i ? 1 : -1
        }), e
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = o;
    var a = n(3), r = i(a), s = n(19), l = i(s), d = n(1), u = i(d), c = n(2), p = i(c)
}, 1, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function o(e) {
        for (var t, n = [], i = 0, o = e.length; i < o; i++) t = e[i], (0, r["default"])(t) || n.push(t);
        return n
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = o;
    var a = n(46), r = i(a)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.Dimension = void 0;
    var o, a = n(3), r = i(a), s = n(2), l = i(s), d = n(4), u = i(d), c = n(6), p = i(c), f = n(18), g = i(f),
        h = n(43), A = i(h), m = n(12), b = ["dx", "pe", "ou"];
    t.Dimension = o, t.Dimension = o = function (e) {
        var t = this;
        t.klass = o, e = (0, l["default"])(e) ? e : {}, e.items = (0, u["default"])(e.items), t.dimension = e.dimension, t.items = e.items.map(function (e) {
            return new m.Record(e).val()
        }), e.sorted && (t.sorted = e.sorted)
    }, o.prototype.log = function (e, t) {
        t || console.log(e, this)
    }, o.prototype.val = function (e) {
        return (0, r["default"])(this.dimension) ? (this.items.length || "co" === this.dimension || this.log("(Dimension) No items", e), this) : (this.log("(Dimension) Dimension is not a string", e), null)
    }, o.prototype.add = function (e) {
        var t = new m.Record(e).val();
        t && this.items.push(t)
    }, o.prototype.getRecords = function (e, t, n) {
        var i = t ? t.getRecordsByDimensionName(this.dimension) : this.items;
        return n && (i = i.slice(0)), e = (0, p["default"])(["id", "name"], e) ? e : null, e ? i.sort(function (t, n) {
            return t[e] > n[e]
        }) : i
    }, o.prototype.removeItems = function () {
        this.items = []
    }, o.prototype.isRequired = function () {
        return (0, p["default"])(b, this.dimension)
    }, o.prototype.getRecordIds = function (e, t, n) {
        var i = this.getRecords(e ? "id" : null, t, n);
        return (0, g["default"])(i, "id")
    }, o.prototype.getRecordNames = function (e, t, n) {
        return (0, g["default"])(this.getRecords(e ? "name" : null, t, n), "name")
    }, o.prototype.extendRecords = function (e) {
        var t = this, n = t.getRecords();
        return n.forEach(function (t) {
            t.setName(null, e)
        }), n
    }, o.prototype.toPlugin = function () {
        delete this.klass, this.items.forEach(function (e) {
            e.toPlugin()
        })
    }, o.prototype.toPost = function () {
        delete this.klass, this.items.forEach(function (e) {
            e.toPost()
        })
    }, o.prototype.url = function (e, t, n) {
        var i = (n ? "filter" : "dimension") + "=" + this.dimension, o = (0, A["default"])(this.getRecordIds(e, t, !0));
        return i += o.length ? ":" + o.join(";") : ""
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.Record = void 0;
    var o, a = n(3), r = i(a), s = n(2), l = i(s);
    t.Record = o, t.Record = o = function (e) {
        var t = this;
        t.klass = o, e = (0, l["default"])(e) ? e : {}, t.id = e.id, t.name = e.name, t.objectName = e.objectName, (0, r["default"])(e.dimensionItemType) && (t.dimensionItemType = e.dimensionItemType)
    }, o.prototype.log = function (e, t) {
        t || console.log(e, this)
    }, o.prototype.val = function (e) {
        return this && (0, r["default"])(this.id) ? this : (this.log("(Record) Id is not a string", e), null)
    }, o.prototype.setName = function (e, t) {
        var n = this;
        n.name = n.name || e || (t ? t.metaData.names[n.id] : void 0)
    }, o.prototype.toPlugin = function () {
        delete this.klass
    }, o.prototype.toPost = function () {
        delete this.klass, delete this.name, delete this.dimensionItemType
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.ResponseRowIdCombination = void 0;
    var o, a = n(3), r = i(a), s = n(1), l = i(s);
    t.ResponseRowIdCombination = o, t.ResponseRowIdCombination = o = function (e) {
        var t = this;
        t.klass = o, e = (0, l["default"])(e) ? e : (0, r["default"])(e) ? e.split("-") : null, t.ids = e || []
    }, o.prototype.add = function (e) {
        e && this.ids.push(e)
    }, o.prototype.get = function () {
        return this.ids.join("-")
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.DateManager = void 0;
    var o, a = n(3), r = i(a);
    t.DateManager = o, t.DateManager = o = function () {
        this.klass = o
    }, o.toDate = function (e) {
        return (0, r["default"])(e) ? new Date(e) : e
    }, o.isValid = function (e) {
        return e = this.toDate(e), "[object Date]" === Object.prototype.toString.call(e) && "Invalid Date" !== e.toString()
    }, o.getYYYYMMDD = function (e, t) {
        if (e = this.toDate(e), !t && !o.isValid(e)) return null;
        var n = new Date(e), i = "" + (1 + n.getMonth()), a = "" + n.getDate();
        return i = 1 === i.length ? "0" + i : i, a = 1 === a.length ? "0" + a : a, n.getFullYear() + "-" + i + "-" + a
    }, o.getTimeDifference = function (e) {
        for (var t = Math.floor((new Date - new Date(e)) / 1e3); t < 0;) t += 3600;
        var n = Math.floor(t / 31536e3);
        return n > 1 ? n + " years" : (n = Math.floor(t / 2592e3), n > 1 ? n + " months" : (n = Math.floor(t / 86400), n > 1 ? n + " days" : (n = Math.floor(t / 3600), n > 1 ? n + " hours" : (n = Math.floor(t / 60), n > 1 ? n + " minutes" : Math.floor(t) + " seconds"))))
    }
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = ["padding-right: 0", "padding-left: 5px", "border-color: transparent", "background: none", "font-size: 11px", "line-height: 13px"],
        i = ["font-size: 11px", "font-weight: bold", "color: #111", "padding-left: 5px", "padding-top: 4px", "margin-bottom: 0"],
        o = 22, a = 48, r = 7, s = 10, l = 700, d = 14, u = l - d, c = 120, p = 60, f = 8;
    t["default"] = {
        textfieldStyle: n,
        textFieldLabelStyle: i,
        toggleBtnWidth: o,
        toggleBtnMarginTop: a,
        toggleBtnMarginRight: r,
        toggleBtnMarginLeft: s,
        windowWidth: l,
        borderWidth: d,
        windowCmpWidth: u,
        lastUpdatedColWidth: c,
        buttonColWidth: p,
        paddingColWidth: f
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.InterpretationWindow = void 0;
    var i = n(17), o = t.InterpretationWindow = void 0;
    t.InterpretationWindow = o = function (e, t) {
        var n = e.appManager, o = e.uiManager, a = e.instanceManager, r = e.i18nManager.get(), s = n.getApiPath(),
            l = a.apiResource, d = (a.apiEndpoint, Ext.create("Ext.form.field.TextArea", {
                cls: "ns-textarea",
                height: 130,
                width: 407,
                fieldStyle: "padding-left:3px; padding-top:3px",
                emptyText: r.write_your_interpretation + "..",
                enableKeyEvents: !0,
                listeners: {
                    keyup: function () {
                        p.xable()
                    }
                }
            })), u = new i.SharingWindow(e, t, (!0)),
            c = Ext.create("Ext.container.Container", {style: "padding-top:10px", items: u.items}),
            p = Ext.create("Ext.button.Button", {
                text: r.share, disabled: !0, xable: function () {
                    this.setDisabled(!d.getValue())
                }, handler: function () {
                    d.getValue() && Ext.Ajax.request({
                        url: encodeURI(s + "/interpretations/" + l + "/" + a.getStateFavoriteId()),
                        method: "POST",
                        params: d.getValue(),
                        headers: {"Content-Type": "text/html"},
                        success: function (e) {
                            var n = (e.getResponseHeader("location") || "").split("/").pop(), i = t.object.id,
                                r = u.getBody();
                            Ext.Ajax.request({
                                url: encodeURI(s + "/sharing?type=interpretation&id=" + n),
                                method: "POST",
                                headers: {"Content-Type": "application/json"},
                                params: Ext.encode(r),
                                callback: function () {
                                    Ext.Ajax.request({
                                        url: encodeURI(s + "/sharing?type=" + l + "&id=" + i),
                                        method: "POST",
                                        headers: {"Content-Type": "application/json"},
                                        params: Ext.encode(r),
                                        callback: function () {
                                            a.getById(null, function (e, t) {
                                                a.getReport(e, t, !1, !1, function () {
                                                    o.unmask()
                                                })
                                            })
                                        }
                                    })
                                }
                            }), d.reset(), f.destroy()
                        }
                    })
                }
            }), f = Ext.create("Ext.window.Window", {
                title: r.write_interpretation,
                layout: "fit",
                bodyStyle: "padding:4px; background-color:#fff",
                resizable: !1,
                destroyOnBlur: !0,
                modal: !0,
                items: [d, c],
                bbar: {cls: "ns-toolbar-bbar", defaults: {height: 24}, items: ["->", p]},
                listeners: {
                    show: function (e) {
                        o.setAnchorPosition(e, "favoriteButton"), o.enableRightClick(), e.hasDestroyOnBlurHandler || o.addDestroyOnBlurHandler(e)
                    }, hide: function () {
                        o.disableRightClick()
                    }
                }
            });
        return o.reg(f, "interpretationWindow"), f
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.SharingWindow = void 0;
    var o = n(1), a = i(o), r = t.SharingWindow = void 0;
    t.SharingWindow = r = function (e, t, n) {
        var i, o, r, s, l, d, u, c, p, f, g = e.appManager, h = e.uiManager, A = e.instanceManager,
            m = e.i18nManager.get(), b = g.getApiPath();
        if (i = function (e, t, n) {
                var i, o, a, r, s, l;
                return i = function () {
                    var e = [{id: "r-------", name: m.can_view}, {id: "rw------", name: m.can_edit_and_view}];
                    return t && e.unshift({id: "--------", name: m.none}), e
                }, o = Ext.create("Ext.data.Store", {fields: ["id", "name"], data: i()}), a = function () {
                    var i = [];
                    return r = Ext.create("Ext.form.field.ComboBox", {
                        style: "margin-bottom:2px",
                        fieldLabel: t ? m.public_access : e.name,
                        labelStyle: "color:#333",
                        cls: "ns-combo",
                        width: 380,
                        labelWidth: 250,
                        queryMode: "local",
                        valueField: "id",
                        displayField: "name",
                        labelSeparator: null,
                        editable: !1,
                        disabled: !!n,
                        value: e.access || "rw------",
                        store: o
                    }), i.push(r), t || i.push(Ext.create("Ext.container.Container", {
                        cls: "ns-grid-row-icon-delete",
                        style: "margin-top:2px; margin-left:7px",
                        bodyStyle: "border:0 none; background:#fff",
                        overCls: "pointer",
                        width: 16,
                        height: 16,
                        listeners: {
                            render: function (e) {
                                e.getEl().on("click", function (t) {
                                    e.up("panel").destroy(), f && f.doLayout()
                                })
                            }
                        }
                    })), i
                }, s = function () {
                    return {id: e.id, name: e.name, access: r.getValue()}
                }, l = Ext.create("Ext.panel.Panel", {
                    layout: "column",
                    bodyStyle: "border:0 none",
                    getAccess: s,
                    items: a()
                })
            }, o = function () {
                var e = {
                    object: {
                        id: t.object.id,
                        name: t.object.name,
                        publicAccess: c.down("combobox").getValue(),
                        externalAccess: !!u && u.getValue()
                    }
                };
                if (d.items.items.length > 1) {
                    e.object.userGroupAccesses = [];
                    for (var n, i = 1; i < d.items.items.length; i++) n = d.items.items[i], e.object.userGroupAccesses.push(n.getAccess())
                }
                return e
            }, r = Ext.create("Ext.data.Store", {
                fields: ["id", "name"],
                proxy: {
                    type: "ajax",
                    url: encodeURI(b + "/sharing/search"),
                    extraParams: {pageSize: 50},
                    startParam: !1,
                    limitParam: !1,
                    reader: {type: "json", root: "userGroups"}
                }
            }), s = Ext.create("Ext.form.field.ComboBox", {
                valueField: "id",
                displayField: "name",
                emptyText: m.search_for_user_groups,
                queryParam: "key",
                queryDelay: 200,
                minChars: 1,
                hideTrigger: !0,
                fieldStyle: "height:26px; padding-left:6px; border-radius:1px; font-size:11px",
                style: "margin-bottom:5px",
                width: 380,
                store: r,
                listeners: {
                    beforeselect: function (e) {
                        l.enable()
                    }, afterrender: function (e) {
                        e.inputEl.on("keyup", function () {
                            l.disable()
                        })
                    }
                }
            }), l = Ext.create("Ext.button.Button", {
                text: "+",
                style: "margin-left:2px; padding-right:4px; padding-left:4px; border-radius:1px",
                disabled: !0,
                height: 26,
                handler: function (e) {
                    d.add(i({id: s.getValue(), name: s.getRawValue(), access: "r-------"})), s.clearValue(), e.disable()
                }
            }), d = Ext.create("Ext.container.Container", {bodyStyle: "border:0 none"}), t.meta.allowExternalAccess && (u = d.add({
                xtype: "checkbox",
                fieldLabel: m.allow_external_access,
                labelSeparator: "",
                labelWidth: 250,
                checked: !!t.object.externalAccess
            })), c = d.add(i({
                id: t.object.id,
                name: t.object.name,
                access: t.object.publicAccess
            }, !0, !t.meta.allowPublicAccess)), (0, a["default"])(t.object.userGroupAccesses)) for (var x, y = 0; y < t.object.userGroupAccesses.length; y++) x = i(t.object.userGroupAccesses[y]), d.add(x);
        return p = [{
            html: t.object.name,
            bodyStyle: "border:0 none; font-weight:bold; color:#333",
            style: "margin-bottom:7px"
        }, {
            xtype: "container",
            layout: "column",
            bodyStyle: "border:0 none",
            items: [s, l]
        }, {
            html: m.created_by + " " + t.object.user.name,
            bodyStyle: "border:0 none; color:#777",
            style: "margin-top:2px;margin-bottom:7px"
        }, d], n ? {
            UserGroupRow: i,
            getBody: o,
            userGroupStore: r,
            userGroupField: s,
            userGroupButton: l,
            userGroupRowContainer: d,
            externalAccess: u,
            publicGroup: c,
            items: p
        } : f = Ext.create("Ext.window.Window", {
            title: m.sharing_settings,
            bodyStyle: "padding:5px 5px 3px; background-color:#fff",
            resizable: !1,
            modal: !0,
            destroyOnBlur: !0,
            items: p,
            bbar: ["->", {
                text: m.save, handler: function () {
                    Ext.Ajax.request({
                        url: encodeURI(b + "/sharing?type=" + A.apiResource + "&id=" + t.object.id),
                        method: "POST",
                        headers: {"Content-Type": "application/json"},
                        params: Ext.encode(o()),
                        success: function () {
                            A.getById(null, function (e, t) {
                                A.getReport(e, t, !1, !1, function () {
                                    h.unmask()
                                })
                            })
                        }
                    }), f.destroy()
                }
            }],
            listeners: {
                show: function (e) {
                    var t = h.get("favoriteWindow");
                    if (t && t.rendered) {
                        var n = (t.getWidth() - e.getWidth()) / 2 + t.getPosition()[0], i = e.getPosition()[1] / 3;
                        e.setPosition(n, i), t.destroyOnBlur = !1
                    } else h.setAnchorPosition(e, "favoriteButton");
                    e.hasDestroyOnBlurHandler || h.addDestroyOnBlurHandler(e)
                }, destroy: function () {
                    var e = h.get("favoriteWindow");
                    e && (e.destroyOnBlur = !0)
                }
            }
        })
    }
}, function (e, t) {
    "use strict";

    function n(e, t) {
        var n, i, o, a = [];
        for (n = 0, i = e.length; n < i; n++) o = e[n], a.push(o[t]);
        return a
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = n
}, [495, 101], [499, 55], function (e, t) {
    e.exports = function (e) {
        return e.webpackPolyfill || (e.deprecate = function () {
        }, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.Axis = void 0;
    var o, a = n(4), r = i(a), s = n(11);
    t.Axis = o, t.Axis = o = function (e) {
        var t = [];
        return t.klass = o, e = (0, r["default"])(e), e.forEach(function (e) {
            t.push(new s.Dimension(e).val())
        }), t.log = function (t, n) {
            n || console.log(t, this, e)
        }, t.val = function (e) {
            return this.length ? this : (this.log("(Axis) No dimensions", e), null)
        }, t.add = function (e, n) {
            var i = n ? e : new s.Dimension(e).val();
            i && t.push(i)
        }, t.clone = function () {
            return o(this)
        }, t.empty = function () {
            for (var e = t.slice(0), n = 0, i = t.length; n < i; n++) t.pop();
            return e
        }, t.getRecordIds = function (e, n) {
            var i = n ? "" : [];
            return t.forEach(function (t, o, a) {
                t.getRecordIds(e, null, !0).forEach(function (e, t, o) {
                    n ? i += e + (t !== o.length - 1 ? ", " : "") : i.push(e)
                }), n && (i += o !== a.length - 1 ? " - " : "")
            }), i
        }, t.getRecordNames = function (e, n, i) {
            var o = i ? "" : [];
            return t.forEach(function (t, a, r) {
                t.getRecordNames(e, n, !0).forEach(function (e, t, n) {
                    i ? o += e + (t !== n.length - 1 ? ", " : "") : o.push(e)
                }), i && (o += a !== r.length - 1 ? " - " : "")
            }), o
        }, t.getDimension = function (e) {
            return this.find(function (t) {
                return t.dimension === e
            })
        }, t.getDimensionNames = function () {
            var e = [];
            return this.forEach(function (t) {
                e.push(t.dimension)
            }), e
        }, t.has = function (e) {
            return !!t.getDimension(e)
        }, t.sorted = function () {
            return t.clone().sort(function (e, t) {
                return e.dimension > t.dimension
            })
        }, t.extendRecords = function (e) {
            t.forEach(function (t) {
                t.extendRecords(e)
            })
        }, t.strip = function () {
            for (var e = []; t.length > 1;) e.push(t.pop());
            return e.reverse()
        }, t.toPlugin = function () {
            delete t.klass, t.forEach(function (e) {
                e.toPlugin()
            })
        }, t
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function (e) {
        var t = e.layout, n = e.i18n, i = Ext.create("Ext.form.field.Text", {
            width: a["default"].windowCmpWidth,
            height: 45,
            style: "margin-top: 2px; margin-bottom: 0",
            fieldStyle: a["default"].textfieldStyle.join(";"),
            fieldLabel: n.name,
            labelAlign: "top",
            labelStyle: a["default"].textFieldLabelStyle.join(";"),
            labelSeparator: "",
            emptyText: "Unnamed",
            enableKeyEvents: !0,
            currentValue: "",
            value: t.name,
            setEventKeyUpHandler: function (e) {
                this.eventKeyUpHandler = e
            },
            listeners: {
                keyup: function (e, t) {
                    13 === t.keyCode && this.eventKeyUpHandler && this.eventKeyUpHandler(e, t)
                }
            }
        }), o = Ext.create("Ext.form.field.TextArea", {
            width: a["default"].windowCmpWidth,
            rows: 3,
            style: "margin-bottom: 0",
            fieldStyle: a["default"].textfieldStyle.concat(["padding-top: 5px"]).join(";"),
            fieldLabel: n.description,
            labelAlign: "top",
            labelStyle: a["default"].textFieldLabelStyle.join(";"),
            labelSeparator: "",
            emptyText: "No description (optional)",
            enableKeyEvents: !0,
            value: t.description
        }), r = Ext.create("Ext.form.field.Text", {
            width: a["default"].windowCmpWidth,
            height: 45,
            style: "margin-bottom: 0",
            fieldStyle: a["default"].textfieldStyle.join(";"),
            fieldLabel: n.title,
            labelAlign: "top",
            labelStyle: a["default"].textFieldLabelStyle.join(";"),
            labelSeparator: "",
            emptyText: "No title (optional)",
            enableKeyEvents: !0,
            currentValue: "",
            value: t.title,
            setEventKeyUpHandler: function (e) {
                this.eventKeyUpHandler = e
            },
            listeners: {
                keyup: function (e, t) {
                    13 === t.keyCode && this.eventKeyUpHandler && this.eventKeyUpHandler(e, t)
                }
            }
        });
        return {nameTextField: i, descriptionTextField: o, titleTextField: r}
    };
    var o = n(15), a = i(o)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.FavoriteWindow = void 0;
    var o = n(25), a = n(17), r = n(40), s = n(23), l = i(s), d = n(15), u = i(d), c = t.FavoriteWindow = void 0;
    t.FavoriteWindow = c = function (e, t) {
        var n, i, s, d, c, p, f, g, h, A, m, b, x, y, v, w, E, S, C, M, I, R = e.appManager, P = e.instanceManager,
            U = e.uiManager, T = e.i18nManager.get(), k = e.uiConfig, B = R.getApiPath(),
            D = (P.apiResource, P.apiEndpoint),
            O = u["default"].windowCmpWidth - u["default"].lastUpdatedColWidth - u["default"].buttonColWidth - u["default"].paddingColWidth - 2,
            _ = "id,name,lastUpdated,access,title,description",
            L = "id,displayName|rename(name),lastUpdated,access,title,description", F = "name", V = "asc", N = [],
            j = P.getStateCurrent() || {}, G = (0, l["default"])({layout: j, i18n: T}), W = G.nameTextField,
            H = G.descriptionTextField;
        return n = function (e) {
            return V = e ? V : "asc" === V ? "desc" : "asc"
        }, i = function (e, i) {
            F = e || F;
            var o = "open" === t ? g.getValue() : null;
            return B + "/" + D + ".json?fields=" + L + (o ? "&filter=displayName:ilike:" + o : "") + "&order=" + F + ":" + n(i)
        }, s = Ext.create("Ext.data.Store", {
            fields: _.split(","),
            proxy: {type: "ajax", reader: {type: "json", root: D}, startParam: !1, limitParam: !1},
            isLoaded: !1,
            pageSize: 10,
            page: 1,
            defaultUrl: B + "/" + D + ".json?fields=" + L + "&order=name:asc",
            loadStore: function (e) {
                this.proxy.url = encodeURI(e || this.defaultUrl), this.load({
                    params: {
                        pageSize: this.pageSize,
                        page: this.page
                    }
                })
            },
            loadFn: function (e) {
                this.isLoaded ? e.call() : this.load(e)
            },
            get: function (e, t) {
                var n = this.findExact(e, t);
                return n === -1 ? null : this.getAt(n)
            },
            listeners: {
                load: function (e, t) {
                    this.isLoaded || (this.isLoaded = !0);
                    var n = e.proxy.reader.jsonData.pager;
                    x.setText("Page " + n.page + " of " + n.pageCount), m.enable(), b.enable(), 1 === n.page && m.disable(), n.page === n.pageCount && b.disable()
                }
            }
        }), c = {
            search: function (e, n) {
                var i = e, o = Ext.isString(o) ? o : i.getValue();
                if ("open" === t && 13 === n.keyCode && s.getRange().length && (I.destroy(), P.getById(s.getAt(0).data.id)), o !== i.currentValue) {
                    i.currentValue = o;
                    var a = o ? B + "/" + D + ".json?fields=" + L + (o ? "&filter=displayName:ilike:" + o : "") : null;
                    s.page = 1, s.loadStore(a)
                }
            }
        }, p = Ext.create("Ext.form.Label", {
            text: T.show_favorites,
            style: "color:#226aba",
            nextAction: "hide",
            textMap: {hide: T.hide_favorites, show: T.show_favorites},
            toggle: function () {
                var e = this;
                N.forEach(function (t) {
                    t[e.nextAction]()
                }), this.nextAction = "hide" === this.nextAction ? "show" : "hide", this.setText(this.textMap[this.nextAction])
            },
            listeners: {
                render: function (e) {
                    var t = this, n = this.getEl();
                    n.setStyle("cursor", "pointer"), n.on("click", function () {
                        t.toggle()
                    })
                }
            }
        }), f = Ext.create("Ext.container.Container", {
            width: u["default"].windowCmpWidth,
            style: "text-align:right; padding-right:7px; padding-bottom:4px",
            items: p
        }), g = Ext.create("Ext.form.field.Text", {
            width: u["default"].windowCmpWidth,
            height: 27,
            style: "margin-bottom: 1px",
            fieldStyle: u["default"].textfieldStyle.concat(["color: #333"]).join(";"),
            emptyText: T.search_for_favorites + "..",
            enableKeyEvents: !0,
            currentValue: "",
            listeners: {
                keyup: {
                    fn: function (e, t) {
                        c.search(e, t)
                    }, buffer: 100
                }
            }
        }), N.push(g), A = Ext.create("Ext.button.Button", {
            text: T.save, handler: function () {
                h()
            }
        }), h = function () {
            var e = P.getStateCurrent(), t = W.getValue(), n = H.getValue(), i = s.get("name", t), o = function () {
                I.destroy()
            }, a = function (t, n, i) {
                e.id = t || e.id, P.getById(e.id, function (e, t) {
                    P.getReport(e, t, !1, !1, function () {
                        U.unmask()
                    })
                })
            };
            e.apply({name: t, description: n}), i ? U.confirmReplace(T.save_favorite, function () {
                o(), e.id = i.data.id, e.clone().put(a, !0, !0)
            }) : (o(), e.clone().post(a, !0, !0))
        }, m = Ext.create("Ext.button.Button", {
            text: T.prev, handler: function () {
                var e = i(null, !0), t = s;
                t.page = t.page <= 1 ? 1 : t.page - 1, t.loadStore(e)
            }
        }), N.push(m), b = Ext.create("Ext.button.Button", {
            text: T.next, handler: function () {
                var e = i(null, !0), t = s;
                t.page = t.page + 1, t.loadStore(e)
            }
        }), N.push(b), x = Ext.create("Ext.form.Label", {
            cls: "ns-label-info",
            width: 300,
            height: 22
        }), N.push(x), y = (0, r.GridHeaders)({
            width: u["default"].windowCmpWidth,
            height: 21,
            direction: "asc",
            getDirection: function () {
            },
            items: [{
                text: T.name, textAlign: "left", width: O, height: 20, handler: function () {
                    var e = i("name"), t = s;
                    t.page = 1, t.loadStore(e)
                }
            }, {
                text: T.last_updated,
                textAlign: "left",
                width: u["default"].lastUpdatedColWidth,
                height: 20,
                direction: "asc",
                handler: function () {
                    var e = i("lastUpdated"), t = s;
                    t.page = 1, t.loadStore(e)
                }
            }]
        }), N.push(y), v = {
            open: function (e, t, n) {
                var i = function () {
                    var e = Ext.get(n.data.id);
                    e && (e = e.parent("td"), e.addClsOnOver("link"), e.load = function () {
                        I.destroy(), P.getById(n.data.id)
                    }, e.handler = function () {
                        P.isStateUnsaved() ? U.confirmUnsaved(T.open, function () {
                            e.load()
                        }) : e.load()
                    }, e.dom.setAttribute("onclick", "Ext.get(this).handler();"))
                };
                return Ext.defer(i, 100), '<div id="' + n.data.id + '">' + e + "</div>"
            }, saveas: function (e, t, n) {
                var i = function () {
                    var e = Ext.get(n.data.id);
                    e && (e = e.parent("td"), e.handler = function () {
                        W.setValue(n.data.name), H.setValue(n.data.description)
                    }, e.dom.setAttribute("onclick", "Ext.get(this).handler();"))
                };
                return Ext.defer(i, 100), '<div id="' + n.data.id + '">' + e + "</div>"
            }
        }, w = Ext.create("Ext.toolbar.Separator", {
            height: 20,
            style: "border-color:transparent; border-right-color:#d1d1d1; margin-right:4px"
        }), N.push(w), E = function () {
            var e = [];
            return e.push(x, "->", m, b), "saveas" === t && e.push(" ", w, " ", A), e
        }(), S = Ext.create("Ext.grid.Panel", {
            cls: "ns-grid",
            scroll: !1,
            hideHeaders: !0,
            columns: [{dataIndex: "name", sortable: !0, width: O, renderer: v[t]}, {
                dataIndex: "lastUpdated",
                sortable: !0,
                width: u["default"].lastUpdatedColWidth,
                renderer: function (e) {
                    return (e || "").substring(0, 16).split("T").join(", ")
                }
            }, {
                xtype: "actioncolumn",
                sortable: !1,
                width: u["default"].buttonColWidth,
                items: [{
                    iconCls: "ns-grid-row-icon-edit", getClass: function (e, t, n) {
                        return "tooltip-favorite-edit" + (n.data.access.update ? "" : " disabled")
                    }, handler: function (t, n, i, a, r) {
                        var l, c = this.up("grid").store.getAt(n),
                            p = r.target.x - O - u["default"].lastUpdatedColWidth - u["default"].borderWidth + 6,
                            f = r.target.y - 34,
                            g = {id: c.data.id, name: c.data.name, description: c.data.description}, h = {};
                        c.data.access.update && (l = function () {
                            s.loadStore()
                        }, h.show = function () {
                            I.destroyOnBlur = !1
                        }, h.destroy = function () {
                            I.destroyOnBlur = !0
                        }, d = (0, o.RenameWindow)(e, g, l, h), d.showAt(p, f))
                    }
                }, {
                    iconCls: "ns-grid-row-icon-sharing", getClass: function (e, t, n) {
                        return "tooltip-favorite-sharing" + (n.data.access.manage ? "" : " disabled")
                    }, handler: function (t, n) {
                        var i = this.up("grid").store.getAt(n);
                        i.data.access.manage && P.getSharingById(i.data.id, function (t) {
                            (0, a.SharingWindow)(e, t).show()
                        })
                    }
                }, {
                    iconCls: "ns-grid-row-icon-delete", getClass: function (e, t, n) {
                        return "tooltip-favorite-delete" + (n.data.access["delete"] ? "" : " disabled")
                    }, handler: function (e, t, n, i, o) {
                        var a = this.up("grid").store.getAt(t), r = a.data.id;
                        a.data.access["delete"] && U.confirmDelete(T.delete_favorite, function () {
                            P.delById(r, function () {
                                s.loadStore(), r === P.getStateFavoriteId() && P.setState()
                            }, !0, !0)
                        })
                    }
                }]
            }, {sortable: !1, width: u["default"].paddingColWidth}],
            store: s,
            listeners: {
                render: function () {
                    var e = Math.floor((U.getHeight() - 330) / k.grid_row_height);
                    this.store.pageSize = e, this.store.page = 1, this.store.loadStore(), s.on("load", function () {
                        this.isVisible() && this.fireEvent("afterrender")
                    }, this)
                }, afterrender: function () {
                    var e = function () {
                        for (var e, t = Ext.query(".tooltip-favorite-edit"), n = Ext.query(".tooltip-favorite-sharing"), i = Ext.query(".tooltip-favorite-delete"), o = 0; o < t.length; o++) {
                            var e = t[o];
                            Ext.create("Ext.tip.ToolTip", {
                                target: e,
                                html: T.rename,
                                anchor: "bottom",
                                anchorOffset: -14,
                                showDelay: 1e3
                            })
                        }
                        for (var o = 0; o < n.length; o++) e = n[o], Ext.create("Ext.tip.ToolTip", {
                            target: e,
                            html: T.share_with_other_people,
                            anchor: "bottom",
                            anchorOffset: -14,
                            showDelay: 1e3
                        });
                        for (var o = 0; o < i.length; o++) e = i[o], Ext.create("Ext.tip.ToolTip", {
                            target: e,
                            html: T.delete_,
                            anchor: "bottom",
                            anchorOffset: -14,
                            showDelay: 1e3
                        })
                    };
                    Ext.defer(e, 100)
                }, itemmouseenter: function (e, t, n) {
                    this.currentItem = Ext.get(n), this.currentItem.removeCls("x-grid-row-over")
                }, select: function () {
                    "open" === t && this.currentItem.removeCls("x-grid-row-selected")
                }, selectionchange: function () {
                    this.currentItem.removeCls("x-grid-row-focused")
                }, itemdblclick: function () {
                    "saveas" === t && h()
                }
            }
        }), N.push(S), C = {open: T.open_favorite, saveas: T.save_favorite_as}, M = function () {
            var e = [];
            return "saveas" === t && e.push(W, H, f), e.push(g, y, S), e
        }(), I = Ext.create("Ext.window.Window", {
            title: C[t],
            bodyStyle: "padding:1px; background-color:#fff",
            resizable: !1,
            modal: !0,
            width: u["default"].windowWidth,
            destroyOnBlur: !0,
            items: M,
            bbar: E,
            listeners: {
                show: function (e) {
                    var n = U.get("favoriteButton") || {};
                    n.rendered && (U.setAnchorPosition(e, n), e.hasDestroyOnBlurHandler || U.addDestroyOnBlurHandler(e)), ("open" === t ? g : W).focus(!1, 500), "saveas" === t && p.toggle()
                }, destroy: function (e) {
                    U.unreg("favoriteWindow")
                }
            }
        }), W.setEventKeyUpHandler(h), I
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.RenameWindow = void 0;
    var o = n(1), a = (i(o), n(23)), r = i(a), s = n(15), l = (i(s), t.RenameWindow = void 0);
    t.RenameWindow = l = function (e, t, n, i) {
        var o = e.appManager, a = e.uiManager, s = e.instanceManager, l = e.i18nManager.get(), d = (e.uiConfig, e.api),
            u = o.getApiPath(), c = s.apiEndpoint;
        i = i || {};
        var p = (0, r["default"])({layout: t, i18n: l}), f = p.nameTextField, g = p.descriptionTextField,
            h = Ext.create("Ext.button.Button", {
                text: l.update, handler: function () {
                    var i = f.getValue(), r = g.getValue(), l = function () {
                        t.clone().put(function () {
                            n && n(), s.getById(null, function (e, t) {
                                s.getReport(e, t, !1, !1, function () {
                                    a.unmask()
                                })
                            }), m.destroy()
                        }, !0, !0)
                    };
                    var p = o.getAnalysisFields(), h = u + "/" + c + "/" + t.id + ".json?fields=" + p;
                    $.getJSON(encodeURI(h), function (n) {
                        t = new d.Layout(e, n).val(), t.apply({name: i, description: r}), l()
                    })
                }
            }), A = Ext.create("Ext.button.Button", {
                text: l.cancel, handler: function () {
                    m.destroy()
                }
            }), m = Ext.create("Ext.window.Window", {
                title: id ? "Rename favorite" : "Create new favorite",
                bodyStyle: "padding:1px; background:#fff",
                resizable: !1,
                modal: !0,
                items: [f, g],
                destroyOnBlur: !0,
                bbar: [A, "->", h],
                listeners: {
                    show: function (e) {
                        var t = a.get("favoriteButton") || {};
                        t.rendered && (a.setAnchorPosition(e, t), e.hasDestroyOnBlurHandler || a.addDestroyOnBlurHandler(e)), f.focus(!1, 500), i.show && i.show()
                    }, destroy: function () {
                        i.destroy && i.destroy()
                    }
                }
            });
        return m
    }
}, function (e, t) {
    (function (e) {
        "use strict";

        function n(t) {
            return e.JSON.parse(e.JSON.stringify(t))
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = n
    }).call(t, function () {
        return this
    }())
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var o = n(104), a = i(o);
    t["default"] = a["default"]
}, [497, 114, 9], function (e, t) {
    e.exports = function () {
        var e = [];
        return e.toString = function () {
            for (var e = [], t = 0; t < this.length; t++) {
                var n = this[t];
                n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
            }
            return e.join("")
        }, e.i = function (t, n) {
            "string" == typeof t && (t = [[null, t, ""]]);
            for (var i = {}, o = 0; o < this.length; o++) {
                var a = this[o][0];
                "number" == typeof a && (i[a] = !0)
            }
            for (o = 0; o < t.length; o++) {
                var r = t[o];
                "number" == typeof r[0] && i[r[0]] || (n && !r[2] ? r[2] = n : n && (r[2] = "(" + r[2] + ") and (" + n + ")"), e.push(r))
            }
        }, e
    }
}, [491, 9, 113, 115], function (e, t, n) {
    function i(e, t) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n], o = c[i.id];
            if (o) {
                o.refs++;
                for (var a = 0; a < o.parts.length; a++) o.parts[a](i.parts[a]);
                for (; a < i.parts.length; a++) o.parts.push(s(i.parts[a], t))
            } else {
                for (var r = [], a = 0; a < i.parts.length; a++) r.push(s(i.parts[a], t));
                c[i.id] = {id: i.id, refs: 1, parts: r}
            }
        }
    }

    function o(e) {
        for (var t = [], n = {}, i = 0; i < e.length; i++) {
            var o = e[i], a = o[0], r = o[1], s = o[2], l = o[3], d = {css: r, media: s, sourceMap: l};
            n[a] ? n[a].parts.push(d) : t.push(n[a] = {id: a, parts: [d]})
        }
        return t
    }

    function a() {
        var e = document.createElement("style"), t = g();
        return e.type = "text/css", t.appendChild(e), e
    }

    function r() {
        var e = document.createElement("link"), t = g();
        return e.rel = "stylesheet", t.appendChild(e), e
    }

    function s(e, t) {
        var n, i, o;
        if (t.singleton) {
            var s = A++;
            n = h || (h = a()), i = l.bind(null, n, s, !1), o = l.bind(null, n, s, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = r(), i = u.bind(null, n), o = function () {
            n.parentNode.removeChild(n), n.href && URL.revokeObjectURL(n.href)
        }) : (n = a(), i = d.bind(null, n), o = function () {
            n.parentNode.removeChild(n)
        });
        return i(e), function (t) {
            if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                i(e = t)
            } else o()
        }
    }

    function l(e, t, n, i) {
        var o = n ? "" : i.css;
        if (e.styleSheet) e.styleSheet.cssText = m(t, o); else {
            var a = document.createTextNode(o), r = e.childNodes;
            r[t] && e.removeChild(r[t]), r.length ? e.insertBefore(a, r[t]) : e.appendChild(a)
        }
    }

    function d(e, t) {
        var n = t.css, i = t.media;
        t.sourceMap;
        if (i && e.setAttribute("media", i), e.styleSheet) e.styleSheet.cssText = n; else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n))
        }
    }

    function u(e, t) {
        var n = t.css, i = (t.media, t.sourceMap);
        i && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
        var o = new Blob([n], {type: "text/css"}), a = e.href;
        e.href = URL.createObjectURL(o),
        a && URL.revokeObjectURL(a)
    }

    var c = {}, p = function (e) {
        var t;
        return function () {
            return "undefined" == typeof t && (t = e.apply(this, arguments)), t
        }
    }, f = p(function () {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
    }), g = p(function () {
        return document.head || document.getElementsByTagName("head")[0]
    }), h = null, A = 0;
    e.exports = function (e, t) {
        t = t || {}, "undefined" == typeof t.singleton && (t.singleton = f());
        var n = o(e);
        return i(n, t), function (e) {
            for (var a = [], r = 0; r < n.length; r++) {
                var s = n[r], l = c[s.id];
                l.refs--, a.push(l)
            }
            if (e) {
                var d = o(e);
                i(d, t)
            }
            for (var r = 0; r < a.length; r++) {
                var l = a[r];
                if (0 === l.refs) {
                    for (var u = 0; u < l.parts.length; u++) l.parts[u]();
                    delete c[l.id]
                }
            }
        }
    };
    var m = function () {
        var e = [];
        return function (t, n) {
            return e[t] = n, e.filter(Boolean).join("\n")
        }
    }()
}, function (e, t, n) {
    var i = n(65);
    e.exports = i
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.Request = void 0;
    var o, a = n(3), r = i(a), s = n(1), l = i(s), d = n(2), u = i(d), c = n(27), p = i(c), f = n(46), g = i(f),
        h = n(4), A = i(h), m = n(6), b = i(m);
    t.Request = o, t.Request = o = function (e) {
        var t = this;
        t.klass = o, e = (0, u["default"])(e) ? e : {}, t.method = (0, r["default"])(e.method) ? e.method : "GET", t.headers = (0, u["default"])(e.headers) ? e.headers : null, t.dataType = (0, r["default"])(e.dataType) ? e.dataType : null, t.contentType = (0, r["default"])(e.contentType) ? e.contentType : null, t.success = (0, p["default"])(e.success) ? e.success : function () {
            t.defaultSuccess()
        }, t.error = (0, p["default"])(e.error) ? e.error : function () {
            t.defaultError()
        }, t.complete = (0, p["default"])(e.complete) ? e.complete : function () {
            t.defaultComplete()
        }, t.type = (0, r["default"])(e.type) ? e.type : "ajax", t.baseUrl = (0, r["default"])(e.baseUrl) ? e.baseUrl : "", t.params = (0, A["default"])(e.params), t.manager = e.manager || null, t.beforeRun = (0, p["default"])(e.beforeRun) ? e.beforeRun : null, t.defaultSuccess = function () {
            var e = this;
            e.manager && e.manager.ok(e)
        }, t.defaultError = function () {
        }, t.defaultComplete = function () {
        }
    }, o.prototype.log = function (e, t) {
        t || console.log(e, this)
    }, o.prototype.alert = function (e, t) {
        t || alert(e)
    }, o.prototype.handle = function (e, t) {
        var n, i = this.url();
        if ((0, b["default"])([413, 414], e)) if (isIE()) n = "Too many items selected (url has " + i.length + " characters). Internet Explorer accepts maximum 2048 characters."; else {
            var o = i.length > 8e3 ? "8000" : i.length > 4e3 ? "4000" : "2000";
            n = "Too many items selected (url has " + i.length + " characters). Please reduce to less than " + o + " characters."
        }
        n && (n += "\n\nHint: A good way to reduce the number of items is to use relative periods and level/group organisation unit selection modes.", this.alert(n))
    }, o.prototype.add = function (e) {
        var t = this;
        if ((0, r["default"])(e)) t.params.push(e); else if ((0, l["default"])(e)) e.forEach(function (e) {
            (0, r["default"])(e) && t.params.push(e)
        }); else if ((0, u["default"])(e)) for (var n in e) e.hasOwnProperty(n) && !(0, g["default"])(e[n]) && t.params.push(n + "=" + e[n]);
        return this
    }, o.prototype.setBaseUrl = function (e) {
        (0, r["default"])(e) && (this.baseUrl = e)
    }, o.prototype.setType = function (e) {
        (0, r["default"])(e) && (this.type = e)
    }, o.prototype.setManager = function (e) {
        this.manager = e
    }, o.prototype.setSuccess = function (e) {
        (0, p["default"])(e) && (this.success = e)
    }, o.prototype.setError = function (e) {
        (0, p["default"])(e) && (this.error = e)
    }, o.prototype.setBeforeRun = function (e) {
        (0, p["default"])(e) && (this.beforeRun = e)
    }, o.prototype.setComplete = function (e) {
        (0, p["default"])(e) && (this.complete = e)
    }, o.prototype.url = function (e) {
        return e = (0, A["default"])(e), this.baseUrl + "?" + [].concat(this.params, (0, A["default"])(e)).join("&")
    }, o.prototype.run = function (e) {
        var t = this, n = encodeURI(this.url());
        e = (0, u["default"])(e) ? e : {};
        var i = e.success || t.success, o = e.error || t.error, a = e.complete || t.complete;
        if (!t.beforeRun || t.beforeRun() !== !1) {
            if ("json" === this.type) return $.getJSON(n, i).error(o).complete(a);
            var r = e.method || t.method, s = e.headers || t.headers, l = e.dataType || t.dataType,
                d = e.contentType || t.contentType, c = {};
            return c.url = n, c.method = r, c.type = r, s && (c.headers = s), l && (c.dataType = l), d && (c.contentType = d), c.success = i, c.error = o, c.complete = a, $.ajax(c)
        }
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.ResponseHeader = void 0;
    var o, a = n(2), r = i(a), s = n(47), l = i(s);
    t.ResponseHeader = o, t.ResponseHeader = o = function (e) {
        var t = this;
        t.klass = o, e = (0, r["default"])(e) ? e : {}, $.extend(this, e), t.index
    }, o.prototype.setIndex = function (e) {
        (0, l["default"])(e) && (this.index = parseInt(e))
    }, o.prototype.getIndex = function (e) {
        return this.index
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.ResponseRow = void 0;
    var o, a = n(4), r = i(a);
    t.ResponseRow = o, t.ResponseRow = o = function (e) {
        var t = (0, r["default"])(e);
        return t.klass = o, t.getAt = function (e) {
            return this[e]
        }, t.setIdCombination = function (e) {
            this.idCombination = e
        }, t.idCombination, t
    }
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = t.Sorting = void 0;
    t.Sorting = n = function (e) {
        var t = this;
        t.id = e.id || null, t.direction = e.direction || null, t.emptyFirst = e.emptyFirst || !1;
        var n = {asc: "DESC", desc: "ASC"};
        t.getKeyMap = function () {
            return n
        }
    }, n.prototype.toggleDirection = function () {
        this.direction = this.getKeyMap()[(this.direction || "").toLowerCase()]
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.AboutWindow = void 0;
    var o = n(2), a = i(o), r = t.AboutWindow = void 0;
    t.AboutWindow = r = function (e) {
        var t = e.appManager, n = e.uiManager, i = (e.instanceManager, e.i18nManager.get()), o = t.getApiPath();
        return Ext.create("Ext.window.Window", {
            title: i.about,
            bodyStyle: "background:#fff; padding:6px",
            modal: !0,
            resizable: !1,
            destroyOnBlur: !0,
            getData: function () {
                var e = this;
                Ext.Ajax.request({
                    url: encodeURI(o + "/system/info.json"), success: function (n) {
                        var o = Ext.decode(n.responseText), r = "padding:3px", s = '<div class="user-select">';
                        (0, a["default"])(o) ? (s += '<div style="' + r + '"><b>' + i.time_since_last_data_update + ": </b>" + o.intervalSinceLastAnalyticsTableSuccess + "</div>", s += '<div style="' + r + '"><b>' + i.version + ": </b>" + o.version + "</div>", s += '<div style="' + r + '"><b>' + i.revision + ": </b>" + o.revision + "</div>", s += '<div style="' + r + '"><b>' + i.username + ": </b>" + t.userAccount.username + "</div>", s += "</div>") : s += "No system info found", e.update(s)
                    }, failure: function (t) {
                        e.update(t.status + "\n" + t.statusText + "\n" + t.responseText)
                    }, callback: function () {
                        e.show(), n.enableRightClick();
                        var t = n.get("aboutButton") || {};
                        t.rendered && (n.setAnchorPosition(e, t), e.hasDestroyOnBlurHandler || n.addDestroyOnBlurHandler(e))
                    }
                })
            },
            listeners: {
                hide: function () {
                    n.disableRightClick()
                }, destroy: function () {
                    n.disableRightClick()
                }
            }
        })
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.EastRegion = void 0;
    var o = n(14), a = n(16), r = n(17), s = n(25), l = n(8), d = i(l), u = t.EastRegion = void 0;
    t.EastRegion = u = function (e) {
        var t = e.uiManager, n = e.uiConfig, i = e.instanceManager, l = e.appManager, u = e.i18nManager, c = u.get(),
            p = l.getPath(), f = l.getApiPath(), g = 200, h = function (e, t, n) {
                return (n ? '<span class="bold">[</span> ' : "") + '<span class="eastPanelLink' + (t ? " bold" : "") + '">' + e + "</span>" + (n ? ' <span class="bold">]</span>' : "")
            }, A = function (t) {
                var n;
                if (i.isStateFavorite() && !i.isStateDirty()) {
                    var o = c.show_more, a = c.show_less, l = c.edit, d = function (t) {
                        var n = [];
                        void 0 == t && (t = c.no_description);
                        var r = t.length > g, d = t.substring(0, g) + " ... ";
                        if (n.push({
                                xtype: "label",
                                itemId: "descriptionLabel",
                                html: r ? d : t,
                                cls: "interpretationActions"
                            }), r) {
                            var u = t;
                            n.push({
                                xtype: "label",
                                html: h(o, !1, !0),
                                cls: "interpretationActions",
                                isShortDescriptionDisplayed: !0,
                                style: "margin: 1px 3px 0;",
                                listeners: {
                                    render: function (e) {
                                        e.getEl().on("click", function () {
                                            this.isShortDescriptionDisplayed ? (this.up("#descriptionPanel").down("#descriptionLabel").setText(u, !1), this.getEl().dom.innerHTML = h(a, !1, !0)) : (this.up("#descriptionPanel").down("#descriptionLabel").setText(d, !1), this.getEl().dom.innerHTML = h(o, !1, !0)), this.isShortDescriptionDisplayed = !this.isShortDescriptionDisplayed, this.up("#descriptionPanel").doLayout()
                                        }, e)
                                    }
                                }
                            })
                        }
                        return n.push({
                            xtype: "label",
                            html: h(l, !1, !0),
                            cls: "interpretationActions",
                            style: "margin: 1px 3px 0;",
                            listeners: {
                                render: function (t) {
                                    t.getEl().on("click", function () {
                                        (0, s.RenameWindow)(e, i.getStateFavorite()).show()
                                    }, t)
                                }
                            }
                        }), n
                    }, u = function (e) {
                        var t = c["public"] + ": ";
                        if (t += "r-------" == e.publicAccess ? c.read : "rw------" == e.publicAccess ? c.read_write : c.none, void 0 != e.userGroupAccesses) if (t += " + ", e.userGroupAccesses.length > 2) t += e.userGroupAccesses.length + " " + c.groups; else for (var n = 0; n < e.userGroupAccesses.length; n++) n > 0 && (t += ", "), t += c.group + " " + e.userGroupAccesses[n].displayName;
                        return t
                    }, p = function (e, t) {
                        return Ext.Ajax.request({
                            url: encodeURI(f + "/dataStatistics/favorites/" + t + ".json"),
                            method: "GET",
                            scope: this,
                            success: function (t) {
                                e.setValue(Ext.decode(t.responseText).views)
                            }
                        }), c.loading + ".."
                    };
                    n = [{
                        xtype: "panel",
                        itemId: "descriptionPanel",
                        bodyStyle: "border-style:none;",
                        style: "margin-bottom:5px;",
                        items: [d(t.displayDescription)]
                    }, {
                        xtype: "displayfield",
                        fieldLabel: c.owner,
                        labelStyle: "padding-top:0",
                        style: "margin-bottom:3px",
                        itemId: "owner",
                        value: void 0 != t.user ? t.user.displayName : "",
                        cls: "interpretationDetailsField"
                    }, {
                        xtype: "displayfield",
                        itemId: "created",
                        fieldLabel: c.created,
                        labelStyle: "padding-top:0",
                        style: "margin-bottom:3px",
                        value: t.created,
                        cls: "interpretationDetailsField"
                    }, {
                        xtype: "displayfield",
                        itemId: "lastUpdated",
                        fieldLabel: c.last_updated,
                        labelStyle: "padding-top:0",
                        style: "margin-bottom:3px",
                        value: t.lastUpdated,
                        cls: "interpretationDetailsField"
                    }, {
                        xtype: "displayfield",
                        itemId: "numberViews",
                        fieldLabel: c.views,
                        labelStyle: "padding-top:0",
                        style: "margin-bottom:3px",
                        value: c.loading + "..",
                        cls: "interpretationDetailsField",
                        listeners: {
                            render: function (e) {
                                p(e, t.id)
                            }
                        }
                    }, {
                        xtype: "displayfield",
                        itemId: "sharing",
                        fieldLabel: c.sharing,
                        labelStyle: "padding-top:0",
                        style: "margin-bottom:3px",
                        value: u(t) + '<span style="padding-left:10px">' + h(l, !1, !0) + "</span>",
                        cls: "interpretationDetailsField",
                        listeners: {
                            render: function (t) {
                                t.getEl().on("click", function () {
                                    i.getSharingById(i.getStateFavoriteId(), function (t) {
                                        (0, r.SharingWindow)(e, t).show()
                                    })
                                }, t)
                            }
                        }
                    }]
                } else n = [{
                    xtype: "label",
                    text: c.no_current_favorite,
                    cls: "interpretationActions",
                    style: "padding:4px 1px;"
                }];
                return {
                    xtype: "panel",
                    bodyStyle: "border-style:none",
                    style: "padding:6px;",
                    itemId: "noFavoriteDetailsPanel",
                    defaults: {style: "margin-top: 1px;"},
                    items: [n]
                }
            }, m = {
                xtype: "panel",
                cls: "ns-panel-title-east-default first",
                title: c.details,
                itemId: "detailsPanel",
                addAndUpdateFavoritePanel: function (e) {
                    this.removeAll(!0), this.add(A(e))
                },
                items: A()
            }, b = function (e, n) {
                var a = 3, r = function (t) {
                    var n = [];
                    n.push({
                        xtype: "panel",
                        bodyStyle: "border-style:none",
                        layout: "column",
                        itemId: "commentPanel",
                        hidden: !0,
                        style: "margin-top: 1px;",
                        cls: "comment greyBackground",
                        items: [{
                            xtype: "panel",
                            bodyStyle: "border-style:none",
                            items: [{
                                xtype: "label",
                                cls: "avatar",
                                text: l.userAccount.firstName[0] + l.userAccount.surname.split(" ")[l.userAccount.surname.split(" ").length - 1][0]
                            }],
                            columnWidth: .11
                        }, {
                            xtype: "panel",
                            bodyStyle: "border-style:none",
                            autoWidth: !0,
                            layout: "fit",
                            flex: 1,
                            items: [{
                                xtype: "textarea",
                                itemId: "commentArea",
                                cls: "commentArea",
                                emptyText: c.write_your_interpretation,
                                submitEmptyText: !1,
                                flex: 1,
                                border: 0,
                                enableKeyEvents: !0,
                                listeners: {
                                    keypress: function (e, t) {
                                        t.getKey() != t.ENTER || t.shiftKey || A(e)
                                    }
                                }
                            }, {
                                xtype: "label", html: h(c.post_comment), cls: "link", listeners: {
                                    render: function (e) {
                                        e.getEl().on("click", function () {
                                            A(this.up("[xtype='panel']").down("#commentArea"))
                                        }, e)
                                    }
                                }
                            }],
                            columnWidth: .89
                        }]
                    }), (0, d["default"])(t, "DESC", "lastUpdated");
                    for (var i = 0; i < t.length; i++) {
                        var r = t[i];
                        n.push({
                            xtype: "panel",
                            bodyStyle: "border-style:none;",
                            cls: "comment greyBackground",
                            layout: "column",
                            hidden: i > a - 1,
                            items: [{
                                xtype: "panel",
                                bodyStyle: "border-style:none",
                                items: [{
                                    xtype: "label",
                                    cls: "avatar",
                                    text: r.user.displayName.split(" ")[0][0] + r.user.displayName.split(" ")[r.user.displayName.split(" ").length - 1][0]
                                }],
                                columnWidth: .11
                            }, {
                                xtype: "panel",
                                bodyStyle: "border-style:none",
                                items: [{
                                    xtype: "panel",
                                    style: "margin-bottom: 3px;",
                                    bodyStyle: "border-style:none",
                                    items: [{
                                        xtype: "label",
                                        html: h(r.user.displayName, !0),
                                        cls: "link bold",
                                        style: "margin-right: 7px;",
                                        listeners: {
                                            render: function () {
                                                this.getEl().on("click", function () {
                                                    window.location.href = p + "/dhis-web-dashboard-integration/profile.action?id=" + r.user.id
                                                })
                                            }
                                        }
                                    }, {xtype: "label", text: r.text}]
                                }, {
                                    xtype: "label",
                                    style: "color: #666",
                                    text: o.DateManager.getTimeDifference(r.lastUpdated) + " " + c.ago
                                }],
                                columnWidth: .89
                            }]
                        })
                    }
                    return t.length > 3 && t.length > a && n.push({
                        xtype: "panel",
                        bodyStyle: "border-style:none",
                        style: "margin-top: 1px;",
                        cls: "comment greyBackground",
                        items: [{
                            xtype: "label",
                            text: "[" + (t.length - a) + " " + c.more_comments + "]",
                            cls: "link",
                            listeners: {
                                render: function (t) {
                                    t.getEl().on("click", function () {
                                        a += 3, this.up("#interpretationPanel" + e.id).updateInterpretationPanelItems()
                                    }, t)
                                }
                            }
                        }]
                    }), n
                }, s = function (e) {
                    for (var t = l.userAccount.id, n = 0; n < e.likedBy.length; n++) if (e.likedBy[n].id == t) return !0;
                    return !1
                }, u = function (t) {
                    Ext.Ajax.request({
                        url: encodeURI(f + "/interpretations/" + e.id + ".json?fields=*,user[id,displayName],likedBy[id,displayName],comments[lastUpdated,text,user[id,displayName]]"),
                        method: "GET",
                        scope: this,
                        success: function (n) {
                            e = JSON.parse(n.responseText), t.updateInterpretationPanelItems(e)
                        }
                    })
                }, g = function () {
                    var t = this;
                    s(e) ? Ext.Ajax.request({
                        url: encodeURI(f + "/interpretations/" + e.id + "/like"),
                        method: "DELETE",
                        success: function () {
                            u(t.up("#interpretationPanel" + e.id))
                        }
                    }) : Ext.Ajax.request({
                        url: encodeURI(f + "/interpretations/" + e.id + "/like"),
                        method: "POST",
                        success: function () {
                            u(t.up("#interpretationPanel" + e.id))
                        }
                    })
                }, A = function (t) {
                    "" != t.getValue().trim() && Ext.Ajax.request({
                        url: encodeURI(f + "/interpretations/" + e.id + "/comments"),
                        method: "POST",
                        params: t.getValue(),
                        headers: {"Content-Type": "text/plain"},
                        success: function () {
                            t.reset(), u(t.up("#interpretationPanel" + e.id))
                        }
                    })
                }, m = function () {
                    for (var t = "", n = 0; n < e.likedBy.length; n++) t += e.likedBy[n].displayName + "</br>";
                    return t
                }, b = function (e, t) {
                    var n = [{
                        xtype: "panel",
                        bodyStyle: "border-style:none",
                        style: "margin-bottom: 6px;",
                        items: [{
                            xtype: "label",
                            html: h(e.user.displayName, !0),
                            style: "margin-right:7px;",
                            listeners: {
                                render: function () {
                                    var t = this.getEl();
                                    t.on("click", function () {
                                        window.location.href = p + "/dhis-web-dashboard-integration/profile.action?id=" + e.user.id
                                    })
                                }
                            }
                        }, {xtype: "label", style: "color:#666", text: o.DateManager.getYYYYMMDD(e.lastUpdated, !0)}]
                    }, {
                        xtype: "panel",
                        bodyStyle: "border-style:none",
                        style: "margin-bottom: 8px;",
                        items: [{xtype: "label", text: e.text}]
                    }, {
                        xtype: "panel",
                        bodyStyle: "border-style:none",
                        cls: "likeContainer",
                        itemId: "likePanelUnselected",
                        hidden: t,
                        items: [{
                            xtype: "label",
                            html: '<div class="thumbs_up greyBackground">' + e.likes + " " + c.people_like_this + '<span style="padding:0 5px">·</span>' + e.comments.length + " " + c.people_commented + "</div>"
                        }]
                    }, {
                        xtype: "panel",
                        bodyStyle: "border-style:none",
                        style: "margin-top: 1px;",
                        itemId: "likePanelSelected",
                        hidden: !t,
                        items: [{
                            xtype: "panel",
                            bodyStyle: "border-style:none",
                            style: "margin-bottom: 5px;",
                            items: [{
                                xtype: "label",
                                html: h(s(e) ? c.unlike : c.like),
                                style: "margin-right: 5px;",
                                listeners: {
                                    render: function (e) {
                                        e.getEl().on("click", g, this)
                                    }
                                }
                            }, {xtype: "label", text: "·", style: "margin-right: 5px;"}, {
                                xtype: "label",
                                html: h(c.comment),
                                style: "margin-right: 5px;",
                                listeners: {
                                    render: function (t) {
                                        t.getEl().on("click", function () {
                                            this.up("#interpretationPanel" + e.id).down("#commentPanel").show(), this.up("#interpretationPanel" + e.id).down("#commentArea").focus()
                                        }, this)
                                    }
                                }
                            }]
                        }, {
                            xtype: "panel",
                            bodyStyle: "border-style:none",
                            cls: "likeContainer",
                            items: [{
                                xtype: "label",
                                html: '<div class="thumbs_up greyBackground">' + h(e.likes + " " + c.people) + " " + c.like_this + "</div>",
                                listeners: {
                                    render: function (t) {
                                        e.likedBy.length > 0 && Ext.create("Ext.tip.ToolTip", {
                                            target: t.getEl(),
                                            html: m(),
                                            bodyStyle: "background-color: white;border"
                                        })
                                    }
                                }
                            }]
                        }]
                    }, {
                        xtype: "panel",
                        hidden: !t,
                        bodyStyle: "border-style:none",
                        itemId: "comments",
                        items: [r(e.comments)]
                    }];
                    return n
                }, x = {
                    xtype: "panel",
                    bodyStyle: "border-style:none;",
                    style: "padding:6px; border-bottom:1px solid #d0d0d0;",
                    cls: "clickable",
                    instanceManager: i,
                    interpretation: e,
                    displayingComments: n,
                    itemId: "interpretationPanel" + e.id,
                    updateInterpretationPanelItems: function (e) {
                        void 0 != e && (this.interpretation = e), this.removeAll(!0), this.add(b(this.interpretation, this.displayingComments)), this.displayingComments ? this.removeCls("clickable") : this.addCls("clickable")
                    },
                    expandComments: function () {
                        if (!this.displayingComments) {
                            for (var n = 0; n < this.up("#interpretationsPanel").items.items.length; n++) void 0 != this.up("#interpretationsPanel").items.items[n].interpretation && (this.up("#interpretationsPanel").items.items[n].displayingComments = this.up("#interpretationsPanel").items.items[n].id == this.id, this.up("#interpretationsPanel").items.items[n].updateInterpretationPanelItems());
                            this.up("[xtype='panel']").down("#shareInterpretation").hide(), this.up("[xtype='panel']").down("#backToToday").show(), t.updateInterpretation(e)
                        }
                    },
                    items: b(e, n),
                    listeners: {
                        render: function (e) {
                            e.body.on("click", this.expandComments, this)
                        }, scope: x
                    }
                };
                return x
            }, x = function (t, n) {
                var o = [], r = {
                    xtype: "panel",
                    bodyStyle: "border-style:none",
                    style: "padding:6px; border-width:0 0 1px 0; border-style:solid;",
                    hidden: n,
                    itemId: "shareInterpretation",
                    items: [{
                        xtype: "label",
                        html: h(c.write_interpretation),
                        cls: "interpretationActions",
                        listeners: {
                            render: function (t) {
                                t.getEl().on("click", function () {
                                    i.getSharingById(i.getStateFavoriteId(), function (t) {
                                        (0, a.InterpretationWindow)(e, t).show()
                                    })
                                }, t)
                            }
                        }
                    }]
                }, s = {
                    xtype: "panel",
                    bodyStyle: "border-style:none",
                    style: "padding:6px; border-width:0; border-bottom:1px solid #d0d0d0",
                    items: [{xtype: "label", text: c.no_interpretations, cls: "interpretationActions"}]
                }, l = {
                    xtype: "panel",
                    bodyStyle: "border-style:none",
                    style: "padding:6px; border:1px solid #dadada; border-width:0 0 1px 0;",
                    hidden: !n,
                    itemId: "backToToday",
                    items: [{
                        xtype: "label",
                        html: h("<< " + c.clear_interpretation),
                        cls: "interpretationActions link",
                        listeners: {
                            render: function (e) {
                                e.getEl().on("click", function () {
                                    i.getById(i.getStateCurrent().id)
                                }, e)
                            }
                        }
                    }]
                };
                i.isStateFavorite() && !i.isStateDirty() ? (o.push(r), void 0 == t ? o.push(s) : o.push(l)) : o.push(s);
                var d = {xtype: "panel", bodyStyle: "border-style:none", style: "border-width:0", items: o};
                return d
            }, y = {
                xtype: "panel",
                cls: "ns-panel-title-east-default",
                bodyStyle: "border-bottom-width: 0",
                title: c.interpretations,
                itemId: "interpretationsPanel",
                displayingInterpretation: !1,
                getInterpretationPanel: b,
                getTopInterpretationsPanel: x,
                addAndUpdateInterpretationsPanel: function (e) {
                    e = e || {}, this.removeAll(!0);
                    var t = e.interpretations, n = e.interpretationId;
                    if (this.add(this.getTopInterpretationsPanel(t, void 0 != n)), void 0 != t && t.length > 0) for (var i = 0; i < t.length; i++) this.add(this.getInterpretationPanel(t[i], t[i].id == n))
                },
                items: x()
            };
        return Ext.create("Ext.panel.Panel", {
            region: "east",
            preventHeader: !0,
            collapsible: !0,
            collapseMode: "mini",
            collapsed: !0,
            border: !1,
            width: n.west_width + t.getScrollbarSize().width,
            items: [m, y],
            cls: "eastPanel",
            setState: function (e) {
                this.getComponent("detailsPanel").addAndUpdateFavoritePanel(e), this.getComponent("interpretationsPanel").addAndUpdateInterpretationsPanel(e)
            },
            listeners: {
                expand: function () {
                    this.doLayout()
                }
            }
        })
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.FavoriteButton = void 0;
    var i = n(24), o = n(25), a = n(17), r = n(16), s = n(90), l = n(93), d = t.FavoriteButton = void 0;
    t.FavoriteButton = d = function (e) {
        var t = (e.appManager, e.uiManager), n = e.instanceManager, d = e.i18nManager.get();
        return Ext.create("Ext.button.Button", {
            text: d.favorites, menu: {}, handler: function (u) {
                u.menu = Ext.create("Ext.menu.Menu", {
                    closeAction: "destroy",
                    shadow: !1,
                    showSeparator: !1,
                    items: function () {
                        var u = function (e) {
                            return e + "&nbsp;&nbsp;&nbsp;"
                        }, c = Ext.create("Ext.menu.Item", {
                            text: u(d.new_),
                            iconCls: "ns-menu-item-favorite-new",
                            disabled: !n.isStateCurrent(),
                            handler: function () {
                                n.isStateUnsaved() ? t.confirmUnsaved(d.new_favorite, function () {
                                    n.setState()
                                }) : n.setState()
                            }
                        });
                        t.reg(c, "newItem");
                        var p = Ext.create("Ext.menu.Item", {
                            text: u(d.open),
                            iconCls: "ns-menu-item-favorite-open",
                            handler: function () {
                                t.reg((0, i.FavoriteWindow)(e, "open"), "favoriteWindow").show()
                            }
                        });
                        t.reg(p, "openItem");
                        var f = Ext.create("Ext.menu.Item", {
                            text: u(d.save),
                            iconCls: "ns-menu-item-favorite-save",
                            disabled: !n.isStateDirty(),
                            handler: function () {
                                var e = n.getStateCurrent(), i = n.getStateFavorite();
                                return i ? (e.apply(i, ["id", "name", "description"]), void e.clone().put(function () {
                                    n.getById(e.id, function (e, i) {
                                        n.getReport(e, i, !1, !1, function () {
                                            t.unmask()
                                        })
                                    })
                                }, !0, !0)) : void g.handlerFn()
                            }
                        });
                        t.reg(f, "saveItem");
                        var g = Ext.create("Ext.menu.Item", {
                            text: u(d.save_as),
                            iconCls: "ns-menu-item-favorite-save",
                            disabled: !n.isStateCurrent(),
                            handlerFn: function () {
                                (0, i.FavoriteWindow)(e, "saveas").show()
                            },
                            handler: function () {
                                this.handlerFn()
                            }
                        });
                        t.reg(g, "saveAsItem");
                        var h = Ext.create("Ext.menu.Item", {
                            text: u(d.rename),
                            iconCls: "ns-menu-item-favorite-rename",
                            disabled: !n.isStateFavorite(),
                            handler: function () {
                                (0, o.RenameWindow)(e, n.getStateFavorite()).show()
                            }
                        });
                        t.reg(g, "renameItem");
                        var A = Ext.create("Ext.menu.Item", {
                            text: u(d.translate),
                            iconCls: "ns-menu-item-favorite-translate",
                            disabled: !n.isStateFavorite(),
                            handler: function () {
                                (0, l.TranslateWindow)(e, n.getStateFavorite()).show()
                            }
                        });
                        t.reg(g, "translateItem");
                        var m = Ext.create("Ext.menu.Item", {
                            text: u(d.share),
                            iconCls: "ns-menu-item-favorite-share",
                            disabled: function () {
                                var e = n.getStateFavorite();
                                return !(e && (!e.getAccess() || e.getAccess().manage))
                            }(),
                            handler: function () {
                                n.getSharingById(n.getStateFavoriteId(), function (t) {
                                    (0, a.SharingWindow)(e, t).show()
                                })
                            }
                        });
                        t.reg(b, "interpretationItem");
                        var b = Ext.create("Ext.menu.Item", {
                            text: u(d.write_interpretation),
                            iconCls: "ns-menu-item-favorite-interpretation",
                            disabled: !n.isStateFavorite(),
                            handler: function () {
                                n.getSharingById(n.getStateFavoriteId(), function (t) {
                                    (0, r.InterpretationWindow)(e, t).show()
                                })
                            }
                        });
                        t.reg(b, "interpretationItem");
                        var x = Ext.create("Ext.menu.Item", {
                            text: u(d.get_link),
                            iconCls: "ns-menu-item-favorite-link",
                            disabled: !n.isStateFavorite(),
                            handler: function () {
                                (0, s.LinkWindow)(e).show()
                            }
                        });
                        t.reg(x, "linkItem");
                        var y = Ext.create("Ext.menu.Item", {
                            text: u(d.delete_),
                            iconCls: "ns-menu-item-favorite-delete",
                            disabled: !n.isStateFavorite(),
                            handler: function () {
                                t.confirmDelete(d.delete_favorite, function () {
                                    n.getStateFavorite().del(function () {
                                        n.setState()
                                    })
                                })
                            }
                        });
                        return t.reg(y, "deleteItem"), [c, "-", p, "-", f, g, "-", h, A, "-", m, b, x, "-", y]
                    }(),
                    listeners: {
                        show: function () {
                            t.setAnchorPosition(u.menu, u)
                        }, hide: function () {
                            u.menu.destroy()
                        }, destroy: function (e) {
                            u.menu = null
                        }
                    }
                }), u.menu.show()
            }
        })
    }
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = t.GridHeaders = void 0;
    t.GridHeaders = n = function (e) {
        return Ext.create("Ext.toolbar.Toolbar", $.extend(e, {cls: "d2analysis-gridheaders"}))
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.InterpretationItem = void 0;
    var i = n(16), o = t.InterpretationItem = void 0;
    t.InterpretationItem = o = function (e) {
        var t = e.instanceManager, n = (e.i18nManager, e.i18nManager.get());
        return Ext.create("Ext.menu.Item", {
            text: n.write_interpretation + "&nbsp;&nbsp;",
            iconCls: "ns-menu-item-tablelayout",
            disabled: !0,
            xable: function () {
                this.setDisabled(!t.isStateSaved())
            },
            handler: function () {
                (0, i.InterpretationWindow)(e).show()
            }
        })
    }
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = t.PluginItem = void 0;
    t.PluginItem = n = function (e) {
        var t = e.appManager, n = e.instanceManager, i = e.uiManager, o = (e.i18nManager, e.i18nManager.get());
        return Ext.create("Ext.menu.Item", {
            text: o.embed_in_web_page + "&nbsp;&nbsp;",
            iconCls: "ns-menu-item-datasource",
            disabled: !0,
            xable: function () {
                this.setDisabled(!n.isStateCurrent())
            },
            handler: function () {
                var e, a, r = "", s = "v" + parseFloat(t.systemInfo.version.split(".").join("")),
                    l = n.getStateCurrent();
                r += "<html>\n<head>\n", r += '<link rel="stylesheet" href="//dhis2-cdn.org/' + s + '/ext/resources/css/ext-plugin-gray.css" />\n', r += '<script src="//dhis2-cdn.org/' + s + '/ext/ext-all.js"></script>\n', r += '<script src="//dhis2-cdn.org/' + s + '/plugin/table.js"></script>\n', r += "</head>\n\n<body>\n", r += '<div id="table1"></div>\n\n', r += "<script>\n\n", r += "Ext.onReady(function() {\n\n", r += "DHIS.getTable(" + JSON.stringify(l.toPlugin("table1"), null, 2) + ");\n\n", r += "});\n\n", r += "</script>\n\n", r += "</body>\n</html>", e = Ext.create("Ext.form.field.TextArea", {
                    width: 700,
                    height: 400,
                    readOnly: !0,
                    cls: "ns-textarea monospaced",
                    value: r
                }), a = Ext.create("Ext.window.Window", {
                    title: o.embed_in_web_page + (l.name ? '<span style="font-weight:normal">&nbsp;|&nbsp;&nbsp;' + l + "</span>" : ""),
                    layout: "fit",
                    modal: !0,
                    resizable: !1,
                    items: e,
                    destroyOnBlur: !0,
                    bbar: ["->", {
                        text: "Select", handler: function () {
                            e.selectText()
                        }
                    }],
                    listeners: {
                        show: function (e) {
                            i.setAnchorPosition(e, "shareButton"), i.enableRightClick(), e.hasDestroyOnBlurHandler || i.addDestroyOnBlurHandler(e)
                        }, hide: function () {
                            i.disableRightClick()
                        }
                    }
                }), a.show()
            }
        })
    }
}, function (e, t) {
    "use strict";

    function n(e) {
        for (var t, n = [], i = 0, o = e.length; i < o; i++) t = e[i], n.indexOf(t) === -1 && n.push(t);
        return n
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = n
}, [489, 103], function (e, t) {
    "use strict";

    function n(e) {
        return "undefined" != typeof e
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = n
}, [491, 1, 105, 107], function (e, t) {
    (function (e) {
        "use strict";

        function n(e) {
            return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
        }

        function i(t) {
            return "symbol" !== ("undefined" == typeof t ? "undefined" : n(t)) && (!isNaN(parseFloat(t)) && e.isFinite(t))
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = i
    }).call(t, function () {
        return this
    }())
}, function (e, t) {
    "use strict";

    function n(e, t) {
        var n;
        if (e) for (n in t) void 0 === e[n] && (e[n] = t[n]);
        return e
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = n
}, function (e, t) {
    "use strict";

    function n(e, t, n, i) {
        return e.replace(new RegExp(t.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "\\$&"), i ? "gi" : "g"), "string" == typeof n ? n.replace(/\$/g, "$$$$") : n)
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = n
}, function (e, t) {
    "use strict";

    function n() {
        var e = function () {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        };
        return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = n
}, [495, 54], [488, 9, 28, 20], [489, 112], function (e, t) {
    (function (e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = Number.isFinite || function (t) {
            return "number" == typeof t && e.isFinite(t)
        }
    }).call(t, function () {
        return this
    }())
}, function (e, t) {
    function n(e) {
        return !!e && "object" == typeof e
    }

    function i(e) {
        return "string" == typeof e || !s(e) && n(e) && r.call(e) == o
    }

    var o = "[object String]", a = Object.prototype, r = a.toString, s = Array.isArray;
    e.exports = i
}, , , function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.Layout = void 0;
    var o = n(3), a = i(o), r = n(19), s = i(r), l = n(44), d = i(l), u = n(1), c = i(u), p = n(2), f = i(p), g = n(45),
        h = i(g), A = n(4), m = i(A), b = n(6), x = i(b), y = n(10), v = i(y), w = n(18), E = i(w), S = n(8), C = i(S),
        M = n(22), I = n(11), R = n(33), P = n(13), U = n(36), T = n(14), k = t.Layout = void 0;
    t.Layout = k = function (e, t, n, i) {
        var o = this;
        e = (0, f["default"])(e) ? e : {}, t = (0, f["default"])(t) ? t : {}, $.extend(t, n);
        var r, s, l, u = e.appManager.getApiPath(), p = "/analytics", g = "json";
        o.columns = (0, M.Axis)(t.columns).val(), o.rows = (0, M.Axis)(t.rows).val(), o.filters = (0, M.Axis)(t.filters).val(!0), s = (0, f["default"])(t.access) ? t.access : null, l = (0, c["default"])(t.dataDimensionItems) ? t.dataDimensionItems : null, (0, a["default"])(t.id) && (o.id = t.id), (0, a["default"])(t.interpretationId) && (o.interpretationId = t.interpretationId), (0, a["default"])(t.name) && (o.name = t.name), (0, a["default"])(t.title) && (o.title = t.title), (0, a["default"])(t.description) && (o.description = t.description), (0, f["default"])(t.sorting) && (0, h["default"])(t.sorting.id) && (0, a["default"])(t.sorting.direction) && (o.sorting = new U.Sorting(t.sorting)), (0, a["default"])(t.displayProperty) && (o.displayProperty = t.displayProperty), (0, m["default"])(t.userOrgUnit).length && (o.userOrgUnit = (0, m["default"])(t.userOrgUnit)), T.DateManager.getYYYYMMDD(t.relativePeriodDate) && (o.relativePeriodDate = T.DateManager.getYYYYMMDD(t.relativePeriodDate)), (0, a["default"])(t.displayDescription) && (o.displayDescription = t.displayDescription), (0, m["default"])(t.interpretations).length && (o.interpretations = (0, c["default"])(t.interpretations) ? t.interpretations : null), T.DateManager.getYYYYMMDD(t.lastUpdated) && (o.lastUpdated = T.DateManager.getYYYYMMDD(t.lastUpdated)), T.DateManager.getYYYYMMDD(t.created) && (o.created = T.DateManager.getYYYYMMDD(t.created)), (0, f["default"])(t.user) && (o.user = t.user), (0, a["default"])(t.publicAccess) && (o.publicAccess = t.publicAccess), (0, m["default"])(t.userGroupAccesses).length && (o.userGroupAccesses = t.userGroupAccesses), (0, d["default"])(t.reduceLayout) && (o.reduceLayout = t.reduceLayout), t.el && (0, a["default"])(t.el) && (o.el = t.el), $.extend(o, i), o.getResponse = function () {
            return r
        }, o.setResponse = function (e) {
            r = e
        }, o.getAccess = function () {
            return s
        }, o.setAccess = function (e) {
            s = e
        }, o.getDataDimensionItems = function () {
            return l
        }, o.setDataDimensionItems = function (e) {
            l = e
        }, o.getDefaultPath = function () {
            return u
        }, o.getDefaultSource = function () {
            return p
        }, o.getDefaultFormat = function () {
            return g
        }, o.getRequestPath = function (t, n) {
            return (u || e.appManager.getPath()) + (t || p) + "." + (n || g)
        }, o.getRefs = function () {
            return e
        }
    }, k.prototype.log = function (e, t) {
        t || console.log(e, this)
    }, k.prototype.alert = function (e, t) {
        t || alert(e)
    }, k.prototype.apply = function (e, t) {
        if ((0, f["default"])(e)) {
            var n = this, i = ["name", "description"];
            return t = (0, c["default"])(t) ? t : i, t.forEach(function (t) {
                n[t] = e[t]
            }), n
        }
    }, k.prototype.toRows = function (e) {
        this.rows = (0, v["default"])(this.rows.concat(this.columns.empty(), e ? this.filters.empty() : []))
    }, k.prototype.getAxes = function (e) {
        return (0, v["default"])([this.columns, this.rows, e ? this.filters : null])
    }, k.prototype.getUserOrgUnitUrl = function () {
        if ((0, c["default"])(this.userOrgUnit) && this.userOrgUnit.length) return "userOrgUnit=" + this.userOrgUnit.join(";")
    }, k.prototype.applyInterpretation = function (e) {
        this.setResponse(null), this.relativePeriodDate = e.created, this.interpretationId = e.id
    }, k.prototype.hasDimension = function (e, t) {
        return this.getAxes(t).some(function (t) {
            return t.has(e)
        })
    }, k.prototype.getDimensions = function (e, t, n) {
        var i = [];
        return n = (0, v["default"])(n ? (0, m["default"])(n) : this.getAxes(e)), n.forEach(function (e) {
            i = i.concat(e)
        }), t ? i.sort(function (e, t) {
            return e.dimension > t.dimension
        }) : i
    }, k.prototype.getRecords = function (e, t) {
        var n = [];
        return this.getAxes(e).forEach(function (e) {
            e.forEach(function (e) {
                n = n.concat(e.getRecords(null, t))
            })
        }), n
    }, k.prototype.extendRecords = function (e) {
        this.getAxes(!0).forEach(function (t) {
            t.extendRecords(e)
        })
    }, k.prototype.stripAxes = function (e, t) {
        var n = this;
        t || n.filters || (n.filters = (new n.getRefs).api.Axis()), n.getAxes(e).forEach(function (e) {
            e.strip().forEach(function (e) {
                t || n.filters.add(e)
            })
        })
    }, k.prototype.getRecordIds = function (e) {
        var t = [];
        return this.getRecords(e).forEach(function (e) {
            t.push(e.id)
        }), t
    }, k.prototype.getDimension = function (e) {
        return this.getDimensions(!0).find(function (t) {
            return t.dimension === e
        })
    }, k.prototype.getDimensionNames = function (e, t, n) {
        var i = (0, E["default"])(this.getDimensions(e, !1, n), "dimension");
        return t ? i.sort() : i
    }, k.prototype.getDimensionNameRecordIdsMap = function (e) {
        var t = {};
        return this.getDimensions(!0).forEach(function (n) {
            t[n.dimension] = n.getRecordIds(!1, e)
        }), t
    }, k.prototype.removeDimensionItems = function (e) {
        this.getDimensions(e).forEach(function (e) {
            e.removeItems()
        })
    }, k.prototype.val = function (e) {
        var t = this.getRefs().i18nManager;
        return this.columns || this.rows ? this.hasDimension(refs.dimensionConfig.get("period").dimensionName, !0) ? this : (this.alert(t.get("at_least_one_period_must_be_specified_as_column_row_or_filter"), e), null) : (this.alert(t.get("at_least_one_dimension_must_be_specified_as_row_or_column"), e), null)
    }, k.prototype.toPlugin = function (e) {
        var t, n = this, i = this.getRefs(), o = i.appManager, a = i.optionConfig;
        if (n.id) t = {id: n.id}; else {
            t = n.clone(), t.getAxes(!0).forEach(function (e) {
                e.toPlugin()
            });
            var r = ["showRowTotals", "showColTotals", "showColSubTotals", "showRowSubTotals", "showDimensionLabels", "showValues"],
                s = ["hideEmptyRows", "skipRounding", "showHierarchy", "completedOnly", "hideLegend", "hideTitle", "title", "legendSet", "sorting", "targetLineValue", "targetLineTitle", "baseLineValue", "baseLineTitle", "rangeAxisMaxValue", "rangeAxisMinValue", "rangeAxisSteps", "rangeAxisDecimals", "rangeAxisTitle", "domainAxisTitle", "regression", "cumulative", "sortOrder", "topLimit"],
                l = ["klass", "name", "parentGraphMap", "reportingPeriod", "organisationUnit", "parentOrganisationUnit", "cumulative", "sortOrder", "topLimit", "displayDescription", "interpretations", "lastUpdated", "created", "user", "publicAccess", "userGroupAccesses", "prototype", "url"];
            r.forEach(function (e) {
                t[e] && delete t[e]
            }), s.forEach(function (e) {
                t[e] || delete t[e]
            }), l.forEach(function (e) {
                delete t[e]
            }), t.displayDensity === a.getDisplayDensity("normal").id && delete t.displayDensity, t.fontSize === a.getFontSize("normal").id && delete t.fontSize, t.digitGroupSeparator === a.getDigitGroupSeparator("space").id && delete t.digitGroupSeparator, t.aggregationType === a.getAggregationType("def").id && delete t.aggregationType, t.dataApprovalLevel && t.dataApprovalLevel.id === a.getDataApprovalLevel("def").id && delete t.dataApprovalLevel, "NONE" === t.regressionType && delete t.regressionType
        }
        return t.url = o.getPath(), e && (t.el = e), t
    }, k.prototype.toPostSuper = function () {
        delete this.klass, delete this.getResponse, delete this.setResponse, delete this.getAccess, delete this.setAccess, delete this.getDataDimensionItems, delete this.setDataDimensionItems, delete this.getRequestPath, this.getDimensions(!0).forEach(function (e) {
            e.toPost()
        }), this.rowTotals = this.showRowTotals, delete this.showRowTotals, this.colTotals = this.showColTotals, delete this.showColTotals, this.rowSubTotals = this.showRowSubTotals, delete this.showRowSubTotals, this.colSubTotals = this.showColSubTotals, delete this.showColSubTotals, this.reportParams = {
            paramReportingPeriod: this.reportingPeriod,
            paramOrganisationUnit: this.organisationUnit,
            paramParentOrganisationUnit: this.parentOrganisationUnit
        }, delete this.reportingPeriod, delete this.organisationUnit, delete this.parentOrganisationUnit, delete this.parentGraphMap, delete this.id, delete this.el, delete this.displayDescription, delete this.interpretations, delete this.lastUpdated, delete this.created, delete this.user, delete this.publicAccess, delete this.userGroupAccesses
    }, k.prototype.toSession = function () {
        var e = this, t = e.getResponse();
        return e.extendRecords(t), e
    }, k.prototype.sort = function (e) {
        var t, n, i, o = this.sorting.id, r = this.sorting.direction, l = this.rows[0], d = this.getResponse(),
            u = e ? e.idValueMap : d.getIdValueMap(), c = [];
        (0, a["default"])(o) && (t = this.getDimensionNameRecordIdsMap(d)[l.dimension], t.forEach(function (e) {
            n = parseFloat(u[new P.ResponseRowIdCombination([o, e]).get()]), i = {
                id: e,
                sortingId: (0, s["default"])(n) ? n : Number.MAX_VALUE * -1
            }, c.push(i)
        }), (0, C["default"])(c, r, "sortingId"), l.items = c, l.sorted = !0, l = new I.Dimension(l), this.sorting.id = o)
    }, k.prototype.hasRecordIds = function (e, t) {
        var n = this.getRecordIds(t), i = !1;
        return e = (0, m["default"])(e), e.forEach(function (e) {
            (0, x["default"])(n, e) && (i = !0)
        }), i
    }, k.prototype.getFirstDxId = function () {
        return this.getDimension("dx").getRecordIds()[0]
    }, k.prototype.data = function (e, t) {
        var n = this.getRefs(), i = n.uiManager, o = this.req(e, t), r = this.req(e, t, !0), s = function (e) {
            (0, f["default"])(e) && 409 == e.status && (i.unmask(), (0, a["default"])(e.responseText) && i.alert(JSON.parse(e.responseText)))
        };
        return o.setType(this.getDefaultFormat()), r.setType(this.getDefaultFormat()), o.add("skipData=true"), r.add("skipMeta=true"), o.setError(s), r.setError(Function.prototype), {
            metaData: o.run(),
            data: r.run()
        }
    }, k.prototype.del = function (e, t, n) {
        var i = this, o = this.getRefs(), a = o.instanceManager;
        a.delById(i.id, e, t, n)
    }, k.prototype.toPost = function () {
        var e = this;
        e.toPostSuper()
    }, k.prototype.post = function (e, t, n) {
        var i = this, o = this.getRefs(), r = o.appManager, s = o.instanceManager, l = o.uiManager, d = r.getApiPath(),
            u = s.apiEndpoint, c = d + "/" + u;
        i.toPost(), t && l.mask(), $.ajax({
            url: encodeURI(c),
            type: "POST",
            headers: r.defaultRequestHeaders,
            data: JSON.stringify(i),
            dataType: "json",
            success: function (t, i, o) {
                var r = (o.getResponseHeader("location") || "").split("/").pop();
                (0, a["default"])(r) || console.log("Layout post", "Invalid id", r), n && l.unmask(), e && e(r, i, o)
            }
        })
    }, k.prototype.put = function (e, t, n) {
        var i = this, o = this.getRefs(), a = o.appManager, r = o.instanceManager, s = o.uiManager, l = a.getApiPath(),
            d = r.apiEndpoint, u = l + "/" + d + "/" + i.id;
        i.toPost(), t && s.mask(), $.ajax({
            url: encodeURI(u),
            type: "PUT",
            data: JSON.stringify(i),
            dataType: "json",
            headers: a.defaultRequestHeaders,
            success: function (t, i, o) {
                n && s.unmask(), e && e(null, i, o)
            }
        })
    }, k.prototype.req = function (e, t, n, i, o) {
        var r = this.getRefs(), s = r.optionConfig, l = r.appManager, d = new R.Request,
            u = s.getAggregationType("def").id, p = this.displayProperty || l.getAnalyticsDisplayProperty();
        return this.getDimensions(!1, n).forEach(function (e) {
            d.add(e.url(n))
        }), this.filters && this.filters.forEach(function (e) {
            var t = !(o && e.isRequired());
            d.add(e.url(n, null, t))
        }), this.skipRounding && d.add("skipRounding=true"), d.add("displayProperty=" + p.toUpperCase()), i ? (d.add("tableLayout=true"), d.add("columns=" + this.getDimensionNames(!1, !1, this.columns).join(";")), d.add("rows=" + this.getDimensionNames(!1, !1, this.rows).join(";")), this.hideEmptyRows && d.add("hideEmptyRows=true"), this.showHierarchy && d.add("showHierarchy=true")) : (this.showHierarchy && d.add("hierarchyMeta=true"), this.completedOnly && d.add("completedOnly=true"), (0, a["default"])(this.aggregationType) && this.aggregationType !== u && d.add("aggregationType=" + this.aggregationType), (0, c["default"])(this.userOrgUnit) && this.userOrgUnit.length && d.add(this.getUserOrgUnitUrl()), (0, f["default"])(this.dataApprovalLevel) && (0, a["default"])(this.dataApprovalLevel.id) && "DEFAULT" !== this.dataApprovalLevel.id && d.add("approvalLevel=" + this.dataApprovalLevel.id), this.relativePeriodDate && d.add("relativePeriodDate=" + this.relativePeriodDate)), this.hasRecordIds(l.userIdDestroyCacheKeys, !0) && d.add("user=" + l.userAccount.id), d.setBaseUrl(this.getRequestPath(e, t)), d
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.Response = void 0;
    var o, a = n(2), r = i(a), s = n(4), l = i(s), d = n(10), u = i(d), c = n(97), p = i(c), f = n(48), g = i(f),
        h = n(26), A = i(h), m = n(12), b = n(34), x = n(35), y = n(13);
    t.Response = o, t.Response = o = function (e) {
        var t = this;
        t.klass = o, e = (0, r["default"])(e) ? e : {}, t.headers = (e.headers || []).map(function (e) {
            return new b.ResponseHeader(e)
        }), t.metaData = e.metaData, t.rows = (e.rows || []).map(function (e) {
            return (0, x.ResponseRow)(e)
        }), t.nameHeaderMap = function () {
            var e = {};
            return t.headers.forEach(function (t) {
                e[t.name] = t
            }), e
        }(), t.idValueMap, t.headers.forEach(function (e, t) {
            e.setIndex(t)
        })
    }, o.prototype.clone = function () {
        var e = this;
        return new o(e)
    }, o.prototype.getHeaderByName = function (e) {
        return this.nameHeaderMap[e]
    }, o.prototype.getHeaderIndexByName = function (e) {
        return this.nameHeaderMap[e].index
    }, o.prototype.getNameById = function (e) {
        return this.metaData.names[e] || ""
    }, o.prototype.getHierarchyNameById = function (e, t, n) {
        var i = this.metaData, o = "";
        if (t && i.ouHierarchy.hasOwnProperty(e)) {
            var a = (0, u["default"])(i.ouHierarchy[e].split("/"));
            a.shift();
            for (var r = 0; r < a.length; r++) o += (n ? '<span class="text-weak">' : "") + i.names[a[r]] + (n ? "</span>" : "") + " / "
        }
        return o
    }, o.prototype.getIdsByDimensionName = function (e) {
        return this.metaData[e] || []
    }, o.prototype.addOuHierarchyDimensions = function () {
        var e, t = this, n = t.headers, i = t.metaData.ouHierarchy, o = t.rows, a = 0, r = [], s = [], l = "ou";
        if (i) {
            for (var d = 0; d < n.length; d++) if (n[d].name === l) {
                e = d;
                break
            }
            for (var d = 0; d < o.length; d++) a = Math.max(a, (0, u["default"])(i[o[d][e]].split("/")).length);
            for (var d = 0; d < a; d++) r.push("");
            for (var c, f, d = 0; d < o.length; d++) c = o[d], f = (0, g["default"])((0, u["default"])(i[c[e]].split("/")), (0, A["default"])(r)), (0, p["default"])(c, e, f);
            for (var d = 0; d < a; d++) s.push({
                column: "Organisation unit",
                hidden: !1,
                meta: !0,
                name: "ou",
                type: "java.lang.String"
            });
            return (0, p["default"])(n, e, s), t
        }
    }, o.prototype.printResponseCSV = function () {
        for (var e, t = this, n = t.headers, i = t.metaData.names, o = t.rows, a = "", r = 0; r < n.length; r++) a += '"' + n[r].column + '"' + (r < n.length - 1 ? "," : "\n");
        for (var r = 0; r < o.length; r++) for (var s, l, d = 0; d < o[r].length; d++) s = o[r][d], l = n[d].meta, a += '"' + (l && i[s] ? i[s] : s) + '"', a += d < o[r].length - 1 ? "," : "\n";
        e = document.createElement("a"), e.setAttribute("href", "data:text/csv;charset=utf-8," + encodeURIComponent(a)), e.setAttribute("download", "data.csv"), e.click()
    }, o.prototype.getHeaderIndexOrder = function (e) {
        var t = this, n = [];
        return e.forEach(function (e) {
            n.push(t.getHeaderIndexByName(e))
        }), n
    }, o.prototype.getIdsByDimensionNames = function (e) {
        var t = this, n = [];
        return e.forEach(function (e) {
            n = n.concat(t.getIdsByDimensionName(e) || [])
        }), (0, u["default"])(n)
    }, o.prototype.getItemName = function (e, t, n) {
        return this.getHierarchyNameById(e, t) + this.getNameById(e)
    }, o.prototype.getRecordsByDimensionName = function (e) {
        var t = this.metaData, n = t[e], i = [];
        return n.forEach(function (e) {
            i.push(new m.Record({id: e, name: t.names[e]}).val())
        }), i
    }, o.prototype.getValueHeader = function () {
        return this.getHeaderByName("value")
    }, o.prototype.getValueHeaderIndex = function () {
        return this.getValueHeader().getIndex()
    }, o.prototype.getIdValueMap = function (e) {
        if (this.idValueMap) return this.idValueMap;
        var t, n = this, i = n.getHeaderIndexOrder(e.getDimensionNames()), o = {};
        return this.rows.forEach(function (e) {
            t = new y.ResponseRowIdCombination, i.forEach(function (n) {
                t.add(e.getAt(n))
            }), e.setIdCombination(t), o[t.get()] = e.getAt(n.getValueHeaderIndex())
        }), this.idValueMap = o
    }, o.prototype.getValue = function (e, t) {
        var n = e instanceof y.ResponseRowIdCombination ? e.get() : e;
        return this.getIdValueMap(t)[n]
    }, o.prototype.getValues = function (e, t) {
        var n = this, i = [];
        return e = (0, l["default"])(e), e.forEach(function (e) {
            i.push(n.getValue(e, t))
        }), i
    }
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = t.ChartConfig = void 0;
    t.ChartConfig = n = function () {
        var e = this;
        e.client = {
            series: "series",
            category: "category",
            filter: "filter",
            column: "column",
            stackedcolumn: "stackedcolumn",
            bar: "bar",
            stackedbar: "stackedbar",
            line: "line",
            area: "area",
            pie: "pie",
            radar: "radar",
            gauge: "gauge"
        }, e.server = {
            column: "COLUMN",
            stackedcolumn: "STACKED_COLUMN",
            bar: "BAR",
            stackedbar: "STACKED_BAR",
            line: "LINE",
            area: "AREA",
            pie: "PIE",
            radar: "RADAR",
            gauge: "GAUGE"
        }, e.consts = {
            domain: "domain_",
            targetLine: "targetline_",
            baseLine: "baseline_",
            trendLine: "trendline_"
        }, e.style = {
            inset: 30,
            fontFamily: "Arial,Sans-serif,Roboto,Helvetica,Consolas"
        }, e.theme = {dv1: ["#94ae0a", "#1d5991", "#a61120", "#ff8809", "#7c7474", "#a61187", "#ffd13e", "#24ad9a", "#a66111", "#414141", "#4500c4", "#1d5700"]}, e.c2s = {}, e.s2c = {}, function () {
            Object.keys(e.client).forEach(function (t) {
                e.c2s[e.client[t]] = e.server[t]
            }), Object.keys(e.server).forEach(function (t) {
                e.s2c[e.server[t]] = e.client[t]
            })
        }()
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.DimensionConfig = void 0;
    var o = n(4), a = i(o), r = n(5), s = i(r), l = t.DimensionConfig = void 0;
    t.DimensionConfig = l = function () {
        var e, t, n = this, i = {dx: "data", co: "category", pe: "period", ou: "organisationUnit"}, o = function () {
            t = {
                data: {value: "data", name: e.get("data") || "Data", dimensionName: "dx", objectName: "dx"},
                category: {
                    name: e.get("assigned_categories") || "Assigned categories",
                    dimensionName: "co",
                    objectName: "co"
                },
                indicator: {
                    value: "indicator",
                    name: e.get("indicators") || "Indicators",
                    dimensionName: "dx",
                    objectName: "in"
                },
                dataElement: {
                    value: "dataElement",
                    name: e.get("data_elements") || "Data elements",
                    dimensionName: "dx",
                    objectName: "de"
                },
                operand: {value: "operand", name: e.get("operand") || "Operand", dimensionName: "dx", objectName: "dc"},
                dataSet: {
                    value: "dataSet",
                    name: e.get("data_sets") || "Data sets",
                    dimensionName: "dx",
                    objectName: "ds"
                },
                eventDataItem: {
                    value: "eventDataItem",
                    name: e.get("event_data_items") || "Event data items",
                    dimensionName: "dx",
                    objectName: "di"
                },
                programIndicator: {
                    value: "programIndicator",
                    name: e.get("program_indicators") || "Program indicators",
                    dimensionName: "dx",
                    objectName: "pi"
                },
                period: {value: "period", name: e.get("periods") || "Periods", dimensionName: "pe", objectName: "pe"},
                fixedPeriod: {value: "period"},
                relativePeriod: {value: "relativePeriod"},
                organisationUnit: {
                    value: "organisationUnit",
                    name: e.get("i18n.organisation_units") || "Organisation units",
                    dimensionName: "ou",
                    objectName: "ou"
                },
                dimension: {value: "dimension"},
                value: {value: "value"}
            }
        }, r = function () {
            o()
        };
        n.add = function (e) {
            (0, a["default"])(e).forEach(function (e) {
                e.dimensionName = e.dimensionName || e.id, e.objectName = e.objectName || e.id, t[e.id] = e
            })
        }, n.get = function (e) {
            var n = i;
            return e ? t[e] || t[n[e]] : t
        }, n.getDimensionNameMap = function () {
            var e = {};
            for (var n in t) t.hasOwnProperty(n) && (e[t[n].dimensionName] = t[n]);
            return e
        }, n.getObjectNameMap = function () {
            var e = {};
            for (var n in t) t.hasOwnProperty(n) && (e[t[n].objectName] = t[n]);
            return e
        }, n.setI18nManager = function (t) {
            e = t, r()
        }
    }, l.prototype.applyTo = function (e) {
        var t = this;
        (0, s["default"])(e).forEach(function (e) {
            e.dimensionConfig = t
        })
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.OptionConfig = void 0;
    var o = function () {
        function e(e, t) {
            var n = [], i = !0, o = !1, a = void 0;
            try {
                for (var r, s = e[Symbol.iterator](); !(i = (r = s.next()).done) && (n.push(r.value), !t || n.length !== t); i = !0) ;
            } catch (l) {
                o = !0, a = l
            } finally {
                try {
                    !i && s["return"] && s["return"]()
                } finally {
                    if (o) throw a
                }
            }
            return n
        }

        return function (t, n) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }(), a = n(5), r = i(a), s = n(8), l = i(s), d = n(49), u = i(d), c = t.OptionConfig = void 0;
    t.OptionConfig = c = function () {
        var e, t, n, i, o, a, r, s = this, d = function () {
            t = {
                comfortable: {index: 1, id: "COMFORTABLE", name: e.get("comfortable") || "Comfortable"},
                normal: {index: 2, id: "NORMAL", name: e.get("normal") || "Normal"},
                compact: {index: 3, id: "COMPACT", name: e.get("compact") || "Compact"}
            }
        }, u = function () {
            n = {
                large: {index: 1, id: "LARGE", name: e.get("large") || "Large"},
                normal: {index: 2, id: "NORMAL", name: e.get("normal") || "Normal"},
                small: {index: 3, id: "SMALL", name: e.get("small") || "Small"}
            }
        }, c = function () {
            i = {
                none: {index: 1, id: "NONE", name: e.get("none") || "None", value: ""},
                space: {index: 2, id: "SPACE", name: e.get("space") || "Space", value: "&nbsp;"},
                comma: {index: 3, id: "COMMA", name: e.get("comma") || "Comma", value: ","}
            }
        }, p = function () {
            o = {
                def: {index: 1, id: "DEFAULT", name: e.get("by_data_element") || "By data element"},
                count: {index: 2, id: "COUNT", name: e.get("count") || "Count"},
                avg: {index: 3, id: "AVERAGE", name: e.get("average") || "Average"},
                sum: {index: 4, id: "SUM", name: e.get("sum") || "Sum"},
                stddev: {index: 5, id: "STDDEV", name: e.get("stddev") || "Standard deviation"},
                variance: {index: 6, id: "VARIANCE", name: e.get("variance") || "Variance"},
                min: {index: 7, id: "MIN", name: e.get("min") || "Min"},
                max: {index: 8, id: "MAX", name: e.get("max") || "Max"}
            }
        }, f = function () {
            a = {def: {index: 1, id: "DEFAULT", name: e.get("show_all_data") || "Show all data"}}
        }, g = function () {
            r = {
                reportingRates: {index: 1, id: "REPORTING_RATE", name: e.get("reporting_rates") || "Reporting rates"},
                reportingRatesOnTime: {
                    index: 2,
                    id: "REPORTING_RATE_ON_TIME",
                    name: e.get("reporting_rates_on_time") || "Reporting rates on time"
                },
                actualReports: {index: 3, id: "ACTUAL_REPORTS", name: e.get("actual_reports") || "Actual reports"},
                actualReportsOnTime: {
                    index: 4,
                    id: "ACTUAL_REPORTS_ON_TIME",
                    name: e.get("actual_reports_on_time") || "Actual reports on time"
                },
                expectedReports: {
                    index: 5,
                    id: "EXPECTED_REPORTS",
                    name: e.get("expected_reports") || "Expected reports"
                }
            }
        }, h = function (e) {
            var t = [];
            for (var n in e) e.hasOwnProperty(n) && t.push(e[n]);
            return (0, l["default"])(t, "ASC", "index"), t
        }, A = function () {
            d(), u(), c(), p(), f(), g()
        };
        s.getDisplayDensity = function (e) {
            return e ? t[e] : t
        }, s.getFontSize = function (e) {
            return e ? n[e] : n
        }, s.getDigitGroupSeparator = function (e) {
            return e ? i[e] : i
        }, s.getAggregationType = function (e) {
            return e ? o[e] : o
        }, s.getDataApprovalLevel = function (e) {
            return e ? a[e] : a
        }, s.getDataSetMetric = function (e) {
            return e ? r[e] : r
        }, s.getDisplayDensityRecords = function () {
            return h(t)
        }, s.getFontSizeRecords = function () {
            return h(n)
        }, s.getDigitGroupSeparatorRecords = function () {
            return h(i)
        }, s.getAggregationTypeRecords = function () {
            return h(o)
        }, s.getDataSetMetricRecords = function () {
            return h(r)
        }, s.getDigitGroupSeparatorIdMap = function () {
            var e = {};
            for (var t in i) i.hasOwnProperty(t) && (e[i[t].id] = i[t]);
            return e
        }, s.setI18nManager = function (t) {
            e = t, A()
        }
    }, c.prototype.applyTo = function (e) {
        var t = this;
        (0, r["default"])(e).forEach(function (e) {
            e.optionConfig = t
        })
    }, c.prototype.getDigitGroupSeparatorValueById = function (e) {
        var t = this, n = t.getDigitGroupSeparatorIdMap()[e];
        return n ? n.value : ""
    }, c.prototype.prettyPrint = function (e, t, n) {
        var i = this, a = i.getDigitGroupSeparator("space").id, r = i.getDigitGroupSeparator("none").id,
            s = i.getDigitGroupSeparator("none").value;
        if (t = t || a, t === r) return e;
        var l = ("" + e).split("."), d = o(l, 2), c = d[0], p = d[1],
            f = c.replace(/\B(?=(\d{3})+(?!\d))/g, i.getDigitGroupSeparatorValueById(t) || s) + (p ? "." + p : "");
        return n && (f = (0, u["default"])(f, "&nbsp;", " ")), f
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.PeriodConfig = void 0;
    var o = n(5), a = i(o), r = t.PeriodConfig = void 0;
    t.PeriodConfig = r = function () {
        var e, t, n = this, i = function () {
            t = {
                Daily: e.get("daily") || "Daily",
                Weekly: e.get("weekly") || "Weekly",
                Monthly: e.get("monthly") || "Monthly",
                BiMonthly: e.get("bimonthly") || "BiMonthly",
                Quarterly: e.get("quarterly") || "Quarterly",
                SixMonthly: e.get("sixmonthly") || "SixMonthly",
                SixMonthlyApril: e.get("sixmonthly_april") || "SixMonthly April",
                Yearly: e.get("yearly") || "Yearly",
                FinancialOct: e.get("financial_oct") || "Financial October",
                FinancialJuly: e.get("financial_july") || "Financial July",
                FinancialApril: e.get("financial_april") || "Financial April"
            }
        }, o = function () {
            i()
        };
        n.getPeriodTypeRecords = function () {
            var e = [];
            for (var n in t) t.hasOwnProperty(n) && e.push({id: n, name: t[n]});
            return e
        }, n.setI18nManager = function (t) {
            e = t, o()
        }
    }, r.prototype.applyTo = function (e) {
        var t = this;
        (0, a["default"])(e).forEach(function (e) {
            e.periodConfig = t
        })
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.UiConfig = void 0;
    var o = n(5), a = i(o), r = t.UiConfig = void 0;
    t.UiConfig = r = function () {
        var e = this;
        $.extend(e, {
            west_width: 424,
            west_fieldset_width: 420,
            west_width_padding: 2,
            west_fill: 2,
            west_fill_accordion_indicator: 81,
            west_fill_accordion_dataelement: 81,
            west_fill_accordion_dataset: 81,
            west_fill_accordion_eventdataitem: 81,
            west_fill_accordion_programindicator: 81,
            west_fill_accordion_period: 310,
            west_fill_accordion_organisationunit: 58,
            west_fill_accordion_group: 31,
            west_maxheight_accordion_indicator: 400,
            west_maxheight_accordion_dataelement: 400,
            west_maxheight_accordion_dataset: 400,
            west_maxheight_accordion_period: 513,
            west_maxheight_accordion_organisationunit: 900,
            west_maxheight_accordion_group: 340,
            west_maxheight_accordion_options: 449,
            west_scrollbarheight_accordion_indicator: 300,
            west_scrollbarheight_accordion_dataelement: 300,
            west_scrollbarheight_accordion_dataset: 300,
            west_scrollbarheight_accordion_period: 450,
            west_scrollbarheight_accordion_organisationunit: 450,
            west_scrollbarheight_accordion_group: 300,
            east_tbar_height: 31,
            east_gridcolumn_height: 30,
            form_label_width: 55,
            window_favorite_ypos: 100,
            window_confirm_width: 250,
            window_share_width: 500,
            grid_favorite_width: 420,
            grid_row_height: 27,
            treepanel_minheight: 135,
            treepanel_maxheight: 400,
            treepanel_fill_default: 310,
            treepanel_toolbar_menu_width_group: 140,
            treepanel_toolbar_menu_width_level: 120,
            multiselect_minheight: 100,
            multiselect_maxheight: 250,
            multiselect_fill_default: 345,
            multiselect_fill_reportingrates: 315
        })
    }, r.prototype.applyTo = function (e) {
        var t = this;
        (0, a["default"])(e).forEach(function (e) {
            e.uiConfig = t
        })
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.override = t.util = t.init = t.ui = t.config = t.manager = t.pivot = t.api = t.extChartOverrides = t.extOverrides = t.Plugin = t.SimpleRegression = t.dataApprovalLevelsInit = t.dimensionsInit = t.legendSetsInit = t.organisationUnitLevelsInit = t.rootNodesInit = t.authViewUnapprovedDataInit = t.i18nInit = t.IntegrationButton = t.ChartTypeToolbar = t.GridHeaders = t.AboutWindow = t.PluginItem = t.InterpretationItem = t.InterpretationWindow = t.FavoriteButton = t.FavoriteWindow = t.EastRegion = t.NorthRegion = t.Viewport = t.ChartConfig = t.UiConfig = t.OptionConfig = t.PeriodConfig = t.DimensionConfig = t.TableManager = t.InstanceManager = t.UiManager = t.SessionStorageManager = t.RequestManager = t.I18nManager = t.CalendarManager = t.DateManager = t.AppManager = t.Table = t.TableAxis = t.Sorting = t.Response = t.ResponseRowIdCombination = t.ResponseRow = t.ResponseHeader = t.Request = t.Layout = t.Axis = t.Dimension = t.Record = void 0;
    var i = n(12), o = n(11), a = n(22), r = n(58), s = n(33), l = n(34), d = n(35), u = n(13), c = n(59), p = n(36),
        f = n(84), g = n(83), h = n(73), A = n(14), m = n(74), b = n(75), x = n(77), y = n(78), v = n(80), w = n(76),
        E = n(79), S = n(61), C = n(63), M = n(62), I = n(64), R = n(60), P = n(94), U = n(91), T = n(38), k = n(24),
        B = n(39), D = n(16), O = n(41), _ = n(42), L = n(37), F = n(40), V = n(85), N = n(89), j = n(69), G = n(66),
        W = n(72), H = n(71), z = n(70), Q = n(68), Y = n(67), K = n(96), q = n(95), J = n(82), X = n(81);
    t.Record = i.Record, t.Dimension = o.Dimension, t.Axis = a.Axis, t.Layout = r.Layout, t.Request = s.Request, t.ResponseHeader = l.ResponseHeader, t.ResponseRow = d.ResponseRow, t.ResponseRowIdCombination = u.ResponseRowIdCombination, t.Response = c.Response, t.Sorting = p.Sorting, t.TableAxis = f.TableAxis, t.Table = g.Table, t.AppManager = h.AppManager, t.DateManager = A.DateManager, t.CalendarManager = m.CalendarManager, t.I18nManager = b.I18nManager, t.RequestManager = x.RequestManager, t.SessionStorageManager = y.SessionStorageManager, t.UiManager = v.UiManager, t.InstanceManager = w.InstanceManager, t.TableManager = E.TableManager, t.DimensionConfig = S.DimensionConfig, t.PeriodConfig = C.PeriodConfig, t.OptionConfig = M.OptionConfig, t.UiConfig = I.UiConfig, t.ChartConfig = R.ChartConfig, t.Viewport = P.Viewport, t.NorthRegion = U.NorthRegion, t.EastRegion = T.EastRegion, t.FavoriteWindow = k.FavoriteWindow, t.FavoriteButton = B.FavoriteButton, t.InterpretationWindow = D.InterpretationWindow, t.InterpretationItem = O.InterpretationItem, t.PluginItem = _.PluginItem, t.AboutWindow = L.AboutWindow, t.GridHeaders = F.GridHeaders, t.ChartTypeToolbar = V.ChartTypeToolbar, t.IntegrationButton = N.IntegrationButton, t.i18nInit = j.i18nInit, t.authViewUnapprovedDataInit = G.authViewUnapprovedDataInit, t.rootNodesInit = W.rootNodesInit, t.organisationUnitLevelsInit = H.organisationUnitLevelsInit, t.legendSetsInit = z.legendSetsInit, t.dimensionsInit = Q.dimensionsInit, t.dataApprovalLevelsInit = Y.dataApprovalLevelsInit, t.SimpleRegression = K.SimpleRegression, t.Plugin = q.Plugin, t.extOverrides = J.extOverrides, t.extChartOverrides = X.extChartOverrides;
    t.api = {
        Record: i.Record,
        Dimension: o.Dimension,
        Axis: a.Axis,
        Layout: r.Layout,
        Request: s.Request,
        ResponseHeader: l.ResponseHeader,
        ResponseRow: d.ResponseRow,
        ResponseRowIdCombination: u.ResponseRowIdCombination,
        Response: c.Response,
        Sorting: p.Sorting
    }, t.pivot = {TableAxis: f.TableAxis, Table: g.Table}, t.manager = {
        AppManager: h.AppManager,
        DateManager: A.DateManager,
        CalendarManager: m.CalendarManager,
        I18nManager: b.I18nManager,
        RequestManager: x.RequestManager,
        SessionStorageManager: y.SessionStorageManager,
        UiManager: v.UiManager,
        InstanceManager: w.InstanceManager,
        TableManager: E.TableManager
    }, t.config = {
        DimensionConfig: S.DimensionConfig,
        PeriodConfig: C.PeriodConfig,
        OptionConfig: M.OptionConfig,
        UiConfig: I.UiConfig,
        ChartConfig: R.ChartConfig
    }, t.ui = {
        Viewport: P.Viewport,
        NorthRegion: U.NorthRegion,
        EastRegion: T.EastRegion,
        FavoriteWindow: k.FavoriteWindow,
        FavoriteButton: B.FavoriteButton,
        InterpretationWindow: D.InterpretationWindow,
        InterpretationItem: O.InterpretationItem,
        PluginItem: _.PluginItem,
        AboutWindow: L.AboutWindow,
        GridHeaders: F.GridHeaders,
        ChartTypeToolbar: V.ChartTypeToolbar,
        IntegrationButton: N.IntegrationButton
    }, t.init = {
        i18nInit: j.i18nInit,
        authViewUnapprovedDataInit: G.authViewUnapprovedDataInit,
        rootNodesInit: W.rootNodesInit,
        organisationUnitLevelsInit: H.organisationUnitLevelsInit,
        legendSetsInit: z.legendSetsInit,
        dimensionsInit: Q.dimensionsInit,
        dataApprovalLevelsInit: Y.dataApprovalLevelsInit
    }, t.util = {SimpleRegression: K.SimpleRegression, Plugin: q.Plugin}, t.override = {
        extOverrides: J.extOverrides,
        extChartOverrides: X.extChartOverrides
    }
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = t.authViewUnapprovedDataInit = void 0;
    t.authViewUnapprovedDataInit = n = function (e) {
        var t = e.appManager, n = e.requestManager;
        t.getApiPath();
        return {
            baseUrl: t.getPath() + "/api/me/authorization/F_VIEW_UNAPPROVED_DATA", success: function (e) {
                t.viewUnapprovedData = e, n.ok(this)
            }
        }
    }
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = t.dataApprovalLevelsInit = void 0;
    t.dataApprovalLevelsInit = n = function (e) {
        var t = e.appManager, n = e.requestManager, i = t.getApiPath(), o = t.getDisplayPropertyUrl();
        return {
            baseUrl: i + "/dataApprovalLevels.json",
            params: ["order=level:asc", "fields=id," + o + ",level", "paging=false"],
            success: function (e) {
                t.addDataApprovalLevels(e.dataApprovalLevels), n.ok(this)
            }
        }
    }
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = t.dimensionsInit = void 0;
    t.dimensionsInit = n = function (e) {
        var t = e.appManager, n = e.requestManager, i = e.dimensionConfig, o = t.getApiPath(),
            a = t.getDisplayPropertyUrl();
        return {
            baseUrl: o + "/dimensions.json", params: ["fields=id," + a, "paging=false"], success: function (e) {
                t.addDimensions(e.dimensions), i.add(e.dimensions), n.ok(this)
            }
        }
    }
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = t.i18nInit = void 0;
    t.i18nInit = n = function (e) {
        var t = e.appManager, n = e.requestManager, i = e.i18nManager, o = t.getUiLocale(), a = t.isUiLocaleDefault(),
            r = t.defaultUiLocale;
        return {
            baseUrl: "i18n/i18n_app.properties",
            type: "ajax",
            dataType: "text",
            headers: {Accept: "text/plain; charset=utf-8"},
            success: function (e) {
                var t = this;
                i.add(dhis2.util.parseJavaProperties(e)), a ? n.ok(t) : $.ajax({
                    url: "i18n/i18n_app_" + o + ".properties",
                    success: function (e) {
                        i.add(dhis2.util.parseJavaProperties(e))
                    },
                    error: function () {
                        console.log("(i18n) No translations found for system locale (" + o + ")")
                    },
                    complete: function () {
                        n.ok(t)
                    }
                })
            },
            error: function () {
                $.ajax({
                    url: "i18n/i18n_app_" + o + ".properties", success: function (e) {
                        i.add(dhis2.util.parseJavaProperties(e))
                    }, error: function () {
                        alert("(i18n) No translations found for system locale (" + o + ") or default locale (" + r + ")")
                    }, complete: function () {
                        n.ok(this)
                    }
                })
            }
        }
    }
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = t.legendSetsInit = void 0;
    t.legendSetsInit = n = function (e) {
        var t = e.appManager, n = e.requestManager, i = t.getApiPath();
        t.getDisplayPropertyUrl();
        return {
            baseUrl: i + "/legendSets.json",
            params: ["fields=id,displayName|rename(name),legends[id,displayName|rename(name),startValue,endValue,color]", "paging=false"],
            success: function (e) {
                t.addLegendSets(e.legendSets), n.ok(this)
            }
        }
    }
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = t.organisationUnitLevelsInit = void 0;
    t.organisationUnitLevelsInit = n = function (e) {
        var t = e.appManager, n = e.requestManager, i = t.getApiPath();
        t.getDisplayPropertyUrl();
        return {
            baseUrl: i + "/organisationUnitLevels.json",
            params: ["fields=id,displayName|rename(name),level", "paging=false"],
            success: function (e) {
                t.addOrganisationUnitLevels(e.organisationUnitLevels), e.organisationUnitLevels.length || alert("No organisation unit levels found"), n.ok(this)
            }
        }
    }
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = t.rootNodesInit = void 0;
    t.rootNodesInit = n = function (e) {
        var t = e.appManager, n = e.requestManager, i = t.getApiPath(), o = t.getDisplayPropertyUrl();
        return {
            baseUrl: i + "/organisationUnits.json",
            params: ["userDataViewFallback=true", "fields=id," + o + ",children[id," + o + "]", "paging=false"],
            success: function (e) {
                t.addRootNodes(e.organisationUnits), n.ok(this)
            }
        }
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.AppManager = void 0;
    var o = n(1), a = i(o), r = n(27), s = i(r), l = n(47), d = i(l), u = n(2), c = i(u), p = n(3), f = i(p), g = n(49),
        h = i(g), A = n(10), m = i(A), b = n(4), x = i(b), y = n(8), v = i(y), w = n(5), E = i(w),
        S = t.AppManager = void 0;
    t.AppManager = S = function (e) {
        var t = this;
        t.refs = (0, c["default"])(e) ? e : {}, t.defaultUiLocale = "en", t.defaultDisplayProperty = "displayName", t.defaultAnalyticsDisplayProperty = "name", t.defaultIndexedDb = "dhis2", t.rootNodeId = "root", t.valueTypes = {
            numeric: ["NUMBER", "UNIT_INTERVAL", "PERCENTAGE", "INTEGER", "INTEGER_POSITIVE", "INTEGER_NEGATIVE", "INTEGER_ZERO_OR_POSITIVE"],
            text: ["TEXT", "LONG_TEXT", "LETTER", "PHONE_NUMBER", "EMAIL"],
            "boolean": ["BOOLEAN", "TRUE_ONLY"],
            date: ["DATE", "DATETIME"],
            aggregate: ["NUMBER", "UNIT_INTERVAL", "PERCENTAGE", "INTEGER", "INTEGER_POSITIVE", "INTEGER_NEGATIVE", "INTEGER_ZERO_OR_POSITIVE", "BOOLEAN", "TRUE_ONLY"]
        }, t.defaultRequestHeaders = {
            Accept: "application/json",
            "Content-Type": "application/json"
        }, t.defaultAnalysisFields = ["*", "interpretations[*,user[id,displayName],likedBy[id,displayName],comments[lastUpdated,text,user[id,displayName]]]", "columns[dimension,filter,items[dimensionItem|rename(id),dimensionItemType,$]]", "rows[dimension,filter,items[dimensionItem|rename(id),dimensionItemType,$]]", "filters[dimension,filter,items[dimensionItem|rename(id),dimensionItemType,$]]", "access", "userGroupAccesses", "publicAccess", "displayDescription", "user[displayName]", "!href", "!rewindRelativePeriods", "!userOrganisationUnit", "!userOrganisationUnitChildren", "!userOrganisationUnitGrandChildren", "!externalAccess", "!relativePeriods", "!columnDimensions", "!rowDimensions", "!filterDimensions", "!organisationUnitGroups", "!itemOrganisationUnitGroups", "!indicators", "!dataElements", "!dataElementOperands", "!dataElementGroups", "!dataSets", "!periods", "!organisationUnitLevels", "!organisationUnits"], t.displayPropertyMap = {
            name: "displayName",
            displayName: "displayName",
            shortName: "displayShortName",
            displayShortName: "displayShortName"
        }, t.userIdDestroyCacheKeys = ["USER_ORGUNIT", "USER_ORGUNIT_CHILDREN", "USER_ORGUNIT_GRANDCHILDREN"], t.appName, t.sessionName, t.manifest, t.env, t.systemInfo, t.systemSettings, t.userAccount, t.calendar, t.periodGenerator, t.viewUnapprovedData, t.rootNodes = [], t.organisationUnitLevels = [], t.dimensions = [], t.legendSets = [], t.dataApprovalLevels = [], t.path, t.dateFormat, t.relativePeriod, t.uiLocale, t.displayProperty, t.displayPropertyUrl, t.analyticsDisplayProperty, t.analysisFields, t.legendSetMap, t.manifestVersion, t.getUrlParam = function (e) {
            var t = "", n = window.location.href;
            if (n.indexOf("?") > -1) for (var i = n.substr(n.indexOf("?") + 1), i = i.split("&"), o = 0; o < i.length; o++) if (i[o].indexOf("=") > -1) {
                var a = i[o].split("=");
                if (a[0].toLowerCase() === e) {
                    t = a[1];
                    break
                }
            }
            return unescape(t)
        }, t.getEventHandlerArray = function () {
            var e = [];
            return e.run = function (t) {
                e.forEach(function (e) {
                    e(t.cmp, t.width, t.height, t.eOpts)
                })
            }, e
        }
    }, S.prototype.getPath = function () {
        var e = this.manifest ? this.manifest.activities.dhis : {};
        return this.path ? this.path : "production" === this.env ? e.href : e.devHref || e.href
    }, S.prototype.getManifestFullVersionNumber = function () {
        var e = this;
        return e.manifest && (0, d["default"])(parseInt(e.manifest.version)) ? parseInt(e.manifest.version) : e.manifestVersion || void 0
    }, S.prototype.getDateFormat = function () {
        return this.dateFormat ? this.dateFormat : this.dateFormat = (0, f["default"])(this.systemSettings.keyDateFormat) ? this.systemSettings.keyDateFormat.toLowerCase() : "yyyy-mm-dd"
    }, S.prototype.getRelativePeriod = function () {
        return this.relativePeriod ? this.relativePeriod : this.relativePeriod = this.systemSettings.keyAnalysisRelativePeriod || "LAST_12_MONTHS"
    }, S.prototype.getUiLocale = function () {
        return this.uiLocale ? this.uiLocale : this.uiLocale = this.userAccount.settings.keyUiLocale || this.defaultUiLocale
    }, S.prototype.getDisplayProperty = function () {
        return this.displayProperty ? this.displayProperty : this.displayProperty = this.displayPropertyMap[this.userAccount.settings.keyAnalysisDisplayProperty || this.defaultDisplayProperty]
    }, S.prototype.getAnalyticsDisplayProperty = function () {
        return this.analyticsDisplayProperty ? this.analyticsDisplayProperty : this.analyticsDisplayProperty = (this.userAccount.settings.keyAnalysisDisplayProperty || this.defaultAnalyticsDisplayProperty).toUpperCase()
    }, S.prototype.getValueTypesByType = function (e) {
        return this.valueTypes[e]
    }, S.prototype.getRootNodes = function () {
        return this.rootNodes
    }, S.prototype.addRootNodes = function (e) {
        var t = this, n = (0, x["default"])(e);
        n.forEach(function (e) {
            e.expanded = !0, e.path = "/" + t.rootId + "/" + e.id
        }), t.rootNodes = (0, m["default"])(t.rootNodes.concat(n))
    }, S.prototype.addOrganisationUnitLevels = function (e) {
        this.organisationUnitLevels = (0, m["default"])(this.organisationUnitLevels.concat((0, x["default"])(e))), (0, v["default"])(this.organisationUnitLevels, "ASC", "level")
    }, S.prototype.addLegendSets = function (e) {
        this.legendSets = (0, m["default"])(this.legendSets.concat((0, x["default"])(e))), (0, v["default"])(this.legendSets, "ASC", "name")
    }, S.prototype.getLegendSetById = function (e) {
        var t = this;
        return t.legendSetMap ? t.legendSetMap[e] : (t.legendSetMap = {}, t.legendSets.forEach(function (e) {
            t.legendSetMap[e.id] = e
        }), t.legendSetMap[e])
    }, S.prototype.addDimensions = function (e) {
        this.dimensions = (0, m["default"])(this.dimensions.concat((0, x["default"])(e))), (0, v["default"])(this.dimensions, "ASC", "name")
    }, S.prototype.addDataApprovalLevels = function (e) {
        this.dataApprovalLevels = (0, m["default"])(this.dataApprovalLevels.concat((0,
            x["default"])(e))), (0, v["default"])(this.dataApprovalLevels, "ASC", "level")
    }, S.prototype.setAuth = function (e) {
        var t, n = "jQuery" in window ? window.jQuery : void 0, i = "Ext" in window ? window.Ext : void 0;
        e ? t = {Authorization: "Basic " + btoa(e)} : "production" !== this.env && this.manifest && (0, f["default"])(this.manifest.activities.dhis.auth) && (t = {Authorization: "Basic " + btoa(this.manifest.activities.dhis.auth)}), t && (n && n.ajaxSetup({headers: t}), i && (0, c["default"])(i.Ajax) && (i.Ajax.defaultHeaders = t))
    }, S.prototype.applyTo = function (e) {
        var t = this;
        (0, E["default"])(e).forEach(function (e) {
            e.appManager = t
        })
    }, S.prototype.getApiPath = function () {
        var e = this, t = e.getManifestFullVersionNumber() || "";
        return e.getPath() + "/api" + (t ? "/" + t : "")
    }, S.prototype.getLegendColorByValue = function (e, t) {
        for (var n, i, o = this, a = o.getLegendSetById(e), r = 0; r < a.legends.length; r++) if (i = a.legends[r], t >= parseFloat(i.startValue) && t < parseFloat(i.endValue)) {
            n = i.color;
            break
        }
        return n
    }, S.prototype.getDisplayPropertyUrl = function () {
        if (this.displayPropertyUrl) return this.displayPropertyUrl;
        var e = this.getDisplayProperty();
        return this.displayPropertyUrl = e + "|rename(name)"
    }, S.prototype.isUiLocaleDefault = function () {
        return this.getUiLocale() === this.defaultUiLocale
    }, S.prototype.getAnalysisFields = function () {
        return this.analysisFields ? this.analysisFields : this.analysisFields = (0, h["default"])(this.defaultAnalysisFields.join(","), "$", this.getDisplayPropertyUrl())
    }, S.prototype.getRootNode = function () {
        return this.getRootNodes()[0]
    }, S.prototype.getLegendSetIdByDxId = function (e, t) {
        if ((0, f["default"])(e) && (0, s["default"])(t)) {
            var n, i = this;
            new i.refs.api.Request({
                type: "json",
                baseUrl: i.getApiPath() + "/indicators.json",
                params: ["filter=id:eq:" + e, "fields=legendSet[id]", "paging=false"],
                success: function (e) {
                    if ((0, a["default"])(e.indicators) && e.indicators.length && (0, c["default"])(e.indicators[0].legendSet)) {
                        var t = e.indicators[0].legendSet;
                        (0, c["default"])(t) && (n = t.id)
                    }
                },
                complete: function () {
                    t(n)
                }
            }).run()
        }
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.CalendarManager = void 0;
    var o = n(2), a = i(o), r = n(6), s = i(r), l = n(5), d = i(l), u = t.CalendarManager = void 0;
    t.CalendarManager = u = function (e) {
        var t = this;
        e = (0, a["default"])(e) ? e : {}, t.baseUrl = e.baseUrl || "..", t.dateFormat = e.dateFormat || "yyyy-MM-dd", t.defaultCalendarId = "gregorian", t.defaultCalendarIsoId = "iso8601", t.calendarIds = ["coptic", "ethiopian", "islamic", "julian", "nepali", "thai"], t.calendar, t.periodGenerator, t.calendarIdMap
    }, u.prototype.setBaseUrl = function (e) {
        this.baseUrl = e
    }, u.prototype.setDateFormat = function (e) {
        this.dateFormat = e
    }, u.prototype.getPeriodScriptUrl = function () {
        return this.baseUrl + "/dhis-web-commons/javascripts/dhis2/dhis2.period.js"
    }, u.prototype.getCalendarScriptUrl = function (e) {
        return this.baseUrl + "/dhis-web-commons/javascripts/jQuery/calendars/jquery.calendars." + e + ".min.js"
    }, u.prototype.getCalendarIdMap = function () {
        return this.calendarIdMap ? this.calendarIdMap : (this.calendarIdMap = {}, this.calendarIdMap[this.defaultCalendarIsoId] = this.defaultCalendarId, this.calendarIdMap)
    }, u.prototype.createCalendar = function (e) {
        this.calendar = $.calendars.instance(e)
    }, u.prototype.createPeriodGenerator = function (e) {
        this.periodGenerator = new dhis2.period.PeriodGenerator(this.calendar, this.dateFormat)
    }, u.prototype.applyTo = function (e) {
        var t = this;
        (0, d["default"])(e).forEach(function (e) {
            e.calendarManager = t
        })
    }, u.prototype.init = function (e, t) {
        if (e = this.getCalendarIdMap()[e] || e || this.defaultCalendarId, !this.calendar || !this.periodGenerator) {
            var n = this, i = n.getPeriodScriptUrl(), o = function () {
                n.createCalendar(e), n.createPeriodGenerator(e)
            };
            if ((0, s["default"])(n.calendarIds, e)) {
                var a = n.getCalendarScriptUrl(e);
                $.getScript(a, function () {
                    $.getScript(i, function () {
                        o()
                    })
                })
            } else $.getScript(i, function () {
                o()
            })
        }
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.I18nManager = void 0;
    var o = n(5), a = i(o), r = t.I18nManager = void 0;
    t.I18nManager = r = function (e) {
        var t = this, n = e || {};
        t.add = function (e, t) {
            t ? n = e : $.extend(n, e)
        }, t.get = function (e) {
            return e ? n[e] : n
        }
    }, r.prototype.applyTo = function (e) {
        var t = this;
        (0, a["default"])(e).forEach(function (e) {
            e.i18nManager = t
        })
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.InstanceManager = void 0;
    var o = n(3), a = i(o), r = n(2), s = i(r), l = n(6), d = i(l), u = n(5), c = i(u), p = t.InstanceManager = void 0;
    t.InstanceManager = p = function (e) {
        var t = this;
        t.refs = (0, s["default"])(e) ? e : {}, t.api = e.api, t.appManager = e.appManager, t.uiManager = e.uiManager, t.i18nManager = e.i18nManager, t.tableManager = e.tableManager, t.sessionStorageManager = e.sessionStorageManager;
        var n, i = {favorite: null, current: null};
        t.plugin = !1, t.dashboard = !1, t.apiResource, t.apiEndpoint, t.dataStatisticsEventType, t.isStateFavorite = function () {
            return !!i.favorite
        }, t.isStateCurrent = function () {
            return !!i.current
        }, t.isStateDirty = function () {
            return i.favorite !== i.current
        }, t.isStateSaved = function () {
            return !!t.isStateFavorite() && !t.isStateDirty()
        }, t.isStateUnsaved = function () {
            return !!t.isStateFavorite() && t.isStateDirty()
        }, t.getStateFavorite = function () {
            return t.isStateFavorite() ? i.favorite.clone() : i.favorite
        }, t.getStateFavoriteId = function () {
            return t.isStateFavorite() ? i.favorite.id : null
        }, t.getStateFavoriteName = function () {
            return t.isStateFavorite() ? i.favorite.name : null
        }, t.getStateCurrent = function () {
            return i.current ? i.current.clone() : i.current
        }, t.setState = function (e, n, o, a) {
            i.current = e ? e : null, i.current && !n || (i.favorite = i.current), t.sessionStorageManager && i.current && t.sessionStorageManager.set(i.current.toSession(), t.appManager.sessionName);
            var r = i.current ? i.current.clone() : null, s = i.favorite ? i.favorite.clone() : null;
            t.uiManager.setState(r, s, n, o, a)
        }, t.setStateIf = function (e, n) {
            e.id === t.getStateFavoriteId() && t.setState(e, n)
        }, t.getFn = function () {
            return n
        }, t.setFn = function (e) {
            n = e
        }
    }, p.prototype.getLayout = function (e) {
        var t, n = this, i = n.getStateFavorite();
        return e = e || n.uiManager.getUiState(), t = new n.api.Layout(n.refs, e), t && t.apply(i), t
    }, p.prototype.getById = function (e, t) {
        var n = this;
        if (e = (0, a["default"])(e) ? e : n.getStateFavoriteId() || null, !(0, a["default"])(e)) return void console.log("Instance manager, getById, invalid id", e);
        var i = n.appManager, o = n.uiManager, r = n.i18nManager ? n.i18nManager.get() : {};
        t = t || function (e, t) {
            n.getReport(e, t)
        };
        var s = new n.api.Request({
            baseUrl: i.getApiPath() + "/" + n.apiEndpoint + "/" + e + ".json",
            type: "json",
            success: function (e) {
                var i = new n.api.Layout(n.refs, e);
                i && t(i, !0)
            },
            error: function (e) {
                o.unmask(), (0, d["default"])([403], parseInt(e.httpStatusCode)) && (e.message = r.you_do_not_have_access_to_all_items_in_this_favorite || e.message), o.alert(e)
            }
        });
        s.add({fields: i.getAnalysisFields()}), s.run()
    }, p.prototype.delById = function (e, t, n, i) {
        if (!(0, a["default"])(e)) return void console.log("Invalid id", e);
        var o = this, r = (o.appManager, o.uiManager), s = (o.i18nManager.get(), new o.api.Request({
            baseUrl: o.appManager.getApiPath() + "/" + o.apiEndpoint + "/" + e,
            method: "DELETE",
            beforeRun: function () {
                n && r.mask()
            },
            success: function (e, n, o) {
                i && r.unmask(), t && t(e, n, o)
            },
            error: function (e) {
                r.unmask(), r.alert(e)
            }
        }));
        s.run()
    }, p.prototype.getSharingById = function (e, t) {
        var n = this, i = new n.api.Request({
            baseUrl: n.appManager.getApiPath() + "/sharing",
            type: "json",
            success: function (e) {
                t && t(e)
            },
            error: function () {
                n.uiManager.unmask()
            }
        });
        i.add({type: n.apiResource, id: e}), i.run()
    }, p.prototype.getUiState = function () {
        return this.uiManager.getUiState()
    }, p.prototype.postDataStatistics = function () {
        var e = this, t = new e.api.Request({baseUrl: e.appManager.getApiPath() + "/dataStatistics", method: "POST"});
        t.add({eventType: e.dataStatisticsEventType, favorite: e.getStateFavoriteId()}), t.run()
    }, p.prototype.applyTo = function (e) {
        var t = this;
        (0, c["default"])(e).forEach(function (e) {
            e.instanceManager = t
        })
    }, p.prototype.getInterpretationById = function (e, t) {
        if (!(0, a["default"])(e)) return void console.log("Invalid id", e);
        var n = this, i = n.appManager, o = n.uiManager, r = new n.api.Request({
            baseUrl: i.getApiPath() + "/interpretations/" + e + ".json",
            type: "json",
            success: function (e) {
                (0, a["default"])(t) && t(e)
            },
            error: function (e) {
                o.alert(e)
            },
            complete: function (e) {
                (0, a["default"])(t) || o.unmask()
            }
        });
        r.add({fields: "id,created"}), r.run()
    }, p.prototype.getData = function (e) {
        return e = e || this.getLayout(), e.data()
    }, p.prototype.getReport = function (e, t, n, i, o) {
        var a = this, r = function () {
            n || a.setState(e, t, !1, i), (o || a.getFn())(e)
        };
        if (e || (e = a.getLayout())) {
            a.uiManager.mask();
            var s = e.getResponse();
            if (s) r(); else {
                var l = e.data();
                l.metaData.done(function (t) {
                    l.data.done(function (n) {
                        n.metaData = t.metaData, e.setResponse(new a.api.Response(n)), r()
                    })
                })
            }
        }
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.RequestManager = void 0;
    var o = n(1), a = i(o), r = n(2), s = i(r), l = n(27), d = i(l), u = n(4), c = i(u), p = n(5), f = i(p),
        g = t.RequestManager = void 0;
    t.RequestManager = g = function (e) {
        var t = this;
        e = (0, s["default"])(e) ? e : {}, t.requests = (0, a["default"])(e.requests) ? e.requests : [], t.responses = [], t.fn = (0, d["default"])(e.fn) ? e.fn : function () {
            console.log("Request manager done")
        }, t.fnParams = []
    }, g.prototype.add = function (e) {
        var t = this, n = (0, c["default"])(e);
        n.forEach(function (e) {
            e.setManager(t)
        }), this.requests = [].concat(this.requests, n)
    }, g.prototype.set = function (e, t) {
        this.fn = e, t && (this.fnParams = t)
    }, g.prototype.ok = function (e, t) {
        this.responses.push(e), t || this.resolve()
    }, g.prototype.run = function () {
        this.requests.forEach(function (e) {
            e.run()
        })
    }, g.prototype.resolve = function () {
        this.responses.length === this.requests.length && this.fn(this.fnParams)
    }, g.prototype.applyTo = function (e) {
        var t = this;
        (0, f["default"])(e).forEach(function (e) {
            e.requestManager = t
        })
    }
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = t.SessionStorageManager = void 0;
    t.SessionStorageManager = n = function () {
        var e = this;
        e.db = "dhis2", e.supported = "sessionStorage" in window && null !== window.sessionStorage, e.supportHandler = function () {
            return !!this.supported || void alert("Your browser is outdated and does not support local storage. Please upgrade your browser.")
        }
    }, n.prototype.get = function (e) {
        if (this.supportHandler()) {
            var t = JSON.parse(sessionStorage.getItem(this.db)) || {};
            return t[e]
        }
    }, n.prototype.set = function (e, t, n) {
        if (this.supportHandler()) {
            var i = JSON.parse(sessionStorage.getItem(this.db)) || {};
            i[t] = e, sessionStorage.setItem(this.db, JSON.stringify(i)), n && (window.location.href = n)
        }
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.TableManager = void 0;
    var o = n(3), a = i(o), r = n(1), s = i(r), l = t.TableManager = void 0;
    t.TableManager = l = function (e) {
        var t = this, n = e.appManager, i = e.instanceManager, o = e.uiManager, r = e.sessionStorageManager,
            l = function (e) {
                return "ASC" === e.toUpperCase() ? "DESC" : "ASC"
            }, d = function (e, t) {
                e.sorting && e.sorting.id === t ? e.sorting.direction = l(e.sorting.direction) : e.sorting = {
                    id: t,
                    direction: "DESC"
                }, o.mask(), i.getReport(e, !1, !0)
            }, u = function (e) {
                var t = $(e);
                t && t.addClass("pointer highlighted")
            }, c = function (e) {
                var t = $(e);
                t && t.removeClass("pointer highlighted")
            };
        t.setColumnHeaderMouseHandlers = function (e, t) {
            var n, i = t.sortableIdObjects;
            t.idValueMap;
            i.forEach(function (t) {
                n = document.getElementById(t.uuid), n && (n.layout = e, n.metaDataId = t.id, n.onColumnHeaderMouseClick = d, n.onColumnHeaderMouseOver = u, n.onColumnHeaderMouseOut = c, n.setAttribute("onclick", "this.onColumnHeaderMouseClick(this.layout, this.metaDataId)"), n.setAttribute("onmouseover", "this.onColumnHeaderMouseOver(this)"), n.setAttribute("onmouseout", "this.onColumnHeaderMouseOut(this)"))
            })
        };
        var p = function (e, t, i) {
            for (var o, a = t.getUuidObjectMap(), s = e.getResponse(), l = {}, d = [], u = n.getPath(), c = t.uuidDimUuidsMap[i], p = 0; p < c.length; p++) d.push(a[c[p]]);
            e.removeDimensionItems();
            for (var f, g, A, p = 0; p < d.length; p++) f = d[p], g = "col" === f.axis ? e.columns || [] : e.rows || [], g.length && (A = g[f.dim], A.add({
                id: f.id,
                name: s.metaData.names[f.id]
            }));
            for (var m, p = 0; p < d.length; p++) m = d[p].id, e.parentGraphMap.hasOwnProperty(m) && (l[m] = e.parentGraphMap[m]);
            e.parentGraphMap = l, e.toSession(), o = Ext.create("Ext.menu.Menu", {
                shadow: !0,
                showSeparator: !1,
                items: [{
                    text: "Open selection as chart&nbsp;&nbsp;",
                    iconCls: "ns-button-icon-chart",
                    param: "chart",
                    handler: function () {
                        r.set(e, "analytical", u + "/dhis-web-visualizer/index.html?s=analytical")
                    },
                    listeners: {
                        render: function () {
                            this.getEl().on("mouseover", function () {
                                h(t, i, "mouseover", "chart")
                            }), this.getEl().on("mouseout", function () {
                                h(t, i, "mouseout", "chart")
                            })
                        }
                    }
                }, {
                    text: "Open selection as map&nbsp;&nbsp;",
                    iconCls: "ns-button-icon-map",
                    param: "map",
                    disabled: !0,
                    handler: function () {
                        r.set(e, "analytical", u + "/dhis-web-mapping/index.html?s=analytical")
                    },
                    listeners: {
                        render: function () {
                            this.getEl().on("mouseover", function () {
                                h(t, i, "mouseover", "map")
                            }), this.getEl().on("mouseout", function () {
                                h(t, i, "mouseout", "map")
                            })
                        }
                    }
                }]
            }), o.showAt(function () {
                var e = Ext.get(i), t = e.getXY();
                return t[0] += e.getWidth() - 5, t[1] += e.getHeight() - 5, t
            }())
        }, f = function (e) {
            Ext.get(e).addCls("highlighted")
        }, g = function (e) {
            Ext.get(e).removeCls("highlighted")
        }, h = function (e, t, n, i) {
            var o, r = e.uuidDimUuidsMap;
            if ("chart" === i && (0, a["default"])(t) && (0, s["default"])(r[t])) {
                o = r[t];
                for (var l, d = 0; d < o.length; d++) l = Ext.get(o[d]), l && ("mouseover" === n ? l.addCls("highlighted") : "mouseout" === n && l.removeCls("highlighted"))
            }
        };
        t.setValueMouseHandlers = function (e, t) {
            var n, i = t.uuidDimUuidsMap;
            for (var o in i) i.hasOwnProperty(o) && (n = Ext.get(o), n && parseFloat(n.dom.textContent) && (n.dom.onValueMouseClick = p, n.dom.onValueMouseOver = f, n.dom.onValueMouseOut = g, n.dom.layout = e, n.dom.table = t, n.dom.setAttribute("onclick", "this.onValueMouseClick(this.layout, this.table, this.id);"), n.dom.setAttribute("onmouseover", "this.onValueMouseOver(this);"), n.dom.setAttribute("onmouseout", "this.onValueMouseOut(this);")))
        }
    }
}, function (e, t, n) {
    (function (e) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.UiManager = void 0;
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, a = n(3), r = i(a), s = n(2), l = i(s), d = n(1), u = i(d), c = n(5), p = i(c), f = n(86),
            g = t.UiManager = void 0;
        t.UiManager = g = function (t) {
            var n = this;
            t = (0, l["default"])(t) ? t : {}, n.appManager = t.appManager, n.instanceManager = t.instanceManager, n.i18nManager, n.preventMask = !1;
            var i = {}, o = {onCurrent: [], onFavorite: []}, a = "centerRegion", s = "meringue", d = "",
                c = function (e, t) {
                    e = e || n.getIntroHtml();
                    var i = document.getElementById(t);
                    return t && i ? void(i.innerHTML = e) : void(n.getUpdateComponent() && n.getUpdateComponent().update(e))
                }, p = function (e, t) {
                    var t = t || n.instanceManager.getStateCurrent();
                    t && (t.applyInterpretation(e), n.instanceManager.getReport(t, !0))
                }, g = n.appManager.getEventHandlerArray();
            n.setInstanceManager = function (e) {
                n.instanceManager = e
            }, n.setI18nManager = function (e) {
                n.i18nManager = e
            }, n.setUpdateFn = function (e) {
                c = e
            }, n.setUpdateInterpretationFn = function (e) {
                p = e
            }, n.reg = function (e, t, n, a) {
                if (!i.hasOwnProperty(t) || !a) return (0, r["default"])(n) && n.split(",").forEach(function (t) {
                    (0, u["default"])(o[t]) && o[t].push(e)
                }), i[t] = e
            }, n.unreg = function (e) {
                i[e] = null
            }, n.get = function (e) {
                return i[e] || document.getElementById(e) || null
            }, n.getUpdateComponent = function () {
                return n.get(a)
            }, n.setUpdateComponent = function (e) {
                a = e
            }, n.componentFrom = function (e) {
                return (0, r["default"])(e) ? n.get(e) : e
            }, n.update = function (e, t) {
                c(e, t)
            }, n.updateInterpretation = function (e) {
                p(e)
            }, n.setState = function (e, t, i, a, r, s) {
                var l = n.get("northRegion"), d = n.get("westRegion"), u = n.get("eastRegion");
                n.instanceManager.plugin || (t ? n.setUrlState("?id=" + t.id + (t.interpretationId ? "&interpretationId=" + t.interpretationId : "")) : n.setUrlState("."), l && l.setState(e, i), o.onCurrent.forEach(function (t) {
                    t.setDisabled(!(e && t.enable))
                }), o.onFavorite.forEach(function (t) {
                    t.setDisabled(!(e && t.enable && i))
                }), (r || d && !a && (!e || i)) && d.setState(e), u && u.setState(e)), e || n.update()
            }, n.setUrlState = function (t) {
                e.history.pushState(null, null, t)
            }, n.getTheme = function () {
                return s
            }, n.setTheme = function (e) {
                s = e
            }, n.getIntroHtml = function () {
                return d
            }, n.setIntroHtml = function (e) {
                d = e
            }, n.getScrollbarSize = function () {
                var e, t = document.body, n = document.createElement("div");
                return n.style.width = n.style.height = "100px", n.style.overflow = "scroll", n.style.position = "absolute", t.appendChild(n), e = {
                    width: n.offsetWidth - n.clientWidth,
                    height: n.offsetHeight - n.clientHeight
                }, t.removeChild(n), e
            }, n.isScrolled = function (e) {
                var t = e.srcElement, n = t.scrollTop + t.clientHeight / t.scrollHeight * t.scrollHeight;
                return n / t.scrollHeight > .9
            }, n.msSetHeight = function (e, t, n) {
                var i, o = 25;
                e.forEach(function (e) {
                    i = t.getHeight() - n - (e.hasToolbar ? o : 0), e.setHeight(i)
                })
            }, n.msSelect = function (e, t) {
                var i = e.getValue();
                if (i.length) {
                    var o = [];
                    i.forEach(function (t) {
                        o.push(e.store.getAt(e.store.findExact("id", t)))
                    }), t.store.add(o)
                }
                n.msFilterAvailable(e, t)
            }, n.msSelectAll = function (e, t, i) {
                var o = e.store.getRange();
                i && o.reverse(), t.store.add(o), n.msFilterAvailable(e, t)
            }, n.msUnselect = function (e, t) {
                var i = t.getValue();
                i.length && (i.forEach(function (n) {
                    e.store.add(t.store.getAt(t.store.findExact("id", n))), t.store.remove(t.store.getAt(t.store.findExact("id", n)))
                }), n.msFilterAvailable(e, t), e.store.sortStore())
            }, n.msUnselectAll = function (e, t) {
                e.store.add(t.store.getRange()), t.store.removeAll(), n.msFilterAvailable(e, t), e.store.sortStore()
            }, n.msFilterAvailable = function (e, t) {
                if (e.store.getRange().length && t.store.getRange().length) {
                    var n = [];
                    e.store.each(function (e) {
                        var i = !1;
                        t.store.each(function (t) {
                            t.data.id === e.data.id && (i = !0)
                        }), i && n.push(e)
                    }), e.store.remove(n)
                }
            }, n.mask = function (e, t) {
                e = (0, l["default"])(e) ? e : n.get(e) || n.getUpdateComponent(), (0, l["default"])(e) && !n.preventMask && (t = t || "Loading..", e.mask && e.mask.destroy && (e.mask.destroy(), e.mask = null), e.mask = new Ext.create("Ext.LoadMask", e, {
                    shadow: !1,
                    msg: t,
                    style: "box-shadow:0",
                    bodyStyle: "box-shadow:0"
                }), e.mask.show())
            }, n.unmask = function (e) {
                e = (0, l["default"])(e) ? e : n.get(e) || n.getUpdateComponent(), (0, l["default"])(e) && e.mask && e.mask.destroy && (e.mask.destroy(), e.mask = null)
            }, n.setAnchorPosition = function (e, t) {
                t = n.componentFrom(t);
                var i = t.getPosition ? t.getPosition() : t.getXY ? t.getXY() : null, o = t.getHeight(),
                    a = n.get("viewport").getWidth(), r = e.getWidth(), s = i[0], l = i[1] + o + 4;
                s + r > a ? e.setPosition(a - r - 2, l) : e.setPosition(s, l)
            }, n.getBodyMask = function () {
                return Ext.getBody().child(".x-mask")
            }, n.addHideOnBlurHandler = function (e) {
                n.getBodyMask().on("click", function () {
                    e.hideOnBlur && e.hide()
                }), e.hasHideOnBlurHandler = !0
            }, n.addDestroyOnBlurHandler = function (e) {
                n.getBodyMask().on("click", function () {
                    e.destroyOnBlur && e.destroy()
                }), e.hasDestroyOnBlurHandler = !0
            }, n.alert = function (e) {
                var t, i, o = {};
                e && (!(0, l["default"])(e) || e.message || e.responseText) && ((0, l["default"])(e) && e.responseText && !e.message && (e = JSON.parse(e.responseText)), (0, r["default"])(e) && (e = {
                    status: "ERROR",
                    message: e
                }), t = (e.status || "INFO").toLowerCase(), o.title = e.status, o.iconCls = "ns-window-title-messagebox " + t, o.html = "", o.html += e.httpStatusCode ? "Code: " + e.httpStatusCode + "<br>" : "", o.html += e.httpStatus ? "Status: " + e.httpStatus + "<br><br>" : "", o.html += e.message + ("." === e.message.substr(e.message.length - 1) ? "" : "."), o.bodyStyle = "padding: 12px; background: #fff; max-width: 600px; max-height: " + n.getHeight() / 2 + "px", o.modal = !0, o.destroyOnBlur = !0, o.listeners = {
                    show: function (e) {
                        e.setPosition(e.getPosition()[0], e.getPosition()[1] / 2), e.hasDestroyOnBlurHandler || n.addDestroyOnBlurHandler(e)
                    }
                }, i = Ext.create("Ext.window.Window", o), i.show())
            }, n.enableRightClick = function () {
                document.body.oncontextmenu = !0
            }, n.disableRightClick = function () {
                document.body.oncontextmenu = function () {
                    return !1
                }
            }, n.confirmUnsaved = function (e, i) {
                var o = n.i18nManager ? n.i18nManager.get() : {};
                (0, f.ConfirmWindow)(t, e, o.all_unsaved_changes_will_be_discarded_continue, null, i).show()
            }, n.confirmReplace = function (e, i) {
                var o = n.i18nManager ? n.i18nManager.get() : {};
                (0, f.ConfirmWindow)(t, e, o.existing_favorite_will_be_replaced_continue, null, i).show()
            }, n.confirmDelete = function (e, i) {
                var o = n.i18nManager ? n.i18nManager.get() : {};
                (0, f.ConfirmWindow)(t, e, o.this_favorite_will_be_deleted_continue, null, i).show()
            }, n.redirectCtrl = function (e, t) {
                0 !== t.button || t.ctrlKey ? (t.ctrlKey && arrayContains([0, 1], t.button) || !t.ctrlKey && 1 === t.button) && window.open(e, "_blank") : window.location.href = e
            }, n.getTitleHtml = function (e) {
                return e ? '<div style="height:19px;line-height:14px;width:100%;font:bold 12px LiberationSans,arial,sans-serif;color:#333;text-align:center;letter-spacing:-0.1px">' + e + "</div>" : ""
            }, n.getEmbedHtml = function () {
                var e = "", t = "v" + parseFloat(n.appManager.systemInfo.version.split(".").join("")),
                    i = n.instanceManager.apiResource, o = i + "1", a = i + "Plugin", r = (i || "").toLowerCase(),
                    s = n.instanceManager.getStateCurrent();
                return e += "<html>\n<head>\n", e += '<script src="//code.jquery.com/jquery-2.2.4.min.js"></script>\n', e += '<script src="//dhis2-cdn.org/' + t + "/plugin/" + r + '.js"></script>\n', e += "</head>\n\n<body>\n", e += '<div id="' + o + '"></div>\n\n', e += "<script>\n\n", e += a + '.url = "<url to server>";\n', e += a + '.username = "<username>";\n', e += a + '.password = "<password>";\n\n', e += i + "Plugin.load([" + JSON.stringify(s.toPlugin(o), null, 2) + "]);\n\n", e += "</script>\n\n", e += "</body>\n</html>"
            }, n.renderLoadingIndicator = function (e) {
                $("#" + e).append('<div class="spinner"></div>')
            }, n.onResize = function (e) {
                g.push(e)
            }, n.resize = function (e) {
                g.run(e)
            }, n.openTableLayoutTab = function (e, t, n) {
                t = t || "xls";
                var i = e.req(null, t, !1, !0).url(), o = n ? "_blank" : "_top";
                window.open(i, o)
            }, n.openPlainDataSource = function (e, t, n) {
                e = ((0, r["default"])(e) ? e : e.url()) + (t || "");
                var i = n ? "_blank" : "_top";
                window.open(e, i)
            }, n.openDataDump = function (e, t, i, o) {
                e = e || n.instanceManager.getLayout();
                var a = !1;
                if (e) {
                    var r = [];
                    e.toRows(a), t = t || "csv", e.showHierarchy && r.push("showHierarchy=true"), r.push("rows=" + e.getDimensionNames(a).join(";"));
                    var s = e.req(null, t).url(r), l = o ? "_blank" : "_top";
                    window.open(s, l)
                }
            }, n.submitSvgForm = function (e) {
                var t = Ext.query("svg"), i = Ext.query("#exportForm")[0];
                return (0, u["default"])(t) && t.length ? (t = Ext.get(t[0]), t = t.parent().dom.innerHTML, Ext.query("#svgField")[0].value = t, Ext.query("#filenameField")[0].value = "test", i.action = n.appManager.getPath() + "/api/svg." + e, void i.submit()) : void alert("Browser does not support SVG")
            }
        }, g.prototype.applyTo = function (e) {
            var t = this;
            (0, p["default"])(e).forEach(function (e) {
                e.uiManager = t
            })
        }, g.prototype.getWidth = function (e) {
            var t = this, n = e ? t.componentFrom(e) : t.getUpdateComponent();
            return n.getWidth()
        }, g.prototype.getHeight = function (e) {
            var t = this, n = e ? t.componentFrom(e) : t.getUpdateComponent();
            return n.getHeight()
        }, g.prototype.getUiState = function () {
            return this.get("viewport").getUiState()
        }, g.prototype.enableConfirmUnload = function () {
            var e = this;
            window.onbeforeunload = function (t) {
                return e.instanceManager && e.instanceManager.isStateUnsaved() ? (("undefined" == typeof t ? "undefined" : o(t)) ? t : window.event).returnValue = "You have unsaved changes." : null
            }
        }, g.prototype.disableConfirmUnload = function () {
            window.onbeforeunload = function (e) {
                return null
            }
        }
    }).call(t, function () {
        return this
    }())
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    t.extChartOverrides = function () {
        Ext.override(Ext.chart.Chart, {
            insetPaddingObject: {}, alignAxes: function () {
                function e(e) {
                    var t = i.findIndex("position", e);
                    return t < 0 ? null : i.getAt(t)
                }

                var t, n = this, i = n.axes, o = n.legend, a = ["top", "right", "bottom", "left"], r = n.insetPadding,
                    s = n.insetPaddingObject,
                    l = {top: s.top || r, right: s.right || r, bottom: s.bottom || r, left: s.left || r};
                Ext.each(a, function (t) {
                    var n, i = "left" === t || "right" === t, a = e(t);
                    o !== !1 && o.position === t && (n = o.getBBox(), l[t] += (i ? n.width : n.height) + l[t]), a && a.bbox && (n = a.bbox, l[t] += i ? n.width : n.height)
                }), t = {
                    x: l.left,
                    y: l.top,
                    width: n.curWidth - l.left - l.right,
                    height: n.curHeight - l.top - l.bottom
                }, n.chartBBox = t, i.each(function (e) {
                    var n = e.position, i = "left" === n || "right" === n;
                    e.x = "right" === n ? t.x + t.width : t.x, e.y = "top" === n ? t.y : t.y + t.height, e.width = i ? t.width : t.height, e.length = i ? t.height : t.width
                })
            }
        }), Ext.override(Ext.chart.series.Line, {
            drawSeries: function () {
                var e, t, i, o, a, r, s, l, d, u, c, p, f, g, h, A, m, b, x, y, v, w, E, S, C, M, I, R, P, U, T, k, B,
                    D, O, _, L, F, V, N = this, j = N.chart, G = j.axes, W = j.getChartStore(), H = W.getCount(),
                    z = N.chart.surface, Q = {}, Y = N.group, K = N.showMarkers, q = N.markerGroup, J = j.shadow,
                    X = N.shadowGroups, Z = N.shadowAttributes, $ = N.smooth, ee = X.length, te = ["M"], ne = ["M"],
                    ie = ["M"], oe = ["M"], ae = j.markerIndex, re = [].concat(N.axis), se = [], le = {}, de = [],
                    ue = !1, ce = [], pe = N.markerStyle, fe = N.style, ge = N.colorArrayStyle,
                    he = ge && ge.length || 0, Ae = Ext.isNumber, me = N.seriesIdx, be = N.getAxesForXAndYFields(),
                    xe = be.xAxis, ye = be.yAxis;
                if (N.fireEvent("beforedraw", N) !== !1) if (H && !N.seriesIsHidden) {
                    if (O = Ext.apply(pe || {}, N.markerConfig), L = O.type, delete O.type, _ = fe, _["stroke-width"] || (_["stroke-width"] = .5), ae && q && q.getCount()) for (A = 0; A < ae; A++) v = q.getAt(A), q.remove(v), q.add(v), w = q.getAt(q.getCount() - 2), v.setAttributes({
                        x: 0,
                        y: 0,
                        translate: {x: w.attr.translation.x, y: w.attr.translation.y}
                    }, !0);
                    for (N.unHighlightItem(), N.cleanHighlights(), N.setBBox(), Q = N.bbox, N.clipRect = [Q.x, Q.y, Q.width, Q.height], A = 0, b = re.length; A < b; A++) x = G.get(re[A]), x && (y = x.calcEnds(), "top" == x.position || "bottom" == x.position ? (P = y.from, U = y.to) : (T = y.from, k = y.to));
                    !N.xField || Ae(P) || "bottom" != xe && "top" != xe || G.get(xe) || (x = Ext.create("Ext.chart.axis.Axis", {
                        chart: j,
                        fields: [].concat(N.xField)
                    }).calcEnds(), P = x.from, U = x.to), !N.yField || Ae(T) || "right" != ye && "left" != ye || G.get(ye) || (x = Ext.create("Ext.chart.axis.Axis", {
                        chart: j,
                        fields: [].concat(N.yField)
                    }).calcEnds(), T = x.from, k = x.to), isNaN(P) ? (P = 0, I = Q.width / (H - 1 || 1)) : I = Q.width / (U - P || H - 1 || 1), isNaN(T) ? (T = 0, R = Q.height / (H - 1 || 1)) : R = Q.height / (k - T || H - 1 || 1), N.eachRecord(function (e, t) {
                        return S = e.get(N.xField), ("string" == typeof S || "object" == ("undefined" == typeof S ? "undefined" : n(S)) && !Ext.isDate(S) || xe && G.get(xe) && "Category" == G.get(xe).type) && (S = S in le ? le[S] : le[S] = t), C = e.get(N.yField), "undefined" == typeof C || "string" == typeof C && !C ? void(Ext.isDefined(Ext.global.console) && Ext.global.console.warn("[Ext.chart.series.Line]  Skipping a store element with an undefined value at ", e, S, C)) : (("object" == ("undefined" == typeof C ? "undefined" : n(C)) && !Ext.isDate(C) || ye && G.get(ye) && "Category" == G.get(ye).type) && (C = t), ce.push(t), se.push(S), void de.push(C))
                    }), b = se.length, b > Q.width && (M = N.shrink(se, de, Q.width), se = M.x, de = M.y), N.items = [], F = 0, b = se.length;
                    for (A = 0; A < b; A++) if (S = se[A], C = de[A], C !== !1) {
                        if (d = (Q.x + (S - P) * I).toFixed(2), u = (Q.y + Q.height - (C - T) * R).toFixed(2), ue && (ue = !1, ne.push("M")), ne = ne.concat([d, u]), "undefined" == typeof g && "undefined" != typeof u && (g = u, f = d), N.line && !j.resizing || (te = te.concat([d, Q.y + Q.height / 2])), j.animate && j.resizing && N.line && (N.line.setAttributes({path: te}, !0), N.fillPath && N.fillPath.setAttributes({
                                path: te,
                                opacity: .2
                            }, !0), N.line.shadows)) for (t = N.line.shadows, m = 0, ee = t.length; m < ee; m++) i = t[m], i.setAttributes({path: te}, !0);
                        K && (v = q.getAt(F++), v ? (v.setAttributes({
                            value: '"' + S + ", " + C + '"',
                            x: 0,
                            y: 0,
                            hidden: !1
                        }, !0), v._to = {translate: {x: +d, y: +u}}) : (v = Ext.chart.Shape[L](z, Ext.apply({
                            group: [Y, q],
                            x: 0,
                            y: 0,
                            translate: {x: +(c || d), y: p || Q.y + Q.height / 2},
                            value: '"' + S + ", " + C + '"',
                            zIndex: 4e3
                        }, O)), v._to = {translate: {x: +d, y: +u}})), N.items.push({
                            series: N,
                            value: [S, C],
                            point: [d, u],
                            sprite: v,
                            storeItem: W.getAt(ce[A])
                        }), c = d, p = u
                    } else 1 == ne.length && (ne = []), ue = !0, N.items.push(!1);
                    if (!(ne.length <= 1)) {
                        if (N.smooth && (oe = Ext.draw.Draw.smooth(ne, Ae($) ? $ : N.defaultSmoothness)), ie = $ ? oe : ne, j.markerIndex && N.previousPath ? (a = N.previousPath, $ || Ext.Array.erase(a, 1, 2)) : a = ne, !N.line && (N.line = z.add(Ext.apply({
                                type: "path",
                                group: Y,
                                path: te,
                                stroke: _.stroke || _.fill
                            }, _ || {})), J && N.line.setAttributes(Ext.apply({}, N.shadowOptions), !0), N.line.setAttributes({
                                fill: "none",
                                zIndex: 3e3
                            }), !_.stroke && he && N.line.setAttributes({stroke: ge[me % he]}, !0), J)) for (t = N.line.shadows = [], o = 0; o < ee; o++) e = Z[o], e = Ext.apply({}, e, {path: te}), i = z.add(Ext.apply({}, {
                            type: "path",
                            group: X[o]
                        }, e)), t.push(i);
                        if (N.fill && (s = ie.concat([["L", d, Q.y + Q.height], ["L", f, Q.y + Q.height], ["L", f, g]]), N.fillPath || (N.fillPath = z.add({
                                group: Y,
                                type: "path",
                                opacity: _.opacity || .3,
                                fill: _.fill || ge[me % he],
                                path: te
                            }))), h = K && q.getCount(), j.animate) {
                            if (r = N.fill, B = N.line, l = N.renderer(B, !1, {path: ie}, A, W), Ext.apply(l, _ || {}, {stroke: _.stroke || _.fill}), delete l.fill, B.show(!0), j.markerIndex && N.previousPath ? N.animation = D = N.onAnimate(B, {
                                    to: l,
                                    from: {path: a}
                                }) : N.animation = D = N.onAnimate(B, {to: l}), J) for (t = B.shadows, m = 0; m < ee; m++) t[m].show(!0), j.markerIndex && N.previousPath ? N.onAnimate(t[m], {
                                to: {path: ie},
                                from: {path: a}
                            }) : N.onAnimate(t[m], {to: {path: ie}});
                            if (r && (N.fillPath.show(!0), N.onAnimate(N.fillPath, {
                                    to: Ext.apply({}, {
                                        path: s,
                                        fill: _.fill || ge[me % he],
                                        "stroke-width": 0
                                    }, _ || {})
                                })), K) {
                                for (F = 0, A = 0; A < b; A++) N.items[A] && (E = q.getAt(F++), E && (l = N.renderer(E, W.getAt(A), E._to, A, W), N.onAnimate(E, {to: Ext.apply(l, O || {})}), E.show(!0)));
                                for (; F < h; F++) E = q.getAt(F), E.hide(!0)
                            }
                        } else {
                            if (l = N.renderer(N.line, !1, {
                                    path: ie,
                                    hidden: !1
                                }, A, W), Ext.apply(l, _ || {}, {stroke: _.stroke || _.fill}), delete l.fill, N.line.setAttributes(l, !0), J) for (t = N.line.shadows, m = 0; m < ee; m++) t[m].setAttributes({
                                path: ie,
                                hidden: !1
                            }, !0);
                            if (N.fill && N.fillPath.setAttributes({path: s, hidden: !1}, !0), K) {
                                for (F = 0, A = 0; A < b; A++) N.items[A] && (E = q.getAt(F++), E && (l = N.renderer(E, W.getAt(A), E._to, A, W), E.setAttributes(Ext.apply(O || {}, l || {}), !0), E.show(!0)));
                                for (; F < h; F++) E = q.getAt(F), E.hide(!0)
                            }
                        }
                        j.markerIndex && (N.smooth ? Ext.Array.erase(ne, 1, 2) : Ext.Array.splice(ne, 1, 0, ne[1], ne[2]), N.previousPath = ne), N.renderLabels(), N.renderCallouts(), N.fireEvent("draw", N)
                    }
                } else if (V = this.items) for (A = 0, b = V.length; A < b; ++A) V[A].sprite && V[A].sprite.hide(!0)
            }
        }), Ext.override(Ext.chart.Legend, {
            updatePosition: function () {
                var e, t, n = this, i = n.width, o = n.height, a = (n.padding, n.chart), r = a.chartBBox,
                    s = a.insetPadding, l = r.width - 2 * s, d = r.height - 2 * s, u = r.x + s, c = r.y + s,
                    p = a.surface, f = Math.floor;
                if (n.isDisplayed()) {
                    switch (n.position) {
                        case"left":
                            e = s, t = f(c + d / 2 - o / 2);
                            break;
                        case"right":
                            e = f(p.width - i) - s, t = f(c + d / 2 - o / 2);
                            break;
                        case"top":
                            e = f((u + r.width) / 2 - i / 2) - 7, t = s;
                            break;
                        case"bottom":
                            e = f(u + l / 2 - i / 2), t = f(p.height - o) - s;
                            break;
                        default:
                            e = f(n.origX) + s, t = f(n.origY) + s
                    }
                    n.x = e, n.y = t, Ext.each(n.items, function (e) {
                        e.updatePosition()
                    }), n.boxSprite.setAttributes(n.getBBox(), !0)
                }
            }
        }), Ext.override(Ext.chart.LegendItem, {
            createLegend: function (e) {
                function t(e) {
                    var t = l[e];
                    return Ext.isArray(t) ? t[u] : t
                }

                var n, i, o, a, r = this, s = e.yFieldIndex, l = r.series, d = l.type, u = r.yFieldIndex, c = r.legend,
                    p = r.surface, f = (c.x + r.x, c.y + r.y, r.zIndex), g = !1, h = Ext.apply(l.seriesStyle, l.style),
                    A = c.labelMarkerSize || 10;
                o = r.add("label", p.add({
                    type: "text",
                    x: 30,
                    y: 0,
                    zIndex: f || 0,
                    font: c.labelFont,
                    fill: c.labelColor || "#000",
                    text: t("title") || t("yField")
                })), "line" === d || "scatter" === d ? ("line" === d && r.add("line", p.add({
                    type: "path",
                    path: "M0.5,0.5L16.5,0.5",
                    zIndex: f,
                    "stroke-width": l.lineWidth,
                    "stroke-linejoin": "round",
                    "stroke-dasharray": l.dash,
                    stroke: h.stroke || "#000",
                    style: {cursor: "pointer"}
                })), (l.showMarkers || "scatter" === d) && (i = Ext.apply(l.markerStyle, l.markerConfig || {}), r.add("marker", Ext.chart.Shape[i.type](p, {
                    fill: i.fill,
                    x: 8.5,
                    y: .5,
                    zIndex: f,
                    radius: i.radius || i.size,
                    style: {cursor: "pointer"}
                })))) : r.add("box", p.add({
                    type: "rect",
                    zIndex: f,
                    x: 6,
                    y: 0,
                    width: A,
                    height: A,
                    fill: l.getLegendColor(s),
                    style: {cursor: "pointer"}
                })), r.setAttributes({hidden: !1}, !0), n = r.getBBox(), a = r.add("mask", p.add({
                    type: "rect",
                    x: n.x,
                    y: n.y,
                    width: n.width || 20,
                    height: n.height || 20,
                    zIndex: (f || 0) + 1e3,
                    fill: "#f00",
                    opacity: 0,
                    style: {cursor: "pointer"}
                })), r.on("mouseover", function () {
                    o.setStyle({"font-weight": "bold"}), a.setStyle({cursor: "pointer"}), l._index = s, l.highlightItem()
                }, r), r.on("mouseout", function () {
                    o.setStyle({"font-weight": "normal"}), l._index = s, l.unHighlightItem()
                }, r), l.visibleInLegend(s) || (g = !0, o.setAttributes({opacity: .5}, !0)), r.on("mousedown", function () {
                    g ? (l.showAll(), o.setAttributes({opacity: 1}, !0)) : (l.hideAll(), o.setAttributes({opacity: .5}, !0)), g = !g
                }, r), r.updatePosition({x: 0, y: 0})
            }
        }), Ext.override(Ext.chart.axis.Axis, {
            drawHorizontalLabels: function () {
                var e, t, n, i, o, a, r, s, l, d, u, c = this, p = c.label, f = Math.floor, g = Math.max,
                    h = c.chart.axes, A = c.position, m = c.inflections, b = m.length, x = c.labels,
                    y = (c.labelGroup, 0);
                c.chart.maxGutter[1];
                for (r = b - 1, n = m[0], u = c.getOrCreateLabel(0, c.label.renderer(x[0])), e = Math.floor(Math.abs(Math.sin(p.rotate && p.rotate.degrees * Math.PI / 180 || 0))), d = 0; d < b; d++) {
                    n = m[d], a = c.label.renderer(x[d]) || "", o = c.getOrCreateLabel(d, a), t = o._bbox, y = g(y, t.height + c.dashSize + c.label.padding), s = f(n[0] - (e ? t.height : t.width) / 2), 0 == c.chart.maxGutter[0] && (0 == d && h.findIndex("position", "left") == -1 ? s = n[0] : d == r && h.findIndex("position", "right") == -1 && (s = n[0] - t.width)),
                        l = "top" == A ? n[1] - 2 * c.dashSize - c.label.padding - t.height / 2 : n[1] + 2 * c.dashSize + c.label.padding + t.height / 2;
                    var v = p.rotate && p.rotate.degrees && !Ext.Array.contains([0, 90, 180, 270, 360], p.rotate.degrees),
                        w = Math.floor((o.text.length - 12) * -1 * .75), E = v ? n[0] - o._bbox.width + w : s;
                    o.setAttributes({
                        hidden: !1,
                        x: E,
                        y: l
                    }, !0), 0 == d || !c.intersect(o, i) && !c.intersect(o, u) ? i = o : o.hide(!0)
                }
                return y
            }
        }), Ext.override(Ext.chart.axis.Radial, {
            drawLabel: function () {
                var e, t, n, i, o, a, r = this.chart, s = r.surface, l = r.chartBBox, d = r.store,
                    u = l.x + l.width / 2, c = l.y + l.height / 2, p = Math.min(l.width, l.height) / 2, f = Math.max,
                    g = Math.round, h = [], A = [], m = [], b = !this.maximum, x = this.maximum || 0, y = this.steps,
                    v = 0, w = 2 * Math.PI, E = Math.cos, S = Math.sin, C = this.label.display, M = "none" !== C,
                    I = 10, R = "#333", P = "normal 9px sans-serif", U = r.seriesStyle;
                if (R = U ? U.labelColor : R, P = U ? U.labelFont : P, M) {
                    if (r.series.each(function (e) {
                            A.push(e.yField), n = e.xField
                        }), d.each(function (e, i) {
                            if (b) for (i = 0, t = A.length; i < t; i++) x = f(+e.get(A[i]), x);
                            m.push(e.get(n))
                        }), this.labelArray) {
                        if (h = this.labelArray, "categories" != C) for (v = 0; v < y; v++) h[v].setAttributes({
                            text: g((v + 1) / y * x),
                            x: u,
                            y: c - p * (v + 1) / y,
                            "text-anchor": "middle",
                            "stroke-width": .1,
                            stroke: "#333",
                            fill: R,
                            font: P
                        }, !0);
                        if ("scale" != C) for (i = 0, y = m.length; i < y; i++) o = E(i / y * w) * (p + I), a = S(i / y * w) * (p + I), h[v + i] && h[v + i].setAttributes({
                            type: "text",
                            text: m[i],
                            x: u + o,
                            y: c + a,
                            "text-anchor": o * o <= .001 ? "middle" : o < 0 ? "end" : "start",
                            fill: R,
                            font: P
                        }, !0)
                    } else {
                        if ("categories" != C) for (v = 1; v <= y; v++) e = s.add({
                            type: "text",
                            text: g(v / y * x),
                            x: u,
                            y: c - p * v / y,
                            "text-anchor": "middle",
                            "stroke-width": .1,
                            stroke: "#333",
                            fill: R,
                            font: P
                        }), e.setAttributes({hidden: !1}, !0), h.push(e);
                        if ("scale" != C) for (i = 0, y = m.length; i < y; i++) o = E(i / y * w) * (p + I), a = S(i / y * w) * (p + I), e = s.add({
                            type: "text",
                            text: m[i],
                            x: u + o,
                            y: c + a,
                            "text-anchor": o * o <= .001 ? "middle" : o < 0 ? "end" : "start",
                            fill: R,
                            font: P
                        }), e.setAttributes({hidden: !1}, !0), h.push(e)
                    }
                    this.labelArray = h
                }
            }
        })
    }
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = t.extOverrides = void 0;
    t.extOverrides = n = function () {
        Ext.QuickTips.init()
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.Table = void 0;
    var o, a = n(3), r = i(a), s = n(19), l = i(s), d = n(1), u = i(d), c = n(2), p = i(c), f = n(44), g = i(f),
        h = n(45), A = i(h), m = n(102), b = i(m), x = n(100), y = i(x), v = n(48), w = i(v), E = n(18), S = i(E),
        C = n(6), M = i(C), I = n(10), R = i(I), P = n(50), U = i(P), T = n(13);
    t.Table = o, t.Table = o = function (e, t, n, i, a) {
        var s = this, d = o, c = d.appManager, f = d.dimensionConfig, h = d.optionConfig;
        a = a || {};
        var m, x, v, w, E, C, I, P, k, B, D, O, _, L, F, V, N, j, G, W, H = function (e) {
                var t;
                return e.xItems ? (t = e.xItems.unique, t ? t.length < 2 ? 1 : e.size / t[0].length : null) : null
            }, z = H(n), Q = (H(i), []), Y = [], K = [], q = {},
            J = (0, p["default"])(e.legendSet) ? c.getLegendSetById(e.legendSet.id) : null, X = 0,
            Z = (f.getDimensionNameMap(), f.getObjectNameMap(), t.getIdValueMap(e)), $ = [];
        m = function (e, t) {
            return t = t || 2, parseFloat(w(e, 2)).toString()
        }, x = function (t, n) {
            var i, o, a, s, d, u,
                c = (0, p["default"])(t) && (0, r["default"])(t.type) && "value" === t.type.substr(0, 5) && !t.empty,
                f = c && "value" === t.type, A = "", m = "";
            if (u = function (e) {
                    var t = e.htmlValue, n = parseFloat(e.htmlValue);
                    return e.collapsed ? "" : f ? (0, g["default"])(t) ? t : (0, l["default"])(n) && n == t ? n : t : t || ""
                }, !(0, p["default"])(t)) return "";
            if (t.hidden || t.collapsed) return "";
            if (X += 1, f && J) {
                var b = parseFloat(t.value);
                o = J.legends;
                for (var x = 0; x < o.length; x++) (0, y["default"])(b, o[x].startValue, o[x].endValue) === b && (i = o[x].color)
            }
            return a = t.colSpan ? 'colspan="' + t.colSpan + '" ' : "", s = t.rowSpan ? 'rowspan="' + t.rowSpan + '" ' : "", d = u(t), d = (0, M["default"])(["dimension", "filter"], t.type) ? d : h.prettyPrint(d, e.digitGroupSeparator), A += t.hidden ? " td-hidden" : "", A += t.collapsed ? " td-collapsed" : "", A += f ? " pointer" : "", A += t.cls ? " " + t.cls : "", (0, r["default"])(n) && (A += " td-sortable", $.push({
                id: n,
                uuid: t.uuid
            })), m += "<td " + (t.uuid ? 'id="' + t.uuid + '" ' : ""), m += ' class="' + A + '" ' + a + s, m += t.title ? ' title="' + t.title + '" ' : "", m += 'style="' + (i && f ? "color:" + i + "; " : "") + '">' + d + "</td>"
        }, v = function (e) {
            var t = parseFloat(e);
            return (0, g["default"])(e) ? 1 : (0, l["default"])(t) && t == e ? t : 0
        }, w = function (e, t) {
            if (e = parseFloat(e), t = parseFloat(t), (0, l["default"])(e) && (0, l["default"])(t)) {
                var n = E(e);
                return n > t ? (0, b["default"])(e, t) : e
            }
            return e
        }, E = function (e) {
            var t = new String(e);
            return t.indexOf(".") > -1 ? t.length - t.indexOf(".") - 1 : 0
        }, C = function () {
            return !!e.showColTotals
        }, I = function () {
            return !!e.showRowTotals
        }, P = function () {
            return !!e.showColSubTotals && i.type && i.dims > 1
        }, k = function () {
            return !!e.showRowSubTotals && n.type && n.dims > 1
        }, B = function () {
            return i.type && 1 === i.dims
        }, D = function () {
            var o, a, r = [], s = n.type ? e.columns.getDimensionNames(t) : [],
                l = i.type ? e.rows.getDimensionNames(t) : [];
            if (o = function (e) {
                    return e = e || {}, x({
                        cls: e.cls ? " " + e.cls : "pivot-empty",
                        colSpan: e.colSpan ? e.colSpan : 1,
                        rowSpan: e.rowSpan ? e.rowSpan : 1,
                        htmlValue: e.htmlValue ? e.htmlValue : "&nbsp;"
                    })
                }, a = function (e) {
                    var a = [];
                    if (e < n.dims - 1) {
                        if (i.type && i.dims) for (var r = 0; r < i.dims - 1; r++) a.push(o({cls: "pivot-dim-label"}));
                        a.push(o({cls: "pivot-dim-label", htmlValue: t.getNameById(s[e])}))
                    } else {
                        if (i.type && i.dims) for (var r = 0; r < i.dims - 1; r++) a.push(o({
                            cls: "pivot-dim-label",
                            htmlValue: t.getNameById(l[r])
                        }));
                        a.push(o({
                            cls: "pivot-dim-label",
                            htmlValue: t.getNameById(l[r]) + (n.type && i.type ? "&nbsp;/&nbsp;" : "") + t.getNameById(s[e])
                        }))
                    }
                    return a
                }, !n.type) {
                if (i.type && e.showDimensionLabels) {
                    for (var d = [], u = 0; u < l.length; u++) d.push(o({
                        cls: "pivot-dim-label",
                        htmlValue: t.getNameById(l[u])
                    }));
                    r.push(d)
                }
                return r
            }
            for (var c, u = 0; u < n.dims; u++) {
                c = [], e.showDimensionLabels ? c = c.concat(a(u)) : 0 === u && c.push(n.type && i.type ? o({
                    colSpan: i.dims,
                    rowSpan: n.dims
                }) : "");
                for (var p, f, g, h = 0, A = 0; h < n.size; h++) A++, f = null, g = null, p = n.objects.all[u][h], p.type = "dimension", p.cls = "pivot-dim", p.noBreak = !1, p.hidden = !(p.rowSpan || p.colSpan), p.htmlValue = t.getItemName(p.id, e.showHierarchy, !0), u === n.dims - 1 && B() && (f = n.ids[h]), c.push(x(p, f)), 0 === u && A === n.span[u] && k() && (c.push(x({
                    type: "dimensionSubtotal",
                    cls: "pivot-dim-subtotal cursor-default",
                    rowSpan: n.dims,
                    htmlValue: "&nbsp;"
                })), A = 0), 0 === u && h === n.size - 1 && I() && (g = B() ? "total" : null, c.push(x({
                    uuid: (0, U["default"])(),
                    type: "dimensionTotal",
                    cls: "pivot-dim-total",
                    rowSpan: n.dims,
                    htmlValue: "Total"
                }, g)));
                r.push(c)
            }
            return r
        }, O = function () {
            var o, a, r = [], s = [], l = [], d = [], c = n.type ? n.size : 1, p = i.type ? i.size : 1;
            if (a = function (e) {
                    e.children || (e.collapsed = !0, e.parent && e.parent.oldestSibling.children--), e.parent && a(e.parent.oldestSibling)
                }, i.type) for (var f, g = 0; g < i.size; g++) {
                f = [];
                for (var h, b = 0; b < i.dims; b++) h = i.objects.all[b][g], h.type = "dimension", h.cls = "pivot-dim td-nobreak" + (e.showHierarchy ? " align-left" : ""), h.noBreak = !0, h.hidden = !(h.rowSpan || h.colSpan), h.htmlValue = t.getItemName(h.id, e.showHierarchy, !0), f.push(h);
                s.push(f)
            } else e.showDimensionLabels && s.push([{type: "transparent", cls: "pivot-transparent-row"}]);
            for (var y, w, g = 0; g < p; g++) {
                y = [], w = [];
                for (var E, C, R, D, O, _, L, b = 0; b < c; b++) E = new T.ResponseRowIdCombination, O = !1, L = [], E.add(n.type ? n.ids[b] : ""), E.add(i.type ? i.ids[g] : ""), _ = (0, U["default"])(), n.type && (L = L.concat(n.objects.all[n.dims - 1][b].uuids)), i.type && (L = L.concat(i.objects.all[i.dims - 1][g].uuids)), R = Z[E.get()], (0, A["default"])(R) ? (C = v(R), D = R) : (C = 0, D = "&nbsp;", O = !0), y.push(C), w.push({
                    uuid: _,
                    type: "value",
                    cls: "pivot-value" + (O ? " cursor-default" : ""),
                    value: C,
                    htmlValue: D,
                    empty: O,
                    uuids: L
                }), q[_] = L;
                Q.push(y), Y.push(w)
            }
            if (n.type && I()) for (var g = 0, O = [], F = 0; g < Y.length; g++) {
                for (b = 0, h; b < Y[g].length; b++) h = Y[g][b], O.push(h.empty), F += h.value;
                if (l.push({
                        type: "valueTotal",
                        cls: "pivot-value-total",
                        value: F,
                        htmlValue: (0, M["default"])(O, !1) ? m(F) : "",
                        empty: !(0, M["default"])(O, !1)
                    }), B()) {
                    var V = new T.ResponseRowIdCombination(["total", i.ids[g]]), N = !(0, M["default"])(O, !1);
                    Z[V.get()] = N ? null : F
                }
                O = [], F = 0
            }
            if (n.type && i.type && e.hideEmptyRows) for (var j, G, W, g = 0; g < Y.length; g++) if (j = Y[g], G = !(0, M["default"])((0, S["default"])(j, "empty"), !1)) {
                for (var b = 0; b < j.length; b++) j[b].collapsed = !0;
                I() && (l[g].collapsed = !0), W = s[g][i.dims - 1], a(W)
            }
            if (o = Y, k()) {
                for (var f, H, K, J = [], g = 0; g < o.length; g++) {
                    f = [], H = 0, K = 0;
                    for (var X, b = 0, $ = [], O = []; b < o[g].length; b++) if (X = o[g][b], H += X.value, O.push(!!X.empty), $.push(!!X.collapsed), K++, f.push(X), K === z) {
                        var N = !(0, M["default"])(O, !1);
                        f.push({
                            type: "valueSubtotal",
                            cls: "pivot-value-subtotal" + (N ? " cursor-default" : ""),
                            value: H,
                            htmlValue: N ? "&nbsp;" : m(H),
                            empty: N,
                            collapsed: !(0, M["default"])($, !1)
                        }), K = 0, H = 0, O = [], $ = []
                    }
                    J.push(f)
                }
                o = J
            }
            if (P()) {
                var ee, te = [], J = [], ne = [];
                ee = function (e) {
                    for (var t, n = [], o = 0; o < i.dims; o++) t = {}, t.type = "dimensionSubtotal", t.cls = "pivot-dim-subtotal cursor-default", t.collapsed = (0, M["default"])(e, !0), 0 === o ? (t.htmlValue = "&nbsp;", t.colSpan = i.dims) : t.hidden = !0, n.push(t);
                    return n
                };
                for (var f, g = 0, $ = []; g < s.length; g++) te.push(s[g]), $.push(!!s[g][0].collapsed), (0, u["default"])(s[g + 1]) && !s[g + 1][0].root || (te.push(ee($)), $ = []);
                for (var g = 0; g < te.length; g++) J.push([]);
                for (var g = 0; g < o[0].length; g++) for (var $, X, b = 0, ie = 0, oe = 0, ae = 0, O = []; b < o.length; b++) if (X = o[b][g], J[oe++].push(X), ae += X.value, O.push(!!X.empty), ie++, s[b][0].root && ($ = !!s[b][0].collapsed), !(0, u["default"])(s[b + 1]) || s[b + 1][0].root) {
                    var N = !(0, M["default"])(O, !1);
                    J[oe++].push({
                        type: "value" === X.type ? "valueSubtotal" : "valueSubtotalTotal",
                        value: ae,
                        htmlValue: N ? "&nbsp;" : m(ae),
                        collapsed: $,
                        cls: ("value" === X.type ? "pivot-value-subtotal" : "pivot-value-subtotal-total") + (N ? " cursor-default" : "")
                    }), ie = 0, ae = 0, O = []
                }
                for (var h, g = 0, $ = [], O = [], ae = 0, re = 0; g < l.length; g++) if (h = l[g], ne.push(h), $.push(!!h.collapsed), O.push(!!h.empty), ae += h.value, re++, re === i.span[0]) {
                    var N = !(0, M["default"])(O, !1);
                    ne.push({
                        type: "valueTotalSubgrandtotal",
                        cls: "pivot-value-total-subgrandtotal" + (N ? " cursor-default" : ""),
                        value: ae,
                        htmlValue: N ? "&nbsp;" : m(ae),
                        empty: N,
                        collapsed: !(0, M["default"])($, !1)
                    }), $ = [], O = [], ae = 0, re = 0
                }
                s = te, o = J, l = ne
            }
            for (var f, g = 0; g < o.length; g++) f = [], f = f.concat(s[g]), f = f.concat(o[g]), n.type && (f = f.concat(l[g])), d.push(f);
            for (var f, g = 0; g < d.length; g++) {
                f = [];
                for (var b = 0; b < d[g].length; b++) f.push(x(d[g][b]));
                r.push(f)
            }
            return r
        }, _ = function () {
            var e = [];
            if (i.type && C()) {
                for (var t, o = 0, a = 0, r = []; o < Y[0].length; o++) {
                    for (var s, l = 0; l < Y.length; l++) s = Y[l][o], a += s.value, r.push(!!s.empty);
                    K.push({
                        type: "valueTotal",
                        value: a,
                        htmlValue: (0, M["default"])(r, !1) ? m(a) : "",
                        empty: !(0, M["default"])(r, !1),
                        cls: "pivot-value-total"
                    }), a = 0, r = []
                }
                if (t = K, n.type && k()) {
                    for (var d, u = [], o = 0, c = 0, r = [], p = 0; o < t.length; o++) d = t[o], u.push(d), c += d.value, r.push(!!d.empty), p++, p === z && (u.push({
                        type: "valueTotalSubgrandtotal",
                        value: c,
                        htmlValue: (0, M["default"])(r, !1) ? m(c) : "",
                        empty: !(0, M["default"])(r, !1),
                        cls: "pivot-value-total-subgrandtotal"
                    }), c = 0, p = 0);
                    t = u
                }
                for (var o = 0; o < t.length; o++) e.push(x(t[o]))
            }
            return e
        }, L = function () {
            var e = 0, t = [], o = [];
            if (I() && C()) {
                for (var a, r = 0; r < K.length; r++) a = K[r], e += a.value, t.push(a.empty);
                n.type && i.type && o.push(x({
                    type: "valueGrandTotal",
                    cls: "pivot-value-grandtotal",
                    value: e,
                    htmlValue: (0, M["default"])(t, !1) ? m(e) : "",
                    empty: !(0, M["default"])(t, !1)
                }))
            }
            return o
        }, F = function () {
            var e, t, n = _(), o = L(), a = [];
            return C() && (i.type && (e = [x({
                type: "dimensionSubtotal",
                cls: "pivot-dim-total",
                colSpan: i.dims,
                htmlValue: "Total"
            })]), t = [].concat(e || [], n || [], o || []), a.push(t)), a
        }, V = function (t) {
            var o = i.dims || 0;
            if (!e.showDimensionLabels) {
                if (!n.type && i.type) return o + 1;
                if (n.type && i.type) return t + (o > 1 ? o - 1 : o)
            }
            return t
        }, N = function (t) {
            if (e.filters) {
                var n = e.filters.getRecordNames(!1, e.getResponse(), !0), i = [];
                return i.push(x({
                    type: "filter",
                    cls: "pivot-filter cursor-default",
                    colSpan: V(t),
                    title: n,
                    htmlValue: n
                })), [i]
            }
        }, j = function (t) {
            if (e.title) {
                var n = e.title, i = [];
                return i.push(x({
                    type: "filter",
                    cls: "pivot-filter cursor-default",
                    colSpan: V(t),
                    title: n,
                    htmlValue: n
                })), [i]
            }
        }, G = function () {
            var t, n = "pivot user-select";
            n += e.displayDensity && e.displayDensity !== h.getDisplayDensity("normal").id ? " displaydensity-" + e.displayDensity : "", n += e.fontSize && e.fontSize !== h.getFontSize("normal").id ? " fontsize-" + e.fontSize : "", t = '<table class="' + n + '">';
            for (var i = 0; i < W.length; i++) t += "<tr>" + W[i].join("") + "</tr>";
            return t += "</table>"
        }, function () {
            var e = D(), t = (e[0] || []).length;
            i.dims || 0;
            W = (0, R["default"])([].concat(a.skipTitle ? [] : j(t) || [], N(t) || [], e || [], O() || [], F() || []))
        }(), s.html = G(W), s.uuidDimUuidsMap = q, s.sortableIdObjects = $, s.idValueMap = Z, s.layout = e, s.response = t, s.colAxis = n, s.rowAxis = i, s.tdCount = X
    }, o.prototype.getUuidObjectMap = function () {
        return (0, w["default"])(this.colAxis ? this.colAxis.uuidObjectMap || {} : {}, this.rowAxis ? this.rowAxis.uuidObjectMap || {} : {})
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.TableAxis = void 0;
    var o = n(1), a = i(o), r = n(18), s = i(r), l = n(43), d = i(l), u = n(8), c = i(u), p = n(26), f = i(p),
        g = n(50), h = i(g), A = t.TableAxis = void 0;
    t.TableAxis = A = function (e, t, n) {
        var i, o, r, l = [], u = 1, p = [], g = [], A = [], m = [], b = [], x = [], y = [], v = {};
        if ("col" === n ? (l = e.columns, i = "colSpan") : "row" === n && (l = e.rows, i = "rowSpan"), (0, a["default"])(l) && l.length) {
            r = function () {
                var n = [], i = e.getDimensionNameRecordIdsMap(t);
                return l.forEach(function (e) {
                    e.sorted ? n.push((0, s["default"])(e.items, "id")) : n.push(i[e.dimension])
                }), n
            }(), o = r.length;
            for (var w, E = 0; E < o; E++) w = r[E].length, p.push(w), u *= w, g.push(u);
            for (var E = 0; E < o; E++) 1 === p[E] ? 0 === E ? A.push(u) : e.hideEmptyRows && "row" === n ? A.push(u / g[E]) : A.push(A[0]) : A.push(u / g[E]);
            if (m.push(r[0]), o.length > 1) for (var S, C, E = 1; E < o; E++) {
                S = [], C = 1 === p[E] ? p[0] : g[E - 1];
                for (var M = 0; M < C; M++) S = S.concat(r[E]);
                m.push(S)
            }
            for (var I, R, P, U, E = 0; E < o; E++) {
                I = [], R = r[E], P = A[E], U = u / (P * R.length);
                for (var M = 0; M < U; M++) for (var T = 0; T < R.length; T++) for (var k = 0; k < P; k++) I.push(R[T]);
                b.push(I)
            }
            for (var B, E = 0; E < u; E++) {
                B = [];
                for (var M = 0; M < o; M++) B.push(b[M][E]);
                B.length && x.push(B.join("-"))
            }
            for (var D, E = 0; E < b.length; E++) {
                D = [];
                for (var O, M = 0; M < b[E].length; M++) O = {
                    id: b[E][M],
                    uuid: (0, h["default"])(),
                    dim: E,
                    axis: n
                }, E === b.length - 1 && (O.leaf = !0), D.push(O);
                y.push(D)
            }
            for (var _, L, F, E = 0; E < y.length; E++) {
                L = [];
                for (var O, V, M = 0, N = 0; M < y[E].length; M++) O = y[E][M], L.push(O.id), 0 === N && (O[i] = A[E], O.leaf && (O.children = 0), O.oldest = !0, 0 === E && (O.root = !0), V = O), O.oldestSibling = V, ++N === A[E] && (N = 0);
                if (E > 0) {
                    _ = y[E - 1], F = (0, d["default"])(L);
                    for (var M = 0; M < _.length; M++) _[M].children = F.length
                }
            }
            if (o > 1) for (var j, E = 1; E < o; E++) {
                j = y[E];
                for (var M = 0, N = 0, P = A[E - 1]; M < j.length; M++) j[M].parent = y[E - 1][M]
            }
            if (y.length) for (var G, W, O, H = o > 1 ? (0, c["default"])((0, f["default"])(A))[1] : u, z = y[y.length - 1], E = 0, Q = []; E < z.length; E++) {
                for (G = z[E], Q.push(G.uuid), W = [], O = G; O.parent;) O = O.parent, W.push(O.oldestSibling.uuid);
                if (G.uuids = (0, f["default"])(W), Q.length === H) {
                    for (var G, M = E - H + 1; M <= E; M++) G = z[M], G.uuids = G.uuids.concat(Q);
                    Q = []
                }
            }
            for (var E = 0; E < y.length; E++) for (var Y, M = 0; M < y[E].length; M++) Y = y[E][M], v[Y.uuid] = Y;
            return {
                type: n,
                items: l,
                xItems: {unique: r, gui: m, all: b},
                objects: {all: y},
                ids: x,
                span: A,
                dims: o,
                size: u,
                uuidObjectMap: v
            }
        }
    }
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = t.ChartTypeToolbar = void 0;
    t.ChartTypeToolbar = n = function (e) {
        var t = (e.appManager, e.uiManager, e.instanceManager, e.i18nManager.get()), n = e.dimensionConfig,
            i = (n.get("data"), n.get("period"), n.get("organisationUnit"), n.get("category"), e.chartConfig),
            t = e.i18nManager.get(), o = [], a = function (e) {
                o.push(e)
            }, r = Ext.create("Ext.button.Button", {
                xtype: "button",
                chartType: i.client.column,
                iconCls: "ns-button-icon-type-column",
                name: i.client.column,
                tooltipText: t.column_chart,
                pressed: !0,
                listeners: {added: a}
            }), s = Ext.create("Ext.button.Button", {
                xtype: "button",
                chartType: i.client.stackedcolumn,
                iconCls: "ns-button-icon-type-columnstacked",
                name: i.client.stackedcolumn,
                tooltipText: t.stacked_column_chart,
                listeners: {added: a}
            }), l = Ext.create("Ext.button.Button", {
                xtype: "button",
                chartType: i.client.bar,
                iconCls: "ns-button-icon-type-bar",
                name: i.client.bar,
                tooltipText: t.bar_chart,
                listeners: {added: a}
            }), d = Ext.create("Ext.button.Button", {
                xtype: "button",
                chartType: i.client.stackedbar,
                iconCls: "ns-button-icon-type-barstacked",
                name: i.client.stackedbar,
                tooltipText: t.stacked_bar_chart,
                listeners: {added: a}
            }), u = Ext.create("Ext.button.Button", {
                xtype: "button",
                chartType: i.client.line,
                iconCls: "ns-button-icon-type-line",
                name: i.client.line,
                tooltipText: t.line_chart,
                listeners: {added: a}
            }), c = Ext.create("Ext.button.Button", {
                xtype: "button",
                chartType: i.client.area,
                iconCls: "ns-button-icon-type-area",
                name: i.client.area,
                tooltipText: t.area_chart,
                listeners: {added: a}
            }), p = Ext.create("Ext.button.Button", {
                xtype: "button",
                chartType: i.client.pie,
                iconCls: "ns-button-icon-type-pie",
                name: i.client.pie,
                tooltipText: t.pie_chart,
                listeners: {added: a}
            }), f = Ext.create("Ext.button.Button", {
                xtype: "button",
                chartType: i.client.radar,
                iconCls: "ns-button-icon-type-radar",
                name: i.client.radar,
                tooltipText: t.radar_chart,
                listeners: {added: a}
            }), g = Ext.create("Ext.button.Button", {
                xtype: "button",
                chartType: i.client.gauge,
                iconCls: "ns-button-icon-type-gauge",
                name: i.client.gauge,
                tooltipText: t.meter_chart,
                listeners: {added: a}
            }), h = Ext.create("Ext.toolbar.Toolbar", {
                height: 45,
                style: "padding-top:1px; border:0 none; border-top:1px solid #dadada",
                reset: function () {
                    this.setChartType()
                },
                getChartType: function () {
                    for (var e = 0; e < o.length; e++) if (o[e].pressed) return o[e].chartType
                },
                setChartType: function (e) {
                    if (!e) return void o[0].toggle(!0);
                    for (var t = 0; t < o.length; t++) o[t].chartType === e && o[t].toggle(!0)
                },
                defaults: {
                    height: 40, toggleGroup: "charttype", handler: function (e) {
                        e.pressed || e.toggle()
                    }, listeners: {
                        afterrender: function (e) {
                            "button" === e.xtype && Ext.create("Ext.tip.ToolTip", {
                                target: e.getEl(),
                                html: e.tooltipText,
                                anchor: "bottom"
                            })
                        }
                    }
                },
                items: [{
                    xtype: "label",
                    text: t.type,
                    style: "font-size:11px; font-weight:bold; padding:13px 8px 0 6px"
                }, r, s, l, d, u, c, p, f, g]
            });
        return h
    }
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = t.ConfirmWindow = void 0;
    t.ConfirmWindow = n = function (e, t, n, i, o) {
        var a = e.i18nManager.get(), r = i || "OK", s = a.cancel || "Cancel", l = "2px", d = 72, u = 29,
            c = {bodyStyle: "background:#fff; border:0 none"}, p = Ext.create("Ext.button.Button", {
                xtype: "button",
                width: d,
                height: u,
                text: '<span style="color:#fff; font-weight:bold">' + r + "</span>",
                style: "border-color:#3079ed; background:#619dff; border-radius:" + l,
                handler: function () {
                    o && o(), g.destroy()
                }
            }), f = Ext.create("Ext.button.Button", {
                xtype: "button",
                width: d,
                height: u,
                text: '<span style="color:#555; font-weight:bold">' + s + "</span>",
                style: "border-color:#ccc; border-radius:" + l,
                handler: function () {
                    g.destroy()
                }
            }), g = Ext.create("Ext.window.Window", {
                bodyStyle: "background:#fff; padding:30px 60px 26px 42px",
                defaults: c,
                modal: !0,
                preventHeader: !0,
                resizable: !1,
                closeable: !1,
                items: [{
                    html: t,
                    bodyStyle: "padding:0; border:0 none; font-size:16px",
                    style: "margin-bottom:20px"
                }, {
                    html: n,
                    bodyStyle: "padding:0; border:0 none; font-size:13px",
                    style: "margin-bottom:16px"
                }, {layout: "hbox", defaults: c, items: [p, {width: 10}, f]}],
                listeners: {
                    afterrender: function () {
                        this.setPosition(this.getPosition()[0], this.getPosition()[1] / 2)
                    }, show: function () {
                        p.focus(!1, 50)
                    }
                }
            });
        return g
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.EmbedButton = void 0;
    var i = n(88), o = t.EmbedButton = void 0;
    t.EmbedButton = o = function (e) {
        var t = e.i18nManager.get();
        return Ext.create("Ext.button.Button", {
            text: t.embed, disabled: !0, menu: {}, handler: function (t) {
                (0, i.EmbedWindow)(e).show()
            }
        })
    }
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = t.EmbedWindow = void 0;
    t.EmbedWindow = n = function (e) {
        var t = (e.appManager, e.uiManager), n = (e.instanceManager, e.i18nManager.get()),
            i = Ext.create("Ext.form.field.TextArea", {
                width: 700,
                height: 400,
                readOnly: !0,
                cls: "ns-textarea monospaced",
                value: t.getEmbedHtml()
            }), o = Ext.create("Ext.window.Window", {
                title: n.embed_in_web_page,
                layout: "fit",
                modal: !0,
                resizable: !1,
                items: i,
                destroyOnBlur: !0,
                bbar: ["->", {
                    text: n.select, handler: function () {
                        i.selectText()
                    }
                }],
                listeners: {
                    show: function (e) {
                        t.setAnchorPosition(e, "favoriteButton"), t.enableRightClick(), e.hasDestroyOnBlurHandler || t.addDestroyOnBlurHandler(e)
                    }, hide: function () {
                        t.disableRightClick()
                    }
                }
            });
        return t.reg(o, "embedWindow"), o
    }
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = t.IntegrationButton = void 0;
    t.IntegrationButton = n = function (e, t) {
        var n, i = t.isDefaultButton, o = t.objectName, a = t.moduleName, r = t.btnIconCls, s = t.btnText,
            l = t.menuItem1Text, d = t.menuItem2Text, u = t.menuItem3Text, c = e.appManager, p = e.uiManager,
            f = e.instanceManager, g = e.sessionStorageManager, h = (e.i18nManager.get(), c.getPath());
        return n = i ? {
            text: s, iconCls: r, toggleGroup: "module", pressed: !0, handler: function () {
                this.pressed || this.toggle()
            }
        } : {
            text: s, iconCls: r, toggleGroup: "module", menu: {}, handler: function (e) {
                e.menu = Ext.create("Ext.menu.Menu", {
                    closeAction: "destroy",
                    shadow: !1,
                    showSeparator: !1,
                    items: [{
                        text: l + "&nbsp;&nbsp;", cls: "ns-menu-item-noicon", listeners: {
                            render: function (e) {
                                this.getEl().dom.addEventListener("click", function (t) {
                                    e.disabled || p.redirectCtrl(h + "/" + a, t)
                                })
                            }
                        }
                    }, "-", {
                        text: d + "&nbsp;&nbsp;",
                        cls: "ns-menu-item-noicon",
                        disabled: !f.isStateCurrent(),
                        listeners: {
                            render: function (e) {
                                this.getEl().dom.addEventListener("click", function (t) {
                                    if (!e.disabled) {
                                        var n = f.getStateCurrent().toSession();
                                        n.parentGraphMap = p.get("treePanel").getParentGraphMap(), g.set(n, "analytical"), g.supported && p.redirectCtrl(h + "/" + a + "/index.html?s=analytical", t)
                                    }
                                })
                            }
                        }
                    }, {
                        text: u + "&nbsp;&nbsp;",
                        cls: "ns-menu-item-noicon",
                        disabled: !g.get(o),
                        listeners: {
                            render: function (e) {
                                this.getEl().dom.addEventListener("click", function (t) {
                                    e.disabled || p.redirectCtrl(h + "/" + a + "/index.html?s=" + o, t)
                                })
                            }
                        }
                    }],
                    listeners: {
                        show: function () {
                            p.setAnchorPosition(e.menu, e)
                        }, hide: function () {
                            e.menu.destroy(), p.get("defaultIntegrationButton").toggle()
                        }, destroy: function (t) {
                            e.menu = null
                        }
                    }
                }), e.menu.show()
            }
        }, Ext.create("Ext.button.Button", n)
    }
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = t.LinkWindow = void 0;
    t.LinkWindow = n = function (e) {
        var t = e.appManager, n = e.uiManager, i = e.instanceManager, o = e.i18nManager.get(), a = t.getPath(),
            r = t.getApiPath(), s = i.apiEndpoint, l = i.apiModule, d = Ext.create("Ext.window.Window", {
                title: o.favorite_link,
                layout: "fit",
                modal: !0,
                resizable: !1,
                destroyOnBlur: !0,
                bodyStyle: "padding:12px 12px 15px; background-color:#fff; font-size:11px",
                html: function () {
                    var e = i.getStateFavorite(), t = a + "/" + l + "/index.html?id=" + e.id,
                        n = r + "/" + s + "/" + e.id + "/data.html+css",
                        o = "padding-bottom:10px; font-weight:bold; color:#444", d = "";
                    return d += '<div style="' + o + '">Open in this app</div>', d += '<a class="user-select td-nobreak" target="_blank" href="' + t + '">' + t + "</a>", d += "<br/><br/><br/>", d += '<div style="' + o + '">Open in web api</div>', d += '<a class="user-select td-nobreak" target="_blank" href="' + n + '">' + n + "</a>"
                }(),
                listeners: {
                    show: function (e) {
                        n.setAnchorPosition(e, "favoriteButton"), n.enableRightClick(), e.hasDestroyOnBlurHandler || n.addDestroyOnBlurHandler(e)
                    }, hide: function () {
                        n.disableRightClick()
                    }
                }
            });
        return n.reg(d, "linkWindow"), d
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.NorthRegion = void 0;
    var i = n(37), o = n(14), a = t.NorthRegion = void 0;
    t.NorthRegion = a = function (e, t) {
        var n = e.appManager, a = e.instanceManager, r = e.uiManager, s = e.i18nManager, l = s.get(), d = n.getPath();
        t = t || {}, t.appName = n.appName || "", t.i18n = t.i18n || {}, t.i18n.about = t.i18n.about || l.about || "about", t.i18n.home = t.i18n.home || l.home || "home", t.i18n.untitled = t.i18n.untitled || l.untitled || "Untitled", t.theme = t.theme || r.getTheme(), t.systemTitle = t.systemTitle || n.systemSettings.systemTitle || "DHIS 2", t.logoWidth = t.logoWidth ? parseFloat(t.logoWidth) : 418, t.aboutFn = t.aboutFn || function () {
            (0, i.AboutWindow)(e).getData()
        }, t.homeFn = t.homeFn || function () {
            var e = d + "/dhis-web-commons-about/redirect.action";
            a.isStateUnsaved() ? r.confirmUnsaved(l.leave_application, function () {
                r.disableConfirmUnload(), window.location.href = e
            }) : window.location.href = e
        };
        var u = {}, c = function (e, n) {
            e = e || t.logoWidth, n = n || 0, u.logo.setWidth(e + n)
        }, p = function (e, t) {
            u.title.setState(e, t)
        };
        return Ext.create("Ext.toolbar.Toolbar", {
            componentCls: "toolbar-north",
            region: "north",
            cls: t.theme + " " + t.cls,
            cmp: u,
            setLogoWidth: c,
            setState: p,
            items: function () {
                var e = t.i18n.untitled;
                return u.logo = Ext.create("Ext.toolbar.TextItem", {
                    cls: "logo",
                    width: t.logoWidth,
                    html: '<span class="brand">' + t.systemTitle + "</span> " + t.appName
                }), u.title = Ext.create("Ext.toolbar.TextItem", {
                    cls: "title untitled user-select",
                    titleText: "",
                    appendixText: "",
                    text: e,
                    updateTitle: function () {
                        this.update(this.titleText ? this.titleText + this.appendixText : e)
                    },
                    setTitle: function (e) {
                        this.titleText = e || ""
                    },
                    setTitleAppendix: function (e) {
                        this.appendixText = e ? '<span class="appendix">[' + o.DateManager.getYYYYMMDD(e, !0) + "]</span>" : ""
                    },
                    setStateSaved: function () {
                        this.getEl().removeCls("unsaved"), this.getEl().removeCls("untitled")
                    },
                    setStateUnsaved: function () {
                        this.titleText && (this.getEl().removeCls("untitled"), this.getEl().addCls("unsaved"))
                    },
                    setStateNew: function () {
                        this.getEl().removeCls("unsaved"), this.getEl().addCls("untitled")
                    },
                    setState: function (e, t) {
                        e ? t && e.name ? (this.setTitle(e.name), this.setTitleAppendix(e.relativePeriodDate), this.setStateSaved()) : (this.setTitleAppendix(), this.setStateUnsaved()) : (this.setTitle(), this.setTitleAppendix(), this.setStateNew()), this.updateTitle()
                    }
                }), r.reg(u.about = Ext.create("Ext.toolbar.TextItem", {
                    cls: "about",
                    html: t.i18n.about,
                    listeners: {
                        render: function (e) {
                            var n = e.getEl();
                            n.on("mouseover", function () {
                                n.addCls("hover")
                            }), n.on("mouseout", function () {
                                n.removeCls("hover")
                            }), n.on("click", function () {
                                t.aboutFn()
                            }), n.rendered = !0
                        }
                    }
                }), "aboutButton"), r.reg(u.home = Ext.create("Ext.toolbar.TextItem", {
                    cls: "about home",
                    html: t.i18n.home,
                    listeners: {
                        render: function (e) {
                            var n = e.getEl();
                            n.on("mouseover", function () {
                                n.addCls("hover")
                            }), n.on("mouseout", function () {
                                n.removeCls("hover")
                            }), n.on("click", function () {
                                t.homeFn()
                            }), n.rendered = !0
                        }
                    }
                }), "homeButton"), [u.logo, u.title, "->", u.about, u.home, " ", " "]
            }()
        })
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function (e) {
        var t = e.layout, n = e.i18n, i = (0, a["default"])({layout: t, i18n: n}), o = i.nameTextField,
            r = i.descriptionTextField, s = i.titleTextField;
        delete o.height, delete s.height, delete r.height, o.emptyText = n.no_translation_for_name, t.title ? s.emptyText = n.no_translation_for_title : (s.disabled = !0, s.emptyText = n.no_title), t.description ? r.emptyText = n.no_translation_for_description : (r.disabled = !0, r.emptyText = n.no_description);
        var l = function (e) {
            return Ext.create("Ext.panel.Panel", {
                style: "margin-bottom:0",
                bodyStyle: "font-size:11px; color:#666; padding-left:6px; padding-top:3px; border:0 none",
                html: e
            })
        }, d = l(t.name), u = l(t.title), c = l(t.description);
        return {
            nameTextField: o,
            nameLabelKey: d,
            titleTextField: s,
            titleLabelKey: u,
            descriptionTextField: r,
            descriptionLabelKey: c
        }
    };
    var o = n(23), a = i(o)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.TranslateWindow = void 0;
    var o = n(1), a = (i(o), n(92)), r = i(a), s = n(15), l = i(s), d = t.TranslateWindow = void 0;
    t.TranslateWindow = d = function (e, t, n, i) {
        var o = e.appManager, a = e.uiManager, s = e.instanceManager, d = e.i18nManager.get(), u = (e.api, o.getPath()),
            c = s.apiEndpoint;
        i = i || {};
        var p = (0, r["default"])({layout: t, i18n: d}), f = p.nameTextField, g = p.nameLabelKey, h = p.titleTextField,
            A = p.titleLabelKey, m = p.descriptionTextField, b = p.descriptionLabelKey, x = {}, y = {},
            v = function () {
                var e = E.getValue();
                y = {NAME: f, SHORT_NAME: h, DESCRIPTION: m};
                for (var t in y) y[t].setValue("");
                x.forEach(function (t) {
                    t.locale === e && t.property in y && y[t.property].setValue(t.value)
                }), S.show()
            }, w = Ext.create("Ext.data.Store", {
                fields: ["locale", "name"],
                proxy: {
                    type: "ajax",
                    url: encodeURI(u + "/api/locales/db.json?paging=false"),
                    reader: {type: "json"},
                    pageParam: !1,
                    startParam: !1,
                    limitParam: !1
                }
            }), E = Ext.create("Ext.form.ComboBox", {
                cls: "ns-combo",
                width: l["default"].windowCmpWidth,
                height: 45,
                style: "margin:2px 5px 0",
                fieldStyle: "padding-right:0; padding-left:5px; margin-bottom:3px; font-size:11px; line-height:13px;",
                fieldLabel: d.select_a_locale_to_enter_translations_for,
                labelAlign: "top",
                labelStyle: "font-size:11px;font-weight:bold;color:#111;padding-top:4px;margin-bottom:2px",
                labelSeparator: "",
                store: w,
                queryMode: "local",
                displayField: "name",
                valueField: "locale",
                emptyText: d.select_locale,
                listeners: {
                    select: function (e) {
                        v()
                    }
                }
            }), S = Ext.create("Ext.form.Panel", {
                bodyStyle: "border-style:none",
                style: "margin-bottom:0",
                hidden: !0,
                defaults: {bodyStyle: "border-style:none", style: "margin-bottom:15px"},
                items: [{items: [f, g]}, {items: [h, A]}, {items: [m, b]}]
            }), C = Ext.create("Ext.button.Button", {
                text: d.save, handler: function () {
                    for (var e = E.getValue(), n = x.length; n--;) x[n].locale == e && x[n].property in y && x.splice(n, 1);
                    var i = [].concat(x);
                    for (var a in y) "" != y[a].getValue() && i.push({property: a, locale: e, value: y[a].getValue()});
                    $.ajax({
                        url: encodeURI(u + "/api/" + c + "/" + t.id + "/translations/"),
                        type: "PUT",
                        data: JSON.stringify({translations: i}),
                        dataType: "json",
                        headers: o.defaultRequestHeaders,
                        success: function (e, t, n) {
                            I.destroy()
                        }
                    })
                }
            }), M = Ext.create("Ext.button.Button", {
                text: d.cancel, handler: function () {
                    I.destroy()
                }
            }), I = Ext.create("Ext.window.Window", {
                cls: "ns-accordion",
                title: "Translate",
                bodyStyle: "padding:1px; background:#fff",
                resizable: !1,
                modal: !0,
                items: [E, S],
                destroyOnBlur: !0,
                bbar: [M, "->", C],
                listeners: {
                    show: function (e) {
                        w.load(), Ext.Ajax.request({
                            url: encodeURI(u + "/api/" + c + "/" + t.id + "/translations.json?paging=false"),
                            disableCaching: !1,
                            success: function (e) {
                                x = Ext.decode(e.responseText).translations
                            }
                        });
                        var n = a.get("favoriteButton") || {};
                        n.rendered && (a.setAnchorPosition(e, n), e.hasDestroyOnBlurHandler || a.addDestroyOnBlurHandler(e)), E.focus(!1, 500), i.show && i.show()
                    }, destroy: function () {
                        i.destroy && i.destroy()
                    }
                }
            });
        return I
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function o(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.Viewport = void 0;
    var a = n(3), r = i(a), s = n(19), l = i(s), d = n(2), u = i(d), p = n(99), f = i(p), g = n(4), h = i(g), A = n(6),
        m = i(A), b = n(10), x = i(b), y = n(8), v = i(y), w = n(26), E = i(w),
        S = (n(12), n(11), n(22), n(24), n(41), n(42), n(39)), C = n(87), M = (n(38), t.Viewport = void 0);
    t.Viewport = M = function (e, t) {
        var n = e.uiManager, i = e.appManager, a = e.i18nManager, s = e.sessionStorageManager, d = e.instanceManager,
            p = e.calendarManager, g = e.dimensionConfig, A = e.periodConfig, b = e.uiConfig, y = e.optionConfig,
            w = e.api, M = i.getApiPath(), I = a.get(), R = g.get("data").objectName, P = g.get("indicator").objectName,
            U = g.get("dataElement").objectName, T = g.get("operand").objectName, k = g.get("dataSet").objectName,
            B = g.get("eventDataItem").objectName, D = g.get("programIndicator").objectName,
            O = g.get("period").objectName, _ = g.get("organisationUnit").objectName,
            L = (n.get("layoutWindow"), n.get("optionsWindow"), n.get("favoriteWindow"), []),
            F = i.getDisplayProperty(), V = i.getDisplayPropertyUrl(), N = {};
        t = t || {};
        var j = t.northRegion, G = t.eastRegion, W = t.chartTypeToolbar,
            H = n.reg((0, S.FavoriteButton)(e), "favoriteButton"),
            z = n.reg((0, C.EmbedButton)(e), "embedButton", "onCurrent"), Q = t.integrationButtons,
            Y = t.DownloadButtonItems, K = Ext.create("Ext.data.Store", {
                fields: ["id", "name"],
                lastPage: null,
                nextPage: 1,
                isPending: !1,
                reset: function () {
                    this.removeAll(), this.lastPage = null, this.nextPage = 1, this.isPending = !1, fe.hideFilter()
                },
                loadDataAndUpdate: function (e, t) {
                    this.clearFilter(), t || this.removeAll(), this.loadData(e, t), this.updateFilter()
                },
                getRecordsByIds: function (e) {
                    var t = [];
                    e = (0, h["default"])(e);
                    for (var n, i = 0; i < e.length; i++) n = this.findExact("id", e[i]), n !== -1 && t.push(this.getAt(n));
                    return t
                },
                updateFilter: function () {
                    var e = ie.getIds();
                    this.clearFilter(), this.filterBy(function (t) {
                        return !(0, m["default"])(e, t.data.id)
                    })
                },
                loadPage: function (e, t, i, o, a) {
                    var s = this, d = {}, u = M + "/indicators.json?", c = "fields=dimensionItem|rename(id)," + V,
                        p = t ? "&filter=" + F + ":ilike:" + t : "", f = u + c + p;
                    e = (0, r["default"])(e) || (0, l["default"])(e) ? e : he.getValue(), t = t || ge.getValue() || null, i || (this.lastPage = null, this.nextPage = 1), s.nextPage !== s.lastPage && ((0, r["default"])(e) && (f += "&filter=indicatorGroups.id:eq:" + e), o ? d.paging = !1 : (d.page = s.nextPage, d.pageSize = 50), s.isPending = !0, n.mask(Ae.boundList), $.getJSON(encodeURI(f), d, function (e) {
                        var t = e.indicators || [], n = e.pager;
                        s.loadStore(t, n, i, a)
                    }).complete(function () {
                        s.isPending = !1, n.unmask(Ae.boundList)
                    }))
                },
                loadStore: function (e, t, n, i) {
                    t = t || {}, this.loadDataAndUpdate(e, n), this.sortStore(), this.lastPage = this.nextPage, t.pageCount > this.nextPage && this.nextPage++, this.isPending = !1, i && i()
                },
                storage: {},
                parent: null,
                sortStore: function () {
                    this.sort("name", "ASC")
                }
            }), q = Ext.create("Ext.data.Store", {
                fields: ["id", "name", "index"],
                proxy: {
                    type: "ajax",
                    url: encodeURI(M + "/indicatorGroups.json?fields=id,displayName|rename(name)&paging=false"),
                    reader: {type: "json", root: "indicatorGroups"},
                    pageParam: !1,
                    startParam: !1,
                    limitParam: !1
                },
                listeners: {
                    load: function (e) {
                        e.add({id: 0, name: "[ " + I.all_indicators + " ]", index: -1}), e.sort([{
                            property: "index",
                            direction: "ASC"
                        }, {property: "name", direction: "ASC"}])
                    }
                }
            }), J = Ext.create("Ext.data.Store", {
                fields: ["id", "name"],
                lastPage: null, nextPage: 1, isPending: !1, reset: function () {
                    this.removeAll(), this.lastPage = null, this.nextPage = 1, this.isPending = !1, ye.hideFilter()
                }, loadDataAndUpdate: function (e, t) {
                    this.clearFilter(), t || this.removeAll(), this.loadData(e, t), this.updateFilter()
                }, getRecordsByIds: function (e) {
                    var t = [];
                    e = (0, h["default"])(e);
                    for (var n, i = 0; i < e.length; i++) n = this.findExact("id", e[i]), n !== -1 && t.push(this.getAt(n));
                    return t
                }, updateFilter: function () {
                    var e = ie.getIds();
                    this.clearFilter(), e.length && this.filterBy(function (t) {
                        return !(0, m["default"])(e, t.data.id)
                    })
                }, loadPage: function (e, t, n, i, o) {
                    e = (0, r["default"])(e) || (0, l["default"])(e) ? e : Se.getValue(), t = t || ve.getValue() || null, n || (this.lastPage = null, this.nextPage = 1), Ce.getValue() === U ? this.loadTotalsPage(e, t, n, i, o) : Ce.getValue() === T && this.loadDetailsPage(e, t, n, i, o)
                }, loadTotalsPage: function (e, t, i, o, a) {
                    var s = this, l = {}, d = M + "/dataElements.json?", u = "fields=dimensionItem|rename(id)," + V,
                        c = "&filter=domainType:eq:AGGREGATE" + (t ? "&filter=" + F + ":ilike:" + t : ""), p = d + u + c;
                    s.nextPage !== s.lastPage && ((0, r["default"])(e) && (p += "&filter=dataElementGroups.id:eq:" + e), o ? l.paging = !1 : (l.page = s.nextPage, l.pageSize = 50), s.isPending = !0, n.mask(we.boundList), $.getJSON(encodeURI(p), l, function (e) {
                        var t = e.dataElements || [], n = e.pager;
                        s.loadStore(t, n, i, a)
                    }).complete(function () {
                        s.isPending = !1, n.unmask(we.boundList)
                    }))
                }, loadDetailsPage: function (e, t, i, o, a) {
                    var s = this, l = {}, d = M + "/dataElementOperands.json?", u = "fields=dimensionItem|rename(id)," + V,
                        c = t ? "&filter=" + F + ":ilike:" + t : "", p = d + u + c;
                    s.nextPage !== s.lastPage && ((0, r["default"])(e) && (p += "&filter=dataElement.dataElementGroups.id:eq:" + e), o ? l.paging = !1 : (l.page = s.nextPage, l.pageSize = 50), s.isPending = !0, n.mask(we.boundList), $.getJSON(encodeURI(p), l, function (e) {
                        var t = e.objects || e.dataElementOperands || [], n = e.pager;
                        s.loadStore(t, n, i, a)
                    }).complete(function () {
                        s.isPending = !1, n.unmask(we.boundList)
                    }))
                }, loadStore: function (e, t, n, i) {
                    t = t || {}, this.loadDataAndUpdate(e, n), this.sortStore(), this.lastPage = this.nextPage, t.pageCount > this.nextPage && this.nextPage++, this.isPending = !1, i && i()
                }, sortStore: function () {
                    this.sort("name", "ASC")
                }
            }), X = Ext.create("Ext.data.Store", {
                fields: ["id", "name", "index"],
                proxy: {
                    type: "ajax",
                    url: encodeURI(M + "/dataElementGroups.json?fields=id," + V + "&paging=false"),
                    reader: {type: "json", root: "dataElementGroups"},
                    pageParam: !1,
                    startParam: !1,
                    limitParam: !1
                },
                listeners: {
                    load: function (e) {
                        e.add({id: 0, name: "[ " + I.all_data_elements + " ]", index: -1}), e.sort([{
                            property: "index",
                            direction: "ASC"
                        }, {property: "name", direction: "ASC"}])
                    }
                }
            }), Z = Ext.create("Ext.data.Store", {
                fields: ["id", "name"],
                lastPage: null,
                nextPage: 1,
                isPending: !1,
                reset: function () {
                    this.removeAll(), this.lastPage = null, this.nextPage = 1, this.isPending = !1, Re.hideFilter()
                },
                loadDataAndUpdate: function (e, t) {
                    this.clearFilter(), this.loadData(e, t), this.updateFilter()
                },
                getRecordsByIds: function (e) {
                    var t = [];
                    e = (0, h["default"])(e);
                    for (var n, i = 0; i < e.length; i++) n = this.findExact("id", e[i]), n !== -1 && t.push(this.getAt(n));
                    return t
                },
                updateFilter: function () {
                    var e = ie.getIds();
                    this.clearFilter();
                    var t = ke.getValue();
                    this.filterBy(function (n) {
                        return !((0, m["default"])(e, n.data.id) || t && n.data.id.split(".")[1] !== t)
                    })
                },
                loadPage: function (e, t, i, o) {
                    var a = this, r = {}, s = M + "/dataSets.json?", l = "fields=dimensionItem|rename(id)," + V,
                        d = e ? "&filter=" + F + ":ilike:" + e : "", u = s + l + d;
                    e = e || Pe.getValue() || null, t || (this.lastPage = null, this.nextPage = 1), a.nextPage !== a.lastPage && (i ? r.paging = !1 : (r.page = a.nextPage, r.pageSize = 50), a.isPending = !0, n.mask(Ue.boundList), $.getJSON(encodeURI(u), r, function (e) {
                        var n = e.dataSets || [], i = e.pager;
                        a.loadStore(n, i, t, o)
                    }).complete(function () {
                        a.isPending = !1, n.unmask(Ue.boundList)
                    }))
                },
                getProcessedData: function (e) {
                    var t = y.getDataSetMetricRecords(), n = [];
                    return e.forEach(function (e) {
                        t.forEach(function (t) {
                            n.push({id: e.id + "." + t.id, name: e.name + " (" + t.name + ")"})
                        })
                    }), n
                },
                loadStore: function (e, t, n, i) {
                    t = t || {}, e = this.getProcessedData(e), this.loadDataAndUpdate(e, n), this.sortStore(), this.lastPage = this.nextPage, t.pageCount > this.nextPage && this.nextPage++, this.isPending = !1, i && i()
                },
                storage: {},
                parent: null,
                isLoaded: !1,
                sortStore: function () {
                    this.sort("name", "ASC")
                }
            }), ee = Ext.create("Ext.data.Store", {
                fields: ["id", "name"], data: [], sortStore: function () {
                    this.sort("name", "ASC")
                }, loadDataAndUpdate: function (e, t) {
                    this.clearFilter(), t || this.removeAll(), this.loadData(e, t), this.updateFilter()
                }, getRecordsByIds: function (e) {
                    var t = [];
                    e = (0, h["default"])(e);
                    for (var n, i = 0; i < e.length; i++) n = this.findExact("id", e[i]), n !== -1 && t.push(this.getAt(n));
                    return t
                }, updateFilter: function () {
                    var e = ie.getIds();
                    this.clearFilter(), this.filterBy(function (t) {
                        return !(0, m["default"])(e, t.data.id)
                    })
                }
            }), te = Ext.create("Ext.data.Store", {
                fields: ["id", "name"], data: [], sortStore: function () {
                    this.sort("name", "ASC")
                }, loadDataAndUpdate: function (e, t) {
                    this.clearFilter(), t || this.removeAll(), this.loadData(e, t), this.updateFilter()
                }, getRecordsByIds: function (e) {
                    var t = [];
                    e = (0, h["default"])(e);
                    for (var n, i = 0; i < e.length; i++) n = this.findExact("id", e[i]), n !== -1 && t.push(this.getAt(n));
                    return t
                }, updateFilter: function () {
                    var e = ie.getIds();
                    this.clearFilter(), this.filterBy(function (t) {
                        return !(0, m["default"])(e, t.data.id)
                    })
                }
            }), ne = Ext.create("Ext.data.Store", {
                fields: ["id", "name"],
                proxy: {
                    type: "ajax",
                    url: encodeURI(M + "/programs.json?fields=id,displayName|rename(name)&paging=false"),
                    reader: {type: "json", root: "programs"},
                    pageParam: !1,
                    startParam: !1,
                    limitParam: !1
                }
            }), ie = Ext.create("Ext.data.Store", {
                fields: ["id", "name"], data: [], getIds: function () {
                    for (var e = this.getRange(), t = [], n = 0; n < e.length; n++) t.push(e[n].data.id);
                    return t
                }, addRecords: function (e, t) {
                    var n = "objectName", i = [], o = [];
                    if (e = (0, h["default"])(e), e.length) {
                        for (var a, r = 0; r < e.length; r++) a = e[r], a.data ? (t && a.set(n, t), i.push(a)) : (t && (a[n] = t), o.push(a));
                        i.length && this.add(i), o.length && this.loadData(o, !0)
                    }
                }, removeByIds: function (e) {
                    e = (0, h["default"])(e);
                    for (var t, n = 0; n < e.length; n++) t = this.findExact("id", e[n]), t !== -1 && this.removeAt(t)
                }, removeByProperty: function (e, t) {
                    if (e && t) {
                        var n = [];
                        t = (0, h["default"])(t), this.each(function (i) {
                            (0, m["default"])(t, i.data[e]) && n.push(i)
                        }), this.remove(n)
                    }
                }, listeners: {
                    add: function () {
                        Je.updateStoreFilters()
                    }, remove: function () {
                        Je.updateStoreFilters()
                    }, clear: function () {
                        Je.updateStoreFilters()
                    }
                }
            }), oe = Ext.create("Ext.data.Store", {fields: ["id", "name"], data: A.getPeriodTypeRecords()}),
            ae = Ext.create("Ext.data.Store", {
                fields: ["id", "name", "index"], data: [], setIndex: function (e) {
                    for (var t = 0; t < e.length; t++) e[t].index = t
                }, sortStore: function () {
                    this.sort("index", "ASC")
                }
            }), re = Ext.create("Ext.data.Store", {fields: ["id", "name"], data: []}),
            se = Ext.create("Ext.data.Store", {
                fields: ["id", "name", "level"],
                data: i.organisationUnitLevels,
                sorters: [{property: "level", direction: "ASC"}]
            }), le = Ext.create("Ext.data.Store", {
                fields: ["id", "name"],
                proxy: {
                    type: "ajax",
                    url: encodeURI(M + "/organisationUnitGroups.json?fields=id," + V + "&paging=false"),
                    reader: {type: "json", root: "organisationUnitGroups"},
                    pageParam: !1,
                    startParam: !1,
                    limitParam: !1
                }
            }), de = (Ext.create("Ext.data.Store", {
                fields: ["id", "name", "index"], data: function () {
                    var e = i.legendSets;
                    return e.unshift({id: 0, name: I.none, index: -1}), e
                }(), sorters: [{property: "index", direction: "ASC"}, {property: "name", direction: "ASC"}]
            }), function (e) {
                e = e || "in", "in" === e ? (be.show(), Me.hide(), Be.hide(), je.hide(), qe.hide()) : "de" === e ? (be.hide(), Me.show(), Be.hide(), je.hide(), qe.hide()) : "ds" === e ? (be.hide(), Me.hide(), Be.show(), je.hide(), qe.hide(), Z.isLoaded || (Z.isLoaded = !0, Z.loadPage())) : "di" === e ? (be.hide(), Me.hide(), Be.hide(), je.show(), qe.hide(), ne.isLoaded || (ne.isLoaded = !0, ne.load())) : "pi" === e && (be.hide(), Me.hide(), Be.hide(), je.hide(), qe.show(), ne.isLoaded || (ne.isLoaded = !0, ne.load()))
            }), ue = Ext.create("Ext.form.field.ComboBox", {
                cls: "ns-combo",
                style: "margin-bottom:1px",
                width: b.west_fieldset_width - b.west_width_padding,
                valueField: "id",
                displayField: "name",
                editable: !1,
                queryMode: "local",
                value: "in",
                store: {
                    fields: ["id", "name"],
                    data: [{id: "in", name: I.indicators}, {id: "de", name: I.data_elements}, {
                        id: "ds",
                        name: I.data_sets
                    }, {id: "di", name: I.event_data_items}, {id: "pi", name: I.program_indicators}]
                },
                listeners: {
                    select: function (e) {
                        de(e.getValue())
                    }
                }
            }), ce = Ext.create("Ext.ux.form.MultiSelect", {
                cls: "ns-toolbar-multiselect-right",
                width: (b.west_fieldset_width - b.west_width_padding) / 2,
                valueField: "id",
                displayField: "name",
                ddReorder: !0,
                store: ie,
                tbar: [{
                    xtype: "button", text: "test", iconCls: "ns-button-icon-map", width: 22, handler: function () {
                        ie.removeAll(), Je.updateStoreFilters()
                    }
                }, {
                    xtype: "button", icon: "ns-button-icon-arrowleft", width: 22, handler: function () {
                        ie.removeByIds(ce.getValue()), Je.updateStoreFilters()
                    }
                }, "->", {xtype: "label", text: I.selected, cls: "ns-toolbar-multiselect-right-label"}],
                listeners: {
                    afterrender: function () {
                        this.boundList.on("itemdblclick", function () {
                            ie.removeByIds(ce.getValue()), Je.updateStoreFilters()
                        }, this)
                    }
                }
            }), pe = Ext.create("Ext.form.Label", {
                text: I.available,
                cls: "ns-toolbar-multiselect-left-label",
                style: "margin-right:5px"
            }), fe = Ext.create("Ext.button.Button", {
                width: 22,
                height: 22,
                cls: "ns-button-icon",
                iconCls: "ns-button-icon-search",
                disabled: !0,
                showFilter: function () {
                    pe.hide(), this.hide(), ge.show(), ge.reset()
                },
                hideFilter: function () {
                    pe.show(), this.show(), ge.hide(), ge.reset()
                },
                handler: function () {
                    this.showFilter()
                }
            }), ge = Ext.create("Ext.form.field.Trigger", {
                cls: "ns-trigger-filter",
                emptyText: "Filter available..",
                height: 22,
                hidden: !0,
                enableKeyEvents: !0,
                fieldStyle: "height:22px; border-right:0 none",
                style: "height:22px",
                onTriggerClick: function () {
                    this.reset(), this.onKeyUpHandler(), fe.hideFilter()
                },
                onKeyUpHandler: function () {
                    var e = he.getValue(), t = K;
                    ((0, r["default"])(e) || (0, l["default"])(e)) && t.loadPage(null, this.getValue(), !1)
                },
                listeners: {
                    keyup: {
                        fn: function (e) {
                            e.onKeyUpHandler()
                        }, buffer: 100
                    }, show: function (e) {
                        e.focus(!1, 50)
                    }, focus: function (e) {
                        e.addCls("ns-trigger-filter-focused")
                    }, blur: function (e) {
                        e.removeCls("ns-trigger-filter-focused")
                    }
                }
            }), he = Ext.create("Ext.form.field.ComboBox", {
                cls: "ns-combo",
                style: "margin-bottom:1px; margin-top:0px",
                width: b.west_fieldset_width - b.west_width_padding,
                valueField: "id",
                displayField: "name",
                emptyText: I.select_indicator_group,
                editable: !1,
                store: q,
                loadAvailable: function (e) {
                    var t = K, n = this.getValue();
                    null !== n && (e && t.reset(), t.loadPage(n, null, !1))
                },
                listeners: {
                    select: function (e) {
                        e.loadAvailable(!0), fe.enable()
                    }
                }
            }), Ae = Ext.create("Ext.ux.form.MultiSelect", {
                cls: "ns-toolbar-multiselect-left",
                width: (b.west_fieldset_width - b.west_width_padding) / 2,
                valueField: "id",
                displayField: "name",
                store: K,
                tbar: [pe, fe, ge, "->", {
                    xtype: "button",
                    iconCls: "ns-button-icon-arrowright",
                    width: 22,
                    handler: function () {
                        if (Ae.getValue().length) {
                            var e = K.getRecordsByIds(Ae.getValue());
                            ie.addRecords(e, "in")
                        }
                    }
                }, {
                    xtype: "button", iconCls: "ns-button-icon-arrowrightdouble", width: 22, handler: function () {
                        K.loadPage(null, null, null, !0, function () {
                            ie.addRecords(K.getRange(), "in")
                        })
                    }
                }],
                listeners: {
                    render: function (e) {
                        var t = Ext.get(e.boundList.getEl().id + "-listEl").dom;
                        t.addEventListener("scroll", function (e) {
                            n.isScrolled(e) && !K.isPending && K.loadPage(null, null, !0)
                        }), e.boundList.on("itemdblclick", function (e, t) {
                            ie.addRecords(t, "in")
                        }, e)
                    }
                }
            }), me = Ext.create("Ext.ux.form.MultiSelect", {
                cls: "ns-toolbar-multiselect-right",
                width: (b.west_fieldset_width - b.west_width_padding) / 2,
                valueField: "id",
                displayField: "name",
                ddReorder: !0,
                store: ie,
                tbar: [{
                    xtype: "button", iconCls: "ns-button-icon-arrowleftdouble", width: 22, handler: function () {
                        ie.getRange().length && ie.removeAll()
                    }
                }, {
                    xtype: "button", iconCls: "ns-button-icon-arrowleft", width: 22, handler: function () {
                        me.getValue().length && ie.removeByIds(me.getValue())
                    }
                }, "->", {xtype: "label", text: I.selected, cls: "ns-toolbar-multiselect-right-label"}],
                listeners: {
                    afterrender: function () {
                        this.boundList.on("itemdblclick", function (e, t) {
                            ie.removeByIds(t.data.id)
                        }, this)
                    }
                }
            }), be = Ext.create("Ext.panel.Panel", {
                xtype: "panel",
                preventHeader: !0,
                hideCollapseTool: !0,
                dimension: P,
                bodyStyle: "border:0 none",
                items: [he, {xtype: "panel", layout: "column", bodyStyle: "border-style:none", items: [Ae, me]}],
                listeners: {
                    added: function () {
                    }, expand: function (e) {
                    }
                }
            }), xe = Ext.create("Ext.form.Label", {
                text: I.available,
                cls: "ns-toolbar-multiselect-left-label",
                style: "margin-right:5px"
            }), ye = Ext.create("Ext.button.Button", {
                width: 22,
                height: 22,
                cls: "ns-button-icon",
                iconCls: "ns-button-icon-search",
                disabled: !0,
                showFilter: function () {
                    xe.hide(), this.hide(), ve.show(), ve.reset()
                },
                hideFilter: function () {
                    xe.show(), this.show(), ve.hide(), ve.reset()
                },
                handler: function () {
                    this.showFilter()
                }
            }), ve = Ext.create("Ext.form.field.Trigger", {
                cls: "ns-trigger-filter",
                emptyText: "Filter available..",
                height: 22,
                hidden: !0,
                enableKeyEvents: !0,
                fieldStyle: "height:22px; border-right:0 none",
                style: "height:22px",
                onTriggerClick: function () {
                    this.reset(), this.onKeyUpHandler(), ye.hideFilter()
                },
                onKeyUpHandler: function () {
                    var e = Se.getValue(), t = J;
                    ((0, r["default"])(e) || (0, l["default"])(e)) && t.loadPage(null, this.getValue(), !1)
                },
                listeners: {
                    keyup: {
                        fn: function (e) {
                            e.onKeyUpHandler()
                        }, buffer: 100
                    }, show: function (e) {
                        e.focus(!1, 50)
                    }, focus: function (e) {
                        e.addCls("ns-trigger-filter-focused")
                    }, blur: function (e) {
                        e.removeCls("ns-trigger-filter-focused")
                    }
                }
            }), we = Ext.create("Ext.ux.form.MultiSelect", {
                cls: "ns-toolbar-multiselect-left",
                width: (b.west_fieldset_width - b.west_width_padding) / 2,
                valueField: "id",
                displayField: "name",
                isPending: !1,
                page: 1,
                store: J,
                tbar: [xe, ye, ve, "->", {
                    xtype: "button",
                    iconCls: "ns-button-icon-arrowright",
                    width: 22,
                    handler: function () {
                        if (we.getValue().length) {
                            var e = J.getRecordsByIds(we.getValue());
                            ie.addRecords(e, "de")
                        }
                    }
                }, {
                    xtype: "button", iconCls: "ns-button-icon-arrowrightdouble", width: 22, handler: function () {
                        J.loadPage(null, null, null, !0, function () {
                            ie.addRecords(J.getRange(), "de")
                        })
                    }
                }],
                listeners: {
                    render: function (e) {
                        var t = Ext.get(e.boundList.getEl().id + "-listEl").dom;
                        t.addEventListener("scroll", function (e) {
                            n.isScrolled(e) && !J.isPending && J.loadPage(null, null, !0)
                        }), e.boundList.on("itemdblclick", function (e, t) {
                            ie.addRecords(t, "de")
                        }, e)
                    }
                }
            }), Ee = Ext.create("Ext.ux.form.MultiSelect", {
                cls: "ns-toolbar-multiselect-right",
                width: (b.west_fieldset_width - b.west_width_padding) / 2,
                valueField: "id",
                displayField: "name",
                ddReorder: !0,
                store: ie,
                tbar: [{
                    xtype: "button", iconCls: "ns-button-icon-arrowleftdouble", width: 22, handler: function () {
                        ie.getRange().length && ie.removeAll()
                    }
                }, {
                    xtype: "button", iconCls: "ns-button-icon-arrowleft", width: 22, handler: function () {
                        Ee.getValue().length && ie.removeByIds(Ee.getValue())
                    }
                }, "->", {xtype: "label", text: I.selected, cls: "ns-toolbar-multiselect-right-label"}],
                listeners: {
                    afterrender: function () {
                        this.boundList.on("itemdblclick", function (e, t) {
                            ie.removeByIds(t.data.id)
                        }, this)
                    }
                }
            }), Se = Ext.create("Ext.form.field.ComboBox", {
                cls: "ns-combo",
                style: "margin:0 1px 1px 0",
                width: b.west_fieldset_width - b.west_width_padding - 90,
                valueField: "id",
                displayField: "name",
                emptyText: I.select_data_element_group,
                editable: !1,
                store: X,
                loadAvailable: function (e) {
                    var t = J, n = this.getValue();
                    null !== n && (e && t.reset(), t.loadPage(n, null, !1))
                },
                listeners: {
                    select: function (e) {
                        e.loadAvailable(!0), ye.enable()
                    }
                }
            }), Ce = Ext.create("Ext.form.field.ComboBox", {
                cls: "ns-combo",
                style: "margin-bottom:1px",
                baseBodyCls: "small",
                queryMode: "local",
                editable: !1,
                valueField: "id",
                displayField: "text",
                width: 89,
                value: U,
                store: {fields: ["id", "text"], data: [{id: U, text: I.totals}, {id: T, text: I.details}]},
                listeners: {
                    select: function (e) {
                        Se.loadAvailable(!0), ie.removeByProperty("objectName", "de")
                    }
                }
            }), Me = Ext.create("Ext.panel.Panel", {
                xtype: "panel",
                preventHeader: !0,
                hidden: !0,
                hideCollapseTool: !0,
                bodyStyle: "border:0 none",
                dimension: U,
                items: [{xtype: "container", layout: "column", items: [Se, Ce]}, {
                    xtype: "panel",
                    layout: "column",
                    bodyStyle: "border-style:none",
                    items: [we, Ee]
                }],
                listeners: {
                    added: function () {
                    }, expand: function (e) {
                    }
                }
            }), Ie = Ext.create("Ext.form.Label", {
                text: I.available,
                cls: "ns-toolbar-multiselect-left-label",
                style: "margin-right:5px"
            }), Re = Ext.create("Ext.button.Button", {
                width: 22,
                height: 22,
                cls: "ns-button-icon",
                iconCls: "ns-button-icon-search",
                showFilter: function () {
                    Ie.hide(), this.hide(), Pe.show(), Pe.reset()
                },
                hideFilter: function () {
                    Ie.show(), this.show(), Pe.hide(), Pe.reset()
                },
                handler: function () {
                    this.showFilter()
                }
            }), Pe = Ext.create("Ext.form.field.Trigger", {
                cls: "ns-trigger-filter",
                emptyText: "Filter available..",
                height: 22,
                hidden: !0,
                enableKeyEvents: !0,
                fieldStyle: "height:22px; border-right:0 none",
                style: "height:22px",
                onTriggerClick: function () {
                    this.reset(), this.onKeyUpHandler(), Re.hideFilter()
                },
                onKeyUpHandler: function () {
                    var e = Z;
                    e.loadPage(this.getValue(), !1)
                },
                listeners: {
                    keyup: {
                        fn: function (e) {
                            e.onKeyUpHandler()
                        }, buffer: 100
                    }, show: function (e) {
                        e.focus(!1, 50)
                    }, focus: function (e) {
                        e.addCls("ns-trigger-filter-focused")
                    }, blur: function (e) {
                        e.removeCls("ns-trigger-filter-focused")
                    }
                }
            }), Ue = Ext.create("Ext.ux.form.MultiSelect", {
                cls: "ns-toolbar-multiselect-left",
                width: (b.west_fieldset_width - b.west_width_padding) / 2,
                valueField: "id",
                displayField: "name",
                store: Z,
                tbar: [Ie, Re, Pe, "->", {
                    xtype: "button",
                    iconCls: "ns-button-icon-arrowright",
                    width: 22,
                    handler: function () {
                        if (Ue.getValue().length) {
                            var e = Z.getRecordsByIds(Ue.getValue());
                            ie.addRecords(e, "ds")
                        }
                    }
                }, {
                    xtype: "button", iconCls: "ns-button-icon-arrowrightdouble", width: 22, handler: function () {
                        Z.loadPage(null, null, !0, function () {
                            ie.addRecords(Z.getRange(), "ds")
                        })
                    }
                }],
                listeners: {
                    render: function (e) {
                        var t = Ext.get(e.boundList.getEl().id + "-listEl").dom;
                        t.addEventListener("scroll", function (e) {
                            n.isScrolled(e) && !Z.isPending && Z.loadPage(null, !0)
                        }), e.boundList.on("itemdblclick", function (e, t) {
                            ie.addRecords(t, "ds")
                        }, e)
                    }
                }
            }), Te = Ext.create("Ext.ux.form.MultiSelect", {
                cls: "ns-toolbar-multiselect-right",
                width: (b.west_fieldset_width - b.west_width_padding) / 2,
                valueField: "id",
                displayField: "name",
                ddReorder: !0,
                store: ie,
                tbar: [{
                    xtype: "button", iconCls: "ns-button-icon-arrowleftdouble", width: 22, handler: function () {
                        ie.getRange().length && ie.removeAll()
                    }
                }, {
                    xtype: "button", iconCls: "ns-button-icon-arrowleft", width: 22, handler: function () {
                        Te.getValue().length && ie.removeByIds(Te.getValue())
                    }
                }, "->", {xtype: "label", text: I.selected, cls: "ns-toolbar-multiselect-right-label"}],
                listeners: {
                    afterrender: function () {
                        this.boundList.on("itemdblclick", function (e, t) {
                            ie.removeByIds(t.data.id)
                        }, this)
                    }
                }
            }), ke = Ext.create("Ext.form.field.ComboBox", {
                cls: "ns-combo",
                style: "margin-bottom:1px; margin-top:0px",
                width: b.west_fieldset_width - b.west_width_padding,
                valueField: "id",
                displayField: "name",
                emptyText: I.select_indicator_group,
                editable: !1,
                value: y.getDataSetMetric("reportingRates").id,
                store: {
                    fields: ["id", "name"],
                    data: [{id: 0, name: "[ " + I.all_metrics + " ]"}].concat(y.getDataSetMetricRecords())
                },
                listeners: {
                    select: function (e) {
                        Z.updateFilter()
                    }
                }
            }), Be = Ext.create("Ext.panel.Panel", {
                xtype: "panel",
                preventHeader: !0,
                hidden: !0,
                hideCollapseTool: !0,
                bodyStyle: "border:0 none",
                dimension: k,
                items: [ke, {xtype: "panel", layout: "column", bodyStyle: "border-style:none", items: [Ue, Te]}],
                listeners: {
                    added: function () {
                    }, expand: function (e) {
                    }
                }
            }), De = function (e, t) {
                t || (We.setValue(e), Ge(e, !0)), Ext.Ajax.request({
                    url: encodeURI(M + "/programDataElements.json?program=" + e + "&fields=dimensionItem|rename(id),name,valueType&paging=false"),
                    disableCaching: !1,
                    success: function (t) {
                        var n = i.getValueTypesByType("aggregate"),
                            o = Ext.decode(t.responseText).programDataElements.filter(function (e) {
                                return (0, m["default"])(n, (e || {}).valueType)
                            });
                        Ext.Ajax.request({
                            url: encodeURI(M + "/programs.json?filter=id:eq:" + e + "&fields=programTrackedEntityAttributes[dimensionItem|rename(id)," + V + "|rename(name),valueType]&paging=false"),
                            disableCaching: !1,
                            success: function (e) {
                                var t = ((Ext.decode(e.responseText).programs[0] || {}).programTrackedEntityAttributes || []).filter(function (e) {
                                    return (0, m["default"])(n, (e || {}).valueType)
                                }), i = (0, v["default"])((0, x["default"])([].concat(o, t))) || [];
                                ee.loadDataAndUpdate(i)
                            }
                        })
                    }
                })
            }, Oe = Ext.create("Ext.form.field.ComboBox", {
                cls: "ns-combo",
                style: "margin:0 1px 1px 0",
                width: b.west_fieldset_width - b.west_width_padding,
                valueField: "id",
                displayField: "name",
                emptyText: I.select_program,
                editable: !1,
                queryMode: "local",
                store: ne,
                listeners: {
                    select: function (e) {
                        De(e.getValue())
                    }
                }
            }), _e = Ext.create("Ext.form.Label", {
                text: I.available,
                cls: "ns-toolbar-multiselect-left-label",
                style: "margin-right:5px"
            }), Le = Ext.create("Ext.button.Button", {
                width: 22,
                height: 22,
                cls: "ns-button-icon",
                iconCls: "ns-button-icon-search",
                showFilter: function () {
                    _e.hide(), this.hide(), Fe.show(), Fe.reset()
                },
                hideFilter: function () {
                    _e.show(), this.show(), Fe.hide(), Fe.reset()
                },
                handler: function () {
                    this.showFilter()
                }
            }), Fe = Ext.create("Ext.form.field.Trigger", {
                cls: "ns-trigger-filter",
                emptyText: "Filter available..",
                height: 22,
                hidden: !0,
                enableKeyEvents: !0,
                fieldStyle: "height:22px; border-right:0 none",
                style: "height:22px",
                onTriggerClick: function () {
                    this.reset(), this.onKeyUpHandler(), Le.hideFilter()
                },
                onKeyUpHandler: function () {
                    var e, t = this.getValue() || "", n = ee;
                    n.filterBy(function (n) {
                        return e = n.data.name || "", e.toLowerCase().indexOf(t.toLowerCase()) !== -1
                    })
                },
                listeners: {
                    keyup: {
                        fn: function (e) {
                            e.onKeyUpHandler()
                        }, buffer: 100
                    }, show: function (e) {
                        e.focus(!1, 50)
                    }, focus: function (e) {
                        e.addCls("ns-trigger-filter-focused")
                    }, blur: function (e) {
                        e.removeCls("ns-trigger-filter-focused")
                    }
                }
            }), Ve = Ext.create("Ext.ux.form.MultiSelect", {
                cls: "ns-toolbar-multiselect-left",
                width: (b.west_fieldset_width - b.west_width_padding) / 2,
                valueField: "id",
                displayField: "name",
                store: ee,
                tbar: [_e, Le, Fe, "->", {
                    xtype: "button",
                    iconCls: "ns-button-icon-arrowright",
                    width: 22,
                    handler: function () {
                        if (Ve.getValue().length) {
                            var e = ee.getRecordsByIds(Ve.getValue());
                            ie.addRecords(e, "di")
                        }
                    }
                }, {
                    xtype: "button", iconCls: "ns-button-icon-arrowrightdouble", width: 22, handler: function () {
                        ie.addRecords(ee.getRange(), "di")
                    }
                }],
                listeners: {
                    render: function (e) {
                        Ext.get(e.boundList.getEl().id + "-listEl").dom;
                        e.boundList.on("itemdblclick", function (e, t) {
                            ie.addRecords(t, "di")
                        }, e)
                    }
                }
            }), Ne = Ext.create("Ext.ux.form.MultiSelect", {
                cls: "ns-toolbar-multiselect-right",
                width: (b.west_fieldset_width - b.west_width_padding) / 2,
                valueField: "id",
                displayField: "name",
                ddReorder: !0,
                store: ie,
                tbar: [{
                    xtype: "button", iconCls: "ns-button-icon-arrowleftdouble", width: 22, handler: function () {
                        ie.getRange().length && ie.removeAll()
                    }
                }, {
                    xtype: "button", iconCls: "ns-button-icon-arrowleft", width: 22, handler: function () {
                        Ne.getValue().length && ie.removeByIds(Ne.getValue())
                    }
                }, "->", {xtype: "label", text: I.selected, cls: "ns-toolbar-multiselect-right-label"}],
                listeners: {
                    afterrender: function () {
                        this.boundList.on("itemdblclick", function (e, t) {
                            ie.removeByIds(t.data.id)
                        }, this)
                    }
                }
            }), je = Ext.create("Ext.panel.Panel", {
                xtype: "panel",
                preventHeader: !0,
                hidden: !0,
                hideCollapseTool: !0,
                dimension: B,
                bodyStyle: "border:0 none",
                items: [Oe, {xtype: "panel", layout: "column", bodyStyle: "border-style:none", items: [Ve, Ne]}],
                listeners: {
                    added: function () {
                    }, expand: function (e) {
                    }
                }
            }), Ge = function (e, t) {
                t || (Oe.setValue(e), De(e, !0)), Ext.Ajax.request({
                    url: encodeURI(M + "/programs.json?filter=id:eq:" + e + "&fields=programIndicators[dimensionItem|rename(id)," + V + "]&paging=false"),
                    disableCaching: !1,
                    success: function (e) {
                        var t = (Ext.decode(e.responseText).programs[0] || {}).programIndicators || [],
                            n = (0, v["default"])(t);
                        te.loadDataAndUpdate(n)
                    }
                })
            }, We = Ext.create("Ext.form.field.ComboBox", {
                cls: "ns-combo",
                style: "margin:0 1px 1px 0",
                width: b.west_fieldset_width - b.west_width_padding,
                valueField: "id",
                displayField: "name",
                emptyText: I.select_program,
                editable: !1,
                queryMode: "local",
                store: ne,
                listeners: {
                    select: function (e) {
                        Ge(e.getValue())
                    }
                }
            }), He = Ext.create("Ext.form.Label", {
                text: I.available,
                cls: "ns-toolbar-multiselect-left-label",
                style: "margin-right:5px"
            }), ze = Ext.create("Ext.button.Button", {
                width: 22,
                height: 22,
                cls: "ns-button-icon",
                iconCls: "ns-button-icon-search",
                showFilter: function () {
                    He.hide(), this.hide(), Qe.show(), Qe.reset()
                },
                hideFilter: function () {
                    He.show(), this.show(), Qe.hide(), Qe.reset()
                },
                handler: function () {
                    this.showFilter()
                }
            }), Qe = Ext.create("Ext.form.field.Trigger", {
                cls: "ns-trigger-filter",
                emptyText: "Filter available..",
                height: 22,
                hidden: !0,
                enableKeyEvents: !0,
                fieldStyle: "height:22px; border-right:0 none",
                style: "height:22px",
                onTriggerClick: function () {
                    this.reset(), this.onKeyUpHandler(), ze.hideFilter()
                },
                onKeyUpHandler: function () {
                    var e, t = this.getValue() || "", n = te;
                    n.filterBy(function (n) {
                        return e = n.data.name || "", e.toLowerCase().indexOf(t.toLowerCase()) !== -1
                    })
                },
                listeners: {
                    keyup: {
                        fn: function (e) {
                            e.onKeyUpHandler()
                        }, buffer: 100
                    }, show: function (e) {
                        e.focus(!1, 50)
                    }, focus: function (e) {
                        e.addCls("ns-trigger-filter-focused")
                    }, blur: function (e) {
                        e.removeCls("ns-trigger-filter-focused")
                    }
                }
            }), Ye = Ext.create("Ext.ux.form.MultiSelect", {
                cls: "ns-toolbar-multiselect-left",
                width: (b.west_fieldset_width - b.west_width_padding) / 2,
                valueField: "id",
                displayField: "name",
                store: te,
                tbar: [He, ze, Qe, "->", {
                    xtype: "button",
                    iconCls: "ns-button-icon-arrowright",
                    width: 22,
                    handler: function () {
                        if (Ye.getValue().length) {
                            var e = te.getRecordsByIds(Ye.getValue());
                            ie.addRecords(e, "pi")
                        }
                    }
                }, {
                    xtype: "button", iconCls: "ns-button-icon-arrowrightdouble", width: 22, handler: function () {
                        ie.addRecords(te.getRange(), "pi")
                    }
                }],
                listeners: {
                    render: function (e) {
                        Ext.get(e.boundList.getEl().id + "-listEl").dom;
                        e.boundList.on("itemdblclick", function (e, t) {
                            ie.addRecords(t, "pi")
                        }, e)
                    }
                }
            }), Ke = Ext.create("Ext.ux.form.MultiSelect", {
                cls: "ns-toolbar-multiselect-right",
                width: (b.west_fieldset_width - b.west_width_padding) / 2,
                valueField: "id",
                displayField: "name",
                ddReorder: !0,
                store: ie,
                tbar: [{
                    xtype: "button", iconCls: "ns-button-icon-arrowleftdouble", width: 22, handler: function () {
                        ie.getRange().length && ie.removeAll()
                    }
                }, {
                    xtype: "button", iconCls: "ns-button-icon-arrowleft", width: 22, handler: function () {
                        Ke.getValue().length && ie.removeByIds(Ke.getValue())
                    }
                }, "->", {xtype: "label", text: I.selected, cls: "ns-toolbar-multiselect-right-label"}],
                listeners: {
                    afterrender: function () {
                        this.boundList.on("itemdblclick", function (e, t) {
                            ie.removeByIds(t.data.id)
                        }, this)
                    }
                }
            }), qe = Ext.create("Ext.panel.Panel", {
                xtype: "panel",
                preventHeader: !0,
                hidden: !0,
                hideCollapseTool: !0,
                dimension: D,
                bodyStyle: "border:0 none",
                items: [We, {xtype: "panel", layout: "column", bodyStyle: "border-style:none", items: [Ye, Ke]}],
                listeners: {
                    added: function () {
                    }, expand: function (e) {
                    }
                }
            }), Je = {
                xtype: "panel",
                title: '<div class="ns-panel-title-data">' + I.data + "</div>",
                hideCollapseTool: !0,
                dimension: R,
                updateStoreFilters: function () {
                    K.updateFilter(), J.updateFilter(), Z.updateFilter(), ee.updateFilter(), te.updateFilter()
                },
                getDimension: function () {
                    var e = {dimension: R, items: []};
                    return ie.each(function (t) {
                        e.items.push({id: t.data.id, name: t.data.name})
                    }), (Oe.getValue() || We.getValue()) && (e.program = {id: Oe.getValue() || We.getValue()}), e.items.length ? e : null
                },
                clearDimension: function () {
                    ie.removeAll(), K.removeAll(), he.clearValue(), J.removeAll(), Se.clearValue(), Ce.reset(), Z.removeAll(), ee.removeAll(), te.removeAll()
                },
                setDimension: function (e) {
                    (0, u["default"])(e.program) && (0, r["default"])(e.program.id) && (Oe.setValue(e.program.id), De(e.program.id)), e.hasDimension(this.dimension, !0) && ie.addRecords(e.getDimension(this.dimension).getRecords())
                },
                onExpand: function () {
                    var e = xt.hasScrollbar ? b.west_scrollbarheight_accordion_indicator : b.west_maxheight_accordion_indicator;
                    bt.setThisHeight(e), n.msSetHeight([Ae, me], this, b.west_fill_accordion_indicator), n.msSetHeight([we, Ee], this, b.west_fill_accordion_dataelement), n.msSetHeight([Ue, Te], this, b.west_fill_accordion_dataset), n.msSetHeight([Ve, Ne], this, b.west_fill_accordion_eventdataitem), n.msSetHeight([Ye, Ke], this, b.west_fill_accordion_programindicator)
                },
                items: [ue, be, Me, Be, je, qe],
                listeners: {
                    added: function () {
                        L.push(this)
                    }, expand: function (e) {
                        e.onExpand()
                    }
                }
            }, Xe = (Ext.create("Ext.form.field.Checkbox", {
                relativePeriodId: "rewind",
                boxLabel: I.rewind_one_period,
                xable: function () {
                    this.setDisabled(it.isNoRelativePeriods())
                }
            }), {
                labelSeparator: "", style: "margin-bottom:0", listeners: {
                    added: function (e) {
                        "checkbox" === e.xtype && (it.checkboxes[e.index] = e, Ze.valueComponentMap[e.relativePeriodId] = e, e.relativePeriodId === i.getRelativePeriod() && e.setValue(!0))
                    }
                }
            }), Ze = {
                xtype: "panel",
                layout: "column",
                hideCollapseTool: !0,
                autoScroll: !0,
                bodyStyle: "border:0 none",
                valueComponentMap: {},
                items: [{
                    xtype: "container",
                    columnWidth: .34,
                    bodyStyle: "border-style:none",
                    items: [{
                        xtype: "panel",
                        bodyStyle: "border-style:none; padding:0 0 0 8px",
                        defaults: Xe,
                        items: [{xtype: "label", text: I.weeks, cls: "ns-label-period-heading"}, {
                            xtype: "checkbox",
                            relativePeriodId: "THIS_WEEK",
                            boxLabel: I.this_week,
                            index: 0
                        }, {
                            xtype: "checkbox",
                            relativePeriodId: "LAST_WEEK",
                            boxLabel: I.last_week,
                            index: 1
                        }, {
                            xtype: "checkbox",
                            relativePeriodId: "LAST_4_WEEKS",
                            boxLabel: I.last_4_weeks,
                            index: 2
                        }, {
                            xtype: "checkbox",
                            relativePeriodId: "LAST_12_WEEKS",
                            boxLabel: I.last_12_weeks,
                            index: 3
                        }, {xtype: "checkbox", relativePeriodId: "LAST_52_WEEKS", boxLabel: I.last_52_weeks, index: 4}]
                    }, {
                        xtype: "panel",
                        bodyStyle: "border-style:none; padding:5px 0 0 8px",
                        defaults: Xe,
                        items: [{xtype: "label", text: I.quarters, cls: "ns-label-period-heading"}, {
                            xtype: "checkbox",
                            relativePeriodId: "THIS_QUARTER",
                            boxLabel: I.this_quarter,
                            index: 13
                        }, {
                            xtype: "checkbox",
                            relativePeriodId: "LAST_QUARTER",
                            boxLabel: I.last_quarter,
                            index: 14
                        }, {xtype: "checkbox", relativePeriodId: "LAST_4_QUARTERS", boxLabel: I.last_4_quarters, index: 15}]
                    }, {
                        xtype: "panel",
                        bodyStyle: "border-style:none; padding:5px 0 0 8px",
                        defaults: Xe,
                        items: [{xtype: "label", text: I.years, cls: "ns-label-period-heading"}, {
                            xtype: "checkbox",
                            relativePeriodId: "THIS_YEAR",
                            boxLabel: I.this_year,
                            index: 22
                        }, {
                            xtype: "checkbox",
                            relativePeriodId: "LAST_YEAR",
                            boxLabel: I.last_year,
                            index: 23
                        }, {xtype: "checkbox", relativePeriodId: "LAST_5_YEARS", boxLabel: I.last_5_years, index: 24}]
                    }]
                }, {
                    xtype: "container",
                    columnWidth: .33,
                    bodyStyle: "border-style:none",
                    items: [{
                        xtype: "panel",
                        bodyStyle: "border-style:none",
                        defaults: Xe,
                        items: [{xtype: "label", text: I.months, cls: "ns-label-period-heading"}, {
                            xtype: "checkbox",
                            relativePeriodId: "THIS_MONTH",
                            boxLabel: I.this_month,
                            index: 5
                        }, {
                            xtype: "checkbox",
                            relativePeriodId: "LAST_MONTH",
                            boxLabel: I.last_month,
                            index: 6
                        }, {
                            xtype: "checkbox",
                            relativePeriodId: "LAST_3_MONTHS",
                            boxLabel: I.last_3_months,
                            index: 7
                        }, {
                            xtype: "checkbox",
                            relativePeriodId: "LAST_6_MONTHS",
                            boxLabel: I.last_6_months,
                            index: 8
                        }, {xtype: "checkbox", relativePeriodId: "LAST_12_MONTHS", boxLabel: I.last_12_months, index: 9}]
                    }, {
                        xtype: "panel",
                        bodyStyle: "border-style:none; padding:5px 0 0",
                        defaults: Xe,
                        items: [{xtype: "label", text: I.sixmonths, cls: "ns-label-period-heading"}, {
                            xtype: "checkbox",
                            relativePeriodId: "THIS_SIX_MONTH",
                            boxLabel: I.this_sixmonth,
                            index: 16
                        }, {
                            xtype: "checkbox",
                            relativePeriodId: "LAST_SIX_MONTH",
                            boxLabel: I.last_sixmonth,
                            index: 17
                        }, {
                            xtype: "checkbox",
                            relativePeriodId: "LAST_2_SIXMONTHS",
                            boxLabel: I.last_2_sixmonths,
                            index: 18
                        }]
                    }]
                }, {
                    xtype: "container",
                    columnWidth: .33,
                    bodyStyle: "border-style:none",
                    items: [{
                        xtype: "panel",
                        bodyStyle: "border-style:none",
                        style: "margin-bottom: 32px",
                        defaults: Xe,
                        items: [{xtype: "label", text: I.bimonths, cls: "ns-label-period-heading"}, {
                            xtype: "checkbox",
                            relativePeriodId: "THIS_BIMONTH",
                            boxLabel: I.this_bimonth,
                            index: 10
                        }, {
                            xtype: "checkbox",
                            relativePeriodId: "LAST_BIMONTH",
                            boxLabel: I.last_bimonth,
                            index: 11
                        }, {xtype: "checkbox", relativePeriodId: "LAST_6_BIMONTHS", boxLabel: I.last_6_bimonths, index: 12}]
                    }, {
                        xtype: "panel",
                        bodyStyle: "border-style:none; padding:5px 0 0",
                        defaults: Xe,
                        items: [{
                            xtype: "label",
                            text: I.financial_years,
                            cls: "ns-label-period-heading"
                        }, {
                            xtype: "checkbox",
                            relativePeriodId: "THIS_FINANCIAL_YEAR",
                            boxLabel: I.this_financial_year,
                            index: 19
                        }, {
                            xtype: "checkbox",
                            relativePeriodId: "LAST_FINANCIAL_YEAR",
                            boxLabel: I.last_financial_year,
                            index: 20
                        }, {
                            xtype: "checkbox",
                            relativePeriodId: "LAST_5_FINANCIAL_YEARS",
                            boxLabel: I.last_5_financial_years,
                            index: 21
                        }]
                    }]
                }]
            }, $e = Ext.create("Ext.ux.form.MultiSelect", {
                cls: "ns-toolbar-multiselect-left",
                width: (b.west_fieldset_width - b.west_width_padding) / 2,
                height: 180,
                valueField: "id",
                displayField: "name",
                store: ae,
                tbar: [{
                    xtype: "label",
                    text: I.available,
                    cls: "ns-toolbar-multiselect-left-label"
                }, "->", {
                    xtype: "button", iconCls: "ns-button-icon-arrowright", width: 22, handler: function () {
                        n.msSelect($e, et)
                    }
                }, {
                    xtype: "button", iconCls: "ns-button-icon-arrowrightdouble", width: 22, handler: function () {
                        n.msSelectAll($e, et, !0)
                    }
                }],
                listeners: {
                    afterrender: function () {
                        this.boundList.on("itemdblclick", function () {
                            n.msSelect($e, et)
                        }, this)
                    }
                }
            }), et = Ext.create("Ext.ux.form.MultiSelect", {
                cls: "ns-toolbar-multiselect-right",
                width: (b.west_fieldset_width - b.west_width_padding) / 2,
                height: 180,
                valueField: "id",
                displayField: "name",
                ddReorder: !0,
                store: re,
                tbar: [{
                    xtype: "button", iconCls: "ns-button-icon-arrowleftdouble", width: 22, handler: function () {
                        n.msUnselectAll($e, et)
                    }
                }, {
                    xtype: "button", iconCls: "ns-button-icon-arrowleft", width: 22, handler: function () {
                        n.msUnselect($e, et)
                    }
                }, "->", {xtype: "label", text: I.selected, cls: "ns-toolbar-multiselect-right-label"}],
                listeners: {
                    afterrender: function () {
                        this.boundList.on("itemdblclick", function () {
                            n.msUnselect($e, et)
                        }, this)
                    }
                }
            }), tt = function () {
                for (var e = nt.getValue(), t = nt.periodOffset, i = p.periodGenerator, o = i.generateReversedPeriods(e, "Yearly" === e ? t - 5 : t), a = 0; a < o.length; a++) o[a].id = o[a].iso;
                ae.setIndex(o), ae.loadData(o),
                    n.msFilterAvailable($e, et)
            }, nt = Ext.create("Ext.form.field.ComboBox", {
                cls: "ns-combo",
                style: "margin-bottom:1px",
                width: b.west_fieldset_width - b.west_width_padding - 62 - 62 - 2,
                valueField: "id",
                displayField: "name",
                emptyText: I.select_period_type,
                editable: !1,
                queryMode: "remote",
                store: oe,
                periodOffset: 0,
                listeners: {
                    select: function () {
                        nt.periodOffset = 0, tt()
                    }
                }
            }), it = {
                xtype: "panel",
                title: '<div class="ns-panel-title-period">Periods</div>',
                hideCollapseTool: !0,
                dimension: O,
                checkboxes: [],
                clearDimension: function (e) {
                    re.removeAll(), it.resetRelativePeriods(), e || Ze.valueComponentMap[i.getRelativePeriod()].setValue(!0)
                },
                setDimension: function (e) {
                    if (e.hasDimension(this.dimension, !0)) {
                        var t, i = e.getDimension(this.dimension).extendRecords(e.getResponse()), o = [];
                        i.forEach(function (e) {
                            t = Ze.valueComponentMap[e.id], t ? t.setValue(!0) : o.push(e)
                        }), re.add(o), n.msFilterAvailable({store: ae}, {store: re})
                    }
                },
                getDimension: function () {
                    var e = {dimension: O, items: []};
                    re.each(function (t) {
                        e.items.push({id: t.data.id, name: t.data.name})
                    });
                    for (var t, n = 0; n < this.checkboxes.length; n++) t = this.checkboxes[n], t && t.getValue() && e.items.push({
                        id: t.relativePeriodId,
                        name: ""
                    });
                    return e.items.length ? e : null
                },
                onExpand: function () {
                    var e = xt.hasScrollbar ? b.west_scrollbarheight_accordion_period : b.west_maxheight_accordion_period;
                    bt.setThisHeight(e), n.msSetHeight([$e, et], this, b.west_fill_accordion_period)
                },
                resetRelativePeriods: function () {
                    for (var e = this.checkboxes, t = 0; t < e.length; t++) e[t].setValue(!1)
                },
                isNoRelativePeriods: function () {
                    for (var e = this.checkboxes, t = 0; t < e.length; t++) if (e[t].getValue()) return !1;
                    return !0
                },
                items: [{
                    xtype: "panel",
                    layout: "column",
                    bodyStyle: "border-style:none",
                    style: "margin-top:0px",
                    items: [nt, {
                        xtype: "button",
                        text: I.prev_year,
                        style: "margin-left:1px; border-radius:2px",
                        height: 24,
                        width: 62,
                        handler: function () {
                            nt.getValue() && (nt.periodOffset--, tt())
                        }
                    }, {
                        xtype: "button",
                        text: I.next_year,
                        style: "margin-left:1px; border-radius:2px",
                        height: 24,
                        width: 62,
                        handler: function () {
                            nt.getValue() && (nt.periodOffset++, tt())
                        }
                    }]
                }, {
                    xtype: "panel",
                    layout: "column",
                    bodyStyle: "border-style:none; padding-bottom:2px",
                    items: [$e, et]
                }, Ze],
                listeners: {
                    added: function () {
                        L.push(this)
                    }, expand: function (e) {
                        e.onExpand()
                    }
                }
            }, ot = Ext.create("Ext.tree.Panel", {
                cls: "ns-tree",
                style: "border-top: 1px solid #ddd; padding-top: 1px",
                width: b.west_fieldset_width - b.west_width_padding,
                displayField: "name",
                rootVisible: !1,
                autoScroll: !0,
                multiSelect: !0,
                rendered: !1,
                reset: function () {
                    var e = this.getRootNode().findChild("id", i.rootNodes[0].id);
                    this.collapseAll(), this.expandPath(e.getPath()), this.getSelectionModel().select(e)
                },
                selectRootIf: function () {
                    if (this.getSelectionModel().getSelection().length < 1) {
                        var e = this.getRootNode().findChild("id", i.rootNodes[0].id);
                        return this.rendered && this.getSelectionModel().select(e), e
                    }
                },
                isPending: !1,
                recordsToSelect: [],
                recordsToRestore: [],
                multipleSelectIf: function (e, t) {
                    this.recordsToSelect = (0, x["default"])(this.recordsToSelect), this.recordsToSelect.length === Object.keys(e).length && (this.getSelectionModel().select(this.recordsToSelect), this.recordsToSelect = [], this.isPending = !1, t && update())
                },
                multipleExpand: function (e, t, n) {
                    var o = this, a = i.rootNodeId, r = t[e];
                    r.substr(0, a.length + 1) !== "/" + a && (r = "/" + a + r), o.expandPath(r, "id", "/", function () {
                        var i = o.getRootNode().findChild("id", e, !0);
                        o.recordsToSelect.push(i), o.multipleSelectIf(t, n)
                    })
                },
                select: function (e, t) {
                    t || (t = {}), Ext.Ajax.request({
                        url: encodeURI(e),
                        method: "GET",
                        params: t,
                        scope: this,
                        success: function (e) {
                            var t = Ext.decode(e.responseText).organisationUnits;
                            this.numberOfRecords = t.length;
                            for (var n = 0; n < t.length; n++) this.multipleExpand(t[n].id, t[n].path)
                        }
                    })
                },
                getParentGraphMap: function () {
                    var e = this.getSelectionModel().getSelection(), t = {};
                    if (Ext.isArray(e) && e.length) for (var n, i = 0; i < e.length; i++) n = e[i].getPath().split("/"), t[n.pop()] = n.join("/");
                    return t
                },
                selectGraphMap: function (e, t) {
                    if (Object.keys(e).length) {
                        this.isPending = !0;
                        for (var n in e) e.hasOwnProperty(n) && ot.multipleExpand(n, e, t)
                    }
                },
                store: Ext.create("Ext.data.TreeStore", {
                    fields: ["id", "name", "hasChildren"],
                    proxy: {
                        type: "rest",
                        format: "json",
                        noCache: !1,
                        extraParams: {fields: "children[id," + V + ",children::isNotEmpty|rename(hasChildren)&paging=false"},
                        url: M + "/organisationUnits",
                        reader: {type: "json", root: "children"},
                        sortParam: !1
                    },
                    sorters: [{property: "name", direction: "ASC"}],
                    root: {id: i.rootNodeId, expanded: !0, children: i.getRootNodes()},
                    listeners: {
                        beforeload: function (e, t) {
                            e.proxy._url || (e.proxy._url = e.proxy.url), e.proxy.url = e.proxy._url + "/" + t.node.data.id
                        }, load: function (e, t, n) {
                            Ext.Array.each(n, function (e) {
                                Ext.isBoolean(e.data.hasChildren) && e.set("leaf", !e.data.hasChildren)
                            })
                        }
                    }
                }),
                xable: function (e) {
                    for (var t = 0; t < e.length; t++) if (e[t]) return void this.disable();
                    this.enable()
                },
                listeners: {
                    beforeitemexpand: function () {
                        ot.isPending || (ot.recordsToRestore = ot.getSelectionModel().getSelection())
                    }, itemexpand: function () {
                        !ot.isPending && ot.recordsToRestore.length && (ot.getSelectionModel().select(ot.recordsToRestore), ot.recordsToRestore = [])
                    }, render: function () {
                        this.rendered = !0
                    }, afterrender: function () {
                        this.getSelectionModel().select(0)
                    }, itemcontextmenu: function (e, t, n, i, o) {
                        e.getSelectionModel().select(t, !1), e.menu && e.menu.destroy(), e.menu = Ext.create("Ext.menu.Menu", {
                            id: "treepanel-contextmenu",
                            showSeparator: !1,
                            shadow: !1
                        }), t.data.leaf || (e.menu.add({
                            id: "treepanel-contextmenu-item",
                            text: I.select_sub_units,
                            iconCls: "ns-button-icon-nodeselectchild",
                            handler: function () {
                                t.expand(!1, function () {
                                    e.getSelectionModel().select(t.childNodes, !0), e.getSelectionModel().deselect(t)
                                })
                            }
                        }), e.menu.showAt(o.xy))
                    }
                }
            });
        n.reg(ot, "treePanel");
        var at = Ext.create("Ext.form.field.Checkbox", {
            columnWidth: .25,
            style: "padding-top: 3px; padding-left: 5px; margin-bottom: 0",
            boxLabel: I.user_organisation_unit,
            labelWidth: b.form_label_width,
            handler: function (e, t) {
                ot.xable([t, rt.getValue(), st.getValue()])
            }
        }), rt = Ext.create("Ext.form.field.Checkbox", {
            columnWidth: .26,
            style: "padding-top: 3px; margin-bottom: 0",
            boxLabel: I.user_sub_units,
            labelWidth: b.form_label_width,
            handler: function (e, t) {
                ot.xable([t, at.getValue(), st.getValue()])
            }
        }), st = Ext.create("Ext.form.field.Checkbox", {
            columnWidth: .4,
            style: "padding-top: 3px; margin-bottom: 0",
            boxLabel: I.user_sub_x2_units,
            labelWidth: b.form_label_width,
            handler: function (e, t) {
                ot.xable([t, at.getValue(), rt.getValue()])
            }
        }), lt = Ext.create("Ext.form.field.ComboBox", {
            cls: "ns-combo",
            multiSelect: !0,
            style: "margin-bottom:0",
            width: b.west_fieldset_width - b.west_width_padding - 37,
            valueField: "level",
            displayField: "name",
            emptyText: I.select_organisation_unit_levels,
            editable: !1,
            hidden: !0,
            store: se
        }), dt = Ext.create("Ext.form.field.ComboBox", {
            cls: "ns-combo",
            multiSelect: !0,
            style: "margin-bottom:0",
            width: b.west_fieldset_width - b.west_width_padding - 37,
            valueField: "id",
            displayField: "name",
            emptyText: I.select_organisation_unit_groups,
            editable: !1,
            hidden: !0,
            store: le
        }), ut = Ext.create("Ext.menu.Menu", {
            shadow: !1,
            showSeparator: !1,
            menuValue: "orgunit",
            clickHandler: function (e) {
                if (e) {
                    var t = this.items.items;
                    this.menuValue = e;
                    for (var n = 0; n < t.length; n++) t[n].setIconCls && (t[n].param === e ? t[n].setIconCls("ns-menu-item-selected") : t[n].setIconCls("ns-menu-item-unselected"));
                    "orgunit" === e ? (at.show(), rt.show(), st.show(), lt.hide(), dt.hide(), (at.getValue() || rt.getValue()) && ot.disable()) : "level" === e ? (at.hide(), rt.hide(), st.hide(), lt.show(), dt.hide(), ot.enable()) : "group" === e && (at.hide(), rt.hide(), st.hide(), lt.hide(), dt.show(), ot.enable())
                }
            },
            items: [{
                xtype: "label",
                text: "Selection mode",
                style: "padding:7px 5px 5px 7px; font-weight:bold; border:0 none"
            }, {
                text: I.select_organisation_units + "&nbsp;&nbsp;",
                param: "orgunit",
                iconCls: "ns-menu-item-selected"
            }, {
                text: "Select levels&nbsp;&nbsp;",
                param: "level",
                iconCls: "ns-menu-item-unselected"
            }, {text: "Select groups&nbsp;&nbsp;", param: "group", iconCls: "ns-menu-item-unselected"}],
            listeners: {
                afterrender: function () {
                    this.getEl().addCls("ns-btn-menu")
                }, click: function (e, t) {
                    this.clickHandler(t.param)
                }
            }
        }), ct = Ext.create("Ext.button.Button", {
            cls: "ns-button-organisationunitselection",
            iconCls: "ns-button-icon-gear",
            width: 36,
            height: 24,
            menu: ut
        }), pt = Ext.create("Ext.panel.Panel", {
            width: 36,
            bodyStyle: "border:0 none; text-align:right",
            style: "margin-right:1px",
            items: ct
        }), ft = {
            xtype: "panel",
            title: '<div class="ns-panel-title-organisationunit">' + I.organisation_units + "</div>",
            bodyStyle: "padding:1px",
            hideCollapseTool: !0,
            dimension: _,
            collapsed: !1,
            clearDimension: function (e) {
                e && (ot.reset(), at.setValue(!1), rt.setValue(!1), st.setValue(!1))
            },
            setDimension: function (e) {
                if (e.hasDimension(this.dimension, !0)) {
                    var t, n, i, o = e.getDimension(this.dimension, !0), a = e.parentGraphMap, r = o.getRecords(),
                        s = [], l = [], d = [];
                    r.forEach(function (e) {
                        "USER_ORGUNIT" === e.id ? t = !0 : "USER_ORGUNIT_CHILDREN" === e.id ? n = !0 : "USER_ORGUNIT_GRANDCHILDREN" === e.id ? i = !0 : "LEVEL" === e.id.substr(0, 5) ? l.push(parseInt(e.id.split("-")[1])) : "OU_GROUP" === e.id ? d.push(e.id.split("-")[1]) : s.push(e.id)
                    }), l.length ? (ut.clickHandler("level"), lt.setValue(l)) : d.length ? (ut.clickHandler("group"), dt.setValue(d)) : (ut.clickHandler("orgunit"), at.setValue(t), rt.setValue(n), st.setValue(i)), t || n || i || (0, u["default"])(a) && ot.selectGraphMap(a)
                } else this.clearDimension(!0)
            },
            getDimension: function () {
                var e = ot.getSelectionModel().getSelection(), t = {dimension: _, items: []};
                if ("orgunit" === ut.menuValue) if (at.getValue() || rt.getValue() || st.getValue()) at.getValue() && t.items.push({
                    id: "USER_ORGUNIT",
                    name: ""
                }), rt.getValue() && t.items.push({
                    id: "USER_ORGUNIT_CHILDREN",
                    name: ""
                }), st.getValue() && t.items.push({
                    id: "USER_ORGUNIT_GRANDCHILDREN",
                    name: ""
                }); else for (var n = 0; n < e.length; n++) t.items.push({id: e[n].data.id}); else if ("level" === ut.menuValue) {
                    for (var i = lt.getValue(), n = 0; n < i.length; n++) t.items.push({id: "LEVEL-" + i[n], name: ""});
                    for (var n = 0; n < e.length; n++) t.items.push({id: e[n].data.id, name: ""})
                } else if ("group" === ut.menuValue) {
                    for (var o = dt.getValue(), n = 0; n < o.length; n++) t.items.push({
                        id: "OU_GROUP-" + o[n],
                        name: ""
                    });
                    for (var n = 0; n < e.length; n++) t.items.push({id: e[n].data.id, name: ""})
                }
                return t.items.length ? t : null
            },
            onExpand: function () {
                var e = xt.hasScrollbar ? b.west_scrollbarheight_accordion_organisationunit : b.west_maxheight_accordion_organisationunit;
                bt.setThisHeight(e), ot.setHeight(this.getHeight() - b.west_fill_accordion_organisationunit)
            },
            items: [{
                layout: "column",
                bodyStyle: "border:0 none",
                style: "padding-bottom:1px",
                items: [pt, {
                    width: b.west_fieldset_width - b.west_width_padding - 37,
                    layout: "column",
                    bodyStyle: "border:0 none",
                    items: [at, rt, st, lt, dt]
                }]
            }, ot],
            listeners: {
                added: function () {
                    L.push(this)
                }, expand: function (e) {
                    e.onExpand()
                }
            }
        }, gt = function (e, t) {
            var i, o, a, s, d, u, c, p, f, g, h;
            return i = function () {
                var t = n.get("layoutWindow");
                a.getRange().length || c.getValue() ? t.addDimension({
                    id: e.id,
                    name: e.name
                }) : t.hasDimension(e.id) && t.removeDimension(e.id)
            }, o = Ext.create("Ext.data.Store", {
                fields: ["id", "name"],
                lastPage: null,
                nextPage: 1,
                isPending: !1,
                isLoaded: !1,
                reset: function () {
                    this.removeAll(), this.lastPage = null, this.nextPage = 1, this.isPending = !1, d.hideFilter()
                },
                storage: {},
                addToStorage: function (e, t, n) {
                    t = "cache_" + ((0, r["default"])(t) || (0, l["default"])(t) ? t : ""), e && (this.storage.hasOwnProperty(e) || (this.storage[e] = {}), this.storage[e][t] || (this.storage[e][t] = n))
                },
                getFromStorage: function (e, t) {
                    if (t = "cache_" + ((0, r["default"])(t) || (0, l["default"])(t) ? t : ""), this.storage.hasOwnProperty(e) && this.storage[e].hasOwnProperty(t)) return this.storage[e][t]
                },
                loadPage: function (t, i, o, a) {
                    var r, s, l = this, d = {};
                    if (t = t || u.getValue() || null, s = l.getFromStorage(e.id, t), !i && s) l.loadStore(s, {}, i, a); else {
                        if (i || (this.lastPage = null, this.nextPage = 1), l.nextPage === l.lastPage) return;
                        r = "/dimensions/" + e.id + "/items.json?fields=id," + V + (t ? "&filter=" + F + ":ilike:" + t : ""), o ? d.paging = !1 : (d.page = l.nextPage, d.pageSize = 50), l.isPending = !0, n.mask(p.boundList), Ext.Ajax.request({
                            url: encodeURI(M + r),
                            method: "GET",
                            params: d,
                            success: function (n) {
                                var o = Ext.decode(n.responseText), r = o.items || [], s = o.pager;
                                l.addToStorage(e.id, t, r), l.loadStore(r, s, i, a)
                            },
                            callback: function () {
                                l.isPending = !1, n.unmask(p.boundList)
                            }
                        })
                    }
                },
                loadStore: function (e, t, i, r) {
                    t = t || {}, this.loadData(e, i), this.lastPage = this.nextPage, t.pageCount > this.nextPage && this.nextPage++, this.isPending = !1, n.msFilterAvailable({store: o}, {store: a}), r && r()
                },
                sortStore: function () {
                    this.sort("name", "ASC")
                }
            }), a = Ext.create("Ext.data.Store", {
                fields: ["id", "name"], data: [], listeners: {
                    add: function () {
                        i()
                    }, remove: function () {
                        i()
                    }, clear: function () {
                        i()
                    }
                }
            }), s = Ext.create("Ext.form.Label", {
                text: I.available,
                cls: "ns-toolbar-multiselect-left-label",
                style: "margin-right:5px"
            }), d = Ext.create("Ext.button.Button", {
                width: 22,
                height: 22,
                cls: "ns-button-icon",
                iconCls: "ns-button-icon-search",
                showFilter: function () {
                    s.hide(), this.hide(), u.show(), u.reset()
                },
                hideFilter: function () {
                    s.show(), this.show(), u.hide(), u.reset()
                },
                handler: function () {
                    this.showFilter()
                }
            }), u = Ext.create("Ext.form.field.Trigger", {
                cls: "ns-trigger-filter",
                emptyText: "Filter available..",
                height: 22,
                hidden: !0,
                enableKeyEvents: !0,
                fieldStyle: "height:22px; border-right:0 none",
                style: "height:22px",
                onTriggerClick: function () {
                    this.reset(), this.onKeyUpHandler(), d.hideFilter()
                },
                onKeyUpHandler: function () {
                    var e = this.getValue(), t = o;
                    ((0, r["default"])(e) || (0, l["default"])(e)) && t.loadPage(e, !1, !0)
                },
                listeners: {
                    keyup: {
                        fn: function (e) {
                            e.onKeyUpHandler()
                        }, buffer: 100
                    }, show: function (e) {
                        e.focus(!1, 50)
                    }, focus: function (e) {
                        e.addCls("ns-trigger-filter-focused")
                    }, blur: function (e) {
                        e.removeCls("ns-trigger-filter-focused")
                    }
                }
            }), c = Ext.create("Ext.form.field.Checkbox", {
                cls: "ns-checkbox",
                style: "margin-left: 2px; margin-right: 5px",
                boxLabel: "All",
                listeners: {
                    change: function (e, t) {
                        g(t)
                    }
                }
            }), p = Ext.create("Ext.ux.form.MultiSelect", {
                cls: "ns-toolbar-multiselect-left",
                width: (b.west_fieldset_width - b.west_width_padding) / 2,
                valueField: "id",
                displayField: "name",
                store: o,
                tbar: [s, d, u, "->", {
                    xtype: "button",
                    iconCls: "ns-button-icon-arrowright",
                    width: 22,
                    handler: function () {
                        n.msSelect(p, f)
                    }
                }, {
                    xtype: "button", iconCls: "ns-button-icon-arrowrightdouble", width: 22, handler: function () {
                        o.loadPage(null, null, !0, function () {
                            n.msSelectAll(p, f)
                        })
                    }
                }],
                listeners: {
                    render: function (e) {
                        var t = Ext.get(e.boundList.getEl().id + "-listEl").dom;
                        t.addEventListener("scroll", function (e) {
                            n.isScrolled(e) && !o.isPending && o.loadPage(null, !0)
                        }), e.boundList.on("itemdblclick", function () {
                            n.msSelect(p, f)
                        }, e)
                    }
                }
            }), f = Ext.create("Ext.ux.form.MultiSelect", {
                cls: "ns-toolbar-multiselect-right",
                width: (b.west_fieldset_width - b.west_width_padding) / 2,
                valueField: "id",
                displayField: "name",
                ddReorder: !0,
                store: a,
                tbar: [{
                    xtype: "button", iconCls: "ns-button-icon-arrowleftdouble", width: 22, handler: function () {
                        n.msUnselectAll(p, f)
                    }
                }, {
                    xtype: "button", iconCls: "ns-button-icon-arrowleft", width: 22, handler: function () {
                        n.msUnselect(p, f)
                    }
                }, "->", {xtype: "label", text: I.selected, cls: "ns-toolbar-multiselect-right-label"}, c],
                listeners: {
                    afterrender: function () {
                        this.boundList.on("itemdblclick", function () {
                            n.msUnselect(p, f)
                        }, this)
                    }
                }
            }), g = function (e) {
                p.boundList && f.boundList && (e ? (p.boundList.disable(), f.boundList.disable()) : (p.boundList.enable(), f.boundList.enable())), i()
            }, h = {
                xtype: "panel",
                title: '<div class="' + t + '">' + e.name + "</div>",
                hideCollapseTool: !0,
                dimension: e.id,
                availableStore: o,
                selectedStore: a,
                selectedAll: c,
                clearDimension: function () {
                    o.reset(), a.removeAll(), c.setValue(!1)
                },
                setDimension: function (e) {
                    if (e.hasDimension(this.dimension, !0)) {
                        var t = e.getDimension(this.dimension).getRecords();
                        t.length ? (a.add(t), n.msFilterAvailable({store: o}, {store: a})) : c.setValue(!0)
                    }
                },
                getDimension: function () {
                    var t = {};
                    return e.id && (t.dimension = e.id), a.getRange().length && (t.items = [], a.each(function (e) {
                        t.items.push({id: e.data.id})
                    })), t.dimension ? t : null
                },
                onExpand: function () {
                    o.isLoaded || o.loadPage(), c.getValue() && (p.boundList.disable(), f.boundList.disable());
                    var e = xt.hasScrollbar ? b.west_scrollbarheight_accordion_group : b.west_maxheight_accordion_group;
                    bt.setThisHeight(e), n.msSetHeight([p, f], this, b.west_fill_accordion_group)
                },
                items: [{xtype: "panel", layout: "column", bodyStyle: "border-style:none", items: [p, f]}],
                listeners: {
                    added: function () {
                        L.push(this)
                    }, expand: function (e) {
                        e.onExpand()
                    }
                }
            }
        }, ht = function (e, t) {
            for (var n = [], i = 0; i < e.length; i++) n.push(gt(e[i], t));
            return n
        }, At = [], mt = Ext.create("Ext.panel.Panel", {
            layout: "accordion",
            activeOnTop: !0,
            cls: "ns-accordion",
            bodyStyle: "border:0 none; margin-bottom:2px",
            height: 700,
            dimensionPanels: null,
            items: function () {
                for (var e, t = [Je, it, ft], n = (0, E["default"])(i.dimensions), o = ht(n, "ns-panel-title-dimension"), a = 0; a < o.length; a++) e = o[a], N[e.dimension] = e;
                return t = t.concat(o), t[t.length - 1].cls = "ns-accordion-last", At = t, t
            }()
        });
        n.reg(mt, "accordionBody");
        var bt = Ext.create("Ext.panel.Panel", {
            bodyStyle: "border-style:none; border-top:1px solid #d6d6d6; padding:1px; padding-bottom:0; overflow-y:scroll;",
            items: mt,
            panels: L,
            setThisHeight: function (e) {
                var t, n = 28 * this.panels.length;
                xt.hasScrollbar ? (t = n + e, this.setHeight(xt.getHeight() - 2), mt.setHeight(t - 2)) : (t = xt.getHeight() - b.west_fill, e += n, bt.setHeight((t > e ? e : t) - 2), mt.setHeight((t > e ? e : t) - 4))
            },
            getExpandedPanel: function () {
                for (var e = 0; e < this.panels.length; e++) if (!this.panels[e].collapsed) return this.panels[e];
                return null
            },
            getFirstPanel: function () {
                return this.panels[0]
            }
        });
        n.reg(bt, "accordion");
        var xt = Ext.create("Ext.panel.Panel", {
            region: "west",
            preventHeader: !0,
            collapsible: !0,
            collapseMode: "mini",
            border: !1,
            width: b.west_width + n.getScrollbarSize().width,
            items: (0, x["default"])([W, bt]),
            setState: function (e) {
                Mt(e)
            }
        });
        n.reg(xt, "westRegion");
        var yt = Ext.create("Ext.button.Split", {
            text: "<b>" + I.update + "</b>&nbsp;", handler: function () {
                d.getReport()
            }, arrowHandler: function (e) {
                e.menu = Ext.create("Ext.menu.Menu", {
                    closeAction: "destroy",
                    shadow: !1,
                    showSeparator: !1,
                    items: [{
                        xtype: "label",
                        text: I.download_data,
                        style: "padding:7px 40px 5px 7px; font-weight:bold; color:#111; border:0 none"
                    }, {
                        text: "CSV", iconCls: "ns-menu-item-datasource", handler: function () {
                            openDataDump("csv")
                        }
                    }],
                    listeners: {
                        show: function () {
                            n.setAnchorPosition(e.menu, e)
                        }, hide: function () {
                            e.menu.destroy()
                        }, destroy: function (t) {
                            e.menu = null
                        }
                    }
                }), this.menu.show()
            }
        });
        n.reg(yt, "updateButton");
        var vt = Ext.create("Ext.button.Button", {
            text: "Layout", menu: {}, handler: function () {
                var e = "layoutWindow";
                (n.get(e) || n.reg(LayoutWindow(c), e)).show()
            }
        });
        n.reg(vt, "layoutButton");
        var wt = Ext.create("Ext.button.Button", {
            text: I.options, menu: {}, handler: function () {
                var e = "optionsWindow";
                (n.get(e) || n.reg(OptionsWindow(c), e)).show()
            }
        });
        n.reg(wt, "optionsButton");
        var Et = Ext.create("Ext.button.Button", {
            text: I.download, disabled: !0, menu: {}, handler: function (t) {
                t.menu = Ext.create("Ext.menu.Menu", {
                    closeAction: "destroy",
                    shadow: !1,
                    showSeparator: !1,
                    items: function () {
                        var t = d.getStateCurrent(), i = t.req(), a = t.req(null, "xml"), r = t.req(null, "xls"),
                            s = t.req(null, "csv"), l = t.req(null, "jrxml"), u = t.req("/analytics/debug/sql", "sql"),
                            c = t.req("/analytics/dataValueSet", "json", null, null, !0),
                            p = t.req("/analytics/dataValueSet", "xml", null, null, !0), f = [].concat(o(Y(e, t)), [{
                                xtype: "label",
                                text: I.plain_data_sources,
                                style: "padding:7px 5px 5px 7px; font-weight:bold"
                            }, {
                                text: "JSON",
                                iconCls: "ns-menu-item-datasource",
                                handler: function () {
                                    n.openPlainDataSource(i, null, !0)
                                },
                                menu: [{
                                    xtype: "label",
                                    text: I.metadata_id_scheme,
                                    style: "padding:7px 18px 5px 7px; font-weight:bold; color:#333"
                                }, {
                                    text: "ID", iconCls: "ns-menu-item-scheme", handler: function () {
                                        n.openPlainDataSource(i, "&outputIdScheme=UID", !0)
                                    }
                                }, {
                                    text: "Code", iconCls: "ns-menu-item-scheme", handler: function () {
                                        n.openPlainDataSource(i, "&outputIdScheme=CODE", !0)
                                    }
                                }, {
                                    text: "Name", iconCls: "ns-menu-item-scheme", handler: function () {
                                        n.openPlainDataSource(i, "&outputIdScheme=NAME", !0)
                                    }
                                }]
                            }, {
                                text: "XML",
                                iconCls: "ns-menu-item-datasource",
                                handler: function () {
                                    n.openPlainDataSource(a, null, !0)
                                },
                                menu: [{
                                    xtype: "label",
                                    text: I.metadata_id_scheme,
                                    style: "padding:7px 18px 5px 7px; font-weight:bold; color:#333"
                                }, {
                                    text: "ID", iconCls: "ns-menu-item-scheme", handler: function () {
                                        n.openPlainDataSource(a, "&outputIdScheme=UID", !0)
                                    }
                                }, {
                                    text: "Code", iconCls: "ns-menu-item-scheme", handler: function () {
                                        n.openPlainDataSource(a, "&outputIdScheme=CODE", !0)
                                    }
                                }, {
                                    text: "Name", iconCls: "ns-menu-item-scheme", handler: function () {
                                        n.openPlainDataSource(a, "&outputIdScheme=NAME", !0)
                                    }
                                }]
                            }, {
                                text: "Microsoft Excel",
                                iconCls: "ns-menu-item-datasource",
                                handler: function () {
                                    n.openPlainDataSource(r)
                                },
                                menu: [{
                                    xtype: "label",
                                    text: I.metadata_id_scheme,
                                    style: "padding:7px 18px 5px 7px; font-weight:bold; color:#333"
                                }, {
                                    text: "ID", iconCls: "ns-menu-item-scheme", handler: function () {
                                        n.openPlainDataSource(r, "&outputIdScheme=UID")
                                    }
                                }, {
                                    text: "Code", iconCls: "ns-menu-item-scheme", handler: function () {
                                        n.openPlainDataSource(r, "&outputIdScheme=CODE")
                                    }
                                }, {
                                    text: "Name", iconCls: "ns-menu-item-scheme", handler: function () {
                                        n.openPlainDataSource(r, "&outputIdScheme=NAME")
                                    }
                                }]
                            }, {
                                text: "CSV",
                                iconCls: "ns-menu-item-datasource",
                                handler: function () {
                                    n.openPlainDataSource(s)
                                },
                                menu: [{
                                    xtype: "label",
                                    text: I.metadata_id_scheme,
                                    style: "padding:7px 18px 5px 7px; font-weight:bold; color:#333"
                                }, {
                                    text: "ID", iconCls: "ns-menu-item-scheme", handler: function () {
                                        n.openPlainDataSource(s, "&outputIdScheme=UID")
                                    }
                                }, {
                                    text: "Code", iconCls: "ns-menu-item-scheme", handler: function () {
                                        n.openPlainDataSource(s, "&outputIdScheme=CODE")
                                    }
                                }, {
                                    text: "Name", iconCls: "ns-menu-item-scheme", handler: function () {
                                        n.openPlainDataSource(s, "&outputIdScheme=NAME")
                                    }
                                }]
                            }, {
                                text: I.advanced,
                                iconCls: "ns-menu-item-advanced",
                                menu: [{
                                    text: I.data_value_set + " JSON",
                                    iconCls: "ns-menu-item-datasource",
                                    handler: function () {
                                        n.openPlainDataSource(c, null, !0)
                                    }
                                }, {
                                    text: I.data_value_set + " XML",
                                    iconCls: "ns-menu-item-datasource",
                                    handler: function () {
                                        n.openPlainDataSource(p, null, !0)
                                    }
                                }, {
                                    text: "JRXML", iconCls: "ns-menu-item-datasource", handler: function () {
                                        n.openPlainDataSource(l, null, !0)
                                    }
                                }, {
                                    text: I.raw_data + " SQL", iconCls: "ns-menu-item-datasource", handler: function () {
                                        n.openPlainDataSource(u, null, !0)
                                    }
                                }]
                            }]);
                        return t && t.showHierarchy && t.hasDimension("ou") && (f.push({
                            xtype: "label",
                            text: I.plain_data_sources + " w/ hierarchy",
                            style: "padding:7px 8px 5px 7px; font-weight:bold"
                        }), f.push({
                            text: "CSV", iconCls: "ns-menu-item-datasource", handler: function () {
                                t.getResponse().clone().addOuHierarchyDimensions().printResponseCSV()
                            }
                        })), f
                    }(),
                    listeners: {
                        show: function () {
                            n.setAnchorPosition(t.menu, t)
                        }, hide: function () {
                            t.menu.destroy()
                        }, destroy: function (e) {
                            t.menu = null
                        }
                    }
                }), this.menu.show()
            }
        });
        n.reg(Et, "downloadButton", "onCurrent");
        var St = Ext.create("Ext.button.Button", {
            text: I.table,
            iconCls: "ns-button-icon-table",
            toggleGroup: "module",
            pressed: !0
        }), Ct = Ext.create("Ext.panel.Panel", {
            region: "center",
            bodyStyle: "padding:1px",
            autoScroll: !0,
            fullSize: !0,
            cmp: [St],
            toggleCmp: function (e) {
                Q.forEach(function (t) {
                    t && t.show && t.hide && (e ? t.show() : t.hide())
                })
            },
            tbar: {
                defaults: {height: 26},
                items: [{
                    text: " ",
                    width: 26,
                    padding: "3",
                    iconCls: "ns-button-icon-arrowlefttriple",
                    iconClsLeft: "ns-button-icon-arrowlefttriple",
                    iconClsRight: "ns-button-icon-arrowrighttriple",
                    iconState: 0,
                    setIconState: function () {
                        this.setIconCls(this.iconState++ % 2 ? this.iconClsLeft : this.iconClsRight)
                    },
                    handler: function (e) {
                        xt.toggleCollapse(), this.setIconState()
                    }
                }, " ", yt, H, {
                    xtype: "tbseparator",
                    height: 24,
                    style: "border-color:transparent; border-right-color:#d1d1d1; margin-right:4px"
                }, vt, wt, {
                    xtype: "tbseparator",
                    height: 24,
                    style: "border-color:transparent; border-right-color:#d1d1d1; margin-right:4px"
                }, Et, z, "->"].concat(o(Q), [{
                    text: " ",
                    width: 26,
                    padding: "3",
                    iconCls: "ns-button-icon-arrowlefttriple",
                    iconClsLeft: "ns-button-icon-arrowlefttriple",
                    iconClsRight: "ns-button-icon-arrowrighttriple",
                    iconState: 1,
                    setIconState: function () {
                        this.setIconCls(this.iconState++ % 2 ? this.iconClsRight : this.iconClsLeft)
                    },
                    handler: function (e) {
                        G.toggleCollapse(), this.setIconState()
                    }
                }])
            },
            listeners: {
                afterrender: function (e) {
                    e.update(n.getIntroHtml())
                }
            }
        });
        n.reg(Ct, "centerRegion");
        var Mt = function (e) {
            var t = n.get("layoutWindow"), i = n.get("optionsWindow");
            if (W && W.reset(), At.forEach(function (t) {
                    t.clearDimension(!!e)
                }), e) {
                var o = (e.parentGraphMap, g.get("category"));
                W && W.setChartType(e.type), At.forEach(function (t) {
                    t.setDimension(e)
                }), t && (t.reset(!0), t.setDimensions(e)), t.hasDimension(o.dimensionName) || t.addDimension({
                    id: o.dimensionName,
                    name: o.name
                }, t.dimensionStore), i && i.setOptions(e)
            } else ot.reset(), t.reset(), i.reset()
        }, It = function () {
            var e = n.get("layoutWindow"), t = n.get("optionsWindow"), i = e.colStore.getDimensionNames(),
                o = e.rowStore.getDimensionNames(), a = e.filterStore.getDimensionNames(), r = t.getOptions(),
                s = g.get("data").dimensionName, l = g.get("category").dimensionName, d = {};
            W && (r.type = W.getChartType()), r.columns = [], r.rows = [], r.filters = [];
            for (var u, c, p = 0; p < L.length; p++) u = L[p].getDimension(), u && (d[u.dimension] = [u]);
            for (var f, p = 0, h = [i, o, a], A = [r.columns, r.rows, r.filters]; p < h.length; p++) {
                f = h[p];
                for (var c, u, m = 0; m < f.length; m++) if (c = f[m], c === l) A[p].push({
                    dimension: l,
                    items: []
                }); else if (c === s && d.hasOwnProperty(c) && d[c]) for (var b = 0; b < d[s].length; b++) A[p].push(Ext.clone(d[s][b])), d[s][b].program && (r.program = d[s][b].program); else if (d.hasOwnProperty(c) && d[c]) for (var b = 0; b < d[c].length; b++) A[p].push(Ext.clone(d[c][b]))
            }
            return r.parentGraphMap = ot.getParentGraphMap(), r
        }, Rt = Ext.create("Ext.container.Viewport", {
            layout: "border",
            period: it,
            treePanel: ot,
            getUiState: It,
            setUiState: Mt,
            westRegion: xt,
            eastRegion: G,
            centerRegion: Ct,
            northRegion: j,
            items: (0, x["default"])([G, xt, Ct, j]),
            listeners: {
                afterrender: function () {
                    xt.on("resize", function () {
                        var e = bt.getExpandedPanel();
                        e && e.onExpand()
                    }), n.getUpdateComponent().on("resize", function (e, t, i, o) {
                        n.resize({cmp: e, width: t, height: i, eOpts: o})
                    }), n.onResize(function (e, t) {
                        t < 700 && e.fullSize ? (e.toggleCmp(), e.fullSize = !1) : t >= 700 && !e.fullSize && (e.toggleCmp(!0), e.fullSize = !0)
                    });
                    var t = n.getHeight(), o = i.dimensions.length + 3, a = 28, l = 380;
                    t > o * a + l ? f["default"] || (bt.setAutoScroll(!1), xt.setWidth(b.west_width), bt.doLayout()) : xt.hasScrollbar = !0, j && j.setLogoWidth(Ct.getPosition()[0]), bt.getFirstPanel().expand();
                    var u, c = i.getUrlParam("id"), p = i.getUrlParam("s"), g = i.getUrlParam("interpretationId");
                    c ? g ? d.getById(c, function (e) {
                        d.getInterpretationById(g, function (t) {
                            n.updateInterpretation(t, e)
                        })
                    }) : d.getById(c) : (0, r["default"])(p) && s.get(p) && (u = new w.Layout(e, s.get(p)).val(), u && d.getReport(u, !1, !1, !0));
                    var h = document.getElementById("init");
                    h.parentNode.removeChild(h), Ext.getBody().setStyle("background", "#fff"), Ext.getBody().setStyle("opacity", 0), Ext.defer(function () {
                        Ext.getBody().fadeIn({duration: 600})
                    }, 300)
                }
            }
        });
        return function () {
            K.on("load", function () {
                n.msFilterAvailable(Ae, me)
            }), J.on("load", function () {
                n.msFilterAvailable(we, Ee)
            }), Z.on("load", function (e) {
                n.msFilterAvailable(Ue, Te), e.sort("name", "ASC")
            })
        }(), Rt
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function o(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.Plugin = void 0;
    var a = n(1), r = i(a), s = t.Plugin = void 0;
    t.Plugin = s = function (e) {
        var t = e.refs, n = e.VERSION, i = e.renderFn, a = (e.initializeFn, this);
        a.url = null, a.username = null, a.password = null, a.loadingIndicator = !1;
        var s = [], l = !1, d = !1;
        a.add = function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            t = (0, r["default"])(t[0]) ? t[0] : t, t.length && (s = [].concat(o(s), o(t)))
        }, a.load = function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            a.add((0, r["default"])(t[0]) ? t[0] : t), p()
        };
        var u = function () {
            d = !0, l = !1
        }, c = function () {
            l = !0
        }, p = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e || f;
            if (d) for (; s.length;) i(a, s.shift()); else l || (c(), e())
        }, f = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p, o = t.appManager,
                r = t.requestManager, s = t.init, l = t.api.Request;
            o.manifestVersion = n, o.path = a.url, o.setAuth(a.username && a.password ? a.username + ":" + a.password : null), $.getJSON(o.getPath() + "/api/me/user-account.json").done(function (n) {
                o.userAccount = n, r.add(new l(s.legendSetsInit(t))), r.add(new l(s.dimensionsInit(t))), e(), r.set(i), r.run()
            })
        }
    }
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = t.SimpleRegression = void 0;
    t.SimpleRegression = n = function () {
        var e = 0, t = 0, n = 0, i = 0, o = 0, a = 0, r = 0;
        this.addData = function (s, l) {
            if (0 == o) a = s, r = l; else {
                var d = s - a, u = l - r;
                n += d * d * o / (o + 1), i += d * u * o / (o + 1), a += d / (o + 1), r += u / (o + 1)
            }
            e += s, t += l, o++
        }, this.predict = function (e) {
            var t = this.getSlope();
            return this.getIntercept(t) + t * e
        }, this.getSlope = function () {
            return o < 2 ? Number.NaN : i / n
        }, this.getIntercept = function (n) {
            return (t - n * e) / o
        }
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function o(e, t, n) {
        return (0, r["default"])(e, t, 0, n)
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = o;
    var a = n(98), r = i(a)
}, function (e, t) {
    "use strict";

    function n(e, t, n, i) {
        return i && i.length ? t < e.length ? e.splice.apply(e, [t, n].concat(i)) : e.push.apply(e, i) : e.splice(t, n), e
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = n
}, function (e, t) {
    "use strict";

    function n() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? window.navigator.userAgent : arguments[0],
            t = e.indexOf("MSIE ");
        if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
        var n = e.indexOf("Trident/");
        if (n > 0) {
            var i = e.indexOf("rv:");
            return parseInt(e.substring(i + 3, e.indexOf(".", i)), 10)
        }
        var o = e.indexOf("Edge/");
        return o > 0 && parseInt(e.substring(o + 5, e.indexOf(".", o)), 10)
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = n
}, function (e, t) {
    "use strict";

    function n(e, t, n) {
        return e = parseFloat(e), isNaN(t) || (e = Math.max(e, t)), isNaN(n) || (e = Math.min(e, n)), e
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = n
}, 54, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = function () {
        function e(e, t) {
            return t = t || 0, e.toFixed(t)
        }

        return e
    }();
    t["default"] = n
}, function (e, t) {
    function n(e) {
        return e === !0 || e === !1 || i(e) && r.call(e) == o
    }

    function i(e) {
        return !!e && "object" == typeof e
    }

    var o = "[object Boolean]", a = Object.prototype, r = a.toString;
    e.exports = n
}, function (e, t) {
    function n(e) {
        var t = i(e) ? s.call(e) : "";
        return t == o || t == a
    }

    function i(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t)
    }

    var o = "[object Function]", a = "[object GeneratorFunction]", r = Object.prototype, s = r.toString;
    e.exports = n
}, function (e, t, n) {
    (function (e, n) {
        function i(e) {
            return function (t) {
                return e(t)
            }
        }

        function o(e, t) {
            return null == e ? void 0 : e[t]
        }

        function a(e) {
            var t = !1;
            if (null != e && "function" != typeof e.toString) try {
                t = !!(e + "")
            } catch (n) {
            }
            return t
        }

        function r(e) {
            return N.call(e)
        }

        function s(e) {
            return g(e) && Z(e) == m
        }

        function l(e) {
            if (!f(e) || u(e)) return !1;
            var t = p(e) || a(e) ? j : S;
            return t.test(c(e))
        }

        function d(e, t) {
            var n = o(e, t);
            return l(n) ? n : void 0
        }

        function u(e) {
            return !!L && L in e
        }

        function c(e) {
            if (null != e) {
                try {
                    return F.call(e)
                } catch (t) {
                }
                try {
                    return e + ""
                } catch (t) {
                }
            }
            return ""
        }

        function p(e) {
            var t = f(e) ? N.call(e) : "";
            return t == h || t == A
        }

        function f(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t)
        }

        function g(e) {
            return !!e && "object" == typeof e
        }

        var h = "[object Function]", A = "[object GeneratorFunction]", m = "[object Map]", b = "[object Object]",
            x = "[object Promise]", y = "[object Set]", v = "[object WeakMap]", w = "[object DataView]",
            E = /[\\^$.*+?()[\]{}|]/g, S = /^\[object .+?Constructor\]$/,
            C = "object" == typeof e && e && e.Object === Object && e,
            M = "object" == typeof self && self && self.Object === Object && self,
            I = C || M || Function("return this")(), R = "object" == typeof t && t && !t.nodeType && t,
            P = R && "object" == typeof n && n && !n.nodeType && n, U = P && P.exports === R, T = U && C.process,
            k = function () {
                try {
                    return T && T.binding("util")
                } catch (e) {
                }
            }(), B = k && k.isMap, D = Function.prototype, O = Object.prototype, _ = I["__core-js_shared__"],
            L = function () {
                var e = /[^.]+$/.exec(_ && _.keys && _.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }(), F = D.toString, V = O.hasOwnProperty, N = O.toString,
            j = RegExp("^" + F.call(V).replace(E, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            G = d(I, "DataView"), W = d(I, "Map"), H = d(I, "Promise"), z = d(I, "Set"), Q = d(I, "WeakMap"), Y = c(G),
            K = c(W), q = c(H), J = c(z), X = c(Q), Z = r;
        (G && Z(new G(new ArrayBuffer(1))) != w || W && Z(new W) != m || H && Z(H.resolve()) != x || z && Z(new z) != y || Q && Z(new Q) != v) && (Z = function (e) {
            var t = N.call(e), n = t == b ? e.constructor : void 0, i = n ? c(n) : void 0;
            if (i) switch (i) {
                case Y:
                    return w;
                case K:
                    return m;
                case q:
                    return x;
                case J:
                    return y;
                case X:
                    return v
            }
            return t
        });
        var $ = B ? i(B) : s;
        n.exports = $
    }).call(t, function () {
        return this
    }(), n(21)(e))
}, function (e, t) {
    function n(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t)
    }

    e.exports = n
}, function (e, t, n) {
    (function (e, n) {
        function i(e) {
            return function (t) {
                return e(t)
            }
        }

        function o(e, t) {
            return null == e ? void 0 : e[t]
        }

        function a(e) {
            var t = !1;
            if (null != e && "function" != typeof e.toString) try {
                t = !!(e + "")
            } catch (n) {
            }
            return t
        }

        function r(e) {
            return N.call(e)
        }

        function s(e) {
            if (!f(e) || u(e)) return !1;
            var t = p(e) || a(e) ? j : S;
            return t.test(c(e))
        }

        function l(e) {
            return g(e) && Z(e) == y
        }

        function d(e, t) {
            var n = o(e, t);
            return s(n) ? n : void 0
        }

        function u(e) {
            return !!L && L in e
        }

        function c(e) {
            if (null != e) {
                try {
                    return F.call(e)
                } catch (t) {
                }
                try {
                    return e + ""
                } catch (t) {
                }
            }
            return ""
        }

        function p(e) {
            var t = f(e) ? N.call(e) : "";
            return t == h || t == A
        }

        function f(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t)
        }

        function g(e) {
            return !!e && "object" == typeof e
        }

        var h = "[object Function]", A = "[object GeneratorFunction]", m = "[object Map]", b = "[object Object]",
            x = "[object Promise]", y = "[object Set]", v = "[object WeakMap]", w = "[object DataView]",
            E = /[\\^$.*+?()[\]{}|]/g, S = /^\[object .+?Constructor\]$/,
            C = "object" == typeof e && e && e.Object === Object && e,
            M = "object" == typeof self && self && self.Object === Object && self,
            I = C || M || Function("return this")(), R = "object" == typeof t && t && !t.nodeType && t,
            P = R && "object" == typeof n && n && !n.nodeType && n, U = P && P.exports === R, T = U && C.process,
            k = function () {
                try {
                    return T && T.binding("util")
                } catch (e) {
                }
            }(), B = k && k.isSet, D = Function.prototype, O = Object.prototype, _ = I["__core-js_shared__"],
            L = function () {
                var e = /[^.]+$/.exec(_ && _.keys && _.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }(), F = D.toString, V = O.hasOwnProperty, N = O.toString,
            j = RegExp("^" + F.call(V).replace(E, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            G = d(I, "DataView"), W = d(I, "Map"), H = d(I, "Promise"), z = d(I, "Set"), Q = d(I, "WeakMap"), Y = c(G),
            K = c(W), q = c(H), J = c(z), X = c(Q), Z = r;
        (G && Z(new G(new ArrayBuffer(1))) != w || W && Z(new W) != m || H && Z(H.resolve()) != x || z && Z(new z) != y || Q && Z(new Q) != v) && (Z = function (e) {
            var t = N.call(e), n = t == b ? e.constructor : void 0, i = n ? c(n) : void 0;
            if (i) switch (i) {
                case Y:
                    return w;
                case K:
                    return m;
                case q:
                    return x;
                case J:
                    return y;
                case X:
                    return v
            }
            return t
        });
        var $ = B ? i(B) : l;
        n.exports = $
    }).call(t, function () {
        return this
    }(), n(21)(e))
}, 55, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.Layout = void 0;
    var o = n(20), a = i(o), r = n(51), s = i(r), l = n(53), d = i(l), u = n(28), c = i(u), p = n(30), f = i(p),
        g = n(32), h = t.Layout = function A(e, t, n, i) {
            var o = this;
            o.klass = A, t = (0, c["default"])(t) ? t : {}, Object.assign(o, new g.Layout(e, t, n)), o.showColTotals = (0, d["default"])(t.colTotals) ? t.colTotals : !(0, d["default"])(t.showColTotals) || t.showColTotals, o.showRowTotals = (0, d["default"])(t.rowTotals) ? t.rowTotals : !(0, d["default"])(t.showRowTotals) || t.showRowTotals, o.showColSubTotals = (0, d["default"])(t.colSubTotals) ? t.colSubTotals : !(0, d["default"])(t.showColSubTotals) || t.showColSubTotals, o.showRowSubTotals = (0, d["default"])(t.rowSubTotals) ? t.rowSubTotals : !(0, d["default"])(t.showRowSubTotals) || t.showRowSubTotals, o.showDimensionLabels = (0, d["default"])(t.showDimensionLabels) ? t.showDimensionLabels : !(0, d["default"])(t.showDimensionLabels) || t.showDimensionLabels, o.hideEmptyRows = !!(0, d["default"])(t.hideEmptyRows) && t.hideEmptyRows, o.skipRounding = !!(0, d["default"])(t.skipRounding) && t.skipRounding, o.aggregationType = (0, a["default"])(t.aggregationType) ? t.aggregationType : e.optionConfig.getAggregationType("def").id, o.dataApprovalLevel = (0, c["default"])(t.dataApprovalLevel) && (0, a["default"])(t.dataApprovalLevel.id) ? t.dataApprovalLevel : null, o.showHierarchy = !!(0, d["default"])(t.showHierarchy) && t.showHierarchy, o.completedOnly = !!(0, d["default"])(t.completedOnly) && t.completedOnly, o.displayDensity = (0, a["default"])(t.displayDensity) && !(0, f["default"])(t.displayDensity) ? t.displayDensity : e.optionConfig.getDisplayDensity("normal").id, o.fontSize = (0, a["default"])(t.fontSize) && !(0, f["default"])(t.fontSize) ? t.fontSize : e.optionConfig.getFontSize("normal").id, o.digitGroupSeparator = (0, a["default"])(t.digitGroupSeparator) && !(0, f["default"])(t.digitGroupSeparator) ? t.digitGroupSeparator : e.optionConfig.getDigitGroupSeparator("space").id, o.legendSet = new g.Record(t.legendSet).val(!0), o.parentGraphMap = (0, c["default"])(t.parentGraphMap) ? t.parentGraphMap : null, o.reportingPeriod = (0, c["default"])(t.reportParams) && (0, d["default"])(t.reportParams.paramReportingPeriod) ? t.reportParams.paramReportingPeriod : !!(0, d["default"])(t.reportingPeriod) && t.reportingPeriod, o.organisationUnit = (0, c["default"])(t.reportParams) && (0, d["default"])(t.reportParams.paramOrganisationUnit) ? t.reportParams.paramOrganisationUnit : !!(0, d["default"])(t.organisationUnit) && t.organisationUnit, o.parentOrganisationUnit = (0, c["default"])(t.reportParams) && (0, d["default"])(t.reportParams.paramParentOrganisationUnit) ? t.reportParams.paramParentOrganisationUnit : !!(0, d["default"])(t.parentOrganisationUnit) && t.parentOrganisationUnit, o.regression = !!(0, d["default"])(t.regression) && t.regression, o.cumulative = !!(0, d["default"])(t.cumulative) && t.cumulative, o.sortOrder = (0, s["default"])(t.sortOrder) ? t.sortOrder : 0, o.topLimit = (0, s["default"])(t.topLimit) ? t.topLimit : 0, Object.assign(o, i), o.getRefs = function () {
                return e
            }
        };
    h.prototype = g.Layout.prototype, h.prototype.clone = function () {
        var e = this, t = this.getRefs(), n = new t.api.Layout(t, JSON.parse(JSON.stringify(e)));
        return n.setResponse(e.getResponse()), n.setAccess(e.getAccess()), n.setDataDimensionItems(e.getDataDimensionItems()), n
    }
}, function (e, t, n) {
    t = e.exports = n(29)(), t.push([e.id, "body{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.x-body,.x-btn-default-toolbar-small .x-btn-inner,.x-form-field,.x-form-item,.x-form-item-label,.x-grid-cell-inner,.x-panel-header-text-default,body{font-size:11px;font-family:Arial,Helvetica Neue,'sans-serif'!important}table.pivot{font-family:Arial,Helvetica Neue,'sans-serif'!important}#init{display:table;margin:300px auto;font-size:13px;color:#444}#init .brand{font-weight:600;padding-right:5px}::-webkit-scrollbar{width:8px;height:7px;border:0 none}::-webkit-scrollbar-track:horizontal{background-color:#ddd;margin:0 2px;border-bottom:1px solid #fff}::-webkit-scrollbar-thumb:horizontal{background-color:#bbb;border-bottom:1px solid #fff}::-webkit-scrollbar-track:vertical{background-color:#e1e1e1;margin:1px 0;border-right:1px solid #fff}::-webkit-scrollbar-thumb:vertical{background-color:#bbb;border-right:1px solid #fff}.user-select{-webkit-touch-callout:text;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.x-scroller-vertical{border:0 none}.disabled{opacity:.4;cursor:default!important}.disabled-toolbar{opacity:1}.x-splitter{display:none}.fixed{position:fixed}.pointer{cursor:pointer}.cursor-default{cursor:default}.td-nobreak{white-space:nowrap}.td-collapsed,.td-hidden{display:none}.td-sortable{background-image:url(" + n(127) + ");background-repeat:no-repeat;background-position:100%;padding-right:15px!important}.text-weak{color:#303038}.text-medium{font-weight:600}.align-left{text-align:left!important}.align-right{text-align:right!important}.spinner{width:20px;height:20px;margin:50px auto;background-color:#aaa;border-radius:100%;-webkit-animation:sk-scaleout .8s infinite ease-in-out;animation:sk-scaleout .8s infinite ease-in-out}@-webkit-keyframes sk-scaleout{0%{-webkit-transform:scale(0)}to{-webkit-transform:scale(1);opacity:0}}@keyframes sk-scaleout{0%{-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);transform:scale(1);opacity:0}}table.pivot{border-collapse:collapse;border-spacing:0;border:0 none}table.pivot.displaydensity-COMFORTABLE td{padding:7px!important}table.pivot.displaydensity-COMPACT td{padding:3px!important}table.pivot.fontsize-LARGE td{font-size:13px}table.pivot.fontsize-SMALL td{font-size:10px}.pivot td{padding:5px;border:1px solid #b2b2b2}.pivot-filter{background-color:#c7d5e9;text-align:center;padding:7px!important;color:#222;font-weight:600}table.pivot.displaydensity-COMFORTABLE td.pivot-filter{padding:9px!important}table.pivot.displaydensity-COMPACT td.pivot-filter{padding:5px!important}.pivot-dim{background-color:#dae6f8;text-align:center}.pivot-dim.highlighted{background-color:#c5d8f6}.pivot-dim-subtotal{background-color:#cad6e8;text-align:center}.pivot-dim-total{background-color:#bac6d8;text-align:center}.pivot-dim-total.highlighted{background-color:#adb8c9}.pivot-dim-label{background-color:#c7d5e9;white-space:nowrap;text-align:center}.pivot-empty{background-color:#cddaed}.pivot-transparent-column{background-color:#fff;border-top-color:#fff!important;border-right-color:#fff!important}.pivot-transparent-row{background-color:#fff;border-bottom-color:#fff!important;border-left-color:#fff!important}.pivot-value{background-color:#fff;text-align:right;max-width:700px}.pivot-value.highlighted{background-color:#f3f3f3}.pivot-value-subtotal{background-color:#f4f4f4;white-space:nowrap;text-align:right}.pivot-value-subtotal-total{background-color:#e7e7e7;white-space:nowrap;text-align:right}.pivot-value-total{background-color:#e4e4e4;white-space:nowrap;text-align:right}.pivot-value-total-subgrandtotal{background-color:#d8d8d8;white-space:nowrap;text-align:right}.pivot-value-grandtotal{background-color:#c8c8c8;white-space:nowrap;text-align:right}.pivot td.legend{padding:0}.pivot div.legendCt{display:table;float:right;width:100%}.pivot div.arrowCt{display:table-cell;vertical-align:top;width:8px}.pivot div.arrow{width:0;height:0}.pivot div.number{display:table-cell}.pivot div.legendColor{display:table-cell;width:2px}.ns-viewport-text *{padding:3px 10px;font-size:13px;color:#777}.ns-viewport-text h3{font-size:13px;font-weight:500;color:#333;padding:0 0 8px}.x-panel-body{font-size:11px;border-color:#dadada}.x-panel .x-grid-body{border-style:none}.ns-panel-title-data,.ns-panel-title-dimension,.ns-panel-title-organisationunit,.ns-panel-title-period{height:17px;background-repeat:no-repeat;padding-left:22px}.ns-panel-title-data{background-image:url(" + n(134) + ")}.ns-panel-title-period{background-image:url(" + n(165) + ")}.ns-panel-title-organisationunit{background-image:url(" + n(164) + ")}.ns-panel-title-dimension{background-image:url(" + n(135) + ")}.x-webkit .x-form-empty-field{line-height:14px}.x-form-text,textarea.x-form-field{font-size:10px}.x-form-item-label{font-size:11px;color:#111}.ns-combo .x-form-text{padding-left:5px}.ns-combo .small .x-form-field{padding-top:2px}.ns-combo input{border-radius:1px 0 0 0}.ns-trigger-filter .x-form-trigger{height:22px!important;background:url(" + n(133) + ") 0 0 no-repeat;border-top:1px solid #b5b8c8;border-right:1px solid #b5b8c8}.ns-trigger-filter-focused .x-form-trigger{border:1px solid #a1a1a1;border-left:0 none}.ns-trigger-filter .x-form-trigger-over{background:url(" + n(132) + ") 0 0 no-repeat}.x-fit-item{border-style:none}.x-boundlist-item{color:#333;padding:3px 2px 3px 4px;font-size:10px;border:1px solid transparent}.x-boundlist-item-over{background-color:#e1e1e1;border-color:#e1e1e1}.x-boundlist-selected{background-color:#d3d3d3;border-color:#d3d3d3}.ns-multiselect{color:#111}.ns-toolbar-multiselect-left .x-docked-top{border-top-left-radius:1px;border-right:0 none}.ns-toolbar-multiselect-right .x-docked-top{border-top-right-radius:1px}.ns-toolbar-multiselect-leftright .x-docked-top{border-top-left-radius:1px;border-top-right-radius:1px}.ns-toolbar-multiselect-left .ns-toolbar-multiselect-left-label,.ns-toolbar-multiselect-leftright .ns-toolbar-multiselect-leftright-label,.ns-toolbar-multiselect-right .ns-toolbar-multiselect-right-label{font-size:11px;color:#222}.ns-toolbar-multiselect-left .ns-toolbar-multiselect-left-label{padding-left:6px}.ns-toolbar-multiselect-right .ns-toolbar-multiselect-right-label{padding-right:7px}.ns-toolbar-multiselect-leftright .ns-toolbar-multiselect-leftright-label{padding-left:4px}.ns-toolbar-multiselect-left .x-boundlist-item-over,.ns-toolbar-multiselect-right .x-boundlist-item-over{background-color:transparent;border-color:transparent}.ns-toolbar-multiselect-left .x-boundlist-selected,.ns-toolbar-multiselect-right .x-boundlist-selected{background-color:#e5e5e5;border-color:#e5e5e5}.ns-toolbar-multiselect-left .x-panel-body{border-right:0 none}.x-form-cb-label-after{padding-left:1px;font-size:11px;color:#333;position:relative;top:-1px}.x-form-checkbox{background-image:url(" + n(131) + ")}.x-form-cb-wrap{padding-top:2px;line-height:12px}.ns-checkbox .x-form-item-label{padding-left:5px}.ns-checkbox .x-form-cb-label-after{margin-left:3px;font-size:11px}.x-toolbar .x-toolbar-separator-horizontal{height:15px;border-right:1px solid #f2f2f2}.x-toolbar.x-item-disabled{opacity:1}.x-toolbar-default{border-color:#dadada;background-image:none;background-color:#f6f6f6}.ns-toolbar-btn-menu{margin-top:4px}.x-menu-body{border-color:#bbb;border-radius:2px}.x-menu-item-active .x-menu-item-link{border-radius:0;border-color:#e1e1e1;background-color:#e1e1e1;background-image:none}.x-menu-body{padding:0}.x-menu-body .x-box-inner,.x-menu-item{background-color:#fafafa}.x-menu-item-link{padding:4px 5px 4px 26px}.x-menu-item-text{color:#111}.ns-menu-item-noicon .x-menu-item-link{padding-left:10px}.ns-menu-item-advanced,.ns-menu-item-datasource,.ns-menu-item-image,.ns-menu-item-scheme,.ns-menu-item-selected,.ns-menu-item-tablelayout,.ns-menu-item-unselected{padding-left:18px}.ns-menu-item-image{background-image:url(" + n(139) + ")}.ns-menu-item-tablelayout{background-image:url(" + n(141) + ")}.ns-menu-item-datasource{background-image:url(" + n(138) + ")}.ns-menu-item-advanced{background-image:url(" + n(137) + ")}.ns-menu-item-scheme{background-image:url(" + n(140) + ")}.ns-menu-item-selected{background-image:url(" + n(130) + ")}.ns-menu-item-unselected{background-image:url(" + n(129) + ")}.ns-btn-menu{margin-top:2px}.ns-menu-item-favorite-new{background-image:url(" + n(146) + ")}.ns-menu-item-favorite-open{background-image:url(" + n(147) + ")}.ns-menu-item-favorite-save{background-image:url(" + n(150) + ")}.ns-menu-item-favorite-restore{background-image:url(" + n(149) + ")}.ns-menu-item-favorite-rename{background-image:url(" + n(148) + ")}.ns-menu-item-favorite-share{background-image:url(" + n(151) + ")}.ns-menu-item-favorite-interpretation{background-image:url(" + n(144) + ")}.ns-menu-item-favorite-link{background-image:url(" + n(145) + ")}.ns-menu-item-favorite-delete{background-image:url(" + n(143) + ")}.ns-menu-item-favorite-translate{background-image:url(" + n(152) + ")}.x-btn-arrow{background-image:url(" + n(120) + ")!important}.x-btn-default-toolbar-small,.x-btn-default-toolbar-small-over,.x-btn-default-toolbar-small-pressed{border-radius:1px}.x-btn-default-toolbar-small-over,.x-btn-default-toolbar-small-pressed{border-color:#bbb}.x-btn-default-toolbar-small-icon button{width:32px!important}.x-btn-default-toolbar-small-icon .x-btn-icon{width:32px;height:32px}.x-btn-default-small{border-radius:1px}.x-btn-default-toolbar-small-pressed{border-color:#bbb;background-image:none;background-color:#d6d6d6;background-image:-webkit-gradient(linear,50% 0,50% 100%,color-stop(0,#d1d1d1),color-stop(100%,#e5e5e5));background-image:-webkit-linear-gradient(top,#d1d1d1,#e5e5e5);background-image:linear-gradient(top,#d1d1d1,#e5e5e5)}.ns-button-icon-gear{width:22px!important;height:22px!important;background:url(" + n(154) + ") no-repeat}.ns-button-icon-table{background:url(" + n(167) + ") no-repeat}.ns-button-icon-chart{background:url(" + n(128) + ") no-repeat}.ns-button-icon-map{background:url(" + n(162) + ") no-repeat}.ns-button-icon-arrowleft{background:url(" + n(121) + ") no-repeat}.ns-button-icon-arrowleftdouble{background:url(" + n(122) + ") no-repeat}.ns-button-icon-arrowlefttriple{background:url(" + n(123) + ") no-repeat;width:26px!important}.ns-button-icon-arrowright{background:url(" + n(124) + ") no-repeat}.ns-button-icon-arrowrightdouble{background:url(" + n(125) + ") no-repeat}.ns-button-icon-arrowrighttriple{background:url(" + n(126) + ") no-repeat;width:26px!important}.ns-button-icon-search{background:url(" + n(166) + ") 1px 1px no-repeat}.ns-button-icon-nodeselectchild{background:url(" + n(163) + ') 1px 1px no-repeat}.ns-button-organisationunitselection .x-btn-center{width:18px!important}.ns-button-icon.x-btn-default-toolbar-small-disabled{-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=25)";opacity:.25}.x-tip{border-radius:2px;padding:1px 4px;border:1px solid #111;background-color:#111}.x-tip .x-tip-body{font-size:10px;color:#fff;-webkit-text-stroke:.2px #fff}.x-tip-anchor{border-top-color:#111}.x-mask-msg{padding:0;border:0 none;background-image:none;background-color:transparent}.x-mask-msg div{background-position:11px}.x-mask-msg .x-mask-loading{border:0 none;background-color:#000;color:#fff;border-radius:2px;padding:12px 14px 12px 30px;opacity:.65}.x-grid-row-selected .x-grid-cell{background-color:#eaeaea!important;border-style:solid;border-color:transparent}.ns-grid-row-icon-dashboard,.ns-grid-row-icon-delete,.ns-grid-row-icon-edit,.ns-grid-row-icon-overwrite,.ns-grid-row-icon-sharing{width:16px;height:16px;cursor:pointer}.ns-grid-row-icon-edit{background:url(' + n(157) + ") no-repeat}.ns-grid-row-icon-overwrite{background:url(" + n(158) + ") no-repeat;margin-left:4px}.ns-grid-row-icon-sharing{background:url(" + n(159) + ") no-repeat;margin-left:4px}.ns-grid-row-icon-dashboard{background:url(" + n(155) + ") no-repeat;margin-left:4px}.ns-grid-row-icon-delete{background:url(" + n(156) + ") no-repeat;margin-left:4px}.ns-grid-row-icon-disabled img.ns-grid-row-icon-dashboard,.ns-grid-row-icon-disabled img.ns-grid-row-icon-sharing{cursor:pointer!important}.ns-grid .x-grid-cell-inner,.ns-grid .x-grid-cell-inner *{font-size:11px!important}.ns-grid .x-grid-cell-inner{padding-top:3px;padding-bottom:3px}.ns-grid .x-column-header-text{color:#333}.ns-grid .x-grid-header-ct{border-bottom-width:1px!important;border-bottom-color:#d6d6d6}.ns-grid .x-grid-body{border:1px solid #d6d6d6;border-top:0 none!important}.ns-grid .x-grid-dirty-cell{background-image:none}.ns-grid .x-grid-row{vertical-align:middle}.ns-grid .x-grid-row .x-grid-cell{border-top:0 none}.ns-grid .link,.ns-grid .link *{cursor:pointer;cursor:hand;color:#001eff;text-decoration:underline}.x-window .x-window-header-text-default{font-size:10px;text-transform:uppercase;text-align:center;color:#444;padding-left:8px;padding-top:1px}.ns-window-title-favorite{padding-left:19px;background-image:url(" + n(153) + ")}.ns-window-title-interpretation{padding-left:19px;background-image:url(" + n(160) + ")}.ns-window-title-datatable{padding-left:19px;background-image:url(" + n(136) + ")}.ns-window-title-messagebox{padding-left:16px;background-position-y:1px}.ns-window-title-messagebox.error{background-image:url(" + n(142) + ")}.ns-window-title-messagebox.warning{background-image:url(" + n(169) + ")}.ns-window-confirm-list .x-panel-body{color:#444;font-size:10px;border-style:none}.ns-label-period-heading,.ns-label-period-heading-options{font-size:11px;font-weight:700;color:#333;line-height:18px}.ns-label-period-heading-options{background-color:#e1e1e1;padding:1px 5px;border-radius:2px}.ns-label-info{font-size:10px!important;color:#666;padding-left:4px;height:22px;line-height:21px}.ns-textfield-alt1 .x-form-field,.ns-textfield .x-form-field{height:26px;padding-left:4px;border-radius:1px;font-size:11px;color:#333}.ns-textfield .x-form-item-label{padding-left:5px;line-height:20px}.ns-textfield-alt1 .x-form-item-label{padding-left:5px;line-height:8px}.x-tree-icon-leaf{background-image:url(" + n(161) + ")}.ns-tree.x-tree-panel .x-grid-row .x-grid-cell-inner{height:17px;font-size:10px}.ns-tree .x-grid-row-selected .x-grid-cell,.ns-tree .x-grid-row-selected .x-grid-rowwrap-div{background-color:#e0e0e0;border-radius:2px 2px 2px 2px}.ns-tree .x-grid-cell{border-radius:2px 2px 2px 2px}#treepanel-contextmenu{border-radius:3px;border:1px solid #ddd}.ns-statusbar .x-panel-body-default{padding:5px 0 0 6px;border:0 none;background-color:transparent;color:#111;vertical-align:top;font-size:10px;line-height:14px}.ns-accordion .x-accordion-item .x-accordion-hd{padding:6px 5px 4px 8px;border:0 none;cursor:pointer;border-radius:0;background-image:none;background-color:#e0e0e0;background-image:-webkit-gradient(linear,50% 0,50% 100%,color-stop(0,#dedede),color-stop(100%,#e6e6e6))!important;background-image:-webkit-linear-gradient(top,#ddd,#e6e6e6)!important;background-image:linear-gradient(top,#ddd,#e6e6e6)!important}.ns-accordion .collapsed .x-accordion-hd{padding-bottom:5px!important}.ns-accordion .x-accordion-item{border-radius:1px;border:1px solid #c5c5c5;border-bottom:0 none}.ns-accordion .ns-accordion-last{border:1px solid #c5c5c5}.ns-accordion .x-accordion-hd .x-panel-header-text{font-weight:700;cursor:pointer}.ns-accordion .x-accordion-body{padding:1px;border-top:1px solid #c5c5c5!important}.ns-accordion .x-accordion-hd-sibling-expanded{-o-box-shadow:none;box-shadow:none}.ns-accordion .ns-toolbar-multiselect-left,.ns-accordion .ns-toolbar-multiselect-right{margin-bottom:0}.ns-accordion .ns-combo .x-form-text,.ns-accordion .ns-combo .x-form-trigger{height:24px;padding-top:1px}.ns-accordion .ns-combo .x-form-item-label{padding:4px 0 0}.ns-accordion .x-component.x-panel-header-text-container.x-box-item.x-component-default{width:100%!important}.ns-textarea .x-form-field{font-size:11px;line-height:14px!important}.ns-textarea.monospaced textarea{font-family:Monospace,Consolas,Courier New,Courier\\ 10 Pitch!important;padding:4px;border:0 none}.x-tip,.x-tip-body,.x-tip-body span{width:auto!important;background-color:grey!important;border:0}.eastPanel .clickable,.eastPanel .clickable div,.eastPanel .clickable label{cursor:pointer!important}.eastPanel .thumbs_up{background-image:url(" + n(168) + ");background-position:5px 5px;padding:7px 25px;background-repeat:no-repeat}.eastPanel .greyBackground,.eastPanel .greyBackground div{background-color:#efefef}.eastPanel .comment{padding:5px;margin-top:1px}.eastPanel .eastPanelLink{cursor:pointer;color:#3162c5}.eastPanel .eastPanelLink:hover{color:#1c3974}.eastPanel .bold{font-weight:700}.eastPanel .interpretationActions{line-height:16px}.eastPanel .interpretationDetailsField{white-space:nowrap;font-weight:700;line-height:18px}.eastPanel .avatar{height:30px;width:30px;border-radius:50%;display:inline-block;background-color:#bdbdbd;text-align:center;line-height:30px;font-size:14px;color:#000;font-weight:700}.eastPanel .commentArea textarea{margin-bottom:5px;font-size:12px}.ns-panel-title-east-default .x-panel-header{background:#e6e6e6;border-top-width:0;border-left-width:0;box-shadow:none;-webkit-box-shadow:none;padding-top:8px;padding-bottom:7px;padding-left:7px}.ns-panel-title-east-default.first .x-panel-header{border-top-width:1px}.ns-panel-title-east-default .x-panel-body{border-left:0}", ""])
}, , 103, 105, 106, 107, function (e, t, n) {
    var i = n(110);
    "string" == typeof i && (i = [[e.id, i, ""]]);
    n(31)(i, {});
    i.locals && (e.exports = i.locals)
}, , , , function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9wIFAoyLJQcQLkAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAATklEQVQY08XNsQnAQAxD0X+QUVx7gFvDAxmv6Nq7OFWOQMiViUrxhOC3DIDMfAWqCsBxFRHRVbWAiODu47HMTMys55xtZr17WXiL7vibnCFkHelcbNvXAAAAAElFTkSuQmCC"
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AMdDAU5FCvBmQAAAKlJREFUOMtjYBj+QFle3lBJTj4QlzwTXs1yilYMDIznmBgZBciwWcFBSV7hv6KsXDHJmhXl5Z2U5RX+K8kpRpGsWUlO3kdRVu6/srwCUZpZ0AUYGRmTGBgYnzD/ZtpOjAEYgfjhz58QRoZ/F/+y/rslLysnTnb0KcorzFKWV3ijJC+nQYkhS5XlFT4rycmp4FLDjM+ADx8/rBPi52dgYGT0eP/x49ZhmlcASpkjnx2uzJ4AAAAASUVORK5CYII="
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AMdDAADr1DsbgAAAP1JREFUOMvdk71KQ0EQhc8slsHGYOXumb2jCFoY7AWr3DqFCCJYpxMLbSxUfBXfQHwBfQQFEUS5PoS/2bW5QS2CW2e6gfnOYf6A6Y7Kxx0LrMe5kYsVdet3jZsERx9rkXyRBe8tvALIQxZ0C5x124LmiuyPYaO+Rerpv3AMsd/Cmy28ZNSk1LMCZw5auAYAU64b9TVS9ycxf2YgTvYgaPKnXAMARnkXwEhyuioSCL3VQQIaN4M7AHh8aQ4kpyMRd28MvfL1US8t6FNc0FkAMB+OjfwwhrVikej1xoI+z1fe/YhoMnK56A46nNvIwG3ny5207ZxLSkNkHE7Zv3wDP0BEJhOixVsAAAAASUVORK5CYII="
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAQCAYAAAAbBi9cAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AMeChwOIa4e0gAAAQtJREFUOMvlkj9Kg0EQxd8slsFGsfLbN/uNImhhsBeskjqFCCJY24mFNhYqXsUbiBfQIyiIIEo8hH+za5PE1Zg9gL7yN7zHm9kF/pfqKmyaZztnRs7V1PVxzP0MCVVoi6SzJHjNDIuA3CXBdIllTXTDvKaabOUGo74E6nGJfTXxodUPWcsM80aNSj0psawJO/2Q4V1MuWLU50DdLbGBHACIk20IuuldLoeTXtoC0JMUL4osD/LNpU4Eum4CN4PB/VN3T1I8EHG3Rt8cx35/duq5eX0Iszo5XKfyh0a+Gf1yiY0evdIr8/o4U1fuu1GjkQvj2Mg/anBqNQHXjQ93lK15KjHuIGG/xP6oPgFIPWmq9LOmhgAAAABJRU5ErkJggg=="
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AMdDAcNB6lXrgAAAL1JREFUOMvdkKEOAjEQRLd3aNKe722vlQSHIXwACkfweBSaXwIHf0CCIcHgCAQEBtH2HIguigRxyVEcPDnZ2cwMwM+TVokacZQJQda5W92DpEqkACIQ7Q1i66sErvTbjPMHEMwF5yvr/fWrfloWYyMVacw7UQle2NLtBG+eibFlxvnaen/8aIN3WJpsEoI7A+hFV0CJbYOKdK5m0eYCi75BFTTiJN4ssWtQBZOrad1to7I3gwEjNjxcTgv4f56mOTVLblp90AAAAABJRU5ErkJggg=="
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AMdDAA4HlsFSgAAARVJREFUOMvdULFKA0EUnN2kEry3FwtBuX2b3ULE2ko/QbBOoZBv8Cds/AYrIWIRSxFtRVKlVBBD0ig2dxvBwkTXIpcQ4cRr9XUzMPNmBvjzV5kHTpuGUvSaee8nuL4bU7Seen/3k4GcByFgWUI8GtY2Z8aAaDvmrVIJ0mF2W1uMFqQUx6So1Rv0OzWKuwG4VBF1s6G/L9XLaX3o2HzUmTmvtmM1h6IklSKD1PurJaJ3IdAiRe3eoH8zTRITdVLvHwo3+LYHxDmCkBJyDwCq47drAfEiIPd/rWC12XRsgk10c8YxPznmi3JibUY20QcAsLa6onLxWRnxhmPzORVvR1HVan4u9XliwCc20bOOjvnIMZ/if98XVR9SfNJ0yW0AAAAASUVORK5CYII="
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAQCAYAAAAbBi9cAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AMeCh401ZSl4gAAASJJREFUOMvl0L9KA0EQx/HfXgwBiyPETryZ2Z2YIiAKtgqxiaCFjWDhA4j4CjYGbH0DBcEHsAiIpfoUgnIEW8EYBP+AtxZKitxl7XXKT/HdmQX+9ijxcT2hnd/MEXccSXduadGMNkoAUKtWb2Gii1ocfz4Nnq/HWXkqvqpk0eF7/3WzP+ifFG/FNK/MH5rQfsjsjMRKkjqW7vgTmRaUJasT7YXs+3RJLcvNysa6KYw5ooayvGhCRyGz0zKpLD1lOQeAaDTkTbQGoISSOQuZKftleJDP/GluG2HpKEumzLMhc8wtJfGWbDsXsSwHyvKmzM2QOea2kniXyFY+IrL782ozZMNNErs62pgAAOPxCPjGfa93N/yDYqt4b7bTh/QS/2e+APm4a833Y1DsAAAAAElFTkSuQmCC"
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QwCDQMCwHYhZwAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAABwSURBVBjTnZCxDQMxDAP5vwV79R6Gc3oZ1+w1gWulMuJP8kEQNoKIAygK+FeSPvrHBtS+994v4LmgzASANSEJY4wnKKlsY84J2yBZtr9GYwci4hJ/SqrWWtkuABURdVtm3UgSmXmQfCuDl9a37/lZD16/OyLlnpYnAAAAAElFTkSuQmCC"
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfdDAkOBynd4SR7AAABM0lEQVQoz42RPU7DQBBG3+5aK0QRISwXqbgCUiQkV3AIXyBl7uBUOQFNWl8FJEQarhDkSC4RnSXH9s7SJIsD5me6nZn3zTc7Ks/zF2DGZzyuVqs7/ogIuJ7P53jvUUpRFEXKPyKy1pqyLNntdkynUwC7XC6fgfQ3FxFA13UYY1BKAaC1vlksFvR9jzGG9Xqdjlk9NgdQRMx2u6WqKpIkAbCjoPceEcF7Hwpt26KUCmJPb+13UERwziEiofBVbFPcPwC3h/JG/wSO5NIsy8iyDGAWATjn6Pse59xvoK2qirquAawegsOJY2J1XYeesOPYxDGx487BatM0J6Bzjv1+f5Lruu70V5MkwXt/vBkAcRwjIsRxHHLW2jBR5XleAlcDi69a60vgYnCa98lkcqaUOj+8mw8bKNSNWJsQJAAAAABJRU5ErkJggg=="
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QkKCjk1VXnrCwAAAL1JREFUKM+t0D0uRAEUxfHfG5OMRGMFEtuQE9UkLIJSo2MBCh+d6EQsYQqxAwluqxTFVCorEIWC5pGXF8MUTnnu/9x7c5hDVdVUVQPNHPAIYzzjcfAHvIxTnGCU5GP4C7yES6xhK8kDDGfAi5hgHTtJbr9mw6pawC5Wk+y3/hU2cJ5k0l3WvbBXVSt4wSamOOhfbzr/XmC79d8xTnLXDwwgySuO8NT6hz/B34E2NMUxbnA2q71+S9e4x5v/0ieSsTVT+vpcFwAAAABJRU5ErkJggg=="
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QgNDTctfW5ZXwAAAI5JREFUKM+t0TEOAVEUheFPJsFQsAGlFehNaQkSe7ADa5CIHegkSkp7UIleqVMKGc2bRES8V8xJbnPvf25OckhTI4wsAW5hgiZuMbiPNU4YxeAutriiiMFt7HHH9PuYYY7lx+6AJ1a/vlWGEruQ+YULev/yboKpxAPjWO4hzsGwSOzHDEd0Ug05BlWrtegN2D8WOaohhiEAAAAASUVORK5CYII="
}, function (e, t) {
    e.exports = "data:image/gif;base64,R0lGODlhNAAnAOf1AAAAAIAAAACAAICAAAAAgIAAgACAgMDAwMDcwKbK8BMTEyoqKi4uLjIyMjU1NTk5OT09PQQicUJCQkZGRkhISExMTFJSUlVVVVlZWV1dXWJiYmRkZGlpaW1tbXJycnV1dXp6en5+fiI8gidBhSpEhy1GiCxUlTBJijBXlzNYlzZZmD9WkjpbmD1cmSxii0Vbk0lelkBkn0tgl0xhmFdqnUVqo0xwp1JwplRzqFZ4rF1womFzpGJ1pmR2pWd4p2h6qmt9q25/qlWGo1uCs3eGq3eTvXuWv1Sm1V6293+63Ge55Wi96WO692nA93XG93nG+XzI+YKCgoaGhoqKio2OjpGRkZWVlZmZmZ6enouZu4yZuoyavpCdvaGhoaampqioqK6urq6zubGxsbW1tbK3vLS5vbm5ubi7v729vYKbwZKfwYKjyYunyoC73ZWhw52nwJ6pyJex0Ju72YC+4qOuyKaxzam0z6+4z6W20aC616K82am71ru+wb6/wLC50ba+1bm/0ITF6IfL7orD44HM+YrQ+IzR+JbH45bR8JDU+ZzU8Z3V/J3Y+rLI37vC1avT6qLZ+6ra86rd+7fN47LZ77/b7bff9bHf/a3g/LHh+7Ti+7Xi/Lfl/Lzg87vk+8DAwcLDxMLExMXFxcbHyMbIysXJzcjIyMrLzMzMzMTL3svO1MnP3czQ1tHR0dXV1dHU2dXY3Nra29nb3drc3tzd3sXa68/U4svf79zf4sDj9sLk9sbl98Pm/MPo/Mjn98ro98zp98jq/M/q+M7s/d7h493h6dLl8tbo89Ps+dHu/dTs+dTu/drs9tvv+tzv+tXw/tnx/t3w+t3y/t75+uDh4uHi5ePk5eTl5eHl7ufn6Ojo6evr7Ovs7O3t7ers8u3u8ePz++Dz/uH0/uXy+eX1/uH5+uT6++j3/uz1++j7++z4/uz8/PDw8PLz9fT09Pb3+vP7/vH9/fj4+fn6/Pz8/f///////////////////////////////////////////ywAAAAANAAnAAAI/gBpfcFCsGDBL7QEGlyIUOHCg7RcSZxIceIXahgzaoz15aLGjxw9fszI0RW7kyhTsnOFhZq7lzBh0iPoMmbMmS1t3sRiUqVKljV1usMZVCdRoS9n9vTJrl07oEiH0ox6FKlSpk6dQrU6lWtOrktPZs26VWhVs13RLh07tqzRtG+/qhXL1p1WuXGL2jz71hXbrHaf4t0Ll/DgnX7rxnRrWO/OwzJ5/rXp6kssepgza+54WbNnzp4/JwZM2eFDLA0HnkadUPVphBVjSzT9MPVq1rQZ0rrGu7fv3iJHUgspnGTH4hg5XmOa8hpkd5cLw4z+PPpyn9y2nXTu2F0UCXxh/n4P/3I8lusqtWXbftiDhE/k3cOXLn8mepTdsmljr9cDADFSDeYfgOENKNV9J6nXDX/udFCFO6YA4EFSUzkIoYQU5mRhhBMeeFI33LDTjTb78RcCAAB4IYECaGRIzYkprthigC+iqCKLFF6nHjskLsggBwqgKEFkOQEpJJEuGQnAkDmiRCKJzeVEixdBToGkO1NWeWWWAFjZ5Enb9BhlUFVIEMuVL5V5poswqRnZfdto15xloW1GZ52YgYYnPV8g6NM1uRlk22qDvrbbb4gC6lptrd1WKKOJIhrcSMQhV2lxyjGHEndIUdcddOS9ZB07ppRqaiigmMIOpzqZB5mrnd2Zt5yppn7Sh6qsxlQffe/F1+t5pNIqSh+f4CrgfzTaZGCByNoXbK19iGKsSxtimGy1HR6FbZOmiBJKt58UOy2MN85IFLkyuogujh6aYqu7n0g7rTtKMplsvVfiyy284Zq6qpRUdrllwF4my2XBzpYKSrjyzpummWi64yabD6/ZrsKp+nvNnXjq2THHdfap6XaBQlQyQY/qFulvAQEAOw==";
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAUCAYAAABroNZJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gEODxoaf0zN4AAAAPBJREFUOMvtktFqAjEQRc+km5J+VsR+dY2yVXT/Z5XVzSTjS10oWmnxoVB6YV4uw+HOZaQ/HIwH1Tjn+EOQJ3kc8jgBcOIEcYIWZb1ZU61y8UottO8tWfPk3RrnRHAidLsdfd+TUsJqpZZCSon9fk/XdVz2bo2YmQGoKouUGMeREAICDMcj3nte53OapvnynAkCUGslLZcMwwBACIFZjHcBV8WWUqi1/rjYKUnOmbfFAlXlJQQQYRiGb50zJVlvNqgq3ntijMxi5Nl7VJXtdns/in3odDrZcrWycRwvluWcrW1bU1W7p0/F/u7H/kOudAY1ua6xJgbfogAAAABJRU5ErkJggg=="
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAUBAMAAACZjst6AAAAG1BMVEXe4+bw8/Pz9fX19/f3+fn5+/v8/P39/v7///9kr4t5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gEODiQjYE40ogAAAEtJREFUCNdjUIICBQZjKDBgcIECB4ZQKAhgSIOCBCRWeUF5OXt5eXkBQwcDRwNDR0cHkGhgYOCAsDoYQEKoLIQsko6ODpgOCCCDBQALNkfah4uKEgAAAABJRU5ErkJggg=="
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9wGAwoFAEQ9XSkAAAF3SURBVCjPfZI/bvJAFMR/b73G0ACNhZApEQ0lBSeAu0RKlO8oFJGoaDgIEhVwAIRER0FBY4EowH92N5X5QrAy5WpmZ+a9J/P5vJLn+VuSJO+ABizlUEAeBMGX7/tTnWXZW5qmExHBGIO1FhF5UjjnUErheR5JkkwAdJqmHwB5ntNsNmm1WqV2p9OJ8/lciD+0iHjOOfI8p9/v0+v1OB6PD1fnHFEUsd/vWS6XeJ6HiHiPTiKCiLDdbtlsNiilALDWMhwOqVQqPytY/buLc47io7L3Ak/CYkDGmAfRWosx5mVgT0JrLWEYEkXRU8cwDLler+VCay1xHNPtdhmPx/xOcjgcsPb/inWRv9FocLvdWCwWr7G0fnDu9/vDURlj6HQ6jEajl/1lWcZqtWIwGLBer9ntdmitlQJM0aUMvu/Tbrep1Wo/OUZms9lnmqYTpRT1er38SJXCOcflcsEYQ7Va/ae11lOAJEne4zj+88hFJA+C4EtrPf0G1Yq+tSV2WzIAAAAASUVORK5CYII="
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QMHCxAqJS/TXgAAAdBJREFUKM+FkrFKM1EQhb9Z597NrlhJUkSwsLTWLi9gZbFPIegz5BVCFEydIlVEUvkIaazstVARRLSRFffea8bmT1AQ/lMdBs5wzsyR8XjsY4xHIYRjEVFgwd/IzCx5789U9VxTSkchhIGZEWNERDAzRARgxc0MVSXGOADQpmlOlsOtrS1EhBACzjkAYox47zEznp+fSSkRQjjJRGQtpUSn06HX61EUBVVV0W63abfbVFVFURT0ej06nQ4pJURkbZVJRLi5uWEymbC/v89sNgNgd3eXyWSCqq7sAwsZjUa3IYSdbrdLVVW8v7+zvr7Ox8cHAGVZUtc1GxsbXFxc8PT0hPf+LluucM4xn8/p9/vUdc1wOGQ4HFLXNf1+n/l8vsoNoEtiZjjnKMsSEaEoCpYRyrLEOYeZrYQyGo1uU0o7m5ubHBwcYGZ8fn6S5zkATdPQarUQEa6urnh9fUVV7xQgyzLe3t6YTqe/tv6EiNA0DVmWraxmKSW2t7c5PDz8U3R9fc3e3h6z2Yz7+3u895ma2Zeq8vLywuXlJYvF3417eHhY2sTMvjTP89OmaQYxRh4fH3/+6heW7RIRvPen6pw7/3eEY+/9f0ue5/mZqp5/A8xa3c+cLpFDAAAAAElFTkSuQmCC"
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/UlEQVQ4jZ2TPY6DMBCFPyMay42dbdPsibIXQByDhlQxEhwDcYHkYBtBgUyFt0iMvH/A7quex29+nkYjALquO43jWAIvwMw6EuBdKWWzLLuJtm1PzrnrRtKPUEq9pc65cwj0fY/3fjVJCIHWGoBxHM8pcAjJRVHs6tw0TShySHh63uocI9LOaWBaa8qy3GXheDwu76XAMAxYa3dNEFkgWWaZH9uz1i6FfuNB+2mCAOfcJo/xrUBVVZs8RvI1sMfC6gT/sZDAYz17LQQtkKTAHXg1xlDX9SLy3i/CmAMYYwK9p1LKyzRNV+99/LELSqmLAHhe5J/OWUpp8zy/fQAz3IWvDg2CYgAAAABJRU5ErkJggg=="
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABI0lEQVQ4jaWTQW7CMBBFX4wtxTJhkZ6gJ6IXQFlyCIoCAi7BDqHsy63YNItYkS0iQTeENoTQUv7K/uP/PWPPBADb7XZYluU78AIcuQ8BfBpjlqPRaBdsNpuhc+7jF9FNGGPehHNu+h8xQFmWUwnENWGtpaqq71yFYDAYIITo8ogl55qttYzHY6IoapxYrVb0ej2CIABASkm/36/DR1mvqqpqiQEmk0ljv9/vybLsYiKvBWmaEoZhowyA0+mE957ZbMbhcLjEWwZhGBLH8TUNQJ7nLa7zdf6Kpw1aJXjvb6ZaxzoNlFIURcF8Pr97o7UWpVTDQABEUcR6vW400i0opX5+t5BADrzWJg8iF1rrRd1lj8IYswgAzhP50DhrrZdJkuy+AGbsYBP6fSg2AAAAAElFTkSuQmCC"
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABQUlEQVQ4jZWTW2rCQBSGvxMHyTAYTbuCLsNV2A2I21CsCioYdBXiBnQLvgjupYpCGB8k6UM1TDRae97m57+cCyMAi8WiEcfxF/AOJDwvD/g2xoybzeZK5vN5w1q7/ENUWMaYT2Wt7bngfr8nTdMcUUTQWuP7fg6P47ingDdX3G63C9M2mw3r9ZparebCbwpn5mvyYDDI0tI0RUTodDoAbLdbt5PEK0rzfZ9SqYSIoJSiWq0ym82o1+tYa3NcVWRwPB6ZTCbZezqdcj6fc10+NQiCgH6/T5L8TlepVBCRIuprHQDZDl4yuO3A8zyCIHjd4HA4EEVRDnt03kKDcrlMt9u9wx4ZZKe8Lmo4HBaSXc6lPAXsgA+AMAyJoujuVK44DEMX2imt9eh0Oi2vohvC0zLGjATg8iP/9Z211uNWq7X6AfmVdrC4JzooAAAAAElFTkSuQmCC"
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABNElEQVQ4jZWTsW7CMBCGvziJiLFYrk/Qx8lEVwbEW4AilQmkIMQbMCFWFMHG4yAx15lMwgDqQlEpAZp/ujv7/2yfdR7AcrlsO+c+gTfgzHMp4MsYM+52uxtvsVi0i6JYvzBVyhjzERRFMQSw1tYyiwjOuWEAiLWWJElqAdI0RUQk4Neb+/3+v8zT6fQnPAdPFis1GAxuclW1aT6fM5vNKgFhGN7kdzcAyPOcw+FQCVDq9sxKwN9eTCYTlFJ0Oh08z3sN2O12bLdb4jhmv98TRRGNRoPVakUURY8Bvu8DkGUZYRiSZRm+76O1BqDZbFKW5WPA6XQiSRJarRbH4/Fad85d4zzP7wDXrrz6wgqpALAi8p6maS2niADYQGs9KstyfSnUkjFm5AFcJrLWOGutx71eb/MN+BNpUa4itgUAAAAASUVORK5CYII="
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wMJDBcsK1UgEQAAAihJREFUOMuVk7FKI1EUhr+5907MzAhChjxFICDbW1nYaCKOpViYF7BfK30IxUosTCFkDMFHUJFd0EZsooXaZUGEzB0zN3O3Ma5Z48Ke7sLPd89/zvkdgMPDw1q/3/8OhEDOv0sAv4Ig2FlbWztxDg4Oalrr2BjzSem6LtbaL0lBENSV1nrLGIMQAtd1cRznXWCMwRjzJajf728poDT6rdFo0O12Mcbg+z4AnU6HNE0pFouTICUx8uw4Dt1ul2azyd3dHWdnZ/R6PaIoolgskiTJWHdvlYuPryzLmJ2dpVAoMD8/z+npKbe3t6yurjI9PT0RMgaYmZlBa021WmUwGADw8PDA5eUlURTh+z5pmo5B1Mh/lmVYa6lUKuzv72OtZXNzEyklzWaTq6srlpeXOT4+JssylFJ/OrDWMhwOieOYUqlEvV4nDEMcx2Fqaoooiri/v+fp6YnFxUWklKRpOm7BdV2MMcRxTLlcZm5ujr29PZ6fnwmCgGq1ysXFBeVyGaUUWutxgLX2fdqtVoswDKnVahwdHXF+fs719TVLS0s8Pj5ijKFQKHweorUW3/fRWtNqtVBKsbKyws3NDQsLC7y+vtLpdMjz/P1OxCSI53lkWUa73ebl5YWNjQ2SJKHdbqOUQko52oRwdnd3fwDfJt36cDhECIFSCmMMeZ4jpfwo+Sk8z9uecGEASCkZDAb0ej2SJEEI8XeYth2At0T+V5w9z9tZX18/+Q1Ru/9QUjFkiwAAAABJRU5ErkJggg=="
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABBklEQVQ4jdWTPW7CQBSEv7W28LKNTU6QK1jb+gzkApYlTkERKih8DFu+AJwBiQpxk+Bqva5wihBpITY/ZUbaZjQzb1Z6TwDUdT2z1n4Cb8CZ+wiAL631Osuyraiqauac2zwwDUJr/SGdc0ufbJqGvu+vhEIIlFKEYXjFW2uXEpj65sViMThtt9ux3++JosinpxLvz7eTfaRpCsDxePSbnINRx0iIc+6Kk0PCw+FAWZZMJhMA2rZlPp+TJMmfloMBxhiMMU+1ernBUwH/q0FwecDPxj3CjSaQwAl4B4jjmKIoRhdKCEEcxz51kkqpVdd1m1/TjeAutNYrAXC5yJfOWSm1zvN8+w1TaWzQr76JZwAAAABJRU5ErkJggg=="
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9wCFg0POu/We/kAAAJiSURBVCjPRdIxb1NXGIDh97vn3Gvn2jgEkqhY0CghoQNCRUJIFQOkI0FK11ZVh0gV6tR/wMTUCTF0aocOIDqjlgkpFWJgIBJSJ5TIEQSs2A6248S+9r3nnK8DSH3/wLs8AvAn8C3wABAwCgaI+FgQ8AH8D8Aj4DtAHgLfA78BJThbS9P1Urm8JsasoIqGsD0Zj58cjUaPJ/Dux/8H8CtwAq7Mzc/fqa+srH62tFQVEaOqqKrfbzSOm9vb/xx0OndHsPUTYP4ADJydnZv7Zfnq1Zu1er3S73ajeG2NsLhIf2srOnnmTDmt1ZaG/X49z7Ln38AgysGkabo+u7Cw6qxNDjod9vf2tL6xQX1jg/b799rt9WBqKjl17txqqVxed2CsA0Mc3ypNT1c77TZRFOlwOJSDZpPBYECj0RDbbmsURVKrVqtO5FaA320BUaG6rMaYyWRCdnQk/WaT3d1drLWELCMYIx7IwEycW3YQWQcUqhRZxrDVwo1GWOcwzpGWSpSBRARUiYsCr0oB2BzCxLmd42bzfGk4NGUR1UpF9m7fBhFmKhVEVRGRoii8U93JIVgPPiuKv3q93rV6HJ/0zsng8FCvt1pireWZtXpiZkYE2BuPj8ch/O3Amy9BQwj7zvuL09YunY4ik4jIMM/pbm5SevlSUmvpOpe/GY+f9kO414NDAVDgZ7g8a+2dC0ny9fk4rtk8NwAuSfxOng+283zzg/d378MrAcQAHmJgfhG+uCRyY0Hkq7LI5wBj1bdvVF/8q/psF14DLQOFfIJsPqpjKgGbQmQ/IXcQRhBy8MAIOAL8f7xJIc30s21fAAAAAElFTkSuQmCC"
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABMklEQVQ4jZWTMW/CMBCFvwsICXnBdGHvD4KFEbGxMYehbAzmH6BsUfYI/k87MhazWEFIhA6taRIZSt/0zr73zne2BSDLsqFz7g14AUoeIwI+lVKryWSykzRNh0VRbKsZ5/MZ5xzX6xUAEUEpRafTqTkppUbtoiiWTfFgMGA8HteS8zxnv9/XTJxzyzbQ9wvWWqy1zOdzZrMZvV4PgOPxSJIkxHGM1hqttZf0ZbPZvAOv1loWi8Uf7X/DGONNPqKnFA/Q9kRrjTEGa+1teE2ISLOFXwOP9Xr9sKIxphbXWqhWjuM4yJunuzuDy+US5E3cNYiiKMifNijLMshDBkGTVqsV5E19BBx8JCK3neptVHk1BzhImqbD0+m09dN95h14KKVGAvDzI//1nbvd7mo6ne6+AB+zf9f/5Fb9AAAAAElFTkSuQmCC"
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABwUlEQVQ4jZWTv2oiURSHv6uXGeU26mqrrA/gO/gEBuyEIGhjayMWCTapfArFys60Ymkh2grBgKBOKcYRHEbHOLPFrhITFfYHl8s58H33DxwB0Gq1MpZlPQG/AJf78QErpdTL4+Pjq2g2mxnbtjuWZbHf729SSik0TcO2baSUaJqGUupB2rb9bFkW2WyWRCJxUzAYDOj1euRyOd7e3phMJgDPEog4jkMikaBSqRAOh3/AnufhOA7VapVAIEAymcR1XWazWcQHuJ7nARAOh4lEIhcrFAohhDjDp6TTaRzHcX33fst1XUzTpFwuX8AAnU6HQCDATYHnedi2fRVuNBqsViuklLcFpmmSSqWuwpvN5ty/KrAsi2KxyGKxoN/vX8Dz+fxC+kPgeR6fn5/EYjEKhQLj8ZjhcEi73WY+n1Or1TBN87bgeDwSj8fPdalUotvtslwu0TQN+Pu5p8jvAiEEh8OB0WjE+/s7hmEQjUYRQlx7LfLrLdbr9XmfTqdIKfH7/Rf9b/FJ4EPX9d+GYVCv16+e8jWGYaDr+qn8EM1mM7Pb7Trb7fbuMJ2i6zpKKQCUUg8C4N9E/tc4B4PBl3w+//oHxnLOwBxtz8kAAAAASUVORK5CYII="
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACFklEQVQ4jZWTMUgjQRSGv53doLsxQZNeuWxjG6uksdVC0EKwEgWFQELAwvLExjKQIiGkDbETRBtrC9tACIjdXiUomJAiyWx0d+eKuyynEuX+cobv/9+8eU8DaDabm8Ph8CeQBAK+lgC60Wj0bHd391prNBqbUsqrrwjf95FSous6pmmG59FodEtIKU++gt/e3lBKcXh4yOrqKt1uN7wbDocnAkh8BxcKBeLxOCsrK+zs7PxrkhDT3uz7PgDFYpHBYMDp6SkXFxfYts36+jpSSoBATEsfjUbkcjn6/T63t7fE43E6nQ6e52HbdhhgfASDIEBKiVKKu7s7bNtmY2MDIQTZbBbDMDg/Pw+b+a4Cz/MYj8fs7++zvLxMKpVicXGRp6cnstksCwsLVCoVlFLouv7ewPM8pJQcHR0xOztLOp1maWmJx8dHHh4emJubo1qtomkakUgkDDUmZb++vnJ8fIzrutzc3LC9vc3z8zPtdpv7+3tarRaWZYXJE4lJww4ODvB9n1KphOM4XF5eEovFyGQyGIZBLBb7BIcGQgheXl7QdZ1kMomUkrW1NSzLotlsvpu+j9Lq9bqjlPrR6/XI5/PMz88zHo+ZmZmhVCphmiaG8emzJvolgJ6maSQSCWq1Go7j4Lou5XL5OxigpzUajU3Xda+UUiilkFISBAGWZSHE1DkD/iyTBvB3I/9rnU3TPNvb27v+DRPm60vlFQz6AAAAAElFTkSuQmCC"
}, 138, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABDUlEQVQ4jd2TMW6DQBBFH+vdAg1QOA1tTuRcwKJGHIG4st3T0LizEH18Kzdx4RVCwgKliMFCcnCcMr/anZ15mr+acQCKolhUVfUOvAAd01LAp4hslsvlwdnv94u6rj8eFN2ViLypuq5XfykGqKpqpYF5H7DWcrlcbr0qRRAEKKV+Ysw1V8/WWuI4RkRGGdvtltlshuM4AGit8Tyvf+50f2rbFhEhSRJEBGstWZaRpukIeDweKctygAyArvv+/DzPJ32HYUjTNDebk9m/0H8CGGM4n88PC6y1GGOGu+4hvu+z2+1Gg3RPxhh83x8a0MAJeO0hT+qkXNdd91P2rERk7QBcN/KpdXZddxNF0eELyfhUxDkoad4AAAAASUVORK5CYII="
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABYUlEQVQ4jZXTTWrCQBjG8f+MJjiOEa1LF1IQV64E76ALScG1eJF24cfaO4gXaDeSkwjiygM0IBgGEky6aE1rS7S+ywd+DzMvvAJgtVq5QRA8AzUg5vpI4F1rPR+NRm9iuVy6xpjXG4jT6QRALpdLM631kzTGvNzCxhhKpRK2bWOMSfMgCF7ywMM1fDweaTabuK4LgOd5bLdbCoUCwIPkyp9/Y4BerwdAHMcAsbwHn6dcLpMkCfC50bvwer3mcDiky/xTEIYhrVYrE282G5RSaXZREEURvu8zGAwyseM4F7n8iev1OsPhkOl0+i98URCGIZ1Oh3a7Tb/fT0s8z8vEAPmfL2g0GgB0u12UUkwmE6rVaiY+F8gkSZDyex37/Z7dbketVsOyrEwMyDzgCyEeHcdhsVgQRRGWZWHb9i0M4Eul1EwIgRCCYrFIpVJBa/0fjNZ6JgC+LvKuc1ZKzcfj8dsHkpSPMXFgHGwAAAAASUVORK5CYII="
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB4ElEQVQ4jZWTv04iURSHv7lzh3Fy1ZDZisawPQmxIoSExsLSbSwJLQ+A3VppQngBWgK8gBY+AfAIRowmhM5GIUxGJpK5dxsHkN1g9leec37fPX9yLYBer3cWhuFv4Aeg2S0BvCqlriuVyq3V6XTOFovFzTemf0op9UssFovL7UQcx8zncz4+PnYCwjC8FIC/GXx/f8cYw8XFBblc7juIL/mcWWvNdDqlUChwcnICQBAEzOdzUqkUQghc18VxnE2AlolZa02tVsP31w2dnp5SLpeRUhIEAYPBgMlkwsHBwapGJDNns9kvZgDXdUmn0+zv75PJZDg/P6dYLBKG4VeA4zg8Pz/TarUwxqySw+GQdrtNt9ul3+8DUCqVUEoRx/EaALC3t4cxhkajwf39fbJlZrMZQRDQ7/d5eHgAIJ/Ps1wuAZCbLUsp8X2fu7s7np6eCMMQ13URQiClJIoiAGzbXnu276K1RgjB4+MjlmVh2zZxHHN0dMTx8TEAo9EIKeXfAK01Ukrq9fo2d6XxeMzLywuHh4crgNgsSJazLWMMw+GQwWBAOp1OwkICb8BPACEEWmuazeaXayS55KyWZSXhN+l53lUURTeJQQix+cJOKaWuLIDPH/lf39nzvOtqtXr7B1AExpQj6LP+AAAAAElFTkSuQmCC"
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABKklEQVQ4ja2TTY6CQBSEv9dxo20iMjdhDqIHkHgK4gYTFm6MF3DbgQPoPRxvMsSFLSwMzAbiIPgzyVTSSae6XnW9RQlAHMcTa20IfAAFz6GAb631yvf9vRhjJlmW7V4MdUJrPe1lWbasidPpRFmWT4dEBMdxALDWLnuAWw8vFou3fl6v17WJq6h2LopXq9/wS1v07h+PxyNxHDMYDBr85XLB9308z2vwLQPP81qiZ+hMkCRJZ4LZbPb/CdTbygdoJQCIoghrLSICQFmWjEYjwjB8bKDULYy1ls1m0xAGQdCZQFWH4XCIMaZlVqNOc3dXst1uD8AnwPV65Xw+4zgOaZo2DFzXJU1TRITxeFzTX2KMmeR5vnvVgS5oracCUDXyT3Xu9/ur+Xy+/wGfSHNWSZ5srQAAAABJRU5ErkJggg=="
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AMRDxo071CyWwAAAeBJREFUOMuVk72K4mAYhZ/8GL6gEZytrOIW/hUqqbUVQQT3BsQ72CvY6eZGxBuYKe0jWKugjRArtdhZI4QEg8k2q6vrrsN+5ct3Duc9D68EMBwOu57nfQM+ARGPnwx8TyaTL71e700aDAZd3/dfPxBxPB45nU6oqkoikQAgmUx+kX3ff/5I7LoupVKJdrtNNpvF8zxOpxOe5z2rwNMjse/7NJtNLMvC8zwKhQKj0YjFYoGu60/y9c7H4xHf9wnD8GJQLpexLOscGYBisXj+E6nXMS3LwjRN1us1URRRq9UwDIPxeEy9Xr+Y2raNpmkAqP+Kud1uMQwD27aZz+dsNpuL+W63I5VK/TYIw/Au5lnsOA6pVIrtdovjOAghLuIzUzRNYzwePyQRxzGqqt7NVQAhBJPJ5BJzv99TqVRoNBoAzOdzqtUqpmkym81Yr9cIIVAUBaXT6XwFnjRN43A4sFqtcF2XMAzJZDLk83nS6TT1eh0hBLVajcPhwG63I5FI/LjJpCgKhmEA4DgOjuOQy+VotVp3GKfTKbquI597AJAk6Wa/KIpYLpd3/VxhlFXgHfj8NwNZlu/6+QPjuzQYDLpBELzGcfyQQhiGBEGAEOLmmCSAXxf5X+es6/pLv99/+wnRjuAwDaBEiAAAAABJRU5ErkJggg=="
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AoLCyULNFXIDAAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAJASURBVDjLlZPNSiNBFIW/bgu6O21sMJpIQMKo4CIkWYqCGBAE3ZgXEF9kXOmLiC8wgquA6MKNbpSOxIWRQHARCB0SkzbSla7MwpnGHyYwd3epuqfuOXWOBnBycrLr+/5PIAEoxpcOeLZtH+3t7Z1qx8fHu4PB4NfHG4VCgdfXVx4fH8ci2bZdEoPB4CCTyaDU+8NSSrLZLP1+nyAICMMQTdMYjUZ0Oh36/X4E4Pv+gQCmNzY2GA6H0YGUEtM0WV1dxXEcwjDk5eWF29vbr1tNC0CdnZ1FgwBCCAAmJyfZ2dnh4uICz/N4e3v7ykIJgHa7ja7r5HI5lFJUKhUA8vk8nufx9PQ0VtF3KKXwfZ98Ps/MzAzpdJrl5WWurq4AMAyDpaUlHMf5BCA+NrVajbm5OYrFIo7j4LouzWYTgGQyyebmJq7rcnNzQxiGnzf4W/V6HcMwEELgum6kSSaTASCVShGPx79TAJidnWVtbY1er0en06FUKhGLxTBNk3Q6zd3dHZqmkUgkvlNIpVKsr68TBAHlchmA7e1tFhcX8X0fIQTVahXLslhYWKDRaCClfAcwTZOVlRWklJyfn0ffVS6XUUqxtbWFYRiRwI7jEIvF6Ha7CEAPw5CHhwdardZXpzE1NUUymaRWqyGEoNlsEo/HmZ+fp9vt6gJoSyl//Mv3uVyOXq/H5eUlExMTDIdDlFJks1nu7+/bumVZh+MCEwQB19fXjEajyO7VapXn52ds2z7UAP4k8r/ibFnW0f7+/ulvOQ4B+OkIi0EAAAAASUVORK5CYII="
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9wLDwoAFwjfV6IAAAG6SURBVCjPdZK/iiJBGMR/3dP2jCBqoE5qqNmAiaEP4Iss7HL3KAYLRiY+iiL4J/EBFCYwMVEQFJ2x57vgHNFbrpJuurq6+itKjcdje7/fP26326dSyohIppRCRADI90opLSJ33/e/C4XC0KRp+pEkyUAp9XYxyzJez/L1drsNAHSSJF85kbtcLhdarRbtdpvL5fLGPcRfGvB4QCmVE3S7XbrdLtfr9c31AU8rpbIsyzidThwOB+I4JooigiDAWkun0yGOY47HI6fTKR8hMyKCMYZ+v0+pVMJaS6VSeTr0ej2iKCJJEs7nM9PpFOccBiBNU47HI+12m3/h+z5hGAKwWCxI0xStNTqfaz6fM5/P+R+WyyWz2eyZgxYRtNYUi0UmkwmbzeaHaLvdMplMCIIArTUi8tcxj7tarVIsFn8IgyCgXC7zmr4BNIBzjjAMqdfrnM9n1us1AFEU0Wg0qNVq7HY7PM8D0EZEXO5qrWW1WhHHMfv9HoA4jmk2m1hrefmdU6PR6FeapoNHH3HOISL5yzjnUErhed6zPb7v/zbGmCFAkiSfImK01tlrS4wxiAgiooG7tfbbGDP8A+jp21tjVFaRAAAAAElFTkSuQmCC"
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QYZDBMrBGwJUgAAAuJJREFUOMttVL1O81gUnDm+dmykTUiI+BNSoGe1QoKvzQugFDQ8AUhbUi8lW/AINLwGBU2IhBBQhBqBvgJRBEEs/hTHis/ZIjYbvt1pfC2Nzp0zc+5hu93G3d3dSpqmfwH4QdLMDCRhZgAAkgDw7d/MSPLKOff3wsLCTx4fH6+kaXoDoFyQSUJVISL/KfArx/O8dxH5wyVJsk+ybGaak6mqVnxfX18BgJVKBZZXnORkWfabqu47EdkwM0h+vaoaABmNRjoajWRvbw8k9ejoiDIGzMxERFRVRYSquuGKW2wMOOewtrZmcRyz1+sZSYgI5+bmUKvVrF6v4+rqClmWGceGgqS5wtRcJlZXV219fZ1mpkmSSBAEUFVttVoMw5AAMBgMrNvtEkChCA4TIIm3tzeYGcwMURQhTVMAQBiGXyZ/fn5+nQu4IpHcPDw/P2MwGNjU1BQfHh6s0+kAAJvNJpaWlixJEnx8fACAAShagxSF+v2+7ezs2Pb2NsIwtOFwiHa7bXEcWxzHODs7Q5qmFgSBtVot7O7uWhzHX4pEREASJAWA5OYKACPHQeXngi9Fyp7nWeGxt7m5+aeZzUVRhJubGzw9PaHRaLBUKlmlUmGv10MURdZsNlmtVpmmKU5PT3F+fk4RMc/zaGY9p6rFyOtwOEQURSyVSmpmbDQaOj8/D5Is0vN9H9Vqlff39+r7PrMsw0QXY83OOZmdnUXeog0GAymVSuKcsyRJICJCUur1Onzfl3wwYWb/plYM5uXlJUhar9fjy8uLbW1tAQBPTk5QLpdtcXERFxcXUFUTka/U3MR0kiTSNLVOp8PRaKRhGEoeivb7fT4+PvL29hYAzPM8TjwROgDXAH4v5iJPEM45ZFmGw8NDAMD09DR83/+2DSZwLUEQHIjIu5mxeNy5QgGAmZkZ1Go1Kdr4H857EAQH7Ha76Ha7K2ma7gPYsPHG+raPimR/2UdU1eswDA+Wl5d//gM6T8wasEPinAAAAABJRU5ErkJggg=="
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9wLBggYKTUpSbQAAAJVSURBVDjLdZPLalRBEIa/qu6Zc5IJQcQ4QbwgKIqCCCrqRleC6AOIl3kAQV/BpeAu4iULVzFLQdCVGxeCC11IFPGy8IKXBHXEC8nMmZkz3eVizhwNam2a6qq/6u+/qwRgdnaWVqvF/yyEgKoiIuVdrVaj0WggMzMzZFn2T9DQkiSh2WySpilpmpaFarUafsfoXNWS/ul+d+kMIh6ImJXgGHNEHLJGFej7ZOyy+sr0g69beq1WCx/7vdOh155CBMyIMQdAxGEWGJvYRPvbe2LoIeLod5emPGOY2UURQUOvfRYRLOTEmJOOTzKx+SATmw7Q+bnAtiPn2H3yGpPbDmMWMIv0u0tnO50OAB4RZzFgGPWth1i36xjqq7Sab3j7cJaCDuv3nADg0/M7iKjrdDqkaYpiFs0CK9buZMPeBuqrAxHzDF9JBgUKTdbvPo5qBbMY6/U6MUYUQF2VDXtOLUsWVWLolQyG5+iqjWCRLMtwzuHNIs4nJOOrlyVbjCxlfe5fOYqoI+RtRBzJeL1gYYUGUDqYMfyN8TXb2X/sQhlzlRG+f3jE11f3+RPjB03lL6qYsXLjvmXDtfj5BWYBEcV7D4CKKKGX8eXl3WUalMUK30LOz4VnZWzYVBFRw5h/fJPsx/xfwKE//+QW7e/vUa0McIUpZkG1Qt5d5OWd87+ZFMDuYpPX966y8PT2n88rF8W76uilkGdTwyLvHl7n49yN38IWMyHiEHVghk/GLpEVy6S+Og0Qeu0z6qoesxjybgkW0QFtEcWs76qjl8X56ZGRERqNBr8Aj4kVcknv0xUAAAAASUVORK5CYII="
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9wKFgs1LApWJ6IAAAIKSURBVDjLlZM7S1xREMd/c865Dy+GfTSykJBOSCcpbAI2lhb7AQRF2EYxRL+E7a4g2PsdFMEurYTEysLKSgtxd0n27uvcOyn24fogkKkOZ2b+M/ObcwTg1/4+g1aL/7GwWGSpXkd+7u0xbLefOfNej0GzieY5AGIMYamEieNXIg6R0M7Nbfs03RURp6q5hCHRwsJTpAgiYlTVuyQ5snF8PGg2B4NWC5f3+9s+TRsiAoB6j0uSZ5WybhecQ0TwadoYXx8COJ+mX0WE3HvSuzsWVleJl5eJggCAvvf0Ly+5v7ggqVQwzjHOGQmIiM29JywUKK2s8KFa5frsDPP4OOJRLvNpawtbLtO5umLQbmOcs5PuHJDrcEhcqbBYqwHweXPzFfXFWo3rgwP6Dw/gXD4rgIlj/tzc8H19nd/tNox5TE2Vd4UCc2H4ahNOVRERhq0W79fW+LixAarkwyEAJghAhNuTE+5PTwmKRSY5AGZKXxWxFhsEnFeroAqqnFer2CBArEVVx1t96tC99crU2ukYau0/X6SZqD6zWQYveQCzGUZEzMuArNOZjpB1Om+0qGYWYjaZyUYRAF8aDYL5+el51jepMW3wx87Ot6zXa2iWjeBYixiDZqMYsXb0qbJsBFEElyR7Wbd7GBaLOBNFxwA+TXcVHN7nszNOhBAxiHiXJEcmio5NGLJUr/MXfYjXXyC9NRUAAAAASUVORK5CYII="
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9wKEwsVDwprgkAAAAHxSURBVDjLlZO/TipBFMZ/MzvMYvgjGmPCNr4AiQ0Fj0AHiTUPYKLv4o0m1sbKCrOFz0BHRS8dCX+XuMAOMnMLL3sFNTf3lCfz+3K+b84RAI+Pj8RxzP9ULpej1WohHh4eWC6X/wQ2mw0AnuftiCghhNZaXyZJciWEUID9DDrnAJBSSuBda32XyWTuARPHMWq9Xl8aY26EEOyDQgistamI53kkSXLz58kvAGmMuf4JNsaQzWY5Pz/n9PQ0tZEkyXWSJAAoIYS3D0spWSwW5PN56vU6QRCwXC5pt9tMp1O8T0HIz563cBzH5PN5Go0GQRDgnOPg4IByuby1kzJqH357e6NYLHJxccHR0VFqZzAY8Pr6ykeWf0vtez4+PqbZbFIqldL+eDzm5eWFOI7RWu8ISAAhBM45ZrMZ1WqVUqnEtj+bzQjDkCiK0FqnP7IjYK1FKUWz2aTT6dDr9QCIooh2u81kMiGXy6UTfbFgraVYLFKpVDg7O+Pp6QnnHN1ul8lkQqFQwFr7Bd4KSGstvu8DUCgUqNVqPD8/c3h4+BOcJqmccxulFKPRiDAMWa1WzOdzTk5O0k38ZtE224yk1vpWSokxhn6/z3A4ZL1ep8F+t6W+79/6vv9xTEqpewBjzJXWeueY9sd2zr1rre+2TKvV4jdODvduJgAq6AAAAABJRU5ErkJggg=="
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9wKGg8LDD0iC3MAAAHsSURBVDjLnZNBSxVRGIafc+a7M3ec2+Ze02gjqOEuoqJFi35IcJcFgraSFkEUBC6MQFOSVnJx229oHUGLKIokN1GJ5lWhGU8znjmnRTZ4US/Uu/w453m/9z0cBbC6ukqWZfyLkiSh3W6jOp0Oxhj+R0mSIK9G34Wlt5OpzaYUWgB3ynntcbYhyZLo2vLF92NFlmXIgSsm90sz77zH+hyNOvG2wyNKSG0235AEYAFA9ksz7bwnCkJG6yN4708EKKX49muDvCxIbTZdARQ6sD5ntD7Co2v3+ma+/3qWtXSdSEXB31mV2XtPajPmPj3lu9lEtABgneV8PMzdiTtHt3NHAZUakjA9fhvrbY+zKOEw9zH1ALrFDpNvZtja2ULX9B+rA8dQc4jnV5/0B3g8rbDJi+srp3bg8f03APiRd9kudnpmg2GTs1Gr/wbq8P0ffphjO9+uMqc241x9mIVLs6cCdKACdu0eqc3Iy5xnlx/TCptVLzNvH/SYALoyvvny1mdgzDpLK2qxW+wxXB8k1jEAxhk2zCYTZy7wxXwlLwu0Uus31q6MA8hAEC+aMp8XLXTzLqKFDbOJOyxMoxAtfPy5hihBK0VDksXqM9V0uAywX5qpmg4FcDUdHssa6Uh7nB0I4qVAyXIcx7TbbX4DeATFa3Lu/0cAAAAASUVORK5CYII="
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AMRDyITXcW7ywAAAl5JREFUOMulk01IVFEYhp/zc++dOzbSCKOSVGZBEVKU5TIMom1BEAQVVBRUuGsVBGVBEoTClFIELQIXERFBblpUq4J2BUUuDDIJamyicWauc+85p8X4M6Gt+uBsDud7eN/3+w78ZwmAAxcrVBJJoeLXL1Yo55Y6cukazUHMo6sZ9KlrU37V/DxbS1R/exoNmAVwYz+ggCSbMvlMaEYni201AF2K1blSVQz9S2LNWprDBGMFlaqmUNHDKESh7A8DyFJV9C88lqJ+FiqqwfbOMsMnEwaPQXdnRJIkFMuqf8GRBpQUEBtBcc6iFQRCUEtgZ9cvbpxpQ3lZAC5lv3I8b0gipUQDwMwlAkeVE3sqlKqO4m/Hrq0t9G5u4cf3Eu0ddcD7LyFRVMWXGCGWACIM5rhyJGZL13qME/woFFm7ZjXPXnzm3stVnN8/QXPacmu8CWE1yKWQtbXghQE7utcteg98xZPnn7j/KoexgutPNdZBk1Z4+u+QpZSQRBEfPk7Mz9stm4SW4KmVN0QDVKIUZ+9KDvW8w9c1ere2cHDfJjz9mbHXaS4fjihVA0bGJV8KPqlAYt0SwAXaoYTHgzc5jHFMfPtNX/EXvdta2bs7pjm7AYCO1inO3I4xSeAaFSjrQErINQmkELyfzvJ20tKzcYbB062LcmdmQ2ITIUE1TsE0erIOPOXw0oJ306u5cOcnR/tmyYSGm499TKzQPiaXrtUBmdDly5EYssuzIyXh03QTAw9jHBKbSDwtyKZMvpzYOiBUboQUbn6ll30mTwtwvhOglCLJhC4fem50bCANwB8V8umz0lpU8gAAAABJRU5ErkJggg=="
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9wLDwoAIcdlwjsAAAF4SURBVCjPdZI9igJBEEZfdfXMMAqigXgBcxMzz+ERJljYNRK8huCCiZGxJxEPIHiCQURQUOanpzcaUXQ7rsf3qr+S9XodlmX5lWXZt4hYoOLD894boIyi6DcIgqUtiuIrz/O5iOCcwzn3AogIqooxBoAsy+YANs/znxpqNBq0Wi2qqnpO4nQ6URQFQRAgImRZ9mNFRAHu9zuDwYDRaPSmudvt2G63VFWFMQYRUVPvVKd+esPhkH6/T5ZltUVlnwdUlePxyGq1oixLAIIgIEkSms3mYwUR4QV0ztHtdpnNZnjvH0PGmDebt8Q0TVksFhRF8UicTCao6v+gc45er8d0On1JbLfb7Pf7/0FjDOfzmc1m81Cz1jIejx89PoOm7ktE6HQ6JEny9rMi8rAAjPXeOxEhjmMOhwNpmr4cQG1yuVyI47iuw9kwDBdFUcxVldvtxvV6/dilqqKqeO+JomhhrbVLgDzPv1XVqurHIweM974Mw/DXWrv8A5FtsjaW2MNCAAAAAElFTkSuQmCC"
}, function (e, t) {
    e.exports = "data:image/gif;base64,R0lGODlhEAAQAKUxAAAAADVJYzZKZC9iyDFlzTly4j5240B240Z75Ep940D/QE6B5FaG5ViH5WKO5myU526X52WV82qZ9Xab6Hqf6XGd9X+h6Xei9n2n+ICAgJOit5alupqpvp6uw4Sl6Yam6ouq6oSr+Yuw+pC1+5a5/Jq9/aOyyKe2zJ/A/qLC/9Dg8ODg8ODo8PDw8PDw//D4///4/////////////////////////////////////////////////////////////yH5BAEKAD8ALAAAAAAQABAAAAZiwJ9wSCwaj8hkEcT8WCYPR2NhKBBBKRRpJAphLpUIgXiKmc/ml0tANMUAcED6xQoQO+i5q07kmDOAgRkrdkMbeWdqhUIab3FzfEONeS9qkYxoMGotLCqLPxoBoqOkn0qnSUEAOw=="
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QwJDgc4t1EEiQAAAcNJREFUKM+Nks1KI0EUhb++VWLATtMLhYS0/bMUxAfwAVwkzyC+hctsssoT5El8AWFAFDdCtiGRthVBDJlIg91VNYuZtDrjYs7qVt06xbnnHm80Gv2o6/rYWstnOOfwPA/nXHPneR4igtZ6qeu6Pj4/P6eu6y+PRAQR4W+ICOPxONTWWpxznJ2dkSQJxhhOT095fHxksVgQxzEA9/f39Ho9+v0+xhhk80ur1aLT6VBVFUopkiRBKYVSCq01W1tbzRn4TdRaU1UV0+mUsiy5uLjg9fWVNE0pioI8zxER8jz/ShQRgiAgDEOMMby9vbFerwmCgJOTE7IswxhDFEXN3AKglGqM2dvbY39/n7u7O+bzOSLC4eEh29vbWGsbp/XGreVyyfv7O61Wi+fnZ56enlitVnS7XdrtNkdHR9zc3Hy4uynCMCQMw6ZxcHCAc46iKEjTFIDBYND09efdGWPwfb8hrddrXl5eKMsS5xxBEDThkM9Sfd8nSRKur6+5urpCa81qteLy8hLP85jNZv9K7XQ6xHHM7e0t1lp2dnZ4eHhgd3eXKIqw1pJl2YfUjb2TyYT/hVIKbzgcLoD4u5B/V/9J0s9f2FjHAkLdHMoAAAAASUVORK5CYII="
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAjFJREFUeNqkk81rE0EYxt/Zj6SJNlvJBzkEiig0ubiJPdRDQVCkIojUW+PBg9KDJw+CQv4OIfSgR/+ABERIixCkVQgmYgwYCNFDFe0Su7tJm2x212dijKvmloEfs+/wzjvPvM8Oc12XZhkCzTikXC53ShCEy/gOA81xnG3btjutVmuSNK8+JsZYCjxDqIIalG+AhphMJm9ks9k74H4oFFLK5bKhaVodRSYFhuZHsoPp0vklv7q2EiTXsePt/d7qcDjMS+12O44ia91ul/iM+LmiKJtembbZpJ6hq6nFEPX7fUotClTa1bkSEjGWIpGIkkgkTheLxZ1CobAXCASeSJJUGQwGy8jZssRERXfPrPOT42GZXr39Ts1PnVq/f5xnkB2B3OtIjIFvKFhATw4ymQw/gCvZMqKPCPdNoT+THiBnAz1pSNh8YFnWU6/kaDRKpmlOYibvkD1/sYHctDcPh5E0zRpZlskwjEnsCEdkuxZU/GksYw6w//8PfD4f6br+F45yZWyjWAXur5mlRir4BlyBYAlx637bx9fAcq/Xqxz/+EALiWulm1fPqg/uZsjn98eb7aNVUZTzErfPO/hGLh8u8PALmrdpaTWam1PUSyvRkY18flE+HNk4tQfoNsFCLrsARmsocO/lG1O9cE6ivXdDHtfqpVskevaxcUEfCIKTYAEKwiDW1arVwYn19Ov3UuzzvlWvb99+ePh1t8P+KcDGD0ycguCB51mgy2Z9zj8FGADgHgwD6oj4yAAAAABJRU5ErkJggg=="
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9wGAwoODkBxqeUAAAFlSURBVCjPnZIxbuNADEUfRWoEGzAkNbmZDuAyQHIXAwng0oAPYF9B51GjaUcjzWyRSFCyW+3vhpxP/k9S7ve7m+f5NYTwJiIGpJwzOWcARAQRAShyznNVVZ9lWV4txvg6TdPlO8myLJgZADlnRIR5nlFVRIQQwgXApml6X0kA4zjSdR17PJ9P6rreuocQ3k1EdP9JVWmahpeXFwCGYcA596OQiKgBaVkWxnHEzNh3XzFNEyEElmWhbVtUNVnOGTOj6zqapuFfOJ/PAHjv6fuelBK2Tg/Y5K2D+R3z3iMipJQo+E/Y3tMwDH9138dWJUVRfBHneebxeOCcI8a4eVpxu91QVWKM1HWNqmJAsa5g3eNvlGXJ4XCgKDZnheWcl/W0AFJKeO/x3m/EGCPH43EvdzHn3EeM8bKeV9u29H2/Fco5czqdfryrqvowM7t+L/kNMFVNKSVSSl+aigJV3Y7cOfdpZtc/0guxqT7h+/IAAAAASUVORK5CYII="
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9wGAwoALuWcpKMAAAHHSURBVCjPdZJBSuxAEIa/6u7MMMEIQcQr9HqWWYp7mWMIyntHcSG4cuNa0J3gAQJzg5xiII4Gkkl1vYUkOIv3Qy+64Ov6q/qX5+fnxTiON33f34pIMLNkZpgZACIyHWdm43K5fMiy7DEcDoebYRjuAcZxxDmHc47T01MAPj8/SSmhqnjv6fv+HiAMw3A3QXmeU1UVMUbatmUcR87Ozmiahrqu6bqOEAJ93985EfGqSp7nbDYbYowAvL+/8/LyAkCMkc1mQ57nqCoi4p2ZJeccVVVRluU8m6qiqgCYGWVZUlUVzjnMLDkzwzk3dxIRALIsY9JUizFOIM7MKIpifnmSqs7331suiuIH5D86Pz+nbVu22+38Jb8VRIT9fn9kycy4urri+/ubj48PsixjvV4DsN/vEZEfMKVE0zTEGDEzRAQz4/r6mqIoWK1WADRNQ0ppBp2qUtc1FxcXlGV5ZOny8hKA3W5HXdeklAghOGdm6r2n6zpeX19pmubI9tTp7e2Nruvw3mNmKk9PT38Oh8O9maGqc+ROTk4A+Pr6IqVESgnvPQDL5fJvCCE8AgzDcBtCCGaWUkq0bXsU8hCCM7NxsVg8hBAe/wEV4Puq2zGzYAAAAABJRU5ErkJggg=="
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gEJDigBhEwC8wAAATtJREFUKM+F0jFLllEYxvHf+0bg3KB2lqChIYqgexAaHEUE+wC5WBBIZK3RUEHgVwiCFKSpXJP6DHGDu1JB4LEip6xoiJbz5sNT6DXe5/zPdd0XZ6ApIs7gMWYwgR28wAoOMlNXwwbN4QPGMY+zuIur+IZJPQ2b0ytMZ+Ys3mbme2xm5kU8wLtmcEhGxHpEvHaEIuJ3RCz2o87gXkQ8PYK9g6U+OIHPuPlPnEN9wlQf3MF5bEfEk8z8H3wJm93BiVLKZGvwCjZKKeewW0r5WWv9HhFjeINrtdbdruMKLuA2xvAFj3A5Ik7iJfbxsbvKEAc4jfv40aI/wzR+tSSnsBcRC6NVBr3aF1t7U22nh81pr3PtRmauDTqQ/rfqnC3geWe0PHCMRg9GxHWs/m31OLDWOoK3SilfMYdbfwCBsGMAyM9nwQAAAABJRU5ErkJggg=="
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAIAAACQKrqGAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QwJDggEH6ZkwQAAASlJREFUKM+NkT+KwkAYxd/IEENaIbUnUdKYws7CImfwEB7CI0QQFBNCSBRJ4zUs0wUlZf5N5tviy8JarLuv+g38Zni8EdvttmkaIsLvEUKMx2PZNM10OjUM44Patm2e51II8Xg88Fcsy5KmaW42m77vP3ij0Wi/30sApmnGcfxB9TyPiCQfbNt2XRfA+XxerVYADofDer3WWp9OJ6UUgEHtuu71egHo+/75fBIRERVFAYCI3tSyLJMkYU7TlOF2uzG8qbZtLxYLIgqCYLlcaq2jKGJIkkQpNXRVShVF4fs+XzsejwxhGDLUdT28qrWeTCaz2YyIrtfrfD4noizLGO73O085FKiqKggC5svlwpBlGY/P3y4BGIbhOI7+Djfj/FxXAtjtdvhHvgCz/reiTTp6cgAAAABJRU5ErkJggg=="
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAolBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgESU6AAAANXRSTlMAAQIDBAUGCQwNDxAREhMUFyApLzAxMkJHVFlebXF5e4CDm62+xcjKz9PZ3OTo6+/x9/n7/UnKJecAAAB/SURBVBgZBcGJQgEBAAXAcey6tY4KhcpVOgjv/3/NDMDob9MBAIfJ8w4AyktN6gB4WWmkBsD4u+lx3y4BeqcHPpK8wntymwLlTxdJ2gD7CkkKwOAMSQpA5xeSFIDZG2SXArCcQ57SB6QF6//L9WtRNZgcAXTn21vyOQQAzTq4A+uTC/LUhXbmAAAAAElFTkSuQmCC"
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9wCGAEcCdgs1SoAAAHeSURBVCjPVZG9a1NhGMV/7/1okqaaUMutaClqrzSttTTYpa1KpVb/Bh3ERYqomYo4dNDNqUO0IAjq0KG4Z/JbEalYB7FRGhWFeA2xuammob03ue/rkmg904Hz4zzwHJ2GDMNASgmwb2DAnrGs9pPFovsJKG/J/sEN9RyfPJJeK9zdXCvc2ZyYHEsDPf8xTRMOhxKW1THrOrc3VGlGqdKMKuXnNiyrYzYcbkk0WdFo3m9Z7Re/rcxdMr2X4mo6pACupWrC0w+oPX2XbxR//roJ5DTAHh8fnn63eGXKcx8JKZX6nv8isstvRbm6qlZ/PBAvHp6ZGhu1pwFb9PZ23XqSOXc2IpyQL33lG64YPfqYIKjz7OlhKpW6EgJRq233Tp1+fs9QUuoq8EQVF3fTIRrV6eyMAKBpPoYRIADfrwilAl0vuZWVV28KOyZObEuEzd+GLurKbNkrDg7spM+uKE1IsVGV/vkLH+4vZ9euN9/ZH4+3zn/9eEyWnUOqLYpsiyLLzrD6/D4pY7GWeaC/cVYDwDT1oXjMWMi+7vWD9ZQK1lMqu9jjx2PGgmlqQ1tZAB3QgJHkYCSTW+r2c0vdfnIwkgFGGrkO/N0hCuwGWgG7a5eRAsg79TSQAzwgD6z/AVpowc7P3/iuAAAAAElFTkSuQmCC"
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 48, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n, i, o, a) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function s(e) {
        if ((0, d["default"])(e)) return e;
        if ((0, c["default"])(e)) {
            var t = [];
            for (var n in e) e.hasOwnProperty(n) && t.push(e[n]);
            return t
        }
        return (0, f["default"])(e) ? e.split() : []
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = s;
    var l = n(i), d = r(l), u = n(o), c = r(u), p = n(a), f = r(p)
}, function (e, t, n, i) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var a = n(i), r = o(a);
    t["default"] = r["default"]
}, , function (e, t, n, i, o, a) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function s(e, t) {
        return null == e || !t && "" === e || (0, d["default"])(e) && 0 === e.length || ((0, c["default"])(e) || (0, f["default"])(e)) && 0 === e.size
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = s;
    var l = n(i), d = r(l), u = n(o), c = r(u), p = n(a), f = r(p)
}, , , , function (e, t, n, i) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function a(e) {
        return "number" == typeof e && (0, s["default"])(e)
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = a;
    var r = n(i), s = o(r)
}, , function (e, t, n, i, o) {
    "use strict";

    function a(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function r(e) {
        return (0, l["default"])(e) && !(0, u["default"])(e)
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = r;
    var s = n(i), l = a(s), d = n(o), u = a(d)
}, , function (e, t, n, i) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var a = n(i), r = o(a);
    t["default"] = r["default"]
}]));
//# sourceMappingURL=reporttable.js.map