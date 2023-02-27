(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/index/index"], {
    "4a5d": function (n, t, i) {},
    8069: function (n, t, i) {
      "use strict";
      i.r(t);
      var e = i("da67"),
        a = i.n(e);
      for (var u in e) "default" !== u && function (n) {
        i.d(t, n, (function () {
          return e[n]
        }))
      }(u);
      t["default"] = a.a
    },
    c29d: function (n, t, i) {
      "use strict";
      var e = i("4a5d"),
        a = i.n(e);
      a.a
    },
    c774: function (n, t, i) {
      "use strict";
      var e, a = function () {
          var n = this,
            t = n.$createElement,
            i = (n._self._c, n.__map(n.menuList, (function (t, i) {
              var e = n.__map(t.frontMenu, (function (t, i) {
                var e = n.__map(t.child, (function (t, i) {
                  var e = t.menu.split("列表");
                  return {
                    $orig: n.__get_orig(t),
                    g0: e
                  }
                }));
                return {
                  $orig: n.__get_orig(t),
                  l0: e
                }
              }));
              return {
                $orig: n.__get_orig(t),
                l1: e
              }
            })))
            // ,
            // e = n.zhaopinxinxilist[0].tupian.substring(0, 4),
            // a = n.zhaopinxinxilist[0].tupian.split(","),
            // u = n.zhaopinxinxilist[1].tupian.substring(0, 4),
            // o = n.zhaopinxinxilist[1].tupian.split(","),
            // c = n.zhaopinxinxilist[2].tupian.substring(0, 4),
            // r = n.zhaopinxinxilist[2].tupian.split(","),
            // s = n.zhaopinxinxilist[3].tupian.substring(0, 4),
            // l = n.zhaopinxinxilist[3].tupian.split(","),
            // p = n.zhaopinxinxilist[4].tupian.substring(0, 4),
            // f = n.zhaopinxinxilist[4].tupian.split(","),
            // d = n.zhaopinxinxilist[5].tupian.substring(0, 4),
            // h = n.zhaopinxinxilist[5].tupian.split(","),
            // g = n.__map(n.news, (function (t, i) {
            //   var e = t.addtime.split(" ");
            //   return {
            //     $orig: n.__get_orig(t),
            //     g13: e
            //   }
            // }));
          // n.$mp.data = Object.assign({}, {
          //   $root: {
          //     l2: i,
          //     g1: e,
          //     g2: a,
          //     g3: u,
          //     g4: o,
          //     g5: c,
          //     g6: r,
          //     g7: s,
          //     g8: l,
          //     g9: p,
          //     g10: f,
          //     g11: d,
          //     g12: h,
          //     l3: g
          //   }
          // })
        },
        u = [];
      i.d(t, "b", (function () {
        return a
      })), i.d(t, "c", (function () {
        return u
      })), i.d(t, "a", (function () {
        return e
      }))
    },
    d537: function (n, t, i) {
      "use strict";
      (function (n) {
        i("6cdc"), i("921b");
        e(i("66fd"));
        var t = e(i("f75a"));

        function e(n) {
          return n && n.__esModule ? n : {
            default: n
          }
        }
        n(t.default)
      }).call(this, i("543d")["createPage"])
    },
    da67: function (n, t, i) {
      "use strict";
      (function (n) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var e = u(i("a34a")),
          a = u(i("2971"));

        function u(n) {
          return n && n.__esModule ? n : {
            default: n
          }
        }

        function o(n, t, i, e, a, u, o) {
          try {
            var c = n[u](o),
              r = c.value
          } catch (s) {
            return void i(s)
          }
          c.done ? t(r) : Promise.resolve(r).then(e, a)
        }

        function c(n) {
          return function () {
            var t = this,
              i = arguments;
            return new Promise((function (e, a) {
              var u = n.apply(t, i);

              function c(n) {
                o(u, e, a, c, r, "next", n)
              }

              function r(n) {
                o(u, e, a, c, r, "throw", n)
              }
              c(void 0)
            }))
          }
        }
        i("651d");
        var r = function () {
            return Promise.all([i.e("common/vendor"), i.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(i.bind(null, "b704"))
          },
          s = {
            components: {
              uniIcons: r
            },
            data: function () {
              return {
                options2: {
                  effect: "flip",
                  loop: !0
                },
                options3: {
                  effect: "cube",
                  loop: !0,
                  cubeEffect: {
                    shadow: !0,
                    slideShadows: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                  }
                },
                rows: 2,
                column: 4,
                iconArr: ["cuIcon-same", "cuIcon-deliver", "cuIcon-evaluate", "cuIcon-shop", "cuIcon-ticket", "cuIcon-cascades", "cuIcon-discover", "cuIcon-question", "cuIcon-pic", "cuIcon-filter", "cuIcon-footprint", "cuIcon-pulldown", "cuIcon-pullup", "cuIcon-moreandroid", "cuIcon-refund", "cuIcon-qrcode", "cuIcon-remind", "cuIcon-profile", "cuIcon-home", "cuIcon-message", "cuIcon-link", "cuIcon-lock", "cuIcon-unlock", "cuIcon-vip", "cuIcon-weibo", "cuIcon-activity", "cuIcon-friendadd", "cuIcon-friendfamous", "cuIcon-friend", "cuIcon-goods", "cuIcon-selection"],
                role: "",
                aboutUsDetail: {},
                menuList: [],
                swiperMenuList: [],
                user: {},
                tableName: "",
                swiperList: [],
                // zhaopinxinxilist: [],
                // news: []
              }
            },
            computed: {
              baseUrl: function () {
                return this.$base.url
              }
            },
            onLoad: function () {
              var t = c(e.default.mark((function t() {
                var i, u, o, c = this;
                return e.default.wrap((function (t) {
                  while (1) switch (t.prev = t.next) {
                    case 0:
                      return this.role = n.getStorageSync("role"), i = n.getStorageSync("nowTable"), t.next = 4, this.$api.session(i);
                    case 4:
                      u = t.sent, this.user = u.data, this.tableName = i, o = a.default.list(), this.menuList = o, this.menuList.forEach((function (n, t) {
                        c.role == n.roleName && n.frontMenu.forEach((function (n, t) {
                          n.child[0].buttons.indexOf("查看") > -1 && c.swiperMenuList.push(n)
                        }))
                      }));
                    case 10:
                    case "end":
                      return t.stop()
                  }
                }), t, this)
              })));

              function i() {
                return t.apply(this, arguments)
              }
              return i
            }(),
            onShow: function () {
              var t = c(e.default.mark((function t() {
                var i, a, u, o, c, r, s, l;
                return e.default.wrap((function (t) {
                  while (1) switch (t.prev = t.next) {
                    case 0:
                      return i = [], t.next = 3, this.$api.page("config", {
                        page: 1,
                        limit: 5
                      });
                    case 3:
                      for (a = t.sent, u = !0, o = !1, c = void 0, t.prev = 7, r = a.data.list[Symbol.iterator](); !(u = (s = r.next()).done); u = !0) l = s.value, l.name.indexOf("picture") >= 0 && l.value && "" != l.value && null != l.value && i.push({
                        img: l.value,
                        title: l.name
                      });
                      t.next = 15;
                      break;
                    case 11:
                      t.prev = 11, t.t0 = t["catch"](7), o = !0, c = t.t0;
                    case 15:
                      t.prev = 15, t.prev = 16, u || null == r.return || r.return();
                    case 18:
                      if (t.prev = 18, !o) {
                        t.next = 21;
                        break
                      }
                      throw c;
                    case 21:
                      return t.finish(18);
                    case 22:
                      return t.finish(15);
                    case 23:
                      return i && (this.swiperList = i), this.getAboutUs(), t.next = 27
                      // , this.$api.list("news", {
                      //   page: 1,
                      //   limit: 6
                      // })
                      ;
                    case 27:
                      if (a = t.sent, null === n.getStorageSync("userid")) {
                        t.next = 35;
                        break
                      }
                      return t.next = 32
                      // , this.$api.recommend2("zhaopinxinxi", {
                      //   page: 1,
                      //   limit: 6
                      // })
                      ;
                    case 32:
                      a = t.sent, t.next = 38;
                      break;
                    case 35:
                      return t.next = 37
                      // , this.$api.recommend("zhaopinxinxi", {
                      //   page: 1,
                      //   limit: 6
                      // })
                      ;
                    case 37:
                      a = t.sent;
                    case 38:
                      // this.zhaopinxinxilist = a.data.list;
                    case 39:
                    case "end":
                      return t.stop()
                  }
                }), t, this, [
                  [7, 11, 15, 23],
                  [16, , 18, 22]
                ])
              })));

              function i() {
                return t.apply(this, arguments)
              }
              return i
            }(),
            methods: {
              onSwiperTap: function (n) {},
              getAboutUs: function () {
                var n = c(e.default.mark((function n() {
                  var t;
                  return e.default.wrap((function (n) {
                    while (1) switch (n.prev = n.next) {
                      case 0:
                        return n.next = 2, this.$api.info("aboutus", 1);
                      case 2:
                        t = n.sent, this.aboutUsDetail = t.data;
                      case 4:
                      case "end":
                        return n.stop()
                    }
                  }), n, this)
                })));

                function t() {
                  return n.apply(this, arguments)
                }
                return t
              }(),
              // onNewsDetailTap: function (n) {
              //   this.$utils.jump("../news-detail/news-detail?id=".concat(n))
              // },
              onDetailTap: function (n, t) {
                this.$utils.jump("../".concat(n, "/detail?id=").concat(t))
              },
              onPageTap: function (t) {
                n.navigateTo({
                  url: "../".concat(t, "/list"),
                  fail: function () {
                    n.switchTab({
                      url: "../".concat(t, "/list")
                    })
                  }
                })
              },
              onPageTap2: function (t) {
                n.setStorageSync("useridTag", 0), n.navigateTo({
                  url: t,
                  fail: function () {
                    n.switchTab({
                      url: t
                    })
                  }
                })
              }
            }
          };
        t.default = s
      }).call(this, i("543d")["default"])
    },
    f75a: function (n, t, i) {
      "use strict";
      i.r(t);
      var e = i("c774"),
        a = i("8069");
      for (var u in a) "default" !== u && function (n) {
        i.d(t, n, (function () {
          return a[n]
        }))
      }(u);
      i("c29d");
      var o, c = i("f0c5"),
        r = Object(c["a"])(a["default"], e["b"], e["c"], !1, null, "24fb34b7", null, !1, e["a"], o);
      t["default"] = r.exports
    }
  },
  [
    ["d537", "common/runtime", "common/vendor"]
  ]
]);