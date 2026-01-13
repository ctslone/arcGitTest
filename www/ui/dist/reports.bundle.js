"use strict";
(self["webpackChunkcdata_arc"] = self["webpackChunkcdata_arc"] || []).push([["reports"],{

/***/ 29029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71083);

axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.interceptors.response.clear();
axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.interceptors.response.use(function (response) {
  var headers = response.headers.toJSON() || {};
  if (headers["x-cdata-login"] === "true" || headers["x-cdata-unauth"] === "true") {
    window.top.location.reload();
  }
  return response;
}, function (error) {
  var _error$response, _error$config, _error$config2, _error$response2, _error$response3;
  if ((error === null || error === void 0 ? void 0 : error.status) === 412 && error !== null && error !== void 0 && (_error$response = error.response) !== null && _error$response !== void 0 && (_error$response = _error$response.headers) !== null && _error$response !== void 0 && _error$response["last-modified"]) return error.response; // The resource is modified by another user.
  if ((error === null || error === void 0 || (_error$config = error.config) === null || _error$config === void 0 ? void 0 : _error$config.url) === "src/setAppLogs.rsb") return; // Avoid endless loop
  !axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.isCancel(error) && axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post("src/setAppLogs.rsb", {
    type: "Error",
    script: (error === null || error === void 0 || (_error$config2 = error.config) === null || _error$config2 === void 0 ? void 0 : _error$config2.url) || "AxiosError: " + ((error === null || error === void 0 || (_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : _error$response2.status) || (error === null || error === void 0 ? void 0 : error.code) || "Unknown"),
    message: (error === null || error === void 0 ? void 0 : error.message) || (error === null || error === void 0 ? void 0 : error.stack) || (error === null || error === void 0 || (_error$response3 = error.response) === null || _error$response3 === void 0 ? void 0 : _error$response3.statusText) || "Unknown",
    timestamp: new Date().toUTCString()
  }, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    validateStatus: function validateStatus() {
      return true;
    }
  })["catch"](function (error) {
    return Promise.reject(error);
  });
  return Promise.reject(error);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A);

/***/ }),

/***/ 20289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ArcSuspense)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);

function ArcSuspense(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "spinner-grow spinner-grow-sm text-secondary me-2",
      role: "status"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "visually-hidden"
    }, "Loading...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "spinner-grow spinner-grow-sm text-secondary me-2",
      role: "status"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "visually-hidden"
    }, "Loading...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "spinner-grow spinner-grow-sm text-secondary me-2",
      role: "status"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "visually-hidden"
    }, "Loading...")))
  }, props.children);
}

/***/ }),

/***/ 57491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ArcTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tanstack_react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1530);
/* harmony import */ var _tanstack_react_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33888);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25337);
/* harmony import */ var _react_shared_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29029);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }







var tablePropsTypes = {
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  /**
   * If true, the table will striped.
   */
  striped: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  /**
   * If true, the table will enable a hover state on table rows within body.
   */
  hover: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
};
var tableRowPropsTypes = {
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  /**
   * parameters: 
   *   e: the event.
   *   row: the current row props.
   */
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)
};
var propsTypes = {
  /**
   * Table column definations. 
   * 
   * Options can be found in https://tanstack.com/table/v8/docs/api/core/column-def.
   */
  columns: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)),
  /**
   * The sorting parameters that are used in the first loading.
   * 
   * Example: [{id: "timestamp", desc: true}, {id: "name", desc: false}]
   */
  initialSorting: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)),
  /**
   * The resource URL.
   */
  url: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  /**
   * The resource URL parameters.
   */
  urlParams: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  /**
   * The table data. If present, the "url" will be ignored. Paging is not supported in this mode.
   */
  data: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)),
  /**
   * Additional table props, such as classes.
   */
  tableProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape(tablePropsTypes),
  /**
   * Additional body row props, such as classes.
   */
  tableBodyRowProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape(tableRowPropsTypes),
  /**
   * The table API reference. Available apis:
   *   - reload() : Force reloading the data.
   *   - setUrlParams(urlParams) : Set the urlParams. After changing, the table will reload the data even if the parameters is the same.
   *   - collapseRows() : Collapse all expanded rows.
   */
  tableApiRef: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  /**
   * Whether support row selection. Defualt is false.
   */
  rowSelection: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  /**
   * Whether support paging. Defualt is true.
   */
  paging: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  /**
   * The table name for local storage.
   */
  storageName: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  /**
   * If the value is true, all rows become expandable.
   * If the value is a function, the function will be called with each row and return whether to enable detail for that row.
   * The renderRowDetail function will called when expanding a row and the returned value will be displayed.
   */
  enableRowDetail: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)]),
  /**
   *  This function will called when expanding a row and the returned value will be displayed.
   */
  renderRowDetail: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  /**
   * The callback when an error happens. The parameter is an object:
   * {
   *   message: "Error Message."
   * }
   */
  onError: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  /**
   * The callback after the loading complete. The parameter is fetched data.
   */
  onFetchData: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  /**
   * The callback after the first loading complete. No parameter.
   */
  onInitialComplete: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  /**
   * The callback after row selection is changed.
   * The parameter #1 is an updater, if you call it with the parameter #2, it will give you the selected rows. The parameter #2 is the previous selected row.
   */
  onRowSelectionChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  /**
   * The default selected rows
   */
  selectedRows: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  /**
   * The callback after page index changed.
   * The parameter is an object {pageSize, pageIndex}
   */
  onPaginationChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)
};
var propsDefaults = {
  columns: [],
  initialSorting: [],
  url: null,
  urlParams: null,
  data: null,
  tableProps: null,
  tableBodyRowProps: null,
  tableApiRef: null,
  rowSelection: false,
  paging: true,
  storageName: null,
  enableRowDetail: false,
  renderRowDetail: null,
  onError: null,
  onFetchData: null,
  onInitialComplete: null,
  selectedRows: null,
  onPaginationChange: null
};
var actionCellProps = {
  className: "text-center",
  style: {
    width: "32px"
  }
};
function ArcTable(_ref) {
  var columns = _ref.columns,
    initialSorting = _ref.initialSorting,
    url = _ref.url,
    urlParams = _ref.urlParams,
    data = _ref.data,
    tableProps = _ref.tableProps,
    tableBodyRowProps = _ref.tableBodyRowProps,
    paging = _ref.paging,
    rowSelection = _ref.rowSelection,
    enableRowDetail = _ref.enableRowDetail,
    renderRowDetail = _ref.renderRowDetail,
    onError = _ref.onError,
    onFetchData = _ref.onFetchData,
    onInitialComplete = _ref.onInitialComplete,
    _onRowSelectionChange = _ref.onRowSelectionChange,
    tableApiRef = _ref.tableApiRef,
    storageName = _ref.storageName,
    selectedRows = _ref.selectedRows,
    onPaginationChange = _ref.onPaginationChange;
  /* consts */
  var serverSideData = data == null;
  var tableStriped = (tableProps === null || tableProps === void 0 ? void 0 : tableProps.striped) == null || tableProps.striped;
  var tableHover = (tableProps === null || tableProps === void 0 ? void 0 : tableProps.hover) == null || tableProps.hover;

  /* states */
  var containerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(urlParams),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    currentUrlParams = _React$useState2[0],
    setCurrentUrlParams = _React$useState2[1];
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(initialSorting),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    sorting = _React$useState4[0],
    setSorting = _React$useState4[1];
  var _ref2 = paging ? react__WEBPACK_IMPORTED_MODULE_0__.useState({
      pageIndex: 0,
      pageSize: loadGlobalSettings(storageName).pageSize || 10
    }) : react__WEBPACK_IMPORTED_MODULE_0__.useState({
      pageIndex: 0,
      pageSize: 9999
    }),
    _ref3 = _slicedToArray(_ref2, 2),
    _ref3$ = _ref3[0],
    pageIndex = _ref3$.pageIndex,
    pageSize = _ref3$.pageSize,
    setPagination = _ref3[1];
  var _ref4 = serverSideData ? react__WEBPACK_IMPORTED_MODULE_0__.useState({
      count: 0,
      rows: []
    }) : [{
      count: data.length,
      rows: data
    }, function () {}],
    _ref5 = _slicedToArray(_ref4, 2),
    tableData = _ref5[0],
    setTableData = _ref5[1];
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0__.useState(serverSideData),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    firstLoading = _React$useState6[0],
    setFirstLoading = _React$useState6[1];
  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_0__.useState(serverSideData),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    loading = _React$useState8[0],
    setLoading = _React$useState8[1];
  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_0__.useState(80),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    loadingPanalHeight = _React$useState10[0],
    setLoadingPanalHeight = _React$useState10[1];
  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_0__.useState({}),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    currentRowSelection = _React$useState12[0],
    setCurrentRowSelection = _React$useState12[1];
  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_0__.useState(0),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    visibleColumns = _React$useState14[0],
    setVisibleColumns = _React$useState14[1];

  /* members */
  var tableSelectedRows = selectedRows != null ? selectedRows : currentRowSelection;
  var table = (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_4__/* .useReactTable */ .N4)({
    data: tableData.rows,
    columns: columns,
    state: {
      sorting: sorting,
      rowSelection: tableSelectedRows,
      pagination: {
        pageIndex: pageIndex,
        pageSize: pageSize
      }
    },
    enableRowSelection: rowSelection,
    manualSorting: serverSideData,
    manualPagination: serverSideData,
    getPaginationRowModel: (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_5__/* .getPaginationRowModel */ .kW)(),
    onSortingChange: setSorting,
    onRowSelectionChange: function onRowSelectionChange(updater) {
      if (_onRowSelectionChange != null) {
        _onRowSelectionChange(updater, tableSelectedRows);
      }
      if (selectedRows == null) {
        setCurrentRowSelection(updater);
      }
    },
    getCoreRowModel: (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_5__/* .getCoreRowModel */ .HT)(),
    getSortedRowModel: (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_5__/* .getSortedRowModel */ .h5)(),
    defaultColumn: {
      size: -1,
      minSize: -1
    }
  });
  var loadData = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var newData;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setLoading(true);
            newData = null;
            _context.prev = 2;
            _context.next = 5;
            return FetchData({
              url: url,
              urlParams: currentUrlParams,
              top: paging ? pageSize : undefined,
              skip: paging ? pageIndex * pageSize : undefined,
              orderBy: sorting.map(function (col) {
                return col.id + " " + (col.desc ? "desc" : "asc");
              }).join(",")
            });
          case 5:
            newData = _context.sent;
            return _context.abrupt("return", newData);
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](2);
            if (onError != null) {
              onError(_context.t0);
            }
            return _context.abrupt("return", {
              count: 0,
              rows: []
            });
          case 13:
            _context.prev = 13;
            setLoading(false);
            if (onFetchData != null) {
              onFetchData(newData);
            }
            if (firstLoading) {
              setFirstLoading(false);
              if (onInitialComplete != null) {
                onInitialComplete();
              }
            }
            return _context.finish(13);
          case 18:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 9, 13, 18]]);
    }));
    return function loadData() {
      return _ref6.apply(this, arguments);
    };
  }();
  var updateTableData = function updateTableData(data) {
    setTableData(data);
    setCurrentRowSelection({});
    colloapseRows();
  };
  var expandingHandlersRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});
  var colloapseRows = function colloapseRows() {
    if (expandingHandlersRef.current != null) {
      Object.values(expandingHandlersRef.current).forEach(function (handler) {
        return handler(false);
      });
    }
  };
  var updatePagination = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (pagination) {
    setPagination(pagination);
    pagination.pageSize && pageSize != pagination.pageSize && saveGlobalSettings(storageName, {
      pageSize: pagination.pageSize
    });
    setCurrentRowSelection({});
    if (onPaginationChange != null) onPaginationChange(pagination);
  }, [setPagination, setCurrentRowSelection, onPaginationChange]);

  /* callback */
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    if (serverSideData) {
      var active = true;
      _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var newData;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return loadData();
            case 2:
              newData = _context2.sent;
              if (active && newData != null) {
                updateTableData(newData);
              }
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
      return function () {
        active = false;
      };
    } else {
      if (onInitialComplete != null) {
        onInitialComplete();
      }
    }
  }, [currentUrlParams, sorting, pageIndex, pageSize]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    if (containerRef.current != null) {
      setLoadingPanalHeight(containerRef.current.clientHeight);
    }
  });

  // keep updating visible columns for colspan calculation
  var calcVisibleColumns = function calcVisibleColumns() {
    if (containerRef.current != null) {
      var colCount = 0;
      containerRef.current.querySelectorAll(".arc-table:first-child>thead>tr>th").forEach(function (header) {
        if (header.offsetWidth > 0 || header.offsetHeight > 0) {
          colCount++;
        }
      });
      setVisibleColumns(colCount);
    }
  };
  var updateVisibleColumnsTimer = null;
  var updateVisibleColumns = function updateVisibleColumns() {
    clearInterval(updateVisibleColumnsTimer);
    updateVisibleColumnsTimer = setTimeout(calcVisibleColumns, 100);
  };
  window.addEventListener("resize", updateVisibleColumns);
  window.addEventListener("mouseup", updateVisibleColumns);

  /* ref */
  if (tableApiRef != null) {
    tableApiRef.reload = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!(pageIndex != 0)) {
              _context3.next = 4;
              break;
            }
            // pageIndex change will do updateTableData in the useEffect.
            setPagination({
              pageIndex: 0,
              pageSize: pageSize
            });
            _context3.next = 14;
            break;
          case 4:
            if (!serverSideData) {
              _context3.next = 12;
              break;
            }
            _context3.t0 = updateTableData;
            _context3.next = 8;
            return loadData();
          case 8:
            _context3.t1 = _context3.sent;
            (0, _context3.t0)(_context3.t1);
            _context3.next = 14;
            break;
          case 12:
            setCurrentRowSelection({});
            colloapseRows();
          case 14:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    tableApiRef.collapseRows = colloapseRows;
    tableApiRef.setUrlParams = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(params) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!(JSON.stringify(params) === JSON.stringify(currentUrlParams))) {
                _context4.next = 8;
                break;
              }
              _context4.t0 = updateTableData;
              _context4.next = 4;
              return loadData();
            case 4:
              _context4.t1 = _context4.sent;
              (0, _context4.t0)(_context4.t1);
              _context4.next = 9;
              break;
            case 8:
              setCurrentUrlParams(params);
            case 9:
              setPagination({
                pageIndex: 0,
                pageSize: pageSize
              });
            case 10:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      return function (_x) {
        return _ref9.apply(this, arguments);
      };
    }();
    tableApiRef.getUrlParams = function () {
      return currentUrlParams;
    };
    tableApiRef.getSelectedRows = function () {
      return table.getSelectedRowModel().flatRows;
    };
    tableApiRef.setSelectedRows = function (selectedRows) {
      return setCurrentRowSelection(selectedRows);
    };
    tableApiRef.getRows = function () {
      return table.getRowModel().flatRows;
    };
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "arc-table-container",
    ref: containerRef
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "arc-table-loading card",
    style: {
      height: loadingPanalHeight + "px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Processing", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "\xA0")))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
    className: "arc-table table " + (tableStriped ? "arc-table-striped " : "") + (tableHover ? "arc-table-hover " : "") + ((tableProps === null || tableProps === void 0 ? void 0 : tableProps.className) || "")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, table.getHeaderGroups().map(function (headerGroup) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(HeaderRow, {
      key: headerGroup.id,
      table: table,
      headerGroup: headerGroup,
      rowSelection: rowSelection,
      enableRowDetail: enableRowDetail
    });
  })), firstLoading ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, table.getRowModel().rows.length > 0 ? table.getRowModel().rows.map(function (row, rowIndex) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BodyRow, {
      key: pageIndex * pageSize + rowIndex,
      row: row,
      rowIndex: rowIndex,
      striped: tableStriped,
      rowSelection: rowSelection,
      enableRowDetail: enableRowDetail,
      renderRowDetail: renderRowDetail,
      expandingHandlers: expandingHandlersRef.current,
      tableBodyRowProps: tableBodyRowProps,
      visibleColumns: visibleColumns
    });
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
    className: tableBodyRowProps === null || tableBodyRowProps === void 0 ? void 0 : tableBodyRowProps.className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    className: "arc-table-empty",
    colSpan: visibleColumns > 0 ? visibleColumns : table.getVisibleLeafColumns().length + (enableRowDetail ? 1 : 0) + (rowSelection ? 1 : 0)
  }, "No data available in table")))), paging ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Pagination, {
    totalCount: tableData.count,
    pageIndex: pageIndex,
    pageSize: pageSize,
    onPaginationChange: updatePagination
  }) : null);
}
ArcTable.createColumnHelper = _tanstack_react_table__WEBPACK_IMPORTED_MODULE_5__/* .createColumnHelper */ .FB;
ArcTable.propTypes = propsTypes;
ArcTable.defaultProps = propsDefaults;
function HeaderRow(_ref10) {
  var table = _ref10.table,
    headerGroup = _ref10.headerGroup,
    rowSelection = _ref10.rowSelection,
    enableRowDetail = _ref10.enableRowDetail;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
    key: headerGroup.id
  }, rowSelection ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RowSelectionHeader, {
    table: table
  }) : null, enableRowDetail ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RowExpandHeader, null) : null, headerGroup.headers.map(function (header) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      key: header.id,
      className: (header.column.columnDef.headerClassName != null ? header.column.columnDef.headerClassName + " " : "") + (header.column.getCanSort() ? "sorting " + (header.column.getIsSorted() ? "sorting_" + header.column.getIsSorted() : "") : ""),
      style: {
        width: header.getSize() > 0 ? header.getSize() : null
      },
      onClick: header.column.getToggleSortingHandler()
    }, header.isPlaceholder /* This is for column groups, we may not need it.*/ ? null : (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_4__/* .flexRender */ .Kv)(header.column.columnDef.header, header.getContext()));
  }));
}
function BodyRow(_ref11) {
  var row = _ref11.row,
    rowIndex = _ref11.rowIndex,
    rowSelection = _ref11.rowSelection,
    expandingHandlers = _ref11.expandingHandlers,
    striped = _ref11.striped,
    tableBodyRowProps = _ref11.tableBodyRowProps,
    enableRowDetail = _ref11.enableRowDetail,
    renderRowDetail = _ref11.renderRowDetail,
    visibleColumns = _ref11.visibleColumns;
  /* states */
  var _React$useState15 = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    expanding = _React$useState16[0],
    setExpanding = _React$useState16[1];

  /* variable */
  var stripedClass = (striped ? "arc-table-row-" + (rowIndex % 2 == 0 ? "odd" : "even") : "") + " ";
  var rowProps = _objectSpread(_objectSpread({}, tableBodyRowProps), {}, {
    className: stripedClass + ((tableBodyRowProps === null || tableBodyRowProps === void 0 ? void 0 : tableBodyRowProps.className) != null ? tableBodyRowProps.className : ""),
    onClick: (tableBodyRowProps === null || tableBodyRowProps === void 0 ? void 0 : tableBodyRowProps.onClick) != null ? function (e) {
      return tableBodyRowProps.onClick(e, row);
    } : null
  });
  var currentRowEnableDetail = enableRowDetail instanceof Function ? enableRowDetail(row) : enableRowDetail;
  var detail = expanding && currentRowEnableDetail ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
    className: "arc-table-row-detail"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    colSpan: visibleColumns > 0 ? visibleColumns : row.getVisibleCells().length + 1 + (rowSelection ? 1 : 0)
  }, renderRowDetail != null ? renderRowDetail(row) : null)) : null;

  /* callback */
  var onClickCell = function onClickCell(e) {
    if (!(window.getSelection && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).toString().length > 0)) {
      if (e.currentTarget.classList.contains("text-notruncate")) {
        e.currentTarget.classList.remove("text-notruncate");
      } else {
        e.currentTarget.classList.add("text-notruncate");
      }
    }
  };
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    if (expandingHandlers != null) {
      expandingHandlers[row.id] = function (action) {
        return setExpanding(action);
      };
      return function () {
        return delete expandingHandlers[row.id];
      };
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
    className: rowProps.className + (rowProps.onClick ? "arc-table-row-clickable" : ""),
    onClick: rowProps.onClick
  }, rowSelection ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RowSelectionCell, {
    row: row
  }) : null, currentRowEnableDetail ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RowExpandCell, {
    expanding: expanding,
    onClick: function onClick() {
      return setExpanding(!expanding);
    }
  }) : null, row.getVisibleCells().map(function (cell) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      key: cell.id,
      className: cell.column.columnDef.className,
      style: {
        width: cell.column.getSize() > 0 ? cell.column.getSize() : null
      },
      onClick: onClickCell
    }, (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_4__/* .flexRender */ .Kv)(cell.column.columnDef.cell, cell.getContext()));
  })), detail);
}
function RowSelectionHeader(_ref12) {
  var table = _ref12.table;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", actionCellProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "checkbox",
    className: "form-check-input",
    checked: table.getIsAllPageRowsSelected(),
    onChange: table.getToggleAllPageRowsSelectedHandler(),
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }));
}
function RowSelectionCell(_ref13) {
  var row = _ref13.row;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", actionCellProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "checkbox",
    className: "form-check-input",
    checked: row.getIsSelected(),
    onChange: row.getToggleSelectedHandler(),
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }));
}
function RowExpandHeader() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", actionCellProps);
}
function RowExpandCell(_ref14) {
  var expanding = _ref14.expanding,
    _onClick = _ref14.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", actionCellProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa " + (expanding ? "fa-minus-circle" : "fa-plus-circle"),
    role: "button",
    onClick: function onClick(e) {
      e.stopPropagation();
      _onClick(e);
    }
  }));
}
function Pagination(_ref15) {
  var pageIndex = _ref15.pageIndex,
    pageSize = _ref15.pageSize,
    totalCount = _ref15.totalCount,
    onPaginationChange = _ref15.onPaginationChange;
  /* variable */
  pageIndex = pageIndex !== null && pageIndex !== void 0 ? pageIndex : 0;
  pageSize = pageSize !== null && pageSize !== void 0 ? pageSize : 10;

  /* members */
  var tableInfo = _utils__WEBPACK_IMPORTED_MODULE_1__/* .FormatString */ .FJ("Showing {0} to {1} of {2} entries", totalCount > 0 ? Math.min(pageIndex * pageSize + 1, totalCount) : 0, totalCount > 0 ? Math.min((pageIndex + 1) * pageSize, totalCount) : 0, totalCount);

  /* callback */
  var onPageIndexChange = function onPageIndexChange(pageIndex) {
    if (onPaginationChange != null) {
      onPaginationChange({
        pageIndex: pageIndex,
        pageSize: pageSize
      });
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row arc-table-pagination"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-auto pagination-table-info"
  }, tableInfo), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-auto ms-auto pagination-size-selector"
  }, "Records per page:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    value: pageSize,
    onChange: function onChange(e) {
      if (onPaginationChange != null) {
        onPaginationChange({
          pageIndex: 0,
          pageSize: Number(e.target.value)
        });
      }
    }
  }, [10, 20, 50, 100, 200, 500].map(function (pageSize) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      key: pageSize,
      value: pageSize
    }, pageSize);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-auto pagination-nav-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(PageNav, {
    pageCount: Math.ceil(totalCount / pageSize),
    pageIndex: pageIndex,
    onPageIndexChange: onPageIndexChange
  })));
}
function PageNav(_ref16) {
  var pageIndex = _ref16.pageIndex,
    pageCount = _ref16.pageCount,
    onPageIndexChange = _ref16.onPageIndexChange;
  /* variable */
  pageIndex = pageIndex !== null && pageIndex !== void 0 ? pageIndex : 0;

  /* members */
  var pageNumbers = function () {
    if (pageCount <= 7) {
      return Array.from(new Array(pageCount), function (x, i) {
        return i + 1;
      });
    } else {
      var cursor = Math.min(Math.max(pageIndex + 1, 4), pageCount - 3);
      return [1, cursor > 4 ? -1 : 2, cursor - 1, cursor, cursor + 1, cursor < pageCount - 3 ? -1 : pageCount - 1, pageCount];
    }
  }();

  /* callback */
  var onPageItemClick = function onPageItemClick(text) {
    var newIndex = function () {
      switch (text) {
        case "prev":
          return Math.max(pageIndex - 1, 0);
        case "next":
          return Math.min(pageIndex + 1, pageCount - 1);
        default:
          return Number(text) - 1;
      }
    }();
    if (onPageIndexChange != null) {
      onPageIndexChange(newIndex);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "pagination pagination-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "page-item" + (pageIndex <= 0 ? " disabled" : ""),
    onClick: function onClick(e) {
      if (pageIndex > 0) {
        onPageItemClick(e.currentTarget.textContent);
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "page-link javascript-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-angle-left"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "visually-hidden"
  }, "prev"))), pageNumbers.map(function (p, i) {
    return p > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: i,
      className: "page-item" + (pageIndex == p - 1 ? " active" : ""),
      onClick: function onClick(e) {
        return onPageItemClick(e.currentTarget.textContent);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      className: "page-link javascript-link"
    }, p)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ExpandablePageLink, {
      key: i,
      start: pageNumbers[i - 1] + 1,
      end: pageNumbers[i + 1],
      onClick: onPageItemClick
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "page-item" + (pageCount <= 0 || pageIndex >= pageCount - 1 ? " disabled" : ""),
    onClick: function onClick(e) {
      if (pageCount > 0 && pageIndex < pageCount - 1) {
        onPageItemClick(e.currentTarget.textContent);
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "page-link javascript-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-angle-right"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "visually-hidden"
  }, "next"))));
}
function ExpandablePageLink(_ref17) {
  var start = _ref17.start,
    end = _ref17.end,
    _onClick2 = _ref17.onClick;
  var elementRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  var bootstrapObjRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    if (elementRef.current != null) {
      var _window$bootstrap;
      if ((_window$bootstrap = window.bootstrap) !== null && _window$bootstrap !== void 0 && _window$bootstrap.Dropdown) {
        bootstrapObjRef.current = new window.bootstrap.Dropdown(elementRef.current);
      } else {
        __webpack_require__.e(/* import() */ "vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js").then(__webpack_require__.bind(__webpack_require__, 46134)).then(function (bootstrap) {
          if (elementRef.current != null) {
            bootstrapObjRef.current = new bootstrap.Dropdown(elementRef.current);
          }
        });
      }
    }
    return function () {
      if (bootstrapObjRef.current != null) {
        bootstrapObjRef.current.dispose();
      }
    };
  }, []);
  return (
    /*#__PURE__*/
    // Let the <li> element trigger the dropdown
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "page-item disabled"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "dropup"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      className: "page-link javascript-link dropdown-toggle",
      "data-bs-toggle": "dropdown",
      ref: elementRef
    }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      className: "dropdown-menu dropdown-menu-end arc-table-expand-page-link"
    }, function () {
      var items = [];
      var _loop = function _loop() {
        var pageIndex = i;
        items.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
          key: pageIndex
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
          className: "dropdown-item javascript-link",
          onClick: function onClick() {
            return _onClick2(pageIndex);
          }
        }, _utils__WEBPACK_IMPORTED_MODULE_1__/* .FormatString */ .FJ("Page {0}", i))));
      };
      for (var i = start; i < end; i++) {
        _loop();
      }
      return items;
    }())))
  );
}
function FetchData(_x2) {
  return _FetchData.apply(this, arguments);
}
/* Global settings. */
function _FetchData() {
  _FetchData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(options) {
    var response, items, count, rows, errorMsg, _parseInt;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return _react_shared_axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.get(options.url, {
            params: _objectSpread(_objectSpread({}, options.urlParams), {}, {
              "@json": true,
              "$count": true,
              "$top": options.top,
              "$skip": options.skip,
              "$orderBy": options.orderBy,
              "nonce": parseInt(Math.random() * 10e10)
            })
          })["catch"](function (error) {
            var status = error.response.status;
            // 404: IIS 7 will return an HTTP 404 error when an HTTP request exceeds the request limits.
            // 431: Request Header Fields Too Large
            // 413: Payload Too Large
            // 414: URI Too Long
            if (status === 414 || status === 413 || status === 404 || status === 431) {
              error.message += "\nThe URI length exceeds the maximum length of the web server. Please contact arcsupport@cdata.com for more details.";
            }
            throw error;
          });
        case 2:
          response = _context5.sent;
          items = response.data.items;
          count = 0;
          rows = [];
          if (!Array.isArray(items)) {
            _context5.next = 15;
            break;
          }
          if (!(items.length > 0)) {
            _context5.next = 15;
            break;
          }
          errorMsg = items[0]["rsb:emessage"] || items[0]["errormessage"];
          if (!(errorMsg != null)) {
            _context5.next = 13;
            break;
          }
          throw {
            message: errorMsg
          };
        case 13:
          count = (_parseInt = parseInt(items[0].count)) !== null && _parseInt !== void 0 ? _parseInt : 0;
          if (count > 0) {
            rows = items;
          } else {
            rows = [];
          }
        case 15:
          return _context5.abrupt("return", {
            count: count,
            rows: rows
          });
        case 16:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _FetchData.apply(this, arguments);
}
var ARC_TABLE_GLOBAL_SETTINGS_KEY = "cdata.arc.arctable.globalsettings";
var loadGlobalSettings = function loadGlobalSettings(storageName) {
  var _window;
  var state = (_window = window) === null || _window === void 0 || (_window = _window.localStorage) === null || _window === void 0 ? void 0 : _window.getItem(ARC_TABLE_GLOBAL_SETTINGS_KEY);
  if (state) {
    try {
      var stateObj = JSON.parse(state);
      if (storageName && stateObj !== null && stateObj !== void 0 && stateObj[storageName]) {
        return stateObj[storageName];
      } else if (stateObj !== null && stateObj !== void 0 && stateObj._default) {
        return stateObj._default;
      } else {
        return {};
      }
    } catch (_unused) {
      return {};
    }
  } else {
    return {};
  }
};
var saveGlobalSettings = function saveGlobalSettings(storageName, settings) {
  var _window2, _window3;
  var state = (_window2 = window) === null || _window2 === void 0 || (_window2 = _window2.localStorage) === null || _window2 === void 0 ? void 0 : _window2.getItem(ARC_TABLE_GLOBAL_SETTINGS_KEY);
  var newSettings = state ? JSON.parse(state) : {};
  if (storageName) {
    newSettings[storageName] = settings;
  } else {
    newSettings._default = settings;
  }
  (_window3 = window) === null || _window3 === void 0 || (_window3 = _window3.localStorage) === null || _window3 === void 0 || _window3.setItem(ARC_TABLE_GLOBAL_SETTINGS_KEY, JSON.stringify(newSettings));
};

/***/ }),

