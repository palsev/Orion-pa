(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [892], {
        16393: function (e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function () {
                    return un
                }
            });
            var i, r, o = t(33419),
                a = t(90436),
                s = t(31257),
                l = t(48125),
                c = t(52001),
                d = t(27195),
                u = t(95235),
                p = t(79692),
                h = t(46293),
                x = (0, p.Z)((function (e) {
                    return (0, h.Z)({
                        container: (0, u.Z)({
                            margin: e.spacing(6, 8),
                            width: "800px",
                            marginLeft: "auto",
                            marginRight: "auto",
                            paddingBottom: e.spacing(8)
                        }, e.breakpoints.down("sm"), {
                            width: "100%",
                            padding: e.spacing(0, 2)
                        }),
                        header: {
                            marginTop: e.spacing(8),
                            display: "flex",
                            justifyContent: "space-between"
                        },
                        position: (0, u.Z)({
                            padding: e.spacing(2),
                            backgroundColor: "".concat(e.palette.background.paper, "40"),
                            marginTop: e.spacing(2),
                            borderRadius: e.spacing(1),
                            display: "flex",
                            justifyContent: "space-between"
                        }, e.breakpoints.down("sm"), {
                            display: "block"
                        }),
                        positionData: (0, u.Z)({
                            display: "flex",
                            justifyContent: "space-between",
                            width: "65%"
                        }, e.breakpoints.down("sm"), {
                            marginTop: e.spacing(1),
                            width: "100%"
                        }),
                        shortPositionData: (0, u.Z)({
                            width: "65%"
                        }, e.breakpoints.down("sm"), {
                            marginTop: e.spacing(1),
                            width: "100%"
                        }),
                        innerPositionData: {
                            display: "flex",
                            width: "100%",
                            justifyContent: "space-between"
                        },
                        positionTitle: (0, u.Z)({
                            width: "30%"
                        }, e.breakpoints.down("sm"), {
                            width: "100%"
                        }),
                        empty: {
                            marginTop: e.spacing(2)
                        },
                        green: {
                            color: e.palette.success.main
                        },
                        red: {
                            color: e.palette.error.main
                        },
                        history: {
                            marginTop: e.spacing(8),
                            marginBottom: e.spacing(8)
                        },
                        link: {
                            color: e.palette.primary.main,
                            textDecoration: "underline",
                            fontWeight: 600,
                            fontSize: 14,
                            marginTop: e.spacing(1)
                        },
                        infoIcon: {
                            fontSize: "10px",
                            marginLeft: e.spacing(.5)
                        },
                        tooltipContainer: {
                            marginLeft: ".5em"
                        },
                        dotIcon: {
                            marginRight: "1em"
                        },
                        pnlTitle: {
                            display: "flex",
                            alignItems: "center"
                        },
                        emoji: {
                            width: "18px",
                            maxHeight: "25px"
                        }
                    })
                })),
                m = t(52322),
                v = function () {
                    var e = (0, l.rs)(),
                        n = x(),
                        t = (0, o.Dv)(s.dh);
                    return (0, m.jsxs)("div", {
                        children: [(0, m.jsx)(d.Z, {}), (0, m.jsx)("div", {
                            className: n.container,
                            children: t ? (0, m.jsx)(c.Qj, {
                                style: {
                                    margin: "auto"
                                },
                                onClick: e,
                                children: "Connect Wallet"
                            }) : (0, m.jsx)(a.Z, {
                                children: "Unsupported Network"
                            })
                        })]
                    })
                },
                g = t(98983),
                j = t(67020),
                f = t(16874),
                y = t(6277),
                b = t(91256),
                Z = t(37390),
                w = t(58987),
                T = t(89571),
                D = t(15584),
                P = t(97485),
                S = t(60486),
                O = t(27556),
                L = t(82726),
                k = t(6391),
                A = t.n(k),
                C = t(39097),
                N = t.n(C),
                H = t(2784),
                I = t(69955),
                F = t(55606),
                _ = t(68619),
                E = t(14902),
                U = t(13416),
                W = t(42277),
                q = t(74156),
                V = t(67448),
                R = (0, p.Z)((function (e) {
                    return (0, h.Z)({
                        tableContainer: {
                            flexBasis: "72%",
                            marginRight: "1.5em",
                            marginTop: e.spacing(2),
                            borderRadius: e.spacing(1),
                            backgroundColor: "".concat(e.palette.background.paper, "40"),
                            height: "25vh"
                        },
                        isLPageTableContainer: {
                            flexBasis: "72%",
                            marginTop: e.spacing(2),
                            marginRight: "1.5em"
                        },
                        table: {
                            minWidth: 650
                        },
                        listLink: {
                            color: "#FF007A"
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
                        tokenIdLink: {
                            textDecoration: "underline",
                            cursor: "pointer"
                        },
                        inRange: {
                            backgroundColor: e.palette.success.main
                        },
                        outRange: {
                            backgroundColor: e.palette.error.main
                        },
                        tabBackGround: {
                            position: "sticky",
                            top: "0",
                            zIndex: 20
                        },
                        infoIcon: {
                            fontSize: ".75rem",
                            marginLeft: e.spacing(.5),
                            marginTop: "2px"
                        }
                    })
                })),
                B = function (e, n, t, i, r, o, a, s) {
                    if (!e || !n || !a) return new(A())(0);
                    var l = new(A())(e),
                        c = new(A())(n),
                        d = new(A())(t || 0),
                        u = new(A())(i || 0),
                        p = (s ? l : c).times(r),
                        h = (s ? c : l).times(o),
                        x = (s ? d : u).times(r),
                        m = (s ? u : d).times(o),
                        v = p.plus(h).minus(x).minus(m);
                    return a.minus(v)
                },
                z = function (e) {
                    var n = e.isLPage,
                        t = e.pool,
                        i = R(),
                        r = (0, o.Dv)(W.lC),
                        a = (0, o.Dv)(W._I),
                        l = (0, V.kj)().loading,
                        c = (0, H.useState)(0),
                        d = c[0],
                        u = c[1],
                        p = (0, U.xD)(),
                        h = (0, q.Mn)(),
                        x = (0, o.Dv)(s.vH),
                        v = (0, o.Dv)(W.gV);
                    return (0, m.jsxs)(b.Z, {
                        component: O.Z,
                        className: n ? i.isLPageTableContainer : i.tableContainer,
                        children: [n ? (0, m.jsxs)(I._i, {
                            value: d,
                            onChange: function () {
                                return u(0 === d ? 1 : 0)
                            },
                            "aria-label": "simple tabs example",
                            centered: !0,
                            variant: "fullWidth",
                            className: i.tabBackGround,
                            children: [(0, m.jsx)(I._X, {
                                label: "Active"
                            }), (0, m.jsx)(I._X, {
                                label: "Closed"
                            })]
                        }) : null, (0, m.jsxs)(Z.Z, {
                            "aria-label": "simple table",
                            className: i.table,
                            children: [(0, m.jsx)(w.Z, {
                                children: (0, m.jsxs)(T.Z, {
                                    style: {
                                        fontSize: "0.8rem"
                                    },
                                    children: [(0, m.jsx)(D.Z, {
                                        align: "left",
                                        children: "Token ID"
                                    }), (0, m.jsx)(D.Z, {
                                        align: "left",
                                        children: "In Range"
                                    }), (0, m.jsx)(g.ZP, {
                                        title: F.Bm.PercentOfPool,
                                        children: (0, m.jsx)(D.Z, {
                                            align: "left",
                                            children: "% of Pool"
                                        })
                                    }), (0, m.jsx)(D.Z, {
                                        align: "left",
                                        children: "Liquidity"
                                    }), (0, m.jsx)(D.Z, {
                                        align: "left",
                                        children: "Uncollected Fees"
                                    }), (0, m.jsx)(D.Z, {
                                        align: "left",
                                        children: "Value"
                                    }), 0 === d ? (0, m.jsxs)(D.Z, {
                                        align: "left",
                                        children: [(0, m.jsx)("span", {
                                            children: "PnL"
                                        }), (0, m.jsx)(g.ZP, {
                                            title: F.Bm.LPPnL,
                                            children: (0, m.jsx)(L.Z, {
                                                className: i.infoIcon
                                            })
                                        })]
                                    }) : null]
                                })
                            }), n && 1 === d ? (0, m.jsxs)(P.Z, {
                                children: [0 === (null === a || void 0 === a ? void 0 : a.length) ? l ? (0, m.jsx)(T.Z, {
                                    children: (0, m.jsx)(D.Z, {
                                        colSpan: 6,
                                        align: "center",
                                        style: {
                                            textAlign: "center",
                                            fontSize: "16px"
                                        },
                                        children: (0, m.jsx)("p", {
                                            children: "Loading..."
                                        })
                                    })
                                }) : (0, m.jsx)(T.Z, {
                                    children: (0, m.jsxs)(D.Z, {
                                        colSpan: 6,
                                        align: "center",
                                        style: {
                                            textAlign: "center",
                                            fontSize: "16px"
                                        },
                                        children: [(0, m.jsx)("p", {
                                            children: "No Closed LP Positions"
                                        }), (0, m.jsx)("div", {
                                            children: (0, m.jsx)(E.p, {
                                                text: "Close LP Position",
                                                closePosition: !0
                                            })
                                        })]
                                    })
                                }) : null === a || void 0 === a ? void 0 : a.map((function (e) {
                                    var n, r, o;
                                    return (0, m.jsxs)(T.Z, {
                                        children: [(0, m.jsx)(D.Z, {
                                            component: "th",
                                            align: "left",
                                            scope: "row",
                                            children: (0, m.jsxs)("a", {
                                                href: 3 === x ? "https://squeeth-uniswap.netlify.app/#/pool/".concat(e.id) : "https://app.uniswap.org/#/pool/".concat(e.id),
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: i.tokenIdLink,
                                                children: ["#", e.id]
                                            })
                                        }), (0, m.jsx)(D.Z, {
                                            align: "left",
                                            children: (0, m.jsx)(S.Z, {
                                                label: "Closed",
                                                size: "small"
                                            })
                                        }), (0, m.jsx)(D.Z, {
                                            align: "left",
                                            children: (100 * (t ? e.liquidity / Number(null === t || void 0 === t ? void 0 : t.liquidity) : 0)).toFixed(3)
                                        }), (0, m.jsxs)(D.Z, {
                                            align: "left",
                                            children: [(0, m.jsxs)("span", {
                                                style: {
                                                    marginRight: ".5em"
                                                },
                                                children: [Number(e.amount0).toFixed(4), " ", e.token0.symbol]
                                            }), (0, m.jsxs)("span", {
                                                children: [Number(e.amount1).toFixed(4), " ", e.token1.symbol]
                                            })]
                                        }), (0, m.jsxs)(D.Z, {
                                            align: "left",
                                            children: [(0, m.jsxs)("span", {
                                                style: {
                                                    marginRight: ".5em"
                                                },
                                                children: [null === (n = e.fees0) || void 0 === n ? void 0 : n.toFixed(6), " ", e.token0.symbol]
                                            }), (0, m.jsxs)("span", {
                                                children: [null === (r = e.fees1) || void 0 === r ? void 0 : r.toFixed(6), " ", e.token1.symbol]
                                            })]
                                        }), (0, m.jsx)(D.Z, {
                                            align: "left",
                                            children: (0, m.jsxs)("span", {
                                                style: {
                                                    marginRight: ".5em"
                                                },
                                                children: ["$ ", null === (o = e.dollarValue) || void 0 === o ? void 0 : o.toFixed(2)]
                                            })
                                        })]
                                    }, e.id)
                                })), a && (null === a || void 0 === a ? void 0 : a.length) > 0 && (0, m.jsx)(T.Z, {
                                    children: (0, m.jsx)(D.Z, {
                                        colSpan: 7,
                                        children: (0, m.jsx)("div", {
                                            style: {
                                                display: "flex",
                                                justifyContent: "center"
                                            },
                                            children: (0, m.jsx)(E.p, {
                                                text: "Close LP Position",
                                                closePosition: !0
                                            })
                                        })
                                    })
                                })]
                            }) : (0, m.jsxs)(P.Z, {
                                children: [0 === (null === r || void 0 === r ? void 0 : r.length) ? l ? (0, m.jsx)(T.Z, {
                                    children: (0, m.jsx)(D.Z, {
                                        colSpan: 7,
                                        align: "center",
                                        style: {
                                            textAlign: "center",
                                            fontSize: "16px"
                                        },
                                        children: (0, m.jsx)("p", {
                                            children: "Loading..."
                                        })
                                    })
                                }) : (0, m.jsx)(T.Z, {
                                    children: (0, m.jsxs)(D.Z, {
                                        colSpan: 7,
                                        align: "center",
                                        style: {
                                            textAlign: "center",
                                            fontSize: "16px"
                                        },
                                        children: [(0, m.jsx)("p", {
                                            children: "No Existing LP Positions"
                                        }), (0, m.jsxs)("div", {
                                            children: [(0, m.jsx)("p", {
                                                children: "1. Mint or buy orion on the right."
                                            }), (0, m.jsxs)("a", {
                                                href: F.r1[x],
                                                target: "_blank",
                                                rel: "noreferrer",
                                                style: {
                                                    textDecoration: "underline"
                                                },
                                                children: [" ", (0, m.jsx)("p", {
                                                    children: "2. Deposit Orion and ETH into Uniswap V3 Pool \ud83e\udd84"
                                                }), " "]
                                            })]
                                        })]
                                    })
                                }) : null === r || void 0 === r ? void 0 : r.slice(0, n ? r.length : 3).map((function (e) {
                                    var n, r, o, a;
                                    return (0, m.jsxs)(T.Z, {
                                        children: [(0, m.jsx)(D.Z, {
                                            component: "th",
                                            align: "left",
                                            scope: "row",
                                            children: (0, m.jsxs)("a", {
                                                href: 3 === x ? "https://squeeth-uniswap.netlify.app/#/pool/".concat(e.id) : "https://app.uniswap.org/#/pool/".concat(e.id),
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: i.tokenIdLink,
                                                children: ["#", e.id]
                                            })
                                        }), (0, m.jsx)(D.Z, {
                                            align: "left",
                                            children: (0, _.Z2)(e.tickLower.tickIdx, e.tickUpper.tickIdx, t) ? (0, m.jsx)(S.Z, {
                                                label: "Yes",
                                                size: "small",
                                                className: i.inRange
                                            }) : (0, m.jsx)(S.Z, {
                                                label: "No",
                                                size: "small",
                                                className: i.outRange
                                            })
                                        }), (0, m.jsx)(D.Z, {
                                            align: "left",
                                            children: (100 * (t ? e.liquidity / Number(null === t || void 0 === t ? void 0 : t.liquidity) : 0)).toFixed(3)
                                        }), (0, m.jsxs)(D.Z, {
                                            align: "left",
                                            children: [(0, m.jsxs)("span", {
                                                style: {
                                                    marginRight: ".5em"
                                                },
                                                children: [Number(e.amount0).toFixed(4), " ", e.token0.symbol]
                                            }), (0, m.jsxs)("span", {
                                                children: [Number(e.amount1).toFixed(4), " ", e.token1.symbol]
                                            })]
                                        }), (0, m.jsxs)(D.Z, {
                                            align: "left",
                                            children: [(0, m.jsxs)("span", {
                                                style: {
                                                    marginRight: ".5em"
                                                },
                                                children: [null === (n = e.fees0) || void 0 === n ? void 0 : n.toFixed(6), " ", e.token0.symbol]
                                            }), (0, m.jsxs)("span", {
                                                children: [null === (r = e.fees1) || void 0 === r ? void 0 : r.toFixed(6), " ", e.token1.symbol]
                                            })]
                                        }), (0, m.jsx)(D.Z, {
                                            align: "left",
                                            children: (0, m.jsxs)("span", {
                                                style: {
                                                    marginRight: ".5em"
                                                },
                                                children: ["$ ", null === (o = e.dollarValue) || void 0 === o ? void 0 : o.toFixed(2)]
                                            })
                                        }), (0, m.jsx)(D.Z, {
                                            align: "left",
                                            children: (0, m.jsxs)("span", {
                                                style: {
                                                    marginRight: ".5em"
                                                },
                                                children: ["$", " ", null === (a = B(e.depositedToken0, e.depositedToken1, e.withdrawnToken0, e.withdrawnToken1, p, h(1), e.dollarValue, v)) || void 0 === a ? void 0 : a.toFixed(3)]
                                            })
                                        })]
                                    }, e.id)
                                })), !n && (null === r || void 0 === r ? void 0 : r.length) > 3 && (0, m.jsx)(T.Z, {
                                    children: (0, m.jsx)(D.Z, {
                                        className: i.linkHover,
                                        colSpan: 7,
                                        align: "center",
                                        style: {
                                            fontSize: "1rem"
                                        },
                                        children: (0, m.jsx)(N(), {
                                            href: "/lp",
                                            children: "View more"
                                        })
                                    })
                                })]
                            })]
                        })]
                    })
                },
                G = t(61837),
                $ = t(2997),
                M = t(709),
                K = t(52746),
                Q = t(36268),
                Y = t(7328),
                J = t(22841),
                X = (0, J.Ps)(i || (i = (0, Y.Z)(["\n  query transactions(\n    $poolAddress: Bytes!\n    $owner: String!\n    $origin: String!\n    $recipients: [String!]!\n    $orderDirection: String!\n  ) {\n    positionSnapshots(\n      orderBy: id\n      orderDirection: $orderDirection\n      where: { pool: $poolAddress, owner: $owner }\n      subgraphError: allow\n    ) {\n      id\n      owner\n      liquidity\n      depositedToken0\n      depositedToken1\n      withdrawnToken0\n      withdrawnToken1\n      transaction {\n        id\n        timestamp\n      }\n    }\n  }\n"]))),
                ee = t(18047),
                ne = t(16566),
                te = t(79779),
                ie = t(38370),
                re = (0, J.Ps)(r || (r = (0, Y.Z)(['\n  query userBullTxes($ownerId: ID!, $orderDirection: String!) {\n    bullUserTxes(\n      orderBy: timestamp\n      orderDirection: $orderDirection\n      where: { owner: $ownerId, type_in: ["FLASH_DEPOSIT", "FLASH_WITHDRAW"] }\n    ) {\n      id\n      owner\n      bullAmount\n      ethAmount\n      type\n      timestamp\n    }\n  }\n']))),
                oe = t(78680),
                ae = t(52992);

            function se(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    n && (i = i.filter((function (n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, i)
                }
                return t
            }

            function le(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? se(Object(t), !0).forEach((function (n) {
                        (0, u.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : se(Object(t)).forEach((function (n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var ce = function (e, n) {
                var t = (0, o.Dv)(s.vH),
                    i = (0, H.useState)(),
                    r = i[0],
                    a = i[1],
                    l = (0, H.useState)(!1),
                    c = l[0],
                    d = l[1],
                    u = (0, Q.a)(re, {
                        fetchPolicy: "cache-and-network",
                        client: oe.Y[t],
                        variables: {
                            ownerId: null !== e && void 0 !== e ? e : "",
                            orderDirection: n ? "desc" : "asc"
                        }
                    }),
                    p = u.data,
                    h = u.loading,
                    x = u.startPolling,
                    m = u.stopPolling,
                    v = (0, ae.Z)((function () {
                        var e;
                        return null !== (e = null === p || void 0 === p ? void 0 : p.bullUserTxes) && void 0 !== e ? e : []
                    }), [p]);
                return (0, H.useEffect)((function () {
                    var e = v.map((function (e) {
                        return 1e3 * e.timestamp
                    }));
                    a(void 0), d(!0), (0, U.Zt)(e).then((function (e) {
                        a(null !== e && void 0 !== e ? e : void 0)
                    })).finally((function () {
                        d(!1)
                    }))
                }), [v]), {
                    loading: h || c,
                    data: (0, ae.Z)((function () {
                        return r ? v.map((function (e) {
                            var n, t = (0, _.nw)(e.ethAmount, M.RN),
                                i = t.multipliedBy(r[1e3 * Number(e.timestamp)]),
                                o = (0, _.nw)(e.bullAmount, M.RN);
                            return le(le({}, e), {}, {
                                ethAmount: t,
                                bullAmount: o,
                                ethUsdValue: i,
                                txTitle: (n = e.type, n === te.nf.FLASH_DEPOSIT ? "Flash Deposit" : n === te.nf.FLASH_WITHDRAW ? "Flash Withdraw" : void 0)
                            })
                        })) : []
                    }), [v, r]),
                    startPolling: x,
                    stopPolling: m
                }
            };

            function de(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    n && (i = i.filter((function (n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, i)
                }
                return t
            }

            function ue(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? de(Object(t), !0).forEach((function (n) {
                        (0, u.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : de(Object(t)).forEach((function (n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var pe = new(A())(0),
                he = function () {
                    var e, n, t, i = (0, o.Dv)(W.pK),
                        r = i.squeethPool,
                        a = i.shortHelper,
                        l = i.swapRouter,
                        c = (0, o.Dv)(s.iu),
                        d = (0, o.Dv)(W.gV),
                        u = (0, ie.Fp)(),
                        p = (0, o.Dv)(W.l9),
                        h = null === p || void 0 === p ? void 0 : p.swaps,
                        x = (0, Q.a)(X, {
                            variables: {
                                poolAddress: r,
                                owner: c || "",
                                origin: c || "",
                                recipients: [a, c || "", l],
                                orderDirection: "desc"
                            },
                            fetchPolicy: "cache-and-network"
                        }),
                        m = x.data,
                        v = x.loading,
                        g = (0, ee.l)(c || "").data,
                        j = (0, ne.A)(c || "").data,
                        f = ce(c || "", !0).data,
                        y = u && ((null === m || void 0 === m ? void 0 : m.positionSnapshots) || []).map((function (e, n, t) {
                            var i, r, o, a, s, l, c, p, h = {
                                    squeethAmount: new(A())(d ? e.depositedToken1 : e.depositedToken0),
                                    ethAmount: new(A())(d ? e.depositedToken0 : e.depositedToken1),
                                    usdValue: pe,
                                    timestamp: e.transaction.timestamp,
                                    transactionType: M.iU.ADD_LIQUIDITY,
                                    txId: e.transaction.id,
                                    ethPriceAtDeposit: pe
                                },
                                x = new(A())(d ? e.depositedToken1 : e.depositedToken0),
                                m = new(A())(d ? e.depositedToken0 : e.depositedToken1),
                                v = new(A())(d ? e.withdrawnToken1 : e.withdrawnToken0),
                                g = new(A())(d ? e.withdrawnToken0 : e.withdrawnToken1),
                                j = new(A())(d ? null === (i = t[n + 1]) || void 0 === i ? void 0 : i.depositedToken1 : null === (r = t[n + 1]) || void 0 === r ? void 0 : r.depositedToken0),
                                f = new(A())(d ? null === (o = t[n + 1]) || void 0 === o ? void 0 : o.depositedToken0 : null === (a = t[n + 1]) || void 0 === a ? void 0 : a.depositedToken1),
                                y = new(A())(d ? null === (s = t[n + 1]) || void 0 === s ? void 0 : s.withdrawnToken1 : null === (l = t[n + 1]) || void 0 === l ? void 0 : l.withdrawnToken0),
                                b = new(A())(d ? null === (c = t[n + 1]) || void 0 === c ? void 0 : c.withdrawnToken0 : null === (p = t[n + 1]) || void 0 === p ? void 0 : p.withdrawnToken1);
                            x.isGreaterThan(j) ? (h.squeethAmount = x.minus(j), h.ethAmount = m.minus(f), h.transactionType = M.iU.ADD_LIQUIDITY) : v.isGreaterThan(y) && (h.squeethAmount = v.minus(y), h.ethAmount = g.minus(b), h.transactionType = M.iU.REMOVE_LIQUIDITY);
                            var Z = new Date(1e3 * Number(e.transaction.timestamp)).setUTCHours(0, 0, 0) / 1e3,
                                w = h.ethAmount.multipliedBy(u[Z]).abs();
                            return ue(ue({}, h), {}, {
                                usdValue: w,
                                ethPriceAtDeposit: new(A())(u[Z])
                            })
                        })),
                        b = u && (h || []).map((function (e) {
                            var n = new(A())(d ? e.amount1 : e.amount0),
                                t = new(A())(d ? e.amount0 : e.amount1),
                                i = new Date(1e3 * Number(e.timestamp)).setUTCHours(0, 0, 0) / 1e3,
                                r = t.multipliedBy(u[i]).abs(),
                                o = M.iU.BUY;
                            return n.isPositive() && e.recipient.toLowerCase() !== a.toLowerCase() ? o = M.iU.SELL : e.recipient.toLowerCase() === a.toLowerCase() && (n.isNegative() && (o = M.iU.BURN_SHORT), n.isPositive() && (o = M.iU.MINT_SHORT)), {
                                squeethAmount: n.abs(),
                                ethAmount: t.abs(),
                                usdValue: r,
                                timestamp: e.timestamp,
                                transactionType: o,
                                txId: e.transaction.id,
                                ethPriceAtDeposit: new(A())(u[i])
                            }
                        })),
                        Z = null === (e = g || []) || void 0 === e ? void 0 : e.map((function (e) {
                            var n = e.type === te.J0.FLASH_DEPOSIT ? M.iU.CRAB_FLASH_DEPOSIT : M.iU.CRAB_FLASH_WITHDRAW,
                                t = e.oSqueethAmount,
                                i = e.ethAmount,
                                r = e.ethUsdValue,
                                o = e.timestamp;
                            return {
                                transactionType: n,
                                squeethAmount: t.abs(),
                                ethAmount: i.abs(),
                                usdValue: r,
                                timestamp: o,
                                txId: e.id
                            }
                        })),
                        w = null === (n = j || []) || void 0 === n ? void 0 : n.map((function (e) {
                            var n = function (e) {
                                    return e.type === te.nf.OTC_DEPOSIT ? M.iU.OTC_DEPOSIT : e.type === te.nf.OTC_WITHDRAW ? M.iU.OTC_WITHDRAW : e.type === te.nf.FLASH_DEPOSIT || e.type === te.nf.DEPOSIT_V1 ? e.erc20Token ? M.iU.CRAB_V2_USDC_FLASH_DEPOSIT : M.iU.CRAB_V2_FLASH_DEPOSIT : e.erc20Token ? M.iU.CRAB_V2_USDC_FLASH_WITHDRAW : M.iU.CRAB_V2_FLASH_WITHDRAW
                                }(e),
                                t = e.oSqueethAmount,
                                i = e.ethAmount,
                                r = e.ethUsdValue,
                                o = e.timestamp;
                            return {
                                transactionType: n,
                                squeethAmount: t.abs(),
                                ethAmount: i.abs(),
                                usdValue: r,
                                timestamp: o,
                                txId: e.transaction
                            }
                        })),
                        T = null === (t = f || []) || void 0 === t ? void 0 : t.map((function (e) {
                            var n = e.type === te.$G.FLASH_DEPOSIT ? M.iU.BULL_FLASH_DEPOSIT : M.iU.BULL_FLASH_WITHDRAW,
                                t = e.ethAmount,
                                i = e.ethUsdValue,
                                r = e.timestamp;
                            return {
                                transactionType: n,
                                squeethAmount: M.HW,
                                ethAmount: t.abs(),
                                usdValue: i,
                                timestamp: r,
                                txId: e.id
                            }
                        }));
                    return {
                        transactions: [].concat((0, K.Z)(b || []), (0, K.Z)(y || []), (0, K.Z)(Z), (0, K.Z)(w), (0, K.Z)(T)).sort((function (e, n) {
                            return n.timestamp - e.timestamp
                        })),
                        loading: v
                    }
                },
                xe = t(53633),
                me = t(29150),
                ve = (0, p.Z)((function (e) {
                    return (0, h.Z)({
                        container: {
                            marginTop: e.spacing(2),
                            marginBottom: e.spacing(5)
                        },
                        tableCell: {
                            width: "10px"
                        },
                        red: {
                            color: e.palette.error.main
                        },
                        green: {
                            color: e.palette.success.main
                        },
                        txTypeContainer: {
                            display: "flex",
                            alignItems: "center"
                        },
                        historyItem: {
                            padding: e.spacing(2),
                            backgroundColor: "".concat(e.palette.background.paper, "40"),
                            marginTop: e.spacing(2),
                            borderRadius: e.spacing(1),
                            display: "flex",
                            justifyContent: "space-between"
                        },
                        txItemCol: {
                            width: "30%"
                        },
                        txItemVal: {
                            width: "30%"
                        }
                    })
                })),
                ge = function () {
                    var e = he().transactions,
                        n = (0, o.Dv)(s.vH),
                        t = (0, U.xD)(),
                        i = (0, o.Dv)(me.al),
                        r = ve(),
                        l = (0, xe.k)().getUsdAmt;
                    return (0, m.jsx)("div", {
                        className: r.container,
                        children: e.map((function (e, o) {
                            return (0, m.jsxs)("div", {
                                className: r.historyItem,
                                children: [(0, m.jsxs)("div", {
                                    className: r.txItemCol,
                                    children: [(0, m.jsx)(a.Z, {
                                        variant: "body2",
                                        children: e.transactionType
                                    }), (0, m.jsx)(a.Z, {
                                        variant: "caption",
                                        color: "textSecondary",
                                        children: new Date(1e3 * Number(e.timestamp)).toDateString()
                                    })]
                                }), e.transactionType === F.iU.CRAB_FLASH_DEPOSIT || e.transactionType === F.iU.CRAB_FLASH_WITHDRAW || e.transactionType === F.iU.BULL_FLASH_DEPOSIT || e.transactionType === F.iU.BULL_FLASH_WITHDRAW ? (0, m.jsxs)(m.Fragment, {
                                    children: [(0, m.jsxs)("div", {
                                        className: r.txItemVal,
                                        children: [(0, m.jsxs)(a.Z, {
                                            variant: "body2",
                                            className: e.transactionType === F.iU.CRAB_FLASH_WITHDRAW || e.transactionType === F.iU.BULL_FLASH_WITHDRAW ? r.red : r.green,
                                            children: [e.ethAmount.toFixed(4), "\xa0 WETH"]
                                        }), (0, m.jsxs)(a.Z, {
                                            variant: "caption",
                                            color: "textSecondary",
                                            children: ["$", l(e.ethAmount, e.timestamp).toFixed(2)]
                                        })]
                                    }), (0, m.jsx)("div", {
                                        className: r.txItemVal
                                    })]
                                }) : (0, m.jsxs)(m.Fragment, {
                                    children: [(0, m.jsx)("div", {
                                        className: r.txItemVal,
                                        children: e.transactionType != F.iU.OTC_DEPOSIT && e.transactionType != F.iU.OTC_WITHDRAW ? (0, m.jsxs)(m.Fragment, {
                                            children: [(0, m.jsxs)(a.Z, {
                                                variant: "body2",
                                                className: e.transactionType === F.iU.BUY || e.transactionType === F.iU.BURN_SHORT || e.transactionType === F.iU.REMOVE_LIQUIDITY ? r.green : r.red,
                                                children: [e.squeethAmount.toFixed(8), "\xa0 oORN"]
                                            }), (0, m.jsxs)(a.Z, {
                                                variant: "caption",
                                                color: "textSecondary",
                                                children: ["$", e.squeethAmount.times(t).times(t).div(1e4).times(i).toFixed(2)]
                                            })]
                                        }) : null
                                    }), (0, m.jsxs)("div", {
                                        className: r.txItemVal,
                                        children: [(0, m.jsx)(a.Z, {
                                            variant: "body2",
                                            className: e.transactionType === F.iU.BUY || e.transactionType === F.iU.BURN_SHORT || e.transactionType === F.iU.ADD_LIQUIDITY ? r.red : r.green,
                                            children: e.transactionType === F.iU.CRAB_V2_USDC_FLASH_DEPOSIT || e.transactionType === F.iU.CRAB_V2_USDC_FLASH_WITHDRAW ? "".concat(e.usdValue.toFixed(2), " USDC") : "".concat(e.ethAmount.toFixed(4), " WETH")
                                        }), (0, m.jsx)(a.Z, {
                                            variant: "caption",
                                            color: "textSecondary",
                                            children: e.transactionType === F.iU.CRAB_V2_USDC_FLASH_DEPOSIT || e.transactionType === F.iU.CRAB_V2_USDC_FLASH_WITHDRAW ? "".concat(e.ethAmount.toFixed(4), " WETH") : "$".concat(e.usdValue.toFixed(2))
                                        })]
                                    })]
                                }), (0, m.jsx)("div", {
                                    children: (0, m.jsx)(G.Z, {
                                        size: "small",
                                        href: "".concat(M.E6[n], "/").concat(e.txId),
                                        target: "_blank",
                                        children: (0, m.jsx)($.Z, {
                                            style: {
                                                fontSize: "16px"
                                            },
                                            color: "secondary"
                                        })
                                    })
                                })]
                            }, e.timestamp + o)
                        }))
                    })
                },
                je = t(28496),
                fe = t(42418),
                ye = t(80208),
                be = t(70055),
                Ze = t(21699),
                we = function (e) {
                    var n = e.depositedEth,
                        t = e.depositedUsd,
                        i = e.loading,
                        r = e.pnlWMidPriceInPerct,
                        s = e.pnlWMidPriceInUSD,
                        l = e.currentCrabPositionValue,
                        c = e.currentCrabPositionValueInETH,
                        d = e.version,
                        u = x(),
                        p = (0, o.Dv)(Ze.h1),
                        h = (0, be.zs)();
                    return (0, be.Cf)(), (0, be.Vo)(), (0, H.useEffect)((function () {
                        h()
                    }), [p, h]), (0, m.jsxs)("div", {
                        className: u.position,
                        id: "pos-page-crab",
                        children: [(0, m.jsx)("div", {
                            className: u.positionTitle,
                            children: (0, m.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: [(0, m.jsx)(a.Z, {
                                    children: "\ud83e\udd80"
                                }), (0, m.jsx)(a.Z, {
                                    style: {
                                        marginLeft: "8px"
                                    },
                                    children: d
                                })]
                            })
                        }), (0, m.jsxs)("div", {
                            className: u.shortPositionData,
                            children: [(0, m.jsxs)("div", {
                                className: u.innerPositionData,
                                children: [(0, m.jsxs)("div", {
                                    style: {
                                        width: "50%"
                                    },
                                    children: [(0, m.jsx)(a.Z, {
                                        variant: "caption",
                                        component: "span",
                                        color: "textSecondary",
                                        children: "Deposited Amount"
                                    }), (0, m.jsx)(g.ZP, {
                                        title: M.Bm.CrabMigratedDeposit,
                                        children: (0, m.jsx)(L.Z, {
                                            fontSize: "small",
                                            className: u.infoIcon
                                        })
                                    }), (0, m.jsxs)(a.Z, {
                                        variant: "body1",
                                        children: ["$ ", t.toFixed(2)]
                                    }), (0, m.jsxs)(a.Z, {
                                        variant: "body2",
                                        color: "textSecondary",
                                        children: [(0, m.jsx)("span", {
                                            id: "pos-page-crab-deposited-amount",
                                            children: n.toFixed(6)
                                        }), "\xa0 ETH"]
                                    })]
                                }), (0, m.jsxs)("div", {
                                    style: {
                                        width: "50%"
                                    },
                                    children: [(0, m.jsx)(a.Z, {
                                        variant: "caption",
                                        component: "span",
                                        color: "textSecondary",
                                        children: "Current Position"
                                    }), (0, m.jsx)(a.Z, {
                                        variant: "body1",
                                        children: i ? "Loading" : "$ ".concat(l.toFixed(2))
                                    }), (0, m.jsx)(a.Z, {
                                        variant: "body2",
                                        color: "textSecondary",
                                        children: i ? "Loading" : "".concat(c.toFixed(6), "  ETH")
                                    })]
                                })]
                            }), (0, m.jsx)("div", {
                                className: u.innerPositionData,
                                style: {
                                    marginTop: "16px"
                                },
                                children: (0, m.jsxs)("div", {
                                    style: {
                                        width: "50%"
                                    },
                                    children: [(0, m.jsx)(a.Z, {
                                        variant: "caption",
                                        component: "span",
                                        color: "textSecondary",
                                        children: "Unrealized P&L"
                                    }), (0, m.jsx)(g.ZP, {
                                        title: M.Bm.CrabPnL,
                                        children: (0, m.jsx)(L.Z, {
                                            fontSize: "small",
                                            className: u.infoIcon
                                        })
                                    }), (0, m.jsx)(a.Z, {
                                        variant: "body1",
                                        className: s.isLessThan(0) ? u.red : u.green,
                                        id: "pos-page-crab-pnl-amount",
                                        children: i ? "Loading" : "$" + "".concat(s.toFixed(2))
                                    }), (0, m.jsx)(a.Z, {
                                        variant: "caption",
                                        className: r.isLessThan(0) ? u.red : u.green,
                                        children: i ? "Loading" : "".concat(r.toFixed(2)) + "%"
                                    })]
                                })
                            })]
                        })]
                    })
                },
                Te = t(58831),
                De = function (e) {
                    var n = e.depositedEth,
                        t = e.depositedUsd,
                        i = e.loading,
                        r = e.pnlWMidPriceInPerct,
                        s = e.pnlWMidPriceInUSD,
                        l = e.currentCrabPositionValue,
                        c = e.currentCrabPositionValueInETH,
                        d = e.version,
                        u = x(),
                        p = (0, o.Dv)(Ze.h1),
                        h = (0, o.Dv)(Ze.H0),
                        v = (0, o.Dv)(Ze.wd),
                        j = (0, o.Dv)(Ze.uI),
                        f = (0, be.zs)();
                    (0, be.Cf)(), (0, be.Vo)(), (0, H.useEffect)((function () {
                        f()
                    }), [p, f]);
                    var y = (0, _.nw)(h, M.p8),
                        b = (0, _.nw)(v, 18).times((0, _.nw)(j, 18));
                    return (0, m.jsxs)("div", {
                        className: u.position,
                        id: "pos-page-crab",
                        children: [(0, m.jsx)("div", {
                            className: u.positionTitle,
                            children: (0, m.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: [(0, m.jsx)(a.Z, {
                                    children: "\ud83e\udd80"
                                }), (0, m.jsx)(a.Z, {
                                    style: {
                                        marginLeft: "8px"
                                    },
                                    children: d
                                })]
                            })
                        }), (0, m.jsxs)("div", {
                            className: u.shortPositionData,
                            children: [(0, m.jsxs)("div", {
                                className: u.innerPositionData,
                                children: [(0, m.jsxs)("div", {
                                    style: {
                                        width: "50%"
                                    },
                                    children: [(0, m.jsx)(a.Z, {
                                        variant: "caption",
                                        component: "span",
                                        color: "textSecondary",
                                        children: "Deposited Amount"
                                    }), (0, m.jsx)(g.ZP, {
                                        title: M.Bm.CrabMigratedDeposit,
                                        children: (0, m.jsx)(L.Z, {
                                            fontSize: "small",
                                            className: u.infoIcon
                                        })
                                    }), (0, m.jsxs)(a.Z, {
                                        variant: "body1",
                                        children: ["$ ", t.toFixed(2)]
                                    }), (0, m.jsxs)(a.Z, {
                                        variant: "body2",
                                        color: "textSecondary",
                                        children: [(0, m.jsx)("span", {
                                            id: "pos-page-crab-deposited-amount",
                                            children: n.toFixed(6)
                                        }), "\xa0 ETH"]
                                    })]
                                }), (0, m.jsxs)("div", {
                                    style: {
                                        width: "50%"
                                    },
                                    children: [(0, m.jsx)(a.Z, {
                                        variant: "caption",
                                        component: "span",
                                        color: "textSecondary",
                                        children: "Current Position"
                                    }), (0, m.jsx)(a.Z, {
                                        variant: "body1",
                                        children: i ? "Loading" : "$ ".concat(l.toFixed(2))
                                    }), (0, m.jsx)(a.Z, {
                                        variant: "body2",
                                        color: "textSecondary",
                                        children: i ? "Loading" : "".concat(c.toFixed(6), "  ETH")
                                    })]
                                })]
                            }), (0, m.jsx)("div", {
                                className: u.innerPositionData,
                                style: {
                                    marginTop: "16px"
                                },
                                children: (0, m.jsxs)("div", {
                                    style: {
                                        width: "50%"
                                    },
                                    children: [(0, m.jsx)(a.Z, {
                                        variant: "caption",
                                        component: "span",
                                        color: "textSecondary",
                                        children: "Unrealized P&L"
                                    }), (0, m.jsx)(g.ZP, {
                                        title: M.Bm.CrabPnL,
                                        children: (0, m.jsx)(L.Z, {
                                            fontSize: "small",
                                            className: u.infoIcon
                                        })
                                    }), (0, m.jsx)(a.Z, {
                                        variant: "body1",
                                        className: s.isLessThan(0) ? u.red : u.green,
                                        id: "pos-page-crab-pnl-amount",
                                        children: i ? "Loading" : "$" + "".concat(s.toFixed(2))
                                    }), (0, m.jsx)(a.Z, {
                                        variant: "caption",
                                        className: r.isLessThan(0) ? u.red : u.green,
                                        children: i ? "Loading" : "".concat(r.toFixed(2)) + "%"
                                    })]
                                })
                            }), (0, m.jsxs)("div", {
                                className: u.innerPositionData,
                                children: [h.isGreaterThan("100") && (0, m.jsxs)("div", {
                                    style: {
                                        width: "50%",
                                        marginTop: "16px"
                                    },
                                    children: [(0, m.jsx)(a.Z, {
                                        variant: "caption",
                                        component: "span",
                                        color: "textSecondary",
                                        children: "Initiated Deposit"
                                    }), (0, m.jsx)(g.ZP, {
                                        title: M.Bm.InitiatedDeposit,
                                        children: (0, m.jsx)(L.Z, {
                                            fontSize: "small",
                                            className: u.infoIcon
                                        })
                                    }), (0, m.jsx)(a.Z, {
                                        variant: "body1",
                                        children: i ? "Loading" : (0, Te.xG)(Number(y))
                                    })]
                                }), v.isGreaterThan("10000000000") && (0, m.jsxs)("div", {
                                    style: {
                                        width: "50%",
                                        marginTop: "16px"
                                    },
                                    children: [(0, m.jsx)(a.Z, {
                                        variant: "caption",
                                        component: "span",
                                        color: "textSecondary",
                                        children: "Initiated Withdrawal"
                                    }), (0, m.jsx)(g.ZP, {
                                        title: M.Bm.InitiatedWithdrawal,
                                        children: (0, m.jsx)(L.Z, {
                                            fontSize: "small",
                                            className: u.infoIcon
                                        })
                                    }), (0, m.jsx)(a.Z, {
                                        variant: "body1",
                                        children: i ? "Loading" : (0, Te.xG)(Number(b))
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                Pe = t(82269),
                Se = ["label", "tooltip", "labelVariant"];

            function Oe(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    n && (i = i.filter((function (n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, i)
                }
                return t
            }

            function Le(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? Oe(Object(t), !0).forEach((function (n) {
                        (0, u.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Oe(Object(t)).forEach((function (n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var ke = function (e) {
                    var n = e.label,
                        t = e.tooltip,
                        i = e.labelVariant,
                        r = (0, Pe.Z)(e, Se);
                    return (0, m.jsxs)(j.Z, Le(Le({
                        display: "flex",
                        alignItems: "center"
                    }, r), {}, {
                        children: [(0, m.jsx)(a.Z, {
                            variant: i,
                            color: "textSecondary",
                            children: n
                        }), t && (0, m.jsx)(j.Z, {
                            clone: !0,
                            fontSize: 10,
                            ml: .5,
                            children: (0, m.jsx)(g.ZP, {
                                title: t,
                                children: (0, m.jsx)(L.Z, {
                                    fontSize: "small",
                                    "data-testid": "info-icon"
                                })
                            })
                        })]
                    }))
                },
                Ae = t(60364),
                Ce = ["children"];

            function Ne(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    n && (i = i.filter((function (n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, i)
                }
                return t
            }

            function He(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? Ne(Object(t), !0).forEach((function (n) {
                        (0, u.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ne(Object(t)).forEach((function (n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var Ie = function (e) {
                    var n = e.children,
                        t = (0, Pe.Z)(e, Ce),
                        i = (0, Ae.Z)();
                    return (0, m.jsx)(j.Z, He(He({
                        p: 2,
                        bgcolor: "".concat(i.palette.background.paper, "40"),
                        borderRadius: i.spacing(1),
                        display: "flex"
                    }, t), {}, {
                        children: n
                    }))
                },
                Fe = t(99065);

            function _e(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    n && (i = i.filter((function (n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, i)
                }
                return t
            }

            function Ee(e) {
                var n, t = (0, o.Dv)(s.iu),
                    i = (0, o.Dv)(s.vH);
                return (0, Q.a)(Fe.DY, function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {};
                        n % 2 ? _e(Object(t), !0).forEach((function (n) {
                            (0, u.Z)(e, n, t[n])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _e(Object(t)).forEach((function (n) {
                            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                        }))
                    }
                    return e
                }({
                    client: oe.Y[i],
                    variables: {
                        ownerId: null !== (n = null === t || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== n ? n : ""
                    },
                    skip: !t
                }, e))
            }
            var Ue = t(60905),
                We = function () {
                    var e = Ee(),
                        n = e.data,
                        t = (n = void 0 === n ? {} : n).vaults,
                        i = e.loading,
                        r = e.error;
                    return r ? (0, m.jsx)(a.Z, {
                        color: "error",
                        children: r.message
                    }) : i ? (0, m.jsx)(a.Z, {
                        children: "Loading..."
                    }) : (0, m.jsx)(m.Fragment, {
                        children: null === t || void 0 === t ? void 0 : t.map((function (e, n) {
                            return (0, m.jsx)(N(), {
                                href: "/vault/".concat(e.id),
                                passHref: !0,
                                children: (0, m.jsx)("a", {
                                    children: (0, m.jsx)(Ie, {
                                        mt: n ? 2 : 0,
                                        children: (0, m.jsxs)(Ue.Z, {
                                            container: !0,
                                            children: [(0, m.jsxs)(Ue.Z, {
                                                item: !0,
                                                md: 4,
                                                children: [(0, m.jsx)(ke, {
                                                    labelVariant: "caption",
                                                    label: "Id"
                                                }), (0, m.jsx)(a.Z, {
                                                    variant: "body1",
                                                    children: e.id
                                                })]
                                            }), (0, m.jsxs)(Ue.Z, {
                                                item: !0,
                                                md: 4,
                                                children: [(0, m.jsx)(ke, {
                                                    labelVariant: "caption",
                                                    label: "Short Amount"
                                                }), (0, m.jsxs)(a.Z, {
                                                    variant: "body1",
                                                    children: [(0, _.nw)(new(A())(e.shortAmount), 18).toFixed(4), "\xa0 oORN"]
                                                })]
                                            }), (0, m.jsxs)(Ue.Z, {
                                                item: !0,
                                                md: 4,
                                                children: [(0, m.jsx)(ke, {
                                                    labelVariant: "caption",
                                                    label: "Collateral Amount"
                                                }), (0, m.jsxs)(a.Z, {
                                                    variant: "body1",
                                                    children: [(0, _.nw)(new(A())(e.collateralAmount), 18).toFixed(4), "\xa0 ETH"]
                                                })]
                                            })]
                                        })
                                    })
                                })
                            }, e.id)
                        }))
                    })
                },
                qe = t(53311),
                Ve = t(37202),
                Re = t(87410),
                Be = t(27685),
                ze = t(72276),
                Ge = (0, p.Z)((function (e) {
                    return (0, h.Z)({
                        infoIcon: {
                            fontSize: "16px",
                            marginLeft: e.spacing(.5)
                        }
                    })
                })),
                $e = function (e) {
                    var n = e.pnlType,
                        t = Ge(),
                        i = n === te.xO.Unrealized ? F.Bm.UnrealizedPnL : F.Bm.RealizedPnL;
                    return (0, m.jsx)(g.ZP, {
                        interactive: !0,
                        title: (0, m.jsxs)(m.Fragment, {
                            children: [i, " ", (0, m.jsx)("br", {}), (0, m.jsx)("br", {}), " ", F.Bm.PnLExplanation, (0, m.jsx)("br", {}), (0, m.jsx)(ze.g, {
                                href: "https://twitter.com/wadepros/status/1507008456766595081?s=20&t=BwhOBHz5azrdn0KsAb8TSA",
                                children: "Learn more"
                            })]
                        }),
                        children: (0, m.jsx)(Be.Z, {
                            fontSize: "small",
                            className: t.infoIcon
                        })
                    })
                };

            function Me() {
                var e = x(),
                    n = (0, V.kj)().loading,
                    t = (0, V.nG)(),
                    i = t.squeethAmount,
                    r = t.loading,
                    s = (0, o.Dv)(qe.zK),
                    l = (0, o.Dv)(W.jx),
                    c = (0, Ve.Py)(),
                    d = (0, Ve.GQ)(),
                    u = (0, V._p)(),
                    p = (0, Ve.ES)();
                return (0, m.jsxs)("div", {
                    className: e.position,
                    children: [(0, m.jsx)("div", {
                        className: e.positionTitle,
                        children: (0, m.jsx)(a.Z, {
                            children: "Long Orion"
                        })
                    }), (0, m.jsxs)("div", {
                        className: e.shortPositionData,
                        children: [(0, m.jsxs)("div", {
                            className: e.innerPositionData,
                            children: [(0, m.jsxs)("div", {
                                style: {
                                    width: "50%"
                                },
                                children: [(0, m.jsx)(a.Z, {
                                    variant: "caption",
                                    component: "span",
                                    color: "textSecondary",
                                    children: "oORN Amount"
                                }), (0, m.jsxs)(a.Z, {
                                    variant: "body1",
                                    children: [n && i.isEqualTo(0) ? "Loading" : (0, m.jsx)("span", {
                                        id: "pos-page-long-osqth-bal",
                                        children: i.toFixed(8)
                                    }), " ", "\xa0 oORN"]
                                })]
                            }), (0, m.jsxs)("div", {
                                style: {
                                    width: "50%"
                                },
                                children: [(0, m.jsx)(a.Z, {
                                    variant: "caption",
                                    component: "span",
                                    color: "textSecondary",
                                    children: "Position Value"
                                }), (0, m.jsxs)(a.Z, {
                                    variant: "body1",
                                    children: ["$", s && p.isEqualTo(0) ? "Loading" : p.toFixed(2)]
                                })]
                            })]
                        }), l ? (0, m.jsx)(Re.e, {}) : (0, m.jsxs)("div", {
                            className: e.innerPositionData,
                            style: {
                                marginTop: "16px"
                            },
                            children: [(0, m.jsxs)("div", {
                                style: {
                                    width: "50%"
                                },
                                children: [(0, m.jsxs)("div", {
                                    className: e.pnlTitle,
                                    children: [(0, m.jsx)(a.Z, {
                                        variant: "caption",
                                        component: "span",
                                        color: "textSecondary",
                                        children: "Unrealized P&L"
                                    }), (0, m.jsx)($e, {
                                        pnlType: te.xO.Unrealized
                                    })]
                                }), s || d.loading ? (0, m.jsx)(a.Z, {
                                    variant: "body1",
                                    children: "Loading"
                                }) : (0, m.jsxs)(m.Fragment, {
                                    children: [(0, m.jsxs)(a.Z, {
                                        variant: "body1",
                                        className: c.isLessThan(0) ? e.red : e.green,
                                        children: ["$ ", d.usd.toFixed(2), " (", d.eth.toFixed(5), " ETH)"]
                                    }), (0, m.jsxs)(a.Z, {
                                        variant: "caption",
                                        className: c.isLessThan(0) ? e.red : e.green,
                                        children: [(c || 0).toFixed(2), "%"]
                                    })]
                                })]
                            }), (0, m.jsxs)("div", {
                                style: {
                                    width: "50%"
                                },
                                children: [(0, m.jsxs)("div", {
                                    className: e.pnlTitle,
                                    children: [(0, m.jsx)(a.Z, {
                                        variant: "caption",
                                        component: "span",
                                        color: "textSecondary",
                                        children: "Realized P&L"
                                    }), (0, m.jsx)($e, {
                                        pnlType: te.xO.Realized
                                    })]
                                }), (0, m.jsxs)(a.Z, {
                                    variant: "body1",
                                    className: u.gte(0) ? e.green : e.red,
                                    children: ["$ ", r ? "Loading" : u.toFixed(2)]
                                })]
                            })]
                        })]
                    })]
                })
            }
            var Ke = t(53341);

            function Qe() {
                var e = x(),
                    n = (0, V.yE)(),
                    t = n.validVault,
                    i = n.vaultId,
                    r = n.isVaultLoading,
                    s = (0, Ke.p)(t),
                    l = s.existingCollat,
                    c = s.existingLiqPrice,
                    d = s.existingCollatPercent,
                    u = (0, V.kj)().loading,
                    p = (0, V.nG)(),
                    h = p.squeethAmount,
                    v = p.loading,
                    j = (0, o.Dv)(Ze.zK),
                    f = (0, Ve.qm)(),
                    y = (0, Ve.ey)(),
                    b = (0, Ve.L)(),
                    Z = (0, V.Jy)(),
                    w = (0, o.Dv)(W.jx);
                return (0, m.jsxs)("div", {
                    className: e.position,
                    children: [(0, m.jsxs)("div", {
                        className: e.positionTitle,
                        children: [(0, m.jsx)(a.Z, {
                            children: "Short Orion"
                        }), (0, m.jsx)(a.Z, {
                            className: e.link,
                            children: (0, m.jsx)(N(), {
                                href: "vault/".concat(i),
                                children: "Manage"
                            })
                        })]
                    }), (0, m.jsxs)("div", {
                        className: e.shortPositionData,
                        children: [(0, m.jsxs)("div", {
                            className: e.innerPositionData,
                            children: [(0, m.jsxs)("div", {
                                style: {
                                    width: "50%"
                                },
                                children: [(0, m.jsx)(a.Z, {
                                    variant: "caption",
                                    component: "span",
                                    color: "textSecondary",
                                    children: "oORN Amount"
                                }), u ? (0, m.jsx)(a.Z, {
                                    variant: "body1",
                                    children: "Loading"
                                }) : (0, m.jsx)(a.Z, {
                                    variant: "body1",
                                    id: "pos-page-short-osqth-bal",
                                    children: h.toFixed(8) + " oORN"
                                })]
                            }), (0, m.jsxs)("div", {
                                style: {
                                    width: "50%"
                                },
                                children: [(0, m.jsx)(a.Z, {
                                    variant: "caption",
                                    component: "span",
                                    color: "textSecondary",
                                    children: "Position Value"
                                }), u ? (0, m.jsx)(a.Z, {
                                    variant: "body1",
                                    children: "Loading"
                                }) : (0, m.jsx)(a.Z, {
                                    variant: "body1",
                                    children: j && f.isEqualTo(0) ? "Loading" : "$" + f.toFixed(2)
                                })]
                            })]
                        }), (0, m.jsxs)("div", {
                            className: e.innerPositionData,
                            style: {
                                marginTop: "16px"
                            },
                            children: [(0, m.jsxs)("div", {
                                style: {
                                    width: "50%"
                                },
                                children: [(0, m.jsx)(a.Z, {
                                    variant: "caption",
                                    component: "span",
                                    color: "textSecondary",
                                    children: "Liquidation Price"
                                }), (0, m.jsx)(g.ZP, {
                                    title: M.Bm.LiquidationPrice,
                                    children: (0, m.jsx)(L.Z, {
                                        fontSize: "small",
                                        className: e.infoIcon
                                    })
                                }), (0, m.jsx)(a.Z, {
                                    variant: "body1",
                                    children: r && c.isEqualTo(0) ? "Loading" : "$" + c.toFixed(2)
                                })]
                            }), (0, m.jsxs)("div", {
                                style: {
                                    width: "50%"
                                },
                                children: [(0, m.jsx)(a.Z, {
                                    variant: "caption",
                                    component: "span",
                                    color: "textSecondary",
                                    children: "Collateral (Amt / Ratio)"
                                }), (0, m.jsxs)(a.Z, {
                                    variant: "body1",
                                    children: [r && l.isEqualTo(0) ? "Loading" : l.toFixed(4), " ETH (", d, "%)"]
                                })]
                            })]
                        }), w ? (0, m.jsx)(Re.e, {}) : (0, m.jsxs)("div", {
                            className: e.innerPositionData,
                            style: {
                                marginTop: "16px"
                            },
                            children: [(0, m.jsxs)("div", {
                                style: {
                                    width: "50%"
                                },
                                children: [(0, m.jsxs)("div", {
                                    className: e.pnlTitle,
                                    children: [(0, m.jsx)(a.Z, {
                                        variant: "caption",
                                        component: "span",
                                        color: "textSecondary",
                                        children: "Unrealized P&L"
                                    }), (0, m.jsx)($e, {
                                        pnlType: te.xO.Unrealized
                                    })]
                                }), u || b.loading ? (0, m.jsx)(a.Z, {
                                    variant: "body1",
                                    children: "Loading"
                                }) : (0, m.jsxs)(m.Fragment, {
                                    children: [(0, m.jsxs)(a.Z, {
                                        variant: "body1",
                                        className: y.isLessThan(0) ? e.red : e.green,
                                        children: ["$ ", b.usd.toFixed(2), " (", b.eth.toFixed(5), " ETH)"]
                                    }), (0, m.jsxs)(a.Z, {
                                        variant: "caption",
                                        className: y.isLessThan(0) ? e.red : e.green,
                                        children: [(y || 0).toFixed(2), "%"]
                                    })]
                                })]
                            }), (0, m.jsxs)("div", {
                                style: {
                                    width: "50%"
                                },
                                children: [(0, m.jsxs)("div", {
                                    className: e.pnlTitle,
                                    children: [(0, m.jsx)(a.Z, {
                                        variant: "caption",
                                        component: "span",
                                        color: "textSecondary",
                                        children: "Realized P&L"
                                    }), (0, m.jsx)($e, {
                                        pnlType: te.xO.Realized
                                    })]
                                }), (0, m.jsxs)(a.Z, {
                                    variant: "body1",
                                    className: Z.gte(0) ? e.green : e.red,
                                    children: ["$ ", v ? "Loading" : Z.toFixed(2)]
                                })]
                            })]
                        })]
                    })]
                })
            }
            var Ye = t(86689);

            function Je(e) {
                var n = e.vaultExists,
                    t = x(),
                    i = (0, V.yE)(),
                    r = i.validVault,
                    o = i.vaultId,
                    s = i.isVaultLoading,
                    l = (0, V.r5)(),
                    c = (0, Ke.p)(r),
                    d = c.existingCollat,
                    u = c.existingLiqPrice,
                    p = c.existingCollatPercent;
                return (0, m.jsxs)("div", {
                    className: t.position,
                    children: [(0, m.jsxs)("div", {
                        className: t.positionTitle,
                        children: [(0, m.jsx)(a.Z, {
                            children: "LPed Orion"
                        }), (0, m.jsx)(a.Z, {
                            className: t.link,
                            id: "lp-vault-link",
                            children: n ? (0, m.jsx)(Ye.Z, {
                                href: "vault/".concat(o),
                                children: "Manage"
                            }) : null
                        })]
                    }), (0, m.jsxs)("div", {
                        className: t.shortPositionData,
                        children: [(0, m.jsx)("div", {
                            className: t.innerPositionData,
                            children: (0, m.jsxs)("div", {
                                style: {
                                    width: "50%"
                                },
                                children: [(0, m.jsx)(a.Z, {
                                    variant: "caption",
                                    component: "span",
                                    color: "textSecondary",
                                    children: "Amount"
                                }), (0, m.jsxs)(a.Z, {
                                    variant: "body1",
                                    children: [(0, m.jsx)("span", {
                                        id: "pos-page-lped-osqth-bal",
                                        children: l.toFixed(8)
                                    }), "\xa0 oORN"]
                                })]
                            })
                        }), (0, m.jsxs)("div", {
                            className: t.innerPositionData,
                            style: {
                                marginTop: "16px"
                            },
                            children: [new(A())(u).isFinite() ? (0, m.jsxs)("div", {
                                style: {
                                    width: "50%"
                                },
                                children: [(0, m.jsx)(a.Z, {
                                    variant: "caption",
                                    component: "span",
                                    color: "textSecondary",
                                    children: "Liquidation Price"
                                }), (0, m.jsx)(g.ZP, {
                                    title: M.Bm.LiquidationPrice,
                                    children: (0, m.jsx)(L.Z, {
                                        fontSize: "small",
                                        className: t.infoIcon
                                    })
                                }), (0, m.jsxs)(a.Z, {
                                    variant: "body1",
                                    children: ["$", s && u.isEqualTo(0) ? "Loading" : u.toFixed(2)]
                                })]
                            }) : null, (0, m.jsxs)("div", {
                                style: {
                                    width: "50%"
                                },
                                children: [(0, m.jsx)(a.Z, {
                                    variant: "caption",
                                    component: "span",
                                    color: "textSecondary",
                                    children: "Collateral (Amt / Ratio)"
                                }), (0, m.jsxs)(a.Z, {
                                    variant: "body1",
                                    children: [s && d.isEqualTo(0) ? "Loading" : d.toFixed(4), " ETH", new(A())(p).isFinite() ? " (" + p + " %)" : null]
                                })]
                            })]
                        })]
                    })]
                })
            }

            function Xe(e) {
                var n = e.vaultExists,
                    t = x(),
                    i = (0, V.yE)(),
                    r = i.validVault,
                    o = i.vaultId,
                    s = i.isVaultLoading,
                    l = (0, V.kj)().loading,
                    c = (0, Ke.p)(r),
                    d = c.existingCollat,
                    u = c.existingLiqPrice,
                    p = c.existingCollatPercent,
                    h = (0, V.co)();
                return (0, m.jsxs)("div", {
                    className: t.position,
                    children: [(0, m.jsxs)("div", {
                        className: t.positionTitle,
                        children: [(0, m.jsx)(a.Z, {
                            children: "Minted Orion"
                        }), (0, m.jsx)(a.Z, {
                            className: t.link,
                            children: n ? (0, m.jsx)(N(), {
                                href: "vault/".concat(o),
                                children: "Manage"
                            }) : null
                        })]
                    }), (0, m.jsxs)("div", {
                        className: t.shortPositionData,
                        children: [(0, m.jsx)("div", {
                            className: t.innerPositionData,
                            children: (0, m.jsxs)("div", {
                                style: {
                                    width: "50%"
                                },
                                children: [(0, m.jsx)(a.Z, {
                                    variant: "caption",
                                    component: "span",
                                    color: "textSecondary",
                                    children: "Amount"
                                }), (0, m.jsxs)(a.Z, {
                                    variant: "body1",
                                    children: [l ? "Loading" : (0, m.jsx)("span", {
                                        id: "pos-page-minted-osqth-bal",
                                        children: h.toFixed(8)
                                    }), " ", "\xa0 oORN"]
                                })]
                            })
                        }), (0, m.jsxs)("div", {
                            className: t.innerPositionData,
                            style: {
                                marginTop: "16px"
                            },
                            children: [new(A())(u).isFinite() ? (0, m.jsxs)("div", {
                                style: {
                                    width: "50%"
                                },
                                children: [(0, m.jsx)(a.Z, {
                                    variant: "caption",
                                    component: "span",
                                    color: "textSecondary",
                                    children: "Liquidation Price"
                                }), (0, m.jsx)(g.ZP, {
                                    title: M.Bm.LiquidationPrice,
                                    children: (0, m.jsx)(L.Z, {
                                        fontSize: "small",
                                        className: t.infoIcon
                                    })
                                }), (0, m.jsxs)(a.Z, {
                                    variant: "body1",
                                    children: ["$ ", s && u.isEqualTo(0) ? "Loading" : u.toFixed(2)]
                                })]
                            }) : null, (0, m.jsxs)("div", {
                                style: {
                                    width: "50%"
                                },
                                children: [(0, m.jsx)(a.Z, {
                                    variant: "caption",
                                    component: "span",
                                    color: "textSecondary",
                                    children: "Collateral (Amt / Ratio)"
                                }), (0, m.jsxs)(a.Z, {
                                    variant: "body1",
                                    children: [s && d.isEqualTo(0) ? "Loading" : d.toFixed(4), " ETH", new(A())(p).isFinite() ? " (" + p + " %)" : null]
                                })]
                            })]
                        })]
                    })]
                })
            }

            function en() {
                var e = x(),
                    n = (0, V.yE)(),
                    t = n.validVault,
                    i = n.vaultId,
                    r = (0, V.kj)().loading,
                    o = (0, Ke.p)(t),
                    s = o.existingCollat,
                    l = o.existingCollatPercent;
                return (0, m.jsxs)("div", {
                    className: e.position,
                    children: [(0, m.jsxs)("div", {
                        className: e.positionTitle,
                        children: [(0, m.jsx)(a.Z, {
                            className: e.red,
                            children: "Short Orion - Liquidated"
                        }), (0, m.jsx)(a.Z, {
                            className: e.link,
                            children: (0, m.jsx)(Ye.Z, {
                                href: "vault/".concat(i),
                                children: "Manage"
                            })
                        })]
                    }), (0, m.jsx)("div", {
                        className: e.shortPositionData,
                        children: (0, m.jsx)("div", {
                            className: e.innerPositionData,
                            children: (0, m.jsxs)("div", {
                                style: {
                                    width: "50%"
                                },
                                children: [(0, m.jsx)(a.Z, {
                                    variant: "caption",
                                    component: "span",
                                    color: "textSecondary",
                                    children: "Redeemable Collateral"
                                }), (0, m.jsxs)(a.Z, {
                                    variant: "body1",
                                    children: [r && s.isEqualTo(0) ? "Loading" : s.toFixed(4), " ETH", new(A())(l).isFinite() ? " (" + l + " %)" : null]
                                })]
                            })
                        })
                    })]
                })
            }
            var nn = t(78966),
                tn = t(80780),
                rn = t(91023),
                on = t(8234),
                an = t(53818),
                sn = t(54603);

            function ln() {
                var e = x(),
                    n = (0, o.Dv)(ye.bp),
                    t = (0, o.Dv)(s.iu),
                    i = (0, o.Dv)(W.W_),
                    r = (0, o.Dv)(W.lC),
                    l = (0, V.nG)().squeethAmount,
                    c = (0, V.yE)(),
                    u = c.validVault,
                    p = c.vaultId,
                    h = (0, V.r5)(),
                    v = (0, V.co)(),
                    b = (0, V.u0)(),
                    Z = (0, o.Dv)(me.xS),
                    w = (0, be.mi)(),
                    T = (0, be.zs)(),
                    D = (0, o.Dv)(Ze.MF);
                (0, sn.vh)(),
                function (e) {
                    var n = (0, o.Dv)(W.pK).bullStrategy,
                        t = (0, an.m)(n).refetch,
                        i = (0, H.useState)(void 0),
                        r = i[0],
                        a = i[1],
                        s = (0, o.Dv)(on.DQ),
                        l = (0, o.Dv)(on.v1),
                        c = (0, o.b9)(on.Q_),
                        d = (0, o.b9)(on.Cd),
                        u = (0, o.b9)(on._Q),
                        p = (0, o.b9)(on.m5),
                        h = (0, o.b9)(on.SR),
                        x = (0, o.b9)(on.ui),
                        m = (0, o.b9)(on._m),
                        v = ce(e, !0),
                        g = v.loading,
                        j = v.data,
                        f = v.startPolling,
                        y = v.stopPolling,
                        b = (0, ae.Z)((function () {
                            if (g || !j) return {
                                remainingDepositUsd: M.HW,
                                remainingDepositEth: M.HW
                            };
                            var e = null === j || void 0 === j ? void 0 : j.reduce((function (e, n) {
                                    return n.type === te.nf.FLASH_DEPOSIT ? (e.totalSharesDeposited = e.totalSharesDeposited.plus(n.bullAmount), e.totalUSDDeposit = e.totalUSDDeposit.plus(n.ethUsdValue), e.totalETHDeposit = e.totalETHDeposit.plus(n.ethAmount)) : n.type === te.nf.FLASH_WITHDRAW && (e.totalSharesWithdrawn = e.totalSharesWithdrawn.plus(n.bullAmount)), e
                                }), {
                                    totalSharesDeposited: M.HW,
                                    totalSharesWithdrawn: M.HW,
                                    totalUSDDeposit: M.HW,
                                    totalETHDeposit: M.HW
                                }),
                                n = e.totalSharesDeposited,
                                t = e.totalSharesWithdrawn,
                                i = e.totalUSDDeposit,
                                r = e.totalETHDeposit,
                                o = new(A())(1).minus(t.div(n));
                            return {
                                remainingDepositUsd: o.multipliedBy(i),
                                remainingDepositEth: o.multipliedBy(r)
                            }
                        }), [j, g]),
                        Z = b.remainingDepositEth,
                        w = b.remainingDepositUsd,
                        T = (0, rn.Z)((function () {
                            var e, n = l.minus(Z),
                                t = l.dividedBy(Z).minus(1).times(100);
                            c(n), d(t), u(Z), p(w), m(null === (e = j[0]) || void 0 === e ? void 0 : e.timestamp), h(!0)
                        }), [l, Z, w, j]);
                    (0, H.useEffect)((function () {
                        r || y(), (null === j || void 0 === j ? void 0 : j.find((function (e) {
                            return e.id.toLowerCase() === r
                        }))) && (t((function () {
                            x(!1)
                        })), a(void 0))
                    }), [t, x, y, j, r]);
                    var D = (0, rn.Z)((function (e) {
                        x(!0), a(e), f(500)
                    }), [x, f]);
                    (0, H.useEffect)((function () {
                        s && !g && T()
                    }), [s, T, g])
                }(null !== t && void 0 !== t ? t : ""), (0, tn.Z)((function () {
                    w(), T()
                }), [T, w]), (0, V.CO)();
                var P = (0, fe.B)(t || ""),
                    S = P.depositedEth,
                    O = P.depositedUsd,
                    L = P.loading,
                    k = (0, be.Cf)(),
                    C = k.currentCrabPositionValue,
                    N = k.currentCrabPositionValueInETH,
                    I = k.isCrabPositionValueLoading,
                    F = (0, fe.O)(t || ""),
                    E = F.depositedEth,
                    U = F.depositedUsd,
                    q = F.loading,
                    R = (0, be.Vo)(),
                    B = R.currentCrabPositionValue,
                    G = R.currentCrabPositionValueInETH,
                    $ = R.isCrabPositionValueLoading,
                    K = (0, ae.Z)((function () {
                        return L || I
                    }), [L, I]),
                    Q = (0, ae.Z)((function () {
                        return q || $
                    }), [q, $]),
                    Y = (0, ae.Z)((function () {
                        return (0, nn.d8)(C, O)
                    }), [C, O]),
                    J = (0, ae.Z)((function () {
                        return (0, nn.U5)(C, O)
                    }), [C, O]),
                    X = (0, ae.Z)((function () {
                        return (0, nn.FN)(B.plus(D), U)
                    }), [B, U, D]),
                    ee = (0, ae.Z)((function () {
                        return (0, nn.XJ)(B.plus(D), U)
                    }), [B, U, D]),
                    ne = (0, ae.Z)((function () {
                        var e;
                        return Boolean(u && (null === (e = u.collateralAmount) || void 0 === e ? void 0 : e.isGreaterThan(0)))
                    }), [u]),
                    ie = (0, je.K)(Number(p)).liquidations,
                    re = (0, ae.Z)((function () {
                        var e;
                        return u && (null === (e = u.shortAmount) || void 0 === e ? void 0 : e.isZero()) && ie.length > 0
                    }), [u, null === ie || void 0 === ie ? void 0 : ie.length]);
                return (0, m.jsxs)("div", {
                    children: [(0, m.jsx)(d.Z, {}), (0, m.jsxs)("div", {
                        className: e.container,
                        children: [(0, m.jsxs)("div", {
                            className: e.header,
                            children: [(0, m.jsx)(a.Z, {
                                color: "primary",
                                variant: "h6",
                                children: "Your Positions"
                            }), (0, m.jsxs)("div", {
                                style: {
                                    display: "flex"
                                },
                                children: [(0, m.jsxs)(a.Z, {
                                    component: "span",
                                    color: "textSecondary",
                                    children: ["ETH Price:", " "]
                                }), (0, m.jsxs)("div", {
                                    className: e.tooltipContainer,
                                    children: [(0, m.jsxs)(a.Z, {
                                        component: "span",
                                        children: ["$ ", (0, _.nw)(Z, 18).sqrt().toFixed(2).toLocaleString()]
                                    }), (0, m.jsx)(g.ZP, {
                                        title: M.Bm.SpotPrice,
                                        children: (0, m.jsx)(f.Z, {
                                            fontSize: "small",
                                            className: (0, y.default)(e.dotIcon, e.infoIcon)
                                        })
                                    })]
                                })]
                            })]
                        }), b.isZero() && S.isZero() && E.isZero() && l.isZero() && v.isZero() && h.isZero() ? (0, m.jsx)("div", {
                            className: e.empty,
                            children: (0, m.jsx)(a.Z, {
                                children: "No active positions"
                            })
                        }) : null, i === te.d.LONG && (0, m.jsx)(Me, {}), i === te.d.SHORT && (0, m.jsx)(Qe, {}), h.isGreaterThan(0) && !re && (0, m.jsx)(Je, {
                            vaultExists: ne
                        }), v.isGreaterThan(0) && !re && (0, m.jsx)(Xe, {
                            vaultExists: ne
                        }), ie.length > 0 && (0, m.jsx)(en, {}), !!t && N.isGreaterThan(0) && (0, m.jsx)(we, {
                            depositedEth: S,
                            depositedUsd: O,
                            loading: K,
                            pnlWMidPriceInUSD: Y,
                            pnlWMidPriceInPerct: J,
                            currentCrabPositionValue: C,
                            currentCrabPositionValueInETH: N,
                            version: "Crab Strategy V1"
                        }), !!t && G.isGreaterThan(0) && (0, m.jsx)(De, {
                            depositedEth: E,
                            depositedUsd: U,
                            loading: Q,
                            pnlWMidPriceInUSD: X,
                            pnlWMidPriceInPerct: ee,
                            currentCrabPositionValue: B,
                            currentCrabPositionValueInETH: G,
                            version: "Crab Strategy V2"
                        }), (null === r || void 0 === r ? void 0 : r.length) > 0 && (0, m.jsxs)(m.Fragment, {
                            children: [(0, m.jsx)("div", {
                                className: e.header,
                                children: (0, m.jsx)(a.Z, {
                                    color: "primary",
                                    variant: "h6",
                                    children: "Your LP Positions"
                                })
                            }), (0, m.jsx)(z, {
                                isLPage: !1,
                                pool: n
                            })]
                        }), (0, m.jsxs)(j.Z, {
                            mt: 8,
                            component: "section",
                            children: [(0, m.jsx)(a.Z, {
                                color: "primary",
                                variant: "h6",
                                children: "Your Vaults"
                            }), (0, m.jsx)(j.Z, {
                                mt: 2,
                                children: (0, m.jsx)(We, {})
                            })]
                        }), (0, m.jsxs)("div", {
                            className: e.history,
                            children: [(0, m.jsx)(a.Z, {
                                color: "primary",
                                variant: "h6",
                                children: "Transaction History"
                            }), (0, m.jsx)(ge, {})]
                        })]
                    })]
                })
            }
            var cn = t(36200),
                dn = t(16587),
                un = function () {
                    var e = (0, o.Dv)(s.iu),
                        n = (0, o.Dv)(s.dh);
                    return (0, cn.rL)(), e && n ? (0, m.jsx)(ln, {}) : (0, m.jsxs)(m.Fragment, {
                        children: [(0, m.jsx)(dn.Z, {}), (0, m.jsx)(v, {})]
                    })
                }
        },
        52001: function (e, n, t) {
            "use strict";
            t.d(n, {
                Av: function () {
                    return u
                },
                F2: function () {
                    return c
                },
                HS: function () {
                    return s
                },
                KM: function () {
                    return o
                },
                Qj: function () {
                    return a
                },
                xZ: function () {
                    return l
                },
                z: function () {
                    return d
                }
            });
            var i = t(77277),
                r = t(74719),
                o = (0, r.Z)((function (e) {
                    return {
                        root: {
                            color: "#000",
                            backgroundColor: e.palette.primary.main,
                            "&:hover": {
                                backgroundColor: e.palette.primary.dark
                            },
                            minHeight: "2rem",
                            minWidth: "300px"
                        }
                    }
                }))(i.Z),
                a = ((0, r.Z)((function (e) {
                    return {
                        root: {
                            color: e.palette.text.secondary,
                            backgroundColor: e.palette.error.main,
                            "&:hover": {
                                backgroundColor: e.palette.error.dark
                            },
                            minHeight: "2rem",
                            minWidth: "300px"
                        }
                    }
                }))(i.Z), (0, r.Z)((function (e) {
                    return {
                        root: {
                            color: e.palette.primary.main,
                            background: "transparent",
                            "&:hover": {
                                background: "transparent"
                            },
                            padding: "0"
                        }
                    }
                }))(i.Z)),
                s = (0, r.Z)((function (e) {
                    return {
                        root: {
                            color: "#000",
                            backgroundColor: e.palette.success.main,
                            "&:hover": {
                                backgroundColor: e.palette.success.dark
                            },
                            "&:disabled": {
                                backgroundColor: e.palette.background.lightStone
                            }
                        }
                    }
                }))(i.Z),
                l = (0, r.Z)((function (e) {
                    return {
                        root: {
                            color: "#000",
                            backgroundColor: e.palette.error.main,
                            "&:hover": {
                                backgroundColor: e.palette.error.dark
                            },
                            "&:disabled": {
                                backgroundColor: e.palette.background.lightStone
                            }
                        }
                    }
                }))(i.Z),
                c = ((0, r.Z)((function (e) {
                    return {
                        root: {
                            color: e.palette.text.secondary,
                            backgroundColor: e.palette.action.hover,
                            "&:hover": {
                                backgroundColor: e.palette.action.selected
                            }
                        }
                    }
                }))(i.Z), (0, r.Z)((function (e) {
                    return {
                        root: {
                            color: e.palette.background.default,
                            backgroundColor: e.palette.primary.main,
                            "&:hover": {
                                backgroundColor: e.palette.primary.dark
                            },
                            "&:disabled": {
                                color: "rgba(255, 255, 255, 0.4)",
                                backgroundColor: e.palette.background.lightStone
                            },
                            minHeight: "2rem",
                            minWidth: "300px",
                            padding: "8px",
                            fontSize: "18px",
                            fontWeight: 700,
                            textTransform: "initial"
                        }
                    }
                }))(i.Z)),
                d = (0, r.Z)((function (e) {
                    return {
                        root: {
                            backgroundColor: e.palette.background.stone,
                            "&:disabled": {
                                color: "rgba(255, 255, 255, 0.1)",
                                backgroundColor: "rgba(36, 39, 40, 0.6)",
                                opacity: 1,
                                border: "2px solid rgba(255, 255, 255, 0.1)"
                            },
                            textTransform: "initial",
                            borderRadius: "20px",
                            padding: "4px 24px",
                            fontSize: "16px",
                            fontWeight: 700
                        }
                    }
                }))(i.Z),
                u = (0, r.Z)((function (e) {
                    return {
                        root: {
                            color: e.palette.primary.main,
                            backgroundColor: "transparent",
                            "&:hover": {
                                backgroundColor: "transparent"
                            },
                            textTransform: "initial",
                            padding: "0",
                            fontSize: "16px",
                            fontWeight: 400
                        }
                    }
                }))(i.Z)
        },
        16587: function (e, n, t) {
            "use strict";
            t(2784);
            var i = t(55351),
                r = t(709),
                o = t(52322);
            n.Z = function () {
                return (0, o.jsx)(i.PB, {
                    title: r.Cu,
                    description: r.t8,
                    canonical: r.Gv,
                    openGraph: {
                        images: [{
                            url: r.Ft,
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
        87410: function (e, n, t) {
            "use strict";
            t.d(n, {
                e: function () {
                    return u
                }
            });
            var i = t(90436),
                r = t(79692),
                o = t(33419),
                a = t(42277),
                s = t(79779),
                l = t(72276),
                c = t(52322),
                d = (0, r.Z)({
                    text: {
                        fontSize: "15px",
                        color: "rgb(255, 255, 255)"
                    }
                }),
                u = function () {
                    var e = d(),
                        n = (0, o.Dv)(a.W_);
                    return (0, c.jsxs)(i.Z, {
                        variant: "body2",
                        className: e.text,
                        children: [n !== s.d.LONG && (0, c.jsx)("span", {
                            children: "Coming soon."
                        }), " Please use", " ", (0, c.jsx)(l.g, {
                            href: "https://docs.google.com/spreadsheets/d/1iy5N3qy6g2xd2_BcsY_Hv0pKdyceC1h7y269KssOG8s/edit#gid=1267496112",
                            children: "OrionLab"
                        })]
                    })
                }
        },
        14902: function (e, n, t) {
            "use strict";
            t.d(n, {
                p: function () {
                    return w
                }
            });
            var i = t(8529),
                r = t(79692),
                o = t(46293),
                a = t(98983),
                s = t(61837),
                l = t(77277),
                c = t(42824),
                d = t(8629),
                u = t(38724),
                p = t(79249),
                h = t(87685),
                x = t(2997),
                m = t(2784),
                v = t(55606),
                g = t(66930),
                j = t(31257),
                f = t(33419),
                y = t(42277),
                b = t(52322),
                Z = (0, r.Z)((function (e) {
                    return (0, o.Z)({
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
                            color: c.Z[700],
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
                        r = Z(),
                        o = (0, f.Dv)(y.pK).oSqueeth,
                        c = (0, f.Dv)(j.vH),
                        w = (0, g.Z)(),
                        T = (0, i.Z)(w, 2),
                        D = T[0],
                        P = T[1],
                        S = m.useState(!1),
                        O = (0, i.Z)(S, 2),
                        L = O[0],
                        k = O[1],
                        A = function () {
                            k(!1)
                        };
                    return (0, b.jsxs)("div", {
                        children: [(0, b.jsx)(a.ZP, {
                            title: v.Bm.UniswapLoading,
                            children: (0, b.jsx)(l.Z, {
                                className: r.btn,
                                variant: "outlined",
                                onClick: function () {
                                    k(!0)
                                },
                                children: (0, b.jsx)(b.Fragment, {
                                    children: n
                                })
                            })
                        }), (0, b.jsxs)(d.Z, {
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
                            open: L,
                            onClose: A,
                            "aria-labelledby": "alert-dialog-title",
                            "aria-describedby": "alert-dialog-description",
                            children: [(0, b.jsxs)(p.Z, {
                                className: r.dialogTitle,
                                id: "alert-dialog-title",
                                children: [(0, b.jsx)("p", {
                                    children: "Deposit Orion and ETH into Uniswap V3 Pool \ud83e\udd84"
                                }), (0, b.jsxs)(l.Z, {
                                    variant: "outlined",
                                    color: "primary",
                                    onClick: function () {
                                        P(o)
                                    },
                                    children: [" ", D ? (0, b.jsx)(b.Fragment, {
                                        children: "Copied"
                                    }) : (0, b.jsxs)(b.Fragment, {
                                        children: ["oORN: ", null === o || void 0 === o ? void 0 : o.substring(0, 6), "...", null === o || void 0 === o ? void 0 : o.substring(o.length - 4)]
                                    })]
                                }), (0, b.jsx)(s.Z, {
                                    edge: "start",
                                    onClick: A,
                                    "aria-label": "close",
                                    children: (0, b.jsx)(h.Z, {
                                        style: {
                                            color: "#fff"
                                        }
                                    })
                                })]
                            }), (0, b.jsxs)(u.Z, {
                                className: r.dialogContent,
                                children: [(0, b.jsxs)("div", {
                                    className: r.uniswapHeaderDiv,
                                    children: [(0, b.jsx)("p", {
                                        className: r.uniswapWarning,
                                        children: "Make sure your wallet is connected to Uniswap"
                                    }), (0, b.jsxs)("a", {
                                        className: r.uniOpenBtn,
                                        href: t ? v.xG[c] : v.r1[c],
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: [(0, b.jsx)("p", {
                                            children: "Open in Uniswap"
                                        }), (0, b.jsx)(x.Z, {
                                            style: {
                                                fontSize: 16,
                                                marginLeft: "4px"
                                            },
                                            fontSize: "small"
                                        })]
                                    })]
                                }), (0, b.jsx)("iframe", {
                                    className: r.iframeBox,
                                    src: t ? v.xG[c] : v.r1[c]
                                })]
                            })]
                        })]
                    })
                }
        },
        28496: function (e, n, t) {
            "use strict";
            t.d(n, {
                K: function () {
                    return g
                }
            });
            var i, r = t(95235),
                o = t(36268),
                a = t(2784),
                s = t(33419),
                l = t(709),
                c = t(7328),
                d = (0, t(22841).Ps)(i || (i = (0, c.Z)(["\n  query liquidations($vaultId: BigInt!) {\n    liquidations(where: { vaultId: $vaultId }) {\n      id\n      debtAmount\n      liquidator\n      vaultId\n      collateralPaid\n    }\n  }\n"]))),
                u = t(78680),
                p = t(68619),
                h = t(31257),
                x = t(80780);

            function m(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    n && (i = i.filter((function (n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, i)
                }
                return t
            }

            function v(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? m(Object(t), !0).forEach((function (n) {
                        (0, r.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach((function (n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var g = function (e) {
                var n = (0, a.useState)([]),
                    t = n[0],
                    i = n[1],
                    r = (0, s.Dv)(h.vH),
                    c = (0, o.a)(d, {
                        client: u.Y[r],
                        variables: {
                            vaultId: e
                        },
                        fetchPolicy: "cache-and-network"
                    }),
                    m = c.data,
                    g = c.loading;
                return (0, x.Z)((function () {
                    if (null !== m && void 0 !== m && m.liquidations) {
                        var e = null === m || void 0 === m ? void 0 : m.liquidations.map((function (e) {
                            return v(v({}, e), {}, {
                                debtAmount: (0, p.nw)(e.debtAmount.toString(), l.xM),
                                collateralPaid: (0, p.nw)(e.collateralPaid.toString(), 18)
                            })
                        }));
                        i(e)
                    }
                }), [null === m || void 0 === m ? void 0 : m.liquidations]), {
                    liquidations: t,
                    loading: g
                }
            }
        },
        53341: function (e, n, t) {
            "use strict";
            t.d(n, {
                p: function () {
                    return u
                }
            });
            var i = t(8529),
                r = t(6391),
                o = t.n(r),
                a = t(33419),
                s = t(2784),
                l = t(13575),
                c = t(42277),
                d = t(80780),
                u = function (e) {
                    var n = (0, a.KO)(c.nK),
                        t = (0, i.Z)(n, 2),
                        r = t[0],
                        u = t[1],
                        p = (0, s.useState)(new(o())(0)),
                        h = p[0],
                        x = p[1],
                        m = (0, a.KO)(c.sx),
                        v = (0, i.Z)(m, 2),
                        g = v[0],
                        j = v[1],
                        f = (0, a.KO)(c.SU),
                        y = (0, i.Z)(f, 2),
                        b = y[0],
                        Z = y[1],
                        w = (0, l.vr)();
                    return (0, d.Z)((function () {
                        if (!e) return x(new(o())(0)), u(0), Z(0), void j(new(o())(0));
                        x(e.collateralAmount), w(e.collateralAmount, e.shortAmount, e.NFTCollateralId ? Number(e.NFTCollateralId) : void 0).then((function (e) {
                            var n = e.collateralPercent,
                                t = e.liquidationPrice;
                            u(n), Z(n), j(new(o())(t))
                        }))
                    }), [w, Z, x, u, j, e]), {
                        vault: e,
                        existingCollatPercent: r,
                        existingLiqPrice: g,
                        setCollatPercent: Z,
                        collatPercent: b,
                        existingCollat: h
                    }
                }
        },
        53311: function (e, n, t) {
            "use strict";
            t.d(n, {
                J7: function () {
                    return l
                },
                OV: function () {
                    return s
                },
                Uc: function () {
                    return a
                },
                u3: function () {
                    return o
                },
                uH: function () {
                    return c
                },
                zK: function () {
                    return d
                }
            });
            var i = t(33419),
                r = t(709),
                o = (0, i.cn)(r.HW),
                a = (0, i.cn)({
                    usd: r.HW,
                    eth: r.HW,
                    loading: !0
                }),
                s = (0, i.cn)({
                    usd: r.HW,
                    eth: r.HW,
                    loading: !0
                }),
                l = ((0, i.cn)(r.HW), (0, i.cn)({
                    amountOut: r.HW,
                    minimumAmountOut: r.HW,
                    priceImpact: "0",
                    pools: Array()
                }), (0, i.cn)(r.HW)),
                c = (0, i.cn)(r.HW),
                d = (0, i.cn)(!0)
        },
        37202: function (e, n, t) {
            "use strict";
            t.d(n, {
                ES: function () {
                    return w
                },
                GQ: function () {
                    return S
                },
                L: function () {
                    return O
                },
                Py: function () {
                    return D
                },
                ey: function () {
                    return P
                },
                qm: function () {
                    return T
                }
            });
            var i = t(95235),
                r = t(20406),
                o = t(8529),
                a = t(28526),
                s = t.n(a),
                l = t(33419),
                c = t(4382),
                d = t(68619),
                u = t(78966),
                p = t(67448),
                h = t(53311),
                x = t(42277),
                m = (t(80208), t(74156)),
                v = t(709),
                g = t(79779),
                j = t(53341),
                f = t(29150),
                y = t(80780);

            function b(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    n && (i = i.filter((function (n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, i)
                }
                return t
            }

            function Z(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? b(Object(t), !0).forEach((function (n) {
                        (0, i.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach((function (n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }

            function w() {
                var e = (0, p.nG)().squeethAmount,
                    n = (0, m.Mn)(),
                    t = (0, l.KO)(x.sQ),
                    i = (0, o.Z)(t, 2),
                    r = i[0],
                    a = i[1],
                    s = (0, l.Dv)(x.W_);
                return (0, y.Z)((function () {
                    if (e.isZero() || s != g.d.LONG) a(v.HW);
                    else {
                        var t = n(e);
                        a(t)
                    }
                }), [e, s, n, a]), r
            }

            function T() {
                var e = (0, p.nG)().squeethAmount,
                    n = (0, m.Mn)(),
                    t = (0, l.KO)(x.JA),
                    i = (0, o.Z)(t, 2),
                    r = i[0],
                    a = i[1],
                    s = (0, l.Dv)(x.W_);
                return (0, y.Z)((function () {
                    if (e.isZero() || s != g.d.SHORT) a(v.HW);
                    else {
                        var t = n(e);
                        a(t)
                    }
                }), [e, a, s, n]), r
            }

            function D() {
                var e = (0, l.KO)(h.J7),
                    n = (0, o.Z)(e, 2),
                    t = n[0],
                    i = n[1],
                    r = (0, p.nG)().totalUSDFromBuy,
                    a = (0, l.Dv)(x.sQ),
                    s = (0, l.Dv)(x.W_),
                    c = (0, l.b9)(h.zK);
                return (0, y.Z)((function () {
                    if (a.isZero() && s != g.d.LONG) return i(v.HW), void c(!1);
                    var e = a.dividedBy(r).minus(1).times(100);
                    i(e), c(!1)
                }), [c, s, a, r, i]), t
            }

            function P() {
                var e = (0, l.KO)(h.uH),
                    n = (0, o.Z)(e, 2),
                    t = n[0],
                    i = n[1],
                    r = (0, l.Dv)(x.JA),
                    a = (0, l.Dv)(x.W_),
                    s = (0, l.b9)(h.zK),
                    c = (0, p.nG)().totalUSDFromBuy;
                return (0, y.Z)((function () {
                    if (r.isZero() && a != g.d.SHORT) return i(v.HW), void s(!1);
                    var e = r.dividedBy(c).minus(1).times(100);
                    i(e), s(!1)
                }), [s, r, c, a, i]), t
            }

            function S() {
                var e = (0, p.nG)().squeethAmount,
                    n = (0, l.Dv)(x.gV),
                    t = (0, l.Dv)(x.W_),
                    i = (0, l.Dv)(x.sQ),
                    a = (0, l.Dv)(x.jx),
                    c = (0, l.KO)(h.OV),
                    m = (0, o.Z)(c, 2),
                    j = m[0],
                    b = m[1],
                    w = (0, l.Dv)(f.xS),
                    T = (0, l.Dv)(x.l9),
                    D = null === T || void 0 === T ? void 0 : T.swaps;
                return (0, y.Z)((function () {
                    (0, r.Z)(s().mark((function r() {
                        var o;
                        return s().wrap((function (r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    if (a || null === D || void 0 === D || !D.length || w.isZero() || i.isZero() || e.isZero() || t !== g.d.LONG) {
                                        r.next = 7;
                                        break
                                    }
                                    return r.next = 3, (0, u.md)(D, n, i, (0, d.nw)(w, 18).sqrt(), e);
                                case 3:
                                    o = r.sent, b((function (e) {
                                        return Z(Z({}, e), o)
                                    })), r.next = 8;
                                    break;
                                case 7:
                                    b({
                                        usd: v.HW,
                                        eth: v.HW,
                                        loading: !0
                                    });
                                case 8:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    })))()
                }), [a, w, n, D, e, t, b, i]), j
            }

            function O() {
                var e = (0, p.nG)().squeethAmount,
                    n = (0, l.Dv)(x.gV),
                    t = (0, l.Dv)(x.W_),
                    i = function () {
                        var e = (0, p.yE)(),
                            n = e.vaultId,
                            t = e.validVault,
                            i = e.isVaultLoading,
                            a = (0, c.V)(n),
                            m = a.vaultHistory,
                            g = a.loading,
                            b = (0, j.p)(t).existingCollat,
                            Z = (0, l.Dv)(x.jx),
                            w = (0, l.Dv)(f.xS),
                            T = (0, l.KO)(h.u3),
                            D = (0, o.Z)(T, 2),
                            P = D[0],
                            S = D[1],
                            O = (0, l.Dv)(x.l9);
                        return (0, y.Z)((function () {
                            (0, r.Z)(s().mark((function e() {
                                var n, t;
                                return s().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (Z || null === m || void 0 === m || !m.length || w.isZero() || b.isZero() || null === O || void 0 === O || null === (n = O.swaps) || void 0 === n || !n.length || g || i) {
                                                e.next = 7;
                                                break
                                            }
                                            return e.next = 3, (0, u.Yu)(m, (0, d.nw)(w, 18).sqrt(), b);
                                        case 3:
                                            t = e.sent, S(t), e.next = 8;
                                            break;
                                        case 7:
                                            S(v.HW);
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        }), [Z, b, w, S, null === O || void 0 === O ? void 0 : O.swaps, m, i, g]), P
                    }(),
                    a = (0, l.Dv)(x.JA),
                    m = (0, l.KO)(h.Uc),
                    b = (0, o.Z)(m, 2),
                    w = b[0],
                    T = b[1],
                    D = (0, l.Dv)(f.xS),
                    P = (0, l.Dv)(x.jx),
                    S = (0, p.GU)().loading,
                    O = (0, l.Dv)(x.l9),
                    L = null === O || void 0 === O ? void 0 : O.swaps;
                return (0, y.Z)((function () {
                    (0, r.Z)(s().mark((function r() {
                        var o;
                        return s().wrap((function (r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    if (P || null === L || void 0 === L || !L.length || a.isZero() || D.isZero() || i.isZero() || e.isZero() || t !== g.d.SHORT || S) {
                                        r.next = 7;
                                        break
                                    }
                                    return r.next = 3, (0, u.ls)(L, n, a, (0, d.nw)(D, 18).sqrt(), e, i);
                                case 3:
                                    o = r.sent, T(Z({}, o)), r.next = 8;
                                    break;
                                case 7:
                                    T({
                                        usd: v.HW,
                                        eth: v.HW,
                                        loading: !0
                                    });
                                case 8:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    })))()
                }), [a, P, i, D, n, L, e, t, T, S]), w
            }
        },
        58831: function (e, n, t) {
            "use strict";
            t.d(n, {
                az: function () {
                    return r
                },
                uf: function () {
                    return o
                },
                xG: function () {
                    return i
                }
            });
            t(68619);
            var i = function (e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                    return e.toLocaleString("en-us", {
                        style: "currency",
                        currency: "USD",
                        minimumFractionDigits: n,
                        maximumFractionDigits: n
                    })
                },
                r = function (e) {
                    return e.toLocaleString(void 0, {
                        minimumFractionDigits: 4,
                        maximumFractionDigits: 4
                    })
                },
                o = function (e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                    return e.toLocaleString(void 0, {
                        minimumFractionDigits: n,
                        maximumFractionDigits: n
                    })
                }
        },
        84647: function (e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/positions", function () {
                return t(16393)
            }])
        }
    },
    function (e) {
        e.O(0, [5351, 1057, 3404, 925, 519, 4603, 6833, 9774, 2888, 179], (function () {
            return n = 84647, e(e.s = n);
            var n
        }));
        var n = e.O();
        _N_E = n
    }
]);
//# sourceMappingURL=positions-3b6b50d86e1d7e51.js.map