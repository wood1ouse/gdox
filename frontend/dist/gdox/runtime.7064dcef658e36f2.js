(() => {
  'use strict';
  var e,
    g = {},
    v = {};
  function r(e) {
    var o = v[e];
    if (void 0 !== o) return o.exports;
    var t = (v[e] = { exports: {} });
    return g[e].call(t.exports, t, t.exports, r), t.exports;
  }
  (r.m = g),
    (e = []),
    (r.O = (o, t, f, i) => {
      if (!t) {
        var a = 1 / 0;
        for (n = 0; n < e.length; n++) {
          for (var [t, f, i] = e[n], u = !0, s = 0; s < t.length; s++)
            (!1 & i || a >= i) && Object.keys(r.O).every((b) => r.O[b](t[s]))
              ? t.splice(s--, 1)
              : ((u = !1), i < a && (a = i));
          if (u) {
            e.splice(n--, 1);
            var l = f();
            void 0 !== l && (o = l);
          }
        }
        return o;
      }
      i = i || 0;
      for (var n = e.length; n > 0 && e[n - 1][2] > i; n--) e[n] = e[n - 1];
      e[n] = [t, f, i];
    }),
    (r.n = (e) => {
      var o = e && e.__esModule ? () => e.default : () => e;
      return r.d(o, { a: o }), o;
    }),
    (() => {
      var o,
        e = Object.getPrototypeOf ? (t) => Object.getPrototypeOf(t) : (t) => t.__proto__;
      r.t = function (t, f) {
        if (
          (1 & f && (t = this(t)),
          8 & f ||
            ('object' == typeof t &&
              t &&
              ((4 & f && t.__esModule) || (16 & f && 'function' == typeof t.then))))
        )
          return t;
        var i = Object.create(null);
        r.r(i);
        var n = {};
        o = o || [null, e({}), e([]), e(e)];
        for (var a = 2 & f && t; 'object' == typeof a && !~o.indexOf(a); a = e(a))
          Object.getOwnPropertyNames(a).forEach((u) => (n[u] = () => t[u]));
        return (n.default = () => t), r.d(i, n), i;
      };
    })(),
    (r.d = (e, o) => {
      for (var t in o)
        r.o(o, t) && !r.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: o[t] });
    }),
    (r.f = {}),
    (r.e = (e) => Promise.all(Object.keys(r.f).reduce((o, t) => (r.f[t](e, o), o), []))),
    (r.u = (e) =>
      e +
      '.' +
      { 94: '35954dd758f8a9e3', 209: '4eb647a6cc126315', 794: '9454587831480711' }[e] +
      '.js'),
    (r.miniCssF = (e) => 'styles.74f11045a383946a.css'),
    (r.o = (e, o) => Object.prototype.hasOwnProperty.call(e, o)),
    (() => {
      var e = {},
        o = 'gdox:';
      r.l = (t, f, i, n) => {
        if (e[t]) e[t].push(f);
        else {
          var a, u;
          if (void 0 !== i)
            for (var s = document.getElementsByTagName('script'), l = 0; l < s.length; l++) {
              var d = s[l];
              if (d.getAttribute('src') == t || d.getAttribute('data-webpack') == o + i) {
                a = d;
                break;
              }
            }
          a ||
            ((u = !0),
            ((a = document.createElement('script')).type = 'module'),
            (a.charset = 'utf-8'),
            (a.timeout = 120),
            r.nc && a.setAttribute('nonce', r.nc),
            a.setAttribute('data-webpack', o + i),
            (a.src = r.tu(t))),
            (e[t] = [f]);
          var c = (_, b) => {
              (a.onerror = a.onload = null), clearTimeout(p);
              var y = e[t];
              if (
                (delete e[t],
                a.parentNode && a.parentNode.removeChild(a),
                y && y.forEach((m) => m(b)),
                _)
              )
                return _(b);
            },
            p = setTimeout(c.bind(null, void 0, { type: 'timeout', target: a }), 12e4);
          (a.onerror = c.bind(null, a.onerror)),
            (a.onload = c.bind(null, a.onload)),
            u && document.head.appendChild(a);
        }
      };
    })(),
    (r.r = (e) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (() => {
      var e;
      r.tu = (o) => (
        void 0 === e &&
          ((e = { createScriptURL: (t) => t }),
          'undefined' != typeof trustedTypes &&
            trustedTypes.createPolicy &&
            (e = trustedTypes.createPolicy('angular#bundler', e))),
        e.createScriptURL(o)
      );
    })(),
    (r.p = ''),
    (() => {
      var e = { 666: 0 };
      (r.f.j = (f, i) => {
        var n = r.o(e, f) ? e[f] : void 0;
        if (0 !== n)
          if (n) i.push(n[2]);
          else if (666 != f) {
            var a = new Promise((d, c) => (n = e[f] = [d, c]));
            i.push((n[2] = a));
            var u = r.p + r.u(f),
              s = new Error();
            r.l(
              u,
              (d) => {
                if (r.o(e, f) && (0 !== (n = e[f]) && (e[f] = void 0), n)) {
                  var c = d && ('load' === d.type ? 'missing' : d.type),
                    p = d && d.target && d.target.src;
                  (s.message = 'Loading chunk ' + f + ' failed.\n(' + c + ': ' + p + ')'),
                    (s.name = 'ChunkLoadError'),
                    (s.type = c),
                    (s.request = p),
                    n[1](s);
                }
              },
              'chunk-' + f,
              f,
            );
          } else e[f] = 0;
      }),
        (r.O.j = (f) => 0 === e[f]);
      var o = (f, i) => {
          var s,
            l,
            [n, a, u] = i,
            d = 0;
          if (n.some((p) => 0 !== e[p])) {
            for (s in a) r.o(a, s) && (r.m[s] = a[s]);
            if (u) var c = u(r);
          }
          for (f && f(i); d < n.length; d++) r.o(e, (l = n[d])) && e[l] && e[l][0](), (e[n[d]] = 0);
          return r.O(c);
        },
        t = (self.webpackChunkgdox = self.webpackChunkgdox || []);
      t.forEach(o.bind(null, 0)), (t.push = o.bind(null, t.push.bind(t)));
    })();
})();
