(self.webpackChunkgdox = self.webpackChunkgdox || []).push([
  [209],
  {
    4186: function (p) {
      (function () {
        var T, a, f, v, c, d;
        'undefined' != typeof performance && null !== performance && performance.now
          ? (p.exports = function () {
              return performance.now();
            })
          : 'undefined' != typeof process && null !== process && process.hrtime
          ? ((p.exports = function () {
              return (T() - c) / 1e6;
            }),
            (a = process.hrtime),
            (v = (T = function () {
              var m;
              return 1e9 * (m = a())[0] + m[1];
            })()),
            (d = 1e9 * process.uptime()),
            (c = v - d))
          : Date.now
          ? ((p.exports = function () {
              return Date.now() - f;
            }),
            (f = Date.now()))
          : ((p.exports = function () {
              return new Date().getTime() - f;
            }),
            (f = new Date().getTime()));
      }.call(this));
    },
    4665: (p, T, a) => {
      for (
        var f = a(4186),
          v = 'undefined' == typeof window ? global : window,
          c = ['moz', 'webkit'],
          d = 'AnimationFrame',
          m = v['request' + d],
          O = v['cancel' + d] || v['cancelRequest' + d],
          E = 0;
        !m && E < c.length;
        E++
      )
        (m = v[c[E] + 'Request' + d]),
          (O = v[c[E] + 'Cancel' + d] || v[c[E] + 'CancelRequest' + d]);
      if (!m || !O) {
        var S = 0,
          C = 0,
          A = [];
        (m = function (P) {
          if (0 === A.length) {
            var w = f(),
              D = Math.max(0, 16.666666666666668 - (w - S));
            (S = D + w),
              setTimeout(function () {
                var L = A.slice(0);
                A.length = 0;
                for (var j = 0; j < L.length; j++)
                  if (!L[j].cancelled)
                    try {
                      L[j].callback(S);
                    } catch (W) {
                      setTimeout(function () {
                        throw W;
                      }, 0);
                    }
              }, Math.round(D));
          }
          return A.push({ handle: ++C, callback: P, cancelled: !1 }), C;
        }),
          (O = function (P) {
            for (var w = 0; w < A.length; w++) A[w].handle === P && (A[w].cancelled = !0);
          });
      }
      (p.exports = function (P) {
        return m.call(v, P);
      }),
        (p.exports.cancel = function () {
          O.apply(v, arguments);
        }),
        (p.exports.polyfill = function (P) {
          P || (P = v), (P.requestAnimationFrame = m), (P.cancelAnimationFrame = O);
        });
    },
    7886: (p) => {
      p.exports = function (T) {
        (this.ok = !1),
          (this.alpha = 1),
          '#' == T.charAt(0) && (T = T.substr(1, 6)),
          (T = (T = T.replace(/ /g, '')).toLowerCase());
        var a = {
          aliceblue: 'f0f8ff',
          antiquewhite: 'faebd7',
          aqua: '00ffff',
          aquamarine: '7fffd4',
          azure: 'f0ffff',
          beige: 'f5f5dc',
          bisque: 'ffe4c4',
          black: '000000',
          blanchedalmond: 'ffebcd',
          blue: '0000ff',
          blueviolet: '8a2be2',
          brown: 'a52a2a',
          burlywood: 'deb887',
          cadetblue: '5f9ea0',
          chartreuse: '7fff00',
          chocolate: 'd2691e',
          coral: 'ff7f50',
          cornflowerblue: '6495ed',
          cornsilk: 'fff8dc',
          crimson: 'dc143c',
          cyan: '00ffff',
          darkblue: '00008b',
          darkcyan: '008b8b',
          darkgoldenrod: 'b8860b',
          darkgray: 'a9a9a9',
          darkgreen: '006400',
          darkkhaki: 'bdb76b',
          darkmagenta: '8b008b',
          darkolivegreen: '556b2f',
          darkorange: 'ff8c00',
          darkorchid: '9932cc',
          darkred: '8b0000',
          darksalmon: 'e9967a',
          darkseagreen: '8fbc8f',
          darkslateblue: '483d8b',
          darkslategray: '2f4f4f',
          darkturquoise: '00ced1',
          darkviolet: '9400d3',
          deeppink: 'ff1493',
          deepskyblue: '00bfff',
          dimgray: '696969',
          dodgerblue: '1e90ff',
          feldspar: 'd19275',
          firebrick: 'b22222',
          floralwhite: 'fffaf0',
          forestgreen: '228b22',
          fuchsia: 'ff00ff',
          gainsboro: 'dcdcdc',
          ghostwhite: 'f8f8ff',
          gold: 'ffd700',
          goldenrod: 'daa520',
          gray: '808080',
          green: '008000',
          greenyellow: 'adff2f',
          honeydew: 'f0fff0',
          hotpink: 'ff69b4',
          indianred: 'cd5c5c',
          indigo: '4b0082',
          ivory: 'fffff0',
          khaki: 'f0e68c',
          lavender: 'e6e6fa',
          lavenderblush: 'fff0f5',
          lawngreen: '7cfc00',
          lemonchiffon: 'fffacd',
          lightblue: 'add8e6',
          lightcoral: 'f08080',
          lightcyan: 'e0ffff',
          lightgoldenrodyellow: 'fafad2',
          lightgrey: 'd3d3d3',
          lightgreen: '90ee90',
          lightpink: 'ffb6c1',
          lightsalmon: 'ffa07a',
          lightseagreen: '20b2aa',
          lightskyblue: '87cefa',
          lightslateblue: '8470ff',
          lightslategray: '778899',
          lightsteelblue: 'b0c4de',
          lightyellow: 'ffffe0',
          lime: '00ff00',
          limegreen: '32cd32',
          linen: 'faf0e6',
          magenta: 'ff00ff',
          maroon: '800000',
          mediumaquamarine: '66cdaa',
          mediumblue: '0000cd',
          mediumorchid: 'ba55d3',
          mediumpurple: '9370d8',
          mediumseagreen: '3cb371',
          mediumslateblue: '7b68ee',
          mediumspringgreen: '00fa9a',
          mediumturquoise: '48d1cc',
          mediumvioletred: 'c71585',
          midnightblue: '191970',
          mintcream: 'f5fffa',
          mistyrose: 'ffe4e1',
          moccasin: 'ffe4b5',
          navajowhite: 'ffdead',
          navy: '000080',
          oldlace: 'fdf5e6',
          olive: '808000',
          olivedrab: '6b8e23',
          orange: 'ffa500',
          orangered: 'ff4500',
          orchid: 'da70d6',
          palegoldenrod: 'eee8aa',
          palegreen: '98fb98',
          paleturquoise: 'afeeee',
          palevioletred: 'd87093',
          papayawhip: 'ffefd5',
          peachpuff: 'ffdab9',
          peru: 'cd853f',
          pink: 'ffc0cb',
          plum: 'dda0dd',
          powderblue: 'b0e0e6',
          purple: '800080',
          rebeccapurple: '663399',
          red: 'ff0000',
          rosybrown: 'bc8f8f',
          royalblue: '4169e1',
          saddlebrown: '8b4513',
          salmon: 'fa8072',
          sandybrown: 'f4a460',
          seagreen: '2e8b57',
          seashell: 'fff5ee',
          sienna: 'a0522d',
          silver: 'c0c0c0',
          skyblue: '87ceeb',
          slateblue: '6a5acd',
          slategray: '708090',
          snow: 'fffafa',
          springgreen: '00ff7f',
          steelblue: '4682b4',
          tan: 'd2b48c',
          teal: '008080',
          thistle: 'd8bfd8',
          tomato: 'ff6347',
          turquoise: '40e0d0',
          violet: 'ee82ee',
          violetred: 'd02090',
          wheat: 'f5deb3',
          white: 'ffffff',
          whitesmoke: 'f5f5f5',
          yellow: 'ffff00',
          yellowgreen: '9acd32',
        };
        T = a[T] || T;
        for (
          var f = [
              {
                re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
                example: ['rgba(123, 234, 45, 0.8)', 'rgba(255,234,245,1.0)'],
                process: function (E) {
                  return [parseInt(E[1]), parseInt(E[2]), parseInt(E[3]), parseFloat(E[4])];
                },
              },
              {
                re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
                example: ['rgb(123, 234, 45)', 'rgb(255,234,245)'],
                process: function (E) {
                  return [parseInt(E[1]), parseInt(E[2]), parseInt(E[3])];
                },
              },
              {
                re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                example: ['#00ff00', '336699'],
                process: function (E) {
                  return [parseInt(E[1], 16), parseInt(E[2], 16), parseInt(E[3], 16)];
                },
              },
              {
                re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                example: ['#fb0', 'f0f'],
                process: function (E) {
                  return [
                    parseInt(E[1] + E[1], 16),
                    parseInt(E[2] + E[2], 16),
                    parseInt(E[3] + E[3], 16),
                  ];
                },
              },
            ],
            v = 0;
          v < f.length;
          v++
        ) {
          var d = f[v].process,
            m = f[v].re.exec(T);
          if (m) {
            var O = d(m);
            (this.r = O[0]),
              (this.g = O[1]),
              (this.b = O[2]),
              O.length > 3 && (this.alpha = O[3]),
              (this.ok = !0);
          }
        }
        (this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r),
          (this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g),
          (this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b),
          (this.alpha = this.alpha < 0 ? 0 : this.alpha > 1 || isNaN(this.alpha) ? 1 : this.alpha),
          (this.toRGB = function () {
            return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
          }),
          (this.toRGBA = function () {
            return 'rgba(' + this.r + ', ' + this.g + ', ' + this.b + ', ' + this.alpha + ')';
          }),
          (this.toHex = function () {
            var E = this.r.toString(16),
              S = this.g.toString(16),
              C = this.b.toString(16);
            return (
              1 == E.length && (E = '0' + E),
              1 == S.length && (S = '0' + S),
              1 == C.length && (C = '0' + C),
              '#' + E + S + C
            );
          }),
          (this.getHelpXML = function () {
            for (var E = new Array(), S = 0; S < f.length; S++)
              for (var C = f[S].example, A = 0; A < C.length; A++) E[E.length] = C[A];
            for (var N in a) E[E.length] = N;
            var P = document.createElement('ul');
            for (P.setAttribute('id', 'rgbcolor-examples'), S = 0; S < E.length; S++)
              try {
                var w = document.createElement('li'),
                  D = new RGBColor(E[S]),
                  L = document.createElement('div');
                (L.style.cssText =
                  'margin: 3px; border: 1px solid black; background:' +
                  D.toHex() +
                  '; color:' +
                  D.toHex()),
                  L.appendChild(document.createTextNode('test'));
                var j = document.createTextNode(
                  ' ' + E[S] + ' -> ' + D.toRGB() + ' -> ' + D.toHex(),
                );
                w.appendChild(L), w.appendChild(j), P.appendChild(w);
              } catch (Y) {}
            return P;
          });
      };
    },
    7340: (p, T, a) => {
      var f = a(1864),
        v = a(5591),
        c = a(802),
        d = f.TypeError;
      p.exports = function (m) {
        if (v(m)) return m;
        throw d(c(m) + ' is not a function');
      };
    },
    3454: (p, T, a) => {
      var f = a(1864),
        v = a(7995),
        c = a(802),
        d = f.TypeError;
      p.exports = function (m) {
        if (v(m)) return m;
        throw d(c(m) + ' is not a constructor');
      };
    },
    5143: (p, T, a) => {
      var f = a(1864),
        v = a(5591),
        c = f.String,
        d = f.TypeError;
      p.exports = function (m) {
        if ('object' == typeof m || v(m)) return m;
        throw d("Can't set " + c(m) + ' as a prototype');
      };
    },
    4094: (p, T, a) => {
      var f = a(4563),
        v = a(8724),
        c = a(2975),
        d = f('unscopables'),
        m = Array.prototype;
      null == m[d] && c.f(m, d, { configurable: !0, value: v(null) }),
        (p.exports = function (O) {
          m[d][O] = !0;
        });
    },
    7678: (p, T, a) => {
      'use strict';
      var f = a(4487).charAt;
      p.exports = function (v, c, d) {
        return c + (d ? f(v, c).length : 1);
      };
    },
    6063: (p, T, a) => {
      var f = a(1864),
        v = a(3290),
        c = f.TypeError;
      p.exports = function (d, m) {
        if (v(m, d)) return d;
        throw c('Incorrect invocation');
      };
    },
    1099: (p, T, a) => {
      var f = a(1864),
        v = a(726),
        c = f.String,
        d = f.TypeError;
      p.exports = function (m) {
        if (v(m)) return m;
        throw d(c(m) + ' is not an object');
      };
    },
    452: (p, T, a) => {
      var f = a(8643),
        v = a(222),
        c = a(4196),
        d = function (m) {
          return function (O, E, S) {
            var P,
              C = f(O),
              A = c(C),
              N = v(S, A);
            if (m && E != E) {
              for (; A > N; ) if ((P = C[N++]) != P) return !0;
            } else for (; A > N; N++) if ((m || N in C) && C[N] === E) return m || N || 0;
            return !m && -1;
          };
        };
      p.exports = { includes: d(!0), indexOf: d(!1) };
    },
    7051: (p, T, a) => {
      'use strict';
      var f = a(8597);
      p.exports = function (v, c) {
        var d = [][v];
        return (
          !!d &&
          f(function () {
            d.call(
              null,
              c ||
                function () {
                  throw 1;
                },
              1,
            );
          })
        );
      };
    },
    4716: (p, T, a) => {
      var f = a(1864),
        v = a(7340),
        c = a(6174),
        d = a(6169),
        m = a(4196),
        O = f.TypeError,
        E = function (S) {
          return function (C, A, N, P) {
            v(A);
            var w = c(C),
              D = d(w),
              L = m(w),
              j = S ? L - 1 : 0,
              W = S ? -1 : 1;
            if (N < 2)
              for (;;) {
                if (j in D) {
                  (P = D[j]), (j += W);
                  break;
                }
                if (((j += W), S ? j < 0 : L <= j))
                  throw O('Reduce of empty array with no initial value');
              }
            for (; S ? j >= 0 : L > j; j += W) j in D && (P = A(P, D[j], j, w));
            return P;
          };
        };
      p.exports = { left: E(!1), right: E(!0) };
    },
    1346: (p, T, a) => {
      var f = a(7964);
      p.exports = f([].slice);
    },
    6297: (p, T, a) => {
      var v = a(4563)('iterator'),
        c = !1;
      try {
        var d = 0,
          m = {
            next: function () {
              return { done: !!d++ };
            },
            return: function () {
              c = !0;
            },
          };
        (m[v] = function () {
          return this;
        }),
          Array.from(m, function () {
            throw 2;
          });
      } catch (O) {}
      p.exports = function (O, E) {
        if (!E && !c) return !1;
        var S = !1;
        try {
          var C = {};
          (C[v] = function () {
            return {
              next: function () {
                return { done: (S = !0) };
              },
            };
          }),
            O(C);
        } catch (A) {}
        return S;
      };
    },
    6644: (p, T, a) => {
      var f = a(7964),
        v = f({}.toString),
        c = f(''.slice);
      p.exports = function (d) {
        return c(v(d), 8, -1);
      };
    },
    9420: (p, T, a) => {
      var f = a(1864),
        v = a(2900),
        c = a(5591),
        d = a(6644),
        O = a(4563)('toStringTag'),
        E = f.Object,
        S =
          'Arguments' ==
          d(
            (function () {
              return arguments;
            })(),
          );
      p.exports = v
        ? d
        : function (A) {
            var N, P, w;
            return void 0 === A
              ? 'Undefined'
              : null === A
              ? 'Null'
              : 'string' ==
                typeof (P = (function (A, N) {
                  try {
                    return A[N];
                  } catch (P) {}
                })((N = E(A)), O))
              ? P
              : S
              ? d(N)
              : 'Object' == (w = d(N)) && c(N.callee)
              ? 'Arguments'
              : w;
          };
    },
    9: (p, T, a) => {
      var f = a(2445),
        v = a(9376),
        c = a(3099),
        d = a(2975);
      p.exports = function (m, O) {
        for (var E = v(O), S = d.f, C = c.f, A = 0; A < E.length; A++) {
          var N = E[A];
          f(m, N) || S(m, N, C(O, N));
        }
      };
    },
    363: (p, T, a) => {
      var v = a(4563)('match');
      p.exports = function (c) {
        var d = /./;
        try {
          '/./'[c](d);
        } catch (m) {
          try {
            return (d[v] = !1), '/./'[c](d);
          } catch (O) {}
        }
        return !1;
      };
    },
    1335: (p, T, a) => {
      var f = a(8597);
      p.exports = !f(function () {
        function v() {}
        return (v.prototype.constructor = null), Object.getPrototypeOf(new v()) !== v.prototype;
      });
    },
    7453: (p, T, a) => {
      'use strict';
      var f = a(2053).IteratorPrototype,
        v = a(8724),
        c = a(7053),
        d = a(8242),
        m = a(2339),
        O = function () {
          return this;
        };
      p.exports = function (E, S, C) {
        var A = S + ' Iterator';
        return (E.prototype = v(f, { next: c(1, C) })), d(E, A, !1, !0), (m[A] = O), E;
      };
    },
    815: (p, T, a) => {
      var f = a(7012),
        v = a(2975),
        c = a(7053);
      p.exports = f
        ? function (d, m, O) {
            return v.f(d, m, c(1, O));
          }
        : function (d, m, O) {
            return (d[m] = O), d;
          };
    },
    7053: (p) => {
      p.exports = function (T, a) {
        return { enumerable: !(1 & T), configurable: !(2 & T), writable: !(4 & T), value: a };
      };
    },
    6038: (p, T, a) => {
      'use strict';
      var f = a(1163),
        v = a(757),
        c = a(7515),
        d = a(538),
        m = a(5591),
        O = a(7453),
        E = a(3963),
        S = a(1464),
        C = a(8242),
        A = a(815),
        N = a(7763),
        P = a(4563),
        w = a(2339),
        D = a(2053),
        L = d.PROPER,
        j = d.CONFIGURABLE,
        W = D.IteratorPrototype,
        Y = D.BUGGY_SAFARI_ITERATORS,
        U = P('iterator'),
        K = 'keys',
        J = 'values',
        nt = 'entries',
        H = function () {
          return this;
        };
      p.exports = function ($, ct, dt, et, lt, xt, tt) {
        O(dt, ct, et);
        var R,
          Pt,
          Nt,
          Z = function (vt) {
            if (vt === lt && Et) return Et;
            if (!Y && vt in st) return st[vt];
            switch (vt) {
              case K:
              case J:
              case nt:
                return function () {
                  return new dt(this, vt);
                };
            }
            return function () {
              return new dt(this);
            };
          },
          _ = ct + ' Iterator',
          k = !1,
          st = $.prototype,
          bt = st[U] || st['@@iterator'] || (lt && st[lt]),
          Et = (!Y && bt) || Z(lt),
          Tt = ('Array' == ct && st.entries) || bt;
        if (
          (Tt &&
            (R = E(Tt.call(new $()))) !== Object.prototype &&
            R.next &&
            (!c && E(R) !== W && (S ? S(R, W) : m(R[U]) || N(R, U, H)),
            C(R, _, !0, !0),
            c && (w[_] = H)),
          L &&
            lt == J &&
            bt &&
            bt.name !== J &&
            (!c && j
              ? A(st, 'name', J)
              : ((k = !0),
                (Et = function () {
                  return v(bt, this);
                }))),
          lt)
        )
          if (((Pt = { values: Z(J), keys: xt ? Et : Z(K), entries: Z(nt) }), tt))
            for (Nt in Pt) (Y || k || !(Nt in st)) && N(st, Nt, Pt[Nt]);
          else f({ target: ct, proto: !0, forced: Y || k }, Pt);
        return (!c || tt) && st[U] !== Et && N(st, U, Et, { name: lt }), (w[ct] = Et), Pt;
      };
    },
    7012: (p, T, a) => {
      var f = a(8597);
      p.exports = !f(function () {
        return (
          7 !=
          Object.defineProperty({}, 1, {
            get: function () {
              return 7;
            },
          })[1]
        );
      });
    },
    5815: (p, T, a) => {
      var f = a(1864),
        v = a(726),
        c = f.document,
        d = v(c) && v(c.createElement);
      p.exports = function (m) {
        return d ? c.createElement(m) : {};
      };
    },
    6877: (p) => {
      p.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0,
      };
    },
    713: (p, T, a) => {
      var v = a(5815)('span').classList,
        c = v && v.constructor && v.constructor.prototype;
      p.exports = c === Object.prototype ? void 0 : c;
    },
    2846: (p) => {
      p.exports = 'object' == typeof window;
    },
    7178: (p, T, a) => {
      var f = a(3792),
        v = a(1864);
      p.exports = /ipad|iphone|ipod/i.test(f) && void 0 !== v.Pebble;
    },
    586: (p, T, a) => {
      var f = a(3792);
      p.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(f);
    },
    2002: (p, T, a) => {
      var f = a(6644),
        v = a(1864);
      p.exports = 'process' == f(v.process);
    },
    6607: (p, T, a) => {
      var f = a(3792);
      p.exports = /web0s(?!.*chrome)/i.test(f);
    },
    3792: (p, T, a) => {
      var f = a(3626);
      p.exports = f('navigator', 'userAgent') || '';
    },
    7189: (p, T, a) => {
      var E,
        S,
        f = a(1864),
        v = a(3792),
        c = f.process,
        d = f.Deno,
        m = (c && c.versions) || (d && d.version),
        O = m && m.v8;
      O && (S = (E = O.split('.'))[0] > 0 && E[0] < 4 ? 1 : +(E[0] + E[1])),
        !S &&
          v &&
          (!(E = v.match(/Edge\/(\d+)/)) || E[1] >= 74) &&
          (E = v.match(/Chrome\/(\d+)/)) &&
          (S = +E[1]),
        (p.exports = S);
    },
    1001: (p) => {
      p.exports = [
        'constructor',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'toLocaleString',
        'toString',
        'valueOf',
      ];
    },
    1163: (p, T, a) => {
      var f = a(1864),
        v = a(3099).f,
        c = a(815),
        d = a(7763),
        m = a(2341),
        O = a(9),
        E = a(7215);
      p.exports = function (S, C) {
        var D,
          L,
          j,
          W,
          Y,
          A = S.target,
          N = S.global,
          P = S.stat;
        if ((D = N ? f : P ? f[A] || m(A, {}) : (f[A] || {}).prototype))
          for (L in C) {
            if (
              ((W = C[L]),
              (j = S.noTargetGet ? (Y = v(D, L)) && Y.value : D[L]),
              !E(N ? L : A + (P ? '.' : '#') + L, S.forced) && void 0 !== j)
            ) {
              if (typeof W == typeof j) continue;
              O(W, j);
            }
            (S.sham || (j && j.sham)) && c(W, 'sham', !0), d(D, L, W, S);
          }
      };
    },
    8597: (p) => {
      p.exports = function (T) {
        try {
          return !!T();
        } catch (a) {
          return !0;
        }
      };
    },
    9357: (p, T, a) => {
      'use strict';
      a(9665);
      var f = a(7964),
        v = a(7763),
        c = a(3084),
        d = a(8597),
        m = a(4563),
        O = a(815),
        E = m('species'),
        S = RegExp.prototype;
      p.exports = function (C, A, N, P) {
        var w = m(C),
          D = !d(function () {
            var Y = {};
            return (
              (Y[w] = function () {
                return 7;
              }),
              7 != ''[C](Y)
            );
          }),
          L =
            D &&
            !d(function () {
              var Y = !1,
                U = /a/;
              return (
                'split' === C &&
                  (((U = {}).constructor = {}),
                  (U.constructor[E] = function () {
                    return U;
                  }),
                  (U.flags = ''),
                  (U[w] = /./[w])),
                (U.exec = function () {
                  return (Y = !0), null;
                }),
                U[w](''),
                !Y
              );
            });
        if (!D || !L || N) {
          var j = f(/./[w]),
            W = A(w, ''[C], function (Y, U, K, J, nt) {
              var H = f(Y),
                $ = U.exec;
              return $ === c || $ === S.exec
                ? D && !nt
                  ? { done: !0, value: j(U, K, J) }
                  : { done: !0, value: H(K, U, J) }
                : { done: !1 };
            });
          v(String.prototype, C, W[0]), v(S, w, W[1]);
        }
        P && O(S[w], 'sham', !0);
      };
    },
    2328: (p) => {
      var T = Function.prototype,
        a = T.apply,
        v = T.call;
      p.exports =
        ('object' == typeof Reflect && Reflect.apply) ||
        (T.bind
          ? v.bind(a)
          : function () {
              return v.apply(a, arguments);
            });
    },
    9727: (p, T, a) => {
      var f = a(7964),
        v = a(7340),
        c = f(f.bind);
      p.exports = function (d, m) {
        return (
          v(d),
          void 0 === m
            ? d
            : c
            ? c(d, m)
            : function () {
                return d.apply(m, arguments);
              }
        );
      };
    },
    757: (p) => {
      var T = Function.prototype.call;
      p.exports = T.bind
        ? T.bind(T)
        : function () {
            return T.apply(T, arguments);
          };
    },
    538: (p, T, a) => {
      var f = a(7012),
        v = a(2445),
        c = Function.prototype,
        d = f && Object.getOwnPropertyDescriptor,
        m = v(c, 'name'),
        O = m && 'something' === function () {}.name,
        E = m && (!f || (f && d(c, 'name').configurable));
      p.exports = { EXISTS: m, PROPER: O, CONFIGURABLE: E };
    },
    7964: (p) => {
      var T = Function.prototype,
        a = T.bind,
        f = T.call,
        v = a && a.bind(f);
      p.exports = a
        ? function (c) {
            return c && v(f, c);
          }
        : function (c) {
            return (
              c &&
              function () {
                return f.apply(c, arguments);
              }
            );
          };
    },
    3626: (p, T, a) => {
      var f = a(1864),
        v = a(5591),
        c = function (d) {
          return v(d) ? d : void 0;
        };
      p.exports = function (d, m) {
        return arguments.length < 2 ? c(f[d]) : f[d] && f[d][m];
      };
    },
    3076: (p, T, a) => {
      var f = a(9420),
        v = a(5642),
        c = a(2339),
        m = a(4563)('iterator');
      p.exports = function (O) {
        if (null != O) return v(O, m) || v(O, '@@iterator') || c[f(O)];
      };
    },
    6414: (p, T, a) => {
      var f = a(1864),
        v = a(757),
        c = a(7340),
        d = a(1099),
        m = a(802),
        O = a(3076),
        E = f.TypeError;
      p.exports = function (S, C) {
        var A = arguments.length < 2 ? O(S) : C;
        if (c(A)) return d(v(A, S));
        throw E(m(S) + ' is not iterable');
      };
    },
    5642: (p, T, a) => {
      var f = a(7340);
      p.exports = function (v, c) {
        var d = v[c];
        return null == d ? void 0 : f(d);
      };
    },
    6162: (p, T, a) => {
      var f = a(7964),
        v = a(6174),
        c = Math.floor,
        d = f(''.charAt),
        m = f(''.replace),
        O = f(''.slice),
        E = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        S = /\$([$&'`]|\d{1,2})/g;
      p.exports = function (C, A, N, P, w, D) {
        var L = N + C.length,
          j = P.length,
          W = S;
        return (
          void 0 !== w && ((w = v(w)), (W = E)),
          m(D, W, function (Y, U) {
            var K;
            switch (d(U, 0)) {
              case '$':
                return '$';
              case '&':
                return C;
              case '`':
                return O(A, 0, N);
              case "'":
                return O(A, L);
              case '<':
                K = w[O(U, 1, -1)];
                break;
              default:
                var J = +U;
                if (0 === J) return Y;
                if (J > j) {
                  var nt = c(J / 10);
                  return 0 === nt
                    ? Y
                    : nt <= j
                    ? void 0 === P[nt - 1]
                      ? d(U, 1)
                      : P[nt - 1] + d(U, 1)
                    : Y;
                }
                K = P[J - 1];
            }
            return void 0 === K ? '' : K;
          })
        );
      };
    },
    1864: (p) => {
      var T = function (a) {
        return a && a.Math == Math && a;
      };
      p.exports =
        T('object' == typeof globalThis && globalThis) ||
        T('object' == typeof window && window) ||
        T('object' == typeof self && self) ||
        T('object' == typeof global && global) ||
        (function () {
          return this;
        })() ||
        Function('return this')();
    },
    2445: (p, T, a) => {
      var f = a(7964),
        v = a(6174),
        c = f({}.hasOwnProperty);
      p.exports =
        Object.hasOwn ||
        function (m, O) {
          return c(v(m), O);
        };
    },
    3536: (p) => {
      p.exports = {};
    },
    9989: (p, T, a) => {
      var f = a(1864);
      p.exports = function (v, c) {
        var d = f.console;
        d && d.error && (1 == arguments.length ? d.error(v) : d.error(v, c));
      };
    },
    7538: (p, T, a) => {
      var f = a(3626);
      p.exports = f('document', 'documentElement');
    },
    7091: (p, T, a) => {
      var f = a(7012),
        v = a(8597),
        c = a(5815);
      p.exports =
        !f &&
        !v(function () {
          return (
            7 !=
            Object.defineProperty(c('div'), 'a', {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    },
    6169: (p, T, a) => {
      var f = a(1864),
        v = a(7964),
        c = a(8597),
        d = a(6644),
        m = f.Object,
        O = v(''.split);
      p.exports = c(function () {
        return !m('z').propertyIsEnumerable(0);
      })
        ? function (E) {
            return 'String' == d(E) ? O(E, '') : m(E);
          }
        : m;
    },
    7720: (p, T, a) => {
      var f = a(7964),
        v = a(5591),
        c = a(9941),
        d = f(Function.toString);
      v(c.inspectSource) ||
        (c.inspectSource = function (m) {
          return d(m);
        }),
        (p.exports = c.inspectSource);
    },
    2493: (p, T, a) => {
      var w,
        D,
        L,
        f = a(1635),
        v = a(1864),
        c = a(7964),
        d = a(726),
        m = a(815),
        O = a(2445),
        E = a(9941),
        S = a(2650),
        C = a(3536),
        A = 'Object already initialized',
        N = v.TypeError;
      if (f || E.state) {
        var Y = E.state || (E.state = new (0, v.WeakMap)()),
          U = c(Y.get),
          K = c(Y.has),
          J = c(Y.set);
        (w = function (H, $) {
          if (K(Y, H)) throw new N(A);
          return ($.facade = H), J(Y, H, $), $;
        }),
          (D = function (H) {
            return U(Y, H) || {};
          }),
          (L = function (H) {
            return K(Y, H);
          });
      } else {
        var nt = S('state');
        (C[nt] = !0),
          (w = function (H, $) {
            if (O(H, nt)) throw new N(A);
            return ($.facade = H), m(H, nt, $), $;
          }),
          (D = function (H) {
            return O(H, nt) ? H[nt] : {};
          }),
          (L = function (H) {
            return O(H, nt);
          });
      }
      p.exports = {
        set: w,
        get: D,
        has: L,
        enforce: function (H) {
          return L(H) ? D(H) : w(H, {});
        },
        getterFor: function (H) {
          return function ($) {
            var ct;
            if (!d($) || (ct = D($)).type !== H)
              throw N('Incompatible receiver, ' + H + ' required');
            return ct;
          };
        },
      };
    },
    1643: (p, T, a) => {
      var f = a(4563),
        v = a(2339),
        c = f('iterator'),
        d = Array.prototype;
      p.exports = function (m) {
        return void 0 !== m && (v.Array === m || d[c] === m);
      };
    },
    9448: (p, T, a) => {
      var f = a(6644);
      p.exports =
        Array.isArray ||
        function (c) {
          return 'Array' == f(c);
        };
    },
    5591: (p) => {
      p.exports = function (T) {
        return 'function' == typeof T;
      };
    },
    7995: (p, T, a) => {
      var f = a(7964),
        v = a(8597),
        c = a(5591),
        d = a(9420),
        m = a(3626),
        O = a(7720),
        E = function () {},
        S = [],
        C = m('Reflect', 'construct'),
        A = /^\s*(?:class|function)\b/,
        N = f(A.exec),
        P = !A.exec(E),
        w = function (L) {
          if (!c(L)) return !1;
          try {
            return C(E, S, L), !0;
          } catch (j) {
            return !1;
          }
        };
      p.exports =
        !C ||
        v(function () {
          var L;
          return (
            w(w.call) ||
            !w(Object) ||
            !w(function () {
              L = !0;
            }) ||
            L
          );
        })
          ? function (L) {
              if (!c(L)) return !1;
              switch (d(L)) {
                case 'AsyncFunction':
                case 'GeneratorFunction':
                case 'AsyncGeneratorFunction':
                  return !1;
              }
              return P || !!N(A, O(L));
            }
          : w;
    },
    7215: (p, T, a) => {
      var f = a(8597),
        v = a(5591),
        c = /#|\.prototype\./,
        d = function (C, A) {
          var N = O[m(C)];
          return N == S || (N != E && (v(A) ? f(A) : !!A));
        },
        m = (d.normalize = function (C) {
          return String(C).replace(c, '.').toLowerCase();
        }),
        O = (d.data = {}),
        E = (d.NATIVE = 'N'),
        S = (d.POLYFILL = 'P');
      p.exports = d;
    },
    726: (p, T, a) => {
      var f = a(5591);
      p.exports = function (v) {
        return 'object' == typeof v ? null !== v : f(v);
      };
    },
    7515: (p) => {
      p.exports = !1;
    },
    9482: (p, T, a) => {
      var f = a(726),
        v = a(6644),
        d = a(4563)('match');
      p.exports = function (m) {
        var O;
        return f(m) && (void 0 !== (O = m[d]) ? !!O : 'RegExp' == v(m));
      };
    },
    6186: (p, T, a) => {
      var f = a(1864),
        v = a(3626),
        c = a(5591),
        d = a(3290),
        m = a(4431),
        O = f.Object;
      p.exports = m
        ? function (E) {
            return 'symbol' == typeof E;
          }
        : function (E) {
            var S = v('Symbol');
            return c(S) && d(S.prototype, O(E));
          };
    },
    3284: (p, T, a) => {
      var f = a(1864),
        v = a(9727),
        c = a(757),
        d = a(1099),
        m = a(802),
        O = a(1643),
        E = a(4196),
        S = a(3290),
        C = a(6414),
        A = a(3076),
        N = a(7883),
        P = f.TypeError,
        w = function (L, j) {
          (this.stopped = L), (this.result = j);
        },
        D = w.prototype;
      p.exports = function (L, j, W) {
        var H,
          $,
          ct,
          dt,
          et,
          lt,
          xt,
          U = !(!W || !W.AS_ENTRIES),
          K = !(!W || !W.IS_ITERATOR),
          J = !(!W || !W.INTERRUPTED),
          nt = v(j, W && W.that),
          tt = function (_) {
            return H && N(H, 'normal', _), new w(!0, _);
          },
          Z = function (_) {
            return U ? (d(_), J ? nt(_[0], _[1], tt) : nt(_[0], _[1])) : J ? nt(_, tt) : nt(_);
          };
        if (K) H = L;
        else {
          if (!($ = A(L))) throw P(m(L) + ' is not iterable');
          if (O($)) {
            for (ct = 0, dt = E(L); dt > ct; ct++) if ((et = Z(L[ct])) && S(D, et)) return et;
            return new w(!1);
          }
          H = C(L, $);
        }
        for (lt = H.next; !(xt = c(lt, H)).done; ) {
          try {
            et = Z(xt.value);
          } catch (_) {
            N(H, 'throw', _);
          }
          if ('object' == typeof et && et && S(D, et)) return et;
        }
        return new w(!1);
      };
    },
    7883: (p, T, a) => {
      var f = a(757),
        v = a(1099),
        c = a(5642);
      p.exports = function (d, m, O) {
        var E, S;
        v(d);
        try {
          if (!(E = c(d, 'return'))) {
            if ('throw' === m) throw O;
            return O;
          }
          E = f(E, d);
        } catch (C) {
          (S = !0), (E = C);
        }
        if ('throw' === m) throw O;
        if (S) throw E;
        return v(E), O;
      };
    },
    2053: (p, T, a) => {
      'use strict';
      var A,
        N,
        P,
        f = a(8597),
        v = a(5591),
        c = a(8724),
        d = a(3963),
        m = a(7763),
        O = a(4563),
        E = a(7515),
        S = O('iterator'),
        C = !1;
      [].keys &&
        ('next' in (P = [].keys()) ? (N = d(d(P))) !== Object.prototype && (A = N) : (C = !0)),
        null == A ||
        f(function () {
          var D = {};
          return A[S].call(D) !== D;
        })
          ? (A = {})
          : E && (A = c(A)),
        v(A[S]) ||
          m(A, S, function () {
            return this;
          }),
        (p.exports = { IteratorPrototype: A, BUGGY_SAFARI_ITERATORS: C });
    },
    2339: (p) => {
      p.exports = {};
    },
    4196: (p, T, a) => {
      var f = a(5902);
      p.exports = function (v) {
        return f(v.length);
      };
    },
    1463: (p, T, a) => {
      var L,
        j,
        W,
        Y,
        U,
        K,
        J,
        nt,
        f = a(1864),
        v = a(9727),
        c = a(3099).f,
        d = a(2040).set,
        m = a(586),
        O = a(7178),
        E = a(6607),
        S = a(2002),
        C = f.MutationObserver || f.WebKitMutationObserver,
        A = f.document,
        N = f.process,
        P = f.Promise,
        w = c(f, 'queueMicrotask'),
        D = w && w.value;
      D ||
        ((L = function () {
          var H, $;
          for (S && (H = N.domain) && H.exit(); j; ) {
            ($ = j.fn), (j = j.next);
            try {
              $();
            } catch (ct) {
              throw (j ? Y() : (W = void 0), ct);
            }
          }
          (W = void 0), H && H.enter();
        }),
        m || S || E || !C || !A
          ? !O && P && P.resolve
            ? (((J = P.resolve(void 0)).constructor = P),
              (nt = v(J.then, J)),
              (Y = function () {
                nt(L);
              }))
            : S
            ? (Y = function () {
                N.nextTick(L);
              })
            : ((d = v(d, f)),
              (Y = function () {
                d(L);
              }))
          : ((U = !0),
            (K = A.createTextNode('')),
            new C(L).observe(K, { characterData: !0 }),
            (Y = function () {
              K.data = U = !U;
            }))),
        (p.exports =
          D ||
          function (H) {
            var $ = { fn: H, next: void 0 };
            W && (W.next = $), j || ((j = $), Y()), (W = $);
          });
    },
    6866: (p, T, a) => {
      var f = a(1864);
      p.exports = f.Promise;
    },
    7040: (p, T, a) => {
      var f = a(7189),
        v = a(8597);
      p.exports =
        !!Object.getOwnPropertySymbols &&
        !v(function () {
          var c = Symbol();
          return !String(c) || !(Object(c) instanceof Symbol) || (!Symbol.sham && f && f < 41);
        });
    },
    1635: (p, T, a) => {
      var f = a(1864),
        v = a(5591),
        c = a(7720),
        d = f.WeakMap;
      p.exports = v(d) && /native code/.test(c(d));
    },
    9723: (p, T, a) => {
      'use strict';
      var f = a(7340),
        v = function (c) {
          var d, m;
          (this.promise = new c(function (O, E) {
            if (void 0 !== d || void 0 !== m) throw TypeError('Bad Promise constructor');
            (d = O), (m = E);
          })),
            (this.resolve = f(d)),
            (this.reject = f(m));
        };
      p.exports.f = function (c) {
        return new v(c);
      };
    },
    3270: (p, T, a) => {
      var f = a(1864),
        v = a(9482),
        c = f.TypeError;
      p.exports = function (d) {
        if (v(d)) throw c("The method doesn't accept regular expressions");
        return d;
      };
    },
    8724: (p, T, a) => {
      var W,
        f = a(1099),
        v = a(988),
        c = a(1001),
        d = a(3536),
        m = a(7538),
        O = a(5815),
        E = a(2650),
        A = 'prototype',
        N = 'script',
        P = E('IE_PROTO'),
        w = function () {},
        D = function (U) {
          return '<' + N + '>' + U + '</' + N + '>';
        },
        L = function (U) {
          U.write(D('')), U.close();
          var K = U.parentWindow.Object;
          return (U = null), K;
        },
        Y = function () {
          try {
            W = new ActiveXObject('htmlfile');
          } catch (K) {}
          Y =
            'undefined' != typeof document
              ? document.domain && W
                ? L(W)
                : (function () {
                    var J,
                      U = O('iframe');
                    return (
                      (U.style.display = 'none'),
                      m.appendChild(U),
                      (U.src = String('javascript:')),
                      (J = U.contentWindow.document).open(),
                      J.write(D('document.F=Object')),
                      J.close(),
                      J.F
                    );
                  })()
              : L(W);
          for (var U = c.length; U--; ) delete Y[A][c[U]];
          return Y();
        };
      (d[P] = !0),
        (p.exports =
          Object.create ||
          function (K, J) {
            var nt;
            return (
              null !== K ? ((w[A] = f(K)), (nt = new w()), (w[A] = null), (nt[P] = K)) : (nt = Y()),
              void 0 === J ? nt : v(nt, J)
            );
          });
    },
    988: (p, T, a) => {
      var f = a(7012),
        v = a(2975),
        c = a(1099),
        d = a(8643),
        m = a(8032);
      p.exports = f
        ? Object.defineProperties
        : function (E, S) {
            c(E);
            for (var w, C = d(S), A = m(S), N = A.length, P = 0; N > P; )
              v.f(E, (w = A[P++]), C[w]);
            return E;
          };
    },
    2975: (p, T, a) => {
      var f = a(1864),
        v = a(7012),
        c = a(7091),
        d = a(1099),
        m = a(6582),
        O = f.TypeError,
        E = Object.defineProperty;
      T.f = v
        ? E
        : function (C, A, N) {
            if ((d(C), (A = m(A)), d(N), c))
              try {
                return E(C, A, N);
              } catch (P) {}
            if ('get' in N || 'set' in N) throw O('Accessors not supported');
            return 'value' in N && (C[A] = N.value), C;
          };
    },
    3099: (p, T, a) => {
      var f = a(7012),
        v = a(757),
        c = a(5600),
        d = a(7053),
        m = a(8643),
        O = a(6582),
        E = a(2445),
        S = a(7091),
        C = Object.getOwnPropertyDescriptor;
      T.f = f
        ? C
        : function (N, P) {
            if (((N = m(N)), (P = O(P)), S))
              try {
                return C(N, P);
              } catch (w) {}
            if (E(N, P)) return d(!v(c.f, N, P), N[P]);
          };
    },
    4564: (p, T, a) => {
      var f = a(7759),
        c = a(1001).concat('length', 'prototype');
      T.f =
        Object.getOwnPropertyNames ||
        function (m) {
          return f(m, c);
        };
    },
    7593: (p, T) => {
      T.f = Object.getOwnPropertySymbols;
    },
    3963: (p, T, a) => {
      var f = a(1864),
        v = a(2445),
        c = a(5591),
        d = a(6174),
        m = a(2650),
        O = a(1335),
        E = m('IE_PROTO'),
        S = f.Object,
        C = S.prototype;
      p.exports = O
        ? S.getPrototypeOf
        : function (A) {
            var N = d(A);
            if (v(N, E)) return N[E];
            var P = N.constructor;
            return c(P) && N instanceof P ? P.prototype : N instanceof S ? C : null;
          };
    },
    3290: (p, T, a) => {
      var f = a(7964);
      p.exports = f({}.isPrototypeOf);
    },
    7759: (p, T, a) => {
      var f = a(7964),
        v = a(2445),
        c = a(8643),
        d = a(452).indexOf,
        m = a(3536),
        O = f([].push);
      p.exports = function (E, S) {
        var P,
          C = c(E),
          A = 0,
          N = [];
        for (P in C) !v(m, P) && v(C, P) && O(N, P);
        for (; S.length > A; ) v(C, (P = S[A++])) && (~d(N, P) || O(N, P));
        return N;
      };
    },
    8032: (p, T, a) => {
      var f = a(7759),
        v = a(1001);
      p.exports =
        Object.keys ||
        function (d) {
          return f(d, v);
        };
    },
    5600: (p, T) => {
      'use strict';
      var a = {}.propertyIsEnumerable,
        f = Object.getOwnPropertyDescriptor,
        v = f && !a.call({ 1: 2 }, 1);
      T.f = v
        ? function (d) {
            var m = f(this, d);
            return !!m && m.enumerable;
          }
        : a;
    },
    1464: (p, T, a) => {
      var f = a(7964),
        v = a(1099),
        c = a(5143);
      p.exports =
        Object.setPrototypeOf ||
        ('__proto__' in {}
          ? (function () {
              var O,
                d = !1,
                m = {};
              try {
                (O = f(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set))(m, []),
                  (d = m instanceof Array);
              } catch (E) {}
              return function (S, C) {
                return v(S), c(C), d ? O(S, C) : (S.__proto__ = C), S;
              };
            })()
          : void 0);
    },
    8297: (p, T, a) => {
      var f = a(1864),
        v = a(757),
        c = a(5591),
        d = a(726),
        m = f.TypeError;
      p.exports = function (O, E) {
        var S, C;
        if (
          ('string' === E && c((S = O.toString)) && !d((C = v(S, O)))) ||
          (c((S = O.valueOf)) && !d((C = v(S, O)))) ||
          ('string' !== E && c((S = O.toString)) && !d((C = v(S, O))))
        )
          return C;
        throw m("Can't convert object to primitive value");
      };
    },
    9376: (p, T, a) => {
      var f = a(3626),
        v = a(7964),
        c = a(4564),
        d = a(7593),
        m = a(1099),
        O = v([].concat);
      p.exports =
        f('Reflect', 'ownKeys') ||
        function (S) {
          var C = c.f(m(S)),
            A = d.f;
          return A ? O(C, A(S)) : C;
        };
    },
    4113: (p) => {
      p.exports = function (T) {
        try {
          return { error: !1, value: T() };
        } catch (a) {
          return { error: !0, value: a };
        }
      };
    },
    6223: (p, T, a) => {
      var f = a(1099),
        v = a(726),
        c = a(9723);
      p.exports = function (d, m) {
        if ((f(d), v(m) && m.constructor === d)) return m;
        var O = c.f(d);
        return (0, O.resolve)(m), O.promise;
      };
    },
    8715: (p, T, a) => {
      var f = a(7763);
      p.exports = function (v, c, d) {
        for (var m in c) f(v, m, c[m], d);
        return v;
      };
    },
    7763: (p, T, a) => {
      var f = a(1864),
        v = a(5591),
        c = a(2445),
        d = a(815),
        m = a(2341),
        O = a(7720),
        E = a(2493),
        S = a(538).CONFIGURABLE,
        C = E.get,
        A = E.enforce,
        N = String(String).split('String');
      (p.exports = function (P, w, D, L) {
        var K,
          j = !!L && !!L.unsafe,
          W = !!L && !!L.enumerable,
          Y = !!L && !!L.noTargetGet,
          U = L && void 0 !== L.name ? L.name : w;
        v(D) &&
          ('Symbol(' === String(U).slice(0, 7) &&
            (U = '[' + String(U).replace(/^Symbol\(([^)]*)\)/, '$1') + ']'),
          (!c(D, 'name') || (S && D.name !== U)) && d(D, 'name', U),
          (K = A(D)).source || (K.source = N.join('string' == typeof U ? U : ''))),
          P !== f
            ? (j ? !Y && P[w] && (W = !0) : delete P[w], W ? (P[w] = D) : d(P, w, D))
            : W
            ? (P[w] = D)
            : m(w, D);
      })(Function.prototype, 'toString', function () {
        return (v(this) && C(this).source) || O(this);
      });
    },
    3793: (p, T, a) => {
      var f = a(1864),
        v = a(757),
        c = a(1099),
        d = a(5591),
        m = a(6644),
        O = a(3084),
        E = f.TypeError;
      p.exports = function (S, C) {
        var A = S.exec;
        if (d(A)) {
          var N = v(A, S, C);
          return null !== N && c(N), N;
        }
        if ('RegExp' === m(S)) return v(O, S, C);
        throw E('RegExp#exec called on incompatible receiver');
      };
    },
    3084: (p, T, a) => {
      'use strict';
      var nt,
        H,
        f = a(757),
        v = a(7964),
        c = a(3574),
        d = a(1891),
        m = a(9895),
        O = a(7719),
        E = a(8724),
        S = a(2493).get,
        C = a(8126),
        A = a(1053),
        N = O('native-string-replace', String.prototype.replace),
        P = RegExp.prototype.exec,
        w = P,
        D = v(''.charAt),
        L = v(''.indexOf),
        j = v(''.replace),
        W = v(''.slice),
        Y =
          ((H = /b*/g),
          f(P, (nt = /a/), 'a'),
          f(P, H, 'a'),
          0 !== nt.lastIndex || 0 !== H.lastIndex),
        U = m.UNSUPPORTED_Y || m.BROKEN_CARET,
        K = void 0 !== /()??/.exec('')[1];
      (Y || K || U || C || A) &&
        (w = function (H) {
          var lt,
            xt,
            tt,
            Z,
            _,
            k,
            st,
            $ = this,
            ct = S($),
            dt = c(H),
            et = ct.raw;
          if (et)
            return (
              (et.lastIndex = $.lastIndex), (lt = f(w, et, dt)), ($.lastIndex = et.lastIndex), lt
            );
          var bt = ct.groups,
            Et = U && $.sticky,
            Tt = f(d, $),
            R = $.source,
            Pt = 0,
            Nt = dt;
          if (
            (Et &&
              ((Tt = j(Tt, 'y', '')),
              -1 === L(Tt, 'g') && (Tt += 'g'),
              (Nt = W(dt, $.lastIndex)),
              $.lastIndex > 0 &&
                (!$.multiline || ($.multiline && '\n' !== D(dt, $.lastIndex - 1))) &&
                ((R = '(?: ' + R + ')'), (Nt = ' ' + Nt), Pt++),
              (xt = new RegExp('^(?:' + R + ')', Tt))),
            K && (xt = new RegExp('^' + R + '$(?!\\s)', Tt)),
            Y && (tt = $.lastIndex),
            (Z = f(P, Et ? xt : $, Nt)),
            Et
              ? Z
                ? ((Z.input = W(Z.input, Pt)),
                  (Z[0] = W(Z[0], Pt)),
                  (Z.index = $.lastIndex),
                  ($.lastIndex += Z[0].length))
                : ($.lastIndex = 0)
              : Y && Z && ($.lastIndex = $.global ? Z.index + Z[0].length : tt),
            K &&
              Z &&
              Z.length > 1 &&
              f(N, Z[0], xt, function () {
                for (_ = 1; _ < arguments.length - 2; _++)
                  void 0 === arguments[_] && (Z[_] = void 0);
              }),
            Z && bt)
          )
            for (Z.groups = k = E(null), _ = 0; _ < bt.length; _++) k[(st = bt[_])[0]] = Z[st[1]];
          return Z;
        }),
        (p.exports = w);
    },
    1891: (p, T, a) => {
      'use strict';
      var f = a(1099);
      p.exports = function () {
        var v = f(this),
          c = '';
        return (
          v.global && (c += 'g'),
          v.ignoreCase && (c += 'i'),
          v.multiline && (c += 'm'),
          v.dotAll && (c += 's'),
          v.unicode && (c += 'u'),
          v.sticky && (c += 'y'),
          c
        );
      };
    },
    9895: (p, T, a) => {
      var f = a(8597),
        c = a(1864).RegExp;
      (T.UNSUPPORTED_Y = f(function () {
        var d = c('a', 'y');
        return (d.lastIndex = 2), null != d.exec('abcd');
      })),
        (T.BROKEN_CARET = f(function () {
          var d = c('^r', 'gy');
          return (d.lastIndex = 2), null != d.exec('str');
        }));
    },
    8126: (p, T, a) => {
      var f = a(8597),
        c = a(1864).RegExp;
      p.exports = f(function () {
        var d = c('.', 's');
        return !(d.dotAll && d.exec('\n') && 's' === d.flags);
      });
    },
    1053: (p, T, a) => {
      var f = a(8597),
        c = a(1864).RegExp;
      p.exports = f(function () {
        var d = c('(?<a>b)', 'g');
        return 'b' !== d.exec('b').groups.a || 'bc' !== 'b'.replace(d, '$<a>c');
      });
    },
    5025: (p, T, a) => {
      var v = a(1864).TypeError;
      p.exports = function (c) {
        if (null == c) throw v("Can't call method on " + c);
        return c;
      };
    },
    2341: (p, T, a) => {
      var f = a(1864),
        v = Object.defineProperty;
      p.exports = function (c, d) {
        try {
          v(f, c, { value: d, configurable: !0, writable: !0 });
        } catch (m) {
          f[c] = d;
        }
        return d;
      };
    },
    7374: (p, T, a) => {
      'use strict';
      var f = a(3626),
        v = a(2975),
        c = a(4563),
        d = a(7012),
        m = c('species');
      p.exports = function (O) {
        var E = f(O);
        d &&
          E &&
          !E[m] &&
          (0, v.f)(E, m, {
            configurable: !0,
            get: function () {
              return this;
            },
          });
      };
    },
    8242: (p, T, a) => {
      var f = a(2975).f,
        v = a(2445),
        d = a(4563)('toStringTag');
      p.exports = function (m, O, E) {
        m && !v((m = E ? m : m.prototype), d) && f(m, d, { configurable: !0, value: O });
      };
    },
    2650: (p, T, a) => {
      var f = a(7719),
        v = a(4295),
        c = f('keys');
      p.exports = function (d) {
        return c[d] || (c[d] = v(d));
      };
    },
    9941: (p, T, a) => {
      var f = a(1864),
        v = a(2341),
        c = '__core-js_shared__',
        d = f[c] || v(c, {});
      p.exports = d;
    },
    7719: (p, T, a) => {
      var f = a(7515),
        v = a(9941);
      (p.exports = function (c, d) {
        return v[c] || (v[c] = void 0 !== d ? d : {});
      })('versions', []).push({
        version: '3.19.0',
        mode: f ? 'pure' : 'global',
        copyright: '\xa9 2021 Denis Pushkarev (zloirock.ru)',
      });
    },
    7211: (p, T, a) => {
      var f = a(1099),
        v = a(3454),
        d = a(4563)('species');
      p.exports = function (m, O) {
        var S,
          E = f(m).constructor;
        return void 0 === E || null == (S = f(E)[d]) ? O : v(S);
      };
    },
    4487: (p, T, a) => {
      var f = a(7964),
        v = a(2157),
        c = a(3574),
        d = a(5025),
        m = f(''.charAt),
        O = f(''.charCodeAt),
        E = f(''.slice),
        S = function (C) {
          return function (A, N) {
            var L,
              j,
              P = c(d(A)),
              w = v(N),
              D = P.length;
            return w < 0 || w >= D
              ? C
                ? ''
                : void 0
              : (L = O(P, w)) < 55296 ||
                L > 56319 ||
                w + 1 === D ||
                (j = O(P, w + 1)) < 56320 ||
                j > 57343
              ? C
                ? m(P, w)
                : L
              : C
              ? E(P, w, w + 2)
              : j - 56320 + ((L - 55296) << 10) + 65536;
          };
        };
      p.exports = { codeAt: S(!1), charAt: S(!0) };
    },
    5637: (p, T, a) => {
      var f = a(538).PROPER,
        v = a(8597),
        c = a(8004);
      p.exports = function (m) {
        return v(function () {
          return (
            !!c[m]() || '\u200b\x85\u180e' !== '\u200b\x85\u180e'[m]() || (f && c[m].name !== m)
          );
        });
      };
    },
    1664: (p, T, a) => {
      var f = a(7964),
        v = a(5025),
        c = a(3574),
        d = a(8004),
        m = f(''.replace),
        O = '[' + d + ']',
        E = RegExp('^' + O + O + '*'),
        S = RegExp(O + O + '*$'),
        C = function (A) {
          return function (N) {
            var P = c(v(N));
            return 1 & A && (P = m(P, E, '')), 2 & A && (P = m(P, S, '')), P;
          };
        };
      p.exports = { start: C(1), end: C(2), trim: C(3) };
    },
    2040: (p, T, a) => {
      var nt,
        H,
        $,
        ct,
        f = a(1864),
        v = a(2328),
        c = a(9727),
        d = a(5591),
        m = a(2445),
        O = a(8597),
        E = a(7538),
        S = a(1346),
        C = a(5815),
        A = a(586),
        N = a(2002),
        P = f.setImmediate,
        w = f.clearImmediate,
        D = f.process,
        L = f.Dispatch,
        j = f.Function,
        W = f.MessageChannel,
        Y = f.String,
        U = 0,
        K = {},
        J = 'onreadystatechange';
      try {
        nt = f.location;
      } catch (tt) {}
      var dt = function (tt) {
          if (m(K, tt)) {
            var Z = K[tt];
            delete K[tt], Z();
          }
        },
        et = function (tt) {
          return function () {
            dt(tt);
          };
        },
        lt = function (tt) {
          dt(tt.data);
        },
        xt = function (tt) {
          f.postMessage(Y(tt), nt.protocol + '//' + nt.host);
        };
      (!P || !w) &&
        ((P = function (Z) {
          var _ = S(arguments, 1);
          return (
            (K[++U] = function () {
              v(d(Z) ? Z : j(Z), void 0, _);
            }),
            H(U),
            U
          );
        }),
        (w = function (Z) {
          delete K[Z];
        }),
        N
          ? (H = function (tt) {
              D.nextTick(et(tt));
            })
          : L && L.now
          ? (H = function (tt) {
              L.now(et(tt));
            })
          : W && !A
          ? ((ct = ($ = new W()).port2), ($.port1.onmessage = lt), (H = c(ct.postMessage, ct)))
          : f.addEventListener &&
            d(f.postMessage) &&
            !f.importScripts &&
            nt &&
            'file:' !== nt.protocol &&
            !O(xt)
          ? ((H = xt), f.addEventListener('message', lt, !1))
          : (H =
              J in C('script')
                ? function (tt) {
                    E.appendChild(C('script'))[J] = function () {
                      E.removeChild(this), dt(tt);
                    };
                  }
                : function (tt) {
                    setTimeout(et(tt), 0);
                  })),
        (p.exports = { set: P, clear: w });
    },
    222: (p, T, a) => {
      var f = a(2157),
        v = Math.max,
        c = Math.min;
      p.exports = function (d, m) {
        var O = f(d);
        return O < 0 ? v(O + m, 0) : c(O, m);
      };
    },
    8643: (p, T, a) => {
      var f = a(6169),
        v = a(5025);
      p.exports = function (c) {
        return f(v(c));
      };
    },
    2157: (p) => {
      var T = Math.ceil,
        a = Math.floor;
      p.exports = function (f) {
        var v = +f;
        return v != v || 0 === v ? 0 : (v > 0 ? a : T)(v);
      };
    },
    5902: (p, T, a) => {
      var f = a(2157),
        v = Math.min;
      p.exports = function (c) {
        return c > 0 ? v(f(c), 9007199254740991) : 0;
      };
    },
    6174: (p, T, a) => {
      var f = a(1864),
        v = a(5025),
        c = f.Object;
      p.exports = function (d) {
        return c(v(d));
      };
    },
    8495: (p, T, a) => {
      var f = a(1864),
        v = a(757),
        c = a(726),
        d = a(6186),
        m = a(5642),
        O = a(8297),
        E = a(4563),
        S = f.TypeError,
        C = E('toPrimitive');
      p.exports = function (A, N) {
        if (!c(A) || d(A)) return A;
        var w,
          P = m(A, C);
        if (P) {
          if ((void 0 === N && (N = 'default'), (w = v(P, A, N)), !c(w) || d(w))) return w;
          throw S("Can't convert object to primitive value");
        }
        return void 0 === N && (N = 'number'), O(A, N);
      };
    },
    6582: (p, T, a) => {
      var f = a(8495),
        v = a(6186);
      p.exports = function (c) {
        var d = f(c, 'string');
        return v(d) ? d : d + '';
      };
    },
    2900: (p, T, a) => {
      var c = {};
      (c[a(4563)('toStringTag')] = 'z'), (p.exports = '[object z]' === String(c));
    },
    3574: (p, T, a) => {
      var f = a(1864),
        v = a(9420),
        c = f.String;
      p.exports = function (d) {
        if ('Symbol' === v(d)) throw TypeError('Cannot convert a Symbol value to a string');
        return c(d);
      };
    },
    802: (p, T, a) => {
      var v = a(1864).String;
      p.exports = function (c) {
        try {
          return v(c);
        } catch (d) {
          return 'Object';
        }
      };
    },
    4295: (p, T, a) => {
      var f = a(7964),
        v = 0,
        c = Math.random(),
        d = f((1).toString);
      p.exports = function (m) {
        return 'Symbol(' + (void 0 === m ? '' : m) + ')_' + d(++v + c, 36);
      };
    },
    4431: (p, T, a) => {
      var f = a(7040);
      p.exports = f && !Symbol.sham && 'symbol' == typeof Symbol.iterator;
    },
    4563: (p, T, a) => {
      var f = a(1864),
        v = a(7719),
        c = a(2445),
        d = a(4295),
        m = a(7040),
        O = a(4431),
        E = v('wks'),
        S = f.Symbol,
        C = S && S.for,
        A = O ? S : (S && S.withoutSetter) || d;
      p.exports = function (N) {
        if (!c(E, N) || (!m && 'string' != typeof E[N])) {
          var P = 'Symbol.' + N;
          E[N] = m && c(S, N) ? S[N] : O && C ? C(P) : A(P);
        }
        return E[N];
      };
    },
    8004: (p) => {
      p.exports =
        '\t\n\v\f\r \xa0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff';
    },
    4984: (p, T, a) => {
      'use strict';
      var f = a(1163),
        v = a(7964),
        c = a(452).indexOf,
        d = a(7051),
        m = v([].indexOf),
        O = !!m && 1 / m([1], 1, -0) < 0,
        E = d('indexOf');
      f(
        { target: 'Array', proto: !0, forced: O || !E },
        {
          indexOf: function (C) {
            var A = arguments.length > 1 ? arguments[1] : void 0;
            return O ? m(this, C, A) || 0 : c(this, C, A);
          },
        },
      );
    },
    6837: (p, T, a) => {
      'use strict';
      var f = a(8643),
        v = a(4094),
        c = a(2339),
        d = a(2493),
        m = a(6038),
        O = 'Array Iterator',
        E = d.set,
        S = d.getterFor(O);
      (p.exports = m(
        Array,
        'Array',
        function (C, A) {
          E(this, { type: O, target: f(C), index: 0, kind: A });
        },
        function () {
          var C = S(this),
            A = C.target,
            N = C.kind,
            P = C.index++;
          return !A || P >= A.length
            ? ((C.target = void 0), { value: void 0, done: !0 })
            : 'keys' == N
            ? { value: P, done: !1 }
            : 'values' == N
            ? { value: A[P], done: !1 }
            : { value: [P, A[P]], done: !1 };
        },
        'values',
      )),
        (c.Arguments = c.Array),
        v('keys'),
        v('values'),
        v('entries');
    },
    5319: (p, T, a) => {
      'use strict';
      var f = a(1163),
        v = a(4716).left,
        c = a(7051),
        d = a(7189),
        m = a(2002);
      f(
        { target: 'Array', proto: !0, forced: !c('reduce') || (!m && d > 79 && d < 83) },
        {
          reduce: function (C) {
            var A = arguments.length;
            return v(this, C, A, A > 1 ? arguments[1] : void 0);
          },
        },
      );
    },
    7353: (p, T, a) => {
      'use strict';
      var f = a(1163),
        v = a(7964),
        c = a(9448),
        d = v([].reverse),
        m = [1, 2];
      f(
        { target: 'Array', proto: !0, forced: String(m) === String(m.reverse()) },
        {
          reverse: function () {
            return c(this) && (this.length = this.length), d(this);
          },
        },
      );
    },
    4541: (p, T, a) => {
      'use strict';
      var qt,
        $e,
        De,
        Gt,
        f = a(1163),
        v = a(7515),
        c = a(1864),
        d = a(3626),
        m = a(757),
        O = a(6866),
        E = a(7763),
        S = a(8715),
        C = a(1464),
        A = a(8242),
        N = a(7374),
        P = a(7340),
        w = a(5591),
        D = a(726),
        L = a(6063),
        j = a(7720),
        W = a(3284),
        Y = a(6297),
        U = a(7211),
        K = a(2040).set,
        J = a(1463),
        nt = a(6223),
        H = a(9989),
        $ = a(9723),
        ct = a(4113),
        dt = a(2493),
        et = a(7215),
        lt = a(4563),
        xt = a(2846),
        tt = a(2002),
        Z = a(7189),
        _ = lt('species'),
        k = 'Promise',
        st = dt.get,
        bt = dt.set,
        Et = dt.getterFor(k),
        Tt = O && O.prototype,
        R = O,
        Pt = Tt,
        Nt = c.TypeError,
        vt = c.document,
        jt = c.process,
        Yt = $.f,
        Jt = Yt,
        ae = !!(vt && vt.createEvent && c.dispatchEvent),
        he = w(c.PromiseRejectionEvent),
        re = 'unhandledrejection',
        We = !1,
        Pe = et(k, function () {
          var z = j(R),
            at = z !== String(R);
          if ((!at && 66 === Z) || (v && !Pt.finally)) return !0;
          if (Z >= 51 && /native code/.test(z)) return !1;
          var it = new R(function (Rt) {
              Rt(1);
            }),
            ht = function (Rt) {
              Rt(
                function () {},
                function () {},
              );
            };
          return (
            ((it.constructor = {})[_] = ht),
            !(We = it.then(function () {}) instanceof ht) || (!at && xt && !he)
          );
        }),
        Ze =
          Pe ||
          !Y(function (z) {
            R.all(z).catch(function () {});
          }),
        Fe = function (z) {
          var at;
          return !(!D(z) || !w((at = z.then))) && at;
        },
        Be = function (z, at) {
          if (!z.notified) {
            z.notified = !0;
            var it = z.reactions;
            J(function () {
              for (var ht = z.value, pt = 1 == z.state, Rt = 0; it.length > Rt; ) {
                var _t,
                  me,
                  q,
                  Wt = it[Rt++],
                  ne = pt ? Wt.ok : Wt.fail,
                  ie = Wt.resolve,
                  se = Wt.reject,
                  Xt = Wt.domain;
                try {
                  ne
                    ? (pt || (2 === z.rejection && cr(z), (z.rejection = 1)),
                      !0 === ne
                        ? (_t = ht)
                        : (Xt && Xt.enter(), (_t = ne(ht)), Xt && (Xt.exit(), (q = !0))),
                      _t === Wt.promise
                        ? se(Nt('Promise-chain cycle'))
                        : (me = Fe(_t))
                        ? m(me, _t, ie, se)
                        : ie(_t))
                    : se(ht);
                } catch (Ue) {
                  Xt && !q && Xt.exit(), se(Ue);
                }
              }
              (z.reactions = []), (z.notified = !1), at && !z.rejection && vr(z);
            });
          }
        },
        Je = function (z, at, it) {
          var ht, pt;
          ae
            ? (((ht = vt.createEvent('Event')).promise = at),
              (ht.reason = it),
              ht.initEvent(z, !1, !0),
              c.dispatchEvent(ht))
            : (ht = { promise: at, reason: it }),
            !he && (pt = c['on' + z]) ? pt(ht) : z === re && H('Unhandled promise rejection', it);
        },
        vr = function (z) {
          m(K, c, function () {
            var pt,
              at = z.facade,
              it = z.value;
            if (
              qe(z) &&
              ((pt = ct(function () {
                tt ? jt.emit('unhandledRejection', it, at) : Je(re, at, it);
              })),
              (z.rejection = tt || qe(z) ? 2 : 1),
              pt.error)
            )
              throw pt.value;
          });
        },
        qe = function (z) {
          return 1 !== z.rejection && !z.parent;
        },
        cr = function (z) {
          m(K, c, function () {
            var at = z.facade;
            tt ? jt.emit('rejectionHandled', at) : Je('rejectionhandled', at, z.value);
          });
        },
        pe = function (z, at, it) {
          return function (ht) {
            z(at, ht, it);
          };
        },
        ye = function (z, at, it) {
          z.done || ((z.done = !0), it && (z = it), (z.value = at), (z.state = 2), Be(z, !0));
        },
        Xe = function (z, at, it) {
          if (!z.done) {
            (z.done = !0), it && (z = it);
            try {
              if (z.facade === at) throw Nt("Promise can't be resolved itself");
              var ht = Fe(at);
              ht
                ? J(function () {
                    var pt = { done: !1 };
                    try {
                      m(ht, at, pe(Xe, pt, z), pe(ye, pt, z));
                    } catch (Rt) {
                      ye(pt, Rt, z);
                    }
                  })
                : ((z.value = at), (z.state = 1), Be(z, !1));
            } catch (pt) {
              ye({ done: !1 }, pt, z);
            }
          }
        };
      if (
        Pe &&
        ((R = function (at) {
          L(this, Pt), P(at), m(qt, this);
          var it = st(this);
          try {
            at(pe(Xe, it), pe(ye, it));
          } catch (ht) {
            ye(it, ht);
          }
        }),
        ((qt = function (at) {
          bt(this, {
            type: k,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: 0,
            value: void 0,
          });
        }).prototype = S((Pt = R.prototype), {
          then: function (at, it) {
            var ht = Et(this),
              pt = ht.reactions,
              Rt = Yt(U(this, R));
            return (
              (Rt.ok = !w(at) || at),
              (Rt.fail = w(it) && it),
              (Rt.domain = tt ? jt.domain : void 0),
              (ht.parent = !0),
              (pt[pt.length] = Rt),
              0 != ht.state && Be(ht, !1),
              Rt.promise
            );
          },
          catch: function (z) {
            return this.then(void 0, z);
          },
        })),
        ($e = function () {
          var z = new qt(),
            at = st(z);
          (this.promise = z), (this.resolve = pe(Xe, at)), (this.reject = pe(ye, at));
        }),
        ($.f = Yt =
          function (z) {
            return z === R || z === De ? new $e(z) : Jt(z);
          }),
        !v && w(O) && Tt !== Object.prototype)
      ) {
        (Gt = Tt.then),
          We ||
            (E(
              Tt,
              'then',
              function (at, it) {
                var ht = this;
                return new R(function (pt, Rt) {
                  m(Gt, ht, pt, Rt);
                }).then(at, it);
              },
              { unsafe: !0 },
            ),
            E(Tt, 'catch', Pt.catch, { unsafe: !0 }));
        try {
          delete Tt.constructor;
        } catch (z) {}
        C && C(Tt, Pt);
      }
      f({ global: !0, wrap: !0, forced: Pe }, { Promise: R }),
        A(R, k, !1, !0),
        N(k),
        (De = d(k)),
        f(
          { target: k, stat: !0, forced: Pe },
          {
            reject: function (at) {
              var it = Yt(this);
              return m(it.reject, void 0, at), it.promise;
            },
          },
        ),
        f(
          { target: k, stat: !0, forced: v || Pe },
          {
            resolve: function (at) {
              return nt(v && this === De ? R : this, at);
            },
          },
        ),
        f(
          { target: k, stat: !0, forced: Ze },
          {
            all: function (at) {
              var it = this,
                ht = Yt(it),
                pt = ht.resolve,
                Rt = ht.reject,
                Wt = ct(function () {
                  var ne = P(it.resolve),
                    ie = [],
                    se = 0,
                    Xt = 1;
                  W(at, function (_t) {
                    var me = se++,
                      q = !1;
                    Xt++,
                      m(ne, it, _t).then(function (Ue) {
                        q || ((q = !0), (ie[me] = Ue), --Xt || pt(ie));
                      }, Rt);
                  }),
                    --Xt || pt(ie);
                });
              return Wt.error && Rt(Wt.value), ht.promise;
            },
            race: function (at) {
              var it = this,
                ht = Yt(it),
                pt = ht.reject,
                Rt = ct(function () {
                  var Wt = P(it.resolve);
                  W(at, function (ne) {
                    m(Wt, it, ne).then(ht.resolve, pt);
                  });
                });
              return Rt.error && pt(Rt.value), ht.promise;
            },
          },
        );
    },
    9665: (p, T, a) => {
      'use strict';
      var f = a(1163),
        v = a(3084);
      f({ target: 'RegExp', proto: !0, forced: /./.exec !== v }, { exec: v });
    },
    4119: (p, T, a) => {
      'use strict';
      var f = a(7964),
        v = a(538).PROPER,
        c = a(7763),
        d = a(1099),
        m = a(3290),
        O = a(3574),
        E = a(8597),
        S = a(1891),
        C = 'toString',
        A = RegExp.prototype,
        N = A[C],
        P = f(S);
      (E(function () {
        return '/a/b' != N.call({ source: 'a', flags: 'b' });
      }) ||
        (v && N.name != C)) &&
        c(
          RegExp.prototype,
          C,
          function () {
            var j = d(this),
              W = O(j.source),
              Y = j.flags;
            return '/' + W + '/' + O(void 0 === Y && m(A, j) && !('flags' in A) ? P(j) : Y);
          },
          { unsafe: !0 },
        );
    },
    706: (p, T, a) => {
      'use strict';
      var L,
        f = a(1163),
        v = a(7964),
        c = a(3099).f,
        d = a(5902),
        m = a(3574),
        O = a(3270),
        E = a(5025),
        S = a(363),
        C = a(7515),
        A = v(''.endsWith),
        N = v(''.slice),
        P = Math.min,
        w = S('endsWith');
      f(
        {
          target: 'String',
          proto: !0,
          forced: !((!C && !w && ((L = c(String.prototype, 'endsWith')), L && !L.writable)) || w),
        },
        {
          endsWith: function (j) {
            var W = m(E(this));
            O(j);
            var Y = arguments.length > 1 ? arguments[1] : void 0,
              U = W.length,
              K = void 0 === Y ? U : P(d(Y), U),
              J = m(j);
            return A ? A(W, J, K) : N(W, K - J.length, K) === J;
          },
        },
      );
    },
    3358: (p, T, a) => {
      'use strict';
      var f = a(1163),
        v = a(7964),
        c = a(3270),
        d = a(5025),
        m = a(3574),
        O = a(363),
        E = v(''.indexOf);
      f(
        { target: 'String', proto: !0, forced: !O('includes') },
        {
          includes: function (C) {
            return !!~E(m(d(this)), m(c(C)), arguments.length > 1 ? arguments[1] : void 0);
          },
        },
      );
    },
    6954: (p, T, a) => {
      'use strict';
      var f = a(757),
        v = a(9357),
        c = a(1099),
        d = a(5902),
        m = a(3574),
        O = a(5025),
        E = a(5642),
        S = a(7678),
        C = a(3793);
      v('match', function (A, N, P) {
        return [
          function (D) {
            var L = O(this),
              j = null == D ? void 0 : E(D, A);
            return j ? f(j, D, L) : new RegExp(D)[A](m(L));
          },
          function (w) {
            var D = c(this),
              L = m(w),
              j = P(N, D, L);
            if (j.done) return j.value;
            if (!D.global) return C(D, L);
            var W = D.unicode;
            D.lastIndex = 0;
            for (var K, Y = [], U = 0; null !== (K = C(D, L)); ) {
              var J = m(K[0]);
              (Y[U] = J), '' === J && (D.lastIndex = S(L, d(D.lastIndex), W)), U++;
            }
            return 0 === U ? null : Y;
          },
        ];
      });
    },
    6262: (p, T, a) => {
      'use strict';
      var f = a(2328),
        v = a(757),
        c = a(7964),
        d = a(9357),
        m = a(8597),
        O = a(1099),
        E = a(5591),
        S = a(2157),
        C = a(5902),
        A = a(3574),
        N = a(5025),
        P = a(7678),
        w = a(5642),
        D = a(6162),
        L = a(3793),
        W = a(4563)('replace'),
        Y = Math.max,
        U = Math.min,
        K = c([].concat),
        J = c([].push),
        nt = c(''.indexOf),
        H = c(''.slice),
        $ = function (lt) {
          return void 0 === lt ? lt : String(lt);
        },
        ct = '$0' === 'a'.replace(/./, '$0'),
        dt = !!/./[W] && '' === /./[W]('a', '$0');
      d(
        'replace',
        function (lt, xt, tt) {
          var Z = dt ? '$' : '$0';
          return [
            function (k, st) {
              var bt = N(this),
                Et = null == k ? void 0 : w(k, W);
              return Et ? v(Et, k, bt, st) : v(xt, A(bt), k, st);
            },
            function (_, k) {
              var st = O(this),
                bt = A(_);
              if ('string' == typeof k && -1 === nt(k, Z) && -1 === nt(k, '$<')) {
                var Et = tt(xt, st, bt, k);
                if (Et.done) return Et.value;
              }
              var Tt = E(k);
              Tt || (k = A(k));
              var R = st.global;
              if (R) {
                var Pt = st.unicode;
                st.lastIndex = 0;
              }
              for (var Nt = []; ; ) {
                var vt = L(st, bt);
                if (null === vt || (J(Nt, vt), !R)) break;
                '' === A(vt[0]) && (st.lastIndex = P(bt, C(st.lastIndex), Pt));
              }
              for (var Yt = '', Jt = 0, ae = 0; ae < Nt.length; ae++) {
                for (
                  var he = A((vt = Nt[ae])[0]),
                    re = Y(U(S(vt.index), bt.length), 0),
                    Ce = [],
                    ce = 1;
                  ce < vt.length;
                  ce++
                )
                  J(Ce, $(vt[ce]));
                var ge = vt.groups;
                if (Tt) {
                  var fe = K([he], Ce, re, bt);
                  void 0 !== ge && J(fe, ge);
                  var de = A(f(k, void 0, fe));
                } else de = D(he, bt, re, Ce, ge, k);
                re >= Jt && ((Yt += H(bt, Jt, re) + de), (Jt = re + he.length));
              }
              return Yt + H(bt, Jt);
            },
          ];
        },
        !!m(function () {
          var lt = /./;
          return (
            (lt.exec = function () {
              var xt = [];
              return (xt.groups = { a: '7' }), xt;
            }),
            '7' !== ''.replace(lt, '$<a>')
          );
        }) ||
          !ct ||
          dt,
      );
    },
    5374: (p, T, a) => {
      'use strict';
      var f = a(2328),
        v = a(757),
        c = a(7964),
        d = a(9357),
        m = a(9482),
        O = a(1099),
        E = a(5025),
        S = a(7211),
        C = a(7678),
        A = a(5902),
        N = a(3574),
        P = a(5642),
        w = a(1346),
        D = a(3793),
        L = a(3084),
        j = a(9895),
        W = a(8597),
        Y = j.UNSUPPORTED_Y,
        U = 4294967295,
        K = Math.min,
        J = [].push,
        nt = c(/./.exec),
        H = c(J),
        $ = c(''.slice);
      d(
        'split',
        function (dt, et, lt) {
          var xt;
          return (
            (xt =
              'c' == 'abbc'.split(/(b)*/)[1] ||
              4 != 'test'.split(/(?:)/, -1).length ||
              2 != 'ab'.split(/(?:ab)*/).length ||
              4 != '.'.split(/(.?)(.?)/).length ||
              '.'.split(/()()/).length > 1 ||
              ''.split(/.?/).length
                ? function (tt, Z) {
                    var _ = N(E(this)),
                      k = void 0 === Z ? U : Z >>> 0;
                    if (0 === k) return [];
                    if (void 0 === tt) return [_];
                    if (!m(tt)) return v(et, _, tt, k);
                    for (
                      var R,
                        Pt,
                        Nt,
                        st = [],
                        Et = 0,
                        Tt = new RegExp(
                          tt.source,
                          (tt.ignoreCase ? 'i' : '') +
                            (tt.multiline ? 'm' : '') +
                            (tt.unicode ? 'u' : '') +
                            (tt.sticky ? 'y' : '') +
                            'g',
                        );
                      (R = v(L, Tt, _)) &&
                      !(
                        (Pt = Tt.lastIndex) > Et &&
                        (H(st, $(_, Et, R.index)),
                        R.length > 1 && R.index < _.length && f(J, st, w(R, 1)),
                        (Nt = R[0].length),
                        (Et = Pt),
                        st.length >= k)
                      );

                    )
                      Tt.lastIndex === R.index && Tt.lastIndex++;
                    return (
                      Et === _.length ? (Nt || !nt(Tt, '')) && H(st, '') : H(st, $(_, Et)),
                      st.length > k ? w(st, 0, k) : st
                    );
                  }
                : '0'.split(void 0, 0).length
                ? function (tt, Z) {
                    return void 0 === tt && 0 === Z ? [] : v(et, this, tt, Z);
                  }
                : et),
            [
              function (Z, _) {
                var k = E(this),
                  st = null == Z ? void 0 : P(Z, dt);
                return st ? v(st, Z, k, _) : v(xt, N(k), Z, _);
              },
              function (tt, Z) {
                var _ = O(this),
                  k = N(tt),
                  st = lt(xt, _, k, Z, xt !== et);
                if (st.done) return st.value;
                var bt = S(_, RegExp),
                  Et = _.unicode,
                  R = new bt(
                    Y ? '^(?:' + _.source + ')' : _,
                    (_.ignoreCase ? 'i' : '') +
                      (_.multiline ? 'm' : '') +
                      (_.unicode ? 'u' : '') +
                      (Y ? 'g' : 'y'),
                  ),
                  Pt = void 0 === Z ? U : Z >>> 0;
                if (0 === Pt) return [];
                if (0 === k.length) return null === D(R, k) ? [k] : [];
                for (var Nt = 0, vt = 0, jt = []; vt < k.length; ) {
                  R.lastIndex = Y ? 0 : vt;
                  var Jt,
                    Yt = D(R, Y ? $(k, vt) : k);
                  if (null === Yt || (Jt = K(A(R.lastIndex + (Y ? vt : 0)), k.length)) === Nt)
                    vt = C(k, vt, Et);
                  else {
                    if ((H(jt, $(k, Nt, vt)), jt.length === Pt)) return jt;
                    for (var ae = 1; ae <= Yt.length - 1; ae++)
                      if ((H(jt, Yt[ae]), jt.length === Pt)) return jt;
                    vt = Nt = Jt;
                  }
                }
                return H(jt, $(k, Nt)), jt;
              },
            ]
          );
        },
        !!W(function () {
          var dt = /(?:)/,
            et = dt.exec;
          dt.exec = function () {
            return et.apply(this, arguments);
          };
          var lt = 'ab'.split(dt);
          return 2 !== lt.length || 'a' !== lt[0] || 'b' !== lt[1];
        }),
        Y,
      );
    },
    5139: (p, T, a) => {
      'use strict';
      var L,
        f = a(1163),
        v = a(7964),
        c = a(3099).f,
        d = a(5902),
        m = a(3574),
        O = a(3270),
        E = a(5025),
        S = a(363),
        C = a(7515),
        A = v(''.startsWith),
        N = v(''.slice),
        P = Math.min,
        w = S('startsWith');
      f(
        {
          target: 'String',
          proto: !0,
          forced: !((!C && !w && ((L = c(String.prototype, 'startsWith')), L && !L.writable)) || w),
        },
        {
          startsWith: function (j) {
            var W = m(E(this));
            O(j);
            var Y = d(P(arguments.length > 1 ? arguments[1] : void 0, W.length)),
              U = m(j);
            return A ? A(W, U, Y) : N(W, Y, Y + U.length) === U;
          },
        },
      );
    },
    7176: (p, T, a) => {
      'use strict';
      var f = a(1163),
        v = a(1664).trim;
      f(
        { target: 'String', proto: !0, forced: a(5637)('trim') },
        {
          trim: function () {
            return v(this);
          },
        },
      );
    },
    2603: (p, T, a) => {
      var f = a(1864),
        v = a(6877),
        c = a(713),
        d = a(6837),
        m = a(815),
        O = a(4563),
        E = O('iterator'),
        S = O('toStringTag'),
        C = d.values,
        A = function (P, w) {
          if (P) {
            if (P[E] !== C)
              try {
                m(P, E, C);
              } catch (L) {
                P[E] = C;
              }
            if ((P[S] || m(P, S, w), v[w]))
              for (var D in d)
                if (P[D] !== d[D])
                  try {
                    m(P, D, d[D]);
                  } catch (L) {
                    P[D] = d[D];
                  }
          }
        };
      for (var N in v) A(f[N] && f[N].prototype, N);
      A(c, 'DOMTokenList');
    },
    5209: (p, T, a) => {
      'use strict';
      function v(l, t, e, r, n, i, o) {
        try {
          var s = l[i](o),
            u = s.value;
        } catch (h) {
          return void e(h);
        }
        s.done ? t(u) : Promise.resolve(u).then(r, n);
      }
      function c(l) {
        return function () {
          var t = this,
            e = arguments;
          return new Promise(function (r, n) {
            var i = l.apply(t, e);
            function o(u) {
              v(i, r, n, o, s, 'next', u);
            }
            function s(u) {
              v(i, r, n, o, s, 'throw', u);
            }
            o(void 0);
          });
        };
      }
      function C(l, t, e) {
        return (
          t in l
            ? Object.defineProperty(l, t, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (l[t] = e),
          l
        );
      }
      a.r(T),
        a.d(T, {
          AElement: () => nn,
          AnimateColorElement: () => Jr,
          AnimateElement: () => rr,
          AnimateTransformElement: () => qr,
          BoundingBox: () => te,
          CB1: () => Wt,
          CB2: () => ne,
          CB3: () => ie,
          CB4: () => se,
          Canvg: () => Me,
          CircleElement: () => Gr,
          ClipPathElement: () => gn,
          DefsElement: () => Qr,
          DescElement: () => En,
          Document: () => On,
          Element: () => It,
          EllipseElement: () => Hr,
          FeColorMatrixElement: () => Er,
          FeCompositeElement: () => mn,
          FeDropShadowElement: () => pn,
          FeGaussianBlurElement: () => xn,
          FeMorphologyElement: () => yn,
          FilterElement: () => dn,
          Font: () => Re,
          FontElement: () => _r,
          FontFaceElement: () => tn,
          GElement: () => er,
          GlyphElement: () => yr,
          GradientElement: () => br,
          ImageElement: () => on,
          LineElement: () => Yr,
          LinearGradientElement: () => kr,
          MarkerElement: () => Xr,
          MaskElement: () => vn,
          Matrix: () => dr,
          MissingGlyphElement: () => en,
          Mouse: () => Ir,
          PSEUDO_ZERO: () => it,
          Parser: () => _e,
          PathElement: () => Ot,
          PathParser: () => ot,
          PatternElement: () => $r,
          Point: () => wt,
          PolygonElement: () => Wr,
          PolylineElement: () => xr,
          Property: () => q,
          QB1: () => Xt,
          QB2: () => _t,
          QB3: () => me,
          RadialGradientElement: () => Kr,
          RectElement: () => mr,
          RenderedElement: () => xe,
          Rotate: () => Fr,
          SVGElement: () => je,
          SVGFontLoader: () => ln,
          Scale: () => Br,
          Screen: () => gr,
          Skew: () => pr,
          SkewX: () => Ur,
          SkewY: () => jr,
          StopElement: () => Zr,
          StyleElement: () => hn,
          SymbolElement: () => un,
          TRefElement: () => rn,
          TSpanElement: () => Qe,
          TextElement: () => be,
          TextPathElement: () => sn,
          TitleElement: () => bn,
          Transform: () => tr,
          Translate: () => Dr,
          UnknownElement: () => zr,
          UseElement: () => fn,
          ViewPort: () => Ue,
          compressSpaces: () => qt,
          default: () => Gn,
          getSelectorSpecificity: () => at,
          normalizeAttributeName: () => Ze,
          normalizeColor: () => Be,
          parseExternalUrl: () => Fe,
          presets: () => We,
          toNumbers: () => Gt,
          trimLeft: () => $e,
          trimRight: () => De,
          vectorMagnitude: () => ht,
          vectorsAngle: () => Rt,
          vectorsRatio: () => pt,
        }),
        a(4541),
        a(6954),
        a(6262),
        a(5139),
        a(6837),
        a(2603),
        a(5319),
        a(706),
        a(5374);
      var w = a(4665),
        L = (a(7176), a(7886)),
        U =
          (a(3358),
          a(4984),
          a(7353),
          function (l, t) {
            return (U =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, r) {
                  e.__proto__ = r;
                }) ||
              function (e, r) {
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              })(l, t);
          });
      function K(l, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Class extends value ' + String(t) + ' is not a constructor or null');
        function e() {
          this.constructor = l;
        }
        U(l, t),
          (l.prototype = null === t ? Object.create(t) : ((e.prototype = t.prototype), new e()));
      }
      function nt(l, t) {
        var e = l[0],
          r = l[1];
        return [e * Math.cos(t) - r * Math.sin(t), e * Math.sin(t) + r * Math.cos(t)];
      }
      function H() {
        for (var l = [], t = 0; t < arguments.length; t++) l[t] = arguments[t];
        for (var e = 0; e < l.length; e++)
          if ('number' != typeof l[e])
            throw new Error(
              'assertNumbers arguments[' +
                e +
                '] is not a number. ' +
                typeof l[e] +
                ' == typeof ' +
                l[e],
            );
        return !0;
      }
      var $ = Math.PI;
      function ct(l, t, e) {
        (l.lArcFlag = 0 === l.lArcFlag ? 0 : 1), (l.sweepFlag = 0 === l.sweepFlag ? 0 : 1);
        var r = l.rX,
          n = l.rY,
          i = l.x,
          o = l.y;
        (r = Math.abs(l.rX)), (n = Math.abs(l.rY));
        var s = nt([(t - i) / 2, (e - o) / 2], (-l.xRot / 180) * $),
          u = s[0],
          h = s[1],
          g = Math.pow(u, 2) / Math.pow(r, 2) + Math.pow(h, 2) / Math.pow(n, 2);
        1 < g && ((r *= Math.sqrt(g)), (n *= Math.sqrt(g))), (l.rX = r), (l.rY = n);
        var x = Math.pow(r, 2) * Math.pow(h, 2) + Math.pow(n, 2) * Math.pow(u, 2),
          b =
            (l.lArcFlag !== l.sweepFlag ? 1 : -1) *
            Math.sqrt(Math.max(0, (Math.pow(r, 2) * Math.pow(n, 2) - x) / x)),
          y = ((r * h) / n) * b,
          M = ((-n * u) / r) * b,
          I = nt([y, M], (l.xRot / 180) * $);
        (l.cX = I[0] + (t + i) / 2),
          (l.cY = I[1] + (e + o) / 2),
          (l.phi1 = Math.atan2((h - M) / n, (u - y) / r)),
          (l.phi2 = Math.atan2((-h - M) / n, (-u - y) / r)),
          0 === l.sweepFlag && l.phi2 > l.phi1 && (l.phi2 -= 2 * $),
          1 === l.sweepFlag && l.phi2 < l.phi1 && (l.phi2 += 2 * $),
          (l.phi1 *= 180 / $),
          (l.phi2 *= 180 / $);
      }
      function dt(l, t, e) {
        H(l, t, e);
        var r = l * l + t * t - e * e;
        if (0 > r) return [];
        if (0 === r) return [[(l * e) / (l * l + t * t), (t * e) / (l * l + t * t)]];
        var n = Math.sqrt(r);
        return [
          [(l * e + t * n) / (l * l + t * t), (t * e - l * n) / (l * l + t * t)],
          [(l * e - t * n) / (l * l + t * t), (t * e + l * n) / (l * l + t * t)],
        ];
      }
      var et,
        lt = Math.PI / 180;
      function xt(l, t, e) {
        return (1 - e) * l + e * t;
      }
      function tt(l, t, e, r) {
        return l + Math.cos((r / 180) * $) * t + Math.sin((r / 180) * $) * e;
      }
      function Z(l, t, e, r) {
        var n = 1e-6,
          i = t - l,
          o = e - t,
          s = 3 * i + 3 * (r - e) - 6 * o,
          u = 6 * (o - i),
          h = 3 * i;
        return Math.abs(s) < n
          ? [-h / u]
          : (function (g, x, b) {
              void 0 === b && (b = 1e-6);
              var y = (g * g) / 4 - x;
              if (y < -b) return [];
              if (y <= b) return [-g / 2];
              var M = Math.sqrt(y);
              return [-g / 2 - M, -g / 2 + M];
            })(u / s, h / s, n);
      }
      function _(l, t, e, r, n) {
        var i = 1 - n;
        return l * (i * i * i) + t * (3 * i * i * n) + e * (3 * i * n * n) + r * (n * n * n);
      }
      !(function (l) {
        function t() {
          return n(function (s, u, h) {
            return (
              s.relative &&
                (void 0 !== s.x1 && (s.x1 += u),
                void 0 !== s.y1 && (s.y1 += h),
                void 0 !== s.x2 && (s.x2 += u),
                void 0 !== s.y2 && (s.y2 += h),
                void 0 !== s.x && (s.x += u),
                void 0 !== s.y && (s.y += h),
                (s.relative = !1)),
              s
            );
          });
        }
        function e() {
          var s = NaN,
            u = NaN,
            h = NaN,
            g = NaN;
          return n(function (x, b, y) {
            return (
              x.type & R.SMOOTH_CURVE_TO &&
                ((x.type = R.CURVE_TO),
                (s = isNaN(s) ? b : s),
                (u = isNaN(u) ? y : u),
                (x.x1 = x.relative ? b - s : 2 * b - s),
                (x.y1 = x.relative ? y - u : 2 * y - u)),
              x.type & R.CURVE_TO
                ? ((s = x.relative ? b + x.x2 : x.x2), (u = x.relative ? y + x.y2 : x.y2))
                : ((s = NaN), (u = NaN)),
              x.type & R.SMOOTH_QUAD_TO &&
                ((x.type = R.QUAD_TO),
                (h = isNaN(h) ? b : h),
                (g = isNaN(g) ? y : g),
                (x.x1 = x.relative ? b - h : 2 * b - h),
                (x.y1 = x.relative ? y - g : 2 * y - g)),
              x.type & R.QUAD_TO
                ? ((h = x.relative ? b + x.x1 : x.x1), (g = x.relative ? y + x.y1 : x.y1))
                : ((h = NaN), (g = NaN)),
              x
            );
          });
        }
        function r() {
          var s = NaN,
            u = NaN;
          return n(function (h, g, x) {
            if (
              (h.type & R.SMOOTH_QUAD_TO &&
                ((h.type = R.QUAD_TO),
                (s = isNaN(s) ? g : s),
                (u = isNaN(u) ? x : u),
                (h.x1 = h.relative ? g - s : 2 * g - s),
                (h.y1 = h.relative ? x - u : 2 * x - u)),
              h.type & R.QUAD_TO)
            ) {
              (s = h.relative ? g + h.x1 : h.x1), (u = h.relative ? x + h.y1 : h.y1);
              var b = h.x1,
                y = h.y1;
              (h.type = R.CURVE_TO),
                (h.x1 = ((h.relative ? 0 : g) + 2 * b) / 3),
                (h.y1 = ((h.relative ? 0 : x) + 2 * y) / 3),
                (h.x2 = (h.x + 2 * b) / 3),
                (h.y2 = (h.y + 2 * y) / 3);
            } else (s = NaN), (u = NaN);
            return h;
          });
        }
        function n(s) {
          var u = 0,
            h = 0,
            g = NaN,
            x = NaN;
          return function (b) {
            if (isNaN(g) && !(b.type & R.MOVE_TO)) throw new Error('path must start with moveto');
            var y = s(b, u, h, g, x);
            return (
              b.type & R.CLOSE_PATH && ((u = g), (h = x)),
              void 0 !== b.x && (u = b.relative ? u + b.x : b.x),
              void 0 !== b.y && (h = b.relative ? h + b.y : b.y),
              b.type & R.MOVE_TO && ((g = u), (x = h)),
              y
            );
          };
        }
        function i(s, u, h, g, x, b) {
          return (
            H(s, u, h, g, x, b),
            n(function (y, M, I, V) {
              var F = y.x1,
                Q = y.x2,
                G = y.relative && !isNaN(V),
                B = void 0 !== y.x ? y.x : G ? 0 : M,
                rt = void 0 !== y.y ? y.y : G ? 0 : I;
              function ut(Ht) {
                return Ht * Ht;
              }
              y.type & R.HORIZ_LINE_TO &&
                0 !== u &&
                ((y.type = R.LINE_TO), (y.y = y.relative ? 0 : I)),
                y.type & R.VERT_LINE_TO &&
                  0 !== h &&
                  ((y.type = R.LINE_TO), (y.x = y.relative ? 0 : M)),
                void 0 !== y.x && (y.x = y.x * s + rt * h + (G ? 0 : x)),
                void 0 !== y.y && (y.y = B * u + y.y * g + (G ? 0 : b)),
                void 0 !== y.x1 && (y.x1 = y.x1 * s + y.y1 * h + (G ? 0 : x)),
                void 0 !== y.y1 && (y.y1 = F * u + y.y1 * g + (G ? 0 : b)),
                void 0 !== y.x2 && (y.x2 = y.x2 * s + y.y2 * h + (G ? 0 : x)),
                void 0 !== y.y2 && (y.y2 = Q * u + y.y2 * g + (G ? 0 : b));
              var X = s * g - u * h;
              if (void 0 !== y.xRot && (1 !== s || 0 !== u || 0 !== h || 1 !== g))
                if (0 === X)
                  delete y.rX,
                    delete y.rY,
                    delete y.xRot,
                    delete y.lArcFlag,
                    delete y.sweepFlag,
                    (y.type = R.LINE_TO);
                else {
                  var ft = (y.xRot * Math.PI) / 180,
                    gt = Math.sin(ft),
                    mt = Math.cos(ft),
                    St = 1 / ut(y.rX),
                    Ct = 1 / ut(y.rY),
                    Ft = ut(mt) * St + ut(gt) * Ct,
                    Bt = 2 * gt * mt * (St - Ct),
                    Mt = ut(gt) * St + ut(mt) * Ct,
                    Lt = Ft * g * g - Bt * u * g + Mt * u * u,
                    Vt = Bt * (s * g + u * h) - 2 * (Ft * h * g + Mt * s * u),
                    zt = Ft * h * h - Bt * s * h + Mt * s * s,
                    At = ((Math.atan2(Vt, Lt - zt) + Math.PI) % Math.PI) / 2,
                    yt = Math.sin(At),
                    Ut = Math.cos(At);
                  (y.rX = Math.abs(X) / Math.sqrt(Lt * ut(Ut) + Vt * yt * Ut + zt * ut(yt))),
                    (y.rY = Math.abs(X) / Math.sqrt(Lt * ut(yt) - Vt * yt * Ut + zt * ut(Ut))),
                    (y.xRot = (180 * At) / Math.PI);
                }
              return void 0 !== y.sweepFlag && 0 > X && (y.sweepFlag = +!y.sweepFlag), y;
            })
          );
        }
        (l.ROUND = function (s) {
          function u(h) {
            return Math.round(h * s) / s;
          }
          return (
            void 0 === s && (s = 1e13),
            H(s),
            function (h) {
              return (
                void 0 !== h.x1 && (h.x1 = u(h.x1)),
                void 0 !== h.y1 && (h.y1 = u(h.y1)),
                void 0 !== h.x2 && (h.x2 = u(h.x2)),
                void 0 !== h.y2 && (h.y2 = u(h.y2)),
                void 0 !== h.x && (h.x = u(h.x)),
                void 0 !== h.y && (h.y = u(h.y)),
                void 0 !== h.rX && (h.rX = u(h.rX)),
                void 0 !== h.rY && (h.rY = u(h.rY)),
                h
              );
            }
          );
        }),
          (l.TO_ABS = t),
          (l.TO_REL = function () {
            return n(function (s, u, h) {
              return (
                s.relative ||
                  (void 0 !== s.x1 && (s.x1 -= u),
                  void 0 !== s.y1 && (s.y1 -= h),
                  void 0 !== s.x2 && (s.x2 -= u),
                  void 0 !== s.y2 && (s.y2 -= h),
                  void 0 !== s.x && (s.x -= u),
                  void 0 !== s.y && (s.y -= h),
                  (s.relative = !0)),
                s
              );
            });
          }),
          (l.NORMALIZE_HVZ = function (s, u, h) {
            return (
              void 0 === s && (s = !0),
              void 0 === u && (u = !0),
              void 0 === h && (h = !0),
              n(function (g, x, b, y, M) {
                if (isNaN(y) && !(g.type & R.MOVE_TO))
                  throw new Error('path must start with moveto');
                return (
                  u &&
                    g.type & R.HORIZ_LINE_TO &&
                    ((g.type = R.LINE_TO), (g.y = g.relative ? 0 : b)),
                  h &&
                    g.type & R.VERT_LINE_TO &&
                    ((g.type = R.LINE_TO), (g.x = g.relative ? 0 : x)),
                  s &&
                    g.type & R.CLOSE_PATH &&
                    ((g.type = R.LINE_TO),
                    (g.x = g.relative ? y - x : y),
                    (g.y = g.relative ? M - b : M)),
                  g.type & R.ARC &&
                    (0 === g.rX || 0 === g.rY) &&
                    ((g.type = R.LINE_TO),
                    delete g.rX,
                    delete g.rY,
                    delete g.xRot,
                    delete g.lArcFlag,
                    delete g.sweepFlag),
                  g
                );
              })
            );
          }),
          (l.NORMALIZE_ST = e),
          (l.QT_TO_C = r),
          (l.INFO = n),
          (l.SANITIZE = function (s) {
            void 0 === s && (s = 0), H(s);
            var u = NaN,
              h = NaN,
              g = NaN,
              x = NaN;
            return n(function (b, y, M, I, V) {
              var F = Math.abs,
                Q = !1,
                G = 0,
                B = 0;
              if (
                (b.type & R.SMOOTH_CURVE_TO &&
                  ((G = isNaN(u) ? 0 : y - u), (B = isNaN(h) ? 0 : M - h)),
                b.type & (R.CURVE_TO | R.SMOOTH_CURVE_TO)
                  ? ((u = b.relative ? y + b.x2 : b.x2), (h = b.relative ? M + b.y2 : b.y2))
                  : ((u = NaN), (h = NaN)),
                b.type & R.SMOOTH_QUAD_TO
                  ? ((g = isNaN(g) ? y : 2 * y - g), (x = isNaN(x) ? M : 2 * M - x))
                  : b.type & R.QUAD_TO
                  ? ((g = b.relative ? y + b.x1 : b.x1), (x = b.relative ? M + b.y1 : b.y2))
                  : ((g = NaN), (x = NaN)),
                b.type & R.LINE_COMMANDS ||
                  (b.type & R.ARC && (0 === b.rX || 0 === b.rY || !b.lArcFlag)) ||
                  b.type & R.CURVE_TO ||
                  b.type & R.SMOOTH_CURVE_TO ||
                  b.type & R.QUAD_TO ||
                  b.type & R.SMOOTH_QUAD_TO)
              ) {
                var rt = void 0 === b.x ? 0 : b.relative ? b.x : b.x - y,
                  ut = void 0 === b.y ? 0 : b.relative ? b.y : b.y - M;
                (G = isNaN(g) ? (void 0 === b.x1 ? G : b.relative ? b.x : b.x1 - y) : g - y),
                  (B = isNaN(x) ? (void 0 === b.y1 ? B : b.relative ? b.y : b.y1 - M) : x - M);
                var X = void 0 === b.x2 ? 0 : b.relative ? b.x : b.x2 - y,
                  ft = void 0 === b.y2 ? 0 : b.relative ? b.y : b.y2 - M;
                F(rt) <= s &&
                  F(ut) <= s &&
                  F(G) <= s &&
                  F(B) <= s &&
                  F(X) <= s &&
                  F(ft) <= s &&
                  (Q = !0);
              }
              return (
                b.type & R.CLOSE_PATH && F(y - I) <= s && F(M - V) <= s && (Q = !0), Q ? [] : b
              );
            });
          }),
          (l.MATRIX = i),
          (l.ROTATE = function (s, u, h) {
            void 0 === u && (u = 0), void 0 === h && (h = 0), H(s, u, h);
            var g = Math.sin(s),
              x = Math.cos(s);
            return i(x, g, -g, x, u - u * x + h * g, h - u * g - h * x);
          }),
          (l.TRANSLATE = function (s, u) {
            return void 0 === u && (u = 0), H(s, u), i(1, 0, 0, 1, s, u);
          }),
          (l.SCALE = function (s, u) {
            return void 0 === u && (u = s), H(s, u), i(s, 0, 0, u, 0, 0);
          }),
          (l.SKEW_X = function (s) {
            return H(s), i(1, 0, Math.atan(s), 1, 0, 0);
          }),
          (l.SKEW_Y = function (s) {
            return H(s), i(1, Math.atan(s), 0, 1, 0, 0);
          }),
          (l.X_AXIS_SYMMETRY = function (s) {
            return void 0 === s && (s = 0), H(s), i(-1, 0, 0, 1, s, 0);
          }),
          (l.Y_AXIS_SYMMETRY = function (s) {
            return void 0 === s && (s = 0), H(s), i(1, 0, 0, -1, 0, s);
          }),
          (l.A_TO_C = function () {
            return n(function (s, u, h) {
              return R.ARC === s.type
                ? (function (g, x, b) {
                    var y, M, I, V;
                    g.cX || ct(g, x, b);
                    for (
                      var F = Math.min(g.phi1, g.phi2),
                        Q = Math.max(g.phi1, g.phi2) - F,
                        G = Math.ceil(Q / 90),
                        B = new Array(G),
                        rt = x,
                        ut = b,
                        X = 0;
                      X < G;
                      X++
                    ) {
                      var ft = xt(g.phi1, g.phi2, X / G),
                        gt = xt(g.phi1, g.phi2, (X + 1) / G),
                        St = (4 / 3) * Math.tan(((gt - ft) * lt) / 4),
                        Ct = [
                          Math.cos(ft * lt) - St * Math.sin(ft * lt),
                          Math.sin(ft * lt) + St * Math.cos(ft * lt),
                        ],
                        Ft = Ct[0],
                        Bt = Ct[1],
                        Mt = [Math.cos(gt * lt), Math.sin(gt * lt)],
                        Lt = Mt[0],
                        Vt = Mt[1],
                        zt = [Lt + St * Math.sin(gt * lt), Vt - St * Math.cos(gt * lt)],
                        At = zt[0],
                        yt = zt[1];
                      B[X] = { relative: g.relative, type: R.CURVE_TO };
                      var Ut = function (Ht, Qt) {
                        var $t = nt([Ht * g.rX, Qt * g.rY], g.xRot);
                        return [g.cX + $t[0], g.cY + $t[1]];
                      };
                      (y = Ut(Ft, Bt)),
                        (B[X].x1 = y[0]),
                        (B[X].y1 = y[1]),
                        (M = Ut(At, yt)),
                        (B[X].x2 = M[0]),
                        (B[X].y2 = M[1]),
                        (I = Ut(Lt, Vt)),
                        (B[X].x = I[0]),
                        (B[X].y = I[1]),
                        g.relative &&
                          ((B[X].x1 -= rt),
                          (B[X].y1 -= ut),
                          (B[X].x2 -= rt),
                          (B[X].y2 -= ut),
                          (B[X].x -= rt),
                          (B[X].y -= ut)),
                        (rt = (V = [B[X].x, B[X].y])[0]),
                        (ut = V[1]);
                    }
                    return B;
                  })(s, s.relative ? 0 : u, s.relative ? 0 : h)
                : s;
            });
          }),
          (l.ANNOTATE_ARCS = function () {
            return n(function (s, u, h) {
              return s.relative && ((u = 0), (h = 0)), R.ARC === s.type && ct(s, u, h), s;
            });
          }),
          (l.CLONE = function () {
            return function (s) {
              var u = {};
              for (var h in s) u[h] = s[h];
              return u;
            };
          }),
          (l.CALCULATE_BOUNDS = function () {
            var u = t(),
              h = r(),
              g = e(),
              x = n(function (b, y, M) {
                var I = g(
                  h(
                    u(
                      (function (b) {
                        var y = {};
                        for (var M in b) y[M] = b[M];
                        return y;
                      })(b),
                    ),
                  ),
                );
                function V(yt) {
                  yt > x.maxX && (x.maxX = yt), yt < x.minX && (x.minX = yt);
                }
                function F(yt) {
                  yt > x.maxY && (x.maxY = yt), yt < x.minY && (x.minY = yt);
                }
                if (
                  (I.type & R.DRAWING_COMMANDS && (V(y), F(M)),
                  I.type & R.HORIZ_LINE_TO && V(I.x),
                  I.type & R.VERT_LINE_TO && F(I.y),
                  I.type & R.LINE_TO && (V(I.x), F(I.y)),
                  I.type & R.CURVE_TO)
                ) {
                  V(I.x), F(I.y);
                  for (var Q = 0, G = Z(y, I.x1, I.x2, I.x); Q < G.length; Q++)
                    0 < (At = G[Q]) && 1 > At && V(_(y, I.x1, I.x2, I.x, At));
                  for (var B = 0, rt = Z(M, I.y1, I.y2, I.y); B < rt.length; B++)
                    0 < (At = rt[B]) && 1 > At && F(_(M, I.y1, I.y2, I.y, At));
                }
                if (I.type & R.ARC) {
                  V(I.x), F(I.y), ct(I, y, M);
                  for (
                    var ut = (I.xRot / 180) * Math.PI,
                      X = Math.cos(ut) * I.rX,
                      ft = Math.sin(ut) * I.rX,
                      gt = -Math.sin(ut) * I.rY,
                      mt = Math.cos(ut) * I.rY,
                      St =
                        I.phi1 < I.phi2
                          ? [I.phi1, I.phi2]
                          : -180 > I.phi2
                          ? [I.phi2 + 360, I.phi1 + 360]
                          : [I.phi2, I.phi1],
                      Ct = St[0],
                      Ft = St[1],
                      Bt = function (yt) {
                        var Qt = (180 * Math.atan2(yt[1], yt[0])) / Math.PI;
                        return Qt < Ct ? Qt + 360 : Qt;
                      },
                      Mt = 0,
                      Lt = dt(gt, -X, 0).map(Bt);
                    Mt < Lt.length;
                    Mt++
                  )
                    (At = Lt[Mt]) > Ct && At < Ft && V(tt(I.cX, X, gt, At));
                  for (var Vt = 0, zt = dt(mt, -ft, 0).map(Bt); Vt < zt.length; Vt++) {
                    var At;
                    (At = zt[Vt]) > Ct && At < Ft && F(tt(I.cY, ft, mt, At));
                  }
                }
                return b;
              });
            return (x.minX = 1 / 0), (x.maxX = -1 / 0), (x.minY = 1 / 0), (x.maxY = -1 / 0), x;
          });
      })(et || (et = {}));
      var k,
        st = (function () {
          function l() {}
          return (
            (l.prototype.round = function (t) {
              return this.transform(et.ROUND(t));
            }),
            (l.prototype.toAbs = function () {
              return this.transform(et.TO_ABS());
            }),
            (l.prototype.toRel = function () {
              return this.transform(et.TO_REL());
            }),
            (l.prototype.normalizeHVZ = function (t, e, r) {
              return this.transform(et.NORMALIZE_HVZ(t, e, r));
            }),
            (l.prototype.normalizeST = function () {
              return this.transform(et.NORMALIZE_ST());
            }),
            (l.prototype.qtToC = function () {
              return this.transform(et.QT_TO_C());
            }),
            (l.prototype.aToC = function () {
              return this.transform(et.A_TO_C());
            }),
            (l.prototype.sanitize = function (t) {
              return this.transform(et.SANITIZE(t));
            }),
            (l.prototype.translate = function (t, e) {
              return this.transform(et.TRANSLATE(t, e));
            }),
            (l.prototype.scale = function (t, e) {
              return this.transform(et.SCALE(t, e));
            }),
            (l.prototype.rotate = function (t, e, r) {
              return this.transform(et.ROTATE(t, e, r));
            }),
            (l.prototype.matrix = function (t, e, r, n, i, o) {
              return this.transform(et.MATRIX(t, e, r, n, i, o));
            }),
            (l.prototype.skewX = function (t) {
              return this.transform(et.SKEW_X(t));
            }),
            (l.prototype.skewY = function (t) {
              return this.transform(et.SKEW_Y(t));
            }),
            (l.prototype.xSymmetry = function (t) {
              return this.transform(et.X_AXIS_SYMMETRY(t));
            }),
            (l.prototype.ySymmetry = function (t) {
              return this.transform(et.Y_AXIS_SYMMETRY(t));
            }),
            (l.prototype.annotateArcs = function () {
              return this.transform(et.ANNOTATE_ARCS());
            }),
            l
          );
        })(),
        bt = function (l) {
          return ' ' === l || '\t' === l || '\r' === l || '\n' === l;
        },
        Et = function (l) {
          return '0'.charCodeAt(0) <= l.charCodeAt(0) && l.charCodeAt(0) <= '9'.charCodeAt(0);
        },
        Tt = (function (l) {
          function t() {
            var e = l.call(this) || this;
            return (
              (e.curNumber = ''),
              (e.curCommandType = -1),
              (e.curCommandRelative = !1),
              (e.canParseCommandOrComma = !0),
              (e.curNumberHasExp = !1),
              (e.curNumberHasExpDigits = !1),
              (e.curNumberHasDecimal = !1),
              (e.curArgs = []),
              e
            );
          }
          return (
            K(t, l),
            (t.prototype.finish = function (e) {
              if (
                (void 0 === e && (e = []),
                this.parse(' ', e),
                0 !== this.curArgs.length || !this.canParseCommandOrComma)
              )
                throw new SyntaxError('Unterminated command at the path end.');
              return e;
            }),
            (t.prototype.parse = function (e, r) {
              var n = this;
              void 0 === r && (r = []);
              for (
                var i = function (x) {
                    r.push(x), (n.curArgs.length = 0), (n.canParseCommandOrComma = !0);
                  },
                  o = 0;
                o < e.length;
                o++
              ) {
                var s = e[o],
                  u = !(
                    this.curCommandType !== R.ARC ||
                    (3 !== this.curArgs.length && 4 !== this.curArgs.length) ||
                    1 !== this.curNumber.length ||
                    ('0' !== this.curNumber && '1' !== this.curNumber)
                  ),
                  h = Et(s) && (('0' === this.curNumber && '0' === s) || u);
                if (!Et(s) || h)
                  if ('e' !== s && 'E' !== s)
                    if (
                      ('-' !== s && '+' !== s) ||
                      !this.curNumberHasExp ||
                      this.curNumberHasExpDigits
                    )
                      if ('.' !== s || this.curNumberHasExp || this.curNumberHasDecimal || u) {
                        if (this.curNumber && -1 !== this.curCommandType) {
                          var g = Number(this.curNumber);
                          if (isNaN(g)) throw new SyntaxError('Invalid number ending at ' + o);
                          if (this.curCommandType === R.ARC)
                            if (0 === this.curArgs.length || 1 === this.curArgs.length) {
                              if (0 > g)
                                throw new SyntaxError(
                                  'Expected positive number, got "' + g + '" at index "' + o + '"',
                                );
                            } else if (
                              (3 === this.curArgs.length || 4 === this.curArgs.length) &&
                              '0' !== this.curNumber &&
                              '1' !== this.curNumber
                            )
                              throw new SyntaxError(
                                'Expected a flag, got "' +
                                  this.curNumber +
                                  '" at index "' +
                                  o +
                                  '"',
                              );
                          this.curArgs.push(g),
                            this.curArgs.length === Pt[this.curCommandType] &&
                              (R.HORIZ_LINE_TO === this.curCommandType
                                ? i({
                                    type: R.HORIZ_LINE_TO,
                                    relative: this.curCommandRelative,
                                    x: g,
                                  })
                                : R.VERT_LINE_TO === this.curCommandType
                                ? i({
                                    type: R.VERT_LINE_TO,
                                    relative: this.curCommandRelative,
                                    y: g,
                                  })
                                : this.curCommandType === R.MOVE_TO ||
                                  this.curCommandType === R.LINE_TO ||
                                  this.curCommandType === R.SMOOTH_QUAD_TO
                                ? (i({
                                    type: this.curCommandType,
                                    relative: this.curCommandRelative,
                                    x: this.curArgs[0],
                                    y: this.curArgs[1],
                                  }),
                                  R.MOVE_TO === this.curCommandType &&
                                    (this.curCommandType = R.LINE_TO))
                                : this.curCommandType === R.CURVE_TO
                                ? i({
                                    type: R.CURVE_TO,
                                    relative: this.curCommandRelative,
                                    x1: this.curArgs[0],
                                    y1: this.curArgs[1],
                                    x2: this.curArgs[2],
                                    y2: this.curArgs[3],
                                    x: this.curArgs[4],
                                    y: this.curArgs[5],
                                  })
                                : this.curCommandType === R.SMOOTH_CURVE_TO
                                ? i({
                                    type: R.SMOOTH_CURVE_TO,
                                    relative: this.curCommandRelative,
                                    x2: this.curArgs[0],
                                    y2: this.curArgs[1],
                                    x: this.curArgs[2],
                                    y: this.curArgs[3],
                                  })
                                : this.curCommandType === R.QUAD_TO
                                ? i({
                                    type: R.QUAD_TO,
                                    relative: this.curCommandRelative,
                                    x1: this.curArgs[0],
                                    y1: this.curArgs[1],
                                    x: this.curArgs[2],
                                    y: this.curArgs[3],
                                  })
                                : this.curCommandType === R.ARC &&
                                  i({
                                    type: R.ARC,
                                    relative: this.curCommandRelative,
                                    rX: this.curArgs[0],
                                    rY: this.curArgs[1],
                                    xRot: this.curArgs[2],
                                    lArcFlag: this.curArgs[3],
                                    sweepFlag: this.curArgs[4],
                                    x: this.curArgs[5],
                                    y: this.curArgs[6],
                                  })),
                            (this.curNumber = ''),
                            (this.curNumberHasExpDigits = !1),
                            (this.curNumberHasExp = !1),
                            (this.curNumberHasDecimal = !1),
                            (this.canParseCommandOrComma = !0);
                        }
                        if (!bt(s))
                          if (',' === s && this.canParseCommandOrComma)
                            this.canParseCommandOrComma = !1;
                          else if ('+' !== s && '-' !== s && '.' !== s)
                            if (h) (this.curNumber = s), (this.curNumberHasDecimal = !1);
                            else {
                              if (0 !== this.curArgs.length)
                                throw new SyntaxError('Unterminated command at index ' + o + '.');
                              if (!this.canParseCommandOrComma)
                                throw new SyntaxError(
                                  'Unexpected character "' +
                                    s +
                                    '" at index ' +
                                    o +
                                    '. Command cannot follow comma',
                                );
                              if (((this.canParseCommandOrComma = !1), 'z' !== s && 'Z' !== s))
                                if ('h' === s || 'H' === s)
                                  (this.curCommandType = R.HORIZ_LINE_TO),
                                    (this.curCommandRelative = 'h' === s);
                                else if ('v' === s || 'V' === s)
                                  (this.curCommandType = R.VERT_LINE_TO),
                                    (this.curCommandRelative = 'v' === s);
                                else if ('m' === s || 'M' === s)
                                  (this.curCommandType = R.MOVE_TO),
                                    (this.curCommandRelative = 'm' === s);
                                else if ('l' === s || 'L' === s)
                                  (this.curCommandType = R.LINE_TO),
                                    (this.curCommandRelative = 'l' === s);
                                else if ('c' === s || 'C' === s)
                                  (this.curCommandType = R.CURVE_TO),
                                    (this.curCommandRelative = 'c' === s);
                                else if ('s' === s || 'S' === s)
                                  (this.curCommandType = R.SMOOTH_CURVE_TO),
                                    (this.curCommandRelative = 's' === s);
                                else if ('q' === s || 'Q' === s)
                                  (this.curCommandType = R.QUAD_TO),
                                    (this.curCommandRelative = 'q' === s);
                                else if ('t' === s || 'T' === s)
                                  (this.curCommandType = R.SMOOTH_QUAD_TO),
                                    (this.curCommandRelative = 't' === s);
                                else {
                                  if ('a' !== s && 'A' !== s)
                                    throw new SyntaxError(
                                      'Unexpected character "' + s + '" at index ' + o + '.',
                                    );
                                  (this.curCommandType = R.ARC),
                                    (this.curCommandRelative = 'a' === s);
                                }
                              else
                                r.push({ type: R.CLOSE_PATH }),
                                  (this.canParseCommandOrComma = !0),
                                  (this.curCommandType = -1);
                            }
                          else (this.curNumber = s), (this.curNumberHasDecimal = '.' === s);
                      } else (this.curNumber += s), (this.curNumberHasDecimal = !0);
                    else this.curNumber += s;
                  else (this.curNumber += s), (this.curNumberHasExp = !0);
                else (this.curNumber += s), (this.curNumberHasExpDigits = this.curNumberHasExp);
              }
              return r;
            }),
            (t.prototype.transform = function (e) {
              return Object.create(this, {
                parse: {
                  value: function (r, n) {
                    void 0 === n && (n = []);
                    for (
                      var i = 0, o = Object.getPrototypeOf(this).parse.call(this, r);
                      i < o.length;
                      i++
                    ) {
                      var u = e(o[i]);
                      Array.isArray(u) ? n.push.apply(n, u) : n.push(u);
                    }
                    return n;
                  },
                },
              });
            }),
            t
          );
        })(st),
        R = (function (l) {
          function t(e) {
            var r = l.call(this) || this;
            return (r.commands = 'string' == typeof e ? t.parse(e) : e), r;
          }
          return (
            K(t, l),
            (t.prototype.encode = function () {
              return t.encode(this.commands);
            }),
            (t.prototype.getBounds = function () {
              var e = et.CALCULATE_BOUNDS();
              return this.transform(e), e;
            }),
            (t.prototype.transform = function (e) {
              for (var r = [], n = 0, i = this.commands; n < i.length; n++) {
                var o = e(i[n]);
                Array.isArray(o) ? r.push.apply(r, o) : r.push(o);
              }
              return (this.commands = r), this;
            }),
            (t.encode = function (e) {
              return (function (l) {
                var t = '';
                Array.isArray(l) || (l = [l]);
                for (var e = 0; e < l.length; e++) {
                  var r = l[e];
                  if (r.type === R.CLOSE_PATH) t += 'z';
                  else if (r.type === R.HORIZ_LINE_TO) t += (r.relative ? 'h' : 'H') + r.x;
                  else if (r.type === R.VERT_LINE_TO) t += (r.relative ? 'v' : 'V') + r.y;
                  else if (r.type === R.MOVE_TO) t += (r.relative ? 'm' : 'M') + r.x + ' ' + r.y;
                  else if (r.type === R.LINE_TO) t += (r.relative ? 'l' : 'L') + r.x + ' ' + r.y;
                  else if (r.type === R.CURVE_TO)
                    t +=
                      (r.relative ? 'c' : 'C') +
                      r.x1 +
                      ' ' +
                      r.y1 +
                      ' ' +
                      r.x2 +
                      ' ' +
                      r.y2 +
                      ' ' +
                      r.x +
                      ' ' +
                      r.y;
                  else if (r.type === R.SMOOTH_CURVE_TO)
                    t += (r.relative ? 's' : 'S') + r.x2 + ' ' + r.y2 + ' ' + r.x + ' ' + r.y;
                  else if (r.type === R.QUAD_TO)
                    t += (r.relative ? 'q' : 'Q') + r.x1 + ' ' + r.y1 + ' ' + r.x + ' ' + r.y;
                  else if (r.type === R.SMOOTH_QUAD_TO)
                    t += (r.relative ? 't' : 'T') + r.x + ' ' + r.y;
                  else {
                    if (r.type !== R.ARC)
                      throw new Error(
                        'Unexpected command type "' + r.type + '" at index ' + e + '.',
                      );
                    t +=
                      (r.relative ? 'a' : 'A') +
                      r.rX +
                      ' ' +
                      r.rY +
                      ' ' +
                      r.xRot +
                      ' ' +
                      +r.lArcFlag +
                      ' ' +
                      +r.sweepFlag +
                      ' ' +
                      r.x +
                      ' ' +
                      r.y;
                  }
                }
                return t;
              })(e);
            }),
            (t.parse = function (e) {
              var r = new Tt(),
                n = [];
              return r.parse(e, n), r.finish(n), n;
            }),
            (t.CLOSE_PATH = 1),
            (t.MOVE_TO = 2),
            (t.HORIZ_LINE_TO = 4),
            (t.VERT_LINE_TO = 8),
            (t.LINE_TO = 16),
            (t.CURVE_TO = 32),
            (t.SMOOTH_CURVE_TO = 64),
            (t.QUAD_TO = 128),
            (t.SMOOTH_QUAD_TO = 256),
            (t.ARC = 512),
            (t.LINE_COMMANDS = t.LINE_TO | t.HORIZ_LINE_TO | t.VERT_LINE_TO),
            (t.DRAWING_COMMANDS =
              t.HORIZ_LINE_TO |
              t.VERT_LINE_TO |
              t.LINE_TO |
              t.CURVE_TO |
              t.SMOOTH_CURVE_TO |
              t.QUAD_TO |
              t.SMOOTH_QUAD_TO |
              t.ARC),
            t
          );
        })(st),
        Pt =
          (((k = {})[R.MOVE_TO] = 2),
          (k[R.LINE_TO] = 2),
          (k[R.HORIZ_LINE_TO] = 1),
          (k[R.VERT_LINE_TO] = 1),
          (k[R.CLOSE_PATH] = 0),
          (k[R.QUAD_TO] = 4),
          (k[R.SMOOTH_QUAD_TO] = 2),
          (k[R.CURVE_TO] = 6),
          (k[R.SMOOTH_CURVE_TO] = 4),
          (k[R.ARC] = 7),
          k);
      function vt(l) {
        return (vt =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(l);
      }
      a(4119);
      var Yt = [
          512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405,
          364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405,
          383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360,
          347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405,
          394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259,
          507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360,
          354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265,
          261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405,
          399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320,
          316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259,
          257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428,
          424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360,
          357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307,
          304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265,
          263, 261, 259,
        ],
        Jt = [
          9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18,
          18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19,
          20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21,
          21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
          21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
          22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23,
          23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
          23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
          23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        ];
      function re(l, t, e, r, n, i) {
        if (!(isNaN(i) || i < 1)) {
          i |= 0;
          var o = (function (l, t, e, r, n) {
            if (
              ('string' == typeof l && (l = document.getElementById(l)),
              !l || 'object' !== vt(l) || !('getContext' in l))
            )
              throw new TypeError(
                'Expecting canvas with `getContext` method in processCanvasRGB(A) calls!',
              );
            var i = l.getContext('2d');
            try {
              return i.getImageData(t, e, r, n);
            } catch (o) {
              throw new Error('unable to access image data: ' + o);
            }
          })(l, t, e, r, n);
          (o = (function (l, t, e, r, n, i) {
            for (
              var M,
                o = l.data,
                s = 2 * i + 1,
                u = r - 1,
                h = n - 1,
                g = i + 1,
                x = (g * (g + 1)) / 2,
                b = new fe(),
                y = b,
                I = 1;
              I < s;
              I++
            )
              (y = y.next = new fe()), I === g && (M = y);
            y.next = b;
            for (
              var V = null, F = null, Q = 0, G = 0, B = Yt[i], rt = Jt[i], ut = 0;
              ut < n;
              ut++
            ) {
              y = b;
              for (var X = o[G], ft = o[G + 1], gt = o[G + 2], mt = o[G + 3], St = 0; St < g; St++)
                (y.r = X), (y.g = ft), (y.b = gt), (y.a = mt), (y = y.next);
              for (
                var Ct = 0,
                  Ft = 0,
                  Bt = 0,
                  Mt = 0,
                  Lt = g * X,
                  Vt = g * ft,
                  zt = g * gt,
                  At = g * mt,
                  yt = x * X,
                  Ut = x * ft,
                  Ht = x * gt,
                  Qt = x * mt,
                  $t = 1;
                $t < g;
                $t++
              ) {
                var kt = G + ((u < $t ? u : $t) << 2),
                  ee = o[kt],
                  oe = o[kt + 1],
                  ze = o[kt + 2],
                  Ge = o[kt + 3],
                  Ee = g - $t;
                (yt += (y.r = ee) * Ee),
                  (Ut += (y.g = oe) * Ee),
                  (Ht += (y.b = ze) * Ee),
                  (Qt += (y.a = Ge) * Ee),
                  (Ct += ee),
                  (Ft += oe),
                  (Bt += ze),
                  (Mt += Ge),
                  (y = y.next);
              }
              (V = b), (F = M);
              for (var Te = 0; Te < r; Te++) {
                var Oe = (Qt * B) >> rt;
                if (((o[G + 3] = Oe), 0 !== Oe)) {
                  var Se = 255 / Oe;
                  (o[G] = ((yt * B) >> rt) * Se),
                    (o[G + 1] = ((Ut * B) >> rt) * Se),
                    (o[G + 2] = ((Ht * B) >> rt) * Se);
                } else o[G] = o[G + 1] = o[G + 2] = 0;
                (yt -= Lt),
                  (Ut -= Vt),
                  (Ht -= zt),
                  (Qt -= At),
                  (Lt -= V.r),
                  (Vt -= V.g),
                  (zt -= V.b),
                  (At -= V.a);
                var ue = Te + i + 1;
                (yt += Ct += V.r = o[(ue = (Q + (ue < u ? ue : u)) << 2)]),
                  (Ut += Ft += V.g = o[ue + 1]),
                  (Ht += Bt += V.b = o[ue + 2]),
                  (Qt += Mt += V.a = o[ue + 3]),
                  (V = V.next);
                var He = F.r,
                  Ye = F.g,
                  we = F.b,
                  ke = F.a;
                (Lt += He),
                  (Vt += Ye),
                  (zt += we),
                  (At += ke),
                  (Ct -= He),
                  (Ft -= Ye),
                  (Bt -= we),
                  (Mt -= ke),
                  (F = F.next),
                  (G += 4);
              }
              Q += r;
            }
            for (var le = 0; le < r; le++) {
              var Ie = o[(G = le << 2)],
                Ve = o[G + 1],
                Le = o[G + 2],
                Kt = o[G + 3],
                Or = g * Ie,
                Sr = g * Ve,
                Ar = g * Le,
                Cr = g * Kt,
                sr = x * Ie,
                or = x * Ve,
                ur = x * Le,
                lr = x * Kt;
              y = b;
              for (var An = 0; An < g; An++)
                (y.r = Ie), (y.g = Ve), (y.b = Le), (y.a = Kt), (y = y.next);
              for (var Cn = r, Pr = 0, Rr = 0, Nr = 0, Mr = 0, hr = 1; hr <= i; hr++) {
                var fr = g - hr;
                (sr += (y.r = Ie = o[(G = (Cn + le) << 2)]) * fr),
                  (or += (y.g = Ve = o[G + 1]) * fr),
                  (ur += (y.b = Le = o[G + 2]) * fr),
                  (lr += (y.a = Kt = o[G + 3]) * fr),
                  (Mr += Ie),
                  (Pr += Ve),
                  (Rr += Le),
                  (Nr += Kt),
                  (y = y.next),
                  hr < h && (Cn += r);
              }
              (G = le), (V = b), (F = M);
              for (var wr = 0; wr < n; wr++) {
                var Zt = G << 2;
                (o[Zt + 3] = Kt = (lr * B) >> rt),
                  Kt > 0
                    ? ((o[Zt] = ((sr * B) >> rt) * (Kt = 255 / Kt)),
                      (o[Zt + 1] = ((or * B) >> rt) * Kt),
                      (o[Zt + 2] = ((ur * B) >> rt) * Kt))
                    : (o[Zt] = o[Zt + 1] = o[Zt + 2] = 0),
                  (sr -= Or),
                  (or -= Sr),
                  (ur -= Ar),
                  (lr -= Cr),
                  (Or -= V.r),
                  (Sr -= V.g),
                  (Ar -= V.b),
                  (Cr -= V.a),
                  (Zt = (le + ((Zt = wr + g) < h ? Zt : h) * r) << 2),
                  (sr += Mr += V.r = o[Zt]),
                  (or += Pr += V.g = o[Zt + 1]),
                  (ur += Rr += V.b = o[Zt + 2]),
                  (lr += Nr += V.a = o[Zt + 3]),
                  (V = V.next),
                  (Or += Ie = F.r),
                  (Sr += Ve = F.g),
                  (Ar += Le = F.b),
                  (Cr += Kt = F.a),
                  (Mr -= Ie),
                  (Pr -= Ve),
                  (Rr -= Le),
                  (Nr -= Kt),
                  (F = F.next),
                  (G += r);
              }
            }
            return l;
          })(o, 0, 0, r, n, i)),
            l.getContext('2d').putImageData(o, t, e);
        }
      }
      var fe = function l() {
          (function (l, t) {
            if (!(l instanceof t)) throw new TypeError('Cannot call a class as a function');
          })(this, l),
            (this.r = 0),
            (this.g = 0),
            (this.b = 0),
            (this.a = 0),
            (this.next = null);
        },
        We = Object.freeze({
          __proto__: null,
          offscreen: function () {
            var { DOMParser: l } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = {
                window: null,
                ignoreAnimation: !0,
                ignoreMouse: !0,
                DOMParser: l,
                createCanvas: (e, r) => new OffscreenCanvas(e, r),
                createImage: (e) =>
                  c(function* () {
                    var r = yield fetch(e),
                      n = yield r.blob();
                    return yield createImageBitmap(n);
                  })(),
              };
            return (
              ('undefined' != typeof DOMParser || void 0 === l) &&
                Reflect.deleteProperty(t, 'DOMParser'),
              t
            );
          },
          node: function (l) {
            var { DOMParser: t, canvas: e, fetch: r } = l;
            return {
              window: null,
              ignoreAnimation: !0,
              ignoreMouse: !0,
              DOMParser: t,
              fetch: r,
              createCanvas: e.createCanvas,
              createImage: e.loadImage,
            };
          },
        });
      function qt(l) {
        return l.replace(/(?!\u3000)\s+/gm, ' ');
      }
      function $e(l) {
        return l.replace(/^[\n \t]+/, '');
      }
      function De(l) {
        return l.replace(/[\n \t]+$/, '');
      }
      function Gt(l) {
        return ((l || '').match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm) || []).map(
          parseFloat,
        );
      }
      var Pe = /^[A-Z-]+$/;
      function Ze(l) {
        return Pe.test(l) ? l.toLowerCase() : l;
      }
      function Fe(l) {
        var t = /url\(('([^']+)'|"([^"]+)"|([^'")]+))\)/.exec(l) || [];
        return t[2] || t[3] || t[4];
      }
      function Be(l) {
        if (!l.startsWith('rgb')) return l;
        var t = 3;
        return l.replace(/\d+(\.\d+)?/g, (r, n) =>
          t-- && n ? String(Math.round(parseFloat(r))) : r,
        );
      }
      var Je = /(\[[^\]]+\])/g,
        vr = /(#[^\s+>~.[:]+)/g,
        qe = /(\.[^\s+>~.[:]+)/g,
        cr = /(::[^\s+>~.[:]+|:first-line|:first-letter|:before|:after)/gi,
        pe = /(:[\w-]+\([^)]*\))/gi,
        ye = /(:[^\s+>~.[:]+)/g,
        Xe = /([^\s+>~.[:]+)/g;
      function z(l, t) {
        var e = t.exec(l);
        return e ? [l.replace(t, ' '), e.length] : [l, 0];
      }
      function at(l) {
        var t = [0, 0, 0],
          e = l.replace(/:not\(([^)]*)\)/g, '     $1 ').replace(/{[\s\S]*/gm, ' '),
          r = 0;
        return (
          ([e, r] = z(e, Je)),
          (t[1] += r),
          ([e, r] = z(e, vr)),
          (t[0] += r),
          ([e, r] = z(e, qe)),
          (t[1] += r),
          ([e, r] = z(e, cr)),
          (t[2] += r),
          ([e, r] = z(e, pe)),
          (t[1] += r),
          ([e, r] = z(e, ye)),
          (t[1] += r),
          (e = e.replace(/[*\s+>~]/g, ' ').replace(/[#.]/g, ' ')),
          ([e, r] = z(e, Xe)),
          (t[2] += r),
          t.join('')
        );
      }
      var it = 1e-8;
      function ht(l) {
        return Math.sqrt(Math.pow(l[0], 2) + Math.pow(l[1], 2));
      }
      function pt(l, t) {
        return (l[0] * t[0] + l[1] * t[1]) / (ht(l) * ht(t));
      }
      function Rt(l, t) {
        return (l[0] * t[1] < l[1] * t[0] ? -1 : 1) * Math.acos(pt(l, t));
      }
      function Wt(l) {
        return l * l * l;
      }
      function ne(l) {
        return 3 * l * l * (1 - l);
      }
      function ie(l) {
        return 3 * l * (1 - l) * (1 - l);
      }
      function se(l) {
        return (1 - l) * (1 - l) * (1 - l);
      }
      function Xt(l) {
        return l * l;
      }
      function _t(l) {
        return 2 * l * (1 - l);
      }
      function me(l) {
        return (1 - l) * (1 - l);
      }
      let q = (() => {
        class l {
          constructor(e, r, n) {
            (this.document = e), (this.name = r), (this.value = n), (this.isNormalizedColor = !1);
          }
          static empty(e) {
            return new l(e, 'EMPTY', '');
          }
          split() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ' ',
              { document: r, name: n } = this;
            return qt(this.getString())
              .trim()
              .split(e)
              .map((i) => new l(r, n, i));
          }
          hasValue(e) {
            var { value: r } = this;
            return null !== r && '' !== r && (e || 0 !== r) && void 0 !== r;
          }
          isString(e) {
            var { value: r } = this,
              n = 'string' == typeof r;
            return n && e ? e.test(r) : n;
          }
          isUrlDefinition() {
            return this.isString(/^url\(/);
          }
          isPixels() {
            if (!this.hasValue()) return !1;
            var e = this.getString();
            switch (!0) {
              case e.endsWith('px'):
              case /^[0-9]+$/.test(e):
                return !0;
              default:
                return !1;
            }
          }
          setValue(e) {
            return (this.value = e), this;
          }
          getValue(e) {
            return void 0 === e || this.hasValue() ? this.value : e;
          }
          getNumber(e) {
            if (!this.hasValue()) return void 0 === e ? 0 : parseFloat(e);
            var { value: r } = this,
              n = parseFloat(r);
            return this.isString(/%$/) && (n /= 100), n;
          }
          getString(e) {
            return void 0 === e || this.hasValue()
              ? void 0 === this.value
                ? ''
                : String(this.value)
              : String(e);
          }
          getColor(e) {
            var r = this.getString(e);
            return (
              this.isNormalizedColor ||
                ((this.isNormalizedColor = !0), (r = Be(r)), (this.value = r)),
              r
            );
          }
          getDpi() {
            return 96;
          }
          getRem() {
            return this.document.rootEmSize;
          }
          getEm() {
            return this.document.emSize;
          }
          getUnits() {
            return this.getString().replace(/[0-9.-]/g, '');
          }
          getPixels(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this.hasValue()) return 0;
            var [n, i] = 'boolean' == typeof e ? [void 0, e] : [e],
              { viewPort: o } = this.document.screen;
            switch (!0) {
              case this.isString(/vmin$/):
                return (this.getNumber() / 100) * Math.min(o.computeSize('x'), o.computeSize('y'));
              case this.isString(/vmax$/):
                return (this.getNumber() / 100) * Math.max(o.computeSize('x'), o.computeSize('y'));
              case this.isString(/vw$/):
                return (this.getNumber() / 100) * o.computeSize('x');
              case this.isString(/vh$/):
                return (this.getNumber() / 100) * o.computeSize('y');
              case this.isString(/rem$/):
                return this.getNumber() * this.getRem();
              case this.isString(/em$/):
                return this.getNumber() * this.getEm();
              case this.isString(/ex$/):
                return (this.getNumber() * this.getEm()) / 2;
              case this.isString(/px$/):
                return this.getNumber();
              case this.isString(/pt$/):
                return this.getNumber() * this.getDpi() * (1 / 72);
              case this.isString(/pc$/):
                return 15 * this.getNumber();
              case this.isString(/cm$/):
                return (this.getNumber() * this.getDpi()) / 2.54;
              case this.isString(/mm$/):
                return (this.getNumber() * this.getDpi()) / 25.4;
              case this.isString(/in$/):
                return this.getNumber() * this.getDpi();
              case this.isString(/%$/) && i:
                return this.getNumber() * this.getEm();
              case this.isString(/%$/):
                return this.getNumber() * o.computeSize(n);
              default:
                var s = this.getNumber();
                return r && s < 1 ? s * o.computeSize(n) : s;
            }
          }
          getMilliseconds() {
            return this.hasValue()
              ? this.isString(/ms$/)
                ? this.getNumber()
                : 1e3 * this.getNumber()
              : 0;
          }
          getRadians() {
            if (!this.hasValue()) return 0;
            switch (!0) {
              case this.isString(/deg$/):
                return this.getNumber() * (Math.PI / 180);
              case this.isString(/grad$/):
                return this.getNumber() * (Math.PI / 200);
              case this.isString(/rad$/):
                return this.getNumber();
              default:
                return this.getNumber() * (Math.PI / 180);
            }
          }
          getDefinition() {
            var e = this.getString(),
              r = /#([^)'"]+)/.exec(e);
            return r && (r = r[1]), r || (r = e), this.document.definitions[r];
          }
          getFillStyleDefinition(e, r) {
            var n = this.getDefinition();
            if (!n) return null;
            if ('function' == typeof n.createGradient)
              return n.createGradient(this.document.ctx, e, r);
            if ('function' == typeof n.createPattern) {
              if (n.getHrefAttribute().hasValue()) {
                var i = n.getAttribute('patternTransform');
                (n = n.getHrefAttribute().getDefinition()),
                  i.hasValue() && n.getAttribute('patternTransform', !0).setValue(i.value);
              }
              return n.createPattern(this.document.ctx, e, r);
            }
            return null;
          }
          getTextBaseline() {
            return this.hasValue() ? l.textBaselineMapping[this.getString()] : null;
          }
          addOpacity(e) {
            for (
              var r = this.getColor(), n = r.length, i = 0, o = 0;
              o < n && (',' === r[o] && i++, 3 !== i);
              o++
            );
            if (e.hasValue() && this.isString() && 3 !== i) {
              var s = new L(r);
              s.ok && ((s.alpha = e.getNumber()), (r = s.toRGBA()));
            }
            return new l(this.document, this.name, r);
          }
        }
        return (
          (l.textBaselineMapping = {
            baseline: 'alphabetic',
            'before-edge': 'top',
            'text-before-edge': 'top',
            middle: 'middle',
            central: 'middle',
            'after-edge': 'bottom',
            'text-after-edge': 'bottom',
            ideographic: 'ideographic',
            alphabetic: 'alphabetic',
            hanging: 'hanging',
            mathematical: 'alphabetic',
          }),
          l
        );
      })();
      class Ue {
        constructor() {
          this.viewPorts = [];
        }
        clear() {
          this.viewPorts = [];
        }
        setCurrent(t, e) {
          this.viewPorts.push({ width: t, height: e });
        }
        removeCurrent() {
          this.viewPorts.pop();
        }
        getCurrent() {
          var { viewPorts: t } = this;
          return t[t.length - 1];
        }
        get width() {
          return this.getCurrent().width;
        }
        get height() {
          return this.getCurrent().height;
        }
        computeSize(t) {
          return 'number' == typeof t
            ? t
            : 'x' === t
            ? this.width
            : 'y' === t
            ? this.height
            : Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2)) / Math.sqrt(2);
        }
      }
      class wt {
        constructor(t, e) {
          (this.x = t), (this.y = e);
        }
        static parse(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            [r = e, n = e] = Gt(t);
          return new wt(r, n);
        }
        static parseScale(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            [r = e, n = r] = Gt(t);
          return new wt(r, n);
        }
        static parsePath(t) {
          for (var e = Gt(t), r = e.length, n = [], i = 0; i < r; i += 2)
            n.push(new wt(e[i], e[i + 1]));
          return n;
        }
        angleTo(t) {
          return Math.atan2(t.y - this.y, t.x - this.x);
        }
        applyTransform(t) {
          var { x: e, y: r } = this,
            i = e * t[1] + r * t[3] + t[5];
          (this.x = e * t[0] + r * t[2] + t[4]), (this.y = i);
        }
      }
      class Ir {
        constructor(t) {
          (this.screen = t),
            (this.working = !1),
            (this.events = []),
            (this.eventElements = []),
            (this.onClick = this.onClick.bind(this)),
            (this.onMouseMove = this.onMouseMove.bind(this));
        }
        isWorking() {
          return this.working;
        }
        start() {
          if (!this.working) {
            var { screen: t, onClick: e, onMouseMove: r } = this,
              n = t.ctx.canvas;
            (n.onclick = e), (n.onmousemove = r), (this.working = !0);
          }
        }
        stop() {
          if (this.working) {
            var t = this.screen.ctx.canvas;
            (this.working = !1), (t.onclick = null), (t.onmousemove = null);
          }
        }
        hasEvents() {
          return this.working && this.events.length > 0;
        }
        runEvents() {
          if (this.working) {
            var { screen: t, events: e, eventElements: r } = this,
              { style: n } = t.ctx.canvas;
            n && (n.cursor = ''),
              e.forEach((i, o) => {
                for (var { run: s } = i, u = r[o]; u; ) s(u), (u = u.parent);
              }),
              (this.events = []),
              (this.eventElements = []);
          }
        }
        checkPath(t, e) {
          if (this.working && e) {
            var { events: r, eventElements: n } = this;
            r.forEach((i, o) => {
              var { x: s, y: u } = i;
              !n[o] && e.isPointInPath && e.isPointInPath(s, u) && (n[o] = t);
            });
          }
        }
        checkBoundingBox(t, e) {
          if (this.working && e) {
            var { events: r, eventElements: n } = this;
            r.forEach((i, o) => {
              var { x: s, y: u } = i;
              !n[o] && e.isPointInBox(s, u) && (n[o] = t);
            });
          }
        }
        mapXY(t, e) {
          for (var { window: r, ctx: n } = this.screen, i = new wt(t, e), o = n.canvas; o; )
            (i.x -= o.offsetLeft), (i.y -= o.offsetTop), (o = o.offsetParent);
          return r.scrollX && (i.x += r.scrollX), r.scrollY && (i.y += r.scrollY), i;
        }
        onClick(t) {
          var { x: e, y: r } = this.mapXY(t.clientX, t.clientY);
          this.events.push({
            type: 'onclick',
            x: e,
            y: r,
            run(n) {
              n.onClick && n.onClick();
            },
          });
        }
        onMouseMove(t) {
          var { x: e, y: r } = this.mapXY(t.clientX, t.clientY);
          this.events.push({
            type: 'onmousemove',
            x: e,
            y: r,
            run(n) {
              n.onMouseMove && n.onMouseMove();
            },
          });
        }
      }
      var Vr = 'undefined' != typeof window ? window : null,
        Lr = 'undefined' != typeof fetch ? fetch.bind(void 0) : null;
      let gr = (() => {
        class l {
          constructor(e) {
            var { fetch: r = Lr, window: n = Vr } =
              arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            (this.ctx = e),
              (this.FRAMERATE = 30),
              (this.MAX_VIRTUAL_PIXELS = 3e4),
              (this.CLIENT_WIDTH = 800),
              (this.CLIENT_HEIGHT = 600),
              (this.viewPort = new Ue()),
              (this.mouse = new Ir(this)),
              (this.animations = []),
              (this.waits = []),
              (this.frameDuration = 0),
              (this.isReadyLock = !1),
              (this.isFirstRender = !0),
              (this.intervalId = null),
              (this.window = n),
              (this.fetch = r);
          }
          wait(e) {
            this.waits.push(e);
          }
          ready() {
            return this.readyPromise ? this.readyPromise : Promise.resolve();
          }
          isReady() {
            if (this.isReadyLock) return !0;
            var e = this.waits.every((r) => r());
            return (
              e && ((this.waits = []), this.resolveReady && this.resolveReady()),
              (this.isReadyLock = e),
              e
            );
          }
          setDefaults(e) {
            (e.strokeStyle = 'rgba(0,0,0,0)'),
              (e.lineCap = 'butt'),
              (e.lineJoin = 'miter'),
              (e.miterLimit = 4);
          }
          setViewBox(e) {
            var {
                document: r,
                ctx: n,
                aspectRatio: i,
                width: o,
                desiredWidth: s,
                height: u,
                desiredHeight: h,
                minX: g = 0,
                minY: x = 0,
                refX: b,
                refY: y,
                clip: M = !1,
                clipX: I = 0,
                clipY: V = 0,
              } = e,
              F = qt(i).replace(/^defer\s/, ''),
              [Q, G] = F.split(' '),
              B = Q || 'xMidYMid',
              rt = G || 'meet',
              ut = o / s,
              X = u / h,
              ft = Math.min(ut, X),
              gt = Math.max(ut, X),
              mt = s,
              St = h;
            'meet' === rt && ((mt *= ft), (St *= ft)), 'slice' === rt && ((mt *= gt), (St *= gt));
            var Ct = new q(r, 'refX', b),
              Ft = new q(r, 'refY', y),
              Bt = Ct.hasValue() && Ft.hasValue();
            if ((Bt && n.translate(-ft * Ct.getPixels('x'), -ft * Ft.getPixels('y')), M)) {
              var Mt = ft * I,
                Lt = ft * V;
              n.beginPath(),
                n.moveTo(Mt, Lt),
                n.lineTo(o, Lt),
                n.lineTo(o, u),
                n.lineTo(Mt, u),
                n.closePath(),
                n.clip();
            }
            if (!Bt) {
              var Vt = 'meet' === rt && ft === X,
                zt = 'slice' === rt && gt === X,
                At = 'meet' === rt && ft === ut,
                yt = 'slice' === rt && gt === ut;
              B.startsWith('xMid') && (Vt || zt) && n.translate(o / 2 - mt / 2, 0),
                B.endsWith('YMid') && (At || yt) && n.translate(0, u / 2 - St / 2),
                B.startsWith('xMax') && (Vt || zt) && n.translate(o - mt, 0),
                B.endsWith('YMax') && (At || yt) && n.translate(0, u - St);
            }
            switch (!0) {
              case 'none' === B:
                n.scale(ut, X);
                break;
              case 'meet' === rt:
                n.scale(ft, ft);
                break;
              case 'slice' === rt:
                n.scale(gt, gt);
            }
            n.translate(-g, -x);
          }
          start(e) {
            var {
                enableRedraw: r = !1,
                ignoreMouse: n = !1,
                ignoreAnimation: i = !1,
                ignoreDimensions: o = !1,
                ignoreClear: s = !1,
                forceRedraw: u,
                scaleWidth: h,
                scaleHeight: g,
                offsetX: x,
                offsetY: b,
              } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              { FRAMERATE: y, mouse: M } = this,
              I = 1e3 / y;
            if (
              ((this.frameDuration = I),
              (this.readyPromise = new Promise((B) => {
                this.resolveReady = B;
              })),
              this.isReady() && this.render(e, o, s, h, g, x, b),
              r)
            ) {
              var V = Date.now(),
                F = V,
                Q = 0,
                G = () => {
                  (V = Date.now()),
                    (Q = V - F) >= I &&
                      ((F = V - (Q % I)),
                      this.shouldUpdate(i, u) && (this.render(e, o, s, h, g, x, b), M.runEvents())),
                    (this.intervalId = w(G));
                };
              n || M.start(), (this.intervalId = w(G));
            }
          }
          stop() {
            this.intervalId && (w.cancel(this.intervalId), (this.intervalId = null)),
              this.mouse.stop();
          }
          shouldUpdate(e, r) {
            if (!e) {
              var { frameDuration: n } = this;
              if (this.animations.reduce((o, s) => s.update(n) || o, !1)) return !0;
            }
            return !!(
              ('function' == typeof r && r()) ||
              (!this.isReadyLock && this.isReady()) ||
              this.mouse.hasEvents()
            );
          }
          render(e, r, n, i, o, s, u) {
            var { CLIENT_WIDTH: h, CLIENT_HEIGHT: g, viewPort: x, ctx: b, isFirstRender: y } = this,
              M = b.canvas;
            x.clear(), M.width && M.height ? x.setCurrent(M.width, M.height) : x.setCurrent(h, g);
            var I = e.getStyle('width'),
              V = e.getStyle('height');
            !r &&
              (y || ('number' != typeof i && 'number' != typeof o)) &&
              (I.hasValue() &&
                ((M.width = I.getPixels('x')),
                M.style && (M.style.width = ''.concat(M.width, 'px'))),
              V.hasValue() &&
                ((M.height = V.getPixels('y')),
                M.style && (M.style.height = ''.concat(M.height, 'px'))));
            var F = M.clientWidth || M.width,
              Q = M.clientHeight || M.height;
            if (
              (r &&
                I.hasValue() &&
                V.hasValue() &&
                ((F = I.getPixels('x')), (Q = V.getPixels('y'))),
              x.setCurrent(F, Q),
              'number' == typeof s && e.getAttribute('x', !0).setValue(s),
              'number' == typeof u && e.getAttribute('y', !0).setValue(u),
              'number' == typeof i || 'number' == typeof o)
            ) {
              var G = Gt(e.getAttribute('viewBox').getString()),
                B = 0,
                rt = 0;
              if ('number' == typeof i) {
                var ut = e.getStyle('width');
                ut.hasValue() ? (B = ut.getPixels('x') / i) : isNaN(G[2]) || (B = G[2] / i);
              }
              if ('number' == typeof o) {
                var X = e.getStyle('height');
                X.hasValue() ? (rt = X.getPixels('y') / o) : isNaN(G[3]) || (rt = G[3] / o);
              }
              B || (B = rt),
                rt || (rt = B),
                e.getAttribute('width', !0).setValue(i),
                e.getAttribute('height', !0).setValue(o);
              var ft = e.getStyle('transform', !0, !0);
              ft.setValue(
                ''
                  .concat(ft.getString(), ' scale(')
                  .concat(1 / B, ', ')
                  .concat(1 / rt, ')'),
              );
            }
            n || b.clearRect(0, 0, F, Q), e.render(b), y && (this.isFirstRender = !1);
          }
        }
        return (l.defaultWindow = Vr), (l.defaultFetch = Lr), l;
      })();
      var { defaultFetch: Pn } = gr,
        Rn = 'undefined' != typeof DOMParser ? DOMParser : null;
      class _e {
        constructor() {
          var { fetch: t = Pn, DOMParser: e = Rn } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (this.fetch = t), (this.DOMParser = e);
        }
        parse(t) {
          var e = this;
          return c(function* () {
            return t.startsWith('<') ? e.parseFromString(t) : e.load(t);
          })();
        }
        parseFromString(t) {
          var e = new this.DOMParser();
          try {
            return this.checkDocument(e.parseFromString(t, 'image/svg+xml'));
          } catch (r) {
            return this.checkDocument(e.parseFromString(t, 'text/xml'));
          }
        }
        checkDocument(t) {
          var e = t.getElementsByTagName('parsererror')[0];
          if (e) throw new Error(e.textContent);
          return t;
        }
        load(t) {
          var e = this;
          return c(function* () {
            var r = yield e.fetch(t),
              n = yield r.text();
            return e.parseFromString(n);
          })();
        }
      }
      class Dr {
        constructor(t, e) {
          (this.type = 'translate'), (this.point = null), (this.point = wt.parse(e));
        }
        apply(t) {
          var { x: e, y: r } = this.point;
          t.translate(e || 0, r || 0);
        }
        unapply(t) {
          var { x: e, y: r } = this.point;
          t.translate(-1 * e || 0, -1 * r || 0);
        }
        applyToPoint(t) {
          var { x: e, y: r } = this.point;
          t.applyTransform([1, 0, 0, 1, e || 0, r || 0]);
        }
      }
      class Fr {
        constructor(t, e, r) {
          (this.type = 'rotate'),
            (this.angle = null),
            (this.originX = null),
            (this.originY = null),
            (this.cx = 0),
            (this.cy = 0);
          var n = Gt(e);
          (this.angle = new q(t, 'angle', n[0])),
            (this.originX = r[0]),
            (this.originY = r[1]),
            (this.cx = n[1] || 0),
            (this.cy = n[2] || 0);
        }
        apply(t) {
          var { cx: e, cy: r, originX: n, originY: i, angle: o } = this,
            s = e + n.getPixels('x'),
            u = r + i.getPixels('y');
          t.translate(s, u), t.rotate(o.getRadians()), t.translate(-s, -u);
        }
        unapply(t) {
          var { cx: e, cy: r, originX: n, originY: i, angle: o } = this,
            s = e + n.getPixels('x'),
            u = r + i.getPixels('y');
          t.translate(s, u), t.rotate(-1 * o.getRadians()), t.translate(-s, -u);
        }
        applyToPoint(t) {
          var { cx: e, cy: r, angle: n } = this,
            i = n.getRadians();
          t.applyTransform([1, 0, 0, 1, e || 0, r || 0]),
            t.applyTransform([Math.cos(i), Math.sin(i), -Math.sin(i), Math.cos(i), 0, 0]),
            t.applyTransform([1, 0, 0, 1, -e || 0, -r || 0]);
        }
      }
      class Br {
        constructor(t, e, r) {
          (this.type = 'scale'), (this.scale = null), (this.originX = null), (this.originY = null);
          var n = wt.parseScale(e);
          (0 === n.x || 0 === n.y) && ((n.x = it), (n.y = it)),
            (this.scale = n),
            (this.originX = r[0]),
            (this.originY = r[1]);
        }
        apply(t) {
          var {
              scale: { x: e, y: r },
              originX: n,
              originY: i,
            } = this,
            o = n.getPixels('x'),
            s = i.getPixels('y');
          t.translate(o, s), t.scale(e, r || e), t.translate(-o, -s);
        }
        unapply(t) {
          var {
              scale: { x: e, y: r },
              originX: n,
              originY: i,
            } = this,
            o = n.getPixels('x'),
            s = i.getPixels('y');
          t.translate(o, s), t.scale(1 / e, 1 / r || e), t.translate(-o, -s);
        }
        applyToPoint(t) {
          var { x: e, y: r } = this.scale;
          t.applyTransform([e || 0, 0, 0, r || 0, 0, 0]);
        }
      }
      class dr {
        constructor(t, e, r) {
          (this.type = 'matrix'),
            (this.matrix = []),
            (this.originX = null),
            (this.originY = null),
            (this.matrix = Gt(e)),
            (this.originX = r[0]),
            (this.originY = r[1]);
        }
        apply(t) {
          var { originX: e, originY: r, matrix: n } = this,
            i = e.getPixels('x'),
            o = r.getPixels('y');
          t.translate(i, o), t.transform(n[0], n[1], n[2], n[3], n[4], n[5]), t.translate(-i, -o);
        }
        unapply(t) {
          var { originX: e, originY: r, matrix: n } = this,
            i = n[0],
            o = n[2],
            s = n[4],
            u = n[1],
            h = n[3],
            g = n[5],
            M = 1 / (i * (1 * h - 0 * g) - o * (1 * u - 0 * g) + s * (0 * u - 0 * h)),
            I = e.getPixels('x'),
            V = r.getPixels('y');
          t.translate(I, V),
            t.transform(
              M * (1 * h - 0 * g),
              M * (0 * g - 1 * u),
              M * (0 * s - 1 * o),
              M * (1 * i - 0 * s),
              M * (o * g - s * h),
              M * (s * u - i * g),
            ),
            t.translate(-I, -V);
        }
        applyToPoint(t) {
          t.applyTransform(this.matrix);
        }
      }
      class pr extends dr {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = 'skew'),
            (this.angle = null),
            (this.angle = new q(t, 'angle', e));
        }
      }
      class Ur extends pr {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = 'skewX'),
            (this.matrix = [1, 0, Math.tan(this.angle.getRadians()), 1, 0, 0]);
        }
      }
      class jr extends pr {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = 'skewY'),
            (this.matrix = [1, Math.tan(this.angle.getRadians()), 0, 1, 0, 0]);
        }
      }
      let tr = (() => {
          class l {
            constructor(e, r, n) {
              (this.document = e), (this.transforms = []);
              var i = (function (l) {
                return qt(l)
                  .trim()
                  .replace(/\)([a-zA-Z])/g, ') $1')
                  .replace(/\)(\s?,\s?)/g, ') ')
                  .split(/\s(?=[a-z])/);
              })(r);
              i.forEach((o) => {
                if ('none' !== o) {
                  var [s, u] = (function (l) {
                      var [t, e] = l.split('(');
                      return [t.trim(), e.trim().replace(')', '')];
                    })(o),
                    h = l.transformTypes[s];
                  void 0 !== h && this.transforms.push(new h(this.document, u, n));
                }
              });
            }
            static fromElement(e, r) {
              var n = r.getStyle('transform', !1, !0),
                [i, o = i] = r.getStyle('transform-origin', !1, !0).split(),
                s = [i, o];
              return n.hasValue() ? new l(e, n.getString(), s) : null;
            }
            apply(e) {
              for (var { transforms: r } = this, n = r.length, i = 0; i < n; i++) r[i].apply(e);
            }
            unapply(e) {
              for (var { transforms: r } = this, i = r.length - 1; i >= 0; i--) r[i].unapply(e);
            }
            applyToPoint(e) {
              for (var { transforms: r } = this, n = r.length, i = 0; i < n; i++)
                r[i].applyToPoint(e);
            }
          }
          return (
            (l.transformTypes = {
              translate: Dr,
              rotate: Fr,
              scale: Br,
              matrix: dr,
              skewX: Ur,
              skewY: jr,
            }),
            l
          );
        })(),
        It = (() => {
          class l {
            constructor(e, r) {
              var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              if (
                ((this.document = e),
                (this.node = r),
                (this.captureTextNodes = n),
                (this.attributes = {}),
                (this.styles = {}),
                (this.stylesSpecificity = {}),
                (this.animationFrozen = !1),
                (this.animationFrozenValue = ''),
                (this.parent = null),
                (this.children = []),
                r && 1 === r.nodeType)
              ) {
                Array.from(r.attributes).forEach((u) => {
                  var h = Ze(u.nodeName);
                  this.attributes[h] = new q(e, h, u.value);
                }),
                  this.addStylesFromStyleDefinition(),
                  this.getAttribute('style').hasValue() &&
                    this.getAttribute('style')
                      .getString()
                      .split(';')
                      .map((u) => u.trim())
                      .forEach((u) => {
                        if (u) {
                          var [h, g] = u.split(':').map((x) => x.trim());
                          this.styles[h] = new q(e, h, g);
                        }
                      });
                var { definitions: o } = e,
                  s = this.getAttribute('id');
                s.hasValue() && (o[s.getString()] || (o[s.getString()] = this)),
                  Array.from(r.childNodes).forEach((u) => {
                    if (1 === u.nodeType) this.addChild(u);
                    else if (n && (3 === u.nodeType || 4 === u.nodeType)) {
                      var h = e.createTextNode(u);
                      h.getText().length > 0 && this.addChild(h);
                    }
                  });
              }
            }
            getAttribute(e) {
              var n = this.attributes[e];
              if (!n && arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) {
                var i = new q(this.document, e, '');
                return (this.attributes[e] = i), i;
              }
              return n || q.empty(this.document);
            }
            getHrefAttribute() {
              for (var e in this.attributes)
                if ('href' === e || e.endsWith(':href')) return this.attributes[e];
              return q.empty(this.document);
            }
            getStyle(e) {
              var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = this.styles[e];
              if (i) return i;
              var o = this.getAttribute(e);
              if (null != o && o.hasValue()) return (this.styles[e] = o), o;
              if (!n) {
                var { parent: s } = this;
                if (s) {
                  var u = s.getStyle(e);
                  if (null != u && u.hasValue()) return u;
                }
              }
              if (r) {
                var h = new q(this.document, e, '');
                return (this.styles[e] = h), h;
              }
              return i || q.empty(this.document);
            }
            render(e) {
              if (
                'none' !== this.getStyle('display').getString() &&
                'hidden' !== this.getStyle('visibility').getString()
              ) {
                if ((e.save(), this.getStyle('mask').hasValue())) {
                  var r = this.getStyle('mask').getDefinition();
                  r && (this.applyEffects(e), r.apply(e, this));
                } else if ('none' !== this.getStyle('filter').getValue('none')) {
                  var n = this.getStyle('filter').getDefinition();
                  n && (this.applyEffects(e), n.apply(e, this));
                } else this.setContext(e), this.renderChildren(e), this.clearContext(e);
                e.restore();
              }
            }
            setContext(e) {}
            applyEffects(e) {
              var r = tr.fromElement(this.document, this);
              r && r.apply(e);
              var n = this.getStyle('clip-path', !1, !0);
              if (n.hasValue()) {
                var i = n.getDefinition();
                i && i.apply(e);
              }
            }
            clearContext(e) {}
            renderChildren(e) {
              this.children.forEach((r) => {
                r.render(e);
              });
            }
            addChild(e) {
              var r = e instanceof l ? e : this.document.createElement(e);
              (r.parent = this), l.ignoreChildTypes.includes(r.type) || this.children.push(r);
            }
            matchesSelector(e) {
              var { node: r } = this;
              if ('function' == typeof r.matches) return r.matches(e);
              var n = r.getAttribute('class');
              return !(!n || '' === n) && n.split(' ').some((i) => '.'.concat(i) === e);
            }
            addStylesFromStyleDefinition() {
              var { styles: e, stylesSpecificity: r } = this.document;
              for (var n in e)
                if (!n.startsWith('@') && this.matchesSelector(n)) {
                  var i = e[n],
                    o = r[n];
                  if (i)
                    for (var s in i) {
                      var u = this.stylesSpecificity[s];
                      void 0 === u && (u = '000'),
                        o >= u && ((this.styles[s] = i[s]), (this.stylesSpecificity[s] = o));
                    }
                }
            }
            removeStyles(e, r) {
              return r.reduce((i, o) => {
                var s = e.getStyle(o);
                if (!s.hasValue()) return i;
                var u = s.getString();
                return s.setValue(''), [...i, [o, u]];
              }, []);
            }
            restoreStyles(e, r) {
              r.forEach((n) => {
                var [i, o] = n;
                e.getStyle(i, !0).setValue(o);
              });
            }
          }
          return (l.ignoreChildTypes = ['title']), l;
        })();
      class zr extends It {
        constructor(t, e, r) {
          super(t, e, r);
        }
      }
      function wn(l) {
        var t = l.trim();
        return /^('|")/.test(t) ? t : '"'.concat(t, '"');
      }
      function In(l) {
        return 'undefined' == typeof process ? l : l.trim().split(',').map(wn).join(',');
      }
      function Vn(l) {
        if (!l) return '';
        var t = l.trim().toLowerCase();
        switch (t) {
          case 'normal':
          case 'italic':
          case 'oblique':
          case 'inherit':
          case 'initial':
          case 'unset':
            return t;
          default:
            return /^oblique\s+(-|)\d+deg$/.test(t) ? t : '';
        }
      }
      function Ln(l) {
        if (!l) return '';
        var t = l.trim().toLowerCase();
        switch (t) {
          case 'normal':
          case 'bold':
          case 'lighter':
          case 'bolder':
          case 'inherit':
          case 'initial':
          case 'unset':
            return t;
          default:
            return /^[\d.]+$/.test(t) ? t : '';
        }
      }
      let Re = (() => {
        class l {
          constructor(e, r, n, i, o, s) {
            var u = s ? ('string' == typeof s ? l.parse(s) : s) : {};
            (this.fontFamily = o || u.fontFamily),
              (this.fontSize = i || u.fontSize),
              (this.fontStyle = e || u.fontStyle),
              (this.fontWeight = n || u.fontWeight),
              (this.fontVariant = r || u.fontVariant);
          }
          static parse() {
            var r = arguments.length > 1 ? arguments[1] : void 0,
              n = '',
              i = '',
              o = '',
              s = '',
              u = '',
              h = qt(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '')
                .trim()
                .split(' '),
              g = { fontSize: !1, fontStyle: !1, fontWeight: !1, fontVariant: !1 };
            return (
              h.forEach((x) => {
                switch (!0) {
                  case !g.fontStyle && l.styles.includes(x):
                    'inherit' !== x && (n = x), (g.fontStyle = !0);
                    break;
                  case !g.fontVariant && l.variants.includes(x):
                    'inherit' !== x && (i = x), (g.fontStyle = !0), (g.fontVariant = !0);
                    break;
                  case !g.fontWeight && l.weights.includes(x):
                    'inherit' !== x && (o = x),
                      (g.fontStyle = !0),
                      (g.fontVariant = !0),
                      (g.fontWeight = !0);
                    break;
                  case !g.fontSize:
                    'inherit' !== x && ([s] = x.split('/')),
                      (g.fontStyle = !0),
                      (g.fontVariant = !0),
                      (g.fontWeight = !0),
                      (g.fontSize = !0);
                    break;
                  default:
                    'inherit' !== x && (u += x);
                }
              }),
              new l(n, i, o, s, u, r)
            );
          }
          toString() {
            return [
              Vn(this.fontStyle),
              this.fontVariant,
              Ln(this.fontWeight),
              this.fontSize,
              In(this.fontFamily),
            ]
              .join(' ')
              .trim();
          }
        }
        return (
          (l.styles = 'normal|italic|oblique|inherit'),
          (l.variants = 'normal|small-caps|inherit'),
          (l.weights = 'normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit'),
          l
        );
      })();
      class te {
        constructor() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Number.NaN,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.NaN,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.NaN,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Number.NaN;
          (this.x1 = t),
            (this.y1 = e),
            (this.x2 = r),
            (this.y2 = n),
            this.addPoint(t, e),
            this.addPoint(r, n);
        }
        get x() {
          return this.x1;
        }
        get y() {
          return this.y1;
        }
        get width() {
          return this.x2 - this.x1;
        }
        get height() {
          return this.y2 - this.y1;
        }
        addPoint(t, e) {
          void 0 !== t &&
            ((isNaN(this.x1) || isNaN(this.x2)) && ((this.x1 = t), (this.x2 = t)),
            t < this.x1 && (this.x1 = t),
            t > this.x2 && (this.x2 = t)),
            void 0 !== e &&
              ((isNaN(this.y1) || isNaN(this.y2)) && ((this.y1 = e), (this.y2 = e)),
              e < this.y1 && (this.y1 = e),
              e > this.y2 && (this.y2 = e));
        }
        addX(t) {
          this.addPoint(t, null);
        }
        addY(t) {
          this.addPoint(null, t);
        }
        addBoundingBox(t) {
          if (t) {
            var { x1: e, y1: r, x2: n, y2: i } = t;
            this.addPoint(e, r), this.addPoint(n, i);
          }
        }
        sumCubic(t, e, r, n, i) {
          return (
            Math.pow(1 - t, 3) * e +
            3 * Math.pow(1 - t, 2) * t * r +
            3 * (1 - t) * Math.pow(t, 2) * n +
            Math.pow(t, 3) * i
          );
        }
        bezierCurveAdd(t, e, r, n, i) {
          var o = 6 * e - 12 * r + 6 * n,
            s = -3 * e + 9 * r - 9 * n + 3 * i,
            u = 3 * r - 3 * e;
          if (0 !== s) {
            var g = Math.pow(o, 2) - 4 * u * s;
            if (!(g < 0)) {
              var x = (-o + Math.sqrt(g)) / (2 * s);
              0 < x &&
                x < 1 &&
                (t
                  ? this.addX(this.sumCubic(x, e, r, n, i))
                  : this.addY(this.sumCubic(x, e, r, n, i)));
              var b = (-o - Math.sqrt(g)) / (2 * s);
              0 < b &&
                b < 1 &&
                (t
                  ? this.addX(this.sumCubic(b, e, r, n, i))
                  : this.addY(this.sumCubic(b, e, r, n, i)));
            }
          } else {
            if (0 === o) return;
            var h = -u / o;
            0 < h &&
              h < 1 &&
              (t
                ? this.addX(this.sumCubic(h, e, r, n, i))
                : this.addY(this.sumCubic(h, e, r, n, i)));
          }
        }
        addBezierCurve(t, e, r, n, i, o, s, u) {
          this.addPoint(t, e),
            this.addPoint(s, u),
            this.bezierCurveAdd(!0, t, r, i, s),
            this.bezierCurveAdd(!1, e, n, o, u);
        }
        addQuadraticCurve(t, e, r, n, i, o) {
          var s = t + (2 / 3) * (r - t),
            u = e + (2 / 3) * (n - e);
          this.addBezierCurve(t, e, s, s + (1 / 3) * (i - t), u, u + (1 / 3) * (o - e), i, o);
        }
        isPointInBox(t, e) {
          var { x1: r, y1: n, x2: i, y2: o } = this;
          return r <= t && t <= i && n <= e && e <= o;
        }
      }
      class ot extends R {
        constructor(t) {
          super(
            t.replace(/([+\-.])\s+/gm, '$1').replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g, ''),
          ),
            (this.control = null),
            (this.start = null),
            (this.current = null),
            (this.command = null),
            (this.commands = this.commands),
            (this.i = -1),
            (this.previousCommand = null),
            (this.points = []),
            (this.angles = []);
        }
        reset() {
          (this.i = -1),
            (this.command = null),
            (this.previousCommand = null),
            (this.start = new wt(0, 0)),
            (this.control = new wt(0, 0)),
            (this.current = new wt(0, 0)),
            (this.points = []),
            (this.angles = []);
        }
        isEnd() {
          var { i: t, commands: e } = this;
          return t >= e.length - 1;
        }
        next() {
          var t = this.commands[++this.i];
          return (this.previousCommand = this.command), (this.command = t), t;
        }
        getPoint() {
          var r = new wt(
            this.command[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'x'],
            this.command[arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'y'],
          );
          return this.makeAbsolute(r);
        }
        getAsControlPoint(t, e) {
          var r = this.getPoint(t, e);
          return (this.control = r), r;
        }
        getAsCurrentPoint(t, e) {
          var r = this.getPoint(t, e);
          return (this.current = r), r;
        }
        getReflectedControlPoint() {
          var t = this.previousCommand.type;
          if (
            t !== R.CURVE_TO &&
            t !== R.SMOOTH_CURVE_TO &&
            t !== R.QUAD_TO &&
            t !== R.SMOOTH_QUAD_TO
          )
            return this.current;
          var {
            current: { x: e, y: r },
            control: { x: n, y: i },
          } = this;
          return new wt(2 * e - n, 2 * r - i);
        }
        makeAbsolute(t) {
          if (this.command.relative) {
            var { x: e, y: r } = this.current;
            (t.x += e), (t.y += r);
          }
          return t;
        }
        addMarker(t, e, r) {
          var { points: n, angles: i } = this;
          r && i.length > 0 && !i[i.length - 1] && (i[i.length - 1] = n[n.length - 1].angleTo(r)),
            this.addMarkerAngle(t, e ? e.angleTo(t) : null);
        }
        addMarkerAngle(t, e) {
          this.points.push(t), this.angles.push(e);
        }
        getMarkerPoints() {
          return this.points;
        }
        getMarkerAngles() {
          for (var { angles: t } = this, e = t.length, r = 0; r < e; r++)
            if (!t[r])
              for (var n = r + 1; n < e; n++)
                if (t[n]) {
                  t[r] = t[n];
                  break;
                }
          return t;
        }
      }
      class xe extends It {
        constructor() {
          super(...arguments), (this.modifiedEmSizeStack = !1);
        }
        calculateOpacity() {
          for (var t = 1, e = this; e; ) {
            var r = e.getStyle('opacity', !1, !0);
            r.hasValue(!0) && (t *= r.getNumber()), (e = e.parent);
          }
          return t;
        }
        setContext(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (!e) {
            var r = this.getStyle('fill'),
              n = this.getStyle('fill-opacity'),
              i = this.getStyle('stroke'),
              o = this.getStyle('stroke-opacity');
            if (r.isUrlDefinition()) {
              var s = r.getFillStyleDefinition(this, n);
              s && (t.fillStyle = s);
            } else if (r.hasValue()) {
              'currentColor' === r.getString() && r.setValue(this.getStyle('color').getColor());
              var u = r.getColor();
              'inherit' !== u && (t.fillStyle = 'none' === u ? 'rgba(0,0,0,0)' : u);
            }
            if (n.hasValue()) {
              var h = new q(this.document, 'fill', t.fillStyle).addOpacity(n).getColor();
              t.fillStyle = h;
            }
            if (i.isUrlDefinition()) {
              var g = i.getFillStyleDefinition(this, o);
              g && (t.strokeStyle = g);
            } else if (i.hasValue()) {
              'currentColor' === i.getString() && i.setValue(this.getStyle('color').getColor());
              var x = i.getString();
              'inherit' !== x && (t.strokeStyle = 'none' === x ? 'rgba(0,0,0,0)' : x);
            }
            if (o.hasValue()) {
              var b = new q(this.document, 'stroke', t.strokeStyle).addOpacity(o).getString();
              t.strokeStyle = b;
            }
            var y = this.getStyle('stroke-width');
            if (y.hasValue()) {
              var M = y.getPixels();
              t.lineWidth = M || it;
            }
            var I = this.getStyle('stroke-linecap'),
              V = this.getStyle('stroke-linejoin'),
              F = this.getStyle('stroke-miterlimit'),
              Q = this.getStyle('stroke-dasharray'),
              G = this.getStyle('stroke-dashoffset');
            if (
              (I.hasValue() && (t.lineCap = I.getString()),
              V.hasValue() && (t.lineJoin = V.getString()),
              F.hasValue() && (t.miterLimit = F.getNumber()),
              Q.hasValue() && 'none' !== Q.getString())
            ) {
              var B = Gt(Q.getString());
              void 0 !== t.setLineDash
                ? t.setLineDash(B)
                : void 0 !== t.webkitLineDash
                ? (t.webkitLineDash = B)
                : void 0 !== t.mozDash && (1 !== B.length || 0 !== B[0]) && (t.mozDash = B);
              var rt = G.getPixels();
              void 0 !== t.lineDashOffset
                ? (t.lineDashOffset = rt)
                : void 0 !== t.webkitLineDashOffset
                ? (t.webkitLineDashOffset = rt)
                : void 0 !== t.mozDashOffset && (t.mozDashOffset = rt);
            }
          }
          if (((this.modifiedEmSizeStack = !1), void 0 !== t.font)) {
            var ut = this.getStyle('font'),
              X = this.getStyle('font-style'),
              ft = this.getStyle('font-variant'),
              gt = this.getStyle('font-weight'),
              mt = this.getStyle('font-size'),
              St = this.getStyle('font-family'),
              Ct = new Re(
                X.getString(),
                ft.getString(),
                gt.getString(),
                mt.hasValue() ? ''.concat(mt.getPixels(!0), 'px') : '',
                St.getString(),
                Re.parse(ut.getString(), t.font),
              );
            X.setValue(Ct.fontStyle),
              ft.setValue(Ct.fontVariant),
              gt.setValue(Ct.fontWeight),
              mt.setValue(Ct.fontSize),
              St.setValue(Ct.fontFamily),
              (t.font = Ct.toString()),
              mt.isPixels() &&
                ((this.document.emSize = mt.getPixels()), (this.modifiedEmSizeStack = !0));
          }
          e || (this.applyEffects(t), (t.globalAlpha = this.calculateOpacity()));
        }
        clearContext(t) {
          super.clearContext(t), this.modifiedEmSizeStack && this.document.popEmSize();
        }
      }
      class Ot extends xe {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = 'path'),
            (this.pathParser = null),
            (this.pathParser = new ot(this.getAttribute('d').getString()));
        }
        path(t) {
          var { pathParser: e } = this,
            r = new te();
          for (e.reset(), t && t.beginPath(); !e.isEnd(); )
            switch (e.next().type) {
              case ot.MOVE_TO:
                this.pathM(t, r);
                break;
              case ot.LINE_TO:
                this.pathL(t, r);
                break;
              case ot.HORIZ_LINE_TO:
                this.pathH(t, r);
                break;
              case ot.VERT_LINE_TO:
                this.pathV(t, r);
                break;
              case ot.CURVE_TO:
                this.pathC(t, r);
                break;
              case ot.SMOOTH_CURVE_TO:
                this.pathS(t, r);
                break;
              case ot.QUAD_TO:
                this.pathQ(t, r);
                break;
              case ot.SMOOTH_QUAD_TO:
                this.pathT(t, r);
                break;
              case ot.ARC:
                this.pathA(t, r);
                break;
              case ot.CLOSE_PATH:
                this.pathZ(t, r);
            }
          return r;
        }
        getBoundingBox(t) {
          return this.path();
        }
        getMarkers() {
          var { pathParser: t } = this,
            e = t.getMarkerPoints(),
            r = t.getMarkerAngles();
          return e.map((i, o) => [i, r[o]]);
        }
        renderChildren(t) {
          this.path(t), this.document.screen.mouse.checkPath(this, t);
          var e = this.getStyle('fill-rule');
          '' !== t.fillStyle &&
            ('inherit' !== e.getString('inherit') ? t.fill(e.getString()) : t.fill()),
            '' !== t.strokeStyle &&
              ('non-scaling-stroke' === this.getAttribute('vector-effect').getString()
                ? (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.stroke(), t.restore())
                : t.stroke());
          var r = this.getMarkers();
          if (r) {
            var n = r.length - 1,
              i = this.getStyle('marker-start'),
              o = this.getStyle('marker-mid'),
              s = this.getStyle('marker-end');
            if (i.isUrlDefinition()) {
              var u = i.getDefinition(),
                [h, g] = r[0];
              u.render(t, h, g);
            }
            if (o.isUrlDefinition())
              for (var x = o.getDefinition(), b = 1; b < n; b++) {
                var [y, M] = r[b];
                x.render(t, y, M);
              }
            if (s.isUrlDefinition()) {
              var I = s.getDefinition(),
                [V, F] = r[n];
              I.render(t, V, F);
            }
          }
        }
        static pathM(t) {
          var e = t.getAsCurrentPoint();
          return (t.start = t.current), { point: e };
        }
        pathM(t, e) {
          var { pathParser: r } = this,
            { point: n } = Ot.pathM(r),
            { x: i, y: o } = n;
          r.addMarker(n), e.addPoint(i, o), t && t.moveTo(i, o);
        }
        static pathL(t) {
          var { current: e } = t;
          return { current: e, point: t.getAsCurrentPoint() };
        }
        pathL(t, e) {
          var { pathParser: r } = this,
            { current: n, point: i } = Ot.pathL(r),
            { x: o, y: s } = i;
          r.addMarker(i, n), e.addPoint(o, s), t && t.lineTo(o, s);
        }
        static pathH(t) {
          var { current: e, command: r } = t,
            n = new wt((r.relative ? e.x : 0) + r.x, e.y);
          return (t.current = n), { current: e, point: n };
        }
        pathH(t, e) {
          var { pathParser: r } = this,
            { current: n, point: i } = Ot.pathH(r),
            { x: o, y: s } = i;
          r.addMarker(i, n), e.addPoint(o, s), t && t.lineTo(o, s);
        }
        static pathV(t) {
          var { current: e, command: r } = t,
            n = new wt(e.x, (r.relative ? e.y : 0) + r.y);
          return (t.current = n), { current: e, point: n };
        }
        pathV(t, e) {
          var { pathParser: r } = this,
            { current: n, point: i } = Ot.pathV(r),
            { x: o, y: s } = i;
          r.addMarker(i, n), e.addPoint(o, s), t && t.lineTo(o, s);
        }
        static pathC(t) {
          var { current: e } = t;
          return {
            current: e,
            point: t.getPoint('x1', 'y1'),
            controlPoint: t.getAsControlPoint('x2', 'y2'),
            currentPoint: t.getAsCurrentPoint(),
          };
        }
        pathC(t, e) {
          var { pathParser: r } = this,
            { current: n, point: i, controlPoint: o, currentPoint: s } = Ot.pathC(r);
          r.addMarker(s, o, i),
            e.addBezierCurve(n.x, n.y, i.x, i.y, o.x, o.y, s.x, s.y),
            t && t.bezierCurveTo(i.x, i.y, o.x, o.y, s.x, s.y);
        }
        static pathS(t) {
          var { current: e } = t;
          return {
            current: e,
            point: t.getReflectedControlPoint(),
            controlPoint: t.getAsControlPoint('x2', 'y2'),
            currentPoint: t.getAsCurrentPoint(),
          };
        }
        pathS(t, e) {
          var { pathParser: r } = this,
            { current: n, point: i, controlPoint: o, currentPoint: s } = Ot.pathS(r);
          r.addMarker(s, o, i),
            e.addBezierCurve(n.x, n.y, i.x, i.y, o.x, o.y, s.x, s.y),
            t && t.bezierCurveTo(i.x, i.y, o.x, o.y, s.x, s.y);
        }
        static pathQ(t) {
          var { current: e } = t;
          return {
            current: e,
            controlPoint: t.getAsControlPoint('x1', 'y1'),
            currentPoint: t.getAsCurrentPoint(),
          };
        }
        pathQ(t, e) {
          var { pathParser: r } = this,
            { current: n, controlPoint: i, currentPoint: o } = Ot.pathQ(r);
          r.addMarker(o, i, i),
            e.addQuadraticCurve(n.x, n.y, i.x, i.y, o.x, o.y),
            t && t.quadraticCurveTo(i.x, i.y, o.x, o.y);
        }
        static pathT(t) {
          var { current: e } = t,
            r = t.getReflectedControlPoint();
          return (
            (t.control = r), { current: e, controlPoint: r, currentPoint: t.getAsCurrentPoint() }
          );
        }
        pathT(t, e) {
          var { pathParser: r } = this,
            { current: n, controlPoint: i, currentPoint: o } = Ot.pathT(r);
          r.addMarker(o, i, i),
            e.addQuadraticCurve(n.x, n.y, i.x, i.y, o.x, o.y),
            t && t.quadraticCurveTo(i.x, i.y, o.x, o.y);
        }
        static pathA(t) {
          var { current: e, command: r } = t,
            { rX: n, rY: i, xRot: o, lArcFlag: s, sweepFlag: u } = r,
            h = o * (Math.PI / 180),
            g = t.getAsCurrentPoint(),
            x = new wt(
              (Math.cos(h) * (e.x - g.x)) / 2 + (Math.sin(h) * (e.y - g.y)) / 2,
              (-Math.sin(h) * (e.x - g.x)) / 2 + (Math.cos(h) * (e.y - g.y)) / 2,
            ),
            b = Math.pow(x.x, 2) / Math.pow(n, 2) + Math.pow(x.y, 2) / Math.pow(i, 2);
          b > 1 && ((n *= Math.sqrt(b)), (i *= Math.sqrt(b)));
          var y =
            (s === u ? -1 : 1) *
            Math.sqrt(
              (Math.pow(n, 2) * Math.pow(i, 2) -
                Math.pow(n, 2) * Math.pow(x.y, 2) -
                Math.pow(i, 2) * Math.pow(x.x, 2)) /
                (Math.pow(n, 2) * Math.pow(x.y, 2) + Math.pow(i, 2) * Math.pow(x.x, 2)),
            );
          isNaN(y) && (y = 0);
          var M = new wt((y * n * x.y) / i, (y * -i * x.x) / n),
            I = new wt(
              (e.x + g.x) / 2 + Math.cos(h) * M.x - Math.sin(h) * M.y,
              (e.y + g.y) / 2 + Math.sin(h) * M.x + Math.cos(h) * M.y,
            ),
            V = Rt([1, 0], [(x.x - M.x) / n, (x.y - M.y) / i]),
            F = [(x.x - M.x) / n, (x.y - M.y) / i],
            Q = [(-x.x - M.x) / n, (-x.y - M.y) / i],
            G = Rt(F, Q);
          return (
            pt(F, Q) <= -1 && (G = Math.PI),
            pt(F, Q) >= 1 && (G = 0),
            {
              currentPoint: g,
              rX: n,
              rY: i,
              sweepFlag: u,
              xAxisRotation: h,
              centp: I,
              a1: V,
              ad: G,
            }
          );
        }
        pathA(t, e) {
          var { pathParser: r } = this,
            {
              currentPoint: n,
              rX: i,
              rY: o,
              sweepFlag: s,
              xAxisRotation: u,
              centp: h,
              a1: g,
              ad: x,
            } = Ot.pathA(r),
            b = 1 - s ? 1 : -1,
            y = g + b * (x / 2),
            M = new wt(h.x + i * Math.cos(y), h.y + o * Math.sin(y));
          if (
            (r.addMarkerAngle(M, y - (b * Math.PI) / 2),
            r.addMarkerAngle(n, y - b * Math.PI),
            e.addPoint(n.x, n.y),
            t && !isNaN(g) && !isNaN(x))
          ) {
            var I = i > o ? i : o,
              V = i > o ? 1 : i / o,
              F = i > o ? o / i : 1;
            t.translate(h.x, h.y),
              t.rotate(u),
              t.scale(V, F),
              t.arc(0, 0, I, g, g + x, Boolean(1 - s)),
              t.scale(1 / V, 1 / F),
              t.rotate(-u),
              t.translate(-h.x, -h.y);
          }
        }
        static pathZ(t) {
          t.current = t.start;
        }
        pathZ(t, e) {
          Ot.pathZ(this.pathParser), t && e.x1 !== e.x2 && e.y1 !== e.y2 && t.closePath();
        }
      }
      class yr extends Ot {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = 'glyph'),
            (this.horizAdvX = this.getAttribute('horiz-adv-x').getNumber()),
            (this.unicode = this.getAttribute('unicode').getString()),
            (this.arabicForm = this.getAttribute('arabic-form').getString());
        }
      }
      class be extends xe {
        constructor(t, e, r) {
          super(t, e, new.target === be || r),
            (this.type = 'text'),
            (this.x = 0),
            (this.y = 0),
            (this.measureCache = -1);
        }
        setContext(t) {
          super.setContext(t, arguments.length > 1 && void 0 !== arguments[1] && arguments[1]);
          var r =
            this.getStyle('dominant-baseline').getTextBaseline() ||
            this.getStyle('alignment-baseline').getTextBaseline();
          r && (t.textBaseline = r);
        }
        initializeCoordinates(t) {
          (this.x = this.getAttribute('x').getPixels('x')),
            (this.y = this.getAttribute('y').getPixels('y'));
          var e = this.getAttribute('dx'),
            r = this.getAttribute('dy');
          e.hasValue() && (this.x += e.getPixels('x')),
            r.hasValue() && (this.y += r.getPixels('y')),
            (this.x += this.getAnchorDelta(t, this, 0));
        }
        getBoundingBox(t) {
          if ('text' !== this.type) return this.getTElementBoundingBox(t);
          this.initializeCoordinates(t);
          var e = null;
          return (
            this.children.forEach((r, n) => {
              var i = this.getChildBoundingBox(t, this, this, n);
              e ? e.addBoundingBox(i) : (e = i);
            }),
            e
          );
        }
        getFontSize() {
          var { document: t, parent: e } = this,
            r = Re.parse(t.ctx.font).fontSize;
          return e.getStyle('font-size').getNumber(r);
        }
        getTElementBoundingBox(t) {
          var e = this.getFontSize();
          return new te(this.x, this.y - e, this.x + this.measureText(t), this.y);
        }
        getGlyph(t, e, r) {
          var n = e[r],
            i = null;
          if (t.isArabic) {
            var o = e.length,
              s = e[r - 1],
              u = e[r + 1],
              h = 'isolated';
            if (
              ((0 === r || ' ' === s) && r < o - 2 && ' ' !== u && (h = 'terminal'),
              r > 0 && ' ' !== s && r < o - 2 && ' ' !== u && (h = 'medial'),
              r > 0 && ' ' !== s && (r === o - 1 || ' ' === u) && (h = 'initial'),
              void 0 !== t.glyphs[n])
            ) {
              var g = t.glyphs[n];
              i = g instanceof yr ? g : g[h];
            }
          } else i = t.glyphs[n];
          return i || (i = t.missingGlyph), i;
        }
        getText() {
          return '';
        }
        getTextFromNode(t) {
          var e = t || this.node,
            r = Array.from(e.parentNode.childNodes),
            n = r.indexOf(e),
            i = r.length - 1,
            o = qt(e.textContent || '');
          return 0 === n && (o = $e(o)), n === i && (o = De(o)), o;
        }
        renderChildren(t) {
          if ('text' === this.type) {
            this.initializeCoordinates(t),
              this.children.forEach((r, n) => {
                this.renderChild(t, this, this, n);
              });
            var { mouse: e } = this.document.screen;
            e.isWorking() && e.checkBoundingBox(this, this.getBoundingBox(t));
          } else this.renderTElementChildren(t);
        }
        renderTElementChildren(t) {
          var { document: e, parent: r } = this,
            n = this.getText(),
            i = r.getStyle('font-family').getDefinition();
          if (i)
            for (
              var { unitsPerEm: o } = i.fontFace,
                s = Re.parse(e.ctx.font),
                u = r.getStyle('font-size').getNumber(s.fontSize),
                h = r.getStyle('font-style').getString(s.fontStyle),
                g = u / o,
                x = i.isRTL ? n.split('').reverse().join('') : n,
                b = Gt(r.getAttribute('dx').getString()),
                y = x.length,
                M = 0;
              M < y;
              M++
            ) {
              var I = this.getGlyph(i, x, M);
              t.translate(this.x, this.y), t.scale(g, -g);
              var V = t.lineWidth;
              (t.lineWidth = (t.lineWidth * o) / u),
                'italic' === h && t.transform(1, 0, 0.4, 1, 0, 0),
                I.render(t),
                'italic' === h && t.transform(1, 0, -0.4, 1, 0, 0),
                (t.lineWidth = V),
                t.scale(1 / g, -1 / g),
                t.translate(-this.x, -this.y),
                (this.x += (u * (I.horizAdvX || i.horizAdvX)) / o),
                void 0 !== b[M] && !isNaN(b[M]) && (this.x += b[M]);
            }
          else {
            var { x: F, y: Q } = this;
            t.fillStyle && t.fillText(n, F, Q), t.strokeStyle && t.strokeText(n, F, Q);
          }
        }
        getAnchorDelta(t, e, r) {
          var n = this.getStyle('text-anchor').getString('start');
          if ('start' !== n) {
            for (
              var { children: i } = e, o = i.length, s = null, u = 0, h = r;
              h < o &&
              ((s = i[h]),
              !(
                (h > r && s.getAttribute('x').hasValue()) ||
                s.getAttribute('text-anchor').hasValue()
              ));
              h++
            )
              u += s.measureTextRecursive(t);
            return -1 * ('end' === n ? u : u / 2);
          }
          return 0;
        }
        adjustChildCoordinates(t, e, r, n) {
          var i = r.children[n];
          if ('function' != typeof i.measureText) return i;
          t.save(), i.setContext(t, !0);
          var o = i.getAttribute('x'),
            s = i.getAttribute('y'),
            u = i.getAttribute('dx'),
            h = i.getAttribute('dy'),
            g = i.getAttribute('text-anchor').getString('start');
          if (
            (0 === n &&
              'textNode' !== i.type &&
              (o.hasValue() || o.setValue(e.getAttribute('x').getValue('0')),
              s.hasValue() || s.setValue(e.getAttribute('y').getValue('0')),
              u.hasValue() || u.setValue(e.getAttribute('dx').getValue('0')),
              h.hasValue() || h.setValue(e.getAttribute('dy').getValue('0'))),
            o.hasValue())
          ) {
            if (((i.x = o.getPixels('x') + e.getAnchorDelta(t, r, n)), 'start' !== g)) {
              var x = i.measureTextRecursive(t);
              i.x += -1 * ('end' === g ? x : x / 2);
            }
            u.hasValue() && (i.x += u.getPixels('x'));
          } else {
            if ('start' !== g) {
              var b = i.measureTextRecursive(t);
              e.x += -1 * ('end' === g ? b : b / 2);
            }
            u.hasValue() && (e.x += u.getPixels('x')), (i.x = e.x);
          }
          return (
            (e.x = i.x + i.measureText(t)),
            s.hasValue()
              ? ((i.y = s.getPixels('y')), h.hasValue() && (i.y += h.getPixels('y')))
              : (h.hasValue() && (e.y += h.getPixels('y')), (i.y = e.y)),
            (e.y = i.y),
            i.clearContext(t),
            t.restore(),
            i
          );
        }
        getChildBoundingBox(t, e, r, n) {
          var i = this.adjustChildCoordinates(t, e, r, n);
          if ('function' != typeof i.getBoundingBox) return null;
          var o = i.getBoundingBox(t);
          return o
            ? (i.children.forEach((s, u) => {
                var h = e.getChildBoundingBox(t, e, i, u);
                o.addBoundingBox(h);
              }),
              o)
            : null;
        }
        renderChild(t, e, r, n) {
          var i = this.adjustChildCoordinates(t, e, r, n);
          i.render(t),
            i.children.forEach((o, s) => {
              e.renderChild(t, e, i, s);
            });
        }
        measureTextRecursive(t) {
          return this.children.reduce((r, n) => r + n.measureTextRecursive(t), this.measureText(t));
        }
        measureText(t) {
          var { measureCache: e } = this;
          if (~e) return e;
          var r = this.getText(),
            n = this.measureTargetText(t, r);
          return (this.measureCache = n), n;
        }
        measureTargetText(t, e) {
          if (!e.length) return 0;
          var { parent: r } = this,
            n = r.getStyle('font-family').getDefinition();
          if (n) {
            for (
              var i = this.getFontSize(),
                o = n.isRTL ? e.split('').reverse().join('') : e,
                s = Gt(r.getAttribute('dx').getString()),
                u = o.length,
                h = 0,
                g = 0;
              g < u;
              g++
            )
              (h +=
                ((this.getGlyph(n, o, g).horizAdvX || n.horizAdvX) * i) / n.fontFace.unitsPerEm),
                void 0 !== s[g] && !isNaN(s[g]) && (h += s[g]);
            return h;
          }
          if (!t.measureText) return 10 * e.length;
          t.save(), this.setContext(t, !0);
          var { width: b } = t.measureText(e);
          return this.clearContext(t), t.restore(), b;
        }
      }
      class Qe extends be {
        constructor(t, e, r) {
          super(t, e, new.target === Qe || r),
            (this.type = 'tspan'),
            (this.text = this.children.length > 0 ? '' : this.getTextFromNode());
        }
        getText() {
          return this.text;
        }
      }
      class Dn extends Qe {
        constructor() {
          super(...arguments), (this.type = 'textNode');
        }
      }
      class je extends xe {
        constructor() {
          super(...arguments), (this.type = 'svg'), (this.root = !1);
        }
        setContext(t) {
          var e,
            { document: r } = this,
            { screen: n, window: i } = r,
            o = t.canvas;
          if (
            (n.setDefaults(t), o.style && void 0 !== t.font && i && void 0 !== i.getComputedStyle)
          ) {
            t.font = i.getComputedStyle(o).getPropertyValue('font');
            var s = new q(r, 'fontSize', Re.parse(t.font).fontSize);
            s.hasValue() && ((r.rootEmSize = s.getPixels('y')), (r.emSize = r.rootEmSize));
          }
          this.getAttribute('x').hasValue() || this.getAttribute('x', !0).setValue(0),
            this.getAttribute('y').hasValue() || this.getAttribute('y', !0).setValue(0);
          var { width: u, height: h } = n.viewPort;
          this.getStyle('width').hasValue() || this.getStyle('width', !0).setValue('100%'),
            this.getStyle('height').hasValue() || this.getStyle('height', !0).setValue('100%'),
            this.getStyle('color').hasValue() || this.getStyle('color', !0).setValue('black');
          var g = this.getAttribute('refX'),
            x = this.getAttribute('refY'),
            b = this.getAttribute('viewBox'),
            y = b.hasValue() ? Gt(b.getString()) : null,
            M = !this.root && 'visible' !== this.getStyle('overflow').getValue('hidden'),
            I = 0,
            V = 0,
            F = 0,
            Q = 0;
          y && ((I = y[0]), (V = y[1])),
            this.root ||
              ((u = this.getStyle('width').getPixels('x')),
              (h = this.getStyle('height').getPixels('y')),
              'marker' === this.type && ((F = I), (Q = V), (I = 0), (V = 0))),
            n.viewPort.setCurrent(u, h),
            this.node &&
              (!this.parent ||
                'foreignObject' ===
                  (null === (e = this.node.parentNode) || void 0 === e ? void 0 : e.nodeName)) &&
              this.getStyle('transform', !1, !0).hasValue() &&
              !this.getStyle('transform-origin', !1, !0).hasValue() &&
              this.getStyle('transform-origin', !0, !0).setValue('50% 50%'),
            super.setContext(t),
            t.translate(
              this.getAttribute('x').getPixels('x'),
              this.getAttribute('y').getPixels('y'),
            ),
            y && ((u = y[2]), (h = y[3])),
            r.setViewBox({
              ctx: t,
              aspectRatio: this.getAttribute('preserveAspectRatio').getString(),
              width: n.viewPort.width,
              desiredWidth: u,
              height: n.viewPort.height,
              desiredHeight: h,
              minX: I,
              minY: V,
              refX: g.getValue(),
              refY: x.getValue(),
              clip: M,
              clipX: F,
              clipY: Q,
            }),
            y && (n.viewPort.removeCurrent(), n.viewPort.setCurrent(u, h));
        }
        clearContext(t) {
          super.clearContext(t), this.document.screen.viewPort.removeCurrent();
        }
        resize(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            n = this.getAttribute('width', !0),
            i = this.getAttribute('height', !0),
            o = this.getAttribute('viewBox'),
            s = this.getAttribute('style'),
            u = n.getNumber(0),
            h = i.getNumber(0);
          if (r)
            if ('string' == typeof r) this.getAttribute('preserveAspectRatio', !0).setValue(r);
            else {
              var g = this.getAttribute('preserveAspectRatio');
              g.hasValue() && g.setValue(g.getString().replace(/^\s*(\S.*\S)\s*$/, '$1'));
            }
          if (
            (n.setValue(t),
            i.setValue(e),
            o.hasValue() || o.setValue('0 0 '.concat(u || t, ' ').concat(h || e)),
            s.hasValue())
          ) {
            var x = this.getStyle('width'),
              b = this.getStyle('height');
            x.hasValue() && x.setValue(''.concat(t, 'px')),
              b.hasValue() && b.setValue(''.concat(e, 'px'));
          }
        }
      }
      class mr extends Ot {
        constructor() {
          super(...arguments), (this.type = 'rect');
        }
        path(t) {
          var e = this.getAttribute('x').getPixels('x'),
            r = this.getAttribute('y').getPixels('y'),
            n = this.getStyle('width', !1, !0).getPixels('x'),
            i = this.getStyle('height', !1, !0).getPixels('y'),
            o = this.getAttribute('rx'),
            s = this.getAttribute('ry'),
            u = o.getPixels('x'),
            h = s.getPixels('y');
          if (
            (o.hasValue() && !s.hasValue() && (h = u),
            s.hasValue() && !o.hasValue() && (u = h),
            (u = Math.min(u, n / 2)),
            (h = Math.min(h, i / 2)),
            t)
          ) {
            var g = ((Math.sqrt(2) - 1) / 3) * 4;
            t.beginPath(),
              i > 0 &&
                n > 0 &&
                (t.moveTo(e + u, r),
                t.lineTo(e + n - u, r),
                t.bezierCurveTo(e + n - u + g * u, r, e + n, r + h - g * h, e + n, r + h),
                t.lineTo(e + n, r + i - h),
                t.bezierCurveTo(
                  e + n,
                  r + i - h + g * h,
                  e + n - u + g * u,
                  r + i,
                  e + n - u,
                  r + i,
                ),
                t.lineTo(e + u, r + i),
                t.bezierCurveTo(e + u - g * u, r + i, e, r + i - h + g * h, e, r + i - h),
                t.lineTo(e, r + h),
                t.bezierCurveTo(e, r + h - g * h, e + u - g * u, r, e + u, r),
                t.closePath());
          }
          return new te(e, r, e + n, r + i);
        }
        getMarkers() {
          return null;
        }
      }
      class Gr extends Ot {
        constructor() {
          super(...arguments), (this.type = 'circle');
        }
        path(t) {
          var e = this.getAttribute('cx').getPixels('x'),
            r = this.getAttribute('cy').getPixels('y'),
            n = this.getAttribute('r').getPixels();
          return (
            t && n > 0 && (t.beginPath(), t.arc(e, r, n, 0, 2 * Math.PI, !1), t.closePath()),
            new te(e - n, r - n, e + n, r + n)
          );
        }
        getMarkers() {
          return null;
        }
      }
      class Hr extends Ot {
        constructor() {
          super(...arguments), (this.type = 'ellipse');
        }
        path(t) {
          var e = ((Math.sqrt(2) - 1) / 3) * 4,
            r = this.getAttribute('rx').getPixels('x'),
            n = this.getAttribute('ry').getPixels('y'),
            i = this.getAttribute('cx').getPixels('x'),
            o = this.getAttribute('cy').getPixels('y');
          return (
            t &&
              r > 0 &&
              n > 0 &&
              (t.beginPath(),
              t.moveTo(i + r, o),
              t.bezierCurveTo(i + r, o + e * n, i + e * r, o + n, i, o + n),
              t.bezierCurveTo(i - e * r, o + n, i - r, o + e * n, i - r, o),
              t.bezierCurveTo(i - r, o - e * n, i - e * r, o - n, i, o - n),
              t.bezierCurveTo(i + e * r, o - n, i + r, o - e * n, i + r, o),
              t.closePath()),
            new te(i - r, o - n, i + r, o + n)
          );
        }
        getMarkers() {
          return null;
        }
      }
      class Yr extends Ot {
        constructor() {
          super(...arguments), (this.type = 'line');
        }
        getPoints() {
          return [
            new wt(this.getAttribute('x1').getPixels('x'), this.getAttribute('y1').getPixels('y')),
            new wt(this.getAttribute('x2').getPixels('x'), this.getAttribute('y2').getPixels('y')),
          ];
        }
        path(t) {
          var [{ x: e, y: r }, { x: n, y: i }] = this.getPoints();
          return t && (t.beginPath(), t.moveTo(e, r), t.lineTo(n, i)), new te(e, r, n, i);
        }
        getMarkers() {
          var [t, e] = this.getPoints(),
            r = t.angleTo(e);
          return [
            [t, r],
            [e, r],
          ];
        }
      }
      class xr extends Ot {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = 'polyline'),
            (this.points = []),
            (this.points = wt.parsePath(this.getAttribute('points').getString()));
        }
        path(t) {
          var { points: e } = this,
            [{ x: r, y: n }] = e,
            i = new te(r, n);
          return (
            t && (t.beginPath(), t.moveTo(r, n)),
            e.forEach((o) => {
              var { x: s, y: u } = o;
              i.addPoint(s, u), t && t.lineTo(s, u);
            }),
            i
          );
        }
        getMarkers() {
          var { points: t } = this,
            e = t.length - 1,
            r = [];
          return (
            t.forEach((n, i) => {
              i !== e && r.push([n, n.angleTo(t[i + 1])]);
            }),
            r.length > 0 && r.push([t[t.length - 1], r[r.length - 1][1]]),
            r
          );
        }
      }
      class Wr extends xr {
        constructor() {
          super(...arguments), (this.type = 'polygon');
        }
        path(t) {
          var e = super.path(t),
            [{ x: r, y: n }] = this.points;
          return t && (t.lineTo(r, n), t.closePath()), e;
        }
      }
      class $r extends It {
        constructor() {
          super(...arguments), (this.type = 'pattern');
        }
        createPattern(t, e, r) {
          var n = this.getStyle('width').getPixels('x', !0),
            i = this.getStyle('height').getPixels('y', !0),
            o = new je(this.document, null);
          (o.attributes.viewBox = new q(
            this.document,
            'viewBox',
            this.getAttribute('viewBox').getValue(),
          )),
            (o.attributes.width = new q(this.document, 'width', ''.concat(n, 'px'))),
            (o.attributes.height = new q(this.document, 'height', ''.concat(i, 'px'))),
            (o.attributes.transform = new q(
              this.document,
              'transform',
              this.getAttribute('patternTransform').getValue(),
            )),
            (o.children = this.children);
          var s = this.document.createCanvas(n, i),
            u = s.getContext('2d'),
            h = this.getAttribute('x'),
            g = this.getAttribute('y');
          h.hasValue() && g.hasValue() && u.translate(h.getPixels('x', !0), g.getPixels('y', !0)),
            r.hasValue()
              ? (this.styles['fill-opacity'] = r)
              : Reflect.deleteProperty(this.styles, 'fill-opacity');
          for (var x = -1; x <= 1; x++)
            for (var b = -1; b <= 1; b++)
              u.save(),
                (o.attributes.x = new q(this.document, 'x', x * s.width)),
                (o.attributes.y = new q(this.document, 'y', b * s.height)),
                o.render(u),
                u.restore();
          return t.createPattern(s, 'repeat');
        }
      }
      class Xr extends It {
        constructor() {
          super(...arguments), (this.type = 'marker');
        }
        render(t, e, r) {
          if (e) {
            var { x: n, y: i } = e,
              o = this.getAttribute('orient').getString('auto'),
              s = this.getAttribute('markerUnits').getString('strokeWidth');
            t.translate(n, i),
              'auto' === o && t.rotate(r),
              'strokeWidth' === s && t.scale(t.lineWidth, t.lineWidth),
              t.save();
            var u = new je(this.document, null);
            (u.type = this.type),
              (u.attributes.viewBox = new q(
                this.document,
                'viewBox',
                this.getAttribute('viewBox').getValue(),
              )),
              (u.attributes.refX = new q(
                this.document,
                'refX',
                this.getAttribute('refX').getValue(),
              )),
              (u.attributes.refY = new q(
                this.document,
                'refY',
                this.getAttribute('refY').getValue(),
              )),
              (u.attributes.width = new q(
                this.document,
                'width',
                this.getAttribute('markerWidth').getValue(),
              )),
              (u.attributes.height = new q(
                this.document,
                'height',
                this.getAttribute('markerHeight').getValue(),
              )),
              (u.attributes.overflow = new q(
                this.document,
                'overflow',
                this.getAttribute('overflow').getValue(),
              )),
              (u.attributes.fill = new q(
                this.document,
                'fill',
                this.getAttribute('fill').getColor('black'),
              )),
              (u.attributes.stroke = new q(
                this.document,
                'stroke',
                this.getAttribute('stroke').getValue('none'),
              )),
              (u.children = this.children),
              u.render(t),
              t.restore(),
              'strokeWidth' === s && t.scale(1 / t.lineWidth, 1 / t.lineWidth),
              'auto' === o && t.rotate(-r),
              t.translate(-n, -i);
          }
        }
      }
      class Qr extends It {
        constructor() {
          super(...arguments), (this.type = 'defs');
        }
        render() {}
      }
      class er extends xe {
        constructor() {
          super(...arguments), (this.type = 'g');
        }
        getBoundingBox(t) {
          var e = new te();
          return (
            this.children.forEach((r) => {
              e.addBoundingBox(r.getBoundingBox(t));
            }),
            e
          );
        }
      }
      class br extends It {
        constructor(t, e, r) {
          super(t, e, r), (this.attributesToInherit = ['gradientUnits']), (this.stops = []);
          var { stops: n, children: i } = this;
          i.forEach((o) => {
            'stop' === o.type && n.push(o);
          });
        }
        getGradientUnits() {
          return this.getAttribute('gradientUnits').getString('objectBoundingBox');
        }
        createGradient(t, e, r) {
          var n = this;
          this.getHrefAttribute().hasValue() &&
            ((n = this.getHrefAttribute().getDefinition()), this.inheritStopContainer(n));
          var { stops: i } = n,
            o = this.getGradient(t, e);
          if (!o) return this.addParentOpacity(r, i[i.length - 1].color);
          if (
            (i.forEach((V) => {
              o.addColorStop(V.offset, this.addParentOpacity(r, V.color));
            }),
            this.getAttribute('gradientTransform').hasValue())
          ) {
            var { document: s } = this,
              { MAX_VIRTUAL_PIXELS: u, viewPort: h } = s.screen,
              [g] = h.viewPorts,
              x = new mr(s, null);
            (x.attributes.x = new q(s, 'x', -u / 3)),
              (x.attributes.y = new q(s, 'y', -u / 3)),
              (x.attributes.width = new q(s, 'width', u)),
              (x.attributes.height = new q(s, 'height', u));
            var b = new er(s, null);
            (b.attributes.transform = new q(
              s,
              'transform',
              this.getAttribute('gradientTransform').getValue(),
            )),
              (b.children = [x]);
            var y = new je(s, null);
            (y.attributes.x = new q(s, 'x', 0)),
              (y.attributes.y = new q(s, 'y', 0)),
              (y.attributes.width = new q(s, 'width', g.width)),
              (y.attributes.height = new q(s, 'height', g.height)),
              (y.children = [b]);
            var M = s.createCanvas(g.width, g.height),
              I = M.getContext('2d');
            return (I.fillStyle = o), y.render(I), I.createPattern(M, 'no-repeat');
          }
          return o;
        }
        inheritStopContainer(t) {
          this.attributesToInherit.forEach((e) => {
            !this.getAttribute(e).hasValue() &&
              t.getAttribute(e).hasValue() &&
              this.getAttribute(e, !0).setValue(t.getAttribute(e).getValue());
          });
        }
        addParentOpacity(t, e) {
          return t.hasValue() ? new q(this.document, 'color', e).addOpacity(t).getColor() : e;
        }
      }
      class kr extends br {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = 'linearGradient'),
            this.attributesToInherit.push('x1', 'y1', 'x2', 'y2');
        }
        getGradient(t, e) {
          var r = 'objectBoundingBox' === this.getGradientUnits(),
            n = r ? e.getBoundingBox(t) : null;
          if (r && !n) return null;
          !this.getAttribute('x1').hasValue() &&
            !this.getAttribute('y1').hasValue() &&
            !this.getAttribute('x2').hasValue() &&
            !this.getAttribute('y2').hasValue() &&
            (this.getAttribute('x1', !0).setValue(0),
            this.getAttribute('y1', !0).setValue(0),
            this.getAttribute('x2', !0).setValue(1),
            this.getAttribute('y2', !0).setValue(0));
          var i = r
              ? n.x + n.width * this.getAttribute('x1').getNumber()
              : this.getAttribute('x1').getPixels('x'),
            o = r
              ? n.y + n.height * this.getAttribute('y1').getNumber()
              : this.getAttribute('y1').getPixels('y'),
            s = r
              ? n.x + n.width * this.getAttribute('x2').getNumber()
              : this.getAttribute('x2').getPixels('x'),
            u = r
              ? n.y + n.height * this.getAttribute('y2').getNumber()
              : this.getAttribute('y2').getPixels('y');
          return i === s && o === u ? null : t.createLinearGradient(i, o, s, u);
        }
      }
      class Kr extends br {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = 'radialGradient'),
            this.attributesToInherit.push('cx', 'cy', 'r', 'fx', 'fy', 'fr');
        }
        getGradient(t, e) {
          var r = 'objectBoundingBox' === this.getGradientUnits(),
            n = e.getBoundingBox(t);
          if (r && !n) return null;
          this.getAttribute('cx').hasValue() || this.getAttribute('cx', !0).setValue('50%'),
            this.getAttribute('cy').hasValue() || this.getAttribute('cy', !0).setValue('50%'),
            this.getAttribute('r').hasValue() || this.getAttribute('r', !0).setValue('50%');
          var i = r
              ? n.x + n.width * this.getAttribute('cx').getNumber()
              : this.getAttribute('cx').getPixels('x'),
            o = r
              ? n.y + n.height * this.getAttribute('cy').getNumber()
              : this.getAttribute('cy').getPixels('y'),
            s = i,
            u = o;
          this.getAttribute('fx').hasValue() &&
            (s = r
              ? n.x + n.width * this.getAttribute('fx').getNumber()
              : this.getAttribute('fx').getPixels('x')),
            this.getAttribute('fy').hasValue() &&
              (u = r
                ? n.y + n.height * this.getAttribute('fy').getNumber()
                : this.getAttribute('fy').getPixels('y'));
          var h = r
              ? ((n.width + n.height) / 2) * this.getAttribute('r').getNumber()
              : this.getAttribute('r').getPixels(),
            g = this.getAttribute('fr').getPixels();
          return t.createRadialGradient(s, u, g, i, o, h);
        }
      }
      class Zr extends It {
        constructor(t, e, r) {
          super(t, e, r), (this.type = 'stop');
          var n = Math.max(0, Math.min(1, this.getAttribute('offset').getNumber())),
            i = this.getStyle('stop-opacity'),
            o = this.getStyle('stop-color', !0);
          '' === o.getString() && o.setValue('#000'),
            i.hasValue() && (o = o.addOpacity(i)),
            (this.offset = n),
            (this.color = o.getColor());
        }
      }
      class rr extends It {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = 'animate'),
            (this.duration = 0),
            (this.initialValue = null),
            (this.initialUnits = ''),
            (this.removed = !1),
            (this.frozen = !1),
            t.screen.animations.push(this),
            (this.begin = this.getAttribute('begin').getMilliseconds()),
            (this.maxDuration = this.begin + this.getAttribute('dur').getMilliseconds()),
            (this.from = this.getAttribute('from')),
            (this.to = this.getAttribute('to')),
            (this.values = new q(t, 'values', null));
          var n = this.getAttribute('values');
          n.hasValue() && this.values.setValue(n.getString().split(';'));
        }
        getProperty() {
          var t = this.getAttribute('attributeType').getString(),
            e = this.getAttribute('attributeName').getString();
          return 'CSS' === t ? this.parent.getStyle(e, !0) : this.parent.getAttribute(e, !0);
        }
        calcValue() {
          var { initialUnits: t } = this,
            { progress: e, from: r, to: n } = this.getProgress(),
            i = r.getNumber() + (n.getNumber() - r.getNumber()) * e;
          return '%' === t && (i *= 100), ''.concat(i).concat(t);
        }
        update(t) {
          var { parent: e } = this,
            r = this.getProperty();
          if (
            (this.initialValue ||
              ((this.initialValue = r.getString()), (this.initialUnits = r.getUnits())),
            this.duration > this.maxDuration)
          ) {
            var n = this.getAttribute('fill').getString('remove');
            if (
              'indefinite' === this.getAttribute('repeatCount').getString() ||
              'indefinite' === this.getAttribute('repeatDur').getString()
            )
              this.duration = 0;
            else if ('freeze' !== n || this.frozen) {
              if ('remove' === n && !this.removed)
                return (
                  (this.removed = !0),
                  r.setValue(e.animationFrozen ? e.animationFrozenValue : this.initialValue),
                  !0
                );
            } else
              (this.frozen = !0),
                (e.animationFrozen = !0),
                (e.animationFrozenValue = r.getString());
            return !1;
          }
          this.duration += t;
          var i = !1;
          if (this.begin < this.duration) {
            var o = this.calcValue(),
              s = this.getAttribute('type');
            if (s.hasValue()) {
              var u = s.getString();
              o = ''.concat(u, '(').concat(o, ')');
            }
            r.setValue(o), (i = !0);
          }
          return i;
        }
        getProgress() {
          var { document: t, values: e } = this,
            r = { progress: (this.duration - this.begin) / (this.maxDuration - this.begin) };
          if (e.hasValue()) {
            var n = r.progress * (e.getValue().length - 1),
              i = Math.floor(n),
              o = Math.ceil(n);
            (r.from = new q(t, 'from', parseFloat(e.getValue()[i]))),
              (r.to = new q(t, 'to', parseFloat(e.getValue()[o]))),
              (r.progress = (n - i) / (o - i));
          } else (r.from = this.from), (r.to = this.to);
          return r;
        }
      }
      class Jr extends rr {
        constructor() {
          super(...arguments), (this.type = 'animateColor');
        }
        calcValue() {
          var { progress: t, from: e, to: r } = this.getProgress(),
            n = new L(e.getColor()),
            i = new L(r.getColor());
          if (n.ok && i.ok) {
            var s = n.g + (i.g - n.g) * t,
              u = n.b + (i.b - n.b) * t;
            return 'rgb('
              .concat(Math.floor(n.r + (i.r - n.r) * t), ', ')
              .concat(Math.floor(s), ', ')
              .concat(Math.floor(u), ')');
          }
          return this.getAttribute('from').getColor();
        }
      }
      class qr extends rr {
        constructor() {
          super(...arguments), (this.type = 'animateTransform');
        }
        calcValue() {
          var { progress: t, from: e, to: r } = this.getProgress(),
            n = Gt(e.getString()),
            i = Gt(r.getString());
          return n.map((s, u) => s + (i[u] - s) * t).join(' ');
        }
      }
      class _r extends It {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = 'font'),
            (this.glyphs = {}),
            (this.horizAdvX = this.getAttribute('horiz-adv-x').getNumber());
          var { definitions: n } = t,
            { children: i } = this;
          for (var o of i)
            switch (o.type) {
              case 'font-face':
                this.fontFace = o;
                var s = o.getStyle('font-family');
                s.hasValue() && (n[s.getString()] = this);
                break;
              case 'missing-glyph':
                this.missingGlyph = o;
                break;
              case 'glyph':
                var u = o;
                u.arabicForm
                  ? ((this.isRTL = !0),
                    (this.isArabic = !0),
                    void 0 === this.glyphs[u.unicode] && (this.glyphs[u.unicode] = {}),
                    (this.glyphs[u.unicode][u.arabicForm] = u))
                  : (this.glyphs[u.unicode] = u);
            }
        }
        render() {}
      }
      class tn extends It {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = 'font-face'),
            (this.ascent = this.getAttribute('ascent').getNumber()),
            (this.descent = this.getAttribute('descent').getNumber()),
            (this.unitsPerEm = this.getAttribute('units-per-em').getNumber());
        }
      }
      class en extends Ot {
        constructor() {
          super(...arguments), (this.type = 'missing-glyph'), (this.horizAdvX = 0);
        }
      }
      class rn extends be {
        constructor() {
          super(...arguments), (this.type = 'tref');
        }
        getText() {
          var t = this.getHrefAttribute().getDefinition();
          if (t) {
            var e = t.children[0];
            if (e) return e.getText();
          }
          return '';
        }
      }
      class nn extends be {
        constructor(t, e, r) {
          super(t, e, r), (this.type = 'a');
          var { childNodes: n } = e,
            i = n[0],
            o = n.length > 0 && Array.from(n).every((s) => 3 === s.nodeType);
          (this.hasText = o), (this.text = o ? this.getTextFromNode(i) : '');
        }
        getText() {
          return this.text;
        }
        renderChildren(t) {
          if (this.hasText) {
            super.renderChildren(t);
            var { document: e, x: r, y: n } = this,
              { mouse: i } = e.screen,
              o = new q(e, 'fontSize', Re.parse(e.ctx.font).fontSize);
            i.isWorking() &&
              i.checkBoundingBox(this, new te(r, n - o.getPixels('y'), r + this.measureText(t), n));
          } else if (this.children.length > 0) {
            var s = new er(this.document, null);
            (s.children = this.children), (s.parent = this), s.render(t);
          }
        }
        onClick() {
          var { window: t } = this.document;
          t && t.open(this.getHrefAttribute().getString());
        }
        onMouseMove() {
          this.document.ctx.canvas.style.cursor = 'pointer';
        }
      }
      function an(l, t) {
        var e = Object.keys(l);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(l);
          t &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(l, n).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      function nr(l) {
        for (var t = 1; t < arguments.length; t++) {
          var e = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? an(Object(e), !0).forEach(function (r) {
                C(l, r, e[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(e))
            : an(Object(e)).forEach(function (r) {
                Object.defineProperty(l, r, Object.getOwnPropertyDescriptor(e, r));
              });
        }
        return l;
      }
      class sn extends be {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = 'textPath'),
            (this.textWidth = 0),
            (this.textHeight = 0),
            (this.pathLength = -1),
            (this.glyphInfo = null),
            (this.letterSpacingCache = []),
            (this.measuresCache = new Map([['', 0]]));
          var n = this.getHrefAttribute().getDefinition();
          (this.text = this.getTextFromNode()), (this.dataArray = this.parsePathData(n));
        }
        getText() {
          return this.text;
        }
        path(t) {
          var { dataArray: e } = this;
          t && t.beginPath(),
            e.forEach((r) => {
              var { type: n, points: i } = r;
              switch (n) {
                case ot.LINE_TO:
                  t && t.lineTo(i[0], i[1]);
                  break;
                case ot.MOVE_TO:
                  t && t.moveTo(i[0], i[1]);
                  break;
                case ot.CURVE_TO:
                  t && t.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
                  break;
                case ot.QUAD_TO:
                  t && t.quadraticCurveTo(i[0], i[1], i[2], i[3]);
                  break;
                case ot.ARC:
                  var [o, s, u, h, g, x, b, y] = i,
                    M = u > h ? u : h,
                    I = u > h ? 1 : u / h,
                    V = u > h ? h / u : 1;
                  t &&
                    (t.translate(o, s),
                    t.rotate(b),
                    t.scale(I, V),
                    t.arc(0, 0, M, g, g + x, Boolean(1 - y)),
                    t.scale(1 / I, 1 / V),
                    t.rotate(-b),
                    t.translate(-o, -s));
                  break;
                case ot.CLOSE_PATH:
                  t && t.closePath();
              }
            });
        }
        renderChildren(t) {
          this.setTextData(t), t.save();
          var e = this.parent.getStyle('text-decoration').getString(),
            r = this.getFontSize(),
            { glyphInfo: n } = this,
            i = t.fillStyle;
          'underline' === e && t.beginPath(),
            n.forEach((o, s) => {
              var { p0: u, p1: h, rotation: g, text: x } = o;
              t.save(),
                t.translate(u.x, u.y),
                t.rotate(g),
                t.fillStyle && t.fillText(x, 0, 0),
                t.strokeStyle && t.strokeText(x, 0, 0),
                t.restore(),
                'underline' === e &&
                  (0 === s && t.moveTo(u.x, u.y + r / 8), t.lineTo(h.x, h.y + r / 5));
            }),
            'underline' === e &&
              ((t.lineWidth = r / 20), (t.strokeStyle = i), t.stroke(), t.closePath()),
            t.restore();
        }
        getLetterSpacingAt() {
          return (
            this.letterSpacingCache[
              arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
            ] || 0
          );
        }
        findSegmentToFitChar(t, e, r, n, i, o, s, u, h) {
          var g = o,
            x = this.measureText(t, u);
          ' ' === u && 'justify' === e && r < n && (x += (n - r) / i),
            h > -1 && (g += this.getLetterSpacingAt(h));
          var b = this.textHeight / 20,
            y = this.getEquidistantPointOnPath(g, b, 0),
            M = this.getEquidistantPointOnPath(g + x, b, 0),
            I = { p0: y, p1: M },
            V = y && M ? Math.atan2(M.y - y.y, M.x - y.x) : 0;
          if (s) {
            var F = Math.cos(Math.PI / 2 + V) * s,
              Q = Math.cos(-V) * s;
            (I.p0 = nr(nr({}, y), {}, { x: y.x + F, y: y.y + Q })),
              (I.p1 = nr(nr({}, M), {}, { x: M.x + F, y: M.y + Q }));
          }
          return { offset: (g += x), segment: I, rotation: V };
        }
        measureText(t, e) {
          var { measuresCache: r } = this,
            n = e || this.getText();
          if (r.has(n)) return r.get(n);
          var i = this.measureTargetText(t, n);
          return r.set(n, i), i;
        }
        setTextData(t) {
          if (!this.glyphInfo) {
            var e = this.getText(),
              r = e.split(''),
              n = e.split(' ').length - 1,
              i = this.parent
                .getAttribute('dx')
                .split()
                .map((B) => B.getPixels('x')),
              o = this.parent.getAttribute('dy').getPixels('y'),
              s = this.parent.getStyle('text-anchor').getString('start'),
              u = this.getStyle('letter-spacing'),
              h = this.parent.getStyle('letter-spacing'),
              g = 0;
            u.hasValue() && 'inherit' !== u.getValue()
              ? u.hasValue() &&
                'initial' !== u.getValue() &&
                'unset' !== u.getValue() &&
                (g = u.getPixels())
              : (g = h.getPixels());
            var x = [],
              b = e.length;
            this.letterSpacingCache = x;
            for (var y = 0; y < b; y++) x.push(void 0 !== i[y] ? i[y] : g);
            var M = x.reduce((B, rt, ut) => (0 === ut ? 0 : B + rt || 0), 0),
              I = this.measureText(t),
              V = Math.max(I + M, 0);
            (this.textWidth = I), (this.textHeight = this.getFontSize()), (this.glyphInfo = []);
            var F = this.getPathLength(),
              Q = this.getStyle('startOffset').getNumber(0) * F,
              G = 0;
            ('middle' === s || 'center' === s) && (G = -V / 2),
              ('end' === s || 'right' === s) && (G = -V),
              (G += Q),
              r.forEach((B, rt) => {
                var {
                  offset: ut,
                  segment: X,
                  rotation: ft,
                } = this.findSegmentToFitChar(t, s, V, F, n, G, o, B, rt);
                (G = ut),
                  X.p0 &&
                    X.p1 &&
                    this.glyphInfo.push({ text: r[rt], p0: X.p0, p1: X.p1, rotation: ft });
              });
          }
        }
        parsePathData(t) {
          if (((this.pathLength = -1), !t)) return [];
          var e = [],
            { pathParser: r } = t;
          for (r.reset(); !r.isEnd(); ) {
            var { current: n } = r,
              i = n ? n.x : 0,
              o = n ? n.y : 0,
              s = r.next(),
              u = s.type,
              h = [];
            switch (s.type) {
              case ot.MOVE_TO:
                this.pathM(r, h);
                break;
              case ot.LINE_TO:
                u = this.pathL(r, h);
                break;
              case ot.HORIZ_LINE_TO:
                u = this.pathH(r, h);
                break;
              case ot.VERT_LINE_TO:
                u = this.pathV(r, h);
                break;
              case ot.CURVE_TO:
                this.pathC(r, h);
                break;
              case ot.SMOOTH_CURVE_TO:
                u = this.pathS(r, h);
                break;
              case ot.QUAD_TO:
                this.pathQ(r, h);
                break;
              case ot.SMOOTH_QUAD_TO:
                u = this.pathT(r, h);
                break;
              case ot.ARC:
                h = this.pathA(r);
                break;
              case ot.CLOSE_PATH:
                Ot.pathZ(r);
            }
            e.push(
              s.type !== ot.CLOSE_PATH
                ? {
                    type: u,
                    points: h,
                    start: { x: i, y: o },
                    pathLength: this.calcLength(i, o, u, h),
                  }
                : { type: ot.CLOSE_PATH, points: [], pathLength: 0 },
            );
          }
          return e;
        }
        pathM(t, e) {
          var { x: r, y: n } = Ot.pathM(t).point;
          e.push(r, n);
        }
        pathL(t, e) {
          var { x: r, y: n } = Ot.pathL(t).point;
          return e.push(r, n), ot.LINE_TO;
        }
        pathH(t, e) {
          var { x: r, y: n } = Ot.pathH(t).point;
          return e.push(r, n), ot.LINE_TO;
        }
        pathV(t, e) {
          var { x: r, y: n } = Ot.pathV(t).point;
          return e.push(r, n), ot.LINE_TO;
        }
        pathC(t, e) {
          var { point: r, controlPoint: n, currentPoint: i } = Ot.pathC(t);
          e.push(r.x, r.y, n.x, n.y, i.x, i.y);
        }
        pathS(t, e) {
          var { point: r, controlPoint: n, currentPoint: i } = Ot.pathS(t);
          return e.push(r.x, r.y, n.x, n.y, i.x, i.y), ot.CURVE_TO;
        }
        pathQ(t, e) {
          var { controlPoint: r, currentPoint: n } = Ot.pathQ(t);
          e.push(r.x, r.y, n.x, n.y);
        }
        pathT(t, e) {
          var { controlPoint: r, currentPoint: n } = Ot.pathT(t);
          return e.push(r.x, r.y, n.x, n.y), ot.QUAD_TO;
        }
        pathA(t) {
          var {
            rX: e,
            rY: r,
            sweepFlag: n,
            xAxisRotation: i,
            centp: o,
            a1: s,
            ad: u,
          } = Ot.pathA(t);
          return (
            0 === n && u > 0 && (u -= 2 * Math.PI),
            1 === n && u < 0 && (u += 2 * Math.PI),
            [o.x, o.y, e, r, s, u, i, n]
          );
        }
        calcLength(t, e, r, n) {
          var i = 0,
            o = null,
            s = null,
            u = 0;
          switch (r) {
            case ot.LINE_TO:
              return this.getLineLength(t, e, n[0], n[1]);
            case ot.CURVE_TO:
              for (
                i = 0,
                  o = this.getPointOnCubicBezier(0, t, e, n[0], n[1], n[2], n[3], n[4], n[5]),
                  u = 0.01;
                u <= 1;
                u += 0.01
              )
                (s = this.getPointOnCubicBezier(u, t, e, n[0], n[1], n[2], n[3], n[4], n[5])),
                  (i += this.getLineLength(o.x, o.y, s.x, s.y)),
                  (o = s);
              return i;
            case ot.QUAD_TO:
              for (
                i = 0,
                  o = this.getPointOnQuadraticBezier(0, t, e, n[0], n[1], n[2], n[3]),
                  u = 0.01;
                u <= 1;
                u += 0.01
              )
                (s = this.getPointOnQuadraticBezier(u, t, e, n[0], n[1], n[2], n[3])),
                  (i += this.getLineLength(o.x, o.y, s.x, s.y)),
                  (o = s);
              return i;
            case ot.ARC:
              i = 0;
              var h = n[4],
                g = n[5],
                x = n[4] + g,
                b = Math.PI / 180;
              if (
                (Math.abs(h - x) < b && (b = Math.abs(h - x)),
                (o = this.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], h, 0)),
                g < 0)
              )
                for (u = h - b; u > x; u -= b)
                  (s = this.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], u, 0)),
                    (i += this.getLineLength(o.x, o.y, s.x, s.y)),
                    (o = s);
              else
                for (u = h + b; u < x; u += b)
                  (s = this.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], u, 0)),
                    (i += this.getLineLength(o.x, o.y, s.x, s.y)),
                    (o = s);
              return (
                (s = this.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], x, 0)),
                i + this.getLineLength(o.x, o.y, s.x, s.y)
              );
          }
          return 0;
        }
        getPointOnLine(t, e, r, n, i) {
          var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : e,
            s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : r,
            u = (i - r) / (n - e + it),
            h = Math.sqrt((t * t) / (1 + u * u));
          n < e && (h *= -1);
          var g = u * h,
            x = null;
          if (n === e) x = { x: o, y: s + g };
          else if ((s - r) / (o - e + it) === u) x = { x: o + h, y: s + g };
          else {
            var b,
              y,
              M = this.getLineLength(e, r, n, i);
            if (M < it) return null;
            var I = (o - e) * (n - e) + (s - r) * (i - r),
              V = this.getLineLength(o, s, (b = e + (I /= M * M) * (n - e)), (y = r + I * (i - r))),
              F = Math.sqrt(t * t - V * V);
            (h = Math.sqrt((F * F) / (1 + u * u))),
              n < e && (h *= -1),
              (x = { x: b + h, y: y + (g = u * h) });
          }
          return x;
        }
        getPointOnPath(t) {
          var e = this.getPathLength(),
            r = 0,
            n = null;
          if (t < -5e-5 || t - 5e-5 > e) return null;
          var { dataArray: i } = this;
          for (var o of i) {
            if (!o || !(o.pathLength < 5e-5 || r + o.pathLength + 5e-5 < t)) {
              var s = t - r,
                u = 0;
              switch (o.type) {
                case ot.LINE_TO:
                  n = this.getPointOnLine(
                    s,
                    o.start.x,
                    o.start.y,
                    o.points[0],
                    o.points[1],
                    o.start.x,
                    o.start.y,
                  );
                  break;
                case ot.ARC:
                  var g = o.points[5],
                    x = o.points[4] + g;
                  if (
                    ((u = o.points[4] + (s / o.pathLength) * g),
                    (g < 0 && u < x) || (g >= 0 && u > x))
                  )
                    break;
                  n = this.getPointOnEllipticalArc(
                    o.points[0],
                    o.points[1],
                    o.points[2],
                    o.points[3],
                    u,
                    o.points[6],
                  );
                  break;
                case ot.CURVE_TO:
                  (u = s / o.pathLength) > 1 && (u = 1),
                    (n = this.getPointOnCubicBezier(
                      u,
                      o.start.x,
                      o.start.y,
                      o.points[0],
                      o.points[1],
                      o.points[2],
                      o.points[3],
                      o.points[4],
                      o.points[5],
                    ));
                  break;
                case ot.QUAD_TO:
                  (u = s / o.pathLength) > 1 && (u = 1),
                    (n = this.getPointOnQuadraticBezier(
                      u,
                      o.start.x,
                      o.start.y,
                      o.points[0],
                      o.points[1],
                      o.points[2],
                      o.points[3],
                    ));
              }
              if (n) return n;
              break;
            }
            r += o.pathLength;
          }
          return null;
        }
        getLineLength(t, e, r, n) {
          return Math.sqrt((r - t) * (r - t) + (n - e) * (n - e));
        }
        getPathLength() {
          return (
            -1 === this.pathLength &&
              (this.pathLength = this.dataArray.reduce(
                (t, e) => (e.pathLength > 0 ? t + e.pathLength : t),
                0,
              )),
            this.pathLength
          );
        }
        getPointOnCubicBezier(t, e, r, n, i, o, s, u, h) {
          return {
            x: u * Wt(t) + o * ne(t) + n * ie(t) + e * se(t),
            y: h * Wt(t) + s * ne(t) + i * ie(t) + r * se(t),
          };
        }
        getPointOnQuadraticBezier(t, e, r, n, i, o, s) {
          return { x: o * Xt(t) + n * _t(t) + e * me(t), y: s * Xt(t) + i * _t(t) + r * me(t) };
        }
        getPointOnEllipticalArc(t, e, r, n, i, o) {
          var s = Math.cos(o),
            u = Math.sin(o),
            h_x = r * Math.cos(i),
            h_y = n * Math.sin(i);
          return { x: t + (h_x * s - h_y * u), y: e + (h_x * u + h_y * s) };
        }
        buildEquidistantCache(t, e) {
          var r = this.getPathLength(),
            n = e || 0.25,
            i = t || r / 100;
          if (
            !this.equidistantCache ||
            this.equidistantCache.step !== i ||
            this.equidistantCache.precision !== n
          ) {
            this.equidistantCache = { step: i, precision: n, points: [] };
            for (var o = 0, s = 0; s <= r; s += n) {
              var u = this.getPointOnPath(s),
                h = this.getPointOnPath(s + n);
              !u ||
                !h ||
                ((o += this.getLineLength(u.x, u.y, h.x, h.y)) >= i &&
                  (this.equidistantCache.points.push({ x: u.x, y: u.y, distance: s }), (o -= i)));
            }
          }
        }
        getEquidistantPointOnPath(t, e, r) {
          if ((this.buildEquidistantCache(e, r), t < 0 || t - this.getPathLength() > 5e-5))
            return null;
          var n = Math.round(
            (t / this.getPathLength()) * (this.equidistantCache.points.length - 1),
          );
          return this.equidistantCache.points[n] || null;
        }
      }
      var Fn = /^\s*data:(([^/,;]+\/[^/,;]+)(?:;([^,;=]+=[^,;=]+))?)?(?:;(base64))?,(.*)$/i;
      class on extends xe {
        constructor(t, e, r) {
          super(t, e, r), (this.type = 'image'), (this.loaded = !1);
          var n = this.getHrefAttribute().getString();
          if (n) {
            var i = n.endsWith('.svg') || /^\s*data:image\/svg\+xml/i.test(n);
            t.images.push(this), i ? this.loadSvg(n) : this.loadImage(n), (this.isSvg = i);
          }
        }
        loadImage(t) {
          var e = this;
          return c(function* () {
            try {
              var r = yield e.document.createImage(t);
              e.image = r;
            } catch (n) {
              console.error('Error while loading image "'.concat(t, '":'), n);
            }
            e.loaded = !0;
          })();
        }
        loadSvg(t) {
          var e = this;
          return c(function* () {
            var r = Fn.exec(t);
            if (r) {
              var n = r[5];
              e.image = 'base64' === r[4] ? atob(n) : decodeURIComponent(n);
            } else
              try {
                var i = yield e.document.fetch(t),
                  o = yield i.text();
                e.image = o;
              } catch (s) {
                console.error('Error while loading image "'.concat(t, '":'), s);
              }
            e.loaded = !0;
          })();
        }
        renderChildren(t) {
          var { document: e, image: r, loaded: n } = this,
            i = this.getAttribute('x').getPixels('x'),
            o = this.getAttribute('y').getPixels('y'),
            s = this.getStyle('width').getPixels('x'),
            u = this.getStyle('height').getPixels('y');
          if (n && r && s && u) {
            if ((t.save(), t.translate(i, o), this.isSvg)) {
              var h = e.canvg.forkString(t, this.image, {
                ignoreMouse: !0,
                ignoreAnimation: !0,
                ignoreDimensions: !0,
                ignoreClear: !0,
                offsetX: 0,
                offsetY: 0,
                scaleWidth: s,
                scaleHeight: u,
              });
              (h.document.documentElement.parent = this), h.render();
            } else {
              var g = this.image;
              e.setViewBox({
                ctx: t,
                aspectRatio: this.getAttribute('preserveAspectRatio').getString(),
                width: s,
                desiredWidth: g.width,
                height: u,
                desiredHeight: g.height,
              }),
                this.loaded && (void 0 === g.complete || g.complete) && t.drawImage(g, 0, 0);
            }
            t.restore();
          }
        }
        getBoundingBox() {
          var t = this.getAttribute('x').getPixels('x'),
            e = this.getAttribute('y').getPixels('y'),
            r = this.getStyle('width').getPixels('x'),
            n = this.getStyle('height').getPixels('y');
          return new te(t, e, t + r, e + n);
        }
      }
      class un extends xe {
        constructor() {
          super(...arguments), (this.type = 'symbol');
        }
        render(t) {}
      }
      class ln {
        constructor(t) {
          (this.document = t), (this.loaded = !1), t.fonts.push(this);
        }
        load(t, e) {
          var r = this;
          return c(function* () {
            try {
              var { document: n } = r,
                o = (yield n.canvg.parser.load(e)).getElementsByTagName('font');
              Array.from(o).forEach((s) => {
                var u = n.createElement(s);
                n.definitions[t] = u;
              });
            } catch (s) {
              console.error('Error while loading font "'.concat(e, '":'), s);
            }
            r.loaded = !0;
          })();
        }
      }
      let hn = (() => {
        class l extends It {
          constructor(e, r, n) {
            super(e, r, n),
              (this.type = 'style'),
              qt(
                Array.from(r.childNodes)
                  .map((s) => s.textContent)
                  .join('')
                  .replace(/(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, '')
                  .replace(/@import.*;/g, ''),
              )
                .split('}')
                .forEach((s) => {
                  var u = s.trim();
                  if (u) {
                    var h = u.split('{'),
                      g = h[0].split(','),
                      x = h[1].split(';');
                    g.forEach((b) => {
                      var y = b.trim();
                      if (y) {
                        var M = e.styles[y] || {};
                        if (
                          (x.forEach((F) => {
                            var Q = F.indexOf(':'),
                              G = F.substr(0, Q).trim(),
                              B = F.substr(Q + 1, F.length - Q).trim();
                            G && B && (M[G] = new q(e, G, B));
                          }),
                          (e.styles[y] = M),
                          (e.stylesSpecificity[y] = at(y)),
                          '@font-face' === y)
                        ) {
                          var I = M['font-family'].getString().replace(/"|'/g, '');
                          M.src
                            .getString()
                            .split(',')
                            .forEach((F) => {
                              if (F.indexOf('format("svg")') > 0) {
                                var Q = Fe(F);
                                Q && new ln(e).load(I, Q);
                              }
                            });
                        }
                      }
                    });
                  }
                });
          }
        }
        return (l.parseExternalUrl = Fe), l;
      })();
      class fn extends xe {
        constructor() {
          super(...arguments), (this.type = 'use');
        }
        setContext(t) {
          super.setContext(t);
          var e = this.getAttribute('x'),
            r = this.getAttribute('y');
          e.hasValue() && t.translate(e.getPixels('x'), 0),
            r.hasValue() && t.translate(0, r.getPixels('y'));
        }
        path(t) {
          var { element: e } = this;
          e && e.path(t);
        }
        renderChildren(t) {
          var { document: e, element: r } = this;
          if (r) {
            var n = r;
            if (
              ('symbol' === r.type &&
                (((n = new je(e, null)).attributes.viewBox = new q(
                  e,
                  'viewBox',
                  r.getAttribute('viewBox').getString(),
                )),
                (n.attributes.preserveAspectRatio = new q(
                  e,
                  'preserveAspectRatio',
                  r.getAttribute('preserveAspectRatio').getString(),
                )),
                (n.attributes.overflow = new q(
                  e,
                  'overflow',
                  r.getAttribute('overflow').getString(),
                )),
                (n.children = r.children),
                (r.styles.opacity = new q(e, 'opacity', this.calculateOpacity()))),
              'svg' === n.type)
            ) {
              var i = this.getStyle('width', !1, !0),
                o = this.getStyle('height', !1, !0);
              i.hasValue() && (n.attributes.width = new q(e, 'width', i.getString())),
                o.hasValue() && (n.attributes.height = new q(e, 'height', o.getString()));
            }
            var s = n.parent;
            (n.parent = this), n.render(t), (n.parent = s);
          }
        }
        getBoundingBox(t) {
          var { element: e } = this;
          return e ? e.getBoundingBox(t) : null;
        }
        elementTransform() {
          var { document: t, element: e } = this;
          return tr.fromElement(t, e);
        }
        get element() {
          return (
            this.cachedElement || (this.cachedElement = this.getHrefAttribute().getDefinition()),
            this.cachedElement
          );
        }
      }
      function ar(l, t, e, r, n, i) {
        return l[e * r * 4 + 4 * t + i];
      }
      function ir(l, t, e, r, n, i, o) {
        l[e * r * 4 + 4 * t + i] = o;
      }
      function Dt(l, t, e) {
        return l[t] * e;
      }
      function ve(l, t, e, r) {
        return t + Math.cos(l) * e + Math.sin(l) * r;
      }
      class Er extends It {
        constructor(t, e, r) {
          super(t, e, r), (this.type = 'feColorMatrix');
          var n = Gt(this.getAttribute('values').getString());
          switch (this.getAttribute('type').getString('matrix')) {
            case 'saturate':
              var i = n[0];
              n = [
                0.213 + 0.787 * i,
                0.715 - 0.715 * i,
                0.072 - 0.072 * i,
                0,
                0,
                0.213 - 0.213 * i,
                0.715 + 0.285 * i,
                0.072 - 0.072 * i,
                0,
                0,
                0.213 - 0.213 * i,
                0.715 - 0.715 * i,
                0.072 + 0.928 * i,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                1,
              ];
              break;
            case 'hueRotate':
              var o = (n[0] * Math.PI) / 180;
              n = [
                ve(o, 0.213, 0.787, -0.213),
                ve(o, 0.715, -0.715, -0.715),
                ve(o, 0.072, -0.072, 0.928),
                0,
                0,
                ve(o, 0.213, -0.213, 0.143),
                ve(o, 0.715, 0.285, 0.14),
                ve(o, 0.072, -0.072, -0.283),
                0,
                0,
                ve(o, 0.213, -0.213, -0.787),
                ve(o, 0.715, -0.715, 0.715),
                ve(o, 0.072, 0.928, 0.072),
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                1,
              ];
              break;
            case 'luminanceToAlpha':
              n = [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2125, 0.7154, 0.0721, 0, 0, 0, 0, 0,
                0, 1,
              ];
          }
          (this.matrix = n), (this.includeOpacity = this.getAttribute('includeOpacity').hasValue());
        }
        apply(t, e, r, n, i) {
          for (
            var { includeOpacity: o, matrix: s } = this, u = t.getImageData(0, 0, n, i), h = 0;
            h < i;
            h++
          )
            for (var g = 0; g < n; g++) {
              var x = ar(u.data, g, h, n, 0, 0),
                b = ar(u.data, g, h, n, 0, 1),
                y = ar(u.data, g, h, n, 0, 2),
                M = ar(u.data, g, h, n, 0, 3),
                I = Dt(s, 0, x) + Dt(s, 1, b) + Dt(s, 2, y) + Dt(s, 3, M) + Dt(s, 4, 1),
                V = Dt(s, 5, x) + Dt(s, 6, b) + Dt(s, 7, y) + Dt(s, 8, M) + Dt(s, 9, 1),
                F = Dt(s, 10, x) + Dt(s, 11, b) + Dt(s, 12, y) + Dt(s, 13, M) + Dt(s, 14, 1),
                Q = Dt(s, 15, x) + Dt(s, 16, b) + Dt(s, 17, y) + Dt(s, 18, M) + Dt(s, 19, 1);
              o && ((I = 0), (V = 0), (F = 0), (Q *= M / 255)),
                ir(u.data, g, h, n, 0, 0, I),
                ir(u.data, g, h, n, 0, 1, V),
                ir(u.data, g, h, n, 0, 2, F),
                ir(u.data, g, h, n, 0, 3, Q);
            }
          t.clearRect(0, 0, n, i), t.putImageData(u, 0, 0);
        }
      }
      let vn = (() => {
        class l extends It {
          constructor() {
            super(...arguments), (this.type = 'mask');
          }
          apply(e, r) {
            var { document: n } = this,
              i = this.getAttribute('x').getPixels('x'),
              o = this.getAttribute('y').getPixels('y'),
              s = this.getStyle('width').getPixels('x'),
              u = this.getStyle('height').getPixels('y');
            if (!s && !u) {
              var h = new te();
              this.children.forEach((I) => {
                h.addBoundingBox(I.getBoundingBox(e));
              }),
                (i = Math.floor(h.x1)),
                (o = Math.floor(h.y1)),
                (s = Math.floor(h.width)),
                (u = Math.floor(h.height));
            }
            var g = this.removeStyles(r, l.ignoreStyles),
              x = n.createCanvas(i + s, o + u),
              b = x.getContext('2d');
            n.screen.setDefaults(b),
              this.renderChildren(b),
              new Er(n, {
                nodeType: 1,
                childNodes: [],
                attributes: [
                  { nodeName: 'type', value: 'luminanceToAlpha' },
                  { nodeName: 'includeOpacity', value: 'true' },
                ],
              }).apply(b, 0, 0, i + s, o + u);
            var y = n.createCanvas(i + s, o + u),
              M = y.getContext('2d');
            n.screen.setDefaults(M),
              r.render(M),
              (M.globalCompositeOperation = 'destination-in'),
              (M.fillStyle = b.createPattern(x, 'no-repeat')),
              M.fillRect(0, 0, i + s, o + u),
              (e.fillStyle = M.createPattern(y, 'no-repeat')),
              e.fillRect(0, 0, i + s, o + u),
              this.restoreStyles(r, g);
          }
          render(e) {}
        }
        return (l.ignoreStyles = ['mask', 'transform', 'clip-path']), l;
      })();
      var cn = () => {};
      class gn extends It {
        constructor() {
          super(...arguments), (this.type = 'clipPath');
        }
        apply(t) {
          var { document: e } = this,
            r = Reflect.getPrototypeOf(t),
            { beginPath: n, closePath: i } = t;
          r && ((r.beginPath = cn), (r.closePath = cn)),
            Reflect.apply(n, t, []),
            this.children.forEach((o) => {
              if (void 0 !== o.path) {
                var s = void 0 !== o.elementTransform ? o.elementTransform() : null;
                s || (s = tr.fromElement(e, o)),
                  s && s.apply(t),
                  o.path(t),
                  r && (r.closePath = i),
                  s && s.unapply(t);
              }
            }),
            Reflect.apply(i, t, []),
            t.clip(),
            r && ((r.beginPath = n), (r.closePath = i));
        }
        render(t) {}
      }
      let dn = (() => {
        class l extends It {
          constructor() {
            super(...arguments), (this.type = 'filter');
          }
          apply(e, r) {
            var { document: n, children: i } = this,
              o = r.getBoundingBox(e);
            if (o) {
              var s = 0,
                u = 0;
              i.forEach((Q) => {
                var G = Q.extraFilterDistance || 0;
                (s = Math.max(s, G)), (u = Math.max(u, G));
              });
              var h = Math.floor(o.width),
                g = Math.floor(o.height),
                x = h + 2 * s,
                b = g + 2 * u;
              if (!(x < 1 || b < 1)) {
                var y = Math.floor(o.x),
                  M = Math.floor(o.y),
                  I = this.removeStyles(r, l.ignoreStyles),
                  V = n.createCanvas(x, b),
                  F = V.getContext('2d');
                n.screen.setDefaults(F),
                  F.translate(-y + s, -M + u),
                  r.render(F),
                  i.forEach((Q) => {
                    'function' == typeof Q.apply && Q.apply(F, 0, 0, x, b);
                  }),
                  e.drawImage(V, 0, 0, x, b, y - s, M - u, x, b),
                  this.restoreStyles(r, I);
              }
            }
          }
          render(e) {}
        }
        return (l.ignoreStyles = ['filter', 'transform', 'clip-path']), l;
      })();
      class pn extends It {
        constructor(t, e, r) {
          super(t, e, r), (this.type = 'feDropShadow'), this.addStylesFromStyleDefinition();
        }
        apply(t, e, r, n, i) {}
      }
      class yn extends It {
        constructor() {
          super(...arguments), (this.type = 'feMorphology');
        }
        apply(t, e, r, n, i) {}
      }
      class mn extends It {
        constructor() {
          super(...arguments), (this.type = 'feComposite');
        }
        apply(t, e, r, n, i) {}
      }
      class xn extends It {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = 'feGaussianBlur'),
            (this.blurRadius = Math.floor(this.getAttribute('stdDeviation').getNumber())),
            (this.extraFilterDistance = this.blurRadius);
        }
        apply(t, e, r, n, i) {
          var { document: o, blurRadius: s } = this,
            u = o.window ? o.window.document.body : null,
            h = t.canvas;
          (h.id = o.getUniqueId()),
            u && ((h.style.display = 'none'), u.appendChild(h)),
            re(h, e, r, n, i, s),
            u && u.removeChild(h);
        }
      }
      class bn extends It {
        constructor() {
          super(...arguments), (this.type = 'title');
        }
      }
      class En extends It {
        constructor() {
          super(...arguments), (this.type = 'desc');
        }
      }
      var Bn = {
        svg: je,
        rect: mr,
        circle: Gr,
        ellipse: Hr,
        line: Yr,
        polyline: xr,
        polygon: Wr,
        path: Ot,
        pattern: $r,
        marker: Xr,
        defs: Qr,
        linearGradient: kr,
        radialGradient: Kr,
        stop: Zr,
        animate: rr,
        animateColor: Jr,
        animateTransform: qr,
        font: _r,
        'font-face': tn,
        'missing-glyph': en,
        glyph: yr,
        text: be,
        tspan: Qe,
        tref: rn,
        a: nn,
        textPath: sn,
        image: on,
        g: er,
        symbol: un,
        style: hn,
        use: fn,
        mask: vn,
        clipPath: gn,
        filter: dn,
        feDropShadow: pn,
        feMorphology: yn,
        feComposite: mn,
        feColorMatrix: Er,
        feGaussianBlur: xn,
        title: bn,
        desc: En,
      };
      function Tn(l, t) {
        var e = Object.keys(l);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(l);
          t &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(l, n).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      function jn(l, t) {
        var e = document.createElement('canvas');
        return (e.width = l), (e.height = t), e;
      }
      function zn(l) {
        return Tr.apply(this, arguments);
      }
      function Tr() {
        return (
          (Tr = c(function* (l) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              e = document.createElement('img');
            return (
              t && (e.crossOrigin = 'Anonymous'),
              new Promise((r, n) => {
                (e.onload = () => {
                  r(e);
                }),
                  (e.onerror = (i, o, s, u, h) => {
                    n(h);
                  }),
                  (e.src = l);
              })
            );
          })),
          Tr.apply(this, arguments)
        );
      }
      let On = (() => {
        class l {
          constructor(e) {
            var {
              rootEmSize: r = 12,
              emSize: n = 12,
              createCanvas: i = l.createCanvas,
              createImage: o = l.createImage,
              anonymousCrossOrigin: s,
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            (this.canvg = e),
              (this.definitions = {}),
              (this.styles = {}),
              (this.stylesSpecificity = {}),
              (this.images = []),
              (this.fonts = []),
              (this.emSizeStack = []),
              (this.uniqueId = 0),
              (this.screen = e.screen),
              (this.rootEmSize = r),
              (this.emSize = n),
              (this.createCanvas = i),
              (this.createImage = this.bindCreateImage(o, s)),
              this.screen.wait(this.isImagesLoaded.bind(this)),
              this.screen.wait(this.isFontsLoaded.bind(this));
          }
          bindCreateImage(e, r) {
            return 'boolean' == typeof r ? (n, i) => e(n, 'boolean' == typeof i ? i : r) : e;
          }
          get window() {
            return this.screen.window;
          }
          get fetch() {
            return this.screen.fetch;
          }
          get ctx() {
            return this.screen.ctx;
          }
          get emSize() {
            var { emSizeStack: e } = this;
            return e[e.length - 1];
          }
          set emSize(e) {
            var { emSizeStack: r } = this;
            r.push(e);
          }
          popEmSize() {
            var { emSizeStack: e } = this;
            e.pop();
          }
          getUniqueId() {
            return 'canvg'.concat(++this.uniqueId);
          }
          isImagesLoaded() {
            return this.images.every((e) => e.loaded);
          }
          isFontsLoaded() {
            return this.fonts.every((e) => e.loaded);
          }
          createDocumentElement(e) {
            var r = this.createElement(e.documentElement);
            return (r.root = !0), r.addStylesFromStyleDefinition(), (this.documentElement = r), r;
          }
          createElement(e) {
            var r = e.nodeName.replace(/^[^:]+:/, ''),
              n = l.elementTypes[r];
            return void 0 !== n ? new n(this, e) : new zr(this, e);
          }
          createTextNode(e) {
            return new Dn(this, e);
          }
          setViewBox(e) {
            this.screen.setViewBox(
              (function (l) {
                for (var t = 1; t < arguments.length; t++) {
                  var e = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? Tn(Object(e), !0).forEach(function (r) {
                        C(l, r, e[r]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(e))
                    : Tn(Object(e)).forEach(function (r) {
                        Object.defineProperty(l, r, Object.getOwnPropertyDescriptor(e, r));
                      });
                }
                return l;
              })({ document: this }, e),
            );
          }
        }
        return (l.createCanvas = jn), (l.createImage = zn), (l.elementTypes = Bn), l;
      })();
      function Sn(l, t) {
        var e = Object.keys(l);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(l);
          t &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(l, n).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      function Ne(l) {
        for (var t = 1; t < arguments.length; t++) {
          var e = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Sn(Object(e), !0).forEach(function (r) {
                C(l, r, e[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(e))
            : Sn(Object(e)).forEach(function (r) {
                Object.defineProperty(l, r, Object.getOwnPropertyDescriptor(e, r));
              });
        }
        return l;
      }
      class Me {
        constructor(t, e) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          (this.parser = new _e(r)), (this.screen = new gr(t, r)), (this.options = r);
          var n = new On(this, r),
            i = n.createDocumentElement(e);
          (this.document = n), (this.documentElement = i);
        }
        static from(t, e) {
          var r = arguments;
          return c(function* () {
            var n = r.length > 2 && void 0 !== r[2] ? r[2] : {},
              i = new _e(n),
              o = yield i.parse(e);
            return new Me(t, o, n);
          })();
        }
        static fromString(t, e) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = new _e(r).parseFromString(e);
          return new Me(t, i, r);
        }
        fork(t, e) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return Me.from(t, e, Ne(Ne({}, this.options), r));
        }
        forkString(t, e) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return Me.fromString(t, e, Ne(Ne({}, this.options), r));
        }
        ready() {
          return this.screen.ready();
        }
        isReady() {
          return this.screen.isReady();
        }
        render() {
          var t = arguments,
            e = this;
          return c(function* () {
            e.start(
              Ne(
                { enableRedraw: !0, ignoreAnimation: !0, ignoreMouse: !0 },
                t.length > 0 && void 0 !== t[0] ? t[0] : {},
              ),
            ),
              yield e.ready(),
              e.stop();
          })();
        }
        start() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { documentElement: e, screen: r, options: n } = this;
          r.start(e, Ne(Ne({ enableRedraw: !0 }, n), t));
        }
        stop() {
          this.screen.stop();
        }
        resize(t) {
          this.documentElement.resize(
            t,
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          );
        }
      }
      const Gn = Me;
    },
  },
]);
