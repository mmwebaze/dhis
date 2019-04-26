!function (t) {
    function e(n) {
        if (i[n]) return i[n].exports;
        var o = i[n] = {exports: {}, id: n, loaded: !1};
        return t[n].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
    }

    var i = {};
    return e.m = t, e.c = i, e.p = "", e(0)
}(function (t) {
    for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) switch (typeof t[e]) {
        case"function":
            break;
        case"object":
            t[e] = function (e) {
                var i = e.slice(1), n = t[e[0]];
                return function (t, e, o) {
                    n.apply(this, [t, e, o].concat(i))
                }
            }(t[e]);
            break;
        default:
            t[e] = t[t[e]]
    }
    return t
}([function (t, e, i) {
    (function (t) {
        "use strict";

        function e(t) {
            return t && t.__esModule ? t : {"default": t}
        }

        function n(t, e) {
            var i = Object.assign({}, p), n = new u.manager.UiManager(i);
            i.uiManager = n, n.applyTo((0, r["default"])(u.api)), n.preventMask = !0;
            var o = new u.manager.InstanceManager(i);
            i.instanceManager = o, o.apiResource = "chart", o.apiEndpoint = "charts", o.apiModule = "dhis-web-visualizer", o.plugin = !0, o.dashboard = chartPlugin.dashboard, o.applyTo((0, r["default"])(u.api)), n.setInstanceManager(o), o.setFn(function (t) {
                var e = function (e) {
                    var i = t.el, r = t.getResponse(), a = {legendSet: y.getLegendSetById(e), dashboard: o.dashboard},
                        s = (0, d.createChart)(r, t, i, a), l = s.chart;
                    n.reg(l, "chart"), document.getElementById(i).setViewportWidth = function (t) {
                        l.setSize(t, void 0, {duration: 100})
                    }, n.unmask()
                };
                t.doLegendSet() ? y.getLegendSetIdByDxId(t.getFirstDxId(), function (t) {
                    e(t)
                }) : e()
            }), t.loadingIndicator && n.renderLoadingIndicator(e.el), e.id ? o.getById(e.id, function (t) {
                t = new u.api.Layout(i, (0, l["default"])(e, t)), o.getReport(t)
            }) : o.getReport(new u.api.Layout(i, e))
        }

        i(78);
        var o = i(70), r = e(o), a = i(14), s = (e(a), i(293)), l = e(s), d = i(191), u = i(36), c = i(68), h = "25";
        u.api.Layout = c.Layout;
        var p = {api: u.api, init: u.init}, f = new u.config.DimensionConfig;
        p.dimensionConfig = f;
        var g = new u.config.OptionConfig;
        p.optionConfig = g;
        var m = new u.config.PeriodConfig;
        p.periodConfig = m;
        var A = new u.config.ChartConfig;
        p.chartConfig = A;
        var y = new u.manager.AppManager(p);
        p.appManager = y;
        var x = new u.manager.CalendarManager(p);
        p.calendarManager = x;
        var b = new u.manager.RequestManager(p);
        p.requestManager = b;
        var v = new u.manager.I18nManager(p);
        p.i18nManager = v;
        var w = new u.manager.SessionStorageManager(p);
        p.sessionStorageManager = w, f.setI18nManager(v), g.setI18nManager(v), m.setI18nManager(v), y.applyTo((0, r["default"])(u.api)), g.applyTo((0, r["default"])(u.api)), t.chartPlugin = new u.util.Plugin({
            refs: p,
            VERSION: h,
            renderFn: n
        })
    }).call(e, function () {
        return this
    }())
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = Array.isArray
}, [533, 188, 1], [536, 190], function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    function o(t) {
        return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    }

    function r(t, e) {
        var i = function (t, e, i) {
            if (!t || !t.length) return [];
            if ("string" == typeof t && (t = t.split("")), supportsSliceOnNodeList) return slice.call(t, e || 0, i || t.length);
            var n, o = [];
            for (e = e || 0, i = i ? i < 0 ? t.length + i : i : t.length, n = e; n < i; n++) o.push(t[n]);
            return o
        };
        if (void 0 === t || null === t) return [];
        if ((0, s["default"])(t)) return e ? Array.prototype.slice.call(t) : t;
        var n = "undefined" == typeof t ? "undefined" : o(t);
        return !t || void 0 === t.length || "string" === n || "function" === n && t.apply ? [t] : i(t)
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = r;
    var a = i(1), s = n(a)
}, [525, 1, 2, 3], , function (t, e) {
    "use strict";

    function i(t, e) {
        return Array.prototype.indexOf.call(t, e) !== -1
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = i
}, [536, 236], function (t, e) {
    t.exports = function (t) {
        return t.webpackPolyfill || (t.deprecate = function () {
        }, t.paths = [], t.children = [], t.webpackPolyfill = 1), t
    }
}, [540, 3, 23, 1, 2], function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.CHART_TYPE_GAUGE = e.CHART_TYPE_PIE = void 0, e["default"] = function (t) {
        var e = t.store, i = t.layout, n = t.el, o = t.extraConfig, a = t.extraOptions,
            l = e.generateData({seriesId: i.columns[0].dimension, categoryId: i.rows[0].dimension}),
            u = (0, E.getIsStacked)(i.type), h = {
                chart: (0, s["default"])(i, n, a.dashboard),
                title: (0, g["default"])(i, e.data.metaData, a.dashboard),
                subtitle: (0, A["default"])(l, i, e.data.metaData, a.dashboard),
                xAxis: (0, d["default"])(e, i),
                yAxis: (0, c["default"])(i, a),
                series: (0, p["default"])(l.slice(), e, i, u, a),
                legend: (0, x["default"])(i, a.dashboard),
                pane: (0, v["default"])(i.type),
                noData: (0, S["default"])(),
                credits: {enabled: !1}
            };
        return i.hideEmptyRows && (h = (0, P["default"])(h)), i.sortOrder && (h = (0, k["default"])(h, i, u)), Object.assign(h, o), (0, r["default"])(h)
    };
    var o = i(24), r = n(o), a = i(192), s = n(a), l = i(206), d = n(l), u = i(208), c = n(u), h = i(200), p = n(h),
        f = i(204), g = n(f), m = i(203), A = n(m), y = i(195), x = n(y), b = i(198), v = n(b), w = i(196), S = n(w),
        E = i(59), C = i(193), k = n(C), M = i(194), P = n(M);
    e.CHART_TYPE_PIE = "pie", e.CHART_TYPE_GAUGE = "gauge"
}, 1, [537, 50], 1, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.Dimension = void 0;
    var o, r = i(3), a = n(r), s = i(2), l = n(s), d = i(4), u = n(d), c = i(7), h = n(c), p = i(22), f = n(p),
        g = i(47), m = n(g), A = i(16), y = ["dx", "pe", "ou"];
    e.Dimension = o, e.Dimension = o = function (t) {
        var e = this;
        e.klass = o, t = (0, l["default"])(t) ? t : {}, t.items = (0, u["default"])(t.items), e.dimension = t.dimension, e.items = t.items.map(function (t) {
            return new A.Record(t).val()
        }), t.sorted && (e.sorted = t.sorted)
    }, o.prototype.log = function (t, e) {
        e || console.log(t, this)
    }, o.prototype.val = function (t) {
        return (0, a["default"])(this.dimension) ? (this.items.length || "co" === this.dimension || this.log("(Dimension) No items", t), this) : (this.log("(Dimension) Dimension is not a string", t), null)
    }, o.prototype.add = function (t) {
        var e = new A.Record(t).val();
        e && this.items.push(e)
    }, o.prototype.getRecords = function (t, e, i) {
        var n = e ? e.getRecordsByDimensionName(this.dimension) : this.items;
        return i && (n = n.slice(0)), t = (0, h["default"])(["id", "name"], t) ? t : null, t ? n.sort(function (e, i) {
            return e[t] > i[t]
        }) : n
    }, o.prototype.removeItems = function () {
        this.items = []
    }, o.prototype.isRequired = function () {
        return (0, h["default"])(y, this.dimension)
    }, o.prototype.getRecordIds = function (t, e, i) {
        var n = this.getRecords(t ? "id" : null, e, i);
        return (0, f["default"])(n, "id")
    }, o.prototype.getRecordNames = function (t, e, i) {
        return (0, f["default"])(this.getRecords(t ? "name" : null, e, i), "name")
    }, o.prototype.extendRecords = function (t) {
        var e = this, i = e.getRecords();
        return i.forEach(function (e) {
            e.setName(null, t)
        }), i
    }, o.prototype.toPlugin = function () {
        delete this.klass, this.items.forEach(function (t) {
            t.toPlugin()
        })
    }, o.prototype.toPost = function () {
        delete this.klass, this.items.forEach(function (t) {
            t.toPost()
        })
    }, o.prototype.url = function (t, e, i) {
        var n = (i ? "filter" : "dimension") + "=" + this.dimension, o = (0, m["default"])(this.getRecordIds(t, e, !0));
        return n += o.length ? ":" + o.join(";") : ""
    }
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.Record = void 0;
    var o, r = i(3), a = n(r), s = i(2), l = n(s);
    e.Record = o, e.Record = o = function (t) {
        var e = this;
        e.klass = o, t = (0, l["default"])(t) ? t : {}, e.id = t.id, e.name = t.name, e.objectName = t.objectName, (0, a["default"])(t.dimensionItemType) && (e.dimensionItemType = t.dimensionItemType)
    }, o.prototype.log = function (t, e) {
        e || console.log(t, this)
    }, o.prototype.val = function (t) {
        return this && (0, a["default"])(this.id) ? this : (this.log("(Record) Id is not a string", t), null)
    }, o.prototype.setName = function (t, e) {
        var i = this;
        i.name = i.name || t || (e ? e.metaData.names[i.id] : void 0)
    }, o.prototype.toPlugin = function () {
        delete this.klass
    }, o.prototype.toPost = function () {
        delete this.klass, delete this.name, delete this.dimensionItemType
    }
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.ResponseRowIdCombination = void 0;
    var o, r = i(3), a = n(r), s = i(1), l = n(s);
    e.ResponseRowIdCombination = o, e.ResponseRowIdCombination = o = function (t) {
        var e = this;
        e.klass = o, t = (0, l["default"])(t) ? t : (0, a["default"])(t) ? t.split("-") : null, e.ids = t || []
    }, o.prototype.add = function (t) {
        t && this.ids.push(t)
    }, o.prototype.get = function () {
        return this.ids.join("-")
    }
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.DateManager = void 0;
    var o, r = i(3), a = n(r);
    e.DateManager = o, e.DateManager = o = function () {
        this.klass = o
    }, o.toDate = function (t) {
        return (0, a["default"])(t) ? new Date(t) : t
    }, o.isValid = function (t) {
        return t = this.toDate(t), "[object Date]" === Object.prototype.toString.call(t) && "Invalid Date" !== t.toString()
    }, o.getYYYYMMDD = function (t, e) {
        if (t = this.toDate(t), !e && !o.isValid(t)) return null;
        var i = new Date(t), n = "" + (1 + i.getMonth()), r = "" + i.getDate();
        return n = 1 === n.length ? "0" + n : n, r = 1 === r.length ? "0" + r : r, i.getFullYear() + "-" + n + "-" + r
    }, o.getTimeDifference = function (t) {
        for (var e = Math.floor((new Date - new Date(t)) / 1e3); e < 0;) e += 3600;
        var i = Math.floor(e / 31536e3);
        return i > 1 ? i + " years" : (i = Math.floor(e / 2592e3), i > 1 ? i + " months" : (i = Math.floor(e / 86400), i > 1 ? i + " days" : (i = Math.floor(e / 3600), i > 1 ? i + " hours" : (i = Math.floor(e / 60), i > 1 ? i + " minutes" : Math.floor(e) + " seconds"))))
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = ["padding-right: 0", "padding-left: 5px", "border-color: transparent", "background: none", "font-size: 11px", "line-height: 13px"],
        n = ["font-size: 11px", "font-weight: bold", "color: #111", "padding-left: 5px", "padding-top: 4px", "margin-bottom: 0"],
        o = 22, r = 48, a = 7, s = 10, l = 700, d = 14, u = l - d, c = 120, h = 60, p = 8;
    e["default"] = {
        textfieldStyle: i,
        textFieldLabelStyle: n,
        toggleBtnWidth: o,
        toggleBtnMarginTop: r,
        toggleBtnMarginRight: a,
        toggleBtnMarginLeft: s,
        windowWidth: l,
        borderWidth: d,
        windowCmpWidth: u,
        lastUpdatedColWidth: c,
        buttonColWidth: h,
        paddingColWidth: p
    }
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.InterpretationWindow = void 0;
    var n = i(21), o = e.InterpretationWindow = void 0;
    e.InterpretationWindow = o = function (t, e) {
        var i = t.appManager, o = t.uiManager, r = t.instanceManager, a = t.i18nManager.get(), s = i.getApiPath(),
            l = r.apiResource, d = (r.apiEndpoint, Ext.create("Ext.form.field.TextArea", {
                cls: "ns-textarea",
                height: 130,
                width: 407,
                fieldStyle: "padding-left:3px; padding-top:3px",
                emptyText: a.write_your_interpretation + "..",
                enableKeyEvents: !0,
                listeners: {
                    keyup: function () {
                        h.xable()
                    }
                }
            })), u = new n.SharingWindow(t, e, (!0)),
            c = Ext.create("Ext.container.Container", {style: "padding-top:10px", items: u.items}),
            h = Ext.create("Ext.button.Button", {
                text: a.share, disabled: !0, xable: function () {
                    this.setDisabled(!d.getValue())
                }, handler: function () {
                    d.getValue() && Ext.Ajax.request({
                        url: encodeURI(s + "/interpretations/" + l + "/" + r.getStateFavoriteId()),
                        method: "POST",
                        params: d.getValue(),
                        headers: {"Content-Type": "text/html"},
                        success: function (t) {
                            var i = (t.getResponseHeader("location") || "").split("/").pop(), n = e.object.id,
                                a = u.getBody();
                            Ext.Ajax.request({
                                url: encodeURI(s + "/sharing?type=interpretation&id=" + i),
                                method: "POST",
                                headers: {"Content-Type": "application/json"},
                                params: Ext.encode(a),
                                callback: function () {
                                    Ext.Ajax.request({
                                        url: encodeURI(s + "/sharing?type=" + l + "&id=" + n),
                                        method: "POST",
                                        headers: {"Content-Type": "application/json"},
                                        params: Ext.encode(a),
                                        callback: function () {
                                            r.getById(null, function (t, e) {
                                                r.getReport(t, e, !1, !1, function () {
                                                    o.unmask()
                                                })
                                            })
                                        }
                                    })
                                }
                            }), d.reset(), p.destroy()
                        }
                    })
                }
            }), p = Ext.create("Ext.window.Window", {
                title: a.write_interpretation,
                layout: "fit",
                bodyStyle: "padding:4px; background-color:#fff",
                resizable: !1,
                destroyOnBlur: !0,
                modal: !0,
                items: [d, c],
                bbar: {cls: "ns-toolbar-bbar", defaults: {height: 24}, items: ["->", h]},
                listeners: {
                    show: function (t) {
                        o.setAnchorPosition(t, "favoriteButton"), o.enableRightClick(), t.hasDestroyOnBlurHandler || o.addDestroyOnBlurHandler(t)
                    }, hide: function () {
                        o.disableRightClick()
                    }
                }
            });
        return o.reg(p, "interpretationWindow"), p
    }
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.SharingWindow = void 0;
    var o = i(1), r = n(o), a = e.SharingWindow = void 0;
    e.SharingWindow = a = function (t, e, i) {
        var n, o, a, s, l, d, u, c, h, p, f = t.appManager, g = t.uiManager, m = t.instanceManager,
            A = t.i18nManager.get(), y = f.getApiPath();
        if (n = function (t, e, i) {
                var n, o, r, a, s, l;
                return n = function () {
                    var t = [{id: "r-------", name: A.can_view}, {id: "rw------", name: A.can_edit_and_view}];
                    return e && t.unshift({id: "--------", name: A.none}), t
                }, o = Ext.create("Ext.data.Store", {fields: ["id", "name"], data: n()}), r = function () {
                    var n = [];
                    return a = Ext.create("Ext.form.field.ComboBox", {
                        style: "margin-bottom:2px",
                        fieldLabel: e ? A.public_access : t.name,
                        labelStyle: "color:#333",
                        cls: "ns-combo",
                        width: 380,
                        labelWidth: 250,
                        queryMode: "local",
                        valueField: "id",
                        displayField: "name",
                        labelSeparator: null,
                        editable: !1,
                        disabled: !!i,
                        value: t.access || "rw------",
                        store: o
                    }), n.push(a), e || n.push(Ext.create("Ext.container.Container", {
                        cls: "ns-grid-row-icon-delete",
                        style: "margin-top:2px; margin-left:7px",
                        bodyStyle: "border:0 none; background:#fff",
                        overCls: "pointer",
                        width: 16,
                        height: 16,
                        listeners: {
                            render: function (t) {
                                t.getEl().on("click", function (e) {
                                    t.up("panel").destroy(), p && p.doLayout()
                                })
                            }
                        }
                    })), n
                }, s = function () {
                    return {id: t.id, name: t.name, access: a.getValue()}
                }, l = Ext.create("Ext.panel.Panel", {
                    layout: "column",
                    bodyStyle: "border:0 none",
                    getAccess: s,
                    items: r()
                })
            }, o = function () {
                var t = {
                    object: {
                        id: e.object.id,
                        name: e.object.name,
                        publicAccess: c.down("combobox").getValue(),
                        externalAccess: !!u && u.getValue()
                    }
                };
                if (d.items.items.length > 1) {
                    t.object.userGroupAccesses = [];
                    for (var i, n = 1; n < d.items.items.length; n++) i = d.items.items[n], t.object.userGroupAccesses.push(i.getAccess())
                }
                return t
            }, a = Ext.create("Ext.data.Store", {
                fields: ["id", "name"],
                proxy: {
                    type: "ajax",
                    url: encodeURI(y + "/sharing/search"),
                    extraParams: {pageSize: 50},
                    startParam: !1,
                    limitParam: !1,
                    reader: {type: "json", root: "userGroups"}
                }
            }), s = Ext.create("Ext.form.field.ComboBox", {
                valueField: "id",
                displayField: "name",
                emptyText: A.search_for_user_groups,
                queryParam: "key",
                queryDelay: 200,
                minChars: 1,
                hideTrigger: !0,
                fieldStyle: "height:26px; padding-left:6px; border-radius:1px; font-size:11px",
                style: "margin-bottom:5px",
                width: 380,
                store: a,
                listeners: {
                    beforeselect: function (t) {
                        l.enable()
                    }, afterrender: function (t) {
                        t.inputEl.on("keyup", function () {
                            l.disable()
                        })
                    }
                }
            }), l = Ext.create("Ext.button.Button", {
                text: "+",
                style: "margin-left:2px; padding-right:4px; padding-left:4px; border-radius:1px",
                disabled: !0,
                height: 26,
                handler: function (t) {
                    d.add(n({id: s.getValue(), name: s.getRawValue(), access: "r-------"})), s.clearValue(), t.disable()
                }
            }), d = Ext.create("Ext.container.Container", {bodyStyle: "border:0 none"}), e.meta.allowExternalAccess && (u = d.add({
                xtype: "checkbox",
                fieldLabel: A.allow_external_access,
                labelSeparator: "",
                labelWidth: 250,
                checked: !!e.object.externalAccess
            })), c = d.add(n({
                id: e.object.id,
                name: e.object.name,
                access: e.object.publicAccess
            }, !0, !e.meta.allowPublicAccess)), (0, r["default"])(e.object.userGroupAccesses)) for (var x, b = 0; b < e.object.userGroupAccesses.length; b++) x = n(e.object.userGroupAccesses[b]), d.add(x);
        return h = [{
            html: e.object.name,
            bodyStyle: "border:0 none; font-weight:bold; color:#333",
            style: "margin-bottom:7px"
        }, {
            xtype: "container",
            layout: "column",
            bodyStyle: "border:0 none",
            items: [s, l]
        }, {
            html: A.created_by + " " + e.object.user.name,
            bodyStyle: "border:0 none; color:#777",
            style: "margin-top:2px;margin-bottom:7px"
        }, d], i ? {
            UserGroupRow: n,
            getBody: o,
            userGroupStore: a,
            userGroupField: s,
            userGroupButton: l,
            userGroupRowContainer: d,
            externalAccess: u,
            publicGroup: c,
            items: h
        } : p = Ext.create("Ext.window.Window", {
            title: A.sharing_settings,
            bodyStyle: "padding:5px 5px 3px; background-color:#fff",
            resizable: !1,
            modal: !0,
            destroyOnBlur: !0,
            items: h,
            bbar: ["->", {
                text: A.save, handler: function () {
                    Ext.Ajax.request({
                        url: encodeURI(y + "/sharing?type=" + m.apiResource + "&id=" + e.object.id),
                        method: "POST",
                        headers: {"Content-Type": "application/json"},
                        params: Ext.encode(o()),
                        success: function () {
                            m.getById(null, function (t, e) {
                                m.getReport(t, e, !1, !1, function () {
                                    g.unmask()
                                })
                            })
                        }
                    }), p.destroy()
                }
            }],
            listeners: {
                show: function (t) {
                    var e = g.get("favoriteWindow");
                    if (e && e.rendered) {
                        var i = (e.getWidth() - t.getWidth()) / 2 + e.getPosition()[0], n = t.getPosition()[1] / 3;
                        t.setPosition(i, n), e.destroyOnBlur = !1
                    } else g.setAnchorPosition(t, "favoriteButton");
                    t.hasDestroyOnBlurHandler || g.addDestroyOnBlurHandler(t)
                }, destroy: function () {
                    var t = g.get("favoriteWindow");
                    t && (t.destroyOnBlur = !0)
                }
            }
        })
    }
}, function (t, e) {
    "use strict";

    function i(t, e) {
        var i, n, o, r = [];
        for (i = 0, n = t.length; i < n; i++) o = t[i], r.push(o[e]);
        return r
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = i
}, [531, 183], function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    function o(t) {
        var e = arguments.length <= 1 || void 0 === arguments[1] ? a["default"] : arguments[1];
        return Object.keys(t).reduce(function (i, n) {
            return e(t[n]) || (i[n] = t[n]), i
        }, {})
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = o;
    var r = i(63), a = n(r)
}, [536, 77], function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.Axis = void 0;
    var o, r = i(4), a = n(r), s = i(15);
    e.Axis = o, e.Axis = o = function (t) {
        var e = [];
        return e.klass = o, t = (0, a["default"])(t), t.forEach(function (t) {
            e.push(new s.Dimension(t).val())
        }), e.log = function (e, i) {
            i || console.log(e, this, t)
        }, e.val = function (t) {
            return this.length ? this : (this.log("(Axis) No dimensions", t), null)
        }, e.add = function (t, i) {
            var n = i ? t : new s.Dimension(t).val();
            n && e.push(n)
        }, e.clone = function () {
            return o(this)
        }, e.empty = function () {
            for (var t = e.slice(0), i = 0, n = e.length; i < n; i++) e.pop();
            return t
        }, e.getRecordIds = function (t, i) {
            var n = i ? "" : [];
            return e.forEach(function (e, o, r) {
                e.getRecordIds(t, null, !0).forEach(function (t, e, o) {
                    i ? n += t + (e !== o.length - 1 ? ", " : "") : n.push(t)
                }), i && (n += o !== r.length - 1 ? " - " : "")
            }), n
        }, e.getRecordNames = function (t, i, n) {
            var o = n ? "" : [];
            return e.forEach(function (e, r, a) {
                e.getRecordNames(t, i, !0).forEach(function (t, e, i) {
                    n ? o += t + (e !== i.length - 1 ? ", " : "") : o.push(t)
                }), n && (o += r !== a.length - 1 ? " - " : "")
            }), o
        }, e.getDimension = function (t) {
            return this.find(function (e) {
                return e.dimension === t
            })
        }, e.getDimensionNames = function () {
            var t = [];
            return this.forEach(function (e) {
                t.push(e.dimension)
            }), t
        }, e.has = function (t) {
            return !!e.getDimension(t)
        }, e.sorted = function () {
            return e.clone().sort(function (t, e) {
                return t.dimension > e.dimension
            })
        }, e.extendRecords = function (t) {
            e.forEach(function (e) {
                e.extendRecords(t)
            })
        }, e.strip = function () {
            for (var t = []; e.length > 1;) t.push(e.pop());
            return t.reverse()
        }, e.toPlugin = function () {
            delete e.klass, e.forEach(function (t) {
                t.toPlugin()
            })
        }, e
    }
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = function (t) {
        var e = t.layout, i = t.i18n, n = Ext.create("Ext.form.field.Text", {
            width: r["default"].windowCmpWidth,
            height: 45,
            style: "margin-top: 2px; margin-bottom: 0",
            fieldStyle: r["default"].textfieldStyle.join(";"),
            fieldLabel: i.name,
            labelAlign: "top",
            labelStyle: r["default"].textFieldLabelStyle.join(";"),
            labelSeparator: "",
            emptyText: "Unnamed",
            enableKeyEvents: !0,
            currentValue: "",
            value: e.name,
            setEventKeyUpHandler: function (t) {
                this.eventKeyUpHandler = t
            },
            listeners: {
                keyup: function (t, e) {
                    13 === e.keyCode && this.eventKeyUpHandler && this.eventKeyUpHandler(t, e)
                }
            }
        }), o = Ext.create("Ext.form.field.TextArea", {
            width: r["default"].windowCmpWidth,
            rows: 3,
            style: "margin-bottom: 0",
            fieldStyle: r["default"].textfieldStyle.concat(["padding-top: 5px"]).join(";"),
            fieldLabel: i.description,
            labelAlign: "top",
            labelStyle: r["default"].textFieldLabelStyle.join(";"),
            labelSeparator: "",
            emptyText: "No description (optional)",
            enableKeyEvents: !0,
            value: e.description
        }), a = Ext.create("Ext.form.field.Text", {
            width: r["default"].windowCmpWidth,
            height: 45,
            style: "margin-bottom: 0",
            fieldStyle: r["default"].textfieldStyle.join(";"),
            fieldLabel: i.title,
            labelAlign: "top",
            labelStyle: r["default"].textFieldLabelStyle.join(";"),
            labelSeparator: "",
            emptyText: "No title (optional)",
            enableKeyEvents: !0,
            currentValue: "",
            value: e.title,
            setEventKeyUpHandler: function (t) {
                this.eventKeyUpHandler = t
            },
            listeners: {
                keyup: function (t, e) {
                    13 === e.keyCode && this.eventKeyUpHandler && this.eventKeyUpHandler(t, e)
                }
            }
        });
        return {nameTextField: n, descriptionTextField: o, titleTextField: a}
    };
    var o = i(19), r = n(o)
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.FavoriteWindow = void 0;
    var o = i(29), r = i(21), a = i(44), s = i(27), l = n(s), d = i(19), u = n(d), c = e.FavoriteWindow = void 0;
    e.FavoriteWindow = c = function (t, e) {
        var i, n, s, d, c, h, p, f, g, m, A, y, x, b, v, w, S, E, C, k, M, P = t.appManager, T = t.instanceManager,
            I = t.uiManager, R = t.i18nManager.get(), L = t.uiConfig, D = P.getApiPath(),
            O = (T.apiResource, T.apiEndpoint),
            B = u["default"].windowCmpWidth - u["default"].lastUpdatedColWidth - u["default"].buttonColWidth - u["default"].paddingColWidth - 2,
            U = "id,name,lastUpdated,access,title,description",
            F = "id,displayName|rename(name),lastUpdated,access,title,description", N = "name", V = "asc", z = [],
            j = T.getStateCurrent() || {}, G = (0, l["default"])({layout: j, i18n: R}), _ = G.nameTextField,
            H = G.descriptionTextField;
        return i = function (t) {
            return V = t ? V : "asc" === V ? "desc" : "asc"
        }, n = function (t, n) {
            N = t || N;
            var o = "open" === e ? f.getValue() : null;
            return D + "/" + O + ".json?fields=" + F + (o ? "&filter=displayName:ilike:" + o : "") + "&order=" + N + ":" + i(n)
        }, s = Ext.create("Ext.data.Store", {
            fields: U.split(","),
            proxy: {type: "ajax", reader: {type: "json", root: O}, startParam: !1, limitParam: !1},
            isLoaded: !1,
            pageSize: 10,
            page: 1,
            defaultUrl: D + "/" + O + ".json?fields=" + F + "&order=name:asc",
            loadStore: function (t) {
                this.proxy.url = encodeURI(t || this.defaultUrl), this.load({
                    params: {
                        pageSize: this.pageSize,
                        page: this.page
                    }
                })
            },
            loadFn: function (t) {
                this.isLoaded ? t.call() : this.load(t)
            },
            get: function (t, e) {
                var i = this.findExact(t, e);
                return i === -1 ? null : this.getAt(i)
            },
            listeners: {
                load: function (t, e) {
                    this.isLoaded || (this.isLoaded = !0);
                    var i = t.proxy.reader.jsonData.pager;
                    x.setText("Page " + i.page + " of " + i.pageCount), A.enable(), y.enable(), 1 === i.page && A.disable(), i.page === i.pageCount && y.disable()
                }
            }
        }), c = {
            search: function (t, i) {
                var n = t, o = Ext.isString(o) ? o : n.getValue();
                if ("open" === e && 13 === i.keyCode && s.getRange().length && (M.destroy(), T.getById(s.getAt(0).data.id)), o !== n.currentValue) {
                    n.currentValue = o;
                    var r = o ? D + "/" + O + ".json?fields=" + F + (o ? "&filter=displayName:ilike:" + o : "") : null;
                    s.page = 1, s.loadStore(r)
                }
            }
        }, h = Ext.create("Ext.form.Label", {
            text: R.show_favorites,
            style: "color:#226aba",
            nextAction: "hide",
            textMap: {hide: R.hide_favorites, show: R.show_favorites},
            toggle: function () {
                var t = this;
                z.forEach(function (e) {
                    e[t.nextAction]()
                }), this.nextAction = "hide" === this.nextAction ? "show" : "hide", this.setText(this.textMap[this.nextAction])
            },
            listeners: {
                render: function (t) {
                    var e = this, i = this.getEl();
                    i.setStyle("cursor", "pointer"), i.on("click", function () {
                        e.toggle()
                    })
                }
            }
        }), p = Ext.create("Ext.container.Container", {
            width: u["default"].windowCmpWidth,
            style: "text-align:right; padding-right:7px; padding-bottom:4px",
            items: h
        }), f = Ext.create("Ext.form.field.Text", {
            width: u["default"].windowCmpWidth,
            height: 27,
            style: "margin-bottom: 1px",
            fieldStyle: u["default"].textfieldStyle.concat(["color: #333"]).join(";"),
            emptyText: R.search_for_favorites + "..",
            enableKeyEvents: !0,
            currentValue: "",
            listeners: {
                keyup: {
                    fn: function (t, e) {
                        c.search(t, e)
                    }, buffer: 100
                }
            }
        }), z.push(f), m = Ext.create("Ext.button.Button", {
            text: R.save, handler: function () {
                g()
            }
        }), g = function () {
            var t = T.getStateCurrent(), e = _.getValue(), i = H.getValue(), n = s.get("name", e), o = function () {
                M.destroy()
            }, r = function (e, i, n) {
                t.id = e || t.id, T.getById(t.id, function (t, e) {
                    T.getReport(t, e, !1, !1, function () {
                        I.unmask()
                    })
                })
            };
            t.apply({name: e, description: i}), n ? I.confirmReplace(R.save_favorite, function () {
                o(), t.id = n.data.id, t.clone().put(r, !0, !0)
            }) : (o(), t.clone().post(r, !0, !0))
        }, A = Ext.create("Ext.button.Button", {
            text: R.prev, handler: function () {
                var t = n(null, !0), e = s;
                e.page = e.page <= 1 ? 1 : e.page - 1, e.loadStore(t)
            }
        }), z.push(A), y = Ext.create("Ext.button.Button", {
            text: R.next, handler: function () {
                var t = n(null, !0), e = s;
                e.page = e.page + 1, e.loadStore(t)
            }
        }), z.push(y), x = Ext.create("Ext.form.Label", {
            cls: "ns-label-info",
            width: 300,
            height: 22
        }), z.push(x), b = (0, a.GridHeaders)({
            width: u["default"].windowCmpWidth,
            height: 21,
            direction: "asc",
            getDirection: function () {
            },
            items: [{
                text: R.name, textAlign: "left", width: B, height: 20, handler: function () {
                    var t = n("name"), e = s;
                    e.page = 1, e.loadStore(t)
                }
            }, {
                text: R.last_updated,
                textAlign: "left",
                width: u["default"].lastUpdatedColWidth,
                height: 20,
                direction: "asc",
                handler: function () {
                    var t = n("lastUpdated"), e = s;
                    e.page = 1, e.loadStore(t)
                }
            }]
        }), z.push(b), v = {
            open: function (t, e, i) {
                var n = function () {
                    var t = Ext.get(i.data.id);
                    t && (t = t.parent("td"), t.addClsOnOver("link"), t.load = function () {
                        M.destroy(), T.getById(i.data.id)
                    }, t.handler = function () {
                        T.isStateUnsaved() ? I.confirmUnsaved(R.open, function () {
                            t.load()
                        }) : t.load()
                    }, t.dom.setAttribute("onclick", "Ext.get(this).handler();"))
                };
                return Ext.defer(n, 100), '<div id="' + i.data.id + '">' + t + "</div>"
            }, saveas: function (t, e, i) {
                var n = function () {
                    var t = Ext.get(i.data.id);
                    t && (t = t.parent("td"), t.handler = function () {
                        _.setValue(i.data.name), H.setValue(i.data.description)
                    }, t.dom.setAttribute("onclick", "Ext.get(this).handler();"))
                };
                return Ext.defer(n, 100), '<div id="' + i.data.id + '">' + t + "</div>"
            }
        }, w = Ext.create("Ext.toolbar.Separator", {
            height: 20,
            style: "border-color:transparent; border-right-color:#d1d1d1; margin-right:4px"
        }), z.push(w), S = function () {
            var t = [];
            return t.push(x, "->", A, y), "saveas" === e && t.push(" ", w, " ", m), t
        }(), E = Ext.create("Ext.grid.Panel", {
            cls: "ns-grid",
            scroll: !1,
            hideHeaders: !0,
            columns: [{dataIndex: "name", sortable: !0, width: B, renderer: v[e]}, {
                dataIndex: "lastUpdated",
                sortable: !0,
                width: u["default"].lastUpdatedColWidth,
                renderer: function (t) {
                    return (t || "").substring(0, 16).split("T").join(", ")
                }
            }, {
                xtype: "actioncolumn",
                sortable: !1,
                width: u["default"].buttonColWidth,
                items: [{
                    iconCls: "ns-grid-row-icon-edit", getClass: function (t, e, i) {
                        return "tooltip-favorite-edit" + (i.data.access.update ? "" : " disabled")
                    }, handler: function (e, i, n, r, a) {
                        var l, c = this.up("grid").store.getAt(i),
                            h = a.target.x - B - u["default"].lastUpdatedColWidth - u["default"].borderWidth + 6,
                            p = a.target.y - 34,
                            f = {id: c.data.id, name: c.data.name, description: c.data.description}, g = {};
                        c.data.access.update && (l = function () {
                            s.loadStore()
                        }, g.show = function () {
                            M.destroyOnBlur = !1
                        }, g.destroy = function () {
                            M.destroyOnBlur = !0
                        }, d = (0, o.RenameWindow)(t, f, l, g), d.showAt(h, p))
                    }
                }, {
                    iconCls: "ns-grid-row-icon-sharing", getClass: function (t, e, i) {
                        return "tooltip-favorite-sharing" + (i.data.access.manage ? "" : " disabled")
                    }, handler: function (e, i) {
                        var n = this.up("grid").store.getAt(i);
                        n.data.access.manage && T.getSharingById(n.data.id, function (e) {
                            (0, r.SharingWindow)(t, e).show()
                        })
                    }
                }, {
                    iconCls: "ns-grid-row-icon-delete", getClass: function (t, e, i) {
                        return "tooltip-favorite-delete" + (i.data.access["delete"] ? "" : " disabled")
                    }, handler: function (t, e, i, n, o) {
                        var r = this.up("grid").store.getAt(e), a = r.data.id;
                        r.data.access["delete"] && I.confirmDelete(R.delete_favorite, function () {
                            T.delById(a, function () {
                                s.loadStore(), a === T.getStateFavoriteId() && T.setState()
                            }, !0, !0)
                        })
                    }
                }]
            }, {sortable: !1, width: u["default"].paddingColWidth}],
            store: s,
            listeners: {
                render: function () {
                    var t = Math.floor((I.getHeight() - 330) / L.grid_row_height);
                    this.store.pageSize = t, this.store.page = 1, this.store.loadStore(), s.on("load", function () {
                        this.isVisible() && this.fireEvent("afterrender")
                    }, this)
                }, afterrender: function () {
                    var t = function () {
                        for (var t, e = Ext.query(".tooltip-favorite-edit"), i = Ext.query(".tooltip-favorite-sharing"), n = Ext.query(".tooltip-favorite-delete"), o = 0; o < e.length; o++) {
                            var t = e[o];
                            Ext.create("Ext.tip.ToolTip", {
                                target: t,
                                html: R.rename,
                                anchor: "bottom",
                                anchorOffset: -14,
                                showDelay: 1e3
                            })
                        }
                        for (var o = 0; o < i.length; o++) t = i[o], Ext.create("Ext.tip.ToolTip", {
                            target: t,
                            html: R.share_with_other_people,
                            anchor: "bottom",
                            anchorOffset: -14,
                            showDelay: 1e3
                        });
                        for (var o = 0; o < n.length; o++) t = n[o], Ext.create("Ext.tip.ToolTip", {
                            target: t,
                            html: R.delete_,
                            anchor: "bottom",
                            anchorOffset: -14,
                            showDelay: 1e3
                        })
                    };
                    Ext.defer(t, 100)
                }, itemmouseenter: function (t, e, i) {
                    this.currentItem = Ext.get(i), this.currentItem.removeCls("x-grid-row-over")
                }, select: function () {
                    "open" === e && this.currentItem.removeCls("x-grid-row-selected")
                }, selectionchange: function () {
                    this.currentItem.removeCls("x-grid-row-focused")
                }, itemdblclick: function () {
                    "saveas" === e && g()
                }
            }
        }), z.push(E), C = {open: R.open_favorite, saveas: R.save_favorite_as}, k = function () {
            var t = [];
            return "saveas" === e && t.push(_, H, p), t.push(f, b, E), t
        }(), M = Ext.create("Ext.window.Window", {
            title: C[e],
            bodyStyle: "padding:1px; background-color:#fff",
            resizable: !1,
            modal: !0,
            width: u["default"].windowWidth,
            destroyOnBlur: !0,
            items: k,
            bbar: S,
            listeners: {
                show: function (t) {
                    var i = I.get("favoriteButton") || {};
                    i.rendered && (I.setAnchorPosition(t, i), t.hasDestroyOnBlurHandler || I.addDestroyOnBlurHandler(t)), ("open" === e ? f : _).focus(!1, 500), "saveas" === e && h.toggle()
                }, destroy: function (t) {
                    I.unreg("favoriteWindow")
                }
            }
        }), _.setEventKeyUpHandler(g), M
    }
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.RenameWindow = void 0;
    var o = i(1), r = (n(o), i(27)), a = n(r), s = i(19), l = (n(s), e.RenameWindow = void 0);
    e.RenameWindow = l = function (t, e, i, n) {
        var o = t.appManager, r = t.uiManager, s = t.instanceManager, l = t.i18nManager.get(), d = (t.uiConfig, t.api),
            u = o.getApiPath(), c = s.apiEndpoint;
        n = n || {};
        var h = (0, a["default"])({layout: e, i18n: l}), p = h.nameTextField, f = h.descriptionTextField,
            g = Ext.create("Ext.button.Button", {
                text: l.update, handler: function () {
                    var n = p.getValue(), a = f.getValue(), l = function () {
                        e.clone().put(function () {
                            i && i(), s.getById(null, function (t, e) {
                                s.getReport(t, e, !1, !1, function () {
                                    r.unmask()
                                })
                            }), A.destroy()
                        }, !0, !0)
                    };
                    if (e.put) e.apply({name: n, description: a}), l(); else {
                        var h = o.getAnalysisFields(), g = u + "/" + c + "/" + e.id + ".json?fields=" + h;
                        jQuery.getJSON(encodeURI(g), function (i) {
                            e = new d.Layout(t, i).val(), e.apply({name: n, description: a}), l()
                        })
                    }
                }
            }), m = Ext.create("Ext.button.Button", {
                text: l.cancel, handler: function () {
                    A.destroy()
                }
            }), A = Ext.create("Ext.window.Window", {
                title: id ? "Rename favorite" : "Create new favorite",
                bodyStyle: "padding:1px; background:#fff",
                resizable: !1,
                modal: !0,
                items: [p, f],
                destroyOnBlur: !0,
                bbar: [m, "->", g],
                listeners: {
                    show: function (t) {
                        var e = r.get("favoriteButton") || {};
                        e.rendered && (r.setAnchorPosition(t, e), t.hasDestroyOnBlurHandler || r.addDestroyOnBlurHandler(t)), p.focus(!1, 500), n.show && n.show()
                    }, destroy: function () {
                        n.destroy && n.destroy()
                    }
                }
            });
        return A
    }
}, function (t, e) {
    (function (t) {
        "use strict";

        function i(e) {
            return t.JSON.parse(t.JSON.stringify(e))
        }

        Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = i
    }).call(e, function () {
        return this
    }())
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var o = i(186), r = n(o);
    e["default"] = r["default"]
}, [533, 234, 12], function (t, e) {
    t.exports = function () {
        var t = [];
        return t.toString = function () {
            for (var t = [], e = 0; e < this.length; e++) {
                var i = this[e];
                i[2] ? t.push("@media " + i[2] + "{" + i[1] + "}") : t.push(i[1])
            }
            return t.join("")
        }, t.i = function (e, i) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var n = {}, o = 0; o < this.length; o++) {
                var r = this[o][0];
                "number" == typeof r && (n[r] = !0)
            }
            for (o = 0; o < e.length; o++) {
                var a = e[o];
                "number" == typeof a[0] && n[a[0]] || (i && !a[2] ? a[2] = i : i && (a[2] = "(" + a[2] + ") and (" + i + ")"), t.push(a))
            }
        }, t
    }
}, [533, 75, 14], function (t, e, i) {
    function n(t, e) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i], o = p[n.id];
            if (o) {
                o.refs++;
                for (var r = 0; r < o.parts.length; r++) o.parts[r](n.parts[r]);
                for (; r < n.parts.length; r++) o.parts.push(d(n.parts[r], e))
            } else {
                for (var a = [], r = 0; r < n.parts.length; r++) a.push(d(n.parts[r], e));
                p[n.id] = {id: n.id, refs: 1, parts: a}
            }
        }
    }

    function o(t) {
        for (var e = [], i = {}, n = 0; n < t.length; n++) {
            var o = t[n], r = o[0], a = o[1], s = o[2], l = o[3], d = {css: a, media: s, sourceMap: l};
            i[r] ? i[r].parts.push(d) : e.push(i[r] = {id: r, parts: [d]})
        }
        return e
    }

    function r(t, e) {
        var i = m(), n = x[x.length - 1];
        if ("top" === t.insertAt) n ? n.nextSibling ? i.insertBefore(e, n.nextSibling) : i.appendChild(e) : i.insertBefore(e, i.firstChild), x.push(e); else {
            if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            i.appendChild(e)
        }
    }

    function a(t) {
        t.parentNode.removeChild(t);
        var e = x.indexOf(t);
        e >= 0 && x.splice(e, 1)
    }

    function s(t) {
        var e = document.createElement("style");
        return e.type = "text/css", r(t, e), e
    }

    function l(t) {
        var e = document.createElement("link");
        return e.rel = "stylesheet", r(t, e), e
    }

    function d(t, e) {
        var i, n, o;
        if (e.singleton) {
            var r = y++;
            i = A || (A = s(e)), n = u.bind(null, i, r, !1), o = u.bind(null, i, r, !0)
        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (i = l(e), n = h.bind(null, i), o = function () {
            a(i), i.href && URL.revokeObjectURL(i.href)
        }) : (i = s(e), n = c.bind(null, i), o = function () {
            a(i)
        });
        return n(t), function (e) {
            if (e) {
                if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                n(t = e)
            } else o()
        }
    }

    function u(t, e, i, n) {
        var o = i ? "" : n.css;
        if (t.styleSheet) t.styleSheet.cssText = b(e, o); else {
            var r = document.createTextNode(o), a = t.childNodes;
            a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(r, a[e]) : t.appendChild(r)
        }
    }

    function c(t, e) {
        var i = e.css, n = e.media;
        if (n && t.setAttribute("media", n), t.styleSheet) t.styleSheet.cssText = i; else {
            for (; t.firstChild;) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(i))
        }
    }

    function h(t, e) {
        var i = e.css, n = e.sourceMap;
        n && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */");
        var o = new Blob([i], {type: "text/css"}), r = t.href;
        t.href = URL.createObjectURL(o), r && URL.revokeObjectURL(r)
    }

    var p = {}, f = function (t) {
        var e;
        return function () {
            return "undefined" == typeof e && (e = t.apply(this, arguments)), e
        }
    }, g = f(function () {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
    }), m = f(function () {
        return document.head || document.getElementsByTagName("head")[0]
    }), A = null, y = 0, x = [];
    t.exports = function (t, e) {
        e = e || {}, "undefined" == typeof e.singleton && (e.singleton = g()), "undefined" == typeof e.insertAt && (e.insertAt = "bottom");
        var i = o(t);
        return n(i, e), function (t) {
            for (var r = [], a = 0; a < i.length; a++) {
                var s = i[a], l = p[s.id];
                l.refs--, r.push(l)
            }
            if (t) {
                var d = o(t);
                n(d, e)
            }
            for (var a = 0; a < r.length; a++) {
                var l = r[a];
                if (0 === l.refs) {
                    for (var u = 0; u < l.parts.length; u++) l.parts[u]();
                    delete p[l.id]
                }
            }
        }
    };
    var b = function () {
        var t = [];
        return function (e, i) {
            return t[e] = i, t.filter(Boolean).join("\n")
        }
    }()
}, function (t, e, i) {
    var n = i(147);
    t.exports = n
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.Request = void 0;
    var o, r = i(3), a = n(r), s = i(1), l = n(s), d = i(2), u = n(d), c = i(31), h = n(c), p = i(50), f = n(p),
        g = i(4), m = n(g), A = i(7), y = n(A);
    e.Request = o, e.Request = o = function (t) {
        var e = this;
        e.klass = o, t = (0, u["default"])(t) ? t : {}, e.method = (0, a["default"])(t.method) ? t.method : "GET", e.headers = (0, u["default"])(t.headers) ? t.headers : null, e.dataType = (0, a["default"])(t.dataType) ? t.dataType : null, e.contentType = (0, a["default"])(t.contentType) ? t.contentType : null, e.success = (0, h["default"])(t.success) ? t.success : function () {
            e.defaultSuccess()
        }, e.error = (0, h["default"])(t.error) ? t.error : function () {
            e.defaultError()
        }, e.complete = (0, h["default"])(t.complete) ? t.complete : function () {
            e.defaultComplete()
        }, e.type = (0, a["default"])(t.type) ? t.type : "ajax", e.baseUrl = (0, a["default"])(t.baseUrl) ? t.baseUrl : "", e.params = (0, m["default"])(t.params), e.manager = t.manager || null, e.beforeRun = (0, h["default"])(t.beforeRun) ? t.beforeRun : null, e.defaultSuccess = function () {
            var t = this;
            t.manager && t.manager.ok(t)
        }, e.defaultError = function () {
        }, e.defaultComplete = function () {
        }
    }, o.prototype.log = function (t, e) {
        e || console.log(t, this)
    }, o.prototype.alert = function (t, e) {
        e || alert(t)
    }, o.prototype.handle = function (t, e) {
        var i, n = this.url();
        if ((0, y["default"])([413, 414], t)) if (isIE()) i = "Too many items selected (url has " + n.length + " characters). Internet Explorer accepts maximum 2048 characters."; else {
            var o = n.length > 8e3 ? "8000" : n.length > 4e3 ? "4000" : "2000";
            i = "Too many items selected (url has " + n.length + " characters). Please reduce to less than " + o + " characters."
        }
        i && (i += "\n\nHint: A good way to reduce the number of items is to use relative periods and level/group organisation unit selection modes.", this.alert(i))
    }, o.prototype.add = function (t) {
        var e = this;
        if ((0, a["default"])(t)) e.params.push(t); else if ((0, l["default"])(t)) t.forEach(function (t) {
            (0, a["default"])(t) && e.params.push(t)
        }); else if ((0, u["default"])(t)) for (var i in t) t.hasOwnProperty(i) && !(0, f["default"])(t[i]) && e.params.push(i + "=" + t[i]);
        return this
    }, o.prototype.setBaseUrl = function (t) {
        (0, a["default"])(t) && (this.baseUrl = t)
    }, o.prototype.setType = function (t) {
        (0, a["default"])(t) && (this.type = t)
    }, o.prototype.setManager = function (t) {
        this.manager = t
    }, o.prototype.setSuccess = function (t) {
        (0, h["default"])(t) && (this.success = t)
    }, o.prototype.setError = function (t) {
        (0, h["default"])(t) && (this.error = t)
    }, o.prototype.setBeforeRun = function (t) {
        (0, h["default"])(t) && (this.beforeRun = t)
    }, o.prototype.setComplete = function (t) {
        (0, h["default"])(t) && (this.complete = t)
    }, o.prototype.url = function (t) {
        return t = (0, m["default"])(t), this.baseUrl + "?" + [].concat(this.params, (0, m["default"])(t)).join("&")
    }, o.prototype.run = function (t) {
        var e = this, i = encodeURI(this.url());
        t = (0, u["default"])(t) ? t : {};
        var n = t.success || e.success, o = t.error || e.error, r = t.complete || e.complete;
        if (!e.beforeRun || e.beforeRun() !== !1) {
            if ("json" === this.type) return jQuery.getJSON(i, n).error(o).complete(r);
            var a = t.method || e.method, s = t.headers || e.headers, l = t.dataType || e.dataType,
                d = t.contentType || e.contentType, c = {};
            return c.url = i, c.method = a, c.type = a, s && (c.headers = s), l && (c.dataType = l), d && (c.contentType = d), c.success = n, c.error = o, c.complete = r, jQuery.ajax(c)
        }
    }
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.ResponseHeader = void 0;
    var o, r = i(2), a = n(r), s = i(51), l = n(s);
    e.ResponseHeader = o, e.ResponseHeader = o = function (t) {
        var e = this;
        e.klass = o, t = (0, a["default"])(t) ? t : {}, jQuery.extend(this, t), e.index
    }, o.prototype.setIndex = function (t) {
        (0, l["default"])(t) && (this.index = parseInt(t))
    }, o.prototype.getIndex = function (t) {
        return this.index
    }
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.ResponseRow = void 0;
    var o, r = i(4), a = n(r);
    e.ResponseRow = o, e.ResponseRow = o = function (t) {
        var e = (0, a["default"])(t);
        return e.klass = o, e.getAt = function (t) {
            return this[t]
        }, e.setIdCombination = function (t) {
            this.idCombination = t
        }, e.idCombination, e
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = e.Sorting = void 0;
    e.Sorting = i = function (t) {
        var e = this;
        e.id = t.id || null, e.direction = t.direction || null, e.emptyFirst = t.emptyFirst || !1;
        var i = {asc: "DESC", desc: "ASC"};
        e.getKeyMap = function () {
            return i
        }
    }, i.prototype.toggleDirection = function () {
        this.direction = this.getKeyMap()[(this.direction || "").toLowerCase()]
    }
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.AboutWindow = void 0;
    var o = i(2), r = n(o), a = e.AboutWindow = void 0;
    e.AboutWindow = a = function (t) {
        var e = t.appManager, i = t.uiManager, n = (t.instanceManager, t.i18nManager.get()), o = e.getApiPath();
        return Ext.create("Ext.window.Window", {
            title: n.about,
            bodyStyle: "background:#fff; padding:6px",
            modal: !0,
            resizable: !1,
            destroyOnBlur: !0,
            getData: function () {
                var t = this;
                Ext.Ajax.request({
                    url: encodeURI(o + "/system/info.json"), success: function (i) {
                        var o = Ext.decode(i.responseText), a = "padding:3px", s = '<div class="user-select">';
                        (0, r["default"])(o) ? (s += '<div style="' + a + '"><b>' + n.time_since_last_data_update + ": </b>" + o.intervalSinceLastAnalyticsTableSuccess + "</div>", s += '<div style="' + a + '"><b>' + n.version + ": </b>" + o.version + "</div>", s += '<div style="' + a + '"><b>' + n.revision + ": </b>" + o.revision + "</div>", s += '<div style="' + a + '"><b>' + n.username + ": </b>" + e.userAccount.username + "</div>", s += "</div>") : s += "No system info found", t.update(s)
                    }, failure: function (e) {
                        t.update(e.status + "\n" + e.statusText + "\n" + e.responseText)
                    }, callback: function () {
                        t.show(), i.enableRightClick();
                        var e = i.get("aboutButton") || {};
                        e.rendered && (i.setAnchorPosition(t, e), t.hasDestroyOnBlurHandler || i.addDestroyOnBlurHandler(t))
                    }
                })
            },
            listeners: {
                hide: function () {
                    i.disableRightClick()
                }, destroy: function () {
                    i.disableRightClick()
                }
            }
        })
    }
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.EastRegion = void 0;
    var o = i(18), r = i(20), a = i(21), s = i(29), l = i(10), d = n(l), u = e.EastRegion = void 0;
    e.EastRegion = u = function (t) {
        var e = t.uiManager, i = t.uiConfig, n = t.instanceManager, l = t.appManager, u = t.i18nManager, c = u.get(),
            h = l.getPath(), p = l.getApiPath(), f = 200, g = function (t, e, i) {
                return (i ? '<span class="bold">[</span> ' : "") + '<span class="eastPanelLink' + (e ? " bold" : "") + '">' + t + "</span>" + (i ? ' <span class="bold">]</span>' : "")
            }, m = function (e) {
                var i;
                if (n.isStateFavorite() && !n.isStateDirty()) {
                    var o = c.show_more, r = c.show_less, l = c.edit, d = function (e) {
                        var i = [];
                        void 0 == e && (e = c.no_description);
                        var a = e.length > f, d = e.substring(0, f) + " ... ";
                        if (i.push({
                                xtype: "label",
                                itemId: "descriptionLabel",
                                html: a ? d : e,
                                cls: "interpretationActions"
                            }), a) {
                            var u = e;
                            i.push({
                                xtype: "label",
                                html: g(o, !1, !0),
                                cls: "interpretationActions",
                                isShortDescriptionDisplayed: !0,
                                style: "margin: 1px 3px 0;",
                                listeners: {
                                    render: function (t) {
                                        t.getEl().on("click", function () {
                                            this.isShortDescriptionDisplayed ? (this.up("#descriptionPanel").down("#descriptionLabel").setText(u, !1), this.getEl().dom.innerHTML = g(r, !1, !0)) : (this.up("#descriptionPanel").down("#descriptionLabel").setText(d, !1), this.getEl().dom.innerHTML = g(o, !1, !0)), this.isShortDescriptionDisplayed = !this.isShortDescriptionDisplayed, this.up("#descriptionPanel").doLayout()
                                        }, t)
                                    }
                                }
                            })
                        }
                        return i.push({
                            xtype: "label",
                            html: g(l, !1, !0),
                            cls: "interpretationActions",
                            style: "margin: 1px 3px 0;",
                            listeners: {
                                render: function (e) {
                                    e.getEl().on("click", function () {
                                        (0, s.RenameWindow)(t, n.getStateFavorite()).show()
                                    }, e)
                                }
                            }
                        }), i
                    }, u = function (t) {
                        var e = c["public"] + ": ";
                        if (e += "r-------" == t.publicAccess ? c.read : "rw------" == t.publicAccess ? c.read_write : c.none, void 0 != t.userGroupAccesses) if (e += " + ", t.userGroupAccesses.length > 2) e += t.userGroupAccesses.length + " " + c.groups; else for (var i = 0; i < t.userGroupAccesses.length; i++) i > 0 && (e += ", "), e += c.group + " " + t.userGroupAccesses[i].displayName;
                        return e
                    }, h = function (t, e) {
                        return Ext.Ajax.request({
                            url: encodeURI(p + "/dataStatistics/favorites/" + e + ".json"),
                            method: "GET",
                            scope: this,
                            success: function (e) {
                                t.setValue(Ext.decode(e.responseText).views)
                            }
                        }), c.loading + ".."
                    };
                    i = [{
                        xtype: "panel",
                        itemId: "descriptionPanel",
                        bodyStyle: "border-style:none;",
                        style: "margin-bottom:5px;",
                        items: [d(e.displayDescription)]
                    }, {
                        xtype: "displayfield",
                        fieldLabel: c.owner,
                        labelStyle: "padding-top:0",
                        style: "margin-bottom:3px",
                        itemId: "owner",
                        value: void 0 != e.user ? e.user.displayName : "",
                        cls: "interpretationDetailsField"
                    }, {
                        xtype: "displayfield",
                        itemId: "created",
                        fieldLabel: c.created,
                        labelStyle: "padding-top:0",
                        style: "margin-bottom:3px",
                        value: e.created,
                        cls: "interpretationDetailsField"
                    }, {
                        xtype: "displayfield",
                        itemId: "lastUpdated",
                        fieldLabel: c.last_updated,
                        labelStyle: "padding-top:0",
                        style: "margin-bottom:3px",
                        value: e.lastUpdated,
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
                            render: function (t) {
                                h(t, e.id)
                            }
                        }
                    }, {
                        xtype: "displayfield",
                        itemId: "sharing",
                        fieldLabel: c.sharing,
                        labelStyle: "padding-top:0",
                        style: "margin-bottom:3px",
                        value: u(e) + '<span style="padding-left:10px">' + g(l, !1, !0) + "</span>",
                        cls: "interpretationDetailsField",
                        listeners: {
                            render: function (e) {
                                e.getEl().on("click", function () {
                                    n.getSharingById(n.getStateFavoriteId(), function (e) {
                                        (0, a.SharingWindow)(t, e).show()
                                    })
                                }, e)
                            }
                        }
                    }]
                } else i = [{
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
                    items: [i]
                }
            }, A = {
                xtype: "panel",
                cls: "ns-panel-title-east-default first",
                title: c.details,
                itemId: "detailsPanel",
                addAndUpdateFavoritePanel: function (t) {
                    this.removeAll(!0), this.add(m(t))
                },
                items: m()
            }, y = function (t, i) {
                var r = 3, a = function (e) {
                    var i = [];
                    i.push({
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
                                    keypress: function (t, e) {
                                        e.getKey() != e.ENTER || e.shiftKey || m(t)
                                    }
                                }
                            }, {
                                xtype: "label", html: g(c.post_comment), cls: "link", listeners: {
                                    render: function (t) {
                                        t.getEl().on("click", function () {
                                            m(this.up("[xtype='panel']").down("#commentArea"))
                                        }, t)
                                    }
                                }
                            }],
                            columnWidth: .89
                        }]
                    }), (0, d["default"])(e, "DESC", "lastUpdated");
                    for (var n = 0; n < e.length; n++) {
                        var a = e[n];
                        i.push({
                            xtype: "panel",
                            bodyStyle: "border-style:none;",
                            cls: "comment greyBackground",
                            layout: "column",
                            hidden: n > r - 1,
                            items: [{
                                xtype: "panel",
                                bodyStyle: "border-style:none",
                                items: [{
                                    xtype: "label",
                                    cls: "avatar",
                                    text: a.user.displayName.split(" ")[0][0] + a.user.displayName.split(" ")[a.user.displayName.split(" ").length - 1][0]
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
                                        html: g(a.user.displayName, !0),
                                        cls: "link bold",
                                        style: "margin-right: 7px;",
                                        listeners: {
                                            render: function () {
                                                this.getEl().on("click", function () {
                                                    window.location.href = h + "/dhis-web-dashboard-integration/profile.action?id=" + a.user.id
                                                })
                                            }
                                        }
                                    }, {xtype: "label", text: a.text}]
                                }, {
                                    xtype: "label",
                                    style: "color: #666",
                                    text: o.DateManager.getTimeDifference(a.lastUpdated) + " " + c.ago
                                }],
                                columnWidth: .89
                            }]
                        })
                    }
                    return e.length > 3 && e.length > r && i.push({
                        xtype: "panel",
                        bodyStyle: "border-style:none",
                        style: "margin-top: 1px;",
                        cls: "comment greyBackground",
                        items: [{
                            xtype: "label",
                            text: "[" + (e.length - r) + " " + c.more_comments + "]",
                            cls: "link",
                            listeners: {
                                render: function (e) {
                                    e.getEl().on("click", function () {
                                        r += 3, this.up("#interpretationPanel" + t.id).updateInterpretationPanelItems()
                                    }, e)
                                }
                            }
                        }]
                    }), i
                }, s = function (t) {
                    for (var e = l.userAccount.id, i = 0; i < t.likedBy.length; i++) if (t.likedBy[i].id == e) return !0;
                    return !1
                }, u = function (e) {
                    Ext.Ajax.request({
                        url: encodeURI(p + "/interpretations/" + t.id + ".json?fields=*,user[id,displayName],likedBy[id,displayName],comments[lastUpdated,text,user[id,displayName]]"),
                        method: "GET",
                        scope: this,
                        success: function (i) {
                            t = JSON.parse(i.responseText), e.updateInterpretationPanelItems(t)
                        }
                    })
                }, f = function () {
                    var e = this;
                    s(t) ? Ext.Ajax.request({
                        url: encodeURI(p + "/interpretations/" + t.id + "/like"),
                        method: "DELETE",
                        success: function () {
                            u(e.up("#interpretationPanel" + t.id))
                        }
                    }) : Ext.Ajax.request({
                        url: encodeURI(p + "/interpretations/" + t.id + "/like"),
                        method: "POST",
                        success: function () {
                            u(e.up("#interpretationPanel" + t.id))
                        }
                    })
                }, m = function (e) {
                    "" != e.getValue().trim() && Ext.Ajax.request({
                        url: encodeURI(p + "/interpretations/" + t.id + "/comments"),
                        method: "POST",
                        params: e.getValue(),
                        headers: {"Content-Type": "text/plain"},
                        success: function () {
                            e.reset(), u(e.up("#interpretationPanel" + t.id))
                        }
                    })
                }, A = function () {
                    for (var e = "", i = 0; i < t.likedBy.length; i++) e += t.likedBy[i].displayName + "</br>";
                    return e
                }, y = function (t, e) {
                    var i = [{
                        xtype: "panel",
                        bodyStyle: "border-style:none",
                        style: "margin-bottom: 6px;",
                        items: [{
                            xtype: "label",
                            html: g(t.user.displayName, !0),
                            style: "margin-right:7px;",
                            listeners: {
                                render: function () {
                                    var e = this.getEl();
                                    e.on("click", function () {
                                        window.location.href = h + "/dhis-web-dashboard-integration/profile.action?id=" + t.user.id
                                    })
                                }
                            }
                        }, {xtype: "label", style: "color:#666", text: o.DateManager.getYYYYMMDD(t.lastUpdated, !0)}]
                    }, {
                        xtype: "panel",
                        bodyStyle: "border-style:none",
                        style: "margin-bottom: 8px;",
                        items: [{xtype: "label", text: t.text}]
                    }, {
                        xtype: "panel",
                        bodyStyle: "border-style:none",
                        cls: "likeContainer",
                        itemId: "likePanelUnselected",
                        hidden: e,
                        items: [{
                            xtype: "label",
                            html: '<div class="thumbs_up greyBackground">' + t.likes + " " + c.people_like_this + '<span style="padding:0 5px">·</span>' + t.comments.length + " " + c.people_commented + "</div>"
                        }]
                    }, {
                        xtype: "panel",
                        bodyStyle: "border-style:none",
                        style: "margin-top: 1px;",
                        itemId: "likePanelSelected",
                        hidden: !e,
                        items: [{
                            xtype: "panel",
                            bodyStyle: "border-style:none",
                            style: "margin-bottom: 5px;",
                            items: [{
                                xtype: "label",
                                html: g(s(t) ? c.unlike : c.like),
                                style: "margin-right: 5px;",
                                listeners: {
                                    render: function (t) {
                                        t.getEl().on("click", f, this)
                                    }
                                }
                            }, {xtype: "label", text: "·", style: "margin-right: 5px;"}, {
                                xtype: "label",
                                html: g(c.comment),
                                style: "margin-right: 5px;",
                                listeners: {
                                    render: function (e) {
                                        e.getEl().on("click", function () {
                                            this.up("#interpretationPanel" + t.id).down("#commentPanel").show(), this.up("#interpretationPanel" + t.id).down("#commentArea").focus()
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
                                html: '<div class="thumbs_up greyBackground">' + g(t.likes + " " + c.people) + " " + c.like_this + "</div>",
                                listeners: {
                                    render: function (e) {
                                        t.likedBy.length > 0 && Ext.create("Ext.tip.ToolTip", {
                                            target: e.getEl(),
                                            html: A(),
                                            bodyStyle: "background-color: white;border"
                                        })
                                    }
                                }
                            }]
                        }]
                    }, {
                        xtype: "panel",
                        hidden: !e,
                        bodyStyle: "border-style:none",
                        itemId: "comments",
                        items: [a(t.comments)]
                    }];
                    return i
                }, x = {
                    xtype: "panel",
                    bodyStyle: "border-style:none;",
                    style: "padding:6px; border-bottom:1px solid #d0d0d0;",
                    cls: "clickable",
                    instanceManager: n,
                    interpretation: t,
                    displayingComments: i,
                    itemId: "interpretationPanel" + t.id,
                    updateInterpretationPanelItems: function (t) {
                        void 0 != t && (this.interpretation = t), this.removeAll(!0), this.add(y(this.interpretation, this.displayingComments)), this.displayingComments ? this.removeCls("clickable") : this.addCls("clickable")
                    },
                    expandComments: function () {
                        if (!this.displayingComments) {
                            for (var i = 0; i < this.up("#interpretationsPanel").items.items.length; i++) void 0 != this.up("#interpretationsPanel").items.items[i].interpretation && (this.up("#interpretationsPanel").items.items[i].displayingComments = this.up("#interpretationsPanel").items.items[i].id == this.id, this.up("#interpretationsPanel").items.items[i].updateInterpretationPanelItems());
                            this.up("[xtype='panel']").down("#shareInterpretation").hide(), this.up("[xtype='panel']").down("#backToToday").show(), e.updateInterpretation(t)
                        }
                    },
                    items: y(t, i),
                    listeners: {
                        render: function (t) {
                            t.body.on("click", this.expandComments, this)
                        }, scope: x
                    }
                };
                return x
            }, x = function (e, i) {
                var o = [], a = {
                    xtype: "panel",
                    bodyStyle: "border-style:none",
                    style: "padding:6px; border-width:0 0 1px 0; border-style:solid;",
                    hidden: i,
                    itemId: "shareInterpretation",
                    items: [{
                        xtype: "label",
                        html: g(c.write_interpretation),
                        cls: "interpretationActions",
                        listeners: {
                            render: function (e) {
                                e.getEl().on("click", function () {
                                    n.getSharingById(n.getStateFavoriteId(), function (e) {
                                        (0, r.InterpretationWindow)(t, e).show()
                                    })
                                }, e)
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
                    hidden: !i,
                    itemId: "backToToday",
                    items: [{
                        xtype: "label",
                        html: g("<< " + c.clear_interpretation),
                        cls: "interpretationActions link",
                        listeners: {
                            render: function (t) {
                                t.getEl().on("click", function () {
                                    n.getById(n.getStateCurrent().id)
                                }, t)
                            }
                        }
                    }]
                };
                n.isStateFavorite() && !n.isStateDirty() ? (o.push(a), void 0 == e ? o.push(s) : o.push(l)) : o.push(s);
                var d = {xtype: "panel", bodyStyle: "border-style:none", style: "border-width:0", items: o};
                return d
            }, b = {
                xtype: "panel",
                cls: "ns-panel-title-east-default",
                bodyStyle: "border-bottom-width: 0",
                title: c.interpretations,
                itemId: "interpretationsPanel",
                displayingInterpretation: !1,
                getInterpretationPanel: y,
                getTopInterpretationsPanel: x,
                addAndUpdateInterpretationsPanel: function (t) {
                    t = t || {}, this.removeAll(!0);
                    var e = t.interpretations, i = t.interpretationId;
                    if (this.add(this.getTopInterpretationsPanel(e, void 0 != i)), void 0 != e && e.length > 0) for (var n = 0; n < e.length; n++) this.add(this.getInterpretationPanel(e[n], e[n].id == i))
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
            width: i.west_width + e.getScrollbarSize().width,
            items: [A, b],
            cls: "eastPanel",
            setState: function (t) {
                this.getComponent("detailsPanel").addAndUpdateFavoritePanel(t), this.getComponent("interpretationsPanel").addAndUpdateInterpretationsPanel(t)
            },
            listeners: {
                expand: function () {
                    this.doLayout()
                }
            }
        })
    }
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.FavoriteButton = void 0;
    var n = i(28), o = i(29), r = i(21), a = i(20), s = i(172), l = i(175), d = e.FavoriteButton = void 0;
    e.FavoriteButton = d = function (t) {
        var e = (t.appManager, t.uiManager), i = t.instanceManager, d = t.i18nManager.get();
        return Ext.create("Ext.button.Button", {
            text: d.favorites, menu: {}, handler: function (u) {
                u.menu = Ext.create("Ext.menu.Menu", {
                    closeAction: "destroy",
                    shadow: !1,
                    showSeparator: !1,
                    items: function () {
                        var u = function (t) {
                            return t + "&nbsp;&nbsp;&nbsp;"
                        }, c = Ext.create("Ext.menu.Item", {
                            text: u(d.new_),
                            iconCls: "ns-menu-item-favorite-new",
                            disabled: !i.isStateCurrent(),
                            handler: function () {
                                i.isStateUnsaved() ? e.confirmUnsaved(d.new_favorite, function () {
                                    i.setState()
                                }) : i.setState()
                            }
                        });
                        e.reg(c, "newItem");
                        var h = Ext.create("Ext.menu.Item", {
                            text: u(d.open),
                            iconCls: "ns-menu-item-favorite-open",
                            handler: function () {
                                e.reg((0, n.FavoriteWindow)(t, "open"), "favoriteWindow").show()
                            }
                        });
                        e.reg(h, "openItem");
                        var p = Ext.create("Ext.menu.Item", {
                            text: u(d.save),
                            iconCls: "ns-menu-item-favorite-save",
                            disabled: !i.isStateDirty(),
                            handler: function () {
                                var t = i.getStateCurrent(), n = i.getStateFavorite();
                                return n ? (t.apply(n, ["id", "name", "description"]), void t.clone().put(function () {
                                    i.getById(t.id, function (t, n) {
                                        i.getReport(t, n, !1, !1, function () {
                                            e.unmask()
                                        })
                                    })
                                }, !0, !0)) : void f.handlerFn()
                            }
                        });
                        e.reg(p, "saveItem");
                        var f = Ext.create("Ext.menu.Item", {
                            text: u(d.save_as),
                            iconCls: "ns-menu-item-favorite-save",
                            disabled: !i.isStateCurrent(),
                            handlerFn: function () {
                                (0, n.FavoriteWindow)(t, "saveas").show()
                            },
                            handler: function () {
                                this.handlerFn()
                            }
                        });
                        e.reg(f, "saveAsItem");
                        var g = Ext.create("Ext.menu.Item", {
                            text: u(d.rename),
                            iconCls: "ns-menu-item-favorite-rename",
                            disabled: !i.isStateFavorite(),
                            handler: function () {
                                (0, o.RenameWindow)(t, i.getStateFavorite()).show()
                            }
                        });
                        e.reg(f, "renameItem");
                        var m = Ext.create("Ext.menu.Item", {
                            text: u(d.translate),
                            iconCls: "ns-menu-item-favorite-translate",
                            disabled: !i.isStateFavorite(),
                            handler: function () {
                                (0, l.TranslateWindow)(t, i.getStateFavorite()).show()
                            }
                        });
                        e.reg(f, "translateItem");
                        var A = Ext.create("Ext.menu.Item", {
                            text: u(d.share),
                            iconCls: "ns-menu-item-favorite-share",
                            disabled: function () {
                                var t = i.getStateFavorite();
                                return !(t && (!t.getAccess() || t.getAccess().manage))
                            }(),
                            handler: function () {
                                i.getSharingById(i.getStateFavoriteId(), function (e) {
                                    (0, r.SharingWindow)(t, e).show()
                                })
                            }
                        });
                        e.reg(y, "interpretationItem");
                        var y = Ext.create("Ext.menu.Item", {
                            text: u(d.write_interpretation),
                            iconCls: "ns-menu-item-favorite-interpretation",
                            disabled: !i.isStateFavorite(),
                            handler: function () {
                                i.getSharingById(i.getStateFavoriteId(), function (e) {
                                    (0, a.InterpretationWindow)(t, e).show()
                                })
                            }
                        });
                        e.reg(y, "interpretationItem");
                        var x = Ext.create("Ext.menu.Item", {
                            text: u(d.get_link),
                            iconCls: "ns-menu-item-favorite-link",
                            disabled: !i.isStateFavorite(),
                            handler: function () {
                                (0, s.LinkWindow)(t).show()
                            }
                        });
                        e.reg(x, "linkItem");
                        var b = Ext.create("Ext.menu.Item", {
                            text: u(d.delete_),
                            iconCls: "ns-menu-item-favorite-delete",
                            disabled: !i.isStateFavorite(),
                            handler: function () {
                                e.confirmDelete(d.delete_favorite, function () {
                                    i.getStateFavorite().del(function () {
                                        i.setState()
                                    })
                                })
                            }
                        });
                        return e.reg(b, "deleteItem"), [c, "-", h, "-", p, f, "-", g, m, "-", A, y, x, "-", b]
                    }(),
                    listeners: {
                        show: function () {
                            e.setAnchorPosition(u.menu, u)
                        }, hide: function () {
                            u.menu.destroy()
                        }, destroy: function (t) {
                            u.menu = null
                        }
                    }
                }), u.menu.show()
            }
        })
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = e.GridHeaders = void 0;
    e.GridHeaders = i = function (t) {
        return Ext.create("Ext.toolbar.Toolbar", jQuery.extend(t, {cls: "d2analysis-gridheaders"}))
    }
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.InterpretationItem = void 0;
    var n = i(20), o = e.InterpretationItem = void 0;
    e.InterpretationItem = o = function (t) {
        var e = t.instanceManager, i = (t.i18nManager, t.i18nManager.get());
        return Ext.create("Ext.menu.Item", {
            text: i.write_interpretation + "&nbsp;&nbsp;",
            iconCls: "ns-menu-item-tablelayout",
            disabled: !0,
            xable: function () {
                this.setDisabled(!e.isStateSaved())
            },
            handler: function () {
                (0, n.InterpretationWindow)(t).show()
            }
        })
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = e.PluginItem = void 0;
    e.PluginItem = i = function (t) {
        var e = t.appManager, i = t.instanceManager, n = t.uiManager, o = (t.i18nManager, t.i18nManager.get());
        return Ext.create("Ext.menu.Item", {
            text: o.embed_in_web_page + "&nbsp;&nbsp;",
            iconCls: "ns-menu-item-datasource",
            disabled: !0,
            xable: function () {
                this.setDisabled(!i.isStateCurrent())
            },
            handler: function () {
                var t, r, a = "", s = "v" + parseFloat(e.systemInfo.version.split(".").join("")),
                    l = i.getStateCurrent();
                a += "<html>\n<head>\n", a += '<link rel="stylesheet" href="//dhis2-cdn.org/' + s + '/ext/resources/css/ext-plugin-gray.css" />\n', a += '<script src="//dhis2-cdn.org/' + s + '/ext/ext-all.js"></script>\n', a += '<script src="//dhis2-cdn.org/' + s + '/plugin/table.js"></script>\n', a += "</head>\n\n<body>\n", a += '<div id="table1"></div>\n\n', a += "<script>\n\n", a += "Ext.onReady(function() {\n\n", a += "DHIS.getTable(" + JSON.stringify(l.toPlugin("table1"), null, 2) + ");\n\n", a += "});\n\n", a += "</script>\n\n", a += "</body>\n</html>", t = Ext.create("Ext.form.field.TextArea", {
                    width: 700,
                    height: 400,
                    readOnly: !0,
                    cls: "ns-textarea monospaced",
                    value: a
                }), r = Ext.create("Ext.window.Window", {
                    title: o.embed_in_web_page + (l.name ? '<span style="font-weight:normal">&nbsp;|&nbsp;&nbsp;' + l + "</span>" : ""),
                    layout: "fit",
                    modal: !0,
                    resizable: !1,
                    items: t,
                    destroyOnBlur: !0,
                    bbar: ["->", {
                        text: "Select", handler: function () {
                            t.selectText()
                        }
                    }],
                    listeners: {
                        show: function (t) {
                            n.setAnchorPosition(t, "shareButton"), n.enableRightClick(), t.hasDestroyOnBlurHandler || n.addDestroyOnBlurHandler(t)
                        }, hide: function () {
                            n.disableRightClick()
                        }
                    }
                }), r.show()
            }
        })
    }
}, function (t, e) {
    "use strict";

    function i(t) {
        for (var e, i = [], n = 0, o = t.length; n < o; n++) e = t[n], i.indexOf(e) === -1 && i.push(e);
        return i
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = i
}, [527, 185], function (t, e) {
    "use strict";

    function i(t) {
        return "undefined" != typeof t
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = i
}, [530, 1, 187, 189], function (t, e) {
    (function (t) {
        "use strict";

        function i(t) {
            return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
        }

        function n(e) {
            return "symbol" !== ("undefined" == typeof e ? "undefined" : i(e)) && (!isNaN(parseFloat(e)) && t.isFinite(e))
        }

        Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = n
    }).call(e, function () {
        return this
    }())
}, function (t, e) {
    "use strict";

    function i(t, e) {
        var i;
        if (t) for (i in e) void 0 === t[i] && (t[i] = e[i]);
        return t
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = i
}, function (t, e) {
    "use strict";

    function i(t, e, i, n) {
        return t.replace(new RegExp(e.replace(/([\/\,\!\\\^\jQuery\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "\\jQuery&"), n ? "gi" : "g"), "string" == typeof i ? i.replace(/\jQuery/g, "jQueryjQueryjQueryjQuery") : i)
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = i
}, function (t, e) {
    "use strict";

    function i() {
        var t = function () {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        };
        return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = i
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = function (t) {
        return (0, r["default"])(t) ? Object.assign({}, a, {text: t}) : {text: null}
    };
    var o = i(8), r = n(o),
        a = {align: "low", margin: 15, style: {color: "#222", textShadow: "0 0 #999", fontSize: "13px"}}
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = function (t, e) {
        var i = t.data.metaData, n = void 0, o = i[e.rows[0].dimension];
        return (0, r["default"])(o) && o.length && (n = [], o.forEach(function (t) {
            n.push(i.names[t])
        })), n
    };
    var o = i(12), r = n(o)
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = function (t, e) {
        var i = "";
        return (0, r["default"])(t.filters) && t.filters.forEach(function (t, n, o) {
            e[t.dimension].forEach(function (t, n, o) {
                i += e.names[t] + (n < o.length - 1 ? ", " : "")
            }), i += n < o.length - 1 ? " - " : ""
        }), i
    };
    var o = i(12), r = n(o)
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = function (t, e) {
        return t[0].data.map(function (e, i) {
            return t.reduce(function (t, e) {
                return t + e.data[i]
            }, 0)
        }).map(function (t) {
            return e && 0 === t ? null : t
        })
    }
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    function o(t) {
        return t.indexOf("stacked") !== -1 || (0, a["default"])(l, t)
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.getIsStacked = o, e["default"] = function (t) {
        return s.get(t) || {type: t.toLowerCase().replace("stacked", "")}
    };
    var r = i(61), a = n(r), s = new Map([["radar", {type: "line", polar: !0}], ["gauge", {type: "solidgauge"}]]),
        l = ["area"]
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    function o(t, e, i, n) {
        var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : d,
            r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : u,
            s = new a["default"]({data: t, error: o, warning: r}),
            c = new l["default"]({store: s, layout: e, el: i, extraOptions: n, error: o, warning: r});
        return {store: s, config: c, chart: c.createChart()}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.createChart = e.Config = e.Store = void 0;
    var r = i(217), a = n(r), s = i(212), l = n(s), d = function (t) {
        throw new Error(t)
    }, u = function (t) {
        console.log(t)
    };
    e.Store = a["default"], e.Config = l["default"], e.createChart = o, e["default"] = {
        Store: a["default"],
        Config: l["default"],
        createChart: o
    }
}, 7, [540, 8, 225, 12, 32], [530, 12, 233, 235], [527, 73], [531, 72], , , function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.Layout = void 0;
    var o = i(25), r = n(o), a = i(65), s = n(a), l = i(64), d = n(l), u = i(34), c = n(u), h = i(71), p = n(h),
        f = i(36), g = e.Layout = function (t, e, i, n) {
            var o = this;
            e = (0, c["default"])(e) ? e : {}, Object.assign(o, new f.Layout(t, e, i)), o.prototype = f.Layout.prototype, o.stripAxes(), o.type = t.chartConfig.s2c[e.type] || t.chartConfig.client[e.type] || t.chartConfig.client.column, o.showValues = (0, d["default"])(e.showData) ? e.showData : !(0, d["default"])(e.showValues) || e.showValues, o.hideEmptyRows = (0, d["default"])(e.hideEmptyRows) ? e.hideEmptyRows : !(0, d["default"])(e.hideEmptyRows) || e.hideEmptyRows, o.regressionType = (0, r["default"])(e.regressionType) ? e.regressionType : "NONE", o.completedOnly = !!(0, d["default"])(e.completedOnly) && e.completedOnly, o.targetLineValue = (0, s["default"])(e.targetLineValue) ? e.targetLineValue : null, o.targetLineTitle = (0, r["default"])(e.targetLineLabel) && !(0, p["default"])(e.targetLineLabel) ? e.targetLineLabel : (0, r["default"])(e.targetLineTitle) && !(0, p["default"])(e.targetLineTitle) ? e.targetLineTitle : null, o.baseLineValue = (0, s["default"])(e.baseLineValue) ? e.baseLineValue : null, o.baseLineTitle = (0, r["default"])(e.baseLineLabel) && !(0, p["default"])(e.baseLineLabel) ? e.baseLineLabel : (0, r["default"])(e.baseLineTitle) && !(0, p["default"])(e.baseLineTitle) ? e.baseLineTitle : null, o.sortOrder = (0, s["default"])(e.sortOrder) ? e.sortOrder : 0, o.aggregationType = (0, r["default"])(e.aggregationType) ? e.aggregationType : "DEFAULT", o.rangeAxisMaxValue = (0, s["default"])(e.rangeAxisMaxValue) ? e.rangeAxisMaxValue : null, o.rangeAxisMinValue = (0, s["default"])(e.rangeAxisMinValue) ? e.rangeAxisMinValue : null, o.rangeAxisSteps = (0, s["default"])(e.rangeAxisSteps) ? e.rangeAxisSteps : null, o.rangeAxisDecimals = (0, s["default"])(e.rangeAxisDecimals) ? e.rangeAxisDecimals : null, o.rangeAxisTitle = (0, r["default"])(e.rangeAxisLabel) && !(0, p["default"])(e.rangeAxisLabel) ? e.rangeAxisLabel : (0, r["default"])(e.rangeAxisTitle) && !(0, p["default"])(e.rangeAxisTitle) ? e.rangeAxisTitle : null, o.domainAxisTitle = (0, r["default"])(e.domainAxisLabel) && !(0, p["default"])(e.domainAxisLabel) ? e.domainAxisLabel : (0, r["default"])(e.domainAxisTitle) && !(0, p["default"])(e.domainAxisTitle) ? e.domainAxisTitle : null, o.hideLegend = !!(0, d["default"])(e.hideLegend) && e.hideLegend, o.hideTitle = !!(0, d["default"])(e.hideTitle) && e.hideTitle, o.title = (0, r["default"])(e.title) && !(0, p["default"])(e.title) ? e.title : null, o.parentGraphMap = (0, c["default"])(e.parentGraphMap) ? e.parentGraphMap : null, (0, c["default"])(e.domainAxisStyle) && (o.domainAxisStyle = e.domainAxisStyle), (0, c["default"])(e.rangeAxisStyle) && (o.rangeAxisStyle = e.rangeAxisStyle), (0, c["default"])(e.legendStyle) && (o.legendStyle = e.legendStyle), (0, c["default"])(e.seriesStyle) && (o.seriesStyle = e.seriesStyle), Object.assign(o, n), o.getRefs = function () {
                return t
            }
        };
    g.prototype = f.Layout.prototype, g.prototype.clone = function () {
        var t = this, e = this.getRefs(), i = new e.api.Layout(e, JSON.parse(JSON.stringify(t)));
        return i.setResponse(t.getResponse()), i.setAccess(t.getAccess()), i.setDataDimensionItems(t.getDataDimensionItems()), i
    }, g.prototype.toPost = function () {
        var t = this, e = t.getRefs();
        t.toPostSuper(), t.type = e.chartConfig.c2s[t.type] || t.type, t.showData = t.showValues,
            delete t.showValues, t.regression = t.showTrendLine, delete t.showTrendLine, t.targetLineLabel = t.targetLineTitle, delete t.targetLineTitle, t.baseLineLabel = t.baseLineTitle, delete t.baseLineTitle, t.domainAxisLabel = t.domainAxisTitle, delete t.domainAxisTitle, t.rangeAxisLabel = t.rangeAxisTitle, delete t.rangeAxisTitle
    }, g.prototype.doLegendSet = function () {
        return "gauge" === this.type && this.hasDimension("dx")
    }
}, function (t, e, i) {
    e = t.exports = i(33)(), e.push([t.id, "body{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.x-body,.x-btn-default-toolbar-small .x-btn-inner,.x-form-field,.x-form-item,.x-form-item-label,.x-grid-cell-inner,.x-panel-header-text-default,body{font-size:11px;font-family:Arial,Helvetica Neue,'sans-serif'!important}#init{display:table;margin:300px auto;font-size:13px;color:#444}#init .brand{font-weight:600;padding-right:5px}::-webkit-scrollbar{width:8px;height:7px;border:0 none}::-webkit-scrollbar-track:horizontal{background-color:#ddd;margin:0 2px;border-bottom:1px solid #fff}::-webkit-scrollbar-thumb:horizontal{background-color:#bbb;border-bottom:1px solid #fff}::-webkit-scrollbar-track:vertical{background-color:#e1e1e1;margin:1px 0;border-right:1px solid #fff}::-webkit-scrollbar-thumb:vertical{background-color:#bbb;border-right:1px solid #fff}.user-select{-webkit-touch-callout:text;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.x-scroller-vertical{border:0 none}.disabled{opacity:.4;cursor:default!important}.disabled-toolbar{opacity:1}.x-splitter{display:none}.fixed{position:fixed}.pointer{cursor:pointer}.text-medium{font-weight:600}.highcharts-container *{font-family:Helvetica Neue,Helvetica,Arial,Roboto,sans-serif}.spinner{width:20px;height:20px;margin:50px auto;background-color:#aaa;border-radius:100%;-webkit-animation:sk-scaleout .8s infinite ease-in-out;animation:sk-scaleout .8s infinite ease-in-out}@-webkit-keyframes sk-scaleout{0%{-webkit-transform:scale(0)}to{-webkit-transform:scale(1);opacity:0}}@keyframes sk-scaleout{0%{-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);transform:scale(1);opacity:0}}.ns-viewport-text *{padding:3px 10px;font-size:13px;color:#777}.ns-viewport-text h3{font-size:13px;font-weight:500;color:#333;padding:0 0 8px}.x-panel-body{font-size:11px;border-color:#dadada}.x-panel .x-grid-body{border-style:none}.ns-panel-title-data,.ns-panel-title-dimension,.ns-panel-title-organisationunit,.ns-panel-title-period{height:17px;background-repeat:no-repeat;padding-left:22px}.ns-panel-title-data{background-image:url(" + i(100) + ")}.ns-panel-title-period{background-image:url(" + i(133) + ")}.ns-panel-title-organisationunit{background-image:url(" + i(132) + ")}.ns-panel-title-dimension{background-image:url(" + i(101) + ")}.x-webkit .x-form-empty-field{line-height:14px}.x-form-text,textarea.x-form-field{font-size:10px}.x-form-item-label{font-size:11px;color:#111}.ns-combo .x-form-text{padding-left:5px}.ns-combo .small .x-form-field{padding-top:2px}.ns-combo input{border-radius:1px 0 0 0}.ns-trigger-filter .x-form-trigger{height:22px!important;background:url(" + i(97) + ") 0 0 no-repeat;border-top:1px solid #b5b8c8;border-right:1px solid #b5b8c8}.ns-trigger-filter-focused .x-form-trigger{border:1px solid #a1a1a1;border-left:0 none}.ns-trigger-filter .x-form-trigger-over{background:url(" + i(96) + ") 0 0 no-repeat}.x-fit-item{border-style:none}.x-boundlist-item{color:#333;padding:3px 2px 3px 4px;font-size:10px;border:1px solid transparent}.x-boundlist-item-over{background-color:#e1e1e1;border-color:#e1e1e1}.x-boundlist-selected{background-color:#d3d3d3;border-color:#d3d3d3}.ns-multiselect{color:#111}.ns-toolbar-multiselect-left .x-docked-top{border-top-left-radius:1px;border-right:0 none}.ns-toolbar-multiselect-right .x-docked-top{border-top-right-radius:1px}.ns-toolbar-multiselect-leftright .x-docked-top{border-top-left-radius:1px;border-top-right-radius:1px}.ns-toolbar-multiselect-left .ns-toolbar-multiselect-left-label,.ns-toolbar-multiselect-leftright .ns-toolbar-multiselect-leftright-label,.ns-toolbar-multiselect-right .ns-toolbar-multiselect-right-label{font-size:11px;color:#222}.ns-toolbar-multiselect-left .ns-toolbar-multiselect-left-label{padding-left:6px}.ns-toolbar-multiselect-right .ns-toolbar-multiselect-right-label{padding-right:7px}.ns-toolbar-multiselect-leftright .ns-toolbar-multiselect-leftright-label{padding-left:4px}.ns-toolbar-multiselect-left .x-boundlist-item-over,.ns-toolbar-multiselect-right .x-boundlist-item-over{background-color:transparent;border-color:transparent}.ns-toolbar-multiselect-left .x-boundlist-selected,.ns-toolbar-multiselect-right .x-boundlist-selected{background-color:#e5e5e5;border-color:#e5e5e5}.ns-toolbar-multiselect-left .x-panel-body{border-right:0 none}.x-form-cb-label-after{padding-left:1px;font-size:11px;color:#333;position:relative;top:-1px}.x-form-checkbox{background-image:url(" + i(95) + ")}.x-form-cb-wrap{padding-top:2px;line-height:12px}.ns-checkbox .x-form-item-label{padding-left:5px}.ns-checkbox .x-form-cb-label-after{margin-left:3px;font-size:11px}.x-toolbar .x-toolbar-separator-horizontal{height:15px;border-right:1px solid #f2f2f2}.x-toolbar.x-item-disabled{opacity:1}.x-toolbar-default{border-color:#dadada;background-image:none;background-color:#f6f6f6}.ns-toolbar-btn-menu{margin-top:4px}.x-menu-body{border-color:#bbb;border-radius:2px}.x-menu-item-active .x-menu-item-link{border-radius:0;border-color:#e1e1e1;background-color:#e1e1e1;background-image:none}.x-menu-body{padding:0}.x-menu-body .x-box-inner,.x-menu-item{background-color:#fafafa}.x-menu-item-link{padding:4px 5px 4px 26px}.x-menu-item-text{color:#111}.ns-menu-item-noicon .x-menu-item-link{padding-left:10px}.ns-menu-item-advanced,.ns-menu-item-datasource,.ns-menu-item-image,.ns-menu-item-scheme,.ns-menu-item-selected,.ns-menu-item-tablelayout,.ns-menu-item-unselected{padding-left:18px}.ns-menu-item-image{background-image:url(" + i(105) + ")}.ns-menu-item-tablelayout{background-image:url(" + i(107) + ")}.ns-menu-item-datasource{background-image:url(" + i(104) + ")}.ns-menu-item-advanced{background-image:url(" + i(103) + ")}.ns-menu-item-scheme{background-image:url(" + i(106) + ")}.ns-menu-item-selected{background-image:url(" + i(94) + ")}.ns-menu-item-unselected{background-image:url(" + i(93) + ")}.ns-btn-menu{margin-top:2px}.ns-menu-item-favorite-new{background-image:url(" + i(112) + ")}.ns-menu-item-favorite-open{background-image:url(" + i(113) + ")}.ns-menu-item-favorite-save{background-image:url(" + i(116) + ")}.ns-menu-item-favorite-restore{background-image:url(" + i(115) + ")}.ns-menu-item-favorite-rename{background-image:url(" + i(114) + ")}.ns-menu-item-favorite-share{background-image:url(" + i(117) + ")}.ns-menu-item-favorite-interpretation{background-image:url(" + i(110) + ")}.ns-menu-item-favorite-link{background-image:url(" + i(111) + ")}.ns-menu-item-favorite-delete{background-image:url(" + i(109) + ")}.ns-menu-item-favorite-translate{background-image:url(" + i(118) + ")}.x-btn-arrow{background-image:url(" + i(83) + ")!important}.x-btn-default-toolbar-small,.x-btn-default-toolbar-small-over,.x-btn-default-toolbar-small-pressed{border-radius:1px}.x-btn-default-toolbar-small-over,.x-btn-default-toolbar-small-pressed{border-color:#bbb}.x-btn-default-toolbar-small-icon button{width:32px!important}.x-btn-default-toolbar-small-icon .x-btn-icon{width:32px;height:32px}.x-btn-default-small{border-radius:1px}.x-btn-default-toolbar-small-pressed{border-color:#bbb;background-image:none;background-color:#d6d6d6;background-image:-webkit-gradient(linear,50% 0,50% 100%,color-stop(0,#d1d1d1),color-stop(100%,#e5e5e5));background-image:-webkit-linear-gradient(top,#d1d1d1,#e5e5e5);background-image:linear-gradient(top,#d1d1d1,#e5e5e5)}.ns-button-icon-type-column{background:url(" + i(99) + ") no-repeat}.ns-button-icon-type-columnstacked{background:url(" + i(98) + ") no-repeat}.ns-button-icon-type-bar{background:url(" + i(91) + ") no-repeat}.ns-button-icon-type-barstacked{background:url(" + i(90) + ") no-repeat}.ns-button-icon-type-line{background:url(" + i(129) + ") no-repeat}.ns-button-icon-type-area{background:url(" + i(82) + ") no-repeat}.ns-button-icon-type-pie{background:url(" + i(134) + ") no-repeat}.ns-button-icon-type-radar{background:url(" + i(135) + ") no-repeat}.ns-button-icon-type-gauge{background:url(" + i(120) + ") no-repeat}.ns-button-icon-gear{width:22px!important;height:22px!important;background:url(" + i(121) + ") no-repeat}.ns-button-icon-table{background:url(" + i(137) + ") no-repeat}.ns-button-icon-chart{background:url(" + i(92) + ") no-repeat}.ns-button-icon-map{background:url(" + i(130) + ") no-repeat}.ns-button-icon-arrowleft{background:url(" + i(84) + ") no-repeat}.ns-button-icon-arrowleftdouble{background:url(" + i(85) + ") no-repeat}.ns-button-icon-arrowlefttriple{background:url(" + i(86) + ") no-repeat;width:26px!important}.ns-button-icon-arrowright{background:url(" + i(87) + ") no-repeat}.ns-button-icon-arrowrightdouble{background:url(" + i(88) + ") no-repeat}.ns-button-icon-arrowrighttriple{background:url(" + i(89) + ") no-repeat;width:26px!important}.ns-button-icon-search{background:url(" + i(136) + ") 1px 1px no-repeat}.ns-button-icon-nodeselectchild{background:url(" + i(131) + ') 1px 1px no-repeat}.ns-button-organisationunitselection .x-btn-center{width:18px!important}.ns-button-icon.x-btn-default-toolbar-small-disabled{-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=25)";opacity:.25}.x-tip{border-radius:2px;padding:1px 4px;border:1px solid #111;background-color:#111}.x-tip .x-tip-body{font-size:10px;color:#fff;-webkit-text-stroke:.2px #fff}.x-tip-anchor{border-top-color:#111}.x-mask-msg{padding:0;border:0 none;background-image:none;background-color:transparent}.x-mask-msg div{background-position:11px}.x-mask-msg .x-mask-loading{border:0 none;background-color:#000;color:#fff;border-radius:2px;padding:12px 14px 12px 30px;opacity:.65}.x-grid-row-selected .x-grid-cell{background-color:#eaeaea!important;border-style:solid;border-color:transparent}.ns-grid-row-icon-dashboard,.ns-grid-row-icon-delete,.ns-grid-row-icon-edit,.ns-grid-row-icon-overwrite,.ns-grid-row-icon-sharing{width:16px;height:16px;cursor:pointer}.ns-grid-row-icon-edit{background:url(' + i(124) + ") no-repeat}.ns-grid-row-icon-overwrite{background:url(" + i(125) + ") no-repeat;margin-left:4px}.ns-grid-row-icon-sharing{background:url(" + i(126) + ") no-repeat;margin-left:4px}.ns-grid-row-icon-dashboard{background:url(" + i(122) + ") no-repeat;margin-left:4px}.ns-grid-row-icon-delete{background:url(" + i(123) + ") no-repeat;margin-left:4px}.ns-grid-row-icon-disabled img.ns-grid-row-icon-dashboard,.ns-grid-row-icon-disabled img.ns-grid-row-icon-sharing{cursor:pointer!important}.ns-grid .x-grid-cell-inner,.ns-grid .x-grid-cell-inner *{font-size:11px!important}.ns-grid .x-grid-cell-inner{padding-top:3px;padding-bottom:3px}.ns-grid .x-column-header-text{color:#333}.ns-grid .x-grid-header-ct{border-bottom-width:1px!important;border-bottom-color:#d6d6d6}.ns-grid .x-grid-body{border:1px solid #d6d6d6;border-top:0 none!important}.ns-grid .x-grid-dirty-cell{background-image:none}.ns-grid .x-grid-row{vertical-align:middle}.ns-grid .x-grid-row .x-grid-cell{border-top:0 none}.ns-grid .link,.ns-grid .link *{cursor:pointer;cursor:hand;color:#001eff;text-decoration:underline}.x-window .x-window-header-text-default{font-size:10px;text-transform:uppercase;text-align:center;color:#444;padding-left:8px;padding-top:1px}.ns-window-title-favorite{padding-left:19px;background-image:url(" + i(119) + ")}.ns-window-title-interpretation{padding-left:19px;background-image:url(" + i(127) + ")}.ns-window-title-datatable{padding-left:19px;background-image:url(" + i(102) + ")}.ns-window-title-messagebox{padding-left:16px;background-position-y:1px}.ns-window-title-messagebox.error{background-image:url(" + i(108) + ")}.ns-window-title-messagebox.warning{background-image:url(" + i(139) + ")}.ns-window-confirm-list .x-panel-body{color:#444;font-size:10px;border-style:none}.ns-label-period-heading,.ns-label-period-heading-options{font-size:11px;font-weight:700;color:#333;line-height:18px}.ns-label-period-heading-options{background-color:#e1e1e1;padding:1px 5px;border-radius:2px}.ns-label-info{font-size:10px!important;color:#666;padding-left:4px;height:22px;line-height:21px}.ns-textfield-alt1 .x-form-field,.ns-textfield .x-form-field{height:26px;padding-left:4px;border-radius:1px;font-size:11px;color:#333}.ns-textfield .x-form-item-label{padding-left:5px;line-height:20px}.ns-textfield-alt1 .x-form-item-label{padding-left:5px;line-height:8px}.x-tree-icon-leaf{background-image:url(" + i(128) + ")}.ns-tree.x-tree-panel .x-grid-row .x-grid-cell-inner{height:17px;font-size:10px}.ns-tree .x-grid-row-selected .x-grid-cell,.ns-tree .x-grid-row-selected .x-grid-rowwrap-div{background-color:#e0e0e0;border-radius:2px 2px 2px 2px}.ns-tree .x-grid-cell{border-radius:2px 2px 2px 2px}#treepanel-contextmenu{border-radius:3px;border:1px solid #ddd}.ns-statusbar .x-panel-body-default{padding:5px 0 0 6px;border:0 none;background-color:transparent;color:#111;vertical-align:top;font-size:10px;line-height:14px}.ns-accordion .x-accordion-item .x-accordion-hd{padding:6px 5px 4px 8px;border:0 none;cursor:pointer;border-radius:0;background-image:none;background-color:#e0e0e0;background-image:-webkit-gradient(linear,50% 0,50% 100%,color-stop(0,#dedede),color-stop(100%,#e6e6e6))!important;background-image:-webkit-linear-gradient(top,#ddd,#e6e6e6)!important;background-image:linear-gradient(top,#ddd,#e6e6e6)!important}.ns-accordion .collapsed .x-accordion-hd{padding-bottom:5px!important}.ns-accordion .x-accordion-item{border-radius:1px;border:1px solid #c5c5c5;border-bottom:0 none}.ns-accordion .ns-accordion-last{border:1px solid #c5c5c5}.ns-accordion .x-accordion-hd .x-panel-header-text{font-weight:700;cursor:pointer}.ns-accordion .x-accordion-body{padding:1px;border-top:1px solid #c5c5c5!important}.ns-accordion .x-accordion-hd-sibling-expanded{-o-box-shadow:none;box-shadow:none}.ns-accordion .ns-toolbar-multiselect-left,.ns-accordion .ns-toolbar-multiselect-right{margin-bottom:0}.ns-accordion .ns-combo .x-form-text,.ns-accordion .ns-combo .x-form-trigger{height:24px;padding-top:1px}.ns-accordion .ns-combo .x-form-item-label{padding:4px 0 0}.ns-accordion .x-component.x-panel-header-text-container.x-box-item.x-component-default{width:100%!important}.ns-textarea .x-form-field{font-size:11px;line-height:14px!important}.ns-textarea.monospaced textarea{font-family:Monospace,Consolas,Courier New,Courier\\ 10 Pitch!important;padding:4px;border:0 none}.ns-chart-tips{border-radius:2px;padding:1px 4px 2px;border:2px solid #777;background-color:#f1f1f1}.ns-chart-tips .x-tip-body{background-color:#f1f1f1;font-size:13px;font-weight:400;color:#444;-webkit-text-stroke:0}.legend3Lines .x-legend .x-legend-items{display:inline-block!important}.legend3Lines .x-legend .x-legend-item{float:left!important;width:205px!important;overflow:hidden}.legend3Lines .x-legend{height:110px!important;width:400px!important}.x-tip,.x-tip-body,.x-tip-body span{width:auto!important;background-color:grey!important;border:0}.eastPanel .clickable,.eastPanel .clickable div,.eastPanel .clickable label{cursor:pointer!important}.eastPanel .thumbs_up{background-image:url(" + i(138) + ");background-position:5px 5px;padding:7px 25px;background-repeat:no-repeat}.eastPanel .greyBackground,.eastPanel .greyBackground div{background-color:#efefef}.eastPanel .comment{padding:5px;margin-top:1px}.eastPanel .eastPanelLink{cursor:pointer;color:#3162c5}.eastPanel .eastPanelLink:hover{color:#1c3974}.eastPanel .bold{font-weight:700}.eastPanel .interpretationActions{line-height:16px}.eastPanel .interpretationDetailsField{white-space:nowrap;font-weight:700;line-height:18px}.eastPanel .avatar{height:30px;width:30px;border-radius:50%;display:inline-block;background-color:#bdbdbd;text-align:center;line-height:30px;font-size:14px;color:#000;font-weight:700}.eastPanel .commentArea textarea{margin-bottom:5px;font-size:12px}.ns-panel-title-east-default .x-panel-header{background:#e6e6e6;border-top-width:0;border-left-width:0;box-shadow:none;-webkit-box-shadow:none;padding-top:8px;padding-bottom:7px;padding-left:7px}.ns-panel-title-east-default.first .x-panel-header{border-top-width:1px}.ns-panel-title-east-default .x-panel-body{border-left:0}", ""])
}, [525, 14, 34, 25], [530, 14, 74, 76], function (t, e) {
    (function (t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = Number.isFinite || function (e) {
            return "number" == typeof e && t.isFinite(e)
        }
    }).call(e, function () {
        return this
    }())
}, function (t, e) {
    function i(t) {
        return t === !0 || t === !1 || n(t) && a.call(t) == o
    }

    function n(t) {
        return !!t && "object" == typeof t
    }

    var o = "[object Boolean]", r = Object.prototype, a = r.toString;
    t.exports = i
}, function (t, e, i) {
    (function (t, i) {
        function n(t) {
            return function (e) {
                return t(e)
            }
        }

        function o(t, e) {
            return null == t ? void 0 : t[e]
        }

        function r(t) {
            var e = !1;
            if (null != t && "function" != typeof t.toString) try {
                e = !!(t + "")
            } catch (i) {
            }
            return e
        }

        function a(t) {
            return z.call(t)
        }

        function s(t) {
            return f(t) && Z(t) == A
        }

        function l(t) {
            if (!p(t) || u(t)) return !1;
            var e = h(t) || r(t) ? j : E;
            return e.test(c(t))
        }

        function d(t, e) {
            var i = o(t, e);
            return l(i) ? i : void 0
        }

        function u(t) {
            return !!F && F in t
        }

        function c(t) {
            if (null != t) {
                try {
                    return N.call(t)
                } catch (e) {
                }
                try {
                    return t + ""
                } catch (e) {
                }
            }
            return ""
        }

        function h(t) {
            var e = p(t) ? z.call(t) : "";
            return e == g || e == m
        }

        function p(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
        }

        function f(t) {
            return !!t && "object" == typeof t
        }

        var g = "[object Function]", m = "[object GeneratorFunction]", A = "[object Map]", y = "[object Object]",
            x = "[object Promise]", b = "[object Set]", v = "[object WeakMap]", w = "[object DataView]",
            S = /[\\^jQuery.*+?()[\]{}|]/g, E = /^\[object .+?Constructor\]jQuery/,
            C = "object" == typeof t && t && t.Object === Object && t,
            k = "object" == typeof self && self && self.Object === Object && self,
            M = C || k || Function("return this")(), P = "object" == typeof e && e && !e.nodeType && e,
            T = P && "object" == typeof i && i && !i.nodeType && i, I = T && T.exports === P, R = I && C.process,
            L = function () {
                try {
                    return R && R.binding("util")
                } catch (t) {
                }
            }(), D = L && L.isMap, O = Function.prototype, B = Object.prototype, U = M["__core-js_shared__"],
            F = function () {
                var t = /[^.]+jQuery/.exec(U && U.keys && U.keys.IE_PROTO || "");
                return t ? "Symbol(src)_1." + t : ""
            }(), N = O.toString, V = B.hasOwnProperty, z = B.toString,
            j = RegExp("^" + N.call(V).replace(S, "\\jQuery&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "jQuery1.*?") + "jQuery"),
            G = d(M, "DataView"), _ = d(M, "Map"), H = d(M, "Promise"), W = d(M, "Set"), Y = d(M, "WeakMap"), X = c(G),
            q = c(_), Q = c(H), K = c(W), J = c(Y), Z = a;
        (G && Z(new G(new ArrayBuffer(1))) != w || _ && Z(new _) != A || H && Z(H.resolve()) != x || W && Z(new W) != b || Y && Z(new Y) != v) && (Z = function (t) {
            var e = z.call(t), i = e == y ? t.constructor : void 0, n = i ? c(i) : void 0;
            if (n) switch (n) {
                case X:
                    return w;
                case q:
                    return A;
                case Q:
                    return x;
                case K:
                    return b;
                case J:
                    return v
            }
            return e
        });
        var jQuery = D ? n(D) : s;
        i.exports = jQuery
    }).call(e, function () {
        return this
    }(), i(9)(t))
}, function (t, e) {
    function i(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }

    t.exports = i
}, function (t, e, i) {
    (function (t, i) {
        function n(t) {
            return function (e) {
                return t(e)
            }
        }

        function o(t, e) {
            return null == t ? void 0 : t[e]
        }

        function r(t) {
            var e = !1;
            if (null != t && "function" != typeof t.toString) try {
                e = !!(t + "")
            } catch (i) {
            }
            return e
        }

        function a(t) {
            return z.call(t)
        }

        function s(t) {
            if (!p(t) || u(t)) return !1;
            var e = h(t) || r(t) ? j : E;
            return e.test(c(t))
        }

        function l(t) {
            return f(t) && Z(t) == b
        }

        function d(t, e) {
            var i = o(t, e);
            return s(i) ? i : void 0
        }

        function u(t) {
            return !!F && F in t
        }

        function c(t) {
            if (null != t) {
                try {
                    return N.call(t)
                } catch (e) {
                }
                try {
                    return t + ""
                } catch (e) {
                }
            }
            return ""
        }

        function h(t) {
            var e = p(t) ? z.call(t) : "";
            return e == g || e == m
        }

        function p(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
        }

        function f(t) {
            return !!t && "object" == typeof t
        }

        var g = "[object Function]", m = "[object GeneratorFunction]", A = "[object Map]", y = "[object Object]",
            x = "[object Promise]", b = "[object Set]", v = "[object WeakMap]", w = "[object DataView]",
            S = /[\\^jQuery.*+?()[\]{}|]/g, E = /^\[object .+?Constructor\]jQuery/,
            C = "object" == typeof t && t && t.Object === Object && t,
            k = "object" == typeof self && self && self.Object === Object && self,
            M = C || k || Function("return this")(), P = "object" == typeof e && e && !e.nodeType && e,
            T = P && "object" == typeof i && i && !i.nodeType && i, I = T && T.exports === P, R = I && C.process,
            L = function () {
                try {
                    return R && R.binding("util")
                } catch (t) {
                }
            }(), D = L && L.isSet, O = Function.prototype, B = Object.prototype, U = M["__core-js_shared__"],
            F = function () {
                var t = /[^.]+jQuery/.exec(U && U.keys && U.keys.IE_PROTO || "");
                return t ? "Symbol(src)_1." + t : ""
            }(), N = O.toString, V = B.hasOwnProperty, z = B.toString,
            j = RegExp("^" + N.call(V).replace(S, "\\jQuery&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "jQuery1.*?") + "jQuery"),
            G = d(M, "DataView"), _ = d(M, "Map"), H = d(M, "Promise"), W = d(M, "Set"), Y = d(M, "WeakMap"), X = c(G),
            q = c(_), Q = c(H), K = c(W), J = c(Y), Z = a;
        (G && Z(new G(new ArrayBuffer(1))) != w || _ && Z(new _) != A || H && Z(H.resolve()) != x || W && Z(new W) != b || Y && Z(new Y) != v) && (Z = function (t) {
            var e = z.call(t), i = e == y ? t.constructor : void 0, n = i ? c(i) : void 0;
            if (n) switch (n) {
                case X:
                    return w;
                case q:
                    return A;
                case Q:
                    return x;
                case K:
                    return b;
                case J:
                    return v
            }
            return e
        });
        var jQuery = D ? n(D) : l;
        i.exports = jQuery
    }).call(e, function () {
        return this
    }(), i(9)(t))
}, function (t, e) {
    function i(t) {
        return !!t && "object" == typeof t
    }

    function n(t) {
        return "string" == typeof t || !s(t) && i(t) && a.call(t) == o
    }

    var o = "[object String]", r = Object.prototype, a = r.toString, s = Array.isArray;
    t.exports = n
}, function (t, e, i) {
    var n = i(69);
    "string" == typeof n && (n = [[t.id, n, ""]]);
    i(35)(n, {});
    n.locals && (t.exports = n.locals)
}, , , , function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEAElEQVR42s2XbWxTVRjH/+eeu7a3ydYVur6sjjK6uenaYtnoyOi6qSHMyGQIMZJgNIERSfwiETqGRglEO5H4yQ9ESUwUP5gA29Cp3xYlRKPCYMki8QOJCUtMFgPdur7s9l6f225diWOjpNs8yblvvbe/3/Oc55zcy7DKjf1vBHp6el6IRCKDqyJA8DraHaX+IUncWg2BI7Srp/4HCZxecYFZiXME319swIWQ8WkIbGL3cGx0RQUutjhKIcx8JFmt3VKFtan97PC1FRO41OzeBiH1qeu5F12eg2Ho7JUPnG1FFbjk95eCa1Gv7fa/1cusjVsAVQUrL19cIBwOn2OMBUmg7lHh/b6tAUr5167O7a6GQ4dQIknZHzSBNWuWNwP9T2zTU+SjTScO1zqfac1Ac12DWCzLKzBQ33ncHnrqVOCDw/fD5wRsFcsnMOje6+ISG2v/6oRRsq2dBWNeIJGC4HYuo0D1axfrDnbsqn11+3/hKRmIJiBsWr90EdIu2NfXV1ARXq56o8NYZRoKffEm4yU8C1VmBZIEn0pljoXAuuJn4LL9mJ6qfnTzmZdrrc01uchVhQ5iBE/ISCgMY3ERN+I634FOU3FXwm+s7x23hapPNb7fNQ9PKohH0xiJCrg+LeK2XILHHRycqRu72ww3iybwreWMS9CpY61f7qXCK6V0K7g1oWLgb44/UxxPPsbRtJ7DU8mhFxmmU4pgM3G1aAJDlk/6a/b5dm54aSOlWsHoJHB6XMQrQT0C1VnoXC1qIyIwVSiThAcLPGwRDhnPu2ncdxsdhkjLxx1MEDlGYkBknOHoDgMaKGIlbwlQMrWowm4SHq0Iv+PfE1BuB8v0Nr1FV2X2mOHa4UbZhnJcn1JxclzBsU4JDU6eg2qhKnSSmYVxetFwFCDwg/iTT5WVI2AKAXlVubcMZo8J5gYzjA4p98i1qTTevSOjd6cBHqeYg2c6beIzWbgm419XgMAvvpteW7DihtlTxiS7YcG31t8I3nsngbe7JHidPA8MyHRwl8DTqfn7W9y8sCGYuaCSP8T8G7UI/6JqvxqVcXYihXd26QkuZsBpAqfphskEMnDtPL89W88LWwlJIEn/p7sdT+Pq3TR+JuivkzIEI8NmqvIuvw51dp4BaRHfi2fBM+mFIc97C8hAKBz1VUvC71f+kUXVQOmrEdHsFtHoElFZLlCkBKXNvUR2jGmpz2RhsbZnUwECW09GvXsCupEtNVxwEjChrao0IDEa01hSxVQyO75LQfPbvmaxsBr4/Ec5ITPoHx6xeDvQWqDAZ8NynAQMxRJ4vU3M//4YzP/4uU9goYdVVQ3S++KVYl2bbQNzn4FLfpxqM4Rmx/5iXFs0A6vV/gVNzBY/AtLbZQAAAABJRU5ErkJggg=="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9wIFAoyLJQcQLkAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAATklEQVQY08XNsQnAQAxD0X+QUVx7gFvDAxmv6Nq7OFWOQMiViUrxhOC3DIDMfAWqCsBxFRHRVbWAiODu47HMTMys55xtZr17WXiL7vibnCFkHelcbNvXAAAAAElFTkSuQmCC"
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AMdDAU5FCvBmQAAAKlJREFUOMtjYBj+QFle3lBJTj4QlzwTXs1yilYMDIznmBgZBciwWcFBSV7hv6KsXDHJmhXl5Z2U5RX+K8kpRpGsWUlO3kdRVu6/srwCUZpZ0AUYGRmTGBgYnzD/ZtpOjAEYgfjhz58QRoZ/F/+y/rslLysnTnb0KcorzFKWV3ijJC+nQYkhS5XlFT4rycmp4FLDjM+ADx8/rBPi52dgYGT0eP/x49ZhmlcASpkjnx2uzJ4AAAAASUVORK5CYII="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AMdDAADr1DsbgAAAP1JREFUOMvdk71KQ0EQhc8slsHGYOXumb2jCFoY7AWr3DqFCCJYpxMLbSxUfBXfQHwBfQQFEUS5PoS/2bW5QS2CW2e6gfnOYf6A6Y7Kxx0LrMe5kYsVdet3jZsERx9rkXyRBe8tvALIQxZ0C5x124LmiuyPYaO+Rerpv3AMsd/Cmy28ZNSk1LMCZw5auAYAU64b9TVS9ycxf2YgTvYgaPKnXAMARnkXwEhyuioSCL3VQQIaN4M7AHh8aQ4kpyMRd28MvfL1US8t6FNc0FkAMB+OjfwwhrVikej1xoI+z1fe/YhoMnK56A46nNvIwG3ny5207ZxLSkNkHE7Zv3wDP0BEJhOixVsAAAAASUVORK5CYII="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAQCAYAAAAbBi9cAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AMeChwOIa4e0gAAAQtJREFUOMvlkj9Kg0EQxd8slsFGsfLbN/uNImhhsBeskjqFCCJY24mFNhYqXsUbiBfQIyiIIEo8hH+za5PE1Zg9gL7yN7zHm9kF/pfqKmyaZztnRs7V1PVxzP0MCVVoi6SzJHjNDIuA3CXBdIllTXTDvKaabOUGo74E6nGJfTXxodUPWcsM80aNSj0psawJO/2Q4V1MuWLU50DdLbGBHACIk20IuuldLoeTXtoC0JMUL4osD/LNpU4Eum4CN4PB/VN3T1I8EHG3Rt8cx35/duq5eX0Iszo5XKfyh0a+Gf1yiY0evdIr8/o4U1fuu1GjkQvj2Mg/anBqNQHXjQ93lK15KjHuIGG/xP6oPgFIPWmq9LOmhgAAAABJRU5ErkJggg=="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AMdDAcNB6lXrgAAAL1JREFUOMvdkKEOAjEQRLd3aNKe722vlQSHIXwACkfweBSaXwIHf0CCIcHgCAQEBtH2HIguigRxyVEcPDnZ2cwMwM+TVokacZQJQda5W92DpEqkACIQ7Q1i66sErvTbjPMHEMwF5yvr/fWrfloWYyMVacw7UQle2NLtBG+eibFlxvnaen/8aIN3WJpsEoI7A+hFV0CJbYOKdK5m0eYCi75BFTTiJN4ssWtQBZOrad1to7I3gwEjNjxcTgv4f56mOTVLblp90AAAAABJRU5ErkJggg=="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AMdDAA4HlsFSgAAARVJREFUOMvdULFKA0EUnN2kEry3FwtBuX2b3ULE2ko/QbBOoZBv8Cds/AYrIWIRSxFtRVKlVBBD0ig2dxvBwkTXIpcQ4cRr9XUzMPNmBvjzV5kHTpuGUvSaee8nuL4bU7Seen/3k4GcByFgWUI8GtY2Z8aAaDvmrVIJ0mF2W1uMFqQUx6So1Rv0OzWKuwG4VBF1s6G/L9XLaX3o2HzUmTmvtmM1h6IklSKD1PurJaJ3IdAiRe3eoH8zTRITdVLvHwo3+LYHxDmCkBJyDwCq47drAfEiIPd/rWC12XRsgk10c8YxPznmi3JibUY20QcAsLa6onLxWRnxhmPzORVvR1HVan4u9XliwCc20bOOjvnIMZ/if98XVR9SfNJ0yW0AAAAASUVORK5CYII="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAQCAYAAAAbBi9cAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AMeCh401ZSl4gAAASJJREFUOMvl0L9KA0EQx/HfXgwBiyPETryZ2Z2YIiAKtgqxiaCFjWDhA4j4CjYGbH0DBcEHsAiIpfoUgnIEW8EYBP+AtxZKitxl7XXKT/HdmQX+9ijxcT2hnd/MEXccSXduadGMNkoAUKtWb2Gii1ocfz4Nnq/HWXkqvqpk0eF7/3WzP+ifFG/FNK/MH5rQfsjsjMRKkjqW7vgTmRaUJasT7YXs+3RJLcvNysa6KYw5ooayvGhCRyGz0zKpLD1lOQeAaDTkTbQGoISSOQuZKftleJDP/GluG2HpKEumzLMhc8wtJfGWbDsXsSwHyvKmzM2QOea2kniXyFY+IrL782ozZMNNErs62pgAAOPxCPjGfa93N/yDYqt4b7bTh/QS/2e+APm4a833Y1DsAAAAAElFTkSuQmCC"
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sKCg8qOaoSvZQAAAMjSURBVFjD7Ve/i1xVFP7Oj/vrvfueSxIxxQYLQXshqTalVSCSYYvo2mhAO7uw8yfsYmdnsaVYGCYmkCIYIkgKNcRGiGiTZhWbkDS6kJn3rsXMe5m32WRmx5AByYXDzBwu95z7ne9+5wzwck1Wv98/u4y4PAn+FoB3J58vPgEAZwEgpfTCUaCpEuw83KseVTU+bhIzqgjBI9tnNbvdy3fN8ZBl+krMURYRZZGjjBnKIk9FDIONk2F9ngR0+kdV49x7vTNcFhHM3JoxBjFGqCpEBD/8eHv13OnXYUI5hpGAE68GHCstMqd0+0/uzYuA7kfEaNdFRPDeg4haExFoWz1gJRpEr7DK8IY6yM7Fgc3NzZ2U0tpBG4wxbeAmoenjhYGV3MApwQrBKh+ehNvb2xeI6BaANByNuhCpdoODUFUVRlUNAMi9whmG1bFN9qaFSiCEy18Nrs0kYcVu95u7vz2VhDGGwSJCtLM0IVrmooaEANYe7tW/1Am9xv+UEqQHj/zuzXtuNXhHWXAI3iN4hxAcgnfIvG++18Hbrz84Fc7PJUT3/64+/Oj9HllrOzpQFAWyLIOIoK5rXL9xE/8cOQUV6Rz22orDkcIgekHuFEYZ39+j4cZJb+ctARljOg5rLZxz3VcBPBG8CIrgGMoEZYYwwepsTZjJgRBCR4SaJ9k5hIA8CFQYKtSaMB2ahGk4HHZuK5ObNsGrqkICMKqqdp+3AiMMw48Dj4PP1oSlk/ClDnSk+JNPL16aLoE1BkXMEGOOIs/SHpW7d+4fXc2Co+DDGO4J7E0JsuCSd3Zw/m17+HmgTuhd2Fgn58Y6ICLw3sN7DxDR9W+/O/HOG29CZQwcM2CVUWaKo9EiBoG3RD//RYebB6baMRnzOCcRadvxuCuiDd62ayHkTmGVYIThdYF5YKodPyFCz3r/AJB5hTUEowyjDFX6TyRMw+GovT0zd99/QjsHAIAyI1iGm8wCRghMvPg8wITBzpeXnk3Cn37vkPDXPw4m4UIJfPH5Z+v/ax3o9/sX9//5oRlKuAbg1nP0NevK1tbW1ZkZT3rEc/MdhMDS17/KPtrYN9+xbQAAAABJRU5ErkJggg=="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sKCg8qFgHDgM0AAAIwSURBVFjD7Ze/b9NQEMe/d+/dOXHCry4wISQkGNiZIhaGbkWKMtAFCdiQqk4onpmSf4CKISysEAnEUKZKqCys/AOIgQEGJlji9jE8x3Ea0yrOox7gpCjyi6W73H3v46+B/5FFkiQbdeTlLPl1AHey79MvAMAGAKSHdOpdoMIIRnvfLp+bcNyNxJKqIFKBqkBFoGr9tSjy30Scqh0/uXutV7UAW7z4mUp3a/MWifhjZkAtQy1DLGGtrVhrC5pq0BAGM9HTd1+6IUaQd2Sa/GhEwmg3DCwTDBOYCZHwXBcrF9Dv90fOuc5xN55pWJ/cEAwDhgGmQCIcDocPiWgfgJtM0oWbxPh/65PPOnBwCABwqxQw1+/YTsbPXr1fToRix8EK+Pj8Ua8uDtQWNBUhgM7e9yufUm4uM4LCuWfC9vqlXmUQvf169f7W5u2FVTRMUMuIhKDCON8SXGhlPFBGZBnEhBcffrjt9YtcWQPHcWC2EYxYTbYNAJPfCDFUiQlLa6DVMLBmtoqc8YCJgoiwlAP5KAwhspyzwDDBEIGJcOBcJSbYIgkrcGBehKswIUmSUW2GpM6Yk/zNBzsvl+CAU7Hjwb0bvWAF/ErtH/3A2djmXqDp15B2dj93g4yg8Dgu5YAYQhz53Z/6gRBeoOxxXBpxZCCGFvzA3xDhAgcse/yaPLn/hPACq/oBJyt6gX/PDyRJ8vjoyw+dQMIOgP2AZ9N4PRgM3pxYcWZUgp2VdaD2+A05X5fMVjkjcQAAAABJRU5ErkJggg=="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfdDAkOBynd4SR7AAABM0lEQVQoz42RPU7DQBBG3+5aK0QRISwXqbgCUiQkV3AIXyBl7uBUOQFNWl8FJEQarhDkSC4RnSXH9s7SJIsD5me6nZn3zTc7Ks/zF2DGZzyuVqs7/ogIuJ7P53jvUUpRFEXKPyKy1pqyLNntdkynUwC7XC6fgfQ3FxFA13UYY1BKAaC1vlksFvR9jzGG9Xqdjlk9NgdQRMx2u6WqKpIkAbCjoPceEcF7Hwpt26KUCmJPb+13UERwziEiofBVbFPcPwC3h/JG/wSO5NIsy8iyDGAWATjn6Pse59xvoK2qirquAawegsOJY2J1XYeesOPYxDGx487BatM0J6Bzjv1+f5Lruu70V5MkwXt/vBkAcRwjIsRxHHLW2jBR5XleAlcDi69a60vgYnCa98lkcqaUOj+8mw8bKNSNWJsQJAAAAABJRU5ErkJggg==";
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QkKCjk1VXnrCwAAAL1JREFUKM+t0D0uRAEUxfHfG5OMRGMFEtuQE9UkLIJSo2MBCh+d6EQsYQqxAwluqxTFVCorEIWC5pGXF8MUTnnu/9x7c5hDVdVUVQPNHPAIYzzjcfAHvIxTnGCU5GP4C7yES6xhK8kDDGfAi5hgHTtJbr9mw6pawC5Wk+y3/hU2cJ5k0l3WvbBXVSt4wSamOOhfbzr/XmC79d8xTnLXDwwgySuO8NT6hz/B34E2NMUxbnA2q71+S9e4x5v/0ieSsTVT+vpcFwAAAABJRU5ErkJggg=="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QgNDTctfW5ZXwAAAI5JREFUKM+t0TEOAVEUheFPJsFQsAGlFehNaQkSe7ADa5CIHegkSkp7UIleqVMKGc2bRES8V8xJbnPvf25OckhTI4wsAW5hgiZuMbiPNU4YxeAutriiiMFt7HHH9PuYYY7lx+6AJ1a/vlWGEruQ+YULev/yboKpxAPjWO4hzsGwSOzHDEd0Ug05BlWrtegN2D8WOaohhiEAAAAASUVORK5CYII="
}, function (t, e) {
    t.exports = "data:image/gif;base64,R0lGODlhNAAnAOf1AAAAAIAAAACAAICAAAAAgIAAgACAgMDAwMDcwKbK8BMTEyoqKi4uLjIyMjU1NTk5OT09PQQicUJCQkZGRkhISExMTFJSUlVVVVlZWV1dXWJiYmRkZGlpaW1tbXJycnV1dXp6en5+fiI8gidBhSpEhy1GiCxUlTBJijBXlzNYlzZZmD9WkjpbmD1cmSxii0Vbk0lelkBkn0tgl0xhmFdqnUVqo0xwp1JwplRzqFZ4rF1womFzpGJ1pmR2pWd4p2h6qmt9q25/qlWGo1uCs3eGq3eTvXuWv1Sm1V6293+63Ge55Wi96WO692nA93XG93nG+XzI+YKCgoaGhoqKio2OjpGRkZWVlZmZmZ6enouZu4yZuoyavpCdvaGhoaampqioqK6urq6zubGxsbW1tbK3vLS5vbm5ubi7v729vYKbwZKfwYKjyYunyoC73ZWhw52nwJ6pyJex0Ju72YC+4qOuyKaxzam0z6+4z6W20aC616K82am71ru+wb6/wLC50ba+1bm/0ITF6IfL7orD44HM+YrQ+IzR+JbH45bR8JDU+ZzU8Z3V/J3Y+rLI37vC1avT6qLZ+6ra86rd+7fN47LZ77/b7bff9bHf/a3g/LHh+7Ti+7Xi/Lfl/Lzg87vk+8DAwcLDxMLExMXFxcbHyMbIysXJzcjIyMrLzMzMzMTL3svO1MnP3czQ1tHR0dXV1dHU2dXY3Nra29nb3drc3tzd3sXa68/U4svf79zf4sDj9sLk9sbl98Pm/MPo/Mjn98ro98zp98jq/M/q+M7s/d7h493h6dLl8tbo89Ps+dHu/dTs+dTu/drs9tvv+tzv+tXw/tnx/t3w+t3y/t75+uDh4uHi5ePk5eTl5eHl7ufn6Ojo6evr7Ovs7O3t7ers8u3u8ePz++Dz/uH0/uXy+eX1/uH5+uT6++j3/uz1++j7++z4/uz8/PDw8PLz9fT09Pb3+vP7/vH9/fj4+fn6/Pz8/f///////////////////////////////////////////ywAAAAANAAnAAAI/gBpfcFCsGDBL7QEGlyIUOHCg7RcSZxIceIXahgzaoz15aLGjxw9fszI0RW7kyhTsnOFhZq7lzBh0iPoMmbMmS1t3sRiUqVKljV1usMZVCdRoS9n9vTJrl07oEiH0ox6FKlSpk6dQrU6lWtOrktPZs26VWhVs13RLh07tqzRtG+/qhXL1p1WuXGL2jz71hXbrHaf4t0Ll/DgnX7rxnRrWO/OwzJ5/rXp6kssepgza+54WbNnzp4/JwZM2eFDLA0HnkadUPVphBVjSzT9MPVq1rQZ0rrGu7fv3iJHUgspnGTH4hg5XmOa8hpkd5cLw4z+PPpyn9y2nXTu2F0UCXxh/n4P/3I8lusqtWXbftiDhE/k3cOXLn8mepTdsmljr9cDADFSDeYfgOENKNV9J6nXDX/udFCFO6YA4EFSUzkIoYQU5mRhhBMeeFI33LDTjTb78RcCAAB4IYECaGRIzYkprthigC+iqCKLFF6nHjskLsggBwqgKEFkOQEpJJEuGQnAkDmiRCKJzeVEixdBToGkO1NWeWWWAFjZ5Enb9BhlUFVIEMuVL5V5poswqRnZfdto15xloW1GZ52YgYYnPV8g6NM1uRlk22qDvrbbb4gC6lptrd1WKKOJIhrcSMQhV2lxyjGHEndIUdcddOS9ZB07ppRqaiigmMIOpzqZB5mrnd2Zt5yppn7Sh6qsxlQffe/F1+t5pNIqSh+f4CrgfzTaZGCByNoXbK19iGKsSxtimGy1HR6FbZOmiBJKt58UOy2MN85IFLkyuogujh6aYqu7n0g7rTtKMplsvVfiyy284Zq6qpRUdrllwF4my2XBzpYKSrjyzpummWi64yabD6/ZrsKp+nvNnXjq2THHdfap6XaBQlQyQY/qFulvAQEAOw=="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAUCAYAAABroNZJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gEODxoaf0zN4AAAAPBJREFUOMvtktFqAjEQRc+km5J+VsR+dY2yVXT/Z5XVzSTjS10oWmnxoVB6YV4uw+HOZaQ/HIwH1Tjn+EOQJ3kc8jgBcOIEcYIWZb1ZU61y8UottO8tWfPk3RrnRHAidLsdfd+TUsJqpZZCSon9fk/XdVz2bo2YmQGoKouUGMeREAICDMcj3nte53OapvnynAkCUGslLZcMwwBACIFZjHcBV8WWUqi1/rjYKUnOmbfFAlXlJQQQYRiGb50zJVlvNqgq3ntijMxi5Nl7VJXtdns/in3odDrZcrWycRwvluWcrW1bU1W7p0/F/u7H/kOudAY1ua6xJgbfogAAAABJRU5ErkJggg=="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAUBAMAAACZjst6AAAAG1BMVEXe4+bw8/Pz9fX19/f3+fn5+/v8/P39/v7///9kr4t5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gEODiQjYE40ogAAAEtJREFUCNdjUIICBQZjKDBgcIECB4ZQKAhgSIOCBCRWeUF5OXt5eXkBQwcDRwNDR0cHkGhgYOCAsDoYQEKoLIQsko6ODpgOCCCDBQALNkfah4uKEgAAAABJRU5ErkJggg=="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFOElEQVR42tWXC1AUdRzHf3tAE5XZSDnFhOWMBU0PHE0MB7W0HBkJ5TyRAxPiEQgJqcChYUqQ3oFGovKIR4chHHkciM9s1BHMZqgMHW2wfCWONZnmA7zH7u2/3/7vbrtlmLm1ccB+M//Zuf38Ht//b3+7t8vAMBtz3wjIy8uL1Gq17cMiAIsH4iEXVzGKODMcAnLwEISrBwWUDLkAp4haLJ40lMX/vwIauswGhmGUbvEEzbQoxDdmSARUd9y0R433VWBdsPMEbByB/T/b+JRpI73+kwCNRlOLOwpDAYFygsoO/EmiJz1Ki3N2h4jdJ/shc9bou36uDNoBw3GbcbAWx0x4QCX80O3sJQsmjxIFcDwPe7tvgWZuAPVv+N5sVCgU0nieN8VN8lXJEqD/ro8Pf8GH4QkPHLbXguvbi4QkhD6iEPia5l+J6rXRjuJUAF6C7mtQsPA5mq/y8HVeOeFhBkXj5eHBwhI42GMlaW+MUsgSUH7oGol42RdYTM5iAtbOQ+c5DtJn+FH/3PpTJGqyP7C0AzyYrTwcOX0ViuNfory4vZeoQ/1ocZvdIeLrk7cgNzKAkSVg454rZE7wCBooCBCG7Ng5C6yY40/9l1b+SCJDx1Bh/WY73DZz8NPZq7A5bSLl+Y1nSGzYUzTeirF9Fg4On7oORbGBgwsYOIRFLRfI7ODHMBiLY/v6rRx0/2aG/PljqX/yZ8fImxOfAYvNDtgEasdOXYaaD6ZQnll1nKhffxasLA83+lm40cfC8bN/QVnqBHkd+HB7D5n5ih+YbTzcQfXCpTjd2wefxAVR/zjtITLz1XGSRAd/OAvb82ZQnrChg0RMGQf9GItNotbRfRH02dPkCVhWc4JMHOdHp9tlJ87/DaXJwdQ/as0+8vbUFyWJdnWehtaCcAdfizxsAD+KfG24PAFpW7pISNCTEseunj+g8v0Q6j9b08YrZwQz3l6O5w5nt4Pp0AmyXzePTvns3BY2amqgt7eXwsl5aO08w+0vnu8jS0D8hiNk+vixEscj3RegPnu6Y8ormy/5jwRxpIUxuHITenPTFo4RflfqDb3+j4942ksQiNCOAn+/dvtyakJMgKwhXFB4gH8r5HnGfQffdP1CdqyeRU9U19XzyrkRjFBAuNc5joO2XXtJSmK8i5OoyAgqTeDC2rl7HyCXdwm05U2XnnjIHsA4KcbD1TtevXnparrDTVuryOLYaDG5YA0GI2RlpDIuHqOaJzLh+JWpXeQeBWACPloZKe6QxR22tO0mmIDucP2GTSQlIU4ioHZbE6zMzmJcfLFaJRYXVkOzSeQeBRQVl5Kkd2LEYGHpG3dAfu4y6r+6UEcyUuLFAlarFWq/bIbC1RqRJy/+N95isUCjsV3kHgXkfVREC7gSsCwLNdsMoP04n/qvWFVAlmck0+Eym81gs9lA32SCjevWiHxJYhydDSFWyFFvaBW5xyHMWL6KZC9NAR6fA0JyoVBFXSNs/XQd9U9ftpJkJC+iBVxWpTdAeel6kb8Xv1BS6PP6ZpF77EDK0hySlRpPC7tsS00DVG8uYVw8PTFWkqgcBbrzJe+qJbziiyaRyxLgqUBagvTtC+99CU8d0IEq7MDdCOCT4lSMj483ZSzLQe12I8EEChdPjFUi93FyFuoaTe7crlbOUfh4O+PxUjWZ9vDIvWQJSM3MMeK/nOSNRsGAqaqsRCWHp2XmVOD/V5Q7x2da68gHFedx1trdP34kAmAQwwkOw6Cj9+qc03a6PgM9vkQKd4hOp0u6F+ecX2CDd2C47B8J82xO/BKtugAAAABJRU5ErkJggg=="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADFklEQVR42u2Xf0gTURzAv2/Of+rfoP4QQhC1hESTQLBJIPk76TQdEhqZlRUOQt3QEAmMmRaOKC2dpEQa6OlcmE7BFEUKKZSWpdAII6J/K1F3d693r93YK/FUhjPqsduD+9z3+/3c995xPAQBHmjHCJhMphNms7k/IAKkeASZKshxk0i8D4RAOZkiyfGOCNRvu4BHwkqKF21n8f8CO0fAaDRaEUIJRCDi3+zAXydgGfzSDQhxPvGY/HhD8r6cbRGot3+SLibtRUEIgYQxrIoYrKNfcXlmiGZLAptdhLW8C5emhNDiErl3ifw1j3yGKi500x+3LXWgumseG9L2gygLSEBFmh2LcF0fTvNVd86TRwS/PSLgCc/ZkICxw9mN4M9nbC6IoglMHW9xaUYoiBKmdy8SiQeOj2AuOIg8XKo4GYaCNEA7tOKWoNH+AROu2ZDAVeuMVMFF0ARycjmBxb6AbxdFazwcX0kPowLKYR12AeFI4VW5kV45eW7om/dyVYHLTdP4Wl6UJznQ+VbvHNwtiUMKv5QeTs8LZAEurYrQ+dzF8PXiVRdhsWUKV+oP/UpACghkbux1QoshHin8fFokrAgS/FgWwU2q2CZdDF8vXrUDhQ1j2JgX4w2WE93pm4X2skSkcE4XTrkybJMLDPeN/04kWwfeeLmqgP7GCC7LPUwLu+UWr4jQNjALXZVJSOFZCQeYRLaJOYbL8fLa+bYs0LlzxOnlqgJczSA2nIqDVRIoF5clHjtmga9JQQrP0kWxAuNOhhemRtM4ZfjGqwpkVNlxQWosbZ83wdBreFqbiRTOHYtmEvGjMwzPT45huG+86iI8Xs7j/NQ4NsGzaXDUc0jh+mSWdw2xfL141Q4kGp7gwsx45sJ2+xSMWfKQP7iqQHzJI1ycrWMubOkZh6mm08gfXFUg9txD6UK2DgUHaylzuwW43zOOX7We0fiDqwocOXuve0kIZr4Fu7QC/7KtJGerfLfWzR/ds/hCq8H9vpsfRgDWGBjjBLJAJ/x1zjNsyjZQ9fstvyF1dXVF/jjn2YGt3YFAjZ+464c/Sl6qmgAAAABJRU5ErkJggg=="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9wGAwoFAEQ9XSkAAAF3SURBVCjPfZI/bvJAFMR/b73G0ACNhZApEQ0lBSeAu0RKlO8oFJGoaDgIEhVwAIRER0FBY4EowH92N5X5QrAy5WpmZ+a9J/P5vJLn+VuSJO+ABizlUEAeBMGX7/tTnWXZW5qmExHBGIO1FhF5UjjnUErheR5JkkwAdJqmHwB5ntNsNmm1WqV2p9OJ8/lciD+0iHjOOfI8p9/v0+v1OB6PD1fnHFEUsd/vWS6XeJ6HiHiPTiKCiLDdbtlsNiilALDWMhwOqVQqPytY/buLc47io7L3Ak/CYkDGmAfRWosx5mVgT0JrLWEYEkXRU8cwDLler+VCay1xHNPtdhmPx/xOcjgcsPb/inWRv9FocLvdWCwWr7G0fnDu9/vDURlj6HQ6jEajl/1lWcZqtWIwGLBer9ntdmitlQJM0aUMvu/Tbrep1Wo/OUZms9lnmqYTpRT1er38SJXCOcflcsEYQ7Va/ae11lOAJEne4zj+88hFJA+C4EtrPf0G1Yq+tSV2WzIAAAAASUVORK5CYII="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QMHCxAqJS/TXgAAAdBJREFUKM+FkrFKM1EQhb9Z597NrlhJUkSwsLTWLi9gZbFPIegz5BVCFEydIlVEUvkIaazstVARRLSRFffea8bmT1AQ/lMdBs5wzsyR8XjsY4xHIYRjEVFgwd/IzCx5789U9VxTSkchhIGZEWNERDAzRARgxc0MVSXGOADQpmlOlsOtrS1EhBACzjkAYox47zEznp+fSSkRQjjJRGQtpUSn06HX61EUBVVV0W63abfbVFVFURT0ej06nQ4pJURkbZVJRLi5uWEymbC/v89sNgNgd3eXyWSCqq7sAwsZjUa3IYSdbrdLVVW8v7+zvr7Ox8cHAGVZUtc1GxsbXFxc8PT0hPf+LluucM4xn8/p9/vUdc1wOGQ4HFLXNf1+n/l8vsoNoEtiZjjnKMsSEaEoCpYRyrLEOYeZrYQyGo1uU0o7m5ubHBwcYGZ8fn6S5zkATdPQarUQEa6urnh9fUVV7xQgyzLe3t6YTqe/tv6EiNA0DVmWraxmKSW2t7c5PDz8U3R9fc3e3h6z2Yz7+3u895ma2Zeq8vLywuXlJYvF3417eHhY2sTMvjTP89OmaQYxRh4fH3/+6heW7RIRvPen6pw7/3eEY+/9f0ue5/mZqp5/A8xa3c+cLpFDAAAAAElFTkSuQmCC"
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/UlEQVQ4jZ2TPY6DMBCFPyMay42dbdPsibIXQByDhlQxEhwDcYHkYBtBgUyFt0iMvH/A7quex29+nkYjALquO43jWAIvwMw6EuBdKWWzLLuJtm1PzrnrRtKPUEq9pc65cwj0fY/3fjVJCIHWGoBxHM8pcAjJRVHs6tw0TShySHh63uocI9LOaWBaa8qy3GXheDwu76XAMAxYa3dNEFkgWWaZH9uz1i6FfuNB+2mCAOfcJo/xrUBVVZs8RvI1sMfC6gT/sZDAYz17LQQtkKTAHXg1xlDX9SLy3i/CmAMYYwK9p1LKyzRNV+99/LELSqmLAHhe5J/OWUpp8zy/fQAz3IWvDg2CYgAAAABJRU5ErkJggg=="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABI0lEQVQ4jaWTQW7CMBBFX4wtxTJhkZ6gJ6IXQFlyCIoCAi7BDqHsy63YNItYkS0iQTeENoTQUv7K/uP/PWPPBADb7XZYluU78AIcuQ8BfBpjlqPRaBdsNpuhc+7jF9FNGGPehHNu+h8xQFmWUwnENWGtpaqq71yFYDAYIITo8ogl55qttYzHY6IoapxYrVb0ej2CIABASkm/36/DR1mvqqpqiQEmk0ljv9/vybLsYiKvBWmaEoZhowyA0+mE957ZbMbhcLjEWwZhGBLH8TUNQJ7nLa7zdf6Kpw1aJXjvb6ZaxzoNlFIURcF8Pr97o7UWpVTDQABEUcR6vW400i0opX5+t5BADrzWJg8iF1rrRd1lj8IYswgAzhP50DhrrZdJkuy+AGbsYBP6fSg2AAAAAElFTkSuQmCC"
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABQUlEQVQ4jZWTW2rCQBSGvxMHyTAYTbuCLsNV2A2I21CsCioYdBXiBnQLvgjupYpCGB8k6UM1TDRae97m57+cCyMAi8WiEcfxF/AOJDwvD/g2xoybzeZK5vN5w1q7/ENUWMaYT2Wt7bngfr8nTdMcUUTQWuP7fg6P47ingDdX3G63C9M2mw3r9ZparebCbwpn5mvyYDDI0tI0RUTodDoAbLdbt5PEK0rzfZ9SqYSIoJSiWq0ym82o1+tYa3NcVWRwPB6ZTCbZezqdcj6fc10+NQiCgH6/T5L8TlepVBCRIuprHQDZDl4yuO3A8zyCIHjd4HA4EEVRDnt03kKDcrlMt9u9wx4ZZKe8Lmo4HBaSXc6lPAXsgA+AMAyJoujuVK44DEMX2imt9eh0Oi2vohvC0zLGjATg8iP/9Z211uNWq7X6AfmVdrC4JzooAAAAAElFTkSuQmCC"
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABNElEQVQ4jZWTsW7CMBCGvziJiLFYrk/Qx8lEVwbEW4AilQmkIMQbMCFWFMHG4yAx15lMwgDqQlEpAZp/ujv7/2yfdR7AcrlsO+c+gTfgzHMp4MsYM+52uxtvsVi0i6JYvzBVyhjzERRFMQSw1tYyiwjOuWEAiLWWJElqAdI0RUQk4Neb+/3+v8zT6fQnPAdPFis1GAxuclW1aT6fM5vNKgFhGN7kdzcAyPOcw+FQCVDq9sxKwN9eTCYTlFJ0Oh08z3sN2O12bLdb4jhmv98TRRGNRoPVakUURY8Bvu8DkGUZYRiSZRm+76O1BqDZbFKW5WPA6XQiSRJarRbH4/Fad85d4zzP7wDXrrz6wgqpALAi8p6maS2niADYQGs9KstyfSnUkjFm5AFcJrLWOGutx71eb/MN+BNpUa4itgUAAAAASUVORK5CYII="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wMJDBcsK1UgEQAAAihJREFUOMuVk7FKI1EUhr+5907MzAhChjxFICDbW1nYaCKOpViYF7BfK30IxUosTCFkDMFHUJFd0EZsooXaZUGEzB0zN3O3Ma5Z48Ke7sLPd89/zvkdgMPDw1q/3/8OhEDOv0sAv4Ig2FlbWztxDg4Oalrr2BjzSem6LtbaL0lBENSV1nrLGIMQAtd1cRznXWCMwRjzJajf728poDT6rdFo0O12Mcbg+z4AnU6HNE0pFouTICUx8uw4Dt1ul2azyd3dHWdnZ/R6PaIoolgskiTJWHdvlYuPryzLmJ2dpVAoMD8/z+npKbe3t6yurjI9PT0RMgaYmZlBa021WmUwGADw8PDA5eUlURTh+z5pmo5B1Mh/lmVYa6lUKuzv72OtZXNzEyklzWaTq6srlpeXOT4+JssylFJ/OrDWMhwOieOYUqlEvV4nDEMcx2Fqaoooiri/v+fp6YnFxUWklKRpOm7BdV2MMcRxTLlcZm5ujr29PZ6fnwmCgGq1ysXFBeVyGaUUWutxgLX2fdqtVoswDKnVahwdHXF+fs719TVLS0s8Pj5ijKFQKHweorUW3/fRWtNqtVBKsbKyws3NDQsLC7y+vtLpdMjz/P1OxCSI53lkWUa73ebl5YWNjQ2SJKHdbqOUQko52oRwdnd3fwDfJt36cDhECIFSCmMMeZ4jpfwo+Sk8z9uecGEASCkZDAb0ej2SJEEI8XeYth2At0T+V5w9z9tZX18/+Q1Ru/9QUjFkiwAAAABJRU5ErkJggg=="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABBklEQVQ4jdWTPW7CQBSEv7W28LKNTU6QK1jb+gzkApYlTkERKih8DFu+AJwBiQpxk+Bqva5wihBpITY/ZUbaZjQzb1Z6TwDUdT2z1n4Cb8CZ+wiAL631Osuyraiqauac2zwwDUJr/SGdc0ufbJqGvu+vhEIIlFKEYXjFW2uXEpj65sViMThtt9ux3++JosinpxLvz7eTfaRpCsDxePSbnINRx0iIc+6Kk0PCw+FAWZZMJhMA2rZlPp+TJMmfloMBxhiMMU+1ernBUwH/q0FwecDPxj3CjSaQwAl4B4jjmKIoRhdKCEEcxz51kkqpVdd1m1/TjeAutNYrAXC5yJfOWSm1zvN8+w1TaWzQr76JZwAAAABJRU5ErkJggg=="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9wCFg0POu/We/kAAAJiSURBVCjPRdIxb1NXGIDh97vn3Gvn2jgEkqhY0CghoQNCRUJIFQOkI0FK11ZVh0gV6tR/wMTUCTF0aocOIDqjlgkpFWJgIBJSJ5TIEQSs2A6248S+9r3nnK8DSH3/wLs8AvAn8C3wABAwCgaI+FgQ8AH8D8Aj4DtAHgLfA78BJThbS9P1Urm8JsasoIqGsD0Zj58cjUaPJ/Dux/8H8CtwAq7Mzc/fqa+srH62tFQVEaOqqKrfbzSOm9vb/xx0OndHsPUTYP4ADJydnZv7Zfnq1Zu1er3S73ajeG2NsLhIf2srOnnmTDmt1ZaG/X49z7Ln38AgysGkabo+u7Cw6qxNDjod9vf2tL6xQX1jg/b799rt9WBqKjl17txqqVxed2CsA0Mc3ypNT1c77TZRFOlwOJSDZpPBYECj0RDbbmsURVKrVqtO5FaA320BUaG6rMaYyWRCdnQk/WaT3d1drLWELCMYIx7IwEycW3YQWQcUqhRZxrDVwo1GWOcwzpGWSpSBRARUiYsCr0oB2BzCxLmd42bzfGk4NGUR1UpF9m7fBhFmKhVEVRGRoii8U93JIVgPPiuKv3q93rV6HJ/0zsng8FCvt1pireWZtXpiZkYE2BuPj8ch/O3Amy9BQwj7zvuL09YunY4ik4jIMM/pbm5SevlSUmvpOpe/GY+f9kO414NDAVDgZ7g8a+2dC0ny9fk4rtk8NwAuSfxOng+283zzg/d378MrAcQAHmJgfhG+uCRyY0Hkq7LI5wBj1bdvVF/8q/psF14DLQOFfIJsPqpjKgGbQmQ/IXcQRhBy8MAIOAL8f7xJIc30s21fAAAAAElFTkSuQmCC"
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABMklEQVQ4jZWTMW/CMBCFvwsICXnBdGHvD4KFEbGxMYehbAzmH6BsUfYI/k87MhazWEFIhA6taRIZSt/0zr73zne2BSDLsqFz7g14AUoeIwI+lVKryWSykzRNh0VRbKsZ5/MZ5xzX6xUAEUEpRafTqTkppUbtoiiWTfFgMGA8HteS8zxnv9/XTJxzyzbQ9wvWWqy1zOdzZrMZvV4PgOPxSJIkxHGM1hqttZf0ZbPZvAOv1loWi8Uf7X/DGONNPqKnFA/Q9kRrjTEGa+1teE2ISLOFXwOP9Xr9sKIxphbXWqhWjuM4yJunuzuDy+US5E3cNYiiKMifNijLMshDBkGTVqsV5E19BBx8JCK3neptVHk1BzhImqbD0+m09dN95h14KKVGAvDzI//1nbvd7mo6ne6+AB+zf9f/5Fb9AAAAAElFTkSuQmCC"
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABwUlEQVQ4jZWTv2oiURSHv6uXGeU26mqrrA/gO/gEBuyEIGhjayMWCTapfArFys60Ymkh2grBgKBOKcYRHEbHOLPFrhITFfYHl8s58H33DxwB0Gq1MpZlPQG/AJf78QErpdTL4+Pjq2g2mxnbtjuWZbHf729SSik0TcO2baSUaJqGUupB2rb9bFkW2WyWRCJxUzAYDOj1euRyOd7e3phMJgDPEog4jkMikaBSqRAOh3/AnufhOA7VapVAIEAymcR1XWazWcQHuJ7nARAOh4lEIhcrFAohhDjDp6TTaRzHcX33fst1XUzTpFwuX8AAnU6HQCDATYHnedi2fRVuNBqsViuklLcFpmmSSqWuwpvN5ty/KrAsi2KxyGKxoN/vX8Dz+fxC+kPgeR6fn5/EYjEKhQLj8ZjhcEi73WY+n1Or1TBN87bgeDwSj8fPdalUotvtslwu0TQN+Pu5p8jvAiEEh8OB0WjE+/s7hmEQjUYRQlx7LfLrLdbr9XmfTqdIKfH7/Rf9b/FJ4EPX9d+GYVCv16+e8jWGYaDr+qn8EM1mM7Pb7Trb7fbuMJ2i6zpKKQCUUg8C4N9E/tc4B4PBl3w+//oHxnLOwBxtz8kAAAAASUVORK5CYII="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACFklEQVQ4jZWTMUgjQRSGv53doLsxQZNeuWxjG6uksdVC0EKwEgWFQELAwvLExjKQIiGkDbETRBtrC9tACIjdXiUomJAiyWx0d+eKuyynEuX+cobv/9+8eU8DaDabm8Ph8CeQBAK+lgC60Wj0bHd391prNBqbUsqrrwjf95FSous6pmmG59FodEtIKU++gt/e3lBKcXh4yOrqKt1uN7wbDocnAkh8BxcKBeLxOCsrK+zs7PxrkhDT3uz7PgDFYpHBYMDp6SkXFxfYts36+jpSSoBATEsfjUbkcjn6/T63t7fE43E6nQ6e52HbdhhgfASDIEBKiVKKu7s7bNtmY2MDIQTZbBbDMDg/Pw+b+a4Cz/MYj8fs7++zvLxMKpVicXGRp6cnstksCwsLVCoVlFLouv7ewPM8pJQcHR0xOztLOp1maWmJx8dHHh4emJubo1qtomkakUgkDDUmZb++vnJ8fIzrutzc3LC9vc3z8zPtdpv7+3tarRaWZYXJE4lJww4ODvB9n1KphOM4XF5eEovFyGQyGIZBLBb7BIcGQgheXl7QdZ1kMomUkrW1NSzLotlsvpu+j9Lq9bqjlPrR6/XI5/PMz88zHo+ZmZmhVCphmiaG8emzJvolgJ6maSQSCWq1Go7j4Lou5XL5OxigpzUajU3Xda+UUiilkFISBAGWZSHE1DkD/iyTBvB3I/9rnU3TPNvb27v+DRPm60vlFQz6AAAAAElFTkSuQmCC"
}, 104, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABDUlEQVQ4jd2TMW6DQBBFH+vdAg1QOA1tTuRcwKJGHIG4st3T0LizEH18Kzdx4RVCwgKliMFCcnCcMr/anZ15mr+acQCKolhUVfUOvAAd01LAp4hslsvlwdnv94u6rj8eFN2ViLypuq5XfykGqKpqpYF5H7DWcrlcbr0qRRAEKKV+Ysw1V8/WWuI4RkRGGdvtltlshuM4AGit8Tyvf+50f2rbFhEhSRJEBGstWZaRpukIeDweKctygAyArvv+/DzPJ32HYUjTNDebk9m/0H8CGGM4n88PC6y1GGOGu+4hvu+z2+1Gg3RPxhh83x8a0MAJeO0hT+qkXNdd91P2rERk7QBcN/KpdXZddxNF0eELyfhUxDkoad4AAAAASUVORK5CYII="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABYUlEQVQ4jZXTTWrCQBjG8f+MJjiOEa1LF1IQV64E76ALScG1eJF24cfaO4gXaDeSkwjiygM0IBgGEky6aE1rS7S+ywd+DzMvvAJgtVq5QRA8AzUg5vpI4F1rPR+NRm9iuVy6xpjXG4jT6QRALpdLM631kzTGvNzCxhhKpRK2bWOMSfMgCF7ywMM1fDweaTabuK4LgOd5bLdbCoUCwIPkyp9/Y4BerwdAHMcAsbwHn6dcLpMkCfC50bvwer3mcDiky/xTEIYhrVYrE282G5RSaXZREEURvu8zGAwyseM4F7n8iev1OsPhkOl0+i98URCGIZ1Oh3a7Tb/fT0s8z8vEAPmfL2g0GgB0u12UUkwmE6rVaiY+F8gkSZDyex37/Z7dbketVsOyrEwMyDzgCyEeHcdhsVgQRRGWZWHb9i0M4Eul1EwIgRCCYrFIpVJBa/0fjNZ6JgC+LvKuc1ZKzcfj8dsHkpSPMXFgHGwAAAAASUVORK5CYII="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB4ElEQVQ4jZWTv04iURSHv7lzh3Fy1ZDZisawPQmxIoSExsLSbSwJLQ+A3VppQngBWgK8gBY+AfAIRowmhM5GIUxGJpK5dxsHkN1g9leec37fPX9yLYBer3cWhuFv4Aeg2S0BvCqlriuVyq3V6XTOFovFzTemf0op9UssFovL7UQcx8zncz4+PnYCwjC8FIC/GXx/f8cYw8XFBblc7juIL/mcWWvNdDqlUChwcnICQBAEzOdzUqkUQghc18VxnE2AlolZa02tVsP31w2dnp5SLpeRUhIEAYPBgMlkwsHBwapGJDNns9kvZgDXdUmn0+zv75PJZDg/P6dYLBKG4VeA4zg8Pz/TarUwxqySw+GQdrtNt9ul3+8DUCqVUEoRx/EaALC3t4cxhkajwf39fbJlZrMZQRDQ7/d5eHgAIJ/Ps1wuAZCbLUsp8X2fu7s7np6eCMMQ13URQiClJIoiAGzbXnu276K1RgjB4+MjlmVh2zZxHHN0dMTx8TEAo9EIKeXfAK01Ukrq9fo2d6XxeMzLywuHh4crgNgsSJazLWMMw+GQwWBAOp1OwkICb8BPACEEWmuazeaXayS55KyWZSXhN+l53lUURTeJQQix+cJOKaWuLIDPH/lf39nzvOtqtXr7B1AExpQj6LP+AAAAAElFTkSuQmCC"
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABKklEQVQ4ja2TTY6CQBSEv9dxo20iMjdhDqIHkHgK4gYTFm6MF3DbgQPoPRxvMsSFLSwMzAbiIPgzyVTSSae6XnW9RQlAHMcTa20IfAAFz6GAb631yvf9vRhjJlmW7V4MdUJrPe1lWbasidPpRFmWT4dEBMdxALDWLnuAWw8vFou3fl6v17WJq6h2LopXq9/wS1v07h+PxyNxHDMYDBr85XLB9308z2vwLQPP81qiZ+hMkCRJZ4LZbPb/CdTbygdoJQCIoghrLSICQFmWjEYjwjB8bKDULYy1ls1m0xAGQdCZQFWH4XCIMaZlVqNOc3dXst1uD8AnwPV65Xw+4zgOaZo2DFzXJU1TRITxeFzTX2KMmeR5vnvVgS5oracCUDXyT3Xu9/ur+Xy+/wGfSHNWSZ5srQAAAABJRU5ErkJggg=="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AMRDxo071CyWwAAAeBJREFUOMuVk72K4mAYhZ/8GL6gEZytrOIW/hUqqbUVQQT3BsQ72CvY6eZGxBuYKe0jWKugjRArtdhZI4QEg8k2q6vrrsN+5ct3Duc9D68EMBwOu57nfQM+ARGPnwx8TyaTL71e700aDAZd3/dfPxBxPB45nU6oqkoikQAgmUx+kX3ff/5I7LoupVKJdrtNNpvF8zxOpxOe5z2rwNMjse/7NJtNLMvC8zwKhQKj0YjFYoGu60/y9c7H4xHf9wnD8GJQLpexLOscGYBisXj+E6nXMS3LwjRN1us1URRRq9UwDIPxeEy9Xr+Y2raNpmkAqP+Kud1uMQwD27aZz+dsNpuL+W63I5VK/TYIw/Au5lnsOA6pVIrtdovjOAghLuIzUzRNYzwePyQRxzGqqt7NVQAhBJPJ5BJzv99TqVRoNBoAzOdzqtUqpmkym81Yr9cIIVAUBaXT6XwFnjRN43A4sFqtcF2XMAzJZDLk83nS6TT1eh0hBLVajcPhwG63I5FI/LjJpCgKhmEA4DgOjuOQy+VotVp3GKfTKbquI597AJAk6Wa/KIpYLpd3/VxhlFXgHfj8NwNZlu/6+QPjuzQYDLpBELzGcfyQQhiGBEGAEOLmmCSAXxf5X+es6/pLv99/+wnRjuAwDaBEiAAAAABJRU5ErkJggg=="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AoLCyULNFXIDAAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAJASURBVDjLlZPNSiNBFIW/bgu6O21sMJpIQMKo4CIkWYqCGBAE3ZgXEF9kXOmLiC8wgquA6MKNbpSOxIWRQHARCB0SkzbSla7MwpnGHyYwd3epuqfuOXWOBnBycrLr+/5PIAEoxpcOeLZtH+3t7Z1qx8fHu4PB4NfHG4VCgdfXVx4fH8ci2bZdEoPB4CCTyaDU+8NSSrLZLP1+nyAICMMQTdMYjUZ0Oh36/X4E4Pv+gQCmNzY2GA6H0YGUEtM0WV1dxXEcwjDk5eWF29vbr1tNC0CdnZ1FgwBCCAAmJyfZ2dnh4uICz/N4e3v7ykIJgHa7ja7r5HI5lFJUKhUA8vk8nufx9PQ0VtF3KKXwfZ98Ps/MzAzpdJrl5WWurq4AMAyDpaUlHMf5BCA+NrVajbm5OYrFIo7j4LouzWYTgGQyyebmJq7rcnNzQxiGnzf4W/V6HcMwEELgum6kSSaTASCVShGPx79TAJidnWVtbY1er0en06FUKhGLxTBNk3Q6zd3dHZqmkUgkvlNIpVKsr68TBAHlchmA7e1tFhcX8X0fIQTVahXLslhYWKDRaCClfAcwTZOVlRWklJyfn0ffVS6XUUqxtbWFYRiRwI7jEIvF6Ha7CEAPw5CHhwdardZXpzE1NUUymaRWqyGEoNlsEo/HmZ+fp9vt6gJoSyl//Mv3uVyOXq/H5eUlExMTDIdDlFJks1nu7+/bumVZh+MCEwQB19fXjEajyO7VapXn52ds2z7UAP4k8r/ibFnW0f7+/ulvOQ4B+OkIi0EAAAAASUVORK5CYII="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9wLDwoAFwjfV6IAAAG6SURBVCjPdZK/iiJBGMR/3dP2jCBqoE5qqNmAiaEP4Iss7HL3KAYLRiY+iiL4J/EBFCYwMVEQFJ2x57vgHNFbrpJuurq6+itKjcdje7/fP26326dSyohIppRCRADI90opLSJ33/e/C4XC0KRp+pEkyUAp9XYxyzJez/L1drsNAHSSJF85kbtcLhdarRbtdpvL5fLGPcRfGvB4QCmVE3S7XbrdLtfr9c31AU8rpbIsyzidThwOB+I4JooigiDAWkun0yGOY47HI6fTKR8hMyKCMYZ+v0+pVMJaS6VSeTr0ej2iKCJJEs7nM9PpFOccBiBNU47HI+12m3/h+z5hGAKwWCxI0xStNTqfaz6fM5/P+R+WyyWz2eyZgxYRtNYUi0UmkwmbzeaHaLvdMplMCIIArTUi8tcxj7tarVIsFn8IgyCgXC7zmr4BNIBzjjAMqdfrnM9n1us1AFEU0Wg0qNVq7HY7PM8D0EZEXO5qrWW1WhHHMfv9HoA4jmk2m1hrefmdU6PR6FeapoNHH3HOISL5yzjnUErhed6zPb7v/zbGmCFAkiSfImK01tlrS4wxiAgiooG7tfbbGDP8A+jp21tjVFaRAAAAAElFTkSuQmCC"
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA8gDyAPIuRIzMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gkKCzcG83y/CgAACphJREFUWMOVl2tsXPWZxn/nMnPmbo/tsT123NhjJ45JbMc2cQw47JB6Y6o0BFEWRdovlEqs0KofKlpR8WGFFrRdwW7S1S60W9QoWxrEpWShkDYhqAk0V+zEifAljuPE1xkzHntmbM/tXPeDsYMToN1X+n855+j/PO/lvO/7CPw/7PHHHwfA7XZTWFiIKIoAqKpKIpEgl8uh6zqvv/76X32n/HUvurrCAFgWVFVVEwqFaGhooLGxkfLycmw2G5ZlYVkWmqaRTqeZmppkaOgq69atIxaLcejQoTvu+7J99NEphG8CLyurpK2tlV27unn22Wel5uZmKZlMbjAMo9vj8XS63e71giAIhmEYCwsLA9ls9mObzXZCFMWZwcFBo7Oz07p+/TrR6ORXggN3EujqCuN2e6ipqeW7393D00//yNnR0VFUWOjfV14e/PGmTZvKGxsbKQ2UIooipmli6AaZbIZoNMLg0BAjIyNXstnsP6VSqZOdnZ2Lx48fY2LipvgFhAiYH310yryDQFdXGJ+vkJaWVvbu3cvTT/8o2Nzcuru+vv6fd+zYEdxYV48gQEJNkNSTqKZKXs1j5A2cspNyTzk+mw9VV+m70sfFixfPRaPRZ99//93eggKv6nA4jS/ArRVM4U7wNh6+fwfP/+KVhqbGpuc6Ojoeu6f9XlxOJ0PZAQZz/fSme+lbvEIqs0A2l0OUJCo9lWzz3k2zs5lGVyPVSjWqqfL+0d9rPT09P/n00/O/+fjj00nA+rLT0gq4JMk0N2/lkUce4YX9B7Zsb219Zee3d+7u2NZJUozzu8Rv+I+Zf+Hfogf4OHmW0fkbLCTnWcgvMqaNcW3pGqdip3gj+gZjmTEM06SSCpq3NEuSLHUXFPhd6XTm5KOPPqqfP39+1WkJIBSqpq5uI9/73qO88MLzldvvuffn99SGdjWcvcg1ZYQD4ssc/PwAo/lxCjU7O/MPsM+7j78r38feyod5sOQ7bBA3oKcNIrlphpPDnJw8xdzSHBXO9Wyu3iK4nI52l8uZefXVVz/dt2+fUVTkuxWBlpYWwuGd7N//knvbtu3/8EA4/NTWu+8l2XsS6beH+aDgDFNBlZ363/JM6c/Ypezhb4p3Eq7dSWNRE23uVprkJrorutleuJ3PxvuJLkUYTY3QnSimqXgzjsqgoKvqfRUVFWf2798/FgpVC6sEursf5LHHHmN6erqqqan5jR333W9bcqX4r2/9D4n+yzxxPMDGdQ/z93f/KyG5jshYhJyaY923qgCYmJ5gYGCAtrvaqKKKcFGY2Ow0e88v8oMXPgRNxwyHKfD75cnJyeayssBbyWRCFwTBlJ588km2bt3K4cOHpdLSsuceeuih+7xeLx8u/pr3F35JX3uelv4qtp1cRPNX4NqymbpQNRUVlQiCgGmauN1uampqAHA4HJS4i2l3NNPxzmUKB4Yxhgahrg6rpQUtky6fnJx6Ox6fjYJliaqqsnHjRiorK721tbU/LCkKMKF9xvnFN5HR6bR2U/Xvb5Isr8Tzq19ivvMOdocTSZKwrOWCFoRbf7OqqgwPD3Pt5jSBA//JbDCInkrBkSNkBgep2bABv7/wH+vqNgjr19cier1eQqEQc3Nze+rr69EMlQn9EmP5SxSZBewufAKfUUDhKy8j+grwv/kmcy+9hCWKWIBhGKtEVFVFFEU2b95Md3c3WjCI+Mwz5IHEsT+S7/+M5aKv/b7D4So1DAOxsrISSZLw+Xx7aqprWNBijKlncQmwWQvjzVWCACVeL5633iIly/iOHyf13HMYudwaz1eisdwddQSbDau9nXh9PYvZHNL1URTLoqGhgWw2+6AkSYg+nw/LsggGg9sRBDJGkpncZew5kWqpiYWZHHbFhiAI2GQZ+6FDpJ1OlNOnmfz5AUbGx1bBl4fX8oAyTZPk/DxDySRLTY2YgHNgADG1QKC0FLvd3l5cXIyoKAqWZeHxeEot00I3cmQycXxaEX5bOZYJsixjmiamYaD4fFgvvkikvJyJYAWjQ0NcuHCBXC636r1pmhiGwVw8TlxVsa+vRgGsSAQjm0UQRfx+/yaXy4UIYJomsiwrpmmi5nNYWhqPXaEsUEZzayMr31iWhaHr6EVFRJ/4PhN2O4riYHR0lFQqtcZ7EFi/vpq27e24vd7lNKVSmJoGloXD4XDbbDZETdPQdR3DMHRN1zA0A6/NgdObBTGPoQqroV3JsdfrxV3oJxaJcPbsWURRxG63r4JbX+r2lqYhGQYqoDmdWKKIaVkYhmFkMhnkpaUlTNMkk8nMmYZRLos2StxFzIvXmV+cInrlNPc/cN/q9rNCpq62FrfLxcLCAoFAAI/Hg2GYa0b76I1Rpq5do2lmBg2wiooQbTb0fJ5EIjGaTqeRZ2dnMU2TeDw+YEG5215EqbiJJfMqefsIDa270XUDm822mgpd1wEIBoMEg8HbB+uqBSsq8CWTZC9dQgPku+4iJ9tYnJsjlUpezmZziNPT08RiMSKRyB/i8VkUoYgSqw2HBDHzT+CK43Q67gC/vepvN13XkCUJeWyMpd5edCATCqE77NwYHUUQxBMAYj6fZ2hoCOB3g4ODyKKC39pKgLvQGef6wv9ydeQKH3xw9A7wlZoQBHHNs1QqyfkLF7BiMVIHD6IC+fZ21JoaBAvGx8cjgUCg//Dhw4hvv/02w8PDuN3uyI0bNz7MZNN4zAZKzd2Q9XBt8dekpEsEK8q+ALt1lsN+e+gtFEXB53Awf/Ag82fOkHU6Mb7zIPbaEKlEglgs9nJ/f7+5sp8xOTlJa2urnkgkftrb24MkKHgXH8CVbUWRvThLEmxtacSyWHNuN1FcJuZyuWjesoXs0BCazYa1axeucBi3w0FPT89cPp//laIo5uo4HhgYYN26dYyOjiYdDkdhod/XrlCOQ/QTCoSp9zyOqYt/ccdfIWVZICp2lHCYJUnC9dAefHUbGL8+ymf9/T987bXXzl+8eNFaJbC8gpeyZUujfvly37CuGx3BisC6Sv9WCsUmZFleM/H+GtM0lfmlRcSmZrwVQWajM5w+ffoX77333osTExP6HTuhrqtEo9PCzMy0aRjWiKI42gOlJSWyTSSfz+H1ejFN6y8CS5JINpvh889nyGayuBSF2ViMM2fOHD937txTdrs9PTY2RldXmFCo+tZOuJJGl8tt/vnPp8fdbs+5bDa7qbi4eL3H4yGVSuF2e74pAaiqytxcnNnZWXRdw+fzMTExwalTp17v7e19yu12zx09enRF+Nxayb5EAMCsqanT6+vrp/v6+v40MzMTyOVyTVVVVaTTaXK5HNls5itPIpEgm80gy8uK78SJE+qFCxeeP3bs2E/9fn/yyJEja8C/ShtaK5JJkiT8fv/4uXNnfxCNRn8/ODj4TENDQ2tbWxuKoiDL8poGpGk6giAwP5/g5s2bXL169Z1IJPKzTz75pC8ajZr9/f2360NrlUlXV3hVq92ulCzLEi0L2e/3y3a7s0aW5X1VVVW7ysrKahVFKRAEQTIMQ0un04mpqakr8Xj8Q5fL9d/pdDrd09NjjYyMfK04/eoG/jVq1uHw4HA4qKqqIhgM4na718jzxcVFxsfHmZ+fxzAM3n333W+8b0Wg/h/bHhLOgzVndAAAAABJRU5ErkJggg=="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QYZDBMrBGwJUgAAAuJJREFUOMttVL1O81gUnDm+dmykTUiI+BNSoGe1QoKvzQugFDQ8AUhbUi8lW/AINLwGBU2IhBBQhBqBvgJRBEEs/hTHis/ZIjYbvt1pfC2Nzp0zc+5hu93G3d3dSpqmfwH4QdLMDCRhZgAAkgDw7d/MSPLKOff3wsLCTx4fH6+kaXoDoFyQSUJVISL/KfArx/O8dxH5wyVJsk+ybGaak6mqVnxfX18BgJVKBZZXnORkWfabqu47EdkwM0h+vaoaABmNRjoajWRvbw8k9ejoiDIGzMxERFRVRYSquuGKW2wMOOewtrZmcRyz1+sZSYgI5+bmUKvVrF6v4+rqClmWGceGgqS5wtRcJlZXV219fZ1mpkmSSBAEUFVttVoMw5AAMBgMrNvtEkChCA4TIIm3tzeYGcwMURQhTVMAQBiGXyZ/fn5+nQu4IpHcPDw/P2MwGNjU1BQfHh6s0+kAAJvNJpaWlixJEnx8fACAAShagxSF+v2+7ezs2Pb2NsIwtOFwiHa7bXEcWxzHODs7Q5qmFgSBtVot7O7uWhzHX4pEREASJAWA5OYKACPHQeXngi9Fyp7nWeGxt7m5+aeZzUVRhJubGzw9PaHRaLBUKlmlUmGv10MURdZsNlmtVpmmKU5PT3F+fk4RMc/zaGY9p6rFyOtwOEQURSyVSmpmbDQaOj8/D5Is0vN9H9Vqlff39+r7PrMsw0QXY83OOZmdnUXeog0GAymVSuKcsyRJICJCUur1Onzfl3wwYWb/plYM5uXlJUhar9fjy8uLbW1tAQBPTk5QLpdtcXERFxcXUFUTka/U3MR0kiTSNLVOp8PRaKRhGEoeivb7fT4+PvL29hYAzPM8TjwROgDXAH4v5iJPEM45ZFmGw8NDAMD09DR83/+2DSZwLUEQHIjIu5mxeNy5QgGAmZkZ1Go1Kdr4H857EAQH7Ha76Ha7K2ma7gPYsPHG+raPimR/2UdU1eswDA+Wl5d//gM6T8wasEPinAAAAABJRU5ErkJggg=="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9wLBggYKTUpSbQAAAJVSURBVDjLdZPLalRBEIa/qu6Zc5IJQcQ4QbwgKIqCCCrqRleC6AOIl3kAQV/BpeAu4iULVzFLQdCVGxeCC11IFPGy8IKXBHXEC8nMmZkz3eVizhwNam2a6qq/6u+/qwRgdnaWVqvF/yyEgKoiIuVdrVaj0WggMzMzZFn2T9DQkiSh2WySpilpmpaFarUafsfoXNWS/ul+d+kMIh6ImJXgGHNEHLJGFej7ZOyy+sr0g69beq1WCx/7vdOh155CBMyIMQdAxGEWGJvYRPvbe2LoIeLod5emPGOY2UURQUOvfRYRLOTEmJOOTzKx+SATmw7Q+bnAtiPn2H3yGpPbDmMWMIv0u0tnO50OAB4RZzFgGPWth1i36xjqq7Sab3j7cJaCDuv3nADg0/M7iKjrdDqkaYpiFs0CK9buZMPeBuqrAxHzDF9JBgUKTdbvPo5qBbMY6/U6MUYUQF2VDXtOLUsWVWLolQyG5+iqjWCRLMtwzuHNIs4nJOOrlyVbjCxlfe5fOYqoI+RtRBzJeL1gYYUGUDqYMfyN8TXb2X/sQhlzlRG+f3jE11f3+RPjB03lL6qYsXLjvmXDtfj5BWYBEcV7D4CKKKGX8eXl3WUalMUK30LOz4VnZWzYVBFRw5h/fJPsx/xfwKE//+QW7e/vUa0McIUpZkG1Qt5d5OWd87+ZFMDuYpPX966y8PT2n88rF8W76uilkGdTwyLvHl7n49yN38IWMyHiEHVghk/GLpEVy6S+Og0Qeu0z6qoesxjybgkW0QFtEcWs76qjl8X56ZGRERqNBr8Aj4kVcknv0xUAAAAASUVORK5CYII="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9wKFgs1LApWJ6IAAAIKSURBVDjLlZM7S1xREMd/c865Dy+GfTSykJBOSCcpbAI2lhb7AQRF2EYxRL+E7a4g2PsdFMEurYTEysLKSgtxd0n27uvcOyn24fogkKkOZ2b+M/ObcwTg1/4+g1aL/7GwWGSpXkd+7u0xbLefOfNej0GzieY5AGIMYamEieNXIg6R0M7Nbfs03RURp6q5hCHRwsJTpAgiYlTVuyQ5snF8PGg2B4NWC5f3+9s+TRsiAoB6j0uSZ5WybhecQ0TwadoYXx8COJ+mX0WE3HvSuzsWVleJl5eJggCAvvf0Ly+5v7ggqVQwzjHOGQmIiM29JywUKK2s8KFa5frsDPP4OOJRLvNpawtbLtO5umLQbmOcs5PuHJDrcEhcqbBYqwHweXPzFfXFWo3rgwP6Dw/gXD4rgIlj/tzc8H19nd/tNox5TE2Vd4UCc2H4ahNOVRERhq0W79fW+LixAarkwyEAJghAhNuTE+5PTwmKRSY5AGZKXxWxFhsEnFeroAqqnFer2CBArEVVx1t96tC99crU2ukYau0/X6SZqD6zWQYveQCzGUZEzMuArNOZjpB1Om+0qGYWYjaZyUYRAF8aDYL5+el51jepMW3wx87Ot6zXa2iWjeBYixiDZqMYsXb0qbJsBFEElyR7Wbd7GBaLOBNFxwA+TXcVHN7nszNOhBAxiHiXJEcmio5NGLJUr/MXfYjXXyC9NRUAAAAASUVORK5CYII="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9wKEwsVDwprgkAAAAHxSURBVDjLlZO/TipBFMZ/MzvMYvgjGmPCNr4AiQ0Fj0AHiTUPYKLv4o0m1sbKCrOFz0BHRS8dCX+XuMAOMnMLL3sFNTf3lCfz+3K+b84RAI+Pj8RxzP9ULpej1WohHh4eWC6X/wQ2mw0AnuftiCghhNZaXyZJciWEUID9DDrnAJBSSuBda32XyWTuARPHMWq9Xl8aY26EEOyDQgistamI53kkSXLz58kvAGmMuf4JNsaQzWY5Pz/n9PQ0tZEkyXWSJAAoIYS3D0spWSwW5PN56vU6QRCwXC5pt9tMp1O8T0HIz563cBzH5PN5Go0GQRDgnOPg4IByuby1kzJqH357e6NYLHJxccHR0VFqZzAY8Pr6ykeWf0vtez4+PqbZbFIqldL+eDzm5eWFOI7RWu8ISAAhBM45ZrMZ1WqVUqnEtj+bzQjDkCiK0FqnP7IjYK1FKUWz2aTT6dDr9QCIooh2u81kMiGXy6UTfbFgraVYLFKpVDg7O+Pp6QnnHN1ul8lkQqFQwFr7Bd4KSGstvu8DUCgUqNVqPD8/c3h4+BOcJqmccxulFKPRiDAMWa1WzOdzTk5O0k38ZtE224yk1vpWSokxhn6/z3A4ZL1ep8F+t6W+79/6vv9xTEqpewBjzJXWeueY9sd2zr1rre+2TKvV4jdODvduJgAq6AAAAABJRU5ErkJggg=="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9wKGg8LDD0iC3MAAAHsSURBVDjLnZNBSxVRGIafc+a7M3ec2+Ze02gjqOEuoqJFi35IcJcFgraSFkEUBC6MQFOSVnJx229oHUGLKIokN1GJ5lWhGU8znjmnRTZ4US/Uu/w453m/9z0cBbC6ukqWZfyLkiSh3W6jOp0Oxhj+R0mSIK9G34Wlt5OpzaYUWgB3ynntcbYhyZLo2vLF92NFlmXIgSsm90sz77zH+hyNOvG2wyNKSG0235AEYAFA9ksz7bwnCkJG6yN4708EKKX49muDvCxIbTZdARQ6sD5ntD7Co2v3+ma+/3qWtXSdSEXB31mV2XtPajPmPj3lu9lEtABgneV8PMzdiTtHt3NHAZUakjA9fhvrbY+zKOEw9zH1ALrFDpNvZtja2ULX9B+rA8dQc4jnV5/0B3g8rbDJi+srp3bg8f03APiRd9kudnpmg2GTs1Gr/wbq8P0ffphjO9+uMqc241x9mIVLs6cCdKACdu0eqc3Iy5xnlx/TCptVLzNvH/SYALoyvvny1mdgzDpLK2qxW+wxXB8k1jEAxhk2zCYTZy7wxXwlLwu0Uus31q6MA8hAEC+aMp8XLXTzLqKFDbOJOyxMoxAtfPy5hihBK0VDksXqM9V0uAywX5qpmg4FcDUdHssa6Uh7nB0I4qVAyXIcx7TbbX4DeATFa3Lu/0cAAAAASUVORK5CYII="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AMRDyITXcW7ywAAAl5JREFUOMulk01IVFEYhp/zc++dOzbSCKOSVGZBEVKU5TIMom1BEAQVVBRUuGsVBGVBEoTClFIELQIXERFBblpUq4J2BUUuDDIJamyicWauc+85p8X4M6Gt+uBsDud7eN/3+w78ZwmAAxcrVBJJoeLXL1Yo55Y6cukazUHMo6sZ9KlrU37V/DxbS1R/exoNmAVwYz+ggCSbMvlMaEYni201AF2K1blSVQz9S2LNWprDBGMFlaqmUNHDKESh7A8DyFJV9C88lqJ+FiqqwfbOMsMnEwaPQXdnRJIkFMuqf8GRBpQUEBtBcc6iFQRCUEtgZ9cvbpxpQ3lZAC5lv3I8b0gipUQDwMwlAkeVE3sqlKqO4m/Hrq0t9G5u4cf3Eu0ddcD7LyFRVMWXGCGWACIM5rhyJGZL13qME/woFFm7ZjXPXnzm3stVnN8/QXPacmu8CWE1yKWQtbXghQE7utcteg98xZPnn7j/KoexgutPNdZBk1Z4+u+QpZSQRBEfPk7Mz9stm4SW4KmVN0QDVKIUZ+9KDvW8w9c1ere2cHDfJjz9mbHXaS4fjihVA0bGJV8KPqlAYt0SwAXaoYTHgzc5jHFMfPtNX/EXvdta2bs7pjm7AYCO1inO3I4xSeAaFSjrQErINQmkELyfzvJ20tKzcYbB062LcmdmQ2ITIUE1TsE0erIOPOXw0oJ306u5cOcnR/tmyYSGm499TKzQPiaXrtUBmdDly5EYssuzIyXh03QTAw9jHBKbSDwtyKZMvpzYOiBUboQUbn6ll30mTwtwvhOglCLJhC4fem50bCANwB8V8umz0lpU8gAAAABJRU5ErkJggg=="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9wLDwoAIcdlwjsAAAF4SURBVCjPdZI9igJBEEZfdfXMMAqigXgBcxMzz+ERJljYNRK8huCCiZGxJxEPIHiCQURQUOanpzcaUXQ7rsf3qr+S9XodlmX5lWXZt4hYoOLD894boIyi6DcIgqUtiuIrz/O5iOCcwzn3AogIqooxBoAsy+YANs/znxpqNBq0Wi2qqnpO4nQ6URQFQRAgImRZ9mNFRAHu9zuDwYDRaPSmudvt2G63VFWFMQYRUVPvVKd+esPhkH6/T5ZltUVlnwdUlePxyGq1oixLAIIgIEkSms3mYwUR4QV0ztHtdpnNZnjvH0PGmDebt8Q0TVksFhRF8UicTCao6v+gc45er8d0On1JbLfb7Pf7/0FjDOfzmc1m81Cz1jIejx89PoOm7ktE6HQ6JEny9rMi8rAAjPXeOxEhjmMOhwNpmr4cQG1yuVyI47iuw9kwDBdFUcxVldvtxvV6/dilqqKqeO+JomhhrbVLgDzPv1XVqurHIweM974Mw/DXWrv8A5FtsjaW2MNCAAAAAElFTkSuQmCC"
}, function (t, e) {
    t.exports = "data:image/gif;base64,R0lGODlhEAAQAKUxAAAAADVJYzZKZC9iyDFlzTly4j5240B240Z75Ep940D/QE6B5FaG5ViH5WKO5myU526X52WV82qZ9Xab6Hqf6XGd9X+h6Xei9n2n+ICAgJOit5alupqpvp6uw4Sl6Yam6ouq6oSr+Yuw+pC1+5a5/Jq9/aOyyKe2zJ/A/qLC/9Dg8ODg8ODo8PDw8PDw//D4///4/////////////////////////////////////////////////////////////yH5BAEKAD8ALAAAAAAQABAAAAZiwJ9wSCwaj8hkEcT8WCYPR2NhKBBBKRRpJAphLpUIgXiKmc/ml0tANMUAcED6xQoQO+i5q07kmDOAgRkrdkMbeWdqhUIab3FzfEONeS9qkYxoMGotLCqLPxoBoqOkn0qnSUEAOw=="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADAElEQVR42mNkGGDAOGgcUFFR4dfR0bFpQBwAtFwdSJUBcRfQETcHwgGlQEoDiG8AHdBNdwdAHTEXaHkyPS0fdcDgcUB5eflcRkZGG6AD1KltQdHK73yszAw+zEyMl9uCOC7TJQQS533lY2Nh9AVaHAqk7YH0QaAD6oAOuERTB4TP+GrIwsxQz8oMsRSIVwPZmyZGcn7GpYeqDgid/vUMCxPDCqDFMxelcH8mRg/VHOA/+YsfMxND3bpsHhNS9FEtEfpM/HIW6ICGjbk8m0l2AKUh4N732Q+UyLYVkOZ7sh2wSSXYluE/01e/u6vPgfguPZ/Bvt9ZxEuS70l2ANBiJiBVy8DAnMnwj/nHawFZ3dV+hY6/uHnq9pXykux7khywSSVEHEgtZfjPzMDwnzGa4T9b80duMYb5YeXG/9jZGw6U85Hse7gDCCVCoOVOQKWLgME+G8ht9ru78t9irRI+3m/fL21zCH87a4GdMTmWEwyBTSqhkCD/z5QKVBrnd3fFPmT5+PgjZ4P2rhf+wcajG36vkah8T7QDNimHijMwMgKDHOQGhmig5S+RNerXf/Tj+PenLmPNnHMi7z78933Zno7Lkm28Mx0ZGJjeeH1OJa4u2KQcBgxSxo3wIL+3/B+6Rp3aj2eBDmiM27Zmv9LTZ5eBiTLV503dbjSLeYFUDzDRujP8Zwjy+pJyjkgHROgCE5oA0OLD6BrkSz8oAyuYKGBx63+thR+c8rcIt7gyMLDMBiZQPZ93pZ+glgPFGIFiTDuB3BKg5VijiGAi5Ep/rwy0zIGVBYhBlQwLAwOQPggs8/tutvGfh6nbItg7k/E/CyPDP7Zixv9MMF+nAi3ezYAHYA0BzvT3ekAK1FC1B/GhNdsBFmbGAy8nCNzFZtBW/knA4GYBRgULK9ABW/D5mhgH6AIpMyA+8H2m4F1ChsAdwTvLCGg5P9Di/cTqGRxNMno5ANr/2ITc+UFxADZN////twEm0CPUEoOCjbBuIMHOKSiHdHZ2JlNDDG8IDBQAALIzcTCm2IjiAAAAAElFTkSuQmCC";
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QwJDgc4t1EEiQAAAcNJREFUKM+Nks1KI0EUhb++VWLATtMLhYS0/bMUxAfwAVwkzyC+hctsssoT5El8AWFAFDdCtiGRthVBDJlIg91VNYuZtDrjYs7qVt06xbnnHm80Gv2o6/rYWstnOOfwPA/nXHPneR4igtZ6qeu6Pj4/P6eu6y+PRAQR4W+ICOPxONTWWpxznJ2dkSQJxhhOT095fHxksVgQxzEA9/f39Ho9+v0+xhhk80ur1aLT6VBVFUopkiRBKYVSCq01W1tbzRn4TdRaU1UV0+mUsiy5uLjg9fWVNE0pioI8zxER8jz/ShQRgiAgDEOMMby9vbFerwmCgJOTE7IswxhDFEXN3AKglGqM2dvbY39/n7u7O+bzOSLC4eEh29vbWGsbp/XGreVyyfv7O61Wi+fnZ56enlitVnS7XdrtNkdHR9zc3Hy4uynCMCQMw6ZxcHCAc46iKEjTFIDBYND09efdGWPwfb8hrddrXl5eKMsS5xxBEDThkM9Sfd8nSRKur6+5urpCa81qteLy8hLP85jNZv9K7XQ6xHHM7e0t1lp2dnZ4eHhgd3eXKIqw1pJl2YfUjb2TyYT/hVIKbzgcLoD4u5B/V/9J0s9f2FjHAkLdHMoAAAAASUVORK5CYII="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAjFJREFUeNqkk81rE0EYxt/Zj6SJNlvJBzkEiig0ubiJPdRDQVCkIojUW+PBg9KDJw+CQv4OIfSgR/+ABERIixCkVQgmYgwYCNFDFe0Su7tJm2x212dijKvmloEfs+/wzjvPvM8Oc12XZhkCzTikXC53ShCEy/gOA81xnG3btjutVmuSNK8+JsZYCjxDqIIalG+AhphMJm9ks9k74H4oFFLK5bKhaVodRSYFhuZHsoPp0vklv7q2EiTXsePt/d7qcDjMS+12O44ia91ul/iM+LmiKJtembbZpJ6hq6nFEPX7fUotClTa1bkSEjGWIpGIkkgkTheLxZ1CobAXCASeSJJUGQwGy8jZssRERXfPrPOT42GZXr39Ts1PnVq/f5xnkB2B3OtIjIFvKFhATw4ymQw/gCvZMqKPCPdNoT+THiBnAz1pSNh8YFnWU6/kaDRKpmlOYibvkD1/sYHctDcPh5E0zRpZlskwjEnsCEdkuxZU/GksYw6w//8PfD4f6br+F45yZWyjWAXur5mlRir4BlyBYAlx637bx9fAcq/Xqxz/+EALiWulm1fPqg/uZsjn98eb7aNVUZTzErfPO/hGLh8u8PALmrdpaTWam1PUSyvRkY18flE+HNk4tQfoNsFCLrsARmsocO/lG1O9cE6ivXdDHtfqpVskevaxcUEfCIKTYAEKwiDW1arVwYn19Ov3UuzzvlWvb99+ePh1t8P+KcDGD0ycguCB51mgy2Z9zj8FGADgHgwD6oj4yAAAAABJRU5ErkJggg=="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9wGAwoODkBxqeUAAAFlSURBVCjPnZIxbuNADEUfRWoEGzAkNbmZDuAyQHIXAwng0oAPYF9B51GjaUcjzWyRSFCyW+3vhpxP/k9S7ve7m+f5NYTwJiIGpJwzOWcARAQRAShyznNVVZ9lWV4txvg6TdPlO8myLJgZADlnRIR5nlFVRIQQwgXApml6X0kA4zjSdR17PJ9P6rreuocQ3k1EdP9JVWmahpeXFwCGYcA596OQiKgBaVkWxnHEzNh3XzFNEyEElmWhbVtUNVnOGTOj6zqapuFfOJ/PAHjv6fuelBK2Tg/Y5K2D+R3z3iMipJQo+E/Y3tMwDH9138dWJUVRfBHneebxeOCcI8a4eVpxu91QVWKM1HWNqmJAsa5g3eNvlGXJ4XCgKDZnheWcl/W0AFJKeO/x3m/EGCPH43EvdzHn3EeM8bKeV9u29H2/Fco5czqdfryrqvowM7t+L/kNMFVNKSVSSl+aigJV3Y7cOfdpZtc/0guxqT7h+/IAAAAASUVORK5CYII="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9wGAwoALuWcpKMAAAHHSURBVCjPdZJBSuxAEIa/6u7MMMEIQcQr9HqWWYp7mWMIyntHcSG4cuNa0J3gAQJzg5xiII4Gkkl1vYUkOIv3Qy+64Ov6q/qX5+fnxTiON33f34pIMLNkZpgZACIyHWdm43K5fMiy7DEcDoebYRjuAcZxxDmHc47T01MAPj8/SSmhqnjv6fv+HiAMw3A3QXmeU1UVMUbatmUcR87Ozmiahrqu6bqOEAJ93985EfGqSp7nbDYbYowAvL+/8/LyAkCMkc1mQ57nqCoi4p2ZJeccVVVRluU8m6qiqgCYGWVZUlUVzjnMLDkzwzk3dxIRALIsY9JUizFOIM7MKIpifnmSqs7331suiuIH5D86Pz+nbVu22+38Jb8VRIT9fn9kycy4urri+/ubj48PsixjvV4DsN/vEZEfMKVE0zTEGDEzRAQz4/r6mqIoWK1WADRNQ0ppBp2qUtc1FxcXlGV5ZOny8hKA3W5HXdeklAghOGdm6r2n6zpeX19pmubI9tTp7e2Nruvw3mNmKk9PT38Oh8O9maGqc+ROTk4A+Pr6IqVESgnvPQDL5fJvCCE8AgzDcBtCCGaWUkq0bXsU8hCCM7NxsVg8hBAe/wEV4Puq2zGzYAAAAABJRU5ErkJggg=="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9wIEAssMNr83kkAAAhMSURBVFjDxZdrbB3FFcd/s7N7d++9tuPY8SNOnITYEJwHTZpHSQpEDo+S0giKTEsRUCSkJgKE+gEEamlFP7QlKi3QlkeqNgIJUdK0TYnLowqvqDxEISSFPMgD4kDs2ImvH/e1e3d3ZvrhOk5CHeq0SF3paGZWs+f85/8/M3sG/s+PONMPlq9bSIVXwaR0PTWpWrTRZIrHyBQy5IIsr63ZcUb+7PFMqvthGtdJUF9VD5AEFgCtwMSRKQPAfmD7BY/NLzWlm/nDDZ2fDwM1dyeRCct2nURHfVX9t2fVtbUvn7nCbZ00i7p0A5EK6c0fYd+xPbz60YvBoYGuF2dNansAeHk8IE4LIH27g5QC25VXCSl+1lLX2nrJuSuZWduKMhqlFcqocqsVAFJY9A53M6Wy6TDQ3PHyZuTEyZT2vEbzY5+MXwLvNnmc6scqE9U3XPnFq0VL/TnEOmbQHzoluD4JjG3ZbOvaxpM9T2wE6HDmzAUuAx79ZE2zPxaIf2PAvtXCFqJaCPHcrCnnLr1yydVIaaOMQuuTVq5OGutyP2l5PLrlV0cnGs55MqOCmXZqV3rpNS35Vx9/QxtxBTA0c6P+jwy4GjbPnjZ76WULL6dAER2fSvloYDUyVprGdCPPvd2JNvoHGRieWtJ32S3ntVR/615U6C/L/X1Dp9JcuvfrIpi1yYwGk6eEXg1C8FBTXVPHisUXE5oSJe0T6ICS9vGVT6B8iqrc95VPhVtBPsqz6d1NdB/t3jE9NGv+3KMbXOTGxtW/cGUyhTfnyxQPfTAtOHKoThv++sje0zOw3HEStyydvxRf5TEYNBptylrHOiYeSbi0U0lfdJStH25lIDcA/Rip+e5BiU5F/CS9/GuVdnU1utgPQP21d5A7sOs7paH+P21bKbYsfN58Kge+CaR56/xFi5fMmN4MGBAaYzQajUBgCUk2zHGseIwPBz+iFEdEWhF1K8wAG4FvvPoxi9LpirfavvdLS6bSp6xu+P136Vq/9r1YMx8wF7x8KgMXTkhULWmYUkNJ5xHCEOmQUAWUVEAhzjNcGibWmlhrXMdCWDYiJwh7lO/CnQBEPFTXvsqyCDDF4BQAVa0tWHUzzot6Dl0CbAFzEoASN06cXMGB7G6EpRBCYUsLaVllmiyo8BLEShMpRWhZ2LEkPBhCwP0lOPR8L9fZjY3Laue2oQuZMff9xIXLGPy468YygOMMXASixOXJeoHCx5MOnpMgYUscKbGEwBhDrDVhrAjiGEsInCGHw13Dh6sNa9cOkooN9zWvuBATDGBOc8BVz2wmjFipNeKZRZjjDDQkhTc1Ve3gOA5pN0Eq4ZBM2LhOGYA2lIOHMcUwwi8p9r7VDyVz9zAUakr8qGrW9ObqBg9TzJz26PUmTMV4lbVhNjcd6CoDiAn8wVLfnt/0NUhpIaXAsgSWBEuWM1XrEVMGrQyx0hR8/6XJhqfuzTMtltYdLctmjkm9VVGHcFLoQj/h/hewZIFSTOsJAG8wzGKnOSiYCaDH+yc1FsmBPjBO5N8yqXVSKuWFYFUgEilQISYqYmKf8MMd6GwPo7pICCMmjObAWVc9jGXZEcIaHG+JkE7aAEaoEsE7tz5zcHfmtoazqtKNtTsxUQ5hAUKMuhOuBGMw2hALKEVlNNaIvyTwAUbHGDUuC0phvOCcum5gwbpFD79ZDFm1ddOBwuGuHJZrITz5KbMQrsTyJIUAwpj+MB7BN2PVgzUJW/Rf394oLCEQogxbCEG5W26FEIiT+oeORTz7j54MKroU2L56x13ttlCdF3c46anT5QkWYGT1YITh94+UTJClCegd5Xvayvv2r5g3oXViReKMSqpB3+KVf/ZlxAiIm3fc2+7YqvOrN7vpqVPtE4pqMNowmNM8fX/wEdByz9ETEqAj/9kD3UNkC/4ZmdQFlrVV1yqttsShv2Dd7LteyQdy1V9+Wyr0DJky/W5ZBsuVHDigKUVsLkWckgOouPT4x0eGzHC2QC7vf6b5fsiEihRV6SRRFNPbfRh/sKdW6XiLivwFv2u7/ZV8wVq14YFioTensTyJcC1MWvDu1shEivWRGqMgaVh2+wtNtcmvTKmrxE3YeG4Czy1LEitDpDRKGQp+iX0HjzCcL4IxaK3RSiHsBNLxRnPi2p3r2lMVuvOmtZXpxgkO29722fyAvxm48kF/DAB1S1bPS9jWttrKhBNGMaVIE0QKYdnYtoO0JdKSCMsaTVRjDPp4cRLHxGXLoONLge0dO59oT1fpzut+nE4/9f2CHwwzH9j363CMgqTYve1oYtJsnc0VVwQxCOngJdMkUydbCi+ZxkumcL0krueRSHgkEi5OwsVxHIxWqSj0O0xc2rJr0pw32wZ3v5kdVguHe8090uOlh3KfURPWnHetMFptcD3vmol1U7FHnSewnQS2lFhSjjAgyvWC0sQqIo4iwrBEGATksxmymd6M48hLgB192zeMryoeeO9pU9121fV+zheuIzqaz/4Clp08AcJ2kLIsw6gEShHHEVEYEpYCAieBlBLPk7UV9ZXrgC/1bR97G8uxXgb9Hyi3ZuYf/UJWZzPdF9Q1Ncia+il4bopkKomXTOJ5Hq7r4rrHqU8gbRvLkthSkBs4TG/X3rBqcv1aY/Tbve+/9t/djNIzLlqAVj+vaWpqn3X+RTSfPY+klcKKNAIwWqO0RglNMcjyyf732PvO6yY3NPQ3Ie07gZ35g1v/98tpqvn8xXbKu6lyStMVDfPmTm9sm0N1QwNSSvJ9vfTs2W169+w9lOvu6QyzufXAjnzX65//7Rhg7pp7piTSqbMt26kRlhQ6VhkdhfvCbP4IYHat/+m4ff0LQahqb7ULU14AAAAASUVORK5CYII="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QcYCgkN5x1EEwAAClhJREFUWMPl1310VPWdx/H3vfP8nGSSzISQB0ISnkICCJiGEBFpo9htiw8ou+1awVNRWbXn1F3TY590a20XtaXsqaeldRVkd9FWVGg4QnkmAYogDxFIQh5JMnmYTCZzZ+beO3Pnt3/UzWmPdq2n/W/vn/d+z/2+zvn9zvd8P/D//ZE+TXFNTY1D1/X5drt9gdfjXWSymCt0TZUURemNTky+F0/E35dl+UIoFJr8mwIaGxuL/X7/wzc13HRv/bL6krKZM7A7HH9Sk9JSdHZ2cvT40eHm5uY3+/v7t5w9e/byXwW47777XGaz+Tu3Nt760Jo1a9yaofHkj76J1WzBbDaRVxCgv6uHlKFRVFDMDTVLWLawDqfdxTtvv6PveG3H9lgs9s3m5uaRTw3YtGlTeXZ29q8fWP9AtSfHzbP//hwpQ0UICZNswmy2MKd6LlcvXuZa91X6Q4NMRCcwm02svvl2nny4CaELXvzxi/0dnR1rd+3adfLj+pg+7mVTU9N8t8d9aMP962e29bXx8q6XUXWVgvwgsmzCbJaZmBwnLxCg/eplwpExBBKSWSKRjLP/xH62vb6NkuIS7r/3fl/ntc515eXlp86dO9f9iYCnn356nhJXDtx79z3B1qsnaT7YTI7Pj8vpJJU2SOkak3GFqBKluLSUwYE+ro+GSGhxkqYkuk/HMBuMj46z+6230G06G9dttJ7+/ek7a2trW06fPt3zZwHPP/+8dXh4+O3a2hsrx1Jhjp48RtAfxGSWySDQdA1FiaPEY8QUhYqKSga6e7k+OICix4kbk0TUCAQMbNOspNNpWk60klWQxeq61daWUy0rb7/99teOHz+e+N+e8h8DdF1/rKiwaElJZSnvXThDvj8Pm82KJElomoYSV1D1JEY6QyQcIRqJ0NkTYmxoDNUUQ81XcRQUEOtTkT0y+Q1+zIUS39v2PRRnnJuX31wcj8e/+8c9pwAvvfSSa2Ji4uHFtYt5fd8ubBYbLrcbk9VCIp5ESSjoqkZK11ANDY/TicvppO62NZB0EI2HsZd6Wb1+E3a/l8gVBdlhxr/QDy544mdPsKR+KRkj84/PPPNM8UcA6XT6C8FAsHQgMkA6ncHpcmKymLD4PKTMGUxmiZSWIjI6wWB7iPBwBCEk9v/4F4yO9aN5BKELQ/x27w/JWmJBypYYujRMdqkPV5mdK6HLvHNhDwtrFrpVVf3yRwCTk5NrZ5bP5GDrYXKzchBA2lAZHulBljNIQqCoUWRZwmmzM9IVIqkm6e7qQbfruGqcuMscjF0dxu5yMaO+iIwdhgZHmbZgOpYSOztPv0b5nArUpHrH5s2bXVOAV199tdhIGzdaXRYSapykmsRIpxkODxONjmE1WRkKDyILCREVKMkoYU+EtClN6YpipM+AoqXIm+knsCRIb0s/RbMCWPwmohOTVFTUUrvyTtomLhEzK7idriohxPwpgGEYlQ6HI5jQEhiGgSEEmqYTjo7icXpRNYWxWBivKZsPLrUhCg0KGgNkvILBWd2I5RKmgKCno5+580sRQtDZM8DspaWgQ+dQK93jJ8AOXbFu/Dl5Nl3Xq6YAqVSq1Of1SdHEJDIyEqBrKUZGh7HbzXQPdiCSGWSfhWSRSogQvVn9uAM+qh6fC9MypLxpjGSG37dfwVFuI3Q8RKJCxaSbGIuOkSaG1WGhN9ZLnj8XwzBKAMwfXoFpPp+PtMfghsWLsFrtyJKMd5qTgCcfrz0Hq5AxrFaml27EnGthn/UtvnZgPRs/t4F7Su6iLrseudBMUkoy3VdAbFADs07qS5Dy6ggM2l3tmCQL3iwvUp/kmQJIkjTpcDoIRUNcON+G027DYbfS0vM7Gm/+B+rv/if+ddMtTPeWcfDiYQprchmuNfHsjGdZKBaxLLOCbZFtRK/FkL0GsyZn03Oun5waJ5EzMezz7CBJzJer0a0GDrMDk8mkTx2BLMuDJtmEw2qnb7CPsWiYmJqga7ibvmvneHf/K7QevEgwEERPxHAHy/hq/RYuuPr5IHQen5zFtcl2RjPDFE4voeX6CQby+3CMe+mR+tBsKopJ4TdDb5KVlY30h55jUwBJkq6l0qlkYbCQ8MQo4xNhSJuRMxZaLx5k4v0jZJIGqqSwvLqByAc9HH9jN6scdbzy8i8waxK3BVeTXxDEnu0gbWRYuKyOrqEBpEKJ/Lx8VNIYWQazArNJJpNISB1TACFERzwe7ygtKMNqNXF9eJC4EsWa8XCtexzNJzOjPsAvd27H7y4mP5nN4X/+Kf0XO+jZN0LP2V7W5N1BwcxczrWfwxl04/d4CU8O487OQrJbiadVsrILqcmpYjw6PpIRmfNTgA0bNkwqceVdt8PD0kXLGBocoK3rEhV5NWS6Bfta97Ji3t+htWf41dZfkpIdrFrWwPT8IlbWr2L3D1/HrtlZlWpET2ssr1pCa9vvMLQUZYFSIpEJ1FScusByppHLcHjkWFNTU9efTEJVVXf29HSJR9ZtJJXQaGtrQ6DgnZ5NuEfj3a632fjd9RQuycW77qscOt+K2SFjmHQuDV3hsXXfYL57PjOqCjjVcQqd6Xj8PjwOBwPj15HMDr4+bxPXe3qJRqOvfGQUP/roo+feP//+b+aVz+OpJ76FMZbhyKGjrG78As6Mi77fhviPPdtZVD0L75FmzEIQUxKY8q3Ufv4GZs+twCIkIvEw3vxVnLn7IhuXb+FC7wcousKDcx5hVe5nOHLy2GnDMPZ87Br2wgsvzD2w/0A8k8mI5WsbBDaEXC6Lex67UxTXFwvsCFwI5xKLKL61RGzdvVWs/Ze7xYK1NcIzN0sE64vE9tYdovBotdgSe08sOPB5wc9lUbOnQSiGKg4dOGg0NTXd8n9uqXfcsebxQ4cOi2gsKorrZghsCCmIWPr3S8WXHvmi8C/1CzwI5yKreG7Hj0TdPcuEvdomLFVW4Z3jE68d2ym2ntoq7Dvsgl/JouTXc0RvckC0HD5h3HXXXU994kp2+fKVk+HxcFZlWeUNTY8/afrP1l1MXo0ycHWA66kQiysXUFFTTk6ej1kV8+jq7iTXn8vcslnkZedy4Ph+bryxjt2hN5mTU8PulW8QPT/G9zc/+8bePXsfz2Qy4i+JAtaG5fXf+a8dOxOR8bB46Y2fCVuBVWBD4ETIhYjgsnzx3PbnxIqvNIjSlcXCWmUT+P/w/bYffE5svvK8uD4yJHbt+O90w00Ne2VZzvq0qclRXl759YcefGji2OETom+wT2zZ+ROx+M7FwjHLKSxlZvHUz78tilcUCUulRdgqbWLhFxeIb7/4LfHepbPi8L4jmQcf+FqsvLz834DAn4sAn5SMLC6X45aS4tJvVNfU1N722UbLvPlVGSyYRydGTalMSkql0tgsNrLc2UJKY3Rcbad5377MmTNn3h0cGvxJMplsARJ/TTQzAaVWq7XS5XZVu90ub54/vzrXnzvb4XC4DcOQY0osMTY21jcyOnIlHo/3a5p2wTCMk8AoIP4W4VT6cGbIH/7QCrgAN5AG4oAK6EDmw5q/6LL9D6VNzkNWJMm3AAAAAElFTkSuQmCC"
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gEJDigBhEwC8wAAATtJREFUKM+F0jFLllEYxvHf+0bg3KB2lqChIYqgexAaHEUE+wC5WBBIZK3RUEHgVwiCFKSpXJP6DHGDu1JB4LEip6xoiJbz5sNT6DXe5/zPdd0XZ6ApIs7gMWYwgR28wAoOMlNXwwbN4QPGMY+zuIur+IZJPQ2b0ytMZ+Ys3mbme2xm5kU8wLtmcEhGxHpEvHaEIuJ3RCz2o87gXkQ8PYK9g6U+OIHPuPlPnEN9wlQf3MF5bEfEk8z8H3wJm93BiVLKZGvwCjZKKeewW0r5WWv9HhFjeINrtdbdruMKLuA2xvAFj3A5Ik7iJfbxsbvKEAc4jfv40aI/wzR+tSSnsBcRC6NVBr3aF1t7U22nh81pr3PtRmauDTqQ/rfqnC3geWe0PHCMRg9GxHWs/m31OLDWOoK3SilfMYdbfwCBsGMAyM9nwQAAAABJRU5ErkJggg=="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAIAAACQKrqGAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QwJDggEH6ZkwQAAASlJREFUKM+NkT+KwkAYxd/IEENaIbUnUdKYws7CImfwEB7CI0QQFBNCSBRJ4zUs0wUlZf5N5tviy8JarLuv+g38Zni8EdvttmkaIsLvEUKMx2PZNM10OjUM44Patm2e51II8Xg88Fcsy5KmaW42m77vP3ij0Wi/30sApmnGcfxB9TyPiCQfbNt2XRfA+XxerVYADofDer3WWp9OJ6UUgEHtuu71egHo+/75fBIRERVFAYCI3tSyLJMkYU7TlOF2uzG8qbZtLxYLIgqCYLlcaq2jKGJIkkQpNXRVShVF4fs+XzsejwxhGDLUdT28qrWeTCaz2YyIrtfrfD4noizLGO73O085FKiqKggC5svlwpBlGY/P3y4BGIbhOI7+Djfj/FxXAtjtdvhHvgCz/reiTTp6cgAAAABJRU5ErkJggg=="
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAolBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgESU6AAAANXRSTlMAAQIDBAUGCQwNDxAREhMUFyApLzAxMkJHVFlebXF5e4CDm62+xcjKz9PZ3OTo6+/x9/n7/UnKJecAAAB/SURBVBgZBcGJQgEBAAXAcey6tY4KhcpVOgjv/3/NDMDob9MBAIfJ8w4AyktN6gB4WWmkBsD4u+lx3y4BeqcHPpK8wntymwLlTxdJ2gD7CkkKwOAMSQpA5xeSFIDZG2SXArCcQ57SB6QF6//L9WtRNZgcAXTn21vyOQQAzTq4A+uTC/LUhXbmAAAAAElFTkSuQmCC"
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9wCGAEcCdgs1SoAAAHeSURBVCjPVZG9a1NhGMV/7/1okqaaUMutaClqrzSttTTYpa1KpVb/Bh3ERYqomYo4dNDNqUO0IAjq0KG4Z/JbEalYB7FRGhWFeA2xuammob03ue/rkmg904Hz4zzwHJ2GDMNASgmwb2DAnrGs9pPFovsJKG/J/sEN9RyfPJJeK9zdXCvc2ZyYHEsDPf8xTRMOhxKW1THrOrc3VGlGqdKMKuXnNiyrYzYcbkk0WdFo3m9Z7Re/rcxdMr2X4mo6pACupWrC0w+oPX2XbxR//roJ5DTAHh8fnn63eGXKcx8JKZX6nv8isstvRbm6qlZ/PBAvHp6ZGhu1pwFb9PZ23XqSOXc2IpyQL33lG64YPfqYIKjz7OlhKpW6EgJRq233Tp1+fs9QUuoq8EQVF3fTIRrV6eyMAKBpPoYRIADfrwilAl0vuZWVV28KOyZObEuEzd+GLurKbNkrDg7spM+uKE1IsVGV/vkLH+4vZ9euN9/ZH4+3zn/9eEyWnUOqLYpsiyLLzrD6/D4pY7GWeaC/cVYDwDT1oXjMWMi+7vWD9ZQK1lMqu9jjx2PGgmlqQ1tZAB3QgJHkYCSTW+r2c0vdfnIwkgFGGrkO/N0hCuwGWgG7a5eRAsg79TSQAzwgD6z/AVpowc7P3/iuAAAAAElFTkSuQmCC"
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.Layout = void 0;
    var o = i(3), r = n(o), a = i(23), s = n(a), l = i(48), d = n(l), u = i(1), c = n(u), h = i(2), p = n(h), f = i(49),
        g = n(f), m = i(4), A = n(m), y = i(7), x = n(y), b = i(13), v = n(b), w = i(22), S = n(w), E = i(10), C = n(E),
        k = i(26), M = i(15), P = i(37), T = i(17), I = i(40), R = i(18), L = e.Layout = void 0;
    e.Layout = L = function (t, e, i, n) {
        var o = this;
        t = (0, p["default"])(t) ? t : {}, e = (0, p["default"])(e) ? e : {}, jQuery.extend(e, i);
        var a, s, l, u = t.appManager.getApiPath(), h = "/analytics", f = "json";
        o.columns = (0, k.Axis)(e.columns).val(), o.rows = (0, k.Axis)(e.rows).val(), o.filters = (0, k.Axis)(e.filters).val(!0), s = (0, p["default"])(e.access) ? e.access : null, l = (0, c["default"])(e.dataDimensionItems) ? e.dataDimensionItems : null, (0, r["default"])(e.id) && (o.id = e.id), (0, r["default"])(e.interpretationId) && (o.interpretationId = e.interpretationId), (0, r["default"])(e.name) && (o.name = e.name), (0, r["default"])(e.title) && (o.title = e.title), (0, r["default"])(e.description) && (o.description = e.description), (0, p["default"])(e.sorting) && (0, g["default"])(e.sorting.id) && (0, r["default"])(e.sorting.direction) && (o.sorting = new I.Sorting(e.sorting)), (0, r["default"])(e.displayProperty) && (o.displayProperty = e.displayProperty), (0, A["default"])(e.userOrgUnit).length && (o.userOrgUnit = (0, A["default"])(e.userOrgUnit)), R.DateManager.getYYYYMMDD(e.relativePeriodDate) && (o.relativePeriodDate = R.DateManager.getYYYYMMDD(e.relativePeriodDate)), (0, r["default"])(e.displayDescription) && (o.displayDescription = e.displayDescription), (0, A["default"])(e.interpretations).length && (o.interpretations = (0, c["default"])(e.interpretations) ? e.interpretations : null), R.DateManager.getYYYYMMDD(e.lastUpdated) && (o.lastUpdated = R.DateManager.getYYYYMMDD(e.lastUpdated)), R.DateManager.getYYYYMMDD(e.created) && (o.created = R.DateManager.getYYYYMMDD(e.created)), (0, p["default"])(e.user) && (o.user = e.user), (0, r["default"])(e.publicAccess) && (o.publicAccess = e.publicAccess), (0, A["default"])(e.userGroupAccesses).length && (o.userGroupAccesses = e.userGroupAccesses), (0, d["default"])(e.reduceLayout) && (o.reduceLayout = e.reduceLayout), e.el && (0, r["default"])(e.el) && (o.el = e.el), jQuery.extend(o, n), o.getResponse = function () {
            return a
        }, o.setResponse = function (t) {
            a = t
        }, o.getAccess = function () {
            return s
        }, o.setAccess = function (t) {
            s = t
        }, o.getDataDimensionItems = function () {
            return l
        }, o.setDataDimensionItems = function (t) {
            l = t
        }, o.getDefaultPath = function () {
            return u
        }, o.getDefaultSource = function () {
            return h
        }, o.getDefaultFormat = function () {
            return f
        }, o.getRequestPath = function (e, i) {
            return (u || t.appManager.getPath()) + (e || h) + "." + (i || f)
        }, o.getRefs = function () {
            return t
        }
    }, L.prototype.log = function (t, e) {
        e || console.log(t, this)
    }, L.prototype.alert = function (t, e) {
        e || alert(t)
    }, L.prototype.apply = function (t, e) {
        if ((0, p["default"])(t)) {
            var i = this, n = ["name", "description"];
            return e = (0, c["default"])(e) ? e : n, e.forEach(function (e) {
                i[e] = t[e]
            }), i
        }
    }, L.prototype.toRows = function (t) {
        this.rows = (0, v["default"])(this.rows.concat(this.columns.empty(), t ? this.filters.empty() : []))
    }, L.prototype.getAxes = function (t) {
        return (0, v["default"])([this.columns, this.rows, t ? this.filters : null])
    }, L.prototype.getUserOrgUnitUrl = function () {
        if ((0, c["default"])(this.userOrgUnit) && this.userOrgUnit.length) return "userOrgUnit=" + this.userOrgUnit.join(";")
    }, L.prototype.applyInterpretation = function (t) {
        this.setResponse(null), this.relativePeriodDate = t.created, this.interpretationId = t.id
    }, L.prototype.hasDimension = function (t, e) {
        return this.getAxes(e).some(function (e) {
            return e.has(t)
        })
    }, L.prototype.getDimensions = function (t, e, i) {
        var n = [];
        return i = (0, v["default"])(i ? (0, A["default"])(i) : this.getAxes(t)), i.forEach(function (t) {
            n = n.concat(t)
        }), e ? n.sort(function (t, e) {
            return t.dimension > e.dimension
        }) : n
    }, L.prototype.getRecords = function (t, e) {
        var i = [];
        return this.getAxes(t).forEach(function (t) {
            t.forEach(function (t) {
                i = i.concat(t.getRecords(null, e))
            })
        }), i
    }, L.prototype.extendRecords = function (t) {
        this.getAxes(!0).forEach(function (e) {
            e.extendRecords(t)
        })
    }, L.prototype.stripAxes = function (t, e) {
        var i = this;
        e || i.filters || (i.filters = (new i.getRefs).api.Axis()), i.getAxes(t).forEach(function (t) {
            t.strip().forEach(function (t) {
                e || i.filters.add(t)
            })
        })
    }, L.prototype.getRecordIds = function (t) {
        var e = [];
        return this.getRecords(t).forEach(function (t) {
            e.push(t.id)
        }), e
    }, L.prototype.getDimension = function (t) {
        return this.getDimensions(!0).find(function (e) {
            return e.dimension === t
        })
    }, L.prototype.getDimensionNames = function (t, e, i) {
        var n = (0, S["default"])(this.getDimensions(t, !1, i), "dimension");
        return e ? n.sort() : n
    }, L.prototype.getDimensionNameRecordIdsMap = function (t) {
        var e = {};
        return this.getDimensions(!0).forEach(function (i) {
            e[i.dimension] = i.getRecordIds(!1, t)
        }), e
    }, L.prototype.removeDimensionItems = function (t) {
        this.getDimensions(t).forEach(function (t) {
            t.removeItems()
        })
    }, L.prototype.val = function (t) {
        var e = this.getRefs().i18nManager;
        return this.columns || this.rows ? this.hasDimension(refs.dimensionConfig.get("period").dimensionName, !0) ? this : (this.alert(e.get("at_least_one_period_must_be_specified_as_column_row_or_filter"), t), null) : (this.alert(e.get("at_least_one_dimension_must_be_specified_as_row_or_column"), t), null)
    }, L.prototype.toPlugin = function (t) {
        var e, i = this, n = this.getRefs(), o = n.appManager, r = n.optionConfig;
        if (i.id) e = {id: i.id}; else {
            e = i.clone(), e.getAxes(!0).forEach(function (t) {
                t.toPlugin()
            });
            var a = ["showRowTotals", "showColTotals", "showColSubTotals", "showRowSubTotals", "showDimensionLabels", "showValues"],
                s = ["hideEmptyRows", "skipRounding", "showHierarchy", "completedOnly", "hideLegend", "hideTitle", "title", "legendSet", "sorting", "targetLineValue", "targetLineTitle", "baseLineValue", "baseLineTitle", "rangeAxisMaxValue", "rangeAxisMinValue", "rangeAxisSteps", "rangeAxisDecimals", "rangeAxisTitle", "domainAxisTitle", "regression", "cumulative", "sortOrder", "topLimit"],
                l = ["klass", "name", "parentGraphMap", "reportingPeriod", "organisationUnit", "parentOrganisationUnit", "cumulative", "sortOrder", "topLimit", "displayDescription", "interpretations", "lastUpdated", "created", "user", "publicAccess", "userGroupAccesses", "prototype", "url"];
            a.forEach(function (t) {
                e[t] && delete e[t]
            }), s.forEach(function (t) {
                e[t] || delete e[t]
            }), l.forEach(function (t) {
                delete e[t]
            }), e.displayDensity === r.getDisplayDensity("normal").id && delete e.displayDensity, e.fontSize === r.getFontSize("normal").id && delete e.fontSize, e.digitGroupSeparator === r.getDigitGroupSeparator("space").id && delete e.digitGroupSeparator, e.aggregationType === r.getAggregationType("def").id && delete e.aggregationType, e.dataApprovalLevel && e.dataApprovalLevel.id === r.getDataApprovalLevel("def").id && delete e.dataApprovalLevel, "NONE" === e.regressionType && delete e.regressionType
        }
        return e.url = o.getPath(), t && (e.el = t), e
    }, L.prototype.toPostSuper = function () {
        delete this.klass, delete this.getResponse, delete this.setResponse, delete this.getAccess, delete this.setAccess, delete this.getDataDimensionItems, delete this.setDataDimensionItems, delete this.getRequestPath, this.getDimensions(!0).forEach(function (t) {
            t.toPost()
        }), this.rowTotals = this.showRowTotals, delete this.showRowTotals, this.colTotals = this.showColTotals, delete this.showColTotals, this.rowSubTotals = this.showRowSubTotals, delete this.showRowSubTotals, this.colSubTotals = this.showColSubTotals, delete this.showColSubTotals, this.reportParams = {
            paramReportingPeriod: this.reportingPeriod,
            paramOrganisationUnit: this.organisationUnit,
            paramParentOrganisationUnit: this.parentOrganisationUnit
        }, delete this.reportingPeriod, delete this.organisationUnit, delete this.parentOrganisationUnit, delete this.parentGraphMap, delete this.id, delete this.el, delete this.displayDescription, delete this.interpretations, delete this.lastUpdated, delete this.created, delete this.user, delete this.publicAccess, delete this.userGroupAccesses
    }, L.prototype.toSession = function () {
        var t = this, e = t.getResponse();
        return t.extendRecords(e), t
    }, L.prototype.sort = function (t) {
        var e, i, n, o = this.sorting.id, a = this.sorting.direction, l = this.rows[0], d = this.getResponse(),
            u = t ? t.idValueMap : d.getIdValueMap(), c = [];
        (0, r["default"])(o) && (e = this.getDimensionNameRecordIdsMap(d)[l.dimension], e.forEach(function (t) {
            i = parseFloat(u[new T.ResponseRowIdCombination([o, t]).get()]), n = {
                id: t,
                sortingId: (0, s["default"])(i) ? i : Number.MAX_VALUE * -1
            }, c.push(n)
        }), (0, C["default"])(c, a, "sortingId"), l.items = c, l.sorted = !0, l = new M.Dimension(l), this.sorting.id = o)
    }, L.prototype.hasRecordIds = function (t, e) {
        var i = this.getRecordIds(e), n = !1;
        return t = (0, A["default"])(t), t.forEach(function (t) {
            (0, x["default"])(i, t) && (n = !0)
        }), n
    }, L.prototype.getFirstDxId = function () {
        return this.getDimension("dx").getRecordIds()[0]
    }, L.prototype.data = function (t, e) {
        var i = this.getRefs(), n = i.uiManager, o = this.req(t, e), a = this.req(t, e, !0), s = function (t) {
            (0, p["default"])(t) && 409 == t.status && (n.unmask(), (0, r["default"])(t.responseText) && n.alert(JSON.parse(t.responseText)))
        };
        return o.setType(this.getDefaultFormat()), a.setType(this.getDefaultFormat()), o.add("skipData=true"), a.add("skipMeta=true"), o.setError(s), a.setError(Function.prototype), {
            metaData: o.run(),
            data: a.run()
        }
    }, L.prototype.del = function (t, e, i) {
        var n = this, o = this.getRefs(), r = o.instanceManager;
        r.delById(n.id, t, e, i)
    }, L.prototype.toPost = function () {
        var t = this;
        t.toPostSuper()
    }, L.prototype.post = function (t, e, i) {
        var n = this, o = this.getRefs(), a = o.appManager, s = o.instanceManager, l = o.uiManager, d = a.getApiPath(),
            u = s.apiEndpoint, c = d + "/" + u;
        n.toPost(), e && l.mask(), jQuery.ajax({
            url: encodeURI(c),
            type: "POST",
            headers: a.defaultRequestHeaders,
            data: JSON.stringify(n),
            dataType: "json",
            success: function (e, n, o) {
                var a = (o.getResponseHeader("location") || "").split("/").pop();
                (0, r["default"])(a) || console.log("Layout post", "Invalid id", a), i && l.unmask(), t && t(a, n, o)
            }
        })
    }, L.prototype.put = function (t, e, i) {
        var n = this, o = this.getRefs(), r = o.appManager, a = o.instanceManager, s = o.uiManager, l = r.getApiPath(),
            d = a.apiEndpoint, u = l + "/" + d + "/" + n.id;
        n.toPost(), e && s.mask(), jQuery.ajax({
            url: encodeURI(u),
            type: "PUT",
            data: JSON.stringify(n),
            dataType: "json",
            headers: r.defaultRequestHeaders,
            success: function (e, n, o) {
                i && s.unmask(), t && t(null, n, o)
            }
        })
    }, L.prototype.req = function (t, e, i, n, o) {
        var a = this.getRefs(), s = a.optionConfig, l = a.appManager, d = new P.Request,
            u = s.getAggregationType("def").id, h = this.displayProperty || l.getAnalyticsDisplayProperty();
        return this.getDimensions(!1, i).forEach(function (t) {
            d.add(t.url(i))
        }), this.filters && this.filters.forEach(function (t) {
            var e = !(o && t.isRequired());
            d.add(t.url(i, null, e))
        }), this.skipRounding && d.add("skipRounding=true"), d.add("displayProperty=" + h.toUpperCase()), n ? (d.add("tableLayout=true"), d.add("columns=" + this.getDimensionNames(!1, !1, this.columns).join(";")), d.add("rows=" + this.getDimensionNames(!1, !1, this.rows).join(";")), this.hideEmptyRows && d.add("hideEmptyRows=true"), this.showHierarchy && d.add("showHierarchy=true")) : (this.showHierarchy && d.add("hierarchyMeta=true"), this.completedOnly && d.add("completedOnly=true"), (0, r["default"])(this.aggregationType) && this.aggregationType !== u && d.add("aggregationType=" + this.aggregationType), (0, c["default"])(this.userOrgUnit) && this.userOrgUnit.length && d.add(this.getUserOrgUnitUrl()), (0, p["default"])(this.dataApprovalLevel) && (0, r["default"])(this.dataApprovalLevel.id) && "DEFAULT" !== this.dataApprovalLevel.id && d.add("approvalLevel=" + this.dataApprovalLevel.id), this.relativePeriodDate && d.add("relativePeriodDate=" + this.relativePeriodDate)), this.hasRecordIds(l.userIdDestroyCacheKeys, !0) && d.add("user=" + l.userAccount.id), d.setBaseUrl(this.getRequestPath(t, e)), d
    }
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.Response = void 0;
    var o, r = i(2), a = n(r), s = i(4), l = n(s), d = i(13), u = n(d), c = i(179), h = n(c), p = i(52), f = n(p),
        g = i(30), m = n(g), A = i(16), y = i(38), x = i(39), b = i(17);
    e.Response = o, e.Response = o = function (t) {
        var e = this;
        e.klass = o, t = (0, a["default"])(t) ? t : {}, e.headers = (t.headers || []).map(function (t) {
            return new y.ResponseHeader(t)
        }), e.metaData = t.metaData, e.rows = (t.rows || []).map(function (t) {
            return (0, x.ResponseRow)(t)
        }), e.nameHeaderMap = function () {
            var t = {};
            return e.headers.forEach(function (e) {
                t[e.name] = e
            }), t
        }(), e.idValueMap, e.headers.forEach(function (t, e) {
            t.setIndex(e)
        })
    }, o.prototype.clone = function () {
        var t = this;
        return new o(t)
    }, o.prototype.getHeaderByName = function (t) {
        return this.nameHeaderMap[t]
    }, o.prototype.getHeaderIndexByName = function (t) {
        return this.nameHeaderMap[t].index
    }, o.prototype.getNameById = function (t) {
        return this.metaData.names[t] || ""
    }, o.prototype.getHierarchyNameById = function (t, e, i) {
        var n = this.metaData, o = "";
        if (e && n.ouHierarchy.hasOwnProperty(t)) {
            var r = (0, u["default"])(n.ouHierarchy[t].split("/"));
            r.shift();
            for (var a = 0; a < r.length; a++) o += (i ? '<span class="text-weak">' : "") + n.names[r[a]] + (i ? "</span>" : "") + " / "
        }
        return o
    }, o.prototype.getIdsByDimensionName = function (t) {
        return this.metaData[t] || []
    }, o.prototype.addOuHierarchyDimensions = function () {
        var t, e = this, i = e.headers, n = e.metaData.ouHierarchy, o = e.rows, r = 0, a = [], s = [], l = "ou";
        if (n) {
            for (var d = 0; d < i.length; d++) if (i[d].name === l) {
                t = d;
                break
            }
            for (var d = 0; d < o.length; d++) r = Math.max(r, (0, u["default"])(n[o[d][t]].split("/")).length);
            for (var d = 0; d < r; d++) a.push("");
            for (var c, p, d = 0; d < o.length; d++) c = o[d], p = (0, f["default"])((0, u["default"])(n[c[t]].split("/")), (0, m["default"])(a)), (0, h["default"])(c, t, p);
            for (var d = 0; d < r; d++) s.push({
                column: "Organisation unit",
                hidden: !1,
                meta: !0,
                name: "ou",
                type: "java.lang.String"
            });
            return (0, h["default"])(i, t, s), e
        }
    }, o.prototype.printResponseCSV = function () {
        for (var t, e = this, i = e.headers, n = e.metaData.names, o = e.rows, r = "", a = 0; a < i.length; a++) r += '"' + i[a].column + '"' + (a < i.length - 1 ? "," : "\n");
        for (var a = 0; a < o.length; a++) for (var s, l, d = 0; d < o[a].length; d++) s = o[a][d], l = i[d].meta, r += '"' + (l && n[s] ? n[s] : s) + '"', r += d < o[a].length - 1 ? "," : "\n";
        t = document.createElement("a"), t.setAttribute("href", "data:text/csv;charset=utf-8," + encodeURIComponent(r)), t.setAttribute("download", "data.csv"), t.click()
    }, o.prototype.getHeaderIndexOrder = function (t) {
        var e = this, i = [];
        return t.forEach(function (t) {
            i.push(e.getHeaderIndexByName(t))
        }), i
    }, o.prototype.getIdsByDimensionNames = function (t) {
        var e = this, i = [];
        return t.forEach(function (t) {
            i = i.concat(e.getIdsByDimensionName(t) || [])
        }), (0, u["default"])(i)
    }, o.prototype.getItemName = function (t, e, i) {
        return this.getHierarchyNameById(t, e) + this.getNameById(t)
    }, o.prototype.getRecordsByDimensionName = function (t) {
        var e = this.metaData, i = e[t], n = [];
        return i.forEach(function (t) {
            n.push(new A.Record({id: t, name: e.names[t]}).val())
        }), n
    }, o.prototype.getValueHeader = function () {
        return this.getHeaderByName("value")
    }, o.prototype.getValueHeaderIndex = function () {
        return this.getValueHeader().getIndex()
    }, o.prototype.getIdValueMap = function (t) {
        if (this.idValueMap) return this.idValueMap;
        var e, i = this, n = i.getHeaderIndexOrder(t.getDimensionNames()), o = {};
        return this.rows.forEach(function (t) {
            e = new b.ResponseRowIdCombination, n.forEach(function (i) {
                e.add(t.getAt(i))
            }), t.setIdCombination(e), o[e.get()] = t.getAt(i.getValueHeaderIndex())
        }), this.idValueMap = o
    }, o.prototype.getValue = function (t, e) {
        var i = t instanceof b.ResponseRowIdCombination ? t.get() : t;
        return this.getIdValueMap(e)[i]
    }, o.prototype.getValues = function (t, e) {
        var i = this, n = [];
        return t = (0, l["default"])(t), t.forEach(function (t) {
            n.push(i.getValue(t, e))
        }), n
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = e.ChartConfig = void 0;
    e.ChartConfig = i = function () {
        var t = this;
        t.client = {
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
        }, t.server = {
            column: "COLUMN",
            stackedcolumn: "STACKED_COLUMN",
            bar: "BAR",
            stackedbar: "STACKED_BAR",
            line: "LINE",
            area: "AREA",
            pie: "PIE",
            radar: "RADAR",
            gauge: "GAUGE"
        }, t.consts = {
            domain: "domain_",
            targetLine: "targetline_",
            baseLine: "baseline_",
            trendLine: "trendline_"
        }, t.style = {
            inset: 30,
            fontFamily: "Arial,Sans-serif,Roboto,Helvetica,Consolas"
        }, t.theme = {dv1: ["#94ae0a", "#1d5991", "#a61120", "#ff8809", "#7c7474", "#a61187", "#ffd13e", "#24ad9a", "#a66111", "#414141", "#4500c4", "#1d5700"]}, t.c2s = {}, t.s2c = {}, function () {
            Object.keys(t.client).forEach(function (e) {
                t.c2s[t.client[e]] = t.server[e]
            }), Object.keys(t.server).forEach(function (e) {
                t.s2c[t.server[e]] = t.client[e]
            })
        }()
    }
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.DimensionConfig = void 0;
    var o = i(4), r = n(o), a = i(5), s = n(a), l = e.DimensionConfig = void 0;
    e.DimensionConfig = l = function () {
        var t, e, i = this, n = {dx: "data", co: "category", pe: "period", ou: "organisationUnit"}, o = function () {
            e = {
                data: {value: "data", name: t.get("data") || "Data", dimensionName: "dx", objectName: "dx"},
                category: {
                    name: t.get("assigned_categories") || "Assigned categories",
                    dimensionName: "co",
                    objectName: "co"
                },
                indicator: {
                    value: "indicator",
                    name: t.get("indicators") || "Indicators",
                    dimensionName: "dx",
                    objectName: "in"
                },
                dataElement: {
                    value: "dataElement",
                    name: t.get("data_elements") || "Data elements",
                    dimensionName: "dx",
                    objectName: "de"
                },
                operand: {value: "operand", name: t.get("operand") || "Operand", dimensionName: "dx", objectName: "dc"},
                dataSet: {
                    value: "dataSet",
                    name: t.get("data_sets") || "Data sets",
                    dimensionName: "dx",
                    objectName: "ds"
                },
                eventDataItem: {
                    value: "eventDataItem",
                    name: t.get("event_data_items") || "Event data items",
                    dimensionName: "dx",
                    objectName: "di"
                },
                programIndicator: {
                    value: "programIndicator",
                    name: t.get("program_indicators") || "Program indicators",
                    dimensionName: "dx",
                    objectName: "pi"
                },
                period: {value: "period", name: t.get("periods") || "Periods", dimensionName: "pe", objectName: "pe"},
                fixedPeriod: {value: "period"},
                relativePeriod: {value: "relativePeriod"},
                organisationUnit: {
                    value: "organisationUnit",
                    name: t.get("i18n.organisation_units") || "Organisation units",
                    dimensionName: "ou",
                    objectName: "ou"
                },
                dimension: {value: "dimension"},
                value: {value: "value"}
            }
        }, a = function () {
            o()
        };
        i.add = function (t) {
            (0, r["default"])(t).forEach(function (t) {
                t.dimensionName = t.dimensionName || t.id, t.objectName = t.objectName || t.id, e[t.id] = t
            })
        }, i.get = function (t) {
            var i = n;
            return t ? e[t] || e[i[t]] : e
        }, i.getDimensionNameMap = function () {
            var t = {};
            for (var i in e) e.hasOwnProperty(i) && (t[e[i].dimensionName] = e[i]);
            return t
        }, i.getObjectNameMap = function () {
            var t = {};
            for (var i in e) e.hasOwnProperty(i) && (t[e[i].objectName] = e[i]);
            return t
        }, i.setI18nManager = function (e) {
            t = e, a()
        }
    }, l.prototype.applyTo = function (t) {
        var e = this;
        (0, s["default"])(t).forEach(function (t) {
            t.dimensionConfig = e
        })
    }
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.OptionConfig = void 0;
    var o = function () {
        function t(t, e) {
            var i = [], n = !0, o = !1, r = void 0;
            try {
                for (var a, s = t[Symbol.iterator](); !(n = (a = s.next()).done) && (i.push(a.value), !e || i.length !== e); n = !0) ;
            } catch (l) {
                o = !0, r = l
            } finally {
                try {
                    !n && s["return"] && s["return"]()
                } finally {
                    if (o) throw r
                }
            }
            return i
        }

        return function (e, i) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return t(e, i);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }(), r = i(5), a = n(r), s = i(10), l = n(s), d = i(53), u = n(d), c = e.OptionConfig = void 0;
    e.OptionConfig = c = function () {
        var t, e, i, n, o, r, a, s = this, d = function () {
            e = {
                comfortable: {index: 1, id: "COMFORTABLE", name: t.get("comfortable") || "Comfortable"},
                normal: {index: 2, id: "NORMAL", name: t.get("normal") || "Normal"},
                compact: {index: 3, id: "COMPACT", name: t.get("compact") || "Compact"}
            }
        }, u = function () {
            i = {
                large: {index: 1, id: "LARGE", name: t.get("large") || "Large"},
                normal: {index: 2, id: "NORMAL", name: t.get("normal") || "Normal"},
                small: {index: 3, id: "SMALL", name: t.get("small") || "Small"}
            }
        }, c = function () {
            n = {
                none: {
                    index: 1, id: "NONE", name: t.get("none") || "None",
                    value: ""
                },
                space: {index: 2, id: "SPACE", name: t.get("space") || "Space", value: "&nbsp;"},
                comma: {index: 3, id: "COMMA", name: t.get("comma") || "Comma", value: ","}
            }
        }, h = function () {
            o = {
                def: {index: 1, id: "DEFAULT", name: t.get("by_data_element") || "By data element"},
                count: {index: 2, id: "COUNT", name: t.get("count") || "Count"},
                avg: {index: 3, id: "AVERAGE", name: t.get("average") || "Average"},
                sum: {index: 4, id: "SUM", name: t.get("sum") || "Sum"},
                stddev: {index: 5, id: "STDDEV", name: t.get("stddev") || "Standard deviation"},
                variance: {index: 6, id: "VARIANCE", name: t.get("variance") || "Variance"},
                min: {index: 7, id: "MIN", name: t.get("min") || "Min"},
                max: {index: 8, id: "MAX", name: t.get("max") || "Max"}
            }
        }, p = function () {
            r = {def: {index: 1, id: "DEFAULT", name: t.get("show_all_data") || "Show all data"}}
        }, f = function () {
            a = {
                reportingRates: {index: 1, id: "REPORTING_RATE", name: t.get("reporting_rates") || "Reporting rates"},
                reportingRatesOnTime: {
                    index: 2,
                    id: "REPORTING_RATE_ON_TIME",
                    name: t.get("reporting_rates_on_time") || "Reporting rates on time"
                },
                actualReports: {index: 3, id: "ACTUAL_REPORTS", name: t.get("actual_reports") || "Actual reports"},
                actualReportsOnTime: {
                    index: 4,
                    id: "ACTUAL_REPORTS_ON_TIME",
                    name: t.get("actual_reports_on_time") || "Actual reports on time"
                },
                expectedReports: {
                    index: 5,
                    id: "EXPECTED_REPORTS",
                    name: t.get("expected_reports") || "Expected reports"
                }
            }
        }, g = function (t) {
            var e = [];
            for (var i in t) t.hasOwnProperty(i) && e.push(t[i]);
            return (0, l["default"])(e, "ASC", "index"), e
        }, m = function () {
            d(), u(), c(), h(), p(), f()
        };
        s.getDisplayDensity = function (t) {
            return t ? e[t] : e
        }, s.getFontSize = function (t) {
            return t ? i[t] : i
        }, s.getDigitGroupSeparator = function (t) {
            return t ? n[t] : n
        }, s.getAggregationType = function (t) {
            return t ? o[t] : o
        }, s.getDataApprovalLevel = function (t) {
            return t ? r[t] : r
        }, s.getDataSetMetric = function (t) {
            return t ? a[t] : a
        }, s.getDisplayDensityRecords = function () {
            return g(e)
        }, s.getFontSizeRecords = function () {
            return g(i)
        }, s.getDigitGroupSeparatorRecords = function () {
            return g(n)
        }, s.getAggregationTypeRecords = function () {
            return g(o)
        }, s.getDataSetMetricRecords = function () {
            return g(a)
        }, s.getDigitGroupSeparatorIdMap = function () {
            var t = {};
            for (var e in n) n.hasOwnProperty(e) && (t[n[e].id] = n[e]);
            return t
        }, s.setI18nManager = function (e) {
            t = e, m()
        }
    }, c.prototype.applyTo = function (t) {
        var e = this;
        (0, a["default"])(t).forEach(function (t) {
            t.optionConfig = e
        })
    }, c.prototype.getDigitGroupSeparatorValueById = function (t) {
        var e = this, i = e.getDigitGroupSeparatorIdMap()[t];
        return i ? i.value : ""
    }, c.prototype.prettyPrint = function (t, e, i) {
        var n = this, r = n.getDigitGroupSeparator("space").id, a = n.getDigitGroupSeparator("none").id,
            s = n.getDigitGroupSeparator("none").value;
        if (e = e || r, e === a) return t;
        var l = ("" + t).split("."), d = o(l, 2), c = d[0], h = d[1],
            p = c.replace(/\B(?=(\d{3})+(?!\d))/g, n.getDigitGroupSeparatorValueById(e) || s) + (h ? "." + h : "");
        return i && (p = (0, u["default"])(p, "&nbsp;", " ")), p
    }
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.PeriodConfig = void 0;
    var o = i(5), r = n(o), a = e.PeriodConfig = void 0;
    e.PeriodConfig = a = function () {
        var t, e, i = this, n = function () {
            e = {
                Daily: t.get("daily") || "Daily",
                Weekly: t.get("weekly") || "Weekly",
                Monthly: t.get("monthly") || "Monthly",
                BiMonthly: t.get("bimonthly") || "BiMonthly",
                Quarterly: t.get("quarterly") || "Quarterly",
                SixMonthly: t.get("sixmonthly") || "SixMonthly",
                SixMonthlyApril: t.get("sixmonthly_april") || "SixMonthly April",
                Yearly: t.get("yearly") || "Yearly",
                FinancialOct: t.get("financial_oct") || "Financial October",
                FinancialJuly: t.get("financial_july") || "Financial July",
                FinancialApril: t.get("financial_april") || "Financial April"
            }
        }, o = function () {
            n()
        };
        i.getPeriodTypeRecords = function () {
            var t = [];
            for (var i in e) e.hasOwnProperty(i) && t.push({id: i, name: e[i]});
            return t
        }, i.setI18nManager = function (e) {
            t = e, o()
        }
    }, a.prototype.applyTo = function (t) {
        var e = this;
        (0, r["default"])(t).forEach(function (t) {
            t.periodConfig = e
        })
    }
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.UiConfig = void 0;
    var o = i(5), r = n(o), a = e.UiConfig = void 0;
    e.UiConfig = a = function () {
        var t = this;
        jQuery.extend(t, {
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
    }, a.prototype.applyTo = function (t) {
        var e = this;
        (0, r["default"])(t).forEach(function (t) {
            t.uiConfig = e
        })
    }
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.override = e.util = e.init = e.ui = e.config = e.manager = e.pivot = e.api = e.extChartOverrides = e.extOverrides = e.Plugin = e.SimpleRegression = e.dataApprovalLevelsInit = e.dimensionsInit = e.legendSetsInit = e.organisationUnitLevelsInit = e.rootNodesInit = e.authViewUnapprovedDataInit = e.i18nInit = e.IntegrationButton = e.ChartTypeToolbar = e.GridHeaders = e.AboutWindow = e.PluginItem = e.InterpretationItem = e.InterpretationWindow = e.FavoriteButton = e.FavoriteWindow = e.EastRegion = e.NorthRegion = e.Viewport = e.ChartConfig = e.UiConfig = e.OptionConfig = e.PeriodConfig = e.DimensionConfig = e.TableManager = e.InstanceManager = e.UiManager = e.SessionStorageManager = e.RequestManager = e.I18nManager = e.CalendarManager = e.DateManager = e.AppManager = e.Table = e.TableAxis = e.Sorting = e.Response = e.ResponseRowIdCombination = e.ResponseRow = e.ResponseHeader = e.Request = e.Layout = e.Axis = e.Dimension = e.Record = void 0;
    var n = i(16), o = i(15), r = i(26), a = i(140), s = i(37), l = i(38), d = i(39), u = i(17), c = i(141), h = i(40),
        p = i(166), f = i(165), g = i(155), m = i(18), A = i(156), y = i(157), x = i(159), b = i(160), v = i(162),
        w = i(158), S = i(161), E = i(143), C = i(145), k = i(144), M = i(146), P = i(142), T = i(176), I = i(173),
        R = i(42), L = i(28), D = i(43), O = i(20), B = i(45), U = i(46), F = i(41), N = i(44), V = i(167), z = i(171),
        j = i(151), G = i(148), _ = i(154), H = i(153), W = i(152), Y = i(150), X = i(149), q = i(178), Q = i(177),
        K = i(164), J = i(163);
    e.Record = n.Record, e.Dimension = o.Dimension, e.Axis = r.Axis, e.Layout = a.Layout, e.Request = s.Request, e.ResponseHeader = l.ResponseHeader, e.ResponseRow = d.ResponseRow, e.ResponseRowIdCombination = u.ResponseRowIdCombination, e.Response = c.Response, e.Sorting = h.Sorting, e.TableAxis = p.TableAxis, e.Table = f.Table, e.AppManager = g.AppManager, e.DateManager = m.DateManager, e.CalendarManager = A.CalendarManager, e.I18nManager = y.I18nManager, e.RequestManager = x.RequestManager, e.SessionStorageManager = b.SessionStorageManager, e.UiManager = v.UiManager, e.InstanceManager = w.InstanceManager, e.TableManager = S.TableManager, e.DimensionConfig = E.DimensionConfig, e.PeriodConfig = C.PeriodConfig, e.OptionConfig = k.OptionConfig, e.UiConfig = M.UiConfig, e.ChartConfig = P.ChartConfig, e.Viewport = T.Viewport, e.NorthRegion = I.NorthRegion, e.EastRegion = R.EastRegion, e.FavoriteWindow = L.FavoriteWindow, e.FavoriteButton = D.FavoriteButton, e.InterpretationWindow = O.InterpretationWindow, e.InterpretationItem = B.InterpretationItem, e.PluginItem = U.PluginItem, e.AboutWindow = F.AboutWindow, e.GridHeaders = N.GridHeaders, e.ChartTypeToolbar = V.ChartTypeToolbar, e.IntegrationButton = z.IntegrationButton, e.i18nInit = j.i18nInit, e.authViewUnapprovedDataInit = G.authViewUnapprovedDataInit, e.rootNodesInit = _.rootNodesInit, e.organisationUnitLevelsInit = H.organisationUnitLevelsInit, e.legendSetsInit = W.legendSetsInit, e.dimensionsInit = Y.dimensionsInit, e.dataApprovalLevelsInit = X.dataApprovalLevelsInit, e.SimpleRegression = q.SimpleRegression, e.Plugin = Q.Plugin, e.extOverrides = K.extOverrides, e.extChartOverrides = J.extChartOverrides;
    e.api = {
        Record: n.Record,
        Dimension: o.Dimension,
        Axis: r.Axis,
        Layout: a.Layout,
        Request: s.Request,
        ResponseHeader: l.ResponseHeader,
        ResponseRow: d.ResponseRow,
        ResponseRowIdCombination: u.ResponseRowIdCombination,
        Response: c.Response,
        Sorting: h.Sorting
    }, e.pivot = {TableAxis: p.TableAxis, Table: f.Table}, e.manager = {
        AppManager: g.AppManager,
        DateManager: m.DateManager,
        CalendarManager: A.CalendarManager,
        I18nManager: y.I18nManager,
        RequestManager: x.RequestManager,
        SessionStorageManager: b.SessionStorageManager,
        UiManager: v.UiManager,
        InstanceManager: w.InstanceManager,
        TableManager: S.TableManager
    }, e.config = {
        DimensionConfig: E.DimensionConfig,
        PeriodConfig: C.PeriodConfig,
        OptionConfig: k.OptionConfig,
        UiConfig: M.UiConfig,
        ChartConfig: P.ChartConfig
    }, e.ui = {
        Viewport: T.Viewport,
        NorthRegion: I.NorthRegion,
        EastRegion: R.EastRegion,
        FavoriteWindow: L.FavoriteWindow,
        FavoriteButton: D.FavoriteButton,
        InterpretationWindow: O.InterpretationWindow,
        InterpretationItem: B.InterpretationItem,
        PluginItem: U.PluginItem,
        AboutWindow: F.AboutWindow,
        GridHeaders: N.GridHeaders,
        ChartTypeToolbar: V.ChartTypeToolbar,
        IntegrationButton: z.IntegrationButton
    }, e.init = {
        i18nInit: j.i18nInit,
        authViewUnapprovedDataInit: G.authViewUnapprovedDataInit,
        rootNodesInit: _.rootNodesInit,
        organisationUnitLevelsInit: H.organisationUnitLevelsInit,
        legendSetsInit: W.legendSetsInit,
        dimensionsInit: Y.dimensionsInit,
        dataApprovalLevelsInit: X.dataApprovalLevelsInit
    }, e.util = {SimpleRegression: q.SimpleRegression, Plugin: Q.Plugin}, e.override = {
        extOverrides: K.extOverrides,
        extChartOverrides: J.extChartOverrides
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = e.authViewUnapprovedDataInit = void 0;
    e.authViewUnapprovedDataInit = i = function (t) {
        var e = t.appManager, i = t.requestManager;
        e.getApiPath();
        return {
            baseUrl: e.getPath() + "/api/me/authorization/F_VIEW_UNAPPROVED_DATA", success: function (t) {
                e.viewUnapprovedData = t, i.ok(this)
            }
        }
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = e.dataApprovalLevelsInit = void 0;
    e.dataApprovalLevelsInit = i = function (t) {
        var e = t.appManager, i = t.requestManager, n = e.getApiPath(), o = e.getDisplayPropertyUrl();
        return {
            baseUrl: n + "/dataApprovalLevels.json",
            params: ["order=level:asc", "fields=id," + o + ",level", "paging=false"],
            success: function (t) {
                e.addDataApprovalLevels(t.dataApprovalLevels), i.ok(this)
            }
        }
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = e.dimensionsInit = void 0;
    e.dimensionsInit = i = function (t) {
        var e = t.appManager, i = t.requestManager, n = t.dimensionConfig, o = e.getApiPath(),
            r = e.getDisplayPropertyUrl();
        return {
            baseUrl: o + "/dimensions.json", params: ["fields=id," + r, "paging=false"], success: function (t) {
                e.addDimensions(t.dimensions), n.add(t.dimensions), i.ok(this)
            }
        }
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = e.i18nInit = void 0;
    e.i18nInit = i = function (t) {
        var e = t.appManager, i = t.requestManager, n = t.i18nManager, o = e.getUiLocale(), r = e.isUiLocaleDefault(),
            a = e.defaultUiLocale;
        return {
            baseUrl: "i18n/i18n_app.properties",
            type: "ajax",
            dataType: "text",
            headers: {Accept: "text/plain; charset=utf-8"},
            success: function (t) {
                var e = this;
                n.add(dhis2.util.parseJavaProperties(t)), r ? i.ok(e) : jQuery.ajax({
                    url: "i18n/i18n_app_" + o + ".properties",
                    success: function (t) {
                        n.add(dhis2.util.parseJavaProperties(t))
                    },
                    error: function () {
                        console.log("(i18n) No translations found for system locale (" + o + ")")
                    },
                    complete: function () {
                        i.ok(e)
                    }
                })
            },
            error: function () {
                jQuery.ajax({
                    url: "i18n/i18n_app_" + o + ".properties", success: function (t) {
                        n.add(dhis2.util.parseJavaProperties(t))
                    }, error: function () {
                        alert("(i18n) No translations found for system locale (" + o + ") or default locale (" + a + ")")
                    }, complete: function () {
                        i.ok(this)
                    }
                })
            }
        }
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = e.legendSetsInit = void 0;
    e.legendSetsInit = i = function (t) {
        var e = t.appManager, i = t.requestManager, n = e.getApiPath();
        e.getDisplayPropertyUrl();
        return {
            baseUrl: n + "/legendSets.json",
            params: ["fields=id,displayName|rename(name),legends[id,displayName|rename(name),startValue,endValue,color]", "paging=false"],
            success: function (t) {
                e.addLegendSets(t.legendSets), i.ok(this)
            }
        }
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = e.organisationUnitLevelsInit = void 0;
    e.organisationUnitLevelsInit = i = function (t) {
        var e = t.appManager, i = t.requestManager, n = e.getApiPath();
        e.getDisplayPropertyUrl();
        return {
            baseUrl: n + "/organisationUnitLevels.json",
            params: ["fields=id,displayName|rename(name),level", "paging=false"],
            success: function (t) {
                e.addOrganisationUnitLevels(t.organisationUnitLevels), t.organisationUnitLevels.length || alert("No organisation unit levels found"), i.ok(this)
            }
        }
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = e.rootNodesInit = void 0;
    e.rootNodesInit = i = function (t) {
        var e = t.appManager, i = t.requestManager, n = e.getApiPath(), o = e.getDisplayPropertyUrl();
        return {
            baseUrl: n + "/organisationUnits.json",
            params: ["userDataViewFallback=true", "fields=id," + o + ",children[id," + o + "]", "paging=false"],
            success: function (t) {
                e.addRootNodes(t.organisationUnits), i.ok(this)
            }
        }
    }
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.AppManager = void 0;
    var o = i(1), r = n(o), a = i(31), s = n(a), l = i(51), d = n(l), u = i(2), c = n(u), h = i(3), p = n(h), f = i(53),
        g = n(f), m = i(13), A = n(m), y = i(4), x = n(y), b = i(10), v = n(b), w = i(5), S = n(w),
        E = e.AppManager = void 0;
    e.AppManager = E = function (t) {
        var e = this;
        e.refs = (0, c["default"])(t) ? t : {}, e.defaultUiLocale = "en", e.defaultDisplayProperty = "displayName", e.defaultAnalyticsDisplayProperty = "name", e.defaultIndexedDb = "dhis2", e.rootNodeId = "root", e.valueTypes = {
            numeric: ["NUMBER", "UNIT_INTERVAL", "PERCENTAGE", "INTEGER", "INTEGER_POSITIVE", "INTEGER_NEGATIVE", "INTEGER_ZERO_OR_POSITIVE"],
            text: ["TEXT", "LONG_TEXT", "LETTER", "PHONE_NUMBER", "EMAIL"],
            "boolean": ["BOOLEAN", "TRUE_ONLY"],
            date: ["DATE", "DATETIME"],
            aggregate: ["NUMBER", "UNIT_INTERVAL", "PERCENTAGE", "INTEGER", "INTEGER_POSITIVE", "INTEGER_NEGATIVE", "INTEGER_ZERO_OR_POSITIVE", "BOOLEAN", "TRUE_ONLY"]
        }, e.defaultRequestHeaders = {
            Accept: "application/json",
            "Content-Type": "application/json"
        }, e.defaultAnalysisFields = ["*", "interpretations[*,user[id,displayName],likedBy[id,displayName],comments[lastUpdated,text,user[id,displayName]]]", "columns[dimension,filter,items[dimensionItem|rename(id),dimensionItemType,jQuery]]", "rows[dimension,filter,items[dimensionItem|rename(id),dimensionItemType,jQuery]]", "filters[dimension,filter,items[dimensionItem|rename(id),dimensionItemType,jQuery]]", "access", "userGroupAccesses", "publicAccess", "displayDescription", "user[displayName]", "!href", "!rewindRelativePeriods", "!userOrganisationUnit", "!userOrganisationUnitChildren", "!userOrganisationUnitGrandChildren", "!externalAccess", "!relativePeriods", "!columnDimensions", "!rowDimensions", "!filterDimensions", "!organisationUnitGroups", "!itemOrganisationUnitGroups", "!indicators", "!dataElements", "!dataElementOperands", "!dataElementGroups", "!dataSets", "!periods", "!organisationUnitLevels", "!organisationUnits"], e.displayPropertyMap = {
            name: "displayName",
            displayName: "displayName",
            shortName: "displayShortName",
            displayShortName: "displayShortName"
        }, e.userIdDestroyCacheKeys = ["USER_ORGUNIT", "USER_ORGUNIT_CHILDREN", "USER_ORGUNIT_GRANDCHILDREN"], e.appName, e.sessionName, e.manifest, e.env, e.systemInfo, e.systemSettings, e.userAccount, e.calendar, e.periodGenerator, e.viewUnapprovedData, e.rootNodes = [], e.organisationUnitLevels = [], e.dimensions = [], e.legendSets = [], e.dataApprovalLevels = [], e.path, e.dateFormat, e.relativePeriod, e.uiLocale, e.displayProperty, e.displayPropertyUrl, e.analyticsDisplayProperty, e.analysisFields, e.legendSetMap, e.manifestVersion, e.getUrlParam = function (t) {
            var e = "", i = window.location.href;
            if (i.indexOf("?") > -1) for (var n = i.substr(i.indexOf("?") + 1), n = n.split("&"), o = 0; o < n.length; o++) if (n[o].indexOf("=") > -1) {
                var r = n[o].split("=");
                if (r[0].toLowerCase() === t) {
                    e = r[1];
                    break
                }
            }
            return unescape(e)
        }, e.getEventHandlerArray = function () {
            var t = [];
            return t.run = function (e) {
                t.forEach(function (t) {
                    t(e.cmp, e.width, e.height, e.eOpts)
                })
            }, t
        }
    }, E.prototype.getPath = function () {
        var t = this.manifest ? this.manifest.activities.dhis : {};
        return this.path ? this.path : "production" === this.env ? t.href : t.devHref || t.href
    }, E.prototype.getManifestFullVersionNumber = function () {
        var t = this;
        return t.manifest && (0, d["default"])(parseInt(t.manifest.version)) ? parseInt(t.manifest.version) : t.manifestVersion || void 0
    }, E.prototype.getDateFormat = function () {
        return this.dateFormat ? this.dateFormat : this.dateFormat = (0, p["default"])(this.systemSettings.keyDateFormat) ? this.systemSettings.keyDateFormat.toLowerCase() : "yyyy-mm-dd"
    }, E.prototype.getRelativePeriod = function () {
        return this.relativePeriod ? this.relativePeriod : this.relativePeriod = this.systemSettings.keyAnalysisRelativePeriod || "LAST_12_MONTHS"
    }, E.prototype.getUiLocale = function () {
        return this.uiLocale ? this.uiLocale : this.uiLocale = this.userAccount.settings.keyUiLocale || this.defaultUiLocale
    }, E.prototype.getDisplayProperty = function () {
        return this.displayProperty ? this.displayProperty : this.displayProperty = this.displayPropertyMap[this.userAccount.settings.keyAnalysisDisplayProperty || this.defaultDisplayProperty]
    }, E.prototype.getAnalyticsDisplayProperty = function () {
        return this.analyticsDisplayProperty ? this.analyticsDisplayProperty : this.analyticsDisplayProperty = (this.userAccount.settings.keyAnalysisDisplayProperty || this.defaultAnalyticsDisplayProperty).toUpperCase()
    }, E.prototype.getValueTypesByType = function (t) {
        return this.valueTypes[t]
    }, E.prototype.getRootNodes = function () {
        return this.rootNodes
    }, E.prototype.addRootNodes = function (t) {
        var e = this, i = (0, x["default"])(t);
        i.forEach(function (t) {
            t.expanded = !0, t.path = "/" + e.rootId + "/" + t.id
        }), e.rootNodes = (0, A["default"])(e.rootNodes.concat(i))
    }, E.prototype.addOrganisationUnitLevels = function (t) {
        this.organisationUnitLevels = (0, A["default"])(this.organisationUnitLevels.concat((0, x["default"])(t))), (0, v["default"])(this.organisationUnitLevels, "ASC", "level")
    }, E.prototype.addLegendSets = function (t) {
        this.legendSets = (0, A["default"])(this.legendSets.concat((0, x["default"])(t))), (0, v["default"])(this.legendSets, "ASC", "name")
    }, E.prototype.getLegendSetById = function (t) {
        var e = this;
        return e.legendSetMap ? e.legendSetMap[t] : (e.legendSetMap = {}, e.legendSets.forEach(function (t) {
            e.legendSetMap[t.id] = t
        }), e.legendSetMap[t])
    }, E.prototype.addDimensions = function (t) {
        this.dimensions = (0, A["default"])(this.dimensions.concat((0, x["default"])(t))), (0, v["default"])(this.dimensions, "ASC", "name")
    }, E.prototype.addDataApprovalLevels = function (t) {
        this.dataApprovalLevels = (0, A["default"])(this.dataApprovalLevels.concat((0, x["default"])(t))), (0, v["default"])(this.dataApprovalLevels, "ASC", "level")
    }, E.prototype.setAuth = function (t) {
        var e, i = "jQuery" in window ? window.jQuery : void 0, n = "Ext" in window ? window.Ext : void 0;
        t ? e = {Authorization: "Basic " + btoa(t)} : "production" !== this.env && this.manifest && (0, p["default"])(this.manifest.activities.dhis.auth) && (e = {Authorization: "Basic " + btoa(this.manifest.activities.dhis.auth)}), e && (i && i.ajaxSetup({headers: e}), n && (0, c["default"])(n.Ajax) && (n.Ajax.defaultHeaders = e))
    }, E.prototype.applyTo = function (t) {
        var e = this;
        (0, S["default"])(t).forEach(function (t) {
            t.appManager = e
        })
    }, E.prototype.getApiPath = function () {
        var t = this, e = t.getManifestFullVersionNumber() || "";
        return t.getPath() + "/api" + (e ? "/" + e : "")
    }, E.prototype.getLegendColorByValue = function (t, e) {
        for (var i, n, o = this, r = o.getLegendSetById(t), a = 0; a < r.legends.length; a++) if (n = r.legends[a], e >= parseFloat(n.startValue) && e < parseFloat(n.endValue)) {
            i = n.color;
            break
        }
        return i
    }, E.prototype.getDisplayPropertyUrl = function () {
        if (this.displayPropertyUrl) return this.displayPropertyUrl;
        var t = this.getDisplayProperty();
        return this.displayPropertyUrl = t + "|rename(name)"
    }, E.prototype.isUiLocaleDefault = function () {
        return this.getUiLocale() === this.defaultUiLocale
    }, E.prototype.getAnalysisFields = function () {
        return this.analysisFields ? this.analysisFields : this.analysisFields = (0, g["default"])(this.defaultAnalysisFields.join(","), "jQuery", this.getDisplayPropertyUrl())
    }, E.prototype.getRootNode = function () {
        return this.getRootNodes()[0]
    }, E.prototype.getLegendSetIdByDxId = function (t, e) {
        if ((0, p["default"])(t) && (0, s["default"])(e)) {
            var i, n = this;
            new n.refs.api.Request({
                type: "json",
                baseUrl: n.getApiPath() + "/indicators.json",
                params: ["filter=id:eq:" + t, "fields=legendSet[id]", "paging=false"],
                success: function (t) {
                    if ((0, r["default"])(t.indicators) && t.indicators.length && (0, c["default"])(t.indicators[0].legendSet)) {
                        var e = t.indicators[0].legendSet;
                        (0, c["default"])(e) && (i = e.id)
                    }
                },
                complete: function () {
                    e(i)
                }
            }).run()
        }
    }
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.CalendarManager = void 0;
    var o = i(2), r = n(o), a = i(7), s = n(a), l = i(5), d = n(l), u = e.CalendarManager = void 0;
    e.CalendarManager = u = function (t) {
        var e = this;
        t = (0, r["default"])(t) ? t : {}, e.baseUrl = t.baseUrl || "..", e.dateFormat = t.dateFormat || "yyyy-MM-dd", e.defaultCalendarId = "gregorian", e.defaultCalendarIsoId = "iso8601", e.calendarIds = ["coptic", "ethiopian", "islamic", "julian", "nepali", "thai"], e.calendar, e.periodGenerator, e.calendarIdMap
    }, u.prototype.setBaseUrl = function (t) {
        this.baseUrl = t
    }, u.prototype.setDateFormat = function (t) {
        this.dateFormat = t
    }, u.prototype.getPeriodScriptUrl = function () {
        return this.baseUrl + "/dhis-web-commons/javascripts/dhis2/dhis2.period.js"
    }, u.prototype.getCalendarScriptUrl = function (t) {
        return this.baseUrl + "/dhis-web-commons/javascripts/jQuery/calendars/jquery.calendars." + t + ".min.js"
    }, u.prototype.getCalendarIdMap = function () {
        return this.calendarIdMap ? this.calendarIdMap : (this.calendarIdMap = {}, this.calendarIdMap[this.defaultCalendarIsoId] = this.defaultCalendarId, this.calendarIdMap)
    }, u.prototype.createCalendar = function (t) {
        this.calendar = jQuery.calendars.instance(t)
    }, u.prototype.createPeriodGenerator = function (t) {
        this.periodGenerator = new dhis2.period.PeriodGenerator(this.calendar, this.dateFormat)
    }, u.prototype.applyTo = function (t) {
        var e = this;
        (0, d["default"])(t).forEach(function (t) {
            t.calendarManager = e
        })
    }, u.prototype.init = function (t, e) {
        if (t = this.getCalendarIdMap()[t] || t || this.defaultCalendarId, !this.calendar || !this.periodGenerator) {
            var i = this, n = i.getPeriodScriptUrl(), o = function () {
                i.createCalendar(t), i.createPeriodGenerator(t)
            };
            if ((0, s["default"])(i.calendarIds, t)) {
                var r = i.getCalendarScriptUrl(t);
                jQuery.getScript(r, function () {
                    jQuery.getScript(n, function () {
                        o()
                    })
                })
            } else jQuery.getScript(n, function () {
                o()
            })
        }
    }
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.I18nManager = void 0;
    var o = i(5), r = n(o), a = e.I18nManager = void 0;
    e.I18nManager = a = function (t) {
        var e = this, i = t || {};
        e.add = function (t, e) {
            e ? i = t : jQuery.extend(i, t)
        }, e.get = function (t) {
            return t ? i[t] : i
        }
    }, a.prototype.applyTo = function (t) {
        var e = this;
        (0, r["default"])(t).forEach(function (t) {
            t.i18nManager = e
        })
    }
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.InstanceManager = void 0;
    var o = i(3), r = n(o), a = i(2), s = n(a), l = i(7), d = n(l), u = i(5), c = n(u), h = e.InstanceManager = void 0;
    e.InstanceManager = h = function (t) {
        var e = this;
        e.refs = (0, s["default"])(t) ? t : {}, e.api = t.api, e.appManager = t.appManager, e.uiManager = t.uiManager, e.i18nManager = t.i18nManager, e.tableManager = t.tableManager, e.sessionStorageManager = t.sessionStorageManager;
        var i, n = {favorite: null, current: null};
        e.plugin = !1, e.dashboard = !1, e.apiResource, e.apiEndpoint, e.dataStatisticsEventType, e.isStateFavorite = function () {
            return !!n.favorite
        }, e.isStateCurrent = function () {
            return !!n.current
        }, e.isStateDirty = function () {
            return n.favorite !== n.current
        }, e.isStateSaved = function () {
            return !!e.isStateFavorite() && !e.isStateDirty()
        }, e.isStateUnsaved = function () {
            return !!e.isStateFavorite() && e.isStateDirty()
        }, e.getStateFavorite = function () {
            return e.isStateFavorite() ? n.favorite.clone() : n.favorite
        }, e.getStateFavoriteId = function () {
            return e.isStateFavorite() ? n.favorite.id : null
        }, e.getStateFavoriteName = function () {
            return e.isStateFavorite() ? n.favorite.name : null
        }, e.getStateCurrent = function () {
            return n.current ? n.current.clone() : n.current
        }, e.setState = function (t, i, o, r) {
            n.current = t ? t : null, n.current && !i || (n.favorite = n.current), e.sessionStorageManager && n.current && e.sessionStorageManager.set(n.current.toSession(), e.appManager.sessionName);
            var a = n.current ? n.current.clone() : null, s = n.favorite ? n.favorite.clone() : null;
            e.uiManager.setState(a, s, i, o, r)
        }, e.setStateIf = function (t, i) {
            t.id === e.getStateFavoriteId() && e.setState(t, i)
        }, e.getFn = function () {
            return i
        }, e.setFn = function (t) {
            i = t
        }
    }, h.prototype.getLayout = function (t) {
        var e, i = this, n = i.getStateFavorite();
        return t = t || i.uiManager.getUiState(), e = new i.api.Layout(i.refs, t), e && e.apply(n), e
    }, h.prototype.getById = function (t, e) {
        var i = this;
        if (t = (0, r["default"])(t) ? t : i.getStateFavoriteId() || null, !(0, r["default"])(t)) return void console.log("Instance manager, getById, invalid id", t);
        var n = i.appManager, o = i.uiManager, a = i.i18nManager ? i.i18nManager.get() : {};
        e = e || function (t, e) {
            i.getReport(t, e)
        };
        var s = new i.api.Request({
            baseUrl: n.getApiPath() + "/" + i.apiEndpoint + "/" + t + ".json",
            type: "json",
            success: function (t) {
                var n = new i.api.Layout(i.refs, t);
                n && e(n, !0)
            },
            error: function (t) {
                o.unmask(), (0, d["default"])([403], parseInt(t.httpStatusCode)) && (t.message = a.you_do_not_have_access_to_all_items_in_this_favorite || t.message), o.alert(t)
            }
        });
        s.add({fields: n.getAnalysisFields()}), s.run()
    }, h.prototype.delById = function (t, e, i, n) {
        if (!(0, r["default"])(t)) return void console.log("Invalid id", t);
        var o = this, a = (o.appManager, o.uiManager), s = (o.i18nManager.get(), new o.api.Request({
            baseUrl: o.appManager.getApiPath() + "/" + o.apiEndpoint + "/" + t,
            method: "DELETE",
            beforeRun: function () {
                i && a.mask()
            },
            success: function (t, i, o) {
                n && a.unmask(), e && e(t, i, o)
            },
            error: function (t) {
                a.unmask(), a.alert(t)
            }
        }));
        s.run()
    }, h.prototype.getSharingById = function (t, e) {
        var i = this, n = new i.api.Request({
            baseUrl: i.appManager.getApiPath() + "/sharing",
            type: "json",
            success: function (t) {
                e && e(t)
            },
            error: function () {
                i.uiManager.unmask()
            }
        });
        n.add({type: i.apiResource, id: t}), n.run()
    }, h.prototype.getUiState = function () {
        return this.uiManager.getUiState()
    }, h.prototype.postDataStatistics = function () {
        var t = this, e = new t.api.Request({baseUrl: t.appManager.getApiPath() + "/dataStatistics", method: "POST"});
        e.add({eventType: t.dataStatisticsEventType, favorite: t.getStateFavoriteId()}), e.run()
    }, h.prototype.applyTo = function (t) {
        var e = this;
        (0, c["default"])(t).forEach(function (t) {
            t.instanceManager = e
        })
    }, h.prototype.getInterpretationById = function (t, e) {
        if (!(0, r["default"])(t)) return void console.log("Invalid id", t);
        var i = this, n = i.appManager, o = i.uiManager, a = new i.api.Request({
            baseUrl: n.getApiPath() + "/interpretations/" + t + ".json",
            type: "json",
            success: function (t) {
                (0, r["default"])(e) && e(t)
            },
            error: function (t) {
                o.alert(t)
            },
            complete: function (t) {
                (0, r["default"])(e) || o.unmask()
            }
        });
        a.add({fields: "id,created"}), a.run()
    }, h.prototype.getData = function (t) {
        return t = t || this.getLayout(), t.data()
    }, h.prototype.getReport = function (t, e, i, n, o) {
        var r = this, a = function () {
            i || r.setState(t, e, !1, n), (o || r.getFn())(t)
        };
        if (t || (t = r.getLayout())) {
            r.uiManager.mask();
            var s = t.getResponse();
            if (s) a(); else {
                var l = t.data();
                l.metaData.done(function (e) {
                    l.data.done(function (i) {
                        i.metaData = e.metaData, t.setResponse(new r.api.Response(i)), a()
                    })
                })
            }
        }
    }
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.RequestManager = void 0;
    var o = i(1), r = n(o), a = i(2), s = n(a), l = i(31), d = n(l), u = i(4), c = n(u), h = i(5), p = n(h),
        f = e.RequestManager = void 0;
    e.RequestManager = f = function (t) {
        var e = this;
        t = (0, s["default"])(t) ? t : {}, e.requests = (0, r["default"])(t.requests) ? t.requests : [], e.responses = [], e.fn = (0, d["default"])(t.fn) ? t.fn : function () {
            console.log("Request manager done")
        }, e.fnParams = []
    }, f.prototype.add = function (t) {
        var e = this, i = (0, c["default"])(t);
        i.forEach(function (t) {
            t.setManager(e)
        }), this.requests = [].concat(this.requests, i)
    }, f.prototype.set = function (t, e) {
        this.fn = t, e && (this.fnParams = e)
    }, f.prototype.ok = function (t, e) {
        this.responses.push(t), e || this.resolve()
    }, f.prototype.run = function () {
        this.requests.forEach(function (t) {
            t.run()
        })
    }, f.prototype.resolve = function () {
        this.responses.length === this.requests.length && this.fn(this.fnParams)
    }, f.prototype.applyTo = function (t) {
        var e = this;
        (0, p["default"])(t).forEach(function (t) {
            t.requestManager = e
        })
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = e.SessionStorageManager = void 0;
    e.SessionStorageManager = i = function () {
        var t = this;
        t.db = "dhis2", t.supported = "sessionStorage" in window && null !== window.sessionStorage, t.supportHandler = function () {
            return !!this.supported || void alert("Your browser is outdated and does not support local storage. Please upgrade your browser.")
        }
    }, i.prototype.get = function (t) {
        if (this.supportHandler()) {
            var e = JSON.parse(sessionStorage.getItem(this.db)) || {};
            return e[t]
        }
    }, i.prototype.set = function (t, e, i) {
        if (this.supportHandler()) {
            var n = JSON.parse(sessionStorage.getItem(this.db)) || {};
            n[e] = t, sessionStorage.setItem(this.db, JSON.stringify(n)), i && (window.location.href = i)
        }
    }
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.TableManager = void 0;
    var o = i(3), r = n(o), a = i(1), s = n(a), l = e.TableManager = void 0;
    e.TableManager = l = function (t) {
        var e = this, i = t.appManager, n = t.instanceManager, o = t.uiManager, a = t.sessionStorageManager,
            l = function (t) {
                return "ASC" === t.toUpperCase() ? "DESC" : "ASC"
            }, d = function (t, e) {
                t.sorting && t.sorting.id === e ? t.sorting.direction = l(t.sorting.direction) : t.sorting = {
                    id: e,
                    direction: "DESC"
                }, o.mask(), n.getReport(t, !1, !0)
            }, u = function (t) {
                var e = jQuery(t);
                e && e.addClass("pointer highlighted")
            }, c = function (t) {
                var e = jQuery(t);
                e && e.removeClass("pointer highlighted")
            };
        e.setColumnHeaderMouseHandlers = function (t, e) {
            var i, n = e.sortableIdObjects;
            e.idValueMap;
            n.forEach(function (e) {
                i = document.getElementById(e.uuid), i && (i.layout = t, i.metaDataId = e.id, i.onColumnHeaderMouseClick = d, i.onColumnHeaderMouseOver = u, i.onColumnHeaderMouseOut = c, i.setAttribute("onclick", "this.onColumnHeaderMouseClick(this.layout, this.metaDataId)"), i.setAttribute("onmouseover", "this.onColumnHeaderMouseOver(this)"), i.setAttribute("onmouseout", "this.onColumnHeaderMouseOut(this)"))
            })
        };
        var h = function (t, e, n) {
            for (var o, r = e.getUuidObjectMap(), s = t.getResponse(), l = {}, d = [], u = i.getPath(), c = e.uuidDimUuidsMap[n], h = 0; h < c.length; h++) d.push(r[c[h]]);
            t.removeDimensionItems();
            for (var p, f, m, h = 0; h < d.length; h++) p = d[h], f = "col" === p.axis ? t.columns || [] : t.rows || [], f.length && (m = f[p.dim], m.add({
                id: p.id,
                name: s.metaData.names[p.id]
            }));
            for (var A, h = 0; h < d.length; h++) A = d[h].id, t.parentGraphMap.hasOwnProperty(A) && (l[A] = t.parentGraphMap[A]);
            t.parentGraphMap = l, t.toSession(), o = Ext.create("Ext.menu.Menu", {
                shadow: !0,
                showSeparator: !1,
                items: [{
                    text: "Open selection as chart&nbsp;&nbsp;",
                    iconCls: "ns-button-icon-chart",
                    param: "chart",
                    handler: function () {
                        a.set(t, "analytical", u + "/dhis-web-visualizer/index.html?s=analytical")
                    },
                    listeners: {
                        render: function () {
                            this.getEl().on("mouseover", function () {
                                g(e, n, "mouseover", "chart")
                            }), this.getEl().on("mouseout", function () {
                                g(e, n, "mouseout", "chart")
                            })
                        }
                    }
                }, {
                    text: "Open selection as map&nbsp;&nbsp;",
                    iconCls: "ns-button-icon-map",
                    param: "map",
                    disabled: !0,
                    handler: function () {
                        a.set(t, "analytical", u + "/dhis-web-mapping/index.html?s=analytical")
                    },
                    listeners: {
                        render: function () {
                            this.getEl().on("mouseover", function () {
                                g(e, n, "mouseover", "map")
                            }), this.getEl().on("mouseout", function () {
                                g(e, n, "mouseout", "map")
                            })
                        }
                    }
                }]
            }), o.showAt(function () {
                var t = Ext.get(n), e = t.getXY();
                return e[0] += t.getWidth() - 5, e[1] += t.getHeight() - 5, e
            }())
        }, p = function (t) {
            Ext.get(t).addCls("highlighted")
        }, f = function (t) {
            Ext.get(t).removeCls("highlighted")
        }, g = function (t, e, i, n) {
            var o, a = t.uuidDimUuidsMap;
            if ("chart" === n && (0, r["default"])(e) && (0, s["default"])(a[e])) {
                o = a[e];
                for (var l, d = 0; d < o.length; d++) l = Ext.get(o[d]), l && ("mouseover" === i ? l.addCls("highlighted") : "mouseout" === i && l.removeCls("highlighted"))
            }
        };
        e.setValueMouseHandlers = function (t, e) {
            var i, n = e.uuidDimUuidsMap;
            for (var o in n) n.hasOwnProperty(o) && (i = Ext.get(o),
            i && parseFloat(i.dom.textContent) && (i.dom.onValueMouseClick = h, i.dom.onValueMouseOver = p, i.dom.onValueMouseOut = f, i.dom.layout = t, i.dom.table = e, i.dom.setAttribute("onclick", "this.onValueMouseClick(this.layout, this.table, this.id);"), i.dom.setAttribute("onmouseover", "this.onValueMouseOver(this);"), i.dom.setAttribute("onmouseout", "this.onValueMouseOut(this);")))
        }
    }
}, function (t, e, i) {
    (function (t) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {"default": t}
        }

        Object.defineProperty(e, "__esModule", {value: !0}), e.UiManager = void 0;
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, r = i(3), a = n(r), s = i(2), l = n(s), d = i(1), u = n(d), c = i(5), h = n(c), p = i(168),
            f = e.UiManager = void 0;
        e.UiManager = f = function (e) {
            var i = this;
            e = (0, l["default"])(e) ? e : {}, i.appManager = e.appManager, i.instanceManager = e.instanceManager, i.i18nManager, i.preventMask = !1;
            var n = {}, o = {onCurrent: [], onFavorite: []}, r = "centerRegion", s = "meringue", d = "",
                c = function (t, e) {
                    t = t || i.getIntroHtml();
                    var n = document.getElementById(e);
                    return e && n ? void(n.innerHTML = t) : void(i.getUpdateComponent() && i.getUpdateComponent().update(t))
                }, h = function (t, e) {
                    var e = e || i.instanceManager.getStateCurrent();
                    e && (e.applyInterpretation(t), i.instanceManager.getReport(e, !0))
                }, f = i.appManager.getEventHandlerArray();
            i.setInstanceManager = function (t) {
                i.instanceManager = t
            }, i.setI18nManager = function (t) {
                i.i18nManager = t
            }, i.setUpdateFn = function (t) {
                c = t
            }, i.setUpdateInterpretationFn = function (t) {
                h = t
            }, i.reg = function (t, e, i, r) {
                if (!n.hasOwnProperty(e) || !r) return (0, a["default"])(i) && i.split(",").forEach(function (e) {
                    (0, u["default"])(o[e]) && o[e].push(t)
                }), n[e] = t
            }, i.unreg = function (t) {
                n[t] = null
            }, i.get = function (t) {
                return n[t] || document.getElementById(t) || null
            }, i.getUpdateComponent = function () {
                return i.get(r)
            }, i.setUpdateComponent = function (t) {
                r = t
            }, i.componentFrom = function (t) {
                return (0, a["default"])(t) ? i.get(t) : t
            }, i.update = function (t, e) {
                c(t, e)
            }, i.updateInterpretation = function (t) {
                h(t)
            }, i.setState = function (t, e, n, r, a, s) {
                var l = i.get("northRegion"), d = i.get("westRegion"), u = i.get("eastRegion");
                i.instanceManager.plugin || (e ? i.setUrlState("?id=" + e.id + (e.interpretationId ? "&interpretationId=" + e.interpretationId : "")) : i.setUrlState("."), l && l.setState(t, n), o.onCurrent.forEach(function (e) {
                    e.setDisabled(!(t && e.enable))
                }), o.onFavorite.forEach(function (e) {
                    e.setDisabled(!(t && e.enable && n))
                }), (a || d && !r && (!t || n)) && d.setState(t), u && u.setState(t)), t || i.update()
            }, i.setUrlState = function (e) {
                t.history.pushState(null, null, e)
            }, i.getTheme = function () {
                return s
            }, i.setTheme = function (t) {
                s = t
            }, i.getIntroHtml = function () {
                return d
            }, i.setIntroHtml = function (t) {
                d = t
            }, i.getScrollbarSize = function () {
                var t, e = document.body, i = document.createElement("div");
                return i.style.width = i.style.height = "100px", i.style.overflow = "scroll", i.style.position = "absolute", e.appendChild(i), t = {
                    width: i.offsetWidth - i.clientWidth,
                    height: i.offsetHeight - i.clientHeight
                }, e.removeChild(i), t
            }, i.isScrolled = function (t) {
                var e = t.srcElement, i = e.scrollTop + e.clientHeight / e.scrollHeight * e.scrollHeight;
                return i / e.scrollHeight > .9
            }, i.msSetHeight = function (t, e, i) {
                var n, o = 25;
                t.forEach(function (t) {
                    n = e.getHeight() - i - (t.hasToolbar ? o : 0), t.setHeight(n)
                })
            }, i.msSelect = function (t, e) {
                var n = t.getValue();
                if (n.length) {
                    var o = [];
                    n.forEach(function (e) {
                        o.push(t.store.getAt(t.store.findExact("id", e)))
                    }), e.store.add(o)
                }
                i.msFilterAvailable(t, e)
            }, i.msSelectAll = function (t, e, n) {
                var o = t.store.getRange();
                n && o.reverse(), e.store.add(o), i.msFilterAvailable(t, e)
            }, i.msUnselect = function (t, e) {
                var n = e.getValue();
                n.length && (n.forEach(function (i) {
                    t.store.add(e.store.getAt(e.store.findExact("id", i))), e.store.remove(e.store.getAt(e.store.findExact("id", i)))
                }), i.msFilterAvailable(t, e), t.store.sortStore())
            }, i.msUnselectAll = function (t, e) {
                t.store.add(e.store.getRange()), e.store.removeAll(), i.msFilterAvailable(t, e), t.store.sortStore()
            }, i.msFilterAvailable = function (t, e) {
                if (t.store.getRange().length && e.store.getRange().length) {
                    var i = [];
                    t.store.each(function (t) {
                        var n = !1;
                        e.store.each(function (e) {
                            e.data.id === t.data.id && (n = !0)
                        }), n && i.push(t)
                    }), t.store.remove(i)
                }
            }, i.mask = function (t, e) {
                t = (0, l["default"])(t) ? t : i.get(t) || i.getUpdateComponent(), (0, l["default"])(t) && !i.preventMask && (e = e || "Loading..", t.mask && t.mask.destroy && (t.mask.destroy(), t.mask = null), t.mask = new Ext.create("Ext.LoadMask", t, {
                    shadow: !1,
                    msg: e,
                    style: "box-shadow:0",
                    bodyStyle: "box-shadow:0"
                }), t.mask.show())
            }, i.unmask = function (t) {
                t = (0, l["default"])(t) ? t : i.get(t) || i.getUpdateComponent(), (0, l["default"])(t) && t.mask && t.mask.destroy && (t.mask.destroy(), t.mask = null)
            }, i.setAnchorPosition = function (t, e) {
                e = i.componentFrom(e);
                var n = e.getPosition ? e.getPosition() : e.getXY ? e.getXY() : null, o = e.getHeight(),
                    r = i.get("viewport").getWidth(), a = t.getWidth(), s = n[0], l = n[1] + o + 4;
                s + a > r ? t.setPosition(r - a - 2, l) : t.setPosition(s, l)
            }, i.getBodyMask = function () {
                return Ext.getBody().child(".x-mask")
            }, i.addHideOnBlurHandler = function (t) {
                i.getBodyMask().on("click", function () {
                    t.hideOnBlur && t.hide()
                }), t.hasHideOnBlurHandler = !0
            }, i.addDestroyOnBlurHandler = function (t) {
                i.getBodyMask().on("click", function () {
                    t.destroyOnBlur && t.destroy()
                }), t.hasDestroyOnBlurHandler = !0
            }, i.alert = function (t) {
                var e, n, o = {};
                t && (!(0, l["default"])(t) || t.message || t.responseText) && ((0, l["default"])(t) && t.responseText && !t.message && (t = JSON.parse(t.responseText)), (0, a["default"])(t) && (t = {
                    status: "ERROR",
                    message: t
                }), e = (t.status || "INFO").toLowerCase(), o.title = t.status, o.iconCls = "ns-window-title-messagebox " + e, o.html = "", o.html += t.httpStatusCode ? "Code: " + t.httpStatusCode + "<br>" : "", o.html += t.httpStatus ? "Status: " + t.httpStatus + "<br><br>" : "", o.html += t.message + ("." === t.message.substr(t.message.length - 1) ? "" : "."), o.bodyStyle = "padding: 12px; background: #fff; max-width: 600px; max-height: " + i.getHeight() / 2 + "px", o.modal = !0, o.destroyOnBlur = !0, o.listeners = {
                    show: function (t) {
                        t.setPosition(t.getPosition()[0], t.getPosition()[1] / 2), t.hasDestroyOnBlurHandler || i.addDestroyOnBlurHandler(t)
                    }
                }, n = Ext.create("Ext.window.Window", o), n.show())
            }, i.enableRightClick = function () {
                document.body.oncontextmenu = !0
            }, i.disableRightClick = function () {
                document.body.oncontextmenu = function () {
                    return !1
                }
            }, i.confirmUnsaved = function (t, n) {
                var o = i.i18nManager ? i.i18nManager.get() : {};
                (0, p.ConfirmWindow)(e, t, o.all_unsaved_changes_will_be_discarded_continue, null, n).show()
            }, i.confirmReplace = function (t, n) {
                var o = i.i18nManager ? i.i18nManager.get() : {};
                (0, p.ConfirmWindow)(e, t, o.existing_favorite_will_be_replaced_continue, null, n).show()
            }, i.confirmDelete = function (t, n) {
                var o = i.i18nManager ? i.i18nManager.get() : {};
                (0, p.ConfirmWindow)(e, t, o.this_favorite_will_be_deleted_continue, null, n).show()
            }, i.redirectCtrl = function (t, e) {
                0 !== e.button || e.ctrlKey ? (e.ctrlKey && arrayContains([0, 1], e.button) || !e.ctrlKey && 1 === e.button) && window.open(t, "_blank") : window.location.href = t
            }, i.getTitleHtml = function (t) {
                return t ? '<div style="height:19px;line-height:14px;width:100%;font:bold 12px LiberationSans,arial,sans-serif;color:#333;text-align:center;letter-spacing:-0.1px">' + t + "</div>" : ""
            }, i.getEmbedHtml = function () {
                var t = "", e = "v" + parseFloat(i.appManager.systemInfo.version.split(".").join("")),
                    n = i.instanceManager.apiResource, o = n + "1", r = n + "Plugin", a = (n || "").toLowerCase(),
                    s = i.instanceManager.getStateCurrent();
                return t += "<html>\n<head>\n", t += '<script src="//code.jquery.com/jquery-2.2.4.min.js"></script>\n', t += '<script src="//dhis2-cdn.org/' + e + "/plugin/" + a + '.js"></script>\n', t += "</head>\n\n<body>\n", t += '<div id="' + o + '"></div>\n\n', t += "<script>\n\n", t += r + '.url = "<url to server>";\n', t += r + '.username = "<username>";\n', t += r + '.password = "<password>";\n\n', t += n + "Plugin.load([" + JSON.stringify(s.toPlugin(o), null, 2) + "]);\n\n", t += "</script>\n\n", t += "</body>\n</html>"
            }, i.renderLoadingIndicator = function (t) {
                jQuery("#" + t).append('<div class="spinner"></div>')
            }, i.onResize = function (t) {
                f.push(t)
            }, i.resize = function (t) {
                f.run(t)
            }, i.openTableLayoutTab = function (t, e, i) {
                e = e || "xls";
                var n = t.req(null, e, !1, !0).url(), o = i ? "_blank" : "_top";
                window.open(n, o)
            }, i.openPlainDataSource = function (t, e, i) {
                t = ((0, a["default"])(t) ? t : t.url()) + (e || "");
                var n = i ? "_blank" : "_top";
                window.open(t, n)
            }, i.openDataDump = function (t, e, n, o) {
                t = t || i.instanceManager.getLayout();
                var r = !1;
                if (t) {
                    var a = [];
                    t.toRows(r), e = e || "csv", t.showHierarchy && a.push("showHierarchy=true"), a.push("rows=" + t.getDimensionNames(r).join(";"));
                    var s = t.req(null, e).url(a), l = o ? "_blank" : "_top";
                    window.open(s, l)
                }
            }, i.submitSvgForm = function (t) {
                var e = Ext.query("svg"), n = Ext.query("#exportForm")[0];
                return (0, u["default"])(e) && e.length ? (e = Ext.get(e[0]), e = e.parent().dom.innerHTML, Ext.query("#svgField")[0].value = e, Ext.query("#filenameField")[0].value = "test", n.action = i.appManager.getPath() + "/api/svg." + t, void n.submit()) : void alert("Browser does not support SVG")
            }
        }, f.prototype.applyTo = function (t) {
            var e = this;
            (0, h["default"])(t).forEach(function (t) {
                t.uiManager = e
            })
        }, f.prototype.getWidth = function (t) {
            var e = this, i = t ? e.componentFrom(t) : e.getUpdateComponent();
            return i.getWidth()
        }, f.prototype.getHeight = function (t) {
            var e = this, i = t ? e.componentFrom(t) : e.getUpdateComponent();
            return i.getHeight()
        }, f.prototype.getUiState = function () {
            return this.get("viewport").getUiState()
        }, f.prototype.enableConfirmUnload = function () {
            var t = this;
            window.onbeforeunload = function (e) {
                return t.instanceManager && t.instanceManager.isStateUnsaved() ? (("undefined" == typeof e ? "undefined" : o(e)) ? e : window.event).returnValue = "You have unsaved changes." : null
            }
        }, f.prototype.disableConfirmUnload = function () {
            window.onbeforeunload = function (t) {
                return null
            }
        }
    }).call(e, function () {
        return this
    }())
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    e.extChartOverrides = function () {
        Ext.override(Ext.chart.Chart, {
            insetPaddingObject: {}, alignAxes: function () {
                function t(t) {
                    var e = n.findIndex("position", t);
                    return e < 0 ? null : n.getAt(e)
                }

                var e, i = this, n = i.axes, o = i.legend, r = ["top", "right", "bottom", "left"], a = i.insetPadding,
                    s = i.insetPaddingObject,
                    l = {top: s.top || a, right: s.right || a, bottom: s.bottom || a, left: s.left || a};
                Ext.each(r, function (e) {
                    var i, n = "left" === e || "right" === e, r = t(e);
                    o !== !1 && o.position === e && (i = o.getBBox(), l[e] += (n ? i.width : i.height) + l[e]), r && r.bbox && (i = r.bbox, l[e] += n ? i.width : i.height)
                }), e = {
                    x: l.left,
                    y: l.top,
                    width: i.curWidth - l.left - l.right,
                    height: i.curHeight - l.top - l.bottom
                }, i.chartBBox = e, n.each(function (t) {
                    var i = t.position, n = "left" === i || "right" === i;
                    t.x = "right" === i ? e.x + e.width : e.x, t.y = "top" === i ? e.y : e.y + e.height, t.width = n ? e.width : e.height, t.length = n ? e.height : e.width
                })
            }
        }), Ext.override(Ext.chart.series.Line, {
            drawSeries: function () {
                var t, e, n, o, r, a, s, l, d, u, c, h, p, f, g, m, A, y, x, b, v, w, S, E, C, k, M, P, T, I, R, L, D,
                    O, B, U, F, N, V, z = this, j = z.chart, G = j.axes, _ = j.getChartStore(), H = _.getCount(),
                    W = z.chart.surface, Y = {}, X = z.group, q = z.showMarkers, Q = z.markerGroup, K = j.shadow,
                    J = z.shadowGroups, Z = z.shadowAttributes, jQuery = z.smooth, tt = J.length, et = ["M"], it = ["M"],
                    nt = ["M"], ot = ["M"], rt = j.markerIndex, at = [].concat(z.axis), st = [], lt = {}, dt = [],
                    ut = !1, ct = [], ht = z.markerStyle, pt = z.style, ft = z.colorArrayStyle,
                    gt = ft && ft.length || 0, mt = Ext.isNumber, At = z.seriesIdx, yt = z.getAxesForXAndYFields(),
                    xt = yt.xAxis, bt = yt.yAxis;
                if (z.fireEvent("beforedraw", z) !== !1) if (H && !z.seriesIsHidden) {
                    if (B = Ext.apply(ht || {}, z.markerConfig), F = B.type, delete B.type, U = pt, U["stroke-width"] || (U["stroke-width"] = .5), rt && Q && Q.getCount()) for (m = 0; m < rt; m++) v = Q.getAt(m), Q.remove(v), Q.add(v), w = Q.getAt(Q.getCount() - 2), v.setAttributes({
                        x: 0,
                        y: 0,
                        translate: {x: w.attr.translation.x, y: w.attr.translation.y}
                    }, !0);
                    for (z.unHighlightItem(), z.cleanHighlights(), z.setBBox(), Y = z.bbox, z.clipRect = [Y.x, Y.y, Y.width, Y.height], m = 0, y = at.length; m < y; m++) x = G.get(at[m]), x && (b = x.calcEnds(), "top" == x.position || "bottom" == x.position ? (T = b.from, I = b.to) : (R = b.from, L = b.to));
                    !z.xField || mt(T) || "bottom" != xt && "top" != xt || G.get(xt) || (x = Ext.create("Ext.chart.axis.Axis", {
                        chart: j,
                        fields: [].concat(z.xField)
                    }).calcEnds(), T = x.from, I = x.to), !z.yField || mt(R) || "right" != bt && "left" != bt || G.get(bt) || (x = Ext.create("Ext.chart.axis.Axis", {
                        chart: j,
                        fields: [].concat(z.yField)
                    }).calcEnds(), R = x.from, L = x.to), isNaN(T) ? (T = 0, M = Y.width / (H - 1 || 1)) : M = Y.width / (I - T || H - 1 || 1), isNaN(R) ? (R = 0, P = Y.height / (H - 1 || 1)) : P = Y.height / (L - R || H - 1 || 1), z.eachRecord(function (t, e) {
                        return E = t.get(z.xField), ("string" == typeof E || "object" == ("undefined" == typeof E ? "undefined" : i(E)) && !Ext.isDate(E) || xt && G.get(xt) && "Category" == G.get(xt).type) && (E = E in lt ? lt[E] : lt[E] = e), C = t.get(z.yField), "undefined" == typeof C || "string" == typeof C && !C ? void(Ext.isDefined(Ext.global.console) && Ext.global.console.warn("[Ext.chart.series.Line]  Skipping a store element with an undefined value at ", t, E, C)) : (("object" == ("undefined" == typeof C ? "undefined" : i(C)) && !Ext.isDate(C) || bt && G.get(bt) && "Category" == G.get(bt).type) && (C = e), ct.push(e), st.push(E), void dt.push(C))
                    }), y = st.length, y > Y.width && (k = z.shrink(st, dt, Y.width), st = k.x, dt = k.y), z.items = [], N = 0, y = st.length;
                    for (m = 0; m < y; m++) if (E = st[m], C = dt[m], C !== !1) {
                        if (d = (Y.x + (E - T) * M).toFixed(2), u = (Y.y + Y.height - (C - R) * P).toFixed(2), ut && (ut = !1, it.push("M")), it = it.concat([d, u]), "undefined" == typeof f && "undefined" != typeof u && (f = u, p = d), z.line && !j.resizing || (et = et.concat([d, Y.y + Y.height / 2])), j.animate && j.resizing && z.line && (z.line.setAttributes({path: et}, !0), z.fillPath && z.fillPath.setAttributes({
                                path: et,
                                opacity: .2
                            }, !0), z.line.shadows)) for (e = z.line.shadows, A = 0, tt = e.length; A < tt; A++) n = e[A], n.setAttributes({path: et}, !0);
                        q && (v = Q.getAt(N++), v ? (v.setAttributes({
                            value: '"' + E + ", " + C + '"',
                            x: 0,
                            y: 0,
                            hidden: !1
                        }, !0), v._to = {translate: {x: +d, y: +u}}) : (v = Ext.chart.Shape[F](W, Ext.apply({
                            group: [X, Q],
                            x: 0,
                            y: 0,
                            translate: {x: +(c || d), y: h || Y.y + Y.height / 2},
                            value: '"' + E + ", " + C + '"',
                            zIndex: 4e3
                        }, B)), v._to = {translate: {x: +d, y: +u}})), z.items.push({
                            series: z,
                            value: [E, C],
                            point: [d, u],
                            sprite: v,
                            storeItem: _.getAt(ct[m])
                        }), c = d, h = u
                    } else 1 == it.length && (it = []), ut = !0, z.items.push(!1);
                    if (!(it.length <= 1)) {
                        if (z.smooth && (ot = Ext.draw.Draw.smooth(it, mt(jQuery) ? jQuery : z.defaultSmoothness)), nt = jQuery ? ot : it, j.markerIndex && z.previousPath ? (r = z.previousPath, jQuery || Ext.Array.erase(r, 1, 2)) : r = it, !z.line && (z.line = W.add(Ext.apply({
                                type: "path",
                                group: X,
                                path: et,
                                stroke: U.stroke || U.fill
                            }, U || {})), K && z.line.setAttributes(Ext.apply({}, z.shadowOptions), !0), z.line.setAttributes({
                                fill: "none",
                                zIndex: 3e3
                            }), !U.stroke && gt && z.line.setAttributes({stroke: ft[At % gt]}, !0), K)) for (e = z.line.shadows = [], o = 0; o < tt; o++) t = Z[o], t = Ext.apply({}, t, {path: et}), n = W.add(Ext.apply({}, {
                            type: "path",
                            group: J[o]
                        }, t)), e.push(n);
                        if (z.fill && (s = nt.concat([["L", d, Y.y + Y.height], ["L", p, Y.y + Y.height], ["L", p, f]]), z.fillPath || (z.fillPath = W.add({
                                group: X,
                                type: "path",
                                opacity: U.opacity || .3,
                                fill: U.fill || ft[At % gt],
                                path: et
                            }))), g = q && Q.getCount(), j.animate) {
                            if (a = z.fill, D = z.line, l = z.renderer(D, !1, {path: nt}, m, _), Ext.apply(l, U || {}, {stroke: U.stroke || U.fill}), delete l.fill, D.show(!0), j.markerIndex && z.previousPath ? z.animation = O = z.onAnimate(D, {
                                    to: l,
                                    from: {path: r}
                                }) : z.animation = O = z.onAnimate(D, {to: l}), K) for (e = D.shadows, A = 0; A < tt; A++) e[A].show(!0), j.markerIndex && z.previousPath ? z.onAnimate(e[A], {
                                to: {path: nt},
                                from: {path: r}
                            }) : z.onAnimate(e[A], {to: {path: nt}});
                            if (a && (z.fillPath.show(!0), z.onAnimate(z.fillPath, {
                                    to: Ext.apply({}, {
                                        path: s,
                                        fill: U.fill || ft[At % gt],
                                        "stroke-width": 0
                                    }, U || {})
                                })), q) {
                                for (N = 0, m = 0; m < y; m++) z.items[m] && (S = Q.getAt(N++), S && (l = z.renderer(S, _.getAt(m), S._to, m, _), z.onAnimate(S, {to: Ext.apply(l, B || {})}), S.show(!0)));
                                for (; N < g; N++) S = Q.getAt(N), S.hide(!0)
                            }
                        } else {
                            if (l = z.renderer(z.line, !1, {
                                    path: nt,
                                    hidden: !1
                                }, m, _), Ext.apply(l, U || {}, {stroke: U.stroke || U.fill}), delete l.fill, z.line.setAttributes(l, !0), K) for (e = z.line.shadows, A = 0; A < tt; A++) e[A].setAttributes({
                                path: nt,
                                hidden: !1
                            }, !0);
                            if (z.fill && z.fillPath.setAttributes({path: s, hidden: !1}, !0), q) {
                                for (N = 0, m = 0; m < y; m++) z.items[m] && (S = Q.getAt(N++), S && (l = z.renderer(S, _.getAt(m), S._to, m, _), S.setAttributes(Ext.apply(B || {}, l || {}), !0), S.show(!0)));
                                for (; N < g; N++) S = Q.getAt(N), S.hide(!0)
                            }
                        }
                        j.markerIndex && (z.smooth ? Ext.Array.erase(it, 1, 2) : Ext.Array.splice(it, 1, 0, it[1], it[2]), z.previousPath = it), z.renderLabels(), z.renderCallouts(), z.fireEvent("draw", z)
                    }
                } else if (V = this.items) for (m = 0, y = V.length; m < y; ++m) V[m].sprite && V[m].sprite.hide(!0)
            }
        }), Ext.override(Ext.chart.Legend, {
            updatePosition: function () {
                var t, e, i = this, n = i.width, o = i.height, r = (i.padding, i.chart), a = r.chartBBox,
                    s = r.insetPadding, l = a.width - 2 * s, d = a.height - 2 * s, u = a.x + s, c = a.y + s,
                    h = r.surface, p = Math.floor;
                if (i.isDisplayed()) {
                    switch (i.position) {
                        case"left":
                            t = s, e = p(c + d / 2 - o / 2);
                            break;
                        case"right":
                            t = p(h.width - n) - s, e = p(c + d / 2 - o / 2);
                            break;
                        case"top":
                            t = p((u + a.width) / 2 - n / 2) - 7, e = s;
                            break;
                        case"bottom":
                            t = p(u + l / 2 - n / 2), e = p(h.height - o) - s;
                            break;
                        default:
                            t = p(i.origX) + s, e = p(i.origY) + s
                    }
                    i.x = t, i.y = e, Ext.each(i.items, function (t) {
                        t.updatePosition()
                    }), i.boxSprite.setAttributes(i.getBBox(), !0)
                }
            }
        }), Ext.override(Ext.chart.LegendItem, {
            createLegend: function (t) {
                function e(t) {
                    var e = l[t];
                    return Ext.isArray(e) ? e[u] : e
                }

                var i, n, o, r, a = this, s = t.yFieldIndex, l = a.series, d = l.type, u = a.yFieldIndex, c = a.legend,
                    h = a.surface, p = (c.x + a.x, c.y + a.y, a.zIndex), f = !1, g = Ext.apply(l.seriesStyle, l.style),
                    m = c.labelMarkerSize || 10;
                o = a.add("label", h.add({
                    type: "text",
                    x: 30,
                    y: 0,
                    zIndex: p || 0,
                    font: c.labelFont,
                    fill: c.labelColor || "#000",
                    text: e("title") || e("yField")
                })), "line" === d || "scatter" === d ? ("line" === d && a.add("line", h.add({
                    type: "path",
                    path: "M0.5,0.5L16.5,0.5",
                    zIndex: p,
                    "stroke-width": l.lineWidth,
                    "stroke-linejoin": "round",
                    "stroke-dasharray": l.dash,
                    stroke: g.stroke || "#000",
                    style: {cursor: "pointer"}
                })), (l.showMarkers || "scatter" === d) && (n = Ext.apply(l.markerStyle, l.markerConfig || {}), a.add("marker", Ext.chart.Shape[n.type](h, {
                    fill: n.fill,
                    x: 8.5,
                    y: .5,
                    zIndex: p,
                    radius: n.radius || n.size,
                    style: {cursor: "pointer"}
                })))) : a.add("box", h.add({
                    type: "rect",
                    zIndex: p,
                    x: 6,
                    y: 0,
                    width: m,
                    height: m,
                    fill: l.getLegendColor(s),
                    style: {cursor: "pointer"}
                })), a.setAttributes({hidden: !1}, !0), i = a.getBBox(), r = a.add("mask", h.add({
                    type: "rect",
                    x: i.x,
                    y: i.y,
                    width: i.width || 20,
                    height: i.height || 20,
                    zIndex: (p || 0) + 1e3,
                    fill: "#f00",
                    opacity: 0,
                    style: {cursor: "pointer"}
                })), a.on("mouseover", function () {
                    o.setStyle({"font-weight": "bold"}), r.setStyle({cursor: "pointer"}), l._index = s, l.highlightItem()
                }, a), a.on("mouseout", function () {
                    o.setStyle({"font-weight": "normal"}), l._index = s, l.unHighlightItem()
                }, a), l.visibleInLegend(s) || (f = !0, o.setAttributes({opacity: .5}, !0)), a.on("mousedown", function () {
                    f ? (l.showAll(), o.setAttributes({opacity: 1}, !0)) : (l.hideAll(), o.setAttributes({opacity: .5}, !0)), f = !f
                }, a), a.updatePosition({x: 0, y: 0})
            }
        }), Ext.override(Ext.chart.axis.Axis, {
            drawHorizontalLabels: function () {
                var t, e, i, n, o, r, a, s, l, d, u, c = this, h = c.label, p = Math.floor, f = Math.max,
                    g = c.chart.axes, m = c.position, A = c.inflections, y = A.length, x = c.labels,
                    b = (c.labelGroup, 0);
                c.chart.maxGutter[1];
                for (a = y - 1, i = A[0], u = c.getOrCreateLabel(0, c.label.renderer(x[0])), t = Math.floor(Math.abs(Math.sin(h.rotate && h.rotate.degrees * Math.PI / 180 || 0))), d = 0; d < y; d++) {
                    i = A[d], r = c.label.renderer(x[d]) || "", o = c.getOrCreateLabel(d, r), e = o._bbox, b = f(b, e.height + c.dashSize + c.label.padding), s = p(i[0] - (t ? e.height : e.width) / 2), 0 == c.chart.maxGutter[0] && (0 == d && g.findIndex("position", "left") == -1 ? s = i[0] : d == a && g.findIndex("position", "right") == -1 && (s = i[0] - e.width)), l = "top" == m ? i[1] - 2 * c.dashSize - c.label.padding - e.height / 2 : i[1] + 2 * c.dashSize + c.label.padding + e.height / 2;
                    var v = h.rotate && h.rotate.degrees && !Ext.Array.contains([0, 90, 180, 270, 360], h.rotate.degrees),
                        w = Math.floor((o.text.length - 12) * -1 * .75), S = v ? i[0] - o._bbox.width + w : s;
                    o.setAttributes({
                        hidden: !1,
                        x: S,
                        y: l
                    }, !0), 0 == d || !c.intersect(o, n) && !c.intersect(o, u) ? n = o : o.hide(!0)
                }
                return b
            }
        }), Ext.override(Ext.chart.axis.Radial, {
            drawLabel: function () {
                var t, e, i, n, o, r, a = this.chart, s = a.surface, l = a.chartBBox, d = a.store,
                    u = l.x + l.width / 2, c = l.y + l.height / 2, h = Math.min(l.width, l.height) / 2, p = Math.max,
                    f = Math.round, g = [], m = [], A = [], y = !this.maximum, x = this.maximum || 0, b = this.steps,
                    v = 0, w = 2 * Math.PI, S = Math.cos, E = Math.sin, C = this.label.display, k = "none" !== C,
                    M = 10, P = "#333", T = "normal 9px sans-serif", I = a.seriesStyle;
                if (P = I ? I.labelColor : P, T = I ? I.labelFont : T, k) {
                    if (a.series.each(function (t) {
                            m.push(t.yField), i = t.xField
                        }), d.each(function (t, n) {
                            if (y) for (n = 0, e = m.length; n < e; n++) x = p(+t.get(m[n]), x);
                            A.push(t.get(i))
                        }), this.labelArray) {
                        if (g = this.labelArray, "categories" != C) for (v = 0; v < b; v++) g[v].setAttributes({
                            text: f((v + 1) / b * x),
                            x: u,
                            y: c - h * (v + 1) / b,
                            "text-anchor": "middle",
                            "stroke-width": .1,
                            stroke: "#333",
                            fill: P,
                            font: T
                        }, !0);
                        if ("scale" != C) for (n = 0, b = A.length; n < b; n++) o = S(n / b * w) * (h + M), r = E(n / b * w) * (h + M), g[v + n] && g[v + n].setAttributes({
                            type: "text",
                            text: A[n],
                            x: u + o,
                            y: c + r,
                            "text-anchor": o * o <= .001 ? "middle" : o < 0 ? "end" : "start",
                            fill: P,
                            font: T
                        }, !0)
                    } else {
                        if ("categories" != C) for (v = 1; v <= b; v++) t = s.add({
                            type: "text",
                            text: f(v / b * x),
                            x: u,
                            y: c - h * v / b,
                            "text-anchor": "middle",
                            "stroke-width": .1,
                            stroke: "#333",
                            fill: P,
                            font: T
                        }), t.setAttributes({hidden: !1}, !0), g.push(t);
                        if ("scale" != C) for (n = 0, b = A.length; n < b; n++) o = S(n / b * w) * (h + M), r = E(n / b * w) * (h + M), t = s.add({
                            type: "text",
                            text: A[n],
                            x: u + o,
                            y: c + r,
                            "text-anchor": o * o <= .001 ? "middle" : o < 0 ? "end" : "start",
                            fill: P,
                            font: T
                        }), t.setAttributes({hidden: !1}, !0), g.push(t)
                    }
                    this.labelArray = g
                }
            }
        })
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = e.extOverrides = void 0;
    e.extOverrides = i = function () {
        Ext.QuickTips.init()
    }
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.Table = void 0;
    var o, r = i(3), a = n(r), s = i(23), l = n(s), d = i(1), u = n(d), c = i(2), h = n(c), p = i(48), f = n(p),
        g = i(49), m = n(g), A = i(184), y = n(A), x = i(182), b = n(x), v = i(52), w = n(v), S = i(22), E = n(S),
        C = i(7), k = n(C), M = i(13), P = n(M), T = i(54), I = n(T), R = i(17);
    e.Table = o, e.Table = o = function (t, e, i, n, r) {
        var s = this, d = o, c = d.appManager, p = d.dimensionConfig, g = d.optionConfig;
        r = r || {};
        var A, x, v, w, S, C, M, T, L, D, O, B, U, F, N, V, z, j, G, _, H = function (t) {
                var e;
                return t.xItems ? (e = t.xItems.unique, e ? e.length < 2 ? 1 : t.size / e[0].length : null) : null
            }, W = H(i), Y = (H(n), []), X = [], q = [], Q = {},
            K = (0, h["default"])(t.legendSet) ? c.getLegendSetById(t.legendSet.id) : null, J = 0,
            Z = (p.getDimensionNameMap(), p.getObjectNameMap(), e.getIdValueMap(t)), jQuery = [];
        A = function (t, e) {
            return e = e || 2, parseFloat(w(t, 2)).toString()
        }, x = function (e, i) {
            var n, o, r, s, d, u,
                c = (0, h["default"])(e) && (0, a["default"])(e.type) && "value" === e.type.substr(0, 5) && !e.empty,
                p = c && "value" === e.type, m = "", A = "";
            if (u = function (t) {
                    var e = t.htmlValue, i = parseFloat(t.htmlValue);
                    return t.collapsed ? "" : p ? (0, f["default"])(e) ? e : (0, l["default"])(i) && i == e ? i : e : e || ""
                }, !(0, h["default"])(e)) return "";
            if (e.hidden || e.collapsed) return "";
            if (J += 1, p && K) {
                var y = parseFloat(e.value);
                o = K.legends;
                for (var x = 0; x < o.length; x++) (0, b["default"])(y, o[x].startValue, o[x].endValue) === y && (n = o[x].color)
            }
            return r = e.colSpan ? 'colspan="' + e.colSpan + '" ' : "", s = e.rowSpan ? 'rowspan="' + e.rowSpan + '" ' : "", d = u(e), d = (0, k["default"])(["dimension", "filter"], e.type) ? d : g.prettyPrint(d, t.digitGroupSeparator), m += e.hidden ? " td-hidden" : "", m += e.collapsed ? " td-collapsed" : "", m += p ? " pointer" : "", m += e.cls ? " " + e.cls : "", (0, a["default"])(i) && (m += " td-sortable", jQuery.push({
                id: i,
                uuid: e.uuid
            })), A += "<td " + (e.uuid ? 'id="' + e.uuid + '" ' : ""), A += ' class="' + m + '" ' + r + s, A += e.title ? ' title="' + e.title + '" ' : "", A += 'style="' + (n && p ? "color:" + n + "; " : "") + '">' + d + "</td>"
        }, v = function (t) {
            var e = parseFloat(t);
            return (0, f["default"])(t) ? 1 : (0, l["default"])(e) && e == t ? e : 0
        }, w = function (t, e) {
            if (t = parseFloat(t), e = parseFloat(e), (0, l["default"])(t) && (0, l["default"])(e)) {
                var i = S(t);
                return i > e ? (0, y["default"])(t, e) : t
            }
            return t
        }, S = function (t) {
            var e = new String(t);
            return e.indexOf(".") > -1 ? e.length - e.indexOf(".") - 1 : 0
        }, C = function () {
            return !!t.showColTotals
        }, M = function () {
            return !!t.showRowTotals
        }, T = function () {
            return !!t.showColSubTotals && n.type && n.dims > 1
        }, L = function () {
            return !!t.showRowSubTotals && i.type && i.dims > 1
        }, D = function () {
            return n.type && 1 === n.dims
        }, O = function () {
            var o, r, a = [], s = i.type ? t.columns.getDimensionNames(e) : [],
                l = n.type ? t.rows.getDimensionNames(e) : [];
            if (o = function (t) {
                    return t = t || {}, x({
                        cls: t.cls ? " " + t.cls : "pivot-empty",
                        colSpan: t.colSpan ? t.colSpan : 1,
                        rowSpan: t.rowSpan ? t.rowSpan : 1,
                        htmlValue: t.htmlValue ? t.htmlValue : "&nbsp;"
                    })
                }, r = function (t) {
                    var r = [];
                    if (t < i.dims - 1) {
                        if (n.type && n.dims) for (var a = 0; a < n.dims - 1; a++) r.push(o({cls: "pivot-dim-label"}));
                        r.push(o({cls: "pivot-dim-label", htmlValue: e.getNameById(s[t])}))
                    } else {
                        if (n.type && n.dims) for (var a = 0; a < n.dims - 1; a++) r.push(o({
                            cls: "pivot-dim-label",
                            htmlValue: e.getNameById(l[a])
                        }));
                        r.push(o({
                            cls: "pivot-dim-label",
                            htmlValue: e.getNameById(l[a]) + (i.type && n.type ? "&nbsp;/&nbsp;" : "") + e.getNameById(s[t])
                        }))
                    }
                    return r
                }, !i.type) {
                if (n.type && t.showDimensionLabels) {
                    for (var d = [], u = 0; u < l.length; u++) d.push(o({
                        cls: "pivot-dim-label",
                        htmlValue: e.getNameById(l[u])
                    }));
                    a.push(d)
                }
                return a
            }
            for (var c, u = 0; u < i.dims; u++) {
                c = [], t.showDimensionLabels ? c = c.concat(r(u)) : 0 === u && c.push(i.type && n.type ? o({
                    colSpan: n.dims,
                    rowSpan: i.dims
                }) : "");
                for (var h, p, f, g = 0, m = 0; g < i.size; g++) m++, p = null, f = null, h = i.objects.all[u][g], h.type = "dimension", h.cls = "pivot-dim", h.noBreak = !1, h.hidden = !(h.rowSpan || h.colSpan), h.htmlValue = e.getItemName(h.id, t.showHierarchy, !0), u === i.dims - 1 && D() && (p = i.ids[g]), c.push(x(h, p)), 0 === u && m === i.span[u] && L() && (c.push(x({
                    type: "dimensionSubtotal",
                    cls: "pivot-dim-subtotal cursor-default",
                    rowSpan: i.dims,
                    htmlValue: "&nbsp;"
                })), m = 0), 0 === u && g === i.size - 1 && M() && (f = D() ? "total" : null, c.push(x({
                    uuid: (0, I["default"])(),
                    type: "dimensionTotal",
                    cls: "pivot-dim-total",
                    rowSpan: i.dims,
                    htmlValue: "Total"
                }, f)));
                a.push(c)
            }
            return a
        }, B = function () {
            var o, r, a = [], s = [], l = [], d = [], c = i.type ? i.size : 1, h = n.type ? n.size : 1;
            if (r = function (t) {
                    t.children || (t.collapsed = !0, t.parent && t.parent.oldestSibling.children--), t.parent && r(t.parent.oldestSibling)
                }, n.type) for (var p, f = 0; f < n.size; f++) {
                p = [];
                for (var g, y = 0; y < n.dims; y++) g = n.objects.all[y][f], g.type = "dimension", g.cls = "pivot-dim td-nobreak" + (t.showHierarchy ? " align-left" : ""), g.noBreak = !0, g.hidden = !(g.rowSpan || g.colSpan), g.htmlValue = e.getItemName(g.id, t.showHierarchy, !0), p.push(g);
                s.push(p)
            } else t.showDimensionLabels && s.push([{type: "transparent", cls: "pivot-transparent-row"}]);
            for (var b, w, f = 0; f < h; f++) {
                b = [], w = [];
                for (var S, C, P, O, B, U, F, y = 0; y < c; y++) S = new R.ResponseRowIdCombination, B = !1, F = [], S.add(i.type ? i.ids[y] : ""), S.add(n.type ? n.ids[f] : ""), U = (0, I["default"])(), i.type && (F = F.concat(i.objects.all[i.dims - 1][y].uuids)), n.type && (F = F.concat(n.objects.all[n.dims - 1][f].uuids)), P = Z[S.get()], (0, m["default"])(P) ? (C = v(P), O = P) : (C = 0, O = "&nbsp;", B = !0), b.push(C), w.push({
                    uuid: U,
                    type: "value",
                    cls: "pivot-value" + (B ? " cursor-default" : ""),
                    value: C,
                    htmlValue: O,
                    empty: B,
                    uuids: F
                }), Q[U] = F;
                Y.push(b), X.push(w)
            }
            if (i.type && M()) for (var f = 0, B = [], N = 0; f < X.length; f++) {
                for (y = 0, g; y < X[f].length; y++) g = X[f][y], B.push(g.empty), N += g.value;
                if (l.push({
                        type: "valueTotal",
                        cls: "pivot-value-total",
                        value: N,
                        htmlValue: (0, k["default"])(B, !1) ? A(N) : "",
                        empty: !(0, k["default"])(B, !1)
                    }), D()) {
                    var V = new R.ResponseRowIdCombination(["total", n.ids[f]]), z = !(0, k["default"])(B, !1);
                    Z[V.get()] = z ? null : N
                }
                B = [], N = 0
            }
            if (i.type && n.type && t.hideEmptyRows) for (var j, G, _, f = 0; f < X.length; f++) if (j = X[f], G = !(0, k["default"])((0, E["default"])(j, "empty"), !1)) {
                for (var y = 0; y < j.length; y++) j[y].collapsed = !0;
                M() && (l[f].collapsed = !0), _ = s[f][n.dims - 1], r(_)
            }
            if (o = X, L()) {
                for (var p, H, q, K = [], f = 0; f < o.length; f++) {
                    p = [], H = 0, q = 0;
                    for (var J, y = 0, jQuery = [], B = []; y < o[f].length; y++) if (J = o[f][y], H += J.value, B.push(!!J.empty), jQuery.push(!!J.collapsed), q++, p.push(J), q === W) {
                        var z = !(0, k["default"])(B, !1);
                        p.push({
                            type: "valueSubtotal",
                            cls: "pivot-value-subtotal" + (z ? " cursor-default" : ""),
                            value: H,
                            htmlValue: z ? "&nbsp;" : A(H),
                            empty: z,
                            collapsed: !(0, k["default"])(jQuery, !1)
                        }), q = 0, H = 0, B = [], jQuery = []
                    }
                    K.push(p)
                }
                o = K
            }
            if (T()) {
                var tt, et = [], K = [], it = [];
                tt = function (t) {
                    for (var e, i = [], o = 0; o < n.dims; o++) e = {}, e.type = "dimensionSubtotal", e.cls = "pivot-dim-subtotal cursor-default", e.collapsed = (0, k["default"])(t, !0), 0 === o ? (e.htmlValue = "&nbsp;", e.colSpan = n.dims) : e.hidden = !0, i.push(e);
                    return i
                };
                for (var p, f = 0, jQuery = []; f < s.length; f++) et.push(s[f]), jQuery.push(!!s[f][0].collapsed), (0, u["default"])(s[f + 1]) && !s[f + 1][0].root || (et.push(tt(jQuery)), jQuery = []);
                for (var f = 0; f < et.length; f++) K.push([]);
                for (var f = 0; f < o[0].length; f++) for (var jQuery, J, y = 0, nt = 0, ot = 0, rt = 0, B = []; y < o.length; y++) if (J = o[y][f], K[ot++].push(J), rt += J.value, B.push(!!J.empty), nt++, s[y][0].root && (jQuery = !!s[y][0].collapsed), !(0, u["default"])(s[y + 1]) || s[y + 1][0].root) {
                    var z = !(0, k["default"])(B, !1);
                    K[ot++].push({
                        type: "value" === J.type ? "valueSubtotal" : "valueSubtotalTotal",
                        value: rt,
                        htmlValue: z ? "&nbsp;" : A(rt),
                        collapsed: jQuery,
                        cls: ("value" === J.type ? "pivot-value-subtotal" : "pivot-value-subtotal-total") + (z ? " cursor-default" : "")
                    }), nt = 0, rt = 0, B = []
                }
                for (var g, f = 0, jQuery = [], B = [], rt = 0, at = 0; f < l.length; f++) if (g = l[f], it.push(g), jQuery.push(!!g.collapsed), B.push(!!g.empty), rt += g.value, at++, at === n.span[0]) {
                    var z = !(0, k["default"])(B, !1);
                    it.push({
                        type: "valueTotalSubgrandtotal",
                        cls: "pivot-value-total-subgrandtotal" + (z ? " cursor-default" : ""),
                        value: rt,
                        htmlValue: z ? "&nbsp;" : A(rt),
                        empty: z,
                        collapsed: !(0, k["default"])(jQuery, !1)
                    }), jQuery = [], B = [], rt = 0, at = 0
                }
                s = et, o = K, l = it
            }
            for (var p, f = 0; f < o.length; f++) p = [], p = p.concat(s[f]), p = p.concat(o[f]), i.type && (p = p.concat(l[f])), d.push(p);
            for (var p, f = 0; f < d.length; f++) {
                p = [];
                for (var y = 0; y < d[f].length; y++) p.push(x(d[f][y]));
                a.push(p)
            }
            return a
        }, U = function () {
            var t = [];
            if (n.type && C()) {
                for (var e, o = 0, r = 0, a = []; o < X[0].length; o++) {
                    for (var s, l = 0; l < X.length; l++) s = X[l][o], r += s.value, a.push(!!s.empty);
                    q.push({
                        type: "valueTotal",
                        value: r,
                        htmlValue: (0, k["default"])(a, !1) ? A(r) : "",
                        empty: !(0, k["default"])(a, !1),
                        cls: "pivot-value-total"
                    }), r = 0, a = []
                }
                if (e = q, i.type && L()) {
                    for (var d, u = [], o = 0, c = 0, a = [], h = 0; o < e.length; o++) d = e[o], u.push(d), c += d.value, a.push(!!d.empty), h++, h === W && (u.push({
                        type: "valueTotalSubgrandtotal",
                        value: c,
                        htmlValue: (0, k["default"])(a, !1) ? A(c) : "",
                        empty: !(0, k["default"])(a, !1),
                        cls: "pivot-value-total-subgrandtotal"
                    }), c = 0, h = 0);
                    e = u
                }
                for (var o = 0; o < e.length; o++) t.push(x(e[o]))
            }
            return t
        }, F = function () {
            var t = 0, e = [], o = [];
            if (M() && C()) {
                for (var r, a = 0; a < q.length; a++) r = q[a], t += r.value, e.push(r.empty);
                i.type && n.type && o.push(x({
                    type: "valueGrandTotal",
                    cls: "pivot-value-grandtotal",
                    value: t,
                    htmlValue: (0, k["default"])(e, !1) ? A(t) : "",
                    empty: !(0, k["default"])(e, !1)
                }))
            }
            return o
        }, N = function () {
            var t, e, i = U(), o = F(), r = [];
            return C() && (n.type && (t = [x({
                type: "dimensionSubtotal",
                cls: "pivot-dim-total",
                colSpan: n.dims,
                htmlValue: "Total"
            })]), e = [].concat(t || [], i || [], o || []), r.push(e)), r
        }, V = function (e) {
            var o = n.dims || 0;
            if (!t.showDimensionLabels) {
                if (!i.type && n.type) return o + 1;
                if (i.type && n.type) return e + (o > 1 ? o - 1 : o)
            }
            return e
        }, z = function (e) {
            if (t.filters) {
                var i = t.filters.getRecordNames(!1, t.getResponse(), !0), n = [];
                return n.push(x({
                    type: "filter",
                    cls: "pivot-filter cursor-default",
                    colSpan: V(e),
                    title: i,
                    htmlValue: i
                })), [n]
            }
        }, j = function (e) {
            if (t.title) {
                var i = t.title, n = [];
                return n.push(x({
                    type: "filter",
                    cls: "pivot-filter cursor-default",
                    colSpan: V(e),
                    title: i,
                    htmlValue: i
                })), [n]
            }
        }, G = function () {
            var e, i = "pivot user-select";
            i += t.displayDensity && t.displayDensity !== g.getDisplayDensity("normal").id ? " displaydensity-" + t.displayDensity : "", i += t.fontSize && t.fontSize !== g.getFontSize("normal").id ? " fontsize-" + t.fontSize : "", e = '<table class="' + i + '">';
            for (var n = 0; n < _.length; n++) e += "<tr>" + _[n].join("") + "</tr>";
            return e += "</table>"
        }, function () {
            var t = O(), e = (t[0] || []).length;
            n.dims || 0;
            _ = (0, P["default"])([].concat(r.skipTitle ? [] : j(e) || [], z(e) || [], t || [], B() || [], N() || []))
        }(), s.html = G(_), s.uuidDimUuidsMap = Q, s.sortableIdObjects = jQuery, s.idValueMap = Z, s.layout = t, s.response = e, s.colAxis = i, s.rowAxis = n, s.tdCount = J
    }, o.prototype.getUuidObjectMap = function () {
        return (0, w["default"])(this.colAxis ? this.colAxis.uuidObjectMap || {} : {}, this.rowAxis ? this.rowAxis.uuidObjectMap || {} : {})
    }
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.TableAxis = void 0;
    var o = i(1), r = n(o), a = i(22), s = n(a), l = i(47), d = n(l), u = i(10), c = n(u), h = i(30), p = n(h),
        f = i(54), g = n(f), m = e.TableAxis = void 0;
    e.TableAxis = m = function (t, e, i) {
        var n, o, a, l = [], u = 1, h = [], f = [], m = [], A = [], y = [], x = [], b = [], v = {};
        if ("col" === i ? (l = t.columns, n = "colSpan") : "row" === i && (l = t.rows, n = "rowSpan"), (0, r["default"])(l) && l.length) {
            a = function () {
                var i = [], n = t.getDimensionNameRecordIdsMap(e);
                return l.forEach(function (t) {
                    t.sorted ? i.push((0, s["default"])(t.items, "id")) : i.push(n[t.dimension])
                }), i
            }(), o = a.length;
            for (var w, S = 0; S < o; S++) w = a[S].length, h.push(w), u *= w, f.push(u);
            for (var S = 0; S < o; S++) 1 === h[S] ? 0 === S ? m.push(u) : t.hideEmptyRows && "row" === i ? m.push(u / f[S]) : m.push(m[0]) : m.push(u / f[S]);
            if (A.push(a[0]), o.length > 1) for (var E, C, S = 1; S < o; S++) {
                E = [], C = 1 === h[S] ? h[0] : f[S - 1];
                for (var k = 0; k < C; k++) E = E.concat(a[S]);
                A.push(E)
            }
            for (var M, P, T, I, S = 0; S < o; S++) {
                M = [], P = a[S], T = m[S], I = u / (T * P.length);
                for (var k = 0; k < I; k++) for (var R = 0; R < P.length; R++) for (var L = 0; L < T; L++) M.push(P[R]);
                y.push(M)
            }
            for (var D, S = 0; S < u; S++) {
                D = [];
                for (var k = 0; k < o; k++) D.push(y[k][S]);
                D.length && x.push(D.join("-"))
            }
            for (var O, S = 0; S < y.length; S++) {
                O = [];
                for (var B, k = 0; k < y[S].length; k++) B = {
                    id: y[S][k],
                    uuid: (0, g["default"])(),
                    dim: S,
                    axis: i
                }, S === y.length - 1 && (B.leaf = !0), O.push(B);
                b.push(O)
            }
            for (var U, F, N, S = 0; S < b.length; S++) {
                F = [];
                for (var B, V, k = 0, z = 0; k < b[S].length; k++) B = b[S][k], F.push(B.id), 0 === z && (B[n] = m[S], B.leaf && (B.children = 0), B.oldest = !0, 0 === S && (B.root = !0), V = B), B.oldestSibling = V, ++z === m[S] && (z = 0);
                if (S > 0) {
                    U = b[S - 1], N = (0, d["default"])(F);
                    for (var k = 0; k < U.length; k++) U[k].children = N.length
                }
            }
            if (o > 1) for (var j, S = 1; S < o; S++) {
                j = b[S];
                for (var k = 0, z = 0, T = m[S - 1]; k < j.length; k++) j[k].parent = b[S - 1][k]
            }
            if (b.length) for (var G, _, B, H = o > 1 ? (0, c["default"])((0, p["default"])(m))[1] : u, W = b[b.length - 1], S = 0, Y = []; S < W.length; S++) {
                for (G = W[S], Y.push(G.uuid), _ = [], B = G; B.parent;) B = B.parent, _.push(B.oldestSibling.uuid);
                if (G.uuids = (0, p["default"])(_), Y.length === H) {
                    for (var G, k = S - H + 1; k <= S; k++) G = W[k], G.uuids = G.uuids.concat(Y);
                    Y = []
                }
            }
            for (var S = 0; S < b.length; S++) for (var X, k = 0; k < b[S].length; k++) X = b[S][k], v[X.uuid] = X;
            return {
                type: i,
                items: l,
                xItems: {unique: a, gui: A, all: y},
                objects: {all: b},
                ids: x,
                span: m,
                dims: o,
                size: u,
                uuidObjectMap: v
            }
        }
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = e.ChartTypeToolbar = void 0;
    e.ChartTypeToolbar = i = function (t) {
        var e = (t.appManager, t.uiManager, t.instanceManager, t.i18nManager.get()), i = t.dimensionConfig,
            n = (i.get("data"), i.get("period"), i.get("organisationUnit"), i.get("category"), t.chartConfig),
            e = t.i18nManager.get(), o = [], r = function (t) {
                o.push(t)
            }, a = Ext.create("Ext.button.Button", {
                xtype: "button",
                chartType: n.client.column,
                iconCls: "ns-button-icon-type-column",
                name: n.client.column,
                tooltipText: e.column_chart,
                pressed: !0,
                listeners: {added: r}
            }), s = Ext.create("Ext.button.Button", {
                xtype: "button",
                chartType: n.client.stackedcolumn,
                iconCls: "ns-button-icon-type-columnstacked",
                name: n.client.stackedcolumn,
                tooltipText: e.stacked_column_chart,
                listeners: {added: r}
            }), l = Ext.create("Ext.button.Button", {
                xtype: "button",
                chartType: n.client.bar,
                iconCls: "ns-button-icon-type-bar",
                name: n.client.bar,
                tooltipText: e.bar_chart,
                listeners: {added: r}
            }), d = Ext.create("Ext.button.Button", {
                xtype: "button",
                chartType: n.client.stackedbar,
                iconCls: "ns-button-icon-type-barstacked",
                name: n.client.stackedbar,
                tooltipText: e.stacked_bar_chart,
                listeners: {added: r}
            }), u = Ext.create("Ext.button.Button", {
                xtype: "button",
                chartType: n.client.line,
                iconCls: "ns-button-icon-type-line",
                name: n.client.line,
                tooltipText: e.line_chart,
                listeners: {added: r}
            }), c = Ext.create("Ext.button.Button", {
                xtype: "button",
                chartType: n.client.area,
                iconCls: "ns-button-icon-type-area",
                name: n.client.area,
                tooltipText: e.area_chart,
                listeners: {added: r}
            }), h = Ext.create("Ext.button.Button", {
                xtype: "button",
                chartType: n.client.pie,
                iconCls: "ns-button-icon-type-pie",
                name: n.client.pie,
                tooltipText: e.pie_chart,
                listeners: {added: r}
            }), p = Ext.create("Ext.button.Button", {
                xtype: "button",
                chartType: n.client.radar,
                iconCls: "ns-button-icon-type-radar",
                name: n.client.radar,
                tooltipText: e.radar_chart,
                listeners: {added: r}
            }), f = Ext.create("Ext.button.Button", {
                xtype: "button",
                chartType: n.client.gauge,
                iconCls: "ns-button-icon-type-gauge",
                name: n.client.gauge,
                tooltipText: e.meter_chart,
                listeners: {added: r}
            }), g = Ext.create("Ext.toolbar.Toolbar", {
                height: 45,
                style: "padding-top:1px; border:0 none; border-top:1px solid #dadada",
                reset: function () {
                    this.setChartType()
                },
                getChartType: function () {
                    for (var t = 0; t < o.length; t++) if (o[t].pressed) return o[t].chartType
                },
                setChartType: function (t) {
                    if (!t) return void o[0].toggle(!0);
                    for (var e = 0; e < o.length; e++) o[e].chartType === t && o[e].toggle(!0)
                },
                defaults: {
                    height: 40, toggleGroup: "charttype", handler: function (t) {
                        t.pressed || t.toggle()
                    }, listeners: {
                        afterrender: function (t) {
                            "button" === t.xtype && Ext.create("Ext.tip.ToolTip", {
                                target: t.getEl(),
                                html: t.tooltipText,
                                anchor: "bottom"
                            })
                        }
                    }
                },
                items: [{
                    xtype: "label",
                    text: e.type,
                    style: "font-size:11px; font-weight:bold; padding:13px 8px 0 6px"
                }, a, s, l, d, u, c, h, p, f]
            });
        return g
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = e.ConfirmWindow = void 0;
    e.ConfirmWindow = i = function (t, e, i, n, o) {
        var r = t.i18nManager.get(), a = n || "OK", s = r.cancel || "Cancel", l = "2px", d = 72, u = 29,
            c = {bodyStyle: "background:#fff; border:0 none"}, h = Ext.create("Ext.button.Button", {
                xtype: "button",
                width: d,
                height: u,
                text: '<span style="color:#fff; font-weight:bold">' + a + "</span>",
                style: "border-color:#3079ed; background:#619dff; border-radius:" + l,
                handler: function () {
                    o && o(), f.destroy()
                }
            }), p = Ext.create("Ext.button.Button", {
                xtype: "button",
                width: d,
                height: u,
                text: '<span style="color:#555; font-weight:bold">' + s + "</span>",
                style: "border-color:#ccc; border-radius:" + l,
                handler: function () {
                    f.destroy()
                }
            }), f = Ext.create("Ext.window.Window", {
                bodyStyle: "background:#fff; padding:30px 60px 26px 42px",
                defaults: c,
                modal: !0,
                preventHeader: !0,
                resizable: !1,
                closeable: !1,
                items: [{
                    html: e,
                    bodyStyle: "padding:0; border:0 none; font-size:16px",
                    style: "margin-bottom:20px"
                }, {
                    html: i,
                    bodyStyle: "padding:0; border:0 none; font-size:13px",
                    style: "margin-bottom:16px"
                }, {layout: "hbox", defaults: c, items: [h, {width: 10}, p]}],
                listeners: {
                    afterrender: function () {
                        this.setPosition(this.getPosition()[0], this.getPosition()[1] / 2)
                    }, show: function () {
                        h.focus(!1, 50)
                    }
                }
            });
        return f
    }
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.EmbedButton = void 0;
    var n = i(170), o = e.EmbedButton = void 0;
    e.EmbedButton = o = function (t) {
        var e = t.i18nManager.get();
        return Ext.create("Ext.button.Button", {
            text: e.embed, disabled: !0, menu: {}, handler: function (e) {
                (0, n.EmbedWindow)(t).show()
            }
        })
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = e.EmbedWindow = void 0;
    e.EmbedWindow = i = function (t) {
        var e = (t.appManager, t.uiManager), i = (t.instanceManager, t.i18nManager.get()),
            n = Ext.create("Ext.form.field.TextArea", {
                width: 700,
                height: 400,
                readOnly: !0,
                cls: "ns-textarea monospaced",
                value: e.getEmbedHtml()
            }), o = Ext.create("Ext.window.Window", {
                title: i.embed_in_web_page,
                layout: "fit",
                modal: !0,
                resizable: !1,
                items: n,
                destroyOnBlur: !0,
                bbar: ["->", {
                    text: i.select, handler: function () {
                        n.selectText()
                    }
                }],
                listeners: {
                    show: function (t) {
                        e.setAnchorPosition(t, "favoriteButton"), e.enableRightClick(), t.hasDestroyOnBlurHandler || e.addDestroyOnBlurHandler(t)
                    }, hide: function () {
                        e.disableRightClick()
                    }
                }
            });
        return e.reg(o, "embedWindow"), o
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = e.IntegrationButton = void 0;
    e.IntegrationButton = i = function (t, e) {
        var i, n = e.isDefaultButton, o = e.objectName, r = e.moduleName, a = e.btnIconCls, s = e.btnText,
            l = e.menuItem1Text, d = e.menuItem2Text, u = e.menuItem3Text, c = t.appManager, h = t.uiManager,
            p = t.instanceManager, f = t.sessionStorageManager, g = (t.i18nManager.get(), c.getPath());
        return i = n ? {
            text: s, iconCls: a, toggleGroup: "module", pressed: !0, handler: function () {
                this.pressed || this.toggle()
            }
        } : {
            text: s, iconCls: a, toggleGroup: "module", menu: {}, handler: function (t) {
                t.menu = Ext.create("Ext.menu.Menu", {
                    closeAction: "destroy",
                    shadow: !1,
                    showSeparator: !1,
                    items: [{
                        text: l + "&nbsp;&nbsp;", cls: "ns-menu-item-noicon", listeners: {
                            render: function (t) {
                                this.getEl().dom.addEventListener("click", function (e) {
                                    t.disabled || h.redirectCtrl(g + "/" + r, e)
                                })
                            }
                        }
                    }, "-", {
                        text: d + "&nbsp;&nbsp;",
                        cls: "ns-menu-item-noicon",
                        disabled: !p.isStateCurrent(),
                        listeners: {
                            render: function (t) {
                                this.getEl().dom.addEventListener("click", function (e) {
                                    if (!t.disabled) {
                                        var i = p.getStateCurrent().toSession();
                                        i.parentGraphMap = h.get("treePanel").getParentGraphMap(), f.set(i, "analytical"), f.supported && h.redirectCtrl(g + "/" + r + "/index.html?s=analytical", e)
                                    }
                                })
                            }
                        }
                    }, {
                        text: u + "&nbsp;&nbsp;",
                        cls: "ns-menu-item-noicon",
                        disabled: !f.get(o),
                        listeners: {
                            render: function (t) {
                                this.getEl().dom.addEventListener("click", function (e) {
                                    t.disabled || h.redirectCtrl(g + "/" + r + "/index.html?s=" + o, e)
                                })
                            }
                        }
                    }],
                    listeners: {
                        show: function () {
                            h.setAnchorPosition(t.menu, t)
                        }, hide: function () {
                            t.menu.destroy(), h.get("defaultIntegrationButton").toggle()
                        }, destroy: function (e) {
                            t.menu = null
                        }
                    }
                }), t.menu.show()
            }
        }, Ext.create("Ext.button.Button", i)
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = e.LinkWindow = void 0;
    e.LinkWindow = i = function (t) {
        var e = t.appManager, i = t.uiManager, n = t.instanceManager, o = t.i18nManager.get(), r = e.getPath(),
            a = e.getApiPath(), s = n.apiEndpoint, l = n.apiModule, d = Ext.create("Ext.window.Window", {
                title: o.favorite_link,
                layout: "fit",
                modal: !0,
                resizable: !1,
                destroyOnBlur: !0,
                bodyStyle: "padding:12px 12px 15px; background-color:#fff; font-size:11px",
                html: function () {
                    var t = n.getStateFavorite(), e = r + "/" + l + "/index.html?id=" + t.id,
                        i = a + "/" + s + "/" + t.id + "/data.html+css",
                        o = "padding-bottom:10px; font-weight:bold; color:#444", d = "";
                    return d += '<div style="' + o + '">Open in this app</div>', d += '<a class="user-select td-nobreak" target="_blank" href="' + e + '">' + e + "</a>", d += "<br/><br/><br/>", d += '<div style="' + o + '">Open in web api</div>', d += '<a class="user-select td-nobreak" target="_blank" href="' + i + '">' + i + "</a>"
                }(),
                listeners: {
                    show: function (t) {
                        i.setAnchorPosition(t, "favoriteButton"), i.enableRightClick(), t.hasDestroyOnBlurHandler || i.addDestroyOnBlurHandler(t)
                    }, hide: function () {
                        i.disableRightClick()
                    }
                }
            });
        return i.reg(d, "linkWindow"), d
    }
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.NorthRegion = void 0;
    var n = i(41), o = i(18), r = e.NorthRegion = void 0;
    e.NorthRegion = r = function (t, e) {
        var i = t.appManager, r = t.instanceManager, a = t.uiManager, s = t.i18nManager, l = s.get(), d = i.getPath();
        e = e || {}, e.appName = i.appName || "", e.i18n = e.i18n || {}, e.i18n.about = e.i18n.about || l.about || "about", e.i18n.home = e.i18n.home || l.home || "home", e.i18n.untitled = e.i18n.untitled || l.untitled || "Untitled", e.theme = e.theme || a.getTheme(), e.systemTitle = e.systemTitle || i.systemSettings.systemTitle || "DHIS 2", e.logoWidth = e.logoWidth ? parseFloat(e.logoWidth) : 418, e.aboutFn = e.aboutFn || function () {
            (0, n.AboutWindow)(t).getData()
        }, e.homeFn = e.homeFn || function () {
            var t = d + "/dhis-web-commons-about/redirect.action";
            r.isStateUnsaved() ? a.confirmUnsaved(l.leave_application, function () {
                a.disableConfirmUnload(), window.location.href = t
            }) : window.location.href = t
        };
        var u = {}, c = function (t, i) {
            t = t || e.logoWidth, i = i || 0, u.logo.setWidth(t + i)
        }, h = function (t, e) {
            u.title.setState(t, e)
        };
        return Ext.create("Ext.toolbar.Toolbar", {
            componentCls: "toolbar-north",
            region: "north",
            cls: e.theme + " " + e.cls,
            cmp: u,
            setLogoWidth: c,
            setState: h,
            items: function () {
                var t = e.i18n.untitled;
                return u.logo = Ext.create("Ext.toolbar.TextItem", {
                    cls: "logo",
                    width: e.logoWidth,
                    html: '<span class="brand">' + e.systemTitle + "</span> " + e.appName
                }), u.title = Ext.create("Ext.toolbar.TextItem", {
                    cls: "title untitled user-select",
                    titleText: "",
                    appendixText: "",
                    text: t,
                    updateTitle: function () {
                        this.update(this.titleText ? this.titleText + this.appendixText : t)
                    },
                    setTitle: function (t) {
                        this.titleText = t || ""
                    },
                    setTitleAppendix: function (t) {
                        this.appendixText = t ? '<span class="appendix">[' + o.DateManager.getYYYYMMDD(t, !0) + "]</span>" : ""
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
                    setState: function (t, e) {
                        t ? e && t.name ? (this.setTitle(t.name), this.setTitleAppendix(t.relativePeriodDate), this.setStateSaved()) : (this.setTitleAppendix(), this.setStateUnsaved()) : (this.setTitle(), this.setTitleAppendix(), this.setStateNew()), this.updateTitle()
                    }
                }), a.reg(u.about = Ext.create("Ext.toolbar.TextItem", {
                    cls: "about",
                    html: e.i18n.about,
                    listeners: {
                        render: function (t) {
                            var i = t.getEl();
                            i.on("mouseover", function () {
                                i.addCls("hover")
                            }), i.on("mouseout", function () {
                                i.removeCls("hover")
                            }), i.on("click", function () {
                                e.aboutFn()
                            }), i.rendered = !0
                        }
                    }
                }), "aboutButton"), a.reg(u.home = Ext.create("Ext.toolbar.TextItem", {
                    cls: "about home",
                    html: e.i18n.home,
                    listeners: {
                        render: function (t) {
                            var i = t.getEl();
                            i.on("mouseover", function () {
                                i.addCls("hover")
                            }), i.on("mouseout", function () {
                                i.removeCls("hover")
                            }), i.on("click", function () {
                                e.homeFn()
                            }), i.rendered = !0
                        }
                    }
                }), "homeButton"), [u.logo, u.title, "->", u.about, u.home, " ", " "]
            }()
        })
    }
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = function (t) {
        var e = t.layout, i = t.i18n, n = (0, r["default"])({layout: e, i18n: i}), o = n.nameTextField,
            a = n.descriptionTextField, s = n.titleTextField;
        delete o.height, delete s.height, delete a.height, o.emptyText = i.no_translation_for_name, e.title ? s.emptyText = i.no_translation_for_title : (s.disabled = !0, s.emptyText = i.no_title), e.description ? a.emptyText = i.no_translation_for_description : (a.disabled = !0, a.emptyText = i.no_description);
        var l = function (t) {
            return Ext.create("Ext.panel.Panel", {
                style: "margin-bottom:0",
                bodyStyle: "font-size:11px; color:#666; padding-left:6px; padding-top:3px; border:0 none",
                html: t
            })
        }, d = l(e.name), u = l(e.title), c = l(e.description);
        return {
            nameTextField: o,
            nameLabelKey: d,
            titleTextField: s,
            titleLabelKey: u,
            descriptionTextField: a,
            descriptionLabelKey: c
        }
    };
    var o = i(27), r = n(o)
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.TranslateWindow = void 0;
    var o = i(1), r = (n(o), i(174)), a = n(r), s = i(19), l = n(s), d = e.TranslateWindow = void 0;
    e.TranslateWindow = d = function (t, e, i, n) {
        var o = t.appManager, r = t.uiManager, s = t.instanceManager, d = t.i18nManager.get(), u = (t.api, o.getPath()),
            c = s.apiEndpoint;
        n = n || {};
        var h = (0, a["default"])({layout: e, i18n: d}), p = h.nameTextField, f = h.nameLabelKey, g = h.titleTextField,
            m = h.titleLabelKey, A = h.descriptionTextField, y = h.descriptionLabelKey, x = {}, b = {},
            v = function () {
                var t = S.getValue();
                b = {NAME: p, SHORT_NAME: g, DESCRIPTION: A};
                for (var e in b) b[e].setValue("");
                x.forEach(function (e) {
                    e.locale === t && e.property in b && b[e.property].setValue(e.value)
                }), E.show()
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
            }), S = Ext.create("Ext.form.ComboBox", {
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
                    select: function (t) {
                        v()
                    }
                }
            }), E = Ext.create("Ext.form.Panel", {
                bodyStyle: "border-style:none",
                style: "margin-bottom:0",
                hidden: !0,
                defaults: {bodyStyle: "border-style:none", style: "margin-bottom:15px"},
                items: [{items: [p, f]}, {items: [g, m]}, {items: [A, y]}]
            }), C = Ext.create("Ext.button.Button", {
                text: d.save, handler: function () {
                    for (var t = S.getValue(), i = x.length; i--;) x[i].locale == t && x[i].property in b && x.splice(i, 1);
                    var n = [].concat(x);
                    for (var r in b) "" != b[r].getValue() && n.push({property: r, locale: t, value: b[r].getValue()});
                    jQuery.ajax({
                        url: encodeURI(u + "/api/" + c + "/" + e.id + "/translations/"),
                        type: "PUT",
                        data: JSON.stringify({translations: n}),
                        dataType: "json",
                        headers: o.defaultRequestHeaders,
                        success: function (t, e, i) {
                            M.destroy()
                        }
                    })
                }
            }), k = Ext.create("Ext.button.Button", {
                text: d.cancel, handler: function () {
                    M.destroy()
                }
            }), M = Ext.create("Ext.window.Window", {
                cls: "ns-accordion",
                title: "Translate",
                bodyStyle: "padding:1px; background:#fff",
                resizable: !1,
                modal: !0,
                items: [S, E],
                destroyOnBlur: !0,
                bbar: [k, "->", C],
                listeners: {
                    show: function (t) {
                        w.load(), Ext.Ajax.request({
                            url: encodeURI(u + "/api/" + c + "/" + e.id + "/translations.json?paging=false"),
                            disableCaching: !1,
                            success: function (t) {
                                x = Ext.decode(t.responseText).translations
                            }
                        });
                        var i = r.get("favoriteButton") || {};
                        i.rendered && (r.setAnchorPosition(t, i), t.hasDestroyOnBlurHandler || r.addDestroyOnBlurHandler(t)), S.focus(!1, 500), n.show && n.show()
                    }, destroy: function () {
                        n.destroy && n.destroy()
                    }
                }
            });
        return M
    }
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    function o(t) {
        if (Array.isArray(t)) {
            for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
            return i
        }
        return Array.from(t)
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.Viewport = void 0;
    var r = i(3), a = n(r), s = i(23), l = n(s), d = i(2), u = n(d), h = i(181), p = n(h), f = i(4), g = n(f), m = i(7),
        A = n(m), y = i(13), x = n(y), b = i(10), v = n(b), w = i(30), S = n(w),
        E = (i(16), i(15), i(26), i(28), i(45), i(46), i(43)), C = i(169), k = (i(42), e.Viewport = void 0);
    e.Viewport = k = function (t, e) {
        var i = t.uiManager, n = t.appManager, r = t.i18nManager, s = t.sessionStorageManager, d = t.instanceManager,
            h = t.calendarManager, f = t.dimensionConfig, m = t.periodConfig, y = t.uiConfig, b = t.optionConfig,
            w = t.api, k = n.getApiPath(), M = r.get(), P = f.get("data").objectName, T = f.get("indicator").objectName,
            I = f.get("dataElement").objectName, R = f.get("operand").objectName, L = f.get("dataSet").objectName,
            D = f.get("eventDataItem").objectName, O = f.get("programIndicator").objectName,
            B = f.get("period").objectName, U = f.get("organisationUnit").objectName,
            F = (i.get("layoutWindow"), i.get("optionsWindow"), i.get("favoriteWindow"), []),
            N = n.getDisplayProperty(), V = n.getDisplayPropertyUrl(), z = {};
        e = e || {};
        var j = e.northRegion, G = e.eastRegion, _ = e.chartTypeToolbar,
            H = i.reg((0, E.FavoriteButton)(t), "favoriteButton"),
            W = i.reg((0, C.EmbedButton)(t), "embedButton", "onCurrent"), Y = e.integrationButtons,
            X = e.DownloadButtonItems, q = Ext.create("Ext.data.Store", {
                fields: ["id", "name"],
                lastPage: null,
                nextPage: 1,
                isPending: !1,
                reset: function () {
                    this.removeAll(), this.lastPage = null, this.nextPage = 1, this.isPending = !1, pt.hideFilter()
                },
                loadDataAndUpdate: function (t, e) {
                    this.clearFilter(), e || this.removeAll(), this.loadData(t, e), this.updateFilter()
                },
                getRecordsByIds: function (t) {
                    var e = [];
                    t = (0, g["default"])(t);
                    for (var i, n = 0; n < t.length; n++) i = this.findExact("id", t[n]), i !== -1 && e.push(this.getAt(i));
                    return e
                },
                updateFilter: function () {
                    var t = nt.getIds();
                    this.clearFilter(), this.filterBy(function (e) {
                        return !(0, A["default"])(t, e.data.id)
                    })
                },
                loadPage: function (t, e, n, o, r) {
                    var s = this, d = {}, u = k + "/indicators.json?", c = "fields=dimensionItem|rename(id)," + V,
                        h = e ? "&filter=" + N + ":ilike:" + e : "", p = u + c + h;
                    t = (0, a["default"])(t) || (0, l["default"])(t) ? t : gt.getValue(), e = e || ft.getValue() || null, n || (this.lastPage = null, this.nextPage = 1), s.nextPage !== s.lastPage && ((0, a["default"])(t) && (p += "&filter=indicatorGroups.id:eq:" + t), o ? d.paging = !1 : (d.page = s.nextPage, d.pageSize = 50), s.isPending = !0, i.mask(mt.boundList), jQuery.getJSON(encodeURI(p), d, function (t) {
                        var e = t.indicators || [], i = t.pager;
                        s.loadStore(e, i, n, r)
                    }).complete(function () {
                        s.isPending = !1, i.unmask(mt.boundList)
                    }))
                },
                loadStore: function (t, e, i, n) {
                    e = e || {}, this.loadDataAndUpdate(t, i), this.sortStore(), this.lastPage = this.nextPage, e.pageCount > this.nextPage && this.nextPage++, this.isPending = !1, n && n()
                },
                storage: {},
                parent: null,
                sortStore: function () {
                    this.sort("name", "ASC")
                }
            }), Q = Ext.create("Ext.data.Store", {
                fields: ["id", "name", "index"],
                proxy: {
                    type: "ajax",
                    url: encodeURI(k + "/indicatorGroups.json?fields=id,displayName|rename(name)&paging=false"),
                    reader: {type: "json", root: "indicatorGroups"},
                    pageParam: !1,
                    startParam: !1,
                    limitParam: !1
                },
                listeners: {
                    load: function (t) {
                        t.add({id: 0, name: "[ " + M.all_indicators + " ]", index: -1}), t.sort([{
                            property: "index",
                            direction: "ASC"
                        }, {property: "name", direction: "ASC"}])
                    }
                }
            }), K = Ext.create("Ext.data.Store", {
                fields: ["id", "name"],
                lastPage: null,
                nextPage: 1,
                isPending: !1,
                reset: function () {
                    this.removeAll(), this.lastPage = null, this.nextPage = 1, this.isPending = !1, bt.hideFilter()
                },
                loadDataAndUpdate: function (t, e) {
                    this.clearFilter(), e || this.removeAll(), this.loadData(t, e), this.updateFilter()
                },
                getRecordsByIds: function (t) {
                    var e = [];
                    t = (0, g["default"])(t);
                    for (var i, n = 0; n < t.length; n++) i = this.findExact("id", t[n]), i !== -1 && e.push(this.getAt(i));
                    return e
                },
                updateFilter: function () {
                    var t = nt.getIds();
                    this.clearFilter(), t.length && this.filterBy(function (e) {
                        return !(0, A["default"])(t, e.data.id)
                    })
                },
                loadPage: function (t, e, i, n, o) {
                    t = (0, a["default"])(t) || (0, l["default"])(t) ? t : Et.getValue(), e = e || vt.getValue() || null, i || (this.lastPage = null, this.nextPage = 1), Ct.getValue() === I ? this.loadTotalsPage(t, e, i, n, o) : Ct.getValue() === R && this.loadDetailsPage(t, e, i, n, o)
                },
                loadTotalsPage: function (t, e, n, o, r) {
                    var s = this, l = {}, d = k + "/dataElements.json?", u = "fields=dimensionItem|rename(id)," + V,
                        c = "&filter=domainType:eq:AGGREGATE" + (e ? "&filter=" + N + ":ilike:" + e : ""), h = d + u + c;
                    s.nextPage !== s.lastPage && ((0, a["default"])(t) && (h += "&filter=dataElementGroups.id:eq:" + t), o ? l.paging = !1 : (l.page = s.nextPage, l.pageSize = 50), s.isPending = !0, i.mask(wt.boundList), jQuery.getJSON(encodeURI(h), l, function (t) {
                        var e = t.dataElements || [], i = t.pager;
                        s.loadStore(e, i, n, r)
                    }).complete(function () {
                        s.isPending = !1, i.unmask(wt.boundList)
                    }))
                },
                loadDetailsPage: function (t, e, n, o, r) {
                    var s = this, l = {}, d = k + "/dataElementOperands.json?", u = "fields=dimensionItem|rename(id)," + V,
                        c = e ? "&filter=" + N + ":ilike:" + e : "", h = d + u + c;
                    s.nextPage !== s.lastPage && ((0, a["default"])(t) && (h += "&filter=dataElement.dataElementGroups.id:eq:" + t), o ? l.paging = !1 : (l.page = s.nextPage, l.pageSize = 50), s.isPending = !0, i.mask(wt.boundList), jQuery.getJSON(encodeURI(h), l, function (t) {
                        var e = t.objects || t.dataElementOperands || [], i = t.pager;
                        s.loadStore(e, i, n, r)
                    }).complete(function () {
                        s.isPending = !1, i.unmask(wt.boundList)
                    }))
                },
                loadStore: function (t, e, i, n) {
                    e = e || {}, this.loadDataAndUpdate(t, i), this.sortStore(), this.lastPage = this.nextPage, e.pageCount > this.nextPage && this.nextPage++, this.isPending = !1, n && n()
                },
                sortStore: function () {
                    this.sort("name", "ASC")
                }
            }), J = Ext.create("Ext.data.Store", {
                fields: ["id", "name", "index"],
                proxy: {
                    type: "ajax",
                    url: encodeURI(k + "/dataElementGroups.json?fields=id," + V + "&paging=false"),
                    reader: {type: "json", root: "dataElementGroups"},
                    pageParam: !1,
                    startParam: !1,
                    limitParam: !1
                },
                listeners: {
                    load: function (t) {
                        t.add({id: 0, name: "[ " + M.all_data_elements + " ]", index: -1}), t.sort([{
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
                    this.removeAll(), this.lastPage = null, this.nextPage = 1, this.isPending = !1, Pt.hideFilter()
                },
                loadDataAndUpdate: function (t, e) {
                    this.clearFilter(), this.loadData(t, e), this.updateFilter()
                },
                getRecordsByIds: function (t) {
                    var e = [];
                    t = (0, g["default"])(t);
                    for (var i, n = 0; n < t.length; n++) i = this.findExact("id", t[n]), i !== -1 && e.push(this.getAt(i));
                    return e
                },
                updateFilter: function () {
                    var t = nt.getIds();
                    this.clearFilter();
                    var e = Lt.getValue();
                    this.filterBy(function (i) {
                        return !((0, A["default"])(t, i.data.id) || e && i.data.id.split(".")[1] !== e)
                    })
                },
                loadPage: function (t, e, n, o) {
                    var r = this, a = {}, s = k + "/dataSets.json?", l = "fields=dimensionItem|rename(id)," + V,
                        d = t ? "&filter=" + N + ":ilike:" + t : "", u = s + l + d;
                    t = t || Tt.getValue() || null, e || (this.lastPage = null, this.nextPage = 1), r.nextPage !== r.lastPage && (n ? a.paging = !1 : (a.page = r.nextPage, a.pageSize = 50), r.isPending = !0, i.mask(It.boundList), jQuery.getJSON(encodeURI(u), a, function (t) {
                        var i = t.dataSets || [], n = t.pager;
                        r.loadStore(i, n, e, o)
                    }).complete(function () {
                        r.isPending = !1, i.unmask(It.boundList)
                    }))
                },
                getProcessedData: function (t) {
                    var e = b.getDataSetMetricRecords(), i = [];
                    return t.forEach(function (t) {
                        e.forEach(function (e) {
                            i.push({id: t.id + "." + e.id, name: t.name + " (" + e.name + ")"})
                        })
                    }), i
                },
                loadStore: function (t, e, i, n) {
                    e = e || {}, t = this.getProcessedData(t), this.loadDataAndUpdate(t, i), this.sortStore(), this.lastPage = this.nextPage, e.pageCount > this.nextPage && this.nextPage++, this.isPending = !1, n && n()
                },
                storage: {},
                parent: null,
                isLoaded: !1,
                sortStore: function () {
                    this.sort("name", "ASC")
                }
            }), tt = Ext.create("Ext.data.Store", {
                fields: ["id", "name"], data: [], sortStore: function () {
                    this.sort("name", "ASC")
                }, loadDataAndUpdate: function (t, e) {
                    this.clearFilter(), e || this.removeAll(), this.loadData(t, e), this.updateFilter()
                }, getRecordsByIds: function (t) {
                    var e = [];
                    t = (0, g["default"])(t);
                    for (var i, n = 0; n < t.length; n++) i = this.findExact("id", t[n]), i !== -1 && e.push(this.getAt(i));
                    return e
                }, updateFilter: function () {
                    var t = nt.getIds();
                    this.clearFilter(), this.filterBy(function (e) {
                        return !(0, A["default"])(t, e.data.id)
                    })
                }
            }), et = Ext.create("Ext.data.Store", {
                fields: ["id", "name"], data: [], sortStore: function () {
                    this.sort("name", "ASC")
                }, loadDataAndUpdate: function (t, e) {
                    this.clearFilter(), e || this.removeAll(), this.loadData(t, e), this.updateFilter()
                }, getRecordsByIds: function (t) {
                    var e = [];
                    t = (0, g["default"])(t);
                    for (var i, n = 0; n < t.length; n++) i = this.findExact("id", t[n]), i !== -1 && e.push(this.getAt(i));
                    return e
                }, updateFilter: function () {
                    var t = nt.getIds();
                    this.clearFilter(), this.filterBy(function (e) {
                        return !(0, A["default"])(t, e.data.id)
                    })
                }
            }), it = Ext.create("Ext.data.Store", {
                fields: ["id", "name"],
                proxy: {
                    type: "ajax",
                    url: encodeURI(k + "/programs.json?fields=id,displayName|rename(name)&paging=false"),
                    reader: {type: "json", root: "programs"},
                    pageParam: !1,
                    startParam: !1,
                    limitParam: !1
                }
            }), nt = Ext.create("Ext.data.Store", {
                fields: ["id", "name"], data: [], getIds: function () {
                    for (var t = this.getRange(), e = [], i = 0; i < t.length; i++) e.push(t[i].data.id);
                    return e
                }, addRecords: function (t, e) {
                    var i = "objectName", n = [], o = [];
                    if (t = (0, g["default"])(t), t.length) {
                        for (var r, a = 0; a < t.length; a++) r = t[a], r.data ? (e && r.set(i, e), n.push(r)) : (e && (r[i] = e), o.push(r));
                        n.length && this.add(n), o.length && this.loadData(o, !0)
                    }
                }, removeByIds: function (t) {
                    t = (0, g["default"])(t);
                    for (var e, i = 0; i < t.length; i++) e = this.findExact("id", t[i]), e !== -1 && this.removeAt(e)
                }, removeByProperty: function (t, e) {
                    if (t && e) {
                        var i = [];
                        e = (0, g["default"])(e), this.each(function (n) {
                            (0, A["default"])(e, n.data[t]) && i.push(n)
                        }), this.remove(i)
                    }
                }, listeners: {
                    add: function () {
                        Kt.updateStoreFilters()
                    }, remove: function () {
                        Kt.updateStoreFilters()
                    }, clear: function () {
                        Kt.updateStoreFilters()
                    }
                }
            }), ot = Ext.create("Ext.data.Store", {fields: ["id", "name"], data: m.getPeriodTypeRecords()}),
            rt = Ext.create("Ext.data.Store", {
                fields: ["id", "name", "index"], data: [], setIndex: function (t) {
                    for (var e = 0; e < t.length; e++) t[e].index = e
                }, sortStore: function () {
                    this.sort("index", "ASC")
                }
            }), at = Ext.create("Ext.data.Store", {fields: ["id", "name"], data: []}),
            st = Ext.create("Ext.data.Store", {
                fields: ["id", "name", "level"],
                data: n.organisationUnitLevels,
                sorters: [{property: "level", direction: "ASC"}]
            }), lt = Ext.create("Ext.data.Store", {
                fields: ["id", "name"],
                proxy: {
                    type: "ajax",
                    url: encodeURI(k + "/organisationUnitGroups.json?fields=id," + V + "&paging=false"),
                    reader: {type: "json", root: "organisationUnitGroups"},
                    pageParam: !1,
                    startParam: !1,
                    limitParam: !1
                }
            }), dt = (Ext.create("Ext.data.Store", {
                fields: ["id", "name", "index"], data: function () {
                    var t = n.legendSets;
                    return t.unshift({id: 0, name: M.none, index: -1}), t
                }(), sorters: [{property: "index", direction: "ASC"}, {property: "name", direction: "ASC"}]
            }), function (t) {
                t = t || "in", "in" === t ? (yt.show(), kt.hide(), Dt.hide(), jt.hide(), Qt.hide()) : "de" === t ? (yt.hide(), kt.show(), Dt.hide(), jt.hide(), Qt.hide()) : "ds" === t ? (yt.hide(), kt.hide(), Dt.show(), jt.hide(), Qt.hide(), Z.isLoaded || (Z.isLoaded = !0, Z.loadPage())) : "di" === t ? (yt.hide(), kt.hide(), Dt.hide(), jt.show(), Qt.hide(), it.isLoaded || (it.isLoaded = !0, it.load())) : "pi" === t && (yt.hide(), kt.hide(), Dt.hide(), jt.hide(), Qt.show(), it.isLoaded || (it.isLoaded = !0, it.load()))
            }), ut = Ext.create("Ext.form.field.ComboBox", {
                cls: "ns-combo",
                style: "margin-bottom:1px",
                width: y.west_fieldset_width - y.west_width_padding,
                valueField: "id",
                displayField: "name",
                editable: !1,
                queryMode: "local",
                value: "in",
                store: {
                    fields: ["id", "name"],
                    data: [{id: "in", name: M.indicators}, {id: "de", name: M.data_elements}, {
                        id: "ds",
                        name: M.data_sets
                    }, {id: "di", name: M.event_data_items}, {id: "pi", name: M.program_indicators}]
                },
                listeners: {
                    select: function (t) {
                        dt(t.getValue())
                    }
                }
            }), ct = Ext.create("Ext.ux.form.MultiSelect", {
                cls: "ns-toolbar-multiselect-right",
                width: (y.west_fieldset_width - y.west_width_padding) / 2,
                valueField: "id",
                displayField: "name",
                ddReorder: !0,
                store: nt,
                tbar: [{
                    xtype: "button", text: "test", iconCls: "ns-button-icon-map", width: 22, handler: function () {
                        nt.removeAll(), Kt.updateStoreFilters()
                    }
                }, {
                    xtype: "button", icon: "ns-button-icon-arrowleft", width: 22, handler: function () {
                        nt.removeByIds(ct.getValue()), Kt.updateStoreFilters()
                    }
                }, "->", {xtype: "label", text: M.selected, cls: "ns-toolbar-multiselect-right-label"}],
                listeners: {
                    afterrender: function () {
                        this.boundList.on("itemdblclick", function () {
                            nt.removeByIds(ct.getValue()), Kt.updateStoreFilters()
                        }, this)
                    }
                }
            }), ht = Ext.create("Ext.form.Label", {
                text: M.available,
                cls: "ns-toolbar-multiselect-left-label",
                style: "margin-right:5px"
            }), pt = Ext.create("Ext.button.Button", {
                width: 22,
                height: 22,
                cls: "ns-button-icon",
                iconCls: "ns-button-icon-search",
                disabled: !0,
                showFilter: function () {
                    ht.hide(), this.hide(), ft.show(), ft.reset()
                },
                hideFilter: function () {
                    ht.show(), this.show(), ft.hide(), ft.reset()
                },
                handler: function () {
                    this.showFilter()
                }
            }), ft = Ext.create("Ext.form.field.Trigger", {
                cls: "ns-trigger-filter",
                emptyText: "Filter available..",
                height: 22,
                hidden: !0,
                enableKeyEvents: !0,
                fieldStyle: "height:22px; border-right:0 none",
                style: "height:22px",
                onTriggerClick: function () {
                    this.reset(), this.onKeyUpHandler(), pt.hideFilter()
                },
                onKeyUpHandler: function () {
                    var t = gt.getValue(), e = q;
                    ((0, a["default"])(t) || (0, l["default"])(t)) && e.loadPage(null, this.getValue(), !1)
                },
                listeners: {
                    keyup: {
                        fn: function (t) {
                            t.onKeyUpHandler()
                        }, buffer: 100
                    }, show: function (t) {
                        t.focus(!1, 50)
                    }, focus: function (t) {
                        t.addCls("ns-trigger-filter-focused")
                    }, blur: function (t) {
                        t.removeCls("ns-trigger-filter-focused")
                    }
                }
            }), gt = Ext.create("Ext.form.field.ComboBox", {
                cls: "ns-combo",
                style: "margin-bottom:1px; margin-top:0px",
                width: y.west_fieldset_width - y.west_width_padding,
                valueField: "id",
                displayField: "name",
                emptyText: M.select_indicator_group,
                editable: !1,
                store: Q,
                loadAvailable: function (t) {
                    var e = q, i = this.getValue();
                    null !== i && (t && e.reset(), e.loadPage(i, null, !1))
                },
                listeners: {
                    select: function (t) {
                        t.loadAvailable(!0), pt.enable()
                    }
                }
            }), mt = Ext.create("Ext.ux.form.MultiSelect", {
                cls: "ns-toolbar-multiselect-left",
                width: (y.west_fieldset_width - y.west_width_padding) / 2,
                valueField: "id",
                displayField: "name",
                store: q,
                tbar: [ht, pt, ft, "->", {
                    xtype: "button",
                    iconCls: "ns-button-icon-arrowright",
                    width: 22,
                    handler: function () {
                        if (mt.getValue().length) {
                            var t = q.getRecordsByIds(mt.getValue());
                            nt.addRecords(t, "in")
                        }
                    }
                }, {
                    xtype: "button", iconCls: "ns-button-icon-arrowrightdouble", width: 22, handler: function () {
                        q.loadPage(null, null, null, !0, function () {
                            nt.addRecords(q.getRange(), "in")
                        })
                    }
                }],
                listeners: {
                    render: function (t) {
                        var e = Ext.get(t.boundList.getEl().id + "-listEl").dom;
                        e.addEventListener("scroll", function (t) {
                            i.isScrolled(t) && !q.isPending && q.loadPage(null, null, !0)
                        }), t.boundList.on("itemdblclick", function (t, e) {
                            nt.addRecords(e, "in")
                        }, t)
                    }
                }
            }), At = Ext.create("Ext.ux.form.MultiSelect", {
                cls: "ns-toolbar-multiselect-right",
                width: (y.west_fieldset_width - y.west_width_padding) / 2,
                valueField: "id",
                displayField: "name",
                ddReorder: !0,
                store: nt,
                tbar: [{
                    xtype: "button", iconCls: "ns-button-icon-arrowleftdouble", width: 22, handler: function () {
                        nt.getRange().length && nt.removeAll()
                    }
                }, {
                    xtype: "button", iconCls: "ns-button-icon-arrowleft", width: 22, handler: function () {
                        At.getValue().length && nt.removeByIds(At.getValue())
                    }
                }, "->", {xtype: "label", text: M.selected, cls: "ns-toolbar-multiselect-right-label"}],
                listeners: {
                    afterrender: function () {
                        this.boundList.on("itemdblclick", function (t, e) {
                            nt.removeByIds(e.data.id)
                        }, this)
                    }
                }
            }), yt = Ext.create("Ext.panel.Panel", {
                xtype: "panel",
                preventHeader: !0,
                hideCollapseTool: !0,
                dimension: T,
                bodyStyle: "border:0 none",
                items: [gt, {xtype: "panel", layout: "column", bodyStyle: "border-style:none", items: [mt, At]}],
                listeners: {
                    added: function () {
                    }, expand: function (t) {
                    }
                }
            }), xt = Ext.create("Ext.form.Label", {
                text: M.available,
                cls: "ns-toolbar-multiselect-left-label",
                style: "margin-right:5px"
            }), bt = Ext.create("Ext.button.Button", {
                width: 22,
                height: 22,
                cls: "ns-button-icon",
                iconCls: "ns-button-icon-search",
                disabled: !0,
                showFilter: function () {
                    xt.hide(), this.hide(), vt.show(), vt.reset()
                },
                hideFilter: function () {
                    xt.show(), this.show(), vt.hide(), vt.reset()
                },
                handler: function () {
                    this.showFilter()
                }
            }), vt = Ext.create("Ext.form.field.Trigger", {
                cls: "ns-trigger-filter",
                emptyText: "Filter available..",
                height: 22,
                hidden: !0,
                enableKeyEvents: !0,
                fieldStyle: "height:22px; border-right:0 none",
                style: "height:22px",
                onTriggerClick: function () {
                    this.reset(), this.onKeyUpHandler(), bt.hideFilter()
                },
                onKeyUpHandler: function () {
                    var t = Et.getValue(), e = K;
                    ((0, a["default"])(t) || (0, l["default"])(t)) && e.loadPage(null, this.getValue(), !1)
                },
                listeners: {
                    keyup: {
                        fn: function (t) {
                            t.onKeyUpHandler()
                        }, buffer: 100
                    }, show: function (t) {
                        t.focus(!1, 50)
                    }, focus: function (t) {
                        t.addCls("ns-trigger-filter-focused")
                    }, blur: function (t) {
                        t.removeCls("ns-trigger-filter-focused")
                    }
                }
            }), wt = Ext.create("Ext.ux.form.MultiSelect", {
                cls: "ns-toolbar-multiselect-left",
                width: (y.west_fieldset_width - y.west_width_padding) / 2,
                valueField: "id",
                displayField: "name",
                isPending: !1,
                page: 1,
                store: K,
                tbar: [xt, bt, vt, "->", {
                    xtype: "button", iconCls: "ns-button-icon-arrowright", width: 22, handler: function () {
                        if (wt.getValue().length) {
                            var t = K.getRecordsByIds(wt.getValue());
                            nt.addRecords(t, "de")
                        }
                    }
                }, {
                    xtype: "button", iconCls: "ns-button-icon-arrowrightdouble", width: 22, handler: function () {
                        K.loadPage(null, null, null, !0, function () {
                            nt.addRecords(K.getRange(), "de")
                        })
                    }
                }],
                listeners: {
                    render: function (t) {
                        var e = Ext.get(t.boundList.getEl().id + "-listEl").dom;
                        e.addEventListener("scroll", function (t) {
                            i.isScrolled(t) && !K.isPending && K.loadPage(null, null, !0)
                        }), t.boundList.on("itemdblclick", function (t, e) {
                            nt.addRecords(e, "de")
                        }, t)
                    }
                }
            }), St = Ext.create("Ext.ux.form.MultiSelect", {
                cls: "ns-toolbar-multiselect-right",
                width: (y.west_fieldset_width - y.west_width_padding) / 2,
                valueField: "id",
                displayField: "name",
                ddReorder: !0,
                store: nt,
                tbar: [{
                    xtype: "button", iconCls: "ns-button-icon-arrowleftdouble", width: 22, handler: function () {
                        nt.getRange().length && nt.removeAll()
                    }
                }, {
                    xtype: "button", iconCls: "ns-button-icon-arrowleft", width: 22, handler: function () {
                        St.getValue().length && nt.removeByIds(St.getValue())
                    }
                }, "->", {xtype: "label", text: M.selected, cls: "ns-toolbar-multiselect-right-label"}],
                listeners: {
                    afterrender: function () {
                        this.boundList.on("itemdblclick", function (t, e) {
                            nt.removeByIds(e.data.id)
                        }, this)
                    }
                }
            }), Et = Ext.create("Ext.form.field.ComboBox", {
                cls: "ns-combo",
                style: "margin:0 1px 1px 0",
                width: y.west_fieldset_width - y.west_width_padding - 90,
                valueField: "id",
                displayField: "name",
                emptyText: M.select_data_element_group,
                editable: !1,
                store: J,
                loadAvailable: function (t) {
                    var e = K, i = this.getValue();
                    null !== i && (t && e.reset(), e.loadPage(i, null, !1))
                },
                listeners: {
                    select: function (t) {
                        t.loadAvailable(!0), bt.enable()
                    }
                }
            }), Ct = Ext.create("Ext.form.field.ComboBox", {
                cls: "ns-combo",
                style: "margin-bottom:1px",
                baseBodyCls: "small",
                queryMode: "local",
                editable: !1,
                valueField: "id",
                displayField: "text",
                width: 89,
                value: I,
                store: {fields: ["id", "text"], data: [{id: I, text: M.totals}, {id: R, text: M.details}]},
                listeners: {
                    select: function (t) {
                        Et.loadAvailable(!0), nt.removeByProperty("objectName", "de")
                    }
                }
            }), kt = Ext.create("Ext.panel.Panel", {
                xtype: "panel",
                preventHeader: !0,
                hidden: !0,
                hideCollapseTool: !0,
                bodyStyle: "border:0 none",
                dimension: I,
                items: [{xtype: "container", layout: "column", items: [Et, Ct]}, {
                    xtype: "panel",
                    layout: "column",
                    bodyStyle: "border-style:none",
                    items: [wt, St]
                }],
                listeners: {
                    added: function () {
                    }, expand: function (t) {
                    }
                }
            }), Mt = Ext.create("Ext.form.Label", {
                text: M.available,
                cls: "ns-toolbar-multiselect-left-label",
                style: "margin-right:5px"
            }), Pt = Ext.create("Ext.button.Button", {
                width: 22,
                height: 22,
                cls: "ns-button-icon",
                iconCls: "ns-button-icon-search",
                showFilter: function () {
                    Mt.hide(), this.hide(), Tt.show(), Tt.reset()
                },
                hideFilter: function () {
                    Mt.show(), this.show(), Tt.hide(), Tt.reset()
                },
                handler: function () {
                    this.showFilter()
                }
            }), Tt = Ext.create("Ext.form.field.Trigger", {
                cls: "ns-trigger-filter",
                emptyText: "Filter available..",
                height: 22,
                hidden: !0,
                enableKeyEvents: !0,
                fieldStyle: "height:22px; border-right:0 none",
                style: "height:22px",
                onTriggerClick: function () {
                    this.reset(), this.onKeyUpHandler(), Pt.hideFilter()
                },
                onKeyUpHandler: function () {
                    var t = Z;
                    t.loadPage(this.getValue(), !1)
                },
                listeners: {
                    keyup: {
                        fn: function (t) {
                            t.onKeyUpHandler()
                        }, buffer: 100
                    }, show: function (t) {
                        t.focus(!1, 50)
                    }, focus: function (t) {
                        t.addCls("ns-trigger-filter-focused")
                    }, blur: function (t) {
                        t.removeCls("ns-trigger-filter-focused")
                    }
                }
            }), It = Ext.create("Ext.ux.form.MultiSelect", {
                cls: "ns-toolbar-multiselect-left",
                width: (y.west_fieldset_width - y.west_width_padding) / 2,
                valueField: "id",
                displayField: "name",
                store: Z,
                tbar: [Mt, Pt, Tt, "->", {
                    xtype: "button",
                    iconCls: "ns-button-icon-arrowright",
                    width: 22,
                    handler: function () {
                        if (It.getValue().length) {
                            var t = Z.getRecordsByIds(It.getValue());
                            nt.addRecords(t, "ds")
                        }
                    }
                }, {
                    xtype: "button", iconCls: "ns-button-icon-arrowrightdouble", width: 22, handler: function () {
                        Z.loadPage(null, null, !0, function () {
                            nt.addRecords(Z.getRange(), "ds")
                        })
                    }
                }],
                listeners: {
                    render: function (t) {
                        var e = Ext.get(t.boundList.getEl().id + "-listEl").dom;
                        e.addEventListener("scroll", function (t) {
                            i.isScrolled(t) && !Z.isPending && Z.loadPage(null, !0)
                        }), t.boundList.on("itemdblclick", function (t, e) {
                            nt.addRecords(e, "ds")
                        }, t)
                    }
                }
            }), Rt = Ext.create("Ext.ux.form.MultiSelect", {
                cls: "ns-toolbar-multiselect-right",
                width: (y.west_fieldset_width - y.west_width_padding) / 2,
                valueField: "id",
                displayField: "name",
                ddReorder: !0,
                store: nt,
                tbar: [{
                    xtype: "button", iconCls: "ns-button-icon-arrowleftdouble", width: 22, handler: function () {
                        nt.getRange().length && nt.removeAll()
                    }
                }, {
                    xtype: "button", iconCls: "ns-button-icon-arrowleft", width: 22, handler: function () {
                        Rt.getValue().length && nt.removeByIds(Rt.getValue())
                    }
                }, "->", {xtype: "label", text: M.selected, cls: "ns-toolbar-multiselect-right-label"}],
                listeners: {
                    afterrender: function () {
                        this.boundList.on("itemdblclick", function (t, e) {
                            nt.removeByIds(e.data.id)
                        }, this)
                    }
                }
            }), Lt = Ext.create("Ext.form.field.ComboBox", {
                cls: "ns-combo",
                style: "margin-bottom:1px; margin-top:0px",
                width: y.west_fieldset_width - y.west_width_padding,
                valueField: "id",
                displayField: "name",
                emptyText: M.select_indicator_group,
                editable: !1,
                value: b.getDataSetMetric("reportingRates").id,
                store: {
                    fields: ["id", "name"],
                    data: [{id: 0, name: "[ " + M.all_metrics + " ]"}].concat(b.getDataSetMetricRecords())
                },
                listeners: {
                    select: function (t) {
                        Z.updateFilter()
                    }
                }
            }), Dt = Ext.create("Ext.panel.Panel", {
                xtype: "panel",
                preventHeader: !0,
                hidden: !0,
                hideCollapseTool: !0,
                bodyStyle: "border:0 none",
                dimension: L,
                items: [Lt, {xtype: "panel", layout: "column", bodyStyle: "border-style:none", items: [It, Rt]}],
                listeners: {
                    added: function () {
                    }, expand: function (t) {
                    }
                }
            }), Ot = function (t, e) {
                e || (_t.setValue(t), Gt(t, !0)), Ext.Ajax.request({
                    url: encodeURI(k + "/programDataElements.json?program=" + t + "&fields=dimensionItem|rename(id),name,valueType&paging=false"),
                    disableCaching: !1,
                    success: function (e) {
                        var i = n.getValueTypesByType("aggregate"),
                            o = Ext.decode(e.responseText).programDataElements.filter(function (t) {
                                return (0, A["default"])(i, (t || {}).valueType)
                            });
                        Ext.Ajax.request({
                            url: encodeURI(k + "/programs.json?filter=id:eq:" + t + "&fields=programTrackedEntityAttributes[dimensionItem|rename(id)," + V + "|rename(name),valueType]&paging=false"),
                            disableCaching: !1,
                            success: function (t) {
                                var e = ((Ext.decode(t.responseText).programs[0] || {}).programTrackedEntityAttributes || []).filter(function (t) {
                                    return (0, A["default"])(i, (t || {}).valueType)
                                }), n = (0, v["default"])((0, x["default"])([].concat(o, e))) || [];
                                tt.loadDataAndUpdate(n)
                            }
                        })
                    }
                })
            }, Bt = Ext.create("Ext.form.field.ComboBox", {
                cls: "ns-combo",
                style: "margin:0 1px 1px 0",
                width: y.west_fieldset_width - y.west_width_padding,
                valueField: "id",
                displayField: "name",
                emptyText: M.select_program,
                editable: !1,
                queryMode: "local",
                store: it,
                listeners: {
                    select: function (t) {
                        Ot(t.getValue())
                    }
                }
            }), Ut = Ext.create("Ext.form.Label", {
                text: M.available,
                cls: "ns-toolbar-multiselect-left-label",
                style: "margin-right:5px"
            }), Ft = Ext.create("Ext.button.Button", {
                width: 22,
                height: 22,
                cls: "ns-button-icon",
                iconCls: "ns-button-icon-search",
                showFilter: function () {
                    Ut.hide(), this.hide(), Nt.show(), Nt.reset()
                },
                hideFilter: function () {
                    Ut.show(), this.show(), Nt.hide(), Nt.reset()
                },
                handler: function () {
                    this.showFilter()
                }
            }), Nt = Ext.create("Ext.form.field.Trigger", {
                cls: "ns-trigger-filter",
                emptyText: "Filter available..",
                height: 22,
                hidden: !0,
                enableKeyEvents: !0,
                fieldStyle: "height:22px; border-right:0 none",
                style: "height:22px",
                onTriggerClick: function () {
                    this.reset(), this.onKeyUpHandler(), Ft.hideFilter()
                },
                onKeyUpHandler: function () {
                    var t, e = this.getValue() || "", i = tt;
                    i.filterBy(function (i) {
                        return t = i.data.name || "", t.toLowerCase().indexOf(e.toLowerCase()) !== -1
                    })
                },
                listeners: {
                    keyup: {
                        fn: function (t) {
                            t.onKeyUpHandler()
                        }, buffer: 100
                    }, show: function (t) {
                        t.focus(!1, 50)
                    }, focus: function (t) {
                        t.addCls("ns-trigger-filter-focused")
                    }, blur: function (t) {
                        t.removeCls("ns-trigger-filter-focused")
                    }
                }
            }), Vt = Ext.create("Ext.ux.form.MultiSelect", {
                cls: "ns-toolbar-multiselect-left",
                width: (y.west_fieldset_width - y.west_width_padding) / 2,
                valueField: "id",
                displayField: "name",
                store: tt,
                tbar: [Ut, Ft, Nt, "->", {
                    xtype: "button",
                    iconCls: "ns-button-icon-arrowright",
                    width: 22,
                    handler: function () {
                        if (Vt.getValue().length) {
                            var t = tt.getRecordsByIds(Vt.getValue());
                            nt.addRecords(t, "di")
                        }
                    }
                }, {
                    xtype: "button", iconCls: "ns-button-icon-arrowrightdouble", width: 22, handler: function () {
                        nt.addRecords(tt.getRange(), "di")
                    }
                }],
                listeners: {
                    render: function (t) {
                        Ext.get(t.boundList.getEl().id + "-listEl").dom;
                        t.boundList.on("itemdblclick", function (t, e) {
                            nt.addRecords(e, "di")
                        }, t)
                    }
                }
            }), zt = Ext.create("Ext.ux.form.MultiSelect", {
                cls: "ns-toolbar-multiselect-right",
                width: (y.west_fieldset_width - y.west_width_padding) / 2,
                valueField: "id",
                displayField: "name",
                ddReorder: !0,
                store: nt,
                tbar: [{
                    xtype: "button", iconCls: "ns-button-icon-arrowleftdouble", width: 22, handler: function () {
                        nt.getRange().length && nt.removeAll()
                    }
                }, {
                    xtype: "button", iconCls: "ns-button-icon-arrowleft", width: 22, handler: function () {
                        zt.getValue().length && nt.removeByIds(zt.getValue())
                    }
                }, "->", {xtype: "label", text: M.selected, cls: "ns-toolbar-multiselect-right-label"}],
                listeners: {
                    afterrender: function () {
                        this.boundList.on("itemdblclick", function (t, e) {
                            nt.removeByIds(e.data.id)
                        }, this)
                    }
                }
            }), jt = Ext.create("Ext.panel.Panel", {
                xtype: "panel",
                preventHeader: !0,
                hidden: !0,
                hideCollapseTool: !0,
                dimension: D,
                bodyStyle: "border:0 none",
                items: [Bt, {xtype: "panel", layout: "column", bodyStyle: "border-style:none", items: [Vt, zt]}],
                listeners: {
                    added: function () {
                    }, expand: function (t) {
                    }
                }
            }), Gt = function (t, e) {
                e || (Bt.setValue(t), Ot(t, !0)), Ext.Ajax.request({
                    url: encodeURI(k + "/programs.json?filter=id:eq:" + t + "&fields=programIndicators[dimensionItem|rename(id)," + V + "]&paging=false"),
                    disableCaching: !1,
                    success: function (t) {
                        var e = (Ext.decode(t.responseText).programs[0] || {}).programIndicators || [],
                            i = (0, v["default"])(e);
                        et.loadDataAndUpdate(i)
                    }
                })
            }, _t = Ext.create("Ext.form.field.ComboBox", {
                cls: "ns-combo",
                style: "margin:0 1px 1px 0",
                width: y.west_fieldset_width - y.west_width_padding,
                valueField: "id",
                displayField: "name",
                emptyText: M.select_program,
                editable: !1,
                queryMode: "local",
                store: it,
                listeners: {
                    select: function (t) {
                        Gt(t.getValue())
                    }
                }
            }), Ht = Ext.create("Ext.form.Label", {
                text: M.available,
                cls: "ns-toolbar-multiselect-left-label",
                style: "margin-right:5px"
            }), Wt = Ext.create("Ext.button.Button", {
                width: 22,
                height: 22,
                cls: "ns-button-icon",
                iconCls: "ns-button-icon-search",
                showFilter: function () {
                    Ht.hide(), this.hide(), Yt.show(), Yt.reset()
                },
                hideFilter: function () {
                    Ht.show(), this.show(), Yt.hide(), Yt.reset()
                },
                handler: function () {
                    this.showFilter()
                }
            }), Yt = Ext.create("Ext.form.field.Trigger", {
                cls: "ns-trigger-filter",
                emptyText: "Filter available..",
                height: 22,
                hidden: !0,
                enableKeyEvents: !0,
                fieldStyle: "height:22px; border-right:0 none",
                style: "height:22px",
                onTriggerClick: function () {
                    this.reset(), this.onKeyUpHandler(), Wt.hideFilter()
                },
                onKeyUpHandler: function () {
                    var t, e = this.getValue() || "", i = et;
                    i.filterBy(function (i) {
                        return t = i.data.name || "", t.toLowerCase().indexOf(e.toLowerCase()) !== -1
                    })
                },
                listeners: {
                    keyup: {
                        fn: function (t) {
                            t.onKeyUpHandler()
                        }, buffer: 100
                    }, show: function (t) {
                        t.focus(!1, 50)
                    }, focus: function (t) {
                        t.addCls("ns-trigger-filter-focused")
                    }, blur: function (t) {
                        t.removeCls("ns-trigger-filter-focused")
                    }
                }
            }), Xt = Ext.create("Ext.ux.form.MultiSelect", {
                cls: "ns-toolbar-multiselect-left",
                width: (y.west_fieldset_width - y.west_width_padding) / 2,
                valueField: "id",
                displayField: "name",
                store: et,
                tbar: [Ht, Wt, Yt, "->", {
                    xtype: "button",
                    iconCls: "ns-button-icon-arrowright",
                    width: 22,
                    handler: function () {
                        if (Xt.getValue().length) {
                            var t = et.getRecordsByIds(Xt.getValue());
                            nt.addRecords(t, "pi")
                        }
                    }
                }, {
                    xtype: "button", iconCls: "ns-button-icon-arrowrightdouble", width: 22, handler: function () {
                        nt.addRecords(et.getRange(), "pi")
                    }
                }],
                listeners: {
                    render: function (t) {
                        Ext.get(t.boundList.getEl().id + "-listEl").dom;
                        t.boundList.on("itemdblclick", function (t, e) {
                            nt.addRecords(e, "pi")
                        }, t)
                    }
                }
            }), qt = Ext.create("Ext.ux.form.MultiSelect", {
                cls: "ns-toolbar-multiselect-right",
                width: (y.west_fieldset_width - y.west_width_padding) / 2,
                valueField: "id",
                displayField: "name",
                ddReorder: !0,
                store: nt,
                tbar: [{
                    xtype: "button", iconCls: "ns-button-icon-arrowleftdouble", width: 22, handler: function () {
                        nt.getRange().length && nt.removeAll()
                    }
                }, {
                    xtype: "button", iconCls: "ns-button-icon-arrowleft", width: 22, handler: function () {
                        qt.getValue().length && nt.removeByIds(qt.getValue())
                    }
                }, "->", {xtype: "label", text: M.selected, cls: "ns-toolbar-multiselect-right-label"}],
                listeners: {
                    afterrender: function () {
                        this.boundList.on("itemdblclick", function (t, e) {
                            nt.removeByIds(e.data.id)
                        }, this)
                    }
                }
            }), Qt = Ext.create("Ext.panel.Panel", {
                xtype: "panel",
                preventHeader: !0,
                hidden: !0,
                hideCollapseTool: !0,
                dimension: O,
                bodyStyle: "border:0 none",
                items: [_t, {xtype: "panel", layout: "column", bodyStyle: "border-style:none", items: [Xt, qt]}],
                listeners: {
                    added: function () {
                    }, expand: function (t) {
                    }
                }
            }), Kt = {
                xtype: "panel",
                title: '<div class="ns-panel-title-data">' + M.data + "</div>",
                hideCollapseTool: !0,
                dimension: P,
                updateStoreFilters: function () {
                    q.updateFilter(), K.updateFilter(), Z.updateFilter(), tt.updateFilter(), et.updateFilter()
                },
                getDimension: function () {
                    var t = {dimension: P, items: []};
                    return nt.each(function (e) {
                        t.items.push({id: e.data.id, name: e.data.name})
                    }), (Bt.getValue() || _t.getValue()) && (t.program = {id: Bt.getValue() || _t.getValue()}), t.items.length ? t : null
                },
                clearDimension: function () {
                    nt.removeAll(), q.removeAll(), gt.clearValue(), K.removeAll(), Et.clearValue(), Ct.reset(), Z.removeAll(), tt.removeAll(), et.removeAll()
                },
                setDimension: function (t) {
                    (0, u["default"])(t.program) && (0, a["default"])(t.program.id) && (Bt.setValue(t.program.id), Ot(t.program.id)), t.hasDimension(this.dimension, !0) && nt.addRecords(t.getDimension(this.dimension).getRecords())
                },
                onExpand: function () {
                    var t = xe.hasScrollbar ? y.west_scrollbarheight_accordion_indicator : y.west_maxheight_accordion_indicator;
                    ye.setThisHeight(t), i.msSetHeight([mt, At], this, y.west_fill_accordion_indicator), i.msSetHeight([wt, St], this, y.west_fill_accordion_dataelement), i.msSetHeight([It, Rt], this, y.west_fill_accordion_dataset), i.msSetHeight([Vt, zt], this, y.west_fill_accordion_eventdataitem), i.msSetHeight([Xt, qt], this, y.west_fill_accordion_programindicator)
                },
                items: [ut, yt, kt, Dt, jt, Qt],
                listeners: {
                    added: function () {
                        F.push(this)
                    }, expand: function (t) {
                        t.onExpand()
                    }
                }
            }, Jt = (Ext.create("Ext.form.field.Checkbox", {
                relativePeriodId: "rewind",
                boxLabel: M.rewind_one_period,
                xable: function () {
                    this.setDisabled(ne.isNoRelativePeriods())
                }
            }), {
                labelSeparator: "", style: "margin-bottom:0", listeners: {
                    added: function (t) {
                        "checkbox" === t.xtype && (ne.checkboxes[t.index] = t, Zt.valueComponentMap[t.relativePeriodId] = t, t.relativePeriodId === n.getRelativePeriod() && t.setValue(!0))
                    }
                }
            }), Zt = {
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
                        defaults: Jt,
                        items: [{xtype: "label", text: M.weeks, cls: "ns-label-period-heading"}, {
                            xtype: "checkbox",
                            relativePeriodId: "THIS_WEEK",
                            boxLabel: M.this_week,
                            index: 0
                        }, {
                            xtype: "checkbox",
                            relativePeriodId: "LAST_WEEK",
                            boxLabel: M.last_week,
                            index: 1
                        }, {
                            xtype: "checkbox",
                            relativePeriodId: "LAST_4_WEEKS",
                            boxLabel: M.last_4_weeks,
                            index: 2
                        }, {
                            xtype: "checkbox",
                            relativePeriodId: "LAST_12_WEEKS",
                            boxLabel: M.last_12_weeks,
                            index: 3
                        }, {xtype: "checkbox", relativePeriodId: "LAST_52_WEEKS", boxLabel: M.last_52_weeks, index: 4}]
                    }, {
                        xtype: "panel",
                        bodyStyle: "border-style:none; padding:5px 0 0 8px",
                        defaults: Jt,
                        items: [{xtype: "label", text: M.quarters, cls: "ns-label-period-heading"}, {
                            xtype: "checkbox",
                            relativePeriodId: "THIS_QUARTER",
                            boxLabel: M.this_quarter,
                            index: 13
                        }, {
                            xtype: "checkbox",
                            relativePeriodId: "LAST_QUARTER",
                            boxLabel: M.last_quarter,
                            index: 14
                        }, {xtype: "checkbox", relativePeriodId: "LAST_4_QUARTERS", boxLabel: M.last_4_quarters, index: 15}]
                    }, {
                        xtype: "panel",
                        bodyStyle: "border-style:none; padding:5px 0 0 8px",
                        defaults: Jt,
                        items: [{xtype: "label", text: M.years, cls: "ns-label-period-heading"}, {
                            xtype: "checkbox",
                            relativePeriodId: "THIS_YEAR",
                            boxLabel: M.this_year,
                            index: 22
                        }, {
                            xtype: "checkbox",
                            relativePeriodId: "LAST_YEAR",
                            boxLabel: M.last_year,
                            index: 23
                        }, {xtype: "checkbox", relativePeriodId: "LAST_5_YEARS", boxLabel: M.last_5_years, index: 24}]
                    }]
                }, {
                    xtype: "container",
                    columnWidth: .33,
                    bodyStyle: "border-style:none",
                    items: [{
                        xtype: "panel",
                        bodyStyle: "border-style:none",
                        defaults: Jt,
                        items: [{xtype: "label", text: M.months, cls: "ns-label-period-heading"}, {
                            xtype: "checkbox",
                            relativePeriodId: "THIS_MONTH",
                            boxLabel: M.this_month,
                            index: 5
                        }, {
                            xtype: "checkbox",
                            relativePeriodId: "LAST_MONTH",
                            boxLabel: M.last_month,
                            index: 6
                        }, {
                            xtype: "checkbox",
                            relativePeriodId: "LAST_3_MONTHS",
                            boxLabel: M.last_3_months,
                            index: 7
                        }, {
                            xtype: "checkbox",
                            relativePeriodId: "LAST_6_MONTHS",
                            boxLabel: M.last_6_months,
                            index: 8
                        }, {xtype: "checkbox", relativePeriodId: "LAST_12_MONTHS", boxLabel: M.last_12_months, index: 9}]
                    }, {
                        xtype: "panel",
                        bodyStyle: "border-style:none; padding:5px 0 0",
                        defaults: Jt,
                        items: [{xtype: "label", text: M.sixmonths, cls: "ns-label-period-heading"}, {
                            xtype: "checkbox",
                            relativePeriodId: "THIS_SIX_MONTH",
                            boxLabel: M.this_sixmonth,
                            index: 16
                        }, {
                            xtype: "checkbox",
                            relativePeriodId: "LAST_SIX_MONTH",
                            boxLabel: M.last_sixmonth,
                            index: 17
                        }, {
                            xtype: "checkbox",
                            relativePeriodId: "LAST_2_SIXMONTHS",
                            boxLabel: M.last_2_sixmonths,
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
                        defaults: Jt,
                        items: [{xtype: "label", text: M.bimonths, cls: "ns-label-period-heading"}, {
                            xtype: "checkbox",
                            relativePeriodId: "THIS_BIMONTH",
                            boxLabel: M.this_bimonth,
                            index: 10
                        }, {
                            xtype: "checkbox",
                            relativePeriodId: "LAST_BIMONTH",
                            boxLabel: M.last_bimonth,
                            index: 11
                        }, {xtype: "checkbox", relativePeriodId: "LAST_6_BIMONTHS", boxLabel: M.last_6_bimonths, index: 12}]
                    }, {
                        xtype: "panel",
                        bodyStyle: "border-style:none; padding:5px 0 0",
                        defaults: Jt,
                        items: [{
                            xtype: "label",
                            text: M.financial_years,
                            cls: "ns-label-period-heading"
                        }, {
                            xtype: "checkbox",
                            relativePeriodId: "THIS_FINANCIAL_YEAR",
                            boxLabel: M.this_financial_year,
                            index: 19
                        }, {
                            xtype: "checkbox",
                            relativePeriodId: "LAST_FINANCIAL_YEAR",
                            boxLabel: M.last_financial_year,
                            index: 20
                        }, {
                            xtype: "checkbox",
                            relativePeriodId: "LAST_5_FINANCIAL_YEARS",
                            boxLabel: M.last_5_financial_years,
                            index: 21
                        }]
                    }]
                }]
            }, jQueryt = Ext.create("Ext.ux.form.MultiSelect", {
                cls: "ns-toolbar-multiselect-left",
                width: (y.west_fieldset_width - y.west_width_padding) / 2,
                height: 180,
                valueField: "id",
                displayField: "name",
                store: rt,
                tbar: [{
                    xtype: "label",
                    text: M.available,
                    cls: "ns-toolbar-multiselect-left-label"
                }, "->", {
                    xtype: "button", iconCls: "ns-button-icon-arrowright", width: 22, handler: function () {
                        i.msSelect(jQueryt, te)
                    }
                }, {
                    xtype: "button", iconCls: "ns-button-icon-arrowrightdouble", width: 22, handler: function () {
                        i.msSelectAll(jQueryt, te, !0)
                    }
                }],
                listeners: {
                    afterrender: function () {
                        this.boundList.on("itemdblclick", function () {
                            i.msSelect(jQueryt, te)
                        }, this)
                    }
                }
            }), te = Ext.create("Ext.ux.form.MultiSelect", {
                cls: "ns-toolbar-multiselect-right",
                width: (y.west_fieldset_width - y.west_width_padding) / 2,
                height: 180,
                valueField: "id",
                displayField: "name",
                ddReorder: !0,
                store: at,
                tbar: [{
                    xtype: "button", iconCls: "ns-button-icon-arrowleftdouble", width: 22, handler: function () {
                        i.msUnselectAll(jQueryt, te)
                    }
                }, {
                    xtype: "button", iconCls: "ns-button-icon-arrowleft", width: 22, handler: function () {
                        i.msUnselect(jQueryt, te)
                    }
                }, "->", {xtype: "label", text: M.selected, cls: "ns-toolbar-multiselect-right-label"}],
                listeners: {
                    afterrender: function () {
                        this.boundList.on("itemdblclick", function () {
                            i.msUnselect(jQueryt, te)
                        }, this)
                    }
                }
            }), ee = function () {
                for (var t = ie.getValue(), e = ie.periodOffset, n = h.periodGenerator, o = n.generateReversedPeriods(t, "Yearly" === t ? e - 5 : e), r = 0; r < o.length; r++) o[r].id = o[r].iso;
                rt.setIndex(o), rt.loadData(o), i.msFilterAvailable(jQueryt, te)
            }, ie = Ext.create("Ext.form.field.ComboBox", {
                cls: "ns-combo",
                style: "margin-bottom:1px",
                width: y.west_fieldset_width - y.west_width_padding - 62 - 62 - 2,
                valueField: "id",
                displayField: "name",
                emptyText: M.select_period_type,
                editable: !1,
                queryMode: "remote",
                store: ot,
                periodOffset: 0,
                listeners: {
                    select: function () {
                        ie.periodOffset = 0, ee()
                    }
                }
            }), ne = {
                xtype: "panel",
                title: '<div class="ns-panel-title-period">Periods</div>',
                hideCollapseTool: !0,
                dimension: B,
                checkboxes: [],
                clearDimension: function (t) {
                    at.removeAll(), ne.resetRelativePeriods(), t || Zt.valueComponentMap[n.getRelativePeriod()].setValue(!0)
                },
                setDimension: function (t) {
                    if (t.hasDimension(this.dimension, !0)) {
                        var e, n = t.getDimension(this.dimension).extendRecords(t.getResponse()), o = [];
                        n.forEach(function (t) {
                            e = Zt.valueComponentMap[t.id], e ? e.setValue(!0) : o.push(t)
                        }), at.add(o), i.msFilterAvailable({store: rt}, {store: at})
                    }
                },
                getDimension: function () {
                    var t = {dimension: B, items: []};
                    at.each(function (e) {
                        t.items.push({id: e.data.id, name: e.data.name})
                    });
                    for (var e, i = 0; i < this.checkboxes.length; i++) e = this.checkboxes[i], e && e.getValue() && t.items.push({
                        id: e.relativePeriodId,
                        name: ""
                    });
                    return t.items.length ? t : null
                },
                onExpand: function () {
                    var t = xe.hasScrollbar ? y.west_scrollbarheight_accordion_period : y.west_maxheight_accordion_period;
                    ye.setThisHeight(t), i.msSetHeight([jQueryt, te], this, y.west_fill_accordion_period)
                },
                resetRelativePeriods: function () {
                    for (var t = this.checkboxes, e = 0; e < t.length; e++) t[e].setValue(!1)
                },
                isNoRelativePeriods: function () {
                    for (var t = this.checkboxes, e = 0; e < t.length; e++) if (t[e].getValue()) return !1;
                    return !0
                },
                items: [{
                    xtype: "panel",
                    layout: "column",
                    bodyStyle: "border-style:none",
                    style: "margin-top:0px",
                    items: [ie, {
                        xtype: "button",
                        text: M.prev_year,
                        style: "margin-left:1px; border-radius:2px",
                        height: 24,
                        width: 62,
                        handler: function () {
                            ie.getValue() && (ie.periodOffset--, ee())
                        }
                    }, {
                        xtype: "button",
                        text: M.next_year,
                        style: "margin-left:1px; border-radius:2px",
                        height: 24,
                        width: 62,
                        handler: function () {
                            ie.getValue() && (ie.periodOffset++, ee())
                        }
                    }]
                }, {
                    xtype: "panel",
                    layout: "column",
                    bodyStyle: "border-style:none; padding-bottom:2px",
                    items: [jQueryt, te]
                }, Zt],
                listeners: {
                    added: function () {
                        F.push(this)
                    }, expand: function (t) {
                        t.onExpand()
                    }
                }
            }, oe = Ext.create("Ext.tree.Panel", {
                cls: "ns-tree",
                style: "border-top: 1px solid #ddd; padding-top: 1px",
                width: y.west_fieldset_width - y.west_width_padding,
                displayField: "name",
                rootVisible: !1,
                autoScroll: !0,
                multiSelect: !0,
                rendered: !1,
                reset: function () {
                    var t = this.getRootNode().findChild("id", n.rootNodes[0].id);
                    this.collapseAll(), this.expandPath(t.getPath()), this.getSelectionModel().select(t)
                },
                selectRootIf: function () {
                    if (this.getSelectionModel().getSelection().length < 1) {
                        var t = this.getRootNode().findChild("id", n.rootNodes[0].id);
                        return this.rendered && this.getSelectionModel().select(t), t
                    }
                },
                isPending: !1,
                recordsToSelect: [],
                recordsToRestore: [],
                multipleSelectIf: function (t, e) {
                    this.recordsToSelect = (0, x["default"])(this.recordsToSelect), this.recordsToSelect.length === Object.keys(t).length && (this.getSelectionModel().select(this.recordsToSelect), this.recordsToSelect = [], this.isPending = !1, e && update())
                },
                multipleExpand: function (t, e, i) {
                    var o = this, r = n.rootNodeId, a = e[t];
                    a.substr(0, r.length + 1) !== "/" + r && (a = "/" + r + a), o.expandPath(a, "id", "/", function () {
                        var n = o.getRootNode().findChild("id", t, !0);
                        o.recordsToSelect.push(n), o.multipleSelectIf(e, i)
                    })
                },
                select: function (t, e) {
                    e || (e = {}), Ext.Ajax.request({
                        url: encodeURI(t),
                        method: "GET",
                        params: e,
                        scope: this,
                        success: function (t) {
                            var e = Ext.decode(t.responseText).organisationUnits;
                            this.numberOfRecords = e.length;
                            for (var i = 0; i < e.length; i++) this.multipleExpand(e[i].id, e[i].path)
                        }
                    })
                },
                getParentGraphMap: function () {
                    var t = this.getSelectionModel().getSelection(), e = {};
                    if (Ext.isArray(t) && t.length) for (var i, n = 0; n < t.length; n++) i = t[n].getPath().split("/"), e[i.pop()] = i.join("/");
                    return e
                },
                selectGraphMap: function (t, e) {
                    if (Object.keys(t).length) {
                        this.isPending = !0;
                        for (var i in t) t.hasOwnProperty(i) && oe.multipleExpand(i, t, e)
                    }
                },
                store: Ext.create("Ext.data.TreeStore", {
                    fields: ["id", "name", "hasChildren"],
                    proxy: {
                        type: "rest",
                        format: "json",
                        noCache: !1,
                        extraParams: {fields: "children[id," + V + ",children::isNotEmpty|rename(hasChildren)&paging=false"},
                        url: k + "/organisationUnits",
                        reader: {type: "json", root: "children"},
                        sortParam: !1
                    },
                    sorters: [{property: "name", direction: "ASC"}],
                    root: {id: n.rootNodeId, expanded: !0, children: n.getRootNodes()},
                    listeners: {
                        beforeload: function (t, e) {
                            t.proxy._url || (t.proxy._url = t.proxy.url), t.proxy.url = t.proxy._url + "/" + e.node.data.id
                        }, load: function (t, e, i) {
                            Ext.Array.each(i, function (t) {
                                Ext.isBoolean(t.data.hasChildren) && t.set("leaf", !t.data.hasChildren)
                            })
                        }
                    }
                }),
                xable: function (t) {
                    for (var e = 0; e < t.length; e++) if (t[e]) return void this.disable();
                    this.enable()
                },
                listeners: {
                    beforeitemexpand: function () {
                        oe.isPending || (oe.recordsToRestore = oe.getSelectionModel().getSelection())
                    }, itemexpand: function () {
                        !oe.isPending && oe.recordsToRestore.length && (oe.getSelectionModel().select(oe.recordsToRestore), oe.recordsToRestore = [])
                    }, render: function () {
                        this.rendered = !0
                    }, afterrender: function () {
                        this.getSelectionModel().select(0)
                    }, itemcontextmenu: function (t, e, i, n, o) {
                        t.getSelectionModel().select(e, !1), t.menu && t.menu.destroy(), t.menu = Ext.create("Ext.menu.Menu", {
                            id: "treepanel-contextmenu",
                            showSeparator: !1,
                            shadow: !1
                        }), e.data.leaf || (t.menu.add({
                            id: "treepanel-contextmenu-item",
                            text: M.select_sub_units,
                            iconCls: "ns-button-icon-nodeselectchild",
                            handler: function () {
                                e.expand(!1, function () {
                                    t.getSelectionModel().select(e.childNodes, !0), t.getSelectionModel().deselect(e)
                                })
                            }
                        }), t.menu.showAt(o.xy))
                    }
                }
            });
        i.reg(oe, "treePanel");
        var re = Ext.create("Ext.form.field.Checkbox", {
            columnWidth: .25,
            style: "padding-top: 3px; padding-left: 5px; margin-bottom: 0",
            boxLabel: M.user_organisation_unit,
            labelWidth: y.form_label_width,
            handler: function (t, e) {
                oe.xable([e, ae.getValue(), se.getValue()])
            }
        }), ae = Ext.create("Ext.form.field.Checkbox", {
            columnWidth: .26,
            style: "padding-top: 3px; margin-bottom: 0",
            boxLabel: M.user_sub_units,
            labelWidth: y.form_label_width,
            handler: function (t, e) {
                oe.xable([e, re.getValue(), se.getValue()])
            }
        }), se = Ext.create("Ext.form.field.Checkbox", {
            columnWidth: .4,
            style: "padding-top: 3px; margin-bottom: 0",
            boxLabel: M.user_sub_x2_units,
            labelWidth: y.form_label_width,
            handler: function (t, e) {
                oe.xable([e, re.getValue(), ae.getValue()])
            }
        }), le = Ext.create("Ext.form.field.ComboBox", {
            cls: "ns-combo",
            multiSelect: !0,
            style: "margin-bottom:0",
            width: y.west_fieldset_width - y.west_width_padding - 37,
            valueField: "level",
            displayField: "name",
            emptyText: M.select_organisation_unit_levels,
            editable: !1,
            hidden: !0,
            store: st
        }), de = Ext.create("Ext.form.field.ComboBox", {
            cls: "ns-combo",
            multiSelect: !0,
            style: "margin-bottom:0",
            width: y.west_fieldset_width - y.west_width_padding - 37,
            valueField: "id",
            displayField: "name",
            emptyText: M.select_organisation_unit_groups,
            editable: !1,
            hidden: !0,
            store: lt
        }), ue = Ext.create("Ext.menu.Menu", {
            shadow: !1,
            showSeparator: !1,
            menuValue: "orgunit",
            clickHandler: function (t) {
                if (t) {
                    var e = this.items.items;
                    this.menuValue = t;
                    for (var i = 0; i < e.length; i++) e[i].setIconCls && (e[i].param === t ? e[i].setIconCls("ns-menu-item-selected") : e[i].setIconCls("ns-menu-item-unselected"));
                    "orgunit" === t ? (re.show(), ae.show(), se.show(), le.hide(), de.hide(), (re.getValue() || ae.getValue()) && oe.disable()) : "level" === t ? (re.hide(), ae.hide(), se.hide(), le.show(), de.hide(), oe.enable()) : "group" === t && (re.hide(), ae.hide(), se.hide(), le.hide(), de.show(), oe.enable())
                }
            },
            items: [{
                xtype: "label",
                text: "Selection mode",
                style: "padding:7px 5px 5px 7px; font-weight:bold; border:0 none"
            }, {
                text: M.select_organisation_units + "&nbsp;&nbsp;",
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
                }, click: function (t, e) {
                    this.clickHandler(e.param)
                }
            }
        }), ce = Ext.create("Ext.button.Button", {
            cls: "ns-button-organisationunitselection",
            iconCls: "ns-button-icon-gear",
            width: 36,
            height: 24,
            menu: ue
        }), he = Ext.create("Ext.panel.Panel", {
            width: 36,
            bodyStyle: "border:0 none; text-align:right",
            style: "margin-right:1px",
            items: ce
        }), pe = {
            xtype: "panel",
            title: '<div class="ns-panel-title-organisationunit">' + M.organisation_units + "</div>",
            bodyStyle: "padding:1px",
            hideCollapseTool: !0,
            dimension: U,
            collapsed: !1,
            clearDimension: function (t) {
                t && (oe.reset(), re.setValue(!1), ae.setValue(!1), se.setValue(!1))
            },
            setDimension: function (t) {
                if (t.hasDimension(this.dimension, !0)) {
                    var e, i, n, o = t.getDimension(this.dimension, !0), r = t.parentGraphMap, a = o.getRecords(),
                        s = [], l = [], d = [];
                    a.forEach(function (t) {
                        "USER_ORGUNIT" === t.id ? e = !0 : "USER_ORGUNIT_CHILDREN" === t.id ? i = !0 : "USER_ORGUNIT_GRANDCHILDREN" === t.id ? n = !0 : "LEVEL" === t.id.substr(0, 5) ? l.push(parseInt(t.id.split("-")[1])) : "OU_GROUP" === t.id ? d.push(t.id.split("-")[1]) : s.push(t.id)
                    }), l.length ? (ue.clickHandler("level"), le.setValue(l)) : d.length ? (ue.clickHandler("group"), de.setValue(d)) : (ue.clickHandler("orgunit"), re.setValue(e), ae.setValue(i), se.setValue(n)), e || i || n || (0, u["default"])(r) && oe.selectGraphMap(r)
                } else this.clearDimension(!0)
            },
            getDimension: function () {
                var t = oe.getSelectionModel().getSelection(), e = {dimension: U, items: []};
                if ("orgunit" === ue.menuValue) if (re.getValue() || ae.getValue() || se.getValue()) re.getValue() && e.items.push({
                    id: "USER_ORGUNIT",
                    name: ""
                }), ae.getValue() && e.items.push({
                    id: "USER_ORGUNIT_CHILDREN",
                    name: ""
                }), se.getValue() && e.items.push({
                    id: "USER_ORGUNIT_GRANDCHILDREN",
                    name: ""
                }); else for (var i = 0; i < t.length; i++) e.items.push({id: t[i].data.id}); else if ("level" === ue.menuValue) {
                    for (var n = le.getValue(), i = 0; i < n.length; i++) e.items.push({id: "LEVEL-" + n[i], name: ""});
                    for (var i = 0; i < t.length; i++) e.items.push({id: t[i].data.id, name: ""})
                } else if ("group" === ue.menuValue) {
                    for (var o = de.getValue(), i = 0; i < o.length; i++) e.items.push({
                        id: "OU_GROUP-" + o[i],
                        name: ""
                    });
                    for (var i = 0; i < t.length; i++) e.items.push({id: t[i].data.id, name: ""})
                }
                return e.items.length ? e : null
            },
            onExpand: function () {
                var t = xe.hasScrollbar ? y.west_scrollbarheight_accordion_organisationunit : y.west_maxheight_accordion_organisationunit;
                ye.setThisHeight(t), oe.setHeight(this.getHeight() - y.west_fill_accordion_organisationunit)
            },
            items: [{
                layout: "column",
                bodyStyle: "border:0 none",
                style: "padding-bottom:1px",
                items: [he, {
                    width: y.west_fieldset_width - y.west_width_padding - 37,
                    layout: "column",
                    bodyStyle: "border:0 none",
                    items: [re, ae, se, le, de]
                }]
            }, oe],
            listeners: {
                added: function () {
                    F.push(this)
                }, expand: function (t) {
                    t.onExpand()
                }
            }
        }, fe = function (t, e) {
            var n, o, r, s, d, u, c, h, p, f, g;
            return n = function () {
                var e = i.get("layoutWindow");
                r.getRange().length || c.getValue() ? e.addDimension({
                    id: t.id,
                    name: t.name
                }) : e.hasDimension(t.id) && e.removeDimension(t.id)
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
                addToStorage: function (t, e, i) {
                    e = "cache_" + ((0, a["default"])(e) || (0, l["default"])(e) ? e : ""), t && (this.storage.hasOwnProperty(t) || (this.storage[t] = {}), this.storage[t][e] || (this.storage[t][e] = i))
                },
                getFromStorage: function (t, e) {
                    if (e = "cache_" + ((0, a["default"])(e) || (0, l["default"])(e) ? e : ""), this.storage.hasOwnProperty(t) && this.storage[t].hasOwnProperty(e)) return this.storage[t][e]
                },
                loadPage: function (e, n, o, r) {
                    var a, s, l = this, d = {};
                    if (e = e || u.getValue() || null, s = l.getFromStorage(t.id, e), !n && s) l.loadStore(s, {}, n, r); else {
                        if (n || (this.lastPage = null, this.nextPage = 1), l.nextPage === l.lastPage) return;
                        a = "/dimensions/" + t.id + "/items.json?fields=id," + V + (e ? "&filter=" + N + ":ilike:" + e : ""), o ? d.paging = !1 : (d.page = l.nextPage, d.pageSize = 50), l.isPending = !0, i.mask(h.boundList), Ext.Ajax.request({
                            url: encodeURI(k + a),
                            method: "GET",
                            params: d,
                            success: function (i) {
                                var o = Ext.decode(i.responseText), a = o.items || [], s = o.pager;
                                l.addToStorage(t.id, e, a), l.loadStore(a, s, n, r)
                            },
                            callback: function () {
                                l.isPending = !1, i.unmask(h.boundList)
                            }
                        })
                    }
                },
                loadStore: function (t, e, n, a) {
                    e = e || {}, this.loadData(t, n), this.lastPage = this.nextPage, e.pageCount > this.nextPage && this.nextPage++, this.isPending = !1, i.msFilterAvailable({store: o}, {store: r}), a && a()
                },
                sortStore: function () {
                    this.sort("name", "ASC")
                }
            }), r = Ext.create("Ext.data.Store", {
                fields: ["id", "name"], data: [], listeners: {
                    add: function () {
                        n()
                    }, remove: function () {
                        n()
                    }, clear: function () {
                        n()
                    }
                }
            }), s = Ext.create("Ext.form.Label", {
                text: M.available,
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
                    var t = this.getValue(), e = o;
                    ((0, a["default"])(t) || (0, l["default"])(t)) && e.loadPage(t, !1, !0)
                },
                listeners: {
                    keyup: {
                        fn: function (t) {
                            t.onKeyUpHandler()
                        }, buffer: 100
                    }, show: function (t) {
                        t.focus(!1, 50)
                    }, focus: function (t) {
                        t.addCls("ns-trigger-filter-focused")
                    }, blur: function (t) {
                        t.removeCls("ns-trigger-filter-focused")
                    }
                }
            }), c = Ext.create("Ext.form.field.Checkbox", {
                cls: "ns-checkbox", style: "margin-left: 2px; margin-right: 5px",
                boxLabel: "All", listeners: {
                    change: function (t, e) {
                        f(e)
                    }
                }
            }), h = Ext.create("Ext.ux.form.MultiSelect", {
                cls: "ns-toolbar-multiselect-left",
                width: (y.west_fieldset_width - y.west_width_padding) / 2,
                valueField: "id",
                displayField: "name",
                store: o,
                tbar: [s, d, u, "->", {
                    xtype: "button",
                    iconCls: "ns-button-icon-arrowright",
                    width: 22,
                    handler: function () {
                        i.msSelect(h, p)
                    }
                }, {
                    xtype: "button", iconCls: "ns-button-icon-arrowrightdouble", width: 22, handler: function () {
                        o.loadPage(null, null, !0, function () {
                            i.msSelectAll(h, p)
                        })
                    }
                }],
                listeners: {
                    render: function (t) {
                        var e = Ext.get(t.boundList.getEl().id + "-listEl").dom;
                        e.addEventListener("scroll", function (t) {
                            i.isScrolled(t) && !o.isPending && o.loadPage(null, !0)
                        }), t.boundList.on("itemdblclick", function () {
                            i.msSelect(h, p)
                        }, t)
                    }
                }
            }), p = Ext.create("Ext.ux.form.MultiSelect", {
                cls: "ns-toolbar-multiselect-right",
                width: (y.west_fieldset_width - y.west_width_padding) / 2,
                valueField: "id",
                displayField: "name",
                ddReorder: !0,
                store: r,
                tbar: [{
                    xtype: "button", iconCls: "ns-button-icon-arrowleftdouble", width: 22, handler: function () {
                        i.msUnselectAll(h, p)
                    }
                }, {
                    xtype: "button", iconCls: "ns-button-icon-arrowleft", width: 22, handler: function () {
                        i.msUnselect(h, p)
                    }
                }, "->", {xtype: "label", text: M.selected, cls: "ns-toolbar-multiselect-right-label"}, c],
                listeners: {
                    afterrender: function () {
                        this.boundList.on("itemdblclick", function () {
                            i.msUnselect(h, p)
                        }, this)
                    }
                }
            }), f = function (t) {
                h.boundList && p.boundList && (t ? (h.boundList.disable(), p.boundList.disable()) : (h.boundList.enable(), p.boundList.enable())), n()
            }, g = {
                xtype: "panel",
                title: '<div class="' + e + '">' + t.name + "</div>",
                hideCollapseTool: !0,
                dimension: t.id,
                availableStore: o,
                selectedStore: r,
                selectedAll: c,
                clearDimension: function () {
                    o.reset(), r.removeAll(), c.setValue(!1)
                },
                setDimension: function (t) {
                    if (t.hasDimension(this.dimension, !0)) {
                        var e = t.getDimension(this.dimension).getRecords();
                        e.length ? (r.add(e), i.msFilterAvailable({store: o}, {store: r})) : c.setValue(!0)
                    }
                },
                getDimension: function () {
                    var e = {};
                    return t.id && (e.dimension = t.id), r.getRange().length && (e.items = [], r.each(function (t) {
                        e.items.push({id: t.data.id})
                    })), e.dimension ? e : null
                },
                onExpand: function () {
                    o.isLoaded || o.loadPage(), c.getValue() && (h.boundList.disable(), p.boundList.disable());
                    var t = xe.hasScrollbar ? y.west_scrollbarheight_accordion_group : y.west_maxheight_accordion_group;
                    ye.setThisHeight(t), i.msSetHeight([h, p], this, y.west_fill_accordion_group)
                },
                items: [{xtype: "panel", layout: "column", bodyStyle: "border-style:none", items: [h, p]}],
                listeners: {
                    added: function () {
                        F.push(this)
                    }, expand: function (t) {
                        t.onExpand()
                    }
                }
            }
        }, ge = function (t, e) {
            for (var i = [], n = 0; n < t.length; n++) i.push(fe(t[n], e));
            return i
        }, me = [], Ae = Ext.create("Ext.panel.Panel", {
            layout: "accordion",
            activeOnTop: !0,
            cls: "ns-accordion",
            bodyStyle: "border:0 none; margin-bottom:2px",
            height: 700,
            dimensionPanels: null,
            items: function () {
                for (var t, e = [Kt, ne, pe], i = (0, S["default"])(n.dimensions), o = ge(i, "ns-panel-title-dimension"), r = 0; r < o.length; r++) t = o[r], z[t.dimension] = t;
                return e = e.concat(o), e[e.length - 1].cls = "ns-accordion-last", me = e, e
            }()
        });
        i.reg(Ae, "accordionBody");
        var ye = Ext.create("Ext.panel.Panel", {
            bodyStyle: "border-style:none; border-top:1px solid #d6d6d6; padding:1px; padding-bottom:0; overflow-y:scroll;",
            items: Ae,
            panels: F,
            setThisHeight: function (t) {
                var e, i = 28 * this.panels.length;
                xe.hasScrollbar ? (e = i + t, this.setHeight(xe.getHeight() - 2), Ae.setHeight(e - 2)) : (e = xe.getHeight() - y.west_fill, t += i, ye.setHeight((e > t ? t : e) - 2), Ae.setHeight((e > t ? t : e) - 4))
            },
            getExpandedPanel: function () {
                for (var t = 0; t < this.panels.length; t++) if (!this.panels[t].collapsed) return this.panels[t];
                return null
            },
            getFirstPanel: function () {
                return this.panels[0]
            }
        });
        i.reg(ye, "accordion");
        var xe = Ext.create("Ext.panel.Panel", {
            region: "west",
            preventHeader: !0,
            collapsible: !0,
            collapseMode: "mini",
            border: !1,
            width: y.west_width + i.getScrollbarSize().width,
            items: (0, x["default"])([_, ye]),
            setState: function (t) {
                ke(t)
            }
        });
        i.reg(xe, "westRegion");
        var be = Ext.create("Ext.button.Split", {
            text: "<b>" + M.update + "</b>&nbsp;", handler: function () {
                d.getReport()
            }, arrowHandler: function (t) {
                t.menu = Ext.create("Ext.menu.Menu", {
                    closeAction: "destroy",
                    shadow: !1,
                    showSeparator: !1,
                    items: [{
                        xtype: "label",
                        text: M.download_data,
                        style: "padding:7px 40px 5px 7px; font-weight:bold; color:#111; border:0 none"
                    }, {
                        text: "CSV", iconCls: "ns-menu-item-datasource", handler: function () {
                            openDataDump("csv")
                        }
                    }],
                    listeners: {
                        show: function () {
                            i.setAnchorPosition(t.menu, t)
                        }, hide: function () {
                            t.menu.destroy()
                        }, destroy: function (e) {
                            t.menu = null
                        }
                    }
                }), this.menu.show()
            }
        });
        i.reg(be, "updateButton");
        var ve = Ext.create("Ext.button.Button", {
            text: "Layout", menu: {}, handler: function () {
                var t = "layoutWindow";
                (i.get(t) || i.reg(LayoutWindow(c), t)).show()
            }
        });
        i.reg(ve, "layoutButton");
        var we = Ext.create("Ext.button.Button", {
            text: M.options, menu: {}, handler: function () {
                var t = "optionsWindow";
                (i.get(t) || i.reg(OptionsWindow(c), t)).show()
            }
        });
        i.reg(we, "optionsButton");
        var Se = Ext.create("Ext.button.Button", {
            text: M.download, disabled: !0, menu: {}, handler: function (e) {
                e.menu = Ext.create("Ext.menu.Menu", {
                    closeAction: "destroy",
                    shadow: !1,
                    showSeparator: !1,
                    items: function () {
                        var e = d.getStateCurrent(), n = e.req(), r = e.req(null, "xml"), a = e.req(null, "xls"),
                            s = e.req(null, "csv"), l = e.req(null, "jrxml"), u = e.req("/analytics/debug/sql", "sql"),
                            c = e.req("/analytics/dataValueSet", "json", null, null, !0),
                            h = e.req("/analytics/dataValueSet", "xml", null, null, !0), p = [].concat(o(X(t, e)), [{
                                xtype: "label",
                                text: M.plain_data_sources,
                                style: "padding:7px 5px 5px 7px; font-weight:bold"
                            }, {
                                text: "JSON",
                                iconCls: "ns-menu-item-datasource",
                                handler: function () {
                                    i.openPlainDataSource(n, null, !0)
                                },
                                menu: [{
                                    xtype: "label",
                                    text: M.metadata_id_scheme,
                                    style: "padding:7px 18px 5px 7px; font-weight:bold; color:#333"
                                }, {
                                    text: "ID", iconCls: "ns-menu-item-scheme", handler: function () {
                                        i.openPlainDataSource(n, "&outputIdScheme=UID", !0)
                                    }
                                }, {
                                    text: "Code", iconCls: "ns-menu-item-scheme", handler: function () {
                                        i.openPlainDataSource(n, "&outputIdScheme=CODE", !0)
                                    }
                                }, {
                                    text: "Name", iconCls: "ns-menu-item-scheme", handler: function () {
                                        i.openPlainDataSource(n, "&outputIdScheme=NAME", !0)
                                    }
                                }]
                            }, {
                                text: "XML",
                                iconCls: "ns-menu-item-datasource",
                                handler: function () {
                                    i.openPlainDataSource(r, null, !0)
                                },
                                menu: [{
                                    xtype: "label",
                                    text: M.metadata_id_scheme,
                                    style: "padding:7px 18px 5px 7px; font-weight:bold; color:#333"
                                }, {
                                    text: "ID", iconCls: "ns-menu-item-scheme", handler: function () {
                                        i.openPlainDataSource(r, "&outputIdScheme=UID", !0)
                                    }
                                }, {
                                    text: "Code", iconCls: "ns-menu-item-scheme", handler: function () {
                                        i.openPlainDataSource(r, "&outputIdScheme=CODE", !0)
                                    }
                                }, {
                                    text: "Name", iconCls: "ns-menu-item-scheme", handler: function () {
                                        i.openPlainDataSource(r, "&outputIdScheme=NAME", !0)
                                    }
                                }]
                            }, {
                                text: "Microsoft Excel",
                                iconCls: "ns-menu-item-datasource",
                                handler: function () {
                                    i.openPlainDataSource(a)
                                },
                                menu: [{
                                    xtype: "label",
                                    text: M.metadata_id_scheme,
                                    style: "padding:7px 18px 5px 7px; font-weight:bold; color:#333"
                                }, {
                                    text: "ID", iconCls: "ns-menu-item-scheme", handler: function () {
                                        i.openPlainDataSource(a, "&outputIdScheme=UID")
                                    }
                                }, {
                                    text: "Code", iconCls: "ns-menu-item-scheme", handler: function () {
                                        i.openPlainDataSource(a, "&outputIdScheme=CODE")
                                    }
                                }, {
                                    text: "Name", iconCls: "ns-menu-item-scheme", handler: function () {
                                        i.openPlainDataSource(a, "&outputIdScheme=NAME")
                                    }
                                }]
                            }, {
                                text: "CSV",
                                iconCls: "ns-menu-item-datasource",
                                handler: function () {
                                    i.openPlainDataSource(s)
                                },
                                menu: [{
                                    xtype: "label",
                                    text: M.metadata_id_scheme,
                                    style: "padding:7px 18px 5px 7px; font-weight:bold; color:#333"
                                }, {
                                    text: "ID", iconCls: "ns-menu-item-scheme", handler: function () {
                                        i.openPlainDataSource(s, "&outputIdScheme=UID")
                                    }
                                }, {
                                    text: "Code", iconCls: "ns-menu-item-scheme", handler: function () {
                                        i.openPlainDataSource(s, "&outputIdScheme=CODE")
                                    }
                                }, {
                                    text: "Name", iconCls: "ns-menu-item-scheme", handler: function () {
                                        i.openPlainDataSource(s, "&outputIdScheme=NAME")
                                    }
                                }]
                            }, {
                                text: M.advanced,
                                iconCls: "ns-menu-item-advanced",
                                menu: [{
                                    text: M.data_value_set + " JSON",
                                    iconCls: "ns-menu-item-datasource",
                                    handler: function () {
                                        i.openPlainDataSource(c, null, !0)
                                    }
                                }, {
                                    text: M.data_value_set + " XML",
                                    iconCls: "ns-menu-item-datasource",
                                    handler: function () {
                                        i.openPlainDataSource(h, null, !0)
                                    }
                                }, {
                                    text: "JRXML", iconCls: "ns-menu-item-datasource", handler: function () {
                                        i.openPlainDataSource(l, null, !0)
                                    }
                                }, {
                                    text: M.raw_data + " SQL", iconCls: "ns-menu-item-datasource", handler: function () {
                                        i.openPlainDataSource(u, null, !0)
                                    }
                                }]
                            }]);
                        return e && e.showHierarchy && e.hasDimension("ou") && (p.push({
                            xtype: "label",
                            text: M.plain_data_sources + " w/ hierarchy",
                            style: "padding:7px 8px 5px 7px; font-weight:bold"
                        }), p.push({
                            text: "CSV", iconCls: "ns-menu-item-datasource", handler: function () {
                                e.getResponse().clone().addOuHierarchyDimensions().printResponseCSV()
                            }
                        })), p
                    }(),
                    listeners: {
                        show: function () {
                            i.setAnchorPosition(e.menu, e)
                        }, hide: function () {
                            e.menu.destroy()
                        }, destroy: function (t) {
                            e.menu = null
                        }
                    }
                }), this.menu.show()
            }
        });
        i.reg(Se, "downloadButton", "onCurrent");
        var Ee = Ext.create("Ext.button.Button", {
            text: M.table,
            iconCls: "ns-button-icon-table",
            toggleGroup: "module",
            pressed: !0
        }), Ce = Ext.create("Ext.panel.Panel", {
            region: "center",
            bodyStyle: "padding:1px",
            autoScroll: !0,
            fullSize: !0,
            cmp: [Ee],
            toggleCmp: function (t) {
                Y.forEach(function (e) {
                    e && e.show && e.hide && (t ? e.show() : e.hide())
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
                    handler: function (t) {
                        xe.toggleCollapse(), this.setIconState()
                    }
                }, " ", be, H, {
                    xtype: "tbseparator",
                    height: 24,
                    style: "border-color:transparent; border-right-color:#d1d1d1; margin-right:4px"
                }, ve, we, {
                    xtype: "tbseparator",
                    height: 24,
                    style: "border-color:transparent; border-right-color:#d1d1d1; margin-right:4px"
                }, Se, W, "->"].concat(o(Y), [{
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
                    handler: function (t) {
                        G.toggleCollapse(), this.setIconState()
                    }
                }])
            },
            listeners: {
                afterrender: function (t) {
                    t.update(i.getIntroHtml())
                }
            }
        });
        i.reg(Ce, "centerRegion");
        var ke = function (t) {
            var e = i.get("layoutWindow"), n = i.get("optionsWindow");
            if (_ && _.reset(), me.forEach(function (e) {
                    e.clearDimension(!!t)
                }), t) {
                var o = (t.parentGraphMap, f.get("category"));
                _ && _.setChartType(t.type), me.forEach(function (e) {
                    e.setDimension(t)
                }), e && (e.reset(!0), e.setDimensions(t)), e.hasDimension(o.dimensionName) || e.addDimension({
                    id: o.dimensionName,
                    name: o.name
                }, e.dimensionStore), n && n.setOptions(t)
            } else oe.reset(), e.reset(), n.reset()
        }, Me = function () {
            var t = i.get("layoutWindow"), e = i.get("optionsWindow"), n = t.colStore.getDimensionNames(),
                o = t.rowStore.getDimensionNames(), r = t.filterStore.getDimensionNames(), a = e.getOptions(),
                s = f.get("data").dimensionName, l = f.get("category").dimensionName, d = {};
            _ && (a.type = _.getChartType()), a.columns = [], a.rows = [], a.filters = [];
            for (var u, c, h = 0; h < F.length; h++) u = F[h].getDimension(), u && (d[u.dimension] = [u]);
            for (var p, h = 0, g = [n, o, r], m = [a.columns, a.rows, a.filters]; h < g.length; h++) {
                p = g[h];
                for (var c, u, A = 0; A < p.length; A++) if (c = p[A], c === l) m[h].push({
                    dimension: l,
                    items: []
                }); else if (c === s && d.hasOwnProperty(c) && d[c]) for (var y = 0; y < d[s].length; y++) m[h].push(Ext.clone(d[s][y])), d[s][y].program && (a.program = d[s][y].program); else if (d.hasOwnProperty(c) && d[c]) for (var y = 0; y < d[c].length; y++) m[h].push(Ext.clone(d[c][y]))
            }
            return a.parentGraphMap = oe.getParentGraphMap(), a
        }, Pe = Ext.create("Ext.container.Viewport", {
            layout: "border",
            period: ne,
            treePanel: oe,
            getUiState: Me,
            setUiState: ke,
            westRegion: xe,
            eastRegion: G,
            centerRegion: Ce,
            northRegion: j,
            items: (0, x["default"])([G, xe, Ce, j]),
            listeners: {
                afterrender: function () {
                    xe.on("resize", function () {
                        var t = ye.getExpandedPanel();
                        t && t.onExpand()
                    }), i.getUpdateComponent().on("resize", function (t, e, n, o) {
                        i.resize({cmp: t, width: e, height: n, eOpts: o})
                    }), i.onResize(function (t, e) {
                        e < 700 && t.fullSize ? (t.toggleCmp(), t.fullSize = !1) : e >= 700 && !t.fullSize && (t.toggleCmp(!0), t.fullSize = !0)
                    });
                    var e = i.getHeight(), o = n.dimensions.length + 3, r = 28, l = 380;
                    e > o * r + l ? p["default"] || (ye.setAutoScroll(!1), xe.setWidth(y.west_width), ye.doLayout()) : xe.hasScrollbar = !0, j && j.setLogoWidth(Ce.getPosition()[0]), ye.getFirstPanel().expand();
                    var u, c = n.getUrlParam("id"), h = n.getUrlParam("s"), f = n.getUrlParam("interpretationId");
                    c ? f ? d.getById(c, function (t) {
                        d.getInterpretationById(f, function (e) {
                            i.updateInterpretation(e, t)
                        })
                    }) : d.getById(c) : (0, a["default"])(h) && s.get(h) && (u = new w.Layout(t, s.get(h)).val(), u && d.getReport(u, !1, !1, !0));
                    var g = document.getElementById("init");
                    g.parentNode.removeChild(g), Ext.getBody().setStyle("background", "#fff"), Ext.getBody().setStyle("opacity", 0), Ext.defer(function () {
                        Ext.getBody().fadeIn({duration: 600})
                    }, 300)
                }
            }
        });
        return function () {
            q.on("load", function () {
                i.msFilterAvailable(mt, At)
            }), K.on("load", function () {
                i.msFilterAvailable(wt, St)
            }), Z.on("load", function (t) {
                i.msFilterAvailable(It, Rt), t.sort("name", "ASC")
            })
        }(), Pe
    }
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    function o(t) {
        if (Array.isArray(t)) {
            for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
            return i
        }
        return Array.from(t)
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.Plugin = void 0;
    var r = i(1), a = n(r), s = e.Plugin = void 0;
    e.Plugin = s = function (t) {
        var e = t.refs, i = t.VERSION, n = t.renderFn, r = (t.initializeFn, this);
        r.url = null, r.username = null, r.password = null, r.loadingIndicator = !1;
        var s = [], l = !1, d = !1;
        r.add = function () {
            for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            e = (0, a["default"])(e[0]) ? e[0] : e, e.length && (s = [].concat(o(s), o(e)))
        }, r.load = function () {
            for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            r.add((0, a["default"])(e[0]) ? e[0] : e), h()
        };
        var u = function () {
            d = !0, l = !1
        }, c = function () {
            l = !0
        }, h = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t || p;
            if (d) for (; s.length;) n(r, s.shift()); else l || (c(), t())
        }, p = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h, o = e.appManager,
                a = e.requestManager, s = e.init, l = e.api.Request;
            o.manifestVersion = i, o.path = r.url, o.setAuth(r.username && r.password ? r.username + ":" + r.password : null), jQuery.getJSON(o.getPath() + "/api/me/user-account.json").done(function (i) {
                o.userAccount = i, a.add(new l(s.legendSetsInit(e))), a.add(new l(s.dimensionsInit(e))), t(), a.set(n), a.run()
            })
        }
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = e.SimpleRegression = void 0;
    e.SimpleRegression = i = function () {
        var t = 0, e = 0, i = 0, n = 0, o = 0, r = 0, a = 0;
        this.addData = function (s, l) {
            if (0 == o) r = s, a = l; else {
                var d = s - r, u = l - a;
                i += d * d * o / (o + 1), n += d * u * o / (o + 1), r += d / (o + 1), a += u / (o + 1)
            }
            t += s, e += l, o++
        }, this.predict = function (t) {
            var e = this.getSlope();
            return this.getIntercept(e) + e * t
        }, this.getSlope = function () {
            return o < 2 ? Number.NaN : n / i
        }, this.getIntercept = function (i) {
            return (e - i * t) / o
        }
    }
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    function o(t, e, i) {
        return (0, a["default"])(t, e, 0, i)
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = o;
    var r = i(180), a = n(r)
}, function (t, e) {
    "use strict";

    function i(t, e, i, n) {
        return n && n.length ? e < t.length ? t.splice.apply(t, [e, i].concat(n)) : t.push.apply(t, n) : t.splice(e, i), t
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = i
}, function (t, e) {
    "use strict";

    function i() {
        var t = arguments.length <= 0 || void 0 === arguments[0] ? window.navigator.userAgent : arguments[0],
            e = t.indexOf("MSIE ");
        if (e > 0) return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10);
        var i = t.indexOf("Trident/");
        if (i > 0) {
            var n = t.indexOf("rv:");
            return parseInt(t.substring(n + 3, t.indexOf(".", n)), 10)
        }
        var o = t.indexOf("Edge/");
        return o > 0 && parseInt(t.substring(o + 5, t.indexOf(".", o)), 10)
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = i
}, function (t, e) {
    "use strict";

    function i(t, e, i) {
        return t = parseFloat(t), isNaN(e) || (t = Math.max(t, e)), isNaN(i) || (t = Math.min(t, i)), t
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = i
}, 72, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = function () {
        function t(t, e) {
            return e = e || 0, t.toFixed(e)
        }

        return t
    }();
    e["default"] = i
}, 73, function (t, e) {
    function i(t) {
        var e = n(t) ? s.call(t) : "";
        return e == o || e == r
    }

    function n(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }

    var o = "[object Function]", r = "[object GeneratorFunction]", a = Object.prototype, s = a.toString;
    t.exports = i
}, 74, 75, 76, 77, function (t, e, i) {
    var n = i(60);
    t.exports = n
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = function (t, e, i) {
        return Object.assign({}, (0, r["default"])(t.type), {renderTo: e || t.el}, a, i ? s : void 0)
    };
    var o = i(59), r = n(o), a = {fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif !important", spacingTop: 20},
        s = {spacingTop: 0, spacingRight: 5, spacingBottom: 2, spacingLeft: 5}
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    function o(t, e, i) {
        var n = e ? (0, h["default"])(t.series) : t.series[0].data.slice(), o = n.map(function (t, e) {
            return {index: e, value: t}
        });
        return (0, u["default"])(o, i, "value"), (0, l["default"])(o, "index")
    }

    function r(t, e, i) {
        var n = t.xAxis.categories, r = t.series, s = o(t, e, i), l = Object.assign({}, t);
        return l.xAxis.categories = s.map(function (t) {
            return n[t]
        }), l.series = r.map(function (t) {
            return a({}, t, {
                data: t.data.map(function (e, i) {
                    return t.data[s[i]]
                })
            })
        }), l
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var a = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
        }
        return t
    };
    e["default"] = function (t, e, i) {
        var n = p.get(parseInt(e.sortOrder));
        return r(t, i, n)
    };
    var s = i(223), l = n(s), d = i(62), u = n(d), c = i(58), h = n(c), p = new Map([[-1, "ASC"], [1, "DESC"]])
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    function o(t) {
        var e = [];
        return t.forEach(function (t) {
            void 0 !== t && e.push(t)
        }), e
    }

    function r(t) {
        return (0, c["default"])(t, null) && 1 === (0, p["default"])(t).length
    }

    function a(t) {
        var e = [], i = void 0;
        return t[0].data.forEach(function (n, o) {
            i = [], t.forEach(function (t) {
                i.push(t.data[o])
            }), r(i) && e.push(o)
        }), e
    }

    function s(t, e) {
        return {
            xAxis: d({}, t, {
                categories: o(t.categories.map(function (t, i) {
                    return (0, c["default"])(e, i) ? void 0 : t
                }))
            })
        }
    }

    function l(t, e) {
        return {
            series: t.map(function (t) {
                return d({}, t, {
                    data: o(t.data.map(function (t, i) {
                        return (0, c["default"])(e, i) ? void 0 : t
                    }))
                })
            })
        }
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var d = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
        }
        return t
    };
    e["default"] = function (t) {
        var e = a(t.series);
        return e.length && t.xAxis && t.series ? Object.assign({}, t, s(t.xAxis, e), l(t.series, e)) : t
    };
    var u = i(61), c = n(u), h = i(224), p = n(h)
}, function (t, e) {
    "use strict";

    function i(t) {
        return {itemStyle: Object.assign({}, o, t ? r : null)}
    }

    function n(t) {
        return Object.assign({}, a, t ? s : null)
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = function (t, e) {
        return t.hideLegend ? {enabled: !1} : Object.assign({}, n(e), i(e))
    };
    var o = {fontSize: "13px", fontWeight: "normal"}, r = {fontSize: "10px"},
        a = {symbolWidth: 11, symbolHeight: 11, itemMarginBottom: 2}, s = {symbolPadding: 3, itemDistance: 10}
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = function () {
        return {style: {fontSize: "13px", fontWeight: "normal"}}
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = function () {
        return {
            center: ["50%", "85%"],
            size: "90%",
            startAngle: -90,
            endAngle: 90,
            background: {backgroundColor: "#F1F1F1", innerRadius: "60%", outerRadius: "100%", shape: "arc"}
        }
    }
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = function (t) {
        switch (t) {
            case a.CHART_TYPE_GAUGE:
                return (0, r["default"])();
            default:
                return
        }
    };
    var o = i(197), r = n(o), a = i(11)
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = function (t, e) {
        var o = e ? n : i;
        return [{
            name: t[0].name,
            data: t[0].data.slice(0, 1),
            enableMouseTracking: !1,
            dataLabels: {y: 0, borderWidth: 0, verticalAlign: "bottom", style: {fontSize: o}}
        }]
    };
    var i = "34px", n = "24px"
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    function o(t) {
        if (Array.isArray(t)) {
            for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
            return i
        }
        return Array.from(t)
    }

    function r(t) {
        return t.map(function (t) {
            return t[1]
        })
    }

    function a(t, e) {
        var i = r((0, h.fitData)(t).data), n = 0;
        return e ? i : t.map(function (t, e) {
            return null === t ? t : i[n++]
        })
    }

    function s(t, e) {
        return t[e] || s(t, e - t.length)
    }

    function l(t) {
        return (0, p.rgb)(t).darker(.5).toString()
    }

    function d(t, e) {
        if (e) return [].concat(o(t), [Object.assign({}, S, {data: a((0, g["default"])(t, !0))})]);
        var i = function () {
            var e = [];
            return t.forEach(function (t) {
                e.push(t, Object.assign({}, S, {color: l(t.color), data: a(t.data)}))
            }), {v: e}
        }();
        return "object" === ("undefined" == typeof i ? "undefined" : c(i)) ? i.v : void 0
    }

    function u(t, e, i, n, o) {
        return t.forEach(function (t, e) {
            i.showValues && (t.dataLabels = {enabled: !0}), n && (t.stacking = "normal"), t.color = s(o, e)
        }), i.regressionType === v && (t = d(t, n)), t
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    e["default"] = function (t, e, i, n, o) {
        switch (i.type) {
            case b.CHART_TYPE_PIE:
                t = (0, A["default"])(t, e, i, n, o.colors);
                break;
            case b.CHART_TYPE_GAUGE:
                t = (0, x["default"])(t, o.dashboard);
                break;
            default:
                t = u(t, e, i, n, o.colors)
        }
        return t.forEach(function (t) {
            t.animation = {duration: w}
        }), t
    };
    var h = i(221), p = i(228), f = i(58), g = n(f), m = i(201), A = n(m), y = i(199), x = n(y), b = i(11),
        v = "LINEAR", w = 300, S = {
            type: "line",
            name: "Trend",
            dashStyle: "solid",
            color: "#333",
            lineWidth: 1,
            marker: {symbol: "circle", radius: 2}
        }
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = function (t, e, i, n, o) {
        return [{
            name: t[0].name,
            colorByPoint: !0,
            allowPointSelect: !0,
            cursor: "pointer",
            data: (0, r["default"])(e, i).map(function (e, i) {
                return {name: e, color: o[i], y: t[0].data[i]}
            }),
            dataLabels: {
                enabled: !0, formatter: function () {
                    return '<span style="font-weight:normal">' + this.point.name + "</span><br/>" + this.y + '<span style="font-weight:normal"> (' + this.percentage.toFixed(1) + " %)</span>"
                }
            }
        }]
    };
    var o = i(56), r = n(o)
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = function (t, e, i, n, o) {
        var a = t[0].name, s = a + " - " + o;
        return {text: n || (0, r["default"])(e.title) ? s : a}
    };
    var o = i(8), r = n(o)
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    function o(t, e, i) {
        return {text: e || (0, a["default"])(t.title) ? i : void 0}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = function (t, e, i, n) {
        var r = void 0, a = (0, u["default"])(e, i);
        switch (e.type) {
            case c.CHART_TYPE_PIE:
            case c.CHART_TYPE_GAUGE:
                r = (0, l["default"])(t, e, i, n, a);
                break;
            default:
                r = o(e, n, a)
        }
        return r ? Object.assign({}, h, n ? p : void 0, r) : r
    };
    var r = i(8), a = n(r), s = i(202), l = n(s), d = i(57), u = n(d), c = i(11),
        h = {style: {fontSize: "14px", color: "#555", textShadow: "0 0 #999"}}, p = {style: {fontSize: "12px"}}
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    function o(t, e, i) {
        return (0, s["default"])(t.title) ? t.title : i && (0, s["default"])(t.name) ? t.name : t.filters ? (0, d["default"])(t, e) : null
    }

    function r(t, e, i) {
        return {text: t.hideTitle ? null : o(t, e, i)}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = function (t, e, i) {
        return Object.assign(r(t, e, i), u, i ? c : void 0)
    };
    var a = i(8), s = n(a), l = i(57), d = n(l), u = {margin: 30, y: 18, style: {color: "#111"}},
        c = {margin: 15, y: 12, style: {fontSize: "13px", fontWeight: "bold"}}
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = function () {
    }
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    function o(t, e) {
        return (0, a["default"])({
            categories: (0, u["default"])(t, e),
            title: (0, l["default"])(e.domainAxisTitle),
            labels: {style: {color: "#666", textShadow: "0 0 #ccc"}}
        })
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = function (t, e) {
        var i = void 0;
        switch (e.type) {
            case p.CHART_TYPE_GAUGE:
                i = (0, h["default"])();
                break;
            default:
                i = o(t, e)
        }
        return i
    };
    var r = i(24), a = n(r), s = i(55), l = n(s), d = i(56), u = n(d), c = i(205), h = n(c), p = i(11)
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    function o(t) {
        return (0, l["default"])(t) ? (0, a["default"])(t.legends, "ASC", "endValue").map(function (t) {
            return [parseFloat(t.endValue) / c, t.color]
        }) : void 0
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = function (t, e) {
        return (0, u["default"])({
            min: 0,
            max: c,
            lineWidth: 0,
            minorTickInterval: null,
            tickLength: 0,
            tickAmount: 0,
            labels: {y: 18, style: {fontSize: "13px"}},
            stops: o(e)
        })
    };
    var r = i(62), a = n(r), s = i(32), l = n(s), d = i(24), u = n(d), c = 100
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    function o(t) {
        return (0, A["default"])(t.rangeAxisMinValue) ? t.rangeAxisMinValue : C
    }

    function r(t) {
        return (0, A["default"])(t.rangeAxisMaxValue) ? t.rangeAxisMaxValue : void 0
    }

    function a(t) {
        return (0, A["default"])(t.rangeAxisSteps) ? t.rangeAxisSteps : void 0
    }

    function s(t) {
        return (0, A["default"])(t.targetLineValue) ? Object.assign({}, M, (0, g["default"])({
            value: t.targetLineValue,
            label: (0, x["default"])(t.targetLineTitle) ? Object.assign({}, P, {text: t.targetLineTitle}) : void 0
        })) : void 0
    }

    function l(t) {
        return (0, A["default"])(t.baseLineValue) ? Object.assign({}, M, (0, g["default"])({
            value: t.baseLineValue,
            label: (0, x["default"])(t.baseLineTitle) ? Object.assign({}, P, {text: t.baseLineTitle}) : void 0
        })) : void 0
    }

    function d(t) {
        return {
            formatter: function () {
                return this.value.toFixed(t.rangeAxisDecimals)
            }
        }
    }

    function u(t) {
        return (0, A["default"])(t.rangeAxisDecimals) ? d(t) : void 0
    }

    function c(t) {
        return (0, g["default"])({
            min: o(t),
            max: r(t),
            tickAmount: a(t),
            title: (0, v["default"])(t.rangeAxisTitle),
            plotLines: (0, p["default"])([s(t), l(t)]),
            gridLineColor: k,
            labels: u(t)
        })
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = function (t, e) {
        var i = void 0;
        switch (t.type) {
            case w.CHART_TYPE_GAUGE:
                i = (0, E["default"])(t, e.legendSet);
                break;
            default:
                i = c(t)
        }
        return i
    };
    var h = i(222), p = n(h), f = i(24), g = n(f), m = i(226), A = n(m), y = i(8), x = n(y), b = i(55), v = n(b),
        w = i(11), S = i(207), E = n(S), C = 0, k = "#E1E1E1", M = {color: "#000", width: 2, zIndex: 4},
        P = {y: -7, style: {fontSize: 13, textShadow: "0 0 6px #FFF"}}
}, [542, 11], function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = function (t, e) {
        if (t) return t.chart.renderTo = e || t.chart.renderTo, new r["default"].Chart(t)
    };
    var o = i(232), r = n(o), a = i(229), s = n(a), l = i(231), d = n(l), u = i(230), c = n(u);
    (0, s["default"])(r["default"]), (0, d["default"])(r["default"]), (0, c["default"])(r["default"])
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var o = i(210), r = n(o);
    e["default"] = {highcharts: r["default"]}
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = function (t) {
        var e = this, i = t.store, n = t.layout, o = t.el, a = t.inputFormat, l = void 0 === a ? "dhis" : a,
            u = t.outputFormat, c = void 0 === u ? "highcharts" : u, p = t.extraLayout, f = t.extraOptions,
            g = t.onError, m = t.onWarning, A = r["default"][l] || r["default"].noValidation,
            y = s["default"][l + "_" + c], x = d["default"][c];
        A === r["default"].noValidation && m('No validation implementation for config input format "' + l + '"'), y || g('No config tranformation implementation for format "' + l + '" to format "' + c + '"'), x || g("No chart implementation for format " + c), this.getConfig = function () {
            return y({
                layout: A({layout: n, onError: g, onWarning: m}),
                extraOptions: Object.assign({}, h, f),
                store: i,
                el: o,
                extraLayout: p
            })
        }, this.createChart = function () {
            return x(e.getConfig(), o)
        }
    };
    var o = i(214), r = n(o), a = i(209), s = n(a), l = i(211), d = n(l), u = i(60), c = (n(u), i(220)),
        h = {colors: c.theme1}
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = function (t) {
        var e = t.layout;
        t.onError, t.onWarning;
        return e
    }
}, [543, 213], function (t, e) {
    "use strict";

    function i(t) {
        var e = new Map;
        return t.forEach(function (t, i) {
            e.set(t.name, i)
        }), e
    }

    function n(t, e, i, n) {
        var o = new Map, r = void 0, a = void 0;
        return t.forEach(function (t) {
            r = t[e] + "-" + t[i], a = t[n], o.set(r, a)
        }), o
    }

    function o(t, e, i, n) {
        var o = [], r = void 0, a = void 0, s = void 0;
        return t.forEach(function (t) {
            r = {name: n[t], data: []}, e.forEach(function (e) {
                a = t + "-" + e, s = parseFloat(i.get(a)) || null, r.data.push(s)
            }), o.push(r)
        }), o
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = function (t) {
        var e = t.data, a = t.seriesId, s = void 0 === a ? e.headers[0].name : a, l = t.categoryId,
            d = void 0 === l ? e.headers[1].name : l, u = e.headers, c = e.metaData, h = e.rows, p = i(u), f = p.get(s),
            g = p.get(d), m = p.get(r), A = c[s], y = c[d], x = n(h, f, g, m);
        return o(A, y, x, c.names)
    };
    var r = "value"
}, [542, 215], function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = function (t) {
        var e = t.data, i = t.inputFormat, n = void 0 === i ? "dhis" : i, o = t.outputFormat,
            a = void 0 === o ? "highcharts" : o, l = (t.seriesId, t.categoryId, t.error), d = t.warning,
            u = r["default"][n] || r["default"].noValidation, c = s["default"][n + "_" + a];
        u === r["default"].noValidation && d('Validation not supported for data input format "' + n + '"'), c || l('Data tranformation from "' + n + '" to "' + a + '" is not supported'), this.data = e, this.generateData = function (t) {
            var i = t.seriesId, n = void 0 === i ? n : i, o = t.categoryId, r = void 0 === o ? r : o;
            return c({data: u({data: e, error: l, warning: d}), seriesId: n, categoryId: r})
        }
    };
    var o = i(219), r = n(o), a = i(216), s = n(a)
}, function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    function o(t) {
        return f + t
    }

    function r(t, e) {
        (0, c["default"])(t) || e(o("Header is not an object")), t.meta && ((0, p["default"])(t.name) || e(o("Header name is not a string")))
    }

    function a(t, e) {
        (0, p["default"])(t) || e(o("Row value is not a string"))
    }

    function s(t, e, i) {
        (0, d["default"])(t) || i(o("Data row is not an array")), t.length !== e && i(o("Data row length is invalid")), t.forEach(function (t) {
            return a(t, i)
        })
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = function (t) {
        var e = t.data, i = t.error, n = t.warning;
        return (0, c["default"])(e) || i(o("Data is not an object")), (0, d["default"])(e.headers) || i(o("Response headers is not an array")), !e.headers.length > 1 && i(o("At least two response headers required")), e.headers.forEach(function (t) {
            return r(t, i)
        }), (0, c["default"])(e.metaData) || i(o("Metadata is not an object")), (0, c["default"])(e.metaData.names) || i(o("Metadata names is not an object")), e.headers.forEach(function (t) {
            t.meta && ((0, d["default"])(e.metaData[t.name]) || i(o('No metadata ids found for header "' + t.name + '"')))
        }), (0, d["default"])(e.rows) || n(o("Headers is not an array")), e.rows.length || n(o("No data rows provided")), e.rows.forEach(function (t) {
            return s(t, e.headers.length, i)
        }), e
    };
    var l = i(12), d = n(l), u = i(32), c = n(u), h = i(8), p = n(h), f = "Data validator: "
}, [543, 218], function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = "#a9be3b|#558cc0|#d34957|#ff9f3a|#968f8f|#b7409f|#ffda64|#4fbdae|#b78040|#676767|#6a33cf|#4a7833".split("|");
    e.theme1 = i
}, function (t, e) {
    "use strict";

    function i(t, e, i) {
        var n, o, r = null == i ? "linear" : i, a = t.length, s = 0, l = 0, d = 0, u = 0, c = 0, h = [], p = [];
        if ("linear" == r) p = t, h = e; else if ("exp" == r || "exponential" == r) for (var f = 0; f < e.length; f++) e[f] <= 0 ? a-- : (p.push(t[f]), h.push(Math.log(e[f])));
        for (var f = 0; f < a; f++) s += p[f], l += h[f], u += p[f] * h[f], d += p[f] * p[f], c += h[f] * h[f];
        return n = (a * u - s * l) / (a * d - s * s), o = (l - n * s) / a, [n, o]
    }

    function n(t, e) {
        var n;
        return n = i(t, e, "linear"), [n[0], n[1]]
    }

    function o(t, e) {
        var n, o = t, r = e;
        n = i(o, r, "exp");
        var a = Math.exp(n[0]), s = Math.exp(n[1]);
        return [a, s]
    }

    function r(t, e) {
        var i, r, a = null == e ? "linear" : e, s = [], l = [], d = [];
        for (u = 0; u < t.length; u++) null != t[u] && "[object Array]" === Object.prototype.toString.call(t[u]) ? null != t[u] && null != t[u][0] && null != t[u][1] && (s.push(t[u][0]), l.push(t[u][1])) : null != t[u] && "number" == typeof t[u] ? (s.push(u), l.push(t[u])) : null != t[u] && "[object Object]" === Object.prototype.toString.call(t[u]) && null != t[u] && null != t[u].x && null != t[u].y && (s.push(t[u].x), l.push(t[u].y));
        if ("linear" == a) {
            i = n(s, l);
            for (var u = 0; u < s.length; u++) r = i[0] * s[u] + i[1], d.push([s[u], r]);
            return {
                data: d, slope: i[0], intercept: i[1], y: function (t) {
                    return this.slope * t + this.intercept
                }, x: function (t) {
                    return (t - this.intercept) / this.slope
                }
            }
        }
        if ("exp" == a || "exponential" == a) {
            i = o(s, l);
            for (var u = 0; u < s.length; u++) r = i[1] * Math.pow(i[0], s[u]),
                d.push([s[u], r]);
            return d.sort(), {data: d, base: i[0], coeff: i[1]}
        }
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.fitData = r
}, [537, 63], 22, 47, [531, 227], 51, 72, function (t, e, i) {
    !function (t, i) {
        i(e)
    }(this, function (t) {
        "use strict";

        function e(t, e, i) {
            t.prototype = e.prototype = i, i.constructor = t
        }

        function i(t, e) {
            var i = Object.create(t.prototype);
            for (var n in e) i[n] = e[n];
            return i
        }

        function n() {
        }

        function o(t) {
            var e;
            return t = (t + "").trim().toLowerCase(), (e = I.exec(t)) ? (e = parseInt(e[1], 16), new d(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, (15 & e) << 4 | 15 & e, 1)) : (e = R.exec(t)) ? r(parseInt(e[1], 16)) : (e = L.exec(t)) ? new d(e[1], e[2], e[3], 1) : (e = D.exec(t)) ? new d(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, 1) : (e = O.exec(t)) ? a(e[1], e[2], e[3], e[4]) : (e = B.exec(t)) ? a(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = U.exec(t)) ? u(e[1], e[2] / 100, e[3] / 100, 1) : (e = F.exec(t)) ? u(e[1], e[2] / 100, e[3] / 100, e[4]) : N.hasOwnProperty(t) ? r(N[t]) : "transparent" === t ? new d(NaN, NaN, NaN, 0) : null
        }

        function r(t) {
            return new d(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
        }

        function a(t, e, i, n) {
            return n <= 0 && (t = e = i = NaN), new d(t, e, i, n)
        }

        function s(t) {
            return t instanceof n || (t = o(t)), t ? (t = t.rgb(), new d(t.r, t.g, t.b, t.opacity)) : new d
        }

        function l(t, e, i, n) {
            return 1 === arguments.length ? s(t) : new d(t, e, i, null == n ? 1 : n)
        }

        function d(t, e, i, n) {
            this.r = +t, this.g = +e, this.b = +i, this.opacity = +n
        }

        function u(t, e, i, n) {
            return n <= 0 ? t = e = i = NaN : i <= 0 || i >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new p(t, e, i, n)
        }

        function c(t) {
            if (t instanceof p) return new p(t.h, t.s, t.l, t.opacity);
            if (t instanceof n || (t = o(t)), !t) return new p;
            if (t instanceof p) return t;
            t = t.rgb();
            var e = t.r / 255, i = t.g / 255, r = t.b / 255, a = Math.min(e, i, r), s = Math.max(e, i, r), l = NaN,
                d = s - a, u = (s + a) / 2;
            return d ? (l = e === s ? (i - r) / d + 6 * (i < r) : i === s ? (r - e) / d + 2 : (e - i) / d + 4, d /= u < .5 ? s + a : 2 - s - a, l *= 60) : d = u > 0 && u < 1 ? 0 : l, new p(l, d, u, t.opacity)
        }

        function h(t, e, i, n) {
            return 1 === arguments.length ? c(t) : new p(t, e, i, null == n ? 1 : n)
        }

        function p(t, e, i, n) {
            this.h = +t, this.s = +e, this.l = +i, this.opacity = +n
        }

        function f(t, e, i) {
            return 255 * (t < 60 ? e + (i - e) * t / 60 : t < 180 ? i : t < 240 ? e + (i - e) * (240 - t) / 60 : e)
        }

        function g(t) {
            if (t instanceof A) return new A(t.l, t.a, t.b, t.opacity);
            if (t instanceof E) {
                var e = t.h * V;
                return new A(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity)
            }
            t instanceof d || (t = s(t));
            var i = v(t.r), n = v(t.g), o = v(t.b), r = y((.4124564 * i + .3575761 * n + .1804375 * o) / G),
                a = y((.2126729 * i + .7151522 * n + .072175 * o) / _),
                l = y((.0193339 * i + .119192 * n + .9503041 * o) / H);
            return new A(116 * a - 16, 500 * (r - a), 200 * (a - l), t.opacity)
        }

        function m(t, e, i, n) {
            return 1 === arguments.length ? g(t) : new A(t, e, i, null == n ? 1 : n)
        }

        function A(t, e, i, n) {
            this.l = +t, this.a = +e, this.b = +i, this.opacity = +n
        }

        function y(t) {
            return t > q ? Math.pow(t, 1 / 3) : t / X + W
        }

        function x(t) {
            return t > Y ? t * t * t : X * (t - W)
        }

        function b(t) {
            return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
        }

        function v(t) {
            return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
        }

        function w(t) {
            if (t instanceof E) return new E(t.h, t.c, t.l, t.opacity);
            t instanceof A || (t = g(t));
            var e = Math.atan2(t.b, t.a) * z;
            return new E(e < 0 ? e + 360 : e, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
        }

        function S(t, e, i, n) {
            return 1 === arguments.length ? w(t) : new E(t, e, i, null == n ? 1 : n)
        }

        function E(t, e, i, n) {
            this.h = +t, this.c = +e, this.l = +i, this.opacity = +n
        }

        function C(t) {
            if (t instanceof M) return new M(t.h, t.s, t.l, t.opacity);
            t instanceof d || (t = s(t));
            var e = t.r / 255, i = t.g / 255, n = t.b / 255, o = (it * n + tt * e - et * i) / (it + tt - et), r = n - o,
                a = (jQuery * (i - o) - J * r) / Z, l = Math.sqrt(a * a + r * r) / (jQuery * o * (1 - o)),
                u = l ? Math.atan2(a, r) * z - 120 : NaN;
            return new M(u < 0 ? u + 360 : u, l, o, t.opacity)
        }

        function k(t, e, i, n) {
            return 1 === arguments.length ? C(t) : new M(t, e, i, null == n ? 1 : n)
        }

        function M(t, e, i, n) {
            this.h = +t, this.s = +e, this.l = +i, this.opacity = +n
        }

        var P = .7, T = 1 / P, I = /^#([0-9a-f]{3})jQuery/, R = /^#([0-9a-f]{6})jQuery/,
            L = /^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)jQuery/,
            D = /^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)jQuery/,
            O = /^rgba\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)jQuery/,
            B = /^rgba\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)jQuery/,
            U = /^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)jQuery/,
            F = /^hsla\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)jQuery/,
            N = {
                aliceblue: 15792383,
                antiquewhite: 16444375,
                aqua: 65535,
                aquamarine: 8388564,
                azure: 15794175,
                beige: 16119260,
                bisque: 16770244,
                black: 0,
                blanchedalmond: 16772045,
                blue: 255,
                blueviolet: 9055202,
                brown: 10824234,
                burlywood: 14596231,
                cadetblue: 6266528,
                chartreuse: 8388352,
                chocolate: 13789470,
                coral: 16744272,
                cornflowerblue: 6591981,
                cornsilk: 16775388,
                crimson: 14423100,
                cyan: 65535,
                darkblue: 139,
                darkcyan: 35723,
                darkgoldenrod: 12092939,
                darkgray: 11119017,
                darkgreen: 25600,
                darkgrey: 11119017,
                darkkhaki: 12433259,
                darkmagenta: 9109643,
                darkolivegreen: 5597999,
                darkorange: 16747520,
                darkorchid: 10040012,
                darkred: 9109504,
                darksalmon: 15308410,
                darkseagreen: 9419919,
                darkslateblue: 4734347,
                darkslategray: 3100495,
                darkslategrey: 3100495,
                darkturquoise: 52945,
                darkviolet: 9699539,
                deeppink: 16716947,
                deepskyblue: 49151,
                dimgray: 6908265,
                dimgrey: 6908265,
                dodgerblue: 2003199,
                firebrick: 11674146,
                floralwhite: 16775920,
                forestgreen: 2263842,
                fuchsia: 16711935,
                gainsboro: 14474460,
                ghostwhite: 16316671,
                gold: 16766720,
                goldenrod: 14329120,
                gray: 8421504,
                green: 32768,
                greenyellow: 11403055,
                grey: 8421504,
                honeydew: 15794160,
                hotpink: 16738740,
                indianred: 13458524,
                indigo: 4915330,
                ivory: 16777200,
                khaki: 15787660,
                lavender: 15132410,
                lavenderblush: 16773365,
                lawngreen: 8190976,
                lemonchiffon: 16775885,
                lightblue: 11393254,
                lightcoral: 15761536,
                lightcyan: 14745599,
                lightgoldenrodyellow: 16448210,
                lightgray: 13882323,
                lightgreen: 9498256,
                lightgrey: 13882323,
                lightpink: 16758465,
                lightsalmon: 16752762,
                lightseagreen: 2142890,
                lightskyblue: 8900346,
                lightslategray: 7833753,
                lightslategrey: 7833753,
                lightsteelblue: 11584734,
                lightyellow: 16777184,
                lime: 65280,
                limegreen: 3329330,
                linen: 16445670,
                magenta: 16711935,
                maroon: 8388608,
                mediumaquamarine: 6737322,
                mediumblue: 205,
                mediumorchid: 12211667,
                mediumpurple: 9662683,
                mediumseagreen: 3978097,
                mediumslateblue: 8087790,
                mediumspringgreen: 64154,
                mediumturquoise: 4772300,
                mediumvioletred: 13047173,
                midnightblue: 1644912,
                mintcream: 16121850,
                mistyrose: 16770273,
                moccasin: 16770229,
                navajowhite: 16768685,
                navy: 128,
                oldlace: 16643558,
                olive: 8421376,
                olivedrab: 7048739,
                orange: 16753920,
                orangered: 16729344,
                orchid: 14315734,
                palegoldenrod: 15657130,
                palegreen: 10025880,
                paleturquoise: 11529966,
                palevioletred: 14381203,
                papayawhip: 16773077,
                peachpuff: 16767673,
                peru: 13468991,
                pink: 16761035,
                plum: 14524637,
                powderblue: 11591910,
                purple: 8388736,
                rebeccapurple: 6697881,
                red: 16711680,
                rosybrown: 12357519,
                royalblue: 4286945,
                saddlebrown: 9127187,
                salmon: 16416882,
                sandybrown: 16032864,
                seagreen: 3050327,
                seashell: 16774638,
                sienna: 10506797,
                silver: 12632256,
                skyblue: 8900331,
                slateblue: 6970061,
                slategray: 7372944,
                slategrey: 7372944,
                snow: 16775930,
                springgreen: 65407,
                steelblue: 4620980,
                tan: 13808780,
                teal: 32896,
                thistle: 14204888,
                tomato: 16737095,
                turquoise: 4251856,
                violet: 15631086,
                wheat: 16113331,
                white: 16777215,
                whitesmoke: 16119285,
                yellow: 16776960,
                yellowgreen: 10145074
            };
        e(n, o, {
            displayable: function () {
                return this.rgb().displayable()
            }, toString: function () {
                return this.rgb() + ""
            }
        }), e(d, l, i(n, {
            brighter: function (t) {
                return t = null == t ? T : Math.pow(T, t), new d(this.r * t, this.g * t, this.b * t, this.opacity)
            }, darker: function (t) {
                return t = null == t ? P : Math.pow(P, t), new d(this.r * t, this.g * t, this.b * t, this.opacity)
            }, rgb: function () {
                return this
            }, displayable: function () {
                return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
            }, toString: function () {
                var t = this.opacity;
                return t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)), (1 === t ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
            }
        })), e(p, h, i(n, {
            brighter: function (t) {
                return t = null == t ? T : Math.pow(T, t), new p(this.h, this.s, this.l * t, this.opacity)
            }, darker: function (t) {
                return t = null == t ? P : Math.pow(P, t), new p(this.h, this.s, this.l * t, this.opacity)
            }, rgb: function () {
                var t = this.h % 360 + 360 * (this.h < 0), e = isNaN(t) || isNaN(this.s) ? 0 : this.s, i = this.l,
                    n = i + (i < .5 ? i : 1 - i) * e, o = 2 * i - n;
                return new d(f(t >= 240 ? t - 240 : t + 120, o, n), f(t, o, n), f(t < 120 ? t + 240 : t - 120, o, n), this.opacity)
            }, displayable: function () {
                return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
            }
        }));
        var V = Math.PI / 180, z = 180 / Math.PI, j = 18, G = .95047, _ = 1, H = 1.08883, W = 4 / 29, Y = 6 / 29,
            X = 3 * Y * Y, q = Y * Y * Y;
        e(A, m, i(n, {
            brighter: function (t) {
                return new A(this.l + j * (null == t ? 1 : t), this.a, this.b, this.opacity)
            }, darker: function (t) {
                return new A(this.l - j * (null == t ? 1 : t), this.a, this.b, this.opacity)
            }, rgb: function () {
                var t = (this.l + 16) / 116, e = isNaN(this.a) ? t : t + this.a / 500,
                    i = isNaN(this.b) ? t : t - this.b / 200;
                return t = _ * x(t), e = G * x(e), i = H * x(i), new d(b(3.2404542 * e - 1.5371385 * t - .4985314 * i), b(-.969266 * e + 1.8760108 * t + .041556 * i), b(.0556434 * e - .2040259 * t + 1.0572252 * i), this.opacity)
            }
        })), e(E, S, i(n, {
            brighter: function (t) {
                return new E(this.h, this.c, this.l + j * (null == t ? 1 : t), this.opacity)
            }, darker: function (t) {
                return new E(this.h, this.c, this.l - j * (null == t ? 1 : t), this.opacity)
            }, rgb: function () {
                return g(this).rgb()
            }
        }));
        var Q = -.14861, K = 1.78277, J = -.29227, Z = -.90649, jQuery = 1.97294, tt = jQuery * Z, et = jQuery * K, it = K * J - Z * Q;
        e(M, k, i(n, {
            brighter: function (t) {
                return t = null == t ? T : Math.pow(T, t), new M(this.h, this.s, this.l * t, this.opacity)
            }, darker: function (t) {
                return t = null == t ? P : Math.pow(P, t), new M(this.h, this.s, this.l * t, this.opacity)
            }, rgb: function () {
                var t = isNaN(this.h) ? 0 : (this.h + 120) * V, e = +this.l,
                    i = isNaN(this.s) ? 0 : this.s * e * (1 - e), n = Math.cos(t), o = Math.sin(t);
                return new d(255 * (e + i * (Q * n + K * o)), 255 * (e + i * (J * n + Z * o)), 255 * (e + i * (jQuery * n)), this.opacity)
            }
        })), t.color = o, t.rgb = l, t.hsl = h, t.lab = m, t.hcl = S, t.cubehelix = k, Object.defineProperty(t, "__esModule", {value: !0})
    })
}, function (t, e) {
    !function (e) {
        "object" == typeof t && t.exports ? t.exports = e : e(Highcharts)
    }(function (t) {
        function e(t, e, i) {
            this.init(t, e, i)
        }

        var i = t.arrayMin, n = t.arrayMax, o = t.each, r = t.extend, a = t.merge, s = t.map, l = t.pick, d = t.pInt,
            u = t.getOptions().plotOptions, c = t.seriesTypes, h = t.extendClass, p = t.splat, f = t.wrap, g = t.Axis,
            m = t.Tick, A = t.Point, y = t.Pointer, x = t.CenteredSeriesMixin, b = t.TrackerMixin, v = t.Series,
            w = Math, S = w.round, E = w.floor, C = w.max, k = t.Color, M = function () {
            };
        r(e.prototype, {
            init: function (t, e, i) {
                var n = this, r = n.defaultOptions;
                n.chart = e, n.options = t = a(r, e.angular ? {background: {}} : void 0, t), (t = t.background) && o([].concat(p(t)).reverse(), function (t) {
                    var e = t.backgroundColor, o = i.userOptions, t = a(n.defaultBackgroundOptions, t);
                    e && (t.backgroundColor = e), t.color = t.backgroundColor, i.options.plotBands.unshift(t), o.plotBands = o.plotBands || [], o.plotBands !== i.options.plotBands && o.plotBands.unshift(t)
                })
            },
            defaultOptions: {center: ["50%", "50%"], size: "85%", startAngle: 0},
            defaultBackgroundOptions: {
                shape: "circle",
                borderWidth: 1,
                borderColor: "silver",
                backgroundColor: {linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1}, stops: [[0, "#FFF"], [1, "#DDD"]]},
                from: -Number.MAX_VALUE,
                innerRadius: 0,
                to: Number.MAX_VALUE,
                outerRadius: "105%"
            }
        });
        var P = g.prototype, m = m.prototype, T = {
            getOffset: M, redraw: function () {
                this.isDirty = !1
            }, render: function () {
                this.isDirty = !1
            }, setScale: M, setCategories: M, setTitle: M
        }, I = {
            isRadial: !0,
            defaultRadialGaugeOptions: {
                labels: {align: "center", x: 0, y: null},
                minorGridLineWidth: 0,
                minorTickInterval: "auto",
                minorTickLength: 10,
                minorTickPosition: "inside",
                minorTickWidth: 1,
                tickLength: 10,
                tickPosition: "inside",
                tickWidth: 2,
                title: {rotation: 0},
                zIndex: 2
            },
            defaultRadialXOptions: {
                gridLineWidth: 1,
                labels: {align: null, distance: 15, x: 0, y: null},
                maxPadding: 0,
                minPadding: 0,
                showLastLabel: !1,
                tickLength: 0
            },
            defaultRadialYOptions: {
                gridLineInterpolation: "circle",
                labels: {align: "right", x: -3, y: -2},
                showLastLabel: !1,
                title: {x: 4, text: null, rotation: 90}
            },
            setOptions: function (t) {
                t = this.options = a(this.defaultOptions, this.defaultRadialOptions, t), t.plotBands || (t.plotBands = [])
            },
            getOffset: function () {
                P.getOffset.call(this), this.chart.axisOffset[this.side] = 0, this.center = this.pane.center = x.getCenter.call(this.pane)
            },
            getLinePath: function (t, e) {
                var i = this.center, e = l(e, i[2] / 2 - this.offset);
                return this.chart.renderer.symbols.arc(this.left + i[0], this.top + i[1], e, e, {
                    start: this.startAngleRad,
                    end: this.endAngleRad,
                    open: !0,
                    innerR: 0
                })
            },
            setAxisTranslation: function () {
                P.setAxisTranslation.call(this), this.center && (this.transA = this.isCircular ? (this.endAngleRad - this.startAngleRad) / (this.max - this.min || 1) : this.center[2] / 2 / (this.max - this.min || 1), this.minPixelPadding = this.isXAxis ? this.transA * this.minPointOffset : 0)
            },
            beforeSetTickPositions: function () {
                this.autoConnect && (this.max += this.categories && 1 || this.pointRange || this.closestPointRange || 0)
            },
            setAxisSize: function () {
                P.setAxisSize.call(this), this.isRadial && (this.center = this.pane.center = t.CenteredSeriesMixin.getCenter.call(this.pane), this.isCircular && (this.sector = this.endAngleRad - this.startAngleRad), this.len = this.width = this.height = this.center[2] * l(this.sector, 1) / 2)
            },
            getPosition: function (t, e) {
                return this.postTranslate(this.isCircular ? this.translate(t) : 0, l(this.isCircular ? e : this.translate(t), this.center[2] / 2) - this.offset)
            },
            postTranslate: function (t, e) {
                var i = this.chart, n = this.center, t = this.startAngleRad + t;
                return {x: i.plotLeft + n[0] + Math.cos(t) * e, y: i.plotTop + n[1] + Math.sin(t) * e}
            },
            getPlotBandPath: function (t, e, i) {
                var n, o = this.center, r = this.startAngleRad, a = o[2] / 2,
                    u = [l(i.outerRadius, "100%"), i.innerRadius, l(i.thickness, 10)], c = /%jQuery/, h = this.isCircular;
                return "polygon" === this.options.gridLineInterpolation ? o = this.getPlotLinePath(t).concat(this.getPlotLinePath(e, !0)) : (t = Math.max(t, this.min), e = Math.min(e, this.max), h || (u[0] = this.translate(t), u[1] = this.translate(e)), u = s(u, function (t) {
                    return c.test(t) && (t = d(t, 10) * a / 100), t
                }), "circle" !== i.shape && h ? (t = r + this.translate(t), e = r + this.translate(e)) : (t = -Math.PI / 2, e = 1.5 * Math.PI, n = !0), o = this.chart.renderer.symbols.arc(this.left + o[0], this.top + o[1], u[0], u[0], {
                    start: Math.min(t, e),
                    end: Math.max(t, e),
                    innerR: l(u[1], u[0] - u[2]),
                    open: n
                })), o
            },
            getPlotLinePath: function (t, e) {
                var i, n, r, a = this, s = a.center, l = a.chart, d = a.getPosition(t);
                return a.isCircular ? r = ["M", s[0] + l.plotLeft, s[1] + l.plotTop, "L", d.x, d.y] : "circle" === a.options.gridLineInterpolation ? (t = a.translate(t)) && (r = a.getLinePath(0, t)) : (o(l.xAxis, function (t) {
                    t.pane === a.pane && (i = t)
                }), r = [], t = a.translate(t), s = i.tickPositions, i.autoConnect && (s = s.concat([s[0]])), e && (s = [].concat(s).reverse()), o(s, function (e, o) {
                    n = i.getPosition(e, t), r.push(o ? "L" : "M", n.x, n.y)
                })), r
            },
            getTitlePosition: function () {
                var t = this.center, e = this.chart, i = this.options.title;
                return {
                    x: e.plotLeft + t[0] + (i.x || 0),
                    y: e.plotTop + t[1] - {high: .5, middle: .25, low: 0}[i.align] * t[2] + (i.y || 0)
                }
            }
        };
        f(P, "init", function (t, i, n) {
            var o, s, d, u = i.angular, c = i.polar, h = n.isX, f = u && h;
            d = i.options;
            var g = n.pane || 0;
            u ? (r(this, f ? T : I), (s = !h) && (this.defaultRadialOptions = this.defaultRadialGaugeOptions)) : c && (r(this, I), this.defaultRadialOptions = (s = h) ? this.defaultRadialXOptions : a(this.defaultYAxisOptions, this.defaultRadialYOptions)), t.call(this, i, n), f || !u && !c || (t = this.options, i.panes || (i.panes = []), this.pane = (o = i.panes[g] = i.panes[g] || new e(p(d.pane)[g], i, this), g = o), g = g.options, i.inverted = !1, d.chart.zoomType = null, this.startAngleRad = i = (g.startAngle - 90) * Math.PI / 180, this.endAngleRad = d = (l(g.endAngle, g.startAngle + 360) - 90) * Math.PI / 180, this.offset = t.offset || 0, (this.isCircular = s) && void 0 === n.max && d - i === 2 * Math.PI && (this.autoConnect = !0))
        }), f(P, "autoLabelAlign", function (t) {
            if (!this.isRadial) return t.apply(this, [].slice.call(arguments, 1))
        }), f(m, "getPosition", function (t, e, i, n, o) {
            var r = this.axis;
            return r.getPosition ? r.getPosition(i) : t.call(this, e, i, n, o)
        }), f(m, "getLabelPosition", function (t, e, i, n, o, r, a, s, d) {
            var u = this.axis, c = r.y, h = 20, p = r.align,
                f = (u.translate(this.pos) + u.startAngleRad + Math.PI / 2) / Math.PI * 180 % 360;
            return u.isRadial ? (t = u.getPosition(this.pos, u.center[2] / 2 + l(r.distance, -25)), "auto" === r.rotation ? n.attr({rotation: f}) : null === c && (c = u.chart.renderer.fontMetrics(n.styles.fontSize).b - n.getBBox().height / 2), null === p && (u.isCircular ? (this.label.getBBox().width > u.len * u.tickInterval / (u.max - u.min) && (h = 0), p = f > h && f < 180 - h ? "left" : f > 180 + h && f < 360 - h ? "right" : "center") : p = "center", n.attr({align: p})), t.x += r.x, t.y += c) : t = t.call(this, e, i, n, o, r, a, s, d), t
        }), f(m, "getMarkPath", function (t, e, i, n, o, r, a) {
            var s = this.axis;
            return s.isRadial ? (t = s.getPosition(this.pos, s.center[2] / 2 + n), e = ["M", e, i, "L", t.x, t.y]) : e = t.call(this, e, i, n, o, r, a), e
        }), u.arearange = a(u.area, {
            lineWidth: 1,
            marker: null,
            threshold: null,
            tooltip: {pointFormat: '<span style="color:{series.color}">●</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'},
            trackByArea: !0,
            dataLabels: {align: null, verticalAlign: null, xLow: 0, xHigh: 0, yLow: 0, yHigh: 0},
            states: {hover: {halo: !1}}
        }), c.arearange = h(c.area, {
            type: "arearange",
            pointArrayMap: ["low", "high"],
            dataLabelCollections: ["dataLabel", "dataLabelUpper"],
            toYData: function (t) {
                return [t.low, t.high]
            },
            pointValKey: "low",
            deferTranslatePolar: !0,
            highToXY: function (t) {
                var e = this.chart, i = this.xAxis.postTranslate(t.rectPlotX, this.yAxis.len - t.plotHigh);
                t.plotHighX = i.x - e.plotLeft, t.plotHigh = i.y - e.plotTop
            },
            translate: function () {
                var t = this, e = t.yAxis;
                c.area.prototype.translate.apply(t), o(t.points, function (t) {
                    var i = t.low, n = t.high, o = t.plotY;
                    null === n || null === i ? t.isNull = !0 : (t.plotLow = o, t.plotHigh = e.translate(n, 0, 1, 0, 1))
                }), this.chart.polar && o(this.points, function (e) {
                    t.highToXY(e)
                })
            },
            getGraphPath: function () {
                var t, e, i, n = this.points, o = [], r = [], a = n.length, s = v.prototype.getGraphPath;
                i = this.options;
                for (var l = i.step, a = n.length; a--;) t = n[a], !t.isNull && (!n[a + 1] || n[a + 1].isNull) && r.push({
                    plotX: t.plotX,
                    plotY: t.plotLow
                }), e = {
                    plotX: t.plotX,
                    plotY: t.plotHigh,
                    isNull: t.isNull
                }, r.push(e), o.push(e), !t.isNull && (!n[a - 1] || n[a - 1].isNull) && r.push({
                    plotX: t.plotX,
                    plotY: t.plotLow
                });
                return n = s.call(this, n), l && (l === !0 && (l = "left"), i.step = {
                    left: "right",
                    center: "center",
                    right: "left"
                }[l]), o = s.call(this, o), r = s.call(this, r), i.step = l, i = [].concat(n, o), !this.chart.polar && "M" === r[0] && (r[0] = "L"), this.areaPath = this.areaPath.concat(n, r), i
            },
            drawDataLabels: function () {
                var t, e, i, n = this.data, o = n.length, r = [], a = v.prototype, s = this.options.dataLabels,
                    l = s.align, d = s.verticalAlign, u = s.inside, c = this.chart.inverted;
                if (s.enabled || this._hasPointLabels) {
                    for (t = o; t--;) (e = n[t]) && (i = u ? e.plotHigh < e.plotLow : e.plotHigh > e.plotLow, e.y = e.high, e._plotY = e.plotY, e.plotY = e.plotHigh, r[t] = e.dataLabel, e.dataLabel = e.dataLabelUpper, e.below = i, c ? l || (s.align = i ? "right" : "left") : d || (s.verticalAlign = i ? "top" : "bottom"), s.x = s.xHigh, s.y = s.yHigh);
                    for (a.drawDataLabels && a.drawDataLabels.apply(this, arguments), t = o; t--;) (e = n[t]) && (i = u ? e.plotHigh < e.plotLow : e.plotHigh > e.plotLow, e.dataLabelUpper = e.dataLabel, e.dataLabel = r[t], e.y = e.low, e.plotY = e._plotY, e.below = !i, c ? l || (s.align = i ? "left" : "right") : d || (s.verticalAlign = i ? "bottom" : "top"), s.x = s.xLow, s.y = s.yLow);
                    a.drawDataLabels && a.drawDataLabels.apply(this, arguments)
                }
                s.align = l, s.verticalAlign = d
            },
            alignDataLabel: function () {
                c.column.prototype.alignDataLabel.apply(this, arguments)
            },
            setStackedPoints: M,
            getSymbol: M,
            drawPoints: M
        }), u.areasplinerange = a(u.arearange), c.areasplinerange = h(c.arearange, {
            type: "areasplinerange",
            getPointSpline: c.spline.prototype.getPointSpline
        }), function () {
            var t = c.column.prototype;
            u.columnrange = a(u.column, u.arearange, {
                lineWidth: 1,
                pointRange: null
            }), c.columnrange = h(c.arearange, {
                type: "columnrange",
                translate: function () {
                    var e, i = this, n = i.yAxis, r = i.xAxis, a = i.chart;
                    t.translate.apply(i), o(i.points, function (t) {
                        var o, s, l = t.shapeArgs, d = i.options.minPointLength;
                        t.plotHigh = e = n.translate(t.high, 0, 1, 0, 1), t.plotLow = t.plotY, s = e, o = t.plotY - e, Math.abs(o) < d ? (d -= o, o += d, s -= d / 2) : o < 0 && (o *= -1, s -= o), l.height = o, l.y = s, t.tooltipPos = a.inverted ? [n.len + n.pos - a.plotLeft - s - o / 2, r.len + r.pos - a.plotTop - l.x - l.width / 2, o] : [r.left - a.plotLeft + l.x + l.width / 2, n.pos - a.plotTop + s + o / 2, o]
                    })
                },
                directTouch: !0,
                trackerGroups: ["group", "dataLabelsGroup"],
                drawGraph: M,
                crispCol: t.crispCol,
                pointAttrToOptions: t.pointAttrToOptions,
                drawPoints: t.drawPoints,
                drawTracker: t.drawTracker,
                animate: t.animate,
                getColumnMetrics: t.getColumnMetrics
            })
        }(), u.gauge = a(u.line, {
            dataLabels: {
                enabled: !0,
                defer: !1,
                y: 15,
                borderWidth: 1,
                borderColor: "silver",
                borderRadius: 3,
                crop: !1,
                verticalAlign: "top",
                zIndex: 2
            }, dial: {}, pivot: {}, tooltip: {headerFormat: ""}, showInLegend: !1
        }), b = {
            type: "gauge",
            pointClass: h(A, {
                setState: function (t) {
                    this.state = t
                }
            }),
            angular: !0,
            drawGraph: M,
            fixedBox: !0,
            forceDL: !0,
            trackerGroups: ["group", "dataLabelsGroup"],
            translate: function () {
                var t = this.yAxis, e = this.options, i = t.center;
                this.generatePoints(), o(this.points, function (n) {
                    var o = a(e.dial, n.dial), r = d(l(o.radius, 80)) * i[2] / 200,
                        s = d(l(o.baseLength, 70)) * r / 100, u = d(l(o.rearLength, 10)) * r / 100,
                        c = o.baseWidth || 3, h = o.topWidth || 1, p = e.overshoot,
                        f = t.startAngleRad + t.translate(n.y, null, null, null, !0);
                    p && "number" == typeof p ? (p = p / 180 * Math.PI, f = Math.max(t.startAngleRad - p, Math.min(t.endAngleRad + p, f))) : e.wrap === !1 && (f = Math.max(t.startAngleRad, Math.min(t.endAngleRad, f))), f = 180 * f / Math.PI, n.shapeType = "path", n.shapeArgs = {
                        d: o.path || ["M", -u, -c / 2, "L", s, -c / 2, r, -h / 2, r, h / 2, s, c / 2, -u, c / 2, "z"],
                        translateX: i[0],
                        translateY: i[1],
                        rotation: f
                    }, n.plotX = i[0], n.plotY = i[1]
                })
            },
            drawPoints: function () {
                var t = this, e = t.yAxis.center, i = t.pivot, n = t.options, r = n.pivot, s = t.chart.renderer;
                o(t.points, function (e) {
                    var i = e.graphic, o = e.shapeArgs, r = o.d, l = a(n.dial, e.dial);
                    i ? (i.animate(o), o.d = r) : e.graphic = s[e.shapeType](o).attr({
                        stroke: l.borderColor || "none",
                        "stroke-width": l.borderWidth || 0,
                        fill: l.backgroundColor || "black",
                        rotation: o.rotation,
                        zIndex: 1
                    }).add(t.group)
                }), i ? i.animate({
                    translateX: e[0],
                    translateY: e[1]
                }) : t.pivot = s.circle(0, 0, l(r.radius, 5)).attr({
                    "stroke-width": r.borderWidth || 0,
                    stroke: r.borderColor || "silver",
                    fill: r.backgroundColor || "black",
                    zIndex: 2
                }).translate(e[0], e[1]).add(t.group)
            },
            animate: function (t) {
                var e = this;
                t || (o(e.points, function (t) {
                    var i = t.graphic;
                    i && (i.attr({rotation: 180 * e.yAxis.startAngleRad / Math.PI}), i.animate({rotation: t.shapeArgs.rotation}, e.options.animation))
                }), e.animate = null)
            },
            render: function () {
                this.group = this.plotGroup("group", "series", this.visible ? "visible" : "hidden", this.options.zIndex, this.chart.seriesGroup), v.prototype.render.call(this), this.group.clip(this.chart.clipRect)
            },
            setData: function (t, e) {
                v.prototype.setData.call(this, t, !1), this.processData(), this.generatePoints(), l(e, !0) && this.chart.redraw()
            },
            drawTracker: b && b.drawTrackerPoint
        }, c.gauge = h(c.line, b), u.boxplot = a(u.column, {
            fillColor: "#FFFFFF",
            lineWidth: 1,
            medianWidth: 2,
            states: {hover: {brightness: -.3}},
            threshold: null,
            tooltip: {pointFormat: '<span style="color:{point.color}">●</span> <b> {series.name}</b><br/>Maximum: {point.high}<br/>Upper quartile: {point.q3}<br/>Median: {point.median}<br/>Lower quartile: {point.q1}<br/>Minimum: {point.low}<br/>'},
            whiskerLength: "50%",
            whiskerWidth: 2
        }), c.boxplot = h(c.column, {
            type: "boxplot",
            pointArrayMap: ["low", "q1", "median", "q3", "high"],
            toYData: function (t) {
                return [t.low, t.q1, t.median, t.q3, t.high]
            },
            pointValKey: "high",
            pointAttrToOptions: {fill: "fillColor", stroke: "color", "stroke-width": "lineWidth"},
            drawDataLabels: M,
            translate: function () {
                var t = this.yAxis, e = this.pointArrayMap;
                c.column.prototype.translate.apply(this), o(this.points, function (i) {
                    o(e, function (e) {
                        null !== i[e] && (i[e + "Plot"] = t.translate(i[e], 0, 1, 0, 1))
                    })
                })
            },
            drawPoints: function () {
                var t, e, i, n, r, a, s, d, u, c, h, p, f, g, m, A, y, x, b, v, w, C, k, M = this, P = M.options,
                    T = M.chart.renderer, I = M.doQuartiles !== !1, R = M.options.whiskerLength;
                o(M.points, function (o) {
                    u = o.graphic, w = o.shapeArgs, h = {}, g = {}, A = {}, C = o.color || M.color, void 0 !== o.plotY && (t = o.pointAttr[o.selected ? "selected" : ""], y = w.width, x = E(w.x), b = x + y, v = S(y / 2), e = E(I ? o.q1Plot : o.lowPlot), i = E(I ? o.q3Plot : o.lowPlot), n = E(o.highPlot), r = E(o.lowPlot), h.stroke = o.stemColor || P.stemColor || C, h["stroke-width"] = l(o.stemWidth, P.stemWidth, P.lineWidth), h.dashstyle = o.stemDashStyle || P.stemDashStyle, g.stroke = o.whiskerColor || P.whiskerColor || C, g["stroke-width"] = l(o.whiskerWidth, P.whiskerWidth, P.lineWidth), A.stroke = o.medianColor || P.medianColor || C, A["stroke-width"] = l(o.medianWidth, P.medianWidth, P.lineWidth), s = h["stroke-width"] % 2 / 2, d = x + v + s, c = ["M", d, i, "L", d, n, "M", d, e, "L", d, r], I && (s = t["stroke-width"] % 2 / 2, d = E(d) + s, e = E(e) + s, i = E(i) + s, x += s, b += s, p = ["M", x, i, "L", x, e, "L", b, e, "L", b, i, "L", x, i, "z"]), R && (s = g["stroke-width"] % 2 / 2, n += s, r += s, k = /%jQuery/.test(R) ? v * parseFloat(R) / 100 : R / 2, f = ["M", d - k, n, "L", d + k, n, "M", d - k, r, "L", d + k, r]), s = A["stroke-width"] % 2 / 2, a = S(o.medianPlot) + s, m = ["M", x, a, "L", b, a], u ? (o.stem.animate({d: c}), R && o.whiskers.animate({d: f}), I && o.box.animate({d: p}), o.medianShape.animate({d: m})) : (o.graphic = u = T.g().add(M.group), o.stem = T.path(c).attr(h).add(u), R && (o.whiskers = T.path(f).attr(g).add(u)), I && (o.box = T.path(p).attr(t).add(u)), o.medianShape = T.path(m).attr(A).add(u)))
                })
            },
            setStackedPoints: M
        }), u.errorbar = a(u.boxplot, {
            color: "#000000",
            grouping: !1,
            linkedTo: ":previous",
            tooltip: {pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'},
            whiskerWidth: null
        }), c.errorbar = h(c.boxplot, {
            type: "errorbar",
            pointArrayMap: ["low", "high"],
            toYData: function (t) {
                return [t.low, t.high]
            },
            pointValKey: "high",
            doQuartiles: !1,
            drawDataLabels: c.arearange ? c.arearange.prototype.drawDataLabels : M,
            getColumnMetrics: function () {
                return this.linkedParent && this.linkedParent.columnMetrics || c.column.prototype.getColumnMetrics.call(this)
            }
        }), u.waterfall = a(u.column, {
            lineWidth: 1,
            lineColor: "#333",
            dashStyle: "dot",
            borderColor: "#333",
            dataLabels: {inside: !0},
            states: {hover: {lineWidthPlus: 0}}
        }), c.waterfall = h(c.column, {
            type: "waterfall",
            upColorProp: "fill",
            pointValKey: "y",
            translate: function () {
                var t, e, i, n, o, r, a, s, d, u = this.options, h = this.yAxis, p = l(u.minPointLength, 5),
                    f = u.threshold, g = u.stacking;
                for (c.column.prototype.translate.apply(this), this.minPointLengthOffset = 0, a = s = f, e = this.points, t = 0, u = e.length; t < u; t++) i = e[t], r = this.processedYData[t], n = i.shapeArgs, d = (o = g && h.stacks[(this.negStacks && r < f ? "-" : "") + this.stackKey]) ? o[i.x].points[this.index + "," + t] : [0, r], i.isSum ? i.y = r : i.isIntermediateSum && (i.y = r - s), o = C(a, a + i.y) + d[0], n.y = h.translate(o, 0, 1), i.isSum ? (n.y = h.translate(d[1], 0, 1), n.height = Math.min(h.translate(d[0], 0, 1), h.len) - n.y + this.minPointLengthOffset) : i.isIntermediateSum ? (n.y = h.translate(d[1], 0, 1), n.height = Math.min(h.translate(s, 0, 1), h.len) - n.y + this.minPointLengthOffset, s = d[1]) : (0 !== a && (n.height = r > 0 ? h.translate(a, 0, 1) - n.y : h.translate(a, 0, 1) - h.translate(a - r, 0, 1)), a += r), n.height < 0 && (n.y += n.height, n.height *= -1), i.plotY = n.y = S(n.y) - this.borderWidth % 2 / 2, n.height = C(S(n.height), .001), i.yBottom = n.y + n.height, n.height <= p && (n.height = p, this.minPointLengthOffset += p), n.y -= this.minPointLengthOffset, n = i.plotY + (i.negative ? n.height : 0) - this.minPointLengthOffset, this.chart.inverted ? i.tooltipPos[0] = h.len - n : i.tooltipPos[1] = n
            },
            processData: function (t) {
                var e, i, n, o, r, a, s, l = this.yData, d = this.options.data, u = l.length;
                for (n = i = o = r = this.options.threshold || 0, s = 0; s < u; s++) a = l[s], e = d && d[s] ? d[s] : {}, "sum" === a || e.isSum ? l[s] = n : "intermediateSum" === a || e.isIntermediateSum ? l[s] = i : (n += a, i += a), o = Math.min(n, o), r = Math.max(n, r);
                v.prototype.processData.call(this, t), this.dataMin = o, this.dataMax = r
            },
            toYData: function (t) {
                return t.isSum ? 0 === t.x ? null : "sum" : t.isIntermediateSum ? 0 === t.x ? null : "intermediateSum" : t.y
            },
            getAttribs: function () {
                c.column.prototype.getAttribs.apply(this, arguments);
                var e = this, i = e.options, n = i.states, r = i.upColor || e.color, i = t.Color(r).brighten(.1).get(),
                    s = a(e.pointAttr), l = e.upColorProp;
                s[""][l] = r, s.hover[l] = n.hover.upColor || i, s.select[l] = n.select.upColor || r, o(e.points, function (t) {
                    t.options.color || (t.y > 0 ? (t.pointAttr = s, t.color = r) : t.pointAttr = e.pointAttr)
                })
            },
            getGraphPath: function () {
                var t, e, i, n = this.data, o = n.length, r = S(this.options.lineWidth + this.borderWidth) % 2 / 2,
                    a = [];
                for (i = 1; i < o; i++) e = n[i].shapeArgs, t = n[i - 1].shapeArgs, e = ["M", t.x + t.width, t.y + r, "L", e.x, t.y + r], n[i - 1].y < 0 && (e[2] += t.height, e[5] += t.height), a = a.concat(e);
                return a
            },
            getExtremes: M,
            drawGraph: v.prototype.drawGraph
        }), u.polygon = a(u.scatter, {marker: {enabled: !1}}), c.polygon = h(c.scatter, {
            type: "polygon",
            fillGraph: !0,
            getSegmentPath: function (t) {
                return v.prototype.getSegmentPath.call(this, t).concat("z")
            },
            drawGraph: v.prototype.drawGraph,
            drawLegendSymbol: t.LegendSymbolMixin.drawRectangle
        }), u.bubble = a(u.scatter, {
            dataLabels: {
                formatter: function () {
                    return this.point.z
                }, inside: !0, verticalAlign: "middle"
            },
            marker: {lineColor: null, lineWidth: 1},
            minSize: 8,
            maxSize: "20%",
            softThreshold: !1,
            states: {hover: {halo: {size: 5}}},
            tooltip: {pointFormat: "({point.x}, {point.y}), Size: {point.z}"},
            turboThreshold: 0,
            zThreshold: 0,
            zoneAxis: "z"
        }), b = h(A, {
            haloPath: function () {
                return A.prototype.haloPath.call(this, this.shapeArgs.r + this.series.options.states.hover.halo.size)
            }, ttBelow: !1
        }), c.bubble = h(c.scatter, {
            type: "bubble",
            pointClass: b,
            pointArrayMap: ["y", "z"],
            parallelArrays: ["x", "y", "z"],
            trackerGroups: ["group", "dataLabelsGroup"],
            bubblePadding: !0,
            zoneAxis: "z",
            pointAttrToOptions: {stroke: "lineColor", "stroke-width": "lineWidth", fill: "fillColor"},
            applyOpacity: function (t) {
                var e = this.options.marker, i = l(e.fillOpacity, .5), t = t || e.fillColor || this.color;
                return 1 !== i && (t = k(t).setOpacity(i).get("rgba")), t
            },
            convertAttribs: function () {
                var t = v.prototype.convertAttribs.apply(this, arguments);
                return t.fill = this.applyOpacity(t.fill), t
            },
            getRadii: function (t, e, i, n) {
                var o, r, a, s = this.zData, l = [], d = this.options, u = "width" !== d.sizeBy, c = d.zThreshold,
                    h = e - t;
                for (r = 0, o = s.length; r < o; r++) a = s[r], d.sizeByAbsoluteValue && null !== a && (a = Math.abs(a - c), e = Math.max(e - c, Math.abs(t - c)), t = 0), null === a ? a = null : a < t ? a = i / 2 - 1 : (a = h > 0 ? (a - t) / h : .5, u && a >= 0 && (a = Math.sqrt(a)), a = w.ceil(i + a * (n - i)) / 2), l.push(a);
                this.radii = l
            },
            animate: function (t) {
                var e = this.options.animation;
                t || (o(this.points, function (t) {
                    var i = t.graphic, t = t.shapeArgs;
                    i && t && (i.attr("r", 1), i.animate({r: t.r}, e))
                }), this.animate = null)
            },
            translate: function () {
                var t, e, i, n = this.data, o = this.radii;
                for (c.scatter.prototype.translate.call(this), t = n.length; t--;) e = n[t], i = o ? o[t] : 0, "number" == typeof i && i >= this.minPxSize / 2 ? (e.shapeType = "circle", e.shapeArgs = {
                    x: e.plotX,
                    y: e.plotY,
                    r: i
                }, e.dlBox = {
                    x: e.plotX - i,
                    y: e.plotY - i,
                    width: 2 * i,
                    height: 2 * i
                }) : e.shapeArgs = e.plotY = e.dlBox = void 0
            },
            drawLegendSymbol: function (t, e) {
                var i = this.chart.renderer, n = i.fontMetrics(t.itemStyle.fontSize).f / 2;
                e.legendSymbol = i.circle(n, t.baseline - n, n).attr({zIndex: 3}).add(e.legendGroup), e.legendSymbol.isMarker = !0
            },
            drawPoints: c.column.prototype.drawPoints,
            alignDataLabel: c.column.prototype.alignDataLabel,
            buildKDTree: M,
            applyZones: M
        }), g.prototype.beforePadding = function () {
            var t = this, e = this.len, r = this.chart, a = 0, s = e, u = this.isXAxis, c = u ? "xData" : "yData",
                h = this.min, p = {}, f = w.min(r.plotWidth, r.plotHeight), g = Number.MAX_VALUE, m = -Number.MAX_VALUE,
                A = this.max - h, y = e / A, x = [];
            o(this.series, function (e) {
                var a = e.options;
                !e.bubblePadding || !e.visible && r.options.chart.ignoreHiddenSeries || (t.allowZoomOutside = !0, x.push(e), u && (o(["minSize", "maxSize"], function (t) {
                    var e = a[t], i = /%jQuery/.test(e), e = d(e);
                    p[t] = i ? f * e / 100 : e
                }), e.minPxSize = p.minSize, e.maxPxSize = p.maxSize, e = e.zData, e.length && (g = l(a.zMin, w.min(g, w.max(i(e), a.displayNegative === !1 ? a.zThreshold : -Number.MAX_VALUE))), m = l(a.zMax, w.max(m, n(e))))))
            }), o(x, function (t) {
                var e, i = t[c], n = i.length;
                if (u && t.getRadii(g, m, t.minPxSize, t.maxPxSize), A > 0) for (; n--;) "number" == typeof i[n] && (e = t.radii[n], a = Math.min((i[n] - h) * y - e, a), s = Math.max((i[n] - h) * y + e, s))
            }), x.length && A > 0 && !this.isLog && (s -= e, y *= (e + a - s) / e, o([["min", "userMin", a], ["max", "userMax", s]], function (e) {
                void 0 === l(t.options[e[0]], t[e[1]]) && (t[e[0]] += e[2] / y)
            }))
        }, function () {
            function t(t, e) {
                var i = this.chart, n = this.options.animation, o = this.group, r = this.markerGroup,
                    a = this.xAxis.center, s = i.plotLeft, l = i.plotTop;
                i.polar ? i.renderer.isSVG && (n === !0 && (n = {}), e ? (i = {
                    translateX: a[0] + s,
                    translateY: a[1] + l,
                    scaleX: .001,
                    scaleY: .001
                }, o.attr(i), r && r.attr(i)) : (i = {
                    translateX: s,
                    translateY: l,
                    scaleX: 1,
                    scaleY: 1
                }, o.animate(i, n), r && r.animate(i, n), this.animate = null)) : t.call(this, e)
            }

            var e, i = v.prototype, n = y.prototype;
            i.searchPointByAngle = function (t) {
                var e = this.chart, i = this.xAxis.pane.center;
                return this.searchKDTree({clientX: 180 + Math.atan2(t.chartX - i[0] - e.plotLeft, t.chartY - i[1] - e.plotTop) * (-180 / Math.PI)})
            }, f(i, "buildKDTree", function (t) {
                this.chart.polar && (this.kdByAngle ? this.searchPoint = this.searchPointByAngle : this.kdDimensions = 2), t.apply(this)
            }), i.toXY = function (t) {
                var e, i = this.chart, n = t.plotX;
                e = t.plotY, t.rectPlotX = n, t.rectPlotY = e, e = this.xAxis.postTranslate(t.plotX, this.yAxis.len - e), t.plotX = t.polarPlotX = e.x - i.plotLeft, t.plotY = t.polarPlotY = e.y - i.plotTop, this.kdByAngle ? (i = (n / Math.PI * 180 + this.xAxis.pane.options.startAngle) % 360, i < 0 && (i += 360), t.clientX = i) : t.clientX = t.plotX
            }, c.spline && f(c.spline.prototype, "getPointSpline", function (t, e, i, n) {
                var o, r, a, s, l, d, u;
                return this.chart.polar ? (o = i.plotX, r = i.plotY, t = e[n - 1], a = e[n + 1], this.connectEnds && (t || (t = e[e.length - 2]), a || (a = e[1])), t && a && (s = t.plotX, l = t.plotY, e = a.plotX, d = a.plotY, s = (1.5 * o + s) / 2.5, l = (1.5 * r + l) / 2.5, a = (1.5 * o + e) / 2.5, u = (1.5 * r + d) / 2.5, e = Math.sqrt(Math.pow(s - o, 2) + Math.pow(l - r, 2)), d = Math.sqrt(Math.pow(a - o, 2) + Math.pow(u - r, 2)), s = Math.atan2(l - r, s - o),
                    l = Math.atan2(u - r, a - o), u = Math.PI / 2 + (s + l) / 2, Math.abs(s - u) > Math.PI / 2 && (u -= Math.PI), s = o + Math.cos(u) * e, l = r + Math.sin(u) * e, a = o + Math.cos(Math.PI + u) * d, u = r + Math.sin(Math.PI + u) * d, i.rightContX = a, i.rightContY = u), n ? (i = ["C", t.rightContX || t.plotX, t.rightContY || t.plotY, s || o, l || r, o, r], t.rightContX = t.rightContY = null) : i = ["M", o, r]) : i = t.call(this, e, i, n), i
            }), f(i, "translate", function (t) {
                var e = this.chart;
                if (t.call(this), e.polar && (this.kdByAngle = e.tooltip && e.tooltip.shared, !this.preventPostTranslate)) for (t = this.points, e = t.length; e--;) this.toXY(t[e])
            }), f(i, "getGraphPath", function (t, e) {
                var i = this;
                return this.chart.polar && (e = e || this.points, this.options.connectEnds !== !1 && null !== e[0].y && (this.connectEnds = !0, e.splice(e.length, 0, e[0])), o(e, function (t) {
                    void 0 === t.polarPlotY && i.toXY(t)
                })), t.apply(this, [].slice.call(arguments, 1))
            }), f(i, "animate", t), c.column && (e = c.column.prototype, f(e, "animate", t), f(e, "translate", function (t) {
                var e, i, n = this.xAxis, o = this.yAxis.len, r = n.center, a = n.startAngleRad,
                    s = this.chart.renderer;
                if (this.preventPostTranslate = !0, t.call(this), n.isRadial) for (n = this.points, i = n.length; i--;) e = n[i], t = e.barX + a, e.shapeType = "path", e.shapeArgs = {
                    d: s.symbols.arc(r[0], r[1], o - e.plotY, null, {
                        start: t,
                        end: t + e.pointWidth,
                        innerR: o - l(e.yBottom, o)
                    })
                }, this.toXY(e), e.tooltipPos = [e.plotX, e.plotY], e.ttBelow = e.plotY > r[1]
            }), f(e, "alignDataLabel", function (t, e, n, o, r, a) {
                this.chart.polar ? (t = e.rectPlotX / Math.PI * 180, null === o.align && (o.align = t > 20 && t < 160 ? "left" : t > 200 && t < 340 ? "right" : "center"), null === o.verticalAlign && (o.verticalAlign = t < 45 || t > 315 ? "bottom" : t > 135 && t < 225 ? "top" : "middle"), i.alignDataLabel.call(this, e, n, o, r, a)) : t.call(this, e, n, o, r, a)
            })), f(n, "getCoordinates", function (t, e) {
                var i = this.chart, n = {xAxis: [], yAxis: []};
                return i.polar ? o(i.axes, function (t) {
                    var o = t.isXAxis, r = t.center, a = e.chartX - r[0] - i.plotLeft, r = e.chartY - r[1] - i.plotTop;
                    n[o ? "xAxis" : "yAxis"].push({
                        axis: t,
                        value: t.translate(o ? Math.PI - Math.atan2(a, r) : Math.sqrt(Math.pow(a, 2) + Math.pow(r, 2)), !0)
                    })
                }) : n = t.call(this, e), n
            })
        }()
    })
}, function (t, e) {
    !function (e) {
        "object" == typeof t && t.exports ? t.exports = e : e(Highcharts)
    }(function (t) {
        function e() {
            return !!this.points.length
        }

        function i() {
            this.hasData() ? this.hideNoData() : this.showNoData()
        }

        var n = t.seriesTypes, o = t.Chart.prototype, r = t.getOptions(), a = t.extend, s = t.each;
        a(r.lang, {noData: "No data to display"}), r.noData = {
            position: {
                x: 0,
                y: 0,
                align: "center",
                verticalAlign: "middle"
            }, attr: {}, style: {fontWeight: "bold", fontSize: "12px", color: "#60606a"}
        }, s(["pie", "gauge", "waterfall", "bubble"], function (t) {
            n[t] && (n[t].prototype.hasData = e)
        }), t.Series.prototype.hasData = function () {
            return this.visible && void 0 !== this.dataMax && void 0 !== this.dataMin
        }, o.showNoData = function (t) {
            var e = this.options, t = t || e.lang.noData, e = e.noData;
            this.noDataLabel || (this.noDataLabel = this.renderer.label(t, 0, 0, null, null, null, e.useHTML, null, "no-data").attr(e.attr).css(e.style).add(), this.noDataLabel.align(a(this.noDataLabel.getBBox(), e.position), !1, "plotBox"))
        }, o.hideNoData = function () {
            this.noDataLabel && (this.noDataLabel = this.noDataLabel.destroy())
        }, o.hasData = function () {
            for (var t = this.series, e = t.length; e--;) if (t[e].hasData() && !t[e].options.isInternal) return !0;
            return !1
        }, o.callbacks.push(function (e) {
            t.addEvent(e, "load", i), t.addEvent(e, "redraw", i)
        })
    })
}, function (t, e) {
    !function (e) {
        "object" == typeof t && t.exports ? t.exports = e : e(Highcharts)
    }(function (t) {
        var e, i = t.getOptions().plotOptions, n = t.pInt, o = t.pick, r = t.each;
        i.solidgauge = t.merge(i.gauge, {colorByPoint: !0}), e = {
            initDataClasses: function (e) {
                var i, n = this, o = this.chart, a = 0, s = this.options;
                this.dataClasses = i = [], r(e.dataClasses, function (r, l) {
                    var d, r = t.merge(r);
                    i.push(r), r.color || ("category" === s.dataClassColor ? (d = o.options.colors, r.color = d[a++], a === d.length && (a = 0)) : r.color = n.tweenColors(t.Color(s.minColor), t.Color(s.maxColor), l / (e.dataClasses.length - 1)))
                })
            }, initStops: function (e) {
                this.stops = e.stops || [[0, this.options.minColor], [1, this.options.maxColor]], r(this.stops, function (e) {
                    e.color = t.Color(e[1])
                })
            }, toColor: function (t, e) {
                var i, n, o, r, a = this.stops, s = this.dataClasses;
                if (s) {
                    for (r = s.length; r--;) if (o = s[r], n = o.from, a = o.to, (void 0 === n || t >= n) && (void 0 === a || t <= a)) {
                        i = o.color, e && (e.dataClass = r);
                        break
                    }
                } else {
                    for (this.isLog && (t = this.val2lin(t)), i = 1 - (this.max - t) / (this.max - this.min), r = a.length; r-- && !(i > a[r][0]);) ;
                    n = a[r] || a[r + 1], a = a[r + 1] || n, i = 1 - (a[0] - i) / (a[0] - n[0] || 1), i = this.tweenColors(n.color, a.color, i)
                }
                return i
            }, tweenColors: function (t, e, i) {
                var n;
                return e.rgba.length && t.rgba.length ? (t = t.rgba, e = e.rgba, n = 1 !== e[3] || 1 !== t[3], t = (n ? "rgba(" : "rgb(") + Math.round(e[0] + (t[0] - e[0]) * (1 - i)) + "," + Math.round(e[1] + (t[1] - e[1]) * (1 - i)) + "," + Math.round(e[2] + (t[2] - e[2]) * (1 - i)) + (n ? "," + (e[3] + (t[3] - e[3]) * (1 - i)) : "") + ")") : t = e.input || "none", t
            }
        }, r(["fill", "stroke"], function (i) {
            t.Fx.prototype[i + "Setter"] = function () {
                this.elem.attr(i, e.tweenColors(t.Color(this.start), t.Color(this.end), this.pos))
            }
        }), t.seriesTypes.solidgauge = t.extendClass(t.seriesTypes.gauge, {
            type: "solidgauge",
            pointAttrToOptions: {},
            bindAxes: function () {
                var i;
                t.seriesTypes.gauge.prototype.bindAxes.call(this), i = this.yAxis, t.extend(i, e), i.options.dataClasses && i.initDataClasses(i.options), i.initStops(i.options)
            },
            drawPoints: function () {
                var e = this, i = e.yAxis, r = i.center, a = e.options, s = e.chart.renderer, l = a.overshoot,
                    d = l && "number" == typeof l ? l / 180 * Math.PI : 0;
                t.each(e.points, function (t) {
                    var l = t.graphic, u = i.startAngleRad + i.translate(t.y, null, null, null, !0),
                        c = n(o(t.options.radius, a.radius, 100)) * r[2] / 200,
                        h = n(o(t.options.innerRadius, a.innerRadius, 60)) * r[2] / 200, p = i.toColor(t.y, t),
                        f = Math.min(i.startAngleRad, i.endAngleRad), g = Math.max(i.startAngleRad, i.endAngleRad);
                    "none" === p && (p = t.color || e.color || "none"), "none" !== p && (t.color = p), u = Math.max(f - d, Math.min(g + d, u)), a.wrap === !1 && (u = Math.max(f, Math.min(g, u))), f = Math.min(u, i.startAngleRad), u = Math.max(u, i.startAngleRad), u - f > 2 * Math.PI && (u = f + 2 * Math.PI), t.shapeArgs = h = {
                        x: r[0],
                        y: r[1],
                        r: c,
                        innerR: h,
                        start: f,
                        end: u,
                        fill: p
                    }, t.startR = c, l ? (t = h.d, l.animate(h), t && (h.d = t)) : (l = {
                        stroke: a.borderColor || "none",
                        "stroke-width": a.borderWidth || 0,
                        fill: p,
                        "sweep-flag": 0
                    }, "square" !== a.linecap && (l["stroke-linecap"] = l["stroke-linejoin"] = "round"), t.graphic = s.arc(h).attr(l).add(e.group))
                })
            },
            animate: function (e) {
                e || (this.startAngleRad = this.yAxis.startAngleRad, t.seriesTypes.pie.prototype.animate.call(this, e))
            }
        })
    })
}, function (t, e) {
    !function (e, i) {
        "object" == typeof t && t.exports ? t.exports = e.document ? i(e) : i : e.Highcharts = i(e)
    }("undefined" != typeof window ? window : this, function (t) {
        function e(e, i) {
            var n = "Highcharts error #" + e + ": www.highcharts.com/errors/" + e;
            if (i) throw Error(n);
            t.console && console.log(n)
        }

        function i(t, e, i) {
            this.options = e, this.elem = t, this.prop = i
        }

        function n() {
            var t, e, i = arguments, n = {}, o = function (t, e) {
                var i, n;
                "object" != typeof t && (t = {});
                for (n in e) e.hasOwnProperty(n) && (i = e[n], t[n] = i && "object" == typeof i && "[object Array]" !== Object.prototype.toString.call(i) && "renderTo" !== n && "number" != typeof i.nodeType ? o(t[n] || {}, i) : e[n]);
                return t
            };
            for (i[0] === !0 && (n = i[1], i = Array.prototype.slice.call(i, 2)), e = i.length, t = 0; t < e; t++) n = o(n, i[t]);
            return n
        }

        function o(t, e) {
            return parseInt(t, e || 10)
        }

        function r(t) {
            return "string" == typeof t
        }

        function a(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }

        function s(t, e) {
            for (var i = t.length; i--;) if (t[i] === e) {
                t.splice(i, 1);
                break
            }
        }

        function l(t) {
            return t !== D && null !== t
        }

        function d(t, e, i) {
            var n, o;
            if (r(e)) l(i) ? t.setAttribute(e, i) : t && t.getAttribute && (o = t.getAttribute(e)); else if (l(e) && Jt(e)) for (n in e) t.setAttribute(n, e[n]);
            return o
        }

        function u(t) {
            return a(t) ? t : [t]
        }

        function c(t, e, i) {
            return e ? setTimeout(t, e, i) : void t.call(0, i)
        }

        function h(t, e) {
            yt && !Et && e && e.opacity !== D && (e.filter = "alpha(opacity=" + 100 * e.opacity + ")"), Kt(t.style, e)
        }

        function p(t, e, i, n, o) {
            return t = ot.createElement(t), e && Kt(t, e), o && h(t, {
                padding: 0,
                border: "none",
                margin: 0
            }), i && h(t, i), n && n.appendChild(t), t
        }

        function f(t, e) {
            var i = function () {
            };
            return i.prototype = new t, Kt(i.prototype, e), i
        }

        function g(t, e, i) {
            return Array((e || 2) + 1 - String(t).length).join(i || 0) + t
        }

        function m(t) {
            return 6e4 * (_ && _(t) || G || 0)
        }

        function A(t, e) {
            for (var i, n, o, r, a, s = "{", l = !1, d = []; (s = t.indexOf(s)) !== -1;) {
                if (i = t.slice(0, s), l) {
                    for (n = i.split(":"), o = n.shift().split("."), a = o.length, i = e, r = 0; r < a; r++) i = i[o[r]];
                    n.length && (n = n.join(":"), o = /\.([0-9])/, r = F.lang, a = void 0, /fjQuery/.test(n) ? (a = (a = n.match(o)) ? a[1] : -1, null !== i && (i = nt.numberFormat(i, a, r.decimalPoint, n.indexOf(",") > -1 ? r.thousandsSep : ""))) : i = N(n, i))
                }
                d.push(i), t = t.slice(s + 1), s = (l = !l) ? "}" : "{"
            }
            return d.push(t), d.join("")
        }

        function y(t) {
            return rt.pow(10, st(rt.log(t) / rt.LN10))
        }

        function x(t, e, i, n, o) {
            var r, a = t, i = jQueryt(i, 1);
            for (r = t / i, e || (e = [1, 2, 2.5, 5, 10], n === !1 && (1 === i ? e = [1, 2, 5, 10] : i <= .1 && (e = [1 / i]))), n = 0; n < e.length && (a = e[n], !(o && a * i >= t || !o && r <= (e[n] + (e[n + 1] || e[n])) / 2)); n++) ;
            return a *= i
        }

        function b(t, e) {
            var i, n, o = t.length;
            for (n = 0; n < o; n++) t[n].safeI = n;
            for (t.sort(function (t, n) {
                return i = e(t, n), 0 === i ? t.safeI - n.safeI : i
            }), n = 0; n < o; n++) delete t[n].safeI
        }

        function v(t) {
            for (var e = t.length, i = t[0]; e--;) t[e] < i && (i = t[e]);
            return i
        }

        function w(t) {
            for (var e = t.length, i = t[0]; e--;) t[e] > i && (i = t[e]);
            return i
        }

        function S(t, e) {
            for (var i in t) t[i] && t[i] !== e && t[i].destroy && t[i].destroy(), delete t[i]
        }

        function E(t) {
            U || (U = p(Lt)), t && U.appendChild(t), U.innerHTML = ""
        }

        function C(t, e) {
            return parseFloat(t.toPrecision(e || 14))
        }

        function k(t, e) {
            e.renderer.globalAnimation = jQueryt(t, e.animation)
        }

        function M(t) {
            return Jt(t) ? n(t) : {duration: t ? 500 : 0}
        }

        function P() {
            var e = F.global, i = e.useUTC, n = i ? "getUTC" : "get", o = i ? "setUTC" : "set";
            z = e.Date || t.Date, G = i && e.timezoneOffset, _ = i && e.getTimezoneOffset, j = function (t, e, n, o, r, a) {
                var s;
                return i ? (s = z.UTC.apply(0, arguments), s += m(s)) : s = new z(t, e, jQueryt(n, 1), jQueryt(o, 0), jQueryt(r, 0), jQueryt(a, 0)).getTime(), s
            }, H = n + "Minutes", W = n + "Hours", Y = n + "Day", X = n + "Date", q = n + "Month", Q = n + "FullYear", K = o + "Milliseconds", J = o + "Seconds", Z = o + "Minutes", jQuery = o + "Hours", tt = o + "Date", et = o + "Month", it = o + "FullYear"
        }

        function T(t) {
            return this instanceof T ? void this.init(t) : new T(t)
        }

        function I() {
        }

        function R(t, e, i, n) {
            this.axis = t, this.pos = e, this.type = i || "", this.isNew = !0, !i && !n && this.addLabel()
        }

        function L(t, e, i, n, o) {
            var r = t.chart.inverted;
            this.axis = t, this.isNegative = i, this.options = e, this.x = n, this.total = null, this.points = {}, this.stack = o, this.rightCliff = this.leftCliff = 0, this.alignOptions = {
                align: e.align || (r ? i ? "left" : "right" : "center"),
                verticalAlign: e.verticalAlign || (r ? "middle" : i ? "bottom" : "top"),
                y: jQueryt(e.y, r ? 4 : i ? 14 : -6),
                x: jQueryt(e.x, r ? i ? -6 : 6 : 0)
            }, this.textAlign = e.textAlign || (r ? i ? "right" : "left" : "center")
        }

        var D, O, B, U, F, N, V, z, j, G, _, H, W, Y, X, q, Q, K, J, Z, jQuery, tt, et, it, nt, ot = t.document, rt = Math,
            at = rt.round, st = rt.floor, lt = rt.ceil, dt = rt.max, ut = rt.min, ct = rt.abs, ht = rt.cos, pt = rt.sin,
            ft = rt.PI, gt = 2 * ft / 360, mt = t.navigator && t.navigator.userAgent || "", At = t.opera,
            yt = /(msie|trident|edge)/i.test(mt) && !At, xt = ot && 8 === ot.documentMode,
            bt = !yt && /AppleWebKit/.test(mt), vt = /Firefox/.test(mt), wt = /(Mobile|Android|Windows Phone)/.test(mt),
            St = "http://www.w3.org/2000/svg",
            Et = ot && ot.createElementNS && !!ot.createElementNS(St, "svg").createSVGRect,
            Ct = vt && parseInt(mt.split("Firefox/")[1], 10) < 4,
            kt = ot && !Et && !yt && !!ot.createElement("canvas").getContext, Mt = {}, Pt = 0, Tt = function () {
            }, It = [], Rt = 0, Lt = "div", Dt = "M", Ot = "L", Bt = /^[0-9]+jQuery/,
            Ut = ["plotTop", "marginRight", "marginBottom", "plotLeft"], Ft = {};
        nt = t.Highcharts ? e(16, !0) : {win: t}, nt.seriesTypes = Ft;
        var Nt, Vt, zt, jt, Gt, _t, Ht, Wt, Yt, Xt, qt, Qt = [];
        i.prototype = {
            dSetter: function () {
                var t, e = this.paths[0], i = this.paths[1], n = [], o = this.now, r = e.length;
                if (1 === o) n = this.toD; else if (r === i.length && o < 1) for (; r--;) t = parseFloat(e[r]), n[r] = isNaN(t) ? e[r] : o * parseFloat(i[r] - t) + t; else n = i;
                this.elem.attr("d", n)
            }, update: function () {
                var t = this.elem, e = this.prop, i = this.now, n = this.options.step;
                this[e + "Setter"] ? this[e + "Setter"]() : t.attr ? t.element && t.attr(e, i) : t.style[e] = i + this.unit, n && n.call(t, i, this)
            }, run: function (t, e, i) {
                var n, o = this, r = function (t) {
                    return !r.stopped && o.step(t)
                };
                this.startTime = +new z, this.start = t, this.end = e, this.unit = i, this.now = this.start, this.pos = 0, r.elem = this.elem, r() && 1 === Qt.push(r) && (r.timerId = setInterval(function () {
                    for (n = 0; n < Qt.length; n++) Qt[n]() || Qt.splice(n--, 1);
                    Qt.length || clearInterval(r.timerId)
                }, 13))
            }, step: function (t) {
                var e, i = +new z, n = this.options;
                e = this.elem;
                var o, r = n.complete, a = n.duration, s = n.curAnim;
                if (e.attr && !e.element) e = !1; else if (t || i >= a + this.startTime) {
                    this.now = this.end, this.pos = 1, this.update(), t = s[this.prop] = !0;
                    for (o in s) s[o] !== !0 && (t = !1);
                    t && r && r.call(e), e = !1
                } else this.pos = n.easing((i - this.startTime) / a), this.now = this.start + (this.end - this.start) * this.pos, this.update(), e = !0;
                return e
            }, initPath: function (t, e, i) {
                function n(t) {
                    for (d = t.length; d--;) (t[d] === Dt || t[d] === Ot) && t.splice(d + 1, 0, t[d + 1], t[d + 2], t[d + 1], t[d + 2])
                }

                function o(t, e) {
                    for (; t.length < s;) {
                        t[0] = e[s - t.length];
                        var i = t.slice(0, f);
                        [].splice.apply(t, [0, 0].concat(i)), g && (i = t.slice(t.length - f), [].splice.apply(t, [t.length, 0].concat(i)), d--)
                    }
                    t[0] = "M"
                }

                function r(t, e) {
                    for (var i = (s - t.length) / f; i > 0 && i--;) l = t.slice().splice(t.length / m - f, f * m), l[0] = e[s - f - i * f], p && (l[f - 6] = l[f - 2], l[f - 5] = l[f - 1]), [].splice.apply(t, [t.length / m, 0].concat(l)), g && i--
                }

                var a, s, l, d, u, e = e || "", c = t.startX, h = t.endX, p = e.indexOf("C") > -1, f = p ? 7 : 3,
                    e = e.split(" "), i = i.slice(), g = t.isArea, m = g ? 2 : 1;
                if (p && (n(e), n(i)), c && h) {
                    for (d = 0; d < c.length; d++) {
                        if (c[d] === h[0]) {
                            a = d;
                            break
                        }
                        if (c[0] === h[h.length - c.length + d]) {
                            a = d, u = !0;
                            break
                        }
                    }
                    void 0 === a && (e = [])
                }
                return e.length && nt.isNumber(a) && (s = i.length + a * m * f, u ? (o(e, i), r(i, e)) : (o(i, e), r(e, i))), [e, i]
            }
        };
        var Kt = nt.extend = function (t, e) {
            var i;
            t || (t = {});
            for (i in e) t[i] = e[i];
            return t
        }, Jt = nt.isObject = function (t, e) {
            return t && "object" == typeof t && (!e || !a(t))
        }, Zt = nt.isNumber = function (t) {
            return "number" == typeof t && !isNaN(t)
        }, jQueryt = nt.pick = function () {
            var t, e, i = arguments, n = i.length;
            for (t = 0; t < n; t++) if (e = i[t], e !== D && null !== e) return e
        }, te = nt.wrap = function (t, e, i) {
            var n = t[e];
            t[e] = function () {
                var t = Array.prototype.slice.call(arguments);
                return t.unshift(n), i.apply(this, t)
            }
        };
        N = function (t, e, i) {
            if (!l(e) || isNaN(e)) return F.lang.invalidDate || "";
            var n, t = jQueryt(t, "%Y-%m-%d %H:%M:%S"), o = new z(e - m(e)), r = o[W](), a = o[Y](), s = o[X](), d = o[q](),
                u = o[Q](), c = F.lang, h = c.weekdays, p = c.shortWeekdays, o = Kt({
                    a: p ? p[a] : h[a].substr(0, 3),
                    A: h[a],
                    d: g(s),
                    e: g(s, 2, " "),
                    w: a,
                    b: c.shortMonths[d],
                    B: c.months[d],
                    m: g(d + 1),
                    y: u.toString().substr(2, 2),
                    Y: u,
                    H: g(r),
                    k: r,
                    I: g(r % 12 || 12),
                    l: r % 12 || 12,
                    M: g(o[H]()),
                    p: r < 12 ? "AM" : "PM",
                    P: r < 12 ? "am" : "pm",
                    S: g(o.getSeconds()),
                    L: g(at(e % 1e3), 3)
                }, nt.dateFormats);
            for (n in o) for (; t.indexOf("%" + n) !== -1;) t = t.replace("%" + n, "function" == typeof o[n] ? o[n](e) : o[n]);
            return i ? t.substr(0, 1).toUpperCase() + t.substr(1) : t
        }, V = {
            millisecond: 1,
            second: 1e3,
            minute: 6e4,
            hour: 36e5,
            day: 864e5,
            week: 6048e5,
            month: 24192e5,
            year: 314496e5
        }, nt.numberFormat = function (t, e, i, n) {
            var r, a, t = +t || 0, e = +e, s = F.lang, l = (t.toString().split(".")[1] || "").length, d = Math.abs(t);
            return e === -1 ? e = Math.min(l, 20) : Zt(e) || (e = 2), r = String(o(d.toFixed(e))), a = r.length > 3 ? r.length % 3 : 0, i = jQueryt(i, s.decimalPoint), n = jQueryt(n, s.thousandsSep), t = t < 0 ? "-" : "", t += a ? r.substr(0, a) + n : "", t += r.substr(a).replace(/(\d{3})(?=\d)/g, "jQuery1" + n), e && (n = Math.abs(d - r + Math.pow(10, -Math.max(e, l) - 1)), t += i + n.toFixed(e).slice(2)), t
        }, Math.easeInOutSine = function (t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        }, Nt = function (e, i) {
            var n;
            return "width" === i ? Math.min(e.offsetWidth, e.scrollWidth) - Nt(e, "padding-left") - Nt(e, "padding-right") : "height" === i ? Math.min(e.offsetHeight, e.scrollHeight) - Nt(e, "padding-top") - Nt(e, "padding-bottom") : (n = t.getComputedStyle(e, void 0)) && o(n.getPropertyValue(i))
        }, Vt = function (t, e) {
            return e.indexOf ? e.indexOf(t) : [].indexOf.call(e, t)
        }, jt = function (t, e) {
            return [].filter.call(t, e)
        }, _t = function (t, e) {
            for (var i = [], n = 0, o = t.length; n < o; n++) i[n] = e.call(t[n], t[n], n, t);
            return i
        }, Gt = function (e) {
            var i = ot.documentElement, e = e.getBoundingClientRect();
            return {
                top: e.top + (t.pageYOffset || i.scrollTop) - (i.clientTop || 0),
                left: e.left + (t.pageXOffset || i.scrollLeft) - (i.clientLeft || 0)
            }
        }, qt = function (t) {
            for (var e = Qt.length; e--;) Qt[e].elem === t && (Qt[e].stopped = !0)
        }, zt = function (t, e) {
            return Array.prototype.forEach.call(t, e)
        }, Ht = function (e, i, n) {
            function o(i) {
                i.target = i.srcElement || t, n.call(e, i)
            }

            var r = e.hcEvents = e.hcEvents || {};
            e.addEventListener ? e.addEventListener(i, n, !1) : e.attachEvent && (e.hcEventsIE || (e.hcEventsIE = {}), e.hcEventsIE[n.toString()] = o, e.attachEvent("on" + i, o)), r[i] || (r[i] = []), r[i].push(n)
        }, Wt = function (t, e, i) {
            function n(e, i) {
                t.removeEventListener ? t.removeEventListener(e, i, !1) : t.attachEvent && (i = t.hcEventsIE[i.toString()], t.detachEvent("on" + e, i))
            }

            function o() {
                var i, o, r;
                if (t.nodeName) for (r in e ? (i = {}, i[e] = !0) : i = s, i) if (s[r]) for (o = s[r].length; o--;) n(r, s[r][o])
            }

            var r, a, s = t.hcEvents;
            s && (e ? (r = s[e] || [], i ? (a = Vt(i, r), a > -1 && (r.splice(a, 1), s[e] = r), n(e, i)) : (o(), s[e] = [])) : (o(), t.hcEvents = {}))
        }, Yt = function (t, e, i, n) {
            var o;
            o = t.hcEvents;
            var r, a, i = i || {};
            if (ot.createEvent && (t.dispatchEvent || t.fireEvent)) o = ot.createEvent("Events"), o.initEvent(e, !0, !0), o.target = t, Kt(o, i), t.dispatchEvent ? t.dispatchEvent(o) : t.fireEvent(e, o); else if (o) for (o = o[e] || [], r = o.length, i.preventDefault || (i.preventDefault = function () {
                i.defaultPrevented = !0
            }), i.target = t, i.type || (i.type = e), e = 0; e < r; e++) (a = o[e]) && a.call(t, i) === !1 && i.preventDefault();
            n && !i.defaultPrevented && n(i)
        }, Xt = function (t, e, o) {
            var r, a, s, l, d = "";
            Jt(o) || (r = arguments, o = {
                duration: r[2],
                easing: r[3],
                complete: r[4]
            }), Zt(o.duration) || (o.duration = 400), o.easing = "function" == typeof o.easing ? o.easing : Math[o.easing] || Math.easeInOutSine, o.curAnim = n(e);
            for (l in e) s = new i(t, o, l), a = null, "d" === l ? (s.paths = s.initPath(t, t.d, e.d), s.toD = e.d, r = 0, a = 1) : t.attr ? r = t.attr(l) : (r = parseFloat(Nt(t, l)) || 0, "opacity" !== l && (d = "px")), a || (a = e[l]), a.match && a.match("px") && (a = a.replace(/px/g, "")), s.run(r, a, d)
        }, t.jQuery && (t.jQuery.fn.highcharts = function () {
            var t = [].slice.call(arguments);
            if (this[0]) return t[0] ? (new (nt[r(t[0]) ? t.shift() : "Chart"])(this[0], t[0], t[1]), this) : It[d(this[0], "data-highcharts-chart")]
        }), ot && !ot.defaultView && (Nt = function (t, e) {
            var i;
            return i = {
                width: "clientWidth",
                height: "clientHeight"
            }[e], t.style[e] ? o(t.style[e]) : ("opacity" === e && (e = "filter"), i ? (t.style.zoom = 1, Math.max(t[i] - 2 * Nt(t, "padding"), 0)) : (i = t.currentStyle[e.replace(/\-(\w)/g, function (t, e) {
                return e.toUpperCase()
            })], "filter" === e && (i = i.replace(/alpha\(opacity=([0-9]+)\)/, function (t, e) {
                return e / 100
            })), "" === i ? 1 : o(i)))
        }), Array.prototype.forEach || (zt = function (t, e) {
            for (var i = 0, n = t.length; i < n; i++) if (e.call(t[i], t[i], i, t) === !1) return i
        }), Array.prototype.indexOf || (Vt = function (t, e) {
            var i, n = 0;
            if (e) for (i = e.length; n < i; n++) if (e[n] === t) return n;
            return -1
        }), Array.prototype.filter || (jt = function (t, e) {
            for (var i = [], n = 0, o = t.length; n < o; n++) e(t[n], n) && i.push(t[n]);
            return i
        }), nt.Fx = i, nt.inArray = Vt, nt.each = zt, nt.grep = jt, nt.offset = Gt, nt.map = _t, nt.addEvent = Ht, nt.removeEvent = Wt, nt.fireEvent = Yt, nt.animate = Xt, nt.animObject = M, nt.stop = qt, F = {
            colors: "#7cb5ec,#434348,#90ed7d,#f7a35c,#8085e9,#f15c80,#e4d354,#2b908f,#f45b5b,#91e8e1".split(","),
            symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
            lang: {
                loading: "Loading...",
                months: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                shortMonths: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                decimalPoint: ".",
                numericSymbols: "k,M,G,T,P,E".split(","),
                resetZoom: "Reset zoom",
                resetZoomTitle: "Reset zoom level 1:1",
                thousandsSep: " "
            },
            global: {
                useUTC: !0,
                canvasToolsURL: "http://code.highcharts.com/modules/canvas-tools.js",
                VMLRadialGradientURL: "http://code.highcharts.com/4.2.6/gfx/vml-radial-gradient.png"
            },
            chart: {
                borderColor: "#4572A7",
                borderRadius: 0,
                defaultSeriesType: "line",
                ignoreHiddenSeries: !0,
                spacing: [10, 10, 15, 10],
                backgroundColor: "#FFFFFF",
                plotBorderColor: "#C0C0C0",
                resetZoomButton: {theme: {zIndex: 20}, position: {align: "right", x: -10, y: 10}},
                width: null,
                height: null
            },
            title: {
                text: "Chart title",
                align: "center",
                margin: 15,
                style: {color: "#333333", fontSize: "18px"},
                widthAdjust: -44
            },
            subtitle: {text: "", align: "center", style: {color: "#555555"}, widthAdjust: -44},
            plotOptions: {
                line: {
                    allowPointSelect: !1,
                    showCheckbox: !1,
                    animation: {duration: 1e3},
                    events: {},
                    lineWidth: 2,
                    marker: {
                        lineWidth: 0,
                        radius: 4,
                        lineColor: "#FFFFFF",
                        states: {
                            hover: {enabled: !0, lineWidthPlus: 1, radiusPlus: 2},
                            select: {fillColor: "#FFFFFF", lineColor: "#000000", lineWidth: 2}
                        }
                    },
                    point: {events: {}},
                    dataLabels: {
                        align: "center",
                        formatter: function () {
                            return null === this.y ? "" : nt.numberFormat(this.y, -1)
                        },
                        style: {
                            color: "contrast",
                            fontSize: "11px",
                            fontWeight: "bold",
                            textShadow: "0 0 6px contrast, 0 0 3px contrast"
                        },
                        verticalAlign: "bottom",
                        x: 0,
                        y: 0,
                        padding: 5
                    },
                    cropThreshold: 300,
                    pointRange: 0,
                    softThreshold: !0,
                    states: {
                        hover: {lineWidthPlus: 1, marker: {}, halo: {size: 10, opacity: .25}},
                        select: {marker: {}}
                    },
                    stickyTracking: !0,
                    turboThreshold: 1e3
                }
            },
            labels: {style: {position: "absolute", color: "#3E576F"}},
            legend: {
                enabled: !0,
                align: "center",
                layout: "horizontal",
                labelFormatter: function () {
                    return this.name
                },
                borderColor: "#909090",
                borderRadius: 0,
                navigation: {activeColor: "#274b6d", inactiveColor: "#CCC"},
                shadow: !1,
                itemStyle: {color: "#333333", fontSize: "12px", fontWeight: "bold"},
                itemHoverStyle: {color: "#000"},
                itemHiddenStyle: {color: "#CCC"},
                itemCheckboxStyle: {position: "absolute", width: "13px", height: "13px"},
                symbolPadding: 5,
                verticalAlign: "bottom",
                x: 0,
                y: 0,
                title: {style: {fontWeight: "bold"}}
            },
            loading: {
                labelStyle: {fontWeight: "bold", position: "relative", top: "45%"},
                style: {position: "absolute", backgroundColor: "white", opacity: .5, textAlign: "center"}
            },
            tooltip: {
                enabled: !0,
                animation: Et,
                backgroundColor: "rgba(249, 249, 249, .85)",
                borderWidth: 1,
                borderRadius: 3,
                dateTimeLabelFormats: {
                    millisecond: "%A, %b %e, %H:%M:%S.%L",
                    second: "%A, %b %e, %H:%M:%S",
                    minute: "%A, %b %e, %H:%M",
                    hour: "%A, %b %e, %H:%M",
                    day: "%A, %b %e, %Y",
                    week: "Week from %A, %b %e, %Y",
                    month: "%B %Y",
                    year: "%Y"
                },
                footerFormat: "",
                headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
                pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>',
                shadow: !0,
                snap: wt ? 25 : 10,
                style: {
                    color: "#333333",
                    cursor: "default",
                    fontSize: "12px",
                    padding: "8px",
                    pointerEvents: "none",
                    whiteSpace: "nowrap"
                }
            },
            credits: {
                enabled: !0,
                text: "Highcharts.com",
                href: "http://www.highcharts.com",
                position: {align: "right", x: -10, verticalAlign: "bottom", y: -5},
                style: {cursor: "pointer", color: "#909090", fontSize: "9px"}
            }
        };
        var ee = F.plotOptions, ie = ee.line;
        P(), T.prototype = {
            parsers: [{
                regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
                parse: function (t) {
                    return [o(t[1]), o(t[2]), o(t[3]), parseFloat(t[4], 10)]
                }
            }, {
                regex: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/, parse: function (t) {
                    return [o(t[1], 16), o(t[2], 16), o(t[3], 16), 1]
                }
            }, {
                regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, parse: function (t) {
                    return [o(t[1]), o(t[2]), o(t[3]), 1]
                }
            }], init: function (t) {
                var e, i, n, o;
                if ((this.input = t) && t.stops) this.stops = _t(t.stops, function (t) {
                    return new T(t[1])
                }); else for (n = this.parsers.length; n-- && !i;) o = this.parsers[n], (e = o.regex.exec(t)) && (i = o.parse(e));
                this.rgba = i || []
            }, get: function (t) {
                var e, i = this.input, o = this.rgba;
                return this.stops ? (e = n(i), e.stops = [].concat(e.stops), zt(this.stops, function (i, n) {
                    e.stops[n] = [e.stops[n][0], i.get(t)]
                })) : e = o && Zt(o[0]) ? "rgb" === t || !t && 1 === o[3] ? "rgb(" + o[0] + "," + o[1] + "," + o[2] + ")" : "a" === t ? o[3] : "rgba(" + o.join(",") + ")" : i, e
            }, brighten: function (t) {
                var e, i = this.rgba;
                if (this.stops) zt(this.stops, function (e) {
                    e.brighten(t)
                }); else if (Zt(t) && 0 !== t) for (e = 0; e < 3; e++) i[e] += o(255 * t), i[e] < 0 && (i[e] = 0), i[e] > 255 && (i[e] = 255);
                return this
            }, setOpacity: function (t) {
                return this.rgba[3] = t, this
            }
        }, I.prototype = {
            opacity: 1,
            textProps: "direction,fontSize,fontWeight,fontFamily,fontStyle,color,lineHeight,width,textDecoration,textOverflow,textShadow".split(","),
            init: function (t, e) {
                this.element = "span" === e ? p(e) : ot.createElementNS(St, e), this.renderer = t
            },
            animate: function (t, e, i) {
                return e = jQueryt(e, this.renderer.globalAnimation, !0), qt(this), e ? (i && (e.complete = i), Xt(this, t, e)) : this.attr(t, null, i), this
            },
            colorGradient: function (t, e, i) {
                var o, r, s, d, u, c, h, p, f, g, m, A, y = this.renderer, x = [];
                if (t.linearGradient ? r = "linearGradient" : t.radialGradient && (r = "radialGradient"), r) {
                    s = t[r], u = y.gradients, h = t.stops, g = i.radialReference, a(s) && (t[r] = s = {
                        x1: s[0],
                        y1: s[1],
                        x2: s[2],
                        y2: s[3],
                        gradientUnits: "userSpaceOnUse"
                    }), "radialGradient" === r && g && !l(s.gradientUnits) && (d = s, s = n(s, y.getRadialAttr(g, d), {gradientUnits: "userSpaceOnUse"}));
                    for (m in s) "id" !== m && x.push(m, s[m]);
                    for (m in h) x.push(h[m]);
                    x = x.join(","), u[x] ? g = u[x].attr("id") : (s.id = g = "highcharts-" + Pt++, u[x] = c = y.createElement(r).attr(s).add(y.defs), c.radAttr = d, c.stops = [], zt(h, function (t) {
                        0 === t[1].indexOf("rgba") ? (o = T(t[1]), p = o.get("rgb"), f = o.get("a")) : (p = t[1], f = 1), t = y.createElement("stop").attr({
                            offset: t[0],
                            "stop-color": p,
                            "stop-opacity": f
                        }).add(c), c.stops.push(t)
                    })), A = "url(" + y.url + "#" + g + ")", i.setAttribute(e, A), i.gradient = x, t.toString = function () {
                        return A
                    }
                }
            },
            applyTextShadow: function (t) {
                var e, i = this.element, n = t.indexOf("contrast") !== -1, r = {}, a = this.renderer.forExport,
                    s = a || i.style.textShadow !== D && !yt;
                n && (r.textShadow = t = t.replace(/contrast/g, this.renderer.getContrast(i.style.fill))), (bt || a) && (r.textRendering = "geometricPrecision"), s ? this.css(r) : (this.fakeTS = !0, this.ySetter = this.xSetter, e = [].slice.call(i.getElementsByTagName("tspan")), zt(t.split(/\s?,\s?/g), function (t) {
                    var n, r, a = i.firstChild, t = t.split(" ");
                    n = t[t.length - 1], (r = t[t.length - 2]) && zt(e, function (t, e) {
                        var s;
                        0 === e && (t.setAttribute("x", i.getAttribute("x")), e = i.getAttribute("y"), t.setAttribute("y", e || 0), null === e && i.setAttribute("y", 0)), s = t.cloneNode(1), d(s, {
                            "class": "highcharts-text-shadow",
                            fill: n,
                            stroke: n,
                            "stroke-opacity": 1 / dt(o(r), 3),
                            "stroke-width": r,
                            "stroke-linejoin": "round"
                        }), i.insertBefore(s, a)
                    })
                }))
            },
            attr: function (t, e, i) {
                var n, o, r, a = this.element, s = this;
                if ("string" == typeof t && e !== D && (n = t, t = {}, t[n] = e), "string" == typeof t) s = (this[t + "Getter"] || this._defaultGetter).call(this, t, a); else {
                    for (n in t) e = t[n], r = !1, this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(n) && (o || (this.symbolAttr(t), o = !0), r = !0), !this.rotation || "x" !== n && "y" !== n || (this.doTransform = !0), r || (r = this[n + "Setter"] || this._defaultSetter, r.call(this, e, n, a), this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)jQuery/.test(n) && this.updateShadows(n, e, r));
                    this.doTransform && (this.updateTransform(), this.doTransform = !1)
                }
                return i && i(), s
            },
            updateShadows: function (t, e, i) {
                for (var n = this.shadows, o = n.length; o--;) i.call(n[o], "height" === t ? Math.max(e - (n[o].cutHeight || 0), 0) : "d" === t ? this.d : e, t, n[o])
            },
            addClass: function (t) {
                var e = this.element, i = d(e, "class") || "";
                return i.indexOf(t) === -1 && d(e, "class", i + " " + t), this
            },
            symbolAttr: function (t) {
                var e = this;
                zt("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","), function (i) {
                    e[i] = jQueryt(t[i], e[i])
                }), e.attr({d: e.renderer.symbols[e.symbolName](e.x, e.y, e.width, e.height, e)})
            },
            clip: function (t) {
                return this.attr("clip-path", t ? "url(" + this.renderer.url + "#" + t.id + ")" : "none")
            },
            crisp: function (t) {
                var e, i, n = {}, o = this.strokeWidth || 0;
                i = at(o) % 2 / 2, t.x = st(t.x || this.x || 0) + i, t.y = st(t.y || this.y || 0) + i, t.width = st((t.width || this.width || 0) - 2 * i), t.height = st((t.height || this.height || 0) - 2 * i), t.strokeWidth = o;
                for (e in t) this[e] !== t[e] && (this[e] = n[e] = t[e]);
                return n
            },
            css: function (t) {
                var e, i, n = this.styles, r = {}, a = this.element, s = "";
                if (e = !n, t && t.color && (t.fill = t.color), n) for (i in t) t[i] !== n[i] && (r[i] = t[i], e = !0);
                if (e) {
                    if (e = this.textWidth = t && t.width && "text" === a.nodeName.toLowerCase() && o(t.width) || this.textWidth, n && (t = Kt(n, r)), this.styles = t, e && (kt || !Et && this.renderer.forExport) && delete t.width, yt && !Et) h(this.element, t); else {
                        n = function (t, e) {
                            return "-" + e.toLowerCase()
                        };
                        for (i in t) s += i.replace(/([A-Z])/g, n) + ":" + t[i] + ";";
                        d(a, "style", s)
                    }
                    e && this.added && this.renderer.buildText(this)
                }
                return this
            },
            on: function (t, e) {
                var i = this, n = i.element;
                return B && "click" === t ? (n.ontouchstart = function (t) {
                    i.touchEventFired = z.now(), t.preventDefault(), e.call(n, t)
                }, n.onclick = function (t) {
                    (mt.indexOf("Android") === -1 || z.now() - (i.touchEventFired || 0) > 1100) && e.call(n, t)
                }) : n["on" + t] = e, this
            },
            setRadialReference: function (t) {
                var e = this.renderer.gradients[this.element.gradient];
                return this.element.radialReference = t, e && e.radAttr && e.animate(this.renderer.getRadialAttr(t, e.radAttr)), this
            },
            translate: function (t, e) {
                return this.attr({translateX: t, translateY: e})
            },
            invert: function () {
                return this.inverted = !0, this.updateTransform(), this
            },
            updateTransform: function () {
                var t = this.translateX || 0, e = this.translateY || 0, i = this.scaleX, n = this.scaleY,
                    o = this.inverted, r = this.rotation, a = this.element;
                o && (t += this.attr("width"), e += this.attr("height")), t = ["translate(" + t + "," + e + ")"], o ? t.push("rotate(90) scale(-1,1)") : r && t.push("rotate(" + r + " " + (a.getAttribute("x") || 0) + " " + (a.getAttribute("y") || 0) + ")"), (l(i) || l(n)) && t.push("scale(" + jQueryt(i, 1) + " " + jQueryt(n, 1) + ")"), t.length && a.setAttribute("transform", t.join(" "))
            },
            toFront: function () {
                var t = this.element;
                return t.parentNode.appendChild(t), this
            },
            align: function (t, e, i) {
                var n, o, a, l, d = {};
                return o = this.renderer, a = o.alignedObjects, t ? (this.alignOptions = t, this.alignByTranslate = e, (!i || r(i)) && (this.alignTo = n = i || "renderer", s(a, this), a.push(this), i = null)) : (t = this.alignOptions, e = this.alignByTranslate, n = this.alignTo), i = jQueryt(i, o[n], o), n = t.align, o = t.verticalAlign, a = (i.x || 0) + (t.x || 0), l = (i.y || 0) + (t.y || 0), "right" !== n && "center" !== n || (a += (i.width - (t.width || 0)) / {
                    right: 1,
                    center: 2
                }[n]), d[e ? "translateX" : "x"] = at(a), "bottom" !== o && "middle" !== o || (l += (i.height - (t.height || 0)) / ({
                    bottom: 1,
                    middle: 2
                }[o] || 1)), d[e ? "translateY" : "y"] = at(l), this[this.placed ? "animate" : "attr"](d), this.placed = !0, this.alignAttr = d, this
            },
            getBBox: function (t, e) {
                var i, n, o, r, a = this.renderer, s = this.element, l = this.styles;
                n = this.textStr;
                var d, u, c, h = s.style, p = a.cache, f = a.cacheKeys;
                if (o = jQueryt(e, this.rotation), r = o * gt, n !== D && (c = ["", o || 0, l && l.fontSize, s.style.width].join(","), c = "" === n || Bt.test(n) ? "num:" + n.toString().length + c : n + c), c && !t && (i = p[c]), !i) {
                    if (s.namespaceURI === St || a.forExport) {
                        try {
                            u = this.fakeTS && function (t) {
                                zt(s.querySelectorAll(".highcharts-text-shadow"), function (e) {
                                    e.style.display = t
                                })
                            }, vt && h.textShadow ? (d = h.textShadow, h.textShadow = "") : u && u("none"), i = s.getBBox ? Kt({}, s.getBBox()) : {
                                width: s.offsetWidth,
                                height: s.offsetHeight
                            }, d ? h.textShadow = d : u && u("")
                        } catch (g) {
                        }
                        (!i || i.width < 0) && (i = {width: 0, height: 0})
                    } else i = this.htmlGetBBox();
                    if (a.isSVG && (a = i.width, n = i.height, yt && l && "11px" === l.fontSize && "16.9" === n.toPrecision(3) && (i.height = n = 14), o && (i.width = ct(n * pt(r)) + ct(a * ht(r)), i.height = ct(n * ht(r)) + ct(a * pt(r)))), c) {
                        for (; f.length > 250;) delete p[f.shift()];
                        p[c] || f.push(c), p[c] = i
                    }
                }
                return i
            },
            show: function (t) {
                return this.attr({visibility: t ? "inherit" : "visible"})
            },
            hide: function () {
                return this.attr({visibility: "hidden"})
            },
            fadeOut: function (t) {
                var e = this;
                e.animate({opacity: 0}, {
                    duration: t || 150, complete: function () {
                        e.attr({y: -9999})
                    }
                })
            },
            add: function (t) {
                var e, i = this.renderer, n = this.element;
                return t && (this.parentGroup = t), this.parentInverted = t && t.inverted, void 0 !== this.textStr && i.buildText(this), this.added = !0, (!t || t.handleZ || this.zIndex) && (e = this.zIndexSetter()), e || (t ? t.element : i.box).appendChild(n), this.onAdd && this.onAdd(), this
            },
            safeRemoveChild: function (t) {
                var e = t.parentNode;
                e && e.removeChild(t)
            },
            destroy: function () {
                var t, e, i = this, n = i.element || {}, o = i.shadows,
                    r = i.renderer.isSVG && "SPAN" === n.nodeName && i.parentGroup;
                if (n.onclick = n.onmouseout = n.onmouseover = n.onmousemove = n.point = null, qt(i), i.clipPath && (i.clipPath = i.clipPath.destroy()), i.stops) {
                    for (e = 0; e < i.stops.length; e++) i.stops[e] = i.stops[e].destroy();
                    i.stops = null
                }
                for (i.safeRemoveChild(n), o && zt(o, function (t) {
                    i.safeRemoveChild(t)
                }); r && r.div && 0 === r.div.childNodes.length;) n = r.parentGroup, i.safeRemoveChild(r.div), delete r.div, r = n;
                i.alignTo && s(i.renderer.alignedObjects, i);
                for (t in i) delete i[t];
                return null
            },
            shadow: function (t, e, i) {
                var n, o, r, a, s, l, u = [], c = this.element;
                if (t) {
                    for (a = jQueryt(t.width, 3), s = (t.opacity || .15) / a, l = this.parentInverted ? "(-1,-1)" : "(" + jQueryt(t.offsetX, 1) + ", " + jQueryt(t.offsetY, 1) + ")", n = 1; n <= a; n++) o = c.cloneNode(0), r = 2 * a + 1 - 2 * n, d(o, {
                        isShadow: "true",
                        stroke: t.color || "black",
                        "stroke-opacity": s * n,
                        "stroke-width": r,
                        transform: "translate" + l,
                        fill: "none"
                    }), i && (d(o, "height", dt(d(o, "height") - r, 0)), o.cutHeight = r), e ? e.element.appendChild(o) : c.parentNode.insertBefore(o, c), u.push(o);
                    this.shadows = u
                }
                return this
            },
            xGetter: function (t) {
                return "circle" === this.element.nodeName && (t = {x: "cx", y: "cy"}[t] || t), this._defaultGetter(t)
            },
            _defaultGetter: function (t) {
                return t = jQueryt(this[t], this.element ? this.element.getAttribute(t) : null, 0), /^[\-0-9\.]+jQuery/.test(t) && (t = parseFloat(t)), t
            },
            dSetter: function (t, e, i) {
                t && t.join && (t = t.join(" ")), /(NaN| {2}|^jQuery)/.test(t) && (t = "M 0 0"), i.setAttribute(e, t), this[e] = t
            },
            dashstyleSetter: function (t) {
                var e, i = this["stroke-width"];
                if ("inherit" === i && (i = 1), t = t && t.toLowerCase()) {
                    for (t = t.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,jQuery/, "").split(","),
                             e = t.length; e--;) t[e] = o(t[e]) * i;
                    t = t.join(",").replace(/NaN/g, "none"), this.element.setAttribute("stroke-dasharray", t)
                }
            },
            alignSetter: function (t) {
                this.element.setAttribute("text-anchor", {left: "start", center: "middle", right: "end"}[t])
            },
            opacitySetter: function (t, e, i) {
                this[e] = t, i.setAttribute(e, t)
            },
            titleSetter: function (t) {
                var e = this.element.getElementsByTagName("title")[0];
                e || (e = ot.createElementNS(St, "title"), this.element.appendChild(e)), e.firstChild && e.removeChild(e.firstChild), e.appendChild(ot.createTextNode(String(jQueryt(t), "").replace(/<[^>]*>/g, "")))
            },
            textSetter: function (t) {
                t !== this.textStr && (delete this.bBox, this.textStr = t, this.added && this.renderer.buildText(this))
            },
            fillSetter: function (t, e, i) {
                "string" == typeof t ? i.setAttribute(e, t) : t && this.colorGradient(t, e, i)
            },
            visibilitySetter: function (t, e, i) {
                "inherit" === t ? i.removeAttribute(e) : i.setAttribute(e, t)
            },
            zIndexSetter: function (t, e) {
                var i, n, r, a = this.renderer, s = this.parentGroup, a = (s || a).element || a.box, d = this.element;
                i = this.added;
                var u;
                if (l(t) && (d.zIndex = t, t = +t, this[e] === t && (i = !1), this[e] = t), i) {
                    for ((t = this.zIndex) && s && (s.handleZ = !0), s = a.childNodes, u = 0; u < s.length && !r; u++) i = s[u], n = i.zIndex, i !== d && (o(n) > t || !l(t) && l(n)) && (a.insertBefore(d, i), r = !0);
                    r || a.appendChild(d)
                }
                return r
            },
            _defaultSetter: function (t, e, i) {
                i.setAttribute(e, t)
            }
        }, I.prototype.yGetter = I.prototype.xGetter, I.prototype.translateXSetter = I.prototype.translateYSetter = I.prototype.rotationSetter = I.prototype.verticalAlignSetter = I.prototype.scaleXSetter = I.prototype.scaleYSetter = function (t, e) {
            this[e] = t, this.doTransform = !0
        }, I.prototype["stroke-widthSetter"] = I.prototype.strokeSetter = function (t, e, i) {
            this[e] = t, this.stroke && this["stroke-width"] ? (this.strokeWidth = this["stroke-width"], I.prototype.fillSetter.call(this, this.stroke, "stroke", i), i.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === e && 0 === t && this.hasStroke && (i.removeAttribute("stroke"), this.hasStroke = !1)
        };
        var ne = function () {
            this.init.apply(this, arguments)
        };
        ne.prototype = {
            Element: I, init: function (e, i, n, o, r, a) {
                var s, o = this.createElement("svg").attr({version: "1.1"}).css(this.getStyle(o));
                s = o.element, e.appendChild(s), e.innerHTML.indexOf("xmlns") === -1 && d(s, "xmlns", St), this.isSVG = !0, this.box = s, this.boxWrapper = o, this.alignedObjects = [], this.url = (vt || bt) && ot.getElementsByTagName("base").length ? t.location.href.replace(/#.*?jQuery/, "").replace(/([\('\)])/g, "\\jQuery1").replace(/ /g, "%20") : "", this.createElement("desc").add().element.appendChild(ot.createTextNode("Created with Highcharts 4.2.6")), this.defs = this.createElement("defs").add(), this.allowHTML = a, this.forExport = r, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.imgCount = 0, this.setSize(i, n, !1);
                var l;
                vt && e.getBoundingClientRect && (this.subPixelFix = i = function () {
                    h(e, {left: 0, top: 0}), l = e.getBoundingClientRect(), h(e, {
                        left: lt(l.left) - l.left + "px",
                        top: lt(l.top) - l.top + "px"
                    })
                }, i(), Ht(t, "resize", i))
            }, getStyle: function (t) {
                return this.style = Kt({
                    fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                    fontSize: "12px"
                }, t)
            }, isHidden: function () {
                return !this.boxWrapper.getBBox().width
            }, destroy: function () {
                var e = this.defs;
                return this.box = null, this.boxWrapper = this.boxWrapper.destroy(), S(this.gradients || {}), this.gradients = null, e && (this.defs = e.destroy()), this.subPixelFix && Wt(t, "resize", this.subPixelFix), this.alignedObjects = null
            }, createElement: function (t) {
                var e = new this.Element;
                return e.init(this, t), e
            }, draw: function () {
            }, getRadialAttr: function (t, e) {
                return {cx: t[0] - t[2] / 2 + e.cx * t[2], cy: t[1] - t[2] / 2 + e.cy * t[2], r: e.r * t[2]}
            }, buildText: function (t) {
                for (var e, i, n, r = t.element, a = this, s = a.forExport, l = jQueryt(t.textStr, "").toString(), u = l.indexOf("<") !== -1, c = r.childNodes, p = d(r, "x"), f = t.styles, g = t.textWidth, m = f && f.lineHeight, A = f && f.textShadow, y = f && "ellipsis" === f.textOverflow, x = c.length, b = g && !t.added && this.box, v = function (t) {
                    return m ? o(m) : a.fontMetrics(/(px|em)jQuery/.test(t && t.style.fontSize) ? t.style.fontSize : f && f.fontSize || a.style.fontSize || 12, t).h
                }, w = function (t) {
                    return t.replace(/&lt;/g, "<").replace(/&gt;/g, ">")
                }; x--;) r.removeChild(c[x]);
                u || A || y || g || l.indexOf(" ") !== -1 ? (e = /<.*style="([^"]+)".*>/, i = /<.*href="(http[^"]+)".*>/, b && b.appendChild(r), l = u ? l.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g) : [l], l = jt(l, function (t) {
                    return "" !== t
                }), zt(l, function (o, l) {
                    var u, c = 0,
                        o = o.replace(/^\s+|\s+jQuery/g, "").replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
                    u = o.split("|||"), zt(u, function (o) {
                        if ("" !== o || 1 === u.length) {
                            var m, A = {}, x = ot.createElementNS(St, "tspan");
                            if (e.test(o) && (m = o.match(e)[1].replace(/(;| |^)color([ :])/, "jQuery1filljQuery2"), d(x, "style", m)), i.test(o) && !s && (d(x, "onclick", 'location.href="' + o.match(i)[1] + '"'), h(x, {cursor: "pointer"})), o = w(o.replace(/<(.|\n)*?>/g, "") || " "), " " !== o) {
                                if (x.appendChild(ot.createTextNode(o)), c ? A.dx = 0 : l && null !== p && (A.x = p), d(x, A), r.appendChild(x), !c && l && (!Et && s && h(x, {display: "block"}), d(x, "dy", v(x))), g) {
                                    for (var b, S, A = o.replace(/([^\^])-/g, "jQuery1- ").split(" "), E = u.length > 1 || l || A.length > 1 && "nowrap" !== f.whiteSpace, C = [], k = v(x), M = 1, P = t.rotation, T = o, I = T.length; (E || y) && (A.length || C.length);) t.rotation = 0, b = t.getBBox(!0), S = b.width, !Et && a.forExport && (S = a.measureSpanWidth(x.firstChild.data, t.styles)), b = S > g, void 0 === n && (n = b), y && n ? (I /= 2, "" === T || !b && I < .5 ? A = [] : (T = o.substring(0, T.length + (b ? -1 : 1) * lt(I)), A = [T + (g > 3 ? "…" : "")], x.removeChild(x.firstChild))) : b && 1 !== A.length ? (x.removeChild(x.firstChild), C.unshift(A.pop())) : (A = C, C = [], A.length && (M++, x = ot.createElementNS(St, "tspan"), d(x, {
                                        dy: k,
                                        x: p
                                    }), m && d(x, "style", m), r.appendChild(x)), S > g && (g = S)), A.length && x.appendChild(ot.createTextNode(A.join(" ").replace(/- /g, "-")));
                                    t.rotation = P
                                }
                                c++
                            }
                        }
                    })
                }), n && t.attr("title", t.textStr), b && b.removeChild(r), A && t.applyTextShadow && t.applyTextShadow(A)) : r.appendChild(ot.createTextNode(w(l)))
            }, getContrast: function (t) {
                return t = T(t).rgba, t[0] + t[1] + t[2] > 384 ? "#000000" : "#FFFFFF"
            }, button: function (t, e, i, o, r, a, s, l, d) {
                var u, c, h, p, f, g, m = this.label(t, e, i, d, null, null, null, null, "button"), A = 0,
                    t = {x1: 0, y1: 0, x2: 0, y2: 1}, r = n({
                        "stroke-width": 1,
                        stroke: "#CCCCCC",
                        fill: {linearGradient: t, stops: [[0, "#FEFEFE"], [1, "#F6F6F6"]]},
                        r: 2,
                        padding: 5,
                        style: {color: "black"}
                    }, r);
                return h = r.style, delete r.style, a = n(r, {
                    stroke: "#68A",
                    fill: {linearGradient: t, stops: [[0, "#FFF"], [1, "#ACF"]]}
                }, a), p = a.style, delete a.style, s = n(r, {
                    stroke: "#68A",
                    fill: {linearGradient: t, stops: [[0, "#9BD"], [1, "#CDF"]]}
                }, s), f = s.style, delete s.style, l = n(r, {style: {color: "#CCC"}}, l), g = l.style, delete l.style, Ht(m.element, yt ? "mouseover" : "mouseenter", function () {
                    3 !== A && m.attr(a).css(p)
                }), Ht(m.element, yt ? "mouseout" : "mouseleave", function () {
                    3 !== A && (u = [r, a, s][A], c = [h, p, f][A], m.attr(u).css(c))
                }), m.setState = function (t) {
                    (m.state = A = t) ? 2 === t ? m.attr(s).css(f) : 3 === t && m.attr(l).css(g) : m.attr(r).css(h)
                }, m.on("click", function (t) {
                    3 !== A && o.call(m, t)
                }).attr(r).css(Kt({cursor: "default"}, h))
            }, crispLine: function (t, e) {
                return t[1] === t[4] && (t[1] = t[4] = at(t[1]) - e % 2 / 2), t[2] === t[5] && (t[2] = t[5] = at(t[2]) + e % 2 / 2), t
            }, path: function (t) {
                var e = {fill: "none"};
                return a(t) ? e.d = t : Jt(t) && Kt(e, t), this.createElement("path").attr(e)
            }, circle: function (t, e, i) {
                return t = Jt(t) ? t : {
                    x: t,
                    y: e,
                    r: i
                }, e = this.createElement("circle"), e.xSetter = e.ySetter = function (t, e, i) {
                    i.setAttribute("c" + e, t)
                }, e.attr(t)
            }, arc: function (t, e, i, n, o, r) {
                return Jt(t) && (e = t.y, i = t.r, n = t.innerR, o = t.start, r = t.end, t = t.x), t = this.symbol("arc", t || 0, e || 0, i || 0, i || 0, {
                    innerR: n || 0,
                    start: o || 0,
                    end: r || 0
                }), t.r = i, t
            }, rect: function (t, e, i, n, o, r) {
                var o = Jt(t) ? t.r : o, a = this.createElement("rect"),
                    t = Jt(t) ? t : t === D ? {} : {x: t, y: e, width: dt(i, 0), height: dt(n, 0)};
                return r !== D && (a.strokeWidth = r, t = a.crisp(t)), o && (t.r = o), a.rSetter = function (t, e, i) {
                    d(i, {rx: t, ry: t})
                }, a.attr(t)
            }, setSize: function (t, e, i) {
                var n = this.alignedObjects, o = n.length;
                for (this.width = t, this.height = e, this.boxWrapper[jQueryt(i, !0) ? "animate" : "attr"]({
                    width: t,
                    height: e
                }); o--;) n[o].align()
            }, g: function (t) {
                var e = this.createElement("g");
                return l(t) ? e.attr({"class": "highcharts-" + t}) : e
            }, image: function (t, e, i, n, o) {
                var r = {preserveAspectRatio: "none"};
                return arguments.length > 1 && Kt(r, {
                    x: e,
                    y: i,
                    width: n,
                    height: o
                }), r = this.createElement("image").attr(r), r.element.setAttributeNS ? r.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", t) : r.element.setAttribute("hc-svg-href", t), r
            }, symbol: function (t, e, i, n, o, r) {
                var a, s, l, d = this, u = this.symbols[t], u = u && u(at(e), at(i), n, o, r), c = /^url\((.*?)\)jQuery/;
                return u ? (a = this.path(u), Kt(a, {
                    symbolName: t,
                    x: e,
                    y: i,
                    width: n,
                    height: o
                }), r && Kt(a, r)) : c.test(t) && (l = function (t, e) {
                    t.element && (t.attr({
                        width: e[0],
                        height: e[1]
                    }), t.alignByTranslate || t.translate(at((n - e[0]) / 2), at((o - e[1]) / 2)))
                }, s = t.match(c)[1], t = Mt[s] || r && r.width && r.height && [r.width, r.height], a = this.image(s).attr({
                    x: e,
                    y: i
                }), a.isImg = !0, t ? l(a, t) : (a.attr({width: 0, height: 0}), p("img", {
                    onload: function () {
                        0 === this.width && (h(this, {
                            position: "absolute",
                            top: "-999em"
                        }), ot.body.appendChild(this)), l(a, Mt[s] = [this.width, this.height]), this.parentNode && this.parentNode.removeChild(this), d.imgCount--, !d.imgCount && It[d.chartIndex].onload && It[d.chartIndex].onload()
                    }, src: s
                }), this.imgCount++)), a
            }, symbols: {
                circle: function (t, e, i, n) {
                    var o = .166 * i;
                    return [Dt, t + i / 2, e, "C", t + i + o, e, t + i + o, e + n, t + i / 2, e + n, "C", t - o, e + n, t - o, e, t + i / 2, e, "Z"]
                }, square: function (t, e, i, n) {
                    return [Dt, t, e, Ot, t + i, e, t + i, e + n, t, e + n, "Z"]
                }, triangle: function (t, e, i, n) {
                    return [Dt, t + i / 2, e, Ot, t + i, e + n, t, e + n, "Z"]
                }, "triangle-down": function (t, e, i, n) {
                    return [Dt, t, e, Ot, t + i, e, t + i / 2, e + n, "Z"]
                }, diamond: function (t, e, i, n) {
                    return [Dt, t + i / 2, e, Ot, t + i, e + n / 2, t + i / 2, e + n, t, e + n / 2, "Z"]
                }, arc: function (t, e, i, n, o) {
                    var r = o.start, i = o.r || i || n, a = o.end - .001, n = o.innerR, s = o.open, l = ht(r),
                        d = pt(r), u = ht(a), a = pt(a), o = o.end - r < ft ? 0 : 1;
                    return [Dt, t + i * l, e + i * d, "A", i, i, 0, o, 1, t + i * u, e + i * a, s ? Dt : Ot, t + n * u, e + n * a, "A", n, n, 0, o, 0, t + n * l, e + n * d, s ? "" : "Z"]
                }, callout: function (t, e, i, n, o) {
                    var r, a = ut(o && o.r || 0, i, n), s = a + 6, l = o && o.anchorX, o = o && o.anchorY;
                    return r = ["M", t + a, e, "L", t + i - a, e, "C", t + i, e, t + i, e, t + i, e + a, "L", t + i, e + n - a, "C", t + i, e + n, t + i, e + n, t + i - a, e + n, "L", t + a, e + n, "C", t, e + n, t, e + n, t, e + n - a, "L", t, e + a, "C", t, e, t, e, t + a, e], l && l > i && o > e + s && o < e + n - s ? r.splice(13, 3, "L", t + i, o - 6, t + i + 6, o, t + i, o + 6, t + i, e + n - a) : l && l < 0 && o > e + s && o < e + n - s ? r.splice(33, 3, "L", t, o + 6, t - 6, o, t, o - 6, t, e + a) : o && o > n && l > t + s && l < t + i - s ? r.splice(23, 3, "L", l + 6, e + n, l, e + n + 6, l - 6, e + n, t + a, e + n) : o && o < 0 && l > t + s && l < t + i - s && r.splice(3, 3, "L", l - 6, e, l, e - 6, l + 6, e, i - a, e), r
                }
            }, clipRect: function (t, e, i, n) {
                var o = "highcharts-" + Pt++, r = this.createElement("clipPath").attr({id: o}).add(this.defs),
                    t = this.rect(t, e, i, n, 0).add(r);
                return t.id = o, t.clipPath = r, t.count = 0, t
            }, text: function (t, e, i, n) {
                var o = kt || !Et && this.forExport, r = {};
                return !n || !this.allowHTML && this.forExport ? (r.x = Math.round(e || 0), i && (r.y = Math.round(i)), (t || 0 === t) && (r.text = t), t = this.createElement("text").attr(r), o && t.css({position: "absolute"}), n || (t.xSetter = function (t, e, i) {
                    var n, o, r = i.getElementsByTagName("tspan"), a = i.getAttribute(e);
                    for (o = 0; o < r.length; o++) n = r[o], n.getAttribute(e) === a && n.setAttribute(e, t);
                    i.setAttribute(e, t)
                }), t) : this.html(t, e, i)
            }, fontMetrics: function (e, i) {
                var n, r, e = e || this.style.fontSize;
                return !e && i && t.getComputedStyle && (i = i.element || i, e = (n = t.getComputedStyle(i, "")) && n.fontSize), e = /px/.test(e) ? o(e) : /em/.test(e) ? 12 * parseFloat(e) : 12, n = e < 24 ? e + 3 : at(1.2 * e), r = at(.8 * n), {
                    h: n,
                    b: r,
                    f: e
                }
            }, rotCorr: function (t, e, i) {
                var n = t;
                return e && i && (n = dt(n * ht(e * gt), 4)), {x: -t / 3 * pt(e * gt), y: n}
            }, label: function (t, e, i, o, r, a, s, d, u) {
                var c, h, p, f, g, m, A, y, x, b, v, w = this, S = w.g(u), E = w.text("", 0, 0, s).attr({zIndex: 1}),
                    C = 0, k = 3, M = 0, P = 0, T = {};
                x = function () {
                    var t, e;
                    t = E.element.style, h = (void 0 === p || void 0 === f || S.styles.textAlign) && l(E.textStr) && E.getBBox(), S.width = (p || h.width || 0) + 2 * k + M, S.height = (f || h.height || 0) + 2 * k, A = k + w.fontMetrics(t && t.fontSize, E).b, y && (c || (t = P, e = (d ? -A : 0) + P, S.box = c = w.symbols[o] ? w.symbol(o, t, e, S.width, S.height, T) : w.rect(t, e, S.width, S.height, 0, T["stroke-width"]), c.isImg || c.attr("fill", "none"), c.add(S)), c.isImg || c.attr(Kt({
                        width: at(S.width),
                        height: at(S.height)
                    }, T)), T = null)
                }, b = function () {
                    var t, e = S.styles, e = e && e.textAlign, i = M + k;
                    t = d ? 0 : A, l(p) && h && ("center" === e || "right" === e) && (i += {
                        center: .5,
                        right: 1
                    }[e] * (p - h.width)), i === E.x && t === E.y || (E.attr("x", i), t !== D && E.attr("y", t)), E.x = i, E.y = t
                }, v = function (t, e) {
                    c ? c.attr(t, e) : T[t] = e
                }, S.onAdd = function () {
                    E.add(S), S.attr({text: t || 0 === t ? t : "", x: e, y: i}), c && l(r) && S.attr({
                        anchorX: r,
                        anchorY: a
                    })
                }, S.widthSetter = function (t) {
                    p = t
                }, S.heightSetter = function (t) {
                    f = t
                }, S.paddingSetter = function (t) {
                    l(t) && t !== k && (k = S.padding = t, b())
                }, S.paddingLeftSetter = function (t) {
                    l(t) && t !== M && (M = t, b())
                }, S.alignSetter = function (t) {
                    t = {left: 0, center: .5, right: 1}[t], t !== C && (C = t, h && S.attr({x: g}))
                }, S.textSetter = function (t) {
                    t !== D && E.textSetter(t), x(), b()
                }, S["stroke-widthSetter"] = function (t, e) {
                    t && (y = !0), P = t % 2 / 2, v(e, t)
                }, S.strokeSetter = S.fillSetter = S.rSetter = function (t, e) {
                    "fill" === e && t && (y = !0), v(e, t)
                }, S.anchorXSetter = function (t, e) {
                    r = t, v(e, at(t) - P - g)
                }, S.anchorYSetter = function (t, e) {
                    a = t, v(e, t - m)
                }, S.xSetter = function (t) {
                    S.x = t, C && (t -= C * ((p || h.width) + 2 * k)), g = at(t), S.attr("translateX", g)
                }, S.ySetter = function (t) {
                    m = S.y = at(t), S.attr("translateY", m)
                };
                var R = S.css;
                return Kt(S, {
                    css: function (t) {
                        if (t) {
                            var e = {}, t = n(t);
                            zt(S.textProps, function (i) {
                                t[i] !== D && (e[i] = t[i], delete t[i])
                            }), E.css(e)
                        }
                        return R.call(S, t)
                    }, getBBox: function () {
                        return {width: h.width + 2 * k, height: h.height + 2 * k, x: h.x - k, y: h.y - k}
                    }, shadow: function (t) {
                        return c && c.shadow(t), S
                    }, destroy: function () {
                        Wt(S.element, "mouseenter"), Wt(S.element, "mouseleave"), E && (E = E.destroy()), c && (c = c.destroy()), I.prototype.destroy.call(S), S = w = x = b = v = null
                    }
                })
            }
        }, O = ne, Kt(I.prototype, {
            htmlCss: function (t) {
                var e = this.element;
                return (e = t && "SPAN" === e.tagName && t.width) && (delete t.width, this.textWidth = e, this.updateTransform()), t && "ellipsis" === t.textOverflow && (t.whiteSpace = "nowrap", t.overflow = "hidden"), this.styles = Kt(this.styles, t), h(this.element, t), this
            }, htmlGetBBox: function () {
                var t = this.element;
                return "text" === t.nodeName && (t.style.position = "absolute"), {
                    x: t.offsetLeft,
                    y: t.offsetTop,
                    width: t.offsetWidth,
                    height: t.offsetHeight
                }
            }, htmlUpdateTransform: function () {
                if (this.added) {
                    var t = this.renderer, e = this.element, i = this.translateX || 0, n = this.translateY || 0,
                        r = this.x || 0, a = this.y || 0, s = this.textAlign || "left",
                        d = {left: 0, center: .5, right: 1}[s], u = this.shadows, c = this.styles;
                    if (h(e, {marginLeft: i, marginTop: n}), u && zt(u, function (t) {
                            h(t, {marginLeft: i + 1, marginTop: n + 1})
                        }), this.inverted && zt(e.childNodes, function (i) {
                            t.invertChild(i, e)
                        }), "SPAN" === e.tagName) {
                        var u = this.rotation, p = o(this.textWidth), f = c && c.whiteSpace,
                            g = [u, s, e.innerHTML, this.textWidth, this.textAlign].join(",");
                        g !== this.cTT && (c = t.fontMetrics(e.style.fontSize).b, l(u) && this.setSpanRotation(u, d, c), h(e, {
                            width: "",
                            whiteSpace: f || "nowrap"
                        }), e.offsetWidth > p && /[ \-]/.test(e.textContent || e.innerText) && h(e, {
                            width: p + "px",
                            display: "block",
                            whiteSpace: f || "normal"
                        }), this.getSpanCorrection(e.offsetWidth, c, d, u, s)), h(e, {
                            left: r + (this.xCorr || 0) + "px",
                            top: a + (this.yCorr || 0) + "px"
                        }), bt && (c = e.offsetHeight), this.cTT = g
                    }
                } else this.alignOnAdd = !0
            }, setSpanRotation: function (t, e, i) {
                var n = {},
                    o = yt ? "-ms-transform" : bt ? "-webkit-transform" : vt ? "MozTransform" : At ? "-o-transform" : "";
                n[o] = n.transform = "rotate(" + t + "deg)", n[o + (vt ? "Origin" : "-origin")] = n.transformOrigin = 100 * e + "% " + i + "px", h(this.element, n)
            }, getSpanCorrection: function (t, e, i) {
                this.xCorr = -t * i, this.yCorr = -e
            }
        }), Kt(ne.prototype, {
            html: function (t, e, i) {
                var n = this.createElement("span"), o = n.element, r = n.renderer, a = r.isSVG, s = function (t, e) {
                    zt(["opacity", "visibility"], function (i) {
                        te(t, i + "Setter", function (t, i, n, o) {
                            t.call(this, i, n, o), e[n] = i
                        })
                    })
                };
                return n.textSetter = function (t) {
                    t !== o.innerHTML && delete this.bBox, o.innerHTML = this.textStr = t, n.htmlUpdateTransform()
                }, a && s(n, n.element.style), n.xSetter = n.ySetter = n.alignSetter = n.rotationSetter = function (t, e) {
                    "align" === e && (e = "textAlign"), n[e] = t, n.htmlUpdateTransform()
                }, n.attr({text: t, x: at(e), y: at(i)}).css({
                    position: "absolute",
                    fontFamily: this.style.fontFamily,
                    fontSize: this.style.fontSize
                }), o.style.whiteSpace = "nowrap", n.css = n.htmlCss, a && (n.add = function (t) {
                    var e, i = r.box.parentNode, a = [];
                    if (this.parentGroup = t) {
                        if (e = t.div, !e) {
                            for (; t;) a.push(t), t = t.parentGroup;
                            zt(a.reverse(), function (t) {
                                var n, o = d(t.element, "class");
                                o && (o = {className: o}), e = t.div = t.div || p(Lt, o, {
                                    position: "absolute",
                                    left: (t.translateX || 0) + "px",
                                    top: (t.translateY || 0) + "px",
                                    opacity: t.opacity
                                }, e || i), n = e.style, Kt(t, {
                                    translateXSetter: function (e, i) {
                                        n.left = e + "px", t[i] = e, t.doTransform = !0
                                    }, translateYSetter: function (e, i) {
                                        n.top = e + "px", t[i] = e, t.doTransform = !0
                                    }
                                }), s(t, n)
                            })
                        }
                    } else e = i;
                    return e.appendChild(o), n.added = !0, n.alignOnAdd && n.htmlUpdateTransform(), n
                }), n
            }
        });
        var oe;
        if (!Et && !kt) {
            oe = {
                init: function (t, e) {
                    var i = ["<", e, ' filled="f" stroked="f"'], n = ["position: ", "absolute", ";"], o = e === Lt;
                    ("shape" === e || o) && n.push("left:0;top:0;width:1px;height:1px;"), n.push("visibility: ", o ? "hidden" : "visible"), i.push(' style="', n.join(""), '"/>'), e && (i = o || "span" === e || "img" === e ? i.join("") : t.prepVML(i), this.element = p(i)), this.renderer = t
                }, add: function (t) {
                    var e = this.renderer, i = this.element, n = e.box, o = t && t.inverted, n = t ? t.element || t : n;
                    return t && (this.parentGroup = t), o && e.invertChild(i, n), n.appendChild(i), this.added = !0, this.alignOnAdd && !this.deferUpdateTransform && this.updateTransform(), this.onAdd && this.onAdd(), this
                }, updateTransform: I.prototype.htmlUpdateTransform, setSpanRotation: function () {
                    var t = this.rotation, e = ht(t * gt), i = pt(t * gt);
                    h(this.element, {filter: t ? ["progid:DXImageTransform.Microsoft.Matrix(M11=", e, ", M12=", -i, ", M21=", i, ", M22=", e, ", sizingMethod='auto expand')"].join("") : "none"})
                }, getSpanCorrection: function (t, e, i, n, o) {
                    var r, a = n ? ht(n * gt) : 1, s = n ? pt(n * gt) : 0,
                        l = jQueryt(this.elemHeight, this.element.offsetHeight);
                    this.xCorr = a < 0 && -t, this.yCorr = s < 0 && -l, r = a * s < 0, this.xCorr += s * e * (r ? 1 - i : i), this.yCorr -= a * e * (n ? r ? i : 1 - i : 1), o && "left" !== o && (this.xCorr -= t * i * (a < 0 ? -1 : 1), n && (this.yCorr -= l * i * (s < 0 ? -1 : 1)), h(this.element, {textAlign: o}))
                }, pathToVML: function (t) {
                    for (var e = t.length, i = []; e--;) Zt(t[e]) ? i[e] = at(10 * t[e]) - 5 : "Z" === t[e] ? i[e] = "x" : (i[e] = t[e], !t.isArc || "wa" !== t[e] && "at" !== t[e] || (i[e + 5] === i[e + 7] && (i[e + 7] += t[e + 7] > t[e + 5] ? 1 : -1), i[e + 6] === i[e + 8] && (i[e + 8] += t[e + 8] > t[e + 6] ? 1 : -1)));
                    return i.join(" ") || "x"
                }, clip: function (t) {
                    var e, i = this;
                    return t ? (e = t.members, s(e, i), e.push(i), i.destroyClip = function () {
                        s(e, i)
                    }, t = t.getCSS(i)) : (i.destroyClip && i.destroyClip(), t = {clip: xt ? "inherit" : "rect(auto)"}), i.css(t)
                }, css: I.prototype.htmlCss, safeRemoveChild: function (t) {
                    t.parentNode && E(t)
                }, destroy: function () {
                    return this.destroyClip && this.destroyClip(), I.prototype.destroy.apply(this)
                }, on: function (e, i) {
                    return this.element["on" + e] = function () {
                        var e = t.event;
                        e.target = e.srcElement, i(e)
                    }, this
                }, cutOffPath: function (t, e) {
                    var i, t = t.split(/[ ,]/);
                    return i = t.length, 9 !== i && 11 !== i || (t[i - 4] = t[i - 2] = o(t[i - 2]) - 10 * e), t.join(" ")
                }, shadow: function (t, e, i) {
                    var n, r, a, s, l, d, u, c = [], h = this.element, f = this.renderer, g = h.style, m = h.path;
                    if (m && "string" != typeof m.value && (m = "x"), l = m, t) {
                        for (d = jQueryt(t.width, 3), u = (t.opacity || .15) / d, n = 1; n <= 3; n++) s = 2 * d + 1 - 2 * n, i && (l = this.cutOffPath(m.value, s + .5)), a = ['<shape isShadow="true" strokeweight="', s, '" filled="false" path="', l, '" coordsize="10 10" style="', h.style.cssText, '" />'], r = p(f.prepVML(a), null, {
                            left: o(g.left) + jQueryt(t.offsetX, 1),
                            top: o(g.top) + jQueryt(t.offsetY, 1)
                        }), i && (r.cutOff = s + 1), a = ['<stroke color="', t.color || "black", '" opacity="', u * n, '"/>'], p(f.prepVML(a), null, null, r), e ? e.element.appendChild(r) : h.parentNode.insertBefore(r, h), c.push(r);
                        this.shadows = c
                    }
                    return this
                }, updateShadows: Tt, setAttr: function (t, e) {
                    xt ? this.element[t] = e : this.element.setAttribute(t, e)
                }, classSetter: function (t) {
                    this.element.className = t
                }, dashstyleSetter: function (t, e, i) {
                    (i.getElementsByTagName("stroke")[0] || p(this.renderer.prepVML(["<stroke/>"]), null, null, i))[e] = t || "solid", this[e] = t
                }, dSetter: function (t, e, i) {
                    var n = this.shadows, t = t || [];
                    if (this.d = t.join && t.join(" "), i.path = t = this.pathToVML(t), n) for (i = n.length; i--;) n[i].path = n[i].cutOff ? this.cutOffPath(t, n[i].cutOff) : t;
                    this.setAttr(e, t)
                }, fillSetter: function (t, e, i) {
                    var n = i.nodeName;
                    "SPAN" === n ? i.style.color = t : "IMG" !== n && (i.filled = "none" !== t, this.setAttr("fillcolor", this.renderer.color(t, i, e, this)))
                }, "fill-opacitySetter": function (t, e, i) {
                    p(this.renderer.prepVML(["<", e.split("-")[0], ' opacity="', t, '"/>']), null, null, i)
                }, opacitySetter: Tt, rotationSetter: function (t, e, i) {
                    i = i.style, this[e] = i[e] = t, i.left = -at(pt(t * gt) + 1) + "px", i.top = at(ht(t * gt)) + "px"
                }, strokeSetter: function (t, e, i) {
                    this.setAttr("strokecolor", this.renderer.color(t, i, e, this))
                }, "stroke-widthSetter": function (t, e, i) {
                    i.stroked = !!t, this[e] = t, Zt(t) && (t += "px"), this.setAttr("strokeweight", t)
                }, titleSetter: function (t, e) {
                    this.setAttr(e, t)
                }, visibilitySetter: function (t, e, i) {
                    "inherit" === t && (t = "visible"), this.shadows && zt(this.shadows, function (i) {
                        i.style[e] = t
                    }), "DIV" === i.nodeName && (t = "hidden" === t ? "-999em" : 0, xt || (i.style[e] = t ? "visible" : "hidden"), e = "top"), i.style[e] = t
                }, xSetter: function (t, e, i) {
                    this[e] = t, "x" === e ? e = "left" : "y" === e && (e = "top"), this.updateClipping ? (this[e] = t, this.updateClipping()) : i.style[e] = t
                }, zIndexSetter: function (t, e, i) {
                    i.style[e] = t
                }
            }, oe["stroke-opacitySetter"] = oe["fill-opacitySetter"], nt.VMLElement = oe = f(I, oe), oe.prototype.ySetter = oe.prototype.widthSetter = oe.prototype.heightSetter = oe.prototype.xSetter;
            var re = {
                Element: oe, isIE8: mt.indexOf("MSIE 8.0") > -1, init: function (t, e, i, n) {
                    var o;
                    if (this.alignedObjects = [], n = this.createElement(Lt).css(Kt(this.getStyle(n), {position: "relative"})), o = n.element, t.appendChild(n.element), this.isVML = !0, this.box = o, this.boxWrapper = n, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.imgCount = 0, this.setSize(e, i, !1), !ot.namespaces.hcv) {
                        ot.namespaces.add("hcv", "urn:schemas-microsoft-com:vml");
                        try {
                            ot.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
                        } catch (r) {
                            ot.styleSheets[0].cssText += "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
                        }
                    }
                }, isHidden: function () {
                    return !this.box.offsetWidth
                }, clipRect: function (t, e, i, n) {
                    var o = this.createElement(), r = Jt(t);
                    return Kt(o, {
                        members: [],
                        count: 0,
                        left: (r ? t.x : t) + 1,
                        top: (r ? t.y : e) + 1,
                        width: (r ? t.width : i) - 1,
                        height: (r ? t.height : n) - 1,
                        getCSS: function (t) {
                            var e = t.element, i = e.nodeName, t = t.inverted,
                                n = this.top - ("shape" === i ? e.offsetTop : 0), o = this.left, e = o + this.width,
                                r = n + this.height,
                                n = {clip: "rect(" + at(t ? o : n) + "px," + at(t ? r : e) + "px," + at(t ? e : r) + "px," + at(t ? n : o) + "px)"};
                            return !t && xt && "DIV" === i && Kt(n, {width: e + "px", height: r + "px"}), n
                        },
                        updateClipping: function () {
                            zt(o.members, function (t) {
                                t.element && t.css(o.getCSS(t))
                            })
                        }
                    })
                }, color: function (t, e, i, n) {
                    var o, r, a, s = this, l = /^rgba/, d = "none";
                    if (t && t.linearGradient ? a = "gradient" : t && t.radialGradient && (a = "pattern"), a) {
                        var u, c, h, f, g, m, A, y, x = t.linearGradient || t.radialGradient, b = "", t = t.stops,
                            v = [], w = function () {
                                r = ['<fill colors="' + v.join(",") + '" opacity="', g, '" o:opacity2="', f, '" type="', a, '" ', b, 'focus="100%" method="any" />'], p(s.prepVML(r), null, null, e)
                            };
                        if (h = t[0], y = t[t.length - 1], h[0] > 0 && t.unshift([0, h[1]]), y[0] < 1 && t.push([1, y[1]]), zt(t, function (t, e) {
                                l.test(t[1]) ? (o = T(t[1]), u = o.get("rgb"), c = o.get("a")) : (u = t[1], c = 1), v.push(100 * t[0] + "% " + u), e ? (g = c, m = u) : (f = c, A = u)
                            }), "fill" === i) if ("gradient" === a) i = x.x1 || x[0] || 0, t = x.y1 || x[1] || 0, h = x.x2 || x[2] || 0, x = x.y2 || x[3] || 0, b = 'angle="' + (90 - 180 * rt.atan((x - t) / (h - i)) / ft) + '"', w(); else {
                            var S, d = x.r, E = 2 * d, C = 2 * d, k = x.cx, M = x.cy, P = e.radialReference,
                                d = function () {
                                    P && (S = n.getBBox(), k += (P[0] - S.x) / S.width - .5, M += (P[1] - S.y) / S.height - .5, E *= P[2] / S.width, C *= P[2] / S.height), b = 'src="' + F.global.VMLRadialGradientURL + '" size="' + E + "," + C + '" origin="0.5,0.5" position="' + k + "," + M + '" color2="' + A + '" ', w()
                                };
                            n.added ? d() : n.onAdd = d, d = m
                        } else d = u
                    } else l.test(t) && "IMG" !== e.tagName ? (o = T(t), n[i + "-opacitySetter"](o.get("a"), i, e), d = o.get("rgb")) : (d = e.getElementsByTagName(i), d.length && (d[0].opacity = 1, d[0].type = "solid"), d = t);
                    return d
                }, prepVML: function (t) {
                    var e = this.isIE8, t = t.join("");
                    return e ? (t = t.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />'), t = t.indexOf('style="') === -1 ? t.replace("/>", ' style="display:inline-block;behavior:url(#default#VML);" />') : t.replace('style="', 'style="display:inline-block;behavior:url(#default#VML);')) : t = t.replace("<", "<hcv:"), t
                }, text: ne.prototype.html, path: function (t) {
                    var e = {coordsize: "10 10"};
                    return a(t) ? e.d = t : Jt(t) && Kt(e, t), this.createElement("shape").attr(e)
                }, circle: function (t, e, i) {
                    var n = this.symbol("circle");
                    return Jt(t) && (i = t.r, e = t.y, t = t.x), n.isCircle = !0, n.r = i, n.attr({x: t, y: e})
                }, g: function (t) {
                    var e;
                    return t && (e = {
                        className: "highcharts-" + t,
                        "class": "highcharts-" + t
                    }), this.createElement(Lt).attr(e)
                }, image: function (t, e, i, n, o) {
                    var r = this.createElement("img").attr({src: t});
                    return arguments.length > 1 && r.attr({x: e, y: i, width: n, height: o}), r
                }, createElement: function (t) {
                    return "rect" === t ? this.symbol(t) : ne.prototype.createElement.call(this, t)
                }, invertChild: function (t, e) {
                    var i = this, n = e.style, r = "IMG" === t.tagName && t.style;
                    h(t, {
                        flip: "x",
                        left: o(n.width) - (r ? o(r.top) : 1),
                        top: o(n.height) - (r ? o(r.left) : 1),
                        rotation: -90
                    }), zt(t.childNodes, function (e) {
                        i.invertChild(e, t)
                    })
                }, symbols: {
                    arc: function (t, e, i, n, o) {
                        var r = o.start, a = o.end, s = o.r || i || n, i = o.innerR, n = ht(r), l = pt(r), d = ht(a),
                            u = pt(a);
                        return a - r === 0 ? ["x"] : (r = ["wa", t - s, e - s, t + s, e + s, t + s * n, e + s * l, t + s * d, e + s * u], o.open && !i && r.push("e", Dt, t, e), r.push("at", t - i, e - i, t + i, e + i, t + i * d, e + i * u, t + i * n, e + i * l, "x", "e"), r.isArc = !0, r)
                    }, circle: function (t, e, i, n, o) {
                        return o && (i = n = 2 * o.r), o && o.isCircle && (t -= i / 2, e -= n / 2), ["wa", t, e, t + i, e + n, t + i, e + n / 2, t + i, e + n / 2, "e"]
                    }, rect: function (t, e, i, n, o) {
                        return ne.prototype.symbols[l(o) && o.r ? "callout" : "square"].call(0, t, e, i, n, o)
                    }
                }
            };
            nt.VMLRenderer = oe = function () {
                this.init.apply(this, arguments)
            }, oe.prototype = n(ne.prototype, re), O = oe
        }
        ne.prototype.measureSpanWidth = function (t, e) {
            var i, n = ot.createElement("span");
            return i = ot.createTextNode(t), n.appendChild(i), h(n, e), this.box.appendChild(n), i = n.offsetWidth, E(n), i
        };
        var ae;
        kt && (nt.CanVGRenderer = oe = function () {
            St = "http://www.w3.org/1999/xhtml"
        }, oe.prototype.symbols = {}, ae = function () {
            function t() {
                var t, i = e.length;
                for (t = 0; t < i; t++) e[t]();
                e = []
            }

            var e = [];
            return {
                push: function (i, n) {
                    if (0 === e.length) {
                        var o = ot.getElementsByTagName("head")[0], r = ot.createElement("script");
                        r.type = "text/javascript", r.src = n, r.onload = t, o.appendChild(r)
                    }
                    e.push(i)
                }
            }
        }(), O = oe), R.prototype = {
            addLabel: function () {
                var t, e = this.axis, i = e.options, o = e.chart, r = e.categories, a = e.names, s = this.pos,
                    d = i.labels, u = e.tickPositions, c = s === u[0], h = s === u[u.length - 1],
                    a = r ? jQueryt(r[s], a[s], s) : s, r = this.label, u = u.info;
                e.isDatetimeAxis && u && (t = i.dateTimeLabelFormats[u.higherRanks[s] || u.unitName]), this.isFirst = c, this.isLast = h, i = e.labelFormatter.call({
                    axis: e,
                    chart: o,
                    isFirst: c,
                    isLast: h,
                    dateTimeLabelFormat: t,
                    value: e.isLog ? C(e.lin2log(a)) : a
                }), l(r) ? r && r.attr({text: i}) : (this.labelLength = (this.label = r = l(i) && d.enabled ? o.renderer.text(i, 0, 0, d.useHTML).css(n(d.style)).add(e.labelGroup) : null) && r.getBBox().width, this.rotation = 0)
            }, getLabelSize: function () {
                return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0
            }, handleOverflow: function (t) {
                var e, i = this.axis, n = t.x, o = i.chart.chartWidth, r = i.chart.spacing,
                    a = jQueryt(i.labelLeft, ut(i.pos, r[3])), r = jQueryt(i.labelRight, dt(i.pos + i.len, o - r[1])),
                    s = this.label, l = this.rotation, d = {left: 0, center: .5, right: 1}[i.labelAlign],
                    u = s.getBBox().width, c = i.getSlotWidth(), h = c, p = 1, f = {};
                l ? l < 0 && n - d * u < a ? e = at(n / ht(l * gt) - a) : l > 0 && n + d * u > r && (e = at((o - n) / ht(l * gt))) : (o = n + (1 - d) * u, n - d * u < a ? h = t.x + h * (1 - d) - a : o > r && (h = r - t.x + h * d, p = -1), h = ut(c, h), h < c && "center" === i.labelAlign && (t.x += p * (c - h - d * (c - ut(u, h)))), (u > h || i.autoRotation && s.styles.width) && (e = h)), e && (f.width = e, i.options.labels.style.textOverflow || (f.textOverflow = "ellipsis"), s.css(f))
            }, getPosition: function (t, e, i, n) {
                var o = this.axis, r = o.chart, a = n && r.oldChartHeight || r.chartHeight;
                return {
                    x: t ? o.translate(e + i, null, null, n) + o.transB : o.left + o.offset + (o.opposite ? (n && r.oldChartWidth || r.chartWidth) - o.right - o.left : 0),
                    y: t ? a - o.bottom + o.offset - (o.opposite ? o.height : 0) : a - o.translate(e + i, null, null, n) - o.transB
                }
            }, getLabelPosition: function (t, e, i, n, o, r, a, s) {
                var d = this.axis, u = d.transA, c = d.reversed, h = d.staggerLines, p = d.tickRotCorr || {x: 0, y: 0},
                    f = o.y;
                return l(f) || (f = 0 === d.side ? i.rotation ? -8 : -i.getBBox().height : 2 === d.side ? p.y + 8 : ht(i.rotation * gt) * (p.y - i.getBBox(!1, 0).height / 2)), t = t + o.x + p.x - (r && n ? r * u * (c ? -1 : 1) : 0), e = e + f - (r && !n ? r * u * (c ? 1 : -1) : 0), h && (i = a / (s || 1) % h, d.opposite && (i = h - i - 1), e += i * (d.labelOffset / h)), {
                    x: t,
                    y: at(e)
                }
            }, getMarkPath: function (t, e, i, n, o, r) {
                return r.crispLine([Dt, t, e, Ot, t + (o ? 0 : -i), e + (o ? i : 0)], n)
            }, render: function (t, e, i) {
                var n = this.axis, o = n.options, r = n.chart.renderer, a = n.horiz, s = this.type, l = this.label,
                    d = this.pos, u = o.labels, c = this.gridLine, h = s ? s + "Grid" : "grid",
                    p = s ? s + "Tick" : "tick", f = o[h + "LineWidth"], g = o[h + "LineColor"],
                    m = o[h + "LineDashStyle"], h = n.tickSize(p), p = o[p + "Color"], A = this.mark, y = u.step,
                    x = !0, b = n.tickmarkOffset, v = this.getPosition(a, d, b, e), w = v.x, v = v.y,
                    S = a && w === n.pos + n.len || !a && v === n.pos ? -1 : 1, i = jQueryt(i, 1);
                this.isActive = !0, f && (d = n.getPlotLinePath(d + b, f * S, e, !0), c === D && (c = {
                    stroke: g,
                    "stroke-width": f
                }, m && (c.dashstyle = m), s || (c.zIndex = 1), e && (c.opacity = 0), this.gridLine = c = f ? r.path(d).attr(c).add(n.gridGroup) : null), !e && c && d && c[this.isNew ? "attr" : "animate"]({
                    d: d,
                    opacity: i
                })), h && (n.opposite && (h[0] = -h[0]), s = this.getMarkPath(w, v, h[0], h[1] * S, a, r), A ? A.animate({
                    d: s,
                    opacity: i
                }) : this.mark = r.path(s).attr({
                    stroke: p,
                    "stroke-width": h[1],
                    opacity: i
                }).add(n.axisGroup)), l && Zt(w) && (l.xy = v = this.getLabelPosition(w, v, l, a, u, b, t, y), this.isFirst && !this.isLast && !jQueryt(o.showFirstLabel, 1) || this.isLast && !this.isFirst && !jQueryt(o.showLastLabel, 1) ? x = !1 : a && !n.isRadial && !u.step && !u.rotation && !e && 0 !== i && this.handleOverflow(v), y && t % y && (x = !1), x && Zt(v.y) ? (v.opacity = i, l[this.isNew ? "attr" : "animate"](v)) : (qt(l), l.attr("y", -9999)), this.isNew = !1)
            }, destroy: function () {
                S(this, this.axis)
            }
        }, nt.PlotLineOrBand = function (t, e) {
            this.axis = t, e && (this.options = e, this.id = e.id)
        }, nt.PlotLineOrBand.prototype = {
            render: function () {
                var t, e = this, i = e.axis, o = i.horiz, r = e.options, a = r.label, s = e.label, d = r.width,
                    u = r.to, c = r.from, h = l(c) && l(u), p = r.value, f = r.dashStyle, g = e.svgElem, m = [],
                    A = r.color, y = jQueryt(r.zIndex, 0), x = r.events, b = {}, v = i.chart.renderer, m = i.log2lin;
                if (i.isLog && (c = m(c), u = m(u), p = m(p)), d) m = i.getPlotLinePath(p, d), b = {
                    stroke: A,
                    "stroke-width": d
                }, f && (b.dashstyle = f); else {
                    if (!h) return;
                    m = i.getPlotBandPath(c, u, r), A && (b.fill = A), r.borderWidth && (b.stroke = r.borderColor, b["stroke-width"] = r.borderWidth)
                }
                if (b.zIndex = y, g) m ? (g.show(), g.animate({d: m})) : (g.hide(), s && (e.label = s = s.destroy())); else if (m && m.length && (e.svgElem = g = v.path(m).attr(b).add(), x)) for (t in r = function (t) {
                    g.on(t, function (i) {
                        x[t].apply(e, [i])
                    })
                }, x) r(t);
                return a && l(a.text) && m && m.length && i.width > 0 && i.height > 0 && !m.flat ? (a = n({
                    align: o && h && "center",
                    x: o ? !h && 4 : 10,
                    verticalAlign: !o && h && "middle",
                    y: o ? h ? 16 : 10 : h ? 6 : -4,
                    rotation: o && !h && 90
                }, a), this.renderLabel(a, m, h, y)) : s && s.hide(), e
            }, renderLabel: function (t, e, i, n) {
                var o = this.label, r = this.axis.chart.renderer;
                o || (o = {
                    align: t.textAlign || t.align,
                    rotation: t.rotation
                }, o.zIndex = n, this.label = o = r.text(t.text, 0, 0, t.useHTML).attr(o).css(t.style).add()), n = [e[1], e[4], i ? e[6] : e[1]], e = [e[2], e[5], i ? e[7] : e[2]], i = v(n), r = v(e), o.align(t, !1, {
                    x: i,
                    y: r,
                    width: w(n) - i,
                    height: w(e) - r
                }), o.show()
            }, destroy: function () {
                s(this.axis.plotLinesAndBands, this), delete this.axis, S(this)
            }
        };
        var se = nt.Axis = function () {
            this.init.apply(this, arguments)
        };
        se.prototype = {
            defaultOptions: {
                dateTimeLabelFormats: {
                    millisecond: "%H:%M:%S.%L",
                    second: "%H:%M:%S",
                    minute: "%H:%M",
                    hour: "%H:%M",
                    day: "%e. %b",
                    week: "%e. %b",
                    month: "%b '%y",
                    year: "%Y"
                },
                endOnTick: !1,
                gridLineColor: "#D8D8D8",
                labels: {enabled: !0, style: {color: "#606060", cursor: "default", fontSize: "11px"}, x: 0},
                lineColor: "#C0D0E0",
                lineWidth: 1,
                minPadding: .01,
                maxPadding: .01,
                minorGridLineColor: "#E0E0E0",
                minorGridLineWidth: 1,
                minorTickColor: "#A0A0A0",
                minorTickLength: 2,
                minorTickPosition: "outside",
                startOfWeek: 1,
                startOnTick: !1,
                tickColor: "#C0D0E0",
                tickLength: 10,
                tickmarkPlacement: "between",
                tickPixelInterval: 100,
                tickPosition: "outside",
                title: {align: "middle", style: {color: "#707070"}},
                type: "linear"
            },
            defaultYAxisOptions: {
                endOnTick: !0,
                gridLineWidth: 1,
                tickPixelInterval: 72,
                showLastLabel: !0,
                labels: {x: -8},
                lineWidth: 0,
                maxPadding: .05,
                minPadding: .05,
                startOnTick: !0,
                title: {rotation: 270, text: "Values"},
                stackLabels: {
                    enabled: !1, formatter: function () {
                        return nt.numberFormat(this.total, -1)
                    }, style: n(ee.line.dataLabels.style, {color: "#000000"})
                }
            },
            defaultLeftAxisOptions: {labels: {x: -15}, title: {rotation: 270}},
            defaultRightAxisOptions: {labels: {x: 15}, title: {rotation: 90}},
            defaultBottomAxisOptions: {labels: {autoRotation: [-45], x: 0}, title: {rotation: 0}},
            defaultTopAxisOptions: {labels: {autoRotation: [-45], x: 0}, title: {rotation: 0}},
            init: function (t, e) {
                var i = e.isX;
                this.chart = t, this.horiz = t.inverted ? !i : i, this.coll = (this.isXAxis = i) ? "xAxis" : "yAxis", this.opposite = e.opposite, this.side = e.side || (this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3), this.setOptions(e);
                var n = this.options, o = n.type;
                this.labelFormatter = n.labels.formatter || this.defaultLabelFormatter,
                    this.userOptions = e, this.minPixelPadding = 0, this.reversed = n.reversed, this.visible = n.visible !== !1, this.zoomEnabled = n.zoomEnabled !== !1, this.categories = n.categories || "category" === o, this.names = this.names || [], this.isLog = "logarithmic" === o, this.isDatetimeAxis = "datetime" === o, this.isLinked = l(n.linkedTo), this.ticks = {}, this.labelEdge = [], this.minorTicks = {}, this.plotLinesAndBands = [], this.alternateBands = {}, this.len = 0, this.minRange = this.userMinRange = n.minRange || n.maxZoom, this.range = n.range, this.offset = n.offset || 0, this.stacks = {}, this.oldStacks = {}, this.stacksTouched = 0, this.min = this.max = null, this.crosshair = jQueryt(n.crosshair, u(t.options.tooltip.crosshairs)[i ? 0 : 1], !1);
                var r, n = this.options.events;
                Vt(this, t.axes) === -1 && (i && !this.isColorAxis ? t.axes.splice(t.xAxis.length, 0, this) : t.axes.push(this), t[this.coll].push(this)), this.series = this.series || [], t.inverted && i && this.reversed === D && (this.reversed = !0), this.removePlotLine = this.removePlotBand = this.removePlotBandOrLine;
                for (r in n) Ht(this, r, n[r]);
                this.isLog && (this.val2lin = this.log2lin, this.lin2val = this.lin2log)
            },
            setOptions: function (t) {
                this.options = n(this.defaultOptions, this.isXAxis ? {} : this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], n(F[this.coll], t))
            },
            defaultLabelFormatter: function () {
                var t, e = this.axis, i = this.value, n = e.categories, o = this.dateTimeLabelFormat,
                    r = F.lang.numericSymbols, a = r && r.length, s = e.options.labels.format,
                    e = e.isLog ? i : e.tickInterval;
                if (s) t = A(s, this); else if (n) t = i; else if (o) t = N(o, i); else if (a && e >= 1e3) for (; a-- && t === D;) n = Math.pow(1e3, a + 1), e >= n && 10 * i % n === 0 && null !== r[a] && 0 !== i && (t = nt.numberFormat(i / n, -1) + r[a]);
                return t === D && (t = ct(i) >= 1e4 ? nt.numberFormat(i, -1) : nt.numberFormat(i, -1, D, "")), t
            },
            getSeriesExtremes: function () {
                var t = this, e = t.chart;
                t.hasVisibleSeries = !1, t.dataMin = t.dataMax = t.threshold = null, t.softThreshold = !t.isXAxis, t.buildStacks && t.buildStacks(), zt(t.series, function (i) {
                    if (i.visible || !e.options.chart.ignoreHiddenSeries) {
                        var n, o = i.options, r = o.threshold;
                        t.hasVisibleSeries = !0, t.isLog && r <= 0 && (r = null), t.isXAxis ? (o = i.xData, o.length && (i = v(o), !Zt(i) && !(i instanceof z) && (o = jt(o, function (t) {
                            return Zt(t)
                        }), i = v(o)), t.dataMin = ut(jQueryt(t.dataMin, o[0]), i), t.dataMax = dt(jQueryt(t.dataMax, o[0]), w(o)))) : (i.getExtremes(), n = i.dataMax, i = i.dataMin, l(i) && l(n) && (t.dataMin = ut(jQueryt(t.dataMin, i), i), t.dataMax = dt(jQueryt(t.dataMax, n), n)), l(r) && (t.threshold = r), o.softThreshold && !t.isLog || (t.softThreshold = !1))
                    }
                })
            },
            translate: function (t, e, i, n, o, r) {
                var a = this.linkedParent || this, s = 1, l = 0, d = n ? a.oldTransA : a.transA,
                    n = n ? a.oldMin : a.min, u = a.minPixelPadding,
                    o = (a.isOrdinal || a.isBroken || a.isLog && o) && a.lin2val;
                return d || (d = a.transA), i && (s *= -1, l = a.len), a.reversed && (s *= -1, l -= s * (a.sector || a.len)), e ? (t = t * s + l, t -= u, t = t / d + n, o && (t = a.lin2val(t))) : (o && (t = a.val2lin(t)), "between" === r && (r = .5), t = s * (t - n) * d + l + s * u + (Zt(r) ? d * r * a.pointRange : 0)), t
            },
            toPixels: function (t, e) {
                return this.translate(t, !1, !this.horiz, null, !0) + (e ? 0 : this.pos)
            },
            toValue: function (t, e) {
                return this.translate(t - (e ? 0 : this.pos), !0, !this.horiz, null, !0)
            },
            getPlotLinePath: function (t, e, i, n, o) {
                var r, a, s, l = this.chart, d = this.left, u = this.top, c = i && l.oldChartHeight || l.chartHeight,
                    h = i && l.oldChartWidth || l.chartWidth;
                r = this.transB;
                var p = function (t, e, i) {
                    return (t < e || t > i) && (n ? t = ut(dt(e, t), i) : s = !0), t
                }, o = jQueryt(o, this.translate(t, null, null, i)), t = i = at(o + r);
                return r = a = at(c - o - r), Zt(o) ? this.horiz ? (r = u, a = c - this.bottom, t = i = p(t, d, d + this.width)) : (t = d, i = h - this.right, r = a = p(r, u, u + this.height)) : s = !0, s && !n ? null : l.renderer.crispLine([Dt, t, r, Ot, i, a], e || 1)
            },
            getLinearTickPositions: function (t, e, i) {
                var n, o = C(st(e / t) * t), r = C(lt(i / t) * t), a = [];
                if (e === i && Zt(e)) return [e];
                for (e = o; e <= r && (a.push(e), e = C(e + t), e !== n);) n = e;
                return a
            },
            getMinorTickPositions: function () {
                var t, e = this.options, i = this.tickPositions, n = this.minorTickInterval, o = [],
                    r = this.pointRangePadding || 0;
                t = this.min - r;
                var r = this.max + r, a = r - t;
                if (a && a / n < this.len / 3) if (this.isLog) for (r = i.length, t = 1; t < r; t++) o = o.concat(this.getLogTickPositions(n, i[t - 1], i[t], !0)); else if (this.isDatetimeAxis && "auto" === e.minorTickInterval) o = o.concat(this.getTimeTicks(this.normalizeTimeTickInterval(n), t, r, e.startOfWeek)); else for (i = t + (i[0] - t) % n; i <= r; i += n) o.push(i);
                return 0 !== o.length && this.trimTicks(o, e.startOnTick, e.endOnTick), o
            },
            adjustForMinRange: function () {
                var t, e, i, n, o, r, a, s = this.options, d = this.min, u = this.max,
                    c = this.dataMax - this.dataMin >= this.minRange;
                this.isXAxis && this.minRange === D && !this.isLog && (l(s.min) || l(s.max) ? this.minRange = null : (zt(this.series, function (t) {
                    for (o = t.xData, i = r = t.xIncrement ? 1 : o.length - 1; i > 0; i--) n = o[i] - o[i - 1], (e === D || n < e) && (e = n)
                }), this.minRange = ut(5 * e, this.dataMax - this.dataMin))), u - d < this.minRange && (a = this.minRange, t = (a - u + d) / 2, t = [d - t, jQueryt(s.min, d - t)], c && (t[2] = this.dataMin), d = w(t), u = [d + a, jQueryt(s.max, d + a)], c && (u[2] = this.dataMax), u = v(u), u - d < a && (t[0] = u - a, t[1] = jQueryt(s.min, u - a), d = w(t))), this.min = d, this.max = u
            },
            getClosest: function () {
                var t;
                return this.categories ? t = 1 : zt(this.series, function (e) {
                    var i = e.closestPointRange;
                    !e.noSharedTooltip && l(i) && (t = l(t) ? ut(t, i) : i)
                }), t
            },
            setAxisTranslation: function (t) {
                var e, i = this, n = i.max - i.min, o = i.axisPointRange || 0, a = 0, s = 0, l = i.linkedParent,
                    d = !!i.categories, u = i.transA, c = i.isXAxis;
                (c || d || o) && (l ? (a = l.minPointOffset, s = l.pointRangePadding) : (e = i.getClosest(), zt(i.series, function (t) {
                    var n = d ? 1 : c ? jQueryt(t.options.pointRange, e, 0) : i.axisPointRange || 0,
                        t = t.options.pointPlacement;
                    o = dt(o, n), i.single || (a = dt(a, r(t) ? 0 : n / 2), s = dt(s, "on" === t ? 0 : n))
                })), l = i.ordinalSlope && e ? i.ordinalSlope / e : 1, i.minPointOffset = a *= l, i.pointRangePadding = s *= l, i.pointRange = ut(o, n), c && (i.closestPointRange = e)), t && (i.oldTransA = u), i.translationSlope = i.transA = u = i.len / (n + s || 1), i.transB = i.horiz ? i.left : i.bottom, i.minPixelPadding = u * a
            },
            minFromRange: function () {
                return this.max - this.range
            },
            setTickInterval: function (t) {
                var i, n, o, r, a = this, s = a.chart, d = a.options, u = a.isLog, c = a.log2lin, h = a.isDatetimeAxis,
                    p = a.isXAxis, f = a.isLinked, g = d.maxPadding, m = d.minPadding, A = d.tickInterval,
                    b = d.tickPixelInterval, v = a.categories, w = a.threshold, S = a.softThreshold;
                !h && !v && !f && this.getTickAmount(), o = jQueryt(a.userMin, d.min), r = jQueryt(a.userMax, d.max), f ? (a.linkedParent = s[a.coll][d.linkedTo], s = a.linkedParent.getExtremes(), a.min = jQueryt(s.min, s.dataMin), a.max = jQueryt(s.max, s.dataMax), d.type !== a.linkedParent.options.type && e(11, 1)) : (!S && l(w) && (a.dataMin >= w ? (i = w, m = 0) : a.dataMax <= w && (n = w, g = 0)), a.min = jQueryt(o, i, a.dataMin), a.max = jQueryt(r, n, a.dataMax)), u && (!t && ut(a.min, jQueryt(a.dataMin, a.min)) <= 0 && e(10, 1), a.min = C(c(a.min), 15), a.max = C(c(a.max), 15)), a.range && l(a.max) && (a.userMin = a.min = o = dt(a.min, a.minFromRange()), a.userMax = r = a.max, a.range = null), Yt(a, "foundExtremes"), a.beforePadding && a.beforePadding(), a.adjustForMinRange(), v || a.axisPointRange || a.usePercentage || f || !l(a.min) || !l(a.max) || !(c = a.max - a.min) || (!l(o) && m && (a.min -= c * m), !l(r) && g && (a.max += c * g)), Zt(d.floor) && (a.min = dt(a.min, d.floor)), Zt(d.ceiling) && (a.max = ut(a.max, d.ceiling)), S && l(a.dataMin) && (w = w || 0, !l(o) && a.min < w && a.dataMin >= w ? a.min = w : !l(r) && a.max > w && a.dataMax <= w && (a.max = w)), a.tickInterval = a.min === a.max || void 0 === a.min || void 0 === a.max ? 1 : f && !A && b === a.linkedParent.options.tickPixelInterval ? A = a.linkedParent.tickInterval : jQueryt(A, this.tickAmount ? (a.max - a.min) / dt(this.tickAmount - 1, 1) : void 0, v ? 1 : (a.max - a.min) * b / dt(a.len, b)), p && !t && zt(a.series, function (t) {
                    t.processData(a.min !== a.oldMin || a.max !== a.oldMax)
                }), a.setAxisTranslation(!0), a.beforeSetTickPositions && a.beforeSetTickPositions(), a.postProcessTickInterval && (a.tickInterval = a.postProcessTickInterval(a.tickInterval)), a.pointRange && !A && (a.tickInterval = dt(a.pointRange, a.tickInterval)), t = jQueryt(d.minTickInterval, a.isDatetimeAxis && a.closestPointRange), !A && a.tickInterval < t && (a.tickInterval = t), h || u || A || (a.tickInterval = x(a.tickInterval, null, y(a.tickInterval), jQueryt(d.allowDecimals, !(a.tickInterval > .5 && a.tickInterval < 5 && a.max > 1e3 && a.max < 9999)), !!this.tickAmount)), !this.tickAmount && this.len && (a.tickInterval = a.unsquish()), this.setTickPositions()
            },
            setTickPositions: function () {
                var t, e, i = this.options, n = i.tickPositions, o = i.tickPositioner, r = i.startOnTick,
                    a = i.endOnTick;
                this.tickmarkOffset = this.categories && "between" === i.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0, this.minorTickInterval = "auto" === i.minorTickInterval && this.tickInterval ? this.tickInterval / 5 : i.minorTickInterval, this.tickPositions = t = n && n.slice(), !t && (t = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, i.units), this.min, this.max, i.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max), t.length > this.len && (t = [t[0], t.pop()]), this.tickPositions = t, o && (o = o.apply(this, [this.min, this.max]))) && (this.tickPositions = t = o), this.isLinked || (this.trimTicks(t, r, a), this.min === this.max && l(this.min) && !this.tickAmount && (e = !0, this.min -= .5, this.max += .5), this.single = e, !n && !o && this.adjustTickAmount())
            },
            trimTicks: function (t, e, i) {
                var n = t[0], o = t[t.length - 1], r = this.minPointOffset || 0;
                if (e) this.min = n; else for (; this.min - r > t[0];) t.shift();
                if (i) this.max = o; else for (; this.max + r < t[t.length - 1];) t.pop();
                0 === t.length && l(n) && t.push((o + n) / 2)
            },
            alignToOthers: function () {
                var t, e = {}, i = this.options;
                return this.chart.options.chart.alignTicks !== !1 && i.alignTicks !== !1 && zt(this.chart[this.coll], function (i) {
                    var n = i.options, n = [i.horiz ? n.left : n.top, n.width, n.height, n.pane].join(",");
                    i.series.length && (e[n] ? t = !0 : e[n] = 1)
                }), t
            },
            getTickAmount: function () {
                var t = this.options, e = t.tickAmount, i = t.tickPixelInterval;
                !l(t.tickInterval) && this.len < i && !this.isRadial && !this.isLog && t.startOnTick && t.endOnTick && (e = 2), !e && this.alignToOthers() && (e = lt(this.len / i) + 1), e < 4 && (this.finalTickAmt = e, e = 5), this.tickAmount = e
            },
            adjustTickAmount: function () {
                var t = this.tickInterval, e = this.tickPositions, i = this.tickAmount, n = this.finalTickAmt,
                    o = e && e.length;
                if (o < i) {
                    for (; e.length < i;) e.push(C(e[e.length - 1] + t));
                    this.transA *= (o - 1) / (i - 1), this.max = e[e.length - 1]
                } else o > i && (this.tickInterval *= 2, this.setTickPositions());
                if (l(n)) {
                    for (t = i = e.length; t--;) (3 === n && t % 2 === 1 || n <= 2 && t > 0 && t < i - 1) && e.splice(t, 1);
                    this.finalTickAmt = D
                }
            },
            setScale: function () {
                var t, e;
                this.oldMin = this.min, this.oldMax = this.max, this.oldAxisLength = this.len, this.setAxisSize(), e = this.len !== this.oldAxisLength, zt(this.series, function (e) {
                    (e.isDirtyData || e.isDirty || e.xAxis.isDirty) && (t = !0)
                }), e || t || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers() ? (this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, this.isDirty || (this.isDirty = e || this.min !== this.oldMin || this.max !== this.oldMax)) : this.cleanStacks && this.cleanStacks()
            },
            setExtremes: function (t, e, i, n, o) {
                var r = this, a = r.chart, i = jQueryt(i, !0);
                zt(r.series, function (t) {
                    delete t.kdTree
                }), o = Kt(o, {min: t, max: e}), Yt(r, "setExtremes", o, function () {
                    r.userMin = t, r.userMax = e, r.eventArgs = o, i && a.redraw(n)
                })
            },
            zoom: function (t, e) {
                var i = this.dataMin, n = this.dataMax, o = this.options, r = ut(i, jQueryt(o.min, i)),
                    o = dt(n, jQueryt(o.max, n));
                return this.allowZoomOutside || (l(i) && t <= r && (t = r), l(n) && e >= o && (e = o)), this.displayBtn = t !== D || e !== D, this.setExtremes(t, e, !1, D, {trigger: "zoom"}), !0
            },
            setAxisSize: function () {
                var t = this.chart, e = this.options, i = e.offsetLeft || 0, n = this.horiz,
                    o = jQueryt(e.width, t.plotWidth - i + (e.offsetRight || 0)), r = jQueryt(e.height, t.plotHeight),
                    a = jQueryt(e.top, t.plotTop), e = jQueryt(e.left, t.plotLeft + i), i = /%jQuery/;
                i.test(r) && (r = Math.round(parseFloat(r) / 100 * t.plotHeight)), i.test(a) && (a = Math.round(parseFloat(a) / 100 * t.plotHeight + t.plotTop)), this.left = e, this.top = a, this.width = o, this.height = r, this.bottom = t.chartHeight - r - a, this.right = t.chartWidth - o - e, this.len = dt(n ? o : r, 0), this.pos = n ? e : a
            },
            getExtremes: function () {
                var t = this.isLog, e = this.lin2log;
                return {
                    min: t ? C(e(this.min)) : this.min,
                    max: t ? C(e(this.max)) : this.max,
                    dataMin: this.dataMin,
                    dataMax: this.dataMax,
                    userMin: this.userMin,
                    userMax: this.userMax
                }
            },
            getThreshold: function (t) {
                var e = this.isLog, i = this.lin2log, n = e ? i(this.min) : this.min, e = e ? i(this.max) : this.max;
                return null === t ? t = n : n > t ? t = n : e < t && (t = e), this.translate(t, 0, 1, 0, 1)
            },
            autoLabelAlign: function (t) {
                return t = (jQueryt(t, 0) - 90 * this.side + 720) % 360, t > 15 && t < 165 ? "right" : t > 195 && t < 345 ? "left" : "center"
            },
            tickSize: function (t) {
                var e = this.options, i = e[t + "Length"], n = jQueryt(e[t + "Width"], "tick" === t && this.isXAxis ? 1 : 0);
                if (n && i) return "inside" === e[t + "Position"] && (i = -i), [i, n]
            },
            labelMetrics: function () {
                return this.chart.renderer.fontMetrics(this.options.labels.style.fontSize, this.ticks[0] && this.ticks[0].label)
            },
            unsquish: function () {
                var t, e, i, n = this.options.labels, o = this.horiz, r = this.tickInterval, a = r,
                    s = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / r), d = n.rotation,
                    u = this.labelMetrics(), c = Number.MAX_VALUE, h = function (t) {
                        return t /= s || 1, t = t > 1 ? lt(t) : 1, t * r
                    };
                return o ? (i = !n.staggerLines && !n.step && (l(d) ? [d] : s < jQueryt(n.autoRotationLimit, 80) && n.autoRotation)) && zt(i, function (i) {
                    var n;
                    (i === d || i && i >= -90 && i <= 90) && (e = h(ct(u.h / pt(gt * i))), n = e + ct(i / 360), n < c && (c = n, t = i, a = e))
                }) : n.step || (a = h(u.h)), this.autoRotation = i, this.labelRotation = jQueryt(t, d), a
            },
            getSlotWidth: function () {
                var t = this.chart, e = this.horiz, i = this.options.labels,
                    n = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1), o = t.margin[3];
                return e && (i.step || 0) < 2 && !i.rotation && (this.staggerLines || 1) * t.plotWidth / n || !e && (o && o - t.spacing[3] || .33 * t.chartWidth)
            },
            renderUnsquish: function () {
                var t, e, i, o = this.chart, a = o.renderer, s = this.tickPositions, l = this.ticks,
                    d = this.options.labels, u = this.horiz, c = this.getSlotWidth(),
                    h = dt(1, at(c - 2 * (d.padding || 5))), p = {}, f = this.labelMetrics(), g = d.style.textOverflow,
                    m = 0;
                if (r(d.rotation) || (p.rotation = d.rotation || 0), this.autoRotation) zt(s, function (t) {
                    (t = l[t]) && t.labelLength > m && (m = t.labelLength)
                }), m > h && m > f.h ? p.rotation = this.labelRotation : this.labelRotation = 0; else if (c && (t = {width: h + "px"}, !g)) for (t.textOverflow = "clip", e = s.length; !u && e--;) i = s[e], (h = l[i].label) && ("ellipsis" === h.styles.textOverflow ? h.css({textOverflow: "clip"}) : l[i].labelLength > c && h.css({width: c + "px"}), h.getBBox().height > this.len / s.length - (f.h - f.f) && (h.specCss = {textOverflow: "ellipsis"}));
                p.rotation && (t = {width: (m > .5 * o.chartHeight ? .33 * o.chartHeight : o.chartHeight) + "px"}, !g) && (t.textOverflow = "ellipsis"), (this.labelAlign = d.align || this.autoLabelAlign(this.labelRotation)) && (p.align = this.labelAlign), zt(s, function (e) {
                    var i = (e = l[e]) && e.label;
                    i && (i.attr(p), t && i.css(n(t, i.specCss)), delete i.specCss, e.rotation = p.rotation)
                }), this.tickRotCorr = a.rotCorr(f.b, this.labelRotation || 0, 0 !== this.side)
            },
            hasData: function () {
                return this.hasVisibleSeries || l(this.min) && l(this.max) && !!this.tickPositions
            },
            getOffset: function () {
                var t, e, i, n, o = this, r = o.chart, a = r.renderer, s = o.options, d = o.tickPositions, u = o.ticks,
                    c = o.horiz, h = o.side, p = r.inverted ? [1, 0, 3, 2][h] : h, f = 0, g = 0, m = s.title,
                    A = s.labels, y = 0, x = o.opposite, b = r.axisOffset, r = r.clipOffset, v = [-1, 1, 1, -1][h],
                    w = o.axisParent, S = this.tickSize("tick");
                if (t = o.hasData(), o.showAxis = e = t || jQueryt(s.showEmpty, !0), o.staggerLines = o.horiz && A.staggerLines, o.axisGroup || (o.gridGroup = a.g("grid").attr({zIndex: s.gridZIndex || 1}).add(w), o.axisGroup = a.g("axis").attr({zIndex: s.zIndex || 2}).add(w), o.labelGroup = a.g("axis-labels").attr({zIndex: A.zIndex || 7}).addClass("highcharts-" + o.coll.toLowerCase() + "-labels").add(w)), t || o.isLinked) zt(d, function (t) {
                    u[t] ? u[t].addLabel() : u[t] = new R(o, t)
                }), o.renderUnsquish(), A.reserveSpace !== !1 && (0 === h || 2 === h || {
                    1: "left",
                    3: "right"
                }[h] === o.labelAlign || "center" === o.labelAlign) && zt(d, function (t) {
                    y = dt(u[t].getLabelSize(), y)
                }), o.staggerLines && (y *= o.staggerLines, o.labelOffset = y * (o.opposite ? -1 : 1)); else for (n in u) u[n].destroy(), delete u[n];
                m && m.text && m.enabled !== !1 && (o.axisTitle || ((n = m.textAlign) || (n = (c ? {
                    low: "left",
                    middle: "center",
                    high: "right"
                } : {
                    low: x ? "right" : "left",
                    middle: "center",
                    high: x ? "left" : "right"
                })[m.align]), o.axisTitle = a.text(m.text, 0, 0, m.useHTML).attr({
                    zIndex: 7,
                    rotation: m.rotation || 0,
                    align: n
                }).addClass("highcharts-" + this.coll.toLowerCase() + "-title").css(m.style).add(o.axisGroup), o.axisTitle.isNew = !0), e && (f = o.axisTitle.getBBox()[c ? "height" : "width"], i = m.offset, g = l(i) ? 0 : jQueryt(m.margin, c ? 5 : 10)), o.axisTitle[e ? "show" : "hide"](!0)), o.offset = v * jQueryt(s.offset, b[h]), o.tickRotCorr = o.tickRotCorr || {
                    x: 0,
                    y: 0
                }, a = 0 === h ? -o.labelMetrics().h : 2 === h ? o.tickRotCorr.y : 0, g = Math.abs(y) + g, y && (g -= a, g += v * (c ? jQueryt(A.y, o.tickRotCorr.y + 8 * v) : A.x)), o.axisTitleMargin = jQueryt(i, g), b[h] = dt(b[h], o.axisTitleMargin + f + v * o.offset, g, t && d.length && S ? S[0] : 0), s = s.offset ? 0 : 2 * st(s.lineWidth / 2), r[p] = dt(r[p], s)
            },
            getLinePath: function (t) {
                var e = this.chart, i = this.opposite, n = this.offset, o = this.horiz,
                    r = this.left + (i ? this.width : 0) + n,
                    n = e.chartHeight - this.bottom - (i ? this.height : 0) + n;
                return i && (t *= -1), e.renderer.crispLine([Dt, o ? this.left : r, o ? n : this.top, Ot, o ? e.chartWidth - this.right : r, o ? n : e.chartHeight - this.bottom], t)
            },
            getTitlePosition: function () {
                var t = this.horiz, e = this.left, i = this.top, n = this.len, o = this.options.title, r = t ? e : i,
                    a = this.opposite, s = this.offset, l = o.x || 0, d = o.y || 0,
                    u = this.chart.renderer.fontMetrics(o.style.fontSize).f,
                    n = {low: r + (t ? 0 : n), middle: r + n / 2, high: r + (t ? n : 0)}[o.align],
                    e = (t ? i + this.height : e) + (t ? 1 : -1) * (a ? -1 : 1) * this.axisTitleMargin + (2 === this.side ? u : 0);
                return {
                    x: t ? n + l : e + (a ? this.width : 0) + s + l,
                    y: t ? e + d - (a ? this.height : 0) + s : n + d
                }
            },
            render: function () {
                var t, e, i, n = this, o = n.chart, r = o.renderer, a = n.options, s = n.isLog, l = n.lin2log,
                    d = n.isLinked, u = n.tickPositions, h = n.axisTitle, p = n.ticks, f = n.minorTicks,
                    g = n.alternateBands, m = a.stackLabels, A = a.alternateGridColor, y = n.tickmarkOffset,
                    x = a.lineWidth, b = o.hasRendered && Zt(n.oldMin), v = n.showAxis, w = M(r.globalAnimation);
                n.labelEdge.length = 0, n.overlap = !1, zt([p, f, g], function (t) {
                    for (var e in t) t[e].isActive = !1
                }), (n.hasData() || d) && (n.minorTickInterval && !n.categories && zt(n.getMinorTickPositions(), function (t) {
                    f[t] || (f[t] = new R(n, t, "minor")), b && f[t].isNew && f[t].render(null, !0), f[t].render(null, !1, 1)
                }), u.length && (zt(u, function (t, e) {
                    (!d || t >= n.min && t <= n.max) && (p[t] || (p[t] = new R(n, t)), b && p[t].isNew && p[t].render(e, !0, .1), p[t].render(e))
                }), y && (0 === n.min || n.single)) && (p[-1] || (p[-1] = new R(n, (-1), null, (!0))), p[-1].render(-1)), A && zt(u, function (t, r) {
                    i = u[r + 1] !== D ? u[r + 1] + y : n.max - y, r % 2 === 0 && t < n.max && i <= n.max + (o.polar ? -y : y) && (g[t] || (g[t] = new nt.PlotLineOrBand(n)), e = t + y, g[t].options = {
                        from: s ? l(e) : e,
                        to: s ? l(i) : i,
                        color: A
                    }, g[t].render(), g[t].isActive = !0)
                }), n._addedPlotLB || (zt((a.plotLines || []).concat(a.plotBands || []), function (t) {
                    n.addPlotBandOrLine(t)
                }), n._addedPlotLB = !0)), zt([p, f, g], function (t) {
                    var e, i, n = [], r = w.duration;
                    for (e in t) t[e].isActive || (t[e].render(e, !1, 0), t[e].isActive = !1, n.push(e));
                    c(function () {
                        for (i = n.length; i--;) t[n[i]] && !t[n[i]].isActive && (t[n[i]].destroy(), delete t[n[i]])
                    }, t !== g && o.hasRendered && r ? r : 0)
                }), x && (t = n.getLinePath(x), n.axisLine ? n.axisLine.animate({d: t}) : n.axisLine = r.path(t).attr({
                    stroke: a.lineColor,
                    "stroke-width": x,
                    zIndex: 7
                }).add(n.axisGroup), n.axisLine[v ? "show" : "hide"](!0)), h && v && (h[h.isNew ? "attr" : "animate"](n.getTitlePosition()), h.isNew = !1), m && m.enabled && n.renderStackTotals(), n.isDirty = !1
            },
            redraw: function () {
                this.visible && (this.render(), zt(this.plotLinesAndBands, function (t) {
                    t.render()
                })), zt(this.series, function (t) {
                    t.isDirty = !0
                })
            },
            destroy: function (t) {
                var e, i = this, n = i.stacks, o = i.plotLinesAndBands;
                t || Wt(i);
                for (e in n) S(n[e]), n[e] = null;
                for (zt([i.ticks, i.minorTicks, i.alternateBands], function (t) {
                    S(t)
                }), t = o.length; t--;) o[t].destroy();
                zt("stackTotalGroup,axisLine,axisTitle,axisGroup,gridGroup,labelGroup,cross".split(","), function (t) {
                    i[t] && (i[t] = i[t].destroy())
                }), this._addedPlotLB = this.chart._labelPanes = this.ordinalSlope = void 0
            },
            drawCrosshair: function (t, e) {
                var i, n, o, r = this.crosshair;
                t || (t = this.cross && this.cross.e), this.crosshair && (l(e) || !jQueryt(r.snap, !0)) !== !1 ? (jQueryt(r.snap, !0) ? l(e) && (i = this.isXAxis ? e.plotX : this.len - e.plotY) : i = this.horiz ? t.chartX - this.pos : this.len - t.chartY + this.pos, i = this.isRadial ? this.getPlotLinePath(this.isXAxis ? e.x : jQueryt(e.stackY, e.y)) || null : this.getPlotLinePath(null, null, null, null, i) || null, null === i ? this.hideCrosshair() : (n = this.categories && !this.isRadial, o = jQueryt(r.width, n ? this.transA : 1), this.cross ? this.cross.attr({
                    d: i,
                    visibility: "visible",
                    "stroke-width": o
                }) : (n = {
                    "pointer-events": "none",
                    "stroke-width": o,
                    stroke: r.color || (n ? "rgba(155,200,255,0.2)" : "#C0C0C0"),
                    zIndex: jQueryt(r.zIndex, 2)
                }, r.dashStyle && (n.dashstyle = r.dashStyle), this.cross = this.chart.renderer.path(i).attr(n).add()), this.cross.e = t)) : this.hideCrosshair()
            },
            hideCrosshair: function () {
                this.cross && this.cross.hide()
            }
        }, Kt(se.prototype, {
            getPlotBandPath: function (t, e) {
                var i = this.getPlotLinePath(e, null, null, !0), n = this.getPlotLinePath(t, null, null, !0);
                return n && i ? (n.flat = n.toString() === i.toString(), n.push(i[4], i[5], i[1], i[2])) : n = null, n
            }, addPlotBand: function (t) {
                return this.addPlotBandOrLine(t, "plotBands")
            }, addPlotLine: function (t) {
                return this.addPlotBandOrLine(t, "plotLines")
            }, addPlotBandOrLine: function (t, e) {
                var i = new nt.PlotLineOrBand(this, t).render(), n = this.userOptions;
                return i && (e && (n[e] = n[e] || [], n[e].push(t)), this.plotLinesAndBands.push(i)), i
            }, removePlotBandOrLine: function (t) {
                for (var e = this.plotLinesAndBands, i = this.options, n = this.userOptions, o = e.length; o--;) e[o].id === t && e[o].destroy();
                zt([i.plotLines || [], n.plotLines || [], i.plotBands || [], n.plotBands || []], function (e) {
                    for (o = e.length; o--;) e[o].id === t && s(e, e[o])
                })
            }
        }), se.prototype.getTimeTicks = function (t, e, i, n) {
            var o, r = [], a = {}, s = F.global.useUTC, d = new z(e - m(e)), u = t.unitRange, c = t.count;
            if (l(e)) {
                d[K](u >= V.second ? 0 : c * st(d.getMilliseconds() / c)), u >= V.second && d[J](u >= V.minute ? 0 : c * st(d.getSeconds() / c)), u >= V.minute && d[Z](u >= V.hour ? 0 : c * st(d[H]() / c)), u >= V.hour && d[jQuery](u >= V.day ? 0 : c * st(d[W]() / c)), u >= V.day && d[tt](u >= V.month ? 1 : c * st(d[X]() / c)), u >= V.month && (d[et](u >= V.year ? 0 : c * st(d[q]() / c)), o = d[Q]()), u >= V.year && (o -= o % c, d[it](o)), u === V.week && d[tt](d[X]() - d[Y]() + jQueryt(n, 1)), e = 1, (G || _) && (d = d.getTime(), d = new z(d + m(d))), o = d[Q]();
                for (var n = d.getTime(), h = d[q](), p = d[X](), f = !s || !!_, g = (V.day + (s ? m(d) : 6e4 * d.getTimezoneOffset())) % V.day; n < i;) r.push(n), u === V.year ? n = j(o + e * c, 0) : u === V.month ? n = j(o, h + e * c) : !f || u !== V.day && u !== V.week ? n += u * c : n = j(o, h, p + e * c * (u === V.day ? 1 : 7)), e++;
                r.push(n), zt(jt(r, function (t) {
                    return u <= V.hour && t % V.day === g
                }), function (t) {
                    a[t] = "day"
                })
            }
            return r.info = Kt(t, {higherRanks: a, totalRange: u * c}), r
        }, se.prototype.normalizeTimeTickInterval = function (t, e) {
            var i,
                n = e || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]],
                o = n[n.length - 1], r = V[o[0]], a = o[1];
            for (i = 0; i < n.length && (o = n[i], r = V[o[0]], a = o[1], !(n[i + 1] && t <= (r * a[a.length - 1] + V[n[i + 1][0]]) / 2)); i++) ;
            return r === V.year && t < 5 * r && (a = [1, 2, 5]), n = x(t / r, a, "year" === o[0] ? dt(y(t / r), 1) : 1), {
                unitRange: r,
                count: n,
                unitName: o[0]
            }
        }, se.prototype.getLogTickPositions = function (t, e, i, n) {
            var o = this.options, r = this.len, a = this.lin2log, s = this.log2lin, l = [];
            if (n || (this._minorAutoInterval = null), t >= .5) t = at(t), l = this.getLinearTickPositions(t, e, i); else if (t >= .08) for (var d, u, c, h, p, r = st(e), o = t > .3 ? [1, 2, 4] : t > .15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; r < i + 1 && !p; r++) for (u = o.length, d = 0; d < u && !p; d++) c = s(a(r) * o[d]), c > e && (!n || h <= i) && h !== D && l.push(h), h > i && (p = !0), h = c; else e = a(e), i = a(i), t = o[n ? "minorTickInterval" : "tickInterval"], t = jQueryt("auto" === t ? null : t, this._minorAutoInterval, (i - e) * (o.tickPixelInterval / (n ? 5 : 1)) / ((n ? r / this.tickPositions.length : r) || 1)), t = x(t, null, y(t)), l = _t(this.getLinearTickPositions(t, e, i), s), n || (this._minorAutoInterval = t / 5);
            return n || (this.tickInterval = t), l
        }, se.prototype.log2lin = function (t) {
            return rt.log(t) / rt.LN10
        }, se.prototype.lin2log = function (t) {
            return rt.pow(10, t)
        };
        var le = nt.Tooltip = function () {
            this.init.apply(this, arguments)
        };
        le.prototype = {
            init: function (t, e) {
                var i = e.borderWidth, n = e.style, r = o(n.padding);
                this.chart = t, this.options = e, this.crosshairs = [], this.now = {
                    x: 0,
                    y: 0
                }, this.isHidden = !0, this.label = t.renderer.label("", 0, 0, e.shape || "callout", null, null, e.useHTML, null, "tooltip").attr({
                    padding: r,
                    fill: e.backgroundColor,
                    "stroke-width": i,
                    r: e.borderRadius,
                    zIndex: 8
                }).css(n).css({padding: 0}).add().attr({y: -9e9}), kt || this.label.shadow(e.shadow), this.shared = e.shared
            }, destroy: function () {
                this.label && (this.label = this.label.destroy()), clearTimeout(this.hideTimer), clearTimeout(this.tooltipTimeout)
            }, move: function (t, e, i, n) {
                var o = this, r = o.now,
                    a = o.options.animation !== !1 && !o.isHidden && (ct(t - r.x) > 1 || ct(e - r.y) > 1),
                    s = o.followPointer || o.len > 1;
                Kt(r, {
                    x: a ? (2 * r.x + t) / 3 : t,
                    y: a ? (r.y + e) / 2 : e,
                    anchorX: s ? D : a ? (2 * r.anchorX + i) / 3 : i,
                    anchorY: s ? D : a ? (r.anchorY + n) / 2 : n
                }), o.label.attr(r), a && (clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () {
                    o && o.move(t, e, i, n)
                }, 32))
            }, hide: function (t) {
                var e = this;
                clearTimeout(this.hideTimer), t = jQueryt(t, this.options.hideDelay, 500), this.isHidden || (this.hideTimer = c(function () {
                    e.label[t ? "fadeOut" : "hide"](), e.isHidden = !0
                }, t))
            }, getAnchor: function (t, e) {
                var i, n, o, r = this.chart, a = r.inverted, s = r.plotTop, l = r.plotLeft, d = 0, c = 0, t = u(t);
                return i = t[0].tooltipPos, this.followPointer && e && (e.chartX === D && (e = r.pointer.normalize(e)), i = [e.chartX - r.plotLeft, e.chartY - s]), i || (zt(t, function (t) {
                    n = t.series.yAxis, o = t.series.xAxis, d += t.plotX + (!a && o ? o.left - l : 0), c += (t.plotLow ? (t.plotLow + t.plotHigh) / 2 : t.plotY) + (!a && n ? n.top - s : 0)
                }), d /= t.length, c /= t.length, i = [a ? r.plotWidth - c : d, this.shared && !a && t.length > 1 && e ? e.chartY - s : a ? r.plotHeight - d : c]), _t(i, at)
            }, getPosition: function (t, e, i) {
                var n, o = this.chart, r = this.distance, a = {}, s = i.h || 0,
                    l = ["y", o.chartHeight, e, i.plotY + o.plotTop, o.plotTop, o.plotTop + o.plotHeight],
                    d = ["x", o.chartWidth, t, i.plotX + o.plotLeft, o.plotLeft, o.plotLeft + o.plotWidth],
                    u = !this.followPointer && jQueryt(i.ttBelow, !o.inverted == !!i.negative),
                    c = function (t, e, i, n, o, l) {
                        var d = i < n - r, c = n + r + i < e, h = n - r - i;
                        if (n += r, u && c) a[t] = n; else if (!u && d) a[t] = h; else if (d) a[t] = ut(l - i, h - s < 0 ? h : h - s); else {
                            if (!c) return !1;
                            a[t] = dt(o, n + s + i > e ? n : n + s)
                        }
                    }, h = function (t, e, i, n) {
                        var o;
                        return n < r || n > e - r ? o = !1 : a[t] = n < i / 2 ? 1 : n > e - i / 2 ? e - i - 2 : n - i / 2, o
                    }, p = function (t) {
                        var e = l;
                        l = d, d = e, n = t
                    }, f = function () {
                        c.apply(0, l) !== !1 ? h.apply(0, d) === !1 && !n && (p(!0), f()) : n ? a.x = a.y = 0 : (p(!0), f())
                    };
                return (o.inverted || this.len > 1) && p(), f(), a
            }, defaultFormatter: function (t) {
                var e, i = this.points || u(this);
                return e = [t.tooltipFooterHeaderFormatter(i[0])], e = e.concat(t.bodyFormatter(i)), e.push(t.tooltipFooterHeaderFormatter(i[0], !0)), e.join("")
            }, refresh: function (t, e) {
                var i, n, o, r, a = this.chart, s = this.label, l = this.options, d = {}, c = [];
                r = l.formatter || this.defaultFormatter;
                var h, d = a.hoverPoints, p = this.shared;
                clearTimeout(this.hideTimer), this.followPointer = u(t)[0].series.tooltipOptions.followPointer, o = this.getAnchor(t, e), i = o[0], n = o[1], !p || t.series && t.series.noSharedTooltip ? d = t.getLabelConfig() : (a.hoverPoints = t, d && zt(d, function (t) {
                    t.setState()
                }), zt(t, function (t) {
                    t.setState("hover"), c.push(t.getLabelConfig())
                }), d = {
                    x: t[0].category,
                    y: t[0].y
                }, d.points = c, this.len = c.length, t = t[0]), r = r.call(d, this), d = t.series, this.distance = jQueryt(d.tooltipOptions.distance, 16), r === !1 ? this.hide() : (this.isHidden && (qt(s), s.attr("opacity", 1).show()), s.attr({text: r}), h = l.borderColor || t.color || d.color || "#606060", s.attr({stroke: h}), this.updatePosition({
                    plotX: i,
                    plotY: n,
                    negative: t.negative,
                    ttBelow: t.ttBelow,
                    h: o[2] || 0
                }), this.isHidden = !1), Yt(a, "tooltipRefresh", {
                    text: r,
                    x: i + a.plotLeft,
                    y: n + a.plotTop,
                    borderColor: h
                })
            }, updatePosition: function (t) {
                var e = this.chart, i = this.label,
                    i = (this.options.positioner || this.getPosition).call(this, i.width, i.height, t);
                this.move(at(i.x), at(i.y || 0), t.plotX + e.plotLeft, t.plotY + e.plotTop)
            }, getXDateFormat: function (t, e, i) {
                var n, o, r, e = e.dateTimeLabelFormats, a = i && i.closestPointRange,
                    s = {millisecond: 15, second: 12, minute: 9, hour: 6, day: 3}, l = "millisecond";
                if (a) {
                    r = N("%m-%d %H:%M:%S.%L", t.x);
                    for (o in V) {
                        if (a === V.week && +N("%w", t.x) === i.options.startOfWeek && "00:00:00.000" === r.substr(6)) {
                            o = "week";
                            break
                        }
                        if (V[o] > a) {
                            o = l;
                            break
                        }
                        if (s[o] && r.substr(s[o]) !== "01-01 00:00:00.000".substr(s[o])) break;
                        "week" !== o && (l = o)
                    }
                    o && (n = e[o])
                } else n = e.day;
                return n || e.year
            }, tooltipFooterHeaderFormatter: function (t, e) {
                var i = e ? "footer" : "header", n = t.series, o = n.tooltipOptions, r = o.xDateFormat, a = n.xAxis,
                    s = a && "datetime" === a.options.type && Zt(t.key), i = o[i + "Format"];
                return s && !r && (r = this.getXDateFormat(t, o, a)), s && r && (i = i.replace("{point.key}", "{point.key:" + r + "}")), A(i, {
                    point: t,
                    series: n
                })
            }, bodyFormatter: function (t) {
                return _t(t, function (t) {
                    var e = t.series.tooltipOptions;
                    return (e.pointFormatter || t.point.tooltipFormatter).call(t.point, e.pointFormat)
                })
            }
        };
        var de;
        B = ot && ot.documentElement.ontouchstart !== D;
        var ue = nt.Pointer = function (t, e) {
            this.init(t, e)
        };
        if (ue.prototype = {
                init: function (t, e) {
                    var i, n = e.chart, o = n.events, r = kt ? "" : n.zoomType, n = t.inverted;
                    this.options = e, this.chart = t, this.zoomX = i = /x/.test(r), this.zoomY = r = /y/.test(r), this.zoomHor = i && !n || r && n, this.zoomVert = r && !n || i && n, this.hasZoom = i || r, this.runChartClick = o && !!o.click, this.pinchDown = [], this.lastValidTouch = {}, nt.Tooltip && e.tooltip.enabled && (t.tooltip = new le(t, e.tooltip), this.followTouchMove = jQueryt(e.tooltip.followTouchMove, !0)), this.setDOMEvents()
                }, normalize: function (e, i) {
                    var n, o, e = e || t.event;
                    return e.target || (e.target = e.srcElement), o = e.touches ? e.touches.length ? e.touches.item(0) : e.changedTouches[0] : e, i || (this.chartPosition = i = Gt(this.chart.container)), o.pageX === D ? (n = dt(e.x, e.clientX - i.left), o = e.y) : (n = o.pageX - i.left, o = o.pageY - i.top), Kt(e, {
                        chartX: at(n),
                        chartY: at(o)
                    })
                }, getCoordinates: function (t) {
                    var e = {xAxis: [], yAxis: []};
                    return zt(this.chart.axes, function (i) {
                        e[i.isXAxis ? "xAxis" : "yAxis"].push({
                            axis: i,
                            value: i.toValue(t[i.horiz ? "chartX" : "chartY"])
                        })
                    }), e
                }, runPointActions: function (t) {
                    var e, i, n, o, r = this.chart, a = r.series, s = r.tooltip, l = !!s && s.shared, d = r.hoverPoint,
                        u = r.hoverSeries, c = [Number.MAX_VALUE, Number.MAX_VALUE], h = [], p = [];
                    if (!l && !u) for (e = 0; e < a.length; e++) !a[e].directTouch && a[e].options.stickyTracking || (a = []);
                    if (u && (l ? u.noSharedTooltip : u.directTouch) && d ? p = [d] : (zt(a, function (e) {
                            i = e.noSharedTooltip && l, n = !l && e.directTouch, e.visible && !i && !n && jQueryt(e.options.enableMouseTracking, !0) && (o = e.searchPoint(t, !i && 1 === e.kdDimensions)) && o.series && h.push(o)
                        }), zt(h, function (t) {
                            t && zt(["dist", "distX"], function (e, i) {
                                if (Zt(t[e])) {
                                    var n = t[e] === c[i] && t.series.group.zIndex >= p[i].series.group.zIndex;
                                    (t[e] < c[i] || n) && (c[i] = t[e], p[i] = t)
                                }
                            })
                        })), l) for (e = h.length; e--;) (h[e].clientX !== p[1].clientX || h[e].series.noSharedTooltip) && h.splice(e, 1);
                    p[0] && (p[0] !== this.prevKDPoint || s && s.isHidden) ? l && !p[0].series.noSharedTooltip ? (h.length && s && s.refresh(h, t), zt(h, function (e) {
                        e.onMouseOver(t, e !== (u && u.directTouch && d || p[0]))
                    }), this.prevKDPoint = p[1]) : (s && s.refresh(p[0], t), u && u.directTouch || p[0].onMouseOver(t), this.prevKDPoint = p[0]) : (a = u && u.tooltipOptions.followPointer, s && a && !s.isHidden && (a = s.getAnchor([{}], t), s.updatePosition({
                        plotX: a[0],
                        plotY: a[1]
                    }))), this._onDocumentMouseMove || (this._onDocumentMouseMove = function (t) {
                        It[de] && It[de].pointer.onDocumentMouseMove(t)
                    }, Ht(ot, "mousemove", this._onDocumentMouseMove)), zt(l ? h : [jQueryt(d, p[1])], function (e) {
                        zt(r.axes, function (i) {
                            (!e || e.series[i.coll] === i) && i.drawCrosshair(t, e)
                        })
                    })
                }, reset: function (t, e) {
                    var i = this.chart, n = i.hoverSeries, o = i.hoverPoint, r = i.hoverPoints, a = i.tooltip,
                        s = a && a.shared ? r : o;
                    t && s && zt(u(s), function (e) {
                        e.series.isCartesian && void 0 === e.plotX && (t = !1)
                    }), t ? a && s && (a.refresh(s), o && (o.setState(o.state, !0), zt(i.axes, function (t) {
                        t.crosshair && t.drawCrosshair(null, o)
                    }))) : (o && o.onMouseOut(), r && zt(r, function (t) {
                        t.setState()
                    }), n && n.onMouseOut(), a && a.hide(e), this._onDocumentMouseMove && (Wt(ot, "mousemove", this._onDocumentMouseMove), this._onDocumentMouseMove = null), zt(i.axes, function (t) {
                        t.hideCrosshair()
                    }), this.hoverX = this.prevKDPoint = i.hoverPoints = i.hoverPoint = null)
                }, scaleGroups: function (t, e) {
                    var i, n = this.chart;
                    zt(n.series, function (o) {
                        i = t || o.getPlotBox(), o.xAxis && o.xAxis.zoomEnabled && (o.group.attr(i), o.markerGroup && (o.markerGroup.attr(i), o.markerGroup.clip(e ? n.clipRect : null)), o.dataLabelsGroup && o.dataLabelsGroup.attr(i))
                    }), n.clipRect.attr(e || n.clipBox)
                }, dragStart: function (t) {
                    var e = this.chart;
                    e.mouseIsDown = t.type, e.cancelClick = !1, e.mouseDownX = this.mouseDownX = t.chartX, e.mouseDownY = this.mouseDownY = t.chartY
                }, drag: function (t) {
                    var e, i = this.chart, n = i.options.chart, o = t.chartX, r = t.chartY, a = this.zoomHor,
                        s = this.zoomVert, l = i.plotLeft, d = i.plotTop, u = i.plotWidth, c = i.plotHeight,
                        h = this.selectionMarker, p = this.mouseDownX, f = this.mouseDownY,
                        g = n.panKey && t[n.panKey + "Key"];
                    h && h.touch || (o < l ? o = l : o > l + u && (o = l + u), r < d ? r = d : r > d + c && (r = d + c), this.hasDragged = Math.sqrt(Math.pow(p - o, 2) + Math.pow(f - r, 2)), this.hasDragged > 10 && (e = i.isInsidePlot(p - l, f - d), i.hasCartesianSeries && (this.zoomX || this.zoomY) && e && !g && !h && (this.selectionMarker = h = i.renderer.rect(l, d, a ? 1 : u, s ? 1 : c, 0).attr({
                        fill: n.selectionMarkerFill || "rgba(69,114,167,0.25)",
                        zIndex: 7
                    }).add()), h && a && (o -= p, h.attr({
                        width: ct(o),
                        x: (o > 0 ? 0 : o) + p
                    })), h && s && (o = r - f, h.attr({
                        height: ct(o),
                        y: (o > 0 ? 0 : o) + f
                    })), e && !h && n.panning && i.pan(t, n.panning)))
                }, drop: function (t) {
                    var e = this, i = this.chart, n = this.hasPinched;
                    if (this.selectionMarker) {
                        var o, r = {originalEvent: t, xAxis: [], yAxis: []}, a = this.selectionMarker,
                            s = a.attr ? a.attr("x") : a.x, d = a.attr ? a.attr("y") : a.y,
                            u = a.attr ? a.attr("width") : a.width, c = a.attr ? a.attr("height") : a.height;
                        (this.hasDragged || n) && (zt(i.axes, function (i) {
                            if (i.zoomEnabled && l(i.min) && (n || e[{xAxis: "zoomX", yAxis: "zoomY"}[i.coll]])) {
                                var a = i.horiz, h = "touchend" === t.type ? i.minPixelPadding : 0,
                                    p = i.toValue((a ? s : d) + h), a = i.toValue((a ? s + u : d + c) - h);
                                r[i.coll].push({axis: i, min: ut(p, a), max: dt(p, a)}), o = !0
                            }
                        }), o && Yt(i, "selection", r, function (t) {
                            i.zoom(Kt(t, n ? {animation: !1} : null))
                        })), this.selectionMarker = this.selectionMarker.destroy(), n && this.scaleGroups()
                    }
                    i && (h(i.container, {cursor: i._cursor}), i.cancelClick = this.hasDragged > 10, i.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [])
                }, onContainerMouseDown: function (t) {
                    t = this.normalize(t), t.preventDefault && t.preventDefault(), this.dragStart(t)
                }, onDocumentMouseUp: function (t) {
                    It[de] && It[de].pointer.drop(t)
                }, onDocumentMouseMove: function (t) {
                    var e = this.chart, i = this.chartPosition, t = this.normalize(t, i);
                    i && !this.inClass(t.target, "highcharts-tracker") && !e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop) && this.reset()
                }, onContainerMouseLeave: function (t) {
                    var e = It[de];
                    e && (t.relatedTarget || t.toElement) && (e.pointer.reset(), e.pointer.chartPosition = null)
                }, onContainerMouseMove: function (t) {
                    var e = this.chart;
                    l(de) && It[de] && It[de].mouseIsDown || (de = e.index), t = this.normalize(t), t.returnValue = !1, "mousedown" === e.mouseIsDown && this.drag(t), (this.inClass(t.target, "highcharts-tracker") || e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop)) && !e.openMenu && this.runPointActions(t)
                }, inClass: function (t, e) {
                    for (var i; t;) {
                        if (i = d(t, "class")) {
                            if (i.indexOf(e) !== -1) return !0;
                            if (i.indexOf("highcharts-container") !== -1) return !1
                        }
                        t = t.parentNode
                    }
                }, onTrackerMouseOut: function (t) {
                    var e = this.chart.hoverSeries, t = t.relatedTarget || t.toElement;
                    !e || !t || e.options.stickyTracking || this.inClass(t, "highcharts-tooltip") || this.inClass(t, "highcharts-series-" + e.index) || e.onMouseOut()
                }, onContainerClick: function (t) {
                    var e = this.chart, i = e.hoverPoint, n = e.plotLeft, o = e.plotTop, t = this.normalize(t);
                    e.cancelClick || (i && this.inClass(t.target, "highcharts-tracker") ? (Yt(i.series, "click", Kt(t, {point: i})), e.hoverPoint && i.firePointEvent("click", t)) : (Kt(t, this.getCoordinates(t)), e.isInsidePlot(t.chartX - n, t.chartY - o) && Yt(e, "click", t)))
                }, setDOMEvents: function () {
                    var t = this, e = t.chart.container;
                    e.onmousedown = function (e) {
                        t.onContainerMouseDown(e)
                    }, e.onmousemove = function (e) {
                        t.onContainerMouseMove(e)
                    }, e.onclick = function (e) {
                        t.onContainerClick(e)
                    }, Ht(e, "mouseleave", t.onContainerMouseLeave), 1 === Rt && Ht(ot, "mouseup", t.onDocumentMouseUp), B && (e.ontouchstart = function (e) {
                        t.onContainerTouchStart(e)
                    }, e.ontouchmove = function (e) {
                        t.onContainerTouchMove(e)
                    }, 1 === Rt && Ht(ot, "touchend", t.onDocumentTouchEnd))
                }, destroy: function () {
                    var t;
                    Wt(this.chart.container, "mouseleave", this.onContainerMouseLeave), Rt || (Wt(ot, "mouseup", this.onDocumentMouseUp), Wt(ot, "touchend", this.onDocumentTouchEnd)), clearInterval(this.tooltipTimeout);
                    for (t in this) this[t] = null
                }
            }, Kt(nt.Pointer.prototype, {
                pinchTranslate: function (t, e, i, n, o, r) {
                    (this.zoomHor || this.pinchHor) && this.pinchTranslateDirection(!0, t, e, i, n, o, r), (this.zoomVert || this.pinchVert) && this.pinchTranslateDirection(!1, t, e, i, n, o, r)
                }, pinchTranslateDirection: function (t, e, i, n, o, r, a, s) {
                    var l, d, u, c = this.chart, h = t ? "x" : "y", p = t ? "X" : "Y", f = "chart" + p,
                        g = t ? "width" : "height", m = c["plot" + (t ? "Left" : "Top")], A = s || 1, y = c.inverted,
                        x = c.bounds[t ? "h" : "v"], b = 1 === e.length, v = e[0][f], w = i[0][f], S = !b && e[1][f],
                        E = !b && i[1][f], i = function () {
                            !b && ct(v - S) > 20 && (A = s || ct(w - E) / ct(v - S)), d = (m - w) / A + v, l = c["plot" + (t ? "Width" : "Height")] / A
                        };
                    i(), e = d, e < x.min ? (e = x.min, u = !0) : e + l > x.max && (e = x.max - l, u = !0), u ? (w -= .8 * (w - a[h][0]), b || (E -= .8 * (E - a[h][1])), i()) : a[h] = [w, E], y || (r[h] = d - m, r[g] = l), r = y ? 1 / A : A, o[g] = l, o[h] = e, n[y ? t ? "scaleY" : "scaleX" : "scale" + p] = A, n["translate" + p] = r * m + (w - r * v)
                }, pinch: function (t) {
                    var e = this, i = e.chart, n = e.pinchDown, o = t.touches, r = o.length, a = e.lastValidTouch,
                        s = e.hasZoom, l = e.selectionMarker, d = {},
                        u = 1 === r && (e.inClass(t.target, "highcharts-tracker") && i.runTrackerClick || e.runChartClick),
                        c = {};
                    r > 1 && (e.initiated = !0), s && e.initiated && !u && t.preventDefault(), _t(o, function (t) {
                        return e.normalize(t)
                    }), "touchstart" === t.type ? (zt(o, function (t, e) {
                        n[e] = {chartX: t.chartX, chartY: t.chartY}
                    }), a.x = [n[0].chartX, n[1] && n[1].chartX], a.y = [n[0].chartY, n[1] && n[1].chartY], zt(i.axes, function (t) {
                        if (t.zoomEnabled) {
                            var e = i.bounds[t.horiz ? "h" : "v"], n = t.minPixelPadding,
                                o = t.toPixels(jQueryt(t.options.min, t.dataMin)),
                                r = t.toPixels(jQueryt(t.options.max, t.dataMax)), a = ut(o, r), o = dt(o, r);
                            e.min = ut(t.pos, a - n), e.max = dt(t.pos + t.len, o + n)
                        }
                    }), e.res = !0) : n.length && (l || (e.selectionMarker = l = Kt({
                        destroy: Tt,
                        touch: !0
                    }, i.plotBox)), e.pinchTranslate(n, o, d, l, c, a), e.hasPinched = s, e.scaleGroups(d, c), !s && e.followTouchMove && 1 === r ? this.runPointActions(e.normalize(t)) : e.res && (e.res = !1, this.reset(!1, 0)))
                }, touch: function (t, e) {
                    var i, n = this.chart;
                    de = n.index, 1 === t.touches.length ? (t = this.normalize(t), n.isInsidePlot(t.chartX - n.plotLeft, t.chartY - n.plotTop) && !n.openMenu ? (e && this.runPointActions(t), "touchmove" === t.type && (n = this.pinchDown, i = !!n[0] && Math.sqrt(Math.pow(n[0].chartX - t.chartX, 2) + Math.pow(n[0].chartY - t.chartY, 2)) >= 4), jQueryt(i, !0) && this.pinch(t)) : e && this.reset()) : 2 === t.touches.length && this.pinch(t)
                }, onContainerTouchStart: function (t) {
                    this.touch(t, !0)
                }, onContainerTouchMove: function (t) {
                    this.touch(t)
                }, onDocumentTouchEnd: function (t) {
                    It[de] && It[de].pointer.drop(t)
                }
            }), t.PointerEvent || t.MSPointerEvent) {
            var ce = {}, he = !!t.PointerEvent, pe = function () {
                var t, e = [];
                e.item = function (t) {
                    return this[t]
                };
                for (t in ce) ce.hasOwnProperty(t) && e.push({
                    pageX: ce[t].pageX,
                    pageY: ce[t].pageY,
                    target: ce[t].target
                });
                return e
            }, fe = function (t, e, i, n) {
                "touch" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_TOUCH || !It[de] || (n(t), n = It[de].pointer, n[e]({
                    type: i,
                    target: t.currentTarget,
                    preventDefault: Tt,
                    touches: pe()
                }))
            };
            Kt(ue.prototype, {
                onContainerPointerDown: function (t) {
                    fe(t, "onContainerTouchStart", "touchstart", function (t) {
                        ce[t.pointerId] = {pageX: t.pageX, pageY: t.pageY, target: t.currentTarget}
                    })
                }, onContainerPointerMove: function (t) {
                    fe(t, "onContainerTouchMove", "touchmove", function (t) {
                        ce[t.pointerId] = {
                            pageX: t.pageX,
                            pageY: t.pageY
                        }, ce[t.pointerId].target || (ce[t.pointerId].target = t.currentTarget)
                    })
                }, onDocumentPointerUp: function (t) {
                    fe(t, "onDocumentTouchEnd", "touchend", function (t) {
                        delete ce[t.pointerId]
                    })
                }, batchMSEvents: function (t) {
                    t(this.chart.container, he ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown), t(this.chart.container, he ? "pointermove" : "MSPointerMove", this.onContainerPointerMove), t(ot, he ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp)
                }
            }), te(ue.prototype, "init", function (t, e, i) {
                t.call(this, e, i), this.hasZoom && h(e.container, {"-ms-touch-action": "none", "touch-action": "none"})
            }), te(ue.prototype, "setDOMEvents", function (t) {
                t.apply(this), (this.hasZoom || this.followTouchMove) && this.batchMSEvents(Ht)
            }), te(ue.prototype, "destroy", function (t) {
                this.batchMSEvents(Wt), t.call(this)
            })
        }
        var ge = nt.Legend = function (t, e) {
            this.init(t, e)
        };
        ge.prototype = {
            init: function (t, e) {
                var i = this, o = e.itemStyle, r = e.itemMarginTop || 0;
                this.options = e, e.enabled && (i.itemStyle = o, i.itemHiddenStyle = n(o, e.itemHiddenStyle), i.itemMarginTop = r, i.padding = o = jQueryt(e.padding, 8), i.initialItemX = o, i.initialItemY = o - 5, i.maxItemWidth = 0, i.chart = t, i.itemHeight = 0, i.symbolWidth = jQueryt(e.symbolWidth, 16), i.pages = [], i.render(), Ht(i.chart, "endResize", function () {
                    i.positionCheckboxes()
                }))
            }, colorizeItem: function (t, e) {
                var i, n = this.options, o = t.legendItem, r = t.legendLine, a = t.legendSymbol,
                    s = this.itemHiddenStyle.color, n = e ? n.itemStyle.color : s,
                    l = e ? t.legendColor || t.color || "#CCC" : s, s = t.options && t.options.marker, d = {fill: l};
                if (o && o.css({fill: n, color: n}), r && r.attr({stroke: l}), a) {
                    if (s && a.isMarker) for (i in d.stroke = l, s = t.convertAttribs(s)) o = s[i], o !== D && (d[i] = o);
                    a.attr(d)
                }
            }, positionItem: function (t) {
                var e = this.options, i = e.symbolPadding, e = !e.rtl, n = t._legendItemPos, o = n[0], n = n[1],
                    r = t.checkbox;
                (t = t.legendGroup) && t.element && t.translate(e ? o : this.legendWidth - o - 2 * i - 4, n), r && (r.x = o, r.y = n)
            }, destroyItem: function (t) {
                var e = t.checkbox;
                zt(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function (e) {
                    t[e] && (t[e] = t[e].destroy())
                }), e && E(t.checkbox)
            }, destroy: function () {
                var t = this.group, e = this.box;
                e && (this.box = e.destroy()), t && (this.group = t.destroy())
            }, positionCheckboxes: function (t) {
                var e, i = this.group.alignAttr, n = this.clipHeight || this.legendHeight, o = this.titleHeight;
                i && (e = i.translateY, zt(this.allItems, function (r) {
                    var a, s = r.checkbox;
                    s && (a = e + o + s.y + (t || 0) + 3, h(s, {
                        left: i.translateX + r.checkboxOffset + s.x - 20 + "px",
                        top: a + "px",
                        display: a > e - 6 && a < e + n - 6 ? "" : "none"
                    }))
                }))
            }, renderTitle: function () {
                var t = this.padding, e = this.options.title, i = 0;
                e.text && (this.title || (this.title = this.chart.renderer.label(e.text, t - 3, t - 4, null, null, null, null, null, "legend-title").attr({zIndex: 1}).css(e.style).add(this.group)), t = this.title.getBBox(), i = t.height, this.offsetWidth = t.width, this.contentGroup.attr({translateY: i})), this.titleHeight = i
            }, setText: function (t) {
                var e = this.options;
                t.legendItem.attr({text: e.labelFormat ? A(e.labelFormat, t) : e.labelFormatter.call(t)})
            }, renderItem: function (t) {
                var e = this.chart, i = e.renderer, o = this.options, r = "horizontal" === o.layout,
                    a = this.symbolWidth, s = o.symbolPadding, l = this.itemStyle, d = this.itemHiddenStyle,
                    u = this.padding, c = r ? jQueryt(o.itemDistance, 20) : 0, h = !o.rtl, p = o.width,
                    f = o.itemMarginBottom || 0, g = this.itemMarginTop, m = this.initialItemX, A = t.legendItem,
                    y = t.series && t.series.drawLegendSymbol ? t.series : t, x = y.options,
                    x = this.createCheckboxForItem && x && x.showCheckbox, b = o.useHTML;
                A || (t.legendGroup = i.g("legend-item").attr({zIndex: 1}).add(this.scrollGroup), t.legendItem = A = i.text("", h ? a + s : -s, this.baseline || 0, b).css(n(t.visible ? l : d)).attr({
                    align: h ? "left" : "right",
                    zIndex: 2
                }).add(t.legendGroup), this.baseline || (this.fontMetrics = i.fontMetrics(l.fontSize, A), this.baseline = this.fontMetrics.f + 3 + g, A.attr("y", this.baseline)), y.drawLegendSymbol(this, t), this.setItemEvents && this.setItemEvents(t, A, b, l, d), x && this.createCheckboxForItem(t)), this.colorizeItem(t, t.visible), this.setText(t), i = A.getBBox(), a = t.checkboxOffset = o.itemWidth || t.legendItemWidth || a + s + i.width + c + (x ? 20 : 0), this.itemHeight = s = at(t.legendItemHeight || i.height), r && this.itemX - m + a > (p || e.chartWidth - 2 * u - m - o.x) && (this.itemX = m, this.itemY += g + this.lastLineHeight + f, this.lastLineHeight = 0), this.maxItemWidth = dt(this.maxItemWidth, a), this.lastItemY = g + this.itemY + f, this.lastLineHeight = dt(s, this.lastLineHeight), t._legendItemPos = [this.itemX, this.itemY], r ? this.itemX += a : (this.itemY += g + s + f, this.lastLineHeight = s), this.offsetWidth = p || dt((r ? this.itemX - m - c : a) + u, this.offsetWidth)
            }, getAllItems: function () {
                var t = [];
                return zt(this.chart.series, function (e) {
                    var i = e.options;
                    jQueryt(i.showInLegend, !l(i.linkedTo) && D, !0) && (t = t.concat(e.legendItems || ("point" === i.legendType ? e.data : e)))
                }), t
            }, adjustMargins: function (t, e) {
                var i = this.chart, n = this.options,
                    o = n.align.charAt(0) + n.verticalAlign.charAt(0) + n.layout.charAt(0);
                n.floating || zt([/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/], function (r, a) {
                    r.test(o) && !l(t[a]) && (i[Ut[a]] = dt(i[Ut[a]], i.legend[(a + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][a] * n[a % 2 ? "x" : "y"] + jQueryt(n.margin, 12) + e[a]))
                })
            }, render: function () {
                var t, e, i, n, o = this, r = o.chart, a = r.renderer, s = o.group, l = o.box, d = o.options,
                    u = o.padding, c = d.borderWidth, h = d.backgroundColor;
                o.itemX = o.initialItemX, o.itemY = o.initialItemY, o.offsetWidth = 0, o.lastItemY = 0, s || (o.group = s = a.g("legend").attr({zIndex: 7}).add(), o.contentGroup = a.g().attr({zIndex: 1}).add(s), o.scrollGroup = a.g().add(o.contentGroup)), o.renderTitle(), t = o.getAllItems(), b(t, function (t, e) {
                    return (t.options && t.options.legendIndex || 0) - (e.options && e.options.legendIndex || 0)
                }), d.reversed && t.reverse(), o.allItems = t, o.display = e = !!t.length, o.lastLineHeight = 0, zt(t, function (t) {
                    o.renderItem(t)
                }), i = (d.width || o.offsetWidth) + u, n = o.lastItemY + o.lastLineHeight + o.titleHeight, n = o.handleOverflow(n), n += u, (c || h) && (l ? i > 0 && n > 0 && (l[l.isNew ? "attr" : "animate"](l.crisp({
                    width: i,
                    height: n
                })), l.isNew = !1) : (o.box = l = a.rect(0, 0, i, n, d.borderRadius, c || 0).attr({
                    stroke: d.borderColor,
                    "stroke-width": c || 0,
                    fill: h || "none"
                }).add(s).shadow(d.shadow), l.isNew = !0), l[e ? "show" : "hide"]()), o.legendWidth = i, o.legendHeight = n, zt(t, function (t) {
                    o.positionItem(t)
                }), e && s.align(Kt({
                    width: i,
                    height: n
                }, d), !0, "spacingBox"), r.isResizing || this.positionCheckboxes()
            }, handleOverflow: function (t) {
                var e, i, n = this, o = this.chart, r = o.renderer, a = this.options, s = a.y,
                    s = o.spacingBox.height + ("top" === a.verticalAlign ? -s : s) - this.padding, l = a.maxHeight,
                    d = this.clipRect, u = a.navigation, c = jQueryt(u.animation, !0), h = u.arrowSize || 12, p = this.nav,
                    f = this.pages, g = this.padding, m = this.allItems, A = function (t) {
                        d.attr({height: t}), n.contentGroup.div && (n.contentGroup.div.style.clip = "rect(" + g + "px,9999px," + (g + t) + "px,0)")
                    };
                return "horizontal" === a.layout && (s /= 2), l && (s = ut(s, l)), f.length = 0, t > s && u.enabled !== !1 ? (this.clipHeight = e = dt(s - 20 - this.titleHeight - g, 0), this.currentPage = jQueryt(this.currentPage, 1), this.fullHeight = t, zt(m, function (t, n) {
                    var o = t._legendItemPos[1], r = at(t.legendItem.getBBox().height), a = f.length;
                    (!a || o - f[a - 1] > e && (i || o) !== f[a - 1]) && (f.push(i || o), a++), n === m.length - 1 && o + r - f[a - 1] > e && f.push(o), o !== i && (i = o)
                }), d || (d = n.clipRect = r.clipRect(0, g, 9999, 0), n.contentGroup.clip(d)), A(e), p || (this.nav = p = r.g().attr({zIndex: 1}).add(this.group), this.up = r.symbol("triangle", 0, 0, h, h).on("click", function () {
                    n.scroll(-1, c)
                }).add(p), this.pager = r.text("", 15, 10).css(u.style).add(p), this.down = r.symbol("triangle-down", 0, 0, h, h).on("click", function () {
                    n.scroll(1, c)
                }).add(p)), n.scroll(0), t = s) : p && (A(o.chartHeight), p.hide(), this.scrollGroup.attr({translateY: 1}), this.clipHeight = 0), t
            }, scroll: function (t, e) {
                var i = this.pages, n = i.length, o = this.currentPage + t, r = this.clipHeight,
                    a = this.options.navigation, s = a.activeColor, a = a.inactiveColor, l = this.pager,
                    d = this.padding;
                o > n && (o = n), o > 0 && (e !== D && k(e, this.chart), this.nav.attr({
                    translateX: d,
                    translateY: r + this.padding + 7 + this.titleHeight,
                    visibility: "visible"
                }), this.up.attr({fill: 1 === o ? a : s}).css({cursor: 1 === o ? "default" : "pointer"}), l.attr({text: o + "/" + n}), this.down.attr({
                    x: 18 + this.pager.getBBox().width,
                    fill: o === n ? a : s
                }).css({cursor: o === n ? "default" : "pointer"}), i = -i[o - 1] + this.initialItemY, this.scrollGroup.animate({translateY: i}), this.currentPage = o, this.positionCheckboxes(i))
            }
        }, oe = nt.LegendSymbolMixin = {
            drawRectangle: function (t, e) {
                var i = t.options.symbolHeight || t.fontMetrics.f;
                e.legendSymbol = this.chart.renderer.rect(0, t.baseline - i + 1, t.symbolWidth, i, t.options.symbolRadius || 0).attr({zIndex: 3}).add(e.legendGroup)
            }, drawLineMarker: function (t) {
                var e, i = this.options, n = i.marker, o = t.symbolWidth, r = this.chart.renderer, a = this.legendGroup,
                    t = t.baseline - at(.3 * t.fontMetrics.b);
                i.lineWidth && (e = {"stroke-width": i.lineWidth}, i.dashStyle && (e.dashstyle = i.dashStyle), this.legendLine = r.path([Dt, 0, t, Ot, o, t]).attr(e).add(a)), n && n.enabled !== !1 && (i = n.radius, this.legendSymbol = n = r.symbol(this.symbol, o / 2 - i, t - i, 2 * i, 2 * i, n).add(a), n.isMarker = !0)
            }
        }, (/Trident\/7\.0/.test(mt) || vt) && te(ge.prototype, "positionItem", function (t, e) {
            var i = this, n = function () {
                e._legendItemPos && t.call(i, e)
            };
            n(), setTimeout(n)
        });
        var me = nt.Chart = function () {
            this.getArgs.apply(this, arguments)
        };
        nt.chart = function (t, e, i) {
            return new me(t, e, i)
        }, me.prototype = {
            callbacks: [], getArgs: function () {
                var t = [].slice.call(arguments);
                (r(t[0]) || t[0].nodeName) && (this.renderTo = t.shift()), this.init(t[0], t[1])
            }, init: function (t, e) {
                var i, o = t.series;
                t.series = null, i = n(F, t), i.series = t.series = o, this.userOptions = t, o = i.chart, this.margin = this.splashArray("margin", o), this.spacing = this.splashArray("spacing", o);
                var r = o.events;
                this.bounds = {
                    h: {},
                    v: {}
                }, this.callback = e, this.isResizing = 0, this.options = i, this.axes = [], this.series = [], this.hasCartesianSeries = o.showAxes;
                var a, s = this;
                if (s.index = It.length, It.push(s), Rt++, o.reflow !== !1 && Ht(s, "load", function () {
                        s.initReflow()
                    }), r) for (a in r) Ht(s, a, r[a]);
                s.xAxis = [], s.yAxis = [], s.animation = !kt && jQueryt(o.animation, !0), s.pointCount = s.colorCounter = s.symbolCounter = 0, s.firstRender()
            }, initSeries: function (t) {
                var i = this.options.chart;
                return (i = Ft[t.type || i.type || i.defaultSeriesType]) || e(17, !0), i = new i, i.init(this, t), i
            }, isInsidePlot: function (t, e, i) {
                var n = i ? e : t, t = i ? t : e;
                return n >= 0 && n <= this.plotWidth && t >= 0 && t <= this.plotHeight
            }, redraw: function (t) {
                var e, i, n = this.axes, o = this.series, r = this.pointer, a = this.legend, s = this.isDirtyLegend,
                    l = this.hasCartesianSeries, d = this.isDirtyBox, u = o.length, c = u, h = this.renderer,
                    p = h.isHidden(), f = [];
                for (k(t, this), p && this.cloneRenderTo(), this.layOutTitles(); c--;) if (t = o[c], t.options.stacking && (e = !0, t.isDirty)) {
                    i = !0;
                    break
                }
                if (i) for (c = u; c--;) t = o[c], t.options.stacking && (t.isDirty = !0);
                zt(o, function (t) {
                    t.isDirty && "point" === t.options.legendType && (t.updateTotals && t.updateTotals(), s = !0), t.isDirtyData && Yt(t, "updatedData")
                }), s && a.options.enabled && (a.render(), this.isDirtyLegend = !1), e && this.getStacks(), l && !this.isResizing && (this.maxTicks = null, zt(n, function (t) {
                    t.setScale()
                })), this.getMargins(), l && (zt(n, function (t) {
                    t.isDirty && (d = !0)
                }), zt(n, function (t) {
                    var i = t.min + "," + t.max;
                    t.extKey !== i && (t.extKey = i, f.push(function () {
                        Yt(t, "afterSetExtremes", Kt(t.eventArgs, t.getExtremes())), delete t.eventArgs
                    })), (d || e) && t.redraw()
                })), d && this.drawChartBox(), zt(o, function (t) {
                    t.isDirty && t.visible && (!t.isCartesian || t.xAxis) && t.redraw()
                }), r && r.reset(!0), h.draw(), Yt(this, "redraw"), p && this.cloneRenderTo(!0), zt(f, function (t) {
                    t.call()
                })
            }, get: function (t) {
                var e, i, n = this.axes, o = this.series;
                for (e = 0; e < n.length; e++) if (n[e].options.id === t) return n[e];
                for (e = 0; e < o.length; e++) if (o[e].options.id === t) return o[e];
                for (e = 0; e < o.length; e++) for (i = o[e].points || [], n = 0; n < i.length; n++) if (i[n].id === t) return i[n];
                return null
            }, getAxes: function () {
                var t = this, e = this.options, i = e.xAxis = u(e.xAxis || {}), e = e.yAxis = u(e.yAxis || {});
                zt(i, function (t, e) {
                    t.index = e, t.isX = !0
                }), zt(e, function (t, e) {
                    t.index = e
                }), i = i.concat(e), zt(i, function (e) {
                    new se(t, e)
                })
            }, getSelectedPoints: function () {
                var t = [];
                return zt(this.series, function (e) {
                    t = t.concat(jt(e.points || [], function (t) {
                        return t.selected
                    }))
                }), t
            }, getSelectedSeries: function () {
                return jt(this.series, function (t) {
                    return t.selected
                })
            }, setTitle: function (t, e, i) {
                var o, r, a = this, s = a.options;
                r = s.title = n(s.title, t), o = s.subtitle = n(s.subtitle, e), s = o, zt([["title", t, r], ["subtitle", e, s]], function (t) {
                    var e = t[0], i = a[e], n = t[1], t = t[2];
                    i && n && (a[e] = i = i.destroy()), t && t.text && !i && (a[e] = a.renderer.text(t.text, 0, 0, t.useHTML).attr({
                        align: t.align,
                        "class": "highcharts-" + e,
                        zIndex: t.zIndex || 4
                    }).css(t.style).add())
                }), a.layOutTitles(i)
            }, layOutTitles: function (t) {
                var e = 0, i = this.title, n = this.subtitle, o = this.options, r = o.title, o = o.subtitle,
                    a = this.renderer, s = this.spacingBox;
                !i || (i.css({width: (r.width || s.width + r.widthAdjust) + "px"}).align(Kt({y: a.fontMetrics(r.style.fontSize, i).b - 3}, r), !1, s), r.floating || r.verticalAlign) || (e = i.getBBox().height), n && (n.css({width: (o.width || s.width + o.widthAdjust) + "px"}).align(Kt({y: e + (r.margin - 13) + a.fontMetrics(o.style.fontSize, i).b}, o), !1, s), !o.floating && !o.verticalAlign && (e = lt(e + n.getBBox().height))), i = this.titleOffset !== e, this.titleOffset = e, !this.isDirtyBox && i && (this.isDirtyBox = i, this.hasRendered && jQueryt(t, !0) && this.isDirtyBox && this.redraw())
            }, getChartSize: function () {
                var t = this.options.chart, e = t.width, t = t.height, i = this.renderToClone || this.renderTo;
                l(e) || (this.containerWidth = Nt(i, "width")), l(t) || (this.containerHeight = Nt(i, "height")), this.chartWidth = dt(0, e || this.containerWidth || 600), this.chartHeight = dt(0, jQueryt(t, this.containerHeight > 19 ? this.containerHeight : 400))
            }, cloneRenderTo: function (t) {
                var e = this.renderToClone, i = this.container;
                t ? e && (this.renderTo.appendChild(i), E(e), delete this.renderToClone) : (i && i.parentNode === this.renderTo && this.renderTo.removeChild(i), this.renderToClone = e = this.renderTo.cloneNode(0), h(e, {
                    position: "absolute",
                    top: "-9999px",
                    display: "block"
                }), e.style.setProperty && e.style.setProperty("display", "block", "important"), ot.body.appendChild(e), i && e.appendChild(i))
            }, getContainer: function () {
                var t, i, n, a = this.options, s = a.chart;
                t = this.renderTo;
                var l = "highcharts-" + Pt++;
                t || (this.renderTo = t = s.renderTo), r(t) && (this.renderTo = t = ot.getElementById(t)), t || e(13, !0), i = o(d(t, "data-highcharts-chart")), Zt(i) && It[i] && It[i].hasRendered && It[i].destroy(), d(t, "data-highcharts-chart", this.index), t.innerHTML = "", !s.skipClone && !t.offsetWidth && this.cloneRenderTo(), this.getChartSize(), i = this.chartWidth, n = this.chartHeight, this.container = t = p(Lt, {
                    className: "highcharts-container" + (s.className ? " " + s.className : ""),
                    id: l
                }, Kt({
                    position: "relative",
                    overflow: "hidden",
                    width: i + "px",
                    height: n + "px",
                    textAlign: "left",
                    lineHeight: "normal",
                    zIndex: 0,
                    "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
                }, s.style), this.renderToClone || t), this._cursor = t.style.cursor, this.renderer = new (nt[s.renderer] || O)(t, i, n, s.style, s.forExport, a.exporting && a.exporting.allowHTML), kt && this.renderer.create(this, t, i, n), this.renderer.chartIndex = this.index
            }, getMargins: function (t) {
                var e = this.spacing, i = this.margin, n = this.titleOffset;
                this.resetMargins(), n && !l(i[0]) && (this.plotTop = dt(this.plotTop, n + this.options.title.margin + e[0])), this.legend.display && this.legend.adjustMargins(i, e), this.extraBottomMargin && (this.marginBottom += this.extraBottomMargin), this.extraTopMargin && (this.plotTop += this.extraTopMargin), t || this.getAxisMargins()
            }, getAxisMargins: function () {
                var t = this, e = t.axisOffset = [0, 0, 0, 0], i = t.margin;
                t.hasCartesianSeries && zt(t.axes, function (t) {
                    t.visible && t.getOffset()
                }), zt(Ut, function (n, o) {
                    l(i[o]) || (t[n] += e[o])
                }), t.setChartSize()
            }, reflow: function (e) {
                var i = this, n = i.options.chart, o = i.renderTo, r = l(n.width), a = n.width || Nt(o, "width"),
                    n = n.height || Nt(o, "height"), o = e ? e.target : t;
                r || i.isPrinting || !a || !n || o !== t && o !== ot || (a === i.containerWidth && n === i.containerHeight || (clearTimeout(i.reflowTimeout), i.reflowTimeout = c(function () {
                    i.container && i.setSize(void 0, void 0, !1)
                }, e ? 100 : 0)), i.containerWidth = a, i.containerHeight = n)
            }, initReflow: function () {
                var e = this, i = function (t) {
                    e.reflow(t)
                };
                Ht(t, "resize", i), Ht(e, "destroy", function () {
                    Wt(t, "resize", i)
                })
            }, setSize: function (t, e, i) {
                var n = this, o = n.renderer;
                n.isResizing += 1, k(i, n), n.oldChartHeight = n.chartHeight, n.oldChartWidth = n.chartWidth, void 0 !== t && (n.options.chart.width = t), void 0 !== e && (n.options.chart.height = e), n.getChartSize(), t = o.globalAnimation, (t ? Xt : h)(n.container, {
                    width: n.chartWidth + "px",
                    height: n.chartHeight + "px"
                }, t), n.setChartSize(!0), o.setSize(n.chartWidth, n.chartHeight, i), n.maxTicks = null, zt(n.axes, function (t) {
                    t.isDirty = !0, t.setScale()
                }), zt(n.series, function (t) {
                    t.isDirty = !0
                }), n.isDirtyLegend = !0, n.isDirtyBox = !0, n.layOutTitles(), n.getMargins(), n.redraw(i), n.oldChartHeight = null, Yt(n, "resize"), c(function () {
                    n && Yt(n, "endResize", null, function () {
                        n.isResizing -= 1
                    })
                }, M(t).duration)
            }, setChartSize: function (t) {
                var e, i, n, o, r = this.inverted, a = this.renderer, s = this.chartWidth, l = this.chartHeight,
                    d = this.options.chart, u = this.spacing, c = this.clipOffset;
                this.plotLeft = e = at(this.plotLeft), this.plotTop = i = at(this.plotTop), this.plotWidth = n = dt(0, at(s - e - this.marginRight)), this.plotHeight = o = dt(0, at(l - i - this.marginBottom)), this.plotSizeX = r ? o : n, this.plotSizeY = r ? n : o, this.plotBorderWidth = d.plotBorderWidth || 0, this.spacingBox = a.spacingBox = {
                    x: u[3],
                    y: u[0],
                    width: s - u[3] - u[1],
                    height: l - u[0] - u[2]
                }, this.plotBox = a.plotBox = {
                    x: e,
                    y: i,
                    width: n,
                    height: o
                }, s = 2 * st(this.plotBorderWidth / 2), r = lt(dt(s, c[3]) / 2), a = lt(dt(s, c[0]) / 2), this.clipBox = {
                    x: r,
                    y: a,
                    width: st(this.plotSizeX - dt(s, c[1]) / 2 - r),
                    height: dt(0, st(this.plotSizeY - dt(s, c[2]) / 2 - a))
                }, t || zt(this.axes, function (t) {
                    t.setAxisSize(), t.setAxisTranslation()
                })
            }, resetMargins: function () {
                var t = this;
                zt(Ut, function (e, i) {
                    t[e] = jQueryt(t.margin[i], t.spacing[i])
                }), t.axisOffset = [0, 0, 0, 0], t.clipOffset = [0, 0, 0, 0]
            }, drawChartBox: function () {
                var t, e = this.options.chart, i = this.renderer, n = this.chartWidth, o = this.chartHeight,
                    r = this.chartBackground, a = this.plotBackground, s = this.plotBorder, l = this.plotBGImage,
                    d = e.borderWidth || 0, u = e.backgroundColor, c = e.plotBackgroundColor, h = e.plotBackgroundImage,
                    p = e.plotBorderWidth || 0, f = this.plotLeft, g = this.plotTop, m = this.plotWidth,
                    A = this.plotHeight, y = this.plotBox, x = this.clipRect, b = this.clipBox;
                t = d + (e.shadow ? 8 : 0), (d || u) && (r ? r.animate(r.crisp({
                    width: n - t,
                    height: o - t
                })) : (r = {fill: u || "none"}, d && (r.stroke = e.borderColor, r["stroke-width"] = d), this.chartBackground = i.rect(t / 2, t / 2, n - t, o - t, e.borderRadius, d).attr(r).addClass("highcharts-background").add().shadow(e.shadow))), c && (a ? a.animate(y) : this.plotBackground = i.rect(f, g, m, A, 0).attr({fill: c}).add().shadow(e.plotShadow)), h && (l ? l.animate(y) : this.plotBGImage = i.image(h, f, g, m, A).add()), x ? x.animate({
                    width: b.width,
                    height: b.height
                }) : this.clipRect = i.clipRect(b), p && (s ? (s.strokeWidth = -p, s.animate(s.crisp({
                    x: f,
                    y: g,
                    width: m,
                    height: A
                }))) : this.plotBorder = i.rect(f, g, m, A, 0, -p).attr({
                    stroke: e.plotBorderColor,
                    "stroke-width": p,
                    fill: "none",
                    zIndex: 1
                }).add()), this.isDirtyBox = !1
            }, propFromSeries: function () {
                var t, e, i, n = this, o = n.options.chart, r = n.options.series;
                zt(["inverted", "angular", "polar"], function (a) {
                    for (t = Ft[o.type || o.defaultSeriesType], i = n[a] || o[a] || t && t.prototype[a], e = r && r.length; !i && e--;) (t = Ft[r[e].type]) && t.prototype[a] && (i = !0);
                    n[a] = i
                })
            }, linkSeries: function () {
                var t = this, e = t.series;
                zt(e, function (t) {
                    t.linkedSeries.length = 0
                }), zt(e, function (e) {
                    var i = e.options.linkedTo;
                    r(i) && (i = ":previous" === i ? t.series[e.index - 1] : t.get(i)) && (i.linkedSeries.push(e), e.linkedParent = i, e.visible = jQueryt(e.options.visible, i.options.visible, e.visible))
                })
            }, renderSeries: function () {
                zt(this.series, function (t) {
                    t.translate(), t.render()
                })
            }, renderLabels: function () {
                var t = this, e = t.options.labels;
                e.items && zt(e.items, function (i) {
                    var n = Kt(e.style, i.style), r = o(n.left) + t.plotLeft, a = o(n.top) + t.plotTop + 12;
                    delete n.left, delete n.top, t.renderer.text(i.html, r, a).attr({zIndex: 2}).css(n).add()
                })
            }, render: function () {
                var t, e, i, n, o = this.axes, r = this.renderer, a = this.options;
                this.setTitle(), this.legend = new ge(this, a.legend), this.getStacks && this.getStacks(), this.getMargins(!0), this.setChartSize(), t = this.plotWidth, e = this.plotHeight -= 21, zt(o, function (t) {
                    t.setScale()
                }), this.getAxisMargins(), i = t / this.plotWidth > 1.1, n = e / this.plotHeight > 1.05, (i || n) && (this.maxTicks = null, zt(o, function (t) {
                    (t.horiz && i || !t.horiz && n) && t.setTickInterval(!0)
                }), this.getMargins()), this.drawChartBox(), this.hasCartesianSeries && zt(o, function (t) {
                    t.visible && t.render()
                }), this.seriesGroup || (this.seriesGroup = r.g("series-group").attr({zIndex: 3}).add()), this.renderSeries(), this.renderLabels(), this.showCredits(a.credits), this.hasRendered = !0
            }, showCredits: function (e) {
                e.enabled && !this.credits && (this.credits = this.renderer.text(e.text, 0, 0).on("click", function () {
                    e.href && (t.location.href = e.href)
                }).attr({align: e.position.align, zIndex: 8}).css(e.style).add().align(e.position))
            }, destroy: function () {
                var t, e = this, i = e.axes, n = e.series, o = e.container, r = o && o.parentNode;
                for (Yt(e, "destroy"), It[e.index] = D, Rt--, e.renderTo.removeAttribute("data-highcharts-chart"), Wt(e), t = i.length; t--;) i[t] = i[t].destroy();
                for (t = n.length; t--;) n[t] = n[t].destroy();
                zt("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","), function (t) {
                    var i = e[t];
                    i && i.destroy && (e[t] = i.destroy())
                }), o && (o.innerHTML = "", Wt(o), r && E(o));
                for (t in e) delete e[t]
            }, isReadyToRender: function () {
                var e = this;
                return !(!Et && t == t.top && "complete" !== ot.readyState || kt && !t.canvg) || (kt ? ae.push(function () {
                    e.firstRender()
                }, e.options.global.canvasToolsURL) : ot.attachEvent("onreadystatechange", function () {
                    ot.detachEvent("onreadystatechange", e.firstRender), "complete" === ot.readyState && e.firstRender()
                }), !1)
            }, firstRender: function () {
                var t = this, e = t.options;
                t.isReadyToRender() && (t.getContainer(), Yt(t, "init"), t.resetMargins(), t.setChartSize(), t.propFromSeries(), t.getAxes(), zt(e.series || [], function (e) {
                    t.initSeries(e)
                }), t.linkSeries(), Yt(t, "beforeRender"), nt.Pointer && (t.pointer = new ue(t, e)), t.render(), t.renderer.draw(), !t.renderer.imgCount && t.onload && t.onload(), t.cloneRenderTo(!0))
            }, onload: function () {
                var t = this;
                zt([this.callback].concat(this.callbacks), function (e) {
                    e && void 0 !== t.index && e.apply(t, [t])
                }), Yt(t, "load"), this.onload = null
            }, splashArray: function (t, e) {
                var i = e[t], i = Jt(i) ? i : [i, i, i, i];
                return [jQueryt(e[t + "Top"], i[0]), jQueryt(e[t + "Right"], i[1]), jQueryt(e[t + "Bottom"], i[2]), jQueryt(e[t + "Left"], i[3])]
            }
        };
        var re = nt.CenteredSeriesMixin = {
            getCenter: function () {
                var t, e, i = this.options, n = this.chart, o = 2 * (i.slicedOffset || 0), r = n.plotWidth - 2 * o,
                    n = n.plotHeight - 2 * o, a = i.center,
                    a = [jQueryt(a[0], "50%"), jQueryt(a[1], "50%"), i.size || "100%", i.innerSize || 0], s = ut(r, n);
                for (t = 0; t < 4; ++t) e = a[t], i = t < 2 || 2 === t && /%jQuery/.test(e), a[t] = (/%jQuery/.test(e) ? [r, n, s, a[2]][t] * parseFloat(e) / 100 : parseFloat(e)) + (i ? o : 0);
                return a[3] > a[2] && (a[3] = a[2]), a
            }
        }, Ae = function () {
        };
        Ae.prototype = {
            init: function (t, e, i) {
                return this.series = t, this.color = t.color, this.applyOptions(e, i), this.pointAttr = {}, t.options.colorByPoint && (e = t.options.colors || t.chart.options.colors, this.color = this.color || e[t.colorCounter++], t.colorCounter === e.length) && (t.colorCounter = 0), t.chart.pointCount++, this
            }, applyOptions: function (t, e) {
                var i = this.series, n = i.options.pointValKey || i.pointValKey,
                    t = Ae.prototype.optionsToObject.call(this, t);
                return Kt(this, t), this.options = this.options ? Kt(this.options, t) : t, n && (this.y = this[n]), this.isNull = null === this.x || !Zt(this.y, !0), void 0 === this.x && i && (this.x = void 0 === e ? i.autoIncrement(this) : e), i.xAxis && i.xAxis.names && (i.xAxis.names[this.x] = this.name), this
            }, optionsToObject: function (t) {
                var e = {}, i = this.series, n = i.options.keys, o = n || i.pointArrayMap || ["y"], r = o.length, s = 0,
                    l = 0;
                if (Zt(t) || null === t) e[o[0]] = t; else if (a(t)) for (!n && t.length > r && (i = typeof t[0], "string" === i ? e.name = t[0] : "number" === i && (e.x = t[0]), s++); l < r;) n && void 0 === t[s] || (e[o[l]] = t[s]), s++, l++; else "object" == typeof t && (e = t, t.dataLabels && (i._hasPointLabels = !0), t.marker && (i._hasPointMarkers = !0));
                return e
            }, destroy: function () {
                var t, e = this.series.chart, i = e.hoverPoints;
                e.pointCount--, i && (this.setState(), s(i, this), !i.length) && (e.hoverPoints = null), this === e.hoverPoint && this.onMouseOut(), (this.graphic || this.dataLabel) && (Wt(this), this.destroyElements()), this.legendItem && e.legend.destroyItem(this);
                for (t in this) this[t] = null
            }, destroyElements: function () {
                for (var t, e = ["graphic", "dataLabel", "dataLabelUpper", "connector", "shadowGroup"], i = 6; i--;) t = e[i], this[t] && (this[t] = this[t].destroy())
            }, getLabelConfig: function () {
                return {
                    x: this.category,
                    y: this.y,
                    color: this.color,
                    key: this.name || this.category,
                    series: this.series,
                    point: this,
                    percentage: this.percentage,
                    total: this.total || this.stackTotal
                }
            }, tooltipFormatter: function (t) {
                var e = this.series, i = e.tooltipOptions, n = jQueryt(i.valueDecimals, ""), o = i.valuePrefix || "",
                    r = i.valueSuffix || "";
                return zt(e.pointArrayMap || ["y"], function (e) {
                    e = "{point." + e, (o || r) && (t = t.replace(e + "}", o + e + "}" + r)), t = t.replace(e + "}", e + ":,." + n + "f}")
                }), A(t, {point: this, series: this.series})
            }, firePointEvent: function (t, e, i) {
                var n = this, o = this.series.options;
                (o.point.events[t] || n.options && n.options.events && n.options.events[t]) && this.importEvents(), "click" === t && o.allowPointSelect && (i = function (t) {
                    n.select && n.select(null, t.ctrlKey || t.metaKey || t.shiftKey)
                }), Yt(this, t, e, i)
            }, visible: !0
        };
        var ye = nt.Series = function () {
        };
        ye.prototype = {
            isCartesian: !0,
            type: "line",
            pointClass: Ae,
            sorted: !0,
            requireSorting: !0,
            pointAttrToOptions: {stroke: "lineColor", "stroke-width": "lineWidth", fill: "fillColor", r: "radius"},
            directTouch: !1,
            axisTypes: ["xAxis", "yAxis"],
            colorCounter: 0,
            parallelArrays: ["x", "y"],
            init: function (t, e) {
                var i, n, o = this, r = t.series, a = function (t, e) {
                    return jQueryt(t.options.index, t._i) - jQueryt(e.options.index, e._i)
                };
                o.chart = t, o.options = e = o.setOptions(e), o.linkedSeries = [], o.bindAxes(), Kt(o, {
                    name: e.name,
                    state: "",
                    pointAttr: {},
                    visible: e.visible !== !1,
                    selected: e.selected === !0
                }), kt && (e.animation = !1), n = e.events;
                for (i in n) Ht(o, i, n[i]);
                (n && n.click || e.point && e.point.events && e.point.events.click || e.allowPointSelect) && (t.runTrackerClick = !0), o.getColor(), o.getSymbol(), zt(o.parallelArrays, function (t) {
                    o[t + "Data"] = []
                }), o.setData(e.data, !1), o.isCartesian && (t.hasCartesianSeries = !0), r.push(o), o._i = r.length - 1, b(r, a), this.yAxis && b(this.yAxis.series, a), zt(r, function (t, e) {
                    t.index = e, t.name = t.name || "Series " + (e + 1)
                })
            },
            bindAxes: function () {
                var t, i = this, n = i.options, o = i.chart;
                zt(i.axisTypes || [], function (r) {
                    zt(o[r], function (e) {
                        t = e.options, (n[r] === t.index || n[r] !== D && n[r] === t.id || n[r] === D && 0 === t.index) && (e.series.push(i), i[r] = e, e.isDirty = !0)
                    }), !i[r] && i.optionalAxis !== r && e(18, !0)
                })
            },
            updateParallelArrays: function (t, e) {
                var i = t.series, n = arguments, o = Zt(e) ? function (n) {
                    var o = "y" === n && i.toYData ? i.toYData(t) : t[n];
                    i[n + "Data"][e] = o
                } : function (t) {
                    Array.prototype[e].apply(i[t + "Data"], Array.prototype.slice.call(n, 2))
                };
                zt(i.parallelArrays, o)
            },
            autoIncrement: function (t) {
                var e, i, n = this.options, o = this.xIncrement, r = n.pointIntervalUnit, s = this.xAxis,
                    o = jQueryt(o, n.pointStart, 0);
                return this.pointInterval = n = jQueryt(this.pointInterval, n.pointInterval, 1),
                s && s.categories && t.name && (this.requireSorting = !1, e = (i = a(s.categories)) ? s.categories : s.names, s = e, t = Vt(t.name, s), t === -1 ? i || (o = s.length) : o = t), r && (t = new z(o), "day" === r ? t = +t[tt](t[X]() + n) : "month" === r ? t = +t[et](t[q]() + n) : "year" === r && (t = +t[it](t[Q]() + n)), n = t - o), this.xIncrement = o + n, o
            },
            setOptions: function (t) {
                var e = this.chart, i = e.options.plotOptions, e = e.userOptions || {}, o = e.plotOptions || {},
                    r = i[this.type];
                return this.userOptions = t, i = n(r, i.series, t), this.tooltipOptions = n(F.tooltip, F.plotOptions[this.type].tooltip, e.tooltip, o.series && o.series.tooltip, o[this.type] && o[this.type].tooltip, t.tooltip), null === r.marker && delete i.marker, this.zoneAxis = i.zoneAxis, t = this.zones = (i.zones || []).slice(), !i.negativeColor && !i.negativeFillColor || i.zones || t.push({
                    value: i[this.zoneAxis + "Threshold"] || i.threshold || 0,
                    color: i.negativeColor,
                    fillColor: i.negativeFillColor
                }), t.length && l(t[t.length - 1].value) && t.push({color: this.color, fillColor: this.fillColor}), i
            },
            getCyclic: function (t, e, i) {
                var n = this.userOptions, o = "_" + t + "Index", r = t + "Counter";
                e || (l(n[o]) ? e = n[o] : (n[o] = e = this.chart[r] % i.length, this.chart[r] += 1), e = i[e]), this[t] = e
            },
            getColor: function () {
                this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || ee[this.type].color, this.chart.options.colors)
            },
            getSymbol: function () {
                var t = this.options.marker;
                this.getCyclic("symbol", t.symbol, this.chart.options.symbols), /^url/.test(this.symbol) && (t.radius = 0)
            },
            drawLegendSymbol: oe.drawLineMarker,
            setData: function (t, i, n, o) {
                var s, l = this, d = l.points, u = d && d.length || 0, c = l.options, h = l.chart, p = null,
                    f = l.xAxis, g = c.turboThreshold, m = this.xData, A = this.yData,
                    y = (s = l.pointArrayMap) && s.length, t = t || [];
                if (s = t.length, i = jQueryt(i, !0), o !== !1 && s && u === s && !l.cropped && !l.hasGroupedData && l.visible) zt(t, function (t, e) {
                    d[e].update && t !== c.data[e] && d[e].update(t, !1, null, !1)
                }); else {
                    if (l.xIncrement = null, l.colorCounter = 0, zt(this.parallelArrays, function (t) {
                            l[t + "Data"].length = 0
                        }), g && s > g) {
                        for (n = 0; null === p && n < s;) p = t[n], n++;
                        if (Zt(p)) {
                            for (p = jQueryt(c.pointStart, 0), y = jQueryt(c.pointInterval, 1), n = 0; n < s; n++) m[n] = p, A[n] = t[n], p += y;
                            l.xIncrement = p
                        } else if (a(p)) if (y) for (n = 0; n < s; n++) p = t[n], m[n] = p[0], A[n] = p.slice(1, y + 1); else for (n = 0; n < s; n++) p = t[n], m[n] = p[0], A[n] = p[1]; else e(12)
                    } else for (n = 0; n < s; n++) t[n] !== D && (p = {series: l}, l.pointClass.prototype.applyOptions.apply(p, [t[n]]), l.updateParallelArrays(p, n));
                    for (r(A[0]) && e(14, !0), l.data = [], l.options.data = l.userOptions.data = t, n = u; n--;) d[n] && d[n].destroy && d[n].destroy();
                    f && (f.minRange = f.userMinRange), l.isDirty = l.isDirtyData = h.isDirtyBox = !0, n = !1
                }
                "point" === c.legendType && (this.processData(), this.generatePoints()), i && h.redraw(n)
            },
            processData: function (t) {
                var i, n = this.xData, o = this.yData, r = n.length;
                i = 0;
                var a, s, l, d = this.xAxis, u = this.options;
                l = u.cropThreshold;
                var c, h, p = this.getExtremesFromAll || u.getExtremesFromAll, f = this.isCartesian, u = d && d.val2lin,
                    g = d && d.isLog;
                if (f && !this.isDirty && !d.isDirty && !this.yAxis.isDirty && !t) return !1;
                for (d && (t = d.getExtremes(), c = t.min, h = t.max), f && this.sorted && !p && (!l || r > l || this.forceCrop) && (n[r - 1] < c || n[0] > h ? (n = [], o = []) : (n[0] < c || n[r - 1] > h) && (i = this.cropData(this.xData, this.yData, c, h), n = i.xData, o = i.yData, i = i.start, a = !0)), l = n.length || 1; --l;) r = g ? u(n[l]) - u(n[l - 1]) : n[l] - n[l - 1], r > 0 && (s === D || r < s) ? s = r : r < 0 && this.requireSorting && e(15);
                this.cropped = a, this.cropStart = i, this.processedXData = n, this.processedYData = o, this.closestPointRange = s
            },
            cropData: function (t, e, i, n) {
                var o, r = t.length, a = 0, s = r, l = jQueryt(this.cropShoulder, 1);
                for (o = 0; o < r; o++) if (t[o] >= i) {
                    a = dt(0, o - l);
                    break
                }
                for (i = o; i < r; i++) if (t[i] > n) {
                    s = i + l;
                    break
                }
                return {xData: t.slice(a, s), yData: e.slice(a, s), start: a, end: s}
            },
            generatePoints: function () {
                var t, e, i, n, o = this.options.data, r = this.data, a = this.processedXData, s = this.processedYData,
                    l = this.pointClass, d = a.length, c = this.cropStart || 0, h = this.hasGroupedData, p = [];
                for (r || h || (r = [], r.length = o.length, r = this.data = r), n = 0; n < d; n++) e = c + n, h ? (p[n] = (new l).init(this, [a[n]].concat(u(s[n]))), p[n].dataGroup = this.groupMap[n]) : (r[e] ? i = r[e] : o[e] !== D && (r[e] = i = (new l).init(this, o[e], a[n])), p[n] = i), p[n].index = e;
                if (r && (d !== (t = r.length) || h)) for (n = 0; n < t; n++) n === c && !h && (n += d), r[n] && (r[n].destroyElements(), r[n].plotX = D);
                this.data = r, this.points = p
            },
            getExtremes: function (t) {
                var e, i = this.yAxis, n = this.processedXData, o = [], r = 0;
                e = this.xAxis.getExtremes();
                var a, s, l, d, u = e.min, c = e.max, t = t || this.stackedYData || this.processedYData || [];
                for (e = t.length, d = 0; d < e; d++) if (s = n[d], l = t[d], a = null !== l && l !== D && (!i.isLog || l.length || l > 0), s = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || (n[d + 1] || s) >= u && (n[d - 1] || s) <= c, a && s) if (a = l.length) for (; a--;) null !== l[a] && (o[r++] = l[a]); else o[r++] = l;
                this.dataMin = v(o), this.dataMax = w(o)
            },
            translate: function () {
                this.processedXData || this.processData(), this.generatePoints();
                for (var t, i, n, o, r = this.options, a = r.stacking, s = this.xAxis, d = s.categories, u = this.yAxis, c = this.points, h = c.length, p = !!this.modifyValue, f = r.pointPlacement, g = "between" === f || Zt(f), m = r.threshold, A = r.startFromThreshold ? m : 0, y = Number.MAX_VALUE, r = 0; r < h; r++) {
                    var x = c[r], b = x.x, v = x.y;
                    i = x.low;
                    var w, S = a && u.stacks[(this.negStacks && v < (A ? 0 : m) ? "-" : "") + this.stackKey];
                    u.isLog && null !== v && v <= 0 && (x.y = v = null, e(10)), x.plotX = t = C(ut(dt(-1e5, s.translate(b, 0, 0, 0, 1, f, "flags" === this.type)), 1e5)), a && this.visible && !x.isNull && S && S[b] && (o = this.getStackIndicator(o, b, this.index), w = S[b], v = w.points[o.key], i = v[0], v = v[1], i === A && o.key === S[b].base && (i = jQueryt(m, u.min)), u.isLog && i <= 0 && (i = null), x.total = x.stackTotal = w.total, x.percentage = w.total && x.y / w.total * 100, x.stackY = v, w.setOffset(this.pointXOffset || 0, this.barW || 0)), x.yBottom = l(i) ? u.translate(i, 0, 1, 0, 1) : null, p && (v = this.modifyValue(v, x)), x.plotY = i = "number" == typeof v && v !== 1 / 0 ? ut(dt(-1e5, u.translate(v, 0, 1, 0, 1)), 1e5) : D, x.isInside = i !== D && i >= 0 && i <= u.len && t >= 0 && t <= s.len, x.clientX = g ? C(s.translate(b, 0, 0, 0, 1)) : t, x.negative = x.y < (m || 0), x.category = d && d[x.x] !== D ? d[x.x] : x.x, x.isNull || (void 0 !== n && (y = ut(y, ct(t - n))), n = t)
                }
                this.closestPointRangePx = y
            },
            getValidPoints: function (t, e) {
                var i = this.chart;
                return jt(t || this.points || [], function (t) {
                    return !(e && !i.isInsidePlot(t.plotX, t.plotY, i.inverted)) && !t.isNull
                })
            },
            setClip: function (t) {
                var e = this.chart, i = this.options, n = e.renderer, o = e.inverted, r = this.clipBox,
                    a = r || e.clipBox,
                    s = this.sharedClipKey || ["_sharedClip", t && t.duration, t && t.easing, a.height, i.xAxis, i.yAxis].join(","),
                    l = e[s], d = e[s + "m"];
                l || (t && (a.width = 0, e[s + "m"] = d = n.clipRect(-99, o ? -e.plotLeft : -e.plotTop, 99, o ? e.chartWidth : e.chartHeight)), e[s] = l = n.clipRect(a), l.count = {length: 0}), t && !l.count[this.index] && (l.count[this.index] = !0, l.count.length += 1), i.clip !== !1 && (this.group.clip(t || r ? l : e.clipRect), this.markerGroup.clip(d), this.sharedClipKey = s), t || (l.count[this.index] && (delete l.count[this.index], l.count.length -= 1), 0 === l.count.length && s && e[s] && (r || (e[s] = e[s].destroy()), e[s + "m"] && (e[s + "m"] = e[s + "m"].destroy())))
            },
            animate: function (t) {
                var e, i = this.chart, n = this.options.animation;
                n && !Jt(n) && (n = ee[this.type].animation), t ? this.setClip(n) : (e = this.sharedClipKey, (t = i[e]) && t.animate({width: i.plotSizeX}, n), i[e + "m"] && i[e + "m"].animate({width: i.plotSizeX + 99}, n), this.animate = null)
            },
            afterAnimate: function () {
                this.setClip(), Yt(this, "afterAnimate")
            },
            drawPoints: function () {
                var t, e, i, n, o, r, a, s, l, d, u, c, h = this.points, p = this.chart, f = this.options.marker,
                    g = this.pointAttr[""], m = this.markerGroup,
                    A = jQueryt(f.enabled, this.xAxis.isRadial, this.closestPointRangePx > 2 * f.radius);
                if (f.enabled !== !1 || this._hasPointMarkers) for (n = h.length; n--;) o = h[n], e = st(o.plotX), i = o.plotY, l = o.graphic, d = o.marker || {}, u = !!o.marker, t = A && d.enabled === D || d.enabled, c = o.isInside, t && Zt(i) && null !== o.y ? (t = o.pointAttr[o.selected ? "select" : ""] || g, r = t.r, a = jQueryt(d.symbol, this.symbol), s = 0 === a.indexOf("url"), l ? l[c ? "show" : "hide"](!0).attr(t).animate(Kt({
                    x: e - r,
                    y: i - r
                }, l.symbolName ? {
                    width: 2 * r,
                    height: 2 * r
                } : {})) : c && (r > 0 || s) && (o.graphic = p.renderer.symbol(a, e - r, i - r, 2 * r, 2 * r, u ? d : f).attr(t).add(m))) : l && (o.graphic = l.destroy())
            },
            convertAttribs: function (t, e, i, n) {
                var o, r, a = this.pointAttrToOptions, s = {}, t = t || {}, e = e || {}, i = i || {}, n = n || {};
                for (o in a) r = a[o], s[o] = jQueryt(t[r], e[o], i[o], n[o]);
                return s
            },
            getAttribs: function () {
                var t, e, i, n = this, o = n.options, r = ee[n.type].marker ? o.marker : o, a = r.states, s = a.hover,
                    d = n.color, u = n.options.negativeColor, c = {stroke: d, fill: d}, h = n.points || [], p = [],
                    f = n.pointAttrToOptions;
                t = n.hasPointSpecificOptions;
                var g = r.lineColor, m = r.fillColor;
                e = o.turboThreshold;
                var A, y, x = n.zones, b = n.zoneAxis || "y";
                if (o.marker ? (s.radius = +s.radius || +r.radius + +s.radiusPlus, s.lineWidth = s.lineWidth || r.lineWidth + s.lineWidthPlus) : (s.color = s.color || T(s.color || d).brighten(s.brightness).get(), s.negativeColor = s.negativeColor || T(s.negativeColor || u).brighten(s.brightness).get()), p[""] = n.convertAttribs(r, c), zt(["hover", "select"], function (t) {
                        p[t] = n.convertAttribs(a[t], p[""])
                    }), n.pointAttr = p, d = h.length, !e || d < e || t) for (; d--;) {
                    if (e = h[d], (r = e.options && e.options.marker || e.options) && r.enabled === !1 && (r.radius = 0), c = null, x.length) {
                        for (t = 0, c = x[t]; e[b] >= c.value;) c = x[++t];
                        e.color = e.fillColor = c = jQueryt(c.color, n.color)
                    }
                    if (t = o.colorByPoint || e.color, e.options) for (y in f) l(r[f[y]]) && (t = !0);
                    t ? (r = r || {}, i = [], a = r.states || {}, t = a.hover = a.hover || {}, o.marker && (!e.negative || t.fillColor || s.fillColor) || (t[n.pointAttrToOptions.fill] = t.color || !e.options.color && s[e.negative && u ? "negativeColor" : "color"] || T(e.color).brighten(t.brightness || s.brightness).get()), A = {color: e.color}, m || (A.fillColor = e.color), g || (A.lineColor = e.color), r.hasOwnProperty("color") && !r.color && delete r.color, c && !s.fillColor && (t.fillColor = c), i[""] = n.convertAttribs(Kt(A, r), p[""]), i.hover = n.convertAttribs(a.hover, p.hover, i[""]), i.select = n.convertAttribs(a.select, p.select, i[""])) : i = p, e.pointAttr = i
                }
            },
            destroy: function () {
                var t, e, i, n, o = this, r = o.chart, a = /AppleWebKit\/533/.test(mt), l = o.data || [];
                for (Yt(o, "destroy"), Wt(o), zt(o.axisTypes || [], function (t) {
                    (n = o[t]) && (s(n.series, o), n.isDirty = n.forceRedraw = !0)
                }), o.legendItem && o.chart.legend.destroyItem(o), t = l.length; t--;) (e = l[t]) && e.destroy && e.destroy();
                o.points = null, clearTimeout(o.animationTimeout);
                for (i in o) o[i] instanceof I && !o[i].survive && (t = a && "group" === i ? "hide" : "destroy", o[i][t]());
                r.hoverSeries === o && (r.hoverSeries = null), s(r.series, o);
                for (i in o) delete o[i]
            },
            getGraphPath: function (t, e, i) {
                var n, o, r = this, a = r.options, s = a.step, d = [], u = [], t = t || r.points;
                return (n = t.reversed) && t.reverse(), (s = {
                    right: 1,
                    center: 2
                }[s] || s && 3) && n && (s = 4 - s), a.connectNulls && !e && !i && (t = this.getValidPoints(t)), zt(t, function (n, c) {
                    var h = n.plotX, p = n.plotY, f = t[c - 1];
                    (n.leftCliff || f && f.rightCliff) && !i && (o = !0), n.isNull && !l(e) && c > 0 ? o = !a.connectNulls : n.isNull && !e ? o = !0 : (0 === c || o ? f = [Dt, n.plotX, n.plotY] : r.getPointSpline ? f = r.getPointSpline(t, n, c) : s ? (f = 1 === s ? [Ot, f.plotX, p] : 2 === s ? [Ot, (f.plotX + h) / 2, f.plotY, Ot, (f.plotX + h) / 2, p] : [Ot, h, f.plotY], f.push(Ot, h, p)) : f = [Ot, h, p], u.push(n.x), s && u.push(n.x), d.push.apply(d, f), o = !1)
                }), d.xMap = u, r.graphPath = d
            },
            drawGraph: function () {
                var t = this, e = this.options, i = [["graph", e.lineColor || this.color, e.dashStyle]],
                    n = e.lineWidth, o = "square" !== e.linecap, r = (this.gappedPath || this.getGraphPath).call(this);
                zt(this.zones, function (n, o) {
                    i.push(["zoneGraph" + o, n.color || t.color, n.dashStyle || e.dashStyle])
                }), zt(i, function (i, a) {
                    var s = i[0], l = t[s];
                    l ? (l.endX = r.xMap, l.animate({d: r})) : n && r.length && (l = {
                        stroke: i[1],
                        "stroke-width": n,
                        fill: "none",
                        zIndex: 1
                    }, i[2] ? l.dashstyle = i[2] : o && (l["stroke-linecap"] = l["stroke-linejoin"] = "round"), l = t[s] = t.chart.renderer.path(r).attr(l).add(t.group).shadow(a < 2 && e.shadow)), l && (l.startX = r.xMap, l.isArea = r.isArea)
                })
            },
            applyZones: function () {
                var t, e, i, n, o, r, a, s = this, l = this.chart, d = l.renderer, u = this.zones, c = this.clips || [],
                    h = this.graph, p = this.area, f = dt(l.chartWidth, l.chartHeight),
                    g = this[(this.zoneAxis || "y") + "Axis"], m = g.reversed, A = l.inverted, y = g.horiz, x = !1;
                u.length && (h || p) && g.min !== D && (h && h.hide(), p && p.hide(), n = g.getExtremes(), zt(u, function (u, b) {
                    t = m ? y ? l.plotWidth : 0 : y ? 0 : g.toPixels(n.min), t = ut(dt(jQueryt(e, t), 0), f), e = ut(dt(at(g.toPixels(jQueryt(u.value, n.max), !0)), 0), f), x && (t = e = g.toPixels(n.max)), o = Math.abs(t - e), r = ut(t, e), a = dt(t, e), g.isXAxis ? (i = {
                        x: A ? a : r,
                        y: 0,
                        width: o,
                        height: f
                    }, y || (i.x = l.plotHeight - i.x)) : (i = {
                        x: 0,
                        y: A ? a : r,
                        width: f,
                        height: o
                    }, y && (i.y = l.plotWidth - i.y)), l.inverted && d.isVML && (i = g.isXAxis ? {
                        x: 0,
                        y: m ? r : a,
                        height: i.width,
                        width: l.chartWidth
                    } : {
                        x: i.y - l.plotLeft - l.spacingBox.x,
                        y: 0,
                        width: i.height,
                        height: l.chartHeight
                    }), c[b] ? c[b].animate(i) : (c[b] = d.clipRect(i), h && s["zoneGraph" + b].clip(c[b]), p && s["zoneArea" + b].clip(c[b])), x = u.value > n.max
                }), this.clips = c)
            },
            invertGroups: function () {
                function t() {
                    var t = {width: e.yAxis.len, height: e.xAxis.len};
                    zt(["group", "markerGroup"], function (i) {
                        e[i] && e[i].attr(t).invert()
                    })
                }

                var e = this, i = e.chart;
                e.xAxis && (Ht(i, "resize", t), Ht(e, "destroy", function () {
                    Wt(i, "resize", t)
                }), t(), e.invertGroups = t)
            },
            plotGroup: function (t, e, i, n, o) {
                var r = this[t], a = !r;
                return a && (this[t] = r = this.chart.renderer.g(e).attr({zIndex: n || .1}).add(o), r.addClass("highcharts-series-" + this.index)), r.attr({visibility: i})[a ? "attr" : "animate"](this.getPlotBox()), r
            },
            getPlotBox: function () {
                var t = this.chart, e = this.xAxis, i = this.yAxis;
                return t.inverted && (e = i, i = this.xAxis), {
                    translateX: e ? e.left : t.plotLeft,
                    translateY: i ? i.top : t.plotTop,
                    scaleX: 1,
                    scaleY: 1
                }
            },
            render: function () {
                var t, e = this, i = e.chart, n = e.options,
                    o = !!e.animate && i.renderer.isSVG && M(n.animation).duration,
                    r = e.visible ? "inherit" : "hidden", a = n.zIndex, s = e.hasRendered, l = i.seriesGroup;
                t = e.plotGroup("group", "series", r, a, l), e.markerGroup = e.plotGroup("markerGroup", "markers", r, a, l), o && e.animate(!0), e.getAttribs(), t.inverted = !!e.isCartesian && i.inverted, e.drawGraph && (e.drawGraph(), e.applyZones()), zt(e.points, function (t) {
                    t.redraw && t.redraw()
                }), e.drawDataLabels && e.drawDataLabels(), e.visible && e.drawPoints(), e.drawTracker && e.options.enableMouseTracking !== !1 && e.drawTracker(), i.inverted && e.invertGroups(), n.clip !== !1 && !e.sharedClipKey && !s && t.clip(i.clipRect), o && e.animate(), s || (e.animationTimeout = c(function () {
                    e.afterAnimate()
                }, o)), e.isDirty = e.isDirtyData = !1, e.hasRendered = !0
            },
            redraw: function () {
                var t = this.chart, e = this.isDirty || this.isDirtyData, i = this.group, n = this.xAxis,
                    o = this.yAxis;
                i && (t.inverted && i.attr({
                    width: t.plotWidth,
                    height: t.plotHeight
                }), i.animate({
                    translateX: jQueryt(n && n.left, t.plotLeft),
                    translateY: jQueryt(o && o.top, t.plotTop)
                })), this.translate(), this.render(), e && delete this.kdTree
            },
            kdDimensions: 1,
            kdAxisArray: ["clientX", "plotY"],
            searchPoint: function (t, e) {
                var i = this.xAxis, n = this.yAxis, o = this.chart.inverted;
                return this.searchKDTree({
                    clientX: o ? i.len - t.chartY + i.pos : t.chartX - i.pos,
                    plotY: o ? n.len - t.chartX + n.pos : t.chartY - n.pos
                }, e)
            },
            buildKDTree: function () {
                function t(i, n, o) {
                    var r, a;
                    if (a = i && i.length) return r = e.kdAxisArray[n % o], i.sort(function (t, e) {
                        return t[r] - e[r]
                    }), a = Math.floor(a / 2), {
                        point: i[a],
                        left: t(i.slice(0, a), n + 1, o),
                        right: t(i.slice(a + 1), n + 1, o)
                    }
                }

                var e = this, i = e.kdDimensions;
                delete e.kdTree, c(function () {
                    e.kdTree = t(e.getValidPoints(null, !e.directTouch), i, i)
                }, e.options.kdNow ? 0 : 1)
            },
            searchKDTree: function (t, e) {
                function i(t, e, s, d) {
                    var u, c, h = e.point, p = n.kdAxisArray[s % d], f = h;
                    return c = l(t[o]) && l(h[o]) ? Math.pow(t[o] - h[o], 2) : null, u = l(t[r]) && l(h[r]) ? Math.pow(t[r] - h[r], 2) : null, u = (c || 0) + (u || 0), h.dist = l(u) ? Math.sqrt(u) : Number.MAX_VALUE, h.distX = l(c) ? Math.sqrt(c) : Number.MAX_VALUE, p = t[p] - h[p], u = p < 0 ? "left" : "right", c = p < 0 ? "right" : "left", e[u] && (u = i(t, e[u], s + 1, d), f = u[a] < f[a] ? u : h), e[c] && Math.sqrt(p * p) < f[a] && (t = i(t, e[c], s + 1, d), f = t[a] < f[a] ? t : f), f
                }

                var n = this, o = this.kdAxisArray[0], r = this.kdAxisArray[1], a = e ? "distX" : "dist";
                if (this.kdTree || this.buildKDTree(), this.kdTree) return i(t, this.kdTree, this.kdDimensions, this.kdDimensions)
            }
        }, L.prototype = {
            destroy: function () {
                S(this, this.axis)
            }, render: function (t) {
                var e = this.options, i = e.format, i = i ? A(i, this) : e.formatter.call(this);
                this.label ? this.label.attr({
                    text: i,
                    visibility: "hidden"
                }) : this.label = this.axis.chart.renderer.text(i, null, null, e.useHTML).css(e.style).attr({
                    align: this.textAlign,
                    rotation: e.rotation,
                    visibility: "hidden"
                }).add(t)
            }, setOffset: function (t, e) {
                var i = this.axis, n = i.chart, o = n.inverted, r = i.reversed,
                    r = this.isNegative && !r || !this.isNegative && r,
                    a = i.translate(i.usePercentage ? 100 : this.total, 0, 0, 0, 1), i = i.translate(0), i = ct(a - i),
                    s = n.xAxis[0].translate(this.x) + t, l = n.plotHeight, r = {
                        x: o ? r ? a : a - i : s,
                        y: o ? l - s - e : r ? l - a - i : l - a,
                        width: o ? i : e,
                        height: o ? e : i
                    };
                (o = this.label) && (o.align(this.alignOptions, null, r), r = o.alignAttr, o[this.options.crop === !1 || n.isInsidePlot(r.x, r.y) ? "show" : "hide"](!0))
            }
        }, me.prototype.getStacks = function () {
            var t = this;
            zt(t.yAxis, function (t) {
                t.stacks && t.hasVisibleSeries && (t.oldStacks = t.stacks)
            }), zt(t.series, function (e) {
                !e.options.stacking || e.visible !== !0 && t.options.chart.ignoreHiddenSeries !== !1 || (e.stackKey = e.type + jQueryt(e.options.stack, ""))
            })
        }, se.prototype.buildStacks = function () {
            var t, e, i = this.series, n = jQueryt(this.options.reversedStacks, !0), o = i.length;
            if (!this.isXAxis) {
                for (this.usePercentage = !1, e = o; e--;) i[n ? e : o - e - 1].setStackedPoints();
                for (e = o; e--;) t = i[n ? e : o - e - 1], t.setStackCliffs && t.setStackCliffs();
                if (this.usePercentage) for (e = 0; e < o; e++) i[e].setPercentStacks()
            }
        }, se.prototype.renderStackTotals = function () {
            var t, e, i = this.chart, n = i.renderer, o = this.stacks, r = this.stackTotalGroup;
            r || (this.stackTotalGroup = r = n.g("stack-labels").attr({
                visibility: "visible",
                zIndex: 6
            }).add()), r.translate(i.plotLeft, i.plotTop);
            for (t in o) for (e in i = o[t]) i[e].render(r)
        }, se.prototype.resetStacks = function () {
            var t, e, i = this.stacks;
            if (!this.isXAxis) for (t in i) for (e in i[t]) i[t][e].touched < this.stacksTouched ? (i[t][e].destroy(), delete i[t][e]) : (i[t][e].total = null, i[t][e].cum = 0)
        }, se.prototype.cleanStacks = function () {
            var t, e, i;
            if (!this.isXAxis) {
                this.oldStacks && (t = this.stacks = this.oldStacks);
                for (e in t) for (i in t[e]) t[e][i].cum = t[e][i].total
            }
        }, ye.prototype.setStackedPoints = function () {
            if (this.options.stacking && (this.visible === !0 || this.chart.options.chart.ignoreHiddenSeries === !1)) {
                var t, e, i, n, o, r, a, s = this.processedXData, d = this.processedYData, u = [], c = d.length,
                    h = this.options, p = h.threshold, f = h.startFromThreshold ? p : 0, g = h.stack, h = h.stacking,
                    m = this.stackKey, A = "-" + m, y = this.negStacks, x = this.yAxis, b = x.stacks, v = x.oldStacks;
                for (x.stacksTouched += 1, o = 0; o < c; o++) r = s[o], a = d[o], t = this.getStackIndicator(t, r, this.index), n = t.key, i = (e = y && a < (f ? 0 : p)) ? A : m, b[i] || (b[i] = {}), b[i][r] || (v[i] && v[i][r] ? (b[i][r] = v[i][r], b[i][r].total = null) : b[i][r] = new L(x, x.options.stackLabels, e, r, g)), i = b[i][r], null !== a && (i.points[n] = i.points[this.index] = [jQueryt(i.cum, f)], l(i.cum) || (i.base = n), i.touched = x.stacksTouched, t.index > 0 && this.singleStacks === !1 && (i.points[n][0] = i.points[this.index + "," + r + ",0"][0])), "percent" === h ? (e = e ? m : A, y && b[e] && b[e][r] ? (e = b[e][r], i.total = e.total = dt(e.total, i.total) + ct(a) || 0) : i.total = C(i.total + (ct(a) || 0))) : i.total = C(i.total + (a || 0)), i.cum = jQueryt(i.cum, f) + (a || 0), null !== a && (i.points[n].push(i.cum), u[o] = i.cum);
                "percent" === h && (x.usePercentage = !0), this.stackedYData = u, x.oldStacks = {}
            }
        }, ye.prototype.setPercentStacks = function () {
            var t, e = this, i = e.stackKey, n = e.yAxis.stacks, o = e.processedXData;
            zt([i, "-" + i], function (i) {
                for (var r, a, s, l = o.length; l--;) a = o[l], t = e.getStackIndicator(t, a, e.index), r = (s = n[i] && n[i][a]) && s.points[t.key], (a = r) && (s = s.total ? 100 / s.total : 0, a[0] = C(a[0] * s), a[1] = C(a[1] * s), e.stackedYData[l] = a[1])
            })
        }, ye.prototype.getStackIndicator = function (t, e, i) {
            return l(t) && t.x === e ? t.index++ : t = {x: e, index: 0}, t.key = [i, e, t.index].join(","), t
        }, Kt(me.prototype, {
            addSeries: function (t, e, i) {
                var n, o = this;
                return t && (e = jQueryt(e, !0), Yt(o, "addSeries", {options: t}, function () {
                    n = o.initSeries(t), o.isDirtyLegend = !0, o.linkSeries(), e && o.redraw(i)
                })), n
            }, addAxis: function (t, e, i, o) {
                var r = e ? "xAxis" : "yAxis", a = this.options, t = n(t, {index: this[r].length, isX: e});
                new se(this, t), a[r] = u(a[r] || {}), a[r].push(t), jQueryt(i, !0) && this.redraw(o)
            }, showLoading: function (t) {
                var e = this, i = e.options, n = e.loadingDiv, o = i.loading, r = function () {
                    n && h(n, {
                        left: e.plotLeft + "px",
                        top: e.plotTop + "px",
                        width: e.plotWidth + "px",
                        height: e.plotHeight + "px"
                    })
                };
                n || (e.loadingDiv = n = p(Lt, {className: "highcharts-loading"}, Kt(o.style, {
                    zIndex: 10,
                    display: "none"
                }), e.container), e.loadingSpan = p("span", null, o.labelStyle, n), Ht(e, "redraw", r)), e.loadingSpan.innerHTML = t || i.lang.loading, e.loadingShown || (h(n, {
                    opacity: 0,
                    display: ""
                }), Xt(n, {opacity: o.style.opacity}, {duration: o.showDuration || 0}), e.loadingShown = !0), r()
            }, hideLoading: function () {
                var t = this.options, e = this.loadingDiv;
                e && Xt(e, {opacity: 0}, {
                    duration: t.loading.hideDuration || 100, complete: function () {
                        h(e, {display: "none"})
                    }
                }), this.loadingShown = !1
            }
        }), Kt(Ae.prototype, {
            update: function (t, e, i, n) {
                function o() {
                    a.applyOptions(t), null === a.y && l && (a.graphic = l.destroy()), Jt(t, !0) && (a.redraw = function () {
                        l && l.element && t && t.marker && t.marker.symbol && (a.graphic = l.destroy()), t && t.dataLabels && a.dataLabel && (a.dataLabel = a.dataLabel.destroy()), a.redraw = null
                    }), r = a.index, s.updateParallelArrays(a, r), c && a.name && (c[a.x] = a.name), u.data[r] = Jt(u.data[r], !0) ? a.options : t, s.isDirty = s.isDirtyData = !0, !s.fixedBox && s.hasCartesianSeries && (d.isDirtyBox = !0), "point" === u.legendType && (d.isDirtyLegend = !0), e && d.redraw(i)
                }

                var r, a = this, s = a.series, l = a.graphic, d = s.chart, u = s.options, c = s.xAxis && s.xAxis.names,
                    e = jQueryt(e, !0);
                n === !1 ? o() : a.firePointEvent("update", {options: t}, o)
            }, remove: function (t, e) {
                this.series.removePoint(Vt(this, this.series.data), t, e)
            }
        }), Kt(ye.prototype, {
            addPoint: function (t, e, i, n) {
                var o, r, a, s = this.options, l = this.data, d = this.chart, u = this.xAxis && this.xAxis.names,
                    c = s.data, h = this.xData;
                if (k(n, d), e = jQueryt(e, !0), n = {series: this}, this.pointClass.prototype.applyOptions.apply(n, [t]), a = n.x, r = h.length, this.requireSorting && a < h[r - 1]) for (o = !0; r && h[r - 1] > a;) r--;
                this.updateParallelArrays(n, "splice", r, 0, 0), this.updateParallelArrays(n, r), u && n.name && (u[a] = n.name), c.splice(r, 0, t), o && (this.data.splice(r, 0, null), this.processData()), "point" === s.legendType && this.generatePoints(), i && (l[0] && l[0].remove ? l[0].remove(!1) : (l.shift(), this.updateParallelArrays(n, "shift"), c.shift())), this.isDirtyData = this.isDirty = !0, e && (this.getAttribs(), d.redraw())
            }, removePoint: function (t, e, i) {
                var n = this, o = n.data, r = o[t], a = n.points, s = n.chart, l = function () {
                    a && a.length === o.length && a.splice(t, 1), o.splice(t, 1), n.options.data.splice(t, 1), n.updateParallelArrays(r || {series: n}, "splice", t, 1), r && r.destroy(), n.isDirty = !0, n.isDirtyData = !0, e && s.redraw()
                };
                k(i, s), e = jQueryt(e, !0), r ? r.firePointEvent("remove", null, l) : l()
            }, remove: function (t, e) {
                var i = this, n = i.chart;
                Yt(i, "remove", null, function () {
                    i.destroy(), n.isDirtyLegend = n.isDirtyBox = !0, n.linkSeries(), jQueryt(t, !0) && n.redraw(e)
                })
            }, update: function (t, e) {
                var i, o = this, r = this.chart, a = this.userOptions, s = this.type, l = Ft[s].prototype,
                    d = ["group", "markerGroup", "dataLabelsGroup"];
                (t.type && t.type !== s || void 0 !== t.zIndex) && (d.length = 0), zt(d, function (t) {
                    d[t] = o[t], delete o[t]
                }), t = n(a, {
                    animation: !1,
                    index: this.index,
                    pointStart: this.xData[0]
                }, {data: this.options.data}, t), this.remove(!1);
                for (i in l) this[i] = D;
                Kt(this, Ft[t.type || s].prototype), zt(d, function (t) {
                    o[t] = d[t]
                }), this.init(r, t), r.linkSeries(), jQueryt(e, !0) && r.redraw(!1)
            }
        }), Kt(se.prototype, {
            update: function (t, e) {
                var i = this.chart, t = i.options[this.coll][this.options.index] = n(this.userOptions, t);
                this.destroy(!0), this.init(i, Kt(t, {events: D})), i.isDirtyBox = !0, jQueryt(e, !0) && i.redraw()
            }, remove: function (t) {
                for (var e = this.chart, i = this.coll, n = this.series, o = n.length; o--;) n[o] && n[o].remove(!1);
                s(e.axes, this), s(e[i], this), e.options[i].splice(this.options.index, 1), zt(e[i], function (t, e) {
                    t.options.index = e
                }), this.destroy(), e.isDirtyBox = !0, jQueryt(t, !0) && e.redraw()
            }, setTitle: function (t, e) {
                this.update({title: t}, e)
            }, setCategories: function (t, e) {
                this.update({categories: t}, e)
            }
        });
        var xe = f(ye);
        Ft.line = xe, ee.area = n(ie, {softThreshold: !1, threshold: 0});
        var be = f(ye, {
            type: "area", singleStacks: !1, getStackPoints: function () {
                var t, e, i, n = [], o = [], r = this.xAxis, a = this.yAxis, s = a.stacks[this.stackKey], l = {},
                    d = this.points, u = this.index, c = a.series, h = c.length,
                    p = jQueryt(a.options.reversedStacks, !0) ? 1 : -1;
                if (this.options.stacking) {
                    for (e = 0; e < d.length; e++) l[d[e].x] = d[e];
                    for (i in s) null !== s[i].total && o.push(i);
                    o.sort(function (t, e) {
                        return t - e
                    }), t = _t(c, function () {
                        return this.visible
                    }), zt(o, function (i, d) {
                        var c, f, g = 0;
                        if (l[i] && !l[i].isNull) n.push(l[i]), zt([-1, 1], function (n) {
                            var r = 1 === n ? "rightNull" : "leftNull", a = 0, g = s[o[d + n]];
                            if (g) for (e = u; e >= 0 && e < h;) c = g.points[e], c || (e === u ? l[i][r] = !0 : t[e] && (f = s[i].points[e]) && (a -= f[1] - f[0])), e += p;
                            l[i][1 === n ? "rightCliff" : "leftCliff"] = a
                        }); else {
                            for (e = u; e >= 0 && e < h;) {
                                if (c = s[i].points[e]) {
                                    g = c[1];
                                    break
                                }
                                e += p
                            }
                            g = a.toPixels(g, !0), n.push({isNull: !0, plotX: r.toPixels(i, !0), plotY: g, yBottom: g})
                        }
                    })
                }
                return n
            }, getGraphPath: function (t) {
                var e, i, n, o, r = ye.prototype.getGraphPath, a = this.options, s = a.stacking, l = this.yAxis, d = [],
                    u = [], c = this.index, h = l.stacks[this.stackKey], p = a.threshold,
                    f = l.getThreshold(a.threshold), a = a.connectNulls || "percent" === s, g = function (e, i, o) {
                        var r, a, g = t[e], e = s && h[g.x].points[c], m = g[o + "Null"] || 0, o = g[o + "Cliff"] || 0,
                            g = !0;
                        o || m ? (r = (m ? e[0] : e[1]) + o, a = e[0] + o, g = !!m) : !s && t[i] && t[i].isNull && (r = a = p), void 0 !== r && (u.push({
                            plotX: n,
                            plotY: null === r ? f : l.getThreshold(r),
                            isNull: g
                        }), d.push({plotX: n, plotY: null === a ? f : l.getThreshold(a)}))
                    }, t = t || this.points;
                for (s && (t = this.getStackPoints()), e = 0; e < t.length; e++) i = t[e].isNull, n = jQueryt(t[e].rectPlotX, t[e].plotX), o = jQueryt(t[e].yBottom, f), (!i || a) && (a || g(e, e - 1, "left"), i && !s && a || (u.push(t[e]), d.push({
                    x: e,
                    plotX: n,
                    plotY: o
                })), a || g(e, e + 1, "right"));
                return e = r.call(this, u, !0, !0), d.reversed = !0, i = r.call(this, d, !0, !0), i.length && (i[0] = Ot), i = e.concat(i), r = r.call(this, u, !1, a), i.xMap = e.xMap, this.areaPath = i, r
            }, drawGraph: function () {
                this.areaPath = [], ye.prototype.drawGraph.apply(this);
                var t = this, e = this.areaPath, i = this.options, n = [["area", this.color, i.fillColor]];
                zt(this.zones, function (e, o) {
                    n.push(["zoneArea" + o, e.color || t.color, e.fillColor || i.fillColor])
                }), zt(n, function (n) {
                    var o = n[0], r = t[o];
                    r ? (r.endX = e.xMap, r.animate({d: e})) : (r = {
                        fill: n[2] || n[1],
                        zIndex: 0
                    }, n[2] || (r["fill-opacity"] = jQueryt(i.fillOpacity, .75)), r = t[o] = t.chart.renderer.path(e).attr(r).add(t.group), r.isArea = !0), r.startX = e.xMap, r.shiftUnit = i.step ? 2 : 1
                })
            }, drawLegendSymbol: oe.drawRectangle
        });
        return Ft.area = be, ee.spline = n(ie), xe = f(ye, {
            type: "spline", getPointSpline: function (t, e, i) {
                var n, o, r, a, s = e.plotX, l = e.plotY, d = t[i - 1], i = t[i + 1];
                if (d && !d.isNull && i && !i.isNull) {
                    t = d.plotY, r = i.plotX;
                    var i = i.plotY, u = 0;
                    n = (1.5 * s + d.plotX) / 2.5, o = (1.5 * l + t) / 2.5, r = (1.5 * s + r) / 2.5, a = (1.5 * l + i) / 2.5, r !== n && (u = (a - o) * (r - s) / (r - n) + l - a), o += u, a += u, o > t && o > l ? (o = dt(t, l), a = 2 * l - o) : o < t && o < l && (o = ut(t, l), a = 2 * l - o), a > i && a > l ? (a = dt(i, l), o = 2 * l - a) : a < i && a < l && (a = ut(i, l), o = 2 * l - a), e.rightContX = r, e.rightContY = a
                }
                return e = ["C", jQueryt(d.rightContX, d.plotX), jQueryt(d.rightContY, d.plotY), jQueryt(n, s), jQueryt(o, l), s, l], d.rightContX = d.rightContY = null, e
            }
        }), Ft.spline = xe, ee.areaspline = n(ee.area), be = be.prototype, xe = f(xe, {
            type: "areaspline",
            getStackPoints: be.getStackPoints,
            getGraphPath: be.getGraphPath,
            setStackCliffs: be.setStackCliffs,
            drawGraph: be.drawGraph,
            drawLegendSymbol: oe.drawRectangle
        }), Ft.areaspline = xe, ee.column = n(ie, {
            borderColor: "#FFFFFF",
            borderRadius: 0,
            groupPadding: .2,
            marker: null,
            pointPadding: .1,
            minPointLength: 0,
            cropThreshold: 50,
            pointRange: null,
            states: {
                hover: {brightness: .1, shadow: !1, halo: !1},
                select: {color: "#C0C0C0", borderColor: "#000000", shadow: !1}
            },
            dataLabels: {align: null, verticalAlign: null, y: null},
            softThreshold: !1,
            startFromThreshold: !0,
            stickyTracking: !1,
            tooltip: {distance: 6},
            threshold: 0
        }), xe = f(ye, {
            type: "column",
            pointAttrToOptions: {stroke: "borderColor", fill: "color", r: "borderRadius"},
            cropShoulder: 0,
            directTouch: !0,
            trackerGroups: ["group", "dataLabelsGroup"],
            negStacks: !0,
            init: function () {
                ye.prototype.init.apply(this, arguments);
                var t = this, e = t.chart;
                e.hasRendered && zt(e.series, function (e) {
                    e.type === t.type && (e.isDirty = !0)
                })
            },
            getColumnMetrics: function () {
                var t, e = this, i = e.options, n = e.xAxis, o = e.yAxis, r = n.reversed, a = {}, s = 0;
                i.grouping === !1 ? s = 1 : zt(e.chart.series, function (i) {
                    var n, r = i.options, l = i.yAxis;
                    i.type === e.type && i.visible && o.len === l.len && o.pos === l.pos && (r.stacking ? (t = i.stackKey, a[t] === D && (a[t] = s++), n = a[t]) : r.grouping !== !1 && (n = s++), i.columnIndex = n)
                });
                var l = ut(ct(n.transA) * (n.ordinalSlope || i.pointRange || n.closestPointRange || n.tickInterval || 1), n.len),
                    d = l * i.groupPadding, u = (l - 2 * d) / s,
                    i = ut(i.maxPointWidth || n.len, jQueryt(i.pointWidth, u * (1 - 2 * i.pointPadding)));
                return e.columnMetrics = {
                    width: i,
                    offset: (u - i) / 2 + (d + ((e.columnIndex || 0) + (r ? 1 : 0)) * u - l / 2) * (r ? -1 : 1)
                }, e.columnMetrics
            },
            crispCol: function (t, e, i, n) {
                var o = this.chart, r = this.borderWidth, a = -(r % 2 ? .5 : 0), r = r % 2 ? .5 : 1;
                return o.inverted && o.renderer.isVML && (r += 1), i = Math.round(t + i) + a, t = Math.round(t) + a, i -= t, n = Math.round(e + n) + r, a = ct(e) <= .5 && n > .5, e = Math.round(e) + r, n -= e, a && n && (e -= 1, n += 1), {
                    x: t,
                    y: e,
                    width: i,
                    height: n
                }
            },
            translate: function () {
                var t = this, e = t.chart, i = t.options,
                    n = t.borderWidth = jQueryt(i.borderWidth, t.closestPointRange * t.xAxis.transA < 2 ? 0 : 1),
                    o = t.yAxis, r = t.translatedThreshold = o.getThreshold(i.threshold), a = jQueryt(i.minPointLength, 5),
                    s = t.getColumnMetrics(), l = s.width, d = t.barW = dt(l, 1 + 2 * n), u = t.pointXOffset = s.offset;
                e.inverted && (r -= .5), i.pointPadding && (d = lt(d)), ye.prototype.translate.apply(t), zt(t.points, function (i) {
                    var n, s = ut(jQueryt(i.yBottom, r), 9e4), c = 999 + ct(s), c = ut(dt(-c, i.plotY), o.len + c),
                        h = i.plotX + u, p = d, f = ut(c, s), g = dt(c, s) - f;
                    ct(g) < a && a && (g = a, n = !o.reversed && !i.negative || o.reversed && i.negative, f = ct(f - r) > a ? s - a : r - (n ? a : 0)), i.barX = h, i.pointWidth = l, i.tooltipPos = e.inverted ? [o.len + o.pos - e.plotLeft - c, t.xAxis.len - h - p / 2, g] : [h + p / 2, c + o.pos - e.plotTop, g], i.shapeType = "rect", i.shapeArgs = t.crispCol(h, f, p, g)
                })
            },
            getSymbol: Tt,
            drawLegendSymbol: oe.drawRectangle,
            drawGraph: Tt,
            drawPoints: function () {
                var t, e, i = this, o = this.chart, r = i.options, a = o.renderer, s = r.animationLimit || 250;
                zt(i.points, function (d) {
                    var u, c = d.graphic;
                    Zt(d.plotY) && null !== d.y ? (t = d.shapeArgs, u = l(i.borderWidth) ? {"stroke-width": i.borderWidth} : {}, e = d.pointAttr[d.selected ? "select" : ""] || i.pointAttr[""], c ? (qt(c), c.attr(u).attr(e)[o.pointCount < s ? "animate" : "attr"](n(t))) : d.graphic = a[d.shapeType](t).attr(u).attr(e).add(d.group || i.group).shadow(r.shadow, null, r.stacking && !r.borderRadius)) : c && (d.graphic = c.destroy())
                })
            },
            animate: function (t) {
                var e = this, i = this.yAxis, n = e.options, o = this.chart.inverted, r = {};
                Et && (t ? (r.scaleY = .001, t = ut(i.pos + i.len, dt(i.pos, i.toPixels(n.threshold))), o ? r.translateX = t - i.len : r.translateY = t, e.group.attr(r)) : (r[o ? "translateX" : "translateY"] = i.pos, e.group.animate(r, Kt(M(e.options.animation), {
                    step: function (t, i) {
                        e.group.attr({scaleY: dt(.001, i.pos)})
                    }
                })), e.animate = null))
            },
            remove: function () {
                var t = this, e = t.chart;
                e.hasRendered && zt(e.series, function (e) {
                    e.type === t.type && (e.isDirty = !0)
                }), ye.prototype.remove.apply(t, arguments)
            }
        }), Ft.column = xe, ee.bar = n(ee.column), be = f(xe, {
            type: "bar",
            inverted: !0
        }), Ft.bar = be, ee.scatter = n(ie, {
            lineWidth: 0,
            marker: {enabled: !0},
            tooltip: {
                headerFormat: '<span style="color:{point.color}">●</span> <span style="font-size: 10px;"> {series.name}</span><br/>',
                pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
            }
        }), be = f(ye, {
            type: "scatter",
            sorted: !1,
            requireSorting: !1,
            noSharedTooltip: !0,
            trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
            takeOrdinalPosition: !1,
            kdDimensions: 2,
            drawGraph: function () {
                this.options.lineWidth && ye.prototype.drawGraph.call(this)
            }
        }), Ft.scatter = be, ee.pie = n(ie, {
            borderColor: "#FFFFFF",
            borderWidth: 1,
            center: [null, null],
            clip: !1,
            colorByPoint: !0,
            dataLabels: {
                distance: 30, enabled: !0, formatter: function () {
                    return null === this.y ? void 0 : this.point.name
                }, x: 0
            },
            ignoreHiddenPoint: !0,
            legendType: "point",
            marker: null,
            size: null,
            showInLegend: !1,
            slicedOffset: 10,
            states: {hover: {brightness: .1, shadow: !1}},
            stickyTracking: !1,
            tooltip: {followPointer: !0}
        }), ie = {
            type: "pie",
            isCartesian: !1,
            pointClass: f(Ae, {
                init: function () {
                    Ae.prototype.init.apply(this, arguments);
                    var t, e = this;
                    return e.name = jQueryt(e.name, "Slice"), t = function (t) {
                        e.slice("select" === t.type)
                    }, Ht(e, "select", t), Ht(e, "unselect", t), e
                }, setVisible: function (t, e) {
                    var i = this, n = i.series, o = n.chart, r = n.options.ignoreHiddenPoint, e = jQueryt(e, r);
                    t !== i.visible && (i.visible = i.options.visible = t = t === D ? !i.visible : t, n.options.data[Vt(i, n.data)] = i.options, zt(["graphic", "dataLabel", "connector", "shadowGroup"], function (e) {
                        i[e] && i[e][t ? "show" : "hide"](!0)
                    }), i.legendItem && o.legend.colorizeItem(i, t), !t && "hover" === i.state && i.setState(""), r && (n.isDirty = !0), e && o.redraw())
                }, slice: function (t, e, i) {
                    var n = this.series;
                    k(i, n.chart), jQueryt(e, !0), this.sliced = this.options.sliced = t = l(t) ? t : !this.sliced, n.options.data[Vt(this, n.data)] = this.options, t = t ? this.slicedTranslation : {
                        translateX: 0,
                        translateY: 0
                    }, this.graphic.animate(t), this.shadowGroup && this.shadowGroup.animate(t)
                }, haloPath: function (t) {
                    var e = this.shapeArgs, i = this.series.chart;
                    return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(i.plotLeft + e.x, i.plotTop + e.y, e.r + t, e.r + t, {
                        innerR: this.shapeArgs.r,
                        start: e.start,
                        end: e.end
                    })
                }
            }),
            requireSorting: !1,
            directTouch: !0,
            noSharedTooltip: !0,
            trackerGroups: ["group", "dataLabelsGroup"],
            axisTypes: [],
            pointAttrToOptions: {stroke: "borderColor", "stroke-width": "borderWidth", fill: "color"},
            animate: function (t) {
                var e = this, i = e.points, n = e.startAngleRad;
                t || (zt(i, function (t) {
                    var i = t.graphic, o = t.shapeArgs;
                    i && (i.attr({
                        r: t.startR || e.center[3] / 2, start: n,
                        end: n
                    }), i.animate({r: o.r, start: o.start, end: o.end}, e.options.animation))
                }), e.animate = null)
            },
            updateTotals: function () {
                var t, e, i = 0, n = this.points, o = n.length, r = this.options.ignoreHiddenPoint;
                for (t = 0; t < o; t++) e = n[t], e.y < 0 && (e.y = null), i += r && !e.visible ? 0 : e.y;
                for (this.total = i, t = 0; t < o; t++) e = n[t], e.percentage = i > 0 && (e.visible || !r) ? e.y / i * 100 : 0, e.total = i
            },
            generatePoints: function () {
                ye.prototype.generatePoints.call(this), this.updateTotals()
            },
            translate: function (t) {
                this.generatePoints();
                var e, i, n, o, r, a = 0, s = this.options, l = s.slicedOffset, d = l + s.borderWidth,
                    u = s.startAngle || 0, c = this.startAngleRad = ft / 180 * (u - 90),
                    u = (this.endAngleRad = ft / 180 * (jQueryt(s.endAngle, u + 360) - 90)) - c, h = this.points,
                    p = s.dataLabels.distance, s = s.ignoreHiddenPoint, f = h.length;
                for (t || (this.center = t = this.getCenter()), this.getX = function (e, i) {
                    return n = rt.asin(ut((e - t[1]) / (t[2] / 2 + p), 1)), t[0] + (i ? -1 : 1) * ht(n) * (t[2] / 2 + p)
                }, o = 0; o < f; o++) r = h[o], e = c + a * u, s && !r.visible || (a += r.percentage / 100), i = c + a * u, r.shapeType = "arc", r.shapeArgs = {
                    x: t[0],
                    y: t[1],
                    r: t[2] / 2,
                    innerR: t[3] / 2,
                    start: at(1e3 * e) / 1e3,
                    end: at(1e3 * i) / 1e3
                }, n = (i + e) / 2, n > 1.5 * ft ? n -= 2 * ft : n < -ft / 2 && (n += 2 * ft), r.slicedTranslation = {
                    translateX: at(ht(n) * l),
                    translateY: at(pt(n) * l)
                }, e = ht(n) * t[2] / 2, i = pt(n) * t[2] / 2, r.tooltipPos = [t[0] + .7 * e, t[1] + .7 * i], r.half = n < -ft / 2 || n > ft / 2 ? 1 : 0, r.angle = n, d = ut(d, p / 2), r.labelPos = [t[0] + e + ht(n) * p, t[1] + i + pt(n) * p, t[0] + e + ht(n) * d, t[1] + i + pt(n) * d, t[0] + e, t[1] + i, p < 0 ? "center" : r.half ? "right" : "left", n]
            },
            drawGraph: null,
            drawPoints: function () {
                var t, e, i, n, o, r, a = this, s = a.chart.renderer, l = a.options.shadow;
                l && !a.shadowGroup && (a.shadowGroup = s.g("shadow").add(a.group)), zt(a.points, function (d) {
                    null !== d.y && (e = d.graphic, o = d.shapeArgs, i = d.shadowGroup, n = d.pointAttr[d.selected ? "select" : ""], n.stroke || (n.stroke = n.fill), l && !i && (i = d.shadowGroup = s.g("shadow").add(a.shadowGroup)), t = d.sliced ? d.slicedTranslation : {
                        translateX: 0,
                        translateY: 0
                    }, i && i.attr(t), e ? e.setRadialReference(a.center).attr(n).animate(Kt(o, t)) : (r = {"stroke-linejoin": "round"}, d.visible || (r.visibility = "hidden"), d.graphic = e = s[d.shapeType](o).setRadialReference(a.center).attr(n).attr(r).attr(t).add(a.group).shadow(l, i)))
                })
            },
            searchPoint: Tt,
            sortByAngle: function (t, e) {
                t.sort(function (t, i) {
                    return void 0 !== t.angle && (i.angle - t.angle) * e
                })
            },
            drawLegendSymbol: oe.drawRectangle,
            getCenter: re.getCenter,
            getSymbol: Tt
        }, ie = f(ye, ie), Ft.pie = ie, ye.prototype.drawDataLabels = function () {
            var t, e, i, o, r = this, a = r.options, s = a.cursor, d = a.dataLabels, u = r.points,
                c = r.hasRendered || 0, h = jQueryt(d.defer, !0), p = r.chart.renderer;
            (d.enabled || r._hasPointLabels) && (r.dlProcessOptions && r.dlProcessOptions(d), o = r.plotGroup("dataLabelsGroup", "data-labels", h && !c ? "hidden" : "visible", d.zIndex || 6), h && (o.attr({opacity: +c}), c || Ht(r, "afterAnimate", function () {
                r.visible && o.show(!0), o[a.animation ? "animate" : "attr"]({opacity: 1}, {duration: 200})
            })), e = d, zt(u, function (u) {
                var c, h, f, g, m = u.dataLabel, y = u.connector, x = !0, b = {};
                if (t = u.dlOptions || u.options && u.options.dataLabels, c = jQueryt(t && t.enabled, e.enabled) && null !== u.y, m && !c) u.dataLabel = m.destroy(); else if (c) {
                    if (d = n(e, t), g = d.style, c = d.rotation, h = u.getLabelConfig(), i = d.format ? A(d.format, h) : d.formatter.call(h, d), g.color = jQueryt(d.color, g.color, r.color, "black"), m) l(i) ? (m.attr({text: i}), x = !1) : (u.dataLabel = m = m.destroy(), y && (u.connector = y.destroy())); else if (l(i)) {
                        m = {
                            fill: d.backgroundColor,
                            stroke: d.borderColor,
                            "stroke-width": d.borderWidth,
                            r: d.borderRadius || 0,
                            rotation: c,
                            padding: d.padding,
                            zIndex: 1
                        }, "contrast" === g.color && (b.color = d.inside || d.distance < 0 || a.stacking ? p.getContrast(u.color || r.color) : "#000000"), s && (b.cursor = s);
                        for (f in m) m[f] === D && delete m[f];
                        m = u.dataLabel = p[c ? "text" : "label"](i, 0, -9999, d.shape, null, null, d.useHTML).attr(m).css(Kt(g, b)).add(o).shadow(d.shadow)
                    }
                    m && r.alignDataLabel(u, m, d, null, x)
                }
            }))
        }, ye.prototype.alignDataLabel = function (t, e, i, n, o) {
            var r = this.chart, a = r.inverted, s = jQueryt(t.plotX, -9999), l = jQueryt(t.plotY, -9999), d = e.getBBox(),
                u = r.renderer.fontMetrics(i.style.fontSize).b, c = i.rotation, h = i.align,
                p = this.visible && (t.series.forceDL || r.isInsidePlot(s, at(l), a) || n && r.isInsidePlot(s, a ? n.x + 1 : n.y + n.height - 1, a)),
                f = "justify" === jQueryt(i.overflow, "justify");
            p && (n = Kt({
                x: a ? r.plotWidth - l : s,
                y: at(a ? r.plotHeight - s : l),
                width: 0,
                height: 0
            }, n), Kt(i, {
                width: d.width,
                height: d.height
            }), c ? (f = !1, a = r.renderer.rotCorr(u, c), a = {
                x: n.x + i.x + n.width / 2 + a.x,
                y: n.y + i.y + {top: 0, middle: .5, bottom: 1}[i.verticalAlign] * n.height
            }, e[o ? "attr" : "animate"](a).attr({align: h}), s = (c + 720) % 360, s = s > 180 && s < 360, "left" === h ? a.y -= s ? d.height : 0 : "center" === h ? (a.x -= d.width / 2, a.y -= d.height / 2) : "right" === h && (a.x -= d.width, a.y -= s ? 0 : d.height)) : (e.align(i, null, n), a = e.alignAttr), f ? this.justifyDataLabel(e, i, a, d, n, o) : jQueryt(i.crop, !0) && (p = r.isInsidePlot(a.x, a.y) && r.isInsidePlot(a.x + d.width, a.y + d.height)), i.shape && !c && e.attr({
                anchorX: t.plotX,
                anchorY: t.plotY
            })), p || (qt(e), e.attr({y: -9999}), e.placed = !1)
        }, ye.prototype.justifyDataLabel = function (t, e, i, n, o, r) {
            var a, s, l = this.chart, d = e.align, u = e.verticalAlign, c = t.box ? 0 : t.padding || 0;
            a = i.x + c, a < 0 && ("right" === d ? e.align = "left" : e.x = -a, s = !0), a = i.x + n.width - c, a > l.plotWidth && ("left" === d ? e.align = "right" : e.x = l.plotWidth - a, s = !0), a = i.y + c, a < 0 && ("bottom" === u ? e.verticalAlign = "top" : e.y = -a, s = !0), a = i.y + n.height - c, a > l.plotHeight && ("top" === u ? e.verticalAlign = "bottom" : e.y = l.plotHeight - a, s = !0), s && (t.placed = !r, t.align(e, null, o))
        }, Ft.pie && (Ft.pie.prototype.drawDataLabels = function () {
            var t, e, i, n, o, r, a, s, l, d, u, c = this, h = c.data, p = c.chart, f = c.options.dataLabels,
                g = jQueryt(f.connectorPadding, 10), m = jQueryt(f.connectorWidth, 1), A = p.plotWidth, y = p.plotHeight,
                x = jQueryt(f.softConnector, !0), b = f.distance, v = c.center, S = v[2] / 2, E = v[1], C = b > 0,
                k = [[], []], M = [0, 0, 0, 0], P = function (t, e) {
                    return e.y - t.y
                };
            if (c.visible && (f.enabled || c._hasPointLabels)) {
                for (ye.prototype.drawDataLabels.apply(c), zt(h, function (t) {
                    t.dataLabel && t.visible && (k[t.half].push(t), t.dataLabel._pos = null)
                }), d = 2; d--;) {
                    var T, I = [], R = [], L = k[d], D = L.length;
                    if (D) {
                        for (c.sortByAngle(L, d - .5), u = h = 0; !h && L[u];) h = L[u] && L[u].dataLabel && (L[u].dataLabel.getBBox().height || 21), u++;
                        if (b > 0) {
                            for (o = ut(E + S + b, p.plotHeight), u = dt(0, E - S - b); u <= o; u += h) I.push(u);
                            if (o = I.length, D > o) {
                                for (t = [].concat(L), t.sort(P), u = D; u--;) t[u].rank = u;
                                for (u = D; u--;) L[u].rank >= o && L.splice(u, 1);
                                D = L.length
                            }
                            for (u = 0; u < D; u++) {
                                t = L[u], r = t.labelPos, t = 9999;
                                var O, B;
                                for (B = 0; B < o; B++) O = ct(I[B] - r[1]), O < t && (t = O, T = B);
                                if (T < u && null !== I[u]) T = u; else for (o < D - u + T && null !== I[u] && (T = o - D + u); null === I[T];) T++;
                                R.push({i: T, y: I[T]}), I[T] = null
                            }
                            R.sort(P)
                        }
                        for (u = 0; u < D; u++) t = L[u], r = t.labelPos, n = t.dataLabel, l = t.visible === !1 ? "hidden" : "inherit", t = r[1], b > 0 ? (o = R.pop(), T = o.i, s = o.y, (t > s && null !== I[T + 1] || t < s && null !== I[T - 1]) && (s = ut(dt(0, t), p.plotHeight))) : s = t, a = f.justify ? v[0] + (d ? -1 : 1) * (S + b) : c.getX(s === E - S - b || s === E + S + b ? t : s, d), n._attr = {
                            visibility: l,
                            align: r[6]
                        }, n._pos = {
                            x: a + f.x + ({left: g, right: -g}[r[6]] || 0),
                            y: s + f.y - 10
                        }, n.connX = a, n.connY = s, null === this.options.size && (o = n.width, a - o < g ? M[3] = dt(at(o - a + g), M[3]) : a + o > A - g && (M[1] = dt(at(a + o - A + g), M[1])), s - h / 2 < 0 ? M[0] = dt(at(-s + h / 2), M[0]) : s + h / 2 > y && (M[2] = dt(at(s + h / 2 - y), M[2])))
                    }
                }
                (0 === w(M) || this.verifyDataLabelOverflow(M)) && (this.placeDataLabels(), C && m && zt(this.points, function (t) {
                    e = t.connector, r = t.labelPos, (n = t.dataLabel) && n._pos && t.visible ? (l = n._attr.visibility, a = n.connX, s = n.connY, i = x ? [Dt, a + ("left" === r[6] ? 5 : -5), s, "C", a, s, 2 * r[2] - r[4], 2 * r[3] - r[5], r[2], r[3], Ot, r[4], r[5]] : [Dt, a + ("left" === r[6] ? 5 : -5), s, Ot, r[2], r[3], Ot, r[4], r[5]], e ? (e.animate({d: i}), e.attr("visibility", l)) : t.connector = e = c.chart.renderer.path(i).attr({
                        "stroke-width": m,
                        stroke: f.connectorColor || t.color || "#606060",
                        visibility: l
                    }).add(c.dataLabelsGroup)) : e && (t.connector = e.destroy())
                }))
            }
        }, Ft.pie.prototype.placeDataLabels = function () {
            zt(this.points, function (t) {
                var e = t.dataLabel;
                e && t.visible && ((t = e._pos) ? (e.attr(e._attr), e[e.moved ? "animate" : "attr"](t), e.moved = !0) : e && e.attr({y: -9999}))
            })
        }, Ft.pie.prototype.alignDataLabel = Tt, Ft.pie.prototype.verifyDataLabelOverflow = function (t) {
            var e, i = this.center, n = this.options, o = n.center, r = n.minSize || 80, a = r;
            return null !== o[0] ? a = dt(i[2] - dt(t[1], t[3]), r) : (a = dt(i[2] - t[1] - t[3], r), i[0] += (t[3] - t[1]) / 2), null !== o[1] ? a = dt(ut(a, i[2] - dt(t[0], t[2])), r) : (a = dt(ut(a, i[2] - t[0] - t[2]), r), i[1] += (t[0] - t[2]) / 2), a < i[2] ? (i[2] = a, i[3] = Math.min(/%jQuery/.test(n.innerSize || 0) ? a * parseFloat(n.innerSize || 0) / 100 : parseFloat(n.innerSize || 0), a), this.translate(i), this.drawDataLabels && this.drawDataLabels()) : e = !0, e
        }), Ft.column && (Ft.column.prototype.alignDataLabel = function (t, e, i, o, r) {
            var a = this.chart.inverted, s = t.series, l = t.dlBox || t.shapeArgs,
                d = jQueryt(t.below, t.plotY > jQueryt(this.translatedThreshold, s.yAxis.len)),
                u = jQueryt(i.inside, !!this.options.stacking);
            l && (o = n(l), o.y < 0 && (o.height += o.y, o.y = 0), l = o.y + o.height - s.yAxis.len, l > 0 && (o.height -= l), a && (o = {
                x: s.yAxis.len - o.y - o.height,
                y: s.xAxis.len - o.x - o.width,
                width: o.height,
                height: o.width
            }), u || (a ? (o.x += d ? 0 : o.width, o.width = 0) : (o.y += d ? o.height : 0, o.height = 0))), i.align = jQueryt(i.align, !a || u ? "center" : d ? "right" : "left"), i.verticalAlign = jQueryt(i.verticalAlign, a || u ? "middle" : d ? "top" : "bottom"), ye.prototype.alignDataLabel.call(this, t, e, i, o, r)
        }), function (t) {
            var e = t.Chart, i = t.each, n = t.pick, o = t.addEvent;
            e.prototype.callbacks.push(function (t) {
                function e() {
                    var e = [];
                    i(t.series, function (t) {
                        var o = t.options.dataLabels, r = t.dataLabelCollections || ["dataLabel"];
                        (o.enabled || t._hasPointLabels) && !o.allowOverlap && t.visible && i(r, function (o) {
                            i(t.points, function (t) {
                                t[o] && (t[o].labelrank = n(t.labelrank, t.shapeArgs && t.shapeArgs.height), e.push(t[o]))
                            })
                        })
                    }), t.hideOverlappingLabels(e)
                }

                e(), o(t, "redraw", e)
            }), e.prototype.hideOverlappingLabels = function (t) {
                var e, n, o, r, a, s, l, d, u, c = t.length;
                for (n = 0; n < c; n++) (e = t[n]) && (e.oldOpacity = e.opacity, e.newOpacity = 1);
                for (t.sort(function (t, e) {
                    return (e.labelrank || 0) - (t.labelrank || 0)
                }), n = 0; n < c; n++) for (o = t[n], e = n + 1; e < c; ++e) r = t[e], o && r && o.placed && r.placed && 0 !== o.newOpacity && 0 !== r.newOpacity && (a = o.alignAttr, s = r.alignAttr, l = o.parentGroup, d = r.parentGroup, u = 2 * (o.box ? 0 : o.padding), a = !(s.x + d.translateX > a.x + l.translateX + (o.width - u) || s.x + d.translateX + (r.width - u) < a.x + l.translateX || s.y + d.translateY > a.y + l.translateY + (o.height - u) || s.y + d.translateY + (r.height - u) < a.y + l.translateY)) && ((o.labelrank < r.labelrank ? o : r).newOpacity = 0);
                i(t, function (t) {
                    var e, i;
                    t && (i = t.newOpacity, t.oldOpacity !== i && t.placed && (i ? t.show(!0) : e = function () {
                        t.hide()
                    }, t.alignAttr.opacity = i, t[t.isOld ? "animate" : "attr"](t.alignAttr, null, e)), t.isOld = !0)
                })
            }
        }(nt), ie = nt.TrackerMixin = {
            drawTrackerPoint: function () {
                var t = this, e = t.chart, i = e.pointer, n = t.options.cursor, o = n && {cursor: n}, r = function (t) {
                    for (var i, n = t.target; n && !i;) i = n.point, n = n.parentNode;
                    i !== D && i !== e.hoverPoint && i.onMouseOver(t)
                };
                zt(t.points, function (t) {
                    t.graphic && (t.graphic.element.point = t), t.dataLabel && (t.dataLabel.element.point = t)
                }), t._hasTracking || (zt(t.trackerGroups, function (e) {
                    t[e] && (t[e].addClass("highcharts-tracker").on("mouseover", r).on("mouseout", function (t) {
                        i.onTrackerMouseOut(t)
                    }).css(o), B) && t[e].on("touchstart", r)
                }), t._hasTracking = !0)
            }, drawTrackerGraph: function () {
                var t = this, e = t.options, i = e.trackByArea, n = [].concat(i ? t.areaPath : t.graphPath),
                    o = n.length, r = t.chart, a = r.pointer, s = r.renderer, l = r.options.tooltip.snap, d = t.tracker,
                    u = e.cursor, c = u && {cursor: u}, h = function () {
                        r.hoverSeries !== t && t.onMouseOver()
                    }, p = "rgba(192,192,192," + (Et ? 1e-4 : .002) + ")";
                if (o && !i) for (u = o + 1; u--;) n[u] === Dt && n.splice(u + 1, 0, n[u + 1] - l, n[u + 2], Ot), (u && n[u] === Dt || u === o) && n.splice(u, 0, Ot, n[u - 2] + l, n[u - 1]);
                d ? d.attr({d: n}) : (t.tracker = s.path(n).attr({
                    "stroke-linejoin": "round",
                    visibility: t.visible ? "visible" : "hidden",
                    stroke: p,
                    fill: i ? p : "none",
                    "stroke-width": e.lineWidth + (i ? 0 : 2 * l),
                    zIndex: 2
                }).add(t.group), zt([t.tracker, t.markerGroup], function (t) {
                    t.addClass("highcharts-tracker").on("mouseover", h).on("mouseout", function (t) {
                        a.onTrackerMouseOut(t)
                    }).css(c), B && t.on("touchstart", h)
                }))
            }
        }, Ft.column && (xe.prototype.drawTracker = ie.drawTrackerPoint), Ft.pie && (Ft.pie.prototype.drawTracker = ie.drawTrackerPoint), Ft.scatter && (be.prototype.drawTracker = ie.drawTrackerPoint), Kt(ge.prototype, {
            setItemEvents: function (t, e, i, n, o) {
                var r = this;
                (i ? e : t.legendGroup).on("mouseover", function () {
                    t.setState("hover"), e.css(r.options.itemHoverStyle)
                }).on("mouseout", function () {
                    e.css(t.visible ? n : o), t.setState()
                }).on("click", function (e) {
                    var i = function () {
                        t.setVisible && t.setVisible()
                    }, e = {browserEvent: e};
                    t.firePointEvent ? t.firePointEvent("legendItemClick", e, i) : Yt(t, "legendItemClick", e, i)
                })
            }, createCheckboxForItem: function (t) {
                t.checkbox = p("input", {
                    type: "checkbox",
                    checked: t.selected,
                    defaultChecked: t.selected
                }, this.options.itemCheckboxStyle, this.chart.container), Ht(t.checkbox, "click", function (e) {
                    Yt(t.series || t, "checkboxClick", {checked: e.target.checked, item: t}, function () {
                        t.select()
                    })
                })
            }
        }), F.legend.itemStyle.cursor = "pointer", Kt(me.prototype, {
            showResetZoom: function () {
                var t = this, e = F.lang, i = t.options.chart.resetZoomButton, n = i.theme, o = n.states,
                    r = "chart" === i.relativeTo ? null : "plotBox";
                this.resetZoomButton = t.renderer.button(e.resetZoom, null, null, function () {
                    t.zoomOut()
                }, n, o && o.hover).attr({
                    align: i.position.align,
                    title: e.resetZoomTitle
                }).add().align(i.position, !1, r)
            }, zoomOut: function () {
                var t = this;
                Yt(t, "selection", {resetSelection: !0}, function () {
                    t.zoom()
                })
            }, zoom: function (t) {
                var e, i, n = this.pointer, o = !1;
                !t || t.resetSelection ? zt(this.axes, function (t) {
                    e = t.zoom()
                }) : zt(t.xAxis.concat(t.yAxis), function (t) {
                    var i = t.axis, r = i.isXAxis;
                    (n[r ? "zoomX" : "zoomY"] || n[r ? "pinchX" : "pinchY"]) && (e = i.zoom(t.min, t.max), i.displayBtn && (o = !0))
                }), i = this.resetZoomButton, o && !i ? this.showResetZoom() : !o && Jt(i) && (this.resetZoomButton = i.destroy()), e && this.redraw(jQueryt(this.options.chart.animation, t && t.animation, this.pointCount < 100))
            }, pan: function (t, e) {
                var i, n = this, o = n.hoverPoints;
                o && zt(o, function (t) {
                    t.setState()
                }), zt("xy" === e ? [1, 0] : [1], function (e) {
                    var e = n[e ? "xAxis" : "yAxis"][0], o = e.horiz, r = t[o ? "chartX" : "chartY"],
                        o = o ? "mouseDownX" : "mouseDownY", a = n[o], s = (e.pointRange || 0) / 2, l = e.getExtremes(),
                        d = e.toValue(a - r, !0) + s, s = e.toValue(a + e.len - r, !0) - s, a = a > r;
                    e.series.length && (a || d > ut(l.dataMin, l.min)) && (!a || s < dt(l.dataMax, l.max)) && (e.setExtremes(d, s, !1, !1, {trigger: "pan"}), i = !0), n[o] = r
                }), i && n.redraw(!1), h(n.container, {cursor: "move"})
            }
        }), Kt(Ae.prototype, {
            select: function (t, e) {
                var i = this, n = i.series, o = n.chart, t = jQueryt(t, !i.selected);
                i.firePointEvent(t ? "select" : "unselect", {accumulate: e}, function () {
                    i.selected = i.options.selected = t, n.options.data[Vt(i, n.data)] = i.options, i.setState(t && "select"), e || zt(o.getSelectedPoints(), function (t) {
                        t.selected && t !== i && (t.selected = t.options.selected = !1, n.options.data[Vt(t, n.data)] = t.options, t.setState(""), t.firePointEvent("unselect"))
                    })
                })
            }, onMouseOver: function (t, e) {
                var i = this.series, n = i.chart, o = n.tooltip, r = n.hoverPoint;
                n.hoverSeries !== i && i.onMouseOver(), r && r !== this && r.onMouseOut(), this.series && (this.firePointEvent("mouseOver"), o && (!o.shared || i.noSharedTooltip) && o.refresh(this, t), this.setState("hover"), !e) && (n.hoverPoint = this)
            }, onMouseOut: function () {
                var t = this.series.chart, e = t.hoverPoints;
                this.firePointEvent("mouseOut"), e && Vt(this, e) !== -1 || (this.setState(), t.hoverPoint = null)
            }, importEvents: function () {
                if (!this.hasImportedEvents) {
                    var t, e = n(this.series.options.point, this.options).events;
                    this.events = e;
                    for (t in e) Ht(this, t, e[t]);
                    this.hasImportedEvents = !0
                }
            }, setState: function (t, e) {
                var i, o = st(this.plotX), r = this.plotY, a = this.series, s = a.options.states,
                    l = ee[a.type].marker && a.options.marker, d = l && !l.enabled, u = l && l.states[t],
                    c = u && u.enabled === !1, h = a.stateMarkerGraphic, p = this.marker || {}, f = a.chart, g = a.halo,
                    t = t || "";
                i = this.pointAttr[t] || a.pointAttr[t], t === this.state && !e || this.selected && "select" !== t || s[t] && s[t].enabled === !1 || t && (c || d && u.enabled === !1) || t && p.states && p.states[t] && p.states[t].enabled === !1 || (this.graphic ? (l = l && this.graphic.symbolName && i.r, this.graphic.attr(n(i, l ? {
                    x: o - l,
                    y: r - l,
                    width: 2 * l,
                    height: 2 * l
                } : {})), h && h.hide()) : (t && u && (l = u.radius, p = p.symbol || a.symbol, h && h.currentSymbol !== p && (h = h.destroy()), h ? h[e ? "animate" : "attr"]({
                    x: o - l,
                    y: r - l
                }) : p && (a.stateMarkerGraphic = h = f.renderer.symbol(p, o - l, r - l, 2 * l, 2 * l).attr(i).add(a.markerGroup), h.currentSymbol = p)), h && (h[t && f.isInsidePlot(o, r, f.inverted) ? "show" : "hide"](), h.element.point = this)), (o = s[t] && s[t].halo) && o.size ? (g || (a.halo = g = f.renderer.path().add(f.seriesGroup)), g.attr(Kt({
                    fill: this.color || a.color,
                    "fill-opacity": o.opacity,
                    zIndex: -1
                }, o.attributes))[e ? "animate" : "attr"]({d: this.haloPath(o.size)})) : g && g.attr({d: []}), this.state = t)
            }, haloPath: function (t) {
                var e = this.series, i = e.chart, n = e.getPlotBox(), o = i.inverted, r = Math.floor(this.plotX);
                return i.renderer.symbols.circle(n.translateX + (o ? e.yAxis.len - this.plotY : r) - t, n.translateY + (o ? e.xAxis.len - r : this.plotY) - t, 2 * t, 2 * t)
            }
        }), Kt(ye.prototype, {
            onMouseOver: function () {
                var t = this.chart, e = t.hoverSeries;
                e && e !== this && e.onMouseOut(), this.options.events.mouseOver && Yt(this, "mouseOver"), this.setState("hover"), t.hoverSeries = this
            }, onMouseOut: function () {
                var t = this.options, e = this.chart, i = e.tooltip, n = e.hoverPoint;
                e.hoverSeries = null, n && n.onMouseOut(), this && t.events.mouseOut && Yt(this, "mouseOut"), i && !t.stickyTracking && (!i.shared || this.noSharedTooltip) && i.hide(), this.setState()
            }, setState: function (t) {
                var e = this.options, i = this.graph, n = e.states, o = e.lineWidth, e = 0, t = t || "";
                if (this.state !== t && (this.state = t, !(n[t] && n[t].enabled === !1) && (t && (o = n[t].lineWidth || o + (n[t].lineWidthPlus || 0)), i && !i.dashstyle))) for (t = {"stroke-width": o}, i.attr(t); this["zoneGraph" + e];) this["zoneGraph" + e].attr(t), e += 1
            }, setVisible: function (t, e) {
                var i, n = this, o = n.chart, r = n.legendItem, a = o.options.chart.ignoreHiddenSeries, s = n.visible;
                i = (n.visible = t = n.userOptions.visible = t === D ? !s : t) ? "show" : "hide", zt(["group", "dataLabelsGroup", "markerGroup", "tracker"], function (t) {
                    n[t] && n[t][i]()
                }), o.hoverSeries !== n && (o.hoverPoint && o.hoverPoint.series) !== n || n.onMouseOut(), r && o.legend.colorizeItem(n, t), n.isDirty = !0, n.options.stacking && zt(o.series, function (t) {
                    t.options.stacking && t.visible && (t.isDirty = !0)
                }), zt(n.linkedSeries, function (e) {
                    e.setVisible(t, !1)
                }), a && (o.isDirtyBox = !0), e !== !1 && o.redraw(), Yt(n, i)
            }, show: function () {
                this.setVisible(!0)
            }, hide: function () {
                this.setVisible(!1)
            }, select: function (t) {
                this.selected = t = t === D ? !this.selected : t, this.checkbox && (this.checkbox.checked = t), Yt(this, t ? "select" : "unselect")
            }, drawTracker: ie.drawTrackerGraph
        }), Kt(nt, {
            Color: T,
            Point: Ae,
            Tick: R,
            Renderer: O,
            SVGElement: I,
            SVGRenderer: ne,
            arrayMin: v,
            arrayMax: w,
            charts: It,
            correctFloat: C,
            dateFormat: N,
            error: e,
            format: A,
            pathAnim: void 0,
            getOptions: function () {
                return F
            },
            hasBidiBug: Ct,
            isTouchDevice: wt,
            setOptions: function (t) {
                return F = n(!0, F, t), P(), F
            },
            addEvent: Ht,
            removeEvent: Wt,
            createElement: p,
            discardElement: E,
            css: h,
            each: zt,
            map: _t,
            merge: n,
            splat: u,
            stableSort: b,
            extendClass: f,
            pInt: o,
            svg: Et,
            canvas: kt,
            vml: !Et && !kt,
            product: "Highcharts",
            version: "4.2.6"
        }), nt
    })
}, 74, 75, 76, 77, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 52, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (t, e, i, n, o, r) {
    "use strict";

    function a(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    function s(t) {
        if ((0, d["default"])(t)) return t;
        if ((0, c["default"])(t)) {
            var e = [];
            for (var i in t) t.hasOwnProperty(i) && e.push(t[i]);
            return e
        }
        return (0, p["default"])(t) ? t.split() : []
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = s;
    var l = i(n), d = a(l), u = i(o), c = a(u), h = i(r), p = a(h)
}, , function (t, e, i, n) {
    "use strict";

    function o(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var r = i(n), a = o(r);
    e["default"] = a["default"]
}, , , function (t, e, i, n, o, r) {
    "use strict";

    function a(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    function s(t, e) {
        return null == t || !e && "" === t || (0, d["default"])(t) && 0 === t.length || ((0, c["default"])(t) || (0, p["default"])(t)) && 0 === t.size
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = s;
    var l = i(n), d = a(l), u = i(o), c = a(u), h = i(r), p = a(h)
}, function (t, e, i, n) {
    "use strict";

    function o(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    function r(t) {
        return "number" == typeof t && (0, s["default"])(t)
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = r;
    var a = i(n), s = o(a)
}, , function (t, e, i, n, o) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    function a(t) {
        return (0, l["default"])(t) && !(0, u["default"])(t)
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = a;
    var s = i(n), l = r(s), d = i(o), u = r(d)
}, , , function (t, e, i, n) {
    "use strict";

    function o(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var r = i(n), a = o(r);
    e["default"] = a["default"]
}, function (t, e, i, n) {
    "use strict";

    function o(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    function r(t) {
        for (var e, i = [], n = 0, o = t.length; n < o; n++) e = t[n], (0, s["default"])(e) || i.push(e);
        return i
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = r;
    var a = i(n), s = o(a)
}, , , function (t, e, i, n, o, r, a) {
    "use strict";

    function s(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    function l(t, e, i, n) {
        if ((0, f["default"])(t)) return i = i || (0, h["default"])(i) ? i : "name", t.sort(function (t, o) {
            return (0, m["default"])(t) && (0, m["default"])(o) && (t = t[i], o = o[i]), (0, f["default"])(t) && (0, f["default"])(o) && (t = t[i], o = o[i]), (0, u["default"])(t) && (0, u["default"])(o) ? (t = t.toLowerCase(), o = o.toLowerCase(), "DESC" === e ? t < o ? 1 : t > o ? -1 : 0 : t < o ? -1 : t > o ? 1 : 0) : (0, h["default"])(t) && (0, h["default"])(o) ? "DESC" === e ? o - t : t - o : void 0 === t || null === t ? n ? -1 : 1 : (void 0 === o || null === o) && n ? 1 : -1
        }), t
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = l;
    var d = i(n), u = s(d), c = i(o), h = s(c), p = i(r), f = s(p), g = i(a), m = s(g)
}, , function (t, e, i, n) {
    "use strict";

    function o(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var r = i(n), a = o(r);
    e["default"] = {dhis_highcharts: a["default"]}
}, function (t, e, i, n) {
    "use strict";

    function o(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var r = i(n), a = o(r), s = function (t) {
        return t
    };
    e["default"] = {dhis: a["default"], noValidation: s}
}]));
//# sourceMappingURL=chart.js.map