/***/ 4938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ DropdownHacker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


// In a page that uses both Bootstrap and ReactBootstrap, if the Dropdown contains an Input and the focus triggers "Esc" within the input, or if the arrow keys up or down are triggered directly in the drop-down menu, Bootstrap's javascript will report an error: "Cannot read properties of undefined (reading 'parentNode')". The toggler element in Bootstrap contains this attribute, but ReactBootstrap's Dropdown component does not. Bootstrap will search for parentNode through the selector [data-bs-toggle="dropdown"], resulting in an error being reported.

// Now, the footer.rst will contain <script src="[page.linkbase]ui/bootstrap/js/bootstrap.bundle.min.js"></script>, causing all React interfaces to encounter this problem.  So, add this hacker for all <Dropdown /> component.
function DropdownHacker() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "data-bs-toggle": "dropdown"
  });
}

/***/ }),

/***/ 58447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ SearchBox)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var SearchBox = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(function (_ref) {
  var searchText = _ref.searchText,
    onChanged = _ref.onChanged,
    placeHolder = _ref.placeHolder,
    inputRef = _ref.inputRef,
    onFocus = _ref.onFocus,
    onBlur = _ref.onBlur,
    appendClass = _ref.appendClass,
    nonAutoFocus = _ref.nonAutoFocus;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    focus = _useState2[0],
    setFocus = _useState2[1];
  var handleFocus = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (onFocus != null) {
      onFocus();
    }
    setFocus(true);
  }, [onFocus]);
  var handleBlur = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (onBlur != null) {
      onBlur();
    }
    setFocus(false);
  }, [onBlur]);
  var shownPlaceHolder = placeHolder != null ? placeHolder : "Search";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex app-search-bar form-control " + (appendClass ? appendClass : "") + (focus ? " focus-input" : "")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "search-glass-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-search"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    autoFocus: !nonAutoFocus,
    className: "search-input",
    ref: function ref(_ref2) {
      if (inputRef != null) inputRef.current = _ref2;
    },
    placeholder: shownPlaceHolder,
    value: searchText ? searchText : "",
    onChange: function onChange(e) {
      return onChanged === null || onChanged === void 0 ? void 0 : onChanged.call(null, e.target.value);
    },
    onFocus: handleFocus,
    onBlur: handleBlur
  }), searchText && searchText.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "search-clear-icon",
    onClick: function onClick() {
      return onChanged === null || onChanged === void 0 ? void 0 : onChanged.call(null, "");
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-times-circle"
  })));
});
SearchBox.propTypes = {
  /**
   * The search text.
   */
  searchText: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  /**
   * Event: onChanged
   */
  onChanged: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  /**
   * The append class names.
   */
  appendClass: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};


/***/ }),

/***/ 1295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  I: () => (/* binding */ SearchBar),
  r: () => (/* binding */ _TableFilter)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Spinner.js
var Spinner = __webpack_require__(70778);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Dropdown.js + 1 modules
var Dropdown = __webpack_require__(26465);
// EXTERNAL MODULE: ./src/components/utils/index.js + 1 modules
var utils = __webpack_require__(25337);
// EXTERNAL MODULE: ./src/components/searchbox/index.jsx
var searchbox = __webpack_require__(58447);
// EXTERNAL MODULE: ./src/components/dropdown-hacker/index.jsx
var dropdown_hacker = __webpack_require__(4938);
;// CONCATENATED MODULE: ./src/components/searchable-dropdown/index.jsx
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }








