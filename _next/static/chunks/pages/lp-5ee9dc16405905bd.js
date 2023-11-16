(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9410], {
        16922: function (e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                LPCalculator: function () {
                    return Pe
                },
                LPage: function () {
                    return Le
                },
                default: function () {
                    return Ne
                }
            });
            var n, a, r = i(95235),
                o = i(79692),
                s = i(46293),
                l = i(90436),
                c = i(67020),
                d = i(2784),
                p = i(33419),
                u = i(42277),
                x = i(53818),
                h = i(709),
                m = i(80780),
                g = i(52322);

            function f(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), i.push.apply(i, n)
                }
                return i
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(i), !0).forEach((function (t) {
                        (0, r.Z)(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : f(Object(i)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }! function (e) {
                e[e.SELECT_METHOD = 1] = "SELECT_METHOD", e[e.GET_SQUEETH = 2] = "GET_SQUEETH", e[e.PROVIDE_LIQUIDITY = 3] = "PROVIDE_LIQUIDITY"
            }(n || (n = {})),
            function (e) {
                e[e.MINT = 1] = "MINT", e[e.BUY = 2] = "BUY"
            }(a || (a = {}));
            var v, y = {
                step: n.SELECT_METHOD,
                mostForwardStep: n.SELECT_METHOD,
                obtainMethod: a.MINT,
                canGoBack: !1,
                canGoForward: !1
            };
            ! function (e) {
                e[e.SELECT_METHOD = 0] = "SELECT_METHOD", e[e.GO_BACK = 1] = "GO_BACK", e[e.GO_FORWARD = 2] = "GO_FORWARD", e[e.GO_TO_PROVIDE_LIQUIDITY = 3] = "GO_TO_PROVIDE_LIQUIDITY"
            }(v || (v = {}));
            var j = function (e) {
                    var t = e.step > n.SELECT_METHOD,
                        i = e.step < e.mostForwardStep;
                    return b(b({}, e), {}, {
                        canGoBack: t,
                        canGoForward: i
                    })
                },
                T = function (e, t) {
                    switch (console.log(e), t.type) {
                        case v.SELECT_METHOD:
                            return j(b(b({}, e), {}, {
                                step: n.GET_SQUEETH,
                                mostForwardStep: e.mostForwardStep === n.SELECT_METHOD ? n.GET_SQUEETH : e.mostForwardStep,
                                obtainMethod: t.payload
                            }));
                        case v.GO_BACK:
                            return e.canGoBack ? j(b(b({}, e), {}, {
                                step: e.step - 1
                            })) : e;
                        case v.GO_FORWARD:
                            return e.canGoForward ? j(b(b({}, e), {}, {
                                step: e.step + 1
                            })) : e;
                        case v.GO_TO_PROVIDE_LIQUIDITY:
                            return j(b(b({}, e), {}, {
                                step: n.PROVIDE_LIQUIDITY,
                                mostForwardStep: n.PROVIDE_LIQUIDITY
                            }));
                        default:
                            return e
                    }
                },
                Z = d.createContext({
                    lpState: y,
                    dispatch: function () {
                        return null
                    }
                }),
                S = function () {
                    return (0, d.useContext)(Z)
                },
                w = function (e) {
                    var t = e.children,
                        i = (0, d.useReducer)(T, y),
                        a = i[0],
                        r = i[1],
                        o = (0, p.Dv)(u.pK).oSqueeth,
                        s = (0, x.m)(o, 15, h.xM).value;
                    return (0, m.Z)((function () {
                        s.isZero() || a.step === n.PROVIDE_LIQUIDITY || r({
                            type: v.GO_TO_PROVIDE_LIQUIDITY
                        })
                    }), [s]), (0, g.jsx)(Z.Provider, {
                        value: {
                            lpState: a,
                            dispatch: r
                        },
                        children: t
                    })
                },
                E = i(7988),
                C = i(40868),
                k = i(94741),
                D = (0, o.Z)((function (e) {
                    return (0, s.Z)({
                        title: {
                            textAlign: "center",
                            fontSize: "18px",
                            fontWeight: 500,
                            marginBottom: e.spacing(2)
                        }
                    })
                })),
                O = function () {
                    var e = D(),
                        t = S(),
                        i = t.lpState,
                        n = t.dispatch;
                    return (0, g.jsxs)(g.Fragment, {
                        children: [(0, g.jsx)(l.Z, {
                            className: e.title,
                            children: i.obtainMethod === a.BUY ? "Buy Orion to LP" : "Mint Orion to LP"
                        }), (0, g.jsx)(E.E.div, {
                            initial: {
                                x: "-5%",
                                opacity: .8
                            },
                            animate: {
                                x: 0,
                                opacity: 1
                            },
                            children: i.obtainMethod === a.BUY ? (0, g.jsx)(C.Z, {
                                isLPage: !0,
                                open: !0,
                                showTitle: !1
                            }) : (0, g.jsx)(k.Z, {
                                onMint: function () {
                                    n({
                                        type: v.GO_TO_PROVIDE_LIQUIDITY
                                    })
                                }
                            })
                        })]
                    })
                },
                I = i(42824),
                P = i(2997),
                L = i(55606),
                N = i(31257),
                H = i(73691),
                _ = i(37175),
                B = (0, o.Z)((function (e) {
                    return (0, s.Z)({
                        container: {
                            width: "100%",
                            height: "496px",
                            overflow: "auto"
                        },
                        title: {
                            textAlign: "center",
                            fontSize: "18px",
                            fontWeight: 500,
                            marginBottom: e.spacing(2)
                        },
                        iframeBox: {
                            width: "100%",
                            height: "450px",
                            border: 0,
                            borderRadius: e.spacing(2),
                            display: "block",
                            zIndex: 1,
                            marginTop: e.spacing(1)
                        },
                        warning: {
                            color: I.Z[600],
                            fontWeight: 500,
                            fontSize: 14
                        },
                        headerDiv: {
                            display: "flex",
                            flexDirection: "column",
                            padding: e.spacing(0, 1)
                        },
                        uniOpenBtn: {
                            display: "flex",
                            alignItems: "center",
                            color: e.palette.primary.main
                        },
                        restrictionInfo: {
                            marginTop: e.spacing(5)
                        }
                    })
                })),
                W = function () {
                    var e = B(),
                        t = (0, p.Dv)(N.vH),
                        i = (0, H.L)(),
                        n = i.isRestricted;
                    i.isWithdrawAllowed;
                    return (0, g.jsxs)(g.Fragment, {
                        children: [(0, g.jsx)(l.Z, {
                            className: e.title,
                            children: "Provide Liquidity"
                        }), (0, g.jsxs)(E.E.div, {
                            initial: {
                                x: "-5%",
                                opacity: .8
                            },
                            animate: {
                                x: 0,
                                opacity: 1
                            },
                            className: e.container,
                            children: [(0, g.jsxs)("div", {
                                className: e.headerDiv,
                                children: [(0, g.jsx)(l.Z, {
                                    variant: "caption",
                                    className: e.warning,
                                    children: "Make sure your wallet is connected to Uniswap"
                                }), (0, g.jsxs)("a", {
                                    className: e.uniOpenBtn,
                                    id: "open-in-uniswap-to-lp",
                                    href: L.r1[t],
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: [(0, g.jsx)(l.Z, {
                                        variant: "caption",
                                        children: "Open in Uniswap"
                                    }), (0, g.jsx)(P.Z, {
                                        style: {
                                            fontSize: 16,
                                            marginLeft: "4px"
                                        },
                                        fontSize: "small"
                                    })]
                                })]
                            }), n ? (0, g.jsx)("div", {
                                className: e.restrictionInfo,
                                children: (0, g.jsx)(_.Z, {})
                            }) : (0, g.jsx)("iframe", {
                                className: e.iframeBox,
                                src: L.r1[t]
                            })]
                        })]
                    })
                },
                R = i(96577),
                M = i.n(R),
                G = {
                    src: "/_next/static/media/mint-squeeth.e3a16ecd.svg",
                    height: 238,
                    width: 196
                },
                F = {
                    src: "/_next/static/media/uniswap-uni-logo.25e4c1ac.svg",
                    height: 194,
                    width: 168
                },
                q = (0, o.Z)((function (e) {
                    return (0, s.Z)({
                        title: {
                            textAlign: "center",
                            fontSize: "18px",
                            fontWeight: 500,
                            marginBottom: e.spacing(2)
                        },
                        obtainItemContainer: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px"
                        },
                        obtainItem: {
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            background: e.palette.background.stone,
                            borderRadius: e.spacing(1),
                            padding: e.spacing(4, 2),
                            cursor: "pointer",
                            border: "1px solid ".concat(e.palette.background.lightStone),
                            "&:hover": {
                                border: "1px solid ".concat(e.palette.primary.main)
                            }
                        },
                        obtainItemTitle: {
                            color: "rgba(255, 255, 255)",
                            fontSize: "20px",
                            fontWeight: 500
                        },
                        obtainItemDetail: {
                            color: "rgba(255, 255, 255, 0.5)",
                            fontSize: "15px",
                            fontWeight: 500
                        }
                    })
                })),
                U = function () {
                    var e = q(),
                        t = S().dispatch;
                    return (0, g.jsxs)(g.Fragment, {
                        children: [(0, g.jsx)(l.Z, {
                            className: e.title,
                            children: "Obtain Orion"
                        }), (0, g.jsxs)("div", {
                            className: e.obtainItemContainer,
                            children: [(0, g.jsxs)(E.E.div, {
                                initial: {
                                    x: "-5%",
                                    opacity: .8
                                },
                                animate: {
                                    x: 0,
                                    opacity: 1
                                },
                                className: e.obtainItem,
                                id: "mint-sqth-to-lp-btn",
                                onClick: function () {
                                    return t({
                                        type: v.SELECT_METHOD,
                                        payload: a.MINT
                                    })
                                },
                                children: [(0, g.jsx)(M(), {
                                    src: G,
                                    alt: "Comparison Chart",
                                    height: 60,
                                    width: 60
                                }), (0, g.jsxs)(c.Z, {
                                    children: [(0, g.jsx)(l.Z, {
                                        className: e.obtainItemTitle,
                                        variant: "h6",
                                        children: "Mint Orion to LP"
                                    }), (0, g.jsx)(l.Z, {
                                        className: e.obtainItemDetail,
                                        children: "Mint by depositing ETH as collateral"
                                    })]
                                })]
                            }), (0, g.jsxs)(E.E.div, {
                                initial: {
                                    x: "-5%",
                                    opacity: .8
                                },
                                animate: {
                                    x: 0,
                                    opacity: 1
                                },
                                className: e.obtainItem,
                                id: "buy-sqth-to-lp-btn",
                                onClick: function () {
                                    return t({
                                        type: v.SELECT_METHOD,
                                        payload: a.BUY
                                    })
                                },
                                children: [(0, g.jsx)(M(), {
                                    src: F,
                                    alt: "Comparison Chart",
                                    height: 60,
                                    width: 60
                                }), (0, g.jsxs)(c.Z, {
                                    children: [(0, g.jsx)(l.Z, {
                                        className: e.obtainItemTitle,
                                        variant: "h6",
                                        children: "Buy Orion to LP"
                                    }), (0, g.jsx)(l.Z, {
                                        className: e.obtainItemDetail,
                                        children: "Buy directly from Uniswap"
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                Q = i(61837),
                z = i(74719),
                A = i(23147),
                Y = i(27597),
                V = (0, o.Z)((function (e) {
                    return (0, s.Z)({
                        container: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: e.spacing(3)
                        },
                        stepData: {
                            marginLeft: e.spacing(1),
                            fontFamily: "DM Mono"
                        },
                        stepButton: {
                            margin: e.spacing(0, .5),
                            "&:disabled": {
                                background: e.palette.background.lightStone,
                                opacity: "0.5"
                            }
                        },
                        disabled: {
                            backgroundColor: e.palette.background.lightStone,
                            opacity: "1"
                        }
                    })
                })),
                K = (0, z.Z)((function (e) {
                    return {
                        root: {
                            background: e.palette.background.stone
                        },
                        disabled: {
                            background: e.palette.background.stone,
                            opacity: "1"
                        }
                    }
                }))(Q.Z),
                X = function () {
                    var e = V(),
                        t = S(),
                        i = t.lpState,
                        n = t.dispatch;
                    return (0, g.jsxs)("div", {
                        className: e.container,
                        children: [(0, g.jsx)(K, {
                            id: "lp-prev-step-btn",
                            className: e.stepButton,
                            disabled: !i.canGoBack,
                            classes: {
                                disabled: e.disabled
                            },
                            onClick: function () {
                                return n({
                                    type: v.GO_BACK
                                })
                            },
                            children: (0, g.jsx)(A.Z, {})
                        }), (0, g.jsx)(K, {
                            id: "lp-next-step-btn",
                            className: e.stepButton,
                            disabled: !i.canGoForward,
                            classes: {
                                disabled: e.disabled
                            },
                            onClick: function () {
                                return n({
                                    type: v.GO_FORWARD
                                })
                            },
                            children: (0, g.jsx)(Y.Z, {})
                        }), (0, g.jsxs)(l.Z, {
                            className: e.stepData,
                            children: ["0", (0, g.jsx)("span", {
                                id: "current-lp-step",
                                children: i.step
                            }), " / 03"]
                        }), " "]
                    })
                },
                $ = (0, o.Z)((function () {
                    return (0, s.Z)({
                        container: {
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column"
                        }
                    })
                })),
                J = function () {
                    var e = $(),
                        t = S().lpState;
                    return (0, g.jsxs)("div", {
                        className: e.container,
                        children: [t.step === n.SELECT_METHOD ? (0, g.jsx)(U, {}) : null, t.step === n.GET_SQUEETH ? (0, g.jsx)(O, {}) : null, t.step === n.PROVIDE_LIQUIDITY ? (0, g.jsx)(W, {}) : null, (0, g.jsx)(X, {})]
                    })
                },
                ee = i(68619),
                te = i(29150),
                ie = i(27203),
                ne = i(58831),
                ae = i(48965);

            function re(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), i.push.apply(i, n)
                }
                return i
            }

            function oe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? re(Object(i), !0).forEach((function (t) {
                        (0, r.Z)(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : re(Object(i)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }
            var se = function (e) {
                    var t = (0, p.Dv)(te.tI),
                        i = (0, p.Dv)(te.xS),
                        n = (0, p.Dv)(te.Qv),
                        a = (0, p.Dv)(te.p9),
                        r = (0, p.Dv)(te.e1),
                        o = (0, ae.W)().data,
                        s = (0, ee.nw)(i, 18),
                        l = s.sqrt(),
                        d = (0, ee.nw)(t, 18),
                        u = 100 * n,
                        x = 0 === r ? "loading" : (0, ne.uf)(100 * r) + "%",
                        m = l.isZero() ? h.HW : o.div(l);
                    return (0, g.jsxs)(c.Z, oe(oe({
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gridGap: "12px"
                    }, e), {}, {
                        children: [(0, g.jsx)(ie.Z, {
                            label: (0, g.jsx)(ie.D, {
                                label: "ETH Price",
                                tooltipTitle: L.Bm.SpotPrice
                            }),
                            value: (0, ne.xG)(l.toNumber())
                        }), (0, g.jsx)(ie.Z, {
                            label: (0, g.jsx)(ie.D, {
                                label: "ETH\xb2 Price",
                                tooltipTitle: L.Bm.SpotPrice
                            }),
                            value: (0, ne.xG)(s.toNumber())
                        }), (0, g.jsx)(ie.Z, {
                            label: (0, g.jsx)(ie.D, {
                                label: "Mark Price",
                                tooltipTitle: "".concat(L.Bm.Mark, ". ").concat(L.Bm.SpotPrice)
                            }),
                            value: (0, ne.xG)(d.toNumber())
                        }), (0, g.jsx)(ie.Z, {
                            label: (0, g.jsx)(ie.D, {
                                label: "oORN Price",
                                tooltipTitle: "".concat(L.Bm.oORNPrice, ". ").concat(L.Bm.SpotPrice)
                            }),
                            value: "".concat((0, ne.xG)(o.toNumber()), "  (").concat((0, ne.uf)(m.toNumber(), 4), " ETH)")
                        }), (0, g.jsx)(ie.Z, {
                            label: (0, g.jsx)(ie.D, {
                                label: "Implied Volatility",
                                tooltipTitle: L.Bm.ImplVol
                            }),
                            value: "".concat((0, ne.uf)(u), "%")
                        }), (0, g.jsx)(ie.Z, {
                            label: (0, g.jsx)(ie.D, {
                                label: "Reference Volatility",
                                tooltipTitle: L.Bm.osqthRefVol
                            }),
                            value: "".concat((0, ne.uf)(a), "%")
                        }), (0, g.jsx)(ie.Z, {
                            label: (0, g.jsx)(ie.D, {
                                label: "Current Implied Premium",
                                tooltipTitle: L.Bm.CurrentImplFunding
                            }),
                            value: x
                        })]
                    }))
                },
                le = i(39097),
                ce = i.n(le),
                de = i(67448),
                pe = (0, o.Z)((function (e) {
                    return (0, s.Z)({
                        link: {
                            color: e.palette.primary.main,
                            fontWeight: 500,
                            fontSize: "14px"
                        },
                        subtitle: {
                            fontSize: "20px",
                            fontWeight: 700,
                            letterSpacing: "-0.01em"
                        }
                    })
                })),
                ue = function () {
                    var e = pe(),
                        t = (0, p.Dv)(u.sO),
                        i = (0, p.Dv)(u.Vh);
                    return (0, de.kj)().loading ? (0, g.jsx)("div", {
                        children: "Fetching LP position..."
                    }) : t.isZero() && i.isZero() ? null : (0, g.jsxs)(g.Fragment, {
                        children: [(0, g.jsxs)(c.Z, {
                            display: "flex",
                            alignItems: "center",
                            gridGap: "32px",
                            children: [(0, g.jsx)(l.Z, {
                                variant: "h4",
                                className: e.subtitle,
                                children: "My Position"
                            }), (0, g.jsx)(l.Z, {
                                className: e.link,
                                id: "pos-card-manage-vault-link",
                                children: (0, g.jsx)(ce(), {
                                    href: "/positions",
                                    children: "Sell full position"
                                })
                            })]
                        }), (0, g.jsxs)(c.Z, {
                            display: "flex",
                            gridGap: "12px",
                            marginTop: "16px",
                            flexWrap: "wrap",
                            children: [(0, g.jsx)(ie.Z, {
                                gridGap: "6px",
                                label: "oORN Liquidity",
                                value: (0, ne.uf)(t.toNumber(), 4) + " oORN"
                            }), (0, g.jsx)(ie.Z, {
                                gridGap: "6px",
                                label: "WETH Liquidity",
                                value: (0, ne.uf)(i.toNumber(), 4) + " WETH"
                            })]
                        })]
                    })
                },
                xe = i(91023),
                he = i(12533),
                me = i(85317);
            var ge = "#2CE6F9",
                fe = "#EC7987",
                be = {
                    maintainAspectRatio: !1,
                    responsive: !1,
                    title: {
                        display: !0
                    },
                    legend: {
                        display: !0,
                        labels: {
                            filter: function (e) {
                                return "2xLeverage" !== e.text
                            }
                        }
                    },
                    scales: {
                        yAxes: [{
                            display: !0,
                            gridLines: {
                                zeroLineWidth: 0,
                                lineWidth: 0
                            },
                            ticks: {
                                display: !0
                            },
                            scaleLabel: {
                                labelString: "% Return",
                                display: !0
                            }
                        }],
                        xAxes: [{
                            display: !0,
                            scaleLabel: {
                                labelString: "% Change in ETH price",
                                display: !0
                            },
                            ticks: {
                                display: !0,
                                autoSkip: !0,
                                maxTicksLimit: 10
                            },
                            gridLines: {
                                lineWidth: 0,
                                zeroLineWidth: 0
                            }
                        }]
                    },
                    tooltips: {
                        enabled: !0,
                        intersect: !1,
                        mode: "index",
                        callbacks: {
                            label: function (e, t) {
                                return "".concat(t.datasets[e.datasetIndex].label, ": ").concat(e.yLabel, " %")
                            },
                            title: function (e) {
                                return "".concat(e[0].xLabel, " % ETH Change")
                            }
                        }
                    },
                    animation: {
                        duration: 0
                    },
                    hover: {
                        animationDuration: 0,
                        intersect: !1
                    },
                    onHover: function (e, t) {
                        if (t && t.length) {
                            var i = t[0],
                                n = i._chart,
                                a = n.ctx;
                            a.globalCompositeOperation = "destination-over";
                            var r = i._view.x,
                                o = n.scales["y-axis-0"].top,
                                s = n.scales["y-axis-0"].bottom;
                            a.save(), a.beginPath(), a.setLineDash([5, 5]), a.moveTo(r, o), a.lineTo(r, s), a.lineWidth = 1, a.strokeStyle = "#77757E80", a.stroke(), a.restore(), a.globalCompositeOperation = "source-over"
                        }
                    }
                },
                ve = function (e) {
                    var t = e.ethPrice,
                        i = (0, d.useState)([]),
                        n = i[0],
                        a = i[1],
                        r = (0, d.useState)([]),
                        o = r[0],
                        s = r[1],
                        l = (0, d.useState)([]),
                        c = l[0],
                        p = l[1];
                    (0, d.useEffect)((function () {
                        var e = (0, me.BS)(t),
                            i = e.ethPercents,
                            n = e.lpPayout,
                            r = e.leveragePayout;
                        a(i), s(n), p(r)
                    }), [t]);
                    var u = (0, xe.Z)((function () {
                        return {
                            labels: n,
                            datasets: [{
                                label: "%USD return Buy and LP",
                                data: o,
                                fill: !1,
                                borderColor: ge,
                                pointHoverBorderColor: ge,
                                pointHoverBackgroundColor: ge,
                                pointBackgroundColor: "rgba(0, 0, 0, 0)",
                                pointBorderColor: "rgba(0, 0, 0, 0)",
                                pointHoverRadius: 5,
                                pointHitRadius: 30
                            }, {
                                label: "%USD return 1.5x Leverage",
                                data: c,
                                fill: !1,
                                borderColor: fe,
                                pointHoverBorderColor: fe,
                                pointHoverBackgroundColor: fe,
                                pointBackgroundColor: "rgba(0, 0, 0, 0)",
                                pointBorderColor: "rgba(0, 0, 0, 0)",
                                pointHoverRadius: 5,
                                pointHitRadius: 30
                            }]
                        }
                    }), [n, o, c]);
                    return (0, g.jsx)("div", {
                        style: {
                            width: "350px"
                        },
                        children: (0, g.jsx)(he.x1, {
                            data: u,
                            type: "line",
                            height: 300,
                            width: 380,
                            options: be
                        })
                    })
                },
                ye = (0, d.memo)(ve),
                je = "#2CE6F9",
                Te = "#EC7987",
                Ze = {
                    maintainAspectRatio: !1,
                    responsive: !1,
                    title: {
                        display: !0
                    },
                    legend: {
                        display: !0,
                        labels: {
                            filter: function (e) {
                                return "2xLeverage" !== e.text
                            }
                        }
                    },
                    scales: {
                        yAxes: [{
                            display: !0,
                            gridLines: {
                                zeroLineWidth: 0,
                                lineWidth: 0
                            },
                            ticks: {
                                display: !0
                            },
                            scaleLabel: {
                                labelString: "% Return",
                                display: !0
                            }
                        }],
                        xAxes: [{
                            display: !0,
                            scaleLabel: {
                                labelString: "% Change in ETH price",
                                display: !0
                            },
                            ticks: {
                                display: !0,
                                autoSkip: !0,
                                maxTicksLimit: 10
                            },
                            gridLines: {
                                lineWidth: 0,
                                zeroLineWidth: 0
                            }
                        }]
                    },
                    tooltips: {
                        enabled: !0,
                        intersect: !1,
                        mode: "index",
                        callbacks: {
                            label: function (e, t) {
                                return "".concat(t.datasets[e.datasetIndex].label, ": ").concat(e.yLabel, " %")
                            },
                            title: function (e) {
                                return "".concat(e[0].xLabel, " % ETH Change")
                            }
                        }
                    },
                    animation: {
                        duration: 0
                    },
                    hover: {
                        animationDuration: 0,
                        intersect: !1
                    },
                    onHover: function (e, t) {
                        if (t && t.length) {
                            var i = t[0],
                                n = i._chart,
                                a = n.ctx;
                            a.globalCompositeOperation = "destination-over";
                            var r = i._view.x,
                                o = n.scales["y-axis-0"].top,
                                s = n.scales["y-axis-0"].bottom;
                            a.save(), a.beginPath(), a.setLineDash([5, 5]), a.moveTo(r, o), a.lineTo(r, s), a.lineWidth = 1, a.strokeStyle = "#77757E80", a.stroke(), a.restore(), a.globalCompositeOperation = "source-over"
                        }
                    }
                },
                Se = function (e) {
                    var t = e.ethPrice,
                        i = (0, d.useState)([]),
                        n = i[0],
                        a = i[1],
                        r = (0, d.useState)([]),
                        o = r[0],
                        s = r[1],
                        l = (0, d.useState)([]),
                        c = l[0],
                        p = l[1];
                    (0, m.Z)((function () {
                        var e = (0, me.fM)(t),
                            i = e.ethPercents,
                            n = e.lpPayout,
                            r = e.leveragePayout;
                        a(i), s(n), p(r)
                    }), [t]);
                    var u = (0, xe.Z)((function () {
                        return {
                            labels: n,
                            datasets: [{
                                label: "%USD return Mint + LP",
                                data: o,
                                fill: !1,
                                borderColor: je,
                                pointHoverBorderColor: je,
                                pointHoverBackgroundColor: je,
                                pointBackgroundColor: "rgba(0, 0, 0, 0)",
                                pointBorderColor: "rgba(0, 0, 0, 0)",
                                pointHoverRadius: 5,
                                pointHitRadius: 30
                            }, {
                                label: "%USD return 1x Leverage",
                                data: c,
                                fill: !1,
                                borderColor: Te,
                                pointHoverBorderColor: Te,
                                pointHoverBackgroundColor: Te,
                                pointBackgroundColor: "rgba(0, 0, 0, 0)",
                                pointBorderColor: "rgba(0, 0, 0, 0)",
                                pointHoverRadius: 5,
                                pointHitRadius: 30
                            }]
                        }
                    }), [n, o, c]);
                    return (0, g.jsx)("div", {
                        style: {
                            width: "350px"
                        },
                        children: (0, g.jsx)(he.x1, {
                            data: u,
                            type: "line",
                            height: 300,
                            width: 380,
                            options: Ze
                        })
                    })
                },
                we = (0, d.memo)(Se),
                Ee = i(27195),
                Ce = i(69955),
                ke = i(13416),
                De = i(16587),
                Oe = (0, o.Z)((function (e) {
                    var t;
                    return (0, s.Z)({
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
                        description: {
                            fontSize: "18px",
                            fontWeight: 400,
                            color: e.palette.grey[400]
                        },
                        subtitle: {
                            fontSize: "22px",
                            fontWeight: 700,
                            letterSpacing: "-0.01em"
                        },
                        sectionTitle: {
                            marginTop: e.spacing(3),
                            color: "rgb(255, 255, 255)",
                            fontWeight: 500,
                            fontSize: "18px",
                            letterSpacing: "-0.01em"
                        },
                        details: {
                            marginTop: e.spacing(4)
                        },
                        tradeSection: {
                            position: "sticky",
                            top: "100px",
                            border: "1px solid #242728",
                            boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.25)",
                            borderRadius: e.spacing(.7),
                            padding: "32px 24px"
                        },
                        chartNav: {
                            border: "1px solid ".concat(e.palette.primary.main, "30")
                        },
                        content: {
                            color: "#bdbdbd",
                            marginTop: "4px"
                        }
                    })
                })),
                Ie = function (e) {
                    var t = e.lpType,
                        i = Oe(),
                        n = (0, ke.xD)();
                    return 0 === t ? (0, g.jsxs)(g.Fragment, {
                        children: [(0, g.jsx)(l.Z, {
                            variant: "h4",
                            className: i.subtitle,
                            children: "Buy orion and LP"
                        }), (0, g.jsxs)(l.Z, {
                            variant: "body1",
                            className: i.content,
                            children: ["Earn a payoff similar to ETH", (0, g.jsx)("sup", {
                                children: "1.5"
                            })]
                        }), (0, g.jsx)(l.Z, {
                            variant: "subtitle1",
                            className: i.sectionTitle,
                            children: "Strategy Overview"
                        }), (0, g.jsxs)(l.Z, {
                            variant: "body1",
                            className: i.content,
                            children: ["Buying and LPing gives you a leverage position with a payoff similar to ETH", (0, g.jsx)("sup", {
                                children: "1.5"
                            }), ". You give up some of your orion upside in exchange for trading fees. You are paying daily premiums for being long orion, but earning fees from LPing on Uniswap."]
                        }), (0, g.jsx)(l.Z, {
                            variant: "subtitle1",
                            className: i.sectionTitle,
                            children: "Payoff"
                        }), (0, g.jsx)(ye, {
                            ethPrice: n.toNumber()
                        }), (0, g.jsxs)(l.Z, {
                            variant: "caption",
                            color: "textSecondary",
                            children: ["This payoff diagram does not include premiums or trading fees and assumes implied volatility stays constant.", " "]
                        }), (0, g.jsx)(l.Z, {
                            variant: "subtitle1",
                            className: i.sectionTitle,
                            children: "Risks"
                        }), (0, g.jsx)(l.Z, {
                            variant: "body1",
                            className: i.content,
                            children: "You are exposed to orion premiums, so if you hold the position for a long period of time without upward price movements in ETH, you can lose considerable funds to premium payments."
                        }), (0, g.jsx)("br", {}), (0, g.jsxs)(l.Z, {
                            variant: "body1",
                            className: i.content,
                            children: [" ", "Orion smart contracts have been audited by Trail of Bits, Akira, and Sherlock. However, smart contracts are experimental technology and we encourage caution only risking funds you can afford to lose."]
                        })]
                    }) : (0, g.jsxs)(g.Fragment, {
                        children: [(0, g.jsx)(l.Z, {
                            variant: "h4",
                            className: i.subtitle,
                            children: "Mint orion and LP"
                        }), (0, g.jsx)(l.Z, {
                            variant: "body1",
                            className: i.content,
                            children: "Earn yield from trading fees while being long ETH"
                        }), (0, g.jsx)(l.Z, {
                            variant: "subtitle1",
                            className: i.sectionTitle,
                            children: "Strategy Overview"
                        }), (0, g.jsx)(l.Z, {
                            variant: "body1",
                            className: i.content,
                            children: "Minting and LPing is similar to a covered call. You start off with a position similar to 1x long ETH that gets less long ETH as the price moves up and longer ETH as the price moves down."
                        }), (0, g.jsx)(l.Z, {
                            variant: "subtitle1",
                            className: i.sectionTitle,
                            children: "Payoff"
                        }), (0, g.jsx)(we, {
                            ethPrice: n.toNumber()
                        }), (0, g.jsxs)(l.Z, {
                            variant: "caption",
                            color: "textSecondary",
                            children: ["This payoff diagram does not included premiums or trading fees and assumes implied volatility stays constant.", " "]
                        }), (0, g.jsx)(l.Z, {
                            variant: "subtitle1",
                            className: i.sectionTitle,
                            children: "Risks"
                        }), (0, g.jsx)(l.Z, {
                            variant: "body1",
                            className: i.content,
                            children: "You enter this position neutral to orion exposure, but could end up long orion exposed to premiums or short orion depending on ETH price movements. If you fall below the minimum collateralization threshold (150%), you are at risk of liquidation."
                        }), (0, g.jsx)("br", {}), (0, g.jsx)(l.Z, {
                            variant: "body1",
                            className: i.content,
                            children: "Orion smart contracts have been audited by Trail of Bits, Akira, and Sherlock. However, smart contracts are experimental technology and we encourage caution only risking funds you can afford to lose."
                        })]
                    })
                };

            function Pe() {
                var e = Oe(),
                    t = (0, d.useState)(0),
                    i = t[0],
                    n = t[1];
                return (0, g.jsxs)(g.Fragment, {
                    children: [(0, g.jsx)(Ee.Z, {}), (0, g.jsxs)("div", {
                        className: e.container,
                        children: [(0, g.jsxs)("div", {
                            className: e.leftColumn,
                            children: [(0, g.jsxs)(g.Fragment, {
                                children: [(0, g.jsx)(l.Z, {
                                    variant: "h3",
                                    className: e.title,
                                    children: "Uniswap V3 LP ORN-ETH Pool"
                                }), (0, g.jsx)(l.Z, {
                                    variant: "subtitle1",
                                    className: e.description,
                                    children: "Earn LP fees for providing ORN-ETH liquidity"
                                })]
                            }), (0, g.jsx)(c.Z, {
                                marginTop: "24px",
                                children: (0, g.jsx)(ue, {})
                            }), (0, g.jsxs)("div", {
                                className: e.details,
                                children: [(0, g.jsx)(c.Z, {
                                    display: "flex",
                                    children: (0, g.jsxs)(Ce.Qo, {
                                        style: {
                                            background: "transparent"
                                        },
                                        className: e.chartNav,
                                        value: i,
                                        onChange: function (e, t) {
                                            return n(t)
                                        },
                                        "aria-label": "Sub nav tabs",
                                        scrollButtons: "auto",
                                        variant: "scrollable",
                                        children: [(0, g.jsx)(Ce.TT, {
                                            label: "Buy and LP",
                                            style: {
                                                width: "140px"
                                            }
                                        }), (0, g.jsx)(Ce.TT, {
                                            label: "Mint and LP",
                                            style: {
                                                width: "140px"
                                            }
                                        })]
                                    })
                                }), (0, g.jsx)(c.Z, {
                                    marginTop: "24px",
                                    children: (0, g.jsx)(Ie, {
                                        lpType: i
                                    })
                                })]
                            }), (0, g.jsxs)(c.Z, {
                                marginTop: "32px",
                                children: [(0, g.jsx)(l.Z, {
                                    variant: "h4",
                                    className: e.subtitle,
                                    children: "Details"
                                }), (0, g.jsx)(se, {
                                    marginTop: "16px"
                                })]
                            })]
                        }), (0, g.jsx)("div", {
                            className: e.rightColumn,
                            children: (0, g.jsx)("div", {
                                className: e.tradeSection,
                                children: (0, g.jsx)(J, {})
                            })
                        })]
                    })]
                })
            }

            function Le() {
                return (0, g.jsxs)(g.Fragment, {
                    children: [(0, g.jsx)(De.Z, {}), (0, g.jsx)(w, {
                        children: (0, g.jsx)(Pe, {})
                    })]
                })
            }
            var Ne = Le
        },
        16587: function (e, t, i) {
            "use strict";
            i(2784);
            var n = i(55351),
                a = i(709),
                r = i(52322);
            t.Z = function () {
                return (0, r.jsx)(n.PB, {
                    title: a.Cu,
                    description: a.t8,
                    canonical: a.Gv,
                    openGraph: {
                        images: [{
                            url: a.Ft,
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
                })
            }
        },
        69955: function (e, t, i) {
            "use strict";
            i.d(t, {
                Qo: function () {
                    return o
                },
                TT: function () {
                    return s
                },
                _X: function () {
                    return c
                },
                _i: function () {
                    return l
                }
            });
            var n = i(28795),
                a = i(6487),
                r = i(74719),
                o = ((0, r.Z)((function (e) {
                    return {
                        root: {
                            borderRadius: e.spacing(1),
                            background: e.palette.background.lightStone,
                            padding: e.spacing(.75)
                        },
                        indicator: {
                            height: "100%",
                            borderRadius: e.spacing(.7),
                            background: e.palette.primary.main,
                            opacity: ".1"
                        }
                    }
                }))(n.Z), (0, r.Z)((function (e) {
                    return {
                        root: {
                            textTransform: "initial",
                            minWidth: e.spacing(10),
                            minHeight: "auto",
                            "&$selected": {
                                color: e.palette.primary.main,
                                fontWeight: e.typography.fontWeightMedium
                            }
                        },
                        selected: {
                            color: e.palette.primary.main
                        }
                    }
                }))(a.Z), (0, r.Z)((function (e) {
                    return {
                        root: {
                            borderRadius: e.spacing(1),
                            border: "2px solid",
                            borderColor: e.palette.background.lightStone,
                            padding: e.spacing(.75)
                        },
                        indicator: {
                            height: "100%",
                            borderRadius: e.spacing(1),
                            background: e.palette.primary.main
                        }
                    }
                }))(n.Z)),
                s = (0, r.Z)((function (e) {
                    return {
                        root: {
                            textTransform: "initial",
                            minWidth: e.spacing(10),
                            minHeight: "auto",
                            width: "50%",
                            fontWeight: 700,
                            fontSize: "16px",
                            opacity: 1,
                            color: e.palette.primary.contrastText
                        },
                        selected: {
                            color: e.palette.background.default,
                            zIndex: 10
                        }
                    }
                }))(a.Z),
                l = (0, r.Z)((function (e) {
                    return {
                        root: {
                            background: "transparent",
                            padding: e.spacing(0),
                            borderRadius: e.spacing(2, 2, 0, 0)
                        },
                        indicator: {
                            height: "0px",
                            width: "100%",
                            padding: e.spacing(0),
                            background: "transparent"
                        }
                    }
                }))(n.Z),
                c = (0, r.Z)((function (e) {
                    return {
                        root: {
                            textTransform: "initial",
                            color: e.palette.text.secondary,
                            backgroundColor: e.palette.background.lightStone,
                            "&$selected": {
                                color: e.palette.text.primary,
                                fontWeight: e.typography.fontWeightMedium,
                                backgroundColor: "transparent"
                            }
                        },
                        selected: {
                            color: e.palette.primary.main
                        }
                    }
                }))(a.Z)
        },
        94741: function (e, t, i) {
            "use strict";
            var n = i(20406),
                a = i(28526),
                r = i.n(a),
                o = i(90436),
                s = i(67020),
                l = i(50581),
                c = i(82113),
                d = i(4614),
                p = i(79692),
                u = i(46293),
                x = i(6391),
                h = i.n(x),
                m = i(2784),
                g = i(33419),
                f = i(39097),
                b = i.n(f),
                v = i(709),
                y = i(68619),
                j = i(52001),
                T = i(43872),
                Z = i(4456),
                S = i(52061),
                w = i(48125),
                E = i(31257),
                C = i(42277),
                k = i(53818),
                D = i(13575),
                O = i(67448),
                I = i(53341),
                P = i(80780),
                L = i(13416),
                N = i(82375),
                H = i(46785),
                _ = i(90765),
                B = i(21245),
                W = i(91023),
                R = i(48965),
                M = i(27203),
                G = i(58831),
                F = i(37175),
                q = i(73691),
                U = i(52322),
                Q = (0, p.Z)((function (e) {
                    return (0, u.Z)({
                        link: {
                            color: e.palette.primary.main,
                            marginBottom: e.spacing(2),
                            textDecoration: "underline"
                        },
                        label: {
                            fontSize: "18px",
                            fontWeight: 700
                        }
                    })
                }));
            t.Z = function (e) {
                var t = e.onMint,
                    i = e.showManageLink,
                    a = Q(),
                    p = (0, g.Dv)(C.pK).oSqueeth,
                    u = (0, k.m)(p, 15, v.xM).value,
                    x = (0, w.tM)().data,
                    f = (0, g.Dv)(E.QS),
                    z = (0, g.Dv)(E.dh),
                    A = (0, S.Y)().loading,
                    Y = (0, D.zi)(),
                    V = (0, D.r)(),
                    K = (0, D.vr)(),
                    X = (0, O.yE)(),
                    $ = X.validVault,
                    J = X.vaultId,
                    ee = (0, I.p)($),
                    te = ee.existingCollat,
                    ie = ee.existingCollatPercent,
                    ne = (0, L.xD)(),
                    ae = (0, R.W)().data,
                    re = (0, q.L)(),
                    oe = re.isRestricted,
                    se = (re.isWithdrawAllowed, (0, w.rs)()),
                    le = (0, m.useState)(new(h())(0)),
                    ce = le[0],
                    de = le[1],
                    pe = (0, m.useState)("0"),
                    ue = pe[0],
                    xe = pe[1],
                    he = (0, m.useMemo)((function () {
                        return new(h())(ue)
                    }), [ue]),
                    me = (0, m.useState)(200),
                    ge = me[0],
                    fe = me[1],
                    be = (0, m.useState)(!1),
                    ve = be[0],
                    ye = be[1],
                    je = (0, m.useState)(""),
                    Te = je[0],
                    Ze = je[1],
                    Se = (0, m.useState)(""),
                    we = Se[0],
                    Ee = Se[1],
                    Ce = (0, m.useState)(v.HW),
                    ke = Ce[0],
                    De = Ce[1],
                    Oe = (0, m.useState)(!0),
                    Ie = Oe[0],
                    Pe = Oe[1],
                    Le = (0, y.nw)(null !== x && void 0 !== x ? x : v.HW, 18),
                    Ne = function () {
                        var e = (0, n.Z)(r().mark((function e() {
                            return r().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (ye(!0), e.prev = 1, !A) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 4:
                                        return e.next = 6, Y(Number(J), ce, he);
                                    case 6:
                                        t(), e.next = 12;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(1), console.log(e.t0);
                                    case 12:
                                        ye(!1);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 9]
                            ])
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }();
                (0, P.Z)((function () {
                    var e = !0;
                    if (!he.isNaN() && !he.isZero()) {
                        var t = he.times(100).div(ge);
                        return V(t).then((function (t) {
                                e && de(t)
                            })),
                            function () {
                                e = !1
                            }
                    }
                    e && de(new(h())(0))
                }), [ge, he.toString()]), (0, P.Z)((function () {
                    Ee(ge < 150 ? "Minimum collateral ratio is 150%" : ""), f && he.isGreaterThan(Le) ? Ze("Insufficient ETH balance") : f && he.plus(te).lt(v.hQ) && Ze("Minimum collateral is 6.9 ETH")
                }), [Le.toString(), f, te.toString(), he.toString(), ge]);
                var He = (0, W.Z)((function (e) {
                    e && fe(v.vh), Pe(e)
                }), [fe]);
                (0, m.useEffect)((function () {
                    ge !== v.vh && Pe(!1)
                }), [ge]), (0, P.Z)((function () {
                    K(he, ce).then((function (e) {
                        var t = e.liquidationPrice;
                        De(t)
                    }))
                }), [he, ce, K, null === $ || void 0 === $ ? void 0 : $.shortAmount]);
                var _e = Te || (we || "");
                return (0, U.jsxs)("div", {
                    children: [J && i ? (0, U.jsx)(o.Z, {
                        className: a.link,
                        children: (0, U.jsx)(b(), {
                            href: "vault/".concat(J),
                            children: "Manage Vault"
                        })
                    }) : null, (0, U.jsx)(s.Z, {
                        display: "flex",
                        flexDirection: "column",
                        children: (0, U.jsx)(T.D5, {
                            id: "lp-page-mint-eth-input",
                            value: ue,
                            onInputChange: function (e) {
                                return xe(e)
                            },
                            symbol: "ETH",
                            logo: N.Z,
                            balance: Le,
                            usdPrice: ne,
                            onBalanceClick: function () {
                                return xe(Le.toString())
                            },
                            error: !!Te,
                            helperText: Te
                        })
                    }), (0, U.jsxs)(s.Z, {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "24px",
                        children: [(0, U.jsx)(o.Z, {
                            variant: "h4",
                            className: a.label,
                            children: "Collateral ratio"
                        }), (0, U.jsxs)(s.Z, {
                            display: "flex",
                            alignItems: "center",
                            gridGap: "16px",
                            children: [(0, U.jsx)(B.Z, {
                                name: "priceRangeDefault",
                                label: "Default",
                                isChecked: Ie,
                                onInputChange: He
                            }), (0, U.jsx)(T.Rn, {
                                id: "collateral-ratio-input",
                                value: ge,
                                onInputChange: function (e) {
                                    return fe(Number(e))
                                },
                                InputProps: {
                                    endAdornment: (0, U.jsx)(l.Z, {
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
                    }), (0, U.jsxs)(s.Z, {
                        marginTop: "24px",
                        children: [(0, U.jsx)(Z.Z, {
                            collatRatio: ge,
                            onCollatRatioChange: function (e) {
                                return fe(e)
                            },
                            minCollatRatio: 150
                        }), (0, U.jsxs)(s.Z, {
                            marginTop: "12px",
                            children: [(0, U.jsx)(c.Z, {
                                in: ge <= 150,
                                children: (0, U.jsx)(_.Z, {
                                    severity: "error",
                                    id: "collat-ratio-slider-alert-text",
                                    children: "You will get liquidated."
                                })
                            }), (0, U.jsx)(c.Z, {
                                in: ge > 150 && ge < 200,
                                children: (0, U.jsx)(_.Z, {
                                    severity: "warning",
                                    id: "collat-ratio-slider-alert-text",
                                    children: "Collateral ratio is too low. You will get liquidated at 150%."
                                })
                            }), (0, U.jsx)(c.Z, {
                                in: ge >= 200 && ge < 225,
                                children: (0, U.jsx)(_.Z, {
                                    severity: "warning",
                                    id: "collat-ratio-slider-alert-text",
                                    children: "Collateral ratio is risky."
                                })
                            })]
                        })]
                    }), (0, U.jsx)(s.Z, {
                        marginTop: "24px",
                        children: (0, U.jsx)(T.D5, {
                            id: "lp-page-mint-trade-details",
                            label: "Mint",
                            value: ce.toFixed(6),
                            symbol: "oORN",
                            logo: H.Z,
                            balance: u,
                            usdPrice: ae,
                            showMaxAction: !1,
                            readOnly: !0
                        })
                    }), (0, U.jsx)(c.Z, {
                        in: !!_e,
                        children: (0, U.jsx)(_.Z, {
                            severity: "error",
                            marginTop: "24px",
                            children: _e
                        })
                    }), (0, U.jsxs)(s.Z, {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gridGap: "12px",
                        marginTop: "24px",
                        flexWrap: "wrap",
                        children: [(0, U.jsx)(M.Z, {
                            isSmall: !0,
                            label: (0, U.jsx)(M.D, {
                                isSmall: !0,
                                label: "Liquidation Price",
                                tooltipTitle: "".concat(v.Bm.LiquidationPrice, ". ").concat(v.Bm.Twap)
                            }),
                            value: (0, G.xG)(ke.toNumber())
                        }), (0, U.jsx)(M.Z, {
                            isSmall: !0,
                            label: (0, U.jsx)(M.D, {
                                isSmall: !0,
                                label: "Current collateral ratio",
                                tooltipTitle: v.Bm.CurrentCollRatio
                            }),
                            value: (0, G.uf)(ie) + "%"
                        })]
                    }), oe && (0, U.jsx)(F.Z, {
                        withdrawAllowed: oe,
                        marginTop: "24px"
                    }), (0, U.jsx)(s.Z, {
                        marginTop: "24px",
                        children: oe ? (0, U.jsx)(j.F2, {
                            fullWidth: !0,
                            variant: "contained",
                            disabled: !0,
                            id: "mint-to-lp-restricted-btn",
                            children: "Unavailable"
                        }) : f ? (0, U.jsx)(j.F2, {
                            id: "mint-to-lp-btn",
                            variant: "contained",
                            onClick: Ne,
                            fullWidth: !0,
                            disabled: !z || f && he.plus(te).lt(v.hQ) || ve,
                            children: z ? ve ? (0, U.jsx)(d.Z, {
                                color: "primary",
                                size: "1.5rem"
                            }) : "Mint" : "Unsupported Network"
                        }) : (0, U.jsx)(j.F2, {
                            fullWidth: !0,
                            variant: "contained",
                            onClick: se,
                            id: "mint-to-lp-connect-wallet-btn",
                            children: "Connect Wallet"
                        })
                    })]
                })
            }
        },
        54473: function (e, t, i) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/lp", function () {
                return i(16922)
            }])
        }
    },
    function (e) {
        e.O(0, [3661, 9411, 5351, 1057, 834, 6763, 8923, 4472, 1839, 4793, 9774, 2888, 179], (function () {
            return t = 54473, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);
//# sourceMappingURL=lp-5ee9dc16405905bd.js.map