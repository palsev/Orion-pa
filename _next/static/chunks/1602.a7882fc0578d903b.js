"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1602], {
        81602: function (e, n, t) {
            t.r(n);
            t(25047);
            var r = t(88540);
            t(6391), t(85060), t(77160);

            function a(e, n, t, r, a, o, i) {
                try {
                    var u = e[o](i),
                        c = u.value
                } catch (s) {
                    return void t(s)
                }
                u.done ? n(c) : Promise.resolve(c).then(r, a)
            }

            function o(e) {
                return function () {
                    var n = this,
                        t = arguments;
                    return new Promise((function (r, o) {
                        var i = e.apply(n, t);

                        function u(e) {
                            a(i, r, o, u, c, "next", e)
                        }

                        function c(e) {
                            a(i, r, o, u, c, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            n.default = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.heading,
                    t = e.description,
                    a = e.icon,
                    i = e.html,
                    u = e.button;
                return function () {
                    var e = o(regeneratorRuntime.mark((function e(o) {
                        var c, s, d, l;
                        return regeneratorRuntime.wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (c = o.wallet, s = o.address, d = o.stateSyncStatus, l = o.stateStore, null !== s) {
                                        e.next = 5;
                                        break
                                    }
                                    if (!d.address) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.next = 5, new Promise((function (e) {
                                        d.address && d.address.then(e), setTimeout((function () {
                                            null === s && e()
                                        }), 500)
                                    }));
                                case 5:
                                    if (l.address.get() || !c || !c.name) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return", {
                                        heading: n || "Login and Authorize Your Wallet",
                                        description: t || "This dapp requires access to your wallet, please login and authorize access to your ".concat(c.name, " accounts to continue."),
                                        eventCode: "loginFail",
                                        action: c.connect,
                                        icon: a || r.c,
                                        html: i,
                                        button: u
                                    });
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (n) {
                        return e.apply(this, arguments)
                    }
                }()
            }
        }
    }
]);
//# sourceMappingURL=1602.a7882fc0578d903b.js.map