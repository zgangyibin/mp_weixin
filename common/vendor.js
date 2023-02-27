(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["common/vendor"], {
    "0a4f": function (e, l, a) {
      "use strict";

      function t(e) {
        var l = this;
        if ("undefined" === typeof e) {
          var a = l.rtlTranslate ? -1 : 1;
          e = l && l.translate && l.translate * a || 0
        }
        var t = l.params,
          n = l.maxTranslate() - l.minTranslate(),
          r = l.progress,
          i = l.isBeginning,
          u = l.isEnd,
          o = i,
          s = u;
        0 === n ? (r = 0, i = !0, u = !0) : (r = (e - l.minTranslate()) / n, i = r <= 0, u = r >= 1), Object.assign(l, {
          progress: r,
          isBeginning: i,
          isEnd: u
        }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && l.updateSlidesProgress(e), i && !o && l.emit("reachBeginning toEdge"), u && !s && l.emit("reachEnd toEdge"), (o && !i || s && !u) && l.emit("fromEdge"), l.emit("progress", r)
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = t
    },
    "1c88": function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = n;
      var t = a("d7bd");

      function n(e) {
        var l = this,
          a = l.touchEventsData,
          n = l.params,
          r = l.touches,
          i = l.rtlTranslate,
          u = l.enabled;
        if (u) {
          var o = e;
          if (o.originalEvent && (o = o.originalEvent), a.isTouched) {
            if (!a.isTouchEvent || "touchmove" === o.type || "touchMove" === o.type || "onTouchmove" === o.type) {
              var s = ("touchmove" === o.type || "touchMove" === o.type || "onTouchmove" === o.type) && o.touches && (o.touches[0] || o.changedTouches[0]),
                v = "touchmove" === o.type || "touchMove" === o.type || "onTouchmove" === o.type ? s.pageX : o.pageX,
                c = "touchmove" === o.type || "touchMove" === o.type || "onTouchmove" === o.type ? s.pageY : o.pageY;
              if (o.preventedByNestedSwiper) return r.startX = v, void(r.startY = c);
              if (!l.allowTouchMove) return l.allowClick = !1, void(a.isTouched && (Object.assign(r, {
                startX: v,
                startY: c,
                currentX: v,
                currentY: c
              }), a.touchStartTime = (0, t.now)()));
              if (a.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
                if (l.isVertical()) {
                  if (c < r.startY && l.translate <= l.maxTranslate() || c > r.startY && l.translate >= l.minTranslate()) return a.isTouched = !1, void(a.isMoved = !1)
                } else if (v < r.startX && l.translate <= l.maxTranslate() || v > r.startX && l.translate >= l.minTranslate()) return;
              if (a.allowTouchCallbacks && l.emit("touch-move", o), !(o.touches && o.touches.length > 1)) {
                r.currentX = v, r.currentY = c;
                var b = r.currentX - r.startX,
                  d = r.currentY - r.startY;
                if (!(l.params.threshold && Math.sqrt(Math.pow(b, 2) + Math.pow(d, 2)) < l.params.threshold)) {
                  var p;
                  if ("undefined" === typeof a.isScrolling) l.isHorizontal() && r.currentY === r.startY || l.isVertical() && r.currentX === r.startX ? a.isScrolling = !1 : b * b + d * d >= 25 && (p = 180 * Math.atan2(Math.abs(d), Math.abs(b)) / Math.PI, a.isScrolling = l.isHorizontal() ? p > n.touchAngle : 90 - p > n.touchAngle);
                  if (a.isScrolling && l.emit("touchMoveOpposite", o), "undefined" === typeof a.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (a.startMoving = !0)), a.isScrolling) a.isTouched = !1;
                  else if (a.startMoving) {
                    l.allowClick = !1, !n.cssMode && o.cancelable && o.preventDefault(), n.touchMoveStopPropagation && !n.nested && o.stopPropagation(), a.isMoved || (n.loop && !n.cssMode && l.loopFix(), a.startTranslate = l.getTranslate(), l.setTransition(0), l.animating && l.$wrapperEl.emit("transitionend", [l]), a.allowMomentumBounce = !1, !n.grabCursor || !0 !== l.allowSlideNext && !0 !== l.allowSlidePrev || l.setGrabCursor(!0), l.emit("sliderFirstMove", o)), l.emit("sliderMove", o), a.isMoved = !0;
                    var f = l.isHorizontal() ? b : d;
                    r.diff = f, f *= n.touchRatio, i && (f = -f), l.swipeDirection = f > 0 ? "prev" : "next", a.currentTranslate = f + a.startTranslate;
                    var h = !0,
                      g = n.resistanceRatio;
                    if (n.touchReleaseOnEdges && (g = 0), f > 0 && a.currentTranslate > l.minTranslate() ? (h = !1, n.resistance && (a.currentTranslate = l.minTranslate() - 1 + Math.pow(-l.minTranslate() + a.startTranslate + f, g))) : f < 0 && a.currentTranslate < l.maxTranslate() && (h = !1, n.resistance && (a.currentTranslate = l.maxTranslate() + 1 - Math.pow(l.maxTranslate() - a.startTranslate - f, g))), h && (o.preventedByNestedSwiper = !0), !l.allowSlideNext && "next" === l.swipeDirection && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate), !l.allowSlidePrev && "prev" === l.swipeDirection && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate), l.allowSlidePrev || l.allowSlideNext || (a.currentTranslate = a.startTranslate), n.threshold > 0) {
                      if (!(Math.abs(f) > n.threshold || a.allowThresholdMove)) return void(a.currentTranslate = a.startTranslate);
                      if (!a.allowThresholdMove) return a.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, a.currentTranslate = a.startTranslate, void(r.diff = l.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                    }
                    n.followFinger && !n.cssMode && ((n.freeMode && n.freeMode.enabled && l.freeMode || n.watchSlidesProgress) && (l.updateActiveIndex(), l.updateSlidesClasses()), l.params.freeMode && n.freeMode.enabled && l.freeMode && l.freeMode.onTouchMove(), l.updateProgress(a.currentTranslate), l.setTranslate(a.currentTranslate))
                  }
                }
              }
            }
          } else a.startMoving && a.isScrolling && l.emit("touchMoveOpposite", o)
        }
      }
    },
    "1e71": function (e, l, a) {
      "use strict";

      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
          a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          t = arguments.length > 3 ? arguments[3] : void 0,
          n = this,
          r = e;
        return n.params.loop && (r += n.loopedSlides), n.slideTo(r, l, a, t)
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = t
    },
    2359: function (e, l, a) {
      "use strict";

      function t(e) {
        var l = e.swiper,
          a = e.extendParams,
          t = e.on;
        e.emit;

        function n(e, a) {
          if (l.$wrapperEl) {
            var t = l.params.navigation;
            e && (l.$wrapperEl[a ? "add".concat(e) : "remove".concat(e)](t.disabledClass), l.params.watchOverflow && l.enabled && l.$wrapperEl[l.isLocked ? "add".concat(e) : "remove".concat(e)](t.lockClass))
          }
        }

        function r() {
          if (!l.params.loop) {
            var e = l.navigation;
            e.$nextEl, e.$prevEl;
            n("PrevElClass", l.isBeginning && !l.params.rewind), n("NextElClass", l.isEnd && !l.params.rewind)
          }
        }

        function i(e) {
          (!l.isBeginning || l.params.loop || l.params.rewind) && l.slidePrev()
        }

        function u() {
          (!l.isEnd || l.params.loop || l.params.rewind) && l.slideNext()
        }

        function o() {
          var e = l.params.navigation;
          if ((e.slot || e.custom) && (e.nextEl = !0, e.prevEl = !0), e.nextEl || e.prevEl || e.slot || e.custom) {
            e.slot ? l.native.updateData({
              showPrevButtonSlot: !0,
              showNextButtonSlot: !0
            }) : e.custom || l.native.updateData({
              showPrevButton: !0,
              showNextButton: !0
            });
            var a = e.nextEl,
              t = e.prevEl;
            a && l.on("nextClick", u), t && l.on("prevClick", i), Object.assign(l.navigation, {
              $nextEl: a,
              nextEl: a,
              $prevEl: t,
              prevEl: t
            }), l.enabled || (a && l.$wrapperEl.addNextElClass(e.lockClass), t && l.$wrapperEl.addPrevElClass(e.lockClass))
          }
        }

        function s() {
          var e = l.navigation,
            a = e.$nextEl,
            t = e.$prevEl;
          a && (l.off("nextClick", u), l.$wrapperEl.removeNextElClass(l.params.navigation.disabledClass)), t && (l.off("prevClick", i), l.$wrapperEl.removePrevElClass(l.params.navigation.disabledClass))
        }
        a({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock"
          }
        }), l.navigation = {
          nextEl: null,
          $nextEl: null,
          prevEl: null,
          $prevEl: null
        }, t("init", (function () {
          o(), r()
        })), t("toEdge fromEdge lock unlock", (function () {
          r()
        })), t("destroy", (function () {
          s()
        })), t("enable disable", (function () {
          var e = l.navigation,
            a = e.$nextEl,
            t = e.$prevEl;
          a && l.$wrapperEl[l.enabled ? "removeNextElClass" : "addNextElClass"](l.params.navigation.lockClass), t && l.$wrapperEl[l.enabled ? "removePrevElClass" : "addPrevElClass"](l.params.navigation.lockClass)
        })), Object.assign(l.navigation, {
          update: r,
          init: o,
          destroy: s
        })
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = t
    },
    2365: function (e, l, a) {
      "use strict";

      function t(e, l) {
        var a = this,
          t = a.rtlTranslate,
          n = a.params,
          r = a.$wrapperEl,
          i = a.wrapperEl,
          u = a.progress,
          o = 0,
          s = 0,
          v = 0;
        if (!isNaN(e) && r) {
          var c;
          a.isHorizontal() ? o = t ? -e : e : s = e, n.roundLengths && (o = Math.floor(o), s = Math.floor(s)), n.cssMode ? i[a.isHorizontal() ? "scrollLeft" : "scrollTop"] = a.isHorizontal() ? -o : -s : n.virtualTranslate || r.transform("translate3d(".concat(o, "px, ").concat(s, "px, ").concat(v, "px)")), a.previousTranslate = a.translate, a.translate = a.isHorizontal() ? o : s;
          var b = a.maxTranslate() - a.minTranslate();
          c = 0 === b ? 0 : (e - a.minTranslate()) / b, c !== u && a.updateProgress(e), a.emit("setTranslate", a.translate, l)
        }
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = t
    },
    "263a": function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = u;
      var t = i(a("3430")),
        n = i(a("41e4")),
        r = i(a("af24"));

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function u(e) {
        var l = e.swiper,
          a = e.extendParams,
          i = e.on;
        a({
          cardsEffect: {
            slideShadows: !0,
            transformEl: null,
            rotate: !0
          }
        });
        var u = function () {
            for (var e = l.slides, a = l.activeIndex, t = l.params.cardsEffect, r = l.touchEventsData, i = r.startTranslate, u = r.isTouched, o = l.translate, s = 0; s < e.length; s += 1) {
              var v = e[s],
                c = v.progress,
                b = Math.min(Math.max(c, -4), 4),
                d = v.swiperSlideOffset;
              l.params.centeredSlides && !l.params.cssMode && l.$wrapperEl.transform("translateX(".concat(l.minTranslate(), "px)")), l.params.centeredSlides && l.params.cssMode && (d -= e.swiperSlideOffset);
              var p = l.params.cssMode ? -d - l.translate : -d,
                f = 0,
                h = -100 * Math.abs(b),
                g = 1,
                m = -2 * b,
                y = 8 - .75 * Math.abs(b),
                w = (s === a || s === a - 1) && b > 0 && b < 1 && (u || l.params.cssMode) && o < i,
                _ = (s === a || s === a + 1) && b < 0 && b > -1 && (u || l.params.cssMode) && o > i;
              if (w || _) {
                var S = Math.pow(1 - Math.abs((Math.abs(b) - .5) / .5), .5);
                m += -28 * b * S, g += -.5 * S, y += 96 * S, f = "".concat(-25 * S * Math.abs(b), "%")
              }
              if (p = b < 0 ? "calc(".concat(p, "px + (").concat(y * Math.abs(b), "%))") : b > 0 ? "calc(".concat(p, "px + (-").concat(y * Math.abs(b), "%))") : "".concat(p, "px"), !l.isHorizontal()) {
                var x = f;
                f = p, p = x
              }
              var T = "".concat(b < 0 ? 1 + (1 - g) * b : 1 - (1 - g) * b),
                E = "translate3d(".concat(p, ", ").concat(f, ", ").concat(h, "px) rotateZ(").concat(t.rotate ? m : 0, "deg) scale(").concat(T, ")");
              v.css({
                zIndex: -Math.abs(Math.round(c)) + e.length
              });
              var O = (0, n.default)(t, v);
              O.transform(E), l.params.willChange && O.willChange("transform"), e[s].addClass("swiper-slide-cards")
            }
          },
          o = function (e) {
            for (var a = l.params.cardsEffect.transformEl, t = a ? l.slides.find(a) : l.slides, n = 0; n < t.length; n += 1) t[n].transition(e);
            (0, r.default)({
              swiper: l,
              duration: e,
              transformEl: a
            })
          };
        (0, t.default)({
          effect: "cards",
          swiper: l,
          on: i,
          setTranslate: u,
          setTransition: o,
          perspective: function () {
            return !0
          },
          overwriteParams: function () {
            return {
              watchSlidesProgress: !0,
              virtualTranslate: !l.params.cssMode
            }
          }
        })
      }
    },
    2747: function (e, l, a) {
      "use strict";

      function t(e) {
        var l, a, t = this,
          n = t.rtlTranslate ? t.translate : -t.translate,
          r = t.slidesGrid,
          i = t.snapGrid,
          u = t.params,
          o = t.activeIndex,
          s = t.realIndex,
          v = t.snapIndex,
          c = e;
        if ("undefined" === typeof c) {
          for (var b = 0; b < r.length; b += 1) "undefined" !== typeof r[b + 1] ? n >= r[b] && n < r[b + 1] - (r[b + 1] - r[b]) / 2 ? c = b : n >= r[b] && n < r[b + 1] && (c = b + 1) : n >= r[b] && (c = b);
          u.normalizeSlideIndex && (c < 0 || "undefined" === typeof c) && (c = 0)
        }
        if (i.indexOf(n) >= 0) l = i.indexOf(n);
        else {
          var d = Math.min(u.slidesPerGroupSkip, c);
          l = d + Math.floor((c - d) / u.slidesPerGroup)
        }(l >= i.length && (l = i.length - 1), t.loopedSlides && (t.slides.filter((function (e) {
          return e.index >= t.loopedSlides && e.index < t.slides.length - t.loopedSlides
        })).forEach((function (e, l) {
          e.dataSwiperSlideIndex = e.index - t.loopedSlides
        })), t.slides.filter((function (e) {
          return e.index < t.loopedSlides
        })).forEach((function (e, l) {
          t.slides[t.slides.length - 3 * t.loopedSlides + l] && (e.dataSwiperSlideIndex = t.slides[t.slides.length - 3 * t.loopedSlides + l].index)
        })), t.slides.filter((function (e) {
          return e.index >= t.slides.length - t.loopedSlides
        })).forEach((function (e, l) {
          e.dataSwiperSlideIndex = t.slides[l].index
        }))), c !== o) ? (a = t.virtual && u.virtual.enabled || void 0 == t.slides[c].dataSwiperSlideIndex || null == t.slides[c].dataSwiperSlideIndex ? c : t.slides[c].dataSwiperSlideIndex, Object.assign(t, {
          snapIndex: l,
          realIndex: a,
          previousIndex: o,
          activeIndex: c
        }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), s !== a && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange", c)) : l !== v && (t.snapIndex = l, t.emit("snapIndexChange"))
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = t
    },
    "278a": function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = n;
      var t = a("d7bd");

      function n(e) {
        var l = this,
          a = l.touchEventsData,
          n = l.params,
          r = l.touches,
          i = l.enabled;
        if (i && (!l.animating || !n.preventInteractionOnTransition)) {
          !l.animating && n.cssMode && n.loop && l.loopFix();
          var u = e;
          if (u.originalEvent && (u = u.originalEvent), a.isTouchEvent = "touchstart" === u.type || "touchStart" === u.type || "onTouchstart" === u.type, (a.isTouchEvent || !("which" in u) || 3 !== u.which) && !(!a.isTouchEvent && "button" in u && u.button > 0) && (!a.isTouched || !a.isMoved)) {
            !!n.noSwipingClass && n.noSwipingClass, n.noSwipingSelector ? n.noSwipingSelector : ".".concat(n.noSwipingClass), !u.target || u.target.shadowRoot;
            if (n.noSwiping) l.allowClick = !0;
            else if (!n.swipeHandler || $targetEl.closest(n.swipeHandler)[0]) {
              r.currentX = "touchstart" === u.type || "touchStart" === u.type || "onTouchstart" === u.type ? u.touches[0].pageX : u.pageX, r.currentY = "touchstart" === u.type || "touchStart" === u.type || "onTouchstart" === u.type ? u.touches[0].pageY : u.pageY;
              var o = r.currentX,
                s = r.currentY;
              n.edgeSwipeDetection || n.iOSEdgeSwipeDetection, n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
              Object.assign(a, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
              }), r.startX = o, r.startY = s, a.touchStartTime = (0, t.now)(), l.allowClick = !0, l.updateSize(), l.swipeDirection = void 0, n.threshold > 0 && (a.allowThresholdMove = !1), l.emit("touch-start", u)
            }
          }
        }
      }
    },
    2952: function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = void 0;
      var t = {
        contact: "",
        person: "",
        personadd: "",
        "contact-filled": "",
        "person-filled": "",
        "personadd-filled": "",
        phone: "",
        email: "",
        chatbubble: "",
        chatboxes: "",
        "phone-filled": "",
        "email-filled": "",
        "chatbubble-filled": "",
        "chatboxes-filled": "",
        weibo: "",
        weixin: "",
        pengyouquan: "",
        chat: "",
        qq: "",
        videocam: "",
        camera: "",
        mic: "",
        location: "",
        "mic-filled": "",
        speech: "",
        "location-filled": "",
        micoff: "",
        image: "",
        map: "",
        compose: "",
        trash: "",
        upload: "",
        download: "",
        close: "",
        redo: "",
        undo: "",
        refresh: "",
        star: "",
        plus: "",
        minus: "",
        circle: "",
        checkbox: "",
        "close-filled": "",
        clear: "",
        "refresh-filled": "",
        "star-filled": "",
        "plus-filled": "",
        "minus-filled": "",
        "circle-filled": "",
        "checkbox-filled": "",
        closeempty: "",
        refreshempty: "",
        reload: "",
        starhalf: "",
        spinner: "",
        "spinner-cycle": "",
        search: "",
        plusempty: "",
        forward: "",
        back: "",
        "left-nav": "",
        checkmarkempty: "",
        home: "",
        navigate: "",
        gear: "",
        paperplane: "",
        info: "",
        help: "",
        locked: "",
        more: "",
        flag: "",
        "home-filled": "",
        "gear-filled": "",
        "info-filled": "",
        "help-filled": "",
        "more-filled": "",
        settings: "",
        list: "",
        bars: "",
        loop: "",
        paperclip: "",
        eye: "",
        arrowup: "",
        arrowdown: "",
        arrowleft: "",
        arrowright: "",
        arrowthinup: "",
        arrowthindown: "",
        arrowthinleft: "",
        arrowthinright: "",
        pulldown: "",
        closefill: "",
        sound: "",
        scan: ""
      };
      l.default = t
    },
    2971: function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = void 0;
      var t = {
          list: function () {
            return [{
              backMenu: [{
                child: [{
                  appFrontIcon: "cuIcon-time",
                  buttons: ["新增", "查看", "修改", "删除"],
                  menu: "学生",
                  menuJump: "列表",
                  tableName: "xuesheng"
                }],
                menu: "学生管理"
              }, {
                child: [{
                  appFrontIcon: "cuIcon-form",
                  buttons: ["新增", "查看", "修改", "删除", "审核"],
                  menu: "企业",
                  menuJump: "列表",
                  tableName: "qiye"
                }],
                menu: "企业管理"
              }, {
                child: [{
                  appFrontIcon: "cuIcon-paint",
                  buttons: ["新增", "查看", "修改", "删除"],
                  menu: "职位类别",
                  menuJump: "列表",
                  tableName: "zhiweileibie"
                }],
                menu: "职位类别管理"
              }, {
                child: [{
                  appFrontIcon: "cuIcon-send",
                  buttons: ["查看", "修改", "删除"],
                  menu: "招聘信息",
                  menuJump: "列表",
                  tableName: "zhaopinxinxi"
                }],
                menu: "招聘信息管理"
              }, {
                child: [{
                  appFrontIcon: "cuIcon-shop",
                  buttons: ["查看", "修改", "删除"],
                  menu: "应聘信息",
                  menuJump: "列表",
                  tableName: "yingpinxinxi"
                }],
                menu: "应聘信息管理"
              }, {
                child: [{
                  appFrontIcon: "cuIcon-copy",
                  buttons: ["查看", "修改", "删除"],
                  menu: "宣讲会",
                  menuJump: "列表",
                  tableName: "xuanjianghui"
                }],
                menu: "宣讲会管理"
              }, {
                child: [{
                  appFrontIcon: "cuIcon-qrcode",
                  buttons: ["查看", "修改", "删除"],
                  menu: "宣讲会报名",
                  menuJump: "列表",
                  tableName: "xuanjianghuibaoming"
                }],
                menu: "宣讲会报名管理"
              }, {
                child: [{
                  appFrontIcon: "cuIcon-shop",
                  buttons: ["查看", "修改", "删除"],
                  menu: "求职简历",
                  menuJump: "列表",
                  tableName: "qiuzhijianli"
                }],
                menu: "求职简历管理"
              }, {
                child: [{
                  appFrontIcon: "cuIcon-link",
                  buttons: ["查看", "修改", "删除"],
                  menu: "就业信息",
                  menuJump: "列表",
                  tableName: "jiuyexinxi"
                }],
                menu: "就业信息管理"
              }, {
                child: [{
                  appFrontIcon: "cuIcon-goods",
                  buttons: ["新增", "查看", "修改", "删除"],
                  menu: "新闻资讯",
                  tableName: "news"
                }, {
                  appFrontIcon: "cuIcon-qrcode",
                  buttons: ["查看", "修改"],
                  menu: "关于我们",
                  tableName: "aboutus"
                }, {
                  appFrontIcon: "cuIcon-brand",
                  buttons: ["新增", "查看", "修改", "删除"],
                  menu: "轮播图管理",
                  tableName: "config"
                }],
                menu: "系统管理"
              }],
              frontMenu: [{
                child: [{
                  appFrontIcon: "cuIcon-paint",
                  buttons: ["应聘"],
                  menu: "招聘信息列表",
                  menuJump: "列表",
                  tableName: "zhaopinxinxi"
                }],
                menu: "招聘信息模块"
              }, {
                child: [{
                  appFrontIcon: "cuIcon-wenzi",
                  buttons: ["报名"],
                  menu: "宣讲会列表",
                  menuJump: "列表",
                  tableName: "xuanjianghui"
                }],
                menu: "宣讲会模块"
              }],
              hasBackLogin: "是",
              hasBackRegister: "否",
              hasFrontLogin: "否",
              hasFrontRegister: "否",
              roleName: "管理员",
              tableName: "users"
            }, {
              backMenu: [{
                child: [{
                  appFrontIcon: "cuIcon-shop",
                  buttons: ["查看"],
                  menu: "应聘信息",
                  menuJump: "列表",
                  tableName: "yingpinxinxi"
                }],
                menu: "应聘信息管理"
              }, {
                child: [{
                  appFrontIcon: "cuIcon-qrcode",
                  buttons: ["查看"],
                  menu: "宣讲会报名",
                  menuJump: "列表",
                  tableName: "xuanjianghuibaoming"
                }],
                menu: "宣讲会报名管理"
              }, {
                child: [{
                  appFrontIcon: "cuIcon-shop",
                  buttons: ["新增", "查看", "修改", "删除"],
                  menu: "求职简历",
                  menuJump: "列表",
                  tableName: "qiuzhijianli"
                }],
                menu: "求职简历管理"
              }, {
                child: [{
                  appFrontIcon: "cuIcon-link",
                  buttons: ["新增", "查看", "修改", "删除"],
                  menu: "就业信息",
                  menuJump: "列表",
                  tableName: "jiuyexinxi"
                }],
                menu: "就业信息管理"
              }, {
                child: [{
                  appFrontIcon: "cuIcon-favor",
                  buttons: ["查看"],
                  menu: "我的收藏管理",
                  tableName: "storeup"
                }],
                menu: "我的收藏管理"
              }],
              frontMenu: [{
                child: [{
                  appFrontIcon: "cuIcon-paint",
                  buttons: ["应聘"],
                  menu: "招聘信息列表",
                  menuJump: "列表",
                  tableName: "zhaopinxinxi"
                }],
                menu: "招聘信息模块"
              }, {
                child: [{
                  appFrontIcon: "cuIcon-wenzi",
                  buttons: ["报名"],
                  menu: "宣讲会列表",
                  menuJump: "列表",
                  tableName: "xuanjianghui"
                }],
                menu: "宣讲会模块"
              }],
              hasBackLogin: "否",
              hasBackRegister: "否",
              hasFrontLogin: "是",
              hasFrontRegister: "是",
              roleName: "学生",
              tableName: "xuesheng"
            }, {
              backMenu: [{
                child: [{
                  appFrontIcon: "cuIcon-send",
                  buttons: ["新增", "查看", "修改", "删除"],
                  menu: "招聘信息",
                  menuJump: "列表",
                  tableName: "zhaopinxinxi"
                }],
                menu: "招聘信息管理"
              }, {
                child: [{
                  appFrontIcon: "cuIcon-shop",
                  buttons: ["查看", "审核"],
                  menu: "应聘信息",
                  menuJump: "列表",
                  tableName: "yingpinxinxi"
                }],
                menu: "应聘信息管理"
              }, {
                child: [{
                  appFrontIcon: "cuIcon-copy",
                  buttons: ["新增", "查看", "修改", "删除"],
                  menu: "宣讲会",
                  menuJump: "列表",
                  tableName: "xuanjianghui"
                }],
                menu: "宣讲会管理"
              }, {
                child: [{
                  appFrontIcon: "cuIcon-qrcode",
                  buttons: ["查看", "审核"],
                  menu: "宣讲会报名",
                  menuJump: "列表",
                  tableName: "xuanjianghuibaoming"
                }],
                menu: "宣讲会报名管理"
              }, {
                child: [{
                  appFrontIcon: "cuIcon-shop",
                  buttons: ["查看"],
                  menu: "求职简历",
                  menuJump: "列表",
                  tableName: "qiuzhijianli"
                }],
                menu: "求职简历管理"
              }],
              frontMenu: [{
                child: [{
                  appFrontIcon: "cuIcon-paint",
                  buttons: ["应聘"],
                  menu: "招聘信息列表",
                  menuJump: "列表",
                  tableName: "zhaopinxinxi"
                }],
                menu: "招聘信息模块"
              }, {
                child: [{
                  appFrontIcon: "cuIcon-wenzi",
                  buttons: ["报名"],
                  menu: "宣讲会列表",
                  menuJump: "列表",
                  tableName: "xuanjianghui"
                }],
                menu: "宣讲会模块"
              }],
              hasBackLogin: "是",
              hasBackRegister: "是",
              hasFrontLogin: "否",
              hasFrontRegister: "否",
              roleName: "企业",
              tableName: "qiye"
            }]
          }
        },
        n = t;
      l.default = n
    },
    "29bc": function (e, l, a) {
      "use strict";

      function t(e) {
        return i(e) || r(e) || n()
      }

      function n() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }

      function r(e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
      }

      function i(e) {
        if (Array.isArray(e)) {
          for (var l = 0, a = new Array(e.length); l < e.length; l++) a[l] = e[l];
          return a
        }
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = void 0;
      var u = function (e) {
          return e < 10 ? "0" + e : e + ""
        },
        o = {
          date: {
            init: function (e, l) {
              var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "date",
                n = arguments.length > 3 ? arguments[3] : void 0,
                r = arguments.length > 4 ? arguments[4] : void 0,
                i = arguments.length > 5 ? arguments[5] : void 0,
                o = arguments.length > 6 ? arguments[6] : void 0,
                s = new Date,
                v = [],
                c = new Date(e.toString()),
                b = new Date(l.toString());
              e > l && (c = new Date(l.toString()), b = new Date(e.toString()));
              var d = c.getFullYear(),
                p = (c.getMonth(), b.getFullYear()),
                f = [],
                h = [],
                g = [],
                m = [],
                y = [],
                w = [],
                _ = [],
                S = [],
                x = [];
              switch (a) {
                case "half":
                  x = [].concat(t(r.split(" ")[0].split("-")), i ? t(r.split(" ")[1].split(":")) : [r.split(" ")[1]]);
                  break;
                case "date":
                case "yearMonth":
                  x = r.split("-");
                  break;
                case "dateTime":
                  x = [].concat(t(r.split(" ")[0].split("-")), t(r.split(" ")[1].split(":")));
                  break;
                case "time":
                  x = r.split(":");
                  break
              }
              var T = i ? 1 * x[1] : x[1] + 1,
                E = s.getFullYear(),
                O = s.getMonth() + 1,
                P = s.getDate(),
                C = new Date(d, T, 0).getDate();
              switch (a) {
                case "half":
                case "date":
                case "yearMonth":
                  var k = x[0],
                    M = x[1];
                  if (o) {
                    for (var j = d; j <= E; j++) f.push(j + "");
                    if (k == E)
                      for (var $ = 1; $ <= O; $++) h.push(u($));
                    else
                      for (var D = 1; D <= 12; D++) h.push(u(D));
                    if (M == O)
                      for (var A = 1; A <= P; A++) g.push(u(A));
                    else
                      for (var I = 1; I <= C; I++) g.push(u(I))
                  } else {
                    for (var B = d; B <= p; B++) f.push(B + "");
                    for (var N = 1; N <= 12; N++) h.push(u(N));
                    for (var L = 1; L <= C; L++) g.push(u(L))
                  }
                  break;
                default:
                  for (var z = d; z <= p; z++) f.push(z + "");
                  for (var F = 1; F <= 12; F++) h.push(u(F));
                  for (var R = 1; R <= C; R++) g.push(u(R));
                  break
              }
              for (var U = 0; U < 24; U++) m.push(u(U));
              for (var G = 0; G < 60; G += 1 * n) y.push(u(G));
              for (var H = 0; H < 60; H++) w.push(u(H));
              switch (i && (S = [f.indexOf(x[0]), h.indexOf(x[1]), g.indexOf(x[2]), m.indexOf(x[3]), -1 == y.indexOf(x[4]) ? 0 : y.indexOf(x[4]), w.indexOf(x[5])]), a) {
                case "date":
                  return i ? (v = [S[0], S[1], S[2]], {
                    years: f,
                    months: h,
                    days: g,
                    defaultVal: v
                  }) : (v = [-1 == f.indexOf(x[0]) ? 0 : f.indexOf(x[0]), -1 == h.indexOf(x[1]) ? 0 : h.indexOf(x[1]), -1 == g.indexOf(x[2]) ? 0 : g.indexOf(x[2])], {
                    years: f,
                    months: h,
                    days: g,
                    defaultVal: v
                  });
                case "half":
                  if (_ = [{
                      label: "上午",
                      value: 0
                    }, {
                      label: "下午",
                      value: 1
                    }], i) return v = [S[0], S[1], S[2], S[3]], {
                    years: f,
                    months: h,
                    days: g,
                    areas: _,
                    defaultVal: v
                  };
                  var V = 0;
                  return _.map((function (e, l) {
                    e.label == x[3] && (V = e.value)
                  })), v = [-1 == f.indexOf(x[0]) ? 0 : f.indexOf(x[0]), -1 == h.indexOf(x[1]) ? 0 : h.indexOf(x[1]), -1 == g.indexOf(x[2]) ? 0 : g.indexOf(x[2]), V], {
                    years: f,
                    months: h,
                    days: g,
                    areas: _,
                    defaultVal: v
                  };
                case "yearMonth":
                  return i ? (v = [S[0], S[1]], {
                    years: f,
                    months: h,
                    defaultVal: v
                  }) : (v = [-1 == f.indexOf(x[0]) ? 0 : f.indexOf(x[0]), -1 == h.indexOf(x[1]) ? 0 : h.indexOf(x[1])], {
                    years: f,
                    months: h,
                    defaultVal: v
                  });
                case "dateTime":
                  return v = i ? S : [-1 == f.indexOf(x[0]) ? 0 : f.indexOf(x[0]), -1 == h.indexOf(x[1]) ? 0 : h.indexOf(x[1]), -1 == g.indexOf(x[2]) ? 0 : g.indexOf(x[2]), -1 == m.indexOf(x[3]) ? 0 : m.indexOf(x[3]), -1 == y.indexOf(x[4]) ? 0 : y.indexOf(x[4]), -1 == w.indexOf(x[5]) ? 0 : w.indexOf(x[5])], {
                    years: f,
                    months: h,
                    days: g,
                    hours: m,
                    minutes: y,
                    seconds: w,
                    defaultVal: v
                  };
                case "time":
                  return v = i ? [S[3], S[4], S[5]] : [-1 == m.indexOf(x[0]) ? 0 : m.indexOf(x[0]), -1 == y.indexOf(x[1]) ? 0 : y.indexOf(x[1]), -1 == w.indexOf(x[2]) ? 0 : w.indexOf(x[2])], {
                    hours: m,
                    minutes: y,
                    seconds: w,
                    defaultVal: v
                  }
              }
            },
            initMonths: function (e, l) {
              var a = new Date,
                t = a.getFullYear(),
                n = a.getMonth() + 1,
                r = (a.getDate(), t == e),
                i = [];
              if (l)
                if (r)
                  for (var o = 1; o <= n; o++) i.push(u(o));
                else
                  for (var s = 1; s <= 12; s++) i.push(u(s));
              else
                for (var v = 1; v <= 12; v++) i.push(u(v));
              return i
            },
            initDays: function (e, l, a) {
              var t = new Date,
                n = t.getFullYear(),
                r = t.getMonth() + 1,
                i = t.getDate(),
                o = n == e && r == l,
                s = new Date(e, l, 0).getDate(),
                v = [];
              if (o && a)
                for (var c = 1; c <= i; c++) v.push(u(c));
              else
                for (var b = 1; b <= s; b++) v.push(u(b));
              return v
            }
          },
          limitHour: {
            init: function () {
              for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 7, l = arguments.length > 1 ? arguments[1] : void 0, a = new Date, t = [], n = [], r = [], i = (new Date).getHours(), o = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], s = [], v = 0, c = 0, b = 0, d = 0; d < e; d++) {
                var p = void 0,
                  f = void 0,
                  h = void 0,
                  g = void 0;
                p = a.getFullYear(), f = u(a.getMonth() + 1), h = u(a.getDate()), g = o[a.getDay()];
                var m = "";
                switch (d) {
                  case 0:
                    m = "今天";
                    break;
                  case 1:
                    m = "明天";
                    break;
                  case 2:
                    m = "后天";
                    break;
                  default:
                    m = f + "月" + h + "日 " + g;
                    break
                }
                t.push({
                  label: m,
                  value: p + "-" + f + "-" + h,
                  today: 0 == d
                }), a.setDate(a.getDate() + 1)
              }
              n = i > 12 ? [{
                label: "下午",
                value: 1
              }] : [{
                label: "上午",
                value: 0
              }, {
                label: "下午",
                value: 1
              }];
              for (var y = i > 12 ? i - 12 : i; y <= 12; y++) r.push({
                label: u(y),
                value: u(i > 12 ? y + 12 : y)
              });
              return t.map((function (e, a) {
                e.label == l[0] && (v = a)
              })), 0 != v && (n = this.initAreas(t[v]), r = this.initHours(t[v], n[c])), n.map((function (e, a) {
                e.label == l[1] && (c = a)
              })), r.map((function (e, a) {
                e.label == l[2] && (b = a)
              })), s = [v, c, b], {
                date: t,
                areas: n,
                hours: r,
                defaultVal: s
              }
            },
            initAreas: function (e) {
              var l = [],
                a = (new Date).getHours();
              return l = e.today && a > 12 ? [{
                label: "下午",
                value: 1
              }] : [{
                label: "上午",
                value: 0
              }, {
                label: "下午",
                value: 1
              }], l
            },
            initHours: function (e, l) {
              var a = [],
                t = (new Date).getHours();
              if (e.today)
                if (1 == l.value && t <= 12)
                  for (var n = 1; n <= 12; n++) a.push({
                    label: u(n),
                    value: u(1 == l.value ? n + 12 : n)
                  });
                else
                  for (var r = t > 12 ? t - 12 : t; r <= 12; r++) a.push({
                    label: u(r),
                    value: u(1 == l.value ? r + 12 : r)
                  });
              else
                for (var i = 1; i <= 12; i++) a.push({
                  label: u(i),
                  value: u(1 == l.value ? i + 12 : i)
                });
              return a
            }
          },
          limit: {
            init: function () {
              for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 7, l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20, t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 30, r = arguments.length > 5 ? arguments[5] : void 0, i = new Date, o = new Date((new Date).getTime() + 60 * n * 1e3), s = [], v = [], c = [], b = o.getHours(), d = Math.floor(o.getMinutes() / t) * t, p = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], f = 0, h = 0, g = 0, m = [], y = 0; y < e; y++) {
                var w = void 0,
                  _ = void 0,
                  S = void 0,
                  x = void 0;
                w = i.getFullYear(), _ = u(i.getMonth() + 1), S = u(i.getDate()), x = p[i.getDay()];
                var T = "";
                switch (y) {
                  case 0:
                    T = "今天";
                    break;
                  case 1:
                    T = "明天";
                    break;
                  case 2:
                    T = "后天";
                    break;
                  default:
                    T = _ + "月" + S + "日 " + x;
                    break
                }
                s.push({
                  label: T,
                  value: w + "-" + _ + "-" + S,
                  flag: 0 == y
                }), i.setDate(i.getDate() + 1)
              }
              b < l && (b = l), b > a && (b = a);
              for (var E = 1 * b; E <= 1 * a; E++) v.push({
                label: u(E),
                value: u(E),
                flag: E == b
              });
              for (var O = d; O < 60; O += 1 * t) c.push({
                label: u(O),
                value: u(O)
              });
              return s.map((function (e, l) {
                e.label == r[0] && (f = l)
              })), 0 != f && (v = this.initHours(l = 8, a = 20, t = 1, n = 30, s[f].value)), v.map((function (e, l) {
                e.label == r[1] && (h = l)
              })), c.map((function (e, l) {
                e.label == r[2] && (g = l)
              })), m = [f, h, g], {
                date: s,
                hours: v,
                minutes: c,
                defaultVal: m
              }
            },
            initHours: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8,
                l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                a = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 30),
                t = arguments.length > 4 ? arguments[4] : void 0,
                n = [],
                r = t.split("-"),
                i = new Date,
                o = i.getFullYear(),
                s = i.getMonth() + 1,
                v = i.getDate(),
                c = new Date((new Date).getTime() + 60 * a * 1e3),
                b = c.getHours(),
                d = o == r[0] && s == r[1] && v == r[2];
              if (b > l && (b = l), d)
                for (var p = 1 * b; p <= 1 * l; p++) n.push({
                  label: u(p),
                  value: u(p),
                  flag: p == b
                });
              else
                for (var f = 1 * e; f <= 1 * l; f++) n.push({
                  label: u(f),
                  value: u(f),
                  flag: !1
                });
              return n
            },
            initMinutes: function () {
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0], arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 30,
                a = arguments.length > 4 ? arguments[4] : void 0,
                t = arguments.length > 5 ? arguments[5] : void 0,
                n = [],
                r = new Date((new Date).getTime() + 60 * l * 1e3),
                i = a.split("-"),
                o = new Date,
                s = o.getFullYear(),
                v = o.getMonth() + 1,
                c = o.getDate(),
                b = r.getHours(),
                d = Math.floor(r.getMinutes() / e) * e,
                p = s == i[0] && v == i[1] && c == i[2];
              if (p)
                if (t == b)
                  for (var f = d; f < 60; f += 1 * e) n.push({
                    label: u(f),
                    value: u(f)
                  });
                else
                  for (var h = 0; h < 60; h += 1 * e) n.push({
                    label: u(h),
                    value: u(h)
                  });
              else
                for (var g = 0; g < 60; g += 1 * e) n.push({
                  label: u(g),
                  value: u(g)
                });
              return n
            }
          },
          range: {
            init: function (e, l, a, t) {
              new Date;
              var n = [],
                r = new Date(e.toString()),
                i = new Date(l.toString());
              e > l && (r = new Date(l.toString()), i = new Date(e.toString()));
              var o = r.getFullYear(),
                s = (r.getMonth(), i.getFullYear()),
                v = [],
                c = [],
                b = [],
                d = [],
                p = [],
                f = [],
                h = [],
                g = [];
              h = a[0].split("-"), g = a[1].split("-");
              for (var m = t ? 1 * h[1] : h[1] + 1, y = new Date(o, m, 0).getDate(), w = o; w <= s; w++) v.push(w + "");
              for (var _ = 1; _ <= 12; _++) c.push(u(_));
              for (var S = 1; S <= y; S++) b.push(u(S));
              for (var x = h[0]; x <= s; x++) d.push(x + "");
              for (var T = h[1]; T <= 12; T++) p.push(u(T));
              for (var E = h[2]; E <= y; E++) f.push(u(E));
              return n = [-1 == v.indexOf(h[0]) ? 0 : v.indexOf(h[0]), -1 == c.indexOf(h[1]) ? 0 : c.indexOf(h[1]), -1 == b.indexOf(h[2]) ? 0 : b.indexOf(h[2]), 0, -1 == d.indexOf(g[0]) ? 0 : d.indexOf(g[0]), -1 == p.indexOf(g[1]) ? 0 : p.indexOf(g[1]), -1 == f.indexOf(g[2]) ? 0 : f.indexOf(g[2])], {
                fyears: v,
                fmonths: c,
                fdays: b,
                tyears: d,
                tmonths: p,
                tdays: f,
                defaultVal: n
              }
            },
            initStartDays: function (e, l) {
              for (var a = new Date(e, l, 0).getDate(), t = [], n = 1; n <= a; n++) t.push(u(n));
              return t
            },
            initEndYears: function (e, l, a) {
              for (var t = [], n = e; n <= a; n++) t.push(u(n));
              return t
            },
            initEndMonths: function (e) {
              for (var l = [], a = 1 * e; a <= 12; a++) l.push(u(a));
              return l
            },
            initEndDays: function (e, l, a, t, n) {
              for (var r = new Date(e, l, 0).getDate(), i = [], o = 1 * a; o <= r; o++) i.push(u(o));
              return i
            },
            initToMonths: function (e, l, a, t) {
              var n = new Date(e, l, a).getTime(),
                r = new Date(t, l, a).getTime(),
                i = [];
              if (r - n > 0) {
                console.log(1);
                for (var o = 1; o <= 12; o++) i.push(u(o))
              } else
                for (var s = 1 * l; s <= 12; s++) i.push(u(s));
              return i
            },
            initToDays: function (e, l, a, t, n) {
              var r = new Date(e, l, a).getTime(),
                i = new Date(t, n, a).getTime(),
                o = new Date(t, n, 0).getDate(),
                s = [];
              if (i - r > 0)
                for (var v = 1; v <= o; v++) s.push(u(v));
              else
                for (var c = 1 * a; c <= o; c++) s.push(u(c));
              return s
            }
          }
        },
        s = o;
      l.default = s
    },
    "2a3b": function (e, l, a) {
      "use strict";

      function t() {
        var e = this,
          l = e.isLocked,
          a = e.params,
          t = a.slidesOffsetBefore;
        if (t) {
          var n = e.slides.length - 1,
            r = e.slidesGrid[n] + e.slidesSizesGrid[n] + 2 * t;
          e.isLocked = e.size > r
        } else e.isLocked = 1 === e.snapGrid.length;
        !0 === a.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === a.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), l && l !== e.isLocked && (e.isEnd = !1), l !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = void 0;
      var n = {
        checkOverflow: t
      };
      l.default = n
    },
    "2c5d": function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = n;
      var t = a("d7bd");

      function n(e) {
        var l = this,
          a = l.touchEventsData,
          n = l.params,
          r = l.touches,
          i = l.rtlTranslate,
          u = l.slidesGrid,
          o = l.enabled;
        if (o) {
          var s = e;
          if (s.originalEvent && (s = s.originalEvent), a.allowTouchCallbacks && l.emit("touch-end", s), a.allowTouchCallbacks = !1, !a.isTouched) return a.isMoved && n.grabCursor && l.setGrabCursor(!1), a.isMoved = !1, void(a.startMoving = !1);
          n.grabCursor && a.isMoved && a.isTouched && (!0 === l.allowSlideNext || !0 === l.allowSlidePrev) && l.setGrabCursor(!1);
          var v, c = (0, t.now)(),
            b = c - a.touchStartTime;
          if (l.allowClick) {
            s.path || s.composedPath && s.composedPath();
            l.emit("tap click", s), b < 300 && c - a.lastClickTime < 300 && l.emit("doubleTap doubleClick", s)
          }
          if (a.lastClickTime = (0, t.now)(), (0, t.nextTick)((function () {
              l.destroyed || (l.allowClick = !0)
            })), !a.isTouched || !a.isMoved || !l.swipeDirection || 0 === r.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, a.isMoved = !1, void(a.startMoving = !1);
          if (a.isTouched = !1, a.isMoved = !1, a.startMoving = !1, v = n.followFinger ? i ? l.translate : -l.translate : -a.currentTranslate, !n.cssMode)
            if (l.params.freeMode && n.freeMode.enabled) l.freeMode.onTouchEnd({
              currentPos: v
            });
            else {
              for (var d = 0, p = l.slidesSizesGrid[0], f = 0; f < u.length; f += f < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
                var h = f < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                "undefined" !== typeof u[f + h] ? v >= u[f] && v < u[f + h] && (d = f, p = u[f + h] - u[f]) : v >= u[f] && (d = f, p = u[u.length - 1] - u[u.length - 2])
              }
              var g = (v - u[d]) / p,
                m = d < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
              if (b > n.longSwipesMs) {
                if (!n.longSwipes) return void l.slideTo(l.activeIndex);
                "next" === l.swipeDirection && (g >= n.longSwipesRatio ? l.slideTo(d + m) : l.slideTo(d)), "prev" === l.swipeDirection && (g > 1 - n.longSwipesRatio ? l.slideTo(d + m) : l.slideTo(d))
              } else {
                if (!n.shortSwipes) return void l.slideTo(l.activeIndex);
                var y = l.navigation && (s.target === l.navigation.nextEl || s.target === l.navigation.prevEl);
                y ? s.target === l.navigation.nextEl ? l.slideTo(d + m) : l.slideTo(d) : ("next" === l.swipeDirection && l.slideTo(d + m), "prev" === l.swipeDirection && l.slideTo(d))
              }
            }
        }
      }
    },
    "2f25": function (e, l, a) {
      "use strict";

      function t() {
        var e = this;
        e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || e["container" === e.params.touchEventsTarget ? "$el" : "$wrapperEl"].setCss({
          cursor: ""
        })
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = t
    },
    "331c": function (e, l, a) {
      "use strict";
      (function (e) {
        Object.defineProperty(l, "__esModule", {
          value: !0
        }), l.getDevice = i;
        var t, n = a("d9c3");

        function r() {
          var l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            a = (l.userAgent, (0, n.getSupport)(), {
              ios: !1,
              android: !1
            }),
            t = e.getSystemInfoSync();
          return "android" == t.platform && (a.os = "android", a.android = !0), "ios" == t.platform && (a.os = "ios", a.ios = !0), a
        }

        function i() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return t || (t = r(e)), t
        }
      }).call(this, a("543d")["default"])
    },
    "340d": function (e, l, a) {
      "use strict";
      (function (e) {
        var a;

        function t() {
          function l() {
            var l = e.getSystemInfoSync();
            return l.model
          }
          return {
            isSafari: l(),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(l())
          }
        }

        function n() {
          return a || (a = t()), a
        }
        Object.defineProperty(l, "__esModule", {
          value: !0
        }), l.getBrowser = n
      }).call(this, a("543d")["default"])
    },
    3430: function (e, l, a) {
      "use strict";

      function t(e) {
        var l = e.effect,
          a = e.swiper,
          t = e.on,
          n = e.setTranslate,
          r = e.setTransition,
          i = e.overwriteParams,
          u = e.perspective;
        t("beforeInit", (function () {
          if (a.params.effect === l) {
            a.classNames.push("".concat(a.params.containerModifierClass).concat(l)), u && u() && a.classNames.push("".concat(a.params.containerModifierClass, "3d"));
            var e = i ? i() : {};
            Object.assign(a.params, e), Object.assign(a.originalParams, e)
          }
        })), t("setTranslate", (function () {
          a.params.effect === l && n()
        })), t("setTransition", (function (e, t) {
          a.params.effect === l && r(t)
        }))
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = t
    },
    "34a3": function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = n;
      var t = a("d7bd");

      function n(e) {
        var l = e.swiper,
          a = e.extendParams,
          n = e.emit,
          r = e.once;

        function i() {
          var e = l.touchEventsData,
            a = l.touches;
          0 === e.velocities.length && e.velocities.push({
            position: a[l.isHorizontal() ? "startX" : "startY"],
            time: e.touchStartTime
          }), e.velocities.push({
            position: a[l.isHorizontal() ? "currentX" : "currentY"],
            time: (0, t.now)()
          })
        }

        function u(e) {
          var a = e.currentPos,
            i = l.params,
            u = l.$wrapperEl,
            o = l.rtlTranslate,
            s = l.snapGrid,
            v = l.touchEventsData,
            c = (0, t.now)(),
            b = c - v.touchStartTime;
          if (a < -l.minTranslate()) l.slideTo(l.activeIndex);
          else if (a > -l.maxTranslate()) l.slides.length < s.length ? l.slideTo(s.length - 1) : l.slideTo(l.slides.length - 1);
          else {
            if (i.freeMode.momentum) {
              if (v.velocities.length > 1) {
                var d = v.velocities.pop(),
                  p = v.velocities.pop(),
                  f = d.position - p.position,
                  h = d.time - p.time;
                l.velocity = f / h, l.velocity /= 2, Math.abs(l.velocity) < i.freeMode.minimumVelocity && (l.velocity = 0), (h > 150 || (0, t.now)() - d.time > 300) && (l.velocity = 0)
              } else l.velocity = 0;
              l.velocity *= i.freeMode.momentumVelocityRatio, v.velocities.length = 0;
              var g = 1e3 * i.freeMode.momentumRatio,
                m = l.velocity * g,
                y = l.translate + m;
              o && (y = -y);
              var w, _, S = !1,
                x = 20 * Math.abs(l.velocity) * i.freeMode.momentumBounceRatio;
              if (y < l.maxTranslate()) i.freeMode.momentumBounce ? (y + l.maxTranslate() < -x && (y = l.maxTranslate() - x), w = l.maxTranslate(), S = !0, v.allowMomentumBounce = !0) : y = l.maxTranslate(), i.loop && i.centeredSlides && (_ = !0);
              else if (y > l.minTranslate()) i.freeMode.momentumBounce ? (y - l.minTranslate() > x && (y = l.minTranslate() + x), w = l.minTranslate(), S = !0, v.allowMomentumBounce = !0) : y = l.minTranslate(), i.loop && i.centeredSlides && (_ = !0);
              else if (i.freeMode.sticky) {
                for (var T, E = 0; E < s.length; E += 1)
                  if (s[E] > -y) {
                    T = E;
                    break
                  } y = Math.abs(s[T] - y) < Math.abs(s[T - 1] - y) || "next" === l.swipeDirection ? s[T] : s[T - 1], y = -y
              }
              if (_ && r("transitionEnd", (function () {
                  l.loopFix()
                })), 0 !== l.velocity) {
                if (g = o ? Math.abs((-y - l.translate) / l.velocity) : Math.abs((y - l.translate) / l.velocity), i.freeMode.sticky) {
                  var O = Math.abs((o ? -y : y) - l.translate),
                    P = l.slidesSizesGrid[l.activeIndex];
                  g = O < P ? i.speed : O < 2 * P ? 1.5 * i.speed : 2.5 * i.speed
                }
              } else if (i.freeMode.sticky) return void l.slideToClosest();
              i.freeMode.momentumBounce && S ? (l.updateProgress(w), l.setTransition(g), l.setTranslate(y), l.transitionStart(!0, l.swipeDirection), l.animating = !0, u.transitionEnd((function () {
                l && !l.destroyed && v.allowMomentumBounce && (n("momentumBounce"), l.setTransition(i.speed), setTimeout((function () {
                  l.setTranslate(w), u.transitionEnd((function () {
                    l && !l.destroyed && l.transitionEnd()
                  }), g)
                }), 0))
              }), g)) : l.velocity ? (n("_freeModeNoMomentumRelease"), l.updateProgress(y), l.setTransition(g), l.setTranslate(y), l.transitionStart(!0, l.swipeDirection), l.animating || (l.animating = !0, u.transitionEnd((function () {
                l && !l.destroyed && l.transitionEnd()
              }), g))) : l.updateProgress(y), l.updateActiveIndex(), l.updateSlidesClasses()
            } else {
              if (i.freeMode.sticky) return void l.slideToClosest();
              i.freeMode && n("_freeModeNoMomentumRelease")
            }(!i.freeMode.momentum || b >= i.longSwipesMs) && (l.updateProgress(), l.updateActiveIndex(), l.updateSlidesClasses())
          }
        }
        a({
          freeMode: {
            enabled: !1,
            momentum: !0,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: !1,
            minimumVelocity: .02
          }
        }), Object.assign(l, {
          freeMode: {
            onTouchMove: i,
            onTouchEnd: u
          }
        })
      }
    },
    "35a5": function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), Object.defineProperty(l, "Swiper", {
        enumerable: !0,
        get: function () {
          return t.default
        }
      }), Object.defineProperty(l, "default", {
        enumerable: !0,
        get: function () {
          return t.default
        }
      });
      var t = w(a("9f95")),
        n = w(a("bdb9")),
        r = w(a("34a3")),
        i = w(a("e70d")),
        u = w(a("d057")),
        o = w(a("98a0")),
        s = w(a("f91a")),
        v = w(a("263a")),
        c = w(a("b2e8")),
        b = w(a("e213")),
        d = w(a("cbd0")),
        p = w(a("2359")),
        f = w(a("655b")),
        h = w(a("e350")),
        g = w(a("4b99")),
        m = w(a("a548")),
        y = w(a("a549"));

      function w(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var _ = [n.default, r.default, i.default, u.default, o.default, s.default, v.default, c.default, b.default, d.default, p.default, f.default, h.default, g.default, y.default, m.default];
      t.default.use(_)
    },
    3628: function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = u;
      var t = n(a("a34a"));

      function n(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function r(e, l, a, t, n, r, i) {
        try {
          var u = e[r](i),
            o = u.value
        } catch (s) {
          return void a(s)
        }
        u.done ? l(o) : Promise.resolve(o).then(t, n)
      }

      function i(e) {
        return function () {
          var l = this,
            a = arguments;
          return new Promise((function (t, n) {
            var i = e.apply(l, a);

            function u(e) {
              r(i, t, n, u, o, "next", e)
            }

            function o(e) {
              r(i, t, n, u, o, "throw", e)
            }
            u(void 0)
          }))
        }
      }

      function u(e) {
        return o.apply(this, arguments)
      }

      function o() {
        return o = i(t.default.mark((function e(l) {
          var a, n, r, i, u, o, s, v;
          return t.default.wrap((function (e) {
            while (1) switch (e.prev = e.next) {
              case 0:
                if (a = this, n = [], r = a.virtual && a.params.virtual.enabled, i = 0, "number" === typeof l ? a.setTransition(l) : !0 === l && a.setTransition(a.params.speed), o = function (e) {
                    return r ? a.slides.filter((function (l) {
                      return parseInt(l.getAttribute("data-swiper-slide-index"), 10) === e
                    }))[0] : a.slides[e]
                  }, !("auto" !== a.params.slidesPerView && a.params.slidesPerView > 1)) {
                  e.next = 22;
                  break
                }
                if (!a.params.centeredSlides) {
                  e.next = 11;
                  break
                }
                a.visibleSlides.each((function (e) {
                  n.push(e)
                })), e.next = 20;
                break;
              case 11:
                u = 0;
              case 12:
                if (!(u < Math.ceil(a.params.slidesPerView))) {
                  e.next = 20;
                  break
                }
                if (s = a.activeIndex + u, !(s > a.slides.length) || r) {
                  e.next = 16;
                  break
                }
                return e.abrupt("break", 20);
              case 16:
                n.push(o(s));
              case 17:
                u += 1, e.next = 12;
                break;
              case 20:
                e.next = 23;
                break;
              case 22:
                n.push(o(a.activeIndex));
              case 23:
                u = 0;
              case 24:
                if (!(u < n.length)) {
                  e.next = 33;
                  break
                }
                if ("undefined" === typeof n[u]) {
                  e.next = 30;
                  break
                }
                return e.next = 28, n[u].getHeight();
              case 28:
                v = e.sent, i = v > i ? v : i;
              case 30:
                u += 1, e.next = 24;
                break;
              case 33:
                (i || 0 === i) && a.$wrapperEl.css({
                  height: "".concat(i || "", "px")
                });
              case 34:
              case "end":
                return e.stop()
            }
          }), e, this)
        }))), o.apply(this, arguments)
      }
    },
    "365c": function (e, l, a) {
      "use strict";
      (function (e) {
        Object.defineProperty(l, "__esModule", {
          value: !0
        }), l.default = l.security = l.faceMatch = l.deleteRecords = l.groupby = l.forumDetail = l.myForum = l.allPublicForm = l.follow = l.option = l.defaultAddress = l.uploadMedia = l.upload = l.recommend2 = l.recommend = l.info = l.del = l.updateBrowseDuration = l.update = l.save = l.add = l.page = l.list = l.session = l.resetPass = l.registerSms = l.registerEmail = l.register = l.sendsms = l.sendemail = l.login = l.auth = void 0;
        var t = r(a("c1fb")),
          n = r(a("a417"));

        function r(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        var i = function () {
          e.getStorageSync("token");
          e.getStorageSync("token") || e.navigateTo({
            url: "../login/login"
          })
        };
        l.auth = i;
        var u = function (e, l) {
          return t.default.request({
            url: "".concat(e, "/login"),
            method: "GET",
            data: l
          })
        };
        l.login = u;
        var o = function (e, l) {
          return t.default.request({
            url: "".concat(e, "/sendemail?email=").concat(l),
            method: "GET"
          })
        };
        l.sendemail = o;
        var s = function (e, l) {
          return t.default.request({
            url: "".concat(e, "/sendsms?mobile=").concat(l),
            method: "GET"
          })
        };
        l.sendsms = s;
        var v = function (e, l) {
          var a = "".concat(e, "/register");
          return t.default.request({
            url: a,
            method: "POST",
            data: l
          })
        };
        l.register = v;
        var c = function (e, l, a) {
          var n = "".concat(e, "/register?emailcode=").concat(a);
          return t.default.request({
            url: n,
            method: "POST",
            data: l
          })
        };
        l.registerEmail = c;
        var b = function (e, l, a) {
          var n = "".concat(e, "/register?smscode=").concat(a);
          return t.default.request({
            url: n,
            method: "POST",
            data: l
          })
        };
        l.registerSms = b;
        var d = function (e, l) {
          var a = {
            username: l
          };
          return t.default.request({
            url: "".concat(e, "/resetPass"),
            method: "GET",
            data: a
          })
        };
        l.resetPass = d;
        var p = function (e) {
          return t.default.request({
            url: "".concat(e, "/session"),
            method: "GET"
          })
        };
        l.session = p;
        var f = function (e, l) {
          return t.default.request({
            url: "".concat(e, "/list"),
            method: "GET",
            data: l
          })
        };
        l.list = f;
        var h = function (e, l) {
          return t.default.request({
            url: "".concat(e, "/page"),
            method: "GET",
            data: l
          })
        };
        l.page = h;
        var g = function (e, l) {
          return t.default.request({
            url: "".concat(e, "/add"),
            method: "POST",
            data: l
          })
        };
        l.add = g;
        var m = function (e, l) {
          return t.default.request({
            url: "".concat(e, "/save"),
            method: "POST",
            data: l
          })
        };
        l.save = m;
        var y = function (e, l) {
          return t.default.request({
            url: "".concat(e, "/update"),
            method: "POST",
            data: l
          })
        };
        l.update = y;
        var w = function (e, l, a, n) {
          return t.default.request({
            url: "".concat(e, "/updateBrowseDuration/") + l + "?duration=" + a,
            method: "POST",
            data: n
          })
        };
        l.updateBrowseDuration = w;
        var _ = function (e, l) {
          return t.default.request({
            url: "".concat(e, "/delete"),
            method: "POST",
            data: l
          })
        };
        l.del = _;
        var S = function (e, l) {
          return t.default.request({
            url: "".concat(e, "/detail/").concat(l),
            method: "GET"
          })
        };
        l.info = S;
        var x = function (e, l) {
          return t.default.request({
            url: "".concat(e, "/autoSort"),
            method: "get",
            data: l
          })
        };
        l.recommend = x;
        var T = function (e, l) {
          return t.default.request({
            url: "".concat(e, "/autoSort2"),
            method: "get",
            data: l
          })
        };
        l.recommend2 = T;
        var E = function (l) {
          e.chooseImage({
            count: 4,
            sizeType: ["original", "compressed"],
            sourceType: ["album"],
            success: function (a) {
              e.uploadFile({
                url: "".concat(n.default.url, "file/upload"),
                filePath: a.tempFilePaths[0],
                name: "file",
                header: {
                  Token: e.getStorageSync("token")
                },
                success: function (a) {
                  var t = JSON.parse(a.data);
                  0 == t.code ? l(t) : e.showToast({
                    title: t.msg,
                    icon: "none",
                    duration: 2e3
                  })
                }
              })
            }
          })
        };
        l.upload = E;
        var O = function (l) {
          e.chooseVideo({
            count: 1,
            sourceType: ["camera", "album"],
            success: function (a) {
              console.log(a), e.uploadFile({
                url: "".concat(n.default.url, "file/upload"),
                filePath: a.tempFilePath,
                name: "file",
                header: {
                  Token: e.getStorageSync("token")
                },
                success: function (a) {
                  var t = JSON.parse(a.data);
                  0 == t.code ? l(t) : e.showToast({
                    title: t.msg,
                    icon: "none",
                    duration: 2e3
                  })
                }
              })
            }
          })
        };
        l.uploadMedia = O;
        var P = function (e) {
          return t.default.request({
            url: "address/default?userid=".concat(e),
            method: "GET"
          })
        };
        l.defaultAddress = P;
        var C = function (e, l, a) {
          return t.default.request({
            url: "option/".concat(e, "/").concat(l),
            method: "GET",
            data: a
          })
        };
        l.option = C;
        var k = function (e, l, a) {
          return t.default.request({
            url: "follow/".concat(e, "/").concat(l),
            method: "GET",
            data: a
          })
        };
        l.follow = k;
        var M = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "%%",
            n = {
              page: e,
              limit: l,
              title: a
            };
          return t.default.request({
            url: "forum/flist?parentid=0&isdone=开放&sort=addtime&order=desc",
            method: "GET",
            data: n
          })
        };
        l.allPublicForm = M;
        var j = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            a = {
              page: e,
              limit: l
            };
          return t.default.request({
            url: "forum/page?parentid=0&sort=addtime&order=desc",
            method: "GET",
            data: a
          })
        };
        l.myForum = j;
        var $ = function (e) {
          return t.default.request({
            url: "forum/list/".concat(e),
            method: "GET"
          })
        };
        l.forumDetail = $;
        var D = function () {
          return t.default.request({
            url: "examrecord/groupby",
            method: "GET"
          })
        };
        l.groupby = D;
        var A = function (e, l) {
          return t.default.request({
            url: "examrecord/deleteRecords?userid=".concat(e, "&paperid=").concat(l),
            method: "POST"
          })
        };
        l.deleteRecords = A;
        var I = function (e) {
          return t.default.request({
            url: "matchFace",
            method: "GET",
            data: e
          })
        };
        l.faceMatch = I;
        var B = function (e, l) {
          return t.default.request({
            url: "".concat(e, "/security"),
            method: "GET",
            data: l
          })
        };
        l.security = B;
        var N = {
          login: u,
          sendemail: o,
          sendsms: s,
          register: v,
          registerEmail: c,
          registerSms: b,
          resetPass: d,
          auth: i,
          session: p,
          list: f,
          page: h,
          add: g,
          update: y,
          updateBrowseDuration: w,
          del: _,
          info: S,
          recommend: x,
          recommend2: T,
          defaultAddress: P,
          save: m,
          upload: E,
          option: C,
          follow: k,
          allPublicForm: M,
          myForum: j,
          forumDetail: $,
          groupby: D,
          deleteRecords: A,
          faceMatch: I,
          uploadMedia: O,
          security: B
        };
        l.default = N
      }).call(this, a("543d")["default"])
    },
    "3c56": function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = d;
      var t = r(a("a34a")),
        n = a("d7bd");

      function r(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function i(e, l, a) {
        return l in e ? Object.defineProperty(e, l, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[l] = a, e
      }

      function u(e, l, a, t, n, r, i) {
        try {
          var u = e[r](i),
            o = u.value
        } catch (s) {
          return void a(s)
        }
        u.done ? l(o) : Promise.resolve(o).then(t, n)
      }

      function o(e) {
        return function () {
          var l = this,
            a = arguments;
          return new Promise((function (t, n) {
            var r = e.apply(l, a);

            function i(e) {
              u(r, t, n, i, o, "next", e)
            }

            function o(e) {
              u(r, t, n, i, o, "throw", e)
            }
            i(void 0)
          }))
        }
      }

      function s(e) {
        return b(e) || c(e) || v()
      }

      function v() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }

      function c(e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
      }

      function b(e) {
        if (Array.isArray(e)) {
          for (var l = 0, a = new Array(e.length); l < e.length; l++) a[l] = e[l];
          return a
        }
      }

      function d() {
        var e = this;

        function l(l) {
          return e.isHorizontal() ? l : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
          } [l]
        }

        function a(e, a) {
          return parseFloat(e[l(a)] || 0)
        }

        function r(e) {
          return e.itemStyle
        }
        var u = e.params,
          v = e.$wrapperEl,
          c = e.size,
          b = e.rtlTranslate,
          d = e.wrongRTL,
          p = e.virtual && u.virtual.enabled,
          f = p ? e.virtual.slides.length : e.slides.length,
          h = e.slides,
          g = p ? e.virtual.slides.length : h.length,
          m = [],
          y = [],
          w = [],
          _ = u.slidesOffsetBefore;
        "function" === typeof _ && (_ = u.slidesOffsetBefore.call(e));
        var S = u.slidesOffsetAfter;
        "function" === typeof S && (S = u.slidesOffsetAfter.call(e));
        var x = e.snapGrid.length,
          T = e.slidesGrid.length,
          E = u.spaceBetween,
          O = -_,
          P = 0,
          C = 0;
        if ("undefined" !== typeof c) {
          "string" === typeof E && E.indexOf("%") >= 0 && (E = parseFloat(E.replace("%", "")) / 100 * c), e.virtualSize = -E, u.centeredSlides && u.cssMode && ((0, n.setCSSProperty)(e.wrapperEl, "--swiper-centered-offset-before", ""), (0, n.setCSSProperty)(e.wrapperEl, "--swiper-centered-offset-after", ""));
          var k, M = u.grid && u.grid.rows > 1 && e.grid;
          M && e.grid.initSlides(g);
          var j = "auto" === u.slidesPerView && u.breakpoints && Object.keys(u.breakpoints).filter((function (e) {
            return "undefined" !== typeof u.breakpoints[e].slidesPerView
          })).length > 0;
          if (Array.apply(void 0, s(Array(g))).forEach(function () {
              var n = o(t.default.mark((function n(o, s) {
                var v, b, d, p, f, _, S, x;
                return t.default.wrap((function (t) {
                  while (1) switch (t.prev = t.next) {
                    case 0:
                      k = 0, v = h[s], M && e.grid.updateSlide(s, v, g, l), "auto" === u.slidesPerView ? (j && (h[s].style[l("width")] = ""), b = r(v), d = v.itemStyle.transform, p = v.itemStyle.webkitTransform, d && (v.itemStyle.transform = "none"), p && (v.itemStyle.webkitTransform = "none"), u.roundLengths ? k = e.isHorizontal() ? v.outerWidth(!0) : v.outerHeight(!0) : (f = e.isHorizontal() ? v.width : v.height, a(b, "padding-left"), a(b, "padding-right"), _ = a(b, "margin-left"), S = a(b, "margin-right"), x = b["box-sizing"], k = x && "border-box" === x ? f + _ + S : f), d && (v.itemStyle.transform = d), p && (v.itemStyle.webkitTransform = p), u.roundLengths && (k = Math.floor(k))) : (k = (c - (u.slidesPerView - 1) * E) / u.slidesPerView, u.roundLengths && (k = Math.floor(k)), h[s] && h[s].css(i({}, l("width"), "".concat(k, "px")))), h[s] && (h[s].swiperSlideSize = k), w.push(k), u.centeredSlides ? (O = O + k / 2 + P / 2 + E, 0 === P && 0 !== s && (O = O - c / 2 - E), 0 === s && (O = O - c / 2 - E), Math.abs(O) < .001 && (O = 0), u.roundLengths && (O = Math.floor(O)), C % u.slidesPerGroup === 0 && m.push(O), y.push(O)) : (u.roundLengths && (O = Math.floor(O)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup === 0 && m.push(O), y.push(O), O = O + k + E), e.virtualSize += k + E, P = k, C += 1;
                    case 10:
                    case "end":
                      return t.stop()
                  }
                }), n)
              })));
              return function (e, l) {
                return n.apply(this, arguments)
              }
            }()), e.virtualSize = Math.max(e.virtualSize, c) + S, b && d && ("slide" === u.effect || "coverflow" === u.effect) && v.css({
              width: "".concat(e.virtualSize + u.spaceBetween, "px")
            }), u.setWrapperSize && v.css(i({}, l("width"), "".concat(e.virtualSize + u.spaceBetween, "px"))), M && e.grid.updateWrapperSize(k, m, l), !u.centeredSlides) {
            for (var $ = [], D = 0; D < m.length; D += 1) {
              var A = m[D];
              u.roundLengths && (A = Math.floor(A)), m[D] <= e.virtualSize - c && $.push(A)
            }
            m = $, Math.floor(e.virtualSize - c) - Math.floor(m[m.length - 1]) > 1 && m.push(e.virtualSize - c)
          }
          if (0 === m.length && (m = [0]), 0 !== u.spaceBetween) {
            var I = e.isHorizontal() && b ? "margin-left" : l("margin-right");
            h.filter((function (e, l) {
              return !u.cssMode || l !== h.length - 1
            })).forEach((function (e) {
              e.css(i({}, I, "".concat(E, "px")))
            }))
          }
          if (u.centeredSlides && u.centeredSlidesBounds) {
            var B = 0;
            w.forEach((function (e) {
              B += e + (u.spaceBetween ? u.spaceBetween : 0)
            })), B -= u.spaceBetween;
            var N = B - c;
            m = m.map((function (e) {
              return e < 0 ? -_ : e > N ? N + S : e
            }))
          }
          if (u.centerInsufficientSlides) {
            var L = 0;
            if (w.forEach((function (e) {
                L += e + (u.spaceBetween ? u.spaceBetween : 0)
              })), L -= u.spaceBetween, L < c) {
              var z = (c - L) / 2;
              m.forEach((function (e, l) {
                m[l] = e - z
              })), y.forEach((function (e, l) {
                y[l] = e + z
              }))
            }
          }
          if (Object.assign(e, {
              slides: h,
              snapGrid: m,
              slidesGrid: y,
              slidesSizesGrid: w
            }), u.centeredSlides && u.cssMode && !u.centeredSlidesBounds) {
            (0, n.setCSSProperty)(e.wrapperEl, "--swiper-centered-offset-before", "".concat(-m[0], "px")), (0, n.setCSSProperty)(e.wrapperEl, "--swiper-centered-offset-after", "".concat(e.size / 2 - w[w.length - 1] / 2, "px"));
            var F = -e.snapGrid[0],
              R = -e.slidesGrid[0];
            e.snapGrid = e.snapGrid.map((function (e) {
              return e + F
            })), e.slidesGrid = e.slidesGrid.map((function (e) {
              return e + R
            }))
          }
          return g !== f && e.emit("slidesLengthChange"), m.length !== x && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), y.length !== T && e.emit("slidesGridLengthChange"), u.watchSlidesProgress && e.updateSlidesOffset(), h
        }
      }
    },
    "3ff9": function (e, l, a) {
      "use strict";
      (function (e) {
        function a(l, a) {
          return new Promise((function (t) {
            e.createSelectorQuery().in(l).selectAll(a).boundingClientRect().exec((function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
              return t(e[0])
            }))
          }))
        }

        function t(l, a) {
          return new Promise((function (t) {
            e.createSelectorQuery().in(l).select(a).boundingClientRect().exec((function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
              return t(e[0])
            }))
          }))
        }

        function n(l) {
          var a = e.getSystemInfoSync();
          return "devtools" === a.platform ? setTimeout((function () {
            l()
          }), 1e3 / 30) : e.createSelectorQuery().selectViewport().boundingClientRect().exec((function () {
            l()
          }))
        }
        Object.defineProperty(l, "__esModule", {
          value: !0
        }), l.getAllRect = a, l.getRect = t, l.requestAnimationFrame = n
      }).call(this, a("543d")["default"])
    },
    "41e4": function (e, l, a) {
      "use strict";

      function t(e, l) {
        return e.transformEl ? l.find(e.transformEl).css({
          "backface-visibility": "hidden",
          "-webkit-backface-visibility": "hidden"
        }) : l
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = t
    },
    "4b99": function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = o;
      var t = r(a("a34a")),
        n = a("d7bd");

      function r(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function i(e, l, a, t, n, r, i) {
        try {
          var u = e[r](i),
            o = u.value
        } catch (s) {
          return void a(s)
        }
        u.done ? l(o) : Promise.resolve(o).then(t, n)
      }

      function u(e) {
        return function () {
          var l = this,
            a = arguments;
          return new Promise((function (t, n) {
            var r = e.apply(l, a);

            function u(e) {
              i(r, t, n, u, o, "next", e)
            }

            function o(e) {
              i(r, t, n, u, o, "throw", e)
            }
            u(void 0)
          }))
        }
      }

      function o(e) {
        var l, a, r, i, o = e.swiper,
          s = e.extendParams,
          v = e.on,
          c = e.emit,
          b = !1,
          d = null,
          p = null;

        function f() {
          if (o.params.scrollbar.el && o.scrollbar.el) {
            o.scrollbar;
            var e = o.rtlTranslate,
              l = o.progress,
              t = o.params.scrollbar,
              n = a,
              i = (r - a) * l;
            e ? (i = -i, i > 0 ? (n = a - i, i = 0) : -i + a > r && (n = r + i)) : i < 0 ? (n = a + i, i = 0) : i + a > r && (n = r - i), o.isHorizontal() ? (o.$wrapperEl.scrollbarItemTransform("translate3d(".concat(i, "px, 0, 0)")), o.$wrapperEl.scrollbarItemCss({
              width: "".concat(n, "px")
            })) : (o.$wrapperEl.scrollbarItemTransform("translate3d(0px, ".concat(i, "px, 0)")), o.$wrapperEl.scrollbarItemCss({
              height: "".concat(n, "px")
            })), t.hide && (clearTimeout(d), o.$wrapperEl.scrollbarCss({
              opacity: 1
            }), d = setTimeout((function () {
              o.$wrapperEl.scrollbarCss({
                opacity: 0
              }), o.$wrapperEl.scrollbarTransition(400)
            }), 1e3))
          }
        }

        function h(e) {
          o.params.scrollbar.el && o.scrollbar.el && o.$wrapperEl.scrollbarItemTransition(e)
        }

        function g() {
          return m.apply(this, arguments)
        }

        function m() {
          return m = u(t.default.mark((function e() {
            var l, n, u;
            return t.default.wrap((function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  if (o.params.scrollbar.el && o.scrollbar.el) {
                    e.next = 2;
                    break
                  }
                  return e.abrupt("return");
                case 2:
                  return l = o.scrollbar, l.$el, n = l.methods, o.$wrapperEl.scrollbarItemCss({
                    width: "",
                    height: ""
                  }), e.next = 7, o.native.getRectScrollbar();
                case 7:
                  u = e.sent, n.offset = function () {
                    return u
                  }, r = o.isHorizontal() ? u.width : u.height, i = o.size / (o.virtualSize + o.params.slidesOffsetBefore - (o.params.centeredSlides ? o.snapGrid[0] : 0)), a = "auto" === o.params.scrollbar.dragSize ? r * i : parseInt(o.params.scrollbar.dragSize, 10), o.isHorizontal() ? o.$wrapperEl.scrollbarItemCss({
                    width: "".concat(a, "px")
                  }) : o.$wrapperEl.scrollbarItemCss({
                    height: "".concat(a, "px")
                  }), i >= 1 ? o.$wrapperEl.scrollbarCss({
                    display: "none"
                  }) : o.$wrapperEl.scrollbarCss({
                    display: ""
                  }), o.params.scrollbar.hide && o.$wrapperEl.scrollbarCss({
                    opacity: 0
                  }), o.params.watchOverflow && o.enabled && o.$wrapperEl[o.isLocked ? "addScrollbarClass" : "removeScrollbarClass"](o.params.scrollbar.lockClass);
                case 16:
                case "end":
                  return e.stop()
              }
            }), e)
          }))), m.apply(this, arguments)
        }

        function y(e) {
          return o.isHorizontal() ? ("touchstart" === e.type || e.type, e.touches[0].clientX) : "touchstart" === e.type || "touchmove" === e.type ? e.touches[0].clientY : e.clientY
        }

        function w(e) {
          var t, n = o.scrollbar,
            i = o.rtlTranslate,
            u = (n.$el, n.methods);
          t = (y(e) - u.offset()[o.isHorizontal() ? "left" : "top"] - (null !== l ? l : a / 2)) / (r - a), t = Math.max(Math.min(t, 1), 0), i && (t = 1 - t);
          var s = o.minTranslate() + (o.maxTranslate() - o.minTranslate()) * t;
          o.updateProgress(s), o.setTranslate(s), o.updateActiveIndex(), o.updateSlidesClasses()
        }

        function _(e, a) {
          var t = o.params.scrollbar,
            n = (o.scrollbar, o.$wrapperEl);
          b = !0, l = null, n.transition(100), o.$wrapperEl.scrollbarItemTransition(100), w(a), clearTimeout(p), o.$wrapperEl.scrollbarTransition(0), t.hide && o.$wrapperEl.scrollbarCss({
            opacity: 1
          }), o.params.cssMode && o.$wrapperEl.css({
            "scroll-snap-type": "none"
          }), c("scrollbarDragStart", a)
        }

        function S(e, l) {
          o.scrollbar;
          var a = o.$wrapperEl;
          b && (w(l), a.transition(0), o.$wrapperEl.scrollbarTransition(0), o.$wrapperEl.scrollbarItemTransition(0), c("scrollbarDragMove", l))
        }

        function x(e, l) {
          var a = o.params.scrollbar,
            t = o.scrollbar,
            r = o.$wrapperEl;
          t.$el;
          b && (b = !1, o.params.cssMode && (o.$wrapperEl.css({
            "scroll-snap-type": ""
          }), r.transition("")), a.hide && (clearTimeout(p), p = (0, n.nextTick)((function () {
            o.$wrapperEl.scrollbarCss({
              opacity: 0
            }), o.$wrapperEl.scrollbarTransition(400)
          }), 1e3)), c("scrollbarDragEnd", l), a.snapOnRelease && o.slideToClosest())
        }

        function T(e) {
          var l = o.scrollbar,
            a = (o.touchEventsTouch, o.touchEventsDesktop, o.params),
            t = o.support,
            n = l.$el,
            r = n,
            i = !(!t.passiveListener || !a.passiveListeners) && {
              passive: !1,
              capture: !1
            },
            u = !(!t.passiveListener || !a.passiveListeners) && {
              passive: !0,
              capture: !1
            };
          if (r) {
            var s = "on" === e ? "on" : "off";
            t.touch, o[s]("touchStartScrollbar", _, i), o[s]("touchMoveScrollbar", S, i), o[s]("touchEndScrollbar", x, u)
          }
        }

        function E() {
          o.params.scrollbar.el && T("on")
        }

        function O() {
          o.params.scrollbar.el && T("off")
        }

        function P() {
          var e = o.scrollbar,
            l = o.params.scrollbar;
          if (l.el) {
            var a = l.el;
            return Object.assign(e, {
              $el: a,
              el: a,
              methods: {}
            }), l.draggable && E(), o.$wrapperEl[o.enabled ? "removeScrollbarClass" : "addScrollbarClass"](o.params.scrollbar.lockClass), !0
          }
        }

        function C() {
          O()
        }
        s({
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag"
          }
        }), o.scrollbar = {
          el: null,
          dragEl: null,
          $el: null,
          $dragEl: null
        }, v("init", u(t.default.mark((function e() {
          return t.default.wrap((function (e) {
            while (1) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, P();
              case 2:
                g(), f();
              case 4:
              case "end":
                return e.stop()
            }
          }), e)
        })))), v("update resize observerUpdate lock unlock", (function () {
          g()
        })), v("setTranslate", (function () {
          f()
        })), v("setTransition", (function (e, l) {
          h(l)
        })), v("enable disable", (function () {
          var e = o.scrollbar.$el;
          e && e[o.enabled ? "removeClass" : "addClass"](o.params.scrollbar.lockClass)
        })), v("destroy", (function () {
          C()
        })), Object.assign(o.scrollbar, {
          updateSize: g,
          setTranslate: f,
          init: P,
          destroy: C
        })
      }
    },
    "53fe": function (e, l, a) {
      "use strict";

      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
          l = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          a = arguments.length > 2 ? arguments[2] : void 0,
          t = this,
          n = t.params,
          r = t.animating,
          i = t.snapGrid,
          u = t.slidesGrid,
          o = t.rtlTranslate,
          s = t.enabled;
        if (!s) return t;
        if (n.loop) {
          if (r && n.loopPreventsSlide) return !1;
          t.loopFix()
        }
        var v = o ? t.translate : -t.translate;

        function c(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
        }
        var b, d = c(v),
          p = i.map((function (e) {
            return c(e)
          })),
          f = i[p.indexOf(d) - 1];
        "undefined" === typeof f && n.cssMode && (i.forEach((function (e, l) {
          d >= e && (b = l)
        })), "undefined" !== typeof b && (f = i[b > 0 ? b - 1 : b]));
        var h = 0;
        return "undefined" !== typeof f && (h = u.indexOf(f), h < 0 && (h = t.activeIndex - 1), "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (h = h - t.slidesPerViewDynamic("previous", !0) + 1, h = Math.max(h, 0))), n.rewind && t.isBeginning ? t.slideTo(t.slides.length - 1, e, l, a) : (setTimeout((function () {
          t.slideTo(h, e, l, a)
        }), 30), !0)
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = t
    },
    "543d": function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.createApp = fl, l.createComponent = Sl, l.createPage = _l, l.default = void 0;
      var t = n(a("66fd"));

      function n(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function r(e, l) {
        return o(e) || u(e, l) || i()
      }

      function i() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }

      function u(e, l) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
          var a = [],
            t = !0,
            n = !1,
            r = void 0;
          try {
            for (var i, u = e[Symbol.iterator](); !(t = (i = u.next()).done); t = !0)
              if (a.push(i.value), l && a.length === l) break
          } catch (o) {
            n = !0, r = o
          } finally {
            try {
              t || null == u["return"] || u["return"]()
            } finally {
              if (n) throw r
            }
          }
          return a
        }
      }

      function o(e) {
        if (Array.isArray(e)) return e
      }

      function s(e, l, a) {
        return l in e ? Object.defineProperty(e, l, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[l] = a, e
      }

      function v(e) {
        return d(e) || b(e) || c()
      }

      function c() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }

      function b(e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
      }

      function d(e) {
        if (Array.isArray(e)) {
          for (var l = 0, a = new Array(e.length); l < e.length; l++) a[l] = e[l];
          return a
        }
      }

      function p(e) {
        return p = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
          return typeof e
        } : function (e) {
          return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, p(e)
      }
      var f = Object.prototype.toString,
        h = Object.prototype.hasOwnProperty;

      function g(e) {
        return "function" === typeof e
      }

      function m(e) {
        return "string" === typeof e
      }

      function y(e) {
        return "[object Object]" === f.call(e)
      }

      function w(e, l) {
        return h.call(e, l)
      }

      function _() {}

      function S(e) {
        var l = Object.create(null);
        return function (a) {
          var t = l[a];
          return t || (l[a] = e(a))
        }
      }
      var x = /-(\w)/g,
        T = S((function (e) {
          return e.replace(x, (function (e, l) {
            return l ? l.toUpperCase() : ""
          }))
        })),
        E = ["invoke", "success", "fail", "complete", "returnValue"],
        O = {},
        P = {};

      function C(e, l) {
        var a = l ? e ? e.concat(l) : Array.isArray(l) ? l : [l] : e;
        return a ? k(a) : a
      }

      function k(e) {
        for (var l = [], a = 0; a < e.length; a++) - 1 === l.indexOf(e[a]) && l.push(e[a]);
        return l
      }

      function M(e, l) {
        var a = e.indexOf(l); - 1 !== a && e.splice(a, 1)
      }

      function j(e, l) {
        Object.keys(l).forEach((function (a) {
          -1 !== E.indexOf(a) && g(l[a]) && (e[a] = C(e[a], l[a]))
        }))
      }

      function $(e, l) {
        e && l && Object.keys(l).forEach((function (a) {
          -1 !== E.indexOf(a) && g(l[a]) && M(e[a], l[a])
        }))
      }

      function D(e, l) {
        "string" === typeof e && y(l) ? j(P[e] || (P[e] = {}), l) : y(e) && j(O, e)
      }

      function A(e, l) {
        "string" === typeof e ? y(l) ? $(P[e], l) : delete P[e] : y(e) && $(O, e)
      }

      function I(e) {
        return function (l) {
          return e(l) || l
        }
      }

      function B(e) {
        return !!e && ("object" === p(e) || "function" === typeof e) && "function" === typeof e.then
      }

      function N(e, l) {
        for (var a = !1, t = 0; t < e.length; t++) {
          var n = e[t];
          if (a) a = Promise.then(I(n));
          else {
            var r = n(l);
            if (B(r) && (a = Promise.resolve(r)), !1 === r) return {
              then: function () {}
            }
          }
        }
        return a || {
          then: function (e) {
            return e(l)
          }
        }
      }

      function L(e) {
        var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return ["success", "fail", "complete"].forEach((function (a) {
          if (Array.isArray(e[a])) {
            var t = l[a];
            l[a] = function (l) {
              N(e[a], l).then((function (e) {
                return g(t) && t(e) || e
              }))
            }
          }
        })), l
      }

      function z(e, l) {
        var a = [];
        Array.isArray(O.returnValue) && a.push.apply(a, v(O.returnValue));
        var t = P[e];
        return t && Array.isArray(t.returnValue) && a.push.apply(a, v(t.returnValue)), a.forEach((function (e) {
          l = e(l) || l
        })), l
      }

      function F(e) {
        var l = Object.create(null);
        Object.keys(O).forEach((function (e) {
          "returnValue" !== e && (l[e] = O[e].slice())
        }));
        var a = P[e];
        return a && Object.keys(a).forEach((function (e) {
          "returnValue" !== e && (l[e] = (l[e] || []).concat(a[e]))
        })), l
      }

      function R(e, l, a) {
        for (var t = arguments.length, n = new Array(t > 3 ? t - 3 : 0), r = 3; r < t; r++) n[r - 3] = arguments[r];
        var i = F(e);
        if (i && Object.keys(i).length) {
          if (Array.isArray(i.invoke)) {
            var u = N(i.invoke, a);
            return u.then((function (e) {
              return l.apply(void 0, [L(i, e)].concat(n))
            }))
          }
          return l.apply(void 0, [L(i, a)].concat(n))
        }
        return l.apply(void 0, [a].concat(n))
      }
      var U = {
          returnValue: function (e) {
            return B(e) ? e.then((function (e) {
              return e[1]
            })).catch((function (e) {
              return e[0]
            })) : e
          }
        },
        G = /^\$|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,
        H = /^create|Manager$/,
        V = /^on/;

      function q(e) {
        return H.test(e)
      }

      function Y(e) {
        return G.test(e)
      }

      function X(e) {
        return V.test(e) && "onPush" !== e
      }

      function J(e) {
        return e.then((function (e) {
          return [null, e]
        })).catch((function (e) {
          return [e]
        }))
      }

      function W(e) {
        return !(q(e) || Y(e) || X(e))
      }

      function K(e, l) {
        return W(e) ? function () {
          for (var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          return g(a.success) || g(a.fail) || g(a.complete) ? z(e, R.apply(void 0, [e, l, a].concat(n))) : z(e, J(new Promise((function (t, r) {
            R.apply(void 0, [e, l, Object.assign({}, a, {
              success: t,
              fail: r
            })].concat(n)), Promise.prototype.finally || (Promise.prototype.finally = function (e) {
              var l = this.constructor;
              return this.then((function (a) {
                return l.resolve(e()).then((function () {
                  return a
                }))
              }), (function (a) {
                return l.resolve(e()).then((function () {
                  throw a
                }))
              }))
            })
          }))))
        } : l
      }
      var Q = 1e-4,
        Z = 750,
        ee = !1,
        le = 0,
        ae = 0;

      function te() {
        var e = wx.getSystemInfoSync(),
          l = e.platform,
          a = e.pixelRatio,
          t = e.windowWidth;
        le = t, ae = a, ee = "ios" === l
      }

      function ne(e, l) {
        if (0 === le && te(), e = Number(e), 0 === e) return 0;
        var a = e / Z * (l || le);
        return a < 0 && (a = -a), a = Math.floor(a + Q), 0 === a ? 1 !== ae && ee ? .5 : 1 : e < 0 ? -a : a
      }
      var re = {
          promiseInterceptor: U
        },
        ie = Object.freeze({
          __proto__: null,
          upx2px: ne,
          interceptors: re,
          addInterceptor: D,
          removeInterceptor: A
        }),
        ue = {
          args: function (e) {
            var l = parseInt(e.current);
            if (!isNaN(l)) {
              var a = e.urls;
              if (Array.isArray(a)) {
                var t = a.length;
                if (t) return l < 0 ? l = 0 : l >= t && (l = t - 1), l > 0 ? (e.current = a[l], e.urls = a.filter((function (e, t) {
                  return !(t < l) || e !== a[l]
                }))) : e.current = a[0], {
                  indicator: !1,
                  loop: !1
                }
              }
            }
          }
        };

      function oe(e) {
        if (e.safeArea) {
          var l = e.safeArea;
          e.safeAreaInsets = {
            top: l.top,
            left: l.left,
            right: e.windowWidth - l.right,
            bottom: e.windowHeight - l.bottom
          }
        }
      }
      var se = {
          previewImage: ue,
          getSystemInfo: {
            returnValue: oe
          },
          getSystemInfoSync: {
            returnValue: oe
          }
        },
        ve = ["vibrate"],
        ce = [],
        be = ["success", "fail", "cancel", "complete"];

      function de(e, l, a) {
        return function (t) {
          return l(fe(e, t, a))
        }
      }

      function pe(e, l) {
        var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          n = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (y(l)) {
          var r = !0 === n ? l : {};
          for (var i in g(a) && (a = a(l, r) || {}), l)
            if (w(a, i)) {
              var u = a[i];
              g(u) && (u = u(l[i], l, r)), u ? m(u) ? r[u] = l[i] : y(u) && (r[u.name ? u.name : i] = u.value) : console.warn("微信小程序 ".concat(e, "暂不支持").concat(i))
            } else -1 !== be.indexOf(i) ? r[i] = de(e, l[i], t) : n || (r[i] = l[i]);
          return r
        }
        return g(l) && (l = de(e, l, t)), l
      }

      function fe(e, l, a) {
        var t = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        return g(se.returnValue) && (l = se.returnValue(e, l)), pe(e, l, a, {}, t)
      }

      function he(e, l) {
        if (w(se, e)) {
          var a = se[e];
          return a ? function (l, t) {
            var n = a;
            g(a) && (n = a(l)), l = pe(e, l, n.args, n.returnValue);
            var r = [l];
            "undefined" !== typeof t && r.push(t);
            var i = wx[n.name || e].apply(wx, r);
            return Y(e) ? fe(e, i, n.returnValue, q(e)) : i
          } : function () {
            console.error("微信小程序 暂不支持".concat(e))
          }
        }
        return l
      }
      var ge = Object.create(null),
        me = ["onTabBarMidButtonTap", "subscribePush", "unsubscribePush", "onPush", "offPush", "share"];

      function ye(e) {
        return function (l) {
          var a = l.fail,
            t = l.complete,
            n = {
              errMsg: "".concat(e, ":fail:暂不支持 ").concat(e, " 方法")
            };
          g(a) && a(n), g(t) && t(n)
        }
      }
      me.forEach((function (e) {
        ge[e] = ye(e)
      }));
      var we = {
        oauth: ["weixin"],
        share: ["weixin"],
        payment: ["wxpay"],
        push: ["weixin"]
      };

      function _e(e) {
        var l = e.service,
          a = e.success,
          t = e.fail,
          n = e.complete,
          r = !1;
        we[l] ? (r = {
          errMsg: "getProvider:ok",
          service: l,
          provider: we[l]
        }, g(a) && a(r)) : (r = {
          errMsg: "getProvider:fail:服务[" + l + "]不存在"
        }, g(t) && t(r)), g(n) && n(r)
      }
      var Se = Object.freeze({
          __proto__: null,
          getProvider: _e
        }),
        xe = function () {
          return "function" === typeof getUniEmitter ? getUniEmitter : function () {
            return e || (e = new t.default), e
          };
          var e
        }();

      function Te(e, l, a) {
        return e[l].apply(e, a)
      }

      function Ee() {
        return Te(xe(), "$on", Array.prototype.slice.call(arguments))
      }

      function Oe() {
        return Te(xe(), "$off", Array.prototype.slice.call(arguments))
      }

      function Pe() {
        return Te(xe(), "$once", Array.prototype.slice.call(arguments))
      }

      function Ce() {
        return Te(xe(), "$emit", Array.prototype.slice.call(arguments))
      }
      var ke = Object.freeze({
          __proto__: null,
          $on: Ee,
          $off: Oe,
          $once: Pe,
          $emit: Ce
        }),
        Me = Object.freeze({
          __proto__: null
        }),
        je = Page,
        $e = Component,
        De = /:/g,
        Ae = S((function (e) {
          return T(e.replace(De, "-"))
        }));

      function Ie(e) {
        if (wx.canIUse("nextTick")) {
          var l = e.triggerEvent;
          e.triggerEvent = function (a) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return l.apply(e, [Ae(a)].concat(n))
          }
        }
      }

      function Be(e, l) {
        var a = l[e];
        l[e] = a ? function () {
          Ie(this);
          for (var e = arguments.length, l = new Array(e), t = 0; t < e; t++) l[t] = arguments[t];
          return a.apply(this, l)
        } : function () {
          Ie(this)
        }
      }
      Page = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return Be("onLoad", e), je(e)
      }, Component = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return Be("created", e), $e(e)
      };
      var Ne = ["onPullDownRefresh", "onReachBottom", "onShareAppMessage", "onPageScroll", "onResize", "onTabItemTap"];

      function Le(e, l) {
        var a = e.$mp[e.mpType];
        l.forEach((function (l) {
          w(a, l) && (e[l] = a[l])
        }))
      }

      function ze(e, l) {
        if (!l) return !0;
        if (t.default.options && Array.isArray(t.default.options[e])) return !0;
        if (l = l.default || l, g(l)) return !!g(l.extendOptions[e]) || !!(l.super && l.super.options && Array.isArray(l.super.options[e]));
        if (g(l[e])) return !0;
        var a = l.mixins;
        return Array.isArray(a) ? !!a.find((function (l) {
          return ze(e, l)
        })) : void 0
      }

      function Fe(e, l, a) {
        l.forEach((function (l) {
          ze(l, a) && (e[l] = function (e) {
            return this.$vm && this.$vm.__call_hook(l, e)
          })
        }))
      }

      function Re(e, l) {
        var a;
        return l = l.default || l, g(l) ? (a = l, l = a.extendOptions) : a = e.extend(l), [a, l]
      }

      function Ue(e, l) {
        if (Array.isArray(l) && l.length) {
          var a = Object.create(null);
          l.forEach((function (e) {
            a[e] = !0
          })), e.$scopedSlots = e.$slots = a
        }
      }

      function Ge(e, l) {
        e = (e || "").split(",");
        var a = e.length;
        1 === a ? l._$vueId = e[0] : 2 === a && (l._$vueId = e[0], l._$vuePid = e[1])
      }

      function He(e, l) {
        var a = e.data || {},
          t = e.methods || {};
        if ("function" === typeof a) try {
          a = a.call(l)
        } catch (n) {
          Object({
            NODE_ENV: "production",
            VUE_APP_PLATFORM: "mp-weixin",
            BASE_URL: "/"
          }).VUE_APP_DEBUG && console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。", a)
        } else try {
          a = JSON.parse(JSON.stringify(a))
        } catch (n) {}
        return y(a) || (a = {}), Object.keys(t).forEach((function (e) {
          -1 !== l.__lifecycle_hooks__.indexOf(e) || w(a, e) || (a[e] = t[e])
        })), a
      }
      var Ve = [String, Number, Boolean, Object, Array, null];

      function qe(e) {
        return function (l, a) {
          this.$vm && (this.$vm[e] = l)
        }
      }

      function Ye(e, l) {
        var a = e["behaviors"],
          t = e["extends"],
          n = e["mixins"],
          r = e["props"];
        r || (e["props"] = r = []);
        var i = [];
        return Array.isArray(a) && a.forEach((function (e) {
          i.push(e.replace("uni://", "wx".concat("://"))), "uni://form-field" === e && (Array.isArray(r) ? (r.push("name"), r.push("value")) : (r["name"] = {
            type: String,
            default: ""
          }, r["value"] = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: ""
          }))
        })), y(t) && t.props && i.push(l({
          properties: Je(t.props, !0)
        })), Array.isArray(n) && n.forEach((function (e) {
          y(e) && e.props && i.push(l({
            properties: Je(e.props, !0)
          }))
        })), i
      }

      function Xe(e, l, a, t) {
        return Array.isArray(l) && 1 === l.length ? l[0] : l
      }

      function Je(e) {
        var l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          a = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], {});
        return l || (a.vueId = {
          type: String,
          value: ""
        }, a.vueSlots = {
          type: null,
          value: [],
          observer: function (e, l) {
            var a = Object.create(null);
            e.forEach((function (e) {
              a[e] = !0
            })), this.setData({
              $slots: a
            })
          }
        }), Array.isArray(e) ? e.forEach((function (e) {
          a[e] = {
            type: null,
            observer: qe(e)
          }
        })) : y(e) && Object.keys(e).forEach((function (l) {
          var t = e[l];
          if (y(t)) {
            var n = t["default"];
            g(n) && (n = n()), t.type = Xe(l, t.type), a[l] = {
              type: -1 !== Ve.indexOf(t.type) ? t.type : null,
              value: n,
              observer: qe(l)
            }
          } else {
            var r = Xe(l, t);
            a[l] = {
              type: -1 !== Ve.indexOf(r) ? r : null,
              observer: qe(l)
            }
          }
        })), a
      }

      function We(e) {
        try {
          e.mp = JSON.parse(JSON.stringify(e))
        } catch (l) {}
        return e.stopPropagation = _, e.preventDefault = _, e.target = e.target || {}, w(e, "detail") || (e.detail = {}), y(e.detail) && (e.target = Object.assign({}, e.target, e.detail)), e
      }

      function Ke(e, l) {
        var a = e;
        return l.forEach((function (l) {
          var t = l[0],
            n = l[2];
          if (t || "undefined" !== typeof n) {
            var r = l[1],
              i = l[3],
              u = t ? e.__get_value(t, a) : a;
            Number.isInteger(u) ? a = n : r ? Array.isArray(u) ? a = u.find((function (l) {
              return e.__get_value(r, l) === n
            })) : y(u) ? a = Object.keys(u).find((function (l) {
              return e.__get_value(r, u[l]) === n
            })) : console.error("v-for 暂不支持循环数据：", u) : a = u[n], i && (a = e.__get_value(i, a))
          }
        })), a
      }

      function Qe(e, l, a) {
        var t = {};
        return Array.isArray(l) && l.length && l.forEach((function (l, n) {
          "string" === typeof l ? l ? "$event" === l ? t["$" + n] = a : 0 === l.indexOf("$event.") ? t["$" + n] = e.__get_value(l.replace("$event.", ""), a) : t["$" + n] = e.__get_value(l) : t["$" + n] = e : t["$" + n] = Ke(e, l)
        })), t
      }

      function Ze(e) {
        for (var l = {}, a = 1; a < e.length; a++) {
          var t = e[a];
          l[t[0]] = t[1]
        }
        return l
      }

      function el(e, l) {
        var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          n = arguments.length > 4 ? arguments[4] : void 0,
          r = arguments.length > 5 ? arguments[5] : void 0,
          i = !1;
        if (n && (i = l.currentTarget && l.currentTarget.dataset && "wx" === l.currentTarget.dataset.comType, !a.length)) return i ? [l] : l.detail.__args__ || l.detail;
        var u = Qe(e, t, l),
          o = [];
        return a.forEach((function (e) {
          "$event" === e ? "__set_model" !== r || n ? n && !i ? o.push(l.detail.__args__[0]) : o.push(l) : o.push(l.target.value) : Array.isArray(e) && "o" === e[0] ? o.push(Ze(e)) : "string" === typeof e && w(u, e) ? o.push(u[e]) : o.push(e)
        })), o
      }
      var ll = "~",
        al = "^";

      function tl(e, l) {
        return e === l || "regionchange" === l && ("begin" === e || "end" === e)
      }

      function nl(e) {
        var l = this;
        e = We(e);
        var a = (e.currentTarget || e.target).dataset;
        if (!a) return console.warn("事件信息不存在");
        var t = a.eventOpts || a["event-opts"];
        if (!t) return console.warn("事件信息不存在");
        var n = e.type,
          r = [];
        return t.forEach((function (a) {
          var t = a[0],
            i = a[1],
            u = t.charAt(0) === al;
          t = u ? t.slice(1) : t;
          var o = t.charAt(0) === ll;
          t = o ? t.slice(1) : t, i && tl(n, t) && i.forEach((function (a) {
            var t = a[0];
            if (t) {
              var n = l.$vm;
              if (n.$options.generic && n.$parent && n.$parent.$parent && (n = n.$parent.$parent), "$emit" === t) return void n.$emit.apply(n, el(l.$vm, e, a[1], a[2], u, t));
              var i = n[t];
              if (!g(i)) throw new Error(" _vm.".concat(t, " is not a function"));
              if (o) {
                if (i.once) return;
                i.once = !0
              }
              r.push(i.apply(n, el(l.$vm, e, a[1], a[2], u, t)))
            }
          }))
        })), "input" === n && 1 === r.length && "undefined" !== typeof r[0] ? r[0] : void 0
      }
      var rl = ["onShow", "onHide", "onError", "onPageNotFound"];

      function il(e, l) {
        var a = l.mocks,
          n = l.initRefs;
        e.$options.store && (t.default.prototype.$store = e.$options.store), t.default.prototype.mpHost = "mp-weixin", t.default.mixin({
          beforeCreate: function () {
            this.$options.mpType && (this.mpType = this.$options.mpType, this.$mp = s({
              data: {}
            }, this.mpType, this.$options.mpInstance), this.$scope = this.$options.mpInstance, delete this.$options.mpType, delete this.$options.mpInstance, "app" !== this.mpType && (n(this), Le(this, a)))
          }
        });
        var r = {
          onLaunch: function (l) {
            this.$vm || (wx.canIUse("nextTick") || console.error("当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上"), this.$vm = e, this.$vm.$mp = {
              app: this
            }, this.$vm.$scope = this, this.$vm.globalData = this.globalData, this.$vm._isMounted = !0, this.$vm.__call_hook("mounted", l), this.$vm.__call_hook("onLaunch", l))
          }
        };
        r.globalData = e.$options.globalData || {};
        var i = e.$options.methods;
        return i && Object.keys(i).forEach((function (e) {
          r[e] = i[e]
        })), Fe(r, rl), r
      }
      var ul = ["__route__", "__wxExparserNodeId__", "__wxWebviewId__"];

      function ol(e, l) {
        for (var a, t = e.$children, n = t.length - 1; n >= 0; n--) {
          var r = t[n];
          if (r.$scope._$vueId === l) return r
        }
        for (var i = t.length - 1; i >= 0; i--)
          if (a = ol(t[i], l), a) return a
      }

      function sl(e) {
        return Behavior(e)
      }

      function vl() {
        return !!this.route
      }

      function cl(e) {
        this.triggerEvent("__l", e)
      }

      function bl(e) {
        var l = e.$scope;
        Object.defineProperty(e, "$refs", {
          get: function () {
            var e = {},
              a = l.selectAllComponents(".vue-ref");
            a.forEach((function (l) {
              var a = l.dataset.ref;
              e[a] = l.$vm || l
            }));
            var t = l.selectAllComponents(".vue-ref-in-for");
            return t.forEach((function (l) {
              var a = l.dataset.ref;
              e[a] || (e[a] = []), e[a].push(l.$vm || l)
            })), e
          }
        })
      }

      function dl(e) {
        var l, a = e.detail || e.value,
          t = a.vuePid,
          n = a.vueOptions;
        t && (l = ol(this.$vm, t)), l || (l = this.$vm), n.parent = l
      }

      function pl(e) {
        return il(e, {
          mocks: ul,
          initRefs: bl
        })
      }

      function fl(e) {
        return App(pl(e)), e
      }

      function hl(e) {
        var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          a = l.isPage,
          n = l.initRelation,
          i = Re(t.default, e),
          u = r(i, 2),
          o = u[0],
          s = u[1],
          v = {
            multipleSlots: !0,
            addGlobalClass: !0
          };
        s["mp-weixin"] && s["mp-weixin"]["options"] && Object.assign(v, s["mp-weixin"]["options"]);
        var c = {
          options: v,
          data: He(s, t.default.prototype),
          behaviors: Ye(s, sl),
          properties: Je(s.props, !1, s.__file),
          lifetimes: {
            attached: function () {
              var e = this.properties,
                l = {
                  mpType: a.call(this) ? "page" : "component",
                  mpInstance: this,
                  propsData: e
                };
              Ge(e.vueId, this), n.call(this, {
                vuePid: this._$vuePid,
                vueOptions: l
              }), this.$vm = new o(l), Ue(this.$vm, e.vueSlots), this.$vm.$mount()
            },
            ready: function () {
              this.$vm && (this.$vm._isMounted = !0, this.$vm.__call_hook("mounted"), this.$vm.__call_hook("onReady"))
            },
            detached: function () {
              this.$vm && this.$vm.$destroy()
            }
          },
          pageLifetimes: {
            show: function (e) {
              this.$vm && this.$vm.__call_hook("onPageShow", e)
            },
            hide: function () {
              this.$vm && this.$vm.__call_hook("onPageHide")
            },
            resize: function (e) {
              this.$vm && this.$vm.__call_hook("onPageResize", e)
            }
          },
          methods: {
            __l: dl,
            __e: nl
          }
        };
        return Array.isArray(s.wxsCallMethods) && s.wxsCallMethods.forEach((function (e) {
          c.methods[e] = function (l) {
            return this.$vm[e](l)
          }
        })), a ? c : [c, o]
      }

      function gl(e) {
        return hl(e, {
          isPage: vl,
          initRelation: cl
        })
      }
      var ml = ["onShow", "onHide", "onUnload"];

      function yl(e, l) {
        l.isPage, l.initRelation;
        var a = gl(e);
        return Fe(a.methods, ml, e), a.methods.onLoad = function (e) {
          this.$vm.$mp.query = e, this.$vm.__call_hook("onLoad", e)
        }, a
      }

      function wl(e) {
        return yl(e, {
          isPage: vl,
          initRelation: cl
        })
      }

      function _l(e) {
        return Component(wl(e))
      }

      function Sl(e) {
        return Component(gl(e))
      }
      ml.push.apply(ml, Ne), ve.forEach((function (e) {
        se[e] = !1
      })), ce.forEach((function (e) {
        var l = se[e] && se[e].name ? se[e].name : e;
        wx.canIUse(l) || (se[e] = !1)
      }));
      var xl = {};
      "undefined" !== typeof Proxy ? xl = new Proxy({}, {
        get: function (e, l) {
          return e[l] ? e[l] : ie[l] ? ie[l] : Me[l] ? K(l, Me[l]) : Se[l] ? K(l, Se[l]) : ge[l] ? K(l, ge[l]) : ke[l] ? ke[l] : w(wx, l) || w(se, l) ? K(l, he(l, wx[l])) : void 0
        },
        set: function (e, l, a) {
          return e[l] = a, !0
        }
      }) : (Object.keys(ie).forEach((function (e) {
        xl[e] = ie[e]
      })), Object.keys(ge).forEach((function (e) {
        xl[e] = K(e, ge[e])
      })), Object.keys(Se).forEach((function (e) {
        xl[e] = K(e, ge[e])
      })), Object.keys(ke).forEach((function (e) {
        xl[e] = ke[e]
      })), Object.keys(Me).forEach((function (e) {
        xl[e] = K(e, Me[e])
      })), Object.keys(wx).forEach((function (e) {
        (w(wx, e) || w(se, e)) && (xl[e] = K(e, he(e, wx[e])))
      }))), wx.createApp = fl, wx.createPage = _l, wx.createComponent = Sl;
      var Tl = xl,
        El = Tl;
      l.default = El
    },
    "54b5": function (e, l, a) {
      "use strict";

      function t() {
        return -this.snapGrid[this.snapGrid.length - 1]
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = t
    },
    5768: function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = void 0;
      var t = {
        pages: {
          "pages/login/login": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white",
            navigationBarTitleText: "登录"
          },
          "pages/register/register": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white",
            navigationBarTitleText: "注册"
          },
          "pages/forget/forget": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white",
            navigationBarTitleText: "忘记密码"
          },
          "pages/center/center": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white",
            navigationBarTitleText: "我的"
          },
          "pages/user-info/user-info": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white",
            navigationBarTitleText: "用户信息"
          },
          "pages/news-detail/news-detail": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white",
            navigationBarTitleText: "资讯详情"
          },
          "pages/xuesheng/list": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white"
          },
          "pages/xuesheng/add-or-update": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white"
          },
          "pages/xuesheng/detail": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white"
          },
          "pages/qiye/list": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white"
          },
          "pages/qiye/add-or-update": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white"
          },
          "pages/qiye/detail": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white"
          },
          "pages/zhiweileibie/list": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white"
          },
          "pages/zhiweileibie/add-or-update": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white"
          },
          "pages/zhiweileibie/detail": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white"
          },
          "pages/zhaopinxinxi/list": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white"
          },
          "pages/zhaopinxinxi/add-or-update": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white"
          },
          "pages/zhaopinxinxi/detail": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white"
          },
          "pages/yingpinxinxi/list": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white"
          },
          "pages/yingpinxinxi/add-or-update": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white"
          },
          "pages/yingpinxinxi/detail": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white"
          },
          "pages/xuanjianghui/list": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white"
          },
          "pages/xuanjianghui/add-or-update": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white"
          },
          "pages/xuanjianghui/detail": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white"
          },
          "pages/xuanjianghuibaoming/list": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white"
          },
          "pages/xuanjianghuibaoming/add-or-update": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white"
          },
          "pages/xuanjianghuibaoming/detail": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white"
          },
          "pages/qiuzhijianli/list": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white"
          },
          "pages/qiuzhijianli/add-or-update": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white"
          },
          "pages/qiuzhijianli/detail": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white"
          },
          "pages/jiuyexinxi/list": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white"
          },
          "pages/jiuyexinxi/add-or-update": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white"
          },
          "pages/jiuyexinxi/detail": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white"
          },
          "pages/storeup/list": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white"
          },
          "pages/storeup/add-or-update": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white"
          },
          "pages/storeup/detail": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white"
          },
          "pages/news/list": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white"
          },
          "pages/news/add-or-update": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white"
          },
          "pages/news/detail": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white"
          },
          "pages/aboutus/list": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white"
          },
          "pages/aboutus/add-or-update": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white"
          },
          "pages/aboutus/detail": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white"
          },
          "common/linkOthers/linkOthers": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white"
          },
          "pages/index/index": {
            navigationBarBackgroundColor: "#E9BE70",
            navigationBarTextStyle: "white",
            navigationBarTitleText: "首页"
          }
        },
        globalStyle: {
          navigationBarTextStyle: "black",
          navigationBarTitleText: "微信小程序就业信息平台开发",
          navigationBarBackgroundColor: "#F8F8F8",
          backgroundColor: "#F8F8F8"
        }
      };
      l.default = t
    },
    5871: function (e, l, a) {
      "use strict";

      function t(e) {
        return t = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
          return typeof e
        } : function (e) {
          return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, t(e)
      }

      function n(e, l) {
        e = e.replace(/=/g, "");
        var a = [];
        switch (l.constructor) {
          case String:
          case Number:
          case Boolean:
            a.push(encodeURIComponent(e) + "=" + encodeURIComponent(l));
            break;
          case Array:
            l.forEach((function (l) {
              a = a.concat(n(e + "[]=", l))
            }));
            break;
          case Object:
            Object.keys(l).forEach((function (t) {
              var r = l[t];
              a = a.concat(n(e + "[" + t + "]", r))
            }))
        }
        return a
      }

      function r(e) {
        var l = [];
        return e.forEach((function (e) {
          "string" == typeof e ? l.push(e) : l = l.concat(r(e))
        })), l
        /**
         * Vue Jsonp.
         * # Carry Your World #
         *
         * @author: LancerComet
         * @license: MIT
         */
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.jsonp = u, l.VueJsonp = void 0;
      var i = {
        install: function (e) {
          e.prototype.$jsonp = u
        }
      };

      function u(e, l, a) {
        if (void 0 === l && (l = {}), "string" != typeof e) throw new Error('[Vue-jsonp] Type of param "url" is not string.');
        if ("object" != t(l) || !l) throw new Error("[Vue-jsonp] Invalid params, should be an object.");
        return a = "number" == typeof a ? a : 5e3, new Promise((function (t, i) {
          var u = "string" == typeof l.callbackQuery ? l.callbackQuery : "callback",
            o = "string" == typeof l.callbackName ? l.callbackName : "jsonp_" + (Math.floor(1e5 * Math.random()) * Date.now()).toString(16);
          l[u] = o, delete l.callbackQuery, delete l.callbackName;
          var s = [];
          Object.keys(l).forEach((function (e) {
            s = s.concat(n(e, l[e]))
          }));
          var v = r(s).join("&"),
            c = function () {
              b(), clearTimeout(p), i({
                status: 400,
                statusText: "Bad Request"
              })
            },
            b = function () {
              f.removeEventListener("error", c)
            },
            d = function () {
              document.body.removeChild(f), delete window[o]
            },
            p = null;
          a > -1 && (p = setTimeout((function () {
            b(), d(), i({
              statusText: "Request Timeout",
              status: 408
            })
          }), a)), window[o] = function (e) {
            clearTimeout(p), b(), d(), t(e)
          };
          var f = document.createElement("script");
          f.addEventListener("error", c), f.src = e + (/\?/.test(e) ? "&" : "?") + v, document.body.appendChild(f)
        }))
      }
      l.VueJsonp = i
    },
    "5aba": function (e, l, a) {
      "use strict";

      function t(e, l) {
        var a = this;
        a.$wrapperEl && (a.params.cssMode || a.$wrapperEl.transition(e), a.emit("setTransition", e, l))
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = t
    },
    "5cbd": function (e, l, a) {
      "use strict";

      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return ".".concat(e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, "."))
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = t
    },
    "5efe": function (e, l, a) {
      "use strict";

      function t(e) {
        return t = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
          return typeof e
        } : function (e) {
          return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, t(e)
      }

      function n(e) {
        return "object" === t(e) && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
      }

      function r(e, l) {
        var a = ["__proto__", "constructor", "prototype"];
        Object.keys(l).filter((function (e) {
          return a.indexOf(e) < 0
        })).forEach((function (a) {
          "undefined" === typeof e[a] ? e[a] = l[a] : n(l[a]) && n(e[a]) && Object.keys(l[a]).length > 0 ? l[a].__swiper__ ? e[a] = l[a] : r(e[a], l[a]) : e[a] = l[a]
        }))
      }

      function i() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e.navigation && "undefined" === typeof e.navigation.nextEl && "undefined" === typeof e.navigation.prevEl
      }

      function u() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e.pagination && "undefined" === typeof e.pagination.el
      }

      function o() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e.scrollbar
      }

      function s() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          l = e.split(" ").map((function (e) {
            return e.trim()
          })).filter((function (e) {
            return !!e
          })),
          a = [];
        return l.forEach((function (e) {
          a.indexOf(e) < 0 && a.push(e)
        })), a.join(" ")
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.isObject = n, l.extend = r, l.needsNavigation = i, l.needsPagination = u, l.needsScrollbar = o, l.uniqueClasses = s
    },
    "5f9a": function (e, l, a) {
      "use strict";

      function t(e) {
        var l = e.swiper,
          a = e.runCallbacks,
          t = e.direction,
          n = e.step,
          r = l.activeIndex,
          i = l.previousIndex,
          u = t;
        if (u || (u = r > i ? "next" : r < i ? "prev" : "reset"), l.emit("transition".concat(n)), a && r !== i) {
          if ("reset" === u) return void l.emit("slideResetTransition".concat(n));
          l.emit("slideChangeTransition".concat(n)), "next" === u ? l.emit("slideNextTransition".concat(n)) : l.emit("slidePrevTransition".concat(n))
        }
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = t
    },
    "61f7": function (e, l, a) {
      "use strict";

      function t(e) {
        return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(e)
      }

      function n(e) {
        return /^1[0-9]{10}$/.test(e)
      }

      function r(e) {
        return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(e)
      }

      function i(e) {
        return /^http[s]?:\/\/.*/.test(e)
      }

      function u(e) {
        return /(^-?[+-]?([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)([eE][+-]?[0-9]+)?$)|(^$)/.test(e)
      }

      function o(e) {
        return /(^-?\d+$)|(^$)/.test(e)
      }

      function s(e) {
        var l = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        return !!l.test(e)
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.isEmail = t, l.isMobile = n, l.isPhone = r, l.isURL = i, l.isNumber = u, l.isIntNumer = o, l.checkIdCard = s
    },
    "64c1": function (e, l, a) {
      "use strict";

      function t() {
        var e = this,
          l = e.wrapperEl,
          a = e.rtlTranslate,
          t = e.enabled;
        if (t) {
          var n;
          e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -l.scrollLeft : e.translate = -l.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
          var r = e.maxTranslate() - e.minTranslate();
          n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, n !== e.progress && e.updateProgress(a ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
        }
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = t
    },
    "64ed": function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.calcLoopedSlides = s, l.renderLoop = v;
      var t = n(a("35a5"));

      function n(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function r(e) {
        return o(e) || u(e) || i()
      }

      function i() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }

      function u(e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
      }

      function o(e) {
        if (Array.isArray(e)) {
          for (var l = 0, a = new Array(e.length); l < e.length; l++) a[l] = e[l];
          return a
        }
      }

      function s(e, l) {
        var a = l.slidesPerView;
        if (l.breakpoints) {
          var n = t.default.prototype.getBreakpoint(l.breakpoints),
            r = n in l.breakpoints ? l.breakpoints[n] : void 0;
          r && r.slidesPerView && (a = r.slidesPerView)
        }
        var i = Math.ceil(parseFloat(l.loopedSlides || a, 10));
        return i += l.loopAdditionalSlides, i > e.length && (i = e.length), i
      }

      function v(e, l, a) {
        var t = a;
        if (l.loopFillGroupWithBlank) {
          var n = l.slidesPerGroup - t.length % l.slidesPerGroup;
          if (n !== l.slidesPerGroup)
            for (var i = 0; i < n; i += 1) {
              var u = h("div", {
                class: "".concat(l.slideClass, " ").concat(l.slideBlankClass)
              });
              t.push(u)
            }
        }
        "auto" !== l.slidesPerView || l.loopedSlides || (l.loopedSlides = t.length);
        var o = s(t, l),
          v = [],
          c = [];
        return t.forEach((function (l, a) {
          a < o && (e.loopUpdateData || c.push(l)), a < t.length && a >= t.length - o && (e.loopUpdateData || v.push(l))
        })), e && (e.originalDataList || (e.originalDataList = []), e.originalDataList = [].concat(v, r(t), c)), {
          data: [].concat(v, r(t), c)
        }
      }
    },
    "651d": function (e, l, a) {},
    "655b": function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = v;
      var t = n(a("5cbd"));

      function n(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function r(e) {
        return o(e) || u(e) || i()
      }

      function i() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }

      function u(e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
      }

      function o(e) {
        if (Array.isArray(e)) {
          for (var l = 0, a = new Array(e.length); l < e.length; l++) a[l] = e[l];
          return a
        }
      }

      function s(e, l, a) {
        return l in e ? Object.defineProperty(e, l, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[l] = a, e
      }

      function v(e) {
        var l, a = e.swiper,
          n = e.extendParams,
          i = e.on,
          u = e.emit,
          o = "swiper-pagination";
        n({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: function (e) {
              return e
            },
            formatFractionTotal: function (e) {
              return e
            },
            bulletClass: "".concat(o, "-bullet"),
            bulletActiveClass: "".concat(o, "-bullet-active"),
            modifierClass: "".concat(o, "-"),
            currentClass: "".concat(o, "-current"),
            totalClass: "".concat(o, "-total"),
            hiddenClass: "".concat(o, "-hidden"),
            progressbarFillClass: "".concat(o, "-progressbar-fill"),
            progressbarOppositeClass: "".concat(o, "-progressbar-opposite"),
            clickableClass: "".concat(o, "-clickable"),
            lockClass: "".concat(o, "-lock"),
            horizontalClass: "".concat(o, "-horizontal"),
            verticalClass: "".concat(o, "-vertical")
          }
        }), a.pagination = {
          el: null,
          $el: null,
          bullets: []
        };
        var v = 0;

        function c() {
          return !a.params.pagination.el || !a.pagination.el || !a.pagination.$el
        }

        function b(e, l) {
          var t = a.params.pagination.bulletActiveClass,
            n = a.pagination.bullets;
          n[e.index + l] && n[e.index + l].addPaginationItemClass("".concat(t, "-").concat(l > 0 ? "next" : "prev")), n[e.index + (l > 0 ? l + 1 : l - 1)] && n[e.index + (l > 0 ? l + 1 : l - 1)].addPaginationItemClass("".concat(t, "-").concat(l > 0 ? "next" : "prev", "-").concat(l > 0 ? "next" : "prev"))
        }

        function d() {
          var e = a.rtl,
            t = a.params.pagination;
          if (!c()) {
            var n, r = a.virtual && a.params.virtual.enabled ? a.virtual.slides.length : a.slides.length,
              i = a.pagination.$el,
              o = a.params.loop ? Math.ceil((r - 2 * a.loopedSlides) / a.params.slidesPerGroup) : a.snapGrid.length;
            if (a.params.loop ? (n = Math.ceil((a.activeIndex - a.loopedSlides) / a.params.slidesPerGroup), n > r - 1 - 2 * a.loopedSlides && (n -= r - 2 * a.loopedSlides), n > o - 1 && (n -= o), n < 0 && "bullets" !== a.params.paginationType && (n = o + n)) : n = "undefined" !== typeof a.snapIndex ? a.snapIndex : a.activeIndex || 0, "bullets" === t.type && a.pagination.bullets && a.pagination.bullets.length > 0) {
              var d, p, f, h = a.pagination.bullets;
              if (t.dynamicBullets && (l = h[0][a.isHorizontal() ? "outerWidth" : "outerHeight"], a.$wrapperEl.paginationCss(s({}, a.isHorizontal() ? "width" : "height", "".concat(l * (t.dynamicMainBullets + 4), "px"))), t.dynamicMainBullets > 1 && void 0 !== a.previousIndex && (v += n - (a.previousIndex - a.loopedSlides || 0), v > t.dynamicMainBullets - 1 ? v = t.dynamicMainBullets - 1 : v < 0 && (v = 0)), d = Math.max(n - v, 0), p = d + (Math.min(h.length, t.dynamicMainBullets) - 1), f = (p + d) / 2), h.forEach((function (e) {
                  e.removePaginationItemClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((function (e) {
                    return "".concat(t.bulletActiveClass).concat(e)
                  })).join(" "))
                })), i.length > 1) h.each((function (e) {
                var l = $(e),
                  a = l.index();
                a === n && l.addClass(t.bulletActiveClass), t.dynamicBullets && (a >= d && a <= p && l.addClass("".concat(t.bulletActiveClass, "-main")), a === d && b(l, "prev"), a === p && b(l, "next"))
              }));
              else {
                var g = h[n],
                  m = g.index;
                if (g.addPaginationItemClass(t.bulletActiveClass), t.dynamicBullets) {
                  for (var y = h[d], w = h[p], _ = d; _ <= p; _ += 1) h[_].addPaginationItemClass("".concat(t.bulletActiveClass, "-main"));
                  if (a.params.loop)
                    if (m >= h.length) {
                      for (var S = t.dynamicMainBullets; S >= 0; S -= 1) h[h.length - S].addPaginationItemClass("".concat(t.bulletActiveClass, "-main"));
                      h[h.length - t.dynamicMainBullets - 1].addPaginationItemClass("".concat(t.bulletActiveClass, "-prev"))
                    } else b(y, -1), b(w, 1);
                  else b(y, -1), b(w, 1)
                }
              }
              if (t.dynamicBullets) {
                var x = Math.min(h.length, t.dynamicMainBullets + 4),
                  T = (l * x - l) / 2 - f * l,
                  E = e ? "right" : "left";
                h.forEach((function (e) {
                  e.setCss(s({}, a.isHorizontal() ? E : "top", "".concat(T, "px")))
                }))
              }
            }
            if ("fraction" === t.type && (a.native.paginationContent.text = t.formatFractionCurrent(n + 1), a.native.paginationContent.total = t.formatFractionTotal(o), a.native.updateData({
                paginationContent: a.native.paginationContent
              })), "progressbar" === t.type) {
              var O;
              O = t.progressbarOpposite ? a.isHorizontal() ? "vertical" : "horizontal" : a.isHorizontal() ? "horizontal" : "vertical";
              var P = (n + 1) / o,
                C = 1,
                k = 1;
              "horizontal" === O ? C = P : k = P, a.native.paginationContent.transform("translate3d(0,0,0) scaleX(".concat(C, ") scaleY(").concat(k, ")")), a.native.paginationContent.transition(a.params.speed), a.native.updateData({
                paginationContent: a.native.paginationContent
              })
            }
            "custom" === t.type && t.renderCustom ? (i.html(t.renderCustom(a, n + 1, o)), u("paginationRender", i[0])) : u("paginationUpdate", i[0]), a.params.watchOverflow && a.enabled && a.$wrapperEl[a.isLocked ? "addPaginationClass" : "removePaginationClass"](t.lockClass)
          }
        }

        function p() {
          var e = a.params.pagination;
          if (!c()) {
            var l = a.virtual && a.params.virtual.enabled ? a.virtual.slides.length : a.slides.length;
            a.pagination.$el;
            if ("bullets" === e.type) {
              var t = a.params.loop ? Math.ceil((l - 2 * a.loopedSlides) / a.params.slidesPerGroup) : a.snapGrid.length;
              a.params.freeMode && a.params.freeMode.enabled && !a.params.loop && t > l && (t = l);
              for (var n = 0; n < t; n += 1) e.renderBullet ? e.renderBullet.call(a, n, e.bulletClass) : (a.native.paginationType = "bullets", a.native.paginationContent.push({
                index: n,
                outerWidth: 16,
                outerHeight: 16,
                classContent: [e.bulletClass],
                styleContent: {},
                addPaginationItemClass: function (e) {
                  this.classContent = Array.from(new Set([].concat(r(this.classContent), r(e.split(" ")))))
                },
                removePaginationItemClass: function (e) {
                  this.classContent = this.classContent.filter((function (l) {
                    return !e.split(" ").includes(l)
                  }))
                },
                setCss: function (e) {
                  var l = this;
                  Object.keys(e).forEach((function (a) {
                    l.styleContent[a] = e[a]
                  }))
                }
              }), a.native.updateData({
                paginationType: a.native.paginationType,
                paginationContent: a.native.paginationContent
              }));
              a.pagination.bullets = a.native.paginationContent
            }
            "fraction" === e.type && (e.renderFraction ? e.renderFraction.call(a, e.currentClass, e.totalClass) : (a.native.paginationType = "fraction", a.native.paginationContent = {
              currentClass: e.currentClass,
              totalClass: e.totalClass
            }, a.native.updateData({
              paginationType: a.native.paginationType,
              paginationContent: a.native.paginationContent
            }))), "progressbar" === e.type && (e.renderProgressbar ? e.renderProgressbar.call(a, e.progressbarFillClass) : (a.native.paginationType = "progressbar", a.native.paginationContent = {
              progressbarFillClass: e.progressbarFillClass,
              styleContent: {
                transform: "",
                transitionDuration: ""
              },
              transition: function (e) {
                this.styleContent.transitionDuration = "".concat(e, "ms")
              },
              transform: function (e) {
                this.styleContent.transform = e
              }
            }, a.native.updateData({
              paginationType: a.native.paginationType,
              paginationContent: a.native.paginationContent
            }))), "custom" !== e.type && u("paginationRender", a.pagination.$el[0])
          }
        }

        function f() {
          var e = a.params.pagination;
          if (e.el) {
            a.native.updateData({
              showIndicators: !0
            });
            var l = e.el;
            "bullets" === e.type && e.clickable && a.$wrapperEl.addPaginationClass(e.clickableClass), a.$wrapperEl.addPaginationClass(e.modifierClass + e.type), a.$wrapperEl.addPaginationClass(e.modifierClass + a.params.direction), "bullets" === e.type && e.dynamicBullets && (a.$wrapperEl.addPaginationClass("".concat(e.modifierClass).concat(e.type, "-dynamic")), v = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && a.$wrapperEl.addPaginationClass(e.progressbarOppositeClass), e.clickable && a.on("paginationItemClick", (function (e, l) {
              var t = l * a.params.slidesPerGroup;
              a.params.loop && (t += a.loopedSlides), a.slideTo(t)
            })), Object.assign(a.pagination, {
              $el: l,
              el: l
            }), a.enabled || a.$wrapperEl.addPaginationClass(e.lockClass)
          }
        }

        function h() {
          var e = a.params.pagination;
          if (!c()) {
            a.pagination.$el;
            e.clickable && a.off("paginationItemClick", (0, t.default)(e.bulletClass))
          }
        }
        i("init update", (function () {
          a.native.paginationContent && a.native.updateData({
            paginationContent: []
          }), f(), p(), d()
        })), i("activeIndexChange", (function () {
          (a.params.loop || "undefined" === typeof a.snapIndex) && d()
        })), i("snapIndexChange", (function () {
          a.params.loop || d()
        })), i("slidesLengthChange", (function () {
          a.params.loop && (p(), d())
        })), i("snapGridLengthChange", (function () {
          a.params.loop || (p(), d())
        })), i("destroy", (function () {
          h()
        })), i("enable disable", (function () {
          var e = a.pagination.$el;
          e && e[a.enabled ? "removeClass" : "addClass"](a.params.pagination.lockClass)
        })), i("lock unlock", (function () {
          d()
        })), i("click", (function (e, l) {
          var t = l.target,
            n = a.pagination.$el;
          if (a.params.pagination.el && a.params.pagination.hideOnClick && n.length > 0 && !$(t).hasClass(a.params.pagination.bulletClass)) {
            if (a.navigation && (a.navigation.nextEl && t === a.navigation.nextEl || a.navigation.prevEl && t === a.navigation.prevEl)) return;
            var r = n.hasClass(a.params.pagination.hiddenClass);
            u(!0 === r ? "paginationShow" : "paginationHide"), n.toggleClass(a.params.pagination.hiddenClass)
          }
        })), Object.assign(a.pagination, {
          render: p,
          update: d,
          init: f,
          destroy: h
        })
      }
    },
    "66fd": function (e, l, a) {
      "use strict";
      a.r(l),
        function (e) {
          /*!
           * Vue.js v2.6.11
           * (c) 2014-2020 Evan You
           * Released under the MIT License.
           */
          var a = Object.freeze({});

          function t(e) {
            return void 0 === e || null === e
          }

          function n(e) {
            return void 0 !== e && null !== e
          }

          function r(e) {
            return !0 === e
          }

          function i(e) {
            return !1 === e
          }

          function u(e) {
            return "string" === typeof e || "number" === typeof e || "symbol" === typeof e || "boolean" === typeof e
          }

          function o(e) {
            return null !== e && "object" === typeof e
          }
          var s = Object.prototype.toString;

          function v(e) {
            return "[object Object]" === s.call(e)
          }

          function c(e) {
            return "[object RegExp]" === s.call(e)
          }

          function b(e) {
            var l = parseFloat(String(e));
            return l >= 0 && Math.floor(l) === l && isFinite(e)
          }

          function d(e) {
            return n(e) && "function" === typeof e.then && "function" === typeof e.catch
          }

          function p(e) {
            return null == e ? "" : Array.isArray(e) || v(e) && e.toString === s ? JSON.stringify(e, null, 2) : String(e)
          }

          function f(e) {
            var l = parseFloat(e);
            return isNaN(l) ? e : l
          }

          function h(e, l) {
            for (var a = Object.create(null), t = e.split(","), n = 0; n < t.length; n++) a[t[n]] = !0;
            return l ? function (e) {
              return a[e.toLowerCase()]
            } : function (e) {
              return a[e]
            }
          }
          h("slot,component", !0);
          var g = h("key,ref,slot,slot-scope,is");

          function m(e, l) {
            if (e.length) {
              var a = e.indexOf(l);
              if (a > -1) return e.splice(a, 1)
            }
          }
          var y = Object.prototype.hasOwnProperty;

          function w(e, l) {
            return y.call(e, l)
          }

          function _(e) {
            var l = Object.create(null);
            return function (a) {
              var t = l[a];
              return t || (l[a] = e(a))
            }
          }
          var S = /-(\w)/g,
            x = _((function (e) {
              return e.replace(S, (function (e, l) {
                return l ? l.toUpperCase() : ""
              }))
            })),
            T = _((function (e) {
              return e.charAt(0).toUpperCase() + e.slice(1)
            })),
            E = /\B([A-Z])/g,
            O = _((function (e) {
              return e.replace(E, "-$1").toLowerCase()
            }));

          function P(e, l) {
            function a(a) {
              var t = arguments.length;
              return t ? t > 1 ? e.apply(l, arguments) : e.call(l, a) : e.call(l)
            }
            return a._length = e.length, a
          }

          function C(e, l) {
            return e.bind(l)
          }
          var k = Function.prototype.bind ? C : P;

          function M(e, l) {
            l = l || 0;
            var a = e.length - l,
              t = new Array(a);
            while (a--) t[a] = e[a + l];
            return t
          }

          function j(e, l) {
            for (var a in l) e[a] = l[a];
            return e
          }

          function $(e) {
            for (var l = {}, a = 0; a < e.length; a++) e[a] && j(l, e[a]);
            return l
          }

          function D(e, l, a) {}
          var A = function (e, l, a) {
              return !1
            },
            I = function (e) {
              return e
            };

          function B(e, l) {
            if (e === l) return !0;
            var a = o(e),
              t = o(l);
            if (!a || !t) return !a && !t && String(e) === String(l);
            try {
              var n = Array.isArray(e),
                r = Array.isArray(l);
              if (n && r) return e.length === l.length && e.every((function (e, a) {
                return B(e, l[a])
              }));
              if (e instanceof Date && l instanceof Date) return e.getTime() === l.getTime();
              if (n || r) return !1;
              var i = Object.keys(e),
                u = Object.keys(l);
              return i.length === u.length && i.every((function (a) {
                return B(e[a], l[a])
              }))
            } catch (s) {
              return !1
            }
          }

          function N(e, l) {
            for (var a = 0; a < e.length; a++)
              if (B(e[a], l)) return a;
            return -1
          }

          function L(e) {
            var l = !1;
            return function () {
              l || (l = !0, e.apply(this, arguments))
            }
          }
          var z = ["component", "directive", "filter"],
            F = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
            R = {
              optionMergeStrategies: Object.create(null),
              silent: !1,
              productionTip: !1,
              devtools: !1,
              performance: !1,
              errorHandler: null,
              warnHandler: null,
              ignoredElements: [],
              keyCodes: Object.create(null),
              isReservedTag: A,
              isReservedAttr: A,
              isUnknownElement: A,
              getTagNamespace: D,
              parsePlatformTagName: I,
              mustUseProp: A,
              async: !0,
              _lifecycleHooks: F
            },
            U = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

          function G(e) {
            var l = (e + "").charCodeAt(0);
            return 36 === l || 95 === l
          }

          function H(e, l, a, t) {
            Object.defineProperty(e, l, {
              value: a,
              enumerable: !!t,
              writable: !0,
              configurable: !0
            })
          }
          var V = new RegExp("[^" + U.source + ".$_\\d]");

          function q(e) {
            if (!V.test(e)) {
              var l = e.split(".");
              return function (e) {
                for (var a = 0; a < l.length; a++) {
                  if (!e) return;
                  e = e[l[a]]
                }
                return e
              }
            }
          }
          var Y, X = "__proto__" in {},
            J = "undefined" !== typeof window,
            W = "undefined" !== typeof WXEnvironment && !!WXEnvironment.platform,
            K = W && WXEnvironment.platform.toLowerCase(),
            Q = J && window.navigator.userAgent.toLowerCase(),
            Z = Q && /msie|trident/.test(Q),
            ee = (Q && Q.indexOf("msie 9.0"), Q && Q.indexOf("edge/") > 0),
            le = (Q && Q.indexOf("android"), Q && /iphone|ipad|ipod|ios/.test(Q) || "ios" === K),
            ae = (Q && /chrome\/\d+/.test(Q), Q && /phantomjs/.test(Q), Q && Q.match(/firefox\/(\d+)/), {}.watch);
          if (J) try {
            var te = {};
            Object.defineProperty(te, "passive", {
              get: function () {}
            }), window.addEventListener("test-passive", null, te)
          } catch (ln) {}
          var ne = function () {
              return void 0 === Y && (Y = !J && !W && "undefined" !== typeof e && (e["process"] && "server" === e["process"].env.VUE_ENV)), Y
            },
            re = J && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

          function ie(e) {
            return "function" === typeof e && /native code/.test(e.toString())
          }
          var ue, oe = "undefined" !== typeof Symbol && ie(Symbol) && "undefined" !== typeof Reflect && ie(Reflect.ownKeys);
          ue = "undefined" !== typeof Set && ie(Set) ? Set : function () {
            function e() {
              this.set = Object.create(null)
            }
            return e.prototype.has = function (e) {
              return !0 === this.set[e]
            }, e.prototype.add = function (e) {
              this.set[e] = !0
            }, e.prototype.clear = function () {
              this.set = Object.create(null)
            }, e
          }();
          var se = D,
            ve = 0,
            ce = function () {
              "undefined" !== typeof SharedObject ? this.id = SharedObject.uid++ : this.id = ve++, this.subs = []
            };

          function be(e) {
            ce.SharedObject.targetStack.push(e), ce.SharedObject.target = e
          }

          function de() {
            ce.SharedObject.targetStack.pop(), ce.SharedObject.target = ce.SharedObject.targetStack[ce.SharedObject.targetStack.length - 1]
          }
          ce.prototype.addSub = function (e) {
            this.subs.push(e)
          }, ce.prototype.removeSub = function (e) {
            m(this.subs, e)
          }, ce.prototype.depend = function () {
            ce.SharedObject.target && ce.SharedObject.target.addDep(this)
          }, ce.prototype.notify = function () {
            var e = this.subs.slice();
            for (var l = 0, a = e.length; l < a; l++) e[l].update()
          }, ce.SharedObject = "undefined" !== typeof SharedObject ? SharedObject : {}, ce.SharedObject.target = null, ce.SharedObject.targetStack = [];
          var pe = function (e, l, a, t, n, r, i, u) {
              this.tag = e, this.data = l, this.children = a, this.text = t, this.elm = n, this.ns = void 0, this.context = r, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = l && l.key, this.componentOptions = i, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = u, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1
            },
            fe = {
              child: {
                configurable: !0
              }
            };
          fe.child.get = function () {
            return this.componentInstance
          }, Object.defineProperties(pe.prototype, fe);
          var he = function (e) {
            void 0 === e && (e = "");
            var l = new pe;
            return l.text = e, l.isComment = !0, l
          };

          function ge(e) {
            return new pe(void 0, void 0, void 0, String(e))
          }

          function me(e) {
            var l = new pe(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
            return l.ns = e.ns, l.isStatic = e.isStatic, l.key = e.key, l.isComment = e.isComment, l.fnContext = e.fnContext, l.fnOptions = e.fnOptions, l.fnScopeId = e.fnScopeId, l.asyncMeta = e.asyncMeta, l.isCloned = !0, l
          }
          var ye = Array.prototype,
            we = Object.create(ye),
            _e = ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"];
          _e.forEach((function (e) {
            var l = ye[e];
            H(we, e, (function () {
              var a = [],
                t = arguments.length;
              while (t--) a[t] = arguments[t];
              var n, r = l.apply(this, a),
                i = this.__ob__;
              switch (e) {
                case "push":
                case "unshift":
                  n = a;
                  break;
                case "splice":
                  n = a.slice(2);
                  break
              }
              return n && i.observeArray(n), i.dep.notify(), r
            }))
          }));
          var Se = Object.getOwnPropertyNames(we),
            xe = !0;

          function Te(e) {
            xe = e
          }
          var Ee = function (e) {
            this.value = e, this.dep = new ce, this.vmCount = 0, H(e, "__ob__", this), Array.isArray(e) ? (X ? e.push !== e.__proto__.push ? Pe(e, we, Se) : Oe(e, we) : Pe(e, we, Se), this.observeArray(e)) : this.walk(e)
          };

          function Oe(e, l) {
            e.__proto__ = l
          }

          function Pe(e, l, a) {
            for (var t = 0, n = a.length; t < n; t++) {
              var r = a[t];
              H(e, r, l[r])
            }
          }

          function Ce(e, l) {
            var a;
            if (o(e) && !(e instanceof pe)) return w(e, "__ob__") && e.__ob__ instanceof Ee ? a = e.__ob__ : xe && !ne() && (Array.isArray(e) || v(e)) && Object.isExtensible(e) && !e._isVue && (a = new Ee(e)), l && a && a.vmCount++, a
          }

          function ke(e, l, a, t, n) {
            var r = new ce,
              i = Object.getOwnPropertyDescriptor(e, l);
            if (!i || !1 !== i.configurable) {
              var u = i && i.get,
                o = i && i.set;
              u && !o || 2 !== arguments.length || (a = e[l]);
              var s = !n && Ce(a);
              Object.defineProperty(e, l, {
                enumerable: !0,
                configurable: !0,
                get: function () {
                  var l = u ? u.call(e) : a;
                  return ce.SharedObject.target && (r.depend(), s && (s.dep.depend(), Array.isArray(l) && $e(l))), l
                },
                set: function (l) {
                  var t = u ? u.call(e) : a;
                  l === t || l !== l && t !== t || u && !o || (o ? o.call(e, l) : a = l, s = !n && Ce(l), r.notify())
                }
              })
            }
          }

          function Me(e, l, a) {
            if (Array.isArray(e) && b(l)) return e.length = Math.max(e.length, l), e.splice(l, 1, a), a;
            if (l in e && !(l in Object.prototype)) return e[l] = a, a;
            var t = e.__ob__;
            return e._isVue || t && t.vmCount ? a : t ? (ke(t.value, l, a), t.dep.notify(), a) : (e[l] = a, a)
          }

          function je(e, l) {
            if (Array.isArray(e) && b(l)) e.splice(l, 1);
            else {
              var a = e.__ob__;
              e._isVue || a && a.vmCount || w(e, l) && (delete e[l], a && a.dep.notify())
            }
          }

          function $e(e) {
            for (var l = void 0, a = 0, t = e.length; a < t; a++) l = e[a], l && l.__ob__ && l.__ob__.dep.depend(), Array.isArray(l) && $e(l)
          }
          Ee.prototype.walk = function (e) {
            for (var l = Object.keys(e), a = 0; a < l.length; a++) ke(e, l[a])
          }, Ee.prototype.observeArray = function (e) {
            for (var l = 0, a = e.length; l < a; l++) Ce(e[l])
          };
          var De = R.optionMergeStrategies;

          function Ae(e, l) {
            if (!l) return e;
            for (var a, t, n, r = oe ? Reflect.ownKeys(l) : Object.keys(l), i = 0; i < r.length; i++) a = r[i], "__ob__" !== a && (t = e[a], n = l[a], w(e, a) ? t !== n && v(t) && v(n) && Ae(t, n) : Me(e, a, n));
            return e
          }

          function Ie(e, l, a) {
            return a ? function () {
              var t = "function" === typeof l ? l.call(a, a) : l,
                n = "function" === typeof e ? e.call(a, a) : e;
              return t ? Ae(t, n) : n
            } : l ? e ? function () {
              return Ae("function" === typeof l ? l.call(this, this) : l, "function" === typeof e ? e.call(this, this) : e)
            } : l : e
          }

          function Be(e, l) {
            var a = l ? e ? e.concat(l) : Array.isArray(l) ? l : [l] : e;
            return a ? Ne(a) : a
          }

          function Ne(e) {
            for (var l = [], a = 0; a < e.length; a++) - 1 === l.indexOf(e[a]) && l.push(e[a]);
            return l
          }

          function Le(e, l, a, t) {
            var n = Object.create(e || null);
            return l ? j(n, l) : n
          }
          De.data = function (e, l, a) {
            return a ? Ie(e, l, a) : l && "function" !== typeof l ? e : Ie(e, l)
          }, F.forEach((function (e) {
            De[e] = Be
          })), z.forEach((function (e) {
            De[e + "s"] = Le
          })), De.watch = function (e, l, a, t) {
            if (e === ae && (e = void 0), l === ae && (l = void 0), !l) return Object.create(e || null);
            if (!e) return l;
            var n = {};
            for (var r in j(n, e), l) {
              var i = n[r],
                u = l[r];
              i && !Array.isArray(i) && (i = [i]), n[r] = i ? i.concat(u) : Array.isArray(u) ? u : [u]
            }
            return n
          }, De.props = De.methods = De.inject = De.computed = function (e, l, a, t) {
            if (!e) return l;
            var n = Object.create(null);
            return j(n, e), l && j(n, l), n
          }, De.provide = Ie;
          var ze = function (e, l) {
            return void 0 === l ? e : l
          };

          function Fe(e, l) {
            var a = e.props;
            if (a) {
              var t, n, r, i = {};
              if (Array.isArray(a)) {
                t = a.length;
                while (t--) n = a[t], "string" === typeof n && (r = x(n), i[r] = {
                  type: null
                })
              } else if (v(a))
                for (var u in a) n = a[u], r = x(u), i[r] = v(n) ? n : {
                  type: n
                };
              else 0;
              e.props = i
            }
          }

          function Re(e, l) {
            var a = e.inject;
            if (a) {
              var t = e.inject = {};
              if (Array.isArray(a))
                for (var n = 0; n < a.length; n++) t[a[n]] = {
                  from: a[n]
                };
              else if (v(a))
                for (var r in a) {
                  var i = a[r];
                  t[r] = v(i) ? j({
                    from: r
                  }, i) : {
                    from: i
                  }
                } else 0
            }
          }

          function Ue(e) {
            var l = e.directives;
            if (l)
              for (var a in l) {
                var t = l[a];
                "function" === typeof t && (l[a] = {
                  bind: t,
                  update: t
                })
              }
          }

          function Ge(e, l, a) {
            if ("function" === typeof l && (l = l.options), Fe(l, a), Re(l, a), Ue(l), !l._base && (l.extends && (e = Ge(e, l.extends, a)), l.mixins))
              for (var t = 0, n = l.mixins.length; t < n; t++) e = Ge(e, l.mixins[t], a);
            var r, i = {};
            for (r in e) u(r);
            for (r in l) w(e, r) || u(r);

            function u(t) {
              var n = De[t] || ze;
              i[t] = n(e[t], l[t], a, t)
            }
            return i
          }

          function He(e, l, a, t) {
            if ("string" === typeof a) {
              var n = e[l];
              if (w(n, a)) return n[a];
              var r = x(a);
              if (w(n, r)) return n[r];
              var i = T(r);
              if (w(n, i)) return n[i];
              var u = n[a] || n[r] || n[i];
              return u
            }
          }

          function Ve(e, l, a, t) {
            var n = l[e],
              r = !w(a, e),
              i = a[e],
              u = Je(Boolean, n.type);
            if (u > -1)
              if (r && !w(n, "default")) i = !1;
              else if ("" === i || i === O(e)) {
              var o = Je(String, n.type);
              (o < 0 || u < o) && (i = !0)
            }
            if (void 0 === i) {
              i = qe(t, n, e);
              var s = xe;
              Te(!0), Ce(i), Te(s)
            }
            return i
          }

          function qe(e, l, a) {
            if (w(l, "default")) {
              var t = l.default;
              return e && e.$options.propsData && void 0 === e.$options.propsData[a] && void 0 !== e._props[a] ? e._props[a] : "function" === typeof t && "Function" !== Ye(l.type) ? t.call(e) : t
            }
          }

          function Ye(e) {
            var l = e && e.toString().match(/^\s*function (\w+)/);
            return l ? l[1] : ""
          }

          function Xe(e, l) {
            return Ye(e) === Ye(l)
          }

          function Je(e, l) {
            if (!Array.isArray(l)) return Xe(l, e) ? 0 : -1;
            for (var a = 0, t = l.length; a < t; a++)
              if (Xe(l[a], e)) return a;
            return -1
          }

          function We(e, l, a) {
            be();
            try {
              if (l) {
                var t = l;
                while (t = t.$parent) {
                  var n = t.$options.errorCaptured;
                  if (n)
                    for (var r = 0; r < n.length; r++) try {
                      var i = !1 === n[r].call(t, e, l, a);
                      if (i) return
                    } catch (ln) {
                      Qe(ln, t, "errorCaptured hook")
                    }
                }
              }
              Qe(e, l, a)
            } finally {
              de()
            }
          }

          function Ke(e, l, a, t, n) {
            var r;
            try {
              r = a ? e.apply(l, a) : e.call(l), r && !r._isVue && d(r) && !r._handled && (r.catch((function (e) {
                return We(e, t, n + " (Promise/async)")
              })), r._handled = !0)
            } catch (ln) {
              We(ln, t, n)
            }
            return r
          }

          function Qe(e, l, a) {
            if (R.errorHandler) try {
              return R.errorHandler.call(null, e, l, a)
            } catch (ln) {
              ln !== e && Ze(ln, null, "config.errorHandler")
            }
            Ze(e, l, a)
          }

          function Ze(e, l, a) {
            if (!J && !W || "undefined" === typeof console) throw e;
            console.error(e)
          }
          var el, ll = [],
            al = !1;

          function tl() {
            al = !1;
            var e = ll.slice(0);
            ll.length = 0;
            for (var l = 0; l < e.length; l++) e[l]()
          }
          if ("undefined" !== typeof Promise && ie(Promise)) {
            var nl = Promise.resolve();
            el = function () {
              nl.then(tl), le && setTimeout(D)
            }
          } else if (Z || "undefined" === typeof MutationObserver || !ie(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) el = "undefined" !== typeof setImmediate && ie(setImmediate) ? function () {
            setImmediate(tl)
          } : function () {
            setTimeout(tl, 0)
          };
          else {
            var rl = 1,
              il = new MutationObserver(tl),
              ul = document.createTextNode(String(rl));
            il.observe(ul, {
              characterData: !0
            }), el = function () {
              rl = (rl + 1) % 2, ul.data = String(rl)
            }
          }

          function ol(e, l) {
            var a;
            if (ll.push((function () {
                if (e) try {
                  e.call(l)
                } catch (ln) {
                  We(ln, l, "nextTick")
                } else a && a(l)
              })), al || (al = !0, el()), !e && "undefined" !== typeof Promise) return new Promise((function (e) {
              a = e
            }))
          }
          var sl = new ue;

          function vl(e) {
            cl(e, sl), sl.clear()
          }

          function cl(e, l) {
            var a, t, n = Array.isArray(e);
            if (!(!n && !o(e) || Object.isFrozen(e) || e instanceof pe)) {
              if (e.__ob__) {
                var r = e.__ob__.dep.id;
                if (l.has(r)) return;
                l.add(r)
              }
              if (n) {
                a = e.length;
                while (a--) cl(e[a], l)
              } else {
                t = Object.keys(e), a = t.length;
                while (a--) cl(e[t[a]], l)
              }
            }
          }
          var bl = _((function (e) {
            var l = "&" === e.charAt(0);
            e = l ? e.slice(1) : e;
            var a = "~" === e.charAt(0);
            e = a ? e.slice(1) : e;
            var t = "!" === e.charAt(0);
            return e = t ? e.slice(1) : e, {
              name: e,
              once: a,
              capture: t,
              passive: l
            }
          }));

          function dl(e, l) {
            function a() {
              var e = arguments,
                t = a.fns;
              if (!Array.isArray(t)) return Ke(t, null, arguments, l, "v-on handler");
              for (var n = t.slice(), r = 0; r < n.length; r++) Ke(n[r], null, e, l, "v-on handler")
            }
            return a.fns = e, a
          }

          function pl(e, l, a, n, i, u) {
            var o, s, v, c;
            for (o in e) s = e[o], v = l[o], c = bl(o), t(s) || (t(v) ? (t(s.fns) && (s = e[o] = dl(s, u)), r(c.once) && (s = e[o] = i(c.name, s, c.capture)), a(c.name, s, c.capture, c.passive, c.params)) : s !== v && (v.fns = s, e[o] = v));
            for (o in l) t(e[o]) && (c = bl(o), n(c.name, l[o], c.capture))
          }

          function fl(e, l, a, r) {
            var i = l.options.mpOptions && l.options.mpOptions.properties;
            if (t(i)) return a;
            var u = l.options.mpOptions.externalClasses || [],
              o = e.attrs,
              s = e.props;
            if (n(o) || n(s))
              for (var v in i) {
                var c = O(v),
                  b = gl(a, s, v, c, !0) || gl(a, o, v, c, !1);
                b && a[v] && -1 !== u.indexOf(c) && r[x(a[v])] && (a[v] = r[x(a[v])])
              }
            return a
          }

          function hl(e, l, a, r) {
            var i = l.options.props;
            if (t(i)) return fl(e, l, {}, r);
            var u = {},
              o = e.attrs,
              s = e.props;
            if (n(o) || n(s))
              for (var v in i) {
                var c = O(v);
                gl(u, s, v, c, !0) || gl(u, o, v, c, !1)
              }
            return fl(e, l, u, r)
          }

          function gl(e, l, a, t, r) {
            if (n(l)) {
              if (w(l, a)) return e[a] = l[a], r || delete l[a], !0;
              if (w(l, t)) return e[a] = l[t], r || delete l[t], !0
            }
            return !1
          }

          function ml(e) {
            for (var l = 0; l < e.length; l++)
              if (Array.isArray(e[l])) return Array.prototype.concat.apply([], e);
            return e
          }

          function yl(e) {
            return u(e) ? [ge(e)] : Array.isArray(e) ? _l(e) : void 0
          }

          function wl(e) {
            return n(e) && n(e.text) && i(e.isComment)
          }

          function _l(e, l) {
            var a, i, o, s, v = [];
            for (a = 0; a < e.length; a++) i = e[a], t(i) || "boolean" === typeof i || (o = v.length - 1, s = v[o], Array.isArray(i) ? i.length > 0 && (i = _l(i, (l || "") + "_" + a), wl(i[0]) && wl(s) && (v[o] = ge(s.text + i[0].text), i.shift()), v.push.apply(v, i)) : u(i) ? wl(s) ? v[o] = ge(s.text + i) : "" !== i && v.push(ge(i)) : wl(i) && wl(s) ? v[o] = ge(s.text + i.text) : (r(e._isVList) && n(i.tag) && t(i.key) && n(l) && (i.key = "__vlist" + l + "_" + a + "__"), v.push(i)));
            return v
          }

          function Sl(e) {
            var l = e.$options.provide;
            l && (e._provided = "function" === typeof l ? l.call(e) : l)
          }

          function xl(e) {
            var l = Tl(e.$options.inject, e);
            l && (Te(!1), Object.keys(l).forEach((function (a) {
              ke(e, a, l[a])
            })), Te(!0))
          }

          function Tl(e, l) {
            if (e) {
              for (var a = Object.create(null), t = oe ? Reflect.ownKeys(e) : Object.keys(e), n = 0; n < t.length; n++) {
                var r = t[n];
                if ("__ob__" !== r) {
                  var i = e[r].from,
                    u = l;
                  while (u) {
                    if (u._provided && w(u._provided, i)) {
                      a[r] = u._provided[i];
                      break
                    }
                    u = u.$parent
                  }
                  if (!u)
                    if ("default" in e[r]) {
                      var o = e[r].default;
                      a[r] = "function" === typeof o ? o.call(l) : o
                    } else 0
                }
              }
              return a
            }
          }

          function El(e, l) {
            if (!e || !e.length) return {};
            for (var a = {}, t = 0, n = e.length; t < n; t++) {
              var r = e[t],
                i = r.data;
              if (i && i.attrs && i.attrs.slot && delete i.attrs.slot, r.context !== l && r.fnContext !== l || !i || null == i.slot) r.asyncMeta && r.asyncMeta.data && "page" === r.asyncMeta.data.slot ? (a["page"] || (a["page"] = [])).push(r) : (a.default || (a.default = [])).push(r);
              else {
                var u = i.slot,
                  o = a[u] || (a[u] = []);
                "template" === r.tag ? o.push.apply(o, r.children || []) : o.push(r)
              }
            }
            for (var s in a) a[s].every(Ol) && delete a[s];
            return a
          }

          function Ol(e) {
            return e.isComment && !e.asyncFactory || " " === e.text
          }

          function Pl(e, l, t) {
            var n, r = Object.keys(l).length > 0,
              i = e ? !!e.$stable : !r,
              u = e && e.$key;
            if (e) {
              if (e._normalized) return e._normalized;
              if (i && t && t !== a && u === t.$key && !r && !t.$hasNormal) return t;
              for (var o in n = {}, e) e[o] && "$" !== o[0] && (n[o] = Cl(l, o, e[o]))
            } else n = {};
            for (var s in l) s in n || (n[s] = kl(l, s));
            return e && Object.isExtensible(e) && (e._normalized = n), H(n, "$stable", i), H(n, "$key", u), H(n, "$hasNormal", r), n
          }

          function Cl(e, l, a) {
            var t = function () {
              var e = arguments.length ? a.apply(null, arguments) : a({});
              return e = e && "object" === typeof e && !Array.isArray(e) ? [e] : yl(e), e && (0 === e.length || 1 === e.length && e[0].isComment) ? void 0 : e
            };
            return a.proxy && Object.defineProperty(e, l, {
              get: t,
              enumerable: !0,
              configurable: !0
            }), t
          }

          function kl(e, l) {
            return function () {
              return e[l]
            }
          }

          function Ml(e, l) {
            var a, t, r, i, u;
            if (Array.isArray(e) || "string" === typeof e)
              for (a = new Array(e.length), t = 0, r = e.length; t < r; t++) a[t] = l(e[t], t, t, t);
            else if ("number" === typeof e)
              for (a = new Array(e), t = 0; t < e; t++) a[t] = l(t + 1, t, t, t);
            else if (o(e))
              if (oe && e[Symbol.iterator]) {
                a = [];
                var s = e[Symbol.iterator](),
                  v = s.next();
                while (!v.done) a.push(l(v.value, a.length, t++, t)), v = s.next()
              } else
                for (i = Object.keys(e), a = new Array(i.length), t = 0, r = i.length; t < r; t++) u = i[t], a[t] = l(e[u], u, t, t);
            return n(a) || (a = []), a._isVList = !0, a
          }

          function jl(e, l, a, t) {
            var n, r = this.$scopedSlots[e];
            r ? (a = a || {}, t && (a = j(j({}, t), a)), n = r(a, this, a._i) || l) : n = this.$slots[e] || l;
            var i = a && a.slot;
            return i ? this.$createElement("template", {
              slot: i
            }, n) : n
          }

          function $l(e) {
            return He(this.$options, "filters", e, !0) || I
          }

          function Dl(e, l) {
            return Array.isArray(e) ? -1 === e.indexOf(l) : e !== l
          }

          function Al(e, l, a, t, n) {
            var r = R.keyCodes[l] || a;
            return n && t && !R.keyCodes[l] ? Dl(n, t) : r ? Dl(r, e) : t ? O(t) !== l : void 0
          }

          function Il(e, l, a, t, n) {
            if (a)
              if (o(a)) {
                var r;
                Array.isArray(a) && (a = $(a));
                var i = function (i) {
                  if ("class" === i || "style" === i || g(i)) r = e;
                  else {
                    var u = e.attrs && e.attrs.type;
                    r = t || R.mustUseProp(l, u, i) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {})
                  }
                  var o = x(i),
                    s = O(i);
                  if (!(o in r) && !(s in r) && (r[i] = a[i], n)) {
                    var v = e.on || (e.on = {});
                    v["update:" + i] = function (e) {
                      a[i] = e
                    }
                  }
                };
                for (var u in a) i(u)
              } else;
            return e
          }

          function Bl(e, l) {
            var a = this._staticTrees || (this._staticTrees = []),
              t = a[e];
            return t && !l || (t = a[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), Ll(t, "__static__" + e, !1)), t
          }

          function Nl(e, l, a) {
            return Ll(e, "__once__" + l + (a ? "_" + a : ""), !0), e
          }

          function Ll(e, l, a) {
            if (Array.isArray(e))
              for (var t = 0; t < e.length; t++) e[t] && "string" !== typeof e[t] && zl(e[t], l + "_" + t, a);
            else zl(e, l, a)
          }

          function zl(e, l, a) {
            e.isStatic = !0, e.key = l, e.isOnce = a
          }

          function Fl(e, l) {
            if (l)
              if (v(l)) {
                var a = e.on = e.on ? j({}, e.on) : {};
                for (var t in l) {
                  var n = a[t],
                    r = l[t];
                  a[t] = n ? [].concat(n, r) : r
                }
              } else;
            return e
          }

          function Rl(e, l, a, t) {
            l = l || {
              $stable: !a
            };
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              Array.isArray(r) ? Rl(r, l, a) : r && (r.proxy && (r.fn.proxy = !0), l[r.key] = r.fn)
            }
            return t && (l.$key = t), l
          }

          function Ul(e, l) {
            for (var a = 0; a < l.length; a += 2) {
              var t = l[a];
              "string" === typeof t && t && (e[l[a]] = l[a + 1])
            }
            return e
          }

          function Gl(e, l) {
            return "string" === typeof e ? l + e : e
          }

          function Hl(e) {
            e._o = Nl, e._n = f, e._s = p, e._l = Ml, e._t = jl, e._q = B, e._i = N, e._m = Bl, e._f = $l, e._k = Al, e._b = Il, e._v = ge, e._e = he, e._u = Rl, e._g = Fl, e._d = Ul, e._p = Gl
          }

          function Vl(e, l, t, n, i) {
            var u, o = this,
              s = i.options;
            w(n, "_uid") ? (u = Object.create(n), u._original = n) : (u = n, n = n._original);
            var v = r(s._compiled),
              c = !v;
            this.data = e, this.props = l, this.children = t, this.parent = n, this.listeners = e.on || a, this.injections = Tl(s.inject, n), this.slots = function () {
              return o.$slots || Pl(e.scopedSlots, o.$slots = El(t, n)), o.$slots
            }, Object.defineProperty(this, "scopedSlots", {
              enumerable: !0,
              get: function () {
                return Pl(e.scopedSlots, this.slots())
              }
            }), v && (this.$options = s, this.$slots = this.slots(), this.$scopedSlots = Pl(e.scopedSlots, this.$slots)), s._scopeId ? this._c = function (e, l, a, t) {
              var r = na(u, e, l, a, t, c);
              return r && !Array.isArray(r) && (r.fnScopeId = s._scopeId, r.fnContext = n), r
            } : this._c = function (e, l, a, t) {
              return na(u, e, l, a, t, c)
            }
          }

          function ql(e, l, t, r, i) {
            var u = e.options,
              o = {},
              s = u.props;
            if (n(s))
              for (var v in s) o[v] = Ve(v, s, l || a);
            else n(t.attrs) && Xl(o, t.attrs), n(t.props) && Xl(o, t.props);
            var c = new Vl(t, o, i, r, e),
              b = u.render.call(null, c._c, c);
            if (b instanceof pe) return Yl(b, t, c.parent, u, c);
            if (Array.isArray(b)) {
              for (var d = yl(b) || [], p = new Array(d.length), f = 0; f < d.length; f++) p[f] = Yl(d[f], t, c.parent, u, c);
              return p
            }
          }

          function Yl(e, l, a, t, n) {
            var r = me(e);
            return r.fnContext = a, r.fnOptions = t, l.slot && ((r.data || (r.data = {})).slot = l.slot), r
          }

          function Xl(e, l) {
            for (var a in l) e[x(a)] = l[a]
          }
          Hl(Vl.prototype);
          var Jl = {
              init: function (e, l) {
                if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
                  var a = e;
                  Jl.prepatch(a, a)
                } else {
                  var t = e.componentInstance = Ql(e, xa);
                  t.$mount(l ? e.elm : void 0, l)
                }
              },
              prepatch: function (e, l) {
                var a = l.componentOptions,
                  t = l.componentInstance = e.componentInstance;
                Pa(t, a.propsData, a.listeners, l, a.children)
              },
              insert: function (e) {
                var l = e.context,
                  a = e.componentInstance;
                a._isMounted || (ja(a, "onServiceCreated"), ja(a, "onServiceAttached"), a._isMounted = !0, ja(a, "mounted")), e.data.keepAlive && (l._isMounted ? Ga(a) : ka(a, !0))
              },
              destroy: function (e) {
                var l = e.componentInstance;
                l._isDestroyed || (e.data.keepAlive ? Ma(l, !0) : l.$destroy())
              }
            },
            Wl = Object.keys(Jl);

          function Kl(e, l, a, i, u) {
            if (!t(e)) {
              var s = a.$options._base;
              if (o(e) && (e = s.extend(e)), "function" === typeof e) {
                var v;
                if (t(e.cid) && (v = e, e = pa(v, s), void 0 === e)) return da(v, l, a, i, u);
                l = l || {}, bt(e), n(l.model) && la(e.options, l);
                var c = hl(l, e, u, a);
                if (r(e.options.functional)) return ql(e, c, l, a, i);
                var b = l.on;
                if (l.on = l.nativeOn, r(e.options.abstract)) {
                  var d = l.slot;
                  l = {}, d && (l.slot = d)
                }
                Zl(l);
                var p = e.options.name || u,
                  f = new pe("vue-component-" + e.cid + (p ? "-" + p : ""), l, void 0, void 0, void 0, a, {
                    Ctor: e,
                    propsData: c,
                    listeners: b,
                    tag: u,
                    children: i
                  }, v);
                return f
              }
            }
          }

          function Ql(e, l) {
            var a = {
                _isComponent: !0,
                _parentVnode: e,
                parent: l
              },
              t = e.data.inlineTemplate;
            return n(t) && (a.render = t.render, a.staticRenderFns = t.staticRenderFns), new e.componentOptions.Ctor(a)
          }

          function Zl(e) {
            for (var l = e.hook || (e.hook = {}), a = 0; a < Wl.length; a++) {
              var t = Wl[a],
                n = l[t],
                r = Jl[t];
              n === r || n && n._merged || (l[t] = n ? ea(r, n) : r)
            }
          }

          function ea(e, l) {
            var a = function (a, t) {
              e(a, t), l(a, t)
            };
            return a._merged = !0, a
          }

          function la(e, l) {
            var a = e.model && e.model.prop || "value",
              t = e.model && e.model.event || "input";
            (l.attrs || (l.attrs = {}))[a] = l.model.value;
            var r = l.on || (l.on = {}),
              i = r[t],
              u = l.model.callback;
            n(i) ? (Array.isArray(i) ? -1 === i.indexOf(u) : i !== u) && (r[t] = [u].concat(i)) : r[t] = u
          }
          var aa = 1,
            ta = 2;

          function na(e, l, a, t, n, i) {
            return (Array.isArray(a) || u(a)) && (n = t, t = a, a = void 0), r(i) && (n = ta), ra(e, l, a, t, n)
          }

          function ra(e, l, a, t, r) {
            if (n(a) && n(a.__ob__)) return he();
            if (n(a) && n(a.is) && (l = a.is), !l) return he();
            var i, u, o;
            (Array.isArray(t) && "function" === typeof t[0] && (a = a || {}, a.scopedSlots = {
              default: t[0]
            }, t.length = 0), r === ta ? t = yl(t) : r === aa && (t = ml(t)), "string" === typeof l) ? (u = e.$vnode && e.$vnode.ns || R.getTagNamespace(l), i = R.isReservedTag(l) ? new pe(R.parsePlatformTagName(l), a, t, void 0, void 0, e) : a && a.pre || !n(o = He(e.$options, "components", l)) ? new pe(l, a, t, void 0, void 0, e) : Kl(o, a, e, t, l)) : i = Kl(l, a, e, t);
            return Array.isArray(i) ? i : n(i) ? (n(u) && ia(i, u), n(a) && ua(a), i) : he()
          }

          function ia(e, l, a) {
            if (e.ns = l, "foreignObject" === e.tag && (l = void 0, a = !0), n(e.children))
              for (var i = 0, u = e.children.length; i < u; i++) {
                var o = e.children[i];
                n(o.tag) && (t(o.ns) || r(a) && "svg" !== o.tag) && ia(o, l, a)
              }
          }

          function ua(e) {
            o(e.style) && vl(e.style), o(e.class) && vl(e.class)
          }

          function oa(e) {
            e._vnode = null, e._staticTrees = null;
            var l = e.$options,
              t = e.$vnode = l._parentVnode,
              n = t && t.context;
            e.$slots = El(l._renderChildren, n), e.$scopedSlots = a, e._c = function (l, a, t, n) {
              return na(e, l, a, t, n, !1)
            }, e.$createElement = function (l, a, t, n) {
              return na(e, l, a, t, n, !0)
            };
            var r = t && t.data;
            ke(e, "$attrs", r && r.attrs || a, null, !0), ke(e, "$listeners", l._parentListeners || a, null, !0)
          }
          var sa, va = null;

          function ca(e) {
            Hl(e.prototype), e.prototype.$nextTick = function (e) {
              return ol(e, this)
            }, e.prototype._render = function () {
              var e, l = this,
                a = l.$options,
                t = a.render,
                n = a._parentVnode;
              n && (l.$scopedSlots = Pl(n.data.scopedSlots, l.$slots, l.$scopedSlots)), l.$vnode = n;
              try {
                va = l, e = t.call(l._renderProxy, l.$createElement)
              } catch (ln) {
                We(ln, l, "render"), e = l._vnode
              } finally {
                va = null
              }
              return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof pe || (e = he()), e.parent = n, e
            }
          }

          function ba(e, l) {
            return (e.__esModule || oe && "Module" === e[Symbol.toStringTag]) && (e = e.default), o(e) ? l.extend(e) : e
          }

          function da(e, l, a, t, n) {
            var r = he();
            return r.asyncFactory = e, r.asyncMeta = {
              data: l,
              context: a,
              children: t,
              tag: n
            }, r
          }

          function pa(e, l) {
            if (r(e.error) && n(e.errorComp)) return e.errorComp;
            if (n(e.resolved)) return e.resolved;
            var a = va;
            if (a && n(e.owners) && -1 === e.owners.indexOf(a) && e.owners.push(a), r(e.loading) && n(e.loadingComp)) return e.loadingComp;
            if (a && !n(e.owners)) {
              var i = e.owners = [a],
                u = !0,
                s = null,
                v = null;
              a.$on("hook:destroyed", (function () {
                return m(i, a)
              }));
              var c = function (e) {
                  for (var l = 0, a = i.length; l < a; l++) i[l].$forceUpdate();
                  e && (i.length = 0, null !== s && (clearTimeout(s), s = null), null !== v && (clearTimeout(v), v = null))
                },
                b = L((function (a) {
                  e.resolved = ba(a, l), u ? i.length = 0 : c(!0)
                })),
                p = L((function (l) {
                  n(e.errorComp) && (e.error = !0, c(!0))
                })),
                f = e(b, p);
              return o(f) && (d(f) ? t(e.resolved) && f.then(b, p) : d(f.component) && (f.component.then(b, p), n(f.error) && (e.errorComp = ba(f.error, l)), n(f.loading) && (e.loadingComp = ba(f.loading, l), 0 === f.delay ? e.loading = !0 : s = setTimeout((function () {
                s = null, t(e.resolved) && t(e.error) && (e.loading = !0, c(!1))
              }), f.delay || 200)), n(f.timeout) && (v = setTimeout((function () {
                v = null, t(e.resolved) && p(null)
              }), f.timeout)))), u = !1, e.loading ? e.loadingComp : e.resolved
            }
          }

          function fa(e) {
            return e.isComment && e.asyncFactory
          }

          function ha(e) {
            if (Array.isArray(e))
              for (var l = 0; l < e.length; l++) {
                var a = e[l];
                if (n(a) && (n(a.componentOptions) || fa(a))) return a
              }
          }

          function ga(e) {
            e._events = Object.create(null), e._hasHookEvent = !1;
            var l = e.$options._parentListeners;
            l && _a(e, l)
          }

          function ma(e, l) {
            sa.$on(e, l)
          }

          function ya(e, l) {
            sa.$off(e, l)
          }

          function wa(e, l) {
            var a = sa;
            return function t() {
              var n = l.apply(null, arguments);
              null !== n && a.$off(e, t)
            }
          }

          function _a(e, l, a) {
            sa = e, pl(l, a || {}, ma, ya, wa, e), sa = void 0
          }

          function Sa(e) {
            var l = /^hook:/;
            e.prototype.$on = function (e, a) {
              var t = this;
              if (Array.isArray(e))
                for (var n = 0, r = e.length; n < r; n++) t.$on(e[n], a);
              else(t._events[e] || (t._events[e] = [])).push(a), l.test(e) && (t._hasHookEvent = !0);
              return t
            }, e.prototype.$once = function (e, l) {
              var a = this;

              function t() {
                a.$off(e, t), l.apply(a, arguments)
              }
              return t.fn = l, a.$on(e, t), a
            }, e.prototype.$off = function (e, l) {
              var a = this;
              if (!arguments.length) return a._events = Object.create(null), a;
              if (Array.isArray(e)) {
                for (var t = 0, n = e.length; t < n; t++) a.$off(e[t], l);
                return a
              }
              var r, i = a._events[e];
              if (!i) return a;
              if (!l) return a._events[e] = null, a;
              var u = i.length;
              while (u--)
                if (r = i[u], r === l || r.fn === l) {
                  i.splice(u, 1);
                  break
                } return a
            }, e.prototype.$emit = function (e) {
              var l = this,
                a = l._events[e];
              if (a) {
                a = a.length > 1 ? M(a) : a;
                for (var t = M(arguments, 1), n = 'event handler for "' + e + '"', r = 0, i = a.length; r < i; r++) Ke(a[r], l, t, l, n)
              }
              return l
            }
          }
          var xa = null;

          function Ta(e) {
            var l = xa;
            return xa = e,
              function () {
                xa = l
              }
          }

          function Ea(e) {
            var l = e.$options,
              a = l.parent;
            if (a && !l.abstract) {
              while (a.$options.abstract && a.$parent) a = a.$parent;
              a.$children.push(e)
            }
            e.$parent = a, e.$root = a ? a.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1
          }

          function Oa(e) {
            e.prototype._update = function (e, l) {
              var a = this,
                t = a.$el,
                n = a._vnode,
                r = Ta(a);
              a._vnode = e, a.$el = n ? a.__patch__(n, e) : a.__patch__(a.$el, e, l, !1), r(), t && (t.__vue__ = null), a.$el && (a.$el.__vue__ = a), a.$vnode && a.$parent && a.$vnode === a.$parent._vnode && (a.$parent.$el = a.$el)
            }, e.prototype.$forceUpdate = function () {
              var e = this;
              e._watcher && e._watcher.update()
            }, e.prototype.$destroy = function () {
              var e = this;
              if (!e._isBeingDestroyed) {
                ja(e, "beforeDestroy"), e._isBeingDestroyed = !0;
                var l = e.$parent;
                !l || l._isBeingDestroyed || e.$options.abstract || m(l.$children, e), e._watcher && e._watcher.teardown();
                var a = e._watchers.length;
                while (a--) e._watchers[a].teardown();
                e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), ja(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null)
              }
            }
          }

          function Pa(e, l, t, n, r) {
            var i = n.data.scopedSlots,
              u = e.$scopedSlots,
              o = !!(i && !i.$stable || u !== a && !u.$stable || i && e.$scopedSlots.$key !== i.$key),
              s = !!(r || e.$options._renderChildren || o);
            if (e.$options._parentVnode = n, e.$vnode = n, e._vnode && (e._vnode.parent = n), e.$options._renderChildren = r, e.$attrs = n.data.attrs || a, e.$listeners = t || a, l && e.$options.props) {
              Te(!1);
              for (var v = e._props, c = e.$options._propKeys || [], b = 0; b < c.length; b++) {
                var d = c[b],
                  p = e.$options.props;
                v[d] = Ve(d, p, l, e)
              }
              Te(!0), e.$options.propsData = l
            }
            e._$updateProperties && e._$updateProperties(e), t = t || a;
            var f = e.$options._parentListeners;
            e.$options._parentListeners = t, _a(e, t, f), s && (e.$slots = El(r, n.context), e.$forceUpdate())
          }

          function Ca(e) {
            while (e && (e = e.$parent))
              if (e._inactive) return !0;
            return !1
          }

          function ka(e, l) {
            if (l) {
              if (e._directInactive = !1, Ca(e)) return
            } else if (e._directInactive) return;
            if (e._inactive || null === e._inactive) {
              e._inactive = !1;
              for (var a = 0; a < e.$children.length; a++) ka(e.$children[a]);
              ja(e, "activated")
            }
          }

          function Ma(e, l) {
            if ((!l || (e._directInactive = !0, !Ca(e))) && !e._inactive) {
              e._inactive = !0;
              for (var a = 0; a < e.$children.length; a++) Ma(e.$children[a]);
              ja(e, "deactivated")
            }
          }

          function ja(e, l) {
            be();
            var a = e.$options[l],
              t = l + " hook";
            if (a)
              for (var n = 0, r = a.length; n < r; n++) Ke(a[n], e, null, e, t);
            e._hasHookEvent && e.$emit("hook:" + l), de()
          }
          var $a = [],
            Da = [],
            Aa = {},
            Ia = !1,
            Ba = !1,
            Na = 0;

          function La() {
            Na = $a.length = Da.length = 0, Aa = {}, Ia = Ba = !1
          }
          var za = Date.now;
          if (J && !Z) {
            var Fa = window.performance;
            Fa && "function" === typeof Fa.now && za() > document.createEvent("Event").timeStamp && (za = function () {
              return Fa.now()
            })
          }

          function Ra() {
            var e, l;
            for (za(), Ba = !0, $a.sort((function (e, l) {
                return e.id - l.id
              })), Na = 0; Na < $a.length; Na++) e = $a[Na], e.before && e.before(), l = e.id, Aa[l] = null, e.run();
            var a = Da.slice(),
              t = $a.slice();
            La(), Ha(a), Ua(t), re && R.devtools && re.emit("flush")
          }

          function Ua(e) {
            var l = e.length;
            while (l--) {
              var a = e[l],
                t = a.vm;
              t._watcher === a && t._isMounted && !t._isDestroyed && ja(t, "updated")
            }
          }

          function Ga(e) {
            e._inactive = !1, Da.push(e)
          }

          function Ha(e) {
            for (var l = 0; l < e.length; l++) e[l]._inactive = !0, ka(e[l], !0)
          }

          function Va(e) {
            var l = e.id;
            if (null == Aa[l]) {
              if (Aa[l] = !0, Ba) {
                var a = $a.length - 1;
                while (a > Na && $a[a].id > e.id) a--;
                $a.splice(a + 1, 0, e)
              } else $a.push(e);
              Ia || (Ia = !0, ol(Ra))
            }
          }
          var qa = 0,
            Ya = function (e, l, a, t, n) {
              this.vm = e, n && (e._watcher = this), e._watchers.push(this), t ? (this.deep = !!t.deep, this.user = !!t.user, this.lazy = !!t.lazy, this.sync = !!t.sync, this.before = t.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = a, this.id = ++qa, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new ue, this.newDepIds = new ue, this.expression = "", "function" === typeof l ? this.getter = l : (this.getter = q(l), this.getter || (this.getter = D)), this.value = this.lazy ? void 0 : this.get()
            };
          Ya.prototype.get = function () {
            var e;
            be(this);
            var l = this.vm;
            try {
              e = this.getter.call(l, l)
            } catch (ln) {
              if (!this.user) throw ln;
              We(ln, l, 'getter for watcher "' + this.expression + '"')
            } finally {
              this.deep && vl(e), de(), this.cleanupDeps()
            }
            return e
          }, Ya.prototype.addDep = function (e) {
            var l = e.id;
            this.newDepIds.has(l) || (this.newDepIds.add(l), this.newDeps.push(e), this.depIds.has(l) || e.addSub(this))
          }, Ya.prototype.cleanupDeps = function () {
            var e = this.deps.length;
            while (e--) {
              var l = this.deps[e];
              this.newDepIds.has(l.id) || l.removeSub(this)
            }
            var a = this.depIds;
            this.depIds = this.newDepIds, this.newDepIds = a, this.newDepIds.clear(), a = this.deps, this.deps = this.newDeps, this.newDeps = a, this.newDeps.length = 0
          }, Ya.prototype.update = function () {
            this.lazy ? this.dirty = !0 : this.sync ? this.run() : Va(this)
          }, Ya.prototype.run = function () {
            if (this.active) {
              var e = this.get();
              if (e !== this.value || o(e) || this.deep) {
                var l = this.value;
                if (this.value = e, this.user) try {
                  this.cb.call(this.vm, e, l)
                } catch (ln) {
                  We(ln, this.vm, 'callback for watcher "' + this.expression + '"')
                } else this.cb.call(this.vm, e, l)
              }
            }
          }, Ya.prototype.evaluate = function () {
            this.value = this.get(), this.dirty = !1
          }, Ya.prototype.depend = function () {
            var e = this.deps.length;
            while (e--) this.deps[e].depend()
          }, Ya.prototype.teardown = function () {
            if (this.active) {
              this.vm._isBeingDestroyed || m(this.vm._watchers, this);
              var e = this.deps.length;
              while (e--) this.deps[e].removeSub(this);
              this.active = !1
            }
          };
          var Xa = {
            enumerable: !0,
            configurable: !0,
            get: D,
            set: D
          };

          function Ja(e, l, a) {
            Xa.get = function () {
              return this[l][a]
            }, Xa.set = function (e) {
              this[l][a] = e
            }, Object.defineProperty(e, a, Xa)
          }

          function Wa(e) {
            e._watchers = [];
            var l = e.$options;
            l.props && Ka(e, l.props), l.methods && rt(e, l.methods), l.data ? Qa(e) : Ce(e._data = {}, !0), l.computed && lt(e, l.computed), l.watch && l.watch !== ae && it(e, l.watch)
          }

          function Ka(e, l) {
            var a = e.$options.propsData || {},
              t = e._props = {},
              n = e.$options._propKeys = [],
              r = !e.$parent;
            r || Te(!1);
            var i = function (r) {
              n.push(r);
              var i = Ve(r, l, a, e);
              ke(t, r, i), r in e || Ja(e, "_props", r)
            };
            for (var u in l) i(u);
            Te(!0)
          }

          function Qa(e) {
            var l = e.$options.data;
            l = e._data = "function" === typeof l ? Za(l, e) : l || {}, v(l) || (l = {});
            var a = Object.keys(l),
              t = e.$options.props,
              n = (e.$options.methods, a.length);
            while (n--) {
              var r = a[n];
              0, t && w(t, r) || G(r) || Ja(e, "_data", r)
            }
            Ce(l, !0)
          }

          function Za(e, l) {
            be();
            try {
              return e.call(l, l)
            } catch (ln) {
              return We(ln, l, "data()"), {}
            } finally {
              de()
            }
          }
          var et = {
            lazy: !0
          };

          function lt(e, l) {
            var a = e._computedWatchers = Object.create(null),
              t = ne();
            for (var n in l) {
              var r = l[n],
                i = "function" === typeof r ? r : r.get;
              0, t || (a[n] = new Ya(e, i || D, D, et)), n in e || at(e, n, r)
            }
          }

          function at(e, l, a) {
            var t = !ne();
            "function" === typeof a ? (Xa.get = t ? tt(l) : nt(a), Xa.set = D) : (Xa.get = a.get ? t && !1 !== a.cache ? tt(l) : nt(a.get) : D, Xa.set = a.set || D), Object.defineProperty(e, l, Xa)
          }

          function tt(e) {
            return function () {
              var l = this._computedWatchers && this._computedWatchers[e];
              if (l) return l.dirty && l.evaluate(), ce.SharedObject.target && l.depend(), l.value
            }
          }

          function nt(e) {
            return function () {
              return e.call(this, this)
            }
          }

          function rt(e, l) {
            e.$options.props;
            for (var a in l) e[a] = "function" !== typeof l[a] ? D : k(l[a], e)
          }

          function it(e, l) {
            for (var a in l) {
              var t = l[a];
              if (Array.isArray(t))
                for (var n = 0; n < t.length; n++) ut(e, a, t[n]);
              else ut(e, a, t)
            }
          }

          function ut(e, l, a, t) {
            return v(a) && (t = a, a = a.handler), "string" === typeof a && (a = e[a]), e.$watch(l, a, t)
          }

          function ot(e) {
            var l = {
                get: function () {
                  return this._data
                }
              },
              a = {
                get: function () {
                  return this._props
                }
              };
            Object.defineProperty(e.prototype, "$data", l), Object.defineProperty(e.prototype, "$props", a), e.prototype.$set = Me, e.prototype.$delete = je, e.prototype.$watch = function (e, l, a) {
              var t = this;
              if (v(l)) return ut(t, e, l, a);
              a = a || {}, a.user = !0;
              var n = new Ya(t, e, l, a);
              if (a.immediate) try {
                l.call(t, n.value)
              } catch (r) {
                We(r, t, 'callback for immediate watcher "' + n.expression + '"')
              }
              return function () {
                n.teardown()
              }
            }
          }
          var st = 0;

          function vt(e) {
            e.prototype._init = function (e) {
              var l = this;
              l._uid = st++, l._isVue = !0, e && e._isComponent ? ct(l, e) : l.$options = Ge(bt(l.constructor), e || {}, l), l._renderProxy = l, l._self = l, Ea(l), ga(l), oa(l), ja(l, "beforeCreate"), "mp-toutiao" !== l.mpHost && xl(l), Wa(l), "mp-toutiao" !== l.mpHost && Sl(l), "mp-toutiao" !== l.mpHost && ja(l, "created"), l.$options.el && l.$mount(l.$options.el)
            }
          }

          function ct(e, l) {
            var a = e.$options = Object.create(e.constructor.options),
              t = l._parentVnode;
            a.parent = l.parent, a._parentVnode = t;
            var n = t.componentOptions;
            a.propsData = n.propsData, a._parentListeners = n.listeners, a._renderChildren = n.children, a._componentTag = n.tag, l.render && (a.render = l.render, a.staticRenderFns = l.staticRenderFns)
          }

          function bt(e) {
            var l = e.options;
            if (e.super) {
              var a = bt(e.super),
                t = e.superOptions;
              if (a !== t) {
                e.superOptions = a;
                var n = dt(e);
                n && j(e.extendOptions, n), l = e.options = Ge(a, e.extendOptions), l.name && (l.components[l.name] = e)
              }
            }
            return l
          }

          function dt(e) {
            var l, a = e.options,
              t = e.sealedOptions;
            for (var n in a) a[n] !== t[n] && (l || (l = {}), l[n] = a[n]);
            return l
          }

          function pt(e) {
            this._init(e)
          }

          function ft(e) {
            e.use = function (e) {
              var l = this._installedPlugins || (this._installedPlugins = []);
              if (l.indexOf(e) > -1) return this;
              var a = M(arguments, 1);
              return a.unshift(this), "function" === typeof e.install ? e.install.apply(e, a) : "function" === typeof e && e.apply(null, a), l.push(e), this
            }
          }

          function ht(e) {
            e.mixin = function (e) {
              return this.options = Ge(this.options, e), this
            }
          }

          function gt(e) {
            e.cid = 0;
            var l = 1;
            e.extend = function (e) {
              e = e || {};
              var a = this,
                t = a.cid,
                n = e._Ctor || (e._Ctor = {});
              if (n[t]) return n[t];
              var r = e.name || a.options.name;
              var i = function (e) {
                this._init(e)
              };
              return i.prototype = Object.create(a.prototype), i.prototype.constructor = i, i.cid = l++, i.options = Ge(a.options, e), i["super"] = a, i.options.props && mt(i), i.options.computed && yt(i), i.extend = a.extend, i.mixin = a.mixin, i.use = a.use, z.forEach((function (e) {
                i[e] = a[e]
              })), r && (i.options.components[r] = i), i.superOptions = a.options, i.extendOptions = e, i.sealedOptions = j({}, i.options), n[t] = i, i
            }
          }

          function mt(e) {
            var l = e.options.props;
            for (var a in l) Ja(e.prototype, "_props", a)
          }

          function yt(e) {
            var l = e.options.computed;
            for (var a in l) at(e.prototype, a, l[a])
          }

          function wt(e) {
            z.forEach((function (l) {
              e[l] = function (e, a) {
                return a ? ("component" === l && v(a) && (a.name = a.name || e, a = this.options._base.extend(a)), "directive" === l && "function" === typeof a && (a = {
                  bind: a,
                  update: a
                }), this.options[l + "s"][e] = a, a) : this.options[l + "s"][e]
              }
            }))
          }

          function _t(e) {
            return e && (e.Ctor.options.name || e.tag)
          }

          function St(e, l) {
            return Array.isArray(e) ? e.indexOf(l) > -1 : "string" === typeof e ? e.split(",").indexOf(l) > -1 : !!c(e) && e.test(l)
          }

          function xt(e, l) {
            var a = e.cache,
              t = e.keys,
              n = e._vnode;
            for (var r in a) {
              var i = a[r];
              if (i) {
                var u = _t(i.componentOptions);
                u && !l(u) && Tt(a, r, t, n)
              }
            }
          }

          function Tt(e, l, a, t) {
            var n = e[l];
            !n || t && n.tag === t.tag || n.componentInstance.$destroy(), e[l] = null, m(a, l)
          }
          vt(pt), ot(pt), Sa(pt), Oa(pt), ca(pt);
          var Et = [String, RegExp, Array],
            Ot = {
              name: "keep-alive",
              abstract: !0,
              props: {
                include: Et,
                exclude: Et,
                max: [String, Number]
              },
              created: function () {
                this.cache = Object.create(null), this.keys = []
              },
              destroyed: function () {
                for (var e in this.cache) Tt(this.cache, e, this.keys)
              },
              mounted: function () {
                var e = this;
                this.$watch("include", (function (l) {
                  xt(e, (function (e) {
                    return St(l, e)
                  }))
                })), this.$watch("exclude", (function (l) {
                  xt(e, (function (e) {
                    return !St(l, e)
                  }))
                }))
              },
              render: function () {
                var e = this.$slots.default,
                  l = ha(e),
                  a = l && l.componentOptions;
                if (a) {
                  var t = _t(a),
                    n = this,
                    r = n.include,
                    i = n.exclude;
                  if (r && (!t || !St(r, t)) || i && t && St(i, t)) return l;
                  var u = this,
                    o = u.cache,
                    s = u.keys,
                    v = null == l.key ? a.Ctor.cid + (a.tag ? "::" + a.tag : "") : l.key;
                  o[v] ? (l.componentInstance = o[v].componentInstance, m(s, v), s.push(v)) : (o[v] = l, s.push(v), this.max && s.length > parseInt(this.max) && Tt(o, s[0], s, this._vnode)), l.data.keepAlive = !0
                }
                return l || e && e[0]
              }
            },
            Pt = {
              KeepAlive: Ot
            };

          function Ct(e) {
            var l = {
              get: function () {
                return R
              }
            };
            Object.defineProperty(e, "config", l), e.util = {
              warn: se,
              extend: j,
              mergeOptions: Ge,
              defineReactive: ke
            }, e.set = Me, e.delete = je, e.nextTick = ol, e.observable = function (e) {
              return Ce(e), e
            }, e.options = Object.create(null), z.forEach((function (l) {
              e.options[l + "s"] = Object.create(null)
            })), e.options._base = e, j(e.options.components, Pt), ft(e), ht(e), gt(e), wt(e)
          }
          Ct(pt), Object.defineProperty(pt.prototype, "$isServer", {
            get: ne
          }), Object.defineProperty(pt.prototype, "$ssrContext", {
            get: function () {
              return this.$vnode && this.$vnode.ssrContext
            }
          }), Object.defineProperty(pt, "FunctionalRenderContext", {
            value: Vl
          }), pt.version = "2.6.11";
          var kt = "[object Array]",
            Mt = "[object Object]";

          function jt(e, l) {
            var a = {};
            return $t(e, l), Dt(e, l, "", a), a
          }

          function $t(e, l) {
            if (e !== l) {
              var a = It(e),
                t = It(l);
              if (a == Mt && t == Mt) {
                if (Object.keys(e).length >= Object.keys(l).length)
                  for (var n in l) {
                    var r = e[n];
                    void 0 === r ? e[n] = null : $t(r, l[n])
                  }
              } else a == kt && t == kt && e.length >= l.length && l.forEach((function (l, a) {
                $t(e[a], l)
              }))
            }
          }

          function Dt(e, l, a, t) {
            if (e !== l) {
              var n = It(e),
                r = It(l);
              if (n == Mt)
                if (r != Mt || Object.keys(e).length < Object.keys(l).length) At(t, a, e);
                else {
                  var i = function (n) {
                    var r = e[n],
                      i = l[n],
                      u = It(r),
                      o = It(i);
                    if (u != kt && u != Mt) r != l[n] && At(t, ("" == a ? "" : a + ".") + n, r);
                    else if (u == kt) o != kt || r.length < i.length ? At(t, ("" == a ? "" : a + ".") + n, r) : r.forEach((function (e, l) {
                      Dt(e, i[l], ("" == a ? "" : a + ".") + n + "[" + l + "]", t)
                    }));
                    else if (u == Mt)
                      if (o != Mt || Object.keys(r).length < Object.keys(i).length) At(t, ("" == a ? "" : a + ".") + n, r);
                      else
                        for (var s in r) Dt(r[s], i[s], ("" == a ? "" : a + ".") + n + "." + s, t)
                  };
                  for (var u in e) i(u)
                }
              else n == kt ? r != kt || e.length < l.length ? At(t, a, e) : e.forEach((function (e, n) {
                Dt(e, l[n], a + "[" + n + "]", t)
              })) : At(t, a, e)
            }
          }

          function At(e, l, a) {
            e[l] = a
          }

          function It(e) {
            return Object.prototype.toString.call(e)
          }

          function Bt(e) {
            if (e.__next_tick_callbacks && e.__next_tick_callbacks.length) {
              if (Object({
                  NODE_ENV: "production",
                  VUE_APP_PLATFORM: "mp-weixin",
                  BASE_URL: "/"
                }).VUE_APP_DEBUG) {
                var l = e.$scope;
                console.log("[" + +new Date + "][" + (l.is || l.route) + "][" + e._uid + "]:flushCallbacks[" + e.__next_tick_callbacks.length + "]")
              }
              var a = e.__next_tick_callbacks.slice(0);
              e.__next_tick_callbacks.length = 0;
              for (var t = 0; t < a.length; t++) a[t]()
            }
          }

          function Nt(e) {
            return $a.find((function (l) {
              return e._watcher === l
            }))
          }

          function Lt(e, l) {
            if (!e.__next_tick_pending && !Nt(e)) {
              if (Object({
                  NODE_ENV: "production",
                  VUE_APP_PLATFORM: "mp-weixin",
                  BASE_URL: "/"
                }).VUE_APP_DEBUG) {
                var a = e.$scope;
                console.log("[" + +new Date + "][" + (a.is || a.route) + "][" + e._uid + "]:nextVueTick")
              }
              return ol(l, e)
            }
            if (Object({
                NODE_ENV: "production",
                VUE_APP_PLATFORM: "mp-weixin",
                BASE_URL: "/"
              }).VUE_APP_DEBUG) {
              var t = e.$scope;
              console.log("[" + +new Date + "][" + (t.is || t.route) + "][" + e._uid + "]:nextMPTick")
            }
            var n;
            if (e.__next_tick_callbacks || (e.__next_tick_callbacks = []), e.__next_tick_callbacks.push((function () {
                if (l) try {
                  l.call(e)
                } catch (ln) {
                  We(ln, e, "nextTick")
                } else n && n(e)
              })), !l && "undefined" !== typeof Promise) return new Promise((function (e) {
              n = e
            }))
          }

          function zt(e) {
            var l = Object.create(null),
              a = [].concat(Object.keys(e._data || {}), Object.keys(e._computedWatchers || {}));
            return a.reduce((function (l, a) {
              return l[a] = e[a], l
            }), l), Object.assign(l, e.$mp.data || {}), Array.isArray(e.$options.behaviors) && -1 !== e.$options.behaviors.indexOf("uni://form-field") && (l["name"] = e.name, l["value"] = e.value), JSON.parse(JSON.stringify(l))
          }
          var Ft = function (e, l) {
            var a = this;
            if (null !== l && ("page" === this.mpType || "component" === this.mpType)) {
              var t = this.$scope,
                n = Object.create(null);
              try {
                n = zt(this)
              } catch (u) {
                console.error(u)
              }
              n.__webviewId__ = t.data.__webviewId__;
              var r = Object.create(null);
              Object.keys(n).forEach((function (e) {
                r[e] = t.data[e]
              }));
              var i = !1 === this.$shouldDiffData ? n : jt(n, r);
              Object.keys(i).length ? (Object({
                NODE_ENV: "production",
                VUE_APP_PLATFORM: "mp-weixin",
                BASE_URL: "/"
              }).VUE_APP_DEBUG && console.log("[" + +new Date + "][" + (t.is || t.route) + "][" + this._uid + "]差量更新", JSON.stringify(i)), this.__next_tick_pending = !0, t.setData(i, (function () {
                a.__next_tick_pending = !1, Bt(a)
              }))) : Bt(this)
            }
          };

          function Rt() {}

          function Ut(e, l, a) {
            if (!e.mpType) return e;
            "app" === e.mpType && (e.$options.render = Rt), e.$options.render || (e.$options.render = Rt), "mp-toutiao" !== e.mpHost && ja(e, "beforeMount");
            var t = function () {
              e._update(e._render(), a)
            };
            return new Ya(e, t, D, {
              before: function () {
                e._isMounted && !e._isDestroyed && ja(e, "beforeUpdate")
              }
            }, !0), a = !1, e
          }

          function Gt(e, l) {
            return n(e) || n(l) ? Ht(e, Vt(l)) : ""
          }

          function Ht(e, l) {
            return e ? l ? e + " " + l : e : l || ""
          }

          function Vt(e) {
            return Array.isArray(e) ? qt(e) : o(e) ? Yt(e) : "string" === typeof e ? e : ""
          }

          function qt(e) {
            for (var l, a = "", t = 0, r = e.length; t < r; t++) n(l = Vt(e[t])) && "" !== l && (a && (a += " "), a += l);
            return a
          }

          function Yt(e) {
            var l = "";
            for (var a in e) e[a] && (l && (l += " "), l += a);
            return l
          }
          var Xt = _((function (e) {
            var l = {},
              a = /;(?![^(]*\))/g,
              t = /:(.+)/;
            return e.split(a).forEach((function (e) {
              if (e) {
                var a = e.split(t);
                a.length > 1 && (l[a[0].trim()] = a[1].trim())
              }
            })), l
          }));

          function Jt(e) {
            return Array.isArray(e) ? $(e) : "string" === typeof e ? Xt(e) : e
          }
          var Wt = ["createSelectorQuery", "createIntersectionObserver", "selectAllComponents", "selectComponent"];

          function Kt(e, l) {
            var a = l.split("."),
              t = a[0];
            return 0 === t.indexOf("__$n") && (t = parseInt(t.replace("__$n", ""))), 1 === a.length ? e[t] : Kt(e[t], a.slice(1).join("."))
          }

          function Qt(e) {
            e.config.errorHandler = function (e) {
              console.error(e);
              var l = getApp();
              l && l.onError && l.onError(e)
            };
            var l = e.prototype.$emit;
            e.prototype.$emit = function (e) {
              return this.$scope && e && this.$scope["triggerEvent"](e, {
                __args__: M(arguments, 1)
              }), l.apply(this, arguments)
            }, e.prototype.$nextTick = function (e) {
              return Lt(this, e)
            }, Wt.forEach((function (l) {
              e.prototype[l] = function (e) {
                return this.$scope && this.$scope[l] ? this.$scope[l](e) : "undefined" !== typeof my ? "createSelectorQuery" === l ? my.createSelectorQuery(e) : "createIntersectionObserver" === l ? my.createIntersectionObserver(e) : void 0 : void 0
              }
            })), e.prototype.__init_provide = Sl, e.prototype.__init_injections = xl, e.prototype.__call_hook = function (e, l) {
              var a = this;
              be();
              var t, n = a.$options[e],
                r = e + " hook";
              if (n)
                for (var i = 0, u = n.length; i < u; i++) t = Ke(n[i], a, l ? [l] : null, a, r);
              return a._hasHookEvent && a.$emit("hook:" + e, l), de(), t
            }, e.prototype.__set_model = function (e, l, a, t) {
              Array.isArray(t) && (-1 !== t.indexOf("trim") && (a = a.trim()), -1 !== t.indexOf("number") && (a = this._n(a))), e || (e = this), e[l] = a
            }, e.prototype.__set_sync = function (e, l, a) {
              e || (e = this), e[l] = a
            }, e.prototype.__get_orig = function (e) {
              return v(e) && e["$orig"] || e
            }, e.prototype.__get_value = function (e, l) {
              return Kt(l || this, e)
            }, e.prototype.__get_class = function (e, l) {
              return Gt(l, e)
            }, e.prototype.__get_style = function (e, l) {
              if (!e && !l) return "";
              var a = Jt(e),
                t = l ? j(l, a) : a;
              return Object.keys(t).map((function (e) {
                return O(e) + ":" + t[e]
              })).join(";")
            }, e.prototype.__map = function (e, l) {
              var a, t, n, r, i;
              if (Array.isArray(e)) {
                for (a = new Array(e.length), t = 0, n = e.length; t < n; t++) a[t] = l(e[t], t);
                return a
              }
              if (o(e)) {
                for (r = Object.keys(e), a = Object.create(null), t = 0, n = r.length; t < n; t++) i = r[t], a[i] = l(e[i], i, t);
                return a
              }
              return []
            }
          }
          var Zt = ["onLaunch", "onShow", "onHide", "onUniNViewMessage", "onError", "onLoad", "onReady", "onUnload", "onPullDownRefresh", "onReachBottom", "onTabItemTap", "onShareAppMessage", "onResize", "onPageScroll", "onNavigationBarButtonTap", "onBackPress", "onNavigationBarSearchInputChanged", "onNavigationBarSearchInputConfirmed", "onNavigationBarSearchInputClicked", "onPageShow", "onPageHide", "onPageResize"];

          function en(e) {
            var l = e.extend;
            e.extend = function (e) {
              e = e || {};
              var a = e.methods;
              return a && Object.keys(a).forEach((function (l) {
                -1 !== Zt.indexOf(l) && (e[l] = a[l], delete a[l])
              })), l.call(this, e)
            };
            var a = e.config.optionMergeStrategies,
              t = a.created;
            Zt.forEach((function (e) {
              a[e] = t
            })), e.prototype.__lifecycle_hooks__ = Zt
          }
          pt.prototype.__patch__ = Ft, pt.prototype.$mount = function (e, l) {
            return Ut(this, e, l)
          }, en(pt), Qt(pt), l["default"] = pt
        }.call(this, a("c8ba"))
    },
    "6bb3": function (e, l, a) {
      "use strict";

      function t(e) {
        return i(e) || r(e) || n()
      }

      function n() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }

      function r(e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
      }

      function i(e) {
        if (Array.isArray(e)) {
          for (var l = 0, a = new Array(e.length); l < e.length; l++) a[l] = e[l];
          return a
        }
      }

      function u(e) {
        return u = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
          return typeof e
        } : function (e) {
          return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, u(e)
      }

      function o(e, l) {
        var a = [];
        return e.forEach((function (e) {
          "object" === u(e) ? Object.keys(e).forEach((function (t) {
            e[t] && a.push(l + t)
          })) : "string" === typeof e && a.push(l + e)
        })), a
      }

      function s() {
        var e = this,
          l = e.classNames,
          a = e.params,
          n = e.rtl,
          r = e.$el,
          i = e.device,
          u = e.support,
          s = o(["initialized", a.direction, {
            "pointer-events": !u.touch
          }, {
            "free-mode": e.params.freeMode && a.freeMode.enabled
          }, {
            autoheight: a.autoHeight
          }, {
            rtl: n
          }, {
            grid: a.grid && a.grid.rows > 1
          }, {
            "grid-column": a.grid && a.grid.rows > 1 && "column" === a.grid.fill
          }, {
            android: i.android
          }, {
            ios: i.ios
          }, {
            "css-mode": a.cssMode
          }, {
            centered: a.cssMode && a.centeredSlides
          }], a.containerModifierClass);
        l.push.apply(l, t(s)), r.addClass(t(l).join(" ")), e.emitContainerClasses()
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = s
    },
    "6cdc": function (e, l, a) {},
    "6dc3": function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = void 0;
      var t = r(a("9947")),
        n = r(a("2f25"));

      function r(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var i = {
        setGrabCursor: t.default,
        unsetGrabCursor: n.default
      };
      l.default = i
    },
    7008: function (e, l, a) {
      "use strict";

      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
          l = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          a = arguments.length > 2 ? arguments[2] : void 0,
          t = this,
          n = t.animating,
          r = t.enabled,
          i = t.params;
        if (!r) return t;
        var u = i.slidesPerGroup;
        "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (u = Math.max(t.slidesPerViewDynamic("current", !0), 1));
        var o = t.activeIndex < i.slidesPerGroupSkip ? 1 : u;
        if (i.loop) {
          if (n && i.loopPreventsSlide) return !1;
          t.loopFix()
        }
        return i.rewind && t.isEnd ? t.slideTo(0, e, l, a) : (setTimeout((function () {
          t.slideTo(t.activeIndex + o, e, l, a)
        }), 30), !0)
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = t
    },
    "74bb": function (e, l, a) {
      "use strict";
      (function (e) {
        Object.defineProperty(l, "__esModule", {
          value: !0
        }), l.isAuth = r, l.isAuthFront = i;
        var t = n(a("2971"));

        function n(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }

        function r(l, a) {
          for (var n = e.getStorageSync("role"), r = t.default.list(), i = 0; i < r.length; i++)
            if (r[i].roleName == n)
              for (var u = 0; u < r[i].backMenu.length; u++)
                for (var o = 0; o < r[i].backMenu[u].child.length; o++)
                  if (l == r[i].backMenu[u].child[o].tableName) {
                    var s = r[i].backMenu[u].child[o].buttons.join(",");
                    return -1 !== s.indexOf(a) || !1
                  } return !1
        }

        function i(l, a) {
          for (var n = e.getStorageSync("role"), r = t.default.list(), i = 0; i < r.length; i++)
            if (r[i].roleName == n)
              for (var u = 0; u < r[i].frontMenu.length; u++)
                for (var o = 0; o < r[i].frontMenu[u].child.length; o++)
                  if (l == r[i].frontMenu[u].child[o].tableName) {
                    var s = r[i].frontMenu[u].child[o].buttons.join(",");
                    return -1 !== s.indexOf(a) || !1
                  } return !1
        }
      }).call(this, a("543d")["default"])
    },
    "7a18": function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = r;
      var t = a("d7bd");

      function n(e, l, a) {
        return l in e ? Object.defineProperty(e, l, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[l] = a, e
      }

      function r() {
        var e, l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
          r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          u = arguments.length > 4 ? arguments[4] : void 0,
          o = this,
          s = o.params,
          v = o.wrapperEl;
        if (o.animating && s.preventInteractionOnTransition) return !1;
        var c, b = o.minTranslate(),
          d = o.maxTranslate();
        if (c = i && l > b ? b : i && l < d ? d : l, o.updateProgress(c), s.cssMode) {
          var p = o.isHorizontal();
          if (0 === a) v[p ? "scrollLeft" : "scrollTop"] = -c;
          else {
            var f;
            if (!o.support.smoothScroll) return (0, t.animateCSSModeScroll)({
              swiper: o,
              targetPosition: -c,
              side: p ? "left" : "top"
            }), !0;
            v.scrollTo((f = {}, n(f, p ? "left" : "top", -c), n(f, "behavior", "smooth"), f))
          }
          return !0
        }
        return 0 === a ? (o.setTransition(0), o.setTranslate(c), r && (o.emit("beforeTransitionStart", a, u), o.emit("transitionEnd"))) : (o.setTransition(a), o.setTranslate(c), r && (o.emit("beforeTransitionStart", a, u), o.emit("transitionStart")), o.animating || (o.animating = !0, o.onTranslateToWrapperTransitionEnd || (o.onTranslateToWrapperTransitionEnd = function (l) {
          o && !o.destroyed && l.target === this && (clearTimeout(e), o.onTranslateToWrapperTransitionEnd = null, delete o.onTranslateToWrapperTransitionEnd, r && o.emit("transitionEnd"))
        }), e = setTimeout((function () {
          o.onTranslateToWrapperTransitionEnd()
        }), a))), !0
      }
    },
    "7c52": function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = void 0;
      var t = i(a("5aba")),
        n = i(a("dae9")),
        r = i(a("7c98"));

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var u = {
        setTransition: t.default,
        transitionStart: n.default,
        transitionEnd: r.default
      };
      l.default = u
    },
    "7c98": function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = r;
      var t = n(a("5f9a"));

      function n(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function r() {
        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          l = arguments.length > 1 ? arguments[1] : void 0,
          a = this,
          n = a.params;
        a.animating = !1, n.cssMode || (a.setTransition(0), (0, t.default)({
          swiper: a,
          runCallbacks: e,
          direction: l,
          step: "End"
        }))
      }
    },
    "7e3b": function (e, l, a) {
      "use strict";

      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
          l = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          a = arguments.length > 2 ? arguments[2] : void 0,
          t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5,
          n = this,
          r = n.activeIndex,
          i = Math.min(n.params.slidesPerGroupSkip, r),
          u = i + Math.floor((r - i) / n.params.slidesPerGroup),
          o = n.rtlTranslate ? n.translate : -n.translate;
        if (o >= n.snapGrid[u]) {
          var s = n.snapGrid[u],
            v = n.snapGrid[u + 1];
          o - s > (v - s) * t && (r += n.params.slidesPerGroup)
        } else {
          var c = n.snapGrid[u - 1],
            b = n.snapGrid[u];
          o - c <= (b - c) * t && (r -= n.params.slidesPerGroup)
        }
        return r = Math.max(r, 0), r = Math.min(r, n.slidesGrid.length - 1), n.slideTo(r, e, l, a)
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = t
    },
    "7f2d": function (e, l, a) {
      "use strict";

      function t() {
        return -this.snapGrid[0]
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = t
    },
    8189: function (e) {
      e.exports = {
        _args: [
          ["@dcloudio/uni-stat@2.0.0-26120200226001", "/yykj/project/back/8082/generator/node_modules_app"]
        ],
        _from: "@dcloudio/uni-stat@2.0.0-26120200226001",
        _id: "@dcloudio/uni-stat@2.0.0-26120200226001",
        _inBundle: !1,
        _integrity: "sha1-Syur2+KgqF7XONLEVWjKQttRgd0=",
        _location: "/@dcloudio/uni-stat",
        _phantomChildren: {},
        _requested: {
          type: "version",
          registry: !0,
          raw: "@dcloudio/uni-stat@2.0.0-26120200226001",
          name: "@dcloudio/uni-stat",
          escapedName: "@dcloudio%2funi-stat",
          scope: "@dcloudio",
          rawSpec: "2.0.0-26120200226001",
          saveSpec: null,
          fetchSpec: "2.0.0-26120200226001"
        },
        _requiredBy: ["/", "/@dcloudio/vue-cli-plugin-uni"],
        _resolved: "https://registry.npm.taobao.org/@dcloudio/uni-stat/download/@dcloudio/uni-stat-2.0.0-26120200226001.tgz",
        _spec: "2.0.0-26120200226001",
        _where: "/yykj/project/back/8082/generator/node_modules_app",
        author: "",
        bugs: {
          url: "https://github.com/dcloudio/uni-app/issues"
        },
        description: "",
        devDependencies: {
          "@babel/core": "^7.5.5",
          "@babel/preset-env": "^7.5.5",
          eslint: "^6.1.0",
          rollup: "^1.19.3",
          "rollup-plugin-babel": "^4.3.3",
          "rollup-plugin-clear": "^2.0.7",
          "rollup-plugin-commonjs": "^10.0.2",
          "rollup-plugin-copy": "^3.1.0",
          "rollup-plugin-eslint": "^7.0.0",
          "rollup-plugin-json": "^4.0.0",
          "rollup-plugin-node-resolve": "^5.2.0",
          "rollup-plugin-replace": "^2.2.0",
          "rollup-plugin-uglify": "^6.0.2"
        },
        files: ["dist", "package.json", "LICENSE"],
        gitHead: "14f5fba1a46f1d2744e2504d7ca148a55ef5563c",
        homepage: "https://github.com/dcloudio/uni-app#readme",
        license: "Apache-2.0",
        main: "dist/index.js",
        name: "@dcloudio/uni-stat",
        repository: {
          type: "git",
          url: "git+https://github.com/dcloudio/uni-app.git",
          directory: "packages/uni-stat"
        },
        scripts: {
          build: "NODE_ENV=production rollup -c rollup.config.js",
          dev: "NODE_ENV=development rollup -w -c rollup.config.js"
        },
        version: "2.0.0-26120200226001"
      }
    },
    8579: function (e, l, a) {
      "use strict";

      function t() {
        var e = this;
        e.emit("beforeLoopFix");
        var l, a = e.activeIndex,
          t = e.slides,
          n = e.loopedSlides,
          r = e.allowSlidePrev,
          i = e.allowSlideNext,
          u = e.snapGrid,
          o = e.rtlTranslate;
        e.allowSlidePrev = !0, e.allowSlideNext = !0;
        var s = -u[a],
          v = s - e.getTranslate();
        if (a < n) {
          l = t.length - 3 * n + a, l += n;
          var c = e.slideTo(l, 0, !1, !0);
          c && 0 !== v && e.setTranslate((o ? -e.translate : e.translate) - v)
        } else if (a >= t.length - n) {
          l = -t.length + a + n, l += n;
          var b = e.slideTo(l, 0, !1, !0);
          b && 0 !== v && e.setTranslate((o ? -e.translate : e.translate) - v)
        }
        e.allowSlidePrev = r, e.allowSlideNext = i, e.emit("loopFix")
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = t
    },
    8713: function (e, l, a) {
      "use strict";

      function t() {
        var e = this;
        e.$wrapperEl, e.params, e.slides
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = t
    },
    "88b7": function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = void 0;
      var t = o(a("278a")),
        n = o(a("1c88")),
        r = o(a("2c5d")),
        i = (o(a("9ae9")), o(a("b791"))),
        u = o(a("64c1"));

      function o(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var s = function (e, l) {
        var a = e.params,
          t = e.touchEvents,
          n = (e.wrapperEl, e.device, e.support),
          r = (e.native, !!a.nested);
        if (n.touch) {
          "touchstart" !== t.start || !n.passiveListener || a.passiveListeners;
          t.cancel
        } else {
          var i = "on" === l ? "addEventListener" : "removeEventListener";
          document.querySelector("#".concat(e.$el.swiperElId)) && document.querySelector("#".concat(e.$el.swiperElId))[i](t.start, e.onTouchStart, !1), document[i](t.move, e.onTouchMove, r), document[i](t.end, e.onTouchEnd, !1)
        }
        a.preventClicks || a.preventClicksPropagation, a.cssMode, a.updateOnWindowResize
      };

      function v() {
        var e = this,
          l = e.params;
        e.support;
        e.onTouchStart = t.default.bind(e), e.onTouchMove = n.default.bind(e), e.onTouchEnd = r.default.bind(e), l.cssMode && (e.onScroll = u.default.bind(e)), e.onClick = i.default.bind(e), s(e, "on")
      }

      function c() {
        var e = this;
        s(e, "off")
      }
      var b = {
        attachEvents: v,
        detachEvents: c
      };
      l.default = b
    },
    "90a8": function (e, l, a) {
      "use strict";

      function t(e) {
        return i(e) || r(e) || n()
      }

      function n() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }

      function r(e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
      }

      function i(e) {
        if (Array.isArray(e)) {
          for (var l = 0, a = new Array(e.length); l < e.length; l++) a[l] = e[l];
          return a
        }
      }

      function u() {
        var e = this,
          l = e.params,
          a = (e.$wrapperEl, e.native),
          n = a.children;
        if (l.loopFillGroupWithBlank) {
          var r = l.slidesPerGroup - n.length % l.slidesPerGroup;
          r !== l.slidesPerGroup && (a.loopBlankShow = !0, a.loopBlankNumber = r)
        }
        "auto" !== l.slidesPerView || l.loopedSlides || (l.loopedSlides = n.length), e.loopedSlides = Math.ceil(parseFloat(l.loopedSlides || l.slidesPerView, 10)), e.loopedSlides += l.loopAdditionalSlides, e.loopedSlides > n.length && (e.loopedSlides = n.length);
        var i = [],
          u = [];
        n.forEach((function (l, a) {
          a < n.length && a >= n.length - e.loopedSlides && i.push(l), a < e.loopedSlides && u.push(l)
        }));
        var o = t(e.native.value),
          s = t(o);
        e.originalDataList = t(e.native.value);
        for (var v = 0; v < u.length; v += 1) s.push(o[u[v].index]);
        for (var c = i.length - 1; c >= 0; c -= 1) s.unshift(o[i[c].index]);
        return e.native.$emit("input", s), !0
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = u
    },
    "921b": function (e, l, a) {
      "use strict";
      (function (e) {
        var l = a("8189");

        function t(e, l) {
          return !l || "object" !== c(l) && "function" !== typeof l ? n(e) : l
        }

        function n(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
        }

        function r(e) {
          return r = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
          }, r(e)
        }

        function i(e, l) {
          if ("function" !== typeof l && null !== l) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(l && l.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), l && u(e, l)
        }

        function u(e, l) {
          return u = Object.setPrototypeOf || function (e, l) {
            return e.__proto__ = l, e
          }, u(e, l)
        }

        function o(e, l) {
          if (!(e instanceof l)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, l) {
          for (var a = 0; a < l.length; a++) {
            var t = l[a];
            t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
          }
        }

        function v(e, l, a) {
          return l && s(e.prototype, l), a && s(e, a), e
        }

        function c(e) {
          return c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
            return typeof e
          } : function (e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }, c(e)
        }
        var b = l.version,
          d = "https://tongji.dcloud.io/uni/stat",
          p = "https://tongji.dcloud.io/uni/stat.gif",
          f = 1800,
          h = 300,
          g = 10,
          m = "__DC_STAT_UUID",
          y = "__DC_UUID_VALUE";

        function w() {
          var l = "";
          if ("n" === T()) {
            try {
              l = plus.runtime.getDCloudId()
            } catch (a) {
              l = ""
            }
            return l
          }
          try {
            l = e.getStorageSync(m)
          } catch (a) {
            l = y
          }
          if (!l) {
            l = Date.now() + "" + Math.floor(1e7 * Math.random());
            try {
              e.setStorageSync(m, l)
            } catch (a) {
              e.setStorageSync(m, y)
            }
          }
          return l
        }
        var _ = function (e) {
            var l = Object.keys(e),
              a = l.sort(),
              t = {},
              n = "";
            for (var r in a) t[a[r]] = e[a[r]], n += a[r] + "=" + e[a[r]] + "&";
            return {
              sign: "",
              options: n.substr(0, n.length - 1)
            }
          },
          S = function (e) {
            var l = "";
            for (var a in e) l += a + "=" + e[a] + "&";
            return l.substr(0, l.length - 1)
          },
          x = function () {
            return parseInt((new Date).getTime() / 1e3)
          },
          T = function () {
            var e = {
              "app-plus": "n",
              h5: "h5",
              "mp-weixin": "wx",
              "mp-alipay": "ali",
              "mp-baidu": "bd",
              "mp-toutiao": "tt",
              "mp-qq": "qq"
            };
            return e["mp-weixin"]
          },
          E = function () {
            var l = "";
            return "wx" !== T() && "qq" !== T() || e.canIUse("getAccountInfoSync") && (l = e.getAccountInfoSync().miniProgram.appId || ""), l
          },
          O = function () {
            return "n" === T() ? plus.runtime.version : ""
          },
          P = function () {
            var e = T(),
              l = "";
            return "n" === e && (l = plus.runtime.channel), l
          },
          C = function (l) {
            var a = T(),
              t = "";
            return l || ("wx" === a && (t = e.getLaunchOptionsSync().scene), t)
          },
          k = "First__Visit__Time",
          M = "Last__Visit__Time",
          j = function () {
            var l = e.getStorageSync(k),
              a = 0;
            return l ? a = l : (a = x(), e.setStorageSync(k, a), e.removeStorageSync(M)), a
          },
          $ = function () {
            var l = e.getStorageSync(M),
              a = 0;
            return a = l || "", e.setStorageSync(M, x()), a
          },
          D = "__page__residence__time",
          A = 0,
          I = 0,
          B = function () {
            return A = x(), "n" === T() && e.setStorageSync(D, x()), A
          },
          N = function () {
            return I = x(), "n" === T() && (A = e.getStorageSync(D)), I - A
          },
          L = "Total__Visit__Count",
          z = function () {
            var l = e.getStorageSync(L),
              a = 1;
            return l && (a = l, a++), e.setStorageSync(L, a), a
          },
          F = function (e) {
            var l = {};
            for (var a in e) l[a] = encodeURIComponent(e[a]);
            return l
          },
          R = 0,
          U = 0,
          G = function () {
            var e = (new Date).getTime();
            return R = e, U = 0, e
          },
          H = function () {
            var e = (new Date).getTime();
            return U = e, e
          },
          V = function (e) {
            var l = 0;
            if (0 !== R && (l = U - R), l = parseInt(l / 1e3), l = l < 1 ? 1 : l, "app" === e) {
              var a = l > h;
              return {
                residenceTime: l,
                overtime: a
              }
            }
            if ("page" === e) {
              var t = l > f;
              return {
                residenceTime: l,
                overtime: t
              }
            }
            return {
              residenceTime: l
            }
          },
          q = function () {
            var e = getCurrentPages(),
              l = e[e.length - 1],
              a = l.$vm;
            return "bd" === T() ? a.$mp && a.$mp.page.is : a.$scope && a.$scope.route || a.$mp && a.$mp.page.route
          },
          Y = function (e) {
            var l = getCurrentPages(),
              a = l[l.length - 1],
              t = a.$vm,
              n = e._query,
              r = n && "{}" !== JSON.stringify(n) ? "?" + JSON.stringify(n) : "";
            return e._query = "", "bd" === T() ? t.$mp && t.$mp.page.is + r : t.$scope && t.$scope.route + r || t.$mp && t.$mp.page.route + r
          },
          X = function (e) {
            return !!("page" === e.mpType || e.$mp && "page" === e.$mp.mpType || "page" === e.$options.mpType)
          },
          J = function (e, l) {
            return e ? "string" !== typeof e ? (console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"), !0) : e.length > 255 ? (console.error("uni.report [eventName] 参数长度不能大于 255"), !0) : "string" !== typeof l && "object" !== c(l) ? (console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"), !0) : "string" === typeof l && l.length > 255 ? (console.error("uni.report [options] 参数长度不能大于 255"), !0) : "title" === e && "string" !== typeof l ? (console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"), !0) : void 0 : (console.error("uni.report 缺少 [eventName] 参数"), !0)
          },
          W = a("5768").default,
          K = a("ecd6").default || a("ecd6"),
          Q = e.getSystemInfoSync(),
          Z = function () {
            function l() {
              o(this, l), this.self = "", this._retry = 0, this._platform = "", this._query = {}, this._navigationBarTitle = {
                config: "",
                page: "",
                report: "",
                lt: ""
              }, this._operatingTime = 0, this._reportingRequestData = {
                1: [],
                11: []
              }, this.__prevent_triggering = !1, this.__licationHide = !1, this.__licationShow = !1, this._lastPageRoute = "", this.statData = {
                uuid: w(),
                ut: T(),
                mpn: E(),
                ak: K.appid,
                usv: b,
                v: O(),
                ch: P(),
                cn: "",
                pn: "",
                ct: "",
                t: x(),
                tt: "",
                p: "android" === Q.platform ? "a" : "i",
                brand: Q.brand || "",
                md: Q.model,
                sv: Q.system.replace(/(Android|iOS)\s/, ""),
                mpsdk: Q.SDKVersion || "",
                mpv: Q.version || "",
                lang: Q.language,
                pr: Q.pixelRatio,
                ww: Q.windowWidth,
                wh: Q.windowHeight,
                sw: Q.screenWidth,
                sh: Q.screenHeight
              }
            }
            return v(l, [{
              key: "_applicationShow",
              value: function () {
                if (this.__licationHide) {
                  H();
                  var e = V("app");
                  if (e.overtime) {
                    var l = {
                      path: this._lastPageRoute,
                      scene: this.statData.sc
                    };
                    this._sendReportRequest(l)
                  }
                  this.__licationHide = !1
                }
              }
            }, {
              key: "_applicationHide",
              value: function (e, l) {
                this.__licationHide = !0, H();
                var a = V();
                G();
                var t = Y(this);
                this._sendHideRequest({
                  urlref: t,
                  urlref_ts: a.residenceTime
                }, l)
              }
            }, {
              key: "_pageShow",
              value: function () {
                var e = Y(this),
                  l = q();
                if (this._navigationBarTitle.config = W && W.pages[l] && W.pages[l].titleNView && W.pages[l].titleNView.titleText || W && W.pages[l] && W.pages[l].navigationBarTitleText || "", this.__licationShow) return G(), this.__licationShow = !1, void(this._lastPageRoute = e);
                H(), this._lastPageRoute = e;
                var a = V("page");
                if (a.overtime) {
                  var t = {
                    path: this._lastPageRoute,
                    scene: this.statData.sc
                  };
                  this._sendReportRequest(t)
                }
                G()
              }
            }, {
              key: "_pageHide",
              value: function () {
                if (!this.__licationHide) {
                  H();
                  var e = V("page");
                  return this._sendPageRequest({
                    url: this._lastPageRoute,
                    urlref: this._lastPageRoute,
                    urlref_ts: e.residenceTime
                  }), void(this._navigationBarTitle = {
                    config: "",
                    page: "",
                    report: "",
                    lt: ""
                  })
                }
              }
            }, {
              key: "_login",
              value: function () {
                this._sendEventRequest({
                  key: "login"
                }, 0)
              }
            }, {
              key: "_share",
              value: function () {
                this._sendEventRequest({
                  key: "share"
                }, 0)
              }
            }, {
              key: "_payment",
              value: function (e) {
                this._sendEventRequest({
                  key: e
                }, 0)
              }
            }, {
              key: "_sendReportRequest",
              value: function (e) {
                this._navigationBarTitle.lt = "1";
                var l = e.query && "{}" !== JSON.stringify(e.query) ? "?" + JSON.stringify(e.query) : "";
                this.statData.lt = "1", this.statData.url = e.path + l || "", this.statData.t = x(), this.statData.sc = C(e.scene), this.statData.fvts = j(), this.statData.lvts = $(), this.statData.tvc = z(), "n" === T() ? this.getProperty() : this.getNetworkInfo()
              }
            }, {
              key: "_sendPageRequest",
              value: function (e) {
                var l = e.url,
                  a = e.urlref,
                  t = e.urlref_ts;
                this._navigationBarTitle.lt = "11";
                var n = {
                  ak: this.statData.ak,
                  uuid: this.statData.uuid,
                  lt: "11",
                  ut: this.statData.ut,
                  url: l,
                  tt: this.statData.tt,
                  urlref: a,
                  urlref_ts: t,
                  ch: this.statData.ch,
                  usv: this.statData.usv,
                  t: x(),
                  p: this.statData.p
                };
                this.request(n)
              }
            }, {
              key: "_sendHideRequest",
              value: function (e, l) {
                var a = e.urlref,
                  t = e.urlref_ts,
                  n = {
                    ak: this.statData.ak,
                    uuid: this.statData.uuid,
                    lt: "3",
                    ut: this.statData.ut,
                    urlref: a,
                    urlref_ts: t,
                    ch: this.statData.ch,
                    usv: this.statData.usv,
                    t: x(),
                    p: this.statData.p
                  };
                this.request(n, l)
              }
            }, {
              key: "_sendEventRequest",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  l = e.key,
                  a = void 0 === l ? "" : l,
                  t = e.value,
                  n = void 0 === t ? "" : t,
                  r = this._lastPageRoute,
                  i = {
                    ak: this.statData.ak,
                    uuid: this.statData.uuid,
                    lt: "21",
                    ut: this.statData.ut,
                    url: r,
                    ch: this.statData.ch,
                    e_n: a,
                    e_v: "object" === c(n) ? JSON.stringify(n) : n.toString(),
                    usv: this.statData.usv,
                    t: x(),
                    p: this.statData.p
                  };
                this.request(i)
              }
            }, {
              key: "getNetworkInfo",
              value: function () {
                var l = this;
                e.getNetworkType({
                  success: function (e) {
                    l.statData.net = e.networkType, l.getLocation()
                  }
                })
              }
            }, {
              key: "getProperty",
              value: function () {
                var e = this;
                plus.runtime.getProperty(plus.runtime.appid, (function (l) {
                  e.statData.v = l.version || "", e.getNetworkInfo()
                }))
              }
            }, {
              key: "getLocation",
              value: function () {
                var l = this;
                K.getLocation ? e.getLocation({
                  type: "wgs84",
                  geocode: !0,
                  success: function (e) {
                    e.address && (l.statData.cn = e.address.country, l.statData.pn = e.address.province, l.statData.ct = e.address.city), l.statData.lat = e.latitude, l.statData.lng = e.longitude, l.request(l.statData)
                  }
                }) : (this.statData.lat = 0, this.statData.lng = 0, this.request(this.statData))
              }
            }, {
              key: "request",
              value: function (l, a) {
                var t = this,
                  n = x(),
                  r = this._navigationBarTitle;
                l.ttn = r.page, l.ttpj = r.config, l.ttc = r.report;
                var i = this._reportingRequestData;
                if ("n" === T() && (i = e.getStorageSync("__UNI__STAT__DATA") || {}), i[l.lt] || (i[l.lt] = []), i[l.lt].push(l), "n" === T() && e.setStorageSync("__UNI__STAT__DATA", i), !(N() < g) || a) {
                  var u = this._reportingRequestData;
                  "n" === T() && (u = e.getStorageSync("__UNI__STAT__DATA")), B();
                  var o = [],
                    s = [],
                    v = [],
                    c = function (e) {
                      var l = u[e];
                      l.forEach((function (l) {
                        var a = S(l);
                        0 === e ? o.push(a) : 3 === e ? v.push(a) : s.push(a)
                      }))
                    };
                  for (var d in u) c(d);
                  o.push.apply(o, s.concat(v));
                  var p = {
                    usv: b,
                    t: n,
                    requests: JSON.stringify(o)
                  };
                  this._reportingRequestData = {}, "n" === T() && e.removeStorageSync("__UNI__STAT__DATA"), "h5" !== l.ut ? "n" !== T() || "a" !== this.statData.p ? this._sendRequest(p) : setTimeout((function () {
                    t._sendRequest(p)
                  }), 200) : this.imageRequest(p)
                }
              }
            }, {
              key: "_sendRequest",
              value: function (l) {
                var a = this;
                e.request({
                  url: d,
                  method: "POST",
                  data: l,
                  success: function () {},
                  fail: function (e) {
                    ++a._retry < 3 && setTimeout((function () {
                      a._sendRequest(l)
                    }), 1e3)
                  }
                })
              }
            }, {
              key: "imageRequest",
              value: function (e) {
                var l = new Image,
                  a = _(F(e)).options;
                l.src = p + "?" + a
              }
            }, {
              key: "sendEvent",
              value: function (e, l) {
                J(e, l) || ("title" !== e ? this._sendEventRequest({
                  key: e,
                  value: "object" === c(l) ? JSON.stringify(l) : l
                }, 1) : this._navigationBarTitle.report = l)
              }
            }]), l
          }(),
          ee = function (l) {
            function a() {
              var l;
              return o(this, a), l = t(this, r(a).call(this)), l.instance = null, "function" === typeof e.addInterceptor && (l.addInterceptorInit(), l.interceptLogin(), l.interceptShare(!0), l.interceptRequestPayment()), l
            }
            return i(a, l), v(a, null, [{
              key: "getInstance",
              value: function () {
                return this.instance || (this.instance = new a), this.instance
              }
            }]), v(a, [{
              key: "addInterceptorInit",
              value: function () {
                var l = this;
                e.addInterceptor("setNavigationBarTitle", {
                  invoke: function (e) {
                    l._navigationBarTitle.page = e.title
                  }
                })
              }
            }, {
              key: "interceptLogin",
              value: function () {
                var l = this;
                e.addInterceptor("login", {
                  complete: function () {
                    l._login()
                  }
                })
              }
            }, {
              key: "interceptShare",
              value: function (l) {
                var a = this;
                l ? e.addInterceptor("share", {
                  success: function () {
                    a._share()
                  },
                  fail: function () {
                    a._share()
                  }
                }) : a._share()
              }
            }, {
              key: "interceptRequestPayment",
              value: function () {
                var l = this;
                e.addInterceptor("requestPayment", {
                  success: function () {
                    l._payment("pay_success")
                  },
                  fail: function () {
                    l._payment("pay_fail")
                  }
                })
              }
            }, {
              key: "report",
              value: function (e, l) {
                this.self = l, B(), this.__licationShow = !0, this._sendReportRequest(e, !0)
              }
            }, {
              key: "load",
              value: function (e, l) {
                if (!l.$scope && !l.$mp) {
                  var a = getCurrentPages();
                  l.$scope = a[a.length - 1]
                }
                this.self = l, this._query = e
              }
            }, {
              key: "show",
              value: function (e) {
                this.self = e, X(e) ? this._pageShow(e) : this._applicationShow(e)
              }
            }, {
              key: "ready",
              value: function (e) {}
            }, {
              key: "hide",
              value: function (e) {
                this.self = e, X(e) ? this._pageHide(e) : this._applicationHide(e, !0)
              }
            }, {
              key: "error",
              value: function (e) {
                this._platform;
                var l = "";
                l = e.message ? e.stack : JSON.stringify(e);
                var a = {
                  ak: this.statData.ak,
                  uuid: this.statData.uuid,
                  lt: "31",
                  ut: this.statData.ut,
                  ch: this.statData.ch,
                  mpsdk: this.statData.mpsdk,
                  mpv: this.statData.mpv,
                  v: this.statData.v,
                  em: l,
                  usv: this.statData.usv,
                  t: x(),
                  p: this.statData.p
                };
                this.request(a)
              }
            }]), a
          }(Z),
          le = ee.getInstance(),
          ae = !1,
          te = {
            onLaunch: function (e) {
              le.report(e, this)
            },
            onReady: function () {
              le.ready(this)
            },
            onLoad: function (e) {
              if (le.load(e, this), this.$scope && this.$scope.onShareAppMessage) {
                var l = this.$scope.onShareAppMessage;
                this.$scope.onShareAppMessage = function (e) {
                  return le.interceptShare(!1), l.call(this, e)
                }
              }
            },
            onShow: function () {
              ae = !1, le.show(this)
            },
            onHide: function () {
              ae = !0, le.hide(this)
            },
            onUnload: function () {
              ae ? ae = !1 : le.hide(this)
            },
            onError: function (e) {
              le.error(e)
            }
          };

        function ne() {
          var l = a("66fd");
          (l.default || l).mixin(te), e.report = function (e, l) {
            le.sendEvent(e, l)
          }
        }
        ne()
      }).call(this, a("543d")["default"])
    },
    9661: function (e, l, a) {
      "use strict";

      function t(e, l) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          l && (t = t.filter((function (l) {
            return Object.getOwnPropertyDescriptor(e, l).enumerable
          }))), a.push.apply(a, t)
        }
        return a
      }

      function n(e) {
        for (var l = 1; l < arguments.length; l++) {
          var a = null != arguments[l] ? arguments[l] : {};
          l % 2 ? t(Object(a), !0).forEach((function (l) {
            r(e, l, a[l])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : t(Object(a)).forEach((function (l) {
            Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(a, l))
          }))
        }
        return e
      }

      function r(e, l, a) {
        return l in e ? Object.defineProperty(e, l, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[l] = a, e
      }

      function i(e) {
        !e || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
      }

      function u(e, l, a) {
        if (!a) return null;
        var t = e.isHorizontal() ? r({}, e.rtlTranslate ? "right" : "left", "".concat(a.offset, "px")) : {
          top: "".concat(a.offset, "px")
        };
        return l.filter((function (e, l) {
          return l >= a.from && l <= a.to
        })).map((function (l) {
          return l.props || (l.props = {}), l.props.style || (l.props.style = {}), l.props.swiperRef = e, l.props.style = t, h(l.type, n({}, l.props), l.children)
        }))
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.renderVirtual = u, l.updateOnVirtualData = i
    },
    "96cf": function (e, l) {
      ! function (l) {
        "use strict";
        var a, t = Object.prototype,
          n = t.hasOwnProperty,
          r = "function" === typeof Symbol ? Symbol : {},
          i = r.iterator || "@@iterator",
          u = r.asyncIterator || "@@asyncIterator",
          o = r.toStringTag || "@@toStringTag",
          s = "object" === typeof e,
          v = l.regeneratorRuntime;
        if (v) s && (e.exports = v);
        else {
          v = l.regeneratorRuntime = s ? e.exports : {}, v.wrap = w;
          var c = "suspendedStart",
            b = "suspendedYield",
            d = "executing",
            p = "completed",
            f = {},
            h = {};
          h[i] = function () {
            return this
          };
          var g = Object.getPrototypeOf,
            m = g && g(g($([])));
          m && m !== t && n.call(m, i) && (h = m);
          var y = T.prototype = S.prototype = Object.create(h);
          x.prototype = y.constructor = T, T.constructor = x, T[o] = x.displayName = "GeneratorFunction", v.isGeneratorFunction = function (e) {
            var l = "function" === typeof e && e.constructor;
            return !!l && (l === x || "GeneratorFunction" === (l.displayName || l.name))
          }, v.mark = function (e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, T) : (e.__proto__ = T, o in e || (e[o] = "GeneratorFunction")), e.prototype = Object.create(y), e
          }, v.awrap = function (e) {
            return {
              __await: e
            }
          }, E(O.prototype), O.prototype[u] = function () {
            return this
          }, v.AsyncIterator = O, v.async = function (e, l, a, t) {
            var n = new O(w(e, l, a, t));
            return v.isGeneratorFunction(l) ? n : n.next().then((function (e) {
              return e.done ? e.value : n.next()
            }))
          }, E(y), y[o] = "Generator", y[i] = function () {
            return this
          }, y.toString = function () {
            return "[object Generator]"
          }, v.keys = function (e) {
            var l = [];
            for (var a in e) l.push(a);
            return l.reverse(),
              function a() {
                while (l.length) {
                  var t = l.pop();
                  if (t in e) return a.value = t, a.done = !1, a
                }
                return a.done = !0, a
              }
          }, v.values = $, j.prototype = {
            constructor: j,
            reset: function (e) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = a, this.done = !1, this.delegate = null, this.method = "next", this.arg = a, this.tryEntries.forEach(M), !e)
                for (var l in this) "t" === l.charAt(0) && n.call(this, l) && !isNaN(+l.slice(1)) && (this[l] = a)
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0],
                l = e.completion;
              if ("throw" === l.type) throw l.arg;
              return this.rval
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var l = this;

              function t(t, n) {
                return u.type = "throw", u.arg = e, l.next = t, n && (l.method = "next", l.arg = a), !!n
              }
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var i = this.tryEntries[r],
                  u = i.completion;
                if ("root" === i.tryLoc) return t("end");
                if (i.tryLoc <= this.prev) {
                  var o = n.call(i, "catchLoc"),
                    s = n.call(i, "finallyLoc");
                  if (o && s) {
                    if (this.prev < i.catchLoc) return t(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return t(i.finallyLoc)
                  } else if (o) {
                    if (this.prev < i.catchLoc) return t(i.catchLoc, !0)
                  } else {
                    if (!s) throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return t(i.finallyLoc)
                  }
                }
              }
            },
            abrupt: function (e, l) {
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var t = this.tryEntries[a];
                if (t.tryLoc <= this.prev && n.call(t, "finallyLoc") && this.prev < t.finallyLoc) {
                  var r = t;
                  break
                }
              }
              r && ("break" === e || "continue" === e) && r.tryLoc <= l && l <= r.finallyLoc && (r = null);
              var i = r ? r.completion : {};
              return i.type = e, i.arg = l, r ? (this.method = "next", this.next = r.finallyLoc, f) : this.complete(i)
            },
            complete: function (e, l) {
              if ("throw" === e.type) throw e.arg;
              return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && l && (this.next = l), f
            },
            finish: function (e) {
              for (var l = this.tryEntries.length - 1; l >= 0; --l) {
                var a = this.tryEntries[l];
                if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), M(a), f
              }
            },
            catch: function (e) {
              for (var l = this.tryEntries.length - 1; l >= 0; --l) {
                var a = this.tryEntries[l];
                if (a.tryLoc === e) {
                  var t = a.completion;
                  if ("throw" === t.type) {
                    var n = t.arg;
                    M(a)
                  }
                  return n
                }
              }
              throw new Error("illegal catch attempt")
            },
            delegateYield: function (e, l, t) {
              return this.delegate = {
                iterator: $(e),
                resultName: l,
                nextLoc: t
              }, "next" === this.method && (this.arg = a), f
            }
          }
        }

        function w(e, l, a, t) {
          var n = l && l.prototype instanceof S ? l : S,
            r = Object.create(n.prototype),
            i = new j(t || []);
          return r._invoke = P(e, a, i), r
        }

        function _(e, l, a) {
          try {
            return {
              type: "normal",
              arg: e.call(l, a)
            }
          } catch (t) {
            return {
              type: "throw",
              arg: t
            }
          }
        }

        function S() {}

        function x() {}

        function T() {}

        function E(e) {
          ["next", "throw", "return"].forEach((function (l) {
            e[l] = function (e) {
              return this._invoke(l, e)
            }
          }))
        }

        function O(e) {
          function l(a, t, r, i) {
            var u = _(e[a], e, t);
            if ("throw" !== u.type) {
              var o = u.arg,
                s = o.value;
              return s && "object" === typeof s && n.call(s, "__await") ? Promise.resolve(s.__await).then((function (e) {
                l("next", e, r, i)
              }), (function (e) {
                l("throw", e, r, i)
              })) : Promise.resolve(s).then((function (e) {
                o.value = e, r(o)
              }), (function (e) {
                return l("throw", e, r, i)
              }))
            }
            i(u.arg)
          }
          var a;

          function t(e, t) {
            function n() {
              return new Promise((function (a, n) {
                l(e, t, a, n)
              }))
            }
            return a = a ? a.then(n, n) : n()
          }
          this._invoke = t
        }

        function P(e, l, a) {
          var t = c;
          return function (n, r) {
            if (t === d) throw new Error("Generator is already running");
            if (t === p) {
              if ("throw" === n) throw r;
              return D()
            }
            a.method = n, a.arg = r;
            while (1) {
              var i = a.delegate;
              if (i) {
                var u = C(i, a);
                if (u) {
                  if (u === f) continue;
                  return u
                }
              }
              if ("next" === a.method) a.sent = a._sent = a.arg;
              else if ("throw" === a.method) {
                if (t === c) throw t = p, a.arg;
                a.dispatchException(a.arg)
              } else "return" === a.method && a.abrupt("return", a.arg);
              t = d;
              var o = _(e, l, a);
              if ("normal" === o.type) {
                if (t = a.done ? p : b, o.arg === f) continue;
                return {
                  value: o.arg,
                  done: a.done
                }
              }
              "throw" === o.type && (t = p, a.method = "throw", a.arg = o.arg)
            }
          }
        }

        function C(e, l) {
          var t = e.iterator[l.method];
          if (t === a) {
            if (l.delegate = null, "throw" === l.method) {
              if (e.iterator.return && (l.method = "return", l.arg = a, C(e, l), "throw" === l.method)) return f;
              l.method = "throw", l.arg = new TypeError("The iterator does not provide a 'throw' method")
            }
            return f
          }
          var n = _(t, e.iterator, l.arg);
          if ("throw" === n.type) return l.method = "throw", l.arg = n.arg, l.delegate = null, f;
          var r = n.arg;
          return r ? r.done ? (l[e.resultName] = r.value, l.next = e.nextLoc, "return" !== l.method && (l.method = "next", l.arg = a), l.delegate = null, f) : r : (l.method = "throw", l.arg = new TypeError("iterator result is not an object"), l.delegate = null, f)
        }

        function k(e) {
          var l = {
            tryLoc: e[0]
          };
          1 in e && (l.catchLoc = e[1]), 2 in e && (l.finallyLoc = e[2], l.afterLoc = e[3]), this.tryEntries.push(l)
        }

        function M(e) {
          var l = e.completion || {};
          l.type = "normal", delete l.arg, e.completion = l
        }

        function j(e) {
          this.tryEntries = [{
            tryLoc: "root"
          }], e.forEach(k, this), this.reset(!0)
        }

        function $(e) {
          if (e) {
            var l = e[i];
            if (l) return l.call(e);
            if ("function" === typeof e.next) return e;
            if (!isNaN(e.length)) {
              var t = -1,
                r = function l() {
                  while (++t < e.length)
                    if (n.call(e, t)) return l.value = e[t], l.done = !1, l;
                  return l.value = a, l.done = !0, l
                };
              return r.next = r
            }
          }
          return {
            next: D
          }
        }

        function D() {
          return {
            value: a,
            done: !0
          }
        }
      }(function () {
        return this || "object" === typeof self && self
      }() || Function("return this")())
    },
    "98a0": function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = i;
      var t = r(a("3430")),
        n = r(a("41e4"));

      function r(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function i(e) {
        var l = e.swiper,
          a = e.extendParams,
          r = e.on;
        a({
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: !0,
            transformEl: null
          }
        });
        var i = function () {
            for (var e = l.width, a = l.height, t = l.slides, r = l.slidesSizesGrid, i = l.params.coverflowEffect, u = l.isHorizontal(), o = l.translate, s = u ? e / 2 - o : a / 2 - o, v = u ? i.rotate : -i.rotate, c = i.depth, b = 0, d = t.length; b < d; b += 1) {
              var p = t[b],
                f = r[b],
                h = p.swiperSlideOffset,
                g = (s - h - f / 2) / f * i.modifier,
                m = u ? v * g : 0,
                y = u ? 0 : v * g,
                w = -c * Math.abs(g),
                _ = i.stretch;
              "string" === typeof _ && -1 !== _.indexOf("%") && (_ = parseFloat(i.stretch) / 100 * f);
              var S = u ? 0 : _ * g,
                x = u ? _ * g : 0,
                T = 1 - (1 - i.scale) * Math.abs(g);
              Math.abs(x) < .001 && (x = 0), Math.abs(S) < .001 && (S = 0), Math.abs(w) < .001 && (w = 0), Math.abs(m) < .001 && (m = 0), Math.abs(y) < .001 && (y = 0), Math.abs(T) < .001 && (T = 0);
              var E = "translate3d(".concat(x, "px,").concat(S, "px,").concat(w, "px)  rotateX(").concat(y, "deg) rotateY(").concat(m, "deg) scale(").concat(T, ")"),
                O = (0, n.default)(i, p);
              O.transform(E), p.css({
                zIndex: 1 - Math.abs(Math.round(g))
              }), l.params.willChange && O.willChange("transform"), p.addClass("swiper-slide-coverflow")
            }
          },
          u = function (e) {
            for (var a = l.params.coverflowEffect.transformEl, t = a ? l.slides.find(a) : l.slides, n = 0; n < t.length; n++) t[n].transition(e)
          };
        (0, t.default)({
          effect: "coverflow",
          swiper: l,
          on: r,
          setTranslate: i,
          setTransition: u,
          perspective: function () {
            return !0
          },
          overwriteParams: function () {
            return {
              watchSlidesProgress: !0
            }
          }
        })
      }
    },
    9947: function (e, l, a) {
      "use strict";

      function t(e, l, a) {
        return l in e ? Object.defineProperty(e, l, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[l] = a, e
      }

      function n(e) {
        var l, a = this;
        if (!(a.support.touch || !a.params.simulateTouch || a.params.watchOverflow && a.isLocked || a.params.cssMode)) {
          var n = "container" === a.params.touchEventsTarget ? a.$el : a.$wrapperEl;
          n.setCss((l = {
            cursor: "move"
          }, t(l, "cursor", e ? "-webkit-grabbing" : "-webkit-grab"), t(l, "cursor", e ? "-moz-grabbin" : "-moz-grab"), t(l, "cursor", e ? "grabbing" : "grab"), l))
        }
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = n
    },
    "9ae9": function (e, l, a) {
      "use strict";

      function t() {
        var e = this,
          l = e.params,
          a = e.el;
        if (!a || 0 !== a.offsetWidth) {
          l.breakpoints && e.setBreakpoint();
          var t = e.allowSlideNext,
            n = e.allowSlidePrev,
            r = e.snapGrid;
          e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === l.slidesPerView || l.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = n, e.allowSlideNext = t, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
        }
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = t
    },
    "9e77": function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = n;
      var t = a("d7bd");

      function n() {
        var e, l = this,
          a = l.params,
          n = l.$wrapperEl,
          r = "auto" === a.slidesPerView ? l.slidesPerViewDynamic() : a.slidesPerView,
          i = l.clickedIndex;
        if (a.loop) {
          if (l.animating) return;
          e = parseInt(l.activeIndex, 10), a.centeredSlides ? i < l.loopedSlides - r / 2 || i > l.slides.length - l.loopedSlides + r / 2 ? (l.loopFix(), i = n.children(".".concat(a.slideClass, '[data-swiper-slide-index="').concat(e, '"]:not(.').concat(a.slideDuplicateClass, ")")).eq(0).index(), (0, t.nextTick)((function () {
            l.slideTo(i)
          }))) : l.slideTo(i) : i > l.slides.length - r ? (l.loopFix(), i = n.children(".".concat(a.slideClass, '[data-swiper-slide-index="').concat(e, '"]:not(.').concat(a.slideDuplicateClass, ")")).eq(0).index(), (0, t.nextTick)((function () {
            l.slideTo(i)
          }))) : l.slideTo(i)
        } else l.slideTo(i)
      }
    },
    "9f76": function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = n;
      var t = a("d7bd");

      function n() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.isHorizontal() ? "x" : "y",
          l = this,
          a = l.params,
          n = l.rtlTranslate,
          r = l.translate;
        l.$wrapperEl;
        if (a.virtualTranslate) return n ? -r : r;
        if (a.cssMode) return r;
        var i = (0, t.getTranslate)(l, e);
        return n && (i = -i), i || 0
      }
    },
    "9f95": function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = void 0;
      var t = w(a("a34a")),
        n = a("d7bd"),
        r = a("d9c3"),
        i = a("331c"),
        u = a("340d"),
        o = w(a("a5f7")),
        s = w(a("c1cf")),
        v = w(a("b9a2")),
        c = w(a("e35b")),
        b = w(a("7c52")),
        d = w(a("ee18")),
        p = w(a("f6b7")),
        f = w(a("2a3b")),
        h = w(a("f9e5")),
        g = w(a("d699")),
        m = w(a("6dc3")),
        y = w(a("88b7"));
      a("3ff9");

      function w(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function _(e, l, a, t, n, r, i) {
        try {
          var u = e[r](i),
            o = u.value
        } catch (s) {
          return void a(s)
        }
        u.done ? l(o) : Promise.resolve(o).then(t, n)
      }

      function S(e) {
        return function () {
          var l = this,
            a = arguments;
          return new Promise((function (t, n) {
            var r = e.apply(l, a);

            function i(e) {
              _(r, t, n, i, u, "next", e)
            }

            function u(e) {
              _(r, t, n, i, u, "throw", e)
            }
            i(void 0)
          }))
        }
      }

      function x(e) {
        return O(e) || E(e) || T()
      }

      function T() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }

      function E(e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
      }

      function O(e) {
        if (Array.isArray(e)) {
          for (var l = 0, a = new Array(e.length); l < e.length; l++) a[l] = e[l];
          return a
        }
      }

      function P(e, l) {
        if (!(e instanceof l)) throw new TypeError("Cannot call a class as a function")
      }

      function C(e, l) {
        for (var a = 0; a < l.length; a++) {
          var t = l[a];
          t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
        }
      }

      function k(e, l, a) {
        return l && C(e.prototype, l), a && C(e, a), e
      }
      var M = {
          eventsEmitter: s.default,
          update: v.default,
          checkOverflow: f.default,
          slide: h.default,
          loop: g.default,
          translate: c.default,
          transition: b.default,
          grabCursor: m.default,
          events: y.default,
          classes: p.default
        },
        j = {},
        $ = function () {
          function e() {
            P(this, e);
            for (var l, a, t, s, v = this, c = arguments.length, b = new Array(c), p = 0; p < c; p++) b[p] = arguments[p];
            (1 === b.length && b[0].constructor && "Object" === Object.prototype.toString.call(b[0]).slice(8, -1) ? l = b[0] : 2 === b.length && b[0].constructor && "Object" === Object.prototype.toString.call(b[0]).slice(8, -1) ? (l = b[0], t = b[1]) : (a = b[0], l = b[1], t = b[2]), l || (l = {}), l = (0, n.extend)({}, l), a && !l.el && (l.el = a), v.__swiper__ = !0, v.support = (0, r.getSupport)(), v.device = (0, i.getDevice)({
              userAgent: l.userAgent
            }), v.browser = (0, u.getBrowser)(), v.eventsListeners = {}, v.eventsAnyListeners = [], v.modules = x(v.__modules__), v.native = t, l.modules && Array.isArray(l.modules)) && (s = v.modules).push.apply(s, x(l.modules));
            var f = {};
            v.modules.forEach((function (e) {
              e({
                swiper: v,
                extendParams: (0, o.default)(l, f),
                on: v.on.bind(v),
                once: v.once.bind(v),
                off: v.off.bind(v),
                emit: v.emit.bind(v)
              })
            }));
            var h = (0, n.extend)({}, d.default, f);
            return v.params = (0, n.extend)({}, h, j, l), v.originalParams = (0, n.extend)({}, v.params), v.passedParams = (0, n.extend)({}, l), v.params && v.params.on && Object.keys(v.params.on).forEach((function (e) {
              v.on(e, v.params.on[e])
            })), v.params && v.params.onAny && v.onAny(v.params.onAny), Object.assign(v, {
              enabled: v.params.enabled,
              el: a,
              classNames: [],
              slides: [],
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: function () {
                return "horizontal" === v.params.direction
              },
              isVertical: function () {
                return "vertical" === v.params.direction
              },
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: v.params.allowSlideNext,
              allowSlidePrev: v.params.allowSlidePrev,
              touchEvents: function () {
                var e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                  l = ["pointerdown", "pointermove", "pointerup"];
                return v.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3]
                }, v.touchEventsDesktop = {
                  start: l[0],
                  move: l[1],
                  end: l[2]
                }, v.support.touch || !v.params.simulateTouch ? v.touchEventsTouch : v.touchEventsDesktop
              }(),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: v.params.focusableElements,
                lastClickTime: (0, n.now)(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0
              },
              allowClick: !0,
              allowTouchMove: v.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
              },
              imagesToLoad: [],
              imagesLoaded: 0,
              virtualList: [],
              virtualIndexList: []
            }), v.emit("_swiper"), v.params.init && v.init(), v
          }
          return k(e, [{
            key: "enable",
            value: function () {
              var e = this;
              e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
            }
          }, {
            key: "disable",
            value: function () {
              var e = this;
              e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
            }
          }, {
            key: "setProgress",
            value: function (e, l) {
              var a = this;
              e = Math.min(Math.max(e, 0), 1);
              var t = a.minTranslate(),
                n = a.maxTranslate(),
                r = (n - t) * e + t;
              a.translateTo(r, "undefined" === typeof l ? 0 : l), a.updateActiveIndex(), a.updateSlidesClasses()
            }
          }, {
            key: "emitContainerClasses",
            value: function () {
              var e = this;
              if (e.params._emitClasses && e.el) {
                var l = e.native.contentClass.split(" ").filter((function (l) {
                  return 0 === l.indexOf("swiper") || 0 === l.indexOf(e.params.containerModifierClass)
                }));
                e.emit("_containerClasses", l.join(" "))
              }
            }
          }, {
            key: "getSlideClasses",
            value: function (e) {
              var l = this;
              return e.slideClass.split(" ").filter((function (e) {
                return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(l.params.slideClass)
              })).join(" ")
            }
          }, {
            key: "emitSlidesClasses",
            value: function () {
              var e = this;
              if (e.params._emitClasses && e.el) {
                var l = [];
                e.slides.forEach((function (a) {
                  var t = e.getSlideClasses(a);
                  l.push({
                    slideEl: a,
                    classNames: t
                  }), e.emit("_slideClass", a, t)
                })), e.emit("_slideClasses", l)
              }
            }
          }, {
            key: "slidesPerViewDynamic",
            value: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "current",
                l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                a = this,
                t = a.params,
                n = a.slides,
                r = a.slidesGrid,
                i = a.slidesSizesGrid,
                u = a.size,
                o = a.activeIndex,
                s = 1;
              if (t.centeredSlides) {
                for (var v, c = n[o].swiperSlideSize, b = o + 1; b < n.length; b += 1) n[b] && !v && (c += n[b].swiperSlideSize, s += 1, c > u && (v = !0));
                for (var d = o - 1; d >= 0; d -= 1) n[d] && !v && (c += n[d].swiperSlideSize, s += 1, c > u && (v = !0))
              } else if ("current" === e)
                for (var p = o + 1; p < n.length; p += 1) {
                  var f = l ? r[p] + i[p] - r[o] < u : r[p] - r[o] < u;
                  f && (s += 1)
                } else
                  for (var h = o - 1; h >= 0; h -= 1) {
                    var g = r[o] - r[h] < u;
                    g && (s += 1)
                  }
              return s
            }
          }, {
            key: "changeDirection",
            value: function (e, l) {
              void 0 === l && (l = !0);
              var a = this,
                t = a.params.direction;
              return e || (e = "horizontal" === t ? "vertical" : "horizontal"), e === t || "horizontal" !== e && "vertical" !== e || (a.$wrapperEl.removeClass("".concat(a.params.containerModifierClass).concat(t)), a.$wrapperEl.addClass("".concat(a.params.containerModifierClass).concat(e)), a.emitContainerClasses(), a.params.direction = e, a.slides.forEach((function (l) {
                "vertical" === e ? l.css({
                  width: ""
                }) : l.css({
                  height: ""
                })
              })), a.emit("changeDirection"), l && a.update()), a
            }
          }, {
            key: "update",
            value: function () {
              var e = S(t.default.mark((function e(l) {
                var a, n, r, i, u;
                return t.default.wrap((function (e) {
                  while (1) switch (e.prev = e.next) {
                    case 0:
                      if (i = function () {
                          var e = a.rtlTranslate ? -1 * a.translate : a.translate,
                            l = Math.min(Math.max(e, a.maxTranslate()), a.minTranslate());
                          a.setTranslate(l), a.updateActiveIndex(), a.updateSlidesClasses()
                        }, a = this, a && !a.destroyed) {
                        e.next = 4;
                        break
                      }
                      return e.abrupt("return");
                    case 4:
                      return n = a.snapGrid, r = a.params, e.next = 7, a.native.getRect();
                    case 7:
                      if (l = e.sent, l) {
                        e.next = 10;
                        break
                      }
                      return e.abrupt("return", !1);
                    case 10:
                      Object.assign(a, {
                        el: l,
                        $el: a.native
                      }), a.emit("beforeUpdate"), r.breakpoints && a.setBreakpoint(), a.updateSize(), a.updateSlides(), a.updateProgress(), a.updateSlidesClasses(), a.params.freeMode && a.params.freeMode.enabled ? (i(), a.params.autoHeight && a.updateAutoHeight()) : (u = ("auto" === a.params.slidesPerView || a.params.slidesPerView > 1) && a.isEnd && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0), u || i()), r.watchOverflow && n !== a.snapGrid && a.checkOverflow(), a.emit("update");
                    case 20:
                    case "end":
                      return e.stop()
                  }
                }), e, this)
              })));

              function l(l) {
                return e.apply(this, arguments)
              }
              return l
            }()
          }, {
            key: "mount",
            value: function () {
              var e = S(t.default.mark((function e(l) {
                var a;
                return t.default.wrap((function (e) {
                  while (1) switch (e.prev = e.next) {
                    case 0:
                      if (a = this, !a.mounted) {
                        e.next = 3;
                        break
                      }
                      return e.abrupt("return", !0);
                    case 3:
                      return e.next = 5, a.native.getRect();
                    case 5:
                      if (l = e.sent, l) {
                        e.next = 8;
                        break
                      }
                      return e.abrupt("return", !1);
                    case 8:
                      return a.emit("beforeMount"), Object.assign(a, {
                        $el: a.native,
                        el: l,
                        $wrapperEl: a.native,
                        wrapperEl: a.native,
                        mounted: !0
                      }), e.abrupt("return", !0);
                    case 11:
                    case "end":
                      return e.stop()
                  }
                }), e, this)
              })));

              function l(l) {
                return e.apply(this, arguments)
              }
              return l
            }()
          }, {
            key: "init",
            value: function () {
              var e = S(t.default.mark((function e(l) {
                var a, n;
                return t.default.wrap((function (e) {
                  while (1) switch (e.prev = e.next) {
                    case 0:
                      if (a = this, !a.initialized) {
                        e.next = 3;
                        break
                      }
                      return e.abrupt("return", a);
                    case 3:
                      return e.next = 5, a.mount(l);
                    case 5:
                      if (n = e.sent, !1 !== n) {
                        e.next = 8;
                        break
                      }
                      return e.abrupt("return", a);
                    case 8:
                      return a.emit("beforeInit"), a.addClasses(), a.params.loop && a.loopCreate(), a.updateSize(), a.updateSlides(), a.params.watchOverflow && a.checkOverflow(), a.params.grabCursor && a.enabled && a.setGrabCursor(), a.params.loop ? a.slideTo(a.params.initialSlide + a.loopedSlides, 0, a.params.runCallbacksOnInit, !1, !0) : a.slideTo(a.params.initialSlide, 0, a.params.runCallbacksOnInit, !1, !0), a.attachEvents(), a.initialized = !0, a.emit("init"), a.emit("afterInit"), e.abrupt("return", a);
                    case 21:
                    case "end":
                      return e.stop()
                  }
                }), e, this)
              })));

              function l(l) {
                return e.apply(this, arguments)
              }
              return l
            }()
          }, {
            key: "destroy",
            value: function () {
              var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                l = (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], this),
                a = l.params;
              l.$el, l.$wrapperEl, l.slides;
              return "undefined" === typeof l.params || l.destroyed || (l.emit("beforeDestroy"), l.initialized = !1, l.detachEvents(), a.loop && l.loopDestroy(), l.emit("destroy"), Object.keys(l.eventsListeners).forEach((function (e) {
                l.off(e)
              })), !1 !== e && (0, n.deleteProps)(l), l.destroyed = !0), null
            }
          }], [{
            key: "extendDefaults",
            value: function (e) {
              (0, n.extend)(j, e)
            }
          }, {
            key: "installModule",
            value: function (l) {
              e.prototype.__modules__ || (e.prototype.__modules__ = []);
              var a = e.prototype.__modules__;
              "function" === typeof l && a.indexOf(l) < 0 && a.push(l)
            }
          }, {
            key: "use",
            value: function (l) {
              return Array.isArray(l) ? (l.forEach((function (l) {
                return e.installModule(l)
              })), e) : (e.installModule(l), e)
            }
          }, {
            key: "extendedDefaults",
            get: function () {
              return j
            }
          }, {
            key: "defaults",
            get: function () {
              return d.default
            }
          }]), e
        }();
      Object.keys(M).forEach((function (e) {
        Object.keys(M[e]).forEach((function (l) {
          $.prototype[l] = M[e][l]
        }))
      }));
      var D = $;
      l.default = D
    },
    a24a: function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.initSwiper = i, l.mountSwiper = u;
      var t = r(a("35a5")),
        n = a("5efe");

      function r(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function i(e, l) {
        return new t.default(e, l)
      }

      function u(e, l) {
        var a = e.el,
          t = e.nextEl,
          r = e.prevEl,
          i = e.paginationEl,
          u = e.scrollbarEl,
          o = e.swiper;
        (0, n.needsNavigation)(l) && t && r && (o.params.navigation.nextEl = t, o.originalParams.navigation.nextEl = t, o.params.navigation.prevEl = r, o.originalParams.navigation.prevEl = r), (0, n.needsPagination)(l) && i && (o.params.pagination.el = i, o.originalParams.pagination.el = i), (0, n.needsScrollbar)(l) && u && (o.params.scrollbar.el = u, o.originalParams.scrollbar.el = u), o.init(a)
      }
    },
    a34a: function (e, l, a) {
      e.exports = a("bbdd")
    },
    a417: function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = void 0;
      var t = {
          url: "http://localhost:8080/nodejs22unh/"
        },
        n = t;
      l.default = n
    },
    a46d: function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = void 0;
      var t = [
          [{
            label: "市辖区",
            value: "1101"
          }],
          [{
            label: "市辖区",
            value: "1201"
          }],
          [{
            label: "石家庄市",
            value: "1301"
          }, {
            label: "唐山市",
            value: "1302"
          }, {
            label: "秦皇岛市",
            value: "1303"
          }, {
            label: "邯郸市",
            value: "1304"
          }, {
            label: "邢台市",
            value: "1305"
          }, {
            label: "保定市",
            value: "1306"
          }, {
            label: "张家口市",
            value: "1307"
          }, {
            label: "承德市",
            value: "1308"
          }, {
            label: "沧州市",
            value: "1309"
          }, {
            label: "廊坊市",
            value: "1310"
          }, {
            label: "衡水市",
            value: "1311"
          }],
          [{
            label: "太原市",
            value: "1401"
          }, {
            label: "大同市",
            value: "1402"
          }, {
            label: "阳泉市",
            value: "1403"
          }, {
            label: "长治市",
            value: "1404"
          }, {
            label: "晋城市",
            value: "1405"
          }, {
            label: "朔州市",
            value: "1406"
          }, {
            label: "晋中市",
            value: "1407"
          }, {
            label: "运城市",
            value: "1408"
          }, {
            label: "忻州市",
            value: "1409"
          }, {
            label: "临汾市",
            value: "1410"
          }, {
            label: "吕梁市",
            value: "1411"
          }],
          [{
            label: "呼和浩特市",
            value: "1501"
          }, {
            label: "包头市",
            value: "1502"
          }, {
            label: "乌海市",
            value: "1503"
          }, {
            label: "赤峰市",
            value: "1504"
          }, {
            label: "通辽市",
            value: "1505"
          }, {
            label: "鄂尔多斯市",
            value: "1506"
          }, {
            label: "呼伦贝尔市",
            value: "1507"
          }, {
            label: "巴彦淖尔市",
            value: "1508"
          }, {
            label: "乌兰察布市",
            value: "1509"
          }, {
            label: "兴安盟",
            value: "1522"
          }, {
            label: "锡林郭勒盟",
            value: "1525"
          }, {
            label: "阿拉善盟",
            value: "1529"
          }],
          [{
            label: "沈阳市",
            value: "2101"
          }, {
            label: "大连市",
            value: "2102"
          }, {
            label: "鞍山市",
            value: "2103"
          }, {
            label: "抚顺市",
            value: "2104"
          }, {
            label: "本溪市",
            value: "2105"
          }, {
            label: "丹东市",
            value: "2106"
          }, {
            label: "锦州市",
            value: "2107"
          }, {
            label: "营口市",
            value: "2108"
          }, {
            label: "阜新市",
            value: "2109"
          }, {
            label: "辽阳市",
            value: "2110"
          }, {
            label: "盘锦市",
            value: "2111"
          }, {
            label: "铁岭市",
            value: "2112"
          }, {
            label: "朝阳市",
            value: "2113"
          }, {
            label: "葫芦岛市",
            value: "2114"
          }],
          [{
            label: "长春市",
            value: "2201"
          }, {
            label: "吉林市",
            value: "2202"
          }, {
            label: "四平市",
            value: "2203"
          }, {
            label: "辽源市",
            value: "2204"
          }, {
            label: "通化市",
            value: "2205"
          }, {
            label: "白山市",
            value: "2206"
          }, {
            label: "松原市",
            value: "2207"
          }, {
            label: "白城市",
            value: "2208"
          }, {
            label: "延边朝鲜族自治州",
            value: "2224"
          }],
          [{
            label: "哈尔滨市",
            value: "2301"
          }, {
            label: "齐齐哈尔市",
            value: "2302"
          }, {
            label: "鸡西市",
            value: "2303"
          }, {
            label: "鹤岗市",
            value: "2304"
          }, {
            label: "双鸭山市",
            value: "2305"
          }, {
            label: "大庆市",
            value: "2306"
          }, {
            label: "伊春市",
            value: "2307"
          }, {
            label: "佳木斯市",
            value: "2308"
          }, {
            label: "七台河市",
            value: "2309"
          }, {
            label: "牡丹江市",
            value: "2310"
          }, {
            label: "黑河市",
            value: "2311"
          }, {
            label: "绥化市",
            value: "2312"
          }, {
            label: "大兴安岭地区",
            value: "2327"
          }],
          [{
            label: "市辖区",
            value: "3101"
          }],
          [{
            label: "南京市",
            value: "3201"
          }, {
            label: "无锡市",
            value: "3202"
          }, {
            label: "徐州市",
            value: "3203"
          }, {
            label: "常州市",
            value: "3204"
          }, {
            label: "苏州市",
            value: "3205"
          }, {
            label: "南通市",
            value: "3206"
          }, {
            label: "连云港市",
            value: "3207"
          }, {
            label: "淮安市",
            value: "3208"
          }, {
            label: "盐城市",
            value: "3209"
          }, {
            label: "扬州市",
            value: "3210"
          }, {
            label: "镇江市",
            value: "3211"
          }, {
            label: "泰州市",
            value: "3212"
          }, {
            label: "宿迁市",
            value: "3213"
          }],
          [{
            label: "杭州市",
            value: "3301"
          }, {
            label: "宁波市",
            value: "3302"
          }, {
            label: "温州市",
            value: "3303"
          }, {
            label: "嘉兴市",
            value: "3304"
          }, {
            label: "湖州市",
            value: "3305"
          }, {
            label: "绍兴市",
            value: "3306"
          }, {
            label: "金华市",
            value: "3307"
          }, {
            label: "衢州市",
            value: "3308"
          }, {
            label: "舟山市",
            value: "3309"
          }, {
            label: "台州市",
            value: "3310"
          }, {
            label: "丽水市",
            value: "3311"
          }],
          [{
            label: "合肥市",
            value: "3401"
          }, {
            label: "芜湖市",
            value: "3402"
          }, {
            label: "蚌埠市",
            value: "3403"
          }, {
            label: "淮南市",
            value: "3404"
          }, {
            label: "马鞍山市",
            value: "3405"
          }, {
            label: "淮北市",
            value: "3406"
          }, {
            label: "铜陵市",
            value: "3407"
          }, {
            label: "安庆市",
            value: "3408"
          }, {
            label: "黄山市",
            value: "3410"
          }, {
            label: "滁州市",
            value: "3411"
          }, {
            label: "阜阳市",
            value: "3412"
          }, {
            label: "宿州市",
            value: "3413"
          }, {
            label: "六安市",
            value: "3415"
          }, {
            label: "亳州市",
            value: "3416"
          }, {
            label: "池州市",
            value: "3417"
          }, {
            label: "宣城市",
            value: "3418"
          }],
          [{
            label: "福州市",
            value: "3501"
          }, {
            label: "厦门市",
            value: "3502"
          }, {
            label: "莆田市",
            value: "3503"
          }, {
            label: "三明市",
            value: "3504"
          }, {
            label: "泉州市",
            value: "3505"
          }, {
            label: "漳州市",
            value: "3506"
          }, {
            label: "南平市",
            value: "3507"
          }, {
            label: "龙岩市",
            value: "3508"
          }, {
            label: "宁德市",
            value: "3509"
          }],
          [{
            label: "南昌市",
            value: "3601"
          }, {
            label: "景德镇市",
            value: "3602"
          }, {
            label: "萍乡市",
            value: "3603"
          }, {
            label: "九江市",
            value: "3604"
          }, {
            label: "新余市",
            value: "3605"
          }, {
            label: "鹰潭市",
            value: "3606"
          }, {
            label: "赣州市",
            value: "3607"
          }, {
            label: "吉安市",
            value: "3608"
          }, {
            label: "宜春市",
            value: "3609"
          }, {
            label: "抚州市",
            value: "3610"
          }, {
            label: "上饶市",
            value: "3611"
          }],
          [{
            label: "济南市",
            value: "3701"
          }, {
            label: "青岛市",
            value: "3702"
          }, {
            label: "淄博市",
            value: "3703"
          }, {
            label: "枣庄市",
            value: "3704"
          }, {
            label: "东营市",
            value: "3705"
          }, {
            label: "烟台市",
            value: "3706"
          }, {
            label: "潍坊市",
            value: "3707"
          }, {
            label: "济宁市",
            value: "3708"
          }, {
            label: "泰安市",
            value: "3709"
          }, {
            label: "威海市",
            value: "3710"
          }, {
            label: "日照市",
            value: "3711"
          }, {
            label: "莱芜市",
            value: "3712"
          }, {
            label: "临沂市",
            value: "3713"
          }, {
            label: "德州市",
            value: "3714"
          }, {
            label: "聊城市",
            value: "3715"
          }, {
            label: "滨州市",
            value: "3716"
          }, {
            label: "菏泽市",
            value: "3717"
          }],
          [{
            label: "郑州市",
            value: "4101"
          }, {
            label: "开封市",
            value: "4102"
          }, {
            label: "洛阳市",
            value: "4103"
          }, {
            label: "平顶山市",
            value: "4104"
          }, {
            label: "安阳市",
            value: "4105"
          }, {
            label: "鹤壁市",
            value: "4106"
          }, {
            label: "新乡市",
            value: "4107"
          }, {
            label: "焦作市",
            value: "4108"
          }, {
            label: "濮阳市",
            value: "4109"
          }, {
            label: "许昌市",
            value: "4110"
          }, {
            label: "漯河市",
            value: "4111"
          }, {
            label: "三门峡市",
            value: "4112"
          }, {
            label: "南阳市",
            value: "4113"
          }, {
            label: "商丘市",
            value: "4114"
          }, {
            label: "信阳市",
            value: "4115"
          }, {
            label: "周口市",
            value: "4116"
          }, {
            label: "驻马店市",
            value: "4117"
          }, {
            label: "省直辖县级行政区划",
            value: "4190"
          }],
          [{
            label: "武汉市",
            value: "4201"
          }, {
            label: "黄石市",
            value: "4202"
          }, {
            label: "十堰市",
            value: "4203"
          }, {
            label: "宜昌市",
            value: "4205"
          }, {
            label: "襄阳市",
            value: "4206"
          }, {
            label: "鄂州市",
            value: "4207"
          }, {
            label: "荆门市",
            value: "4208"
          }, {
            label: "孝感市",
            value: "4209"
          }, {
            label: "荆州市",
            value: "4210"
          }, {
            label: "黄冈市",
            value: "4211"
          }, {
            label: "咸宁市",
            value: "4212"
          }, {
            label: "随州市",
            value: "4213"
          }, {
            label: "恩施土家族苗族自治州",
            value: "4228"
          }, {
            label: "省直辖县级行政区划",
            value: "4290"
          }],
          [{
            label: "长沙市",
            value: "4301"
          }, {
            label: "株洲市",
            value: "4302"
          }, {
            label: "湘潭市",
            value: "4303"
          }, {
            label: "衡阳市",
            value: "4304"
          }, {
            label: "邵阳市",
            value: "4305"
          }, {
            label: "岳阳市",
            value: "4306"
          }, {
            label: "常德市",
            value: "4307"
          }, {
            label: "张家界市",
            value: "4308"
          }, {
            label: "益阳市",
            value: "4309"
          }, {
            label: "郴州市",
            value: "4310"
          }, {
            label: "永州市",
            value: "4311"
          }, {
            label: "怀化市",
            value: "4312"
          }, {
            label: "娄底市",
            value: "4313"
          }, {
            label: "湘西土家族苗族自治州",
            value: "4331"
          }],
          [{
            label: "广州市",
            value: "4401"
          }, {
            label: "韶关市",
            value: "4402"
          }, {
            label: "深圳市",
            value: "4403"
          }, {
            label: "珠海市",
            value: "4404"
          }, {
            label: "汕头市",
            value: "4405"
          }, {
            label: "佛山市",
            value: "4406"
          }, {
            label: "江门市",
            value: "4407"
          }, {
            label: "湛江市",
            value: "4408"
          }, {
            label: "茂名市",
            value: "4409"
          }, {
            label: "肇庆市",
            value: "4412"
          }, {
            label: "惠州市",
            value: "4413"
          }, {
            label: "梅州市",
            value: "4414"
          }, {
            label: "汕尾市",
            value: "4415"
          }, {
            label: "河源市",
            value: "4416"
          }, {
            label: "阳江市",
            value: "4417"
          }, {
            label: "清远市",
            value: "4418"
          }, {
            label: "东莞市",
            value: "4419"
          }, {
            label: "中山市",
            value: "4420"
          }, {
            label: "潮州市",
            value: "4451"
          }, {
            label: "揭阳市",
            value: "4452"
          }, {
            label: "云浮市",
            value: "4453"
          }],
          [{
            label: "南宁市",
            value: "4501"
          }, {
            label: "柳州市",
            value: "4502"
          }, {
            label: "桂林市",
            value: "4503"
          }, {
            label: "梧州市",
            value: "4504"
          }, {
            label: "北海市",
            value: "4505"
          }, {
            label: "防城港市",
            value: "4506"
          }, {
            label: "钦州市",
            value: "4507"
          }, {
            label: "贵港市",
            value: "4508"
          }, {
            label: "玉林市",
            value: "4509"
          }, {
            label: "百色市",
            value: "4510"
          }, {
            label: "贺州市",
            value: "4511"
          }, {
            label: "河池市",
            value: "4512"
          }, {
            label: "来宾市",
            value: "4513"
          }, {
            label: "崇左市",
            value: "4514"
          }],
          [{
            label: "海口市",
            value: "4601"
          }, {
            label: "三亚市",
            value: "4602"
          }, {
            label: "三沙市",
            value: "4603"
          }, {
            label: "儋州市",
            value: "4604"
          }, {
            label: "省直辖县级行政区划",
            value: "4690"
          }],
          [{
            label: "市辖区",
            value: "5001"
          }, {
            label: "县",
            value: "5002"
          }],
          [{
            label: "成都市",
            value: "5101"
          }, {
            label: "自贡市",
            value: "5103"
          }, {
            label: "攀枝花市",
            value: "5104"
          }, {
            label: "泸州市",
            value: "5105"
          }, {
            label: "德阳市",
            value: "5106"
          }, {
            label: "绵阳市",
            value: "5107"
          }, {
            label: "广元市",
            value: "5108"
          }, {
            label: "遂宁市",
            value: "5109"
          }, {
            label: "内江市",
            value: "5110"
          }, {
            label: "乐山市",
            value: "5111"
          }, {
            label: "南充市",
            value: "5113"
          }, {
            label: "眉山市",
            value: "5114"
          }, {
            label: "宜宾市",
            value: "5115"
          }, {
            label: "广安市",
            value: "5116"
          }, {
            label: "达州市",
            value: "5117"
          }, {
            label: "雅安市",
            value: "5118"
          }, {
            label: "巴中市",
            value: "5119"
          }, {
            label: "资阳市",
            value: "5120"
          }, {
            label: "阿坝藏族羌族自治州",
            value: "5132"
          }, {
            label: "甘孜藏族自治州",
            value: "5133"
          }, {
            label: "凉山彝族自治州",
            value: "5134"
          }],
          [{
            label: "贵阳市",
            value: "5201"
          }, {
            label: "六盘水市",
            value: "5202"
          }, {
            label: "遵义市",
            value: "5203"
          }, {
            label: "安顺市",
            value: "5204"
          }, {
            label: "毕节市",
            value: "5205"
          }, {
            label: "铜仁市",
            value: "5206"
          }, {
            label: "黔西南布依族苗族自治州",
            value: "5223"
          }, {
            label: "黔东南苗族侗族自治州",
            value: "5226"
          }, {
            label: "黔南布依族苗族自治州",
            value: "5227"
          }],
          [{
            label: "昆明市",
            value: "5301"
          }, {
            label: "曲靖市",
            value: "5303"
          }, {
            label: "玉溪市",
            value: "5304"
          }, {
            label: "保山市",
            value: "5305"
          }, {
            label: "昭通市",
            value: "5306"
          }, {
            label: "丽江市",
            value: "5307"
          }, {
            label: "普洱市",
            value: "5308"
          }, {
            label: "临沧市",
            value: "5309"
          }, {
            label: "楚雄彝族自治州",
            value: "5323"
          }, {
            label: "红河哈尼族彝族自治州",
            value: "5325"
          }, {
            label: "文山壮族苗族自治州",
            value: "5326"
          }, {
            label: "西双版纳傣族自治州",
            value: "5328"
          }, {
            label: "大理白族自治州",
            value: "5329"
          }, {
            label: "德宏傣族景颇族自治州",
            value: "5331"
          }, {
            label: "怒江傈僳族自治州",
            value: "5333"
          }, {
            label: "迪庆藏族自治州",
            value: "5334"
          }],
          [{
            label: "拉萨市",
            value: "5401"
          }, {
            label: "日喀则市",
            value: "5402"
          }, {
            label: "昌都市",
            value: "5403"
          }, {
            label: "林芝市",
            value: "5404"
          }, {
            label: "山南市",
            value: "5405"
          }, {
            label: "那曲地区",
            value: "5424"
          }, {
            label: "阿里地区",
            value: "5425"
          }],
          [{
            label: "西安市",
            value: "6101"
          }, {
            label: "铜川市",
            value: "6102"
          }, {
            label: "宝鸡市",
            value: "6103"
          }, {
            label: "咸阳市",
            value: "6104"
          }, {
            label: "渭南市",
            value: "6105"
          }, {
            label: "延安市",
            value: "6106"
          }, {
            label: "汉中市",
            value: "6107"
          }, {
            label: "榆林市",
            value: "6108"
          }, {
            label: "安康市",
            value: "6109"
          }, {
            label: "商洛市",
            value: "6110"
          }],
          [{
            label: "兰州市",
            value: "6201"
          }, {
            label: "嘉峪关市",
            value: "6202"
          }, {
            label: "金昌市",
            value: "6203"
          }, {
            label: "白银市",
            value: "6204"
          }, {
            label: "天水市",
            value: "6205"
          }, {
            label: "武威市",
            value: "6206"
          }, {
            label: "张掖市",
            value: "6207"
          }, {
            label: "平凉市",
            value: "6208"
          }, {
            label: "酒泉市",
            value: "6209"
          }, {
            label: "庆阳市",
            value: "6210"
          }, {
            label: "定西市",
            value: "6211"
          }, {
            label: "陇南市",
            value: "6212"
          }, {
            label: "临夏回族自治州",
            value: "6229"
          }, {
            label: "甘南藏族自治州",
            value: "6230"
          }],
          [{
            label: "西宁市",
            value: "6301"
          }, {
            label: "海东市",
            value: "6302"
          }, {
            label: "海北藏族自治州",
            value: "6322"
          }, {
            label: "黄南藏族自治州",
            value: "6323"
          }, {
            label: "海南藏族自治州",
            value: "6325"
          }, {
            label: "果洛藏族自治州",
            value: "6326"
          }, {
            label: "玉树藏族自治州",
            value: "6327"
          }, {
            label: "海西蒙古族藏族自治州",
            value: "6328"
          }],
          [{
            label: "银川市",
            value: "6401"
          }, {
            label: "石嘴山市",
            value: "6402"
          }, {
            label: "吴忠市",
            value: "6403"
          }, {
            label: "固原市",
            value: "6404"
          }, {
            label: "中卫市",
            value: "6405"
          }],
          [{
            label: "乌鲁木齐市",
            value: "6501"
          }, {
            label: "克拉玛依市",
            value: "6502"
          }, {
            label: "吐鲁番市",
            value: "6504"
          }, {
            label: "哈密市",
            value: "6505"
          }, {
            label: "昌吉回族自治州",
            value: "6523"
          }, {
            label: "博尔塔拉蒙古自治州",
            value: "6527"
          }, {
            label: "巴音郭楞蒙古自治州",
            value: "6528"
          }, {
            label: "阿克苏地区",
            value: "6529"
          }, {
            label: "克孜勒苏柯尔克孜自治州",
            value: "6530"
          }, {
            label: "喀什地区",
            value: "6531"
          }, {
            label: "和田地区",
            value: "6532"
          }, {
            label: "伊犁哈萨克自治州",
            value: "6540"
          }, {
            label: "塔城地区",
            value: "6542"
          }, {
            label: "阿勒泰地区",
            value: "6543"
          }, {
            label: "自治区直辖县级行政区划",
            value: "6590"
          }],
          [{
            label: "台北",
            value: "6601"
          }, {
            label: "高雄",
            value: "6602"
          }, {
            label: "基隆",
            value: "6603"
          }, {
            label: "台中",
            value: "6604"
          }, {
            label: "台南",
            value: "6605"
          }, {
            label: "新竹",
            value: "6606"
          }, {
            label: "嘉义",
            value: "6607"
          }, {
            label: "宜兰",
            value: "6608"
          }, {
            label: "桃园",
            value: "6609"
          }, {
            label: "苗栗",
            value: "6610"
          }, {
            label: "彰化",
            value: "6611"
          }, {
            label: "南投",
            value: "6612"
          }, {
            label: "云林",
            value: "6613"
          }, {
            label: "屏东",
            value: "6614"
          }, {
            label: "台东",
            value: "6615"
          }, {
            label: "花莲",
            value: "6616"
          }, {
            label: "澎湖",
            value: "6617"
          }],
          [{
            label: "香港岛",
            value: "6701"
          }, {
            label: "九龙",
            value: "6702"
          }, {
            label: "新界",
            value: "6703"
          }],
          [{
            label: "澳门半岛",
            value: "6801"
          }, {
            label: "氹仔岛",
            value: "6802"
          }, {
            label: "路环岛",
            value: "6803"
          }, {
            label: "路氹城",
            value: "6804"
          }]
        ],
        n = t;
      l.default = n
    },
    a548: function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = o;
      var t = n(a("a34a"));

      function n(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function r(e) {
        return r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
          return typeof e
        } : function (e) {
          return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, r(e)
      }

      function i(e, l, a, t, n, r, i) {
        try {
          var u = e[r](i),
            o = u.value
        } catch (s) {
          return void a(s)
        }
        u.done ? l(o) : Promise.resolve(o).then(t, n)
      }

      function u(e) {
        return function () {
          var l = this,
            a = arguments;
          return new Promise((function (t, n) {
            var r = e.apply(l, a);

            function u(e) {
              i(r, t, n, u, o, "next", e)
            }

            function o(e) {
              i(r, t, n, u, o, "throw", e)
            }
            u(void 0)
          }))
        }
      }

      function o(e) {
        var l, a = e.swiper,
          n = e.extendParams,
          i = e.on;

        function o(e) {
          return s.apply(this, arguments)
        }

        function s() {
          return s = u(t.default.mark((function e(l) {
            var n, r, i, u, o, s, v, c, b, d, p, f, h, g, m, y, w, _, S, x, T, E, O, P, C, k;
            return t.default.wrap((function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  if (T = function () {
                      a.updateSlides(), a.updateProgress(), a.updateSlidesClasses(), a.lazy && a.params.lazy.enabled && a.lazy.load()
                    }, n = a.params, r = n.slidesPerView, i = n.slidesPerGroup, u = n.centeredSlides, o = a.params.virtual, s = o.addSlidesBefore, v = o.addSlidesAfter, c = a.virtual, b = c.from, d = c.to, p = c.slides, f = c.slidesGrid, h = c.offset, a.params.cssMode || a.updateActiveIndex(), g = a.activeIndex || 0, m = a.rtlTranslate ? "right" : a.isHorizontal() ? "left" : "top", u ? (y = Math.floor(r / 2) + i + v, w = Math.floor(r / 2) + i + s) : (y = r + (i - 1) + v, w = i + s), _ = Math.max((g || 0) - w, 0), S = Math.min((g || 0) + y, p.length - 1), x = (a.slidesGrid[_] || 0) - (a.slidesGrid[0] || 0), Object.assign(a.virtual, {
                      from: _,
                      to: S,
                      offset: x,
                      slidesGrid: a.slidesGrid
                    }), b !== _ || d !== S || l) {
                    e.next = 16;
                    break
                  }
                  return a.slidesGrid !== f && x !== h && a.slides.css(m, "".concat(x, "px")), a.updateProgress(), e.abrupt("return");
                case 16:
                  if (!a.params.virtual.renderExternal) {
                    e.next = 20;
                    break
                  }
                  return a.params.virtual.renderExternal.call(a, {
                    offset: x,
                    from: _,
                    to: S,
                    slides: function () {
                      var e = [];
                      if ("keep" == a.params.virtual.type)
                        for (var l = 0; l < _; l += 1) e.push("");
                      for (var t = _; t <= S; t += 1) e.push(p[t]);
                      return e
                    }()
                  }), a.params.virtual.renderExternalUpdate && T(), e.abrupt("return");
                case 20:
                  if (E = [], O = [], l) a.$wrapperEl.find(".".concat(a.params.slideClass)).remove();
                  else
                    for (P = function (e) {
                        (e < _ || e > S) && (a.virtualList.splice(a.virtualList.findIndex((function (l) {
                          return l == p[e]
                        })), 1), a.virtualIndexList.splice(a.virtualIndexList.findIndex((function (l) {
                          return l == e
                        })), 1))
                      }, C = b; C <= d; C += 1) P(C);
                  for (k = 0; k < p.length; k += 1) k >= _ && k <= S && ("undefined" === typeof d || l ? O.push(k) : (k > d && O.push(k), k < b && E.push(k)));
                  O.forEach((function (e) {
                    a.virtualList.push(p[e]), a.virtualIndexList.push(e)
                  })), E.sort((function (e, l) {
                    return l - e
                  })).forEach((function (e) {
                    a.virtualList.unshift(p[e]), a.virtualIndexList.unshift(e)
                  })), a.native.emit("input", [a.virtualList]), T();
                case 28:
                case "end":
                  return e.stop()
              }
            }), e)
          }))), s.apply(this, arguments)
        }

        function v(e) {
          if ("object" === r(e) && "length" in e)
            for (var l = 0; l < e.length; l += 1) e[l] && a.virtual.slides.push(e[l]);
          else a.virtual.slides.push(e);
          o(!0)
        }

        function c(e) {
          var l = a.activeIndex,
            t = l + 1,
            n = 1;
          if (Array.isArray(e)) {
            for (var r = 0; r < e.length; r += 1) e[r] && a.virtual.slides.unshift(e[r]);
            t = l + e.length, n = e.length
          } else a.virtual.slides.unshift(e);
          if (a.params.virtual.cache) {
            var i = a.virtual.cache,
              u = {};
            Object.keys(i).forEach((function (e) {
              var l = i[e],
                a = l.attr("data-swiper-slide-index");
              a && l.attr("data-swiper-slide-index", parseInt(a, 10) + n), u[parseInt(e, 10) + n] = l
            })), a.virtual.cache = u
          }
          o(!0), a.slideTo(t, 0)
        }

        function b(e) {
          if ("undefined" !== typeof e && null !== e) {
            var l = a.activeIndex;
            if (Array.isArray(e))
              for (var t = e.length - 1; t >= 0; t -= 1) a.virtual.slides.splice(e[t], 1), a.params.virtual.cache && delete a.virtual.cache[e[t]], e[t] < l && (l -= 1), l = Math.max(l, 0);
            else a.virtual.slides.splice(e, 1), a.params.virtual.cache && delete a.virtual.cache[e], e < l && (l -= 1), l = Math.max(l, 0);
            o(!0), a.slideTo(l, 0)
          }
        }

        function d() {
          a.virtual.slides = [], a.params.virtual.cache && (a.virtual.cache = {}), o(!0), a.slideTo(0, 0)
        }
        n({
          virtual: {
            enabled: !1,
            slides: [],
            cache: !0,
            renderSlide: null,
            renderExternal: null,
            renderExternalUpdate: !0,
            addSlidesBefore: 0,
            addSlidesAfter: 0
          }
        }), a.virtual = {
          cache: {},
          from: void 0,
          to: void 0,
          slides: [],
          offset: 0,
          slidesGrid: []
        }, i("beforeInit", (function () {
          a.params.virtual.enabled && (a.virtual.slides = a.params.virtual.slides, a.classNames.push("".concat(a.params.containerModifierClass, "virtual")), a.params.watchSlidesProgress = !0, a.originalParams.watchSlidesProgress = !0, a.params.initialSlide || o())
        })), i("setTranslate", u(t.default.mark((function e() {
          return t.default.wrap((function (e) {
            while (1) switch (e.prev = e.next) {
              case 0:
                if (a.params.virtual.enabled) {
                  e.next = 2;
                  break
                }
                return e.abrupt("return");
              case 2:
                a.params.cssMode && !a._immediateVirtual ? (clearTimeout(l), l = setTimeout((function () {
                  o()
                }), 100)) : (console.log("update=========="), clearTimeout(l), l = setTimeout((function () {
                  o()
                }), 100));
              case 3:
              case "end":
                return e.stop()
            }
          }), e)
        })))), Object.assign(a.virtual, {
          appendSlide: v,
          prependSlide: c,
          removeSlide: b,
          removeAllSlides: d,
          update: o
        })
      }
    },
    a549: function (e, l, a) {
      "use strict";

      function t(e) {
        var l = e.swiper,
          a = (e.extendParams, e.on);
        a("setTransition", (function (e, a) {
          l.params.willChange && ("slide" != l.params.effect && "cube" != l.params.effect && "coverflow" != l.params.effect && "panorama" != l.params.effect || l.$wrapperEl.willChange("transform"))
        })), a("transitionEnd", (function (e, a) {
          l.params.willChange && (l.$wrapperEl.willChange("auto"), l.slides.forEach((function (e) {
            e.$itemEl.willChange("auto")
          })))
        }))
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = t
    },
    a5f7: function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = r;
      var t = a("d7bd");

      function n(e) {
        return n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
          return typeof e
        } : function (e) {
          return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, n(e)
      }

      function r(e, l) {
        return function () {
          var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = Object.keys(a)[0],
            i = a[r];
          "object" === n(i) && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 && !0 === e[r] && (e[r] = {
            auto: !0
          }), r in e && "enabled" in i ? (!0 === e[r] && (e[r] = {
            enabled: !0
          }), "object" !== n(e[r]) || "enabled" in e[r] || (e[r].enabled = !0), e[r] || (e[r] = {
            enabled: !1
          }), (0, t.extend)(l, a)) : (0, t.extend)(l, a)) : (0, t.extend)(l, a)
        }
      }
    },
    aa5d: function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = void 0;
      var t = [
          [
            [{
              label: "东城区",
              value: "110101"
            }, {
              label: "西城区",
              value: "110102"
            }, {
              label: "朝阳区",
              value: "110105"
            }, {
              label: "丰台区",
              value: "110106"
            }, {
              label: "石景山区",
              value: "110107"
            }, {
              label: "海淀区",
              value: "110108"
            }, {
              label: "门头沟区",
              value: "110109"
            }, {
              label: "房山区",
              value: "110111"
            }, {
              label: "通州区",
              value: "110112"
            }, {
              label: "顺义区",
              value: "110113"
            }, {
              label: "昌平区",
              value: "110114"
            }, {
              label: "大兴区",
              value: "110115"
            }, {
              label: "怀柔区",
              value: "110116"
            }, {
              label: "平谷区",
              value: "110117"
            }, {
              label: "密云区",
              value: "110118"
            }, {
              label: "延庆区",
              value: "110119"
            }]
          ],
          [
            [{
              label: "和平区",
              value: "120101"
            }, {
              label: "河东区",
              value: "120102"
            }, {
              label: "河西区",
              value: "120103"
            }, {
              label: "南开区",
              value: "120104"
            }, {
              label: "河北区",
              value: "120105"
            }, {
              label: "红桥区",
              value: "120106"
            }, {
              label: "东丽区",
              value: "120110"
            }, {
              label: "西青区",
              value: "120111"
            }, {
              label: "津南区",
              value: "120112"
            }, {
              label: "北辰区",
              value: "120113"
            }, {
              label: "武清区",
              value: "120114"
            }, {
              label: "宝坻区",
              value: "120115"
            }, {
              label: "滨海新区",
              value: "120116"
            }, {
              label: "宁河区",
              value: "120117"
            }, {
              label: "静海区",
              value: "120118"
            }, {
              label: "蓟州区",
              value: "120119"
            }]
          ],
          [
            [{
              label: "长安区",
              value: "130102"
            }, {
              label: "桥西区",
              value: "130104"
            }, {
              label: "新华区",
              value: "130105"
            }, {
              label: "井陉矿区",
              value: "130107"
            }, {
              label: "裕华区",
              value: "130108"
            }, {
              label: "藁城区",
              value: "130109"
            }, {
              label: "鹿泉区",
              value: "130110"
            }, {
              label: "栾城区",
              value: "130111"
            }, {
              label: "井陉县",
              value: "130121"
            }, {
              label: "正定县",
              value: "130123"
            }, {
              label: "行唐县",
              value: "130125"
            }, {
              label: "灵寿县",
              value: "130126"
            }, {
              label: "高邑县",
              value: "130127"
            }, {
              label: "深泽县",
              value: "130128"
            }, {
              label: "赞皇县",
              value: "130129"
            }, {
              label: "无极县",
              value: "130130"
            }, {
              label: "平山县",
              value: "130131"
            }, {
              label: "元氏县",
              value: "130132"
            }, {
              label: "赵县",
              value: "130133"
            }, {
              label: "石家庄高新技术产业开发区",
              value: "130171"
            }, {
              label: "石家庄循环化工园区",
              value: "130172"
            }, {
              label: "辛集市",
              value: "130181"
            }, {
              label: "晋州市",
              value: "130183"
            }, {
              label: "新乐市",
              value: "130184"
            }],
            [{
              label: "路南区",
              value: "130202"
            }, {
              label: "路北区",
              value: "130203"
            }, {
              label: "古冶区",
              value: "130204"
            }, {
              label: "开平区",
              value: "130205"
            }, {
              label: "丰南区",
              value: "130207"
            }, {
              label: "丰润区",
              value: "130208"
            }, {
              label: "曹妃甸区",
              value: "130209"
            }, {
              label: "滦县",
              value: "130223"
            }, {
              label: "滦南县",
              value: "130224"
            }, {
              label: "乐亭县",
              value: "130225"
            }, {
              label: "迁西县",
              value: "130227"
            }, {
              label: "玉田县",
              value: "130229"
            }, {
              label: "唐山市芦台经济技术开发区",
              value: "130271"
            }, {
              label: "唐山市汉沽管理区",
              value: "130272"
            }, {
              label: "唐山高新技术产业开发区",
              value: "130273"
            }, {
              label: "河北唐山海港经济开发区",
              value: "130274"
            }, {
              label: "遵化市",
              value: "130281"
            }, {
              label: "迁安市",
              value: "130283"
            }],
            [{
              label: "海港区",
              value: "130302"
            }, {
              label: "山海关区",
              value: "130303"
            }, {
              label: "北戴河区",
              value: "130304"
            }, {
              label: "抚宁区",
              value: "130306"
            }, {
              label: "青龙满族自治县",
              value: "130321"
            }, {
              label: "昌黎县",
              value: "130322"
            }, {
              label: "卢龙县",
              value: "130324"
            }, {
              label: "秦皇岛市经济技术开发区",
              value: "130371"
            }, {
              label: "北戴河新区",
              value: "130372"
            }],
            [{
              label: "邯山区",
              value: "130402"
            }, {
              label: "丛台区",
              value: "130403"
            }, {
              label: "复兴区",
              value: "130404"
            }, {
              label: "峰峰矿区",
              value: "130406"
            }, {
              label: "肥乡区",
              value: "130407"
            }, {
              label: "永年区",
              value: "130408"
            }, {
              label: "临漳县",
              value: "130423"
            }, {
              label: "成安县",
              value: "130424"
            }, {
              label: "大名县",
              value: "130425"
            }, {
              label: "涉县",
              value: "130426"
            }, {
              label: "磁县",
              value: "130427"
            }, {
              label: "邱县",
              value: "130430"
            }, {
              label: "鸡泽县",
              value: "130431"
            }, {
              label: "广平县",
              value: "130432"
            }, {
              label: "馆陶县",
              value: "130433"
            }, {
              label: "魏县",
              value: "130434"
            }, {
              label: "曲周县",
              value: "130435"
            }, {
              label: "邯郸经济技术开发区",
              value: "130471"
            }, {
              label: "邯郸冀南新区",
              value: "130473"
            }, {
              label: "武安市",
              value: "130481"
            }],
            [{
              label: "桥东区",
              value: "130502"
            }, {
              label: "桥西区",
              value: "130503"
            }, {
              label: "邢台县",
              value: "130521"
            }, {
              label: "临城县",
              value: "130522"
            }, {
              label: "内丘县",
              value: "130523"
            }, {
              label: "柏乡县",
              value: "130524"
            }, {
              label: "隆尧县",
              value: "130525"
            }, {
              label: "任县",
              value: "130526"
            }, {
              label: "南和县",
              value: "130527"
            }, {
              label: "宁晋县",
              value: "130528"
            }, {
              label: "巨鹿县",
              value: "130529"
            }, {
              label: "新河县",
              value: "130530"
            }, {
              label: "广宗县",
              value: "130531"
            }, {
              label: "平乡县",
              value: "130532"
            }, {
              label: "威县",
              value: "130533"
            }, {
              label: "清河县",
              value: "130534"
            }, {
              label: "临西县",
              value: "130535"
            }, {
              label: "河北邢台经济开发区",
              value: "130571"
            }, {
              label: "南宫市",
              value: "130581"
            }, {
              label: "沙河市",
              value: "130582"
            }],
            [{
              label: "竞秀区",
              value: "130602"
            }, {
              label: "莲池区",
              value: "130606"
            }, {
              label: "满城区",
              value: "130607"
            }, {
              label: "清苑区",
              value: "130608"
            }, {
              label: "徐水区",
              value: "130609"
            }, {
              label: "涞水县",
              value: "130623"
            }, {
              label: "阜平县",
              value: "130624"
            }, {
              label: "定兴县",
              value: "130626"
            }, {
              label: "唐县",
              value: "130627"
            }, {
              label: "高阳县",
              value: "130628"
            }, {
              label: "容城县",
              value: "130629"
            }, {
              label: "涞源县",
              value: "130630"
            }, {
              label: "望都县",
              value: "130631"
            }, {
              label: "安新县",
              value: "130632"
            }, {
              label: "易县",
              value: "130633"
            }, {
              label: "曲阳县",
              value: "130634"
            }, {
              label: "蠡县",
              value: "130635"
            }, {
              label: "顺平县",
              value: "130636"
            }, {
              label: "博野县",
              value: "130637"
            }, {
              label: "雄县",
              value: "130638"
            }, {
              label: "保定高新技术产业开发区",
              value: "130671"
            }, {
              label: "保定白沟新城",
              value: "130672"
            }, {
              label: "涿州市",
              value: "130681"
            }, {
              label: "定州市",
              value: "130682"
            }, {
              label: "安国市",
              value: "130683"
            }, {
              label: "高碑店市",
              value: "130684"
            }],
            [{
              label: "桥东区",
              value: "130702"
            }, {
              label: "桥西区",
              value: "130703"
            }, {
              label: "宣化区",
              value: "130705"
            }, {
              label: "下花园区",
              value: "130706"
            }, {
              label: "万全区",
              value: "130708"
            }, {
              label: "崇礼区",
              value: "130709"
            }, {
              label: "张北县",
              value: "130722"
            }, {
              label: "康保县",
              value: "130723"
            }, {
              label: "沽源县",
              value: "130724"
            }, {
              label: "尚义县",
              value: "130725"
            }, {
              label: "蔚县",
              value: "130726"
            }, {
              label: "阳原县",
              value: "130727"
            }, {
              label: "怀安县",
              value: "130728"
            }, {
              label: "怀来县",
              value: "130730"
            }, {
              label: "涿鹿县",
              value: "130731"
            }, {
              label: "赤城县",
              value: "130732"
            }, {
              label: "张家口市高新技术产业开发区",
              value: "130771"
            }, {
              label: "张家口市察北管理区",
              value: "130772"
            }, {
              label: "张家口市塞北管理区",
              value: "130773"
            }],
            [{
              label: "双桥区",
              value: "130802"
            }, {
              label: "双滦区",
              value: "130803"
            }, {
              label: "鹰手营子矿区",
              value: "130804"
            }, {
              label: "承德县",
              value: "130821"
            }, {
              label: "兴隆县",
              value: "130822"
            }, {
              label: "滦平县",
              value: "130824"
            }, {
              label: "隆化县",
              value: "130825"
            }, {
              label: "丰宁满族自治县",
              value: "130826"
            }, {
              label: "宽城满族自治县",
              value: "130827"
            }, {
              label: "围场满族蒙古族自治县",
              value: "130828"
            }, {
              label: "承德高新技术产业开发区",
              value: "130871"
            }, {
              label: "平泉市",
              value: "130881"
            }],
            [{
              label: "新华区",
              value: "130902"
            }, {
              label: "运河区",
              value: "130903"
            }, {
              label: "沧县",
              value: "130921"
            }, {
              label: "青县",
              value: "130922"
            }, {
              label: "东光县",
              value: "130923"
            }, {
              label: "海兴县",
              value: "130924"
            }, {
              label: "盐山县",
              value: "130925"
            }, {
              label: "肃宁县",
              value: "130926"
            }, {
              label: "南皮县",
              value: "130927"
            }, {
              label: "吴桥县",
              value: "130928"
            }, {
              label: "献县",
              value: "130929"
            }, {
              label: "孟村回族自治县",
              value: "130930"
            }, {
              label: "河北沧州经济开发区",
              value: "130971"
            }, {
              label: "沧州高新技术产业开发区",
              value: "130972"
            }, {
              label: "沧州渤海新区",
              value: "130973"
            }, {
              label: "泊头市",
              value: "130981"
            }, {
              label: "任丘市",
              value: "130982"
            }, {
              label: "黄骅市",
              value: "130983"
            }, {
              label: "河间市",
              value: "130984"
            }],
            [{
              label: "安次区",
              value: "131002"
            }, {
              label: "广阳区",
              value: "131003"
            }, {
              label: "固安县",
              value: "131022"
            }, {
              label: "永清县",
              value: "131023"
            }, {
              label: "香河县",
              value: "131024"
            }, {
              label: "大城县",
              value: "131025"
            }, {
              label: "文安县",
              value: "131026"
            }, {
              label: "大厂回族自治县",
              value: "131028"
            }, {
              label: "廊坊经济技术开发区",
              value: "131071"
            }, {
              label: "霸州市",
              value: "131081"
            }, {
              label: "三河市",
              value: "131082"
            }],
            [{
              label: "桃城区",
              value: "131102"
            }, {
              label: "冀州区",
              value: "131103"
            }, {
              label: "枣强县",
              value: "131121"
            }, {
              label: "武邑县",
              value: "131122"
            }, {
              label: "武强县",
              value: "131123"
            }, {
              label: "饶阳县",
              value: "131124"
            }, {
              label: "安平县",
              value: "131125"
            }, {
              label: "故城县",
              value: "131126"
            }, {
              label: "景县",
              value: "131127"
            }, {
              label: "阜城县",
              value: "131128"
            }, {
              label: "河北衡水经济开发区",
              value: "131171"
            }, {
              label: "衡水滨湖新区",
              value: "131172"
            }, {
              label: "深州市",
              value: "131182"
            }]
          ],
          [
            [{
              label: "小店区",
              value: "140105"
            }, {
              label: "迎泽区",
              value: "140106"
            }, {
              label: "杏花岭区",
              value: "140107"
            }, {
              label: "尖草坪区",
              value: "140108"
            }, {
              label: "万柏林区",
              value: "140109"
            }, {
              label: "晋源区",
              value: "140110"
            }, {
              label: "清徐县",
              value: "140121"
            }, {
              label: "阳曲县",
              value: "140122"
            }, {
              label: "娄烦县",
              value: "140123"
            }, {
              label: "山西转型综合改革示范区",
              value: "140171"
            }, {
              label: "古交市",
              value: "140181"
            }],
            [{
              label: "城区",
              value: "140202"
            }, {
              label: "矿区",
              value: "140203"
            }, {
              label: "南郊区",
              value: "140211"
            }, {
              label: "新荣区",
              value: "140212"
            }, {
              label: "阳高县",
              value: "140221"
            }, {
              label: "天镇县",
              value: "140222"
            }, {
              label: "广灵县",
              value: "140223"
            }, {
              label: "灵丘县",
              value: "140224"
            }, {
              label: "浑源县",
              value: "140225"
            }, {
              label: "左云县",
              value: "140226"
            }, {
              label: "大同县",
              value: "140227"
            }, {
              label: "山西大同经济开发区",
              value: "140271"
            }],
            [{
              label: "城区",
              value: "140302"
            }, {
              label: "矿区",
              value: "140303"
            }, {
              label: "郊区",
              value: "140311"
            }, {
              label: "平定县",
              value: "140321"
            }, {
              label: "盂县",
              value: "140322"
            }, {
              label: "山西阳泉经济开发区",
              value: "140371"
            }],
            [{
              label: "城区",
              value: "140402"
            }, {
              label: "郊区",
              value: "140411"
            }, {
              label: "长治县",
              value: "140421"
            }, {
              label: "襄垣县",
              value: "140423"
            }, {
              label: "屯留县",
              value: "140424"
            }, {
              label: "平顺县",
              value: "140425"
            }, {
              label: "黎城县",
              value: "140426"
            }, {
              label: "壶关县",
              value: "140427"
            }, {
              label: "长子县",
              value: "140428"
            }, {
              label: "武乡县",
              value: "140429"
            }, {
              label: "沁县",
              value: "140430"
            }, {
              label: "沁源县",
              value: "140431"
            }, {
              label: "山西长治高新技术产业园区",
              value: "140471"
            }, {
              label: "潞城市",
              value: "140481"
            }],
            [{
              label: "城区",
              value: "140502"
            }, {
              label: "沁水县",
              value: "140521"
            }, {
              label: "阳城县",
              value: "140522"
            }, {
              label: "陵川县",
              value: "140524"
            }, {
              label: "泽州县",
              value: "140525"
            }, {
              label: "高平市",
              value: "140581"
            }],
            [{
              label: "朔城区",
              value: "140602"
            }, {
              label: "平鲁区",
              value: "140603"
            }, {
              label: "山阴县",
              value: "140621"
            }, {
              label: "应县",
              value: "140622"
            }, {
              label: "右玉县",
              value: "140623"
            }, {
              label: "怀仁县",
              value: "140624"
            }, {
              label: "山西朔州经济开发区",
              value: "140671"
            }],
            [{
              label: "榆次区",
              value: "140702"
            }, {
              label: "榆社县",
              value: "140721"
            }, {
              label: "左权县",
              value: "140722"
            }, {
              label: "和顺县",
              value: "140723"
            }, {
              label: "昔阳县",
              value: "140724"
            }, {
              label: "寿阳县",
              value: "140725"
            }, {
              label: "太谷县",
              value: "140726"
            }, {
              label: "祁县",
              value: "140727"
            }, {
              label: "平遥县",
              value: "140728"
            }, {
              label: "灵石县",
              value: "140729"
            }, {
              label: "介休市",
              value: "140781"
            }],
            [{
              label: "盐湖区",
              value: "140802"
            }, {
              label: "临猗县",
              value: "140821"
            }, {
              label: "万荣县",
              value: "140822"
            }, {
              label: "闻喜县",
              value: "140823"
            }, {
              label: "稷山县",
              value: "140824"
            }, {
              label: "新绛县",
              value: "140825"
            }, {
              label: "绛县",
              value: "140826"
            }, {
              label: "垣曲县",
              value: "140827"
            }, {
              label: "夏县",
              value: "140828"
            }, {
              label: "平陆县",
              value: "140829"
            }, {
              label: "芮城县",
              value: "140830"
            }, {
              label: "永济市",
              value: "140881"
            }, {
              label: "河津市",
              value: "140882"
            }],
            [{
              label: "忻府区",
              value: "140902"
            }, {
              label: "定襄县",
              value: "140921"
            }, {
              label: "五台县",
              value: "140922"
            }, {
              label: "代县",
              value: "140923"
            }, {
              label: "繁峙县",
              value: "140924"
            }, {
              label: "宁武县",
              value: "140925"
            }, {
              label: "静乐县",
              value: "140926"
            }, {
              label: "神池县",
              value: "140927"
            }, {
              label: "五寨县",
              value: "140928"
            }, {
              label: "岢岚县",
              value: "140929"
            }, {
              label: "河曲县",
              value: "140930"
            }, {
              label: "保德县",
              value: "140931"
            }, {
              label: "偏关县",
              value: "140932"
            }, {
              label: "五台山风景名胜区",
              value: "140971"
            }, {
              label: "原平市",
              value: "140981"
            }],
            [{
              label: "尧都区",
              value: "141002"
            }, {
              label: "曲沃县",
              value: "141021"
            }, {
              label: "翼城县",
              value: "141022"
            }, {
              label: "襄汾县",
              value: "141023"
            }, {
              label: "洪洞县",
              value: "141024"
            }, {
              label: "古县",
              value: "141025"
            }, {
              label: "安泽县",
              value: "141026"
            }, {
              label: "浮山县",
              value: "141027"
            }, {
              label: "吉县",
              value: "141028"
            }, {
              label: "乡宁县",
              value: "141029"
            }, {
              label: "大宁县",
              value: "141030"
            }, {
              label: "隰县",
              value: "141031"
            }, {
              label: "永和县",
              value: "141032"
            }, {
              label: "蒲县",
              value: "141033"
            }, {
              label: "汾西县",
              value: "141034"
            }, {
              label: "侯马市",
              value: "141081"
            }, {
              label: "霍州市",
              value: "141082"
            }],
            [{
              label: "离石区",
              value: "141102"
            }, {
              label: "文水县",
              value: "141121"
            }, {
              label: "交城县",
              value: "141122"
            }, {
              label: "兴县",
              value: "141123"
            }, {
              label: "临县",
              value: "141124"
            }, {
              label: "柳林县",
              value: "141125"
            }, {
              label: "石楼县",
              value: "141126"
            }, {
              label: "岚县",
              value: "141127"
            }, {
              label: "方山县",
              value: "141128"
            }, {
              label: "中阳县",
              value: "141129"
            }, {
              label: "交口县",
              value: "141130"
            }, {
              label: "孝义市",
              value: "141181"
            }, {
              label: "汾阳市",
              value: "141182"
            }]
          ],
          [
            [{
              label: "新城区",
              value: "150102"
            }, {
              label: "回民区",
              value: "150103"
            }, {
              label: "玉泉区",
              value: "150104"
            }, {
              label: "赛罕区",
              value: "150105"
            }, {
              label: "土默特左旗",
              value: "150121"
            }, {
              label: "托克托县",
              value: "150122"
            }, {
              label: "和林格尔县",
              value: "150123"
            }, {
              label: "清水河县",
              value: "150124"
            }, {
              label: "武川县",
              value: "150125"
            }, {
              label: "呼和浩特金海工业园区",
              value: "150171"
            }, {
              label: "呼和浩特经济技术开发区",
              value: "150172"
            }],
            [{
              label: "东河区",
              value: "150202"
            }, {
              label: "昆都仑区",
              value: "150203"
            }, {
              label: "青山区",
              value: "150204"
            }, {
              label: "石拐区",
              value: "150205"
            }, {
              label: "白云鄂博矿区",
              value: "150206"
            }, {
              label: "九原区",
              value: "150207"
            }, {
              label: "土默特右旗",
              value: "150221"
            }, {
              label: "固阳县",
              value: "150222"
            }, {
              label: "达尔罕茂明安联合旗",
              value: "150223"
            }, {
              label: "包头稀土高新技术产业开发区",
              value: "150271"
            }],
            [{
              label: "海勃湾区",
              value: "150302"
            }, {
              label: "海南区",
              value: "150303"
            }, {
              label: "乌达区",
              value: "150304"
            }],
            [{
              label: "红山区",
              value: "150402"
            }, {
              label: "元宝山区",
              value: "150403"
            }, {
              label: "松山区",
              value: "150404"
            }, {
              label: "阿鲁科尔沁旗",
              value: "150421"
            }, {
              label: "巴林左旗",
              value: "150422"
            }, {
              label: "巴林右旗",
              value: "150423"
            }, {
              label: "林西县",
              value: "150424"
            }, {
              label: "克什克腾旗",
              value: "150425"
            }, {
              label: "翁牛特旗",
              value: "150426"
            }, {
              label: "喀喇沁旗",
              value: "150428"
            }, {
              label: "宁城县",
              value: "150429"
            }, {
              label: "敖汉旗",
              value: "150430"
            }],
            [{
              label: "科尔沁区",
              value: "150502"
            }, {
              label: "科尔沁左翼中旗",
              value: "150521"
            }, {
              label: "科尔沁左翼后旗",
              value: "150522"
            }, {
              label: "开鲁县",
              value: "150523"
            }, {
              label: "库伦旗",
              value: "150524"
            }, {
              label: "奈曼旗",
              value: "150525"
            }, {
              label: "扎鲁特旗",
              value: "150526"
            }, {
              label: "通辽经济技术开发区",
              value: "150571"
            }, {
              label: "霍林郭勒市",
              value: "150581"
            }],
            [{
              label: "东胜区",
              value: "150602"
            }, {
              label: "康巴什区",
              value: "150603"
            }, {
              label: "达拉特旗",
              value: "150621"
            }, {
              label: "准格尔旗",
              value: "150622"
            }, {
              label: "鄂托克前旗",
              value: "150623"
            }, {
              label: "鄂托克旗",
              value: "150624"
            }, {
              label: "杭锦旗",
              value: "150625"
            }, {
              label: "乌审旗",
              value: "150626"
            }, {
              label: "伊金霍洛旗",
              value: "150627"
            }],
            [{
              label: "海拉尔区",
              value: "150702"
            }, {
              label: "扎赉诺尔区",
              value: "150703"
            }, {
              label: "阿荣旗",
              value: "150721"
            }, {
              label: "莫力达瓦达斡尔族自治旗",
              value: "150722"
            }, {
              label: "鄂伦春自治旗",
              value: "150723"
            }, {
              label: "鄂温克族自治旗",
              value: "150724"
            }, {
              label: "陈巴尔虎旗",
              value: "150725"
            }, {
              label: "新巴尔虎左旗",
              value: "150726"
            }, {
              label: "新巴尔虎右旗",
              value: "150727"
            }, {
              label: "满洲里市",
              value: "150781"
            }, {
              label: "牙克石市",
              value: "150782"
            }, {
              label: "扎兰屯市",
              value: "150783"
            }, {
              label: "额尔古纳市",
              value: "150784"
            }, {
              label: "根河市",
              value: "150785"
            }],
            [{
              label: "临河区",
              value: "150802"
            }, {
              label: "五原县",
              value: "150821"
            }, {
              label: "磴口县",
              value: "150822"
            }, {
              label: "乌拉特前旗",
              value: "150823"
            }, {
              label: "乌拉特中旗",
              value: "150824"
            }, {
              label: "乌拉特后旗",
              value: "150825"
            }, {
              label: "杭锦后旗",
              value: "150826"
            }],
            [{
              label: "集宁区",
              value: "150902"
            }, {
              label: "卓资县",
              value: "150921"
            }, {
              label: "化德县",
              value: "150922"
            }, {
              label: "商都县",
              value: "150923"
            }, {
              label: "兴和县",
              value: "150924"
            }, {
              label: "凉城县",
              value: "150925"
            }, {
              label: "察哈尔右翼前旗",
              value: "150926"
            }, {
              label: "察哈尔右翼中旗",
              value: "150927"
            }, {
              label: "察哈尔右翼后旗",
              value: "150928"
            }, {
              label: "四子王旗",
              value: "150929"
            }, {
              label: "丰镇市",
              value: "150981"
            }],
            [{
              label: "乌兰浩特市",
              value: "152201"
            }, {
              label: "阿尔山市",
              value: "152202"
            }, {
              label: "科尔沁右翼前旗",
              value: "152221"
            }, {
              label: "科尔沁右翼中旗",
              value: "152222"
            }, {
              label: "扎赉特旗",
              value: "152223"
            }, {
              label: "突泉县",
              value: "152224"
            }],
            [{
              label: "二连浩特市",
              value: "152501"
            }, {
              label: "锡林浩特市",
              value: "152502"
            }, {
              label: "阿巴嘎旗",
              value: "152522"
            }, {
              label: "苏尼特左旗",
              value: "152523"
            }, {
              label: "苏尼特右旗",
              value: "152524"
            }, {
              label: "东乌珠穆沁旗",
              value: "152525"
            }, {
              label: "西乌珠穆沁旗",
              value: "152526"
            }, {
              label: "太仆寺旗",
              value: "152527"
            }, {
              label: "镶黄旗",
              value: "152528"
            }, {
              label: "正镶白旗",
              value: "152529"
            }, {
              label: "正蓝旗",
              value: "152530"
            }, {
              label: "多伦县",
              value: "152531"
            }, {
              label: "乌拉盖管委会",
              value: "152571"
            }],
            [{
              label: "阿拉善左旗",
              value: "152921"
            }, {
              label: "阿拉善右旗",
              value: "152922"
            }, {
              label: "额济纳旗",
              value: "152923"
            }, {
              label: "内蒙古阿拉善经济开发区",
              value: "152971"
            }]
          ],
          [
            [{
              label: "和平区",
              value: "210102"
            }, {
              label: "沈河区",
              value: "210103"
            }, {
              label: "大东区",
              value: "210104"
            }, {
              label: "皇姑区",
              value: "210105"
            }, {
              label: "铁西区",
              value: "210106"
            }, {
              label: "苏家屯区",
              value: "210111"
            }, {
              label: "浑南区",
              value: "210112"
            }, {
              label: "沈北新区",
              value: "210113"
            }, {
              label: "于洪区",
              value: "210114"
            }, {
              label: "辽中区",
              value: "210115"
            }, {
              label: "康平县",
              value: "210123"
            }, {
              label: "法库县",
              value: "210124"
            }, {
              label: "新民市",
              value: "210181"
            }],
            [{
              label: "中山区",
              value: "210202"
            }, {
              label: "西岗区",
              value: "210203"
            }, {
              label: "沙河口区",
              value: "210204"
            }, {
              label: "甘井子区",
              value: "210211"
            }, {
              label: "旅顺口区",
              value: "210212"
            }, {
              label: "金州区",
              value: "210213"
            }, {
              label: "普兰店区",
              value: "210214"
            }, {
              label: "长海县",
              value: "210224"
            }, {
              label: "瓦房店市",
              value: "210281"
            }, {
              label: "庄河市",
              value: "210283"
            }],
            [{
              label: "铁东区",
              value: "210302"
            }, {
              label: "铁西区",
              value: "210303"
            }, {
              label: "立山区",
              value: "210304"
            }, {
              label: "千山区",
              value: "210311"
            }, {
              label: "台安县",
              value: "210321"
            }, {
              label: "岫岩满族自治县",
              value: "210323"
            }, {
              label: "海城市",
              value: "210381"
            }],
            [{
              label: "新抚区",
              value: "210402"
            }, {
              label: "东洲区",
              value: "210403"
            }, {
              label: "望花区",
              value: "210404"
            }, {
              label: "顺城区",
              value: "210411"
            }, {
              label: "抚顺县",
              value: "210421"
            }, {
              label: "新宾满族自治县",
              value: "210422"
            }, {
              label: "清原满族自治县",
              value: "210423"
            }],
            [{
              label: "平山区",
              value: "210502"
            }, {
              label: "溪湖区",
              value: "210503"
            }, {
              label: "明山区",
              value: "210504"
            }, {
              label: "南芬区",
              value: "210505"
            }, {
              label: "本溪满族自治县",
              value: "210521"
            }, {
              label: "桓仁满族自治县",
              value: "210522"
            }],
            [{
              label: "元宝区",
              value: "210602"
            }, {
              label: "振兴区",
              value: "210603"
            }, {
              label: "振安区",
              value: "210604"
            }, {
              label: "宽甸满族自治县",
              value: "210624"
            }, {
              label: "东港市",
              value: "210681"
            }, {
              label: "凤城市",
              value: "210682"
            }],
            [{
              label: "古塔区",
              value: "210702"
            }, {
              label: "凌河区",
              value: "210703"
            }, {
              label: "太和区",
              value: "210711"
            }, {
              label: "黑山县",
              value: "210726"
            }, {
              label: "义县",
              value: "210727"
            }, {
              label: "凌海市",
              value: "210781"
            }, {
              label: "北镇市",
              value: "210782"
            }],
            [{
              label: "站前区",
              value: "210802"
            }, {
              label: "西市区",
              value: "210803"
            }, {
              label: "鲅鱼圈区",
              value: "210804"
            }, {
              label: "老边区",
              value: "210811"
            }, {
              label: "盖州市",
              value: "210881"
            }, {
              label: "大石桥市",
              value: "210882"
            }],
            [{
              label: "海州区",
              value: "210902"
            }, {
              label: "新邱区",
              value: "210903"
            }, {
              label: "太平区",
              value: "210904"
            }, {
              label: "清河门区",
              value: "210905"
            }, {
              label: "细河区",
              value: "210911"
            }, {
              label: "阜新蒙古族自治县",
              value: "210921"
            }, {
              label: "彰武县",
              value: "210922"
            }],
            [{
              label: "白塔区",
              value: "211002"
            }, {
              label: "文圣区",
              value: "211003"
            }, {
              label: "宏伟区",
              value: "211004"
            }, {
              label: "弓长岭区",
              value: "211005"
            }, {
              label: "太子河区",
              value: "211011"
            }, {
              label: "辽阳县",
              value: "211021"
            }, {
              label: "灯塔市",
              value: "211081"
            }],
            [{
              label: "双台子区",
              value: "211102"
            }, {
              label: "兴隆台区",
              value: "211103"
            }, {
              label: "大洼区",
              value: "211104"
            }, {
              label: "盘山县",
              value: "211122"
            }],
            [{
              label: "银州区",
              value: "211202"
            }, {
              label: "清河区",
              value: "211204"
            }, {
              label: "铁岭县",
              value: "211221"
            }, {
              label: "西丰县",
              value: "211223"
            }, {
              label: "昌图县",
              value: "211224"
            }, {
              label: "调兵山市",
              value: "211281"
            }, {
              label: "开原市",
              value: "211282"
            }],
            [{
              label: "双塔区",
              value: "211302"
            }, {
              label: "龙城区",
              value: "211303"
            }, {
              label: "朝阳县",
              value: "211321"
            }, {
              label: "建平县",
              value: "211322"
            }, {
              label: "喀喇沁左翼蒙古族自治县",
              value: "211324"
            }, {
              label: "北票市",
              value: "211381"
            }, {
              label: "凌源市",
              value: "211382"
            }],
            [{
              label: "连山区",
              value: "211402"
            }, {
              label: "龙港区",
              value: "211403"
            }, {
              label: "南票区",
              value: "211404"
            }, {
              label: "绥中县",
              value: "211421"
            }, {
              label: "建昌县",
              value: "211422"
            }, {
              label: "兴城市",
              value: "211481"
            }]
          ],
          [
            [{
              label: "南关区",
              value: "220102"
            }, {
              label: "宽城区",
              value: "220103"
            }, {
              label: "朝阳区",
              value: "220104"
            }, {
              label: "二道区",
              value: "220105"
            }, {
              label: "绿园区",
              value: "220106"
            }, {
              label: "双阳区",
              value: "220112"
            }, {
              label: "九台区",
              value: "220113"
            }, {
              label: "农安县",
              value: "220122"
            }, {
              label: "长春经济技术开发区",
              value: "220171"
            }, {
              label: "长春净月高新技术产业开发区",
              value: "220172"
            }, {
              label: "长春高新技术产业开发区",
              value: "220173"
            }, {
              label: "长春汽车经济技术开发区",
              value: "220174"
            }, {
              label: "榆树市",
              value: "220182"
            }, {
              label: "德惠市",
              value: "220183"
            }],
            [{
              label: "昌邑区",
              value: "220202"
            }, {
              label: "龙潭区",
              value: "220203"
            }, {
              label: "船营区",
              value: "220204"
            }, {
              label: "丰满区",
              value: "220211"
            }, {
              label: "永吉县",
              value: "220221"
            }, {
              label: "吉林经济开发区",
              value: "220271"
            }, {
              label: "吉林高新技术产业开发区",
              value: "220272"
            }, {
              label: "吉林中国新加坡食品区",
              value: "220273"
            }, {
              label: "蛟河市",
              value: "220281"
            }, {
              label: "桦甸市",
              value: "220282"
            }, {
              label: "舒兰市",
              value: "220283"
            }, {
              label: "磐石市",
              value: "220284"
            }],
            [{
              label: "铁西区",
              value: "220302"
            }, {
              label: "铁东区",
              value: "220303"
            }, {
              label: "梨树县",
              value: "220322"
            }, {
              label: "伊通满族自治县",
              value: "220323"
            }, {
              label: "公主岭市",
              value: "220381"
            }, {
              label: "双辽市",
              value: "220382"
            }],
            [{
              label: "龙山区",
              value: "220402"
            }, {
              label: "西安区",
              value: "220403"
            }, {
              label: "东丰县",
              value: "220421"
            }, {
              label: "东辽县",
              value: "220422"
            }],
            [{
              label: "东昌区",
              value: "220502"
            }, {
              label: "二道江区",
              value: "220503"
            }, {
              label: "通化县",
              value: "220521"
            }, {
              label: "辉南县",
              value: "220523"
            }, {
              label: "柳河县",
              value: "220524"
            }, {
              label: "梅河口市",
              value: "220581"
            }, {
              label: "集安市",
              value: "220582"
            }],
            [{
              label: "浑江区",
              value: "220602"
            }, {
              label: "江源区",
              value: "220605"
            }, {
              label: "抚松县",
              value: "220621"
            }, {
              label: "靖宇县",
              value: "220622"
            }, {
              label: "长白朝鲜族自治县",
              value: "220623"
            }, {
              label: "临江市",
              value: "220681"
            }],
            [{
              label: "宁江区",
              value: "220702"
            }, {
              label: "前郭尔罗斯蒙古族自治县",
              value: "220721"
            }, {
              label: "长岭县",
              value: "220722"
            }, {
              label: "乾安县",
              value: "220723"
            }, {
              label: "吉林松原经济开发区",
              value: "220771"
            }, {
              label: "扶余市",
              value: "220781"
            }],
            [{
              label: "洮北区",
              value: "220802"
            }, {
              label: "镇赉县",
              value: "220821"
            }, {
              label: "通榆县",
              value: "220822"
            }, {
              label: "吉林白城经济开发区",
              value: "220871"
            }, {
              label: "洮南市",
              value: "220881"
            }, {
              label: "大安市",
              value: "220882"
            }],
            [{
              label: "延吉市",
              value: "222401"
            }, {
              label: "图们市",
              value: "222402"
            }, {
              label: "敦化市",
              value: "222403"
            }, {
              label: "珲春市",
              value: "222404"
            }, {
              label: "龙井市",
              value: "222405"
            }, {
              label: "和龙市",
              value: "222406"
            }, {
              label: "汪清县",
              value: "222424"
            }, {
              label: "安图县",
              value: "222426"
            }]
          ],
          [
            [{
              label: "道里区",
              value: "230102"
            }, {
              label: "南岗区",
              value: "230103"
            }, {
              label: "道外区",
              value: "230104"
            }, {
              label: "平房区",
              value: "230108"
            }, {
              label: "松北区",
              value: "230109"
            }, {
              label: "香坊区",
              value: "230110"
            }, {
              label: "呼兰区",
              value: "230111"
            }, {
              label: "阿城区",
              value: "230112"
            }, {
              label: "双城区",
              value: "230113"
            }, {
              label: "依兰县",
              value: "230123"
            }, {
              label: "方正县",
              value: "230124"
            }, {
              label: "宾县",
              value: "230125"
            }, {
              label: "巴彦县",
              value: "230126"
            }, {
              label: "木兰县",
              value: "230127"
            }, {
              label: "通河县",
              value: "230128"
            }, {
              label: "延寿县",
              value: "230129"
            }, {
              label: "尚志市",
              value: "230183"
            }, {
              label: "五常市",
              value: "230184"
            }],
            [{
              label: "龙沙区",
              value: "230202"
            }, {
              label: "建华区",
              value: "230203"
            }, {
              label: "铁锋区",
              value: "230204"
            }, {
              label: "昂昂溪区",
              value: "230205"
            }, {
              label: "富拉尔基区",
              value: "230206"
            }, {
              label: "碾子山区",
              value: "230207"
            }, {
              label: "梅里斯达斡尔族区",
              value: "230208"
            }, {
              label: "龙江县",
              value: "230221"
            }, {
              label: "依安县",
              value: "230223"
            }, {
              label: "泰来县",
              value: "230224"
            }, {
              label: "甘南县",
              value: "230225"
            }, {
              label: "富裕县",
              value: "230227"
            }, {
              label: "克山县",
              value: "230229"
            }, {
              label: "克东县",
              value: "230230"
            }, {
              label: "拜泉县",
              value: "230231"
            }, {
              label: "讷河市",
              value: "230281"
            }],
            [{
              label: "鸡冠区",
              value: "230302"
            }, {
              label: "恒山区",
              value: "230303"
            }, {
              label: "滴道区",
              value: "230304"
            }, {
              label: "梨树区",
              value: "230305"
            }, {
              label: "城子河区",
              value: "230306"
            }, {
              label: "麻山区",
              value: "230307"
            }, {
              label: "鸡东县",
              value: "230321"
            }, {
              label: "虎林市",
              value: "230381"
            }, {
              label: "密山市",
              value: "230382"
            }],
            [{
              label: "向阳区",
              value: "230402"
            }, {
              label: "工农区",
              value: "230403"
            }, {
              label: "南山区",
              value: "230404"
            }, {
              label: "兴安区",
              value: "230405"
            }, {
              label: "东山区",
              value: "230406"
            }, {
              label: "兴山区",
              value: "230407"
            }, {
              label: "萝北县",
              value: "230421"
            }, {
              label: "绥滨县",
              value: "230422"
            }],
            [{
              label: "尖山区",
              value: "230502"
            }, {
              label: "岭东区",
              value: "230503"
            }, {
              label: "四方台区",
              value: "230505"
            }, {
              label: "宝山区",
              value: "230506"
            }, {
              label: "集贤县",
              value: "230521"
            }, {
              label: "友谊县",
              value: "230522"
            }, {
              label: "宝清县",
              value: "230523"
            }, {
              label: "饶河县",
              value: "230524"
            }],
            [{
              label: "萨尔图区",
              value: "230602"
            }, {
              label: "龙凤区",
              value: "230603"
            }, {
              label: "让胡路区",
              value: "230604"
            }, {
              label: "红岗区",
              value: "230605"
            }, {
              label: "大同区",
              value: "230606"
            }, {
              label: "肇州县",
              value: "230621"
            }, {
              label: "肇源县",
              value: "230622"
            }, {
              label: "林甸县",
              value: "230623"
            }, {
              label: "杜尔伯特蒙古族自治县",
              value: "230624"
            }, {
              label: "大庆高新技术产业开发区",
              value: "230671"
            }],
            [{
              label: "伊春区",
              value: "230702"
            }, {
              label: "南岔区",
              value: "230703"
            }, {
              label: "友好区",
              value: "230704"
            }, {
              label: "西林区",
              value: "230705"
            }, {
              label: "翠峦区",
              value: "230706"
            }, {
              label: "新青区",
              value: "230707"
            }, {
              label: "美溪区",
              value: "230708"
            }, {
              label: "金山屯区",
              value: "230709"
            }, {
              label: "五营区",
              value: "230710"
            }, {
              label: "乌马河区",
              value: "230711"
            }, {
              label: "汤旺河区",
              value: "230712"
            }, {
              label: "带岭区",
              value: "230713"
            }, {
              label: "乌伊岭区",
              value: "230714"
            }, {
              label: "红星区",
              value: "230715"
            }, {
              label: "上甘岭区",
              value: "230716"
            }, {
              label: "嘉荫县",
              value: "230722"
            }, {
              label: "铁力市",
              value: "230781"
            }],
            [{
              label: "向阳区",
              value: "230803"
            }, {
              label: "前进区",
              value: "230804"
            }, {
              label: "东风区",
              value: "230805"
            }, {
              label: "郊区",
              value: "230811"
            }, {
              label: "桦南县",
              value: "230822"
            }, {
              label: "桦川县",
              value: "230826"
            }, {
              label: "汤原县",
              value: "230828"
            }, {
              label: "同江市",
              value: "230881"
            }, {
              label: "富锦市",
              value: "230882"
            }, {
              label: "抚远市",
              value: "230883"
            }],
            [{
              label: "新兴区",
              value: "230902"
            }, {
              label: "桃山区",
              value: "230903"
            }, {
              label: "茄子河区",
              value: "230904"
            }, {
              label: "勃利县",
              value: "230921"
            }],
            [{
              label: "东安区",
              value: "231002"
            }, {
              label: "阳明区",
              value: "231003"
            }, {
              label: "爱民区",
              value: "231004"
            }, {
              label: "西安区",
              value: "231005"
            }, {
              label: "林口县",
              value: "231025"
            }, {
              label: "牡丹江经济技术开发区",
              value: "231071"
            }, {
              label: "绥芬河市",
              value: "231081"
            }, {
              label: "海林市",
              value: "231083"
            }, {
              label: "宁安市",
              value: "231084"
            }, {
              label: "穆棱市",
              value: "231085"
            }, {
              label: "东宁市",
              value: "231086"
            }],
            [{
              label: "爱辉区",
              value: "231102"
            }, {
              label: "嫩江县",
              value: "231121"
            }, {
              label: "逊克县",
              value: "231123"
            }, {
              label: "孙吴县",
              value: "231124"
            }, {
              label: "北安市",
              value: "231181"
            }, {
              label: "五大连池市",
              value: "231182"
            }],
            [{
              label: "北林区",
              value: "231202"
            }, {
              label: "望奎县",
              value: "231221"
            }, {
              label: "兰西县",
              value: "231222"
            }, {
              label: "青冈县",
              value: "231223"
            }, {
              label: "庆安县",
              value: "231224"
            }, {
              label: "明水县",
              value: "231225"
            }, {
              label: "绥棱县",
              value: "231226"
            }, {
              label: "安达市",
              value: "231281"
            }, {
              label: "肇东市",
              value: "231282"
            }, {
              label: "海伦市",
              value: "231283"
            }],
            [{
              label: "加格达奇区",
              value: "232701"
            }, {
              label: "松岭区",
              value: "232702"
            }, {
              label: "新林区",
              value: "232703"
            }, {
              label: "呼中区",
              value: "232704"
            }, {
              label: "呼玛县",
              value: "232721"
            }, {
              label: "塔河县",
              value: "232722"
            }, {
              label: "漠河县",
              value: "232723"
            }]
          ],
          [
            [{
              label: "黄浦区",
              value: "310101"
            }, {
              label: "徐汇区",
              value: "310104"
            }, {
              label: "长宁区",
              value: "310105"
            }, {
              label: "静安区",
              value: "310106"
            }, {
              label: "普陀区",
              value: "310107"
            }, {
              label: "虹口区",
              value: "310109"
            }, {
              label: "杨浦区",
              value: "310110"
            }, {
              label: "闵行区",
              value: "310112"
            }, {
              label: "宝山区",
              value: "310113"
            }, {
              label: "嘉定区",
              value: "310114"
            }, {
              label: "浦东新区",
              value: "310115"
            }, {
              label: "金山区",
              value: "310116"
            }, {
              label: "松江区",
              value: "310117"
            }, {
              label: "青浦区",
              value: "310118"
            }, {
              label: "奉贤区",
              value: "310120"
            }, {
              label: "崇明区",
              value: "310151"
            }]
          ],
          [
            [{
              label: "玄武区",
              value: "320102"
            }, {
              label: "秦淮区",
              value: "320104"
            }, {
              label: "建邺区",
              value: "320105"
            }, {
              label: "鼓楼区",
              value: "320106"
            }, {
              label: "浦口区",
              value: "320111"
            }, {
              label: "栖霞区",
              value: "320113"
            }, {
              label: "雨花台区",
              value: "320114"
            }, {
              label: "江宁区",
              value: "320115"
            }, {
              label: "六合区",
              value: "320116"
            }, {
              label: "溧水区",
              value: "320117"
            }, {
              label: "高淳区",
              value: "320118"
            }],
            [{
              label: "锡山区",
              value: "320205"
            }, {
              label: "惠山区",
              value: "320206"
            }, {
              label: "滨湖区",
              value: "320211"
            }, {
              label: "梁溪区",
              value: "320213"
            }, {
              label: "新吴区",
              value: "320214"
            }, {
              label: "江阴市",
              value: "320281"
            }, {
              label: "宜兴市",
              value: "320282"
            }],
            [{
              label: "鼓楼区",
              value: "320302"
            }, {
              label: "云龙区",
              value: "320303"
            }, {
              label: "贾汪区",
              value: "320305"
            }, {
              label: "泉山区",
              value: "320311"
            }, {
              label: "铜山区",
              value: "320312"
            }, {
              label: "丰县",
              value: "320321"
            }, {
              label: "沛县",
              value: "320322"
            }, {
              label: "睢宁县",
              value: "320324"
            }, {
              label: "徐州经济技术开发区",
              value: "320371"
            }, {
              label: "新沂市",
              value: "320381"
            }, {
              label: "邳州市",
              value: "320382"
            }],
            [{
              label: "天宁区",
              value: "320402"
            }, {
              label: "钟楼区",
              value: "320404"
            }, {
              label: "新北区",
              value: "320411"
            }, {
              label: "武进区",
              value: "320412"
            }, {
              label: "金坛区",
              value: "320413"
            }, {
              label: "溧阳市",
              value: "320481"
            }],
            [{
              label: "虎丘区",
              value: "320505"
            }, {
              label: "吴中区",
              value: "320506"
            }, {
              label: "相城区",
              value: "320507"
            }, {
              label: "姑苏区",
              value: "320508"
            }, {
              label: "吴江区",
              value: "320509"
            }, {
              label: "苏州工业园区",
              value: "320571"
            }, {
              label: "常熟市",
              value: "320581"
            }, {
              label: "张家港市",
              value: "320582"
            }, {
              label: "昆山市",
              value: "320583"
            }, {
              label: "太仓市",
              value: "320585"
            }],
            [{
              label: "崇川区",
              value: "320602"
            }, {
              label: "港闸区",
              value: "320611"
            }, {
              label: "通州区",
              value: "320612"
            }, {
              label: "海安县",
              value: "320621"
            }, {
              label: "如东县",
              value: "320623"
            }, {
              label: "南通经济技术开发区",
              value: "320671"
            }, {
              label: "启东市",
              value: "320681"
            }, {
              label: "如皋市",
              value: "320682"
            }, {
              label: "海门市",
              value: "320684"
            }],
            [{
              label: "连云区",
              value: "320703"
            }, {
              label: "海州区",
              value: "320706"
            }, {
              label: "赣榆区",
              value: "320707"
            }, {
              label: "东海县",
              value: "320722"
            }, {
              label: "灌云县",
              value: "320723"
            }, {
              label: "灌南县",
              value: "320724"
            }, {
              label: "连云港经济技术开发区",
              value: "320771"
            }, {
              label: "连云港高新技术产业开发区",
              value: "320772"
            }],
            [{
              label: "淮安区",
              value: "320803"
            }, {
              label: "淮阴区",
              value: "320804"
            }, {
              label: "清江浦区",
              value: "320812"
            }, {
              label: "洪泽区",
              value: "320813"
            }, {
              label: "涟水县",
              value: "320826"
            }, {
              label: "盱眙县",
              value: "320830"
            }, {
              label: "金湖县",
              value: "320831"
            }, {
              label: "淮安经济技术开发区",
              value: "320871"
            }],
            [{
              label: "亭湖区",
              value: "320902"
            }, {
              label: "盐都区",
              value: "320903"
            }, {
              label: "大丰区",
              value: "320904"
            }, {
              label: "响水县",
              value: "320921"
            }, {
              label: "滨海县",
              value: "320922"
            }, {
              label: "阜宁县",
              value: "320923"
            }, {
              label: "射阳县",
              value: "320924"
            }, {
              label: "建湖县",
              value: "320925"
            }, {
              label: "盐城经济技术开发区",
              value: "320971"
            }, {
              label: "东台市",
              value: "320981"
            }],
            [{
              label: "广陵区",
              value: "321002"
            }, {
              label: "邗江区",
              value: "321003"
            }, {
              label: "江都区",
              value: "321012"
            }, {
              label: "宝应县",
              value: "321023"
            }, {
              label: "扬州经济技术开发区",
              value: "321071"
            }, {
              label: "仪征市",
              value: "321081"
            }, {
              label: "高邮市",
              value: "321084"
            }],
            [{
              label: "京口区",
              value: "321102"
            }, {
              label: "润州区",
              value: "321111"
            }, {
              label: "丹徒区",
              value: "321112"
            }, {
              label: "镇江新区",
              value: "321171"
            }, {
              label: "丹阳市",
              value: "321181"
            }, {
              label: "扬中市",
              value: "321182"
            }, {
              label: "句容市",
              value: "321183"
            }],
            [{
              label: "海陵区",
              value: "321202"
            }, {
              label: "高港区",
              value: "321203"
            }, {
              label: "姜堰区",
              value: "321204"
            }, {
              label: "泰州医药高新技术产业开发区",
              value: "321271"
            }, {
              label: "兴化市",
              value: "321281"
            }, {
              label: "靖江市",
              value: "321282"
            }, {
              label: "泰兴市",
              value: "321283"
            }],
            [{
              label: "宿城区",
              value: "321302"
            }, {
              label: "宿豫区",
              value: "321311"
            }, {
              label: "沭阳县",
              value: "321322"
            }, {
              label: "泗阳县",
              value: "321323"
            }, {
              label: "泗洪县",
              value: "321324"
            }, {
              label: "宿迁经济技术开发区",
              value: "321371"
            }]
          ],
          [
            [{
              label: "上城区",
              value: "330102"
            }, {
              label: "下城区",
              value: "330103"
            }, {
              label: "江干区",
              value: "330104"
            }, {
              label: "拱墅区",
              value: "330105"
            }, {
              label: "西湖区",
              value: "330106"
            }, {
              label: "滨江区",
              value: "330108"
            }, {
              label: "萧山区",
              value: "330109"
            }, {
              label: "余杭区",
              value: "330110"
            }, {
              label: "富阳区",
              value: "330111"
            }, {
              label: "临安区",
              value: "330112"
            }, {
              label: "桐庐县",
              value: "330122"
            }, {
              label: "淳安县",
              value: "330127"
            }, {
              label: "建德市",
              value: "330182"
            }],
            [{
              label: "海曙区",
              value: "330203"
            }, {
              label: "江北区",
              value: "330205"
            }, {
              label: "北仑区",
              value: "330206"
            }, {
              label: "镇海区",
              value: "330211"
            }, {
              label: "鄞州区",
              value: "330212"
            }, {
              label: "奉化区",
              value: "330213"
            }, {
              label: "象山县",
              value: "330225"
            }, {
              label: "宁海县",
              value: "330226"
            }, {
              label: "余姚市",
              value: "330281"
            }, {
              label: "慈溪市",
              value: "330282"
            }],
            [{
              label: "鹿城区",
              value: "330302"
            }, {
              label: "龙湾区",
              value: "330303"
            }, {
              label: "瓯海区",
              value: "330304"
            }, {
              label: "洞头区",
              value: "330305"
            }, {
              label: "永嘉县",
              value: "330324"
            }, {
              label: "平阳县",
              value: "330326"
            }, {
              label: "苍南县",
              value: "330327"
            }, {
              label: "文成县",
              value: "330328"
            }, {
              label: "泰顺县",
              value: "330329"
            }, {
              label: "温州经济技术开发区",
              value: "330371"
            }, {
              label: "瑞安市",
              value: "330381"
            }, {
              label: "乐清市",
              value: "330382"
            }],
            [{
              label: "南湖区",
              value: "330402"
            }, {
              label: "秀洲区",
              value: "330411"
            }, {
              label: "嘉善县",
              value: "330421"
            }, {
              label: "海盐县",
              value: "330424"
            }, {
              label: "海宁市",
              value: "330481"
            }, {
              label: "平湖市",
              value: "330482"
            }, {
              label: "桐乡市",
              value: "330483"
            }],
            [{
              label: "吴兴区",
              value: "330502"
            }, {
              label: "南浔区",
              value: "330503"
            }, {
              label: "德清县",
              value: "330521"
            }, {
              label: "长兴县",
              value: "330522"
            }, {
              label: "安吉县",
              value: "330523"
            }],
            [{
              label: "越城区",
              value: "330602"
            }, {
              label: "柯桥区",
              value: "330603"
            }, {
              label: "上虞区",
              value: "330604"
            }, {
              label: "新昌县",
              value: "330624"
            }, {
              label: "诸暨市",
              value: "330681"
            }, {
              label: "嵊州市",
              value: "330683"
            }],
            [{
              label: "婺城区",
              value: "330702"
            }, {
              label: "金东区",
              value: "330703"
            }, {
              label: "武义县",
              value: "330723"
            }, {
              label: "浦江县",
              value: "330726"
            }, {
              label: "磐安县",
              value: "330727"
            }, {
              label: "兰溪市",
              value: "330781"
            }, {
              label: "义乌市",
              value: "330782"
            }, {
              label: "东阳市",
              value: "330783"
            }, {
              label: "永康市",
              value: "330784"
            }],
            [{
              label: "柯城区",
              value: "330802"
            }, {
              label: "衢江区",
              value: "330803"
            }, {
              label: "常山县",
              value: "330822"
            }, {
              label: "开化县",
              value: "330824"
            }, {
              label: "龙游县",
              value: "330825"
            }, {
              label: "江山市",
              value: "330881"
            }],
            [{
              label: "定海区",
              value: "330902"
            }, {
              label: "普陀区",
              value: "330903"
            }, {
              label: "岱山县",
              value: "330921"
            }, {
              label: "嵊泗县",
              value: "330922"
            }],
            [{
              label: "椒江区",
              value: "331002"
            }, {
              label: "黄岩区",
              value: "331003"
            }, {
              label: "路桥区",
              value: "331004"
            }, {
              label: "三门县",
              value: "331022"
            }, {
              label: "天台县",
              value: "331023"
            }, {
              label: "仙居县",
              value: "331024"
            }, {
              label: "温岭市",
              value: "331081"
            }, {
              label: "临海市",
              value: "331082"
            }, {
              label: "玉环市",
              value: "331083"
            }],
            [{
              label: "莲都区",
              value: "331102"
            }, {
              label: "青田县",
              value: "331121"
            }, {
              label: "缙云县",
              value: "331122"
            }, {
              label: "遂昌县",
              value: "331123"
            }, {
              label: "松阳县",
              value: "331124"
            }, {
              label: "云和县",
              value: "331125"
            }, {
              label: "庆元县",
              value: "331126"
            }, {
              label: "景宁畲族自治县",
              value: "331127"
            }, {
              label: "龙泉市",
              value: "331181"
            }]
          ],
          [
            [{
              label: "瑶海区",
              value: "340102"
            }, {
              label: "庐阳区",
              value: "340103"
            }, {
              label: "蜀山区",
              value: "340104"
            }, {
              label: "包河区",
              value: "340111"
            }, {
              label: "长丰县",
              value: "340121"
            }, {
              label: "肥东县",
              value: "340122"
            }, {
              label: "肥西县",
              value: "340123"
            }, {
              label: "庐江县",
              value: "340124"
            }, {
              label: "合肥高新技术产业开发区",
              value: "340171"
            }, {
              label: "合肥经济技术开发区",
              value: "340172"
            }, {
              label: "合肥新站高新技术产业开发区",
              value: "340173"
            }, {
              label: "巢湖市",
              value: "340181"
            }],
            [{
              label: "镜湖区",
              value: "340202"
            }, {
              label: "弋江区",
              value: "340203"
            }, {
              label: "鸠江区",
              value: "340207"
            }, {
              label: "三山区",
              value: "340208"
            }, {
              label: "芜湖县",
              value: "340221"
            }, {
              label: "繁昌县",
              value: "340222"
            }, {
              label: "南陵县",
              value: "340223"
            }, {
              label: "无为县",
              value: "340225"
            }, {
              label: "芜湖经济技术开发区",
              value: "340271"
            }, {
              label: "安徽芜湖长江大桥经济开发区",
              value: "340272"
            }],
            [{
              label: "龙子湖区",
              value: "340302"
            }, {
              label: "蚌山区",
              value: "340303"
            }, {
              label: "禹会区",
              value: "340304"
            }, {
              label: "淮上区",
              value: "340311"
            }, {
              label: "怀远县",
              value: "340321"
            }, {
              label: "五河县",
              value: "340322"
            }, {
              label: "固镇县",
              value: "340323"
            }, {
              label: "蚌埠市高新技术开发区",
              value: "340371"
            }, {
              label: "蚌埠市经济开发区",
              value: "340372"
            }],
            [{
              label: "大通区",
              value: "340402"
            }, {
              label: "田家庵区",
              value: "340403"
            }, {
              label: "谢家集区",
              value: "340404"
            }, {
              label: "八公山区",
              value: "340405"
            }, {
              label: "潘集区",
              value: "340406"
            }, {
              label: "凤台县",
              value: "340421"
            }, {
              label: "寿县",
              value: "340422"
            }],
            [{
              label: "花山区",
              value: "340503"
            }, {
              label: "雨山区",
              value: "340504"
            }, {
              label: "博望区",
              value: "340506"
            }, {
              label: "当涂县",
              value: "340521"
            }, {
              label: "含山县",
              value: "340522"
            }, {
              label: "和县",
              value: "340523"
            }],
            [{
              label: "杜集区",
              value: "340602"
            }, {
              label: "相山区",
              value: "340603"
            }, {
              label: "烈山区",
              value: "340604"
            }, {
              label: "濉溪县",
              value: "340621"
            }],
            [{
              label: "铜官区",
              value: "340705"
            }, {
              label: "义安区",
              value: "340706"
            }, {
              label: "郊区",
              value: "340711"
            }, {
              label: "枞阳县",
              value: "340722"
            }],
            [{
              label: "迎江区",
              value: "340802"
            }, {
              label: "大观区",
              value: "340803"
            }, {
              label: "宜秀区",
              value: "340811"
            }, {
              label: "怀宁县",
              value: "340822"
            }, {
              label: "潜山县",
              value: "340824"
            }, {
              label: "太湖县",
              value: "340825"
            }, {
              label: "宿松县",
              value: "340826"
            }, {
              label: "望江县",
              value: "340827"
            }, {
              label: "岳西县",
              value: "340828"
            }, {
              label: "安徽安庆经济开发区",
              value: "340871"
            }, {
              label: "桐城市",
              value: "340881"
            }],
            [{
              label: "屯溪区",
              value: "341002"
            }, {
              label: "黄山区",
              value: "341003"
            }, {
              label: "徽州区",
              value: "341004"
            }, {
              label: "歙县",
              value: "341021"
            }, {
              label: "休宁县",
              value: "341022"
            }, {
              label: "黟县",
              value: "341023"
            }, {
              label: "祁门县",
              value: "341024"
            }],
            [{
              label: "琅琊区",
              value: "341102"
            }, {
              label: "南谯区",
              value: "341103"
            }, {
              label: "来安县",
              value: "341122"
            }, {
              label: "全椒县",
              value: "341124"
            }, {
              label: "定远县",
              value: "341125"
            }, {
              label: "凤阳县",
              value: "341126"
            }, {
              label: "苏滁现代产业园",
              value: "341171"
            }, {
              label: "滁州经济技术开发区",
              value: "341172"
            }, {
              label: "天长市",
              value: "341181"
            }, {
              label: "明光市",
              value: "341182"
            }],
            [{
              label: "颍州区",
              value: "341202"
            }, {
              label: "颍东区",
              value: "341203"
            }, {
              label: "颍泉区",
              value: "341204"
            }, {
              label: "临泉县",
              value: "341221"
            }, {
              label: "太和县",
              value: "341222"
            }, {
              label: "阜南县",
              value: "341225"
            }, {
              label: "颍上县",
              value: "341226"
            }, {
              label: "阜阳合肥现代产业园区",
              value: "341271"
            }, {
              label: "阜阳经济技术开发区",
              value: "341272"
            }, {
              label: "界首市",
              value: "341282"
            }],
            [{
              label: "埇桥区",
              value: "341302"
            }, {
              label: "砀山县",
              value: "341321"
            }, {
              label: "萧县",
              value: "341322"
            }, {
              label: "灵璧县",
              value: "341323"
            }, {
              label: "泗县",
              value: "341324"
            }, {
              label: "宿州马鞍山现代产业园区",
              value: "341371"
            }, {
              label: "宿州经济技术开发区",
              value: "341372"
            }],
            [{
              label: "金安区",
              value: "341502"
            }, {
              label: "裕安区",
              value: "341503"
            }, {
              label: "叶集区",
              value: "341504"
            }, {
              label: "霍邱县",
              value: "341522"
            }, {
              label: "舒城县",
              value: "341523"
            }, {
              label: "金寨县",
              value: "341524"
            }, {
              label: "霍山县",
              value: "341525"
            }],
            [{
              label: "谯城区",
              value: "341602"
            }, {
              label: "涡阳县",
              value: "341621"
            }, {
              label: "蒙城县",
              value: "341622"
            }, {
              label: "利辛县",
              value: "341623"
            }],
            [{
              label: "贵池区",
              value: "341702"
            }, {
              label: "东至县",
              value: "341721"
            }, {
              label: "石台县",
              value: "341722"
            }, {
              label: "青阳县",
              value: "341723"
            }],
            [{
              label: "宣州区",
              value: "341802"
            }, {
              label: "郎溪县",
              value: "341821"
            }, {
              label: "广德县",
              value: "341822"
            }, {
              label: "泾县",
              value: "341823"
            }, {
              label: "绩溪县",
              value: "341824"
            }, {
              label: "旌德县",
              value: "341825"
            }, {
              label: "宣城市经济开发区",
              value: "341871"
            }, {
              label: "宁国市",
              value: "341881"
            }]
          ],
          [
            [{
              label: "鼓楼区",
              value: "350102"
            }, {
              label: "台江区",
              value: "350103"
            }, {
              label: "仓山区",
              value: "350104"
            }, {
              label: "马尾区",
              value: "350105"
            }, {
              label: "晋安区",
              value: "350111"
            }, {
              label: "闽侯县",
              value: "350121"
            }, {
              label: "连江县",
              value: "350122"
            }, {
              label: "罗源县",
              value: "350123"
            }, {
              label: "闽清县",
              value: "350124"
            }, {
              label: "永泰县",
              value: "350125"
            }, {
              label: "平潭县",
              value: "350128"
            }, {
              label: "福清市",
              value: "350181"
            }, {
              label: "长乐市",
              value: "350182"
            }],
            [{
              label: "思明区",
              value: "350203"
            }, {
              label: "海沧区",
              value: "350205"
            }, {
              label: "湖里区",
              value: "350206"
            }, {
              label: "集美区",
              value: "350211"
            }, {
              label: "同安区",
              value: "350212"
            }, {
              label: "翔安区",
              value: "350213"
            }],
            [{
              label: "城厢区",
              value: "350302"
            }, {
              label: "涵江区",
              value: "350303"
            }, {
              label: "荔城区",
              value: "350304"
            }, {
              label: "秀屿区",
              value: "350305"
            }, {
              label: "仙游县",
              value: "350322"
            }],
            [{
              label: "梅列区",
              value: "350402"
            }, {
              label: "三元区",
              value: "350403"
            }, {
              label: "明溪县",
              value: "350421"
            }, {
              label: "清流县",
              value: "350423"
            }, {
              label: "宁化县",
              value: "350424"
            }, {
              label: "大田县",
              value: "350425"
            }, {
              label: "尤溪县",
              value: "350426"
            }, {
              label: "沙县",
              value: "350427"
            }, {
              label: "将乐县",
              value: "350428"
            }, {
              label: "泰宁县",
              value: "350429"
            }, {
              label: "建宁县",
              value: "350430"
            }, {
              label: "永安市",
              value: "350481"
            }],
            [{
              label: "鲤城区",
              value: "350502"
            }, {
              label: "丰泽区",
              value: "350503"
            }, {
              label: "洛江区",
              value: "350504"
            }, {
              label: "泉港区",
              value: "350505"
            }, {
              label: "惠安县",
              value: "350521"
            }, {
              label: "安溪县",
              value: "350524"
            }, {
              label: "永春县",
              value: "350525"
            }, {
              label: "德化县",
              value: "350526"
            }, {
              label: "金门县",
              value: "350527"
            }, {
              label: "石狮市",
              value: "350581"
            }, {
              label: "晋江市",
              value: "350582"
            }, {
              label: "南安市",
              value: "350583"
            }],
            [{
              label: "芗城区",
              value: "350602"
            }, {
              label: "龙文区",
              value: "350603"
            }, {
              label: "云霄县",
              value: "350622"
            }, {
              label: "漳浦县",
              value: "350623"
            }, {
              label: "诏安县",
              value: "350624"
            }, {
              label: "长泰县",
              value: "350625"
            }, {
              label: "东山县",
              value: "350626"
            }, {
              label: "南靖县",
              value: "350627"
            }, {
              label: "平和县",
              value: "350628"
            }, {
              label: "华安县",
              value: "350629"
            }, {
              label: "龙海市",
              value: "350681"
            }],
            [{
              label: "延平区",
              value: "350702"
            }, {
              label: "建阳区",
              value: "350703"
            }, {
              label: "顺昌县",
              value: "350721"
            }, {
              label: "浦城县",
              value: "350722"
            }, {
              label: "光泽县",
              value: "350723"
            }, {
              label: "松溪县",
              value: "350724"
            }, {
              label: "政和县",
              value: "350725"
            }, {
              label: "邵武市",
              value: "350781"
            }, {
              label: "武夷山市",
              value: "350782"
            }, {
              label: "建瓯市",
              value: "350783"
            }],
            [{
              label: "新罗区",
              value: "350802"
            }, {
              label: "永定区",
              value: "350803"
            }, {
              label: "长汀县",
              value: "350821"
            }, {
              label: "上杭县",
              value: "350823"
            }, {
              label: "武平县",
              value: "350824"
            }, {
              label: "连城县",
              value: "350825"
            }, {
              label: "漳平市",
              value: "350881"
            }],
            [{
              label: "蕉城区",
              value: "350902"
            }, {
              label: "霞浦县",
              value: "350921"
            }, {
              label: "古田县",
              value: "350922"
            }, {
              label: "屏南县",
              value: "350923"
            }, {
              label: "寿宁县",
              value: "350924"
            }, {
              label: "周宁县",
              value: "350925"
            }, {
              label: "柘荣县",
              value: "350926"
            }, {
              label: "福安市",
              value: "350981"
            }, {
              label: "福鼎市",
              value: "350982"
            }]
          ],
          [
            [{
              label: "东湖区",
              value: "360102"
            }, {
              label: "西湖区",
              value: "360103"
            }, {
              label: "青云谱区",
              value: "360104"
            }, {
              label: "湾里区",
              value: "360105"
            }, {
              label: "青山湖区",
              value: "360111"
            }, {
              label: "新建区",
              value: "360112"
            }, {
              label: "南昌县",
              value: "360121"
            }, {
              label: "安义县",
              value: "360123"
            }, {
              label: "进贤县",
              value: "360124"
            }],
            [{
              label: "昌江区",
              value: "360202"
            }, {
              label: "珠山区",
              value: "360203"
            }, {
              label: "浮梁县",
              value: "360222"
            }, {
              label: "乐平市",
              value: "360281"
            }],
            [{
              label: "安源区",
              value: "360302"
            }, {
              label: "湘东区",
              value: "360313"
            }, {
              label: "莲花县",
              value: "360321"
            }, {
              label: "上栗县",
              value: "360322"
            }, {
              label: "芦溪县",
              value: "360323"
            }],
            [{
              label: "濂溪区",
              value: "360402"
            }, {
              label: "浔阳区",
              value: "360403"
            }, {
              label: "柴桑区",
              value: "360404"
            }, {
              label: "武宁县",
              value: "360423"
            }, {
              label: "修水县",
              value: "360424"
            }, {
              label: "永修县",
              value: "360425"
            }, {
              label: "德安县",
              value: "360426"
            }, {
              label: "都昌县",
              value: "360428"
            }, {
              label: "湖口县",
              value: "360429"
            }, {
              label: "彭泽县",
              value: "360430"
            }, {
              label: "瑞昌市",
              value: "360481"
            }, {
              label: "共青城市",
              value: "360482"
            }, {
              label: "庐山市",
              value: "360483"
            }],
            [{
              label: "渝水区",
              value: "360502"
            }, {
              label: "分宜县",
              value: "360521"
            }],
            [{
              label: "月湖区",
              value: "360602"
            }, {
              label: "余江县",
              value: "360622"
            }, {
              label: "贵溪市",
              value: "360681"
            }],
            [{
              label: "章贡区",
              value: "360702"
            }, {
              label: "南康区",
              value: "360703"
            }, {
              label: "赣县区",
              value: "360704"
            }, {
              label: "信丰县",
              value: "360722"
            }, {
              label: "大余县",
              value: "360723"
            }, {
              label: "上犹县",
              value: "360724"
            }, {
              label: "崇义县",
              value: "360725"
            }, {
              label: "安远县",
              value: "360726"
            }, {
              label: "龙南县",
              value: "360727"
            }, {
              label: "定南县",
              value: "360728"
            }, {
              label: "全南县",
              value: "360729"
            }, {
              label: "宁都县",
              value: "360730"
            }, {
              label: "于都县",
              value: "360731"
            }, {
              label: "兴国县",
              value: "360732"
            }, {
              label: "会昌县",
              value: "360733"
            }, {
              label: "寻乌县",
              value: "360734"
            }, {
              label: "石城县",
              value: "360735"
            }, {
              label: "瑞金市",
              value: "360781"
            }],
            [{
              label: "吉州区",
              value: "360802"
            }, {
              label: "青原区",
              value: "360803"
            }, {
              label: "吉安县",
              value: "360821"
            }, {
              label: "吉水县",
              value: "360822"
            }, {
              label: "峡江县",
              value: "360823"
            }, {
              label: "新干县",
              value: "360824"
            }, {
              label: "永丰县",
              value: "360825"
            }, {
              label: "泰和县",
              value: "360826"
            }, {
              label: "遂川县",
              value: "360827"
            }, {
              label: "万安县",
              value: "360828"
            }, {
              label: "安福县",
              value: "360829"
            }, {
              label: "永新县",
              value: "360830"
            }, {
              label: "井冈山市",
              value: "360881"
            }],
            [{
              label: "袁州区",
              value: "360902"
            }, {
              label: "奉新县",
              value: "360921"
            }, {
              label: "万载县",
              value: "360922"
            }, {
              label: "上高县",
              value: "360923"
            }, {
              label: "宜丰县",
              value: "360924"
            }, {
              label: "靖安县",
              value: "360925"
            }, {
              label: "铜鼓县",
              value: "360926"
            }, {
              label: "丰城市",
              value: "360981"
            }, {
              label: "樟树市",
              value: "360982"
            }, {
              label: "高安市",
              value: "360983"
            }],
            [{
              label: "临川区",
              value: "361002"
            }, {
              label: "东乡区",
              value: "361003"
            }, {
              label: "南城县",
              value: "361021"
            }, {
              label: "黎川县",
              value: "361022"
            }, {
              label: "南丰县",
              value: "361023"
            }, {
              label: "崇仁县",
              value: "361024"
            }, {
              label: "乐安县",
              value: "361025"
            }, {
              label: "宜黄县",
              value: "361026"
            }, {
              label: "金溪县",
              value: "361027"
            }, {
              label: "资溪县",
              value: "361028"
            }, {
              label: "广昌县",
              value: "361030"
            }],
            [{
              label: "信州区",
              value: "361102"
            }, {
              label: "广丰区",
              value: "361103"
            }, {
              label: "上饶县",
              value: "361121"
            }, {
              label: "玉山县",
              value: "361123"
            }, {
              label: "铅山县",
              value: "361124"
            }, {
              label: "横峰县",
              value: "361125"
            }, {
              label: "弋阳县",
              value: "361126"
            }, {
              label: "余干县",
              value: "361127"
            }, {
              label: "鄱阳县",
              value: "361128"
            }, {
              label: "万年县",
              value: "361129"
            }, {
              label: "婺源县",
              value: "361130"
            }, {
              label: "德兴市",
              value: "361181"
            }]
          ],
          [
            [{
              label: "历下区",
              value: "370102"
            }, {
              label: "市中区",
              value: "370103"
            }, {
              label: "槐荫区",
              value: "370104"
            }, {
              label: "天桥区",
              value: "370105"
            }, {
              label: "历城区",
              value: "370112"
            }, {
              label: "长清区",
              value: "370113"
            }, {
              label: "章丘区",
              value: "370114"
            }, {
              label: "平阴县",
              value: "370124"
            }, {
              label: "济阳县",
              value: "370125"
            }, {
              label: "商河县",
              value: "370126"
            }, {
              label: "济南高新技术产业开发区",
              value: "370171"
            }],
            [{
              label: "市南区",
              value: "370202"
            }, {
              label: "市北区",
              value: "370203"
            }, {
              label: "黄岛区",
              value: "370211"
            }, {
              label: "崂山区",
              value: "370212"
            }, {
              label: "李沧区",
              value: "370213"
            }, {
              label: "城阳区",
              value: "370214"
            }, {
              label: "即墨区",
              value: "370215"
            }, {
              label: "青岛高新技术产业开发区",
              value: "370271"
            }, {
              label: "胶州市",
              value: "370281"
            }, {
              label: "平度市",
              value: "370283"
            }, {
              label: "莱西市",
              value: "370285"
            }],
            [{
              label: "淄川区",
              value: "370302"
            }, {
              label: "张店区",
              value: "370303"
            }, {
              label: "博山区",
              value: "370304"
            }, {
              label: "临淄区",
              value: "370305"
            }, {
              label: "周村区",
              value: "370306"
            }, {
              label: "桓台县",
              value: "370321"
            }, {
              label: "高青县",
              value: "370322"
            }, {
              label: "沂源县",
              value: "370323"
            }],
            [{
              label: "市中区",
              value: "370402"
            }, {
              label: "薛城区",
              value: "370403"
            }, {
              label: "峄城区",
              value: "370404"
            }, {
              label: "台儿庄区",
              value: "370405"
            }, {
              label: "山亭区",
              value: "370406"
            }, {
              label: "滕州市",
              value: "370481"
            }],
            [{
              label: "东营区",
              value: "370502"
            }, {
              label: "河口区",
              value: "370503"
            }, {
              label: "垦利区",
              value: "370505"
            }, {
              label: "利津县",
              value: "370522"
            }, {
              label: "广饶县",
              value: "370523"
            }, {
              label: "东营经济技术开发区",
              value: "370571"
            }, {
              label: "东营港经济开发区",
              value: "370572"
            }],
            [{
              label: "芝罘区",
              value: "370602"
            }, {
              label: "福山区",
              value: "370611"
            }, {
              label: "牟平区",
              value: "370612"
            }, {
              label: "莱山区",
              value: "370613"
            }, {
              label: "长岛县",
              value: "370634"
            }, {
              label: "烟台高新技术产业开发区",
              value: "370671"
            }, {
              label: "烟台经济技术开发区",
              value: "370672"
            }, {
              label: "龙口市",
              value: "370681"
            }, {
              label: "莱阳市",
              value: "370682"
            }, {
              label: "莱州市",
              value: "370683"
            }, {
              label: "蓬莱市",
              value: "370684"
            }, {
              label: "招远市",
              value: "370685"
            }, {
              label: "栖霞市",
              value: "370686"
            }, {
              label: "海阳市",
              value: "370687"
            }],
            [{
              label: "潍城区",
              value: "370702"
            }, {
              label: "寒亭区",
              value: "370703"
            }, {
              label: "坊子区",
              value: "370704"
            }, {
              label: "奎文区",
              value: "370705"
            }, {
              label: "临朐县",
              value: "370724"
            }, {
              label: "昌乐县",
              value: "370725"
            }, {
              label: "潍坊滨海经济技术开发区",
              value: "370772"
            }, {
              label: "青州市",
              value: "370781"
            }, {
              label: "诸城市",
              value: "370782"
            }, {
              label: "寿光市",
              value: "370783"
            }, {
              label: "安丘市",
              value: "370784"
            }, {
              label: "高密市",
              value: "370785"
            }, {
              label: "昌邑市",
              value: "370786"
            }],
            [{
              label: "任城区",
              value: "370811"
            }, {
              label: "兖州区",
              value: "370812"
            }, {
              label: "微山县",
              value: "370826"
            }, {
              label: "鱼台县",
              value: "370827"
            }, {
              label: "金乡县",
              value: "370828"
            }, {
              label: "嘉祥县",
              value: "370829"
            }, {
              label: "汶上县",
              value: "370830"
            }, {
              label: "泗水县",
              value: "370831"
            }, {
              label: "梁山县",
              value: "370832"
            }, {
              label: "济宁高新技术产业开发区",
              value: "370871"
            }, {
              label: "曲阜市",
              value: "370881"
            }, {
              label: "邹城市",
              value: "370883"
            }],
            [{
              label: "泰山区",
              value: "370902"
            }, {
              label: "岱岳区",
              value: "370911"
            }, {
              label: "宁阳县",
              value: "370921"
            }, {
              label: "东平县",
              value: "370923"
            }, {
              label: "新泰市",
              value: "370982"
            }, {
              label: "肥城市",
              value: "370983"
            }],
            [{
              label: "环翠区",
              value: "371002"
            }, {
              label: "文登区",
              value: "371003"
            }, {
              label: "威海火炬高技术产业开发区",
              value: "371071"
            }, {
              label: "威海经济技术开发区",
              value: "371072"
            }, {
              label: "威海临港经济技术开发区",
              value: "371073"
            }, {
              label: "荣成市",
              value: "371082"
            }, {
              label: "乳山市",
              value: "371083"
            }],
            [{
              label: "东港区",
              value: "371102"
            }, {
              label: "岚山区",
              value: "371103"
            }, {
              label: "五莲县",
              value: "371121"
            }, {
              label: "莒县",
              value: "371122"
            }, {
              label: "日照经济技术开发区",
              value: "371171"
            }, {
              label: "日照国际海洋城",
              value: "371172"
            }],
            [{
              label: "莱城区",
              value: "371202"
            }, {
              label: "钢城区",
              value: "371203"
            }],
            [{
              label: "兰山区",
              value: "371302"
            }, {
              label: "罗庄区",
              value: "371311"
            }, {
              label: "河东区",
              value: "371312"
            }, {
              label: "沂南县",
              value: "371321"
            }, {
              label: "郯城县",
              value: "371322"
            }, {
              label: "沂水县",
              value: "371323"
            }, {
              label: "兰陵县",
              value: "371324"
            }, {
              label: "费县",
              value: "371325"
            }, {
              label: "平邑县",
              value: "371326"
            }, {
              label: "莒南县",
              value: "371327"
            }, {
              label: "蒙阴县",
              value: "371328"
            }, {
              label: "临沭县",
              value: "371329"
            }, {
              label: "临沂高新技术产业开发区",
              value: "371371"
            }, {
              label: "临沂经济技术开发区",
              value: "371372"
            }, {
              label: "临沂临港经济开发区",
              value: "371373"
            }],
            [{
              label: "德城区",
              value: "371402"
            }, {
              label: "陵城区",
              value: "371403"
            }, {
              label: "宁津县",
              value: "371422"
            }, {
              label: "庆云县",
              value: "371423"
            }, {
              label: "临邑县",
              value: "371424"
            }, {
              label: "齐河县",
              value: "371425"
            }, {
              label: "平原县",
              value: "371426"
            }, {
              label: "夏津县",
              value: "371427"
            }, {
              label: "武城县",
              value: "371428"
            }, {
              label: "德州经济技术开发区",
              value: "371471"
            }, {
              label: "德州运河经济开发区",
              value: "371472"
            }, {
              label: "乐陵市",
              value: "371481"
            }, {
              label: "禹城市",
              value: "371482"
            }],
            [{
              label: "东昌府区",
              value: "371502"
            }, {
              label: "阳谷县",
              value: "371521"
            }, {
              label: "莘县",
              value: "371522"
            }, {
              label: "茌平县",
              value: "371523"
            }, {
              label: "东阿县",
              value: "371524"
            }, {
              label: "冠县",
              value: "371525"
            }, {
              label: "高唐县",
              value: "371526"
            }, {
              label: "临清市",
              value: "371581"
            }],
            [{
              label: "滨城区",
              value: "371602"
            }, {
              label: "沾化区",
              value: "371603"
            }, {
              label: "惠民县",
              value: "371621"
            }, {
              label: "阳信县",
              value: "371622"
            }, {
              label: "无棣县",
              value: "371623"
            }, {
              label: "博兴县",
              value: "371625"
            }, {
              label: "邹平县",
              value: "371626"
            }],
            [{
              label: "牡丹区",
              value: "371702"
            }, {
              label: "定陶区",
              value: "371703"
            }, {
              label: "曹县",
              value: "371721"
            }, {
              label: "单县",
              value: "371722"
            }, {
              label: "成武县",
              value: "371723"
            }, {
              label: "巨野县",
              value: "371724"
            }, {
              label: "郓城县",
              value: "371725"
            }, {
              label: "鄄城县",
              value: "371726"
            }, {
              label: "东明县",
              value: "371728"
            }, {
              label: "菏泽经济技术开发区",
              value: "371771"
            }, {
              label: "菏泽高新技术开发区",
              value: "371772"
            }]
          ],
          [
            [{
              label: "中原区",
              value: "410102"
            }, {
              label: "二七区",
              value: "410103"
            }, {
              label: "管城回族区",
              value: "410104"
            }, {
              label: "金水区",
              value: "410105"
            }, {
              label: "上街区",
              value: "410106"
            }, {
              label: "惠济区",
              value: "410108"
            }, {
              label: "中牟县",
              value: "410122"
            }, {
              label: "郑州经济技术开发区",
              value: "410171"
            }, {
              label: "郑州高新技术产业开发区",
              value: "410172"
            }, {
              label: "郑州航空港经济综合实验区",
              value: "410173"
            }, {
              label: "巩义市",
              value: "410181"
            }, {
              label: "荥阳市",
              value: "410182"
            }, {
              label: "新密市",
              value: "410183"
            }, {
              label: "新郑市",
              value: "410184"
            }, {
              label: "登封市",
              value: "410185"
            }],
            [{
              label: "龙亭区",
              value: "410202"
            }, {
              label: "顺河回族区",
              value: "410203"
            }, {
              label: "鼓楼区",
              value: "410204"
            }, {
              label: "禹王台区",
              value: "410205"
            }, {
              label: "祥符区",
              value: "410212"
            }, {
              label: "杞县",
              value: "410221"
            }, {
              label: "通许县",
              value: "410222"
            }, {
              label: "尉氏县",
              value: "410223"
            }, {
              label: "兰考县",
              value: "410225"
            }],
            [{
              label: "老城区",
              value: "410302"
            }, {
              label: "西工区",
              value: "410303"
            }, {
              label: "瀍河回族区",
              value: "410304"
            }, {
              label: "涧西区",
              value: "410305"
            }, {
              label: "吉利区",
              value: "410306"
            }, {
              label: "洛龙区",
              value: "410311"
            }, {
              label: "孟津县",
              value: "410322"
            }, {
              label: "新安县",
              value: "410323"
            }, {
              label: "栾川县",
              value: "410324"
            }, {
              label: "嵩县",
              value: "410325"
            }, {
              label: "汝阳县",
              value: "410326"
            }, {
              label: "宜阳县",
              value: "410327"
            }, {
              label: "洛宁县",
              value: "410328"
            }, {
              label: "伊川县",
              value: "410329"
            }, {
              label: "洛阳高新技术产业开发区",
              value: "410371"
            }, {
              label: "偃师市",
              value: "410381"
            }],
            [{
              label: "新华区",
              value: "410402"
            }, {
              label: "卫东区",
              value: "410403"
            }, {
              label: "石龙区",
              value: "410404"
            }, {
              label: "湛河区",
              value: "410411"
            }, {
              label: "宝丰县",
              value: "410421"
            }, {
              label: "叶县",
              value: "410422"
            }, {
              label: "鲁山县",
              value: "410423"
            }, {
              label: "郏县",
              value: "410425"
            }, {
              label: "平顶山高新技术产业开发区",
              value: "410471"
            }, {
              label: "平顶山市新城区",
              value: "410472"
            }, {
              label: "舞钢市",
              value: "410481"
            }, {
              label: "汝州市",
              value: "410482"
            }],
            [{
              label: "文峰区",
              value: "410502"
            }, {
              label: "北关区",
              value: "410503"
            }, {
              label: "殷都区",
              value: "410505"
            }, {
              label: "龙安区",
              value: "410506"
            }, {
              label: "安阳县",
              value: "410522"
            }, {
              label: "汤阴县",
              value: "410523"
            }, {
              label: "滑县",
              value: "410526"
            }, {
              label: "内黄县",
              value: "410527"
            }, {
              label: "安阳高新技术产业开发区",
              value: "410571"
            }, {
              label: "林州市",
              value: "410581"
            }],
            [{
              label: "鹤山区",
              value: "410602"
            }, {
              label: "山城区",
              value: "410603"
            }, {
              label: "淇滨区",
              value: "410611"
            }, {
              label: "浚县",
              value: "410621"
            }, {
              label: "淇县",
              value: "410622"
            }, {
              label: "鹤壁经济技术开发区",
              value: "410671"
            }],
            [{
              label: "红旗区",
              value: "410702"
            }, {
              label: "卫滨区",
              value: "410703"
            }, {
              label: "凤泉区",
              value: "410704"
            }, {
              label: "牧野区",
              value: "410711"
            }, {
              label: "新乡县",
              value: "410721"
            }, {
              label: "获嘉县",
              value: "410724"
            }, {
              label: "原阳县",
              value: "410725"
            }, {
              label: "延津县",
              value: "410726"
            }, {
              label: "封丘县",
              value: "410727"
            }, {
              label: "长垣县",
              value: "410728"
            }, {
              label: "新乡高新技术产业开发区",
              value: "410771"
            }, {
              label: "新乡经济技术开发区",
              value: "410772"
            }, {
              label: "新乡市平原城乡一体化示范区",
              value: "410773"
            }, {
              label: "卫辉市",
              value: "410781"
            }, {
              label: "辉县市",
              value: "410782"
            }],
            [{
              label: "解放区",
              value: "410802"
            }, {
              label: "中站区",
              value: "410803"
            }, {
              label: "马村区",
              value: "410804"
            }, {
              label: "山阳区",
              value: "410811"
            }, {
              label: "修武县",
              value: "410821"
            }, {
              label: "博爱县",
              value: "410822"
            }, {
              label: "武陟县",
              value: "410823"
            }, {
              label: "温县",
              value: "410825"
            }, {
              label: "焦作城乡一体化示范区",
              value: "410871"
            }, {
              label: "沁阳市",
              value: "410882"
            }, {
              label: "孟州市",
              value: "410883"
            }],
            [{
              label: "华龙区",
              value: "410902"
            }, {
              label: "清丰县",
              value: "410922"
            }, {
              label: "南乐县",
              value: "410923"
            }, {
              label: "范县",
              value: "410926"
            }, {
              label: "台前县",
              value: "410927"
            }, {
              label: "濮阳县",
              value: "410928"
            }, {
              label: "河南濮阳工业园区",
              value: "410971"
            }, {
              label: "濮阳经济技术开发区",
              value: "410972"
            }],
            [{
              label: "魏都区",
              value: "411002"
            }, {
              label: "建安区",
              value: "411003"
            }, {
              label: "鄢陵县",
              value: "411024"
            }, {
              label: "襄城县",
              value: "411025"
            }, {
              label: "许昌经济技术开发区",
              value: "411071"
            }, {
              label: "禹州市",
              value: "411081"
            }, {
              label: "长葛市",
              value: "411082"
            }],
            [{
              label: "源汇区",
              value: "411102"
            }, {
              label: "郾城区",
              value: "411103"
            }, {
              label: "召陵区",
              value: "411104"
            }, {
              label: "舞阳县",
              value: "411121"
            }, {
              label: "临颍县",
              value: "411122"
            }, {
              label: "漯河经济技术开发区",
              value: "411171"
            }],
            [{
              label: "湖滨区",
              value: "411202"
            }, {
              label: "陕州区",
              value: "411203"
            }, {
              label: "渑池县",
              value: "411221"
            }, {
              label: "卢氏县",
              value: "411224"
            }, {
              label: "河南三门峡经济开发区",
              value: "411271"
            }, {
              label: "义马市",
              value: "411281"
            }, {
              label: "灵宝市",
              value: "411282"
            }],
            [{
              label: "宛城区",
              value: "411302"
            }, {
              label: "卧龙区",
              value: "411303"
            }, {
              label: "南召县",
              value: "411321"
            }, {
              label: "方城县",
              value: "411322"
            }, {
              label: "西峡县",
              value: "411323"
            }, {
              label: "镇平县",
              value: "411324"
            }, {
              label: "内乡县",
              value: "411325"
            }, {
              label: "淅川县",
              value: "411326"
            }, {
              label: "社旗县",
              value: "411327"
            }, {
              label: "唐河县",
              value: "411328"
            }, {
              label: "新野县",
              value: "411329"
            }, {
              label: "桐柏县",
              value: "411330"
            }, {
              label: "南阳高新技术产业开发区",
              value: "411371"
            }, {
              label: "南阳市城乡一体化示范区",
              value: "411372"
            }, {
              label: "邓州市",
              value: "411381"
            }],
            [{
              label: "梁园区",
              value: "411402"
            }, {
              label: "睢阳区",
              value: "411403"
            }, {
              label: "民权县",
              value: "411421"
            }, {
              label: "睢县",
              value: "411422"
            }, {
              label: "宁陵县",
              value: "411423"
            }, {
              label: "柘城县",
              value: "411424"
            }, {
              label: "虞城县",
              value: "411425"
            }, {
              label: "夏邑县",
              value: "411426"
            }, {
              label: "豫东综合物流产业聚集区",
              value: "411471"
            }, {
              label: "河南商丘经济开发区",
              value: "411472"
            }, {
              label: "永城市",
              value: "411481"
            }],
            [{
              label: "浉河区",
              value: "411502"
            }, {
              label: "平桥区",
              value: "411503"
            }, {
              label: "罗山县",
              value: "411521"
            }, {
              label: "光山县",
              value: "411522"
            }, {
              label: "新县",
              value: "411523"
            }, {
              label: "商城县",
              value: "411524"
            }, {
              label: "固始县",
              value: "411525"
            }, {
              label: "潢川县",
              value: "411526"
            }, {
              label: "淮滨县",
              value: "411527"
            }, {
              label: "息县",
              value: "411528"
            }, {
              label: "信阳高新技术产业开发区",
              value: "411571"
            }],
            [{
              label: "川汇区",
              value: "411602"
            }, {
              label: "扶沟县",
              value: "411621"
            }, {
              label: "西华县",
              value: "411622"
            }, {
              label: "商水县",
              value: "411623"
            }, {
              label: "沈丘县",
              value: "411624"
            }, {
              label: "郸城县",
              value: "411625"
            }, {
              label: "淮阳县",
              value: "411626"
            }, {
              label: "太康县",
              value: "411627"
            }, {
              label: "鹿邑县",
              value: "411628"
            }, {
              label: "河南周口经济开发区",
              value: "411671"
            }, {
              label: "项城市",
              value: "411681"
            }],
            [{
              label: "驿城区",
              value: "411702"
            }, {
              label: "西平县",
              value: "411721"
            }, {
              label: "上蔡县",
              value: "411722"
            }, {
              label: "平舆县",
              value: "411723"
            }, {
              label: "正阳县",
              value: "411724"
            }, {
              label: "确山县",
              value: "411725"
            }, {
              label: "泌阳县",
              value: "411726"
            }, {
              label: "汝南县",
              value: "411727"
            }, {
              label: "遂平县",
              value: "411728"
            }, {
              label: "新蔡县",
              value: "411729"
            }, {
              label: "河南驻马店经济开发区",
              value: "411771"
            }],
            [{
              label: "济源市",
              value: "419001"
            }]
          ],
          [
            [{
              label: "江岸区",
              value: "420102"
            }, {
              label: "江汉区",
              value: "420103"
            }, {
              label: "硚口区",
              value: "420104"
            }, {
              label: "汉阳区",
              value: "420105"
            }, {
              label: "武昌区",
              value: "420106"
            }, {
              label: "青山区",
              value: "420107"
            }, {
              label: "洪山区",
              value: "420111"
            }, {
              label: "东西湖区",
              value: "420112"
            }, {
              label: "汉南区",
              value: "420113"
            }, {
              label: "蔡甸区",
              value: "420114"
            }, {
              label: "江夏区",
              value: "420115"
            }, {
              label: "黄陂区",
              value: "420116"
            }, {
              label: "新洲区",
              value: "420117"
            }],
            [{
              label: "黄石港区",
              value: "420202"
            }, {
              label: "西塞山区",
              value: "420203"
            }, {
              label: "下陆区",
              value: "420204"
            }, {
              label: "铁山区",
              value: "420205"
            }, {
              label: "阳新县",
              value: "420222"
            }, {
              label: "大冶市",
              value: "420281"
            }],
            [{
              label: "茅箭区",
              value: "420302"
            }, {
              label: "张湾区",
              value: "420303"
            }, {
              label: "郧阳区",
              value: "420304"
            }, {
              label: "郧西县",
              value: "420322"
            }, {
              label: "竹山县",
              value: "420323"
            }, {
              label: "竹溪县",
              value: "420324"
            }, {
              label: "房县",
              value: "420325"
            }, {
              label: "丹江口市",
              value: "420381"
            }],
            [{
              label: "西陵区",
              value: "420502"
            }, {
              label: "伍家岗区",
              value: "420503"
            }, {
              label: "点军区",
              value: "420504"
            }, {
              label: "猇亭区",
              value: "420505"
            }, {
              label: "夷陵区",
              value: "420506"
            }, {
              label: "远安县",
              value: "420525"
            }, {
              label: "兴山县",
              value: "420526"
            }, {
              label: "秭归县",
              value: "420527"
            }, {
              label: "长阳土家族自治县",
              value: "420528"
            }, {
              label: "五峰土家族自治县",
              value: "420529"
            }, {
              label: "宜都市",
              value: "420581"
            }, {
              label: "当阳市",
              value: "420582"
            }, {
              label: "枝江市",
              value: "420583"
            }],
            [{
              label: "襄城区",
              value: "420602"
            }, {
              label: "樊城区",
              value: "420606"
            }, {
              label: "襄州区",
              value: "420607"
            }, {
              label: "南漳县",
              value: "420624"
            }, {
              label: "谷城县",
              value: "420625"
            }, {
              label: "保康县",
              value: "420626"
            }, {
              label: "老河口市",
              value: "420682"
            }, {
              label: "枣阳市",
              value: "420683"
            }, {
              label: "宜城市",
              value: "420684"
            }],
            [{
              label: "梁子湖区",
              value: "420702"
            }, {
              label: "华容区",
              value: "420703"
            }, {
              label: "鄂城区",
              value: "420704"
            }],
            [{
              label: "东宝区",
              value: "420802"
            }, {
              label: "掇刀区",
              value: "420804"
            }, {
              label: "京山县",
              value: "420821"
            }, {
              label: "沙洋县",
              value: "420822"
            }, {
              label: "钟祥市",
              value: "420881"
            }],
            [{
              label: "孝南区",
              value: "420902"
            }, {
              label: "孝昌县",
              value: "420921"
            }, {
              label: "大悟县",
              value: "420922"
            }, {
              label: "云梦县",
              value: "420923"
            }, {
              label: "应城市",
              value: "420981"
            }, {
              label: "安陆市",
              value: "420982"
            }, {
              label: "汉川市",
              value: "420984"
            }],
            [{
              label: "沙市区",
              value: "421002"
            }, {
              label: "荆州区",
              value: "421003"
            }, {
              label: "公安县",
              value: "421022"
            }, {
              label: "监利县",
              value: "421023"
            }, {
              label: "江陵县",
              value: "421024"
            }, {
              label: "荆州经济技术开发区",
              value: "421071"
            }, {
              label: "石首市",
              value: "421081"
            }, {
              label: "洪湖市",
              value: "421083"
            }, {
              label: "松滋市",
              value: "421087"
            }],
            [{
              label: "黄州区",
              value: "421102"
            }, {
              label: "团风县",
              value: "421121"
            }, {
              label: "红安县",
              value: "421122"
            }, {
              label: "罗田县",
              value: "421123"
            }, {
              label: "英山县",
              value: "421124"
            }, {
              label: "浠水县",
              value: "421125"
            }, {
              label: "蕲春县",
              value: "421126"
            }, {
              label: "黄梅县",
              value: "421127"
            }, {
              label: "龙感湖管理区",
              value: "421171"
            }, {
              label: "麻城市",
              value: "421181"
            }, {
              label: "武穴市",
              value: "421182"
            }],
            [{
              label: "咸安区",
              value: "421202"
            }, {
              label: "嘉鱼县",
              value: "421221"
            }, {
              label: "通城县",
              value: "421222"
            }, {
              label: "崇阳县",
              value: "421223"
            }, {
              label: "通山县",
              value: "421224"
            }, {
              label: "赤壁市",
              value: "421281"
            }],
            [{
              label: "曾都区",
              value: "421303"
            }, {
              label: "随县",
              value: "421321"
            }, {
              label: "广水市",
              value: "421381"
            }],
            [{
              label: "恩施市",
              value: "422801"
            }, {
              label: "利川市",
              value: "422802"
            }, {
              label: "建始县",
              value: "422822"
            }, {
              label: "巴东县",
              value: "422823"
            }, {
              label: "宣恩县",
              value: "422825"
            }, {
              label: "咸丰县",
              value: "422826"
            }, {
              label: "来凤县",
              value: "422827"
            }, {
              label: "鹤峰县",
              value: "422828"
            }],
            [{
              label: "仙桃市",
              value: "429004"
            }, {
              label: "潜江市",
              value: "429005"
            }, {
              label: "天门市",
              value: "429006"
            }, {
              label: "神农架林区",
              value: "429021"
            }]
          ],
          [
            [{
              label: "芙蓉区",
              value: "430102"
            }, {
              label: "天心区",
              value: "430103"
            }, {
              label: "岳麓区",
              value: "430104"
            }, {
              label: "开福区",
              value: "430105"
            }, {
              label: "雨花区",
              value: "430111"
            }, {
              label: "望城区",
              value: "430112"
            }, {
              label: "长沙县",
              value: "430121"
            }, {
              label: "浏阳市",
              value: "430181"
            }, {
              label: "宁乡市",
              value: "430182"
            }],
            [{
              label: "荷塘区",
              value: "430202"
            }, {
              label: "芦淞区",
              value: "430203"
            }, {
              label: "石峰区",
              value: "430204"
            }, {
              label: "天元区",
              value: "430211"
            }, {
              label: "株洲县",
              value: "430221"
            }, {
              label: "攸县",
              value: "430223"
            }, {
              label: "茶陵县",
              value: "430224"
            }, {
              label: "炎陵县",
              value: "430225"
            }, {
              label: "云龙示范区",
              value: "430271"
            }, {
              label: "醴陵市",
              value: "430281"
            }],
            [{
              label: "雨湖区",
              value: "430302"
            }, {
              label: "岳塘区",
              value: "430304"
            }, {
              label: "湘潭县",
              value: "430321"
            }, {
              label: "湖南湘潭高新技术产业园区",
              value: "430371"
            }, {
              label: "湘潭昭山示范区",
              value: "430372"
            }, {
              label: "湘潭九华示范区",
              value: "430373"
            }, {
              label: "湘乡市",
              value: "430381"
            }, {
              label: "韶山市",
              value: "430382"
            }],
            [{
              label: "珠晖区",
              value: "430405"
            }, {
              label: "雁峰区",
              value: "430406"
            }, {
              label: "石鼓区",
              value: "430407"
            }, {
              label: "蒸湘区",
              value: "430408"
            }, {
              label: "南岳区",
              value: "430412"
            }, {
              label: "衡阳县",
              value: "430421"
            }, {
              label: "衡南县",
              value: "430422"
            }, {
              label: "衡山县",
              value: "430423"
            }, {
              label: "衡东县",
              value: "430424"
            }, {
              label: "祁东县",
              value: "430426"
            }, {
              label: "衡阳综合保税区",
              value: "430471"
            }, {
              label: "湖南衡阳高新技术产业园区",
              value: "430472"
            }, {
              label: "湖南衡阳松木经济开发区",
              value: "430473"
            }, {
              label: "耒阳市",
              value: "430481"
            }, {
              label: "常宁市",
              value: "430482"
            }],
            [{
              label: "双清区",
              value: "430502"
            }, {
              label: "大祥区",
              value: "430503"
            }, {
              label: "北塔区",
              value: "430511"
            }, {
              label: "邵东县",
              value: "430521"
            }, {
              label: "新邵县",
              value: "430522"
            }, {
              label: "邵阳县",
              value: "430523"
            }, {
              label: "隆回县",
              value: "430524"
            }, {
              label: "洞口县",
              value: "430525"
            }, {
              label: "绥宁县",
              value: "430527"
            }, {
              label: "新宁县",
              value: "430528"
            }, {
              label: "城步苗族自治县",
              value: "430529"
            }, {
              label: "武冈市",
              value: "430581"
            }],
            [{
              label: "岳阳楼区",
              value: "430602"
            }, {
              label: "云溪区",
              value: "430603"
            }, {
              label: "君山区",
              value: "430611"
            }, {
              label: "岳阳县",
              value: "430621"
            }, {
              label: "华容县",
              value: "430623"
            }, {
              label: "湘阴县",
              value: "430624"
            }, {
              label: "平江县",
              value: "430626"
            }, {
              label: "岳阳市屈原管理区",
              value: "430671"
            }, {
              label: "汨罗市",
              value: "430681"
            }, {
              label: "临湘市",
              value: "430682"
            }],
            [{
              label: "武陵区",
              value: "430702"
            }, {
              label: "鼎城区",
              value: "430703"
            }, {
              label: "安乡县",
              value: "430721"
            }, {
              label: "汉寿县",
              value: "430722"
            }, {
              label: "澧县",
              value: "430723"
            }, {
              label: "临澧县",
              value: "430724"
            }, {
              label: "桃源县",
              value: "430725"
            }, {
              label: "石门县",
              value: "430726"
            }, {
              label: "常德市西洞庭管理区",
              value: "430771"
            }, {
              label: "津市市",
              value: "430781"
            }],
            [{
              label: "永定区",
              value: "430802"
            }, {
              label: "武陵源区",
              value: "430811"
            }, {
              label: "慈利县",
              value: "430821"
            }, {
              label: "桑植县",
              value: "430822"
            }],
            [{
              label: "资阳区",
              value: "430902"
            }, {
              label: "赫山区",
              value: "430903"
            }, {
              label: "南县",
              value: "430921"
            }, {
              label: "桃江县",
              value: "430922"
            }, {
              label: "安化县",
              value: "430923"
            }, {
              label: "益阳市大通湖管理区",
              value: "430971"
            }, {
              label: "湖南益阳高新技术产业园区",
              value: "430972"
            }, {
              label: "沅江市",
              value: "430981"
            }],
            [{
              label: "北湖区",
              value: "431002"
            }, {
              label: "苏仙区",
              value: "431003"
            }, {
              label: "桂阳县",
              value: "431021"
            }, {
              label: "宜章县",
              value: "431022"
            }, {
              label: "永兴县",
              value: "431023"
            }, {
              label: "嘉禾县",
              value: "431024"
            }, {
              label: "临武县",
              value: "431025"
            }, {
              label: "汝城县",
              value: "431026"
            }, {
              label: "桂东县",
              value: "431027"
            }, {
              label: "安仁县",
              value: "431028"
            }, {
              label: "资兴市",
              value: "431081"
            }],
            [{
              label: "零陵区",
              value: "431102"
            }, {
              label: "冷水滩区",
              value: "431103"
            }, {
              label: "祁阳县",
              value: "431121"
            }, {
              label: "东安县",
              value: "431122"
            }, {
              label: "双牌县",
              value: "431123"
            }, {
              label: "道县",
              value: "431124"
            }, {
              label: "江永县",
              value: "431125"
            }, {
              label: "宁远县",
              value: "431126"
            }, {
              label: "蓝山县",
              value: "431127"
            }, {
              label: "新田县",
              value: "431128"
            }, {
              label: "江华瑶族自治县",
              value: "431129"
            }, {
              label: "永州经济技术开发区",
              value: "431171"
            }, {
              label: "永州市金洞管理区",
              value: "431172"
            }, {
              label: "永州市回龙圩管理区",
              value: "431173"
            }],
            [{
              label: "鹤城区",
              value: "431202"
            }, {
              label: "中方县",
              value: "431221"
            }, {
              label: "沅陵县",
              value: "431222"
            }, {
              label: "辰溪县",
              value: "431223"
            }, {
              label: "溆浦县",
              value: "431224"
            }, {
              label: "会同县",
              value: "431225"
            }, {
              label: "麻阳苗族自治县",
              value: "431226"
            }, {
              label: "新晃侗族自治县",
              value: "431227"
            }, {
              label: "芷江侗族自治县",
              value: "431228"
            }, {
              label: "靖州苗族侗族自治县",
              value: "431229"
            }, {
              label: "通道侗族自治县",
              value: "431230"
            }, {
              label: "怀化市洪江管理区",
              value: "431271"
            }, {
              label: "洪江市",
              value: "431281"
            }],
            [{
              label: "娄星区",
              value: "431302"
            }, {
              label: "双峰县",
              value: "431321"
            }, {
              label: "新化县",
              value: "431322"
            }, {
              label: "冷水江市",
              value: "431381"
            }, {
              label: "涟源市",
              value: "431382"
            }],
            [{
              label: "吉首市",
              value: "433101"
            }, {
              label: "泸溪县",
              value: "433122"
            }, {
              label: "凤凰县",
              value: "433123"
            }, {
              label: "花垣县",
              value: "433124"
            }, {
              label: "保靖县",
              value: "433125"
            }, {
              label: "古丈县",
              value: "433126"
            }, {
              label: "永顺县",
              value: "433127"
            }, {
              label: "龙山县",
              value: "433130"
            }, {
              label: "湖南吉首经济开发区",
              value: "433172"
            }, {
              label: "湖南永顺经济开发区",
              value: "433173"
            }]
          ],
          [
            [{
              label: "荔湾区",
              value: "440103"
            }, {
              label: "越秀区",
              value: "440104"
            }, {
              label: "海珠区",
              value: "440105"
            }, {
              label: "天河区",
              value: "440106"
            }, {
              label: "白云区",
              value: "440111"
            }, {
              label: "黄埔区",
              value: "440112"
            }, {
              label: "番禺区",
              value: "440113"
            }, {
              label: "花都区",
              value: "440114"
            }, {
              label: "南沙区",
              value: "440115"
            }, {
              label: "从化区",
              value: "440117"
            }, {
              label: "增城区",
              value: "440118"
            }],
            [{
              label: "武江区",
              value: "440203"
            }, {
              label: "浈江区",
              value: "440204"
            }, {
              label: "曲江区",
              value: "440205"
            }, {
              label: "始兴县",
              value: "440222"
            }, {
              label: "仁化县",
              value: "440224"
            }, {
              label: "翁源县",
              value: "440229"
            }, {
              label: "乳源瑶族自治县",
              value: "440232"
            }, {
              label: "新丰县",
              value: "440233"
            }, {
              label: "乐昌市",
              value: "440281"
            }, {
              label: "南雄市",
              value: "440282"
            }],
            [{
              label: "罗湖区",
              value: "440303"
            }, {
              label: "福田区",
              value: "440304"
            }, {
              label: "南山区",
              value: "440305"
            }, {
              label: "宝安区",
              value: "440306"
            }, {
              label: "龙岗区",
              value: "440307"
            }, {
              label: "盐田区",
              value: "440308"
            }, {
              label: "龙华区",
              value: "440309"
            }, {
              label: "坪山区",
              value: "440310"
            }],
            [{
              label: "香洲区",
              value: "440402"
            }, {
              label: "斗门区",
              value: "440403"
            }, {
              label: "金湾区",
              value: "440404"
            }],
            [{
              label: "龙湖区",
              value: "440507"
            }, {
              label: "金平区",
              value: "440511"
            }, {
              label: "濠江区",
              value: "440512"
            }, {
              label: "潮阳区",
              value: "440513"
            }, {
              label: "潮南区",
              value: "440514"
            }, {
              label: "澄海区",
              value: "440515"
            }, {
              label: "南澳县",
              value: "440523"
            }],
            [{
              label: "禅城区",
              value: "440604"
            }, {
              label: "南海区",
              value: "440605"
            }, {
              label: "顺德区",
              value: "440606"
            }, {
              label: "三水区",
              value: "440607"
            }, {
              label: "高明区",
              value: "440608"
            }],
            [{
              label: "蓬江区",
              value: "440703"
            }, {
              label: "江海区",
              value: "440704"
            }, {
              label: "新会区",
              value: "440705"
            }, {
              label: "台山市",
              value: "440781"
            }, {
              label: "开平市",
              value: "440783"
            }, {
              label: "鹤山市",
              value: "440784"
            }, {
              label: "恩平市",
              value: "440785"
            }],
            [{
              label: "赤坎区",
              value: "440802"
            }, {
              label: "霞山区",
              value: "440803"
            }, {
              label: "坡头区",
              value: "440804"
            }, {
              label: "麻章区",
              value: "440811"
            }, {
              label: "遂溪县",
              value: "440823"
            }, {
              label: "徐闻县",
              value: "440825"
            }, {
              label: "廉江市",
              value: "440881"
            }, {
              label: "雷州市",
              value: "440882"
            }, {
              label: "吴川市",
              value: "440883"
            }],
            [{
              label: "茂南区",
              value: "440902"
            }, {
              label: "电白区",
              value: "440904"
            }, {
              label: "高州市",
              value: "440981"
            }, {
              label: "化州市",
              value: "440982"
            }, {
              label: "信宜市",
              value: "440983"
            }],
            [{
              label: "端州区",
              value: "441202"
            }, {
              label: "鼎湖区",
              value: "441203"
            }, {
              label: "高要区",
              value: "441204"
            }, {
              label: "广宁县",
              value: "441223"
            }, {
              label: "怀集县",
              value: "441224"
            }, {
              label: "封开县",
              value: "441225"
            }, {
              label: "德庆县",
              value: "441226"
            }, {
              label: "四会市",
              value: "441284"
            }],
            [{
              label: "惠城区",
              value: "441302"
            }, {
              label: "惠阳区",
              value: "441303"
            }, {
              label: "博罗县",
              value: "441322"
            }, {
              label: "惠东县",
              value: "441323"
            }, {
              label: "龙门县",
              value: "441324"
            }],
            [{
              label: "梅江区",
              value: "441402"
            }, {
              label: "梅县区",
              value: "441403"
            }, {
              label: "大埔县",
              value: "441422"
            }, {
              label: "丰顺县",
              value: "441423"
            }, {
              label: "五华县",
              value: "441424"
            }, {
              label: "平远县",
              value: "441426"
            }, {
              label: "蕉岭县",
              value: "441427"
            }, {
              label: "兴宁市",
              value: "441481"
            }],
            [{
              label: "城区",
              value: "441502"
            }, {
              label: "海丰县",
              value: "441521"
            }, {
              label: "陆河县",
              value: "441523"
            }, {
              label: "陆丰市",
              value: "441581"
            }],
            [{
              label: "源城区",
              value: "441602"
            }, {
              label: "紫金县",
              value: "441621"
            }, {
              label: "龙川县",
              value: "441622"
            }, {
              label: "连平县",
              value: "441623"
            }, {
              label: "和平县",
              value: "441624"
            }, {
              label: "东源县",
              value: "441625"
            }],
            [{
              label: "江城区",
              value: "441702"
            }, {
              label: "阳东区",
              value: "441704"
            }, {
              label: "阳西县",
              value: "441721"
            }, {
              label: "阳春市",
              value: "441781"
            }],
            [{
              label: "清城区",
              value: "441802"
            }, {
              label: "清新区",
              value: "441803"
            }, {
              label: "佛冈县",
              value: "441821"
            }, {
              label: "阳山县",
              value: "441823"
            }, {
              label: "连山壮族瑶族自治县",
              value: "441825"
            }, {
              label: "连南瑶族自治县",
              value: "441826"
            }, {
              label: "英德市",
              value: "441881"
            }, {
              label: "连州市",
              value: "441882"
            }],
            [{
              label: "东莞市",
              value: "441900"
            }],
            [{
              label: "中山市",
              value: "442000"
            }],
            [{
              label: "湘桥区",
              value: "445102"
            }, {
              label: "潮安区",
              value: "445103"
            }, {
              label: "饶平县",
              value: "445122"
            }],
            [{
              label: "榕城区",
              value: "445202"
            }, {
              label: "揭东区",
              value: "445203"
            }, {
              label: "揭西县",
              value: "445222"
            }, {
              label: "惠来县",
              value: "445224"
            }, {
              label: "普宁市",
              value: "445281"
            }],
            [{
              label: "云城区",
              value: "445302"
            }, {
              label: "云安区",
              value: "445303"
            }, {
              label: "新兴县",
              value: "445321"
            }, {
              label: "郁南县",
              value: "445322"
            }, {
              label: "罗定市",
              value: "445381"
            }]
          ],
          [
            [{
              label: "兴宁区",
              value: "450102"
            }, {
              label: "青秀区",
              value: "450103"
            }, {
              label: "江南区",
              value: "450105"
            }, {
              label: "西乡塘区",
              value: "450107"
            }, {
              label: "良庆区",
              value: "450108"
            }, {
              label: "邕宁区",
              value: "450109"
            }, {
              label: "武鸣区",
              value: "450110"
            }, {
              label: "隆安县",
              value: "450123"
            }, {
              label: "马山县",
              value: "450124"
            }, {
              label: "上林县",
              value: "450125"
            }, {
              label: "宾阳县",
              value: "450126"
            }, {
              label: "横县",
              value: "450127"
            }],
            [{
              label: "城中区",
              value: "450202"
            }, {
              label: "鱼峰区",
              value: "450203"
            }, {
              label: "柳南区",
              value: "450204"
            }, {
              label: "柳北区",
              value: "450205"
            }, {
              label: "柳江区",
              value: "450206"
            }, {
              label: "柳城县",
              value: "450222"
            }, {
              label: "鹿寨县",
              value: "450223"
            }, {
              label: "融安县",
              value: "450224"
            }, {
              label: "融水苗族自治县",
              value: "450225"
            }, {
              label: "三江侗族自治县",
              value: "450226"
            }],
            [{
              label: "秀峰区",
              value: "450302"
            }, {
              label: "叠彩区",
              value: "450303"
            }, {
              label: "象山区",
              value: "450304"
            }, {
              label: "七星区",
              value: "450305"
            }, {
              label: "雁山区",
              value: "450311"
            }, {
              label: "临桂区",
              value: "450312"
            }, {
              label: "阳朔县",
              value: "450321"
            }, {
              label: "灵川县",
              value: "450323"
            }, {
              label: "全州县",
              value: "450324"
            }, {
              label: "兴安县",
              value: "450325"
            }, {
              label: "永福县",
              value: "450326"
            }, {
              label: "灌阳县",
              value: "450327"
            }, {
              label: "龙胜各族自治县",
              value: "450328"
            }, {
              label: "资源县",
              value: "450329"
            }, {
              label: "平乐县",
              value: "450330"
            }, {
              label: "荔浦县",
              value: "450331"
            }, {
              label: "恭城瑶族自治县",
              value: "450332"
            }],
            [{
              label: "万秀区",
              value: "450403"
            }, {
              label: "长洲区",
              value: "450405"
            }, {
              label: "龙圩区",
              value: "450406"
            }, {
              label: "苍梧县",
              value: "450421"
            }, {
              label: "藤县",
              value: "450422"
            }, {
              label: "蒙山县",
              value: "450423"
            }, {
              label: "岑溪市",
              value: "450481"
            }],
            [{
              label: "海城区",
              value: "450502"
            }, {
              label: "银海区",
              value: "450503"
            }, {
              label: "铁山港区",
              value: "450512"
            }, {
              label: "合浦县",
              value: "450521"
            }],
            [{
              label: "港口区",
              value: "450602"
            }, {
              label: "防城区",
              value: "450603"
            }, {
              label: "上思县",
              value: "450621"
            }, {
              label: "东兴市",
              value: "450681"
            }],
            [{
              label: "钦南区",
              value: "450702"
            }, {
              label: "钦北区",
              value: "450703"
            }, {
              label: "灵山县",
              value: "450721"
            }, {
              label: "浦北县",
              value: "450722"
            }],
            [{
              label: "港北区",
              value: "450802"
            }, {
              label: "港南区",
              value: "450803"
            }, {
              label: "覃塘区",
              value: "450804"
            }, {
              label: "平南县",
              value: "450821"
            }, {
              label: "桂平市",
              value: "450881"
            }],
            [{
              label: "玉州区",
              value: "450902"
            }, {
              label: "福绵区",
              value: "450903"
            }, {
              label: "容县",
              value: "450921"
            }, {
              label: "陆川县",
              value: "450922"
            }, {
              label: "博白县",
              value: "450923"
            }, {
              label: "兴业县",
              value: "450924"
            }, {
              label: "北流市",
              value: "450981"
            }],
            [{
              label: "右江区",
              value: "451002"
            }, {
              label: "田阳县",
              value: "451021"
            }, {
              label: "田东县",
              value: "451022"
            }, {
              label: "平果县",
              value: "451023"
            }, {
              label: "德保县",
              value: "451024"
            }, {
              label: "那坡县",
              value: "451026"
            }, {
              label: "凌云县",
              value: "451027"
            }, {
              label: "乐业县",
              value: "451028"
            }, {
              label: "田林县",
              value: "451029"
            }, {
              label: "西林县",
              value: "451030"
            }, {
              label: "隆林各族自治县",
              value: "451031"
            }, {
              label: "靖西市",
              value: "451081"
            }],
            [{
              label: "八步区",
              value: "451102"
            }, {
              label: "平桂区",
              value: "451103"
            }, {
              label: "昭平县",
              value: "451121"
            }, {
              label: "钟山县",
              value: "451122"
            }, {
              label: "富川瑶族自治县",
              value: "451123"
            }],
            [{
              label: "金城江区",
              value: "451202"
            }, {
              label: "宜州区",
              value: "451203"
            }, {
              label: "南丹县",
              value: "451221"
            }, {
              label: "天峨县",
              value: "451222"
            }, {
              label: "凤山县",
              value: "451223"
            }, {
              label: "东兰县",
              value: "451224"
            }, {
              label: "罗城仫佬族自治县",
              value: "451225"
            }, {
              label: "环江毛南族自治县",
              value: "451226"
            }, {
              label: "巴马瑶族自治县",
              value: "451227"
            }, {
              label: "都安瑶族自治县",
              value: "451228"
            }, {
              label: "大化瑶族自治县",
              value: "451229"
            }],
            [{
              label: "兴宾区",
              value: "451302"
            }, {
              label: "忻城县",
              value: "451321"
            }, {
              label: "象州县",
              value: "451322"
            }, {
              label: "武宣县",
              value: "451323"
            }, {
              label: "金秀瑶族自治县",
              value: "451324"
            }, {
              label: "合山市",
              value: "451381"
            }],
            [{
              label: "江州区",
              value: "451402"
            }, {
              label: "扶绥县",
              value: "451421"
            }, {
              label: "宁明县",
              value: "451422"
            }, {
              label: "龙州县",
              value: "451423"
            }, {
              label: "大新县",
              value: "451424"
            }, {
              label: "天等县",
              value: "451425"
            }, {
              label: "凭祥市",
              value: "451481"
            }]
          ],
          [
            [{
              label: "秀英区",
              value: "460105"
            }, {
              label: "龙华区",
              value: "460106"
            }, {
              label: "琼山区",
              value: "460107"
            }, {
              label: "美兰区",
              value: "460108"
            }],
            [{
              label: "海棠区",
              value: "460202"
            }, {
              label: "吉阳区",
              value: "460203"
            }, {
              label: "天涯区",
              value: "460204"
            }, {
              label: "崖州区",
              value: "460205"
            }],
            [{
              label: "西沙群岛",
              value: "460321"
            }, {
              label: "南沙群岛",
              value: "460322"
            }, {
              label: "中沙群岛的岛礁及其海域",
              value: "460323"
            }],
            [{
              label: "儋州市",
              value: "460400"
            }],
            [{
              label: "五指山市",
              value: "469001"
            }, {
              label: "琼海市",
              value: "469002"
            }, {
              label: "文昌市",
              value: "469005"
            }, {
              label: "万宁市",
              value: "469006"
            }, {
              label: "东方市",
              value: "469007"
            }, {
              label: "定安县",
              value: "469021"
            }, {
              label: "屯昌县",
              value: "469022"
            }, {
              label: "澄迈县",
              value: "469023"
            }, {
              label: "临高县",
              value: "469024"
            }, {
              label: "白沙黎族自治县",
              value: "469025"
            }, {
              label: "昌江黎族自治县",
              value: "469026"
            }, {
              label: "乐东黎族自治县",
              value: "469027"
            }, {
              label: "陵水黎族自治县",
              value: "469028"
            }, {
              label: "保亭黎族苗族自治县",
              value: "469029"
            }, {
              label: "琼中黎族苗族自治县",
              value: "469030"
            }]
          ],
          [
            [{
              label: "万州区",
              value: "500101"
            }, {
              label: "涪陵区",
              value: "500102"
            }, {
              label: "渝中区",
              value: "500103"
            }, {
              label: "大渡口区",
              value: "500104"
            }, {
              label: "江北区",
              value: "500105"
            }, {
              label: "沙坪坝区",
              value: "500106"
            }, {
              label: "九龙坡区",
              value: "500107"
            }, {
              label: "南岸区",
              value: "500108"
            }, {
              label: "北碚区",
              value: "500109"
            }, {
              label: "綦江区",
              value: "500110"
            }, {
              label: "大足区",
              value: "500111"
            }, {
              label: "渝北区",
              value: "500112"
            }, {
              label: "巴南区",
              value: "500113"
            }, {
              label: "黔江区",
              value: "500114"
            }, {
              label: "长寿区",
              value: "500115"
            }, {
              label: "江津区",
              value: "500116"
            }, {
              label: "合川区",
              value: "500117"
            }, {
              label: "永川区",
              value: "500118"
            }, {
              label: "南川区",
              value: "500119"
            }, {
              label: "璧山区",
              value: "500120"
            }, {
              label: "铜梁区",
              value: "500151"
            }, {
              label: "潼南区",
              value: "500152"
            }, {
              label: "荣昌区",
              value: "500153"
            }, {
              label: "开州区",
              value: "500154"
            }, {
              label: "梁平区",
              value: "500155"
            }, {
              label: "武隆区",
              value: "500156"
            }],
            [{
              label: "城口县",
              value: "500229"
            }, {
              label: "丰都县",
              value: "500230"
            }, {
              label: "垫江县",
              value: "500231"
            }, {
              label: "忠县",
              value: "500233"
            }, {
              label: "云阳县",
              value: "500235"
            }, {
              label: "奉节县",
              value: "500236"
            }, {
              label: "巫山县",
              value: "500237"
            }, {
              label: "巫溪县",
              value: "500238"
            }, {
              label: "石柱土家族自治县",
              value: "500240"
            }, {
              label: "秀山土家族苗族自治县",
              value: "500241"
            }, {
              label: "酉阳土家族苗族自治县",
              value: "500242"
            }, {
              label: "彭水苗族土家族自治县",
              value: "500243"
            }]
          ],
          [
            [{
              label: "锦江区",
              value: "510104"
            }, {
              label: "青羊区",
              value: "510105"
            }, {
              label: "金牛区",
              value: "510106"
            }, {
              label: "武侯区",
              value: "510107"
            }, {
              label: "成华区",
              value: "510108"
            }, {
              label: "龙泉驿区",
              value: "510112"
            }, {
              label: "青白江区",
              value: "510113"
            }, {
              label: "新都区",
              value: "510114"
            }, {
              label: "温江区",
              value: "510115"
            }, {
              label: "双流区",
              value: "510116"
            }, {
              label: "郫都区",
              value: "510117"
            }, {
              label: "金堂县",
              value: "510121"
            }, {
              label: "大邑县",
              value: "510129"
            }, {
              label: "蒲江县",
              value: "510131"
            }, {
              label: "新津县",
              value: "510132"
            }, {
              label: "都江堰市",
              value: "510181"
            }, {
              label: "彭州市",
              value: "510182"
            }, {
              label: "邛崃市",
              value: "510183"
            }, {
              label: "崇州市",
              value: "510184"
            }, {
              label: "简阳市",
              value: "510185"
            }],
            [{
              label: "自流井区",
              value: "510302"
            }, {
              label: "贡井区",
              value: "510303"
            }, {
              label: "大安区",
              value: "510304"
            }, {
              label: "沿滩区",
              value: "510311"
            }, {
              label: "荣县",
              value: "510321"
            }, {
              label: "富顺县",
              value: "510322"
            }],
            [{
              label: "东区",
              value: "510402"
            }, {
              label: "西区",
              value: "510403"
            }, {
              label: "仁和区",
              value: "510411"
            }, {
              label: "米易县",
              value: "510421"
            }, {
              label: "盐边县",
              value: "510422"
            }],
            [{
              label: "江阳区",
              value: "510502"
            }, {
              label: "纳溪区",
              value: "510503"
            }, {
              label: "龙马潭区",
              value: "510504"
            }, {
              label: "泸县",
              value: "510521"
            }, {
              label: "合江县",
              value: "510522"
            }, {
              label: "叙永县",
              value: "510524"
            }, {
              label: "古蔺县",
              value: "510525"
            }],
            [{
              label: "旌阳区",
              value: "510603"
            }, {
              label: "罗江区",
              value: "510604"
            }, {
              label: "中江县",
              value: "510623"
            }, {
              label: "广汉市",
              value: "510681"
            }, {
              label: "什邡市",
              value: "510682"
            }, {
              label: "绵竹市",
              value: "510683"
            }],
            [{
              label: "涪城区",
              value: "510703"
            }, {
              label: "游仙区",
              value: "510704"
            }, {
              label: "安州区",
              value: "510705"
            }, {
              label: "三台县",
              value: "510722"
            }, {
              label: "盐亭县",
              value: "510723"
            }, {
              label: "梓潼县",
              value: "510725"
            }, {
              label: "北川羌族自治县",
              value: "510726"
            }, {
              label: "平武县",
              value: "510727"
            }, {
              label: "江油市",
              value: "510781"
            }],
            [{
              label: "利州区",
              value: "510802"
            }, {
              label: "昭化区",
              value: "510811"
            }, {
              label: "朝天区",
              value: "510812"
            }, {
              label: "旺苍县",
              value: "510821"
            }, {
              label: "青川县",
              value: "510822"
            }, {
              label: "剑阁县",
              value: "510823"
            }, {
              label: "苍溪县",
              value: "510824"
            }],
            [{
              label: "船山区",
              value: "510903"
            }, {
              label: "安居区",
              value: "510904"
            }, {
              label: "蓬溪县",
              value: "510921"
            }, {
              label: "射洪县",
              value: "510922"
            }, {
              label: "大英县",
              value: "510923"
            }],
            [{
              label: "市中区",
              value: "511002"
            }, {
              label: "东兴区",
              value: "511011"
            }, {
              label: "威远县",
              value: "511024"
            }, {
              label: "资中县",
              value: "511025"
            }, {
              label: "内江经济开发区",
              value: "511071"
            }, {
              label: "隆昌市",
              value: "511083"
            }],
            [{
              label: "市中区",
              value: "511102"
            }, {
              label: "沙湾区",
              value: "511111"
            }, {
              label: "五通桥区",
              value: "511112"
            }, {
              label: "金口河区",
              value: "511113"
            }, {
              label: "犍为县",
              value: "511123"
            }, {
              label: "井研县",
              value: "511124"
            }, {
              label: "夹江县",
              value: "511126"
            }, {
              label: "沐川县",
              value: "511129"
            }, {
              label: "峨边彝族自治县",
              value: "511132"
            }, {
              label: "马边彝族自治县",
              value: "511133"
            }, {
              label: "峨眉山市",
              value: "511181"
            }],
            [{
              label: "顺庆区",
              value: "511302"
            }, {
              label: "高坪区",
              value: "511303"
            }, {
              label: "嘉陵区",
              value: "511304"
            }, {
              label: "南部县",
              value: "511321"
            }, {
              label: "营山县",
              value: "511322"
            }, {
              label: "蓬安县",
              value: "511323"
            }, {
              label: "仪陇县",
              value: "511324"
            }, {
              label: "西充县",
              value: "511325"
            }, {
              label: "阆中市",
              value: "511381"
            }],
            [{
              label: "东坡区",
              value: "511402"
            }, {
              label: "彭山区",
              value: "511403"
            }, {
              label: "仁寿县",
              value: "511421"
            }, {
              label: "洪雅县",
              value: "511423"
            }, {
              label: "丹棱县",
              value: "511424"
            }, {
              label: "青神县",
              value: "511425"
            }],
            [{
              label: "翠屏区",
              value: "511502"
            }, {
              label: "南溪区",
              value: "511503"
            }, {
              label: "宜宾县",
              value: "511521"
            }, {
              label: "江安县",
              value: "511523"
            }, {
              label: "长宁县",
              value: "511524"
            }, {
              label: "高县",
              value: "511525"
            }, {
              label: "珙县",
              value: "511526"
            }, {
              label: "筠连县",
              value: "511527"
            }, {
              label: "兴文县",
              value: "511528"
            }, {
              label: "屏山县",
              value: "511529"
            }],
            [{
              label: "广安区",
              value: "511602"
            }, {
              label: "前锋区",
              value: "511603"
            }, {
              label: "岳池县",
              value: "511621"
            }, {
              label: "武胜县",
              value: "511622"
            }, {
              label: "邻水县",
              value: "511623"
            }, {
              label: "华蓥市",
              value: "511681"
            }],
            [{
              label: "通川区",
              value: "511702"
            }, {
              label: "达川区",
              value: "511703"
            }, {
              label: "宣汉县",
              value: "511722"
            }, {
              label: "开江县",
              value: "511723"
            }, {
              label: "大竹县",
              value: "511724"
            }, {
              label: "渠县",
              value: "511725"
            }, {
              label: "达州经济开发区",
              value: "511771"
            }, {
              label: "万源市",
              value: "511781"
            }],
            [{
              label: "雨城区",
              value: "511802"
            }, {
              label: "名山区",
              value: "511803"
            }, {
              label: "荥经县",
              value: "511822"
            }, {
              label: "汉源县",
              value: "511823"
            }, {
              label: "石棉县",
              value: "511824"
            }, {
              label: "天全县",
              value: "511825"
            }, {
              label: "芦山县",
              value: "511826"
            }, {
              label: "宝兴县",
              value: "511827"
            }],
            [{
              label: "巴州区",
              value: "511902"
            }, {
              label: "恩阳区",
              value: "511903"
            }, {
              label: "通江县",
              value: "511921"
            }, {
              label: "南江县",
              value: "511922"
            }, {
              label: "平昌县",
              value: "511923"
            }, {
              label: "巴中经济开发区",
              value: "511971"
            }],
            [{
              label: "雁江区",
              value: "512002"
            }, {
              label: "安岳县",
              value: "512021"
            }, {
              label: "乐至县",
              value: "512022"
            }],
            [{
              label: "马尔康市",
              value: "513201"
            }, {
              label: "汶川县",
              value: "513221"
            }, {
              label: "理县",
              value: "513222"
            }, {
              label: "茂县",
              value: "513223"
            }, {
              label: "松潘县",
              value: "513224"
            }, {
              label: "九寨沟县",
              value: "513225"
            }, {
              label: "金川县",
              value: "513226"
            }, {
              label: "小金县",
              value: "513227"
            }, {
              label: "黑水县",
              value: "513228"
            }, {
              label: "壤塘县",
              value: "513230"
            }, {
              label: "阿坝县",
              value: "513231"
            }, {
              label: "若尔盖县",
              value: "513232"
            }, {
              label: "红原县",
              value: "513233"
            }],
            [{
              label: "康定市",
              value: "513301"
            }, {
              label: "泸定县",
              value: "513322"
            }, {
              label: "丹巴县",
              value: "513323"
            }, {
              label: "九龙县",
              value: "513324"
            }, {
              label: "雅江县",
              value: "513325"
            }, {
              label: "道孚县",
              value: "513326"
            }, {
              label: "炉霍县",
              value: "513327"
            }, {
              label: "甘孜县",
              value: "513328"
            }, {
              label: "新龙县",
              value: "513329"
            }, {
              label: "德格县",
              value: "513330"
            }, {
              label: "白玉县",
              value: "513331"
            }, {
              label: "石渠县",
              value: "513332"
            }, {
              label: "色达县",
              value: "513333"
            }, {
              label: "理塘县",
              value: "513334"
            }, {
              label: "巴塘县",
              value: "513335"
            }, {
              label: "乡城县",
              value: "513336"
            }, {
              label: "稻城县",
              value: "513337"
            }, {
              label: "得荣县",
              value: "513338"
            }],
            [{
              label: "西昌市",
              value: "513401"
            }, {
              label: "木里藏族自治县",
              value: "513422"
            }, {
              label: "盐源县",
              value: "513423"
            }, {
              label: "德昌县",
              value: "513424"
            }, {
              label: "会理县",
              value: "513425"
            }, {
              label: "会东县",
              value: "513426"
            }, {
              label: "宁南县",
              value: "513427"
            }, {
              label: "普格县",
              value: "513428"
            }, {
              label: "布拖县",
              value: "513429"
            }, {
              label: "金阳县",
              value: "513430"
            }, {
              label: "昭觉县",
              value: "513431"
            }, {
              label: "喜德县",
              value: "513432"
            }, {
              label: "冕宁县",
              value: "513433"
            }, {
              label: "越西县",
              value: "513434"
            }, {
              label: "甘洛县",
              value: "513435"
            }, {
              label: "美姑县",
              value: "513436"
            }, {
              label: "雷波县",
              value: "513437"
            }]
          ],
          [
            [{
              label: "南明区",
              value: "520102"
            }, {
              label: "云岩区",
              value: "520103"
            }, {
              label: "花溪区",
              value: "520111"
            }, {
              label: "乌当区",
              value: "520112"
            }, {
              label: "白云区",
              value: "520113"
            }, {
              label: "观山湖区",
              value: "520115"
            }, {
              label: "开阳县",
              value: "520121"
            }, {
              label: "息烽县",
              value: "520122"
            }, {
              label: "修文县",
              value: "520123"
            }, {
              label: "清镇市",
              value: "520181"
            }],
            [{
              label: "钟山区",
              value: "520201"
            }, {
              label: "六枝特区",
              value: "520203"
            }, {
              label: "水城县",
              value: "520221"
            }, {
              label: "盘州市",
              value: "520281"
            }],
            [{
              label: "红花岗区",
              value: "520302"
            }, {
              label: "汇川区",
              value: "520303"
            }, {
              label: "播州区",
              value: "520304"
            }, {
              label: "桐梓县",
              value: "520322"
            }, {
              label: "绥阳县",
              value: "520323"
            }, {
              label: "正安县",
              value: "520324"
            }, {
              label: "道真仡佬族苗族自治县",
              value: "520325"
            }, {
              label: "务川仡佬族苗族自治县",
              value: "520326"
            }, {
              label: "凤冈县",
              value: "520327"
            }, {
              label: "湄潭县",
              value: "520328"
            }, {
              label: "余庆县",
              value: "520329"
            }, {
              label: "习水县",
              value: "520330"
            }, {
              label: "赤水市",
              value: "520381"
            }, {
              label: "仁怀市",
              value: "520382"
            }],
            [{
              label: "西秀区",
              value: "520402"
            }, {
              label: "平坝区",
              value: "520403"
            }, {
              label: "普定县",
              value: "520422"
            }, {
              label: "镇宁布依族苗族自治县",
              value: "520423"
            }, {
              label: "关岭布依族苗族自治县",
              value: "520424"
            }, {
              label: "紫云苗族布依族自治县",
              value: "520425"
            }],
            [{
              label: "七星关区",
              value: "520502"
            }, {
              label: "大方县",
              value: "520521"
            }, {
              label: "黔西县",
              value: "520522"
            }, {
              label: "金沙县",
              value: "520523"
            }, {
              label: "织金县",
              value: "520524"
            }, {
              label: "纳雍县",
              value: "520525"
            }, {
              label: "威宁彝族回族苗族自治县",
              value: "520526"
            }, {
              label: "赫章县",
              value: "520527"
            }],
            [{
              label: "碧江区",
              value: "520602"
            }, {
              label: "万山区",
              value: "520603"
            }, {
              label: "江口县",
              value: "520621"
            }, {
              label: "玉屏侗族自治县",
              value: "520622"
            }, {
              label: "石阡县",
              value: "520623"
            }, {
              label: "思南县",
              value: "520624"
            }, {
              label: "印江土家族苗族自治县",
              value: "520625"
            }, {
              label: "德江县",
              value: "520626"
            }, {
              label: "沿河土家族自治县",
              value: "520627"
            }, {
              label: "松桃苗族自治县",
              value: "520628"
            }],
            [{
              label: "兴义市",
              value: "522301"
            }, {
              label: "兴仁县",
              value: "522322"
            }, {
              label: "普安县",
              value: "522323"
            }, {
              label: "晴隆县",
              value: "522324"
            }, {
              label: "贞丰县",
              value: "522325"
            }, {
              label: "望谟县",
              value: "522326"
            }, {
              label: "册亨县",
              value: "522327"
            }, {
              label: "安龙县",
              value: "522328"
            }],
            [{
              label: "凯里市",
              value: "522601"
            }, {
              label: "黄平县",
              value: "522622"
            }, {
              label: "施秉县",
              value: "522623"
            }, {
              label: "三穗县",
              value: "522624"
            }, {
              label: "镇远县",
              value: "522625"
            }, {
              label: "岑巩县",
              value: "522626"
            }, {
              label: "天柱县",
              value: "522627"
            }, {
              label: "锦屏县",
              value: "522628"
            }, {
              label: "剑河县",
              value: "522629"
            }, {
              label: "台江县",
              value: "522630"
            }, {
              label: "黎平县",
              value: "522631"
            }, {
              label: "榕江县",
              value: "522632"
            }, {
              label: "从江县",
              value: "522633"
            }, {
              label: "雷山县",
              value: "522634"
            }, {
              label: "麻江县",
              value: "522635"
            }, {
              label: "丹寨县",
              value: "522636"
            }],
            [{
              label: "都匀市",
              value: "522701"
            }, {
              label: "福泉市",
              value: "522702"
            }, {
              label: "荔波县",
              value: "522722"
            }, {
              label: "贵定县",
              value: "522723"
            }, {
              label: "瓮安县",
              value: "522725"
            }, {
              label: "独山县",
              value: "522726"
            }, {
              label: "平塘县",
              value: "522727"
            }, {
              label: "罗甸县",
              value: "522728"
            }, {
              label: "长顺县",
              value: "522729"
            }, {
              label: "龙里县",
              value: "522730"
            }, {
              label: "惠水县",
              value: "522731"
            }, {
              label: "三都水族自治县",
              value: "522732"
            }]
          ],
          [
            [{
              label: "五华区",
              value: "530102"
            }, {
              label: "盘龙区",
              value: "530103"
            }, {
              label: "官渡区",
              value: "530111"
            }, {
              label: "西山区",
              value: "530112"
            }, {
              label: "东川区",
              value: "530113"
            }, {
              label: "呈贡区",
              value: "530114"
            }, {
              label: "晋宁区",
              value: "530115"
            }, {
              label: "富民县",
              value: "530124"
            }, {
              label: "宜良县",
              value: "530125"
            }, {
              label: "石林彝族自治县",
              value: "530126"
            }, {
              label: "嵩明县",
              value: "530127"
            }, {
              label: "禄劝彝族苗族自治县",
              value: "530128"
            }, {
              label: "寻甸回族彝族自治县",
              value: "530129"
            }, {
              label: "安宁市",
              value: "530181"
            }],
            [{
              label: "麒麟区",
              value: "530302"
            }, {
              label: "沾益区",
              value: "530303"
            }, {
              label: "马龙县",
              value: "530321"
            }, {
              label: "陆良县",
              value: "530322"
            }, {
              label: "师宗县",
              value: "530323"
            }, {
              label: "罗平县",
              value: "530324"
            }, {
              label: "富源县",
              value: "530325"
            }, {
              label: "会泽县",
              value: "530326"
            }, {
              label: "宣威市",
              value: "530381"
            }],
            [{
              label: "红塔区",
              value: "530402"
            }, {
              label: "江川区",
              value: "530403"
            }, {
              label: "澄江县",
              value: "530422"
            }, {
              label: "通海县",
              value: "530423"
            }, {
              label: "华宁县",
              value: "530424"
            }, {
              label: "易门县",
              value: "530425"
            }, {
              label: "峨山彝族自治县",
              value: "530426"
            }, {
              label: "新平彝族傣族自治县",
              value: "530427"
            }, {
              label: "元江哈尼族彝族傣族自治县",
              value: "530428"
            }],
            [{
              label: "隆阳区",
              value: "530502"
            }, {
              label: "施甸县",
              value: "530521"
            }, {
              label: "龙陵县",
              value: "530523"
            }, {
              label: "昌宁县",
              value: "530524"
            }, {
              label: "腾冲市",
              value: "530581"
            }],
            [{
              label: "昭阳区",
              value: "530602"
            }, {
              label: "鲁甸县",
              value: "530621"
            }, {
              label: "巧家县",
              value: "530622"
            }, {
              label: "盐津县",
              value: "530623"
            }, {
              label: "大关县",
              value: "530624"
            }, {
              label: "永善县",
              value: "530625"
            }, {
              label: "绥江县",
              value: "530626"
            }, {
              label: "镇雄县",
              value: "530627"
            }, {
              label: "彝良县",
              value: "530628"
            }, {
              label: "威信县",
              value: "530629"
            }, {
              label: "水富县",
              value: "530630"
            }],
            [{
              label: "古城区",
              value: "530702"
            }, {
              label: "玉龙纳西族自治县",
              value: "530721"
            }, {
              label: "永胜县",
              value: "530722"
            }, {
              label: "华坪县",
              value: "530723"
            }, {
              label: "宁蒗彝族自治县",
              value: "530724"
            }],
            [{
              label: "思茅区",
              value: "530802"
            }, {
              label: "宁洱哈尼族彝族自治县",
              value: "530821"
            }, {
              label: "墨江哈尼族自治县",
              value: "530822"
            }, {
              label: "景东彝族自治县",
              value: "530823"
            }, {
              label: "景谷傣族彝族自治县",
              value: "530824"
            }, {
              label: "镇沅彝族哈尼族拉祜族自治县",
              value: "530825"
            }, {
              label: "江城哈尼族彝族自治县",
              value: "530826"
            }, {
              label: "孟连傣族拉祜族佤族自治县",
              value: "530827"
            }, {
              label: "澜沧拉祜族自治县",
              value: "530828"
            }, {
              label: "西盟佤族自治县",
              value: "530829"
            }],
            [{
              label: "临翔区",
              value: "530902"
            }, {
              label: "凤庆县",
              value: "530921"
            }, {
              label: "云县",
              value: "530922"
            }, {
              label: "永德县",
              value: "530923"
            }, {
              label: "镇康县",
              value: "530924"
            }, {
              label: "双江拉祜族佤族布朗族傣族自治县",
              value: "530925"
            }, {
              label: "耿马傣族佤族自治县",
              value: "530926"
            }, {
              label: "沧源佤族自治县",
              value: "530927"
            }],
            [{
              label: "楚雄市",
              value: "532301"
            }, {
              label: "双柏县",
              value: "532322"
            }, {
              label: "牟定县",
              value: "532323"
            }, {
              label: "南华县",
              value: "532324"
            }, {
              label: "姚安县",
              value: "532325"
            }, {
              label: "大姚县",
              value: "532326"
            }, {
              label: "永仁县",
              value: "532327"
            }, {
              label: "元谋县",
              value: "532328"
            }, {
              label: "武定县",
              value: "532329"
            }, {
              label: "禄丰县",
              value: "532331"
            }],
            [{
              label: "个旧市",
              value: "532501"
            }, {
              label: "开远市",
              value: "532502"
            }, {
              label: "蒙自市",
              value: "532503"
            }, {
              label: "弥勒市",
              value: "532504"
            }, {
              label: "屏边苗族自治县",
              value: "532523"
            }, {
              label: "建水县",
              value: "532524"
            }, {
              label: "石屏县",
              value: "532525"
            }, {
              label: "泸西县",
              value: "532527"
            }, {
              label: "元阳县",
              value: "532528"
            }, {
              label: "红河县",
              value: "532529"
            }, {
              label: "金平苗族瑶族傣族自治县",
              value: "532530"
            }, {
              label: "绿春县",
              value: "532531"
            }, {
              label: "河口瑶族自治县",
              value: "532532"
            }],
            [{
              label: "文山市",
              value: "532601"
            }, {
              label: "砚山县",
              value: "532622"
            }, {
              label: "西畴县",
              value: "532623"
            }, {
              label: "麻栗坡县",
              value: "532624"
            }, {
              label: "马关县",
              value: "532625"
            }, {
              label: "丘北县",
              value: "532626"
            }, {
              label: "广南县",
              value: "532627"
            }, {
              label: "富宁县",
              value: "532628"
            }],
            [{
              label: "景洪市",
              value: "532801"
            }, {
              label: "勐海县",
              value: "532822"
            }, {
              label: "勐腊县",
              value: "532823"
            }],
            [{
              label: "大理市",
              value: "532901"
            }, {
              label: "漾濞彝族自治县",
              value: "532922"
            }, {
              label: "祥云县",
              value: "532923"
            }, {
              label: "宾川县",
              value: "532924"
            }, {
              label: "弥渡县",
              value: "532925"
            }, {
              label: "南涧彝族自治县",
              value: "532926"
            }, {
              label: "巍山彝族回族自治县",
              value: "532927"
            }, {
              label: "永平县",
              value: "532928"
            }, {
              label: "云龙县",
              value: "532929"
            }, {
              label: "洱源县",
              value: "532930"
            }, {
              label: "剑川县",
              value: "532931"
            }, {
              label: "鹤庆县",
              value: "532932"
            }],
            [{
              label: "瑞丽市",
              value: "533102"
            }, {
              label: "芒市",
              value: "533103"
            }, {
              label: "梁河县",
              value: "533122"
            }, {
              label: "盈江县",
              value: "533123"
            }, {
              label: "陇川县",
              value: "533124"
            }],
            [{
              label: "泸水市",
              value: "533301"
            }, {
              label: "福贡县",
              value: "533323"
            }, {
              label: "贡山独龙族怒族自治县",
              value: "533324"
            }, {
              label: "兰坪白族普米族自治县",
              value: "533325"
            }],
            [{
              label: "香格里拉市",
              value: "533401"
            }, {
              label: "德钦县",
              value: "533422"
            }, {
              label: "维西傈僳族自治县",
              value: "533423"
            }]
          ],
          [
            [{
              label: "城关区",
              value: "540102"
            }, {
              label: "堆龙德庆区",
              value: "540103"
            }, {
              label: "林周县",
              value: "540121"
            }, {
              label: "当雄县",
              value: "540122"
            }, {
              label: "尼木县",
              value: "540123"
            }, {
              label: "曲水县",
              value: "540124"
            }, {
              label: "达孜县",
              value: "540126"
            }, {
              label: "墨竹工卡县",
              value: "540127"
            }, {
              label: "格尔木藏青工业园区",
              value: "540171"
            }, {
              label: "拉萨经济技术开发区",
              value: "540172"
            }, {
              label: "西藏文化旅游创意园区",
              value: "540173"
            }, {
              label: "达孜工业园区",
              value: "540174"
            }],
            [{
              label: "桑珠孜区",
              value: "540202"
            }, {
              label: "南木林县",
              value: "540221"
            }, {
              label: "江孜县",
              value: "540222"
            }, {
              label: "定日县",
              value: "540223"
            }, {
              label: "萨迦县",
              value: "540224"
            }, {
              label: "拉孜县",
              value: "540225"
            }, {
              label: "昂仁县",
              value: "540226"
            }, {
              label: "谢通门县",
              value: "540227"
            }, {
              label: "白朗县",
              value: "540228"
            }, {
              label: "仁布县",
              value: "540229"
            }, {
              label: "康马县",
              value: "540230"
            }, {
              label: "定结县",
              value: "540231"
            }, {
              label: "仲巴县",
              value: "540232"
            }, {
              label: "亚东县",
              value: "540233"
            }, {
              label: "吉隆县",
              value: "540234"
            }, {
              label: "聂拉木县",
              value: "540235"
            }, {
              label: "萨嘎县",
              value: "540236"
            }, {
              label: "岗巴县",
              value: "540237"
            }],
            [{
              label: "卡若区",
              value: "540302"
            }, {
              label: "江达县",
              value: "540321"
            }, {
              label: "贡觉县",
              value: "540322"
            }, {
              label: "类乌齐县",
              value: "540323"
            }, {
              label: "丁青县",
              value: "540324"
            }, {
              label: "察雅县",
              value: "540325"
            }, {
              label: "八宿县",
              value: "540326"
            }, {
              label: "左贡县",
              value: "540327"
            }, {
              label: "芒康县",
              value: "540328"
            }, {
              label: "洛隆县",
              value: "540329"
            }, {
              label: "边坝县",
              value: "540330"
            }],
            [{
              label: "巴宜区",
              value: "540402"
            }, {
              label: "工布江达县",
              value: "540421"
            }, {
              label: "米林县",
              value: "540422"
            }, {
              label: "墨脱县",
              value: "540423"
            }, {
              label: "波密县",
              value: "540424"
            }, {
              label: "察隅县",
              value: "540425"
            }, {
              label: "朗县",
              value: "540426"
            }],
            [{
              label: "乃东区",
              value: "540502"
            }, {
              label: "扎囊县",
              value: "540521"
            }, {
              label: "贡嘎县",
              value: "540522"
            }, {
              label: "桑日县",
              value: "540523"
            }, {
              label: "琼结县",
              value: "540524"
            }, {
              label: "曲松县",
              value: "540525"
            }, {
              label: "措美县",
              value: "540526"
            }, {
              label: "洛扎县",
              value: "540527"
            }, {
              label: "加查县",
              value: "540528"
            }, {
              label: "隆子县",
              value: "540529"
            }, {
              label: "错那县",
              value: "540530"
            }, {
              label: "浪卡子县",
              value: "540531"
            }],
            [{
              label: "那曲县",
              value: "542421"
            }, {
              label: "嘉黎县",
              value: "542422"
            }, {
              label: "比如县",
              value: "542423"
            }, {
              label: "聂荣县",
              value: "542424"
            }, {
              label: "安多县",
              value: "542425"
            }, {
              label: "申扎县",
              value: "542426"
            }, {
              label: "索县",
              value: "542427"
            }, {
              label: "班戈县",
              value: "542428"
            }, {
              label: "巴青县",
              value: "542429"
            }, {
              label: "尼玛县",
              value: "542430"
            }, {
              label: "双湖县",
              value: "542431"
            }],
            [{
              label: "普兰县",
              value: "542521"
            }, {
              label: "札达县",
              value: "542522"
            }, {
              label: "噶尔县",
              value: "542523"
            }, {
              label: "日土县",
              value: "542524"
            }, {
              label: "革吉县",
              value: "542525"
            }, {
              label: "改则县",
              value: "542526"
            }, {
              label: "措勤县",
              value: "542527"
            }]
          ],
          [
            [{
              label: "新城区",
              value: "610102"
            }, {
              label: "碑林区",
              value: "610103"
            }, {
              label: "莲湖区",
              value: "610104"
            }, {
              label: "灞桥区",
              value: "610111"
            }, {
              label: "未央区",
              value: "610112"
            }, {
              label: "雁塔区",
              value: "610113"
            }, {
              label: "阎良区",
              value: "610114"
            }, {
              label: "临潼区",
              value: "610115"
            }, {
              label: "长安区",
              value: "610116"
            }, {
              label: "高陵区",
              value: "610117"
            }, {
              label: "鄠邑区",
              value: "610118"
            }, {
              label: "蓝田县",
              value: "610122"
            }, {
              label: "周至县",
              value: "610124"
            }],
            [{
              label: "王益区",
              value: "610202"
            }, {
              label: "印台区",
              value: "610203"
            }, {
              label: "耀州区",
              value: "610204"
            }, {
              label: "宜君县",
              value: "610222"
            }],
            [{
              label: "渭滨区",
              value: "610302"
            }, {
              label: "金台区",
              value: "610303"
            }, {
              label: "陈仓区",
              value: "610304"
            }, {
              label: "凤翔县",
              value: "610322"
            }, {
              label: "岐山县",
              value: "610323"
            }, {
              label: "扶风县",
              value: "610324"
            }, {
              label: "眉县",
              value: "610326"
            }, {
              label: "陇县",
              value: "610327"
            }, {
              label: "千阳县",
              value: "610328"
            }, {
              label: "麟游县",
              value: "610329"
            }, {
              label: "凤县",
              value: "610330"
            }, {
              label: "太白县",
              value: "610331"
            }],
            [{
              label: "秦都区",
              value: "610402"
            }, {
              label: "杨陵区",
              value: "610403"
            }, {
              label: "渭城区",
              value: "610404"
            }, {
              label: "三原县",
              value: "610422"
            }, {
              label: "泾阳县",
              value: "610423"
            }, {
              label: "乾县",
              value: "610424"
            }, {
              label: "礼泉县",
              value: "610425"
            }, {
              label: "永寿县",
              value: "610426"
            }, {
              label: "彬县",
              value: "610427"
            }, {
              label: "长武县",
              value: "610428"
            }, {
              label: "旬邑县",
              value: "610429"
            }, {
              label: "淳化县",
              value: "610430"
            }, {
              label: "武功县",
              value: "610431"
            }, {
              label: "兴平市",
              value: "610481"
            }],
            [{
              label: "临渭区",
              value: "610502"
            }, {
              label: "华州区",
              value: "610503"
            }, {
              label: "潼关县",
              value: "610522"
            }, {
              label: "大荔县",
              value: "610523"
            }, {
              label: "合阳县",
              value: "610524"
            }, {
              label: "澄城县",
              value: "610525"
            }, {
              label: "蒲城县",
              value: "610526"
            }, {
              label: "白水县",
              value: "610527"
            }, {
              label: "富平县",
              value: "610528"
            }, {
              label: "韩城市",
              value: "610581"
            }, {
              label: "华阴市",
              value: "610582"
            }],
            [{
              label: "宝塔区",
              value: "610602"
            }, {
              label: "安塞区",
              value: "610603"
            }, {
              label: "延长县",
              value: "610621"
            }, {
              label: "延川县",
              value: "610622"
            }, {
              label: "子长县",
              value: "610623"
            }, {
              label: "志丹县",
              value: "610625"
            }, {
              label: "吴起县",
              value: "610626"
            }, {
              label: "甘泉县",
              value: "610627"
            }, {
              label: "富县",
              value: "610628"
            }, {
              label: "洛川县",
              value: "610629"
            }, {
              label: "宜川县",
              value: "610630"
            }, {
              label: "黄龙县",
              value: "610631"
            }, {
              label: "黄陵县",
              value: "610632"
            }],
            [{
              label: "汉台区",
              value: "610702"
            }, {
              label: "南郑区",
              value: "610703"
            }, {
              label: "城固县",
              value: "610722"
            }, {
              label: "洋县",
              value: "610723"
            }, {
              label: "西乡县",
              value: "610724"
            }, {
              label: "勉县",
              value: "610725"
            }, {
              label: "宁强县",
              value: "610726"
            }, {
              label: "略阳县",
              value: "610727"
            }, {
              label: "镇巴县",
              value: "610728"
            }, {
              label: "留坝县",
              value: "610729"
            }, {
              label: "佛坪县",
              value: "610730"
            }],
            [{
              label: "榆阳区",
              value: "610802"
            }, {
              label: "横山区",
              value: "610803"
            }, {
              label: "府谷县",
              value: "610822"
            }, {
              label: "靖边县",
              value: "610824"
            }, {
              label: "定边县",
              value: "610825"
            }, {
              label: "绥德县",
              value: "610826"
            }, {
              label: "米脂县",
              value: "610827"
            }, {
              label: "佳县",
              value: "610828"
            }, {
              label: "吴堡县",
              value: "610829"
            }, {
              label: "清涧县",
              value: "610830"
            }, {
              label: "子洲县",
              value: "610831"
            }, {
              label: "神木市",
              value: "610881"
            }],
            [{
              label: "汉滨区",
              value: "610902"
            }, {
              label: "汉阴县",
              value: "610921"
            }, {
              label: "石泉县",
              value: "610922"
            }, {
              label: "宁陕县",
              value: "610923"
            }, {
              label: "紫阳县",
              value: "610924"
            }, {
              label: "岚皋县",
              value: "610925"
            }, {
              label: "平利县",
              value: "610926"
            }, {
              label: "镇坪县",
              value: "610927"
            }, {
              label: "旬阳县",
              value: "610928"
            }, {
              label: "白河县",
              value: "610929"
            }],
            [{
              label: "商州区",
              value: "611002"
            }, {
              label: "洛南县",
              value: "611021"
            }, {
              label: "丹凤县",
              value: "611022"
            }, {
              label: "商南县",
              value: "611023"
            }, {
              label: "山阳县",
              value: "611024"
            }, {
              label: "镇安县",
              value: "611025"
            }, {
              label: "柞水县",
              value: "611026"
            }]
          ],
          [
            [{
              label: "城关区",
              value: "620102"
            }, {
              label: "七里河区",
              value: "620103"
            }, {
              label: "西固区",
              value: "620104"
            }, {
              label: "安宁区",
              value: "620105"
            }, {
              label: "红古区",
              value: "620111"
            }, {
              label: "永登县",
              value: "620121"
            }, {
              label: "皋兰县",
              value: "620122"
            }, {
              label: "榆中县",
              value: "620123"
            }, {
              label: "兰州新区",
              value: "620171"
            }],
            [{
              label: "嘉峪关市",
              value: "620201"
            }],
            [{
              label: "金川区",
              value: "620302"
            }, {
              label: "永昌县",
              value: "620321"
            }],
            [{
              label: "白银区",
              value: "620402"
            }, {
              label: "平川区",
              value: "620403"
            }, {
              label: "靖远县",
              value: "620421"
            }, {
              label: "会宁县",
              value: "620422"
            }, {
              label: "景泰县",
              value: "620423"
            }],
            [{
              label: "秦州区",
              value: "620502"
            }, {
              label: "麦积区",
              value: "620503"
            }, {
              label: "清水县",
              value: "620521"
            }, {
              label: "秦安县",
              value: "620522"
            }, {
              label: "甘谷县",
              value: "620523"
            }, {
              label: "武山县",
              value: "620524"
            }, {
              label: "张家川回族自治县",
              value: "620525"
            }],
            [{
              label: "凉州区",
              value: "620602"
            }, {
              label: "民勤县",
              value: "620621"
            }, {
              label: "古浪县",
              value: "620622"
            }, {
              label: "天祝藏族自治县",
              value: "620623"
            }],
            [{
              label: "甘州区",
              value: "620702"
            }, {
              label: "肃南裕固族自治县",
              value: "620721"
            }, {
              label: "民乐县",
              value: "620722"
            }, {
              label: "临泽县",
              value: "620723"
            }, {
              label: "高台县",
              value: "620724"
            }, {
              label: "山丹县",
              value: "620725"
            }],
            [{
              label: "崆峒区",
              value: "620802"
            }, {
              label: "泾川县",
              value: "620821"
            }, {
              label: "灵台县",
              value: "620822"
            }, {
              label: "崇信县",
              value: "620823"
            }, {
              label: "华亭县",
              value: "620824"
            }, {
              label: "庄浪县",
              value: "620825"
            }, {
              label: "静宁县",
              value: "620826"
            }, {
              label: "平凉工业园区",
              value: "620871"
            }],
            [{
              label: "肃州区",
              value: "620902"
            }, {
              label: "金塔县",
              value: "620921"
            }, {
              label: "瓜州县",
              value: "620922"
            }, {
              label: "肃北蒙古族自治县",
              value: "620923"
            }, {
              label: "阿克塞哈萨克族自治县",
              value: "620924"
            }, {
              label: "玉门市",
              value: "620981"
            }, {
              label: "敦煌市",
              value: "620982"
            }],
            [{
              label: "西峰区",
              value: "621002"
            }, {
              label: "庆城县",
              value: "621021"
            }, {
              label: "环县",
              value: "621022"
            }, {
              label: "华池县",
              value: "621023"
            }, {
              label: "合水县",
              value: "621024"
            }, {
              label: "正宁县",
              value: "621025"
            }, {
              label: "宁县",
              value: "621026"
            }, {
              label: "镇原县",
              value: "621027"
            }],
            [{
              label: "安定区",
              value: "621102"
            }, {
              label: "通渭县",
              value: "621121"
            }, {
              label: "陇西县",
              value: "621122"
            }, {
              label: "渭源县",
              value: "621123"
            }, {
              label: "临洮县",
              value: "621124"
            }, {
              label: "漳县",
              value: "621125"
            }, {
              label: "岷县",
              value: "621126"
            }],
            [{
              label: "武都区",
              value: "621202"
            }, {
              label: "成县",
              value: "621221"
            }, {
              label: "文县",
              value: "621222"
            }, {
              label: "宕昌县",
              value: "621223"
            }, {
              label: "康县",
              value: "621224"
            }, {
              label: "西和县",
              value: "621225"
            }, {
              label: "礼县",
              value: "621226"
            }, {
              label: "徽县",
              value: "621227"
            }, {
              label: "两当县",
              value: "621228"
            }],
            [{
              label: "临夏市",
              value: "622901"
            }, {
              label: "临夏县",
              value: "622921"
            }, {
              label: "康乐县",
              value: "622922"
            }, {
              label: "永靖县",
              value: "622923"
            }, {
              label: "广河县",
              value: "622924"
            }, {
              label: "和政县",
              value: "622925"
            }, {
              label: "东乡族自治县",
              value: "622926"
            }, {
              label: "积石山保安族东乡族撒拉族自治县",
              value: "622927"
            }],
            [{
              label: "合作市",
              value: "623001"
            }, {
              label: "临潭县",
              value: "623021"
            }, {
              label: "卓尼县",
              value: "623022"
            }, {
              label: "舟曲县",
              value: "623023"
            }, {
              label: "迭部县",
              value: "623024"
            }, {
              label: "玛曲县",
              value: "623025"
            }, {
              label: "碌曲县",
              value: "623026"
            }, {
              label: "夏河县",
              value: "623027"
            }]
          ],
          [
            [{
              label: "城东区",
              value: "630102"
            }, {
              label: "城中区",
              value: "630103"
            }, {
              label: "城西区",
              value: "630104"
            }, {
              label: "城北区",
              value: "630105"
            }, {
              label: "大通回族土族自治县",
              value: "630121"
            }, {
              label: "湟中县",
              value: "630122"
            }, {
              label: "湟源县",
              value: "630123"
            }],
            [{
              label: "乐都区",
              value: "630202"
            }, {
              label: "平安区",
              value: "630203"
            }, {
              label: "民和回族土族自治县",
              value: "630222"
            }, {
              label: "互助土族自治县",
              value: "630223"
            }, {
              label: "化隆回族自治县",
              value: "630224"
            }, {
              label: "循化撒拉族自治县",
              value: "630225"
            }],
            [{
              label: "门源回族自治县",
              value: "632221"
            }, {
              label: "祁连县",
              value: "632222"
            }, {
              label: "海晏县",
              value: "632223"
            }, {
              label: "刚察县",
              value: "632224"
            }],
            [{
              label: "同仁县",
              value: "632321"
            }, {
              label: "尖扎县",
              value: "632322"
            }, {
              label: "泽库县",
              value: "632323"
            }, {
              label: "河南蒙古族自治县",
              value: "632324"
            }],
            [{
              label: "共和县",
              value: "632521"
            }, {
              label: "同德县",
              value: "632522"
            }, {
              label: "贵德县",
              value: "632523"
            }, {
              label: "兴海县",
              value: "632524"
            }, {
              label: "贵南县",
              value: "632525"
            }],
            [{
              label: "玛沁县",
              value: "632621"
            }, {
              label: "班玛县",
              value: "632622"
            }, {
              label: "甘德县",
              value: "632623"
            }, {
              label: "达日县",
              value: "632624"
            }, {
              label: "久治县",
              value: "632625"
            }, {
              label: "玛多县",
              value: "632626"
            }],
            [{
              label: "玉树市",
              value: "632701"
            }, {
              label: "杂多县",
              value: "632722"
            }, {
              label: "称多县",
              value: "632723"
            }, {
              label: "治多县",
              value: "632724"
            }, {
              label: "囊谦县",
              value: "632725"
            }, {
              label: "曲麻莱县",
              value: "632726"
            }],
            [{
              label: "格尔木市",
              value: "632801"
            }, {
              label: "德令哈市",
              value: "632802"
            }, {
              label: "乌兰县",
              value: "632821"
            }, {
              label: "都兰县",
              value: "632822"
            }, {
              label: "天峻县",
              value: "632823"
            }, {
              label: "大柴旦行政委员会",
              value: "632857"
            }, {
              label: "冷湖行政委员会",
              value: "632858"
            }, {
              label: "茫崖行政委员会",
              value: "632859"
            }]
          ],
          [
            [{
              label: "兴庆区",
              value: "640104"
            }, {
              label: "西夏区",
              value: "640105"
            }, {
              label: "金凤区",
              value: "640106"
            }, {
              label: "永宁县",
              value: "640121"
            }, {
              label: "贺兰县",
              value: "640122"
            }, {
              label: "灵武市",
              value: "640181"
            }],
            [{
              label: "大武口区",
              value: "640202"
            }, {
              label: "惠农区",
              value: "640205"
            }, {
              label: "平罗县",
              value: "640221"
            }],
            [{
              label: "利通区",
              value: "640302"
            }, {
              label: "红寺堡区",
              value: "640303"
            }, {
              label: "盐池县",
              value: "640323"
            }, {
              label: "同心县",
              value: "640324"
            }, {
              label: "青铜峡市",
              value: "640381"
            }],
            [{
              label: "原州区",
              value: "640402"
            }, {
              label: "西吉县",
              value: "640422"
            }, {
              label: "隆德县",
              value: "640423"
            }, {
              label: "泾源县",
              value: "640424"
            }, {
              label: "彭阳县",
              value: "640425"
            }],
            [{
              label: "沙坡头区",
              value: "640502"
            }, {
              label: "中宁县",
              value: "640521"
            }, {
              label: "海原县",
              value: "640522"
            }]
          ],
          [
            [{
              label: "天山区",
              value: "650102"
            }, {
              label: "沙依巴克区",
              value: "650103"
            }, {
              label: "新市区",
              value: "650104"
            }, {
              label: "水磨沟区",
              value: "650105"
            }, {
              label: "头屯河区",
              value: "650106"
            }, {
              label: "达坂城区",
              value: "650107"
            }, {
              label: "米东区",
              value: "650109"
            }, {
              label: "乌鲁木齐县",
              value: "650121"
            }, {
              label: "乌鲁木齐经济技术开发区",
              value: "650171"
            }, {
              label: "乌鲁木齐高新技术产业开发区",
              value: "650172"
            }],
            [{
              label: "独山子区",
              value: "650202"
            }, {
              label: "克拉玛依区",
              value: "650203"
            }, {
              label: "白碱滩区",
              value: "650204"
            }, {
              label: "乌尔禾区",
              value: "650205"
            }],
            [{
              label: "高昌区",
              value: "650402"
            }, {
              label: "鄯善县",
              value: "650421"
            }, {
              label: "托克逊县",
              value: "650422"
            }],
            [{
              label: "伊州区",
              value: "650502"
            }, {
              label: "巴里坤哈萨克自治县",
              value: "650521"
            }, {
              label: "伊吾县",
              value: "650522"
            }],
            [{
              label: "昌吉市",
              value: "652301"
            }, {
              label: "阜康市",
              value: "652302"
            }, {
              label: "呼图壁县",
              value: "652323"
            }, {
              label: "玛纳斯县",
              value: "652324"
            }, {
              label: "奇台县",
              value: "652325"
            }, {
              label: "吉木萨尔县",
              value: "652327"
            }, {
              label: "木垒哈萨克自治县",
              value: "652328"
            }],
            [{
              label: "博乐市",
              value: "652701"
            }, {
              label: "阿拉山口市",
              value: "652702"
            }, {
              label: "精河县",
              value: "652722"
            }, {
              label: "温泉县",
              value: "652723"
            }],
            [{
              label: "库尔勒市",
              value: "652801"
            }, {
              label: "轮台县",
              value: "652822"
            }, {
              label: "尉犁县",
              value: "652823"
            }, {
              label: "若羌县",
              value: "652824"
            }, {
              label: "且末县",
              value: "652825"
            }, {
              label: "焉耆回族自治县",
              value: "652826"
            }, {
              label: "和静县",
              value: "652827"
            }, {
              label: "和硕县",
              value: "652828"
            }, {
              label: "博湖县",
              value: "652829"
            }, {
              label: "库尔勒经济技术开发区",
              value: "652871"
            }],
            [{
              label: "阿克苏市",
              value: "652901"
            }, {
              label: "温宿县",
              value: "652922"
            }, {
              label: "库车县",
              value: "652923"
            }, {
              label: "沙雅县",
              value: "652924"
            }, {
              label: "新和县",
              value: "652925"
            }, {
              label: "拜城县",
              value: "652926"
            }, {
              label: "乌什县",
              value: "652927"
            }, {
              label: "阿瓦提县",
              value: "652928"
            }, {
              label: "柯坪县",
              value: "652929"
            }],
            [{
              label: "阿图什市",
              value: "653001"
            }, {
              label: "阿克陶县",
              value: "653022"
            }, {
              label: "阿合奇县",
              value: "653023"
            }, {
              label: "乌恰县",
              value: "653024"
            }],
            [{
              label: "喀什市",
              value: "653101"
            }, {
              label: "疏附县",
              value: "653121"
            }, {
              label: "疏勒县",
              value: "653122"
            }, {
              label: "英吉沙县",
              value: "653123"
            }, {
              label: "泽普县",
              value: "653124"
            }, {
              label: "莎车县",
              value: "653125"
            }, {
              label: "叶城县",
              value: "653126"
            }, {
              label: "麦盖提县",
              value: "653127"
            }, {
              label: "岳普湖县",
              value: "653128"
            }, {
              label: "伽师县",
              value: "653129"
            }, {
              label: "巴楚县",
              value: "653130"
            }, {
              label: "塔什库尔干塔吉克自治县",
              value: "653131"
            }],
            [{
              label: "和田市",
              value: "653201"
            }, {
              label: "和田县",
              value: "653221"
            }, {
              label: "墨玉县",
              value: "653222"
            }, {
              label: "皮山县",
              value: "653223"
            }, {
              label: "洛浦县",
              value: "653224"
            }, {
              label: "策勒县",
              value: "653225"
            }, {
              label: "于田县",
              value: "653226"
            }, {
              label: "民丰县",
              value: "653227"
            }],
            [{
              label: "伊宁市",
              value: "654002"
            }, {
              label: "奎屯市",
              value: "654003"
            }, {
              label: "霍尔果斯市",
              value: "654004"
            }, {
              label: "伊宁县",
              value: "654021"
            }, {
              label: "察布查尔锡伯自治县",
              value: "654022"
            }, {
              label: "霍城县",
              value: "654023"
            }, {
              label: "巩留县",
              value: "654024"
            }, {
              label: "新源县",
              value: "654025"
            }, {
              label: "昭苏县",
              value: "654026"
            }, {
              label: "特克斯县",
              value: "654027"
            }, {
              label: "尼勒克县",
              value: "654028"
            }],
            [{
              label: "塔城市",
              value: "654201"
            }, {
              label: "乌苏市",
              value: "654202"
            }, {
              label: "额敏县",
              value: "654221"
            }, {
              label: "沙湾县",
              value: "654223"
            }, {
              label: "托里县",
              value: "654224"
            }, {
              label: "裕民县",
              value: "654225"
            }, {
              label: "和布克赛尔蒙古自治县",
              value: "654226"
            }],
            [{
              label: "阿勒泰市",
              value: "654301"
            }, {
              label: "布尔津县",
              value: "654321"
            }, {
              label: "富蕴县",
              value: "654322"
            }, {
              label: "福海县",
              value: "654323"
            }, {
              label: "哈巴河县",
              value: "654324"
            }, {
              label: "青河县",
              value: "654325"
            }, {
              label: "吉木乃县",
              value: "654326"
            }],
            [{
              label: "石河子市",
              value: "659001"
            }, {
              label: "阿拉尔市",
              value: "659002"
            }, {
              label: "图木舒克市",
              value: "659003"
            }, {
              label: "五家渠市",
              value: "659004"
            }, {
              label: "铁门关市",
              value: "659006"
            }]
          ],
          [
            [{
              label: "台北",
              value: "660101"
            }],
            [{
              label: "高雄",
              value: "660201"
            }],
            [{
              label: "基隆",
              value: "660301"
            }],
            [{
              label: "台中",
              value: "660401"
            }],
            [{
              label: "台南",
              value: "660501"
            }],
            [{
              label: "新竹",
              value: "660601"
            }],
            [{
              label: "嘉义",
              value: "660701"
            }],
            [{
              label: "宜兰",
              value: "660801"
            }],
            [{
              label: "桃园",
              value: "660901"
            }],
            [{
              label: "苗栗",
              value: "661001"
            }],
            [{
              label: "彰化",
              value: "661101"
            }],
            [{
              label: "南投",
              value: "661201"
            }],
            [{
              label: "云林",
              value: "661301"
            }],
            [{
              label: "屏东",
              value: "661401"
            }],
            [{
              label: "台东",
              value: "661501"
            }],
            [{
              label: "花莲",
              value: "661601"
            }],
            [{
              label: "澎湖",
              value: "661701"
            }]
          ],
          [
            [{
              label: "香港岛",
              value: "670101"
            }],
            [{
              label: "九龙",
              value: "670201"
            }],
            [{
              label: "新界",
              value: "670301"
            }]
          ],
          [
            [{
              label: "澳门半岛",
              value: "680101"
            }],
            [{
              label: "氹仔岛",
              value: "680201"
            }],
            [{
              label: "路环岛",
              value: "680301"
            }],
            [{
              label: "路氹城",
              value: "680401"
            }]
          ]
        ],
        n = t;
      l.default = n
    },
    abcd: function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = u;
      var t = n(a("a34a"));

      function n(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function r(e, l, a, t, n, r, i) {
        try {
          var u = e[r](i),
            o = u.value
        } catch (s) {
          return void a(s)
        }
        u.done ? l(o) : Promise.resolve(o).then(t, n)
      }

      function i(e) {
        return function () {
          var l = this,
            a = arguments;
          return new Promise((function (t, n) {
            var i = e.apply(l, a);

            function u(e) {
              r(i, t, n, u, o, "next", e)
            }

            function o(e) {
              r(i, t, n, u, o, "throw", e)
            }
            u(void 0)
          }))
        }
      }

      function u() {
        return o.apply(this, arguments)
      }

      function o() {
        return o = i(t.default.mark((function e() {
          var l, a, n, r;
          return t.default.wrap((function (e) {
            while (1) switch (e.prev = e.next) {
              case 0:
                for (l = this, a = l.slides, n = 0; n < a.length; n += 1) r = (a[n].swiperSlideSize + l.params.spaceBetween) * a[n].index, a[n].swiperSlideOffset = (l.isHorizontal(), r);
              case 3:
              case "end":
                return e.stop()
            }
          }), e, this)
        }))), o.apply(this, arguments)
      }
    },
    af24: function (e, l, a) {
      "use strict";

      function t(e) {
        var l = e.swiper,
          a = e.duration,
          t = e.transformEl,
          n = e.allSlides,
          r = l.slides,
          i = l.activeIndex;
        l.$wrapperEl;
        l.params.virtualTranslate && 0 !== a && function () {
          var e, u = !1;
          e = n ? t ? r.find(t) : r : t ? r.eq(i).find(t) : r[i];
          for (var o = 0; o < e.length; o += 1) e[o].transitionEnd((function () {
            u || l && !l.destroyed && (u = !0, l.animating = !1, l.emit("transitionEnd"))
          }), a)
        }()
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = t
    },
    afde: function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = i;
      var t = a("d7bd");

      function n(e, l, a) {
        return l in e ? Object.defineProperty(e, l, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[l] = a, e
      }

      function r(e) {
        return r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
          return typeof e
        } : function (e) {
          return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, r(e)
      }

      function i() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
          a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          i = arguments.length > 3 ? arguments[3] : void 0,
          u = arguments.length > 4 ? arguments[4] : void 0;
        if ("number" !== typeof e && "string" !== typeof e) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [".concat(r(e), "] given."));
        if ("string" === typeof e) {
          var o = parseInt(e, 10),
            s = isFinite(o);
          if (!s) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(e, "] given."));
          e = o
        }
        var v, c = this,
          b = e;
        b < 0 && (b = 0);
        var d = c.params,
          p = c.snapGrid,
          f = c.slidesGrid,
          h = c.previousIndex,
          g = c.activeIndex,
          m = c.rtlTranslate,
          y = c.wrapperEl,
          w = c.enabled;
        if (c.animating && d.preventInteractionOnTransition || !w && !i && !u) return !1;
        var _ = Math.min(c.params.slidesPerGroupSkip, b),
          S = _ + Math.floor((b - _) / c.params.slidesPerGroup);
        S >= p.length && (S = p.length - 1), (g || d.initialSlide || 0) === (h || 0) && a && c.emit("beforeSlideChangeStart");
        var x, T = -p[S];
        if (c.updateProgress(T), d.normalizeSlideIndex)
          for (var E = 0; E < f.length; E += 1) {
            var O = -Math.floor(100 * T),
              P = Math.floor(100 * f[E]),
              C = Math.floor(100 * f[E + 1]);
            "undefined" !== typeof f[E + 1] ? O >= P && O < C - (C - P) / 2 ? b = E : O >= P && O < C && (b = E + 1) : O >= P && (b = E)
          }
        if (c.initialized && b !== g) {
          if (!c.allowSlideNext && T < c.translate && T < c.minTranslate()) return !1;
          if (!c.allowSlidePrev && T > c.translate && T > c.maxTranslate() && (g || 0) !== b) return !1
        }
        if (x = b > g ? "next" : b < g ? "prev" : "reset", m && -T === c.translate || !m && T === c.translate) return c.updateActiveIndex(b), d.autoHeight && setTimeout((function () {
          c.updateAutoHeight()
        }), 0), c.updateSlidesClasses(), "slide" !== d.effect && c.setTranslate(T), "reset" !== x && (c.transitionStart(a, x), c.transitionEnd(a, x)), !1;
        if (d.cssMode) {
          var k = c.isHorizontal(),
            M = m ? T : -T;
          if (0 === l) {
            var j = c.virtual && c.params.virtual.enabled;
            j && (c.wrapperEl.style.scrollSnapType = "none", c._immediateVirtual = !0), y[k ? "scrollLeft" : "scrollTop"] = M, j && requestAnimationFrame((function () {
              c.wrapperEl.style.scrollSnapType = "", c._swiperImmediateVirtual = !1
            }))
          } else {
            var $;
            if (!c.support.smoothScroll) return (0, t.animateCSSModeScroll)({
              swiper: c,
              targetPosition: M,
              side: k ? "left" : "top"
            }), !0;
            y.scrollTo(($ = {}, n($, k ? "left" : "top", M), n($, "behavior", "smooth"), $))
          }
          return !0
        }
        return c.setTransition(l), c.setTranslate(T), c.updateActiveIndex(b), c.updateSlidesClasses(), c.emit("beforeTransitionStart", l, i), c.transitionStart(a, x), 0 === l ? c.transitionEnd(a, x) : c.animating || (c.animating = !0, c.onSlideToWrapperTransitionEnd || (c.onSlideToWrapperTransitionEnd = function (e) {
          c && !c.destroyed && (clearTimeout(v), c.onSlideToWrapperTransitionEnd = null, delete c.onSlideToWrapperTransitionEnd, c.transitionEnd(a, x))
        }), v = setTimeout((function () {
          c.onSlideToWrapperTransitionEnd && c.onSlideToWrapperTransitionEnd()
        }), l)), !0
      }
    },
    b0cb: function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = void 0;
      var t = {
          down: {
            textInOffset: "下拉刷新",
            textOutOffset: "释放更新",
            textLoading: "加载中 ...",
            offset: 80
          },
          up: {
            textLoading: "加载中 ...",
            textNoMore: "-- END --",
            offset: 80,
            isBounce: !1,
            toTop: {
              src: "http://www.mescroll.com/img/mescroll-totop.png?v=1",
              offset: 1e3,
              duration: 300
            },
            empty: {
              use: !0,
              icon: "http://www.mescroll.com/img/mescroll-empty.png?v=1",
              tip: "~ 暂无相关数据 ~"
            }
          }
        },
        n = t;
      l.default = n
    },
    b2e8: function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = u;
      var t = i(a("3430")),
        n = i(a("41e4")),
        r = i(a("af24"));

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function u(e) {
        var l = e.swiper,
          a = e.extendParams,
          i = e.on;
        a({
          creativeEffect: {
            transformEl: null,
            limitProgress: 1,
            shadowPerProgress: !1,
            progressMultiplier: 1,
            perspective: !0,
            prev: {
              translate: [0, 0, 0],
              rotate: [0, 0, 0],
              opacity: 1,
              scale: 1
            },
            next: {
              translate: [0, 0, 0],
              rotate: [0, 0, 0],
              opacity: 1,
              scale: 1
            }
          }
        });
        var u = function (e) {
            return "string" === typeof e ? e : "".concat(e, "px")
          },
          o = function () {
            var e = l.slides,
              a = l.$wrapperEl,
              t = l.slidesSizesGrid,
              r = l.params.creativeEffect,
              i = r.progressMultiplier,
              o = l.params.centeredSlides;
            if (o) {
              var s = t[0] / 2 - l.params.slidesOffsetBefore || 0;
              a.transform("translateX(calc(50% - ".concat(s, "px))"))
            }
            for (var v = function (a) {
                var t = e[a],
                  s = t.progress,
                  v = Math.min(Math.max(t.progress, -r.limitProgress), r.limitProgress),
                  c = v;
                o || (c = Math.min(Math.max(t.originalProgress, -r.limitProgress), r.limitProgress));
                var b = t.swiperSlideOffset,
                  d = [l.params.cssMode ? -b - l.translate : -b, 0, 0],
                  p = [0, 0, 0];
                l.isHorizontal() || (d[1] = d[0], d[0] = 0);
                var f = {
                  translate: [0, 0, 0],
                  rotate: [0, 0, 0],
                  scale: 1,
                  opacity: 1
                };
                v < 0 ? f = r.next : v > 0 && (f = r.prev), d.forEach((function (e, l) {
                  d[l] = "calc(".concat(e, "px + (").concat(u(f.translate[l]), " * ").concat(Math.abs(v * i), "))")
                })), p.forEach((function (e, l) {
                  p[l] = f.rotate[l] * Math.abs(v * i)
                })), t.css({
                  zIndex: -Math.abs(Math.round(s)) + e.length
                });
                var h = d.join(", "),
                  g = "rotateX(".concat(p[0], "deg) rotateY(").concat(p[1], "deg) rotateZ(").concat(p[2], "deg)"),
                  m = "scale(".concat(c < 0 ? 1 + (1 - f.scale) * c * i : 1 - (1 - f.scale) * c * i, ")"),
                  y = c < 0 ? 1 + (1 - f.opacity) * c * i : 1 - (1 - f.opacity) * c * i,
                  w = "translate3d(".concat(h, ") ").concat(g, " ").concat(m),
                  _ = (0, n.default)(r, t);
                _.transform(w), _.css({
                  opacity: y
                }), f.origin && _.css({
                  "transform-origin": f.origin
                }), l.params.willChange && e[a].willChange("transform,opacity"), e[a].addClass("swiper-slide-creative")
              }, c = 0; c < e.length; c += 1) v(c)
          },
          s = function (e) {
            for (var a = l.params.creativeEffect.transformEl, t = a ? l.slides.find(a) : l.slides, n = 0; n < t.length; n += 1) t[n].transition(e);
            (0, r.default)({
              swiper: l,
              duration: e,
              transformEl: a,
              allSlides: !0
            })
          };
        (0, t.default)({
          effect: "creative",
          swiper: l,
          on: i,
          setTranslate: o,
          setTransition: s,
          perspective: function () {
            return l.params.creativeEffect.perspective
          },
          overwriteParams: function () {
            return {
              watchSlidesProgress: !0,
              virtualTranslate: !l.params.cssMode
            }
          }
        })
      }
    },
    b791: function (e, l, a) {
      "use strict";

      function t(e) {
        var l = this;
        l.enabled && (l.allowClick || (l.params.preventClicks && e.preventDefault(), l.params.preventClicksPropagation && l.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = t
    },
    b944: function (e, l, a) {
      "use strict";

      function t() {
        var e = this,
          l = e.$el,
          a = e.classNames;
        l.removeClass(a.join(" ")), e.emitContainerClasses()
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = t
    },
    b9a2: function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = void 0;
      var t = b(a("fda2")),
        n = b(a("3c56")),
        r = b(a("3628")),
        i = b(a("abcd")),
        u = b(a("e822")),
        o = b(a("0a4f")),
        s = b(a("c44f")),
        v = b(a("2747")),
        c = b(a("dc6c"));

      function b(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var d = {
        updateSize: t.default,
        updateSlides: n.default,
        updateAutoHeight: r.default,
        updateSlidesOffset: i.default,
        updateSlidesProgress: u.default,
        updateProgress: o.default,
        updateSlidesClasses: s.default,
        updateActiveIndex: v.default,
        updateClickedSlide: c.default
      };
      l.default = d
    },
    bbdd: function (e, l, a) {
      var t = function () {
          return this || "object" === typeof self && self
        }() || Function("return this")(),
        n = t.regeneratorRuntime && Object.getOwnPropertyNames(t).indexOf("regeneratorRuntime") >= 0,
        r = n && t.regeneratorRuntime;
      if (t.regeneratorRuntime = void 0, e.exports = a("96cf"), n) t.regeneratorRuntime = r;
      else try {
        delete t.regeneratorRuntime
      } catch (i) {
        t.regeneratorRuntime = void 0
      }
    },
    bdb9: function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = n;
      var t = a("d7bd");

      function n(e) {
        var l, a = e.swiper,
          n = e.extendParams,
          r = e.on,
          i = e.emit;

        function u() {
          a.slides[a.activeIndex];
          var e = a.params.autoplay.delay;
          clearTimeout(l), l = (0, t.nextTick)((function () {
            var e;
            a.params.autoplay.reverseDirection ? a.params.loop ? (a.loopFix(), e = a.slidePrev(a.params.speed, !0, !0), i("autoplay")) : a.isBeginning ? a.params.autoplay.stopOnLastSlide ? s() : (e = a.slideTo(a.slides.length - 1, a.params.speed, !0, !0), i("autoplay")) : (e = a.slidePrev(a.params.speed, !0, !0), i("autoplay")) : a.params.loop ? (a.loopFix(), setTimeout((function () {
              e = a.slideNext(a.params.speed, !0, !0)
            }), 30), i("autoplay")) : a.isEnd ? a.params.autoplay.stopOnLastSlide ? s() : (e = a.slideTo(0, a.params.speed, !0, !0), i("autoplay")) : (e = a.slideNext(a.params.speed, !0, !0), i("autoplay")), (a.params.cssMode && a.autoplay.running || !1 === e) && u()
          }), e)
        }

        function o() {
          return "undefined" === typeof l && (!a.autoplay.running && (a.autoplay.running = !0, i("autoplayStart"), u(), !0))
        }

        function s() {
          return !!a.autoplay.running && ("undefined" !== typeof l && (l && (clearTimeout(l), l = void 0), a.autoplay.running = !1, i("autoplayStop"), !0))
        }

        function v(e) {
          a.autoplay.running && (a.autoplay.paused || (l && clearTimeout(l), a.autoplay.paused = !0, 0 !== e && a.params.autoplay.waitForTransition ? ["transitionEnd", "webkitTransitionEnd"].forEach((function (e) {
            a.on(e, c)
          })) : (a.autoplay.paused = !1, u())))
        }

        function c(e) {
          a && !a.destroyed && a.$wrapperEl && (["transitionEnd", "webkitTransitionEnd"].forEach((function (e) {
            a.off(e, c)
          })), a.autoplay.paused = !1, a.autoplay.running ? u() : s())
        }

        function b() {
          a.params.autoplay.pauseOnMouseEnter
        }

        function d() {}
        a.autoplay = {
          running: !1,
          paused: !1
        }, n({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1
          }
        }), r("init update", (function () {
          a.params.autoplay.enabled && (o(), b())
        })), r("beforeTransitionStart", (function (e, l, t) {
          a.autoplay.running && (t || !a.params.autoplay.disableOnInteraction ? a.autoplay.pause(l) : a.params.loop || s())
        })), r("sliderFirstMove", (function () {
          a.autoplay.running && (a.params.autoplay.disableOnInteraction ? s() : v())
        })), r("touch-end", (function () {
          a.params.cssMode && a.autoplay.paused && !a.params.autoplay.disableOnInteraction && u()
        })), r("destroy", (function () {
          d(), a.autoplay.running && s()
        })), Object.assign(a.autoplay, {
          pause: v,
          run: u,
          start: o,
          stop: s
        })
      }
    },
    c0de: function (e, l, a) {
      "use strict";

      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
          l = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          a = arguments.length > 2 ? arguments[2] : void 0,
          t = this;
        return t.slideTo(t.activeIndex, e, l, a)
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = t
    },
    c1cf: function (e, l, a) {
      "use strict";

      function t(e) {
        return i(e) || r(e) || n()
      }

      function n() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }

      function r(e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
      }

      function i(e) {
        if (Array.isArray(e)) {
          for (var l = 0, a = new Array(e.length); l < e.length; l++) a[l] = e[l];
          return a
        }
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = void 0;
      var u = {
        on: function (e, l, a) {
          var t = this;
          if ("function" !== typeof l) return t;
          var n = a ? "unshift" : "push";
          return e.split(" ").forEach((function (e) {
            t.eventsListeners[e] || (t.eventsListeners[e] = []), t.eventsListeners[e][n](l)
          })), t
        },
        once: function (e, l, a) {
          var t = this;
          if ("function" !== typeof l) return t;

          function n() {
            t.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i];
            l.apply(t, r)
          }
          return n.__emitterProxy = l, t.on(e, n, a)
        },
        onAny: function (e, l) {
          var a = this;
          if ("function" !== typeof e) return a;
          var t = l ? "unshift" : "push";
          return a.eventsAnyListeners.indexOf(e) < 0 && a.eventsAnyListeners[t](e), a
        },
        offAny: function (e) {
          var l = this;
          if (!l.eventsAnyListeners) return l;
          var a = l.eventsAnyListeners.indexOf(e);
          return a >= 0 && l.eventsAnyListeners.splice(a, 1), l
        },
        off: function (e, l) {
          var a = this;
          return a.eventsListeners ? (e.split(" ").forEach((function (e) {
            "undefined" === typeof l ? a.eventsListeners[e] = [] : a.eventsListeners[e] && a.eventsListeners[e].forEach((function (t, n) {
              (t === l || t.__emitterProxy && t.__emitterProxy === l) && a.eventsListeners[e].splice(n, 1)
            }))
          })), a) : a
        },
        emit: function () {
          var e, l, a, n = this;
          if (!n.eventsListeners) return n;
          for (var r = arguments.length, i = new Array(r), u = 0; u < r; u++) i[u] = arguments[u];
          "string" === typeof i[0] || Array.isArray(i[0]) ? (e = i[0], l = i.slice(1, i.length), a = n) : (e = i[0].events, l = i[0].data, a = i[0].context || n), l.unshift(a);
          var o = Array.isArray(e) ? e : e.split(" ");
          return o.forEach((function (e) {
            n.eventsAnyListeners && n.eventsAnyListeners.length && n.eventsAnyListeners.forEach((function (n) {
              n.apply(a, [e].concat(t(l)))
            })), n.eventsListeners && n.eventsListeners[e] && n.eventsListeners[e].forEach((function (e) {
              e.apply(a, l)
            }))
          })), n
        }
      };
      l.default = u
    },
    c1fb: function (e, l, a) {
      "use strict";
      (function (e) {
        Object.defineProperty(l, "__esModule", {
          value: !0
        }), l.default = void 0;
        var t = n(a("a417"));

        function n(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        var r = {
          config: {
            baseUrl: t.default.url,
            header: {
              "Content-Type": "application/json;charset=UTF-8"
            },
            data: {},
            method: "GET",
            dataType: "json",
            success: function () {},
            fail: function () {},
            complete: function () {}
          },
          interceptor: {
            request: null,
            response: null
          },
          request: function (l) {
            var a = this;
            l || (l = {}), l.baseUrl = l.baseUrl || this.config.baseUrl, l.dataType = l.dataType || this.config.dataType, l.url = l.baseUrl + l.url, l.data = l.data || {}, l.method = l.method || this.config.method;
            var t = {
              Token: e.getStorageSync("token")
            };
            return l.header = Object.assign({}, l.header, t), new Promise((function (t, n) {
              var r = null;
              l.complete = function (l) {
                var i = l.statusCode;
                if (l.config = r, a.interceptor.response) {
                  var u = a.interceptor.response(l);
                  u && (l = u)
                }
                if (200 === i) {
                  var o = l.data;
                  0 === o.code ? t(l.data) : 401 == o.code ? e.navigateTo({
                    url: "../login/login"
                  }) : e.showToast({
                    title: o.msg,
                    icon: "none",
                    duration: 2e3
                  })
                } else e.showToast({
                  title: "接口执行异常",
                  icon: "none",
                  duration: 2e3
                }), n(l)
              }, r = Object.assign({}, a.config, l), r.requestId = (new Date).getTime(), a.interceptor.request && a.interceptor.request(r), e.request(r)
            }))
          },
          get: function (e, l, a) {
            return a || (a = {}), a.url = e, a.data = l, a.method = "GET", this.request(a)
          },
          post: function (e, l, a) {
            return a || (a = {}), a.url = e, a.data = l, a.method = "POST", this.request(a)
          },
          put: function (e, l, a) {
            return a || (a = {}), a.url = e, a.data = l, a.method = "PUT", this.request(a)
          },
          delete: function (e, l, a) {
            return a || (a = {}), a.url = e, a.data = l, a.method = "DELETE", this.request(a)
          }
        };
        l.default = r
      }).call(this, a("543d")["default"])
    },
    c44f: function (e, l, a) {
      "use strict";

      function t() {
        var e = this,
          l = e.slides,
          a = e.params,
          t = e.$wrapperEl,
          n = e.activeIndex,
          r = e.realIndex;
        if (l.length && t) {
          for (var i, u = e.virtual && a.virtual.enabled, o = 0; o < l.length; o++) l[o].removeClass("".concat(a.slideActiveClass, " ").concat(a.slideNextClass, " ").concat(a.slidePrevClass, " ").concat(a.slideDuplicateActiveClass, " ").concat(a.slideDuplicateNextClass, " ").concat(a.slideDuplicatePrevClass));
          if (i = u ? l[l.findIndex((function (e) {
              return e.dataSwiperSlideIndex == n
            }))] : l[n], i) {
            if (i.addClass(a.slideActiveClass), a.loop)
              if (i.hasClass(a.slideDuplicateClass)) {
                var s = l.findIndex((function (e) {
                  return !e.hasClass(a.slideDuplicateClass) && e.dataSwiperSlideIndex == r
                }));
                l[s] && l[s].addClass(a.slideDuplicateActiveClass)
              } else {
                var v = l.findIndex((function (e) {
                  return e.hasClass(a.slideDuplicateClass) && e.dataSwiperSlideIndex == r
                }));
                l[v] && l[v].addClass(a.slideDuplicateActiveClass)
              } var c = i.nextAll(".".concat(a.slideClass))[0];
            c ? c.addClass(a.slideNextClass) : a.loop && !c && (c = l[0], c.addClass(a.slideNextClass));
            var b = i.prevAll(".".concat(a.slideClass))[0];
            if (b ? b.addClass(a.slidePrevClass) : a.loop && !b && (b = l[l.length - 1], b.addClass(a.slidePrevClass)), a.loop) {
              if (c.hasClass(a.slideDuplicateClass)) {
                var d = l.findIndex((function (e) {
                  return !e.hasClass(a.slideDuplicateClass) && e.dataSwiperSlideIndex == c.dataSwiperSlideIndex
                }));
                l[d] && l[d].addClass(a.slideDuplicateNextClass)
              } else {
                var p = l.findIndex((function (e) {
                  return e.hasClass(a.slideDuplicateClass) && e.dataSwiperSlideIndex == c.dataSwiperSlideIndex
                }));
                l[p] && l[p].addClass(a.slideDuplicateNextClass)
              }
              if (b.hasClass(a.slideDuplicateClass)) {
                var f = l.findIndex((function (e) {
                  return !e.hasClass(a.slideDuplicateClass) && e.dataSwiperSlideIndex == b.dataSwiperSlideIndex
                }));
                l[f] && l[f].addClass(a.slideDuplicatePrevClass)
              } else {
                var h = l.findIndex((function (e) {
                  return e.hasClass(a.slideDuplicateClass) && e.dataSwiperSlideIndex == b.dataSwiperSlideIndex
                }));
                l[h] && l[h].addClass(a.slideDuplicatePrevClass)
              }
            }
            e.emitSlidesClasses()
          }
        }
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = t
    },
    c8ba: function (e, l) {
      var a;
      a = function () {
        return this
      }();
      try {
        a = a || new Function("return this")()
      } catch (t) {
        "object" === typeof window && (a = window)
      }
      e.exports = a
    },
    cbd0: function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = r;
      var t = n(a("3430"));
      n(a("41e4"));

      function n(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function r(e) {
        var l = e.swiper,
          a = e.extendParams,
          n = e.on;
        a({
          carouselEffect: {}
        });
        var r = function () {
            for (var e = .2, a = l.slides.length, t = 0; t < l.slides.length; t += 1) {
              var n = l.slides[t],
                r = l.slides[t].progress,
                i = Math.abs(r),
                u = 1;
              i > 1 && (u = .3 * (i - 1) + 1);
              var o = "".concat(r * u * 50, "%"),
                s = 1 - i * e,
                v = a - Math.abs(Math.round(r)),
                c = "translateX(".concat(o, ") scale(").concat(s, ")");
              n.transform(c), n.css({
                zIndex: v
              }), i > 3 ? n.css({
                opacity: 0
              }) : n.css({
                opacity: 1
              })
            }
          },
          i = function (e) {
            for (var a = l.params.coverflowEffect.transformEl, t = a ? l.slides.find(a) : l.slides, n = 0; n < t.length; n++) t[n].transition(e)
          };
        (0, t.default)({
          effect: "carousel",
          swiper: l,
          on: n,
          setTranslate: r,
          setTransition: i,
          perspective: function () {
            return !0
          },
          overwriteParams: function () {
            return {
              watchSlidesProgress: !0,
              slidesPerView: "auto",
              centeredSlides: !0
            }
          }
        })
      }
    },
    cc8e: function (e, l, a) {
      "use strict";
      (function (e) {
        function a(e) {
          return r(e) || n(e) || t()
        }

        function t() {
          throw new TypeError("Invalid attempt to spread non-iterable instance")
        }

        function n(e) {
          if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }

        function r(e) {
          if (Array.isArray(e)) {
            for (var l = 0, a = new Array(e.length); l < e.length; l++) a[l] = e[l];
            return a
          }
        }

        function i(e, l, a) {
          return l in e ? Object.defineProperty(e, l, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[l] = a, e
        }

        function u(l) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          t.indexKey;
          return {
            inject: i({}, l, {
              default: null
            }),
            mounted: function () {
              this.parent = this[l], this.bindRelation()
            },
            methods: {
              bindRelation: function () {
                if (this.parent && -1 === this.parent.children.indexOf(this)) {
                  var l = [].concat(a(this.parent.children), [this]);
                  this.parent.children = l, this.index = this.parent.children.indexOf(this), e.$emit("childrenReady" + this.parent._uid, this)
                }
              }
            }
          }
        }

        function o(e) {
          return {
            provide: function () {
              return i({}, e, this)
            },
            created: function () {
              this.children = []
            }
          }
        }
        Object.defineProperty(l, "__esModule", {
          value: !0
        }), l.ChildrenMixin = u, l.ParentMixin = o
      }).call(this, a("543d")["default"])
    },
    d057: function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = r;
      var t = n(a("3430"));

      function n(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function r(e) {
        var l = e.swiper,
          a = e.extendParams,
          n = e.on;
        a({
          cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: .94
          }
        });
        var r = function () {
            l.$el;
            var e = l.$wrapperEl,
              a = l.slides,
              t = l.width,
              n = l.height,
              r = l.rtlTranslate,
              i = l.size,
              u = l.browser,
              o = l.params.cubeEffect,
              s = l.isHorizontal(),
              v = l.virtual && l.params.virtual.enabled,
              c = 0;
            o.shadow && (s ? (l.native.cubeShadowShowWrapper || l.$wrapperEl.updateData({
              cubeShadowShowWrapper: !0
            }), l.$wrapperEl.cubeShadowCss({
              height: "".concat(t, "px")
            })) : l.native.cubeShadowShowRoot || l.$wrapperEl.updateData({
              cubeShadowShowRoot: !0
            }));
            for (var b = 0; b < a.length; b += 1) {
              var d = a[b],
                p = b;
              v && (p = parseInt(l.activeIndex, 10));
              var f = 90 * p,
                h = Math.floor(f / 360);
              r && (f = -f, h = Math.floor(-f / 360));
              var g = Math.max(Math.min(d.progress, 1), -1),
                m = 0,
                y = 0,
                w = 0;
              p % 4 === 0 ? (m = 4 * -h * i, w = 0) : (p - 1) % 4 === 0 ? (m = 0, w = 4 * -h * i) : (p - 2) % 4 === 0 ? (m = i + 4 * h * i, w = i) : (p - 3) % 4 === 0 && (m = -i, w = 3 * i + 4 * i * h), r && (m = -m), s || (y = m, m = 0);
              var _ = "rotateX(".concat(s ? 0 : -f, "deg) rotateY(").concat(s ? f : 0, "deg) translate3d(").concat(m, "px, ").concat(y, "px, ").concat(w, "px)");
              g <= 1 && g > -1 && (c = 90 * p + 90 * g, r && (c = 90 * -p - 90 * g)), d.transform(_), d.addClass("swiper-slide-cube")
            }
            if (e.css({
                "-webkit-transform-origin": "50% 50% -".concat(i / 2, "px"),
                "transform-origin": "50% 50% -".concat(i / 2, "px")
              }), o.shadow)
              if (s) l.$wrapperEl.cubeShadowTransform("translate3d(0px, ".concat(t / 2 + o.shadowOffset, "px, ").concat(-t / 2, "px) rotateX(90deg) rotateZ(0deg) scale(").concat(o.shadowScale, ")"));
              else {
                var S = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
                  x = 1.5 - (Math.sin(2 * S * Math.PI / 360) / 2 + Math.cos(2 * S * Math.PI / 360) / 2),
                  T = o.shadowScale,
                  E = o.shadowScale / x,
                  O = o.shadowOffset;
                l.$wrapperEl.cubeShadowTransform("scale3d(".concat(T, ", 1, ").concat(E, ") translate3d(0px, ").concat(n / 2 + O, "px, ").concat(-n / 2 / E, "px) rotateX(-90deg)"))
              } var P = u.isSafari || u.isWebView ? -i / 2 : 0;
            e.transform("translate3d(0px,0,".concat(P, "px) rotateX(").concat(l.isHorizontal() ? 0 : c, "deg) rotateY(").concat(l.isHorizontal() ? -c : 0, "deg)"))
          },
          i = function (e) {
            l.$el;
            for (var a = l.slides, t = 0; t < a.length; t++) a[t].transition(e);
            l.params.cubeEffect.shadow && !l.isHorizontal() && l.$wrapperEl.cubeShadowTransition(e)
          };
        (0, t.default)({
          effect: "cube",
          swiper: l,
          on: n,
          setTranslate: r,
          setTransition: i,
          perspective: function () {
            return !0
          },
          overwriteParams: function () {
            return {
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              resistanceRatio: 0,
              spaceBetween: 0,
              centeredSlides: !1,
              virtualTranslate: !0
            }
          }
        })
      }
    },
    d699: function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = void 0;
      var t = i(a("90a8")),
        n = i(a("8579")),
        r = i(a("8713"));

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var u = {
        loopCreate: t.default,
        loopFix: n.default,
        loopDestroy: r.default
      };
      l.default = u
    },
    d7bd: function (e, l, a) {
      "use strict";

      function t(e, l, a) {
        return l in e ? Object.defineProperty(e, l, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[l] = a, e
      }

      function n(e) {
        return n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
          return typeof e
        } : function (e) {
          return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, n(e)
      }

      function r(e) {
        var l = e;
        Object.keys(l).forEach((function (e) {
          try {
            l[e] = null
          } catch (a) {}
          try {
            delete l[e]
          } catch (a) {}
        }))
      }

      function i(e) {
        var l, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x";
        return "x" === a && (l = e.translate), "y" === a && (l = e.translate), l || 0
      }

      function u(e) {
        return "object" === n(e) && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
      }

      function o() {
        return Date.now()
      }

      function s(e) {
        var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return setTimeout(e, l)
      }

      function v() {
        for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), l = ["__proto__", "constructor", "prototype"], a = 1; a < arguments.length; a += 1) {
          var t = a < 0 || arguments.length <= a ? void 0 : arguments[a];
          if (void 0 !== t && null !== t)
            for (var n = Object.keys(Object(t)).filter((function (e) {
                return l.indexOf(e) < 0
              })), r = 0, i = n.length; r < i; r += 1) {
              var o = n[r],
                s = Object.getOwnPropertyDescriptor(t, o);
              void 0 !== s && s.enumerable && (u(e[o]) && u(t[o]) ? t[o].__swiper__ ? e[o] = t[o] : v(e[o], t[o]) : !u(e[o]) && u(t[o]) ? (e[o] = {}, t[o].__swiper__ ? e[o] = t[o] : v(e[o], t[o])) : e[o] = t[o])
            }
        }
        return e
      }

      function c(e, l, a) {
        e.style.setProperty(l, a)
      }

      function b(e) {
        var l, a = e.swiper,
          n = e.targetPosition,
          r = e.side,
          i = getWindow(),
          u = -a.translate,
          o = null,
          s = a.params.speed;
        a.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(a.cssModeFrameID);
        var v = n > u ? "next" : "prev",
          c = function (e, l) {
            return "next" === v && e >= l || "prev" === v && e <= l
          },
          b = function e() {
            l = (new Date).getTime(), null === o && (o = l);
            var v = Math.max(Math.min((l - o) / s, 1), 0),
              b = .5 - Math.cos(v * Math.PI) / 2,
              d = u + b * (n - u);
            if (c(d, n) && (d = n), a.wrapperEl.scrollTo(t({}, r, d)), c(d, n)) return a.wrapperEl.style.overflow = "hidden", a.wrapperEl.style.scrollSnapType = "", setTimeout((function () {
              a.wrapperEl.style.overflow = "", a.wrapperEl.scrollTo(t({}, r, d))
            })), void i.cancelAnimationFrame(a.cssModeFrameID);
            a.cssModeFrameID = i.requestAnimationFrame(e)
          };
        b()
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.deleteProps = r, l.extend = v, l.nextTick = s, l.now = o, l.setCSSProperty = c, l.animateCSSModeScroll = b, l.getTranslate = i, l.isObject = u
    },
    d9c3: function (e, l, a) {
      "use strict";
      var t;

      function n() {
        return {
          smoothScroll: !0,
          touch: !0,
          passiveListener: function () {
            var e = !1;
            try {
              Object.defineProperty({}, "passive", {
                get: function () {
                  e = !0
                }
              })
            } catch (l) {}
            return e
          }(),
          gestures: function () {
            return !1
          }()
        }
      }

      function r() {
        return t || (t = n()), t
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.getSupport = r
    },
    dac4: function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = void 0;
      var t = [{
          label: "北京市",
          value: "11"
        }, {
          label: "天津市",
          value: "12"
        }, {
          label: "河北省",
          value: "13"
        }, {
          label: "山西省",
          value: "14"
        }, {
          label: "内蒙古自治区",
          value: "15"
        }, {
          label: "辽宁省",
          value: "21"
        }, {
          label: "吉林省",
          value: "22"
        }, {
          label: "黑龙江省",
          value: "23"
        }, {
          label: "上海市",
          value: "31"
        }, {
          label: "江苏省",
          value: "32"
        }, {
          label: "浙江省",
          value: "33"
        }, {
          label: "安徽省",
          value: "34"
        }, {
          label: "福建省",
          value: "35"
        }, {
          label: "江西省",
          value: "36"
        }, {
          label: "山东省",
          value: "37"
        }, {
          label: "河南省",
          value: "41"
        }, {
          label: "湖北省",
          value: "42"
        }, {
          label: "湖南省",
          value: "43"
        }, {
          label: "广东省",
          value: "44"
        }, {
          label: "广西壮族自治区",
          value: "45"
        }, {
          label: "海南省",
          value: "46"
        }, {
          label: "重庆市",
          value: "50"
        }, {
          label: "四川省",
          value: "51"
        }, {
          label: "贵州省",
          value: "52"
        }, {
          label: "云南省",
          value: "53"
        }, {
          label: "西藏自治区",
          value: "54"
        }, {
          label: "陕西省",
          value: "61"
        }, {
          label: "甘肃省",
          value: "62"
        }, {
          label: "青海省",
          value: "63"
        }, {
          label: "宁夏回族自治区",
          value: "64"
        }, {
          label: "新疆维吾尔自治区",
          value: "65"
        }, {
          label: "台湾",
          value: "66"
        }, {
          label: "香港",
          value: "67"
        }, {
          label: "澳门",
          value: "68"
        }],
        n = t;
      l.default = n
    },
    dae9: function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = r;
      var t = n(a("5f9a"));

      function n(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function r() {
        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          l = arguments.length > 1 ? arguments[1] : void 0,
          a = this,
          n = a.params;
        n.cssMode || (n.autoHeight && a.updateAutoHeight(), (0, t.default)({
          swiper: a,
          runCallbacks: e,
          direction: l,
          step: "Start"
        }))
      }
    },
    dc6c: function (e, l, a) {
      "use strict";

      function t(e) {
        var l, a = this,
          t = a.params,
          n = a.slides[e],
          r = !1;
        if (n)
          for (var i = 0; i < a.slides.length; i += 1)
            if (a.slides[i] === n) {
              r = !0, l = i;
              break
            } if (!n || !r) return a.clickedSlide = void 0, void(a.clickedIndex = void 0);
        a.clickedSlide = n, a.virtual && a.params.virtual.enabled ? a.clickedIndex = parseInt($(n).attr("data-swiper-slide-index"), 10) : a.clickedIndex = l, t.slideToClickedSlide && void 0 !== a.clickedIndex && a.clickedIndex !== a.activeIndex && a.slideToClickedSlide()
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = t
    },
    e1f0: function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.paramsList = void 0;
      var t = ["modules", "init", "_direction", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_preloadImages", "updateOnImagesReady", "_loop", "_loopAdditionalSlides", "_loopedSlides", "_loopFillGroupWithBlank", "loopPreventsSlide", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideBlankClass", "slideActiveClass", "slideDuplicateActiveClass", "slideVisibleClass", "slideDuplicateClass", "slideNextClass", "slideDuplicateNextClass", "slidePrevClass", "slideDuplicatePrevClass", "wrapperClass", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "lazy", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "_virtual", "zoom"];
      l.paramsList = t
    },
    e213: function (e, l, a) {
      "use strict";

      function t(e) {
        var l = e.swiper,
          a = e.extendParams,
          t = e.on;
        a({
          panorama: {
            depth: 200,
            rotate: 30
          }
        }), t("beforeInit", (function () {
          if ("panorama" === l.params.effect) {
            l.classNames.push("".concat(l.params.containerModifierClass, "panorama")), l.classNames.push("".concat(l.params.containerModifierClass, "3d"));
            var e = {
              watchSlidesProgress: !0
            };
            Object.assign(l.params, e), Object.assign(l.originalParams, e)
          }
        })), t("progress", (function () {
          if ("panorama" === l.params.effect)
            for (var e = l.slidesSizesGrid, a = l.params.panorama, t = a.depth, n = void 0 === t ? 200 : t, r = a.rotate, i = void 0 === r ? 30 : r, u = i * Math.PI / 180, o = u / 2, s = 1 / (180 / i), v = 0; v < l.slides.length; v += 1) {
              var c = l.slides[v],
                b = c.progress,
                d = e[v],
                p = l.params.centeredSlides ? 0 : .5 * (l.params.slidesPerView - 1),
                f = b + p,
                h = 1 - Math.cos(f * s * Math.PI),
                g = "".concat(f * (d / 3) * h, "px"),
                m = f * i,
                y = .5 * d / Math.sin(o),
                w = "".concat(y * h - n, "px");
              c.transform("translateX(".concat(g, ") translateZ(").concat(w, ") rotateY(").concat(m, "deg)")), l.params.willChange && c.willChange("transform"), c.addClass("swiper-slide-panorama")
            }
        })), t("setTransition", (function (e, a) {
          "panorama" === l.params.effect && l.slides.forEach((function (e) {
            e.transition(a)
          }))
        }))
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = t
    },
    e350: function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = n;
      var t = a("d7bd");

      function n(e) {
        var l = e.swiper,
          a = e.extendParams,
          n = e.on;
        a({
          thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-thumbs"
          }
        });
        var r = !1,
          i = !1;

        function u() {
          var e = l.thumbs.swiper;
          if (e) {
            var a = e.clickedIndex,
              t = e.clickedSlide;
            if ((!t || !t.hasClass(l.params.thumbs.slideThumbActiveClass)) && "undefined" !== typeof a && null !== a) {
              var n;
              if (n = e.params.loop ? parseInt($(e.clickedSlide).attr("data-swiper-slide-index"), 10) : a, l.params.loop) {
                var r = l.activeIndex;
                l.slides.eq(r).hasClass(l.params.slideDuplicateClass) && (l.loopFix(), l._clientLeft = l.$wrapperEl[0].clientLeft, r = l.activeIndex);
                var i = l.slides.eq(r).prevAll('[data-swiper-slide-index="'.concat(n, '"]')).eq(0).index(),
                  u = l.slides.eq(r).nextAll('[data-swiper-slide-index="'.concat(n, '"]')).eq(0).index();
                n = "undefined" === typeof i ? u : "undefined" === typeof u ? i : u - r < r - i ? u : i
              }
              l.slideTo(n)
            }
          }
        }

        function o() {
          var e = l.params.thumbs;
          if (r) return !1;
          r = !0;
          var a = l.constructor;
          if (e.swiper instanceof a) l.thumbs.swiper = e.swiper, Object.assign(l.thumbs.swiper.originalParams, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
          }), Object.assign(l.thumbs.swiper.params, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
          });
          else if ((0, t.isObject)(e.swiper)) {
            var n = Object.assign({}, e.swiper);
            Object.assign(n, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1
            }), l.thumbs.swiper = new a(n), i = !0
          }
          return l.thumbs.swiper.$el && l.thumbs.swiper.$el.addClass(l.params.thumbs.thumbsContainerClass), l.thumbs.swiper.on("slideClick", u), !0
        }

        function s(e) {
          var a = l.thumbs.swiper;
          if (a) {
            var t = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView,
              n = l.params.thumbs.autoScrollOffset,
              r = n && !a.params.loop;
            if (l.realIndex !== a.realIndex || r) {
              var i, u, o = a.activeIndex;
              if (a.params.loop) {
                a.slides.eq(o).hasClass(a.params.slideDuplicateClass) && (a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft, o = a.activeIndex);
                var s = a.slides.eq(o).prevAll('[data-swiper-slide-index="'.concat(l.realIndex, '"]')).eq(0).index(),
                  v = a.slides.eq(o).nextAll('[data-swiper-slide-index="'.concat(l.realIndex, '"]')).eq(0).index();
                i = "undefined" === typeof s ? v : "undefined" === typeof v ? s : v - o === o - s ? a.params.slidesPerGroup > 1 ? v : o : v - o < o - s ? v : s, u = l.activeIndex > l.previousIndex ? "next" : "prev"
              } else i = l.realIndex, u = i > l.previousIndex ? "next" : "prev";
              r && (i += "next" === u ? n : -1 * n), a.visibleSlidesIndexes && a.visibleSlidesIndexes.indexOf(i) < 0 && (a.params.centeredSlides ? i = i > o ? i - Math.floor(t / 2) + 1 : i + Math.floor(t / 2) - 1 : i > o && a.params.slidesPerGroup, a.slideTo(i, e ? 0 : void 0))
            }
            var c = 1,
              b = l.params.thumbs.slideThumbActiveClass;
            if (l.params.slidesPerView > 1 && !l.params.centeredSlides && (c = l.params.slidesPerView), l.params.thumbs.multipleActiveThumbs || (c = 1), c = Math.floor(c), a.slides.forEach((function (e) {
                e.addClass(l.params.slideThumbsClass), e.removeClass(b)
              })), a.params.loop || a.params.virtual && a.params.virtual.enabled)
              for (var d = 0; d < c; d += 1) a.$wrapperEl.children('[data-swiper-slide-index="'.concat(l.realIndex + d, '"]')).addClass(b);
            else
              for (var p = 0; p < c; p += 1) a.slides[l.realIndex + p].addClass(b)
          }
        }
        l.thumbs = {
          swiper: null
        }, n("beforeInit", (function () {
          var e = l.params.thumbs;
          e && e.swiper && (o(), s(!0))
        })), n("slideChange update resize observerUpdate", (function () {
          l.thumbs.swiper && s()
        })), n("setTransition", (function (e, a) {
          var t = l.thumbs.swiper;
          t && t.setTransition(a)
        })), n("beforeDestroy", (function () {
          var e = l.thumbs.swiper;
          e && i && e && e.destroy()
        })), Object.assign(l.thumbs, {
          init: o,
          update: s
        })
      }
    },
    e35b: function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = void 0;
      var t = o(a("9f76")),
        n = o(a("2365")),
        r = o(a("7f2d")),
        i = o(a("54b5")),
        u = o(a("7a18"));

      function o(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var s = {
        getTranslate: t.default,
        setTranslate: n.default,
        minTranslate: r.default,
        maxTranslate: i.default,
        translateTo: u.default
      };
      l.default = s
    },
    e70d: function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = u;
      var t = i(a("3430")),
        n = i(a("41e4")),
        r = i(a("af24"));

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function u(e) {
        var l = e.swiper,
          a = e.extendParams,
          i = e.on;
        a({
          fadeEffect: {
            crossFade: !1,
            transformEl: null
          }
        });
        var u = function () {
            for (var e = l.slides, a = l.params.fadeEffect, t = 0; t < e.length; t += 1) {
              var r = l.slides[t],
                i = r.swiperSlideOffset,
                u = -i;
              l.params.virtualTranslate || (u -= l.translate);
              var o = 0;
              l.isHorizontal() || (o = u, u = 0);
              var s = l.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(r.progress), 0) : 1 + Math.min(Math.max(r.progress, -1), 0),
                v = (0, n.default)(a, r);
              v.css({
                opacity: s
              }), v.transform("translate3d(".concat(u, "px, ").concat(o, "px, 0px)")), l.params.willChange && v.willChange("opacity"), e[t].addClass("swiper-slide-fade")
            }
          },
          o = function (e) {
            for (var a = l.params.fadeEffect.transformEl, t = a ? l.slides.find(a) : l.slides, n = 0; n < t.length; n += 1) t[n].transition(e);
            (0, r.default)({
              swiper: l,
              duration: e,
              transformEl: a,
              allSlides: !0
            })
          };
        (0, t.default)({
          effect: "fade",
          swiper: l,
          on: i,
          setTranslate: u,
          setTransition: o,
          overwriteParams: function () {
            return {
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !l.params.cssMode
            }
          }
        })
      }
    },
    e822: function (e, l, a) {
      "use strict";

      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this && this.translate || 0,
          l = this,
          a = l.params,
          t = l.slides,
          n = l.rtlTranslate,
          r = l.snapGrid;
        if (0 !== t.length) {
          "undefined" !== typeof t[0].swiperSlideOffset && "undefined" !== typeof t[t.length - 1].swiperSlideOffset || l.updateSlidesOffset();
          var i = -e;
          n && (i = e), l.visibleSlidesIndexes = [], l.visibleSlides = [];
          for (var u = 0; u < t.length; u += 1) {
            var o = t[u],
              s = o.swiperSlideOffset;
            a.cssMode && a.centeredSlides && (s -= t[0].swiperSlideOffset);
            var v = (i + (a.centeredSlides ? l.minTranslate() : 0) - s) / (o.swiperSlideSize + a.spaceBetween),
              c = (i - r[0] + (a.centeredSlides ? l.minTranslate() : 0) - s) / (o.swiperSlideSize + a.spaceBetween),
              b = -(i - s),
              d = b + l.slidesSizesGrid[u],
              p = b >= 0 && b < l.size - 1 || d > 1 && d <= l.size || b <= 0 && d >= l.size;
            p && (l.visibleSlides.push(o), l.visibleSlidesIndexes.push(u), t[u].addClass(a.slideVisibleClass)), o.progress = n ? -v : v, o.originalProgress = n ? -c : c
          }
        }
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = t
    },
    e830: function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.getParams = u;
      var t = i(a("35a5")),
        n = a("5efe"),
        r = a("e1f0");

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function u() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          l = {
            on: {}
          },
          a = {};
        (0, n.extend)(l, t.default.defaults), (0, n.extend)(l, t.default.extendedDefaults), l._emitClasses = !0, l.init = !1;
        var i = {},
          u = r.paramsList.map((function (e) {
            return e.replace(/_/, "")
          })),
          o = Object.assign({}, e);
        return Object.keys(o).forEach((function (t) {
          "undefined" !== typeof e[t] && (u.indexOf(t) >= 0 ? (0, n.isObject)(e[t]) ? (l[t] = {}, a[t] = {}, (0, n.extend)(l[t], e[t]), (0, n.extend)(a[t], e[t])) : (l[t] = e[t], a[t] = e[t]) : 0 === t.search(/on[A-Z]/) && "function" === typeof e[t] ? l.on["".concat(t[2].toLowerCase()).concat(t.substr(3))] = e[t] : i[t] = e[t])
        })), ["navigation", "pagination", "scrollbar"].forEach((function (e) {
          !0 === l[e] && (l[e] = {}), !1 === l[e] && delete l[e]
        })), {
          params: l,
          passedParams: a,
          rest: i
        }
      }
    },
    e90d: function (e, l, a) {
      "use strict";

      function t(e) {
        return t = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
          return typeof e
        } : function (e) {
          return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, t(e)
      }

      function n(e) {
        var l = this;
        l.version = "1.1.8", l.options = e || {}, l.isDownScrolling = !1, l.isUpScrolling = !1;
        var a = l.options.down && l.options.down.callback;
        l.initDownScroll(), l.initUpScroll(), setTimeout((function () {
          l.optDown.use && l.optDown.auto && a && (l.optDown.autoShowLoading ? l.triggerDownScroll() : l.optDown.callback && l.optDown.callback(l)), l.optUp.use && l.optUp.auto && !l.isUpAutoLoad && l.triggerUpScroll()
        }), 30)
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = n, n.prototype.extendDownScroll = function (e) {
        n.extend(e, {
          use: !0,
          auto: !0,
          autoShowLoading: !1,
          isLock: !1,
          offset: 80,
          startTop: 100,
          fps: 40,
          inOffsetRate: 1,
          outOffsetRate: .2,
          bottomOffset: 20,
          minAngle: 45,
          textInOffset: "下拉刷新",
          textOutOffset: "释放更新",
          textLoading: "加载中 ...",
          inited: null,
          inOffset: null,
          outOffset: null,
          onMoving: null,
          beforeLoading: null,
          showLoading: null,
          afterLoading: null,
          endDownScroll: null,
          callback: function (e) {
            e.resetUpScroll()
          }
        })
      }, n.prototype.extendUpScroll = function (e) {
        n.extend(e, {
          use: !0,
          auto: !0,
          isLock: !1,
          isBoth: !0,
          isBounce: !1,
          callback: null,
          page: {
            num: 0,
            size: 10,
            time: null
          },
          noMoreSize: 5,
          offset: 80,
          textLoading: "加载中 ...",
          textNoMore: "-- END --",
          inited: null,
          showLoading: null,
          showNoMore: null,
          hideUpScroll: null,
          toTop: {
            src: null,
            offset: 1e3,
            duration: 300,
            btnClick: null,
            onShow: null
          },
          empty: {
            use: !0,
            icon: null,
            tip: "~ 暂无相关数据 ~",
            btnText: "",
            btnClick: null,
            onShow: null
          },
          onScroll: !1
        })
      }, n.extend = function (e, l) {
        if (!e) return l;
        for (var a in l)
          if (null == e[a]) {
            var r = l[a];
            null != r && "object" === t(r) ? e[a] = n.extend({}, r) : e[a] = r
          } else "object" === t(e[a]) && n.extend(e[a], l[a]);
        return e
      }, n.prototype.initDownScroll = function () {
        var e = this;
        e.optDown = e.options.down || {}, e.extendDownScroll(e.optDown), e.downHight = 0, e.optDown.use && e.optDown.inited && setTimeout((function () {
          e.optDown.inited(e)
        }), 0)
      }, n.prototype.touchstartEvent = function (e) {
        this.optDown.use && (this.startPoint = this.getPoint(e), this.startTop = this.getScrollTop(), this.lastPoint = this.startPoint, this.maxTouchmoveY = this.getBodyHeight() - this.optDown.bottomOffset, this.inTouchend = !1)
      }, n.prototype.touchmoveEvent = function (e) {
        if (this.optDown.use && this.startPoint) {
          var l = this,
            a = (new Date).getTime();
          if (!(l.moveTime && a - l.moveTime < l.moveTimeDiff)) {
            l.moveTime = a, l.moveTimeDiff = 1e3 / l.optDown.fps;
            var t = l.getScrollTop(),
              n = l.getPoint(e),
              r = n.y - l.startPoint.y;
            if (r > 0 && (t <= 0 || t <= l.optDown.startTop && t === l.startTop) && l.optDown.use && !l.inTouchend && !l.isDownScrolling && !l.optDown.isLock && (!l.isUpScrolling || l.isUpScrolling && l.optUp.isBoth)) {
              var i = Math.abs(l.lastPoint.x - n.x),
                u = Math.abs(l.lastPoint.y - n.y),
                o = Math.sqrt(i * i + u * u);
              if (0 !== o) {
                var s = Math.asin(u / o) / Math.PI * 180;
                if (s < l.optDown.minAngle) return
              }
              if (l.maxTouchmoveY > 0 && n.y >= l.maxTouchmoveY) return l.inTouchend = !0, void l.touchendEvent();
              l.preventDefault(e);
              var v = n.y - l.lastPoint.y;
              l.downHight < l.optDown.offset ? (1 !== l.movetype && (l.movetype = 1, l.optDown.inOffset && l.optDown.inOffset(l), l.isMoveDown = !0), l.downHight += v * l.optDown.inOffsetRate) : (2 !== l.movetype && (l.movetype = 2, l.optDown.outOffset && l.optDown.outOffset(l), l.isMoveDown = !0), l.downHight += v > 0 ? Math.round(v * l.optDown.outOffsetRate) : v);
              var c = l.downHight / l.optDown.offset;
              l.optDown.onMoving && l.optDown.onMoving(l, c, l.downHight)
            }
            l.lastPoint = n
          }
        }
      }, n.prototype.touchendEvent = function (e) {
        if (this.optDown.use)
          if (this.isMoveDown) this.downHight >= this.optDown.offset ? this.triggerDownScroll() : (this.downHight = 0, this.optDown.endDownScroll && this.optDown.endDownScroll(this)), this.movetype = 0, this.isMoveDown = !1;
          else if (this.getScrollTop() === this.startTop) {
          var l = this.getPoint(e).y - this.startPoint.y < 0;
          l && this.triggerUpScroll(!0)
        }
      }, n.prototype.getPoint = function (e) {
        return e ? e.touches && e.touches[0] ? {
          x: e.touches[0].pageX,
          y: e.touches[0].pageY
        } : e.changedTouches && e.changedTouches[0] ? {
          x: e.changedTouches[0].pageX,
          y: e.changedTouches[0].pageY
        } : {
          x: e.clientX,
          y: e.clientY
        } : {
          x: 0,
          y: 0
        }
      }, n.prototype.triggerDownScroll = function () {
        this.optDown.beforeLoading && this.optDown.beforeLoading(this) || (this.showDownScroll(), this.optDown.callback && this.optDown.callback(this))
      }, n.prototype.showDownScroll = function () {
        this.isDownScrolling = !0, this.downHight = this.optDown.offset, this.optDown.showLoading(this, this.downHight)
      }, n.prototype.endDownScroll = function () {
        var e = this,
          l = function () {
            e.downHight = 0, e.isDownScrolling = !1, e.optDown.endDownScroll && e.optDown.endDownScroll(e), e.setScrollHeight(0)
          },
          a = 0;
        e.optDown.afterLoading && (a = e.optDown.afterLoading(e)), "number" === typeof a && a > 0 ? setTimeout(l, a) : l()
      }, n.prototype.lockDownScroll = function (e) {
        null == e && (e = !0), this.optDown.isLock = e
      }, n.prototype.initUpScroll = function () {
        var e = this;
        e.optUp = e.options.up || {
          use: !1
        }, e.extendUpScroll(e.optUp), e.optUp.isBounce || e.setBounce(!1), !1 !== e.optUp.use && (e.optUp.hasNext = !0, e.startNum = e.optUp.page.num + 1, e.optUp.inited && setTimeout((function () {
          e.optUp.inited(e)
        }), 0))
      }, n.prototype.scroll = function (e, l) {
        this.setScrollTop(e.scrollTop), this.setScrollHeight(e.scrollHeight), null == this.preScrollY && (this.preScrollY = 0), this.isScrollUp = e.scrollTop - this.preScrollY > 0, this.preScrollY = e.scrollTop, this.isScrollUp && this.triggerUpScroll(!0), e.scrollTop >= this.optUp.toTop.offset ? this.showTopBtn() : this.hideTopBtn(), this.optUp.onScroll && l && l()
      }, n.prototype.triggerUpScroll = function (e) {
        if (!this.isUpScrolling && this.optUp.use && this.optUp.callback) {
          if (!0 === e) {
            var l = !1;
            if (!this.optUp.hasNext || this.optUp.isLock || this.isDownScrolling || this.getScrollBottom() <= this.optUp.offset && (l = !0), !1 === l) return
          }
          this.showUpScroll(), this.optUp.page.num++, this.isUpAutoLoad = !0, this.num = this.optUp.page.num, this.size = this.optUp.page.size, this.time = this.optUp.page.time, this.optUp.callback(this)
        }
      }, n.prototype.showUpScroll = function () {
        this.isUpScrolling = !0, this.optUp.showLoading && this.optUp.showLoading(this)
      }, n.prototype.showNoMore = function () {
        this.optUp.hasNext = !1, this.optUp.showNoMore && this.optUp.showNoMore(this)
      }, n.prototype.hideUpScroll = function () {
        this.optUp.hideUpScroll && this.optUp.hideUpScroll(this)
      }, n.prototype.endUpScroll = function (e) {
        null != e && (e ? this.showNoMore() : this.hideUpScroll()), this.isUpScrolling = !1
      }, n.prototype.resetUpScroll = function (e) {
        if (this.optUp && this.optUp.use) {
          var l = this.optUp.page;
          this.prePageNum = l.num, this.prePageTime = l.time, l.num = this.startNum, l.time = null, this.isDownScrolling || !1 === e || (null == e ? (this.removeEmpty(), this.showUpScroll()) : this.showDownScroll()), this.isUpAutoLoad = !0, this.num = l.num, this.size = l.size, this.time = l.time, this.optUp.callback && this.optUp.callback(this)
        }
      }, n.prototype.setPageNum = function (e) {
        this.optUp.page.num = e - 1
      }, n.prototype.setPageSize = function (e) {
        this.optUp.page.size = e
      }, n.prototype.endByPage = function (e, l, a) {
        var t;
        this.optUp.use && null != l && (t = this.optUp.page.num < l), this.endSuccess(e, t, a)
      }, n.prototype.endBySize = function (e, l, a) {
        var t;
        if (this.optUp.use && null != l) {
          var n = (this.optUp.page.num - 1) * this.optUp.page.size + e;
          t = n < l
        }
        this.endSuccess(e, t, a)
      }, n.prototype.endSuccess = function (e, l, a) {
        var t = this;
        if (t.isDownScrolling && t.endDownScroll(), t.optUp.use) {
          var n;
          if (null != e) {
            var r = t.optUp.page.num,
              i = t.optUp.page.size;
            if (1 === r && a && (t.optUp.page.time = a), e < i || !1 === l)
              if (t.optUp.hasNext = !1, 0 === e && 1 === r) n = !1, t.showEmpty();
              else {
                var u = (r - 1) * i + e;
                n = !(u < t.optUp.noMoreSize), t.removeEmpty()
              }
            else n = !1, t.optUp.hasNext = !0, t.removeEmpty()
          }
          t.endUpScroll(n)
        }
      }, n.prototype.endErr = function () {
        if (this.isDownScrolling) {
          var e = this.optUp.page;
          e && this.prePageNum && (e.num = this.prePageNum, e.time = this.prePageTime), this.endDownScroll()
        }
        this.isUpScrolling && (this.optUp.page.num--, this.endUpScroll(!1))
      }, n.prototype.showEmpty = function () {
        this.optUp.empty.use && this.optUp.empty.onShow && this.optUp.empty.onShow(!0)
      }, n.prototype.removeEmpty = function () {
        this.optUp.empty.use && this.optUp.empty.onShow && this.optUp.empty.onShow(!1)
      }, n.prototype.showTopBtn = function () {
        this.topBtnShow || (this.topBtnShow = !0, this.optUp.toTop.onShow && this.optUp.toTop.onShow(!0))
      }, n.prototype.hideTopBtn = function () {
        this.topBtnShow && (this.topBtnShow = !1, this.optUp.toTop.onShow && this.optUp.toTop.onShow(!1))
      }, n.prototype.getScrollTop = function () {
        return this.scrollTop || 0
      }, n.prototype.setScrollTop = function (e) {
        this.scrollTop = e
      }, n.prototype.scrollTo = function (e, l) {
        this.myScrollTo && this.myScrollTo(e, l)
      }, n.prototype.resetScrollTo = function (e) {
        this.myScrollTo = e
      }, n.prototype.getScrollBottom = function () {
        return this.getScrollHeight() - this.getClientHeight() - this.getScrollTop()
      }, n.prototype.getStep = function (e, l, a, t, n) {
        var r = l - e;
        if (0 !== t && 0 !== r) {
          t = t || 300, n = n || 30;
          var i = t / n,
            u = r / i,
            o = 0,
            s = setInterval((function () {
              o < i - 1 ? (e += u, a && a(e, s), o++) : (a && a(l, s), clearInterval(s))
            }), n)
        } else a && a(l)
      }, n.prototype.getClientHeight = function (e) {
        var l = this.clientHeight || 0;
        return 0 === l && !0 !== e && (l = this.getBodyHeight()), l
      }, n.prototype.setClientHeight = function (e) {
        this.clientHeight = e
      }, n.prototype.getScrollHeight = function () {
        return this.scrollHeight || 0
      }, n.prototype.setScrollHeight = function (e) {
        this.scrollHeight = e
      }, n.prototype.getBodyHeight = function () {
        return this.bodyHeight || 0
      }, n.prototype.setBodyHeight = function (e) {
        this.bodyHeight = e
      }, n.prototype.preventDefault = function (e) {
        e && e.cancelable && !e.defaultPrevented && e.preventDefault()
      }, n.prototype.setBounce = function (e) {}
    },
    ecd6: function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = void 0;
      var t = {
        appid: "__UNI__B1EB762"
      };
      l.default = t
    },
    ee18: function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = void 0;
      var t = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        virtualList: [],
        virtualIndexList: [],
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !1,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        slideThumbsClass: "swiper-slide-thumb",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
        willChange: !1
      };
      l.default = t
    },
    f0c5: function (e, l, a) {
      "use strict";

      function t(e, l, a, t, n, r, i, u, o, s) {
        var v, c = "function" === typeof e ? e.options : e;
        if (o && (c.components = Object.assign(o, c.components || {})), s && ((s.beforeCreate || (s.beforeCreate = [])).unshift((function () {
            this[s.__module] = this
          })), (c.mixins || (c.mixins = [])).push(s)), l && (c.render = l, c.staticRenderFns = a, c._compiled = !0), t && (c.functional = !0), r && (c._scopeId = "data-v-" + r), i ? (v = function (e) {
            e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, e || "undefined" === typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), n && n.call(this, e), e && e._registeredComponents && e._registeredComponents.add(i)
          }, c._ssrRegister = v) : n && (v = u ? function () {
            n.call(this, this.$root.$options.shadowRoot)
          } : n), v)
          if (c.functional) {
            c._injectStyles = v;
            var b = c.render;
            c.render = function (e, l) {
              return v.call(l), b(e, l)
            }
          } else {
            var d = c.beforeCreate;
            c.beforeCreate = d ? [].concat(d, v) : [v]
          } return {
          exports: e,
          options: c
        }
      }
      a.d(l, "a", (function () {
        return t
      }))
    },
    f50a: function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.getChangedParams = r;
      var t = a("e1f0"),
        n = a("5efe");

      function r(e, l, a, r) {
        var i = [];
        if (!l) return i;
        var u = function (e) {
            i.indexOf(e) < 0 && i.push(e)
          },
          o = r.map((function (e) {
            return e.props && e.props.key
          })),
          s = a.map((function (e) {
            return e.props && e.props.key
          }));
        o.join("") !== s.join("") && i.push("children"), r.length !== a.length && i.push("children");
        var v = t.paramsList.filter((function (e) {
          return "_" === e[0]
        })).map((function (e) {
          return e.replace(/_/, "")
        }));
        return v.forEach((function (a) {
          if (a in e && a in l)
            if ((0, n.isObject)(e[a]) && (0, n.isObject)(l[a])) {
              var t = Object.keys(e[a]),
                r = Object.keys(l[a]);
              t.length !== r.length ? u(a) : (t.forEach((function (t) {
                e[a][t] !== l[a][t] && u(a)
              })), r.forEach((function (t) {
                e[a][t] !== l[a][t] && u(a)
              })))
            } else e[a] !== l[a] && u(a);
          else(a in e && !(a in l) || !(a in e) && a in l) && u(a)
        })), i
      }
    },
    f633: function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.updateSwiper = o;
      var t = r(a("a34a")),
        n = a("5efe");

      function r(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function i(e, l, a, t, n, r, i) {
        try {
          var u = e[r](i),
            o = u.value
        } catch (s) {
          return void a(s)
        }
        u.done ? l(o) : Promise.resolve(o).then(t, n)
      }

      function u(e) {
        return function () {
          var l = this,
            a = arguments;
          return new Promise((function (t, n) {
            var r = e.apply(l, a);

            function u(e) {
              i(r, t, n, u, o, "next", e)
            }

            function o(e) {
              i(r, t, n, u, o, "throw", e)
            }
            u(void 0)
          }))
        }
      }

      function o(e) {
        return s.apply(this, arguments)
      }

      function s() {
        return s = u(t.default.mark((function e(l) {
          var a, r, i, u, o, s, v, c, b, d, p, f, h, g, m, y, w, _, S, x, T;
          return t.default.wrap((function (e) {
            while (1) switch (e.prev = e.next) {
              case 0:
                a = l.swiper, l.slides, r = l.passedParams, i = l.changedParams, u = l.nextEl, o = l.prevEl, s = l.paginationEl, v = l.scrollbarEl, c = i.filter((function (e) {
                  return "children" !== e && "direction" !== e
                })), b = a.params, d = a.pagination, p = a.navigation, f = a.scrollbar, h = a.virtual, g = a.thumbs, i.includes("thumbs") && r.thumbs && r.thumbs.swiper && b.thumbs && !b.thumbs.swiper && (m = !0), i.includes("controller") && r.controller && r.controller.control && b.controller && !b.controller.control && (y = !0), i.includes("pagination") && r.pagination && (r.pagination.el || s) && (b.pagination || !1 === b.pagination) && d && !d.el && (w = !0), i.includes("scrollbar") && r.scrollbar && (r.scrollbar.el || v) && (b.scrollbar || !1 === b.scrollbar) && f && !f.el && (_ = !0), i.includes("navigation") && r.navigation && (r.navigation.prevEl || o) && (r.navigation.nextEl || u) && (b.navigation || !1 === b.navigation) && p && !p.prevEl && !p.nextEl && (S = !0), x = function (e) {
                  a[e] && (a[e].destroy(), "navigation" === e ? (b[e].prevEl = void 0, b[e].nextEl = void 0, a[e].prevEl = void 0, a[e].nextEl = void 0) : (b[e].el = void 0, a[e].el = void 0))
                }, c.forEach((function (e) {
                  if ((0, n.isObject)(b[e]) && (0, n.isObject)(r[e]))(0, n.extend)(b[e], r[e]);
                  else {
                    var l = r[e];
                    !0 !== l && !1 !== l || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? b[e] = r[e] : !1 === l && x(e)
                  }
                })), i.includes("children") && h && b.virtual.enabled ? h.update(!0) : i.includes("children") && a.lazy && a.params.lazy.enabled && a.lazy.load(), m && (T = g.init(), T && g.update(!0)), y && (a.controller.control = b.controller.control), w && (s && (b.pagination.el = s), d.init(), d.render(), d.update()), _ && (v && (b.scrollbar.el = v), f.init(), f.updateSize(), f.setTranslate()), S && (u && (b.navigation.nextEl = u), o && (b.navigation.prevEl = o), p.init(), p.update()), i.includes("allowSlideNext") && (a.allowSlideNext = r.allowSlideNext), i.includes("allowSlidePrev") && (a.allowSlidePrev = r.allowSlidePrev), i.includes("direction") && a.changeDirection(r.direction, !1), a.update();
              case 20:
              case "end":
                return e.stop()
            }
          }), e)
        }))), s.apply(this, arguments)
      }
    },
    f6b7: function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = void 0;
      var t = r(a("6bb3")),
        n = r(a("b944"));

      function r(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var i = {
        addClasses: t.default,
        removeClasses: n.default
      };
      l.default = i
    },
    f91a: function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = u;
      var t = i(a("3430")),
        n = i(a("41e4")),
        r = i(a("af24"));

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function u(e) {
        var l = e.swiper,
          a = e.extendParams,
          i = e.on;
        a({
          flipEffect: {
            slideShadows: !0,
            limitRotation: !0,
            transformEl: null
          }
        });
        var u = function () {
            for (var e = l.slides, a = l.rtlTranslate, t = l.params.flipEffect, r = 0; r < e.length; r += 1) {
              var i = e[r],
                u = i.progress;
              l.params.flipEffect.limitRotation && (u = Math.max(Math.min(i.progress, 1), -1));
              var o = i.swiperSlideOffset,
                s = -180 * u,
                v = s,
                c = 0,
                b = l.params.cssMode ? -o - l.translate : -o,
                d = 0;
              l.isHorizontal() ? a && (v = -v) : (d = b, b = 0, c = -v, v = 0), i.css({
                zIndex: -Math.abs(Math.round(u)) + e.length
              });
              var p = "translate3d(".concat(b, "px, ").concat(d, "px, 0px) rotateX(").concat(c, "deg) rotateY(").concat(v, "deg)"),
                f = (0, n.default)(t, i);
              f.transform(p), l.params.willChange && f.willChange("transform"), e[r].addClass("swiper-slide-flip")
            }
          },
          o = function (e) {
            for (var a = l.params.flipEffect.transformEl, t = a ? l.slides.find(a) : l.slides, n = 0; n < t.length; n += 1) t[n].transition(e);
            (0, r.default)({
              swiper: l,
              duration: e,
              transformEl: a
            })
          };
        (0, t.default)({
          effect: "flip",
          swiper: l,
          on: i,
          setTranslate: u,
          setTransition: o,
          perspective: function () {
            return !0
          },
          overwriteParams: function () {
            return {
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !l.params.cssMode
            }
          }
        })
      }
    },
    f9e5: function (e, l, a) {
      "use strict";
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = void 0;
      var t = v(a("afde")),
        n = v(a("1e71")),
        r = v(a("7008")),
        i = v(a("53fe")),
        u = v(a("c0de")),
        o = v(a("7e3b")),
        s = v(a("9e77"));

      function v(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var c = {
        slideTo: t.default,
        slideToLoop: n.default,
        slideNext: r.default,
        slidePrev: i.default,
        slideReset: u.default,
        slideToClosest: o.default,
        slideToClickedSlide: s.default
      };
      l.default = c
    },
    fa7d: function (e, l, a) {
      "use strict";
      (function (e) {
        Object.defineProperty(l, "__esModule", {
          value: !0
        }), l.default = void 0;
        var a = function (l) {
            e.navigateTo({
              url: l
            })
          },
          t = function (l) {
            e.switchTab({
              url: l
            })
          },
          n = function (l) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500,
              t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "none";
            !1 !== Boolean(l) && e.showToast({
              title: l,
              duration: a,
              mask: t,
              icon: n
            })
          },
          r = function (l) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500,
              t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            l && (n(l), setTimeout((function () {
              e.navigateBack({
                delta: t
              })
            }), a))
          },
          i = function () {
            for (var e = new Date, l = e.getFullYear().toString() + (e.getMonth() + 1).toString() + e.getDate().toString() + e.getHours().toString() + e.getMinutes().toString() + e.getSeconds().toString() + e.getMilliseconds().toString(), a = 0; a < 5; a++) l += Math.floor(10 * Math.random());
            return l
          },
          u = function () {
            var e = new Date,
              l = e.getFullYear(),
              a = e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1,
              t = e.getDate() < 10 ? "0" + e.getDate() : e.getDate(),
              n = e.getHours(),
              r = e.getMinutes(),
              i = e.getSeconds();
            return l + "-" + a + "-" + t + " " + n + ":" + r + ":" + i
          },
          o = function () {
            var e = new Date,
              l = e.getFullYear(),
              a = e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1,
              t = e.getDate() < 10 ? "0" + e.getDate() : e.getDate();
            return l + "-" + a + "-" + t
          },
          s = {
            jump: a,
            msg: n,
            msgBack: r,
            tab: t,
            genTradeNo: i,
            getCurDateTime: u,
            getCurDate: o
          };
        l.default = s
      }).call(this, a("543d")["default"])
    },
    fda2: function (e, l, a) {
      "use strict";

      function t() {
        var e, l, a = this,
          t = a.el;
        e = "undefined" !== typeof a.params.width && null !== a.params.width ? a.params.width : t.width, l = "undefined" !== typeof a.params.height && null !== a.params.height ? a.params.height : t.height, 0 === e && a.isHorizontal() || 0 === l && a.isVertical() || (Number.isNaN(e) && (e = 0), Number.isNaN(l) && (l = 0), Object.assign(a, {
          width: e,
          height: l,
          size: a.isHorizontal() ? e : l
        }))
      }
      Object.defineProperty(l, "__esModule", {
        value: !0
      }), l.default = t
    }
  }
]);