(function(){function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n8 = 0, F = function F() {}; return { s: F, n: function n() { return _n8 >= r.length ? { done: !0 } : { done: !1, value: r[_n8++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var t = [.2, 3 / 8, 5 / 9, 2 / 3],
  o = function o(_o, r) {
    return function (e) {
      var n = 4 * _o + e - 4,
        f = "*-04-39?2$%%$%%'$%''%'''%')(%'))%(++'(++'(+.'+-.',/3',33)-/5)-43).36)058*18<+37<+4:<,4:E,5<A-7>C/8@F/:EH/<EK0=FM1?IP2@KS3BNV4DPY5FS\\6HV_6IXb7K[e8N^i9Pam;Rdp<Tgt".charCodeAt(n) - 35,
        s = n > 8 ? f : 1,
        l = r / s | 0,
        c = r % s,
        a = s - c,
        i = n > 8 ? l * t[e] + (_o > 5) & -2 : f,
        d = l - i;
      return {
        t: a * d + c * d + c,
        o: [[a, d], [c, d + 1]],
        l: i
      };
    };
  },
  r = {
    L: 0,
    M: 1,
    Q: 2,
    H: 3
  },
  e = function e(t) {
    return new Uint8Array(t);
  },
  n = function n(t) {
    var o = new Error("lean-qr error ".concat(t));
    throw o.code = t, o;
  },
  f = function f(t) {
    var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : t * t;
    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : e(o);
    return {
      size: t,
      i: r,
      get: function get(o, e) {
        return o >= 0 && o < t && !!(1 & r[e * t + o]);
      },
      u: function u(o) {
        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$on = _ref.on,
          r = _ref$on === void 0 ? [0, 0, 0] : _ref$on,
          _ref$off = _ref.off,
          e = _ref$off === void 0 ? [0, 0, 0, 0] : _ref$off,
          _ref$pad = _ref.pad,
          n = _ref$pad === void 0 ? 4 : _ref$pad,
          _ref$padX = _ref.padX,
          f = _ref$padX === void 0 ? n : _ref$padX,
          _ref$padY = _ref.padY,
          s = _ref$padY === void 0 ? n : _ref$padY;
        var l = t + 2 * f,
          c = t + 2 * s,
          a = o.createImageData(l, c),
          i = new Uint32Array(a.data.buffer);
        a.data.set([].concat(_toConsumableArray(r), [255]));
        var d = i[0];
        a.data.set([].concat(_toConsumableArray(e), [255]));
        var u = i[0];
        for (var _t = 0; _t < c; ++_t) for (var _o2 = 0; _o2 < l; ++_o2) i[_t * l + _o2] = this.get(_o2 - f, _t - s) ? d : u;
        return a;
      },
      toCanvas: function toCanvas(t, o) {
        var r = t.getContext("2d"),
          e = this.u(r, o);
        t.width = e.width, t.height = e.height, r.putImageData(e, 0, 0);
      }
    };
  },
  s = [function (t, o) {
    return 1 & (t ^ o);
  }, function (t, o) {
    return 1 & o;
  }, function (t) {
    return t % 3;
  }, function (t, o) {
    return (t + o) % 3;
  }, function (t, o) {
    return 1 & (t / 3 ^ o >> 1);
  }, function (t, o) {
    return (t & o & 1) + t * o % 3;
  }, function (t, o) {
    return (t & o) + t * o % 3 & 1;
  }, function (t, o) {
    return (t ^ o) + t * o % 3 & 1;
  }],
  l = e(511);
for (var _t2 = 0, _o3 = 1; _t2 < 255; _o3 = 2 * _o3 ^ 285 * (_o3 > 127)) l[l[_o3 + 255] = _t2++] = _o3;
var c = function c(t) {
    return l[t % 255];
  },
  a = function a(t) {
    return l[t + 255];
  },
  i = function i(t, o) {
    var r = e(t.length + o.length - 1);
    for (var _e = 0; _e < t.length; ++_e) for (var _n = 0; _n < o.length; ++_n) r[_e + _n] ^= c(t[_e] + o[_n]);
    return r.map(a);
  },
  d = function d(t, o) {
    var r = e(t.length + o.length - 1);
    r.set(t, 0);
    for (var _e2 = 0; _e2 < t.length; ++_e2) if (r[_e2]) {
      var _t3 = a(r[_e2]);
      for (var _n2 = 0; _n2 < o.length; ++_n2) r[_e2 + _n2] ^= c(o[_n2] + _t3);
    }
    return r.slice(t.length);
  },
  u = [[0], [0, 0]];
for (var _t4 = 1; _t4 < 30; ++_t4) u.push(i(u[_t4], [0, _t4]));
var _ = function _(t, o) {
    var r = [[], []];
    var n = 0,
      f = 0;
    var _iterator = _createForOfIteratorHelper(o.o),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
          _e3 = _step$value[0],
          _s = _step$value[1];
        for (var _l = 0; _l < _e3; ++_l, n += _s) {
          var _e4 = t.slice(n, n + _s);
          r[0].push(_e4), r[1].push(d(_e4, u[o.l])), f += _s + o.l;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var s = e(f);
    f = 0;
    for (var _i = 0, _r = r; _i < _r.length; _i++) {
      var _t5 = _r[_i];
      for (var _o4 = 0, _r2 = -1; f !== _r2; ++_o4) {
        _r2 = f;
        var _iterator2 = _createForOfIteratorHelper(_t5),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _r3 = _step2.value;
            _o4 < _r3.length && (s[f++] = _r3[_o4]);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }
    return s;
  },
  p = function p(t, o, r) {
    var e = t <<= r;
    for (var _t6 = 134217728; _t6 >>= 1;) e & _t6 && (e ^= o * (_t6 >> r));
    return e | t;
  },
  z = function z(_ref2, r) {
    var t = _ref2.size,
      o = _ref2.i;
    var e = function e(r, _e5, n, f) {
        for (; n-- > 0; r += t) o.fill(f, r, r + _e5);
      },
      n = function n(o, r, _n3) {
        for (var _f = 0; _f++ < 3; _n3 -= 2) e(r * t + o - (_n3 >> 1) * (t + 1), _n3, _n3, 2 | _f);
      },
      f = 2 * ((t - 13) / (1 + (r / 7 | 0)) / 2 + .75 | 0);
    if (r > 1) for (var _o5 = t - 7; _o5 > 8; _o5 -= f) {
      for (var _t7 = _o5; _t7 > 8; _t7 -= f) n(_o5, _t7, 5);
      _o5 < t - 7 && n(_o5, 6, 5);
    }
    if (r > 6) for (var _e6 = p(r, 7973, 12), _n4 = 1; _n4 < 7; ++_n4) for (var _r4 = 12; _r4-- > 9; _e6 >>= 1) o[_n4 * t - _r4] = 2 | 1 & _e6;
    e(7, 2, 9, 2), e(t - 8, 8, 9, 2);
    for (var _r5 = 0; _r5 < t; ++_r5) o[6 * t + _r5] = 3 ^ 1 & _r5;
    n(3, 3, 7), n(t - 4, 3, 7);
    for (var _r6 = 0; _r6 < t; ++_r6) for (var _e7 = _r6; _e7 < t; ++_e7) o[_e7 * t + _r6] = o[_r6 * t + _e7];
    o[(t - 8) * t + 8] = 3;
  },
  g = function g(_ref3) {
    var t = _ref3.size,
      o = _ref3.i;
    var r = [];
    for (var _e8 = t - 2, _n5 = t, _f2 = -1; _e8 >= 0; _e8 -= 2) {
      for (5 === _e8 && (_e8 = 4); _n5 += _f2, -1 !== _n5 && _n5 !== t;) {
        var _f3 = _n5 * t + _e8;
        o[_f3 + 1] || r.push(_f3 + 1), o[_f3] || r.push(_f3);
      }
      _f2 *= -1;
    }
    return r;
  },
  w = function w(_ref4, o, r) {
    var t = _ref4.i;
    return o.forEach(function (o, e) {
      return t[o] = r[e >> 3] >> (7 & ~e) & 1;
    });
  },
  y = function y(_ref5, r, e, n) {
    var t = _ref5.size,
      o = _ref5.i;
    for (var _e9 = 0; _e9 < t; ++_e9) for (var _n6 = 0; _n6 < t; ++_n6) {
      var _f4 = _e9 * t + _n6;
      o[_f4] ^= !(r(_n6, _e9) || 2 & o[_f4]);
    }
    var f = 21522 ^ p((1 ^ n) << 3 | e, 1335, 10);
    for (var _r7 = 0; _r7++ < 8; f >>= 1) o[(_r7 - (_r7 < 7)) * t + 8] = 1 & f, o[9 * t - _r7] = 1 & f;
    for (var _r8 = 8; --_r8, f; f >>= 1) o[8 * t + _r8 - (_r8 < 7)] = 1 & f, o[(t - _r8) * t + 8] = 1 & f;
  },
  E = function E(_ref6) {
    var t = _ref6.size,
      o = _ref6.i;
    var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    for (var _n7 = 0; _n7 < t; ++_n7) {
      for (var _f5 = 0; _f5 < 2; ++_f5) for (var _s2 = 0, _l2 = 0, _c = 0, _a = 0; _s2 < t; ++_s2) {
        var _i2 = 1 & o[_f5 ? _n7 * t + _s2 : _s2 * t + _n7];
        e += _i2, _l2 = (_l2 >> 1 | 2098176) & (3047517 ^ _i2 - 1), 2049 & _l2 && (r += 40), _i2 !== _a && (_c = 0), _a = _i2, r += 5 === ++_c ? 3 : _c > 5;
      }
      if (_n7) for (var _e0 = t + _n7, _f6 = 5 * o[_n7 - 1] ^ o[_n7]; _e0 < t * t; _e0 += t) {
        var _t8 = 5 * o[_e0 - 1] ^ o[_e0];
        r += 3 * !(1 & (_f6 | _t8) | 4 & (_f6 ^ _t8)), _f6 = _t8;
      }
    }
    return r + 10 * (10 * Math.abs(e / (t * t) - 1) | 0);
  },
  h = [],
  m = function m() {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : n(1);
    var _ref7 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref7$minCorrectionLe = _ref7.minCorrectionLevel,
      r = _ref7$minCorrectionLe === void 0 ? 0 : _ref7$minCorrectionLe,
      _ref7$minVersion = _ref7.minVersion,
      l = _ref7$minVersion === void 0 ? 1 : _ref7$minVersion;
    "string" != typeof t && n(5), t = new TextEncoder().encode(t);
    var c = e(2957);
    c.set([113, 164, t.length >> 8]);
    var _loop = function _loop() {
        var n = h[_e1];
        n || (h[_e1] = n = f(4 * _e1 + 17), z(n, _e1), n.p = g(n));
        var l = o(_e1, n.p.length >> 3)(r);
        if (l.t >= 3 + (_e1 > 9) + t.length) {
          var _o6 = _e1 > 9 ? 3 : 2;
          for (c[_o6++] = t.length, c.set(t, _o6), _o6 += t.length - 1; _o6 < 2954; c.set([236, 17], _o6 += 2));
          var _a2 = f(n.size, n.i);
          return {
            v: (w(_a2, n.p, _(c, l)), s.map(function (t, o) {
              var e = f(_a2.size, _a2.i);
              return y(e, t, o, r), e.s = E(e), e;
            }).sort(function (t, o) {
              return t.s - o.s;
            })[0])
          };
        }
      },
      _ret;
    for (var _e1 = l; _e1 < 41; ++_e1) {
      _ret = _loop();
      if (_ret) return _ret.v;
    }
    n(4);
  };
window.gen_00c68bb_es5 = m;
window.cor_00c68bb_es5 = r;})();