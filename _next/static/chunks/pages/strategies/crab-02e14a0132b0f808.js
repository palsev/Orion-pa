(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9691], {
        12509: function (e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function () {
                    return Ht
                }
            });
            var r, a, i = n(95235),
                o = n(2784),
                s = n(79692),
                l = n(46293),
                c = n(55351),
                u = n(67020),
                d = n(33419),
                p = n(69955),
                f = n(20406),
                x = n(8529),
                m = n(28526),
                h = n.n(m),
                g = n(90436),
                v = n(98983),
                b = n(4614),
                j = n(6391),
                y = n.n(j),
                w = n(94225),
                Z = n(99144),
                D = n(52001),
                C = n(71169),
                S = n(37175),
                T = n(43872),
                k = n(27203),
                N = n(31257),
                I = n(48125),
                P = n(21699),
                E = n(70055),
                A = n(80208),
                R = n(29150),
                W = n(42277),
                _ = n(52992),
                G = n(53818),
                O = n(47862),
                H = n(60600),
                U = function (e) {
                    var t = (0, o.useState)(e),
                        n = t[0],
                        r = t[1],
                        a = (0, o.useCallback)((function () {
                            return r(e)
                        }), [e]);
                    return [n, r, a]
                },
                F = n(709),
                M = n(73691),
                B = n(68619),
                z = n(58831),
                L = {
                    src: "/_next/static/media/usdc-logo.74c6aa75.svg",
                    height: 2e3,
                    width: 2e3
                },
                V = n(82726),
                K = n(27685),
                q = (0, s.Z)((function (e) {
                    return (0, l.Z)({
                        link: {
                            color: e.palette.primary.main
                        },
                        tradeContainer: {
                            display: "flex",
                            flexDirection: "column",
                            marginTop: e.spacing(3)
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
                        noticeGray: {
                            marginTop: e.spacing(2.5),
                            padding: e.spacing(2.5),
                            border: "1px solid ".concat(e.palette.background.stone),
                            borderRadius: e.spacing(1),
                            display: "flex",
                            background: e.palette.background.lightStone,
                            alignItems: "center"
                        },
                        infoIconGray: {
                            marginRight: e.spacing(2),
                            color: e.palette.text.hint
                        },
                        tokenSelectBox: {
                            display: "flex",
                            alignItems: "center",
                            gridGap: e.spacing(.5)
                        },
                        tokenChoice: {
                            fontWeight: 500,
                            fontSize: "14px"
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
                        ctaSection: {
                            marginTop: e.spacing(3),
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px"
                        },
                        queueNotice: {
                            background: e.palette.background.stone,
                            borderRadius: e.spacing(1.5),
                            padding: e.spacing(2),
                            textAlign: "center"
                        },
                        btnDefault: {
                            color: "rgba(255, 255, 255, 0.4)",
                            border: "2px solid transparent"
                        },
                        btnActive: {
                            color: e.palette.primary.main,
                            border: "2px solid ".concat(e.palette.primary.main)
                        },
                        btnDanger: {
                            color: e.palette.error.main,
                            borderColor: e.palette.error.main,
                            backgroundColor: "transparent",
                            "&:hover": {
                                color: e.palette.error.main,
                                borderColor: e.palette.error.main,
                                backgroundColor: "transparent"
                            }
                        },
                        btnWarning: {
                            color: e.palette.warning.main,
                            borderColor: e.palette.warning.main,
                            backgroundColor: "transparent",
                            "&:hover": {
                                color: e.palette.warning.main,
                                borderColor: e.palette.warning.main,
                                backgroundColor: "transparent"
                            }
                        },
                        withdrawStepsContainer: {
                            marginBottom: e.spacing(2)
                        }
                    })
                }));
            ! function (e) {
                e.Deposit = "Deposit", e.Withdraw = "Withdraw"
            }(r || (r = {})),
            function (e) {
                e.Instant = "Instant", e.Queued = "Queued"
            }(a || (a = {}));
            var Y, Q = n(73381),
                X = n(41436),
                J = n(96532),
                $ = n(9462),
                ee = n(52322);
            ! function (e) {
                e.APPROVE = "Approve USDC", e.DEPOSIT = "Deposit"
            }(Y || (Y = {}));
            var te, ne = Number("0.3") || 1,
                re = function (e) {
                    var t, n = e.onTxnConfirm,
                        i = q(),
                        s = (0, o.useState)("0"),
                        l = s[0],
                        c = s[1],
                        p = (0, w.Nr)(l, 500),
                        m = (0, x.Z)(p, 1)[0],
                        j = (0, o.useRef)(),
                        te = (0, o.useMemo)((function () {
                            return new(y())(m)
                        }), [m]),
                        re = (0, o.useState)(!1),
                        ae = re[0],
                        ie = re[1],
                        oe = U("0"),
                        se = (0, x.Z)(oe, 3),
                        le = se[0],
                        ce = se[1],
                        ue = se[2],
                        de = U(new(y())(0)),
                        pe = (0, x.Z)(de, 3),
                        fe = pe[0],
                        xe = pe[1],
                        me = pe[2],
                        he = U("0"),
                        ge = (0, x.Z)(he, 3),
                        ve = ge[0],
                        be = ge[1],
                        je = ge[2],
                        ye = U(new(y())(0)),
                        we = (0, x.Z)(ye, 3),
                        Ze = we[0],
                        De = we[1],
                        Ce = we[2],
                        Se = U(new(y())(0)),
                        Te = (0, x.Z)(Se, 3),
                        ke = Te[0],
                        Ne = Te[1],
                        Ie = Te[2],
                        Pe = (0, o.useState)(new(y())(0)),
                        Ee = Pe[0],
                        Ae = Pe[1],
                        Re = (0, o.useState)(!1),
                        We = Re[0],
                        _e = Re[1],
                        Ge = (0, o.useState)(!1),
                        Oe = Ge[0],
                        He = Ge[1],
                        Ue = (0, o.useState)(Y.DEPOSIT),
                        Fe = Ue[0],
                        Me = Ue[1],
                        Be = (0, o.useState)(!1),
                        ze = Be[0],
                        Le = Be[1],
                        Ve = (0, d.Dv)(P.G1),
                        Ke = (0, d.Dv)(N.QS),
                        qe = (0, d.KO)(P.ib),
                        Ye = (0, x.Z)(qe, 2),
                        Qe = Ye[0],
                        Xe = Ye[1],
                        Je = (0, d.Dv)(N.vH),
                        $e = (0, d.Dv)(N.dh),
                        et = (0, I.rs)(),
                        tt = (0, d.Dv)(W.pK),
                        nt = tt.usdc,
                        rt = tt.weth,
                        at = tt.crabHelper,
                        it = tt.crabNetting,
                        ot = (0, G.m)(nt, 15, F.p8),
                        st = ot.value,
                        lt = ot.refetch,
                        ct = (0, O.Z)().getExactIn,
                        ut = (0, E.mi)(),
                        dt = (0, E.uj)(),
                        pt = (0, E.K3)(dt),
                        ft = (0, E.QQ)(),
                        xt = (0, d.KO)(P.H0),
                        mt = (0, x.Z)(xt, 2),
                        ht = mt[0],
                        gt = mt[1],
                        vt = (0, d.Dv)(R.xS),
                        bt = (0, B.nw)(vt, 18).sqrt(),
                        jt = (0, I.hS)().resetTransactionData,
                        yt = (0, d.Dv)(A.kV),
                        wt = (0, M.L)(),
                        Zt = wt.isRestricted,
                        Dt = wt.isWithdrawAllowed,
                        Ct = (0, H.L)(nt, at, F.p8),
                        St = Ct.allowance,
                        Tt = Ct.approve,
                        kt = (0, H.L)(nt, it, F.p8),
                        Nt = kt.allowance,
                        It = kt.approve,
                        Pt = (0, d.Dv)(P.OD),
                        Et = (0, d.Dv)(P.H7),
                        At = (0, d.Dv)(R.Qv),
                        Rt = (0, d.Dv)(R.al),
                        Wt = (0, d.Dv)(R.p9),
                        _t = (0, X.Z)().track,
                        Gt = (0, o.useCallback)((function (e) {
                            return _t(Q.dg.DEPOSIT_CRAB_AMOUNT_ENTERED, {
                                amount: e.toNumber()
                            })
                        }), [_t]),
                        Ot = (0, J.Z)(Gt),
                        Ht = (0, x.Z)(Ot, 2),
                        Ut = Ht[0],
                        Ft = Ht[1],
                        Mt = (0, $.Z)(),
                        Bt = (0, o.useCallback)((function (e) {
                            c(e);
                            var t = new(y())(e);
                            t.isGreaterThan(0) && Ut(t)
                        }), [c, Ut]),
                        zt = null !== (t = null === Et || void 0 === Et ? void 0 : Et.collateralAmount) && void 0 !== t ? t : F.HW,
                        Lt = (0, _.Z)((function () {
                            if (Oe) return !1;
                            var e = ke.div(Ze).times(1.003),
                                t = new(y())(F.dH),
                                n = new(y())(F.Ny).div(F.oP),
                                r = Math.log(t.times(e).div(Rt.times(bt)).toNumber()),
                                a = new(y())(r).div(n).sqrt();
                            return r < 0 || a.minus(At).abs().gt(y().max(new(y())(At).times(F.G2), F.HU))
                        }), [At, ke, Ze, Oe, bt, Rt]),
                        Vt = (0, _.Z)((function () {
                            var e = new(y())(-F.G2),
                                t = new(y())(-F.HU),
                                n = y().max(new(y())(Wt / 100).times(new(y())(1).plus(e)), new(y())(Wt / 100).plus(t));
                            return !!new(y())(At).lt(n)
                        }), [Wt, At]),
                        Kt = (0, _.Z)((function () {
                            var e;
                            return Ke && (Ee.plus(zt).gte(Pt) ? e = "Amount greater than strategy cap" : Ee.plus(zt).plus(fe).gte(Pt) ? e = "Amount greater than strategy cap since it flash borrows ".concat(fe.toFixed(2), " ETH. Input a smaller amount") : st.lt(te) && (e = "Insufficient USDC balance")), e
                        }), [Ke, Ee, te, zt, Pt, fe, st]);
                    (0, o.useEffect)((function () {
                        if (yt) {
                            if (te.isZero()) return ue(), je(), me(), Ie(), void Ce();
                            var e = (0, B.wt)(Je);
                            ct(nt, rt, (0, B.KU)(te, F.p8), e, Qe).then((function (e) {
                                Ae((0, B.nw)(e.amountOut, F.RN)), dt((0, B.nw)(e.minAmountOut, F.RN), Qe).then((function (e) {
                                    xe(e.ethBorrow), Ne(e.amountOut), De(e.initialWSqueethDebt);
                                    var t = e.priceImpact;
                                    e.poolFee && (t = (Number(e.priceImpact) - Number(e.poolFee)).toFixed(2)), ce(t), be(e.poolFee)
                                }))
                            }))
                        }
                    }), [yt, te, Qe, Je, nt, rt]);
                    var qt = (0, o.useCallback)((function (e) {
                            e.forEach((function (e) {
                                return _t(e)
                            }))
                        }), [_t]),
                        Yt = (0, o.useCallback)((function (e) {
                            if (j.current) {
                                var t = j.current;
                                t.queuedTransaction ? gt(ht.plus((0, B.KU)(t.amount, F.p8))) : ut(), n({
                                    status: !0,
                                    amount: t.amount,
                                    tradeType: r.Deposit,
                                    transactionType: t.queuedTransaction ? a.Queued : a.Instant,
                                    token: t.token,
                                    id: e
                                }), t.analytics && qt(t.analytics), Bt("0"), Ft(), lt(), j.current = void 0
                            }
                        }), [ht, gt, ut, n, Bt, lt, qt, Ft]),
                        Qt = function () {
                            var e = (0, f.Z)(h().mark((function e() {
                                var t;
                                return h().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (ie(!0), e.prev = 1, Fe !== Y.APPROVE) {
                                                e.next = 12;
                                                break
                                            }
                                            if (!Oe) {
                                                e.next = 8;
                                                break
                                            }
                                            return e.next = 6, Mt((0, f.Z)(h().mark((function e() {
                                                return h().wrap((function (e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, It((function () {
                                                                return jt()
                                                            }));
                                                        case 2:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            }))), Q.dg.APPROVE_DEPOSIT_STN_CRAB_USDC);
                                        case 6:
                                            e.next = 10;
                                            break;
                                        case 8:
                                            return e.next = 10, Mt((0, f.Z)(h().mark((function e() {
                                                return h().wrap((function (e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, Tt((function () {
                                                                return jt()
                                                            }));
                                                        case 2:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            }))), Q.dg.APPROVE_DEPOSIT_CRAB_USDC);
                                        case 10:
                                            e.next = 21;
                                            break;
                                        case 12:
                                            if (t = We && !Oe, j.current = {
                                                    amount: te,
                                                    queuedTransaction: Oe,
                                                    token: "USDC",
                                                    analytics: t ? [Q.dg.USER_FORCE_INSTANT_DEP_CRAB] : void 0
                                                }, !Oe) {
                                                e.next = 19;
                                                break
                                            }
                                            return e.next = 17, ft(te, Yt);
                                        case 17:
                                            e.next = 21;
                                            break;
                                        case 19:
                                            return e.next = 21, pt(te, Qe, Yt);
                                        case 21:
                                            e.next = 28;
                                            break;
                                        case 23:
                                            e.prev = 23, e.t0 = e.catch(1), console.log(e.t0), Ft(), ie(!1);
                                        case 28:
                                            ie(!1);
                                        case 29:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 23]
                                ])
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }();
                    (0, o.useEffect)((function () {
                        Oe ? Nt.lt(te) ? Me(Y.APPROVE) : Me(Y.DEPOSIT) : St.lt(te) ? Me(Y.APPROVE) : Me(Y.DEPOSIT)
                    }), [St, te, Oe, Nt]);
                    var Xt = (0, B.nw)(Ve, F.p8),
                        Jt = te.lt(Xt);
                    (0, o.useEffect)((function () {
                        if (Jt) return _e(!1), void He(!1);
                        if (Number(le) + Number(ve) > ne) {
                            if (_e(!0), ze) return;
                            He(!0)
                        } else {
                            if (_e(!1), ze) return;
                            He(!1)
                        }
                    }), [le, Jt, ve, ze]);
                    var $t = (0, d.Dv)(P.rp),
                        en = (0, d.Dv)(P.by),
                        tn = (0, _.Z)((function () {
                            if (!Oe) return Number(le);
                            var e = en.minus($t).isNegative() ? new(y())(0) : en.minus($t),
                                t = e.gt(te) ? te : e,
                                n = te.minus(t);
                            return t.times(F.zt).plus(n.times(F.jG)).div(te).toNumber()
                        }), [te, le, $t, en, Oe]),
                        nn = tn > 3 || Vt || Lt ? "outlined" : "contained",
                        rn = tn > 3 ? i.btnDanger : Vt || Lt ? i.btnWarning : "",
                        an = (0, o.useCallback)((function (e) {
                            _t(Q.dg.DEPOSIT_CRAB_CHANGE_SLIPPAGE, {
                                percent: e.toNumber()
                            }), Xe(e.toNumber())
                        }), [_t, Xe]);
                    return (0, ee.jsxs)(ee.Fragment, {
                        children: [(0, ee.jsx)(u.Z, {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gridGap: "12px",
                            children: (0, ee.jsx)(g.Z, {
                                variant: "h3",
                                className: i.subtitle,
                                children: "Strategy Deposit"
                            })
                        }), (0, ee.jsxs)(u.Z, {
                            display: "flex",
                            alignItems: "center",
                            gridGap: "12px",
                            marginTop: "16px",
                            children: [(0, ee.jsx)(D.z, {
                                disabled: Number(l) >= F.oW || !Number(l),
                                variant: "outlined",
                                size: "small",
                                onClick: function () {
                                    He(!1), Le(!0)
                                },
                                className: Oe ? i.btnDefault : i.btnActive,
                                children: "Instant"
                            }), (0, ee.jsx)(D.z, {
                                disabled: !We,
                                variant: We ? "outlined" : "contained",
                                size: "small",
                                onClick: function () {
                                    He(!0), Le(!0)
                                },
                                className: Oe ? i.btnActive : i.btnDefault,
                                children: "Standard"
                            }), (0, ee.jsx)(u.Z, {
                                className: i.infoIconGray,
                                display: "flex",
                                alignItems: "center",
                                children: (0, ee.jsx)(v.ZP, {
                                    title: "Standard reduces price impact and gas costs, getting into the strategy in 24hr on avg or Tuesday latest. Instant gets in immediately.",
                                    children: (0, ee.jsx)(K.Z, {
                                        fontSize: "medium"
                                    })
                                })
                            })]
                        }), (0, ee.jsxs)("div", {
                            className: i.tradeContainer,
                            children: [(0, ee.jsx)(T.D5, {
                                id: "crab-deposit-usdc-input",
                                value: l,
                                onInputChange: Bt,
                                balance: st,
                                logo: L,
                                symbol: "USDC",
                                usdPrice: new(y())(1),
                                onBalanceClick: function () {
                                    _t(Q.dg.DEPOSIT_CRAB_SET_AMOUNT_MAX, {
                                        amount: st.toNumber()
                                    }), Bt(st.toString())
                                },
                                error: !!Kt,
                                helperText: Kt
                            }), Vt && !Oe && (0, ee.jsxs)("div", {
                                className: i.notice,
                                children: [(0, ee.jsx)("div", {
                                    className: i.infoIcon,
                                    children: (0, ee.jsx)(v.ZP, {
                                        title: "The strategy sells orion to earn premium. Premium is currently lower than usual. You can still deposit, but you may be more likely to have negative returns.",
                                        children: (0, ee.jsx)(Z.Z, {
                                            fontSize: "medium"
                                        })
                                    })
                                }), (0, ee.jsx)(g.Z, {
                                    variant: "caption",
                                    className: i.infoText,
                                    children: "Crab premium is currently lower than usual. Consider depositing later."
                                })]
                            }), Lt && (0, ee.jsxs)("div", {
                                className: i.notice,
                                children: [(0, ee.jsx)("div", {
                                    className: i.infoIcon,
                                    children: (0, ee.jsx)(v.ZP, {
                                        title: "High price impact means that you are losing a significant amount of value due to the size of your trade. Depositing a smaller size can reduce your price impact.",
                                        children: (0, ee.jsx)(Z.Z, {
                                            fontSize: "medium"
                                        })
                                    })
                                }), (0, ee.jsx)(g.Z, {
                                    variant: "caption",
                                    className: i.infoText,
                                    children: "High price impact. Try multiple smaller transactions or standard deposit"
                                })]
                            }), (0, ee.jsx)(u.Z, {
                                marginTop: "24px",
                                children: (0, ee.jsxs)(u.Z, {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    gridGap: "12px",
                                    flexWrap: "wrap",
                                    children: [(0, ee.jsx)(k.Z, {
                                        label: "Uniswap Fee",
                                        value: Oe ? "0%" : (0, z.uf)(Number(ve)) + "%",
                                        isSmall: !0,
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        gridGap: "8px"
                                    }), (0, ee.jsxs)(u.Z, {
                                        display: "flex",
                                        alignItems: "center",
                                        gridGap: "6px",
                                        flex: "1",
                                        children: [(0, ee.jsx)(k.Z, {
                                            isSmall: !0,
                                            label: (0, ee.jsx)(k.D, {
                                                isSmall: !0,
                                                label: Oe ? "Est. Price Impact" : "Price Impact",
                                                tooltipTitle: Oe ? "Average price impact based on historical standard deposits" : void 0
                                            }),
                                            value: (0, z.uf)(tn) + "%",
                                            textColor: tn > 3 ? "error" : void 0,
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            gridGap: "8px"
                                        }), !Oe && (0, ee.jsx)(C.u, {
                                            setSlippage: an,
                                            slippage: new(y())(Qe)
                                        })]
                                    })]
                                })
                            }), (0, ee.jsxs)("div", {
                                className: i.ctaSection,
                                children: [Zt && (0, ee.jsx)(S.Z, {
                                    withdrawAllowed: Dt
                                }), (0, ee.jsx)("div", {
                                    children: Zt ? (0, ee.jsx)(D.F2, {
                                        fullWidth: !0,
                                        variant: "contained",
                                        onClick: et,
                                        disabled: !0,
                                        id: "open-long-restricted-btn",
                                        children: "Unavailable"
                                    }) : Ke ? $e ? (0, ee.jsx)(D.F2, {
                                        fullWidth: !0,
                                        id: "crab-deposit-btn",
                                        variant: nn,
                                        className: rn,
                                        onClick: Qt,
                                        disabled: ae || !!Kt,
                                        children: !ae && Oe && Fe === Y.DEPOSIT ? (0, ee.jsxs)(ee.Fragment, {
                                            children: ["Standard deposit", (0, ee.jsx)(v.ZP, {
                                                title: (0, ee.jsx)("div", {
                                                    children: "Your deposit will be submitted via auction to reduce price impact. This may take until Tuesday."
                                                }),
                                                style: {
                                                    marginLeft: "8"
                                                },
                                                children: (0, ee.jsx)(V.Z, {
                                                    fontSize: "small"
                                                })
                                            })]
                                        }) : ae || !Vt && !Lt || Fe !== Y.DEPOSIT ? ae ? (0, ee.jsx)(b.Z, {
                                            color: "primary",
                                            size: "1.5rem"
                                        }) : Fe : "Deposit anyway"
                                    }) : (0, ee.jsx)(D.F2, {
                                        fullWidth: !0,
                                        variant: "contained",
                                        onClick: function () {},
                                        disabled: !0,
                                        id: "crab-unsupported-network-btn",
                                        children: "Unsupported Network"
                                    }) : (0, ee.jsx)(D.F2, {
                                        fullWidth: !0,
                                        variant: "contained",
                                        onClick: et,
                                        disabled: !!ae,
                                        id: "crab-select-wallet-btn",
                                        children: "Connect Wallet"
                                    })
                                })]
                            })]
                        })]
                    })
                },
                ae = n(82938),
                ie = n(16566),
                oe = n(72902),
                se = n(36200),
                le = n(82375),
                ce = n(80780),
                ue = n(79779);
            ! function (e) {
                e.APPROVE = "Approve CRAB", e.WITHDRAW = "Withdraw"
            }(te || (te = {}));
            var de = Number("0.3") || 1;
            console.log(de);
            var pe = function (e) {
                    var t = e.onTxnConfirm,
                        n = q(),
                        i = (0, o.useState)("0"),
                        s = i[0],
                        l = i[1],
                        c = (0, w.Nr)(s, 500),
                        p = (0, x.Z)(c, 1)[0],
                        m = (0, o.useMemo)((function () {
                            return new(y())(p)
                        }), [p]),
                        j = (0, o.useRef)(),
                        G = (0, o.useState)(!1),
                        Y = G[0],
                        ne = G[1],
                        re = U("0"),
                        pe = (0, x.Z)(re, 3),
                        fe = pe[0],
                        xe = pe[1],
                        me = pe[2],
                        he = U("0"),
                        ge = (0, x.Z)(he, 3),
                        ve = ge[0],
                        be = ge[1],
                        je = ge[2],
                        ye = U(new(y())(0)),
                        we = (0, x.Z)(ye, 3),
                        Ze = we[0],
                        De = we[1],
                        Ce = we[2],
                        Se = U(new(y())(0)),
                        Te = (0, x.Z)(Se, 3),
                        ke = Te[0],
                        Ne = Te[1],
                        Ie = Te[2],
                        Pe = U(new(y())(0)),
                        Ee = (0, x.Z)(Pe, 3),
                        Ae = Ee[0],
                        Re = Ee[1],
                        We = Ee[2],
                        _e = (0, o.useState)(!0),
                        Ge = _e[0],
                        Oe = _e[1],
                        He = (0, o.useState)(!1),
                        Ue = He[0],
                        Fe = He[1],
                        Me = (0, o.useState)(!1),
                        Be = Me[0],
                        ze = Me[1],
                        Le = (0, o.useState)(te.WITHDRAW),
                        Ve = Le[0],
                        Ke = Le[1],
                        qe = (0, o.useState)(!1),
                        Ye = qe[0],
                        Qe = qe[1],
                        Xe = (0, o.useState)(!1),
                        Je = Xe[0],
                        $e = Xe[1],
                        et = (0, d.Dv)(P.J9),
                        tt = (0, d.Dv)(P.ir),
                        nt = (0, d.Dv)(N.QS),
                        rt = (0, d.Dv)(P.C7),
                        at = (0, d.Dv)(P.DD),
                        it = (0, d.Dv)(oe.aB),
                        ot = (0, d.KO)(P.ib),
                        st = (0, x.Z)(ot, 2),
                        lt = st[0],
                        ct = st[1],
                        ut = (0, d.Dv)(N.vH),
                        dt = (0, d.Dv)(N.dh),
                        pt = (0, d.Dv)(R.p9),
                        ft = (0, I.rs)(),
                        xt = it.gt(0) ? it : rt,
                        mt = it.gt(0),
                        ht = (0, d.Dv)(W.pK),
                        gt = ht.usdc,
                        vt = ht.weth,
                        bt = ht.crabHelper,
                        jt = ht.crabStrategy2,
                        yt = ht.crabNetting,
                        wt = (0, O.Z)().getExactIn,
                        Zt = (0, E.mi)(),
                        Dt = (0, E.q$)(),
                        Ct = (0, E.aA)(),
                        St = (0, E.jf)(),
                        Tt = (0, se.K3)(),
                        kt = (0, E.s7)(),
                        Nt = (0, E.YA)(),
                        It = (0, E.Hp)(),
                        Pt = (0, d.KO)(P.wd),
                        Et = (0, x.Z)(Pt, 2),
                        At = Et[0],
                        Rt = Et[1],
                        Wt = (0, d.Dv)(R.xS),
                        _t = (0, B.nw)(Wt, 18).sqrt(),
                        Gt = (0, I.hS)(),
                        Ot = (Gt.confirmed, Gt.resetTransactionData),
                        Ht = (0, $.Z)(),
                        Ut = (0, d.Dv)(A.kV),
                        Ft = (0, M.L)(),
                        Mt = Ft.isRestricted,
                        Bt = Ft.isWithdrawAllowed,
                        zt = ((0, d.Dv)(R.j_), (0, d.Dv)(N.iu)),
                        Lt = (0, H.L)(jt, bt),
                        Vt = Lt.allowance,
                        Kt = Lt.approve,
                        qt = (0, H.L)(jt, yt),
                        Yt = qt.allowance,
                        Qt = qt.approve,
                        Xt = (0, ie.A)(null !== zt && void 0 !== zt ? zt : "").data,
                        Jt = (0, d.Dv)(R.Qv),
                        $t = (0, d.Dv)(R.al),
                        en = (0, X.Z)().track,
                        tn = (0, o.useCallback)((function (e) {
                            return en(Q.dg.WITHDRAW_CRAB_AMOUNT_ENTERED, {
                                amount: e.toNumber()
                            })
                        }), [en]),
                        nn = (0, J.Z)(tn),
                        rn = (0, x.Z)(nn, 2),
                        an = rn[0],
                        on = rn[1],
                        sn = (0, o.useCallback)((function (e) {
                            l(e);
                            var t = new(y())(e);
                            t.isGreaterThan(0) && an(t)
                        }), [l, an]),
                        ln = (0, o.useCallback)((function (e) {
                            e.forEach((function (e) {
                                return en(e)
                            }))
                        }), [en]);
                    (0, ce.Z)((function () {
                        var e, t = new Date("2022-12-28T00:00:00.000Z").getTime() / 1e3,
                            n = null !== (e = null === Xt || void 0 === Xt ? void 0 : Xt.some((function (e) {
                                return (e.type === ue.nf.FLASH_DEPOSIT || e.type === ue.nf.DEPOSIT || e.type === ue.nf.DEPOSIT_V1 || e.type === ue.J0.DEPOSIT || e.type === ue.nf.OTC_DEPOSIT) && e.timestamp < t
                            }))) && void 0 !== e && e;
                        Qe(n)
                    }), [Xt]);
                    var cn = (0, _.Z)((function () {
                            if (Be) return !1;
                            var e = Ze.div(Ae).times(1 - F.E4 / 1e6),
                                t = new(y())(F.dH),
                                n = new(y())(F.Ny).div(F.oP);
                            return new(y())(Math.log(t.times(e).div($t.times(_t)).toNumber())).div(n).sqrt().minus(Jt).abs().gt(y().max(new(y())(Jt).times(F.G2), F.HU))
                        }), [Jt, Ze, Ae, Be, _t, $t]),
                        un = (0, _.Z)((function () {
                            var e = new(y())(F.G2),
                                t = new(y())(F.HU),
                                n = y().max(new(y())(pt / 100).times(new(y())(1).plus(e)), new(y())(pt / 100).plus(t));
                            return !!new(y())(Jt).gt(n)
                        }), [Jt, pt]),
                        dn = (0, _.Z)((function () {
                            var e;
                            return nt && (!Ge && m.gt(xt) || Ge && m.gt(at)) && (e = "Withdraw amount greater than strategy balance"), e
                        }), [nt, m, xt, at, Ge]),
                        pn = (0, _.Z)((function () {
                            return Ge ? at.isZero() ? F.HW : m.div(at).times(xt) : m
                        }), [m, Ge, at, xt]),
                        fn = (0, _.Z)((function () {
                            return It(pn || F.HW)
                        }), [pn, It]);
                    (0, o.useEffect)((function () {
                        if (Ut) {
                            if (fn.isZero()) return me(), je(), Ce(), We(), void Ie();
                            if (Ge) {
                                var e = (0, B.wt)(ut);
                                St(fn, lt).then(function () {
                                    var t = (0, f.Z)(h().mark((function t(n) {
                                        var r, a, i;
                                        return h().wrap((function (t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.next = 2, wt(vt, gt, (0, B.KU)(n.ethToGet, 18), e, lt);
                                                case 2:
                                                    r = t.sent, a = r.minAmountOut, Ne((0, B.nw)(a, F.p8)), i = n.priceImpact, n.poolFee && (i = (Number(n.priceImpact) - Number(n.poolFee)).toFixed(2)), be(n.poolFee), xe(i), De(n.amountIn), Re(n.squeethDebt);
                                                case 11:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    })));
                                    return function (e) {
                                        return t.apply(this, arguments)
                                    }
                                }())
                            } else St(fn, lt).then((function (e) {
                                De(e.amountIn), Re(e.squeethDebt);
                                var t = e.priceImpact;
                                e.poolFee && (t = (Number(e.priceImpact) - Number(e.poolFee)).toFixed(2)), xe(t), be(e.poolFee)
                            }))
                        }
                    }), [Ut, fn.toString(), lt, ut, Ge, gt, vt]);
                    var xn = (0, o.useCallback)((function (e) {
                            if (j.current) {
                                var n = j.current;
                                n.queuedTransaction && Rt(At.plus((0, B.KU)(n.amount, F.n5))), t({
                                    status: !0,
                                    amount: n.amount,
                                    tradeType: r.Withdraw,
                                    transactionType: n.queuedTransaction ? a.Queued : a.Instant,
                                    token: n.token,
                                    id: e
                                }), n.analytics && ln(n.analytics), sn("0"), on(), j.current = void 0
                            }
                        }), [Rt, At, t, sn, ln, on]),
                        mn = function () {
                            var e = (0, f.Z)(h().mark((function e() {
                                var t;
                                return h().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (ne(!0), e.prev = 1, !mt) {
                                                e.next = 7;
                                                break
                                            }
                                            return e.next = 5, Ct(m, lt);
                                        case 5:
                                            e.next = 25;
                                            break;
                                        case 7:
                                            if (Ve !== te.APPROVE) {
                                                e.next = 11;
                                                break
                                            }
                                            Be ? Ht((0, f.Z)(h().mark((function e() {
                                                return h().wrap((function (e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, Qt((function () {
                                                                return Ot()
                                                            }));
                                                        case 2:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            }))), Q.dg.APPROVE_WITHDRAW_STN_CRAB_USDC) : Ht((0, f.Z)(h().mark((function e() {
                                                return h().wrap((function (e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, Kt((function () {
                                                                return Ot()
                                                            }));
                                                        case 2:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            }))), Q.dg.APPROVE_WITHDRAW_CRAB_USDC), e.next = 25;
                                            break;
                                        case 11:
                                            if (t = Ue && !Be, j.current = {
                                                    amount: m,
                                                    token: Ge ? "USDC" : "ETH",
                                                    queuedTransaction: Be,
                                                    analytics: t ? [Q.dg.USER_FORCE_INSTANT_WIT_CRAB] : void 0
                                                }, !Be) {
                                                e.next = 18;
                                                break
                                            }
                                            return e.next = 16, Nt(fn, xn);
                                        case 16:
                                            e.next = 25;
                                            break;
                                        case 18:
                                            if (!Ge) {
                                                e.next = 23;
                                                break
                                            }
                                            return e.next = 21, kt(fn, lt, xn);
                                        case 21:
                                            e.next = 25;
                                            break;
                                        case 23:
                                            return e.next = 25, Dt(m, lt, xn);
                                        case 25:
                                            Tt(), Zt(), e.next = 33;
                                            break;
                                        case 29:
                                            e.prev = 29, e.t0 = e.catch(1), on(), console.log(e.t0);
                                        case 33:
                                            ne(!1);
                                        case 34:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 29]
                                ])
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }();
                    (0, o.useEffect)((function () {
                        Oe(!mt)
                    }), [mt]);
                    var hn = (0, o.useCallback)((function (e) {
                            Oe(e.target.checked), sn("0")
                        }), [sn]),
                        gn = (0, o.useMemo)((function () {
                            return Be || Ge ? "USDC" : "ETH"
                        }), [Ge, Be]);
                    (0, o.useEffect)((function () {
                        Be ? Yt.lt(fn) ? Ke(te.APPROVE) : Ke(te.WITHDRAW) : Ge && Vt.lt(fn) ? Ke(te.APPROVE) : Ke(te.WITHDRAW)
                    }), [Ge, Vt, fn, Yt, Be]);
                    var vn = (0, B.nw)(tt, F.n5),
                        bn = fn.lt(vn);
                    (0, o.useEffect)((function () {
                        if (!Ge || et || bn) return Fe(!1), void ze(!1);
                        if (Number(fe) + Number(ve) > de) {
                            if (Fe(!0), Je) return;
                            ze(!0)
                        } else {
                            if (Fe(!1), Je) return;
                            ze(!1)
                        }
                    }), [fe, Ge, et, bn, ve, Je]);
                    var jn = (0, d.Dv)(P.rp),
                        yn = (0, d.Dv)(P.by),
                        wn = (0, _.Z)((function () {
                            if (!Be) return Number(fe);
                            var e = jn.minus(yn).isNegative() ? new(y())(0) : jn.minus(yn),
                                t = e.gt(m) ? m : e,
                                n = m.minus(t);
                            return t.times(F.zt).plus(n.times(F.jG)).div(m).toNumber()
                        }), [jn, yn, Be, m, fe]),
                        Zn = wn > 3 || un || cn ? "outlined" : "contained",
                        Dn = wn > 3 ? n.btnDanger : un || cn ? n.btnWarning : "",
                        Cn = (0, o.useCallback)((function (e) {
                            en(Q.dg.WITHDRAW_CRAB_CHANGE_SLIPPAGE, {
                                percent: e.toNumber()
                            }), ct(e.toNumber())
                        }), [en, ct]);
                    return (0, ee.jsxs)(ee.Fragment, {
                        children: [(0, ee.jsxs)(u.Z, {
                            marginTop: "32px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gridGap: "12px",
                            children: [(0, ee.jsx)(g.Z, {
                                variant: "h3",
                                className: n.subtitle,
                                children: "Strategy Withdraw"
                            }), Ye && (0, ee.jsxs)(u.Z, {
                                className: n.tokenSelectBox,
                                children: [(0, ee.jsx)(g.Z, {
                                    variant: "caption",
                                    className: n.tokenChoice,
                                    children: "ETH"
                                }), (0, ee.jsx)(ae.Z, {
                                    checked: Ge,
                                    onChange: hn,
                                    color: "primary",
                                    name: "useUSDC",
                                    size: "small",
                                    disabled: mt
                                }), (0, ee.jsx)(g.Z, {
                                    variant: "caption",
                                    className: n.tokenChoice,
                                    children: "USDC"
                                })]
                            })]
                        }), (0, ee.jsxs)(u.Z, {
                            display: "flex",
                            alignItems: "center",
                            gridGap: "12px",
                            marginTop: "16px",
                            children: [(0, ee.jsx)(D.z, {
                                disabled: Number(s) >= F.oW || !Number(s),
                                variant: "outlined",
                                size: "small",
                                onClick: function () {
                                    ze(!1), $e(!0)
                                },
                                className: Be ? n.btnDefault : n.btnActive,
                                children: "Instant"
                            }), (0, ee.jsx)(D.z, {
                                disabled: !Ue,
                                variant: Ue ? "outlined" : "contained",
                                size: "small",
                                onClick: function () {
                                    ze(!0), $e(!0)
                                },
                                className: Be ? n.btnActive : n.btnDefault,
                                children: "Standard"
                            }), (0, ee.jsx)(u.Z, {
                                className: n.infoIconGray,
                                display: "flex",
                                alignItems: "center",
                                children: (0, ee.jsx)(v.ZP, {
                                    title: "Standard reduces price impact and gas costs, exiting the strategy in 24hr on avg or Tuesday latest. Instant exits immediately.",
                                    children: (0, ee.jsx)(K.Z, {
                                        fontSize: "medium"
                                    })
                                })
                            })]
                        }), (0, ee.jsxs)("div", {
                            className: n.tradeContainer,
                            children: [mt && rt.gt(0) ? (0, ee.jsxs)("div", {
                                className: n.withdrawStepsContainer,
                                children: [(0, ee.jsxs)(g.Z, {
                                    variant: "caption",
                                    component: "div",
                                    children: ["Step 1: Withdraw migrated crab position, ", (0, ee.jsx)("b", {
                                        children: it.toFixed(4)
                                    }), " ETH"]
                                }), (0, ee.jsxs)(g.Z, {
                                    variant: "caption",
                                    children: ["Step 2: Withdraw crab v2 position, ", rt.toFixed(4), " ETH"]
                                })]
                            }) : mt ? (0, ee.jsx)("div", {
                                className: n.withdrawStepsContainer,
                                children: (0, ee.jsxs)(g.Z, {
                                    variant: "caption",
                                    component: "div",
                                    children: ["Withdraw migrated crab position, ", (0, ee.jsx)("b", {
                                        children: it.toFixed(4)
                                    }), " ETH"]
                                })
                            }) : null, (0, ee.jsx)(T.D5, {
                                id: "crab-withdraw-input",
                                value: s,
                                onInputChange: sn,
                                balance: Ge ? at : xt,
                                logo: Ge ? L : le.Z,
                                symbol: gn,
                                usdPrice: Ge ? new(y())(1) : _t,
                                onBalanceClick: function () {
                                    en(Q.dg.WITHDRAW_CRAB_SET_AMOUNT_MAX, {
                                        amount: Ge ? at.toNumber() : xt.toNumber(),
                                        usdc: Ge
                                    }), sn(Ge ? at.toString() : xt.toString())
                                },
                                error: !!dn,
                                helperText: dn
                            }), un && !Be ? (0, ee.jsxs)("div", {
                                className: n.notice,
                                children: [(0, ee.jsx)("div", {
                                    className: n.infoIcon,
                                    children: (0, ee.jsx)(v.ZP, {
                                        title: "Orion is currently more expensive than usual. The strategy buys back orion to withdraw. You can still withdraw, but you will pay more.",
                                        children: (0, ee.jsx)(Z.Z, {
                                            fontSize: "medium"
                                        })
                                    })
                                }), (0, ee.jsx)(g.Z, {
                                    variant: "caption",
                                    className: n.infoText,
                                    children: "It is currently costly to withdraw. Consider withdrawing later."
                                })]
                            }) : null, cn ? (0, ee.jsxs)("div", {
                                className: n.notice,
                                children: [(0, ee.jsx)("div", {
                                    className: n.infoIcon,
                                    children: (0, ee.jsx)(v.ZP, {
                                        title: "High price impact means that you are losing a significant amount of value due to the size of your trade. Withdrawing a smaller size can reduce your price impact.",
                                        children: (0, ee.jsx)(Z.Z, {
                                            fontSize: "medium"
                                        })
                                    })
                                }), (0, ee.jsxs)(g.Z, {
                                    variant: "caption",
                                    className: n.infoText,
                                    children: ["High price impact. Try multiple smaller transactions or", " ", et ? "wait for auction to be over." : "standard withdraw"]
                                })]
                            }) : null, (0, ee.jsxs)(u.Z, {
                                display: "flex",
                                flexDirection: "column",
                                gridGap: "12px",
                                marginTop: "24px",
                                children: [Ge && !Be ? (0, ee.jsx)(k.Z, {
                                    label: "Min USDC to receive",
                                    value: (0, z.uf)(ke.toNumber()) + " USDC",
                                    isSmall: !0,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    gridGap: "12px"
                                }) : null, (0, ee.jsxs)(u.Z, {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    gridGap: "12px",
                                    flexWrap: "wrap",
                                    children: [(0, ee.jsx)(k.Z, {
                                        label: "Uniswap Fee",
                                        value: Be ? "0%" : (0, z.uf)(Number(ve)) + "%",
                                        isSmall: !0,
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        gridGap: "8px"
                                    }), (0, ee.jsxs)(u.Z, {
                                        display: "flex",
                                        alignItems: "center",
                                        gridGap: "6px",
                                        flex: "1",
                                        children: [(0, ee.jsx)(k.Z, {
                                            isSmall: !0,
                                            label: (0, ee.jsx)(k.D, {
                                                isSmall: !0,
                                                label: Be ? "Est. Price Impact" : "Price Impact",
                                                tooltipTitle: Be ? "For standard withdraw, the average price impact is ".concat((0, z.uf)(wn), "% based on historical auctions") : void 0
                                            }),
                                            value: (0, z.uf)(wn) + "%",
                                            textColor: wn > 3 ? "error" : void 0,
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            gridGap: "8px"
                                        }), !Be && (0, ee.jsx)(C.u, {
                                            setSlippage: Cn,
                                            slippage: new(y())(lt)
                                        })]
                                    })]
                                })]
                            }), (0, ee.jsxs)("div", {
                                className: n.ctaSection,
                                children: [Mt && (0, ee.jsx)(S.Z, {
                                    withdrawAllowed: Bt,
                                    marginTop: "24px"
                                }), (0, ee.jsx)("div", {
                                    children: Mt && !Bt ? (0, ee.jsx)(D.F2, {
                                        fullWidth: !0,
                                        variant: "contained",
                                        onClick: ft,
                                        disabled: !0,
                                        id: "open-long-restricted-btn",
                                        children: "Unavailable"
                                    }) : nt ? dt ? (0, ee.jsx)(D.F2, {
                                        fullWidth: !0,
                                        id: "crab-withdraw-btn",
                                        variant: Zn,
                                        className: Dn,
                                        onClick: mn,
                                        disabled: Y || !!dn,
                                        children: !Y && Be && Ve === te.WITHDRAW ? (0, ee.jsxs)(ee.Fragment, {
                                            children: ["Standard withdraw", (0, ee.jsx)(v.ZP, {
                                                title: (0, ee.jsx)("div", {
                                                    children: "Your withdrawal will be submitted via auction to reduce price impact. This may take until Tuesday."
                                                }),
                                                style: {
                                                    marginLeft: "8"
                                                },
                                                children: (0, ee.jsx)(V.Z, {
                                                    fontSize: "small"
                                                })
                                            })]
                                        }) : Y || !un && !cn || Ve !== te.WITHDRAW ? Y ? (0, ee.jsx)(b.Z, {
                                            color: "primary",
                                            size: "1.5rem"
                                        }) : Ve === te.APPROVE ? "Approve strategy to withdraw" : "Withdraw" : "Withdraw anyway"
                                    }) : (0, ee.jsx)(D.F2, {
                                        fullWidth: !0,
                                        variant: "contained",
                                        onClick: function () {},
                                        disabled: !0,
                                        id: "crab-unsupported-network-btn",
                                        children: "Unsupported Network"
                                    }) : (0, ee.jsx)(D.F2, {
                                        fullWidth: !0,
                                        variant: "contained",
                                        onClick: ft,
                                        disabled: !!Y,
                                        id: "crab-select-wallet-btn",
                                        children: "Connect Wallet"
                                    })
                                })]
                            })]
                        })]
                    })
                },
                fe = n(51112),
                xe = n(42418),
                me = function (e) {
                    var t, n = e.refetchCrabTokenBalance,
                        i = ((0, d.Dv)(W.pK).crabStrategy2, (0, d.Dv)(N.iu)),
                        s = (0, o.useState)(0),
                        l = s[0],
                        c = s[1],
                        f = (0, o.useState)(),
                        x = f[0],
                        m = f[1],
                        h = (0, I.hS)(),
                        g = h.confirmed,
                        v = h.resetTransactionData,
                        b = h.transactionData,
                        j = (0, xe.O)(null !== i && void 0 !== i ? i : "").pollForNewTx,
                        y = (0, _.Z)((function () {
                            return null !== x && void 0 !== x && x.status ? x.tradeType === r.Deposit ? x.transactionType === a.Queued ? "Initiated ".concat(x.amount.toFixed(4), " ").concat(x.token, " deposit") : "Deposited ".concat(x.amount.toFixed(4), " ").concat(x.token) : x.tradeType === r.Withdraw ? x.transactionType === a.Queued ? "Initiated ".concat(x.amount.toFixed(4), " ").concat(x.token, " withdraw") : "Withdrawn ".concat(x.amount.toFixed(4), " ").concat(x.token) : "" : ""
                        }), [x]),
                        w = (0, o.useCallback)((function () {
                            m(void 0), v()
                        }), [v, m]),
                        Z = (0, o.useCallback)((function (e) {
                            m(e), null !== e && void 0 !== e && e.id && j(null === e || void 0 === e ? void 0 : e.id), n()
                        }), [m, j, n]);
                    return g && null !== x && void 0 !== x && x.status ? (0, ee.jsxs)(ee.Fragment, {
                        children: [(0, ee.jsx)(fe.Z, {
                            confirmationMessage: y,
                            txnHash: null !== (t = null === b || void 0 === b ? void 0 : b.hash) && void 0 !== t ? t : "",
                            confirmType: fe.J.CRAB
                        }), (0, ee.jsx)(D.F2, {
                            fullWidth: !0,
                            id: "crab-close-btn",
                            variant: "contained",
                            onClick: w,
                            children: "Close"
                        })]
                    }) : (0, ee.jsxs)(ee.Fragment, {
                        children: [(0, ee.jsxs)(p.Qo, {
                            value: l,
                            onChange: function (e, t) {
                                return c(t)
                            },
                            "aria-label": "crab-trade-tab",
                            centered: !0,
                            variant: "fullWidth",
                            children: [(0, ee.jsx)(p.TT, {
                                id: "crab-deposit-tab",
                                label: "Deposit"
                            }), (0, ee.jsx)(p.TT, {
                                id: "crab-withdraw-tab",
                                label: "Withdraw"
                            })]
                        }), (0, ee.jsx)(u.Z, {
                            marginTop: "32px",
                            children: 0 === l ? (0, ee.jsx)(re, {
                                onTxnConfirm: Z
                            }) : (0, ee.jsx)(pe, {
                                onTxnConfirm: Z
                            })
                        })]
                    })
                },
                he = n(98069),
                ge = n(78966),
                ve = n(24525),
                be = n(6277),
                je = n(62322),
                ye = n(34070),
                we = n(90179),
                Ze = n(13123),
                De = (0, s.Z)((function (e) {
                    return (0, l.Z)({
                        buttonRoot: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            border: "1px solid #fff",
                            borderRadius: "100%",
                            width: "26px",
                            height: "26px",
                            backgroundColor: "#101010",
                            "&:hover": {
                                backgroundColor: e.palette.background.lightStone
                            },
                            transition: "background-color 0.1s ease-in"
                        },
                        icon: {
                            width: "13px",
                            height: "13px"
                        }
                    })
                })),
                Ce = function (e) {
                    var t = e.isPnlLoading,
                        n = e.strategy,
                        r = e.pnl,
                        a = e.firstDepositTimestamp,
                        i = De(),
                        o = (0, X.Z)().track;
                    if (t) return null;
                    var s = (0, z.uf)(r),
                        l = r > 0 ? "+".concat(s, "%") : "".concat(s, "%"),
                        c = a ? (0, Ze.Z)(1e3 * a) : "",
                        d = "crab" === n,
                        p = d ? "\ud83e\udd80" : "\ud83e\uddd8\ud83d\udc02 ",
                        f = d ? "I've earned ".concat(l, " on my USDC in the past ").concat(c, " with the Orion's Crab Strategy!") : "I've earned ".concat(l, " on my ETH in the past ").concat(c, " with the Orion's Zen Bull Strategy!"),
                        x = d ? "I've earned ".concat(l, " on my USDC in the past ").concat(c, " with the @opyn_'s Crab Strategy!") : "I've earned ".concat(l, " on my ETH in the past ").concat(c, " with the @opyn_'s Zen Bull Strategy!"),
                        m = "".concat(F.Gv, "/share-pnl/").concat(n, "/").concat(a, "/").concat(s),
                        h = encodeURIComponent("".concat(f, " ").concat(p)),
                        g = encodeURIComponent("".concat(x, " ").concat(p)),
                        b = encodeURIComponent(m),
                        j = "https://twitter.com/intent/tweet?text=".concat(g, "&url=").concat(b),
                        y = "https://t.me/share/url?text=".concat(h, "&url=").concat(b);
                    return (0, ee.jsxs)(u.Z, {
                        display: "flex",
                        gridGap: "8px",
                        alignItems: "center",
                        children: [(0, ee.jsx)(v.ZP, {
                            title: "Share your PnL on Twitter",
                            placement: "bottom",
                            children: (0, ee.jsx)(je.Z, {
                                classes: {
                                    root: i.buttonRoot
                                },
                                href: j,
                                target: "_blank",
                                onClick: function () {
                                    return o(Q.rg.CLICK_SHARE_PNL, {
                                        platform: "twitter",
                                        strategy: n
                                    })
                                },
                                children: (0, ee.jsx)(ye.Z, {
                                    className: i.icon
                                })
                            })
                        }), (0, ee.jsx)(v.ZP, {
                            title: "Share your PnL on Telegram",
                            placement: "bottom",
                            children: (0, ee.jsx)(je.Z, {
                                classes: {
                                    root: i.buttonRoot
                                },
                                href: y,
                                target: "_blank",
                                onClick: function () {
                                    return o(Q.rg.CLICK_SHARE_PNL, {
                                        platform: "telegram",
                                        strategy: n
                                    })
                                },
                                children: (0, ee.jsx)(we.Z, {
                                    className: i.icon
                                })
                            })
                        })]
                    })
                },
                Se = n(59797),
                Te = n(83543),
                ke = function (e) {
                    var t = e.isPnlLoading,
                        n = e.depositedUsd,
                        r = e.pnl,
                        a = (0, ve.Z)();
                    if (t) return (0, ee.jsxs)(u.Z, {
                        display: "flex",
                        alignItems: "center",
                        gridGap: "8px",
                        children: [(0, ee.jsx)(b.Z, {
                            size: "1rem",
                            className: a.loadingSpinner
                        }), (0, ee.jsx)(g.Z, {
                            className: a.text,
                            children: "fetching pnl..."
                        })]
                    });
                    var i = r.isGreaterThanOrEqualTo(0),
                        o = (0, be.default)(a.description, a.textSemibold, a.textMonospace, i ? a.colorSuccess : a.colorError);
                    return (0, ee.jsx)(u.Z, {
                        display: "flex",
                        flexDirection: "column",
                        gridGap: "12px",
                        position: "relative",
                        top: "2px",
                        children: (0, ee.jsxs)(u.Z, {
                            display: "flex",
                            gridGap: "8px",
                            children: [(0, ee.jsxs)(u.Z, {
                                display: "flex",
                                marginLeft: "-6px",
                                children: [(0, ee.jsx)("div", {
                                    children: i ? (0, ee.jsx)(Se.Z, {
                                        fontSize: "small",
                                        className: a.colorSuccess
                                    }) : (0, ee.jsx)(Te.Z, {
                                        fontSize: "small",
                                        className: a.colorError
                                    })
                                }), (0, ee.jsx)(g.Z, {
                                    className: o,
                                    children: (0, z.uf)(r.toNumber()) + "%"
                                })]
                            }), (0, ee.jsxs)(g.Z, {
                                className: o,
                                children: ["(", i && "+", (0, z.xG)(n.times(r).div(100).toNumber()), ")"]
                            }), (0, ee.jsx)(g.Z, {
                                className: a.description,
                                children: "since deposit"
                            })]
                        })
                    })
                },
                Ne = function (e) {
                    var t = e.depositedUsd,
                        n = e.currentPosition,
                        r = e.pnl,
                        a = e.firstDepositTimestamp,
                        i = (0, ve.Z)(),
                        o = !r.isFinite();
                    return (0, ee.jsxs)(u.Z, {
                        display: "flex",
                        flexDirection: "column",
                        gridGap: "12px",
                        children: [(0, ee.jsxs)("div", {
                            children: [(0, ee.jsx)(g.Z, {
                                variant: "h4",
                                className: i.sectionTitle,
                                children: "My Crab Position"
                            }), (0, ee.jsxs)(u.Z, {
                                display: "flex",
                                alignItems: "baseline",
                                gridColumnGap: "12px",
                                gridRowGap: "2px",
                                flexWrap: "wrap",
                                marginTop: "6px",
                                children: [(0, ee.jsx)(g.Z, {
                                    className: (0, be.default)(i.heading, i.textMonospace),
                                    children: (0, z.xG)(n.toNumber())
                                }), (0, ee.jsx)(ke, {
                                    isPnlLoading: o,
                                    depositedUsd: t,
                                    pnl: r
                                })]
                            })]
                        }), (0, ee.jsx)(Ce, {
                            isPnlLoading: o,
                            strategy: "crab",
                            pnl: r.toNumber(),
                            firstDepositTimestamp: a
                        })]
                    })
                },
                Ie = function () {
                    var e = (0, d.KO)(P.H0),
                        t = (0, x.Z)(e, 2),
                        n = t[0],
                        r = t[1],
                        a = (0, d.Dv)(P.J9),
                        i = (0, o.useState)(!1),
                        s = i[0],
                        l = i[1],
                        c = (0, E.MZ)(),
                        p = (0, I.hS)().resetTransactionData,
                        m = function () {
                            var e = (0, f.Z)(h().mark((function e() {
                                return h().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return l(!0), e.prev = 1, e.next = 4, c(n, p);
                                        case 4:
                                            r(F.HW), e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(1), console.log(e.t0);
                                        case 10:
                                            l(!1);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 7]
                                ])
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }(),
                        v = (0, ve.Z)();
                    return (0, ee.jsxs)(u.Z, {
                        display: "flex",
                        flexDirection: "column",
                        gridGap: "8px",
                        children: [(0, ee.jsx)(g.Z, {
                            variant: "h4",
                            className: v.sectionTitle,
                            children: "Initiated Deposit"
                        }), (0, ee.jsxs)(u.Z, {
                            display: "flex",
                            alignItems: "baseline",
                            gridGap: "8px",
                            children: [(0, ee.jsx)(g.Z, {
                                className: (0, be.default)(v.heading, v.textMonospace),
                                children: (0, z.xG)(Number((0, B.nw)(n, F.p8)))
                            }), !a && (0, ee.jsx)(D.Av, {
                                color: "primary",
                                disabled: s,
                                onClick: m,
                                children: s ? (0, ee.jsx)(b.Z, {
                                    color: "primary",
                                    size: "1.5rem"
                                }) : "Cancel"
                            })]
                        })]
                    })
                },
                Pe = function () {
                    var e = (0, d.KO)(P.wd),
                        t = (0, x.Z)(e, 2),
                        n = t[0],
                        r = t[1],
                        a = (0, d.Dv)(P.J9),
                        i = (0, d.Dv)(P.uI),
                        s = (0, o.useState)(!1),
                        l = s[0],
                        c = s[1],
                        p = (0, E.o3)(),
                        m = (0, I.hS)().resetTransactionData,
                        v = function () {
                            var e = (0, f.Z)(h().mark((function e() {
                                return h().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return c(!0), e.prev = 1, e.next = 4, p(n, m);
                                        case 4:
                                            r(F.HW), e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(1), console.log(e.t0);
                                        case 10:
                                            c(!1);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 7]
                                ])
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }(),
                        j = (0, ve.Z)();
                    return (0, ee.jsxs)(u.Z, {
                        display: "flex",
                        flexDirection: "column",
                        gridGap: "8px",
                        children: [(0, ee.jsx)(g.Z, {
                            variant: "h4",
                            className: j.sectionTitle,
                            children: "Initiated Withdraw"
                        }), (0, ee.jsxs)(u.Z, {
                            display: "flex",
                            alignItems: "baseline",
                            gridGap: "8px",
                            children: [(0, ee.jsx)(g.Z, {
                                className: (0, be.default)(j.heading, j.textMonospace),
                                children: (0, z.xG)(Number((0, B.nw)(n, F.n5).times((0, B.nw)(i, F.n5))))
                            }), !a && (0, ee.jsx)(D.Av, {
                                color: "primary",
                                disabled: l,
                                onClick: v,
                                children: l ? (0, ee.jsx)(b.Z, {
                                    color: "primary",
                                    size: "1.5rem"
                                }) : "Cancel"
                            })]
                        })]
                    })
                },
                Ee = function () {
                    var e = (0, d.Dv)(P.H0),
                        t = (0, d.Dv)(P.wd),
                        n = e.isGreaterThan("100"),
                        r = t.isGreaterThan("10000000000");
                    return n || r ? (0, ee.jsxs)(u.Z, {
                        display: "flex",
                        gridRowGap: "40px",
                        gridColumnGap: "80px",
                        flexWrap: "wrap",
                        children: [n && (0, ee.jsx)(Ie, {}), r && (0, ee.jsx)(Pe, {})]
                    }) : null
                },
                Ae = function (e) {
                    var t = e.currentCrabPositionValue,
                        n = e.isCrabPositionValueLoading,
                        r = (0, d.Dv)(P.H0),
                        a = (0, d.Dv)(P.wd),
                        i = (0, d.Dv)(N.iu),
                        o = (0, xe.O)(i || ""),
                        s = o.loading,
                        l = o.depositedUsd,
                        c = o.firstDepositTimestamp,
                        p = (0, d.Dv)(P.MF),
                        f = (0, _.Z)((function () {
                            return console.log(t.toString(), l.toString(), "Position value"), (0, ge.XJ)(t.plus(p), l)
                        }), [t, l, p]),
                        x = (0, _.Z)((function () {
                            return s || n
                        }), [s, n]),
                        m = (0, ve.Z)(),
                        h = t.isGreaterThan(0) ? t : F.HW;
                    return h.isZero() && r.isZero() && a.isZero() ? null : x ? (0, ee.jsxs)(u.Z, {
                        display: "flex",
                        flexDirection: "column",
                        gridGap: "12px",
                        children: [(0, ee.jsx)(g.Z, {
                            variant: "h4",
                            className: m.sectionTitle,
                            children: "My Crab Position"
                        }), (0, ee.jsx)(he.Z, {
                            width: "100%",
                            height: "80px",
                            style: {
                                transform: "none"
                            }
                        })]
                    }) : (0, ee.jsxs)(u.Z, {
                        display: "flex",
                        flexDirection: "column",
                        gridGap: "40px",
                        children: [(0, ee.jsx)(Ne, {
                            depositedUsd: l,
                            currentPosition: h,
                            pnl: f,
                            firstDepositTimestamp: c
                        }), (0, ee.jsx)(Ee, {})]
                    })
                },
                Re = (0, o.memo)(Ae),
                We = n(24986),
                _e = n(76635),
                Ge = function (e, t) {
                    return "".concat(e).padStart(t, "0")
                },
                Oe = (0, s.Z)((function () {
                    return (0, l.Z)({
                        label: {
                            fontSize: "15px",
                            color: "rgba(255, 255, 255, 0.5)",
                            fontWeight: 500,
                            textAlign: "right"
                        },
                        value: {
                            fontSize: "20px",
                            color: "rgba(255, 255, 255, 1)",
                            fontWeight: 500,
                            fontFamily: "DM Mono",
                            textAlign: "right"
                        }
                    })
                })),
                He = function () {
                    var e = (0, o.useState)(""),
                        t = e[0],
                        n = e[1],
                        r = Oe();
                    return (0, o.useEffect)((function () {
                        var e = setInterval((function () {
                            var e, t, r, a, i = new Date,
                                o = function (e) {
                                    var t = new Date(e);
                                    t.setUTCDate(t.getUTCDate() + ((8 - t.getUTCDay()) % 7 || 7)), t.setUTCHours(16, 30, 0, 0);
                                    var n = new Date(e);
                                    n.setUTCDate(n.getUTCDate() + ((10 - n.getUTCDay()) % 7 || 7)), n.setUTCHours(16, 30, 0, 0);
                                    var r = new Date(e);
                                    r.setUTCDate(r.getUTCDate() + ((12 - r.getUTCDay()) % 7 || 7)), r.setUTCHours(16, 30, 0, 0);
                                    var a = new Date(e);
                                    a.setUTCDate(a.getUTCDate()), a.setUTCHours(16, 30, 0, 0);
                                    var i = 1 === e.getUTCDay(),
                                        o = 3 === e.getUTCDay(),
                                        s = 5 === e.getUTCDay(),
                                        l = e.getUTCHours() > 16 || 16 === e.getUTCHours() && e.getUTCMinutes() >= 30,
                                        c = i && !l ? a : t,
                                        u = o && !l ? a : n,
                                        d = s && !l ? a : r;
                                    return (0, _e.sortBy)([c, u, d], (function (e) {
                                        return e.getTime()
                                    }))[0]
                                }(i),
                                s = (0, We.Z)({
                                    start: i,
                                    end: o
                                }),
                                l = Ge(null !== (e = s.days) && void 0 !== e ? e : 0, 2),
                                c = Ge(null !== (t = s.hours) && void 0 !== t ? t : 0, 2),
                                u = Ge(null !== (r = s.minutes) && void 0 !== r ? r : 0, 2),
                                d = Ge(null !== (a = s.seconds) && void 0 !== a ? a : 0, 2),
                                p = "".concat(l, "D ").concat(c, "H ").concat(u, "M ").concat(d, "S");
                            n(p)
                        }), 1e3);
                        return function () {
                            return clearInterval(e)
                        }
                    }), []), (0, ee.jsxs)("div", {
                        children: [(0, ee.jsx)(g.Z, {
                            className: r.label,
                            children: "Next hedge in"
                        }), (0, ee.jsx)(g.Z, {
                            className: r.value,
                            variant: "subtitle2",
                            children: t
                        })]
                    })
                },
                Ue = n(61660),
                Fe = n(89257),
                Me = n(25556),
                Be = n(81224),
                ze = n(3131),
                Le = n(33618),
                Ve = n(47857),
                Ke = n(47193),
                qe = n(15045),
                Ye = n(60364),
                Qe = n(41156),
                Xe = n(14498),
                Je = n(13416),
                $e = (0, s.Z)((function () {
                    return {
                        root: {
                            backgroundColor: "rgba(247,247,247,0.85)",
                            padding: "4px 8px"
                        },
                        label: {
                            fontSize: "12px",
                            fontFamily: "DM Mono",
                            color: "rgb(51, 51, 51)"
                        },
                        value: {
                            fontSize: "12px",
                            fontFamily: "DM Mono",
                            color: "rgb(51, 51, 51)"
                        }
                    }
                })),
                et = function (e) {
                    var t = e.active,
                        n = e.payload,
                        r = $e();
                    if (t && n && n.length) {
                        var a = n[0].payload.strategyReturn,
                            i = n[0].payload.ethPrice;
                        return (0, ee.jsxs)("div", {
                            className: r.root,
                            children: [(0, ee.jsxs)(g.Z, {
                                className: r.label,
                                children: [(0, ee.jsx)("b", {
                                    children: (0, z.xG)(i)
                                }), " ", "ETH/USDC"]
                            }), (0, ee.jsxs)(g.Z, {
                                className: r.value,
                                children: ["Crab return: ", (0, ee.jsxs)("b", {
                                    children: [(0, z.uf)(a), "%"]
                                })]
                            })]
                        })
                    }
                    return null
                },
                tt = function (e) {
                    var t = e.cx,
                        n = e.cy,
                        r = e.value,
                        a = e.fill;
                    return r ? (0, ee.jsx)("rect", {
                        x: t - 1.5,
                        y: n - 7,
                        width: 3,
                        height: 14,
                        strokeWidth: 0,
                        fill: a
                    }) : null
                },
                nt = function (e) {
                    var t = e.x,
                        n = e.y,
                        r = e.width,
                        a = e.height,
                        i = e.fill,
                        o = e.stroke,
                        s = t,
                        l = a < 0 ? n + a : n,
                        c = r,
                        u = Math.abs(a);
                    return (0, ee.jsxs)(ee.Fragment, {
                        children: [(0, ee.jsx)("rect", {
                            x: s,
                            y: l,
                            width: c,
                            height: u,
                            fill: i
                        }), (0, ee.jsx)("rect", {
                            x: s,
                            y: l,
                            width: 1,
                            height: u,
                            fill: o
                        }), (0, ee.jsx)("rect", {
                            x: s + c,
                            y: l,
                            width: 1,
                            height: u,
                            fill: o
                        })]
                    })
                };

            function rt(e, t) {
                return 100 * (e - Math.pow(t, 2))
            }
            var at = function (e) {
                var t = e.currentImpliedFunding,
                    n = (0, d.Dv)(P.uV),
                    r = (0, Je.ub)(),
                    a = 2 * t,
                    i = Number((0, B.nw)(n, 18)),
                    s = Number(r),
                    l = Math.sqrt(a),
                    c = i - l * i,
                    p = i + l * i,
                    f = (0, o.useMemo)((function () {
                        return function (e, t, n) {
                            for (var r = [], a = new(y())(-n), i = new(y())(.05), o = new(y())(n), s = a; s.lte(o);) {
                                var l = s.div(100).toNumber(),
                                    c = rt(e, l),
                                    u = c >= 0 ? c : null,
                                    d = c < 0 ? c : null;
                                r.push({
                                    ethPrice: t + l * t,
                                    strategyReturn: c,
                                    strategyReturnPositive: u,
                                    strategyReturnNegative: d
                                }), s = s.plus(i)
                            }
                            return r
                        }(a, i, 4 * l * 100)
                    }), [a, i, l]),
                    x = function (e) {
                        return rt(a, (e - i) / i)
                    },
                    m = (0, Ye.Z)(),
                    h = m.palette.success.main,
                    g = m.palette.error.main,
                    v = (0, Qe.Z)(m.breakpoints.down("xs")),
                    b = x(s);
                return (0, ee.jsx)(Xe.Z, {
                    in: !0,
                    children: (0, ee.jsx)(u.Z, {
                        height: 300,
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-start",
                        children: (0, ee.jsx)(Ue.h, {
                            width: "100%",
                            height: "100%",
                            children: (0, ee.jsxs)(Fe.w, {
                                data: f,
                                children: [(0, ee.jsxs)("defs", {
                                    children: [(0, ee.jsx)("marker", {
                                        id: "arrowhead",
                                        markerWidth: "10",
                                        markerHeight: "10",
                                        refX: "5",
                                        refY: "5",
                                        orient: "auto-start-reverse",
                                        children: (0, ee.jsx)("polygon", {
                                            points: "0 0, 10 5, 0 10",
                                            fill: "#fff",
                                            opacity: "0.5"
                                        })
                                    }), (0, ee.jsx)("marker", {
                                        id: "dot",
                                        viewBox: "0 0 16 16",
                                        refX: "8",
                                        refY: "8",
                                        markerWidth: "8",
                                        markerHeight: "8",
                                        children: (0, ee.jsx)("circle", {
                                            cx: "8",
                                            cy: "8",
                                            r: "8",
                                            fill: "#ffffff80"
                                        })
                                    }), (0, ee.jsxs)("filter", {
                                        x: "0",
                                        y: "0",
                                        width: "1",
                                        height: "1",
                                        id: "removebackground",
                                        children: [(0, ee.jsx)("feFlood", {
                                            floodColor: m.palette.background.default
                                        }), (0, ee.jsx)("feComposite", {
                                            in: "SourceGraphic"
                                        })]
                                    })]
                                }), (0, ee.jsx)(Me.K, {
                                    height: 1,
                                    type: "number",
                                    dataKey: "ethPrice",
                                    domain: v ? ["dataMin - 20", "dataMax + 20"] : ["dataMin - 40", "dataMax + 200"],
                                    tick: !1,
                                    strokeDasharray: "5,5",
                                    strokeOpacity: "0.5",
                                    stroke: "#fff",
                                    markerEnd: "url(#arrowhead)",
                                    markerStart: "url(#dot)",
                                    children: (0, ee.jsx)(Be._, {
                                        value: "ETH Price",
                                        position: "insideBottomRight",
                                        offset: 14,
                                        fill: "#ffffff80",
                                        enableBackground: "fill"
                                    })
                                }), (0, ee.jsx)(ze.B, {
                                    width: 1,
                                    type: "number",
                                    dataKey: "strategyReturn",
                                    tick: !1,
                                    domain: v ? ["dataMin - 1.25", "dataMax + 1.25"] : ["dataMin - 0.5", "dataMax + 0.5"],
                                    strokeDasharray: "5,5",
                                    strokeOpacity: "0.5",
                                    stroke: "#fff",
                                    markerStart: "url(#arrowhead)",
                                    yAxisId: "0",
                                    children: (0, ee.jsx)(Be._, {
                                        value: v ? "Crab" : "Crab Strategy",
                                        position: "insideTopLeft",
                                        offset: 14,
                                        fill: "#ffffff80"
                                    })
                                }), (0, ee.jsx)(Le.z, {
                                    shape: (0, ee.jsx)(nt, {}),
                                    x1: c,
                                    x2: p,
                                    fill: h + "16",
                                    stroke: h
                                }), (0, ee.jsx)(Ve.u, {
                                    wrapperStyle: {
                                        outline: "none"
                                    },
                                    cursor: {
                                        stroke: "#fff",
                                        strokeOpacity: "0.5",
                                        strokeWidth: 1
                                    },
                                    content: (0, ee.jsx)(et, {})
                                }), (0, ee.jsx)(Ke.x, {
                                    type: "monotone",
                                    dataKey: "strategyReturnNegative",
                                    stroke: g,
                                    strokeWidth: 1,
                                    dot: !1,
                                    isAnimationActive: !1,
                                    activeDot: (0, ee.jsx)(tt, {})
                                }), (0, ee.jsx)(Ke.x, {
                                    type: "monotone",
                                    dataKey: "strategyReturnPositive",
                                    stroke: h,
                                    strokeWidth: 1,
                                    dot: !1,
                                    isAnimationActive: !1,
                                    activeDot: (0, ee.jsx)(tt, {})
                                }), (0, ee.jsx)(qe.q, {
                                    x: c,
                                    y: x(c),
                                    r: 0,
                                    children: (0, ee.jsx)(Be._, {
                                        fontFamily: "DM Mono",
                                        fontWeight: 500,
                                        value: "$" + (0, z.uf)(c, 0),
                                        position: "insideBottomRight",
                                        offset: 8,
                                        fill: "#ffffffcc"
                                    })
                                }), (0, ee.jsx)(qe.q, {
                                    x: p,
                                    y: x(p),
                                    r: 0,
                                    children: (0, ee.jsx)(Be._, {
                                        fontFamily: "DM Mono",
                                        fontWeight: 500,
                                        value: "$" + (0, z.uf)(p, 0),
                                        position: "insideBottomLeft",
                                        offset: 8,
                                        fill: "#ffffffcc"
                                    })
                                }), (0, ee.jsx)(qe.q, {
                                    x: s,
                                    y: b,
                                    r: 5,
                                    fill: b < 0 ? g : h,
                                    strokeWidth: 0,
                                    children: (0, ee.jsx)(Be._, {
                                        fontFamily: "DM Mono",
                                        fontWeight: 500,
                                        value: "$" + (0, z.uf)(s, 0),
                                        position: "insideTop",
                                        offset: 20,
                                        fill: b < 0 ? g : h,
                                        filter: "url(#removebackground)"
                                    })
                                })]
                            })
                        })
                    })
                })
            };
            var it = function () {
                    var e = (0, d.Dv)(R.e1);
                    return 0 === e ? (0, ee.jsx)(u.Z, {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        children: (0, ee.jsx)(he.Z, {
                            height: 300,
                            width: "100%"
                        })
                    }) : (0, ee.jsx)(at, {
                        currentImpliedFunding: e
                    })
                },
                ot = n(96971),
                st = n(96769),
                lt = n(55606),
                ct = (0, s.Z)((function () {
                    return (0, l.Z)({
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
                ut = function () {
                    var e = (0, o.useState)(!1),
                        t = e[0],
                        n = e[1],
                        r = (0, d.Dv)(R.Qv),
                        a = (0, d.Dv)(R.p9),
                        i = (0, d.Dv)(R.e1),
                        s = (0, X.Z)().track,
                        l = ct(),
                        c = 100 * r;
                    return (0, ee.jsxs)("div", {
                        children: [(0, ee.jsxs)(D.Av, {
                            className: l.button,
                            onClick: function () {
                                n(!t), !t && s(Q.rg.SEE_ADVANCED_METRICS_CRAB)
                            },
                            children: [(0, ee.jsx)(g.Z, {
                                className: l.buttonText,
                                children: "Advanced"
                            }), " ", t ? (0, ee.jsx)(ot.Z, {}) : (0, ee.jsx)(st.Z, {})]
                        }), (0, ee.jsx)(Xe.Z, {
                            in: t,
                            children: t ? (0, ee.jsxs)(u.Z, {
                                display: "flex",
                                justifyContent: "space-between",
                                gridGap: "12px",
                                marginTop: "16px",
                                flexWrap: "wrap",
                                children: [(0, ee.jsx)(k.Z, {
                                    label: (0, ee.jsx)(k.D, {
                                        label: "Daily Premium",
                                        tooltipTitle: "".concat(lt.Bm.StrategyEarnFunding, ". ").concat(lt.Bm.CurrentImplFunding)
                                    }),
                                    gridGap: "4px",
                                    value: (0, z.uf)(100 * i) + "%"
                                }), (0, ee.jsx)(k.Z, {
                                    label: (0, ee.jsx)(k.D, {
                                        label: "Implied Volatility",
                                        tooltipTitle: lt.Bm.ImplVol
                                    }),
                                    gridGap: "4px",
                                    value: "".concat((0, z.uf)(c), "%")
                                }), (0, ee.jsx)(k.Z, {
                                    label: (0, ee.jsx)(k.D, {
                                        label: "Reference Volatility",
                                        tooltipTitle: lt.Bm.osqthRefVol
                                    }),
                                    gridGap: "4px",
                                    value: "".concat((0, z.uf)(a), "%")
                                })]
                            }) : (0, ee.jsx)("div", {})
                        })]
                    })
                },
                dt = n(72276),
                pt = (0, s.Z)((function (e) {
                    return (0, l.Z)({
                        timerContainer: (0, i.Z)({
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
                ft = "https://opyn.gitbook.io/opyn-strategies/crab-strategy/introduction",
                xt = function () {
                    var e = (0, ve.Z)(),
                        t = pt(),
                        n = (0, X.Z)().track;
                    return (0, ee.jsxs)("div", {
                        children: [(0, ee.jsxs)(u.Z, {
                            display: "flex",
                            flexDirection: "column",
                            gridGap: "8px",
                            children: [(0, ee.jsx)(g.Z, {
                                variant: "h3",
                                className: e.sectionTitle,
                                children: "About Crab"
                            }), (0, ee.jsx)(g.Z, {
                                variant: "h2",
                                className: e.heading,
                                children: "Stack USDC when ETH is calm"
                            }), (0, ee.jsx)(g.Z, {
                                className: (0, be.default)(e.text, e.textMargin),
                                children: ["In general, Crab earns USDC returns except when there is high ETH volatility in the market, when it may draw down. Most often, the strategy stacks USDC if ETH is within the below bands at the next hedge.", " "   ]
                            })]
                        }), (0, ee.jsxs)(u.Z, {
                            position: "relative",
                            marginTop: "32px",
                            children: [(0, ee.jsx)("div", {
                                className: t.timerContainer,
                                children: (0, ee.jsx)(He, {})
                            }), (0, ee.jsx)(it, {})]
                        }), (0, ee.jsx)(u.Z, {
                            marginTop: "16px",
                            children: (0, ee.jsx)(ut, {})
                        })]
                    })
                },
                mt = n(82269),
                ht = n(18452),
                gt = n(24015),
                vt = n(85256),
                bt = n(61564),
                jt = n(34738),
                yt = n(85601),
                wt = n(64402),
                Zt = n.n(wt),
                Dt = n(61146),
                Ct = n.n(Dt),
                St = n(8849),
                Tt = n(37937),
                kt = ["inputRef", "label", "InputProps", "id", "variant"],
                Nt = ["chart"];

            function It(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Pt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? It(Object(n), !0).forEach((function (t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : It(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Et = (0, s.Z)((function (e) {
                    return (0, l.Z)({
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
                At = function (e) {
                    e.inputRef;
                    var t = e.label,
                        n = e.InputProps,
                        r = e.id,
                        a = (e.variant, (0, mt.Z)(e, kt)),
                        i = Et();
                    return (0, ee.jsxs)(u.Z, {
                        display: "flex",
                        flexDirection: "column",
                        gridGap: "4px",
                        children: [(0, ee.jsx)(ht.Z, {
                            htmlFor: r,
                            classes: {
                                root: i.labelRoot
                            },
                            children: t
                        }), (0, ee.jsx)(gt.Z, Pt({
                            id: r,
                            InputProps: Pt({
                                classes: {
                                    root: i.inputRoot,
                                    focused: i.inputFocused
                                },
                                disableUnderline: !0
                            }, n)
                        }, a))]
                    })
                },
                Rt = function (e) {
                    var t = e.label,
                        n = e.value,
                        r = (0, ve.Z)();
                    return (0, ee.jsxs)(u.Z, {
                        display: "flex",
                        justifyContent: "flex-end",
                        gridGap: "6px",
                        children: [(0, ee.jsx)(g.Z, {
                            className: r.textSmall,
                            children: t
                        }), (0, ee.jsx)(u.Z, {
                            minWidth: "6ch",
                            display: "flex",
                            justifyContent: "flex-end",
                            children: (0, ee.jsxs)(g.Z, {
                                className: (0, be.default)(r.textSmall, r.textMonospace, n >= 0 ? r.colorSuccess : r.colorError),
                                children: [n >= 0 && "+", (0, z.uf)(n), "%"]
                            })
                        })]
                    })
                },
                Wt = function () {
                    return (0, ee.jsxs)(ee.Fragment, {
                        children: ["Annualized return based on selected dates.", (0, ee.jsx)("br", {}), "Past performance does not indicate future returns."]
                    })
                },
                _t = function (e) {
                    var t = e.strategyPnLSeries,
                        n = e.tvl,
                        r = (0, d.KO)(P.Lq),
                        a = (0, x.Z)(r, 2),
                        i = a[0],
                        s = a[1],
                        l = (0, d.KO)(P.G7),
                        c = (0, x.Z)(l, 2),
                        p = c[0],
                        f = c[1],
                        m = [{
                            name: "Crab/USDC \ud83e\udd80  % Return",
                            yAxis: 0,
                            data: t,
                            tooltip: {
                                valueDecimals: 2,
                                valueSuffix: "%"
                            },
                            color: "#70E3F6"
                        }],
                        h = {
                            yAxis: [{
                                title: {
                                    text: ""
                                },
                                labels: {
                                    style: {
                                        color: "#BABBBB"
                                    }
                                },
                                gridLineColor: "rgba(221,221,221,0.1)"
                            }]
                        },
                        b = (0, _.Z)((function () {
                            var e = Tt.b.chart;
                            return Pt(Pt(Pt({}, (0, mt.Z)(Tt.b, Nt)), h), {}, {
                                chart: Pt(Pt({}, e), {}, {
                                    marginLeft: "40"
                                }),
                                series: m
                            })
                        })),
                        j = (0, ve.Z)(),
                        y = (0, St.Z)(p, i),
                        w = t.length > 0 ? t[t.length - 1][1] : 0,
                        Z = (0, o.useMemo)((function () {
                            return 100 * (Math.pow(1 + w / 100, 365 / y) - 1)
                        }), [w, y]);
                    return (0, ee.jsxs)(ee.Fragment, {
                        children: [(0, ee.jsxs)(u.Z, {
                            display: "flex",
                            alignItems: "baseline",
                            gridColumnGap: "12px",
                            gridRowGap: "4px",
                            flexWrap: "wrap",
                            children: [(0, ee.jsxs)(g.Z, {
                                variant: "h2",
                                className: (0, be.default)(j.heading, j.textMonospace, Z >= 0 ? j.colorSuccess : j.colorError),
                                children: [Z >= 0 && "+", (0, z.uf)(Z), "%"]
                            }), (0, ee.jsxs)(u.Z, {
                                display: "flex",
                                alignItems: "baseline",
                                gridGap: "12px",
                                children: [(0, ee.jsx)(g.Z, {
                                    className: j.description,
                                    children: "Annualized USDC Return"
                                }), (0, ee.jsx)(u.Z, {
                                    position: "relative",
                                    top: "3px",
                                    children: (0, ee.jsx)(v.ZP, {
                                        title: (0, ee.jsx)(Wt, {}),
                                        children: (0, ee.jsx)(K.Z, {
                                            fontSize: "small",
                                            className: j.infoIcon
                                        })
                                    })
                                })]
                            })]
                        }), (0, ee.jsxs)(u.Z, {
                            display: "flex",
                            gridGap: "12px",
                            children: [(0, ee.jsx)(g.Z, {
                                className: (0, be.default)(j.description, j.textMonospace),
                                children: (0, z.xG)(n, 0)
                            }), (0, ee.jsx)(g.Z, {
                                className: j.description,
                                children: "Open Interest"
                            })]
                        }), (0, ee.jsxs)(u.Z, {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-end",
                            gridGap: "12px",
                            flexWrap: "wrap",
                            children: [(0, ee.jsx)("div", {
                                children: (0, ee.jsx)(bt.M, {
                                    utils: yt.Z,
                                    children: (0, ee.jsxs)(u.Z, {
                                        display: "flex",
                                        alignItems: "center",
                                        gridGap: "16px",
                                        marginTop: "16px",
                                        children: [(0, ee.jsx)(jt.M, {
                                            id: "start-date-strategy-performance",
                                            label: "Start Date",
                                            placeholder: "MM/DD/YYYY",
                                            format: "MM/dd/yyyy",
                                            value: i,
                                            minDate: F.L5,
                                            onChange: function (e) {
                                                return s(e || new Date)
                                            },
                                            animateYearScrolling: !1,
                                            autoOk: !0,
                                            clearable: !0,
                                            TextFieldComponent: At
                                        }), (0, ee.jsx)(vt.Z, {
                                            orientation: "horizontal",
                                            className: j.divider
                                        }), (0, ee.jsx)(jt.M, {
                                            id: "end-date-strategy-performance",
                                            label: "End Date",
                                            placeholder: "MM/DD/YYYY",
                                            format: "MM/dd/yyyy",
                                            value: p,
                                            minDate: i,
                                            onChange: function (e) {
                                                return f(e || new Date)
                                            },
                                            animateYearScrolling: !1,
                                            autoOk: !0,
                                            clearable: !0,
                                            TextFieldComponent: At
                                        })]
                                    })
                                })
                            }), (0, ee.jsxs)(u.Z, {
                                display: "flex",
                                flexDirection: "column",
                                gridGap: "4px",
                                flex: "1",
                                flexBasis: "200px",
                                children: [(0, ee.jsx)(Rt, {
                                    label: "Historical Returns",
                                    value: w
                                }), (0, ee.jsx)(Rt, {
                                    label: "Annualized",
                                    value: Z
                                })]
                            })]
                        }), (0, ee.jsx)(u.Z, {
                            marginTop: "12px",
                            children: (0, ee.jsx)(Zt(), {
                                highcharts: Ct(),
                                options: b
                            })
                        })]
                    })
                },
                Gt = function () {
                    var e, t, n = (0, d.Dv)(P.H7),
                        r = (0, Je.xD)(),
                        a = (0, P.D$)(),
                        i = null === a || void 0 === a || null === (e = a.data) || void 0 === e ? void 0 : e.data.map((function (e) {
                            return [1e3 * e.timestamp, 100 * e.crabPnL]
                        })),
                        o = "undefined" === typeof i,
                        s = (null !== (t = null === n || void 0 === n ? void 0 : n.collateralAmount) && void 0 !== t ? t : F.HW).multipliedBy(r).integerValue(),
                        l = s.isZero(),
                        c = o || l,
                        p = (0, ve.Z)();
                    return (0, ee.jsxs)(u.Z, {
                        display: "flex",
                        flexDirection: "column",
                        gridGap: "8px",
                        children: [(0, ee.jsx)(g.Z, {
                            variant: "h3",
                            className: p.sectionTitle,
                            children: "Strategy Performance"
                        }), c ? (0, ee.jsxs)("div", {
                            className: p.shimmer,
                            children: [(0, ee.jsx)(he.Z, {
                                width: "100%",
                                height: 25,
                                style: {
                                    transform: "none"
                                }
                            }), (0, ee.jsx)(he.Z, {
                                width: "100%",
                                height: 30,
                                style: {
                                    transform: "none"
                                }
                            }), (0, ee.jsx)(he.Z, {
                                width: "100%",
                                height: 300,
                                style: {
                                    transform: "none"
                                }
                            })]
                        }) : (0, ee.jsx)(_t, {
                            strategyPnLSeries: i,
                            tvl: s.toNumber()
                        })]
                    })
                },
                Ot = (0, s.Z)((function (e) {
                    return (0, l.Z)({
                        container: (0, i.Z)({
                            marginTop: "32px",
                            display: "flex",
                            justifyContent: "center",
                            gridGap: "96px",
                            flexWrap: "wrap"
                        }, e.breakpoints.down("md"), {
                            gridGap: "40px"
                        }),
                        leftColumn: (0, i.Z)({
                            flex: 1,
                            minWidth: "480px"
                        }, e.breakpoints.down("xs"), {
                            minWidth: "320px"
                        }),
                        rightColumn: (0, i.Z)({
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
                        }
                    })
                })),
                Ht = function () {
                    var e = (0, E.mi)(),
                        t = Ot(),
                        n = (0, E.Vo)(),
                        r = n.currentCrabPositionValue,
                        a = n.isCrabPositionValueLoading,
                        i = n.refetchCrabTokenBalance;
                    return (0, se.rL)(), (0, o.useEffect)((function () {
                        e()
                    }), [e]), (0, ee.jsxs)(ee.Fragment, {
                        children: [(0, ee.jsx)(c.PB, {
                            title: "Orion Crab Strategy - Stack USDC",
                            description: "Stack USDC when ETH is flat",
                            canonical: F.Gv,
                            openGraph: {
                                images: [{
                                    url: F.Gv + "/images/previews/crab.png",
                                    width: 1200,
                                    height: 630,
                                    alt: "Crab Strategy"
                                }]
                            },
                            twitter: {
                                handle: "@opyn_",
                                site: "@opyn_",
                                cardType: "summary_large_image"
                            }
                        }), (0, ee.jsxs)("div", {
                            className: t.container,
                            children: [(0, ee.jsx)("div", {
                                className: t.leftColumn,
                                children: (0, ee.jsxs)("div", {
                                    className: t.infoContainer,
                                    children: [(0, ee.jsx)(Re, {
                                        currentCrabPositionValue: r,
                                        isCrabPositionValueLoading: a
                                    }), (0, ee.jsx)(Gt, {}), (0, ee.jsx)(xt, {})]
                                })
                            }), (0, ee.jsx)("div", {
                                className: t.rightColumn,
                                children: (0, ee.jsx)("div", {
                                    className: t.tradeSection,
                                    children: (0, ee.jsx)(me, {
                                        refetchCrabTokenBalance: i
                                    })
                                })
                            })]
                        })]
                    })
                }
        },
        24525: function (e, t, n) {
            "use strict";
            var r = n(79692),
                a = n(46293),
                i = (0, r.Z)((function (e) {
                    return (0, a.Z)({
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
            t.Z = i
        },
        51112: function (e, t, n) {
            "use strict";
            n.d(t, {
                J: function () {
                    return r
                }
            });
            var r, a = n(79692),
                i = n(46293),
                o = n(90436),
                s = (n(96577), n(2784), n(33419)),
                l = n(709),
                c = n(31257),
                u = n(52322),
                d = (0, a.Z)((function (e) {
                    return (0, i.Z)({
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
            (0, a.Z)((function (e) {
                return (0, i.Z)({
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
            t.Z = function (e) {
                var t = e.confirmationMessage,
                    n = e.txnHash,
                    r = (e.confirmType, d()),
                    a = (0, s.Dv)(c.vH);
                return (0, u.jsx)("div", {
                    className: r.container,
                    children: (0, u.jsxs)("div", {
                        children: [(0, u.jsxs)(o.Z, {
                            variant: "body1",
                            className: r.confMsg,
                            id: "conf-msg",
                            children: [" ", t, " "]
                        }), (0, u.jsxs)("a", {
                            className: r.etherscan,
                            href: "".concat(l.E6[a]).concat(n),
                            target: "_blank",
                            rel: "noreferrer",
                            children: [" ", "View on Etherscan", " "]
                        })]
                    })
                })
            }
        },
        71169: function (e, t, n) {
            "use strict";
            n.d(t, {
                u: function () {
                    return b
                }
            });
            var r = n(8529),
                a = n(79692),
                i = n(46293),
                o = n(61837),
                s = n(24015),
                l = n(50581),
                c = n(90436),
                u = n(8629),
                d = n(38724),
                p = n(79249),
                f = n(47603),
                x = n(6391),
                m = n.n(x),
                h = n(2784),
                g = n(52322),
                v = (0, a.Z)((function (e) {
                    return (0, i.Z)({
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
                    var t = e.setSlippage,
                        n = e.slippage,
                        a = v(),
                        i = h.useState(n.toString()),
                        x = (0, r.Z)(i, 2),
                        b = x[0],
                        j = x[1],
                        y = h.useState(!1),
                        w = (0, r.Z)(y, 2),
                        Z = w[0],
                        D = w[1];
                    return (0, g.jsxs)("div", {
                        children: [(0, g.jsx)(o.Z, {
                            onClick: function () {
                                D(!0)
                            },
                            className: a.settingsButton,
                            size: "small",
                            children: (0, g.jsx)(f.Z, {})
                        }), (0, g.jsxs)(u.Z, {
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
                            open: Z,
                            onClose: function () {
                                D(!1), t(new(m())(b))
                            },
                            "aria-labelledby": "alert-dialog-title",
                            "aria-describedby": "alert-dialog-description",
                            disableScrollLock: !0,
                            children: [(0, g.jsx)(p.Z, {
                                className: a.dialogTitle,
                                id: "alert-dialog-title",
                                children: (0, g.jsx)("p", {
                                    children: "Slippage Tolerance"
                                })
                            }), (0, g.jsx)(d.Z, {
                                className: a.dialogContent,
                                children: (0, g.jsx)(s.Z, {
                                    size: "small",
                                    value: b,
                                    type: "number",
                                    className: a.slippageInput,
                                    margin: "dense",
                                    onChange: function (e) {
                                        return j(e.target.value)
                                    },
                                    id: "filled-basic",
                                    label: "Slippage Tolerance",
                                    variant: "outlined",
                                    error: Number(b) < .05 || Number(b) > 1,
                                    helperText: Number(b) < .05 ? "Your transaction may fail" : Number(b) > 1 ? "Your transaction may be frontrun" : null,
                                    InputProps: {
                                        endAdornment: (0, g.jsx)(l.Z, {
                                            position: "end",
                                            children: (0, g.jsx)(c.Z, {
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
        60600: function (e, t, n) {
            "use strict";
            n.d(t, {
                L: function () {
                    return h
                }
            });
            var r = n(20406),
                a = n(28526),
                i = n.n(a),
                o = n(6391),
                s = n.n(o),
                l = n(2784),
                c = n(33419),
                u = n(11744),
                d = n(68619),
                p = n(48125),
                f = n(31257),
                x = n(91023),
                m = n(80780);

            function h(e, t, n) {
                var a = (0, p.B0)(),
                    o = (0, c.Dv)(f.wX),
                    h = (0, c.Dv)(f.iu),
                    g = (0, l.useState)(new(s())(0)),
                    v = g[0],
                    b = g[1],
                    j = (0, l.useState)(!0),
                    y = j[0],
                    w = j[1],
                    Z = (0, x.Z)(function () {
                        var l = (0, r.Z)(i().mark((function l(c) {
                            var p, f, x;
                            return i().wrap((function (l) {
                                for (;;) switch (l.prev = l.next) {
                                    case 0:
                                        if (o && h) {
                                            l.next = 2;
                                            break
                                        }
                                        return l.abrupt("return");
                                    case 2:
                                        if (p = new o.eth.Contract(u, e), f = "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", "" !== t) {
                                            l.next = 6;
                                            break
                                        }
                                        throw new Error("Unkown Spender");
                                    case 6:
                                        return l.next = 8, a(p.methods.approve(t, f).send({
                                            from: h
                                        }), (0, r.Z)(i().mark((function e() {
                                            return i().wrap((function (e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        c();
                                                    case 1:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        }))));
                                    case 8:
                                        return l.next = 10, p.methods.allowance(h, t).call();
                                    case 10:
                                        x = l.sent, b((0, d.nw)(new(s())(x.toString()), n || 18));
                                    case 12:
                                    case "end":
                                        return l.stop()
                                }
                            }), l)
                        })));
                        return function (e) {
                            return l.apply(this, arguments)
                        }
                    }(), [o, e, h, t, a, n]);
                return (0, m.Z)((function () {
                    h && o && new o.eth.Contract(u, e).methods.allowance(h, t).call().then((function (e) {
                        b((0, d.nw)(new(s())(e.toString()), n || 18)), w(!1)
                    })).catch((function () {
                        w(!1)
                    }))
                }), [o, t, e, h, n]), {
                    allowance: v,
                    isLoadingAllowance: y,
                    approve: Z
                }
            }
        },
        96532: function (e, t, n) {
            "use strict";
            var r = n(2784);
            t.Z = function (e) {
                var t = (0, r.useRef)(!1),
                    n = (0, r.useCallback)((function () {
                        if (!t.current) {
                            for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                            null === e || void 0 === e || e.apply(void 0, r), t.current = !0
                        }
                    }), [e]);
                return [n, function () {
                    return t.current = !1
                }]
            }
        },
        9462: function (e, t, n) {
            "use strict";
            var r = n(20406),
                a = n(28526),
                i = n.n(a),
                o = n(2784),
                s = n(41436),
                l = n(709);
            t.Z = function () {
                var e = (0, s.Z)().track,
                    t = (0, o.useCallback)(function () {
                        var t = (0, r.Z)(i().mark((function t(n, r) {
                            return i().wrap((function (t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return e("".concat(r, "_CLICK")), t.prev = 1, t.next = 4, n();
                                    case 4:
                                        e("".concat(r, "_SUCCESS")), t.next = 12;
                                        break;
                                    case 7:
                                        t.prev = 7, t.t0 = t.catch(1), (null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.code) === l.dG && e("".concat(r, "_REVERT")), e("".concat(r, "_FAILED"), {
                                            code: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.code
                                        }), console.log(t.t0);
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [1, 7]
                            ])
                        })));
                        return function (e, n) {
                            return t.apply(this, arguments)
                        }
                    }(), [e]);
                return t
            }
        },
        34405: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/strategies/crab", function () {
                return n(12509)
            }])
        }
    },
    function (e) {
        e.O(0, [5232, 5351, 1057, 834, 763, 1672, 8923, 882, 3079, 1839, 925, 519, 6833, 9774, 2888, 179], (function () {
            return t = 34405, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);
//# sourceMappingURL=crab-02e14a0132b0f808.js.map