var Footer = /*#__PURE__*/function (_React$Component) {
  function Footer(props) {
    _classCallCheck(this, Footer);
    return _callSuper(this, Footer, [props]);
  }
  _inherits(Footer, _React$Component);
  return _createClass(Footer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement("div", {
        className: "searchable-footer row"
      }, /*#__PURE__*/react.createElement("span", {
        className: "col-6"
      }, (0,utils/* FormatString */.FJ)("{0} of {1} items", this.props.size, this.props.max)), /*#__PURE__*/react.createElement("a", {
        className: "col-6",
        role: "button",
        onClick: this.props.onClearAll
      }, "Clear Selected"));
    }
  }]);
}(react.Component);
var ItemList = /*#__PURE__*/function (_React$Component2) {
  function ItemList(props) {
    var _this;
    _classCallCheck(this, ItemList);
    _this = _callSuper(this, ItemList, [props]);
    _defineProperty(_this, "handleClickMore", function () {
      _this.setState(function (state) {
        return {
          listSize: state.listSize + _this.props.defListSize
        };
      });
    });
    _defineProperty(_this, "handleClick", function (event) {
      // We only react for <input> and <a> element.
      if (event.target instanceof HTMLLabelElement) {
        return;
      }
      if (_this.props.onChecked) {
        _this.props.onChecked(event);
      }
    });
    _defineProperty(_this, "renderItem", function (key, label) {
      return /*#__PURE__*/react.createElement("a", {
        key: key,
        className: "searchable-item form-check dropdown-item",
        onClick: _this.handleClick,
        "data-id": key
      }, /*#__PURE__*/react.createElement("input", {
        className: "form-check-input",
        type: "checkbox",
        checked: _this.props.selectedIds.has(key),
        "data-id": key,
        id: key,
        onChange: function onChange() {}
      }), /*#__PURE__*/react.createElement("label", {
        className: "form-check-label",
        title: label,
        htmlFor: key
      }, label));
    });
    _defineProperty(_this, "renderItems", function (itemMap) {
      var listItems = [];
      itemMap.forEach(function (val, key) {
        if (listItems.length < _this.state.listSize) {
          listItems.push(_this.renderItem(key, val));
        }
      });
      return listItems;
    });
    _defineProperty(_this, "renderShowMore", function (itemCount) {
      if (itemCount <= _this.state.listSize) {
        return null;
      }
      return /*#__PURE__*/react.createElement("div", {
        className: "searchable-item dropdown-item",
        onClick: _this.handleClickMore
      }, /*#__PURE__*/react.createElement("a", {
        role: "button"
      }, "Show more"));
    });
    _this.state = {
      listSize: _this.props.defListSize
    };
    return _this;
  }
  _inherits(ItemList, _React$Component2);
  return _createClass(ItemList, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement("div", {
        className: "searchable-list"
      }, this.renderItems(this.props.itemMap), this.renderShowMore(this.props.itemMap.size));
    }
  }]);
}(react.Component);
var DropdownMenu = /*#__PURE__*/function (_React$Component3) {
  function DropdownMenu(props) {
    var _this2;
    _classCallCheck(this, DropdownMenu);
    _this2 = _callSuper(this, DropdownMenu, [props]);
    _defineProperty(_this2, "handleSearchInput", function (text) {
      _this2.setState({
        keyword: text
      });
    });
    _defineProperty(_this2, "getShowedItems", function (keyword, originalMap) {
      var showedMap = new Map();
      if (!keyword) {
        showedMap = originalMap;
      } else {
        keyword = keyword.toLocaleLowerCase();
        var _iterator = _createForOfIteratorHelper(originalMap),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step$value = _slicedToArray(_step.value, 2),
              key = _step$value[0],
              value = _step$value[1];
            if (value.toLocaleLowerCase().indexOf(keyword) >= 0) {
              showedMap.set(key, value);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      return showedMap;
    });
    _defineProperty(_this2, "onClearAll", function () {
      _this2.setState({
        keyword: ""
      });
      _this2.props.onClearAll();
    });
    _defineProperty(_this2, "renderList", function () {
      if (_this2.props.isLoading) {
        return /*#__PURE__*/react.createElement("div", {
          className: "searchable-item dropdown-item mt-2"
        }, /*#__PURE__*/react.createElement(Spinner/* default */.A, {
          animation: "border",
          size: "sm",
          role: "status"
        }, /*#__PURE__*/react.createElement("span", {
          className: "visually-hidden"
        })), /*#__PURE__*/react.createElement("label", {
          className: "ms-2"
        }, "Loading More ..."));
      }
      var itemMap = _this2.getShowedItems(_this2.state.keyword, _this2.props.itemMap);
      return /*#__PURE__*/react.createElement(ItemList, {
        itemMap: itemMap,
        selectedIds: _this2.props.selectedIds,
        onChecked: _this2.props.onChecked,
        defListSize: _this2.props.defListSize
      });
    });
    _this2.state = {
      keyword: ""
    };
    return _this2;
  }
  _inherits(DropdownMenu, _React$Component3);
  return _createClass(DropdownMenu, [{
    key: "render",
    value: function render() {
      var itemMap = this.getShowedItems(this.state.keyword, this.props.itemMap);
      return /*#__PURE__*/react.createElement(Dropdown/* default */.A.Menu, {
        className: "searchable-menu",
        flip: false
      }, /*#__PURE__*/react.createElement(searchbox/* SearchBox */.G, {
        searchText: this.state.keyword,
        onChanged: this.handleSearchInput,
        appendClass: "searchable-input"
      }), this.renderList(), /*#__PURE__*/react.createElement(Dropdown/* default */.A.Divider, null), /*#__PURE__*/react.createElement(Footer, {
        max: itemMap.size,
        size: this.props.selectedIds.size,
        onClearAll: this.onClearAll
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (!props.nextShow && state.keyword) {
        return {
          keyword: ""
        };
      } else {
        return null;
      }
    }
  }]);
}(react.Component);
var _itemMap = /*#__PURE__*/new WeakMap();
var _i18nMap = /*#__PURE__*/new WeakMap();
var _selectedIds = /*#__PURE__*/new WeakMap();
var SearchableDropdown = /*#__PURE__*/function (_React$Component4) {
  function SearchableDropdown(props) {
    var _this3;
    _classCallCheck(this, SearchableDropdown);
    _this3 = _callSuper(this, SearchableDropdown, [props]);
    _classPrivateFieldInitSpec(_this3, _itemMap, null);
    _classPrivateFieldInitSpec(_this3, _i18nMap, null);
    _classPrivateFieldInitSpec(_this3, _selectedIds, null);
    _defineProperty(_this3, "fireChange", function (event, checkedItemList) {
      if (_this3.props.onChange) {
        _this3.props.onChange(event, checkedItemList);
      }
    });
    _defineProperty(_this3, "handleChecked", function (e) {
      var selected = _classPrivateFieldGet(_selectedIds, _this3);
      var itemID = e.target.dataset.id;
      if (itemID) {
        if (selected.has(itemID)) {
          selected["delete"](itemID);
        } else {
          selected.add(itemID);
        }
      }
      var checkedItemList = [];
      selected.forEach(function (idKey) {
        checkedItemList.push(_classPrivateFieldGet(_itemMap, _this3).get(idKey));
      });
      _this3.fireChange(e, checkedItemList);
    });
    _defineProperty(_this3, "handleClearAll", function (e) {
      _this3.fireChange(e, []);
    });
    _defineProperty(_this3, "handleToggle", function (nextShow, callback) {
      _this3.setState({
        nextShow: nextShow
      });
      if (callback) {
        callback(nextShow);
      }
    });
    _this3.state = {
      nextShow: false
    };
    return _this3;
  }
  _inherits(SearchableDropdown, _React$Component4);
  return _createClass(SearchableDropdown, [{
    key: "renderSplitBtn",
    value: function renderSplitBtn(btnIcon, onClick) {
      return /*#__PURE__*/react.createElement("a", {
        className: "filter-close-button",
        onClick: onClick
      }, /*#__PURE__*/react.createElement("i", {
        className: "fa " + btnIcon
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var defSize = this.props.defListSize;
      var parameter = SearchableDropdown.initByProps(this.props);
      var btnClass = parameter.btnClass;
      var title = parameter.title;
      _classPrivateFieldSet(_itemMap, this, parameter.itemMap);
      _classPrivateFieldSet(_i18nMap, this, parameter.i18nMap);
      _classPrivateFieldSet(_selectedIds, this, parameter.selectedIds);
      var isLoading = !this.props.itemList;
      return /*#__PURE__*/react.createElement(Dropdown/* default */.A, {
        autoClose: "outside",
        className: "searchable-dropdown",
        onToggle: function onToggle(nextShow) {
          return _this4.handleToggle(nextShow, _this4.props.onToggle);
        }
      }, /*#__PURE__*/react.createElement(dropdown_hacker/* DropdownHacker */.G, null), /*#__PURE__*/react.createElement(Dropdown/* default */.A.Toggle, {
        variant: btnClass,
        title: title
      }, this.props.splitDropdown ? this.renderSplitBtn(this.props.nonDropdownBtnIcon, this.props.nonDropdownBtnClick) : null, /*#__PURE__*/react.createElement("i", {
        className: "fa " + this.props.btnIcon
      }), "\xA0", title, "\xA0"), this.state.nextShow && /*#__PURE__*/react.createElement(DropdownMenu, {
        nextShow: this.state.nextShow,
        isLoading: isLoading,
        itemMap: _classPrivateFieldGet(_i18nMap, this),
        selectedIds: _classPrivateFieldGet(_selectedIds, this),
        defListSize: defSize,
        onChecked: this.handleChecked,
        onClearAll: this.handleClearAll
      }));
    }
  }], [{
    key: "getI18nNameByIndex",
    value: function getI18nNameByIndex(itemList, i18nList, index) {
      if (i18nList && i18nList instanceof Array && index > -1 && index < i18nList.length) {
        return i18nList[index];
      } else {
        return itemList[index];
      }
    }
  }, {
    key: "getI18nNameByValue",
    value: function getI18nNameByValue(itemList, i18nList, value) {
      if (!itemList) {
        return value;
      }
      var index = itemList.findIndex(function (element) {
        return element === value;
      });
      if (-1 === index) {
        return value;
      }
      return SearchableDropdown.getI18nNameByIndex(itemList, i18nList, index);
    }
  }, {
    key: "initByProps",
    value: function initByProps(props) {
      var checkedItemList = [];
      if (props.checkedItemList && props.checkedItemList instanceof Array) {
        checkedItemList = _toConsumableArray(props.checkedItemList);
      }
      var itemMap = new Map();
      var i18nMap = new Map();
      var idSet = new Set();
      var i = 0;
      for (; i < ((_props$itemList = props.itemList) === null || _props$itemList === void 0 ? void 0 : _props$itemList.length); i++) {
        var _props$itemList;
        var key = (0,utils/* genElemId */.Nf)("chk");
        var i18nName = SearchableDropdown.getI18nNameByIndex(props.itemList, props.i18nList, i);
        itemMap.set(key, props.itemList[i]);
        i18nMap.set(key, i18nName);
        var idx = checkedItemList.findIndex(function (element) {
          return element === props.itemList[i];
        });
        if (idx !== -1) {
          idSet.add(key);
          checkedItemList.splice(idx, 1);
        }
      }
      if (props.mergeCheckItems) {
        checkedItemList.forEach(function (element) {
          var key = (0,utils/* genElemId */.Nf)("chk");
          var i18nName = SearchableDropdown.getI18nNameByValue(props.itemList, props.i18nList, element);
          itemMap.set(key, element);
          i18nMap.set(key, i18nName);
          idSet.add(key);
        });
      }
      var cls = 0 === idSet.size ? "outline-secondary" : "primary";
      return {
        itemMap: itemMap,
        i18nMap: i18nMap,
        title: SearchableDropdown.getHeader(props.title, i18nMap, idSet, props.titlePrefix),
        btnClass: cls,
        selectedIds: idSet
      };
    }
  }, {
    key: "getHeader",
    value: function getHeader(title, i18nMap, selectedIds, titlePrefix) {
      var text = "";
      if (selectedIds.size <= 0) {
        text = titlePrefix + title;
      } else if (selectedIds.size === 1) {
        text = title + ": [" + i18nMap.get(selectedIds.keys().next().value) + "]";
      } else {
        text = title + ": (" + selectedIds.size + ")";
      }
      return text;
    }
  }]);
}(react.Component);
_defineProperty(SearchableDropdown, "defaultProps", {
  checkedItemList: [],
  defListSize: 8,
  btnIcon: "",
  titlePrefix: "",
  splitDropdown: false,
  nonDropdownBtnIcon: "",
  nonDropdownBtnClick: null,
  onToggle: null,
  mergeCheckItems: true
});
_defineProperty(SearchableDropdown, "propTypes", {
  /**
   * The item list is shown in list
   * If the itemList is null or undefined, the animation of "loading more ..." is shown.
   */
  itemList: prop_types_default().arrayOf((prop_types_default()).string),
  /**
   * The item values. The value list size must equal to the itemList if it is not null.
   */
  checkedItemList: prop_types_default().arrayOf((prop_types_default()).string),
  /**
   * The text in the dropdown menu button.
   */
  title: (prop_types_default()).string.isRequired,
  /**
   * The prefix text when no items are checked. The prefix inserts into the title.
   */
  titlePrefix: (prop_types_default()).string,
  /**
   * When the selected item changed.
   *   The first parameter is the React event object
   *   The second parameter is all selected values.
   */
  onChange: (prop_types_default()).func,
  /**
   * When the toggle button is clicked.
   *   The first parameter indicates whether the dropdown menu list shows or closes.
   */
  onToggle: (prop_types_default()).func,
  /**
   * Whether merge the checked items.
   *   True: merge the checked items.  False: only show the origin items and the checked items which not exist will be ignored.
   */
  mergeCheckItems: (prop_types_default()).bool,
  /**
   * The default visible size in the list
   */
  defListSize: (prop_types_default()).number,
  /**
   * The dropdown button icon when nothing is selected.
   */
  btnIcon: (prop_types_default()).string,
  /**
   * whether to split dropdown
   */
  splitDropdown: (prop_types_default()).bool,
  /**
   * The dropdown button icon
   */
  nonDropdownBtnIcon: (prop_types_default()).string,
  /**
   * The dropdown button click event
   */
  nonDropdownBtnClick: (prop_types_default()).func,
  /**
   * The i18n names is shown in list
   * The i18n is not concerned if value is undefined or empty array.
   * If not, the component will try to process the i18n. The array size should equal to the propTypes.itemList
   */
  i18nList: prop_types_default().arrayOf((prop_types_default()).string)
});
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Modal.js + 6 modules
var Modal = __webpack_require__(48032);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Button.js
var Button = __webpack_require__(25615);
;// CONCATENATED MODULE: ./src/components/table-filter/index.jsx
function table_filter_typeof(o) { "@babel/helpers - typeof"; return table_filter_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, table_filter_typeof(o); }
function _classPrivateMethodInitSpec(e, a) { table_filter_checkPrivateRedeclaration(e, a), a.add(e); }
function table_filter_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = table_filter_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function table_filter_toConsumableArray(r) { return table_filter_arrayWithoutHoles(r) || table_filter_iterableToArray(r) || table_filter_unsupportedIterableToArray(r) || table_filter_nonIterableSpread(); }
function table_filter_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function table_filter_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function table_filter_arrayWithoutHoles(r) { if (Array.isArray(r)) return table_filter_arrayLikeToArray(r); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function table_filter_defineProperty(e, r, t) { return (r = table_filter_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function table_filter_classPrivateFieldInitSpec(e, t, a) { table_filter_checkPrivateRedeclaration(e, t), t.set(e, a); }
function table_filter_checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function table_filter_classPrivateFieldGet(s, a) { return s.get(table_filter_assertClassBrand(s, a)); }
function table_filter_classPrivateFieldSet(s, a, r) { return s.set(table_filter_assertClassBrand(s, a), r), r; }
function table_filter_assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
function table_filter_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function table_filter_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, table_filter_toPropertyKey(o.key), o); } }
function table_filter_createClass(e, r, t) { return r && table_filter_defineProperties(e.prototype, r), t && table_filter_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function table_filter_toPropertyKey(t) { var i = table_filter_toPrimitive(t, "string"); return "symbol" == table_filter_typeof(i) ? i : i + ""; }
function table_filter_toPrimitive(t, r) { if ("object" != table_filter_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != table_filter_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function table_filter_callSuper(t, o, e) { return o = table_filter_getPrototypeOf(o), table_filter_possibleConstructorReturn(t, table_filter_isNativeReflectConstruct() ? Reflect.construct(o, e || [], table_filter_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function table_filter_possibleConstructorReturn(t, e) { if (e && ("object" == table_filter_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return table_filter_assertThisInitialized(t); }
function table_filter_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function table_filter_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (table_filter_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function table_filter_getPrototypeOf(t) { return table_filter_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, table_filter_getPrototypeOf(t); }
function table_filter_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && table_filter_setPrototypeOf(t, e); }
function table_filter_setPrototypeOf(t, e) { return table_filter_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, table_filter_setPrototypeOf(t, e); }
function table_filter_slicedToArray(r, e) { return table_filter_arrayWithHoles(r) || table_filter_iterableToArrayLimit(r, e) || table_filter_unsupportedIterableToArray(r, e) || table_filter_nonIterableRest(); }
function table_filter_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function table_filter_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return table_filter_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? table_filter_arrayLikeToArray(r, a) : void 0; } }
function table_filter_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function table_filter_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function table_filter_arrayWithHoles(r) { if (Array.isArray(r)) return r; }









var searchProps = {
  /**
   * onChange event
   * Example:
   * (value: string) => void
   */
  onChange: (prop_types_default()).func,
  /**
   * The default value
   */
  defaultValue: (prop_types_default()).string,
  /**
   * onChange event
   * Example:
   * (value: string) => void
   */
  onClick: (prop_types_default()).func
};
var SearchBar = function SearchBar(props) {
  var _useState = (0,react.useState)(props.defaultValue || ""),
    _useState2 = table_filter_slicedToArray(_useState, 2),
    inputText = _useState2[0],
    setInputText = _useState2[1];
  var _useState3 = (0,react.useState)(!!props.defaultValue || false),
    _useState4 = table_filter_slicedToArray(_useState3, 2),
    showClear = _useState4[0],
    setShowClear = _useState4[1];
  var handleKeyUp = function handleKeyUp(event) {
    if (event.key === "Enter") {
      if (props.onClick) {
        props.onClick(inputText);
      }
    }
  };
  var handleInputChange = function handleInputChange(event) {
    var text = event.target.value;
    if (props.onChange) {
      props.onChange(text);
    }
    setInputText(text);
    setShowClear(!!text);
  };
  var handleClear = function handleClear() {
    if (props.onChange) {
      props.onChange("");
    }
    setInputText("");
    setShowClear(false);
  };
  return /*#__PURE__*/react.createElement("div", {
    className: "row mb-3 mt-3 mb-16 mt-16 justify-content-between text-search-bar"
  }, /*#__PURE__*/react.createElement("div", {
    className: "col-md-12 pull-right"
  }, /*#__PURE__*/react.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/react.createElement("input", {
    type: "text",
    className: "form-control form-control-sm",
    value: inputText,
    onChange: handleInputChange,
    onKeyUp: handleKeyUp,
    placeholder: "Search for..."
  }), showClear && /*#__PURE__*/react.createElement("span", {
    className: "text-clear fa fa-circle-x pe-1 pe-16",
    onClick: handleClear
  }), /*#__PURE__*/react.createElement("button", {
    className: "btn btn-outline-secondary",
    onClick: function onClick() {
      return (props === null || props === void 0 ? void 0 : props.onClick) && props.onClick(inputText);
    },
    type: "button"
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa fa-search fa-3"
  })))), /*#__PURE__*/react.createElement("div", {
    className: "dataTables_processing card hidden"
  }, "Processing..."));
};
SearchBar.prototype = searchProps;
var ResetFilter = /*#__PURE__*/function (_React$Component) {
  function ResetFilter() {
    table_filter_classCallCheck(this, ResetFilter);
    return table_filter_callSuper(this, ResetFilter, arguments);
  }
  table_filter_inherits(ResetFilter, _React$Component);
  return table_filter_createClass(ResetFilter, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement("div", {
        role: "group"
      }, /*#__PURE__*/react.createElement("button", {
        type: "button",
        className: "btn btn-link text-decoration-none",
        onClick: this.props.onClick
      }, "Reset Filters"));
    }
  }]);
}(react.Component);
var _startDate = /*#__PURE__*/new WeakMap();
var _endDate = /*#__PURE__*/new WeakMap();
var DateRangeModal = /*#__PURE__*/function (_React$Component2) {
  function DateRangeModal(props) {
    var _this;
    table_filter_classCallCheck(this, DateRangeModal);
    _this = table_filter_callSuper(this, DateRangeModal, [props]);
    table_filter_classPrivateFieldInitSpec(_this, _startDate, null);
    table_filter_classPrivateFieldInitSpec(_this, _endDate, null);
    table_filter_defineProperty(_this, "onDateChange", function (event, type) {
      if (type === "start") {
        table_filter_classPrivateFieldSet(_startDate, _this, event.target.value);
      } else {
        table_filter_classPrivateFieldSet(_endDate, _this, event.target.value);
      }
    });
    table_filter_defineProperty(_this, "onApplyDate", function (event) {
      if (table_filter_classPrivateFieldGet(_startDate, _this) && table_filter_classPrivateFieldGet(_endDate, _this) && new Date(table_filter_classPrivateFieldGet(_endDate, _this)) < new Date(table_filter_classPrivateFieldGet(_startDate, _this))) {
        _this.setState({
          error: "The start date must precede the end date."
        });
        return;
      }
      if (_this.props.onChange) {
        _this.props.onChange(event, table_filter_classPrivateFieldGet(_startDate, _this), table_filter_classPrivateFieldGet(_endDate, _this));
      }
    });
    table_filter_defineProperty(_this, "onHide", function () {
      _this.setState({
        error: null
      });
      _this.props.fireHidden();
    });
    table_filter_defineProperty(_this, "renderErrorResult", function () {
      return /*#__PURE__*/react.createElement("div", {
        className: "alert alert-dismissible alert-danger"
      }, /*#__PURE__*/react.createElement("button", {
        type: "button",
        className: "btn-close templateResult-btn",
        onClick: function onClick() {
          return _this.setState({
            error: ""
          });
        }
      }), /*#__PURE__*/react.createElement("span", null, _this.state.error));
    });
    _this.state = {
      error: ""
    };
    return _this;
  }
  table_filter_inherits(DateRangeModal, _React$Component2);
  return table_filter_createClass(DateRangeModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      table_filter_classPrivateFieldSet(_startDate, this, undefined);
      table_filter_classPrivateFieldSet(_endDate, this, undefined);
      return /*#__PURE__*/react.createElement(Modal/* default */.A, _extends({
        show: this.props.show,
        onHide: this.onHide
      }, (0,utils/* onInputEnterDown */.yb)(function () {
        return _this2.onApplyDate();
      })), /*#__PURE__*/react.createElement(Modal/* default */.A.Header, {
        closeButton: true
      }, /*#__PURE__*/react.createElement(Modal/* default */.A.Title, null, "Custom Date Range")), /*#__PURE__*/react.createElement(Modal/* default */.A.Body, null, this.state.error ? this.renderErrorResult() : null, /*#__PURE__*/react.createElement("div", {
        className: "form-group row mb-3"
      }, /*#__PURE__*/react.createElement("label", {
        className: "col-md-4 control-label col-form-label",
        htmlFor: "startDate"
      }, "Start Date", ":"), /*#__PURE__*/react.createElement("div", {
        className: "col-md-6"
      }, /*#__PURE__*/react.createElement("div", {
        className: "input-group"
      }, /*#__PURE__*/react.createElement("input", {
        type: "datetime-local",
        className: "form-control",
        name: "startDate",
        onChange: function onChange(event) {
          return _this2.onDateChange(event, "start");
        }
      })))), /*#__PURE__*/react.createElement("div", {
        className: "form-group row mb-3"
      }, /*#__PURE__*/react.createElement("label", {
        className: "col-md-4 control-label col-form-label",
        htmlFor: "endDate"
      }, "End Date", ":"), /*#__PURE__*/react.createElement("div", {
        className: "col-md-6"
      }, /*#__PURE__*/react.createElement("div", {
        className: "input-group"
      }, /*#__PURE__*/react.createElement("input", {
        type: "datetime-local",
        className: "form-control",
        name: "endDate",
        onChange: function onChange(event) {
          return _this2.onDateChange(event, "end");
        }
      }))))), /*#__PURE__*/react.createElement(Modal/* default */.A.Footer, null, /*#__PURE__*/react.createElement(Button/* default */.A, {
        variant: "primary",
        onClick: function onClick(event) {
          return _this2.onApplyDate(event);
        }
      }, /*#__PURE__*/react.createElement("i", {
        className: "fa fa-check"
      }), "\xA0", "Apply")));
    }
  }]);
}(react.Component);
var DatePicker = /*#__PURE__*/function (_React$Component3) {
  function DatePicker(props) {
    var _this3;
    table_filter_classCallCheck(this, DatePicker);
    _this3 = table_filter_callSuper(this, DatePicker, [props]);
    table_filter_defineProperty(_this3, "getPrefix", function () {
      return _this3.props.title[0] === "[" ? "" : _this3.props.title + ": ";
    });
    table_filter_defineProperty(_this3, "showDateRangeModal", function () {
      _this3.setState({
        showModal: true
      });
    });
    table_filter_defineProperty(_this3, "hideDateRangeModal", function () {
      _this3.setState({
        showModal: false
      });
    });
    table_filter_defineProperty(_this3, "parseFilter", function (filterType, startDate, endDate) {
      var val = DatePicker.rebuildDate(filterType, startDate, endDate);
      val.title = _this3.getPrefix() + val.title;
      return val;
    });
    table_filter_defineProperty(_this3, "onCustomDateChange", function (event, start, end) {
      if (_this3.props.onChange) {
        _this3.props.onChange(event, {
          type: DatePicker.dateFilters.custom,
          start: start,
          end: end
        });
      }
      _this3.setState({
        showModal: false
      });
    });
    table_filter_defineProperty(_this3, "onBuiltInFilterClick", function (event, filterType) {
      if (!_this3.props.onChange) {
        return;
      }
      var result = _this3.parseFilter(filterType);
      _this3.props.onChange(event, {
        type: result.type,
        start: result.start
      });
    });
    table_filter_defineProperty(_this3, "renderFilters", function () {
      var list = Object.values(DatePicker.dateFilters).map(function (value) {
        if (value === DatePicker.dateFilters.custom) {
          return /*#__PURE__*/react.createElement(Dropdown/* default */.A.Item, {
            key: value,
            onClick: _this3.showDateRangeModal
          }, value);
        } else {
          return /*#__PURE__*/react.createElement(Dropdown/* default */.A.Item, {
            key: value,
            onClick: function onClick(event) {
              return _this3.onBuiltInFilterClick(event, value);
            }
          }, value);
        }
      });
      return list;
    });
    table_filter_defineProperty(_this3, "getTitleAndBtnClass", function (selectedItem) {
      if (!selectedItem || !selectedItem.type) {
        return [_this3.getPrefix() + DatePicker.dateFilters.allTime, "outline-secondary"];
      }
      var result = _this3.parseFilter(selectedItem.type, selectedItem.start, selectedItem.end);
      if (result.title.trim().lastIndexOf(DatePicker.dateFilters.allTime) >= 0) {
        return [result.title, "outline-secondary"];
      } else {
        return [result.title, "primary"];
      }
    });
    _this3.state = {
      showModal: false
    };
    return _this3;
  }
  table_filter_inherits(DatePicker, _React$Component3);
  return table_filter_createClass(DatePicker, [{
    key: "render",
    value: function render() {
      var _this$getTitleAndBtnC = this.getTitleAndBtnClass(this.props.selectedItem),
        _this$getTitleAndBtnC2 = table_filter_slicedToArray(_this$getTitleAndBtnC, 2),
        title = _this$getTitleAndBtnC2[0],
        btnClass = _this$getTitleAndBtnC2[1];
      return /*#__PURE__*/react.createElement(Dropdown/* default */.A, null, /*#__PURE__*/react.createElement(dropdown_hacker/* DropdownHacker */.G, null), /*#__PURE__*/react.createElement(Dropdown/* default */.A.Toggle, {
        variant: btnClass,
        title: title
      }, /*#__PURE__*/react.createElement("span", null, "\xA0", title, "\xA0")), /*#__PURE__*/react.createElement(Dropdown/* default */.A.Menu, {
        className: "searchable-menu"
      }, this.renderFilters(), /*#__PURE__*/react.createElement(DateRangeModal, {
        show: this.state.showModal,
        onChange: this.onCustomDateChange,
        fireHidden: this.hideDateRangeModal
      })));
    }
  }], [{
    key: "rebuildDate",
    value: function rebuildDate(filterType, startDate, endDate) {
      var start = null;
      var end = null;
      var tnow = new Date();
      var title = "";
      switch (filterType) {
        case DatePicker.dateFilters.allTime:
          title = DatePicker.dateFilters.allTime;
          break;
        case DatePicker.dateFilters.lastHour:
          start = new Date(Date.now() - 3600 * 1000);
          title = DatePicker.dateFilters.lastHour;
          break;
        case DatePicker.dateFilters.last6Hour:
          start = new Date(Date.now() - 6 * 3600 * 1000);
          title = DatePicker.dateFilters.last6Hour;
          break;
        case DatePicker.dateFilters.today:
          tnow.setHours(0, 0, 0, 0);
          title = DatePicker.dateFilters.today + " (" + tnow.toDateString() + ")";
          start = tnow;
          break;
        case DatePicker.dateFilters.month:
          tnow = new Date(tnow.getFullYear(), tnow.getMonth(), 1);
          title = DatePicker.dateFilters.month + " (" + tnow.toDateString() + " - now)";
          start = tnow;
          break;
        case DatePicker.dateFilters.quarter:
          tnow = new Date(tnow.getFullYear(), Math.floor(tnow.getMonth() / 3) * 3, 1);
          title = DatePicker.dateFilters.quarter + " (" + tnow.toDateString() + " - now)";
          start = tnow;
          break;
        case DatePicker.dateFilters.year:
          tnow = new Date(tnow.getFullYear(), 0, 1);
          title = DatePicker.dateFilters.year + " (" + tnow.toDateString() + " - now)";
          start = tnow;
          break;
        case DatePicker.dateFilters.custom:
          start = startDate;
          end = endDate;
          if (startDate) {
            title += new Date(startDate).toString();
          }
          title += " - ";
          if (endDate) {
            title += new Date(endDate).toString();
          } else {
            title += "now";
          }
          break;
        default:
          break;
      }
      return {
        type: filterType,
        start: start,
        end: end,
        title: title
      };
    }
  }]);
}(react.Component);
table_filter_defineProperty(DatePicker, "dateFilters", {
  allTime: "All-time",
  lastHour: "Last Hour",
  last6Hour: "Last 6 Hours",
  today: "Today",
  month: "Month to Date",
  quarter: "Quarter to Date",
  year: "Year to Date",
  custom: "Custom Date Range"
});
table_filter_defineProperty(DatePicker, "propTypes", {
  title: (prop_types_default()).string.isRequired,
  /**
   * The selected item. {type: filterType, start: new Date(), end: new Date()}
   * The value is not required apart from the custom date range
   */
  selectedItem: (prop_types_default()).object,
  /**
   * A function that is called when the date range is changed.
   *  (event, selectedItemObj)
   *    The event is the element.
   *    The selectedItemObj structure is {type: DatePicker.dateFilters.custom, start: start, end: end}
   */
  onChange: (prop_types_default()).func
});
var propTypes = {
  /**
   * All tracked headers and them values
   * Example:
   * const commonFilters = [
   *   {odataKey: "timestamp", label: "[Data Range]", options: [], isDatePicker: true},
   *   {odataKey: "connectorType", label: "All Connector Types", options: ["API", "MySQL", "PDF"], isDatePicker: false},
   *   {odataKey: "status", label: "All Statuses", options: ["Success", "Error", "Pending"], isDatePicker: false, i18nOptions: ["成功", "错误", "等待"]},
   * ];
   */
  commonFilters: prop_types_default().arrayOf((prop_types_default()).object).isRequired,
  /**
   * All tracked headers and them values
   * Example:
   * const moreFilters = [
   *   {odataKey: "senderId", label: "Sender Id", options: ["APEX_API", "Twitter"], isDatePicker: false},
   *   {odataKey: "receiverId", label: "Receiver Id", options: ["ByteDance", "BuildYourDream"], isDatePicker: false}
   * ];
   */
  moreFilters: prop_types_default().arrayOf((prop_types_default()).object),
  /**
   * The label text of dropdown for the more filters
   */
  moreFilterLabel: (prop_types_default()).string,
  /**
   * When the filter or search box change
   *  function (odataQuery, searchText, selectedMap)
   *  odataQuery: A odata query string is generated by all the filters
   *  searchText: The string comes from the search box.
   *  selectedMap: The map of selected item in dropdown lists.
   *                <"DropdownLabelText", [selectedItemNames]>
   */
  onChange: (prop_types_default()).func,
  /**
   * The key is used to save current filter status into local storage
   */
  storageKey: (prop_types_default()).string,
  /**
   * When the toggle button is clicked
   *  function (label, nextShow)
   *  label: The string value of label in option.
   *  nextShow: The dropdown menu shows or closes.
   */
  onToggle: (prop_types_default()).func
};
var propsDefaults = {
  commonFilters: [],
  moreFilters: null,
  moreFilterLabel: null,
  onChange: null,
  storageKey: null,
  onToggle: null
};
var _TableFilter = function TableFilter(props) {
  var initFilter = (0,react.useMemo)(function () {
    return _TableFilter.loadFilter(props.storageKey, [].concat(table_filter_toConsumableArray(props.commonFilters), table_filter_toConsumableArray(props.moreFilters || [])));
  }, [props.storageKey, props.commonFilters, props.moreFilters]);
  var _useState5 = (0,react.useState)((initFilter === null || initFilter === void 0 ? void 0 : initFilter.selectedMap) || new Map()),
    _useState6 = table_filter_slicedToArray(_useState5, 2),
    selectedMap = _useState6[0],
    setSelectedMap = _useState6[1];
  var _useState7 = (0,react.useState)((initFilter === null || initFilter === void 0 ? void 0 : initFilter.searchText) || ""),
    _useState8 = table_filter_slicedToArray(_useState7, 2),
    searchKeyword = _useState8[0],
    setSearchKeyWord = _useState8[1];
  var onDropdownChange = function onDropdownChange(event, label, selectedItems) {
    var map = new Map(selectedMap);
    map.set(label, selectedItems);
    setSelectedMap(map);
    onSearch(map);
  };
  var onSearch = function onSearch(selectedMap) {
    new StorageUtils().saveFilter(props.storageKey, searchKeyword, selectedMap, [].concat(table_filter_toConsumableArray(props.commonFilters), table_filter_toConsumableArray(props.moreFilters || [])));
    if (!props.onChange) {
      return;
    }
    var odataQuery = _TableFilter.buildODataQuery(selectedMap, props.commonFilters, props.moreFilters, props.moreFilterLabel);
    props.onChange(odataQuery, searchKeyword, new Map(selectedMap));
  };
  var onInput = function onInput(text) {
    setSearchKeyWord(text);
  };
  var onMoreFilterChange = function onMoreFilterChange(event, label, filterList, selectedItems) {
    var map = new Map(selectedMap);
    filterList.forEach(function (filter) {
      var foundInList = selectedItems.find(function (element) {
        return element === filter.label;
      });
      var foundInMap = map.has(filter.label);
      if (foundInList && !foundInMap) {
        map.set(filter.label, []);
      } else if (!foundInList && foundInMap) {
        map["delete"](filter.label);
      }
    });
    map.set(label, selectedItems);
    setSelectedMap(map);
    onSearch(map);
  };
  var onRemoveFilter = function onRemoveFilter(event, moreFilterLabel, filterLabel) {
    var map = new Map(selectedMap);
    map["delete"](filterLabel);
    var selectedFilterList = map.get(moreFilterLabel);
    var index = selectedFilterList.findIndex(function (element) {
      return element === filterLabel;
    });
    if (-1 === index) {
      console.log("Warning: The ".concat(filterLabel, " doesn't find in the selected header list."));
    } else {
      selectedFilterList.splice(index, 1);
    }
    map.set(moreFilterLabel, selectedFilterList);
    setSelectedMap(map);
    onSearch(map);
  };
  var onResetFilters = function onResetFilters() {
    var map = new Map();
    new StorageUtils().saveFilter(props.storageKey, searchKeyword, map);
    setSelectedMap(map);
    onSearch(map);
  };
  var _onToggle = function onToggle(label, nextShow) {
    if (props.onToggle) {
      props.onToggle(label, nextShow);
    }
  };
  var getSelectedItemList = function getSelectedItemList(key, isDate) {
    if (selectedMap.has(key)) {
      return selectedMap.get(key);
    }
    return isDate ? {} : [];
  };
  var getPrefixForAll = function getPrefixForAll() {
    return "All" + " ";
  };
  var renderCommonFilters = function renderCommonFilters(filterList) {
    var components = filterList.map(function (filter) {
      if (filter.isDatePicker) {
        return /*#__PURE__*/react.createElement(DatePicker, {
          key: filter.label,
          title: filter.label,
          onChange: function onChange(event, selectedDates) {
            return onDropdownChange(event, filter.label, selectedDates);
          },
          selectedItem: getSelectedItemList(filter.label, true)
        });
      } else {
        return /*#__PURE__*/react.createElement(SearchableDropdown, {
          key: filter.label,
          onChange: function onChange(event, selectedItems) {
            return onDropdownChange(event, filter.label, selectedItems);
          },
          onToggle: function onToggle(nextShow) {
            return _onToggle(filter.label, nextShow);
          },
          itemList: filter.options,
          i18nList: filter.i18nOptions,
          checkedItemList: getSelectedItemList(filter.label),
          title: filter.label,
          titlePrefix: getPrefixForAll(),
          mergeCheckItems: filter.mergeCheckItems
        });
      }
    });
    return components;
  };
  var renderMoreFilters = function renderMoreFilters(moreFilterLabel, filterList, selectedIdMap) {
    if (!filterList) {
      return null;
    }
    var components = [];
    var moreFilters = [];
    var _loop = function _loop(i) {
      moreFilters.push(filterList[i].label);
      if (selectedIdMap.has(filterList[i].label)) {
        components.push(/*#__PURE__*/react.createElement(SearchableDropdown, {
          key: filterList[i].label,
          onChange: function onChange(event, selectedItems) {
            return onDropdownChange(event, filterList[i].label, selectedItems);
          },
          onToggle: function onToggle(nextShow) {
            return _onToggle(filterList[i].label, nextShow);
          },
          splitDropdown: true,
          nonDropdownBtnIcon: "fa-circle-x",
          nonDropdownBtnClick: function nonDropdownBtnClick(event) {
            return onRemoveFilter(event, moreFilterLabel, filterList[i].label);
          },
          itemList: filterList[i].options,
          checkedItemList: getSelectedItemList(filterList[i].label),
          title: filterList[i].label,
          titlePrefix: getPrefixForAll()
        }));
      }
    };
    for (var i = 0; i < filterList.length; i++) {
      _loop(i);
    }
    components.push(/*#__PURE__*/react.createElement(SearchableDropdown, {
      key: moreFilterLabel,
      onChange: function onChange(event, selectedItems) {
        return onMoreFilterChange(event, moreFilterLabel, filterList, selectedItems);
      },
      onToggle: function onToggle(nextShow) {
        return _onToggle(moreFilterLabel, nextShow);
      },
      itemList: moreFilters,
      checkedItemList: getSelectedItemList(moreFilterLabel),
      title: moreFilterLabel,
      btnIcon: "fa-plus"
    }));
    return components;
  };
  var renderResetFilter = function renderResetFilter(selectedIdMap) {
    var _iterator = table_filter_createForOfIteratorHelper(selectedIdMap),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = table_filter_slicedToArray(_step.value, 2),
          itemList = _step$value[1];
        if (!itemList) {
          continue;
        }
        if (Array.isArray(itemList) && itemList.length > 0 || Object.entries(itemList).length > 0) {
          return /*#__PURE__*/react.createElement(ResetFilter, {
            key: "Reset Filters",
            onClick: function onClick() {
              return onResetFilters();
            }
          });
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };
  return /*#__PURE__*/react.createElement("div", {
    className: "table-filter classic-table-filter"
  }, /*#__PURE__*/react.createElement(SearchBar, {
    defaultValue: searchKeyword,
    onClick: function onClick() {
      return onSearch(selectedMap);
    },
    onChange: onInput
  }), /*#__PURE__*/react.createElement("div", {
    className: "table-filter-item row row-cols-auto g-2"
  }, renderCommonFilters(props.commonFilters), renderMoreFilters(props.moreFilterLabel, props.moreFilters, selectedMap), renderResetFilter(selectedMap)));
};

_TableFilter.prototype = propTypes;
_TableFilter.defaultProps = propsDefaults;
_TableFilter.loadFilter = function (storageKey, commonFilters) {
  var filter = new StorageUtils().loadFilter(storageKey, commonFilters);

  // Update date via date type
  if (!commonFilters) {
    return filter;
  }
  commonFilters.forEach(function (filterOption) {
    if (!filterOption.isDatePicker) {
      return;
    }
    if (filter.selectedMap.has(filterOption.label)) {
      var dateVal = filter.selectedMap.get(filterOption.label);
      dateVal = DatePicker.rebuildDate(dateVal.type, dateVal.start, dateVal.end);
      filter.selectedMap.set(filterOption.label, dateVal);
    }
  });
  return filter;
};
_TableFilter.buildODataQuery = function (selectedMap, commonFilters, moreFilters, moreFilterLabel) {
  var odataQuery = "";
  if (!selectedMap) {
    return odataQuery;
  }
  selectedMap.forEach(function (idList, label) {
    if (label === moreFilterLabel) {
      return;
    }
    var query = "";
    var filter = _TableFilter.getFilter(label, commonFilters, moreFilters);
    if (filter && filter.isDatePicker) {
      query = _TableFilter.getDateQuery(filter.odataKey, idList);
    } else {
      if (idList.length > 0) {
        if (filter) {
          query = _TableFilter.odataInArray(filter.odataKey, idList);
        } else {
          query = _TableFilter.odataInArray(label, idList);
          console.log("Unable to find specific filter by label text(".concat(label, ")"));
        }
      }
    }
    if (odataQuery === "") {
      odataQuery = query;
    } else if (query) {
      odataQuery += " and " + query;
    }
  });
  return odataQuery;
};
_TableFilter.getDateQuery = function (odataKey, dateList) {
  var dateTimeQuery = "";
  if (dateList.start && dateList.end) {
    dateTimeQuery = odataKey + " ge " + (0,utils/* odataEscape */.H7)(new Date(dateList.start).toISOString());
    dateTimeQuery += " and " + odataKey + " lt " + (0,utils/* odataEscape */.H7)(new Date(dateList.end).toISOString());
  } else if (dateList.start) {
    dateTimeQuery = odataKey + " ge " + (0,utils/* odataEscape */.H7)(new Date(dateList.start).toISOString());
  } else if (dateList.end) {
    dateTimeQuery = odataKey + " lt " + (0,utils/* odataEscape */.H7)(new Date(dateList.end).toISOString());
  }
  return dateTimeQuery;
};
_TableFilter.getFilter = function (label, commonFilters, moreFilters) {
  var filter = null;
  if (commonFilters) {
    filter = commonFilters.find(function (filter) {
      return filter.label === label;
    });
  }
  if (filter) {
    return filter;
  }
  if (moreFilters) {
    return moreFilters.find(function (filter) {
      return filter.label === label;
    });
  }
  return undefined;
};
_TableFilter.odataInArray = function (column, list) {
  if (!list || list.length <= 0) {
    return "";
  }
  var query = "";
  var hasEmptyStr = false;
  list.forEach(function (element, index) {
    if (0 !== index) {
      query += ", ";
    }
    if (!element) {
      hasEmptyStr = true;
    }
    query += (0,utils/* odataEscape */.H7)(element);
  });
  return hasEmptyStr ? "(".concat(column, " in (").concat(query, ") or ").concat(column, " eq null)") : "".concat(column, " in (").concat(query, ") ");
};
var _StorageUtils_brand = /*#__PURE__*/new WeakSet();
var StorageUtils = /*#__PURE__*/function () {
  function StorageUtils() {
    table_filter_classCallCheck(this, StorageUtils);
    _classPrivateMethodInitSpec(this, _StorageUtils_brand);
  }
  return table_filter_createClass(StorageUtils, [{
    key: "defaultStore",
    value: function defaultStore() {
      return {
        searchText: "",
        selectedMap: new Map()
      };
    }
  }, {
    key: "saveFilter",
    value: function saveFilter(storageKey, searchText, selectedMap, filterDefines) {
      if (!filterDefines) {
        table_filter_assertClassBrand(_StorageUtils_brand, this, _saveFilter).call(this, storageKey, searchText, selectedMap);
        return;
      }
      var newMap = new Map();
      var _iterator2 = table_filter_createForOfIteratorHelper(selectedMap),
        _step2;
      try {
        var _loop2 = function _loop2() {
          var _step2$value = table_filter_slicedToArray(_step2.value, 2),
            key = _step2$value[0],
            value = _step2$value[1];
          var define = filterDefines.find(function (element) {
            return element.label === key;
          });
          if (define) {
            newMap.set(define.odataKey, value);
          } else {
            newMap.set(key, value);
          }
        };
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          _loop2();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      table_filter_assertClassBrand(_StorageUtils_brand, this, _saveFilter).call(this, storageKey, searchText, newMap);
    }
  }, {
    key: "loadFilter",
    value: function loadFilter(storageKey, filterDefines) {
      var filter = table_filter_assertClassBrand(_StorageUtils_brand, this, _loadFilter).call(this, storageKey);
      if (!filterDefines || filter.selectedMap.size <= 0) {
        return filter;
      }
      filterDefines.forEach(function (element) {
        if (filter.selectedMap.has(element.odataKey)) {
          if (element.label !== element.odataKey) {
            filter.selectedMap.set(element.label, filter.selectedMap.get(element.odataKey));
            filter.selectedMap["delete"](element.odataKey);
          }
        }
      });
      return filter;
    }
  }, {
    key: "loadFromStorage",
    value: function loadFromStorage() {
      var _window;
      var state = (_window = window) === null || _window === void 0 || (_window = _window.localStorage) === null || _window === void 0 ? void 0 : _window.getItem(StorageUtils.FILTER_STORE_KEY);
      try {
        return state ? JSON.parse(state) : {};
      } catch (_unused) {
        return {};
      }
    }
  }, {
    key: "saveToStorage",
    value: function saveToStorage(settings) {
      var _window2;
      (_window2 = window) === null || _window2 === void 0 || (_window2 = _window2.localStorage) === null || _window2 === void 0 || _window2.setItem(StorageUtils.FILTER_STORE_KEY, JSON.stringify(settings));
    }
  }]);
}();
function _saveFilter(storageKey, searchText, selectedMap) {
  if (!storageKey) {
    return;
  }
  var filter = this.defaultStore();
  if (searchText) {
    filter.searchText = searchText;
  }
  if (selectedMap) {
    filter.selectedMap = Object.fromEntries(selectedMap);
  }
  var settings = this.loadFromStorage();
  settings[storageKey] = filter;
  this.saveToStorage(settings);
}
function _loadFilter(storageKey) {
  if (!storageKey) {
    return this.defaultStore();
  }
  var settings = this.loadFromStorage();
  if (Object.prototype.hasOwnProperty.call(settings, storageKey)) {
    var filter = this.defaultStore();
    filter.searchText = settings[storageKey].searchText;
    filter.selectedMap = new Map(Object.entries(settings[storageKey].selectedMap));
    return filter;
  }
  return this.defaultStore();
}
table_filter_defineProperty(StorageUtils, "FILTER_STORE_KEY", "cdata.arc.tablefilter");

/***/ }),

/***/ 25337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  LW: () => (/* binding */ FileToHex),
  XH: () => (/* binding */ FormatFileSize),
  _c: () => (/* binding */ FormatProcessingTime),
  F4: () => (/* binding */ FormatReactNode),
  gn: () => (/* binding */ FormatStatus),
  FJ: () => (/* binding */ FormatString),
  W9: () => (/* binding */ FormatTimestamp),
  Gf: () => (/* binding */ GetConnectorType),
  nT: () => (/* binding */ GetFileNameWithoutExt),
  jR: () => (/* binding */ GetFilenameExt),
  Dd: () => (/* binding */ GetTimeZoneDisplayName),
  dV: () => (/* binding */ RegisterComponent),
  u: () => (/* binding */ base64Decode),
  KA: () => (/* binding */ base64Encode),
  lW: () => (/* binding */ copyToClipboard),
  Hd: () => (/* binding */ equalIgnoreCase),
  Nt: () => (/* binding */ escapeRegExp),
  Xb: () => (/* binding */ evalTemplate),
  Fd: () => (/* binding */ fetchData),
  Td: () => (/* binding */ formatReactNode),
  JT: () => (/* binding */ formatString),
  Nf: () => (/* binding */ genElemId),
  G4: () => (/* binding */ getResourceLastModified),
  hz: () => (/* binding */ getResultErrorMessage),
  nY: () => (/* binding */ getValidXMLElementName),
  CO: () => (/* binding */ getValueAsBool),
  H7: () => (/* binding */ odataEscape),
  yb: () => (/* binding */ onInputEnterDown),
  w: () => (/* binding */ parseSingleLineCsv),
  wf: () => (/* binding */ renderReactModalByParent),
  LA: () => (/* binding */ responsiveTitle),
  ct: () => (/* binding */ securityRand),
  A3: () => (/* binding */ setResourceLastModified),
  Mg: () => (/* binding */ toFixed),
  jn: () => (/* binding */ useClickOutsideCheck),
  At: () => (/* binding */ useDocumentReady),
  GE: () => (/* binding */ verifyEmailAddress),
  $A: () => (/* binding */ withLoading),
  VL: () => (/* binding */ withQuery),
  fX: () => (/* binding */ xmlEscape)
});

// UNUSED EXPORTS: getComponentName, verifyIPFormat

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
// EXTERNAL MODULE: ../../.react-shared/axios/index.jsx
var axios = __webpack_require__(29029);
// EXTERNAL MODULE: external "{}"
var external_ = __webpack_require__(87963);
;// CONCATENATED MODULE: ./src/components/utils/constants.js

var TOKENS = {
  DATE_LOCATION: 'US'
};
;// CONCATENATED MODULE: ./src/components/utils/index.js
var _excluded = ["loading"],
  _excluded2 = ["url", "params", "multiple", "onError"];
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





function FormatString(pattern, args) {
  if (!Array.isArray(args)) {
    args = Array.prototype.slice.call(arguments, 1);
  }
  return pattern.replace(/{([0-9]+)}/g, function (m, i) {
    return args[parseInt(i)];
  });
}
function FormatReactNode(pattern, args) {
  if (!Array.isArray(args)) {
    args = Array.prototype.slice.call(arguments, 1);
  }
  var parts = pattern.split(/{([0-9]+)}/g);
  var result = [];
  for (var i = 0; i < parts.length; i++) {
    if (i % 2 === 0) {
      result.push(parts[i]);
    } else {
      var argIndex = parseInt(parts[i], 10);
      result.push(args[argIndex]);
    }
  }
  return /*#__PURE__*/react.createElement.apply(react, [react.Fragment, null].concat(result));
}
function RegisterComponent(Component, name) {
  var _window;
  if (!((_window = window) !== null && _window !== void 0 && (_window = _window.rsb) !== null && _window !== void 0 && _window.registerComponent)) throw new Error("The function rsb.registerComponent does not exist.");
  var compName = name || getComponentName(Component);
  window.rsb.registerComponent(compName, function (ele, props) {
    if (window.self !== window.top && window.parent.reactModalMgr) {
      var unmount = window.parent.reactModalMgr.render(compName, props);
      if (unmount) return unmount;
    }
    var root = client.createRoot(ele);
    root.render(/*#__PURE__*/react.createElement(Component, props));
    return function () {
      return root.unmount();
    };
  });
}
var renderReactModalByParent = function renderReactModalByParent(name, props) {
  var id = (0,react.useId)();
  var unmount = (0,react.useRef)(null);
  (0,react.useEffect)(function () {
    return function () {
      var _unmount$current;
      return (_unmount$current = unmount.current) === null || _unmount$current === void 0 ? void 0 : _unmount$current.call();
    };
  }, []);
  if (window.self !== window.top && window.parent.reactModalMgr != null) {
    var _unmount$current2, _props$key;
    (_unmount$current2 = unmount.current) === null || _unmount$current2 === void 0 || _unmount$current2.call();
    unmount.current = window.parent.reactModalMgr.render(name, _objectSpread(_objectSpread({}, props), {}, {
      key: "".concat(id, "_").concat((_props$key = props.key) !== null && _props$key !== void 0 ? _props$key : name)
    }));
  }
  return unmount.current != null;
};
function getComponentName(Component) {
  return Component.displayName || Component.name || "Component";
}
var _ref = function () {
    var resLastModifiedCache = new Map();
    var _defaultLastModified = null;
    var _getLatestLastModified = function _getLatestLastModified(lastModified, defaultLastModified) {
      if (!defaultLastModified || defaultLastModified === lastModified) return lastModified;else if (!lastModified) return defaultLastModified;else return new Date(lastModified).getTime() >= new Date(defaultLastModified).getTime() ? lastModified : defaultLastModified;
    };
    return [function (resId, lastModified) {
      var _window2, _window2$setResourceL;
      if (!lastModified) return;
      if (isNaN(new Date(lastModified))) lastModified = lastModified.split(", ").slice(-2).join(", ");
      if (!lastModified || isNaN(new Date(lastModified))) return;
      (_window2 = window) === null || _window2 === void 0 || (_window2 = _window2.rsb) === null || _window2 === void 0 || (_window2$setResourceL = _window2.setResourceLastModified) === null || _window2$setResourceL === void 0 || _window2$setResourceL.call(_window2, resId, lastModified);
      resLastModifiedCache.set(resId, lastModified);
      _defaultLastModified = _getLatestLastModified(lastModified, _defaultLastModified);
    }, function (resId) {
      var _window3, _window3$getResourceL, _window4;
      var lastModified = _getLatestLastModified((_window3 = window) === null || _window3 === void 0 || (_window3 = _window3.rsb) === null || _window3 === void 0 || (_window3$getResourceL = _window3.getResourceLastModified) === null || _window3$getResourceL === void 0 ? void 0 : _window3$getResourceL.call(_window3, resId), _defaultLastModified || ((_window4 = window) === null || _window4 === void 0 || (_window4 = _window4.arc) === null || _window4 === void 0 || (_window4 = _window4.hooks) === null || _window4 === void 0 ? void 0 : _window4.defaultLastModified));
      return _getLatestLastModified(resLastModifiedCache.get(resId), lastModified);
    }];
  }(),
  _ref2 = _slicedToArray(_ref, 2),
  setResourceLastModified = _ref2[0],
  getResourceLastModified = _ref2[1];

function fetchData(_x, _x2, _x3) {
  return _fetchData.apply(this, arguments);
}
function _fetchData() {
  _fetchData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(controller, url, params) {
    var _response$data$items;
    var response, items, error;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return axios/* default */.A.get(url, {
            signal: controller.signal,
            params: _objectSpread({
              "@json": true,
              "nonce": securityRand()
            }, params)
          });
        case 2:
          response = _context2.sent;
          items = (_response$data$items = response.data.items) !== null && _response$data$items !== void 0 ? _response$data$items : [];
          error = getResultErrorMessage(items);
          return _context2.abrupt("return", {
            error: error,
            items: items
          });
        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _fetchData.apply(this, arguments);
}
function withLoading(Component, Placeholder) {
  var LoadingComponent = /*#__PURE__*/react.forwardRef(function (props, ref) {
    var loading = props.loading,
      compProps = _objectWithoutProperties(props, _excluded);
    if (loading) {
      if (/*#__PURE__*/react.isValidElement(Placeholder)) return /*#__PURE__*/react.createElement(react.Fragment, null, Placeholder);
      return Placeholder ? /*#__PURE__*/react.createElement(Placeholder, compProps) : /*#__PURE__*/react.createElement("p", {
        className: "placeholder-glow"
      }, /*#__PURE__*/react.createElement("span", {
        className: "placeholder col-6"
      }));
    } else {
      return /*#__PURE__*/react.createElement(Component, _extends({
        ref: ref
      }, compProps));
    }
  });
  if (false) {}
  return LoadingComponent;
}
function withQuery(Component) {
  var QueryComponent = /*#__PURE__*/react.forwardRef(function (props, ref) {
    var url = props.url,
      params = props.params,
      multiple = props.multiple,
      onError = props.onError,
      compProps = _objectWithoutProperties(props, _excluded2);
    var _useState = (0,react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];
    (0,react.useEffect)(function () {
      var controller = new AbortController();
      _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var paramsObj, result;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              paramsObj = JSON.parse(params || "{}");
              _context.prev = 1;
              _context.next = 4;
              return fetchData(controller, url, paramsObj);
            case 4:
              result = _context.sent;
              onError && result.error && onError(result.error, url, paramsObj, compProps);
              if (multiple === true) {
                setData({
                  entities: !result.error ? result.items : []
                });
              } else {
                setData(!result.error && result.items.length ? result.items[0] : {});
              }
              _context.next = 12;
              break;
            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              onError && !axios/* default */.A.isCancel(_context.t0) && onError(_context.t0.message || _context.t0, url, paramsObj, compProps);
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 9]]);
      }))();
      return function () {
        data && setData(null);
        controller.abort();
      };
    }, [url, params]);
    return /*#__PURE__*/react.createElement(Component, _extends({
      ref: ref,
      loading: data == null
    }, data, compProps));
  });
  if (false) {}
  return QueryComponent;
}
function getResultErrorMessageByIndex(result, i) {
  var errorMsg = null;
  if (result && result.length > i) {
    errorMsg = result[i]["rsb:emessage"] || result[i]["errormessage"];
    if (errorMsg === "") {
      errorMsg = 'Unknown error';
    }
  }
  return errorMsg;
}
function getResultErrorMessage(result) {
  return getResultErrorMessageByIndex(result, 0);
}
function evalTemplate(template, args) {
  for (var name in args) {
    if (name && args.hasOwnProperty(name)) {
      var _args$name;
      template = template.replace(new RegExp(escapeRegExp("$" + name + "$"), "gm"), (_args$name = args[name]) !== null && _args$name !== void 0 ? _args$name : "");
    }
  }
  return template;
}
function escapeRegExp(text) {
  return text === null || text === void 0 ? void 0 : text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function toFixed(number, fractionDigits) {
  return number && Number(number).toFixed(fractionDigits || 2).replace(/\.?0+$/, "") || "0";
}
function FormatTimestamp(dateTime) {
  var _window5;
  var hour12 = (((_window5 = window) === null || _window5 === void 0 || (_window5 = _window5.arc) === null || _window5 === void 0 || (_window5 = _window5.hooks) === null || _window5 === void 0 ? void 0 : _window5.timeFormat) || "24") === "12";
  var date = null;
  if (dateTime instanceof Date) {
    date = dateTime;
  } else if ((dateTime === null || dateTime === void 0 ? void 0 : dateTime.length) > 0) {
    date = new Date(dateTime);
  }
  if (date != null) {
    if (isNaN(date)) {
      return "";
    }
    var options = {
      hour12: hour12,
      year: TOKENS.DATE_LOCATION.toLowerCase() === "us" ? "2-digit" : "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    };
    var ms = date.getMilliseconds();
    if (ms !== 0) {
      options.fractionalSecondDigits = 3;
    }
    return new Intl.DateTimeFormat("default", options).format(date);
  }
  return dateTime;
}
function GetTimeZoneDisplayName(timeZone) {
  try {
    var _Intl$DateTimeFormat$;
    var locales = navigator.language || navigator.userLanguage;
    var offset = (_Intl$DateTimeFormat$ = new Intl.DateTimeFormat(locales, {
      timeZone: timeZone,
      timeZoneName: "longOffset"
    }).formatToParts(new Date()).find(function (part) {
      return part.type === "timeZoneName";
    }).value) === null || _Intl$DateTimeFormat$ === void 0 ? void 0 : _Intl$DateTimeFormat$.replace("GMT", "UTC");
    var displayName = new Intl.DateTimeFormat(locales, {
      timeZone: timeZone,
      timeZoneName: "long"
    }).formatToParts(new Date()).find(function (part) {
      return part.type === "timeZoneName";
    }).value;
    return offset + " " + displayName;
  } catch (e) {
    return timeZone;
  }
}
function FormatFileSize(size) {
  var unitSet = ["bytes", "KB", "MB", "GB"];
  if (size !== "" && size >= 0) {
    var unit = unitSet[0];
    for (var i = 0; i < unitSet.length; i++) {
      unit = unitSet[i];
      if (size >= 1024 && i < unitSet.length - 1) {
        size = size / 1024;
      } else {
        break;
      }
    }
    if (size < 10) size = parseInt(size * 100) / 100;else if (size < 100) size = parseInt(size * 10) / 10;else size = parseInt(size);
    return size + " " + unit;
  }
  return "";
}
function GetFilenameExt(path) {
  if (path) {
    return path.substr((~-path.lastIndexOf(".") >>> 0) + 1);
  }
  return path;
}
function GetFileNameWithoutExt(filename) {
  if (filename) {
    filename = filename.split(/[/\\]/).pop();
    var lastDotIndex = filename.lastIndexOf('.');
    if (lastDotIndex === -1 || lastDotIndex === 0) {
      return filename;
    }
    return filename.substring(0, lastDotIndex);
  }
  return filename;
}
function FileToHex(_x4) {
  return _FileToHex.apply(this, arguments);
}
function _FileToHex() {
  _FileToHex = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(file) {
    var arrayBuffer, uint8Array, hexString, _iterator3, _step3, _byte, hex;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return file.arrayBuffer();
        case 2:
          arrayBuffer = _context3.sent;
          uint8Array = new Uint8Array(arrayBuffer);
          hexString = "";
          _iterator3 = _createForOfIteratorHelper(uint8Array);
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              _byte = _step3.value;
              hex = _byte.toString(16).padStart(2, "0");
              hexString += hex;
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          return _context3.abrupt("return", hexString.toUpperCase());
        case 8:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _FileToHex.apply(this, arguments);
}
function FormatStatus(status) {
  var _status;
  if (!status) status = "Unsent";
  var lowerStatus = (_status = status) === null || _status === void 0 ? void 0 : _status.toLowerCase();
  var className = "text-" + lowerStatus;
  if (lowerStatus == "error") {
    className = "text-danger";
  }
  return /*#__PURE__*/react.createElement("span", {
    className: className
  }, status);
}
;
function FormatProcessingTime(processingTime) {
  var text = [];
  var hour = Math.floor(processingTime / 3600000);
  if (hour > 0) {
    text.push(hour + "h");
  }
  processingTime = processingTime % 3600000;
  var minute = Math.floor(processingTime / 60000);
  if (minute > 0) {
    text.push(minute + "m");
  }
  processingTime = processingTime % 60000;
  var second = Math.floor(processingTime / 1000);
  if (second > 0) {
    text.push(second + "s");
  }
  var millisecond = processingTime % 1000;
  if (processingTime >= 0) {
    text.push(millisecond + "ms");
  }
  return text.join(" ");
}
function odataEscape(str) {
  return "'" + (str || "").replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'";
}
function getValueAsBool(val, defaultValue) {
  if (defaultValue === undefined || defaultValue == null) defaultValue = false;else defaultValue = getValueAsBool(defaultValue);
  if (val === undefined || val == null) return defaultValue;
  if (typeof val === "boolean") return val;
  return /^\s*(true|1|on|yes|y)\s*$/i.test(val);
}
function securityRand() {
  if (Int32Array && window.crypto && window.crypto.getRandomValues) {
    var rands = new Uint32Array(1);
    window.crypto.getRandomValues(rands);
    return rands[0];
  } else {
    return Math.random();
  }
}
function genElemId(tagName) {
  return tagName + "_" + nextIndex();
}
var nextIndex = function () {
  var index = 0;
  return function () {
    return index++;
  };
}();
function GetConnectorType(workspaceId, connectorId) {
  var _window$rsb;
  /* Rely on ~/includes/connectorList.rst */
  var connectorList = (_window$rsb = window.rsb) === null || _window$rsb === void 0 ? void 0 : _window$rsb.connectorList;
  if (connectorList != null) {
    var workspace = connectorList[workspaceId.toLowerCase()];
    if (workspace != null) {
      var _workspace$connectors;
      return (_workspace$connectors = workspace.connectors[connectorId.toLowerCase()]) === null || _workspace$connectors === void 0 ? void 0 : _workspace$connectors.type;
    }
  }
  return null;
}
function equalIgnoreCase(lhs, rhs) {
  return (lhs === null || lhs === void 0 ? void 0 : lhs.toLowerCase()) === (rhs === null || rhs === void 0 ? void 0 : rhs.toLowerCase());
}
var useOutsideEventCheck = function useOutsideEventCheck(eventName, onOutsideEvent) {
  var eventNames = Array.isArray(eventName) ? eventName : [eventName];
  var ref = react.useRef(null);
  react.useEffect(function () {
    if (!onOutsideEvent) return;
    var handleOutsideEvent = function handleOutsideEvent(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onOutsideEvent();
      }
    };
    eventNames.forEach(function (eventName) {
      return document.addEventListener(eventName, handleOutsideEvent);
    });
    return function () {
      return eventNames.forEach(function (eventName) {
        return document.removeEventListener(eventName, handleOutsideEvent);
      });
    };
  }, [ref, eventNames, onOutsideEvent]);
  return ref;
};
var useClickOutsideCheck = function useClickOutsideCheck(onClickOutside, eventName) {
  return useOutsideEventCheck(eventName !== null && eventName !== void 0 ? eventName : "mousedown", onClickOutside);
};
var base64Encode = function base64Encode(str) {
  return btoa(unescape(encodeURIComponent(str)));
};
var base64Decode = function base64Decode(str) {
  return decodeURIComponent(escape(atob(str)));
};
function verifyEmailAddress(email) {
  return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email.trim());
}
var getValidXMLElementName = function getValidXMLElementName(name) {
  name = name.replace(/[^\u0300-\u036F\u203F-\u2040-.0-9_a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u200FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/g, "_");
  return name && /[_a-zA-Z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u200FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/.test(name.charAt(0)) ? name : "_" + name;
};
var verifyIPFormat = function verifyIPFormat(ipStr) {
  var ipPartPatterns = [/^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/, /^\*$/, /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)-(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/];
  var parts = ipStr.split('.');
  if (parts.length !== 4) {
    return false;
  }
  var _iterator = _createForOfIteratorHelper(parts),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var part = _step.value;
      var isValid = false;
      var _iterator2 = _createForOfIteratorHelper(ipPartPatterns),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var pattern = _step2.value;
          if (pattern.test(part)) {
            if (pattern === ipPartPatterns[2]) {
              var _part$split$map = part.split('-').map(Number),
                _part$split$map2 = _slicedToArray(_part$split$map, 2),
                start = _part$split$map2[0],
                end = _part$split$map2[1];
              if (start > end) {
                return false;
              }
            }
            isValid = true;
            break;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if (!isValid) {
        return false;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return true;
};
var xmlEscape = function xmlEscape(text) {
  return (text || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
};
var useDocumentReady = function useDocumentReady() {
  var _useState3 = (0,react.useState)(document.readyState === "complete"),
    _useState4 = _slicedToArray(_useState3, 2),
    ready = _useState4[0],
    setReady = _useState4[1];
  (0,react.useEffect)(function () {
    var onLoad = setReady.bind(null, true);
    window.addEventListener("load", onLoad);
    return function () {
      return window.removeEventListener("load", onLoad);
    };
  }, []);
  return ready;
};
var responsiveTitle = function responsiveTitle(title, innerElement, innerFirst) {
  return {
    onMouseEnter: function onMouseEnter(event) {
      var tempElement = document.createElement("div");
      tempElement.innerHTML = title;
      var element = event.target;
      var textElement = element;
      if (innerElement) {
        while (textElement.childElementCount > 0) {
          textElement = textElement.children[innerFirst ? 0 : textElement.childElementCount - 1];
        }
      }
      if (element.clientWidth < element.scrollWidth) {
        textElement.title = tempElement.innerText;
      } else {
        textElement.title = "";
      }
      tempElement.remove();
    }
  };
};
var onInputEnterDown = function onInputEnterDown(callback) {
  return {
    onKeyDown: function onKeyDown(event) {
      if (event.key === "Enter" && event.target.tagName.toLowerCase() === "input") {
        if (callback != null) {
          event.preventDefault();
          callback();
        }
      }
    }
  };
};
var copyToClipboard = function copyToClipboard(text, onCopyDone) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(onCopyDone);
  } else {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    onCopyDone === null || onCopyDone === void 0 || onCopyDone.call(null);
  }
};
function formatString(pattern) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return pattern.replace(/{(\d+)}/g, function (match, index) {
    var _args$argIndex;
    var argIndex = parseInt(index, 10);
    return (_args$argIndex = args[argIndex]) !== null && _args$argIndex !== void 0 ? _args$argIndex : match;
  });
}
function formatReactNode(pattern) {
  var parts = pattern.split(/{(\d+)}/g);
  var result = [];
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  for (var index = 0; index < parts.length; index++) {
    if (index % 2 === 0) {
      parts[index] && result.push(parts[index]);
    } else {
      var argIndex = parseInt(parts[index], 10);
      var arg = args[argIndex];
      if (arg !== undefined) {
        result.push(arg);
      } else {
        result.push("{".concat(argIndex, "}"));
      }
    }
  }
  return /*#__PURE__*/react.createElement.apply(react, [react.Fragment, null].concat(result));
}
function parseSingleLineCsv(csvString) {
  var fields = [];
  var currentField = "";
  var inQuote = false;
  for (var i = 0; i < csvString.length; i++) {
    var _char = csvString[i];
    var nextChar = csvString[i + 1];
    if (_char === '"') {
      if (inQuote && nextChar === '"') {
        // Handle escaped double quote: ""
        currentField += '"';
        i++;
      } else {
        inQuote = !inQuote;
      }
    } else if (_char === ',' && !inQuote) {
      // End of a field
      fields.push(currentField);
      currentField = "";
    } else if (_char === '\\' && nextChar) {
      // Handle escape character for the next character
      currentField += nextChar;
      i++;
    } else {
      currentField += _char;
    }
  }
  fields.push(currentField);
  return fields;
}

/***/ }),

/***/ 46184:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./src/components/table-filter/index.jsx + 1 modules
var table_filter = __webpack_require__(1295);
;// CONCATENATED MODULE: ./src/reports/constants.js

var TOKENS = {
  LastRun: 'Last Run',
  Created: 'Created',
  Modified: 'Modified',
  Types: 'Types',
  Users: 'Users',
  ColumnName: 'Name',
  ColumnType: 'Type',
  ColumnSchedule: 'Schedule',
  ColumnLastRun: 'Last Run',
  ColumnCreatedBy: 'Created by',
  ColumnCreatedTime: 'Created',
  ColumnModifiedTime: 'Modified',
  CreateReport: 'Create report',
  DeleteReport: 'Delete',
  CreateReportTitle: 'Only admin users can create reports',
  CreateModalCancel: 'Cancel',
  CreateModalCreate: 'Create',
  CreateModalHeader: 'Create Report',
  CreateModalReportName: 'Report Name',
  CreateModalType: 'Type',
  CreateModalPreset: 'Preset',
  CreateModalByMonth: 'Transactions by Month',
  CreateModalByConnectorType: 'Transactions by Connector Type',
  CreateModalByConnectorID: 'Transactions by Connector Id',
  CreateModalConnectorType: 'Connector',
  CreateModalEDIType: 'EDI',
  CreateModalDoc: 'View Documentation',
  CreateModalEDIPlaceholder: 'Must opt in to tracking of EDI headers to access EDI reports',
  CreateModalByISAID: 'Transactions by ISA Id',
  CreateModalByTransactionSet: 'Transactions by Transaction Set',
  DeleteModalHeader: 'Delete Report(s)',
  DeleteModalDelete: 'Delete',
  DeleteModalCancel: 'Cancel',
  DeleteModalConfirm1: 'Are you sure you want to delete the Report "{0}"?',
  WelcomeToReports: 'Welcome to Reports',
  WelcomeToCreateReports: 'Get started by creating a report',
  UnableToCreateReports: 'Additional Permissions Needed to Create Reports',
  ScheduleNone: 'None',
  ScheduleDaily: 'Daily',
  ScheduleWeekDays: 'Weekdays',
  ScheduleMonthly: 'Monthly',
  ScheduleWeekly: 'Weekly'
};
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Form.js + 9 modules
var Form = __webpack_require__(44324);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Modal.js + 6 modules
var Modal = __webpack_require__(48032);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Row.js
var Row = __webpack_require__(44479);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Col.js
var Col = __webpack_require__(61105);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Button.js
var Button = __webpack_require__(25615);
// EXTERNAL MODULE: ./src/components/alert/DismissibleAlert.tsx
var DismissibleAlert = __webpack_require__(95631);
// EXTERNAL MODULE: ./src/components/arc-table/index.jsx
var arc_table = __webpack_require__(57491);
// EXTERNAL MODULE: ./src/components/utils/index.js + 1 modules
var utils = __webpack_require__(25337);
// EXTERNAL MODULE: ./src/components/arc-suspense/index.jsx
var arc_suspense = __webpack_require__(20289);
// EXTERNAL MODULE: ../../.react-shared/axios/index.jsx
var axios = __webpack_require__(29029);
;// CONCATENATED MODULE: ./src/reports/ReportsTable.jsx
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }










