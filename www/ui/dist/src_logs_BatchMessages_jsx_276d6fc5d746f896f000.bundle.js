"use strict";
(self["webpackChunkcdata_arc"] = self["webpackChunkcdata_arc"] || []).push([["src_logs_BatchMessages_jsx"],{

/***/ 44595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ esm_Breadcrumb)
});

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(46942);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/ThemeProvider.js
var ThemeProvider = __webpack_require__(36519);
// EXTERNAL MODULE: ./node_modules/@restart/ui/esm/Anchor.js + 8 modules
var Anchor = __webpack_require__(2571);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/BreadcrumbItem.js





const BreadcrumbItem = /*#__PURE__*/react.forwardRef(({
  bsPrefix,
  active = false,
  children,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'li',
  linkAs: LinkComponent = Anchor/* default */.A,
  linkProps = {},
  href,
  title,
  target,
  ...props
}, ref) => {
  const prefix = (0,ThemeProvider/* useBootstrapPrefix */.oU)(bsPrefix, 'breadcrumb-item');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
    ref: ref,
    ...props,
    className: classnames_default()(prefix, className, {
      active
    }),
    "aria-current": active ? 'page' : undefined,
    children: active ? children : /*#__PURE__*/(0,jsx_runtime.jsx)(LinkComponent, {
      ...linkProps,
      href: href,
      title: title,
      target: target,
      children: children
    })
  });
});
BreadcrumbItem.displayName = 'BreadcrumbItem';
/* harmony default export */ const esm_BreadcrumbItem = (BreadcrumbItem);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Breadcrumb.js





const Breadcrumb = /*#__PURE__*/react.forwardRef(({
  bsPrefix,
  className,
  listProps = {},
  children,
  label = 'breadcrumb',
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'nav',
  ...props
}, ref) => {
  const prefix = (0,ThemeProvider/* useBootstrapPrefix */.oU)(bsPrefix, 'breadcrumb');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
    "aria-label": label,
    className: className,
    ref: ref,
    ...props,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("ol", {
      ...listProps,
      className: classnames_default()(prefix, listProps == null ? void 0 : listProps.className),
      children: children
    })
  });
});
Breadcrumb.displayName = 'Breadcrumb';
/* harmony default export */ const esm_Breadcrumb = (Object.assign(Breadcrumb, {
  Item: esm_BreadcrumbItem
}));

/***/ }),

/***/ 60208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44595);


function MessageViewNav(_ref) {
  var items = _ref.items,
    className = _ref.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    className: className
  }, items.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.Item, {
      key: index,
      href: item.href,
      active: index == items.length - 1
    }, item.name);
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessageViewNav);

/***/ }),

/***/ 17088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BatchMessages)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _react_shared_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29029);
/* harmony import */ var _TransactionLogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97320);
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25337);
/* harmony import */ var _components_message_view_MessageViewNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60208);
/* harmony import */ var _components_alert_DismissibleAlert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95631);
/* harmony import */ var _components_message_view_DetailCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29272);
/* harmony import */ var _components_message_view_DetailCardPlaceholder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16517);
/* harmony import */ var _components_message_view_MessageInfoCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49106);
/* harmony import */ var _components_message_view_Utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(33566);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(98313);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }












function BatchMessages(_ref) {
  var _window$rsb$connector, _window, _connectorList$worksp;
  var workspaceId = _ref.workspaceId,
    connectorId = _ref.connectorId,
    messageId = _ref.messageId,
    direction = _ref.direction,
    isLog = _ref.isLog;
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    loading = _React$useState2[0],
    setLoading = _React$useState2[1];
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    error = _React$useState4[0],
    setError = _React$useState4[1];
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0__.useState([]),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    data = _React$useState6[0],
    setData = _React$useState6[1];
  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_0__.useState({
      trackedHeaders: [],
      otherHeaders: [],
      messageAlert: null
    }),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    headers = _React$useState8[0],
    setHeaders = _React$useState8[1];
  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_0__.useState(direction),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    directionTableInput = _React$useState10[0],
    setDirection = _React$useState10[1];
  var connectorList = (_window$rsb$connector = (_window = window) === null || _window === void 0 || (_window = _window.rsb) === null || _window === void 0 ? void 0 : _window.connectorList) !== null && _window$rsb$connector !== void 0 ? _window$rsb$connector : {};
  var columns = [{
    id: "timestamp",
    header: "Date/Time",
    accessorKey: "timestamp",
    headerClassName: "hidden-xs d-none d-lg-table-cell",
    className: "hidden-xs d-none d-lg-table-cell",
    size: 160,
    cell: function cell(props) {
      return _components_utils__WEBPACK_IMPORTED_MODULE_3__/* .FormatTimestamp */ .W9(props.getValue());
    }
  }, {
    id: "filename",
    header: "File Name",
    accessorKey: "filename"
  }, {
    id: "filesize",
    header: "File Size",
    accessorKey: "filesize",
    headerClassName: "hidden-xs d-none d-lg-table-cell",
    className: "hidden-xs d-none d-lg-table-cell",
    size: 90,
    cell: function cell(props) {
      return _components_utils__WEBPACK_IMPORTED_MODULE_3__/* .FormatFileSize */ .XH(parseInt(props.getValue()));
    }
  }, {
    id: "processingtime",
    header: "Processing Time",
    accessorKey: "processingtime",
    headerClassName: "hidden-xs d-none d-lg-table-cell",
    className: "hidden-xs d-none d-lg-table-cell",
    size: 140,
    cell: function cell(props) {
      return props.getValue() ? _components_utils__WEBPACK_IMPORTED_MODULE_3__/* .FormatProcessingTime */ ._c(parseInt(props.getValue())) : "";
    }
  }, {
    id: "status",
    header: "Status",
    accessorKey: "status",
    size: 180,
    cell: function cell(props) {
      var _props$row$original;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, _components_utils__WEBPACK_IMPORTED_MODULE_3__/* .FormatStatus */ .gn(props.getValue()), (_props$row$original = props.row.original) !== null && _props$row$original !== void 0 && _props$row$original.failedcount && parseInt(props.row.original.failedcount) > 0 ? " (" + "Attempts:" + " " + props.row.original.failedcount + ")" : "", props.getValue().toLowerCase() == "unsent" ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "status-details me-2",
        href: (0,_Utils__WEBPACK_IMPORTED_MODULE_9__/* .BuildMessageDetailLink */ .fe)(props.row.original.workspace, props.row.original.connectorid, props.row.original.direction, props.row.original.messageid, messageId)
      }, "View Details"));
    }
  }];

  /* data */
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    var loadData = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var url, response, errorMsg, result, _headers, _ParseHeaders, trackedHeaders, otherHeaders, lastStatus, lastStatusDesc, messageInfo;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              url = isLog ? "api/transactions.rsd" : "api/files.rsd";
              _context.next = 4;
              return _react_shared_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.get(url, {
                params: {
                  "@json": true,
                  "$filter": "WorkspaceId eq '" + workspaceId + "' and connectorId eq '" + connectorId + "'" + (isLog ? " and MessageId eq '" + messageId + "'" : ""),
                  "$orderby": "direction asc, Timestamp desc",
                  "$top": 1,
                  "IncludeHeaders": true
                }
              });
            case 4:
              response = _context.sent;
              errorMsg = _components_utils__WEBPACK_IMPORTED_MODULE_3__/* .getResultErrorMessage */ .hz(response.data.items);
              if (errorMsg != null) {
                setError(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_alert_DismissibleAlert__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
                  type: "error",
                  message: errorMsg
                }));
              } else if (response.data.items == null || response.data.items[0] == null) {
                setError(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_alert_DismissibleAlert__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
                  type: "error",
                  message: "No message is found."
                }));
              } else {
                result = response.data.items[0];
                _headers = (0,_components_message_view_Utils__WEBPACK_IMPORTED_MODULE_10__/* .GetHeadersFromTransactionLog */ .F)(result);
                _ParseHeaders = (0,_components_message_view_Utils__WEBPACK_IMPORTED_MODULE_10__/* .ParseHeaders */ .e)(_headers), trackedHeaders = _ParseHeaders.trackedHeaders, otherHeaders = _ParseHeaders.otherHeaders, lastStatus = _ParseHeaders.lastStatus, lastStatusDesc = _ParseHeaders.lastStatusDesc;
                setHeaders({
                  trackedHeaders: trackedHeaders,
                  otherHeaders: otherHeaders,
                  messageAlert: (lastStatus === null || lastStatus === void 0 ? void 0 : lastStatus.toLowerCase()) == "failed" ? {
                    variant: "error",
                    message: lastStatusDesc
                  } : (lastStatus === null || lastStatus === void 0 ? void 0 : lastStatus.toLowerCase()) === "success" && lastStatusDesc ? {
                    variant: "warning",
                    message: lastStatusDesc
                  } : null
                });
                setDirection(result.direction ? result.direction : direction);
                messageInfo = [{
                  name: "Date and Time:",
                  value: _components_utils__WEBPACK_IMPORTED_MODULE_3__/* .FormatTimestamp */ .W9(isLog ? result.timestamp : result.timecreated)
                }, {
                  name: "Total Processing Time:",
                  value: _components_utils__WEBPACK_IMPORTED_MODULE_3__/* .FormatProcessingTime */ ._c(result.processingtime)
                }, {
                  name: "Instance Id:",
                  value: result.instanceid
                }, {
                  name: "Status:",
                  value: _components_utils__WEBPACK_IMPORTED_MODULE_3__/* .FormatStatus */ .gn(result.status),
                  column: 1
                }, {
                  name: "Total Size:",
                  value: _components_utils__WEBPACK_IMPORTED_MODULE_3__/* .FormatFileSize */ .XH(result.filesize),
                  column: 1
                }];
                if (!isLog) {
                  messageInfo.splice(1, 2);
                }
                setData(messageInfo);
              }
            case 7:
              _context.prev = 7;
              setLoading(false);
              return _context.finish(7);
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0,, 7, 10]]);
      }));
      return function loadData() {
        return _ref2.apply(this, arguments);
      };
    }();
    loadData();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_message_view_MessageViewNav__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    className: "mt-2",
    items: [{
      name: "Activity",
      href: "activity.rst"
    }, {
      name: messageId + " " + "Details",
      href: "activity.rst?messageId=" + encodeURIComponent(messageId)
    }, {
      name: "Batch Messages Processed By" + " " + workspaceId + ":" + connectorId,
      href: null
    }]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Batch Messages"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "detail-name"
  }, "Associated to:", "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "activity.rst?messageId=" + encodeURIComponent(messageId)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "far fa-table"
  }), "\xA0", "Batch Group:" + " " + messageId)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "detail-name"
  }, "Processed by:", "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "app-icon app-icon-" + ((_connectorList$worksp = connectorList[workspaceId.toLowerCase()]) === null || _connectorList$worksp === void 0 || (_connectorList$worksp = _connectorList$worksp.connectors[connectorId.toLowerCase()]) === null || _connectorList$worksp === void 0 || (_connectorList$worksp = _connectorList$worksp.type.toLowerCase()) === null || _connectorList$worksp === void 0 ? void 0 : _connectorList$worksp.replace(/^cdata(.+)$/, "$1")),
    style: {
      width: "22px",
      height: "22px"
    }
  }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "flows.rst#" + encodeURIComponent(workspaceId) + "|" + encodeURIComponent(connectorId) + "|settings",
    rel: "noreferrer"
  }, connectorId)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Message Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
    className: "mt-0"
  }), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_message_view_DetailCardPlaceholder__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    rows: [3, 2]
  }) : error != null ? error : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_message_view_DetailCard__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    data: data
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Headers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
    className: "mt-0"
  }), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_message_view_DetailCardPlaceholder__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    rows: [1, 1]
  }) : error != null ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "message-detail-card tab-pane"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_message_view_MessageInfoCard__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    trackedHeaders: headers.trackedHeaders,
    otherHeaders: headers.otherHeaders,
    messageAlert: headers.messageAlert
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Messages"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
    className: "mt-0"
  }), loading ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TransactionLogs__WEBPACK_IMPORTED_MODULE_2__/* .TransactionLogs */ .G, {
    tableURL: "src/getBatchInfo.rsd",
    tableURLParams: {
      workspaceId: workspaceId,
      connectorId: connectorId,
      batchgroupid: messageId,
      direction: directionTableInput,
      isLog: isLog
    },
    page: "BatchMessages",
    workspaceId: workspaceId,
    connectorId: connectorId,
    direction: directionTableInput,
    columnsInput: columns
  }));
}

/***/ })

}]);