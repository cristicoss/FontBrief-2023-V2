'use strict';
(() => {
  var fe = Object.create;
  var lt = Object.defineProperty;
  var Ee = Object.getOwnPropertyDescriptor;
  var de = Object.getOwnPropertyNames;
  var Te = Object.getPrototypeOf,
    ge = Object.prototype.hasOwnProperty;
  var Se = (t, e, r) =>
    e in t ? lt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r);
  var ye = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
  var be = (t, e, r, n) => {
    if ((e && typeof e === 'object') || typeof e === 'function')
      for (let o of de(e))
        !ge.call(t, o) &&
          o !== r &&
          lt(t, o, { get: () => e[o], enumerable: !(n = Ee(e, o)) || n.enumerable });
    return t;
  };
  var he = (t, e, r) => (
    (r = t != null ? fe(Te(t)) : {}),
    be(e || !t || !t.__esModule ? lt(r, 'default', { value: t, enumerable: !0 }) : r, t)
  );
  var ht = (t, e, r) => (Se(t, typeof e !== 'symbol' ? e + '' : e, r), r);
  var Jt = ye((kn, Xt) => {
    Xt.exports = dr;
    function dr(t, e, r, n) {
      var o, s, i;
      return function () {
        if (((i = this), (s = Array.prototype.slice.call(arguments)), o && (r || n))) return;
        if (!r) return m(), (o = setTimeout(a, e)), o;
        (o = setTimeout(m, e)), t.apply(i, s);
        function a() {
          m(), t.apply(i, s);
        }
        function m() {
          clearTimeout(o), (o = null);
        }
      };
    }
  });
  var K = 'fs-attributes';
  var At = 'animation';
  var Ct = 'cmsattribute';
  var xt = 'cmscore';
  var O = 'cmsfilter';
  var _t = 'queryparam';
  var at = 'support';
  var Ft = async (...t) => {
    var r;
    let e = [];
    for (let n of t) {
      let o = await ((r = window.fsAttributes[n]) == null ? void 0 : r.loading);
      e.push(o);
    }
    return e;
  };
  var I = class {
    static activateAlerts() {
      this.alertsActivated = !0;
    }
    static alert(e, r) {
      if ((this.alertsActivated && window.alert(e), r === 'error')) throw new Error(e);
    }
  };
  ht(I, 'alertsActivated', !1);
  var V = () => {};
  function w(t, e, r, n) {
    return t ? (t.addEventListener(e, r, n), () => t.removeEventListener(e, r, n)) : V;
  }
  var It = (t) => t instanceof Element;
  var R = (t) => t instanceof HTMLInputElement,
    wt = (t) => t instanceof HTMLSelectElement,
    Lt = (t) => t instanceof HTMLTextAreaElement;
  var G = (t) => R(t) || wt(t) || Lt(t);
  var L = (t, e) => !!t && e.includes(t);
  var ct = (t) => t != null;
  var Q = (t) => typeof t === 'string',
    Mt = (t) => typeof t === 'number';
  var Y = (t) => t === void 0;
  var vt = {
      wrapper: 'w-dyn-list',
      list: 'w-dyn-items',
      item: 'w-dyn-item',
      paginationWrapper: 'w-pagination-wrapper',
      paginationNext: 'w-pagination-next',
      paginationPrevious: 'w-pagination-previous',
      pageCount: 'w-page-count',
      emptyState: 'w-dyn-empty',
    },
    D = {
      formBlock: 'w-form',
      checkboxField: 'w-checkbox',
      checkboxInput: 'w-checkbox-input',
      radioField: 'w-radio',
      radioInput: 'w-radio-input',
      checkboxOrRadioLabel: 'w-form-label',
      checkboxOrRadioFocus: 'w--redirected-focus',
      checkboxOrRadioChecked: 'w--redirected-checked',
      successMessage: 'w-form-done',
      errorMessage: 'w-form-fail',
    };
  var P = (t, e) => (
    Array.isArray(e) || (e = [e]),
    e.map((n) => t.dispatchEvent(new Event(n, { bubbles: !0 }))).every((n) => n)
  );
  var { radioInput: Ae, checkboxOrRadioFocus: Ce, checkboxOrRadioChecked: xe } = D,
    mt = (t, e = []) => {
      let { type: r } = t;
      if (R(t) && ['checkbox', 'radio'].includes(r)) {
        if (
          !t.checked ||
          ((t.checked = !1),
          P(
            t,
            ['click', 'input', 'change'].filter((s) => !e.includes(s))
          ),
          r === 'checkbox')
        )
          return;
        let { parentElement: n } = t;
        if (!n) return;
        let o = n.querySelector(`.${Ae}`);
        if (!o) return;
        o.classList.remove(Ce, xe);
        return;
      }
      (t.value = ''),
        P(
          t,
          ['input', 'change'].filter((n) => !e.includes(n))
        );
    };
  var ut = (t, e = !0) => t.cloneNode(e);
  function $(t, e, r, n = !0) {
    let o = r ? [r] : [];
    if (!t) return o;
    let s = t.split(',').reduce((i, l) => {
      let a = l.trim();
      return (!n || a) && i.push(a), i;
    }, []);
    if (e) {
      let i = s.filter((l) => L(l, e));
      return i.length ? i : o;
    }
    return s;
  }
  var pt = (t) => Object.entries(t);
  var X = (t) => !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
  var q = (t, e) => t.every((r) => e.includes(r)) && e.every((r) => t.includes(r));
  var k = (t, e) => {
    let { type: r } = t,
      n = r === 'radio';
    if (n || r === 'checkbox') {
      if (!R(t) || typeof e !== 'boolean' || e === t.checked || (n && e === !1)) return;
      t.checked = e;
    } else {
      if (t.value === e) return;
      t.value = e.toString();
    }
    P(t, ['click', 'input', 'change']);
  };
  function Rt(t, e, r) {
    var o;
    let n = window.fsAttributes[t];
    return (n.destroy = r || V), (o = n.resolve) == null || o.call(n, e), e;
  }
  var H = (t, e = '1', r = 'iife') => {
    let o = `${t}${r === 'esm' ? '.esm' : ''}.js`;
    return `https://cdn.jsdelivr.net/npm/@finsweet/attributes-${t}@${e}/${o}`;
  };
  var _e = H(At, '1', 'esm'),
    J = async () => {
      let { fsAttributes: t } = window;
      t.animation || (t.animation = {});
      let { animation: e } = t;
      if (e.import) return e.import;
      try {
        return (e.import = import(_e)), e.import;
      } catch (r) {
        I.alert(`${r}`, 'error');
        return;
      }
    };
  var Fe = H(xt, '1'),
    Dt = async () => {
      let { fsAttributes: t } = window;
      t.cmscore || (t.cmscore = {});
      let { cmscore: e } = t;
      if (e.import) return e.import;
      try {
        return (
          (e.import = import(Fe)),
          e.import.then((r) => {
            r && (e.version || (e.version = r.version));
          }),
          e.import
        );
      } catch (r) {
        I.alert(`${r}`, 'error');
        return;
      }
    };
  var Ie = `${K}-${at}`,
    kt = async () => {
      var o;
      let { fsAttributes: t, location: e } = window,
        { host: r, searchParams: n } = new URL(e.href);
      return !r.includes('webflow.io') || !n.has(Ie)
        ? !1
        : (o = t.import) == null
        ? void 0
        : o.call(t, at, '1');
    };
  var _ = (t) => (e) => `${t}${e ? `-${e}` : ''}`,
    Z = (t) => {
      let e = (o, s, i) => {
        let l = t[o],
          { key: a, values: m } = l,
          c;
        if (!s) return `[${a}]`;
        let u = m == null ? void 0 : m[s];
        Q(u) ? (c = u) : (c = u(i && 'instanceIndex' in i ? i.instanceIndex : void 0));
        let p = i && 'caseInsensitive' in i && i.caseInsensitive ? 'i' : '';
        if (!(i != null && i.operator)) return `[${a}="${c}"${p}]`;
        switch (i.operator) {
          case 'prefixed':
            return `[${a}^="${c}"${p}]`;
          case 'suffixed':
            return `[${a}$="${c}"${p}]`;
          case 'contains':
            return `[${a}*="${c}"${p}]`;
        }
      };
      function r(o, s) {
        let i = e('element', o, s),
          l = (s == null ? void 0 : s.scope) || document;
        return s != null && s.all ? [...l.querySelectorAll(i)] : l.querySelector(i);
      }
      return [
        e,
        r,
        (o, s) => {
          let i = t[s];
          return i ? o.getAttribute(i.key) : null;
        },
      ];
    };
  var j = {
      preventLoad: { key: `${K}-preventload` },
      debugMode: { key: `${K}-debug` },
      src: { key: 'src', values: { finsweet: '@finsweet/attributes' } },
      dev: { key: `${K}-dev` },
    },
    [ft, fn] = Z(j);
  var Ut = (t) => {
    let { currentScript: e } = document,
      r = {};
    if (!e) return { attributes: r, preventsLoad: !1 };
    let o = { preventsLoad: Q(e.getAttribute(j.preventLoad.key)), attributes: r };
    for (let s in t) {
      let i = e.getAttribute(t[s]);
      o.attributes[s] = i;
    }
    return o;
  };
  var Bt = ({ scriptAttributes: t, attributeKey: e, version: r, init: n }) => {
      var l;
      we(), (l = window.fsAttributes)[e] || (l[e] = {});
      let { preventsLoad: o, attributes: s } = Ut(t),
        i = window.fsAttributes[e];
      (i.version = r),
        (i.init = n),
        o || (window.Webflow || (window.Webflow = []), window.Webflow.push(() => n(s)));
    },
    we = () => {
      let t = Me();
      if (window.fsAttributes && !Array.isArray(window.fsAttributes)) {
        Et(window.fsAttributes, t);
        return;
      }
      let e = Le(t);
      Et(e, t), ve(e), (window.fsAttributes = e), (window.FsAttributes = window.fsAttributes), kt();
    },
    Le = (t) => {
      let e = {
        cms: {},
        push(...r) {
          var n, o;
          for (let [s, i] of r)
            (o = (n = this[s]) == null ? void 0 : n.loading) == null || o.then(i);
        },
        async import(r, n) {
          let o = e[r];
          return (
            o ||
            new Promise((s) => {
              let i = document.createElement('script');
              (i.src = H(r, n)),
                (i.async = !0),
                (i.onload = () => {
                  let [l] = Et(e, [r]);
                  s(l);
                }),
                document.head.append(i);
            })
          );
        },
        destroy() {
          var r, n;
          for (let o of t)
            (n = (r = window.fsAttributes[o]) == null ? void 0 : r.destroy) == null || n.call(r);
        },
      };
      return e;
    },
    Me = () => {
      let t = ft('src', 'finsweet', { operator: 'contains' }),
        e = ft('dev');
      return [...document.querySelectorAll(`script${t}, script${e}`)].reduce((o, s) => {
        var l;
        let i =
          s.getAttribute(j.dev.key) ||
          ((l = s.src.match(/[\w-. ]+(?=(\.js)$)/)) == null ? void 0 : l[0]);
        return i && !o.includes(i) && o.push(i), o;
      }, []);
    },
    Et = (t, e) =>
      e.map((n) => {
        let o = t[n];
        return (
          o ||
          ((t[n] = {}),
          (o = t[n]),
          (o.loading = new Promise((s) => {
            o.resolve = (i) => {
              s(i), delete o.resolve;
            };
          })),
          o)
        );
      }),
    ve = (t) => {
      let e = Array.isArray(window.fsAttributes) ? window.fsAttributes : [];
      t.push(...e);
    };
  var Nt = '1.16.1';
  var y = `fs-${O}`,
    De = 'list',
    ke = 'filters',
    Ue = 'empty',
    Be = 'initial',
    Ne = 'results-count',
    Ke = 'filter-results-count',
    Oe = 'items-count',
    Pe = 'tag-template',
    $e = 'tag-text',
    He = 'tag-remove',
    Ve = 'scroll-anchor',
    Ge = 'clear',
    Ye = 'reset',
    qe = 'field',
    je = 'clear',
    We = 'reset',
    ze = 'match',
    Kt = { any: 'any', all: 'all' },
    Qe = 'range',
    Ot = { from: 'from', to: 'to' },
    Xe = 'type',
    Je = { date: 'date' },
    Ze = 'showquery',
    tr = { true: 'true' },
    er = 'allowsubmit',
    rr = { true: 'true' },
    or = 'hideempty',
    nr = { true: 'true' },
    sr = 'highlight',
    ir = { true: 'true' },
    lr = 'highlightclass',
    ar = 'active',
    cr = 'debounce',
    mr = 'tagformat',
    ur = { category: 'category' },
    pr = 'tagcategory',
    fr = 'easing',
    Er = 'duration',
    F = {
      element: {
        key: `${y}-element`,
        values: {
          list: _(De),
          filters: _(ke),
          empty: _(Ue),
          initial: _(Be),
          resultsCount: _(Ne),
          filterResultsCount: _(Ke),
          itemsCount: _(Oe),
          tagTemplate: _(Pe),
          tagText: _($e),
          tagRemove: _(He),
          scrollAnchor: _(Ve),
          reset: Ge,
          resetFallback: Ye,
        },
      },
      field: { key: `${y}-${qe}` },
      reset: { key: `${y}-${je}` },
      resetFallback: { key: `${y}-${We}` },
      match: { key: `${y}-${ze}`, values: Kt },
      range: { key: `${y}-${Qe}`, values: Ot },
      type: { key: `${y}-${Xe}`, values: Je },
      showQuery: { key: `${y}-${Ze}`, values: tr },
      allowSubmit: { key: `${y}-${er}`, values: rr },
      hideEmpty: { key: `${y}-${or}`, values: nr },
      highlight: { key: `${y}-${sr}`, values: ir },
      highlightCSS: { key: `${y}-${lr}` },
      activeCSS: { key: `${y}-${ar}` },
      debouncing: { key: `${y}-${cr}` },
      tagFormat: { key: `${y}-${mr}` },
      tagCategory: { key: `${y}-${pr}` },
      easing: { key: `${y}-${fr}` },
      duration: { key: `${y}-${Er}` },
    },
    [U, h] = Z(F),
    Pt = Object.values(Kt),
    $t = { range: Object.values(Ot) },
    tt = Object.values(ur),
    Ht = 'fs-cmsfilter_highlight',
    Vt = 'fs-cmsfilter_active',
    Gt = '50';
  var et = ({ filtersData: t }) => {
    for (let { elements: e } of t)
      for (let r of e) {
        let { resultsCount: n, hidden: o, hideEmpty: s } = r;
        if (!s) continue;
        let i = n === 0;
        i !== o && ((r.hidden = i), (s.style.display = i ? 'none' : ''));
      }
  };
  var Yt = ({ props: t }) => {
      for (let e in t) {
        let { elements: r, values: n, highlightData: o } = t[e];
        if (o)
          for (let s of n) {
            let i = r.get(s);
            if (!i) continue;
            let { element: l, originalHTML: a } = i,
              m = o.get(s);
            if (!m) {
              l.innerHTML = a;
              continue;
            }
            let { filterValue: c, highlightCSSClass: u } = m,
              p = new RegExp(c || s, 'gi');
            l.innerHTML = a.replace(p, `<span class="${u}">$&</span>`);
          }
      }
    },
    qt = ({ props: t }) => {
      for (let e in t) t[e].highlightData = new Map();
    };
  var rt = ({ resultsElement: t }, { validItems: e }) => {
      t && (t.textContent = `${e.length}`);
    },
    ot = ({ filtersData: t }) => {
      for (let { elements: e } of t)
        for (let { resultsElement: r, resultsCount: n } of e) r && (r.textContent = `${n}`);
    },
    nt = ({ filtersData: t }, { validItems: e }) => {
      var n, o;
      let r = {};
      for (let { elements: s, filterKeys: i } of t) {
        if (i.length > 1) continue;
        let [l] = i;
        r[l] || (r[l] = {});
        for (let a of s)
          (a.resultsCount = 0), (n = r[l])[(o = a.value)] || (n[o] = []), r[l][a.value].push(a);
      }
      for (let { props: s } of e)
        for (let i in s) {
          let l = r[i];
          if (!l) continue;
          let { values: a } = s[i];
          for (let m of a) {
            let c = l[m];
            if (c) for (let u of c) u.resultsCount += 1;
          }
        }
    };
  var {
      field: { key: jt },
      range: { key: Wt },
      type: { key: zt },
    } = F,
    Qt = (t, e) => {
      let { highlightResults: r, showFilterResults: n, hideEmptyFilters: o } = t;
      e.on('shouldcollectprops', (s) => {
        for (let i of s) i.collectProps({ fieldKey: jt, rangeKey: Wt, typeKey: zt });
      }),
        e.on('shouldfilter', async () => await t.applyFilters(!0)),
        e.on('renderitems', (s) => {
          if ((rt(t, e), nt(t, e), o && et(t), n && ot(t), r)) for (let i of s) Yt(i);
        }),
        e.once('nestinitialitems').then(async (s) => {
          for (let i of s) i.collectProps({ fieldKey: jt, rangeKey: Wt, typeKey: zt });
          await t.applyFilters(!0), await e.renderItems(!0);
        });
    };
  var St = he(Jt(), 1);
  var dt = ({ elements: t, values: e }, r) => {
    let n;
    r ? (e.delete(r), (n = t.filter((o) => o.value === r))) : (e.clear(), (n = t));
    for (let { element: o } of n) mt(o);
  };
  var Tr = 'fs-cms-element',
    gr = {
      wrapper: 'wrapper',
      list: 'list',
      item: 'item',
      paginationWrapper: 'pagination-wrapper',
      paginationNext: 'pagination-next',
      paginationPrevious: 'pagination-previous',
      pageCount: 'page-count',
      emptyState: 'empty',
    },
    Zt = (t) => {
      let e = `.${vt[t]}`,
        r = `[${Tr}="${gr[t]}"]`;
      return `:is(${e}, ${r})`;
    };
  var Sr = Intl.DateTimeFormat(),
    Tt = (t) => {
      if (t) return new Date(Sr.format(new Date(t)));
    };
  var te = (t) => {
    if (t) return parseFloat(t.replace(/[^0-9.-]+/g, ''));
  };
  function W(t) {
    return t == null ? void 0 : t.trim().toLowerCase();
  }
  var gt = (t, e) => {
    t.closest(Zt('item')) && (t.id = `${t.id}-${e}`);
  };
  var M = (t, e, r) => {
    var u, p;
    let { value: n } = t,
      { elements: o, values: s, mode: i } = e,
      { value: l, mode: a, type: m, activeCSSClass: c } = r;
    switch (m) {
      case 'checkbox': {
        let { checked: d } = t;
        if (!l) break;
        (u = t.parentElement) == null || u.classList[d ? 'add' : 'remove'](c),
          s[d ? 'add' : 'delete'](l);
        break;
      }
      case 'radio': {
        let { checked: d } = t;
        for (let { element: f, type: T } of o) {
          if (T !== 'radio') return !1;
          let E = f.checked;
          (p = f.parentElement) == null || p.classList[E ? 'add' : 'remove'](c);
        }
        if (!d || !l) break;
        s.clear(), s.add(l);
        break;
      }
      default: {
        if (((r.value = n), t.classList[n ? 'add' : 'remove'](c), i === 'range')) {
          let d = [...s];
          (d[a === 'from' ? 0 : 1] = n), d.some((f) => !!f) ? (e.values = new Set(d)) : s.clear();
          break;
        }
        s.clear(), n && s.add(n);
        break;
      }
    }
    return !0;
  };
  var {
      field: { key: yr },
      reset: { key: br },
      resetFallback: { key: hr },
      range: { key: Ar },
      match: { key: Cr },
      tagFormat: { key: xr },
      tagCategory: { key: _r },
      hideEmpty: { key: Fr, values: Ir },
      highlight: { key: wr, values: Lr },
      highlightCSS: { key: Mr },
      activeCSS: { key: vr },
      debouncing: { key: Rr },
    } = F,
    { checkboxField: Dr, radioField: kr } = D,
    ee = (t) => {
      let e = t.querySelector('form'),
        r = t.querySelector('input[type="submit"]'),
        n = [
          ...h('reset', { scope: t, operator: 'prefixed', all: !0 }),
          ...h('resetFallback', { scope: t, operator: 'prefixed', all: !0 }),
        ],
        o = new Map();
      for (let s of n) {
        let i = s.getAttribute(br) || s.getAttribute(hr),
          l = i ? [...new Set($(i))].map((a) => W(a)) : [];
        o.set(s, l);
      }
      return { form: e, submitButton: r, resetButtonsData: o };
    },
    re = (t, e, r, n, o) => {
      let s = [];
      return (
        t.querySelectorAll(U('field')).forEach((l, a) => {
          let m = l.getAttribute(yr);
          if (!m) return;
          let c = [...new Set($(m))],
            u = c.map((S) => W(S));
          if (!u.length) return;
          let p = Ur(l, c, u, e, r, n, o);
          if (!p) return;
          let [d, f] = p,
            T = s.find((S) => q(u, S.filterKeys)),
            E = T || { ...d, elements: [] };
          T || s.push(E);
          let g = l.closest(`.${Dr}, .${kr}`);
          if (g) {
            let S = R(l),
              b = S ? 'true' : l.textContent || '',
              x = S ? l : g.querySelector('input');
            gt(x, a);
            let z = h('filterResultsCount', { operator: 'prefixed', scope: g }),
              N = l.getAttribute(Fr) === Ir.true ? g : void 0,
              bt = { ...f, value: b, resultsElement: z, hideEmpty: N, element: x, type: x.type };
            E.elements.push(bt), M(x, E, bt);
            return;
          }
          if (!G(l) || l.type === 'submit') return;
          let { type: A, value: C } = l;
          gt(l, a);
          let v = { ...f, element: l, type: A, value: C };
          E.elements.push(v), A === 'select-one' && M(l, E, v);
        }),
        s
      );
    },
    Ur = (t, e, r, n, o, s, i) => {
      let [l, a, m, c, u, p] = [Cr, xr, vr, Rr, wr, Mr].map((B) => t.getAttribute(B)),
        d = L(l, Pt) ? l : void 0,
        f = L(a, tt) ? a : void 0,
        T = t.getAttribute(_r),
        E = m || n,
        g = c ? parseFloat(c) : o,
        A = s || u === Lr.true,
        C = p || i,
        v = t.getAttribute(Ar),
        S,
        b;
      for (let [B, N] of pt($t))
        if (L(v, N)) {
          (S = B), (b = v);
          break;
        }
      return [
        {
          match: d,
          filterKeys: r,
          originalFilterKeys: e,
          highlight: A,
          tagFormat: f,
          tagCategory: T,
          highlightCSSClass: C,
          mode: S,
          values: new Set(),
        },
        { activeCSSClass: E, debouncing: g, resultsCount: 0, mode: b, hidden: !1 },
      ];
    };
  var ne = (t, e, r, n) => (n && qt(t), r ? !0 : e.every((o) => Br(t, o))),
    Br = (
      t,
      {
        filterKeys: e,
        values: r,
        match: n,
        mode: o,
        highlight: s,
        highlightCSSClass: i,
        elements: l,
      }
    ) => {
      if (Mt(t.staticIndex)) return !0;
      let a = [...r];
      if (!a.length) return !0;
      let m = e.includes('*');
      m && (e = Object.keys(t.props));
      let c = e.filter((u) => {
        let p = t.props[u];
        if (!p) return !1;
        let { values: d, highlightData: f, type: T, range: E } = p,
          g = [...d];
        if (!g.length) return !1;
        if (o === 'range') {
          let [C] = g,
            [v, S] = a,
            b = oe(C, v, S, T);
          return b && s && (f == null || f.set(C, { highlightCSSClass: i })), b;
        }
        let A = a.filter((C) => {
          if (E === 'from' || E === 'to') {
            let [S, b] = g,
              x = oe(C, S, b, T);
            return (
              x &&
                s &&
                (f == null || f.set(S, { highlightCSSClass: i }),
                f == null || f.set(b, { highlightCSSClass: i })),
              x
            );
          }
          return g.some((S) => {
            let b;
            if (T === 'date' && !m) {
              let [x, z] = [C, S].map((B) => {
                var N;
                return (N = Tt(B)) == null ? void 0 : N.getTime();
              });
              b = x === z;
            } else
              l.some(({ type: x }) => !['checkbox', 'radio', 'select-one'].includes(x)) ||
              e.length > 1
                ? (b = S.toLowerCase().includes(C.toLowerCase()))
                : (b = C.toLowerCase() === S.toLowerCase());
            return b && s && (f == null || f.set(S, { highlightCSSClass: i, filterValue: C })), b;
          });
        });
        return n === 'all' ? A.length === a.length : A.length > 0;
      });
      return n === 'all' ? c.length === e.length : c.length > 0;
    },
    oe = (t, e, r, n) => {
      let [o, s, i] = [t, e, r].map((l) => (n === 'date' ? Tt(l) : te(l)));
      return o
        ? !e && !Y(i)
          ? o <= i
          : !r && !Y(s)
          ? o >= s
          : Y(i) || Y(s)
          ? !1
          : o >= s && o <= i
        : !1;
    };
  var { location: se, history: Nr } = window,
    ie = (t) => {
      let e = !1,
        { filtersData: r } = t,
        n = new URL(se.href),
        { searchParams: o } = n;
      for (let s of o) {
        let i = W(s[0]),
          l = s[1],
          a = r.find(({ filterKeys: p }) => p.length === 1 && p.includes(i));
        if (!a) continue;
        let m = $(l, void 0, void 0, !1);
        if (!m.length) continue;
        e = !0;
        let { elements: c, mode: u } = a;
        if (u === 'range') {
          let [p, d] = m,
            f = c.filter(({ mode: E }) => E === 'from'),
            T = c.filter(({ mode: E }) => E === 'to');
          if (p && f.length)
            for (let E of f) {
              let { element: g, type: A } = E;
              A === 'checkbox' || A === 'radio' ? k(g, !0) : k(g, p), M(g, a, E);
            }
          if (d && T)
            for (let E of T) {
              let { element: g, type: A } = E;
              A === 'checkbox' || A === 'radio' ? k(g, !0) : k(g, d), M(g, a, E);
            }
          continue;
        }
        for (let p of m)
          for (let d of c) {
            let { element: f, value: T, type: E } = d;
            if (T === p && (E === 'checkbox' || E === 'radio')) k(f, !0);
            else if (!T && E !== 'checkbox' && E !== 'radio') k(f, p);
            else continue;
            M(f, a, d);
          }
      }
      return e;
    },
    le = (t) => {
      let e = new URL(se.href),
        { searchParams: r } = e;
      for (let {
        filterKeys: [n],
        values: o,
      } of t) {
        if (!o.size) {
          r.delete(n);
          continue;
        }
        let s = [...o].join(',');
        r.set(n, s);
      }
      Nr.replaceState(null, '', e.toString());
    };
  var {
      field: { key: Kr },
      range: { key: Or },
      type: { key: Pr },
    } = F,
    st = class {
      constructor(
        e,
        r,
        {
          resultsElement: n,
          showQueryParams: o,
          allowSubmit: s,
          highlightAll: i,
          highlightCSSClass: l,
          activeCSSClass: a,
          debouncing: m,
        }
      ) {
        this.formBlock = e;
        this.listInstance = r;
        this.restartingFilters = !1;
        let { form: c, submitButton: u, resetButtonsData: p } = ee(e);
        (this.form = c),
          (this.submitButton = u),
          (this.resetButtonsData = p),
          (this.resultsElement = n),
          (this.showQueryParams = o),
          (this.allowSubmit = s),
          (this.activeCSSClass = a),
          (this.debouncing = m),
          (this.highlightAll = i),
          (this.highlightCSSClass = l),
          (this.submitButtonVisible = !!u && X(u));
        let d = this.init();
        this.destroy = async () => {
          (await d)();
        };
      }
      async init() {
        let { listInstance: e, hideEmptyFilters: r, showFilterResults: n } = this;
        this.storeFiltersData();
        for (let o of e.items) o.collectProps({ fieldKey: Kr, rangeKey: Or, typeKey: Pr });
        return (
          rt(this, e),
          nt(this, e),
          r && et(this),
          n && ot(this),
          ie(this),
          await J(),
          this.applyFilters(),
          this.listenEvents()
        );
      }
      async listenEvents() {
        let { form: e, resetButtonsData: r, submitButton: n } = this,
          o = w(e, 'submit', (a) => this.handleSubmit(a)),
          s = w(e, 'input', (a) => this.handleInputEvents(a)),
          i = [];
        for (let [a, m] of r) {
          let c = w(a, 'click', () => this.resetFilters(m));
          i.push(c);
          let u = a.closest(`.${D.radioField}`);
          if (!u) continue;
          let p = u.querySelector('input');
          if (!p) continue;
          let d = w(p, 'input', () => {
            p.checked && this.resetFilters(m);
          });
          i.push(d);
        }
        let l;
        return (
          n &&
            (l = w(
              window,
              'resize',
              (0, St.default)(() => {
                this.submitButtonVisible = X(n);
              }, 50)
            )),
          () => {
            o(), s(), l == null || l();
            for (let a of i) a();
          }
        );
      }
      async handleInputEvents({ target: e }) {
        let { submitButtonVisible: r, filtersData: n, restartingFilters: o } = this;
        if (!G(e)) return;
        let s,
          i = n.find(({ elements: m }) => ((s = m.find((c) => c.element === e)), s));
        if (!i || !s || !M(e, i, s) || o || r) return;
        let { debouncing: a } = s;
        this.debouncedApplyFilters ||
          (this.debouncedApplyFilters = (0, St.default)(this.applyFilters, a)),
          await this.debouncedApplyFilters();
      }
      async handleSubmit(e) {
        this.allowSubmit || (e.preventDefault(), e.stopImmediatePropagation()),
          await this.applyFilters();
      }
      async toggleFiltersState(e) {
        let { listInstance: r, filtersActive: n } = this,
          o = !e;
        n !== o &&
          ((this.filtersActive = o),
          r.initialElement &&
            (await r.displayElement(o ? 'initialElement' : 'wrapper', !1, !1),
            await r.displayElement(o ? 'wrapper' : 'initialElement', !0, n !== void 0)));
      }
      async applyFilters(e, r = !0) {
        this.debouncedApplyFilters = void 0;
        let {
            listInstance: n,
            filtersData: o,
            filtersActive: s,
            highlightResults: i,
            tagsInstance: l,
            showQueryParams: a,
          } = this,
          { items: m, initialElement: c } = n,
          u = o.every(({ values: p }) => !p.size);
        if (u && !s) {
          await this.toggleFiltersState(u);
          return;
        }
        for (let p of m) p.valid = ne(p, o, u, i);
        e ||
          (await n.switchPage(1, !1),
          n.scrollToAnchor(),
          a && le(o),
          await Promise.all([
            (async () => {
              u
                ? (await this.toggleFiltersState(u), await n.renderItems(!1, !c))
                : (await n.renderItems(!1, !c), await this.toggleFiltersState(u));
            })(),
            (async () => {
              r && (await (l == null ? void 0 : l.syncTags()));
            })(),
          ]));
      }
      async resetFilters(e, r) {
        this.restartingFilters = !0;
        let { filtersData: n } = this;
        if (!e || !e.length) for (let s of n) dt(s);
        else {
          let s = n.find((i) => q(i.filterKeys, e));
          if (!s) return;
          dt(s, r);
        }
        let o = !r;
        await this.applyFilters(!1, o), (this.restartingFilters = !1);
      }
      async addTagsInstance(e) {
        (this.tagsInstance = e), await e.syncTags();
      }
      storeFiltersData() {
        let {
            form: e,
            activeCSSClass: r,
            debouncing: n,
            highlightAll: o,
            highlightCSSClass: s,
          } = this,
          i = re(e, r, n, o, s);
        return (
          (this.filtersData = i),
          (this.showFilterResults = i.some(({ elements: l }) =>
            l.some(({ resultsElement: a }) => a)
          )),
          (this.hideEmptyFilters = i.some(({ elements: l }) => l.some(({ hideEmpty: a }) => a))),
          (this.highlightResults = i.some(({ highlight: l }) => l)),
          i
        );
      }
    };
  var yt = (
      {
        values: t,
        textNode: e,
        filterData: { originalFilterKeys: r, mode: n, tagFormat: o, tagCategory: s },
      },
      i
    ) => {
      let l = s || r.join(', '),
        a;
      n === 'range' ? (a = `[${t.map((c) => c || '--').join(', ')}]`) : ([a] = t);
      let m;
      a === 'true' ? (m = l) : (o || i) === 'category' ? (m = `${l}: ${a}`) : (m = a),
        (e.textContent = m);
    },
    ae = (t) => !!h('tagRemove', { operator: 'prefixed', scope: t });
  var it = class {
    constructor(e, r, n, o) {
      this.template = e;
      this.filtersInstance = r;
      this.listInstance = n;
      this.globalTagsFormat = o;
      this.tagsData = [];
      this.hasRemoveTrigger = !1;
      (this.wrapper = e.parentElement || I.alert('The tags have no parent wrapper.', 'error')),
        (this.destroy = this.init());
    }
    init() {
      let { template: e, wrapper: r } = this;
      e.remove(), (this.hasRemoveTrigger = ae(e));
      let n = w(r, 'click', (o) => this.handleClick(o));
      return () => n();
    }
    handleClick(e) {
      let { target: r } = e;
      if (!It(r)) return;
      let { hasRemoveTrigger: n, tagsData: o, listInstance: s } = this,
        i = r.closest(
          U('element', 'tagTemplate', { instanceIndex: s.getInstanceIndex(F.element.key) })
        );
      if (!i) return;
      let l = r.closest(U('element', 'tagRemove', { operator: 'prefixed' }));
      if (n && !l) return;
      let a = o.find(({ element: m }) => m === i);
      a && this.removeTag(a, !0);
    }
    async addTag(e, r) {
      let {
          wrapper: n,
          template: o,
          tagsData: s,
          globalTagsFormat: i,
          listInstance: { listAnimation: l },
        } = this,
        a = ut(o),
        m = h('tagText', { operator: 'prefixed', scope: a }) || a,
        c = { element: a, values: r, textNode: m, filterData: e };
      if ((yt(c, i), s.push(c), l)) {
        let { animateIn: u, options: p } = l;
        await u(a, { target: n, ...p });
      } else (a.style.opacity = '1'), n.appendChild(a);
    }
    async updateTag(e, r) {
      let { globalTagsFormat: n } = this;
      (e.values = r), yt(e, n);
    }
    async removeTag(e, r) {
      let {
          element: n,
          values: o,
          filterData: { filterKeys: s },
        } = e,
        {
          tagsData: i,
          filtersInstance: l,
          listInstance: { listAnimation: a },
        } = this;
      (this.tagsData = i.filter((m) => m !== e)),
        await Promise.all([
          Promise.all(
            o.map(async (m) => {
              if (r) return l.resetFilters(s, m);
            })
          ),
          (async () => {
            if (a) {
              let { animateOut: m, options: c } = a;
              await m(n, { remove: !0, ...c });
            } else n.remove();
          })(),
        ]);
    }
    async syncTags() {
      let {
        tagsData: e,
        filtersInstance: { filtersData: r },
      } = this;
      await Promise.all(
        r.map((n) => {
          let { values: o, mode: s } = n,
            i = [...o],
            l = e.filter((c) => c.filterData === n);
          if (l.length === 1 && (i.length === 1 || (s === 'range' && i.length))) {
            let [c] = l;
            this.updateTag(c, i);
            return;
          }
          let a = [...i].filter((c) => !l.some(({ values: u }) => u.includes(c))),
            m = l.filter(({ values: c }) => c.every((u) => !i.includes(u)));
          return Promise.all([
            (async () =>
              s === 'range' && a.length
                ? this.addTag(n, a)
                : Promise.all(a.map((c) => this.addTag(n, [c]))))(),
            Promise.all(m.map((c) => this.removeTag(c))),
          ]);
        })
      );
    }
  };
  var {
      element: { key: ce },
      duration: { key: $r },
      easing: { key: Hr },
      showQuery: { key: Vr, values: Gr },
      allowSubmit: { key: Yr, values: qr },
      tagFormat: { key: jr },
      highlight: { key: Wr, values: zr },
      highlightCSS: { key: Qr },
      activeCSS: { key: Xr },
      debouncing: { key: Jr },
    } = F,
    me = (t, e) => {
      let r = t.getInstanceIndex(ce),
        n = h('filters', { instanceIndex: r });
      if (!n) return;
      let o = n.closest(`.${D.formBlock}`);
      if (!o) return;
      let s = h('empty', { instanceIndex: r });
      s && t.addEmptyElement(s);
      let i = h('initial', { instanceIndex: r });
      if ((i && (t.initialElement = i), !t.scrollAnchor)) {
        let T = h('scrollAnchor', { instanceIndex: r });
        T && (t.scrollAnchor = T);
      }
      if (!t.itemsCount) {
        let T = h('itemsCount', { instanceIndex: r });
        T && t.addItemsCount(T);
      }
      let l = h('resultsCount', { instanceIndex: r }),
        a = t.getAttribute(Vr) === Gr.true,
        m = t.getAttribute(Yr) === qr.true,
        c = t.getAttribute(Wr) === zr.true,
        u = t.getAttribute(Qr) || Ht,
        p = t.getAttribute(Xr) || Vt,
        d = parseFloat(t.getAttribute(Jr) || Gt),
        f = new st(o, t, {
          resultsElement: l,
          showQueryParams: a,
          allowSubmit: m,
          highlightAll: c,
          highlightCSSClass: u,
          activeCSSClass: p,
          debouncing: d,
        });
      return e.addListAnimation(t, { durationKey: $r, easingKey: Hr }), f;
    },
    ue = async (t, e) => {
      let r = t.getInstanceIndex(ce),
        n = h('tagTemplate', { instanceIndex: r });
      if (!n) return;
      let o = t.getAttribute(jr),
        s = L(o, tt) ? o : void 0,
        i = new it(n, e, t, s);
      return await e.addTagsInstance(i), i;
    };
  var pe = async () => {
      let t = await Dt();
      if (!t) return [];
      await Ft(Ct, _t);
      let e = t.createCMSListInstances([U('element', 'list', { operator: 'prefixed' })]),
        r = (await Promise.all(e.map((o) => Zr(o, t)))).filter(ct),
        n = r.map(({ filtersInstance: o }) => o);
      return Rt(O, n, () => {
        var o;
        for (let s of e) (o = s.destroy) == null || o.call(s);
        for (let { cleanup: s } of r) s();
      });
    },
    Zr = async (t, e) => {
      let r = me(t, e);
      if (!r) return;
      Qt(r, t);
      let n = await ue(t, r);
      return {
        filtersInstance: r,
        cleanup: () => {
          r.destroy(), n == null || n.destroy();
        },
      };
    };
  Bt({ init: pe, version: Nt, attributeKey: O });
  J();
})();