var columns = [{
  id: "name",
  header: TOKENS.ColumnName,
  accessorKey: "name"
}, {
  id: "type",
  header: TOKENS.ColumnType,
  accessorKey: "type",
  cell: function cell(props) {
    var type = props.getValue();
    if (type.toLowerCase() === "connector") {
      return TOKENS.CreateModalConnectorType;
    } else if (type.toLowerCase() === "edi") {
      return TOKENS.CreateModalEDIType;
    } else {
      return type;
    }
  }
}, {
  id: "schedule",
  header: TOKENS.ColumnSchedule,
  enableSorting: false,
  accessorKey: "schedule",
  cell: function cell(props) {
    return formatSchedule(props.getValue());
  }
}, {
  id: "lastruntime",
  header: TOKENS.ColumnLastRun,
  accessorKey: "lastruntime",
  cell: function cell(props) {
    return (0,utils/* FormatTimestamp */.W9)(props.getValue());
  }
}, {
  id: "createdby",
  header: TOKENS.ColumnCreatedBy,
  accessorKey: "createdby",
  headerClassName: "hidden-xs d-none d-lg-table-cell",
  className: "hidden-xs d-none d-lg-table-cell"
}, {
  id: "createdtime",
  header: TOKENS.ColumnCreatedTime,
  accessorKey: "createdtime",
  headerClassName: "hidden-xs d-none d-lg-table-cell",
  className: "hidden-xs d-none d-lg-table-cell",
  size: 180,
  cell: function cell(props) {
    return (0,utils/* FormatTimestamp */.W9)(props.getValue());
  }
}, {
  id: "modifiedtime",
  header: TOKENS.ColumnModifiedTime,
  accessorKey: "modifiedtime",
  headerClassName: "hidden-xs d-none d-lg-table-cell",
  className: "hidden-xs d-none d-lg-table-cell",
  size: 180,
  cell: function cell(props) {
    return (0,utils/* FormatTimestamp */.W9)(props.getValue());
  }
}];
function formatSchedule(scheduleCron) {
  if (!scheduleCron) {
    return TOKENS.ScheduleNone;
  }
  var str = "";
  var crons = scheduleCron.split(" ");
  if (crons.length > 5) {
    if (crons[5][1].toLowerCase() === "m") {
      str = "Every " + crons[5][0] + " months";
    } else if (crons[5][1].toLowerCase() === "w") {
      str = "Every " + crons[5][0] + " weeks";
    }
  } else if (crons[2] === "*") {
    if (crons[4] === "*") {
      str = TOKENS.ScheduleDaily;
    } else if (crons[4] === "1,2,3,4,5") {
      str = TOKENS.ScheduleWeekDays;
    } else {
      var parts = crons[4].split("#");
      if (parts.length > 1) {
        str = TOKENS.ScheduleMonthly;
      } else {
        str = TOKENS.ScheduleWeekly;
      }
    }
  } else {
    str = TOKENS.ScheduleMonthly;
  }
  return str;
}
function CreateReportModal(_ref) {
  var show = _ref.show,
    userName = _ref.userName,
    handleClose = _ref.handleClose,
    handleCreated = _ref.handleCreated;
  var _React$useState = react.useState(""),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    errorMessage = _React$useState2[0],
    setErrorMessage = _React$useState2[1];
  var _React$useState3 = react.useState(""),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    name = _React$useState4[0],
    setName = _React$useState4[1];
  var _React$useState5 = react.useState("Connector"),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    type = _React$useState6[0],
    setType = _React$useState6[1];
  var _React$useState7 = react.useState("Month"),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    groupRows = _React$useState8[0],
    setGroupRows = _React$useState8[1];
  var _React$useState9 = react.useState("TransactionsAll"),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    columns = _React$useState10[0],
    setColumns = _React$useState10[1];
  var _React$useState11 = react.useState(false),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    hasEDI = _React$useState12[0],
    setHasEDI = _React$useState12[1];
  react.useEffect(function () {
    getEDITrackInfo();
  });
  var getEDITrackInfo = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _data$items;
      var response, data, items, error, info;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios/* default */.A.get("src/getEDITrackInfo.rsb", {
              params: {
                "@json": true,
                "HasTrackedOnly": true
              }
            });
          case 2:
            response = _context.sent;
            data = response.data;
            items = (_data$items = data.items) !== null && _data$items !== void 0 ? _data$items : [];
            error = (0,utils/* getResultErrorMessage */.hz)(items);
            if (error) {
              setErrorMessage(error);
            }
            info = !!data.items && data.items.length && data.items[0] || {};
            if ((0,utils/* getValueAsBool */.CO)(info.hastrackedsenderid, false) || (0,utils/* getValueAsBool */.CO)(info.hastrackedreceiverid, false) || (0,utils/* getValueAsBool */.CO)(info.hastrackedtransactionset, false)) {
              setHasEDI(true);
            }
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getEDITrackInfo() {
      return _ref2.apply(this, arguments);
    };
  }();
  var onCreateReport = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _response$data$items;
      var params, response, items, error;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            params = new URLSearchParams();
            params.append("timeperiod", "All");
            params.append("columns", columns);
            params.append("grouprows", groupRows);
            params.append("createdby", userName);
            params.append("name", name.trim());
            params.append("type", type);
            _context2.next = 9;
            return axios/* default */.A.post("api/reports.rsd?@json", params);
          case 9:
            response = _context2.sent;
            items = (_response$data$items = response.data.items) !== null && _response$data$items !== void 0 ? _response$data$items : [];
            error = (0,utils/* getResultErrorMessage */.hz)(items);
            if (!error) {
              _context2.next = 15;
              break;
            }
            setErrorMessage(error);
            return _context2.abrupt("return");
          case 15:
            if (handleCreated) {
              handleCreated(items);
            }
          case 16:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function onCreateReport() {
      return _ref3.apply(this, arguments);
    };
  }();
  var onClickPreset = function onClickPreset(value) {
    switch (value) {
      case "month":
        setGroupRows("Month");
        setColumns("TransactionsAll");
        break;
      case "connectortype":
        setGroupRows("ConnectorType");
        setColumns("TransactionsAll");
        break;
      case "connectorid":
        setGroupRows("");
        setColumns("ConnectorId,TransactionsAll");
        break;
      case "senderisaid":
        setGroupRows("SenderISAId");
        setColumns("SenderISAId,ReceiverISAId,TransactionsAll");
        break;
      case "transactionset":
        setGroupRows("TransactionSet");
        setColumns("TransactionSet,TransactionsAll");
        break;
    }
  };
  var renderPreset = function renderPreset(type) {
    if (type === "Connector") {
      return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Form/* default */.A.Check, {
        checked: groupRows.toLowerCase() === "month",
        onChange: function onChange() {
          return onClickPreset("month");
        },
        type: "radio",
        name: "presetRadios",
        id: (0,utils/* genElemId */.Nf)("presetMonth"),
        label: TOKENS.CreateModalByMonth
      }), /*#__PURE__*/react.createElement(Form/* default */.A.Check, {
        checked: groupRows.toLowerCase() === "connectortype",
        onChange: function onChange() {
          return onClickPreset("connectortype");
        },
        type: "radio",
        name: "presetRadios",
        id: (0,utils/* genElemId */.Nf)("presetType"),
        label: TOKENS.CreateModalByConnectorType
      }), /*#__PURE__*/react.createElement(Form/* default */.A.Check, {
        checked: groupRows.toLowerCase() === "",
        onChange: function onChange() {
          return onClickPreset("connectorid");
        },
        type: "radio",
        name: "presetRadios",
        id: (0,utils/* genElemId */.Nf)("presetID"),
        label: TOKENS.CreateModalByConnectorID
      }));
    } else if (type === "EDI") {
      return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Form/* default */.A.Check, {
        checked: groupRows.toLowerCase() === "month",
        onChange: function onChange() {
          return onClickPreset("month");
        },
        type: "radio",
        name: "presetRadios",
        id: (0,utils/* genElemId */.Nf)("presetMonth"),
        label: TOKENS.CreateModalByMonth
      }), /*#__PURE__*/react.createElement(Form/* default */.A.Check, {
        checked: groupRows.toLowerCase() === "senderisaid",
        onChange: function onChange() {
          return onClickPreset("senderisaid");
        },
        type: "radio",
        name: "presetRadios",
        id: (0,utils/* genElemId */.Nf)("presetISAID"),
        label: TOKENS.CreateModalByISAID
      }), /*#__PURE__*/react.createElement(Form/* default */.A.Check, {
        checked: groupRows.toLowerCase() === "transactionset",
        onChange: function onChange() {
          return onClickPreset("transactionset");
        },
        type: "radio",
        name: "presetRadios",
        id: (0,utils/* genElemId */.Nf)("presetTransactionSet"),
        label: TOKENS.CreateModalByTransactionSet
      }));
    } else {
      return null;
    }
  };
  var renderEDIRadio = function renderEDIRadio() {
    var check = /*#__PURE__*/react.createElement(Form/* default */.A.Check, {
      checked: type === "EDI",
      onChange: function onChange() {
        onClickPreset("month");
        setType("EDI");
      },
      type: "radio",
      name: "typeRadios",
      id: (0,utils/* genElemId */.Nf)("typeEDI"),
      label: TOKENS.CreateModalEDIType,
      disabled: !hasEDI
    });
    if (hasEDI) {
      return check;
    }
    return /*#__PURE__*/react.createElement("span", {
      className: "d-inline-block",
      "data-tooltip-id": "reactPopover",
      "data-tooltip-content": TOKENS.CreateModalEDIPlaceholder
    }, check);
  };
  return /*#__PURE__*/react.createElement(Modal/* default */.A, _extends({
    className: "create-report-modal",
    show: show,
    onHide: handleClose
  }, (0,utils/* onInputEnterDown */.yb)(onCreateReport)), /*#__PURE__*/react.createElement(Modal/* default */.A.Header, {
    closeButton: true
  }, /*#__PURE__*/react.createElement(Modal/* default */.A.Title, null, TOKENS.CreateModalHeader)), /*#__PURE__*/react.createElement(Modal/* default */.A.Body, null, /*#__PURE__*/react.createElement(DismissibleAlert/* default */.A, {
    type: "error",
    message: errorMessage,
    onClose: function onClose() {
      return setErrorMessage(null);
    }
  }), /*#__PURE__*/react.createElement(Form/* default */.A.Group, {
    as: Row/* default */.A,
    className: "mb-3"
  }, /*#__PURE__*/react.createElement(Form/* default */.A.Label, {
    column: true,
    md: "4"
  }, TOKENS.CreateModalReportName), /*#__PURE__*/react.createElement(Col/* default */.A, {
    md: "7"
  }, /*#__PURE__*/react.createElement(Form/* default */.A.Control, {
    required: true,
    placeholder: TOKENS.CreateModalReportName,
    autoFocus: true,
    value: name,
    onChange: function onChange(event) {
      return setName(event.target.value);
    }
  }))), /*#__PURE__*/react.createElement(Form/* default */.A.Group, {
    as: Row/* default */.A,
    className: "mb-3"
  }, /*#__PURE__*/react.createElement(Form/* default */.A.Label, {
    as: "legend",
    column: true,
    md: "4"
  }, TOKENS.CreateModalType), /*#__PURE__*/react.createElement(Col/* default */.A, {
    md: "7"
  }, /*#__PURE__*/react.createElement(Form/* default */.A.Check, {
    checked: type === "Connector",
    onChange: function onChange() {
      onClickPreset("month");
      setType("Connector");
    },
    type: "radio",
    name: "typeRadios",
    id: (0,utils/* genElemId */.Nf)("typeConnector"),
    label: TOKENS.CreateModalConnectorType
  }), renderEDIRadio())), /*#__PURE__*/react.createElement(Form/* default */.A.Group, {
    as: Row/* default */.A,
    className: "mb-3"
  }, /*#__PURE__*/react.createElement(Form/* default */.A.Label, {
    column: true,
    md: "4"
  }, TOKENS.CreateModalPreset), /*#__PURE__*/react.createElement(Col/* default */.A, {
    md: "7"
  }, renderPreset(type)))), /*#__PURE__*/react.createElement(Modal/* default */.A.Footer, null, /*#__PURE__*/react.createElement("span", {
    className: "me-auto"
  }, /*#__PURE__*/react.createElement("a", {
    role: "button",
    href: "help.rst#Reports|creating-a-report",
    target: "_blank"
  }, TOKENS.CreateModalDoc)), /*#__PURE__*/react.createElement(Button/* default */.A, {
    variant: "outline-secondary",
    onClick: handleClose
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa fa-close"
  }), "\xA0", TOKENS.CreateModalCancel), /*#__PURE__*/react.createElement(Button/* default */.A, {
    variant: "primary",
    onClick: onCreateReport
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa fa-plus"
  }), "\xA0", TOKENS.CreateModalCreate)));
}
function ConfirmRemovalModal(_ref4) {
  var show = _ref4.show,
    nameList = _ref4.nameList,
    handleClose = _ref4.handleClose,
    handleDeleted = _ref4.handleDeleted;
  var onDelete = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _iterator, _step, name;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _iterator = _createForOfIteratorHelper(nameList);
            _context3.prev = 1;
            _iterator.s();
          case 3:
            if ((_step = _iterator.n()).done) {
              _context3.next = 9;
              break;
            }
            name = _step.value;
            _context3.next = 7;
            return axios/* default */.A["delete"]("api/reports.rsd?@json", {
              data: {
                name: name
              }
            });
          case 7:
            _context3.next = 3;
            break;
          case 9:
            _context3.next = 14;
            break;
          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](1);
            _iterator.e(_context3.t0);
          case 14:
            _context3.prev = 14;
            _iterator.f();
            return _context3.finish(14);
          case 17:
            if (handleDeleted) {
              handleDeleted();
            }
          case 18:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[1, 11, 14, 17]]);
    }));
    return function onDelete() {
      return _ref5.apply(this, arguments);
    };
  }();
  var confirmStr1 = (0,utils/* FormatString */.FJ)(TOKENS.DeleteModalConfirm1, nameList.join(", "));
  return /*#__PURE__*/react.createElement(Modal/* default */.A, {
    className: "remove-report-modal",
    show: show,
    backdrop: "static",
    onHide: handleClose
  }, /*#__PURE__*/react.createElement(Modal/* default */.A.Header, {
    closeButton: true
  }, /*#__PURE__*/react.createElement(Modal/* default */.A.Title, null, TOKENS.DeleteModalHeader)), /*#__PURE__*/react.createElement(Modal/* default */.A.Body, null, /*#__PURE__*/react.createElement("span", null, confirmStr1)), /*#__PURE__*/react.createElement(Modal/* default */.A.Footer, null, /*#__PURE__*/react.createElement(Button/* default */.A, {
    variant: "outline-secondary",
    onClick: handleClose
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa fa-times"
  }), "\xA0", TOKENS.DeleteModalCancel), /*#__PURE__*/react.createElement(Button/* default */.A, {
    variant: "danger",
    autoFocus: true,
    onClick: onDelete
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa fa-trash"
  }), "\xA0", TOKENS.DeleteModalDelete)));
}
function buildCommonFilters(users) {
  return [{
    odataKey: "lastrun",
    label: TOKENS.LastRun,
    options: [],
    isDatePicker: true
  }, {
    odataKey: "created",
    label: TOKENS.Created,
    options: [],
    isDatePicker: true
  }, {
    odataKey: "modified",
    label: TOKENS.Modified,
    options: [],
    isDatePicker: true
  }, {
    odataKey: "type",
    label: TOKENS.Types,
    options: ["Connector", "EDI"],
    i18nOptions: [TOKENS.CreateModalConnectorType, TOKENS.CreateModalEDIType],
    isDatePicker: false
  }, {
    odataKey: "createdby",
    label: TOKENS.Users,
    options: users,
    isDatePicker: false
  }];
}
function buildODataQuery(odataQuery, searchText) {
  var filter = "";
  if (searchText) {
    filter = "substringof(".concat((0,utils/* odataEscape */.H7)(searchText), ", Name) or substringof(").concat((0,utils/* odataEscape */.H7)(searchText), ", CreatedBy)");
  }
  if (odataQuery) {
    filter = filter ? "(".concat(odataQuery, ") and (").concat(filter, ")") : odataQuery;
  }
  return filter;
}

