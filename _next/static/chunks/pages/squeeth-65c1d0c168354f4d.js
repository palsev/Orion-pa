(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7281], {
        49750: function (e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function () {
                    return Lt
                }
            });
            var i = n(8529),
                r = n(95235),
                a = n(2784),
                o = n(90436),
                l = n(98983),
                s = n(67020),
                c = n(79692),
                d = n(46293),
                u = n(33419),
                p = n(68715),
                m = n(82726),
                x = n(6277),
                f = n(55351),
                h = n(27195),
                g = n(77277),
                v = n(96577),
                b = n.n(v),
                j = n(30219),
                y = {
                    src: "/_next/static/media/discord.9f8629dd.svg",
                    height: 512,
                    width: 512
                },
                Z = n(52322);

            function w(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? w(Object(n), !0).forEach((function (t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var T = (0, c.Z)((function (e) {
                    return (0, d.Z)({
                        container: {
                            height: "100vh",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "10px",
                            padding: e.spacing(4)
                        },
                        logoTitle: (0, r.Z)({
                            marginLeft: e.spacing(1)
                        }, e.breakpoints.down("sm"), {
                            fontSize: 18
                        }),
                        info: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "10px"
                        }
                    })
                })),
                S = function (e) {
                    var t = T();
                    return (0, Z.jsxs)(j.u, O(O({
                        title: "Welcome to Orion Testnet!"
                    }, e), {}, {
                        children: [(0, Z.jsx)(o.Z, {
                            variant: "subtitle1",
                            children: "We invite you to orion around! \ud83d\udc31"
                        }), (0, Z.jsx)("div", {
                            className: t.info,
                            children: (0, Z.jsx)("a", {
                                href: "https://faucet.ropsten.be/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: (0, Z.jsx)(g.Z, {
                                    style: {
                                        color: "#000",
                                        textTransform: "none"
                                    },
                                    variant: "contained",
                                    color: "primary",
                                    children: (0, Z.jsx)("span", {
                                        children: "Get test ETH "
                                    })
                                })
                            })
                        }), (0, Z.jsx)("div", {
                            className: t.info,
                            children: (0, Z.jsx)("a", {
                                href: "https://discord.gg/ztEuhjyaBF",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: (0, Z.jsxs)(g.Z, {
                                    style: {
                                        color: "#000",
                                        textTransform: "none"
                                    },
                                    variant: "contained",
                                    color: "primary",
                                    children: [(0, Z.jsx)("span", {
                                        children: "Orion Together"
                                    }), (0, Z.jsx)("span", {
                                        style: {
                                            display: "flex",
                                            marginLeft: "5px"
                                        },
                                        children: (0, Z.jsx)(b(), {
                                            src: y,
                                            alt: "discord",
                                            width: 27,
                                            height: 27
                                        })
                                    })]
                                })
                            })
                        })]
                    }))
                },
                N = n(53887),
                D = n(31257),
                C = n(82269),
                P = n(18452),
                k = n(24015),
                I = n(85256),
                L = n(4614),
                F = n(25237),
                H = n.n(F),
                G = n(85601),
                W = n(61564),
                E = n(34738),
                z = n(37937),
                A = n(38370),
                q = (0, c.Z)((function () {
                    return (0, d.Z)({
                        legendContainer: {
                            display: "flex",
                            gap: "5px"
                        }
                    })
                })),
                R = function (e) {
                    var t = e.bgColor,
                        n = e.text,
                        i = e.tooltip,
                        r = q();
                    return (0, Z.jsxs)(s.Z, {
                        className: r.legendContainer,
                        children: [(0, Z.jsx)(s.Z, {
                            width: 20,
                            height: 20,
                            bgcolor: t
                        }), (0, Z.jsx)("div", {
                            children: n
                        }), i && (0, Z.jsx)(l.ZP, {
                            title: i,
                            children: (0, Z.jsx)(m.Z, {
                                fontSize: "small"
                            })
                        })]
                    })
                },
                B = n(52992),
                M = ["inputRef", "label", "InputProps", "id", "variant"];

            function U(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function K(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? U(Object(n), !0).forEach((function (t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : U(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Y = H()((function () {
                    return n.e(4512).then(n.t.bind(n, 52565, 23))
                }), {
                    ssr: !1,
                    loadableGenerated: {
                        webpack: function () {
                            return [52565]
                        }
                    }
                }),
                _ = (0, c.Z)((function (e) {
                    return (0, d.Z)({
                        label: {
                            fontWeight: 500
                        },
                        payoffContainer: (0, r.Z)({}, e.breakpoints.up("sm"), {
                            maxHeight: "310px"
                        }),
                        legendBox: {
                            display: "flex",
                            gap: "16px",
                            marginTop: "24px",
                            justifyContent: "center"
                        },
                        daysInput: (0, r.Z)({
                            width: "200px"
                        }, e.breakpoints.down("sm"), {
                            width: "auto"
                        }),
                        daysInputLabel: (0, r.Z)({
                            fontSize: "1rem"
                        }, e.breakpoints.down("sm"), {
                            fontSize: "0.9rem"
                        }),
                        grid: {
                            rowGap: "24px",
                            columnGap: "24px",
                            marginRight: "auto",
                            padding: e.spacing(1)
                        },
                        divider: {
                            width: "15px",
                            backgroundColor: "#8C8D8D",
                            height: "1.5px",
                            position: "relative",
                            top: "6px"
                        }
                    })
                })),
                V = (0, c.Z)((function (e) {
                    return (0, d.Z)({
                        labelRoot: {
                            color: "#8C8D8D",
                            fontSize: "14px",
                            fontWeight: 500
                        },
                        inputRoot: {
                            padding: "10px 16px",
                            fontSize: "15px",
                            fontWeight: 500,
                            fontFamily: "DM Mono",
                            width: "14ch",
                            border: "2px solid #303436",
                            borderRadius: "12px"
                        },
                        inputFocused: {
                            borderColor: e.palette.primary.main
                        }
                    })
                })),
                Q = function (e) {
                    e.inputRef;
                    var t = e.label,
                        n = e.InputProps,
                        i = e.id,
                        r = (e.variant, (0, C.Z)(e, M)),
                        a = V();
                    return (0, Z.jsxs)(s.Z, {
                        display: "flex",
                        flexDirection: "column",
                        gridGap: "4px",
                        children: [(0, Z.jsx)(P.Z, {
                            htmlFor: i,
                            classes: {
                                root: a.labelRoot
                            },
                            children: t
                        }), (0, Z.jsx)(k.Z, K({
                            id: i,
                            InputProps: K({
                                classes: {
                                    root: a.inputRoot,
                                    focused: a.inputFocused
                                },
                                disableUnderline: !0
                            }, n)
                        }, r))]
                    })
                };

            function $() {
                var e, t, n, r, a = (0, u.KO)(A.vS),
                    o = (0, i.Z)(a, 2),
                    l = o[0],
                    c = o[1],
                    d = (0, u.KO)(A.du),
                    p = (0, i.Z)(d, 2),
                    m = p[0],
                    x = p[1],
                    f = (0, A.Gu)(),
                    h = null === (e = f.data) || void 0 === e ? void 0 : e.longEthPNL,
                    g = null === (t = f.data) || void 0 === t ? void 0 : t.longSeries,
                    v = null === (n = f.data) || void 0 === n ? void 0 : n.positionSizeSeries,
                    b = null === (r = f.data) || void 0 === r ? void 0 : r.squeethIsLive,
                    j = _(),
                    y = (0, B.Z)((function () {
                        if (h && g && 0 !== g.length && v && b) {
                            var e = Math.max(0, b.findIndex((function (e) {
                                return e
                            })));
                            return [{
                                data: h,
                                legend: "Long ETH PNL (%)",
                                options: {
                                    color: "#CDAEFB"
                                }
                            }, {
                                data: g.slice(0, e),
                                legend: "Long Orion PNL (%) Simulated incl. premiums",
                                options: {
                                    color: "#00E396"
                                }
                            }, {
                                data: g.slice(e),
                                legend: "Long Orion PNL (%) LIVE (incl. premiums)",
                                options: {
                                    color: "#70E3F6"
                                }
                            }]
                        }
                    }), [h, g, v, b]),
                    w = (0, B.Z)((function () {
                        return K(K({}, z.W), {}, {
                            localization: {
                                priceFormatter: function (e) {
                                    return e.toFixed(2) + "%"
                                }
                            }
                        })
                    }), []),
                    O = (0, B.Z)((function () {
                        return g && g.length > 0 ? g[0].time : 0
                    }), [g]),
                    T = (0, B.Z)((function () {
                        return g && g.length > 0 ? g[g.length - 1].time : 0
                    }), [g]);
                return (0, Z.jsxs)(Z.Fragment, {
                    children: [(0, Z.jsx)(W.M, {
                        utils: G.Z,
                        children: (0, Z.jsxs)(s.Z, {
                            display: "flex",
                            alignItems: "center",
                            gridGap: "16px",
                            marginTop: "16px",
                            children: [(0, Z.jsx)(E.M, {
                                label: "Start Date",
                                placeholder: "MM/DD/YYYY",
                                format: "MM/dd/yyyy",
                                value: l,
                                maxDate: new Date,
                                onChange: function (e) {
                                    return c(e || new Date)
                                },
                                animateYearScrolling: !1,
                                autoOk: !0,
                                clearable: !0,
                                TextFieldComponent: Q
                            }), (0, Z.jsx)(I.Z, {
                                orientation: "horizontal",
                                className: j.divider
                            }), (0, Z.jsx)(E.M, {
                                label: "End Date",
                                placeholder: "MM/DD/YYYY",
                                format: "MM/dd/yyyy",
                                value: m,
                                maxDate: new Date,
                                onChange: function (e) {
                                    return x(e || new Date)
                                },
                                animateYearScrolling: !1,
                                autoOk: !0,
                                clearable: !0,
                                TextFieldComponent: Q
                            })]
                        })
                    }), (0, Z.jsx)("div", {
                        className: j.payoffContainer,
                        children: (0, Z.jsxs)("div", {
                            style: {
                                marginTop: "8px"
                            },
                            children: [y ? (0, Z.jsx)(Y, {
                                from: O,
                                to: T,
                                legend: "LONG PNL",
                                options: w,
                                lineSeries: y,
                                autoWidth: !0,
                                height: 300,
                                darkTheme: !0
                            }) : (0, Z.jsx)(s.Z, {
                                display: "flex",
                                height: "300px",
                                width: 1,
                                alignItems: "center",
                                justifyContent: "center",
                                children: (0, Z.jsx)(L.Z, {
                                    size: 40,
                                    color: "secondary"
                                })
                            }), (0, Z.jsxs)("div", {
                                className: j.legendBox,
                                children: [y && y[0].data.length > 0 && (0, Z.jsx)(R, {
                                    bgColor: "#CDAEFB",
                                    text: "ETH PNL"
                                }), y && y[1].data.length > 0 && (0, Z.jsx)(R, {
                                    bgColor: "#00E396",
                                    text: "Orion Simulated PnL",
                                    tooltip: "The Orion Simulated PnL comes from using at the money implied vol from Deribit"
                                }), y && y[2].data.length > 0 && (0, Z.jsx)(R, {
                                    bgColor: "#70E3F6",
                                    text: "Orion PNL"
                                })]
                            })]
                        })
                    })]
                })
            }
            var J, X, ee = (0, a.memo)($),
                te = (0, c.Z)((function () {
                    return (0, d.Z)({
                        wrapper: {
                            display: "flex",
                            alignItems: "center"
                        },
                        switchItem: {
                            padding: "3px 8px",
                            margin: "4px",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            borderRadius: 12,
                            "& p": {
                                fontSize: 14
                            }
                        },
                        selectedItem: {
                            background: "#ddd",
                            color: "#333"
                        }
                    })
                })),
                ne = function (e) {
                    var t = e.items,
                        n = e.value,
                        i = e.onChange,
                        r = te();
                    return (0, Z.jsx)("div", {
                        className: r.wrapper,
                        children: t.map((function (e) {
                            return (0, Z.jsxs)("div", {
                                className: (0, x.default)(r.switchItem, e.id === n.id && r.selectedItem),
                                onClick: function () {
                                    return i(e)
                                },
                                children: [e.beforeText && e.itemToAdd && e.itemToAdd, (0, Z.jsx)(o.Z, {
                                    children: e.text
                                }), !e.beforeText && e.itemToAdd && e.itemToAdd]
                            }, e.id)
                        }))
                    })
                },
                ie = n(36268),
                re = n(78680),
                ae = n(7328),
                oe = n(22841),
                le = (0, oe.Ps)(J || (J = (0, ae.Z)(["\n  query normalizationFactorUpdates($lastID: String) {\n    normalizationFactorUpdates(first: 1000, orderBy: timestamp, where: { id_gt: $lastID }) {\n      id\n      oldNormFactor\n      newNormFactor\n      lastModificationTimestamp\n      timestamp\n    }\n  }\n"]))),
                se = ((0, oe.Ps)(X || (X = (0, ae.Z)(["\n  query normalizationFactorUpdatesTime($timestamp: Int, $timestampOnedayAfter: Int) {\n    normalizationFactorUpdates(where: { timestamp_gte: $timestamp, timestamp_lt: $timestampOnedayAfter }) {\n      id\n      oldNormFactor\n      newNormFactor\n      lastModificationTimestamp\n      timestamp\n    }\n  }\n"]))), le),
                ce = n(55606);

            function de(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function ue(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? de(Object(n), !0).forEach((function (t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : de(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var pe = H()((function () {
                    return n.e(4512).then(n.t.bind(n, 52565, 23))
                }), {
                    ssr: !1,
                    loadableGenerated: {
                        webpack: function () {
                            return [52565]
                        }
                    }
                }),
                me = (0, c.Z)((function () {
                    return (0, d.Z)({
                        switchWrapper: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexWrap: "wrap",
                            marginBottom: "16px"
                        },
                        legendBox: {
                            display: "flex",
                            gap: "16px",
                            marginTop: "24px",
                            justifyContent: "center"
                        },
                        legendContainer: {
                            display: "flex",
                            gap: "5px"
                        },
                        iconWrapper: {
                            display: "flex",
                            marginLeft: 6
                        }
                    })
                })),
                xe = function () {
                    var e = me(),
                        t = [{
                            id: "funding",
                            text: "Premium"
                        }, {
                            id: "vol",
                            text: "VOL",
                            itemToAdd: (0, Z.jsx)("div", {
                                className: e.iconWrapper,
                                children: (0, Z.jsx)(l.ZP, {
                                    title: ce.Bm.FundingVol,
                                    children: (0, Z.jsx)(m.Z, {
                                        fontSize: "small"
                                    })
                                })
                            })
                        }],
                        n = [{
                            id: "day",
                            text: "Day",
                            itemToAdd: (0, Z.jsx)("div", {
                                className: e.iconWrapper,
                                children: (0, Z.jsx)(l.ZP, {
                                    title: ce.Bm.FundingDaily,
                                    children: (0, Z.jsx)(m.Z, {
                                        fontSize: "small"
                                    })
                                })
                            })
                        }, {
                            id: "month",
                            text: "Month",
                            itemToAdd: (0, Z.jsx)("div", {
                                className: e.iconWrapper,
                                children: (0, Z.jsx)(l.ZP, {
                                    title: ce.Bm.FundingMonthly,
                                    children: (0, Z.jsx)(m.Z, {
                                        fontSize: "small"
                                    })
                                })
                            })
                        }, {
                            id: "year",
                            text: "Annualized",
                            itemToAdd: (0, Z.jsx)("div", {
                                className: e.iconWrapper,
                                children: (0, Z.jsx)(l.ZP, {
                                    title: ce.Bm.FundingAnnual,
                                    children: (0, Z.jsx)(m.Z, {
                                        fontSize: "small"
                                    })
                                })
                            })
                        }],
                        i = (0, a.useState)(t[0]),
                        r = i[0],
                        o = i[1],
                        c = (0, a.useState)(n[0]),
                        d = c[0],
                        p = c[1],
                        x = function () {
                            var e = (0, u.Dv)(D.vH),
                                t = (0, a.useRef)(""),
                                n = (0, a.useState)([]),
                                i = n[0],
                                r = n[1],
                                o = (0, a.useState)(!1),
                                l = o[0],
                                s = o[1],
                                c = (0, ie.a)(se, {
                                    variables: {
                                        lastID: ""
                                    },
                                    client: re.Y[e],
                                    fetchPolicy: "cache-and-network",
                                    notifyOnNetworkStatusChange: !0
                                }),
                                d = c.data,
                                p = c.loading,
                                m = c.refetch;
                            return (0, a.useEffect)((function () {
                                p || (d && d.normalizationFactorUpdates.length > 0 ? (r(i.concat(d.normalizationFactorUpdates).filter((function (e, t, n) {
                                    return t === n.findIndex((function (t) {
                                        return t.id === e.id
                                    }))
                                }))), t.current = d.normalizationFactorUpdates[d.normalizationFactorUpdates.length - 1].id, 1e3 === d.normalizationFactorUpdates.length ? m({
                                    lastID: t.current
                                }) : s(!0)) : s(!0))
                            }), [p]), {
                                normHistory: i,
                                fetchingComplete: l
                            }
                        }(),
                        f = x.normHistory,
                        h = x.fetchingComplete,
                        g = f.map((function (e) {
                            var t = (Number(e.timestamp) - Number(e.lastModificationTimestamp)) / 1512e3,
                                n = 1 / Math.exp(Math.log(Number(e.newNormFactor) / Number(e.oldNormFactor)) / t),
                                i = Math.log(n) / 17.5,
                                a = 30 * i,
                                o = 365.25 * i,
                                l = (i < 0 ? -1 : 1) * Math.sqrt(365 * Math.abs(i)),
                                s = 100 * ("vol" === r.id ? l : "day" === d.id ? i : "month" === d.id ? a : o);
                            return {
                                time: Number(e.timestamp),
                                value: parseFloat(s.toFixed(4))
                            }
                        })),
                        v = ue(ue({}, z.W), {}, {
                            localization: {
                                priceFormatter: function (e) {
                                    return "".concat(e < 0 ? e.toFixed(3) : e.toFixed(4), "%")
                                }
                            }
                        }),
                        b = f.length > 0 ? Number(f[0].timestamp) : void 0,
                        j = f.length > 0 ? Number(f[f.length - 1].timestamp) : void 0,
                        y = "vol" === r.id ? "Annual Vol" : "day" === d.id ? "Daily Premium" : "month" === d.id ? "Monthly Premium" : "Annual Premium";
                    return (0, Z.jsx)(Z.Fragment, {
                        children: (0, Z.jsxs)("div", {
                            style: {
                                width: "100%"
                            },
                            children: [(0, Z.jsxs)("div", {
                                className: e.switchWrapper,
                                children: [(0, Z.jsx)(ne, {
                                    items: t,
                                    value: r,
                                    onChange: o
                                }), "funding" === r.id && (0, Z.jsx)(ne, {
                                    items: n,
                                    value: d,
                                    onChange: p
                                })]
                            }), h ? (0, Z.jsxs)(Z.Fragment, {
                                children: [(0, Z.jsx)(pe, {
                                    from: b,
                                    to: j,
                                    legend: "Funding",
                                    options: v,
                                    lineSeries: [{
                                        data: g,
                                        legend: "".concat(y, " (%) "),
                                        options: {
                                            color: "#70E3F6"
                                        }
                                    }],
                                    autoWidth: !0,
                                    height: 300,
                                    darkTheme: !0
                                }), (0, Z.jsx)("div", {
                                    className: e.legendBox,
                                    children: (0, Z.jsxs)("div", {
                                        className: e.legendContainer,
                                        children: [(0, Z.jsx)("div", {
                                            style: {
                                                width: "20px",
                                                height: "20px",
                                                backgroundColor: "#70E3F6"
                                            }
                                        }), (0, Z.jsx)("div", {
                                            children: y
                                        })]
                                    })
                                })]
                            }) : (0, Z.jsx)(s.Z, {
                                display: "flex",
                                height: "300px",
                                width: 1,
                                alignItems: "center",
                                justifyContent: "center",
                                children: (0, Z.jsx)(L.Z, {
                                    size: 40,
                                    color: "secondary"
                                })
                            })]
                        })
                    })
                },
                fe = (0, a.memo)(xe),
                he = n(29150),
                ge = n(68619),
                ve = n(58831),
                be = n(27203),
                je = n(13416);

            function ye(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function Ze(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ye(Object(n), !0).forEach((function (t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ye(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var we = function (e) {
                    var t = (0, u.Dv)(he.tI),
                        n = (0, u.Dv)(he.Qv),
                        i = (0, u.Dv)(he.p9),
                        r = (0, u.Dv)(he.al),
                        a = (0, u.Dv)(he.e1),
                        o = (0, u.Dv)(he.j_),
                        l = (0, je.ub)(),
                        c = l.exponentiatedBy(2),
                        d = (0, ge.nw)(t, 18),
                        p = 100 * n,
                        m = 0 === a ? "loading" : (0, ve.uf)(100 * a) + "%",
                        x = 0 === o.funding ? "loading" : (0, ve.uf)(100 * o.funding) + "%";
                    return (0, Z.jsxs)(s.Z, Ze(Ze({
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gridGap: "12px"
                    }, e), {}, {
                        children: [(0, Z.jsx)(be.Z, {
                            label: (0, Z.jsx)(be.D, {
                                label: "ETH Price",
                                tooltipTitle: ce.Bm.SpotPrice
                            }),
                            value: (0, ve.xG)(l.toNumber())
                        }), (0, Z.jsx)(be.Z, {
                            label: (0, Z.jsx)(be.D, {
                                label: "ETH\xb2 Price",
                                tooltipTitle: ce.Bm.SpotPrice
                            }),
                            value: (0, ve.xG)(c.toNumber())
                        }), (0, Z.jsx)(be.Z, {
                            label: (0, Z.jsx)(be.D, {
                                label: "Mark Price",
                                tooltipTitle: ce.Bm.Mark
                            }),
                            value: (0, ve.xG)(d.toNumber())
                        }), (0, Z.jsx)(be.Z, {
                            label: (0, Z.jsx)(be.D, {
                                label: "Implied Volatility",
                                tooltipTitle: ce.Bm.ImplVol
                            }),
                            value: "".concat((0, ve.uf)(p), "%")
                        }), (0, Z.jsx)(be.Z, {
                            label: (0, Z.jsx)(be.D, {
                                label: "Reference Volatility",
                                tooltipTitle: ce.Bm.osqthRefVol
                            }),
                            value: "".concat((0, ve.uf)(i), "%")
                        }), (0, Z.jsx)(be.Z, {
                            label: (0, Z.jsx)(be.D, {
                                label: "Norm Factor",
                                tooltipTitle: ce.Bm.NormFactor
                            }),
                            value: (0, ve.uf)(r.toNumber(), 4)
                        }), (0, Z.jsx)(be.Z, {
                            label: (0, Z.jsx)(be.D, {
                                label: "Current Implied Premium",
                                tooltipTitle: ce.Bm.CurrentImplFunding
                            }),
                            value: m
                        }), (0, Z.jsx)(be.Z, {
                            label: (0, Z.jsx)(be.D, {
                                label: "Historical Daily Premium",
                                tooltipTitle: "Historical daily premium based on the last ".concat(o.period, " hours. Calculated using a ").concat(o.period, " hour TWAP of Mark - Index")
                            }),
                            value: x
                        })]
                    }))
                },
                Oe = n(69955),
                Te = n(79779),
                Se = n(40868),
                Ne = n(20406),
                De = n(28526),
                Ce = n.n(De),
                Pe = n(50581),
                ke = n(82113),
                Ie = n(69908),
                Le = n(12231),
                Fe = n(6391),
                He = n.n(Fe),
                Ge = n(709),
                We = n(48125),
                Ee = n(42277),
                ze = n(74156),
                Ae = n(31199),
                qe = function () {
                    var e = (0, We.B0)(),
                        t = (0, u.Dv)(D.iu),
                        n = (0, u.Dv)(Ee.pK).shortHelper,
                        i = (0, ze.x_)(),
                        r = (0, ze.Ie)(),
                        a = (0, u.Dv)(Ae.il),
                        o = (0, u.Dv)(he.al),
                        l = function () {
                            var r = (0, Ne.Z)(Ce().mark((function r(l, s, c, d) {
                                var u, p, m, x;
                                return Ce().wrap((function (r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            if (a && t) {
                                                r.next = 2;
                                                break
                                            }
                                            return r.abrupt("return");
                                        case 2:
                                            return r.next = 4, i(s);
                                        case 4:
                                            return (u = r.sent).recipient = n, p = (0, ge.KU)(s, Ge.xM).multipliedBy(o), m = (0, ge.KU)(c, 18), r.next = 10, e(a.methods.openShort(l, p.toFixed(0), 0, u).send({
                                                from: t,
                                                value: m.toString()
                                            }), d);
                                        case 10:
                                            return x = r.sent, r.abrupt("return", x);
                                        case 12:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r)
                            })));
                            return function (e, t, n, i) {
                                return r.apply(this, arguments)
                            }
                        }(),
                        s = function () {
                            var i = (0, Ne.Z)(Ce().mark((function i(o, l, s, c) {
                                var d, u, p, m;
                                return Ce().wrap((function (i) {
                                    for (;;) switch (i.prev = i.next) {
                                        case 0:
                                            if (a && t) {
                                                i.next = 2;
                                                break
                                            }
                                            return i.abrupt("return");
                                        case 2:
                                            return d = (0, ge.KU)(l, Ge.xM), u = (0, ge.KU)(s.isPositive() ? s : 0, Ge.RN), i.next = 6, r(l);
                                        case 6:
                                            return (p = i.sent).recipient = n, i.next = 10, e(a.methods.closeShort(o, d.toString(), u.toFixed(0), p).send({
                                                from: t,
                                                value: p.amountInMaximum
                                            }), c);
                                        case 10:
                                            return m = i.sent, i.abrupt("return", m);
                                        case 12:
                                        case "end":
                                            return i.stop()
                                    }
                                }), i)
                            })));
                            return function (e, t, n, r) {
                                return i.apply(this, arguments)
                            }
                        }();
                    return {
                        openShort: l,
                        closeShort: s
                    }
                },
                Re = n(52061),
                Be = n(52001),
                Me = n(43872),
                Ue = n(90765),
                Ke = n(71169),
                Ye = n(51112),
                _e = n(48965),
                Ve = n(13575),
                Qe = n(67448),
                $e = n(3652),
                Je = n(53341),
                Xe = n(80780),
                et = n(91023),
                tt = n(4382),
                nt = n(82375),
                it = n(46785),
                rt = n(21245),
                at = n(4456),
                ot = n(37175),
                lt = n(73691),
                st = (0, c.Z)((function (e) {
                    return (0, d.Z)({
                        title: {
                            fontSize: "20px",
                            fontWeight: 700,
                            letterSpacing: "-0.01em",
                            marginBottom: "24px"
                        },
                        label: {
                            fontSize: "18px",
                            fontWeight: 700
                        },
                        cardTitle: {
                            color: e.palette.primary.main,
                            marginTop: e.spacing(4)
                        },
                        cardHeader: {
                            color: e.palette.primary.main,
                            marginTop: e.spacing(2)
                        },
                        cardSubTxt: {
                            color: e.palette.text.secondary,
                            lineHeight: "1.75rem",
                            fontSize: "16px"
                        },
                        innerCard: {
                            paddingBottom: e.spacing(0)
                        },
                        amountInput: {
                            backgroundColor: "".concat(e.palette.error.main, "aa"),
                            "&:hover": {
                                backgroundColor: e.palette.error.dark
                            }
                        },
                        thirdHeading: {
                            marginTop: e.spacing(2)
                        },
                        explainer: {
                            marginTop: e.spacing(2),
                            paddingLeft: e.spacing(1),
                            paddingRight: e.spacing(1),
                            marginLeft: e.spacing(1),
                            width: "200px",
                            justifyContent: "left"
                        },
                        caption: {
                            marginTop: e.spacing(1),
                            fontSize: "13px"
                        },
                        txItem: {
                            display: "flex",
                            padding: e.spacing(0, 1),
                            marginTop: e.spacing(1),
                            justifyContent: "center",
                            alignItems: "center"
                        },
                        txLabel: {
                            fontSize: "14px",
                            color: e.palette.text.secondary
                        },
                        txUnit: {
                            fontSize: "12px",
                            color: e.palette.text.secondary,
                            marginLeft: e.spacing(1)
                        },
                        infoIcon: {
                            fontSize: "1rem",
                            marginLeft: e.spacing(.5),
                            color: e.palette.text.secondary
                        },
                        squeethExp: {
                            display: "flex",
                            justifyContent: "space-between",
                            borderRadius: e.spacing(1),
                            padding: e.spacing(1.5),
                            width: "300px",
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginTop: e.spacing(2),
                            textAlign: "left",
                            backgroundColor: e.palette.background.stone
                        },
                        squeethExpTxt: {
                            fontSize: "20px"
                        },
                        divider: {
                            margin: e.spacing(2, 0),
                            width: "300px",
                            marginLeft: "auto",
                            marginRight: "auto"
                        },
                        closePosition: {
                            display: "flex",
                            justifyContent: "space-between",
                            padding: e.spacing(0, 1)
                        },
                        closeBtn: {
                            color: e.palette.error.main
                        },
                        paper: {
                            backgroundColor: e.palette.background.paper,
                            boxShadow: e.shadows[5],
                            borderRadius: e.spacing(1),
                            width: "350px",
                            textAlign: "center",
                            paddingBottom: e.spacing(2)
                        },
                        modal: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        buttonDiv: {
                            position: "sticky",
                            bottom: "0",
                            backgroundColor: e.palette.background.default,
                            zIndex: 1500
                        },
                        hint: {
                            display: "flex",
                            alignItems: "center"
                        },
                        arrowIcon: {
                            marginLeft: "4px",
                            marginRight: "4px",
                            fontSize: "20px"
                        },
                        hintTextContainer: {
                            display: "flex"
                        },
                        hintTitleText: {
                            marginRight: ".5em"
                        },
                        settingsContainer: {
                            display: "flex",
                            justify: "space-between"
                        },
                        settingsButton: {
                            marginTop: e.spacing(2),
                            marginLeft: e.spacing(10),
                            justifyContent: "right"
                        },
                        formHelperText: {
                            marginLeft: 0,
                            marginRight: 0
                        },
                        displayBlock: {
                            display: "block"
                        },
                        displayNone: {
                            display: "none"
                        },
                        vaultCollatInfo: {
                            display: "flex",
                            alignItems: "center",
                            pointerEvents: "auto"
                        }
                    })
                })),
                ct = ((0, p.O4)("collatPercent", 0), (0, p.xu)((function (e) {
                    return (0, p.O4)("collatPercent", e)
                }))),
                dt = function (e) {
                    var t, n, r = e.open,
                        c = (0, u.KO)(N.mz),
                        d = (0, i.Z)(c, 2),
                        x = d[0],
                        f = d[1],
                        h = (0, p.oC)(N.mz),
                        g = (0, a.useState)(new(He())(0)),
                        v = g[0],
                        b = g[1],
                        j = (0, a.useState)(""),
                        y = j[0],
                        w = j[1],
                        O = (0, a.useState)(!0),
                        T = O[0],
                        S = O[1],
                        C = (0, a.useState)(!1),
                        P = C[0],
                        k = C[1],
                        I = (0, a.useState)(new(He())(0)),
                        F = I[0],
                        H = I[1],
                        G = (0, a.useState)(new(He())(0)),
                        W = G[0],
                        E = G[1],
                        z = st(),
                        q = (0, We.hS)(),
                        R = q.cancelled,
                        M = q.confirmed,
                        U = q.loading,
                        K = q.transactionData,
                        Y = q.resetTxCancelled,
                        _ = q.resetTransactionData,
                        V = qe().openShort,
                        Q = (0, ze.ar)(),
                        $ = (0, We.tM)().data,
                        J = Number((0, ge.nw)(null !== $ && void 0 !== $ ? $ : Ge.HW, 18).toFixed(4)),
                        X = (0, u.Dv)(D.QS),
                        ee = (0, u.Dv)(D.dh),
                        te = (0, We.rs)(),
                        ne = (0, lt.L)(),
                        ie = ne.isRestricted,
                        re = ne.isWithdrawAllowed,
                        ae = (0, u.Dv)(Ee.pK).shortHelper,
                        oe = (0, u.b9)(N.GF),
                        le = (0, Ve.xF)(),
                        se = (0, Ve.r)(),
                        de = (0, Ve.vr)(),
                        ue = (0, Ve.zz)(),
                        pe = (0, u.b9)(N.gL),
                        me = (0, u.Dv)(he.j_),
                        xe = (0, u.Dv)(he.e1),
                        fe = (0, a.useState)(!0),
                        ye = fe[0],
                        Ze = fe[1],
                        we = (0, u.KO)(N.Gi),
                        Oe = (0, i.Z)(we, 2),
                        Se = Oe[0],
                        De = Oe[1],
                        Ie = (0, u.KO)(N.JG),
                        Le = (0, i.Z)(Ie, 2),
                        Fe = Le[0],
                        Ae = Le[1],
                        dt = (0, u.KO)(D.e6),
                        ut = (0, i.Z)(dt, 2),
                        pt = ut[0],
                        mt = ut[1],
                        xt = (0, u.Dv)(he.al),
                        ft = (0, u.KO)(N.XN),
                        ht = (0, i.Z)(ft, 2),
                        gt = ht[0],
                        vt = ht[1],
                        bt = (0, u.Dv)(N.HY),
                        jt = (0, B.Z)((function () {
                            return new(He())(Fe)
                        }), [Fe]),
                        yt = (0, B.Z)((function () {
                            return new(He())(x)
                        }), [x]),
                        Zt = (0, u.Dv)(Ee.Wg),
                        wt = (0, Re.Y)(),
                        Ot = wt.updateVault,
                        Tt = wt.vaults,
                        St = wt.loading,
                        Nt = (0, Qe.yE)(),
                        Dt = Nt.validVault,
                        Ct = Nt.vaultId,
                        Pt = (0, Qe.nG)().squeethAmount,
                        kt = (0, u.KO)(Ee.ug),
                        It = (0, i.Z)(kt, 2),
                        Lt = It[0],
                        Ft = It[1],
                        Ht = (0, Je.p)(Dt).existingCollatPercent,
                        Gt = ct(200),
                        Wt = (0, u.KO)(Gt),
                        Et = (0, i.Z)(Wt, 2),
                        zt = Et[0],
                        At = Et[1],
                        qt = (0, tt.V)(Number(Ct), Lt);
                    (0, Xe.Z)((function () {
                        Q(jt, gt).then(De)
                    }), [jt, gt, Q, De]), (0, Xe.Z)((function () {
                        de(yt, jt).then((function (e) {
                            var t = e.liquidationPrice;
                            H(t)
                        }))
                    }), [yt, jt, de, null === Dt || void 0 === Dt ? void 0 : Dt.shortAmount]), (0, Xe.Z)((function () {
                        var e = yt.times(100).dividedBy(new(He())(zt));
                        se(e).then((function (e) {
                            return Ae(e.toString())
                        }))
                    }), [zt, yt, xt, bt, r, se, Ae]), (0, Xe.Z)((function () {
                        var e;
                        Dt && S((null === (e = Dt.operator) || void 0 === e ? void 0 : e.toLowerCase()) === (null === ae || void 0 === ae ? void 0 : ae.toLowerCase()))
                    }), [ae, Dt]);
                    var Rt = (0, et.Z)((0, Ne.Z)(Ce().mark((function e() {
                        return Ce().wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (k(!0), e.prev = 1, !St) {
                                        e.next = 5;
                                        break
                                    }
                                    return k(!1), e.abrupt("return");
                                case 5:
                                    if (!Ct || T) {
                                        e.next = 11;
                                        break
                                    }
                                    return mt(!0), e.next = 9, le(Number(Ct), ae, (function () {
                                        S(!0)
                                    }));
                                case 9:
                                    e.next = 13;
                                    break;
                                case 11:
                                    return e.next = 13, V(Number(Ct), jt, yt, (function () {
                                        mt(!1), w(jt.toFixed(6).toString()), pe(!0), oe(!0), h(), Ft(!0), qt.refetch({
                                            vaultId: Ct
                                        }), localStorage.removeItem("collatPercent"), Ot()
                                    }));
                                case 13:
                                    e.next = 19;
                                    break;
                                case 15:
                                    e.prev = 15, e.t0 = e.catch(1), console.log(e.t0), k(!1);
                                case 19:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 15]
                        ])
                    }))), [jt, Ot, yt, T, V, h, mt, oe, pe, Ft, ae, le, qt, St, Ct]);
                    (0, Xe.Z)((function () {
                        U && k(!1)
                    }), [U]), (0, Xe.Z)((function () {
                        if (Dt && r && bt === Te.YL.SHORT) {
                            var e = Dt.collateralAmount;
                            b(e);
                            var t = new(He())(Dt.shortAmount).minus(jt);
                            ue(new(He())(t)).then((function (e) {
                                var t = e.times(zt / 100);
                                E(t)
                            }))
                        }
                    }), [jt, zt, Tt, r, bt, ue, Dt]);
                    var Bt, Mt, Ut, Kt, Yt, _t = (0, je.xD)(),
                        Vt = (0, _e.W)().data,
                        Qt = (0, u.b9)(A.aQ);
                    if (X) {
                        if (Dt && (Dt.shortAmount.lt(jt) || Dt.shortAmount.isZero()), new(He())(Se.priceImpact).gt(3) && (Ut = "High Price Impact"), yt.isGreaterThan(new(He())(J)) ? Bt = "Insufficient ETH balance" : jt.isGreaterThan(0) && yt.plus(v).lt(Ge.hQ) ? Bt = "Minimum collateral is ".concat(Ge.hQ, " ETH") : Dt && 0 === Ct && null !== Dt && void 0 !== Dt && Dt.shortAmount.gt(0) && (Kt = "Loading Vault..."), console.log(xe, .7 * me.funding, Number(jt) > 0), xe <= .7 * me.funding && Number(jt) > 0) {
                            var $t = 100 * (1 - xe / me.funding);
                            Yt = "Premiums are ".concat($t.toFixed(0), "% below yesterday. Consider buying later")
                        }!r && jt.isGreaterThan(0) && Dt && jt.lt(Dt.shortAmount) && W.isLessThan(Ge.hQ), Zt && (Mt = "Close your long position to open a short")
                    }
                    var Jt = Ut && !P && !(zt < 150) && !Bt && !Mt,
                        Xt = Mt || (Ut || (Yt || "")),
                        en = (0, et.Z)((function (e) {
                            e && At(Ge.vh), Ze(e)
                        }), [At]);
                    (0, a.useEffect)((function () {
                        zt !== Ge.vh && Ze(!1)
                    }), [zt]), (0, Xe.Z)((function () {
                        Qt(zt / 100)
                    }), [zt, Qt]);
                    var tn = isNaN(gt.toNumber()) ? 0 : gt.toNumber(),
                        nn = isNaN(Number(Se.priceImpact)) ? 0 : Number(Se.priceImpact),
                        rn = nn > 3 ? "error" : void 0;
                    return (0, Z.jsx)("div", {
                        id: "open-short-card",
                        children: M && !pt ? (0, Z.jsxs)("div", {
                            children: [(0, Z.jsx)(Ye.Z, {
                                confirmationMessage: "Opened ".concat(y, " Orion Short Position"),
                                txnHash: null !== (t = null === K || void 0 === K ? void 0 : K.hash) && void 0 !== t ? t : "",
                                confirmType: Ye.J.TRADE
                            }), (0, Z.jsx)("div", {
                                className: z.buttonDiv,
                                children: (0, Z.jsx)(Be.F2, {
                                    fullWidth: !0,
                                    variant: "contained",
                                    onClick: function () {
                                        _()
                                    },
                                    className: z.amountInput,
                                    id: "open-short-close-btn",
                                    children: "Close"
                                })
                            })]
                        }) : R ? (0, Z.jsxs)("div", {
                            children: [(0, Z.jsx)($e.Z, {
                                txnHash: null !== (n = null === K || void 0 === K ? void 0 : K.hash) && void 0 !== n ? n : ""
                            }), (0, Z.jsx)("div", {
                                className: z.buttonDiv,
                                children: (0, Z.jsx)(Be.F2, {
                                    fullWidth: !0,
                                    variant: "contained",
                                    onClick: function () {
                                        _(), Y()
                                    },
                                    className: z.amountInput,
                                    children: "Close"
                                })
                            })]
                        }) : (0, Z.jsxs)(Z.Fragment, {
                            children: [(0, Z.jsx)(o.Z, {
                                variant: "h4",
                                className: z.title,
                                children: "Use ETH collateral to mint & sell oORN"
                            }), (0, Z.jsxs)(s.Z, {
                                display: "flex",
                                flexDirection: "column",
                                children: [(0, Z.jsx)(Me.D5, {
                                    id: "open-short-eth-input",
                                    value: x,
                                    onInputChange: function (e) {
                                        return f(e)
                                    },
                                    symbol: "ETH",
                                    logo: nt.Z,
                                    balance: new(He())(J),
                                    usdPrice: _t,
                                    onBalanceClick: function () {
                                        return f(J.toString())
                                    },
                                    error: !!Bt,
                                    helperText: Bt
                                }), (0, Z.jsxs)(s.Z, {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginTop: "24px",
                                    children: [(0, Z.jsx)(o.Z, {
                                        variant: "h4",
                                        className: z.label,
                                        children: "Collateral ratio"
                                    }), (0, Z.jsxs)(s.Z, {
                                        display: "flex",
                                        alignItems: "center",
                                        gridGap: "16px",
                                        children: [(0, Z.jsx)(rt.Z, {
                                            name: "priceRangeDefault",
                                            label: "Default",
                                            isChecked: ye,
                                            onInputChange: en
                                        }), (0, Z.jsx)(Me.Rn, {
                                            id: "collateral-ratio-input",
                                            value: zt,
                                            onInputChange: function (e) {
                                                return At(Number(e))
                                            },
                                            InputProps: {
                                                endAdornment: (0, Z.jsx)(Pe.Z, {
                                                    position: "end",
                                                    style: {
                                                        opacity: "0.5"
                                                    },
                                                    children: "%"
                                                })
                                            },
                                            style: {
                                                width: "80px"
                                            }
                                        })]
                                    })]
                                }), (0, Z.jsxs)(s.Z, {
                                    marginTop: "24px",
                                    children: [(0, Z.jsx)(at.Z, {
                                        collatRatio: zt,
                                        onCollatRatioChange: function (e) {
                                            return At(e)
                                        },
                                        minCollatRatio: 150
                                    }), (0, Z.jsxs)(s.Z, {
                                        marginTop: "12px",
                                        children: [(0, Z.jsx)(ke.Z, {
                                            in: zt <= 150,
                                            children: (0, Z.jsx)(Ue.Z, {
                                                severity: "error",
                                                id: "collat-ratio-slider-alert-text",
                                                children: "You will get liquidated."
                                            })
                                        }), (0, Z.jsx)(ke.Z, {
                                            in: zt > 150 && zt < 200,
                                            children: (0, Z.jsx)(Ue.Z, {
                                                severity: "warning",
                                                id: "collat-ratio-slider-alert-text",
                                                children: "Collateral ratio is too low. You will get liquidated at 150%."
                                            })
                                        }), (0, Z.jsx)(ke.Z, {
                                            in: zt >= 200 && zt < 225,
                                            children: (0, Z.jsx)(Ue.Z, {
                                                severity: "warning",
                                                id: "collat-ratio-slider-alert-text",
                                                children: "Collateral ratio is risky."
                                            })
                                        })]
                                    })]
                                }), (0, Z.jsxs)(s.Z, {
                                    display: "flex",
                                    alignItems: "center",
                                    gridGap: "12px",
                                    marginTop: "24px",
                                    flexWrap: "wrap",
                                    children: [(0, Z.jsx)(be.Z, {
                                        label: "Current Collateral Ratio",
                                        value: (0, ve.uf)(Ht) + "%",
                                        isSmall: !0
                                    }), (0, Z.jsx)(be.Z, {
                                        label: "Liquidation Price",
                                        value: (0, ve.xG)(F.toNumber()),
                                        isSmall: !0
                                    })]
                                }), (0, Z.jsx)(s.Z, {
                                    marginTop: "24px",
                                    children: (0, Z.jsx)(Me.D5, {
                                        id: "open-short-trade-details",
                                        label: "Sell",
                                        value: jt.isNaN() ? Number(0).toLocaleString() : jt.toFixed(4),
                                        readOnly: !0,
                                        symbol: "oORN",
                                        logo: it.Z,
                                        balance: Pt,
                                        usdPrice: Vt,
                                        showMaxAction: !1
                                    })
                                }), (0, Z.jsx)(ke.Z, {
                                    in: !!Xt,
                                    children: (0, Z.jsx)(Ue.Z, {
                                        severity: "error",
                                        marginTop: "24px",
                                        children: Xt
                                    })
                                }), (0, Z.jsx)(s.Z, {
                                    marginTop: "24px",
                                    children: (0, Z.jsx)(be.Z, {
                                        label: "Initial Premium",
                                        value: (0, ve.uf)(Se.amountOut.toNumber()) + " ETH",
                                        isSmall: !0,
                                        flexDirection: "row",
                                        justifyContent: "space-between"
                                    })
                                }), (0, Z.jsxs)(s.Z, {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    gridGap: "12px",
                                    marginTop: "12px",
                                    flexWrap: "wrap",
                                    children: [(0, Z.jsx)(be.Z, {
                                        label: "Slippage",
                                        value: (0, ve.uf)(tn) + "%",
                                        isSmall: !0,
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        gridGap: "12px"
                                    }), (0, Z.jsxs)(s.Z, {
                                        display: "flex",
                                        alignItems: "center",
                                        gridGap: "12px",
                                        flex: "1",
                                        children: [(0, Z.jsx)(be.Z, {
                                            label: "Price Impact",
                                            value: (0, ve.uf)(nn) + "%",
                                            textColor: rn,
                                            isSmall: !0,
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            gridGap: "12px"
                                        }), (0, Z.jsx)(Ke.u, {
                                            setSlippage: function (e) {
                                                return vt(e)
                                            },
                                            slippage: gt
                                        })]
                                    })]
                                })]
                            }), ie && (0, Z.jsx)(ot.Z, {
                                withdrawAllowed: re,
                                marginTop: "24px"
                            }), (0, Z.jsx)(s.Z, {
                                marginTop: "24px",
                                className: z.buttonDiv,
                                children: ie ? (0, Z.jsx)(Be.F2, {
                                    fullWidth: !0,
                                    variant: "contained",
                                    onClick: te,
                                    disabled: !0,
                                    id: "open-long-restricted-btn",
                                    children: "Unavailable"
                                }) : X ? (0, Z.jsx)(Be.F2, {
                                    fullWidth: !0,
                                    onClick: Rt,
                                    className: z.amountInput,
                                    disabled: !ee || "0" === x || P || U || zt < 150 || !!Bt || !!Mt || Dt && Dt.shortAmount.isZero() || !!Kt,
                                    variant: Jt ? "outlined" : "contained",
                                    style: Jt ? {
                                        color: "#f5475c",
                                        backgroundColor: "transparent",
                                        borderColor: "#f5475c"
                                    } : {},
                                    id: "open-short-submit-tx-btn",
                                    children: ee ? P || U ? (0, Z.jsx)(L.Z, {
                                        color: "primary",
                                        size: "1.5rem"
                                    }) : (0, Z.jsxs)(Z.Fragment, {
                                        children: [T ? "Deposit and sell" : Jt && T ? "Deposit and sell anyway" : "Allow wrapper to manage vault (1/2)", T ? null : (0, Z.jsx)(l.ZP, {
                                            style: {
                                                marginLeft: "2px"
                                            },
                                            title: ce.Bm.Operator,
                                            children: (0, Z.jsx)(m.Z, {
                                                fontSize: "small"
                                            })
                                        })]
                                    }) : "Unsupported Network"
                                }) : (0, Z.jsx)(Be.F2, {
                                    fullWidth: !0,
                                    variant: "contained",
                                    onClick: te,
                                    className: z.amountInput,
                                    id: "open-short-connect-wallet-btn",
                                    children: "Connect Wallet"
                                })
                            })]
                        })
                    })
                },
                ut = function (e) {
                    var t, n, r = e.open,
                        c = (0, a.useState)(""),
                        d = c[0],
                        x = c[1],
                        f = (0, a.useState)(200),
                        h = f[0],
                        g = f[1],
                        v = (0, a.useState)(new(He())(0)),
                        b = v[0],
                        j = v[1],
                        y = (0, a.useState)(!0),
                        w = y[0],
                        O = y[1],
                        T = (0, a.useState)(new(He())(0)),
                        S = T[0],
                        C = T[1],
                        P = (0, a.useState)(!1),
                        k = P[0],
                        I = P[1],
                        F = (0, a.useState)(new(He())(0)),
                        H = F[0],
                        G = F[1],
                        W = (0, a.useState)(new(He())(0)),
                        E = W[0],
                        z = W[1],
                        q = (0, a.useState)(ce.ot.FULL),
                        R = q[0],
                        M = q[1],
                        U = (0, u.KO)(D.e6),
                        K = (0, i.Z)(U, 2),
                        Y = K[0],
                        _ = K[1],
                        V = st(),
                        Q = (0, We.hS)(),
                        $ = Q.cancelled,
                        J = Q.confirmed,
                        X = Q.loading,
                        ee = Q.transactionData,
                        te = Q.resetTransactionData,
                        ne = Q.resetTxCancelled,
                        ie = qe().closeShort,
                        re = (0, u.Dv)(Ee.pK).shortHelper,
                        ae = (0, u.Dv)(Ee.Wg),
                        oe = (0, u.Dv)(D.QS),
                        le = (0, u.Dv)(D.dh),
                        se = (0, We.rs)(),
                        de = (0, Ve.xF)(),
                        ue = (0, Ve.zz)(),
                        pe = (0, ze.tT)(),
                        me = (0, u.b9)(N.GF),
                        xe = (0, u.Dv)(N.Gi),
                        fe = (0, u.KO)(N.jF),
                        he = (0, i.Z)(fe, 2),
                        ye = he[0],
                        Ze = he[1],
                        we = (0, u.KO)(N.JG),
                        Oe = (0, i.Z)(we, 2),
                        Te = Oe[0],
                        Se = Oe[1],
                        De = (0, p.oC)(N.JG),
                        Fe = (0, a.useState)(!0),
                        Ae = Fe[0],
                        ct = Fe[1],
                        dt = (0, u.b9)(N.gL),
                        ut = (0, u.KO)(N.XN),
                        pt = (0, i.Z)(ut, 2),
                        mt = pt[0],
                        xt = pt[1],
                        ft = (0, u.Dv)(N.HY),
                        ht = (0, B.Z)((function () {
                            return new(He())(Te)
                        }), [Te]),
                        gt = (0, We.tM)().data,
                        vt = Number((0, ge.nw)(null !== gt && void 0 !== gt ? gt : Ge.HW, 18).toFixed(4)),
                        bt = (0, Re.Y)().updateVault,
                        jt = (0, Qe.yE)(),
                        yt = jt.validVault,
                        Zt = jt.vaultId,
                        wt = (0, Je.p)(yt).existingCollatPercent,
                        Ot = (0, u.b9)(A.aQ),
                        Tt = (0, je.xD)(),
                        St = (0, _e.W)().data,
                        Nt = (0, u.KO)(Ee.ug),
                        Dt = (0, i.Z)(Nt, 2),
                        Ct = Dt[0],
                        Pt = Dt[1],
                        kt = (0, tt.V)(Number(Zt), Ct),
                        It = (0, lt.L)(),
                        Lt = It.isRestricted,
                        Ft = It.isWithdrawAllowed;
                    (0, Xe.Z)((function () {
                        if (yt) {
                            var e, t = null !== yt && void 0 !== yt && null !== (e = yt.shortAmount) && void 0 !== e && e.isFinite() ? null === yt || void 0 === yt ? void 0 : yt.shortAmount : new(He())(0);
                            C(t)
                        }
                    }), [yt, null === yt || void 0 === yt ? void 0 : yt.shortAmount]), (0, Xe.Z)((function () {
                        var e;
                        yt && O((null === yt || void 0 === yt || null === (e = yt.operator) || void 0 === e ? void 0 : e.toLowerCase()) === (null === re || void 0 === re ? void 0 : re.toLowerCase()))
                    }), [Zt, re, yt]), (0, Xe.Z)((function () {
                        ht.isEqualTo(0) && (j(new(He())(0)), z(new(He())(0)), G(new(He())(0)))
                    }), [ht]), (0, Xe.Z)((function () {
                        if (yt && !ht.isEqualTo(0)) {
                            var e, t, n = null !== (e = null === yt || void 0 === yt ? void 0 : yt.collateralAmount) && void 0 !== e ? e : new(He())(0);
                            j(n);
                            var i = new(He())(null !== (t = yt.shortAmount) && void 0 !== t ? t : new(He())(0)).minus(ht);
                            ue(new(He())(i)).then((function (e) {
                                var t = e.times(h / 100);
                                z(t), G(t.gt(0) ? n.minus(E) : n)
                            }))
                        }
                    }), [ht, h, ue, E, yt]), (0, Xe.Z)((function () {
                        X && I(!1)
                    }), [X]);
                    var Ht = (0, et.Z)((function (e) {
                        e && g(Ge.vh), ct(e)
                    }), [g]);
                    (0, a.useEffect)((function () {
                        h !== Ge.vh && ct(!1)
                    }), [h]);
                    var Gt, Wt, Et, zt, At, qt = (0, et.Z)((0, Ne.Z)(Ce().mark((function e() {
                            var t, n, i, r, a, o;
                            return Ce().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (I(!0), e.prev = 1, !Zt || w) {
                                            e.next = 8;
                                            break
                                        }
                                        return _(!0), e.next = 6, de(Number(Zt), re, (function () {
                                            O(!0)
                                        }));
                                    case 6:
                                        e.next = 16;
                                        break;
                                    case 8:
                                        return i = null !== (t = null === yt || void 0 === yt ? void 0 : yt.collateralAmount) && void 0 !== t ? t : new(He())(0), r = new(He())(null !== (n = null === yt || void 0 === yt ? void 0 : yt.shortAmount) && void 0 !== n ? n : new(He())(0)).minus(ht), e.next = 12, ue(new(He())(r));
                                    case 12:
                                        return a = e.sent, o = a.times(h / 100), e.next = 16, ie(Number(Zt), ht, i.minus(o), (0, Ne.Z)(Ce().mark((function e() {
                                            return Ce().wrap((function (e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        _(!1), x(ht.toFixed(6).toString()), dt(!0), me(!0), De(), O(!1), localStorage.removeItem("collatPercent"), Pt(!0), bt(), kt.refetch({
                                                            vaultId: Zt
                                                        });
                                                    case 10:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        }))));
                                    case 16:
                                        e.next = 22;
                                        break;
                                    case 18:
                                        e.prev = 18, e.t0 = e.catch(1), console.log(e.t0), I(!1);
                                    case 22:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 18]
                            ])
                        }))), [ht, bt, ie, h, ue, w, De, _, me, dt, Pt, re, de, null === yt || void 0 === yt ? void 0 : yt.collateralAmount, null === yt || void 0 === yt ? void 0 : yt.shortAmount, kt, Zt]),
                        Rt = (0, et.Z)((function () {
                            S.isGreaterThan(0) && (Se(S.toString()), g(150), M(ce.ot.FULL))
                        }), [S, Se]);
                    oe && (S.lt(0) && S.lt(ht) && (Gt = "Close amount exceeds position"), new(He())(xe.priceImpact).gt(3) && (Et = "High Price Impact"), ht.isGreaterThan(0) && b.lt(Ge.hQ) || 0 === Zt && S.gt(0) && (zt = "Loading Vault..."), !r && ht.isGreaterThan(0) && yt && ht.lt(S) && E.isLessThan(Ge.hQ) && (Gt = "You must have at least ".concat(Ge.hQ, " ETH collateral unless you fully close out your position. Either fully close your position, or close out less")), ae && !S.isGreaterThan(0) && (Wt = "Close your long position to open a short"), ye.amountIn.gt(vt) && (At = "Insufficient ETH Balance"));
                    var Bt = Et && !k && !(h < 150) && !Gt && !Wt && yt && !yt.shortAmount.isZero();
                    (0, Xe.Z)((function () {
                        Ot(h / 100)
                    }), [h, Ot]), (0, Xe.Z)((function () {
                        pe(ht, mt).then(Ze)
                    }), [ht, mt, pe, Ze]), (0, Xe.Z)((function () {
                        S.isGreaterThan(0) && (Se(S.toString()), g(150), M(ce.ot.FULL))
                    }), [ft, r, S, Se]);
                    var Mt = function (e) {
                            Se(e)
                        },
                        Ut = Gt || (Wt || (Et || (At || ""))),
                        Kt = isNaN(mt.toNumber()) ? 0 : mt.toNumber(),
                        Yt = isNaN(Number(ye.priceImpact)) ? 0 : Number(ye.priceImpact),
                        _t = Yt > 3 ? "error" : void 0;
                    return (0, Z.jsx)("div", {
                        id: "close-short-card",
                        children: J && !Y ? (0, Z.jsxs)("div", {
                            children: [(0, Z.jsx)(Ye.Z, {
                                confirmationMessage: "Closed ".concat(d, " Orion Short Position"),
                                txnHash: null !== (t = null === ee || void 0 === ee ? void 0 : ee.hash) && void 0 !== t ? t : "",
                                confirmType: Ye.J.TRADE
                            }), (0, Z.jsx)("div", {
                                className: V.buttonDiv,
                                children: (0, Z.jsx)(Be.F2, {
                                    fullWidth: !0,
                                    variant: "contained",
                                    onClick: function () {
                                        te()
                                    },
                                    className: V.amountInput,
                                    id: "close-short-close-btn",
                                    children: "Close"
                                })
                            })]
                        }) : $ ? (0, Z.jsxs)("div", {
                            children: [(0, Z.jsx)($e.Z, {
                                txnHash: null !== (n = null === ee || void 0 === ee ? void 0 : ee.hash) && void 0 !== n ? n : ""
                            }), (0, Z.jsx)("div", {
                                className: V.buttonDiv,
                                children: (0, Z.jsx)(Be.F2, {
                                    fullWidth: !0,
                                    variant: "contained",
                                    onClick: function () {
                                        te(), ne()
                                    },
                                    className: V.amountInput,
                                    children: "Close"
                                })
                            })]
                        }) : (0, Z.jsxs)(Z.Fragment, {
                            children: [(0, Z.jsx)(o.Z, {
                                variant: "h4",
                                className: V.title,
                                children: "Buy back oORN & close position"
                            }), (0, Z.jsxs)(s.Z, {
                                display: "flex",
                                flexDirection: "column",
                                children: [(0, Z.jsx)(Me.D5, {
                                    id: "close-short-osqth-input",
                                    value: Te,
                                    onInputChange: function (e) {
                                        return Mt(e)
                                    },
                                    symbol: "oORN",
                                    logo: it.Z,
                                    balance: S,
                                    usdPrice: St,
                                    onBalanceClick: function () {
                                        return Mt(S.toString())
                                    },
                                    error: !!Gt,
                                    helperText: Gt,
                                    readOnly: R === ce.ot.FULL,
                                    readOnlyTooltip: R === ce.ot.FULL ? ce.Bm.FullcloseInput : ""
                                }), (0, Z.jsx)(s.Z, {
                                    marginTop: "24px",
                                    children: (0, Z.jsxs)(Ie.Z, {
                                        label: "Type of Close",
                                        value: R,
                                        onChange: function (e) {
                                            return e.target.value === ce.ot.FULL ? Rt() : Se("0"), g(200), M(e.target.value)
                                        },
                                        displayEmpty: !0,
                                        inputProps: {
                                            "aria-label": "Without label"
                                        },
                                        style: {
                                            padding: "5px 0px",
                                            width: "100%",
                                            textAlign: "left"
                                        },
                                        id: "close-short-type-select",
                                        MenuProps: {
                                            disableScrollLock: !0
                                        },
                                        children: [(0, Z.jsx)(Le.Z, {
                                            value: ce.ot.FULL,
                                            id: "close-short-full-close",
                                            children: "Full Close"
                                        }), (0, Z.jsx)(Le.Z, {
                                            value: ce.ot.PARTIAL,
                                            id: "close-short-partial-close",
                                            children: "Partial Close"
                                        })]
                                    })
                                }), R === ce.ot.PARTIAL && (0, Z.jsxs)(Z.Fragment, {
                                    children: [(0, Z.jsxs)(s.Z, {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginTop: "24px",
                                        children: [(0, Z.jsx)(o.Z, {
                                            variant: "h4",
                                            className: V.label,
                                            children: "Collateral ratio"
                                        }), (0, Z.jsxs)(s.Z, {
                                            display: "flex",
                                            alignItems: "center",
                                            gridGap: "16px",
                                            children: [(0, Z.jsx)(rt.Z, {
                                                name: "priceRangeDefault",
                                                label: "Default",
                                                isChecked: Ae,
                                                onInputChange: Ht
                                            }), (0, Z.jsx)(Me.Rn, {
                                                id: "collateral-ratio-input",
                                                value: h,
                                                onInputChange: function (e) {
                                                    return g(Number(e))
                                                },
                                                InputProps: {
                                                    endAdornment: (0, Z.jsx)(Pe.Z, {
                                                        position: "end",
                                                        style: {
                                                            opacity: "0.5"
                                                        },
                                                        children: "%"
                                                    })
                                                },
                                                style: {
                                                    width: "80px"
                                                }
                                            })]
                                        })]
                                    }), (0, Z.jsxs)(s.Z, {
                                        marginTop: "24px",
                                        children: [(0, Z.jsx)(at.Z, {
                                            collatRatio: h,
                                            onCollatRatioChange: function (e) {
                                                return g(e)
                                            },
                                            minCollatRatio: 150
                                        }), (0, Z.jsxs)(s.Z, {
                                            marginTop: "12px",
                                            children: [(0, Z.jsx)(ke.Z, {
                                                in: h <= 150,
                                                children: (0, Z.jsx)(Ue.Z, {
                                                    severity: "error",
                                                    id: "collat-ratio-slider-alert-text",
                                                    children: "You will get liquidated."
                                                })
                                            }), (0, Z.jsx)(ke.Z, {
                                                in: h > 150 && h < 200,
                                                children: (0, Z.jsx)(Ue.Z, {
                                                    severity: "warning",
                                                    id: "collat-ratio-slider-alert-text",
                                                    children: "Collateral ratio is too low. You will get liquidated at 150%."
                                                })
                                            }), (0, Z.jsx)(ke.Z, {
                                                in: h >= 200 && h < 225,
                                                children: (0, Z.jsx)(Ue.Z, {
                                                    severity: "warning",
                                                    id: "collat-ratio-slider-alert-text",
                                                    children: "Collateral ratio is risky."
                                                })
                                            })]
                                        })]
                                    })]
                                }), (0, Z.jsx)(s.Z, {
                                    marginTop: "24px",
                                    children: (0, Z.jsx)(Me.D5, {
                                        id: "close-short-trade-details",
                                        label: "Spend",
                                        value: ye.amountIn.toFixed(6),
                                        symbol: "ETH",
                                        logo: nt.Z,
                                        balance: new(He())(vt),
                                        usdPrice: Tt,
                                        showMaxAction: !1,
                                        readOnly: !0
                                    })
                                }), (0, Z.jsx)(ke.Z, {
                                    in: !!Ut,
                                    children: (0, Z.jsx)(Ue.Z, {
                                        severity: "error",
                                        marginTop: "24px",
                                        children: Ut
                                    })
                                }), (0, Z.jsxs)(s.Z, {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    gridGap: "12px",
                                    marginTop: "24px",
                                    flexWrap: "wrap",
                                    children: [(0, Z.jsx)(be.Z, {
                                        label: "Collateral you redeem",
                                        value: (0, ve.uf)(H.isPositive() ? H.toNumber() : 0),
                                        isSmall: !0
                                    }), (0, Z.jsx)(be.Z, {
                                        label: "Current collateral ratio",
                                        value: (0, ve.uf)(wt) + "%",
                                        isSmall: !0
                                    })]
                                }), (0, Z.jsxs)(s.Z, {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    gridGap: "12px",
                                    marginTop: "12px",
                                    flexWrap: "wrap",
                                    children: [(0, Z.jsx)(be.Z, {
                                        label: "Slippage",
                                        value: (0, ve.uf)(Kt) + "%",
                                        isSmall: !0,
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        gridGap: "12px"
                                    }), (0, Z.jsxs)(s.Z, {
                                        display: "flex",
                                        alignItems: "center",
                                        gridGap: "12px",
                                        flex: "1",
                                        children: [(0, Z.jsx)(be.Z, {
                                            label: "Price Impact",
                                            value: (0, ve.uf)(Yt) + "%",
                                            textColor: _t,
                                            isSmall: !0,
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            gridGap: "12px"
                                        }), (0, Z.jsx)(Ke.u, {
                                            setSlippage: function (e) {
                                                return xt(e)
                                            },
                                            slippage: mt
                                        })]
                                    })]
                                }), Lt && (0, Z.jsx)(ot.Z, {
                                    withdrawAllowed: Ft,
                                    marginTop: "24px"
                                }), (0, Z.jsx)(s.Z, {
                                    marginTop: "24px",
                                    className: V.buttonDiv,
                                    children: Lt && !Ft ? (0, Z.jsx)(Be.F2, {
                                        fullWidth: !0,
                                        variant: "contained",
                                        onClick: se,
                                        disabled: !0,
                                        id: "open-long-restricted-btn",
                                        children: "Unavailable"
                                    }) : oe ? (0, Z.jsx)(Be.F2, {
                                        fullWidth: !0,
                                        onClick: qt,
                                        className: V.amountInput,
                                        disabled: !le || "0" === Te || k || X || h < 150 || !!Gt || !!Wt || yt && yt.shortAmount.isZero() || !!zt || !!At,
                                        variant: Bt ? "outlined" : "contained",
                                        style: Bt ? {
                                            color: "#f5475c",
                                            backgroundColor: "transparent",
                                            borderColor: "#f5475c"
                                        } : {},
                                        id: "close-short-submit-tx-btn",
                                        children: le ? k || X ? (0, Z.jsx)(L.Z, {
                                            color: "primary",
                                            size: "1.5rem"
                                        }) : (0, Z.jsxs)(Z.Fragment, {
                                            children: [w ? "Buy back and close" : Bt && w ? "Buy back and close anyway" : "Allow wrapper to manage vault (1/2)", w ? null : (0, Z.jsx)(l.ZP, {
                                                style: {
                                                    marginLeft: "2px"
                                                },
                                                title: ce.Bm.Operator,
                                                children: (0, Z.jsx)(m.Z, {
                                                    fontSize: "small"
                                                })
                                            })]
                                        }) : "Unsupported Network"
                                    }) : (0, Z.jsx)(Be.F2, {
                                        fullWidth: !0,
                                        variant: "contained",
                                        onClick: se,
                                        className: V.amountInput,
                                        disabled: !!k,
                                        id: "close-short-connect-wallet-btn",
                                        children: "Connect Wallet"
                                    })
                                })]
                            })]
                        })
                    })
                },
                pt = function (e) {
                    var t = e.open;
                    return t ? (0, Z.jsx)(dt, {
                        open: t
                    }) : (0, Z.jsx)(ut, {
                        open: t
                    })
                },
                mt = (0, a.memo)(pt);

            function xt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function ft(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? xt(Object(n), !0).forEach((function (t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xt(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var ht = function (e) {
                    var t = (0, p.oC)(N.mz),
                        n = (0, p.oC)(N.JG),
                        r = (0, u.Dv)(N.HY),
                        a = (0, u.KO)(N.UF),
                        o = (0, i.Z)(a, 2),
                        l = o[0],
                        c = o[1],
                        d = (0, p.oC)(D.BO),
                        m = (0, u.Dv)(D.E$),
                        x = (0, u.Dv)(D.e6);
                    return (0, Z.jsxs)(s.Z, ft(ft({
                        id: "trade-card"
                    }, e), {}, {
                        children: [(0, Z.jsxs)(Oe.Qo, {
                            value: l,
                            onChange: function (e, i) {
                                c(i), m && x || (t(), n(), d())
                            },
                            "aria-label": "simple tabs example",
                            centered: !0,
                            variant: "fullWidth",
                            children: [(0, Z.jsx)(Oe.TT, {
                                label: "Open",
                                id: "open-btn"
                            }), (0, Z.jsx)(Oe.TT, {
                                label: "Close",
                                id: "close-btn"
                            })]
                        }), (0, Z.jsx)(s.Z, {
                            marginTop: "32px",
                            children: r === Te.YL.LONG ? (0, Z.jsx)(Se.Z, {
                                open: 0 === l
                            }) : (0, Z.jsx)(mt, {
                                open: 0 === l
                            })
                        })]
                    }))
                },
                gt = n(43525),
                vt = n(39097),
                bt = n.n(vt),
                jt = n(28496),
                yt = n(76539),
                Zt = n(37202),
                wt = n(53311),
                Ot = n(87410),
                Tt = (0, c.Z)((function (e) {
                    var t;
                    return (0, d.Z)({
                        container: (t = {
                            padding: e.spacing(2),
                            marginTop: "16px",
                            width: "420px",
                            alignSelf: "flex-start",
                            background: e.palette.background.stone,
                            borderRadius: e.spacing(1),
                            display: "flex",
                            flexDirection: "column"
                        }, (0, r.Z)(t, e.breakpoints.down("sm"), {
                            width: "100%"
                        }), (0, r.Z)(t, "fontWeight", 700), t),
                        header: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: "5px"
                        },
                        posTypeChange: {
                            display: "flex",
                            alignItems: "center",
                            gap: "6px"
                        },
                        title: {
                            padding: e.spacing(.8, 1.5),
                            fontSize: "15px",
                            fontWeight: 500,
                            borderRadius: e.spacing(1)
                        },
                        subtitle: {
                            fontSize: "20px",
                            fontWeight: 700,
                            letterSpacing: "-0.01em"
                        },
                        positionTitle: {
                            color: function (t) {
                                return t.positionType === Te.d.LONG ? e.palette.success.main : t.positionType === Te.d.SHORT ? e.palette.error.main : "inherit"
                            },
                            backgroundColor: function (t) {
                                return t.positionType === Te.d.LONG ? "".concat(e.palette.success.main, "20") : t.positionType === Te.d.SHORT ? "".concat(e.palette.error.main, "20") : "#DCDAE920"
                            }
                        },
                        postpositionTitle: {
                            color: function (t) {
                                return t.postPosition === Te.d.LONG ? e.palette.success.main : t.postPosition === Te.d.SHORT && e.palette.error.main
                            },
                            backgroundColor: function (t) {
                                return t.postPosition === Te.d.LONG ? "".concat(e.palette.success.main, "20") : t.postPosition === Te.d.SHORT ? "".concat(e.palette.error.main, "20") : "#DCDAE920"
                            }
                        },
                        redPosition: {
                            color: e.palette.error.main,
                            backgroundColor: "".concat(e.palette.error.main, "20")
                        },
                        posBg: {
                            background: function (t) {
                                var n = t.positionType === Te.d.LONG ? "#375F4290" : t.positionType === Te.d.SHORT ? "#68373D40" : e.palette.background.stone,
                                    i = t.postPosition === Te.d.LONG ? "#375F42" : t.postPosition === Te.d.SHORT ? "#68373D90" : e.palette.background.stone;
                                return "linear-gradient(to right, ".concat(n, " 0%,").concat(i, " 75%)")
                            }
                        },
                        assetDiv: {
                            display: "flex",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            marginTop: "16px"
                        },
                        red: {
                            color: e.palette.error.main
                        },
                        green: {
                            color: e.palette.success.main
                        },
                        grey: {
                            color: e.palette.text.secondary
                        },
                        floatingContainer: {
                            position: "fixed",
                            bottom: "30px",
                            left: e.spacing(4),
                            background: e.palette.background.lightStone,
                            padding: e.spacing(1, 2),
                            width: "200px",
                            borderRadius: e.spacing(1),
                            backdropFilter: "blur(50px)",
                            zIndex: 10
                        },
                        pnl: {
                            display: "flex",
                            alignItems: "baseline"
                        },
                        postTrade: {
                            display: "flex",
                            justifyContent: "center"
                        },
                        postAmount: {
                            display: "flex",
                            alignItems: "center",
                            gap: "6px"
                        },
                        arrow: {
                            color: e.palette.grey[600]
                        },
                        link: {
                            color: e.palette.primary.main,
                            fontWeight: 500,
                            fontSize: 14
                        },
                        pnlTitle: {
                            display: "flex",
                            alignItems: "center"
                        },
                        amountText: {
                            fontFamily: "DM Mono",
                            fontSize: "22px",
                            fontWeight: 500,
                            lineHeight: "1em"
                        },
                        amountUnit: {
                            fontSize: "20px"
                        },
                        positionUsdValue: {
                            color: "rgba(255, 255, 255, 0.6)",
                            marginLeft: "12px"
                        },
                        labelContainer: {
                            display: "flex",
                            justifyContent: "space-between"
                        },
                        label: {
                            color: "rgba(255, 255, 255, 0.5)",
                            fontSize: "15px",
                            fontWeight: 500,
                            width: "max-content"
                        }
                    })
                })),
                St = function (e, t, n, i) {
                    return e === Te.d.LONG ? Number(null === t || void 0 === t ? void 0 : t.toFixed(2)) > 0 ? i.green : i.red : e === Te.d.SHORT ? Number(null === n || void 0 === n ? void 0 : n.toFixed(2)) > 0 ? i.green : i.red : ""
                },
                Nt = function () {
                    var e = (0, Zt.ey)(),
                        t = (0, Zt.Py)(),
                        n = (0, Zt.GQ)(),
                        r = (0, Zt.L)(),
                        l = (0, Zt.ES)(),
                        c = (0, Zt.qm)(),
                        d = (0, u.Dv)(wt.zK),
                        p = (0, u.Dv)(Ee.jx),
                        m = (0, u.Dv)(Ee.W_),
                        f = (0, Qe.GU)(),
                        h = f.startPolling,
                        g = f.stopPolling,
                        v = (0, u.Dv)(Ee.l9).swaps,
                        b = (0, Qe.nG)().squeethAmount,
                        j = (0, Qe.yE)(),
                        y = j.validVault,
                        w = j.vaultId,
                        O = (0, Je.p)(y).existingCollat,
                        T = (0, Qe.kj)().loading,
                        S = ((0, u.Dv)(Ee.fP), (0, u.Dv)(N.lS)),
                        D = (0, u.KO)(N.gL),
                        C = (0, i.Z)(D, 2),
                        P = C[0],
                        k = C[1],
                        I = (0, u.KO)(N.GF),
                        L = (0, i.Z)(I, 2),
                        F = L[0],
                        H = L[1],
                        G = (0, Qe._p)(),
                        W = (0, Qe.Jy)(),
                        E = (0, jt.K)(Number(w)).liquidations,
                        z = (0, u.Dv)(N.HE),
                        A = (0, u.Dv)(N.JG),
                        q = (0, u.Dv)(N.HY),
                        R = (0, yt.Z)(v),
                        M = (0, B.Z)((function () {
                            return new(He())(A)
                        }), [A]),
                        U = (0, a.useState)(!1),
                        K = U[0],
                        Y = U[1],
                        _ = (0, a.useState)(new(He())(0)),
                        V = _[0],
                        Q = _[1],
                        $ = (0, a.useState)(Te.d.NONE),
                        J = $[0],
                        X = $[1],
                        ee = Tt({
                            positionType: m,
                            postPosition: J
                        });
                    (0, Xe.Z)((function () {
                        P && (null === R || void 0 === R ? void 0 : R.length) === (null === v || void 0 === v ? void 0 : v.length) ? (h(500), Y(!0)) : (H(!1), k(!1), g(), Y(!1))
                    }), [v, R, P, H, h, g, k]);
                    var te = (0, B.Z)((function () {
                            return Boolean(y && y.shortAmount.isZero() && E.length > 0)
                        }), [y, E]),
                        ne = (0, B.Z)((function () {
                            return m === Te.d.LONG || m === Te.d.SHORT ? d : null
                        }), [m, d]),
                        ie = (0, et.Z)((function (e, t, n, i) {
                            return i && d ? i : m === Te.d.LONG ? e : m === Te.d.SHORT ? t : n
                        }), [d, m]),
                        re = (0, et.Z)((function (e, t, n, i) {
                            return p ? n : i && d ? i : G.isEqualTo(0) && W.isEqualTo(0) ? n : m === Te.d.LONG ? e : m === Te.d.SHORT ? t : n
                        }), [p, m, d, G, W]);
                    (0, Xe.Z)((function () {
                        if (!T) {
                            var e = new(He())(0),
                                t = Te.d.NONE;
                            z === Te.YL.LONG && m !== Te.d.SHORT ? (e = S ? b.plus(M) : b.minus(M)).gt(0) && (t = Te.d.LONG) : z === Te.YL.SHORT && m !== Te.d.LONG && (e = S ? b.isGreaterThan(0) ? b.plus(M) : M : b.isGreaterThan(0) ? b.minus(M) : new(He())(0)).gt(0) && (t = Te.d.SHORT), Q(e), X(t)
                        }
                    }), [z, S, T, m, b, M]);
                    var ae = (0, B.Z)((function () {
                        return m === Te.d.LONG ? n.loading : m === Te.d.SHORT ? r.loading : void 0
                    }), [n.loading, m, r.loading]);
                    return (0, Z.jsxs)("div", {
                        children: [(0, Z.jsxs)(s.Z, {
                            display: "flex",
                            alignItems: "center",
                            gridGap: "24px",
                            children: [(0, Z.jsx)(o.Z, {
                                variant: "h4",
                                className: ee.subtitle,
                                children: "My Position"
                            }), te ? (0, Z.jsx)("span", {
                                className: (0, x.default)(ee.title, ee.redPosition),
                                children: "Fully Liquidated"
                            }) : (0, Z.jsxs)("div", {
                                className: ee.posTypeChange,
                                children: [(0, Z.jsx)("span", {
                                    className: (0, x.default)(ee.title, ee.positionTitle),
                                    children: m
                                }), J === m || q === Te.YL.LONG && m === Te.d.SHORT || q === Te.YL.SHORT && m === Te.d.LONG ? null : (0, Z.jsxs)(Z.Fragment, {
                                    children: [(0, Z.jsx)(gt.Z, {
                                        className: ee.arrow
                                    }), (0, Z.jsx)("span", {
                                        className: (0, x.default)(ee.title, ee.postpositionTitle),
                                        children: J
                                    })]
                                })]
                            })]
                        }), (0, Z.jsx)("div", {
                            children: te ? (0, Z.jsxs)(s.Z, {
                                display: "flex",
                                alignItems: "center",
                                gridGap: "12px",
                                marginTop: "16px",
                                flexWrap: "wrap",
                                children: [(0, Z.jsx)(be.Z, {
                                    label: "Position value",
                                    gridGap: "4px",
                                    value: (0, Z.jsxs)("div", {
                                        className: ee.postAmount,
                                        children: [(0, Z.jsx)(o.Z, {
                                            component: "span",
                                            className: ee.amountText,
                                            id: "position-card-positive-value",
                                            children: "0 oORN"
                                        }), (0, Z.jsxs)(o.Z, {
                                            component: "span",
                                            className: (0, x.default)(ee.amountText, ee.positionUsdValue),
                                            children: [Number(0).toFixed(2), "%"]
                                        })]
                                    })
                                }), (0, Z.jsx)(be.Z, {
                                    gridGap: "4px",
                                    label: "Redeemable collateral",
                                    value: (0, Z.jsxs)(o.Z, {
                                        variant: "body1",
                                        className: ee.amountText,
                                        children: [T && O.isEqualTo(0) ? "loading" : O.toFixed(4), " ETH"]
                                    })
                                })]
                            }) : (0, Z.jsxs)(s.Z, {
                                display: "flex",
                                gridGap: "12px",
                                marginTop: "16px",
                                flexWrap: "wrap",
                                children: [(0, Z.jsx)(be.Z, {
                                    gridGap: "6px",
                                    label: (0, Z.jsxs)("div", {
                                        className: ee.labelContainer,
                                        children: [(0, Z.jsx)(o.Z, {
                                            className: ee.label,
                                            children: "Position value"
                                        }), m === Te.d.SHORT ? (0, Z.jsx)(o.Z, {
                                            className: ee.link,
                                            id: "pos-card-manage-vault-link",
                                            children: (0, Z.jsx)(bt(), {
                                                href: "vault/".concat(w),
                                                children: "Manage"
                                            })
                                        }) : null]
                                    }),
                                    value: (0, Z.jsxs)("div", {
                                        className: ee.postAmount,
                                        children: [(0, Z.jsxs)(s.Z, {
                                            display: "flex",
                                            alignItems: "center",
                                            gridGap: "4px",
                                            children: [(0, Z.jsx)(o.Z, {
                                                component: "span",
                                                className: ee.amountText,
                                                id: "position-card-before-trade-balance",
                                                children: ie(b.toFixed(6), b.toFixed(6), "0", "0")
                                            }), q === Te.YL.SHORT && m === Te.d.LONG || q === Te.YL.LONG && m === Te.d.SHORT || M.isLessThanOrEqualTo(0) || M.isNaN() || F ? null : (0, Z.jsxs)(Z.Fragment, {
                                                children: [(0, Z.jsx)(gt.Z, {
                                                    className: ee.arrow
                                                }), (0, Z.jsx)(o.Z, {
                                                    component: "span",
                                                    className: ee.amountText,
                                                    id: "position-card-post-trade-balance",
                                                    style: {
                                                        color: V.gte(ie(b, b, 0)) ? "#49D273" : "#f5475c"
                                                    },
                                                    children: V.lte(0) ? 0 : V.toFixed(6)
                                                })]
                                            })]
                                        }), (0, Z.jsx)(o.Z, {
                                            component: "span",
                                            className: (0, x.default)(ee.amountText, ee.amountUnit),
                                            variant: "body2",
                                            children: "oORN"
                                        }), !ne && (0, Z.jsxs)(o.Z, {
                                            component: "span",
                                            className: (0, x.default)(ee.amountText, ee.positionUsdValue),
                                            children: ["$", ie(l, c, new(He())(0)).toFixed(2)]
                                        })]
                                    })
                                }), p || q === Te.YL.SHORT && m != Te.d.LONG ? (0, Z.jsx)(be.Z, {
                                    label: "PnL",
                                    value: (0, Z.jsx)(Ot.e, {}),
                                    gridGap: "6px"
                                }) : (0, Z.jsxs)(Z.Fragment, {
                                    children: [(0, Z.jsx)(be.Z, {
                                        gridGap: "6px",
                                        label: "Unrealized PnL",
                                        value: (0, Z.jsx)("div", {
                                            className: ee.pnl,
                                            id: "unrealized-pnl-value",
                                            children: ae ? "loading" : (0, Z.jsxs)(s.Z, {
                                                display: "flex",
                                                alignItems: "center",
                                                gridGap: "12px",
                                                children: [(0, Z.jsx)(o.Z, {
                                                    className: (0, x.default)(St(m, t, e, ee), ee.amountText),
                                                    id: "unrealized-pnl-usd-value",
                                                    children: ie("$".concat(n.usd.toFixed(2)), "$".concat(r.usd.toFixed(2)), "$0", "loading")
                                                }), (0, Z.jsx)(o.Z, {
                                                    variant: "caption",
                                                    className: (0, x.default)(St(m, t, e, ee), ee.amountText, ee.positionUsdValue),
                                                    id: "unrealized-pnl-perct-value",
                                                    children: ie("(".concat(t.toFixed(2), "%)"), "(".concat(e.toFixed(2), "%)"), "", " ")
                                                })]
                                            })
                                        })
                                    }), (0, Z.jsx)(be.Z, {
                                        gridGap: "6px",
                                        label: "Realized PnL",
                                        value: (0, Z.jsx)("div", {
                                            className: ee.pnl,
                                            id: "realized-pnl-value",
                                            children: (0, Z.jsx)(o.Z, {
                                                className: (0, x.default)(ee.amountText, St(m, G, W, ee)),
                                                children: re("$".concat(G.toFixed(2)), "$".concat(W.toFixed(2)), "$0", "loading")
                                            })
                                        })
                                    })]
                                })]
                            })
                        }), (0, Z.jsx)(o.Z, {
                            variant: "caption",
                            color: "textSecondary",
                            children: K ? "Fetching latest position..." : " "
                        })]
                    })
                },
                Dt = (0, a.memo)(Nt),
                Ct = n(72276),
                Pt = (0, c.Z)((function (e) {
                    var t;
                    return (0, d.Z)({
                        container: (t = {
                            maxWidth: "1280px",
                            width: "80%",
                            display: "flex",
                            justifyContent: "center",
                            gridGap: "96px",
                            flexWrap: "wrap",
                            padding: e.spacing(6, 5),
                            margin: "0 auto"
                        }, (0, r.Z)(t, e.breakpoints.down("lg"), {
                            maxWidth: "none",
                            width: "90%"
                        }), (0, r.Z)(t, e.breakpoints.down("md"), {
                            width: "100%",
                            gridGap: "40px"
                        }), (0, r.Z)(t, e.breakpoints.down("sm"), {
                            padding: e.spacing(3, 4)
                        }), (0, r.Z)(t, e.breakpoints.down("xs"), {
                            padding: e.spacing(3, 3)
                        }), t),
                        leftColumn: (0, r.Z)({
                            flex: 1,
                            minWidth: "480px"
                        }, e.breakpoints.down("xs"), {
                            minWidth: "320px"
                        }),
                        rightColumn: (0, r.Z)({
                            flexBasis: "452px"
                        }, e.breakpoints.down("xs"), {
                            flex: "1"
                        }),
                        title: {
                            fontSize: "28px",
                            fontWeight: 700,
                            letterSpacing: "-0.02em"
                        },
                        tooltip: {
                            marginLeft: e.spacing(.5)
                        },
                        infoIcon: {
                            fontSize: "15px"
                        },
                        subtitle: {
                            fontSize: "20px",
                            fontWeight: 700,
                            letterSpacing: "-0.01em"
                        },
                        description: {
                            fontSize: "18px",
                            fontWeight: 400,
                            color: e.palette.grey[400]
                        },
                        longIndicator: {
                            background: e.palette.success.light,
                            borderRadius: e.spacing(.7)
                        },
                        shortIndicator: {
                            background: e.palette.error.light,
                            borderRadius: e.spacing(.7)
                        },
                        longTab: {
                            color: e.palette.success.main
                        },
                        shortTab: {
                            color: e.palette.error.main
                        },
                        sectionMargin: {
                            marginTop: e.spacing(4)
                        },
                        tradeSection: {
                            border: "1px solid #242728",
                            boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.25)",
                            borderRadius: e.spacing(1),
                            padding: "32px 24px"
                        }
                    })
                })),
                kt = function () {
                    var e = Pt();
                    return (0, u.Dv)(N.HY) === Te.YL.LONG ? (0, Z.jsxs)(Z.Fragment, {
                        children: [(0, Z.jsxs)(o.Z, {
                            variant: "h3",
                            className: e.title,
                            children: ["Long Orion: ETH\xb2 Leverage", (0, Z.jsx)("a", {
                                href: "https://medium.com/squeeth-primer-a-guide-to-understanding-opyns-implementation-of-squeeth-a0f5e8b95684",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: (0, Z.jsx)(l.ZP, {
                                    className: e.tooltip,
                                    title: (0, Z.jsxs)(Z.Fragment, {
                                        children: ["Learn more about long orion ", (0, Z.jsx)(Ct.g, {
                                            href: "https://medium.com/squeeth-primer-a-guide-to-understanding-opyns-implementation-of-squeeth-a0f5e8b95684",
                                            children: "here"
                                        })]
                                    }),
                                    children: (0, Z.jsx)(m.Z, {
                                        fontSize: "small",
                                        className: e.infoIcon
                                    })
                                })
                            })]
                        }), (0, Z.jsx)(o.Z, {
                            variant: "subtitle1",
                            className: e.description,
                            children: "Perpetual leverage without liquidations"
                        })]
                    }) : (0, Z.jsxs)(Z.Fragment, {
                        children: [(0, Z.jsxs)(o.Z, {
                            variant: "h3",
                            className: e.title,
                            children: ["Covered Short Orion: Short ETH\xb2 Position", (0, Z.jsx)("a", {
                                href: "https://medium.com/squeeth-primer-a-guide-to-understanding-opyns-implementation-of-squeeth-a0f5e8b95684",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: (0, Z.jsx)(l.ZP, {
                                    className: e.tooltip,
                                    title: (0, Z.jsxs)(Z.Fragment, {
                                        children: ["Learn more about short orion ", (0, Z.jsx)(Ct.g, {
                                            href: "https://medium.com/squeeth-primer-a-guide-to-understanding-opyns-implementation-of-squeeth-a0f5e8b95684",
                                            children: "here"
                                        })]
                                    }),
                                    children: (0, Z.jsx)(m.Z, {
                                        fontSize: "small",
                                        className: e.infoIcon
                                    })
                                })
                            })]
                        }), (0, Z.jsx)(o.Z, {
                            variant: "subtitle1",
                            className: e.description,
                            children: "Earn premiums for selling ETH collateralized orion"
                        })]
                    })
                },
                It = function () {
                    var e = (0, u.KO)(N.HY),
                        t = (0, i.Z)(e, 2),
                        n = t[0],
                        r = t[1],
                        a = (0, p.oC)(N.mz),
                        o = (0, p.oC)(N.JG),
                        l = (0, p.oC)(D.BO),
                        s = (0, u.Dv)(D.E$),
                        c = (0, u.Dv)(D.e6),
                        d = Pt();
                    return (0, Z.jsx)("div", {
                        children: (0, Z.jsxs)(Oe.Qo, {
                            value: n,
                            onChange: function (e, t) {
                                r(t), s && c || (a(), o(), l())
                            },
                            "aria-label": "Sub nav tabs",
                            centered: !0,
                            variant: "fullWidth",
                            classes: {
                                indicator: n === Te.YL.SHORT ? d.shortIndicator : d.longIndicator
                            },
                            children: [(0, Z.jsx)(Oe.TT, {
                                label: "Long",
                                id: "long-card-btn",
                                classes: {
                                    root: d.longTab
                                }
                            }), (0, Z.jsx)(Oe.TT, {
                                label: "Short",
                                id: "short-card-btn",
                                classes: {
                                    root: d.shortTab
                                }
                            })]
                        })
                    })
                };
            var Lt = function () {
                var e = Pt(),
                    t = (0, a.useState)(!1),
                    n = t[0],
                    i = t[1],
                    r = (0, u.Dv)(N.HY);
                return (0, Z.jsxs)(Z.Fragment, {
                    children: [(0, Z.jsx)(f.PB, {
                        title: "Orion Orion - Leverage without liquidations ",
                        description: "Bet on ETH with unlimited upside, protected downside, and no liquidations.",
                        canonical: Ge.Gv,
                        openGraph: {
                            images: [{
                                url: Ge.Gv + "/images/previews/squeeth.png",
                                width: 1200,
                                height: 630,
                                alt: "Orion"
                            }]
                        },
                        twitter: {
                            handle: "@opyn_",
                            site: "@opyn_",
                            cardType: "summary_large_image"
                        }
                    }), (0, Z.jsxs)("div", {
                        children: [(0, Z.jsx)(h.Z, {}), (0, Z.jsxs)(s.Z, {
                            className: e.container,
                            children: [(0, Z.jsxs)(s.Z, {
                                className: e.leftColumn,
                                children: [(0, Z.jsx)(kt, {}), (0, Z.jsx)("div", {
                                    className: e.sectionMargin,
                                    children: (0, Z.jsx)(fe, {})
                                }), (0, Z.jsx)(s.Z, {
                                    marginTop: "76px",
                                    children: (0, Z.jsx)(Dt, {})
                                }), (0, Z.jsxs)(s.Z, {
                                    marginTop: "40px",
                                    children: [(0, Z.jsx)(o.Z, {
                                        variant: "h4",
                                        className: e.subtitle,
                                        children: "Details"
                                    }), (0, Z.jsx)(we, {
                                        marginTop: "16px"
                                    })]
                                })]
                            }), (0, Z.jsxs)(s.Z, {
                                className: e.rightColumn,
                                children: [(0, Z.jsx)(It, {}), (0, Z.jsxs)("div", {
                                    className: (0, x.default)(e.sectionMargin, e.tradeSection),
                                    children: [(0, Z.jsx)(o.Z, {
                                        variant: "h4",
                                        className: e.subtitle,
                                        children: "Position"
                                    }), (0, Z.jsx)(ht, {
                                        marginTop: "16px"
                                    })]
                                })]
                            })]
                        })]
                    }), (0, Z.jsx)(S, {
                        open: n,
                        handleClose: function () {
                            return i(!1)
                        }
                    })]
                })
            }
        },
        87410: function (e, t, n) {
            "use strict";
            n.d(t, {
                e: function () {
                    return u
                }
            });
            var i = n(90436),
                r = n(79692),
                a = n(33419),
                o = n(42277),
                l = n(79779),
                s = n(72276),
                c = n(52322),
                d = (0, r.Z)({
                    text: {
                        fontSize: "15px",
                        color: "rgb(255, 255, 255)"
                    }
                }),
                u = function () {
                    var e = d(),
                        t = (0, a.Dv)(o.W_);
                    return (0, c.jsxs)(i.Z, {
                        variant: "body2",
                        className: e.text,
                        children: [t !== l.d.LONG && (0, c.jsx)("span", {
                            children: "Coming soon."
                        }), " Please use", " ", (0, c.jsx)(s.g, {
                            href: "https://docs.google.com/spreadsheets/d/1iy5N3qy6g2xd2_BcsY_Hv0pKdyceC1h7y269KssOG8s/edit#gid=1267496112",
                            children: "OrionLab"
                        })]
                    })
                }
        },
        72276: function (e, t, n) {
            "use strict";
            n.d(t, {
                g: function () {
                    return s
                }
            });
            var i = n(79692),
                r = n(46293),
                a = n(2997),
                o = n(52322),
                l = (0, i.Z)((function (e) {
                    return (0, r.Z)({
                        linkWrap: {
                            display: "inline-flex",
                            alignItems: "center",
                            color: e.palette.primary.main,
                            gap: "3px",
                            "&:hover": {
                                opacity: "0.8",
                                textDecoration: "underline"
                            }
                        }
                    })
                })),
                s = function (e) {
                    var t = e.href,
                        n = e.children,
                        i = e.onClick,
                        r = l();
                    return (0, o.jsxs)("a", {
                        className: r.linkWrap,
                        href: t,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        onClick: i,
                        children: [n, (0, o.jsx)(a.Z, {
                            style: {
                                width: "13px"
                            }
                        })]
                    })
                }
        },
        28496: function (e, t, n) {
            "use strict";
            n.d(t, {
                K: function () {
                    return g
                }
            });
            var i, r = n(95235),
                a = n(36268),
                o = n(2784),
                l = n(33419),
                s = n(709),
                c = n(7328),
                d = (0, n(22841).Ps)(i || (i = (0, c.Z)(["\n  query liquidations($vaultId: BigInt!) {\n    liquidations(where: { vaultId: $vaultId }) {\n      id\n      debtAmount\n      liquidator\n      vaultId\n      collateralPaid\n    }\n  }\n"]))),
                u = n(78680),
                p = n(68619),
                m = n(31257),
                x = n(80780);

            function f(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(n), !0).forEach((function (t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var g = function (e) {
                var t = (0, o.useState)([]),
                    n = t[0],
                    i = t[1],
                    r = (0, l.Dv)(m.vH),
                    c = (0, a.a)(d, {
                        client: u.Y[r],
                        variables: {
                            vaultId: e
                        },
                        fetchPolicy: "cache-and-network"
                    }),
                    f = c.data,
                    g = c.loading;
                return (0, x.Z)((function () {
                    if (null !== f && void 0 !== f && f.liquidations) {
                        var e = null === f || void 0 === f ? void 0 : f.liquidations.map((function (e) {
                            return h(h({}, e), {}, {
                                debtAmount: (0, p.nw)(e.debtAmount.toString(), s.xM),
                                collateralPaid: (0, p.nw)(e.collateralPaid.toString(), 18)
                            })
                        }));
                        i(e)
                    }
                }), [null === f || void 0 === f ? void 0 : f.liquidations]), {
                    liquidations: n,
                    loading: g
                }
            }
        },
        53311: function (e, t, n) {
            "use strict";
            n.d(t, {
                J7: function () {
                    return s
                },
                OV: function () {
                    return l
                },
                Uc: function () {
                    return o
                },
                u3: function () {
                    return a
                },
                uH: function () {
                    return c
                },
                zK: function () {
                    return d
                }
            });
            var i = n(33419),
                r = n(709),
                a = (0, i.cn)(r.HW),
                o = (0, i.cn)({
                    usd: r.HW,
                    eth: r.HW,
                    loading: !0
                }),
                l = (0, i.cn)({
                    usd: r.HW,
                    eth: r.HW,
                    loading: !0
                }),
                s = ((0, i.cn)(r.HW), (0, i.cn)({
                    amountOut: r.HW,
                    minimumAmountOut: r.HW,
                    priceImpact: "0",
                    pools: Array()
                }), (0, i.cn)(r.HW)),
                c = (0, i.cn)(r.HW),
                d = (0, i.cn)(!0)
        },
        37202: function (e, t, n) {
            "use strict";
            n.d(t, {
                ES: function () {
                    return w
                },
                GQ: function () {
                    return N
                },
                L: function () {
                    return D
                },
                Py: function () {
                    return T
                },
                ey: function () {
                    return S
                },
                qm: function () {
                    return O
                }
            });
            var i = n(95235),
                r = n(20406),
                a = n(8529),
                o = n(28526),
                l = n.n(o),
                s = n(33419),
                c = n(4382),
                d = n(68619),
                u = n(78966),
                p = n(67448),
                m = n(53311),
                x = n(42277),
                f = (n(80208), n(74156)),
                h = n(709),
                g = n(79779),
                v = n(53341),
                b = n(29150),
                j = n(80780);

            function y(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function Z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? y(Object(n), !0).forEach((function (t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function w() {
                var e = (0, p.nG)().squeethAmount,
                    t = (0, f.Mn)(),
                    n = (0, s.KO)(x.sQ),
                    i = (0, a.Z)(n, 2),
                    r = i[0],
                    o = i[1],
                    l = (0, s.Dv)(x.W_);
                return (0, j.Z)((function () {
                    if (e.isZero() || l != g.d.LONG) o(h.HW);
                    else {
                        var n = t(e);
                        o(n)
                    }
                }), [e, l, t, o]), r
            }

            function O() {
                var e = (0, p.nG)().squeethAmount,
                    t = (0, f.Mn)(),
                    n = (0, s.KO)(x.JA),
                    i = (0, a.Z)(n, 2),
                    r = i[0],
                    o = i[1],
                    l = (0, s.Dv)(x.W_);
                return (0, j.Z)((function () {
                    if (e.isZero() || l != g.d.SHORT) o(h.HW);
                    else {
                        var n = t(e);
                        o(n)
                    }
                }), [e, o, l, t]), r
            }

            function T() {
                var e = (0, s.KO)(m.J7),
                    t = (0, a.Z)(e, 2),
                    n = t[0],
                    i = t[1],
                    r = (0, p.nG)().totalUSDFromBuy,
                    o = (0, s.Dv)(x.sQ),
                    l = (0, s.Dv)(x.W_),
                    c = (0, s.b9)(m.zK);
                return (0, j.Z)((function () {
                    if (o.isZero() && l != g.d.LONG) return i(h.HW), void c(!1);
                    var e = o.dividedBy(r).minus(1).times(100);
                    i(e), c(!1)
                }), [c, l, o, r, i]), n
            }

            function S() {
                var e = (0, s.KO)(m.uH),
                    t = (0, a.Z)(e, 2),
                    n = t[0],
                    i = t[1],
                    r = (0, s.Dv)(x.JA),
                    o = (0, s.Dv)(x.W_),
                    l = (0, s.b9)(m.zK),
                    c = (0, p.nG)().totalUSDFromBuy;
                return (0, j.Z)((function () {
                    if (r.isZero() && o != g.d.SHORT) return i(h.HW), void l(!1);
                    var e = r.dividedBy(c).minus(1).times(100);
                    i(e), l(!1)
                }), [l, r, c, o, i]), n
            }

            function N() {
                var e = (0, p.nG)().squeethAmount,
                    t = (0, s.Dv)(x.gV),
                    n = (0, s.Dv)(x.W_),
                    i = (0, s.Dv)(x.sQ),
                    o = (0, s.Dv)(x.jx),
                    c = (0, s.KO)(m.OV),
                    f = (0, a.Z)(c, 2),
                    v = f[0],
                    y = f[1],
                    w = (0, s.Dv)(b.xS),
                    O = (0, s.Dv)(x.l9),
                    T = null === O || void 0 === O ? void 0 : O.swaps;
                return (0, j.Z)((function () {
                    (0, r.Z)(l().mark((function r() {
                        var a;
                        return l().wrap((function (r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    if (o || null === T || void 0 === T || !T.length || w.isZero() || i.isZero() || e.isZero() || n !== g.d.LONG) {
                                        r.next = 7;
                                        break
                                    }
                                    return r.next = 3, (0, u.md)(T, t, i, (0, d.nw)(w, 18).sqrt(), e);
                                case 3:
                                    a = r.sent, y((function (e) {
                                        return Z(Z({}, e), a)
                                    })), r.next = 8;
                                    break;
                                case 7:
                                    y({
                                        usd: h.HW,
                                        eth: h.HW,
                                        loading: !0
                                    });
                                case 8:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    })))()
                }), [o, w, t, T, e, n, y, i]), v
            }

            function D() {
                var e = (0, p.nG)().squeethAmount,
                    t = (0, s.Dv)(x.gV),
                    n = (0, s.Dv)(x.W_),
                    i = function () {
                        var e = (0, p.yE)(),
                            t = e.vaultId,
                            n = e.validVault,
                            i = e.isVaultLoading,
                            o = (0, c.V)(t),
                            f = o.vaultHistory,
                            g = o.loading,
                            y = (0, v.p)(n).existingCollat,
                            Z = (0, s.Dv)(x.jx),
                            w = (0, s.Dv)(b.xS),
                            O = (0, s.KO)(m.u3),
                            T = (0, a.Z)(O, 2),
                            S = T[0],
                            N = T[1],
                            D = (0, s.Dv)(x.l9);
                        return (0, j.Z)((function () {
                            (0, r.Z)(l().mark((function e() {
                                var t, n;
                                return l().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (Z || null === f || void 0 === f || !f.length || w.isZero() || y.isZero() || null === D || void 0 === D || null === (t = D.swaps) || void 0 === t || !t.length || g || i) {
                                                e.next = 7;
                                                break
                                            }
                                            return e.next = 3, (0, u.Yu)(f, (0, d.nw)(w, 18).sqrt(), y);
                                        case 3:
                                            n = e.sent, N(n), e.next = 8;
                                            break;
                                        case 7:
                                            N(h.HW);
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        }), [Z, y, w, N, null === D || void 0 === D ? void 0 : D.swaps, f, i, g]), S
                    }(),
                    o = (0, s.Dv)(x.JA),
                    f = (0, s.KO)(m.Uc),
                    y = (0, a.Z)(f, 2),
                    w = y[0],
                    O = y[1],
                    T = (0, s.Dv)(b.xS),
                    S = (0, s.Dv)(x.jx),
                    N = (0, p.GU)().loading,
                    D = (0, s.Dv)(x.l9),
                    C = null === D || void 0 === D ? void 0 : D.swaps;
                return (0, j.Z)((function () {
                    (0, r.Z)(l().mark((function r() {
                        var a;
                        return l().wrap((function (r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    if (S || null === C || void 0 === C || !C.length || o.isZero() || T.isZero() || i.isZero() || e.isZero() || n !== g.d.SHORT || N) {
                                        r.next = 7;
                                        break
                                    }
                                    return r.next = 3, (0, u.ls)(C, t, o, (0, d.nw)(T, 18).sqrt(), e, i);
                                case 3:
                                    a = r.sent, O(Z({}, a)), r.next = 8;
                                    break;
                                case 7:
                                    O({
                                        usd: h.HW,
                                        eth: h.HW,
                                        loading: !0
                                    });
                                case 8:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    })))()
                }), [o, S, i, T, t, C, e, n, O, N]), w
            }
        },
        99906: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/squeeth", function () {
                return n(49750)
            }])
        }
    },
    function (e) {
        e.O(0, [5351, 1057, 834, 6763, 763, 1672, 4362, 1839, 519, 4793, 9774, 2888, 179], (function () {
            return t = 99906, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);
//# sourceMappingURL=squeeth-65c1d0c168354f4d.js.map