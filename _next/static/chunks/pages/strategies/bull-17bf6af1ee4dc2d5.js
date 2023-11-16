(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4277], {
        23147: function (e, n, t) {
            "use strict";
            var r = t(14859),
                i = t(93291);
            n.Z = void 0;
            var a = i(t(2784)),
                o = (0, r(t(50175)).default)(a.createElement("path", {
                    d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
                }), "ArrowBack");
            n.Z = o
        },
        27597: function (e, n, t) {
            "use strict";
            var r = t(14859),
                i = t(93291);
            n.Z = void 0;
            var a = i(t(2784)),
                o = (0, r(t(50175)).default)(a.createElement("path", {
                    d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                }), "ArrowForward");
            n.Z = o
        },
        96769: function (e, n, t) {
            "use strict";
            var r = t(14859),
                i = t(93291);
            n.Z = void 0;
            var a = i(t(2784)),
                o = (0, r(t(50175)).default)(a.createElement("path", {
                    d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                }), "KeyboardArrowDown");
            n.Z = o
        },
        96971: function (e, n, t) {
            "use strict";
            var r = t(14859),
                i = t(93291);
            n.Z = void 0;
            var a = i(t(2784)),
                o = (0, r(t(50175)).default)(a.createElement("path", {
                    d: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"
                }), "KeyboardArrowUp");
            n.Z = o
        },
        2997: function (e, n, t) {
            "use strict";
            var r = t(14859),
                i = t(93291);
            n.Z = void 0;
            var a = i(t(2784)),
                o = (0, r(t(50175)).default)(a.createElement("path", {
                    d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
                }), "OpenInNew");
            n.Z = o
        },
        47603: function (e, n, t) {
            "use strict";
            var r = t(14859),
                i = t(93291);
            n.Z = void 0;
            var a = i(t(2784)),
                o = (0, r(t(50175)).default)(a.createElement("path", {
                    d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"
                }), "Settings");
            n.Z = o
        },
        51704: function (e, n, t) {
            var r = t(52153),
                i = /^\s+/;
            e.exports = function (e) {
                return e ? e.slice(0, r(e) + 1).replace(i, "") : e
            }
        },
        52153: function (e) {
            var n = /\s/;
            e.exports = function (e) {
                for (var t = e.length; t-- && n.test(e.charAt(t)););
                return t
            }
        },
        54073: function (e, n, t) {
            var r = t(29259),
                i = t(61100),
                a = t(7642),
                o = Math.max,
                c = Math.min;
            e.exports = function (e, n, t) {
                var s, l, u, d, p, f, x = 0,
                    h = !1,
                    g = !1,
                    m = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");

                function v(n) {
                    var t = s,
                        r = l;
                    return s = l = void 0, x = n, d = e.apply(r, t)
                }

                function b(e) {
                    return x = e, p = setTimeout(Z, n), h ? v(e) : d
                }

                function w(e) {
                    var t = e - f;
                    return void 0 === f || t >= n || t < 0 || g && e - x >= u
                }

                function Z() {
                    var e = i();
                    if (w(e)) return y(e);
                    p = setTimeout(Z, function (e) {
                        var t = n - (e - f);
                        return g ? c(t, u - (e - x)) : t
                    }(e))
                }

                function y(e) {
                    return p = void 0, m && s ? v(e) : (s = l = void 0, d)
                }

                function j() {
                    var e = i(),
                        t = w(e);
                    if (s = arguments, l = this, f = e, t) {
                        if (void 0 === p) return b(f);
                        if (g) return clearTimeout(p), p = setTimeout(Z, n), v(f)
                    }
                    return void 0 === p && (p = setTimeout(Z, n)), d
                }
                return n = a(n) || 0, r(t) && (h = !!t.leading, u = (g = "maxWait" in t) ? o(a(t.maxWait) || 0, n) : u, m = "trailing" in t ? !!t.trailing : m), j.cancel = function () {
                    void 0 !== p && clearTimeout(p), x = 0, s = f = l = p = void 0
                }, j.flush = function () {
                    return void 0 === p ? d : y(i())
                }, j
            }
        },
        4795: function (e, n, t) {
            var r = t(53366),
                i = t(15125);
            e.exports = function (e) {
                return "symbol" == typeof e || i(e) && "[object Symbol]" == r(e)
            }
        },
        61100: function (e, n, t) {
            var r = t(37772);
            e.exports = function () {
                return r.Date.now()
            }
        },
        7642: function (e, n, t) {
            var r = t(51704),
                i = t(29259),
                a = t(4795),
                o = /^[-+]0x[0-9a-f]+$/i,
                c = /^0b[01]+$/i,
                s = /^0o[0-7]+$/i,
                l = parseInt;
            e.exports = function (e) {
                if ("number" == typeof e) return e;
                if (a(e)) return NaN;
                if (i(e)) {
                    var n = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = i(n) ? n + "" : n
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = r(e);
                var t = c.test(e);
                return t || s.test(e) ? l(e.slice(2), t ? 2 : 8) : o.test(e) ? NaN : +e
            }
        },
        60230: function (e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function () {
                    return Ce
                }
            });
            var r, i = t(2784),
                a = t(55351),
                o = t(95235),
                c = t(79692),
                s = t(46293),
                l = t(90436),
                u = t(86689),
                d = t(54603),
                p = t(70055),
                f = t(48125),
                x = t(67020),
                h = t(6277),
                g = t(14498),
                m = t(96971),
                v = t(96769),
                b = t(33419),
                w = t(27203),
                Z = t(52001),
                y = t(29150),
                j = t(58831),
                k = t(55606),
                T = t(8234),
                S = t(41436),
                C = t(73381),
                E = t(52322),
                N = (0, c.Z)((function () {
                    return (0, s.Z)({
                        button: {
                            color: "rgba(255, 255, 255, 0.5)"
                        },
                        buttonText: {
                            color: "rgba(255, 255, 255, 0.5)",
                            fontSize: "15px",
                            fontWeight: 500,
                            marginRight: "4px"
                        }
                    })
                })),
                D = function () {
                    var e = (0, i.useState)(!1),
                        n = e[0],
                        t = e[1],
                        r = (0, b.Dv)(y.Qv),
                        a = (0, b.Dv)(y.p9),
                        o = (0, b.Dv)(T.kc),
                        c = (0, S.Z)().track,
                        s = N(),
                        u = 100 * r;
                    return (0, E.jsxs)("div", {
                        children: [(0, E.jsxs)(Z.Av, {
                            className: s.button,
                            onClick: function () {
                                t(!n), !n && c(C.rg.SEE_ADVANCED_METRICS_BULL)
                            },
                            children: [(0, E.jsx)(l.Z, {
                                className: s.buttonText,
                                children: "Advanced"
                            }), " ", n ? (0, E.jsx)(m.Z, {}) : (0, E.jsx)(v.Z, {})]
                        }), (0, E.jsx)(g.Z, {
                            in: n,
                            children: n ? (0, E.jsxs)(x.Z, {
                                display: "flex",
                                justifyContent: "space-between",
                                gridGap: "12px",
                                marginTop: "16px",
                                flexWrap: "wrap",
                                children: [(0, E.jsx)(w.Z, {
                                    label: (0, E.jsx)(w.D, {
                                        label: "Daily Premium",
                                        tooltipTitle: "".concat(k.Bm.StrategyEarnFunding, ". ").concat(k.Bm.CurrentImplFunding)
                                    }),
                                    gridGap: "4px",
                                    value: o && o != 1 / 0 ? "".concat((0, j.uf)(100 * o), "%") : "-"
                                }), (0, E.jsx)(w.Z, {
                                    label: (0, E.jsx)(w.D, {
                                        label: "Implied Volatility",
                                        tooltipTitle: k.Bm.ImplVol
                                    }),
                                    gridGap: "4px",
                                    value: "".concat((0, j.uf)(u), "%")
                                }), (0, E.jsx)(w.Z, {
                                    label: (0, E.jsx)(w.D, {
                                        label: "Reference Volatility",
                                        tooltipTitle: k.Bm.osqthRefVol
                                    }),
                                    gridGap: "4px",
                                    value: "".concat((0, j.uf)(a), "%")
                                })]
                            }) : (0, E.jsx)("div", {})
                        })]
                    })
                },
                L = t(24525),
                B = t(72276),
                W = (0, c.Z)((function (e) {
                    return (0, s.Z)({
                        timerContainer: (0, o.Z)({
                            position: "absolute",
                            top: "10px",
                            right: "0"
                        }, e.breakpoints.down("sm"), {
                            position: "relative",
                            top: "0px",
                            right: "0",
                            marginBottom: "16px"
                        })
                    })
                })),
                _ = "https://opyn.gitbook.io/opyn-strategies/zen-bull/introduction",
                I = function () {
                    var e = (0, L.Z)(),
                        n = (W(), (0, S.Z)().track);
                    return (0, E.jsxs)("div", {
                        children: [(0, E.jsxs)(x.Z, {
                            display: "flex",
                            flexDirection: "column",
                            gridGap: "8px",
                            children: [(0, E.jsx)(l.Z, {
                                variant: "h3",
                                className: e.sectionTitle,
                                children: "About Zen Bull"
                            }), (0, E.jsx)(l.Z, {
                                variant: "h2",
                                className: e.heading,
                                children: "Stack ETH when ETH increases slow and steady"
                            }), (0, E.jsxs)(l.Z, {
                                className: (0, h.default)(e.text, e.textMargin),
                                children: ["Zen bull makes money when ETH goes up, slow and steady. It stacks ETH if ETH is within the below bands at the next rebalance.", " "]
                            })]
                        }), (0, E.jsx)(x.Z, {
                            marginTop: "16px",
                            children: (0, E.jsx)(D, {})
                        })]
                    })
                },
                H = t(51112),
                R = t(53818),
                A = t(42277),
                F = t(20406),
                z = t(8529),
                M = t(28526),
                P = t.n(M),
                G = t(98983),
                O = t(4614),
                U = t(74719),
                q = t(61837),
                V = t(82726),
                Y = t(99144),
                X = t(6391),
                K = t.n(X),
                $ = t(54073),
                Q = t.n($),
                J = t(23147),
                ee = t(27597),
                ne = t(43872),
                te = t(71169),
                re = t(37175),
                ie = t(21699),
                ae = t(31257),
                oe = t(91023),
                ce = t(60600),
                se = t(9462),
                le = t(96532),
                ue = t(52992),
                de = t(73691),
                pe = t(68619),
                fe = t(709),
                xe = t(82375),
                he = (0, c.Z)((function (e) {
                    return (0, s.Z)({
                        container: {
                            padding: e.spacing(2)
                        },
                        tradeContainer: {
                            display: "flex",
                            flexDirection: "column",
                            marginTop: e.spacing(2)
                        },
                        tabBackGround: {
                            position: "sticky",
                            top: "0",
                            zIndex: 20
                        },
                        notice: {
                            marginTop: e.spacing(2.5),
                            padding: e.spacing(2),
                            border: "1px solid #F3FF6C",
                            borderRadius: e.spacing(1),
                            display: "flex",
                            background: "rgba(243, 255, 108, 0.1)",
                            alignItems: "center"
                        },
                        infoIcon: {
                            marginRight: e.spacing(2),
                            color: "#F3FF6C"
                        },
                        subtitle: {
                            fontSize: "18px",
                            fontWeight: 700,
                            letterSpacing: "-0.01em",
                            lineHeight: "130%"
                        },
                        infoText: {
                            fontWeight: 500,
                            fontSize: "13px"
                        },
                        slippageContainer: (0, o.Z)({}, e.breakpoints.down("xs"), {
                            flexWrap: "wrap"
                        })
                    })
                })),
                ge = (0, c.Z)((function (e) {
                    return (0, s.Z)({
                        description: {
                            marginTop: e.spacing(1),
                            marginBottom: e.spacing(1)
                        },
                        subDescription: {
                            marginTop: e.spacing(2),
                            display: "flex",
                            alignItems: "center",
                            color: e.palette.text.secondary
                        },
                        infoIcon: {
                            color: e.palette.text.hint,
                            fontSize: 14,
                            marginLeft: e.spacing(.75)
                        }
                    })
                })),
                me = function () {
                    return null
                };
            ! function (e) {
                e[e.OPYN = 1] = "OPYN", e[e.EULER = 2] = "EULER"
            }(r || (r = {}));
            var ve, be = (0, c.Z)((function (e) {
                    return (0, s.Z)({
                        container: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: e.spacing(1)
                        },
                        stepData: {
                            marginTop: e.spacing(0),
                            fontFamily: "DM Mono",
                            textAlign: "center",
                            fontSize: "14px"
                        },
                        stepButton: {
                            padding: e.spacing(.5),
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
                we = (0, U.Z)((function (e) {
                    return {
                        root: {
                            background: e.palette.background.stone
                        },
                        disabled: {
                            background: e.palette.background.stone,
                            opacity: "1"
                        }
                    }
                }))(q.Z),
                Ze = function (e) {
                    var n = e.setStep,
                        t = e.step,
                        r = be();
                    return (0, E.jsxs)("div", {
                        children: [(0, E.jsxs)("div", {
                            className: r.container,
                            children: [(0, E.jsx)(we, {
                                id: "lp-prev-step-btn",
                                className: r.stepButton,
                                classes: {
                                    disabled: r.disabled
                                },
                                disabled: 1 === t,
                                onClick: function () {
                                    return n(t - 1)
                                },
                                children: (0, E.jsx)(J.Z, {
                                    fontSize: "small"
                                })
                            }), (0, E.jsx)(we, {
                                id: "lp-next-step-btn",
                                className: r.stepButton,
                                classes: {
                                    disabled: r.disabled
                                },
                                disabled: 2 === t,
                                onClick: function () {
                                    return n(t + 1)
                                },
                                children: (0, E.jsx)(ee.Z, {
                                    fontSize: "small"
                                })
                            })]
                        }), (0, E.jsxs)(l.Z, {
                            className: r.stepData,
                            children: ["0", (0, E.jsx)("span", {
                                id: "current-lp-step",
                                children: t
                            }), " / 02"]
                        }), " "]
                    })
                },
                ye = function (e) {
                    var n = e.onTxnConfirm,
                        t = e.isLoadingBalance,
                        a = e.bullBalance,
                        o = he(),
                        c = ge(),
                        s = (0, i.useState)(r.OPYN),
                        p = s[0],
                        h = s[1],
                        g = (0, i.useState)("0"),
                        m = g[0],
                        v = g[1],
                        k = (0, i.useState)(!1),
                        N = k[0],
                        D = k[1],
                        L = (0, i.useState)({
                            maxEthForWPowerPerp: fe.HW,
                            ethInForOsqth: fe.HW,
                            osqthOut: fe.HW,
                            wPowerPerpPoolFee: 0,
                            priceImpact: 0
                        }),
                        B = L[0],
                        W = L[1],
                        _ = (0, i.useState)(!1),
                        I = _[0],
                        H = _[1],
                        R = (0, b.KO)(ie.ib),
                        M = (0, z.Z)(R, 2),
                        U = M[0],
                        q = M[1],
                        X = (0, b.Dv)(y.xS),
                        $ = (0, b.Dv)(ae.QS),
                        J = (0, b.Dv)(ae.dh),
                        ee = (0, b.Dv)(A.pK),
                        be = ee.bullStrategy,
                        we = ee.bullEmergencyWithdraw,
                        ye = (0, b.Dv)(T.Ky),
                        je = (0, b.Dv)(T.ro),
                        ke = (0, b.Dv)(y.Qv),
                        Te = (0, b.Dv)(y.al),
                        Se = (0, S.Z)().track,
                        Ce = (0, d.aV)(),
                        Ee = (0, d.oy)(),
                        Ne = (0, i.useCallback)((function (e) {
                            return Se(C.X$.EMERGENCY_WITHDRAW_BULL_AMOUNT_ENTERED, {
                                amount: e.toNumber()
                            })
                        }), [Se]),
                        De = (0, i.useRef)(fe.HW),
                        Le = (0, i.useRef)(fe.HW),
                        Be = (0, ce.L)(be, we),
                        We = Be.allowance,
                        _e = Be.approve,
                        Ie = (0, se.Z)(),
                        He = (0, le.Z)(Ne),
                        Re = (0, z.Z)(He, 2),
                        Ae = Re[0],
                        Fe = Re[1],
                        ze = (0, i.useMemo)((function () {
                            return new(K())(m)
                        }), [m]),
                        Me = Q()(function () {
                            var e = (0, F.Z)(P().mark((function e(n) {
                                return P().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (De.current.isEqualTo(n)) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            D(!0), Ce(n).then((function (e) {
                                                W(e)
                                            })).finally((function () {
                                                D(!1)
                                            }));
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function (n) {
                                return e.apply(this, arguments)
                            }
                        }(), 500),
                        Pe = (0, oe.Z)((function (e) {
                            v(e);
                            var n = new(K())(e);
                            n.isGreaterThan(0) && Ae(n);
                            var t = n.div(je).times(a);
                            De.current = t, Me(t)
                        }), [a, je, Me, Ae]),
                        Ge = (0, i.useCallback)((function (e) {
                            Se(C.X$.EMERGENCY_WITHDRAW_BULL_CHANGE_SLIPPAGE, {
                                percent: e.toNumber()
                            }), q(e.toNumber()), Pe(m)
                        }), [q, Pe, m, Se]),
                        Oe = function () {
                            var e = (0, F.Z)(P().mark((function e() {
                                return P().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return H(!0), e.prev = 1, e.next = 4, Ie((0, F.Z)(P().mark((function e() {
                                                return P().wrap((function (e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, _e((function () {
                                                                return console.log("Approved")
                                                            }));
                                                        case 2:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            }))), C.X$.APPROVE_EMERGENCY_WITHDRAW_BULL);
                                        case 4:
                                            e.next = 9;
                                            break;
                                        case 6:
                                            e.prev = 6, e.t0 = e.catch(1), console.log(e.t0);
                                        case 9:
                                            H(!1);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 6]
                                ])
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Ue = (0, i.useCallback)((function (e) {
                            Pe("0"), n({
                                status: !0,
                                amount: Le.current,
                                tradeType: ve.Withdraw,
                                txId: e
                            }), Fe(), Le.current = new(K())(0)
                        }), [n, Fe, Pe]),
                        qe = function () {
                            var e = (0, F.Z)(P().mark((function e() {
                                var n;
                                return P().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return H(!0), e.prev = 1, Le.current = ze, n = {
                                                amount: De.current.toNumber(),
                                                isPriceImpactHigh: Xe,
                                                priceImpact: B.priceImpact
                                            }, e.next = 6, Ee(De.current, B.maxEthForWPowerPerp, n, Ue);
                                        case 6:
                                            e.next = 11;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(1), console.log(e.t0);
                                        case 11:
                                            H(!1);
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 8]
                                ])
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Ve = (0, pe.nw)(X, 18).sqrt(),
                        Ye = (0, ue.Z)((function () {
                            if (ze.gt(je)) return "Withdraw amount greater than strategy balance"
                        }), [ze, je]),
                        Xe = (0, ue.Z)((function () {
                            var e = B.ethInForOsqth.div(B.osqthOut).times(1 - fe.E4 / 1e6),
                                n = new(K())(fe.dH),
                                t = new(K())(fe.Ny).div(fe.oP);
                            return new(K())(Math.log(n.times(e).div(Te.times(Ve)).toNumber())).div(t).sqrt().minus(ke).abs().gt(K().max(new(K())(ke).times(fe.G2), fe.HU))
                        }), [B.ethInForOsqth, B.osqthOut, Te, Ve, ke]),
                        Ke = (0, de.L)(),
                        $e = Ke.isRestricted,
                        Qe = Ke.isWithdrawAllowed,
                        Je = (0, f.rs)(),
                        en = We.times(ye),
                        nn = ze.isZero();
                    return (0, E.jsxs)(E.Fragment, {
                        children: [(0, E.jsx)(Ze, {
                            step: p,
                            setStep: h
                        }), p === r.OPYN ? (0, E.jsxs)(E.Fragment, {
                            children: [(0, E.jsx)(l.Z, {
                                style: {
                                    marginTop: "16px"
                                },
                                variant: "h3",
                                className: o.subtitle,
                                children: "Recovery Withdrawal - Crab"
                            }),  (0, E.jsxs)("div", {
                                className: c.subDescription,
                                children: [(0, E.jsx)(l.Z, {
                                    variant: "body2",
                                    children: "Recovery contract has been peer reviewed"
                                }), (0, E.jsx)(G.ZP, {
                                    title: (0, E.jsx)(me, {}),
                                    interactive: !0,
                                    children: (0, E.jsx)(V.Z, {
                                        fontSize: "small",
                                        className: c.infoIcon
                                    })
                                })]
                            }), (0, E.jsxs)("div", {
                                className: o.tradeContainer,
                                children: [(0, E.jsx)(ne.D5, {
                                    id: "bull-withdraw-eth-input",
                                    value: m,
                                    onInputChange: Pe,
                                    isBalanceLoading: t,
                                    balance: je,
                                    logo: xe.Z,
                                    symbol: "ETH",
                                    usdPrice: Ve,
                                    error: !!Ye,
                                    helperText: Ye,
                                    onBalanceClick: function () {
                                        Se(C.X$.EMERGENCY_WITHDRAW_BULL_SET_AMOUNT_MAX, {
                                            amount: je.toNumber()
                                        }), Pe(je.toString())
                                    }
                                }), Xe ? (0, E.jsxs)("div", {
                                    className: o.notice,
                                    children: [(0, E.jsx)("div", {
                                        className: o.infoIcon,
                                        children: (0, E.jsx)(G.ZP, {
                                            title: "High price impact means that you are losing a significant amount of value due to the size of your trade. Withdrawing a smaller size can reduce your price impact.",
                                            children: (0, E.jsx)(Y.Z, {
                                                fontSize: "medium"
                                            })
                                        })
                                    }), (0, E.jsx)(l.Z, {
                                        variant: "caption",
                                        className: o.infoText,
                                        children: "High price impact. Try multiple smaller transactions."
                                    })]
                                }) : null, (0, E.jsx)(x.Z, {
                                    display: "flex",
                                    flexDirection: "column",
                                    gridGap: "12px",
                                    marginTop: "24px",
                                    children: (0, E.jsxs)(x.Z, {
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        gridGap: "12px",
                                        className: o.slippageContainer,
                                        children: [(0, E.jsx)(w.Z, {
                                            label: "Slippage",
                                            value: (0, j.uf)(U) + "%",
                                            isSmall: !0,
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            gridGap: "12px"
                                        }), (0, E.jsxs)(x.Z, {
                                            display: "flex",
                                            alignItems: "center",
                                            gridGap: "12px",
                                            flex: "1",
                                            children: [(0, E.jsx)(w.Z, {
                                                label: "Price Impact",
                                                value: (0, j.uf)(B.priceImpact) + "%",
                                                isSmall: !0,
                                                flexDirection: "row",
                                                justifyContent: "space-between",
                                                gridGap: "12px"
                                            }), (0, E.jsx)(te.u, {
                                                setSlippage: Ge,
                                                slippage: new(K())(U)
                                            })]
                                        })]
                                    })
                                }), $e && (0, E.jsx)(re.Z, {
                                    withdrawAllowed: Qe,
                                    marginTop: "24px"
                                }), (0, E.jsx)(x.Z, {
                                    marginTop: "24px",
                                    children: $e && !Qe ? (0, E.jsx)(Z.F2, {
                                        fullWidth: !0,
                                        variant: "contained",
                                        onClick: Je,
                                        disabled: !0,
                                        id: "bull-restricted-btn",
                                        children: "Unavailable"
                                    }) : $ ? J ? en.lt(ze) ? (0, E.jsx)(Z.F2, {
                                        fullWidth: !0,
                                        id: "bull-withdraw-btn",
                                        variant: "contained",
                                        onClick: Oe,
                                        disabled: N || I || !!Ye || nn,
                                        children: I || N ? (0, E.jsx)(O.Z, {
                                            color: "primary",
                                            size: "2rem"
                                        }) : "Approve"
                                    }) : (0, E.jsx)(Z.F2, {
                                        fullWidth: !0,
                                        id: "bull-withdraw-btn",
                                        variant: "contained",
                                        onClick: qe,
                                        disabled: N || I || !!Ye || nn,
                                        children: I || N ? (0, E.jsx)(O.Z, {
                                            color: "primary",
                                            size: "2rem"
                                        }) : "Withdraw"
                                    }) : (0, E.jsx)(Z.F2, {
                                        fullWidth: !0,
                                        variant: "contained",
                                        disabled: !0,
                                        id: "bull-unsupported-network-btn",
                                        children: "Unsupported Network"
                                    }) : (0, E.jsx)(Z.F2, {
                                        fullWidth: !0,
                                        variant: "contained",
                                        onClick: Je,
                                        disabled: !1,
                                        id: "bull-select-wallet-btn",
                                        children: "Connect Wallet"
                                    })
                                })]
                            })]
                        }) : (0, E.jsxs)(E.Fragment, {
                            children: [(0, E.jsx)(l.Z, {
                                variant: "h3",
                                style: {
                                    marginTop: "16px"
                                },
                                className: o.subtitle,
                                children: "Recovery Withdrawal - Euler"
                            }), (0, E.jsx)("div", {
                                className: o.tradeContainer,
                                children: (0, E.jsx)("a", {
                                    style: {
                                        width: "100%"
                                    },
                                    href: "https://redemptions.euler.finance/",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: (0, E.jsx)(Z.F2, {
                                        style: {
                                            marginTop: "16px",
                                            width: "100%"
                                        },
                                        children: "Go to Redemption page"
                                    })
                                })
                            })]
                        })]
                    })
                };
            ! function (e) {
                e.Deposit = "Deposit", e.Withdraw = "Withdraw"
            }(ve || (ve = {}));
            var je = function () {
                    var e, n = (0, i.useState)(),
                        t = n[0],
                        r = n[1],
                        a = (0, f.hS)(),
                        o = a.confirmed,
                        c = a.transactionData,
                        s = a.resetTransactionData,
                        l = (0, b.Dv)(A.pK).bullStrategy,
                        u = (0, R.m)(l, 30, 18),
                        d = u.value,
                        p = u.loading,
                        x = u.refetch,
                        h = (0, i.useCallback)((function (e) {
                            console.log("Tx on confirm", e, null === c || void 0 === c ? void 0 : c.hash), r(e), x()
                        }), [null === c || void 0 === c ? void 0 : c.hash, x]),
                        g = (0, i.useCallback)((function () {
                            r(void 0), s()
                        }), [r, s]);
                    return (0, E.jsx)(E.Fragment, {
                        children: o && null !== t && void 0 !== t && t.status ? (0, E.jsxs)(E.Fragment, {
                            children: [(0, E.jsx)(H.Z, {
                                confirmationMessage: "".concat((null === t || void 0 === t ? void 0 : t.tradeType) === ve.Deposit ? "Deposited" : "Withdrawn", " ").concat(null === t || void 0 === t ? void 0 : t.amount.toFixed(4), " ETH"),
                                txnHash: null !== (e = null === c || void 0 === c ? void 0 : c.hash) && void 0 !== e ? e : "",
                                confirmType: H.J.BULL
                            }), (0, E.jsx)(Z.F2, {
                                fullWidth: !0,
                                id: "bull-close-btn",
                                variant: "contained",
                                onClick: g,
                                children: "Close"
                            })]
                        }) : (0, E.jsx)(ye, {
                            onTxnConfirm: h,
                            isLoadingBalance: p,
                            bullBalance: d
                        })
                    })
                },
                ke = t(90765),
                Te = (0, c.Z)((function (e) {
                    return (0, s.Z)({
                        container: (0, o.Z)({
                            marginTop: "32px",
                            display: "flex",
                            justifyContent: "center",
                            gridGap: "96px",
                            flexWrap: "wrap"
                        }, e.breakpoints.down("md"), {
                            gridGap: "40px"
                        }),
                        leftColumn: (0, o.Z)({
                            flex: 1,
                            minWidth: "480px"
                        }, e.breakpoints.down("xs"), {
                            minWidth: "320px"
                        }),
                        rightColumn: (0, o.Z)({
                            flexBasis: "452px"
                        }, e.breakpoints.down("xs"), {
                            flex: "1"
                        }),
                        infoContainer: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "72px"
                        },
                        tradeSection: {
                            border: "1px solid #242728",
                            boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.25)",
                            borderRadius: e.spacing(1),
                            padding: "32px 24px"
                        },
                        topAlert: {
                            marginTop: "16px"
                        }
                    })
                })),
                Se = function () {
                    var e = (0, p.mi)(),
                        n = (0, f.b3)(),
                        t = Te();
                    return (0, p.Vo)(), (0, d.k8)(), (0, i.useEffect)((function () {
                        e()
                    }), [e]), (0, i.useEffect)((function () {
                        "true" === window.localStorage.getItem("walletConnectedToZenbull") || n()
                    }), []), (0, E.jsxs)(E.Fragment, {
                        children: [(0, E.jsxs)("div", {
                            className: t.container,
                            children: [(0, E.jsx)("div", {
                                className: t.leftColumn,
                                children: (0, E.jsx)("div", {
                                    className: t.infoContainer,
                                    children: (0, E.jsx)(I, {})
                                })
                            }), (0, E.jsx)("div", {
                                className: t.rightColumn,
                                children: (0, E.jsx)("div", {
                                    className: t.tradeSection,
                                    children: (0, E.jsx)(je, {})
                                })
                            })]
                        })]
                    })
                },
                Ce = function () {
                    return (0, E.jsxs)(E.Fragment, {
                        children: [(0, E.jsx)(a.PB, {
                            title: "Orion Zen Bull Strategy - Stack ETH",
                            description: "Stack ETH when ETH increases slow and steady",
                            canonical: fe.Gv,
                            openGraph: {
                                images: [{
                                    url: fe.Gv + "/images/previews/bull.png",
                                    width: 1200,
                                    height: 630,
                                    alt: "Zen Bull Strategy"
                                }]
                            },
                            twitter: {
                                handle: "@opyn_",
                                site: "@opyn_",
                                cardType: "summary_large_image"
                            }
                        }), (0, E.jsx)(Se, {})]
                    })
                }
        },
        24525: function (e, n, t) {
            "use strict";
            var r = t(79692),
                i = t(46293),
                a = (0, r.Z)((function (e) {
                    return (0, i.Z)({
                        heading: {
                            fontSize: "32px",
                            fontWeight: 700,
                            letterSpacing: "-0.02em",
                            lineHeight: "130%"
                        },
                        description: {
                            fontSize: "18px",
                            color: "rgba(255, 255, 255, 0.6)",
                            fontWeight: 400,
                            lineHeight: "130%"
                        },
                        sectionTitle: {
                            fontSize: "18px",
                            fontWeight: 700,
                            letterSpacing: "-0.01em",
                            lineHeight: "130%"
                        },
                        text: {
                            fontSize: "18px",
                            color: "#BDBDBD",
                            lineHeight: "130%"
                        },
                        textSmall: {
                            fontSize: "14px",
                            color: "rgba(255, 255, 255, 0.5)",
                            fontWeight: 500
                        },
                        textMargin: {
                            marginTop: "8px"
                        },
                        textSemibold: {
                            fontWeight: 500
                        },
                        colorSuccess: {
                            color: e.palette.success.main
                        },
                        colorError: {
                            color: e.palette.error.main
                        },
                        infoIcon: {
                            color: e.palette.text.hint
                        },
                        loadingSpinner: {
                            color: "#BDBDBD",
                            lineHeight: "130%"
                        },
                        textMonospace: {
                            fontFamily: "DM Mono"
                        },
                        divider: {
                            width: "15px",
                            backgroundColor: "#8C8D8D",
                            height: "1.5px",
                            position: "relative",
                            top: "6px"
                        },
                        shimmer: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px",
                            height: "500px"
                        }
                    })
                }));
            n.Z = a
        },
        51112: function (e, n, t) {
            "use strict";
            t.d(n, {
                J: function () {
                    return r
                }
            });
            var r, i = t(79692),
                a = t(46293),
                o = t(90436),
                c = (t(96577), t(2784), t(33419)),
                s = t(709),
                l = t(31257),
                u = t(52322),
                d = (0, i.Z)((function (e) {
                    return (0, a.Z)({
                        container: {
                            textAlign: "center",
                            marginBottom: e.spacing(4)
                        },
                        etherscan: {
                            color: e.palette.primary.main,
                            marginTop: e.spacing(1)
                        },
                        thirdHeading: {
                            marginTop: e.spacing(3),
                            paddingLeft: e.spacing(1),
                            paddingRight: e.spacing(1)
                        },
                        confMsg: {
                            marginTop: e.spacing(1)
                        },
                        uniswapLink: {
                            marginTop: e.spacing(6),
                            marginBottom: e.spacing(6),
                            display: "flex",
                            alignItems: "center"
                        },
                        uniLP: {
                            color: "#FF007A",
                            marginLeft: e.spacing(3)
                        },
                        infoIcon: {
                            fontSize: "1rem",
                            marginLeft: e.spacing(.5),
                            marginTop: "2px"
                        }
                    })
                }));
            (0, i.Z)((function (e) {
                return (0, a.Z)({
                    graphic: {
                        marginTop: e.spacing(4)
                    },
                    img: {
                        borderRadius: e.spacing(2)
                    }
                })
            }));
            ! function (e) {
                e[e.TRADE = 0] = "TRADE", e[e.CRAB = 1] = "CRAB", e[e.BULL = 2] = "BULL"
            }(r || (r = {}));
            n.Z = function (e) {
                var n = e.confirmationMessage,
                    t = e.txnHash,
                    r = (e.confirmType, d()),
                    i = (0, c.Dv)(l.vH);
                return (0, u.jsx)("div", {
                    className: r.container,
                    children: (0, u.jsxs)("div", {
                        children: [(0, u.jsxs)(o.Z, {
                            variant: "body1",
                            className: r.confMsg,
                            id: "conf-msg",
                            children: [" ", n, " "]
                        }), (0, u.jsxs)("a", {
                            className: r.etherscan,
                            href: "".concat(s.E6[i]).concat(t),
                            target: "_blank",
                            rel: "noreferrer",
                            children: [" ", "View on Etherscan", " "]
                        })]
                    })
                })
            }
        },
        71169: function (e, n, t) {
            "use strict";
            t.d(n, {
                u: function () {
                    return b
                }
            });
            var r = t(8529),
                i = t(79692),
                a = t(46293),
                o = t(61837),
                c = t(24015),
                s = t(50581),
                l = t(90436),
                u = t(8629),
                d = t(38724),
                p = t(79249),
                f = t(47603),
                x = t(6391),
                h = t.n(x),
                g = t(2784),
                m = t(52322),
                v = (0, i.Z)((function (e) {
                    return (0, a.Z)({
                        dialogTitle: {
                            background: e.palette.background.default,
                            paddingTop: "0px",
                            paddingBottom: "0px",
                            "&>*": {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }
                        },
                        dialogContent: {
                            padding: "0 20px",
                            background: e.palette.background.default
                        },
                        uniswapHeaderDiv: {
                            display: "flex",
                            justifyContent: "space-between",
                            paddingRight: "20px",
                            paddingLeft: "5px"
                        },
                        uniOpenBtn: {
                            display: "flex",
                            alignItems: "center",
                            color: e.palette.primary.main
                        },
                        settingsButton: {
                            color: e.palette.text.secondary
                        },
                        slippageInput: {
                            width: 300,
                            marginBottom: e.spacing(4)
                        }
                    })
                })),
                b = function (e) {
                    var n = e.setSlippage,
                        t = e.slippage,
                        i = v(),
                        a = g.useState(t.toString()),
                        x = (0, r.Z)(a, 2),
                        b = x[0],
                        w = x[1],
                        Z = g.useState(!1),
                        y = (0, r.Z)(Z, 2),
                        j = y[0],
                        k = y[1];
                    return (0, m.jsxs)("div", {
                        children: [(0, m.jsx)(o.Z, {
                            onClick: function () {
                                k(!0)
                            },
                            className: i.settingsButton,
                            size: "small",
                            children: (0, m.jsx)(f.Z, {})
                        }), (0, m.jsxs)(u.Z, {
                            PaperProps: {
                                style: {
                                    borderRadius: 20
                                }
                            },
                            BackdropProps: {
                                style: {
                                    backdropFilter: "blur(5px)"
                                }
                            },
                            maxWidth: "lg",
                            open: j,
                            onClose: function () {
                                k(!1), n(new(h())(b))
                            },
                            "aria-labelledby": "alert-dialog-title",
                            "aria-describedby": "alert-dialog-description",
                            disableScrollLock: !0,
                            children: [(0, m.jsx)(p.Z, {
                                className: i.dialogTitle,
                                id: "alert-dialog-title",
                                children: (0, m.jsx)("p", {
                                    children: "Slippage Tolerance"
                                })
                            }), (0, m.jsx)(d.Z, {
                                className: i.dialogContent,
                                children: (0, m.jsx)(c.Z, {
                                    size: "small",
                                    value: b,
                                    type: "number",
                                    className: i.slippageInput,
                                    margin: "dense",
                                    onChange: function (e) {
                                        return w(e.target.value)
                                    },
                                    id: "filled-basic",
                                    label: "Slippage Tolerance",
                                    variant: "outlined",
                                    error: Number(b) < .05 || Number(b) > 1,
                                    helperText: Number(b) < .05 ? "Your transaction may fail" : Number(b) > 1 ? "Your transaction may be frontrun" : null,
                                    InputProps: {
                                        endAdornment: (0, m.jsx)(s.Z, {
                                            position: "end",
                                            children: (0, m.jsx)(l.Z, {
                                                variant: "caption",
                                                children: "%"
                                            })
                                        })
                                    },
                                    inputProps: {
                                        min: "0"
                                    }
                                })
                            })]
                        })]
                    })
                }
        },
        60600: function (e, n, t) {
            "use strict";
            t.d(n, {
                L: function () {
                    return g
                }
            });
            var r = t(20406),
                i = t(28526),
                a = t.n(i),
                o = t(6391),
                c = t.n(o),
                s = t(2784),
                l = t(33419),
                u = t(11744),
                d = t(68619),
                p = t(48125),
                f = t(31257),
                x = t(91023),
                h = t(80780);

            function g(e, n, t) {
                var i = (0, p.B0)(),
                    o = (0, l.Dv)(f.wX),
                    g = (0, l.Dv)(f.iu),
                    m = (0, s.useState)(new(c())(0)),
                    v = m[0],
                    b = m[1],
                    w = (0, s.useState)(!0),
                    Z = w[0],
                    y = w[1],
                    j = (0, x.Z)(function () {
                        var s = (0, r.Z)(a().mark((function s(l) {
                            var p, f, x;
                            return a().wrap((function (s) {
                                for (;;) switch (s.prev = s.next) {
                                    case 0:
                                        if (o && g) {
                                            s.next = 2;
                                            break
                                        }
                                        return s.abrupt("return");
                                    case 2:
                                        if (p = new o.eth.Contract(u, e), f = "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", "" !== n) {
                                            s.next = 6;
                                            break
                                        }
                                        throw new Error("Unkown Spender");
                                    case 6:
                                        return s.next = 8, i(p.methods.approve(n, f).send({
                                            from: g
                                        }), (0, r.Z)(a().mark((function e() {
                                            return a().wrap((function (e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        l();
                                                    case 1:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        }))));
                                    case 8:
                                        return s.next = 10, p.methods.allowance(g, n).call();
                                    case 10:
                                        x = s.sent, b((0, d.nw)(new(c())(x.toString()), t || 18));
                                    case 12:
                                    case "end":
                                        return s.stop()
                                }
                            }), s)
                        })));
                        return function (e) {
                            return s.apply(this, arguments)
                        }
                    }(), [o, e, g, n, i, t]);
                return (0, h.Z)((function () {
                    g && o && new o.eth.Contract(u, e).methods.allowance(g, n).call().then((function (e) {
                        b((0, d.nw)(new(c())(e.toString()), t || 18)), y(!1)
                    })).catch((function () {
                        y(!1)
                    }))
                }), [o, n, e, g, t]), {
                    allowance: v,
                    isLoadingAllowance: Z,
                    approve: j
                }
            }
        },
        96532: function (e, n, t) {
            "use strict";
            var r = t(2784);
            n.Z = function (e) {
                var n = (0, r.useRef)(!1),
                    t = (0, r.useCallback)((function () {
                        if (!n.current) {
                            for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                            null === e || void 0 === e || e.apply(void 0, r), n.current = !0
                        }
                    }), [e]);
                return [t, function () {
                    return n.current = !1
                }]
            }
        },
        9462: function (e, n, t) {
            "use strict";
            var r = t(20406),
                i = t(28526),
                a = t.n(i),
                o = t(2784),
                c = t(41436),
                s = t(709);
            n.Z = function () {
                var e = (0, c.Z)().track,
                    n = (0, o.useCallback)(function () {
                        var n = (0, r.Z)(a().mark((function n(t, r) {
                            return a().wrap((function (n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return e("".concat(r, "_CLICK")), n.prev = 1, n.next = 4, t();
                                    case 4:
                                        e("".concat(r, "_SUCCESS")), n.next = 12;
                                        break;
                                    case 7:
                                        n.prev = 7, n.t0 = n.catch(1), (null === n.t0 || void 0 === n.t0 ? void 0 : n.t0.code) === s.dG && e("".concat(r, "_REVERT")), e("".concat(r, "_FAILED"), {
                                            code: null === n.t0 || void 0 === n.t0 ? void 0 : n.t0.code
                                        }), console.log(n.t0);
                                    case 12:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [1, 7]
                            ])
                        })));
                        return function (e, t) {
                            return n.apply(this, arguments)
                        }
                    }(), [e]);
                return n
            }
        },
        25534: function (e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/strategies/bull", function () {
                return t(60230)
            }])
        },
        87438: function (e, n, t) {
            "use strict";
            t.d(n, {
                Z: function () {
                    return i
                }
            });
            var r = t(2784);

            function i() {
                var e = (0, r.useRef)(!1),
                    n = (0, r.useCallback)((function () {
                        return e.current
                    }), []);
                return (0, r.useEffect)((function () {
                    return e.current = !0,
                        function () {
                            e.current = !1
                        }
                }), []), n
            }
        }
    },
    function (e) {
        e.O(0, [5351, 1057, 834, 1839, 925, 4603, 9774, 2888, 179], (function () {
            return n = 25534, e(e.s = n);
            var n
        }));
        var n = e.O();
        _N_E = n
    }
]);
//# sourceMappingURL=bull-17bf6af1ee4dc2d5.js.map