/**
 * To build the initial OData query filter by local storage when the page loading at first.
 */
function buildInitQuery(commonFilters, browserStorageKey) {
  var val = table_filter/* TableFilter */.r.loadFilter(browserStorageKey, commonFilters);
  var oDataQuery = table_filter/* TableFilter */.r.buildODataQuery(val.selectedMap, commonFilters);
  return buildODataQuery(oDataQuery, val.searchText);
}
function ReportWelcome(_ref6) {
  var readOnly = _ref6.readOnly,
    userName = _ref6.userName;
  var _React$useState13 = react.useState(false),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    showCreation = _React$useState14[0],
    setShowCreation = _React$useState14[1];
  var onCreatedReport = function onCreatedReport(items) {
    window.location.href = "reports.rst?report=" + encodeURIComponent(items[0].name);
  };
  var renderContent = function renderContent() {
    if (readOnly) {
      return /*#__PURE__*/react.createElement("div", {
        className: "report-welcome"
      }, /*#__PURE__*/react.createElement("p", {
        className: "text-center icon"
      }, /*#__PURE__*/react.createElement("i", {
        className: "fa fa-lock fa-5x",
        "aria-hidden": "true"
      })), /*#__PURE__*/react.createElement("p", {
        className: "text-center lead"
      }, TOKENS.UnableToCreateReports));
    } else {
      return /*#__PURE__*/react.createElement("div", {
        className: "report-welcome"
      }, /*#__PURE__*/react.createElement(CreateReportModal, {
        show: showCreation,
        userName: userName,
        handleClose: function handleClose() {
          return setShowCreation(false);
        },
        handleCreated: function handleCreated(items) {
          return onCreatedReport(items);
        }
      }), /*#__PURE__*/react.createElement("p", {
        className: "text-center icon"
      }, /*#__PURE__*/react.createElement("i", {
        className: "fa fa-table fa-5x",
        "aria-hidden": "true"
      })), /*#__PURE__*/react.createElement("p", {
        className: "text-center lead"
      }, TOKENS.WelcomeToReports), /*#__PURE__*/react.createElement("p", {
        className: "text-center"
      }, TOKENS.WelcomeToCreateReports), /*#__PURE__*/react.createElement("button", {
        type: "button",
        className: "btn btn-primary ms-auto me-auto d-block",
        onClick: function onClick() {
          return setShowCreation(true);
        }
      }, /*#__PURE__*/react.createElement("i", {
        className: "fa fa-plus",
        "aria-hidden": "true"
      }), "\xA0", TOKENS.CreateReport));
    }
  };
  return renderContent();
}
function ReportsTable(_ref7) {
  var readOnly = _ref7.readOnly,
    userName = _ref7.userName;
  var browserStorageKey = "reportsTable";
  var _React$useState15 = react.useState(false),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    showCreation = _React$useState16[0],
    setShowCreation = _React$useState16[1];
  var _React$useState17 = react.useState(false),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    showRemoval = _React$useState18[0],
    setShowRemoval = _React$useState18[1];
  var _React$useState19 = react.useState([]),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    removalNames = _React$useState20[0],
    setRemovalNames = _React$useState20[1];
  var _React$useState21 = react.useState(null),
    _React$useState22 = _slicedToArray(_React$useState21, 2),
    users = _React$useState22[0],
    setUsers = _React$useState22[1];
  var _React$useState23 = react.useState(""),
    _React$useState24 = _slicedToArray(_React$useState23, 2),
    errorMessage = _React$useState24[0],
    setErrorMessage = _React$useState24[1];
  var _React$useState25 = react.useState(true),
    _React$useState26 = _slicedToArray(_React$useState25, 2),
    isDelBtnDisabled = _React$useState26[0],
    setIsDelBtnDisabled = _React$useState26[1];
  var commonFilters = react.useMemo(function () {
    return buildCommonFilters(users);
  }, [users]);
  var initialQuery = react.useMemo(function () {
    return buildInitQuery(commonFilters, browserStorageKey);
  }, []);
  var tableApiRef = {};
  var onRefresh = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return tableApiRef.reload();
          case 2:
            setUsers(null);
            setIsDelBtnDisabled(true);
          case 4:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function onRefresh() {
      return _ref8.apply(this, arguments);
    };
  }();
  var onDelete = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var names, rows;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            names = [];
            rows = tableApiRef.getSelectedRows();
            rows.forEach(function (row) {
              names.push(row.original.name);
            });
            setShowRemoval(true);
            setRemovalNames(names);
          case 5:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function onDelete() {
      return _ref9.apply(this, arguments);
    };
  }();
  var onAdd = function onAdd() {
    setShowCreation(true);
  };
  var onRowSelectionChange = function onRowSelectionChange(updater, currentRowSelection) {
    var newSelectedOBJ = updater(currentRowSelection);
    if (newSelectedOBJ && Object.keys(newSelectedOBJ).length > 0) {
      setIsDelBtnDisabled(false);
    } else {
      setIsDelBtnDisabled(true);
    }
  };
  var onRowClicked = function onRowClicked(event, row) {
    window.location.href = "reports.rst?report=" + encodeURIComponent(row.original.name);
  };
  var onCreatedReport = function onCreatedReport(items) {
    window.location.href = "reports.rst?report=" + encodeURIComponent(items[0].name);
  };
  var onDeletedReport = function onDeletedReport() {
    setIsDelBtnDisabled(true);
    setShowRemoval(false);
    tableApiRef.reload();
    setUsers(null);
  };
  var setError = function setError(error) {
    if (error !== null && error !== void 0 && error.message) {
      setErrorMessage(error.message);
    }
  };
  var onToggle = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(label, nextShow) {
      var _response$data$items2;
      var response, items, error, nameSet;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            if (nextShow) {
              _context6.next = 2;
              break;
            }
            return _context6.abrupt("return");
          case 2:
            if (!(label !== TOKENS.Users || users)) {
              _context6.next = 4;
              break;
            }
            return _context6.abrupt("return");
          case 4:
            _context6.next = 6;
            return axios/* default */.A.get("api/reports.rsd?@json");
          case 6:
            response = _context6.sent;
            items = (_response$data$items2 = response.data.items) !== null && _response$data$items2 !== void 0 ? _response$data$items2 : [];
            error = (0,utils/* getResultErrorMessage */.hz)(items);
            if (!error) {
              _context6.next = 12;
              break;
            }
            setError({
              message: error
            });
            return _context6.abrupt("return");
          case 12:
            if (items) {
              nameSet = new Set();
              items.forEach(function (item) {
                nameSet.add(item.createdby);
              });
              setUsers(Array.from(nameSet).sort());
            }
          case 13:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return function onToggle(_x, _x2) {
      return _ref10.apply(this, arguments);
    };
  }();
  var onSearch = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(odataQuery, searchText) {
      var filter;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            filter = buildODataQuery(odataQuery, searchText);
            if (searchText) {
              filter = "substringof(".concat((0,utils/* odataEscape */.H7)(searchText), ", Name) or substringof(").concat((0,utils/* odataEscape */.H7)(searchText), ", CreatedBy)");
            }
            if (odataQuery) {
              filter = filter ? "(".concat(odataQuery, ") and (").concat(filter, ")") : odataQuery;
            }
            _context7.prev = 3;
            _context7.next = 6;
            return tableApiRef.setUrlParams({
              "$filter": filter
            });
          case 6:
            _context7.next = 11;
            break;
          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7["catch"](3);
            setError(_context7.t0);
          case 11:
            setIsDelBtnDisabled(true);
          case 12:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[3, 8]]);
    }));
    return function onSearch(_x3, _x4) {
      return _ref11.apply(this, arguments);
    };
  }();
  var renderCreateBtn = function renderCreateBtn() {
    var btn = /*#__PURE__*/react.createElement(Button/* default */.A, {
      variant: "primary",
      disabled: readOnly,
      onClick: onAdd,
      placeholder: readOnly ? TOKENS.CreateReportTitle : ""
    }, /*#__PURE__*/react.createElement("i", {
      className: "fa fa-plus"
    }), "\xA0", TOKENS.CreateReport);
    if (readOnly) {
      return /*#__PURE__*/react.createElement("span", {
        className: "d-inline-block",
        "data-tooltip-id": "reactPopover",
        "data-tooltip-content": TOKENS.CreateReportTitle
      }, btn);
    } else {
      return btn;
    }
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, !readOnly && /*#__PURE__*/react.createElement(arc_suspense/* default */.A, null, /*#__PURE__*/react.createElement(CreateReportModal, {
    show: showCreation,
    userName: userName,
    handleClose: function handleClose() {
      return setShowCreation(false);
    },
    handleCreated: function handleCreated(items) {
      return onCreatedReport(items);
    }
  }), /*#__PURE__*/react.createElement(ConfirmRemovalModal, {
    show: showRemoval,
    nameList: removalNames,
    handleClose: function handleClose() {
      return setShowRemoval(false);
    },
    handleDeleted: function handleDeleted() {
      return onDeletedReport();
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: "btn-group",
    role: "group"
  }, /*#__PURE__*/react.createElement(Button/* default */.A, {
    variant: "outline-secondary",
    onClick: onRefresh
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa fa-refresh"
  })), !readOnly && /*#__PURE__*/react.createElement(Button/* default */.A, {
    variant: "outline-secondary",
    onClick: onDelete,
    disabled: isDelBtnDisabled
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa fa-trash"
  }), "\xA0", TOKENS.DeleteReport), renderCreateBtn(), /*#__PURE__*/react.createElement(Button/* default */.A, {
    as: "a",
    variant: "outline-secondary",
    href: "help.rst#Reports|creating-a-report",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa fa-question-circle"
  }))), /*#__PURE__*/react.createElement(DismissibleAlert/* default */.A, {
    type: "error",
    message: errorMessage,
    onClose: function onClose() {
      return setErrorMessage(null);
    }
  }), /*#__PURE__*/react.createElement(table_filter/* TableFilter */.r, {
    storageKey: browserStorageKey,
    commonFilters: commonFilters,
    onChange: onSearch,
    onToggle: onToggle
  }), /*#__PURE__*/react.createElement(arc_table/* default */.A, {
    onRowSelectionChange: onRowSelectionChange,
    tableBodyRowProps: {
      onClick: onRowClicked
    },
    urlParams: {
      "$filter": initialQuery
    },
    columns: columns,
    url: "api/reports.rsd",
    initialSorting: [{
      id: "modifiedtime",
      desc: true
    }],
    rowSelection: !readOnly,
    tableApiRef: tableApiRef,
    onError: setError
  }));
}
// EXTERNAL MODULE: ./src/utils/sessionKeeper.ts
var sessionKeeper = __webpack_require__(43629);
;// CONCATENATED MODULE: ./src/reports/index.jsx
var _window$rsb, _window$rsb2, _window$rsb3, _window$rsb4, _window$rsb5;




