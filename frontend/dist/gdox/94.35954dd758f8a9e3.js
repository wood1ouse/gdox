(self.webpackChunkgdox = self.webpackChunkgdox || []).push([
  [94],
  {
    2094: function (st) {
      st.exports = (function () {
        'use strict';
        var ae = Object.hasOwnProperty,
          De = Object.setPrototypeOf,
          ut = Object.isFrozen,
          ft = Object.getPrototypeOf,
          mt = Object.getOwnPropertyDescriptor,
          T = Object.freeze,
          y = Object.seal,
          ct = Object.create,
          Le = 'undefined' != typeof Reflect && Reflect,
          $ = Le.apply,
          ne = Le.construct;
        $ ||
          ($ = function (n, o, s) {
            return n.apply(o, s);
          }),
          T ||
            (T = function (n) {
              return n;
            }),
          y ||
            (y = function (n) {
              return n;
            }),
          ne ||
            (ne = function (n, o) {
              return new (Function.prototype.bind.apply(
                n,
                [null].concat(
                  (function (a) {
                    if (Array.isArray(a)) {
                      for (var n = 0, o = Array(a.length); n < a.length; n++) o[n] = a[n];
                      return o;
                    }
                    return Array.from(a);
                  })(o),
                ),
              ))();
            });
        var a,
          pt = _(Array.prototype.forEach),
          Me = _(Array.prototype.pop),
          H = _(Array.prototype.push),
          Y = _(String.prototype.toLowerCase),
          we = _(String.prototype.match),
          O = _(String.prototype.replace),
          dt = _(String.prototype.indexOf),
          vt = _(String.prototype.trim),
          A = _(RegExp.prototype.test),
          Ce =
            ((a = TypeError),
            function () {
              for (var n = arguments.length, o = Array(n), s = 0; s < n; s++) o[s] = arguments[s];
              return ne(a, o);
            });
        function _(a) {
          return function (n) {
            for (var o = arguments.length, s = Array(o > 1 ? o - 1 : 0), c = 1; c < o; c++)
              s[c - 1] = arguments[c];
            return $(a, n, s);
          };
        }
        function l(a, n) {
          De && De(a, null);
          for (var o = n.length; o--; ) {
            var s = n[o];
            if ('string' == typeof s) {
              var c = Y(s);
              c !== s && (ut(n) || (n[o] = c), (s = c));
            }
            a[s] = !0;
          }
          return a;
        }
        function L(a) {
          var n = ct(null),
            o = void 0;
          for (o in a) $(ae, a, [o]) && (n[o] = a[o]);
          return n;
        }
        function V(a, n) {
          for (; null !== a; ) {
            var o = mt(a, n);
            if (o) {
              if (o.get) return _(o.get);
              if ('function' == typeof o.value) return _(o.value);
            }
            a = ft(a);
          }
          return function (c) {
            return console.warn('fallback value for', c), null;
          };
        }
        var Ie = T([
            'a',
            'abbr',
            'acronym',
            'address',
            'area',
            'article',
            'aside',
            'audio',
            'b',
            'bdi',
            'bdo',
            'big',
            'blink',
            'blockquote',
            'body',
            'br',
            'button',
            'canvas',
            'caption',
            'center',
            'cite',
            'code',
            'col',
            'colgroup',
            'content',
            'data',
            'datalist',
            'dd',
            'decorator',
            'del',
            'details',
            'dfn',
            'dialog',
            'dir',
            'div',
            'dl',
            'dt',
            'element',
            'em',
            'fieldset',
            'figcaption',
            'figure',
            'font',
            'footer',
            'form',
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'head',
            'header',
            'hgroup',
            'hr',
            'html',
            'i',
            'img',
            'input',
            'ins',
            'kbd',
            'label',
            'legend',
            'li',
            'main',
            'map',
            'mark',
            'marquee',
            'menu',
            'menuitem',
            'meter',
            'nav',
            'nobr',
            'ol',
            'optgroup',
            'option',
            'output',
            'p',
            'picture',
            'pre',
            'progress',
            'q',
            'rp',
            'rt',
            'ruby',
            's',
            'samp',
            'section',
            'select',
            'shadow',
            'small',
            'source',
            'spacer',
            'span',
            'strike',
            'strong',
            'style',
            'sub',
            'summary',
            'sup',
            'table',
            'tbody',
            'td',
            'template',
            'textarea',
            'tfoot',
            'th',
            'thead',
            'time',
            'tr',
            'track',
            'tt',
            'u',
            'ul',
            'var',
            'video',
            'wbr',
          ]),
          ie = T([
            'svg',
            'a',
            'altglyph',
            'altglyphdef',
            'altglyphitem',
            'animatecolor',
            'animatemotion',
            'animatetransform',
            'circle',
            'clippath',
            'defs',
            'desc',
            'ellipse',
            'filter',
            'font',
            'g',
            'glyph',
            'glyphref',
            'hkern',
            'image',
            'line',
            'lineargradient',
            'marker',
            'mask',
            'metadata',
            'mpath',
            'path',
            'pattern',
            'polygon',
            'polyline',
            'radialgradient',
            'rect',
            'stop',
            'style',
            'switch',
            'symbol',
            'text',
            'textpath',
            'title',
            'tref',
            'tspan',
            'view',
            'vkern',
          ]),
          oe = T([
            'feBlend',
            'feColorMatrix',
            'feComponentTransfer',
            'feComposite',
            'feConvolveMatrix',
            'feDiffuseLighting',
            'feDisplacementMap',
            'feDistantLight',
            'feFlood',
            'feFuncA',
            'feFuncB',
            'feFuncG',
            'feFuncR',
            'feGaussianBlur',
            'feImage',
            'feMerge',
            'feMergeNode',
            'feMorphology',
            'feOffset',
            'fePointLight',
            'feSpecularLighting',
            'feSpotLight',
            'feTile',
            'feTurbulence',
          ]),
          Tt = T([
            'animate',
            'color-profile',
            'cursor',
            'discard',
            'fedropshadow',
            'font-face',
            'font-face-format',
            'font-face-name',
            'font-face-src',
            'font-face-uri',
            'foreignobject',
            'hatch',
            'hatchpath',
            'mesh',
            'meshgradient',
            'meshpatch',
            'meshrow',
            'missing-glyph',
            'script',
            'set',
            'solidcolor',
            'unknown',
            'use',
          ]),
          le = T([
            'math',
            'menclose',
            'merror',
            'mfenced',
            'mfrac',
            'mglyph',
            'mi',
            'mlabeledtr',
            'mmultiscripts',
            'mn',
            'mo',
            'mover',
            'mpadded',
            'mphantom',
            'mroot',
            'mrow',
            'ms',
            'mspace',
            'msqrt',
            'mstyle',
            'msub',
            'msup',
            'msubsup',
            'mtable',
            'mtd',
            'mtext',
            'mtr',
            'munder',
            'munderover',
          ]),
          At = T([
            'maction',
            'maligngroup',
            'malignmark',
            'mlongdiv',
            'mscarries',
            'mscarry',
            'msgroup',
            'mstack',
            'msline',
            'msrow',
            'semantics',
            'annotation',
            'annotation-xml',
            'mprescripts',
            'none',
          ]),
          xe = T(['#text']),
          ke = T([
            'accept',
            'action',
            'align',
            'alt',
            'autocapitalize',
            'autocomplete',
            'autopictureinpicture',
            'autoplay',
            'background',
            'bgcolor',
            'border',
            'capture',
            'cellpadding',
            'cellspacing',
            'checked',
            'cite',
            'class',
            'clear',
            'color',
            'cols',
            'colspan',
            'controls',
            'controlslist',
            'coords',
            'crossorigin',
            'datetime',
            'decoding',
            'default',
            'dir',
            'disabled',
            'disablepictureinpicture',
            'disableremoteplayback',
            'download',
            'draggable',
            'enctype',
            'enterkeyhint',
            'face',
            'for',
            'headers',
            'height',
            'hidden',
            'high',
            'href',
            'hreflang',
            'id',
            'inputmode',
            'integrity',
            'ismap',
            'kind',
            'label',
            'lang',
            'list',
            'loading',
            'loop',
            'low',
            'max',
            'maxlength',
            'media',
            'method',
            'min',
            'minlength',
            'multiple',
            'muted',
            'name',
            'nonce',
            'noshade',
            'novalidate',
            'nowrap',
            'open',
            'optimum',
            'pattern',
            'placeholder',
            'playsinline',
            'poster',
            'preload',
            'pubdate',
            'radiogroup',
            'readonly',
            'rel',
            'required',
            'rev',
            'reversed',
            'role',
            'rows',
            'rowspan',
            'spellcheck',
            'scope',
            'selected',
            'shape',
            'size',
            'sizes',
            'span',
            'srclang',
            'start',
            'src',
            'srcset',
            'step',
            'style',
            'summary',
            'tabindex',
            'title',
            'translate',
            'type',
            'usemap',
            'valign',
            'value',
            'width',
            'xmlns',
            'slot',
          ]),
          se = T([
            'accent-height',
            'accumulate',
            'additive',
            'alignment-baseline',
            'ascent',
            'attributename',
            'attributetype',
            'azimuth',
            'basefrequency',
            'baseline-shift',
            'begin',
            'bias',
            'by',
            'class',
            'clip',
            'clippathunits',
            'clip-path',
            'clip-rule',
            'color',
            'color-interpolation',
            'color-interpolation-filters',
            'color-profile',
            'color-rendering',
            'cx',
            'cy',
            'd',
            'dx',
            'dy',
            'diffuseconstant',
            'direction',
            'display',
            'divisor',
            'dur',
            'edgemode',
            'elevation',
            'end',
            'fill',
            'fill-opacity',
            'fill-rule',
            'filter',
            'filterunits',
            'flood-color',
            'flood-opacity',
            'font-family',
            'font-size',
            'font-size-adjust',
            'font-stretch',
            'font-style',
            'font-variant',
            'font-weight',
            'fx',
            'fy',
            'g1',
            'g2',
            'glyph-name',
            'glyphref',
            'gradientunits',
            'gradienttransform',
            'height',
            'href',
            'id',
            'image-rendering',
            'in',
            'in2',
            'k',
            'k1',
            'k2',
            'k3',
            'k4',
            'kerning',
            'keypoints',
            'keysplines',
            'keytimes',
            'lang',
            'lengthadjust',
            'letter-spacing',
            'kernelmatrix',
            'kernelunitlength',
            'lighting-color',
            'local',
            'marker-end',
            'marker-mid',
            'marker-start',
            'markerheight',
            'markerunits',
            'markerwidth',
            'maskcontentunits',
            'maskunits',
            'max',
            'mask',
            'media',
            'method',
            'mode',
            'min',
            'name',
            'numoctaves',
            'offset',
            'operator',
            'opacity',
            'order',
            'orient',
            'orientation',
            'origin',
            'overflow',
            'paint-order',
            'path',
            'pathlength',
            'patterncontentunits',
            'patterntransform',
            'patternunits',
            'points',
            'preservealpha',
            'preserveaspectratio',
            'primitiveunits',
            'r',
            'rx',
            'ry',
            'radius',
            'refx',
            'refy',
            'repeatcount',
            'repeatdur',
            'restart',
            'result',
            'rotate',
            'scale',
            'seed',
            'shape-rendering',
            'specularconstant',
            'specularexponent',
            'spreadmethod',
            'startoffset',
            'stddeviation',
            'stitchtiles',
            'stop-color',
            'stop-opacity',
            'stroke-dasharray',
            'stroke-dashoffset',
            'stroke-linecap',
            'stroke-linejoin',
            'stroke-miterlimit',
            'stroke-opacity',
            'stroke',
            'stroke-width',
            'style',
            'surfacescale',
            'systemlanguage',
            'tabindex',
            'targetx',
            'targety',
            'transform',
            'text-anchor',
            'text-decoration',
            'text-rendering',
            'textlength',
            'type',
            'u1',
            'u2',
            'unicode',
            'values',
            'viewbox',
            'visibility',
            'version',
            'vert-adv-y',
            'vert-origin-x',
            'vert-origin-y',
            'width',
            'word-spacing',
            'wrap',
            'writing-mode',
            'xchannelselector',
            'ychannelselector',
            'x',
            'x1',
            'x2',
            'xmlns',
            'y',
            'y1',
            'y2',
            'z',
            'zoomandpan',
          ]),
          Fe = T([
            'accent',
            'accentunder',
            'align',
            'bevelled',
            'close',
            'columnsalign',
            'columnlines',
            'columnspan',
            'denomalign',
            'depth',
            'dir',
            'display',
            'displaystyle',
            'encoding',
            'fence',
            'frame',
            'height',
            'href',
            'id',
            'largeop',
            'length',
            'linethickness',
            'lspace',
            'lquote',
            'mathbackground',
            'mathcolor',
            'mathsize',
            'mathvariant',
            'maxsize',
            'minsize',
            'movablelimits',
            'notation',
            'numalign',
            'open',
            'rowalign',
            'rowlines',
            'rowspacing',
            'rowspan',
            'rspace',
            'rquote',
            'scriptlevel',
            'scriptminsize',
            'scriptsizemultiplier',
            'selection',
            'separator',
            'separators',
            'stretchy',
            'subscriptshift',
            'supscriptshift',
            'symmetric',
            'voffset',
            'width',
            'xmlns',
          ]),
          j = T(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']),
          _t = y(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
          Et = y(/<%[\s\S]*|[\s\S]*%>/gm),
          gt = y(/^data-[\-\w.\u00B7-\uFFFF]/),
          yt = y(/^aria-[\-\w]+$/),
          bt = y(
            /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
          ),
          St = y(/^(?:\w+script|data):/i),
          Rt = y(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
          z =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (a) {
                  return typeof a;
                }
              : function (a) {
                  return a &&
                    'function' == typeof Symbol &&
                    a.constructor === Symbol &&
                    a !== Symbol.prototype
                    ? 'symbol'
                    : typeof a;
                };
        function E(a) {
          if (Array.isArray(a)) {
            for (var n = 0, o = Array(a.length); n < a.length; n++) o[n] = a[n];
            return o;
          }
          return Array.from(a);
        }
        var Ot = function () {
            return 'undefined' == typeof window ? null : window;
          },
          Nt = function (n, o) {
            if (
              'object' !== (void 0 === n ? 'undefined' : z(n)) ||
              'function' != typeof n.createPolicy
            )
              return null;
            var s = null,
              c = 'data-tt-policy-suffix';
            o.currentScript &&
              o.currentScript.hasAttribute(c) &&
              (s = o.currentScript.getAttribute(c));
            var q = 'dompurify' + (s ? '#' + s : '');
            try {
              return n.createPolicy(q, {
                createHTML: function (X) {
                  return X;
                },
              });
            } catch (M) {
              return console.warn('TrustedTypes policy ' + q + ' could not be created.'), null;
            }
          };
        return (function Pe() {
          var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ot(),
            n = function (e) {
              return Pe(e);
            };
          if (
            ((n.version = '2.3.4'),
            (n.removed = []),
            !a || !a.document || 9 !== a.document.nodeType)
          )
            return (n.isSupported = !1), n;
          var o = a.document,
            s = a.document,
            c = a.DocumentFragment,
            q = a.HTMLTemplateElement,
            M = a.Node,
            X = a.Element,
            ue = a.NodeFilter,
            Ue = a.NamedNodeMap,
            Lt = void 0 === Ue ? a.NamedNodeMap || a.MozNamedAttrMap : Ue,
            Mt = a.HTMLFormElement,
            wt = a.DOMParser,
            Ct = a.trustedTypes,
            K = X.prototype,
            It = V(K, 'cloneNode'),
            xt = V(K, 'nextSibling'),
            kt = V(K, 'childNodes'),
            fe = V(K, 'parentNode');
          if ('function' == typeof q) {
            var me = s.createElement('template');
            me.content && me.content.ownerDocument && (s = me.content.ownerDocument);
          }
          var N = Nt(Ct, o),
            He = N && ee ? N.createHTML('') : '',
            ce = s.implementation,
            Ft = s.createNodeIterator,
            Pt = s.createDocumentFragment,
            Ut = s.getElementsByTagName,
            Ht = o.importNode,
            ze = {};
          try {
            ze = L(s).documentMode ? s.documentMode : {};
          } catch (i) {}
          var g = {};
          n.isSupported =
            'function' == typeof fe && ce && void 0 !== ce.createHTMLDocument && 9 !== ze;
          var pe = _t,
            de = Et,
            zt = gt,
            Gt = yt,
            Bt = St,
            Ge = Rt,
            ve = bt,
            p = null,
            Be = l({}, [].concat(E(Ie), E(ie), E(oe), E(le), E(xe))),
            m = null,
            We = l({}, [].concat(E(ke), E(se), E(Fe), E(j))),
            f = Object.seal(
              Object.create(null, {
                tagNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
                attributeNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
                allowCustomizedBuiltInElements: {
                  writable: !0,
                  configurable: !1,
                  enumerable: !0,
                  value: !1,
                },
              }),
            ),
            J = null,
            he = null,
            $e = !0,
            Te = !0,
            Ye = !1,
            w = !1,
            C = !1,
            Ae = !1,
            _e = !1,
            I = !1,
            Q = !1,
            ee = !1,
            Ve = !0,
            Ee = !0,
            G = !1,
            x = {},
            k = null,
            je = l({}, [
              'annotation-xml',
              'audio',
              'colgroup',
              'desc',
              'foreignobject',
              'head',
              'iframe',
              'math',
              'mi',
              'mn',
              'mo',
              'ms',
              'mtext',
              'noembed',
              'noframes',
              'noscript',
              'plaintext',
              'script',
              'style',
              'svg',
              'template',
              'thead',
              'title',
              'video',
              'xmp',
            ]),
            qe = null,
            Xe = l({}, ['audio', 'video', 'img', 'source', 'image', 'track']),
            ge = null,
            Ke = l({}, [
              'alt',
              'class',
              'for',
              'id',
              'label',
              'name',
              'pattern',
              'placeholder',
              'role',
              'summary',
              'title',
              'value',
              'style',
              'xmlns',
            ]),
            ye = 'http://www.w3.org/1998/Math/MathML',
            be = 'http://www.w3.org/2000/svg',
            D = 'http://www.w3.org/1999/xhtml',
            te = D,
            Se = !1,
            F = void 0,
            Wt = ['application/xhtml+xml', 'text/html'],
            $t = 'text/html',
            P = void 0,
            U = null,
            Yt = s.createElement('form'),
            Ze = function (e) {
              return e instanceof RegExp || e instanceof Function;
            },
            Re = function (e) {
              (U && U === e) ||
                ((!e || 'object' !== (void 0 === e ? 'undefined' : z(e))) && (e = {}),
                (e = L(e)),
                (p = 'ALLOWED_TAGS' in e ? l({}, e.ALLOWED_TAGS) : Be),
                (m = 'ALLOWED_ATTR' in e ? l({}, e.ALLOWED_ATTR) : We),
                (ge = 'ADD_URI_SAFE_ATTR' in e ? l(L(Ke), e.ADD_URI_SAFE_ATTR) : Ke),
                (qe = 'ADD_DATA_URI_TAGS' in e ? l(L(Xe), e.ADD_DATA_URI_TAGS) : Xe),
                (k = 'FORBID_CONTENTS' in e ? l({}, e.FORBID_CONTENTS) : je),
                (J = 'FORBID_TAGS' in e ? l({}, e.FORBID_TAGS) : {}),
                (he = 'FORBID_ATTR' in e ? l({}, e.FORBID_ATTR) : {}),
                (x = 'USE_PROFILES' in e && e.USE_PROFILES),
                ($e = !1 !== e.ALLOW_ARIA_ATTR),
                (Te = !1 !== e.ALLOW_DATA_ATTR),
                (Ye = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
                (w = e.SAFE_FOR_TEMPLATES || !1),
                (C = e.WHOLE_DOCUMENT || !1),
                (I = e.RETURN_DOM || !1),
                (Q = e.RETURN_DOM_FRAGMENT || !1),
                (ee = e.RETURN_TRUSTED_TYPE || !1),
                (_e = e.FORCE_BODY || !1),
                (Ve = !1 !== e.SANITIZE_DOM),
                (Ee = !1 !== e.KEEP_CONTENT),
                (G = e.IN_PLACE || !1),
                (ve = e.ALLOWED_URI_REGEXP || ve),
                (te = e.NAMESPACE || D),
                e.CUSTOM_ELEMENT_HANDLING &&
                  Ze(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                  (f.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
                e.CUSTOM_ELEMENT_HANDLING &&
                  Ze(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                  (f.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
                e.CUSTOM_ELEMENT_HANDLING &&
                  'boolean' == typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements &&
                  (f.allowCustomizedBuiltInElements =
                    e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
                (F = F = -1 === Wt.indexOf(e.PARSER_MEDIA_TYPE) ? $t : e.PARSER_MEDIA_TYPE),
                (P =
                  'application/xhtml+xml' === F
                    ? function (t) {
                        return t;
                      }
                    : Y),
                w && (Te = !1),
                Q && (I = !0),
                x &&
                  ((p = l({}, [].concat(E(xe)))),
                  (m = []),
                  !0 === x.html && (l(p, Ie), l(m, ke)),
                  !0 === x.svg && (l(p, ie), l(m, se), l(m, j)),
                  !0 === x.svgFilters && (l(p, oe), l(m, se), l(m, j)),
                  !0 === x.mathMl && (l(p, le), l(m, Fe), l(m, j))),
                e.ADD_TAGS && (p === Be && (p = L(p)), l(p, e.ADD_TAGS)),
                e.ADD_ATTR && (m === We && (m = L(m)), l(m, e.ADD_ATTR)),
                e.ADD_URI_SAFE_ATTR && l(ge, e.ADD_URI_SAFE_ATTR),
                e.FORBID_CONTENTS && (k === je && (k = L(k)), l(k, e.FORBID_CONTENTS)),
                Ee && (p['#text'] = !0),
                C && l(p, ['html', 'head', 'body']),
                p.table && (l(p, ['tbody']), delete J.tbody),
                T && T(e),
                (U = e));
            },
            Je = l({}, ['mi', 'mo', 'mn', 'ms', 'mtext']),
            Qe = l({}, ['foreignobject', 'desc', 'title', 'annotation-xml']),
            re = l({}, ie);
          l(re, oe), l(re, Tt);
          var Oe = l({}, le);
          l(Oe, At);
          var Vt = function (e) {
              var t = fe(e);
              (!t || !t.tagName) && (t = { namespaceURI: D, tagName: 'template' });
              var r = Y(e.tagName),
                u = Y(t.tagName);
              if (e.namespaceURI === be)
                return t.namespaceURI === D
                  ? 'svg' === r
                  : t.namespaceURI === ye
                  ? 'svg' === r && ('annotation-xml' === u || Je[u])
                  : Boolean(re[r]);
              if (e.namespaceURI === ye)
                return t.namespaceURI === D
                  ? 'math' === r
                  : t.namespaceURI === be
                  ? 'math' === r && Qe[u]
                  : Boolean(Oe[r]);
              if (e.namespaceURI === D) {
                if ((t.namespaceURI === be && !Qe[u]) || (t.namespaceURI === ye && !Je[u]))
                  return !1;
                var d = l({}, ['title', 'style', 'font', 'a', 'script']);
                return !Oe[r] && (d[r] || !re[r]);
              }
              return !1;
            },
            b = function (e) {
              H(n.removed, { element: e });
              try {
                e.parentNode.removeChild(e);
              } catch (t) {
                try {
                  e.outerHTML = He;
                } catch (r) {
                  e.remove();
                }
              }
            },
            et = function (e, t) {
              try {
                H(n.removed, { attribute: t.getAttributeNode(e), from: t });
              } catch (r) {
                H(n.removed, { attribute: null, from: t });
              }
              if ((t.removeAttribute(e), 'is' === e && !m[e]))
                if (I || Q)
                  try {
                    b(t);
                  } catch (r) {}
                else
                  try {
                    t.setAttribute(e, '');
                  } catch (r) {}
            },
            tt = function (e) {
              var t = void 0,
                r = void 0;
              if (_e) e = '<remove></remove>' + e;
              else {
                var u = we(e, /^[\r\n\t ]+/);
                r = u && u[0];
              }
              'application/xhtml+xml' === F &&
                (e =
                  '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
                  e +
                  '</body></html>');
              var d = N ? N.createHTML(e) : e;
              if (te === D)
                try {
                  t = new wt().parseFromString(d, F);
                } catch (h) {}
              if (!t || !t.documentElement) {
                t = ce.createDocument(te, 'template', null);
                try {
                  t.documentElement.innerHTML = Se ? '' : d;
                } catch (h) {}
              }
              var v = t.body || t.documentElement;
              return (
                e && r && v.insertBefore(s.createTextNode(r), v.childNodes[0] || null),
                te === D ? Ut.call(t, C ? 'html' : 'body')[0] : C ? t.documentElement : v
              );
            },
            rt = function (e) {
              return Ft.call(
                e.ownerDocument || e,
                e,
                ue.SHOW_ELEMENT | ue.SHOW_COMMENT | ue.SHOW_TEXT,
                null,
                !1,
              );
            },
            jt = function (e) {
              return (
                e instanceof Mt &&
                ('string' != typeof e.nodeName ||
                  'string' != typeof e.textContent ||
                  'function' != typeof e.removeChild ||
                  !(e.attributes instanceof Lt) ||
                  'function' != typeof e.removeAttribute ||
                  'function' != typeof e.setAttribute ||
                  'string' != typeof e.namespaceURI ||
                  'function' != typeof e.insertBefore)
              );
            },
            B = function (e) {
              return 'object' === (void 0 === M ? 'undefined' : z(M))
                ? e instanceof M
                : e &&
                    'object' === (void 0 === e ? 'undefined' : z(e)) &&
                    'number' == typeof e.nodeType &&
                    'string' == typeof e.nodeName;
            },
            S = function (e, t, r) {
              !g[e] ||
                pt(g[e], function (u) {
                  u.call(n, t, r, U);
                });
            },
            at = function (e) {
              var t = void 0;
              if (
                (S('beforeSanitizeElements', e, null), jt(e) || we(e.nodeName, /[\u0080-\uFFFF]/))
              )
                return b(e), !0;
              var r = P(e.nodeName);
              if (
                (S('uponSanitizeElement', e, { tagName: r, allowedTags: p }),
                (!B(e.firstElementChild) &&
                  (!B(e.content) || !B(e.content.firstElementChild)) &&
                  A(/<[/\w]/g, e.innerHTML) &&
                  A(/<[/\w]/g, e.textContent)) ||
                  ('select' === r && A(/<template/i, e.innerHTML)))
              )
                return b(e), !0;
              if (!p[r] || J[r]) {
                if (Ee && !k[r]) {
                  var u = fe(e) || e.parentNode,
                    d = kt(e) || e.childNodes;
                  if (d && u)
                    for (var h = d.length - 1; h >= 0; --h) u.insertBefore(It(d[h], !0), xt(e));
                }
                return !(
                  (!J[r] &&
                    it(r) &&
                    ((f.tagNameCheck instanceof RegExp && A(f.tagNameCheck, r)) ||
                      (f.tagNameCheck instanceof Function && f.tagNameCheck(r)))) ||
                  (b(e), 0)
                );
              }
              return (e instanceof X && !Vt(e)) ||
                (('noscript' === r || 'noembed' === r) && A(/<\/no(script|embed)/i, e.innerHTML))
                ? (b(e), !0)
                : (w &&
                    3 === e.nodeType &&
                    ((t = O((t = e.textContent), pe, ' ')),
                    (t = O(t, de, ' ')),
                    e.textContent !== t &&
                      (H(n.removed, { element: e.cloneNode() }), (e.textContent = t))),
                  S('afterSanitizeElements', e, null),
                  !1);
            },
            nt = function (e, t, r) {
              if (Ve && ('id' === t || 'name' === t) && (r in s || r in Yt)) return !1;
              if ((!Te || he[t] || !A(zt, t)) && (!$e || !A(Gt, t)))
                if (!m[t] || he[t]) {
                  if (
                    !(
                      (it(e) &&
                        ((f.tagNameCheck instanceof RegExp && A(f.tagNameCheck, e)) ||
                          (f.tagNameCheck instanceof Function && f.tagNameCheck(e))) &&
                        ((f.attributeNameCheck instanceof RegExp && A(f.attributeNameCheck, t)) ||
                          (f.attributeNameCheck instanceof Function && f.attributeNameCheck(t)))) ||
                      ('is' === t &&
                        f.allowCustomizedBuiltInElements &&
                        ((f.tagNameCheck instanceof RegExp && A(f.tagNameCheck, r)) ||
                          (f.tagNameCheck instanceof Function && f.tagNameCheck(r))))
                    )
                  )
                    return !1;
                } else if (
                  !ge[t] &&
                  !A(ve, O(r, Ge, '')) &&
                  (('src' !== t && 'xlink:href' !== t && 'href' !== t) ||
                    'script' === e ||
                    0 !== dt(r, 'data:') ||
                    !qe[e]) &&
                  (!Ye || A(Bt, O(r, Ge, ''))) &&
                  r
                )
                  return !1;
              return !0;
            },
            it = function (e) {
              return e.indexOf('-') > 0;
            },
            ot = function (e) {
              var t = void 0,
                r = void 0,
                u = void 0,
                d = void 0;
              S('beforeSanitizeAttributes', e, null);
              var v = e.attributes;
              if (v) {
                var h = { attrName: '', attrValue: '', keepAttr: !0, allowedAttributes: m };
                for (d = v.length; d--; ) {
                  var W = (t = v[d]).name,
                    lt = t.namespaceURI;
                  if (
                    ((r = vt(t.value)),
                    (u = P(W)),
                    (h.attrName = u),
                    (h.attrValue = r),
                    (h.keepAttr = !0),
                    (h.forceKeepAttr = void 0),
                    S('uponSanitizeAttribute', e, h),
                    (r = h.attrValue),
                    !h.forceKeepAttr && (et(W, e), h.keepAttr))
                  ) {
                    if (A(/\/>/i, r)) {
                      et(W, e);
                      continue;
                    }
                    w && ((r = O(r, pe, ' ')), (r = O(r, de, ' ')));
                    var Xt = P(e.nodeName);
                    if (nt(Xt, u, r))
                      try {
                        lt ? e.setAttributeNS(lt, W, r) : e.setAttribute(W, r), Me(n.removed);
                      } catch (Kt) {}
                  }
                }
                S('afterSanitizeAttributes', e, null);
              }
            },
            qt = function i(e) {
              var t = void 0,
                r = rt(e);
              for (S('beforeSanitizeShadowDOM', e, null); (t = r.nextNode()); )
                S('uponSanitizeShadowNode', t, null),
                  !at(t) && (t.content instanceof c && i(t.content), ot(t));
              S('afterSanitizeShadowDOM', e, null);
            };
          return (
            (n.sanitize = function (i, e) {
              var t = void 0,
                r = void 0,
                u = void 0,
                d = void 0,
                v = void 0;
              if (((Se = !i) && (i = '\x3c!--\x3e'), 'string' != typeof i && !B(i))) {
                if ('function' != typeof i.toString) throw Ce('toString is not a function');
                if ('string' != typeof (i = i.toString()))
                  throw Ce('dirty is not a string, aborting');
              }
              if (!n.isSupported) {
                if ('object' === z(a.toStaticHTML) || 'function' == typeof a.toStaticHTML) {
                  if ('string' == typeof i) return a.toStaticHTML(i);
                  if (B(i)) return a.toStaticHTML(i.outerHTML);
                }
                return i;
              }
              if ((Ae || Re(e), (n.removed = []), 'string' == typeof i && (G = !1), !G))
                if (i instanceof M)
                  (1 === (r = (t = tt('\x3c!----\x3e')).ownerDocument.importNode(i, !0)).nodeType &&
                    'BODY' === r.nodeName) ||
                  'HTML' === r.nodeName
                    ? (t = r)
                    : t.appendChild(r);
                else {
                  if (!I && !w && !C && -1 === i.indexOf('<')) return N && ee ? N.createHTML(i) : i;
                  if (!(t = tt(i))) return I ? null : He;
                }
              t && _e && b(t.firstChild);
              for (var h = rt(G ? i : t); (u = h.nextNode()); )
                (3 === u.nodeType && u === d) ||
                  at(u) ||
                  (u.content instanceof c && qt(u.content), ot(u), (d = u));
              if (((d = null), G)) return i;
              if (I) {
                if (Q)
                  for (v = Pt.call(t.ownerDocument); t.firstChild; ) v.appendChild(t.firstChild);
                else v = t;
                return m.shadowroot && (v = Ht.call(o, v, !0)), v;
              }
              var R = C ? t.outerHTML : t.innerHTML;
              return w && ((R = O(R, pe, ' ')), (R = O(R, de, ' '))), N && ee ? N.createHTML(R) : R;
            }),
            (n.setConfig = function (i) {
              Re(i), (Ae = !0);
            }),
            (n.clearConfig = function () {
              (U = null), (Ae = !1);
            }),
            (n.isValidAttribute = function (i, e, t) {
              U || Re({});
              var r = P(i),
                u = P(e);
              return nt(r, u, t);
            }),
            (n.addHook = function (i, e) {
              'function' == typeof e && ((g[i] = g[i] || []), H(g[i], e));
            }),
            (n.removeHook = function (i) {
              g[i] && Me(g[i]);
            }),
            (n.removeHooks = function (i) {
              g[i] && (g[i] = []);
            }),
            (n.removeAllHooks = function () {
              g = {};
            }),
            n
          );
        })();
      })();
    },
  },
]);
