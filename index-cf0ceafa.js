var tu = (SI, kB) => () => (
  kB || SI((kB = { exports: {} }).exports, kB), kB.exports
);
var du = tu((uu, CG) => {
  (async () => {
    (function () {
      const A = document.createElement("link").relList;
      if (A && A.supports && A.supports("modulepreload")) return;
      for (const I of document.querySelectorAll('link[rel="modulepreload"]'))
        g(I);
      new MutationObserver((I) => {
        for (const l of I)
          if (l.type === "childList")
            for (const G of l.addedNodes)
              G.tagName === "LINK" && G.rel === "modulepreload" && g(G);
      }).observe(document, { childList: !0, subtree: !0 });
      function B(I) {
        const l = {};
        return (
          I.integrity && (l.integrity = I.integrity),
          I.referrerPolicy && (l.referrerPolicy = I.referrerPolicy),
          I.crossOrigin === "use-credentials"
            ? (l.credentials = "include")
            : I.crossOrigin === "anonymous"
            ? (l.credentials = "omit")
            : (l.credentials = "same-origin"),
          l
        );
      }
      function g(I) {
        if (I.ep) return;
        I.ep = !0;
        const l = B(I);
        fetch(I.href, l);
      }
    })();
    function SI(A) {
      return A &&
        A.__esModule &&
        Object.prototype.hasOwnProperty.call(A, "default")
        ? A.default
        : A;
    }
    var kB = { exports: {} },
      VI = {},
      Re = { exports: {} },
      z = {},
      Ug = Symbol.for("react.element"),
      St = Symbol.for("react.portal"),
      Vt = Symbol.for("react.fragment"),
      zt = Symbol.for("react.strict_mode"),
      vt = Symbol.for("react.profiler"),
      kt = Symbol.for("react.provider"),
      Jt = Symbol.for("react.context"),
      Ut = Symbol.for("react.forward_ref"),
      jt = Symbol.for("react.suspense"),
      xt = Symbol.for("react.memo"),
      Lt = Symbol.for("react.lazy"),
      Se = Symbol.iterator;
    function ft(A) {
      return A === null || typeof A != "object"
        ? null
        : ((A = (Se && A[Se]) || A["@@iterator"]),
          typeof A == "function" ? A : null);
    }
    var Ve = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      ze = Object.assign,
      ve = {};
    function ag(A, B, g) {
      (this.props = A),
        (this.context = B),
        (this.refs = ve),
        (this.updater = g || Ve);
    }
    (ag.prototype.isReactComponent = {}),
      (ag.prototype.setState = function (A, B) {
        if (typeof A != "object" && typeof A != "function" && A != null)
          throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, A, B, "setState");
      }),
      (ag.prototype.forceUpdate = function (A) {
        this.updater.enqueueForceUpdate(this, A, "forceUpdate");
      });
    function ke() {}
    ke.prototype = ag.prototype;
    function bG(A, B, g) {
      (this.props = A),
        (this.context = B),
        (this.refs = ve),
        (this.updater = g || Ve);
    }
    var oG = (bG.prototype = new ke());
    (oG.constructor = bG), ze(oG, ag.prototype), (oG.isPureReactComponent = !0);
    var Je = Array.isArray,
      Ue = Object.prototype.hasOwnProperty,
      EG = { current: null },
      je = { key: !0, ref: !0, __self: !0, __source: !0 };
    function xe(A, B, g) {
      var I,
        l = {},
        G = null,
        c = null;
      if (B != null)
        for (I in (B.ref !== void 0 && (c = B.ref),
        B.key !== void 0 && (G = "" + B.key),
        B))
          Ue.call(B, I) && !je.hasOwnProperty(I) && (l[I] = B[I]);
      var e = arguments.length - 2;
      if (e === 1) l.children = g;
      else if (1 < e) {
        for (var a = Array(e), Q = 0; Q < e; Q++) a[Q] = arguments[Q + 2];
        l.children = a;
      }
      if (A && A.defaultProps)
        for (I in ((e = A.defaultProps), e)) l[I] === void 0 && (l[I] = e[I]);
      return {
        $$typeof: Ug,
        type: A,
        key: G,
        ref: c,
        props: l,
        _owner: EG.current,
      };
    }
    function Tt(A, B) {
      return {
        $$typeof: Ug,
        type: A.type,
        key: B,
        ref: A.ref,
        props: A.props,
        _owner: A._owner,
      };
    }
    function ZG(A) {
      return typeof A == "object" && A !== null && A.$$typeof === Ug;
    }
    function Kt(A) {
      var B = { "=": "=0", ":": "=2" };
      return (
        "$" +
        A.replace(/[=:]/g, function (g) {
          return B[g];
        })
      );
    }
    var Le = /\/+/g;
    function iG(A, B) {
      return typeof A == "object" && A !== null && A.key != null
        ? Kt("" + A.key)
        : B.toString(36);
    }
    function zI(A, B, g, I, l) {
      var G = typeof A;
      (G === "undefined" || G === "boolean") && (A = null);
      var c = !1;
      if (A === null) c = !0;
      else
        switch (G) {
          case "string":
          case "number":
            c = !0;
            break;
          case "object":
            switch (A.$$typeof) {
              case Ug:
              case St:
                c = !0;
            }
        }
      if (c)
        return (
          (c = A),
          (l = l(c)),
          (A = I === "" ? "." + iG(c, 0) : I),
          Je(l)
            ? ((g = ""),
              A != null && (g = A.replace(Le, "$&/") + "/"),
              zI(l, B, g, "", function (Q) {
                return Q;
              }))
            : l != null &&
              (ZG(l) &&
                (l = Tt(
                  l,
                  g +
                    (!l.key || (c && c.key === l.key)
                      ? ""
                      : ("" + l.key).replace(Le, "$&/") + "/") +
                    A
                )),
              B.push(l)),
          1
        );
      if (((c = 0), (I = I === "" ? "." : I + ":"), Je(A)))
        for (var e = 0; e < A.length; e++) {
          G = A[e];
          var a = I + iG(G, e);
          c += zI(G, B, g, a, l);
        }
      else if (((a = ft(A)), typeof a == "function"))
        for (A = a.call(A), e = 0; !(G = A.next()).done; )
          (G = G.value), (a = I + iG(G, e++)), (c += zI(G, B, g, a, l));
      else if (G === "object")
        throw (
          ((B = String(A)),
          Error(
            "Objects are not valid as a React child (found: " +
              (B === "[object Object]"
                ? "object with keys {" + Object.keys(A).join(", ") + "}"
                : B) +
              "). If you meant to render a collection of children, use an array instead."
          ))
        );
      return c;
    }
    function vI(A, B, g) {
      if (A == null) return A;
      var I = [],
        l = 0;
      return (
        zI(A, I, "", "", function (G) {
          return B.call(g, G, l++);
        }),
        I
      );
    }
    function Ot(A) {
      if (A._status === -1) {
        var B = A._result;
        (B = B()),
          B.then(
            function (g) {
              (A._status === 0 || A._status === -1) &&
                ((A._status = 1), (A._result = g));
            },
            function (g) {
              (A._status === 0 || A._status === -1) &&
                ((A._status = 2), (A._result = g));
            }
          ),
          A._status === -1 && ((A._status = 0), (A._result = B));
      }
      if (A._status === 1) return A._result.default;
      throw A._result;
    }
    var bA = { current: null },
      kI = { transition: null },
      Pt = {
        ReactCurrentDispatcher: bA,
        ReactCurrentBatchConfig: kI,
        ReactCurrentOwner: EG,
      };
    (z.Children = {
      map: vI,
      forEach: function (A, B, g) {
        vI(
          A,
          function () {
            B.apply(this, arguments);
          },
          g
        );
      },
      count: function (A) {
        var B = 0;
        return (
          vI(A, function () {
            B++;
          }),
          B
        );
      },
      toArray: function (A) {
        return (
          vI(A, function (B) {
            return B;
          }) || []
        );
      },
      only: function (A) {
        if (!ZG(A))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return A;
      },
    }),
      (z.Component = ag),
      (z.Fragment = Vt),
      (z.Profiler = vt),
      (z.PureComponent = bG),
      (z.StrictMode = zt),
      (z.Suspense = jt),
      (z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pt),
      (z.cloneElement = function (A, B, g) {
        if (A == null)
          throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
              A +
              "."
          );
        var I = ze({}, A.props),
          l = A.key,
          G = A.ref,
          c = A._owner;
        if (B != null) {
          if (
            (B.ref !== void 0 && ((G = B.ref), (c = EG.current)),
            B.key !== void 0 && (l = "" + B.key),
            A.type && A.type.defaultProps)
          )
            var e = A.type.defaultProps;
          for (a in B)
            Ue.call(B, a) &&
              !je.hasOwnProperty(a) &&
              (I[a] = B[a] === void 0 && e !== void 0 ? e[a] : B[a]);
        }
        var a = arguments.length - 2;
        if (a === 1) I.children = g;
        else if (1 < a) {
          e = Array(a);
          for (var Q = 0; Q < a; Q++) e[Q] = arguments[Q + 2];
          I.children = e;
        }
        return {
          $$typeof: Ug,
          type: A.type,
          key: l,
          ref: G,
          props: I,
          _owner: c,
        };
      }),
      (z.createContext = function (A) {
        return (
          (A = {
            $$typeof: Jt,
            _currentValue: A,
            _currentValue2: A,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
          }),
          (A.Provider = { $$typeof: kt, _context: A }),
          (A.Consumer = A)
        );
      }),
      (z.createElement = xe),
      (z.createFactory = function (A) {
        var B = xe.bind(null, A);
        return (B.type = A), B;
      }),
      (z.createRef = function () {
        return { current: null };
      }),
      (z.forwardRef = function (A) {
        return { $$typeof: Ut, render: A };
      }),
      (z.isValidElement = ZG),
      (z.lazy = function (A) {
        return {
          $$typeof: Lt,
          _payload: { _status: -1, _result: A },
          _init: Ot,
        };
      }),
      (z.memo = function (A, B) {
        return { $$typeof: xt, type: A, compare: B === void 0 ? null : B };
      }),
      (z.startTransition = function (A) {
        var B = kI.transition;
        kI.transition = {};
        try {
          A();
        } finally {
          kI.transition = B;
        }
      }),
      (z.unstable_act = function () {
        throw Error("act(...) is not supported in production builds of React.");
      }),
      (z.useCallback = function (A, B) {
        return bA.current.useCallback(A, B);
      }),
      (z.useContext = function (A) {
        return bA.current.useContext(A);
      }),
      (z.useDebugValue = function () {}),
      (z.useDeferredValue = function (A) {
        return bA.current.useDeferredValue(A);
      }),
      (z.useEffect = function (A, B) {
        return bA.current.useEffect(A, B);
      }),
      (z.useId = function () {
        return bA.current.useId();
      }),
      (z.useImperativeHandle = function (A, B, g) {
        return bA.current.useImperativeHandle(A, B, g);
      }),
      (z.useInsertionEffect = function (A, B) {
        return bA.current.useInsertionEffect(A, B);
      }),
      (z.useLayoutEffect = function (A, B) {
        return bA.current.useLayoutEffect(A, B);
      }),
      (z.useMemo = function (A, B) {
        return bA.current.useMemo(A, B);
      }),
      (z.useReducer = function (A, B, g) {
        return bA.current.useReducer(A, B, g);
      }),
      (z.useRef = function (A) {
        return bA.current.useRef(A);
      }),
      (z.useState = function (A) {
        return bA.current.useState(A);
      }),
      (z.useSyncExternalStore = function (A, B, g) {
        return bA.current.useSyncExternalStore(A, B, g);
      }),
      (z.useTransition = function () {
        return bA.current.useTransition();
      }),
      (z.version = "18.2.0"),
      (Re.exports = z);
    var Z = Re.exports;
    const _A = SI(Z);
    var _t = Z,
      qt = Symbol.for("react.element"),
      $t = Symbol.for("react.fragment"),
      Ad = Object.prototype.hasOwnProperty,
      Bd =
        _t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      gd = { key: !0, ref: !0, __self: !0, __source: !0 };
    function fe(A, B, g) {
      var I,
        l = {},
        G = null,
        c = null;
      g !== void 0 && (G = "" + g),
        B.key !== void 0 && (G = "" + B.key),
        B.ref !== void 0 && (c = B.ref);
      for (I in B) Ad.call(B, I) && !gd.hasOwnProperty(I) && (l[I] = B[I]);
      if (A && A.defaultProps)
        for (I in ((B = A.defaultProps), B)) l[I] === void 0 && (l[I] = B[I]);
      return {
        $$typeof: qt,
        type: A,
        key: G,
        ref: c,
        props: l,
        _owner: Bd.current,
      };
    }
    (VI.Fragment = $t), (VI.jsx = fe), (VI.jsxs = fe), (kB.exports = VI);
    var wA = kB.exports,
      uG = {},
      Te = { exports: {} },
      NA = {},
      Ke = { exports: {} },
      Oe = {};
    (function (A) {
      function B(F, R) {
        var S = F.length;
        F.push(R);
        A: for (; 0 < S; ) {
          var J = (S - 1) >>> 1,
            AA = F[J];
          if (0 < l(AA, R)) (F[J] = R), (F[S] = AA), (S = J);
          else break A;
        }
      }
      function g(F) {
        return F.length === 0 ? null : F[0];
      }
      function I(F) {
        if (F.length === 0) return null;
        var R = F[0],
          S = F.pop();
        if (S !== R) {
          F[0] = S;
          A: for (var J = 0, AA = F.length, tG = AA >>> 1; J < tG; ) {
            var cg = 2 * (J + 1) - 1,
              Xe = F[cg],
              eg = cg + 1,
              dG = F[eg];
            if (0 > l(Xe, S))
              eg < AA && 0 > l(dG, Xe)
                ? ((F[J] = dG), (F[eg] = S), (J = eg))
                : ((F[J] = Xe), (F[cg] = S), (J = cg));
            else if (eg < AA && 0 > l(dG, S))
              (F[J] = dG), (F[eg] = S), (J = eg);
            else break A;
          }
        }
        return R;
      }
      function l(F, R) {
        var S = F.sortIndex - R.sortIndex;
        return S !== 0 ? S : F.id - R.id;
      }
      if (
        typeof performance == "object" &&
        typeof performance.now == "function"
      ) {
        var G = performance;
        A.unstable_now = function () {
          return G.now();
        };
      } else {
        var c = Date,
          e = c.now();
        A.unstable_now = function () {
          return c.now() - e;
        };
      }
      var a = [],
        Q = [],
        E = 1,
        b = null,
        o = 3,
        u = !1,
        r = !1,
        s = !1,
        H = typeof setTimeout == "function" ? setTimeout : null,
        d = typeof clearTimeout == "function" ? clearTimeout : null,
        t = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function C(F) {
        for (var R = g(Q); R !== null; ) {
          if (R.callback === null) I(Q);
          else if (R.startTime <= F)
            I(Q), (R.sortIndex = R.expirationTime), B(a, R);
          else break;
          R = g(Q);
        }
      }
      function w(F) {
        if (((s = !1), C(F), !r))
          if (g(a) !== null) (r = !0), Gg(M);
          else {
            var R = g(Q);
            R !== null && vB(w, R.startTime - F);
          }
      }
      function M(F, R) {
        (r = !1), s && ((s = !1), d(X), (X = -1)), (u = !0);
        var S = o;
        try {
          for (
            C(R), b = g(a);
            b !== null && (!(b.expirationTime > R) || (F && !rA()));

          ) {
            var J = b.callback;
            if (typeof J == "function") {
              (b.callback = null), (o = b.priorityLevel);
              var AA = J(b.expirationTime <= R);
              (R = A.unstable_now()),
                typeof AA == "function"
                  ? (b.callback = AA)
                  : b === g(a) && I(a),
                C(R);
            } else I(a);
            b = g(a);
          }
          if (b !== null) var tG = !0;
          else {
            var cg = g(Q);
            cg !== null && vB(w, cg.startTime - R), (tG = !1);
          }
          return tG;
        } finally {
          (b = null), (o = S), (u = !1);
        }
      }
      var N = !1,
        m = null,
        X = -1,
        j = 5,
        V = -1;
      function rA() {
        return !(A.unstable_now() - V < j);
      }
      function oB() {
        if (m !== null) {
          var F = A.unstable_now();
          V = F;
          var R = !0;
          try {
            R = m(!0, F);
          } finally {
            R ? SA() : ((N = !1), (m = null));
          }
        } else N = !1;
      }
      var SA;
      if (typeof t == "function")
        SA = function () {
          t(oB);
        };
      else if (typeof MessageChannel < "u") {
        var $ = new MessageChannel(),
          VA = $.port2;
        ($.port1.onmessage = oB),
          (SA = function () {
            VA.postMessage(null);
          });
      } else
        SA = function () {
          H(oB, 0);
        };
      function Gg(F) {
        (m = F), N || ((N = !0), SA());
      }
      function vB(F, R) {
        X = H(function () {
          F(A.unstable_now());
        }, R);
      }
      (A.unstable_IdlePriority = 5),
        (A.unstable_ImmediatePriority = 1),
        (A.unstable_LowPriority = 4),
        (A.unstable_NormalPriority = 3),
        (A.unstable_Profiling = null),
        (A.unstable_UserBlockingPriority = 2),
        (A.unstable_cancelCallback = function (F) {
          F.callback = null;
        }),
        (A.unstable_continueExecution = function () {
          r || u || ((r = !0), Gg(M));
        }),
        (A.unstable_forceFrameRate = function (F) {
          0 > F || 125 < F
            ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
              )
            : (j = 0 < F ? Math.floor(1e3 / F) : 5);
        }),
        (A.unstable_getCurrentPriorityLevel = function () {
          return o;
        }),
        (A.unstable_getFirstCallbackNode = function () {
          return g(a);
        }),
        (A.unstable_next = function (F) {
          switch (o) {
            case 1:
            case 2:
            case 3:
              var R = 3;
              break;
            default:
              R = o;
          }
          var S = o;
          o = R;
          try {
            return F();
          } finally {
            o = S;
          }
        }),
        (A.unstable_pauseExecution = function () {}),
        (A.unstable_requestPaint = function () {}),
        (A.unstable_runWithPriority = function (F, R) {
          switch (F) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              F = 3;
          }
          var S = o;
          o = F;
          try {
            return R();
          } finally {
            o = S;
          }
        }),
        (A.unstable_scheduleCallback = function (F, R, S) {
          var J = A.unstable_now();
          switch (
            (typeof S == "object" && S !== null
              ? ((S = S.delay), (S = typeof S == "number" && 0 < S ? J + S : J))
              : (S = J),
            F)
          ) {
            case 1:
              var AA = -1;
              break;
            case 2:
              AA = 250;
              break;
            case 5:
              AA = 1073741823;
              break;
            case 4:
              AA = 1e4;
              break;
            default:
              AA = 5e3;
          }
          return (
            (AA = S + AA),
            (F = {
              id: E++,
              callback: R,
              priorityLevel: F,
              startTime: S,
              expirationTime: AA,
              sortIndex: -1,
            }),
            S > J
              ? ((F.sortIndex = S),
                B(Q, F),
                g(a) === null &&
                  F === g(Q) &&
                  (s ? (d(X), (X = -1)) : (s = !0), vB(w, S - J)))
              : ((F.sortIndex = AA), B(a, F), r || u || ((r = !0), Gg(M))),
            F
          );
        }),
        (A.unstable_shouldYield = rA),
        (A.unstable_wrapCallback = function (F) {
          var R = o;
          return function () {
            var S = o;
            o = R;
            try {
              return F.apply(this, arguments);
            } finally {
              o = S;
            }
          };
        });
    })(Oe),
      (Ke.exports = Oe);
    var Id = Ke.exports,
      Pe = Z,
      pA = Id;
    function Y(A) {
      for (
        var B = "https://reactjs.org/docs/error-decoder.html?invariant=" + A,
          g = 1;
        g < arguments.length;
        g++
      )
        B += "&args[]=" + encodeURIComponent(arguments[g]);
      return (
        "Minified React error #" +
        A +
        "; visit " +
        B +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var _e = new Set(),
      jg = {};
    function JB(A, B) {
      ng(A, B), ng(A + "Capture", B);
    }
    function ng(A, B) {
      for (jg[A] = B, A = 0; A < B.length; A++) _e.add(B[A]);
    }
    var IB = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
      ),
      rG = Object.prototype.hasOwnProperty,
      ld =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      qe = {},
      $e = {};
    function Gd(A) {
      return rG.call($e, A)
        ? !0
        : rG.call(qe, A)
        ? !1
        : ld.test(A)
        ? ($e[A] = !0)
        : ((qe[A] = !0), !1);
    }
    function cd(A, B, g, I) {
      if (g !== null && g.type === 0) return !1;
      switch (typeof B) {
        case "function":
        case "symbol":
          return !0;
        case "boolean":
          return I
            ? !1
            : g !== null
            ? !g.acceptsBooleans
            : ((A = A.toLowerCase().slice(0, 5)),
              A !== "data-" && A !== "aria-");
        default:
          return !1;
      }
    }
    function ed(A, B, g, I) {
      if (B === null || typeof B > "u" || cd(A, B, g, I)) return !0;
      if (I) return !1;
      if (g !== null)
        switch (g.type) {
          case 3:
            return !B;
          case 4:
            return B === !1;
          case 5:
            return isNaN(B);
          case 6:
            return isNaN(B) || 1 > B;
        }
      return !1;
    }
    function oA(A, B, g, I, l, G, c) {
      (this.acceptsBooleans = B === 2 || B === 3 || B === 4),
        (this.attributeName = I),
        (this.attributeNamespace = l),
        (this.mustUseProperty = g),
        (this.propertyName = A),
        (this.type = B),
        (this.sanitizeURL = G),
        (this.removeEmptyString = c);
    }
    var cA = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
      .split(" ")
      .forEach(function (A) {
        cA[A] = new oA(A, 0, !1, A, null, !1, !1);
      }),
      [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
      ].forEach(function (A) {
        var B = A[0];
        cA[B] = new oA(B, 1, !1, A[1], null, !1, !1);
      }),
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
        A
      ) {
        cA[A] = new oA(A, 2, !1, A.toLowerCase(), null, !1, !1);
      }),
      [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha",
      ].forEach(function (A) {
        cA[A] = new oA(A, 2, !1, A, null, !1, !1);
      }),
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
        .split(" ")
        .forEach(function (A) {
          cA[A] = new oA(A, 3, !1, A.toLowerCase(), null, !1, !1);
        }),
      ["checked", "multiple", "muted", "selected"].forEach(function (A) {
        cA[A] = new oA(A, 3, !0, A, null, !1, !1);
      }),
      ["capture", "download"].forEach(function (A) {
        cA[A] = new oA(A, 4, !1, A, null, !1, !1);
      }),
      ["cols", "rows", "size", "span"].forEach(function (A) {
        cA[A] = new oA(A, 6, !1, A, null, !1, !1);
      }),
      ["rowSpan", "start"].forEach(function (A) {
        cA[A] = new oA(A, 5, !1, A.toLowerCase(), null, !1, !1);
      });
    var wG = /[\-:]([a-z])/g;
    function sG(A) {
      return A[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function (A) {
        var B = A.replace(wG, sG);
        cA[B] = new oA(B, 1, !1, A, null, !1, !1);
      }),
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
        .split(" ")
        .forEach(function (A) {
          var B = A.replace(wG, sG);
          cA[B] = new oA(B, 1, !1, A, "http://www.w3.org/1999/xlink", !1, !1);
        }),
      ["xml:base", "xml:lang", "xml:space"].forEach(function (A) {
        var B = A.replace(wG, sG);
        cA[B] = new oA(
          B,
          1,
          !1,
          A,
          "http://www.w3.org/XML/1998/namespace",
          !1,
          !1
        );
      }),
      ["tabIndex", "crossOrigin"].forEach(function (A) {
        cA[A] = new oA(A, 1, !1, A.toLowerCase(), null, !1, !1);
      }),
      (cA.xlinkHref = new oA(
        "xlinkHref",
        1,
        !1,
        "xlink:href",
        "http://www.w3.org/1999/xlink",
        !0,
        !1
      )),
      ["src", "href", "action", "formAction"].forEach(function (A) {
        cA[A] = new oA(A, 1, !1, A.toLowerCase(), null, !0, !0);
      });
    function hG(A, B, g, I) {
      var l = cA.hasOwnProperty(B) ? cA[B] : null;
      (l !== null
        ? l.type !== 0
        : I ||
          !(2 < B.length) ||
          (B[0] !== "o" && B[0] !== "O") ||
          (B[1] !== "n" && B[1] !== "N")) &&
        (ed(B, g, l, I) && (g = null),
        I || l === null
          ? Gd(B) &&
            (g === null ? A.removeAttribute(B) : A.setAttribute(B, "" + g))
          : l.mustUseProperty
          ? (A[l.propertyName] = g === null ? (l.type === 3 ? !1 : "") : g)
          : ((B = l.attributeName),
            (I = l.attributeNamespace),
            g === null
              ? A.removeAttribute(B)
              : ((l = l.type),
                (g = l === 3 || (l === 4 && g === !0) ? "" : "" + g),
                I ? A.setAttributeNS(I, B, g) : A.setAttribute(B, g))));
    }
    var lB = Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      JI = Symbol.for("react.element"),
      Qg = Symbol.for("react.portal"),
      tg = Symbol.for("react.fragment"),
      YG = Symbol.for("react.strict_mode"),
      MG = Symbol.for("react.profiler"),
      Aa = Symbol.for("react.provider"),
      Ba = Symbol.for("react.context"),
      WG = Symbol.for("react.forward_ref"),
      mG = Symbol.for("react.suspense"),
      yG = Symbol.for("react.suspense_list"),
      NG = Symbol.for("react.memo"),
      EB = Symbol.for("react.lazy"),
      ga = Symbol.for("react.offscreen"),
      Ia = Symbol.iterator;
    function xg(A) {
      return A === null || typeof A != "object"
        ? null
        : ((A = (Ia && A[Ia]) || A["@@iterator"]),
          typeof A == "function" ? A : null);
    }
    var T = Object.assign,
      pG;
    function Lg(A) {
      if (pG === void 0)
        try {
          throw Error();
        } catch (g) {
          var B = g.stack.trim().match(/\n( *(at )?)/);
          pG = (B && B[1]) || "";
        }
      return (
        `
` +
        pG +
        A
      );
    }
    var FG = !1;
    function DG(A, B) {
      if (!A || FG) return "";
      FG = !0;
      var g = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (B)
          if (
            ((B = function () {
              throw Error();
            }),
            Object.defineProperty(B.prototype, "props", {
              set: function () {
                throw Error();
              },
            }),
            typeof Reflect == "object" && Reflect.construct)
          ) {
            try {
              Reflect.construct(B, []);
            } catch (Q) {
              var I = Q;
            }
            Reflect.construct(A, [], B);
          } else {
            try {
              B.call();
            } catch (Q) {
              I = Q;
            }
            A.call(B.prototype);
          }
        else {
          try {
            throw Error();
          } catch (Q) {
            I = Q;
          }
          A();
        }
      } catch (Q) {
        if (Q && I && typeof Q.stack == "string") {
          for (
            var l = Q.stack.split(`
`),
              G = I.stack.split(`
`),
              c = l.length - 1,
              e = G.length - 1;
            1 <= c && 0 <= e && l[c] !== G[e];

          )
            e--;
          for (; 1 <= c && 0 <= e; c--, e--)
            if (l[c] !== G[e]) {
              if (c !== 1 || e !== 1)
                do
                  if ((c--, e--, 0 > e || l[c] !== G[e])) {
                    var a =
                      `
` + l[c].replace(" at new ", " at ");
                    return (
                      A.displayName &&
                        a.includes("<anonymous>") &&
                        (a = a.replace("<anonymous>", A.displayName)),
                      a
                    );
                  }
                while (1 <= c && 0 <= e);
              break;
            }
        }
      } finally {
        (FG = !1), (Error.prepareStackTrace = g);
      }
      return (A = A ? A.displayName || A.name : "") ? Lg(A) : "";
    }
    function ad(A) {
      switch (A.tag) {
        case 5:
          return Lg(A.type);
        case 16:
          return Lg("Lazy");
        case 13:
          return Lg("Suspense");
        case 19:
          return Lg("SuspenseList");
        case 0:
        case 2:
        case 15:
          return (A = DG(A.type, !1)), A;
        case 11:
          return (A = DG(A.type.render, !1)), A;
        case 1:
          return (A = DG(A.type, !0)), A;
        default:
          return "";
      }
    }
    function HG(A) {
      if (A == null) return null;
      if (typeof A == "function") return A.displayName || A.name || null;
      if (typeof A == "string") return A;
      switch (A) {
        case tg:
          return "Fragment";
        case Qg:
          return "Portal";
        case MG:
          return "Profiler";
        case YG:
          return "StrictMode";
        case mG:
          return "Suspense";
        case yG:
          return "SuspenseList";
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case Ba:
            return (A.displayName || "Context") + ".Consumer";
          case Aa:
            return (A._context.displayName || "Context") + ".Provider";
          case WG:
            var B = A.render;
            return (
              (A = A.displayName),
              A ||
                ((A = B.displayName || B.name || ""),
                (A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef")),
              A
            );
          case NG:
            return (
              (B = A.displayName || null), B !== null ? B : HG(A.type) || "Memo"
            );
          case EB:
            (B = A._payload), (A = A._init);
            try {
              return HG(A(B));
            } catch {}
        }
      return null;
    }
    function nd(A) {
      var B = A.type;
      switch (A.tag) {
        case 24:
          return "Cache";
        case 9:
          return (B.displayName || "Context") + ".Consumer";
        case 10:
          return (B._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return (
            (A = B.render),
            (A = A.displayName || A.name || ""),
            B.displayName || (A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef")
          );
        case 7:
          return "Fragment";
        case 5:
          return B;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return HG(B);
        case 8:
          return B === YG ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if (typeof B == "function") return B.displayName || B.name || null;
          if (typeof B == "string") return B;
      }
      return null;
    }
    function ZB(A) {
      switch (typeof A) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return A;
        case "object":
          return A;
        default:
          return "";
      }
    }
    function la(A) {
      var B = A.type;
      return (
        (A = A.nodeName) &&
        A.toLowerCase() === "input" &&
        (B === "checkbox" || B === "radio")
      );
    }
    function Qd(A) {
      var B = la(A) ? "checked" : "value",
        g = Object.getOwnPropertyDescriptor(A.constructor.prototype, B),
        I = "" + A[B];
      if (
        !A.hasOwnProperty(B) &&
        typeof g < "u" &&
        typeof g.get == "function" &&
        typeof g.set == "function"
      ) {
        var l = g.get,
          G = g.set;
        return (
          Object.defineProperty(A, B, {
            configurable: !0,
            get: function () {
              return l.call(this);
            },
            set: function (c) {
              (I = "" + c), G.call(this, c);
            },
          }),
          Object.defineProperty(A, B, { enumerable: g.enumerable }),
          {
            getValue: function () {
              return I;
            },
            setValue: function (c) {
              I = "" + c;
            },
            stopTracking: function () {
              (A._valueTracker = null), delete A[B];
            },
          }
        );
      }
    }
    function UI(A) {
      A._valueTracker || (A._valueTracker = Qd(A));
    }
    function Ga(A) {
      if (!A) return !1;
      var B = A._valueTracker;
      if (!B) return !0;
      var g = B.getValue(),
        I = "";
      return (
        A && (I = la(A) ? (A.checked ? "true" : "false") : A.value),
        (A = I),
        A !== g ? (B.setValue(A), !0) : !1
      );
    }
    function jI(A) {
      if (
        ((A = A || (typeof document < "u" ? document : void 0)), typeof A > "u")
      )
        return null;
      try {
        return A.activeElement || A.body;
      } catch {
        return A.body;
      }
    }
    function XG(A, B) {
      var g = B.checked;
      return T({}, B, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: g ?? A._wrapperState.initialChecked,
      });
    }
    function ca(A, B) {
      var g = B.defaultValue == null ? "" : B.defaultValue,
        I = B.checked != null ? B.checked : B.defaultChecked;
      (g = ZB(B.value != null ? B.value : g)),
        (A._wrapperState = {
          initialChecked: I,
          initialValue: g,
          controlled:
            B.type === "checkbox" || B.type === "radio"
              ? B.checked != null
              : B.value != null,
        });
    }
    function ea(A, B) {
      (B = B.checked), B != null && hG(A, "checked", B, !1);
    }
    function RG(A, B) {
      ea(A, B);
      var g = ZB(B.value),
        I = B.type;
      if (g != null)
        I === "number"
          ? ((g === 0 && A.value === "") || A.value != g) && (A.value = "" + g)
          : A.value !== "" + g && (A.value = "" + g);
      else if (I === "submit" || I === "reset") {
        A.removeAttribute("value");
        return;
      }
      B.hasOwnProperty("value")
        ? SG(A, B.type, g)
        : B.hasOwnProperty("defaultValue") && SG(A, B.type, ZB(B.defaultValue)),
        B.checked == null &&
          B.defaultChecked != null &&
          (A.defaultChecked = !!B.defaultChecked);
    }
    function aa(A, B, g) {
      if (B.hasOwnProperty("value") || B.hasOwnProperty("defaultValue")) {
        var I = B.type;
        if (
          !(
            (I !== "submit" && I !== "reset") ||
            (B.value !== void 0 && B.value !== null)
          )
        )
          return;
        (B = "" + A._wrapperState.initialValue),
          g || B === A.value || (A.value = B),
          (A.defaultValue = B);
      }
      (g = A.name),
        g !== "" && (A.name = ""),
        (A.defaultChecked = !!A._wrapperState.initialChecked),
        g !== "" && (A.name = g);
    }
    function SG(A, B, g) {
      (B !== "number" || jI(A.ownerDocument) !== A) &&
        (g == null
          ? (A.defaultValue = "" + A._wrapperState.initialValue)
          : A.defaultValue !== "" + g && (A.defaultValue = "" + g));
    }
    var fg = Array.isArray;
    function dg(A, B, g, I) {
      if (((A = A.options), B)) {
        B = {};
        for (var l = 0; l < g.length; l++) B["$" + g[l]] = !0;
        for (g = 0; g < A.length; g++)
          (l = B.hasOwnProperty("$" + A[g].value)),
            A[g].selected !== l && (A[g].selected = l),
            l && I && (A[g].defaultSelected = !0);
      } else {
        for (g = "" + ZB(g), B = null, l = 0; l < A.length; l++) {
          if (A[l].value === g) {
            (A[l].selected = !0), I && (A[l].defaultSelected = !0);
            return;
          }
          B !== null || A[l].disabled || (B = A[l]);
        }
        B !== null && (B.selected = !0);
      }
    }
    function VG(A, B) {
      if (B.dangerouslySetInnerHTML != null) throw Error(Y(91));
      return T({}, B, {
        value: void 0,
        defaultValue: void 0,
        children: "" + A._wrapperState.initialValue,
      });
    }
    function na(A, B) {
      var g = B.value;
      if (g == null) {
        if (((g = B.children), (B = B.defaultValue), g != null)) {
          if (B != null) throw Error(Y(92));
          if (fg(g)) {
            if (1 < g.length) throw Error(Y(93));
            g = g[0];
          }
          B = g;
        }
        B == null && (B = ""), (g = B);
      }
      A._wrapperState = { initialValue: ZB(g) };
    }
    function Qa(A, B) {
      var g = ZB(B.value),
        I = ZB(B.defaultValue);
      g != null &&
        ((g = "" + g),
        g !== A.value && (A.value = g),
        B.defaultValue == null && A.defaultValue !== g && (A.defaultValue = g)),
        I != null && (A.defaultValue = "" + I);
    }
    function ta(A) {
      var B = A.textContent;
      B === A._wrapperState.initialValue &&
        B !== "" &&
        B !== null &&
        (A.value = B);
    }
    function da(A) {
      switch (A) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function zG(A, B) {
      return A == null || A === "http://www.w3.org/1999/xhtml"
        ? da(B)
        : A === "http://www.w3.org/2000/svg" && B === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : A;
    }
    var xI,
      Ca = (function (A) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
          ? function (B, g, I, l) {
              MSApp.execUnsafeLocalFunction(function () {
                return A(B, g, I, l);
              });
            }
          : A;
      })(function (A, B) {
        if (A.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in A)
          A.innerHTML = B;
        else {
          for (
            xI = xI || document.createElement("div"),
              xI.innerHTML = "<svg>" + B.valueOf().toString() + "</svg>",
              B = xI.firstChild;
            A.firstChild;

          )
            A.removeChild(A.firstChild);
          for (; B.firstChild; ) A.appendChild(B.firstChild);
        }
      });
    function Tg(A, B) {
      if (B) {
        var g = A.firstChild;
        if (g && g === A.lastChild && g.nodeType === 3) {
          g.nodeValue = B;
          return;
        }
      }
      A.textContent = B;
    }
    var Kg = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      td = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Kg).forEach(function (A) {
      td.forEach(function (B) {
        (B = B + A.charAt(0).toUpperCase() + A.substring(1)), (Kg[B] = Kg[A]);
      });
    });
    function ba(A, B, g) {
      return B == null || typeof B == "boolean" || B === ""
        ? ""
        : g ||
          typeof B != "number" ||
          B === 0 ||
          (Kg.hasOwnProperty(A) && Kg[A])
        ? ("" + B).trim()
        : B + "px";
    }
    function oa(A, B) {
      A = A.style;
      for (var g in B)
        if (B.hasOwnProperty(g)) {
          var I = g.indexOf("--") === 0,
            l = ba(g, B[g], I);
          g === "float" && (g = "cssFloat"),
            I ? A.setProperty(g, l) : (A[g] = l);
        }
    }
    var dd = T(
      { menuitem: !0 },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      }
    );
    function vG(A, B) {
      if (B) {
        if (dd[A] && (B.children != null || B.dangerouslySetInnerHTML != null))
          throw Error(Y(137, A));
        if (B.dangerouslySetInnerHTML != null) {
          if (B.children != null) throw Error(Y(60));
          if (
            typeof B.dangerouslySetInnerHTML != "object" ||
            !("__html" in B.dangerouslySetInnerHTML)
          )
            throw Error(Y(61));
        }
        if (B.style != null && typeof B.style != "object") throw Error(Y(62));
      }
    }
    function kG(A, B) {
      if (A.indexOf("-") === -1) return typeof B.is == "string";
      switch (A) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var JG = null;
    function UG(A) {
      return (
        (A = A.target || A.srcElement || window),
        A.correspondingUseElement && (A = A.correspondingUseElement),
        A.nodeType === 3 ? A.parentNode : A
      );
    }
    var jG = null,
      Cg = null,
      bg = null;
    function Ea(A) {
      if ((A = EI(A))) {
        if (typeof jG != "function") throw Error(Y(280));
        var B = A.stateNode;
        B && ((B = Cl(B)), jG(A.stateNode, A.type, B));
      }
    }
    function Za(A) {
      Cg ? (bg ? bg.push(A) : (bg = [A])) : (Cg = A);
    }
    function ia() {
      if (Cg) {
        var A = Cg,
          B = bg;
        if (((bg = Cg = null), Ea(A), B))
          for (A = 0; A < B.length; A++) Ea(B[A]);
      }
    }
    function ua(A, B) {
      return A(B);
    }
    function ra() {}
    var xG = !1;
    function wa(A, B, g) {
      if (xG) return A(B, g);
      xG = !0;
      try {
        return ua(A, B, g);
      } finally {
        (xG = !1), (Cg !== null || bg !== null) && (ra(), ia());
      }
    }
    function Og(A, B) {
      var g = A.stateNode;
      if (g === null) return null;
      var I = Cl(g);
      if (I === null) return null;
      g = I[B];
      A: switch (B) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (I = !I.disabled) ||
            ((A = A.type),
            (I = !(
              A === "button" ||
              A === "input" ||
              A === "select" ||
              A === "textarea"
            ))),
            (A = !I);
          break A;
        default:
          A = !1;
      }
      if (A) return null;
      if (g && typeof g != "function") throw Error(Y(231, B, typeof g));
      return g;
    }
    var LG = !1;
    if (IB)
      try {
        var Pg = {};
        Object.defineProperty(Pg, "passive", {
          get: function () {
            LG = !0;
          },
        }),
          window.addEventListener("test", Pg, Pg),
          window.removeEventListener("test", Pg, Pg);
      } catch {
        LG = !1;
      }
    function Cd(A, B, g, I, l, G, c, e, a) {
      var Q = Array.prototype.slice.call(arguments, 3);
      try {
        B.apply(g, Q);
      } catch (E) {
        this.onError(E);
      }
    }
    var _g = !1,
      LI = null,
      fI = !1,
      fG = null,
      bd = {
        onError: function (A) {
          (_g = !0), (LI = A);
        },
      };
    function od(A, B, g, I, l, G, c, e, a) {
      (_g = !1), (LI = null), Cd.apply(bd, arguments);
    }
    function Ed(A, B, g, I, l, G, c, e, a) {
      if ((od.apply(this, arguments), _g)) {
        if (_g) {
          var Q = LI;
          (_g = !1), (LI = null);
        } else throw Error(Y(198));
        fI || ((fI = !0), (fG = Q));
      }
    }
    function UB(A) {
      var B = A,
        g = A;
      if (A.alternate) for (; B.return; ) B = B.return;
      else {
        A = B;
        do (B = A), B.flags & 4098 && (g = B.return), (A = B.return);
        while (A);
      }
      return B.tag === 3 ? g : null;
    }
    function sa(A) {
      if (A.tag === 13) {
        var B = A.memoizedState;
        if (
          (B === null &&
            ((A = A.alternate), A !== null && (B = A.memoizedState)),
          B !== null)
        )
          return B.dehydrated;
      }
      return null;
    }
    function ha(A) {
      if (UB(A) !== A) throw Error(Y(188));
    }
    function Zd(A) {
      var B = A.alternate;
      if (!B) {
        if (((B = UB(A)), B === null)) throw Error(Y(188));
        return B !== A ? null : A;
      }
      for (var g = A, I = B; ; ) {
        var l = g.return;
        if (l === null) break;
        var G = l.alternate;
        if (G === null) {
          if (((I = l.return), I !== null)) {
            g = I;
            continue;
          }
          break;
        }
        if (l.child === G.child) {
          for (G = l.child; G; ) {
            if (G === g) return ha(l), A;
            if (G === I) return ha(l), B;
            G = G.sibling;
          }
          throw Error(Y(188));
        }
        if (g.return !== I.return) (g = l), (I = G);
        else {
          for (var c = !1, e = l.child; e; ) {
            if (e === g) {
              (c = !0), (g = l), (I = G);
              break;
            }
            if (e === I) {
              (c = !0), (I = l), (g = G);
              break;
            }
            e = e.sibling;
          }
          if (!c) {
            for (e = G.child; e; ) {
              if (e === g) {
                (c = !0), (g = G), (I = l);
                break;
              }
              if (e === I) {
                (c = !0), (I = G), (g = l);
                break;
              }
              e = e.sibling;
            }
            if (!c) throw Error(Y(189));
          }
        }
        if (g.alternate !== I) throw Error(Y(190));
      }
      if (g.tag !== 3) throw Error(Y(188));
      return g.stateNode.current === g ? A : B;
    }
    function Ya(A) {
      return (A = Zd(A)), A !== null ? Ma(A) : null;
    }
    function Ma(A) {
      if (A.tag === 5 || A.tag === 6) return A;
      for (A = A.child; A !== null; ) {
        var B = Ma(A);
        if (B !== null) return B;
        A = A.sibling;
      }
      return null;
    }
    var Wa = pA.unstable_scheduleCallback,
      ma = pA.unstable_cancelCallback,
      id = pA.unstable_shouldYield,
      ud = pA.unstable_requestPaint,
      q = pA.unstable_now,
      rd = pA.unstable_getCurrentPriorityLevel,
      TG = pA.unstable_ImmediatePriority,
      ya = pA.unstable_UserBlockingPriority,
      TI = pA.unstable_NormalPriority,
      wd = pA.unstable_LowPriority,
      Na = pA.unstable_IdlePriority,
      KI = null,
      qA = null;
    function sd(A) {
      if (qA && typeof qA.onCommitFiberRoot == "function")
        try {
          qA.onCommitFiberRoot(KI, A, void 0, (A.current.flags & 128) === 128);
        } catch {}
    }
    var xA = Math.clz32 ? Math.clz32 : Md,
      hd = Math.log,
      Yd = Math.LN2;
    function Md(A) {
      return (A >>>= 0), A === 0 ? 32 : (31 - ((hd(A) / Yd) | 0)) | 0;
    }
    var OI = 64,
      PI = 4194304;
    function qg(A) {
      switch (A & -A) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return A & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return A & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return A;
      }
    }
    function _I(A, B) {
      var g = A.pendingLanes;
      if (g === 0) return 0;
      var I = 0,
        l = A.suspendedLanes,
        G = A.pingedLanes,
        c = g & 268435455;
      if (c !== 0) {
        var e = c & ~l;
        e !== 0 ? (I = qg(e)) : ((G &= c), G !== 0 && (I = qg(G)));
      } else (c = g & ~l), c !== 0 ? (I = qg(c)) : G !== 0 && (I = qg(G));
      if (I === 0) return 0;
      if (
        B !== 0 &&
        B !== I &&
        !(B & l) &&
        ((l = I & -I),
        (G = B & -B),
        l >= G || (l === 16 && (G & 4194240) !== 0))
      )
        return B;
      if ((I & 4 && (I |= g & 16), (B = A.entangledLanes), B !== 0))
        for (A = A.entanglements, B &= I; 0 < B; )
          (g = 31 - xA(B)), (l = 1 << g), (I |= A[g]), (B &= ~l);
      return I;
    }
    function Wd(A, B) {
      switch (A) {
        case 1:
        case 2:
        case 4:
          return B + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return B + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function md(A, B) {
      for (
        var g = A.suspendedLanes,
          I = A.pingedLanes,
          l = A.expirationTimes,
          G = A.pendingLanes;
        0 < G;

      ) {
        var c = 31 - xA(G),
          e = 1 << c,
          a = l[c];
        a === -1
          ? (!(e & g) || e & I) && (l[c] = Wd(e, B))
          : a <= B && (A.expiredLanes |= e),
          (G &= ~e);
      }
    }
    function KG(A) {
      return (
        (A = A.pendingLanes & -1073741825),
        A !== 0 ? A : A & 1073741824 ? 1073741824 : 0
      );
    }
    function pa() {
      var A = OI;
      return (OI <<= 1), !(OI & 4194240) && (OI = 64), A;
    }
    function OG(A) {
      for (var B = [], g = 0; 31 > g; g++) B.push(A);
      return B;
    }
    function $g(A, B, g) {
      (A.pendingLanes |= B),
        B !== 536870912 && ((A.suspendedLanes = 0), (A.pingedLanes = 0)),
        (A = A.eventTimes),
        (B = 31 - xA(B)),
        (A[B] = g);
    }
    function yd(A, B) {
      var g = A.pendingLanes & ~B;
      (A.pendingLanes = B),
        (A.suspendedLanes = 0),
        (A.pingedLanes = 0),
        (A.expiredLanes &= B),
        (A.mutableReadLanes &= B),
        (A.entangledLanes &= B),
        (B = A.entanglements);
      var I = A.eventTimes;
      for (A = A.expirationTimes; 0 < g; ) {
        var l = 31 - xA(g),
          G = 1 << l;
        (B[l] = 0), (I[l] = -1), (A[l] = -1), (g &= ~G);
      }
    }
    function PG(A, B) {
      var g = (A.entangledLanes |= B);
      for (A = A.entanglements; g; ) {
        var I = 31 - xA(g),
          l = 1 << I;
        (l & B) | (A[I] & B) && (A[I] |= B), (g &= ~l);
      }
    }
    var k = 0;
    function Fa(A) {
      return (
        (A &= -A), 1 < A ? (4 < A ? (A & 268435455 ? 16 : 536870912) : 4) : 1
      );
    }
    var Da,
      _G,
      Ha,
      Xa,
      Ra,
      qG = !1,
      qI = [],
      iB = null,
      uB = null,
      rB = null,
      AI = new Map(),
      BI = new Map(),
      wB = [],
      Nd =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
          " "
        );
    function Sa(A, B) {
      switch (A) {
        case "focusin":
        case "focusout":
          iB = null;
          break;
        case "dragenter":
        case "dragleave":
          uB = null;
          break;
        case "mouseover":
        case "mouseout":
          rB = null;
          break;
        case "pointerover":
        case "pointerout":
          AI.delete(B.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          BI.delete(B.pointerId);
      }
    }
    function gI(A, B, g, I, l, G) {
      return A === null || A.nativeEvent !== G
        ? ((A = {
            blockedOn: B,
            domEventName: g,
            eventSystemFlags: I,
            nativeEvent: G,
            targetContainers: [l],
          }),
          B !== null && ((B = EI(B)), B !== null && _G(B)),
          A)
        : ((A.eventSystemFlags |= I),
          (B = A.targetContainers),
          l !== null && B.indexOf(l) === -1 && B.push(l),
          A);
    }
    function pd(A, B, g, I, l) {
      switch (B) {
        case "focusin":
          return (iB = gI(iB, A, B, g, I, l)), !0;
        case "dragenter":
          return (uB = gI(uB, A, B, g, I, l)), !0;
        case "mouseover":
          return (rB = gI(rB, A, B, g, I, l)), !0;
        case "pointerover":
          var G = l.pointerId;
          return AI.set(G, gI(AI.get(G) || null, A, B, g, I, l)), !0;
        case "gotpointercapture":
          return (
            (G = l.pointerId),
            BI.set(G, gI(BI.get(G) || null, A, B, g, I, l)),
            !0
          );
      }
      return !1;
    }
    function Va(A) {
      var B = jB(A.target);
      if (B !== null) {
        var g = UB(B);
        if (g !== null) {
          if (((B = g.tag), B === 13)) {
            if (((B = sa(g)), B !== null)) {
              (A.blockedOn = B),
                Ra(A.priority, function () {
                  Ha(g);
                });
              return;
            }
          } else if (
            B === 3 &&
            g.stateNode.current.memoizedState.isDehydrated
          ) {
            A.blockedOn = g.tag === 3 ? g.stateNode.containerInfo : null;
            return;
          }
        }
      }
      A.blockedOn = null;
    }
    function $I(A) {
      if (A.blockedOn !== null) return !1;
      for (var B = A.targetContainers; 0 < B.length; ) {
        var g = Ac(A.domEventName, A.eventSystemFlags, B[0], A.nativeEvent);
        if (g === null) {
          g = A.nativeEvent;
          var I = new g.constructor(g.type, g);
          (JG = I), g.target.dispatchEvent(I), (JG = null);
        } else return (B = EI(g)), B !== null && _G(B), (A.blockedOn = g), !1;
        B.shift();
      }
      return !0;
    }
    function za(A, B, g) {
      $I(A) && g.delete(B);
    }
    function Fd() {
      (qG = !1),
        iB !== null && $I(iB) && (iB = null),
        uB !== null && $I(uB) && (uB = null),
        rB !== null && $I(rB) && (rB = null),
        AI.forEach(za),
        BI.forEach(za);
    }
    function II(A, B) {
      A.blockedOn === B &&
        ((A.blockedOn = null),
        qG ||
          ((qG = !0),
          pA.unstable_scheduleCallback(pA.unstable_NormalPriority, Fd)));
    }
    function lI(A) {
      function B(l) {
        return II(l, A);
      }
      if (0 < qI.length) {
        II(qI[0], A);
        for (var g = 1; g < qI.length; g++) {
          var I = qI[g];
          I.blockedOn === A && (I.blockedOn = null);
        }
      }
      for (
        iB !== null && II(iB, A),
          uB !== null && II(uB, A),
          rB !== null && II(rB, A),
          AI.forEach(B),
          BI.forEach(B),
          g = 0;
        g < wB.length;
        g++
      )
        (I = wB[g]), I.blockedOn === A && (I.blockedOn = null);
      for (; 0 < wB.length && ((g = wB[0]), g.blockedOn === null); )
        Va(g), g.blockedOn === null && wB.shift();
    }
    var og = lB.ReactCurrentBatchConfig,
      Al = !0;
    function Dd(A, B, g, I) {
      var l = k,
        G = og.transition;
      og.transition = null;
      try {
        (k = 1), $G(A, B, g, I);
      } finally {
        (k = l), (og.transition = G);
      }
    }
    function Hd(A, B, g, I) {
      var l = k,
        G = og.transition;
      og.transition = null;
      try {
        (k = 4), $G(A, B, g, I);
      } finally {
        (k = l), (og.transition = G);
      }
    }
    function $G(A, B, g, I) {
      if (Al) {
        var l = Ac(A, B, g, I);
        if (l === null) Zc(A, B, I, Bl, g), Sa(A, I);
        else if (pd(l, A, B, g, I)) I.stopPropagation();
        else if ((Sa(A, I), B & 4 && -1 < Nd.indexOf(A))) {
          for (; l !== null; ) {
            var G = EI(l);
            if (
              (G !== null && Da(G),
              (G = Ac(A, B, g, I)),
              G === null && Zc(A, B, I, Bl, g),
              G === l)
            )
              break;
            l = G;
          }
          l !== null && I.stopPropagation();
        } else Zc(A, B, I, null, g);
      }
    }
    var Bl = null;
    function Ac(A, B, g, I) {
      if (((Bl = null), (A = UG(I)), (A = jB(A)), A !== null))
        if (((B = UB(A)), B === null)) A = null;
        else if (((g = B.tag), g === 13)) {
          if (((A = sa(B)), A !== null)) return A;
          A = null;
        } else if (g === 3) {
          if (B.stateNode.current.memoizedState.isDehydrated)
            return B.tag === 3 ? B.stateNode.containerInfo : null;
          A = null;
        } else B !== A && (A = null);
      return (Bl = A), null;
    }
    function va(A) {
      switch (A) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 4;
        case "message":
          switch (rd()) {
            case TG:
              return 1;
            case ya:
              return 4;
            case TI:
            case wd:
              return 16;
            case Na:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var sB = null,
      Bc = null,
      gl = null;
    function ka() {
      if (gl) return gl;
      var A,
        B = Bc,
        g = B.length,
        I,
        l = "value" in sB ? sB.value : sB.textContent,
        G = l.length;
      for (A = 0; A < g && B[A] === l[A]; A++);
      var c = g - A;
      for (I = 1; I <= c && B[g - I] === l[G - I]; I++);
      return (gl = l.slice(A, 1 < I ? 1 - I : void 0));
    }
    function Il(A) {
      var B = A.keyCode;
      return (
        "charCode" in A
          ? ((A = A.charCode), A === 0 && B === 13 && (A = 13))
          : (A = B),
        A === 10 && (A = 13),
        32 <= A || A === 13 ? A : 0
      );
    }
    function ll() {
      return !0;
    }
    function Ja() {
      return !1;
    }
    function FA(A) {
      function B(g, I, l, G, c) {
        (this._reactName = g),
          (this._targetInst = l),
          (this.type = I),
          (this.nativeEvent = G),
          (this.target = c),
          (this.currentTarget = null);
        for (var e in A)
          A.hasOwnProperty(e) && ((g = A[e]), (this[e] = g ? g(G) : G[e]));
        return (
          (this.isDefaultPrevented = (
            G.defaultPrevented != null
              ? G.defaultPrevented
              : G.returnValue === !1
          )
            ? ll
            : Ja),
          (this.isPropagationStopped = Ja),
          this
        );
      }
      return (
        T(B.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var g = this.nativeEvent;
            g &&
              (g.preventDefault
                ? g.preventDefault()
                : typeof g.returnValue != "unknown" && (g.returnValue = !1),
              (this.isDefaultPrevented = ll));
          },
          stopPropagation: function () {
            var g = this.nativeEvent;
            g &&
              (g.stopPropagation
                ? g.stopPropagation()
                : typeof g.cancelBubble != "unknown" && (g.cancelBubble = !0),
              (this.isPropagationStopped = ll));
          },
          persist: function () {},
          isPersistent: ll,
        }),
        B
      );
    }
    var Eg = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (A) {
          return A.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      gc = FA(Eg),
      GI = T({}, Eg, { view: 0, detail: 0 }),
      Xd = FA(GI),
      Ic,
      lc,
      cI,
      Gl = T({}, GI, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: cc,
        button: 0,
        buttons: 0,
        relatedTarget: function (A) {
          return A.relatedTarget === void 0
            ? A.fromElement === A.srcElement
              ? A.toElement
              : A.fromElement
            : A.relatedTarget;
        },
        movementX: function (A) {
          return "movementX" in A
            ? A.movementX
            : (A !== cI &&
                (cI && A.type === "mousemove"
                  ? ((Ic = A.screenX - cI.screenX),
                    (lc = A.screenY - cI.screenY))
                  : (lc = Ic = 0),
                (cI = A)),
              Ic);
        },
        movementY: function (A) {
          return "movementY" in A ? A.movementY : lc;
        },
      }),
      Ua = FA(Gl),
      Rd = T({}, Gl, { dataTransfer: 0 }),
      Sd = FA(Rd),
      Vd = T({}, GI, { relatedTarget: 0 }),
      Gc = FA(Vd),
      zd = T({}, Eg, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      vd = FA(zd),
      kd = T({}, Eg, {
        clipboardData: function (A) {
          return "clipboardData" in A ? A.clipboardData : window.clipboardData;
        },
      }),
      Jd = FA(kd),
      Ud = T({}, Eg, { data: 0 }),
      ja = FA(Ud),
      jd = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
      },
      xd = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
      },
      Ld = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
      };
    function fd(A) {
      var B = this.nativeEvent;
      return B.getModifierState
        ? B.getModifierState(A)
        : (A = Ld[A])
        ? !!B[A]
        : !1;
    }
    function cc() {
      return fd;
    }
    var Td = T({}, GI, {
        key: function (A) {
          if (A.key) {
            var B = jd[A.key] || A.key;
            if (B !== "Unidentified") return B;
          }
          return A.type === "keypress"
            ? ((A = Il(A)), A === 13 ? "Enter" : String.fromCharCode(A))
            : A.type === "keydown" || A.type === "keyup"
            ? xd[A.keyCode] || "Unidentified"
            : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: cc,
        charCode: function (A) {
          return A.type === "keypress" ? Il(A) : 0;
        },
        keyCode: function (A) {
          return A.type === "keydown" || A.type === "keyup" ? A.keyCode : 0;
        },
        which: function (A) {
          return A.type === "keypress"
            ? Il(A)
            : A.type === "keydown" || A.type === "keyup"
            ? A.keyCode
            : 0;
        },
      }),
      Kd = FA(Td),
      Od = T({}, Gl, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
      }),
      xa = FA(Od),
      Pd = T({}, GI, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: cc,
      }),
      _d = FA(Pd),
      qd = T({}, Eg, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
      $d = FA(qd),
      AC = T({}, Gl, {
        deltaX: function (A) {
          return "deltaX" in A
            ? A.deltaX
            : "wheelDeltaX" in A
            ? -A.wheelDeltaX
            : 0;
        },
        deltaY: function (A) {
          return "deltaY" in A
            ? A.deltaY
            : "wheelDeltaY" in A
            ? -A.wheelDeltaY
            : "wheelDelta" in A
            ? -A.wheelDelta
            : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
      }),
      BC = FA(AC),
      gC = [9, 13, 27, 32],
      ec = IB && "CompositionEvent" in window,
      eI = null;
    IB && "documentMode" in document && (eI = document.documentMode);
    var IC = IB && "TextEvent" in window && !eI,
      La = IB && (!ec || (eI && 8 < eI && 11 >= eI)),
      fa = String.fromCharCode(32),
      Ta = !1;
    function Ka(A, B) {
      switch (A) {
        case "keyup":
          return gC.indexOf(B.keyCode) !== -1;
        case "keydown":
          return B.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Oa(A) {
      return (
        (A = A.detail), typeof A == "object" && "data" in A ? A.data : null
      );
    }
    var Zg = !1;
    function lC(A, B) {
      switch (A) {
        case "compositionend":
          return Oa(B);
        case "keypress":
          return B.which !== 32 ? null : ((Ta = !0), fa);
        case "textInput":
          return (A = B.data), A === fa && Ta ? null : A;
        default:
          return null;
      }
    }
    function GC(A, B) {
      if (Zg)
        return A === "compositionend" || (!ec && Ka(A, B))
          ? ((A = ka()), (gl = Bc = sB = null), (Zg = !1), A)
          : null;
      switch (A) {
        case "paste":
          return null;
        case "keypress":
          if (
            !(B.ctrlKey || B.altKey || B.metaKey) ||
            (B.ctrlKey && B.altKey)
          ) {
            if (B.char && 1 < B.char.length) return B.char;
            if (B.which) return String.fromCharCode(B.which);
          }
          return null;
        case "compositionend":
          return La && B.locale !== "ko" ? null : B.data;
        default:
          return null;
      }
    }
    var cC = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function Pa(A) {
      var B = A && A.nodeName && A.nodeName.toLowerCase();
      return B === "input" ? !!cC[A.type] : B === "textarea";
    }
    function _a(A, B, g, I) {
      Za(I),
        (B = Ql(B, "onChange")),
        0 < B.length &&
          ((g = new gc("onChange", "change", null, g, I)),
          A.push({ event: g, listeners: B }));
    }
    var aI = null,
      nI = null;
    function eC(A) {
      on(A, 0);
    }
    function cl(A) {
      var B = sg(A);
      if (Ga(B)) return A;
    }
    function aC(A, B) {
      if (A === "change") return B;
    }
    var qa = !1;
    if (IB) {
      var ac;
      if (IB) {
        var nc = "oninput" in document;
        if (!nc) {
          var $a = document.createElement("div");
          $a.setAttribute("oninput", "return;"),
            (nc = typeof $a.oninput == "function");
        }
        ac = nc;
      } else ac = !1;
      qa = ac && (!document.documentMode || 9 < document.documentMode);
    }
    function An() {
      aI && (aI.detachEvent("onpropertychange", Bn), (nI = aI = null));
    }
    function Bn(A) {
      if (A.propertyName === "value" && cl(nI)) {
        var B = [];
        _a(B, nI, A, UG(A)), wa(eC, B);
      }
    }
    function nC(A, B, g) {
      A === "focusin"
        ? (An(), (aI = B), (nI = g), aI.attachEvent("onpropertychange", Bn))
        : A === "focusout" && An();
    }
    function QC(A) {
      if (A === "selectionchange" || A === "keyup" || A === "keydown")
        return cl(nI);
    }
    function tC(A, B) {
      if (A === "click") return cl(B);
    }
    function dC(A, B) {
      if (A === "input" || A === "change") return cl(B);
    }
    function CC(A, B) {
      return (A === B && (A !== 0 || 1 / A === 1 / B)) || (A !== A && B !== B);
    }
    var LA = typeof Object.is == "function" ? Object.is : CC;
    function QI(A, B) {
      if (LA(A, B)) return !0;
      if (
        typeof A != "object" ||
        A === null ||
        typeof B != "object" ||
        B === null
      )
        return !1;
      var g = Object.keys(A),
        I = Object.keys(B);
      if (g.length !== I.length) return !1;
      for (I = 0; I < g.length; I++) {
        var l = g[I];
        if (!rG.call(B, l) || !LA(A[l], B[l])) return !1;
      }
      return !0;
    }
    function gn(A) {
      for (; A && A.firstChild; ) A = A.firstChild;
      return A;
    }
    function In(A, B) {
      var g = gn(A);
      A = 0;
      for (var I; g; ) {
        if (g.nodeType === 3) {
          if (((I = A + g.textContent.length), A <= B && I >= B))
            return { node: g, offset: B - A };
          A = I;
        }
        A: {
          for (; g; ) {
            if (g.nextSibling) {
              g = g.nextSibling;
              break A;
            }
            g = g.parentNode;
          }
          g = void 0;
        }
        g = gn(g);
      }
    }
    function ln(A, B) {
      return A && B
        ? A === B
          ? !0
          : A && A.nodeType === 3
          ? !1
          : B && B.nodeType === 3
          ? ln(A, B.parentNode)
          : "contains" in A
          ? A.contains(B)
          : A.compareDocumentPosition
          ? !!(A.compareDocumentPosition(B) & 16)
          : !1
        : !1;
    }
    function Gn() {
      for (var A = window, B = jI(); B instanceof A.HTMLIFrameElement; ) {
        try {
          var g = typeof B.contentWindow.location.href == "string";
        } catch {
          g = !1;
        }
        if (g) A = B.contentWindow;
        else break;
        B = jI(A.document);
      }
      return B;
    }
    function Qc(A) {
      var B = A && A.nodeName && A.nodeName.toLowerCase();
      return (
        B &&
        ((B === "input" &&
          (A.type === "text" ||
            A.type === "search" ||
            A.type === "tel" ||
            A.type === "url" ||
            A.type === "password")) ||
          B === "textarea" ||
          A.contentEditable === "true")
      );
    }
    function bC(A) {
      var B = Gn(),
        g = A.focusedElem,
        I = A.selectionRange;
      if (
        B !== g &&
        g &&
        g.ownerDocument &&
        ln(g.ownerDocument.documentElement, g)
      ) {
        if (I !== null && Qc(g)) {
          if (
            ((B = I.start),
            (A = I.end),
            A === void 0 && (A = B),
            "selectionStart" in g)
          )
            (g.selectionStart = B),
              (g.selectionEnd = Math.min(A, g.value.length));
          else if (
            ((A =
              ((B = g.ownerDocument || document) && B.defaultView) || window),
            A.getSelection)
          ) {
            A = A.getSelection();
            var l = g.textContent.length,
              G = Math.min(I.start, l);
            (I = I.end === void 0 ? G : Math.min(I.end, l)),
              !A.extend && G > I && ((l = I), (I = G), (G = l)),
              (l = In(g, G));
            var c = In(g, I);
            l &&
              c &&
              (A.rangeCount !== 1 ||
                A.anchorNode !== l.node ||
                A.anchorOffset !== l.offset ||
                A.focusNode !== c.node ||
                A.focusOffset !== c.offset) &&
              ((B = B.createRange()),
              B.setStart(l.node, l.offset),
              A.removeAllRanges(),
              G > I
                ? (A.addRange(B), A.extend(c.node, c.offset))
                : (B.setEnd(c.node, c.offset), A.addRange(B)));
          }
        }
        for (B = [], A = g; (A = A.parentNode); )
          A.nodeType === 1 &&
            B.push({ element: A, left: A.scrollLeft, top: A.scrollTop });
        for (
          typeof g.focus == "function" && g.focus(), g = 0;
          g < B.length;
          g++
        )
          (A = B[g]),
            (A.element.scrollLeft = A.left),
            (A.element.scrollTop = A.top);
      }
    }
    var oC = IB && "documentMode" in document && 11 >= document.documentMode,
      ig = null,
      tc = null,
      tI = null,
      dc = !1;
    function cn(A, B, g) {
      var I =
        g.window === g ? g.document : g.nodeType === 9 ? g : g.ownerDocument;
      dc ||
        ig == null ||
        ig !== jI(I) ||
        ((I = ig),
        "selectionStart" in I && Qc(I)
          ? (I = { start: I.selectionStart, end: I.selectionEnd })
          : ((I = (
              (I.ownerDocument && I.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (I = {
              anchorNode: I.anchorNode,
              anchorOffset: I.anchorOffset,
              focusNode: I.focusNode,
              focusOffset: I.focusOffset,
            })),
        (tI && QI(tI, I)) ||
          ((tI = I),
          (I = Ql(tc, "onSelect")),
          0 < I.length &&
            ((B = new gc("onSelect", "select", null, B, g)),
            A.push({ event: B, listeners: I }),
            (B.target = ig))));
    }
    function el(A, B) {
      var g = {};
      return (
        (g[A.toLowerCase()] = B.toLowerCase()),
        (g["Webkit" + A] = "webkit" + B),
        (g["Moz" + A] = "moz" + B),
        g
      );
    }
    var ug = {
        animationend: el("Animation", "AnimationEnd"),
        animationiteration: el("Animation", "AnimationIteration"),
        animationstart: el("Animation", "AnimationStart"),
        transitionend: el("Transition", "TransitionEnd"),
      },
      Cc = {},
      en = {};
    IB &&
      ((en = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete ug.animationend.animation,
        delete ug.animationiteration.animation,
        delete ug.animationstart.animation),
      "TransitionEvent" in window || delete ug.transitionend.transition);
    function al(A) {
      if (Cc[A]) return Cc[A];
      if (!ug[A]) return A;
      var B = ug[A],
        g;
      for (g in B) if (B.hasOwnProperty(g) && g in en) return (Cc[A] = B[g]);
      return A;
    }
    var an = al("animationend"),
      nn = al("animationiteration"),
      Qn = al("animationstart"),
      tn = al("transitionend"),
      dn = new Map(),
      Cn =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
          " "
        );
    function hB(A, B) {
      dn.set(A, B), JB(B, [A]);
    }
    for (var bc = 0; bc < Cn.length; bc++) {
      var oc = Cn[bc],
        EC = oc.toLowerCase(),
        ZC = oc[0].toUpperCase() + oc.slice(1);
      hB(EC, "on" + ZC);
    }
    hB(an, "onAnimationEnd"),
      hB(nn, "onAnimationIteration"),
      hB(Qn, "onAnimationStart"),
      hB("dblclick", "onDoubleClick"),
      hB("focusin", "onFocus"),
      hB("focusout", "onBlur"),
      hB(tn, "onTransitionEnd"),
      ng("onMouseEnter", ["mouseout", "mouseover"]),
      ng("onMouseLeave", ["mouseout", "mouseover"]),
      ng("onPointerEnter", ["pointerout", "pointerover"]),
      ng("onPointerLeave", ["pointerout", "pointerover"]),
      JB(
        "onChange",
        "change click focusin focusout input keydown keyup selectionchange".split(
          " "
        )
      ),
      JB(
        "onSelect",
        "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
          " "
        )
      ),
      JB("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
      JB(
        "onCompositionEnd",
        "compositionend focusout keydown keypress keyup mousedown".split(" ")
      ),
      JB(
        "onCompositionStart",
        "compositionstart focusout keydown keypress keyup mousedown".split(" ")
      ),
      JB(
        "onCompositionUpdate",
        "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
      );
    var dI =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " "
        ),
      iC = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat(dI)
      );
    function bn(A, B, g) {
      var I = A.type || "unknown-event";
      (A.currentTarget = g), Ed(I, B, void 0, A), (A.currentTarget = null);
    }
    function on(A, B) {
      B = (B & 4) !== 0;
      for (var g = 0; g < A.length; g++) {
        var I = A[g],
          l = I.event;
        I = I.listeners;
        A: {
          var G = void 0;
          if (B)
            for (var c = I.length - 1; 0 <= c; c--) {
              var e = I[c],
                a = e.instance,
                Q = e.currentTarget;
              if (((e = e.listener), a !== G && l.isPropagationStopped()))
                break A;
              bn(l, e, Q), (G = a);
            }
          else
            for (c = 0; c < I.length; c++) {
              if (
                ((e = I[c]),
                (a = e.instance),
                (Q = e.currentTarget),
                (e = e.listener),
                a !== G && l.isPropagationStopped())
              )
                break A;
              bn(l, e, Q), (G = a);
            }
        }
      }
      if (fI) throw ((A = fG), (fI = !1), (fG = null), A);
    }
    function x(A, B) {
      var g = B[hc];
      g === void 0 && (g = B[hc] = new Set());
      var I = A + "__bubble";
      g.has(I) || (En(B, A, 2, !1), g.add(I));
    }
    function Ec(A, B, g) {
      var I = 0;
      B && (I |= 4), En(g, A, I, B);
    }
    var nl = "_reactListening" + Math.random().toString(36).slice(2);
    function CI(A) {
      if (!A[nl]) {
        (A[nl] = !0),
          _e.forEach(function (g) {
            g !== "selectionchange" &&
              (iC.has(g) || Ec(g, !1, A), Ec(g, !0, A));
          });
        var B = A.nodeType === 9 ? A : A.ownerDocument;
        B === null || B[nl] || ((B[nl] = !0), Ec("selectionchange", !1, B));
      }
    }
    function En(A, B, g, I) {
      switch (va(B)) {
        case 1:
          var l = Dd;
          break;
        case 4:
          l = Hd;
          break;
        default:
          l = $G;
      }
      (g = l.bind(null, B, g, A)),
        (l = void 0),
        !LG ||
          (B !== "touchstart" && B !== "touchmove" && B !== "wheel") ||
          (l = !0),
        I
          ? l !== void 0
            ? A.addEventListener(B, g, { capture: !0, passive: l })
            : A.addEventListener(B, g, !0)
          : l !== void 0
          ? A.addEventListener(B, g, { passive: l })
          : A.addEventListener(B, g, !1);
    }
    function Zc(A, B, g, I, l) {
      var G = I;
      if (!(B & 1) && !(B & 2) && I !== null)
        A: for (;;) {
          if (I === null) return;
          var c = I.tag;
          if (c === 3 || c === 4) {
            var e = I.stateNode.containerInfo;
            if (e === l || (e.nodeType === 8 && e.parentNode === l)) break;
            if (c === 4)
              for (c = I.return; c !== null; ) {
                var a = c.tag;
                if (
                  (a === 3 || a === 4) &&
                  ((a = c.stateNode.containerInfo),
                  a === l || (a.nodeType === 8 && a.parentNode === l))
                )
                  return;
                c = c.return;
              }
            for (; e !== null; ) {
              if (((c = jB(e)), c === null)) return;
              if (((a = c.tag), a === 5 || a === 6)) {
                I = G = c;
                continue A;
              }
              e = e.parentNode;
            }
          }
          I = I.return;
        }
      wa(function () {
        var Q = G,
          E = UG(g),
          b = [];
        A: {
          var o = dn.get(A);
          if (o !== void 0) {
            var u = gc,
              r = A;
            switch (A) {
              case "keypress":
                if (Il(g) === 0) break A;
              case "keydown":
              case "keyup":
                u = Kd;
                break;
              case "focusin":
                (r = "focus"), (u = Gc);
                break;
              case "focusout":
                (r = "blur"), (u = Gc);
                break;
              case "beforeblur":
              case "afterblur":
                u = Gc;
                break;
              case "click":
                if (g.button === 2) break A;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                u = Ua;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                u = Sd;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                u = _d;
                break;
              case an:
              case nn:
              case Qn:
                u = vd;
                break;
              case tn:
                u = $d;
                break;
              case "scroll":
                u = Xd;
                break;
              case "wheel":
                u = BC;
                break;
              case "copy":
              case "cut":
              case "paste":
                u = Jd;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                u = xa;
            }
            var s = (B & 4) !== 0,
              H = !s && A === "scroll",
              d = s ? (o !== null ? o + "Capture" : null) : o;
            s = [];
            for (var t = Q, C; t !== null; ) {
              C = t;
              var w = C.stateNode;
              if (
                (C.tag === 5 &&
                  w !== null &&
                  ((C = w),
                  d !== null &&
                    ((w = Og(t, d)), w != null && s.push(bI(t, w, C)))),
                H)
              )
                break;
              t = t.return;
            }
            0 < s.length &&
              ((o = new u(o, r, null, g, E)),
              b.push({ event: o, listeners: s }));
          }
        }
        if (!(B & 7)) {
          A: {
            if (
              ((o = A === "mouseover" || A === "pointerover"),
              (u = A === "mouseout" || A === "pointerout"),
              o &&
                g !== JG &&
                (r = g.relatedTarget || g.fromElement) &&
                (jB(r) || r[GB]))
            )
              break A;
            if (
              (u || o) &&
              ((o =
                E.window === E
                  ? E
                  : (o = E.ownerDocument)
                  ? o.defaultView || o.parentWindow
                  : window),
              u
                ? ((r = g.relatedTarget || g.toElement),
                  (u = Q),
                  (r = r ? jB(r) : null),
                  r !== null &&
                    ((H = UB(r)), r !== H || (r.tag !== 5 && r.tag !== 6)) &&
                    (r = null))
                : ((u = null), (r = Q)),
              u !== r)
            ) {
              if (
                ((s = Ua),
                (w = "onMouseLeave"),
                (d = "onMouseEnter"),
                (t = "mouse"),
                (A === "pointerout" || A === "pointerover") &&
                  ((s = xa),
                  (w = "onPointerLeave"),
                  (d = "onPointerEnter"),
                  (t = "pointer")),
                (H = u == null ? o : sg(u)),
                (C = r == null ? o : sg(r)),
                (o = new s(w, t + "leave", u, g, E)),
                (o.target = H),
                (o.relatedTarget = C),
                (w = null),
                jB(E) === Q &&
                  ((s = new s(d, t + "enter", r, g, E)),
                  (s.target = C),
                  (s.relatedTarget = H),
                  (w = s)),
                (H = w),
                u && r)
              )
                B: {
                  for (s = u, d = r, t = 0, C = s; C; C = rg(C)) t++;
                  for (C = 0, w = d; w; w = rg(w)) C++;
                  for (; 0 < t - C; ) (s = rg(s)), t--;
                  for (; 0 < C - t; ) (d = rg(d)), C--;
                  for (; t--; ) {
                    if (s === d || (d !== null && s === d.alternate)) break B;
                    (s = rg(s)), (d = rg(d));
                  }
                  s = null;
                }
              else s = null;
              u !== null && Zn(b, o, u, s, !1),
                r !== null && H !== null && Zn(b, H, r, s, !0);
            }
          }
          A: {
            if (
              ((o = Q ? sg(Q) : window),
              (u = o.nodeName && o.nodeName.toLowerCase()),
              u === "select" || (u === "input" && o.type === "file"))
            )
              var M = aC;
            else if (Pa(o))
              if (qa) M = dC;
              else {
                M = QC;
                var N = nC;
              }
            else
              (u = o.nodeName) &&
                u.toLowerCase() === "input" &&
                (o.type === "checkbox" || o.type === "radio") &&
                (M = tC);
            if (M && (M = M(A, Q))) {
              _a(b, M, g, E);
              break A;
            }
            N && N(A, o, Q),
              A === "focusout" &&
                (N = o._wrapperState) &&
                N.controlled &&
                o.type === "number" &&
                SG(o, "number", o.value);
          }
          switch (((N = Q ? sg(Q) : window), A)) {
            case "focusin":
              (Pa(N) || N.contentEditable === "true") &&
                ((ig = N), (tc = Q), (tI = null));
              break;
            case "focusout":
              tI = tc = ig = null;
              break;
            case "mousedown":
              dc = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              (dc = !1), cn(b, g, E);
              break;
            case "selectionchange":
              if (oC) break;
            case "keydown":
            case "keyup":
              cn(b, g, E);
          }
          var m;
          if (ec)
            A: {
              switch (A) {
                case "compositionstart":
                  var X = "onCompositionStart";
                  break A;
                case "compositionend":
                  X = "onCompositionEnd";
                  break A;
                case "compositionupdate":
                  X = "onCompositionUpdate";
                  break A;
              }
              X = void 0;
            }
          else
            Zg
              ? Ka(A, g) && (X = "onCompositionEnd")
              : A === "keydown" &&
                g.keyCode === 229 &&
                (X = "onCompositionStart");
          X &&
            (La &&
              g.locale !== "ko" &&
              (Zg || X !== "onCompositionStart"
                ? X === "onCompositionEnd" && Zg && (m = ka())
                : ((sB = E),
                  (Bc = "value" in sB ? sB.value : sB.textContent),
                  (Zg = !0))),
            (N = Ql(Q, X)),
            0 < N.length &&
              ((X = new ja(X, A, null, g, E)),
              b.push({ event: X, listeners: N }),
              m ? (X.data = m) : ((m = Oa(g)), m !== null && (X.data = m)))),
            (m = IC ? lC(A, g) : GC(A, g)) &&
              ((Q = Ql(Q, "onBeforeInput")),
              0 < Q.length &&
                ((E = new ja("onBeforeInput", "beforeinput", null, g, E)),
                b.push({ event: E, listeners: Q }),
                (E.data = m)));
        }
        on(b, B);
      });
    }
    function bI(A, B, g) {
      return { instance: A, listener: B, currentTarget: g };
    }
    function Ql(A, B) {
      for (var g = B + "Capture", I = []; A !== null; ) {
        var l = A,
          G = l.stateNode;
        l.tag === 5 &&
          G !== null &&
          ((l = G),
          (G = Og(A, g)),
          G != null && I.unshift(bI(A, G, l)),
          (G = Og(A, B)),
          G != null && I.push(bI(A, G, l))),
          (A = A.return);
      }
      return I;
    }
    function rg(A) {
      if (A === null) return null;
      do A = A.return;
      while (A && A.tag !== 5);
      return A || null;
    }
    function Zn(A, B, g, I, l) {
      for (var G = B._reactName, c = []; g !== null && g !== I; ) {
        var e = g,
          a = e.alternate,
          Q = e.stateNode;
        if (a !== null && a === I) break;
        e.tag === 5 &&
          Q !== null &&
          ((e = Q),
          l
            ? ((a = Og(g, G)), a != null && c.unshift(bI(g, a, e)))
            : l || ((a = Og(g, G)), a != null && c.push(bI(g, a, e)))),
          (g = g.return);
      }
      c.length !== 0 && A.push({ event: B, listeners: c });
    }
    var uC = /\r\n?/g,
      rC = /\u0000|\uFFFD/g;
    function un(A) {
      return (typeof A == "string" ? A : "" + A)
        .replace(
          uC,
          `
`
        )
        .replace(rC, "");
    }
    function tl(A, B, g) {
      if (((B = un(B)), un(A) !== B && g)) throw Error(Y(425));
    }
    function dl() {}
    var ic = null,
      uc = null;
    function rc(A, B) {
      return (
        A === "textarea" ||
        A === "noscript" ||
        typeof B.children == "string" ||
        typeof B.children == "number" ||
        (typeof B.dangerouslySetInnerHTML == "object" &&
          B.dangerouslySetInnerHTML !== null &&
          B.dangerouslySetInnerHTML.__html != null)
      );
    }
    var wc = typeof setTimeout == "function" ? setTimeout : void 0,
      wC = typeof clearTimeout == "function" ? clearTimeout : void 0,
      rn = typeof Promise == "function" ? Promise : void 0,
      sC =
        typeof queueMicrotask == "function"
          ? queueMicrotask
          : typeof rn < "u"
          ? function (A) {
              return rn.resolve(null).then(A).catch(hC);
            }
          : wc;
    function hC(A) {
      setTimeout(function () {
        throw A;
      });
    }
    function sc(A, B) {
      var g = B,
        I = 0;
      do {
        var l = g.nextSibling;
        if ((A.removeChild(g), l && l.nodeType === 8))
          if (((g = l.data), g === "/$")) {
            if (I === 0) {
              A.removeChild(l), lI(B);
              return;
            }
            I--;
          } else (g !== "$" && g !== "$?" && g !== "$!") || I++;
        g = l;
      } while (g);
      lI(B);
    }
    function YB(A) {
      for (; A != null; A = A.nextSibling) {
        var B = A.nodeType;
        if (B === 1 || B === 3) break;
        if (B === 8) {
          if (((B = A.data), B === "$" || B === "$!" || B === "$?")) break;
          if (B === "/$") return null;
        }
      }
      return A;
    }
    function wn(A) {
      A = A.previousSibling;
      for (var B = 0; A; ) {
        if (A.nodeType === 8) {
          var g = A.data;
          if (g === "$" || g === "$!" || g === "$?") {
            if (B === 0) return A;
            B--;
          } else g === "/$" && B++;
        }
        A = A.previousSibling;
      }
      return null;
    }
    var wg = Math.random().toString(36).slice(2),
      $A = "__reactFiber$" + wg,
      oI = "__reactProps$" + wg,
      GB = "__reactContainer$" + wg,
      hc = "__reactEvents$" + wg,
      YC = "__reactListeners$" + wg,
      MC = "__reactHandles$" + wg;
    function jB(A) {
      var B = A[$A];
      if (B) return B;
      for (var g = A.parentNode; g; ) {
        if ((B = g[GB] || g[$A])) {
          if (
            ((g = B.alternate),
            B.child !== null || (g !== null && g.child !== null))
          )
            for (A = wn(A); A !== null; ) {
              if ((g = A[$A])) return g;
              A = wn(A);
            }
          return B;
        }
        (A = g), (g = A.parentNode);
      }
      return null;
    }
    function EI(A) {
      return (
        (A = A[$A] || A[GB]),
        !A || (A.tag !== 5 && A.tag !== 6 && A.tag !== 13 && A.tag !== 3)
          ? null
          : A
      );
    }
    function sg(A) {
      if (A.tag === 5 || A.tag === 6) return A.stateNode;
      throw Error(Y(33));
    }
    function Cl(A) {
      return A[oI] || null;
    }
    var Yc = [],
      hg = -1;
    function MB(A) {
      return { current: A };
    }
    function L(A) {
      0 > hg || ((A.current = Yc[hg]), (Yc[hg] = null), hg--);
    }
    function U(A, B) {
      hg++, (Yc[hg] = A.current), (A.current = B);
    }
    var WB = {},
      nA = MB(WB),
      sA = MB(!1),
      xB = WB;
    function Yg(A, B) {
      var g = A.type.contextTypes;
      if (!g) return WB;
      var I = A.stateNode;
      if (I && I.__reactInternalMemoizedUnmaskedChildContext === B)
        return I.__reactInternalMemoizedMaskedChildContext;
      var l = {},
        G;
      for (G in g) l[G] = B[G];
      return (
        I &&
          ((A = A.stateNode),
          (A.__reactInternalMemoizedUnmaskedChildContext = B),
          (A.__reactInternalMemoizedMaskedChildContext = l)),
        l
      );
    }
    function hA(A) {
      return (A = A.childContextTypes), A != null;
    }
    function bl() {
      L(sA), L(nA);
    }
    function sn(A, B, g) {
      if (nA.current !== WB) throw Error(Y(168));
      U(nA, B), U(sA, g);
    }
    function hn(A, B, g) {
      var I = A.stateNode;
      if (((B = B.childContextTypes), typeof I.getChildContext != "function"))
        return g;
      I = I.getChildContext();
      for (var l in I)
        if (!(l in B)) throw Error(Y(108, nd(A) || "Unknown", l));
      return T({}, g, I);
    }
    function ol(A) {
      return (
        (A =
          ((A = A.stateNode) && A.__reactInternalMemoizedMergedChildContext) ||
          WB),
        (xB = nA.current),
        U(nA, A),
        U(sA, sA.current),
        !0
      );
    }
    function Yn(A, B, g) {
      var I = A.stateNode;
      if (!I) throw Error(Y(169));
      g
        ? ((A = hn(A, B, xB)),
          (I.__reactInternalMemoizedMergedChildContext = A),
          L(sA),
          L(nA),
          U(nA, A))
        : L(sA),
        U(sA, g);
    }
    var cB = null,
      El = !1,
      Mc = !1;
    function Mn(A) {
      cB === null ? (cB = [A]) : cB.push(A);
    }
    function WC(A) {
      (El = !0), Mn(A);
    }
    function mB() {
      if (!Mc && cB !== null) {
        Mc = !0;
        var A = 0,
          B = k;
        try {
          var g = cB;
          for (k = 1; A < g.length; A++) {
            var I = g[A];
            do I = I(!0);
            while (I !== null);
          }
          (cB = null), (El = !1);
        } catch (l) {
          throw (cB !== null && (cB = cB.slice(A + 1)), Wa(TG, mB), l);
        } finally {
          (k = B), (Mc = !1);
        }
      }
      return null;
    }
    var Mg = [],
      Wg = 0,
      Zl = null,
      il = 0,
      zA = [],
      vA = 0,
      LB = null,
      eB = 1,
      aB = "";
    function fB(A, B) {
      (Mg[Wg++] = il), (Mg[Wg++] = Zl), (Zl = A), (il = B);
    }
    function Wn(A, B, g) {
      (zA[vA++] = eB), (zA[vA++] = aB), (zA[vA++] = LB), (LB = A);
      var I = eB;
      A = aB;
      var l = 32 - xA(I) - 1;
      (I &= ~(1 << l)), (g += 1);
      var G = 32 - xA(B) + l;
      if (30 < G) {
        var c = l - (l % 5);
        (G = (I & ((1 << c) - 1)).toString(32)),
          (I >>= c),
          (l -= c),
          (eB = (1 << (32 - xA(B) + l)) | (g << l) | I),
          (aB = G + A);
      } else (eB = (1 << G) | (g << l) | I), (aB = A);
    }
    function Wc(A) {
      A.return !== null && (fB(A, 1), Wn(A, 1, 0));
    }
    function mc(A) {
      for (; A === Zl; )
        (Zl = Mg[--Wg]), (Mg[Wg] = null), (il = Mg[--Wg]), (Mg[Wg] = null);
      for (; A === LB; )
        (LB = zA[--vA]),
          (zA[vA] = null),
          (aB = zA[--vA]),
          (zA[vA] = null),
          (eB = zA[--vA]),
          (zA[vA] = null);
    }
    var DA = null,
      HA = null,
      f = !1,
      fA = null;
    function mn(A, B) {
      var g = jA(5, null, null, 0);
      (g.elementType = "DELETED"),
        (g.stateNode = B),
        (g.return = A),
        (B = A.deletions),
        B === null ? ((A.deletions = [g]), (A.flags |= 16)) : B.push(g);
    }
    function yn(A, B) {
      switch (A.tag) {
        case 5:
          var g = A.type;
          return (
            (B =
              B.nodeType !== 1 || g.toLowerCase() !== B.nodeName.toLowerCase()
                ? null
                : B),
            B !== null
              ? ((A.stateNode = B), (DA = A), (HA = YB(B.firstChild)), !0)
              : !1
          );
        case 6:
          return (
            (B = A.pendingProps === "" || B.nodeType !== 3 ? null : B),
            B !== null ? ((A.stateNode = B), (DA = A), (HA = null), !0) : !1
          );
        case 13:
          return (
            (B = B.nodeType !== 8 ? null : B),
            B !== null
              ? ((g = LB !== null ? { id: eB, overflow: aB } : null),
                (A.memoizedState = {
                  dehydrated: B,
                  treeContext: g,
                  retryLane: 1073741824,
                }),
                (g = jA(18, null, null, 0)),
                (g.stateNode = B),
                (g.return = A),
                (A.child = g),
                (DA = A),
                (HA = null),
                !0)
              : !1
          );
        default:
          return !1;
      }
    }
    function yc(A) {
      return (A.mode & 1) !== 0 && (A.flags & 128) === 0;
    }
    function Nc(A) {
      if (f) {
        var B = HA;
        if (B) {
          var g = B;
          if (!yn(A, B)) {
            if (yc(A)) throw Error(Y(418));
            B = YB(g.nextSibling);
            var I = DA;
            B && yn(A, B)
              ? mn(I, g)
              : ((A.flags = (A.flags & -4097) | 2), (f = !1), (DA = A));
          }
        } else {
          if (yc(A)) throw Error(Y(418));
          (A.flags = (A.flags & -4097) | 2), (f = !1), (DA = A);
        }
      }
    }
    function Nn(A) {
      for (
        A = A.return;
        A !== null && A.tag !== 5 && A.tag !== 3 && A.tag !== 13;

      )
        A = A.return;
      DA = A;
    }
    function ul(A) {
      if (A !== DA) return !1;
      if (!f) return Nn(A), (f = !0), !1;
      var B;
      if (
        ((B = A.tag !== 3) &&
          !(B = A.tag !== 5) &&
          ((B = A.type),
          (B = B !== "head" && B !== "body" && !rc(A.type, A.memoizedProps))),
        B && (B = HA))
      ) {
        if (yc(A)) throw (pn(), Error(Y(418)));
        for (; B; ) mn(A, B), (B = YB(B.nextSibling));
      }
      if ((Nn(A), A.tag === 13)) {
        if (((A = A.memoizedState), (A = A !== null ? A.dehydrated : null), !A))
          throw Error(Y(317));
        A: {
          for (A = A.nextSibling, B = 0; A; ) {
            if (A.nodeType === 8) {
              var g = A.data;
              if (g === "/$") {
                if (B === 0) {
                  HA = YB(A.nextSibling);
                  break A;
                }
                B--;
              } else (g !== "$" && g !== "$!" && g !== "$?") || B++;
            }
            A = A.nextSibling;
          }
          HA = null;
        }
      } else HA = DA ? YB(A.stateNode.nextSibling) : null;
      return !0;
    }
    function pn() {
      for (var A = HA; A; ) A = YB(A.nextSibling);
    }
    function mg() {
      (HA = DA = null), (f = !1);
    }
    function pc(A) {
      fA === null ? (fA = [A]) : fA.push(A);
    }
    var mC = lB.ReactCurrentBatchConfig;
    function TA(A, B) {
      if (A && A.defaultProps) {
        (B = T({}, B)), (A = A.defaultProps);
        for (var g in A) B[g] === void 0 && (B[g] = A[g]);
        return B;
      }
      return B;
    }
    var rl = MB(null),
      wl = null,
      yg = null,
      Fc = null;
    function Dc() {
      Fc = yg = wl = null;
    }
    function Hc(A) {
      var B = rl.current;
      L(rl), (A._currentValue = B);
    }
    function Xc(A, B, g) {
      for (; A !== null; ) {
        var I = A.alternate;
        if (
          ((A.childLanes & B) !== B
            ? ((A.childLanes |= B), I !== null && (I.childLanes |= B))
            : I !== null && (I.childLanes & B) !== B && (I.childLanes |= B),
          A === g)
        )
          break;
        A = A.return;
      }
    }
    function Ng(A, B) {
      (wl = A),
        (Fc = yg = null),
        (A = A.dependencies),
        A !== null &&
          A.firstContext !== null &&
          (A.lanes & B && (YA = !0), (A.firstContext = null));
    }
    function kA(A) {
      var B = A._currentValue;
      if (Fc !== A)
        if (((A = { context: A, memoizedValue: B, next: null }), yg === null)) {
          if (wl === null) throw Error(Y(308));
          (yg = A), (wl.dependencies = { lanes: 0, firstContext: A });
        } else yg = yg.next = A;
      return B;
    }
    var TB = null;
    function Rc(A) {
      TB === null ? (TB = [A]) : TB.push(A);
    }
    function Fn(A, B, g, I) {
      var l = B.interleaved;
      return (
        l === null ? ((g.next = g), Rc(B)) : ((g.next = l.next), (l.next = g)),
        (B.interleaved = g),
        nB(A, I)
      );
    }
    function nB(A, B) {
      A.lanes |= B;
      var g = A.alternate;
      for (g !== null && (g.lanes |= B), g = A, A = A.return; A !== null; )
        (A.childLanes |= B),
          (g = A.alternate),
          g !== null && (g.childLanes |= B),
          (g = A),
          (A = A.return);
      return g.tag === 3 ? g.stateNode : null;
    }
    var yB = !1;
    function Sc(A) {
      A.updateQueue = {
        baseState: A.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
      };
    }
    function Dn(A, B) {
      (A = A.updateQueue),
        B.updateQueue === A &&
          (B.updateQueue = {
            baseState: A.baseState,
            firstBaseUpdate: A.firstBaseUpdate,
            lastBaseUpdate: A.lastBaseUpdate,
            shared: A.shared,
            effects: A.effects,
          });
    }
    function QB(A, B) {
      return {
        eventTime: A,
        lane: B,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
      };
    }
    function NB(A, B, g) {
      var I = A.updateQueue;
      if (I === null) return null;
      if (((I = I.shared), v & 2)) {
        var l = I.pending;
        return (
          l === null ? (B.next = B) : ((B.next = l.next), (l.next = B)),
          (I.pending = B),
          nB(A, g)
        );
      }
      return (
        (l = I.interleaved),
        l === null ? ((B.next = B), Rc(I)) : ((B.next = l.next), (l.next = B)),
        (I.interleaved = B),
        nB(A, g)
      );
    }
    function sl(A, B, g) {
      if (
        ((B = B.updateQueue),
        B !== null && ((B = B.shared), (g & 4194240) !== 0))
      ) {
        var I = B.lanes;
        (I &= A.pendingLanes), (g |= I), (B.lanes = g), PG(A, g);
      }
    }
    function Hn(A, B) {
      var g = A.updateQueue,
        I = A.alternate;
      if (I !== null && ((I = I.updateQueue), g === I)) {
        var l = null,
          G = null;
        if (((g = g.firstBaseUpdate), g !== null)) {
          do {
            var c = {
              eventTime: g.eventTime,
              lane: g.lane,
              tag: g.tag,
              payload: g.payload,
              callback: g.callback,
              next: null,
            };
            G === null ? (l = G = c) : (G = G.next = c), (g = g.next);
          } while (g !== null);
          G === null ? (l = G = B) : (G = G.next = B);
        } else l = G = B;
        (g = {
          baseState: I.baseState,
          firstBaseUpdate: l,
          lastBaseUpdate: G,
          shared: I.shared,
          effects: I.effects,
        }),
          (A.updateQueue = g);
        return;
      }
      (A = g.lastBaseUpdate),
        A === null ? (g.firstBaseUpdate = B) : (A.next = B),
        (g.lastBaseUpdate = B);
    }
    function hl(A, B, g, I) {
      var l = A.updateQueue;
      yB = !1;
      var G = l.firstBaseUpdate,
        c = l.lastBaseUpdate,
        e = l.shared.pending;
      if (e !== null) {
        l.shared.pending = null;
        var a = e,
          Q = a.next;
        (a.next = null), c === null ? (G = Q) : (c.next = Q), (c = a);
        var E = A.alternate;
        E !== null &&
          ((E = E.updateQueue),
          (e = E.lastBaseUpdate),
          e !== c &&
            (e === null ? (E.firstBaseUpdate = Q) : (e.next = Q),
            (E.lastBaseUpdate = a)));
      }
      if (G !== null) {
        var b = l.baseState;
        (c = 0), (E = Q = a = null), (e = G);
        do {
          var o = e.lane,
            u = e.eventTime;
          if ((I & o) === o) {
            E !== null &&
              (E = E.next =
                {
                  eventTime: u,
                  lane: 0,
                  tag: e.tag,
                  payload: e.payload,
                  callback: e.callback,
                  next: null,
                });
            A: {
              var r = A,
                s = e;
              switch (((o = B), (u = g), s.tag)) {
                case 1:
                  if (((r = s.payload), typeof r == "function")) {
                    b = r.call(u, b, o);
                    break A;
                  }
                  b = r;
                  break A;
                case 3:
                  r.flags = (r.flags & -65537) | 128;
                case 0:
                  if (
                    ((r = s.payload),
                    (o = typeof r == "function" ? r.call(u, b, o) : r),
                    o == null)
                  )
                    break A;
                  b = T({}, b, o);
                  break A;
                case 2:
                  yB = !0;
              }
            }
            e.callback !== null &&
              e.lane !== 0 &&
              ((A.flags |= 64),
              (o = l.effects),
              o === null ? (l.effects = [e]) : o.push(e));
          } else
            (u = {
              eventTime: u,
              lane: o,
              tag: e.tag,
              payload: e.payload,
              callback: e.callback,
              next: null,
            }),
              E === null ? ((Q = E = u), (a = b)) : (E = E.next = u),
              (c |= o);
          if (((e = e.next), e === null)) {
            if (((e = l.shared.pending), e === null)) break;
            (o = e),
              (e = o.next),
              (o.next = null),
              (l.lastBaseUpdate = o),
              (l.shared.pending = null);
          }
        } while (1);
        if (
          (E === null && (a = b),
          (l.baseState = a),
          (l.firstBaseUpdate = Q),
          (l.lastBaseUpdate = E),
          (B = l.shared.interleaved),
          B !== null)
        ) {
          l = B;
          do (c |= l.lane), (l = l.next);
          while (l !== B);
        } else G === null && (l.shared.lanes = 0);
        (PB |= c), (A.lanes = c), (A.memoizedState = b);
      }
    }
    function Xn(A, B, g) {
      if (((A = B.effects), (B.effects = null), A !== null))
        for (B = 0; B < A.length; B++) {
          var I = A[B],
            l = I.callback;
          if (l !== null) {
            if (((I.callback = null), (I = g), typeof l != "function"))
              throw Error(Y(191, l));
            l.call(I);
          }
        }
    }
    var Rn = new Pe.Component().refs;
    function Vc(A, B, g, I) {
      (B = A.memoizedState),
        (g = g(I, B)),
        (g = g == null ? B : T({}, B, g)),
        (A.memoizedState = g),
        A.lanes === 0 && (A.updateQueue.baseState = g);
    }
    var Yl = {
      isMounted: function (A) {
        return (A = A._reactInternals) ? UB(A) === A : !1;
      },
      enqueueSetState: function (A, B, g) {
        A = A._reactInternals;
        var I = ZA(),
          l = HB(A),
          G = QB(I, l);
        (G.payload = B),
          g != null && (G.callback = g),
          (B = NB(A, G, l)),
          B !== null && (PA(B, A, l, I), sl(B, A, l));
      },
      enqueueReplaceState: function (A, B, g) {
        A = A._reactInternals;
        var I = ZA(),
          l = HB(A),
          G = QB(I, l);
        (G.tag = 1),
          (G.payload = B),
          g != null && (G.callback = g),
          (B = NB(A, G, l)),
          B !== null && (PA(B, A, l, I), sl(B, A, l));
      },
      enqueueForceUpdate: function (A, B) {
        A = A._reactInternals;
        var g = ZA(),
          I = HB(A),
          l = QB(g, I);
        (l.tag = 2),
          B != null && (l.callback = B),
          (B = NB(A, l, I)),
          B !== null && (PA(B, A, I, g), sl(B, A, I));
      },
    };
    function Sn(A, B, g, I, l, G, c) {
      return (
        (A = A.stateNode),
        typeof A.shouldComponentUpdate == "function"
          ? A.shouldComponentUpdate(I, G, c)
          : B.prototype && B.prototype.isPureReactComponent
          ? !QI(g, I) || !QI(l, G)
          : !0
      );
    }
    function Vn(A, B, g) {
      var I = !1,
        l = WB,
        G = B.contextType;
      return (
        typeof G == "object" && G !== null
          ? (G = kA(G))
          : ((l = hA(B) ? xB : nA.current),
            (I = B.contextTypes),
            (G = (I = I != null) ? Yg(A, l) : WB)),
        (B = new B(g, G)),
        (A.memoizedState =
          B.state !== null && B.state !== void 0 ? B.state : null),
        (B.updater = Yl),
        (A.stateNode = B),
        (B._reactInternals = A),
        I &&
          ((A = A.stateNode),
          (A.__reactInternalMemoizedUnmaskedChildContext = l),
          (A.__reactInternalMemoizedMaskedChildContext = G)),
        B
      );
    }
    function zn(A, B, g, I) {
      (A = B.state),
        typeof B.componentWillReceiveProps == "function" &&
          B.componentWillReceiveProps(g, I),
        typeof B.UNSAFE_componentWillReceiveProps == "function" &&
          B.UNSAFE_componentWillReceiveProps(g, I),
        B.state !== A && Yl.enqueueReplaceState(B, B.state, null);
    }
    function zc(A, B, g, I) {
      var l = A.stateNode;
      (l.props = g), (l.state = A.memoizedState), (l.refs = Rn), Sc(A);
      var G = B.contextType;
      typeof G == "object" && G !== null
        ? (l.context = kA(G))
        : ((G = hA(B) ? xB : nA.current), (l.context = Yg(A, G))),
        (l.state = A.memoizedState),
        (G = B.getDerivedStateFromProps),
        typeof G == "function" && (Vc(A, B, G, g), (l.state = A.memoizedState)),
        typeof B.getDerivedStateFromProps == "function" ||
          typeof l.getSnapshotBeforeUpdate == "function" ||
          (typeof l.UNSAFE_componentWillMount != "function" &&
            typeof l.componentWillMount != "function") ||
          ((B = l.state),
          typeof l.componentWillMount == "function" && l.componentWillMount(),
          typeof l.UNSAFE_componentWillMount == "function" &&
            l.UNSAFE_componentWillMount(),
          B !== l.state && Yl.enqueueReplaceState(l, l.state, null),
          hl(A, g, l, I),
          (l.state = A.memoizedState)),
        typeof l.componentDidMount == "function" && (A.flags |= 4194308);
    }
    function ZI(A, B, g) {
      if (
        ((A = g.ref),
        A !== null && typeof A != "function" && typeof A != "object")
      ) {
        if (g._owner) {
          if (((g = g._owner), g)) {
            if (g.tag !== 1) throw Error(Y(309));
            var I = g.stateNode;
          }
          if (!I) throw Error(Y(147, A));
          var l = I,
            G = "" + A;
          return B !== null &&
            B.ref !== null &&
            typeof B.ref == "function" &&
            B.ref._stringRef === G
            ? B.ref
            : ((B = function (c) {
                var e = l.refs;
                e === Rn && (e = l.refs = {}),
                  c === null ? delete e[G] : (e[G] = c);
              }),
              (B._stringRef = G),
              B);
        }
        if (typeof A != "string") throw Error(Y(284));
        if (!g._owner) throw Error(Y(290, A));
      }
      return A;
    }
    function Ml(A, B) {
      throw (
        ((A = Object.prototype.toString.call(B)),
        Error(
          Y(
            31,
            A === "[object Object]"
              ? "object with keys {" + Object.keys(B).join(", ") + "}"
              : A
          )
        ))
      );
    }
    function vn(A) {
      var B = A._init;
      return B(A._payload);
    }
    function kn(A) {
      function B(d, t) {
        if (A) {
          var C = d.deletions;
          C === null ? ((d.deletions = [t]), (d.flags |= 16)) : C.push(t);
        }
      }
      function g(d, t) {
        if (!A) return null;
        for (; t !== null; ) B(d, t), (t = t.sibling);
        return null;
      }
      function I(d, t) {
        for (d = new Map(); t !== null; )
          t.key !== null ? d.set(t.key, t) : d.set(t.index, t), (t = t.sibling);
        return d;
      }
      function l(d, t) {
        return (d = RB(d, t)), (d.index = 0), (d.sibling = null), d;
      }
      function G(d, t, C) {
        return (
          (d.index = C),
          A
            ? ((C = d.alternate),
              C !== null
                ? ((C = C.index), C < t ? ((d.flags |= 2), t) : C)
                : ((d.flags |= 2), t))
            : ((d.flags |= 1048576), t)
        );
      }
      function c(d) {
        return A && d.alternate === null && (d.flags |= 2), d;
      }
      function e(d, t, C, w) {
        return t === null || t.tag !== 6
          ? ((t = re(C, d.mode, w)), (t.return = d), t)
          : ((t = l(t, C)), (t.return = d), t);
      }
      function a(d, t, C, w) {
        var M = C.type;
        return M === tg
          ? E(d, t, C.props.children, w, C.key)
          : t !== null &&
            (t.elementType === M ||
              (typeof M == "object" &&
                M !== null &&
                M.$$typeof === EB &&
                vn(M) === t.type))
          ? ((w = l(t, C.props)), (w.ref = ZI(d, t, C)), (w.return = d), w)
          : ((w = xl(C.type, C.key, C.props, null, d.mode, w)),
            (w.ref = ZI(d, t, C)),
            (w.return = d),
            w);
      }
      function Q(d, t, C, w) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== C.containerInfo ||
          t.stateNode.implementation !== C.implementation
          ? ((t = we(C, d.mode, w)), (t.return = d), t)
          : ((t = l(t, C.children || [])), (t.return = d), t);
      }
      function E(d, t, C, w, M) {
        return t === null || t.tag !== 7
          ? ((t = Ag(C, d.mode, w, M)), (t.return = d), t)
          : ((t = l(t, C)), (t.return = d), t);
      }
      function b(d, t, C) {
        if ((typeof t == "string" && t !== "") || typeof t == "number")
          return (t = re("" + t, d.mode, C)), (t.return = d), t;
        if (typeof t == "object" && t !== null) {
          switch (t.$$typeof) {
            case JI:
              return (
                (C = xl(t.type, t.key, t.props, null, d.mode, C)),
                (C.ref = ZI(d, null, t)),
                (C.return = d),
                C
              );
            case Qg:
              return (t = we(t, d.mode, C)), (t.return = d), t;
            case EB:
              var w = t._init;
              return b(d, w(t._payload), C);
          }
          if (fg(t) || xg(t))
            return (t = Ag(t, d.mode, C, null)), (t.return = d), t;
          Ml(d, t);
        }
        return null;
      }
      function o(d, t, C, w) {
        var M = t !== null ? t.key : null;
        if ((typeof C == "string" && C !== "") || typeof C == "number")
          return M !== null ? null : e(d, t, "" + C, w);
        if (typeof C == "object" && C !== null) {
          switch (C.$$typeof) {
            case JI:
              return C.key === M ? a(d, t, C, w) : null;
            case Qg:
              return C.key === M ? Q(d, t, C, w) : null;
            case EB:
              return (M = C._init), o(d, t, M(C._payload), w);
          }
          if (fg(C) || xg(C)) return M !== null ? null : E(d, t, C, w, null);
          Ml(d, C);
        }
        return null;
      }
      function u(d, t, C, w, M) {
        if ((typeof w == "string" && w !== "") || typeof w == "number")
          return (d = d.get(C) || null), e(t, d, "" + w, M);
        if (typeof w == "object" && w !== null) {
          switch (w.$$typeof) {
            case JI:
              return (
                (d = d.get(w.key === null ? C : w.key) || null), a(t, d, w, M)
              );
            case Qg:
              return (
                (d = d.get(w.key === null ? C : w.key) || null), Q(t, d, w, M)
              );
            case EB:
              var N = w._init;
              return u(d, t, C, N(w._payload), M);
          }
          if (fg(w) || xg(w))
            return (d = d.get(C) || null), E(t, d, w, M, null);
          Ml(t, w);
        }
        return null;
      }
      function r(d, t, C, w) {
        for (
          var M = null, N = null, m = t, X = (t = 0), j = null;
          m !== null && X < C.length;
          X++
        ) {
          m.index > X ? ((j = m), (m = null)) : (j = m.sibling);
          var V = o(d, m, C[X], w);
          if (V === null) {
            m === null && (m = j);
            break;
          }
          A && m && V.alternate === null && B(d, m),
            (t = G(V, t, X)),
            N === null ? (M = V) : (N.sibling = V),
            (N = V),
            (m = j);
        }
        if (X === C.length) return g(d, m), f && fB(d, X), M;
        if (m === null) {
          for (; X < C.length; X++)
            (m = b(d, C[X], w)),
              m !== null &&
                ((t = G(m, t, X)),
                N === null ? (M = m) : (N.sibling = m),
                (N = m));
          return f && fB(d, X), M;
        }
        for (m = I(d, m); X < C.length; X++)
          (j = u(m, d, X, C[X], w)),
            j !== null &&
              (A &&
                j.alternate !== null &&
                m.delete(j.key === null ? X : j.key),
              (t = G(j, t, X)),
              N === null ? (M = j) : (N.sibling = j),
              (N = j));
        return (
          A &&
            m.forEach(function (rA) {
              return B(d, rA);
            }),
          f && fB(d, X),
          M
        );
      }
      function s(d, t, C, w) {
        var M = xg(C);
        if (typeof M != "function") throw Error(Y(150));
        if (((C = M.call(C)), C == null)) throw Error(Y(151));
        for (
          var N = (M = null), m = t, X = (t = 0), j = null, V = C.next();
          m !== null && !V.done;
          X++, V = C.next()
        ) {
          m.index > X ? ((j = m), (m = null)) : (j = m.sibling);
          var rA = o(d, m, V.value, w);
          if (rA === null) {
            m === null && (m = j);
            break;
          }
          A && m && rA.alternate === null && B(d, m),
            (t = G(rA, t, X)),
            N === null ? (M = rA) : (N.sibling = rA),
            (N = rA),
            (m = j);
        }
        if (V.done) return g(d, m), f && fB(d, X), M;
        if (m === null) {
          for (; !V.done; X++, V = C.next())
            (V = b(d, V.value, w)),
              V !== null &&
                ((t = G(V, t, X)),
                N === null ? (M = V) : (N.sibling = V),
                (N = V));
          return f && fB(d, X), M;
        }
        for (m = I(d, m); !V.done; X++, V = C.next())
          (V = u(m, d, X, V.value, w)),
            V !== null &&
              (A &&
                V.alternate !== null &&
                m.delete(V.key === null ? X : V.key),
              (t = G(V, t, X)),
              N === null ? (M = V) : (N.sibling = V),
              (N = V));
        return (
          A &&
            m.forEach(function (oB) {
              return B(d, oB);
            }),
          f && fB(d, X),
          M
        );
      }
      function H(d, t, C, w) {
        if (
          (typeof C == "object" &&
            C !== null &&
            C.type === tg &&
            C.key === null &&
            (C = C.props.children),
          typeof C == "object" && C !== null)
        ) {
          switch (C.$$typeof) {
            case JI:
              A: {
                for (var M = C.key, N = t; N !== null; ) {
                  if (N.key === M) {
                    if (((M = C.type), M === tg)) {
                      if (N.tag === 7) {
                        g(d, N.sibling),
                          (t = l(N, C.props.children)),
                          (t.return = d),
                          (d = t);
                        break A;
                      }
                    } else if (
                      N.elementType === M ||
                      (typeof M == "object" &&
                        M !== null &&
                        M.$$typeof === EB &&
                        vn(M) === N.type)
                    ) {
                      g(d, N.sibling),
                        (t = l(N, C.props)),
                        (t.ref = ZI(d, N, C)),
                        (t.return = d),
                        (d = t);
                      break A;
                    }
                    g(d, N);
                    break;
                  } else B(d, N);
                  N = N.sibling;
                }
                C.type === tg
                  ? ((t = Ag(C.props.children, d.mode, w, C.key)),
                    (t.return = d),
                    (d = t))
                  : ((w = xl(C.type, C.key, C.props, null, d.mode, w)),
                    (w.ref = ZI(d, t, C)),
                    (w.return = d),
                    (d = w));
              }
              return c(d);
            case Qg:
              A: {
                for (N = C.key; t !== null; ) {
                  if (t.key === N)
                    if (
                      t.tag === 4 &&
                      t.stateNode.containerInfo === C.containerInfo &&
                      t.stateNode.implementation === C.implementation
                    ) {
                      g(d, t.sibling),
                        (t = l(t, C.children || [])),
                        (t.return = d),
                        (d = t);
                      break A;
                    } else {
                      g(d, t);
                      break;
                    }
                  else B(d, t);
                  t = t.sibling;
                }
                (t = we(C, d.mode, w)), (t.return = d), (d = t);
              }
              return c(d);
            case EB:
              return (N = C._init), H(d, t, N(C._payload), w);
          }
          if (fg(C)) return r(d, t, C, w);
          if (xg(C)) return s(d, t, C, w);
          Ml(d, C);
        }
        return (typeof C == "string" && C !== "") || typeof C == "number"
          ? ((C = "" + C),
            t !== null && t.tag === 6
              ? (g(d, t.sibling), (t = l(t, C)), (t.return = d), (d = t))
              : (g(d, t), (t = re(C, d.mode, w)), (t.return = d), (d = t)),
            c(d))
          : g(d, t);
      }
      return H;
    }
    var pg = kn(!0),
      Jn = kn(!1),
      iI = {},
      AB = MB(iI),
      uI = MB(iI),
      rI = MB(iI);
    function KB(A) {
      if (A === iI) throw Error(Y(174));
      return A;
    }
    function vc(A, B) {
      switch ((U(rI, B), U(uI, A), U(AB, iI), (A = B.nodeType), A)) {
        case 9:
        case 11:
          B = (B = B.documentElement) ? B.namespaceURI : zG(null, "");
          break;
        default:
          (A = A === 8 ? B.parentNode : B),
            (B = A.namespaceURI || null),
            (A = A.tagName),
            (B = zG(B, A));
      }
      L(AB), U(AB, B);
    }
    function Fg() {
      L(AB), L(uI), L(rI);
    }
    function Un(A) {
      KB(rI.current);
      var B = KB(AB.current),
        g = zG(B, A.type);
      B !== g && (U(uI, A), U(AB, g));
    }
    function kc(A) {
      uI.current === A && (L(AB), L(uI));
    }
    var K = MB(0);
    function Wl(A) {
      for (var B = A; B !== null; ) {
        if (B.tag === 13) {
          var g = B.memoizedState;
          if (
            g !== null &&
            ((g = g.dehydrated),
            g === null || g.data === "$?" || g.data === "$!")
          )
            return B;
        } else if (B.tag === 19 && B.memoizedProps.revealOrder !== void 0) {
          if (B.flags & 128) return B;
        } else if (B.child !== null) {
          (B.child.return = B), (B = B.child);
          continue;
        }
        if (B === A) break;
        for (; B.sibling === null; ) {
          if (B.return === null || B.return === A) return null;
          B = B.return;
        }
        (B.sibling.return = B.return), (B = B.sibling);
      }
      return null;
    }
    var Jc = [];
    function Uc() {
      for (var A = 0; A < Jc.length; A++)
        Jc[A]._workInProgressVersionPrimary = null;
      Jc.length = 0;
    }
    var ml = lB.ReactCurrentDispatcher,
      jc = lB.ReactCurrentBatchConfig,
      OB = 0,
      O = null,
      gA = null,
      lA = null,
      yl = !1,
      wI = !1,
      sI = 0,
      yC = 0;
    function QA() {
      throw Error(Y(321));
    }
    function xc(A, B) {
      if (B === null) return !1;
      for (var g = 0; g < B.length && g < A.length; g++)
        if (!LA(A[g], B[g])) return !1;
      return !0;
    }
    function Lc(A, B, g, I, l, G) {
      if (
        ((OB = G),
        (O = B),
        (B.memoizedState = null),
        (B.updateQueue = null),
        (B.lanes = 0),
        (ml.current = A === null || A.memoizedState === null ? DC : HC),
        (A = g(I, l)),
        wI)
      ) {
        G = 0;
        do {
          if (((wI = !1), (sI = 0), 25 <= G)) throw Error(Y(301));
          (G += 1),
            (lA = gA = null),
            (B.updateQueue = null),
            (ml.current = XC),
            (A = g(I, l));
        } while (wI);
      }
      if (
        ((ml.current = Fl),
        (B = gA !== null && gA.next !== null),
        (OB = 0),
        (lA = gA = O = null),
        (yl = !1),
        B)
      )
        throw Error(Y(300));
      return A;
    }
    function fc() {
      var A = sI !== 0;
      return (sI = 0), A;
    }
    function BB() {
      var A = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return lA === null ? (O.memoizedState = lA = A) : (lA = lA.next = A), lA;
    }
    function JA() {
      if (gA === null) {
        var A = O.alternate;
        A = A !== null ? A.memoizedState : null;
      } else A = gA.next;
      var B = lA === null ? O.memoizedState : lA.next;
      if (B !== null) (lA = B), (gA = A);
      else {
        if (A === null) throw Error(Y(310));
        (gA = A),
          (A = {
            memoizedState: gA.memoizedState,
            baseState: gA.baseState,
            baseQueue: gA.baseQueue,
            queue: gA.queue,
            next: null,
          }),
          lA === null ? (O.memoizedState = lA = A) : (lA = lA.next = A);
      }
      return lA;
    }
    function hI(A, B) {
      return typeof B == "function" ? B(A) : B;
    }
    function Tc(A) {
      var B = JA(),
        g = B.queue;
      if (g === null) throw Error(Y(311));
      g.lastRenderedReducer = A;
      var I = gA,
        l = I.baseQueue,
        G = g.pending;
      if (G !== null) {
        if (l !== null) {
          var c = l.next;
          (l.next = G.next), (G.next = c);
        }
        (I.baseQueue = l = G), (g.pending = null);
      }
      if (l !== null) {
        (G = l.next), (I = I.baseState);
        var e = (c = null),
          a = null,
          Q = G;
        do {
          var E = Q.lane;
          if ((OB & E) === E)
            a !== null &&
              (a = a.next =
                {
                  lane: 0,
                  action: Q.action,
                  hasEagerState: Q.hasEagerState,
                  eagerState: Q.eagerState,
                  next: null,
                }),
              (I = Q.hasEagerState ? Q.eagerState : A(I, Q.action));
          else {
            var b = {
              lane: E,
              action: Q.action,
              hasEagerState: Q.hasEagerState,
              eagerState: Q.eagerState,
              next: null,
            };
            a === null ? ((e = a = b), (c = I)) : (a = a.next = b),
              (O.lanes |= E),
              (PB |= E);
          }
          Q = Q.next;
        } while (Q !== null && Q !== G);
        a === null ? (c = I) : (a.next = e),
          LA(I, B.memoizedState) || (YA = !0),
          (B.memoizedState = I),
          (B.baseState = c),
          (B.baseQueue = a),
          (g.lastRenderedState = I);
      }
      if (((A = g.interleaved), A !== null)) {
        l = A;
        do (G = l.lane), (O.lanes |= G), (PB |= G), (l = l.next);
        while (l !== A);
      } else l === null && (g.lanes = 0);
      return [B.memoizedState, g.dispatch];
    }
    function Kc(A) {
      var B = JA(),
        g = B.queue;
      if (g === null) throw Error(Y(311));
      g.lastRenderedReducer = A;
      var I = g.dispatch,
        l = g.pending,
        G = B.memoizedState;
      if (l !== null) {
        g.pending = null;
        var c = (l = l.next);
        do (G = A(G, c.action)), (c = c.next);
        while (c !== l);
        LA(G, B.memoizedState) || (YA = !0),
          (B.memoizedState = G),
          B.baseQueue === null && (B.baseState = G),
          (g.lastRenderedState = G);
      }
      return [G, I];
    }
    function jn() {}
    function xn(A, B) {
      var g = O,
        I = JA(),
        l = B(),
        G = !LA(I.memoizedState, l);
      if (
        (G && ((I.memoizedState = l), (YA = !0)),
        (I = I.queue),
        Oc(Tn.bind(null, g, I, A), [A]),
        I.getSnapshot !== B || G || (lA !== null && lA.memoizedState.tag & 1))
      ) {
        if (
          ((g.flags |= 2048),
          YI(9, fn.bind(null, g, I, l, B), void 0, null),
          GA === null)
        )
          throw Error(Y(349));
        OB & 30 || Ln(g, B, l);
      }
      return l;
    }
    function Ln(A, B, g) {
      (A.flags |= 16384),
        (A = { getSnapshot: B, value: g }),
        (B = O.updateQueue),
        B === null
          ? ((B = { lastEffect: null, stores: null }),
            (O.updateQueue = B),
            (B.stores = [A]))
          : ((g = B.stores), g === null ? (B.stores = [A]) : g.push(A));
    }
    function fn(A, B, g, I) {
      (B.value = g), (B.getSnapshot = I), Kn(B) && On(A);
    }
    function Tn(A, B, g) {
      return g(function () {
        Kn(B) && On(A);
      });
    }
    function Kn(A) {
      var B = A.getSnapshot;
      A = A.value;
      try {
        var g = B();
        return !LA(A, g);
      } catch {
        return !0;
      }
    }
    function On(A) {
      var B = nB(A, 1);
      B !== null && PA(B, A, 1, -1);
    }
    function Pn(A) {
      var B = BB();
      return (
        typeof A == "function" && (A = A()),
        (B.memoizedState = B.baseState = A),
        (A = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: hI,
          lastRenderedState: A,
        }),
        (B.queue = A),
        (A = A.dispatch = FC.bind(null, O, A)),
        [B.memoizedState, A]
      );
    }
    function YI(A, B, g, I) {
      return (
        (A = { tag: A, create: B, destroy: g, deps: I, next: null }),
        (B = O.updateQueue),
        B === null
          ? ((B = { lastEffect: null, stores: null }),
            (O.updateQueue = B),
            (B.lastEffect = A.next = A))
          : ((g = B.lastEffect),
            g === null
              ? (B.lastEffect = A.next = A)
              : ((I = g.next), (g.next = A), (A.next = I), (B.lastEffect = A))),
        A
      );
    }
    function _n() {
      return JA().memoizedState;
    }
    function Nl(A, B, g, I) {
      var l = BB();
      (O.flags |= A),
        (l.memoizedState = YI(1 | B, g, void 0, I === void 0 ? null : I));
    }
    function pl(A, B, g, I) {
      var l = JA();
      I = I === void 0 ? null : I;
      var G = void 0;
      if (gA !== null) {
        var c = gA.memoizedState;
        if (((G = c.destroy), I !== null && xc(I, c.deps))) {
          l.memoizedState = YI(B, g, G, I);
          return;
        }
      }
      (O.flags |= A), (l.memoizedState = YI(1 | B, g, G, I));
    }
    function qn(A, B) {
      return Nl(8390656, 8, A, B);
    }
    function Oc(A, B) {
      return pl(2048, 8, A, B);
    }
    function $n(A, B) {
      return pl(4, 2, A, B);
    }
    function AQ(A, B) {
      return pl(4, 4, A, B);
    }
    function BQ(A, B) {
      if (typeof B == "function")
        return (
          (A = A()),
          B(A),
          function () {
            B(null);
          }
        );
      if (B != null)
        return (
          (A = A()),
          (B.current = A),
          function () {
            B.current = null;
          }
        );
    }
    function gQ(A, B, g) {
      return (
        (g = g != null ? g.concat([A]) : null), pl(4, 4, BQ.bind(null, B, A), g)
      );
    }
    function Pc() {}
    function IQ(A, B) {
      var g = JA();
      B = B === void 0 ? null : B;
      var I = g.memoizedState;
      return I !== null && B !== null && xc(B, I[1])
        ? I[0]
        : ((g.memoizedState = [A, B]), A);
    }
    function lQ(A, B) {
      var g = JA();
      B = B === void 0 ? null : B;
      var I = g.memoizedState;
      return I !== null && B !== null && xc(B, I[1])
        ? I[0]
        : ((A = A()), (g.memoizedState = [A, B]), A);
    }
    function GQ(A, B, g) {
      return OB & 21
        ? (LA(g, B) ||
            ((g = pa()), (O.lanes |= g), (PB |= g), (A.baseState = !0)),
          B)
        : (A.baseState && ((A.baseState = !1), (YA = !0)),
          (A.memoizedState = g));
    }
    function NC(A, B) {
      var g = k;
      (k = g !== 0 && 4 > g ? g : 4), A(!0);
      var I = jc.transition;
      jc.transition = {};
      try {
        A(!1), B();
      } finally {
        (k = g), (jc.transition = I);
      }
    }
    function cQ() {
      return JA().memoizedState;
    }
    function pC(A, B, g) {
      var I = HB(A);
      if (
        ((g = {
          lane: I,
          action: g,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        eQ(A))
      )
        aQ(B, g);
      else if (((g = Fn(A, B, g, I)), g !== null)) {
        var l = ZA();
        PA(g, A, I, l), nQ(g, B, I);
      }
    }
    function FC(A, B, g) {
      var I = HB(A),
        l = {
          lane: I,
          action: g,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        };
      if (eQ(A)) aQ(B, l);
      else {
        var G = A.alternate;
        if (
          A.lanes === 0 &&
          (G === null || G.lanes === 0) &&
          ((G = B.lastRenderedReducer), G !== null)
        )
          try {
            var c = B.lastRenderedState,
              e = G(c, g);
            if (((l.hasEagerState = !0), (l.eagerState = e), LA(e, c))) {
              var a = B.interleaved;
              a === null
                ? ((l.next = l), Rc(B))
                : ((l.next = a.next), (a.next = l)),
                (B.interleaved = l);
              return;
            }
          } catch {
          } finally {
          }
        (g = Fn(A, B, l, I)),
          g !== null && ((l = ZA()), PA(g, A, I, l), nQ(g, B, I));
      }
    }
    function eQ(A) {
      var B = A.alternate;
      return A === O || (B !== null && B === O);
    }
    function aQ(A, B) {
      wI = yl = !0;
      var g = A.pending;
      g === null ? (B.next = B) : ((B.next = g.next), (g.next = B)),
        (A.pending = B);
    }
    function nQ(A, B, g) {
      if (g & 4194240) {
        var I = B.lanes;
        (I &= A.pendingLanes), (g |= I), (B.lanes = g), PG(A, g);
      }
    }
    var Fl = {
        readContext: kA,
        useCallback: QA,
        useContext: QA,
        useEffect: QA,
        useImperativeHandle: QA,
        useInsertionEffect: QA,
        useLayoutEffect: QA,
        useMemo: QA,
        useReducer: QA,
        useRef: QA,
        useState: QA,
        useDebugValue: QA,
        useDeferredValue: QA,
        useTransition: QA,
        useMutableSource: QA,
        useSyncExternalStore: QA,
        useId: QA,
        unstable_isNewReconciler: !1,
      },
      DC = {
        readContext: kA,
        useCallback: function (A, B) {
          return (BB().memoizedState = [A, B === void 0 ? null : B]), A;
        },
        useContext: kA,
        useEffect: qn,
        useImperativeHandle: function (A, B, g) {
          return (
            (g = g != null ? g.concat([A]) : null),
            Nl(4194308, 4, BQ.bind(null, B, A), g)
          );
        },
        useLayoutEffect: function (A, B) {
          return Nl(4194308, 4, A, B);
        },
        useInsertionEffect: function (A, B) {
          return Nl(4, 2, A, B);
        },
        useMemo: function (A, B) {
          var g = BB();
          return (
            (B = B === void 0 ? null : B),
            (A = A()),
            (g.memoizedState = [A, B]),
            A
          );
        },
        useReducer: function (A, B, g) {
          var I = BB();
          return (
            (B = g !== void 0 ? g(B) : B),
            (I.memoizedState = I.baseState = B),
            (A = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: A,
              lastRenderedState: B,
            }),
            (I.queue = A),
            (A = A.dispatch = pC.bind(null, O, A)),
            [I.memoizedState, A]
          );
        },
        useRef: function (A) {
          var B = BB();
          return (A = { current: A }), (B.memoizedState = A);
        },
        useState: Pn,
        useDebugValue: Pc,
        useDeferredValue: function (A) {
          return (BB().memoizedState = A);
        },
        useTransition: function () {
          var A = Pn(!1),
            B = A[0];
          return (A = NC.bind(null, A[1])), (BB().memoizedState = A), [B, A];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (A, B, g) {
          var I = O,
            l = BB();
          if (f) {
            if (g === void 0) throw Error(Y(407));
            g = g();
          } else {
            if (((g = B()), GA === null)) throw Error(Y(349));
            OB & 30 || Ln(I, B, g);
          }
          l.memoizedState = g;
          var G = { value: g, getSnapshot: B };
          return (
            (l.queue = G),
            qn(Tn.bind(null, I, G, A), [A]),
            (I.flags |= 2048),
            YI(9, fn.bind(null, I, G, g, B), void 0, null),
            g
          );
        },
        useId: function () {
          var A = BB(),
            B = GA.identifierPrefix;
          if (f) {
            var g = aB,
              I = eB;
            (g = (I & ~(1 << (32 - xA(I) - 1))).toString(32) + g),
              (B = ":" + B + "R" + g),
              (g = sI++),
              0 < g && (B += "H" + g.toString(32)),
              (B += ":");
          } else (g = yC++), (B = ":" + B + "r" + g.toString(32) + ":");
          return (A.memoizedState = B);
        },
        unstable_isNewReconciler: !1,
      },
      HC = {
        readContext: kA,
        useCallback: IQ,
        useContext: kA,
        useEffect: Oc,
        useImperativeHandle: gQ,
        useInsertionEffect: $n,
        useLayoutEffect: AQ,
        useMemo: lQ,
        useReducer: Tc,
        useRef: _n,
        useState: function () {
          return Tc(hI);
        },
        useDebugValue: Pc,
        useDeferredValue: function (A) {
          var B = JA();
          return GQ(B, gA.memoizedState, A);
        },
        useTransition: function () {
          var A = Tc(hI)[0],
            B = JA().memoizedState;
          return [A, B];
        },
        useMutableSource: jn,
        useSyncExternalStore: xn,
        useId: cQ,
        unstable_isNewReconciler: !1,
      },
      XC = {
        readContext: kA,
        useCallback: IQ,
        useContext: kA,
        useEffect: Oc,
        useImperativeHandle: gQ,
        useInsertionEffect: $n,
        useLayoutEffect: AQ,
        useMemo: lQ,
        useReducer: Kc,
        useRef: _n,
        useState: function () {
          return Kc(hI);
        },
        useDebugValue: Pc,
        useDeferredValue: function (A) {
          var B = JA();
          return gA === null
            ? (B.memoizedState = A)
            : GQ(B, gA.memoizedState, A);
        },
        useTransition: function () {
          var A = Kc(hI)[0],
            B = JA().memoizedState;
          return [A, B];
        },
        useMutableSource: jn,
        useSyncExternalStore: xn,
        useId: cQ,
        unstable_isNewReconciler: !1,
      };
    function Dg(A, B) {
      try {
        var g = "",
          I = B;
        do (g += ad(I)), (I = I.return);
        while (I);
        var l = g;
      } catch (G) {
        l =
          `
Error generating stack: ` +
          G.message +
          `
` +
          G.stack;
      }
      return { value: A, source: B, stack: l, digest: null };
    }
    function _c(A, B, g) {
      return { value: A, source: null, stack: g ?? null, digest: B ?? null };
    }
    function qc(A, B) {
      try {
        console.error(B.value);
      } catch (g) {
        setTimeout(function () {
          throw g;
        });
      }
    }
    var RC = typeof WeakMap == "function" ? WeakMap : Map;
    function QQ(A, B, g) {
      (g = QB(-1, g)), (g.tag = 3), (g.payload = { element: null });
      var I = B.value;
      return (
        (g.callback = function () {
          zl || ((zl = !0), (de = I)), qc(A, B);
        }),
        g
      );
    }
    function tQ(A, B, g) {
      (g = QB(-1, g)), (g.tag = 3);
      var I = A.type.getDerivedStateFromError;
      if (typeof I == "function") {
        var l = B.value;
        (g.payload = function () {
          return I(l);
        }),
          (g.callback = function () {
            qc(A, B);
          });
      }
      var G = A.stateNode;
      return (
        G !== null &&
          typeof G.componentDidCatch == "function" &&
          (g.callback = function () {
            qc(A, B),
              typeof I != "function" &&
                (FB === null ? (FB = new Set([this])) : FB.add(this));
            var c = B.stack;
            this.componentDidCatch(B.value, {
              componentStack: c !== null ? c : "",
            });
          }),
        g
      );
    }
    function dQ(A, B, g) {
      var I = A.pingCache;
      if (I === null) {
        I = A.pingCache = new RC();
        var l = new Set();
        I.set(B, l);
      } else (l = I.get(B)), l === void 0 && ((l = new Set()), I.set(B, l));
      l.has(g) || (l.add(g), (A = OC.bind(null, A, B, g)), B.then(A, A));
    }
    function CQ(A) {
      do {
        var B;
        if (
          ((B = A.tag === 13) &&
            ((B = A.memoizedState),
            (B = B !== null ? B.dehydrated !== null : !0)),
          B)
        )
          return A;
        A = A.return;
      } while (A !== null);
      return null;
    }
    function bQ(A, B, g, I, l) {
      return A.mode & 1
        ? ((A.flags |= 65536), (A.lanes = l), A)
        : (A === B
            ? (A.flags |= 65536)
            : ((A.flags |= 128),
              (g.flags |= 131072),
              (g.flags &= -52805),
              g.tag === 1 &&
                (g.alternate === null
                  ? (g.tag = 17)
                  : ((B = QB(-1, 1)), (B.tag = 2), NB(g, B, 1))),
              (g.lanes |= 1)),
          A);
    }
    var SC = lB.ReactCurrentOwner,
      YA = !1;
    function EA(A, B, g, I) {
      B.child = A === null ? Jn(B, null, g, I) : pg(B, A.child, g, I);
    }
    function oQ(A, B, g, I, l) {
      g = g.render;
      var G = B.ref;
      return (
        Ng(B, l),
        (I = Lc(A, B, g, I, G, l)),
        (g = fc()),
        A !== null && !YA
          ? ((B.updateQueue = A.updateQueue),
            (B.flags &= -2053),
            (A.lanes &= ~l),
            tB(A, B, l))
          : (f && g && Wc(B), (B.flags |= 1), EA(A, B, I, l), B.child)
      );
    }
    function EQ(A, B, g, I, l) {
      if (A === null) {
        var G = g.type;
        return typeof G == "function" &&
          !ue(G) &&
          G.defaultProps === void 0 &&
          g.compare === null &&
          g.defaultProps === void 0
          ? ((B.tag = 15), (B.type = G), ZQ(A, B, G, I, l))
          : ((A = xl(g.type, null, I, B, B.mode, l)),
            (A.ref = B.ref),
            (A.return = B),
            (B.child = A));
      }
      if (((G = A.child), !(A.lanes & l))) {
        var c = G.memoizedProps;
        if (
          ((g = g.compare),
          (g = g !== null ? g : QI),
          g(c, I) && A.ref === B.ref)
        )
          return tB(A, B, l);
      }
      return (
        (B.flags |= 1),
        (A = RB(G, I)),
        (A.ref = B.ref),
        (A.return = B),
        (B.child = A)
      );
    }
    function ZQ(A, B, g, I, l) {
      if (A !== null) {
        var G = A.memoizedProps;
        if (QI(G, I) && A.ref === B.ref)
          if (((YA = !1), (B.pendingProps = I = G), (A.lanes & l) !== 0))
            A.flags & 131072 && (YA = !0);
          else return (B.lanes = A.lanes), tB(A, B, l);
      }
      return $c(A, B, g, I, l);
    }
    function iQ(A, B, g) {
      var I = B.pendingProps,
        l = I.children,
        G = A !== null ? A.memoizedState : null;
      if (I.mode === "hidden")
        if (!(B.mode & 1))
          (B.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            U(Xg, XA),
            (XA |= g);
        else {
          if (!(g & 1073741824))
            return (
              (A = G !== null ? G.baseLanes | g : g),
              (B.lanes = B.childLanes = 1073741824),
              (B.memoizedState = {
                baseLanes: A,
                cachePool: null,
                transitions: null,
              }),
              (B.updateQueue = null),
              U(Xg, XA),
              (XA |= A),
              null
            );
          (B.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            (I = G !== null ? G.baseLanes : g),
            U(Xg, XA),
            (XA |= I);
        }
      else
        G !== null
          ? ((I = G.baseLanes | g), (B.memoizedState = null))
          : (I = g),
          U(Xg, XA),
          (XA |= I);
      return EA(A, B, l, g), B.child;
    }
    function uQ(A, B) {
      var g = B.ref;
      ((A === null && g !== null) || (A !== null && A.ref !== g)) &&
        ((B.flags |= 512), (B.flags |= 2097152));
    }
    function $c(A, B, g, I, l) {
      var G = hA(g) ? xB : nA.current;
      return (
        (G = Yg(B, G)),
        Ng(B, l),
        (g = Lc(A, B, g, I, G, l)),
        (I = fc()),
        A !== null && !YA
          ? ((B.updateQueue = A.updateQueue),
            (B.flags &= -2053),
            (A.lanes &= ~l),
            tB(A, B, l))
          : (f && I && Wc(B), (B.flags |= 1), EA(A, B, g, l), B.child)
      );
    }
    function rQ(A, B, g, I, l) {
      if (hA(g)) {
        var G = !0;
        ol(B);
      } else G = !1;
      if ((Ng(B, l), B.stateNode === null))
        Hl(A, B), Vn(B, g, I), zc(B, g, I, l), (I = !0);
      else if (A === null) {
        var c = B.stateNode,
          e = B.memoizedProps;
        c.props = e;
        var a = c.context,
          Q = g.contextType;
        typeof Q == "object" && Q !== null
          ? (Q = kA(Q))
          : ((Q = hA(g) ? xB : nA.current), (Q = Yg(B, Q)));
        var E = g.getDerivedStateFromProps,
          b =
            typeof E == "function" ||
            typeof c.getSnapshotBeforeUpdate == "function";
        b ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((e !== I || a !== Q) && zn(B, c, I, Q)),
          (yB = !1);
        var o = B.memoizedState;
        (c.state = o),
          hl(B, I, c, l),
          (a = B.memoizedState),
          e !== I || o !== a || sA.current || yB
            ? (typeof E == "function" &&
                (Vc(B, g, E, I), (a = B.memoizedState)),
              (e = yB || Sn(B, g, e, I, o, a, Q))
                ? (b ||
                    (typeof c.UNSAFE_componentWillMount != "function" &&
                      typeof c.componentWillMount != "function") ||
                    (typeof c.componentWillMount == "function" &&
                      c.componentWillMount(),
                    typeof c.UNSAFE_componentWillMount == "function" &&
                      c.UNSAFE_componentWillMount()),
                  typeof c.componentDidMount == "function" &&
                    (B.flags |= 4194308))
                : (typeof c.componentDidMount == "function" &&
                    (B.flags |= 4194308),
                  (B.memoizedProps = I),
                  (B.memoizedState = a)),
              (c.props = I),
              (c.state = a),
              (c.context = Q),
              (I = e))
            : (typeof c.componentDidMount == "function" && (B.flags |= 4194308),
              (I = !1));
      } else {
        (c = B.stateNode),
          Dn(A, B),
          (e = B.memoizedProps),
          (Q = B.type === B.elementType ? e : TA(B.type, e)),
          (c.props = Q),
          (b = B.pendingProps),
          (o = c.context),
          (a = g.contextType),
          typeof a == "object" && a !== null
            ? (a = kA(a))
            : ((a = hA(g) ? xB : nA.current), (a = Yg(B, a)));
        var u = g.getDerivedStateFromProps;
        (E =
          typeof u == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function") ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((e !== b || o !== a) && zn(B, c, I, a)),
          (yB = !1),
          (o = B.memoizedState),
          (c.state = o),
          hl(B, I, c, l);
        var r = B.memoizedState;
        e !== b || o !== r || sA.current || yB
          ? (typeof u == "function" && (Vc(B, g, u, I), (r = B.memoizedState)),
            (Q = yB || Sn(B, g, Q, I, o, r, a) || !1)
              ? (E ||
                  (typeof c.UNSAFE_componentWillUpdate != "function" &&
                    typeof c.componentWillUpdate != "function") ||
                  (typeof c.componentWillUpdate == "function" &&
                    c.componentWillUpdate(I, r, a),
                  typeof c.UNSAFE_componentWillUpdate == "function" &&
                    c.UNSAFE_componentWillUpdate(I, r, a)),
                typeof c.componentDidUpdate == "function" && (B.flags |= 4),
                typeof c.getSnapshotBeforeUpdate == "function" &&
                  (B.flags |= 1024))
              : (typeof c.componentDidUpdate != "function" ||
                  (e === A.memoizedProps && o === A.memoizedState) ||
                  (B.flags |= 4),
                typeof c.getSnapshotBeforeUpdate != "function" ||
                  (e === A.memoizedProps && o === A.memoizedState) ||
                  (B.flags |= 1024),
                (B.memoizedProps = I),
                (B.memoizedState = r)),
            (c.props = I),
            (c.state = r),
            (c.context = a),
            (I = Q))
          : (typeof c.componentDidUpdate != "function" ||
              (e === A.memoizedProps && o === A.memoizedState) ||
              (B.flags |= 4),
            typeof c.getSnapshotBeforeUpdate != "function" ||
              (e === A.memoizedProps && o === A.memoizedState) ||
              (B.flags |= 1024),
            (I = !1));
      }
      return Ae(A, B, g, I, G, l);
    }
    function Ae(A, B, g, I, l, G) {
      uQ(A, B);
      var c = (B.flags & 128) !== 0;
      if (!I && !c) return l && Yn(B, g, !1), tB(A, B, G);
      (I = B.stateNode), (SC.current = B);
      var e =
        c && typeof g.getDerivedStateFromError != "function"
          ? null
          : I.render();
      return (
        (B.flags |= 1),
        A !== null && c
          ? ((B.child = pg(B, A.child, null, G)), (B.child = pg(B, null, e, G)))
          : EA(A, B, e, G),
        (B.memoizedState = I.state),
        l && Yn(B, g, !0),
        B.child
      );
    }
    function wQ(A) {
      var B = A.stateNode;
      B.pendingContext
        ? sn(A, B.pendingContext, B.pendingContext !== B.context)
        : B.context && sn(A, B.context, !1),
        vc(A, B.containerInfo);
    }
    function sQ(A, B, g, I, l) {
      return mg(), pc(l), (B.flags |= 256), EA(A, B, g, I), B.child;
    }
    var Be = { dehydrated: null, treeContext: null, retryLane: 0 };
    function ge(A) {
      return { baseLanes: A, cachePool: null, transitions: null };
    }
    function hQ(A, B, g) {
      var I = B.pendingProps,
        l = K.current,
        G = !1,
        c = (B.flags & 128) !== 0,
        e;
      if (
        ((e = c) ||
          (e = A !== null && A.memoizedState === null ? !1 : (l & 2) !== 0),
        e
          ? ((G = !0), (B.flags &= -129))
          : (A === null || A.memoizedState !== null) && (l |= 1),
        U(K, l & 1),
        A === null)
      )
        return (
          Nc(B),
          (A = B.memoizedState),
          A !== null && ((A = A.dehydrated), A !== null)
            ? (B.mode & 1
                ? A.data === "$!"
                  ? (B.lanes = 8)
                  : (B.lanes = 1073741824)
                : (B.lanes = 1),
              null)
            : ((c = I.children),
              (A = I.fallback),
              G
                ? ((I = B.mode),
                  (G = B.child),
                  (c = { mode: "hidden", children: c }),
                  !(I & 1) && G !== null
                    ? ((G.childLanes = 0), (G.pendingProps = c))
                    : (G = Ll(c, I, 0, null)),
                  (A = Ag(A, I, g, null)),
                  (G.return = B),
                  (A.return = B),
                  (G.sibling = A),
                  (B.child = G),
                  (B.child.memoizedState = ge(g)),
                  (B.memoizedState = Be),
                  A)
                : Ie(B, c))
        );
      if (
        ((l = A.memoizedState), l !== null && ((e = l.dehydrated), e !== null))
      )
        return VC(A, B, c, I, e, l, g);
      if (G) {
        (G = I.fallback), (c = B.mode), (l = A.child), (e = l.sibling);
        var a = { mode: "hidden", children: I.children };
        return (
          !(c & 1) && B.child !== l
            ? ((I = B.child),
              (I.childLanes = 0),
              (I.pendingProps = a),
              (B.deletions = null))
            : ((I = RB(l, a)), (I.subtreeFlags = l.subtreeFlags & 14680064)),
          e !== null
            ? (G = RB(e, G))
            : ((G = Ag(G, c, g, null)), (G.flags |= 2)),
          (G.return = B),
          (I.return = B),
          (I.sibling = G),
          (B.child = I),
          (I = G),
          (G = B.child),
          (c = A.child.memoizedState),
          (c =
            c === null
              ? ge(g)
              : {
                  baseLanes: c.baseLanes | g,
                  cachePool: null,
                  transitions: c.transitions,
                }),
          (G.memoizedState = c),
          (G.childLanes = A.childLanes & ~g),
          (B.memoizedState = Be),
          I
        );
      }
      return (
        (G = A.child),
        (A = G.sibling),
        (I = RB(G, { mode: "visible", children: I.children })),
        !(B.mode & 1) && (I.lanes = g),
        (I.return = B),
        (I.sibling = null),
        A !== null &&
          ((g = B.deletions),
          g === null ? ((B.deletions = [A]), (B.flags |= 16)) : g.push(A)),
        (B.child = I),
        (B.memoizedState = null),
        I
      );
    }
    function Ie(A, B) {
      return (
        (B = Ll({ mode: "visible", children: B }, A.mode, 0, null)),
        (B.return = A),
        (A.child = B)
      );
    }
    function Dl(A, B, g, I) {
      return (
        I !== null && pc(I),
        pg(B, A.child, null, g),
        (A = Ie(B, B.pendingProps.children)),
        (A.flags |= 2),
        (B.memoizedState = null),
        A
      );
    }
    function VC(A, B, g, I, l, G, c) {
      if (g)
        return B.flags & 256
          ? ((B.flags &= -257), (I = _c(Error(Y(422)))), Dl(A, B, c, I))
          : B.memoizedState !== null
          ? ((B.child = A.child), (B.flags |= 128), null)
          : ((G = I.fallback),
            (l = B.mode),
            (I = Ll({ mode: "visible", children: I.children }, l, 0, null)),
            (G = Ag(G, l, c, null)),
            (G.flags |= 2),
            (I.return = B),
            (G.return = B),
            (I.sibling = G),
            (B.child = I),
            B.mode & 1 && pg(B, A.child, null, c),
            (B.child.memoizedState = ge(c)),
            (B.memoizedState = Be),
            G);
      if (!(B.mode & 1)) return Dl(A, B, c, null);
      if (l.data === "$!") {
        if (((I = l.nextSibling && l.nextSibling.dataset), I)) var e = I.dgst;
        return (
          (I = e), (G = Error(Y(419))), (I = _c(G, I, void 0)), Dl(A, B, c, I)
        );
      }
      if (((e = (c & A.childLanes) !== 0), YA || e)) {
        if (((I = GA), I !== null)) {
          switch (c & -c) {
            case 4:
              l = 2;
              break;
            case 16:
              l = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              l = 32;
              break;
            case 536870912:
              l = 268435456;
              break;
            default:
              l = 0;
          }
          (l = l & (I.suspendedLanes | c) ? 0 : l),
            l !== 0 &&
              l !== G.retryLane &&
              ((G.retryLane = l), nB(A, l), PA(I, A, l, -1));
        }
        return ie(), (I = _c(Error(Y(421)))), Dl(A, B, c, I);
      }
      return l.data === "$?"
        ? ((B.flags |= 128),
          (B.child = A.child),
          (B = PC.bind(null, A)),
          (l._reactRetry = B),
          null)
        : ((A = G.treeContext),
          (HA = YB(l.nextSibling)),
          (DA = B),
          (f = !0),
          (fA = null),
          A !== null &&
            ((zA[vA++] = eB),
            (zA[vA++] = aB),
            (zA[vA++] = LB),
            (eB = A.id),
            (aB = A.overflow),
            (LB = B)),
          (B = Ie(B, I.children)),
          (B.flags |= 4096),
          B);
    }
    function YQ(A, B, g) {
      A.lanes |= B;
      var I = A.alternate;
      I !== null && (I.lanes |= B), Xc(A.return, B, g);
    }
    function le(A, B, g, I, l) {
      var G = A.memoizedState;
      G === null
        ? (A.memoizedState = {
            isBackwards: B,
            rendering: null,
            renderingStartTime: 0,
            last: I,
            tail: g,
            tailMode: l,
          })
        : ((G.isBackwards = B),
          (G.rendering = null),
          (G.renderingStartTime = 0),
          (G.last = I),
          (G.tail = g),
          (G.tailMode = l));
    }
    function MQ(A, B, g) {
      var I = B.pendingProps,
        l = I.revealOrder,
        G = I.tail;
      if ((EA(A, B, I.children, g), (I = K.current), I & 2))
        (I = (I & 1) | 2), (B.flags |= 128);
      else {
        if (A !== null && A.flags & 128)
          A: for (A = B.child; A !== null; ) {
            if (A.tag === 13) A.memoizedState !== null && YQ(A, g, B);
            else if (A.tag === 19) YQ(A, g, B);
            else if (A.child !== null) {
              (A.child.return = A), (A = A.child);
              continue;
            }
            if (A === B) break A;
            for (; A.sibling === null; ) {
              if (A.return === null || A.return === B) break A;
              A = A.return;
            }
            (A.sibling.return = A.return), (A = A.sibling);
          }
        I &= 1;
      }
      if ((U(K, I), !(B.mode & 1))) B.memoizedState = null;
      else
        switch (l) {
          case "forwards":
            for (g = B.child, l = null; g !== null; )
              (A = g.alternate),
                A !== null && Wl(A) === null && (l = g),
                (g = g.sibling);
            (g = l),
              g === null
                ? ((l = B.child), (B.child = null))
                : ((l = g.sibling), (g.sibling = null)),
              le(B, !1, l, g, G);
            break;
          case "backwards":
            for (g = null, l = B.child, B.child = null; l !== null; ) {
              if (((A = l.alternate), A !== null && Wl(A) === null)) {
                B.child = l;
                break;
              }
              (A = l.sibling), (l.sibling = g), (g = l), (l = A);
            }
            le(B, !0, g, null, G);
            break;
          case "together":
            le(B, !1, null, null, void 0);
            break;
          default:
            B.memoizedState = null;
        }
      return B.child;
    }
    function Hl(A, B) {
      !(B.mode & 1) &&
        A !== null &&
        ((A.alternate = null), (B.alternate = null), (B.flags |= 2));
    }
    function tB(A, B, g) {
      if (
        (A !== null && (B.dependencies = A.dependencies),
        (PB |= B.lanes),
        !(g & B.childLanes))
      )
        return null;
      if (A !== null && B.child !== A.child) throw Error(Y(153));
      if (B.child !== null) {
        for (
          A = B.child, g = RB(A, A.pendingProps), B.child = g, g.return = B;
          A.sibling !== null;

        )
          (A = A.sibling),
            (g = g.sibling = RB(A, A.pendingProps)),
            (g.return = B);
        g.sibling = null;
      }
      return B.child;
    }
    function zC(A, B, g) {
      switch (B.tag) {
        case 3:
          wQ(B), mg();
          break;
        case 5:
          Un(B);
          break;
        case 1:
          hA(B.type) && ol(B);
          break;
        case 4:
          vc(B, B.stateNode.containerInfo);
          break;
        case 10:
          var I = B.type._context,
            l = B.memoizedProps.value;
          U(rl, I._currentValue), (I._currentValue = l);
          break;
        case 13:
          if (((I = B.memoizedState), I !== null))
            return I.dehydrated !== null
              ? (U(K, K.current & 1), (B.flags |= 128), null)
              : g & B.child.childLanes
              ? hQ(A, B, g)
              : (U(K, K.current & 1),
                (A = tB(A, B, g)),
                A !== null ? A.sibling : null);
          U(K, K.current & 1);
          break;
        case 19:
          if (((I = (g & B.childLanes) !== 0), A.flags & 128)) {
            if (I) return MQ(A, B, g);
            B.flags |= 128;
          }
          if (
            ((l = B.memoizedState),
            l !== null &&
              ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
            U(K, K.current),
            I)
          )
            break;
          return null;
        case 22:
        case 23:
          return (B.lanes = 0), iQ(A, B, g);
      }
      return tB(A, B, g);
    }
    var WQ, Ge, mQ, yQ;
    (WQ = function (A, B) {
      for (var g = B.child; g !== null; ) {
        if (g.tag === 5 || g.tag === 6) A.appendChild(g.stateNode);
        else if (g.tag !== 4 && g.child !== null) {
          (g.child.return = g), (g = g.child);
          continue;
        }
        if (g === B) break;
        for (; g.sibling === null; ) {
          if (g.return === null || g.return === B) return;
          g = g.return;
        }
        (g.sibling.return = g.return), (g = g.sibling);
      }
    }),
      (Ge = function () {}),
      (mQ = function (A, B, g, I) {
        var l = A.memoizedProps;
        if (l !== I) {
          (A = B.stateNode), KB(AB.current);
          var G = null;
          switch (g) {
            case "input":
              (l = XG(A, l)), (I = XG(A, I)), (G = []);
              break;
            case "select":
              (l = T({}, l, { value: void 0 })),
                (I = T({}, I, { value: void 0 })),
                (G = []);
              break;
            case "textarea":
              (l = VG(A, l)), (I = VG(A, I)), (G = []);
              break;
            default:
              typeof l.onClick != "function" &&
                typeof I.onClick == "function" &&
                (A.onclick = dl);
          }
          vG(g, I);
          var c;
          g = null;
          for (Q in l)
            if (!I.hasOwnProperty(Q) && l.hasOwnProperty(Q) && l[Q] != null)
              if (Q === "style") {
                var e = l[Q];
                for (c in e)
                  e.hasOwnProperty(c) && (g || (g = {}), (g[c] = ""));
              } else
                Q !== "dangerouslySetInnerHTML" &&
                  Q !== "children" &&
                  Q !== "suppressContentEditableWarning" &&
                  Q !== "suppressHydrationWarning" &&
                  Q !== "autoFocus" &&
                  (jg.hasOwnProperty(Q)
                    ? G || (G = [])
                    : (G = G || []).push(Q, null));
          for (Q in I) {
            var a = I[Q];
            if (
              ((e = l == null ? void 0 : l[Q]),
              I.hasOwnProperty(Q) && a !== e && (a != null || e != null))
            )
              if (Q === "style")
                if (e) {
                  for (c in e)
                    !e.hasOwnProperty(c) ||
                      (a && a.hasOwnProperty(c)) ||
                      (g || (g = {}), (g[c] = ""));
                  for (c in a)
                    a.hasOwnProperty(c) &&
                      e[c] !== a[c] &&
                      (g || (g = {}), (g[c] = a[c]));
                } else g || (G || (G = []), G.push(Q, g)), (g = a);
              else
                Q === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0),
                    (e = e ? e.__html : void 0),
                    a != null && e !== a && (G = G || []).push(Q, a))
                  : Q === "children"
                  ? (typeof a != "string" && typeof a != "number") ||
                    (G = G || []).push(Q, "" + a)
                  : Q !== "suppressContentEditableWarning" &&
                    Q !== "suppressHydrationWarning" &&
                    (jg.hasOwnProperty(Q)
                      ? (a != null && Q === "onScroll" && x("scroll", A),
                        G || e === a || (G = []))
                      : (G = G || []).push(Q, a));
          }
          g && (G = G || []).push("style", g);
          var Q = G;
          (B.updateQueue = Q) && (B.flags |= 4);
        }
      }),
      (yQ = function (A, B, g, I) {
        g !== I && (B.flags |= 4);
      });
    function MI(A, B) {
      if (!f)
        switch (A.tailMode) {
          case "hidden":
            B = A.tail;
            for (var g = null; B !== null; )
              B.alternate !== null && (g = B), (B = B.sibling);
            g === null ? (A.tail = null) : (g.sibling = null);
            break;
          case "collapsed":
            g = A.tail;
            for (var I = null; g !== null; )
              g.alternate !== null && (I = g), (g = g.sibling);
            I === null
              ? B || A.tail === null
                ? (A.tail = null)
                : (A.tail.sibling = null)
              : (I.sibling = null);
        }
    }
    function tA(A) {
      var B = A.alternate !== null && A.alternate.child === A.child,
        g = 0,
        I = 0;
      if (B)
        for (var l = A.child; l !== null; )
          (g |= l.lanes | l.childLanes),
            (I |= l.subtreeFlags & 14680064),
            (I |= l.flags & 14680064),
            (l.return = A),
            (l = l.sibling);
      else
        for (l = A.child; l !== null; )
          (g |= l.lanes | l.childLanes),
            (I |= l.subtreeFlags),
            (I |= l.flags),
            (l.return = A),
            (l = l.sibling);
      return (A.subtreeFlags |= I), (A.childLanes = g), B;
    }
    function vC(A, B, g) {
      var I = B.pendingProps;
      switch ((mc(B), B.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return tA(B), null;
        case 1:
          return hA(B.type) && bl(), tA(B), null;
        case 3:
          return (
            (I = B.stateNode),
            Fg(),
            L(sA),
            L(nA),
            Uc(),
            I.pendingContext &&
              ((I.context = I.pendingContext), (I.pendingContext = null)),
            (A === null || A.child === null) &&
              (ul(B)
                ? (B.flags |= 4)
                : A === null ||
                  (A.memoizedState.isDehydrated && !(B.flags & 256)) ||
                  ((B.flags |= 1024), fA !== null && (oe(fA), (fA = null)))),
            Ge(A, B),
            tA(B),
            null
          );
        case 5:
          kc(B);
          var l = KB(rI.current);
          if (((g = B.type), A !== null && B.stateNode != null))
            mQ(A, B, g, I, l),
              A.ref !== B.ref && ((B.flags |= 512), (B.flags |= 2097152));
          else {
            if (!I) {
              if (B.stateNode === null) throw Error(Y(166));
              return tA(B), null;
            }
            if (((A = KB(AB.current)), ul(B))) {
              (I = B.stateNode), (g = B.type);
              var G = B.memoizedProps;
              switch (((I[$A] = B), (I[oI] = G), (A = (B.mode & 1) !== 0), g)) {
                case "dialog":
                  x("cancel", I), x("close", I);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  x("load", I);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < dI.length; l++) x(dI[l], I);
                  break;
                case "source":
                  x("error", I);
                  break;
                case "img":
                case "image":
                case "link":
                  x("error", I), x("load", I);
                  break;
                case "details":
                  x("toggle", I);
                  break;
                case "input":
                  ca(I, G), x("invalid", I);
                  break;
                case "select":
                  (I._wrapperState = { wasMultiple: !!G.multiple }),
                    x("invalid", I);
                  break;
                case "textarea":
                  na(I, G), x("invalid", I);
              }
              vG(g, G), (l = null);
              for (var c in G)
                if (G.hasOwnProperty(c)) {
                  var e = G[c];
                  c === "children"
                    ? typeof e == "string"
                      ? I.textContent !== e &&
                        (G.suppressHydrationWarning !== !0 &&
                          tl(I.textContent, e, A),
                        (l = ["children", e]))
                      : typeof e == "number" &&
                        I.textContent !== "" + e &&
                        (G.suppressHydrationWarning !== !0 &&
                          tl(I.textContent, e, A),
                        (l = ["children", "" + e]))
                    : jg.hasOwnProperty(c) &&
                      e != null &&
                      c === "onScroll" &&
                      x("scroll", I);
                }
              switch (g) {
                case "input":
                  UI(I), aa(I, G, !0);
                  break;
                case "textarea":
                  UI(I), ta(I);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  typeof G.onClick == "function" && (I.onclick = dl);
              }
              (I = l), (B.updateQueue = I), I !== null && (B.flags |= 4);
            } else {
              (c = l.nodeType === 9 ? l : l.ownerDocument),
                A === "http://www.w3.org/1999/xhtml" && (A = da(g)),
                A === "http://www.w3.org/1999/xhtml"
                  ? g === "script"
                    ? ((A = c.createElement("div")),
                      (A.innerHTML = "<script></script>"),
                      (A = A.removeChild(A.firstChild)))
                    : typeof I.is == "string"
                    ? (A = c.createElement(g, { is: I.is }))
                    : ((A = c.createElement(g)),
                      g === "select" &&
                        ((c = A),
                        I.multiple
                          ? (c.multiple = !0)
                          : I.size && (c.size = I.size)))
                  : (A = c.createElementNS(A, g)),
                (A[$A] = B),
                (A[oI] = I),
                WQ(A, B, !1, !1),
                (B.stateNode = A);
              A: {
                switch (((c = kG(g, I)), g)) {
                  case "dialog":
                    x("cancel", A), x("close", A), (l = I);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    x("load", A), (l = I);
                    break;
                  case "video":
                  case "audio":
                    for (l = 0; l < dI.length; l++) x(dI[l], A);
                    l = I;
                    break;
                  case "source":
                    x("error", A), (l = I);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    x("error", A), x("load", A), (l = I);
                    break;
                  case "details":
                    x("toggle", A), (l = I);
                    break;
                  case "input":
                    ca(A, I), (l = XG(A, I)), x("invalid", A);
                    break;
                  case "option":
                    l = I;
                    break;
                  case "select":
                    (A._wrapperState = { wasMultiple: !!I.multiple }),
                      (l = T({}, I, { value: void 0 })),
                      x("invalid", A);
                    break;
                  case "textarea":
                    na(A, I), (l = VG(A, I)), x("invalid", A);
                    break;
                  default:
                    l = I;
                }
                vG(g, l), (e = l);
                for (G in e)
                  if (e.hasOwnProperty(G)) {
                    var a = e[G];
                    G === "style"
                      ? oa(A, a)
                      : G === "dangerouslySetInnerHTML"
                      ? ((a = a ? a.__html : void 0), a != null && Ca(A, a))
                      : G === "children"
                      ? typeof a == "string"
                        ? (g !== "textarea" || a !== "") && Tg(A, a)
                        : typeof a == "number" && Tg(A, "" + a)
                      : G !== "suppressContentEditableWarning" &&
                        G !== "suppressHydrationWarning" &&
                        G !== "autoFocus" &&
                        (jg.hasOwnProperty(G)
                          ? a != null && G === "onScroll" && x("scroll", A)
                          : a != null && hG(A, G, a, c));
                  }
                switch (g) {
                  case "input":
                    UI(A), aa(A, I, !1);
                    break;
                  case "textarea":
                    UI(A), ta(A);
                    break;
                  case "option":
                    I.value != null &&
                      A.setAttribute("value", "" + ZB(I.value));
                    break;
                  case "select":
                    (A.multiple = !!I.multiple),
                      (G = I.value),
                      G != null
                        ? dg(A, !!I.multiple, G, !1)
                        : I.defaultValue != null &&
                          dg(A, !!I.multiple, I.defaultValue, !0);
                    break;
                  default:
                    typeof l.onClick == "function" && (A.onclick = dl);
                }
                switch (g) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    I = !!I.autoFocus;
                    break A;
                  case "img":
                    I = !0;
                    break A;
                  default:
                    I = !1;
                }
              }
              I && (B.flags |= 4);
            }
            B.ref !== null && ((B.flags |= 512), (B.flags |= 2097152));
          }
          return tA(B), null;
        case 6:
          if (A && B.stateNode != null) yQ(A, B, A.memoizedProps, I);
          else {
            if (typeof I != "string" && B.stateNode === null)
              throw Error(Y(166));
            if (((g = KB(rI.current)), KB(AB.current), ul(B))) {
              if (
                ((I = B.stateNode),
                (g = B.memoizedProps),
                (I[$A] = B),
                (G = I.nodeValue !== g) && ((A = DA), A !== null))
              )
                switch (A.tag) {
                  case 3:
                    tl(I.nodeValue, g, (A.mode & 1) !== 0);
                    break;
                  case 5:
                    A.memoizedProps.suppressHydrationWarning !== !0 &&
                      tl(I.nodeValue, g, (A.mode & 1) !== 0);
                }
              G && (B.flags |= 4);
            } else
              (I = (g.nodeType === 9 ? g : g.ownerDocument).createTextNode(I)),
                (I[$A] = B),
                (B.stateNode = I);
          }
          return tA(B), null;
        case 13:
          if (
            (L(K),
            (I = B.memoizedState),
            A === null ||
              (A.memoizedState !== null && A.memoizedState.dehydrated !== null))
          ) {
            if (f && HA !== null && B.mode & 1 && !(B.flags & 128))
              pn(), mg(), (B.flags |= 98560), (G = !1);
            else if (((G = ul(B)), I !== null && I.dehydrated !== null)) {
              if (A === null) {
                if (!G) throw Error(Y(318));
                if (
                  ((G = B.memoizedState),
                  (G = G !== null ? G.dehydrated : null),
                  !G)
                )
                  throw Error(Y(317));
                G[$A] = B;
              } else
                mg(),
                  !(B.flags & 128) && (B.memoizedState = null),
                  (B.flags |= 4);
              tA(B), (G = !1);
            } else fA !== null && (oe(fA), (fA = null)), (G = !0);
            if (!G) return B.flags & 65536 ? B : null;
          }
          return B.flags & 128
            ? ((B.lanes = g), B)
            : ((I = I !== null),
              I !== (A !== null && A.memoizedState !== null) &&
                I &&
                ((B.child.flags |= 8192),
                B.mode & 1 &&
                  (A === null || K.current & 1 ? IA === 0 && (IA = 3) : ie())),
              B.updateQueue !== null && (B.flags |= 4),
              tA(B),
              null);
        case 4:
          return (
            Fg(),
            Ge(A, B),
            A === null && CI(B.stateNode.containerInfo),
            tA(B),
            null
          );
        case 10:
          return Hc(B.type._context), tA(B), null;
        case 17:
          return hA(B.type) && bl(), tA(B), null;
        case 19:
          if ((L(K), (G = B.memoizedState), G === null)) return tA(B), null;
          if (((I = (B.flags & 128) !== 0), (c = G.rendering), c === null))
            if (I) MI(G, !1);
            else {
              if (IA !== 0 || (A !== null && A.flags & 128))
                for (A = B.child; A !== null; ) {
                  if (((c = Wl(A)), c !== null)) {
                    for (
                      B.flags |= 128,
                        MI(G, !1),
                        I = c.updateQueue,
                        I !== null && ((B.updateQueue = I), (B.flags |= 4)),
                        B.subtreeFlags = 0,
                        I = g,
                        g = B.child;
                      g !== null;

                    )
                      (G = g),
                        (A = I),
                        (G.flags &= 14680066),
                        (c = G.alternate),
                        c === null
                          ? ((G.childLanes = 0),
                            (G.lanes = A),
                            (G.child = null),
                            (G.subtreeFlags = 0),
                            (G.memoizedProps = null),
                            (G.memoizedState = null),
                            (G.updateQueue = null),
                            (G.dependencies = null),
                            (G.stateNode = null))
                          : ((G.childLanes = c.childLanes),
                            (G.lanes = c.lanes),
                            (G.child = c.child),
                            (G.subtreeFlags = 0),
                            (G.deletions = null),
                            (G.memoizedProps = c.memoizedProps),
                            (G.memoizedState = c.memoizedState),
                            (G.updateQueue = c.updateQueue),
                            (G.type = c.type),
                            (A = c.dependencies),
                            (G.dependencies =
                              A === null
                                ? null
                                : {
                                    lanes: A.lanes,
                                    firstContext: A.firstContext,
                                  })),
                        (g = g.sibling);
                    return U(K, (K.current & 1) | 2), B.child;
                  }
                  A = A.sibling;
                }
              G.tail !== null &&
                q() > Rg &&
                ((B.flags |= 128), (I = !0), MI(G, !1), (B.lanes = 4194304));
            }
          else {
            if (!I)
              if (((A = Wl(c)), A !== null)) {
                if (
                  ((B.flags |= 128),
                  (I = !0),
                  (g = A.updateQueue),
                  g !== null && ((B.updateQueue = g), (B.flags |= 4)),
                  MI(G, !0),
                  G.tail === null &&
                    G.tailMode === "hidden" &&
                    !c.alternate &&
                    !f)
                )
                  return tA(B), null;
              } else
                2 * q() - G.renderingStartTime > Rg &&
                  g !== 1073741824 &&
                  ((B.flags |= 128), (I = !0), MI(G, !1), (B.lanes = 4194304));
            G.isBackwards
              ? ((c.sibling = B.child), (B.child = c))
              : ((g = G.last),
                g !== null ? (g.sibling = c) : (B.child = c),
                (G.last = c));
          }
          return G.tail !== null
            ? ((B = G.tail),
              (G.rendering = B),
              (G.tail = B.sibling),
              (G.renderingStartTime = q()),
              (B.sibling = null),
              (g = K.current),
              U(K, I ? (g & 1) | 2 : g & 1),
              B)
            : (tA(B), null);
        case 22:
        case 23:
          return (
            Ze(),
            (I = B.memoizedState !== null),
            A !== null && (A.memoizedState !== null) !== I && (B.flags |= 8192),
            I && B.mode & 1
              ? XA & 1073741824 &&
                (tA(B), B.subtreeFlags & 6 && (B.flags |= 8192))
              : tA(B),
            null
          );
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(Y(156, B.tag));
    }
    function kC(A, B) {
      switch ((mc(B), B.tag)) {
        case 1:
          return (
            hA(B.type) && bl(),
            (A = B.flags),
            A & 65536 ? ((B.flags = (A & -65537) | 128), B) : null
          );
        case 3:
          return (
            Fg(),
            L(sA),
            L(nA),
            Uc(),
            (A = B.flags),
            A & 65536 && !(A & 128) ? ((B.flags = (A & -65537) | 128), B) : null
          );
        case 5:
          return kc(B), null;
        case 13:
          if (
            (L(K), (A = B.memoizedState), A !== null && A.dehydrated !== null)
          ) {
            if (B.alternate === null) throw Error(Y(340));
            mg();
          }
          return (
            (A = B.flags),
            A & 65536 ? ((B.flags = (A & -65537) | 128), B) : null
          );
        case 19:
          return L(K), null;
        case 4:
          return Fg(), null;
        case 10:
          return Hc(B.type._context), null;
        case 22:
        case 23:
          return Ze(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var Xl = !1,
      dA = !1,
      JC = typeof WeakSet == "function" ? WeakSet : Set,
      D = null;
    function Hg(A, B) {
      var g = A.ref;
      if (g !== null)
        if (typeof g == "function")
          try {
            g(null);
          } catch (I) {
            _(A, B, I);
          }
        else g.current = null;
    }
    function NQ(A, B, g) {
      try {
        g();
      } catch (I) {
        _(A, B, I);
      }
    }
    var pQ = !1;
    function UC(A, B) {
      if (((ic = Al), (A = Gn()), Qc(A))) {
        if ("selectionStart" in A)
          var g = { start: A.selectionStart, end: A.selectionEnd };
        else
          A: {
            g = ((g = A.ownerDocument) && g.defaultView) || window;
            var I = g.getSelection && g.getSelection();
            if (I && I.rangeCount !== 0) {
              g = I.anchorNode;
              var l = I.anchorOffset,
                G = I.focusNode;
              I = I.focusOffset;
              try {
                g.nodeType, G.nodeType;
              } catch {
                g = null;
                break A;
              }
              var c = 0,
                e = -1,
                a = -1,
                Q = 0,
                E = 0,
                b = A,
                o = null;
              B: for (;;) {
                for (
                  var u;
                  b !== g || (l !== 0 && b.nodeType !== 3) || (e = c + l),
                    b !== G || (I !== 0 && b.nodeType !== 3) || (a = c + I),
                    b.nodeType === 3 && (c += b.nodeValue.length),
                    (u = b.firstChild) !== null;

                )
                  (o = b), (b = u);
                for (;;) {
                  if (b === A) break B;
                  if (
                    (o === g && ++Q === l && (e = c),
                    o === G && ++E === I && (a = c),
                    (u = b.nextSibling) !== null)
                  )
                    break;
                  (b = o), (o = b.parentNode);
                }
                b = u;
              }
              g = e === -1 || a === -1 ? null : { start: e, end: a };
            } else g = null;
          }
        g = g || { start: 0, end: 0 };
      } else g = null;
      for (
        uc = { focusedElem: A, selectionRange: g }, Al = !1, D = B;
        D !== null;

      )
        if (
          ((B = D), (A = B.child), (B.subtreeFlags & 1028) !== 0 && A !== null)
        )
          (A.return = B), (D = A);
        else
          for (; D !== null; ) {
            B = D;
            try {
              var r = B.alternate;
              if (B.flags & 1024)
                switch (B.tag) {
                  case 0:
                  case 11:
                  case 15:
                    break;
                  case 1:
                    if (r !== null) {
                      var s = r.memoizedProps,
                        H = r.memoizedState,
                        d = B.stateNode,
                        t = d.getSnapshotBeforeUpdate(
                          B.elementType === B.type ? s : TA(B.type, s),
                          H
                        );
                      d.__reactInternalSnapshotBeforeUpdate = t;
                    }
                    break;
                  case 3:
                    var C = B.stateNode.containerInfo;
                    C.nodeType === 1
                      ? (C.textContent = "")
                      : C.nodeType === 9 &&
                        C.documentElement &&
                        C.removeChild(C.documentElement);
                    break;
                  case 5:
                  case 6:
                  case 4:
                  case 17:
                    break;
                  default:
                    throw Error(Y(163));
                }
            } catch (w) {
              _(B, B.return, w);
            }
            if (((A = B.sibling), A !== null)) {
              (A.return = B.return), (D = A);
              break;
            }
            D = B.return;
          }
      return (r = pQ), (pQ = !1), r;
    }
    function WI(A, B, g) {
      var I = B.updateQueue;
      if (((I = I !== null ? I.lastEffect : null), I !== null)) {
        var l = (I = I.next);
        do {
          if ((l.tag & A) === A) {
            var G = l.destroy;
            (l.destroy = void 0), G !== void 0 && NQ(B, g, G);
          }
          l = l.next;
        } while (l !== I);
      }
    }
    function Rl(A, B) {
      if (
        ((B = B.updateQueue),
        (B = B !== null ? B.lastEffect : null),
        B !== null)
      ) {
        var g = (B = B.next);
        do {
          if ((g.tag & A) === A) {
            var I = g.create;
            g.destroy = I();
          }
          g = g.next;
        } while (g !== B);
      }
    }
    function ce(A) {
      var B = A.ref;
      if (B !== null) {
        var g = A.stateNode;
        switch (A.tag) {
          case 5:
            A = g;
            break;
          default:
            A = g;
        }
        typeof B == "function" ? B(A) : (B.current = A);
      }
    }
    function FQ(A) {
      var B = A.alternate;
      B !== null && ((A.alternate = null), FQ(B)),
        (A.child = null),
        (A.deletions = null),
        (A.sibling = null),
        A.tag === 5 &&
          ((B = A.stateNode),
          B !== null &&
            (delete B[$A],
            delete B[oI],
            delete B[hc],
            delete B[YC],
            delete B[MC])),
        (A.stateNode = null),
        (A.return = null),
        (A.dependencies = null),
        (A.memoizedProps = null),
        (A.memoizedState = null),
        (A.pendingProps = null),
        (A.stateNode = null),
        (A.updateQueue = null);
    }
    function DQ(A) {
      return A.tag === 5 || A.tag === 3 || A.tag === 4;
    }
    function HQ(A) {
      A: for (;;) {
        for (; A.sibling === null; ) {
          if (A.return === null || DQ(A.return)) return null;
          A = A.return;
        }
        for (
          A.sibling.return = A.return, A = A.sibling;
          A.tag !== 5 && A.tag !== 6 && A.tag !== 18;

        ) {
          if (A.flags & 2 || A.child === null || A.tag === 4) continue A;
          (A.child.return = A), (A = A.child);
        }
        if (!(A.flags & 2)) return A.stateNode;
      }
    }
    function ee(A, B, g) {
      var I = A.tag;
      if (I === 5 || I === 6)
        (A = A.stateNode),
          B
            ? g.nodeType === 8
              ? g.parentNode.insertBefore(A, B)
              : g.insertBefore(A, B)
            : (g.nodeType === 8
                ? ((B = g.parentNode), B.insertBefore(A, g))
                : ((B = g), B.appendChild(A)),
              (g = g._reactRootContainer),
              g != null || B.onclick !== null || (B.onclick = dl));
      else if (I !== 4 && ((A = A.child), A !== null))
        for (ee(A, B, g), A = A.sibling; A !== null; )
          ee(A, B, g), (A = A.sibling);
    }
    function ae(A, B, g) {
      var I = A.tag;
      if (I === 5 || I === 6)
        (A = A.stateNode), B ? g.insertBefore(A, B) : g.appendChild(A);
      else if (I !== 4 && ((A = A.child), A !== null))
        for (ae(A, B, g), A = A.sibling; A !== null; )
          ae(A, B, g), (A = A.sibling);
    }
    var eA = null,
      KA = !1;
    function pB(A, B, g) {
      for (g = g.child; g !== null; ) XQ(A, B, g), (g = g.sibling);
    }
    function XQ(A, B, g) {
      if (qA && typeof qA.onCommitFiberUnmount == "function")
        try {
          qA.onCommitFiberUnmount(KI, g);
        } catch {}
      switch (g.tag) {
        case 5:
          dA || Hg(g, B);
        case 6:
          var I = eA,
            l = KA;
          (eA = null),
            pB(A, B, g),
            (eA = I),
            (KA = l),
            eA !== null &&
              (KA
                ? ((A = eA),
                  (g = g.stateNode),
                  A.nodeType === 8
                    ? A.parentNode.removeChild(g)
                    : A.removeChild(g))
                : eA.removeChild(g.stateNode));
          break;
        case 18:
          eA !== null &&
            (KA
              ? ((A = eA),
                (g = g.stateNode),
                A.nodeType === 8
                  ? sc(A.parentNode, g)
                  : A.nodeType === 1 && sc(A, g),
                lI(A))
              : sc(eA, g.stateNode));
          break;
        case 4:
          (I = eA),
            (l = KA),
            (eA = g.stateNode.containerInfo),
            (KA = !0),
            pB(A, B, g),
            (eA = I),
            (KA = l);
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (
            !dA &&
            ((I = g.updateQueue),
            I !== null && ((I = I.lastEffect), I !== null))
          ) {
            l = I = I.next;
            do {
              var G = l,
                c = G.destroy;
              (G = G.tag),
                c !== void 0 && (G & 2 || G & 4) && NQ(g, B, c),
                (l = l.next);
            } while (l !== I);
          }
          pB(A, B, g);
          break;
        case 1:
          if (
            !dA &&
            (Hg(g, B),
            (I = g.stateNode),
            typeof I.componentWillUnmount == "function")
          )
            try {
              (I.props = g.memoizedProps),
                (I.state = g.memoizedState),
                I.componentWillUnmount();
            } catch (e) {
              _(g, B, e);
            }
          pB(A, B, g);
          break;
        case 21:
          pB(A, B, g);
          break;
        case 22:
          g.mode & 1
            ? ((dA = (I = dA) || g.memoizedState !== null),
              pB(A, B, g),
              (dA = I))
            : pB(A, B, g);
          break;
        default:
          pB(A, B, g);
      }
    }
    function RQ(A) {
      var B = A.updateQueue;
      if (B !== null) {
        A.updateQueue = null;
        var g = A.stateNode;
        g === null && (g = A.stateNode = new JC()),
          B.forEach(function (I) {
            var l = _C.bind(null, A, I);
            g.has(I) || (g.add(I), I.then(l, l));
          });
      }
    }
    function OA(A, B) {
      var g = B.deletions;
      if (g !== null)
        for (var I = 0; I < g.length; I++) {
          var l = g[I];
          try {
            var G = A,
              c = B,
              e = c;
            A: for (; e !== null; ) {
              switch (e.tag) {
                case 5:
                  (eA = e.stateNode), (KA = !1);
                  break A;
                case 3:
                  (eA = e.stateNode.containerInfo), (KA = !0);
                  break A;
                case 4:
                  (eA = e.stateNode.containerInfo), (KA = !0);
                  break A;
              }
              e = e.return;
            }
            if (eA === null) throw Error(Y(160));
            XQ(G, c, l), (eA = null), (KA = !1);
            var a = l.alternate;
            a !== null && (a.return = null), (l.return = null);
          } catch (Q) {
            _(l, B, Q);
          }
        }
      if (B.subtreeFlags & 12854)
        for (B = B.child; B !== null; ) SQ(B, A), (B = B.sibling);
    }
    function SQ(A, B) {
      var g = A.alternate,
        I = A.flags;
      switch (A.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if ((OA(B, A), gB(A), I & 4)) {
            try {
              WI(3, A, A.return), Rl(3, A);
            } catch (s) {
              _(A, A.return, s);
            }
            try {
              WI(5, A, A.return);
            } catch (s) {
              _(A, A.return, s);
            }
          }
          break;
        case 1:
          OA(B, A), gB(A), I & 512 && g !== null && Hg(g, g.return);
          break;
        case 5:
          if (
            (OA(B, A),
            gB(A),
            I & 512 && g !== null && Hg(g, g.return),
            A.flags & 32)
          ) {
            var l = A.stateNode;
            try {
              Tg(l, "");
            } catch (s) {
              _(A, A.return, s);
            }
          }
          if (I & 4 && ((l = A.stateNode), l != null)) {
            var G = A.memoizedProps,
              c = g !== null ? g.memoizedProps : G,
              e = A.type,
              a = A.updateQueue;
            if (((A.updateQueue = null), a !== null))
              try {
                e === "input" &&
                  G.type === "radio" &&
                  G.name != null &&
                  ea(l, G),
                  kG(e, c);
                var Q = kG(e, G);
                for (c = 0; c < a.length; c += 2) {
                  var E = a[c],
                    b = a[c + 1];
                  E === "style"
                    ? oa(l, b)
                    : E === "dangerouslySetInnerHTML"
                    ? Ca(l, b)
                    : E === "children"
                    ? Tg(l, b)
                    : hG(l, E, b, Q);
                }
                switch (e) {
                  case "input":
                    RG(l, G);
                    break;
                  case "textarea":
                    Qa(l, G);
                    break;
                  case "select":
                    var o = l._wrapperState.wasMultiple;
                    l._wrapperState.wasMultiple = !!G.multiple;
                    var u = G.value;
                    u != null
                      ? dg(l, !!G.multiple, u, !1)
                      : o !== !!G.multiple &&
                        (G.defaultValue != null
                          ? dg(l, !!G.multiple, G.defaultValue, !0)
                          : dg(l, !!G.multiple, G.multiple ? [] : "", !1));
                }
                l[oI] = G;
              } catch (s) {
                _(A, A.return, s);
              }
          }
          break;
        case 6:
          if ((OA(B, A), gB(A), I & 4)) {
            if (A.stateNode === null) throw Error(Y(162));
            (l = A.stateNode), (G = A.memoizedProps);
            try {
              l.nodeValue = G;
            } catch (s) {
              _(A, A.return, s);
            }
          }
          break;
        case 3:
          if (
            (OA(B, A),
            gB(A),
            I & 4 && g !== null && g.memoizedState.isDehydrated)
          )
            try {
              lI(B.containerInfo);
            } catch (s) {
              _(A, A.return, s);
            }
          break;
        case 4:
          OA(B, A), gB(A);
          break;
        case 13:
          OA(B, A),
            gB(A),
            (l = A.child),
            l.flags & 8192 &&
              ((G = l.memoizedState !== null),
              (l.stateNode.isHidden = G),
              !G ||
                (l.alternate !== null && l.alternate.memoizedState !== null) ||
                (te = q())),
            I & 4 && RQ(A);
          break;
        case 22:
          if (
            ((E = g !== null && g.memoizedState !== null),
            A.mode & 1 ? ((dA = (Q = dA) || E), OA(B, A), (dA = Q)) : OA(B, A),
            gB(A),
            I & 8192)
          ) {
            if (
              ((Q = A.memoizedState !== null),
              (A.stateNode.isHidden = Q) && !E && A.mode & 1)
            )
              for (D = A, E = A.child; E !== null; ) {
                for (b = D = E; D !== null; ) {
                  switch (((o = D), (u = o.child), o.tag)) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      WI(4, o, o.return);
                      break;
                    case 1:
                      Hg(o, o.return);
                      var r = o.stateNode;
                      if (typeof r.componentWillUnmount == "function") {
                        (I = o), (g = o.return);
                        try {
                          (B = I),
                            (r.props = B.memoizedProps),
                            (r.state = B.memoizedState),
                            r.componentWillUnmount();
                        } catch (s) {
                          _(I, g, s);
                        }
                      }
                      break;
                    case 5:
                      Hg(o, o.return);
                      break;
                    case 22:
                      if (o.memoizedState !== null) {
                        vQ(b);
                        continue;
                      }
                  }
                  u !== null ? ((u.return = o), (D = u)) : vQ(b);
                }
                E = E.sibling;
              }
            A: for (E = null, b = A; ; ) {
              if (b.tag === 5) {
                if (E === null) {
                  E = b;
                  try {
                    (l = b.stateNode),
                      Q
                        ? ((G = l.style),
                          typeof G.setProperty == "function"
                            ? G.setProperty("display", "none", "important")
                            : (G.display = "none"))
                        : ((e = b.stateNode),
                          (a = b.memoizedProps.style),
                          (c =
                            a != null && a.hasOwnProperty("display")
                              ? a.display
                              : null),
                          (e.style.display = ba("display", c)));
                  } catch (s) {
                    _(A, A.return, s);
                  }
                }
              } else if (b.tag === 6) {
                if (E === null)
                  try {
                    b.stateNode.nodeValue = Q ? "" : b.memoizedProps;
                  } catch (s) {
                    _(A, A.return, s);
                  }
              } else if (
                ((b.tag !== 22 && b.tag !== 23) ||
                  b.memoizedState === null ||
                  b === A) &&
                b.child !== null
              ) {
                (b.child.return = b), (b = b.child);
                continue;
              }
              if (b === A) break A;
              for (; b.sibling === null; ) {
                if (b.return === null || b.return === A) break A;
                E === b && (E = null), (b = b.return);
              }
              E === b && (E = null),
                (b.sibling.return = b.return),
                (b = b.sibling);
            }
          }
          break;
        case 19:
          OA(B, A), gB(A), I & 4 && RQ(A);
          break;
        case 21:
          break;
        default:
          OA(B, A), gB(A);
      }
    }
    function gB(A) {
      var B = A.flags;
      if (B & 2) {
        try {
          A: {
            for (var g = A.return; g !== null; ) {
              if (DQ(g)) {
                var I = g;
                break A;
              }
              g = g.return;
            }
            throw Error(Y(160));
          }
          switch (I.tag) {
            case 5:
              var l = I.stateNode;
              I.flags & 32 && (Tg(l, ""), (I.flags &= -33));
              var G = HQ(A);
              ae(A, G, l);
              break;
            case 3:
            case 4:
              var c = I.stateNode.containerInfo,
                e = HQ(A);
              ee(A, e, c);
              break;
            default:
              throw Error(Y(161));
          }
        } catch (a) {
          _(A, A.return, a);
        }
        A.flags &= -3;
      }
      B & 4096 && (A.flags &= -4097);
    }
    function jC(A, B, g) {
      (D = A), VQ(A);
    }
    function VQ(A, B, g) {
      for (var I = (A.mode & 1) !== 0; D !== null; ) {
        var l = D,
          G = l.child;
        if (l.tag === 22 && I) {
          var c = l.memoizedState !== null || Xl;
          if (!c) {
            var e = l.alternate,
              a = (e !== null && e.memoizedState !== null) || dA;
            e = Xl;
            var Q = dA;
            if (((Xl = c), (dA = a) && !Q))
              for (D = l; D !== null; )
                (c = D),
                  (a = c.child),
                  c.tag === 22 && c.memoizedState !== null
                    ? kQ(l)
                    : a !== null
                    ? ((a.return = c), (D = a))
                    : kQ(l);
            for (; G !== null; ) (D = G), VQ(G), (G = G.sibling);
            (D = l), (Xl = e), (dA = Q);
          }
          zQ(A);
        } else
          l.subtreeFlags & 8772 && G !== null
            ? ((G.return = l), (D = G))
            : zQ(A);
      }
    }
    function zQ(A) {
      for (; D !== null; ) {
        var B = D;
        if (B.flags & 8772) {
          var g = B.alternate;
          try {
            if (B.flags & 8772)
              switch (B.tag) {
                case 0:
                case 11:
                case 15:
                  dA || Rl(5, B);
                  break;
                case 1:
                  var I = B.stateNode;
                  if (B.flags & 4 && !dA)
                    if (g === null) I.componentDidMount();
                    else {
                      var l =
                        B.elementType === B.type
                          ? g.memoizedProps
                          : TA(B.type, g.memoizedProps);
                      I.componentDidUpdate(
                        l,
                        g.memoizedState,
                        I.__reactInternalSnapshotBeforeUpdate
                      );
                    }
                  var G = B.updateQueue;
                  G !== null && Xn(B, G, I);
                  break;
                case 3:
                  var c = B.updateQueue;
                  if (c !== null) {
                    if (((g = null), B.child !== null))
                      switch (B.child.tag) {
                        case 5:
                          g = B.child.stateNode;
                          break;
                        case 1:
                          g = B.child.stateNode;
                      }
                    Xn(B, c, g);
                  }
                  break;
                case 5:
                  var e = B.stateNode;
                  if (g === null && B.flags & 4) {
                    g = e;
                    var a = B.memoizedProps;
                    switch (B.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        a.autoFocus && g.focus();
                        break;
                      case "img":
                        a.src && (g.src = a.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (B.memoizedState === null) {
                    var Q = B.alternate;
                    if (Q !== null) {
                      var E = Q.memoizedState;
                      if (E !== null) {
                        var b = E.dehydrated;
                        b !== null && lI(b);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(Y(163));
              }
            dA || (B.flags & 512 && ce(B));
          } catch (o) {
            _(B, B.return, o);
          }
        }
        if (B === A) {
          D = null;
          break;
        }
        if (((g = B.sibling), g !== null)) {
          (g.return = B.return), (D = g);
          break;
        }
        D = B.return;
      }
    }
    function vQ(A) {
      for (; D !== null; ) {
        var B = D;
        if (B === A) {
          D = null;
          break;
        }
        var g = B.sibling;
        if (g !== null) {
          (g.return = B.return), (D = g);
          break;
        }
        D = B.return;
      }
    }
    function kQ(A) {
      for (; D !== null; ) {
        var B = D;
        try {
          switch (B.tag) {
            case 0:
            case 11:
            case 15:
              var g = B.return;
              try {
                Rl(4, B);
              } catch (a) {
                _(B, g, a);
              }
              break;
            case 1:
              var I = B.stateNode;
              if (typeof I.componentDidMount == "function") {
                var l = B.return;
                try {
                  I.componentDidMount();
                } catch (a) {
                  _(B, l, a);
                }
              }
              var G = B.return;
              try {
                ce(B);
              } catch (a) {
                _(B, G, a);
              }
              break;
            case 5:
              var c = B.return;
              try {
                ce(B);
              } catch (a) {
                _(B, c, a);
              }
          }
        } catch (a) {
          _(B, B.return, a);
        }
        if (B === A) {
          D = null;
          break;
        }
        var e = B.sibling;
        if (e !== null) {
          (e.return = B.return), (D = e);
          break;
        }
        D = B.return;
      }
    }
    var xC = Math.ceil,
      Sl = lB.ReactCurrentDispatcher,
      ne = lB.ReactCurrentOwner,
      UA = lB.ReactCurrentBatchConfig,
      v = 0,
      GA = null,
      BA = null,
      aA = 0,
      XA = 0,
      Xg = MB(0),
      IA = 0,
      mI = null,
      PB = 0,
      Vl = 0,
      Qe = 0,
      yI = null,
      MA = null,
      te = 0,
      Rg = 1 / 0,
      dB = null,
      zl = !1,
      de = null,
      FB = null,
      vl = !1,
      DB = null,
      kl = 0,
      NI = 0,
      Ce = null,
      Jl = -1,
      Ul = 0;
    function ZA() {
      return v & 6 ? q() : Jl !== -1 ? Jl : (Jl = q());
    }
    function HB(A) {
      return A.mode & 1
        ? v & 2 && aA !== 0
          ? aA & -aA
          : mC.transition !== null
          ? (Ul === 0 && (Ul = pa()), Ul)
          : ((A = k),
            A !== 0 ||
              ((A = window.event), (A = A === void 0 ? 16 : va(A.type))),
            A)
        : 1;
    }
    function PA(A, B, g, I) {
      if (50 < NI) throw ((NI = 0), (Ce = null), Error(Y(185)));
      $g(A, g, I),
        (!(v & 2) || A !== GA) &&
          (A === GA && (!(v & 2) && (Vl |= g), IA === 4 && XB(A, aA)),
          WA(A, I),
          g === 1 &&
            v === 0 &&
            !(B.mode & 1) &&
            ((Rg = q() + 500), El && mB()));
    }
    function WA(A, B) {
      var g = A.callbackNode;
      md(A, B);
      var I = _I(A, A === GA ? aA : 0);
      if (I === 0)
        g !== null && ma(g), (A.callbackNode = null), (A.callbackPriority = 0);
      else if (((B = I & -I), A.callbackPriority !== B)) {
        if ((g != null && ma(g), B === 1))
          A.tag === 0 ? WC(UQ.bind(null, A)) : Mn(UQ.bind(null, A)),
            sC(function () {
              !(v & 6) && mB();
            }),
            (g = null);
        else {
          switch (Fa(I)) {
            case 1:
              g = TG;
              break;
            case 4:
              g = ya;
              break;
            case 16:
              g = TI;
              break;
            case 536870912:
              g = Na;
              break;
            default:
              g = TI;
          }
          g = PQ(g, JQ.bind(null, A));
        }
        (A.callbackPriority = B), (A.callbackNode = g);
      }
    }
    function JQ(A, B) {
      if (((Jl = -1), (Ul = 0), v & 6)) throw Error(Y(327));
      var g = A.callbackNode;
      if (Sg() && A.callbackNode !== g) return null;
      var I = _I(A, A === GA ? aA : 0);
      if (I === 0) return null;
      if (I & 30 || I & A.expiredLanes || B) B = jl(A, I);
      else {
        B = I;
        var l = v;
        v |= 2;
        var G = xQ();
        (GA !== A || aA !== B) && ((dB = null), (Rg = q() + 500), qB(A, B));
        do
          try {
            TC();
            break;
          } catch (e) {
            jQ(A, e);
          }
        while (1);
        Dc(),
          (Sl.current = G),
          (v = l),
          BA !== null ? (B = 0) : ((GA = null), (aA = 0), (B = IA));
      }
      if (B !== 0) {
        if (
          (B === 2 && ((l = KG(A)), l !== 0 && ((I = l), (B = be(A, l)))),
          B === 1)
        )
          throw ((g = mI), qB(A, 0), XB(A, I), WA(A, q()), g);
        if (B === 6) XB(A, I);
        else {
          if (
            ((l = A.current.alternate),
            !(I & 30) &&
              !LC(l) &&
              ((B = jl(A, I)),
              B === 2 && ((G = KG(A)), G !== 0 && ((I = G), (B = be(A, G)))),
              B === 1))
          )
            throw ((g = mI), qB(A, 0), XB(A, I), WA(A, q()), g);
          switch (((A.finishedWork = l), (A.finishedLanes = I), B)) {
            case 0:
            case 1:
              throw Error(Y(345));
            case 2:
              $B(A, MA, dB);
              break;
            case 3:
              if (
                (XB(A, I),
                (I & 130023424) === I && ((B = te + 500 - q()), 10 < B))
              ) {
                if (_I(A, 0) !== 0) break;
                if (((l = A.suspendedLanes), (l & I) !== I)) {
                  ZA(), (A.pingedLanes |= A.suspendedLanes & l);
                  break;
                }
                A.timeoutHandle = wc($B.bind(null, A, MA, dB), B);
                break;
              }
              $B(A, MA, dB);
              break;
            case 4:
              if ((XB(A, I), (I & 4194240) === I)) break;
              for (B = A.eventTimes, l = -1; 0 < I; ) {
                var c = 31 - xA(I);
                (G = 1 << c), (c = B[c]), c > l && (l = c), (I &= ~G);
              }
              if (
                ((I = l),
                (I = q() - I),
                (I =
                  (120 > I
                    ? 120
                    : 480 > I
                    ? 480
                    : 1080 > I
                    ? 1080
                    : 1920 > I
                    ? 1920
                    : 3e3 > I
                    ? 3e3
                    : 4320 > I
                    ? 4320
                    : 1960 * xC(I / 1960)) - I),
                10 < I)
              ) {
                A.timeoutHandle = wc($B.bind(null, A, MA, dB), I);
                break;
              }
              $B(A, MA, dB);
              break;
            case 5:
              $B(A, MA, dB);
              break;
            default:
              throw Error(Y(329));
          }
        }
      }
      return WA(A, q()), A.callbackNode === g ? JQ.bind(null, A) : null;
    }
    function be(A, B) {
      var g = yI;
      return (
        A.current.memoizedState.isDehydrated && (qB(A, B).flags |= 256),
        (A = jl(A, B)),
        A !== 2 && ((B = MA), (MA = g), B !== null && oe(B)),
        A
      );
    }
    function oe(A) {
      MA === null ? (MA = A) : MA.push.apply(MA, A);
    }
    function LC(A) {
      for (var B = A; ; ) {
        if (B.flags & 16384) {
          var g = B.updateQueue;
          if (g !== null && ((g = g.stores), g !== null))
            for (var I = 0; I < g.length; I++) {
              var l = g[I],
                G = l.getSnapshot;
              l = l.value;
              try {
                if (!LA(G(), l)) return !1;
              } catch {
                return !1;
              }
            }
        }
        if (((g = B.child), B.subtreeFlags & 16384 && g !== null))
          (g.return = B), (B = g);
        else {
          if (B === A) break;
          for (; B.sibling === null; ) {
            if (B.return === null || B.return === A) return !0;
            B = B.return;
          }
          (B.sibling.return = B.return), (B = B.sibling);
        }
      }
      return !0;
    }
    function XB(A, B) {
      for (
        B &= ~Qe,
          B &= ~Vl,
          A.suspendedLanes |= B,
          A.pingedLanes &= ~B,
          A = A.expirationTimes;
        0 < B;

      ) {
        var g = 31 - xA(B),
          I = 1 << g;
        (A[g] = -1), (B &= ~I);
      }
    }
    function UQ(A) {
      if (v & 6) throw Error(Y(327));
      Sg();
      var B = _I(A, 0);
      if (!(B & 1)) return WA(A, q()), null;
      var g = jl(A, B);
      if (A.tag !== 0 && g === 2) {
        var I = KG(A);
        I !== 0 && ((B = I), (g = be(A, I)));
      }
      if (g === 1) throw ((g = mI), qB(A, 0), XB(A, B), WA(A, q()), g);
      if (g === 6) throw Error(Y(345));
      return (
        (A.finishedWork = A.current.alternate),
        (A.finishedLanes = B),
        $B(A, MA, dB),
        WA(A, q()),
        null
      );
    }
    function Ee(A, B) {
      var g = v;
      v |= 1;
      try {
        return A(B);
      } finally {
        (v = g), v === 0 && ((Rg = q() + 500), El && mB());
      }
    }
    function _B(A) {
      DB !== null && DB.tag === 0 && !(v & 6) && Sg();
      var B = v;
      v |= 1;
      var g = UA.transition,
        I = k;
      try {
        if (((UA.transition = null), (k = 1), A)) return A();
      } finally {
        (k = I), (UA.transition = g), (v = B), !(v & 6) && mB();
      }
    }
    function Ze() {
      (XA = Xg.current), L(Xg);
    }
    function qB(A, B) {
      (A.finishedWork = null), (A.finishedLanes = 0);
      var g = A.timeoutHandle;
      if ((g !== -1 && ((A.timeoutHandle = -1), wC(g)), BA !== null))
        for (g = BA.return; g !== null; ) {
          var I = g;
          switch ((mc(I), I.tag)) {
            case 1:
              (I = I.type.childContextTypes), I != null && bl();
              break;
            case 3:
              Fg(), L(sA), L(nA), Uc();
              break;
            case 5:
              kc(I);
              break;
            case 4:
              Fg();
              break;
            case 13:
              L(K);
              break;
            case 19:
              L(K);
              break;
            case 10:
              Hc(I.type._context);
              break;
            case 22:
            case 23:
              Ze();
          }
          g = g.return;
        }
      if (
        ((GA = A),
        (BA = A = RB(A.current, null)),
        (aA = XA = B),
        (IA = 0),
        (mI = null),
        (Qe = Vl = PB = 0),
        (MA = yI = null),
        TB !== null)
      ) {
        for (B = 0; B < TB.length; B++)
          if (((g = TB[B]), (I = g.interleaved), I !== null)) {
            g.interleaved = null;
            var l = I.next,
              G = g.pending;
            if (G !== null) {
              var c = G.next;
              (G.next = l), (I.next = c);
            }
            g.pending = I;
          }
        TB = null;
      }
      return A;
    }
    function jQ(A, B) {
      do {
        var g = BA;
        try {
          if ((Dc(), (ml.current = Fl), yl)) {
            for (var I = O.memoizedState; I !== null; ) {
              var l = I.queue;
              l !== null && (l.pending = null), (I = I.next);
            }
            yl = !1;
          }
          if (
            ((OB = 0),
            (lA = gA = O = null),
            (wI = !1),
            (sI = 0),
            (ne.current = null),
            g === null || g.return === null)
          ) {
            (IA = 1), (mI = B), (BA = null);
            break;
          }
          A: {
            var G = A,
              c = g.return,
              e = g,
              a = B;
            if (
              ((B = aA),
              (e.flags |= 32768),
              a !== null && typeof a == "object" && typeof a.then == "function")
            ) {
              var Q = a,
                E = e,
                b = E.tag;
              if (!(E.mode & 1) && (b === 0 || b === 11 || b === 15)) {
                var o = E.alternate;
                o
                  ? ((E.updateQueue = o.updateQueue),
                    (E.memoizedState = o.memoizedState),
                    (E.lanes = o.lanes))
                  : ((E.updateQueue = null), (E.memoizedState = null));
              }
              var u = CQ(c);
              if (u !== null) {
                (u.flags &= -257),
                  bQ(u, c, e, G, B),
                  u.mode & 1 && dQ(G, Q, B),
                  (B = u),
                  (a = Q);
                var r = B.updateQueue;
                if (r === null) {
                  var s = new Set();
                  s.add(a), (B.updateQueue = s);
                } else r.add(a);
                break A;
              } else {
                if (!(B & 1)) {
                  dQ(G, Q, B), ie();
                  break A;
                }
                a = Error(Y(426));
              }
            } else if (f && e.mode & 1) {
              var H = CQ(c);
              if (H !== null) {
                !(H.flags & 65536) && (H.flags |= 256),
                  bQ(H, c, e, G, B),
                  pc(Dg(a, e));
                break A;
              }
            }
            (G = a = Dg(a, e)),
              IA !== 4 && (IA = 2),
              yI === null ? (yI = [G]) : yI.push(G),
              (G = c);
            do {
              switch (G.tag) {
                case 3:
                  (G.flags |= 65536), (B &= -B), (G.lanes |= B);
                  var d = QQ(G, a, B);
                  Hn(G, d);
                  break A;
                case 1:
                  e = a;
                  var t = G.type,
                    C = G.stateNode;
                  if (
                    !(G.flags & 128) &&
                    (typeof t.getDerivedStateFromError == "function" ||
                      (C !== null &&
                        typeof C.componentDidCatch == "function" &&
                        (FB === null || !FB.has(C))))
                  ) {
                    (G.flags |= 65536), (B &= -B), (G.lanes |= B);
                    var w = tQ(G, e, B);
                    Hn(G, w);
                    break A;
                  }
              }
              G = G.return;
            } while (G !== null);
          }
          fQ(g);
        } catch (M) {
          (B = M), BA === g && g !== null && (BA = g = g.return);
          continue;
        }
        break;
      } while (1);
    }
    function xQ() {
      var A = Sl.current;
      return (Sl.current = Fl), A === null ? Fl : A;
    }
    function ie() {
      (IA === 0 || IA === 3 || IA === 2) && (IA = 4),
        GA === null || (!(PB & 268435455) && !(Vl & 268435455)) || XB(GA, aA);
    }
    function jl(A, B) {
      var g = v;
      v |= 2;
      var I = xQ();
      (GA !== A || aA !== B) && ((dB = null), qB(A, B));
      do
        try {
          fC();
          break;
        } catch (l) {
          jQ(A, l);
        }
      while (1);
      if ((Dc(), (v = g), (Sl.current = I), BA !== null)) throw Error(Y(261));
      return (GA = null), (aA = 0), IA;
    }
    function fC() {
      for (; BA !== null; ) LQ(BA);
    }
    function TC() {
      for (; BA !== null && !id(); ) LQ(BA);
    }
    function LQ(A) {
      var B = OQ(A.alternate, A, XA);
      (A.memoizedProps = A.pendingProps),
        B === null ? fQ(A) : (BA = B),
        (ne.current = null);
    }
    function fQ(A) {
      var B = A;
      do {
        var g = B.alternate;
        if (((A = B.return), B.flags & 32768)) {
          if (((g = kC(g, B)), g !== null)) {
            (g.flags &= 32767), (BA = g);
            return;
          }
          if (A !== null)
            (A.flags |= 32768), (A.subtreeFlags = 0), (A.deletions = null);
          else {
            (IA = 6), (BA = null);
            return;
          }
        } else if (((g = vC(g, B, XA)), g !== null)) {
          BA = g;
          return;
        }
        if (((B = B.sibling), B !== null)) {
          BA = B;
          return;
        }
        BA = B = A;
      } while (B !== null);
      IA === 0 && (IA = 5);
    }
    function $B(A, B, g) {
      var I = k,
        l = UA.transition;
      try {
        (UA.transition = null), (k = 1), KC(A, B, g, I);
      } finally {
        (UA.transition = l), (k = I);
      }
      return null;
    }
    function KC(A, B, g, I) {
      do Sg();
      while (DB !== null);
      if (v & 6) throw Error(Y(327));
      g = A.finishedWork;
      var l = A.finishedLanes;
      if (g === null) return null;
      if (((A.finishedWork = null), (A.finishedLanes = 0), g === A.current))
        throw Error(Y(177));
      (A.callbackNode = null), (A.callbackPriority = 0);
      var G = g.lanes | g.childLanes;
      if (
        (yd(A, G),
        A === GA && ((BA = GA = null), (aA = 0)),
        (!(g.subtreeFlags & 2064) && !(g.flags & 2064)) ||
          vl ||
          ((vl = !0),
          PQ(TI, function () {
            return Sg(), null;
          })),
        (G = (g.flags & 15990) !== 0),
        g.subtreeFlags & 15990 || G)
      ) {
        (G = UA.transition), (UA.transition = null);
        var c = k;
        k = 1;
        var e = v;
        (v |= 4),
          (ne.current = null),
          UC(A, g),
          SQ(g, A),
          bC(uc),
          (Al = !!ic),
          (uc = ic = null),
          (A.current = g),
          jC(g),
          ud(),
          (v = e),
          (k = c),
          (UA.transition = G);
      } else A.current = g;
      if (
        (vl && ((vl = !1), (DB = A), (kl = l)),
        (G = A.pendingLanes),
        G === 0 && (FB = null),
        sd(g.stateNode),
        WA(A, q()),
        B !== null)
      )
        for (I = A.onRecoverableError, g = 0; g < B.length; g++)
          (l = B[g]), I(l.value, { componentStack: l.stack, digest: l.digest });
      if (zl) throw ((zl = !1), (A = de), (de = null), A);
      return (
        kl & 1 && A.tag !== 0 && Sg(),
        (G = A.pendingLanes),
        G & 1 ? (A === Ce ? NI++ : ((NI = 0), (Ce = A))) : (NI = 0),
        mB(),
        null
      );
    }
    function Sg() {
      if (DB !== null) {
        var A = Fa(kl),
          B = UA.transition,
          g = k;
        try {
          if (((UA.transition = null), (k = 16 > A ? 16 : A), DB === null))
            var I = !1;
          else {
            if (((A = DB), (DB = null), (kl = 0), v & 6)) throw Error(Y(331));
            var l = v;
            for (v |= 4, D = A.current; D !== null; ) {
              var G = D,
                c = G.child;
              if (D.flags & 16) {
                var e = G.deletions;
                if (e !== null) {
                  for (var a = 0; a < e.length; a++) {
                    var Q = e[a];
                    for (D = Q; D !== null; ) {
                      var E = D;
                      switch (E.tag) {
                        case 0:
                        case 11:
                        case 15:
                          WI(8, E, G);
                      }
                      var b = E.child;
                      if (b !== null) (b.return = E), (D = b);
                      else
                        for (; D !== null; ) {
                          E = D;
                          var o = E.sibling,
                            u = E.return;
                          if ((FQ(E), E === Q)) {
                            D = null;
                            break;
                          }
                          if (o !== null) {
                            (o.return = u), (D = o);
                            break;
                          }
                          D = u;
                        }
                    }
                  }
                  var r = G.alternate;
                  if (r !== null) {
                    var s = r.child;
                    if (s !== null) {
                      r.child = null;
                      do {
                        var H = s.sibling;
                        (s.sibling = null), (s = H);
                      } while (s !== null);
                    }
                  }
                  D = G;
                }
              }
              if (G.subtreeFlags & 2064 && c !== null) (c.return = G), (D = c);
              else
                A: for (; D !== null; ) {
                  if (((G = D), G.flags & 2048))
                    switch (G.tag) {
                      case 0:
                      case 11:
                      case 15:
                        WI(9, G, G.return);
                    }
                  var d = G.sibling;
                  if (d !== null) {
                    (d.return = G.return), (D = d);
                    break A;
                  }
                  D = G.return;
                }
            }
            var t = A.current;
            for (D = t; D !== null; ) {
              c = D;
              var C = c.child;
              if (c.subtreeFlags & 2064 && C !== null) (C.return = c), (D = C);
              else
                A: for (c = t; D !== null; ) {
                  if (((e = D), e.flags & 2048))
                    try {
                      switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Rl(9, e);
                      }
                    } catch (M) {
                      _(e, e.return, M);
                    }
                  if (e === c) {
                    D = null;
                    break A;
                  }
                  var w = e.sibling;
                  if (w !== null) {
                    (w.return = e.return), (D = w);
                    break A;
                  }
                  D = e.return;
                }
            }
            if (
              ((v = l),
              mB(),
              qA && typeof qA.onPostCommitFiberRoot == "function")
            )
              try {
                qA.onPostCommitFiberRoot(KI, A);
              } catch {}
            I = !0;
          }
          return I;
        } finally {
          (k = g), (UA.transition = B);
        }
      }
      return !1;
    }
    function TQ(A, B, g) {
      (B = Dg(g, B)),
        (B = QQ(A, B, 1)),
        (A = NB(A, B, 1)),
        (B = ZA()),
        A !== null && ($g(A, 1, B), WA(A, B));
    }
    function _(A, B, g) {
      if (A.tag === 3) TQ(A, A, g);
      else
        for (; B !== null; ) {
          if (B.tag === 3) {
            TQ(B, A, g);
            break;
          } else if (B.tag === 1) {
            var I = B.stateNode;
            if (
              typeof B.type.getDerivedStateFromError == "function" ||
              (typeof I.componentDidCatch == "function" &&
                (FB === null || !FB.has(I)))
            ) {
              (A = Dg(g, A)),
                (A = tQ(B, A, 1)),
                (B = NB(B, A, 1)),
                (A = ZA()),
                B !== null && ($g(B, 1, A), WA(B, A));
              break;
            }
          }
          B = B.return;
        }
    }
    function OC(A, B, g) {
      var I = A.pingCache;
      I !== null && I.delete(B),
        (B = ZA()),
        (A.pingedLanes |= A.suspendedLanes & g),
        GA === A &&
          (aA & g) === g &&
          (IA === 4 || (IA === 3 && (aA & 130023424) === aA && 500 > q() - te)
            ? qB(A, 0)
            : (Qe |= g)),
        WA(A, B);
    }
    function KQ(A, B) {
      B === 0 &&
        (A.mode & 1
          ? ((B = PI), (PI <<= 1), !(PI & 130023424) && (PI = 4194304))
          : (B = 1));
      var g = ZA();
      (A = nB(A, B)), A !== null && ($g(A, B, g), WA(A, g));
    }
    function PC(A) {
      var B = A.memoizedState,
        g = 0;
      B !== null && (g = B.retryLane), KQ(A, g);
    }
    function _C(A, B) {
      var g = 0;
      switch (A.tag) {
        case 13:
          var I = A.stateNode,
            l = A.memoizedState;
          l !== null && (g = l.retryLane);
          break;
        case 19:
          I = A.stateNode;
          break;
        default:
          throw Error(Y(314));
      }
      I !== null && I.delete(B), KQ(A, g);
    }
    var OQ;
    OQ = function (A, B, g) {
      if (A !== null)
        if (A.memoizedProps !== B.pendingProps || sA.current) YA = !0;
        else {
          if (!(A.lanes & g) && !(B.flags & 128)) return (YA = !1), zC(A, B, g);
          YA = !!(A.flags & 131072);
        }
      else (YA = !1), f && B.flags & 1048576 && Wn(B, il, B.index);
      switch (((B.lanes = 0), B.tag)) {
        case 2:
          var I = B.type;
          Hl(A, B), (A = B.pendingProps);
          var l = Yg(B, nA.current);
          Ng(B, g), (l = Lc(null, B, I, A, l, g));
          var G = fc();
          return (
            (B.flags |= 1),
            typeof l == "object" &&
            l !== null &&
            typeof l.render == "function" &&
            l.$$typeof === void 0
              ? ((B.tag = 1),
                (B.memoizedState = null),
                (B.updateQueue = null),
                hA(I) ? ((G = !0), ol(B)) : (G = !1),
                (B.memoizedState =
                  l.state !== null && l.state !== void 0 ? l.state : null),
                Sc(B),
                (l.updater = Yl),
                (B.stateNode = l),
                (l._reactInternals = B),
                zc(B, I, A, g),
                (B = Ae(null, B, I, !0, G, g)))
              : ((B.tag = 0),
                f && G && Wc(B),
                EA(null, B, l, g),
                (B = B.child)),
            B
          );
        case 16:
          I = B.elementType;
          A: {
            switch (
              (Hl(A, B),
              (A = B.pendingProps),
              (l = I._init),
              (I = l(I._payload)),
              (B.type = I),
              (l = B.tag = $C(I)),
              (A = TA(I, A)),
              l)
            ) {
              case 0:
                B = $c(null, B, I, A, g);
                break A;
              case 1:
                B = rQ(null, B, I, A, g);
                break A;
              case 11:
                B = oQ(null, B, I, A, g);
                break A;
              case 14:
                B = EQ(null, B, I, TA(I.type, A), g);
                break A;
            }
            throw Error(Y(306, I, ""));
          }
          return B;
        case 0:
          return (
            (I = B.type),
            (l = B.pendingProps),
            (l = B.elementType === I ? l : TA(I, l)),
            $c(A, B, I, l, g)
          );
        case 1:
          return (
            (I = B.type),
            (l = B.pendingProps),
            (l = B.elementType === I ? l : TA(I, l)),
            rQ(A, B, I, l, g)
          );
        case 3:
          A: {
            if ((wQ(B), A === null)) throw Error(Y(387));
            (I = B.pendingProps),
              (G = B.memoizedState),
              (l = G.element),
              Dn(A, B),
              hl(B, I, null, g);
            var c = B.memoizedState;
            if (((I = c.element), G.isDehydrated))
              if (
                ((G = {
                  element: I,
                  isDehydrated: !1,
                  cache: c.cache,
                  pendingSuspenseBoundaries: c.pendingSuspenseBoundaries,
                  transitions: c.transitions,
                }),
                (B.updateQueue.baseState = G),
                (B.memoizedState = G),
                B.flags & 256)
              ) {
                (l = Dg(Error(Y(423)), B)), (B = sQ(A, B, I, g, l));
                break A;
              } else if (I !== l) {
                (l = Dg(Error(Y(424)), B)), (B = sQ(A, B, I, g, l));
                break A;
              } else
                for (
                  HA = YB(B.stateNode.containerInfo.firstChild),
                    DA = B,
                    f = !0,
                    fA = null,
                    g = Jn(B, null, I, g),
                    B.child = g;
                  g;

                )
                  (g.flags = (g.flags & -3) | 4096), (g = g.sibling);
            else {
              if ((mg(), I === l)) {
                B = tB(A, B, g);
                break A;
              }
              EA(A, B, I, g);
            }
            B = B.child;
          }
          return B;
        case 5:
          return (
            Un(B),
            A === null && Nc(B),
            (I = B.type),
            (l = B.pendingProps),
            (G = A !== null ? A.memoizedProps : null),
            (c = l.children),
            rc(I, l) ? (c = null) : G !== null && rc(I, G) && (B.flags |= 32),
            uQ(A, B),
            EA(A, B, c, g),
            B.child
          );
        case 6:
          return A === null && Nc(B), null;
        case 13:
          return hQ(A, B, g);
        case 4:
          return (
            vc(B, B.stateNode.containerInfo),
            (I = B.pendingProps),
            A === null ? (B.child = pg(B, null, I, g)) : EA(A, B, I, g),
            B.child
          );
        case 11:
          return (
            (I = B.type),
            (l = B.pendingProps),
            (l = B.elementType === I ? l : TA(I, l)),
            oQ(A, B, I, l, g)
          );
        case 7:
          return EA(A, B, B.pendingProps, g), B.child;
        case 8:
          return EA(A, B, B.pendingProps.children, g), B.child;
        case 12:
          return EA(A, B, B.pendingProps.children, g), B.child;
        case 10:
          A: {
            if (
              ((I = B.type._context),
              (l = B.pendingProps),
              (G = B.memoizedProps),
              (c = l.value),
              U(rl, I._currentValue),
              (I._currentValue = c),
              G !== null)
            )
              if (LA(G.value, c)) {
                if (G.children === l.children && !sA.current) {
                  B = tB(A, B, g);
                  break A;
                }
              } else
                for (G = B.child, G !== null && (G.return = B); G !== null; ) {
                  var e = G.dependencies;
                  if (e !== null) {
                    c = G.child;
                    for (var a = e.firstContext; a !== null; ) {
                      if (a.context === I) {
                        if (G.tag === 1) {
                          (a = QB(-1, g & -g)), (a.tag = 2);
                          var Q = G.updateQueue;
                          if (Q !== null) {
                            Q = Q.shared;
                            var E = Q.pending;
                            E === null
                              ? (a.next = a)
                              : ((a.next = E.next), (E.next = a)),
                              (Q.pending = a);
                          }
                        }
                        (G.lanes |= g),
                          (a = G.alternate),
                          a !== null && (a.lanes |= g),
                          Xc(G.return, g, B),
                          (e.lanes |= g);
                        break;
                      }
                      a = a.next;
                    }
                  } else if (G.tag === 10)
                    c = G.type === B.type ? null : G.child;
                  else if (G.tag === 18) {
                    if (((c = G.return), c === null)) throw Error(Y(341));
                    (c.lanes |= g),
                      (e = c.alternate),
                      e !== null && (e.lanes |= g),
                      Xc(c, g, B),
                      (c = G.sibling);
                  } else c = G.child;
                  if (c !== null) c.return = G;
                  else
                    for (c = G; c !== null; ) {
                      if (c === B) {
                        c = null;
                        break;
                      }
                      if (((G = c.sibling), G !== null)) {
                        (G.return = c.return), (c = G);
                        break;
                      }
                      c = c.return;
                    }
                  G = c;
                }
            EA(A, B, l.children, g), (B = B.child);
          }
          return B;
        case 9:
          return (
            (l = B.type),
            (I = B.pendingProps.children),
            Ng(B, g),
            (l = kA(l)),
            (I = I(l)),
            (B.flags |= 1),
            EA(A, B, I, g),
            B.child
          );
        case 14:
          return (
            (I = B.type),
            (l = TA(I, B.pendingProps)),
            (l = TA(I.type, l)),
            EQ(A, B, I, l, g)
          );
        case 15:
          return ZQ(A, B, B.type, B.pendingProps, g);
        case 17:
          return (
            (I = B.type),
            (l = B.pendingProps),
            (l = B.elementType === I ? l : TA(I, l)),
            Hl(A, B),
            (B.tag = 1),
            hA(I) ? ((A = !0), ol(B)) : (A = !1),
            Ng(B, g),
            Vn(B, I, l),
            zc(B, I, l, g),
            Ae(null, B, I, !0, A, g)
          );
        case 19:
          return MQ(A, B, g);
        case 22:
          return iQ(A, B, g);
      }
      throw Error(Y(156, B.tag));
    };
    function PQ(A, B) {
      return Wa(A, B);
    }
    function qC(A, B, g, I) {
      (this.tag = A),
        (this.key = g),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = B),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = I),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
    }
    function jA(A, B, g, I) {
      return new qC(A, B, g, I);
    }
    function ue(A) {
      return (A = A.prototype), !(!A || !A.isReactComponent);
    }
    function $C(A) {
      if (typeof A == "function") return ue(A) ? 1 : 0;
      if (A != null) {
        if (((A = A.$$typeof), A === WG)) return 11;
        if (A === NG) return 14;
      }
      return 2;
    }
    function RB(A, B) {
      var g = A.alternate;
      return (
        g === null
          ? ((g = jA(A.tag, B, A.key, A.mode)),
            (g.elementType = A.elementType),
            (g.type = A.type),
            (g.stateNode = A.stateNode),
            (g.alternate = A),
            (A.alternate = g))
          : ((g.pendingProps = B),
            (g.type = A.type),
            (g.flags = 0),
            (g.subtreeFlags = 0),
            (g.deletions = null)),
        (g.flags = A.flags & 14680064),
        (g.childLanes = A.childLanes),
        (g.lanes = A.lanes),
        (g.child = A.child),
        (g.memoizedProps = A.memoizedProps),
        (g.memoizedState = A.memoizedState),
        (g.updateQueue = A.updateQueue),
        (B = A.dependencies),
        (g.dependencies =
          B === null ? null : { lanes: B.lanes, firstContext: B.firstContext }),
        (g.sibling = A.sibling),
        (g.index = A.index),
        (g.ref = A.ref),
        g
      );
    }
    function xl(A, B, g, I, l, G) {
      var c = 2;
      if (((I = A), typeof A == "function")) ue(A) && (c = 1);
      else if (typeof A == "string") c = 5;
      else
        A: switch (A) {
          case tg:
            return Ag(g.children, l, G, B);
          case YG:
            (c = 8), (l |= 8);
            break;
          case MG:
            return (
              (A = jA(12, g, B, l | 2)), (A.elementType = MG), (A.lanes = G), A
            );
          case mG:
            return (
              (A = jA(13, g, B, l)), (A.elementType = mG), (A.lanes = G), A
            );
          case yG:
            return (
              (A = jA(19, g, B, l)), (A.elementType = yG), (A.lanes = G), A
            );
          case ga:
            return Ll(g, l, G, B);
          default:
            if (typeof A == "object" && A !== null)
              switch (A.$$typeof) {
                case Aa:
                  c = 10;
                  break A;
                case Ba:
                  c = 9;
                  break A;
                case WG:
                  c = 11;
                  break A;
                case NG:
                  c = 14;
                  break A;
                case EB:
                  (c = 16), (I = null);
                  break A;
              }
            throw Error(Y(130, A == null ? A : typeof A, ""));
        }
      return (
        (B = jA(c, g, B, l)),
        (B.elementType = A),
        (B.type = I),
        (B.lanes = G),
        B
      );
    }
    function Ag(A, B, g, I) {
      return (A = jA(7, A, I, B)), (A.lanes = g), A;
    }
    function Ll(A, B, g, I) {
      return (
        (A = jA(22, A, I, B)),
        (A.elementType = ga),
        (A.lanes = g),
        (A.stateNode = { isHidden: !1 }),
        A
      );
    }
    function re(A, B, g) {
      return (A = jA(6, A, null, B)), (A.lanes = g), A;
    }
    function we(A, B, g) {
      return (
        (B = jA(4, A.children !== null ? A.children : [], A.key, B)),
        (B.lanes = g),
        (B.stateNode = {
          containerInfo: A.containerInfo,
          pendingChildren: null,
          implementation: A.implementation,
        }),
        B
      );
    }
    function Ab(A, B, g, I, l) {
      (this.tag = B),
        (this.containerInfo = A),
        (this.finishedWork =
          this.pingCache =
          this.current =
          this.pendingChildren =
            null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = OG(0)),
        (this.expirationTimes = OG(-1)),
        (this.entangledLanes =
          this.finishedLanes =
          this.mutableReadLanes =
          this.expiredLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = OG(0)),
        (this.identifierPrefix = I),
        (this.onRecoverableError = l),
        (this.mutableSourceEagerHydrationData = null);
    }
    function se(A, B, g, I, l, G, c, e, a) {
      return (
        (A = new Ab(A, B, g, e, a)),
        B === 1 ? ((B = 1), G === !0 && (B |= 8)) : (B = 0),
        (G = jA(3, null, null, B)),
        (A.current = G),
        (G.stateNode = A),
        (G.memoizedState = {
          element: I,
          isDehydrated: g,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null,
        }),
        Sc(G),
        A
      );
    }
    function Bb(A, B, g) {
      var I =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: Qg,
        key: I == null ? null : "" + I,
        children: A,
        containerInfo: B,
        implementation: g,
      };
    }
    function _Q(A) {
      if (!A) return WB;
      A = A._reactInternals;
      A: {
        if (UB(A) !== A || A.tag !== 1) throw Error(Y(170));
        var B = A;
        do {
          switch (B.tag) {
            case 3:
              B = B.stateNode.context;
              break A;
            case 1:
              if (hA(B.type)) {
                B = B.stateNode.__reactInternalMemoizedMergedChildContext;
                break A;
              }
          }
          B = B.return;
        } while (B !== null);
        throw Error(Y(171));
      }
      if (A.tag === 1) {
        var g = A.type;
        if (hA(g)) return hn(A, g, B);
      }
      return B;
    }
    function qQ(A, B, g, I, l, G, c, e, a) {
      return (
        (A = se(g, I, !0, A, l, G, c, e, a)),
        (A.context = _Q(null)),
        (g = A.current),
        (I = ZA()),
        (l = HB(g)),
        (G = QB(I, l)),
        (G.callback = B ?? null),
        NB(g, G, l),
        (A.current.lanes = l),
        $g(A, l, I),
        WA(A, I),
        A
      );
    }
    function fl(A, B, g, I) {
      var l = B.current,
        G = ZA(),
        c = HB(l);
      return (
        (g = _Q(g)),
        B.context === null ? (B.context = g) : (B.pendingContext = g),
        (B = QB(G, c)),
        (B.payload = { element: A }),
        (I = I === void 0 ? null : I),
        I !== null && (B.callback = I),
        (A = NB(l, B, c)),
        A !== null && (PA(A, l, c, G), sl(A, l, c)),
        c
      );
    }
    function Tl(A) {
      if (((A = A.current), !A.child)) return null;
      switch (A.child.tag) {
        case 5:
          return A.child.stateNode;
        default:
          return A.child.stateNode;
      }
    }
    function $Q(A, B) {
      if (((A = A.memoizedState), A !== null && A.dehydrated !== null)) {
        var g = A.retryLane;
        A.retryLane = g !== 0 && g < B ? g : B;
      }
    }
    function he(A, B) {
      $Q(A, B), (A = A.alternate) && $Q(A, B);
    }
    function gb() {
      return null;
    }
    var At =
      typeof reportError == "function"
        ? reportError
        : function (A) {
            console.error(A);
          };
    function Ye(A) {
      this._internalRoot = A;
    }
    (Kl.prototype.render = Ye.prototype.render =
      function (A) {
        var B = this._internalRoot;
        if (B === null) throw Error(Y(409));
        fl(A, B, null, null);
      }),
      (Kl.prototype.unmount = Ye.prototype.unmount =
        function () {
          var A = this._internalRoot;
          if (A !== null) {
            this._internalRoot = null;
            var B = A.containerInfo;
            _B(function () {
              fl(null, A, null, null);
            }),
              (B[GB] = null);
          }
        });
    function Kl(A) {
      this._internalRoot = A;
    }
    Kl.prototype.unstable_scheduleHydration = function (A) {
      if (A) {
        var B = Xa();
        A = { blockedOn: null, target: A, priority: B };
        for (var g = 0; g < wB.length && B !== 0 && B < wB[g].priority; g++);
        wB.splice(g, 0, A), g === 0 && Va(A);
      }
    };
    function Me(A) {
      return !(
        !A ||
        (A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11)
      );
    }
    function Ol(A) {
      return !(
        !A ||
        (A.nodeType !== 1 &&
          A.nodeType !== 9 &&
          A.nodeType !== 11 &&
          (A.nodeType !== 8 || A.nodeValue !== " react-mount-point-unstable "))
      );
    }
    function Bt() {}
    function Ib(A, B, g, I, l) {
      if (l) {
        if (typeof I == "function") {
          var G = I;
          I = function () {
            var Q = Tl(c);
            G.call(Q);
          };
        }
        var c = qQ(B, I, A, 0, null, !1, !1, "", Bt);
        return (
          (A._reactRootContainer = c),
          (A[GB] = c.current),
          CI(A.nodeType === 8 ? A.parentNode : A),
          _B(),
          c
        );
      }
      for (; (l = A.lastChild); ) A.removeChild(l);
      if (typeof I == "function") {
        var e = I;
        I = function () {
          var Q = Tl(a);
          e.call(Q);
        };
      }
      var a = se(A, 0, !1, null, null, !1, !1, "", Bt);
      return (
        (A._reactRootContainer = a),
        (A[GB] = a.current),
        CI(A.nodeType === 8 ? A.parentNode : A),
        _B(function () {
          fl(B, a, g, I);
        }),
        a
      );
    }
    function Pl(A, B, g, I, l) {
      var G = g._reactRootContainer;
      if (G) {
        var c = G;
        if (typeof l == "function") {
          var e = l;
          l = function () {
            var a = Tl(c);
            e.call(a);
          };
        }
        fl(B, c, A, l);
      } else c = Ib(g, B, A, l, I);
      return Tl(c);
    }
    (Da = function (A) {
      switch (A.tag) {
        case 3:
          var B = A.stateNode;
          if (B.current.memoizedState.isDehydrated) {
            var g = qg(B.pendingLanes);
            g !== 0 &&
              (PG(B, g | 1), WA(B, q()), !(v & 6) && ((Rg = q() + 500), mB()));
          }
          break;
        case 13:
          _B(function () {
            var I = nB(A, 1);
            if (I !== null) {
              var l = ZA();
              PA(I, A, 1, l);
            }
          }),
            he(A, 1);
      }
    }),
      (_G = function (A) {
        if (A.tag === 13) {
          var B = nB(A, 134217728);
          if (B !== null) {
            var g = ZA();
            PA(B, A, 134217728, g);
          }
          he(A, 134217728);
        }
      }),
      (Ha = function (A) {
        if (A.tag === 13) {
          var B = HB(A),
            g = nB(A, B);
          if (g !== null) {
            var I = ZA();
            PA(g, A, B, I);
          }
          he(A, B);
        }
      }),
      (Xa = function () {
        return k;
      }),
      (Ra = function (A, B) {
        var g = k;
        try {
          return (k = A), B();
        } finally {
          k = g;
        }
      }),
      (jG = function (A, B, g) {
        switch (B) {
          case "input":
            if ((RG(A, g), (B = g.name), g.type === "radio" && B != null)) {
              for (g = A; g.parentNode; ) g = g.parentNode;
              for (
                g = g.querySelectorAll(
                  "input[name=" + JSON.stringify("" + B) + '][type="radio"]'
                ),
                  B = 0;
                B < g.length;
                B++
              ) {
                var I = g[B];
                if (I !== A && I.form === A.form) {
                  var l = Cl(I);
                  if (!l) throw Error(Y(90));
                  Ga(I), RG(I, l);
                }
              }
            }
            break;
          case "textarea":
            Qa(A, g);
            break;
          case "select":
            (B = g.value), B != null && dg(A, !!g.multiple, B, !1);
        }
      }),
      (ua = Ee),
      (ra = _B);
    var lb = { usingClientEntryPoint: !1, Events: [EI, sg, Cl, Za, ia, Ee] },
      pI = {
        findFiberByHostInstance: jB,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom",
      },
      Gb = {
        bundleType: pI.bundleType,
        version: pI.version,
        rendererPackageName: pI.rendererPackageName,
        rendererConfig: pI.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: lB.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (A) {
          return (A = Ya(A)), A === null ? null : A.stateNode;
        },
        findFiberByHostInstance: pI.findFiberByHostInstance || gb,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
      };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var _l = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!_l.isDisabled && _l.supportsFiber)
        try {
          (KI = _l.inject(Gb)), (qA = _l);
        } catch {}
    }
    (NA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lb),
      (NA.createPortal = function (A, B) {
        var g =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!Me(B)) throw Error(Y(200));
        return Bb(A, B, null, g);
      }),
      (NA.createRoot = function (A, B) {
        if (!Me(A)) throw Error(Y(299));
        var g = !1,
          I = "",
          l = At;
        return (
          B != null &&
            (B.unstable_strictMode === !0 && (g = !0),
            B.identifierPrefix !== void 0 && (I = B.identifierPrefix),
            B.onRecoverableError !== void 0 && (l = B.onRecoverableError)),
          (B = se(A, 1, !1, null, null, g, !1, I, l)),
          (A[GB] = B.current),
          CI(A.nodeType === 8 ? A.parentNode : A),
          new Ye(B)
        );
      }),
      (NA.findDOMNode = function (A) {
        if (A == null) return null;
        if (A.nodeType === 1) return A;
        var B = A._reactInternals;
        if (B === void 0)
          throw typeof A.render == "function"
            ? Error(Y(188))
            : ((A = Object.keys(A).join(",")), Error(Y(268, A)));
        return (A = Ya(B)), (A = A === null ? null : A.stateNode), A;
      }),
      (NA.flushSync = function (A) {
        return _B(A);
      }),
      (NA.hydrate = function (A, B, g) {
        if (!Ol(B)) throw Error(Y(200));
        return Pl(null, A, B, !0, g);
      }),
      (NA.hydrateRoot = function (A, B, g) {
        if (!Me(A)) throw Error(Y(405));
        var I = (g != null && g.hydratedSources) || null,
          l = !1,
          G = "",
          c = At;
        if (
          (g != null &&
            (g.unstable_strictMode === !0 && (l = !0),
            g.identifierPrefix !== void 0 && (G = g.identifierPrefix),
            g.onRecoverableError !== void 0 && (c = g.onRecoverableError)),
          (B = qQ(B, null, A, 1, g ?? null, l, !1, G, c)),
          (A[GB] = B.current),
          CI(A),
          I)
        )
          for (A = 0; A < I.length; A++)
            (g = I[A]),
              (l = g._getVersion),
              (l = l(g._source)),
              B.mutableSourceEagerHydrationData == null
                ? (B.mutableSourceEagerHydrationData = [g, l])
                : B.mutableSourceEagerHydrationData.push(g, l);
        return new Kl(B);
      }),
      (NA.render = function (A, B, g) {
        if (!Ol(B)) throw Error(Y(200));
        return Pl(null, A, B, !1, g);
      }),
      (NA.unmountComponentAtNode = function (A) {
        if (!Ol(A)) throw Error(Y(40));
        return A._reactRootContainer
          ? (_B(function () {
              Pl(null, null, A, !1, function () {
                (A._reactRootContainer = null), (A[GB] = null);
              });
            }),
            !0)
          : !1;
      }),
      (NA.unstable_batchedUpdates = Ee),
      (NA.unstable_renderSubtreeIntoContainer = function (A, B, g, I) {
        if (!Ol(g)) throw Error(Y(200));
        if (A == null || A._reactInternals === void 0) throw Error(Y(38));
        return Pl(A, B, g, !1, I);
      }),
      (NA.version = "18.2.0-next-9e3b772b8-20220608");
    function gt() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gt);
        } catch (A) {
          console.error(A);
        }
    }
    gt(), (Te.exports = NA);
    var cb = Te.exports,
      It = cb;
    (uG.createRoot = It.createRoot), (uG.hydrateRoot = It.hydrateRoot);
    var lt = { exports: {} };
    (function (A) {
      (function () {
        var B = {}.hasOwnProperty;
        function g() {
          for (var I = [], l = 0; l < arguments.length; l++) {
            var G = arguments[l];
            if (G) {
              var c = typeof G;
              if (c === "string" || c === "number") I.push(G);
              else if (Array.isArray(G)) {
                if (G.length) {
                  var e = g.apply(null, G);
                  e && I.push(e);
                }
              } else if (c === "object") {
                if (
                  G.toString !== Object.prototype.toString &&
                  !G.toString.toString().includes("[native code]")
                ) {
                  I.push(G.toString());
                  continue;
                }
                for (var a in G) B.call(G, a) && G[a] && I.push(a);
              }
            }
          }
          return I.join(" ");
        }
        A.exports
          ? ((g.default = g), (A.exports = g))
          : (window.classNames = g);
      })();
    })(lt);
    var eb = lt.exports;
    const We = SI(eb);
    function mA() {
      return (
        (mA = Object.assign
          ? Object.assign.bind()
          : function (A) {
              for (var B = 1; B < arguments.length; B++) {
                var g = arguments[B];
                for (var I in g)
                  Object.prototype.hasOwnProperty.call(g, I) && (A[I] = g[I]);
              }
              return A;
            }),
        mA.apply(this, arguments)
      );
    }
    function Vg(A, B, { checkForDefaultPrevented: g = !0 } = {}) {
      return function (I) {
        if ((A == null || A(I), g === !1 || !I.defaultPrevented))
          return B == null ? void 0 : B(I);
      };
    }
    function ab(A, B) {
      typeof A == "function" ? A(B) : A != null && (A.current = B);
    }
    function Gt(...A) {
      return (B) => A.forEach((g) => ab(g, B));
    }
    function SB(...A) {
      return Z.useCallback(Gt(...A), A);
    }
    function ql(A, B = []) {
      let g = [];
      function I(G, c) {
        const e = Z.createContext(c),
          a = g.length;
        g = [...g, c];
        function Q(b) {
          const { scope: o, children: u, ...r } = b,
            s = (o == null ? void 0 : o[A][a]) || e,
            H = Z.useMemo(() => r, Object.values(r));
          return Z.createElement(s.Provider, { value: H }, u);
        }
        function E(b, o) {
          const u = (o == null ? void 0 : o[A][a]) || e,
            r = Z.useContext(u);
          if (r) return r;
          if (c !== void 0) return c;
          throw new Error(`\`${b}\` must be used within \`${G}\``);
        }
        return (Q.displayName = G + "Provider"), [Q, E];
      }
      const l = () => {
        const G = g.map((c) => Z.createContext(c));
        return function (c) {
          const e = (c == null ? void 0 : c[A]) || G;
          return Z.useMemo(
            () => ({ [`__scope${A}`]: { ...c, [A]: e } }),
            [c, e]
          );
        };
      };
      return (l.scopeName = A), [I, nb(l, ...B)];
    }
    function nb(...A) {
      const B = A[0];
      if (A.length === 1) return B;
      const g = () => {
        const I = A.map((l) => ({ useScope: l(), scopeName: l.scopeName }));
        return function (l) {
          const G = I.reduce((c, { useScope: e, scopeName: a }) => {
            const Q = e(l)[`__scope${a}`];
            return { ...c, ...Q };
          }, {});
          return Z.useMemo(() => ({ [`__scope${B.scopeName}`]: G }), [G]);
        };
      };
      return (g.scopeName = B.scopeName), g;
    }
    const FI = Z.forwardRef((A, B) => {
      const { children: g, ...I } = A,
        l = Z.Children.toArray(g),
        G = l.find(tb);
      if (G) {
        const c = G.props.children,
          e = l.map((a) =>
            a === G
              ? Z.Children.count(c) > 1
                ? Z.Children.only(null)
                : Z.isValidElement(c)
                ? c.props.children
                : null
              : a
          );
        return Z.createElement(
          me,
          mA({}, I, { ref: B }),
          Z.isValidElement(c) ? Z.cloneElement(c, void 0, e) : null
        );
      }
      return Z.createElement(me, mA({}, I, { ref: B }), g);
    });
    FI.displayName = "Slot";
    const me = Z.forwardRef((A, B) => {
      const { children: g, ...I } = A;
      return Z.isValidElement(g)
        ? Z.cloneElement(g, {
            ...db(I, g.props),
            ref: B ? Gt(B, g.ref) : g.ref,
          })
        : Z.Children.count(g) > 1
        ? Z.Children.only(null)
        : null;
    });
    me.displayName = "SlotClone";
    const Qb = ({ children: A }) => Z.createElement(Z.Fragment, null, A);
    function tb(A) {
      return Z.isValidElement(A) && A.type === Qb;
    }
    function db(A, B) {
      const g = { ...B };
      for (const I in B) {
        const l = A[I],
          G = B[I];
        /^on[A-Z]/.test(I)
          ? l && G
            ? (g[I] = (...c) => {
                G(...c), l(...c);
              })
            : l && (g[I] = l)
          : I === "style"
          ? (g[I] = { ...l, ...G })
          : I === "className" && (g[I] = [l, G].filter(Boolean).join(" "));
      }
      return { ...A, ...g };
    }
    const Cb = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "span",
        "svg",
        "ul",
      ],
      $l = Cb.reduce((A, B) => {
        const g = Z.forwardRef((I, l) => {
          const { asChild: G, ...c } = I,
            e = G ? FI : B;
          return (
            Z.useEffect(() => {
              window[Symbol.for("radix-ui")] = !0;
            }, []),
            Z.createElement(e, mA({}, c, { ref: l }))
          );
        });
        return (g.displayName = `Primitive.${B}`), { ...A, [B]: g };
      }, {});
    function ct(A) {
      const B = Z.useRef(A);
      return (
        Z.useEffect(() => {
          B.current = A;
        }),
        Z.useMemo(
          () =>
            (...g) => {
              var I;
              return (I = B.current) === null || I === void 0
                ? void 0
                : I.call(B, ...g);
            },
          []
        )
      );
    }
    const bb =
      globalThis != null && globalThis.document ? Z.useLayoutEffect : () => {};
    function ob(A) {
      const [B, g] = Z.useState(void 0);
      return (
        bb(() => {
          if (A) {
            g({ width: A.offsetWidth, height: A.offsetHeight });
            const I = new ResizeObserver((l) => {
              if (!Array.isArray(l) || !l.length) return;
              const G = l[0];
              let c, e;
              if ("borderBoxSize" in G) {
                const a = G.borderBoxSize,
                  Q = Array.isArray(a) ? a[0] : a;
                (c = Q.inlineSize), (e = Q.blockSize);
              } else (c = A.offsetWidth), (e = A.offsetHeight);
              g({ width: c, height: e });
            });
            return I.observe(A, { box: "border-box" }), () => I.unobserve(A);
          } else g(void 0);
        }, [A]),
        B
      );
    }
    const et = "Popper",
      [at, nt] = ql(et);
    at(et), at("PopperContent");
    function Eb({ prop: A, defaultProp: B, onChange: g = () => {} }) {
      const [I, l] = Zb({ defaultProp: B, onChange: g }),
        G = A !== void 0,
        c = G ? A : I,
        e = ct(g),
        a = Z.useCallback(
          (Q) => {
            if (G) {
              const E = typeof Q == "function" ? Q(A) : Q;
              E !== A && e(E);
            } else l(Q);
          },
          [G, A, l, e]
        );
      return [c, a];
    }
    function Zb({ defaultProp: A, onChange: B }) {
      const g = Z.useState(A),
        [I] = g,
        l = Z.useRef(I),
        G = ct(B);
      return (
        Z.useEffect(() => {
          l.current !== I && (G(I), (l.current = I));
        }, [I, l, G]),
        g
      );
    }
    const [AG, bu] = ql("Tooltip", [nt]);
    nt();
    const ib = "TooltipProvider",
      ub = 700,
      [rb, ou] = AG(ib),
      wb = (A) => {
        const {
            __scopeTooltip: B,
            delayDuration: g = ub,
            skipDelayDuration: I = 300,
            disableHoverableContent: l = !1,
            children: G,
          } = A,
          [c, e] = Z.useState(!0),
          a = Z.useRef(!1),
          Q = Z.useRef(0);
        return (
          Z.useEffect(() => {
            const E = Q.current;
            return () => window.clearTimeout(E);
          }, []),
          Z.createElement(
            rb,
            {
              scope: B,
              isOpenDelayed: c,
              delayDuration: g,
              onOpen: Z.useCallback(() => {
                window.clearTimeout(Q.current), e(!1);
              }, []),
              onClose: Z.useCallback(() => {
                window.clearTimeout(Q.current),
                  (Q.current = window.setTimeout(() => e(!0), I));
              }, [I]),
              isPointerInTransitRef: a,
              onPointerInTransitChange: Z.useCallback((E) => {
                a.current = E;
              }, []),
              disableHoverableContent: l,
            },
            G
          )
        );
      },
      Qt = "Tooltip";
    AG(Qt),
      AG("TooltipPortal", { forceMount: void 0 }),
      AG(Qt, { isInside: !1 });
    const sb = wb,
      tt = Z.createContext(void 0),
      hb = (A) => {
        const { dir: B, children: g } = A;
        return Z.createElement(tt.Provider, { value: B }, g);
      };
    function Yb(A) {
      const B = Z.useContext(tt);
      return A || B || "ltr";
    }
    const Mb = [
        "tomato",
        "red",
        "ruby",
        "crimson",
        "pink",
        "plum",
        "purple",
        "violet",
        "iris",
        "indigo",
        "blue",
        "cyan",
        "teal",
        "jade",
        "green",
        "grass",
        "brown",
        "orange",
      ],
      Wb = ["sky", "mint", "lime", "yellow", "amber"],
      mb = ["gold", "bronze"],
      yb = [...Mb, ...Wb, ...mb],
      Nb = "gray",
      pb = ["mauve", "slate", "sage", "olive", "sand"],
      Fb = [Nb, ...pb];
    function Db(A) {
      switch (A) {
        case "tomato":
        case "red":
        case "ruby":
        case "crimson":
        case "pink":
        case "plum":
        case "purple":
        case "violet":
          return "mauve";
        case "iris":
        case "indigo":
        case "blue":
        case "sky":
        case "cyan":
          return "slate";
        case "teal":
        case "jade":
        case "mint":
        case "green":
          return "sage";
        case "grass":
        case "lime":
          return "olive";
        case "yellow":
        case "amber":
        case "orange":
        case "brown":
        case "gold":
        case "bronze":
          return "sand";
      }
    }
    const Hb = ["inherit", "light", "dark"],
      Xb = [...yb, "gray"],
      Rb = [...Fb, "auto"],
      Sb = ["solid", "translucent"],
      Vb = ["none", "small", "medium", "large", "full"],
      zb = ["90%", "95%", "100%", "105%", "110%"],
      iA = {
        hasBackground: { type: "boolean", default: !0 },
        appearance: { type: "enum", values: Hb, default: "inherit" },
        accentColor: { type: "enum", values: Xb, default: "indigo" },
        grayColor: { type: "enum", values: Rb, default: "auto" },
        panelBackground: { type: "enum", values: Sb, default: "translucent" },
        radius: { type: "enum", values: Vb, default: "medium" },
        scaling: { type: "enum", values: zb, default: "100%" },
      };
    function dt(A) {
      return A === "gray" ? "gray" : Db(A);
    }
    const zg = () => {},
      ye = Z.createContext(void 0),
      Ct = Z.forwardRef((A, B) =>
        Z.useContext(ye) === void 0
          ? Z.createElement(
              sb,
              null,
              Z.createElement(
                hb,
                { dir: "ltr" },
                Z.createElement(bt, { ...A, ref: B })
              )
            )
          : Z.createElement(Ne, { ...A, ref: B })
      );
    Ct.displayName = "Theme";
    const bt = Z.forwardRef((A, B) => {
      const {
          appearance: g = iA.appearance.default,
          accentColor: I = iA.accentColor.default,
          grayColor: l = iA.grayColor.default,
          panelBackground: G = iA.panelBackground.default,
          radius: c = iA.radius.default,
          scaling: e = iA.scaling.default,
          hasBackground: a = iA.hasBackground.default,
          ...Q
        } = A,
        [E, b] = Z.useState(g);
      Z.useEffect(() => b(g), [g]);
      const [o, u] = Z.useState(I);
      Z.useEffect(() => u(I), [I]);
      const [r, s] = Z.useState(l);
      Z.useEffect(() => s(l), [l]);
      const [H, d] = Z.useState(G);
      Z.useEffect(() => d(G), [G]);
      const [t, C] = Z.useState(c);
      Z.useEffect(() => C(c), [c]);
      const [w, M] = Z.useState(e);
      Z.useEffect(() => M(e), [e]);
      const N = Z.memo(
        ({ appearance: X }) =>
          Z.createElement("script", {
            dangerouslySetInnerHTML: {
              __html: `!(function(){try{var d=document.documentElement,c=d.classList;c.remove('light','dark');d.style.colorScheme='${X}';c.add('${X}');}catch(e){}})();`,
            },
          }),
        () => !0
      );
      (N.displayName = "ExplicitRootAppearanceScript"),
        Z.useEffect(() => vb(g), [g]);
      const m = r === "auto" ? dt(o) : r;
      return Z.createElement(
        Z.Fragment,
        null,
        E !== "inherit" && Z.createElement(N, { appearance: E }),
        a &&
          Z.createElement("style", {
            dangerouslySetInnerHTML: {
              __html: `
:root, .light, .light-theme { --color-page-background: white; }
.dark, .dark-theme { --color-page-background: var(--${m}-1); }
body { background-color: var(--color-page-background); }
`,
            },
          }),
        Z.createElement(Ne, {
          ...Q,
          ref: B,
          isRoot: !0,
          hasBackground: a,
          appearance: E,
          accentColor: o,
          grayColor: r,
          panelBackground: H,
          radius: t,
          scaling: w,
          onAppearanceChange: b,
          onAccentColorChange: u,
          onGrayColorChange: s,
          onPanelBackgroundChange: d,
          onRadiusChange: C,
          onScalingChange: M,
        })
      );
    });
    bt.displayName = "ThemeRoot";
    const Ne = Z.forwardRef((A, B) => {
      var g, I, l, G, c, e;
      const a = Z.useContext(ye),
        {
          asChild: Q,
          isRoot: E,
          hasBackground: b,
          appearance: o = (g = a == null ? void 0 : a.appearance) !== null &&
          g !== void 0
            ? g
            : iA.appearance.default,
          accentColor: u = (I = a == null ? void 0 : a.accentColor) !== null &&
          I !== void 0
            ? I
            : iA.accentColor.default,
          grayColor: r = (l = a == null ? void 0 : a.resolvedGrayColor) !==
            null && l !== void 0
            ? l
            : iA.grayColor.default,
          panelBackground: s = (G = a == null ? void 0 : a.panelBackground) !==
            null && G !== void 0
            ? G
            : iA.panelBackground.default,
          radius: H = (c = a == null ? void 0 : a.radius) !== null &&
          c !== void 0
            ? c
            : iA.radius.default,
          scaling: d = (e = a == null ? void 0 : a.scaling) !== null &&
          e !== void 0
            ? e
            : iA.scaling.default,
          onAppearanceChange: t = zg,
          onAccentColorChange: C = zg,
          onGrayColorChange: w = zg,
          onPanelBackgroundChange: M = zg,
          onRadiusChange: N = zg,
          onScalingChange: m = zg,
          ...X
        } = A,
        j = Q ? FI : "div",
        V = r === "auto" ? dt(u) : r,
        rA = A.appearance !== void 0 && A.appearance !== "inherit",
        oB = A.grayColor !== void 0,
        SA = !E && (b === !0 || (b !== !1 && (rA || oB)));
      return Z.createElement(
        ye.Provider,
        {
          value: Z.useMemo(
            () => ({
              appearance: o,
              accentColor: u,
              grayColor: r,
              resolvedGrayColor: V,
              panelBackground: s,
              radius: H,
              scaling: d,
              onAppearanceChange: t,
              onAccentColorChange: C,
              onGrayColorChange: w,
              onPanelBackgroundChange: M,
              onRadiusChange: N,
              onScalingChange: m,
            }),
            [o, u, r, V, s, H, d, t, C, w, M, N, m]
          ),
        },
        Z.createElement(j, {
          "data-is-root-theme": E ? "true" : "false",
          "data-accent-color": u,
          "data-gray-color": V,
          "data-has-background": SA ? "true" : "false",
          "data-panel-background": s,
          "data-radius": H,
          "data-scaling": d,
          ref: B,
          ...X,
          className: We(
            "radix-themes",
            { light: !E && o === "light", dark: !E && o === "dark" },
            X.className
          ),
        })
      );
    });
    Ne.displayName = "ThemeImpl";
    function vb(A) {
      if (A === "inherit") return;
      const B = document.documentElement;
      (B.classList.contains("light-theme") ||
        B.classList.contains("dark-theme")) &&
        (B.classList.remove("light-theme", "dark-theme"),
        (B.style.colorScheme = A),
        B.classList.add(`${A}-theme`)),
        (B.classList.contains("light") || B.classList.contains("dark")) &&
          (B.classList.remove("light", "dark"),
          (B.style.colorScheme = A),
          B.classList.add(A));
    }
    const kb = { type: "enum", values: iA.accentColor.values, default: void 0 },
      Jb = { type: "boolean", default: void 0 };
    function VB(A, B = "", g) {
      var I, l, G, c;
      const e = [];
      if (typeof A == "object") {
        for (const a of Object.keys(A))
          if (a in A) {
            const Q =
                (I = A[a]) === null || I === void 0 ? void 0 : I.toString(),
              E = Q == null ? void 0 : Q.startsWith("-"),
              b = B === "" ? "" : "-",
              o = E ? `-${B}` : B,
              u = E ? (Q == null ? void 0 : Q.substring(1)) : Q;
            if (u === void 0) continue;
            const r =
                (l = g == null ? void 0 : g[u]) !== null && l !== void 0
                  ? l
                  : u,
              s = a === "initial" ? `${o}${b}${r}` : `${a}:${o}${b}${r}`;
            e.push(s);
          }
      }
      if (typeof A == "string") {
        const a = A.startsWith("-"),
          Q = B === "" ? "" : "-",
          E = a ? `-${B}` : B,
          b = a ? A.substring(1) : A,
          o = (G = g == null ? void 0 : g[b]) !== null && G !== void 0 ? G : b;
        e.push(`${E}${Q}${o}`);
      }
      if (typeof A == "boolean") {
        const a = B === "" ? "" : "-",
          Q = A.toString(),
          E = (c = g == null ? void 0 : g[Q]) !== null && c !== void 0 ? c : Q;
        e.push(`${B}${a}${E}`);
      }
      return e.join(" ");
    }
    const Bg = [
        "auto",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "-1",
        "-2",
        "-3",
        "-4",
        "-5",
        "-6",
        "-7",
        "-8",
        "-9",
      ],
      gg = {
        m: { type: "enum", values: Bg, default: void 0, responsive: !0 },
        mx: { type: "enum", values: Bg, default: void 0, responsive: !0 },
        my: { type: "enum", values: Bg, default: void 0, responsive: !0 },
        mt: { type: "enum", values: Bg, default: void 0, responsive: !0 },
        mr: { type: "enum", values: Bg, default: void 0, responsive: !0 },
        mb: { type: "enum", values: Bg, default: void 0, responsive: !0 },
        ml: { type: "enum", values: Bg, default: void 0, responsive: !0 },
      };
    function Ub(A) {
      const {
        m: B = gg.m.default,
        mx: g = gg.mx.default,
        my: I = gg.my.default,
        mt: l = gg.mt.default,
        mr: G = gg.mr.default,
        mb: c = gg.mb.default,
        ml: e = gg.ml.default,
        ...a
      } = A;
      return { m: B, mx: g, my: I, mt: l, mr: G, mb: c, ml: e, rest: a };
    }
    function jb(A) {
      return [
        VB(A.m, "rt-r-m"),
        VB(A.mx, "rt-r-mx"),
        VB(A.my, "rt-r-my"),
        VB(A.mt, "rt-r-mt"),
        VB(A.mr, "rt-r-mr"),
        VB(A.mb, "rt-r-mb"),
        VB(A.ml, "rt-r-ml"),
      ]
        .filter(Boolean)
        .join(" ");
    }
    const xb = { type: "enum", values: iA.radius.values, default: void 0 };
    function Lb(A) {
      const B = Z.useRef({ value: A, previous: A });
      return Z.useMemo(
        () => (
          B.current.value !== A &&
            ((B.current.previous = B.current.value), (B.current.value = A)),
          B.current.previous
        ),
        [A]
      );
    }
    function fb(A) {
      const B = A + "CollectionProvider",
        [g, I] = ql(B),
        [l, G] = g(B, { collectionRef: { current: null }, itemMap: new Map() }),
        c = (u) => {
          const { scope: r, children: s } = u,
            H = _A.useRef(null),
            d = _A.useRef(new Map()).current;
          return _A.createElement(
            l,
            { scope: r, itemMap: d, collectionRef: H },
            s
          );
        },
        e = A + "CollectionSlot",
        a = _A.forwardRef((u, r) => {
          const { scope: s, children: H } = u,
            d = G(e, s),
            t = SB(r, d.collectionRef);
          return _A.createElement(FI, { ref: t }, H);
        }),
        Q = A + "CollectionItemSlot",
        E = "data-radix-collection-item",
        b = _A.forwardRef((u, r) => {
          const { scope: s, children: H, ...d } = u,
            t = _A.useRef(null),
            C = SB(r, t),
            w = G(Q, s);
          return (
            _A.useEffect(
              () => (
                w.itemMap.set(t, { ref: t, ...d }),
                () => void w.itemMap.delete(t)
              )
            ),
            _A.createElement(FI, { [E]: "", ref: C }, H)
          );
        });
      function o(u) {
        const r = G(A + "CollectionConsumer", u);
        return _A.useCallback(() => {
          const s = r.collectionRef.current;
          if (!s) return [];
          const H = Array.from(s.querySelectorAll(`[${E}]`));
          return Array.from(r.itemMap.values()).sort(
            (d, t) => H.indexOf(d.ref.current) - H.indexOf(t.ref.current)
          );
        }, [r.collectionRef, r.itemMap]);
      }
      return [{ Provider: c, Slot: a, ItemSlot: b }, o, I];
    }
    function ot(A, [B, g]) {
      return Math.min(g, Math.max(B, A));
    }
    const Et = ["PageUp", "PageDown"],
      Zt = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
      it = {
        "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
        "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
        "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
        "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"],
      },
      DI = "Slider",
      [pe, Tb, Kb] = fb(DI),
      [ut, Zu] = ql(DI, [Kb]),
      [Ob, BG] = ut(DI),
      Pb = Z.forwardRef((A, B) => {
        const {
            name: g,
            min: I = 0,
            max: l = 100,
            step: G = 1,
            orientation: c = "horizontal",
            disabled: e = !1,
            minStepsBetweenThumbs: a = 0,
            defaultValue: Q = [I],
            value: E,
            onValueChange: b = () => {},
            onValueCommit: o = () => {},
            inverted: u = !1,
            ...r
          } = A,
          [s, H] = Z.useState(null),
          d = SB(B, ($) => H($)),
          t = Z.useRef(new Set()),
          C = Z.useRef(0),
          w = c === "horizontal",
          M = s ? !!s.closest("form") : !0,
          N = w ? _b : qb,
          [m = [], X] = Eb({
            prop: E,
            defaultProp: Q,
            onChange: ($) => {
              var VA;
              (VA = [...t.current][C.current]) === null ||
                VA === void 0 ||
                VA.focus(),
                b($);
            },
          }),
          j = Z.useRef(m);
        function V($) {
          const VA = eo(m, $);
          SA($, VA);
        }
        function rA($) {
          SA($, C.current);
        }
        function oB() {
          const $ = j.current[C.current];
          m[C.current] !== $ && o(m);
        }
        function SA($, VA, { commit: Gg } = { commit: !1 }) {
          const vB = to(G),
            F = Co(Math.round(($ - I) / G) * G + I, vB),
            R = ot(F, [I, l]);
          X((S = []) => {
            const J = Go(S, R, VA);
            if (Qo(J, a * G)) {
              C.current = J.indexOf(R);
              const AA = String(J) !== String(S);
              return AA && Gg && o(J), AA ? J : S;
            } else return S;
          });
        }
        return Z.createElement(
          Ob,
          {
            scope: A.__scopeSlider,
            disabled: e,
            min: I,
            max: l,
            valueIndexToChangeRef: C,
            thumbs: t.current,
            values: m,
            orientation: c,
          },
          Z.createElement(
            pe.Provider,
            { scope: A.__scopeSlider },
            Z.createElement(
              pe.Slot,
              { scope: A.__scopeSlider },
              Z.createElement(
                N,
                mA(
                  { "aria-disabled": e, "data-disabled": e ? "" : void 0 },
                  r,
                  {
                    ref: d,
                    onPointerDown: Vg(r.onPointerDown, () => {
                      e || (j.current = m);
                    }),
                    min: I,
                    max: l,
                    inverted: u,
                    onSlideStart: e ? void 0 : V,
                    onSlideMove: e ? void 0 : rA,
                    onSlideEnd: e ? void 0 : oB,
                    onHomeKeyDown: () => !e && SA(I, 0, { commit: !0 }),
                    onEndKeyDown: () =>
                      !e && SA(l, m.length - 1, { commit: !0 }),
                    onStepKeyDown: ({ event: $, direction: VA }) => {
                      if (!e) {
                        const Gg =
                            Et.includes($.key) ||
                            ($.shiftKey && Zt.includes($.key))
                              ? 10
                              : 1,
                          vB = C.current,
                          F = m[vB],
                          R = G * Gg * VA;
                        SA(F + R, vB, { commit: !0 });
                      }
                    },
                  }
                )
              )
            )
          ),
          M &&
            m.map(($, VA) =>
              Z.createElement(lo, {
                key: VA,
                name: g ? g + (m.length > 1 ? "[]" : "") : void 0,
                value: $,
              })
            )
        );
      }),
      [rt, wt] = ut(DI, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1,
      }),
      _b = Z.forwardRef((A, B) => {
        const {
            min: g,
            max: I,
            dir: l,
            inverted: G,
            onSlideStart: c,
            onSlideMove: e,
            onSlideEnd: a,
            onStepKeyDown: Q,
            ...E
          } = A,
          [b, o] = Z.useState(null),
          u = SB(B, (C) => o(C)),
          r = Z.useRef(),
          s = Yb(l),
          H = s === "ltr",
          d = (H && !G) || (!H && G);
        function t(C) {
          const w = r.current || b.getBoundingClientRect(),
            M = [0, w.width],
            N = Fe(M, d ? [g, I] : [I, g]);
          return (r.current = w), N(C - w.left);
        }
        return Z.createElement(
          rt,
          {
            scope: A.__scopeSlider,
            startEdge: d ? "left" : "right",
            endEdge: d ? "right" : "left",
            direction: d ? 1 : -1,
            size: "width",
          },
          Z.createElement(
            st,
            mA({ dir: s, "data-orientation": "horizontal" }, E, {
              ref: u,
              style: {
                ...E.style,
                "--radix-slider-thumb-transform": "translateX(-50%)",
              },
              onSlideStart: (C) => {
                const w = t(C.clientX);
                c == null || c(w);
              },
              onSlideMove: (C) => {
                const w = t(C.clientX);
                e == null || e(w);
              },
              onSlideEnd: () => {
                (r.current = void 0), a == null || a();
              },
              onStepKeyDown: (C) => {
                const w = it[d ? "from-left" : "from-right"].includes(C.key);
                Q == null || Q({ event: C, direction: w ? -1 : 1 });
              },
            })
          )
        );
      }),
      qb = Z.forwardRef((A, B) => {
        const {
            min: g,
            max: I,
            inverted: l,
            onSlideStart: G,
            onSlideMove: c,
            onSlideEnd: e,
            onStepKeyDown: a,
            ...Q
          } = A,
          E = Z.useRef(null),
          b = SB(B, E),
          o = Z.useRef(),
          u = !l;
        function r(s) {
          const H = o.current || E.current.getBoundingClientRect(),
            d = [0, H.height],
            t = Fe(d, u ? [I, g] : [g, I]);
          return (o.current = H), t(s - H.top);
        }
        return Z.createElement(
          rt,
          {
            scope: A.__scopeSlider,
            startEdge: u ? "bottom" : "top",
            endEdge: u ? "top" : "bottom",
            size: "height",
            direction: u ? 1 : -1,
          },
          Z.createElement(
            st,
            mA({ "data-orientation": "vertical" }, Q, {
              ref: b,
              style: {
                ...Q.style,
                "--radix-slider-thumb-transform": "translateY(50%)",
              },
              onSlideStart: (s) => {
                const H = r(s.clientY);
                G == null || G(H);
              },
              onSlideMove: (s) => {
                const H = r(s.clientY);
                c == null || c(H);
              },
              onSlideEnd: () => {
                (o.current = void 0), e == null || e();
              },
              onStepKeyDown: (s) => {
                const H = it[u ? "from-bottom" : "from-top"].includes(s.key);
                a == null || a({ event: s, direction: H ? -1 : 1 });
              },
            })
          )
        );
      }),
      st = Z.forwardRef((A, B) => {
        const {
            __scopeSlider: g,
            onSlideStart: I,
            onSlideMove: l,
            onSlideEnd: G,
            onHomeKeyDown: c,
            onEndKeyDown: e,
            onStepKeyDown: a,
            ...Q
          } = A,
          E = BG(DI, g);
        return Z.createElement(
          $l.span,
          mA({}, Q, {
            ref: B,
            onKeyDown: Vg(A.onKeyDown, (b) => {
              b.key === "Home"
                ? (c(b), b.preventDefault())
                : b.key === "End"
                ? (e(b), b.preventDefault())
                : Et.concat(Zt).includes(b.key) && (a(b), b.preventDefault());
            }),
            onPointerDown: Vg(A.onPointerDown, (b) => {
              const o = b.target;
              o.setPointerCapture(b.pointerId),
                b.preventDefault(),
                E.thumbs.has(o) ? o.focus() : I(b);
            }),
            onPointerMove: Vg(A.onPointerMove, (b) => {
              b.target.hasPointerCapture(b.pointerId) && l(b);
            }),
            onPointerUp: Vg(A.onPointerUp, (b) => {
              const o = b.target;
              o.hasPointerCapture(b.pointerId) &&
                (o.releasePointerCapture(b.pointerId), G(b));
            }),
          })
        );
      }),
      $b = "SliderTrack",
      Ao = Z.forwardRef((A, B) => {
        const { __scopeSlider: g, ...I } = A,
          l = BG($b, g);
        return Z.createElement(
          $l.span,
          mA(
            {
              "data-disabled": l.disabled ? "" : void 0,
              "data-orientation": l.orientation,
            },
            I,
            { ref: B }
          )
        );
      }),
      ht = "SliderRange",
      Bo = Z.forwardRef((A, B) => {
        const { __scopeSlider: g, ...I } = A,
          l = BG(ht, g),
          G = wt(ht, g),
          c = Z.useRef(null),
          e = SB(B, c),
          a = l.values.length,
          Q = l.values.map((o) => Mt(o, l.min, l.max)),
          E = a > 1 ? Math.min(...Q) : 0,
          b = 100 - Math.max(...Q);
        return Z.createElement(
          $l.span,
          mA(
            {
              "data-orientation": l.orientation,
              "data-disabled": l.disabled ? "" : void 0,
            },
            I,
            {
              ref: e,
              style: {
                ...A.style,
                [G.startEdge]: E + "%",
                [G.endEdge]: b + "%",
              },
            }
          )
        );
      }),
      Yt = "SliderThumb",
      go = Z.forwardRef((A, B) => {
        const g = Tb(A.__scopeSlider),
          [I, l] = Z.useState(null),
          G = SB(B, (e) => l(e)),
          c = Z.useMemo(
            () => (I ? g().findIndex((e) => e.ref.current === I) : -1),
            [g, I]
          );
        return Z.createElement(Io, mA({}, A, { ref: G, index: c }));
      }),
      Io = Z.forwardRef((A, B) => {
        const { __scopeSlider: g, index: I, ...l } = A,
          G = BG(Yt, g),
          c = wt(Yt, g),
          [e, a] = Z.useState(null),
          Q = SB(B, (H) => a(H)),
          E = ob(e),
          b = G.values[I],
          o = b === void 0 ? 0 : Mt(b, G.min, G.max),
          u = co(I, G.values.length),
          r = E == null ? void 0 : E[c.size],
          s = r ? ao(r, o, c.direction) : 0;
        return (
          Z.useEffect(() => {
            if (e)
              return (
                G.thumbs.add(e),
                () => {
                  G.thumbs.delete(e);
                }
              );
          }, [e, G.thumbs]),
          Z.createElement(
            "span",
            {
              style: {
                transform: "var(--radix-slider-thumb-transform)",
                position: "absolute",
                [c.startEdge]: `calc(${o}% + ${s}px)`,
              },
            },
            Z.createElement(
              pe.ItemSlot,
              { scope: A.__scopeSlider },
              Z.createElement(
                $l.span,
                mA(
                  {
                    role: "slider",
                    "aria-label": A["aria-label"] || u,
                    "aria-valuemin": G.min,
                    "aria-valuenow": b,
                    "aria-valuemax": G.max,
                    "aria-orientation": G.orientation,
                    "data-orientation": G.orientation,
                    "data-disabled": G.disabled ? "" : void 0,
                    tabIndex: G.disabled ? void 0 : 0,
                  },
                  l,
                  {
                    ref: Q,
                    style: b === void 0 ? { display: "none" } : A.style,
                    onFocus: Vg(A.onFocus, () => {
                      G.valueIndexToChangeRef.current = I;
                    }),
                  }
                )
              )
            )
          )
        );
      }),
      lo = (A) => {
        const { value: B, ...g } = A,
          I = Z.useRef(null),
          l = Lb(B);
        return (
          Z.useEffect(() => {
            const G = I.current,
              c = window.HTMLInputElement.prototype,
              e = Object.getOwnPropertyDescriptor(c, "value").set;
            if (l !== B && e) {
              const a = new Event("input", { bubbles: !0 });
              e.call(G, B), G.dispatchEvent(a);
            }
          }, [l, B]),
          Z.createElement(
            "input",
            mA({ style: { display: "none" } }, g, { ref: I, defaultValue: B })
          )
        );
      };
    function Go(A = [], B, g) {
      const I = [...A];
      return (I[g] = B), I.sort((l, G) => l - G);
    }
    function Mt(A, B, g) {
      const I = (100 / (g - B)) * (A - B);
      return ot(I, [0, 100]);
    }
    function co(A, B) {
      return B > 2
        ? `Value ${A + 1} of ${B}`
        : B === 2
        ? ["Minimum", "Maximum"][A]
        : void 0;
    }
    function eo(A, B) {
      if (A.length === 1) return 0;
      const g = A.map((l) => Math.abs(l - B)),
        I = Math.min(...g);
      return g.indexOf(I);
    }
    function ao(A, B, g) {
      const I = A / 2,
        l = Fe([0, 50], [0, I]);
      return (I - l(B) * g) * g;
    }
    function no(A) {
      return A.slice(0, -1).map((B, g) => A[g + 1] - B);
    }
    function Qo(A, B) {
      if (B > 0) {
        const g = no(A);
        return Math.min(...g) >= B;
      }
      return !0;
    }
    function Fe(A, B) {
      return (g) => {
        if (A[0] === A[1] || B[0] === B[1]) return B[0];
        const I = (B[1] - B[0]) / (A[1] - A[0]);
        return B[0] + I * (g - A[0]);
      };
    }
    function to(A) {
      return (String(A).split(".")[1] || "").length;
    }
    function Co(A, B) {
      const g = Math.pow(10, B);
      return Math.round(A * g) / g;
    }
    const bo = Pb,
      oo = Ao,
      Eo = Bo,
      Zo = go,
      io = ["1", "2", "3"],
      uo = ["classic", "surface", "soft"],
      HI = {
        size: { type: "enum", values: io, default: "2", responsive: !0 },
        variant: { type: "enum", values: uo, default: "surface" },
        color: kb,
        highContrast: Jb,
        radius: xb,
      },
      Wt = Z.forwardRef((A, B) => {
        var g, I;
        const { rest: l, ...G } = Ub(A),
          {
            className: c,
            size: e = HI.size.default,
            variant: a = HI.variant.default,
            color: Q = HI.color.default,
            highContrast: E = HI.highContrast.default,
            radius: b = HI.radius.default,
            tabIndex: o,
            ...u
          } = l;
        return Z.createElement(
          bo,
          {
            "data-accent-color": Q,
            "data-radius": b,
            ref: B,
            ...u,
            className: We(
              "rt-SliderRoot",
              c,
              VB(e, "rt-r-size"),
              `rt-variant-${a}`,
              { "rt-high-contrast": E },
              jb(G)
            ),
          },
          Z.createElement(
            oo,
            { className: "rt-SliderTrack" },
            Z.createElement(Eo, {
              className: We("rt-SliderRange", { "rt-high-contrast": E }),
              "data-inverted": u.inverted ? "" : void 0,
            })
          ),
          ((I = (g = u.value) !== null && g !== void 0 ? g : u.defaultValue) !==
            null && I !== void 0
            ? I
            : []
          ).map((r, s) =>
            Z.createElement(Zo, {
              key: s,
              className: "rt-SliderThumb",
              ...(o !== void 0 ? { tabIndex: o } : void 0),
            })
          )
        );
      });
    Wt.displayName = "Slider";
    const ro =
        "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IHNlY29uZHMgKDEyLjUgbWludXRlcykgdG8gcHJvY2VzcyB0aGUgc2FtZSBlZGl0aW5nIHRyYWNlLgpJIG1hbmFnZWQgdG8gZ2V0IHRoYXQgMTAgbWludXRlIHRpbWUgZG93biB0byA3MG1zICgwLjA3IHNlY29uZHMpLiBUaGF0cyB0aGUgYmVzdCByZXN1bHQgSSd2ZSBldmVyIGdvdHRlbiBmcm9tIG9wdGltaXphdGlvbiB3b3JrLCBhbmQgSSdtIGRlbGlnaHRlZCBieSBpdC4gTGV0IG1lIHRlbGwgeW91IHdoYXQgSSBkaWQhCldoYXQgZG9lcyBhdXRvbWVyZ2UgZG8/CkJlZm9yZSB3ZSBjYW4gZ28gaW50byBkZXRhaWwgYWJvdXQgaG93IEkgbWFkZSBhdXRvbWVyZ2UgZmFzdCwgd2UgaGF2ZSB0byBzcGVuZCBhIG1vbWVudCB0YWxraW5nIGFib3V0IGhvdyBhdXRvbWVyZ2UgaXRzZWxmIHdvcmtzLgpBbiBhdXRvbWVyZ2UgZG9jdW1lbnQgaXMgYWN0dWFsbHkgYSB0cmVlIG9mIGluc2VydGVkIGNoYXJhY3RlcnMuIEVhY2ggY2hhcmFjdGVyIGluIHRoZSBkb2N1bWVudCBoYXMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOgpBIHVuaXF1ZSBJRCwgbWFkZSB1cCBvZiBhIHR1cGxlIG9mIChjbGllbnQgSUQsIHNlcXVlbmNlIG51bWJlcikKVGhlIElEIChvciBhIHBvaW50ZXIgdG8pIGl0cyBwYXJlbnQgaXRlbSwgd2hpY2ggaXMgdGhlIGl0ZW0gZGlyZWN0bHkgYmVmb3JlIHRoYXQgY2hhcmFjdGVyIHdoZW4gaXQgd2FzIGluc2VydGVkLgpUaGUgY2hhcmFjdGVyIGl0c2VsZiAoJ0EnKQpUaGVyZSdzIGEgY291cGxlIG1vcmUgZmllbGRzIChlZyB0byBtYXJrIHdoZW4gY2hhcmFjdGVycyBoYXZlIGJlZW4gZGVsZXRlZCksIGJ1dCBlc3NlbnRpYWxseSB0aGF0cyBpdC4gV2hlbiBhIGNoYXJhY3RlciBpcyBpbnNlcnRlZCBpbiB0aGUgZG9jdW1lbnQsIGF1dG9tZXJnZSBmaWd1cmVzIG91dCB0aGUgSUQgb2YgdGhlIGNoYXJhY3RlciBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIG5ldyBjaGFyYWN0ZXIsIGFuZCBpbnNlcnRzIHRoZSBuZXcgY2hhcmFjdGVyIGFzIG9uZSBvZiBpdHMgcHJlZGVjZXNzb3IncyAqY2hpbGRyZW4qLiBJZiB5b3UganVzdCB0eXBlIGEgbGluZWFyIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgKGFzIEknbSBkb2luZyByaWdodCBub3cpLCB5b3UnbGwgZW5kIHVwIHdpdGggYSBiaWcgbG9uZyBjaGFpbiBvZiBjaGFyYWN0ZXJzIGdvaW5nIGRvd24gbGlrZSBhIGxpbmtlZCBsaXN0LgpTbyB3aHkgaXMgYXV0b21lcmdlIHNvIHNsb3c/CldoZW4gb3B0aW1pemluZywgSSBpbWFnaW5lIG15c2VsZiBtYW51YWxseSBkb2luZyBhbGwgdGhlIHdvcmsgdGhlIGNvbXB1dGVyIGlzIGRvaW5nLCBvbmUgc3RlcCBhdCBhIHRpbWUuIFRoZW4gSSBpbWFnaW5lIGFza2luZzogIldoZW4gSSBnZXQgYm9yZWQsIGhvdyB3b3VsZCBJIHNwZWVkIHRoaXMgam9iIHVwPyIuCkF1dG9tZXJnZSBpcyBzbG93IGZvciAzIG1haW4gcmVhc29uczoKSXRzIHdyaXR0ZW4gaW4gamF2YXNjcmlwdCBhbmQgdXNlcyBjb21wbGV4IGRhdGEgc3RydWN0dXJlcy4gSmF2YXNjcmlwdCBpcyByZWFzb25hYmx5IGZhc3QgZm9yIG1hdGgsIGJ1dCBzbG93IGFuZCBpbmVmZmljaWVudCB3aGVuIHVzaW5nIGNvbXBsZXggZGF0YSBzdHJ1Y3R1cmVzLgpBdXRvbWVyZ2UgdXNlcyBhIGNvbXBsZXggYW5kIGluZWZmaWNpZW50IGRhdGEgc3RydWN0dXJlCkF1dG9tZXJnZSBtYWtlcyBleHRyZW1lbHkgaGVhdnkgdXNlIG9mIGltbXV0YWJsZWpzCkVhY2ggb2YgdGhlc2UgaXNzdWVzIGFjY291bnRzIGZvciBhYm91dCBhbiBvcmRlciBvZiBtYWduaXR1ZGUgc2xvd2Rvd24gaW4gcGVyZm9ybWFuY2UuIFlvdSBjYW4gc2VlIGFsbCAzIGlzc3VlcyBzaG93aW5nIHVwIGluIHRoaXMgbWV0aG9kIGZyb20gdGhlIGF1dG9tZXJnZSBzb3VyY2UgdHJlZSwgd2hpY2ggaXMgY2FsbGVkIG9uIGVhY2gga2V5c3Ryb2tlLiBBdXRvbWVyZ2UgdXNlcyB0aGlzIG1ldGhvZCB0byBmaWd1cmUgb3V0IHdoZXJlIGVhY2ggbmV3IGNoYXJhY3RlciBzaG91bGQgYmUgcGxhY2VkIGluIHRoZSByZXN1bHRpbmcgZG9jdW1lbnQ6CmZ1bmN0aW9uIGluc2VydGlvbnNBZnRlcihvcFNldCwgb2JqZWN0SWQsIHBhcmVudElkLCBjaGlsZElkKSB7CiAgbGV0IGNoaWxkS2V5ID0gbnVsbAogIGlmIChjaGlsZElkKSBjaGlsZEtleSA9IE1hcCh7b3BJZDogY2hpbGRJZH0pCgogIHJldHVybiBvcFNldAogICAgLmdldEluKFsnYnlPYmplY3QnLCBvYmplY3RJZCwgJ19mb2xsb3dpbmcnLCBwYXJlbnRJZF0sIExpc3QoKSkKICAgIC5maWx0ZXIob3AgPT4gb3AuZ2V0KCdpbnNlcnQnKSAmJiAoIWNoaWxkS2V5IHx8IGxhbXBvcnRDb21wYXJlKG9wLCBjaGlsZEtleSkgPCAwKSkKICAgIC5zb3J0KGxhbXBvcnRDb21wYXJlKQogICAgLnJldmVyc2UoKSAvLyBkZXNjZW5kaW5nIG9yZGVyCiAgICAubWFwKG9wID0+IG9wLmdldCgnb3BJZCcpKQp9CldoYXRzIHdyb25nIHdpdGggdGhpcyBtZXRob2Q/ClRoaXMgbWV0aG9kIGFsbG9jYXRlcyBhbGwgb3ZlciB0aGUgcGxhY2UuIEkgY2FuIHNwb3QgNSBhbGxvY2F0aW9ucywgbm90IGNvdW50aW5nIGFueSBleHRyYSBub25zZW5zZSBpbW11dGFibGVqcyBpcyBkb2luZy4gVGhlIGNhbGwgdG8gTGlzdCgpIGhhcyBubyBlZmZlY3QgYXMgZmFyIGFzIEkgY2FuIHRlbGwgZnJvbSByZWFkaW5nIGltbXV0YWJsZWpzJ3MgZG9jdW1lbnRhdGlvbi4KVGhlIGRvY3VtZW50IGlzIGFsd2F5cyBrZXB0IGluIGEgc29ydGVkIG9yZGVyIGFueXdheSwgc28gdGhlIGNhbGxzIHRvIHNvcnQoKSBhbmQgcmV2ZXJzZSgpIGFyZSB1bm5lY2Vzc2FyeS4gVGhlIGFsZ29yaXRobSBvbmx5IG5lZWRzIHRvIGZpZ3VyZSBvdXQgd2hlcmUgdGhlIG5ldyBjaGlsZCBzaG91bGQgYmUgaW5zZXJ0ZWQuIFJlLXNvcnRpbmcgYWxsIGNoaWxkcmVuIGlzIGVudGlyZWx5IGF2b2lkYWJsZS4gU29ydCBmdW5jdGlvbnMgYXJlIG9mdGVuIGZhc3Qgd2hlbiB0aGUgaW5wdXQgaXMgc29ydGVkIGFscmVhZHksIGJ1dCBpbiB0aGlzIGNhc2UgYmVjYXVzZSB0aGUgc29ydGluZyBmdW5jdGlvbiBpcyBpbnZlcnRlZCwgdGhlIGNvbXB1dGVyIGFsd2F5cyBoYXMgdG8gc29ydCB0aGUgZW50aXJlIGxpc3QuCllvdSBjYW4ndCB0ZWxsIGZyb20gbG9va2luZyBhdCB0aGlzIG1ldGhvZCwgYnV0IGluc2VydGlvbnNBZnRlciAKRGVzcGl0ZSBDUkRUcyBiZWluZyB0aGUgIm5ldyBob3RuZXNzIiBpbiB0aGUgY29sbGFib3JhdGl2ZSBlZGl0aW5nIGdhbWUgZm9yIHllYXJzLCBJJ3ZlIGJlZW4gcmVzaXN0aW5nIHRoZW0uIEFzIEkgc2FpZCBpbiBteSBbcmVjZW50IGJsb2cgcG9zdCBhYm91dCBDUkRUc10oaHR0cHM6Ly9qb3NlcGhnLmNvbS9ibG9nL2NyZHRzLWFyZS10aGUtZnV0dXJlLyksIHRoZXkndmUgYmVlbiBnZW5lcmFsbHkgdW53b3JrYWJsZSBmb3IgcmVhbCB3b3JsZCBjb2xsYWJvcmF0aXZlIGVkaXRpbmcgYmVjYXVzZToKVGhleSB0YWtlIHVwIHRvbyBtdWNoIHNwYWNlIG9uIGRpc2sgYW5kIGluIG1lbW9yeS4gKEF1dG9tZXJnZSB0YWtlcyAxLjFHQiBpbiBSQU0gdG8gc3RvcmUgYSAxMDBrYiBkb2N1bWVudCkKVGhleSBjb25zdW1lIHdheSB0b28gbXVjaCBDUFUgdG8gcHJvY2VzcyBlZGl0cwpVbnRpbCB0aGVzZSBpc3N1ZXMgYXJlIGFkZHJlc3NlZCwgSSBjYW4ndCByZWNvbW1lbmQgQ1JEVHMgZm9yIHVzZSBpbiBnZW5lcmFsIGNvbXB1dGluZy4KCgoKCkEgZmV3IHllYXJzIGFnbyBJIHdhcyByZWFsbHkgYm90aGVyZWQgYnkgYW4gYWNhZGVtaWMgcGFwZXIuIFNvbWUgZ3JhZHVhdGUgc3R1ZGVudHMgaW4gcmVzZXJhZWFyY2hlcnMgaW4gRnJhbmNlIHB1dCB0b2dldGhlciBhIGNvbWFyaXNvbnBwIHNob3dpbmcgbG90cyBvZiB3YXlzIG9DUkRUIGFuZCBPVCBhbGdvcml0aG1zIGNvdWxkIGJlIGltcGxlbWVudGVkIHRvIGFsbG93IGZvciBjb25jdXJyZW50IGVkaXRpbmcsIGFuZCB0aGV5IGJlbmNobWFya3NlZCB0aGVtLiBhbGwgVGhlaXIgcGFwZXIgbWFkZSBMb3RzIG9mIHBlb3BsZSBJIGtuZXdBIGJ1bmNob2YgYWxsIHNlbnQgbWUgbGlua2VzIHRvIHRoZSBwYXBlciBhc2tpbmcgd2hhdCBJIHRob3VnaHQgSSdkIHN0b3BwZWQgd29ya2luZyBvbiBHb29nbGUgV2F2ZSBhIGZldyB5ZWFycyBhYmJlZm9yZSBhbmQgSSB3YXMga25lZSBkZWVwIHJlaW1wbGVtZW50aW5nIFNoYXJlSlMgKGEgamF2YXNjcmlwdCBsaWJyYXJ5IGZvciBjb2xsYWJvYm9yYXRpdmUgZWlkaW50ZGl0aW5nKSB1c2luZyBvbmUgbyB0ZgoKIFNvbWUgYWxvcmlnb3J0aXRobXMgd29ya2VkIHJlYXNvbmFibHkgd2VsbC4gQW5kIG90aGVycy4gQSB0b29rIHVwd2FyZHMgb2YgMzBteHMgMHRvIGhhbmRsZSBhIHNpbXBsZSBjb3B5K3Bhc3RlIG9wZXJhdGlvbi5wcm9jZXNzICBCdXQgQW5kMyBzZWNvbmRzIGZyb20gb25lIG9mIHRoZWlyIHJlYWwgd29ybGQgZWRpdGluZyBzZXNpb25zaW9ucwoKV2hpY2ggYWxnb3JpdGhtIHdhcyB0aGF0PyBJTWluZS4gV2VsbCwgSSBkaWRuJ3QgaW52ZW50IGl0IC0gYnV0IGl0IHdhcyB0aGUgYWxnb3JpdGhtIEkgd2FzIHVzaW5nIGZvciBTaGFyZURKU2FsZ29yaXRobXN3YXkgeW9zIHlvdSBjb3VsZCBpbXBsZW1lbnQgKHdpdGggQ1JEVCBhbmQgT1QgYWxnb3JpdGhtcykgWWlrZXMhCgogIFdlbGwsIGl0IHdhcyBtSSBtZWFuLCAuIFRoZSBhbGdvcml0aG0gd2UgdXNlZCBmb3IgR29vZ2xlIFdhdmVCdXQgc2ltcGxlcyAKCi4gVGhlIGFsZ29yaXRobSBJIGtuZXcgZm9yIGEgZmFjdCBkaWRuJ3QgdGFrZSAzIHNlY29uZHMgdG8gcHJvY2VzcyBsYXJnZSBwYXN0ZSBldmVudHMuIFdoYXQgd2FzIGdvaW5nIG9uPwoKSSBsb0x1Y2tpbHkgSSB0b29rIGEgY2xvc2VyIGxvb2sgYWRuZCBpdCBzZWVtZWQgbGlrZSBpdCB3YXMgYW1hdGV1ciBob3VyIGluIHRoaWVyIGltdGhlaXIgaW1wbGVtZW50YXRpb24uIEkgdG9vayBhIGNsb3NlciBsb29rIGFuZCBpdCBzZWVtZWQgbGlrZSBpdCB3YXMgYW1hdGV1ciBob3VyIGluIHRoZWlyIGltcGxlbWVudGF0aW9uLm9uIGVhcnRoICBXaGVuIGEgbGFyZ2UgcGFzdCBldmVuIGV0IGhhcHBlbmVkLCBpbnN0ZWFkIG9mIGluc2VydGluZyBvbmUgYmxvY2sgb2YgdGV4dCwgdGhlaXIgYWxnb3JpdGhtIHdhcyBjb2RlIHRha2luZyBlYWNoIGNoYXJhY3Rlcmluc2VydGVkICBvbmUgYnkgb25lIGFuZCBpbnNlcnRlZGluZyB0aGVtbmV3IGNoYXJhY3RlciBvbmUgYnkgb25lIGFuZCBpbnNlcnRlaW5nIHRoZW0gaW50aW8gdGhlaXIgb2J2aW91Y2FyYXp5IGxzb3cgc2xvdyBkYXRhIHN0cnVjdHVyZS4gR2FoIC0gfiB0aGlzIGlzbid0IGEgcHJvYmxlbSBJIG1lYW4sIHllYWgtICAtIG9mIGNvdXJzZSBpdCdsbCBiZSBzbG93IGlmIHlvdSBkbyB0aGF0ISBCdXRnIHdpdGggdGhlIGFsZ29yaXRobS4gVGhpc2lzIGlzIGEgYXBwcm9hY2hwcm9ibGVtIHdpdGhpICAqeW91ciBjb2RlKi5hIHVzZXIgcGFzdGVkIGEgYmxvY2sgZm8gZm8gY29mIGNvZGViaWcgY2h1bmt0aGF0IHN0cm9uaW5nIGluIG9uZSBvcGVyYXRvaW5pb250ZXh0IGFsbCBvZiB0aGF0IGNvbnRlbnRlYWNoIG9uZSAoc2F5LCAxMDAwIGNoYXJhY3RlcnMpdGhvc2UgMTAwMCBjaGFyYWN0ZXJzIGluc3BsaXR0aW5nIGVhY2ggY2hhcmFjdGVyIGl0cyBvd24gZWRpdGluZyBvcGVyYXRpb24uIFRoZXkgd2VyZSBwcm9jZXNzaW5nIDEwMDAgb3BlcmF0aW9ucyByYXRoZXIgdGhhbiAxIGFuZGlzbid0IHNjaWVuY2UuIFlvdSBqdXN0IHdyb3RlYmFkIEkgY2FuJ3QgbGVUaGF0IGRvZXNuJ3QgdGVsbCB1cyBhbnl0aGluZyBhYm91dCB3aGF0IHlvdSdyZSB0cnlpbmcgdG8gdGVzdC4gSXQganVzdCB0ZWxscyB1cyBzb21ldGhpbmcgYWJvdXQgKnlvdSouY3JlYXRpbmcgMSBvcGVyYXRpb24gd2l0aCwgdGhlaXIgdGhlIGluc2VydCBpbnRvIDEwMDAwIG9wZXJhdGlvbnMgLSBlYWNoIHdpdGggaXRzd2hpY2ggbmVlZGVkIHRvIHBiZSBwcm9jZXNzZWQgc2VwYXJhdGVseXdlIGNhbid0IGxlYXJuIGFueXRoaW5nIGZyb20gdGhhdCFhYm91dCB0aGUgYWxnb3JpdGhtICBUaGlzIGlzbid0IGEgcHJvYmxlbSB3aXRoIHRoZWllIGFsZ29yaXRobS4gVGhpcyBpcyBqdXN0IGEgcHJvYmxlbSB3aXRoIHlvdXIqIG1yIHJlc2VhcmNoZXJkb2RneSAgSSB3b3VsZG4ndCBtaW5kIHNvIG11Y2ggaWYgcGVvcGxlIEkgSSBkaWRuJ3QgaGF2ZSBwZW9wbGUgSSByZXNwZWN0ZWQgcmVhZGluZyB0aGUgcGFwZXIgYW5kIGFza2luZyBtZSBhYm91dCBpdC4KCmZsaXBwaW5nIHRocm91aGd1Z2gKCi4gQXJnaCEKCldoZW4gd2UgdGhpbmsgYWJvdXQgQ1JEVHMgYW5kIG90aGVyIGNvbmN1cnJlbnRpbmcgZWRpdGluZyBjb2xsYWJvcmF0aXZlIGVkaXRpbmcgc3l0c3RzZXRlbXMgd2UgaGF2ZSAgYWEgcHJvYmxlbSB3aXRoIHdvcmRzLiBXZSBkZXNjcmliZSBlYWNoIHN5c3RlbSBhcyBhbiAiYWxnb3JpdGhtIiAtIGJ1dCByZWFsbHkgdGhlcmUncyB0d28gdGhpbmdzIGdvaW5nIG9udmVyeSBzZXBhcmF0ZSBwYXJ0czoKCjEuIFRoZSBzZW1hbnRpY3Mgb2YgdGhlIHN5c3RlbSwgd2hpY2ggd2UgY2FuIGRlc2NyaWJlIC4gV2hlbiBjb25jdXJyZW50IGVkaXRzIGhhcHBlbiBpbiB0aGUgc2FtZSBwbGFjZSwgaG93IGRjYW4gd2UgdGVsbD8gV2hhdCB3aGF0IGhhcHBlbnM/IGluIHRoZSBkb2N1bWVudGhvaGFwcGVucz8gSG93IGRvZXMgaXQga25vdz8gSG93IGRvZXMgaXQgcmVzb2x2ZSBpdHRoZSBzaXR1YXRpb24/KioqICpsb2NhdG9pbiBpb24gCgoyLjIuIFRoZSAqaW1wbGVtZW50YXRvaW4gaW9uKiBvZiB0aGUgc3lzdGVtLiBXaGF0IGxhbmd1ZWFhZ2U/IFdoYXQgZGF0YSBzdHJ1Y3R1cmVzPyAgYXJlIHdlIHVzaW5nIEhvdyB3ZWxsIG9wdGltaXplZCBpcyBpdCwgZm9yIGFuZCBmb3Igd2hhdCBzY2VuYXJpb3M/CgpJZiB0aGUgc2VtYW50aWNzIGFyZSBjb3JyZWN0aW5jb3JyZWN0LCB1c2VycycgZWRpdHMgd29uJ3QgY29udmVyZ2UuIEknbGwgZW5kIHVwIGxvb2luZyBraW5nIGF0IGEgZGlmZmVyZW50IGZydmVyCgogTm8hIFN0b3AgaXQhbGFuZ3VhZ2UgcHJvYmxlbWNvbmN1cnJlbnQgZWRpdGluZyB0aGF0TXkgdGV4dCBPVCBhbGdvcml0aG0gZnJvbSBhIGZldyB5ZWFycyBhZ29JJ3ZlIGltcGxlbWVudGVkIHBsYWluLWluIGEgYnVuY2ggb2YgZGlmZmVyZW50IGxhbmd1YWdlcyAgLSBJIHVzZSBpdCBhcyBhIHdheSB0byBndWFnZWdldCBhIHNlbnNlIG9mIGEgbGFuZ3VhZ2Ugd0kgd2FudCB0byBsZWFybiBhIHNpbXBsZSAgYWxnb3JpdGhtLi4gLCBiZWNhdXNlIEkgZ290IGN1cmlvdXMgd2hhdCBpdCB3b3VsZCBsb29rIGx0aGUgc2FtZSBjb2RlIHdvdWxkIGxvb2sgbGlrZSBpbiBDLCBhbmQgSmF2YXNjcmlwdCwgYW5kIFR5cGVzY3JpcHQsIGFuZHN3aWZTd2lmdCBhbmQgR28gYW5kIHJ1c3RSLiBTYW1lIGFsZ29yaXRobVRoZSBzYW1lIEl0cyB0aGUgc2FtZSBhbGdvcml0aG0gaW4gZWFjaCBwbGFjZS4gVGhlIHRyYW5zZm9ybQoKV2hlbiB3ZSBzYXkgYSBzeXN0ZW0gaXMgbiAiTyAiYWxnb3JpdGhtIiBpcyBzbG93LCB3aGF0IGFyZSB3ZSBldmVuIHRhbGtpbmcgYWJvdXQ/SUEgZmV3IHllYXJzIGFnbyB0aGFhZnRlcmcgIGdldHRpbmd0aGVhdCB0cmFuc2xhdGVkIGludG9UaGUgc2VtYW50aWNzIGFyZSB0aGUgc2FtZS4gVGhlIHBlcmZvcm1hbmNlIHdhcyBhYnNvbHV0ZWx5IG5vdC4gSW4gamF2c2FzY3JpcHQgSSBjb3VsZCBydW4gbXkgdHJhbnNmb3JtIGZ1bmN0aW9uIGFidW90b3V0IDEwMDAgMDAwIHRpbWVzIHBlciBzZWNvbmQuIE5vdCBiYWQhIEJ1dCB0aGUgc2FtZSBjb2RlZnVuY3Rpb24gaW4gQyByYW4gYXQgYSByYXRlIG9mIDIwTS9zZWNvbmQuY291bGQgZG9ydW4gIHRpbWVzIHBlciAgMjAweCBmYXN0ZXIuIFdvdy4gTXIgU28gd1cgKEkiJ20gbG9va2luZyBhdCAqeW91KiBtciBNciBGcmVuY2ggU2ljbmNpZW50aXN0KS5DUyBSZXNlYXJjaGVyIQpXaGVuIFNvbWV0aW1lcyB3aGVuIEkgcGljayB1cCBhIG5ldyBsYW5ndWFnZSBJIHdhbnQgdG8gcHJvZ3JhbSBzb21ldGhpbmcgSSBhbHJlYWR5IHVuZGVyc3RhbmQgLCBpbiBvcmRlciB0byBnZXQgYSBzZW5zZSBvZiB0aGluZ3MuIEkgdHJhbnNsYXRlZCBTb21ldGltZXMgd2hlbiBJIHBpY2sgdXAgYSBuZXcgbGFuZ3VhZ2UgSSB3YW50IHRvIHByb2dyYW0gc29tZXRoaW5nIEkgYWxyZWFkeSB1bmRlcnN0YW5kLCBpbiBvcmRlciB0byBnZXQgYSBzZW5zZSBvZiB0aGluZ3MuIEkgdHJhbnNsYXRlZCBteVNvIEkgIGVuZGVkIHVwaW5nY29kZSBpbnRvLCwgYW5kIFN3aWZ0U2FtZSAqc2VtYW50aWNzKi4gU2FtZSBhbGdyaWFsZ29yaXRobSAtIGJ1dHQgZXZlbiBjbG9zZWsgMDAwIFRoYXRzIQoKUy0tLQoKc28gClNvICMjIEF1dG9tZXJnZQoKU28gYXMgeW91IG1heSBua25vd1tdKCksIEkndmUgYmVlbiBwbGF5aW5nIHdpdGggZ2V0dGluZyBpbnRlcmVzdGVkIGluIENSRFQgcyBsYXRlbHkuIE1vc3QgY0NSRFRzIGFyZSBzdXBlciBzbG93LCBhbmQgSSBhbHdheXMgY2hhbGtlZCB0aGF0IHVwIHRvIGFzc3VtZWQgdGhhdCBhd3dhcyBzb21lIGluaGVyZW50IHByb2JsZW13IHRpaCB0IHdpdGggInRoZSBhbGdvcml0aG0iLiAoIChvb3BzKS4gQW55d2F5LCBzdXJwcmlpbiBhIHN1cnByaXNpbmcgdHVybiBvZiBldmVudHMsIEkgd2FzIG1ha2luZyB0aGUgc2FtZSBtaXN0YWtlcyBhcyB0aG9zZSByZXNlYXJjaGVycy4gSSB3YXMgYXNzdW1pbmcgcmVhZGluZyBwYXBlcnMgdGFsa2luIGdnIGFib3V0IGhldGhlICpzZW1hbnRpY3MqIGFuZCBhc3NtdW1pbmcgdGhhdCBtZWFudCB0aG9zZSBhbGdvcml0aG1zIG5lZWRlZCB0byBiZSBpbXBsZW1lbnRlZCBhIGNlcnRhaW4gd2F5LiBBIHNsb3cgd2F5LiBCZWNhdXNlIHRoZSBhbGdvcml0aG0iIGlzIHNsb3ciLiBCdXQgSSB3YXMgc28gd3JvbmcuCgpyYW5ieSB1c2luZyBhIGZldyBpbXBsZW1lbWVudGF0aW9uIHRyYWljaWNrcywgIGNvZGUgZnVuY3Rpb24gaW5ydXVucyBpZG9lc3J1bnMgaW50ZXJhdGlvbnNpdGVyYXRpb25zIWNyYXp5IHRoZXJlIHdhcyBPb3BzISd2ZSBiZWVud2Uga25ldyBob3d3aGF0IHRob3NlIGhvdyB0aG9zZSAqaW1wbGVtZW50YXRpb25zKiBzaG91bGQgd29ya1RoYXQgaXMsIHRoZXkgc2hvdWxkIHdvcmsgKnNsb3dseSogLiBCdXQgaXQgdHVybnMgb3V0IEkgd2FzIHN1cGVyIHdyb25nLiBUCgpIb3cgd3Jvbmc/IAogQXV0b21lcmdlVG8gcnVuIFt0aGlzIGVkaXRpbmcgdHJhY2UoKV0oKSwgIChhIHBvcHVsYXIgQ1JEVCkgdGFrZXMgMjcwIHNlY29uZHMuIEkndmUgIGNhbiBydW4gdGhlIHNhbWUgZWRpdGluZyB0cmFjZWhhdmUgYSBuZXcgZWltcGxlbWVudGF0aW9uIHRoYXQgIGluIEkgaGF2ZSBhIG5ldyBpbXBsZW1lbnRhdGlvbiB0aGF0IGNhbiBydW4gdGhlIHNhbWUgZWRpdGluZyB0cmFjZSBpbiA2NW1zMC4wNjUgc2Vjb25kcy5wcm9jZXNzIFdlbGwzMiAyMyBzZWNvbmRzLiBUaGF0cyBhYm91dCAxMCAwMDAgeCAgdGVuIHRob3VzYW5kIHRpbWVzIGZhc3Rlci4gVCBJdHMgdGhlIGxhcmdlc3Qgc3BlZWQgdXAgSSd2ZSBldmVyIGdvdHRlbiBmcm9tIG9wdGltaXphdGlvbiB3b3JrIC0gYW5kIGl0cyAqZGVsaWdodGZ1bCohIUknbSB1dHRlcmx5IGRlbGlnaHRlZCBieSBpdC5IYWhhIHdhd2t3YXJkIC1IYWggYSBvZiBkaWZmZXJlbnQgYWxnb3JpdGhtc2FueXRoaW5nIGFib3V0IGhvdyB0aGV0byBtYWtlIHRoZSAqaW1wbGVtZW50YXRpb25zKiBlZmZpY2llbnQuIE1vc3QgTG90cyBvZiBDUyByZXNlYXJjaGVycyBkb24ndEFjdHVhbGx5IGFyZW4ndCBzdXBlciBnZW5pdXNlcyB3aG8ndmUgc3BlbnQgZGVjYWRlcyB0aGlua2luZyBhbHNvKiogYWJvdXQgb3B0aW1pemF0aW9uY2hvdyB5b3UgY2FuIGUgY29kZS50aGF0IG1lYW50ICwgd3JpdHRlbiBieSBbYSBwb3B1bGFyIHJlc2VhcmNoZXJdKClhIC0gMTAwMDB4IChZCkxldHMgdGFsayBhYm91dCB3aHkgYXV0b21lcmdlIGlzIHNsb3csIGFuZCBhbGwgdGhlcyBlIHN0ZXBzIHRhdCBoYXQgbWFrZSBpdCBmYXN0LgoKV2VsbCBhY3R1YWxseSwgbGV0cyBzdGFydCB3aXRoCgojIyBXaGF0IGFvbiBlYXJ0aCBpcyBhbiBhdXRvbWVyZ2U/CgogYW55d2F5QXV0b21lcmdlIGlzIGFuIGFsZ29yaXRobWltcGxlbWVudGF0aW9uIG9mIHRoZSBSR0EgQ1JEVC4gU09vcHMgdGhhdCBkb2Vzbid0IGhlbHAuIEF1dG9tZXJnZWEgbGlicmFyeSB0byBoZWxwIHlvdSBkbyBjb25jY29sbGFib3JhdGl2ZSBlZGl0aW5nLiBJdHMgYmFzZWQgb24gUkdBd3J0aXR0ZW4gYnkgTWFydGluIEtsZXBwbWFubiwgd2hvJ3MgYSBsaXR0bGUgYml0IGZhbW91cyBmcm9tIGhpcyBCb29rYm9vayBhbmQgZXhjZWxsZW50IHRhbGtzLiBJdHMgIGFuIGFsZ28gbiBhbGdvcml0aG0gY2FsbGVkICwgd2hpY2ggY3lvdSBjYW4gcmVhZCBhYm91dCBpbiBhIHBhcGVyIGlmIHlvdSdyZSBpbnRvIHRoYXQgc29ydCBvZiB0aGluZy4KCldoZW4gcHJvY2Vzc2luZ2RvaW5nIENDb2xsYWJvcmF0aXZlIHRleHQgZWRpdGluZyB3b3JrcyBieSB0aGlua2luZyBhYm91dCBhIHN0cmluZyBhcyBhIGxpc3QgaW4gYXV0b21lcmdlTGlrZUF1dG9tZXJnZSAoYW5kIG90aGVyIENSRFRzICkgdGhpbmsgb2YgYSBzdCBzaGFyZWQgZG9jdW1lbnQgYXMgYSBsaXN0IG9mIGNoYXJhY3RlcnMuIFdoZW4gdXNlcnNFYWNoIGluc2VydGVkIGl0ZW0gaW4gdGhlIGRvY3VtZW50IGNoYXJhY3RlcmlzIGluc2VydGVkIGludG8gYSBnZXRzIGEgdW5pcXVlIElEIChiYXNlZCBvbiAgLSB3aGljaCBpc24ndCBhcyBiYWQgYXMgeW91IHRoaW5rLCB3ZSBjYSBpc24ndCBhcyBiYWQgYXMgeW91IHRoaW5rLCBiYXNlZCBvbiAsIGFuZCBlYWNoIGluc2VydCBzcGVjaWZpZXMgdGhhdCBpdCBpbnduYW1lcyB3aGljaHdobmVldmVyd2hlbmV2ZXIgeW91IGluc2VydCBzb21ldGhpbmcsIHlvdSBuYW1lIHdoYXQgeW91J3JlIGluc2VydGluZyBhZnRlci4gRWcgaWYgSSB0eXBlICJhYmMiLCBhdXRvbWVyZ2UgY3JlYXRlcyAzIGl0bWVlZW1zOgoKLSBJbnNlciB0ICdhJyBpZCAoc2VwaCwgMClgYCBhZnRlciAoUk9PVClgYC0gSW5zZXJ0ICdhJyBpZCBgKHNlcGgsIDApYCBhZnRlciBgUk9PVGAKYjEoc2VwaCwgMCktIEluc2VydCAnYicgaWQgYChzZXBoLCAxKWAgYWZ0ZXIgYChzZXBoLCAwKWAKYzIxCgpIb3cgd3Nob3VsZCB5b3UgSG93IHNob3VsZCB5b3VodHRwczovL21hcnRpbi5rbGVwcG1hbm4uY29tLyByZXByZXNlbnQgdGhhdD8gQSB0cmVlIG9mIGNvdXJzZSEKCj4gRGlhZ3JhbSBoZXJlIFdlbGwsIGl0cyBhIAoKTGV0IHNzIHNheSAgSSB1bmRpbnNlcnQgYSAnbiAneCcgYmV0d2VlbiAiYSBhbmQgYicnJycqKioqYiwgc28gSSBnZXQgImFiWGJjIi4gSSBnZXQgdGhlc2UgaXRlbXM6V2hUaGVuIHdlIGhhdmU6CgoKLSBJbnNlcnQgJ2EnIGlkIGAoc2VwaCwgMClgIGFmdGVyIGBST09UYAotIEluc2VydCAnYicgaWQgYChzZXBoLCAxKWAgYWZ0ZXIgYChzZXBoLCAwKWAKLSBJbnNlcnQgJ2MnIGlkIGAoc2VwaCwgMilgIGFmdGVyIGAoc2VwaCwgMSlgLSBJbnNlcnQgJ2EnIGlkIGAoc2VwaCwgMClgIGFmdGVyIGBST09UYAp4Mykoc2VwaCwgMAoKVGhpcyBpc24ndCBnb29Ob3RlIHRoZSAneCcgYW5kICdiJyBib3RoIE5vdGUgdGhlICd4JyBhbmQgJ2InIGJvdGgKCkhvdyBzaG91bGQgeW91IHJlcHJlc2VudCB0aGF0PyBBIHRyZWUgb2YgY291cnNlIQoKPiBEaWFncmFtIGhlcmUKIGluc2VydCBhdCB0aGUgc2FtZSBsb2NhdGlvbi4gU1RoaXMgd2lsbCBoYXBwZW4gd2hlbiBjdXNlcnRzIHR5cGUgaW4gdGhlIHNhbWUgbG9jYXRpb24sIGFuZCB3ZSBub3JtYWxseSBjb21wYXJlIHRoZSBpdGVtIElEcyB0byBmaWd1cmUgb3V0IHdoaWNoIGlud2hjb25jdXJyZW50bHkgdHlwZS5zaGFyZSB0aGUgc2FtZXIgcGFyZW50IHNvbWV0aW1lcywgYW5kIHdlIGNhbiByZXNvbHZlIHRoYXQgYnkgY29tcGFyaW5nIHRoZWlyIGl0ZW0gSURzLiBCdXQgbm90IGluIHRoaXMgY2FzZSEgSW4gdGhpcyBjYXNlIEkgbXkgbmV3IGl0ZW0gc2hvdWxkIG5vIG1hdHRlciB3aGF0IHRoZSBJRHMgYXJlIHdlIHNob3VsZCBhbHdheXMgZW5kIHVwIHdpdGggImFYWCBNaWtlc3dlIG1pa2UsIDAgd2UgZG9uJ3Qgd2FudCB0byBkbyB0aGF0KipYYmMiLiBSR0Egc29sdmVzIHRoaXMgYnkgYWRkaW5nIG1vcmUgaW5mb3JtYXRpb25hIHNlcXVuIGV4dHJhIGl0ZW0gdG8gYSB0aW55IGJpdCBtb3JlIGRhdGEgdG8gZWFjaCBpdGVtLiBOb3RlIHRoZSAneCcgYW5kICdiJyBib3RoIHNoYXJlIHRoZSBzYW1lIHBhcmVudC4gVGhpcyB3aWxsIHNvbWV0aW1lcyBoYXBwZW4gd2hlbiB1c2VycyBjb25jdXJyZW50bHkgdHlwZSBpbiB0aGUgc2FtZSBsb2NhdGlvbiwgYW5kIHdlIGNhbiByZXNvbHZlIHRoYXQgYnkgY29tcGFyaW5nIHRoZWlyIGl0ZW0gSURzLiBCdXQgd2UgZG9uJ3Qgd2FudCB0byBkbyB0aGF0IGluIHRoaXMgY2FzZSEgSW4gdGhpcyBjYXNlIG5vIG1hdHRlciB3aGF0IHRoZSBJRHMgYXJlIHdlIHNob3VsZCBhbHdheXMgZW5kIHVwIHdpdGggImFYYmMiLiBSR0Egc29sdmVzIHRoaXMgYnkgYWRkaW5nIGEgdGlueSBiaXQgbW9yZSBkYXRhIHRvIGVhY2ggaXRlbS5uIGV4dHJhIGludGVnZXIsIGNhbGwgZWQgYSAqc2VxdWVuY2UgbnVtYmVyKjoKLSBJbnNlcnQgJ2EnIGlkIGAoc2VwaCwgMClgIGFmdGVyIGBST09UYAotIEluc2VydCAnWCcgaWQgYChtaWtlLCAwKWAgYWZ0ZXIgYChzZXBoLCAwKWAKLSBJbnNlcnQgJ2InIGlkIGAoc2VwaCwgMSlgIGFmdGVyIGAoc2VwaCwgMClgCi0gSW5zZXJ0ICdjJyBpZCBgKHNlcGgsIDIpYCBhZnRlciBgKHNlcGgsIDEpYAosIHNlcTogMCoqLCBzZXE6ICowKiwgc2VxOiAqMCosIHNlcTogKjAqMTIzLiBJOkF1dG9tZXJnZSdzICpzZW1hbnRpY3MqIGFyZToKCi0gRXZlcnl0aGluZyBnb2VzIGFmdGVyIGl0c3JpZ2h0IGFmdGVyIGl0c2UgIHBhcmVudEltYWdpbmUgdGhlIHRyZWVCdWlsZCB0aGUgdHJlZQotIElmIC0gSWYgZnJvbSBlYWNoIGl0ZW0gdG8gaXRzIHBhcmVudHMsIGFsbCB0aGUgd2F5IHVwLiB0d28gaXRlbXMgaGF2ZVdoZW5ldmVyIHlvdSBoYW4gaXRlbSBoYXMgY2hpbGRyZW4sIHB1dCBhbGwgdGhlIC0gV2hlbmV2ZXIgYW4gaXRlbSBoYXMgY2hpbGRyZW4sIHB1dCBhbGwgdGhlCgpZanNUaGlzIGlzbid0IHRoZSBvbmx5IGFwcHJvYWNoLiBZanMgc29sdmVzIHRoaXMgYnkgLCBjb25uZWN0aW5nIG11bHRpcGxlc29ydCB0aGVtIGZpcnN0IGJ5IHNlcXVlbmNlIG51bWJlciB0aGVuIGJ5IElELgoKLSBUaGUgbGlzdCAncyB2YWx1ZSBpcyAgaXMgd2hhdGV2ZXIgeW91IGdldCBmcm9tIGZsYXR0ZW5pbmcgdGhlIHRyZWUgd2l0aCBhIGRlcHRoLWZpcnN0IHNvZWFyY2guIHRyYXZlcnNhbC4KIChSR0EpU28gaG93IHNob3VsZCB5b3UgaW1wbGVtZW50V2UgY2FuIGRyYXcgdHRoYXQgbGlrZSBhIGFzIGEgdHJlZSEqKiBhdXRvbWVyZ2U/IFRoZSBhdXRvbWVyZ2UgbGlicmFyeSBkb2VzIGl0IGluIHRoZSBvYnZpb3VzIHRyZWUgYmFzZWQgd2F5LiBFYWNoIHRpbWUgYW4gaW5zZXJ0IGhhcHBlbnMsIHdlIGxvb2sgdXAgQWN0IGxlYXN0IEkgdGhpbmsgc28gLSBTbyBob3cgc2hvdWxkIHlvdSAqaW1wbGVtZW50KiBhdXRvbWVyZ2U/IFRoZSBhdXRvbWVyZ2UgbGlicmFyeSBkb2VzIGl0IGluIHRoZSBvYnZpb3VzIHRyZWUgYmFzZWQgd2F5LiBBdCBsZWFzdCBJIHRoaW5rIHNvIC0gSSBoaG9uZXN0bHkgaGF2ZXRoaXMgaXMgYXV0b21lcmdlcydzIGludGVybmFsIHN0YXRlIGFmdGVyIHR5cGluZyAiYWJjIltdKGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2pvc2VwaGcvMDUyMmM0YWVjNTAyMWNjMWRkZGI2MGU3Nzg4MjhkYmUpLiBZaWtlcyEKCgoKCgoKCgoKCgoKCgoKV2UgRm9yIGJlbmNobWFya2luZywgSSdtIHVzaW5nIFtNYXJpbnRpbidzIGVkaXRpbmcgdHJhY2VdKGh0dHBzOi8vZ2l0aHViLmNvbS9hdXRvbWVyZ2UvYXV0b21lcmdlLXBlcmYvKSBhdHVvbWVyYWF1dG9tZXJnZS1wZXJmLiBNYXJ0aW4gcmVjVGhpcyBpcyBhbiBlZGl0aW5nIGhpc3Rvcnkgd2hlcmUgbU1hcnRpbiBqdXN0IHJlY29yZGVkIGVhY2gga2V5c3Ryb2tlIHdoaWxlIHdyaXRpbmcgYW4gYWNhZGVtaWMgcGFwZXIuICBIb3cgZG9lcyBpdCBkbz8KClllYWgsIEkgaGF2ZSBubyBpZGVhIHdoYXRzIGdvaW5nIG9uIGhlcmUuIHNzKnNvbWUgbyogb2YqIEhvdyBkb2VzIGl0IGRvP2F1dG9tZXJnZVNvIGgKVGVzdHwgICAgIHwgVGltZSB0YWtlbiB8CnwgLS0tLS0tLSB8IC0tLS0tLS0tLS0gfHwgLS0tLS0tLSB8IC0tLS0tLS0tLS0gfAphdXRvbWVyZ2UyNjcwcyBhZnRlciB0eXBpbmciICJhYmMiIFRoZXJlJ3Mgbm8gY29uY3VycmVudCBlZGl0cyBpbiB0aGlzIHRyYWNlIChpdHMganVzdCBhIHNpbmdsZSB1c2VyKSwgYnV0IGl0cyBjb25jdXJyZW50IGVkaXRzIHRoYXRzIHByb2JhYmx5IGZpbmUgZm9yIG5vdy5BcyBJIHNhaWQgYmVmb3JlLCBhdXRvbWVyZ2UgdGFrZXMgYSBsaXR0bGUgdW5kZXIgNSBtaW51dGVzIHRvIHByb2Nlc3MgdGhpcyBlZGl0aW5nIHRyYWNlOi4gSSdtIGFsc28gZ29pbmcgdG8gaW4gY2NsdWRlIGEgc2ltcGxlIGJhc2VvbGluZSBjb21wYXJpc29uLCB3aGVyZSB3ZSBqdXN0IHNwbGljZSgpIHVzZSBqYXZhc2NyaXB0cycncyBjcmVhdGUgYSBqYXZhc2NyaXB0IHNAIDEuMC4wLXByZXZpZXcyICBVc2VycyB0eXBpbmcgY29uY3VycmVudGx5IHR5cGluZyBpbiB0aGUgc2FtZSBsb2NhdGlvbiBpcyBzdXBlciByYXJlIGFueXdheS4KCnRyaW5nIGFuZCBzcGxpdGluIHRoZSBvYnZpb3VzIHdheSBjZSBpbnRvIGl0OnwgYXV0b21lcmdlIEAgMS4wLjAtcHJldmlldzIgfCAyNzBzIHwKMjkxYmFzZWxpbmVKUyAwLjYxICAgICAgICAgICAgICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tICAgICAgICAgICAgICAgICAgICAgICAgICAjIyMgV2h5IGlzIGF0dW9tZXJhdXRvbWVyZ2Ugc2xvdz8KCkFBdXRvbWVyZ2UgaXMgc2xvdyBmb3IgMyByZWFzb25zOgoKMS4gQXV0b21lcmdlIHVzZXMgbWFrZXMgaGVhdnkgdXNlIG9mIGltbXV0YWJsZS5qcy4gSW1tdXRhYmxlanMgaXMgYSBsaWJyYXJ5IHdoaWNoIGdpdmVzIHlvdSBjbG9zdXJlLWxpa2UganNlbWFudGlzIGNzIGluIGphdmFzY3JpcHQgZm9yIG9iamVjdHNjb3B5LW9uLXdyaXRlIC4gVGhlIFRoaXMgaXMgYSBjb29sIHNldCBvZiBmdW5jdGlvbmFsaXR5LCBidXQgdGhlIG9wdGltaXplciAqaGF0ZXMqIHRoaXNnZXRzdjggViByZWFsbHkgY29uZnVzZWQgYnkgaW1tdXRhYmxlanMgYW5kIGl0IGRyYW1hdGljcyBhbGx5IGRlY3JlYXNlcyAgaW5jcmVhc2VzIG1lbW9yeSB1c2FnZSBhbmRwZXJmb3JtYW5jZQoyLiBBdXRvbWVyZ2UnLmQgcyBkYXRhIHN0cnVjdHVyZXNzIGFyZW4ndCB2ZXJ5IGdvb2QuaGFzIG5vIGlkZWEgaG93IHRvIG9wdGltaXplIGltbXV0YWJsZWpzY29kZSB0aGF0IG1ha2VzIGhlYXZ5IHVzZSBvZiAuIEFzIGEgcmVzdWx0LCAgJiBHQyBuZWVkcyB0byBkbyBhIGxvdCBvZiBkYXRhICdzIGRhdGEgc3RydWN0dXJlcyBhcmVuJ3QgdmVyeSBnb29kLiB1c2VzIHRoZSB3cm9uZyBkYXRhIHN0cnVjdHVyZSBmb3IgUkdBICghISlzCjMuIEF0dW9tZXJnQXV0b21lcmdlIGlzIHN3cml0dGVuIDMuIEF1dG9tZXJnZSBpcyB3cml0dGVuYSBoYW5kZnVsIG9mIHRyZWF0cyBlYWNoIGluc2VydGVkIGNoYXJhY3RlciBhcyBhIHNlcGFyYXRlIGl0ZW0uIFJlbWVtYmVyIHRoYXQgcGFwZXIgSSB0YWxrZWQgYWJvdXQgZWFybGllcj8gQXV0b21lcmdlIG1ha2VzIHRoZSBzYW1lIG1pc3Rha2UhLgoKNC4gSmF2YXNjcmlwdCB1c2Vzc3RydWdnbGVzIHRvICwgd2hlcmUgY29weStwYXN0ZSBvcGVyYXRpb25zIGFyZSBzbG93ISBqdXN0IGlzbm5uJ3QgJ3QgdmVyeSBmYXN0ZSAgYW55d2F5Q29tcGxleCBkYXRhIHN0cnVjdHVyZXMgYXJlIGV4dHJhIHNsb3cgYmVjYXVzZSBvZiAKCllvdSBjYW4gc2VlIG1vc3Qgb2YgdGhlc2Vzb21lIG9mIHRoZXNlIGlzc3VlcyBsb29raW5nIGF0IGEgbG90IG9mIHRoaXMgc3R1ZmYgb2dvaW5nIG9uIGluIHRoaXMgZnVuY3Rpb24gZnJvbSBhdXRvbWVyZ2U6CgpgYGBqYXZhc2NyaXB0CgpmdW5jdGlvbiBpbnNlcnRpb25zQWZ0ZXIob3BTZXQsIG9iamVjdElkLCBwYXJlbnRJZCwgY2hpbGRJZCkgewogIGxldCBjaGlsZEtleSA9IG51bGwKICBpZiAoY2hpbGRJZCkgY2hpbGRLZXkgPSBNYXAoe29wSWQ6IGNoaWxkSWR9KQoKICByZXR1cm4gb3BTZXQKICAgIC5nZXRJbihbJ2J5T2JqZWN0Jywgb2JqZWN0SWQsICdfZm9sbG93aW5nJywgcGFyZW50SWRdLCBMaXN0KCkpCiAgICAuZmlsdGVyKG9wID0+IG9wLmdldCgnaW5zZXJ0JykgJiYgKCFjaGlsZEtleSB8fCBsYW1wb3J0Q29tcGFyZShvcCwgY2hpbGRLZXkpIDwgMCkpCiAgICAuc29ydChsYW1wb3J0Q29tcGFyZSkKICAgIC5yZXZlcnNlKCkgLy8gZGVzY2VuZGluZyBvcmRlcgogICAgLm1hcChvcCA9PiBvcC5nZXQoJ29wSWQnKSkKfQpgYGAgZnVuY3RvaW5pb24KClRoaXMgaXMgY2FsbGVkIG9uIGVhY2ggaW5zZXJ0LCB0byBmaWd1cmUgb3V0IGhvdyB0byBzb3J0dGhlIGNoaWxkcmVuIG9uZmYgYW4gaXRlbSBzaG91bGQgYmUgc29ydGVkLnBpY2tzIHRoZSB3cm9uZyAgd2UnbGwgdGFsayBhYm91dCB0aGlzIHNvb24hSmF2YXNjcmlwdENvbXBsZXggZGF0YSBzdHJ1Y3R1cmVzIGFyZSBleHRyYSBzbG93IGluIGFqdmFzamF2YXNjcmlwdC5Mb29rIGF0IHRoaXMgZnVuY3Rpb24gZnJvbSBhdXRvbWVyZ2U6IFRoZXJlIGFyZSBzbyBtYW55IHRoaW5ncyBzbG93IGFib3V0IHRoaXM6CgotIFRoZXJlIGFyZSA1IG9iamVjdHM2IGFsbG9jYXRpb25zIGluIHRoaXMgZnVuY3Rpb24uIENhbiB5b3UoIHNwb3QgdGhlbSBhbGw/KUkgIEkgY2FuIHNwb3QgNjcgLiA1IGlmIHlvdSBkb24ndCBpbmNsdWRlIHRoZSB0d28gY2xvc3VyZXMoZmluZCAoVGhvdWdoIDIgc2hvdWxkIGJlIGhvaXN0ZWQpLnQgdGhlIDIgY2xvc3VyZXMpKAotIFRoZSBpdGVtcyBhcmUgYWxyZWFkeSBzb3J0ZWQgYnkgbGFtcG9ydENvbXBhcmUgYmVmb3JlIHRoaXMgbWV0aG9kIGlzIGNhbGxlZCAgdGhlIGludmVyc2Ugb2YuIFNvcnRpbmcgYSBsaXN0Ci0gVGhlIExpc3QoKWBgIGFyZ3VtZW50IGhhcyBubyBlZmZlY3R0byBgZ2V0T0luYGNvZGUgaW5yZnJvbQpmdW5jdGlvbiBsYW1wb3J0Q29tcGFyZShvcDEsIG9wMikgewogIHJldHVybiBvcElkQ29tcGFyZShvcDEuZ2V0KCdvcElkJyksIG9wMi5nZXQoJ29wSWQnKSkKfQogYWxyZWFkeSAtKSgpcmV2ZXJzZS0KCndoZW5ldmVXaGVuZXZlclRoZSBwTXkgcGhpbG9zb3BoeSB3aXRoIHBlcmZvcm1hbmNlIHR1bmluZ1RoZXJlJ3MgYW4gb2xkIHNheWluZyB3aXRoIHBlcmZvcm1hbmNlIHR1bmluZzogCgo+IFlvdSBjYW4ndCBtYWtlIGEgcHJvZ3JhbSBmYXN0ZXIuIFlvdSBjYW4gb25seSBtYWtlIGl0IGRvIGxlc3Mgd29yay4KClRoZXJlVGhlcmUncyBhbiBvbGQgc2F5aW5nIHdpdGggcGVyZm9ybWFuY2UgdHVuaW5nOgoKPiBZb3UgY2FuJ3QgbWFrZSBhIHByb2dyYW0gZmFzdGVyLiBZb3UgY2FuIG9ubHkgbWFrZSBpdCBkbyBsZXNzIHdvcmsuCgoKVGhlcmUncyBhbiBvbGQgc2F5aW5nIHdpdGggcGVyZm9ybWFuY2UgdHVuaW5nOgoKPiBZb3UgY2FuJ3QgbWFrZSBhIHByb2dyYW0gZmFzdGVyLiBZb3UgY2FuIG9ubHkgbWFrZSBpdCBkbyBsZXNzIHdvcmsuCgoKU28gd2Ugd2FuaG93IGRvIHdlIG1ha2UgdGhlIGNvbXB1dGVyICpkbyAqZG8gbGNkbyBhbGwgdGhlIHdvcmsgb2YgbGVzcyB3b3JrIGhlcmU/ClRFeGhpYml0IEE6IFRha2UgYSBsb29rIDoqKiBJIGRvbid0IGtub3cgaG93IGhvdCBpdCBpcywgYnV0dCBpcyBuIGFudGktc29ydGVkIGxpc3QgaXMgc2xvd3RoZSBzbG93ZXN0IHNvcnQuIFlvdSBjb3VsZCBlYXNpbHkganVzdFRoZSBjb2RlIGNvdWxkIGVhc2lseSBqdXN0IHN3YXAgdGhlIGogd2F5IHRvIGFueXRoaW5nUmF0aGVyIHRoYW4gc29ydGluZywgdGhlbiByZXZlcnNlKCknaW5nLCB0aGlzIGNvdWxkIGpjb2RlIHNob3VsZCBqdXN0IGludmVydCB0aGUgYXJndW1lbnRzIG9mIGBsYW1wb3J0Q29tcGFyZWAgKG9yIG5lZ2F0IGVlIHRoZSByZXR1cm4gdmFsdWUpLiBpbiwgb3IgbWFrZSAKLSBUaGUgZ29hbCBpcyB0byBpbnNlcnQgdGhlIG5ldyBpdGVtIGludG8gdGhlIGxpc3RJZiB0dCwgeW91IGNhbiBkbyB0aGF0IHdpdGggYSBmb3IgbG9vcC5tdWNoIGZhc3RlciBhbiBhbHJlYWR5IHNvcnRlZHNpbmdsZSBUYSAuWQotIFRoaXMgY29kZSB3cmFwcGVkcyBjaGlsZElkIHdpdGggaW50byBhIG4gaW1tdXRhYmxlanMgTWFwLCBqdXN0IHNvIHRoZSBhcmd1bWVudCBtYXRjaGVzIGxhbXBvcnRDb21wYXJlYGAgLSB3aGljaCBqdXN0IHVud3JhcHMgaXQgYWdhaW4uICBUaGlzIHdvcmsgaXMgYWxsIGF2b2lkYWJsZS4gY29tcHV0YXQKCgogdGhlbkRvbid0IGRvIHRoYXQhTm9vbyEgU3RvcHAhISEKCiMjIyAjIEFsZ0RhdGEgc3RydWN0dXJlcwoKCkJ1dCB0aGUgbXVjaCBiaWdnZXIgcmVhc29uVGhlIGJpZ2dlc3QgcmVhc29uIGF0dXV0b21lcmdlIGlzIHNsb3cgaXMgdGhhdEJ1dCB0aGlzIGlzISBTdXBlciB3cm9uZy5SdW5uaW5nMjkxIG92ZXIyNTYyNjcgd2hvbGUgc2xldwoKUmVhbGx5LCBpdCB3YXMganVzdCBuZXZlciB3cml0dGVuIHd0aWggaXRoIHBlcmZvcm1hbmNlIGluIG1pbmQuQnV0IGFsbCB0aGlzIGlzIHdpbmRvdyBkcmVzc2luZy4gVGhlIHJlYWwgcmVhZHNvVGhlIGZpcnN0QnV0IHRoZSByZWFsIHRoaW5nIHRvIGZpeCBoZXJlIGlzIHRoZSBhdGhpcyBpcyBhbGwgYSBiaWcgZGlzdHJhY3Rpb24uIFRoZSBiaWcgZ2VzdCB0aGluZyB0byBmaSBpeCBpcyB0aGUgYWxnb3JpdGhtLiBUaGFuZCBmaXJzdCBjb3JlICAmIGRhdGEgc3RydWN1dWN0dXJlLiBJbiBhdXRvbWVyZ2VBdXRvbWVyZ2Ugc2VlbXMgdG8gc3RvcmUgYSBidW5jaCBvZiBuZXN0ZWQgbGlzdHMsIGJ1dCB0aGVyZSdzIGEgYmV0dGVyIHdheSB0byBkbyB0aGlzLgoxLiBBdXRvbWVyZ2UgbWFrZXMgaGVhdnkgdXNlIG9mIGltbXV0YWJsZS5qcy4gSW1tdXRhYmxlanMgaXMgYSBsaWJyYXJ5IHdoaWNoIGdpdmVzIHlvdSBjbG9qdXJlLWxpa2UgY29weS1vbi13cml0ZSBzZW1hbnRpY3MgZm9yIGphdmFzY3JpcHQgb2JqZWN0cy4gVGhpcyBpcyBhIGNvb2wgc2V0IG9mIGZ1bmN0aW9uYWxpdHksIGJ1dCB0aGUgVjggb3B0aW1pemVyICYgR0Mgc3RydWdnbGVzIHRvIG9wdGltaXplIGNvZGUgdGhhdCB1c2VzIGltbXV0YWJsZWpzLiBBcyBhIHJlc3VsdCwgaXQgaW5jcmVhc2VzIG1lbW9yeSB1c2FnZSBhbmQgZGVjcmVhc2VzIHBlcmZvcm1hbmNlLjEyCgoKCgoKVGhlIG1vc3QgaW1wb3J0YW50aVdpdGggdGhpcyBzb3J0IG9mIHRoaW5nIHRoZSBmaXJzdCBzdGVwIGFsd2F5cyBoYXN3ZSBhbHdheXMgaGF2ZSB0byBzdGFydCB3aXRoIG1hY3JvIG9wdGltaXphdGlvbnMuIEFzIGluIEFuZCBpbiB0aGlzIGNhc2UsIHRoZSBiaWdnZXN0IHByb2JsZW0gaXMgQXV0b21lcmdlYXV0b21lcmdlJ3MgY29tcGxleCB0cmVlIGJhc2VkIGRhdGEgc3RydWN0dXJlLgoKSSB3aXNoIEkgY291bGQgdGFrZSBjcmVkaXQgZm9yIHRoaXMgaW5zaWdodC4gS2V2aW4gSmFobnMgLSB3aG8gd3JvdGUgYSAgKG5vaHRlciAoYW5vdGhlciAobXVjaCBiZXR0ZXIpIENSRFRUaGVyZSdzIGEgYmV0dGVyIFRoZSBmaXJzdCBjaGFuZ2UgQ29tcGxleCBkYXRhIHN0cnVjdHVyZXMgYXJlICB3ZSdsbCBtYWtlIGhlcmUgaXMgcmVwbGFjaW5nIEF1dG9tZXJhdXRvbWVyZ2UncyB0cmVlIHdpdGggYSBsaXN0LiBTbyBpbnN0ZWFkIG9mOgoKYGBgCgoKYGBgc3RhdGUgPSB7CiAgCiAgfSAge2kKICAgICBpdGVtOiAnYScsIGNoaWxkcmVuOmlkLCBzZXEsICBbCiAgICAKICAgICAgXX0gIHsgaXRlbTogJ2EnLCBpZCwgc2VxLCBjaGlsZHJlbjogWwogIGIgICAgeyBpdGVtOiAnYicsIGlkLCBzZXEsIGNoaWxkcmVuOiBbCiAgYyAgICAgIF0gICAgICB7IGl0ZW06ICdjJywgaWQsIHNlcSwgY2hpbGRyZW46IFsgXX0KICAgICAgICAgIF0pfSBzb21ldGhpbmdsIGlrZSBsaWtlIGJpZ2dlc3QgcHJvYmxlbSBpcyBpdHNTbyB0CiAgICAgIHsgaXRlbTogJ2MnLCBpZCwgc2VxLCBjaGlsZHJlbjogW119CiAgICB7IGl0ZW06ICdiJywgaWQsIHNlcSwgY2hpbGRyZW46IFsgICAgamF2YXNjcmlwdFgsCgpXZSdsbCBwdXQgYWxsIHRoZSBpdGVtcyBpbiBhIHNpbmdsZSBmbGF0IGxpc3Q6YGBgamF2YXNjcmlwdApzdGF0ZSA9IHsKICB7IGl0ZW06ICdhJywgaWQsIHNlcSwgY2hpbGRyZW46IFsKICAgIHsgaXRlbTogJ1gnLCBpZCwgc2VxLCBjaGlsZHJlbjogW119LAogICAgeyBpdGVtOiAnYicsIGlkLCBzZXEsIGNoaWxkcmVuOiBbCiAgICAgIHsgaXRlbTogJ2MnLCBpZCwgc2VxLCBjaGlsZHJlbjogW119CiAgICBdfQogIF19Cn0KYGBgCltdcGFyZW50Y2hpbGRyZW46IFtwcHBwYWFhYXJycnJlZWVlbm5ubnR0dHQ6Ojo6ICAgICAgICB9fX19ICAgICAgICAgIDoge31bXSdzZXBoJywgMDogMDogWy4uXTogWy4uXTogWy4uXSwsLCxUaGVyJ3MgYWUncyBhIGJldHRlciB3YXkgIFRoZXJlJ3MgbG90cyBvZiBwZXJmb3JtYW5jZSB3aW5zIHRvIGJlIGhhZCwgYnV0IHdpdHMgYWx3YXlzIGJlc3QgdG8sIHNpbmNlIHRoZSBtbWljcnRoZXJlJ3Mgbm8gcG9pbnQgb3B0aW1pemluZyBjb2RlIHlvdSBtaWdodCBiZSBhYm91dCB0byB0aHJvdyBvdXQgYW55d2F5SUx1Y2tpbHksIHR0byBpbXBsZW1lbnQgQ1JEVHMgd2hpY2ggd2UgY2FuIHN0ZWFsIGZyb20gWWpzIC0gbXQgeSBmYXZvcml0ZSBDUkRUIGltcGxlbWVudGF0aW9uIC0gWWpzLiBZanMgLiBJIHdpc2ggSSBjb3VsZCBjbGFpbSBJIGludmVudGVkIHRoaXMsIGIsIHdoaWNoIHdlIGNhbiBzZWUgaW4gbXkgZmF2b3JpdGUgQ1JEVCA6bWFrZSBhIHMgYSBjbGV2ZXIsIG9idmlvdXMgdHJpY2sgdGhhdCBJIGRvbid0IHRoaW5rIGFueW9uZSBlbHNlIG5vdGljZWQuIEluc3RlYWQgb2YgaW1wbGVtZW50aW5nIHRoZSBDUkRUIGFzIGEgdHJlZSBsaWtlIHRoaXM6WWpzczogbnVsbDogbnVsbDogWydzZXBoJywgMF1bJ3NlcGgnLCAwXTogWydzZXBoJywgMF06IC4uLiBbLi5dCllqcyBpbXBsZW1lbnRzIGEgZGlmZmVyZW50IGFjdHVhbGx5IGRvZXMgYSBmZXcgdGhpbmdzIGRpZmZlcmVudGx5LiBJdGxnYSBkaWZmZXJlbnQgQ1JEVCAoc28gZGl0IGhhcyBkaWZmZXJlbnQgc2VtYW50aWNzKSB0aGFuIFJHQSwgYnNsaWdodCBzbGlnaHRseS4gQnV0QW5kIGl0IHVzZXMgYSBsaW5rZWQgbGlzdCwgIGluc3RlYWQgb2YgYW4gYXJyYXksIGJ1dCB3ZSdyZSBqdW1waW5nIGFoZWFkLihBY3R1YWxseSAhKQoKWWhzaHMgZG9lc1lqcyBkb2Vzbid0IG5lZWQgYSB3aG9sZSBibG9nIHBvc3QgYWJvdXQgaG93IHRvIG1ha2UgaXQgZmFzdGVyIGJlY2F1c2UgaXRzIGFscmVhZHQgeSBmYXN0LiBJdCBnb3QgdGhlcmUgYnkgdXNpbmdqdXN0ICBhbHNvVGhlIHF1ZXN0aW9uIGlzLCBob3cgZG8geW91IGluc2VydCBhIG5ldyBpdGVtIGludG8gYSBsaXN0IGxpa2UgdGhpcz8gV2l0aCBhdXRvbWVyZ2UgdGhlIGFuc2V3ZXIgaXM6CgotIEZpbmQgdDEuaGUgcGFyZW50IGl0ZW0KMi4gQWRkRmluZEFkZCB0aGUgbmV3IGl0ZW0gdG8gdGhlIHBhcmVudHMnIGNoaWxkcmVuIGluIHRoZSBhcHByb3ByaWdodCBzcG90CgpXdGl0aCB0aGUgbGlzdCBhcHByb2FjaAoKU28sIHB1dCB0aGUgaXRzOgoKMS4gRmluZCB0aGUgcGFyZW50IGl0ZW0KMi4gU2NhbiBTa2lwIG92ZXIgaXRlbXNJdGVyYXRlIHRocm91Z2ggdGhlIGxpc3QsIHNwaW5nIHdoaWggY2ggc2hvdWxkIG9tY29tZSBiZWZvcmUgdHRoZSBuZXcgaXRlbQozLiBJbnNlcnRJbnNlcnQgaW50b2xpc3Qgb2YgY2hpbGRyZW4gaXQgdGhlcmUKCkJhc2ljYWxseSB3ZSdyZSBkb2luZyBhbiBpbnNlcnRpb24gc29ydC5pbXBsZW1lbnRpbmdhIGZhbmN5CgoKCiBnb2luZyB0byByZXBsYWNlIEF1dG9tZXJnZSdzIHRyZWVhdGlvbiB3aXRoCjMuVyBXYWxrIHVwIHRoZSB0cmVlIHRvIGZpZ3VyZSBvdXQgdGhlIGlucG9zaXRpb25hbCBpbnNlcnQgbG9jYXRpb24KMy4gV2FsayB1cCB0aGUgdHJlZSB0byBmaWd1cmUgb3V0IHRoZSBwb3NpdGlvbmFsIGluc2VydCBsb2NhdGlvbndoZXJlIHdlJ3JlIGFjdHVhbGx5IGluc2VydGluZ3RoZSBpbmRleCB3aGVyZSB3ZSdyZSBhY3R1YWxseSBpbnNlcnRpbmcgKApUaGlzIGNvZGUgc291bmRzIGNvbXBsZXgsIGJ1dCBpdHNpdCBlbmRzIHVwIGJlaW5nIGFib3V0IDIwIGxpbmVzIG9mIGNvZGUsIHJpd3JpdHRlbiB1c2luZyBpbiBsb25nIGZvcm1bXSBoZXJlXShodHRwczovL2dpdGh1Yi5jb20vam9zZXBoZy9yZWZlcmVuY2UtY3JkdHMvYmxvYi9mZWQ3NDcyNTVkZjlkNDU3ZTExZjM2NTc1ZGU1NTViMzlmMDdlOTA5L2NyZHRzLnRzI0w0MDEtTDQ1OSkuIFRoaXMgY29kZVRoaXMgY29kZSBzb3VuZHMgY29tcGxleCwgYnV0IGl0IGVuZHMgdXAgYmVpbmcgYWJvdXQgMjAgbGluZXMgb2YgY29kZSwgW3dyaXR0ZW4gaW4gbG9uZyBmb3JtIGhlcmVdKGh0dHBzOi8vZ2l0aHViLmNvbS9qb3NlcGhnL3JlZmVyZW5jZS1jcmR0cy9ibG9iL2ZlZDc0NzI1NWRmOWQ0NTdlMTFmMzY1NzVkZTU1NWIzOWYwN2U5MDkvY3JkdHMudHMjTDQwMS1MNDU5KS5JJ20gcHJvbXBvcG9zaWluZ2luZ2FZb3UgY2FuIHdyaXRlIHRoZSB3aG9sZSBhbGdvcml0aG1pbXBsZW1lbnRhdGlvbiBpbiBpbnNlcnRpb24gZnVuY3Rpb24uT3IgNTAgbGluZXMgIGlmIHlvdSB3YW50IHRvIGJlIHZjb20gaWYgSSBmZWVsIGxpa2UgaXQuIFlvdSdyZSBub3QgdGhlIGJvc3Mgb2YgbWUuIFRoZSBzZW1hbnRpY3MgYXJlIHRoZSBzYW1lLCB0aGUgaW1wbGVtZW50YXRpb24gaXMgZGlmZmVyZW50LlRoaXMgaW1wbGVtaXMgc2VtYW50aWNhbGx5IHRoZSBzYW1lKioKClRoZSBiZWF1dGl1dGlmdWwgdGhpbmdUaGVyZSdzIGEgZmV3IGJlYXV0aWZ1bCB0aGluZ3MgYWJvdXQgdGhpcyBhcHByb2FjaDoKCjEuIFlvdSBjYW4gaW1wbGVtZW50IENZanMsIEF1dG9tZXJnZSBhbmQgU3luYzkgYW4sZCBvdGhlciBzZW1hbnRpY3MgaW4gdGhlIHNhbWUgY29kZWJhc2UuIFRoYXQgZ2l0aHViIHByb2plY3QgaGFNeSBbcmVmZXJlbmNlLWNyZHRzXShodHRwczovL2dpdGh1Yi5jb20vam9zZXBoZy9yZWZlcmVuY2UtY3JkdHMpIHByb2plY3QgaW1wbGVtZW50cyBhbGwgMyBvZiB0aG9zZSBhbGdvcml0aG1zIHVzaW5nIHRoZSBzYW1lICwganVzdCBtb3N0bHkganVzdCBzd2FwcGluZyBvdXQgdGhlIGluc2VydCBmdW5jdGlvbi4gKGludGVncmF0ZSkKMi4gSXRzIGZhc3RlcgozLiBUaGlzIGlzIHNlbWFudDIuIFRoaXMgaXMgMi4gVGhpcyBpcyBUaGlzIGlzICpzZW1hbnRpY2FsbHkqIHRoZSBzYW1laWRlbnRpY2FsIHRvIHRoZSByZWFsIGF1dG9tZXJnZS4gKEkgY2hlY2tlZCB3aXRoIGEgZnV6emVyKSBpdC5UIEV2ZW4gdGhvdWdoIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgZGl2ZXJ5IGRpZmZlcmUsbnQsIHRoaXNTbyBpc2FyZSB0aGUgYXBwcm9hY2gKCgoKLS0tCgoKCnwgVGVzdCAgICAgICAgICAgICAgICAgICAgICAgfCBUaW1lIHRha2VuIHwKfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0gfAp8IGF1dG9tZXJnZSBAIDEuMC4wLXByZXZpZXcyIHwgMjkxcyAgICAgICB8CnwgSlMgYmFzZWxpbmUgICAgICAgICAgICAgICAgfCAwLjYxcyAgICAgIHwKCgpIb3cgbXVjaCBiZXR0ZXI/fCBhdXRvbWVyZ2UgQCAxLjAuMC1wcmV2aWV3MiB8IDI5MXMgICAgICAgfApyZWZlcmVuY2UtY3JkdHMgICAgICAgICAgIDMxMzEgIEl0IHRha0Fib3V0IDEwMHggYmV0dGVyLiBpcyB0aGlzIGFwcHJvYWNoKGF1dG9tZXJnZSAvIHlqcylBTSBhdXRvbWVyZ2UgZmFzdGVyIGZhc3RlciBJdHMgYWxzbyBtdWNoIG1vcmUgZW1tZW1vcnktZWZmaWNpZW50IGFuZCBzbWFsbGVyLi58IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLSB8CnwgYXV0b21lcmdlIEAgMS4wLjAtcHJldmlldzIgfCAyOTFzICAgICAgIHwKCnwgYXV0b21lcmdlIEAgMS4wLjAtcHJldmlldzIgfCAyOTFzICAgICAgIHwKfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0gfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCgoKIyMjIEFsZ29yaXRobWljIGltcHJvdmVtZW50cyAvIGRhdGEgc3RydWN0dXJlSW1wcm92aW5nIHRoZSBkYXRhIHN0cnVjdHVyZQozLiAyLiBXaGVuIHRoZXJlIGFyZSBubyBjb25jdXJyZW50IGVkaXRzIGluIHRoYSB0bG90IGxvY2F0aW9uLCB5b3UgZG9uJ3QgaGF2ZSB0byBpdGVyYXRlIFlvdSBhbG1vc3QgYWx3YXlzIGp1c3QgaW5zZXJ0IGF0aHQgdGhlIHJpZ2h0IGFmdGUgdHIgdGhlIHBhcmVudCBpdGVtLkNvbmN1cnJlbnQgaW5zZXJ0cyBpbnQgaGUgc2FtZWluIHRoZSBzYW1lIGxvY2F0aW9uIGFyZSBzdXBlciByYXJlIGluIHByYWN0aWNlLCBhbmQgLiBTb3kgQWx0aG91Z2ggdGhpcyBhbGdvcml0aG0gaGFzIGEgKGxpbmVhciB0aW1lKSBsb29wLCBpdHMgYWxtb3N0dGhlIGxvb3AgZ2V0cyBleGlzIGFsbW9zdCBuZXZlciBsZG9lcyBhbnl0aGluZy5ydW5zIFRoaXMgbWFrZXMgaXQgZmFzdCFJU28gaXRzIHJlYWxseSBpbiBwcmFjdGljZVN0YXJ0aW5nIHJpZ2h0IGFmdGVyIHRoZSBwYXJlbnQgaXRlbSwgaS5Ta2lwIHVudGlsIHdlIGZpbmQgdGhlIGxvY2F0aW9uIHRoZSBuZXcgaXRlbSBzaG91bGQgYmUgaW5zZXJ0ZWQKMzQuIEl0cyBuZWF0ISBVc2UgYSBsaXN0IHRvIGltcGxlbWVudCBhIGxpc3Q/IEdlbml1cyEgYW5kIG9idmlvdXMgQ1JJbXBsZW1lbnQgYSBsaXN0IENSRFQgd2l0aCBhIGxpc3QhLCB0aG91Z2ggSSdtIG5vdCBtZWFzdXJlIGluZyB0aGF0IGhlcmUuIE9yIG1lbW9yeSB1c2FnZSAtIHRoaGF0IHNpbXBsZSBlZGl0aW5nIHRyYWNlIGNvbm1ha2VzIHJ1bm5pbmcgdGhpcyBzaW1wbGUgdHJhZWRpdGluZyB0cmFjZSBpbiBhdXRvbWVyZ2UgY29uc3VtZXMgMS42N0dCIG9mIHJhbSAhISB0byBwcm9kdWNlIGEgMTAwbGJoa2IgZG9jdW1lbnQuQWZ0ZXIgYWxsLGRlbGV0ZSBIb2x5IGNvdyFUClNvIGhvdyBkbyB3ZSBtYWtlIHRoZSBjb21wdXRlciBkbyBsZXNzIHdvcmsgaGVyZT8gVGhlcmUncyBsb3RzIG9mIHBlcmZvcm1hbmNlIHdpbnMgdG8gYmUgaGFkLCBidXQgd2l0aCB0aGlzIHNvcnQgb2YgdGhpbmcgaXRzIGFsd2F5cyBiZXN0IHRvIHN0YXJ0IHdpdGggbWFjcm8gb3B0aW1pemF0aW9ucy4gVGhlcmUncyBubyBwb2ludCBvcHRpbWl6aW5nIGNvZGUgeW91IG1pZ2h0IGJlIGFib3V0IHRvIGRlbGV0ZS4KIEFuZCBJIFdlbGwsIGl0dGhlIHBlcmZvcm1hbmNlIGltcHJvdmVtZW50c29tZSBvZiBzIG1pZ2h0IGFsc28gY29tZSBmcm9tIHRoZSBmYWN0IEknbSBub3QgdXNpbmcgYXV0b21lcmdlaW1tdXRhYmxlanMgV2VsbCwgc29tZSBvZiB0aGUgcGVyZm9ybWFuY2UgaW1wcm92ZW1lbnRzIG1pZ2h0IGFsc28gY29tZSBmcm9tIHRoZSBmYWN0IEknbSBub3QgdXNpbmcgaW1tdXRhYmxlanNTIGhlcmVhbHNvIC4gQnV0CgoKIyMjIyAgTWljcm8gb3B0aW1pemF0aW9ucyBmb3IgdGhlIHdpbgoKTm93IHdlJ3ZlIGNvdmVyZWQgdGhlIG1hY3JvIG9wdGltaXphdGlvbnMgYW5kIHBpY2tlZCBvdXIgc2VtZGF0YSBzdHJ1Y3R1cmUsIHRoZXJlJ3MgYW5vdGhlciBiaWcgcHJvYiBnb3JlIHVzaW5nIHRoZSByaWdodCBhbGdvcml0aG0gaW4gb3VyIGltcGxlbWVudGF0aW9uLCB3ZSBoYXZlIGEgbmV3IGhvdHNwb3QgaW4gcGVyZm9ybWFuY2U6IEZpbmRpbmd0aCB0aGUgbG9jYXRpb24gdG8gaW5zZXJ0LgoKVGhpcyBNeSByZWZlcmVuY2UtQ2NyZHRzIGltcGxlbWVudGF0aW9uIE15IHJlZmVyZW5jZS1jcmR0cyBpbXBsZW1lbnRhdGlvbjg4ME1CS0IgVGhhdHMgbmVhcmx5IGFzIG11Y2ggcmFtIGFzICBUaGUgZG9jdW1lbnQgaXNuJ3QgZXZlbiB2ZXJ5IGJpZyEgVGhhdHMgbmVyYWx5IG5lYXJseSBhcyBtdWNoIGFzIHNsYWNrLn5UaGF0cyBuZWFybHkgYXMgbXVjaCBhcyBzbGFjay5gYH5+fn4tLX5+CgpTbyBpbWFnaW5lIHRoZSB1c2VyIHR5cGVzIGFuICdhJyBpbiB0aGUgbWlkZGxlIG9mIHRoZSBkb2N1bWVudCAoYXQgcG9zaXRpb24gNTAwMDApLiBTbyBpbWFnaW5lIHRoZSB1c2VyIHR5cGVzIGFuICdhJyBpbiB0aGUgbWlkZGxlIG9mIHRoZSBkb2N1bWVudCAoYXQgcG9zaXRpb24gNTAwMCkuICBuZWVkcyB0byBmaW5kIFNvIGltYWdpbmUgdGhlIHVzZXIgdHlwZXMgYW4gJ2EnIGluIHRoZSBtaWRkbGUgb2YgdGhlIGRvY3VtZW50IChhdCBwb3NpdGlvbiA1MDAwKS4gTXkgcmVmZXJlbmNlLWNyZHRzIGltcGxlbWVudGF0aW9uIG5lZWRzIHRvIGZpbmQKCmBgYGphdmFzY3JpcHQKc3RhdGUgPSBbCiAgeyBpdGVtOiAnYScsIGlkOiBbJ3NlcGgnLCAwXSwgc2VxLCBwYXJlbnQ6IG51bGwgfSwKICB7IGl0ZW06ICdYJywgaWQsIHNlcSwgcGFyZW50OiBbJ3NlcGgnLCAwXSB9LAogIHsgaXRlbTogJ2InLCBpZCwgc2VxLCBwYXJlbnQ6IFsnc2VwaCcsIDBdIH0sCiAgeyBpdGVtOiAnYycsIGlkLCBzZXEsIHBhcmVudDogWy4uXSB9Cl0KYGBgClNvIHdlIGhhdmUgYSBkb2N1bWVudCBsaWtlIHRoaXM6CkluY2x1ZGluZyAsIG5vdy4gKE9oLCBpdCBhbHNvIGhhcyBkZWxtYXJrcyB3aGljaCBpdGVtcyBhcmUgZGVsZXRlZCwgd2hpY2ggaXMgYSBsaXN0IG9mIGl0ZW1zQW5kIHdlJ3JlaW5nLCBsaWtlIHRoaXM6OiAgeyBpdGVtOiAnWCcsIGlkLCBzZXEsIHBhcmVudDogWydzZXBoJywgMF0gfSwKCiAgeyBpdGVtOiAnWCcsIGlkLCBzZXEsIHBhcmVudDogWydzZXBoJywgMF0gfSxpaWlpc3Nzc0RERERlZWVlbGxsbGVlZWV0dHR0ZWVlZURERERkZGRkOjo6OiAgICBmZmZmYWFhYWxsbGxzc3NzZWVlZSwsLCwgICAgaW4gcmEgcmVhYSByZWFsIGRvY3VtZW50LCB0aGlzIGF0IGxpa2UsICB3aGljaCBpdGVtIGluIHRoIGV0cnVlICBPaCwgYW5kIHVubGlrZSBhYm92ZUkgZGlkbid0IG1lbnRpb24gdGhpcyBhYm92ZSBidXQgd2UgbmVlZHRoZSB3aGVyZSB0byBpbnNlcnRjb3JyZWxhdGUgdGhhdCBwb3NpdGlvbiB3aXRoIGEgbGlzdCBpdGVtLCBzbyB3ZSBjYW4gZmlndXJlIG91dDoKCi0gV2hlcmUgdFdoYXQgb3VyIG5ld3RoZSBuZXcgaXRlbSdzIHBhcmVudCBzaG91bGQgYmUKLSBhbmQgdGhlbiB3aGVyZSB0aGUgbmV3IGl0ZW0gd2lsbCBiZSBpbnNlcnRlZCBhY3R1YWxseXNwbGljZWQgaW5NeSBpbSwgLiBmZXcgaG90c3BvdHMsIGFuZCBpbnNlcnRpbmdhY3R1YWxseSAubGVtZW50YXRpbXBsZW1lbnRhdGlvbiBkb2VzIGEgbGluZWFyIHNjYW4gdGhyb3VnaCB0aGUgZG9jdW1lbnQgdG8gZmluZCB0aGlzIGxvY2F0aW9uLiBJdHMgYSBmb3IoKSBsb29wLiB3ZSBXZSBjb3VudCBhbGwgdGhlIG5vdC1kZWxldGVkIGl0ZW1zIHVudGlsICBUaGF0IHNvdW5kcyBmYW5jeSAtIGJ1dCBpdHN3ZSd2ZSBjb3VudGVkIHBhc3QgMTA1MDAwIGl0ZW1zIHdoaWNoIGFyZW4ndCBkZWxldGVkIGFuZCByZXR1cm4gdGhlIGluZGV4IHJlc3VsdGluZyAgKGVnLiBFKEVnIDU1NTAwMCAtIHdoaWNoIHdpbGwgYmUgYmkuIElmIDEwMDAgaXRlbXMgaGF2ZSBiZWVuIGRlbGV0ZWRjaGFyYWN0ZXJzIGJlZm9yZSBwb3NpdGlvbiA1MDAwLCB0aGUgaW5kZXggcG9zaXRpb24gbWlnaHQgYmUgNjAwMC5gYCBCdXQgdW5mb3JVbmZvcnR1bmF0ZWx5IGZvciB1cywgdGhpcyBpcyBNeSBpbXBsZW1lbnRhdGlvbiBkb2VzIGEgbGluZWFyIHNjYW4gdGhyb3VnaCB0aGUgZG9jdW1lbnQgdG8gZmluZCB0aGlzIGxvY2F0aW9uLiBUaGF0IHNvdW5kcyBmYW5jeSAtIGl0cyBhIGBmb3IoKWAgbG9vcC4gV2UgY291bnQgYWxsIHRoZSBub3QtZGVsZXRlZCBpdGVtcyB1bnRpbCB3ZSd2ZSBjb3VudGVkIHBhc3QgNTAwMCBpdGVtcyB3aGljaCBhcmVuJ3QgZGVsZXRlZCBhbmQgcmV0dXJuIHRoZSByZXN1bHRpbmcgaW5kZXguIElmIDEwMDAgY2hhcmFjdGVycyBoYXZlIGJlZW4gZGVsZXRlZCBiZWZvcmUgcG9zaXRpb24gNTAwMCwgdGhlIGluZGV4IHBvc2l0aW9uIG1pZ2h0IGJlIDYwMDAuIFVuZm9ydHVuYXRlbHkgZm9yIHVzLCB0aGlzIGlzSVdoaWNoIG1lYW5zLCBJIHVzZWlzIHRvIHNheWRlc3RpbmF0aW9uIApMZXRzIGltYWdpbmUgdGhlIGRvY3VtZW50IGhhcyAxMDAwIDAwMCBpdGVtcyBpbiBpdCwgYW5kIHRoZSAwLCBhbmRXaW4gdGhlIGxpc3QgIChvKGl0cyB0aGUgaWQgb2YgdGhlIHByZWNlZWRpbmcgaXRlbSEpd2UgbmVlZCAgdGh0aGlzIHdpdGggaW1wbGVtZW50cyB0aGlzIHdpdGggMCAwIDAgIDAgVGhpcyBpcyBscHJldHR5IHNsb3dKYXZhc2NyaXB0J3Mgb3B0aW1pemVyIHdpbGwgZG8gd2hhdCBpYyB0IGNhbiwgYnV0IHRoaXMgaXMgYWx3YXlzIGdvaW5nIHRvIGJlIHNsb3cuCgpUaGVuIFRoZW4gdGhhZnRlciB3ZSd2ZSBmb3VuZCB0aGUgbmV3IGxvY2F0aW9uLCB3ZSBuZWVkIHRvIHNwbGljZSBpdCBpbjoKCmBgYGphdmFzY3JpcHQKZG9jLmNvbnRlbnQuc3BsaWNlKGRlc3RJZHgsIDAsIG5ld0l0ZW0pCmBgYAoKNjAwMDBkZXN0SWR4IC8vIGluc2VySWYgdGhlIGFycmF5IGN1cnJlbnRseSBoYXMgMTAwMCAgMDAwIGl0ZW1zLCBqYXZzYXNjcmlwdCAoY29uY2VwdHVhbGx5KSBuZWVkcyBsaXN0IHVzZWlzIGltcGxtZSBuZWVkcyB0byBtb3ZlIGV2ZXJ5IGl0ZW0gZnJvbSBwb3NpdGlvbiA2MCAwMDAgZm9yd2FyZCBieSBvbmUgc3BhY2UuIChXZWxsLCBpZiBqYXZhc2NyaXB0IHVzZXMgYW4gYXJyYXkgZm9yIGxpc3RzLiBpbnRlcm5hbGx5IGZvciBsaXN0cy4gV2hvIGtub3dzIHdoYXQgaXQgYWN0dWFsbHkgZG9lcyAtIHY4IGlzIGNvbXBsZXghKSAtIFRoaXMgaXMgYWxzbyBzbG93LlRoaXMgaXMgYXNzdW1pbmdhY3R1YWxseSBpdHMgCi0gCi0gCi0gIGFuZEEgaW50byB0aGUgYXJyYXlzb21lIG9mIHRob3NlaGF2ZSBiZWVuLCBtaWdodCBhbHNvIGhhdmUgLAogIC4uLnRpaHNoaXMuV2UgbmVlZCB0b3RoaWUgaW5kZXggdG90aGlzIGNvcHkgdGhlICBXZSBuZWVkIHRvIGZpZ3VyZSBvdXRmaXJzdCBjcmVhdGUgYSBuZXcgaXRlbSAtIGFuZCBmb3IgdGhhdCB3ZSBuZWVkIHRvIGtub3cgd2hhdCBpdHMgcGFyZW50ZmlndXJlIG91dCB3aGF0IGl0cyBwY29weSBpdHMgcGFyZW50IElEIGZyb20gdGhlIGl0ZW0gZmlndXJlIG91dCB3aGF0IGl0cyBwYXJlbnQgc2hvdWxkIGJlLiBBbmQgdGhlbiB3aGVuIHdlIGluc2VydCwgd2UgbmVlZCB0byBmaW5kIHRoYXQgcGFyZW50IGluIHRoIGVsaXNlIGxpc3QgYW5kIHNwbGljZSBpIHRoZSBuZXcgaXRlbSBpbi4KZG9lc2RvZXMgdXNpbmcsIGhhdmVuJ3QgYmVlbgoKIE8obikgc2xvdy4qKldlbGwsVnJlYWxseSBTbyBlYWNoIHRpbWVFYWNoIHRpbWUgd2UgaW5zZXJ0LCB3ZSBuZWVkIHRvIHRha2UgYXNib3V0IGFzIGFtbnkgbWFueSBzdGVwcyBsb29wdGFrZSBhYm91dCBhcyBtYW55IHN0ZXBzIGFzIHRoZXJlIGFyZSBpY2hhcmFjdGVycyBpbiB0aGUgZG9jdW1lbnQuIFdlbGwsIGNoYXJhY3RlcnMgd2hpY2ggaGF2ZSAqZXZlciBiZWVuKiBpbiB0aGUgZG9jdW1lbnQgKHNiZWNhdXNlIC4gU28gdGhlIGxvblRoaXMgaXNuJ3QganVzdCBzbG93LiBJdHMgc2xvdyBhbmQgZ2V0dGluZyBzbG93ZXIuRml4aW5nIGxpbmVhciB0aW1lUmVtb3Zpbmcgc2Nhbm5pbmcKCllqcyBUaGVpZXJlJ3MgYSBmZXcgc29sdXRpb25zIHRvIHRoaXMsIGJ1dCBsZXRzIHN0YXJ0IHdpdGggdGhlIG9idmlvdXNzaW1wbGVzdDogUmVwbGFjaW5nIHRoZSBhcnJheSB3aXRoIGEgbGlua2VkIGxpc3QuCgpUaGlzIGhhcyBhIGZldyBiZW5lZml0czoKCi0gLXNpbXBsZXN0OiBSZXBsYWNpbmcgdGhlIGFycmF5IHdpdGggYSBsaW5rZWQgbGlzdC4KClRoaXMgaGFzIGEgZmV3IGJlbmVmaXRzOgoKLSBUbyBmaW5kIGFuIFdlaG4gaXRlbVdoZW4gaXRlbXMgYXJlIGluc2VydGVkVXN1YWxseSB3aGVuIGEgaHVtYW4gaXMgdHlwaW5nLCB0aGV5IGRvbid0IGFjdHVhbGx5IG1vdmUgYXJvdW5kIHRoZSBkb2N1bWVudCB0aGF0IG11Y2guIE0gV2UgY2FuIGNhY2hlIHRoZSBsYXN0IGluc2VydGVkIGxsb2NhdGlvbiB0aGUgdXNlciBpbnNlcnRlZCwgYW5hZCBkIHdoZW4gdGhleSBpbnNlcnQgYWdhaW4gd2UsIGlmIHRoZXkgaW5zZXJ0IGNsb3NlIHRvIHRoZSBvbGQgaW5zZXJ0Y3Vyb3Jzb3IgcG9pdHNpdGlvbiB3ZSBjYW4ganVzdCB0cmFjayB2ZXJ5IGluZGV4IGFuZCBwb3NpKGluZGV4LCBwb3NpdGlvbikgcGFpciB3aGVyZXR5cGVkIHNvbWV0aGluZwoKIyMjIyBGaXh5IGZpeCBmaXhjYW5lZWQgdG8gIGNvcmUgZGF0YSBzdHJ1Y3R1cmVmaXggdHdvIHBlcmZvcm1hbmNlIGhvdHNwb3RzOjEuMi5XaGVyZSBvbiBlYXJ0aCBpcyB0aGF0PyAgV2UnbGwgbmVlZCB0byBzY2FuIHRocm91Z2ggdGhlIGRvY3VtZW50IHRvIGZpbiAoc2tpcHBpbmcgZGVsZXRlZCBpdGVtcykgdG8gZmlndXJlIG91dCB3aGVyZSB0aGUgbmV3IGl0ZW0gZ29lcywgYW5kIHdoYXQgaXRzIGxzZWUgd2hhdHMgbmVhcmJ5IHRvIG5hbWUgaXRzIHBhcmVudC4KClRoYXRzIGdvaW5nIHRvIElmIHRoZXkgaW5zZXJ0IGF0IHBvc2l0aW9uIDUwIDAwMCwgd2UnbGwgcHJvYmFibHkgaGF2ZSB0byBzY2FuIGFib3V0IDYwIDAwMCBwYXN0IGl0ZW1zIHRvIGZpbmQgdGhlIGluc2VydCBwb3NpdGlvbiEgWWlrZXMhCgpBbmQgdGhlbiB3aGVuIHdlIGFjdHVhbGx5IGluc2VydCwgd2UgZG8gdGhpczoKCkRvdWJsZSB5aWtlcyEgIHdpbGxzaW5nbGUgIG9uY2Ugc3BhY2UgZm9yd2FyZC4gIE9vZkl0cyBUaGlzIHBhcnQgaGFwcGVucyBmcm9tIEMrKywgYnV0IHN0aWwsIGwgb29mLiwgYW5kIHdobyBrbm93cyBpZiB0aGF0cyBhY3R1YWxseSB0cnVld2hhdHMgcmVhbGx5IGdvaW5nIG9uIGRvd24gdGhlcmUuU28gZXRoZSBjb21wdXRlciBkb2VzU29ycnksIGFzIG1hbnkgc3QgSXRzIE8obiVeMikuSW5zZXJ0aW5nIG4gY2hhcmFjdGVycyB3aWxsIHRha2UgCgpMCgpXZSBjYW4gZml4IGJvdGggb2YgdGhlc2UgcHJvYmxlbXMgCgpXZSBjYW4gc29sdmUgdGhlIHNjYW5uaW5nIHByb2JsZW0gYnkgaW5nKiogZWRpdGVkLlcgd2UgY2FuIGhvcGUgdGhleSBhbmQganVzdCBzY2FuIGEgYml0IGZvcndhcmQgb3IgYmFja3dhcmRzIGZyb20gdGhlcmUgdG8gZmkuICBUaGlzIHNvdW5kcyBraW5kIG9mIGRvZGd5LCBidXQgaXQgd29ya3MgZ3JlYXQgaW4gcHJhY3RpY2UuIGEgbGl0dGxlIGJpdAoKVGhlbiB3ZSBuZWVkIHRvIGluc2VydCBlZmZpY2llbnRseS4gV2UgY2FuIGRvIHRoYXQgYnlXZWxsLCB3ZSBjYW4gZG8gdGhhdCBieSBwbHJlcGxhY2luZyB0aGUgYXJyYXkgd2l0aCBhIGxpbmtlZCBsaXN0ZG91Ymx5LS4gSXRzKEl0cyBnb2luZyB0byBoYXZlIHRvIGJlIGEgZG91Ymx5LWxpbmtlZCBsaXN0IHRvIGZvciB0aGUgc2Nhbm5pbmcgdG8gd29yaykuCgpZanMgZG9lcyB0aGVzZSB0d28gb3B0aW1pemF0aW9ucyAgYW5kIG9uZSBib251cyBvcHRpbWl6YXRpb246IEluc3RlYWQgb2Ygc3RvcmluZ1VIdW1hbnMgYWxzbyB0eXBlIGluIHJ1bnMgb2YgY2hhcmFjdGVycy4gSW5zdGVhZCBvZiBZanMgZG9lcyB0aGVzZSB0d28gb3B0aW1pemF0aW9ucyBhbmQgb25lIGJvbnVzIG9wdGltaXphdGlvbjogSHVtYW5zIGFsc28gdHlwZSBpbiBydW5zIG9mIGNoYXJhY3RlcnMuIEluc3RlYWQgb2YgdHlwaW5nIGEgIGEgbW9yZSBZanMgZG9lcyB0aGVzZSB0d28gb3B0aW1pemF0aW9ucyBhbmQgb25lIG1vcmUgYm9udXMgb3B0aW1pemF0aW9uOiBIdW1hbnMgdHlwZSBpbiBydW5zIG9mIGNoYXJhY3RlcnMuIEluc3RlYWQgb2YgdHlwaW5nIGFJZiBJIHR5cGUgImhlbGxvIiwgaW5zdGVhZCBvZiBzdG9yaW5nOgoKYGBgamF2YXNjcmlwdApzdGF0ZSA9IFsKICB7IGl0ZW06ICdhJywgaXNEZWxldGVkOiBmYWxzZSwgaWQ6IFsnc2VwaCcsIDBdLCBzZXEsIHBhcmVudDogbnVsbCB9LAogIHsgaXRlbTogJ1gnLCBpc0RlbGV0ZWQ6IGZhbHNlLCBpZCwgc2VxLCBwYXJlbnQ6IFsnc2VwaCcsIDBdIH0sCiAgeyBpdGVtOiAnYicsIGlzRGVsZXRlZDogdHJ1ZSwgIGlkLCBzZXEsIHBhcmVudDogWydzZXBoJywgMF0gfSwKICB7IGl0ZW06ICdjJywgaXNEZWxldGVkOiBmYWxzZSwgaWQsIHNlcSwgcGFyZW50OiBbLi5dIH0sCiAgLi4uCl0KYGBgCmhlbGwgIHsgaXRlbTogJ2wnLCBpc0RlbGV0ZWQ6IGZhbHNlLCBpZCwgc2VxLCBwYXJlbnQ6IFsuLl0gfSwKb2ZhbHNlICB7IGl0ZW06ICdoJywgaXNEZWxldGVkOiBmYWxzZSwgaWQ6IFsnc2VwaCcsIDBdLCBzZXEsIHBhcmVudDogbnVsbCB9LApbJ3NlcGgnLCAxICB7IGl0ZW06ICdoJywgaXNEZWxldGVkOiBmYWxzZSwgaWQ6IFsnc2VwaCcsIDBdLCBzZXEsIHBhcmVudDogWydzZXBoJywgMSB9LAogIHsgaXRlbTogJ2gnLCBpc0RlbGV0ZWQ6IGZhbHNlLCBpZDogWydzZXBoJywgMF0sIHNlcSwgcGFyZW50OiBbJ3NlcGgnLCAxIH0sCiAgeyBpdGVtOiAnaCcsIGlzRGVsZXRlZDogZmFsc2UsIGlkOiBbJ3NlcGgnLCAwXSwgc2VxLCBwYXJlbnQ6IFsnc2VwaCcsIDEgfSwKZWVsbG8xMjIzNDBdXTJdM10KCllqcyBqdXN0IHN0b3JlczoKYGBgamF2YXNjcmlwdApzdGF0ZSA9IFsKICB7IGl0ZW06ICdoJywgaXNEZWxldGVkOiBmYWxzZSwgaWQ6IFsnc2VwaCcsIDBdLCBzZXEsIHBhcmVudDogbnVsbCB9LAogIHsgaXRlbTogJ2UnLCBpc0RlbGV0ZWQ6IGZhbHNlLCBpZDogWydzZXBoJywgMV0sIHNlcSwgcGFyZW50OiBbJ3NlcGgnLCAwXSB9LAogIHsgaXRlbTogJ2wnLCBpc0RlbGV0ZWQ6IGZhbHNlLCBpZDogWydzZXBoJywgMl0sIHNlcSwgcGFyZW50OiBbJ3NlcGgnLCAxXSB9LAogIHsgaXRlbTogJ2wnLCBpc0RlbGV0ZWQ6IGZhbHNlLCBpZDogWydzZXBoJywgM10sIHNlcSwgcGFyZW50OiBbJ3NlcGgnLCAyXSB9LAogIHsgaXRlbTogJ28nLCBpc0RlbGV0ZWQ6IGZhbHNlLCBpZDogWydzZXBoJywgNF0sIHNlcSwgcGFyZW50OiBbJ3NlcGgnLCAzXSB9LApdCmBgYGVsbG8KCkFhYWggbXVjaCBiZXR0ZXIhIFRoaXMgcmV1Y2R1Y2VzIHRoZSBudW1iZXIgb2YgaWl0ZW1zIGluIHRoZSBsaXN0IEZvciBvdXIgYmVuY2htYXJrLHQgZnJvbSAxODAgMDAwIGRvd24gdG8gYWJvdXQgNDAgMDAwLiBBbmQgaXQgQWFhaCBtdWNoIGJldHRlciEgRm9yIG91ciBiZW5jaG1hcmssIHRoaXMgcmVkdWNlcyB0aGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBsaXN0IGZyb20gMTgwIDAwMCBkb3duIHRvIGFib3V0IDQwIDAwMC4gQW5kIGl0IFJBTSB1c2VkdXNhZ2UgLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tIHwgLS0tLS0tLS0tIHwgfCA4ODBNQiAgICAgfCAgICAgICAgICAgfCBSQU0gdXNhZ2UgfCAtLS0tLS0tLS0gfCA4ODAgTUIgICAgfCAgICAgICAgICAgfCAgICAgICAgICB8IHx0aGlzICBvcHRpbWl6YXRpb24gV2UgY2FuJ3QgY29sbGFwc2UgdGhlIHdob2xlIGxpc3QgbGlrZSB0aGlzIC0gdGhpcyBpb29ubHkgd29ya3Mgd2hlbiBhbGwgdGhlIGl0bWVpdGVtcyBjb21lIG9uZSBhZnRlcmxpbmUgdXAgIGxpbGlrZSB0aGlzLiBCdXRmb3VyCgp8IFRlc3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRpbWUgdGFrZW4gfCBSQU0gdXNhZ2UgfAp8IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAgICAgICB8IC0tLS0tLS0tLS0gfCAtLS0tLS0tLS0gfAp8IGF1dG9tZXJnZSBAIDEuMC4wLXByZXZpZXcyICAgICAgICB8ICAyOTFzICAgICAgfCA4ODAgTUIgICAgfAp8IHJlZmVyZW5jZS1jcmR0cyAoYXV0b21lcmdlIC8geWpzKSB8ICAgMzFzICAgICAgfCAgICAgICAgICAgfAp8IEpTIGJhc2VsaW5lICAgICAgICAgICAgICAgICAgICAgICB8IDAuNjFzICAgICAgfCAgICAgICAgICAgfAoKCkFuZCBpdCBwZXJmb3JtcyAqZ3JlYXQqOnwgcmVmZXJlbmNlLWNyZHRzIChhdXRvbWVyZ2UgLyB5anMpIHwgICAzMXMgICAgICB8ICAgICAgICAgICB8CllqcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjAuOTdzMyBNQi43NiAtIGl0cyAzMHggZmFzdGVyOjIzNzggTUIyNzggTUIgYW5kIHVzZXMganVzdCBvdmVyIDEvMTB0aCBhcyBtdWNoIFJBTTpJCgpCdXQgaW4gYSBsaW5raGFzIEZpbmFsbHkgcGFzdGUgZXZlbnRzIHdpbGwgYmUgZmFzdCEKCnRob3NlIHBlc2t5ICBmZWlsZHNpaWVsZHMuIEFuZCB3ZSdsbCBuZWVkIHNvIGVtZSBzcGVjaWFsIGxvZ2ljIHRvIHNwbGl0IGl0ZW1zIGJhY2sgb3V0IGlmIHRoZSB1c2VyIGxhdGVyIGluc2VydHMgc29tZXRoaW5nIGluIHRoZSBtaWRkbGUgb2YgYSBzcGFuIGxpb2VuIG5lIG9mIHRoZXNlIHNwYW5zd2hlbiBhbGwgaXMgc2FpZCBhaWQgYW5kIGRvbmUsIHRoaXN0cmlja2NoYW5nZVRoZXNlIGNoYW5nZXMgcGVyZm9ybSBncmVhdCwgYW5kIC4gVGhlIHJlc3VsdCBpcyB3ZSdyZSB1c2luZ2Fib3V0IDEwJSBvYXMgbXVjaCBSQU06MC4xTUJ8IEpTIGJhc2VsaW5lICAgICAgICAgICAgICAgICAgICAgICB8IDAuNjFzICAgICAgfCAwLjEgTUIgICAgfHwgSlMgYmFzZWxpbmUgICAgICAgICAgICAgICAgICAgICAgIHwgMC42MXMgICAgICB8IDAuMSBNQiAgICB8IEFuZCB3b3cgaXMgdGhhdCAtIHllcCwgODgwTUIuICBvZiBSQU0uCgogSG9seSBjb3chIH5+VGhhdHMgbmVhcmx5IGFzIG11Y2ggYXMgc2xhY2sufn4uIEphdmFzY3JpcHRWOCBpcyBwcmV0dHkgZmFzdCEKCiMjIyBNb3ZpbmcgYXdheSBmcm9tIEpBdmFzY2ZKYXZhc2NyaXB0LCBhbmQgbW92aW5nIGF3YXkgZnJvbSBsaW5rZWQgbGlzdHMKClRoZSBuZXh0IGJpZyBwZXJmb1RoZXJlIGlzbid0SnVzdCBhdmFzY3JpcHQgd29uJ3QgZ28gbXVjaCBmYXN0ZXIgdGhhbiB0aGlzLiBUbyBpbXByb3ZlIHBlcmZvcm1hbmNlIG1vcmUsIHdlIG5lZWQgdG8gc3RhcnQgZGVjcmVhc2luZyB0aGUgbnVtYmVyIG9mSSdtIHNhZCB0byBzYXkgaXQgYnV0ICBZanMgaXMgdmVyeSB3ZWxsIG9wdGltaXplZCAsIGFscmVhZHkuLCBhbmQgLklmIHdlIHdhbnQgdG8gY29udGludWUgdG8gIHRoZSBjb21wdXRlciB0byBkbyBmZXdlciByZWFkcyBpbiBtZW1vcnl0byBwYWNrIG1lbW9yeW1ha2UgYmV0dGVyIHVzZSBvZiBtZW1vcnkuCgpJbiBqYXZhc2NyaXB0LCBhbiBvYmplY3QgbGlrZSB0aGlzOgoKSW1hZ2luZSAgaW4gamF2YXNjcmlwdApgYGAKeyBpdGVtOiAnaGVsbG8nLCBpc0RlbGV0ZWQ6IGZhbHNlLCBpZDogWydzZXBoJywgMF0sIHNlcSwgcGFyZW50OiBudWxsIH0KYGBgamF2YXNjcmlwdGpzb25qYXZhc2NyaXB0CgpUaGlzIG9iamVjdCBhY3R1YWxseSBsb29rcyBsaWVra2UgdGhpczoKCj4gRGlhZ3JhbS4uLgoKTm90ZSBob3cgZWFjaCBOb3RlIGhvdyBlYWNoMTAwW3NlJ21pa2UnLCAyXSBFYWNoIHBhcnQgb2YgdGhlIG9iamVjdGRhdGEgc3RydWN0dXJlIGlzIHNlcGFyYXRlZCBmcm9tIHRoZSByZXN0Y29ubmVjdGVkIHRvIHRoZSByZXN0IHZpYSBwb2ludGVycy4gVW5mb3J1bnR1bmF0ZWx5LCBJbiBtb2Rlcm4gY29tcHV0ZXJzLCBmb2xsb3dpbmcgcG9pbnRlcmVzIGlzIGFjdHVhbGx5IHZlcnlzICBzbG93LiBJZiAxIGNsb2NrIGN5Y2xlIHdhcyAxIHNlY29uZCwgZm9sbG93aW5nIGEgcG9pbnRlciAoQmV0dGVyIE1vdmluZyBhd2F5IGZyb20gSmF2YXNjcmlwdCwgYW5kIG1vdmluZyBhd2F5IGZyb20gbGlua2VkIGxpc3RzIHJlYWx5bHkgdGhlIGNvbXB1dGVyIHRJZiB0aGUgY29tcHV0ZXIgZGlkZXZlcnlkb2luZyByZWFkaW5nIGRhdGEgZnJvbSBtYWluIG1lbW9yeSB3b3VsZCB0YWtlIGEgZmV3IG1pbnV0ZXMuY291cGxlIG9mIG1pbnV0ZXNbXShodHRwczovL2dpc3QuZ2l0aHViLmNvbS9oZWxsZXJiYXJkZS8yODQzMzc1KS4gRWFjaCBwYXJ0IG9mIHRoZSBkYXRhIHN0cnVjdHVyZSBpcyBjb25uZWN0ZWQgdG8gdGhlIHJlc3QgdmlhIHBvaW50ZXJzLiBJbiBtb2Rlcm4gY29tcHV0ZXJzLCBmb2xsb3dpbmcgcG9pbnRlcnMgaXMgcmVhbGx5IHNsb3cuIElmIHRoZSBjb21wdXRlciBkaWQgMSBjbG9jayBjeWNsZSBldmVyeSBzZWNvbmQsIHJlYWRpbmcgZGF0YSBmcm9tIG1haW4gbWVtb3J5IHdvdWxkIHRha2UgYSBbY291cGxlIG9mIG1pbnV0ZXNdKGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2hlbGxlcmJhcmRlLzI4NDMzNzUpLgoKVGhpcyBpcyBhd2Z1bCBmb3IgdGhlIGNvbXB1dGVyLlRoZSBjb21wdXRlciBoYXRlcyB0aGlzLlNlZSwgZXRoYXQgSW4gb3JkZXIgdG8gZm9sbG93IGEgcG9pbnRlciwgeW91ciBvY29wdXRlY29tcHV0ZXIgbmVlZHMgdG8gdXN1YWxseSAgcmUgZGF0YS4gSWYgZXZlcnkgbm9ybWFsIG1lbW9yeSBhY2Nlc3NlcyB0b29rIDAuNSBzZWNvbmRzLEwxIGNhY2hlIHJlYWRzIHRvb2sgcmVhZGluZyBmcm9tIGFtbWFpbiBtZW1vcnlib3V0IDIKCgoKVG8gZ2V0IHRoZXJlLCB0aGUgY29tcHV0ZXIgaGFzIHRvIGFsbG9jYXRlIG1lbW9yeSB3aXRoLCB3aGljaCBzaSBzbGlzIHNsb3cuIFRoZSBnYXJiYWdlIGNvbGxlY3RlZG9yIG5lZWRzIHRvIHVuZGVyc3RhbmQgdHJhY2sgdGhhdCBtZW1vcnksICBhbmQgZG8gc29tZSBib29rIGtlZXBpbmcgKGFsc28gc2xvdykuCkFuZCBvbmNlIHRoZSBtZWRhdGEgaXMgdGhlcmUsIHdlbGwsIGdvIGFuZCBmZXRjaCB0aGF0IGRhdGFUaGUgZGF0YSBhdCB0aGUgZW9vdGhlciBlbmQgb2YgYSBwb2ludGVyIGNvdWxkIGJlIGFueXdoZXJlLiBJbiBvcmRlciB0byByZWFkZmV0Y2ggdGhhdCBkYXRhLCB5b3VyIGNvbXB1dGVyIG5lZWRzIHRvIHJlYWQgZnJvbSBJbiBJZiBuIGNvbXB1dGVyIHRpbWUgaWYsIGlmIHRha2VDWW91cioqCgpBbGwgdGhlIGRhdGEgaXMgc2VwYXJhdGVkIGJ5IHBvaW50ZXJzLnB1dCBkYXRhIGludG8gdGhlc2UgYm94ZXMgYWxsLiBUaGlzIFRoZW50a2VlcCAgb2Ygd2UgbmVlZCB0byByZWFkIGl0KipZIHdpbGx1c3VhbGx5IFRvIHJlYWQgaXQsIHlvdXIgY29tcHV0ZXIgdXN1YWxseSBnbyBmZXRjaCBpdCwgd2hpY2ggaXMgYWFsc28gc2xvdwoKV2UgY2FuJ3QgZG8gYmV0dGVyIGluIGphdmEgZml4IHRoaXMgaW4gamF2YXNjcmlwdC4gSWYgd2UgbWFrZSBvdXIgZGF0YSBzdHJ1Y3R1cmVzIG1vcmUgY29tcGxleCwgd2UgcnVuIGludG8gdGhlIHNhbWUgbGltaXRhdGlvbnMgQXV0b21lcmdlIGhhcyB3aXRoIGltbXV0YWJsZWpzIC0gd2hpY2ggaXMsIHRoZSBpZiB3ZSBtYWtlIG91ciBkYXRhIHN0cnVjdHVyZXMgb2NvbXBsZSx4LCBXZSBjYW4ndCBmaXggdGhpcyBpbiBqYXZhc2NyaXB0LiBJZiB3ZSBtYWtlIG91ciBkYXRhIHN0cnVjdHVyZXMgbW9yZSBjb21wbGV4LCB3ZSBydW4gaW50byB0aGUgc2FtZSBsaW1pdGF0aW9ucyBBdXRvbWVyZ2UgaGFzIHdpdGggaW1tdXRhYmxlanMgLSB3aGljaCBpcywgaWYgd2UgbWFrZSBvdXIgZGF0YSBzdHJ1Y3R1cmVzIGNvbXBsZXgsCgosIHdoaWNoIGlzIE8ncmUgZ29pbmcgdG9MYXRlciB3ZXRoYXQgZGF0YSwsIGFuZCBpdCBjb3VsZCBiZSAqYW55d2hlcmUqLiAgSXRzIGxpa2UgaWYgeW91ciBzaG9wcGluZyBsaXN0IHdyb3RlIGEsIGJ1dCBpbnN0ZWFkIG9mIHdyaXRpbmcgIm1pbGlNaWxpayIgeW91IGhhZCBhIGxpdHRsZSBzY2F2ZW5nZXIgaHVudGVhY2ggaXRlbSwgIGRlc2NyaWJpbmcgd2hlcmUgaW4geW91ciBob3VzZSB0aGUgbm90ZSB3aXRoICJtaWxrIiBvbiBpdCBpcyBoaWRkZW4uTSBSZWFkaW5nIHRoZSB3aG9sZSBsaXN0IHdvdWxkIHRha2UgYWdlcy4KCklkZWFsbHkgVG8gcnVuIGZhc3Rlciwgd2UgbmVlZCB0byBtb3ZlIGFsbCB0aGUgZmllbGRzIHRvZ2V0aGVyLiBBbmQgd2UgbmdvICBkYXRhIHRvZWVkIHRvIG1vdmUgYXdheSBmcm9tIGxpbmtlZCBsaXN0cyAtIGFzIGNsZXZlciBhcyB0aGV5IGFyZSwgdGhlIHVzZXIgKmRvZXMqIHNvbWV0aW1lcyBob3AgYXJvdW5kIHRoZSBkb2N1bWVudCBhbmQgd2UgZG9uJ3Qgd2FudCB0byBldmVyIHNjYW4gKiogZG8gdGhvc2VzLmZhbmN5IGRhdGEgc3RydWN0dXJlcyBpbiBqYXZhc2NyaXB0LCB0aGUgbGFuZ3VhZ2UgZmlnaHRzIHVzIChmb3JjZXMgdXMgdG8gd2UgZW5kIHVwIGZyYXdpdGggZXZlbiBtb3JlIGZyYWdtZW50ZWQgbWVtb3J5LiBJbiBzdHMgc29ydCBvZiB0aGUuIENsZXZlciBkYXRhIHN0cnVjdHVyZXMgb2JqZWN0cyBhbmQgbW9yZSBmcmFnbWVudGF0aW9uIGNvbmZ1c2UgdGhlIG9wdGltaXplciwgYW5kIG9hbGwgb3ZlciB0aGUgcGxhY2UgaW4gbWVtb3J5IGhhcwoKQkJ1dCBpdHMgb2ssIHRoZXJlJ3Mgb25lIG1vcmUgIHdlIGhhdmUgd2ViYXNzZW1ibHkuIGRvbid0IG5lZWQgdG8gd3JpdGUgd2ViIGFwcGphdmFzY3JpcHQgYW50bW95IG1vcmUuICwgZXZlbiBvbiB0aGUgd2ViLiBXZQoKW2VbSGVyZV0oaHR0cHM6Ly9naXRodWIuY29tL2pvc2VwaGcvdGV4dC1jcmR0LXJ1c3QvKSBJJ3ZlIGJlZW4gcXVpdGVldGx5IGJ1bGlkaW5nIGFidWlsZGRpbmcgeWV0IGFub3RoZXIgaW1wbGVtZW50YXRpb25DUkRUIGltcGVsbWVudGltcGxlbWVudGF0aW9uIGluIFJ1c3QuIFRoaXMgaW1wbGVtZW50YXRpb24gaGFzIGFsbDoKCi0gRG9lcyB5anMncyAgaXMgZXNzbmVudGlhbGx5IHRoZSBzYW1lIGFzIHlqcyBidXQ6CgotIEl0IGRvZXNuJ3QgLSBJdCBkb2Vzbid0dXNlcyBhIEItVHJlZSBpbnN0ZWFkIG9mIC10YSBsaW5rZWQgbGlzdCB0byBzdHJvb3JlIHRoZSBpdGVtcy4gVGhpcyBhVGhlIGItdHJlZSBBdCBlY2FjaCBub2RlIG9mIHRoZSBiLXRyZWUgd2Ugc3RvcmUgdGhlIG51bWJlciBvZiAgVGhpcyBzb2x2ZXMgYm90aCBvZiBvdXIgbGluZWFyIHNjYW5uaW5nIHByb2JsZW1zIHJvbWZyb20gZWFybGllci5sZW5ndGggb2YgYWxsIG9mIHRoYXQgaXRlbSdzIGNoaWxkcmVuLiBpCgpUaGlzIHNvbHZlcyBib3RoIG9mIG91ciBsaW5lYXIgc2Nhbm5pbmcgcHJvYmxlbXMgZnJvbSBlYXJsaWVyLiBXaGVuIHdlIHdhbnQgdG8gZmluZCB3aGVyZSBpbiB0aGUgbGlzdCB0byBpbnNlcnQsIHdoaWNoIGl0ZW0gaW4gdGhlIGxpc3R3IDEwMDA1MCAwMDAwLCB3ZSBjYW4ganVzdCB0cmF2ZXJzZSBkb3duIHRoZSB0cmVlLiBUaGUgVHJlZXMgYXJlIHJlYWxseSB0aXlkeSAtIHN0b3JpbmcgYWxsIHRoZXNlIGl0bWVlbXN2ZXJ5IHRpZHkgLSBzdG9yaW5nIGFsbCB0aGVzZSBpdGVtcyB3ZSBqdXN0IG5lZWQgNSBUaGlzIHNvbHZlcyBib3RoIG9mIG91ciBsaW5lYXIgc2Nhbm5pbmcgcHJvYmxlbXMgZnJvbSBlYXJsaWVyLiBXaGVuIHdlIHdhbnQgdG8gZmluZCBpdGVtIDUwIDAwMCBpbiB0aGUgbGlzdCwgd2UgY2FuIGp1c3QgdHJhdmVyc2UgZG93biB0aGUgdHJlZS4gVHJlZXMgYXJlIHZlcnkgdGlkeSAtIHN0b3JpbmcgYWxsIHRoZXNlIGl0ZW1zIHdlIGp1c3QgbmVlZCA1Cgo+IERpYWdyYW0gaGVyZUItdHJlZSBkdGhpcyBzaG93aG9sZSBkb2N1bWVudCAgamp1c3QgbmVlZHMgNSBsbGF5ZXJzIGluIHRoZSB0cmVlLgoKV2VhIEVhY2ggbGVhZiBub2RlICh3aGVyZSB3ZSBzdG9yZSB0aGUgYWN0dWFsIGRhdGEpIHBhY2tzIGEgd2hvbGUgZ3JvdXAgb2YgMzIgaXRlbXMgaW50byB0aGUgc2FtZSBjaHVuayBvZiBtZW1vcnkuCkkgaG9uZXNsdHkgaG9uZXN0bHknbSBjaG9ja2Vkc2hvY2tlZCBob3cgbGl0dGxlIHJhbSB5anMgdXNlcyBmb3IgdGhpcy4KLiBJdHMgSSdtIHN1cmUgdGhlcmUncyBhbGwgc29ydHMgb2Ygd2l6YXJkcnkgaW4gVjggdGhhdCBJIGRvbid0IHVuZGVyc3RhbmQgd2hpY2ggbWFrZXMgdGhpcyBwb3NzaWJsZS4gSXRzIGltcHJlc2lzaXZlIGFsbCAtcm91bmQuIHdpdGggdGhpcyBhcHBvcm9hY2hleHRyZW1lbHkgLndoaWNoIFJ1c3QgYW5kIEItdHJUcmVlZXNFdmVyeXRoaW5nIGlzIGZhc3RlciBpbiBydXN0LCB3aXRoIFIuIFRoaXMgdGltZSAoaW5jbHVkaW5nIHlqcydzIHNwYW5zKS4gQgoKIDoKCi0gb3Vyb25seSBuZWVkcyA0IDUgbGV2ZWxzIG91ciB3ZSBjYW4gZWluIGp1c3QgdGhlICBhdCBwb3NpdGlvbgotIFVwZGF0aW5nIGluIHRoZSB0cmVlIGlzIGVhc3kgZmFzdCB0b28uIFVzdWFsbHkgd2UgY2FuIGp1c3QgaW4gSWYgdGhlcmUncyByb29tIGluIHRoZSBjdXJyZW50IGl0ZW0sIHdlIGp1c3QgaW5zZXJ0IHRoZSBuZXcgY29udGVudCB0aGVyZS4gSWYgbm90LCB3ZSAiIHNwbGl0IHRoZSBjdXJyZW50IGl0ZW0gYW5kIGluc2VydCBpbiB0aGUgcGFyZW50LiBUaGUgd29yc3QgY2FzZUluIHRoZSB3b3JzdCBjYXNlLCB3ZSBzcGxpbGwgLSBpdCB0YWtlcyBPKGRlcHRoKSAtIG9yIGFib3V0IDUgc3RlcHMgbm8gbWF0dGVyIHdoYXQuaW4gdGhpcyBjYXNlICBoYXBwZW5zIE11Y2ggYmV0dGVyIHRoYW4gbmVlZGluZyB0byBzaGlmdCBldmVyeSB0aWl0ZW0gaW4gb3VyIGphdmFzY3JpcHQgYXJhcmF5IQoKIEluIGpuIEphdmFzY3JpcHQgd2UgY2FuJ3QgcGFjayBhIHNpbmdsZSBpdGVtIGludG8gdGhlY29udGlndW91cyBtZW1vcnkuIEluIHJ1c3Qgd2UgY2FuIHBhY2sgZWFjaCBpbnRvIGEgc2luZ2xlIG1lbW9yeSBjaHVua3dpdGggMzIgaXRlbXMgYWxsIHRvZ2V0aGVyIC5ldmVuICEgSW4gZmFjdCwgd2UgY2FuIGluIHJvdXIgdHJlZSB3aXRoLiBBQSBwYWNrIGdyb3VwcyBvZiAgdGFsbCB0b2dldGhlciBpbiBjaHVua3MuIFRoaXMgd2lsbCByZXN1bHQgaW4gYSBiaXQgb2YgbWVtY29wcHlzb21lIG1lbWNweS1pbmcgd2hlbiB3ZSBpbnNlcnQsIGJ1dCBtZW1jcHkgaXMgd2F5IGZhc3RlciB0aGFuIHRoYXRzIGZhc3RlciB0aGFuIHlvdSB0aGluay4gLSB5b3UgZ3Vlc2VkIGlndWVzc2VkIGl0IC1XZSBjYW4gc2NhbGUgdXAgY29tcHV0ZXIgdGltZSBieSAxIGJpbGxpb24gdG8gbWFrZSBpdCBtb3JlIGludHVpdGl2ZS4gT24gdGhpcyB0aW1lIHN0YWNhbGUsIGVhY2hzIChhYm91dCBhIGhlYXJ0IGJlYXQpLkFuZCAyIG1pbnV0ZXNbXV0oaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vaGVsbGVyYmFyZGUvMjg0MzM3NSlBdEVhY2hBbmQgZWFoY2ggQXJyYW5naW5nIG1lbW9yeSBsaWtlIGphdmFzY3JpcHQgZG9lcyBoZXJlIGlzIGxpa2UgaW4geW91ciBsaXN0LHZlciBsaXN0IGlzIGZ1bGwgb2Ygc2NhdmVuZ2VyIGh1bnQgY2x1ZXMuRWNhaCBhY2ggY2x1ZSBuYW1lcyBzb21ld2hlcmUgd2l0aCBhIHRpbnkgc2F5aW5nLCBhbmQgdGhhdHMgd2hhdCBKYXZhc2NyaXB0IGRvZXMuLiBUYWN0dWFsbHkgYSBmdWxsIG9mIGNsdWVzIC0gYW5kIGlmIHlvdSBnbyB0aGVyZSB5b3UnbGwgZmluZCBvciAiQ2hlZWVzZSIKCnNxdWlzaHNsbG9uZyBzbG93ICAoUmVtZW1iZXIsIGl0cyBhIHNjYXZlbmdlciBodW50IGVhY2ggdGltZSB3ZSBtb3ZlIHRvIHRoZSBud2UgZG9leHQgaXRlbSB3aXRoIGxpbmtlZCBsaXN0cykhU28gSSd2ZSBiZWVuIFNvIEkndmUgYmVlbiBxdWlldGx5IGJ1aWxkaW5nIHlldCBhbm90aGVyIENSRFQgaW1lcGxlbWltcGxlbWVudGF0aW9uLCB0aGlzIHRpbWVhIENSRFQgaW1wbGVtZW50YXRpb24gaW4gcnVzdGFsbCBvZiBpdHNpbmVybnRlcm5hbCBhY3Jvc3MgYW5kIGRvd24gLCBzbyB3ZSBvbmx5IG5lZWQgNSByZWFkcyB0byBmaW5kIHRoZSBpdGVtLnRoZSBzYW1lIG9yIHNvICB0aGFuIG5lZXdoZW4gbndlIG5lZWQgZXRoYXQgamF2YXNjcmlwdCBhcnJheS4KCkl0IG1pZ2h0IGFsYmUgZmFzdGVyIHRleWV0IHRvICphbHNvKiBjYWNoZSB0aGUgbG9jYXRpb25sYXN0IC4gSSBoYXZlbid0IHRydWVkIHRodHJpZWQgdGhhdCB5ZXQuIEJ1dCBpdHMgcmVhbGx5IGZhc3QgYW55d2F5LgoKCgoKCnVzZSB5anMncyB0cmljayBhbmQgV2VJbiBKYXZhc2NyaXB0IHdlIGNhbid0IGV2ZW4gcGFjayBhIHNpbmdsZSBpdGVtIGludG8gY29udGlndW91cyBtZW1vcnkuIEluIHJ1c3Qgd2UgY2FuIHBhY2sgZ3JvdXBzIG9mIDMyIGl0ZW1zIGFsbCB0b2dldGhlciBpbiBjaHVua3MuIFRoaXMgd2lsbCByZXN1bHQgaW4gc29tZSBtZW1jcHktaW5nIHdoZW4gd2UgaW5zZXJ0LCBidXQgdGhhdHMgZmFzdGVyIHRoYW4geW91IHRoaW5rLgpXZSBjYW4gYWxzbyBwYWNrIGFsbCB0aGUgaXRlbXMgdGlnaHRseSBpbiBtZW1vcnkuIEVhY2ggbGVhZiBpbiB0aGUgYi10cmVlIGlzIHN0b3JlZCBpbiBhIHNpbmdsZSBibG9jayBmb29mIG1lbW9yeS4gVGhhdCBibG9jayBBdCB0aGF0IGJsb2NrIHdlIHN0b3JlIDMyIGVudHJpZXMgLSBlYWNoIHN0b3JpbmcgaW4gdHVybiBhIHNwYW4gb2YgY2hhcmFjdGVycy4gVGggVGhpcyBTbyBpbnNlcnRpbmcgKmRvZXMqIG5lZWQgYSBmZXcgbWVtY3B5c29tZSBtZW1jb3B5cHktaW5nLCBidXQgdGhhdHNJJ210aGF0cyBzZXJpb3VzbHkgZmFzdGVyIHRoYW4geW91IHRoaW5rIGl0IGlzLiBNdWNoIGZhc3RlciB1aWludHVpdGlldmVseSBpdHMgZmluZSAtc3RpbGwgIGRvaW5nbWVtY3B5IGEgbGl0dGxlIGJpdCBvZiAgaXMgZmluZS4gSXRzIGZhc3RlciB0aGFuIHlvdSB0aGlua3NlcmlvdXNseSAuCgpBbnl3YXksIGhvdyBtZmFzdD8gZG9lcyBpdCBnbz8KCkNhbGxlZCBmcm9tIGphdmFzY3JpcHQgdGhyb3VnaCB3ZWJhcHNzZW1ibHksIHRoZSBiZW5jaG1hcmt3ZSdyZSBkb3duIHRvIDAuMiBzZWNvbmRzLiBDYWxsZWQgZGlyZWN0bHkgZnJvbSBydXN0LCB0d2UgY2FuIHByb2VjZXNzIHRoaXMgZWRpdGluZyB0cmFjZSBpbiAgMjAwIG1pbGxpNjUgbm1pbGxpc2Vjb25kcy4gQW5kIAoKVGhlcmUncyBvbmUgbGFzdCB0aGluZyBJJ3ZlIGRvbmUuIEkgZG9uJ3Qga25vdyBpZiBpdHMgYSBnb29kIGlkZWEsIGJ1dCBJIHN1c3BlY3QgaXRzIGRpIGlkIGl0ICBhbnl3YXkuCgogSSBtb3ZlZCB0aGUgdGV4dCBjb250ZW50IGl0c2VsZiBpbnRvIGEgbm90aGVyIHN0cnVjdHVyZXMuLiBTV2hlbiB5b3UncmUgYWN0dWFsbHkgZG9pbmcgY29sbGFib3JhdGl2ZSBlZGl0aW5nICwgeW91IGhhdmUgYWxsIHRoZSBjYXJoYXJhY3RlcnMgaW4geW91ciBvZG53ZG9jdW1lbnQgaW4gIHByb2JhYmx5IHdhbnQgdG9hbiBhY3R1YWwgYXJyYXksIG9yIGFuIGFjdHVhbCBzdHJpbmcgb3Igc29tZXRoaW5nLiBTbyBJIG1hZGUgaXQgc28gdGhlIENSRFQgZGF0YSBzdHJ1Y3R1cmUgb25vbGx5IGJlY2F1c2UgaXQgc2VlbWVkIGNsZXZlciBhdCB0aGUgdGltZWEgc2VwYXJhdGUgZGF0YVNlZSwgd2luIFZTIENvZGUncyBkYXRhIHN0cnVjdHVyZXMgb3IgaHdoYXRldmVyLiBJdCBkb2Vzbid0IG1ha2Ugc2Vuc2UgdG8gc3RvcmUgdGhlIGNvbnRlbnQgdHdpY2Ugc3RvcmVzIG5lZWRzIHRvICB0aGUgc3BhbnMgYW5kIHN1Y2guIEp1c3QgZW5vdWdoIHRoYXQgaXQgY2FuIG1lcmdlIGNoYW5nZXMuc291dCB0byBiZSBzdG9yZWQgLGVkaXRvciByIG9yIHNvbWV0aGluZ215IENSRFQgc3RvcmVzCgpUaGVyZSdzIG9uZSBsYXN0IHRoaW5nIEkndmUgZG9uZS4gSSBkb24ndCBrbm93IGlmIGl0cyBhIGdvb2QgaWRlYSwgYnV0IEkgZGlkIGl0IGFueXdheSBiZWNhdXNlIGl0IHNlZW1lZCBjbGV2ZXIuIEkgbW92ZWQgdGhlIGNvbnRlbnQgaXRzZWxmIG91dCBpbnRvIGEgc2VwYXJhdGUgZGF0YSBzdHJ1Y3R1cmUuIFNlZSwgd2hlbiB5b3UncmUgYWN0dWFsbHkgZG9pbmcgY29sbGFib3JhdGl2ZSBlZGl0aW5nLCB5b3UgcHJvYmFibHkgd2FudCBhbGwgdGhlIGNoYXJhY3RlcnMgaW4geW91ciBkb2N1bWVudCB0byBiZSBzdG9yZWQgaW4gYW4gYWN0dWFsIGFycmF5LCBvciBpbiBWUyBDb2RlJ3MgZWRpdG9yIG9yIHNvbWV0aGluZy4gSXQgZG9lc24ndCBtYWtlIHNlbnNlIHRvIHN0b3JlIHRoZSBjb250ZW50IHR3aWNlLiBTbyBJIG1hZGUgaXQgc28gbXkgQ1JEVCBzdG9yZXMKCldlIGNhbiBhbHNvIHBhY2sgYWxsIHRoZSBpdGVtcyB0aWdodGx5IGluIG1lbW9yeS4gRWFjaCBsZWFmIGluIHRoZSBiLXRyZWUgaXMgc3RvcmVkIGluIGEgc2luZ2xlIGJsb2NrIG9mIG1lbW9yeS4gQXQgdGhhdCBibG9jayB3ZSBzdG9yZSAzMiBlbnRyaWVzIC0gZWFjaCBzdG9yaW5nIGluIHR1cm4gYSBzcGFuIG9mIGNoYXJhY3RlcnMuIFNvIGluc2VydGluZyAqZG9lcyogbmVlZCBzb21lIG1lbWNweS1pbmcsIGJ1dCBhIGxpdHRsZSBiaXQgb2YgbWVtY3B5IGlzIGZpbmUuIEl0cyBzZXJpb3VzbHkgZmFzdGVyIHRoYW4geW91IHRoaW5rLldlIGNhbiBhbHNvIHBhY2sgYWxsIHRoZSBpdGVtcyB0aWdodGx5IGluIG1lbW9yeS4gRWFjaCBsZWFmIGluIHRoZSBiLXRyZWUgaXMgc3RvcmVkIGluIGEgc2luZ2xlIGJsb2NrIG9mIG1lbW9yeS4gQXQgdGhhdCBibG9jayB3ZSBzdG9yZSAzMiBlbnRyaWVzIC0gZWFjaCBzdG9yaW5nIGluIHR1cm4gYSBzcGFuIG9mIGNoYXJhY3RlcnMuIFNvIGluc2VydGluZyAqZG9lcyogbmVlZCBzb21lIG1lbWNweS1pbmcsIGJ1dCBhIGxpdHRsZSBiaXQgb2YgbWVtY3B5IGlzIGZpbmUuIEl0cyBzZXJpb3VzbHkgZmFzdGVyIHRoYW4geW91IHRoaW5rLgoKCgoKCnwgVGVzdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVGltZSB0YWtlbiB8IFJBTSB1c2FnZSB8CnwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICAgICAgIHwgLS0tLS0tLS0tLSB8IC0tLS0tLS0tLSB8CnwgYXV0b21lcmdlIEAgMS4wLjAtcHJldmlldzIgICAgICAgIHwgIDI5MXMgICAgICB8IDg4MCBNQiAgICB8CnwgcmVmZXJlbmNlLWNyZHRzIChhdXRvbWVyZ2UgLyB5anMpIHwgICAzMXMgICAgICB8ICAyOCBNQiAgICB8CnwgWWpzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMC45N3MgICAgICB8IDMuNiBNQiAgICB8CnwgSlMgYmFzZWxpbmUgICAgICAgICAgICAgICAgICAgICAgIHwgMC42MXMgICAgICB8IDAuMSBNQiAgICB8CnwgUnVzdCB2aWEgd2ViY2FsbGVkIGZyb20gSlModGhyb3VnaCBXQVNNKSAgICAgICAgICAgICAgIHwgMC42NXMKfCBKUyBiYXNlbGluZSAgICAgICAgICAgICAgICAgICAgICAgfCAwLjYxcyAgICAgIHwgMC4xIE1CICAgIHwgICAgICB8IDIuMyBNQiAgICB8fCBSdXN0ICh0aHJvdWdoIFdBU00pICAgICAgICAgICAgICAgfCAwLjY1cyAgICAgIHwgMi4zIE1CICAgIHwKbmF0aXZlICAgICAgVmlhIEpTICtDYWxsZWQgZnJvbXZpYTIwMDAKfCBSdXN0IChuYXRpdmUpICAgICAgICAgICAgICAgICAgICAgfCAwLjA2NXMgICAgIHwgMi4zIE1CICAgIHwKfCBSdXN0IChDYWxsZWQgZnJvbSBKUyB2aWEgV0FTTSkgICAgfCAwLjIwcyAgICAgIHwgMi4zIE1CICAgIHwoKSgmJCNAMTMuNS41KSAgICAgICAgICAgKCAgdnYKClRoZXNlIHRpbWVzIGFzc3VtZSB5b3VyIFNTbyB0aGUgZGF0YSBzdHJ1Y3V0dHVyZSBsb29rcyBsaWtlIHRoaXM6CgpgYGAKewogIAogIH0KYGBgICB0ZXh0OiA8UlJvcGUgaW1wbGVtZW50YXRpb24iYWJjIiwKICB0cmVlOiA8UmFuZ2UgdHJlZSBzdG9yaW5nIHNwYW5zIGFuZCBvZmZzZXRzIGFuZCBzdWNoQi10cmVlIHN0b3JpbmcgdGhlIGNvbnRlbnQ+LAogIGluZGV4OiBJIDxJbmRleCAgIGluZGV4OiA8SW5kZXgKCkknbSBhbHNvIHN0b3JpbmcgYSBuIGluZGV4IGJhYyAsIHNvIHdlIGNhbiBlYXNpbHkgZmluZCAibG9vayB1cCBpdGVtcyBieXQgdGhlaXIgSUQgKCooKCooW1NlcGgnc2VwaCcsIDEwMF0oKilmaW5kcXVpY2tseSBmaW5kIC0+IC4gZXZlbiBpZiBJIG9maW5nUnVzdCBsZXRzIHVzc3RvcmVzLCB3aXRoIGV2ZW5yeXRoaW5nIGNvbnRpZ3VvdXMuSUkgbGlrZSB0aGlzIGFsc293YXlzIEkgaXQgd2lsbCBiZVNwZWFraW5nIG9mIGZhc3QsYWN0dWFsbHkgICBpbmRleDogPGluSW5kZXggb2YgSUQgPT4gLT4gPT4gYi10cmVlIG5vZGU+LG9oIGhhaSEqKgpCdXQgZ3VlcyBzRm9yIHRoZSB0ZXh0IEknbSAgY29udGVudCBJJ20gdXNpbmcgW1JvcGV5XShodHRwczovL2RvY3MucnMvcm9wZXkvMS4yLjAvcm9wZXkvKS4gQnV0IGd1ZXNzIHdoYXQ/IElNeSBjb2RlIGlzIGZhc3RlciB0aGFuIHJvcGV5LiBBbmQgIElmIEkgdHVybiBpdCBvZmYKfCBUZXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUaW1lIHRha2VuIHwgUkFNIHVzYWdlIHwKfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgICAgICAgfCAtLS0tLS0tLS0tIHwgLS0tLS0tLS0tIHwKfCBhdXRvbWVyZ2UgKHYxLjAuMC1wcmV2aWV3MikgICAgICAgfCAgMjkxcyAgICAgIHwgODgwIE1CICAgIHwKfCByZWZlcmVuY2UtY3JkdHMgKGF1dG9tZXJnZSAvIHlqcykgfCAgIDMxcyAgICAgIHwgIDI4IE1CICAgIHwKfCBZanMgKHYxMy41LjUpICAgICAgICAgICAgICAgICAgICAgfCAwLjk3cyAgICAgIHwgMy42IE1CICAgIHwKfCBKUyBiYXNlbGluZSAgICAgICAgICAgICAgICAgICAgICAgfCAwLjYxcyAgICAgIHwgMC4xIE1CICAgIHwKfCBSdXN0IChDYWxsZWQgZnJvbSBKUyB2aWEgV0FTTSkgICAgfCAwLjIwcyAgICAgIHwgMi4zIE1CICAgIHwKfCBSdXN0IChuYXRpdmUpICAgICAgICAgICAgICAgICAgICAgfCAwLjA2NXMgICAgIHwgMi4zIE1CICAgIHwKIEFuZCB0aGF0IGNvbnRlbnQgaXMgc3RvcmVkIGdvaW5nIHRvIGJlIHN0b3JlZCBpbiBzb21lb25lIGVsc2Unc3NvbWVvbmUgZWxzZSdzIHByb2JsZW0gYW55d2F5LiBXaGF0IGhhcHBlbnMgaWYgSSB0dXJuIHRoYXQgb2ZmP0l0cyBjaGVhdGluZywgYnV0IHd8IFJ1c3QgKG5hdGl2ZSkgICAgICAgICAgICAgICAgICAgICB8IDAuMDY1cyAgICAgfCAyLjMgTUIgICAgfAosIG5vdCBzdG8gc3RyaW5nICAgICAgICBjb250ZW50IDIzMUxvb2ssIEkga25vdyBJJ21pdHNqdXN0IC4uLiApZG9jIGNvbnRlbnQ/Pz8gICA/Pz8gICAgVyBBbmQgdGhhdCBzdHJ1SXQgZG9lc24ndCBtYWtlIHNlbnNlIHRvIGR1cGxpY2F0ZSB0aGUgZG9jdW1lbnQgY29udGVudC4ncyBpbiBteSBsaWJyYXJ5Lkl0cyBwcmV0dHkgZmFzdC4uLiBidXQgQi10cmVlIHRvIHNlZSBob3cgZmFzdCB0aGlzIHB1cHB5IGNhbiByZWFsbHkgZ28/CkJvb20uCgogMTQwMDAgeCBmYXN0ZXIuOyBhcyBwcm9taXNlZGFsbCBvZiB0aGlzIGlzIGF3a3dhcmQgYnV0IC4uIHdoaWNoLCBieSB0aGUgd2F5LCBPaSEgLSB3aGF0cyBnb2luZyBvbj8gaGVyZT9jb2RlLiBBbmRvZiB0aG9zZSBpbnNlcnRzT0R1aCAtIG9zbyBtYW55IG1lIGEgbGluayB0byBCYWQhIFkgTXkgY29kZSBpc24ndCBzbG93LCAuIEp1cGl0ZXIgb3MgYW4gaXMgYW4gQWxnb3JpdGhtLiBSR0EgaXMgYW4gQWxnb3JpdGhtLkJUaGUgYVllYXJzIGFnbyBlZHNkb2VzIEkgdGhpbmsgdGhleSdyZSB0aGUgZnV0dXJlIG9mIGNvbGxhYm9yYXRpdmUgZWRpdGluZy4gZm9yIHllYXJzIGlzIHNsb3chSSB0aGluayBhcyBhbnl0aGluZyBhYm91dCBlZmZpY2llbnQgIG9mIHRob3NlIHN5c3RlbXNXb3csIEkgd2FzIHdhcyB0dXJucyBvdXQgSUJ1dCBpdCBzeXN0ZW1zV293LCBJIHdhc1dlbGxbXShodHRwczovL2dpdGh1Yi5jb20vYXV0b21lcmdlL2F1dG9tZXJnZS8paHR0cHM6Ly9naXRodWIuY29tL2F1dG9tZXJnZS9hdXRvbWVyZ2UtcGVyZi8gdG8gcnVuNTQ2NW5lYXJseSA1MDAweCBmYXN0ZXJJJ2xsIHRha2UgeW91IHRocm91Z2ggIEkgIEkgIGFsbCB0aGUgc3RlcHMgdGhhdCBtYWtlIGl0IGZhc3QudG8gbWFrZSBpdCBzdXBlciBmYXN0LkJ1dDpodHRwczovL2pvc2VwaGcuY29tL2Jsb2cvY3JkdHMtYXJlLXRoZS1mdXR1cmUvW10oaHR0cHM6Ly9tYXJ0aW4ua2xlcHBtYW5uLmNvbS8yMDIwLzA3LzA2L2NyZHQtaGFyZC1wYXJ0cy1oeWRyYS5odG1sKVNvdW5kcyBsaWtlIGEgdHJlZSwgZGF3ZyFJdHMgYSB0cmVlCj4gRGlhZ3JhbSBoZXJlCldoZW50aGVpciAgcmVzdWx0aW5nIChvciBkdGV4dCBkb2N1bWVudCkgY2FuIGJlIG1hZGUgYnkgLCB3aGljaCBpcyB0byBzdG9yZSBhIGFsbCB0aGUgZGF0YSBhcyBhIHRyZWUgKFdoIChXaGF0IGFyZSBhbGwgdGhvc2UgVWludDhBcnJheXMgZG9pbmcgYWxsIG9mIHR2ZXIgdGhlIHBsYWNlPylBbmQgdy4KVGhyb3VnaCB0aGlzIHBvV2UncmUgZ29pbmcgdG8gZ28gdGhyb3VnaCBhIGxvdCBvZiBkaWZmZXJlbnQgYWxncmlvcmhpdGhtcyBoZXJlaWMgYXBwcy4gVG8gYWxsIG9mIHRoZW1TbyB0Zm9yIGEgc2ltcGxlIGJlbmNobWFya2FzIGdvaW5nIHRvIHVzZSBoaW1zZWxmIHdoZXJlIGFyZW4ndCBhbnkgamFoYXMgZWRpdHMgZnJvbS5CIC11IGFsbW9zdCBuZXZlciBwdXQgdGhlaXIgY3Vyc29ycyBhIHR0IGV4YWN0bHkgdGhlIHNhbWUgcGxhY2UgYW5kIHN0YXJ0ICBhdCB0aGUgc2FtZSB0aW1lLiBhY3R1YWxseS5lIEFuZCBJJ20ganVzdCBjb3VudGluZyB0aGUgdGltZSBmcm9tIGFwcGx5aW5nIHRoaXMgdHJhY2UgKmxvY2FsbHkqLiBOb3QgaWRlYWwsIGJ1dCBlaC4gWW91IHdhbnQgdGhlIGdvb2Qgc3R1ZmYsIG91Z29vZCBlbm91Z2hlaC5pdHMgaXR0J2xsIGRvLm5lYXJseSA1IG1pbnV0ZXMgdG8gcnVuLiBtaWxsaW4uIDAuNjA2NSBzZWNvbmRzV2FpdCwgbm8uIEZpcnN0IGFub24gZWFydGggCgpJSSBkb24ndCByZWNvbWVuZG1lbmQgdXNpbmcgaXQuIElmIHlvdSB3YW50IGEgcHJvZHVjdGlvbiBncmFkZSBDUkRUIGltcGxlbWVudGF0aW9uIHRvZGF5LCAoIGFjdHVhbGx5SnVzdCBhbiBhc2lkZTogIHQgeWV0IC0gaXRzIG5vdCByZWFkeWh0dHBzOi8vZ2l0aHViLmNvbS95anMveWpzIFlqcyBpcyB0aGUgY3VycmVudGx5IHRoZSBiZXN0IGluIHRoZSBidXNpbmVzcy4gS2V2aW4gIFlKYWhucyBpcyBhIGNsYXNzIGFjdFlvdWwnJ2xsIHNlZSB3aHkgc29vbiEpYXV0b21lcmdlW10oIGh0dHBzOi8vZ2l0aHViLmNvbS95anMveWpzKSBhdCB0aGUgbW9tZW50LiBJIGZvciBwcmltZSB0aW1leWV0YXMgbiBlYXN5IHJlY29tbWVuZGF0aW9uLiBJdCBzb21lIG9mIHRoZSByZWFzb25zT2ggYW5kIGEgcXVpY2tTaSBvIFlqcyBhbmQgb3RoZXIgc1dlIGNhbiBkcmF3IHRoaXMgYXMgYSB0cmVlIWFyZ2gsICBhY3R1YWxseSBiZWNhdXNlIFggSGFuZyBvbiwgd2hpY2ggb25lIGdvZXMgZmlyc3Q/aG93IGRvIHdlIGZpZ3VyZSBvdXQgIGNoYXJhY3RlciBzaG91bCBzb3J0aW5nIHRoZW0gYmFzZWQgb24gdGhlbiB3ZSdkIGVuZCB1cCB3aXRoICJhYlhjIi5BdXRvbWVyZ2UuIFRoZSBzZXF1ZW5jZSBudW1iZXIgaXMgYmkxIGJpZ2dlciB0aGFuIHRoZSBiaWdnZXN0IHNlcXVlbmNlIG51bWJlciB5b3UndmUgZXZlciBzZWVuV2hlbiB5b3UgbWFrZSBhIGNoYW5nZSwgdGluc2VydCBhbnl0aGluZywgeW91IHNldCB0b2JlIC4gWWpzIGhhcyBhIGRpZmZlcmVudCBhcHByb2FjaCwgYnV0IGl0cyA6CgooWWpzIGhhcyBhIGRpZmZlcmVudCBhcHByb2FjaCB0byB0aGUgZXNlcXVlbmNlIG51bW5lciB0aG1udW1iZXIgdGhpbmcsIGJ1dCB0aGUgZGlmZmVyZW5jZSBpcyBsZXRzIG5vdCBnZXQgaW50byB0aGF0IG5vdylzbGlnaHRseSB3aGF0ZXZlcml0cyBmaW5lLHlvdXdpdGggYSBiaXQgb2YgYSBoYWNrLiBJdCBzZXZlciBuZXcgaXRlbSdzCgooV28gCgo+IFdvdyBJIHNhdyBhIHNlcXVlbmNlIG51bWJlciwgYW5kIGl0IHdhcyAqdGhpcyBiaWcqISEKCj4gV293IEkgc2F3IGEgc2VxdWVuY2UgbnVtYmVyLCBhbmQgaXQgd2FzICp0aGlzIGJpZyEqLiBZIlllYWg/IE1pbmUgaXMgKmV2ZW4gYmlnZWdlciEqIiIiIi4gQWhlbS5VaCwgdWhtLCAgSSB0aGlua1llcywgdGhlIGF1dG9tZXJnZSBsaWJyYXJ5IGltcGxlbWVudHNXaHRhYXRldmVyLiBUaGUgYXV0b21lcmdlIGxpYnJhcnkgaW1wbGVtZW50c3dvcmtzIGJ5IGJ1aWxkaW5nIGEgdHJlZSBvZiBpdGVtcy4KCiAKCiBBbnlXYWh0aGF0ZXZlci4gKClTbyBob3cgZXdlZmFzSG93IGZhc3QgaXMgaXQ/QXJ1bnRlc3QgaXQgdXNpbmdvd24gYW4gZWRpdGluIGcgdHJhY2UgIGhpbXNlbGYgbWFkZSB0cmFjZSBvZmludHlwaW5nIHVwIEhvdyBmYXN0IGlzIGl0PyBGb3IgYSBhdXRvbWVyZ2UgYW55YXd5d2F5IG9ubHkgS2V2aW4gSmFobnMgKHRoZSBZanMgYXV0aG9yKSBoYXMgYSBtdWNoIGJldHRlcm1vcmUgZXh0ZW5zaXZlIGJlbmNobWFya2luZyBzdWl0ZVsgaGVyZV0oaHR0cHM6Ly9naXRodWIuY29tL2Rtb25hZC9jcmR0LWJlbmNobWFya3MpLiBBbGwgdGhlIGJlbmNobWFya3MgaGVyZSBhcmUgZG9uZSB1c2luZyBOb2Rlc2pzIDE2LjEgb24gbXkgaGNjaG9ua3kgY2hvbmsgcnl6ZW4gNTgwMHggd29ya3N0YXRpb24uLCB3aXRoIHVzaW5nIE5vZGVqcyAxNi4xIGFuZCBydXN0YyAxLjUyIHdoZW4gdGhhdHMgYXBwcm9wcmlhdGUuIFNwb2lsZXJzIWZyb20sYiBhbHNvLCB3aGljaCBpc24ndCBpZiB5b3UncmUgaW50byB0aGF0IHNvcnQgb2YgdGhpbmdteXRoZSgpIGJlY29tZXNBbnl3YXksIGEgYWJvdmUgCgpUaGUgZWRpdGluZyB0cmFjZSBNVGhlIGVkaXRpbmcgdHJhY2UgaGFzIDI4MDAgMDAwIGVkaXRzLCBhbmQgdGhlIGZpbmFsIGRvY3VtZW50IHNpemUgaXMgYWJvdXQgMTAwa2IuICAwMDAgY2hhcmFjdGVycyBBCgpieSB0aGUgdGltZSBpdHMgZG9ud2UsIGF1dG9tZXJnZSB1c2VzIFdvdy4hIVdob2EhIFRoYXRzIDEwa2IgZm9mIHJhbSAqcGVyIGtleSBwcmVzcyouV2UgY2FuIGNvbXBhcmVXSWYgd2UganVzdCBwcm9jZXNzIHRoYXQgaW4gamF2YXNjcmlwdCBkaXJlY3RseSwgdXNpbmcgYSwgd2VsbCAsIGl0cyBtdWNoIHNsb3dlcjogbWlnaHQgYWxsb3cgY29uY3VycmVudCBlZGl0cyBidXQgaXRzIHNsb3cgICB0aG91Z2g/dGhhdCB0b28gVGhlIGF1dG9tZXJnZSB0ZWFtIGlzIHdvcmtpbmcgb24gYSBydXN0ICJiYWNrZW5kIiBmb3IgdGhlIGFsZ29yaXRobSwgYnV0IGl0IGhhc24ndCBiZWVuIG1lcmdlZCB5ZXQucmVwbGFjZW1lbnQgIGltcGxlbWVudGF0aW9uIG9mIHRoZSBBbmQgaW4gdGhlIG1lYW50aW1lIHRoZXkgaGF2ZW4ndCBib3RoZXJlZCBtYWtpbmcgdGhlIGphdmFzY3JpcHQgY29kZSBmYXN0IGJlY2F1c2VhdCB0aGUgdGltZSBvZiB3cml0aW5nIApUaGVyZSdzIGFuIG9sZCBzYXlpbmcgd2l0aCBwZXJmb3JtYW5jZSB0dW5pbmc6Cgo+IFlvdSBjYW4ndCBtYWtlIGEgcHJvZ3JhbSBmYXN0ZXIuIFlvdSBjYW4gb25seSBtYWtlIGl0IGRvIGxlc3Mgd29yay4KIGF1dG9tZXJnZUFpciAgbGFuZGVkIHlldC50aGUgY29tcHV0ZXJTbyBob3cgZG9IIGZyb20gZ29pbiBnaHRnIHRocm91Z2ggdGhlIGNvZGUgYW5kIGltcHJvdmluZyB0aGluZ3MgSSBhZ3JlZSB3aXRoIHRoZSBhdHVvbWVyYXV0b21lcmdlIHRlYW06Vy5BIExldHMgIFdlIGNhbiBMRXRzZXRzICJJbWltcHJvdmUiIGl0LmZpeC5Zb3UgY2FuLCB3aGljaCBLZXBpb25lZXJlZCBieXRhbGtpbmcgYWJvdXQscHJldHR5IGRhdGEgc3RydWN0dXJlICIiaW4gdGhlIGZpZWxkIGhhcyAgYXV0b21lcmdlIGRvZXNmbGF0ICwgYnUgbGwgZ2V0IHRoZXJlV2l0aCB0aGlzIHN0cnVjdHVyZSwgdGhlIHdheSB3ZSBpbnNlcnQgaXRlbXMgY2hhbmdlcy4gc2xpZ2h0bHkuIC53aWUgaW5zZXJ0IGJ5IGFuc3dlciBpc2l0aGUgc2xpZ2h0bHkuID9UaGUgcXVlc3Rpb24gaXMsIGhvdyBkbyB5b3UgaW5zZXJ0IGEgbmV3IGl0ZW0gaW50byBhIGxpc3QgbGlrZSB0aGlzSFRoYXQgbG9va3Mgc2ltcGxlLCBidXQgaGl0cyBlYXN5Oiwga2VlcGluZyB0aGUgc29ybSBzb3J0ZWQuLiAoS2VlcHJpZ2h0IGxvY2F0aW9uIGluIHRoZSAuIHR5anlqc3doZXJlIEFuZCB1aCwgaUkgaXQhVGhpcyBpcyBqdXN0IGFFc3NlbnRpYWxseSwgdGhpcyBhcHByb2FjaEl0IHNvdW5kcyBzb3J0IG9mIGNvbXBsaWNhdGVkLCBidXQgeUhlcmUncyBhdGhlIGFsZ29yaXRobSBpbiAsIHdpdGggbG90cyBvY29tbWVudHMgQ1JEVCBsb3RzIG9mIFJDUkRUcyBsaWtlIHRoaXMucyBhbGwgd29yaywgYW5kIHkKMi4gRG9pbmcgaXQgdGhpcyB3YXkgbGV0cyB5b3UgaW1wbGVtZW50IHRoZSBzZW1hbnRpY3Mgb2YgbXVsdGlwbGVzcy4gTSB5b3UgbmVlZCB0b3MzNDUgVGhlIGFsZ29yaXRobSBpc3Mgc3VwZXIgZmFzdG9ubHkgc2xvd3MgZG93biB3aGVuIHRoZXJlIGFyZWMuIHVCdXQgdGhhdHMgLUkudGhlKiogaXMgdG8gYWN0dWFsIGF1dG9tZXJnZSwgYW5kIHlqcyBhbmQgc3luYzkuKShGIHZlcmZpaWZpZWQgKFRNKVtdKGh0dHBzOi8vZ2l0aHViLmNvbS9qb3NlcGhnL3JlZmVyZW5jZS1jcmR0cy9ibG9iL21haW4vcmVmZXJlbmNlX3Rlc3QudHMpIGtpbmRhbHNvIHJlYWxseWVsZWdhbnRXZSBpLiBHZW5pdXMhIEdlbml1cyFJVHMgYXRzIGFib3V0Ok1pbmQgeW91LCBzIFRoaXMgVGhlc2UgVGhlc2UgYXJlIGNvbXBsZXRlbHkgZGlmZmVyZW50IGNvZGViYXNlcyBiZWluZyB0ZXN0ZWQuCjMuIFVoU1RyYXZlcnNlIHRoZSB0cmVlYmFja3dhdXAgdGhlIHRyZWUgdG8gZmlndXJlIG91dCB3aGVyZSB0aGUgaW5zZXJ0IHBvc2l0aW9uIG9mIHRoIGVlZSBuZXcgaXRlbSwgYW5kIHVwZGF0ZSB0aHJvdWdoIG91ciBjb3B5IG9mIHRoZSBkb2N1bWVudC4gKEF1dG9tZXJnZSBhbHNvIHN0bzMuIFRyYXZlcnNlIHVwIHRocm91Z2ggdGhlIHRyZWUgdG8gZmlndXJlIG91dCB0aGUgaW5zZXJ0IHBvc2l0aW9uIG9mIHRoZSBuZXcgaXRlbSwgYW5kIHVwZGF0ZSBvdXIgY29weSBvZiB0aGUgZG9jdW1lbnQuIChBdXRvbWVyZ2UgYWxzbyBzdG8oIHNvIHlvdSBjYW4gYWRkICB1cGRhdGUgb3VyIGNvcHkgb2YgdGhlIGRvY3VtZW50LiAoQXV0b21lcmdlIGFsc28gc3RvIGluIHlvdXIgZWRpdG9yIC8gLmFjdHVhbCBZIChBbmQgaXRhbmQgaXQgc2lpcyBhIGJpdCBoYWlyeSB0cmFuc2xhdGluZyB0aGUgc2VtYW50aWNzKS5CIGZvciBhdXRvbWVyZ2Ugb3IgeWpzIGluc2VydCBmdW5jdGlvblRoaXMgYXBwcm9hY2ggaXMgcHJldHR5IGJlYXV0aWZ1bHByZXR0eSAgZm9yIGxvdCBzb2YgcmVhc29uc3Mgb2YgCjUuIEl0cyBmYXN0ZXIgKmFuZCogc2ltcGxlci4gSG9seSBncmFpbC5UaGF0cyB3YWxhbHdheXMgdGhlIGhIb2x5IGdyYWlsLCByaWdodCB0aGVyZS4uSXRzIFRoaXMgYXBwcm9hY2ggaXMgYWJvdXQsIGFuZHNlLCBzbyBpdHMuIFRoZSBwZXJmb3JtYW5jZSBkaWZmZXJlbmNlIGlzIG5ldnIgamVyIGp1c3Qgb25lIHRoaW5ncyBhcmVuJ3QsIHNvdHRoaXMgPiBOb3RlOiBTIFNvbWUgb2YgdGhlc2UgcGVyZm9ybWFuY2UgaW1wcm92ZW1lbnRzIGNvbWUgZnJvbSB0aGUgZmFjdCBJJ20gYWxzbyBub3QgdXNpbmcgaW1tdXRhYmxlanMuICBoZXJlIGhlcmUgLSB3aGljaCB3aWxsIGFsc28gbWFrZSBhIGJpZyBwZXJmb3JtYW5lIGNlIGRpZmZlcmVuY2UuaXNpbmdwZXJmb3JtYW5jZXByb2JhYmx5IGltcGFjdCBvbiBwZXJmb3JtYW5jZS4KClRoaXMgaXMgYmV0dGVyLCBidXQgaXRzIHN0aWxsIG5vdCAqZmFzdCouCgpUaGlzIGlzIGJldHRlciwgYnV0IGl0cyBzdGlsbCBub3QgKmZhc3QqLiAvIGFic3RyYWN0aW9udGhhdCBjb3JyZWN0ICwgaXRzIHRpbWUgdG8gIG91clcsICwgYnV0IHRoZSBpbXBsZW1lbnRhdGlvbiBpc3Mgc3RpbGwgbm90ICpmYXN0Ki4gSSBiaWcuOixib3R0bGVuZWNrcyBpbiB0aGlzIGFsZ29yaXRobVdJLiBXZSBhbHNvIG5lZWQgdG8gZmlndXJlb3V0ICBlIG91dCB0aGUgcGFyZW50IG9mIHRoaWUgbmV3IGl0ZW0udGFrZSBhIGxvb2sgYXQgbmVhcmJ5IG9wZXJhdGlvbnMgdG8gdGggdGhlIHVzZXJzLnR0aGUgY29kIGRlIGRvZXMgdGhpcyAqYWZ0ZXIqIHRoZSBuZXcgaXRlbSBpbiB0aGUgYXJyYXkKCj4gVCAoSSdtIFdlbGwsICB2OFY4aGVyZS5XaXRzIHN0aWxsIHByb2JhYmx5IHNsb3cgd2hlbiB3ZSdyZSBtb3ZpbmcgdGhvdXNhbmRzIG9mIGl0ZW1zV2VsbCwgQXNpZGU6IGhlcmUgdGhhdHVndXRCdXQgd2luIHRodGh0aGVyZWFzbyBtYW55IGluIG5hdGl2ZSBjb2RlIGluRXZlcnkgdGltZSB3ZSBpbnNlcnQgaW50byBhIGRvY3VtZW50IHdpdGggbiBpdGVtc24gc3RlcHMgb2Ygd29yayoqKiplZXZlcnkgdGltZSB3ZSBpbnNlcnQgaW50byBhIGRvY3VtZW50IHdoZXJlIHRoZXJlIGhhdmUqbiogaXRlbXMgIC0gZC4gRCwgYmVjYXVzZSBkZWxldGVkIGl0ZW1zIGFyZSBuZXZlciByZWFsbHkgcmVtb3ZlZCBhbGdvcml0aG0gCgpJbnNlcnQgaW5nIGFuIGl0ZW0gd2lsbCB0YWtpbnRvIGEgZG9jdW1lbnQgLCB0aGUgY29tcHV0ZXIgZG9lcyBhYm91dCAqbiogc3RlcHMgd2lsbCB0YWtlTm9wZSwgaXRzIHdvcnNlIHRoYW4gdGhhdC5JaW5nKiogYmVhdWNhdXNlIGRlbGV0ZWQgaXRlbXMgYXJlbid0IHJlYWxseSByZW1vdmVkIHdpbGwgdGFrZSBuIHN0ZXBzKipJbiBCaWctTyBub3RhdGlvbiwgaSoqKioKCgpDYW4gd2UgZml4IHRoaXM/IFllcyB3ZSBjYW4hV2UgbmVlZCB0LCB3aXRob3V0IHNsaWRpbmcgY29weWluZyBhbGwgdGhlIGV4aXN0aW5nIGl0ZW1zIGFyb3VuZC5XIC0gYmVjYXVzZSBsaW5rZWQgbGlzdHMgYWxsb3cgaW5zZXJjYWxsb3cgaW5zZXJ0cyBpbiB0aGUgbWlkZGxlIGluIE8oMSkgdGltZVdlbGwsIGkgYWRkc3RoaW5nQWFhaCBmLiBDb2xsV2UgY2FuIG9ubHkgY29sbGFwc2UgcnVucyBvZiBpdGVtcyB0aGUgaURJRHMgYW5kIHBhcmVudHMgYXJlIHNlcXVlbnRpYWwgdGhlIGNvZGVzIHRyaWNreWFnYWluICBhdCBlbnRyaWVzZm9yIHRoaXMgZWRpdGluZyB0cmFjZSwgaW4gTWFydGluJ3MgZWRpdGluZyB0cmFjZSwgIGludG8gYSBzaW5nbGUgaXRlbU5vdGUgdyB1bmZvcnR1bmF0ZWx5aW5zZXJ0cyBsaW5lIHVwYXJlbGluZSB1cGx5VCBhbHNvV2UnbGwgYWxzbyBzb21ldGltZXMgbmVlZCB0byBvbmUgb2Ygb3VyIGluIE1hcnRpbidzIGVkaXRpbmcgdHJhY2UsIHdpdGggdGhpcyBiZW5jaG1hcmsgZGF0YUhvdyBmYXN0IGlzIGl0IG5vdz8gWWpzIHRoYW4gdGhlIHJlZmVyZW5jZS1jcmR0cyBpbXBsZW1lbnRhdGlvbiwgYW5kIGl0IG9ubHkgdXNlcyBhbmQgY29uZnVzZWRiYmNvbmZ1c2VkIHNvbWUgaXNpbmdMZWF2aW5nIEV2ZXJ5dGhpbmcgaXMgZmFzdGVyIGluIFJ1c3QsIHdpdGggQi1UcmVlc0l0c0V2ZXJ5dGhpbmcgaXMgZmFzdGVyIGluIFJ1c3QsIHdpdGggQi1UcmVlc0phdmFzY3JpcHRGYXN0ZXIgdGhhbiBKYXZhc2NyaXB0LCBhbmRpWWpzIGlzIHZlcnkgd2VsbCBvcHRpbWl6ZWQgYWxyZWFkeSwgYW5kIEkgZG91YnN1c3BlY3QgamNhbid0IHdlIGNhbid0IG1ha2UgcnVuaW4gdGhpcyB0ZXN0SQoKICB3LSB3aGljaCB3ZSBjYW4gb25seSBkb21vcmUgY29udHJvbCBvdmVyIHRoZSBtZW1vcnkgbGF5b3V0IC0gd2hpY2ggd2UgY2FuIG9ubHkgZG8gaW4gYSBsb3dlcnNzdHlzdGVtcyBsYW5ndWFnZSBsaWtlIFJ1c3QuIGluIG1lbW9yeUJ5IHRoZSB3YXksIHlJdHMgSXRzIHRlcnJpYmxlIGJlY2F1c2UgYWZyYWdtZW50ZWQgLSAuIEl0cyBhbGwgIGFycmFuZ2UgZGF0YSBsaWtlIHRoaXMgZm9yIGVhY2ggaXRlbW9uZSBieSBvbmUgYWxsIG9mIHRob3NlIG9iamVjdHNleHRyYSBkYXRhIGxsIC4gSSBpbiBtZW1vcnksIGFuZGkgYXMgd2VsbElmIHdlLCBhYm91dCAtLSBBdCB0bmQgYXQgdGhpcyBzcGVlZCwgIHRha2VzIHRoZSBjb21wdXRlckluIGNvbXBzYXJvbnNpc29uLCBpdGluZyBzaG9wcGluZyAKCi5CIGl0ZW0gaW4gdGhlIHNjYXZlbmdlciBodW50IG5hbWVzLCB3aXRoIGEgaGlkZG5lZW5vciB3aGF0ZXZlciAgCgpSZWFkaW5nIHRoZSB3aG9sZSBsaXN0IHdvdWxkIHRha2UgYWdlcy4gLiBOZWVkbGVzcyB0byBzYXksIHIgdGFrZXMgdGhlIGNvbXB1dGVyICggKGluIGNvbXB1dGVyIHRpbWUpLmxpbmtlZCBsaUZXaXRoIGxpbmtlZCBsaXN0cyAgdGhhdGJldHdlZW4gaXRlbXMsIGFuZCB3ZSBkbyB0aGF0IGEgbG90RiBuZWVkIGEgbG90IG9mIG9iamVjdHMsICBzbyB3ZS4gU28gdGhlcmUncyB3ZWlyZCwgd2hpY2ggd2lsbGVuIGVuZCB1cCAobGlrZSBmaXhlZCBzaXplIGFyYXJheXMpLiBUaGVzZUluIGphdmFzY3JpcHQgQW5kIHRoYXQgbWFrZXMgZnJhZ21lbnRhdGlvbiB3b3JzZSwgZXZlbiBhcyB3ZSdyZSBtYWtpbmcgdGhlIC4gSXRzIGEgICwgd2hpY2ggbWFrZXNjYW4gbWFrZSB0aGluZ3Mgc2xvdywgZXIsIG5vdCBmYXN0ZXJldmVuICB3ZSBkb24ndCBoYXZlIHRvIHVzZSBqYXZhc2NyaXB0IGFueSBtb3JlIEkgd2FudCB0by5BIChXaXRoIGxpbmtlZCBsaXN0cyB3ZSBkbyB0aGF0IHNjYXZlbmdlciBodW50IGVhY2ggdGltZSB3ZSBtb3ZlIGJldHdlZW4gaXRlbXMhKXlvdSBpbmN1ciBhIG1lbW9yeSByZWFkIHlvdUFsbCB0aG9zZSBleHRyYSBvYmplY3Rzc28gdGhlIHJlc3VsdCBpcyBvZnRlblRoaXMgaXMgV2ViQXNzZW1ibHlUbyBzZWUgaG93IGZhc3Qgd2UgY2FuICpyZWFsbHkqIGdvLHRoZSAgaW1wbGVtZW5wcmV2aW91cyB3b3JrcyB0aGUgc2FtZSBhcyB5anMsYiBpbnRlcm5hbGx5YW55IGl0ZW0uLiBVcGRhdGVzc28gYWdhaW4gYW5kIHdlJ3JlIGRvbmUKCldoZW4gd2VJdCBkb2Vzbid0IGNvbXBlZSBpbnRvIHBsYXkgaGVyZSwgYnV0IHdoZW4gbWVyZ2luZyByZW1vdGUgZWRpdHMgd2UgYWxzbyBuZWVkIHRvIGZpbmQgaXRlbXMgYnkgdGhlaXIgSUQgKCBNeSBydXN0IGltcGxlbWVudGF0aW9uIGhhcyBhbiBpbmRleCB0byBtYWtlIHRoaXMgZmFzdCwgdG9vLkknbSBub3QgdXNpbmcgLSB3aGljaCBtaWdodCBtYWtlIGl0IGF0IGxlYXN0IG5vdCB5ZXRqdXN0ICBpdC5NYXliIGVpdCB3ZSBpdCB3b3VsZCBoZWxwPyAgYXZvaWRzICBsZXRzIHVzIHBhY2sgYWxsIHRoZSBpdGVtcyB0aWdodGx5IGluIG1lbW9yeSBnaXZlcyB1cyB0b3RhbCBjb250cm9sIG92ZXIgdGhlIG1lbW9yeSBsYXR5b3V0LCBzbyB3ZSBjYW4gcGFjayBldmVyeXRoaW5nIGluIHRpZ2h0bHlhIHJ1biBvZiAgLCBhbGwgcGFja2VkYWRqYWNlbnQgaW4gUkFNTWVtY3B5IGlzIGFsd2F5cyAtIGl0cyBhIGZldyBoZWFyYnQgYmVhdHMuIE5vdCBhIHNjYXZlbmdlciBodW50Lml0cyB0aGUgIG9mIGEgbWFpbiBtZW1vcnkgbG9va3Vwd2UgY2FuIG5vdyBwcm9jZXMgcyB0aGUgd2hvbGUgdHJhY2UgaW5Ecml2ZW4gZnJvbSB0b0lmIHdlIGNvbXBpbGUgdGhpcyBjb2RlIHRvIGFuZCBkcml2ZSBpdCBmcm9tIGphdmFzY3JpcHRBbmQgaWYgd2UgY29tcGlsZSBpdCB0byBuYXRpdmUgY29kZSBhbmQgY2FsbCBpdCoqOi5JJ3ZlIGRvbmUgCgotLS0gYW5kIEkgY291bGRuJ3QgaGVscCBteXNlbGZJbiB0aGlzIGltcGxlbWVudGF0aW9uLCAgdGV4dCBUaGUgcmVhc29uIGlzIHRoYXR3IHRvbyBkb24ndCB0aGluayBpdHNtTXlbaUJ0cmVlPCBvZiB7W2l0ZW0sIGl0ZW0gaXRlbSwsIC4uLl0gc3BhbiBzcGFuPixNYWtpbmcgaXQgZgoKVGhpVGhpcyBjb2RlIGlzIGZhc3RlciB0aGFuIHVzaW5nIGEgcmF3IGphdmFzY3JpcHQgc3RyaW5nLmVkaXRpbmcgbm9ybWFsRXZlbiBmcm9tIHdlYmFzc2VtYmx5ICwgdGhyb3VnaHQgM3ggbmFpdGl2ZQpCdXQgIHNvdW5kZWRzcGxpdCBvdXQgZG9jdW1lbnQnc0knbSAgIEl0cyBhICJzdHJ1Y3Qgb2YgYXJyYXlzIiByYXRoZXIgdGhhbiAiYXJyYXkgb2Ygc3RydWN0cyIgYXBwcm9hY2guCgpTbyBtIE0sIHdpdGhtaW5nU28gbC4gVGhhdHMgaG93IHlvdSBpbXBsZW1lbnQgYSBDUkRULiBTZW1hbnRpY3MgfCBMQW5nYW5ndWFnZSB8IERhdGEgc3RydWN0dXJlIC0tLS0tLS0tLSBBTVJHQVJHQSBSR0EgLyBZQVRBIFlBVEEgKG5vbmUpIFlBVEEgWUFUQSBZQVRBIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICAgICAgIHwgLS0tLS0tLS0tLSB8IC0tLS0tLS0tLSB8IC0tLS0tLS0tLSB8ICAgICAgICB8IC0tIHwgLS0tLS0tLS0gSmF2YXNjcmlwdEpTIEpTICAgICAgIHwgSlMtLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLXwgfFROYWl2ZS10cmVlICAgICB8IEFycmF5ICAgICAgICAgIHxMaW5rZWQgbGlzdCAgICB8KG5vbmUpICAgICAgICAgfHwgUnVzdCAoQ2FsbGVkIGZyb20gSlMgdmlhIFdBU00pICAgIHwgMC4yMHMgICAgICB8ID8/PyAgICAgICB8KiogQi1UcmVlQi1UcmVlQi1UcmVlICAgICAgICAgfCB8IFJ1c3QgKG5hdGl2ZSkgICAgICAgICAgICAgICAgICAgICB8IDAuMDY1cyAgICAgfCAyLjMgTUIgICAgfCBCLVRyZWUgICAgICAgICB8ICAgICAgICAgfCoqCgoKWW91IGNhbid0IHRlbGwgZnJvbSBsb29raW5nIGF0IHRoaXMgbWV0aG9kLCBidXQgaW5zZXJ0aW9uc0FmdGVyCgoKQnV0IHdlV2VCdXQgd2UgY2FuIGdvIGZhc3RlclcKCiMjIE1ha2luZyBpdCBmYXN0ZXIgdGhhbiBKYXZhc2NyaXB0CgoKCkJ1dCBjYW4gd2Ugc3RpbGwgZ28gQ2Zhc3Rlcj9CdXQgY0NDYW4gd2Ugc3RpbGwgZ28gZmFzdGVyP0NhbiB3ZSBzdGlsbCBnbyBmYXN0ZXI/IFlqcyBpcyB2ZXJ5IHdlbGwgb3B0aW1pemVkIGFscmVhZHksIGFuZCBJIHN1c3BlY3Qgd2UgY2FuJ3QgbWFrZSBqYXZhc2NyaXB0IHJ1biBtdWNoIGZhc3RlciBpbiB0aGlzIHRlc3QuIElmIHdlIHdhbnQgdG8gY29udGludWUgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZSwgd2UgbmVlZCBtb3JlIGNvbnRyb2wgb3ZlciB0aGUgbWVtb3J5IGxheW91dCAtIHdoaWNoIHdlIGNhbiBkbyBpbiBhIHN5c3RlbXMgbGFuZ3VhZ2UgbGlrZSBSdXN0Li5GdG8gZ28gbG93ZXIgbGV2ZWwuIFcgV2UgbmVlZENhbiB3ZSBzdGlsbCBnbyBmYXN0ZXI/IFlqcyBpcyB2ZXJ5IHdlbGwgb3B0aW1pemVkIGFscmVhZHksIGFuZCBJIHN1c3BlY3Qgd2UgY2FuJ3QgbWFrZSBqYXZhc2NyaXB0IHJ1biBtdWNoIGZhc3RlciBpbiB0aGlzIHRlc3QuCklmIHdlIHdhbnQgdG8gY29udGludWUgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZSwgd2UgbmVlZCB0byBnbyBsb3dlciBsZXZlbC4gV2UgbmVlZCBjb250cm9sIG92ZXIgdGhlIG1lbW9yeSBsYXlvdXQuIEJ1dCBtYXliZS4uIGp1c3QgbWF5YmUgd2UgY2FuIGJlYSAgbGFuZ3VhZ2UsIGFuZCB3ZSBuZWVkc28gd2UgY2FuWVRoaXMgaXNIb3cgc2xvdz8gIAoKIGFyZSBtYWluIG1lbW9yeSByZWFkcyB3b3VsZC4gVGhlIG9tcGNvbXB1dGVyICAtIGFib3V0IGh1bWFuZXZlcnkgd2xpbGxhbG1vc3QgIVRoaXMgaXMgd2hhdCB3ZSBkbyBkbyB0b2hlIGRvdG8gdGhlIGNvbXB1dGVyIHdoZW4gaXQgcnVucyBqYXZhc2NyaXB0LiBJbiAgQXJyYW5naW5nZG9kbyB0aGUgby4gSW1hZ2luZSBpbnN0ZWFkIG9mIDo6Ojo6Ojo6Ojo6OkhvbmVzdGx5ICBhbmQgYSBsaXR0bGUgc3VzcGljaW91cyBvZjIyMjMzMwoKSSBXaGVuIEkgdG9sZCBLZXZpbiB0aGF0IGhJIHRob3VnaHQgSSBjb3VsZCBXaGVuIEkgdG9sZCBLZXZpbiB0aGF0IEkgdGhvdWdodCBJIGNvdWxkLi4uIHdlIGEgZ29vZCBydXN0IGltcGxlZW1udGF0aW9uaW1wbGVtZW50YXRpb24gd291bGQgZ28gZmFzdGVySSBjb3VsZCBtYWtlIGEgdGhhdCB3ZW50ICB0aGFuIHlqcywgaGUgZGlkbid0IGJlbGlldmUgbWUuIEVISGUgc2FpZCB5anMgd2FzIGFscmVhZHkgc28gb3B0aW1pemVkLCBoZUNSRFRhICBnb2VzaGUgZG91YnRlZCBpdGhlcmUgd2Fzbid0IG11Y2ggZ29pbmcgZXZlbiBmYXN0ZXIgd2FzIGdvaW5nIHRvIGJlIGJhc2ljYWxseSBpbXBvc3NpYmxlLm4ndHBvc3NpYmVsbGVzd2VsbCAgcHJvYmFibHkKCkJ1dCBJIGtuZXcgYWJvdXRzb21ldGhpbmcgaGUgZGRpZG4ndDogVGhlIHdheSB0aGUgY29tcHV0ZXIgb3JnYW5pemVzIG1lbW9yeSBhbmQgbWVtb3J5IGxvb2t1cHNVV2UgY2FuIHVzZSBydXN0IHRvIElmIHdlIGNhbiBjb250cm9sIHdheSB0aGVCdXQgSSBrbmV3IHNvbWV0aGluZyBoZSBkaWRuJ3Q6ICJNYXliZSBhIGxpdHRsZSBmYXN0ZXIuLi4gYnV0IG5vdCBhIGxvdCBmYXN0ZXIhIiBpbiBmIHlvdSBqdXN0IHBvcnQgaXQgdG8gcnVzdC5SQndheSAgaXQgd29uJ3QgZ28gLktldmluIGtub3cgSSBrbmV3IGFib3V0IG1lbW9yeSBmcmFnbWVudGF0aW9uIGNhbmQgY2FjaGUgY29oZXJlbnQgc3RydWN0dXJlcy4gbm90WSBhIGxpdHRsZSBiaXQgYSBsb3QgViBWOCBpcyByZWFsbHkgZmFzdCB0aGVzZSBkYXlzIWtub3drbmV3Y3lrZWVwIG1ha2luZyB5anMgb3VyIGFsZ29yaXRobXMgIFJ1c3QgaXNuJ3QganVzdCAqZmFzdGVyKi4gSXQgcyBhbHNvYW5kIHRoYXQgZ2l2ZXMgdXMgdGhlIHRvb2xzIHdlIG5lZWQgdG8gY29udHJvbCBhbGxvY2F0aW9ucyBhbmQgdGhlIEFwcGFyZW50bHkgc29tZSBwYXJ0cyBvZiB5anMgaGF2ZSBiZWVuIHJld3JpdHRlbiBhYm91dCAxMSB0aXZlc21lcyBpbiBvcmRlciB0byBtYWtlIGl0IGdvIHRoYXQgZmFzdCB3b3JrIHNvIHdlbGwuICBJVHMgc3VwZXJJdHMgc3VwZXIgaW1wcmVzc2l2ZSF3ZXJlaGF2ZSBiZWVuMiFCdXQgY0NCdXQgYyBhbnl3YXlIb25lc3RseSBkb3VidCBJIGNhbiBtYWVrZSBhbnkgZmFzdGVyIHRoYW4gS2V2aW4gZGlkJ20gbmVydm91cyBhYm91dCBydW5uaW5nIGRvdWJ0cHVyZSBQdXJlICEKCihJIGtzd2F5YXkgKm5rbmV3dyogYmVjYXVzZSBLZXZpbiBoaXMgY29weWluZyBtZSByaWdodCBiYWNrLCBhbmQgb3Jrd29ya2luZyBvbiB1c2UgdGhlIHBhc3QgdGVuc2UgaGVyZSBbWXJzXShodHRwczovL2dpdGh1Yi5jb20veWpzL3ktY3JkdCkgLSBhIHJ1c3QgcG9ydGhpcyBvd24gIG9mIFlqcyB0aGF0IGF0ICEpPiBCYWQgbmV3czogd2lsbCBvZnRlbkEgY2xvc2UgdG8KCj4gSW50ZXJhY3RpdmUgdmlzIHNob3dpbmcgMTAwIHNlY29uZHMgdnMgMC41IHNlY29uZHMKCkl0cyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHJlYWRpbmcgYSBwaWVjZSBvZiBwYXBlciwgYW5kIHJlYWRpbmcgYSBwaWVjZSBvZiBwYXBlciB3aXRoYSBzY2EgbG9jYXRpb24gaW4geW91ciBob3VzZS4gVGhlbiB5b3UgaGF2ZSB0byBnbyB0aGVyZSwgc2VhcmNoIGFyb3VuZCBhbmQgKnRoZW4qIHlvdSBmaW5kIGEgcGl0aGVyZXRoZXJlIHlvdSBmaW5kIGFub3RoZXIgbm90ZSBvbiBhc2NhdmVuZ2VyIGh1bnQgYSBZKiogcGllY2Ugb2YgcGFwZXIgd2l0aCB0aGUgYWN0dWFsIG5vdGUgb24gaXQuLCBvbmx5IkNoZWVzZSwgTWlsaywgQnJlYWQiLCAgaGFzbGlzdHMgYSBzZXJpZXMgb2ZzIC0gYW5kIG9ubHkgd2hlbiB5b3Ugc2VhcmNoIGFyb3VuZCB0aGVyZSB3aWxsIHlvdSBmaW5kd2hpY2ggYWN0dWFsbHkgc2F5cyB5b3UgbmVlZCBhZ2VzIHNvIG91ciBkYXRhIGlzIGFsbCB0b2dldGhlciBpbiBtZW1vcnkgaXRzIGFsc28KCgogVGhpcyBpcyB3aHkgbGlua2VkVGhlcmUncyBhIHJlYXNvbiB3aHkgYWxub21vc3Qgbm9ib2R5IHVzZXMgbGlua2VkIGxpc3RzZXZlcnl0aGluZyB0eW91ciBjb21wdXRlciBkb2VzaXN0aGluIGcgeW91IG5lZWQgdG8gYnV5VGhlIG5hbWVFYWNoIGl0ZW0gb24geW91ciBzaG9wcGluZyBsaXN0IG5hbWVzIHNvbWV3aGVyZSBpbiB5b3VyIGhvdXNlLllPbXlvdSBmb3IgeW91ciBjb21wdXRlcikocmVsYXRpdmVseSBzcGVha2luZyBhZ2VzdGhlY29tcHUgY29tcHV0ZXIgY2FuIGZldGNoIGl0IGFsbCBpbiBvbmUgZ28gYW5kIHRoaXMgaXMgdWl0IC0gbWVtb3J5IGZyYWdtZW50YXRpb24gc3VydWlucyBwZXJmb3JtYW5jZSBpbiB0aGUgcmVhbCB3b3JsZC4gYXJlIGFsbW9zdCBuZXZlciB1c2VkIGluIHRoZSByZWFsIHdvcmxkIGJlY2F1c2V0aG9zZSAgVGhlIHByb2JsZW0gd2l0aCBmaXMgdGhhdCB5b3UgZW5kIHVwIGluZ2FzIGEgcmVzdWx0IHlvdXIgcHJvZ3JhbXMgb2Z0ZW4gZW5kIHVwIHJ1bm5pbmcgYW55d2F5b2YgYWxsIHRoYXQgd29yayAsIGFuZCB3aHkgaXQgaGFuc24ndCBnb3R0ZW4gZmFzdGVyIGluIHJlYWxseSBnb3R0ZW4gYW55IGZhc3RlciBBbmQgYXQgbGVhY2ggbGVhZiwgZXcgd2Ugc3RvcmUgMzIgc3BhbnMgb2YgaW5zZXJ0cyAoISksIGFhIGNodW5rIG9mICwgYWxsIGNvbmdpdGlndW91cyBpbiBtZW1vcnkgc3BhbnNhYm91dCAgYWZ0ZXIgIGFsc29JJ20gc3RvcmluZyBhbiBpbmxpbmUgYXJyYXkgaW4gZWFjaCBsZWFmIG5vZGVwYWNrZWQgIHJlc3VsdCBpbkl0cyBuIHBlciB3b3JkLCBhcyBvcHBvc2VkIHRvIGEgZmV3IGJ5dGVzIHBlciBoZWFydGJlYXQgZXBpYyAgVGhhdHMgNDQwMDUwMHggZmFzdGVyIHRoYW4gdGhld2hlcmUgd2Ugc3RhcnRlZCB3aXRoIGF1dG9tZXJnZS4sIG9yIGFib3V0IDQuMyBtaWxsaW9uIHBvcGVyYXRpb25zIGV2ZXJ5IHNlY29uZC4uIEl0IGNhbiBwcm9jZXNzKioqKgpCdXQgSSd2ZSBkb25lIG9uZSBsYXN0IHRoaW5nLiBJIGRvbid0IGtub3cgaWYgaXRzIGEgZ29vZCBpZGVhLCBidXQgSSBkaWQgaXQgYW55d2F5IGJlY2F1c2UgaXQgc291bmRlZCBjbGV2ZXIgYW5kIEkgY291bGRuJ3QgaGVscCBteXNlbGYuIEluIHRoaXMgaW1wbGVtZW50YXRpb24sIEkgc3BsaXQgb3V0IHRoZSBkb2N1bWVudCdzIHRleHQgY29udGVudCBpbnRvIGEgc2VwYXJhdGUgZGF0YSBzdHJ1Y3R1cmUuIFRoZSByZWFzb24gaXMgdGhhdCB3aGVuIHlvdSdyZSBhY3R1YWxseSBkb2luZyBjb2xsYWJvcmF0aXZlIGVkaXRpbmcsIHlvdSBwcm9iYWJseSB3YW50IGFsbCB0aGUgY2hhcmFjdGVycyBpbiB5b3VyIGRvY3VtZW50IHRvIGJlIHN0b3JlZCBpbiBhbiBhY3R1YWwgYXJyYXksIG9yIGluIFZTIENvZGUncyBlZGl0b3Igb3Igc29tZXRoaW5nLiBJIGRvbid0IHRoaW5rIGl0IG1ha2VzIHNlbnNlIHRvIGR1cGxpY2F0ZSB0aGUgZG9jdW1lbnQncyBjb250ZW50IGluIG15IGxpYnJhcnkgdG9vLgoKClRoaXMgaW1wbGVtZW50YXRpb24gdXNlcyBhIGFwcHJvYWNoIGZvciB0aGUgc3RyaW5nIGNvbnRlbnQuIFRoZSBjb21wbGV0ZXdob2xlIGxvb2tze31pZCwgcGFyZW50LCAuLi4gbGVuLCBsZW5ndGh7aWQsIGxlbmd0aCwgcGFyZW50fQoKQWxsIHRoZSB0ZXR4dCBjb250ZW50IGl0c2xlZmVsZiBpcyBwdWxsZWQgb3V0IGludG8gYSByb3BlIGxpYnJhcnkgLiAoU21hcnRSb3BlcyBhcmUgc21hcnQgc3RyaW5ncykuIEdldCBpdD8gZmFuY3kuICBoZXJlLCB3b3JraGljaCB3b3JrcyBncmVhdCBzbyBmYXN0IHRoYXQgIGlzIGFjdHVhbGx5IGRvbWluYXRpbmdtb3N0IG9mIHRoZSBhbGdvcml0aG0ncyB0aW1lIGlzIHNwZW50IGluIHJvcGV5dXBkYXRpbmcgdGhpbmdzIFdyb3BleUl0cyBub3QgIDExIG1pbGxpb24gb3BlcmF0aW9ucyAvIGVzZWNvbmQuLCBteSBmcmllbmRzLCBpcwojIENvbmNvbGl1dGlvbnVzaW9uCgpJJ20gcmVhbGx5IGdraW5kIG9mIGdyYXRlZnVsIGZvciB0aGF0IHBhcGVyIG5vdy4gSScgSSBtZWFuLCB5b3UgZG9uJ3QgbGlrc2lsbHkgYWNhZGVtaWMgIEkgdXNlZCB0byB0aGluayB0aGF0IGFjYWRlbWljcyB3ZXJlIHJlYWxseSBjbGV2ZXIsIGJ1dCBpdCB0dXJucyBvdXQgdGhlcmUneSdyZSBqdXN0IGxpa2UgdGhlIHJlc3Qgb2YgdXMuYXMgbXlvcGljIGFuZCBvYnNlc3NpdmUgYXMgIHRoZSAoSSdtIG5vV2VsbCBub3QgbWUgLSB0aGF0YXBwYXJlbnlsdGx5IGJlaW5nIGdvb2QgYXQgd3JpdGluZyBwYXBlcnMgaXMgYSBJJ20ga2luZCBvZiBncmF0ZWZ1bCBmb3IgdGhhdCBzaWxseSBhY2FkZW1pYyBwYXBlciBub3cuIEkgdXNlZCB0byB0aGluayB0aGF0IGFjYWRlbWljcyB3ZXJlIHJlYWxseSBjbGV2ZXIsIGJ1dCBhcHBhcmVudGx5IGJlaW5nIGdvb2QgYXQgd3JpdGluZyBwYXBlcnMgaXMgYSB0aGFuIGF1dG9tZXJnZSAoYW5kIG1heWJlIEknbSBub3QgdGhhdGp1c3Qgc21hcnQgZW5vdWdoKSEuIWxsIGp1c3QgZW52ZXIgYmVuZXZlciBiZSB0aGF0IHNtYXJ0IE5vdyBJIGtub3cgdGhhdCBJJ20ga2luZCBvZiBncmF0ZWZ1bCBmb3IgdGhhdCBzaWxseSBhY2FkZW1pYyBwYXBlciBub3cuIEkgdXNlZCB0byB0aGluayB0aGF0IGFjYWRlbWljcyB3ZXJlIHJlYWxseSBjbGV2ZXIgKGFuZCBtYXliZSBJJ2xsIGp1c3QgbmV2ZXIgYmUgdGhhdCBzbWFydCkhIE5vdyBJIGtub3cgdGhhdEJ1dCBJJ20gc3RhcnRpbmcgdG8gcmVhbGlzZSB0aGF0IHR0aGV5J3JlIGp1c3QgYSBzIGxpa2UgdGhlIHJlc3Qgb2YgdXMgLSBvYnNlc3NlZCAuIFRoZXkncmUgc21hcnQgaW4gb25lIGRvbWFpbiwgYW5kIGtpbmYgZCBvZiB0ZXJyaWJsZW11c3QgYmUgdGhlIHNtYXJ0ZXN0IHBlb3BsZSBhcm91bmQgcmVhamxseWdyZWF0IGF0IG9ic2Vzc2lvbiBtdWdzIHRoZXJpaXJzcGVjaWFsIGludGVyZXN0IGFyZWEgZXZlcnl3aGVyZSBlbHNlLgoKSW52ZW50aW5nIGEgQ1JEVCBhbHRoZSBzZW1hbnRpY3MgZm9yIGNvbmN1cnJlbnQgZWRpdGluZyBpcyByZWFsbHkgaGFyZCBzb3VuZHNwZXJlci10by1wZWVyIHNvdW5kcyB0ZXJyaWZ5aW5nSW52ZW50aW5nIHRoZSBzZW1hbnRpY3MgZm9yIHBlZXItdG8tcGVlciBjb25jdXJyZW50IGVkaXRpbmcgc291bmRzIHRlcnJpZnlpbmcgYSBDUkRUYSBDUkRUSSB3YXNuJ3Qgc21hcnQgZW5vdWdoICB0byBmaWd1cmUgb3V0IHRoZSBzZW1hbnRpY3MgZm9yIEkgcmVhbGx5IHdhYW50ZWQgbGlzdCBjUkRDUkRUcyBXZSByZWFsbHkgbmVlZGVkIGEgICB3ZXJlb24gV2F2ZUdvb2dsZSB3YXZlLCBhbGwgdGhvc2UgeWVhcnMgYWdvICwgcmVhbGx5IHdhbmVlZGVkIGhpZ2ggcGVyZm9ybWFuY2UuIEkgd2Fzbid0IHNtYXJ0IGVub3VnaCB0byBpbnZlbnQgb25lSSBsaXRoaW5rIHByZXR0eSBoaWdobHkgb2YgbXlzZWxmLCBidXQgIGJhY2sgdGhlbi4gIFNvICBBbmQgYmVjYXVzZSB0aGUgYWNhZGVtaWNzIGRpZG4ndCBtYWtlIENSRFRzIGZhc3QsIEkgYXNzdW1lZCBub2Jkb2R5IGNvdWxkLiAgSSBtaWdodEJ1dCwgICBub3QgbWUgYmUgY2xldmVyIGVub3VnaCB0byBpbkFuZCAgYmFjayB0aGVuSSBhc3N1bWVkIHRoYXRjb3VsZG4ndCAgdGhlaXIgcnVuCgogVGhhdCB3YXMgd3JvbmcgLSBJIG15IGZvcnRlIGlzbid0IEdvb2dsZSB3YXZlLCBhbGwgdGhvc2UgeWVhcnMgYWdvLCByZWFsbHkgbmVlZGVkIGEgaGlnaCBwZXJmb3JtYW5jZSBsaXN0IENSRFQuIEFuZCBiYWNrIHRoZW4gSSB3YXNuJ3Qgc21hcnQgZW5vdWdoIHRvIGludmVudCBvbmUuIEkgYXNzdW1lZCB0aGF0IGJlY2F1c2UgYWNhZGVtaWNzIGNvdWxkbid0IG1ha2UgdGhlaXIgQ1JEVHMgcnVuIGZhc3QsIG5vYm9keSBjb3VsZC4gVGhhdCB3YXMgd3JvbmcgLSBteSBmb3J0ZSBpc24ndCBtdWdzbWlkZGxpbmdCZGlkbid0IG1hbmFnZSB0b1doZW4gcGFwZXJzIGxpa2UgTE9HT09UIGFuZCBXT09UIGNhbWUgb3V0IGFuZCB0aGVpciBhbGdvcml0aG1zIHJhbiByZWFsbHkgc2xvd2x5LCBJIHdhcyBleGNlaXRlZCAtIGJ1dC50aGUgIGludm9sdmVkIGdvb2QgcXVhbGl0eSBPdXIgZmVkZXJhdGlvbiBtb2RlbCB3YXMgYm9ua2VycywgYW5kIGl0IHdvdWxkIGJoYXZlIGJlZW4gc28gc2ltcGxlIHdpdGggIGFhIENSRFQuIEJ1dGJiYVNvIHdnb3QgQW5kICBtZWFtZWFudCB0aGUgYXRoZSBhY2F0aGF0IHdhcyBhcyBmYXN0IGFzIHRob3NlIGFsZ29yaXRobXMgY291bGQgZXZlciBnbywgIGlmdGh0aGUgCgp3YXZlIFtdaHR0cHM6Ly93ZWIuYXJjaGl2ZS5vcmcvd2ViLzIwMTMwMzMwMTQ0MTE2L2h0dHA6Ly93d3cud2F2ZXByb3RvY29sLm9yZy9mZWRlcmF0aW9uKGh0dHBzOi8vd2ViLmFyY2hpdmUub3JnL3dlYi8yMDEzMDMzMDE0NDExNi9odHRwOi8vd3d3LndhdmVwcm90b2NvbC5vcmcvZmVkZXJhdGlvbikgIGFuZCByZWFsbHkgYnVnZ3kuIElpdCBuZXZlciB3b3JrZWQgcHJvcGVybHkgc28gIHNsb3cgdGhleSB3ZXJlIHVud29ya2FibGVUaGUgd2hvbGUgdGhpbmcgd291bGQgaGF2ZSBiZWVuIHNvIG11Y2hyIGdvb2RXU28gd0kgZ290IGV4Y2l0ZWQgd2hlbnBhcGVycyBkZXNjcmliaW5nIC4gQnV0IHRoYXQgZXhjaXRlbXRuIG1lbnQgZXhjaXRlbWVudCB0dXJuZWQgdG8gZHVzdCB3aGVuIEkgcmVhbGlzZWQgaG93IHNsb3cgYW5kIGluZWZmaWNpZW50IHRoZWlyIGFsZ29pcnRoYWxnaW9yaXRobXMgd2VyZS4gVGhleSAtIGFuZG0gLiBNeSBnaWZ0IHRvIHRoZSB3b3JsZFBhciB0dCBvZiBtTSBpc24ndG1pZ2h0IG5vdCBiZSBDUkRUaW52ZW50aW5nIG5ldyBjbGFzc2VzIG9mIC4gQnV0IEkgZG8ga25vdyBob3cgdG8gbWFrZSBjb2RlIHJ1biBmYXN0LiBBbmQgSSB3YXMgbGV0dGluZyBkb3duIHRoZSBhY2FkZW1pY3MgaW4gdHVybiBiIHkgbm90IHNob3dpbmcgdXAgYW5kIGRvaW5nIG15IHBhcnQuCgpJIG1pZ2h0IGhhdmUgbm8gaWRlYSBob3cgdG8gcyByZWFsbHlldmVyeW9uZXF1aWV0bHkgIGV2ZXJ5b25lIGluICB0byBtIGhlcmUuYSBsaXR0bGUgYml0IHNvU290aGUgIGZvciBqdXN0IEkgZmlndXJlZEJ1dCBJbm90IGJlIGFueSBnb29kIGF0aW5nLGIgQnV0IEkgZGlkbid0IGV2ZW4gdHJ5IHRvIGhlbHAgb3V0dGhvc2UgYWxjYWRlbWljcyAgYW5kIGltcHJvdmUgZml4IHVwIHRoZWlyIGFsZ29yaXRobXMuKioqKmltcGxlbWVudGF0aW9uc0EgZGVjYWRlIGFnbyAgU28gcmVhbGx5IHRoZSBDUkRUc3RvdGFsbHkgb3V0c2lkZSBvZiB0aGUgbGFiIFNvIEkgbyBJIGlnbidyZWQgdGhlbUFuZCBJIGlnbm9yZWQgdGhlbS4gZG8gcmVhbGx5bWFrZSBnb29kIFRoZXkgd2VyZSB0ZG9pbmcgdGhlaXIgcGFydCBpbiB0aGlzIGJpZGFuY2UsIGFuZCBJIHdhc24ndCBkb2luZyBtaW5lc3R1cGlkbHlyZWFsbHkgaGVyZSwgaW4gbXkgb3duIGZpZWxkLCB0aGVpciB3b3JrIHdlbGwuSSBJSSB0aGluayB0aGUgaWRlYSB0aGF0IGV2ZXJ5b25lIGhhcyBzb21lIGhpZGRuZWVuIHRlYWxlbnQgaXMgdG9zaGEgYml0IG9mIC4gQnV0IEkgZG8gdGhpbmsgd2UgYWxsIEkgdGhpbmsgdGhlIGlkZWEgdGhhdCBldmVyeW9uZSBoYXMgc29tZSBoaWRkZW4gdGFsZW50IGlzIHRvc2guIEJ1dCBJIGRvIHRoaW5rIHdlIGFsbCBhbSBwcmV0eXR5IGdvb2QgYXRpbmdBbmQsLGltcHJvdmUgdGhlaXIgaGF2ZSBkaWZmZXJlbnQgcHJvY2xpdml0aWVzIGFuZCBpbnRlcmVzdHMuIFdlIGFsbCBoYXZlIGRpZmZlcmVudCBzb25ncyB0byBzaW5nRWFjaCBvZiB1cyBhaGFzIGEgc29uZyB0byBzaW5nIG92ZXIgdGhlIGNpdHkuIEEgVGhleSBmaWd1cmVkIG91dCB0aGUgc2VtbmF0aWNzc2VtYW50aWNzLCBudXQgdGJudXQgdHV0IHRoZSB5IEJ1dCBJIHdhcyB3cm9uZy4gSSBtaWdodCBub3QgYmUgYW55IGdvb2QgYXQgaW52ZW50aW5nIENSRFRzLCBidXQgSSBhbSBwcmV0dHkgZ29vZCBhdCBtYWtpbmcgY29kZSBydW4gZmFzdC4gQW5kIGhlcmUsIGluIG15IG93biBmaWVsZCwgSSAqZGlkbid0IGV2ZW4gdHJ5KiB0byBoZWxwIHRob3NlIGFjYWRlbWljcyBpbXByb3ZlIHRoZWlyIGltcGxlbWVudGF0aW9ucy4gVGhleSB3ZXJlIGRvaW5nIHRoZWlyIHBhcnQgaW4gdGhpcyBkYW5jZSwgYW5kIEkgd2Fzbid0IGRvaW5nIG1pbmUuIFRoZXkgZmlndXJlZCBvdXQgdGhlIHNlbWFudGljcywgYnV0IHRoZXlbXShodHRwczovL2hhbC5pbnJpYS5mci9pbnJpYS0wMDQzMjM2OC9kb2N1bWVudClbXShodHRwczovL2hhbC5pbnJpYS5mci9pbnJpYS0wMDQ0NTk3NS9kb2N1bWVudCkgMTIgeWVhcnMgYWdvc28gIHN0cmFnZXJhbmdlIChJcyB0aGF0IGEgbWFzaXNzaXZlIyMjIFN0cnVjdCBvZiBhcnJheXMgdnMgQXJyYXkgb2Ygc3RydWN0cwoKSSdtIGRvaW5nIGEgc2xpZ2h0IG9mIGhhbmQgaGVyZSAtIHQuIFRoaXMgaW1wbG1lZW1lbnRhdGlvbiBpc24ndGhhcyBhbm90aGVyIHNtYWxsIGNoYW5nZSAtIGFuZCBJJ20gbm90IHN1cmUgaWZJIGxpa2VpZiBJIGxpa2UgaXQuCgpJbiBqYXZhc2NyaXB0IHdlIGhhdmUgdGhpczoKCmBgYAp7IGl0ZW06ICdoZWxsbycsIGlzRGVsZXRlZDogZmFsc2UsIGlkOiBbJ3NlcGgnLCAwXSwgc2VxLCBwYXJlbnQ6IG51bGwgfSxkb2MgPSBqYXZhc2NyaXB0Lgpkb2MgPVt7IHsKICBjb250ZW50OiBbCiAgICAgICAgeyBpdGVtOiAnaGVsbG8nLCBpc0RlbGV0ZWQ6IGZhbHNlLCBpZDogWydzZXBoJywgMF0sIHNlcSwgcGFyZW50OiBudWxsIH0sCndvcmxkdHJ1ZW1pa2VbJ3NlcGgnLCAwXQogICAgLi4uCiAgICAgIF0KICB9CmBgYAoKSW4gcnVzdCBJJ20gZG9pbmcgdGhpczpkb2MgPSB7IGNvbnRlbnQ6IFsgICAgXSB9dGhlIGVxdWl2YWxlbnQgb2YgCgoKYGBgamF2YXNjcmlwdApkb2MgPSB7IGNvbnRlbnQ6IFsKICB7IGl0ZW06ICdoZWxsbycsIGlzRGVsZXRlZDogZmFsc2UsIGlkOiBbJ3NlcGgnLCAwXSwgc2VxLCBwYXJlbnQ6IG51bGwgfSwKICB7IGl0ZW06ICd3b3JsZCcsIGlzRGVsZXRlZDogdHJ1ZSwgaWQ6IFsnbWlrZScsIDBdLCBzZXEsIHBhcmVudDogWydzZXBoJywgMF0gfSwKICAgIC4uLgpdfQpgYGBsZW5ndGg6IDVsZW5ndGg6IC01CiAgLy8gTm8gc3RyaW5nIGNvbnRlbnQhCiAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAKICAsCiAgCiAgdGV4dENvbnRlbnQ6ICdoZWxsbycgLy8gQWN0dWFsbHkgaW4gYSByb3BlUm9wZSwgbm90IGEgc3RyaW5nLnIgc29tZXRoaW5nIGxtb3JlIGxpa2UKICBjbGllbnRzOiBbJ3NlcGgnLCAnbW1paWtlJ10sCiAgMDAxWy0xLCAtLCAwXSwgLTEgLy8gcm9vdCBpdGVtc1JhbmdlVHJlZSBSb3BlIHkgUm9wZSB7IH1CVHJlZVJhbmdlVHJlZXt9TlVMTG51bGxST09UCgogIF19LAogICAgLi4uCiAgICB7IGxlbmd0aDogLTUsIGlkOiBbMSwgMF0sIHNlcSwgcGFyZW50OiBbMCwgMF0gfSwKICAgIHsgbGVuZ3RoOiA1LCBpZDogWzAsIDBdLCBzZXEsIHBhcmVudDogUk9PVCB9LAogICAgLy8gTm8gc3RyaW5nIGNvbnRlbnQhICAgIAogIGl0ZW1zOiBSYW5nZVRyZWUge1sKICAsCiAgCiAgY2xpZW50czogWydzZXBoJywgJ21pa2UnXSwKICAKCgpUaGVyZSdzIGEgZmV3IHR3ZWFrcyBoZXJlLCBidXQgCk5vdGljZSB0aGUgdGV0eHRUaGVyZSdzIGEgYnVuY2ggb2Ygc21hbGwgdHdlYWtzIGhlcmUsIGJ1dCB0biBjb250ZW50PyBJdHMgIHB1bGxlZCBpdCBvdXQgaW50byBpdHMgb3duIHN0cnVjdHVyZS4gVGhlIGJlZW5uZWZpdCBUaGlzIGlzIGEgdHJhZGVvZmY6CgotIC1XZWxvbWNvbWUgdG8gYSBzZXBhcmF0ZSBkYXRhIHRoZSBsYW5kIG9mIHNFbmdpbmVlcmluZyBUTFtSb3BleV0oaHR0cHM6Ly9kb2NzLnJzL3JvcGV5LzEuMi4wL3JvcGV5LykoICAgKFtSb3BleV0oaHR0cHM6Ly9kb2NzLnJzL3JvcGV5LzEuMi4wL3JvcGV5LylVdXNpbmcgYSBsaXN0IHJ1c3QgbGlicmFyeSBjYWxsZSBkZCApLCB3aGljaCBpIHMgKmltcGxlbWVudHMgKmFub3RoZXIqIGItdHJlZSEgSGF2aW4gZyB0aGUgdGV4eHQgY29udGVudCBzZWxmIGNvbnRhaW5lZCBsaWtlIHRoaXMgbWVhbnMgdGhlIHJvcGV5IGNhbiBkbyB0ZXh0LXNwZWNpZmljIG9wdGltaXphdGlvbnNhbGxvd3MgIHRvLCBsaWtlIHBhY2tpbmcgYWxsIHRoZSBjaGFyYS4gU28gd2UgdXNlIGxlc3MgcmFtLgotIC1UaGUgYmlnZ2VzdCBhZHZhbnRhZ2UgaXMgd2UgdXNlIGEgbG90IGxlc3MgcmFtIHRoaXMgd2F5LiBVbmNvbWZvcnRhYmxlIEJ1dCBpbnNlcnRpbmcgaW50byBib3RoZWl3aXRoIGVjaGFjaCBpbnNlcnQgd2UnIG5lZWQgdG8gdXBkYXRlIDIgZGF0YSBzdHJ1Y3R1cmVzLiBSb3AgaW5zdGVhZCBvZiAxLCB3aGljaCBtYWtlcyBldmVyeXRoaW5nIG1vcmUgdGhhbmluIHRoaXMgY2FzZSAgIHR3aWNlIGFzIHNsb3cgYXMgaXQgY291bGQgYmUganVzdGVyCi0gLXdoYXQgSSBkaWQgd2l0aCB0aGUgaGVyZS4sIC4gUm9wZXkgaW1wbGVtZW50cyB0ICB0byBlZmZpY2llbnRseSBtYW5hZ2UgdGV4dCBpbnNlcnRzLiBUaGlzIGlzbid0IGEgbmV0IHdpbi5XZSBoYXZlIHVuZm9ydHVuYXRlbHkgYXJyaXZlZCBhdC4gQnV0aW4gcGFydGljdWxhciBPbmUgYmlnIGNsb3NlciB0byBPbmUgTm90ZXRoZSB0ZXh0LCBpbXBvcnRhbnRUbyBjb250ZW50IC4gQW5kIHRoZSBiaXQgZG91YmxlcyB0aGUgY29tcGlsZWRzaXplIG9mIHRoZSAgYmluYXJ5IC0gd2l0aCB3YXNtICwgd2hpY2ggbWF0dGVycyBvbiB0aGUgd2ViLiBUaGVidW5kbGUgZ29lcyBmcm9tIDYwa2IgdG8gMTIwa2IuaW5jcmVhc2VzIHdoZW4gd2UgZGVwZW5kIG9uIFJvcGV5LgotIEJ1dCBpdCBtYWtlcyBpdCB3YXkgYWZhc3RlciB0byByZWFkIG9mZiBJIGFsc28tIEl0IGFsc28gbWFrZXMgaXQgd2F5IGZhc3RlciB0byByZWFkIG9mZgpJbiBqYXZhc2NyaXB0IHdlIGhhdmUgdGhpczoKCmBgYGphdmFzY3JpcHQKZG9jID0geyBjb250ZW50OiBbCiAgeyBpdGVtOiAnaGVsbG8nLCBpc0RlbGV0ZWQ6IGZhbHNlLCBpZDogWydzZXBoJywgMF0sIHNlcSwgcGFyZW50OiBudWxsIH0sCiAgeyBpdGVtOiAnd29ybGQnLCBpc0RlbGV0ZWQ6IHRydWUsIGlkOiBbJ21pa2UnLCAwXSwgc2VxLCBwYXJlbnQ6IFsnc2VwaCcsIDBdIH0sCiAgICAuLi4KXX0KYGBgCmxpa2UgTm90aWNlIHRlaGUgZG9jdW1lbnQncyBpcyBoYXMgYmVlbiBwdWxsZWQuIEknbSBDUiBjYW5XIG11Y2ggd2hlbiBpbmcuIFRoaXNEZXBlbmRpbmcgb24gcm9wZXlvdXIgLSB3aGljaCBpc1JvcGV5ICB0aGUgZG9jdW1lbnQnc3wgKkpTIGJhc2VsaW5lKiAgICAgICAgICAgICAgICAgICAgIHwgMC42MXMgICAgICB8IDAuMSBNQiAgICB8ICoobm9uZSkqICAgICAgIHwKUm9wZXkgKHJ1c3QpMDI5fCBSdXN0IChDYWxsZWQgZnJvbSBKUyB2aWEgV0FTTSkgICAgfCAwLjIwcyAgICAgIHwgPz8/ICAgICAgIHwgQi1UcmVlICAgICAgICAgfAp8IFJ1c3QgKG5hdGl2ZSkgICAgICAgICAgICAgICAgICAgICB8IDAuMDY1cyAgICAgfCAyLjMgTUIgICAgfCBCLVRyZWUgICAgICAgICB8CjJvcj8uQ1JEVCBpbXBsZW1lbnRhdGlvbiAgYXQgdGhpcyBwb2ludCBhbmQKLSBTb21ldGltZXMgd2UgCgpJJ20gc3RpbGwgbm90IHN1cmUgSSdtIHN0aWxsIG5vdCBzdXJlIGlmIEkgbGlrZSB0aGlzIGNoYW5nZS53aGV0aGVyIEkgbGlrZSB0aGlzIGFwcHJvYWNoLiBJdCBhbHNvIGluY3JlYXNlcyB0aGUgc2l6ZSBvZiB0aGUuZG91Ymxlc1cKLSBXZSBzb21ldGltZXMgZG9uJ3QgbmVlZCB0aGUgdGV4dCBjb250ZW50IGF0IGFsbCAtIGxpa2Ugd2hlbk1vc3QgYXBwbGljYXRpb25zVGhlcmUncyBhIGJ1bmNoIG9mIHVzZSBjYXNlcyB3aGVyZSBkb253ZSBkb24ndCAtIFRoZXJlJ3MgYSBidW5jaCBvZiB1c2UgY2FzZXMgd2hlcmUgd2UgZG9uJ3QgZG9lc24ndCBsaXZlIGluIHRoZSBpdGVtc2xpc3Qgb2YgaXRlbXMgYW55bW9yZS4gTm93IGl0cyBpbiAgZm9yIHRoaXN3aGljaCBjYSBodHRwczovL2NyYXRlcy5pby9jcmF0ZXMvcm9wZXlldCB5ZXQgIGVmZmljaWVudGx5IHRoZSBkb2N1bWVudCdzIGNvbnRlbnQgKFJvcGV5IG9ubHkgdXNlcyAyMDBrYiBmb3IgdGhlIHRvIHN0b3JlIHRoZSB3aG9sZSBkb2N1bWVudCAtIGl0cyB3YXkgbW9yZSBlZmZpY2llbnQgdGhhbnRpZ2h0ZXIgdGhhbiBteSBjb2RlISlhcHBhcmVudGx5IHBhY2tpbmdieXRlIGxpa2UgdGhpcyBzb21lIGNhcmUgYWJvdXQgdGhlIGRvY3VtZW50J3MgY29udGVudHMuIGFueXdheUJ1dCBtPyBIb3djYW4gUnJDUkRUCigoV2h5IGlzIGl0IHNsb3dlcmRpcyBpdCBzbG93ZXJmYXN0ZXIgdG8gZG9uJ3QgV2VpcmQgLSAyOW1zICsgMjNtcyAhID0gNjVtcy4gSSB3b25kZXIgaWYgaXRzICBXZSdyZSBPaCBsb29rT2ggbG9vayAtIDI5bXMgKyAyM21zICE9IDY1bXMuIFdlJ3JlIG1ha2UgdGhlIGNvbXB1dGVyIGRvIGxlc3Mgd29yawoKQW5kIGp1c3QgdG8gIHByb2JhYmx5IGZpbGxJIEknbSBwcm9iYWJseSB0aHJhc2hpbmcgdGhlIGNQVSBjQ1BVJ3MgY2FjaGUgaW5zZXJ0aW5nIG9uZSBjaGFyYWN0ZXIgYXQgYSB0aW1lYnkgcHJvY2Vzc2luZyAgZWRpdCBJdCBsb29rSSBjYW4gc21lbGwgbW9yZWZhc3RlciBwZXJmb3JtYW5jZSBvcHBwb29ydHVuaXRpZXMgZm9yIGV2ZW4gbW9yZSBwZXJmb3JtYW5jZS5hIGJhdGNoX3VwZGF0ZSgpIG1ldGhvZHMgIHdpdGggZmFzdGVySXQgbG9va3MgbGlrZSBhd291bGQgaGF2ZSBldmVuSSBzbWVsbCBhICoqIGluIG15IGZ1dHVyZSB3aXRoICphbm90aGVyKiAyMHdoaWNoIGNhbiBwcm9jZXNzIHRoaXMgdHJhY2UgaW4gNTJtcwosIHJvcGUgYW5kIGFsbCwgLXR5V3JlYWxseSBuZWVkZWRzdXBlckNSRFRzIHN0YXJ0ZWQgdG8gZW1lcmdlLiB3ZXJlYSAgYSBiaWcgZGVhbCAtIGFuZCB0aGV5J3JlIG5vMXchc2VlbWRlZCBsaWtlbHlwcmV0dHkgdW5pdXNhYmxlIGZvciByZWFsIHdvcmxkIGVkaXRpbmcsLiBBIG1hZGUgYSAgbWFkZSBhIGJpZyBtaXN0YWtlIC0gSWFzc3VtZWRTIFRoZSByZWFzb24gYXQgdGhvc2UgbGFzdCB0aHJlZSByb3dzaXMgbGVzcyB0aGFuPCEgV2UncmUgcHJvYmFibHkgc2VlaW5nIHRUaGVyZSdzIEknbSBwcm9iYWJseSB0aHJhc2hpbmcgdGhlIENQVSBjYWNoZS4gd2J5IGJvdW5jaW5nIGJldHdlZW4gdGhvc2VzIHRoZXNlIHR3byBCLXRyZWVzanVzdCB0aGUgaXMgc0l0IHR1cm5zIG91dCAnbUknbSAgZG9uJ3Qga25vdyB3aG8nJ20gdGVyaWJyaWJsZSBhdCBhY2FkZW1pYyBwYXBlcnMsIGJ1dCBpKnVzZSBteSBza2lsbHMgYW5kICByZXNlYXJjaGVycyBvZiBpbnZlbnRpbmcgQ1JEVCBzZW1hbnRpY3MuIEJ1dCBPb3BzIUFuZCBJIGlmIEkgZGlkLCB3ZSBjb3VsZCBoYXZlIGZoYWQgZmFzdCwgd29ya2FibGUgQ0RSRFRzIGEgZGVjYWRlIGFnby4gbWlnaHR0ZSBmb3IgdGV4dCBlZGl0aW5nRm9yIHRoZSByZWNvcmQsICBkbyBhbGwgV2UgIERpZmZlcmVudCBkaGFybWFzLiBvdXIgb3duIGdpZnQgZm9yIHRoZSB3b3JsZCwgaWYgd2UgY2FuIGZpbmQgaXQKCkluc3RlYWQgb2YgYmVpbmcgZnJ1c3RyYXRlZCBhdCB0aGF0IHBhcGVyLCBJIHNob3VkbGQgbmhhdmVUIHdhcyBhIGNhbGwgdG8gYWR2ZW50dXJlIC4gVGhhdCB3YXMgdGhlIHdvcmxkIHNheWluZyAiWW91ciBza2lsbHMgYXJlIHJhcmUiVCB3YXMgc2F5aW5oZ3ZhbHVhYmxlLiBXIGFubmVlZGVkIGhlcmUuZmlndXJlIG91dCB0aHdoYXQgdGhhdCBpc0luIHRoaXMgc3Bpcml0LFRoYXRyZWFsbHkgSXQgd2FzICB0aGVIZSB5IHNlcGgsIFNXZSB3ZSBuZWVkIHlvdXIgaGVscCBvdmVyIGhlcmUuIFlvdSdyZSBob2xkaW5nIGEgcGllY2Ugb2YgdGhlIHB1enpsZXRoaXMgSW4gbXkgb3V5b3V0aG5mdWwgciBza2lsc2xzIGFyZSwgYW5kIHdlIGNhbid0IGdldCBpdCBvd3JraW5nd2lvcmtpbmcgd2l0aG91dCB5b3VhcnJvZ2FuY2UgSSBUaGF0IHBhcGVyIHdhcyByZWFsbHkgYSBjYWxsIHRvIGFkdmVudHVyZS4gSXQgd2FzIHRoZSB3b3JsZCBzYXlpbmcgd2FzIHNheWluZyAiSGV5IFNlcGgsIHdlIG5lZWQgeW91ciBoZWxwIG92ZXIgaGVyZS4gWW91ciBza2lsbHMgYXJlIGEgcGllY2Ugb2YgdGhpcyBwdXp6bGUsIGFuZCB3ZSBjYW4ndCBnZXQgaXQgd29ya2luZyB3aXRob3V0IHlvdS4iIEluIG15IHlvdXRoZnVsIGFycm9nYW5jZSBJIG1pZ2h0IGJlUDJQIGNvbGxhYm9yYXRpdmUgZWRpdGluZ0lUaGUgY2FtZSBrbm9ja2luZyBhdCBteSBkb29yLiBXIHRoaXMgdHVybmVkIGF3YXkuIC4gSSBkaSBJIGRpZG4ndCBlbnRlciB0aGUgZHJhZ29uJ3MgY2F2ZSwgYW5kIGRpZG4ndCBpdCB0b29rIG1lIGFub3RoZXIgZGVjYWRlcyB0byBmaW5kIHRoZSB0cmVhdHN1cmUgaW5zaWRlLgoKQnV0IHdlJ3ZlIGZvdW5kIGl0IG5vdy4gUDJQUmVhbHRpbWUgY29sbGFib3JhdGl2ZSBlZGl0aW5nRGVjZW50cmFsaXplZCByPyBXZSdyZSBjb21pbmcgZm9yIHlvdS4KCgojIEFwcGVuZGluZyBYQTogIEx5aW5nIHdpdGggYmVuY2htYXJrcwoKSSd2ZSBvZG5lIGFkb25lIGEgZmV3IGxnaWdsaXRocyBzbGlnaHRzIG9mIGhhbmRzVGhlcmUgYXJlIGEgYWJvdmUgdGhhdCBJIHdhbnQgdG8gYWRtaXQsIGp1c3RpZWZlIGFuZCBkZWZlbmRmY29uZmUnZmVzcyB1cCB0byAuCgoxLiBJJ0kndmUgd3JpdHRlbiB0aGlzIHBvc3QgYkkndmUgcGxheWVkIGZhc3QgYW5kIGxvb3NlIHdpdGggdHdvIENSRFQgYWxnb2lyc2VtYW50aWNzZGlyZWN0bHkgY29tcGFyaW5nIGltcGxlbWVudGF0aW9ucyB3aGljaCB1c2UgZGlmZmVyZW50IDogWVJHQSAoYXV0b21lcmdlKSBhbmQgWUFSVEFUQSAoeWpzICsgbXkgcnVzdCBjb2RlKS4gVGhpcyBpTXkgY2xhaW0gSSdtIG1ha2luZyBhIG4gYXNzdW1wdGlvbiB3aXRoIG51bWJlcnMsaW1wbGVtZW50YXRpb250aGUgIHRoYXQgYm90aCBhbGdvcml0aG1zIGFyZSB0aGUgaW1wbGVtZW50YXRpb24gc3BlZWQgaXMgaWRlbnRpY2FsIC0gYmVjYXVzZSBpbiBteSByZWZlcmVuY2UgQ1JEVCBpbXBsZW1lbnRhdGlvbiAsIGl0IGlzLiBBW11dKGh0dHBzOi8vZ2l0aHViLmNvbS9qb3NlcGhnL3JlZmVyZW5jZS1jcmR0cylXaXRoIGEgdGhpcyBlZGl0aW5nIHRyYWNlLCAndmUgd3JpdHRlbiB0aEknbSBjb21wZGlyZWN0bHkgY29tcGFyaW5nIHRoZSBwZXJmb3JtYW5jZSBvZiBpbXBsZW1lbnRhdGlvbnMgaW1vZlRocm91Z2ggdGhpcyBwb3N0ICBpbnRlcmNoYW5nYWJseWUgVGhpcyBvbmx5IG1ha2VzIHNlbnNlIGlmIHRoZSBhbGdvcml0aG1zIGFyZSBpbnRlcm5jaGFuZ2FibGVlVGhpcyByZXN0cyBvbiB0aGUgYXNzdW1wdGlvbiB0aGF0IGJvdGggYWxnb3JpdGhtcyBydW4ganVzdCBhcyBmYXN0IGFzIGVhY2ggb3RoZXIuIFlBVEEgV2hlbiB0aGVyZSBhcmUgbm8gY29uY3VycmVudCBlZGl0cywgYWxsIENSRFRsaXN0IHMgYXRoZXNlbWFudGljcyB0aGUgIGFyZSBpbnRlcmNoYW5nYWJsZWUsIGFuZCB0aGUgcGVyZm9ybWFuY2VpZiB5b3Ugc3dhcCBzZW1hbnRpY3MsIHRoZSBwZXJmb21yYXJtYW5jZSB3b24ndCBjaGFuZ2UuSSd2ZSBkZW1vbnN0cmF0ZWQgdGhpcyBpbnRlcmNoYW5nYWJpbGl0eSBpbiBteSBwcm9wZXJ0eSBUaGlzIGlzIGFjdHVhbGx5IGEgYm9sZCBsY2xhaW0gLSB3aGljaCAuIEFuZCBZb3UgSSBiZWxpZXZlIHlvdSBjb3VsZCB1c2UgdGhlIHNhbWUgYXBwcm9hY2ggdG8gbW9kaWZ5IHlqcyB0byBpbXBlbWVudGltcGxlbWVudCBSR0Egc2VtYW50aWNzIC0geW91J2QganVzdCBoYXZlIHRvIGNoYW5nZSdtIGNvbnZpbmNlZCB5anMncyAqaW50ZWdyYXRlKiBtZXRob2QsIGFuZCBzdG9yZSAqbWFzZXEqIGlzbnRlYWQgb2ZpbnN0ZWFkIG9mICpvcmlnaW5SaWdodCogaW4gKkl0ZW0qIGFuZCBzdG9yZSAqbWF4U2VxKiBhbmQgdXBkYXRlIGluIHRoZSBkb2N1bWVudC4gVGhpcyBUaGVZIGlmIHlvdSB3YW50ZWQuWSB0byBlYWNoLCBhbmQgaGNoYW5nZSB0aGUgYmluYXJ5IGVuY29kaW5nIGZvcm1hdEkgdGFsa2VkIHRvIEtldmluIGFib3V0IHRoaXMgYW5kIGhlIGRvZXNuJ3Qgc2VlIHRhbnkgcG9pbnQuLCB3aGlsZSBjb29sLCAgaW4gdGhlICBvZiBtYWtpbmdhZGRpbm1ha2luZyB5anMgY29tcGF0aWJsZWFueSB0IGFodCB0aGF0IChhdCBsZWFzdCBmb3Igc2luZ2xlIHVzZXIgZWRpdGluZyB0cmFjZXMpIGtpbiBub3ZlbnZlbC4gdGhhdCB0aGlzIGlzIHRydWUsIHdoaWNoIGhhcyBpZGVudGljYWwgcGVyZm9ybWFuY2UgZm9yIHlqcyBhbmQgYXV0b21lcmdld2hlbiB1c2luZyBvciBhc2VtYW50aWNzQW5kIEkgdGhpbmsgeSdtIGNvbmZpZGVudCB5CgojIyMgWWpzID09PUFyZSB0aGVzZSBDUkRUcyBhY3R1bGxhbGx5IHRoZSBzYW1lPy4KCiBiYXNjYWlpaWNhbGx5IHRoZSBzYW1lIGJpZyBib2xkLCFhIG5ldyBpZGVhIHRoYSBhbmQgSSB0aGluayBJIHRoYXQgSSB0aGluayBJIG5vdmVsIGlkZWEgdGhhdCBub2JvZHkgSSB0aGluayBoYXMgZGlzY292ZXJlZCBiZWZvcmUuCgpwcm9wZXIgcHJvcGVydHkgZWl0aGVyJ3M6CgotQ1kgKG9yIG1ha2UgYW4gYWx0ZXJuYXRpdmUgd2l0aCBhdGF1dG8pIHdoaWNoIHVzZWQgc2xpZ2h0bHkgZGlmZmVyZW50IGxvZ2ljIGZvciBjb25jdXJyZW50IGVkaXRzCi0gUwotIFMsIGFuZCBrZWVwIGl0IHVwIHRvIGRvYWF0ZQotIEN5anMncyAKCiAgaW4gYWRkaW5nIHRoaXMgaGluZ2UgaW50byBoaXMgbGlicmFyeQoKRm9yIG15IHJ1c3QgY29kZSwgSSBwcm9iYWJseSB3aWxsIGF0IHNvbWUgcG9pbnQgYWRkIGEgbWFrZSBteSBDUkRUIGltcGxlbWVudGF0aW9uIGhhYWNjZWNwdCBhZXB0IGEgdHlwZSBwYXJhbWV0ZXIgd2hpY2ggc3dpdGNoZXMgYmV0d2VlbiB5anMgYW5kIGF1dG9tZXJnZSBzZW1hbnRpY3MuSGFuZyBvbiAtIEFhcmUgdGhlc2UKCiMjIyAjIyMKCiMgQXBwZW5kaW5neAoKIyBXaCMjQXBwZW5kaW5nIEE6IE1vcmUgaW5mb3JtYXRpb24gb24gbXkgV2hhdCBpZiBJIHdhbnQgdG8gdXNlVGhhdHMgY29vV2hhdCBub3c/IEkgd2FudCB0byB1c2UgYSBDUkRUIGZvciBteSBhcHBsaWNhdGlvbi4gV2hhdCBzaG91bGQgSSBkbz8KClVzZSB5anMuIFlqcyBoYXMgZXhjZWxsZW50IHBlcmZvcm1hbmNlSWYgeW91J3JlIGJ1aWxkaW5nIGFuIGFwcGxpY2F0aW9uIHRvZGF5IHlvdSBzaG91bGQgdSwgbG93IG1lbW9yeSB1c2FnZSwgZ3JlYXQgc3VwcG9ydCAoKyBwYWlkIHN1cHBvcnQgaWYgb3Ugd2FudHlvdSBuZWVkIGFuZC4gS2V2aW4gWW91IGNhbiBhbHNvIGdldGlmIHlvdSBuZWVkIGl0YmVjb21lIGEgc3BvbnNvciBvZiB5anMgdGlmIHlvdSB3YW50IC0gd2hpY2ggZyhpZiBLZXZpbiBoYXMgdGltZSkgd2lsbFlvdSBJZiB5b3UgaGF2ZSBtb25leXdhbnQgaGVscCBpbWVwbG1wbGVtZW50aW5nIHlqcyBpbiB5b3VyIGFwcGxpY2F0aW9uLCBLZXZpbiAgYWNvZG9jdW1lbnQgYmFzZWQgY29sbGFib3JhdGl2ZSwgYW5kIHlvdSB3YW50IHRpIHR0byBkbyBpdCBvbiB0b3Agb2YgQ1JEVHNtaWdodCBiZSBhYmxlIHRvICBnZXQgaW4gY29udGVhY3Qgd2l0aCBLZXZpbiBKYWhuc3lqcyAgYWNjZXB0cyBzb21lIHBhaWQgd29yayBpbiBleGNoYW5nZSBmb3Igc28ga2VoZSBjYW4gd29yayBvbiB5anMgZnVsIGwgdGltZS50byBmdW5kIHdvcmtpbmcgKGFuZCBhZGphY2VudCBwd29yaykKCk15IHJ1c3QgY29kZSBpcyByZWFsbHkgZmFzdCwgYnV0IGl0IG1wcm9iYWJseXdpbGwgIG5ldmVyIHR1cm4gaW50byBhIHJlbGlhYmxldXNlZnVsIHJnZW5lcmFsIHB1cnBvc2UgQ1JEVCBsaWJyYXJ5LiBJIHNpbXBseSBkb24ndCBoYXZlVGhlcmUncyAxMDAgb3RoZXIgdGhpbmdzIHRoYXQgVG8gYmUgY29tcGF0aWJsZSBhYmxlIHRvIGNvbXBldGUgd2l0aCB5anMgdGhlcmUgYXJlIG9uIGZ1bmN0aW9uYWxpdHkgdGhlcmUgYXJlIDEwMCBvdGhlciB0aGluZ3MgIGl0IGl0IG5lZWRzIHRvIGRvIHdlbGwuICdzLCBpbmNsdWRpbmcgYmluYXJ5IGVuY29kaW5nIGFuZCAsIG5ldHdvcmsgcHJvdG9jb2xzLCBzdXBwb3J0IGZvciBub24tbGlzdCBzdHJ1Y3R1cmVzLCBwcmVzZW5jZSAoY3Vyb3Nzb3IgcG9zaXRpb25zKSBhbmQgc28gb24uIGxpa2UgeWpzLAoKSWYgeW91IHdhbnQgZGF0YWJhc2UgbGlrZSBzZW1hbnRpY3MgZm9yIHJlYWx0aW1lIGVkaXRpbmcsIHlvdSBuYWNhbm5vYm9keSBoYXMgbWRvbmUgdGhpcyB3ZWxsIHlldC5hcyBmYXIgYXMgSSBrbm93IG9uIHRvcCBvZiBDUkRUcyB5ZXQuIFlvdSBjYW4gdXNlIFNoYXJlZERCbXkgICh3aGljaCBJIHdyb3RlIHllc3JhcnMgYWdvLCBhbmQgaGFzIGJlZW4gY29udGludWFsbHkgaW1wcm92ZWQgYnkgYW4gYXJteSBvYyBmIGNvbnRyaWJ1dG9ycyBzaW5jZSB0aGVuKS4gIEknbSBleGNpdGVkIGZvciBSZWR3b29yZC5bXShodHRwczovL2dpdGh1Yi5jb20vc2hhcmUvc2hhcmVkYi8pLiBzaGFyZGVkYiAgTG9va2luZyBmb3J3YXJkLCBbXShodHRwczovL2dpdGh1Yi5jb20vcmVkd29vZC9yZWR3b29kKQoKSWYgeW91IHdhbnQgUDJQIHN1cHBvcnQgIC0gd2hpY2ggcHJvbWlzZXMgaXMgaW1wbGhhcyBwbGFubmVkIGZ1bGwgQ1JEVCBzdXBwb3J0LnVzZXMgc3VwcG9ydHMgcDJwIGVkaXRpbmcgYW5kIFAyUCAjIyNzdXBwb3J0c29tZXRpbWVzIGFjY2VwdHMgbW9uZXkgaW4gZXhjaGFubmdlIGZvciBoZWxwIGludGVncmF0ZWluZyB5anMgaW50byB2YXJpb3VzIGFwcGxpY2F0aW9ucy4gSGUgdXNlc3MgdCAgdGhpcyB0byB3b3JraW5nIG9uIGxvdCBzIG9mICBUaGlzIGlzIHRoZSB3cm9uZyBiZW5jaG1hcmttZWFzdXJlIG9mIHBlcmZvcm1hbmNlCgpZZXMsIEkgYWdyZWUuCgpUaGUgVGhlIGtub3cgYW5kIElBY2NlcHRpbmcgaW5jb21pbmcgY2hhbmdlcyBmcm9tIHRoZSB1c2VybyBvbmx5IG5lZWRzIHRvIGhhcHBlbiBmYXN0IGVub3VnaCAqKi4gRmluZ2VycyBzaW1wbHkgZG9uJ3QgdHlwZSB2ZXJ5IGZhc3QgLSBzbyBvbmNlIGEgY1JDUkRUIGdldHMgY2FuIGhhbmRsZSBhbnkgdXNlciBlZGl0IGluIGxvY2FsIHVuZGVyIDFtcywgZ29pbmcgZmFzdGVyIHByb2JhYmx5IGRvZXNuJ3QgbWF0dGUuci4KClRoZSBpbXBvcnRhbnQgbWV0cmljcyBhcmU6bW9yZSAKCi0gSG93IGxvbmcgdGhlIGRvY3VtZW50IHRha2VzIHRvIGxvYWQgZnJvbSBkaXNrCi0gLSBzYXZlIGFuZCBIb3dtIG11Y2ggc3BhZWNlIHRoZSBkb2l0IHRha2VzIHRvIHNlbmQgYW5kIHJldmNlaXZlIHRoZSBkb2N1bWVudG1hbnkgYnl0ZXMgYSBkb2N1bWVudCB0YWtlcyBvdmVyIHRoZSB3b2lyZW5ldHdvcmt0byBlbnNlbmQgc3RvcmUgb3Igc2VuZCAKCldlSSdtIGFsc28gQWxsIG9mIHRoZXNlIFRoZSBlZGl0aW5nIHRyYWNlIEknbSB1c2luZyBoZXJlIGFsc28gb25seSBoYXMgYSBzaW5nbGUgdXNlciBtYWtpbmcgZWRpdHMgLSAuIFRoZXJlIG1pZ2h0IGNvdWxkIGJlIHBhdGhvbG9naWNhbCBjYXNlcyBsdXJraW5nIGluIHRoZSBzaGFkb3dzcGVyZm9ybWFuY2UgIHdoZW4gY29uY3VycmVudCBlZGl0cyBoYXBwZW4gaGVyZS4gYWN0dWFsbHl1c2VycyBtYWtlIC4gQTogQXBwZW5kaW5nIEI6IFlvdXIgYmVuY2htYXJrcyBhcmUgd3Jvbmd3ZWlyZCAvICAvIG1pc2xlYWRpbmdUaGVzZUlEb2luZyB0aGlzIGZvciBZQVRBIGFuZCBSR0EgIGJldHdlZW4gQ1JEVCBjYW4gd2l0aG91dCBjaGFuZ2VpbmcgeW91ciBpbXBsZW1lbnRhdGlvbiwgb3IgeW91ciBpbXBsZW1lbnRhdGlvbiBwZXJmb3JtYW5jZW5sb29rZWQgYXQgZmVlbCBjb25maWRlbnQgaW4gdGhpcyBjbGFpbSBiZWNhdXNlIEkoYW5kIGFuIGkgYWxtb3N0LWlkZW50aWNhbCBjb2RlcGF0aCkgIFRoZXJlIG1pZ2h0IGJlIHNvbWUgcGVyZm9ybWFuY2UgY2hhbmdkaWZmZXJlbmNlcyB3aXRoIGNvbmZsaWN0LWhlYXZ5IGVkaXRpbmcgdHJhY2VzIC0gYnV0IHRoYXRzIGV4dHJlbWVseSByYXJlIGluIHJhcHJhY3RpY2UuCgogYWxzbywgd2l0aG91dCBjaGFuZ2luZyB5anMncyBwZWZyZm9ybWFuY2UgcmVzdWx0aW5nSSBrbm93IGhvdyB5b3UnZCBkbyBpdCwgdG9vIGhlIGEuV1JHQSBzdXBwb3J0IGludG8gSSBzb3J0IG9mICAgSXRzIGEgbG90IG9mIENoYW5naW5nIHRoZSBiaW5hcnkgZm9ybWF0IGluIHBhcnRpY3VsYXIgaXMgYSBsb3Qgb2Ygd29yayAtIGFuZCB0aGVyZSwgYW5kICBJdHMgbm90IGEgZmVhdHVyZSBhbnlvYmJvZHkgYWN0dWFsbHkgYXNrcyBmb3IuClllcywgSSBrbm93IGFuZCBJIGFncmVlLiBUaGlzIHBvc3Qgb25seSBtZWFzdXJlIHMgdGhlIHRpbWUgdG9hYWtlbiB0byByZXBsYWN5IGFuIGEgbG9jYWwgZWRpdGluZyB0cmFjZS4gVGhlcmUncyBsb3Qgb3NhbmQgbWVtb3J5ICwgYW5kIHRoZSByZXN1bHRpbmcgUkFNIHVzYWdlIG9mIG1vIEJ1dCBhcmd1YWJseSwgYSgqKkJUaGUgKmFjdHVhbGx5IGltcG9ydGFudCoKCkkgZGlkIGl0IHRoaXMgd2F5IGJlY2FzdWUgYm90aCBiZWNhdXNlIG15IHJlZmVyZW5jZS1jcmR0czoKCi0gWWpzIGFuZCBhdXRvbWVyZ2UgYm90aCBpbXBsZWVtdG5UaGUgeWxpYnJhcmllcyBpbXBsZW1lbnQgdmVyeSBmYXN0Y29tcGFjdCBiaW5hcnkgcmVwcmVzZW50YXRpb25zYm90aCAuIFRoQW4gZXhpc3RlbmNlIHByb29mIGlzIGVub3VnaCBmb3IgbWUgaCAtIEkgdGhpbmsgeW91IGNvdWxkIHBvcnQgdGhvc2UgYmluYXJ5IHBhY2tpbmcgZm9ybWF0cyB0byBhbnkgaW5tbXBsZW1lbnRhdGlvbgotIE15IHJlSSBkb24ndCAgSSBkb24ndCBoYXZlIGEgYmluYXJ5aGF2ZW4ndCBpbXBsZW1lbnRlZCBmb3JtYXQgaW4gbXkgcmVmZXJlbmNlLWNyZHRzIG9yIHJ1c3RpbXBsZW1lbnRhdGlvbiAgbXkgY29kZS4KIEkgdGhpbmsgaXQgd291bGQgYmUgcm91Z2hseSB0aGUgcGVyZm9ybWFuY2UgSWYgSSBkaWRuLCBJJ2QgY29weSB5anMgJiBhdXRvbWVyZ2UncyBiaW5hcnkgZm9ybWF0cyAodGhleSdyZSBleHRyZW1lbHkgY29tcGFjdClwcm9iYWJseSAgLSBzbyBzaXplIHdvdWxkIGJlIGlkZW50aWNhbC4gQW5kIEkgdGhpbmtpbiBwcm9wb3J0aW9uYWwgd3RvIHRoZSB0aW1lIHRha2VuIHRvIHByb2Nlc3MgdGhpcyBlZGl0aW5nIHRyYWNlIC0gZWRpdGluZyB0cmFjZXMuCgogQnV0IEkndmUgYmVlbiB3cm9uZyBiZWZvcmUgd3JvdGUgdGhhdCBjb2RlaXQgd291bGRJJ2QgZGlkIGJlY2F1c2UgdGhleSdyZSBzby5TIEkgZXhwZWN0dGhlIHJlc3VsdGluZyAgYmV0d2VlbiBhbGwgb2YgdGhlc2UgaW1wbGVtZW50YXRpb25zIHN1c3BlY3QgKGNsYWltKWZvciBsb2FkaW5nIGFuZCBzYXZpbmcgIHByZXR0eSBzaW1pbGFyIHRvIHRoZSBQcm9iYWIgUHJvYmFibHkgYSBiaXQgZmFzdGVyIGViZWNhdXNlIHlvdSBvbmx5IGhhdmUgdG8gcHJvdGhlIGluIHRoaXMgZm9ybWF0IHRoZSBkb2N1bWVudCBpcyBhbHJlYWQgc3R5IHN0b3JlZCBpbiBvcmRlci4uCgpJIFRoZXJlJ3MgYSBmZXcgc21hbGwgZGlmZmVyZW5jZXNhYm91dCAgIAoKSXQgaXMgcmVhbGx5IGZ1biB0aG91Z2guIGlzIG9uZSBkaWZmZXJlbmNlIHdoaWNoIG1pZ2h0IG1hdHRlciAtIHlqcydzIGJpbmFyeSBmb3JtYXQgZG9lcyBydW4tbGVuZ3RoIGVuY29kaW5nIG9mIHRoZSAgcGFja2FzIHRoaW5mb3JtYXRpb24gYWJvdXQgZGVsZXRlZCBlbGVlbW50cyBlbGVtZW50c2FuZCBhdXRvbWVyZ2UgdHJlYXQgZGVsZWluZm9ybWF0b2luIGFiaW5mb3JtYXRpb24gYWJvdXQgZGVsZXRlZCBpdGVtcyBsc2xpZ2h0bHkgZGlmZmVyZW50bHQueS4gIChZc2hzanMgcGFja3NSTEUtZXJ1bi1lbGxlbmd0aC1lbmNvZGVzIHRoZW0gYW5kIHBhY2thcyB0aGF0IGluZm9ybWF0aW9uIGludG8gdGhlIHZlcnNpb24gc3RydWN0dXJlLiAuIEF1dG9tZXJnZSBwdXQgYXMgdGhhdCBpbnRvIHRoZSBvcGVyYXRpb24gbG9nKWRlbGV0ZXMgLiBUaGlzIHByb2JhYmx5IGhhcyBzb21lIHJlYWwtd29ybGQgaW1wbGljYXRpb25zIGluIHRlcm1zIHBmIG9mIGltcGxlbWVudGF0aW9uLCBidXQgd2hhdGV2ZXIgSSdtdXVjY2ggdGltZQotIEhvdyBtdWNoIHRpbWUgdGhlIGRvY3VtZW50IHRha2VzIHRvIHNhdmUgYW5kIGxvYWQgZnJvbSBkaXNrb24gZGlzayBvciwgYmVjYXVzZSBmb3IgYXV0b21lcmdlIHlvdSBuZWVkIHRvIHN0b3JlICp3aGVuKiBlYWNoIGRlbGV0ZSBoYXBwZW5lZC4gTm90IGp1c3QgaSppZiogdGhlIGl0ZW0gaGFzIGJlZW4gZGVsZXRlZC4gKAoKVGhlcmUnCi0gVFRoZSB0aW1lIHRha2VuIFRoZSB0aW1lIHRha2VuIHRvIHVwZGF0ZSBhIGRvY3VlbW5tZW50IGF0IHJlc3QgKGFzc3VtaW5nIGEgZG9jdW1lbnQgaXMgaW5mcmVxdWVudGx5IGVkaXRpbmdlZCBhbmQgbGl2aW5nICAoIChtb3JlIGJlbG93KQoKVGhlIHF1ZXN0aW9uIG5vYm9keSBpbiB0aGUgY29tbXVuaXR5IHNlZW1zIHRvIGJlIHRoaW5raW5nIGFib3V0IGlzIHVwZGFpbnRndGluZyBhIGRvY3VtZW50IGF0IHJlc3QuIElmIEkgaGF2ZSBhIENSRFQgbGlzdCBzdG9yZWQgaW4gUHBvc3RncmVzLCBhbmQgaXRzIHZlcnkgaW5mcmVxdWVudGx5IHdyd3JpdHRlbiB0byBpbmZyZXF1ZW50bHksIGF5anMgYW5kIGF1dG9tZXJnZSBzZWVtIHRvIGFzc3VtZSB0aGUgcmlhcmUgd3JpdHRlbiB0byBhc3N1bWluZyB5b3Ugd2FuIHQgdHQgdG86CgoxLiBMb2FkIHRoZSBkb2N1ZW1ubWVudCBpbnRvIFJBTQoyLiBNYWtlIHlvdXIgY2hhbmdlCjMuIFNhdmUgdGhldyAgMy4gU2F2ZSB0aGV3aG9sZSAgd2hvbGUgZG9jdW1lbnQgYmFjayB0byBkaXNrIGFnYWluCgpUaGlzV2UgZG8gdGhpcyBmb3IgVGhpcyBpcyBhY3R1YWxseSByZWFsbHkgaW5lZmZpY2llbnQKLS0tCllvdXJjb3VwbGUgb2ZleHRyZW1lbHksIG5hbmQgaXQgbWF0dGVyIHMgZm9yIHNvbWUgIHJlYWxsIGFwcGxpY2F0aW9ucyAoIGlmIHdlIHdpbGwgIGlmIHdlIHdhbnQgQ1JEVHMgdG8gYmUgYW55dGhpbmd1dW1vdXNlZnVsIG91dHNpZGUgdGhlIGNvbnRleHQgb2YgdGV4dCBlZGl0aW5nLihsaWtlIG1lKSB5b3VzJ3JlIGhvcGluZyB3ZSBhZGQgY29sbGFib3JhdGl2ZSBlZGl0aW5nIHRvIG1vcmUgYXBwbGljYXRvaW5zIHRoYWEuIEVzcGUuIEVzcGVjaWFsbHkgaWYgd2FsbCB0aGUgdGhlIDk5JSBvZiBhcHBsaWNhdGlvbnMgYW91dCB0aGVyZSB3aGljaCBhcmVuJ3QgY29sbGFib3JhdGl2ZSB0ZXh0IGVkaXRpb3RvcnMuIG1pZ2h0IHdhbnQgY29uY3VycmVudHRvIHN1cHBvcnQgIGVkaXRpbmcsIGJ1dAoKQXMgZmFyIGFzIEkga25vdywgbm9ib2R5IGlzIHRoaW5raW5nIGFib3V0IHRoaXMgcHJvYmxlbSBhdCB0aGUgbW9tZW50LgoKSSdtIEknbQoKLS0tCiBhbHNvIG5vdCBsb29raW5nIGludG8gcHJ1bmluZy4gQ1JEVHMgbGlrZSB0aGlzIGdyb3cgdW92ZXIgdGltZSAoc2luY2Ugd2Uga2VlcCB0b21zYnN0b25lcyBmcm9tIGFsbCBkZWxldGVkIGl0ZW1zKS4gVGhpcyBpVGhlcmUgYXJlIHNvbWUgVFdlIGRvbid0IGFjdHVhbGx5IG5lZWRZb3UgZG9uJ3QgVGhlcmUgYXJlIHNvbWUgYWxnb3JpdGhtcyBmcm9yIGZpeGluZyB0aGlzICwgYW5kIHRyaW1taW5nIGRvd24gdGhlIGRvY3VtZW50IHNpemUgZnJvbSB0aW1lIHRvIHRpbWUuIEJ1dCBhVGhpcyBjYW4gYmUgZml4ZWQsIGJ1dCBmaXhpbmcgdGhpcyBpcyBvcnRob2dvbmFsIHRvIG8uIGl0cyB0aGVzZSBmaXhlcyAoZWcgWWpzJ3MgR0MgYWxnb3JpdGhtIG9yICwgb3IgQW50aW1hdHRlcikuQlRvYXJlIHRvIHdoYXQgSSdtIGRvaW5nIGFib3ZlYXRoaW5ncyBzaG91bGQgd29yayB3aXRoIGFueSBvZiB0aGUgYXBwcm9hY2hlcyBJJ3ZlIGxpc3RlZCAKIyMjIEFwcGVuZGlneCBDOiBIb2x5IGNvdywgYXV0b21lcmdlIGlzIHJlYWxseSBzbG93IQpJIGtub3chISBUYWtlIGEgbG9vb2sgayBhdCBJeWQgdHMgcmVhbGx5IGp1c3Rub3QgZXZlbiB0cnlpbmcgdG8gYmUgZmFzdC4gTG9vayBhdCB0aGlzIGNvZGU6CiBlcmVhbGx5JydzIGphdmFzY3JpcHQgYwpUQnV0IHRoaXMgY29kZSBpcyBhbGwgZ29pbmcgdG9iZSByZSBiZSByZXBsYWNlZCBieSBbYXV0b21lcmdlLXJzXShodHRwczovL2dpdGh1Yi5jb20vYXV0b21lcmdlL2F1dG9tZXJnZS1ycyksIHdoZW5ldmVyZW5ldmVyIHRoYXQgZmluYWxseSBsYW5kcy4gKE1heWJlIHRoaXMgd2Vla0l0cyBiZWVuICJyZWFsIHNvbm9uIG5vdyIgZm9yIG1vbnRocy4gTWF5YmUgaXRzIGxhbmRlZCBpIGluIHByYWN0aWNlIGNhbGxzIFdBU00gY2FsbHMgdGhyb3VnaCB0byBieSB0aGUgdGltZSB5b3UncmUgcmVhZGluZyB0aGlzISBIb3cgZmFzdCBpcyBhdWRvZXMgYXV0b21lcmdlLXJzIGNvbXBhcmU/IEdvb2QgdWVxdWVzdGlvbiAtIEknZCBsb21heWJlIEknZCBsb3ZlIHRvIGtub3cgdG9vLiBSdW4hCgoKISAjIEF1dG9tTWFraW5nIENSRFRzIGdvIEJSUlIgQlJSUjogSW1wcm92aW5nIHBlcmZvcm1hbmNlIGJ5dCAgNDAwMHhJdHNJIHRvb2sgaW5nSVtdKGh0dHBzOi8vaW1tdXRhYmxlLWpzLmdpdGh1Yi5pby8panVzdCB3aGVuIHlvdSBjYW4gaXQnYmVmb3JlaW5nYW5kIHRoZW4gaW5nYmVmb3JlIHJld3JpdGluZ3doZW4geXVvJ3JlIGF5b3UncmUgYWJvdXQgdG8gdGhyb3cgaXQgYXdheSBpbiBhIHJld3JpdGUgYXMgZmEgaXMgYW5vdGhlciAoY29tcGV0aW5nKSBDUkRUIGFsZ29yaXRobSBuIG9uIGdpdGh1YmltcGxlbWVudGF0aW9uICBtYWRlIGJ5IEpIS2V2aW4gSmFobnMuIEtlQUFuZCBpdHMgcmVhbGx5IGZhc3QsIHdlbGwgZG91Y3VtZW50ZWQgYW5kIHdlbGwgbWFkZS4gWWpzcmVhbGx5cmVhbGx5cHJldHR5CgpCdXQgd2l0aCB0aGlzIGxzIG1vcmUgY29tcGxpY2F0ZWQgKD8pIHRoZXJlLCBzcGxpY2luZyBpbnRvIHRoZSBhcnJheSAtIGhvdyBkbyB5b3UgZmlndXJlIG91dCB3aGVyZSB0aGUgbmV3IGl0ZW0gc2hvdWxkIGdvPyBCdXQgaXQgcyBvbmx5IGNvbXBsaWNhdGVkIGxpa2UgKm1hdGgqLiBUaGUgbG9naWMgZm9yIG9yZGVyaW5nIGVuZHMgdXAgYmVpbmcgMmwganVzdCBhIGZldyBpZiBzdGF0ZW1lbnRzLiAtIHRoZSBvbmNlIHlvdSBmaXMgY29tcGxpY2F0ZS5kLkl0cyBoYXJkIHRvIHVuZGVyc3RhbmQsIGJ1dCB3aGVuIHlvdSBkbywgeW91ICBpZiB5b3UncmUgaW50ZXJlc3RlZEkgbWFkZSBhIGEgd2hpdmhjaCBzaWRlLWJ5LXNpZGVkRm9yIFlvdSBjYW4gKG1vc3RseSkgc3dhcCBpbWxlcGxlbWVudGF0aW9ucyB5YnkganVzdCBjaGFuZ2luZyB5b3VyIGludGVpbnNlcnRpb24gZnVuY3Rpb24uc2FwcHdhcHBpbmcgb3V0IHlvdXIgaW5zZXJ0aW9uIGRvZXNJLCBpdHMgcmVhbGx5IGZhc3RTbyBpICAoVE0pYmV0dGVyICBUaGlzIGFwcHJvYWNoIGlzIGJldHRlciBmb3IgbG90cyBvZiByZWFzb25zIDoKYmVhdXRpZnVsICBXZSBpbXBsZW1lbnQgYSBsaXN0IENSRFQgd2l0aCBhIGxpc3QuIEdlbml1cyFiZXR0ZXIgIFRoaXMgYXBwcm9hY2ggaXMgYmV0dGVyIGZvciBsb3RzIG9mIHJlYXNvbnMgOgogV2UgaW1wbGVtZW50IGEgbGlzdCBDUkRUIHdpdGggYSBsaXN0LiBHZW5pdXMhCiBXZSBpbXBsZW1lbnQgYSBsaXN0IENSRFQgd2l0aCBhIGxpc3QuIEdlbml1cyFXSW4gc2hvcnQKbGlrZXlvdSBjYW4gZG8gdGhlIHdob2VsIGxlIHRoaW5nIGluIGFib3V0ICBXZSBpbXBsZW1lbnQgYSBsaXN0IENSRFQgd2l0aCBhIGxpc3QuIEdlbml1cyEncmVpbmcgLSB3LiBNb3ZpbmcgdGhlIGZyb250ZWlyLCB3aGljaCBpcyB0aGUga2luZCBvZiBpZGVhIHRoYXQgbWFrZXMgeW91IC4gVGhlc2UgaWRhZUlkZWFzIHdoaWNoIGRvIHRoaXMgYXJlIGdvbGRlbi50cnVseSAgcmFyZSBhbmQgdHJ1bHkKCkknIEksIGlmIHlvdSB3YW50IHRvLiBtYWRlLCBpZiB5b3Ugd2FudCB0by4gbWFkZQoKCgoKSW4gYW4gZWZmSSBpbXBsZW1lbnRlZCBib3RoIFlqcyBhbmQgQXV0b21lcmdlIG15c2VsZiB1c2luZyB0aGlzIGFwcHJvYWNoIGluIGEgdG95IENSRFQgY29kZWJhc2UsIHNvIEkgY291bGQgdW5kZXJzdGFuZCB0byBwcm92ZSBJIGNvdWxkLiBUaGUgY29kZVsgaXMgaGVyZV0oaHR0cHM6Ly9naXRodWIuY29tL2pvc2VwaGcvcmVmZXJlbmNlLWNyZHRzKWFsbCAgaWYgeW91IHdhbnQgdG8gaHR0cHM6Ly9naXRodWIuY29tL2pvc2VwaGcvcmVmZXJlbmNlLWNyZHRzL2Jsb2IvbWFpbi9jcmR0cy50c2ZpZ3VyZSB0aGlzIG91dCBpbiBtdW5kZXJzdGFuIGQgdGhpcyBpbiBtb3JlIGRldGFpbC4KCgoKSXQgc291bmRzIGNvbXBsaWNhdGVkIC0gaG93IGRvIHlvdSBmaWd1cmUgb3V0IHdoZXJlIHRoZSBuZXcgaXRlbSBzaG91bGQgZ28/IEJ1dCBpdHMgY29tcGxpY2F0ZWQgbGlrZSAqbWF0aCogaXMgY29tcGxpY2F0ZWQuIEl0cyBoYXJkIHRvIHVuZGVyc3RhbmQsIGJ1dCB3aGVuIHlvdSBkbywgeW91IGNhbiBkbyB0aGUgd2hvbGUgdGhpbmcgaW4gYWJvdXQgMjAgbGluZXMgb2YgY29kZS4KCiAgQm90aCAgQ0F1dG9tZXJJbXBsZW1lbnRlZCBsaWtlIHRoaXMsIGFsbCB0aGUgZXRoZSBkaWZmZXJlbmNlIHRoZSBDUkRUIHNlbWFudGljcyBhdW90dG9tZXJnZSBhbmQgeWpzJ3MgYXJlIGlkZW50aWNhbHBlcmZvcm1hbmNlIHRoZSBwZXJmb3JtYW5jZSBkaWZmZXJlbmNlcyAgSW1wbGVtZW50ZWQgbGlrZSB0aGlzLCB0aGUgYXV0b21lcmdlIGFuZCB5anMncyBwZXJmb3JtYW5jZUkgbWFkZQogdG9vLkJJbiB0aGlzIGNvZGViYXNlIEkgaGF2ZSBhbiBpbXBsZW1lbnRhdGlvbiBvZiB5c2JvdGggUkdBIChhdXRoZSBzbWFlbWFudGljcyBvZiAoYXV0b21lcmdlKSBhbmQgeWpzIChZQVRBIChqc3lqcykuIEJ1dCBUaGV5IGhhdmUgaWRlbnRpY2FsIHBlcmZvcm1hbmNlLkJ1dCB0aGUgaXMgaWRlbnRpY2FsIGFueXdheWluIHRoaXMgdGVzdCBIb3cgZmFzdD8gVGhlcmUgYXJlIHR3b2NvZGUKCkl0cyB0IHdlIG5lZWQgdG8gZml4TExldHMgc2F5IHdTCiBTb21lIG9mIHRob3NlIGl0ZW1zIG1pZ2h0IGhhdmUgYmVlbiBkZWxldGVkOgpOb3RlIHRoYXQgcywgc28gSSd2ZSBhZGRlZCBhbiBgaXNEZWxldGVkYCBmbGFnIHRvIG1hcmsgdGhlbSBzYXMgc3VjaC4uIHRvIG1hcmsgd2hpY2ggb25lcyBXZSBjYW4ndCBqdXN0IHJlbW92ZSB0aGVtIGZyb20gdGhlIGFycmF5IGJlY2F1c2Ugb3RoZXIgcGVlcnMgbWlnaHQgaW5zZXJ0IGFpbnNlcnRzIG1pZ2h0IGRlcGVuZCBvbiB0aGVtLiAoT29wcykhRGFuZy4gRHJhdCBCdXQgbGV0cyBub3Qgd29ycnkgYWJvdXQgdGhhdCBmb3Igbm93LiBJJ20gaW4gdGhpcyBwb3N0UyBpbiBteSBhcnJheTUuIE0sIHJlcHJlc2VudGluZyAxMDAgMDAgMCBpdGVtcyB3aGljaCBoYXZlbid0IGJlZW4gZGVsZXRlZC4gYXJyYXljaGFyYWN0ZXJzSWYgdGRvY3VtZW50ICoqLHdvdXIgZG9jdW1lbnRUbyBmaW5kIG91dCwgdyB0aGUgcmlnaHQgYXJyYXkgbG9jYXRpb25TbyBpb3Igc29tZXRoaW5nICwgd2hpY2ggaXMgZG91YmxlIHlpa2VzNUkgZXh0cmEgb3B0aW1pemF0b2luaW9uIGhlcmUgZG9lc0JlY2F1c2UgaCxpd2hlbiB3ZSBpbiBhIGRvY3VtZW50CgpTZW1hbnRpY2FsbHkgdGhpcyBpcyB0aGUgc2VxdWl2YWxlbnQgdG8gdGhlIGV4cGFuZGVkIHZlcnNpb24gYWJvdmUgLSBidXQgdGhlIHBpZCwgc2VxIGFuZCBwYXJlbnRzIG9mIHRoZSBpbnRlcm5hbCBlbGVtZW50cyBpcyBpbXBsaWNpZmN0LiB3aGVuICBTbyB3ZSBvciBzb21ldGhpbmcgbGlrZSB0aGF0CgogWWpzc3RoZXNlIC0gc2luY2UgdGhlIGlkIGFuZCBzZXF1ZW5jZSBudW1iZXNyIHdvbidudW1iZXJzICB3b24ndGxpIGxpbmUgdXAKCkluIG91ckkgS2V2aW4gc2F5cyBmaW5kIHRoZSBmYXNtYWtlIHRoaXMgY29kZSBydW4gc28gZmFzdC4gZmlndXJlIG91dCAga25vd3MgdGhpcyBub3cgdG9vLCBhbmQgaGUnc215IGFwcHJvYWNoIGluIHR1cm4uIEhlJ3Mgbm93IHdoaWNoIHRvIHNlZSBpZiBoZSBjYW4gYmVhdCBtZSBpbiBwZXJmb3Jhcm1hbmNlLiB3aXRoIGFsbCB0aGUgcGFydHMgc2VwYXJhdGUgIGQgYnkgcG9pbnRlcnNTbyAgbXVjaFRoYXQgd2FzIGEgbWlzdGFrZSB3ZSBjYW4gZ2l2ZSB0byBTb21lIHBlb3BsZSBhcmUgZ3JlYXQgcGFyZW50cy4gSSggbG9raWtlIHBlcmZvcm1hbmNlLm9idGhpbmtpbmcgYWJvdXQgc29mdHdhcmUgcGVyZm9ybWFuY2UgdHVuaW5nICBzb2Z0d2FyZW1ha2luZyAgb29nbyByZWFsbHkgZmFzdE1lPyAgY2FuZVRoYXRzIGdyZWF0LCBidXQgbWFraW5nIGUgdGhpcyBmYXN0SW5zdGVhZCBvZiBlbnRlcmluZ2RvaW5nIHRoYXQgd29yayAsIEkgd2FzIHNidWJidXN5IGFuZCBhbmQgYnJpbmcgaXQgYmFjayBQcmFjdGljYWwgZAoKIGNoZWNrIG91dCBob3N3IGZhc3QgSSBjYW4gbWVrYWtlIUNSRFRzKCkgWWpzIGFscmVhZHkgcnVucyBmYXN0IGFuZCBldmVudHVhc29vbiBpdCB3aWxsIHNob3VsZCBiZWNvbWUgZXZlbiBmYXN0ZXIuKiogS2V2aW4gaGFzIGdvdCB0aGlzLiwgd2hpY2ggZG9lcyB0aGlzIHN0dWZmIG9uIHRvcCBwb2YgT1QuWWVzLCBJIGtub3cuIEkndmUgbWFkZSBhIGZldyBnbCB3aGljaCBUaGVyIGUgYXJlIGViZXR0ZXIgYXBycG9hcHJvYWNoZXMgdG8gZG9pbmcgdGhpcyBzb3J0IG9mIHRoaW5nIG9uIHRvcCBvZiBhIGRhdGFiYXNlLCBidXQgYWFsbCBhdCBUaGlzIGlzIHN0aGUgd29ya2Zsb3cgdGhhdCB5Y3VyZXJlbnRsdCBseSByZWNvbW1lbmRlZCBmb3J0aGUgY29sbGFib3JhdGl2ZTUgLS4gSGVscCEgcGxlYXNlIVdlIGNvdWxkIHVzZSB5dXJvdXIgaCBUaGlzIGlzIGZhc3QgZW5vdWdoIHRvIHNhdHVyYXRlIDEwMG1iIG1lMTAwIG1lZ2FiaXQgZXRoZXJuZXQuYmUgdGhhdCBteSBoZXIgdGhhbiB0aGUgZmliZXIgZXRoZXJuZXQgY29taW4gZyBpbnRvIG15IGFwYXJ0bWVudAoKQW5kIG8hIGxvb2tJdCBsKiphZGRyZXNzZWQgT3IgaWdub3JlZCAoZWcgZ0dpdCkgZ3Jvd3MgZm9yZXZlciBhbmQgbm9ib2R5IGNhcmVzLgoKQnV0IHRoYXRzIG9ydGhvZ29uYWwgIHRvIGV2ZXJ5dGhpbmd5b3UgY291bGQganVzdCBpZ25vcmUgaXQgbGlrZSBnaXQgZG9lcyBOb2JvZHkgc2VlbXMgdG8gbWluZCB0b28gbXVjaC5tb3N0bHkgIC0gbm9ib2R5IHNlZW1zIHRvIGNhcmUgdGhhdCB0aGVpciBnaXQgcmVwb3MgZ3JvdyB3aXRob3V0IGJvdW5kLCBmb3JldmVyR29zaCwgbGxpc3QgTWFraW5nIGNvbGxhYm9yYXRpdmUgZWRpdGluZyAgZmFzdGVyT1RvcGVyYXRpb25hbCB0cmFuc2Zvcm0gc29tcGVlIHBhcnRpY3VsYXJhbGdvcml0aG0gIEJ1dCB3ZXJlIHRoZSBhY2FkZW1pY3MgdXNpbmcgdGhlIHNsb3cgdmVyc2lvbiBvciB0aCBlIGZhc3QgZXZlcnNpb24KCj8gV2VyZSB0aGV5IGRpZCBpZERpZCB0aGV5IGhhdmUgZmFzdCB2ZXJzaW9ucyBvZiBzb21lIGFsZ29yaXRobXMgYW5kIHNsb3cgdmVyc2lvbnMgb2YgdGhlcm90aGVycywgd2hpY2ggbWlnaHQgbWVzcyB1cCB0aGVpciByZXN1bHRzPyBJdHMgaW1waXNzb3NzaWJsZVJlYWRpbmcgdGhlIEl0cyB0byB0ZWxsMSFGcm9tIHRoZSBwYXBlciwgaXRzLlRTZWUsIGlpIGFjdHVhbGx5IC8vIG5lZ2F0aXZlID0gZGVsZXRlZC4gY29udGVudGxsZWVubmxlbiBGb3IgZm9yIHRoaXNqdXN0IAoKIHVuaXZlcnNhbGx5IGFTbyB1c2luZyByb3BleXdpdGggLCB3ZSB1c2UgbGVzcyBSQU0uIG5vd21vcmUgMit4bW9yZSB0aGFuIHR3aWNlIGFzICwsIGFuZCBpdCBtYWtlcyB0aGUgd2FzbSBidW5kbGUgdHdpY2UgYXMgYmlnICgtPilTbyAgVGhpcyBpcyBraW5kIG9mIHVzZWxlc3NzLCBidXQgaXRzIG5vd215IGludGVybmV0IGNvbm5lY3Rpb25JIGNhbiBwcm9jZXNzIGVkaXRzVGhpcyBpc0l0c1RoaXMgY291bGQgc2F0dXJhdGUgSSBjb3VsZCBzYXR1cmF0ZSBteSBpbnRlcm5ldCBjb25uZWN0aW9uIGFuZCBoYXZlIENQVSB0byBzcGFyZS53aXRoIHRoaXMgIGJ5IGludGVybGVhdmluZyBidGhlIGItdHJlZXUgIHVwZGF0ZXN3aGljIHdoaWNoIHNob3VsZCB3b3JrIGp1c3RpbiBteSBmdXR1cmUgYnJpbmdzICBicmluZ3MgdGhhdCA1NDY1bXMgZG93biB0byB0byBpbnZlbnQoc3VwZXIgZmFzdCBDUkRUcykgIGhhdmUgICBTIG5leHQgaW5zdGVhZCBvZiBkb2N1bWVudCBzZW1hbnRpY3MgdXNzZXNBbmQgLCBhbmQgaHNvbWV0aGluZ0l0IHdvdWxkIGFkZCBjb21wbGV4aXR5LCBidXRMCgo+IFJEUkFGVDogTmVlZHMgZGlhZ3JhbXMgYmVmb3JlIHB1Ymxpc2hpbmcuLCBtYXliZSBzb21lIHRpZHkgdXAgRG9uJ3Qgc2hhcmUgdGhlIGxpbmsgdG9vIHdpZGVseXAgcGxlYXNlISBUaGlzIGlzbid0IHJlYWR5IGZvciBOSE4uCgojIyMgb25BbGwgb2YgdGhlZSBzZSBiZW5jaG1hcmtzIHNob3cgdGhlIGVyZXN1bHQgZnJvbSBtdWx0aXBpcGxlIGNoYW5nZXMKCiBUaGlzIGRvZXNuJ3QgWW91IGhhdmUgdG9vIG1hbnkgdmFyaWFibGVzIGNoYW5naW5nClllYWgsIHdlbGwgc3BvdHRlZC4gRWFjaCBvZiB0aGVzZSB0ZXN0cyBjaGFuZ2VzIG11bHRpcGxlIHZlYXJpYWJsZXMuIE1heWJlIG15IGRyZWZlcmVuY2UgaW1wbGVtZW50YXRpb24gaXMgZmFzdGVyIHRoYW4gYXV0b21lcmdlIHNpbXBseSBZZWFoLCB3ZWxsIHNwb3R0ZWQuIEVhY2ggb2YgdGhlc2UgdGVzdHMgY2hhbmdlcyBtdWx0aXBsZSB2YXJpYWJsZXMuIE1heWJlIG15IHJlZmVyZW5jZSBpbXBsZW1lbnRhdGlvbiBpcyBmYXN0ZXIgdGhhbiBhdXRvbWVyZ2Ugc2ltcGx5IHdob2xlIGRhdGEgYmFzZSBmdWxsIG9mc0kgd2FudCB0byBiZSBhYmxlIHRvIHVwZGF0ZSBhIHNpbmdsZSBpdG1lZW0gcXVpY2tseS4gV2l0aCB5anMgYW5kIGF1dG9tZXJnZSB0b2RheSB5b3UgbmVlZCB0bzoKVGhpcyBpcyBnb2luZyB0byBiZSBhd3VmZnVsbHkgc2xvdywgCgogTW9zdCBhcHBsaWNhdGlvbnMgYXJlbiAndCBjb2xsYWJvcmF0aXZlIHRleHQgZWR0aWl0b3JzLiAgTW9zdCBhYXBwc2FwcHMgaGF2ZSBsb3RzIG9mIHNtYWxsIG9iamVjdHMgd2hpY2ggYXJlIGVhY2ggcmFyZWx5IHdyaXR0ZW4gdG8uLCB3aGVyZSB0aGVyZSdzIG9uZSBkb2N1bWVudCBseW91IGNhbiBsb2FkIG9uY2UsIGtlZXAgb3BlbiBhbmQgdGhlbiBlc2F2ZS4gSW50ZWFzdGVhZCB0aGV5IGhhdmUgYWRkYXRhYmFzZXMgZnVsbG1vc3QgYXBwcyAgb2YgdGlueSBvYmplY3RzLCBlYWNoIG9mIHdoaWNoIGlzIGFsbW9zdCBuZXZlcnZlcnkgcmFyZWx5IHdyaXR0ZW4gdG8KCmoKIC4gdGhhbiB0aGlzd29ya2luZyBvbiAgYXQgaGVyZSBtdWNoIG90aGVyIHBlcm9mZm9ybWFuY2UgbWVhc3VyZSBob3dVc3VhbGx5IHdlYXBwbGljYXRpb25zIGhhdmUuIEVhY2ggIHRob3NlIG9iamVjdHMKCklmIHlvdSB3YW50IHRvIHVwZGF0ZSBhIHNpbmdsZSBvYmplY3QgaW4gZGEgIGEgZGF0YSBiYXNlIG9yLFdoSG9seSBjb3csIGF1dG9tZXJnZSdzIGphdmFzY3JpcHQgaXMgcmVhbGx5IHNsb3chICggKHdvd3dvdywgV293LCB5ZXNzISkKCiAtIHNvbWV0aGluZyB3YXMgZmlzaHkgaGVyZWF0IHRoZSBwYXBlciB0byBzZWUgd2hhdCB3YXMgZ29pbmcgb24gYmVjYXVzZSBJdCB0dXJucyBvdXQgd0luIHRoZWlyIHBhcGVyIHcgaW1wbGVtZW50YXRpb250aGlzIHBhcnRpY3VsYXJ0aGVpciBXcml0dGVuIGluIGEgdXAgYXMgU2NpZW5jZSBQYXBlcnViUFVibGl1Ymxpc2hlZCAgaXQgbWFrZXMgcGVvcGxlIHRoaW5rIHRoaXNoYW5nIG9uIC0tIFcKSSB0b29rIGEgY2xvc2VyIGxvb2sgYXQgdGhlIHBhcGVyIC0gYmVjYXVzZSBzb21ldGhpbmcgd2FzIGZpc2h5IGhlcmUuIEluIHRoZWlyIHBhcGVyIHdoZW4gYSB1c2VyIHBhc3RlZCBhIGJpZyBjaHVuayBvZiB0ZXh0IChzYXksIDEwMDAgY2hhcmFjdGVycyksIGluc3RlYWQgb2YgY3JlYXRpbmcgMSBvcGVyYXRpb24gd2l0aCAxMDAwIGNoYXJhY3RlcnMsIHRoZWlyIGNvZGUgc3BsaXQgdGhlIGluc2VydCBpbnRvIDEwMDAgb3BlcmF0aW9ucy4gQW5kIGVhY2ggb2YgdGhvc2UgaW5zZXJ0cyBuZWVkZWQgdG8gYmUgcHJvY2Vzc2VkIHNlcGFyYXRlbHkuIER1aCAtIG9mIGNvdXJzZSBpdCdsbCBiZSBzbG93IGlmIHlvdSBkbyB0aGF0ISBUaGlzIGlzbid0IGEgcHJvYmxlbSB3aXRoIHRoZSBhbGdvcml0aG0uIFRoaXMgaXMganVzdCBhIHByb2JsZW0gd2l0aCAqdGhlaXIgcGFydGljdWxhciBpbXBsZW1lbnRhdGlvbiouIFdyaXR0ZW4gdXAgYXMgUHVibGlzaGVkIFNjaWVuY2UgUGFwZXIgaXQgbWFrZXMgcGVvcGxlIHRoaW5rIHRoaXMKP0JlQmVjYXVzZSwgdyBpcyBhIEZhY3QgcmF0aGVyIHRoYW4gYSBPZiBUaGUgVW5pdmVyc2UgcmF0aGVyIHRoYW4gYSBuIGltcGxlbWV0bmF0aW9uIGRlaW1wbGVtZW50YXRpb24gZGV0YWlsIG9mIHNvbWUgSSB3b3VsZG4ndCBtaW5kIHNvIG11Y2ggaWYgSSBkaWRuJ3QgaGF2ZSBzbyBtYW55IHBlb3BsZSBmbGlwcGluZyBtZSBhIGxpbmsgdG8gdGhlIHBhcGVyIGFuZCBhc2tpbmcgbWUgYWJvdXQgaXQuIEJlY2F1c2UsIHdyaXR0ZW4gdXAgYXMgUHVibGlzaGVkIFNjaWVuY2UgUGFwZXIgaXQgbWFrZXMgcGVvcGxlIHRoaW5rIHRoaXMgaXMgYSBGYWN0IE9mIFRoZSBVbml2ZXJzZSByYXRoZXIgdGhhbiBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwgb2Ygc29tZQppbiBzb21lIG9mIHNvbWUgY29kZSB3cml0ZXRlbiBieSBhIG4gb3ZlcndvcmtlZCByZXNlYXJjaGVyLgpzZW5kaW5naW5nIChwb2ludGVkbHkpd2hhdCBJIHRoaW5rIGFib3V0V1NvLCBuIHRoZSBzY2lUaGUgc2NpZW5jZSBpc24ndCByZWFsISBJJ21yaWdodCEgUGxlYXNlIGJlbGlldmUgbWUhTm9vcmVhbAoKQW5kIGRpZmZlcmVuZW50IG9mIHRoaXMgY29kZVtdKChodHRwczovL2pvc2VwaGcuY29tL2Jsb2cvY3JkdHMtYXJlLXRoZS1mdXR1cmUvKSkuIEFuZCBtYXliZSBvdGhlciBraW5kcyBvZiBmc29mYWxsIG91ciBzb2Z0d2FyZSAtIGJ1dCBJJ20gbm90IHJlYWR5IHRvIHRhbGsgYWJvdXQgdGhhdCB5ZXR0b2RheSB5b3UgcmVhZCBhYm91dCBpbiBhY2FkZW1pYyBwYXBlcnMgICBNYXJ0aW4gS2xlcHBtYW5uIGN1cnJlbnRseXdhcmR3ZSBuZWVkIHRvIHlvdSBpbnRvIHRoIGVkZWUgZG9jdW1lbnQsIGFuZCB0aGUgdXNlciAqY2xlYXJseSogaW5zZXJ0ZWQgYmVmb3JlZXZlbiB0aG91Z2ggdGhlIHVzZXIgaW5zZXJ0ZWQgYmVmb3JlIHRoZSAnYicqKioqCgoKCkZvciByZWZlcmVuY2UsIFlqcyAoQXNpZGU6IHNvbHZlcyB0aGlzIHdpdGggYSAqZGlmZmVyZW50KiBoYWNrOyBidXQgdGhlIGRpZmZlcmVuY2UgaXNuJ3QgcmVhbGx5IGltcG9ydG5hdGFudCkuYWN0dWFsbHkgaGVyZSBpcyBpZGVudGljYWwsIGV4Y2VwdCB0aGF0IGl0IHByb2JsZW0uIFR0d2Vha0lmIHlvdSdyZSBjdXJpb3VzLCAsaGFja3RyaWNrbmVhdCBoYWNraGFjayB3aGhpbGUgd3JpdGluZyBhIHAsIHNvIEknbSBubyB0dCB0b28gd29ycmllZCB0YWtlbiB0byAgbm90ICBlZGl0aW5nIHRyYWNlIGEgamF2YXNjcmlwdCBzdHJpbmd3ZSBjYW4ndCBtZXJnZSBjb25jdWRycmVudCBlZGl0cyBidXQgaXRzIGl0IG1pZ2h0IG5vdCBjb25jdXJyZW50IGVkaXRzIGJ1dCBpdHMgc2xvdzpkLCB1c2luZyBhIGphdmFzY3JpcHQgc3RyaW5nLCB3ZWxsIGphdmFzY3JpcHQgIGFsbG93aW5nIG5vdCBub3QgIGVkaXRpbmcgdHJhY2UgYSBqYXZhc2NyaXB0IHN0cmluZ3dlIGNhbid0IG1lcmdlIGNvbmN1ZHJyZW50IGVkaXRzIGJ1dCBpdHMgLiBCdXQgaXRzIGEgbHRvdCBmYXN0ZXI6QSB0cmVlIGlzIFRUaGUgZCB0cmVlIGJhc2VkICBpc24ndCB2ZXJ5IGZhc3QgIGRvZXMgdGhhdCBhdXRvbWVyZ2UgdXNlcyBnZXRzIGJpZyBhbmQgc2xvd2h1Z2V0aGUgaGFzIHRoZSByaWdodCBhcHByb2FjaC4gRml4IHRoZSBjb3JlIGFsZ29yaWh0bSBhbmRhbmxnb3JpdGhtIGFuZCBkYXRhIHN0cnVjdHVyZXMgLiBUaGVuIGIgYmVmb3JlIG1vdmluZyB0byBvcHRpbWl6aW5nIGluZGl2aWR1YWwgbWV0aG9kc2EgZnVuY3Rpb25pdCB3b24ndCBzdXJ2aXZleW91J3JlIGFueXdheUJ1dCBieSBmYXIsIHJlcGxhY2llIGl0IHdpdGggc29tZXRoaW5nIGZhc3Rlci5pbiB0aGUgc2FtZSB3YXlvbmNldW5kZXJzdGFuZCBpdGltcGxlbWVudCdyZSBjdXJpb3VzIGFuZHMsIGJvdGggaW4gdGhlIHNhbWVteSByZWZlcmVuY2UtY3JkdHNJdHMgbm90IGV4YWN0bHkgbGlrZS1mb3ItbGlrZSAtIEknbW4gbm90IGltcGxlZW50aW5nIG15IG9pbXBsZW1lbnRpYXRpb24gYWxzbyBkb2Vkb2Vzbid0IHVzZSBpbW11dGFibGVqcy4gQnV0IG15IGNvZGUsIHVzaW5nIHQgdGhpcyxlbmRzIHVwIC4gSXRzIGFsc29mb3IgZXhhbXBsZSwgIHRoYW4gYXV0b21lcmdlYmFzZSBnb2luZyB0bygqKCpqZXJlaGVyZSp0aGF0cyBhIHByb2JsZW0gZm9yIGFub3RoZXIgZGF5Lik3NVdhaXQsIG5vIC0gIHN0aWNrIGFyb3VuZFRoZSBhc3lzdGVtIHN0YXJ0cyBvZmYgZmFzdCwgYnV0IGl0IGdldHMgc2xvd2VyIHdpdGggZXZlcnkga2V5c3Ryb2tlVGhpcyAKCj4gSW5zZXJ0IGRpYWdyYW1uXjIgP0NhbiBoYXMsIC4gVGhpcyBpcyBmYXN0ZXIgeW91IHRvICBBbmQgYnkgd2UsIEkgbWVhbiB5anMgaGFzIGZpeGVkIHRoZXNlIHByb2JsZW1zLiBTbyBsd2hhdCBkaWQgaXQgZG8/SG93IGRpZCBpdCBtYWtkbyB0aGF0WWpzIHNldmVydGhlIGRvY3VtZW50IHRyeSB0b3NvbWV0aGluZyBsYXRlcnRoZXkgcHJvYmFibHknbGwuIFNvIHRoZSBzeXN0ZW1zdXN1YWxseSB0aGUgY2FjaGVkIGxvY2F0aW9uCgogIChhbmQgaXQgcHJvYmFibHkgb3d1d293b3dvdWxkbid0IHdvcmsgYXMgd2VsbCBmb3Igbm9uLXRleHQtZWRpdGluZyBhcHBsaWNhdGlvbnMpLiBCICIicnVuIiBpc1RoaXMgaXMgIGpqdXN0IGEgY29tcHJlc3NlZCB2ZXJzaW9uIG9mIHdoYXQgd2Ugd3JvdGUuVGFsbCAgLiAoIChXZSBhc3N1bWUgZWFjaCBwYXJlbnQgaXMgdGhldGhlIGlkcyBnb3QgdXAgdXAgYnkgMSBlYWNoIHRpbWUsIGFuZCBlYWNoIGl0ZW0gaGFzIHRoZXByZSBwcmV2aW91cyBpdGVtIGFzIGEncyBwYXJlbnQgaXMgdGhlIHByZXZpb3VzIGl0ZW0pbmVlZHMsIGxhdGVyIHNvIHRoZSBsb2dpYyBpcyBhIGJpdCBjb21wbGV4LkJ1dCBpaW5ndGhpcyAgc2V0YXJyYXksIGJ1dCBpcmVjbGFpbSB0aGVjbGFpbSB0aGUgIGNyb3duIGJhY2tzbyByYXJlbHkqKi4gbiBBbmQgdGhpcyBjb2RlIHdpbGwgYmUgdXNlZHNob3VsZCBiZSBmYXN0IGZvciBpbnRlcmFzdHVmIG5vbi10ZXh0IGUtZWRpdGluZyB0YXNrcy5JIGhhdmUgdG8gb25lIG9mZG9jdW1lbnQgeW91ciwganVzdCBmcm9tICBpbiB0aGUgbGFzdCBmZXcgeWVhcnMsIGV2ZW4gd2VoZW4gbWFraW5nIHdlYnBhZ2VzLkUsdyEgdGhhdCBtZWFucyB3ZWMgY2FuIGZpbmQgYW55IHRpaXRlbSBpbiBhYm91dCBmcm9tIG1haW4gbWVtb3J5LkFnYWluLHNodWZmbGluZyBldmVyeXRoaW5nIGluIGEgIGl0IHVldHlldC5FYWNoIGxlYWYgbm9lZGUgaW4gbXkgYi10cmVlIGVzLCBhbGwgYSBibG9jayBvZiAsIGFsbCBwYWNrZWQgdG9nZXRoZXIgaW4gbWVtb3J5Y2xvY2sgY3ljbGUuIE5vdGJ1dCB3ZSdyZW91cmllc3doYXQgd2Ugb2JzZXNzIG92ZXIgSSBjYW4gY29kZSBwd2VsbCBlbm91Z2ggLCBidXQgZG8ndG4ndEkgc3RpbGwgZ2V0IHp1Y2NpbmkgYW5kIGN1Y3VibWVyIG1iZXIgbWl4ZWQgdXBoYy5XZSdyZSBhbGxldmVyLnRoZSBhbGdvcml0aG1zIHdlcmUgdG9vICBmb3IgcHJhY3RpY2FsIHNsb3cgYW5kIHRvIGJlIHByYWN0aWNhbHVzZWZ1bGRpbXNtaXNzZWQgIHdyaXRpbmcgKGFuZHJlYWRpbmcgYW5kIHdoZW4gaXQgY29tZXMgdG9tYWtlIHdvcmtJIGRvIHdlbGwgZW5vdWdoIHdpdGggbXkgbmVCdXQgbWU/IEkgZG9uJ3QgbWlrbmQga2lkcydtIG9rIGF0TU1lPyAgZmluZSB3aXRoIGtpZHMgLXBzb2Z0d2FyZSAgc3VwZXIgZmFzdCBDUkRUcyBmb3IgdGhlIHdvcmxkb2dvIGxvb2tpbmcgZm9yIHRoZS4gSW4gdGggSW4gdGhpcyBjYXNlLCBJbiB0aCB0aGUub2YgZmFzdCBDUkRUcyBpbnNpZGUgYWhzaHByYWN0aWNhbGx5IHVzZWZ1bCdpbmRpdmRpdWFsIGluZGl2aWR1YWwgIG9wZXJhdGlvbnNEbydodGhhdCB0aGVzZSBzcGVlZGJlbmNobWFyayBzcHVibGlzaGVkIHNwYWxnb3JpdGhtIHNwZWVkcyBhcmUgIiIgZXZlcnlib2R5LSAtIGJ1dCBJIGRpZG4ndCBoYXZlIGEgIHdhcyBub2JvZHksIDsgLiBJIGRpZG4ndCBoYXZlIGEgc2NpZW50aWZpYyBwdWJsaXNoZWQgcGFwZXIganVzdGlmeWluZyBteSBjbGFpbXMuIEp1c3Qgd29ya2luZyBjb2RlLiguLikgY21wb21wYXJpc29ucyx1bml2ZXJzaXR5IGEgZGVjYWRlJ3ZlIGJlZW5pbmdDUkRUcy4gVGhhdCB0aGV5IHdlcmUgZG9vbWVkIHRvIGFsd2F5cyBiZSBzbG93IGFuZCB1bndvcnJrYWJsZSAtIGFuZCB0byBhZG1pdE1ha2luZyBDUkRUc01ha0ltcGxlc2VuZGluZyBtZSBsaW5rcyB0b2EgLCBpbiBJIGhhZCBzb21lIHdvcmtpbmcgY29kZSBidXQgLSAgbm9ib0lpdCBmZWx0IGxpa2Ugbm9ib2R5IGNhcmVkIGFib3V0IGh0YXQudGhhdC5yZWFsbHkgbm9uZSBvZiB0aGUgc21hcnQgc2NpZW5jZSBwZW9wbGVjb21wdXRlciBzaWNuZWNjaWVuY2UgSSB3YXMgbm9ib2R5LiAKCkFuZCBJICwgYXQgc29tZSBwb2ludCBhcm91bmQgdGhlbiwgSSBkaXNtaXNzZWQgQ1JEVHMgYWx0b2dldGhlci4gSWYgdGhlIHJlc2VhcmNoZXJzIGludm9sdmVkIHdobyBpbnZlbnRlZCB0aGVtIGNvdWxkbid0IG1ha2UgdGhlbSBmYXN0LCB3aG8gd2FzIEk/QnV0IHdzb21ld2hlcmUgYXJvdW5kIHRoYXQgdGltZQoKLS0tV3Nob3cgdGhhdCBhY3R1YWxseSBzaG93aW5ncHJvdmluZz8gSXQgc2VlbXMgbGlrZSB0ZXN0cyAtIHlvdSBjYW4gcHJvdmUgdGhlIGFic2VuY2Ugb2YgYnVncywgYnV0IHRoZXhpc3RlbmNlIG5vdCB0aGVpciBhYnNlbmNlLiBQQmVuY2htYXJrcyBmZWVsIGxpa2UgdGhhdCB0b28gLSB5b3UgY2FuIHByb3ZlIHRoZSBmYXN0IGNvZGUgaXMgcG9zc2libGUsIGJ1dCBzcGVlZCB1cHMgYXJleW91IGNhbid0IHByb3ZlIHNvbWV0aGluZyBpcyBzbG93LmluaGVyZW50bHkgVwoKIEl0IHNlZW1zIGxpa2UgdGVzdHMgLSB5b3UgY2FuIHByb3ZlIHRoZSBleGlzdGVuY2Ugb2YgYnVncywgYnV0IG5vdCB0aGVpciBhYnNlbmNlLiBCZW5jaG1hcmtzIGZlZWwgbGlrZSB0aGF0IHRvbyAtIHlvdSBjYW4gcHJvdmUgc3BlZWQgdXBzIGFyZSBwb3NzaWJsZSwgYnV0IHlvdSBjYW4ndCBwcm92ZSBzb21ldGhpbmcgaXMgaW5oZXJlbnRseSBzbG93Lk1heWJlIGJlbmNobWFya3NUaGVyZSdzIGEgcnVsZSB3aXRoc2F5aW5nIGFib3V0aW5nOiJZLiBZb3UgY2FuJ3QgVGVzdHMgY2FuIFRoZXkgY2Fwcm92ZSJhbiBhbGdvcml0aG0gd2lsbCBhbHdheXMgYmUgc2xvdy5oYXMgdG8gc2F5YW5vdXIgaW1wbGVtZW50YXRpb24gcnVuIHNzbHkndmVvbGQgaXNydW5zIAoKSWYgeW91IG1hQnV0IGlmIHlvdSBtYWRlIGEgY2hhcnQgb2YgdGhhdCAiT3QtdGV4dCBpcyBmYXN0LCBhbmQgb3QtdGV4dCBpcyBzbG93Ikl0IHdvdWxkIGJlIHNpbGx5IG1ha2luZyBhIGNoYXJ0IHNob3dpbmcgaG93LXRvdCBib3RoIGFuZC4gVGhlIGRpZmZlcmVuY2UgaXMgaW4gdGhlIGltcGxlbWVudGF0aW9uLiBBbmQgdGhhdHMgdHJ1ZSBoZXJlIHRvbyAtIEl0IHdvdWxkIGJlIHNpbGx5IG1ha2luZyBhIGNoYXJ0IHNob3dpbmcgaG93IHRleHQtb3QgaXMgYm90aCBmYXN0IGFuZCBzbG93LiBUaGUgZGlmZmVyZW5jZSBpcyBpbiB0aGUgaW1wbGVtZW50YXRpb24uIEFuZCB0aGF0cyB0cnVlIGhlcmUgdG9vIC1UaGUgYW5ub3lpbmcgcGFydCB3YXMgd2hlbiBzZW50IGFyb3VuZGFza2Vkc2VlbSBsaWtlZm90dW9mIHdoYXQgdGhleSB3ZXJlcmVhbGx5IHdvcmVyZSAtamF2YSAsYXNwZWN0c1dXaGVuIG91ciBpbXBsZW1lbnRhdGlvbiBydW5zIHNsb3dseSwgd2hhdCBhcmUgd2UgYWN0dWFsbHkgcHJvdmluZz93ZSBJIGRvbid0IGtub3cgaWYgdHdoZXJlJ3JlIHByb3ZpbmcgYW55dGhpbmcgYWJvdXQgdGhlIHNlbWFudGljcy5yZXMgaW52b2x2ZWR3aGF0IGRvZXMgdGhhdCBtZWFuP2lzIHRoYXQgbWVhbmluZ2Z1bGRvZXMgdGhhdCB0ZWFjaCB1cyBhbnl0aGluZ3doYXQgc2hvdWxkIFdoYXQgc2NhbiB3ZSBsZWFybiBmcm9tIGEgc2xvdyBpbXBsZW1lbnRhdGlvbiBNYXliZSBpdHMgbGlrZSB0ZXN0cyAtIGEgcGFzc2luZyB0ZXN0IHN1aXRlIGRvZXNuJ3QgcHJvdmUgdGhlIGFic2VuY2Ugb2YgYnVncy4gSXQganVzdCBwcm92ZXMgeW91IGFyZW4ndCBsY2FudCBBbmQgYSBzbG93IGltcGxlbWVudGF0aW9uIHBzYXVnZ2VzdHMgdGhlIHNlbWFudGljc3N5c3RlbSBpcyBzbG93IC0gdXQgYnV0IGl0IG9ubHkgcHJvdmVzc3VnZ2VzdHMsIGJ1dCAgc3VnZ2VzdHMsIGJ1dCBjYW4ndCBwcm92ZSB0aGUgc3lzdGVtIHdpbGwgYWx3YXlzIGJlIHNsb3cuIG5ldmVyICBuZXZlck1heWJlIGl0cyB3b3JzZSAtIG1heWJlICBoYWRoYXZlIGVkCgphU29tZSB0aW1lIGFyb3VuZCB0aGVuIEkgIGFuQW5kIHc/ICAgICAgICAgICAgICB3ZSBjYW4ndCBzb3J0IHRoZW0gYmFlc2VkIG9uIHRoZWlyIElELiwgYmVjYXVzZSB0aGUgWCAqaGFzIHRvKiBnbyBiZWZvcmUgdGhlIGIgdGhlbiB0aGUgZG9jdW1lbnQgbWlnaHQgZW5kIHVwIGFzSXRzIHRoZSBhbGdvcml0aG1pYyB2ZXJzaW9uIG9mICAgICAgICAgIHRvIFJHQWFhUkdBIGlzIGltaW1wbGVtZW50cyBhIGxpYnJhciBDUkRUIGNhbGxlZCBZQVRBIHdoaWNoIHNsaWdodGx5IC0gd2hpY2ggd2UnbGwgc2VlIG1vcmUgb2YgbGF0ZXIgLS4gWUFUQSBpc3RoYXRzIHdoYXQgYXV0b21lcmdlIGRvZXNzbywgdXNpbmcgdmFyaW91cyAuQSB3YXMgZ29pbmcgb25udGhhdCBzZXZlcmFsIG1lZWQuIEFuZCBub3QsIHJ1c2hpbmd3aG8nIGhhcyBhIGJ1bmNoIG9mIGltbW9yZSBpbXBsZW1lbnRhdGlvbnMgdG8gY29kZSB1cHJpZ2h0LkJXaG8gd2FzIEk/IAoKIHBlZXIgcmV2aWV3ZWQgcXVpdGV0aGF0IHRoaXMgQnV0ICB0cmllVGhlIEkgb3Rvb2sgdGhlIHNhbWUgc2VtYW50aXNjcywgYW5kIHRoZSBzcy5CcmFuIHdhcyB3b2l1b3VsZCBoYXZlIHRvdGFsbHkuSSBmcm9tIGp1c3QgcmVhZGluZyB0aGEgcGUgcGFwZXIjIE1ha2luZyBDUkRUcyBmYXN0IHRoZSBmdXR1cmUgb2YgSSBhc3N1bWVkZGlzbWlzc2VkIHRoZW0sICBzdG9wIHBlZCByZWFkaW5nIHBhcGVycyBhbmRhY2FkZW1pYyAuIEEgR1VJRCBhZm9yIGV2ZXJ5IGNoYXJhY3Rlcj8gTWFkbmVzcyEgaG93IHRvIG1ha2UgdGhvc2V0aGUgYmVzdCB3YXkgdG8gaW1wbGVtZW50aWYgaXdlIGRvIHRoYXRYIFRoYXQgd291bGQgYmUgc3VwZXIgd3JvbmcucmVhbGx5YmUgIGNvbmZ1c2luZ2EgcmVjb3JkIG9mY2hhcmFjdGVyIGJ5IGNoYXJhY3RlciByZWNvcmRpbmcgYWJvdXQgdGhhdCdzQW5kIHdlIGNhbiBpbiwgYXMgd2UnbGwgc2VlIHNvb25pbnNlcnQgZnVuY3Rpb24gaW4ncyAgY1JDUkRUIChZQVRBKSBJJ3ZlIGJlZW4gdG9sZCBpdHMgYWJvdXQgNXggZmFzdGVyLCBidXQgSSBoYXZlbid0IEkgY291bGRuJ3QgZ2V0IHRoZSB2ZXJzaW9uIGluIGdpdCB3b3JraW5nLm1GYm9hYm91dEFib3V0IFRoZSBVbml2ZXJzZXMgcHJvYmFibHkgb3ZlcnN0cmV0Y2hlZC4gT25lIG9mIGEgIG9mdGhleSBuZWVkZWQgdG93aG9sZSAgV2l0aCB0aW1lIHRoZXJlJ3MgYWx3YXlzSWYgeW91IHdhaXQgbG9uZyBlbm91dWdoICwgIG1vcmUgYnVncy4gQW5kIGFsd2F5cyBiaWdnZXIgc21hcnQtYXJzZXMgd2l0aCBmYXN0ZXIgaW13dG8gbmV3IHdheXMgdG8gZG8gZmFzdGVyIGltcGxlbWVudGF0aW9ucy5JRWFjaCBpbXBsZW1lbnRhdGlvbiBoYXMgdGhlIHNhbWVNLCB3aXRob3V0IG5vdGljaW5nLAogQmVuY2htYXJraW5nIGlzIGFuIGFydCwgbm90IGEgc2NpZWNuZS4gSUNSRFRzIGhhZE9ubHkgbSBjb21lcyBmcm9tIHRob3NlIHR1bm5lbHNsYW5kcyBod2hpY2ggZGVzY3JpYmVkLiBBbmQgSWVkc3lzdGVtc05hdWdodCBidXQgc3RyYW5nZSBsYW5kcy4gSSByYW4gYW4gZWFybHkgYmVuY2htYXJrIGFuZCBpdCB3YXMgYmFyZWx5IGZnbGlnc2xpZ2h0bHkgZmFzdGVyb25seSAsIGJ1dHBlcmZvcm1hbmNlIHdhcyBhbG1vc3QgaHRoZSBzYW1lLiBJJ20gZ29pbmcgdG8gcmVtYXJrYWJseSBjbG9zZSB0byB0aGUgamF2YXNjcmlwdCB2ZXJzaW9uIC0gc28gdGhhdCBvZiAucGVyZm9ybWFuY2UgaW4gdGhpcyB0ZXN0IHdhcyBhbG1vc3QgdGhlIHNhbWUgYXMgdGhlIEpTIHZlcnNpb24uIHRvIHJ1biB0aHJvdWdoIHdhc20uIEkgcmFuIHRoZSAsIGJ1dCBJIHNlZSBzaW1pbGFyIGF0IHRoZSBtb21lbnQgJ20gaW5nSSdtIG5vdCBzZWVpbmcgbXVjaCBpbXByb3ZlbWVudCB1c2luZyBpdCB5ZXQuIEkgc3VzcGVjdCB0aGluZXkgaGF2ZSBzb21lIGtpbmtzIHRvIHdvcmsgb3V0IGJlZm9yZSBpdHMgcmVkYWRhZHkgZm9yIHJlbGVhc2UuIGl0IGhhc0kgY291bGRuJ3RpdCByYW4gc2xvd2VyIHRoYW4gdGhhdCBpbiBteSB0ZXN0c2EgZmFpciBiaXQgOyBhbmQgSSdsbCBob2xkIG9mZiBvbiBhZGRpbmcgYmVuY2htYXJrcyBhdHVudGlsIHRoZW4uZGl0IGRpZG4ndCBydW4gdGhhdCBmYXN0dGhleWhhdmUgLCB0aGVtIHRvIG15IGxpdHRsZSB0YWJsZWFkZGluZyBidGhlbSB0byBteSB0YWJsZSByZXN1bHRzIHRhYmxlIHN1cHBvc2VkIHRvIGJlIG9yIHNvCgotLS0gQXV0b21lcmdlIHN0b3JlcyBzdHRvbyBtYW55IG9iamVjdHMgY3JlYXRlcyBhbmQgJydzIGRhdGEgc3RydWN0dXJlIGlzIHNsb3cuY29yZSBuJ3QgIHRvbyBsc2xvdy50cmVlIGJhc2VkIGh1Z2dldHMgYmlnIGFuZCAgYXMgdGhlIGRvY3VtZW50IGdyb3dzIHR1bmluZ3RoZSBjb21wdXRlciBydW4gaXQgc21hbGxJIFRoZSB5anMgdmVyc2lvbiBpcyBzbGlnaHRseSBkaWZmZXJlbnRhbG1vc3QgaWRlbnRpY2FsLmluIHRoZSBzYW1lIGZpbGUsIGlmIHlvdSB3YW50IHRvIGFoaGF2ZSBhIGxvb2suIFRoZXkncmUgYWxtb3N0IGlkZW50aWNhaW1wb3NzaWxibGUgdG8gdGVsbCBhcGFydGlkZW50aWNhbCBEZXNwaXRlIGJlaW5nIHZlcnkgZGlmZmllcmVudCBwYXBlcnMsIHRoZSBpbXBsZW1lbnRhdGlvbnMgYXJlc2VtYW50aWNzIGFyZW9mIHRoaXMgZnVuY3Rpb24gbGlnb2dpYyBpcyBmb3IgaW5zZXJ0aW5ndGhlICBjb2RlYmFzZXNjb2RlVGhlaXIgIChBbmQgaXQgd2lsbCBiZSB1bnRpbCBlaHdoZW5ldmVyIHVzZXJzIGRvbid0TW9kZXkgY29kZSBpcyBiYXNlIG9zIG9iaXMgb2J2aW91c3lseSB2ZXJ5IGRpZmZlcmVudCBmcm9tIGF1dG9tZXJnZS5GIEknbSBub3QgdXNpbmdoYXMgbG90cyBvZiBkaWZmZXJlbmNlcyAgdGhlIHJlYWwgbGlicmFyeSBpbnN0YW5jZSwgZXhhbXBsZSxpcyBvYnZpb3VzbHkgdmVyeSBkaWZmZXJlbnQgIHVzZSBteSBpbXBsZW1lbnRhdGlvbiBkb2Vzbid0Zkl0cyBub3QgZXhhY3RseSBsaWtlLWZvci1saWtlIC15b3Mgb2IgaXMgb2RlCkJ1dCBhIGxvdCBvZiB0aGF0IGRpZmZlcmVuY2UgcmVhbGx5IGlzIGltbXV0YWJsZWpzLgooKEJ1dCBiZWFyIGluIG1pbmQgdGhlcmUncyBvbmx5IHNvIG11Y2ggd2UgY2FuIGNvbmNsdWRlIGZyb20gdGhpcy4gIGFib3V0IHRoZSBkYXRhSSB3aXNoIEkgY291bGQgdGFrZSBmdWxsIGMgZ2l2ZSBLZXZpbidzIGFwcHJvYWNoIGF0dHJpYnV0ZSBhbGwgb2YgdGhhdCB0byB0aGlzIHN3ZWV0IGRhdGEgc3RydWN0dXJlLiAgZ3VtbWluZyB1cCB0aCBld29ya2VlIHdvcmtzIHBlcmZvcm1hbmNlICBmb3IgYXV0b21lcmdlLCBhbmQgMzB4IG1vcmUgZGlmZmVlcmVuY2Ugc3VwZXJzaW1wbGVzd2VldCBhbmQgc2ltcGxlIG1ha2luZ2V2ZXJ5dGhpbmcgIGRvZXMgc2xvd2VyIHNsb3dhbGwgb2YgJ3MgY29kZWRvdyBkb3duKioganVzdHNsb3diZWluZyBpcyBwcm9iYWJseSBhdHRyaWJ1dGF0YWJsZSB0byBhbG9uZWNhbiBwcm9iYWJseWlzIGp1c3QgYXV0b21lcmdlJ3MgbGFjayBvZiAgaW1pbXBsZW1lbnRhdGlvbnMgKGFuZCBpbW11dGFibGVqcyl0aGUgaGVyZXByb2JhYmx5IGp1c3QgcXVpcmtzIG9mIC5PaCwgIGR1ZSB0byBwcm9iYWJsIHkgIGxpdHRsZSBtaWNyb29wdGltaXphdGlvbnNNeSBjb2RlIGV4aW1wbGVtZW50YXRpb24gZXhlY3V0ZXMgbGVzcyBjb2RlLCBhbmQgZnJvbSBpbW11dGFibGVqc2p1c3QgZ3VtbWluZyB0aGluZ3MgdXBOb3cgdGhhdCB3YSBmYXN0Y2xlYW4gYW5kIFcgIG5vdyBJZiB0aGVyZSB3YXMgYSBwcm9ncmFtbWluZyBwcm9ncmFtbWVyIHZlcnNpb24gb2Ygc3BlZWRydW5uaW5ndGhlICBjb21tdW5pdHksIEtldmluIHdvdWxkIGJlIHRoZXJlIHdpdGggYmVsbHMgb24udGhleSB3b3VsZCBhZG9yZSBLRXZldmluaGUgcmV3cm90ZXdyb3RlIGFuZCAgcnVuSWYgdGhlcmUgd2FzIGF3b3VsZCAgeW91bGlrZSB0aGF0IGFzIG11Y2ggYXMgcG9zc2libGUgd2l0aCBlYWNoIHJhZWVhZCB0byBtYWluIG1hZW1vcnkgSSB3YW5udHR0byAgaXRiZWVuIGFibGUgdG8gaW1wcm92ZSBpdHMgcGVyZm9ybWFuY2VzICBhaHNoYXNuJ3QgaW1wcm92ZWQgV2UgCgogdGhlc2UgZGF5cy4gV2UgY2FuIGRjb2UgdGRlIHRoaXMgaXMgbiBhbnl0aGluZy4qKnVwIGluIGFsc29tb3N0aXMgYWxtb3MgdGl0IGlkZW50aWNhbCB0bywgd3NvIHdlIGNhbiBxdWlmaW5kIGFueXRoaW5nIC5FcyBXZSB1cGRhdGUgYSBsZWFmLCB0aGVuIGl0cyBwYXJlbnQsIGFuZCBpdHMgcGFyZW50LCBhbGwgdGhlIHdheSB1cCB0byB0aCBlcm9vZSByb290IEFTb2F0aGV0aGUgY2hhcmFjdGVyIG91bmNvdW50cyBhdCAgYWZ0ZXJXSXQgZG9lc24ndCBjb21lIGludG8gcGxheSBoZXJlLCBidXQgd1dlIG5ldmVyIG1lcmdlIGVkaXRzIGZyb20gcmVtb3RlIHBlZXJzIGluIHRoaXMgdGVzdCwgYnV0IEkgbWFkZSB0aGF0IGZhc3QgdG9vIGFueXdheS5XZWcgc2VhcmNoIGJ5IElELmxpdHRsZSB0aGUgYi10cmVlIEl0IG1pZ2h0IGhlbHAgLSBqdXN0IEkgcGlja2VkIDMyIGJ5IHRyeWluZyBhIGZldyBudW1iZXJzZGlmZmVyZW50IG51bWJlcnMgYW5kIGJlbmNobWFya2luZyAuIEhpZ2hlclQzMiBzZWVtc2VkIHByZXR0eSBnb29kLiB0aGUgc3lzdGVtIHdpdGggYSBmZXcgZGlmZmVyZW50IHNpemVzIHRvIHdvcmsgd2VsbHdob2xlIEJ1dCB3TXRoZSBkb2N1bWVudCBSb3BleSBvbiBpdHMgb3duIHRha2VzIDI5bXMgdG8gcHJvY2VzcyB0aGlzIHN0cmluZ2RvY3VlZGl0aW5nIHRyYWNlLiAtICAgYXJlICp3ZWlyZCogaW4gdGhlIHR3byBiLXRyZWVzc2hvdWxkICAtIHRvIHRoZSAuIHR1cm5lZCBteSBiYWNrIG9uIGFjYWRlbWlhIGlhbmQgZmlndXJlIG91dCBob3cgdG90dXJuaW5nIHRvd2FyZCB0aGRvaW5nIHRoYXQgd29ya2Fuc3dlcmluZyB0aGF0IGNhbGxzdGFydCB0byBhbWFrZSBmYXN0IEFuZCByZXR1cm4gd2l0aCB0aGUgdHJlYXRzdXJlIG9mIHRoZXNlIGFsZ2lyaG9vcml0aG1zLiAoV2VsbCwgaXQgdG9vayBhIGRlY2FkZSBhbmQgKmtLZXZpbiopLiwgc29tZSBoYXJkIHdvcmsgVGhhbmtzIGR1ZGUhc29tZSBncmVhdCBpZGVhcyBmcm9tICBhbmQgTWFydGluSmFobnMgIEtsZXBwbWFubgoKIEkgY291bG5kbid0IGhhdmUgZG9uZSBpdCBBdXRvbWVyZ2UncyBydW4tZG9jdW1lbnQgZW5jb2Rpbmcgc3lzdGVtIGlzIGZhbnRhc3RpYyAtIGFuZCAuVGhlICBNYXJ0aW4gbWFkZSBmb3IgQXV0b21lcmdlLCBhbmQgd2FzIHRoZSBpbnBzaXNwaXJhdGlvbiBmb3IgWWpzJ3MgdGhlIGV1cXVxdWl2YWxlbnQgaW4gIEFuZCBVc2luZyBpbmNyZW1lbnRpbmcgc2VxdWVuY2UgbnVtYmVycyBhIGJ1bmNoIG9mIGNsZXZlciBwZW9wbGUuIEtlbGxsZXBwbWFublRoZSBzeXN0ZW0gb2YgdXNpbmcgaW5zdGVhZCBvZiBVVUlEc3RvIHNhdmUgc3RvcmluZyBnZW5lcmF0aW5nIGFuIGQgIChhZ2VudCBpZCwpIHR1cGxlcyBhdm9pZCBpcyBnZW5pdXMuIEFuZG90aGVyICBpdEkgaGF2ZSBubyBpZGVhIHdobyBjYW1lIHVwIHdpdGggdGhhdC4gQW5kIEtldmluJ3MgbGlzdCBhcHByb2FjaCBJIGRlc2NyaWJlIGhlcmUgaXMgdGhlIHNvcnQgb2Ygb2J2aW91cyBqZmFudGFzdGljLCBpZGVhIHRoYXQgMTAwIHNtYXJ0IHBwc21hcnQgcHBlb3BsZSBoYXZlIHN1cmVseSB3YWxrZWQgdGlyaGcgcmlnaHQgcGFzdCB3aXRob3V0IG5vdGljaW5nIGl0LiBmb2xrcyBpdHMuSWluaW52ZW50ZWQgZm9ycmVwcmVzZW50aWF0aW9uIGFwcHJvYWNoIG11c3QgIEkgZG9uJ3Qga25vd0kgZG9uJ3Qga25vdyB0aGF0IEkgd291bGRuJ3QgIGhhdmUgdGhvdWhndGhpbmsgSSB3b3VsdGhpbmsgSSB3b3VsZG4ndCBoYXZlIHdhbGtlZCByaWdodCBwYXN0IHRoYXQgIHdvdWxkbid0IGhhdmUgdGhvdWdodCBvZiB0aGF0IGVpdGhlci5iaW5hcnlicmlsbGlhbnRpbiBvcmRlciAgZXZlcnl3aGVyZSwgYW5kIG9mIGNvdXJzZSxUaGV0aGUgKyBpbnNlcnRpb24gYXBwcm9hY2toS2V2aW4ncyBJIHdvdWxkbiBuaGF2ZSBuJ3QgaGF2ZSB0aG91Z2h0IG9mIHRoYXQgZWl0aGVyLmRvbid0IHRoaW5rIEkgd291bGQgLiBJdHMgdGhlSSBiZXQgdGhhdCBpZWFkZWEgb3ZlciB0aGUgbGFzdCBkZWNhZGUgYW55IG9mIHRoZW0gaXRpdCBlaXRoZXJXaHkgaXNzbyBzbG93P2p1c3QgSSBkb24ndCBnZXQgaXQgLSB3SW0gJ20gZHlpbmcuIVN0b3AgLSAgYWxyZWFkeSBoYXMgYmVlbiByZXBsYWNlZCB3aXRoIHdhdXRvbWVyZ2UtcnMgIFNvIGl0ZCAgZG9lc24nIHQgbWF0dGVyLgogVHJ5IG5vdCB0byB0aGluayBhYm91dCBpdC4gKlR3aXRjaCp0LiBEZWZpbml0ZWx5IGRvbid0IHN1Ym1pdCBhbnkgUFJzIHRvIGZpIERlZmluaXRlbHkgZG9uJ3Qgc3VibWl0IGFueSBQUnMgdG8gZml4IGFsbCB0aGUgbG93IGhhbmdpbmcgZnJ1aXQuIE1vdmluZyBmcm9tIGF1dG9tZXJnZSB0byBhdXJlZmVyZW5jZS1jcmR0c215ICBjaGFuZ2VzOgoKLSBDb3JlVGhlIGNvcmUgZGF0YSBzdHJ1Y3R1cmUgKGxpc3QgLT4gdHJlZSB0byBsaXN0KQotIFJlbW92ZWQgaW1tdXRhYmxlanMKLSBSZW1vdmVkIGF1dG9tZXJnZSdzIGZyb250ZW5kIC8gYmFja2VuZCBwcm90b2NvbAotIFVzZSBkZCBhIGRpZmZlcmVudCBqYXZhc2NyaXB0IHN0eWxlCgpXaGljaCBXaGljaHJlc3VsdGVkIGluIGNoYW5nZXMgdG8gb2YgdGhlc2UgY2hhbmdlcyBtYWRlIHRoZVdIb3cgY2FuIFRoZSBjaGFuZ2UgZnJvbSByZWZlcmVuY2UtY3JkdHMgdG8geWpzIGlzLCBhbmQgeWpzIHRvIG15IHJ1c3QgY29kZSBzZnJvbSBhcmUgc2ltaWxhcmx5IGJpZy4gIEl0cyBwb3NzaWJsZSBJJ20gbWlTbyBpc2F0dHJpYnV0aW5nIHRoZSBwZXJmb3JtYW5jZXNzcGVlZHVwcyBoZXJlOyB3aGVyYXMgLgoKSSBzdXBwb3NlIHRvIGFuc3dlciB0aGF0CgpUaE15IGNvZGVXZSBnb3QgMTB4IHBlcmZvcm1hbmNlIGZyb20gdGhpcyBjaGFuZ2UuIEhvdyBCdXQgd2hpY2ggY2hwYXJ0IG9mIHRoaXN0byB3aGF0IHNob3VsZCB3ZSBhdHRyaWJ1dGUgdGhlIHNwZWVkdXA/LiBBbmQgYWxsIHRoZSBVaW50OEFycmF5cyB0aGF0IGFwcGVhcmVkcG9wIHVwIHRocm91Z2hvdXQgYXV0b21lcmdlJ3MgIGZvciB3aGF0ZXZlciByZWFzb24uSSBkb24ndCAqcmVhbGx5KiBrbm93IGhvdyB0byBhdHRyaWJ1dGUgdGhhdCBzcGVlZHVwIGFtb25nc3QgYWxsIHRoZSBjaGFuZ2VzLm1vbm9sb2l0aGljLkFuZCB5ZXMsIHRoaXMgaXMgYSByZWFzb25hYmlsZWxlIGNyaXRpY2lzbSBvZiB0aGlzIGFwcGFycm9hY2guIEkgY292ZXJlZCB0b28gbXVjaCB0ZXJyaXRvcnkgaGVyZS4gdG8gYmUgdGhvcm91Z2hhcyAgYXMgSSdkIGxpa2UuIFdlSSBkaWQgYmVuY2htYWtyIHJrIDQgZGlmZmVyZW50IENSRFQgaW1wbGVtZW50YXRpb25zIC0gMiBvZiB3aGljaCBJIHdyb3RlIG15c2VsZiBmcm9tIHNjcmF0Y2ggaGVyZWRpc3RyaWJ1dGUgIHRoYXQgaGFwcGVuZWQgTWF5YmUgcnVzdCBpcyBqdXN0IHRoYXQgbXVjaCBmYXN0ZXIgdGhhbiBqYXZhc2NyaXB0LCBhbmQgYWxsIG15IGRpc2N1c3Npb24gZm9yIHRoaXMgc29ydCBvZiB0aGluZyBvZiBwb2ludGVycyBpcyBqdXN0IG1hZGUgdXA/LlkuVCBBbmQgdGhpcyBwb3N0IGlzIFllcy4gVGhpcyBpcyBhIHJlYXNvbmFibGUgY3JpdGljaXNtIG9mIHRoaXMgYXBwcm9hY2guIEkgY292ZXJlZCB0b28gbXVjaCB0ZXJyaXRvcnkgaGVyZSB0byBiZSBhcyB0aG9yb3VnaCBhcyBJJ2QgbGlrZS4gSSBkaWQgYmVuY2htYXJrIDQgZGlmZmVyZW50IENSRFQgaW1wbGVtZW50YXRpb25zIGhlcmUgLSAyIG9mIHdoaWNoIEkgd3JvdGUgbXlzZWxmIGZyb20gc2NyYXRjaC4gQW5kIHRoaXMgcG9zdCBpcyBuZWFybHkgNzAwMCB3b3JkcyBhbHJlYWR5LkFUamVoZSBpcyB0b3RhbGx5IGRpZmZlcmVudCAoLiAoRlAgamF2YXNjcmlwdCAtPiBpbXBlcml0aXZlKWEnbSBvbmx5IGd1ZXNzaW5nYXNzaWduIHQgQW5kIGZvciB3aGF0IGl0cyB3b3J0aCAtIEkgc3N1dXNwZWN0IGp1c3QgcmVtb3ZpbmcgaW1tdXRhYmxlanMgYW5kIHRpZHlpbmcgdXAgYXV0b21lcmdlIGRvaW5nIHNvbWUgb2J2aW91cyAgdGlkeWluZyB1cCBhdXRvbWVyZ2VzdW15ICBjb2RlYmVjYXVzZSBydXN0IGlzIGZhc3RvZnRoZSBydXN0IG9tcGNvbXBpbGVyb2Ygc3BlY2lmaWNzc3R1ZmZmYWtlIG5ld3NpbnZlbnRlZCBTbyBJIHN1cHBvc2VJZiB0aGlzIGJvdGhlcnMgeW91LCBwbGVhc2UgZG8gdGhvc2UgYmVuY2htYXJrcy4gSSdkIGxvdmUgdG8gbW9yZSBkZXRhaWxlZCBZZXMuIFRoaXMgaXMgYSByZWFzb25hYmxlIGNyaXRpY2lzbSBvZiB0aGlzIGFwcHJvYWNoLiBJIGNvdmVyZWQgdG9vIG11Y2ggdGVycml0b3J5IGhlcmUgdG8gYmUgYXMgdGhvcm91Z2ggYXMgSSdkIGxpa2UuIEkgZGlkIGJlbmNobWFyayA0IGRpZmZlcmVudCBDUkRUIGltcGxlbWVudGF0aW9ucyBoZXJlIC0gMiBvZiB3aGljaCBJIHdyb3RlIG15c2VsZiBmcm9tIHNjcmF0Y2guIEFuZCB0aGlzIHBvc3QgaXMgbmVhcmx5IDcwMDAgd29yZHMuIElmIHRoaXMgYm90aGVycyB5b3UsIHBsZWFzZSBkbyBtb3JlIGRldGFpbGVkIGJlbmNobWFya3MuIEknZCBsb3ZlIHRvbWFsYXJreXByb3RvY29sIEFuZHRob3NlIGFyZSBnb25lIHRvbywgb2J2aW91c2x5QW5kLCB5SSBmIHRoaXMgYm90aGVycywgIHlvdScsIEknZCAqbG92ZSogdG8gZm9yIHNvbWVvbmUgdG8gcHVsbCBhcGFydCBlYWNoIG9mIHRoZXNlIGNoYW5nZXMgYW5kIHBlcmZvcm1hbmNlIGRpZmZlcmVuY2VzIGFuZCBzaG93IG1lIHB1Ymxpc2ggYSBtb3JlIGRldGFpbGVkIGd1aWRlLiBJJ2QgcmVhZCB0aGUgaGVjayBvdXQgb2YgdGhhdC5iZXR3ZWVuIGltcGxlbWVudGF0aW9ucyBJIHNob3cgaGVyZSAKCgojIyMgWW91IGhhdmVuJ3QgcHVibGlzaGVkV2hlcmUgaXMgdGhlIGNvZGUgdG8gcmUtcnVuIHlvdXIgYmVuY2htYXJrcz9JIGRvbid0IGJlbGlldmUgeW91LiAgSSB3YW50IHRvIHZlcmlmeSAmdHBsYXkKClRoZSBiZW5jaG1hcmsgY29kZSBmb3IgeWpzIGFuZCBhdXRvbWVyZ2UgSSdtIHJ1bm5pbmcgaXMgW2hlcmVdKGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2pvc2VwaGcvMTNlZmMxNDQ0NjYwYzA3ODcwZmNiZDBiM2U5MTc2MzgpLiBGb3IgbXkgcnVzdCBpbXBsZW1lbnRhdGlvbiBJJ20gYmVuY2htYXJraW5nIFt0aGlzIGNvZGVdKGh0dHBzOi8vZ2l0aHViLmNvbS9qb3NlcGhnL3RleHQtY3JkdC1ydXN0L3RyZWUvYmEyMGI2Mzg2YzA0NzI5NThmMzMwMjRjZTBiODA2ZTc1NDcwZTFjYSkuIFJ1biBpdCB3aXRoIGBjYXJpbiB0aGlzIGdpdGh1YiBnaXN0CgpnbyBjcml0ZXJpb24geWpzYCBvciBgY2FyZ28gY3JpdGVyaW9uIHJvcGV5YCBmb3IgdGhlIHJvcGV5IGJhc2VsaW5lLiBUdXJuIG9uIG9hYW5kIG9mZiB0aGUgaW5saW5lIHJvcGUgdXBkYXRlcyBpbiBuZWFyIHRoZSBvIG15IGNvbW1lbnRpbmcgb3V0IGxpbmVzIG5lYXIgdGhlIHRvcCBvZiBzcmMvdW5pdmVyc2FsL2RvYy5ycy4gamF2YXNjcmlwdG15IEpTIHN0cmluZyBiYXNlbGluZSwgSXRzIGEgbWVzcy47IGJ1dCBtZXNzeSBpcyBiZXR0ZXIgdGhhbiBtaXNzaW5nLiBsaW5rc2NvZGUgY29kZSB0byBpc29sYXRlCgpJIGhhdmVuJ3QgdXBsb2FkZWQgbXkgd2FzbSB3cmFwcGVyIGFueXdoZXJlLnJ1c3QgIGNyZHQgWW91IGNhbiBhZGQgYC0tZmVhdHVyZXMgbWVtdXNhZ2VgIHRvIHByaW50IG91dCBtZW1vcnkgYWxsb2NhdG9yIHN0YXRpc3RpY3MuIChULiAoVGhpcyBpcyBob3cgSSdtIGdlbmVyYXRpbmcgZmlndXJvdXQgaW5nIG91dCBob3cgbXVjaCByUkFNIEknbSB1c2luZykuIC0gd2hpY2ggaXMgIElTIHRoaXMgdGhpcyByZXByb2R1Y2FibGU/cmVwcm9kdWNhYmxlIHRoYXQgZWdlbmVyYXRlZCB0aGVzZSBiZW5jaG1hcmsgcmVzdWx0cz9TaG93IG1lIHRoZSBjb2RlYmVuY2htYXJraW5nICBwbGVhc2Uhc2xlaWdodHNJIGdvdCBmcnVzdHJhdGVkIHdpdGggYWNhZGVtaWEgYW9uIHRoZSB3aG9sZSBhbmQgLkkgY2Rpc2FwcG9pbnRpbmcgYXBwYXBwIHBhcGVycyBhbmQsYXQgaG93IHdlIGNhbiB0byBBbmQgYnJpbmcgdXMgdG8gdGhpcyBwb2ludC4gIGFuZCBubyB0aW1lIGF0IGFsbCB0byBhcnJpdmUgYXQgdGhlc2UgcGVyZm9ybWFuY2UgbnVtYmVycy4gYXZvaWRpbmcgVVVJRHMgYnkgLiwgYnV0IGl0cyBicmlsbGlhbnRJIGxvdmUgaXQgbWFrZXMgZXZlcnl0aGluZyBzaW8gbXVjaCBzaW1wbGVyZG91YnRmYXN0IENSRFRzIHRoZSBmb3JtdWxhIGZvciBmYXN0ICwgLCBsaWdodHdhZWlnaHQgIGltcGxlbWVudGF0aW9ucywgYWZ0ZXIgYSBkZWNhZGUgb2Ygd2FpdGluZywKCiAKCklmIHlvdSB3YW50IHRvIHBsYXkgd2l0aCBhbnkgb2YgdGhlIGJlbmNobWFya3MgeW91cnNlbGYsIHRoZSBoZXJlJ3MgOgoKClRoZSBiZW5jaG1hcmsgY29kZSBmb3IgbXkgSlMgc3RyaW5nIGJhc2VsaW5lLCB5anMgYW5kIGF1dG9tZXJnZSBpcyBbaW4gdGhpcyBnaXRodWIgZ2lzdF0oaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vam9zZXBoZy8xM2VmYzE0NDQ2NjBjMDc4NzBmY2JkMGIzZTkxNzYzOCkuIEl0cyBhIG1lc3M7IGJ1dCBtZXNzeSBjb2RlIGlzIGJldHRlciB0aGFuIG1pc3NpbmcgY29kZS4KCkZvciBteSBydXN0IGltcGxlbWVudGF0aW9uIEknbSBiZW5jaG1hcmtpbmcgW3RoaXMgY29kZV0oaHR0cHM6Ly9naXRodWIuY29tL2pvc2VwaGcvdGV4dC1jcmR0LXJ1c3QvdHJlZS9iYTIwYjYzODZjMDQ3Mjk1OGYzMzAyNGNlMGI4MDZlNzU0NzBlMWNhKS4gUnVuIGl0IHdpdGggYGNhcmdvIGNyaXRlcmlvbiB5anNgIG9yIGBjYXJnbyBjcml0ZXJpb24gcm9wZXlgIHRvIGlzb2xhdGUgdGhlIHJvcGV5IGJhc2VsaW5lLiBUdXJuIG9uIGFuZCBvZmYgdGhlIGlubGluZSByb3BlIHVwZGF0ZXMgbXkgY29tbWVudGluZyBvdXQgbGluZXMgbmVhciB0aGUgdG9wIG9mIHNyYy91bml2ZXJzYWwvZG9jLnJzLiBZb3UgY2FuIGFkZCBgLS1mZWF0dXJlcyBtZW11c2FnZWAgdG8gcHJpbnQgb3V0IG1lbW9yeSBhbGxvY2F0b3Igc3RhdGlzdGljcyAtIHdoaWNoIGlzIGhvdyBJJ20gZmlndXJpbmcgb3V0IGhvdyBtdWNoIFJBTSBJJ20gdXNpbmcuCgpJIGhhdmVuJ3QgdXBsb2FkZWQgbXkgcnVzdCBjcmR0IHdhc20gd3JhcHBlciBhbnl3aGVyZS4sIG1vc3Qgb2YgdDoKIEkgcmFuLCBldmVyeXRoaW5nIGlzIGEgYml0IG9mIGEgaG9kZ2UgYnBvZGdlCgojIyMgWW91IGhhdmVuJ3QgcHVibGlzaGVkIHRoZSBjb2RlIHdoaWNoIGdlbmVyYXRlZCB5b3VyIHJlc3VsdHMuIEJ1dCBpdHMgYWxtb3N0IGFsbCBvbmxpbmUuIHJlc3VsdHNpZiB5b3Ugd2FudCAgWW91J2xsIG5lZWQgYGF1dG9tZXJnZS1wYXBlci5qc29uLmd6YCBmcm9tIFt0aGlzIHJlcG9zaXRvcnJlcG9zaXRvcnkKCl0oaHR0cHM6Ly9naXRodWIuY29tL2pvc2VwaGcvY3JkdC1iZW5jaG1hcmtzKSBmb3IgbW9zdCBvZiB0aGVzZSB0ZXN0cy5hbHNvIGluIG9yZGVyIHRvIHJ1bgoKVGhlIHJlZmVyZW5jZSAtY3JkdHMgYmVuY2htYXJrIGlzIGluIHRoY29kZSBpcyBbaW4gdGhpZSByZXBvc2l0b3J5IGhlcmVdKGh0dHBzOi8vZ2l0aHViLmNvbS9qb3NlcGhnL3JlZmVyZW5jZS1jcmR0cy9ibG9iL21haW4vYmVuY2gudHMpLiBZb3UgY2FJZiB5b3Ugd2FudCB0byBtZWFzdWVyIG1yZSBtZW1vcnkgdXNhZ2UgeW91IGNhbiB1c2UgdGhlIHNhbWUgYXBwcm9hY2ggYXMgSSBkaWQgaVRoZSByZWZlcmVuY2UtY3JkdHMgYmVuY2htYXJrIGNvZGUgaXMgW2luIHRoZSByZXBvc2l0b3J5IGhlcmVdKGh0dHBzOi8vZ2l0aHViLmNvbS9qb3NlcGhnL3JlZmVyZW5jZS1jcmR0cy9ibG9iL21haW4vYmVuY2gudHMpLiBJZiB5b3Ugd2FudCB0byBtZWFzdXJlIG1lbW9yeSB1c2FnZSB5b3UgY2FuIHVzZSB0aGUgc2FtZSBhcHByb2FjaCBhcyBJIGRpZHRoZSAgdGVzdHNpdHMgaGVyZScnbGwgbmVlZCB0byBhZGQgcXVlcmllcywgZm9sbG93IHRoZSBhcHByb2FjaCBmcm9tIHRoZSBnaXN0IGFuZCAuIFlvdSBjYW4gcnVuIHRpaHMgY29kZSB0aGlzIGNvZGUgd2l0aCBgbm9kZSAtLWxvYWRlciB0cy1ub2RlL2VzbSAtLWV4cG9zZS1nYyBiZW5jaC50c2Agb2YgcHJpbnRpbmcgb3V0LCBhbmQgcmVmZXJlbmNlLWNyZHRzIGFsbCBqYW1tZWQgaW50b2lubmVlZHMgY29tZSBmcm9tYnllZGl0aW5nIHRoZSBnbG9iYWwgY2NvbnN0YW50IGF0IHRoZSB0b3Agb2Z3aGlsZSBiZW5jaG1hcmtpbmcgdGhhdHMgaG93aXRzIHVzaW5nLiAoTm90ZSB5b3UgY2FuJ3QgbWVhc3VyZSBtZW1vcnkgdXNpbmcgc3V1c2FnZSBkdXJpbmcgdGVzdHMgYmVjYXVzZSB0ZXN0IG1vZGUgY2hhbmdlcyB0aGUgbWVtb3J5KSBhY2N1cmF0ZWx5aW4gdGhlIHVuaXQgdGVzdGluZyBlbnZpcm9ubWVudCBUaGUgcmVmZXJlbmNlLWNyZHRzIGltcGxlbWVudGF0aW9uIGRlcGVuZHMgb24gWyBiZW5jaG1hcmtzY3JkdHMudHNdKCBmcm9tIHRoaXMgcmVwb3NpdG9yeShodHRwczovL2dpdGh1Yi5jb20vam9zZXBoZy9yZWZlcmVuY2UtY3JkdHMvdHJlZS9mZWQ3NDcyNTVkZjlkNDU3ZTExZjM2NTc1ZGU1NTViMzlmMDdlOTA5KSwgYXQgdGhpcyB2ZXJzaW9uLCBhdCB0aGlzIHZlcnNpb24gSG93IGRvIEkgcmVwcm9kdWNlIHlvdXIgcmVzdWx0cz9yZS1ydW4geW91ciBiZW5jaG1hcmsgcmVzdWx0cyBJIGRvbid0IGJlbGlldmUgeW91cyBteXNlbGZ0aGVzZXdlIG5lZWQgdG8gdGFrZSBhIGxvdCBtb3JlIHNlcmlvdXNseSBpcyBob3cgd2VlIC0gc28gdGhlIG1vZGVsIG9mICJsb2FkIGFuIG9iamV0Y3QsIGtlZXAgaXQgaW4gcmFtIGZvciB3aGlsZSBpdHMgb3BlbiBhbmQgdGhlbiBzYXZlIGl0ZXZlbnR1YWxseSAiIGRvZXNuJ3Qgd29yay5hcHBseQoKCgo+IEVkaXQ6IEtldmluIHNheXMgdGhlcmUgYXJlIHlvdSBjYW4gZG8gdGhpcyBhZGFwdCBZanMncyBwcm92aWRlcnMgdG8gaW1wbGVtZW50IHRoaXMgaW4gYSByZWFzb25hYmxlIHdheS4gSWQnZElLZXZpbiBpcyB1c3VhbGx5IHJpZ2h0OyBidXQgSSdkIHN1cmUgbG92ZSB0byBzZWUgdGhhdCBpbiBhY3Rpb24uIEknZCBsb3ZlIHRvIHNlZSB0aGF0IGluIGFjdGlvbi4gSSdkIG92ZWxvdmUgdG8gc2VlIHRoYXQgaW4gYWN0aW9uLkkgY2FuICAxMHhvZiBkaWZmZXJlbmNlc0hvdyBtdWNoIGZvZiB0aGUgc3BlZWQgZGlmZmVyZW5jZSBiZXdlZW5iZXR3ZWVuIG15IGFuZCB5anMgaXMgc2ltcGx5IGR1ZSB0b3RobmtzYW5rcyB0byB0aGUgcnVzdCBjb21waWxlcj8gaGFzIG5vdGhpbmcgdG8gZG8gd2l0aCBtZW1vcnkgbGF5b3V0LCBhbmQgZXZlcnl0aGluZyB0byBkbyB3dGloaXRoIEkgZG9uJ3Qga25vdy4KClNvIXRlYXNlIGFwYXJ0IEkgbG92ZSBiZW5oY2NobWFya2luZyBzdG9yaWVzLiBUaGF0IHMgbm9ybWFsLCByaWdodD9pbXBsZW1lbnRhdGlvbiB5b3V0ciBSR0EgaXMgYW5BV2hhdCBhcmUgdGhlIHJ1bGVzPyB3aGljaCBkZXNjcmliZSB0aGUgc3lzdGVtJ3MgYmVoYXZpb3VyP1doZW4gSWYgbXkgaW1wbGVtZW50YXRpb24gcnVuc2x5LCB3aGF0IGNhbiB3ZSBpbmZlciBmcm9tIHRoYXRyZWFsbHkgc2RvZXMgdGhhdCBhY3R1bGFsbHkgdGxsZWxsIHVzLkFyZSBhcmUgbm8gbW9yZXRoYXQgLCBtYXliZSwgd3JpdGVzdGVzdGluZ2EgIG9yIHNvIGFnbyBkZWNpZGVkIHRvSSB0aGluayBpIG5UaGUgaW4gVGhlIExpdGVyYXR1cmUgdGhlIGFjYWRlbWljIGxpdGVyYXR1cmUgVGhlIExpdGVyYXR1cmUgdGhlIGFjYWRlbWljIGxpdGVyYXR1cmUgbiBhY2FkZW1pYyBCdXR0IHJlYWxseSZsdDsKQW5kIG9oIGxvb2sgLSB0aG9zZSBsYXN0IHRocmVlIHJvd3MgYXJlICp3ZWlyZCohIDI5IGFuZCAyMyBkb24ndCBhZGQgdXAgdG8gNjUuIEknbSBwcm9iYWJseSB0aHJhc2hpbmcgdGhlIENQVSBjYWNoZSBieSBpbnRlcmxlYXZpbmcgdXBkYXRlcyBpbiB0aGUgdHdvIGItdHJlZXMuIExvb2tzIGxpa2UgYSAqYmF0Y2hfdXBkYXRlKCkqIG1ldGhvZCB3b3VsZCBicmluZyB0aGF0IDY1bXMgZG93biB0byAqNTJtcyouCkJlbmNobWFya3NBbGwgYiBhcmUgbGllcyB5ZXN2ZXJ5IGNsZXZlci5ZZXMgeWVzLCB2ZXJ5IGNsZXZlci4gSSdtIG5vdCBzb3JyeSAgLSB3cml0aW5nIC4gZXZlbgojIyMgSG93IGRvIEkgcnVuIHRoZXNlIGJlbmNobWFya3MgbXlzZWxmPwogLSB3cml0aW5nICAgQnV0IGl0cyBhbG1vc3QgYWxsIG9ubGluZS5JIGtub3cuIEkndmUgbWFkZSBhIGZldyBzbGVpZ2h0cyBvZiBoYW5kIHdoaWNoIEkgd2FudCB0byAnZmVzcyB1cCB0byBhbmQgZGVmZW5kLkJZb3VyIGJlbmNobWFya3MgYXJlIHdlaXJkIC8gd3JvbmcgLyBtaXNsZWFkaW5nQmVuY2htYXJrc0FsbCBiIGFyZSBsaWVzIHllc3ZlcnkgY2xldmVyLiBJJ20gbm90IHNvcnJ5ICAtIHdyaXRpbmcgLiBldmVuWW91ciBiZW5jaG1hcmtzIGFyZSB3ZWlyZCAvIHdyb25nIC8gbWlzbGVhZGluZ1dlIG5lZWQgdG8gdGFsayBhYm91dCBiZW5UaGVzZSBiZW5jaG1hcmtzIEJUaGVzZSBiZW5jaG1hcmtzIFdlIG5lZWQgdG8gdGFsayBhYm91dCBiZW5UZ2VoZXNlIGJlbmNta2FyaEFyZSB0aGUgYmVlbmNobWFya3MgdGhlc2UgYmVuY2htYXJraW5ncyBmb3IgcmVhbD8KOyB0aG91Z2ggaXRzdGhlcmUncyBhIGZldyBzbGlwcGVyeSBzbGVpZ2h0cyBvZiBoYW5kcyAgZG9pbmdnb2luZyBvbiBoZXJlLkIgLiBCdXQgdGhlcmUgYXJlIGEgSSdtIG5vdCBldmVuIHNvcnJ5LiBtZXNzLmpvc2VocGcvdGVqb3NlcGhnL3RleHQtY3JkdC1ydXN0QmVuY2htYWtycmsgYnkgcnVubmluZyxUIHN0cnVjdHVyZSBjYW4gYmUgZW5hYmxlZCBvciBkaXNhYmxlZCBhbHNvLi4gSSd2ZSBiZWVuIHJ1bm5pbmcgdGhlIGJlbmNobWFya3Mgd2l0aCB0aGF0IGZsYWcsIGN0aGVuIENUY2N0bF9ybCtDIGFza2lsbGluZyB0aGUgYmVuY2htYXJrcyBhcyBzb29uIGFzICBydW4gYXMgc29vbiBhcyBudW1iZXJzIHN0YXJ0IGNvbWluZyBvdXQuam9zZXBoZy9jcmR0LWJlbmNobWFya3NteSByZWZlcmVuY2Vqb3NlcGhnL3JlZmVyZW5jZS1jcmR0cycnJycnJycnJ28KCjxzZXBoLWZvbyAvPjwvc2VwaC1mb28+IC88L3NlcGgtZm9vPm9oIGhhaSAtLT48IS0tIGRzZmRzZGYKdGltZS1idG50aW1lLWJ0biB0aW1lTU1zPTEwMDAtbXNtc01zLW1NbXNpbGxpc2VjdG9uZHMgLS0+PCEtLSAqKioqKioqKioqKioqKioqKioqKgoKSSdtIGNvbXBhcmluZyBpdCBoZXJlIHRvIGEgYmFzZWxpbmUgd2hlcmUgYWxsIHRoZSBlZGl0cyBhcmUganVzdCBhcHBsaWVkIGRpcmVjdGx5IHRvIGEgamF2YXNjcmlwdCBzdHJpbmcuLCB3aGljaCBzaG91bGQgYmUgdGhlIHRoZW9yaWV0aWNhbCBzcGxpY2VkIGludG8gV2UgY2FuIEFzIGEgYmFzZWxpbmVUbyBnZXQgYSBzZW5zZSBvZiBob3cgZmFzdGluZWZmaWNpZW50IHRoYXQgaXMsIHdlIGNhbmUgIFNwbGljaW5nIGludG8gYSBzdHJpbmcgZGlyZWN0bHkgY2FuJ3QgVC4gKHRoZSB0aGlzICBiZW5jaG1hcms7IHdoaWNoIHNob3Vsd3dzd3MgYWJvdXQgaG93IGZhc3QgaGphdmFzY3JpcHQgZ2l2ZXMgdXMgYSBzZSBzZSBuc2Ugb2YgaG93IGZhc3QgamF2YXNjcmlwdCBjb3VsZCBnbywgaWYgaXQgd2Fzbid0IGxvYWRlZCBkb3duIHdpdGggYWxsIG91ciBjb2RlLgogKFNwQW5kICwgamF2YXNjcmlwdHJhdyAgaXMgdmVyeSBmYXN0LmphdmFzY3JpcHQgcnVubmlnbm5nIG9uIHY4ViBAIDEzLjUuNSAodjEzLjUuNSkodikKCgooSSBoYXZlIG5vIGlkZWEgaG93IHRvIG1lYXN1cmUgbWVtb3J5IHVzYWdlIGluIHdhc20gbWVtb3J5IHVzYWdlLiBJdCBzaG91bGQgYmUgdGhlIHNhbWUgYXMgdGhlIG5hdGl2ZSB2ZXJzaW9uKS4uICghKS4gSXRzICozMDB4IGZhc3RlciB0aGFuIGF1dG9tZXJnZSohIS4hIGRpcmVjdGx5LCBhbmQgaXRzIGRvaW5nIHdheSBtb3JlIGEgd2hvbGUgbG90IG9mIGV4dHJhIHdvcmsgdG8gc3VwcG9ydCBjY29sbGFib3JhdGl2ZSBlZGl0aW5nIHRvbzogOjo6OjoqKioqCgpUaGF0IGFjYWRlbWljIHBhcGVyIG1hZGUgY2xhaW1zIGJlbmNobWFya2luZyBhYm91dCBob3cgY2xhaW1lZCB0byBrbm93IGhvdyBmYXN0IHR2YXJpb3VzIENSRFRzIHJ1biwgYnV0IGl0cyBwZXJmb3JtYW5jZSBtZWFzdWVycmVzIHdlcmUgb2ZmIGJ5IG0gc2lsbHlJIHJlYWxkIGFsbCB0b2hzZSBob3NlIHllYXJzIGFnbyBtYWRlIGNsYWltcyBhYm91dHNvbWUgYm9sLiBCdXQgbnVtYmVycyBvd2VyZSAgQW5kIGJlY2F1c2UgaXRzICpwdWJsaXNoZWQgc2NpZW5jZSogd2UgLCBldmVyeW9uZSBiZWxpZXZlZCB0aGUgcmVzZWFyY2hlcnMub2ZmIGJ5IHRob3UzIG9yZGVycyBvZiBtYWduaXR1ZGUubid0IGp1c3Qgd3JvbmcuIFRoZXkgd2VyZSB3cm9uZyBieSBhIGZhY3RvcnRob3VzYXNhbmRzIG9mIHRpbWVzLnNldmVyYWwgb3JkZXJzIG9mIG1hZ25pdHVkZS5BbmQgd2UgYWxsLCBiZWNhdXNlIGV2ZXJ5b25ldHJpZWQgdG9sZCB1cyBhbGxpdCB3YXMgcHVibGlzaGVkIHNjaWVjbmNldGhlIFdobyBrbm93cyB3aGF0IHRoZSBwYXBlciB3b3VsZCBoYXZlIGNvbmNsdWRlZCBpZiB0aGV5ICBJdCB0dXJucyBvdXQsIHRoZSBwYXBlciB3YXNuJ3Qgd3JpdHRlbiBieSBnb2RzLgoKY2xhaW1lZCB0byB0ZWxsbHBhcGVyIHNhdGhvdXNhbmRzIG9mIHRpbWVzLgpCdXQgdGhhdHMgb2suIEFjdHVhbGx5ICBzb3J0IG9md2VpcmRseXRoaXMgd2hvbGUgdGhpbmcgbWFkZSBtZSBsZWFybiBzb21ldGhpbmcgdGhhdCByZWFsaXNlIHNvbWV0aGluZyB0aGF0IHNob3VsZCBoYXZlIGJlZW4gb2J2aW91cyBhZGVhY2FkZXMgYWdvLiAgU2NpZW50aXN0cyBhcmVuJ3QgZ29kcy4gVGhleSdyZSwgc2VudCBmcm9tIHRoZSBoZWF2ZW5zIHRvIGJyaW5nIFRydXRoIHRvIG1vcnRhbHNObywgdEdyZWF0cHJvcG9ydGVkIHRvIHRlbGwgdXMgYWxsIGhvdyB0cmllZCBUaGV5IHdlcmUgd3JvbmcgbGlrZSBhIGJpbGxpb25hcmUgaXJlIGd1ZXNzaW5nIGFiIGJhbmFuYWFzIGFjY3VyYXRlIGFzIGNvc3RzICQxMDAwLmFib3V0ICB5b3Uga25vdz9UIFRoYXRzIGh1bWFuLCBhbmRmZWVsIHNvcnQgb2YgaW5hZGVxdWF0ZSB3aXRoIGFjYWRlbWljcyAtIDpzIHdpdGggdGhlIGdpZnQgb2YKCgoKCgoKCi0tLQoKCgpBIGRlY2FkZSBhZ28gR29vZ2xlIFdhdmUgcmVhbGx5IG5lZWRlZCBhIGdvb2QgcXVhbGl0eSBsaXN0IENSRFQuIFNvIEkgZ290IHN1cGVyIGV4Y2l0ZWQgd2hlbiB0aGUgcGFwZXJzIGZvciBDUkRUcyBzdGFydGVkIHRvIGVtZXJnZS4gW0xPR09PVF0oaHR0cHM6Ly9oYWwuaW5yaWEuZnIvaW5yaWEtMDA0MzIzNjgvZG9jdW1lbnQpIGFuZCBbV09PVF0oaHR0cHM6Ly9oYWwuaW5yaWEuZnIvaW5yaWEtMDA0NDU5NzUvZG9jdW1lbnQpIHNlZW1lZCBsaWtlIGEgYmlnIGRlYWwhIEJ1dCB0aGF0IGV4Y2l0ZW1lbnQgdHVybmVkIHRvIGFzaCB3aGVuIEkgcmVhbGlzZWQgdGhlIGFsZ29yaXRobXMgd2VyZSB0b28gc2xvdyBhbmQgaW5lZmZpY2llbnQgdG8gYmUgcHJhY3RpY2FsbHkgdXNlZnVsLiBBbmQgSSBtYWRlIGEgYmlnIG1pc3Rha2UgLSBJIGFzc3VtZWQgaWYgdGhlIGFjYWRlbWljcyBjb3VsZG4ndCBtYWtlIHRoZW0gZmFzdCwgbm9ib2R5IGNvdWxkLiBJIHR1cm5lZCBteSBiYWNrIG9uIGFjYWRlbWlhIGFuZCBkaXNtaXNzZWQgdGhlbS4KCgpBbmQgaXRzIGltcG9ydGFudCB0byBrbm93IHRoYXQsIGJlY2F1c2UgdGhlIGJlc3QgY29sbGFib3JhdGlvbnMgc29tZXRpbWVzIGRvbid0IGNvbWUgZnJvbSB0d28gY2hlZnMgd29ya2luZyB0b2dldGhlci4gVGhleSBjb21lY29tZSBmcm9tIGxva29rIGxpa2UgR2lsYmVydCAmIFN1bGxpdmFuLiBNT1RoZSBzYW1lIGxvdmUsIGFuZCB0aGUgc2FtZSBkcmVhbSBPciBKb2JzIGFuZCBXb3puaWFrLiBidXQgZGlmZmVyZW50IHNraWxsIHNldHMuIERpZmZlcmVudCBwZXJzcGVjdGl2ZXMgaGVhZGVkIHRvd2FyZCB0aGUgc2FtZSBnb2FsLiB0aGF0c2FyZW4ndCBiZXR3ZWVuIHR3byBwZWVycy4gSW5zdGVhZCB0aGV5ICB0dG9vdGFsbHlUd28gTWFueSBtaW5kc2RpZmZlcmVudCBtaW5kcyBzc3RyZW5ndGhzIGZpZ2h0aW5nIGZvcgoKQSBkZWNhZGUgYWdvIEdvb2dsZSBXYXZlIHJlYWxseSBuZWVkZWQgYSBnb29kIHF1YWxpdHkgbGlzdCBDUkRULiBTbyBJIGdvdCBzdXBlciBleGNpdGVkIHdoZW4gdGhlIHBhcGVycyBmb3IgQ1JEVHMgc3RhcnRlZCB0byBlbWVyZ2UuIFtMT0dPT1RdKGh0dHBzOi8vaGFsLmlucmlhLmZyL2lucmlhLTAwNDMyMzY4L2RvY3VtZW50KSBhbmQgW1dPT1RdKGh0dHBzOi8vaGFsLmlucmlhLmZyL2lucmlhLTAwNDQ1OTc1L2RvY3VtZW50KSBzZWVtZWQgbGlrZSBhIGJpZyBkZWFsISBCdXQgdGhhdCBleGNpdGVtZW50IHR1cm5lZCB0byBhc2ggd2hlbiBJIHJlYWxpc2VkIHRoZSBhbGdvcml0aG1zIHdlcmUgdG9vIHNsb3cgYW5kIGluZWZmaWNpZW50IHRvIGJlIHByYWN0aWNhbGx5IHVzZWZ1bC4gQW5kIEkgbWFkZSBhIGJpZyBtaXN0YWtlIC0gSSBhc3N1bWVkIGlmIHRoZSBhY2FkZW1pY3MgY291bGRuJ3QgbWFrZSB0aGVtIGZhc3QsIG5vYm9keSBjb3VsZC4gSSB0dXJuZWQgbXkgYmFjayBvbiBhY2FkZW1pYSBhbmQgZGlzbWlzc2VkIHRoZW0uCmRpZWQgd2hlbiBJIGJpZyAtICggKkkgKkhoYXRlKiByZWFkaW5nIHRoZW0pIHRvIG15IGV0ZXJuYWwgc2hhbWUgLkJ1dEkgaGF2ZW4ndCB3cml0dGVuIGFueSBhbmQgSSdsbCBkbyBhbG1vc3QgYW55dGhpbmcgdG8gYXZvaWQgcmVhZGluZyB0aGVtSEFuZCBocy4hIEl0IEl0IHR1cm5zIG91dCB3ZSBjYWhuIG1ha2UgZmFzdCBDUkRUcy4gd2hpY2ggYXNtYWxsIGFuZCBmYXN0ICwgaWYgd2UncmUgd2lsbGluZyB0byBiZSBhIGJpdCBjbGV2ZXIgYWJvdXQgaXRBbmQgdGhhdCBtYWVha3NucyB0aGF0IGFjYVRoYXQgYXMgZndvcmsgYWxtb3N0IGFzIGZhc3QgYXMgYSBzdHJpbmdlZGl0aW5nIGEgLlNvIHRoYXQgcGFwZXIgd2FzICBJdCB0dXJucyBvdXQgd2UgY2FuIG1ha2UgQ1JEVHMgd29yayBhbG1vc3QgYXMgZmFzdCBhcyBlZGl0aW5nIGEgc3RyaW5nLiBCdXQgaWZhc3QuIFdlIGNhbiBtYWtlIHRoZW0gY3JhenkgZmFzdCAtIGxpa2Fib3V0LiBXZSBjYW4gbWFrZSB0aGVtIGFib3V0IGFzIGZhc3QgYXMgbmF0aXZlIHN0cmluZyBvcGVyYXRpb25zU28gaW4gdGhhdCBwYXBlclRoZXkgd2VyZXdyb25nIHdoYXQgcGVvcGxlIHByZXR0eSB3ZWxsICBBbmQgdGhhdHMgb2suLCBubyBtYXR0ZXIgd2hhdCAuQW5kIGJyb3VnaHQgdG9nZXRoZXIgYnJvdWdodCB0b2dldGhlciB0byBhY2hpZXZlIHNvbWV0aGluZyBub25lIG9mIHVzIGNvdWxkIGFjaGlldmUgb24gb3VyIG93bm5vIG9uZSBBbmQgaW4gdGhhdCBtb21lbnRCdXQsIGV2ZW4gdGhvdWdoICdtYXQsQW5kIG5vd0kgbGVmdCB0aGUgcmVzZWFyY2hlcnMgdG8gaXQuZGlkbid0IHRyeSAgd2l0aCBhIHRhc2sgSSByZWFsbHkgd2FudGVkLCB0byBoZWxwLiBldmVuIHlldCBDb2xsYWJvcmF0aXZlIGVkaXRpbmcgbmVlZGVkIGEgY29sbGFib3JhdGlvbi4gYmV0d2VlbiBhbGwgb2YgdXNPb3BzISBJdCB0dXJuZWQgb3V0IGN0byBlIGJlIFBTIHRoZSBhcGFlcnBlciB3YXMgd3JvbmcuVyoqcnVuIHNvIGZhc3QgeW91J2QgdGhpbmsgeW91IHdlcmUgdXNpbmcgbmF0aXZlIHN0cmluZ3NUIEknbSBzb3J0IG9mICBzb3J0IG9mIGFwcHJlY2lhdGUgdGhhdCBwYXBlciBub3cuIEl0c1RoZWlyIG1pc3Rha2UgaXNJdHMqKmRlc3BpdGUgd2hhdCBJJ3ZlIGJlZW4gdG9sZCwgc29tZXdoYXQgc29tZSBwZW9wbGUgdGhpbmtzZWVtIHRvICoqCkFuZCBzb21ldGltZXMgdGhlIGJlc3QgY29sbGFib3JhdGlvbnMgYXJlbid0IGJldHdlZW4gcGVlcnMuIEluc3RlYWQgdGhleSBsb29rIGxpa2UgR2lsYmVydCAmIFN1bGxpdmFuLiBPciBKb2JzIGFuZCBXb3puaWFrLiBUaGUgc2FtZSBsb3ZlLCBhbmQgdGhlIHNhbWUgZHJlYW0gYnV0IHRvdGFsbHkgZGlmZmVyZW50IHNraWxsIHNldHMgYnJvdWdodCB0b2dldGhlciBicm91Z2h0IHRvZ2V0aGVyIHRvIGFjaGlldmUgc29tZXRoaW5nIG5vIG9uZSBvZiB1cyBjb3VsZCBhY2hpZXZlIG9uIG91ciBvd24uCgpCdXQgdGhlIHRydXRoIGlzIHdvcmsgbmVlZHMgYS4gQW5kIHRob3NlIGNvbGxhYm9yYXRpb25zIGNhbiB3b3JrIGJlc3Qgd2hlbiB0aGV5TCBhbHQgLSBvbmUgZ3V5IGRpZCB0aGUgbXVzaWMsIHRoZSBvdGhlciB0aGUgbHlyaWNzIC0gb24gZSBndXkgd2FzIHRoZSBzdG9yeXRlbGxlciwgdGhlIG90aGVyIHRoZSBlbmdpbmVlclRoZXkgc2hhcmVkIGFuZWVkZWQgIHRvIGJlIGl0LiBUb2dldGhlciB0aGV5IG1hZGUgc29tZXRoaW5nIG5vIG5vb25lIG9mIHRoZW0gY291bGQgbWFrZSBhbG9uZ2UuRUJ1dEFuZCB5ZXQgV2hvIGNvdWxkIGhhdmUgZ3Vlc3NlZCFmYXN0ZXIgYW5kIHVzdGhlbSBmaW5hbGx5ICoqdGhhdCBsb3RzIG9mIGFyZSBwcmV0dHkgc2xvdyBsaWtlIGEga2luZCBvZiB3cm9uZyoqLiBUaGV5J3JlIHBlb3BsZVtdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0dpbGJlcnRfYW5kX1N1bGxpdmFuKSB0aGF0IGRyZWFtYiBiZSBhY2hpZXZlZGluc3RlYSBkIG9mIHN0cm9vcmluZyBpbmZvcm1hdGlvbiBhbGwgdGhlIGV4dGFyYSBpbmZvcm1hdGlvbiB0byBtYWtlIGNvbGxhYm9yYXRpdmUgZWRpdGluZyB3b3JrLCB3ZSBqdXN0ZSBhbGwgdGhlIGNvbnRlbnQubXVjaCBvdmVyaGVhZCB0aGVyZSBUaGlzIG9idml1b3VzbHkgd29uJ3VsZG4ndHRocm93cyBhd2F5IGFsbCB0aGUgaW5mcm9tYW9ybWF0aW9uIHdlIG5lZWQgZm9yIGFjb2xsYWJvcmFpdGF0aXZlIGVkaXRpbmcsIGJ1dCBpdGV4dHJhIHRvIG1ha2Ugd29ya2Nhbko6W10oaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vam9zZXBoZy8xM2VmYzE0NDQ2NjBjMDc4NzBmY2JkMGIzZTkxNzYzOCNmaWxlLWpzX2Jhc2VsaW5lLWpzLUwzNy1MNDEpIGJlbmNobWFya0l0IHR1cm5zIG91dCBqKiphdXRvbWVyZ2UgKHYxLjAuMC1wcmV2aWV3MilhdXRvbWVyZ2UgKHYxLjAuMC1wcmV2aWV3MilJLCBhbmQgdGhlIGNvZGUuW1tdKGh0dHBzOi8vZ2l0aHViLmNvbS9hdXRvbWVyZ2UvYXV0b21lcmdlLXJzLylPbiB0aGlzIHRlc3QgdGhlIGNvZGVydXN0IGNvZGUgcGVyZm9ybXMgbGFsbW9zdCBBdXRvbWVyZ2Ugd2FzIGp1c3QgbmV2ZXIgd3JpdHRlbiB3aXRoIHBlcmZvcm1hbmNlIGluIG1pbmQuIFRoZWlyIHRlYW0gaXMgd29ya2luZyBvbiBhIHJlcGxhY2VtZW50IFtydXN0IGltcGxlbWVudGF0aW9uIG9mIHRoZSBhbGdvcml0aG1dKGh0dHBzOi8vZ2l0aHViLmNvbS9hdXRvbWVyZ2UvYXV0b21lcmdlLXJzLykgdG8gcnVuIHRocm91Z2ggd2FzbSwgYnV0IGF0IHRoZSB0aW1lIG9mIHdyaXRpbmcgaXQgaGFzbid0IGxhbmRlZCB5ZXQuIE9uIHRoaXMgdGVzdCB0aGUgcnVzdCBjb2RlIHBlcmZvcm1zIGFsbW9zdCppcyBicmFyZWx5IGZhc3RlciB0aGFuIHRoZSBqYXZhc2NyaXB0LiBvbmx5ZXF1aXZhbGVudCAgSSBnb3QgdGhlIG1hc3RlciBicmFuY2ggd29ya2luZywgYnV0IHRoZXkgb2J2aW91c2x5IGhhdmUgc29tZSBraW5rcyB0byB3b3JrIG91dCAtIGl0cyBiYXJlbHkgZmFzdGVyIHRoYW5vbiB0aGlzIHRlc3QgIHRoZSBqYXZhc2NyaXB0IGVxdWl2YWF1dG9tZXJnZSdzIGphdmFzY3JpcHQgY29kZS5dCgotLS1Cc2FpZCBDUkRUcyBhbmQgT1QgYWxnb3JpdGhtc3NheXN3ZSBjYW4gY29tcGV0ZSB3aXRoIHRoZSBwZXJmb3JtYW5jZSBvZiAiIioqIiJndWVzc2VzZ3Vlc3Npbmdhcm91bmRBbmQgaW4gdGhhdCByZWdhcmQsIHRoZXkncmViZWluZyBzb21ldGltZXMgbGF1Z2hlZCBhdCAscnVkZWx5IHNvbWV0aW1lcyh0dGhleSdyZSBmYW1vdXMgZm9ydGhleSBtYWRlIGEgYnVuY2ggb2YgZmFtb3VzIG11c2ljYWxzKS4gT0J1dCB0aGV5IHd3cm90ZSB3cm90ZSBhIGJvZHlkb0lyb25pYyFXaG8gY291bGQgaGF2ZSBndWVzc2VkIUhvdyBpcm9uaWMhID8hIC0tPjwhLS0gIHRvIGh1bWFuIHNjYWxld2UgY2FuIGltYWdpbmUgVGhlIG51bWJlcnMgc2FyZSB0QXQgYSBtaWdodC4gdGFrZXMgQW5kIGV2ZXJ5YSB0YWtlc3IgVEl0IHMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBhIHNpbmdsZSBoZWFydCBiZWF0LCBhbmQgdGhlIHRpbWUgdGFrZW4gdG8gYnJ1c2ggeW91ciB0ZWV0aC4gVGhleSBzaG91bGQgYWRkVGhlIGJvdHRvbSB0d28gcm93cyBzaG91bGQgYWRkIHVwIHRvIG91ciBydXN0IHBlcmZvcm1hbmNlIC0gYnV0K2lzcyAgbGVzcyB0aGFuIFRoZSBydXN0IGltcGxlZW1tZW5ldHRhdGlvbiAgYSBsb3RlbnRyaWVzVGhlIHJ1c3QgcGVyZm9ybWFuY2UgKDY1bXMpIGlzIHRoZSBzaG91bGQgYmUgdGhlIHN1bSBvZiB0aGUgdGltZSBzcGVudCBpbiByb3BleSAoMjltcykgKyB0aGUgdGltZSBzcGVudCBpbiB1cGRhdCBpbmcgbXkgYi10cmVlICgyM21zKS4gQnV0IGl0cyBub3QuVGhlIGRpZmZlcmVuY2UgaXMgcHJvYmFibHkgY2F1c2VkIGJ5ICBvciBzb21ldGhpbmdteSBwZXIgcGVyZm9ybWFuY2UgYWxsIHRoZSB3YXlJdCBsSWYgSSdtIHdyaXRyaWdodCAgUmVtZW1iZXIsIHRoZXNlIHBlcmZvcmFtYW5jZSB0bnVtYmVycyBkZXNjcmliZSBob3cgbXVjaCB0aW1lIGl0IHRha2Ugc3MgdG8gcHJvY2VzcyAyNzYwIDAwMCBvcGVyYXRpb25zLiBTYSAgZnJvbSBhIHNpbmdsZSB1c2VyIGFuIGVkaXRpbmcgdHJhY2Ugb2YgIFdlJ3JlIHByb2Nlc3NpbmcgMjYwIDAwMCBvcGVyYXRpb25zIGluIDIzbXMsIG9yIHdoaWNoIGlzcGVyIGhvbWVlZGl0c0knZCBzdGlsbCBhaHZlaGF2ZWZ1bGwgIGJlbmNobWFyayBCdXQgdGhvc2UgbnVtYmVycyBkb24ndCBhZGR1ICB1cCEsIHRocmFzaGluZywgYmVjYXVzZSBhbGwgdGhlIHVwYi10cmVlIHVwZGF0ZXMgYXJlIGludGVybGVhdmVkIGFmaXJzdCByZXF1aXJlc2ZpZ3VyaW5nIG91dCB5b3VyWW91IGp1c3QgaGF2ZSBhIGxpc3Qgb2YgcGxhY2VzICAtICJVbmRlciB0aGUgY291Y2giLCAiT24gdG9wIG9mIHRoZSByZnJpZGdlIiwgYW5kIHNvIG9uLkFuZCB5b3UgaGF2ZSB0byBPbiB0b3Agb2YgeW91ciBmcmlkZ2UgaXMgYSBsaXR0bGUgbm90ZSBzYXlpbmcgeW91IG5lZWQgdG9vdGhwYXN0ZS5tZW50aW9uaW5nIGFjdHVhbGx5IHRocm91Z2ggeW91cml0cyBnb2luZyB0byB0YWtlIHlvdSBhIGxvbmcgdGltZSB0byAgZ28gZmlndXJlIG91dCB3aGF0IHRvIHV5YnV5LnlvdXIgc2hvcHBpbmcgbGlzdCBkZXNjcmliZXNpbnZvbGlzVGhpcyBpcyBiZWF0IG9mIHlvdXIgaGVhcnQgaXQgdGFrZXNoZWFydGFjdHVhbGx5aXMgIGFjdHVhbGx5OlVuZGVyIHRoZSBjb3VjaCBnb2luZyB0byB0aG9lIGRvaW5nIHRoZSBncm9jZXJ5IHNob3BwaW5nIHdpbGwgYmUgYSBjaG9yZS50aGlzIG1ha2VzIGRvaW5nIHdvdWxkIGJlIGxpa2VhIGxhb3Qgb2Ygb3Qgb2Ygd29yayBXZSAgIFdlIGNhbiBmaXggdGhpcy4gQnV0IChTbyB3aGVuIEkgcGljayB1cCBteSBncm9jZXJ5IGxpc3QsIGl0IGhhcyBhbGwgdGhlIGluZm9ybWF0aW9uIEkgbmVlZCkuTCBmb3IgdGhpcyByZWFzb25leGFjdGx5IHRoaXMgcmVhc29uIGh0aGluZ3Mgb3RoZXIgdGhhbiB0ZXh0IGVkaXRpbmd0aGUgcHJvZ3JtYW1hIHNpbmdsZSByZWFkIG9mIG15ICB0ZWxscyBtZSB0byBrbm93QW5kICwgd2hpY2ggaW4geWpzIGhhcyBsaW5lYXIgcGVyZm9ybWFuY2VhICBjb3N0VGhpcyBkb2Vzbid0IGhhcHBlIG4gbnVtbXVjaCBpbiBhIHRleHQgZG9jdXdoZW4gdGV4dCBlZGl0aW5nLCBidXQgIGluIG90aGVyIGNhc2VzIHRvb25lZWR3b3VsZCBjb250ZWxsIHVzbWV1cyBldmVyeXRoaW5nIHdlIGRhdGFiYXNlIHVzaW5nICdyZSBiZSBpbnZvbHZlIHBlb3BsZSB3aXRoIGRpZmZlcmVudCBza2lsbHNldHNtYXliZSB3ZSB3b3VsZAoKTWFydGluIGV4cGxhaW5zIGlNYXJ0aW4gZXhwbGFpbnMgQXV0b21lcmdlYSBmYXIgYmV0dGVyIHRoYW4gSSB3aWxsIGluIHRoaXMgdGFsazoKCjxpZnJhbWUgd2lkdGg9IjU2MCIgaGVpZ2h0PSIzMTUiIHNyYz0iaHR0cHM6Ly93d3cueW91dHViZS1ub2Nvb2tpZS5jb20vZW1iZWQveDdkckUyNGdlVXc/c3RhcnQ9MTIzNyIgdGl0bGU9IllvdVR1YmUgdmlkZW8gcGxheWVyIiBmcmFtZWJvcmRlcj0iMCIgYWxsb3c9ImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmUiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT52ZXYgZnJvbSAyMDIwCgpJbWFnaW5lIEkuIGludG8gYW4gZW1wdHkgZG9jdW1lbnQuQUE8aW1nIHNyYz0iZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhodGJHNXpPbmhzYVc1clBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1TDNoc2FXNXJJaUIyWlhKemFXOXVQU0l4TGpFaUlIZHBaSFJvUFNJeE9URndlQ0lnYUdWcFoyaDBQU0l4TmpGd2VDSWdkbWxsZDBKdmVEMGlMVEF1TlNBdE1DNDFJREU1TVNBeE5qRWlQanhrWldaekx6NDhaejQ4Y0dGMGFDQmtQU0pOSURVd0lEWXdJRXdnTWpBZ05qQWdUQ0F5TUNBME5pNHpOeUlnWm1sc2JEMGlibTl1WlNJZ2MzUnliMnRsUFNJak1qUXlOREkwSWlCemRISnZhMlV0YldsMFpYSnNhVzFwZEQwaU1UQWlJSEJ2YVc1MFpYSXRaWFpsYm5SelBTSnpkSEp2YTJVaUx6NDhjR0YwYUNCa1BTSk5JREl3SURReExqRXlJRXdnTWpNdU5TQTBPQzR4TWlCTUlESXdJRFEyTGpNM0lFd2dNVFl1TlNBME9DNHhNaUJhSWlCbWFXeHNQU0lqTWpReU5ESTBJaUJ6ZEhKdmEyVTlJaU15TkRJME1qUWlJSE4wY205clpTMXRhWFJsY214cGJXbDBQU0l4TUNJZ2NHOXBiblJsY2kxbGRtVnVkSE05SW1Gc2JDSXZQanh5WldOMElIZzlJalV3SWlCNVBTSTBNQ0lnZDJsa2RHZzlJalF3SWlCb1pXbG5hSFE5SWpRd0lpQm1hV3hzUFNJalptWm1abVptSWlCemRISnZhMlU5SWlNd01EQXdNREFpSUhCdmFXNTBaWEl0WlhabGJuUnpQU0poYkd3aUx6NDhaeUIwY21GdWMyWnZjbTA5SW5SeVlXNXpiR0YwWlNndE1DNDFJQzB3TGpVcElqNDhjM2RwZEdOb1BqeG1iM0psYVdkdVQySnFaV04wSUhOMGVXeGxQU0p2ZG1WeVpteHZkem9nZG1semFXSnNaVHNnZEdWNGRDMWhiR2xuYmpvZ2JHVm1kRHNpSUhCdmFXNTBaWEl0WlhabGJuUnpQU0p1YjI1bElpQjNhV1IwYUQwaU1UQXdKU0lnYUdWcFoyaDBQU0l4TURBbElpQnlaWEYxYVhKbFpFWmxZWFIxY21WelBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OVVVaTlUVmtjeE1TOW1aV0YwZFhKbEkwVjRkR1Z1YzJsaWFXeHBkSGtpUGp4a2FYWWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUdoMGJXd2lJSE4wZVd4bFBTSmthWE53YkdGNU9pQm1iR1Y0T3lCaGJHbG5iaTFwZEdWdGN6b2dkVzV6WVdabElHTmxiblJsY2pzZ2FuVnpkR2xtZVMxamIyNTBaVzUwT2lCMWJuTmhabVVnWTJWdWRHVnlPeUIzYVdSMGFEb2dNemh3ZURzZ2FHVnBaMmgwT2lBeGNIZzdJSEJoWkdScGJtY3RkRzl3T2lBMk1IQjRPeUJ0WVhKbmFXNHRiR1ZtZERvZ05URndlRHNpUGp4a2FYWWdjM1I1YkdVOUltSnZlQzF6YVhwcGJtYzZJR0p2Y21SbGNpMWliM2c3SUdadmJuUXRjMmw2WlRvZ01Ec2dkR1Y0ZEMxaGJHbG5iam9nWTJWdWRHVnlPeUFpUGp4a2FYWWdjM1I1YkdVOUltUnBjM0JzWVhrNklHbHViR2x1WlMxaWJHOWphenNnWm05dWRDMXphWHBsT2lBeE1uQjRPeUJtYjI1MExXWmhiV2xzZVRvZ1NHVnNkbVYwYVdOaE95QmpiMnh2Y2pvZ0l6QXdNREF3TURzZ2JHbHVaUzFvWldsbmFIUTZJREV1TWpzZ2NHOXBiblJsY2kxbGRtVnVkSE02SUdGc2JEc2dkMmhwZEdVdGMzQmhZMlU2SUc1dmNtMWhiRHNnZDI5eVpDMTNjbUZ3T2lCdWIzSnRZV3c3SUNJK1lUd3ZaR2wyUGp3dlpHbDJQand2WkdsMlBqd3ZabTl5WldsbmJrOWlhbVZqZEQ0OGRHVjRkQ0I0UFNJM01DSWdlVDBpTmpRaUlHWnBiR3c5SWlNd01EQXdNREFpSUdadmJuUXRabUZ0YVd4NVBTSklaV3gyWlhScFkyRWlJR1p2Ym5RdGMybDZaVDBpTVRKd2VDSWdkR1Y0ZEMxaGJtTm9iM0k5SW0xcFpHUnNaU0krWVR3dmRHVjRkRDQ4TDNOM2FYUmphRDQ4TDJjK1BIQmhkR2dnWkQwaVRTQXhNREFnTVRBd0lFd2dOekFnTVRBd0lFd2dOekFnT0RZdU16Y2lJR1pwYkd3OUltNXZibVVpSUhOMGNtOXJaVDBpSXpJME1qUXlOQ0lnYzNSeWIydGxMVzFwZEdWeWJHbHRhWFE5SWpFd0lpQndiMmx1ZEdWeUxXVjJaVzUwY3owaWMzUnliMnRsSWk4K1BIQmhkR2dnWkQwaVRTQTNNQ0E0TVM0eE1pQk1JRGN6TGpVZ09EZ3VNVElnVENBM01DQTROaTR6TnlCTUlEWTJMalVnT0RndU1USWdXaUlnWm1sc2JEMGlJekkwTWpReU5DSWdjM1J5YjJ0bFBTSWpNalF5TkRJMElpQnpkSEp2YTJVdGJXbDBaWEpzYVcxcGREMGlNVEFpSUhCdmFXNTBaWEl0WlhabGJuUnpQU0poYkd3aUx6NDhjbVZqZENCNFBTSXhNREFpSUhrOUlqZ3dJaUIzYVdSMGFEMGlOREFpSUdobGFXZG9kRDBpTkRBaUlHWnBiR3c5SWlObVptWm1abVlpSUhOMGNtOXJaVDBpYm05dVpTSWdjRzlwYm5SbGNpMWxkbVZ1ZEhNOUltRnNiQ0l2UGp4bklIUnlZVzV6Wm05eWJUMGlkSEpoYm5Oc1lYUmxLQzB3TGpVZ0xUQXVOU2tpUGp4emQybDBZMmcrUEdadmNtVnBaMjVQWW1wbFkzUWdjM1I1YkdVOUltOTJaWEptYkc5M09pQjJhWE5wWW14bE95QjBaWGgwTFdGc2FXZHVPaUJzWldaME95SWdjRzlwYm5SbGNpMWxkbVZ1ZEhNOUltNXZibVVpSUhkcFpIUm9QU0l4TURBbElpQm9aV2xuYUhROUlqRXdNQ1VpSUhKbGNYVnBjbVZrUm1WaGRIVnlaWE05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTDFSU0wxTldSekV4TDJabFlYUjFjbVVqUlhoMFpXNXphV0pwYkdsMGVTSStQR1JwZGlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRhSFJ0YkNJZ2MzUjViR1U5SW1ScGMzQnNZWGs2SUdac1pYZzdJR0ZzYVdkdUxXbDBaVzF6T2lCMWJuTmhabVVnWTJWdWRHVnlPeUJxZFhOMGFXWjVMV052Ym5SbGJuUTZJSFZ1YzJGbVpTQmpaVzUwWlhJN0lIZHBaSFJvT2lBek9IQjRPeUJvWldsbmFIUTZJREZ3ZURzZ2NHRmtaR2x1WnkxMGIzQTZJREV3TUhCNE95QnRZWEpuYVc0dGJHVm1kRG9nTVRBeGNIZzdJajQ4WkdsMklITjBlV3hsUFNKaWIzZ3RjMmw2YVc1bk9pQmliM0prWlhJdFltOTRPeUJtYjI1MExYTnBlbVU2SURBN0lIUmxlSFF0WVd4cFoyNDZJR05sYm5SbGNqc2dJajQ4WkdsMklITjBlV3hsUFNKa2FYTndiR0Y1T2lCcGJteHBibVV0WW14dlkyczdJR1p2Ym5RdGMybDZaVG9nTVRKd2VEc2dabTl1ZEMxbVlXMXBiSGs2SUVobGJIWmxkR2xqWVRzZ1kyOXNiM0k2SUNNd01EQXdNREE3SUd4cGJtVXRhR1ZwWjJoME9pQXhMakk3SUhCdmFXNTBaWEl0WlhabGJuUnpPaUJoYkd3N0lIZG9hWFJsTFhOd1lXTmxPaUJ1YjNKdFlXdzdJSGR2Y21RdGQzSmhjRG9nYm05eWJXRnNPeUFpUG1JOEwyUnBkajQ4TDJScGRqNDhMMlJwZGo0OEwyWnZjbVZwWjI1UFltcGxZM1ErUEhSbGVIUWdlRDBpTVRJd0lpQjVQU0l4TURRaUlHWnBiR3c5SWlNd01EQXdNREFpSUdadmJuUXRabUZ0YVd4NVBTSklaV3gyWlhScFkyRWlJR1p2Ym5RdGMybDZaVDBpTVRKd2VDSWdkR1Y0ZEMxaGJtTm9iM0k5SW0xcFpHUnNaU0krWWp3dmRHVjRkRDQ4TDNOM2FYUmphRDQ4TDJjK1BIQmhkR2dnWkQwaVRTQXhOVEFnTVRRd0lFd2dNVEl3SURFME1DQk1JREV5TUNBeE1qWXVNemNpSUdacGJHdzlJbTV2Ym1VaUlITjBjbTlyWlQwaUl6STBNalF5TkNJZ2MzUnliMnRsTFcxcGRHVnliR2x0YVhROUlqRXdJaUJ3YjJsdWRHVnlMV1YyWlc1MGN6MGljM1J5YjJ0bElpOCtQSEJoZEdnZ1pEMGlUU0F4TWpBZ01USXhMakV5SUV3Z01USXpMalVnTVRJNExqRXlJRXdnTVRJd0lERXlOaTR6TnlCTUlERXhOaTQxSURFeU9DNHhNaUJhSWlCbWFXeHNQU0lqTWpReU5ESTBJaUJ6ZEhKdmEyVTlJaU15TkRJME1qUWlJSE4wY205clpTMXRhWFJsY214cGJXbDBQU0l4TUNJZ2NHOXBiblJsY2kxbGRtVnVkSE05SW1Gc2JDSXZQanh5WldOMElIZzlJakUxTUNJZ2VUMGlNVEl3SWlCM2FXUjBhRDBpTkRBaUlHaGxhV2RvZEQwaU5EQWlJR1pwYkd3OUlpTm1abVptWm1ZaUlITjBjbTlyWlQwaWJtOXVaU0lnY0c5cGJuUmxjaTFsZG1WdWRITTlJbUZzYkNJdlBqeG5JSFJ5WVc1elptOXliVDBpZEhKaGJuTnNZWFJsS0Mwd0xqVWdMVEF1TlNraVBqeHpkMmwwWTJnK1BHWnZjbVZwWjI1UFltcGxZM1FnYzNSNWJHVTlJbTkyWlhKbWJHOTNPaUIyYVhOcFlteGxPeUIwWlhoMExXRnNhV2R1T2lCc1pXWjBPeUlnY0c5cGJuUmxjaTFsZG1WdWRITTlJbTV2Ym1VaUlIZHBaSFJvUFNJeE1EQWxJaUJvWldsbmFIUTlJakV3TUNVaUlISmxjWFZwY21Wa1JtVmhkSFZ5WlhNOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkwxUlNMMU5XUnpFeEwyWmxZWFIxY21ValJYaDBaVzV6YVdKcGJHbDBlU0krUEdScGRpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YUhSdGJDSWdjM1I1YkdVOUltUnBjM0JzWVhrNklHWnNaWGc3SUdGc2FXZHVMV2wwWlcxek9pQjFibk5oWm1VZ1kyVnVkR1Z5T3lCcWRYTjBhV1o1TFdOdmJuUmxiblE2SUhWdWMyRm1aU0JqWlc1MFpYSTdJSGRwWkhSb09pQXpPSEI0T3lCb1pXbG5hSFE2SURGd2VEc2djR0ZrWkdsdVp5MTBiM0E2SURFME1IQjRPeUJ0WVhKbmFXNHRiR1ZtZERvZ01UVXhjSGc3SWo0OFpHbDJJSE4wZVd4bFBTSmliM2d0YzJsNmFXNW5PaUJpYjNKa1pYSXRZbTk0T3lCbWIyNTBMWE5wZW1VNklEQTdJSFJsZUhRdFlXeHBaMjQ2SUdObGJuUmxjanNnSWo0OFpHbDJJSE4wZVd4bFBTSmthWE53YkdGNU9pQnBibXhwYm1VdFlteHZZMnM3SUdadmJuUXRjMmw2WlRvZ01USndlRHNnWm05dWRDMW1ZVzFwYkhrNklFaGxiSFpsZEdsallUc2dZMjlzYjNJNklDTXdNREF3TURBN0lHeHBibVV0YUdWcFoyaDBPaUF4TGpJN0lIQnZhVzUwWlhJdFpYWmxiblJ6T2lCaGJHdzdJSGRvYVhSbExYTndZV05sT2lCdWIzSnRZV3c3SUhkdmNtUXRkM0poY0RvZ2JtOXliV0ZzT3lBaVBtTThMMlJwZGo0OEwyUnBkajQ4TDJScGRqNDhMMlp2Y21WcFoyNVBZbXBsWTNRK1BIUmxlSFFnZUQwaU1UY3dJaUI1UFNJeE5EUWlJR1pwYkd3OUlpTXdNREF3TURBaUlHWnZiblF0Wm1GdGFXeDVQU0pJWld4MlpYUnBZMkVpSUdadmJuUXRjMmw2WlQwaU1USndlQ0lnZEdWNGRDMWhibU5vYjNJOUltMXBaR1JzWlNJK1l6d3ZkR1Y0ZEQ0OEwzTjNhWFJqYUQ0OEwyYytQSEpsWTNRZ2VEMGlNQ0lnZVQwaU1DSWdkMmxrZEdnOUlqUXdJaUJvWldsbmFIUTlJalF3SWlCbWFXeHNQU0lqWm1abVptWm1JaUJ6ZEhKdmEyVTlJaU13TURBd01EQWlJSEJ2YVc1MFpYSXRaWFpsYm5SelBTSmhiR3dpTHo0OFp5QjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2d0TUM0MUlDMHdMalVwSWo0OGMzZHBkR05vUGp4bWIzSmxhV2R1VDJKcVpXTjBJSE4wZVd4bFBTSnZkbVZ5Wm14dmR6b2dkbWx6YVdKc1pUc2dkR1Y0ZEMxaGJHbG5iam9nYkdWbWREc2lJSEJ2YVc1MFpYSXRaWFpsYm5SelBTSnViMjVsSWlCM2FXUjBhRDBpTVRBd0pTSWdhR1ZwWjJoMFBTSXhNREFsSWlCeVpYRjFhWEpsWkVabFlYUjFjbVZ6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk5VVVpOVRWa2N4TVM5bVpXRjBkWEpsSTBWNGRHVnVjMmxpYVd4cGRIa2lQanhrYVhZZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR2gwYld3aUlITjBlV3hsUFNKa2FYTndiR0Y1T2lCbWJHVjRPeUJoYkdsbmJpMXBkR1Z0Y3pvZ2RXNXpZV1psSUdObGJuUmxjanNnYW5WemRHbG1lUzFqYjI1MFpXNTBPaUIxYm5OaFptVWdZMlZ1ZEdWeU95QjNhV1IwYURvZ016aHdlRHNnYUdWcFoyaDBPaUF4Y0hnN0lIQmhaR1JwYm1jdGRHOXdPaUF5TUhCNE95QnRZWEpuYVc0dGJHVm1kRG9nTVhCNE95SStQR1JwZGlCemRIbHNaVDBpWW05NExYTnBlbWx1WnpvZ1ltOXlaR1Z5TFdKdmVEc2dabTl1ZEMxemFYcGxPaUF3T3lCMFpYaDBMV0ZzYVdkdU9pQmpaVzUwWlhJN0lDSStQR1JwZGlCemRIbHNaVDBpWkdsemNHeGhlVG9nYVc1c2FXNWxMV0pzYjJOck95Qm1iMjUwTFhOcGVtVTZJREV5Y0hnN0lHWnZiblF0Wm1GdGFXeDVPaUJJWld4MlpYUnBZMkU3SUdOdmJHOXlPaUFqTURBd01EQXdPeUJzYVc1bExXaGxhV2RvZERvZ01TNHlPeUJ3YjJsdWRHVnlMV1YyWlc1MGN6b2dZV3hzT3lCbWIyNTBMWE4wZVd4bE9pQnBkR0ZzYVdNN0lIZG9hWFJsTFhOd1lXTmxPaUJ1YjNKdFlXdzdJSGR2Y21RdGQzSmhjRG9nYm05eWJXRnNPeUFpUGloeWIyOTBLVHd2WkdsMlBqd3ZaR2wyUGp3dlpHbDJQand2Wm05eVpXbG5iazlpYW1WamRENDhkR1Y0ZENCNFBTSXlNQ0lnZVQwaU1qUWlJR1pwYkd3OUlpTXdNREF3TURBaUlHWnZiblF0Wm1GdGFXeDVQU0pJWld4MlpYUnBZMkVpSUdadmJuUXRjMmw2WlQwaU1USndlQ0lnZEdWNGRDMWhibU5vYjNJOUltMXBaR1JzWlNJZ1ptOXVkQzF6ZEhsc1pUMGlhWFJoYkdsaklqNG9jbTl2ZENrOEwzUmxlSFErUEM5emQybDBZMmcrUEM5blBqd3ZaejQ4YzNkcGRHTm9QanhuSUhKbGNYVnBjbVZrUm1WaGRIVnlaWE05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTDFSU0wxTldSekV4TDJabFlYUjFjbVVqUlhoMFpXNXphV0pwYkdsMGVTSXZQanhoSUhSeVlXNXpabTl5YlQwaWRISmhibk5zWVhSbEtEQXNMVFVwSWlCNGJHbHVhenBvY21WbVBTSm9kSFJ3Y3pvdkwzZDNkeTVrYVdGbmNtRnRjeTV1WlhRdlpHOWpMMlpoY1M5emRtY3RaWGh3YjNKMExYUmxlSFF0Y0hKdllteGxiWE1pSUhSaGNtZGxkRDBpWDJKc1lXNXJJajQ4ZEdWNGRDQjBaWGgwTFdGdVkyaHZjajBpYldsa1pHeGxJaUJtYjI1MExYTnBlbVU5SWpFd2NIZ2lJSGc5SWpVd0pTSWdlVDBpTVRBd0pTSStWbWxsZDJWeUlHUnZaWE1nYm05MElITjFjSEJ2Y25RZ1puVnNiQ0JUVmtjZ01TNHhQQzkwWlhoMFBqd3ZZVDQ4TDNOM2FYUmphRDQ4TDNOMlp6ND0iIC8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMTkycHgiIHZpZXdCb3g9Ii0wLjUgLTAuNSAxOTIgMTYyIiBzdHlsZT0ibWF4LXdpZHRoOjEwMCU7bWF4LWhlaWdodDoxNjJweDsiPjxkZWZzLz48Zz48cGF0aCBkPSJNIDUxIDYxIEwgMjEgNjEgTCAyMSA0Ny4zNyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjQyNDI0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJzdHJva2UiLz48cGF0aCBkPSJNIDIxIDQyLjEyIEwgMjQuNSA0OS4xMiBMIDIxIDQ3LjM3IEwgMTcuNSA0OS4xMiBaIiBmaWxsPSIjMjQyNDI0IiBzdHJva2U9IiMyNDI0MjQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxyZWN0IHg9IjUxIiB5PSI0MSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM4MDgwODAiIHN0cm9rZS13aWR0aD0iMiIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyIgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiAzOHB4OyBoZWlnaHQ6IDFweDsgcGFkZGluZy10b3A6IDYxcHg7IG1hcmdpbi1sZWZ0OiA1MnB4OyI+PGRpdiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwOyB0ZXh0LWFsaWduOiBjZW50ZXI7ICI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiAjMDAwMDAwOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyB3b3JkLXdyYXA6IG5vcm1hbDsgIj5hPC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjcxIiB5PSI2NSIgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIxMnB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5hPC90ZXh0Pjwvc3dpdGNoPjwvZz48cGF0aCBkPSJNIDEwMSAxMDEgTCA3MSAxMDEgTCA3MSA4Ny4zNyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjQyNDI0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJzdHJva2UiLz48cGF0aCBkPSJNIDcxIDgyLjEyIEwgNzQuNSA4OS4xMiBMIDcxIDg3LjM3IEwgNjcuNSA4OS4xMiBaIiBmaWxsPSIjMjQyNDI0IiBzdHJva2U9IiMyNDI0MjQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxyZWN0IHg9IjEwMSIgeT0iODEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjODA4MDgwIiBzdHJva2Utd2lkdGg9IjIiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzogdmlzaWJsZTsgdGV4dC1hbGlnbjogbGVmdDsiIHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogdW5zYWZlIGNlbnRlcjsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogMzhweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiAxMDFweDsgbWFyZ2luLWxlZnQ6IDEwMnB4OyI+PGRpdiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwOyB0ZXh0LWFsaWduOiBjZW50ZXI7ICI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiAjMDAwMDAwOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyB3b3JkLXdyYXA6IG5vcm1hbDsgIj5iPC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjEyMSIgeT0iMTA1IiBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjEycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmI8L3RleHQ+PC9zd2l0Y2g+PC9nPjxwYXRoIGQ9Ik0gMTUxIDE0MSBMIDEyMSAxNDEgTCAxMjEgMTI3LjM3IiBmaWxsPSJub25lIiBzdHJva2U9IiMyNDI0MjQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9InN0cm9rZSIvPjxwYXRoIGQ9Ik0gMTIxIDEyMi4xMiBMIDEyNC41IDEyOS4xMiBMIDEyMSAxMjcuMzcgTCAxMTcuNSAxMjkuMTIgWiIgZmlsbD0iIzI0MjQyNCIgc3Ryb2tlPSIjMjQyNDI0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48cmVjdCB4PSIxNTEiIHk9IjEyMSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM4MDgwODAiIHN0cm9rZS13aWR0aD0iMiIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyIgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiAzOHB4OyBoZWlnaHQ6IDFweDsgcGFkZGluZy10b3A6IDE0MXB4OyBtYXJnaW4tbGVmdDogMTUycHg7Ij48ZGl2IHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDA7IHRleHQtYWxpZ246IGNlbnRlcjsgIj48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6ICMwMDAwMDA7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBhbGw7IHdoaXRlLXNwYWNlOiBub3JtYWw7IHdvcmQtd3JhcDogbm9ybWFsOyAiPmM8L2Rpdj48L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iMTcxIiB5PSIxNDUiIGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTJweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+YzwvdGV4dD48L3N3aXRjaD48L2c+PHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM4MDgwODAiIHN0cm9rZS13aWR0aD0iMiIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyIgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiAzOHB4OyBoZWlnaHQ6IDFweDsgcGFkZGluZy10b3A6IDIxcHg7IG1hcmdpbi1sZWZ0OiAycHg7Ij48ZGl2IHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDA7IHRleHQtYWxpZ246IGNlbnRlcjsgIj48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6ICMwMDAwMDA7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBhbGw7IGZvbnQtc3R5bGU6IGl0YWxpYzsgd2hpdGUtc3BhY2U6IG5vcm1hbDsgd29yZC13cmFwOiBub3JtYWw7ICI+KHJvb3QpPC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjIxIiB5PSIyNSIgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIxMnB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXN0eWxlPSJpdGFsaWMiPihyb290KTwvdGV4dD48L3N3aXRjaD48L2c+PC9nPjxzd2l0Y2g+PGcgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5Ii8+PGEgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtNSkiIHhsaW5rOmhyZWY9Imh0dHBzOi8vd3d3LmRpYWdyYW1zLm5ldC9kb2MvZmFxL3N2Zy1leHBvcnQtdGV4dC1wcm9ibGVtcyIgdGFyZ2V0PSJfYmxhbmsiPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTBweCIgeD0iNTAlIiB5PSIxMDAlIj5WaWV3ZXIgZG9lcyBub3Qgc3VwcG9ydCBmdWxsIFNWRyAxLjE8L3RleHQ+PC9hPjwvc3dpdGNoPjwvc3ZnPgoKPiBhdXRvbWVyZ2UxLmRyYXdpby5zdmdhdXRvbWVyZ2UyLmRyYWlvd2lvLnN2Zy4gSGFuZyBvbiwgaG93IGRvIHdlIGZpZ3VyZSBvdXQgd2hpY2ggY2hhcmFjdGVyIGdvZXMgZmlyc3Q/IFdCdXQgaGNvdWxkIGp1c3QgcGlja2VkIGNvbmN1cnJlbnRseSBpbiB0aGUgZG9jdW1lbnRzb3J0IGJ5IHRoZWlyIHVhZ2VudCBvciBzb21ldGhpbmcsIG91c2luZ2NvdWxkbU1pa2UgaW5zZXJ0ZWQgKlgqc29tZXRpbmhpbmcgKFJHQSkgIFRoZSBydWxlIGlzIHRoYXQgdGhlIGJpZ2dld2hlbmV2ZXJjaGlsZHJlbiBhcmUgc29ydGVkIGZpcnN0IGJhc2VkIG9uIHRoZWlzcnJpciBzZXF1ZW5jZSBudW1iZXJzIChidWdpZ2dlciBzZXF1ZW5jZSBudW1iZXIgZmlyc3QpLiBUaGVuIHRoZXkncmUgT25JZiB0aGUgc2VxdWVuY2UgbnVtYmVycyBtYXRjaCwgdGhleSBnZXRPbmx5IGlmICBzb3J0ZWQgYmFzZWQgb24gdGhlaXIgSSB0aGV5IG11c3QgYmUgY29uY3VycmVudCBjaGFuZ2VzLiBJbiB0aGF0IGNhc2VhcmJpdHJhcmlseSBhZ2VudCBJRHMuCgp0aGUgY2hhbmdlc3dlIHNvcnQgdGhlbWNhbiAgKFdlIGRvIHRoaXMgYmVjYXVzZSB3ZWFsbCBwZWVyc2l0cyBpbXBvcnRhbnQgYWxsIHBlZXJzIG5lZW5kIHVwIHdpdGggdGhlIHNhbWUgZG9jdW1lbnQpLiBpdCB0aGlzIHdheXNvIHJlc3VsdGluZzZJJ21pbmdsbCBjb21wYXJlIGVkaXRzIGRvZnJvbSBtaWNyb29wdGltaXphdGlvbnMgLSAtLkIgbG90cyBvZiBJZiBJIHdlcndlZSBnb2luZyB0byBidWlsZCBjb2xjc29mdHdhcmUgd2hpY2ggc3VwcG9ydGVzIGNvbGxhYm9yYXRpdmUgZWRpdGluZyB0b2RheSwgSSdkIGJ1aWxkIGl0IG9uIHlqcy5ZdXNlIApXZVRoaXMgaXMgYSBjaGFydCBvZiBhdXRvbWVyZ2UncyBBdXRvbWVyZ2VUaGlzIGlzIGEgY2hhcnQgb2YgYXV0b21lcmdlCgo8c3ZnIGNsYXNzPSJwbG90IiBmaWxsPSJjdXJyZW50Q29sb3IiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHdpZHRoPSI3MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNzAwIDQwMCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAsMCkiIGZpbGw9Im5vbmUiIHRleHQtYW5jaG9yPSJlbmQiPjxnIGNsYXNzPSJ0aWNrIiBvcGFjaXR5PSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDM3MC41KSI+PGxpbmUgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHgyPSItNiI+PC9saW5lPjxsaW5lIHN0cm9rZT0iY3VycmVudENvbG9yIiB4Mj0iNjAwIiBzdHJva2Utb3BhY2l0eT0iMC4xIj48L2xpbmU+PHRleHQgZmlsbD0iY3VycmVudENvbG9yIiB4PSItOSIgZHk9IjAuMzJlbSI+MC4wPC90ZXh0PjwvZz48ZyBjbGFzcz0idGljayIgb3BhY2l0eT0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwzMjIuNDk2MzczNzc4NjU0OTcpIj48bGluZSBzdHJva2U9ImN1cnJlbnRDb2xvciIgeDI9Ii02Ij48L2xpbmU+PGxpbmUgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHgyPSI2MDAiIHN0cm9rZS1vcGFjaXR5PSIwLjEiPjwvbGluZT48dGV4dCBmaWxsPSJjdXJyZW50Q29sb3IiIHg9Ii05IiBkeT0iMC4zMmVtIj4wLjU8L3RleHQ+PC9nPjxnIGNsYXNzPSJ0aWNrIiBvcGFjaXR5PSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDI3NC40OTI3NDc1NTczMDk5KSI+PGxpbmUgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHgyPSItNiI+PC9saW5lPjxsaW5lIHN0cm9rZT0iY3VycmVudENvbG9yIiB4Mj0iNjAwIiBzdHJva2Utb3BhY2l0eT0iMC4xIj48L2xpbmU+PHRleHQgZmlsbD0iY3VycmVudENvbG9yIiB4PSItOSIgZHk9IjAuMzJlbSI+MS4wPC90ZXh0PjwvZz48ZyBjbGFzcz0idGljayIgb3BhY2l0eT0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwyMjYuNDg5MTIxMzM1OTY0ODUpIj48bGluZSBzdHJva2U9ImN1cnJlbnRDb2xvciIgeDI9Ii02Ij48L2xpbmU+PGxpbmUgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHgyPSI2MDAiIHN0cm9rZS1vcGFjaXR5PSIwLjEiPjwvbGluZT48dGV4dCBmaWxsPSJjdXJyZW50Q29sb3IiIHg9Ii05IiBkeT0iMC4zMmVtIj4xLjU8L3RleHQ+PC9nPjxnIGNsYXNzPSJ0aWNrIiBvcGFjaXR5PSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDE3OC40ODU0OTUxMTQ2MTk4MikiPjxsaW5lIHN0cm9rZT0iY3VycmVudENvbG9yIiB4Mj0iLTYiPjwvbGluZT48bGluZSBzdHJva2U9ImN1cnJlbnRDb2xvciIgeDI9IjYwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSI+PC9saW5lPjx0ZXh0IGZpbGw9ImN1cnJlbnRDb2xvciIgeD0iLTkiIGR5PSIwLjMyZW0iPjIuMDwvdGV4dD48L2c+PGcgY2xhc3M9InRpY2siIG9wYWNpdHk9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMTMwLjQ4MTg2ODg5MzI3NDc2KSI+PGxpbmUgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHgyPSItNiI+PC9saW5lPjxsaW5lIHN0cm9rZT0iY3VycmVudENvbG9yIiB4Mj0iNjAwIiBzdHJva2Utb3BhY2l0eT0iMC4xIj48L2xpbmU+PHRleHQgZmlsbD0iY3VycmVudENvbG9yIiB4PSItOSIgZHk9IjAuMzJlbSI+Mi41PC90ZXh0PjwvZz48ZyBjbGFzcz0idGljayIgb3BhY2l0eT0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCw4Mi40NzgyNDI2NzE5Mjk3MikiPjxsaW5lIHN0cm9rZT0iY3VycmVudENvbG9yIiB4Mj0iLTYiPjwvbGluZT48bGluZSBzdHJva2U9ImN1cnJlbnRDb2xvciIgeDI9IjYwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSI+PC9saW5lPjx0ZXh0IGZpbGw9ImN1cnJlbnRDb2xvciIgeD0iLTkiIGR5PSIwLjMyZW0iPjMuMDwvdGV4dD48L2c+PGcgY2xhc3M9InRpY2siIG9wYWNpdHk9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMzQuNDc0NjE2NDUwNTg0NjcpIj48bGluZSBzdHJva2U9ImN1cnJlbnRDb2xvciIgeDI9Ii02Ij48L2xpbmU+PGxpbmUgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHgyPSI2MDAiIHN0cm9rZS1vcGFjaXR5PSIwLjEiPjwvbGluZT48dGV4dCBmaWxsPSJjdXJyZW50Q29sb3IiIHg9Ii05IiBkeT0iMC4zMmVtIj4zLjU8L3RleHQ+PC9nPjx0ZXh0IGZpbGw9ImN1cnJlbnRDb2xvciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQwLDIwKSIgZHk9Ii0xZW0iIHRleHQtYW5jaG9yPSJzdGFydCI+4oaRIHRpbWUgcGVyIHR4biAobXMpPC90ZXh0PjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDM3MCkiIGZpbGw9Im5vbmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjxnIGNsYXNzPSJ0aWNrIiBvcGFjaXR5PSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC41LDApIj48bGluZSBzdHJva2U9ImN1cnJlbnRDb2xvciIgeTI9IjYiPjwvbGluZT48bGluZSBzdHJva2U9ImN1cnJlbnRDb2xvciIgeTI9Ii0zNTAiIHN0cm9rZS1vcGFjaXR5PSIwLjEiPjwvbGluZT48dGV4dCBmaWxsPSJjdXJyZW50Q29sb3IiIHk9IjkiIGR5PSIwLjcxZW0iPjA8L3RleHQ+PC9nPjxnIGNsYXNzPSJ0aWNrIiBvcGFjaXR5PSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNTUuOTgzMjIwMjg4MDkyMTMsMCkiPjxsaW5lIHN0cm9rZT0iY3VycmVudENvbG9yIiB5Mj0iNiI+PC9saW5lPjxsaW5lIHN0cm9rZT0iY3VycmVudENvbG9yIiB5Mj0iLTM1MCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSI+PC9saW5lPjx0ZXh0IGZpbGw9ImN1cnJlbnRDb2xvciIgeT0iOSIgZHk9IjAuNzFlbSI+NTAsMDAwPC90ZXh0PjwvZz48ZyBjbGFzcz0idGljayIgb3BhY2l0eT0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjcxLjQ2NjQ0MDU3NjE4NDI1LDApIj48bGluZSBzdHJva2U9ImN1cnJlbnRDb2xvciIgeTI9IjYiPjwvbGluZT48bGluZSBzdHJva2U9ImN1cnJlbnRDb2xvciIgeTI9Ii0zNTAiIHN0cm9rZS1vcGFjaXR5PSIwLjEiPjwvbGluZT48dGV4dCBmaWxsPSJjdXJyZW50Q29sb3IiIHk9IjkiIGR5PSIwLjcxZW0iPjEwMCwwMDA8L3RleHQ+PC9nPjxnIGNsYXNzPSJ0aWNrIiBvcGFjaXR5PSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzODYuOTQ5NjYwODY0Mjc2NDQsMCkiPjxsaW5lIHN0cm9rZT0iY3VycmVudENvbG9yIiB5Mj0iNiI+PC9saW5lPjxsaW5lIHN0cm9rZT0iY3VycmVudENvbG9yIiB5Mj0iLTM1MCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSI+PC9saW5lPjx0ZXh0IGZpbGw9ImN1cnJlbnRDb2xvciIgeT0iOSIgZHk9IjAuNzFlbSI+MTUwLDAwMDwvdGV4dD48L2c+PGcgY2xhc3M9InRpY2siIG9wYWNpdHk9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwMi40MzI4ODExNTIzNjg1NywwKSI+PGxpbmUgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHkyPSI2Ij48L2xpbmU+PGxpbmUgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHkyPSItMzUwIiBzdHJva2Utb3BhY2l0eT0iMC4xIj48L2xpbmU+PHRleHQgZmlsbD0iY3VycmVudENvbG9yIiB5PSI5IiBkeT0iMC43MWVtIj4yMDAsMDAwPC90ZXh0PjwvZz48ZyBjbGFzcz0idGljayIgb3BhY2l0eT0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjE3LjkxNjEwMTQ0MDQ2MDcsMCkiPjxsaW5lIHN0cm9rZT0iY3VycmVudENvbG9yIiB5Mj0iNiI+PC9saW5lPjxsaW5lIHN0cm9rZT0iY3VycmVudENvbG9yIiB5Mj0iLTM1MCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSI+PC9saW5lPjx0ZXh0IGZpbGw9ImN1cnJlbnRDb2xvciIgeT0iOSIgZHk9IjAuNzFlbSI+MjUwLDAwMDwvdGV4dD48L2c+PHRleHQgZmlsbD0iY3VycmVudENvbG9yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3MDAsMzApIiBkeT0iLTAuMzJlbSIgdGV4dC1hbmNob3I9ImVuZCI+dHhucyDihpI8L3RleHQ+PC9nPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0icHVycGxlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNSwwLjUpIj48cGF0aCBkPSJNNDIuMzA5NjY0NDA1NzYxODQsMzM0Ljk2ODQ1MzIxNzE1Mkw0NC42MTkzMjg4MTE1MjM2OSwzNDcuMzI5NzA2MDAwODgzM0w0Ni45Mjg5OTMyMTcyODU1MywzNTIuMzAzNDI4NjMwODc3NEw0OS4yMzg2NTc2MjMwNDczNzQsMzUzLjg1MTQ4NDYxMjA5NDU3TDUxLjU0ODMyMjAyODgwOTIxLDM1My45OTI4ODkzNzM2OTU0NUw1My44NTc5ODY0MzQ1NzEwNiwzNTMuMTE5MTg0Njg1NTc2TDU2LjE2NzY1MDg0MDMzMjksMzUzLjU4ODIxMjU2NDMwMTRMNTguNDc3MzE1MjQ2MDk0NzUsMzUzLjk0NjYyNzg5NDc5NjM0TDYwLjc4Njk3OTY1MTg1NjU4LDM1NC4wMDY4OTQ2MjM2NTQ3TDYzLjA5NjY0NDA1NzYxODQzNCwzNTQuMTQ5MDY4MzA3ODUyOUw2NS40MDYzMDg0NjMzODAyNywzNTMuNTc2NTY0MTk2MDIxM0w2Ny43MTU5NzI4NjkxNDIxMiwzNTMuNjg2Mzc3ODY3NzAwMUw3MC4wMjU2MzcyNzQ5MDM5NiwzNTMuMjgyOTMzOTgzMzk2ODRMNzIuMzM1MzAxNjgwNjY1OCwzNTIuOTI5MzIwOTM1MTI5M0w3NC42NDQ5NjYwODY0Mjc2NCwzNTIuOTc5NDExMzc0OTY0Mkw3Ni45NTQ2MzA0OTIxODk1LDM1MC42NDUxOTk3MTkzNzA5Nkw3OS4yNjQyOTQ4OTc5NTEzMiwzNDcuNTE2NjAyMTY3MTM3M0w4MS41NzM5NTkzMDM3MTMxNywzNDYuMzQ0OTc0MTA5ODMwNDVMODMuODgzNjIzNzA5NDc1MDIsMzQ2LjA2NDgzMDgwMzY2MTI3TDg2LjE5MzI4ODExNTIzNjg1LDMyOS43NTM4NjMzNjc5NzI0TDg4LjUwMjk1MjUyMDk5ODcsMzQxLjIwNjA2Njg3Mzk3MzE2TDkwLjgxMjYxNjkyNjc2MDU0LDM0NC4xNzcxNDg5NzUwODIwNUw5My4xMjIyODEzMzI1MjIzOSwzNDQuMDIwOTYzMjI0NzM3ODRMOTUuNDMxOTQ1NzM4Mjg0MjEsMzM5LjE1MDcxMzE3OTA1NDY2TDk3Ljc0MTYxMDE0NDA0NjA2LDMzNy40MTYxODAzOTE1OTQyTDEwMC4wNTEyNzQ1NDk4MDc5MSwzNDUuNTI5NjUxOTExOTY4TDEwMi4zNjA5Mzg5NTU1Njk3NiwzMzQuNDMyMTkyMTMxNTE2MTZMMTA0LjY3MDYwMzM2MTMzMTYsMzMyLjYxMjgwNzE3NDA0ODFMMTA2Ljk4MDI2Nzc2NzA5MzQ0LDMyOS4xNDMzMzg4NDg2MDk0TDEwOS4yODk5MzIxNzI4NTUyOSwzMzAuNzIzNTE2MjY0MDA0NzNMMTExLjU5OTU5NjU3ODYxNzEyLDMyNy4wOTY3NjE4NDkwMTYyTDExMy45MDkyNjA5ODQzNzg5NiwzMjkuODkwMTAwODI3MjcyNjVMMTE2LjIxODkyNTM5MDE0MDgxLDMzOS4yMjI2NjM5OTAxNzk0TDExOC41Mjg1ODk3OTU5MDI2NSwzMzEuNTA4OTAzNzg0NzQxNDVMMTIwLjgzODI1NDIwMTY2NDUsMzI1LjI2NDczMDkxMjIwMjNMMTIzLjE0NzkxODYwNzQyNjMzLDMyNC40Mzg0NjMxMTk2NzA3NkwxMjUuNDU3NTgzMDEzMTg4MTgsMzIzLjI5MzE0ODI0OTUwMzc2TDEyNy43NjcyNDc0MTg5NTAwMywzMjQuNDI0NTI3NjY2Nzc3OEwxMzAuMDc2OTExODI0NzExODYsMjk3LjAwMTg0NzQwNTkyNzdMMTMyLjM4NjU3NjIzMDQ3MzcsMzI3LjI2MzQwMzQ2MTEyODNMMTM0LjY5NjI0MDYzNjIzNTU2LDMxOC42Nzk1ODk5MTQ5NDQyNEwxMzcuMDA1OTA1MDQxOTk3NCwzMjAuNzkwODk5OTk2NDgzMjNMMTM5LjMxNTU2OTQ0Nzc1OTIzLDMxNy4wODYzMTQwMzc3NzM2NkwxNDEuNjI1MjMzODUzNTIxMDgsMzE3LjEyNjIxNzA1MjI4NDdMMTQzLjkzNDg5ODI1OTI4MjkzLDMxNS41NTk0MjE3MDM2MTA0TDE0Ni4yNDQ1NjI2NjUwNDQ3OCwzMTMuOTQwOTI3NzkzNTgyN0wxNDguNTU0MjI3MDcwODA2NjMsMzE1Ljk5NTU1NzY4OTc5MDI1TDE1MC44NjM4OTE0NzY1Njg0NSwzMTMuMTg3Mjk3MTY3OTk2N0wxNTMuMTczNTU1ODgyMzMwMywzMTEuODQ2NjEzNzc5ODE0NkwxNTUuNDgzMjIwMjg4MDkyMTMsMzExLjYxOTI5NTg3MjQ5NzJMMTU3Ljc5Mjg4NDY5Mzg1Mzk4LDMxMi4xODY3OTczMzM0NjIxNUwxNjAuMTAyNTQ5MDk5NjE1ODMsMjc1LjA1MjY0NTkyNjcwMDFMMTYyLjQxMjIxMzUwNTM3NzY4LDMwNy42NzMzNTEzMjkzNjM4N0wxNjQuNzIxODc3OTExMTM5NSwzMTIuODExOTk0NDQ5MjQ4MDZMMTY3LjAzMTU0MjMxNjkwMTM1LDMxMi4wMjE3MDk3OTA4NDMyTDE2OS4zNDEyMDY3MjI2NjMyLDMxOS40MDA1ODc2NzU2MDE3NEwxNzEuNjUwODcxMTI4NDI1MDIsMzAzLjI5MDQzODIyNTYxMzJMMTczLjk2MDUzNTUzNDE4Njg3LDMwNi4wNjAxODU2Mjk4NTQ3TDE3Ni4yNzAxOTk5Mzk5NDg3MiwzMjMuMjI1OTI2NDY3ODc4NjVMMTc4LjU3OTg2NDM0NTcxMDU4LDMzOC40NzU0ODI5Mzk3NzU0TDE4MC44ODk1Mjg3NTE0NzI0LDMyNC4wNDIyNjA0ODYwNzc3TDE4My4xOTkxOTMxNTcyMzQyNSwzMTEuNzI5MTY0MjY3ODc3MUwxODUuNTA4ODU3NTYyOTk2MSwzMTcuNTg1MjQ0NjIzNTY5N0wxODcuODE4NTIxOTY4NzU3OTUsMzI1Ljc1NDc5OTE2Mzk5OUwxOTAuMTI4MTg2Mzc0NTE5OCwyNzMuMjIxODMwMTUzODM1NEwxOTIuNDM3ODUwNzgwMjgxNjUsMzA3LjAzNzk0NjQzNDQ3MjNMMTk0Ljc0NzUxNTE4NjA0MzQ3LDMwOC4zNjc1MTgyMzE0MTExTDE5Ny4wNTcxNzk1OTE4MDUzLDMwNS44MTI1OTUyMTQ0Nzc4TDE5OS4zNjY4NDM5OTc1NjcxNCwzMTUuNTA1Nzg1NDI4MTcwMTZMMjAxLjY3NjUwODQwMzMyOSwzMTAuMDMwMDY0NTg4NTM5MUwyMDMuOTg2MTcyODA5MDkwODUsMzA0LjYyNDQwNzgyNjQzMDk3TDIwNi4yOTU4MzcyMTQ4NTI2NywzMDIuOTA3MzA1OTIzODgxTDIwOC42MDU1MDE2MjA2MTQ1MiwzMDAuNzE4MTUzMTYxNjA1M0wyMTAuOTE1MTY2MDI2Mzc2MzcsMzA5LjM1NDk2NTExMTQ2MjdMMjEzLjIyNDgzMDQzMjEzODIyLDMzNC44NTQ1NjIzMDk0NTdMMjE1LjUzNDQ5NDgzNzkwMDA3LDI1Ni42NzY0NzQ3NDAxODUyTDIxNy44NDQxNTkyNDM2NjE5LDMwNi4wMjQxNjk2NjEyMjExNUwyMjAuMTUzODIzNjQ5NDIzNywzMTAuMzg4Nzc2MTk4MTk1N0wyMjIuNDYzNDg4MDU1MTg1NTYsMzAzLjQzNTgwOTQzMTA0NTY0TDIyNC43NzMxNTI0NjA5NDc0MSwyOTcuNzk2NTI0NTg4MTUyNDdMMjI3LjA4MjgxNjg2NjcwOTI3LDMwMC4wMzAwNjQ4NjI5MzE5TDIyOS4zOTI0ODEyNzI0NzExMiwzMzEuODIzMzg5OTQxNDAzM0wyMzEuNzAyMTQ1Njc4MjMyOTcsMzA4LjMwMjk5OTkxNzI5MDI2TDIzNC4wMTE4MTAwODM5OTQ4MiwyOTQuNTcyODc5NzYwMzA2MzZMMjM2LjMyMTQ3NDQ4OTc1NjY3LDMwNi40MjczMjA3MjM0NTQ4TDIzOC42MzExMzg4OTU1MTg0NiwyNTAuMjQyMzQ1Mjc4MjE3MUwyNDAuOTQwODAzMzAxMjgwMywyOTkuNzIxOTcyMjEzNjgzOEwyNDMuMjUwNDY3NzA3MDQyMTYsMzEwLjE1MTkzNDM3MDgwNDlMMjQ1LjU2MDEzMjExMjgwNCwyOTguMzM5NTkzMTYzODcxNUwyNDcuODY5Nzk2NTE4NTY1ODYsMjk2Ljk4MzkwMjg4MjQ2MzNMMjUwLjE3OTQ2MDkyNDMyNzY5LDI5NC44MTg2ODgwODg2ODIyTDI1Mi40ODkxMjUzMzAwODk1NCwzMTUuNDAwMjY3NjAxMTg4NEwyNTQuNzk4Nzg5NzM1ODUxNCwzMjguNzU0MDU2NzA1ODAzMkwyNTcuMTA4NDU0MTQxNjEzMjcsMjk2LjE5NTg5MzQwMzc3MDhMMjU5LjQxODExODU0NzM3NTA2LDI4NS4xNzUyNjIzNzA2OTM4TDI2MS43Mjc3ODI5NTMxMzY5LDIyMy43ODA4NDY3MTM2NDQ2TDI2NC4wMzc0NDczNTg4OTg3LDI5My4xOTM3MzAwMTA0Mzc5TDI2Ni4zNDcxMTE3NjQ2NjA2LDI4OS45ODY5MTMyMzc2ODgyTDI2OC42NTY3NzYxNzA0MjI0NiwyOTEuNjQ2MjQwNDcyMjk5OEwyNzAuOTY2NDQwNTc2MTg0MjUsMjg5LjQyNjQ3MjkxNzc5NzY0TDI3My4yNzYxMDQ5ODE5NDYxNiwyODguNzMzMDU4NTIwOTE1NDVMMjc1LjU4NTc2OTM4NzcwNzk2LDI4NS40MDc2OTYxMjA5MjY4NkwyNzcuODk1NDMzNzkzNDY5OCwyMTEuNTI5MDczOTc1NzQ5NDdMMjgwLjIwNTA5ODE5OTIzMTY2LDI5Ni44Nzg3ODA1MDk0ODE5TDI4Mi41MTQ3NjI2MDQ5OTM1LDI4Mi4yOTUzMjkxNzA5NTlMMjg0LjgyNDQyNzAxMDc1NTM2LDI4MC43MTYzNzE1Mjc1Mzg1TDI4Ny4xMzQwOTE0MTY1MTcyLDI3Mi41NzMxMTg5NDE3Mzk2TDI4OS40NDM3NTU4MjIyNzksMjc1LjAxMjk3ODMyMjQyMzNMMjkxLjc1MzQyMDIyODA0MDg1LDI3Ni45MTI2NTgxNzcwMDUzTDI5NC4wNjMwODQ2MzM4MDI3LDE4OS4wODMzNDUwNjgyOTc3MkwyOTYuMzcyNzQ5MDM5NTY0NTUsMjY5Ljc1MDk1MTY3Mzg2NDk2TDI5OC42ODI0MTM0NDUzMjY0LDI2Ny4yOTMxNTY5ODYxMjU1NUwzMDAuOTkyMDc3ODUxMDg4MiwyNjUuODU5MDgwNTI3NjgxN0wzMDMuMzAxNzQyMjU2ODUwMDUsMjY0LjUwMTYwNzQ4NzIzOUwzMDUuNjExNDA2NjYyNjExOSwyNjkuMzU0ODEwNzcyOTM1OEwzMDcuOTIxMDcxMDY4MzczNzUsMjY4Ljg4MTYyNDcyNDExMjRMMzEwLjIzMDczNTQ3NDEzNTY2LDIwMi4wMzcxOTUxMjk4MTE2NEwzMTIuNTQwMzk5ODc5ODk3NDUsMjgzLjA4NTM4NTgxMjIxMzY0TDMxNC44NTAwNjQyODU2NTkzLDI4Ni4wNjI1ODU1OTE5MjM0TDMxNy4xNTk3Mjg2OTE0MjExNSwyODUuMzEzOTExODIwNTY4NzZMMzE5LjQ2OTM5MzA5NzE4MywyODMuNjIxMzMxODAxNzQ4OUwzMjEuNzc5MDU3NTAyOTQ0OCwxOTEuNjE2NTYzMTQ5MzI0TDMyNC4wODg3MjE5MDg3MDY3LDI3OS45ODUxNTY4Njc1NzU2NUwzMjYuMzk4Mzg2MzE0NDY4NSwyODkuMTUyNDk0NTI0OTk0N0wzMjguNzA4MDUwNzIwMjMwMzUsMjYzLjU3NTQ2NjUxODA1NDJMMzMxLjAxNzcxNTEyNTk5MjIsMjY2Ljg3ODg2Mjc0NjM1NzRMMzMzLjMyNzM3OTUzMTc1NDA1LDI1NS4yMzMxMzQwNjEzMTg0MkwzMzUuNjM3MDQzOTM3NTE1OSwxNTMuODY3MzAyMTA4NjYwNzdMMzM3Ljk0NjcwODM0MzI3NzcsMzAxLjk5Mzk5NDQ5OTY5Njg0TDM0MC4yNTYzNzI3NDkwMzk2LDI5MC44MTUxMDk3MTk5NTg3TDM0Mi41NjYwMzcxNTQ4MDE0LDI3MS4zNzY2NjUzMjg4MTQ0NUwzNDQuODc1NzAxNTYwNTYzMywyNDMuOTA3NTgxNDAzMDA3N0wzNDcuMTg1MzY1OTY2MzI1MSwyNDcuNDI0ODQ0OTIyNjk5MDRMMzQ5LjQ5NTAzMDM3MjA4Njk0LDE0My4wNTgyMDEyNjI4OTI1NEwzNTEuODA0Njk0Nzc3ODQ4NzQsMjQxLjg0NDI2MDczODA2MTM0TDM1NC4xMTQzNTkxODM2MTA2LDIzOS4wMjQyOTAzMDgwOTk4TDM1Ni40MjQwMjM1ODkzNzI1LDI5Mi4wNzA2NTg0ODUxOTM5TDM1OC43MzM2ODc5OTUxMzQzLDMyMC4yMzE0NzY4NzMxOTc2TDM2MS4wNDMzNTI0MDA4OTYxNCwzMjAuNjk1NjY0OTMwMjM4N0wzNjMuMzUzMDE2ODA2NjU4LDMyMC4wODI5MDE1MjIwNDcxTDM2NS42NjI2ODEyMTI0MTk4NCwzMjEuMjY3OTAyMjM3NjA1NEwzNjcuOTcyMzQ1NjE4MTgxNywzMjIuMTUwMDA2NDA4MTY0MUwzNzAuMjgyMDEwMDIzOTQzNiwyNzkuNzgxMjk2NjAzNjA1N0wzNzIuNTkxNjc0NDI5NzA1MzQsMTUwLjYyMzUwOTI5NDU5NTY0TDM3NC45MDEzMzg4MzU0NjcxMywyNTcuMDgwMTUzNzQ2MDk1M0wzNzcuMjExMDAzMjQxMjI5MDQsMjU1LjQ2NzA1MjQ2Nzc0MTk4TDM3OS41MjA2Njc2NDY5OTA5LDI0OC4wODA1MTQ3NDA1MDUyNEwzODEuODMwMzMyMDUyNzUyNzQsMzE4LjUwMjgwMzIxNjMzNjFMMzg0LjEzOTk5NjQ1ODUxNDYsMjc2Ljc4MzM4OTk4MDEwMDVMMzg2LjQ0OTY2MDg2NDI3NjQ0LDE1Mi43MDEyMzY4MDcyOTcyOEwzODguNzU5MzI1MjcwMDM4MjMsMjU2LjYzNDg1MzY3NjA2NTJMMzkxLjA2ODk4OTY3NTgwMDE0LDI0NS4wNTcwNTg5NTQ3MzE1TDM5My4zNzg2NTQwODE1NjIsMjcwLjYxODE2NjI3MTY1Njk1TDM5NS42ODgzMTg0ODczMjM4LDI5MS44MzM3NzQzMTg2MTc2TDM5Ny45OTc5ODI4OTMwODU2MywyODAuODk3NTc4NTkyMzI2NEw0MDAuMzA3NjQ3Mjk4ODQ3NCwyNTMuODQ4ODUzNzgwMDA1OEw0MDIuNjE3MzExNzA0NjA5MzQsMTQ3LjIwOTIyNDU5MzM5NzVMNDA0LjkyNjk3NjExMDM3MTEzLDI2Ny41MTgwMjM3MzMyMjA1TDQwNy4yMzY2NDA1MTYxMzMwNCwyNjkuMTI4ODcwNTY5MDQ5NDdMNDA5LjU0NjMwNDkyMTg5NDgzLDI2My42OTY2NDc5MjgwNDA3Nkw0MTEuODU1OTY5MzI3NjU2NywyNjEuOTg2ODkzMjY4Mjk5NDdMNDE0LjE2NTYzMzczMzQxODUzLDEzOS43MTQ4NjI4NDkzNTczNkw0MTYuNDc1Mjk4MTM5MTgwNCwyNjEuMzcwMDg3ODU4MTA1TDQxOC43ODQ5NjI1NDQ5NDIyMywyNTUuODcyNTczMTgxMDA3MjVMNDIxLjA5NDYyNjk1MDcwNDEsMjUxLjQyMTU0ODMwODI4NTgyTDQyMy40MDQyOTEzNTY0NjU5MywxMzEuMTIyMzczMjIzMzIwNjZMNDI1LjcxMzk1NTc2MjIyNzcsMjQ5Ljk0MzIwMjIzMjkwNjVMNDI4LjAyMzYyMDE2Nzk4OTYzLDI1Ni4xNzU0MTk3MDYxODI3TDQzMC4zMzMyODQ1NzM3NTE0LDI1NC41MDUwNDIxMzMwMTg5N0w0MzIuNjQyOTQ4OTc5NTEzMzMsMTQ2LjI2MzQzMjM3OTg1NzczTDQzNC45NTI2MTMzODUyNzUxLDMxNS43MTg0ODMwNjMyNTkxTDQzNy4yNjIyNzc3OTEwMzY5LDMwMi4xMDg2ODUyNDMxNzM5N0w0MzkuNTcxOTQyMTk2Nzk4ODMsMjU1LjY5Mzg2NjcyMTUxNDUyTDQ0MS44ODE2MDY2MDI1NjA2LDI1Ni40MTkxNjU3MDI3Nzk2NUw0NDQuMTkxMjcxMDA4MzIyNTMsMjQ4LjEzNzkzNTYyMjMxMDQ0TDQ0Ni41MDA5MzU0MTQwODQzLDExNC4wMjQ1NDkzNTYxMDMxMkw0NDguODEwNTk5ODE5ODQ2MiwyODcuNzkxMTM5NzE5ODA2NjdMNDUxLjEyMDI2NDIyNTYwOCwzMTIuODUwODAwMzg4ODY5NjNMNDUzLjQyOTkyODYzMTM2OTkzLDI0Ny4zMzU5MTA5MDg2NDk2TDQ1NS43Mzk1OTMwMzcxMzE3LDI0My4zNDg0ODU1NjgyNzc2OEw0NTguMDQ5MjU3NDQyODkzNDYsMjU3LjcyNDgwNzY5MTgzNTRMNDYwLjM1ODkyMTg0ODY1NTM3LDExOS40NzIwNjk5ODQ5MzQ0OEw0NjIuNjY4NTg2MjU0NDE3MiwyNjUuOTE5Mzg5NDAzMzA3MTVMNDY0Ljk3ODI1MDY2MDE3OTA3LDI0Mi43MjU2MTA0ODM5MjEyNkw0NjcuMjg3OTE1MDY1OTQwOSwyODIuODEwNjE2NDE1OTE2MUw0NjkuNTk3NTc5NDcxNzAyOCwxMDcuNDM5MDUyNjUyMTA1MDhMNDcxLjkwNzI0Mzg3NzQ2NDU3LDI2Mi4yODMzNzE2MzIzNDc2TDQ3NC4yMTY5MDgyODMyMjY1LDI1Mi44NjAxNTAyNjA5MTM4M0w0NzYuNTI2NTcyNjg4OTg4MywyNjkuNDczMTI0NDQ2MzE3M0w0NzguODM2MjM3MDk0NzUwMSwyMzMuODMyNjk1NDQ0MTk4NzJMNDgxLjE0NTkwMTUwMDUxMTk3LDEwMC45ODc3NjE2MDU3NjQ3N0w0ODMuNDU1NTY1OTA2MjczNzYsMjQ0LjI0MDA3MTUxMTA2OTgzTDQ4NS43NjUyMzAzMTIwMzU2NywzMDEuODA3OTMwODEyMzg2NEw0ODguMDc0ODk0NzE3Nzk3NDYsOTIuMjc2MjY2NDc4NDA2TDQ5MC4zODQ1NTkxMjM1NTkzNywyNDQuNDYxOTc2MjQxOTQzMzhMNDkyLjY5NDIyMzUyOTMyMTIsMzEwLjQ4NjA0NjgxMDAxNDE2TDQ5NS4wMDM4ODc5MzUwODMsMzEyLjgwNzg4MTExNDc2NjVMNDk3LjMxMzU1MjM0MDg0NDg2LDMxMy4yODU2ODMwOTYxNzY3NEw0OTkuNjIzMjE2NzQ2NjA2NywzMTQuNTI3MjY1MjA1NjMzOUw1MDEuOTMyODgxMTUyMzY4NTcsMzE0LjAzMjA0NjgzNjg1Mzg1TDUwNC4yNDI1NDU1NTgxMzA0LDMxNC43NjcyODY1MDU1NjI5TDUwNi41NTIyMDk5NjM4OTIyNywzMTQuMDY4MTk2MDYzNDA2M0w1MDguODYxODc0MzY5NjU0MDYsMzE0Ljk3ODI1MzMyMTY5MDVMNTExLjE3MTUzODc3NTQxNTk3LDI3OC4yMzQzOTExNzM4MzY2TDUxMy40ODEyMDMxODExNzc4LDEwMy41ODc3ODkyMTMyMTk4NEw1MTUuNzkwODY3NTg2OTM5NiwyNTYuNzA4ODE1OTM1NDA4MUw1MTguMTAwNTMxOTkyNzAxNSwyNTIuNDAxOTMwOTc0NjQ5OTZMNTIwLjQxMDE5NjM5ODQ2MzMsMzEwLjI3MzEyNDkwMTcwNjM1TDUyMi43MTk4NjA4MDQyMjUyLDMxMy44OTg1NjE2MTczODE3NEw1MjUuMDI5NTI1MjA5OTg3LDExNy4wOTkzMzAyMzQ2MzMzM0w1MjcuMzM5MTg5NjE1NzQ4OCwyNTAuNDY1MTAyMjY1NjMzOTZMNTI5LjY0ODg1NDAyMTUxMDcsMjUyLjYzMTgwMTMzMTQ4NDI0TDUzMS45NTg1MTg0MjcyNzI2LDI4MS4yOTM4MTUxMTU4NjU4N0w1MzQuMjY4MTgyODMzMDM0NCw5Ny40ODg5MTE2MDQ4OTM2TDUzNi41Nzc4NDcyMzg3OTYzLDI1NC4wMDQ2Mjk1Nzk1MjQyTDUzOC44ODc1MTE2NDQ1NTgsMjY4LjkyNDMyODk0MTc2MzFMNTQxLjE5NzE3NjA1MDMxOTksMjM2LjQzNDYzOTA2ODYwNzAzTDU0My41MDY4NDA0NTYwODE3LDI0My4zMjg3MDUzODYxMTc0M0w1NDUuODE2NTA0ODYxODQzNiw4NC4yMTAwNzg4MTgxMDE0MUw1NDguMTI2MTY5MjY3NjA1NCwyNDguNDg0NDIyNDM1NTk5MDFMNTUwLjQzNTgzMzY3MzM2NzMsMjM1LjgyMDUwODIyODQ3NDk1TDU1Mi43NDU0OTgwNzkxMjkxLDI1MC40MzcyODg3NzI3NTYzOEw1NTUuMDU1MTYyNDg0ODkxLDgxLjE4NjQ2NDE0MDU2NzkyTDU1Ny4zNjQ4MjY4OTA2NTI4LDI1Ny4wNzE3NjM3NjgzMzQ2TDU1OS42NzQ0OTEyOTY0MTQ3LDI1My43MjU2NTg5MDYwNTgwNEw1NjEuOTg0MTU1NzAyMTc2NCwyNDkuNzMwNjYxNTY5MzI4MTNMNTY0LjI5MzgyMDEwNzkzODQsMjU0LjI4ODE5NTczNjMwMTMzTDU2Ni42MDM0ODQ1MTM3MDAxLDc4LjQ4NjkxOTQ0NzMyMDk2TDU2OC45MTMxNDg5MTk0NjIxLDIyNC4yNTM3MjY0OTkzNzAyTDU3MS4yMjI4MTMzMjUyMjM4LDIzOS4yNjYzMzExMTk5MzQxTDU3My41MzI0Nzc3MzA5ODU2LDIzMi42ODAzNTA1MzkyNzU3Nkw1NzUuODQyMTQyMTM2NzQ3NSw2OS4xMTE3NTc5NjIyOTUwN0w1NzguMTUxODA2NTQyNTA5MywyNTAuNTQ4NzE0Nzg5NTAwMTdMNTgwLjQ2MTQ3MDk0ODI3MTMsMjY3LjA4OTQzODkwOTY0MzgzTDU4Mi43NzExMzUzNTQwMzMsMjQ5LjY2MjE4MTcwODM4NjRMNTg1LjA4MDc5OTc1OTc5NDksNDcuNTIwMDIxMTUwMDY1MzJMNTg3LjM5MDQ2NDE2NTU1NjgsMjE3LjM3ODE4Nzg1MzAzMjI3TDU4OS43MDAxMjg1NzEzMTg2LDIwMy4zNDc5Njk1NzA1NjA2TDU5Mi4wMDk3OTI5NzcwODA1LDYwLjU2NjQxMjMxMzkyNTE0TDU5NC4zMTk0NTczODI4NDIzLDIzMi41NzU2NjI2OTUxNjQwOEw1OTYuNjI5MTIxNzg4NjA0LDIyOC45ODU4MTQ1MjQwNjY5NEw1OTguOTM4Nzg2MTk0MzY2LDIxNC4wMDU2NjE3OTQzNDM4N0w2MDEuMjQ4NDUwNjAwMTI3NywxMDAuODA4OTY1NzYzNjY2NTVMNjAzLjU1ODExNTAwNTg4OTYsMjAzLjM4OTU5MjQ1ODcyMDU5TDYwNS44Njc3Nzk0MTE2NTE0LDI2MC4yMjQ3MDQ1MzUyOTY0NEw2MDguMTc3NDQzODE3NDEzNCwyODIuNzA1MTY3NTIyNjIxNzZMNjEwLjQ4NzEwODIyMzE3NTMsMjBMNjEyLjc5Njc3MjYyODkzNywyMTkuMDMwMjA4MDcxNzEwODZMNjE1LjEwNjQzNzAzNDY5OSwyMzguMTE3Nzg0NDU0MTA3MzhMNjE3LjQxNjEwMTQ0MDQ2MDcsNTguNDgwNzI3MjQwMDIyNzZMNjE5LjcyNTc2NTg0NjIyMjcsMjkxLjU2ODQzMjU0NjY3NjdMNjIyLjAzNTQzMDI1MTk4NDQsMzA2LjQ4NDM0OTQxNTU3NTdMNjI0LjM0NTA5NDY1Nzc0NjEsMjk3LjczOTE2NTI0NzMwODE2TDYyNi42NTQ3NTkwNjM1MDgxLDI2MC4wMjEyNTkyMTUwMTQ1TDYyOC45NjQ0MjM0NjkyNjk4LDIwOS44Nzc3NTUzNzgzMTc3Mkw2MzEuMjc0MDg3ODc1MDMxOCwyOS4wMzA5NTk5MzE5NTI2MTZMNjMzLjU4Mzc1MjI4MDc5MzUsMjg3Ljk2NTU1OTA3MTM5NTlMNjM1Ljg5MzQxNjY4NjU1NTQsMjYyLjMxMTE3MDUzMjE5MDU0TDYzOC4yMDMwODEwOTIzMTczLDI3MS4xMTAyNzAyNjE0NDU3NUw2NDAsMjc0Ljc2MTIxMzk5MTU0OTYiPjwvcGF0aD48L2c+PGcgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMC41KSI+PGxpbmUgeDE9IjQwIiB4Mj0iNjQwIiB5MT0iMzcwIiB5Mj0iMzcwIj48L2xpbmU+PC9nPjwvc3ZnPidzIHBlcmZvcm1hbmNlIHNob3dpbmcgaG93IGxvbmcgZWFjaCBpbnRoZSB0aW1lIHRha2VuIGRmb3IgZWFjaCBjaHVuayBvZiAxMDAwMCBvcGVyYXRpb25zIHdoaWxlIHJ1bm5pbmcgdGhlIHRlc3QuIHNwZW50IHByb2Nlc3NpbmdkdXJpbmcgVGhlcmUncyBhIGxvdCBnb2luZyBvbiBoZXJlLiBJIHRoaW5rIHRob3NlIHNwaWtlcyBoYXJlIHRoZSBnYXJiYWdlIFY4J3MgY29sbGVjdG9yIHRyeWluZyB0byBmcmVlIHVwIG1lbW9yeS4gVGhlIHNwaWtlcyBnZXQgYm90aCBzbG93ZXIgYW5kIG1vcmUgZnJlcXVlbnQgYXMgdGhlIFRoaXMgaXMgYSBjaGFydCBzaG93aW5nIHRoZSB0aW1lIHNwZW50IHByb2Nlc3NpbmcgZWFjaCBjaHVuayBvZiAxMDAwIG9wZXJhdGlvbnMgZHVyaW5nIHRoZSB0ZXN0LiBJIHRoaW5rIHRob3NlIHNwaWtlcyBhcmUgVjgncyBnYXJiYWdlIGNvbGxlY3RvciB0cnlpbmcgdG8gZnJlZSB1cCBtZW1vcnkuIFRoZSBzcGlrZXMgZ2V0IGJvdGggc2xvd2VyIGFuZCBtb3JlIGZyZXF1ZW50IGFzIHRoZT4gYW1fcGVyZjEuc3ZnIGRvY3VtZW50IGdyb3dzLnRha2VuIHRvdGhyb3VnaG91dCBUKFRoZSB0aW1lcyBzaG93IGF2ZXJhZ2V5WSBheGlzIHNob3dzKiogdGltZSAgZWFjaCwgLCBidWNrZXRlZCBpbnRvIGdyb3VwcyBvZiAxMDAwIG9wZXJhdGlvbnNhdmVyYWdlZGluYXMgdGhlIHRlc3QgOjo6ICAgW1tbLi4uLi4uXV1dOiAwIGEgYml0OiBbLi5dOiBbLi5dOiBbLi5dOiBbLi5dOiBbLi5dOiBbLi5dIGEgYml0IGluIHRoZSBkb2N1bWVudEkgV2UncmUgbW92aW5nIHRoZSBQYXJldG8gZnJvbnRlaXIgaWVyLiwgd2hpY2ggbW92ZXNlZmZpY2llbnkgaWNbXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9QYXJldG9fZWZmaWNpZW5jeSkgVGhhdCBiaWcgc3Bpa2U/IEEgZ3JvdXAgb2YgMTAwMCBlZGl0cyB0b29rIDNvdmVyIDMuNQoKIFRoYXQgYmlnIHNwaWtlPyBBIGdyb3VwIG9mIDEwMDAgZWRpdHMgdG9vayBvdmVyIDMuNSBzZWNvbmRzIHRvIHByb2Nlc3MuCiBPb2YuV2UgY2FuIElmIHdlIHN6b29tIGluIG9uIHRoZSBkaWFncmFtIGFib3ZlWW91IGNhbiBzZWUgdGhpcyBpZi4gVGggVGhlIGFtb3VudCBvZiB0aQoKPiByZWZfcGVyZjMuc3ZnIFRoZXJlJ3MgYSBsb3QgZ29pbmcgb24gaGVyZSBiZWNhdXNlIHRoZSBpbnNlcnQgY3Vyc29yIG1vdmVzIGFsbCBvdmVyIHRoZSBwbGFjZSwgYW5kIHNodWZmaWxpbmcgZWxlbWVudHMgaW4gYW4gYXJyYXkgIGR1cmluZyB0aGlzIHRyYWNlLCBidXQgeW91IHRoZXJlZmVyZW5jZXItY3JkdHMgcGFydCBvZiB0aGUgJ3JlIHMgYWUnJ2Ugc3JlJ3MgYSBzdHJvbmcgdHJlbmQgKnVwIGFuZCB0byB0aGUgcmlnaHQqLmxpbmVhciBvbmluc2VydHMgYXJlZHVyaW5nIHRoaXMgICBJIGFzc3VtZSB0aGUgc2VjdGlvbiBhdCB0aGVlIGVuZCB3YXMgbWFydGluIE1hcnRpbiBjb21pbmcgYmFjayB0cmhvZ3VoIHRoZSBkIHdoZW50aGUgbWFydGluTWFydGluJ3MgIGFyZWluc2VydHMgaGFwcGVuZWQgYWxsIG92ZXIgdGhlIHBsYWNlIG9idmlvdXNseXVwd2FyZHMudXAgYW5kIHRvIHRoZSByaWdodAogdGhlIHNhbWUgaW5mb3JtYXRpb250aGUgcmVzdWx0aW5nIAoKPiB5anNfcGVyZjM0LnN2ZwoKTXkgcmVmZXJlbmNlLWNyZHRzIGltcGxtZWVudGlvbmltcGxlbWVudGF0aW9uIGdldHMgWWpzIGlzIGFiYXNpY2FsbHkgYSBsaW5lIGF0IHRoZSBZb3UgY2FuJ3QgcmVhbGx5IHRlbGwgYW55dGhpbmcgYWJvdXQgeWpzIGlmIHdlIHB1dCBpdCBvbiB0aGUgc2FtZSBzY2FsZSBhcyBJIGNhbid0IHJlYWxseSBwdXQgeWpzIG9uIHRoZSBzYW1lIHNjYWxlIGFzIHRoZSBvdGhlciBhbGdvaXJyaXRobXMgYmVjYXVzZSBpdHMgc28gZmFzdC46CgpCdXQgaWYgd2UgaXNvbGF0ZSB5anMsIHlvdSBjYW4gc2VlIGl0IChtKG1vc3RseSkgaGF2aW5nIGxpbmVhciBjb25zdG5hdCBwZXJjb25zdGFudCBwZXJmb3JtYW5jZSBmb3IgYW55ZmxhdHBlcmZvcm1pbmcganVzdCBhcyB3ZWxsIGF0IHRoZSBzdGFydCBvZiB0aGUgdGVzdCBhbmQgYXQgdGhlIGVuZC46Cgo+IDxzdmcgY2xhc3M9InBsb3QiIGZpbGw9ImN1cnJlbnRDb2xvciIgdGV4dC1hbmNob3I9Im1pZGRsZSIgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0MDAiIHZpZXdCb3g9IjAgMCA3MDAgNDAwIiBzdHlsZT0iYmFja2dyb3VuZDogd2hpdGUgbm9uZSByZXBlYXQgc2Nyb2xsIDAlIDAlOyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAsMCkiIGZpbGw9Im5vbmUiIHRleHQtYW5jaG9yPSJlbmQiPjxnIGNsYXNzPSJ0aWNrIiBvcGFjaXR5PSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDM3MC41KSI+PGxpbmUgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHgyPSItNiI+PC9saW5lPjxsaW5lIHN0cm9rZT0iY3VycmVudENvbG9yIiB4Mj0iNjAwIiBzdHJva2Utb3BhY2l0eT0iMC4xIj48L2xpbmU+PHRleHQgZmlsbD0iY3VycmVudENvbG9yIiB4PSItOSIgZHk9IjAuMzJlbSI+MC4wMDA8L3RleHQ+PC9nPjxnIGNsYXNzPSJ0aWNrIiBvcGFjaXR5PSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDMzMC41MTQ4NjA3NjA4NTQ0NSkiPjxsaW5lIHN0cm9rZT0iY3VycmVudENvbG9yIiB4Mj0iLTYiPjwvbGluZT48bGluZSBzdHJva2U9ImN1cnJlbnRDb2xvciIgeDI9IjYwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSI+PC9saW5lPjx0ZXh0IGZpbGw9ImN1cnJlbnRDb2xvciIgeD0iLTkiIGR5PSIwLjMyZW0iPjAuMDAyPC90ZXh0PjwvZz48ZyBjbGFzcz0idGljayIgb3BhY2l0eT0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwyOTAuNTI5NzIxNTIxNzA4OSkiPjxsaW5lIHN0cm9rZT0iY3VycmVudENvbG9yIiB4Mj0iLTYiPjwvbGluZT48bGluZSBzdHJva2U9ImN1cnJlbnRDb2xvciIgeDI9IjYwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSI+PC9saW5lPjx0ZXh0IGZpbGw9ImN1cnJlbnRDb2xvciIgeD0iLTkiIGR5PSIwLjMyZW0iPjAuMDA0PC90ZXh0PjwvZz48ZyBjbGFzcz0idGljayIgb3BhY2l0eT0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwyNTAuNTQ0NTgyMjgyNTYzMykiPjxsaW5lIHN0cm9rZT0iY3VycmVudENvbG9yIiB4Mj0iLTYiPjwvbGluZT48bGluZSBzdHJva2U9ImN1cnJlbnRDb2xvciIgeDI9IjYwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSI+PC9saW5lPjx0ZXh0IGZpbGw9ImN1cnJlbnRDb2xvciIgeD0iLTkiIGR5PSIwLjMyZW0iPjAuMDA2PC90ZXh0PjwvZz48ZyBjbGFzcz0idGljayIgb3BhY2l0eT0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwyMTAuNTU5NDQzMDQzNDE3OCkiPjxsaW5lIHN0cm9rZT0iY3VycmVudENvbG9yIiB4Mj0iLTYiPjwvbGluZT48bGluZSBzdHJva2U9ImN1cnJlbnRDb2xvciIgeDI9IjYwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSI+PC9saW5lPjx0ZXh0IGZpbGw9ImN1cnJlbnRDb2xvciIgeD0iLTkiIGR5PSIwLjMyZW0iPjAuMDA4PC90ZXh0PjwvZz48ZyBjbGFzcz0idGljayIgb3BhY2l0eT0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwxNzAuNTc0MzAzODA0MjcyMjMpIj48bGluZSBzdHJva2U9ImN1cnJlbnRDb2xvciIgeDI9Ii02Ij48L2xpbmU+PGxpbmUgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHgyPSI2MDAiIHN0cm9rZS1vcGFjaXR5PSIwLjEiPjwvbGluZT48dGV4dCBmaWxsPSJjdXJyZW50Q29sb3IiIHg9Ii05IiBkeT0iMC4zMmVtIj4wLjAxMDwvdGV4dD48L2c+PGcgY2xhc3M9InRpY2siIG9wYWNpdHk9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMTMwLjU4OTE2NDU2NTEyNjY1KSI+PGxpbmUgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHgyPSItNiI+PC9saW5lPjxsaW5lIHN0cm9rZT0iY3VycmVudENvbG9yIiB4Mj0iNjAwIiBzdHJva2Utb3BhY2l0eT0iMC4xIj48L2xpbmU+PHRleHQgZmlsbD0iY3VycmVudENvbG9yIiB4PSItOSIgZHk9IjAuMzJlbSI+MC4wMTI8L3RleHQ+PC9nPjxnIGNsYXNzPSJ0aWNrIiBvcGFjaXR5PSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDkwLjYwNDAyNTMyNTk4MTA3KSI+PGxpbmUgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHgyPSItNiI+PC9saW5lPjxsaW5lIHN0cm9rZT0iY3VycmVudENvbG9yIiB4Mj0iNjAwIiBzdHJva2Utb3BhY2l0eT0iMC4xIj48L2xpbmU+PHRleHQgZmlsbD0iY3VycmVudENvbG9yIiB4PSItOSIgZHk9IjAuMzJlbSI+MC4wMTQ8L3RleHQ+PC9nPjxnIGNsYXNzPSJ0aWNrIiBvcGFjaXR5PSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDUwLjYxODg4NjA4NjgzNTUzKSI+PGxpbmUgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHgyPSItNiI+PC9saW5lPjxsaW5lIHN0cm9rZT0iY3VycmVudENvbG9yIiB4Mj0iNjAwIiBzdHJva2Utb3BhY2l0eT0iMC4xIj48L2xpbmU+PHRleHQgZmlsbD0iY3VycmVudENvbG9yIiB4PSItOSIgZHk9IjAuMzJlbSI+MC4wMTY8L3RleHQ+PC9nPjx0ZXh0IGZpbGw9ImN1cnJlbnRDb2xvciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQwLDIwKSIgZHk9Ii0xZW0iIHRleHQtYW5jaG9yPSJzdGFydCI+4oaRIGF2ZyB0aW1lIHBlciB0eG4gKG1zKTwvdGV4dD48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwzNzApIiBmaWxsPSJub25lIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj48ZyBjbGFzcz0idGljayIgb3BhY2l0eT0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAuNSwwKSI+PGxpbmUgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHkyPSI2Ij48L2xpbmU+PGxpbmUgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHkyPSItMzUwIiBzdHJva2Utb3BhY2l0eT0iMC4xIj48L2xpbmU+PHRleHQgZmlsbD0iY3VycmVudENvbG9yIiB5PSI5IiBkeT0iMC43MWVtIj4wPC90ZXh0PjwvZz48ZyBjbGFzcz0idGljayIgb3BhY2l0eT0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTU1Ljk4MzIyMDI4ODA5MjEzLDApIj48bGluZSBzdHJva2U9ImN1cnJlbnRDb2xvciIgeTI9IjYiPjwvbGluZT48bGluZSBzdHJva2U9ImN1cnJlbnRDb2xvciIgeTI9Ii0zNTAiIHN0cm9rZS1vcGFjaXR5PSIwLjEiPjwvbGluZT48dGV4dCBmaWxsPSJjdXJyZW50Q29sb3IiIHk9IjkiIGR5PSIwLjcxZW0iPjUwLDAwMDwvdGV4dD48L2c+PGcgY2xhc3M9InRpY2siIG9wYWNpdHk9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI3MS40NjY0NDA1NzYxODQyNSwwKSI+PGxpbmUgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHkyPSI2Ij48L2xpbmU+PGxpbmUgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHkyPSItMzUwIiBzdHJva2Utb3BhY2l0eT0iMC4xIj48L2xpbmU+PHRleHQgZmlsbD0iY3VycmVudENvbG9yIiB5PSI5IiBkeT0iMC43MWVtIj4xMDAsMDAwPC90ZXh0PjwvZz48ZyBjbGFzcz0idGljayIgb3BhY2l0eT0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzg2Ljk0OTY2MDg2NDI3NjQ0LDApIj48bGluZSBzdHJva2U9ImN1cnJlbnRDb2xvciIgeTI9IjYiPjwvbGluZT48bGluZSBzdHJva2U9ImN1cnJlbnRDb2xvciIgeTI9Ii0zNTAiIHN0cm9rZS1vcGFjaXR5PSIwLjEiPjwvbGluZT48dGV4dCBmaWxsPSJjdXJyZW50Q29sb3IiIHk9IjkiIGR5PSIwLjcxZW0iPjE1MCwwMDA8L3RleHQ+PC9nPjxnIGNsYXNzPSJ0aWNrIiBvcGFjaXR5PSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MDIuNDMyODgxMTUyMzY4NTcsMCkiPjxsaW5lIHN0cm9rZT0iY3VycmVudENvbG9yIiB5Mj0iNiI+PC9saW5lPjxsaW5lIHN0cm9rZT0iY3VycmVudENvbG9yIiB5Mj0iLTM1MCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSI+PC9saW5lPjx0ZXh0IGZpbGw9ImN1cnJlbnRDb2xvciIgeT0iOSIgZHk9IjAuNzFlbSI+MjAwLDAwMDwvdGV4dD48L2c+PGcgY2xhc3M9InRpY2siIG9wYWNpdHk9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYxNy45MTYxMDE0NDA0NjA3LDApIj48bGluZSBzdHJva2U9ImN1cnJlbnRDb2xvciIgeTI9IjYiPjwvbGluZT48bGluZSBzdHJva2U9ImN1cnJlbnRDb2xvciIgeTI9Ii0zNTAiIHN0cm9rZS1vcGFjaXR5PSIwLjEiPjwvbGluZT48dGV4dCBmaWxsPSJjdXJyZW50Q29sb3IiIHk9IjkiIGR5PSIwLjcxZW0iPjI1MCwwMDA8L3RleHQ+PC9nPjx0ZXh0IGZpbGw9ImN1cnJlbnRDb2xvciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzAwLDMwKSIgZHk9Ii0wLjMyZW0iIHRleHQtYW5jaG9yPSJlbmQiPnR4bnMg4oaSPC90ZXh0PjwvZz48ZyBmaWxsPSJub25lIiBzdHJva2U9ImJsdWUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbWl0ZXJsaW1pdD0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC41LDAuNSkiPjxwYXRoIGQ9Ik00Mi4zMDk2NjQ0MDU3NjE4NCwzMzEuMzA0NTgxNDA3MTYwMkw0NC42MTkzMjg4MTE1MjM2OSwzMzEuMzI4MTcyNjUxMzcwOEw0Ni45Mjg5OTMyMTcyODU1MywzMTcuMjAzMTYyMzM1OTM3Nkw0OS4yMzg2NTc2MjMwNDczNzQsMzIwLjMwOTk2NzY3MDMxMzk0TDUxLjU0ODMyMjAyODgwOTIxLDMyNC41NTYxNDk0OTk4MzQ0TDUzLjg1Nzk4NjQzNDU3MTA2LDMxOC44MDA1NDg2MTg4MTE0M0w1Ni4xNjc2NTA4NDAzMzI5LDMyMi4xNzA0NTYxOTkxMDEwN0w1OC40NzczMTUyNDYwOTQ3NSwzMTcuOTMxODkxNDcwOTI0N0w2MC43ODY5Nzk2NTE4NTY1OCwzMjIuNTM2MTIwMzM1NDA5TDYzLjA5NjY0NDA1NzYxODQzNCwzMjAuNjY3NjM0NzE3ODgwOEw2NS40MDYzMDg0NjMzODAyNywzMTguNDIzNjg4NzA3MjIyMTRMNjcuNzE1OTcyODY5MTQyMTIsMzI1LjY3NjUzMzEwNDcyMzNMNzAuMDI1NjM3Mjc0OTAzOTYsMzIwLjY2NzQzNDgxODU5MTVMNzIuMzM1MzAxNjgwNjY1OCwzMjQuMzQyMjA4OTk4NTMxMjVMNzQuNjQ0OTY2MDg2NDI3NjQsMzIwLjAwMTQ2MjM2NzM1NzI1TDc2Ljk1NDYzMDQ5MjE4OTUsMzIxLjgxMTgwOTQ2NjI2OTU1TDc5LjI2NDI5NDg5Nzk1MTMyLDMxOC45MjI5MDMxNDU1NzQzN0w4MS41NzM5NTkzMDM3MTMxNywzMjMuMTA0NTA5MDE0MTY2NzVMODMuODgzNjIzNzA5NDc1MDIsMzIwLjY0MTI0NDU4NTcwODM2TDg2LjE5MzI4ODExNTIzNjg1LDMyMC4yNTgzODY4MDE3MDQ2TDg4LjUwMjk1MjUyMDk5ODcsMzIzLjAzMjUzNTgxMTMyMTRMOTAuODEyNjE2OTI2NzYwNTQsMzE3Ljc2MzEzNDE2NzIzOEw5My4xMjIyODEzMzI1MjIzOSwzMjYuMDgwMzgzMDY5Nzg3MDVMOTUuNDMxOTQ1NzM4Mjg0MjEsMzI0Ljk3NjM5MzI5MjAwMjZMOTcuNzQxNjEwMTQ0MDQ2MDYsMzI1LjIzMjg3ODA4MTk3NDJMMTAwLjA1MTI3NDU0OTgwNzkxLDMwMy4xNzMxMTY2MjA3MzY0TDEwMi4zNjA5Mzg5NTU1Njk3NiwzMTMuNDI1MDA2NTU5MzUyMzdMMTA0LjY3MDYwMzM2MTMzMTYsMzIyLjU2NzMwODY0NjM0Nzk1TDEwNi45ODAyNjc3NjcwOTM0NCwzMTkuNTc3NDU5ODg3NjIyMUwxMDkuMjg5OTMyMTcyODU1MjksMzIyLjY4NDY2NTA5NTA1NTA0TDExMS41OTk1OTY1Nzg2MTcxMiwzMTguMzAxNzM0MDUzNTE1NzZMMTEzLjkwOTI2MDk4NDM3ODk2LDMyMC44OTY5NDk1MTUyMjYzN0wxMTYuMjE4OTI1MzkwMTQwODEsMzA5LjQ1OTUyMDI3MzA2MzJMMTE4LjUyODU4OTc5NTkwMjY1LDMyMC4yMDQyMDY5NDQ0MjI4TDEyMC44MzgyNTQyMDE2NjQ1LDMxOC4yODUxNDAxNzgxNjU4TDEyMy4xNDc5MTg2MDc0MjYzMywzMTYuMTIwNzg0NjIwNjUyODRMMTI1LjQ1NzU4MzAxMzE4ODE4LDI5OC44MzUxNjg5NTIwMDIzTDEyNy43NjcyNDc0MTg5NTAwMywyOTEuMzIxMjQxNDg1MDUyMUwxMzAuMDc2OTExODI0NzExODYsMjk3LjU2NzA2MDIxOTI0TDEzMi4zODY1NzYyMzA0NzM3LDI4Ny44MDIzNjkzMTE5MjIxTDEzNC42OTYyNDA2MzYyMzU1NiwzMjMuMTUwODkxODMwOTUyODRMMTM3LjAwNTkwNTA0MTk5NzQsMzIwLjgyNTc3NTkwOTUzODA0TDEzOS4zMTU1Njk0NDc3NTkyMywzMjEuMjAwNjM2Njc5Mjc4OEwxNDEuNjI1MjMzODUzNTIxMDgsMzI0LjMxNDgzOTE4MTA5NDE2TDE0My45MzQ4OTgyNTkyODI5MywzMjAuMTY4ODIwMTUyNTg1MUwxNDYuMjQ0NTYyNjY1MDQ0NzgsMzI1LjEwMjUyNjQ2NjQ3MDFMMTQ4LjU1NDIyNzA3MDgwNjYzLDMyMC4wMDY0ODA0MDU1NTA4TDE1MC44NjM4OTE0NzY1Njg0NSwzMjUuNDQ3Nzk4MTE5NTg1OEwxNTMuMTczNTU1ODgyMzMwMywzMTkuODY5MzUxNDI5NTY5MjRMMTU1LjQ4MzIyMDI4ODA5MjEzLDMyMy4zMjEwMjg2MTg0ODI4TDE1Ny43OTI4ODQ2OTM4NTM5OCwzMjEuMTIwNDY2NDEzOTI1TDE2MC4xMDI1NDkwOTk2MTU4MywzMTkuODg5NzIzODAzNjY3NTVMMTYyLjQxMjIxMzUwNTM3NzY4LDMyMy40NDI5ODMyNzIxODkxN0wxNjQuNzIxODc3OTExMTM5NSwzMTguNzkxMzUyMDU5ODU2NzZMMTY3LjAzMTU0MjMxNjkwMTM1LDMyMS4zNjEzNTY4OTk0NzA5TDE2OS4zNDEyMDY3MjI2NjMyLDI5MC44NDMwMzkyNjIzNzU1NkwxNzEuNjUwODcxMTI4NDI1MDIsMzI0LjYyNDUyNDA2ODYwNDdMMTczLjk2MDUzNTUzNDE4Njg3LDMxNS43Njg2OTU0NjMzNDk5NkwxNzYuMjcwMTk5OTM5OTQ4NzIsMjcwLjYyODk1MTk2MDQzMDg3TDE3OC41Nzk4NjQzNDU3MTA1OCwyMDQuMDAxMzc0NTc3NjQ5OUwxODAuODg5NTI4NzUxNDcyNCwyNjIuMDA0NjM3MjY4MTM3N0wxODMuMTk5MTkzMTU3MjM0MjUsMzE3LjcxOTU1MDM4NzM2OTg1TDE4NS41MDg4NTc1NjI5OTYxLDI3Ni45ODc1Mjg3MTQ4OTI0TDE4Ny44MTg1MjE5Njg3NTc5NSwyODguNzIzODI2OTA3NzI1NTRMMTkwLjEyODE4NjM3NDUxOTgsMjk3LjkxMDUzMjU1NTMxODJMMTkyLjQzNzg1MDc4MDI4MTY1LDMyMC41NDA4ODE4MTA5Mjk3TDE5NC43NDc1MTUxODYwNDM0NywzMjQuNTI2NTYwNTMyMTY1NTVMMTk3LjA1NzE3OTU5MTgwNTMsMzIxLjIwMjIzNjAyMjU0ODg1TDE5OS4zNjY4NDM5OTc1NjcxNCwyODkuOTYyOTQ2MzcwNjg2N0wyMDEuNjc2NTA4NDAzMzI5LDMwNS40MDc2NjYxNzMxNTExTDIwMy45ODYxNzI4MDkwOTA4NSwzMjUuMjQ3NjkyNTI1OTQ2MjZMMjA2LjI5NTgzNzIxNDg1MjY3LDMyMS4yNzYwMDg2MTY5MDk3M0wyMDguNjA1NTAxNjIwNjE0NTIsMzI2LjAwNzc4OTk4NTUwMjAzTDIxMC45MTUxNjYwMjYzNzYzNywzMDEuNjI3MjcxMjExNzE4M0wyMTMuMjI0ODMwNDMyMTM4MjIsMjM4LjQwNTA0ODIzMDQzMzk1TDIxNS41MzQ0OTQ4Mzc5MDAwNywzMTguMzA4MTMxNjUwMDMwNkwyMTcuODQ0MTU5MjQzNjYxOSwzMDguNzEzOTk3MzYzNDM2OTNMMjIwLjE1MzgyMzY0OTQyMzcsMzAwLjE4NTI2NzE1MjgxNTM2TDIyMi40NjM0ODgwNTUxODU1NiwzMTcuMjQ5NTI1MDQzNjI5ODNMMjI0Ljc3MzE1MjQ2MDk0NzQxLDMyNC45MzIyMDk4MTQyNjY3NEwyMjcuMDgyODE2ODY2NzA5MjcsMzIwLjg3ODM1NjQyMzU0OTdMMjI5LjM5MjQ4MTI3MjQ3MTEyLDI5OS41NTExMDI4MTk0ODE3TDIzMS43MDIxNDU2NzgyMzI5NywzMjAuODQzNzY5MjI4ODY4OUwyMzQuMDExODEwMDgzOTk0ODIsMzIxLjY4NjYzNjAxNjkyOUwyMzYuMzIxNDc0NDg5NzU2NjcsMzE0LjU1ODE4NTM1NzI3MDkzTDIzOC42MzExMzg4OTU1MTg0NiwzMTAuOTc3NTM2MTExMTc0NkwyNDAuOTQwODAzMzAxMjgwMywzMTYuODQ1Njk1MTg3NjZMMjQzLjI1MDQ2NzcwNzA0MjE2LDMwOS44MzU5NjAzNTE0NTgyNUwyNDUuNTYwMTMyMTEyODA0LDMyMC40ODE3MDM4NzU1OTIxTDI0Ny44Njk3OTY1MTg1NjU4NiwzMjMuNTkzMzI3MzQ4ODcyNjZMMjUwLjE3OTQ2MDkyNDMyNzY5LDMxOS42MjA2NDM4Njg5MTE4TDI1Mi40ODkxMjUzMzAwODk1NCwzMDcuNjIxNjAzMzA4NDY4NUwyNTQuNzk4Nzg5NzM1ODUxNCwyODcuODk0NzU1MDMyNTc1NUwyNTcuMTA4NDU0MTQxNjEzMjcsMzA1LjI1MDkyNDQyNTQ3NDY0TDI1OS40MTgxMTg1NDczNzUwNiwzMTkuNjg3OTk4ODMyMTQyMUwyNjEuNzI3NzgyOTUzMTM2OSwzMTYuMjQ0OTM4NDY0NDUzMkwyNjQuMDM3NDQ3MzU4ODk4NywzMTAuNDc2NzIyMjU1MDc0MTVMMjY2LjM0NzExMTc2NDY2MDYsMzE5LjQ5NDg5MDUzMjg4NTFMMjY4LjY1Njc3NjE3MDQyMjQ2LDMyNi4zMTMwNzY1NjczMDI2M0wyNzAuOTY2NDQwNTc2MTg0MjUsMzIzLjQ5MDU0NTU5OTA1MTEzTDI3My4yNzYxMDQ5ODE5NDYxNiwzMjYuNzg0NzAxMjU0MzEyOEwyNzUuNTg1NzY5Mzg3NzA3OTYsMzI0LjA5MDE0Mjc3MjMxOThMMjc3Ljg5NTQzMzc5MzQ2OTgsMzAyLjIyMjA3MDEzMTc0MjI3TDI4MC4yMDUwOTgxOTkyMzE2NiwyNDMuMjQ4NTY4MDg4MjM3ODVMMjgyLjUxNDc2MjYwNDk5MzUsMzE5LjQyNzY5NTU0ODY2ODZMMjg0LjgyNDQyNzAxMDc1NTM2LDMyMi44MjUyMTI4NDA0MzgxTDI4Ny4xMzQwOTE0MTY1MTcyLDMyMS42OTUyNTI3NjM2NzU2TDI4OS40NDM3NTU4MjIyNzksMzI1LjI5MzQ3NTQ5NTkwODVMMjkxLjc1MzQyMDIyODA0MDg1LDMxNy41MDMyMzA4MzEyOTkyTDI5NC4wNjMwODQ2MzM4MDI3LDMyNS40Nzc2MDcwMjExNTk2NkwyOTYuMzcyNzQ5MDM5NTY0NTUsMzIxLjMyMTM5MTc4ODI5MzVMMjk4LjY4MjQxMzQ0NTMyNjQsMzIxLjM5MDE0NjE5NTUwNDY2TDMwMC45OTIwNzc4NTEwODgyLDMyNi4xMjI1NjczMzExOTYyTDMwMy4zMDE3NDIyNTY4NTAwNSwzMjAuNDE1NTI4NDIyNDM3NjZMMzA1LjYxMTQwNjY2MjYxMTksMzIyLjc3MzAzMjI3Mzk2MTFMMzA3LjkyMTA3MTA2ODM3Mzc1LDMxNS41NzcxNjY2MjE3MDM0NEwzMTAuMjMwNzM1NDc0MTM1NjYsMzI0LjE4MjUwODM4Mzg3OTE3TDMxMi41NDAzOTk4Nzk4OTc0NSwzMjMuODMxMDE4OTk4OTIyMTZMMzE0Ljg1MDA2NDI4NTY1OTMsMzI3LjEwNDk4MjI5MzcxNTFMMzE3LjE1OTcyODY5MTQyMTE1LDMyMy42MzExMTMzMDQ1NzE4NEwzMTkuNDY5MzkzMDk3MTgzLDMyMi42NzEwNzAxNTU5MTIzM0wzMjEuNzc5MDU3NTAyOTQ0OCwzMjcuMTU1NzQzMzA3MTE3M0wzMjQuMDg4NzIxOTA4NzA2NywzMjMuMDY3OTIyNjc3NjM3M0wzMjYuMzk4Mzg2MzE0NDY4NSwzMTguMTQ5NjEwNTQ1NDU0M0wzMjguNzA4MDUwNzIwMjMwMzUsMjc5LjM5Nzc5Mjk0NTEwMUwzMzEuMDE3NzE1MTI1OTkyMiwzMjQuNDU4MTg1OTYzMzk1MkwzMzMuMzI3Mzc5NTMxNzU0MDUsMzIyLjA5Mzg4NDY0MjMwMDNMMzM1LjYzNzA0MzkzNzUxNTksMzIxLjk4NTMyNTAyODQ0NzVMMzM3Ljk0NjcwODM0MzI3NzcsMzI0LjE4MTUwODczODQ3NjhMMzQwLjI1NjM3Mjc0OTAzOTYsMzI2LjU5NzU3MDc5Mjg1NDM2TDM0Mi41NjYwMzcxNTQ4MDE0LDMzNi4wOTM1NDE2NDM3MTk1NkwzNDQuODc1NzAxNTYwNTYzMywzMzYuMzQzMDQ4ODAxNTMzOTRMMzQ3LjE4NTM2NTk2NjMyNTEsMzM4LjU1NTYwNjUyNzQ4NjNMMzQ5LjQ5NTAzMDM3MjA4Njk0LDMzNS40NzgxOTAyNjE0ODk1NEwzNTEuODA0Njk0Nzc3ODQ4NzQsMzM3LjMwOTA2OTg2MjQ3MDJMMzU0LjExNDM1OTE4MzYxMDYsMzMyLjU2MjA5NDA2MjUwODlMMzU2LjQyNDAyMzU4OTM3MjUsMzA4LjU4OTA0Mzc3MzUyMzNMMzU4LjczMzY4Nzk5NTEzNDMsMzA2Ljc2NzE2MDk4MTE2NDNMMzYxLjA0MzM1MjQwMDg5NjE0LDI5OS44MzI1NzgyMjMxNjY3TDM2My4zNTMwMTY4MDY2NTgsMzA1LjU3NDM2NDIzMTE0MTgzTDM2NS42NjI2ODEyMTI0MTk4NCwyOTQuMDA2MDIzNjcwMzYwNEwzNjcuOTcyMzQ1NjE4MTgxNywyODkuNDU1MTU1MTA1ODYzM0wzNzAuMjgyMDEwMDIzOTQzNiwzMDguNDQ4Mjk2MTI4ODUxMDRMMzcyLjU5MTY3NDQyOTcwNTM0LDMyNS44MDUwNjUzNjg1NzQxNkwzNzQuOTAxMzM4ODM1NDY3MTMsMzMwLjY3OTgxMzYwNjU0ODVMMzc3LjIxMTAwMzI0MTIyOTA0LDMyNy41ODAyMDU2MTQ4MDAyTDM3OS41MjA2Njc2NDY5OTA5LDMzMi42MjEyNzIwNzIzMjQ2TDM4MS44MzAzMzIwNTI3NTI3NCwyMDcuNjA2NTk0Njc4NzQzNEwzODQuMTM5OTk2NDU4NTE0NiwyODQuMTA4NjAyMDkyNzcxTDM4Ni40NDk2NjA4NjQyNzY0NCwzMjUuNDU5MjEzOTAzMjUwM0wzODguNzU5MzI1MjcwMDM4MjMsMzE2Ljk4NTg0MzEzNDQ2NDZMMzkxLjA2ODk4OTY3NTgwMDE0LDMzMi4xOTE0MzE3NzM2NjdMMzkzLjM3ODY1NDA4MTU2MiwzMTYuNzYzNzI1Njc5NzQ2ODdMMzk1LjY4ODMxODQ4NzMyMzgsMjYyLjk4MTQ1NDE1NjgyMDYzTDM5Ny45OTc5ODI4OTMwODU2MywyNjIuNzI4NzY4MTIzNjQ3NTdMNDAwLjMwNzY0NzI5ODg0NzQsMzE5LjI2NTc1NTc0OTE2OTFMNDAyLjYxNzMxMTcwNDYwOTM0LDMyNC44NjA0MzY0MzYyMzI2TDQwNC45MjY5NzYxMTAzNzExMywzMjAuNTM3MTAzMjM3NzAzMkw0MDcuMjM2NjQwNTE2MTMzMDQsMzI0LjMzNDgzMTc5MTIyOThMNDA5LjU0NjMwNDkyMTg5NDgzLDMyMi4yOTE2MTExODExNzIzNkw0MTEuODU1OTY5MzI3NjU2NywzMjIuMzQ4NTkwMDAwODk0MDNMNDE0LjE2NTYzMzczMzQxODUzLDMyMS44OTI1Nzk0Mjk0OTEwNEw0MTYuNDc1Mjk4MTM5MTgwNCwzMjUuOTY1NDA1NzUwMzI1NUw0MTguNzg0OTYyNTQ0OTQyMjMsMzIxLjY2NTI2Mzk5NzQyODI3TDQyMS4wOTQ2MjY5NTA3MDQxLDMyMi4yMDUwNDMzMTkzMDM4TDQyMy40MDQyOTEzNTY0NjU5MywzMjUuMTQ2MzMwMTgwMjQzM0w0MjUuNzEzOTU1NzYyMjI3NywzMjIuMTE5Njc1MDc2NjA0OTVMNDI4LjAyMzYyMDE2Nzk4OTYzLDMyNi4xNDE1MjAzMDExNzU5NEw0MzAuMzMzMjg0NTczNzUxNCwzMTkuODMwOTQ1NjY2OTA4NDZMNDMyLjY0Mjk0ODk3OTUxMzMzLDIzNS4zMjQ2MTMwNjgwOTIyOEw0MzQuOTUyNjEzMzg1Mjc1MSw3NS45MTgyOTc1Mzc4NzUwOEw0MzcuMjYyMjc3NzkxMDM2OSwxNjYuMjEwNzk5NzQ1MTI1ODVMNDM5LjU3MTk0MjE5Njc5ODgzLDMyNC4yMjc4NzE1MjA2NDcxN0w0NDEuODgxNjA2NjAyNTYwNiwzMTkuNzM4MjAwMTQyNDMwMDZMNDQ0LjE5MTI3MTAwODMyMjUzLDMyNi4xMDk1NTIyMDQyNjE1NUw0NDYuNTAwOTM1NDE0MDg0MywzMjIuNjE0MjkxMjM1NDc5OUw0NDguODEwNTk5ODE5ODQ2MiwxNzYuNTg2ODYzMzM4NzIzNjdMNDUxLjEyMDI2NDIyNTYwOCw4My40MjgwMDY1NjM3ODg3Nkw0NTMuNDI5OTI4NjMxMzY5OTMsMzExLjM2NzE5MTI5MDI3MTY1TDQ1NS43Mzk1OTMwMzcxMzE3LDMxMi40NzkxNTgwNDc3MDMzTDQ1OC4wNDkyNTc0NDI4OTM0NiwyOTguMTEwNDU4MjA5ODA2MTVMNDYwLjM1ODkyMTg0ODY1NTM3LDMxMi44OTUyMDM0MzM0NTA4TDQ2Mi42Njg1ODYyNTQ0MTcyLDMxMC41OTQ4NzgzMDA5MzgyNkw0NjQuOTc4MjUwNjYwMTc5MDcsMzI1Ljk0NzQxMjUwNTQ3MjhMNDY3LjI4NzkxNTA2NTk0MDksMjk5LjI4MDk4MzE3MDA5Mkw0NjkuNTk3NTc5NDcxNzAyOCwzMjQuOTM5Mzg3MTIyMjc4OTZMNDcxLjkwNzI0Mzg3NzQ2NDU3LDMxNi4xNDczNzQ3MjY1OTI1TDQ3NC4yMTY5MDgyODMyMjY1LDMxNi43NzkzMTk4MzUyMTYzTDQ3Ni41MjY1NzI2ODg5ODgzLDMyMi44NzA5OTU4MTA0MDAzTDQ3OC44MzYyMzcwOTQ3NTAxLDMyMi45Mzc3NzEwMzU5MDA1NEw0ODEuMTQ1OTAxNTAwNTExOTcsMzI1Ljc2NzA3OTQzOTEwNzY1TDQ4My40NTU1NjU5MDYyNzM3NiwzMjEuMjM3ODIyODYyNjMyMTNMNDg1Ljc2NTIzMDMxMjAzNTY3LDMwOC4yNDc5NzA1MjY4Mjg0TDQ4OC4wNzQ4OTQ3MTc3OTc0NiwzMjAuNzAwMDIyNzIyNDY3NDVMNDkwLjM4NDU1OTEyMzU1OTM3LDMxNy40NDE2NzM2OTIyMzc5TDQ5Mi42OTQyMjM1MjkzMjEyLDI3OC44NDQxOTg2NzU2OTk2TDQ5NS4wMDM4ODc5MzUwODMsMTU3LjEyNTA3NjQ1NTgzOTFMNDk3LjMxMzU1MjM0MDg0NDg2LDg0Ljc5NDg5ODUzOTI0MTA1TDQ5OS42MjMyMTY3NDY2MDY3LDcxLjY0NTUyNTUyNzkzNjgzTDUwMS45MzI4ODExNTIzNjg1Nyw2NS42MzM1OTk5ODQ5MTIzOEw1MDQuMjQyNTQ1NTU4MTMwNCw3Ni41ODgyMDg1NDEzNDk2Mkw1MDYuNTUyMjA5OTYzODkyMjcsNzYuNTgxMDMxMjMzMzM3NDdMNTA4Ljg2MTg3NDM2OTY1NDA2LDg2Ljc2NzE0NTUxNzM3NzVMNTExLjE3MTUzODc3NTQxNTk3LDIyMC4wOTMyMzM5MjAxMDcxNEw1MTMuNDgxMjAzMTgxMTc3OCwzMjMuMzg3ODAzNzY5NTA0OTZMNTE1Ljc5MDg2NzU4NjkzOTYsMzE5Ljk4MjA4OTQ4OTcwNTFMNTE4LjEwMDUzMTk5MjcwMTUsMzIwLjc4MzM5MTY3NDM2MTVMNTIwLjQxMDE5NjM5ODQ2MzMsNDguMjMwNjQ3OTAyMTcwNDc1TDUyMi43MTk4NjA4MDQyMjUyLDIwTDUyNS4wMjk1MjUyMDk5ODcsMjM0LjQxNjk3MDM0NTMzNjcyTDUyNy4zMzkxODk2MTU3NDg4LDMxOC44MzM5MzYyNjg4MDA2TDUyOS42NDg4NTQwMjE1MTA3LDMyNi4wMzAyMDE2NDUxNTg3TDUzMS45NTg1MTg0MjcyNzI2LDMwNi4xNTc1Njc1MDI4Mjc5TDUzNC4yNjgxODI4MzMwMzQ0LDMyMi45NTgzNjMzNDM5MDM5NUw1MzYuNTc3ODQ3MjM4Nzk2MywzMjUuNDIwNDI4MzAyMTQ4NzZMNTM4Ljg4NzUxMTY0NDU1OCwzMDYuOTYzMjY4MDY3NjcyMzVMNTQxLjE5NzE3NjA1MDMxOTksMzIwLjEzODIzMTQ2NTAzNTc0TDU0My41MDY4NDA0NTYwODE3LDI3NC4yODkzNTE1NjQyMDg3TDU0NS44MTY1MDQ4NjE4NDM2LDI2OS4wMjkzNDY0NTI4NDczTDU0OC4xMjYxNjkyNjc2MDU0LDI4MC4yNzEwNDg0NDY5NDMxNUw1NTAuNDM1ODMzNjczMzY3MywyNzcuNTg4MDg1NTM4ODA5OTNMNTUyLjc0NTQ5ODA3OTEyOTEsMzIyLjI3NDAzNzY5NTAzNThMNTU1LjA1NTE2MjQ4NDg5MSwzMTYuNTgxOTkzMTY5NDAwOUw1NTcuMzY0ODI2ODkwNjUyOCwyNzkuOTk4OTY5NTAxNTAyMUw1NTkuNjc0NDkxMjk2NDE0NywyNDkuNjgzMzM2NTYxMDU5MjRMNTYxLjk4NDE1NTcwMjE3NjQsMzA5LjEyOTQ0Mjk3NjgzODU2TDU2NC4yOTM4MjAxMDc5Mzg0LDI3Ni4zNjE1NDE0MDk0NTE0TDU2Ni42MDM0ODQ1MTM3MDAxLDI5OC4zODAzNTc5MjUyOTA5TDU2OC45MTMxNDg5MTk0NjIxLDMxMS4zMTE3OTE4NTM2ODI0TDU3MS4yMjI4MTMzMjUyMjM4LDMwNC41ODU5OTE2MTQzOTYzM0w1NzMuNTMyNDc3NzMwOTg1NiwyOTIuNjAxNzQ1NjEyMjY1NUw1NzUuODQyMTQyMTM2NzQ3NSwyNzYuOTY1ODk2NzY2NzMzMkw1NzguMTUxODA2NTQyNTA5MywyODIuMzgwODQ0MzA4NzMzNUw1ODAuNDYxNDcwOTQ4MjcxMywzMDMuNTg3MTYyNzkwMTU3MTVMNTgyLjc3MTEzNTM1NDAzMywzMDUuMDU0NTk3NDA1MDYxNkw1ODUuMDgwNzk5NzU5Nzk0OSwzMjAuOTcwNTAyMTc1NjgyMjdMNTg3LjM5MDQ2NDE2NTU1NjgsMzEwLjQzNzE1Njk0MjQ3NTJMNTg5LjcwMDEyODU3MTMxODYsMzI0Ljc2MDI3MzcwOTY5OTMzTDU5Mi4wMDk3OTI5NzcwODA1LDMxNi41OTk1ODY2MTU2NzUxNUw1OTQuMzE5NDU3MzgyODQyMywzMjEuNzEyODI2MjQ5ODEyMUw1OTYuNjI5MTIxNzg4NjA0LDI4Mi43MTczMzkyMzYwODg4TDU5OC45Mzg3ODYxOTQzNjYsMzA4LjA2NDQzODc3MzkyMzAzTDYwMS4yNDg0NTA2MDAxMjc3LDE4OC44MzI3NzIwNzM1NTU0Mkw2MDMuNTU4MTE1MDA1ODg5NiwzMDguOTExMTI0MTI5OTYzMkw2MDUuODY3Nzc5NDExNjUxNCwyODYuOTg1ODkyODA0OTkwNTZMNjA4LjE3NzQ0MzgxNzQxMzQsMjgxLjU3OTE2MjIxMTE1ODJMNjEwLjQ4NzEwODIyMzE3NTMsMzIzLjU5NTEyNjc0MDM4ODJMNjEyLjc5Njc3MjYyODkzNywyOTEuMjE2MDgwNjA1OTg0OUw2MTUuMTA2NDM3MDM0Njk5LDIzMy43NDkyMTg1MzcyMDI3Mkw2MTcuNDE2MTAxNDQwNDYwNywyMTQuMzEzMDQyMTQ5NDcxMkw2MTkuNzI1NzY1ODQ2MjIyNyw1NS45MDg2OTQyNDk2MjA0MUw2MjIuMDM1NDMwMjUxOTg0NCw2Mi42OTI3MzI5NTcxNjcxM0w2MjQuMzQ1MDk0NjU3NzQ2MSw1Mi42MjY5NzM5MDkwODUyNUw2MjYuNjU0NzU5MDYzNTA4MSwxODMuMTk2NzI2NzU2ODU1NTNMNjI4Ljk2NDQyMzQ2OTI2OTgsMzEzLjExNjEyMTM0MzQ3NjgzTDYzMS4yNzQwODc4NzUwMzE4LDMxOC42MzAwMTIwMzI3MDNMNjMzLjU4Mzc1MjI4MDc5MzUsMTA3LjE5MDc1NDkwNTgyMTQyTDYzNS44OTM0MTY2ODY1NTU0LDIwMC43MDQ4Mzk3MTg2NjQ1TDYzOC4yMDMwODEwOTIzMTczLDIxNi41NzA1ODMxNzM3NTA2Nkw2NDAsMjczLjUxNzYzODM0NzIyMTA3Ij48L3BhdGg+PC9nPjxnIHRleHQtYW5jaG9yPSJzdGFydCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC41LDAuNSkiPjx0ZXh0IGR4PSIzIiBkeT0iMC4zMmVtIiB4PSI2NDAiIHk9IjI3My41MTc2MzgzNDcyMjEwNyI+eWpzPC90ZXh0PjwvZz48ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwwLjUpIj48bGluZSB4MT0iNDAiIHgyPSI2NDAiIHkxPSIzNzAiIHkyPSIzNzAiPjwvbGluZT48L2c+PC9zdmc+eWpzX3BlZnJmNS5zdmdzb3J0YWtlcyBjb25zdGFudCB0aW1laGFzIG1vc3RseSBmbGF0IHBlcmZvcm1hbmNlLiBJdHMgYWxtb3N0IGFsd2F5cyBmYXN0OgoKKFRob3VnaCBJIGhhdmUgbm8gaWRlYSB3aGF0IHRob3NlIHNwaWtlcyBhcmUgLiBLZXZpbiB0aGlua3MgaXQgbWlnaHQgYmUgZnJvbSAgIFJlbWVubWJlciwgdGhlIEkgaGF2ZSBubyBpZGVhIHdoYXQgdGhvc2Ugc3Bpa2VzIGFyZS4gUmVtZW1iZXIsIHRoZSoqLCBhbmQgaXQgZGVzb2Vzbid0IGdldCBzbG93ZXIgb3ZlciB0aW1lSSAgaW4gdGhpcyB0ZXN0VW5saWtlIHRoZSBvdGhlciBhbGdvcml0aG1zLCBpLiBCdXQgcmVtZW1iZXIsIHRoZSBzY2FsZSBoZXJlIGlzICBob3V0aG91Z2guIFRoZXkncmUgcHJldHR5IHNtYWxsIGluIGFic29sdXRlIHRlcm1zLCBidXQgaXRzIHN0aWxsYSAgYSBiaXQgd2VpcmQucHJldHR5IGN1cmlvdXMhd2VpcmRzdGlsbCBDS2V2aW4gc2F5cyBoZSB3cm90ZSBhbmQgcmV3cm90ZSBwYXJ0cyBvZiB5anMgMTIgdGltZXMgaW4gb3JkZXIgdG8gbWFrZSB0aGlzIGNvZGUgcnVuIHNvIGZhc3QuIElmIHRoZXJlIHdhcyBhIHByb2dyYW1tZXIgdmVyc2lvbiBvZiB0aGUgc3BlZWRydW5uaW5nIGNvbW11bml0eSwgdGhleSB3b3VsZCBhZG9yZSBLZXZpbi4gIGV2ZW5JLCBhcyB0aGUgZG9jdW1lbnQgZ3Jvd3MgTWF5YmUgdGhhdGV5IGhhcHBlbiB3aGVuIHRoZSB1c2VyIG1vdmVzIHRoZWlyIGN1cnNvciBhIGxvbmcgd2F5YXJvdW5kIHRoZSBkb2N1bWVudD8gT3Igd2hlbiB0aGUgdXNlciBkZWxldGVzIGNodW5rcyBvZiA/IEkgaGF2ZSBvbiBpZGVhbm8gaWRlYS5UaGUgcmVhbCBxdWVzdGlvbiBpczogIGV2ZW4qKm11YW55bWFuYWdlZCBoZXJlOyA1aXRlbSA9IHZhciBjb250ZW50Om1lbS1mcmFnLmRyYXdpby5zdmdpcyAgYSBtZXNzIGxpa2UgdGhpc2Rlc3dvdWxkIHRlbGwgdXMgZXZlcnl0aGluZyB3ZSBuZWVkIHRvIGtub3cgbXVjaCBUaGUgdjhWOCBvcHRpbWl6ZXIgZG9lcyAsaGVscHMgYSBsb3QgaGVyZSAtIHNtYWxsIHN0cmluZyBpbmxpbmluZyBkb2VzIGFoYXMgYSBsb3Qgb2YgdHJpY2tzbiBhd2Z1bCBsIC4gQnV0IGl0cyBub3QgbWFnaWMuICAoU21hbGwgc3RyaW5naSAgaW5saW5nIHdvdWlubGluaW5nIHdvdWxkIGhlbHAgaGVyZSkuVjggaXNuJ3R3aWxsIGlzbid0c21hbGwsICwgYiBJdCBkb2Vzbid0IGFjdHVhbGx5IHVuIGFuZCBpdHMgdHJpY2tzIG9ubHkgZ2V0IHVzIHNvIGZhci5idHJlZS5kcmF3aW8uc3ZnTWFydGluJ3MgZWRpdGluZyB0cmFjZSB3aGljaHVwZGF0ZSAKClRoZWNuaGlobmljYWxseSB0aGlzIGlzIE8obG9nIG4pbiAqIC4gVGVhY2ggRWFjaCBpbnNlcnQgc2hvdWxkICoqdGFrZXMgSW5zZXJ0cyBzbG93bHkgZ2V0IGdyYWR1YWxseSBzbG93ZXIgYXMgb3VyIGRvY3VtZW50IGdyb3dzLiBCdXQgaW4gcmVhbGl0eSwgaXRzIGZhc3RlY2JlY2F1c2UgdGhlIHdob2xlIHRoaW5nIGZpdHMgaW4gQ1BVIGNhY2hlLCBpdCB5b3UgY2hvbmVzdGx5IGNhbid0IHRlbGwgaW4gdGggZWJlIGJuZWVuaGNtY2htYXJrIGRhdGEud291bGRuJ3Qga25vdwoKPiBydXN0X3BlcmY2LnN2Z1BlcmZvcm1hbmNlIGlzIGFsc28gc21vb3RoIGFzIGJ1dHRlci4gQmVjYXVzZSBGcm9tIHJ1c3RSdXN0IGRvZXNuJ3QgbmVlZCBhIGdyYWJhcmJhZ2UgY29sbGVjdG9yIHRvIHRyYWNrIGFsbG9jYXRpb25zLCBzbyAgbWVtb3J5UGVyZm9ybWFuY2UgaXMgc21vb3RoIGFzIGJ1dHRlci4gUnVzdCBkb2Vzbid0IG5lZWQgYSBnYXJiYWdlIGNvbGxlY3RvciB0byB0cmFjayBtZW1vcnkgYWxsb2NhdGlvbnMsIHNvCgpJIGhhdmUgbm8gaWRlYSBob3cgdG8gdHJhY2sgc28gdGhlcmUncyBubyBiaWcgR0Mgc3Bpa2VzLiBVc2luQmVjYXVzZSBkYWVhY2ggYi10cmVlIG5vZGUgaXNUaGUgZW50aXJlIEknbSBub3Qgc3VyZSB3aGF0IHRob3NlIHNwaWtlcyBhcmUuIFRoZXkgYXJlbid0ICBpbiB0aGUgdGltZSBjaGFyZXBlcmZvcm1hbmNlCiBJJ20gbm90IHN1cmUgd2hhdCB0aG9zZSBzcGlrZXMgaW4gdGhlIHBlcmZvcm1hbmNlIGFyZUlhcmUgaW4gSSdtIG5vdCBzdXJlIHdoYXQgdGhvc2Ugc3Bpa2VzIGFyZQoKTm90ZSBJJ20gb25seSBnc2hvd2luZyB0aGUgV0FTTSB2ZXJzaW9uIG9mIHRoaXMgY29kZSwgY2FsbGVkIGZyb20gamF2YXNjcmlwdC4gVFBlcmZvcm1hbmNlIGlzIDN4IGJldHRlckkgc2ltcGx5IGhhdmVuJ3Qgd3JpdHRlbiB0aGUgY29kZW50YWl2YXRpdmUgY29kZWltcGxlbWVudGVkaW5zdHJ1bWVudGVkIG15IHJ1c3QgY29kZW5hdGl2ZSAuCgpOb3RlIEknbSBvbmx5IHNob3dpbmcgdGhlIFdBU00gdmVyc2lvbiBvZiB0aGlzIGNvZGUsIGNhbGxlZCBmcm9tIGphdmFzY3JpcHQuIEkgc2ltcGx5IGhhdmVuJ3QgaW5zdHJ1bWVudGVkIG15IG5hdGl2ZSBydXN0IGNvZGUuCgpOb3RlIEknbSBvbmx5IHNob3dpbmcgdGhlIFdBU00gdmVyc2lvbiBvZiB0aGlzIGNvZGUsIGNhbGxlZCBmcm9tIGphdmFzY3JpcHQuIEkgc2ltcGx5IGhhdmVuJ3QgaW5zdHJ1bWVudGVkIG15IG5hdGl2ZSBydXN0IGNvZGUuCgogaGVyZXBlcmZvcm1hbmNlIGhlcmUuc21sYWxsICBUaGV5J3JlIHN0YWJsZSBiZXR3ZWVuIHJ1bnMuCiB2b3ZlcmxhcCBwZXJmZWN0ZWx5IGJldHdlZW4gc3Vic2VxdWVudCBydW5zLiBzaW1wbHkgc2ltcGx5SSB3b25kZXIgd2hhdCB0aG9zZT9XaGF0IGFyZSB0aG9zZSBzbWFsbCBzcGlrZXNwZXJmZWN0bHlsaW5lIHVwIHBlcmZlY3RseSBiZXR3ZWVuIGJlbmNobWFyayBJIHdvbmRlciB3aGF0IHRob3NlIHNwaWtlcyBhcmUgQWN0dWFsbHkgdGhpcyBlbnRpcmUgZGF0YSBzZXQgb25seSBuZWVkcyA0MTQxMDAgYWxsb2NhdGlvbnMoYWxsIDI2MDAwMCApIG9wZXJhdGlvbnMgZW1tZW1vcnkgIGluIHRvdGFsIGR1cmluLnByb1Byb2Nlc3NpbmcgY2FsbHMgbWFsbG9jIHRpbWVzLiBlbmRzIEkKCldlIGNhbiBwdXQgYWxsIHRoZWEgbG90IG9mIHRoaXMgc3R1ZmYgb24gb25lIGdyYXBoLCBidXQgaUlmIEkgV2UgY2FuIHB1dCBhIGxvdCBvZiB0aGlzIHN0dWZmIG9uIG9uZSBncmFwaCwgYnV0IGlJV2UgaWYgaXQgYWhhcyBhIGxvZyBzY2FsZSwgdGhvdWdoIGl0cyBwcmV0dHkgbWluLkkgZ2l2ZSBpdCBJdHMgcmVwcmV0dHkgbWVhbmluZ2xlc3MsIGJ1dCBvdSBXZSBjYW4gcHV0IGEgbG90IG9mIHRoaXMgc3R1ZmYgb24gb25lIGdyYXBoIGlmIEkgZ2l2ZSBpdCBhIGxvZyBzY2FsZS4gSXRzIHByZXR0eSBtZWFuaW5nbGVzcywgYnV0Cj4gYWxsX3BlcmYuc3ZnIHlvdSBjYW4gc2VlIHNvbWUgZmVhdHVyZXMuIEFuZCBwcmV0dHkhLCBidXRub2JvYnVnbHQgbG9nIHNjYWxlcyBhcmUgc2VyaW91c2x5IG1lYW5pbmdtZWFuaW5nbGVzcyB0byBodW1hbnMuLiBUaGF0cyBDUkRUICBhbmRyZWFsbHkgIHJlbWFya2FibGUgaG93IG5lYXRseSB0aGV5IHN0YWNrIHVwIGxpa2UgdGhpcyBpdHVzZXMgaXQgbG9va3MgSWYKCklmIEkgdXNlIGEgbm9ybWFsIGxpbmVhciBzY2FsZSwgeWpzIGFuZCBteSB0aGUgcnVzdCBpbXBsZW1lbnRhdGlvbiBhcmUganVzdCAKCgoKCldlIGNhbiBwdXQgYSBsb3Qgb2YgdGhpcyBzdHVmZiBvbiBvbmUgZ3JhcGggaWYgSSB1c2UgYSBsb2cgc2NhbGUuIEl0cyByZW1hcmthYmxlIGhvdyBuZWF0IGl0IGxvb2tzLCBidXQgbG9nIHNjYWxlcyBhcmUgbWVhbmluZ2xlc3MgdG8gaHVtYW5zLgoKPiBhbGxfcGVyZi5zdmdjaGFydCBldmVyeXRoaW5nIG9uL1NoU2hhcmVEQml0ICBieSBsZWFwcyBiZWVuIG1haW50YWluZWQgYnkgYSBkaWVkaWNhdGVkIHRlYW0uIGFjcyBzdGlsbCB3ZWxsIHVzZWQgYW5kIHdlbGwgYnkgdGhlIHBlb3BsZSB3ZWxsIHVzZWQsICBhbmQgYmF0dGxlIHRlc3RlZC5pdHMgLCB3ZWxsIG1haW50YWluZWQgb3V0dmUgYmVlbiBZanMncyBzZW1hbnRpY3MgYWxzbyB0YWtlIHNsaWdodGx5IG1vcmVtZW1vcnltb3JlIG1lbW9yeSBpbiBwcmFjdGljZS5iaW5hcnkgbWlycm9yIHRoZSBiZW5jaG1hcmtzIEkgc2hvd2VkIGFib3ZlLCBJJ2QgbGlrZSB0byBrbm93LCBhbmQgaXQgd291bGQgYmUgZnVuIHRvIGZpbmQgb3V0c2VtYW50aWMgIHdvcnRoIG1lbnRpb25pbmcuWSwgd2hlcmFzZSBzdG9yZXMgQWx0aG91Z2gKCiBJIGhhdmUgIAoKIFdlJ2xsIAoKPiBhdXRvbWVyZ2UxLmRyYXdpby5zdmc8aW1nIHNyYz0+PGltZyBzcmM9YXV0b21lcmdlMS5kcmF3aW8uc3ZnPgo8aW1nIHNyYz1hdXRvbWVyZ2UxLmRyYXdpby5zdmc+Mgo8aW1nIHNyYz1hdXRvbWVyZ2UxLmRyYXdpby5zdmc+YW1fcGVyZjEKPGltZyBzcmM9YXV0b21lcmdlMS5kcmF3aW8uc3ZnPnJlZl9wZXJmMwo8aW1nIHNyYz1hdXRvbWVyZ2UxLmRyYXdpby5zdmc+eWpzX3BlcmY0PGltZyBzcmM9eWpzX3BlcmY0LnN2Zz41CjxpbWcgc3JjPXlqc19wZXJmNC5zdmc+Pgo8aW1nIHNyYz15anNfcGVyZjQuc3ZnPj4KPGltZyBzcmM9eWpzX3BlcmY0LnN2Zz4+CjxpbWcgc3JjPXlqc19wZXJmNC5zdmc+PgoKCgoKKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqCjxpbWcgc3JjPWFtX3BlcmYxLnN2Zz5fc21vb3RoClRoZSBjaGFydCBpcyBhIGJpdCBlYXNpZXIgdG8gcmVhZCB3aGVuIHdlIHNtb290aCBldmVyeXRoaW5nIGF2ZXJhZ2UgZXZlcnl0aGlnbiBvdXQgZXZlcnl0aGluZyBvdXQgYSBiaXQgLSBidXQgLiBDbGVhcmx5IHBlcmZvcm1hbmNlIGlzIHNsb3dseSBncmFkdWFsbHkgZ2V0dGluZyB3b2dldHRpbmcgZ3JhZHV1YWxseSB3b3JzZSBvdmVyIHRpbWUuClAgZ2V0cwoKCnwgVGVzdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVGltZSB0YWtlbiB8IFJBTSB1c2FnZSB8Cnw6LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICAgICAgIHwgLS0tLS0tLS0tLTp8IC0tLS0tLS0tLTp8CnwgYXV0b21lcmdlICh2MS4wLjAtcHJldmlldzIpICAgICAgIHwgIDI5MXMgICAgICB8IDg4MCBNQiAgICB8CnwgKipyZWZlcmVuY2UtY3JkdHMgKGF1dG9tZXJnZSAvIHlqcykqKiB8ICAgMzFzICAgICAgfCAgMjggTUIgICAgfAp8IEpTIGJhc2VsaW5lICAgICAgICAgICAgICAgICAgICAgICB8IDAuNjFzICAgICAgfCAwLjEgTUIgICAgfCoqKioKCgoKVGhlIFByb2Nlc3NpbmcgIFRoYXRzIGFib3V0IGp1c3Qgc2h5IG9mIDkwMCBlZGl0cyBwZXIgc2VvY2NvbmQsIHdoaWNoIGlzIGhvbmVzdGx5IGZpbmVwcm9iYWJseSBmaW5lLiBCdXRpcyB1c2luZyBhbmQgem9vbSBpbgoKKE5vdGUgdGhlIHkgdGhlIFkgYXhpcyAocm91Z2hseSBsaW5lYXJseSlbXShodHRwczovL2dpdGh1Yi5jb20veWpzL3lqcylvcGVuc291cmNlIEkKMy4gSXRzIG11Y2ggZmFzdGVyLCBiZWNhdXNlVGhXZSBjYW4gdXNlIGEgbXVjaCBzaW1wbGVyIGRhdGEgc3RydWN0dXJlLCB3aGljaCBtYWtlcyB0aGUgYWxnb3JpdGhtIG11Y2ggZmFzdGVyLmZsYXQgYXJyYXkgdG8gc3RvcmUgYWxsIHRoZWV2ZXJ5dGhpbmcsIHJhdGhlciB0aGFuIGEgIHdlaXJkIHRyZWUuc3AgVGhpcyBtYWtlcyBuIHVuYmFsYW5jZWRldmVyeXRoaW5nIHNtYWxsZXIgYW5kIGZhc3RlciBmb3IgdGhlIGNvbXBpbHR1dGVyIHRvIHByb2Nlc3MuNC4gRXZlbiB0aG91Z2ggdGhlIGltcGxlbWVudGF0aW9uIGlzIGRpZmZlcmVudCwgdGhpcyBhcHByb2FjaCBpcyAqc2VtYW50aWNhbGx5KiBpZGVudGljYWwgdG8gdGhlIGFjdHVhbCBhdXRvbWVyZ2UsIGFuZCB5anMgYW5kIHN5bmM5IGNvZGUuIChbRnV6emVyIHZlcmlmaWVkIChUTSldKGh0dHBzOi8vZ2l0aHViLmNvbS9qb3NlcGhnL3JlZmVyZW5jZS1jcmR0cy9ibG9iL21haW4vcmVmZXJlbmNlX3Rlc3QudHMpKQo1LiBJdHMgZmFzdGVyICphbmQqIHNpbXBsZXIsIHdoaWNoIG1vdmVzIHRoZSBbUGFyZXRvIGVmZmljaWVuY3kgZnJvbnRpZXJdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1BhcmV0b19lZmZpY2llbmN5KS4gSWRlYXMgd2hpY2ggZG8gdGhpcyBhcmUgcmFyZSBhbmQgdHJ1bHkgZ29sZGVuLgoKCgoKCjIuIERvaW5nIGl0IHRoaXMgd2F5IGxldHMgeW91IGltcGxlbWVudCB0aGUgc2VtYW50aWNzIG9mIG11bHRpcGxlIENSRFRzIGluIHRoZSBzYW1lIGNvZGViYXNlLCBpZiB5b3Ugd2FudCB0by4KMS4gWW91IGNhbiBpbXBsZW1lbnQgbG90cyBvZiBDUkRUcyBsaWtlIHRoaXMuIFlqcywgQXV0b21lcmdlLCBTeW5jOSBhbmQgb3RoZXJzIGFsbCB3b3JrMQoyLiBUaGUgY29kZSBzaXMgaXNpbXBsZXJlYWxseSBtcmVhbGx5IC5CZWluZyBmYXN0ZXIgQmVpbmcgZmFzdGVyICphbmQqIHNpbXBsZXIsIHdoaWNoIG1vdmVzIHRoZSBbUGFyZXRvIGVmZmljaWVuY3kgZnJvbnRpZXJdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1BhcmV0b19lZmZpY2llbmN5KS4gSWRlYXMgd2hpY2ggZG8gdGhpcyBhcmUgcmFyZSBhbmQgdHJ1bHkgZ29sZGVuLjMuIFlvdSBjYW4gaW1wbGVtZW50IG1lbnRtYW55IGxvaXN0IENSRFQgcyBpbiB0aGUgc2FtZSBjb2RlYmFzZS4gQW5kIGV2ZW4gdGhvdWdoIHRoZSBjb2RlIGlzIHZlcnkgZGlmZmVyZW50LCB0aGUgRXZlbiB0aG91Z2ggdGhlIGltcGxlbWVudGF0aW9uIGlzIGRpZmZlcmVudCwgdGhpcyBhcHByb2FjaCBpcyAqc2VtYW50aWNhbGx5KiBpZGVudGljYWwgdG8gdGhlIGFjdHVhbCBhdXRvbWVyZ2UsIGFuZCB5anMgYW5kIHN5bmM5IGNvZGUuIChbRnV6emVyIHZlcmlmaWVkIChUTSldKGh0dHBzOi8vZ2l0aHViLmNvbS9qb3NlcGhnL3JlZmVyZW5jZS1jcmR0cy9ibG9iL21haW4vcmVmZXJlbmNlX3Rlc3QudHMpKQpiYXNlc0l0IGRvZXNUaGVyb3JlZW9yZXRpY2FsbHkgdGhpcyBhbGdvcml0aG1yZWFsbHlzSSBpbiBwcmFjdGljZWNhbiAgaW4gYSBteSAqcmVmZXJlbmNlLWNyZHRzKnJlZmVyZW5jZS1jcmR0cyBjb2RlYmFzZS4gcHJvb3QgZiBvZiBjb25jZXB0ZXhwZXJpbWVudGFsbGlicmFyeWNvZGViYXNlKipJWVVVIG15IGltcGxlbWVudGF0aW9uIG9mIGF1dG9tZXJnZSdzIGFsZ29yaXRobSBpcyB0aGUgcmVhbC4gQW5kIGl0c2F1dG9tZXJnZSB1cAoKSXRzIGEgbG90IGZhc3RlciB0aGFuIApJdHMgYSBsb3QgZmFzdGVyIHRoYW4gYXV0b21lcmdlOgoKcmVmX3ZzX2FtX3BlcmYuc3ZnPGltZyBzcmM9PgohW10oKUF1dG9tZXJnZSBpcyBtdWNoIHNsb3dlciB0aGFuIHJlZmVyZW5jZS1jcmR0cyEhISEhISEhISEhW1tbW1tbW1tbW1tdXV1dXV1dXV1dXSgoKCgoKCgoKCgoKSkpKSkpKSkpKSlhdXRvbW1tb2VlcmdlIHBlcmZvcm1hbmNlIGNoYXJ0YXV0b21lcmdlIHBlcmZvcm1hbmNlIGNoYXJ0IHNtb290aGVkIHVvdXR0cmVlZSB3aXRoICJhYmMiIGluc2VydHN0cmVlIHdpdGggImFYYmMicmVmZXJlbmNlIGNyZHRzIGltcGxtZW50YXRpb24gem9vbWVkIGluIFBlcm9mcmZvcm1hbmNlIGdldHMgYmV0dGVyIG5lYXIgdGhhIGUgZW5kIHdoZW4gTWFydGluIHN0YXJ3ZW50IGJhY2sgdG8gdGhlIHN0YXJ0IG9mIGhpcyBwYXBlciBhbmQgc3RhcnRlZCBlZGl0aW5nIGl0Lm1ha2luZyBlZGl0cy5pbmdLZXZpbiAgaW4gWWpzQW5kIGJ5ICJ3ZSIsIEkgbWVhbiBlS0tldmluIHNvbHZlZCB0aGlzIHByb2JsZW0gYnkgdGhpbmtpbmcgYWJvdXQgaG93IHBodW1hbnMgYWN0dWFsbHkgZWRpdCBkb2N1bWVudHMuIHdlJydyZSB0eXBpbmd3ZXdoaWxlYSAgdGV4dCBsYXRlcnRoZSBuZXcgVGhlIG5leHQgZWRpdCB3aWxsIHByb2JhYmx5IGJlIHByZXR0eSBjbG9zZSB0byB0aGUgcHJldmlvdXMgZWRpdCwgc28gS2V2aW4ganVzdCBzY2FucyBmcm9tIGZvcndhcmRzIG9yIGJhY2t3YXJkcyBmcm9tIHRoZSBsYXN0IHBvc2l0aW9uCgogIHRvIG1lIHRvIG1lLCBiIC0gd291bGRuJ3QgWWpzIGhhLSBJIG1lYW4sIHRoYXRzIGEgYmlnIGFzc3VtcHRpb24hIGFwcGFyZW4gdG8gbWFrZQoKKEFuZCBJJ20gc2ltcGxpZihBbmQgSSdtIHNpbXBsaWZ5aW5nIGEgYml0IGhlcmUgLSBZanMgYWN0dWFseWx5IHN0b3JlcyBpYSB3aG9sZSBzZXQgb2YgY2FjaEFuZCB3V2hhdCBpCgooQW5kIHdoYXQgaWYgdHdvIHVzZXJzIGFyZSBlZGl0aW5nIGRpZmZlcmVudCBwYXJ0cyBvZiBhIGRvY3VtZW50PyBZanMgY2Fjc3RvcmVzIGEgd2hvbGUgc2V0IG9mIGNhY2hlIGxvY2F0aW9ucywgc28gdGhlcmUncyB1c3VhbGx5IGEgY2FjaGVkIG1hcmtlciBsb2NhdGlvbiBuZWFyYnkuKWFsbW9zdCBhbHdheXMgY3VyY3Vyc29yV2FjdHVhbGx5ICAgSSBJJ20gc2ltcGxpZnlpbmcgaGVyZSAtIC4gVCBubyBtYXR0ZXIgd2hlcmUgdXNlcnMgbWFrZSBjaGFuZ2VzIGluIHRoZSBkb2N1bWVudFlqcyBkb2VzIHRoYXRUaGUgYWxnb3JpdGhtIGNhbiAtIGJ1dCB0aGF0IGhhcHBlbnMgYW55IHRpbWVjdGhhdCBoYXBwZW5zIHdoZW5ldmVyIGEgdXNlciB0eXBlcyBhIHNlcmllcyBvZiBjaGFyYWN0ZXJzIHdpdGhvdXQgbW92aW5nIHRoZWlyIGN1cnNvcnJ1bnJ1bnNUaGlzIGJsb3dzIG1lIGF3YXkgYnV0IC0gLSBteSB0aGFua3MgdG8gdGhlIHNwYW5zIGFwcHJvYWNoIC4gQ2hCdXQgbmVhciB0aGUgZW5kKipZanMKICAKICAKICAKICAKICAKICBvbmUgb2Ygb3VyIGRvY3VtZW50IGl0ZW1zIGluIHRoZSBkZWNhZGUgc2luY2UgaXQgd2FzIHJlbGVhc2VkamF2YXNjcmlwdCBvYmplY3RzIGZyYWdtZW50ZWQgaW4gbWVtb3J5eWpzIHBlcmZvcm1hbmNlIGF2cyBvdGhlciBvYWFsb2dpZ29yaXRobXN5anMgcGVyZm9ybWFuY2UgaXNvbGF0ZWRiLXRyZWUgZGlhZ3JhbSBUaGlzIGlzbid0IGEgYnRyZWVtYXAgeW91YSBuIG9yZGluZXJhaW5hcnkgYi10cmVlLiBJbnN0ZWFkIG9mIHN0b3Jpbmcgb2Zmc2V0cyxlIFRoaXMgaWxldHMgdXRoZSB1cyByZXNpemUgY2hpbGRyZW5hIG5vZGUncyAgd2l0aCAqbG9nIG4qKCl0aGVhbnkgdGlpdGVtIG1vanVzdCAgZWRpdHMuIChXZSBqdXN0IHdhbGsgdXAgdGhlICBJbiBwcmFjdGljZSwgbW9zdCBvZiB0aGVzZSByZWFkcyB3aWxsIGFscmVhZHkgYmUgaW4geW91ciBDUFUncyBjYWNoZS4gVGhhdCBjb2RlcGF0aCBkb2Vzbid0IGdldCBiZW5jaG1hcmtlZCBoZXJlIHRob3VnaCAtIHlvdSdsbCBoYXZlIHRvIHRhbWtlIG15IHdvcmQgZm9yIGl0Li4gSXRzIGZhc3QgYnV0IGZvciBub3cgWWpzIGVkaXQuV2h5IDMyPyBJIHJhbiBteSAgYW5kIGxpa2UgaW4gdGhlIG90aGVyIHRlc3RzZWRpdGluZyAganVzdCBUaGlzIGlzIGZhc3RlciB0aGFuIGVkaXRpbmcgYSBzdHJpbmcgaW4gamF2YXNjcmlwdC4KCmFsbCAyNjBrIGVkaXRzIGluICBqdXN0RXZlbiB0aHJvdWdoIHdlYmFzc2VtYmx5LCB0aGlzIGNvZGVpcyAzeCBmYXN0ZXIgdGhhbiBlZGl0aW5nIGEgbmF0aXZlIGphdmFzY3JpcHQgc3RyaW5nIGRpcmVjdGx5LCBhbmQgaXRzIGRvaW5nIGEgd2hvbGUgbG90IG9mIGV4dHJhIHdvcmsgdG8gc3VwcG9ydCBjb2xsYWJvcmF0aXZlIGVkaXRpbmcgdG9vISFBIG15c3RlcmlvdXNBbmQgYmVjYXVzZSBtZW1vcnkgaXMgcGFja2VkIGluLCBzbyBwIGhhdmUgbm8gaWRlYS4gTWF5YmUgdGhlIGFsbG9jYXRvcj8gdGlnaHRseSBXZSBkb24ndCBjYXJlIHdoZXJlIGluc2VydHMgaGFwcGVuIC0gdGhpcyBzeXN0ZW0gc2kgZmFzaXMgdW5pZm9ybWx5IGZhc3Qgbm8gbWF0dGVyYWNyb3NzIHRoZSB3aG9sZSBkb2N1bWVudC5XZSBkb24ndCBjYXJlIHdoZXJlIGluc2VydHMgaGFwcGVuIC0gdGhpcyBzeXN0ZW0gaXMgdW5pZm9ybWx5IGZhc3QgYWNyb3NzIHRoZSB3aG9sZSBkb2N1bWVudC4gVGhlIGItdHJlZSBnaXZlcyB1cyAqbG9nIChuKSBwICogcGVyZm9ybWFuY2UgZm9yIGV2ZXJ5IGVkaXQsIG5vIG1hdHRlckEgYi10cmVlIGRvZXNuJ3RlZGl0cy4gVHJ1c3QgcGVyaW1wbGVtZW50YXRpb24gaW4gd2FzIG0gdnMgeWpzIEJ1dCBJIGV4cGVjdCB0aGUgckkgZXhwZWN0IHRoZSBydXN0IGltcGxlbWVudGF0aW9uIHRvIGxvb2sgdGhlIHNhbWUgb25seSBjaGFuZ2Ugd2lsbCBiZSB0aGUgIEkgZG9uJ3QgVGhlIHJ1c3QgdmVyc2lvbiBvZiB0aGlzIGNvZGVJIGRvbid0IGtub3cgd2h5IHQgaXMgM3ggZmFzdGVyLiBJcyBpdCB0aGUgamF2YXNjcmlwdCAvIFdBU00gaWJvdW5hcnlib3VuZGFyeT8gT3IgYXJlIHRoZSByZXJlIG9wdGltaXphdGlvbnNkb2VzRG9lcyBMTFZNIG1ha2VoYXZlIG1vcmUgdHJpY2tzIHdoZW5vcHRpbWl6aW5nIG5hdGl2ZSB4NjV4NzU2NTg2IGNvZGU/IE9yLCB0aG91Z2ggSSBhc3N1bWUgaXRzIGp1c3QgdGhlIHNhbWUgYnV0IDN4IHRoZSBwZXJmb3JtYW5jZSBjb3N0YyAgY29taW5nIGZyb20gLS10by0gaXMgdGhlIHN3YXNtIHZpcnR1YWwgbWFjaGluZWl0IGFsbCB0aGUgYm91bmRzIGNoZWNrcyB3YXNtIG5lZWRzdGhlIFdBU00gVk0gbmVlZHM/IEFJbiBhbk5vIG1hdHRlciAtIGl0cyBsaWdodG5pbmduZyBmYXN0LnRydWx5ICBhbnl3YXlBbmQgd29uZGVyIHdoYXQgdGhvc2Ugc3Bpa2VzIGFyZQoKCgpJIGZpZ3VyZSB0aGlzIGlzIGJldHRlciBmb3IgbW9sb3RzIG9mIHVzZSBjYXNlcywgIGFueXdheSAtIGZvciBlLiBGb3IgZXhhbXBsZSwgaWYgdGhlIHlvdSdyZSBlZGl0aW5nIHRleHQgaW4gVlMgQ29kZSwgdGhlIFZTIFZvZGUgQ29kZSBlZGl0aW5nIGllbnZpcm9ubWVudCB3aWxsIG5lZWQgaGF2ZSBhIGNvcHkgb2YgdGhlIGRvY3VtZW50IGFueXdheSwgc28gdGhlcmUncyBubyBpbmVlZCB0byBkdXBsaWNhdGUgZXZlcnl0aGluZyBpbiB0aGUgYi10cmVlLm15QlRyZWVTcGFubmluZwotIExvdHMgb2YgdXNlIGNhc2VzIHdpbGwgc3RvcmUgdGhlIGNvZG9jdW1lbnQgY29udGVudCBzb21ld2hlcmUgLSBCdXQgd2hlbiBpbnNlcnRpbmcgd2UgbmVlZCB0byB1cGRhdGUgMiBkYXRhIHN0cnVjdHVyZXMgaW5zdGVhZCBvZiAxLiBUaGlzIG1ha2VzIGV2ZXJ5dGhpbmcgbW9yZSB0aGFuIHR3aWNlIGFzIHNsb3csIGFuZCBpdCBtYWtlcyB0aGUgd2FzbSBidW5kbGUgdHdpY2UgYXMgYmlnICg2MGtiIC0+IDEyMGtiKS4KCi0gQnV0IHdoZW4gaW5zZXJ0aW5nIHdlIG5lZWQgdG8gdXBkYXRlIDIgZGF0YSBzdHJ1Y3R1cmVzIGluc3RlYWQgb2YgMS4gVGhpcyBtYWtlcyBldmVyeXRoaW5nIG1vcmUgdGhhbiB0d2ljZSBhcyBzbG93LCBhbmQgaXQgbWFrZXMgdGhlIHdhc20gYnVuZGxlIHR3aWNlIGFzIGJpZyAoNjBrYiAtPiAxMjBrYikuZWxzZSBhbnl3YXkuIEVnLCBpZiB5b3UncmUgdXNpbmcgVlMgY0NvZGUgaG9vayB0aGlzIHVwIHRvLCB0aGUgdGV4dCBjb250ZW50IGRvZXNuJ3QgbmVlZCB0byBiZSBzdG9yZWQgaW4gdGhlIENSRFQgYXQgYWxsLnByb2JhYmx5IGJ5VwotIExvdHMgb2YgdXNlIGNhc2VzIHdpbGwgc3RvcmUgdGhlIGRvY3VtZW50IGNvbnRlbnQgc29tZXdoZXJlIGVsc2UgYW55d2F5LiBFZywgaWYgeW91IGhvb2sgdGhpcyB1cCB0byBWUyBDb2RlLCB0aGUgdGV4dCBjb250ZW50IHByb2JhYmx5IGRvZXNuJ3QgbmVlZCB0byBiZSBzdG9yZWQgYnkgdGhlIENSRFQgYXQgYWxsLiBJbiB0aGF0IGNhc2UsIGl0c0ltcGxlbWVudGVkIGxpa2UgdGhpcywgaXQnZCBiZSByZWFsbHkgZWFzdCB0byB5IHRvIGp1c3QgdHVybiB0aGF0IGNvZGUgb2ZmLnRoZSBzdG9wIHN0b3JpbmcgdGhlIGNvbnRlbnQgYXQgYWxsIHZzIGNvZGUgaGFzd2lsbCBoYXZlIGEgY29wIG95IG9mIHRoZSBkb2N1bWVudCBhdCBhbGwgdGltZXMgYW55d2F5LiBTbyB0aGVyZSdzIG5vIG5lZWQgdG8gZSB0aGUgZG9jdW1lbnQgaW4gdGhlIG15ICBzdHJ1Y3R1cmVzIGFzIHdlbGwgSW1wbGVtZW50ZWQgbGlrZSB0aGlzLCBpdCdkIGJlIHJlYWxseSBlYXN5IHRvIGp1c3Qgc3RvcCBzdG9yaW5nIHRoZSBjb250ZW50IGF0IGFsbC5CdXQgd2hhdGV2ZXIuIE0gY29udGVudHNpbiBhIHByZXNpbmdsZSwgcHJldHR5YWxsIGRhdGEgaW4gb25lIGNoYXJ0CgpJCgpSZW1lbWJlciAsIGxvZyBzY2FsZXMgdHJpY2sgeW91ciBicmFpbi4gVGhlIGRhdGEgYWN0dWFsbHkgbG9va3MgbGlrZSB0aGlzOgoKdHlwZTogJ2xvZycsIGRvbWFpbjogWzAuMDAwNSwgNF0sIHRpY2tGb3JtYXQ6ICcsJywhW2FsbCBkYXRhIGluIG9uZSBjaGFydF0oYWxsX3BlcmYuc3ZnKV9saW5lYXIsIHdpdGggYSBsaW5lYXIgc3NjYWxlLiBBdXRvbWVyZ2UgbWFrZXMgZXZlcnl0aGluZyBsb29rIGZhc3QuOi4gSW4gY29tcGFyaXNvbjoKCiNbQCNbIVtdKHRvdGFscy5zdmcpCgoKCllvdSBjYW4gcGxheSB3aXRoIHRoZSBjaGFydHNpbmcgVGhlIGNoYXJ0cyB3ZXJlIG1hZGUgdXNpbmcgT2Jqc2VydmFibGVIUSdzIG9uW10oaHR0cHM6Ly9vYnNlcnZhYmxlaHEuY29tL0Bqb3NlcGhnL2NyZHQtYWxnb3JpdGhtLXBlcmZvcm1hbmNlLWJlbmNobWFya3MpLm4gWW91IHdvdWxkIGp1c3QgbmVlZCB0bzogQW5kICAgQW5kICBBbmQgUkdBIGhhcyBzbGlnaHRseSB3b3JzZSBvcmRlcmluZyBzZW1hbnRpY3MgaW4gc29tZWFuIGludGVybGVhdmluZyBwcm9ibGVtIHdoZW4gcHJlZml4aW5nIHRoaW4gd2hlbiBwcmVbXShodHRwczovL3d3dy5jbC5jYW0uYWMudWsvfmFyYjMzL3BhcGVycy9LbGVwcG1hbm5FdEFsLUludGVybGVhdmluZ0Fub21hbGllcy1QYVBvQzIwMTkucGRmKWZpeGluZ2Fub21vbGllc25vYW5vbWFsaWVzcHByZXBlbmRpbmcgdGV4dCAgLiB3ZWlyZHByb2JsZW1zIGNhbiBoYXZlaXRlbXMgbWFrZSBteSBjb2RlZm9yIGluZydhc3NZb3VyIHBlcmZvcm1hbmNlIGJlbmNobWFya3MgbWVhc3VyZSB0aGUgd3JvbiBnIHRoaW5nCi4gQW5kIEknIG1tIG1lYXN1cmluZyBBLiBPIChBbmQgYXV0b21lcmdlIGlzIGJhc2ljYWxseXVzdWFsbHkgcGVyZm9ybWFjbnMgdGhhdCB3ZWxsKS4gYWxyZWFkeWRvZXMgZG9lcyBIb3cgbXVjaCB0aW1lIGl0IHRha2VzIHN0b3JlZCBhcyBhIGNvbW11bml0eSBBbnkgcHJ1bmluZyBzeXN0ZW0gc2hvdWxkIHdvcmsgd2l0aCBhbGwgb2YgdGhlIGFsZ29yaXRobXMgSSd2ZSBzaG93biBoZXJlLkVhY2ggc3RlaW1wcm92ZW1lbnQgY2hhbmdlcyB0b28gbWFueSBMTFZNPyAoQWx0aG91Z2hCZWNhdXNlIGl0cyB0aGlzIGNvZGUgcnVuc3Nsb3dlciB0aHJvdWdoIFdBU01pdCB0aGViZWNhdXNlICBjYWxscyB0byB0aGUgIFZNIGFyZSAgc2xvc2xvd3NpbXBseWUgYmV0dGVyLCwgc2luY2UgaXQgY2FuIHVzZSAmIHZlY3Rvcml6ZSBhbHNvc3RlYWF5IHB1dCBzdWJzZXF1ZW50J3JlIGQgZG9uJ3QgbW92ZSBiZXR3ZWVuc2hhdmUgZXhhY3RseSB0aGUgc2FtZSBzaGFwZSBiZW5jaG1hcmtpdHMgIG1lbW9yeWF0aXZlIHdhcyBkZWxldGVkIG1tZWFucyB0aGUgIGlXaXRoIGEgbGluZWFyIHNjYWxlIHQKCkknSSd2ZSBiZWVuIHJlc2lzdGluZyBsaXN0aW5nIG9wIHRoZSBCdXQgcmVtZW1iZXIsIHRhdXRvbWVyZ2UgYXVhbmQgcmVmLWNyZHRzIHRoZSBpbXBsZWVtbnRhdGlvbnMgd2ltcGxlbWVudGF0aW9ucyBhcmVuJ3QgY29uc2lzdGVudGwuIFRoZXNlIG51bWJlcnMgY2hhbmdlIGEgbG90IEkndmUgYmVlbiBnZW5lcmFsbHkgcnNlZWlzc3Npc3Rpbmcgc2hvd2luZyBwZXJmb21yYW5jZSBucGVyZm9ybWFuY2UgbnVtYmVycyBsaWtlIHRoaXMgYmVjYXVzZSBnZXQgc2xvd2VyIG92ZXIgdGltZVRoZXknZCBiZSByZSBtdWNoIGZhc3RlciB0aGFuIHRoaXMgd2l0aCBzbWFsbCBkY29vY3VtZW50cywgYW5kIHNsb3dlciB3aXRoIGxhcmdlIG5kb2N1bWVudHMuQnV0IHRoZXNlIHRvdGFscyBmb3IgYXJlIGVudGlyZWwgIGV4dHJlbWxlbHkgYmVuY2htYXJrIGRlcGVuZGFudGhlIGFsZ29yaXRobXMgYXJlIHdpdGhyZXIgYmVmb3JlIGl0cyByZWFkeS5PdGhlIGNvZGUgaXMgcGVyZm9ybXMgbmVhcmx5IHRoZWFsbW9zdCB0aGUgc2FtZSBhczoKCiNAIVtdKGFtX3ZzX2FtcnMuc3ZnKVdTd2ljdHRjaGluZyB0byB0aGlzIHRoZSBydXN0IGJhY2thdXRvbWVyZ2UtcnMgYmFja2VuZCBkb2Vzbid0IG1ha2UgYW55IHRoaXMgdGVzdCBhbnkgZmFzdGVyLiAoVGhvdWdoIGl0IGRvZXMgdXNlIDN4IGxlc3MgUm1lbW9yeSlkb2VzIFlqcyAgc29sdmUgdGhlSG93IGRpZCBoZSBtYW5hZ2UgdGhhdD8KClNvIHJlbWVtYmVyLCB0aGVyZSBhcmUgdHdvIHByb2JsZW1zIHRyZW1lbWJlciwgdGhlcmUgYXJlIHR3byBwcm9ibGVtcyB0byBmaXg6CgotIEhvdyBkbyB3ZSBmaW5kSWYgYSB1c2VyIGluc2VydGVkIGF0IHBvc2l0aW9uIDEwMCBpbiB0aGUgZG9jdW1lbnQsIGhvdyBkbyB3ZSBmaW5kIEhvdyBkbyB3ZSBmaW5kIGEgc3BlY2lmaWMgaW5zZXJ0IHBvc2l0aW9uID8KLSBIb3cgZG8gd2UgaW5zZXJ0IGNvbnRlbnQgYXQgdGhhdCBsb2NhdGlvbiBpbiBhIGZhc3Qgd2F5PyBlZmZpY2llbnRseTEuMjIuIHRoZSBmaXJzdCBib3VuY2UgYXJvdW5kUmF0aGVyIHRoYW4gc2Nhbm5pbmcgdGhlIGRvY3VtZW50IGVhY2ggdGltZSBhbiBlZGl0IGhhcGVwZW5zLCBlcyBtYWUgYW5kZSBhbiBlZGl0aW5nV2hhdCBpZiBlZGl0cyBoYXBwbmVuIHJhbmRvbWx5PyEgPyEgIEJ1dCBwZW9wbGUgZG9uJ3QgYWN0dWFsbHkgZWRpdCBkb2N1bWVudHMgcmFuZG9tbHksIHNvICwgc290bmVhciBlYWNoIHVzZXJ0aGV5J3JlaW5nIGF0IHRoZSBzYW1lIHRpbWVkT25jZSB5anMgZmluZHMgdGhlIHRhcmdldCBpbnNlcnQgbG9jYXRpb24sIGl0IG5lZWRzIHRvWXNvbHZlcyAqKmNvbnN0bmF0dGFuYW50aGFzIGFuIGV4dHJhIGJvbnVzU28gdG9vLCBqdXN0IHN0b3JlZCBtb3JlIGNvbXBhY3RseSBpbnRlcm5hbFUgb2RvY3VtZW50IHVzaW5nIHQgdXNpbmcgdGhpcyB0cmlja2NvbnZlbmllbnRseSAgQW5kIHRoYXQgaGFwcGVucyBhIGxvdC4gaW4gdGhpcyB0ZXN0LkFuZGJlY2F1c2V3aGF0IHNvbWUgb2YgbXkgZmllcmllbmRzd2hhdCBzb21lIGZyaWVuZHMgd291bGRvZiBteSB0aGUgcmVhY3Rpb25zIG9mIHNvbWUgb2YgbXkgZnJpZW5kcyByaWRpY3VsZSBmcm9tIGxpc3QgaW1wbGVtZW50YXRpb24KCkF1dG9tZXJnZSBpcyBhbHNvIGluIHRoZSBwcm9jZXNzIG9mIGRyYW1hdGljYWxseSBpbXByb3ZpbmcgcGVyZm9ybWFuY2UgYmFzZWQgb24gVGhlIGEgdGVhbSBpcyBhbHNvIGZhbnRhc3RpYy4gVGhleSd2ZSBiZWVuIHJlY2VwdGl2ZSB0byBhIGxvSSd2ZSBjaGF0dGVkIHdpdGggdGhlbSBhYm91dCBhIGxvdCBvZiB0aGVzZSBpc3N1ZXMgYW5kIHRoZXkncmUgdXNpbmcgdGhlc2UgdHJpY2tzLiBJQnkgdGhlIHRpbWUgeW91ciBlYUluIGEgIFBlcmZvcm1hbmNlIG1pZ2h0IGhhdmUgaW1wcm9kcmFtYXRpY2FsbHlBdXRvbWVyZ2UgcCBpbXByb3ZlZCBieSB0aGUgdGltZWJldHdlZW4gd2hldGltZSB0aW1lIEl0aGUgdGltZSBJIHdyb3RlIHRoaXMgYW5kYnkgdGhlIHRpbWUgeW91J3JlIHJlYWRpbmcgdGhpcyB0b28uaGFkIHNvbWUgZ3JlYXQgY29udmVyc2F0aW9ucyB3aXRoIHRoZW0gYWJvdXQgLiBUaGV5IGNhcmUgYWJvdXQgJydyZSBtYWtpbmcgcGVyZm9ybWFuY2UgdGhlbiAgIzEgaXNzdWUgb2YgMjAyMSBwbGFubmluZyBvbiB1c2luZyBhIGxvdCBvZiB0aGVzZSB0cmlja3MgdG8gbWFrZSB0aGVhdXRvbWVyZ2UgZmFzdC5JdCBtaWdodCBhbHJlYWR5IGJlIG11Y2ggZmFzdGVyIHRoZXJlJ3MgYSBsb3Qgb2Ygd29yayB0aGF0SSdsbCBwcm9iYWJseSBhbmQgYXV0b21lcmdlLCBlZGl0b3IgYmluZGluZ3MgaXQgR29vZCBDUkRUIGxpYnJhcmllcyBuZWVkIGEgVGhlcmUncyAgaXMgYSBsb3QgbW9yZSB0aGF0IGdvZXMgaW50byBhIGdvb2QgQ1JEVCBsaWJyYXJ5IHRoYW4gc3BlZWQuIENSRFQgbGlicmFyaWVzIGFsc28gbmVlZCB0byBzdXBwb3J0IGRhdGFhbGwgYmVuY2htYXJrcyBhcmUgbGllcywgYW5kIEknbSBub3QgaW1tdW5lV2VsbCwgeSBXZWxsLCB5ZXMuIEJ1dCBMaWVzLCBkYW1uZWQgbGllcyBhbmQgYmVuY2htYXJrcwoKSXMgdGhpcyBmb3IgcmVhbD8gWWVzLCBidXQgLi4uLi4KRmlyc3QsIGkuIEFuZCBob3BlZnVsbHkgdGhpcyBpcyBhbGwgcmVwcm9kdWNhYmxlLkIgQnV0IEknbSBub3QgdGVsbGluZyB0aGUgZnVsbCBwaWN0dXJlIGhlcmUucGVmb3JvZm1yZm9ybWFuY2UgaXMgY29tcGxpY2F0ZWQgYW5kIHlvdSBjYW4gYnV0IEEKSXMgaXQgZmFpckFyZSBDUkRUIGFuZCBZanMgQXV0b21lcmdlIGFuZCBkb2luZyB0aGUgc2FtZSB0aGluZz8gSVMgaXQsIGFiYXJyaW5nIHNvbWUgdW5sdWNreSBHQyBwYXVzZXNhbnN0b3Jlc1RoZSByZXN1bHQgaXMgdGhhdCBUaGlzIHVzZXMgZXh0cmEgUkFNLCB0aGF0IG5vbmUgbyBmIHRoZSBvdGhlciBmb3IgYSBzd2VldCBmZWF0dXJlLCB3aGljaCBub25lIG9mIHRoZSBvdGhlciBpbXBsZW1lbnRhdGlvbnNBcyBhICwgaW4gcXVlc3Rpb24uanVzdGlmeWFibGUgbHkgaQpUaGVyZSdzIGEgcGVyZm9ybWFuY2UgbWVzYWF1c3JlbWVhc3VyZSBub2JvZHkgaXMgdGFraW5nIHNlcmlvdXNseSBlbm91Z2ggYXQgdGhlIG1vbWVudC4gQW5kIHRpdGhhdCBpcywgLCBUaGVyZSdzIGEgcGVyZm9ybWFuY2UgbWVhc3VyZSBub2JvZHkgaXMgdGFraW5nIHNlcmlvdXNseSBlbm91Z2ggYXQgdGhlIG1vbWVudC4gQW5kIHRoYXQgaXMsICAoaW4gYSBkYXRhYmFzZSlBbmQgdWFyZSBhY3R1YWxseSBpbnRlcmF0Y3Rpbmcgd2l0aCBpc24ndCB2ZXJ5b2Z0ZW4gdXNlZnVsLlRob3cgd2Ugc2hvdWxkIGludGVyYWN0IHd0aWl0aCB0aGlzIHNvcnQgb2YgZGF0YS5zdGVwIGluIHRoaXMgc3Rvam91cm5leWltcGxlbWVudGF0aW9uIGRhbGwgb2YgdGhlc3R0aGlzSSdtIHNpbmcgIHNob3VsZCBiZSBkaXN0cmlidXRlZCB0aG9zZSBjaGFuZ2VzJ3Mgb3B0aW1pemVyIChUaG91Z2ggaWYgIHRoZSBmYWN0IGF1dG9tZXJnZS1ycyBpcyBzdGlsbCBwcmV0dHkgc29sb3duJ3QgYW55IGZhc3RlciB0aGFuIGF1dG9tZXJnZSBnaXZlcyBtZSBzb21lIGNvbmZpZGVuY2UpLiB0aGF0IGl0cyBub3QganVzdCBydXN0VApUaGUgZmFjdCBhdXRvbWVyZ2UtcnMgaXNuJ3QgYW55IGZhc3RlciB0aGFuIGF1dG9tZXJnZSBnaXZlcyBtZSBzb21lIGNvbmZpZGVuY2UgdGhhdCBpdHMgbm90IGp1c3QgcnVzdC4gdGhhdCBCdXQgaG9uZXN0bHkgLi4gOiAoVGhvdWdoKS4uQnV0dGhlaXJTIHNtYXJ0IHNtYXJ0c1RoZSBhbm5veWluZyBwYXJ0IHdhcyB0aGF0ICBpbmZ1cmlhdGluZyBzb21lb25lIG91dCBzb21lYm9keSB3aWxsIGZpbmR0aGVyZSB3aWxsIHdyaXRlIGFUaGF0c3VzaW5nICBpbnN0ZWFkIG9mIGFuIGFycmF5THNBbyBsb3NvIGxvblNvIGxvbmcgYXMgd2UgaGF2ZSBhbiBpbnNlcnQgcG9zaXRpb24sIGx1cyB0byBpbnNlcnQgcyBiaWRpcmVjdGlvbmFsdGhkb2VzIG9uZSBtb3JlIHRoaW5nIHRvIG1ha2VwaW1wcm92ZSBwZXJvZnJtYW5wZXJmb3JtYW5jZS5IIHVzdWFsbHkuVyBTbyB3Rkl1c2luZyBzcGFjZW5zYXJyYXkgIG9uaSBpbiB0aGlzIHRlc3QuSSBMb29rIC0gZXZlbktldmluT3Igd2hlbiB0aGUgdXNlckJ1VGhpcyBpcyBuZWF0LCBidXQgdG1vcmUgaW5mb3JtYXRpb25vZldlIHdhbnR0b3RoYXRzIFRoYXRzIHByb2JhYmx5IG5vIHQgYSBiaWcgZWFkZWFsIGluIHRleHQgZWRpdGluZyB1c2VzbG93ZXhvdGljIGlzIHZlcnkgY2xldmVyIGl0cyBub3QgbWljcm9vcHRpbWl6YXRpb25zbWFsbGNsZXZlciBhdCBhbGwnJ3JlIG5vdCBsaW1pdGVkIHRvIGhlcmUndGhlCgpVc3VhbGx5IHdoZW4gcGVvcGxlIHRhbGsgYWJvdXQgYi10cmVlcyB0aGV5IG1lYW5hICAgYSBCVHJlZU1hcCAuIEJ1dCBteSBpbXBsZW1lbnRhdGlvbiBpbnNuc24ndCBUaGF0cyBub3Qgd2hhdCBJJ20gZG9pbmcgaGVyZS5rZXlzIChyZWN1cnNpdmVseSlkbyBpbnNlcnRpb25zIGFuZCBkZWxldGVpb25zIGludGltZSwgd2hpbGUgdXBkYXRpbmcgdGhlIHBvc2l0aW9uIG9mIGV2ZXJ5IGNoYXJhY3RlciBpbiB0aGUgd29sZSBkb2N1d2hvbGUgZG9jdW1lbnQuIEl0IFtdKGh0dHBzOi8vZG9jLnJ1c3QtbGFuZy5vcmcvc3RkL2NvbGxlY3Rpb25zL3N0cnVjdC5CVHJlZU1hcC5odG1sKW51bWJlciBvZiBjaGFyYWN0ZXJzIGluIHRoYXR0b3RhbGwgIC4gZmluZCBhbnkgaW10dGVtIGJ5IGNoYXJhY3RlbG9vayB1cCBhbnkgaXRlbSBieSBiY2hhcmFjdGVyIHBvc2l0aW9uLCBvcixlIChyZWN1cnNpdmVseSlTbyB3ZSBjYW4gaW4gdGhlIGRvY3VtZW50IG9yYWxsICBhbnl3aGVyZSBpbiB0aCBlZG9jdW1lbnQgCgo+IERvZXMgdGhpcyBoYXZlIGEgbmFtZT8gSSd2ZSBiZWVuIGNhbGxpbmcgaXQgYSAicmFuZ2UgdHJlZSIsIGJ1dCB0aGF0IG5hbWUgc2VlaXMgW1t0YWtlbiBieSBhbm90aGVyIGFsZGF0YSBzdHJ1Y3R1cmVdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1JhbmdlX3RyZWUpSSB0aGluayBJIHRoaW5rIHRoYXQKClRoZSB0b3RhbCBJSW4gdGhpcyBiZW5jaG1hcmsgdGhlIGF2ZXJhZ2VUaGUgbnVtYmVyIG9mIG9wZXJhdGlvbnMgcGVyIHNlY29uZCBsb29rcyBsaWtlIHRoaXNJbiB0aGlzIGJlbmNobm1hcmsgdGhlZWRpdHMgZWFjaCBhbGdvcml0aG0gY2FuIHByb2Nlc3M6IHJlZW1tZW1iZXIscGFydGljdWxhcmx5IGZvciAsIHRoZXNlIHBlcm9ybWFucGVyZm9ybWFuY2UgbnVtYmVyc3J1biAgQW5kIGluIHRoZSBjYXNlIG9mIGF1dG9tZXJnZSwgaXQgbWF5IGJlIGFibGUgdG8gZG8gYWJvdXQgOTAwIGVkaXRzIHBlciBzZWNvbmRwcm9jZXNzICpvbiBhdmVyYWdlKiwgYnV0IHRoZSBzbG93ZXN0IGVkaXQgZHVyaW5nIHRoaXMgYmVuY2htYXJrIHRvb2sgc3RhbGxlIGQgdGhlIGphdmphdmFzY3JpcHQgZm9yIDEuOCAqc2Vjb25kcy5WOGVudGlyZWx5IGNvbXBsZXRlbHkgIGJlY2F1c2UgdGhlc2xvdyBkb3duIGFzIHRoZSBkb2N1bWVudCBncm93cyBhbHRob3VnaCBjYW4gcnVuIEluIGEgcmVzYWwgdXNhZ2UgIGFwcGxpd2ViIGFwcGxpY2F0aW9uIHRoaXMgd291ZGxsZCBtYWtlIHRoZSB3aG9sZSB3ZWJwYWdlIGhhbmcgLmFwcHdlYiBhcHAgIEl0cyBUaGlzIGNoYXJ0IGF2ZXJhZXNnZXMgb3ZlciBUaGF0IGJpZyBzcGlrZT8gQSBncm91cCBvZiAxMDAwIGVkaXRzIHRvb2sgb3ZlciAzLjUgc2Vjb25kcyB0byBwcm9jZXNzLiBUaGlzIGNoYXJ0IGF2ZXJhZ2VzIG92ZXJJdCBoYXBwZW5lZCBiZWNhdXNlIGEgc2luZ2xlIGVkaXQgdG9vayAqMS4yOCBzZWNvbmRzKiB0byBwcm9jZXNzLiAoUHJlc3VtYWJseXdhcyBwcm9jZXNzaW5nIGZvci4gT2Zmb2YuIEluIGEgcmVhbCBhcHBsaWNhdGlvbiB0aGF0IHdvdWxkIGZlZWwgbGlrZSB0aGUgd2hvbGUgd2Vic2l0ZSBmcmVlemluZyB1cCBmb3IgYSBjb3VwbGUgb2Ygc2Vjb25kcyBobGl3aGlsZSB5b3UncmUgdHJ5aW5nIGluIHRoZSBtaWRkbGUgb2YgdHlwaW5nLkFtZWFucyB0aGUgd2hvbGUgYXBwbGljYXRvaW5pb24gd291bGRlIHdvdWxkIHRyYW5zbGF0ZSB0b3NpbmcgdXB3b3VsZCB0cmFuc2xhdGUgdG8gd291bGQgcmVzdWx0IGluIHRoZW1lYW5zIHdvdWxkZXplIHNvbWV0aW1lc2FwcCgob3IgYnJvd3NlciB0YWIpICBpbiB0aGUgbWlkZGxlIG9mIHNvbWV0aW1lc1dlIGNhbiBzZWUgdGhlIHBhdmVyYWdlIFQgYXZlcmFnZSBpbiB0aGlzIHRlc3Qgc3BlZWQgb2YgcHJvY2Vzc2luZyBlZGl0c2VhY2ggYWxnb3JpdGhtIGVzIHJlbWVtYmVyIC10aGVzZSBudW1iZXJzIGFyZSBtaXNsZWFkaW5nLiBJbiBhUmVtZW1iZXIsIGlncmFkdWFsbHkgQXV0b21lcmdlIGNhbiAgYnV0QW5kIGV2ZW4gdGhvdWdoIGFBV2UgY2FuIG1ha2UgYSBjaGFydCBzaG93aW5nIHQgYXJlbid0IHN0ZWFkeS4gVGhleSdyZSBmYXN0IGF0IGZpcnN0ICwgdGhlbiAgYSBmdWxsIHNpbmdsZXJlIHdhcyBhbiBzbG93ZXN0YXZlcmFnZSAgKHdoKHdoaWNoIGZpcyBmYXN0IGVub3VnaCB0aGF0IHVzZXJzJ3MgcyB3b24ndCBub3RpY2UpICBtZW1vcnkgdXNhZ2UgcGFjZWFrZWQgYXQgMi42R0IgYW5kIFRoZSBwZWFrIG1lbW9yeSB1c2FnZSBpcyBBdCBwZWFrLCBhdXRvbWVyZ2UgdXRoZSBiZW5jaG1hcmsgdXNlZCAyLjYgR0Igb2YgUkFNLiBuZWVkZWR2dnZ2aW4gdGhpcyB0ZXN0ICAgSSBNeSB0ZXN0IGJld29ya3N0YXRpb24gaGFzIENQVSBhbmQgUkFNIGZvciBkYXlzLCBidXQgeW91ciB1c2VycyB3d2Rvbid0Lgogd3JpdGUgb3B0aW1pemV3YWhhdCBub3JtYWwgKEhvd2xzIG9sTGF1Z2h0ZXIgb2YgbXkgZnJpZW5kcyBub3R3aXRoc3RhbmRpbmcpLm9rRGVzcGl0ZSB3aGF0IG15IGZlaWVucmllbmRzIHdvdWxkIGhhdmUgeW91IHRoaW5rIXRoaW5rIGJldHdlZW4gd3BwZW9wbGUgd2l0aCAuIEZyb3IgYWxsIE9vZiBLZXZpbidzIEtldmluIGlzIEZvciBhbGwgb2YgS2V2aW4ncyBZanMgaXMgZXhjZWxsZW50IGluIHBhcnQgYmVjYXVzZUtldmluIGFkYXB0IGtLZXZpbllqcydzICBvd2VzIGl0cyBzZXJpYWxpemF0aW9uYWRhcHRlZEtldmluIGNvcGllZCBpdCAgUmVtZW1iZXIsIHRoZSBXQVNNIHZlcnNpb24gcyhzaG93biBoZXJlKSBpcyBzdGlsbCB0aGFuIGhvd3RoZSBzcGVlZCB0aGlzIGNvZGUgcnVucyBuYXRpdmVsYXl5IEkgd29uZGVyIHdoeT9BcmUgdGhJTm8gbWF0dGVyIC0gaSByZXF1ZXN0aW5nIG1vcmVtIG1lbW9yeSBmb3JtIHJvbSB0aXMgSSBzdXNlcGVjdCBpdHMgdGhldGhlIG1lbW9yeSBhbGxvY2F0b3JpdHMgdGhlZU1heWJlIHRoZSBtZW1vcnkgYWxsb2NhdG9yIGlzIHJlcXVlc3RpbmcgbW9yZSBtZW1vcnkgZnJvbSBpdHMgdG9ybSBtIGFyZUl0cyBwcm9iYWJseS5XIHBlcmZvcm1hbmNlIHRocm91Z2ggaW4gdGhlaXMgY2hhcnRBbmQgcnRoaXMgaXMgdGhlIHNsb3cgdmVyc2lvbi4gVGhlIGNvZGUgcnVucyAzeCBmYXN0ZXIgYW5vdGhlciBCdXQgd0lNYXliIGUgaXQgZG9lc24ndCBtYXR0ZXIgdG9vIG11Y2ggLSBpSSBhc3N1bWUgaXRzSSBwcm9iYWJseVdoZW4gSSBydW4gdGhpcyBiZW5jaG1hcmsgbmF0aXZlbHkgaXQgYWdhaW4gdGhhbiB0aGlzdGhlIGNvZGUgaXNuZWVkcyBjYWxscyB0byBtYWxsb2NtYWtlc05vdGU6IEZvciBsIHdlJ2xsIGVuZCB1cGluZ0luRm9yRm9yIGV4YW1wbGUgQ1JEVHRoZSBlZGl0b3JrZWVwLCBhdCBhbGxUaGlzIGltcGxlbWVudGF0aW9uIGFwcHJvYWNoIG1ha2VzIGl0IGVhc3kgdG8ganVzdCB0dXJuIHRoYXQgcGFydCBvZiB0aGUgY29kZSBvZmYuQnV0IHJlZ2FyZGxlc3MsIG0nd2UnJycnJ0F1dG9tZXJnZSBpc1RoaXMgaXNpJ3QncycnJycnJycnJycnJycnJycnJycnJycgYScnJycnJycnJyd0aGlzdGl5ZHknJycnJycgIAoKSW4gVGhpcyBleGFtcGxlIHNob3dzIGEgZG9jdWVubWVudCB3aXRoIDEwMDAgY2hhcmF0Y3RlcnN3aGljaCBjdXJyZW50bHkgaGFzIC46dGhlIHRyZWUgc3RvcmluZyA1IEluIHRoIGVlIGV4YW1scGUgYWJvZXhhbXBsZSBhYm92ZSwgd2UgMnRoZSBpdGVtIHdpdGggcG9zaXRpb24gMjAwIG11c3QgYmUgaW4gdGhlIDM0NTUwbWlkZGxlIG5vZGUgaW4gdGhlIGlubGVhZiBub2RlIGhlcmUuIGluIHRoaXMgYmVuY2htYXJrIFVubGlrZSBpbiB0aGUgZGlhZ3JhbSxlQ1BVcyBjYW4gY29weSBzZXZlcmFsSXRzIG4gZW50cmllc3RoaXNidWNrZXQgIFRoYXRzIDV4IGZhc3RlciB0aGFuIHlqcywgYW5kIG1yZW1hcmthYmx5LCAuLkFuZCBvdXIgYmFzZWxpbmUgdGVzdCAsIGRlc3BpdGVhbGwgdGhlIHdvcmsgdG8gc3VwcG9ydElBbmQgaUl0aGlzIGJlbmNobWFya1tdKGh0dHBzOi8vZ2l0aHViLmNvbS9qb3NlcGhnL3RleHQtY3JkdC1ydXN0L2Jsb2IvYmEyMGI2Mzg2YzA0NzI5NThmMzMwMjRjZTBiODA2ZTc1NDcwZTFjYS9iZW5jaGVzL3lqcy5ycyljYWxjdWxhdGVFIEFzIEl2ZSd2ZSBzaG93bix3SW4gdGhlIGJpZyBzcGlrZUluIHRoZSBzbG93ZXN0IHNwaWtlIG5lYXIgdGhlIGVuZCxhdG9vayB0byBwcm9jZXNzLCAoQWx0aG91Z2ggaXQgZG9lcyBzbW9vdGggb3V0IHByZWVyZm9ybWFuY2UpaGFsdmUgbWVtb3J5IHVzYWdlIGFuZCAuLmF2ZXJhZ2UgcGVyb2ZtYWZvcm1hbmNlIGluIHRoaXMgdGVzdG9uZSBvdGhlckkgdGhpbmsgVWZvclRoZXJlJ3MgYW5vdGhlciBwZXJhcHJwcHJvYWNoIHRvIG1ha2luZyBDUkRUcyBmYXN0LCB3aGljaCBpcyBwcnVuaW5nLiBFc3NlbnRpYWxseSwgICBJIGhhdmVuJ3QgbWVudGlvbmVkIGhlcmUgYXQgYWxsIGFuZCB0aGF0KipCeSBlZGVmYXVsdCwgbGlzdCBldGhlc2Vvbmx5IGV2ZXIgIG1oYXZlIHRvZm9yIFRoZXJlIGFyZSBhIGZldyBhcHJwcm9hY2hlcyB3aGljaCBwdWxsIFN0b3JpbmcgYW5kQSBsb3Qgb2YgdGhlIHBlcmZvcm1hbmNlIGFuZCBtZW1vcnkgY29zdCBvZiBDUkRUcyBjb2VtbWVzIGZyb20gc3RvcmluZ2xvYWRpbmcsICBhbmQgc2VhcmNoaW5nIHRoYXQgZ3Jvd2luZyBkYXRhIHNldC4gdGhpcyBkYXRhIG91dCBlbnRpcmVseS5Gb3NvbWUsIGFuZCBGb3IgZXhhbXBsZSwgW10oaHR0cHM6Ly9icmFpZC5vcmcvYW50aW1hdHRlcilzb2x2ZSB0aGlzIHByb2JsZW0gYnkgZmluZGluZyB3YXlzIHRvIGRpc2NhcmQgdGhpcyBoc3NoZWRzb21lIG9mICBUaGF0IHNhaWQsIGp1c3QgaGFzIGl0cyByZXBvc2l0b3JpZXMgaGF2ZSB0ZWhpaGVpciBkYXRhIG9ubHkgZ3JvdyBvdmVyIHRpbWVldmVyICBhbmQuIFNvIG1hYWJ5eWJlTWF5YmUgaXQgZG9lc24ndCBtYXR0ZXIgc28gbG9uZyBhcyB0aGUgdW5kZXJseWluZyBzeXN0ZW0gaXMgZmFzdCBlbm91Z2g/YWJvdXQgbWluZCB0b28gbXVjaHBydW5pbmcgaXMgQWFsc28gIHNob3VsZCBhbHNvIGJlIGFibGFwcGxpY2FibGUgdG8gYW55IE1heWJlIHRoYXRzIGhvdyAgcnV0aGxlc3NseSBwcnVuaW5nICYgYXJjaGl2aW5nIG9sZCBkdGFhdGEgaXMgaG93IHRoZSBwYXRjaHR0aCB0byBnZXR0aW5nIGFub3RoZXIgNXggZXZlYm4gYiBtIG4gYmV0dGVyIHBlcmZvcm1hbmNlLCB5ZXQgLkFueSBnb29kIHdvcmsgd2l0aCBhbGx0YWxrIGFlZCBhYm91dHNhaHN0ZXAgaW4gdGhpcyBvcHRpbWl6YXRpb24gaG9qdWlvdXJuZXkgaW52b2x2ZXMgdG8gRm9yIGV4YW1wbGUsIG0gYW5kIEknbSBub3QgaXNvbGF0aW5nIHRoZW10aG9zZSBjaGFuZ2VzSSBjYW4gb25seWp1bXB5anMgYW5kIGhvZXN0bmVzdGx5IG15ICBwcm9ibGVtdGhlYnJlYWRrZG93bnN0aWxsIFtbIFtmcm9tIGF1dG9tZXJnZTpdKGh0dHBzOi8vZ2l0aHViLmNvbS9hdXRvbWVyZ2UvYXV0b21lcmdlL2Jsb2IvZDJlN2NhMmUxNDFkZTBhNzJmNTQwZGRkNzM4OTA3YmNkZTIzNDE4My9iYWNrZW5kL29wX3NldC5qcyNMNjQ5LUw2NTkpIElmIHlvJ3JlIEl0IGxvb2tzIEF1dG9tQ29tcENvbXBhY3RlZCwgYXV0b21lcmdlIGxvb2tzIGxpa2UgdGhpczpBCgoKYGBgamF2YXNjcmlwdAoKCmBgYGNvbnN0IGludGVncmF0ZUF1dG9tZXJnZVNtb2wgPSA8VD4oZG9jOiBEb2M8VD4sIG5ld0l0ZW06IEl0ZW08VD4pID0+IHsKICBjb25zdCB7aWR9ID0gbmV3SXRlbQogIGRvYy52ZXJzaW9uW2lkWzBdXSA9IGlkWzFdCgogIGxldCBwYXJlbnQgPSBmaW5kSXRlbShkb2MsIG5ld0l0ZW0ub3JpZ2luTGVmdCkKCiAgbGV0IGkKCiAgLy8gU2NhbiB0byBmaW5kIHRoZSBpbnNlcnQgbG9jYXRpb24KICBmb3IgKGkgPSBwYXJlbnQgKyAxOyBpIDwgZG9jLmNvbnRlbnQubGVuZ3RoOyBpKyspIHsKICAgIGxldCBvID0gZG9jLmNvbnRlbnRbaV0KICAgIGxldCBvcGFyZW50ID0gZmluZEl0ZW0oZG9jLCBvLm9yaWdpbkxlZnQpCgogICAgLy8gU2hvdWxkIHdlIGluc2VydCBoZXJlPwogICAgaWYgKG9wYXJlbnQgPCBwYXJlbnQKICAgICAgfHwgKG9wYXJlbnQgPT09IHBhcmVudAogICAgICAgICYmIChuZXdJdGVtLnNlcSA9PT0gby5zZXEpCiAgICAgICAgJiYgaWRbMF0gPCBvLmlkWzBdKQogICAgKSBicmVhawogIH0KCiAgLy8gV2UndmUgZm91bmQgdGhlIHBvc2l0aW9uLiBJbnNlcnQgYXQgcG9zaXRpb24gKmkqLgogIGRvYy5jb250ZW50LnNwbGljZShpLCAwLCBuZXdJdGVtKQogIGRvYy5tYXhTZXEgPSBNYXRoLm1heChkb2MubWF4U2VxLCBuZXdJdGVtLnNlcSkKfXR5cGVzY3JpcHRpLCAgKFRoaXNpIHMgQmxhY2sgbWFnaWMgaW5jb21pbmcpIWxldGNvbnN0ICBsZXQgaSAgLy8gU2NhbiB0byBmaW5kIHRoZSBpbnNlcnQgbG9jYXRpb24KCiAgICAgICAgfHwgKG9wYXJlbnQgPT09IHBhcmVudCAmJiAobmV3SXRlbS5zZXEgPT09IG8uc2VxKSAgICAgIHx8IChvcGFyZW50ID09PSBwYXJlbnQgJiYgKG5ld0l0ZW0uc2VxID09PSBvLnNlcSkgJiYgaWRbMF0gPCBvLmlkWzBdKSAgICAgIHx8IChvcGFyZW50ID09PSBwYXJlbnQgJiYgKG5ld0l0ZW0uc2VxID09PSBvLnNlcSkKICAgICAgICAmJiBpZFswXSA8IG8uaWRbMF0pICAgICAgfHwgKG9wYXJlbnQgPT09IHBhcmVudAogICAgICAgICYmIChuZXdJdGVtLnNlcSA9PT0gby5zZXEpICAgICAgfHwgKG9wYXJlbnQgPT09IHBhcmVudCAmJiAobmV3SXRlbS5zZXEgPT09IG8uc2VxKSAgICAgIHx8IChvcGFyZW50ID09PSBwYXJlbnQgJiYgKG5ld0l0ZW0uc2VxID09PSBvLnNlcSkgJiYgaWRbMF0gPCBvLmlkWzBdKSAgICAgIHx8IChvcGFyZW50ID09PSBwYXJlbnQgJiYgKG5ld0l0ZW0uc2VxID09PSBvLnNlcSkKICAgICAgICAmJiBpZFswXSA8IG8uaWRbMF0pICAgICAgfHwgKG9wYXJlbnQgPT09IHBhcmVudAogICAgICAgICYmIChuZXdJdGVtLnNlcSA9PT0gby5zZXEpV2FybmluZzogRGVlcCBzb3VyY2VyeUJsYWNrIG1hZ2ljLldyaXR0ZW4gdGhpcyB3YXksIGF1dG9tZXJnZSAgLyoqIC8gU0xPV2luIHRoaWluIHRoaSBzcyBzdHlsZSB0dXJucyBpbnRvVGhpc1NwZWNpZmljYWxseSwgdGhlc2UgMjAgbGluZXMgb2YgY29kZToKICAgICAgICBpZiAobmV3SXRlbS5zZXEgPiBvLnNlcSkgYnJlYWsKICAgICAgICAgIAogICAgbGV0IG9wYXJlbnQgPSBmaW5kSXRlbShkb2MsIG8ub3JpZ2luTGVmdCkgLy8gT3B0aW1pemF0aW5vbmlvbiBmb3Igbm9uLWNvbmN1cnJlbnQgZWRpdGluZyBjYXNlIG9ubHlUaGlzIGlzIGp1c3QgYW4gby4KICAgIE9wdGltaXphdGlvbi5Vbm5lY2Vzc2FyeSBveHoKICBkb2MudmVyc2lvbltpZFswXV0gPSBpZFsxXQogIAogIGRvYy52ZXJzaW9uW2lkWzBdXSA9IGlkWzFdCi8vICAgLy8gQW5kIHNhc3NvcnRlZCBib29ra2VlcGluZy5kbyB2YXJpb3VzLCBsaWtlIHRoaXM6Cgo8dmlkZW8gY29udHJvbHM+CiAgPHNvdXJjZSBzcmM9aHR0cHM6Ly9pbnZpc2libGVjb2xsZWdlLnMzLXVzLXdlc3QtMS5hbWF6b25hd3MuY29tL2JyYWlkLW1lZXRpbmctMTAubXA0JycjdC09MjcwCiAgPC9kaXZ2aWRlbz4+IHR5cGU9dmlkZW8vbXA0IGhlaWdodD00MDAzMDBPLiBBdXRvbWVyZ2UgbG9va3MgbGlrZSB0aGlzLCAsIHRob3VnaCB0aGVyZSdzIHByb2JhYmx5IHRoZSBwZW9wbGUgd2hvIHVuZGVyc3RhbmQgdGhpcyBjb2RlIHByb2JhYmx5IGZpdCBpbiBhIHNtYWxsIHJvb20sIHNvIGRvbid0IG9yd29ycnkuIEQgaWYgdGhpcyBsb29rcyBsaWtlbWFrZXMgbm9zZSAgc2Vuc2UuSFRoaXMgaXMgd2hhdCBpdCBhY3R1YWxseSBsb29rcyBsaWsgZWUgaW4gcHJhY3RpY2UsIGJ1dCBkb24ndCB3b3JyeSBpZiBpdCBtYWtlcyBubyBzZW5zZS4gVGhlIHNldCBvZiBwZW9wbGUgd2hvIGRvIHVuZGVyc3RhbmQgdGhpcyBjb2RlSSB0aGluayB0cy4gSWYgeW91J3dhbiB3YW50IHRvIGxlYXJuIG1vcmUsIEkgZ2F2ZSBhIFt0YWxrXShodHRwczovL2ludmlzaWJsZWNvbGxlZ2UuczMtdXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vYnJhaWQtbWVldGluZy0xMC5tcDQjdD0zMDApIGEgZmV3IHdlZWtzIGFnbyBhYm91dCB0aGlzIGFwcHJvYWNoLm4gaW5mb3JtYWwsIGdvaW5nIGludG8gYWxvdCBtIGxvdCBtb3JlIGRldGFpbCBhYm91dCBob3cgYW5kICp3aHkgKiBDUkRUcyB3b3JrIGxpdGhpcyB3YXkucHBhYXJyZWVubnR0e31QcGFyZW50SWQsICwgY29udGVudGkgc2VxLElkeElkeElkeElkeElkeElEeGRJZHggdG8geW91VCBwcm9iYWJseVdlIGNvdWxkIHByb2JhYmx5IGZpdCBldmVyeW9uZSB3aG9zIHdpdGggYSBmZXcgbW9yZSBjb21tZW50cyBteQoKIGFib3V0IGFsbCBvZiB0aGlzLCBhbmQgd2hlcmUgdGhvc2UgYmxhY2sgbWFnaWMgdGhhdCBibGFjayBtYWdpYyBsb2dpYyBjYW1lIGZyb21nYXZlICBhdCBhIGJyYWlkanMgbWVldGluZy4gSW4gbXkgdGFsayBJIHdlbnQgLFtdKGh0dHBzOi8vYnJhaWQub3JnLykgbWVldGluZ2EgdGFsayBhIGZldyB3ZWVrcyBhZ28gQnV0amF2YXNjcmlwdCwgd2l0aCBjb2RlZnVuY3Rpb25hdXRvbWVyZ2VJbnNlcnQncmUgaW50ZXJlc3RlZCBpbmluZ0J1VGhlIGltcG9ydGFudCBwb2ludCBpcywgdCBhIGZld3RvIG9uIHRoZSBwbGFuZXQgbWVldGluZ215IGtsb3VuZ2Uga2EgbWVldGluZyAuLi5uZXdJdGVtLgogIGxldCBpCiAgCiAgCiAgIHBhcnRwcm9iYWJseSBsb3RzIG9mICBhbGxUaHMgaXMgYWxnb3JpdGhtIGlzIEluIG15IHJlZmVyZW5jZS1jcmR0cyBjb2RlYmFzZSBJIGhhdmUgYW4gaW1wbGVtZW50YXRpb24gb2YgYm90aCBSR0EgKGF1dG9tZXJnZSkgYW5kIFlBVEEgKHlqcykuIFRoZWlyIHBlcmZvcm1hbmNlIGluIHRoaXMgdGVzdCBpcyBpZGVudGljYWwuCiBUaGV5IHNoYXJlIG1vc3Qgb2YgdGhlaXIgY29kZSAoZXh2ZXJ5dGhpbmcgZXhjZXB0IHRoaXMgb25lIGZ1bmN0aW9uKSBhbmQgdHRoZWlyICAgLy8gU0xPVyhzbG93KSAvLyAoc2xvdykKCkllLCB0aGUgdHdvIGxpbmVzIEkgbWFya2VkICpgKihzbG93YClgIGluIHRoZSBjb2RlIGxpc3RpbmcgYWJvdmUud2hhdCBpbmRleCB0aGRvZXMgdGhhdCBjb3JyZXNwb25kIHRvSWxpbmVhcmx5ICAtIHdoaWNoIGxpbmVhciAgaXMgd2hhdCB3ZSBleHBlY3QgZm9yIHdoZW4gdG9GQ2hhbmdpbmcgZGF0YSBzdHJ1Y3R1cmVzRmFzdGVyIEZGaXhDaGFuZ2luZyB0aGUgZGF0YSBzdHJ1Y3R1cmUgOgoKKEJ1dCBkb24ndCBiZSBhbGFybWVkIGlmIHRoaXMgbWFrZXNsb29rcyBkY29uZnVzaW5nIC0gZXZlcnlvbmUgd2hvIGNhdW5kZXJzdGFuZHMgdGhpcyBjb2RlIHRoZSBwZW9sZXBsZSB3aG8gdW5kZXJzdG5hZCB0aHVuZGVyc3RhbmQgdGhpcyBjb2RlIGZpdCBhcm91bmQgYSBzbXRvZGF5IGZpdCBpbiBhIHNtYWxsIG1lZXRpbmcgcm9vbS4pcHJvYmFibHkgZ29pbmQgZWcgZGVlcGVyIG9uIHRoaXN3ZSBjb3VsZCBwcm9iYWJseSBmaXQgZXZlcnlvbmVzb24gdGhlIHBsYW5ldCAgdG9kYXl0bzEyKCYqICgqMSlUaGVzZSBhcmUgdGh3IGVUaGVzZSBhcmUgdGhlIGxpbmtlcyhUaGVzZSBsaW5lc2EgcmUgYXJlIG1hcmtlZCAoMSkgYW5kICgyKSBpbiB0aGUgY29kZSBsaXN0aW5nIGFib3ZlKS4qKioqVG8gdW5kZXJzdGFuZCB3aHkgdGhlc2UgbGluZXMgYXJlIGVudGhpcyBpcyBuZWVkZWQsIGxjb2RlICBuZWNlc3NhcnlOb3RlLCBzLkFuZChVbmZvcnR1bmF0ZWx5IHcnc2VwaCcsIDFTbyBpCgpXaHkgZG9lcyB0aGUgZ3JhcGggaGF2ZSB0aGlzIHNoYXBlPyBIZXJlJ3MgdGhlIGNoYXJ0Z3JhcGggb2YgdGhlIGVpbnNlZGl0IHBvc2l0aW9uIGZvciBldmVyeSBjaGFuZ2V5IGtleXRzdHJva2UuLCB3aXRoIHRoZSBzYW1lIGF2ZXJhZ2luZyBidWNrZXRpbmcgYW5kIHNtb290aGluZyBhcHBsaWVkOgohW3JlZmVyZW5jZSBjcmR0cyBpbXBsZW1lbnRhdGlvbiB6b29tZWQgaW5dKHJlZl9wZXJmMy5zdmcpaW5zcG9zRWRpdGluIHBvc2l0aW9uIHRocm91Z2hvdXQgZG9jdW1lbnQgIGluIHBhcnRpY3VsYXJ0aGlzSWYgd2UgIHdoZXJlZWFjaCAgaGFwcGVuZWQgdGhyb2d1aG91dHRocm91Z2hvdXQgdGhlIGVkaXRpbmcgdHJhY2UgYW5kIHVzZSwgdGhlIHJldXNsc3VsdCBpcyByZW1hcmthYmx5IGZhbWlsaWFyIFRoYXRzICwgd2hpY2ggLCB3aGljaCBpcyBkb3VibGUgeWlrZXMgaXMgYWN0dWFsbHkgc3VwZXIgZmFzdCBhdCB0aGlzLCBzbyBtYXliZSBpdHMgbm90IHVzaW5nIGFuPyBXaG8ga25vd3MhIHRvIGltcGxlbWVudCBhbiBhcnJhQXJyYXN5c3N1c3BpY2lvdXNseSAgcGFydHY4IGlzbid0QnV0IHRoZSBnZW5lcmFsIHJ1bGUgaXMsIGlpbiBmZWdlbmVyYWxhYm91dCAuSVRoZSB0aW1lIHRha2VuIHRvIHBlcmZvcm0gZWFjaCBpbnNlcnQgbG9va3MgIGxpa2UgdGhpcy4gOmlzIHJlYXNvbmFibHkgZmFzdCwgYnV0dGlpVGhlcmUncyBhIGxvdCBnb2luZyBvbiBoZXJlIGJlY2F1c2UgaW5zZXJ0cyBoYXBwZW5lZCBhbGwgb3ZlciB0aGUgZG9jdW1lbnRNYXJ0aW4ncyBlZGl0aWduIHBzbmcgcG9zaXRpb24gYm91bmNlZCBhcm91bmQgdGhlIGRvY3Vlbm1lbnQuIEJ1dCB0aGVyZSdzIGEgbHN0cm9uZyBsaW5lYXIgdHJlbmQgdXAgYW5kIHRvIHRociBlIHJpZ2h0LCB3aGljaCBpcyB3aGF0IHdlIHdvdWxkIGV4cGVjdCBmb3IgYXdoZW4gZWFjaCBpbnNlcnQgdGFrZXMgKE8obikgdGltZSAuLioqczpwZXJmb3JtYW5jZSBnZXQgYmV0dGVyIG5lYXIgdGhlIGVuZD8gQW5kIHdoeSBzaW1wbHkqKndpdGhBbmQgd2h5IHRoaXMgc2hhcGUgaW4gcGFydGljdWxhcj8gQW5kIHdlZXJpbHkgYXJlIGp1bmsgZm9vZCBmb3IgeW91ciBpbnV0dWl0aW9uQnV0UmVtZW1iZXIsIHdXc3RpbGwgd2UgZW5kIHVwIHdpdGggdGhlIHNhbWUgY3VyYSB2ZXJ5IGN1cnZlIEhvdyB3ZSBpbXBsZW1lbnQgb3VyIGFsb2dnb3JpdGhtcyBtYXR0aGluZ3MgbWF0dGVycywgLm91ciBhbGdvcml0aG1zIG1hdHRlcnMuIEhvdyB3ZSBpbXBsZW1lbnQgb3VyIGFsZ29yaXRobXMgbWF0dGVycy4KCiBpZiB3ZSBnZXQgY3JlYXRpdmUgd2l0aCBpbXBsZW1lbnRhdGlvbm91ciAgc3RyYXRlZ2llc1dpdGggdGhlIHJpZ2h0IGFwcHJvYWNoLCB3IENSRFRzdGhhdCBUaGUgc2FtZSBkYXRhIG9uIHdpdGhMIG9uc29tZSAsIG5vIG1hdHRlciBob3cgdGhlIGV0ZWFzaW5nIGZyb20gbXkgZnJpZW5kcywgSSBnZXR3YXMgdXNpbmdub2RlanMhc2l0dGluZyBvbiB0aG9pcyBjb2RlIHdhcyB1c2luZ2F1dG9tZXJnZVsgYmVuY2htYXJrXShodHRwczovL2dpc3QuZ2l0aHViLmNvbS9qb3NlcGhnLzEzZWZjMTQ0NDY2MGMwNzg3MGZjYmQwYjNlOTE3NjM4I2ZpbGUtanNfYmFzZWxpbmUtanMpYWxsIHRoZWlzIGNhYXBhYmxlIG9mIGdvaW5nCgpUaGlzIHRlU28gZWRpdGluZyBwZXJmb3JtYW5jZSBpcyBkb21pbmF0ZWR0aGUgdGltZSBzcGVudCBhcHBseWluZyBjaGFuZ2VzIGJ5IHRoZSB0aW1lIHNwZW50IHNjYW5uaW5nIGYgb3VyIGRvY3VtZW50IGFycmF5LnRoZSdzIGl0ZW0gKDEpIC0gYnlpdCB0YWtlcyB0byB0aHJvdWdodGhlIHJlc3VsdCBpcyBpc0RlYXRoIGJ5IDEwMDAgc2NhbnNJdCBsb29rcyBsaWtlIHRoZSBFZGl0cyBhdCB0aGUgZW5kIG9mIHRoZSBkb2N1bWVudCBhcmUgbXVjaCBzbG93ZXIgdGhhbiBlZGl0cyBhdCB0aGUgc3RhcnQgbGlrZSBPcGVyYXRpb25hbCBUcmFuc2Zvcm1hdGlvbm90cG8gdGhhdCBhcmUgYmxhY2stYm94Y29uY3VycmVudCBlbmRkaXRzdHdwIGNsaW8gY2xpZW50cyB0aGUgc2FtZSByZWdpb24gb2YgdGV4dCBhdCB0aGUgZXNhbWUgdGltZSxBcmUgdGhleSBtZXJnZWQ/IERvIHRoZXkgY29uZmxpY3RIb3c/ICwgb3IgZG8gdGhlPyA/ICBXaGF0IGFyZSB0aGUgcnVsZXM/LCBuYWFuZCBpZiBzbyBpbiB3aGF0IG9yZGVyIHdoaXRlLWJveCBvZiB0aGUgc3lzdGVtIHByb2dyYW1taW5nZG9lcyBpdCBwZXJmb3JtIGluIGRpZmZlcmVudCBlZGl0aW5nb3B0aW1pemVkIGlzIGl0LCBhbmQgZm9yIHdoYXQgdGhlIGNvZGUqKioqTGlrZXdpc2UgYSoqKiphbGxldmVyeSBpbXBsZW1lbnRhdGlvbiBvb2YgdGhlIHN5c3RlbSBObyBtYXRldGVyICBCdXQgbm8gbU5vIG1hdHRlciBob3cgbWFueSB0ZXN0cyB5b3Ugd3JpdGUsIHRoZXJlIGFyZSBhZ2l2ZW4gZW5vdWdoIHRpbWUgc29tZW9uZSB1c3VhbGx5IGZpbmRzIGFub2h0ZXJtb3JlIGJ1Z3MuIEFuZGFub2h0ZXJ0aGVyZSBhcmUgYUJ1dCBubyBtIGJ1Z3MuIE5vIG1hdHRlciBlSWYgeW91IHdhaXQgbG9uZyBlbm91Z2gsIHNvbWVib2R5IHdpbGwgZmluZCBtb3JlY2FuIGRlc2lnbiBhYmJiZWVlaGhoYWFhdnZ2aWlpb29vdXV1cnJyc2VtYW50aWNzc2VtYW50aWNzc2VtYW50aWNzYmJiZWVlaGhoYWFhdnZ2aWlpb29vdXV1cnJyVGhhdHMgLk4sIHdoaWNoIGlzIG5oZWJhdmliZWhhdmlvdXJpcyBkZWZpbmVkIGJ5IHRoaXMgYWxnb3JpdGhtKVBQUGxsbGFhYWlpaW5ubiAgIHNzc3R0dHJycmlpaW5ubmdnZyAgIGVlZWRkZGlpaXR0dHNzcyAgIGlpaW5ubiAgIEpKSlNTU1lZWWpqanNzc1lqc1lqc1lZWVlZWWpqampqanNzc3Nzc1lZWVlZWWpqc3NZanNZWVlZWVlqampqampzc3Nzc3NZWVlZampqanNzc3NZWVlqanNzWWpzWWpzWVlqanNzCgo+IEFuZCB5ZXMsIEkga25vdywgVjk4IGR0cmllcyBpdHMgaGFycmRlc3QgdG8gcHJldmVudCB0aGlzLiBCdXQgaXRzIG5vdCBtYWdpYy5tYWRlIG9mICBzb3IgdHQgbyBmdGhpZiB0aGluZyB3aGVuIGl0IGNhbmhwbGFpbiAgZWRpdGluZ2JiYmJiZWVlZWVoaGhoaGFhYWFhdnZ2dnZpaWlpaW9vb29vdXV1dXVycnJycm1lcmdpbmcgY29uY3VycmVudCAgaXQnc3JhbmdlIHRyZWVbXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9SYW5nZV90cmVlKSAgQSBNeSByYW5nZUFuZCBJJ20gIEludGVyVGhlIHJhbmdlIHRyZWUgaW50ZXJubGFsbHkgdXNlcyBhIFRoZSByYW5nZSB0cmVlIGlzIHJlYWxseVVuZGVyIHRoZSBob29kLCBteSByYW5nZSB0cmVlIHMgaXMgYWN1dGFsbHVhbGx5IGphY3R1YWxseSBqdXN0IGEgYi10cmVlLiBCdXQgdXNsaWdodGx5IG1vZGlmaWVkIEJ1dCB1Cj4gRG9lcyB0aGlzIGhhdmUgYSBuYW1lPyBJJ3ZlIGJlZW4gY2FsbGluZyBpdCBhICJyYW5nZSB0cmVlIiwgYnV0IEkgdGhpbmsgdGhhdCBuYW1lIGlzIFt0YWtlbiBieSBhbm90aGVyIGRhdGEgc3RydWN0dXJlXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9SYW5nZV90cmVlKQpJJ20gc3VyZSBJIGRpZG4ndEkga1RoYXQgd2lraXBlZGlhIGFyaXRpY2xlIFRoaXMgaXMgYSByYW5nZSB0cmVlLCByaWdodD8gaXRzIHByZXR0eW9uIHJhbmdlIHRyZWVzIGlzIGEgcHJldHR5IHBvb3IgbWF0ZGVzY3JpcHRpb24gb2Ygd2hhdCBJJ20gZG9pbmcgaGVyZS5UaGVbXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9SYW5nZV90cmVlKWJhZHdlYWs0NDQ2MjYyIGJ5IDN4LC4gKGsgZG93biB0byAgZnJvbSAxODBrIGRvd24pLmVudHJpZXMgUGxhaW4gc3RyaW5nIGVkaXRzIGluIEpTICAgICAgICAqKioqKipQbGFpbiBzdHJpbmcgZWRpdHMgaW4gSlMgICAgICAgICFbcnVzdCBpbXBsZW1lbnRhdGlvbiBpbiB3YXNtIHZzIFlqc10ocnVzdF9wZXJmNi5zdmcpCgo3MTEuLjExNTYgb3ZlcjE1MDAwNTZ1bmRlciAxMjA5MTkzaHR0cHM6Ly9naXRodWIuY29tL2pvc2VwaGcvZGlhbW9uZC10eXBlcyBhIGNhbGxlZCBEW0RpYW1vbmQgdHlwZXNkRERpYW1vbmQgaW4gYW4gYXJyYXkgZml4ZWQgc2l6ZVRJbnNlcnRpbmcgbGlrZSB0d2l0aCBhIHN0cnVjdHVyZSBsaWtlc2EgbGl0dGxlIGJpdCBvZkFuZCB3cmVhc29uYWJseSAKUnVzdCBnaXZlcyB1cyB0b3RhbCBjb250cm9sIG92ZXIgdGhlIG1lbW9yeSBsYXlvdXQsIHNvIHdlIGNhbiBwYWNrIGV2ZXJ5dGhpbmcgaW4gdGlnaHRseS4gVW5saWtlIGluIHRoZSBkaWFncmFtLCBlYWNoIGxlYWYgbm9kZSBpbiBteSBiLXRyZWUgc3RvcmVzIGEgYmxvY2sgb2YgMzIgZW50cmllcywgcGFja2VkIGluIGEgZml4ZWQgc2l6ZSBhcnJheSBpbiBtZW1vcnkuIEluc2VydGluZyB3aXRoIGEgc3RydWN0dXJlIGxpa2UgdGhpcyByZXN1bHRzIGluIGEgbGl0dGxlIGJpdCBvZiBtZW1jcHktaW5nLCBidXQgYSBsaXR0bGUgYml0IG9mIG1lbWNweSBpcyBmaW5lLiBNZW1jcHkgaXMgYWx3YXlzIGZhc3RlciB0aGFuIEkgdGhpbmsgaXQgd2lsbCBiZSAtIENQVXMgY2FuIGNvcHkgc2V2ZXJhbCBieXRlcyBwZXIgY2xvY2sgY3ljbGUuIEl0cyBub3QgdGhlIGVwaWMgaHVudCBvZiBhIG1haW4gbWVtb3J5IGxvb2t1cC4KCgogSSBkb24ndCBrbm93ICgpIEkgaGF2ZSBubyBpZGVhIHdoeSB0aGF0cyAgb24gbXkgY29tcHV0ZXIuaGFyZHdhcmVmYXN0MzMzaHR0cHM6Ly9naXRodWIuY29tL2pvc2VwaGcvZGlhbW9uZC10eXBlcy9ibG9iL3lqcy1zdHlsZS9iZW5jaGVzL3lqcy5yc0l0IGdldHMgZXZlbiBmYXN0ZXIgaWYgd2Ugc2tpcCB3YXNtIGFuZCBJIGFuZCBydW4gdGhpcyB0aGx5W0l0IGdldHMgZXZlbiBmYXN0ZXIgaWphdmFzY3JpcHQgYW5kIHRoZS4gTGlrZSB0UnVubmluZyBuYXRpdmVseSB0aHJvdWdoIHJ1c3Rnb2VzLlRoZSBiZW5jaG1hcmsgc2FtZSBiZW5jaG1hcmsgcG9ydGVkdG8gcnVzdFs1MDAweDUwMDB4IGZhc3RlciA6OiBBIGNhc2Ugc3R1ZHkgaW4gb3B0aW1pemF0aW9uIHRoYXQgZ28gNTAwMCB4IGZhc3Rlck1ha2luZyAgZ29uICBhZHZlbnR1cmVIb3cgSSBtYWRlIGFzIGdvIGluIG9wdGltaXphdGlvbltdKGh0dHBzOi8vZ2l0aHViLmNvbS9qb3NlcGhnL2RpYW1vbmQtdHlwZXMpNTQ2NDY1NTQ2NDU1NiBvdmVyMTIxNCBJIGhhdmUgbm8gaWRlYS5idW5jaCBvZmp1c3Qgc2VlbWVkIGhhcHBlbmVkIHRvIGJlIHJhbiB0aGUgZmFzdGVzdC4gSSBoYXZlIG5vIGlkZWEuICB3aHkgdGhhdHMgdGhlIGJlc3Qgd29ya2VkIG91dCB0byBiZSB0aGUgYmVzdC53b3JrZWQgd2VsbFtdKGh0dHBzOi8vZ2l0aHViLmNvbS9qb3NlcGhnL2RpYW1vbmQtanMpSUphdmFzY3JpcHQgYW5kIFdBU00gaXMgbm93IGEgYm90dGxlbmVjay4gIGFsbCB0aGF0IGFuZCBydW4gdGhlaHR0cHM6Ly9naXRodWIuY29tL2pvc2VwaGcvZGlhbW9uZC10eXBlcy9ibG9iLzQyYThiYzhmYjRkNDQ2NzExNDdjY2FmMzQxZWVlMThkNzdiMmQ1MzIvYmVuY2hlcy95anMucnNqYXZhc2NkcmlwdGRpcmVjdGx5IGluIHJ1c3QsIHdldGhlYWxsMTM5NHJlc3VsdHMgaW4gIC0tPjwhLS0gCgpIbSwgbGV0cyB6b29tIGluIGEgYml0IHRoZXJlIGFuZCBqdXN0IE9oLCBpdHMgc28gZmFzdCB5b3UgY2FuIGJhcmVseSBzZWUgaXQgbmV4dCB0byB5anMgKCpmbGVleHh4eCouIExldHNhbmQgYmFzayBpbiB0aGF0IGZsYXQgbGluZTogd2hhdCBhIHBpdHkuSWNvbnNpc3RlbnRseSAoKTo6CgpXZWxsLCBuZWFybHkgZmxhdCBsaW5lLiBJIGhhdmUgbm8gaWRlYSB3aGF0IHRoZSBqaXR0ZXJ5bmVzcyBpcyB3aHkgaXRzIGEgYml0LiAtIHRob3VnaCB0aGUgcy4gSXRzIHByb2JhYk1heWJlIGRlbGV0ZXMgYXJlIGZhc3RlciB0aGFuIGluc2VydHMgb3Igc29tZXRoaW5nLnNsaWdodGx5IG1hcmdpbmFsbHkgLCBzbyB3ZSdyZSBzZWVpbmcgdGhlIGluc2VydCAvIGRlbGV0ZSByYXRpbyBhZ2EuIHBvcCBvdXQgb2YgdGhlIHRpbWluZyBkYXRhfjRhZ2Fpbkkgd29uZGVyIGlmIHRoZW5lc3Mgc2hvd3NpcyBzaG93aW5nIG9yIHNvbWV0aGluZz9hIAoKV2VsbCwgYSBuZWFybHkgZmxhdCBsaW5lLiBJIHdvbmRlciBpZiB0aGUgaml0dGVyeW5lc3MgaXMgZGVsZXRlcyBhcmUgbWFyZ2luYWxseSBmYXN0ZXIgdGhhbiBpbnNlcnRzIG9yIHNvbWV0aGluZz93aGF0IHRoYXQga2ppdHRlcnluZXNzIGlzIGFib3V0Py4uP0FuZCByZW1lbWJlciAsdGhpcyBpcyAgbm9kZWpzVCBTbyoqSWZzYW5vdGhlcigpIHRoYXQgbXVjaCBtZW1vcnlFaCwgSSAgNTU2NjEuMQotLS0KOkJ1dCBsTyB0aGUgZGF0YWRpYW1vbmQtdHlwZXNodHRwczovL2dpdGh1Yi5jb20vam9zZXBoZy9kaWFtb25kLXR5cGVzL3RyZWUvNDJhOGJjOGZiNGQ0NDY3MTE0N2NjYWYzNDFlZWUxOGQ3N2IyZDUzMiBSVVNURkxBR1M9Jy1DIHRhcmdldC1jcHU9bmF0aXZlJyBbXShodHRwczovL2dpdGh1Yi5jb20vam9zZXBoZy9kaWFtb25kLXR5cGVzL2Jsb2IvNDJhOGJjOGZiNGQ0NDY3MTE0N2NjYWYzNDFlZWUxOGQ3N2IyZDUzMi9zcmMvbGlzdC9kb2MucnMjTDE1KWxpc3Rsb29rIGF0IG1lbW9yeSBzdGF0aXN0aWNzIGJ5IHJ1bm5pbmdjYXJnbyBydW4gLS1yZWxlYXNlIC0tZmVhdHVyZXMgbWVtdXNhZ2UgLS1leGFtcGxlIHN0YXRzTQpNeSBydXN0IGNyZHQgd2FzbSB3cmFwcGVyIGFueXdoZXJlLgoKVGhlIGNoYXJ0cyB3ZXJlIG1hZGUgb24gW09ic2VydmFibGVIUV0oaHR0cHM6Ly9vYnNlcnZhYmxlaHEuY29tL0Bqb3NlcGhnL2NyZHQtYWxnb3JpdGhtLXBlcmZvcm1hbmNlLWJlbmNobWFya3MpLgoKWW91J2xsIGFsc28gbmVlZCBgYXV0b21lcmdlLXBhcGVyLmpzb24uZ3pgIGZyb20gW2pvc2VwaGcvY3JkdC1iZW5jaG1hcmtzXShodHRwczovL2dpdGh1Yi5jb20vam9zZXBoZy9jcmR0LWJlbmNobWFya3MpIGluIG9yZGVyIHRvIHJ1biBtb3N0IG9mIHRoZXNlIHRlc3RzLiBUaGUgcmVmZXJlbmNlLWNyZHRzIGJlbmNobWFyayBkZXBlbmRzIG9uIFtjcmR0cy50cyBmcm9tIGpvc2VwaGcvcmVmZXJlbmNlLWNyZHRzLCBhdCB0aGlzIHZlcnNpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9qb3NlcGhnL3JlZmVyZW5jZS1jcmR0cy90cmVlL2ZlZDc0NzI1NWRmOWQ0NTdlMTFmMzY1NzVkZTU1NWIzOWYwN2U5MDkpCgpGb3IgbXkgcnVzdCBpbXBsZW1lbnRhdGlvbiByZXN1bHRzIGNvbWUgZnJvbSBiZW5jaG1hcmtpbmcgW2pvc2VwaGcvZGlhbW9uZC10eXBlcywgYXQgdGhpcyB2ZXJzaW9uXShodHRwczovL2dpdGh1Yi5jb20vam9zZXBoZy9kaWFtb25kLXR5cGVzL3RyZWUvNDJhOGJjOGZiNGQ0NDY3MTE0N2NjYWYzNDFlZWUxOGQ3N2IyZDUzMikuIEJlbmNobWFyayBieSBydW5uaW5nIGAgUlVTVEZMQUdTPSctQyB0YXJnZXQtY3B1PW5hdGl2ZScgY2FyZ28gY3JpdGVyaW9uIHlqc2AuIFRoZSBpbmxpbmUgcm9wZSBzdHJ1Y3R1cmUgdXBkYXRlcyBjYW4gYmUgZW5hYmxlZCBvciBkaXNhYmxlZCBieSBlZGl0aW5nIFt0aGUgY29uc3RhbnQgYXQgdGhlIHRvcCBvZiBzcmMvbGlzdC9kb2MucnNdKGh0dHBzOi8vZ2l0aHViLmNvbS9qb3NlcGhnL2RpYW1vbmQtdHlwZXMvYmxvYi80MmE4YmM4ZmI0ZDQ0NjcxMTQ3Y2NhZjM0MWVlZTE4ZDc3YjJkNTMyL3NyYy9saXN0L2RvYy5ycyNMMTUpLiBZb3UgY2FuIGxvb2sgYXQgbWVtb3J5IHN0YXRpc3RpY3MgYnkgcnVubmluZyBgY2FyZ28gcnVuIC0tcmVsZWFzZSAtLWZlYXR1cmVzIG1lbXVzYWdlIC0tZXhhbXBsZSBzdGF0c2AuCgpGb3IgbXkgcnVzdCBpbXBsZW1lbnRhdGlvbiByZXN1bHRzIGNvbWUgZnJvbSBiZW5jaG1hcmtpbmcgW2pvc2VwaGcvZGlhbW9uZC10eXBlcywgYXQgdGhpcyB2ZXJzaW9uXShodHRwczovL2dpdGh1Yi5jb20vam9zZXBoZy9kaWFtb25kLXR5cGVzL3RyZWUvNDJhOGJjOGZiNGQ0NDY3MTE0N2NjYWYzNDFlZWUxOGQ3N2IyZDUzMikuIEJlbmNobWFyayBieSBydW5uaW5nIGAgUlVTVEZMQUdTPSctQyB0YXJnZXQtY3B1PW5hdGl2ZScgY2FyZ28gY3JpdGVyaW9uIHlqc2AuIFRoZSBpbmxpbmUgcm9wZSBzdHJ1Y3R1cmUgdXBkYXRlcyBjYW4gYmUgZW5hYmxlZCBvciBkaXNhYmxlZCBieSBlZGl0aW5nIFt0aGUgY29uc3RhbnQgYXQgdGhlIHRvcCBvZiBzcmMvbGlzdC9kb2MucnNdKGh0dHBzOi8vZ2l0aHViLmNvbS9qb3NlcGhnL2RpYW1vbmQtdHlwZXMvYmxvYi80MmE4YmM4ZmI0ZDQ0NjcxMTQ3Y2NhZjM0MWVlZTE4ZDc3YjJkNTMyL3NyYy9saXN0L2RvYy5ycyNMMTUpLiBZb3UgY2FuIGxvb2sgYXQgbWVtb3J5IHN0YXRpc3RpY3MgYnkgcnVubmluZyBgY2FyZ28gcnVuIC0tcmVsZWFzZSAtLWZlYXR1cmVzIG1lbXVzYWdlIC0tZXhhbXBsZSBzdGF0c2AuCgoKZGlhbW9uZE15IGRpYW1vbmQgYmVuY2htYXJraW5nIHJlc3VsdHMgd2VyZSBnZW5lcmF0ZWQgZnJvbURpYW1vbmQncyBiZW5jaG1hcmtzIGNvbWUgZnJvbSB0aGlzIHJlcG9bVGhpcyByZXBvc2l0b3J5XShodHRwczovL2dpdGh1Yi5jb20vam9zZXBoZy9kaWFtb25kLWpzL3RyZWUvNmU4YTk1NjcwYjY1MWMwYWFhNzcwMWExYTc2Mzc3OGQzYTQ4NmIwYykgY29udGFpbnMgZHRoZSBkaWFtb25kLWpzIHdyYXBwd2FzbSB3cmFwcGVyRGlhbW9uZCBpcyBjb21waWxlZHdyYXBwZWRjb21waWxlZCAmIHRvIHdhc20gdXNpbmcgdGhpc3Byb2plY3QsIG90aG91Z2ggSSd2ZSBiZWVoYXJkY29kZWQgdG8gcG9pbnQgdG8gYSBsb2NhbCBjb3B5IG9mIGRpYW1vbmQtdHlwZXMgZnJvbSBnaXQuCgpEaWFtb25kIGlzIGNvbXBpbGVkIHRvIHdhc20gdXNpbmcgW3RoaXMgcHJvamVjdF0oaHR0cHM6Ly9naXRodWIuY29tL2pvc2VwaGcvZGlhbW9uZC1qcy90cmVlLzZlOGE5NTY3MGI2NTFjMGFhYTc3MDFhMWE3NjM3NzhkM2E0ODZiMGMpLCBoYXJkY29kZWQgdG8gcG9pbnQgdG8gYSBsb2NhbCBjb3B5IG9mIGRpYW1vbmQtdHlwZXMgZnJvbSBnaXQuCgpEaWFtb25kJ3MgYmVuY2htYXJrcyBjb21lIGZyb20gW2pvc2VwaGcvZGlhbW9uZC10eXBlcywgYXQgdGhpcyB2ZXJzaW9uXShodHRwczovL2dpdGh1Yi5jb20vam9zZXBoZy9kaWFtb25kLXR5cGVzL3RyZWUvNDJhOGJjOGZiNGQ0NDY3MTE0N2NjYWYzNDFlZWUxOGQ3N2IyZDUzMikuIEJlbmNobWFyayBieSBydW5uaW5nIGAgUlVTVEZMQUdTPSctQyB0YXJnZXQtY3B1PW5hdGl2ZScgY2FyZ28gY3JpdGVyaW9uIHlqc2AuIFRoZSBpbmxpbmUgcm9wZSBzdHJ1Y3R1cmUgdXBkYXRlcyBjYW4gYmUgZW5hYmxlZCBvciBkaXNhYmxlZCBieSBlZGl0aW5nIFt0aGUgY29uc3RhbnQgYXQgdGhlIHRvcCBvZiBzcmMvbGlzdC9kb2MucnNdKGh0dHBzOi8vZ2l0aHViLmNvbS9qb3NlcGhnL2RpYW1vbmQtdHlwZXMvYmxvYi80MmE4YmM4ZmI0ZDQ0NjcxMTQ3Y2NhZjM0MWVlZTE4ZDc3YjJkNTMyL3NyYy9saXN0L2RvYy5ycyNMMTUpLiBZb3UgY2FuIGxvb2sgYXQgbWVtb3J5IHN0YXRpc3RpY3MgYnkgcnVubmluZyBgY2FyZ28gcnVuIC0tcmVsZWFzZSAtLWZlYXR1cmVzIG1lbXVzYWdlIC0tZXhhbXBsZSBzdGF0c2AuCgouCndyYXBwZXIgVGhlIGJlbmNoIHdhc20gYnVuZGxlIGlzIG9wdGltaXplZCB3aXRoIHdhc2J3YXNtLW9wdC5hbHNvIERpYW1vbmR0aGVyZSdzIGEgbG90IG9mIHdvcmsgYmVmb3JlIGl0cyBJIGhhdmUgZmVhdHVyZSBwYXJpdHkgd2l0aCBBb3BlcmF0aW9uICBBbmQgdGhleSBuZWVkIHRvIGJlIG9wdGltaXplZCBmb3JhbHNvICBsb2FkaW5nIGFuZCBzYXZpbmcgZG9jdW1lbnRzIGZyb20gIEFuZCB0aGV5IGFsc28gbmVlZCB0byBiZSBvcHRpbWl6ZWQgZm9yIGxvYWRpbmcgYW5kIHNhdmluZyBkb2N1bWVudHMgZnJvbSAgRGlhbW9uZCBpcyBkb2VzIGFsbW9zdCBub25lIG9mIHRoaXMgU28gZmFyIGQuICB0aGFua2xlc3Mgd29yay5BdCB0aGUgdGltZSBvZiB3cml0aW5nLAoKVGhhdCBzYWlkLCB0aGVyZSBpcyBvbmUgd2F5IGluIHdoaWNoIFlqcyBoYXMgYSBkZWZpbml0ZSBlZGdlIG92ZXIgdGhlIG90aGVyIGltcGxlbXRubWVudGF0aW9uczogWWpzIGRvZXNuJ3N0IHQgc3RvcmUgYXV0b21lcmdldHJlYXRzIGRlbGV0ZXNkb2Vzbid0IHN0b3JlIHdoaWNoIGl0ZW1zIGluIGEgZG9jdW1lbnQgaGF2ZSBiZWVuIGRlbGV0ZWQuIE9ubHkgdGhhdCB0aGV5IGhhdmUqKiBiIGJlZW4qIGRlbGV0ZWQuIFRoaXMgaXMgaGFzIHNvbWUgd2VpcmQgaW1wbGljYXRpb25zOgoKLSAtZGlhbW9uZCBJJ20gc3RpbGxub3Qgc3VyZSBpZiBJIHdhbnQgdG8uIEtldmluIGlzIHByb2JhYmx5IHJpZ2h0IC0gSSBkb24ndCB0aGluayB0aGlzIGlzIHNvbWV0aGluZyBwZW9wbGUgYXNrIGZvci4KLS0tClRXZWxsLCB0Lkl0cyBuLiBBbmQgaXQgaGFzIG5vdGhpbmcgdG8gZG8gd2l0aCAqd2hlbiogZWFjaCBpdGVtIGluIGEgaGFzIFlqcyBuZWVkcyB0byBzdG9yZSBtdWNoIGxlc3MgaW5mb3JtYXRpb24uIFN0b3Jpbmcgd2hlbiBJdCB0YWtlcyBhYm91dCA1MDBrYlN0b3Jpbmcgd2hlbiBlYWNoIGRlbGV0ZSBoYXBwZW5lZCBpcyB3ZWlyZGx5IGxhcmdlLiBEaWFtb25kJ3MgbWVtb3J5IHVzYWdlIGluY3JlYXNlcyBmcm9tIDEuMTJtYiB0byAyLjM0bWIgd2hlbiBJIGFsc28gdG9zdG9yZSBkZWxldC5UaHNpIGluaXNpcyBpbmNyZWFzZXMgZApBZGRpbmcgdGhpcyBkYXRhIEkgdGhpbmsgSSBjYW4gb3B0aW1pemUgdGhhdCBmdXJ0aGVyLCBidXQgaXRzIG5vdCB0bm90aGluZy5pdCBhaW50LSBTdG9yaW5nIHdoZW4gZWFjaCBkZWxldGUtIChEZWxldGVzIGFyZSBhIFlqcyBzdG9yZXMgZGVsZXRlcyBhcyBhIHN0YXRlIENSRFQsIG5vdCBhcyBhIG4gb3BlcmF0aW9uLWJhc2VkIENSRFQpLnRvdGVtcG9yYWwgZGVsZXRlcyBpbmNyZWFzZXMgQW5kIGl0J2xsIGFsc28gaGF2ZSBhbiBpbXBhY3Qgb24gZmlsc3RvcmFnZW9uLWRpc2sgIHNpemUuIFlqcyBjYW4ndCBkbyBjaGFyYWN0ZXItYnktY2hhcmFjdGVyIHJlcGxlZGl0aW5nIHJlcGxheXMuIHJlcGxheSBlZGl0aW5nIHNlc3Npb25zZ2l2ZSB5b3UgcHJldHR5IHRpbWUgc2xpZGVyIHN0eWxlICByZXBsYXlzLiAgKERvIHBlb3BsZSB3YW50IHRoYXQ/IEkoTWF5YmUgcGVvcGxlIGRvbid0IHdhbnQgdGhhdCwgYnV0IGl0cyBjb29sKS4KLSBZanMncyAgbmVlZHMgdG8gZW1iZWQgaW5mb3JtYXRpb24gYWJvdXQgUkxFcnVuLWxlbmd0aCBlbmNvZGUgdGhlIGRlbGV0ZXNpbmZvcm1hdGlvbiBhYm91dCB3aGljaCBpdGVtcyBoYXZlIGJlZW4gZWQgaW50byB0aGUgdmVyc2lvbiBmaWVsZC4gSW4gZGlhbW9uZCwgdmVyc2lvbnMgYXJlIHNtYWxsIChhIGZldyBieXRlcy4gSW4geWpzLCB2ZXJzaW9ucyBhcmUgNGtiLn4gQW5kIHRoZXR5IGdyb3cgb3ZlciB0aW1lLiAgYXMgdGhlIGRvY3VtZW50IGdyb3dzIChCLCBhbmQgbW9yZSBpdGVtcyBhcmUgCgpUaGUgbWFzdGVyIGJyYW5jaCBvZiBkaWFtb25kIGRvZXNhZGRzIHRoaXMgaW5mb3JtYXRpb24gYmFjaydtIGdvaW5nIHRvJ1RJIGluY3JlYXNlVGhlcmUncyByb29tIGZvciBtb3JlIG9wdGltaXphdGlvbnMgdGhlZG8gcGVyLWtleXN0cm9rZSBlZGl0aW5nIG9yIGFueXRoaW5nIGZhbmN5IGxpa2UgdGhhdHQgdGVucyBvZnRlbXBvZGVsdGVtcG9yYWwgZGVsZXRlcywgLiBJJ3ZlIGJlZW4gYmVuY2htYXJraW5nIG91dCBvZiBhIGJyYW5jaHNwZWNpYWwgIHdpdGggdGhpcyBzdHVmZiBkaXNhYmxlZCwgdG8gbWFrZSB0aGUgY29tcGFyaXNvbiBhIGZhaXJ3aXRoIHlqcy4gQnV0IGRpYW1vbmRmdGhlIHJlbGVhc2VkIHZlcnNpb24gb2YgIG1pZ2h0IGVuZCB1cCBhIGxpdHRsZSBiaWdnZXIuIHRoYW4geW91IHdvdWxkIGV4cGVjdHRoZXNlIGJlbmNobWFya3Mgc3VnZ2VzdCBJIGhhdmVuJ2R0IGRlY2lkZWQgaWYgaXQgc2hvdWxkIGJlIGNvbmZpIFRoaXMgaXMgbm90IGRpYW1vbmQncyBmaW5hbCBmb3JtLldoZW4gSSBhZGQgLCBpdCBpbmNyZWFzZXM0bG90cyBvZiAgZnVydGhlcnRoaXNPIGFsc28gaW5jcmVhc2VzVGhpcyB3aWxsIGFsc28gaW1wYWN0IG8uIEkgd29uJ3QgYmUgYWJsZSB0byBtYXRjaHJlY29yZEFrYSwgaGFzIGEgIGltcGFjdCBvbiBtZW1vcnkgdXNhZ2VBaW5nIGJwdXNoZXNpbmNyZWFzZXMhIGFuZCBvbi1kaXNrIHN0b3JhZ2Ugc2l6ZVdpdGhvdXQgdGVtcG9yYWwgZGVsZXRlcywgaW1wbGVtZW50b3RoZXIgc3R1ZmYgKE1heWJlIHBlb3BsZSB0aGF0cyB3aGF0IHBlb3BsZSB3YW50PykgSXMgaXQgd2VpcmQgdG8gaGF2ZSBldmVyeSBrZXlzdHJva2UgcmVjb3JkZWQ/IGVycmVudCBhbnQgdGhlKiogVGhpcyBpcyBzdGlsbCBwcmV0dHkgc0tldmluIGFzc3VyZXMgbWUgdGhhdCBkZWxldGVzdGhpcyBpbmZvcm1hdGlvbiBpcyBhbHdheXMgc21hbGwgaW4gcHJhY3RpY2UsIHVidCBidXQgSSBkb24ndCBsaWtlaXQgc3RpbGwgZ2l2ZXNtYWtlcyBtZSBuZXJ2b3VzLnQgdGhpc1RoaXMgYmxvc2cgcG9zdCBpcyB3cml0dGVBbGwgYmVuY2htYXJrcyBpbiB0aGlzIGJsb2cgcG9zdCB1c2UgYW9mIGRpYW1vbmQtdHlwZXMgdGhlIFt5anMtc3R5bGVdXShodHRwczovL2dpdGh1Yi5jb20vam9zZXBoZy9kaWFtb25kLXR5cGVzL3RyZWUveWpzLXN0eWxlKSBvZiBkaWFtb25kLXR5cGVzLCB3aGVyZSB0aGFzIGJlZW4gLiBUaGlzIG1ha2VzIGZvcmVyLCBidXQgZmluYWxiZSBhIGxpdHRsZSBiaWdnZXIgdGhhbiBJJ3ZlIHN1Z2dlc3RlZCBhYm92ZS4gWU1NVi4gRWgud2hldGhlciBlYWNoIHRpaXRlbSBoYXMgYmVlbiBvciBub3Rkb3VibGVzCgpJPiBJdHMgY29vbEh1aCAtIHRoZSBqaXR0ZXJueXluZXNzIG9mIHlqcyBhbmQgcnVzdC13YXNtIGtpbmQgb2YgbGluZSB1cC4gUGVyaW9kcyB3aGVuIHlqcyBpcyBzbG93LCBydXN0LXdhc20gZ2V0cyBmYXN0ZXIuIEFuZCB2aWNlIHZlcnNhLiBJIHdvbmRlciB3aGF0IHRoYXRzICBpcyAhPyEgbG9vayBhdCB0aGUgYm90dG9tIHR3byBsaW5lcyBhcm91bmQgMjAwIDAsMDAwLiBUbWlycm9yIGVhY2ggb3RoZXIucyBnb2luZyBvbiB0aGVyZQoKVGhhdCwgbXkgZnJpZW5kcywgaXMgaG93IHlvdSBtYWtlIHRoZSBjb21wdXRlciBkbyBhIGxvdCBsZXNzIHdvcmsuCgpiZWF1dGlmdWwsIGZsYXdlZCAgbW9va3NzIEkgZ3Vlc3MgY29tZXMgb3V0IG9mQW5kICBqdXN0IHRodW1iZWQgbXkgbm9zZSBhdCB0aGVtIGFsbCBhbmQga2VwdCB1c2luZyBPd29yayBpbmluZyBvbiBPcGVyYXRpb25hbCBUcmFuZm9ybXMgaGVscGVkIG91dFNvIFUgTXkgY29udHJpYnV0aW9uIGlzIHVzaW5nIGItdHJlZXMgYW5kIHB1IFJMRS0gcnVuLWxlbmd0aCBlbmNvZGVkICBhbG9uZ2lzZGUgYSBhbmQgcmFyZS1seS0gYWxsIGNsZXZlciBpbmRleGluZy4gQW5kIHNob3dpbmcgS2V2aW4ncyBsaXN0IHJlcHJlc2VudGF0aW9uIGNhbiBiZSBhZGFwdGVkIHRvIGFuZyB5IGFsZ29yaXRobS4gSSBkb24ndENSRFQgYWxnb3JpdGhtTm9ib2R5IGhhcyBub3RpY2VkSSBkb24ndCB0aGluayBhbnlvbmUgbm90aWNlZCB0aGF0IGJlZm9yZS5mYXN0IGZpZ3VyZW91ZCBvdXQgaG93IHRvIG1ha2UgR2F3c2guY2hhcnQgc2hvd3NqYXZhc2NyaXB0ICwgY2FsbGVkY2FsbGluZyBpbnRvIHJ1c3QgdmlhIHRoZSBzbG93IHZlcnNpb24uIEFuZCB0VGhpcyBpc2luY2x1ZGVzIGJlbmNobWFyayBpcyBydW4gRm9yIGZhaXJuZXNzIHRoaXMgY2hhclRoaXMgY2hhcnQgaXMgamdlbmVyZWFhdGVkIHZpYWZyb210aHJvdWdoIHJlbWVtYmVyLCoqSSB3b25kZXIgIHRoZSBnYXAgaXMgc28gYmlna25vdyBob3cgdG8gIGRvZXMgV0FTTSdzIHNsb3cgaXQgZG93biB0aGF0IG11Y2g/cmVhbGwgcmVhbGx5IHRoYXR3YXNtIGlzIHNvIG11Y2ggc2xvd2VyIHRoYW4gbmF0aXZlCgpXaHkgaXMgV0FTTSB3aGVuIEkgcnVuIGl0bHkwLjA5NltdKGh0dHBzOi8vZ2l0aHViLmNvbS95anMveWpzKW9zb2xpZEZvciBub3csIHRoZWhhc2luY2x1ZGVzQnV0IGFhd2hpY2ggd29ya3Mgc2ltaWxhcmx5IHRvIHloc2pzbGlrZSBpbnRlYXN0ZWFkWXdvcmsgZGlmZmVyZW50bHksIGFuZCBtYWtlcyB0aGUgc3lzdGVtIGFib3V0IDIwMTAlIHNsb3dlci4zNW1hdGNoZXMgaG93IHdvcmtzdGhlc2UgYmVuY2htYXJrcyBtaWdodCBub3QgYmUgaW5kaWNpdGl2ZSBvZiBkaWFtb25kIDEuMGluZGljYXRpdmUgIG1pZ2h0IGJlIGRpZmZlcmVudG5vdCBtbm90IG1hdGNoaGF2ZSBhIGxpc2dzbGlnaHRseSBkaWZmZXJlbnQgbWVwZXJmb3JtYW5jZSBwcm9maWxlIEVoLiBJdHMgIChJKEVUaGVyZSdzIHBsZW50eSBvZiBwdW5zIGhlcmUgYWJvdXQgZGlhbW9uZCBub3QgYmVpbmcgcG9saXNoZWQgeWV0LCBidXQgSSdtIG5vdCBzaGFycCBlbm91Z2ggZm9yIGFueSBvZiB0aG9zZXRvIG1ha2Vmb3IgdGhvc2UgcmlnaHQgbm93KS5kaW1hbW9uZCB5ZXRzaW1pbGFyLCBhbiBkYW5kIHdpbGwgcHJvYmFibHkgYXBweHJveGltYXRlbHlNYXliZS4gIE9yIG1heWJlIEknbSB3cm9uZy4uSSBtb2R1bG8gZGRlbGV0ZSBvcGVyYXRpb25zLiBleGNlcHQgZm9yQW5kIHBlck9QJ20gaW5nRERpaWFhbW1vb25uZGQgICgod3dhYXNzbW1zc21tICB2dmlpYWEgIG5ub29kZGVlampzcykpICAgICAgICAgICAgICAgRERpaWFhbW1vb25uZGQgICgobm5hYXR0aWl2dmVlKSlhRGlhbW9uZCBkb2MgTGFuZ0xhbmd1YWdlIHwgLS0tLS0tLS0gfCBKUyAgICAgICB8IEpTICAgICAgIHwgSlMgICAgICAgfCBKUyAgICAgICB8IEpTICAgICAgIHwgSlMgICAgICAgfCBKUyAgICAgICB8IEpTICAgICAgIHwgSlMgICAgICAgfFJ1c3Qvd2FzbVdBU01SdXN0KytKUyBSdXN0UnVzdCBpdmF2aWEgICAgIERhdGEgc3RvcmFnZSAgICAgICAgICAgc3RydWN0dXJlIDR4IHNsb3dlciB0aGFuIGV4ZWN1dGlvbit3YXNtIHZpYSBKUytrZXlzdHJva2VzZ2V0c2VyZXJ0aGVyZWRkaWlhYW1tb29ubmRkVGhlc2V0aGlzIGRhdGEgZGlhbW9uZCdzQmVjYXVzZSBpdCBkb2Vzbid0IHN0b3JlIGRvZW4nZXNuJ3Qgc24ndCBzdG9yZSBlbm91Z2ggaW5mb3JtYXRpb24gdG8gYmFzaWNhbGx5IC4gSGUgbWlnaHQgYmUgcmlnaHQgd2VpcmxkeWxkaWFtb25kZGlhbW9uZCByZGlhbW9uZCdzIHBlcmZvcm1hbmNlIGlpc24ndCBqdXN0IHRoYW5rcyB0b0RpYW1vbmQ1MDAweCBmYXN0ZXIgQ1JEVHM6IEFuIGFkdmVudHVyZSBpbiBvcHRpbWl6YXRpb24gLS0+PCEtLSAKCjxzcGFuIGNsYXNzPW09cG9zdC1tZXRhPkp1bHkgMzEgMjAyMTwvc3Bhbj4KCiMjICQkIyM6IE8gQWR2ZW50dXJlc0FuIGFkdmVudHVyZSBpbiBvT0EKCi0tLQoKSm9zZXBoIEdlbnRsZQoKW10oaHR0cHM6Ly9qb3NlcGhnLmNvbS8pCjxmb290ZXI+CjwvZmlvb3Rlcj5XcmlCeSBTZXBoClNlcGggR2VudGxlCmh0dHBzOi8vam9zZXBoZy5jb20vW2h0dHBzOi8vam9zZXBoZy5jb20vXShodHRwczovL2pvc2VwaGcuY29tLykKCmd0aXRodWIuY29tam9zZXBoZy9odHRwczovL2dpdGh1Yi5jb20vam9zZXBoZy9TZXBoIEdlbnRsZTIwMjEgOgojIEFja25vd2xlZGdlbWVudHMKCgpUYWhhbmtzIGZvdG8gZXZlcnlvbmUgd2hvIGdhdmUgVGhpcyB3b3JrIHdhcyBtYWRlIHBvc3NpYmxlIHRoYW5rcyB0byBhcyBwYXJ0IG9mIFticmFpZF0oYmh0dHBzOmh0dHBzOi8vYnJhaWQub3JnLyl0aGUgQiBwcm9qZWN0aXMgcGFydCBvZiB0aGUsIHVmbiwgZiBhbmQgZnVuZGVkIGJ5IHRoZSBbSW52aXNpYmxlIENvbGxlZ2VdKGh0dHBzOi8vaW52aXNpYmxlLmNvbGxlZ2UvKS4KClRoYW5reW91IHRvIGV2ZXJ5b25lIHdobyBnYXZlIGZlZWRiYWNrIGJlZm9yZSB0aHNpaGlzIHBvc3Qgd2VudCBsaXZlLkh1Z2UgdC4gQW5kIFBhcnRpTWFydGluIGFuZCBLZXZpbiBmb3Igc3BlY2lhbCB0aGFrbnMgdG8gdGhhbmtzIHRvICBMS2xlcHBtYW5uICBKYWhucyBmb3IgdGhlaXIgd29yayBvbiBBdXRvbWVyZ2UgYW5kIFlqcy4gRGlhbW9uZCBUaGlzIHdvdWxkbid3b3JrcyBwb3N0IFdlJ3JlIGhpcmluZ0lmIHRoaXMgaXMgdGhlIHNvcnQgb2Ygd29yayB5b3Ugd2FudCB0byBjb250cmlidXRlIHRvd2FyZHMsIHcgZ2dldCBpbiB0b3VjaC4gVy5UCgpNeSBDUkRUIGlzIGdpZ3JlYXQgYmVjYXVzZWlzIHN0YW5kaW5nIG9uIHRoZSBzaG91bGRlcnMgb2YgY2hnaWFudHMuc3RhbmRzCkRpYW1vbmR3aWR0aD0iNTYwIiBoZWlnaHQ9IjMxNSIgbWlubWF4LW1heC1taW4gbWF4LXdpZHRoOiAxMD0xMDAiImNsYXNzPSJ0eXB5b3V0dWJlIi0jIyMjIyMjIyMjI3JlYWx0aW1lIGNvbGxhYm9yYXRpdmUgKGxpa2UgZ29vZ2xlIGRvY3MpR0QuIFRoZXkgaW1wbGVtZW50ZWQgbG90cyBvZiBhbGdvcml0aG1zICgpIHN0dWZmIGFuZCB0aGV5dGhlbSB0byBzZWUgdG8gc2VlIGhvdyB0aGV5IHBlcmZvcm0oQ29vbCEhKSBbXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db25mbGljdC1mcmVlX3JlcGxpY2F0ZWRfZGF0YV90eXBlKXMgLS0gIGFsZ29yaXRobXMgYW5kLkFuZGdyYWQgc3R1ZGVudFtdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvbmZsaWN0LWZyZWVfcmVwbGljYXRlZF9kYXRhX3R5cGUpQ29uZmxpY3QtRnJlZSAodGhhdHMgQ29uZi1saWN0LUZyZWUgUmVwbGljYXRlZCBkRGF0YSB0eXBlcwpDUkRUcyBhcmUgQ29uZmxpY3QtRnJlZSBSZXBsaWNhdGUgRGQgRGF0YSB0eXBlcy4gQmFzaWNhbGx5LCBzcGVjaWFsIGFsZ29pdHJpdGhtcyBjb25zdHJ1Y3Rpb25zIHdpaGNjaCBpaGljaCBsZXQgbXV0bGx0aXBsZSB1c2VycyBsbXVsdGlwbGUgY29tcHV0ZXJzIC8gdXNlcnMgYWxsIGVkaXQgc29tZSBkYXRhIGFuZCBsb2NhbGx5IHdpdGhvdXQgbmVldGhlIHNhbWUgZGF0YSBhdCB0aGUgc2FtZSB0aW1lLCBhbmQgLiBPbmNlIHRoZSBjb21wdWVydGVycyB0ZWxsIHNoYXJlIHRoZWlyIGNoYW5nZXMgd2l0aCBlYWNoIG90aGVyLCB0aGV5ZXZlcnlvbmUncyBjb3B5ICAgd2l0aG91dCB3b3JyeWluZyBhYm91dCBsb2NraW5nIG9yIApDUkRUcyBhcmUgQ29uZmxpY3QtRnJlZSBSZXBsaWNhdGVkIERhdGEgdHlwZXMuIEJhc2ljYWxseSwgc3BlY2lhbCBjb25zdHJ1Y3Rpb25zIHdoaWNoIGxldCBtdWx0aXBsZSBjb21wdXRlcnMgLyB1c2VycyBhbGwgZWRpdCB0aGUgc2FtZSBkYXRhIGF0IHRoZSBzYW1lIHRpbWUgd2l0aG91dCB3b3JyeWluZyBhYm91dCBsb2NraW5nIG9yLCB3aXRob3V0IHdvcnJ5aW5nIGFib3V0IGVkaXRpbmcgY29uZmxpY3RzLiBUaGV5IFtdKChodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db25mbGljdC1mcmVlX3JlcGxpY2F0ZWRfZGF0YV90eXBlKSkgIFRoZXkgbGV0IHlvdSBidWlsZCBwZWVyLXRvLXBlZXIgZ29vZ2xlIGRvY3MsIG9yIGNhbiBsZXQgdXNkYXRhYmFzZSByZXBsaWNhdGlvbiB3aXRob3V0bWFrZSBldmVudHVhbGx5Yy1jb25zaXN0ZW50IHMuQnV0IHcgYWZhc3QsIHRoZXkncmUgZmFuY3kgcHJvZ3JhbW1pbmcgdHJpY2tzIHNsb2NraW5nIG9ycmVhbHRpbWUgZG9jdW1lbnQgZWRpdGluZy4gT3IgU28gd2UgY2FuIHRha2UgZ29vZ2xlIG91dCBvZiBnb29nbGUgZG9jcywgb3IgJ3MgY29tcHV0ZXJzIG91IHQgb2YgZ29vZ2xlYWRkIGNvbGxhYm9yYXRpdmUgZWRpdGluZyB0byBHaXQuZ3Rvb2xzZG8gbWFzdGVyLW1hc3RlciByZXBsaWNhdGlvbiB3aXRob3V0IFBBWE9TZGF0YWJhc2UgIHdhcyB5IGZhc3RlcmRvIHdpdGhvdXQgZ29vZ2xlYWRkIHBhaXIgcHJvZ3JhbW1pbmcgdG8gZ2l0IGJ1aWxkJ3MgY29tcHV0ZXJzLCB3aXRob3V0IHNlcnZlcnMgQW5kICwgbWF5YmUsIHdpdGhvdXQgc2VydmVycy5zb21lICBpbiBjb250cm9sIG92ZXIgZiBldmVyeXRoaW5nY2hhcmdlaG9wZWZ1bGx5IEZBQU5Hc29tZWJvZHkgZWxzZSdzIGNvbXB1ZXRlciAoInRoZSBjbG91ZCkiKSBjb250cm9sbGluZ3dpdG5lc3NpbmcgYW5kIG5lZWRpbmcgdG9jb29yZGluYXRlVGhGb3IgdGhlIHVuaXRubml0aWF0ZWQsIENSRFRTICgpIGFyZXRvIGFsbG93IHRvd2hpY2ggbGV0LiBBbmQgd2UgY2FuIGRvIGl0d29ycnlpbmcgYWJvdXQgLCAsIG9yIGJlLiBQZW9wbGUgZG9uJ3QgZXZlbiBuZWVkIHRvIGJlIG9ubGluZSB0byAgb3Igc3BvdHR5IGludGVybmV0IGNvbm5lY3Rpb25zbGFnICYgZnJvbVRoZSBiZXN0IHBhcnQgb2YgQ1JEVCBzIGlzIHlvdSBjYW4gZG8gYWxsIHRoYXQgd2l0aG91dCBuZWVkaW5nIG1vbml0b3IgYW5kU0VDYW55IGNlbnRyYWwgY29tcHV0ZXIgb24gaW5jb250cm9sIHRoZXkgZG8gaXQgbmVlZGluZyB0byBsb2NraW5nIG9yIGFub3IgYW55dGhpbmcgbGlrZSB0aGF0IHRoYXQgdGhleXdvcmsgVGhleSBsZXQgeW91IHdvcmsgbG9jYWxseSB3aXRob3V0IHRoZSBpbnRlcm5ldCBubyBsYWcgKHlvdSBkb24ndCBldmVuIGhhdmUgdG8gYmUgb25saW5lKSBBbmQgd2hlbiB5b3UgZG8gc3luYyB1cCB3aXRoIG90aGVyIHVzZXJzIC8gZGV2aWNlcywgZXZlcnl0aGluZyBpcyBqdXN0IG1haWdpY2FsbHlzaG91bGQgIHN5bmNzIHVwIGFuZCBiZWNvbWVzIGV2ZW50dWFsbHkgY29uc2lzdGVudC4gZXZlbiBhaXplZCBjYW4gKExpa2UgZ29vZ2xlKSBHIERvY3NBaGVtLCAuWSZjb25uZWN0dG93aXRoc3luYyBUaGluaywgZ29vZ2xlIGRvY3Mgd2l0aG91dCBnb29nLmVsZS5HREdnIE9yIG1hc3Rlci1tYXN0ZXIgcmVwbGljYXRpb24gd2l0aG91dCBkYXRhYmFzZSBGb3IgdGhlIHVuaW5pdGlhdGVkLCBDUkRUUyBbKENvbmZsaWN0LUZyZWUgUmVwbGljYXRlZCBEYXRhIHR5cGVzKV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29uZmxpY3QtZnJlZV9yZXBsaWNhdGVkX2RhdGFfdHlwZSkgYXJlIGZhbmN5IHByb2dyYW1taW5nIHRvb2xzIHdoaWNoIGxldCBtdWx0aXBsZSB1c2VycyBlZGl0IHRoZSBzYW1lIGRhdGEgYXQgdGhlIHNhbWUgdGltZS4gVGhleSBsZXQgeW91IHdvcmsgbG9jYWxseSB3aXRoIG5vIGxhZy4gKFlvdSBkb24ndCBldmVuIGhhdmUgdG8gYmUgb25saW5lKS4gQW5kIHdoZW4geW91IGRvIHN5bmMgdXAgd2l0aCBvdGhlciB1c2VycyAmIGRldmljZXMsIGV2ZXJ5dGhpbmcganVzdCBtYWdpY2FsbHkgc3luY3MgdXAgYW5kIGJlY29tZXMgZXZlbnR1YWxseSBjb25zaXN0ZW50LiBUaGUgYmVzdCBwYXJ0IG9mIENSRFRzIGlzIHRoYXQgdGhleSBjYW4gZG8gYWxsIHRoYXQgd2l0aG91dCBldmVuIG5lZWRpbmcgYSBjZW50cmFsaXplZCBjb21wdXRlciBpbiB0aGUgY2xvdWQgdG8gbW9uaXRvciBhbmQgY29udHJvbCBldmVyeXRoaW5nLiBUaGluaywgR29vZ2xlIERvY3Mgd2l0aG91dCBnb29nbGUuIE9yIG1hc3Rlci1tYXN0ZXIgZGF0YWJhc2UgcmVwbGljYXRpb24gd2l0aG91dCBsYWcuIE9yIHNlYW1sZXNzIAoKVGhpbmssIEdvb2dsZSBEb2NzIHdpdGhvdXQgZ29vZ2xlLiBPciBtYXN0ZXItbWFzdGVyIGRhdGFiYXNlIHJlcGxpY2F0aW9uIHdpdGhvdXQgbGFnLiBPciBzZWFtbGVzcyBjcm9zcy1kZXZpY2UgYXBwbGljYXRpb24gZGF0YSwgd2l0aCBubyBzdGFydHVwZG9kZ3kgJ3Mgc2VydmVycyBzb3V0d29ycnlpbmcgdGhhdCBzb21lYXJlIGdvaW5nIHRvIGdvIG9mZmxpbmVkYXJrIGluIGEgY291cGxlIHllYXJzLnJlbHlpbmcgb24gYSBmbGFrZXkgc3RhcnR1cCAncyBzdGFlcnZlcnMgdG8gc3RpbGwgYmUgYXJvdW5kIGluIGEgZGVjYWRlLm5vdGhlcgoKQnV0IHRoZXkncmUgZmFtb3VzbHkgc2xvdy5yZWFsbHkgLCBzbyBub2JvZHkgcmVhbGx5YmFzbHJlcmVseSBhbnlvbmUgdXNlIHMgdGhlbSBXZWwgV2VsbCwgQnV0IHRoZXkgZG9uJ3QgaGF2ZSB0byBiZSEKCkJ1dCBiZWZvcmUgd2UgY2FuIGV2ZW4gdGFsayBhYm91dCB0aGF0LCBCdXQgYmVmb3JlIHdlIGNhbiBldmVuIHRhbGsgYWJvdXQgdGhhdCxzb21lRm9yIHRleHQgZWRpdGluZyB0aGV5J3JlQnV0IGZJIHdhbnQgbXlhcHBzIHRvIHNlYW1sZXNzbHkgd29yayBzaGFyZSBkYXRhIGJldHdlZW4gYWxsIG15IGRldmljZXMgbWUgbmVlZGluZyB0b0kgd2FudCBteVtdKGh0dHBzOi8vb3VyaW5jcmVkaWJsZWpvdXJuZXkudHVtYmxyLmNvbS8pRm9ydmUgYmVlbiBmb3IgYSBkZXllYXJzIChhbmQgb3RoZXIgcmVsYWwgYXBwbGljYXRpb24gZGF0YSkgIGFuZCBjbHVua3lXZWxsLCB1bnRpbCBub3cuIHMKCkZvciB0aGUgdW5pbml0aWF0ZWQsIENSRFRzIFsoQ29uZmxpY3QtRnJlZSBSZXBsaWNhdGVkIERhdGEgdHlwZXMpXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db25mbGljdC1mcmVlX3JlcGxpY2F0ZWRfZGF0YV90eXBlKSBhcmUgZmFuY3kgcHJvZ3JhbW1pbmcgdG9vbHMgd2hpY2ggbGV0IG11bHRpcGxlIHVzZXJzIGVkaXQgdGhlIHNhbWUgZGF0YSBhdCB0aGUgc2FtZSB0aW1lLiBUaGV5IGxldCB5b3Ugd29yayBsb2NhbGx5IHdpdGggbm8gbGFnLiAoWW91IGRvbid0IGV2ZW4gaGF2ZSB0byBiZSBvbmxpbmUpLiBBbmQgd2hlbiB5b3UgZG8gc3luYyB1cCB3aXRoIG90aGVyIHVzZXJzICYgZGV2aWNlcywgZXZlcnl0aGluZyBqdXN0IG1hZ2ljYWxseSBzeW5jcyB1cCBhbmQgYmVjb21lcyBldmVudHVhbGx5IGNvbnNpc3RlbnQuIFRoZSBiZXN0IHBhcnQgb2YgQ1JEVHMgaXMgdGhhdCB0aGV5IGNhbiBkbyBhbGwgdGhhdCB3aXRob3V0IGV2ZW4gbmVlZGluZyBhIGNlbnRyYWxpemVkIGNvbXB1dGVyIGluIHRoZSBjbG91ZCB0byBtb25pdG9yIGFuZCBjb250cm9sIGV2ZXJ5dGhpbmcuCgpJIHdhbnQgR29vZ2xlIERvY3Mgd2l0aG91dCBnb29nbGUuIEkgd2FudCBteSBhcHBzIHRvIHNlYW1sZXNzbHkgc2hhcmUgZGF0YSBiZXR3ZWVuIGFsbCBteSBkZXZpY2VzLCB3aXRob3V0IG1lIG5lZWRpbmcgdG8gcmVseSBvbiBzb21lIFtmbGFrZXkgc3RhcnR1cF0oaHR0cHM6Ly9vdXJpbmNyZWRpYmxlam91cm5leS50dW1ibHIuY29tLykncyBzZXJ2ZXJzIHRvIHN0aWxsIGJlIGFyb3VuZCBpbiBhbm90aGVyIGRlY2FkZS4KCkZvciB0ZXh0IGVkaXRpbmcgdGhleSd2ZSBiZWVuIGZhbW91c2x5IHJlYWxseSBzbG93IGFuZCBjbHVua3kgZm9yIHllYXJzLCBzbyBiYXJlbHkgYW55b25lIHVzZXMgdGhlbS4gV2VsbCwgdW50aWwgbm93LgoKCgoKCgoKCkZvciB0ZXh0IGVkaXRpbmcgdGhleSd2ZSBiZWVuIGZhbW91c2x5IHJlYWxseSBzbG93IGFuZCBjbHVua3kgZm9yIHllYXJzLCBzbyBiYXJlbHkgYW55b25lIHVzZXMgdGhlbS4gV2VsbCwgdW50aWwgbm93LgoKSSB3YW50IEdvb2dsZSBEb2NzIHdpdGhvdXQgZ29vZ2xlLiBJIHdhbnQgbXkgYXBwcyB0byBzZWFtbGVzc2x5IHNoYXJlIGRhdGEgYmV0d2VlbiBhbGwgbXkgZGV2aWNlcywgd2l0aG91dCBtZSBuZWVkaW5nIHRvIHJlbHkgb24gc29tZSBbZmxha2V5IHN0YXJ0dXBdKGh0dHBzOi8vb3VyaW5jcmVkaWJsZWpvdXJuZXkudHVtYmxyLmNvbS8pJ3Mgc2VydmVycyB0byBzdGlsbCBiZSBhcm91bmQgaW4gYW5vdGhlciBkZWNhZGUuCgpGb3IgdGhlIHVuaW5pdGlhdGVkLCBDUkRUcyBbKENvbmZsaWN0LUZyZWUgUmVwbGljYXRlZCBEYXRhIHR5cGVzKV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29uZmxpY3QtZnJlZV9yZXBsaWNhdGVkX2RhdGFfdHlwZSkgYXJlIGZhbmN5IHByb2dyYW1taW5nIHRvb2xzIHdoaWNoIGxldCBtdWx0aXBsZSB1c2VycyBlZGl0IHRoZSBzYW1lIGRhdGEgYXQgdGhlIHNhbWUgdGltZS4gVGhleSBsZXQgeW91IHdvcmsgbG9jYWxseSB3aXRoIG5vIGxhZy4gKFlvdSBkb24ndCBldmVuIGhhdmUgdG8gYmUgb25saW5lKS4gQW5kIHdoZW4geW91IGRvIHN5bmMgdXAgd2l0aCBvdGhlciB1c2VycyAmIGRldmljZXMsIGV2ZXJ5dGhpbmcganVzdCBtYWdpY2FsbHkgc3luY3MgdXAgYW5kIGJlY29tZXMgZXZlbnR1YWxseSBjb25zaXN0ZW50LiBUaGUgYmVzdCBwYXJ0IG9mIENSRFRzIGlzIHRoYXQgdGhleSBjYW4gZG8gYWxsIHRoYXQgd2l0aG91dCBldmVuIG5lZWRpbmcgYSBjZW50cmFsaXplZCBjb21wdXRlciBpbiB0aGUgY2xvdWQgdG8gbW9uaXRvciBhbmQgY29udHJvbCBldmVyeXRoaW5nLiAKCkJ1dCBtLiBBCgoKCgpFdmVuIHRhbGtpbmcgYWJvdXQgdGhpcyB3ZXN0dWZmIHNvbWVib2R5J3Njb2RlWWVhcnMgYWdvIElhSSB3YW50IEdvb2dsZSBEb2NzIHdpdGhvdXQgZ29vZ2xlLiBJIHdhbnQgbXkgYXBwcyB0byBzZWFtbGVzc2x5IHNoYXJlIGRhdGEgYmV0d2VlbiBhbGwgbXkgZGV2aWNlcywgd2l0aG91dCBtZSBuZWVkaW5nIHRvIHJlbHkgb24gc29tZSBbZmxha2V5IHN0YXJ0dXBdKGh0dHBzOi8vb3VyaW5jcmVkaWJsZWpvdXJuZXkudHVtYmxyLmNvbS8pJ3Mgc2VydmVycyB0byBzdGlsbCBiZSBhcm91bmQgaW4gYW5vdGhlciBkZWNhZGUuSSB3YW50IEdvb2dsZSBEb2NzIHdpdGhvdXQgZ29vZ2xlLiBJIHdhbnQgbXkgYXBwcyB0byBzZWFtbGVzc2x5IHNoYXJlIGRhdGEgYmV0d2VlbiBhbGwgbXkgZGV2aWNlcywgd2l0aG91dCBtZSBuZWVkaW5nIHRvIHJlbHkgb24gc29tZSBbZmxha2V5IHN0YXJ0dXBdKGh0dHBzOi8vb3VyaW5jcmVkaWJsZWpvdXJuZXkudHVtYmxyLmNvbS8pJ3Mgc2VydmVycyB0byBzdGlsbCBiZSBhcm91bmQgaW4gYW5vdGhlciBkZWNhZGUuIEkgdGhpbmsgdGhleSdyZSB0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AQIBAgEBAQICAQECAQIBAgECAQEBAQEBAQEBAgEBAQEBAwEBAQECAgEBAQEDAQECAQEBAwEBAQEBAQEBAQEBAwEBAQIBAQEBAQIBAQEBAQIBAgEDAQIBAQEBAQEBAQEEAgIBAQECAQIBAQEBAQEBAQEDAQQBAgICAQEBAQEBAQEBAQEBAgEBAwEBAQIBAQEBAQEBAQECAQMBAgEBAQIBAwICAQECAgECAQECAQEBAQcBAQEBAQEBAQEDAQEBAgECAQIBAwECAQIBAwEBAgECAgECAQIBAQECAQUBAQECAQMCAQECAQEBAgEBAREBAQEDAQMBAQECAQEBAgEBAQEBAQEBAQEEAQECAQYBAQEBAQIBAQEBAQIBAQEBAQEBAQECAQIBAgECAQEBAgEEAQECBQEGAQMBAgEBAQIBAgEFAQIBAgECAQMBBAEBAQIBAwEBAQIBAQcBAQIBAgEBAQIBAQECAQEBAQECAQIBAgEBAQIBAQEBAQECAwECAQEBAQEBAgEBAgEBAQEBAQEBAQEBAgECAQIBAQEBAQIBAQEEAQEBAQEBAQIBAQECAQEBAgEBAwMBAgEGAQECAQEBAQEBAwECAQICAgECAQIBAgEBAQEBAgIBAQEBAgEBAQEBAQEBAQIBAgEBAgQBAgICAQIBAQECAQEBAQEBAQIBAgICAQEBAwEDAQEBAQEBAQEBAQECAQEBBAEBAQIBAwECAQEBAQEBAQIBBAEBAQIBAQEDAQIBAgEBAQEBAQEBAQIBAQECAQEBAgECAQIBAQEBAQEBAwEBAQEBAgECAQEBBAECAQIBAgECAQEBAQECAQEBAQECAgIBAgEBAgEBAQMDAQEBAwEDAQMCAgEBAQIBAQECAQMBAQEBAQQBAQECAQIBAQEBAQEBAQEcCAgBAQEBAQEBAQIBAQYBBAEBAQEBAQEBAQIBAwECAQEBAwEBAQICAQEBAQEBAQECAQIBAgEEAQQBAQEBAQMBAQECAQEBAgICAQIBAQEBAQIBAQEBAQMBAgECAQEBAgICAQIBAwEBAQEBAgECAQIBAwECAQICAQECAQIBAQICAQIBAQIBAQIBAQECAQMBAQEBAgEBAQEBAQEBAQEBAgEBAgEBAQIBAQEBAQIBAQECAQECAgECAQQBAgEBAQEBAwECAQIBAwIBAQEBAQEBAgEBAwECAQEBAQEDAQECAQEBAQYBAgECAQEBBAEBAQIBAgECAQIBAgECAQEBAQEBAQIBAQEWAQIDAwEBAQEBAQECAQEBAgEBAQMBAgEBAQMBAgECAQIBAwEBAQMBAQECAQEBAgEDAQIBAgEBAQIBAgEBAQIBAQEBAQEBAQEBAQECAgECAQMBAgECAgIBAwECAQEBAwEBAQIBAQECAQIBAQEBAQIBAQECAgEBAQECAQMBAgEBAQEBAgEBAQMBAgIDAQQBAgEBAQIBAQECAQEBAQEBAQEBAQECASQEKQECAQEBAgEDAQIBAQECBAIBAgEBAQEBAgEDAQIBAQECAgEBBQEBAQIBAgEBAQIBAQEBAQEBAQECAQIBAgIEAQIBAQEBAQEBAQIBAQEBAQEDAQIBAQEBAQIBAgEBAQYBAgEBAQIBAQECAQIBAQEBAQEBAQEBAQEDAQEBAgEBAQEDAQEBAgEBAQEBAgECAQEBAgECAQEBAwEBAQEBAgECAQEBAgEBAQMBAgECAQIBAQEBAQEBAQECAQIBAgEBAQECAQEBAQUBAgEDAQEBAgECAQIBAQEBAQIBAgECAQIBAgEBAQIBAgICAQEBAgECAQEBAgEBAQEBAgEBAQEBAgECAQEBAgEDAQIBAgEBAQEBAQEBAQEBAgECAQIBAwECAQIBAgEDAQIBAQECAQEBAgEBAgEBAQEBAQECAQECAQMBAgIBAQECBAEBAQIBAQIBAQEBAgECAQEBAgEBAQIBAQECAQIBAQICAgECAQEBAQEBAQEBAQIBAQIBAQEBAQEBAQEBAQEBAQEBAQEBAQIBAQEBAQEBAgEBAQUBAgECAQIBAgECAQIBAwEJAQIBAwEBAQEBAgEBAQEBAQEBAQEBBAEBAQEBAgECAQEBAQEBAQEBAQEBAQEBAQECAQECAQECAQMBAQEBAQEBAQECAQEBAgEBAQIBAgECAQEBAQEBAgEBAQEBAQEBAQEBAQEEAQEBAgECAgEBAgMBAgECAQEBAwEBAQEBAQECAQEEAQEBAQIBAQEBAQUBAgEBAQEBAgIBAgEBAwECAQIBAQECAQEBAQECAQEBAQEBAQEBAQEBAQEBAQEDAQEBAQEBAQQBAwEBAQEBAgEBAQEBAQECAQEBAgMDAQIBAgEDAgEBAQICAQEBAgEBAQEBAwEBAQEBAQECAQEBAgEBAQEBAQEBAQEBAQEBAQIBBgECAQEBAQEDAQEBBAEBAQIBAgEBAQMBAgEBAQEBAgECAQEBAQECAQEBAQEBAgEBAgECAQEBAQEDAQIBAwECAQIBAQEDAQEBAQEBAQEBAgEBAQEBAQEBAQEBAQEDAQEBAQIBAQEBAgEDAQEBAQECAQEBAgEBAQIBAgEBBAECAQECAQEBAQECAQIBAgEBAQIBAQIBAQEBAQEDAQIBAQEBAQIBAQEBAQIBAgECAQIBAQEBAQEBAQEDAQIBAgECAQEBAQEBAQIBAgEBAgEBAgEBAQEBAgEBAQMCAQEBAQEBAQECAQECAgECAgIBAQEBAQIBAgECAQEBAQEBAgQBAQEBAQEBAQEBAQIBAgEBAQQBAQEBAgIBAgEBAQEBAgECAQMBAgEBAQECAgECAgEBAgECAQIBAgEBAQEBAQEBAQEBAgEBAQEBAQEBAQIBAQIBAQEBAgEBAgIBAQEBAQIBAgEDAQIBAQEBAQMBAgEBAgEBAgECAwEBAgMCAQEBAQECAQEBAQEEAQIBAQEBAgICAQEBAQEBAgEBAQIBAgEBAQIBAQECAQEBAQIDAQIBAQEEAQEBAQECAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQIBAwECAQEBAgEBAQEBAQEBAgIBAQMCAQIBAQEBAQEBAgEBAQEBAQIBAQMBAgEBAQEBAwEDAQIBAQEBAgEBAgEBAQEBAQEBAQEBAQEBAQEBAQECAQEBAQEBAQEBAQEBAQEBAgEBAQMBAQECAQEBAgEBAQEBAQEBAQEBAQEBAQEBAgEBAQEBAgEDAQIBAQECAgIBAQIBAQMBAQEBAQIBAgEBAQEBAQEBAQIBBAEBAQIBAQEBAgEBAwECAQIBAwEBAQIBAQEBAQICAgECAQEBAQECAQEBAQECAQIBAgEBAQEBAwEDAQMBAQEBAQIBAgEBAQIBAQECAQECAgEBAQEBAgEBAgEFAQIBAwEBAQEDAQICAQECAQIBAQECAgECAgEBAQEBBQEBAQECAQECAQEBAQICAQIBBgECAQMBAQEDAQEBAQEBAQEBAQEBAQIBBAEBAQEBAQEBAgIBAQICAQEBAgECAQEBAgIBAgEBAQEBAQEBAQECAQEBAQEBAQIBAQIDAQIBAgEBAQEBAgIBAQEBAgEBAQICAgEBAQUBAwEBAQEBAQEBAgEBAgEDBAEBAgICAQEBAQEBAQIBAgEBAQECAQEBAQMBAQIEAQECAQEBAQEBAQEDAQIBAgECAQIBAgECAQIBAgEDAQIBAQIBAgECBAMCAQECAQEBAQEBBgICAQEBAQEBAQIBAQEBAQECAQEBAQEBAwEBAQEBAgECAQEBAgECAQEBAQECAQECAQEBAQECAQEBAQECAQIBAQEBAQEDAQMBAQEBBAEBAgEBAQEBAgEBAQECAgECAQMBAgEDAQIBAQEBAQIBAQEBAgEBAQEBAQEBAgEBAQIBAQECAQEBAQEBAQEBAQEBAQEBAQECAQEBAgEDAgMBAgEBAQEBAgEBAQEDAgECAQIBAQEBAQMBAgIBAQEBAQECAQEBAQECAQEBAgEBAQEBAQEBAQEBAQEBAQUBAQIBAQEBAQIBAQEEAgEBAQEBAQMCAgMDAQEBAQIBAQECAQEBAQEBAQIBAQEDAQICAgEBAQIBAgECAQECAgEDAQIBAgIBAQIBAQEBAQEBAgECAQEBAgEBAQEBAQEBAgIBAwQCAgIBAQEBAQMBAgECAQIBAQEBAgEBAgEBAQEBAgEBAgIBAgEDAQIBAgECAQEBAQEDAQIBAQEBAQECAQEBAQEBAgEDAQEBAQEBAQIBAQECAQECAQEBAQMBAQECAQEBAQICAQEBAQECAgEBAgIBAQIBAQEBAgEBAQECAQEBAQEDAQEBBAEBAQMBAQIBAQECAQEBAQEBAQEBAQEBAQIDAQICAQMBAQEBAQEBAQIBAQEBAQIBAQEBAQMCAQEDAQEBAQEBAQEBAgEBAQEBAgEBAQEBAQEBAQEBAgEBAQEBAQEBAQEBAQEDAQEBBQIBAQMBAQECAQIBAgEBAgEBAgECAQECAgICAQEBAQEEAQkCAgEBAQEBAwEBAQIBAQEBAQEBAQEBAQMBAQMBAQEBAgECAQEBAQEBAwEBAQEDAQIBAgEDAQIBAgECAQMBAQIBAQEBAQICAQIBAQEBAQMBAgQBAQEBAgEBAQEBAQECAQEBAgEBAgEBAQECAQEBAgEDAQIBAgIBAQEBAQECAQIBAQEBAQMBAgEBAQIBAgEDAQEBAwEBAQEBAgEBAQECAgEBAwECAQEBAQEBAQEBAQEBAgEBAQEGAgIBAQEBAQEBAQEDAQEBAQEBAQEBAQEBAQECAQEBAwECAQEBAQEBAQEBAQIBAQEBAQEBAQEBAQEBAQEBAgEBAQEBAQIBAQMBAQECAQEBAgEBAQEBAQICAQIBAgEBAQEBAQMBAQIBAwIBAgEBAQEBAQMBAgEBAgEBBAEBAQEBAgEDAQMBAgEBAgECAgEBAQIBAQECAQIBAQEBAQEBAQECAQIBAQEBAQEBAgECAQMBAwEBAQICBAECAQIBAQECAgEBAQEDAQUCAgEDAQIBAQEBAQIBAQEDAQEBAQECAQIBAgEBAQEBAQECAQEBAQIBAQEBAgEBAQIBAwECAQgBBAEDAQMDAQICAQEBAQEBAQEBAQEBAQEBAgECAQIBBAEEAQIDAQUCAQEBAgEBAQEBAQEBAQMBAgECAQEBAQICAQEBAQIBAQIBAQECAQEBAQMCAQIBAQEDAQEBAQEBAQMBAgECAQIBAgEBAQECAQkCAwEIAgQBAQEFBQUHAwMDBQEBAQIBAwECAQIBAQEBAQIBAwEBAQEBAQECAQMBAQEBAQIBAgECAQEBAgECAQEBAQEBAQIBAQIBAQIBAgECAQEBAwECAQEBAwECAQIBAgIBAQEBAgEBAQEBAgEBAgEBAgEBAQIBAgECAgECAgECAgEBBAEBAQECAQIBBAMBAgEBAQEBAQEBAQEBAgEDAQIBAQECAgIBAQEBAQEBBAECAQEBAwECAQMDAgMBAQICAQEBAQEDAwEBAgQBAQECAQEBAQEBAQIBAQECAQEBAQEBAQEBAQMCAQEBAgECAQEBAQEBAQEBAQEBAQECAQEBAQEBAgEDAQEBAgEDAQIBAgEBAQIBAgEBBAQBAQMBAQIDAQECAQICAQEBAQIBAQECAQEBAQEBAQECBAICAQIBAgEBAgEBAQEDAQEBAQECAQEBAQECAQMBAQECAQEBAQEBAQEBAgECAgIBAgEBAQEBAgEBAQIBAQEBAQIBAgICAQEBAgEBAQIBAQEDAQMCAgECAQMBAQEBAQEBAgEBAQEBAQECAQEBAQECAQEBAQEDAQIBAgEBAgEBAQEDBAMBAQEBAQIBAQIBAQEBAQEBAgEBAQEBAQIBAgECAQIBAQECAQIBAQEBAQIDAQECAgIBAgECAQIBAQEDAQEBAQEEAQIBAQEBAQEBAQEBAQIBAgECAQIBAgEBAQEBAgEBAgQBAQIBAQEBAgEBAQEBAQEBAQIBBAIBAQIBAQECAQIBAgEBAQEBAQEBAwEBAQECAQEBAgECAQQBAgEBAwIBAQEBAgIBAQEBAQEBAgEDAQQBAgECAQEBAQICAQMBAwIDAQEBAQIFAQMBAQEEAQIBAgECAQIBAQEBAQIBAQEBAQEBAQECAQIBAQEBAgEBAQECAQIBAQECAQEBAQECAQEBAQEBAQIBBgEBAQIBAQEBAQMBAQECAQIBBAECAQEBAQEDAQIBAgEBAQMBAgECAQEBAQIBAgMBAQEBAgEBAQECAQEBAQEBAQECAgEBAQEBAgEBAQEBAQECAQEBAQEBAQECAQEBAQICAQEDAQIBAQECAQQBAQECAQIBAQEBAQEBAQECAgEBAQEBAQICAQEBAgECAgIBAQMBAgEBAQIBAgEBAQEBAgEEAQEBAQEBAQIBAQECAQEBAQEDAQEBAgEBAQIBAgEBAQIBAgEBAQQBAQEBAQEBAQEDAQICAQECAQEBAQEBAQEBAQIBAQEBAQECAQIBAgIBAQEBAgEBAQIBAwEBAQECAwEEAQMBAQEBAQEBAgECAgIBAQEBAQEBAgECAQEBAwEBAgEBAQEBAgEBAQECAQEBAQEBAQECAgEBAQEBAQIBAQEBAgEDAgEBAQECAQICAgECAQIBAQICAQIBAQECAQEBAgECAQEBAQECAQICAQEBAQMBAwECAQIBAQEEAQMBAQECAQIBAQECAQIBAgEBAQEBAgECAQEBAQECAQEBAQEBAQEBAgICAQIBAQECAQEBAQECAQIBAgECAQEBAgEBAQIBAgECAQMBAgEDAgEBAQMCAQEBAQECAQEBAQEBAQECAQEBAQIBAQEBAQEBAQEBAQICAgECAgIBAQQBAQMBAgECAQIBAQEBAgEBAQEBAQEBAQEDAQEBAQECAQEBAQEBAQIBAgICAQEBAQECAQEBAgIBAQIBAQEBAQEBAgEBAQECAQEBAQIBAQECAQEBAgECAQEBAgECAQMCAgEBAQEBAQECAQIBAQECAQEBAQECAQEBAwICAQEBAQECBAIBAQECAQEBAgEBAQEBAgECAQIBAQEBAQIBAQECAQIBAQECAQECAgEBAQIBAgECAQICAgEBAQEBAgECAQMBAgECAQEBAQEBAQIBAgEBAQEBAQEBAQEBAQEEAQEBAgEBAgMBAwIBAQIBAgEDAQIBAQEBAQIBAgEBAgIBAgECAQIBAQEBAQIBBAECAQEBAQEEAQEBAgEBAQEBAgEBAQMBAgEBAQEBAgEDAQEBAQECAQMCAQECAQIBAQIEAQEBAQICAQEBAQECAgEBAQEBAQEBAgECAQMBAQEBAgEBAwIBAQEBAwEBAgEBAQEBAQEBAQEBAQIDAgEDAQEBAQEBAQIBAQEDAQIBAQECAQEBAQEDAQIBAgEDAQEBAwEBAQEBAgEBAQEBAQEBAQIBAQEBAQEBAQECAQMBAQECAQEBAgMBAQEBAQECAQEBAgEEAQEBAgECAQIBAQEBAQICAQIBAQIBAQEBAQIBAQEDAQEBAgEBAQEBAQECAQMBAQEBAQECAwEBAgIBAgEDAQIBAwEBAQIBAQEBAQEBAQEBAQIBAQEDAQIBAgEBAQEBAgECAQMBBAECAQEBAgEBAQIBAQECAQIBAgECAQIBAgEBAQIBBAIDAgEBAwEBAQEBAQECAgIBAQEBAQEBAQIBAQMBAQEBAgIBAQECAgEBAgEBAgIBAQECAgEBAgECAQIBAQEBAQEBAQEBAQIBAQECAQICAQEBAQEBAwEBAQIBAQICAQIBAgEEAQEBAQECAQECAQEIAQEBBQEBAQEBAQEBAQMCAQICAwEBAQICAQQBAQICAQEBAgECAQEBAQEBAQMBAQECAQIBAQEBAQIBAgECAQIBAQEBAQEBAQEBAQIBAQEBAQEBAQEBAQIBBAEBAQEBAQEBAQEBAgEBAQEBAQEBAQIBAQIBAQIBAQEBAQEBAQEDAQMBAQEBAQEBAQECAQIBAQEBAQEBAQECAQMBAgEDAQIBAgECAQEBAgEBAQEBAQIBAQIBAQEBAQICAwEBAgEBAQECAQEBAQEBAQQBAgEBAQMBAQECAQIBAgECAQEBAQECAQECAQICAQIBAQEBAQIBAQEBAQIBAQEBAQEBAQEBAQIBAQECAQIBAQEBAQEBAQEBAQEBAQEBAgEBAgEDAQMBAQECAQIBAQIDAQIBAQIBAQIBAgIBAQMBAgEDAgEBAgEBAQIBAgECAQEBAQEBAQIBAgEBAQEBAQEBAQIBAQECAgEFAQEBAQEBAwIBAQEBAQECAQIBAgEBAQEBAQEBAQMBAQECAQICAQEBAQEBAQEBAQEBAQECAQEBAQECAQIBAQEBAQMDAQEBAQEBAwEBAgEBAgEBAgEBAQEBAgMCAQEBAQEBAgEBAQEBAwEDAQIDAgYDAQMBAgECAQEBBgECAQEBAQEBAQEBAQEBAgIBAQECAQEBAQECAQIBAQECAQIDAQEBAgECAgEBAQEBAQECAQEBAgECAQIBAgICAQIBAgEBAQEBAQEBAQEBAQEBAQIBAwEDAQEBAQEDAQIBAgEBAQIBAQEBAQIBAgEEAQEBAQIBAgEBAQEBAQEBAQEBAgICAQEBAgECAgECAQEBAQECAQMBAQEBAQEBAgIBAQMBAQEBAQMBAwEBAQEBAQEBAQIBAQEBAgEBAQECBAECAQEBAQEBAQECAQEBAQIBAQEBBAEBAgEBAwEBAQIBAQECAgIBAgEBAQMBAQECAQIBAQEBAQEBAgECAQEBAQEDAQEBAQECAQEBAQEBAQIBAwICAQIBBAEBAQIBAQMBAQIBAQEBAQEBAQECAQEBAQEBAQEBAQEBAQIBAQEBAgEBAQIBAgECAQECAQEBAQEBAQIBAQEDAQEDAQEBAQIBAwEBAQMBAgEDAQEBAQEBAQEBAwEBAQEBAQECAgEBAgEDAQEBAQEDAQIBAQEBAQEBAgEBAQIBAgEBAQIBAQEBAQIBAgEBAQYBAgECAgIBAgECAQIBAQECAQEBAQIEAQEBAQEBAQEBAQMBAQEBAgECAQIBAQEBAQEBAQEDAQEBAQECAgECAgEBAQEEAQIBAQEBAQEBAQEBAgIBAQIBAwEBAQIBAQEBAQEBAgIBAQMBAQECAQEBAQEBAQEBAQECAQEBAQEBAQEBAQEBAQIBAgEBAgEBAQEBAQEBAQECAQIBAQEBAgEBAQECAQEBAQEBAQEBBAEBAQIBAQECAQEBAQEBAgEBAQEBAQECAQECAQEBAgEBAQEBAQEBAQEBBAECAQEBAQECAQIBAwECAQEBAwEBAQIEAgECAQEBAwEBAQIBAgICAQIBAQEBAQMBAQEBAQIBAgEBAQIBAgEBAQEBAgECAQEBAQEBAwECAgECAQIBAgEEAQECAgEBAQEBAwECAwEBAQEDAQIBAwEBAgMBAQECAQIBAQEBAQIBAgECAQIBAQEBAQIBAQIBAQICAQEBAQEBAQQBBAIFAgIBAQEBAQECAgEBAQECAQEBAQEBAQEBAQEBAQEBAwEBAQIBAQEBAQIBBAEBAQEBBAICAQIBAQIBAQMBAQECAQIBAgECAQIBAQEBAQEBAQIBAQIBAQEBAQIBAQEBAQMBAQEBAgQBAQEBAQEBAgEBAQIBAQECAQEBAQECAQQBAgEBAQEBAQECAQIBAgECAQEBAgIBAwMBAgEBAQEBAQECAQEBAQEBAQEBAQEBAgEBAQEBAQIBAgEBAQIBAQEBAQEBAgEBAQEBAwEDAQMBAQEBAQIBAQECAQEBAgEEAQIBAgEBAQEBAQEBAgIBAgECAQEBAQEBAQEBAQEBAQEBAgEBAQEBAgICAQICAQECAQECAQIBAQMBAQEBAgEBAgEBAQEBAQEBAQIBAQEBAQIBAQEBAQEBAwECAQEBAQECAQEBAgEBAQIBAQECAQIBAQEBAQMBAgEBAQEBAQEBAQIBAQECAQEBAQICAQICAQMBBAMBAgEBAQIBAQEDAQIBAgEDAQIBAgEBAgQBAgEBAQEBAgEDAwEBAgEBAgEBAgEBAQIBAQEEAQIBAQEBAgEBAwEBAQMBAQECAQIBAwECAQEBAQIBAQIBAgECAQIBAQEDAwEBAgEBAQECAQEBAQEBAQEBAQIBAgEBAQQCAQEBAQIBAgEBAQEBAQEBAgIBAQEBAQIBAQECAQIBAgEBAgEBAQEBAQMBAQIEAQIBAQEBAQEBAQEBAQIBAQECAQEBAQEBAQEBAQEBAQEBAQECAQIBAQEEAQIBAQEBAQEBAQEBAQIBAgECAQIBAgEBAQEBAQEBAQIDAQEBAQEBAQECAQEBAQICAQEBAQEBAgEBAQECAQIBAQIBAgEBAQIIAQEBAQECAQEBAQEEAgIBAgEBAQECBAEBAQEGAQIBAQEDAQECAQIBAwECAQEBAgECAQEBAQEFAQICAgECAQEBAQEBAQMBAQEBAQIBAQICAQEBAgECAQEBAQECAQICAQEBAwEBAQEBAQEBAQEBAQEBAQEDAQQBAgEEAQIBAwECAQEBAwEBAQECAgEBAQIBAQEBAQEBAQEBAQEBAgEEAQEBAQEBAQIBAgECAQEBAQECAQEBAgYCAQEBAQEDAQIBAQIBAQIBAgEBAQEBAQEBAQIBAQECAQIBAQECAQIBAQEDAQIDAgEBAQEBAQECAQEBAQEBAgIBAQECAQEBAQECAQEBAQEBAgEBAgECAQECAgEBAQMBAQECAgEBAQEBAQIBAQECAwIBAgEBAgIBAgEBAQEBAgEBAQIBAgEBAQIBAQECAQEBAQEEAQIBAwEBAQEBAQECAQEBAQEBAQEBAgEBAwQBAgkCAgECAQQBAgECAQIBBQEBAgEBAQEBAgECAQEBAQEBAQMCAgEBAQMBAgEBAgMDBAEBAQMCAwEBAQIBAgEBAQEBAQECAQEBAQICAQIBAwEBAgEBAgIBAQECAQECAQMBAgEBAQIBAQEDAQQBAQECAQEBAQECAQIBAgEBAQEBAQECAQIBAwUBAQIBAgECAgEBAQEBAQEBBAECAQIBAQEBAgEBAgEBAQICAgEBAQEBAQECAQEBAgMBAQIBAQEDAQEBAwEEAQEBAQEBAQEBAQEDAQIBAQEBAQEBAQEDAQIBAgECAQICAgEBAQIBAQEBAgEBAQECAQIBAQEBAQIBAQEBAQEBBAEBAQEBAwIBAgEBAgECAQECAQEDAQIBAQECAQIBAQECAQMBAgECAQIBBAEBAQMBAQEBAQIBAQIBAQIBAQEBAQEBAQEBAQEBAQEBAQEBAQECAQEBAgECAQEBAgECAQIBAgEBAQIBAQECAQIEAQEBAQEBAgECAQEDAgECAQQBAgECAQEBAQEBAQEBAQEBAgIDAQEBAQEBAQEBAQIBAwICAQIBAgEBAQEBAQECAQEBAgECAQEBBAECAQMBAQECAQIBAgECAQIBAgEDAQEBAgEBAQEBAQECAQEBAQEFAQEBAwEFAQICAQEDAQIBAQEBAQEBAQEBAgEBAQEBAQEBAgEBAQELAQgCAQEBAgECAQEBAgECAQIBAgEBAgIBAgECAQEBAgEBAQEBAwECAQEBAQEBAQIBAgECAQEBAwECAQEBAQEBAQIBAQECAQIBAQEBAQMBAQEBAQMBAwEBAQUBAgEBAQEBAQMBAQEDAQECAQIBAQECAQQBAQECAQEBAgEBAQEBAQEDAQICAQIBAQMDAwECAQEBAgECAQIBAgIBAQEBAgEBAQEDAgEBAQEBAQEDAQMBBQEBAQQBAgECAQEBAgEBAQEBAQEBAQMBAQEDAQEBAgECAQIBAgEDAQEBAgEBAQEBAgECAQIBAwECAQIBAQEBAQMBAQECAQEBAQEFAQIBAgIBAQEBAQEBAQEBAQECAQQBAgECAQIBAQEBAQEBAQIBAgEBAgEBAQIBAQECAQIBAQEBAQEBAQEBAQEBAQEBAQIBAQECAQIBAQEBAQEBAgEBAQEEAQECAQEBAgEBAQIBAgIBAQEBAQEBAQEBAQMCAQIBAQEBAQIBAgECAQEBAQQBAQEFAQIBAQIBAgECAQIBAwEBAgIBAQECAQEBAQEBBAEDAQMBBAECAQEBAQEBAwECAQEBAgEBAQEBAQECAQIBAQMBAwEBAQECAQEBAgEBAQIBAgEBAQEBAgEBAQEBAQICAQEBAgECAQEBAQECAQIBAQEBAQEBAQEBAQEBAQEBAQIBAQEBAQIBAgEKAQMBAQEBAQUDAQEBAQIBAgEBAQEBAQECAQEBAQIBAQEBAQEDAgIBBAEEAQsBAQEBAQEBAQEBAQIBAgECAQEBAgEBAQEBAQEBAQEBAgEBAQEBAQECAQEBAQEBAQIBAQEDAQEBAQECAQECAgIDAQICAQEBAQIBAwEBAQEBAQEBBQkBAwECAQEBAQECAQIBAQECAgEBAQEBAQICAQICAQIBAQEBAQIBAQECAQIBAgECAQIBAgIBAQIBAQECAQIBAQECAQIBAgECAQEBAQEBAQMBAgEBAQIBAgEBAQIBAQEDAQIEAQYBAQEDBgECAQEBAQEBAQMCAQEBAQIBAgECAQIBAgEBAQEBAgECAwECAgEBAQEBAQECAQEBAQECAgEBAQEBAQIBAQEBAQECAwEBAQEBAQEBAQIBAgEBAQEBAQEBAQIBAgECAQIBAgECAQEBAQEEAQEBAQEBAQICAwEBAQEBAgEBAQEBAQMBAQECAQEDAQEBAwIBAQIBAQIBAQIBAQEBAQMBAgECAQEBAgECAQQBAQECAQQBAQEBAQEBAgEBAQEBAwECAQECAQEBAgEBAQECAQEBAgEDAQIBAQECAQEBAQIBAwQBAwECAQEEAQEBAQIBAQEBAgIBAQEBAwEBAQECAQEBAQEBAQEBAgEDAQECAQEEBgEBAQEDAQEEAQIBAQIBAgECAQEBAgEBAQEBAwIDAQEBAgECAgECAQEBAQECAwEBAQEBAQECAQICAQECAQEBAQECAQIDAQECAQIBAQEBAgEBAgECAQIBAgECAQEBAwcCAQEBAQMBAQEBAQEBAQIBAgEBAQIBAgEBAQEBAQECAQEBAQEBAQIBAQEBAgIBAgECAQIBAQEBAQIBAQECAQEBAgECAQECAQEBAQEBAQEBAQEBAgEBAQEBAQEBAQMBAQEBAQEBAwECAQEBAQIBAQIBAQEBAQEBAQECAQIBAQEBAQECAgECAQQBAQECAQEBAQEBAQIBAQEBAQEBAgECAQEBAQECAgEBAgEBAgEBAQECAQEBAQEBAgEBAQEBAQEBAgEBAQEBAQMCAgIBAQICAQEBAQEBAQEBAgEBAQUBAQECAQECAgECAQIBAQEBAQEBAQIBAQECAQEBAQEBAQEBAQEBAwEBAQEBAQIBAQIBAgECAgMBAQEBAgEBAQEBAgEBAQECAQEBAgEBAgEBAgECAQIBAQEDAQIBAgEBAQEBAQECAQEBAgEDAQMBAgEBAQEBAQEDAQIBAQEDAQEBAgECAQECAgECAQEBAQEBAQICAQEDAQIBAQEBAQIBAgECAQEBAQECAQIBAQEBAQIBAgECAQIBAQECAQMBAQECAQIBAgECAQMDAQEBAQIBAgEBAQEBEyQBAgYGAQECAQEBAQEBAQEBBQEBAQEBAgECAQEBAgECAQECAgECAQIBAgECAQEBAQECAQEBAQEBAQIBAgEBAgEBAQECAQMBAgECAQMBAgEBAQMBAgEBAQIBAgEBAQEBAwECAQIBAQEBAQIBAQEBAQEBAQECAQIBAgEDAQEBAQEBAQEBAQECAQMBAgEBAQEBAQECAQIBAQEBAQIBAgEBAgIDAgEBAwMBAgECAQIBAgEDAQEBAgEBAQUBAQECAQMBAQEBAQIBAgEDAQECAgECAQEBAgEBAQIBAgEBAQEBAQEBAQIDAQECAgIBAgECAQEBAwEBAQQBBAECAQIBAgEBAQEBAQEBAQEBAQEBAgEBAgICAQIBAQECAQEBAQMCAQEBAgECAQECAQEBAQEBAQECAQEBAQEBAQIBAQEBAQIBAQEBAQEBAgEEAQEBAQIBAQEBAgIBAQIBAwEBAQEBAgECAQEBAQEBAgEBAQEBAQIBAgEFAQICAQEBAgIBAgECAgEBAgECAQECAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgECAQEBAQECAQEBAgECAQQBAgECAQIBAgIBAQEBAwEBBAIBAgEBAQEBAQEBAQEBAgICAQEBAQECAgIBAQIBAQEBAwEBAQMBAQECAQEBAQEDAQECAQICAgEBAQIBAQECAQEBAQEBAQECAgEBAQEBAQIBAQECAQEBAgEBAgECAgECAQIBAgECAQEBAQEWCw8BAgECAQIBAgEBAQEBAQEBAQQEAQICAQECAgEBAQIBAQEBAQECAgIBAQQBAQEBAQIBAgEBAQIBAQECAQEBAwEBAQEBAQECAQIBAQECAQEBAgEBAQMBAQMBAwEBAQEBAQEBAQEBAQEDAQIBAQEBAQEBAQEBAgEBAQEBAwECAQECAQECAQEBAgECAQIBAwEBAQIBAQEBAQEBAgIEAQEBAwEBAQEBAQEBAQEBAQEBAQEBAQEBASELDAEBAQIBAgEDAwEBAQECAQIBAQEBAgIBAQEDAQEBAgEBAQIBAQEBAQIBAgEBAQECAwECAQECAQECAgEBAQMBAQECAgEBAQEBAQEBAQECAgECAgEBAgEBAQMBAQEBAQEBAQEDAQECAwECAQEBAQECAQEBAgEDAQIBBAEBAQEBAQIBAQEBAQECAQEBAwEBAQEBBAIBAQEBAQEBAQEBAgEBAQIBAwEDAQEBAQEBAQEBAgECAQEBAgECAQIBAQEBAgUBAwEBAgECAgIBAQICAQEBAQUBAgEBAQIBAQEBAQEBAQEBAQEBAQEBAQMBAQEDAQEBAQECAQIBAgEBAQEBAgECAQIBAgEBAQEBAQECAQEBAQIBAQEBAQECAQIBAQECAQEBAgECAgIBAQEBAQIBAgECAQEBAgEBAQIBAgECAwEBAQECAQEBAgEBAQMBAgEBAQIBAQECAQIBAwEBAQEBAQIBAQEBAgICAQEBAgECAQEBAgEBAQEBAwIBAgEBAQIDAQEBAQEDAQEBAgEBAQEBAQEEAQIBAgEBAQECAgECAQEBAQEEAQEBAgEBAQIBAQEBAQEBAwECAgEBAQEBAQIBAQECAQMBAQEBAQMBAQECAQECAQEDAQEBAwEBAQEBAQEBAQEBAwECAQEBAQEBAgEBAQICAQIBAgIBAQIBAQECAQEBAgEBAQMBAQECAwICAQEBAQEBBAEBAQEBAQEDAQEBAQIBAQEBAgEBAQEBBAEBAQIBAQECAQECAQEBAQIBAQEBAQEBAgECAQEBAgEBAgMBAgEBAQIBAgEBAgEBAQECAQEBAgECAQIBAQEBAQEBAQEBAQEBAgECAQEBAgEBAQEBAgIBAQEBAgEBAQEBAgEBAgIBAQICAQEBAQECAwEBAgECAQEBBAIBAQEBAQECAQEBAQECAQEBAgEDAQEBAQECAQQBAgECAQEBAQEBAQEBAgECAQIBAwEDAQEBAQEBAQIBAQICAQIBAwEBAQIBAgECAQMBAQEBAQEBAQECAQEBAQEBAgIBAQECAgMBAQEBAQECAgECAQICAQIBAgEBAgECAgEBAgEBAQMBAgECAQIBAgEBAgEBAgECAQIBAQEBAQIBAgEBAQEBAgEBAQIBAgEBAQEBAgEBAQIBAgEBAgEBAgEDAQEBAQEBAQEBAgECAgEBAQECAQEBAgEBAgIBAgEEAQEBAgEEAQIBAQEBAQIBAQEBAQECAgEBAgEBAQECAQECAwECAQEBAgIBAQEBAwICAQIBAQECAQEBAwEBAQEBAQECAQEBAgEBAQEBAgECBQEDAQEBAQEDAQEBAQEBAQMBAQIBAQECAQEBAQECAQIBAgEBAQIBAgEBAQEBAwEBAQEBAgEBAQEBAQEBAQIBAgICAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQIBAQECAQIBAQEDAQEBAQEBAQIBAgEBAQECAgQDAQEBBAEBAQMBAQECAQIBAQEEAQIBAgEBAQIBAwEBAQEBAwECAQIBAgEDAQEBAgEBAQIBAwEBAQEBAgEBAQEBAQEBAQEBAgECAQEBAQECAQEBAQICAQEBAgEBAQEBAQIBAQIBAQEBAQEBAgECAQEBAQEBAQEBAQEBAQECAgEBAQEBAgECAQEBAgEBAQIBAQEDAQIBAQECAQIBAQEBAQIBAgEBAgIBAwEBAQEBAQEBAQEBAQEBAwIDAQMDAQEBAQECAQEBAwEBAQEBAgECAQICAQEDAQEBAQEBAQEBAQIDAQEBAQEBAQEBAwEDAQIBAQEBAQEBAgEBAgEBAQECAQIBAgEBAQECAQECAQEBAgEBAQECAQEBAgMBAQEDAQECAQEBAQEBAQEBAQMBAQECAQECAQQBAQEEAQIBAwECAQEBAQECAgEBAQEBAQECAQEBAwECAgEBAQECAQEBAgEBBAECAgECAQEBAQEBAQMBAgEBAQIBAgEBAQMBAgECAQIBAwEHAQIBAQEBAQUBAQIBAhoBAgECAQEBCAEDAQEBAQECAQEBAwEBAQIBAQEBAQIBAQEDAQMBAgECAQMBAwEBAQEBAQEBAQIBAgEBAQEBAQEBAQEBAgEEAQEBAQEBAQEBAgECAQECAgEEAQMBAgEBAQECAwEBAQIBAQECAQQBAgEDAQIBAgEDAQEBBAIBAQEBAgEBAgMBAgEBAQEBAwECAQEBAgEDAQECAQECAQMBAgECAQMBAgEBAQMBAQECAQEBAQECAQEBAQEBAQIBAQECAQEBAgEBAwEBAgEBAQEBAgEBAQMBAQEBAgEBAgIBAQIBAwECAQEBAwEBAQEBAwECAQIBAgEBAQMBAgEBAQECAQEBAQICAQEBAQIBAgEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAQEBAQIBAQEBAQIBAQECAQIBAQEDAQECAQEBAQEBAQEBAQEBAgEBAQIBAgEBAQEBAQEBAQEBAgEBAgEBBAECAQEBBAEBBAIBAQECAQEBAQEBAQIBAQEBAwEBAQEBAQEBAQIBAQIBAQEBAQUBAgEBAQEBAgEBAQoBAgEDAQgBBAIBAQEBAgEBAQIBAQEBAQMBAQEBAQEDAgEBAgIBAQECAwEBAQEBAQEBAgEBAQECAQEBAQEBAQECAQECAQECAQEBAQEBAQEBAQEBAgEBAQUBAwEBAQIBAQEBAQEBBQEBAQEBAQEBAQEBAQEBAQIBAQEBAwEBAQEBAgEBAQEBAQECAQMBAQEBAQEBAQECAQIBAgECAwECAgEBAQIBAgEBAQIBAgEDAQEBAgEBAQEBAwEBAQEBAQEBAQEBAgEBAQEBBgEBAQEBAwECAQEBAQEBAQEBAQEBAQIBBAECAQIBAQIBAQEBAgEDAQIBAQEBAQIBAgEBAQIBAgECAwEBAgIBAwEBAQECAQMBAQECAQIBAQEBAQIBAQEBAgEBAgEBAQEBAQEBAQEBAQEBAQEBAgEBAQEBAQEBAQEBAQEBAQMBAQICAQQBAQMBAQIBAgEBAQIBAgECAQIBAgEDAQIBAQECAQEBAQEBAQQBAgECAgEBAQEBAQEBAgICAQEBAwEBAQEBAQECAQIBAQECAQQBAgEBAQEBAwECAQEBAgECAQECAgEBAQIBAQECAQIBAgEBAQIBAQEBAQEBAgEDAQEBAgEBAQEBAQEBAgMBAQECAQIBAQEDAQEGAgEBAQUBAQEFAQIBAQEBAQIBAQEBAgIBAgECAQECAQcBCgEEAgIBAQEBAQECAQEBAQEZAQEBAQEBAQEBAQEYBAEBAgIBAQECAQECAQIBAQECAQEBAQFFJwEBAQEBAQcBAgECAQEBAQEBAQEBAQEMAQEBAgECAQEBBQEBAQEBAQEBAQEBAQENAQEBAQEBAQgBAgEBAQUBAgECAQEBBQEBAQEBAwEBAQEBBAEBAQEBAQEBASsBAwEEAQEBAQECAQEBAQICAQEBAQICAQEBAQECAQEBAgIBAgEBAgEBAQEBBAEBAQIBBAECAQEBAQEBAQIBAgEBAQECAQMBAQMCBwYBAQEBAwEBBgcBAwEBAQEBAgEBAQEBAQECAQECAQEBAQEBAgEBAgECAgEBAQEBAQECAQIBAQEBAQIBAQECAQICAQICAQIBAQEBAQEBAgEBAQIBAQEBAQECAQMCAQMBAQEBAQMBAgECAQIBAQEBAQEBAQECAQEBAQECAQEBAgECAQECAQIBAQIBAQEBAQEBAQEBAQEBAQEBAQECAQEDAQIBAQEBAQEBAgEBAQEBAgEBAgEBAwECAQEBAgEBAQEBAQEBAQMBAgECAQIBAwIDAQEBAQICAQQCAQECAgEBAQIBAQIBAgEDAQEBAQECAwIBAgEBAQEBAgEBAgEBAQICAQEBAQECAQICAQEBAQEBAQEEAQMBAQEFAQECAQQEAQEBAQECAQIBAgECAQEBAwECAQIDAQEBAQEBAQEBAQEBAQEBAQECAQEBAQMBAQEBAQEBAgEBAgEBAgEDAQIBAQECAQIBAgECAQEBAgEBAQEBAQEBAgIBAQEDAQIBAgIBAQMBAQIFAQEBAgECAQEBAQEBAQECAQEDAQEBAQEBAQIBAgEDAQIBAgEBAQMBAwEBAQIBAQMCAQMBAgEBAQECAgEBAQEBAQECAQIBAgEBAQEBAQECAQEBAgECAQECAQECAQUBAgECAgEBAQMDAQIBAQECAQEBAQEBAQMBAgECAQEBAwECAQIBAgECAQEBAgEBAQIEAQECAQIBAgEBAQQBAgEEAQIBAQIBAgEBAgEBAQEBAwECAQEBAwECAQECAwEDAQIBAQEBAQEBAQEBAQMBAgEEAQMBAgIEAQIBAQECAQIBAQEBAQIBAQECAQEBAgEBAgECAgEBAQEBAQEBAQEBAQIBAQEBAQEBAQEBAgIBAQMBAgEBAQEBAQEBAQIBAQEBAQIBAQEBAgEBAQIBAQEBAgEBAQIBAQEBAgEBAwEBAQEBAgEBAQEBAQEBAQIBAQICAQEBAQEBAgEBAQECAQIBAgEDAQEBAgIBAQEDAwEBAQIBAwECAQIBAgEBAQEBAgEBAgEBAQEDAQEBAwEBAQIBAgECAQEBAQEBAQIBAQEBAQMBAgECAQIBAgECAQEBAQECAQIBAQECAQEBAQEBAQEBAgEDAQIBAQICAQIBAgEBAQEBAgEBAQEBAQECAQIBAgMBAQEBAQEBAQEBAQEBAQEBAwECAQEBAQEBAQIBAQIBAQEBAwEBARgEJgECAQEBHgIBAQEBAgEHAQMBAQEBAQEBAQEBAgIBAQEBAQEBAQEBAgEBAQECAQIBAgEBBAEBAQEBBAEBAgICAQEDAwECAQEBDQEBAQEBAQECAgEBAQEBAQEBAgECAQIBAgEBAQEBAQEBAQICAgIBAQEBAgEBAQEBAgIBAQEBAgEEAQEBAQECAQEBAgECAQEBAwIBAgEBAW8EAQEBAgECAQEBAgECAQIBAQECAQEBAQEBAQIBAQECAQECAgECAQEBAgEBAQEBAQEDAQIBAQEDAgIBAQEBAQIBAQECAQMBAQECAQICAQEBAQIBAQECAQcDAwECAQEBAQEBAgMBAgEBAQEBAwQBAQEBAgECAQIBBAEBAQEBAgEBAQIBAQEBAQEBAQECAQIBAgEBAQEBAQEBAQEBAQECAQIBAgICBAEDAgQDAQEBAgECAQIBBAEBAgEBAQECAQIBAgECAQIBAQECAQEBAgECAQICAQMBAQIBAQECAQIBAgEBAQEBAQEBAQMBAgECAQEBAQEEAQIBAQECAQECAwIBAQEBAQECAQEBAQEBAQECAQEBAQIBAgEBAgEBAQEBAQEBAQECAQIBAQEBAgEBAQECAQEBAgEDAQECAwEDAgEBAQECAQIBAgEBAQEBAQEBAQEBAQEEAQEBAQEEAQEBAwEBAQEBAQEHAQEBAQEBAQIBAgECAgEBAgECAQIBAQEBAQIBAgECAQEBBAEBAgIBAgEBAQEBAgEBAgECAQECAQEBAQEBAQEBAQEBAQECAQMBAQIBAQEDAQIBAwECAQIBAgEBAQECAQECAQMBAQEBAQEBBAEBAQIBAQIBAQEBAQEBAQEBAQEDAQIBAQEBAQEBAQEBAQECAQECAQIBAQEBAQIBAQIBAgEBAQEFAIjbAgACAQABAAA=",
      wo = "loro_wasm_bg-38fc1cd3.wasm",
      so = async (A = {}, B) => {
        let g;
        if (B.startsWith("data:")) {
          const I = B.replace(/^data:.*?base64,/, "");
          let l;
          if (typeof Buffer == "function" && typeof Buffer.from == "function")
            l = Buffer.from(I, "base64");
          else if (typeof atob == "function") {
            const G = atob(I);
            l = new Uint8Array(G.length);
            for (let c = 0; c < G.length; c++) l[c] = G.charCodeAt(c);
          } else throw new Error("Cannot decode base64-encoded data URL");
          g = await WebAssembly.instantiate(l, A);
        } else {
          const I = await fetch(B),
            l = I.headers.get("Content-Type") || "";
          if (
            "instantiateStreaming" in WebAssembly &&
            l.startsWith("application/wasm")
          )
            g = await WebAssembly.instantiateStreaming(I, A);
          else {
            const G = await I.arrayBuffer();
            g = await WebAssembly.instantiate(G, A);
          }
        }
        return g.instance.exports;
      };
    let n;
    function ho(A) {
      n = A;
    }
    const CA = new Array(128).fill(void 0);
    CA.push(void 0, null, !0, !1);
    function p(A) {
      return CA[A];
    }
    let XI = CA.length;
    function Yo(A) {
      A < 132 || ((CA[A] = XI), (XI = A));
    }
    function W(A) {
      const B = p(A);
      return Yo(A), B;
    }
    function y(A) {
      XI === CA.length && CA.push(CA.length + 1);
      const B = XI;
      return (XI = CA[B]), (CA[B] = A), B;
    }
    const Mo =
      typeof TextDecoder > "u"
        ? (0, CG.require)("util").TextDecoder
        : TextDecoder;
    let mt = new Mo("utf-8", { ignoreBOM: !0, fatal: !0 });
    mt.decode();
    let gG = null;
    function vg() {
      return (
        (gG === null || gG.byteLength === 0) &&
          (gG = new Uint8Array(n.memory.buffer)),
        gG
      );
    }
    function CB(A, B) {
      return (A = A >>> 0), mt.decode(vg().subarray(A, A + B));
    }
    function Ig(A) {
      return A == null;
    }
    let IG = null;
    function Wo() {
      return (
        (IG === null || IG.byteLength === 0) &&
          (IG = new Float64Array(n.memory.buffer)),
        IG
      );
    }
    let lG = null;
    function i() {
      return (
        (lG === null || lG.byteLength === 0) &&
          (lG = new Int32Array(n.memory.buffer)),
        lG
      );
    }
    let P = 0;
    const mo =
      typeof TextEncoder > "u"
        ? (0, CG.require)("util").TextEncoder
        : TextEncoder;
    let GG = new mo("utf-8");
    const yo =
      typeof GG.encodeInto == "function"
        ? function (A, B) {
            return GG.encodeInto(A, B);
          }
        : function (A, B) {
            const g = GG.encode(A);
            return B.set(g), { read: A.length, written: g.length };
          };
    function yA(A, B, g) {
      if (g === void 0) {
        const e = GG.encode(A),
          a = B(e.length) >>> 0;
        return (
          vg()
            .subarray(a, a + e.length)
            .set(e),
          (P = e.length),
          a
        );
      }
      let I = A.length,
        l = B(I) >>> 0;
      const G = vg();
      let c = 0;
      for (; c < I; c++) {
        const e = A.charCodeAt(c);
        if (e > 127) break;
        G[l + c] = e;
      }
      if (c !== I) {
        c !== 0 && (A = A.slice(c)),
          (l = g(l, I, (I = c + A.length * 3)) >>> 0);
        const e = vg().subarray(l + c, l + I),
          a = yo(A, e);
        c += a.written;
      }
      return (P = c), l;
    }
    let cG = null;
    function No() {
      return (
        (cG === null || cG.byteLength === 0) &&
          (cG = new BigInt64Array(n.memory.buffer)),
        cG
      );
    }
    function De(A) {
      const B = typeof A;
      if (B == "number" || B == "boolean" || A == null) return `${A}`;
      if (B == "string") return `"${A}"`;
      if (B == "symbol") {
        const l = A.description;
        return l == null ? "Symbol" : `Symbol(${l})`;
      }
      if (B == "function") {
        const l = A.name;
        return typeof l == "string" && l.length > 0
          ? `Function(${l})`
          : "Function";
      }
      if (Array.isArray(A)) {
        const l = A.length;
        let G = "[";
        l > 0 && (G += De(A[0]));
        for (let c = 1; c < l; c++) G += ", " + De(A[c]);
        return (G += "]"), G;
      }
      const g = /\[object ([^\]]+)\]/.exec(toString.call(A));
      let I;
      if (g.length > 1) I = g[1];
      else return toString.call(A);
      if (I == "Object")
        try {
          return "Object(" + JSON.stringify(A) + ")";
        } catch {
          return "Object";
        }
      return A instanceof Error
        ? `${A.name}: ${A.message}
${A.stack}`
        : I;
    }
    function po() {
      n.setPanicHook();
    }
    function yt(A, B) {
      const g = B(A.length * 1) >>> 0;
      return vg().set(A, g / 1), (P = A.length), g;
    }
    let eG = null;
    function Nt() {
      return (
        (eG === null || eG.byteLength === 0) &&
          (eG = new Uint32Array(n.memory.buffer)),
        eG
      );
    }
    function He(A, B) {
      const g = B(A.length * 4) >>> 0,
        I = Nt();
      for (let l = 0; l < A.length; l++) I[g / 4 + l] = y(A[l]);
      return (P = A.length), g;
    }
    let bB = 128;
    function kg(A) {
      if (bB == 1) throw new Error("out of js stack");
      return (CA[--bB] = A), bB;
    }
    function aG(A, B) {
      return (A = A >>> 0), vg().subarray(A / 1, A / 1 + B);
    }
    function RI(A, B) {
      A = A >>> 0;
      const g = Nt().subarray(A / 4, A / 4 + B),
        I = [];
      for (let l = 0; l < g.length; l++) I.push(W(g[l]));
      return I;
    }
    function zB(A, B) {
      if (!(A instanceof B)) throw new Error(`expected instance of ${B.name}`);
      return A.ptr;
    }
    function Fo(A) {
      return () => {
        throw new Error(`${A} is not defined`);
      };
    }
    function RA(A, B) {
      try {
        return A.apply(this, B);
      } catch (g) {
        n.__wbindgen_exn_store(y(g));
      }
    }
    const pt = new FinalizationRegistry((A) => n.__wbg_loro_free(A >>> 0));
    class uA {
      static __wrap(B) {
        B = B >>> 0;
        const g = Object.create(uA.prototype);
        return (g.__wbg_ptr = B), pt.register(g, g.__wbg_ptr, g), g;
      }
      __destroy_into_raw() {
        const B = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), pt.unregister(this), B;
      }
      free() {
        const B = this.__destroy_into_raw();
        n.__wbg_loro_free(B);
      }
      constructor() {
        const B = n.loro_new();
        return uA.__wrap(B);
      }
      static fromSnapshot(B) {
        try {
          const G = n.__wbindgen_add_to_stack_pointer(-16),
            c = yt(B, n.__wbindgen_malloc),
            e = P;
          n.loro_fromSnapshot(G, c, e);
          var g = i()[G / 4 + 0],
            I = i()[G / 4 + 1],
            l = i()[G / 4 + 2];
          if (l) throw W(I);
          return uA.__wrap(g);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      attach() {
        n.loro_attach(this.__wbg_ptr);
      }
      is_detached() {
        return n.loro_is_detached(this.__wbg_ptr) !== 0;
      }
      checkoutToLatest() {
        try {
          const I = n.__wbindgen_add_to_stack_pointer(-16);
          n.loro_checkoutToLatest(I, this.__wbg_ptr);
          var B = i()[I / 4 + 0],
            g = i()[I / 4 + 1];
          if (g) throw W(B);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      checkout(B) {
        try {
          const l = n.__wbindgen_add_to_stack_pointer(-16),
            G = He(B, n.__wbindgen_malloc),
            c = P;
          n.loro_checkout(l, this.__wbg_ptr, G, c);
          var g = i()[l / 4 + 0],
            I = i()[l / 4 + 1];
          if (I) throw W(g);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      get peerId() {
        const B = n.loro_peerId(this.__wbg_ptr);
        return BigInt.asUintN(64, B);
      }
      get peerIdStr() {
        let B, g;
        try {
          const G = n.__wbindgen_add_to_stack_pointer(-16);
          n.loro_peerIdStr(G, this.__wbg_ptr);
          var I = i()[G / 4 + 0],
            l = i()[G / 4 + 1];
          return (B = I), (g = l), CB(I, l);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16), n.__wbindgen_free(B, g);
        }
      }
      setPeerId(B) {
        try {
          const l = n.__wbindgen_add_to_stack_pointer(-16);
          n.loro_setPeerId(l, this.__wbg_ptr, B);
          var g = i()[l / 4 + 0],
            I = i()[l / 4 + 1];
          if (I) throw W(g);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      commit(B) {
        var g = Ig(B) ? 0 : yA(B, n.__wbindgen_malloc, n.__wbindgen_realloc),
          I = P;
        n.loro_commit(this.__wbg_ptr, g, I);
      }
      getText(B) {
        try {
          const G = n.__wbindgen_add_to_stack_pointer(-16);
          n.loro_getText(G, this.__wbg_ptr, kg(B));
          var g = i()[G / 4 + 0],
            I = i()[G / 4 + 1],
            l = i()[G / 4 + 2];
          if (l) throw W(I);
          return nG.__wrap(g);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16), (CA[bB++] = void 0);
        }
      }
      getMap(B) {
        try {
          const G = n.__wbindgen_add_to_stack_pointer(-16);
          n.loro_getMap(G, this.__wbg_ptr, kg(B));
          var g = i()[G / 4 + 0],
            I = i()[G / 4 + 1],
            l = i()[G / 4 + 2];
          if (l) throw W(I);
          return lg.__wrap(g);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16), (CA[bB++] = void 0);
        }
      }
      getList(B) {
        try {
          const G = n.__wbindgen_add_to_stack_pointer(-16);
          n.loro_getList(G, this.__wbg_ptr, kg(B));
          var g = i()[G / 4 + 0],
            I = i()[G / 4 + 1],
            l = i()[G / 4 + 2];
          if (l) throw W(I);
          return Jg.__wrap(g);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16), (CA[bB++] = void 0);
        }
      }
      getTree(B) {
        try {
          const G = n.__wbindgen_add_to_stack_pointer(-16);
          n.loro_getTree(G, this.__wbg_ptr, kg(B));
          var g = i()[G / 4 + 0],
            I = i()[G / 4 + 1],
            l = i()[G / 4 + 2];
          if (l) throw W(I);
          return QG.__wrap(g);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16), (CA[bB++] = void 0);
        }
      }
      getContainerById(B) {
        try {
          const G = n.__wbindgen_add_to_stack_pointer(-16);
          n.loro_getContainerById(G, this.__wbg_ptr, y(B));
          var g = i()[G / 4 + 0],
            I = i()[G / 4 + 1],
            l = i()[G / 4 + 2];
          if (l) throw W(I);
          return W(g);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      version() {
        try {
          const l = n.__wbindgen_add_to_stack_pointer(-16);
          n.loro_version(l, this.__wbg_ptr);
          var B = i()[l / 4 + 0],
            g = i()[l / 4 + 1],
            I = aG(B, g).slice();
          return n.__wbindgen_free(B, g * 1), I;
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      oplogVersion() {
        try {
          const l = n.__wbindgen_add_to_stack_pointer(-16);
          n.loro_oplogVersion(l, this.__wbg_ptr);
          var B = i()[l / 4 + 0],
            g = i()[l / 4 + 1],
            I = aG(B, g).slice();
          return n.__wbindgen_free(B, g * 1), I;
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      frontiers() {
        try {
          const l = n.__wbindgen_add_to_stack_pointer(-16);
          n.loro_frontiers(l, this.__wbg_ptr);
          var B = i()[l / 4 + 0],
            g = i()[l / 4 + 1],
            I = RI(B, g).slice();
          return n.__wbindgen_free(B, g * 4), I;
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      oplog_frontiers() {
        try {
          const l = n.__wbindgen_add_to_stack_pointer(-16);
          n.loro_oplog_frontiers(l, this.__wbg_ptr);
          var B = i()[l / 4 + 0],
            g = i()[l / 4 + 1],
            I = RI(B, g).slice();
          return n.__wbindgen_free(B, g * 4), I;
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      cmpFrontiers(B) {
        try {
          const G = n.__wbindgen_add_to_stack_pointer(-16),
            c = He(B, n.__wbindgen_malloc),
            e = P;
          n.loro_cmpFrontiers(G, this.__wbg_ptr, c, e);
          var g = i()[G / 4 + 0],
            I = i()[G / 4 + 1],
            l = i()[G / 4 + 2];
          if (l) throw W(I);
          return g;
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      exportSnapshot() {
        try {
          const c = n.__wbindgen_add_to_stack_pointer(-16);
          n.loro_exportSnapshot(c, this.__wbg_ptr);
          var B = i()[c / 4 + 0],
            g = i()[c / 4 + 1],
            I = i()[c / 4 + 2],
            l = i()[c / 4 + 3];
          if (l) throw W(I);
          var G = aG(B, g).slice();
          return n.__wbindgen_free(B, g * 1), G;
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      exportFrom(B) {
        try {
          const e = n.__wbindgen_add_to_stack_pointer(-16);
          n.loro_exportFrom(e, this.__wbg_ptr, kg(B));
          var g = i()[e / 4 + 0],
            I = i()[e / 4 + 1],
            l = i()[e / 4 + 2],
            G = i()[e / 4 + 3];
          if (G) throw W(l);
          var c = aG(g, I).slice();
          return n.__wbindgen_free(g, I * 1), c;
        } finally {
          n.__wbindgen_add_to_stack_pointer(16), (CA[bB++] = void 0);
        }
      }
      import(B) {
        try {
          const l = n.__wbindgen_add_to_stack_pointer(-16),
            G = yt(B, n.__wbindgen_malloc),
            c = P;
          n.loro_import(l, this.__wbg_ptr, G, c);
          var g = i()[l / 4 + 0],
            I = i()[l / 4 + 1];
          if (I) throw W(g);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      importUpdateBatch(B) {
        try {
          const l = n.__wbindgen_add_to_stack_pointer(-16);
          n.loro_importUpdateBatch(l, this.__wbg_ptr, y(B));
          var g = i()[l / 4 + 0],
            I = i()[l / 4 + 1];
          if (I) throw W(g);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      toJson() {
        try {
          const l = n.__wbindgen_add_to_stack_pointer(-16);
          n.loro_toJson(l, this.__wbg_ptr);
          var B = i()[l / 4 + 0],
            g = i()[l / 4 + 1],
            I = i()[l / 4 + 2];
          if (I) throw W(g);
          return W(B);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      subscribe(B) {
        return n.loro_subscribe(this.__wbg_ptr, y(B)) >>> 0;
      }
      unsubscribe(B) {
        n.loro_unsubscribe(this.__wbg_ptr, B);
      }
      debugHistory() {
        n.loro_debugHistory(this.__wbg_ptr);
      }
      getAllChanges() {
        const B = n.loro_getAllChanges(this.__wbg_ptr);
        return W(B);
      }
      getChangeAt(B) {
        try {
          const G = n.__wbindgen_add_to_stack_pointer(-16);
          n.loro_getChangeAt(G, this.__wbg_ptr, y(B));
          var g = i()[G / 4 + 0],
            I = i()[G / 4 + 1],
            l = i()[G / 4 + 2];
          if (l) throw W(I);
          return W(g);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      getOpsInChange(B) {
        try {
          const e = n.__wbindgen_add_to_stack_pointer(-16);
          n.loro_getOpsInChange(e, this.__wbg_ptr, y(B));
          var g = i()[e / 4 + 0],
            I = i()[e / 4 + 1],
            l = i()[e / 4 + 2],
            G = i()[e / 4 + 3];
          if (G) throw W(l);
          var c = RI(g, I).slice();
          return n.__wbindgen_free(g, I * 4), c;
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      frontiersToVV(B) {
        try {
          const G = n.__wbindgen_add_to_stack_pointer(-16),
            c = He(B, n.__wbindgen_malloc),
            e = P;
          n.loro_frontiersToVV(G, this.__wbg_ptr, c, e);
          var g = i()[G / 4 + 0],
            I = i()[G / 4 + 1],
            l = i()[G / 4 + 2];
          if (l) throw W(I);
          return W(g);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      vvToFrontiers(B) {
        try {
          const e = n.__wbindgen_add_to_stack_pointer(-16);
          n.loro_vvToFrontiers(e, this.__wbg_ptr, kg(B));
          var g = i()[e / 4 + 0],
            I = i()[e / 4 + 1],
            l = i()[e / 4 + 2],
            G = i()[e / 4 + 3];
          if (G) throw W(l);
          var c = RI(g, I).slice();
          return n.__wbindgen_free(g, I * 4), c;
        } finally {
          n.__wbindgen_add_to_stack_pointer(16), (CA[bB++] = void 0);
        }
      }
      getDeepValue() {
        const B = n.loro_getDeepValue(this.__wbg_ptr);
        return W(B);
      }
    }
    const Ft = new FinalizationRegistry((A) => n.__wbg_lorolist_free(A >>> 0));
    class Jg {
      static __wrap(B) {
        B = B >>> 0;
        const g = Object.create(Jg.prototype);
        return (g.__wbg_ptr = B), Ft.register(g, g.__wbg_ptr, g), g;
      }
      __destroy_into_raw() {
        const B = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), Ft.unregister(this), B;
      }
      free() {
        const B = this.__destroy_into_raw();
        n.__wbg_lorolist_free(B);
      }
      insert(B, g) {
        try {
          const G = n.__wbindgen_add_to_stack_pointer(-16);
          n.lorolist_insert(G, this.__wbg_ptr, B, y(g));
          var I = i()[G / 4 + 0],
            l = i()[G / 4 + 1];
          if (l) throw W(I);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      delete(B, g) {
        try {
          const G = n.__wbindgen_add_to_stack_pointer(-16);
          n.lorolist_delete(G, this.__wbg_ptr, B, g);
          var I = i()[G / 4 + 0],
            l = i()[G / 4 + 1];
          if (l) throw W(I);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      get(B) {
        const g = n.lorolist_get(this.__wbg_ptr, B);
        return W(g);
      }
      get id() {
        const B = n.lorolist_id(this.__wbg_ptr);
        return W(B);
      }
      get value() {
        const B = n.lorolist_value(this.__wbg_ptr);
        return W(B);
      }
      getDeepValue() {
        const B = n.lorolist_getDeepValue(this.__wbg_ptr);
        return W(B);
      }
      insertContainer(B, g) {
        try {
          const c = n.__wbindgen_add_to_stack_pointer(-16),
            e = yA(g, n.__wbindgen_malloc, n.__wbindgen_realloc),
            a = P;
          n.lorolist_insertContainer(c, this.__wbg_ptr, B, e, a);
          var I = i()[c / 4 + 0],
            l = i()[c / 4 + 1],
            G = i()[c / 4 + 2];
          if (G) throw W(l);
          return W(I);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      subscribe(B, g) {
        try {
          const c = n.__wbindgen_add_to_stack_pointer(-16);
          zB(B, uA), n.lorolist_subscribe(c, this.__wbg_ptr, B.__wbg_ptr, y(g));
          var I = i()[c / 4 + 0],
            l = i()[c / 4 + 1],
            G = i()[c / 4 + 2];
          if (G) throw W(l);
          return I >>> 0;
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      unsubscribe(B, g) {
        try {
          const G = n.__wbindgen_add_to_stack_pointer(-16);
          zB(B, uA), n.lorolist_unsubscribe(G, this.__wbg_ptr, B.__wbg_ptr, g);
          var I = i()[G / 4 + 0],
            l = i()[G / 4 + 1];
          if (l) throw W(I);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      get length() {
        return n.lorolist_length(this.__wbg_ptr) >>> 0;
      }
    }
    const Dt = new FinalizationRegistry((A) => n.__wbg_loromap_free(A >>> 0));
    class lg {
      static __wrap(B) {
        B = B >>> 0;
        const g = Object.create(lg.prototype);
        return (g.__wbg_ptr = B), Dt.register(g, g.__wbg_ptr, g), g;
      }
      __destroy_into_raw() {
        const B = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), Dt.unregister(this), B;
      }
      free() {
        const B = this.__destroy_into_raw();
        n.__wbg_loromap_free(B);
      }
      set(B, g) {
        try {
          const G = n.__wbindgen_add_to_stack_pointer(-16),
            c = yA(B, n.__wbindgen_malloc, n.__wbindgen_realloc),
            e = P;
          n.loromap_set(G, this.__wbg_ptr, c, e, y(g));
          var I = i()[G / 4 + 0],
            l = i()[G / 4 + 1];
          if (l) throw W(I);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      delete(B) {
        try {
          const l = n.__wbindgen_add_to_stack_pointer(-16),
            G = yA(B, n.__wbindgen_malloc, n.__wbindgen_realloc),
            c = P;
          n.loromap_delete(l, this.__wbg_ptr, G, c);
          var g = i()[l / 4 + 0],
            I = i()[l / 4 + 1];
          if (I) throw W(g);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      get(B) {
        const g = yA(B, n.__wbindgen_malloc, n.__wbindgen_realloc),
          I = P,
          l = n.loromap_get(this.__wbg_ptr, g, I);
        return W(l);
      }
      get value() {
        const B = n.loromap_value(this.__wbg_ptr);
        return W(B);
      }
      get id() {
        const B = n.loromap_id(this.__wbg_ptr);
        return W(B);
      }
      getDeepValue() {
        const B = n.loromap_getDeepValue(this.__wbg_ptr);
        return W(B);
      }
      setContainer(B, g) {
        try {
          const c = n.__wbindgen_add_to_stack_pointer(-16),
            e = yA(B, n.__wbindgen_malloc, n.__wbindgen_realloc),
            a = P,
            Q = yA(g, n.__wbindgen_malloc, n.__wbindgen_realloc),
            E = P;
          n.loromap_setContainer(c, this.__wbg_ptr, e, a, Q, E);
          var I = i()[c / 4 + 0],
            l = i()[c / 4 + 1],
            G = i()[c / 4 + 2];
          if (G) throw W(l);
          return W(I);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      subscribe(B, g) {
        try {
          const c = n.__wbindgen_add_to_stack_pointer(-16);
          zB(B, uA), n.loromap_subscribe(c, this.__wbg_ptr, B.__wbg_ptr, y(g));
          var I = i()[c / 4 + 0],
            l = i()[c / 4 + 1],
            G = i()[c / 4 + 2];
          if (G) throw W(l);
          return I >>> 0;
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      unsubscribe(B, g) {
        try {
          const G = n.__wbindgen_add_to_stack_pointer(-16);
          zB(B, uA), n.lorolist_unsubscribe(G, this.__wbg_ptr, B.__wbg_ptr, g);
          var I = i()[G / 4 + 0],
            l = i()[G / 4 + 1];
          if (l) throw W(I);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      get size() {
        return n.loromap_size(this.__wbg_ptr) >>> 0;
      }
    }
    const Ht = new FinalizationRegistry((A) => n.__wbg_lorotext_free(A >>> 0));
    class nG {
      static __wrap(B) {
        B = B >>> 0;
        const g = Object.create(nG.prototype);
        return (g.__wbg_ptr = B), Ht.register(g, g.__wbg_ptr, g), g;
      }
      __destroy_into_raw() {
        const B = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), Ht.unregister(this), B;
      }
      free() {
        const B = this.__destroy_into_raw();
        n.__wbg_lorotext_free(B);
      }
      insert(B, g) {
        try {
          const G = n.__wbindgen_add_to_stack_pointer(-16),
            c = yA(g, n.__wbindgen_malloc, n.__wbindgen_realloc),
            e = P;
          n.lorotext_insert(G, this.__wbg_ptr, B, c, e);
          var I = i()[G / 4 + 0],
            l = i()[G / 4 + 1];
          if (l) throw W(I);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      delete(B, g) {
        try {
          const G = n.__wbindgen_add_to_stack_pointer(-16);
          n.lorotext_delete(G, this.__wbg_ptr, B, g);
          var I = i()[G / 4 + 0],
            l = i()[G / 4 + 1];
          if (l) throw W(I);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      mark(B, g, I) {
        try {
          const c = n.__wbindgen_add_to_stack_pointer(-16),
            e = yA(g, n.__wbindgen_malloc, n.__wbindgen_realloc),
            a = P;
          n.lorotext_mark(c, this.__wbg_ptr, y(B), e, a, y(I));
          var l = i()[c / 4 + 0],
            G = i()[c / 4 + 1];
          if (G) throw W(l);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      unmark(B, g) {
        try {
          const G = n.__wbindgen_add_to_stack_pointer(-16),
            c = yA(g, n.__wbindgen_malloc, n.__wbindgen_realloc),
            e = P;
          n.lorotext_unmark(G, this.__wbg_ptr, y(B), c, e);
          var I = i()[G / 4 + 0],
            l = i()[G / 4 + 1];
          if (l) throw W(I);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      toString() {
        let B, g;
        try {
          const G = n.__wbindgen_add_to_stack_pointer(-16);
          n.lorotext_toString(G, this.__wbg_ptr);
          var I = i()[G / 4 + 0],
            l = i()[G / 4 + 1];
          return (B = I), (g = l), CB(I, l);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16), n.__wbindgen_free(B, g);
        }
      }
      toDelta() {
        const B = n.lorotext_toDelta(this.__wbg_ptr);
        return W(B);
      }
      get id() {
        const B = n.lorotext_id(this.__wbg_ptr);
        return W(B);
      }
      get length() {
        return n.lorotext_length(this.__wbg_ptr) >>> 0;
      }
      subscribe(B, g) {
        try {
          const c = n.__wbindgen_add_to_stack_pointer(-16);
          zB(B, uA), n.lorotext_subscribe(c, this.__wbg_ptr, B.__wbg_ptr, y(g));
          var I = i()[c / 4 + 0],
            l = i()[c / 4 + 1],
            G = i()[c / 4 + 2];
          if (G) throw W(l);
          return I >>> 0;
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      unsubscribe(B, g) {
        try {
          const G = n.__wbindgen_add_to_stack_pointer(-16);
          zB(B, uA), n.lorolist_unsubscribe(G, this.__wbg_ptr, B.__wbg_ptr, g);
          var I = i()[G / 4 + 0],
            l = i()[G / 4 + 1];
          if (l) throw W(I);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      applyDelta(B) {
        try {
          const l = n.__wbindgen_add_to_stack_pointer(-16);
          n.lorotext_applyDelta(l, this.__wbg_ptr, y(B));
          var g = i()[l / 4 + 0],
            I = i()[l / 4 + 1];
          if (I) throw W(g);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
    }
    const Xt = new FinalizationRegistry((A) => n.__wbg_lorotree_free(A >>> 0));
    class QG {
      static __wrap(B) {
        B = B >>> 0;
        const g = Object.create(QG.prototype);
        return (g.__wbg_ptr = B), Xt.register(g, g.__wbg_ptr, g), g;
      }
      __destroy_into_raw() {
        const B = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), Xt.unregister(this), B;
      }
      free() {
        const B = this.__destroy_into_raw();
        n.__wbg_lorotree_free(B);
      }
      create(B) {
        try {
          const G = n.__wbindgen_add_to_stack_pointer(-16);
          n.lorotree_create(G, this.__wbg_ptr, Ig(B) ? 0 : y(B));
          var g = i()[G / 4 + 0],
            I = i()[G / 4 + 1],
            l = i()[G / 4 + 2];
          if (l) throw W(I);
          return W(g);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      mov(B, g) {
        try {
          const G = n.__wbindgen_add_to_stack_pointer(-16);
          n.lorotree_mov(G, this.__wbg_ptr, y(B), y(g));
          var I = i()[G / 4 + 0],
            l = i()[G / 4 + 1];
          if (l) throw W(I);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      delete(B) {
        try {
          const l = n.__wbindgen_add_to_stack_pointer(-16);
          n.lorotree_delete(l, this.__wbg_ptr, y(B));
          var g = i()[l / 4 + 0],
            I = i()[l / 4 + 1];
          if (I) throw W(g);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      root(B) {
        try {
          const l = n.__wbindgen_add_to_stack_pointer(-16);
          n.lorotree_root(l, this.__wbg_ptr, y(B));
          var g = i()[l / 4 + 0],
            I = i()[l / 4 + 1];
          if (I) throw W(g);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      getMeta(B) {
        try {
          const G = n.__wbindgen_add_to_stack_pointer(-16);
          n.lorotree_getMeta(G, this.__wbg_ptr, y(B));
          var g = i()[G / 4 + 0],
            I = i()[G / 4 + 1],
            l = i()[G / 4 + 2];
          if (l) throw W(I);
          return lg.__wrap(g);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      get id() {
        const B = n.lorotree_id(this.__wbg_ptr);
        return W(B);
      }
      get value() {
        const B = n.lorotree_value(this.__wbg_ptr);
        return W(B);
      }
      getDeepValue() {
        const B = n.lorotree_getDeepValue(this.__wbg_ptr);
        return W(B);
      }
      get nodes() {
        try {
          const l = n.__wbindgen_add_to_stack_pointer(-16);
          n.lorotree_nodes(l, this.__wbg_ptr);
          var B = i()[l / 4 + 0],
            g = i()[l / 4 + 1],
            I = RI(B, g).slice();
          return n.__wbindgen_free(B, g * 4), I;
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      parent(B) {
        try {
          const G = n.__wbindgen_add_to_stack_pointer(-16);
          n.lorotree_parent(G, this.__wbg_ptr, y(B));
          var g = i()[G / 4 + 0],
            I = i()[G / 4 + 1],
            l = i()[G / 4 + 2];
          if (l) throw W(I);
          return W(g);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      subscribe(B, g) {
        try {
          const c = n.__wbindgen_add_to_stack_pointer(-16);
          zB(B, uA), n.lorotree_subscribe(c, this.__wbg_ptr, B.__wbg_ptr, y(g));
          var I = i()[c / 4 + 0],
            l = i()[c / 4 + 1],
            G = i()[c / 4 + 2];
          if (G) throw W(l);
          return I >>> 0;
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
      unsubscribe(B, g) {
        try {
          const G = n.__wbindgen_add_to_stack_pointer(-16);
          zB(B, uA), n.lorolist_unsubscribe(G, this.__wbg_ptr, B.__wbg_ptr, g);
          var I = i()[G / 4 + 0],
            l = i()[G / 4 + 1];
          if (l) throw W(I);
        } finally {
          n.__wbindgen_add_to_stack_pointer(16);
        }
      }
    }
    new FinalizationRegistry((A) => n.__wbg_prelimlist_free(A >>> 0)),
      new FinalizationRegistry((A) => n.__wbg_prelimmap_free(A >>> 0)),
      new FinalizationRegistry((A) => n.__wbg_prelimtext_free(A >>> 0));
    function Do(A) {
      W(A);
    }
    function Ho(A) {
      const B = p(A);
      return y(B);
    }
    function Xo(A, B) {
      const g = CB(A, B);
      return y(g);
    }
    function Ro(A) {
      const B = BigInt.asUintN(64, A);
      return y(B);
    }
    function So(A, B) {
      return p(A) === p(B);
    }
    function Vo(A, B) {
      const g = p(B),
        I = typeof g == "number" ? g : void 0;
      (Wo()[A / 8 + 1] = Ig(I) ? 0 : I), (i()[A / 4 + 0] = !Ig(I));
    }
    function zo(A) {
      return y(A);
    }
    function vo(A) {
      return typeof p(A) == "string";
    }
    function ko(A, B) {
      const g = p(B),
        I = typeof g == "string" ? g : void 0;
      var l = Ig(I) ? 0 : yA(I, n.__wbindgen_malloc, n.__wbindgen_realloc),
        G = P;
      (i()[A / 4 + 1] = G), (i()[A / 4 + 0] = l);
    }
    function Jo(A) {
      const B = typeof p(A);
      return y(B);
    }
    function Uo(A, B) {
      console.error(CB(A, B));
    }
    function jo(A) {
      const B = nG.__wrap(A);
      return y(B);
    }
    function xo(A) {
      const B = lg.__wrap(A);
      return y(B);
    }
    function Lo(A) {
      const B = Jg.__wrap(A);
      return y(B);
    }
    function fo(A) {
      const B = QG.__wrap(A);
      return y(B);
    }
    function To(A) {
      return p(A) === null;
    }
    function Ko(A) {
      return p(A) === void 0;
    }
    function Oo(A, B) {
      console.log(CB(A, B));
    }
    function Po(A, B) {
      const g = new Error(CB(A, B));
      return y(g);
    }
    function _o(A) {
      const B = p(A);
      return typeof B == "boolean" ? (B ? 1 : 0) : 2;
    }
    function qo(A) {
      return typeof p(A) == "bigint";
    }
    function $o(A) {
      return y(A);
    }
    function AE(A) {
      const B = p(A);
      return typeof B == "object" && B !== null;
    }
    function BE(A, B) {
      return p(A) in p(B);
    }
    function gE(A, B) {
      return p(A) == p(B);
    }
    function IE(A, B) {
      const g = String(p(B)),
        I = yA(g, n.__wbindgen_malloc, n.__wbindgen_realloc),
        l = P;
      (i()[A / 4 + 1] = l), (i()[A / 4 + 0] = I);
    }
    function lE(A, B) {
      const g = p(A)[p(B)];
      return y(g);
    }
    function GE(A, B, g) {
      p(A)[W(B)] = W(g);
    }
    function cE() {
      const A = new Error();
      return y(A);
    }
    function eE(A, B) {
      const g = p(B).stack,
        I = yA(g, n.__wbindgen_malloc, n.__wbindgen_realloc),
        l = P;
      (i()[A / 4 + 1] = l), (i()[A / 4 + 0] = I);
    }
    function aE(A, B) {
      let g, I;
      try {
        (g = A), (I = B), console.error(CB(A, B));
      } finally {
        n.__wbindgen_free(g, I);
      }
    }
    const nE = typeof Date.now == "function" ? Date.now : Fo("Date.now");
    function QE(A) {
      const B = p(A).crypto;
      return y(B);
    }
    function tE(A) {
      const B = p(A).process;
      return y(B);
    }
    function dE(A) {
      const B = p(A).versions;
      return y(B);
    }
    function CE(A) {
      const B = p(A).node;
      return y(B);
    }
    function bE(A) {
      const B = p(A).msCrypto;
      return y(B);
    }
    function oE() {
      return RA(function () {
        const A = CG.require;
        return y(A);
      }, arguments);
    }
    function EE(A) {
      return typeof p(A) == "function";
    }
    function ZE() {
      return RA(function (A, B) {
        p(A).getRandomValues(p(B));
      }, arguments);
    }
    function iE() {
      return RA(function (A, B) {
        p(A).randomFillSync(W(B));
      }, arguments);
    }
    function uE(A, B) {
      const g = p(A)[B >>> 0];
      return y(g);
    }
    function rE(A) {
      return p(A).length;
    }
    function wE() {
      const A = new Array();
      return y(A);
    }
    function sE(A, B) {
      const g = new Function(CB(A, B));
      return y(g);
    }
    function hE() {
      return y(new Map());
    }
    function YE(A) {
      const B = p(A).next;
      return y(B);
    }
    function ME() {
      return RA(function (A) {
        const B = p(A).next();
        return y(B);
      }, arguments);
    }
    function WE(A) {
      return p(A).done;
    }
    function mE(A) {
      const B = p(A).value;
      return y(B);
    }
    function yE() {
      return y(Symbol.iterator);
    }
    function NE() {
      return RA(function (A, B) {
        const g = Reflect.get(p(A), p(B));
        return y(g);
      }, arguments);
    }
    function pE() {
      return RA(function (A, B) {
        const g = p(A).call(p(B));
        return y(g);
      }, arguments);
    }
    function FE() {
      const A = new Object();
      return y(A);
    }
    function DE() {
      return RA(function () {
        const A = self.self;
        return y(A);
      }, arguments);
    }
    function HE() {
      return RA(function () {
        const A = window.window;
        return y(A);
      }, arguments);
    }
    function XE() {
      return RA(function () {
        const A = globalThis.globalThis;
        return y(A);
      }, arguments);
    }
    function RE() {
      return RA(function () {
        const A = global.global;
        return y(A);
      }, arguments);
    }
    function SE(A) {
      const B = new Array(A >>> 0);
      return y(B);
    }
    function VE(A, B, g) {
      p(A)[B >>> 0] = W(g);
    }
    function zE(A) {
      const B = Array.from(p(A));
      return y(B);
    }
    function vE(A) {
      return Array.isArray(p(A));
    }
    function kE(A) {
      let B;
      try {
        B = p(A) instanceof ArrayBuffer;
      } catch {
        B = !1;
      }
      return B;
    }
    function JE() {
      return RA(function (A, B, g) {
        const I = p(A).call(p(B), p(g));
        return y(I);
      }, arguments);
    }
    function UE(A, B, g) {
      const I = p(A).set(p(B), p(g));
      return y(I);
    }
    function jE(A) {
      const B = p(A).entries();
      return y(B);
    }
    function xE(A) {
      return Number.isSafeInteger(p(A));
    }
    function LE(A) {
      const B = Object.entries(p(A));
      return y(B);
    }
    function fE(A) {
      const B = p(A).buffer;
      return y(B);
    }
    function TE(A, B, g) {
      const I = new Uint8Array(p(A), B >>> 0, g >>> 0);
      return y(I);
    }
    function KE(A) {
      const B = new Uint8Array(p(A));
      return y(B);
    }
    function OE(A, B, g) {
      p(A).set(p(B), g >>> 0);
    }
    function PE(A) {
      return p(A).length;
    }
    function _E(A) {
      let B;
      try {
        B = p(A) instanceof Uint8Array;
      } catch {
        B = !1;
      }
      return B;
    }
    function qE(A) {
      const B = new Uint8Array(A >>> 0);
      return y(B);
    }
    function $E(A, B, g) {
      const I = p(A).subarray(B >>> 0, g >>> 0);
      return y(I);
    }
    function AZ(A, B, g) {
      p(A)[B >>> 0] = g;
    }
    function BZ() {
      return RA(function (A) {
        const B = Reflect.ownKeys(p(A));
        return y(B);
      }, arguments);
    }
    function gZ() {
      return RA(function (A, B, g) {
        return Reflect.set(p(A), p(B), p(g));
      }, arguments);
    }
    function IZ(A, B) {
      const g = p(B),
        I = typeof g == "bigint" ? g : void 0;
      (No()[A / 8 + 1] = Ig(I) ? BigInt(0) : I), (i()[A / 4 + 0] = !Ig(I));
    }
    function lZ(A, B) {
      const g = De(p(B)),
        I = yA(g, n.__wbindgen_malloc, n.__wbindgen_realloc),
        l = P;
      (i()[A / 4 + 1] = l), (i()[A / 4 + 0] = I);
    }
    function GZ(A, B) {
      throw new Error(CB(A, B));
    }
    function cZ() {
      const A = n.memory;
      return y(A);
    }
    URL = globalThis.URL;
    const h = await so(
        {
          "./loro_wasm_bg.js": {
            __wbindgen_object_drop_ref: Do,
            __wbindgen_object_clone_ref: Ho,
            __wbindgen_string_new: Xo,
            __wbindgen_bigint_from_u64: Ro,
            __wbindgen_jsval_eq: So,
            __wbindgen_number_get: Vo,
            __wbindgen_number_new: zo,
            __wbindgen_is_string: vo,
            __wbindgen_string_get: ko,
            __wbindgen_typeof: Jo,
            __wbg_error_c8c2cca30a630316: Uo,
            __wbg_lorotext_new: jo,
            __wbg_loromap_new: xo,
            __wbg_lorolist_new: Lo,
            __wbg_lorotree_new: fo,
            __wbindgen_is_null: To,
            __wbindgen_is_undefined: Ko,
            __wbg_log_d8fdbde28117925d: Oo,
            __wbindgen_error_new: Po,
            __wbindgen_boolean_get: _o,
            __wbindgen_is_bigint: qo,
            __wbindgen_bigint_from_i64: $o,
            __wbindgen_is_object: AE,
            __wbindgen_in: BE,
            __wbindgen_jsval_loose_eq: gE,
            __wbg_String_88810dfeb4021902: IE,
            __wbg_getwithrefkey_5e6d9547403deab8: lE,
            __wbg_set_841ac57cff3d672b: GE,
            __wbg_new_abda76e883ba8a5f: cE,
            __wbg_stack_658279fe44541cf6: eE,
            __wbg_error_f851667af71bcfc6: aE,
            __wbg_now_db22aab4774ab135: nE,
            __wbg_crypto_c48a774b022d20ac: QE,
            __wbg_process_298734cf255a885d: tE,
            __wbg_versions_e2e78e134e3e5d01: dE,
            __wbg_node_1cd7a5d853dbea79: CE,
            __wbg_msCrypto_bcb970640f50a1e8: bE,
            __wbg_require_8f08ceecec0f4fee: oE,
            __wbindgen_is_function: EE,
            __wbg_getRandomValues_37fa2ca9e4e07fab: ZE,
            __wbg_randomFillSync_dc1e9a60c158336d: iE,
            __wbg_get_7303ed2ef026b2f5: uE,
            __wbg_length_820c786973abdd8a: rE,
            __wbg_new_0394642eae39db16: wE,
            __wbg_newnoargs_c9e6043b8ad84109: sE,
            __wbg_new_0f2b71ca2f2a6029: hE,
            __wbg_next_f4bc0e96ea67da68: YE,
            __wbg_next_ec061e48a0e72a96: ME,
            __wbg_done_b6abb27d42b63867: WE,
            __wbg_value_2f4ef2036bfad28e: mE,
            __wbg_iterator_7c7e58f62eb84700: yE,
            __wbg_get_f53c921291c381bd: NE,
            __wbg_call_557a2f2deacc4912: pE,
            __wbg_new_2b6fea4ea03b1b95: FE,
            __wbg_self_742dd6eab3e9211e: DE,
            __wbg_window_c409e731db53a0e2: HE,
            __wbg_globalThis_b70c095388441f2d: XE,
            __wbg_global_1c72617491ed7194: RE,
            __wbg_newwithlength_cd1db47a173e3944: SE,
            __wbg_set_b4da98d504ac6091: VE,
            __wbg_from_6bc98a09a0b58bb1: zE,
            __wbg_isArray_04e59fb73f78ab5b: vE,
            __wbg_instanceof_ArrayBuffer_ef2632aa0d4bfff8: kE,
            __wbg_call_587b30eea3e09332: JE,
            __wbg_set_da7be7bf0e037b14: UE,
            __wbg_entries_039ff76b77e573c1: jE,
            __wbg_isSafeInteger_2088b01008075470: xE,
            __wbg_entries_13e011453776468f: LE,
            __wbg_buffer_55ba7a6b1b92e2ac: fE,
            __wbg_newwithbyteoffsetandlength_88d1d8be5df94b9b: TE,
            __wbg_new_09938a7d020f049b: KE,
            __wbg_set_3698e3ca519b3c3c: OE,
            __wbg_length_0aab7ffd65ad19ed: PE,
            __wbg_instanceof_Uint8Array_1349640af2da2e88: _E,
            __wbg_newwithlength_89eeca401d8918c2: qE,
            __wbg_subarray_d82be056deb4ad27: $E,
            __wbg_setindex_f47cfb913f6e49c8: AZ,
            __wbg_ownKeys_16ca303f7a5c24f3: BZ,
            __wbg_set_07da13cc24b69217: gZ,
            __wbindgen_bigint_get_as_i64: IZ,
            __wbindgen_debug_string: lZ,
            __wbindgen_throw: GZ,
            __wbindgen_memory: cZ,
          },
        },
        wo
      ),
      eZ = h.memory,
      aZ = h.setDebug,
      nZ = h.__wbg_loro_free,
      QZ = h.loro_new,
      tZ = h.loro_fromSnapshot,
      dZ = h.loro_attach,
      CZ = h.loro_is_detached,
      bZ = h.loro_checkoutToLatest,
      oZ = h.loro_checkout,
      EZ = h.loro_peerId,
      ZZ = h.loro_peerIdStr,
      iZ = h.loro_setPeerId,
      uZ = h.loro_commit,
      rZ = h.loro_getText,
      wZ = h.loro_getMap,
      sZ = h.loro_getList,
      hZ = h.loro_getTree,
      YZ = h.loro_getContainerById,
      MZ = h.loro_version,
      WZ = h.loro_oplogVersion,
      mZ = h.loro_frontiers,
      yZ = h.loro_oplog_frontiers,
      NZ = h.loro_cmpFrontiers,
      pZ = h.loro_exportSnapshot,
      FZ = h.loro_exportFrom,
      DZ = h.loro_import,
      HZ = h.loro_importUpdateBatch,
      XZ = h.loro_toJson,
      RZ = h.loro_subscribe,
      SZ = h.loro_unsubscribe,
      VZ = h.loro_debugHistory,
      zZ = h.loro_getAllChanges,
      vZ = h.loro_getChangeAt,
      kZ = h.loro_getOpsInChange,
      JZ = h.loro_frontiersToVV,
      UZ = h.loro_vvToFrontiers,
      jZ = h.loro_getDeepValue,
      xZ = h.lorotext_insert,
      LZ = h.lorotext_delete,
      fZ = h.lorotext_mark,
      TZ = h.lorotext_unmark,
      KZ = h.lorotext_toString,
      OZ = h.lorotext_toDelta,
      PZ = h.lorotext_id,
      _Z = h.lorotext_length,
      qZ = h.lorotext_subscribe,
      $Z = h.lorotext_applyDelta,
      Ai = h.loromap_set,
      Bi = h.loromap_delete,
      gi = h.loromap_get,
      Ii = h.loromap_value,
      li = h.loromap_id,
      Gi = h.loromap_getDeepValue,
      ci = h.loromap_setContainer,
      ei = h.loromap_subscribe,
      ai = h.loromap_size,
      ni = h.__wbg_lorolist_free,
      Qi = h.lorolist_insert,
      ti = h.lorolist_delete,
      di = h.lorolist_get,
      Ci = h.lorolist_id,
      bi = h.lorolist_value,
      oi = h.lorolist_getDeepValue,
      Ei = h.lorolist_insertContainer,
      Zi = h.lorolist_subscribe,
      ii = h.lorolist_unsubscribe,
      ui = h.lorolist_length,
      ri = h.lorotree_create,
      wi = h.lorotree_mov,
      si = h.lorotree_delete,
      hi = h.lorotree_root,
      Yi = h.lorotree_getMeta,
      Mi = h.lorotree_id,
      Wi = h.lorotree_value,
      mi = h.lorotree_getDeepValue,
      yi = h.lorotree_nodes,
      Ni = h.lorotree_parent,
      pi = h.lorotree_subscribe,
      Fi = h.toReadableVersion,
      Di = h.toEncodedVersion,
      Hi = h.__wbg_lorotext_free,
      Xi = h.__wbg_loromap_free,
      Ri = h.__wbg_lorotree_free,
      Si = h.setPanicHook,
      Vi = h.lorotext_unsubscribe,
      zi = h.loromap_unsubscribe,
      vi = h.lorotree_unsubscribe,
      ki = h.__wbg_prelimtext_free,
      Ji = h.prelimtext_new,
      Ui = h.prelimtext_insert,
      ji = h.prelimtext_delete,
      xi = h.prelimtext_value,
      Li = h.__wbg_prelimlist_free,
      fi = h.prelimlist_new,
      Ti = h.prelimlist_insert,
      Ki = h.prelimlist_delete,
      Oi = h.prelimlist_value,
      Pi = h.__wbg_prelimmap_free,
      _i = h.prelimmap_new,
      qi = h.prelimmap_set,
      $i = h.prelimmap_delete,
      Au = h.prelimmap_get,
      Bu = h.prelimmap_value,
      gu = h.__wbindgen_malloc,
      Iu = h.__wbindgen_realloc,
      lu = h.__wbindgen_add_to_stack_pointer,
      Gu = h.__wbindgen_free,
      cu = h.__wbindgen_exn_store,
      eu = Object.freeze(
        Object.defineProperty(
          {
            __proto__: null,
            __wbg_loro_free: nZ,
            __wbg_lorolist_free: ni,
            __wbg_loromap_free: Xi,
            __wbg_lorotext_free: Hi,
            __wbg_lorotree_free: Ri,
            __wbg_prelimlist_free: Li,
            __wbg_prelimmap_free: Pi,
            __wbg_prelimtext_free: ki,
            __wbindgen_add_to_stack_pointer: lu,
            __wbindgen_exn_store: cu,
            __wbindgen_free: Gu,
            __wbindgen_malloc: gu,
            __wbindgen_realloc: Iu,
            loro_attach: dZ,
            loro_checkout: oZ,
            loro_checkoutToLatest: bZ,
            loro_cmpFrontiers: NZ,
            loro_commit: uZ,
            loro_debugHistory: VZ,
            loro_exportFrom: FZ,
            loro_exportSnapshot: pZ,
            loro_fromSnapshot: tZ,
            loro_frontiers: mZ,
            loro_frontiersToVV: JZ,
            loro_getAllChanges: zZ,
            loro_getChangeAt: vZ,
            loro_getContainerById: YZ,
            loro_getDeepValue: jZ,
            loro_getList: sZ,
            loro_getMap: wZ,
            loro_getOpsInChange: kZ,
            loro_getText: rZ,
            loro_getTree: hZ,
            loro_import: DZ,
            loro_importUpdateBatch: HZ,
            loro_is_detached: CZ,
            loro_new: QZ,
            loro_oplogVersion: WZ,
            loro_oplog_frontiers: yZ,
            loro_peerId: EZ,
            loro_peerIdStr: ZZ,
            loro_setPeerId: iZ,
            loro_subscribe: RZ,
            loro_toJson: XZ,
            loro_unsubscribe: SZ,
            loro_version: MZ,
            loro_vvToFrontiers: UZ,
            lorolist_delete: ti,
            lorolist_get: di,
            lorolist_getDeepValue: oi,
            lorolist_id: Ci,
            lorolist_insert: Qi,
            lorolist_insertContainer: Ei,
            lorolist_length: ui,
            lorolist_subscribe: Zi,
            lorolist_unsubscribe: ii,
            lorolist_value: bi,
            loromap_delete: Bi,
            loromap_get: gi,
            loromap_getDeepValue: Gi,
            loromap_id: li,
            loromap_set: Ai,
            loromap_setContainer: ci,
            loromap_size: ai,
            loromap_subscribe: ei,
            loromap_unsubscribe: zi,
            loromap_value: Ii,
            lorotext_applyDelta: $Z,
            lorotext_delete: LZ,
            lorotext_id: PZ,
            lorotext_insert: xZ,
            lorotext_length: _Z,
            lorotext_mark: fZ,
            lorotext_subscribe: qZ,
            lorotext_toDelta: OZ,
            lorotext_toString: KZ,
            lorotext_unmark: TZ,
            lorotext_unsubscribe: Vi,
            lorotree_create: ri,
            lorotree_delete: si,
            lorotree_getDeepValue: mi,
            lorotree_getMeta: Yi,
            lorotree_id: Mi,
            lorotree_mov: wi,
            lorotree_nodes: yi,
            lorotree_parent: Ni,
            lorotree_root: hi,
            lorotree_subscribe: pi,
            lorotree_unsubscribe: vi,
            lorotree_value: Wi,
            memory: eZ,
            prelimlist_delete: Ki,
            prelimlist_insert: Ti,
            prelimlist_new: fi,
            prelimlist_value: Oi,
            prelimmap_delete: $i,
            prelimmap_get: Au,
            prelimmap_new: _i,
            prelimmap_set: qi,
            prelimmap_value: Bu,
            prelimtext_delete: ji,
            prelimtext_insert: Ui,
            prelimtext_new: Ji,
            prelimtext_value: xi,
            setDebug: aZ,
            setPanicHook: Si,
            toEncodedVersion: Di,
            toReadableVersion: Fi,
          },
          Symbol.toStringTag,
          { value: "Module" }
        )
      );
    ho(eu),
      (uA.prototype.getTypedMap = function (...A) {
        return this.getMap(...A);
      }),
      (uA.prototype.getTypedList = function (...A) {
        return this.getList(...A);
      }),
      (Jg.prototype.getTyped = function (A, B) {
        const g = this.get(B);
        return typeof g == "string" && Rt(g) ? A.getContainerById(g) : g;
      }),
      (Jg.prototype.insertTyped = function (...A) {
        return this.insert(...A);
      }),
      (lg.prototype.getTyped = function (A, B) {
        const g = this.get(B);
        return typeof g == "string" && Rt(g) ? A.getContainerById(g) : g;
      }),
      (lg.prototype.setTyped = function (...A) {
        return this.set(...A);
      });
    function Rt(A) {
      return A.startsWith("cid:");
    }
    function au(A, B, g) {
      var I = g || {},
        l = I.noTrailing,
        G = l === void 0 ? !1 : l,
        c = I.noLeading,
        e = c === void 0 ? !1 : c,
        a = I.debounceMode,
        Q = a === void 0 ? void 0 : a,
        E,
        b = !1,
        o = 0;
      function u() {
        E && clearTimeout(E);
      }
      function r(H) {
        var d = H || {},
          t = d.upcomingOnly,
          C = t === void 0 ? !1 : t;
        u(), (b = !C);
      }
      function s() {
        for (var H = arguments.length, d = new Array(H), t = 0; t < H; t++)
          d[t] = arguments[t];
        var C = this,
          w = Date.now() - o;
        if (b) return;
        function M() {
          (o = Date.now()), B.apply(C, d);
        }
        function N() {
          E = void 0;
        }
        !e && Q && !E && M(),
          u(),
          Q === void 0 && w > A
            ? e
              ? ((o = Date.now()), G || (E = setTimeout(Q ? N : M, A)))
              : M()
            : G !== !0 && (E = setTimeout(Q ? N : M, Q === void 0 ? A - w : A));
      }
      return (s.cancel = r), s;
    }
    function nu(A) {
      const B = window.atob(A),
        g = B.length,
        I = new Uint8Array(g);
      for (let l = 0; l < g; l++) I[l] = B.charCodeAt(l);
      return I;
    }
    po();
    function Qu() {
      const [A, B] = Z.useState(0),
        g = Z.useRef(""),
        I = Z.useRef(null),
        [l, G] = Z.useState(-1),
        [c, e] = Z.useState(0),
        a = Z.useRef(new uA()),
        Q = Z.useRef(),
        E = Z.useRef(!1);
      return (
        Z.useEffect(() => {
          if (E.current) return;
          E.current = !0;
          const b = nu(ro);
          a.current.import(b),
            (Q.current = a.current.frontiers()[0]),
            e(Q.current.counter),
            a.current.checkout([]),
            (g.current = "");
        }, []),
        wA.jsx("div", {
          style: { width: "calc(100% - 32)", padding: 16 },
          ref: I,
          children: wA.jsxs(Ct, {
            style: { fontFamily: "monospace" },
            children: [
              wA.jsx(Wt, {
                value: [l],
                max: c,
                min: -1,
                onValueChange: Z.useCallback((b) => {
                  const o = au(100, (u) => {
                    var s;
                    const r = performance.now();
                    u === -1
                      ? a.current.checkout([])
                      : a.current.checkout([
                          {
                            peer:
                              ((s = Q.current) == null ? void 0 : s.peer) ?? 0n,
                            counter: u,
                          },
                        ]),
                      B(performance.now() - r),
                      (g.current = a.current.getText("text").toString());
                  });
                  G(b[0]), o(b[0]);
                }, []),
              }),
              wA.jsxs("div", {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 8,
                },
                children: [
                  wA.jsxs("span", {
                    style: {},
                    children: ["Current Version ", l],
                  }),
                  " ",
                  wA.jsxs("span", { style: {}, children: ["Max Version ", c] }),
                ],
              }),
              wA.jsxs("div", {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  fontFamily: "monospace",
                },
                children: [
                  wA.jsxs("span", {
                    style: { marginRight: "2em" },
                    children: ["Checkout duration: ", A.toFixed(2), " ms"],
                  }),
                  wA.jsxs("span", {
                    children: ["Text length: ", g.current.length],
                  }),
                ],
              }),
              wA.jsxs("div", {
                style: {
                  position: "relative",
                  marginTop: 8,
                  transform: "scale(1.075)",
                  transformOrigin: "0 0",
                },
                children: [
                  wA.jsx("div", {
                    style: {
                      width: "100%",
                      whiteSpace: "pre-wrap",
                      transform: "scale(0.8)",
                      transformOrigin: "0 0",
                      position: "absolute",
                      top: 0,
                      left: 0,
                    },
                    children: g.current,
                  }),
                  wA.jsx("div", {
                    style: {
                      width: "100%",
                      whiteSpace: "pre-wrap",
                      transform: "scale(0.1) translateX(800%)",
                      transformOrigin: "0 0",
                      position: "absolute",
                      top: 0,
                      left: 0,
                    },
                    children: g.current,
                  }),
                  wA.jsx("div", {
                    style: {
                      width: "100%",
                      whiteSpace: "pre-wrap",
                      transform: "scale(0.025) translateX(3600%)",
                      transformOrigin: "0 0",
                      position: "absolute",
                      top: 0,
                      left: 0,
                    },
                    children: g.current,
                  }),
                ],
              }),
            ],
          }),
        })
      );
    }
    uG.createRoot(document.getElementById("root")).render(wA.jsx(Qu, {}));
  })();
});
export default du();
