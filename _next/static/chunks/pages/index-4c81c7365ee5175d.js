(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405], {
        82113: function (e, t, n) {
            "use strict";
            var i = n(7896),
                a = n(12215),
                s = n(59740),
                r = n(2784),
                o = n(6277),
                c = (n(85440), n(809)),
                l = n(74719),
                d = n(39265),
                A = n(41070),
                h = n(60364),
                g = n(85974),
                x = r.forwardRef((function (e, t) {
                    var n = e.children,
                        l = e.classes,
                        x = e.className,
                        p = e.collapsedHeight,
                        u = e.collapsedSize,
                        m = void 0 === u ? "0px" : u,
                        f = e.component,
                        S = void 0 === f ? "div" : f,
                        v = e.disableStrictModeCompat,
                        b = void 0 !== v && v,
                        j = e.in,
                        N = e.onEnter,
                        y = e.onEntered,
                        E = e.onEntering,
                        T = e.onExit,
                        w = e.onExited,
                        k = e.onExiting,
                        C = e.style,
                        I = e.timeout,
                        H = void 0 === I ? d.x9.standard : I,
                        B = e.TransitionComponent,
                        D = void 0 === B ? c.ZP : B,
                        M = (0, s.Z)(e, ["children", "classes", "className", "collapsedHeight", "collapsedSize", "component", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"]),
                        Z = (0, h.Z)(),
                        R = r.useRef(),
                        L = r.useRef(null),
                        _ = r.useRef(),
                        U = "number" === typeof (p || m) ? "".concat(p || m, "px") : p || m;
                    r.useEffect((function () {
                        return function () {
                            clearTimeout(R.current)
                        }
                    }), []);
                    var F = Z.unstable_strictMode && !b,
                        V = r.useRef(null),
                        O = (0, g.Z)(t, F ? V : void 0),
                        z = function (e) {
                            return function (t, n) {
                                if (e) {
                                    var i = F ? [V.current, t] : [t, n],
                                        s = (0, a.Z)(i, 2),
                                        r = s[0],
                                        o = s[1];
                                    void 0 === o ? e(r) : e(r, o)
                                }
                            }
                        },
                        G = z((function (e, t) {
                            e.style.height = U, N && N(e, t)
                        })),
                        q = z((function (e, t) {
                            var n = L.current ? L.current.clientHeight : 0,
                                i = (0, A.C)({
                                    style: C,
                                    timeout: H
                                }, {
                                    mode: "enter"
                                }).duration;
                            if ("auto" === H) {
                                var a = Z.transitions.getAutoHeightDuration(n);
                                e.style.transitionDuration = "".concat(a, "ms"), _.current = a
                            } else e.style.transitionDuration = "string" === typeof i ? i : "".concat(i, "ms");
                            e.style.height = "".concat(n, "px"), E && E(e, t)
                        })),
                        W = z((function (e, t) {
                            e.style.height = "auto", y && y(e, t)
                        })),
                        J = z((function (e) {
                            var t = L.current ? L.current.clientHeight : 0;
                            e.style.height = "".concat(t, "px"), T && T(e)
                        })),
                        Q = z(w),
                        P = z((function (e) {
                            var t = L.current ? L.current.clientHeight : 0,
                                n = (0, A.C)({
                                    style: C,
                                    timeout: H
                                }, {
                                    mode: "exit"
                                }).duration;
                            if ("auto" === H) {
                                var i = Z.transitions.getAutoHeightDuration(t);
                                e.style.transitionDuration = "".concat(i, "ms"), _.current = i
                            } else e.style.transitionDuration = "string" === typeof n ? n : "".concat(n, "ms");
                            e.style.height = U, k && k(e)
                        }));
                    return r.createElement(D, (0, i.Z)({
                        in: j,
                        onEnter: G,
                        onEntered: W,
                        onEntering: q,
                        onExit: J,
                        onExited: Q,
                        onExiting: P,
                        addEndListener: function (e, t) {
                            var n = F ? e : t;
                            "auto" === H && (R.current = setTimeout(n, _.current || 0))
                        },
                        nodeRef: F ? V : void 0,
                        timeout: "auto" === H ? null : H
                    }, M), (function (e, t) {
                        return r.createElement(S, (0, i.Z)({
                            className: (0, o.default)(l.root, l.container, x, {
                                entered: l.entered,
                                exited: !j && "0px" === U && l.hidden
                            } [e]),
                            style: (0, i.Z)({
                                minHeight: U
                            }, C),
                            ref: O
                        }, t), r.createElement("div", {
                            className: l.wrapper,
                            ref: L
                        }, r.createElement("div", {
                            className: l.wrapperInner
                        }, n)))
                    }))
                }));
            x.muiSupportAuto = !0, t.Z = (0, l.Z)((function (e) {
                return {
                    root: {
                        height: 0,
                        overflow: "hidden",
                        transition: e.transitions.create("height")
                    },
                    entered: {
                        height: "auto",
                        overflow: "visible"
                    },
                    hidden: {
                        visibility: "hidden"
                    },
                    wrapper: {
                        display: "flex"
                    },
                    wrapperInner: {
                        width: "100%"
                    }
                }
            }), {
                name: "MuiCollapse"
            })(x)
        },
        414: function (e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function () {
                    return ie
                }
            });
            var i = n(2784),
                a = n(63760),
                s = n(95235),
                r = n(79692),
                o = n(46293),
                c = n(13681),
                l = "/_next/static/media/athena1-desktop.e98098a5.png",
                d = "/_next/static/media/landing-page-background-down.061494dd.svg",
                A = {
                    src: "/_next/static/media/landing-title.d424cd7d.png",
                    height: 951,
                    width: 1268,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAKlBMVEUbHyAYGxwYGxwbHR4aHR4mLzEbICAeKCsbHh8ZHB4ZHB0uSk8qQEMgKCljClpDAAAADXRSTlP+/t7Ku/3VyOernv79hgfw9wAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC5JREFUeJwFwQcBADAMwzD374U/3UkkyztmEzLjyWmZWdE4QNWwJHHvcHZmhJ8PGVcBAsMjG/wAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 6
                },
                h = {
                    src: "/_next/static/media/squeeth.f201635a.png",
                    height: 845,
                    width: 1340,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAJFBMVEUgJSggIiMdHyEiJSYZGxwiKy0ZICAhJCYsQ0YhJCYjJykbHyA1dx3mAAAAC3RSTlP+yNux1P3k5P21lXvJ6kkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAArSURBVHicFcjJEQAgDAOxdQ4CuP9+GfQUKdVaiMH27iIM3RT1xwwZkk7eBxBVAMC3wS3PAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 5
                },
                g = n(39097),
                x = n.n(g),
                p = {
                    src: "/_next/static/media/strategies.1b0b21ed.png",
                    height: 1009,
                    width: 1353,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAJ1BMVEUbICEZGx0YGhsdIiQYGxwbHyAoNTkaHR4bICEuSU4cISIcHiAhKCr/niEBAAAADHRSTlP+/tW7l8f946/++n7jqtorAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALklEQVR4nAXBhwEAIAzDMHcXyP/3IrGMV2wSMqM1lMxMOM6F7mKkyznBy9wozw8Y5wD2ZcAXMgAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 6
                },
                u = {
                    src: "/_next/static/media/auction.f6ab16bc.png",
                    height: 815,
                    width: 1185,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAKlBMVEUnKSw2QkIgIiUoKCwiIiY0NzouMzc4MjceICM2MTUgICMhISMiIiVBRkXbJ6AEAAAADHRSTlP+/sq3p/7+w+PanHL4z5S/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nC3BtwEAIAwDMMdpFOf/d1mQ4CTX0gEkSAp8DjOzynTMzGQVsbs7Iu4DGlUBBqScL9sAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 6
                },
                m = {
                    src: "/_next/static/media/twitter.2f2f5b75.svg",
                    height: 20,
                    width: 22
                },
                f = {
                    src: "/_next/static/media/discord.14e8954f.svg",
                    height: 20,
                    width: 22
                },
                S = {
                    src: "/_next/static/media/telegram.svg",
                    height: 20,
                    width: 22
                },
                v = {
                    src: "/_next/static/media/medium.9f498f22.svg",
                    height: 20,
                    width: 22
                },
                b = n(96577),
                j = n.n(b),
                N = n(6277),
                y = n(90436),
                E = n(77277),
                T = n(20406),
                w = n(28526),
                k = n.n(w),
                C = n(82066);

            function I() {
                var e = (0, C.useQuery)("tvl", (0, T.Z)(k().mark((function e() {
                    var t, n;
                    return k().wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                e.next = 2;
                                break;
                            case 2:
                                return e.next = 4, fetch("".concat("https://api.llama.fi/", "/tvl/opyn"), {
                                    method: "GET",
                                    headers: {
                                        "Content-Type": "application/json"
                                    }
                                });
                            case 4:
                                return t = e.sent, e.next = 7, t.json();
                            case 7:
                                return n = e.sent, e.abrupt("return", Math.round(n / 1e6));
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))));
                return e.data
            }
            var H = n(41436),
                B = n(73381),
                D = n(52322),
                M = function (e) {
                    return "".concat(e / 1512 * 100, "vw")
                },
                Z = (0, r.Z)((function (e) {
                    var t, n;
                    return (0, o.Z)({
                        "*": {
                            overflow: "hidden"
                        },
                        logo: {
                            cursor: "pointer"
                        },
                        gradientText: {
                            background: "linear-gradient(180deg, #FFFFFF 0%, #C2C2C2 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        },
                        landing_page_container: {
                            width: "100%",
                            height: "100%",
                            overflow: "hidden"
                        },
                        nav: {
                            padding: "8px ".concat(M(120)),
                            borderBottom: "1px solid #333333",
                            display: "flex",
                            alignItems: "center"
                        },
                        navLinks: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            gap: "".concat(M(24)),
                            flex: 1
                        },
                        navLink: {
                            fontFamily: "DM Sans",
                            fontWeight: 700,
                            fontSize: "16px",
                            lineHeight: "140%",
                            color: "#F2F2F2",
                            opacity: .5,
                            cursor: "pointer",
                            transitionDuration: "300ms",
                            "&:hover": {
                                opacity: 1
                            }
                        },
                        navAction: {
                            marginLeft: "".concat(M(16))
                        },
                        navStartEarningButton: {
                            backgroundColor: e.palette.primary.main,
                            padding: "15px ".concat(M(18)),
                            fontFamily: "Avenir",
                            fontWeight: 800,
                            fontSize: "18px",
                            lineHeight: "130%",
                            maxWidth: "180px",
                            "&:hover": {
                                backgroundColor: e.palette.primary.dark
                            }
                        },
                        background1: {
                            position: "absolute",
                            backgroundImage: "url(".concat(l, ")"),
                            height: "70vw",
                            width: "100%",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "right",
                            backgroundSize: "contain"
                        },
                        background2: {
                            position: "absolute",
                            backgroundImage: "url(".concat(d, ")"),
                            height: "155vw",
                            width: "90vw",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "left"
                        },
                        content: {},
                        introSection: (0, s.Z)({
                            display: "flex",
                            padding: "80px ".concat(M(150)),
                            paddingBottom: "28px",
                            alignItems: "center"
                        }, e.breakpoints.down("md"), {
                            gap: "30px"
                        }),
                        introSectionLeft: {
                            flex: 1,
                            display: "flex",
                            justifyContent: "flex-start"
                        },
                        introSectionHeading: (t = {
                            fontFamily: "DM Sans",
                            fontWeight: 700,
                            fontSize: "64px",
                            margin: 0
                        }, (0, s.Z)(t, e.breakpoints.down("lg"), {
                            fontSize: "64px"
                        }), (0, s.Z)(t, e.breakpoints.down("md"), {
                            fontSize: "50px"
                        }), t),
                        introSectionSubHeading: (n = {
                            fontFamily: "DM Sans",
                            fontWeight: 400,
                            fontSize: "32px",
                            lineHeight: "42px",
                            color: "#BDBDBD",
                            margin: 0
                        }, (0, s.Z)(n, e.breakpoints.down("lg"), {
                            fontSize: "32px"
                        }), (0, s.Z)(n, e.breakpoints.down("md"), {
                            fontSize: "30px"
                        }), n),
                        imageSectionRight: {
                            flex: 1,
                            display: "flex",
                            justifyContent: "flex-end"
                        },
                        imageSection: {
                            maxWidth: "".concat(M(610))
                        },
                        statSection: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "".concat(M(284)),
                            marginTop: "68px"
                        },
                        statSectionItem: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column"
                        },
                        statSectionTitle: {
                            fontFamily: "DM Sans",
                            fontWeight: 400,
                            fontSize: "56px",
                            lineHeight: "73px"
                        },
                        statSectionSubTitle: {
                            fontFamily: "DM Sans",
                            fontWeight: 400,
                            fontSize: "22px",
                            lineHeight: "29px",
                            color: "#BDBDBD",
                            textAlign: "center"
                        },
                        squeethSection: (0, s.Z)({
                            display: "flex",
                            padding: "".concat(M(120)),
                            alignItems: "center",
                            marginTop: "150px"
                        }, e.breakpoints.down("md"), {
                            gap: "30px"
                        }),
                        contentSectionHeader: {
                            display: "flex",
                            alignItems: "center",
                            gap: "".concat(M(29))
                        },
                        contentSectionHeaderImage: {
                            maxWidth: ""
                        },
                        contentSectionHeaderLabel: {
                            fontFamily: "DM Sans",
                            fontWeight: 500,
                            fontSize: "32px",
                            lineHeight: "42px",
                            marginTop: "-5px"
                        },
                        contentSectionTitle: (0, s.Z)({
                            fontFamily: "DM Sans",
                            fontWeight: 700,
                            fontSize: "32px",
                            lineHeight: "42px"
                        }, e.breakpoints.down("md"), {
                            fontSize: "25px"
                        }),
                        contentSectionSubTitle: (0, s.Z)({
                            fontFamily: "DM Sans",
                            fontWeight: 400,
                            fontSize: "24px",
                            lineHeight: "31px",
                            color: "#BDBDBD"
                        }, e.breakpoints.down("md"), {
                            fontSize: "20px"
                        }),
                        contentSectionButton: {
                            backgroundColor: e.palette.primary.main,
                            padding: "14px ".concat(M(18)),
                            fontFamily: "Avenir",
                            fontWeight: 800,
                            fontSize: "18px",
                            lineHeight: "130%",
                            maxWidth: "180px",
                            "&:hover": {
                                backgroundColor: e.palette.primary.dark
                            }
                        },
                        strategiesSection: {
                            display: "flex",
                            padding: "".concat(M(120)),
                            alignItems: "center"
                        },
                        auctionSection: (0, s.Z)({
                            display: "flex",
                            padding: "".concat(M(120)),
                            alignItems: "center",
                            marginTop: "0px"
                        }, e.breakpoints.down("md"), {
                            gap: "30px"
                        }),
                        auctionSectionLeft: {
                            flex: 1,
                            display: "flex",
                            justifyContent: "center"
                        },
                        auctionSectionRight: {
                            flex: 1,
                            display: "flex",
                            justifyContent: "center"
                        },
                        footer: {
                            display: "flex",
                            alignItems: "center",
                            padding: "40px ".concat(M(120))
                        },
                        footerLinks: {
                            flex: "1",
                            display: "flex",
                            gap: "".concat(M(36))
                        },
                        footerLink: {
                            fontFamily: "DM Sans",
                            fontWeight: 500,
                            fontSize: "16px",
                            lineHeight: "41px",
                            color: "#BDBDBD",
                            cursor: "pointer",
                            transitionDuration: "300ms",
                            "&:hover": {
                                color: "#F2F2F2"
                            }
                        },
                        footerSocial: {
                            display: "flex",
                            alignItems: "center",
                            gap: "".concat(M(9))
                        },
                        socialIcon: {
                            cursor: "pointer"
                        }
                    })
                })),
                R = [{
                    label: "Strategies",
                    link: "/strategies/crab"
                }, {
                    label: "Squeeth",
                    link: "/squeeth"
                }],
                L = [{
                    label: "Developers",
                    link: "https://opyn.gitbook.io/squeeth-1/",
                    analyticsEvent: B.Nc.NAV_DEVELOPERS
                }, {
                    label: "Blog",
                    link: "https://medium.com",
                    analyticsEvent: B.Nc.NAV_BLOG
                }, {
                    label: "Security",
                    link: "https://opyn.gitbook.io/squeeth-faq/squeeth/security",
                    analyticsEvent: B.Nc.NAV_SECURITY
                }];
            var _ = function () {
                    var e = Z(),
                        t = I(),
                        n = (0, H.Z)().track;
                    return (0, i.useEffect)((function () {
                        n(B.Nc.LANDING_VISIT_DESKTOP)
                    }), [n]), (0, D.jsxs)("div", {
                        className: e.landing_page_container,
                        children: [(0, D.jsxs)("div", {
                            className: e.nav,
                            children: [(0, D.jsx)("div", {
                                className: e.logo,
                                children: (0, D.jsx)(x(), {
                                    href: "/",
                                    passHref: !0,
                                    children: (0, D.jsx)(j(), {
                                        src: c.Z,
                                        alt: "logo",
                                        width: 97,
                                        height: 75
                                    })
                                })
                            }), (0, D.jsxs)("div", {
                                className: e.navLinks,
                                children: [R.map((function (t) {
                                    return (0, D.jsx)(y.Z, {
                                        onClick: function () {
                                            return t.analyticsEvent && n(t.analyticsEvent)
                                        },
                                        variant: "h3",
                                        className: e.navLink,
                                        children: (0, D.jsx)(x(), {
                                            href: t.link,
                                            passHref: !0,
                                            children: t.label
                                        })
                                    }, t.label)
                                })), (0, D.jsx)("div", {
                                    className: e.navAction,
                                    children: (0, D.jsx)(x(), {
                                        href: "/strategies/crab",
                                        passHref: !0,
                                        children: (0, D.jsx)(E.Z, {
                                            onClick: function () {
                                                return n(B.Nc.NAV_START_EARNING)
                                            },
                                            className: e.navStartEarningButton,
                                            children: "Start Earning"
                                        })
                                    })
                                })]
                            })]
                        }), (0, D.jsx)("div", {
                            className: e.background1
                        }), (0, D.jsx)("div", {
                            className: e.background2
                        }), (0, D.jsxs)("div", {
                            className: e.content,
                            children: [(0, D.jsxs)("div", {
                                className: e.introSection,
                                children: [(0, D.jsx)("div", {
                                    className: e.introSectionLeft,
                                    children: (0, D.jsxs)("div", {
                                        children: [(0, D.jsx)(y.Z, {
                                            variant: "h1",
                                            className: (0, N.default)([e.introSectionHeading, e.gradientText]),
                                            children: "Stack your ETH"
                                        }), (0, D.jsx)(y.Z, {
                                            variant: "h1",
                                            className: (0, N.default)([e.introSectionHeading, e.gradientText]),
                                            children: "& stables."
                                        }), (0, D.jsx)("div", {
                                            style: {
                                                marginTop: "24px"
                                            }
                                        }), (0, D.jsx)(y.Z, {
                                            variant: "h2",
                                            className: e.introSectionSubHeading,
                                            children: "Investment strategies for DeFi."
                                        }), (0, D.jsx)(y.Z, {
                                            variant: "h2",
                                            className: e.introSectionSubHeading,
                                            children: "Powered by squeeth."
                                        }), (0, D.jsx)("div", {
                                            style: {
                                                marginTop: "39px"
                                            }
                                        }), (0, D.jsx)(x(), {
                                            href: "/strategies/crab",
                                            passHref: !0,
                                            children: (0, D.jsx)(E.Z, {
                                                onClick: function () {
                                                    return n(B.Nc.NAV_HERO_TOP_START_EARNING)
                                                },
                                                className: e.navStartEarningButton,
                                                children: "Start Earning"
                                            })
                                        })]
                                    })
                                }), (0, D.jsx)("div", {
                                    className: e.imageSectionRight,
                                    children: (0, D.jsx)("div", {
                                        className: e.imageSection,
                                        children: (0, D.jsx)(j(), {
                                            src: A,
                                            alt: "Title Image",
                                            placeholder: "blur"
                                        })
                                    })
                                })]
                            }), (0, D.jsxs)("div", {
                                className: e.statSection,
                                children: [(0, D.jsxs)("div", {
                                    className: e.statSectionItem,
                                    children: [(0, D.jsx)("div", {
                                        className: (0, N.default)([e.statSectionTitle, e.gradientText]),
                                        children: "$16b+"
                                    }), (0, D.jsx)("div", {
                                        className: e.statSectionSubTitle,
                                        children: "Total Notional"
                                    }), (0, D.jsx)("div", {
                                        className: e.statSectionSubTitle,
                                        children: "Volume"
                                    })]
                                }), (0, D.jsxs)("div", {
                                    className: e.statSectionItem,
                                    children: [(0, D.jsxs)("div", {
                                        className: (0, N.default)([e.statSectionTitle, e.gradientText]),
                                        children: ["$", t, "m+"]
                                    }), (0, D.jsx)("div", {
                                        className: e.statSectionSubTitle,
                                        children: "Total Value"
                                    }), (0, D.jsx)("div", {
                                        className: e.statSectionSubTitle,
                                        children: "Locked"
                                    })]
                                })]
                            }), (0, D.jsxs)("div", {
                                className: e.squeethSection,
                                children: [(0, D.jsx)("div", {
                                    className: e.introSectionLeft,
                                    children: (0, D.jsxs)("div", {
                                        children: [(0, D.jsxs)("div", {
                                            className: e.contentSectionHeader,
                                            children: [(0, D.jsx)("div", {
                                                className: e.contentSectionHeaderImage,
                                                children: (0, D.jsx)(j(), {
                                                    src: c.Z,
                                                    alt: "logo",
                                                    width: 97,
                                                    height: 75
                                                })
                                            }), (0, D.jsx)(y.Z, {
                                                variant: "h3",
                                                className: (0, N.default)([e.contentSectionHeaderLabel, e.gradientText]),
                                                children: "SQUEETH"
                                            })]
                                        }), (0, D.jsx)("div", {
                                            style: {
                                                marginTop: "25px"
                                            }
                                        }), (0, D.jsx)(y.Z, {
                                            variant: "h3",
                                            className: e.contentSectionTitle,
                                            children: "Leverage without liquidations."
                                        }), (0, D.jsx)("div", {
                                            style: {
                                                marginTop: "41px"
                                            }
                                        }), (0, D.jsx)(y.Z, {
                                            variant: "h3",
                                            className: e.contentSectionSubTitle,
                                            children: "Bet on ETH with unlimited upside,"
                                        }), (0, D.jsx)(y.Z, {
                                            variant: "h3",
                                            className: e.contentSectionSubTitle,
                                            children: "protected downside, and no liquidations."
                                        }), (0, D.jsx)("div", {
                                            style: {
                                                marginTop: "41px"
                                            }
                                        }), (0, D.jsx)(x(), {
                                            href: "/squeeth",
                                            passHref: !0,
                                            children: (0, D.jsx)(E.Z, {
                                                onClick: function () {
                                                    return n(B.Nc.NAV_HERO_SQUEETH)
                                                },
                                                className: e.contentSectionButton,
                                                children: "Trade Squeeth"
                                            })
                                        })]
                                    })
                                }), (0, D.jsx)("div", {
                                    className: e.imageSectionRight,
                                    children: (0, D.jsx)("div", {
                                        className: e.imageSection,
                                        children: (0, D.jsx)(j(), {
                                            src: h,
                                            alt: "Squeeth Image",
                                            placeholder: "blur"
                                        })
                                    })
                                })]
                            }), (0, D.jsxs)("div", {
                                className: e.strategiesSection,
                                children: [(0, D.jsx)("div", {
                                    className: e.introSectionLeft,
                                    children: (0, D.jsxs)("div", {
                                        children: [(0, D.jsxs)("div", {
                                            className: e.contentSectionHeader,
                                            children: [(0, D.jsx)("div", {
                                                className: e.contentSectionHeaderImage,
                                                children: (0, D.jsx)(j(), {
                                                    src: c.Z,
                                                    alt: "logo",
                                                    width: 218,
                                                    height: 44
                                                })
                                            }), (0, D.jsx)(y.Z, {
                                                variant: "h3",
                                                className: (0, N.default)([e.contentSectionHeaderLabel, e.gradientText]),
                                                children: "STRATEGIES"
                                            })]
                                        }), (0, D.jsx)("div", {
                                            style: {
                                                marginTop: "25px"
                                            }
                                        }), (0, D.jsx)(y.Z, {
                                            variant: "h3",
                                            className: e.contentSectionTitle,
                                            children: "Earn returns on your crypto."
                                        }), (0, D.jsx)("div", {
                                            style: {
                                                marginTop: "41px"
                                            }
                                        }), (0, D.jsx)(y.Z, {
                                            variant: "h3",
                                            className: e.contentSectionSubTitle,
                                            children: "ETH and USDC strategies to"
                                        }), (0, D.jsx)(y.Z, {
                                            variant: "h3",
                                            className: e.contentSectionSubTitle,
                                            children: "supercharge your portfolio."
                                        }), (0, D.jsx)("div", {
                                            style: {
                                                marginTop: "41px"
                                            }
                                        }), (0, D.jsx)(x(), {
                                            href: "/strategies/crab",
                                            passHref: !0,
                                            children: (0, D.jsx)(E.Z, {
                                                onClick: function () {
                                                    return n(B.Nc.NAV_HERO_DOWN_START_EARNING)
                                                },
                                                className: e.contentSectionButton,
                                                children: "Start Earning"
                                            })
                                        })]
                                    })
                                }), (0, D.jsx)("div", {
                                    className: e.imageSectionRight,
                                    children: (0, D.jsx)("div", {
                                        className: e.imageSection,
                                        children: (0, D.jsx)(j(), {
                                            src: p,
                                            alt: "Strategies Image",
                                            placeholder: "blur"
                                        })
                                    })
                                })]
                            }), (0, D.jsx)("div", {
                                style: {
                                    marginTop: "50px"
                                }
                            })]
                        }), (0, D.jsxs)("div", {
                            className: e.footer,
                            children: [(0, D.jsx)("div", {
                                className: e.footerLinks,
                                children: "© 2023 Orion Protocol. All rights reserved"
                            }), (0, D.jsxs)("div", {
                                className: e.footerSocial,
                                children: [(0, D.jsx)("div", {
                                    onClick: function () {
                                        return n(B.Nc.NAV_SOCIAL_TWITTER)
                                    },
                                    children: (0, D.jsx)(x(), {
                                        href: "https://twitter.com",
                                        passHref: !0,
                                        children: (0, D.jsx)(j(), {
                                            className: e.socialIcon,
                                            src: m,
                                            alt: "Orion Twitter"
                                        })
                                    })
                                }), (0, D.jsx)("div", {
                                    onClick: function () {
                                        return n(B.Nc.NAV_SOCIAL_GITHUB)
                                    },
                                    children: (0, D.jsx)(x(), {
                                        href: "https://t.me",
                                        passHref: !0,
                                        children: (0, D.jsx)(j(), {
                                            className: e.socialIcon,
                                            src: S,
                                            alt: "Orion Github"
                                        })
                                    })
                                }), (0, D.jsx)("div", {
                                    onClick: function () {
                                        return n(B.Nc.NAV_SOCIAL_MEDIUM)
                                    },
                                    children: (0, D.jsx)(x(), {
                                        href: "https://medium.com",
                                        passHref: !0,
                                        children: (0, D.jsx)(j(), {
                                            className: e.socialIcon,
                                            src: v,
                                            alt: "Orion Medium"
                                        })
                                    })
                                })]
                            })]
                        })]
                    })
                },
                U = n(27556);
            const F = ({
                color: e = "currentColor",
                direction: t = "left",
                distance: n = "md",
                duration: a = .4,
                easing: s = "cubic-bezier(0, 0, 0, 1)",
                hideOutline: r = !0,
                label: o,
                lines: c = 3,
                onToggle: l,
                render: d,
                rounded: A = !1,
                size: h = 32,
                toggle: g,
                toggled: x
            }) => {
                const [p, u] = (0, i.useState)(!1), m = Math.max(12, Math.min(48, h)), f = Math.round((48 - m) / 2), S = m / 12, v = Math.round(S), b = m / (c * (("lg" === n ? .25 : "sm" === n ? .75 : .5) + (3 === c ? 1 : 1.25))), j = Math.round(b), N = v * c + j * (c - 1), y = Math.round((48 - N) / 2), E = parseFloat((m / (3 === c ? "lg" === n ? 4.0425 : "sm" === n ? 5.1625 : 4.6325 : "lg" === n ? 6.7875 : "sm" === n ? 8.4875 : 7.6675) - (S - v + (b - j)) / (3 === c ? 1 : 2) / (4 / 3)).toFixed(2)), T = Math.max(0, a), w = {
                    cursor: "pointer",
                    height: "48px",
                    position: "relative",
                    transition: `${T}s ${s}`,
                    userSelect: "none",
                    width: "48px"
                }, k = {
                    background: e,
                    height: `${v}px`,
                    left: `${f}px`,
                    position: "absolute"
                };
                r && (w.outline = "none"), A && (k.borderRadius = "9em");
                const C = g || u,
                    I = void 0 !== x ? x : p;
                return d({
                    barHeight: v,
                    barStyles: k,
                    burgerStyles: w,
                    easing: s,
                    handler: () => {
                        C(!I), "function" === typeof l && l(!I)
                    },
                    isLeft: "left" === t,
                    isToggled: I,
                    label: o,
                    margin: j,
                    move: E,
                    time: T,
                    topOffset: y,
                    width: m
                })
            };

            function V() {
                return V = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                }, V.apply(this, arguments)
            }
            var O = e => i.createElement(F, V({}, e, {
                    render: e => i.createElement("div", {
                        className: "hamburger-react",
                        "aria-label": e.label,
                        "aria-expanded": e.isToggled,
                        onClick: e.handler,
                        onKeyUp: t => "Enter" === t.key && e.handler(),
                        role: "button",
                        style: {
                            ...e.burgerStyles,
                            transform: "" + (e.isToggled ? `rotate(${90*(e.isLeft?-1:1)}deg)` : "none")
                        },
                        tabIndex: 0
                    }, i.createElement("div", {
                        style: {
                            ...e.barStyles,
                            width: `${e.width}px`,
                            top: `${e.topOffset}px`,
                            transition: `${e.time}s ${e.easing}`,
                            transform: "" + (e.isToggled ? `rotate(${45*(e.isLeft?-1:1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${e.move}px)` : "none")
                        }
                    }), i.createElement("div", {
                        style: {
                            ...e.barStyles,
                            width: `${e.width}px`,
                            top: `${e.topOffset+e.barHeight+e.margin}px`,
                            transition: `${e.time}s ${e.easing}`,
                            transform: "" + (e.isToggled ? "scaleX(0)" : "none")
                        }
                    }), i.createElement("div", {
                        style: {
                            ...e.barStyles,
                            width: `${e.width}px`,
                            top: `${e.topOffset+2*e.barHeight+2*e.margin}px`,
                            transition: `${e.time}s ${e.easing}`,
                            transform: "" + (e.isToggled ? `rotate(${45*(e.isLeft?1:-1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${-1*e.move}px)` : "none")
                        }
                    }))
                })),
                z = n(82113),
                G = {
                    src: "/_next/static/media/athena1.4adcc864.png",
                    height: 794,
                    width: 139,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAICAMAAAAPxGVzAAAADFBMVEXBwbyZl5W6urq/v7+R7gDnAAAABHRSTlMWMiUEDpBL2QAAAAlwSFlzAAALEwAACxMBAJqcGAAAABFJREFUeJxjYGJgZGBkgAFmAABJAAgdn5EEAAAAAElFTkSuQmCC",
                    blurWidth: 1,
                    blurHeight: 8
                },
                q = {
                    src: "/_next/static/media/athena2.19f815bb.png",
                    height: 536,
                    width: 77,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAICAMAAAAPxGVzAAAADFBMVEW+vrKlpaLOzsqcnJgAfOcJAAAABHRSTlMOKBo5ijp0IgAAAAlwSFlzAAALEwAACxMBAJqcGAAAABZJREFUeJwFwQEBAAAAAaDw/7NCTFThAF8ACjSzuyIAAAAASUVORK5CYII=",
                    blurWidth: 1,
                    blurHeight: 8
                },
                W = {
                    src: "/_next/static/media/athena3.983f5c29.png",
                    height: 817,
                    width: 118,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAICAMAAAAPxGVzAAAACVBMVEW8vLrZ2cyfn5ksZUrGAAAAA3RSTlMdCi+/tiEuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEUlEQVR4nGNgZGBiYGKAAUYAAFAAB6IxfUgAAAAASUVORK5CYII=",
                    blurWidth: 1,
                    blurHeight: 8
                },
                J = {
                    src: "/_next/static/media/athena4.54d25fc3.png",
                    height: 493,
                    width: 80,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAICAMAAAAPxGVzAAAADFBMVEXMzMy9vbXDw8OqqqbNYUPVAAAABHRSTlMCIhMyi2ssjQAAAAlwSFlzAAALEwAACxMBAJqcGAAAABdJREFUeJwFwQEBAAAAAaDw/7NSMxGFAwCQAA32M4LuAAAAAElFTkSuQmCC",
                    blurWidth: 1,
                    blurHeight: 8
                },
                Q = {
                    src: "/_next/static/media/squeeth-mobile.ccededfc.png",
                    height: 1502,
                    width: 1043,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAOVBMVEUiJScZGhwmOj4aGxwnMDUbHB83NDscHR8mJiskJSkiISYUFhgfICIiLjEiJCkhIycoMzdFRkgyPkhysRzrAAAAEXRSTlP+z/2//rH9/f2Se1SkpNnrhVSY28QAAAAJcEhZcwAALEsAACxLAaU9lqkAAAAzSURBVHicBcGJAcAgDAOxAxLsQP/9h61EvdM0DgsN0nIkQ9H7SSM8i+uzXNwGLfZ6KvcPInMBVZJfLooAAAAASUVORK5CYII=",
                    blurWidth: 6,
                    blurHeight: 8
                },
                P = {
                    src: "/_next/static/media/strategies-mobile.c7b14e70.png",
                    height: 1650,
                    width: 1007,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAJFBMVEUgIyUeIiQjLC4ZGx0bGx4aHR4jJigmODwwQDsbGx0aGRsbHB5bBcc0AAAAC3RSTlP9yf6s1bvl/OuU6qEEFukAAAAJcEhZcwAALEsAACxLAaU9lqkAAAAsSURBVHicFcRBEgAgCAOxpYCo/f9/HXMIsZeTJZwUqAmbvwhaM0EKF+dW5QMQnwCyBEeslwAAAABJRU5ErkJggg==",
                    blurWidth: 5,
                    blurHeight: 8
                },
                K = {
                    src: "/_next/static/media/auction-mobile.7df06be3.png",
                    height: 409,
                    width: 591,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAKlBMVEUqLTAmKCw2QkMfISMfHyIzNzspJystKS43MDQfHyMiJCcbHiEiIiVCREVhTa7BAAAADXRSTlP+/v3ek/3Eo66AqlP+rp28vgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC9JREFUeJwVwYkRgDAMBLH1T8K5/3YZJLojInRAMknJz7DE3b2qht3dgks/M5n5fhrkAQnV5/o9AAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 6
                },
                Y = function (e) {
                    return "".concat(e / 393 * 100, "vw")
                },
                $ = (0, r.Z)((function (e) {
                    var t;
                    return (0, o.Z)({
                        body: {
                            overflow: "hidden"
                        },
                        gradientText: {
                            background: "linear-gradient(180deg, #FFFFFF 0%, #C2C2C2 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        },
                        landing_page_container: {
                            width: "100%",
                            height: "100%",
                            overflow: "hidden"
                        },
                        nav: {
                            padding: "0px ".concat(Y(10)),
                            display: "flex",
                            alignItems: "center",
                            boxShadow: "0px 3px 4px rgba(0, 0, 0, 0.2)",
                            background: "linear-gradient(180deg, #1A1C1D 0%, #191B1C 100%)"
                        },
                        navMenu: {
                            margin: "0 ".concat(Y(10)),
                            position: "absolute"
                        },
                        navLogo: {
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "center",
                            display: "flex"
                        },
                        navDrawer: {},
                        navDrawerBackground: {
                            backgroundColor: "#191B1C",
                            boxShadow: "1px 1px 5px rgba(255,255,255,.3)",
                            padding: "20px 40px 20px 20px"
                        },
                        backdrop: {
                            marginTop: "20px"
                        },
                        navLinks: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "".concat(Y(15)),
                            flex: 1
                        },
                        drawer: {
                            position: "absolute",
                            width: "100vw",
                            zIndex: 1
                        },
                        drawerWrapper: {
                            backgroundColor: "#232526",
                            padding: "20px 20px"
                        },
                        navLink: {
                            fontFamily: "DM Sans",
                            fontWeight: 700,
                            fontSize: "16px",
                            lineHeight: "140%",
                            color: "#F2F2F2",
                            opacity: .5,
                            cursor: "pointer",
                            transitionDuration: "300ms",
                            "&:hover": {
                                opacity: 1
                            }
                        },
                        navAction: {
                            position: "absolute",
                            right: "10px"
                        },
                        navStartEarningButton: {
                            backgroundColor: e.palette.primary.main,
                            padding: "10px ".concat(Y(15)),
                            fontFamily: "Avenir",
                            fontWeight: 800,
                            fontSize: "12px",
                            lineHeight: "130%",
                            maxWidth: "250px",
                            "&:hover": {
                                backgroundColor: e.palette.primary.dark
                            }
                        },
                        introStartEarningButton: {
                            padding: "20px ".concat(Y(20)),
                            fontSize: "20px"
                        },
                        athenaGraphicAbsoluteContainer: {
                            position: "absolute",
                            width: "100vw",
                            zIndex: -1
                        },
                        background1: {
                            display: "flex",
                            justifyContent: "flex-end"
                        },
                        background2: {
                            height: "100%",
                            marginTop: "-15vh"
                        },
                        background3: {
                            display: "flex",
                            justifyContent: "flex-end",
                            marginTop: "-3vh"
                        },
                        background4: {
                            marginTop: "20vh"
                        },
                        content: {},
                        introSection: {
                            display: "flex",
                            padding: "2vw",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            marginTop: "12vh"
                        },
                        introSectionHeading: {
                            fontFamily: "DM Sans",
                            fontWeight: 700,
                            fontSize: "48px",
                            margin: 0
                        },
                        introSectionSubHeading: (t = {
                            fontFamily: "DM Sans",
                            fontWeight: 500,
                            fontSize: "20px",
                            lineHeight: "26px",
                            color: "#BDBDBD",
                            margin: 0
                        }, (0, s.Z)(t, e.breakpoints.down("lg"), {
                            fontSize: "42px"
                        }), (0, s.Z)(t, e.breakpoints.down("md"), {
                            fontSize: "42px"
                        }), (0, s.Z)(t, e.breakpoints.down("sm"), {
                            fontSize: "30px"
                        }), (0, s.Z)(t, e.breakpoints.down("xs"), {
                            fontSize: "20px"
                        }), t),
                        verticalImage: {
                            margin: "auto",
                            width: "65vw"
                        },
                        imageSection: {
                            maxWidth: "".concat(Y(610))
                        },
                        statSection: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "".concat(Y(50)),
                            marginTop: "11vh"
                        },
                        statSectionItem: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column"
                        },
                        statSectionTitle: {
                            fontFamily: "DM Sans",
                            fontWeight: 400,
                            fontSize: "44px",
                            lineHeight: "57px"
                        },
                        statSectionSubTitle: {
                            maxWidth: "".concat(Y(120)),
                            fontFamily: "DM Sans",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "21px",
                            color: "#BDBDBD",
                            textAlign: "center"
                        },
                        squeethSection: {
                            display: "flex",
                            flexDirection: "column",
                            padding: "0 10vw",
                            marginTop: "3vh"
                        },
                        contentSectionHeader: {
                            display: "flex",
                            alignItems: "center",
                            gap: "".concat(Y(29))
                        },
                        contentSectionHeaderImage: {
                            maxWidth: ""
                        },
                        contentSectionHeaderLabel: {
                            fontFamily: "DM Sans",
                            fontWeight: 500,
                            fontSize: "28px",
                            lineHeight: "42px",
                            marginTop: "-5px"
                        },
                        contentSectionTitle: {
                            fontFamily: "DM Sans",
                            fontWeight: 700,
                            fontSize: "28px",
                            lineHeight: "36px"
                        },
                        contentSectionSubTitle: {
                            fontFamily: "DM Sans",
                            fontWeight: 500,
                            fontSize: "14px",
                            lineHeight: "18px",
                            color: "#BDBDBD"
                        },
                        contentSectionButton: {
                            backgroundColor: e.palette.primary.main,
                            padding: "15px ".concat(Y(10)),
                            fontFamily: "Avenir",
                            fontWeight: 800,
                            fontSize: "14px",
                            lineHeight: "130%",
                            maxWidth: "130px",
                            "&:hover": {
                                backgroundColor: e.palette.primary.dark
                            }
                        },
                        strategiesSection: {
                            display: "flex",
                            padding: "".concat(Y(120)),
                            alignItems: "center"
                        },
                        auctionSection: {
                            display: "flex",
                            padding: "".concat(Y(120)),
                            alignItems: "center",
                            marginTop: "100px"
                        },
                        auctionSectionLeft: {
                            flex: 1
                        },
                        footer: {
                            display: "flex",
                            alignItems: "center",
                            padding: "10px 20px"
                        },
                        footerLinks: {
                            flex: "1",
                            display: "flex",
                            gap: "15px"
                        },
                        footerLink: {
                            fontFamily: "DM Sans",
                            fontWeight: 500,
                            fontSize: "10px",
                            lineHeight: "41px",
                            color: "#BDBDBD",
                            cursor: "pointer",
                            transitionDuration: "300ms",
                            "&:hover": {
                                color: "#F2F2F2"
                            }
                        },
                        footerSocial: {
                            display: "flex",
                            alignItems: "center",
                            gap: "".concat(Y(9))
                        },
                        socialIcon: {
                            cursor: "pointer"
                        }
                    })
                })),
                X = [{
                    label: "Strategies",
                    link: "/strategies/crab"
                }, {
                    label: "Squeeth",
                    link: "/squeeth"
                }],
                ee = [{
                    label: "Developers",
                    link: "https://opyn.gitbook.io/squeeth-1/",
                    analyticsEvent: B.Nc.NAV_DEVELOPERS
                }, {
                    label: "Blog",
                    link: "https://medium.com",
                    analyticsEvent: B.Nc.NAV_BLOG
                }, {
                    label: "Security",
                    link: "https://opyn.gitbook.io/squeeth-faq/squeeth/security",
                    analyticsEvent: B.Nc.NAV_SECURITY
                }];
            var te = function () {
                    var e = (0, i.useState)(!1),
                        t = e[0],
                        n = e[1],
                        a = $(),
                        s = I(),
                        r = (0, H.Z)().track;
                    return (0, i.useEffect)((function () {
                        r(B.Nc.LANDING_VISIT_MOBILE)
                    }), [r]), (0, D.jsxs)("div", {
                        className: a.landing_page_container,
                        children: [(0, D.jsxs)("div", {
                            className: a.nav,
                            children: [(0, D.jsx)("div", {
                                className: a.navMenu,
                                children: (0, D.jsx)(O, {
                                    size: 20,
                                    toggled: t,
                                    toggle: n
                                })
                            }), (0, D.jsx)("div", {
                                className: a.navLogo,
                                children: (0, D.jsx)(x(), {
                                    href: "/",
                                    passHref: !0,
                                    children: (0, D.jsx)(j(), {
                                        src: c.Z,
                                        alt: "logo",
                                        width: 83,
                                        height: 59
                                    })
                                })
                            }), (0, D.jsx)("div", {
                                className: a.navAction,
                                children: (0, D.jsx)(x(), {
                                    href: "/strategies/crab",
                                    passHref: !0,
                                    children: (0, D.jsx)(E.Z, {
                                        onClick: function () {
                                            return r(B.Nc.NAV_START_EARNING)
                                        },
                                        className: a.navStartEarningButton,
                                        children: "Launch"
                                    })
                                })
                            })]
                        }), (0, D.jsx)("div", {
                            style: {
                                position: "absolute",
                                width: "100vw",
                                zIndex: 1
                            },
                            children: (0, D.jsx)(z.Z, {
                                in: t,
                                children: (0, D.jsx)(U.Z, {
                                    className: a.drawerWrapper,
                                    elevation: 2,
                                    children: (0, D.jsx)("div", {
                                        className: a.navLinks,
                                        children: X.map((function (e) {
                                            return (0, D.jsx)(y.Z, {
                                                onClick: function () {
                                                    return e.analyticsEvent && r(e.analyticsEvent)
                                                },
                                                variant: "h3",
                                                className: a.navLink,
                                                children: (0, D.jsx)(x(), {
                                                    href: e.link,
                                                    passHref: !0,
                                                    children: e.label
                                                })
                                            }, e.label)
                                        }))
                                    })
                                })
                            })
                        }), (0, D.jsx)("div", {
                            className: a.athenaGraphicAbsoluteContainer,
                            children: (0, D.jsxs)("div", {
                                children: [(0, D.jsx)("div", {
                                    className: a.background1,
                                    children: (0, D.jsx)(j(), {
                                        src: G,
                                        alt: "Athena 1"
                                    })
                                }), (0, D.jsx)("div", {
                                    className: a.background2,
                                    children: (0, D.jsx)(j(), {
                                        src: q,
                                        alt: "Athena 2"
                                    })
                                }), (0, D.jsx)("div", {
                                    className: a.background3,
                                    children: (0, D.jsx)(j(), {
                                        src: W,
                                        alt: "Athena 3"
                                    })
                                }), (0, D.jsx)("div", {
                                    className: a.background4,
                                    children: (0, D.jsx)(j(), {
                                        src: J,
                                        alt: "Athena 4"
                                    })
                                })]
                            })
                        }), (0, D.jsxs)("div", {
                            className: a.content,
                            children: [(0, D.jsx)("div", {
                                className: a.introSection,
                                children: (0, D.jsxs)("div", {
                                    children: [(0, D.jsx)(y.Z, {
                                        variant: "h1",
                                        className: (0, N.default)([a.introSectionHeading, a.gradientText]),
                                        children: "Stack your ETH"
                                    }), (0, D.jsx)(y.Z, {
                                        variant: "h1",
                                        className: (0, N.default)([a.introSectionHeading, a.gradientText]),
                                        children: "& stables."
                                    }), (0, D.jsx)("div", {
                                        style: {
                                            marginTop: "15px"
                                        }
                                    }), (0, D.jsx)(y.Z, {
                                        variant: "h2",
                                        className: a.introSectionSubHeading,
                                        children: "Powerful investment strategies for DeFi."
                                    }), (0, D.jsx)(y.Z, {
                                        variant: "h2",
                                        className: a.introSectionSubHeading,
                                        children: "Built on squeeth."
                                    }), (0, D.jsx)("div", {
                                        style: {
                                            marginTop: "20px"
                                        }
                                    }), (0, D.jsx)(x(), {
                                        href: "/strategies/crab",
                                        passHref: !0,
                                        children: (0, D.jsx)(E.Z, {
                                            onClick: function () {
                                                return r(B.Nc.NAV_HERO_TOP_START_EARNING)
                                            },
                                            className: (0, N.default)([a.navStartEarningButton, a.introStartEarningButton]),
                                            children: "Start Earning"
                                        })
                                    })]
                                })
                            }), (0, D.jsxs)("div", {
                                className: a.statSection,
                                children: [(0, D.jsxs)("div", {
                                    className: a.statSectionItem,
                                    children: [(0, D.jsx)("div", {
                                        className: (0, N.default)([a.statSectionTitle, a.gradientText]),
                                        children: "$16b"
                                    }), (0, D.jsx)("div", {
                                        className: a.statSectionSubTitle,
                                        children: "Total Notional Volume"
                                    })]
                                }), (0, D.jsxs)("div", {
                                    className: a.statSectionItem,
                                    children: [(0, D.jsxs)("div", {
                                        className: (0, N.default)([a.statSectionTitle, a.gradientText]),
                                        children: ["$", s, "m"]
                                    }), (0, D.jsx)("div", {
                                        className: a.statSectionSubTitle,
                                        children: "Total Value Locked"
                                    })]
                                })]
                            }), (0, D.jsx)("div", {
                                style: {
                                    marginTop: "11vh"
                                }
                            }), (0, D.jsx)("div", {
                                className: a.verticalImage,
                                children: (0, D.jsx)(j(), {
                                    src: Q,
                                    alt: "Squeeth",
                                    placeholder: "blur"
                                })
                            }), (0, D.jsxs)("div", {
                                className: a.squeethSection,
                                children: [(0, D.jsxs)("div", {
                                    className: a.contentSectionHeader,
                                    children: [(0, D.jsx)("div", {
                                        className: a.contentSectionHeaderImage,
                                        children: (0, D.jsx)(j(), {
                                            src: c.Z,
                                            alt: "logo",
                                            width: 70,
                                            height: 53
                                        })
                                    }), (0, D.jsx)(y.Z, {
                                        variant: "h3",
                                        className: (0, N.default)([a.contentSectionHeaderLabel, a.gradientText]),
                                        children: "SQUEETH"
                                    })]
                                }), (0, D.jsx)("div", {
                                    style: {
                                        marginTop: "15px"
                                    }
                                }), (0, D.jsx)(y.Z, {
                                    variant: "h3",
                                    className: a.contentSectionTitle,
                                    children: "Leverage without liquidations."
                                }), (0, D.jsx)("div", {
                                    style: {
                                        marginTop: "15px"
                                    }
                                }), (0, D.jsx)(y.Z, {
                                    variant: "h3",
                                    className: a.contentSectionSubTitle,
                                    children: "Bet on ETH with unlimited upside,"
                                }), (0, D.jsx)(y.Z, {
                                    variant: "h3",
                                    className: a.contentSectionSubTitle,
                                    children: "protected downside, and no liquidations."
                                }), (0, D.jsx)("div", {
                                    style: {
                                        marginTop: "15px"
                                    }
                                }), (0, D.jsx)(x(), {
                                    href: "/squeeth",
                                    passHref: !0,
                                    children: (0, D.jsx)(E.Z, {
                                        onClick: function () {
                                            return r(B.Nc.NAV_HERO_SQUEETH)
                                        },
                                        className: a.contentSectionButton,
                                        children: "Trade Squeeth"
                                    })
                                })]
                            }), (0, D.jsx)("div", {
                                style: {
                                    marginTop: "17vh"
                                }
                            }), (0, D.jsx)("div", {
                                className: a.verticalImage,
                                children: (0, D.jsx)(j(), {
                                    src: P,
                                    alt: "Strategies",
                                    placeholder: "blur"
                                })
                            }), (0, D.jsxs)("div", {
                                className: a.squeethSection,
                                children: [(0, D.jsxs)("div", {
                                    className: a.contentSectionHeader,
                                    children: [(0, D.jsx)("div", {
                                        className: a.contentSectionHeaderImage,
                                        children: (0, D.jsx)(j(), {
                                            src: c.Z,
                                            alt: "logo",
                                            width: 218,
                                            height: 44
                                        })
                                    }), (0, D.jsx)(y.Z, {
                                        variant: "h3",
                                        className: (0, N.default)([a.contentSectionHeaderLabel, a.gradientText]),
                                        children: "STRATEGIES"
                                    })]
                                }), (0, D.jsx)("div", {
                                    style: {
                                        marginTop: "15px"
                                    }
                                }), (0, D.jsx)(y.Z, {
                                    variant: "h3",
                                    className: a.contentSectionTitle,
                                    children: "Earn returns on"
                                }), (0, D.jsx)(y.Z, {
                                    variant: "h3",
                                    className: a.contentSectionTitle,
                                    children: "your crypto."
                                }), (0, D.jsx)("div", {
                                    style: {
                                        marginTop: "15px"
                                    }
                                }), (0, D.jsx)(y.Z, {
                                    variant: "h3",
                                    className: a.contentSectionSubTitle,
                                    children: "ETH and USDC strategies to supercharge"
                                }), (0, D.jsx)(y.Z, {
                                    variant: "h3",
                                    className: a.contentSectionSubTitle,
                                    children: "your portfolio."
                                }), (0, D.jsx)("div", {
                                    style: {
                                        marginTop: "15px"
                                    }
                                }), (0, D.jsx)(x(), {
                                    href: "/strategies/crab",
                                    passHref: !0,
                                    children: (0, D.jsx)(E.Z, {
                                        onClick: function () {
                                            return r(B.Nc.NAV_HERO_DOWN_START_EARNING)
                                        },
                                        className: a.contentSectionButton,
                                        children: "Start Earning"
                                    })
                                })]
                            }), (0, D.jsx)("div", {
                                style: {
                                    marginTop: "19vh"
                                }
                            }), (0, D.jsx)("div", {
                                className: a.verticalImage,
                                children: (0, D.jsx)(j(), {
                                    src: K,
                                    alt: "Auction",
                                    placeholder: "blur"
                                })
                            }), (0, D.jsx)("div", {
                                style: {
                                    marginTop: "5vh"
                                }
                            }), (0, D.jsxs)("div", {
                                className: a.footer,
                                children: [(0, D.jsx)("div", {
                                    className: a.footerLinks,
                                    children: "© 2023 Orion Protocol. All rights reserved"
                                }), (0, D.jsxs)("div", {
                                    className: a.footerSocial,
                                    children: [(0, D.jsx)("div", {
                                        onClick: function () {
                                            return r(B.Nc.NAV_SOCIAL_TWITTER)
                                        },
                                        children: (0, D.jsx)(x(), {
                                            href: "https://twitter.com",
                                            passHref: !0,
                                            children: (0, D.jsx)(j(), {
                                                className: a.socialIcon,
                                                src: m,
                                                alt: "Orion Twitter"
                                            })
                                        })
                                    }), (0, D.jsx)("div", {
                                        onClick: function () {
                                            return r(B.Nc.NAV_SOCIAL_GITHUB)
                                        },
                                        children: (0, D.jsx)(x(), {
                                            href: "https://t.me",
                                            passHref: !0,
                                            children: (0, D.jsx)(j(), {
                                                className: a.socialIcon,
                                                src: S,
                                                alt: "Orion Github"
                                            })
                                        })
                                    }), (0, D.jsx)("div", {
                                        onClick: function () {
                                            return r(B.Nc.NAV_SOCIAL_MEDIUM)
                                        },
                                        children: (0, D.jsx)(x(), {
                                            href: "https://medium.com",
                                            passHref: !0,
                                            children: (0, D.jsx)(j(), {
                                                className: a.socialIcon,
                                                src: v,
                                                alt: "Orion Medium"
                                            })
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                ne = n(16587);
            var ie = function () {
                var e = (0, H.Z)().track;
                return (0, i.useEffect)((function () {
                    e(B.Nc.LANDING_VISIT)
                }), [e]), (0, D.jsxs)("div", {
                    children: [(0, D.jsx)(ne.Z, {}), (0, D.jsx)(a.Z, {
                        smDown: !0,
                        children: (0, D.jsx)(_, {})
                    }), (0, D.jsx)(a.Z, {
                        mdUp: !0,
                        children: (0, D.jsx)(te, {})
                    })]
                })
            }
        },
        16587: function (e, t, n) {
            "use strict";
            n(2784);
            var i = n(55351),
                a = n(709),
                s = n(52322);
            t.Z = function () {
                return (0, s.jsx)(i.PB, {
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
        87314: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function () {
                return n(414)
            }])
        }
    },
    function (e) {
        e.O(0, [5351, 9774, 2888, 179], (function () {
            return t = 87314, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);
//# sourceMappingURL=index-4c81c7365ee5175d.js.map