var rootElement = client.createRoot(document.getElementById("reactReportsTable"));
rootElement.render(((_window$rsb = window.rsb) === null || _window$rsb === void 0 || (_window$rsb = _window$rsb.reports) === null || _window$rsb === void 0 ? void 0 : _window$rsb.count) == 0 ? /*#__PURE__*/react.createElement(ReportWelcome, {
  readOnly: !((_window$rsb2 = window.rsb) !== null && _window$rsb2 !== void 0 && (_window$rsb2 = _window$rsb2.reports) !== null && _window$rsb2 !== void 0 && _window$rsb2.isAdmin),
  userName: (_window$rsb3 = window.rsb) === null || _window$rsb3 === void 0 || (_window$rsb3 = _window$rsb3.reports) === null || _window$rsb3 === void 0 ? void 0 : _window$rsb3.currentUser
}) : /*#__PURE__*/react.createElement(ReportsTable, {
  readOnly: !((_window$rsb4 = window.rsb) !== null && _window$rsb4 !== void 0 && (_window$rsb4 = _window$rsb4.reports) !== null && _window$rsb4 !== void 0 && _window$rsb4.isAdmin),
  userName: (_window$rsb5 = window.rsb) === null || _window$rsb5 === void 0 || (_window$rsb5 = _window$rsb5.reports) === null || _window$rsb5 === void 0 ? void 0 : _window$rsb5.currentUser
}));
var reports_sessionKeeper = new sessionKeeper/* SessionKeeper */.j();
reports_sessionKeeper.start();

