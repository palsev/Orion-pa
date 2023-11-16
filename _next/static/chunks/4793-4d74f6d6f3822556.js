"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4793], {
        21245: function (e, n, t) {
            var a = t(95235),
                i = t(82269),
                r = t(5806),
                o = t(77892),
                l = t(79692),
                c = t(46293),
                s = t(52322),
                d = ["name", "label", "isChecked", "onInputChange"];

            function p(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    n && (a = a.filter((function (n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, a)
                }
                return t
            }

            function u(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? p(Object(t), !0).forEach((function (n) {
                        (0, a.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach((function (n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var g = (0, l.Z)((function (e) {
                    return (0, c.Z)({
                        root: {
                            padding: 0,
                            marginRight: e.spacing(.5)
                        }
                    })
                })),
                f = (0, l.Z)({
                    root: {
                        marginRight: 0
                    },
                    label: {
                        fontWeight: 500
                    }
                });
            n.Z = function (e) {
                var n = e.name,
                    t = e.label,
                    a = e.isChecked,
                    l = e.onInputChange,
                    c = (0, i.Z)(e, d),
                    p = f(),
                    m = g();
                return (0, s.jsx)(r.Z, {
                    classes: p,
                    control: (0, s.jsx)(o.Z, u({
                        className: m.root,
                        checked: a,
                        onChange: function (e) {
                            return l(e.target.checked)
                        },
                        name: n
                    }, c)),
                    label: t
                })
            }
        },
        4456: function (e, n, t) {
            var a = t(79692),
                i = t(46293),
                r = t(98983),
                o = t(2784),
                l = t(41993),
                c = t(52322),
                s = {
                    label: "DANGER",
                    value: 150,
                    colors: {
                        LIGHT: "#FA7B67",
                        DARK: "#452C28"
                    }
                },
                d = {
                    label: "RISKY",
                    value: 200,
                    colors: {
                        LIGHT: "#F3FF6C",
                        DARK: "#61662b"
                    }
                },
                p = {
                    label: "SAFE",
                    value: 225,
                    colors: {
                        LIGHT: "#67FABF",
                        DARK: "#284539"
                    }
                },
                u = [{
                    value: 150,
                    label: "Min 150%"
                }, {
                    value: 200,
                    label: "200%"
                }, {
                    value: 225,
                    label: "225%"
                }, {
                    value: 300,
                    label: "Max 300%"
                }],
                g = (0, a.Z)((function (e) {
                    return (0, i.Z)({
                        container: {
                            width: "100%",
                            marginLeft: "auto",
                            marginRight: "auto"
                        },
                        rail: {
                            opacity: .9,
                            background: "linear-gradient(to right, ".concat(s.colors.LIGHT, ", ").concat(s.colors.LIGHT, " 33.4%, ").concat(d.colors.LIGHT, " 33.4%, ").concat(d.colors.LIGHT, " 50%,  ").concat(p.colors.LIGHT, " 50%, ").concat(p.colors.LIGHT, "  )")
                        },
                        track: {
                            background: "transparent"
                        },
                        mark: {
                            background: e.palette.background.lightStone
                        },
                        markLabel: {
                            fontFamily: "DM Mono",
                            color: "#fff !important",
                            marginTop: "6px",
                            '&[data-index="0"]': {
                                transform: "none",
                                marginLeft: "0 !important"
                            },
                            '&[data-index="3"]': {
                                transform: "translateX(-100%)"
                            }
                        },
                        thumb: {
                            visibility: "hidden",
                            "&:focus, &:hover, &.Mui-active": {
                                visibility: "hidden"
                            }
                        }
                    })
                })),
                f = (0, a.Z)((function () {
                    return (0, i.Z)({
                        popper: {
                            zIndex: 1e3
                        },
                        tooltip: {
                            padding: "4px 8px",
                            fontSize: "12px",
                            fontWeight: 500,
                            backgroundColor: function (e) {
                                return e.value < d.value ? s.colors.DARK : e.value < p.value ? d.colors.DARK : p.colors.DARK
                            },
                            color: function (e) {
                                return e.value < d.value ? s.colors.LIGHT : e.value < p.value ? d.colors.LIGHT : p.colors.LIGHT
                            }
                        }
                    })
                }));

            function m(e) {
                var n = e.children,
                    t = e.open,
                    a = e.value,
                    i = f({
                        value: a
                    }),
                    o = a < 200 ? "Danger" : a < 225 ? "Risky" : "Safe";
                return (0, c.jsx)(r.ZP, {
                    open: t,
                    enterTouchDelay: 0,
                    placement: "right-end",
                    title: o,
                    classes: i,
                    PopperProps: {
                        modifiers: {
                            offset: {
                                offset: "4,-37"
                            }
                        }
                    },
                    children: n
                })
            }
            n.Z = function (e) {
                var n = e.id,
                    t = e.collatRatio,
                    a = e.onCollatRatioChange,
                    i = e.minCollatRatio,
                    r = e.className,
                    s = (0, o.useCallback)((function (e) {
                        e < i || a(e)
                    }), [i, a]),
                    d = g();
                return (0, c.jsx)("div", {
                    className: d.container,
                    id: n,
                    children: (0, c.jsx)(l.Z, {
                        value: t,
                        ValueLabelComponent: m,
                        valueLabelDisplay: "on",
                        onChange: function (e, n) {
                            return s(n)
                        },
                        step: 1,
                        classes: {
                            rail: d.rail,
                            track: d.track,
                            mark: d.mark,
                            markLabel: d.markLabel,
                            thumb: d.thumb
                        },
                        className: r,
                        marks: u,
                        min: 150,
                        max: 300,
                        id: n + "-slider"
                    })
                })
            }
        },
        41993: function (e, n, t) {
            var a = t(93756),
                i = t(34505),
                r = (0, t(74719).Z)((function (e) {
                    return {
                        thumb: {
                            width: "3px",
                            borderRadius: "20%",
                            marginLeft: 0,
                            height: 15
                        },
                        markLabel: {
                            fontSize: ".7rem"
                        },
                        rail: {
                            height: 5
                        },
                        root: {
                            height: 5,
                            color: e.palette.text.secondary,
                            '& .MuiSlider-markLabel[data-index="0"]': {
                                marginLeft: "22px",
                                color: e.palette.error.main
                            },
                            '& .MuiSlider-markLabel[data-index="1"]': {
                                color: i.Z[700]
                            },
                            '& .MuiSlider-mark[data-index="1"]': {
                                color: i.Z[700]
                            },
                            '& .MuiSlider-markLabel[data-index="2"]': {
                                color: e.palette.success.main
                            },
                            '& .MuiSlider-mark[data-index="2"]': {
                                color: e.palette.success.main
                            }
                        },
                        track: {
                            height: 5
                        },
                        mark: {
                            height: 5
                        }
                    }
                }))(a.Z);
            n.Z = r
        },
        14902: function (e, n, t) {
            t.d(n, {
                p: function () {
                    return w
                }
            });
            var a = t(8529),
                i = t(79692),
                r = t(46293),
                o = t(98983),
                l = t(61837),
                c = t(77277),
                s = t(42824),
                d = t(8629),
                p = t(38724),
                u = t(79249),
                g = t(87685),
                f = t(2997),
                m = t(2784),
                x = t(55606),
                h = t(66930),
                b = t(31257),
                v = t(33419),
                Z = t(42277),
                j = t(52322),
                y = (0, i.Z)((function (e) {
                    return (0, r.Z)({
                        dialog: {
                            textAlign: "center"
                        },
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
                        iframeBox: {
                            width: "800px",
                            height: "80vh",
                            border: 0,
                            borderRadius: "30px",
                            margin: "0 auto 20px",
                            display: "block",
                            zIndex: 1
                        },
                        uniswapWarning: {
                            color: s.Z[700],
                            fontWeight: 600,
                            fontSize: 15
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
                        btn: {
                            margin: "20px 0",
                            textTransform: "none",
                            textAlign: "center",
                            color: "#000",
                            backgroundColor: e.palette.primary.main,
                            "&:hover": {
                                backgroundColor: e.palette.primary.dark
                            }
                        }
                    })
                })),
                w = function (e) {
                    var n = e.text,
                        t = e.closePosition,
                        i = y(),
                        r = (0, v.Dv)(Z.pK).oSqueeth,
                        s = (0, v.Dv)(b.vH),
                        w = (0, h.Z)(),
                        C = (0, a.Z)(w, 2),
                        k = C[0],
                        T = C[1],
                        S = m.useState(!1),
                        N = (0, a.Z)(S, 2),
                        I = N[0],
                        D = N[1],
                        L = function () {
                            D(!1)
                        };
                    return (0, j.jsxs)("div", {
                        children: [(0, j.jsx)(o.ZP, {
                            title: x.Bm.UniswapLoading,
                            children: (0, j.jsx)(c.Z, {
                                className: i.btn,
                                variant: "outlined",
                                onClick: function () {
                                    D(!0)
                                },
                                children: (0, j.jsx)(j.Fragment, {
                                    children: n
                                })
                            })
                        }), (0, j.jsxs)(d.Z, {
                            PaperProps: {
                                style: {
                                    borderRadius: 20
                                }
                            },
                            BackdropProps: {
                                style: {
                                    backdropFilter: "blur(20px)"
                                }
                            },
                            maxWidth: "lg",
                            open: I,
                            onClose: L,
                            "aria-labelledby": "alert-dialog-title",
                            "aria-describedby": "alert-dialog-description",
                            children: [(0, j.jsxs)(u.Z, {
                                className: i.dialogTitle,
                                id: "alert-dialog-title",
                                children: [(0, j.jsx)("p", {
                                    children: "Deposit Orion and ETH into Uniswap V3 Pool \ud83e\udd84"
                                }), (0, j.jsxs)(c.Z, {
                                    variant: "outlined",
                                    color: "primary",
                                    onClick: function () {
                                        T(r)
                                    },
                                    children: [" ", k ? (0, j.jsx)(j.Fragment, {
                                        children: "Copied"
                                    }) : (0, j.jsxs)(j.Fragment, {
                                        children: ["oORN: ", null === r || void 0 === r ? void 0 : r.substring(0, 6), "...", null === r || void 0 === r ? void 0 : r.substring(r.length - 4)]
                                    })]
                                }), (0, j.jsx)(l.Z, {
                                    edge: "start",
                                    onClick: L,
                                    "aria-label": "close",
                                    children: (0, j.jsx)(g.Z, {
                                        style: {
                                            color: "#fff"
                                        }
                                    })
                                })]
                            }), (0, j.jsxs)(p.Z, {
                                className: i.dialogContent,
                                children: [(0, j.jsxs)("div", {
                                    className: i.uniswapHeaderDiv,
                                    children: [(0, j.jsx)("p", {
                                        className: i.uniswapWarning,
                                        children: "Make sure your wallet is connected to Uniswap"
                                    }), (0, j.jsxs)("a", {
                                        className: i.uniOpenBtn,
                                        href: t ? x.xG[s] : x.r1[s],
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: [(0, j.jsx)("p", {
                                            children: "Open in Uniswap"
                                        }), (0, j.jsx)(f.Z, {
                                            style: {
                                                fontSize: 16,
                                                marginLeft: "4px"
                                            },
                                            fontSize: "small"
                                        })]
                                    })]
                                }), (0, j.jsx)("iframe", {
                                    className: i.iframeBox,
                                    src: t ? x.xG[s] : x.r1[s]
                                })]
                            })]
                        })]
                    })
                }
        },
        3652: function (e, n, t) {
            var a = t(79692),
                i = t(46293),
                r = t(90436),
                o = (t(2784), t(33419)),
                l = t(709),
                c = t(31257),
                s = t(52322),
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
                        squeethCat: {
                            marginTop: e.spacing(6),
                            marginBottom: e.spacing(6)
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
                        },
                        img: {
                            borderRadius: e.spacing(2)
                        }
                    })
                }));
            n.Z = function (e) {
                var n = e.txnHash,
                    t = d(),
                    a = (0, o.Dv)(c.vH);
                return (0, s.jsx)("div", {
                    className: t.container,
                    children: (0, s.jsxs)("div", {
                        children: [(0, s.jsx)(r.Z, {
                            variant: "body1",
                            className: t.confMsg,
                            children: "You cancelled the transaction"
                        }), (0, s.jsx)("a", {
                            className: t.etherscan,
                            href: "".concat(l.E6[a]).concat(n),
                            target: "_blank",
                            rel: "noreferrer",
                            children: "View on Etherscan"
                        })]
                    })
                })
            }
        },
        51112: function (e, n, t) {
            t.d(n, {
                J: function () {
                    return a
                }
            });
            var a, i = t(79692),
                r = t(46293),
                o = t(90436),
                l = (t(96577), t(2784), t(33419)),
                c = t(709),
                s = t(31257),
                d = t(52322),
                p = (0, i.Z)((function (e) {
                    return (0, r.Z)({
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
                return (0, r.Z)({
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
            }(a || (a = {}));
            n.Z = function (e) {
                var n = e.confirmationMessage,
                    t = e.txnHash,
                    a = (e.confirmType, p()),
                    i = (0, l.Dv)(s.vH);
                return (0, d.jsx)("div", {
                    className: a.container,
                    children: (0, d.jsxs)("div", {
                        children: [(0, d.jsxs)(o.Z, {
                            variant: "body1",
                            className: a.confMsg,
                            id: "conf-msg",
                            children: [" ", n, " "]
                        }), (0, d.jsxs)("a", {
                            className: a.etherscan,
                            href: "".concat(c.E6[i]).concat(t),
                            target: "_blank",
                            rel: "noreferrer",
                            children: [" ", "View on Etherscan", " "]
                        })]
                    })
                })
            }
        },
        40868: function (e, n, t) {
            var a = t(20406),
                i = t(8529),
                r = t(28526),
                o = t.n(r),
                l = t(79692),
                c = t(46293),
                s = t(90436),
                d = t(98983),
                p = t(67020),
                u = t(82113),
                g = t(4614),
                f = t(6391),
                m = t.n(f),
                x = t(33419),
                h = t(68715),
                b = t(2784),
                v = t(54073),
                Z = t.n(v),
                j = t(52001),
                y = t(43872),
                w = t(14902),
                C = t(71169),
                k = t(90765),
                T = t(60600),
                S = t(91023),
                N = t(80780),
                I = t(52992),
                D = t(13416),
                L = t(48965),
                H = t(68619),
                F = t(29150),
                P = t(42277),
                R = t(67448),
                A = t(74156),
                B = t(53887),
                O = t(31257),
                G = t(48125),
                W = t(709),
                z = t(58831),
                E = t(82375),
                K = t(46785),
                M = t(3652),
                q = t(51112),
                Q = t(27203),
                U = t(37175),
                _ = t(73691),
                J = t(55606),
                V = t(82726),
                X = t(52322),
                Y = (0, l.Z)((function (e) {
                    return (0, c.Z)({
                        header: {
                            color: e.palette.primary.main
                        },
                        title: {
                            fontSize: "20px",
                            fontWeight: 700,
                            letterSpacing: "-0.01em",
                            marginBottom: "24px"
                        },
                        sectionTitle: {
                            fontSize: "20px",
                            fontWeight: 700,
                            letterSpacing: "-0.01em",
                            marginBottom: "16px"
                        },
                        body: {
                            padding: e.spacing(2, 12),
                            margin: "auto",
                            display: "flex",
                            justifyContent: "space-around"
                        },
                        subHeading: {
                            color: e.palette.text.secondary
                        },
                        thirdHeading: {
                            marginTop: e.spacing(2),
                            paddingLeft: e.spacing(1),
                            paddingRight: e.spacing(1)
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
                        divider: {
                            margin: e.spacing(2, 0),
                            width: "300px",
                            marginLeft: "auto",
                            marginRight: "auto"
                        },
                        details: {
                            marginTop: e.spacing(4),
                            width: "65%"
                        },
                        buyCard: {
                            marginTop: e.spacing(4),
                            marginLeft: e.spacing(2)
                        },
                        cardTitle: {
                            color: e.palette.primary.main,
                            marginTop: e.spacing(4)
                        },
                        cardSubTxt: {
                            color: e.palette.text.secondary,
                            lineHeight: "1.75rem",
                            fontSize: "16px",
                            width: "90%"
                        },
                        payoff: {
                            color: e.palette.text.secondary,
                            lineHeight: "1.75rem",
                            fontSize: "16px"
                        },
                        cardDetail: {
                            color: e.palette.text.secondary,
                            lineHeight: "1.75rem",
                            fontSize: "16px",
                            marginTop: e.spacing(4)
                        },
                        amountInput: {
                            backgroundColor: e.palette.success.main,
                            "&:hover": {
                                backgroundColor: e.palette.success.dark
                            }
                        },
                        innerCard: {
                            textAlign: "center",
                            padding: e.spacing(2),
                            paddingBottom: e.spacing(8),
                            background: e.palette.background.default,
                            border: "1px solid ".concat(e.palette.background.stone)
                        },
                        expand: {
                            transform: "rotate(270deg)",
                            color: e.palette.primary.main,
                            transition: e.transitions.create("transform", {
                                duration: e.transitions.duration.shortest
                            }),
                            marginTop: e.spacing(6)
                        },
                        expandOpen: {
                            transform: "rotate(180deg)",
                            color: e.palette.primary.main
                        },
                        dialog: {
                            padding: e.spacing(2)
                        },
                        dialogHeader: {
                            display: "flex",
                            alignItems: "center"
                        },
                        dialogIcon: {
                            marginRight: e.spacing(1),
                            color: e.palette.warning.main
                        },
                        txItem: {
                            marginTop: e.spacing(1),
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
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
                        linkHover: {
                            "&:hover": {
                                opacity: .7
                            }
                        },
                        anchor: {
                            color: "#FF007A",
                            fontSize: "16px"
                        },
                        settingsContainer: {
                            display: "flex",
                            justify: "space-between",
                            alignItems: "center"
                        },
                        settingsButton: {
                            marginTop: e.spacing(2),
                            marginLeft: e.spacing(10),
                            justifyContent: "right",
                            alignSelf: "center"
                        },
                        displayBlock: {
                            display: "block"
                        },
                        displayNone: {
                            display: "none"
                        },
                        lightStoneBackground: {
                            backgroundColor: e.palette.background.lightStone
                        },
                        txStatus: {
                            marginTop: e.spacing(4)
                        },
                        labelContainer: {
                            display: "flex",
                            alignItems: "center",
                            color: "rgba(255, 255, 255, 0.5)"
                        },
                        label: {
                            fontSize: "15px",
                            fontWeight: 500,
                            width: "max-content"
                        },
                        infoIcon: {
                            fontSize: "15px",
                            marginLeft: e.spacing(.5)
                        }
                    })
                })),
                $ = function (e) {
                    var n = e.label,
                        t = e.tooltipTitle,
                        a = Y();
                    return (0, X.jsxs)("div", {
                        className: a.labelContainer,
                        children: [(0, X.jsx)(s.Z, {
                            className: a.label,
                            children: n
                        }), (0, X.jsx)(d.ZP, {
                            title: t,
                            children: (0, X.jsx)(V.Z, {
                                fontSize: "small",
                                className: a.infoIcon
                            })
                        })]
                    })
                },
                ee = function (e) {
                    var n, t, r = e.activeStep,
                        l = void 0 === r ? 0 : r,
                        c = e.showTitle,
                        d = (0, b.useState)(!1),
                        f = d[0],
                        v = d[1],
                        T = (0, A.ot)(),
                        V = (0, A.tT)(),
                        ee = (0, G.tM)().data,
                        ne = Number((0, H.nw)(null !== ee && void 0 !== ee ? ee : W.HW, 18).toFixed(4)),
                        te = Y(),
                        ae = (0, G.hS)(),
                        ie = ae.cancelled,
                        re = ae.confirmed,
                        oe = ae.loading,
                        le = ae.transactionData,
                        ce = ae.resetTxCancelled,
                        se = ae.resetTransactionData,
                        de = (0, A.NB)(),
                        pe = (0, x.KO)(B.QF),
                        ue = (0, i.Z)(pe, 2),
                        ge = ue[0],
                        fe = ue[1],
                        me = (0, x.KO)(B.UQ),
                        xe = (0, i.Z)(me, 2),
                        he = xe[0],
                        be = xe[1],
                        ve = (0, x.b9)(B.gL),
                        Ze = (0, x.KO)(B.XN),
                        je = (0, i.Z)(Ze, 2),
                        ye = je[0],
                        we = je[1],
                        Ce = (0, D.xD)(),
                        ke = (0, L.W)(),
                        Te = ke.loading,
                        Se = ke.data,
                        Ne = (0, _.L)(),
                        Ie = Ne.isRestricted,
                        De = Ne.isWithdrawAllowed,
                        Le = (0, R.nG)().squeethAmount,
                        He = (0, x.Dv)(O.QS),
                        Fe = (0, x.Dv)(O.dh),
                        Pe = (0, x.Dv)(P.FC),
                        Re = (0, G.rs)(),
                        Ae = (0, x.Dv)(F.j_),
                        Be = (0, x.Dv)(F.e1),
                        Oe = (0, x.KO)(B.mz),
                        Ge = (0, i.Z)(Oe, 2),
                        We = Ge[0],
                        ze = Ge[1],
                        Ee = (0, x.KO)(B.JG),
                        Ke = (0, i.Z)(Ee, 2),
                        Me = Ke[0],
                        qe = Ke[1],
                        Qe = (0, x.KO)(B.Gi),
                        Ue = (0, i.Z)(Qe, 2),
                        _e = Ue[0],
                        Je = Ue[1],
                        Ve = (0, h.oC)(B.mz),
                        Xe = (0, h.oC)(B.JG),
                        Ye = (0, h.oC)(B.Gi),
                        $e = (0, x.b9)(B.GF),
                        en = (0, S.Z)((function (e, n) {
                            return 0 === parseFloat(e) ? (Ye(), void Xe()) : (be(!0), T(new(m())(e), n).then((function (e) {
                                e && (Je(e), qe(e.amountOut.toString()), fe(e.amountOut.toFixed(6).toString()), be(!1))
                            })))
                        }), [T, Ye, Xe, be, Je, qe, fe]),
                        nn = (0, I.Z)((function () {
                            return Z()(en, 500)
                        }), [en]);
                    (0, N.Z)((function () {
                        nn(We, ye)
                    }), [We, ye, nn]);
                    var tn, an, rn, on, ln = (0, S.Z)((function (e) {
                            ze(e)
                        }), [ze]),
                        cn = (0, S.Z)((function (e, n) {
                            return be(!0), V(new(m())(e), n).then((function (e) {
                                ze(e.amountIn.toString()), be(!1)
                            }))
                        }), [be, V, ze]),
                        sn = (0, I.Z)((function () {
                            return Z()(cn, 500)
                        }), [cn]),
                        dn = (0, S.Z)((function (e) {
                            qe(e), sn(e, ye)
                        }), [ye, qe, sn]);
                    if (He && (new(m())(We).gt(ne) && (tn = "Insufficient ETH balance"), Pe && (an = "Close your short position to open a long"), new(m())(_e.priceImpact).gt(3) && (rn = "High Price Impact"), Be >= 1.3 * Ae.funding && Number(We) > 0)) {
                        var pn = 100 * (Be / Ae.funding - 1);
                        on = "Premiums are ".concat(pn.toFixed(0), "% above yesterday. Consider buying later")
                    }
                    var un = rn && !f && !tn && !Pe,
                        gn = an || (rn || (on || ""));
                    (0, N.Z)((function () {
                        oe && v(!1)
                    }), [oe]);
                    var fn = (0, S.Z)((0, a.Z)(o().mark((function e() {
                            return o().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return v(!0), e.prev = 1, e.next = 4, de(new(m())(We), (function () {
                                            ve(!0), $e(!0), Ve(), Xe()
                                        }));
                                    case 4:
                                        e.next = 10;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(1), console.log(e.t0), v(!1);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 6]
                            ])
                        }))), [de, We, Ve, Xe, $e, ve]),
                        mn = Se.times(Me).toNumber(),
                        xn = isNaN(ye.toNumber()) ? 0 : ye.toNumber(),
                        hn = isNaN(Number(_e.priceImpact)) ? 0 : Number(_e.priceImpact),
                        bn = hn > 3 ? "error" : void 0;
                    return (0, X.jsx)("div", {
                        id: "open-long-card",
                        children: re ? (0, X.jsxs)("div", {
                            className: te.txStatus,
                            children: [(0, X.jsx)(q.Z, {
                                confirmationMessage: "Bought ".concat(ge, " Orion"),
                                txnHash: null !== (n = null === le || void 0 === le ? void 0 : le.hash) && void 0 !== n ? n : "",
                                confirmType: q.J.TRADE
                            }), (0, X.jsx)("div", {
                                className: te.buttonDiv,
                                children: (0, X.jsx)(j.F2, {
                                    fullWidth: !0,
                                    id: "open-long-close-btn",
                                    variant: "contained",
                                    onClick: function () {
                                        se()
                                    },
                                    children: "Close"
                                })
                            })]
                        }) : ie ? (0, X.jsxs)("div", {
                            className: te.txStatus,
                            children: [(0, X.jsx)(M.Z, {
                                txnHash: null !== (t = null === le || void 0 === le ? void 0 : le.hash) && void 0 !== t ? t : ""
                            }), (0, X.jsx)("div", {
                                className: te.buttonDiv,
                                children: (0, X.jsx)(j.F2, {
                                    fullWidth: !0,
                                    variant: "contained",
                                    onClick: function () {
                                        se(), ce()
                                    },
                                    children: "Close"
                                })
                            })]
                        }) : (0, X.jsx)("div", {
                            children: 0 === l ? (0, X.jsxs)(X.Fragment, {
                                children: [c && (0, X.jsx)(s.Z, {
                                    variant: "h4",
                                    className: te.title,
                                    children: "Pay ETH to buy oORN"
                                }), (0, X.jsx)(u.Z, {
                                    in: !!gn,
                                    children: (0, X.jsx)(k.Z, {
                                        severity: "error",
                                        marginTop: "24px",
                                        children: gn
                                    })
                                }), (0, X.jsxs)(p.Z, {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    flexWrap: "wrap",
                                    gridGap: "12px",
                                    marginTop: "24px",
                                    children: [(0, X.jsx)(Q.Z, {
                                        label: "Slippage",
                                        value: (0, z.uf)(xn) + "%",
                                        isSmall: !0,
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        gridGap: "12px"
                                    }), (0, X.jsxs)(p.Z, {
                                        display: "flex",
                                        alignItems: "center",
                                        gridGap: "12px",
                                        flex: "1",
                                        children: [(0, X.jsx)(Q.Z, {
                                            label: "Price Impact",
                                            value: (0, z.uf)(hn) + "%",
                                            textColor: bn,
                                            isSmall: !0,
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            gridGap: "12px"
                                        }), (0, X.jsx)(C.u, {
                                            setSlippage: function (e) {
                                                return we(e)
                                            },
                                            slippage: ye
                                        })]
                                    })]
                                }), (0, X.jsxs)(p.Z, {
                                    marginTop: "24px",
                                    children: [(0, X.jsx)(s.Z, {
                                        variant: "h4",
                                        className: te.sectionTitle,
                                        children: "Projection"
                                    }), (0, X.jsxs)(p.Z, {
                                        display: "flex",
                                        alignItems: "center",
                                        flexWrap: "wrap",
                                        gridGap: "12px",
                                        children: [(0, X.jsx)(Q.Z, {
                                            label: (0, X.jsx)($, {
                                                label: "Value if ETH -50%",
                                                tooltipTitle: J.Bm.ETHDown50
                                            }),
                                            value: Te ? "loading..." : (0, z.xG)(Number(.25 * mn)),
                                            isSmall: !0
                                        }), (0, X.jsx)(Q.Z, {
                                            label: (0, X.jsx)($, {
                                                label: "Value if ETH 2x",
                                                tooltipTitle: J.Bm.ETHUp2x
                                            }),
                                            value: Te ? "loading..." : (0, z.xG)(Number(4 * mn)),
                                            isSmall: !0
                                        })]
                                    })]
                                }), Ie && (0, X.jsx)(U.Z, {
                                    withdrawAllowed: De,
                                    marginTop: "24px"
                                }), (0, X.jsx)(p.Z, {
                                    marginTop: "24px",
                                    className: te.buttonDiv,
                                    children: Ie ? (0, X.jsx)(j.F2, {
                                        fullWidth: !0,
                                        variant: "contained",
                                        onClick: Re,
                                        disabled: !0,
                                        id: "open-long-restricted-btn",
                                        children: "Unavailable"
                                    }) : He ? (0, X.jsx)(j.F2, {
                                        fullWidth: !0,
                                        variant: un || on ? "outlined" : "contained",
                                        onClick: fn,
                                        disabled: !Fe || !!f || oe || !!tn || !!an || "0" === Me || he,
                                        style: un || on ? {
                                            color: "#f5475c",
                                            backgroundColor: "transparent",
                                            borderColor: "#f5475c"
                                        } : {},
                                        id: "open-long-submit-tx-btn",
                                        children: Fe ? f || oe || he ? (0, X.jsx)(g.Z, {
                                            color: "primary",
                                            size: "1.5rem"
                                        }) : un ? "Buy oORN Anyway" : "Buy oORN" : "Unsupported Network"
                                    }) : (0, X.jsx)(j.F2, {
                                        fullWidth: !0,
                                        variant: "contained",
                                        onClick: Re,
                                        disabled: !!f,
                                        id: "open-long-connect-wallet-btn",
                                        children: "Connect Wallet"
                                    })
                                })]
                            }) : (0, X.jsx)("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "center",
                                    margin: "20px 0"
                                },
                                children: (0, X.jsx)(w.p, {})
                            })
                        })
                    })
                },
                ne = function () {
                    var e, n, t, r, l, c = (0, b.useState)(!1),
                        d = c[0],
                        f = c[1],
                        v = (0, b.useState)(!1),
                        w = v[0],
                        F = v[1],
                        J = Y(),
                        V = (0, G.hS)(),
                        $ = V.cancelled,
                        ee = V.confirmed,
                        ne = V.loading,
                        te = V.transactionData,
                        ae = V.resetTxCancelled,
                        ie = V.resetTransactionData,
                        re = (0, x.Dv)(P.pK),
                        oe = re.swapRouter2,
                        le = re.oSqueeth,
                        ce = (0, A.H5)(),
                        se = (0, A.d0)(),
                        de = (0, A.v8)(),
                        pe = (0, G.tM)().data,
                        ue = Number((0, H.nw)(null !== pe && void 0 !== pe ? pe : W.HW, 18).toFixed(4)),
                        ge = (0, x.KO)(B.QF),
                        fe = (0, i.Z)(ge, 2),
                        me = fe[0],
                        xe = fe[1],
                        he = (0, x.KO)(B.UQ),
                        be = (0, i.Z)(he, 2),
                        ve = be[0],
                        Ze = be[1],
                        je = (0, x.KO)(B.Gi),
                        ye = (0, i.Z)(je, 2),
                        we = ye[0],
                        Ce = ye[1],
                        ke = (0, x.KO)(B.mz),
                        Te = (0, i.Z)(ke, 2),
                        Se = Te[0],
                        Ne = Te[1],
                        Ie = (0, x.KO)(B.JG),
                        De = (0, i.Z)(Ie, 2),
                        Le = De[0],
                        He = De[1],
                        Fe = (0, x.b9)(B.gL),
                        Pe = (0, x.b9)(B.GF),
                        Re = (0, x.KO)(B.XN),
                        Ae = (0, i.Z)(Re, 2),
                        Be = Ae[0],
                        Oe = Ae[1],
                        Ge = (0, D.xD)(),
                        We = (0, L.W)().data,
                        ze = (0, I.Z)((function () {
                            return new(m())(Le)
                        }), [Le]),
                        Ee = (0, T.L)(le, oe),
                        Ke = Ee.allowance,
                        Me = Ee.approve,
                        qe = (0, x.KO)(O.e6),
                        Qe = (0, i.Z)(qe, 2),
                        Ue = Qe[0],
                        _e = Qe[1],
                        Je = (0, _.L)(),
                        Ve = Je.isRestricted,
                        Xe = Je.isWithdrawAllowed,
                        Ye = (0, x.Dv)(O.dh),
                        $e = (0, x.Dv)(O.QS),
                        en = (0, G.rs)(),
                        nn = (0, R.nG)().squeethAmount,
                        tn = (0, R.u0)().gt(0),
                        an = (0, h.oC)(B.mz),
                        rn = (0, h.oC)(B.JG),
                        on = (0, h.oC)(B.Gi);
                    $e && (nn.lt(ze) && (t = "Insufficient oORN balance"), tn && (r = "Close your short position to open a long"), new(m())(we.priceImpact).gt(3) && (l = "High Price Impact"));
                    var ln = l && !t && !d && !nn.isZero() && !tn,
                        cn = r || (l || ""),
                        sn = (0, S.Z)((0, a.Z)(o().mark((function e() {
                            return o().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (f(!0), e.prev = 1, !Ke.lt(ze) || w) {
                                            e.next = 8;
                                            break
                                        }
                                        return _e(!0), e.next = 6, Me((function () {
                                            F(!0), f(!1)
                                        }));
                                    case 6:
                                        e.next = 10;
                                        break;
                                    case 8:
                                        return e.next = 10, ce(ze, (function () {
                                            _e(!1), Fe(!0), Pe(!0), an(), rn()
                                        }));
                                    case 10:
                                        e.next = 16;
                                        break;
                                    case 12:
                                        e.prev = 12, e.t0 = e.catch(1), console.log(e.t0), f(!1);
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 12]
                            ])
                        }))), [ze, w, an, rn, ce, _e, Pe, Fe, Ke, Me]);
                    (0, N.Z)((function () {
                        ne && f(!1)
                    }), [ne]);
                    var dn = (0, S.Z)((function (e, n) {
                            return 0 === parseFloat(e) ? (on(), void an()) : (Ze(!0), de(new(m())(e), n).then((function (n) {
                                n && (Ce(n), Ne(n.amountOut.toString()), xe(Number(e).toFixed(6)), Ze(!1))
                            })))
                        }), [de, an, on, Ce, Ne, xe, Ze]),
                        pn = (0, I.Z)((function () {
                            return Z()(dn, 500)
                        }), [dn]);
                    (0, N.Z)((function () {
                        pn(Le, Be)
                    }), [Be, Le, pn]);
                    var un = (0, S.Z)((function (e) {
                            return He(e)
                        }), [He]),
                        gn = (0, S.Z)((function (e, n) {
                            return Ze(!0), se(new(m())(e), n).then((function (e) {
                                He(e.amountIn.toString()), Ze(!1)
                            }))
                        }), [Ze, se, He]),
                        fn = (0, I.Z)((function () {
                            return Z()(gn, 500)
                        }), [gn]),
                        mn = (0, S.Z)((function (e) {
                            Ne(e), fn(e, Be)
                        }), [Ne, Be, fn]),
                        xn = isNaN(Be.toNumber()) ? 0 : Be.toNumber(),
                        hn = isNaN(Number(we.priceImpact)) ? 0 : Number(we.priceImpact),
                        bn = hn > 3 ? "error" : void 0;
                    return (0, X.jsx)("div", {
                        id: "close-long-card",
                        children: ee && !Ue ? (0, X.jsxs)(X.Fragment, {
                            children: [(0, X.jsx)(q.Z, {
                                confirmationMessage: "Sold ".concat(me, " Orion"),
                                txnHash: null !== (e = null === te || void 0 === te ? void 0 : te.hash) && void 0 !== e ? e : "",
                                confirmType: q.J.TRADE
                            }), (0, X.jsx)("div", {
                                className: J.buttonDiv,
                                children: (0, X.jsx)(j.F2, {
                                    fullWidth: !0,
                                    id: "close-long-close-btn",
                                    variant: "contained",
                                    onClick: function () {
                                        ie()
                                    },
                                    children: "Close"
                                })
                            })]
                        }) : $ ? (0, X.jsxs)(X.Fragment, {
                            children: [(0, X.jsx)(M.Z, {
                                txnHash: null !== (n = null === te || void 0 === te ? void 0 : te.hash) && void 0 !== n ? n : ""
                            }), (0, X.jsx)("div", {
                                className: J.buttonDiv,
                                children: (0, X.jsx)(j.F2, {
                                    fullWidth: !0,
                                    variant: "contained",
                                    onClick: function () {
                                        ie(), ae()
                                    },
                                    children: "Close"
                                })
                            })]
                        }) : (0, X.jsxs)(X.Fragment, {
                            children: [(0, X.jsx)(s.Z, {
                                variant: "h4",
                                className: J.title,
                                children: "Sell oORN to get ETH back"
                            }), (0, X.jsx)(u.Z, {
                                in: !!cn,
                                children: (0, X.jsx)(k.Z, {
                                    severity: "error",
                                    marginTop: "24px",
                                    children: cn
                                })
                            }), (0, X.jsxs)(p.Z, {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gridGap: "12px",
                                marginTop: "24px",
                                flexWrap: "wrap",
                                children: [(0, X.jsx)(Q.Z, {
                                    label: "Slippage",
                                    value: (0, z.uf)(xn) + "%",
                                    isSmall: !0,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    gridGap: "12px"
                                }), (0, X.jsxs)(p.Z, {
                                    display: "flex",
                                    alignItems: "center",
                                    gridGap: "12px",
                                    flex: "1",
                                    children: [(0, X.jsx)(Q.Z, {
                                        label: "Price Impact",
                                        value: (0, z.uf)(hn) + "%",
                                        textColor: bn,
                                        isSmall: !0,
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        gridGap: "12px"
                                    }), (0, X.jsx)(C.u, {
                                        setSlippage: function (e) {
                                            return Oe(e)
                                        },
                                        slippage: Be
                                    })]
                                })]
                            }), Ve && (0, X.jsx)(U.Z, {
                                withdrawAllowed: Xe,
                                marginTop: "24px"
                            }), (0, X.jsx)(p.Z, {
                                marginTop: "24px",
                                className: J.buttonDiv,
                                children: Ve && !Xe ? (0, X.jsx)(j.F2, {
                                    fullWidth: !0,
                                    variant: "contained",
                                    onClick: en,
                                    disabled: !0,
                                    id: "open-long-restricted-btn",
                                    children: "Unavailable"
                                }) : $e ? (0, X.jsx)(j.F2, {
                                    fullWidth: !0,
                                    variant: ln ? "outlined" : "contained",
                                    onClick: sn,
                                    disabled: !Ye || !!d || ne || !!t || !!r || nn.isZero() || "0" === Le || ve,
                                    style: ln ? {
                                        color: "#f5475c",
                                        backgroundColor: "transparent",
                                        borderColor: "#f5475c"
                                    } : {},
                                    id: "close-long-submit-tx-btn",
                                    children: Ye ? d || ne || ve ? (0, X.jsx)(g.Z, {
                                        color: "primary",
                                        size: "1.5rem"
                                    }) : Ke.lt(ze) && !w ? "Approve oORN (1/2)" : ln ? "Sell Anyway" : w ? "Sell to close (2/2)" : "Sell to close" : "Unsupported Network"
                                }) : (0, X.jsx)(j.F2, {
                                    fullWidth: !0,
                                    variant: "contained",
                                    onClick: en,
                                    disabled: !!d,
                                    id: "close-long-connect-wallet-btn",
                                    children: "Connect Wallet"
                                })
                            })]
                        })
                    })
                };
            n.Z = function (e) {
                var n = e.open,
                    t = e.isLPage,
                    a = void 0 !== t && t,
                    i = e.activeStep,
                    r = void 0 === i ? 0 : i,
                    o = e.showTitle,
                    l = void 0 === o || o;
                return n ? (0, X.jsx)(ee, {
                    open: n,
                    isLPage: a,
                    activeStep: r,
                    showTitle: l
                }) : (0, X.jsx)(ne, {
                    isLPage: a,
                    activeStep: r,
                    showTitle: l
                })
            }
        },
        71169: function (e, n, t) {
            t.d(n, {
                u: function () {
                    return v
                }
            });
            var a = t(8529),
                i = t(79692),
                r = t(46293),
                o = t(61837),
                l = t(24015),
                c = t(50581),
                s = t(90436),
                d = t(8629),
                p = t(38724),
                u = t(79249),
                g = t(47603),
                f = t(6391),
                m = t.n(f),
                x = t(2784),
                h = t(52322),
                b = (0, i.Z)((function (e) {
                    return (0, r.Z)({
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
                v = function (e) {
                    var n = e.setSlippage,
                        t = e.slippage,
                        i = b(),
                        r = x.useState(t.toString()),
                        f = (0, a.Z)(r, 2),
                        v = f[0],
                        Z = f[1],
                        j = x.useState(!1),
                        y = (0, a.Z)(j, 2),
                        w = y[0],
                        C = y[1];
                    return (0, h.jsxs)("div", {
                        children: [(0, h.jsx)(o.Z, {
                            onClick: function () {
                                C(!0)
                            },
                            className: i.settingsButton,
                            size: "small",
                            children: (0, h.jsx)(g.Z, {})
                        }), (0, h.jsxs)(d.Z, {
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
                            open: w,
                            onClose: function () {
                                C(!1), n(new(m())(v))
                            },
                            "aria-labelledby": "alert-dialog-title",
                            "aria-describedby": "alert-dialog-description",
                            disableScrollLock: !0,
                            children: [(0, h.jsx)(u.Z, {
                                className: i.dialogTitle,
                                id: "alert-dialog-title",
                                children: (0, h.jsx)("p", {
                                    children: "Slippage Tolerance"
                                })
                            }), (0, h.jsx)(p.Z, {
                                className: i.dialogContent,
                                children: (0, h.jsx)(l.Z, {
                                    size: "small",
                                    value: v,
                                    type: "number",
                                    className: i.slippageInput,
                                    margin: "dense",
                                    onChange: function (e) {
                                        return Z(e.target.value)
                                    },
                                    id: "filled-basic",
                                    label: "Slippage Tolerance",
                                    variant: "outlined",
                                    error: Number(v) < .05 || Number(v) > 1,
                                    helperText: Number(v) < .05 ? "Your transaction may fail" : Number(v) > 1 ? "Your transaction may be frontrun" : null,
                                    InputProps: {
                                        endAdornment: (0, h.jsx)(c.Z, {
                                            position: "end",
                                            children: (0, h.jsx)(s.Z, {
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
            t.d(n, {
                L: function () {
                    return x
                }
            });
            var a = t(20406),
                i = t(28526),
                r = t.n(i),
                o = t(6391),
                l = t.n(o),
                c = t(2784),
                s = t(33419),
                d = t(11744),
                p = t(68619),
                u = t(48125),
                g = t(31257),
                f = t(91023),
                m = t(80780);

            function x(e, n, t) {
                var i = (0, u.B0)(),
                    o = (0, s.Dv)(g.wX),
                    x = (0, s.Dv)(g.iu),
                    h = (0, c.useState)(new(l())(0)),
                    b = h[0],
                    v = h[1],
                    Z = (0, c.useState)(!0),
                    j = Z[0],
                    y = Z[1],
                    w = (0, f.Z)(function () {
                        var c = (0, a.Z)(r().mark((function c(s) {
                            var u, g, f;
                            return r().wrap((function (c) {
                                for (;;) switch (c.prev = c.next) {
                                    case 0:
                                        if (o && x) {
                                            c.next = 2;
                                            break
                                        }
                                        return c.abrupt("return");
                                    case 2:
                                        if (u = new o.eth.Contract(d, e), g = "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", "" !== n) {
                                            c.next = 6;
                                            break
                                        }
                                        throw new Error("Unkown Spender");
                                    case 6:
                                        return c.next = 8, i(u.methods.approve(n, g).send({
                                            from: x
                                        }), (0, a.Z)(r().mark((function e() {
                                            return r().wrap((function (e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        s();
                                                    case 1:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        }))));
                                    case 8:
                                        return c.next = 10, u.methods.allowance(x, n).call();
                                    case 10:
                                        f = c.sent, v((0, p.nw)(new(l())(f.toString()), t || 18));
                                    case 12:
                                    case "end":
                                        return c.stop()
                                }
                            }), c)
                        })));
                        return function (e) {
                            return c.apply(this, arguments)
                        }
                    }(), [o, e, x, n, i, t]);
                return (0, m.Z)((function () {
                    x && o && new o.eth.Contract(d, e).methods.allowance(x, n).call().then((function (e) {
                        v((0, p.nw)(new(l())(e.toString()), t || 18)), y(!1)
                    })).catch((function () {
                        y(!1)
                    }))
                }), [o, n, e, x, t]), {
                    allowance: b,
                    isLoadingAllowance: j,
                    approve: w
                }
            }
        },
        48965: function (e, n, t) {
            t.d(n, {
                W: function () {
                    return c
                }
            });
            var a = t(2784),
                i = t(33419),
                r = t(80208),
                o = t(13416),
                l = t(80780),
                c = function () {
                    var e = (0, a.useState)(!1),
                        n = e[0],
                        t = e[1],
                        c = (0, o.xD)(),
                        s = (0, i.Dv)(r.xo),
                        d = (0, i.Dv)(r.F3),
                        p = s.times(c);
                    return (0, l.Z)((function () {
                        p.isZero() && "" === d ? t(!0) : t(!1)
                    }), [p, d]), {
                        loading: n,
                        data: p,
                        error: d
                    }
                }
        },
        53341: function (e, n, t) {
            t.d(n, {
                p: function () {
                    return p
                }
            });
            var a = t(8529),
                i = t(6391),
                r = t.n(i),
                o = t(33419),
                l = t(2784),
                c = t(13575),
                s = t(42277),
                d = t(80780),
                p = function (e) {
                    var n = (0, o.KO)(s.nK),
                        t = (0, a.Z)(n, 2),
                        i = t[0],
                        p = t[1],
                        u = (0, l.useState)(new(r())(0)),
                        g = u[0],
                        f = u[1],
                        m = (0, o.KO)(s.sx),
                        x = (0, a.Z)(m, 2),
                        h = x[0],
                        b = x[1],
                        v = (0, o.KO)(s.SU),
                        Z = (0, a.Z)(v, 2),
                        j = Z[0],
                        y = Z[1],
                        w = (0, c.vr)();
                    return (0, d.Z)((function () {
                        if (!e) return f(new(r())(0)), p(0), y(0), void b(new(r())(0));
                        f(e.collateralAmount), w(e.collateralAmount, e.shortAmount, e.NFTCollateralId ? Number(e.NFTCollateralId) : void 0).then((function (e) {
                            var n = e.collateralPercent,
                                t = e.liquidationPrice;
                            p(n), y(n), b(new(r())(t))
                        }))
                    }), [w, y, f, p, b, e]), {
                        vault: e,
                        existingCollatPercent: i,
                        existingLiqPrice: h,
                        setCollatPercent: y,
                        collatPercent: j,
                        existingCollat: g
                    }
                }
        },
        46785: function (e, n) {
            n.Z = {
                src: "/_next/static/media/osqth-logo.195aba8e.svg",
                height: 23,
                width: 23
            }
        }
    }
]);
//# sourceMappingURL=4793-4d74f6d6f3822556.js.map