/***/ }),

/***/ 95631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DismissibleAlert)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);

function DismissibleAlert({ type, message, className, onClose }) {
    const alertStyle = {
        whiteSpace: "pre-wrap",
    };
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        const timer = setTimeout(() => {
            if (type !== "error" && type !== "warning") {
                onClose && onClose();
            }
        }, 10000);
        return () => clearTimeout(timer);
    }, [type, message, onClose]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, message &&
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: `text-break alert alert-${type === "error" ? "danger" : type} alert-dismissible ${className || "mt-3"}`, role: "alert", style: alertStyle },
            message,
            onClose != null &&
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn-close", onClick: onClose }))));
}


/***/ }),

/***/ 43629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ SessionKeeper)
/* harmony export */ });
/* harmony import */ var _react_shared_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29029);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class SessionKeeper {
    constructor() {
        this._interval = null;
        this._lastHeartbeat = Date.now();
        this._running = false;
    }
    start() {
        this._interval = window.setInterval(this._onHeartbeat.bind(this), SessionKeeper.HEARTBEAT_INTERVAL / 10);
    }
    stop() {
        if (this._interval) {
            window.clearInterval(this._interval);
            this._interval = null;
            this._lastHeartbeat = Date.now();
            this._running = false;
        }
    }
    _onHeartbeat() {
        return __awaiter(this, void 0, void 0, function* () {
            if ((Date.now() - this._lastHeartbeat) > SessionKeeper.HEARTBEAT_INTERVAL && !this._running) {
                this._running = true;
                yield _react_shared_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.post("src/sessionHeartbeat.rsb");
                this._running = false;
                this._lastHeartbeat = Date.now();
            }
        });
    }
}
SessionKeeper.HEARTBEAT_INTERVAL = 60 * 1000;


/***/ }),

/***/ 87963:
/***/ ((module) => {

module.exports = {};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["react","vendors"], () => (__webpack_exec__(46184)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);