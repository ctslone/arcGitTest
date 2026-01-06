"use strict";
(self["webpackChunkcdata_arc"] = self["webpackChunkcdata_arc"] || []).push([["dashboard"],{

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

/***/ 29272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DetailCard)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);



var propsTypes = {
  /**
   * The details data. If the data is an array, the elements should be an object that is sample key-value pair like { “SampleName“: “SampleValue“ }, or it can be an object that has the following structure:
   *   name: string. Item's name.
   *   value: any. Item's value.
   *   column: integer. The column index. Optional. The default is 0.
   *   render: function(name, value). If provided, the default render will be overridden by this. Optional.
   */
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
    column: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    render: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
  })), prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().objectOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)))]),
  /**
   * The footer object.
   */
  footer: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
var propsDefaults = {
  data: null,
  footer: null
};
function DetailCard(_ref) {
  var data = _ref.data,
    footer = _ref.footer,
    className = _ref.className;
  var dataIn2d = [];
  if (data != null) {
    data.forEach(function (item) {
      var _item$column;
      var columnIndex = (_item$column = item.column) !== null && _item$column !== void 0 ? _item$column : 0;
      while (dataIn2d.length <= columnIndex) {
        dataIn2d.push([]);
      }
      if (item.value == null) {
        item = {
          name: Object.keys(item)[0],
          value: item[Object.keys(item)[0]]
        };
      }
      dataIn2d[columnIndex].push(item);
    });
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "detail-card card " + (className || "")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "detail-card-body card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "detail-row row"
  }, dataIn2d.map(function (columnItems, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: index,
      className: "detail-col col"
    }, columnItems.map(function (item, itemIndex) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        key: itemIndex
      }, item.render != null ? item.render(item.name, item.value) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "detail-name text-secondary mb-1"
      }, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "detail-value text-body lh-lg"
      }, item.value)));
    }));
  })), footer));
}
DetailCard.propTypes = propsTypes;
DetailCard.defaultProps = propsDefaults;

/***/ }),

/***/ 49106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ MessageInfoCard)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _DetailCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29272);




var headerType = prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
  name: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
  value: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
});
var AlertType = prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
  variant: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  message: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
});
var propsTypes = {
  trackedHeaders: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(headerType),
  otherHeaders: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(headerType),
  otherInfo: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(headerType),
  messageAlert: AlertType,
  splitHeaders: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  showEmpty: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
};
function MessageInfoCard(_ref) {
  var _messageAlert$message;
  var trackedHeaders = _ref.trackedHeaders,
    otherHeaders = _ref.otherHeaders,
    otherInfo = _ref.otherInfo,
    messageAlert = _ref.messageAlert,
    splitHeaders = _ref.splitHeaders,
    showEmpty = _ref.showEmpty;
  var data = [];
  var hasHeaders = false;
  var columnIndex = 0;
  if (trackedHeaders != null && trackedHeaders.length > 0 || showEmpty) {
    data.push({
      name: "Tracked Headers:",
      value: trackedHeaders != null && trackedHeaders.length > 0 ? trackedHeaders.map(function (header, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          key: index
        }, header.name + ": " + header.value, index < trackedHeaders.length - 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null) : null);
      }) : "N/A",
      column: columnIndex
    });
    hasHeaders = true;
  }
  if (hasHeaders && splitHeaders) {
    columnIndex++;
  }
  if (otherHeaders != null && otherHeaders.length > 0 || showEmpty) {
    data.push({
      name: "Other Headers:",
      value: otherHeaders != null && otherHeaders.length > 0 ? otherHeaders.map(function (header, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          key: index
        }, header.name + ": " + header.value, index < otherHeaders.length - 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null) : null);
      }) : "N/A",
      column: columnIndex
    });
    hasHeaders = true;
  }
  if (messageAlert != null && ((_messageAlert$message = messageAlert.message) === null || _messageAlert$message === void 0 ? void 0 : _messageAlert$message.length) > 0) {
    data.push({
      name: "Alert",
      value: messageAlert.message,
      render: function render(name, value) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "alert alert-".concat(messageAlert.variant === "error" ? "danger alert-error" : "warning"),
          role: "alert"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, messageAlert.variant === "error" ? "Error:" : "Warning:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
          className: "mb-0"
        }, value));
      },
      column: columnIndex
    });
  }
  if (hasHeaders) {
    columnIndex++;
  }
  if (otherInfo != null && otherInfo.length > 0) {
    otherInfo.forEach(function (info) {
      data.push({
        name: info.name,
        value: info.value,
        column: (hasHeaders ? 1 : 0) + (splitHeaders ? 1 : 0)
      });
    });
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DetailCard__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    data: data,
    className: "p-0"
  });
}
MessageInfoCard.propTypes = propsTypes;

/***/ }),

/***/ 24112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ TransactionDetailCard)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75056);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14197);
/* harmony import */ var _react_shared_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29029);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25337);
/* harmony import */ var _arc_suspense__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20289);
/* harmony import */ var _alert_DismissibleAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95631);
/* harmony import */ var _MessageInfoCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49106);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33566);
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











var PreviewMessageModal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.all(/* import() */[__webpack_require__.e("react"), __webpack_require__.e("vendors-node_modules_codemirror_autocomplete_dist_index_js-node_modules_codemirror_commands_d-ffc779"), __webpack_require__.e("vendors-node_modules_codemirror_language_dist_index_js"), __webpack_require__.e("vendors-node_modules_codemirror_lang-sql_dist_index_js-node_modules_codemirror_dist_index_js"), __webpack_require__.e("vendors-node_modules_handlebars_dist_cjs_handlebars_js-node_modules_fast-xml-parser_src_xmlpa-5f70ec"), __webpack_require__.e("vendors-node_modules_cdata-icon_dist_esm_index_js-node_modules_cdata-ui_dist_esm_index_js"), __webpack_require__.e("vendors-node_modules_react-hook-form_dist_index_esm_mjs"), __webpack_require__.e("src_components_arc-codemirror_CopyCodeButton_jsx-src_components_arc-codemirror_FormatCodeButton_jsx"), __webpack_require__.e("src_components_preview-message_index_jsx"), __webpack_require__.e("vendors"), __webpack_require__.e("src_components_utils_arcHooks_ts-src_components_arc-codemirror_index_scss-src_components_prev-2218ee0")]).then(__webpack_require__.bind(__webpack_require__, 84925));
});
var propsTypes = {
  workspaceId: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string).isRequired,
  connectorId: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string).isRequired,
  messageId: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string).isRequired,
  direction: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  /**
   * Other informations need to display. 
   */
  otherInfo: prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({
    name: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    value: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().any)
  })),
  /**
   * Whether show transaction log details
   */
  showDetails: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  /**
   * This event will be fire once the component is ready.
   */
  onComplete: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func)
};
function TransactionDetailCard(_ref) {
  var workspaceId = _ref.workspaceId,
    connectorId = _ref.connectorId,
    messageId = _ref.messageId,
    direction = _ref.direction,
    otherInfo = _ref.otherInfo,
    showDetails = _ref.showDetails,
    onComplete = _ref.onComplete;
  /* constants */
  var downloadUrlBase = "src/downloadLogs.rst" + "?WorkspaceId=" + encodeURIComponent(workspaceId) + "&ConnectorId=" + encodeURIComponent(connectorId) + "&MessageId=" + encodeURIComponent(messageId);

  /* states */
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    loading = _React$useState2[0],
    setLoading = _React$useState2[1];
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState({
      trackedHeaders: [],
      otherHeaders: [],
      messageAlert: null,
      logDetails: []
    }),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    data = _React$useState4[0],
    setData = _React$useState4[1];
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    error = _React$useState6[0],
    setError = _React$useState6[1];

  /* variables */
  var infoCard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MessageInfoCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    trackedHeaders: data.trackedHeaders,
    otherHeaders: data.otherHeaders,
    messageAlert: data.messageAlert,
    otherInfo: otherInfo
  });
  var detailsCard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LogDetailsCard, {
    downloadUrlBase: downloadUrlBase,
    details: data.logDetails,
    workspaceId: workspaceId,
    connectorId: connectorId,
    messageId: messageId
  });

  /* data */
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    var loadData = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var filter, orderBy, _yield$axios$get, response, errorMsg, log, log1, log2, headers, _ParseHeaders, trackedHeaders, otherHeaders, lastStatus, lastStatusDesc, logDetails, index, _log$detailtype$index, logType;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              filter = "Workspace eq '" + workspaceId + "' and ConnectorId eq '" + connectorId + "' and MessageId eq '" + messageId + "'" + (direction != null ? " and Direction eq '" + direction + "'" : "");
              orderBy = direction == null ? "Direction asc, Timestamp desc" : "Timestamp desc";
              _context.next = 5;
              return _react_shared_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.get("api/transactions.rsd", {
                params: {
                  "$filter": filter,
                  "$orderby": orderBy,
                  "$top": 2,
                  "@json": true,
                  "IncludeHeaders": true,
                  "IncludeDetails": showDetails
                }
              });
            case 5:
              _yield$axios$get = _context.sent;
              response = _yield$axios$get.data;
              errorMsg = _utils__WEBPACK_IMPORTED_MODULE_2__/* .getResultErrorMessage */ .hz(response.items);
              if (errorMsg != null) {
                setError(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_alert_DismissibleAlert__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                  type: "error",
                  message: errorMsg
                }));
              } else if (response.items == null || response.items[0] == null) {
                setError(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_alert_DismissibleAlert__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                  type: "error",
                  message: "No transaction is found."
                }));
              } else {
                setError(null);
                log = null;
                if (response.items.length > 1) {
                  log1 = response.items[0];
                  log2 = response.items[1];
                  if (log1.workspace + ":" + log1.connectorid == log2.workspace + ":" + log2.connectorid) {
                    if (log1.direction.toLowerCase() == "send") {
                      log = log1;
                    } else if (log2.direction.toLowerCase() == "send") {
                      log = log2;
                    } else {
                      log = new Date(log1.timestamp) > new Date(log2.timestamp) ? log1 : log2;
                    }
                  } else {
                    log = new Date(log1.timestamp) > new Date(log2.timestamp) ? log1 : log2;
                  }
                } else {
                  log = response.items[0];
                }
                headers = (0,_Utils__WEBPACK_IMPORTED_MODULE_7__/* .GetHeadersFromTransactionLog */ .F)(log);
                _ParseHeaders = (0,_Utils__WEBPACK_IMPORTED_MODULE_7__/* .ParseHeaders */ .e)(headers), trackedHeaders = _ParseHeaders.trackedHeaders, otherHeaders = _ParseHeaders.otherHeaders, lastStatus = _ParseHeaders.lastStatus, lastStatusDesc = _ParseHeaders.lastStatusDesc;
                logDetails = [];
                if (log.detailname != null) {
                  if (!Array.isArray(log.detailname)) {
                    log.detailname = [log.detailname];
                    log.detailtype = [log.detailtype];
                    log.detailtimestamp = [log.detailtimestamp];
                  }
                  for (index = 0; index < log.detailname.length; index++) {
                    logType = (_log$detailtype$index = log.detailtype[index]) === null || _log$detailtype$index === void 0 ? void 0 : _log$detailtype$index.toLowerCase();
                    if (logType != "message" && logType != "message content") {
                      logDetails.push({
                        name: log.detailname[index],
                        type: log.detailtype[index],
                        timestamp: log.detailtimestamp[index],
                        direction: log.direction
                      });
                    }
                  }
                }
                setData({
                  trackedHeaders: trackedHeaders,
                  otherHeaders: otherHeaders,
                  messageAlert: (lastStatus === null || lastStatus === void 0 ? void 0 : lastStatus.toLowerCase()) == "failed" ? {
                    variant: "error",
                    message: lastStatusDesc
                  } : (lastStatus === null || lastStatus === void 0 ? void 0 : lastStatus.toLowerCase()) === "success" && lastStatusDesc ? {
                    variant: "warning",
                    message: lastStatusDesc
                  } : null,
                  logDetails: logDetails
                });
              }
            case 9:
              _context.prev = 9;
              setLoading(false);
              return _context.finish(9);
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0,, 9, 12]]);
      }));
      return function loadData() {
        return _ref2.apply(this, arguments);
      };
    }();
    loadData();
  }, []);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    if (!loading) {
      if (onComplete != null) {
        onComplete();
      }
    }
  }, [loading]);
  return loading ? "Loading..." : error != null ? error : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "transaction-detail-card"
  }, data.logDetails.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A.Container, {
    defaultActiveKey: "detail"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    className: "nav-tabs tab-underline mb-2 p-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A.Link, {
    eventKey: "detail"
  }, "Additional Details")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A.Link, {
    eventKey: "logs"
  }, "Logs")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "btn btn-outline-secondary ms-auto mb-1",
    href: downloadUrlBase + "&Direction=" + encodeURIComponent(data.logDetails[0].direction),
    target: "_blank",
    rel: "noreferrer",
    role: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-download"
  }), " ", "Download All Logs")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A.Content, {
    className: "p-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A.Pane, {
    eventKey: "detail"
  }, infoCard), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A.Pane, {
    eventKey: "logs"
  }, detailsCard))) : infoCard);
}
TransactionDetailCard.propTypes = propsTypes;
function LogDetailsCard(_ref3) {
  var downloadUrlBase = _ref3.downloadUrlBase,
    details = _ref3.details,
    workspaceId = _ref3.workspaceId,
    connectorId = _ref3.connectorId,
    messageId = _ref3.messageId;
  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_0__.useState(5),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    length = _React$useState8[0],
    setLength = _React$useState8[1];
  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_0__.useState({
      show: false,
      workspaceId: workspaceId,
      connectorId: connectorId,
      messageId: messageId
    }),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    preview = _React$useState10[0],
    setPreview = _React$useState10[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_arc_suspense__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(PreviewMessageModal, {
    show: preview.show,
    workspaceId: preview.workspaceId,
    connectorId: preview.connectorId,
    messageId: preview.messageId,
    direction: preview.direction,
    filename: preview.filename,
    onHide: function onHide() {
      return setPreview(_objectSpread(_objectSpread({}, preview), {}, {
        show: false
      }));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
    className: "table table-hover"
  }, length < details.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("caption", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "javascript-link",
    onClick: function onClick() {
      return setLength(length + 5);
    }
  }, "Show more" + " (" + (details.length - length) + ")")) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    className: "text-secondary",
    scope: "col"
  }, "Creation Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    className: "text-secondary",
    scope: "col"
  }, "Log Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    className: "text-secondary",
    scope: "col"
  }, "File Name"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", {
    className: "bg-body border"
  }, details.slice(0, length).map(function (detail, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, _utils__WEBPACK_IMPORTED_MODULE_2__/* .FormatTimestamp */ .W9(detail.timestamp)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, detail.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      className: "javascript-link",
      onClick: function onClick() {
        return setPreview(_objectSpread(_objectSpread({}, preview), {}, {
          show: true,
          filename: detail.name,
          direction: detail.direction
        }));
      }
    }, detail.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      className: "text-body float-end me-1",
      href: downloadUrlBase + "&Direction=" + encodeURIComponent(detail.direction) + "&FileName=" + encodeURIComponent(detail.name),
      download: detail.name
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-download"
    }), " ")));
  }))));
}

/***/ }),

/***/ 33566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ GetHeadersFromTransactionLog),
/* harmony export */   e: () => (/* binding */ ParseHeaders)
/* harmony export */ });
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var internalHeaders = ["message-id", "filename", "x-powered-by"];
var processedStatusHeader = "processed";
var processedStatusDescHeader = "processed-status-description";
function ParseHeaders(headers) {
  if (headers != null) {
    var trackedHeaders = [];
    var otherHeaders = [];
    var _GetLastProcessedStat = GetLastProcessedStatus(headers),
      _GetLastProcessedStat2 = _slicedToArray(_GetLastProcessedStat, 2),
      lastStatus = _GetLastProcessedStat2[0],
      lastStatusDesc = _GetLastProcessedStat2[1];
    var _FilterHeaders = FilterHeaders(headers, [].concat(internalHeaders, [processedStatusDescHeader])),
      _FilterHeaders2 = _slicedToArray(_FilterHeaders, 1),
      filteredHeaders = _FilterHeaders2[0];
    filteredHeaders.forEach(function (header) {
      var _header$tracked;
      if (((_header$tracked = header.tracked) === null || _header$tracked === void 0 ? void 0 : _header$tracked.toLowerCase()) === "true") {
        trackedHeaders.push({
          name: header.name,
          value: header.value
        });
      } else {
        otherHeaders.push({
          name: header.name,
          value: header.value
        });
      }
    });
    return {
      trackedHeaders: trackedHeaders,
      otherHeaders: otherHeaders,
      lastStatus: lastStatus,
      lastStatusDesc: lastStatusDesc
    };
  }
  return {
    trackedHeaders: [],
    otherHeaders: [],
    lastStatus: null,
    lastStatusDesc: null
  };
}
function GetHeadersFromTransactionLog(log) {
  var headers = [];
  if (log.headername != null) {
    if (!Array.isArray(log.headername)) {
      log.headername = [log.headername];
      log.headervalue = [log.headervalue];
    }
    for (var index = 0; index < log.headername.length; index++) {
      headers.push({
        name: log.headername[index],
        value: log.headervalue[index],
        tracked: log.headertracked[index]
      });
    }
  }
  return headers;
}
function FilterHeaders(headers, excludeHeaderNames) {
  var remain = [];
  var filtered = [];
  if (headers != null) {
    headers.forEach(function (header) {
      var _header$name;
      if (excludeHeaderNames != null && excludeHeaderNames.includes((_header$name = header.name) === null || _header$name === void 0 ? void 0 : _header$name.toLowerCase())) {
        filtered.push(header);
      } else {
        remain.push(header);
      }
    });
  }
  return [remain, filtered];
}
function GetLastProcessedStatus(headers) {
  var lastProcessHeaderIndex = -1;
  for (var index = headers.length - 1; index >= 0; index--) {
    var _headers$index$name;
    if (((_headers$index$name = headers[index].name) === null || _headers$index$name === void 0 ? void 0 : _headers$index$name.toLowerCase()) == processedStatusHeader) {
      lastProcessHeaderIndex = index;
      break;
    }
  }
  if (lastProcessHeaderIndex > -1) {
    var _headers$descriptionI;
    var status = /^.+; (.+?); .+/.exec(headers[lastProcessHeaderIndex].value)[1];
    var descriptionIndex = lastProcessHeaderIndex + 1;
    var description = headers.length > descriptionIndex && ((_headers$descriptionI = headers[descriptionIndex].name) === null || _headers$descriptionI === void 0 ? void 0 : _headers$descriptionI.toLowerCase()) == processedStatusDescHeader ? headers[descriptionIndex].value : null;
    return [status, description];
  }
  return [null, null];
}

/***/ }),

/***/ 50691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ IsLicenseSufficient),
/* harmony export */   y: () => (/* binding */ PaidFeatureObj)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


var propsTypes = {
  /**
   * currentType
   * 
   * see app.js rsb.connect.initPaidFeatures
   */
  currentType: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["no valid license", "disabled", "unlimited", "enterprise", "business", "professional", "standard", "starter", "true"]).isRequired,
  /**
   * ispaid
   * 
   * see app.js rsb.connect.initPaidFeatures
   */
  ispaid: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["no valid license", "disabled", "unlimited", "enterprise", "business", "professional", "standard", "starter", "true"]).isRequired
};
function IsLicenseSufficient(currentType, expectedLicenseType) {
  var types = ["no valid license", "disabled", "unlimited", "enterprise", "business", "professional", "standard", "starter", "true"];
  return types.indexOf(currentType) <= types.indexOf(expectedLicenseType);
}
function PaidFeatureObj(_ref) {
  var currentType = _ref.currentType,
    ispaid = _ref.ispaid,
    children = _ref.children;
  var sufficient = IsLicenseSufficient(currentType, ispaid);
  var paidFeatureObj = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, {
    readOnly: true,
    onMouseDown: function onMouseDown() {
      var _window;
      (_window = window) === null || _window === void 0 || (_window = _window.rsb) === null || _window === void 0 || (_window = _window.paidFeature) === null || _window === void 0 || _window.paidFeatureModal();
    }
  });
  return sufficient ? children : paidFeatureObj;
}
PaidFeatureObj.propTypes = propsTypes;


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

/***/ 15877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  x: () => (/* binding */ Dashboard)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/CSSTransition.js
var CSSTransition = __webpack_require__(73510);
// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/SwitchTransition.js
var SwitchTransition = __webpack_require__(6491);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Alert.js
var Alert = __webpack_require__(35677);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Button.js
var Button = __webpack_require__(25615);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Card.js + 2 modules
var Card = __webpack_require__(4190);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Dropdown.js + 1 modules
var Dropdown = __webpack_require__(26465);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/DropdownButton.js + 1 modules
var DropdownButton = __webpack_require__(71461);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Modal.js + 6 modules
var Modal = __webpack_require__(48032);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Placeholder.js + 2 modules
var Placeholder = __webpack_require__(24288);
// EXTERNAL MODULE: ./src/components/arc-suspense/index.jsx
var arc_suspense = __webpack_require__(20289);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./src/components/utils/index.js + 1 modules
var utils = __webpack_require__(25337);
;// CONCATENATED MODULE: ./src/components/metric-card/index.jsx






var MetricCardHeader = /*#__PURE__*/react.memo(function (_ref) {
  var title = _ref.title,
    icon = _ref.icon;
  return /*#__PURE__*/react.createElement("div", {
    className: "metric-card-header d-flex"
  }, /*#__PURE__*/react.createElement("p", {
    className: "metric-card-title",
    title: title
  }, title), icon && /*#__PURE__*/react.createElement("span", {
    className: "metric-card-icon text-primary text-center ms-auto"
  }, icon));
});
var MetricCardBody = (0,utils/* withLoading */.$A)(/*#__PURE__*/react.memo(function (_ref2) {
  var negative = _ref2.negative,
    value = _ref2.value,
    diffValue = _ref2.diffValue,
    diffValueDesc = _ref2.diffValueDesc,
    hover = _ref2.hover;
  var diff = (diffValue === null || diffValue === void 0 ? void 0 : diffValue.toString()) || "0";
  var decrease = diff.startsWith("-");
  return /*#__PURE__*/react.createElement("div", {
    className: "metric-card-body d-flex"
  }, /*#__PURE__*/react.createElement("div", {
    className: "metric-card-body-text d-flex flex-column"
  }, /*#__PURE__*/react.createElement("div", {
    className: "metric-card-value pb-1"
  }, value || 0), diff === "N/A" && /*#__PURE__*/react.createElement("span", {
    className: "ps-2 ps-8"
  }, "_"), diff && diff !== "N/A" && diff.match(/^-?\d+(\.\d+)?/g)[0] !== "0" && /*#__PURE__*/react.createElement("div", {
    className: "metric-card-trend text-truncate text-".concat(!!negative === decrease ? "success" : "danger"),
    title: diffValueDesc
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa fa-arrow-".concat(decrease ? "down" : "up")
  }), /*#__PURE__*/react.createElement("span", {
    className: "metric-card-diff ps-2 ps-8"
  }, decrease ? diff.substring(1) : diff), /*#__PURE__*/react.createElement("span", {
    className: "metric-card-diff-desc ps-2 ps-8"
  }, diffValueDesc))), hover && /*#__PURE__*/react.createElement("div", {
    className: "metric-card-body-hover"
  }, hover));
}), /*#__PURE__*/react.createElement(Placeholder/* default */.A, {
  className: "metric-card-body d-flex flex-column w-75",
  as: "div",
  animation: "glow",
  "aria-hidden": "true"
}, /*#__PURE__*/react.createElement(Placeholder/* default */.A, {
  className: "py-3 my-2",
  xs: 2
}), /*#__PURE__*/react.createElement(Placeholder/* default */.A, {
  xs: 6
})));
var MetricCard = /*#__PURE__*/react.memo(function (_ref3) {
  var loading = _ref3.loading,
    negative = _ref3.negative,
    title = _ref3.title,
    icon = _ref3.icon,
    value = _ref3.value,
    diffValue = _ref3.diffValue,
    diffValueDesc = _ref3.diffValueDesc,
    hover = _ref3.hover;
  return /*#__PURE__*/react.createElement(Card/* default */.A, {
    className: "metric-card"
  }, /*#__PURE__*/react.createElement(Card/* default */.A.Body, {
    className: "d-flex flex-column"
  }, /*#__PURE__*/react.createElement(MetricCardHeader, {
    title: title,
    icon: icon
  }), /*#__PURE__*/react.createElement(MetricCardBody, {
    loading: loading,
    negative: negative,
    value: value,
    diffValue: diffValue,
    diffValueDesc: diffValueDesc,
    hover: hover
  })));
});
MetricCard.propTypes = {
  loading: (prop_types_default()).bool,
  negative: (prop_types_default()).bool,
  title: (prop_types_default()).string,
  icon: (prop_types_default()).element,
  value: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]),
  diffValue: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]),
  diffValueDesc: (prop_types_default()).string,
  hover: (prop_types_default()).object
};
/* harmony default export */ const metric_card = (MetricCard);
// EXTERNAL MODULE: ./src/components/arc-table/index.jsx
var arc_table = __webpack_require__(57491);
;// CONCATENATED MODULE: ./src/components/metric-list/index.jsx
var _excluded = ["type", "link", "render"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }




var propsTypes = {
  /**
   * The columns.
   */
  columns: (prop_types_default()).array,
  /**
   * The resource data.
   */
  data: (prop_types_default()).array,
  /**
   * The initial sorting.
   */
  initialSorting: (prop_types_default()).array
};
var TrendColumn = /*#__PURE__*/react.memo(function (_ref) {
  var _trend;
  var value = _ref.value,
    trend = _ref.trend;
  trend = ((_trend = trend) === null || _trend === void 0 ? void 0 : _trend.toString()) || "0";
  var decrease = trend.startsWith("-");
  trend = decrease ? trend.substring(1) : trend;
  return /*#__PURE__*/react.createElement("div", {
    className: "trend-column"
  }, value, trend && trend.match(/^\d+(\.\d+)?/g)[0] !== "0" && /*#__PURE__*/react.createElement("span", {
    className: "ps-2 text-".concat(decrease ? "danger" : "success"),
    style: {
      fontWeight: 700
    }
  }, /*#__PURE__*/react.createElement("i", {
    className: "pe-2 fa fa-arrow-".concat(decrease ? "down" : "up")
  }), trend));
});
var MetricList = /*#__PURE__*/react.memo(function (props) {
  var columns = (0,react.useMemo)(function () {
    return props.columns.map(function (conf) {
      var type = conf.type,
        link = conf.link,
        render = conf.render,
        col = _objectWithoutProperties(conf, _excluded);
      if ((type === null || type === void 0 ? void 0 : type.toLowerCase()) == "trend") {
        col.cell = function (props) {
          return /*#__PURE__*/react.createElement(TrendColumn, {
            value: props.getValue(),
            trend: props.row.original[col.accessorKey + "trend"] || "0"
          });
        };
        delete col[col.accessorKey + "trend"];
      } else if ((type === null || type === void 0 ? void 0 : type.toLowerCase()) == "link") {
        col.cell = function (props) {
          var href = typeof link === "function" ? link(props.row.original) : (0,utils/* evalTemplate */.Xb)(link, props.row.original);
          return /*#__PURE__*/react.createElement("a", {
            href: href !== null && href !== void 0 ? href : "#"
          }, props.getValue());
        };
      } else if (render) {
        col.cell = function (props) {
          return render(props.row.original);
        };
      }
      return col;
    });
  }, [props.columns]);
  return /*#__PURE__*/react.createElement(arc_table/* default */.A, {
    paging: false,
    columns: columns,
    data: props.data,
    initialSorting: props.initialSorting,
    tableProps: {
      className: "metric-list-table",
      striped: false
    }
  });
});
MetricList.propTypes = propsTypes;
/* harmony default export */ const metric_list = (MetricList);
// EXTERNAL MODULE: external "{}"
var external_ = __webpack_require__(87963);
// EXTERNAL MODULE: ./src/components/searchbox/index.jsx
var searchbox = __webpack_require__(58447);
;// CONCATENATED MODULE: ./src/components/searchable-item-selector/index.jsx
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _this = undefined;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }







var ListItem = /*#__PURE__*/react.memo(function (_ref) {
  var name = _ref.name,
    displayName = _ref.displayName,
    selected = _ref.selected,
    disabled = _ref.disabled,
    matched = _ref.matched,
    className = _ref.className,
    faIcon = _ref.faIcon,
    icon = _ref.icon,
    onChanged = _ref.onChanged;
  return /*#__PURE__*/react.createElement("label", {
    className: "list-item me-auto mt-2 ".concat(className !== null && className !== void 0 ? className : "", " ").concat(disabled == true ? "disabled" : ""),
    style: {
      display: matched !== false ? "" : "none"
    }
  }, /*#__PURE__*/react.createElement("input", {
    type: "checkbox",
    className: "list-item-input form-check-input",
    name: name,
    checked: selected == true,
    disabled: disabled == true,
    onChange: onChanged
  }), /*#__PURE__*/react.createElement("span", {
    className: "ps-2 ps-8"
  }, icon, faIcon ? /*#__PURE__*/react.createElement("i", {
    className: "pe-1 fa ".concat(faIcon)
  }) : null, displayName !== null && displayName !== void 0 ? displayName : name));
});
var ListView = /*#__PURE__*/react.memo(function (_ref2) {
  var items = _ref2.items,
    vertical = _ref2.vertical,
    onChanged = _ref2.onChanged;
  return /*#__PURE__*/react.createElement("div", {
    className: "list-view d-flex " + (vertical !== false ? "flex-column" : "flex-row flex-wrap")
  }, items.map(function (item, index) {
    var _item$name;
    return /*#__PURE__*/react.createElement(ListItem, _extends({
      className: "mt-8",
      key: "ListItem-".concat((_item$name = item.name) !== null && _item$name !== void 0 ? _item$name : index)
    }, item, {
      onChanged: onChanged
    }));
  }));
});
var SelectAll = /*#__PURE__*/react.memo(function (_ref3) {
  var onChanged = _ref3.onChanged;
  return /*#__PURE__*/react.createElement("div", {
    className: "select-all d-flex"
  }, /*#__PURE__*/react.createElement("a", {
    className: "select-all-text pe-1",
    onClick: onChanged.bind(_this, true)
  }, "Select all"), "|", /*#__PURE__*/react.createElement("a", {
    className: "select-all-text ps-1",
    onClick: onChanged.bind(_this, false)
  }, "Deselect all"));
});
var SearchableItemSelector = /*#__PURE__*/react.memo(function (props) {
  var _props$className;
  var _useState = (0,react.useState)(Object.create(null)),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var _useState3 = (0,react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    searchText = _useState4[0],
    setSearchText = _useState4[1];
  var displayNameMap = (0,react.useRef)(null);
  var validateCount = (0,react.useCallback)(function () {
    var min = parseInt(props.min);
    var max = parseInt(props.max);
    if (min > 0 || max > 0) {
      var selected = data.items.filter(function (item) {
        return item.selected;
      });
      if (min > 0 && min >= selected.length) {
        selected.forEach(function (item) {
          return item.disabled = true;
        });
      } else if (max > (min > 0 ? min : 0) && max <= selected.length) {
        data.items.filter(function (item) {
          return !item.selected;
        }).forEach(function (item) {
          return item.disabled = true;
        });
      } else {
        data.items.forEach(function (item) {
          return item.disabled = false;
        });
      }
    }
  }, [data, props.min, props.max]);
  (0,react.useMemo)(function () {
    var _props$items;
    if (((_props$items = props.items) === null || _props$items === void 0 ? void 0 : _props$items.length) <= 0) {
      throw {
        message: "The item list is required."
      };
    }
    displayNameMap.current = Object.create(null);
    data.items = props.items.map(function (item) {
      var _item$displayName;
      if (!item.name) {
        throw {
          message: "The item name is required."
        };
      }
      if (displayNameMap.current[item.name]) {
        throw {
          message: (0,utils/* evalTemplate */.Xb)("The item name $name$ is conflict.", {
            "$name$": item.name
          })
        };
      }
      displayNameMap.current[item.name] = item.displayName = (_item$displayName = item.displayName) !== null && _item$displayName !== void 0 ? _item$displayName : item.name;
      return _objectSpread({}, item);
    });
    validateCount();
  }, [props.items]);
  (0,react.useEffect)(function () {
    props.onChange && props.onChange(data.items.filter(function (item) {
      return item.selected;
    }).map(function (item) {
      return item.name;
    }));
  }, [props.items]);
  var searchTextChanged = function searchTextChanged(searchText) {
    var searchRegExp = (0,utils/* escapeRegExp */.Nt)(searchText);
    var matchRegex = searchRegExp ? new RegExp(searchRegExp, "i") : null;
    var escapeRegex = searchRegExp ? new RegExp(searchRegExp, "ig") : null;
    data.items.forEach(function (item) {
      item.displayName = displayNameMap.current[item.name];
      item.matched = !matchRegex || matchRegex.test(item.displayName);
      if (item.matched && escapeRegex) {
        var parts = [];
        var startIndex = 0;
        item.displayName.replace(escapeRegex, function (part, index) {
          if (startIndex < index) {
            parts.push(item.displayName.substring(startIndex, index));
          }
          parts.push(/*#__PURE__*/react.createElement("b", {
            key: index
          }, part));
          startIndex = index + part.length;
        });
        if (startIndex < item.displayName.length) {
          parts.push(item.displayName.substring(startIndex));
        }
        item.displayName = parts;
      }
    });
    setSearchText(searchText);
    setData({
      items: data.items
    });
  };
  var selectAllChanged = (0,react.useCallback)(function (selected) {
    data.items.forEach(function (item) {
      item.selected = selected;
    });
    updateSelectedState();
  }, [data]);
  var itemChanged = (0,react.useCallback)(function (e) {
    var _e$target = e.target,
      name = _e$target.name,
      checked = _e$target.checked;
    data.items.forEach(function (item) {
      if (item.name.toString() === name) {
        item.selected = checked;
        return false;
      }
    });
    validateCount();
    updateSelectedState();
    return false;
  }, [data, props.min, props.max]);
  var updateSelectedState = (0,react.useCallback)(function () {
    props.onChange && props.onChange(data.items.filter(function (item) {
      return item.selected;
    }).map(function (item) {
      return item.name;
    }));
    setData({
      items: data.items
    });
  }, [data, props.onChange]);
  function renderSearchBox() {
    if (props.searchable === false) return null;
    return /*#__PURE__*/react.createElement(searchbox/* SearchBox */.G, {
      searchText: searchText,
      onChanged: searchTextChanged
    });
  }
  function renderSelectAll() {
    if (props.selectAllEnabled === false || parseInt(props.min) > 0 || parseInt(props.max) > 0 && parseInt(props.max) < props.items.length) return null;
    return /*#__PURE__*/react.createElement(SelectAll, {
      onChanged: selectAllChanged
    });
  }
  return /*#__PURE__*/react.createElement("div", {
    className: "searchable-item-selector ".concat((_props$className = props.className) !== null && _props$className !== void 0 ? _props$className : "")
  }, /*#__PURE__*/react.createElement("div", {
    className: "selector-toolbar pb-2 pb-8"
  }, renderSearchBox(), renderSelectAll()), /*#__PURE__*/react.createElement(ListView, {
    items: data.items.slice(),
    vertical: props.vertical !== false,
    onChanged: itemChanged
  }));
});
if (false) {}
SearchableItemSelector.propTypes = {
  /**
   * The items list.
   *
   * The propTypes of ListItem.
   * {
   *    *
   *    * The item key/name.
   *    *
   *   name: PropTypes.string,
   *    *
   *    * The display/label name.
   *    *
   *   displayName: PropTypes.string,
   *    *
   *    * Whether the item is selected.
   *    *
   *   selected: PropTypes.bool,
   *    *
   *    * Icon for the fontawesome.
   *    *
   *   faIcon: PropTypes.string,
   *    *
   *    * The custom icon.
   *    *
   *   icon: PropTypes.node
   * }
   */
  items: prop_types_default().arrayOf((prop_types_default()).object).isRequired,
  /**
   * Whether to enable the search box.  Default to true.
   */
  searchable: (prop_types_default()).bool,
  /**
   * Whether to enable the select/deselect all.  Default to true.
   */
  selectAllEnabled: (prop_types_default()).bool,
  /**
   * Whether to show items list in vertical.  Default to true.
   */
  vertical: (prop_types_default()).bool,
  /**
   * The minimum selected item count.
   */
  min: (prop_types_default()).number,
  /**
  * The maximum selected item count.
  */
  max: (prop_types_default()).number,
  /**
  * The callback function to notify the item list changes.
  */
  onChange: (prop_types_default()).func
};
/* harmony default export */ const searchable_item_selector = (SearchableItemSelector);
// EXTERNAL MODULE: ./src/logs/MessageLogs.jsx
var MessageLogs = __webpack_require__(82460);
// EXTERNAL MODULE: ./src/components/paid-feature-obj/index.jsx
var paid_feature_obj = __webpack_require__(50691);
;// CONCATENATED MODULE: ./src/dashboard/constants.js
var _window, _window2, _window3, _window4, _window5, _window6, _window7, _window8, _window9;



var TOKENS = {
  DASHBOARD: 'Dashboard',
  KEY_METRICS: 'Key Metrics',
  TRENDS: 'Trends',
  EDI_DOCUMENTS: 'EDI Documents',
  LOADING: 'Loading',
  SHOW_DATA_FOR_THE_PAST: 'Show data for:',
  OVER_THE_PAST: 'over the',
  EDIT: 'Edit',
  REVERT: 'Revert',
  CANCEL: 'Cancel',
  SAVE: 'Save',
  HIDE: 'Hide',
  MESSAGES: 'Messages',
  TRANSACTIONS_BY_WORKSPACE: 'Transactions by Workspace',
  TRANSACTIONS_BY_CONNECTOR_ID: 'Transactions by Connector Id',
  RECENT_MESSAGES: 'Recent Messages',
  TRANSACTIONS: 'Transactions',
  WORKSPACE: 'Workspace',
  CONNECTOR_ID: 'Connector Id',
  SUCCESSFUL: 'Successful',
  ERRORS: 'Errors',
  SEE_ALL: 'See all',
  DEPRECATED: 'Deprecated',
  PAST_OVER_TODAY: 'compared to yesterday at this time',
  PERIOD_TODAY: 'Today',
  PERIOD_HOURS_24: 'Past 24 Hours',
  PERIOD_DAYS_3: 'Past 3 Days',
  PERIOD_DAYS_7: 'Past 7 Days',
  PERIOD_DAYS_30: 'Past 30 Days',
  PERIOD_MONTHS_3: 'Past 3 Months',
  PERIOD_MONTHS_12: 'Past 12 Months',
  METRIC_TOTAL_MESSAGES: 'Total Messages',
  METRIC_TOTAL_TRANSACTIONS: 'Total Transactions',
  METRIC_TOTAL_TRANSACTIONS_SENT: 'Total Transactions Sent',
  METRIC_TOTAL_TRANSACTIONS_RECEIVED: 'Total Transactions Received',
  METRIC_TOTAL_TRANSACTIONS_MFT: 'Total MFT Transactions',
  METRIC_TOTAL_MESSAGES_EDI: 'Total EDI Messages',
  METRIC_TOTAL_ERRORS: 'Total Errors',
  METRIC_TOTAL_ERRORS_SEND: 'Total Send Errors',
  METRIC_TOTAL_ERRORS_RECEIVE: 'Total Receive Errors',
  METRIC_TOTAL_CONNECTORS: 'Total Connectors',
  METRIC_ACTIVE_CONNECTORS: 'Active Connectors',
  METRIC_TOTAL_WORKSPACES: 'Total Workspaces',
  METRIC_ACTIVE_WORKSPACES: 'Active Workspaces',
  METRIC_TOTAL_BYTES_PROCESSED: 'Total Bytes Processed',
  METRIC_AVERAGE_BYTES_PROCESSED: 'Average Bytes Processed',
  METRIC_AVERAGE_PROCESSING_TIME: 'Average Processing Time',
  METRIC_SUCCESS_RATE: 'Success Rate',
  METRIC_FAILURE_RATE: 'Failure Rate',
  METRIC_SLA_VIOLATIONS: 'SLA Violations',
  METRIC_AT_RISK_SLAS: 'At Risk SLAs',
  KEY_METRICS_EDIT_MODAL_DESC: 'Select between two and eight metrics.',
  ACTIVE_CONNECTORS_EDIT_MODAL_DESC: 'Select the connector type that you want to be visible on this widget',
  ACTIVE_WORKSPACES_EDIT_MODAL_DESC: 'Select the workspaces that you want to be visible on this widget',
  EDI_DOCUMENTS_EDIT_MODAL_DESC: 'Select between two and eight EDI documents.',
  VIEW_DETAILS: 'View Details'
};
var DASHBOARD_STORE_KEY = "cdata.arc.dashboard.settings";
var DEFAULT_STORE = {
  period: "7 Days",
  metrics: ["Total Messages", "Total Errors", "Active Connectors", "Total Bytes Processed"],
  workspaces: [],
  types: [],
  documents: []
};
var METRIC_ICON_CATEGORY = {
  TRANSACTION: /*#__PURE__*/react.createElement("i", {
    className: "fa fa-exchange-alt fa-xl"
  }),
  MESSAGE: /*#__PURE__*/react.createElement("i", {
    className: "fa fa-file-alt fa-xl"
  }),
  ERROR: /*#__PURE__*/react.createElement("i", {
    className: "fa fa-triangle-exclamation fa-xl"
  }),
  CONNECTOR: /*#__PURE__*/react.createElement("i", {
    className: "fa fa-bolt fa-xl"
  }),
  WORKSPACE: /*#__PURE__*/react.createElement("i", {
    className: "fa fa-network-wired fa-xl"
  }),
  DATA: /*#__PURE__*/react.createElement("i", {
    className: "fa fa-database fa-xl"
  }),
  TIME: /*#__PURE__*/react.createElement("i", {
    className: "fa fa-clock fa-xl"
  }),
  SUCCESS: /*#__PURE__*/react.createElement("i", {
    className: "fa fa-check fa-xl"
  })
};
var LOGS_PAGE_SETTINGS = {
  FILTER_STORE_KEY: "cdata.arc.tablefilter",
  MESSAGE_TAB: {
    STORAGE_KEY: "messageLogs",
    HREF: "activity.rst#messages"
  },
  TRANSACTION_TAB: {
    STORAGE_KEY: (_window = window) !== null && _window !== void 0 && (_window = _window.rsb) !== null && _window !== void 0 && (_window = _window.dashboard) !== null && _window !== void 0 && _window.showTransactionsTab ? "transactionLogs" : null,
    HREF: (_window2 = window) !== null && _window2 !== void 0 && (_window2 = _window2.rsb) !== null && _window2 !== void 0 && (_window2 = _window2.dashboard) !== null && _window2 !== void 0 && _window2.showTransactionsTab ? "activity.rst#transactions" : null
  },
  SLA_TAB: {
    STORAGE_KEY: "slastatuses",
    HREF: "activity.rst#slas"
  }
};
var METRIC_LIST = [{
  "key": "Total Messages",
  "title": TOKENS.METRIC_TOTAL_MESSAGES,
  "icon": METRIC_ICON_CATEGORY.MESSAGE,
  "href": LOGS_PAGE_SETTINGS.MESSAGE_TAB.HREF,
  "storagekey": LOGS_PAGE_SETTINGS.MESSAGE_TAB.STORAGE_KEY,
  "filter": {
    "searchText": "",
    "selectedMap": {}
  }
}, {
  "key": "Total Transactions",
  "title": TOKENS.METRIC_TOTAL_TRANSACTIONS,
  "icon": METRIC_ICON_CATEGORY.TRANSACTION,
  "href": (_window3 = window) !== null && _window3 !== void 0 && (_window3 = _window3.rsb) !== null && _window3 !== void 0 && (_window3 = _window3.dashboard) !== null && _window3 !== void 0 && _window3.showTransactionsTab ? LOGS_PAGE_SETTINGS.TRANSACTION_TAB.HREF : LOGS_PAGE_SETTINGS.MESSAGE_TAB.HREF,
  "storagekey": (_window4 = window) !== null && _window4 !== void 0 && (_window4 = _window4.rsb) !== null && _window4 !== void 0 && (_window4 = _window4.dashboard) !== null && _window4 !== void 0 && _window4.showTransactionsTab ? LOGS_PAGE_SETTINGS.TRANSACTION_TAB.STORAGE_KEY : LOGS_PAGE_SETTINGS.MESSAGE_TAB.STORAGE_KEY,
  "filter": {
    "searchText": "",
    "selectedMap": {}
  }
}, {
  "key": "Total Transactions Sent",
  "title": TOKENS.METRIC_TOTAL_TRANSACTIONS_SENT,
  "icon": METRIC_ICON_CATEGORY.TRANSACTION,
  "href": LOGS_PAGE_SETTINGS.TRANSACTION_TAB.HREF,
  "storagekey": LOGS_PAGE_SETTINGS.TRANSACTION_TAB.STORAGE_KEY,
  "filter": {
    "searchText": "",
    "selectedMap": {
      "direction": ["Send"]
    }
  }
}, {
  "key": "Total Transactions Received",
  "title": TOKENS.METRIC_TOTAL_TRANSACTIONS_RECEIVED,
  "icon": METRIC_ICON_CATEGORY.TRANSACTION,
  "href": LOGS_PAGE_SETTINGS.TRANSACTION_TAB.HREF,
  "storagekey": LOGS_PAGE_SETTINGS.TRANSACTION_TAB.STORAGE_KEY,
  "filter": {
    "searchText": "",
    "selectedMap": {
      "direction": ["Receive"]
    }
  }
}, {
  "key": "Total MFT Transactions",
  "title": TOKENS.METRIC_TOTAL_TRANSACTIONS_MFT,
  "icon": METRIC_ICON_CATEGORY.TRANSACTION,
  "category": "MFT",
  "href": (_window5 = window) !== null && _window5 !== void 0 && (_window5 = _window5.rsb) !== null && _window5 !== void 0 && (_window5 = _window5.dashboard) !== null && _window5 !== void 0 && _window5.showTransactionsTab ? LOGS_PAGE_SETTINGS.TRANSACTION_TAB.HREF : LOGS_PAGE_SETTINGS.MESSAGE_TAB.HREF,
  "storagekey": (_window6 = window) !== null && _window6 !== void 0 && (_window6 = _window6.rsb) !== null && _window6 !== void 0 && (_window6 = _window6.dashboard) !== null && _window6 !== void 0 && _window6.showTransactionsTab ? LOGS_PAGE_SETTINGS.TRANSACTION_TAB.STORAGE_KEY : LOGS_PAGE_SETTINGS.MESSAGE_TAB.STORAGE_KEY,
  "filter": "{\"searchText\": \"\", \"selectedMap\": {\"connectorType\": [\"MFTList\"]}}"
}, {
  "key": "Total EDI Messages",
  "title": TOKENS.METRIC_TOTAL_MESSAGES_EDI,
  "icon": METRIC_ICON_CATEGORY.MESSAGE,
  "category": "EDI",
  "href": LOGS_PAGE_SETTINGS.MESSAGE_TAB.HREF,
  "storagekey": LOGS_PAGE_SETTINGS.MESSAGE_TAB.STORAGE_KEY,
  "filter": "{\"searchText\": \"\", \"selectedMap\": {\"connectorType\": [\"EDIList\"]}}"
}, {
  "key": "Total Errors",
  "title": TOKENS.METRIC_TOTAL_ERRORS,
  "icon": METRIC_ICON_CATEGORY.ERROR,
  "negative": true,
  "href": (_window7 = window) !== null && _window7 !== void 0 && (_window7 = _window7.rsb) !== null && _window7 !== void 0 && (_window7 = _window7.dashboard) !== null && _window7 !== void 0 && _window7.showTransactionsTab ? LOGS_PAGE_SETTINGS.TRANSACTION_TAB.HREF : LOGS_PAGE_SETTINGS.MESSAGE_TAB.HREF,
  "storagekey": (_window8 = window) !== null && _window8 !== void 0 && (_window8 = _window8.rsb) !== null && _window8 !== void 0 && (_window8 = _window8.dashboard) !== null && _window8 !== void 0 && _window8.showTransactionsTab ? LOGS_PAGE_SETTINGS.TRANSACTION_TAB.STORAGE_KEY : LOGS_PAGE_SETTINGS.MESSAGE_TAB.STORAGE_KEY,
  "filter": {
    "searchText": "",
    "selectedMap": (_window9 = window) !== null && _window9 !== void 0 && (_window9 = _window9.rsb) !== null && _window9 !== void 0 && (_window9 = _window9.dashboard) !== null && _window9 !== void 0 && _window9.showTransactionsTab ? {
      "status": ["Error"]
    } : {
      "lastStatus": ["Error"]
    }
  }
}, {
  "key": "Total Send Errors",
  "title": TOKENS.METRIC_TOTAL_ERRORS_SEND,
  "icon": METRIC_ICON_CATEGORY.ERROR,
  "negative": true,
  "href": LOGS_PAGE_SETTINGS.TRANSACTION_TAB.HREF,
  "storagekey": LOGS_PAGE_SETTINGS.TRANSACTION_TAB.STORAGE_KEY,
  "filter": {
    "searchText": "",
    "selectedMap": {
      "direction": ["Send"],
      "status": ["Error"]
    }
  }
}, {
  "key": "Total Receive Errors",
  "title": TOKENS.METRIC_TOTAL_ERRORS_RECEIVE,
  "icon": METRIC_ICON_CATEGORY.ERROR,
  "negative": true,
  "href": LOGS_PAGE_SETTINGS.TRANSACTION_TAB.HREF,
  "storagekey": LOGS_PAGE_SETTINGS.TRANSACTION_TAB.STORAGE_KEY,
  "filter": {
    "searchText": "",
    "selectedMap": {
      "direction": ["Receive"],
      "status": ["Error"]
    }
  }
}, {
  "key": "Total Connectors",
  "title": TOKENS.METRIC_TOTAL_CONNECTORS,
  "icon": METRIC_ICON_CATEGORY.CONNECTOR,
  "noTrend": true
}, {
  "key": "Active Connectors",
  "title": TOKENS.METRIC_ACTIVE_CONNECTORS,
  "icon": METRIC_ICON_CATEGORY.CONNECTOR
}, {
  "key": "Total Workspaces",
  "title": TOKENS.METRIC_TOTAL_WORKSPACES,
  "icon": METRIC_ICON_CATEGORY.WORKSPACE,
  "noTrend": true
}, {
  "key": "Active Workspaces",
  "title": TOKENS.METRIC_ACTIVE_WORKSPACES,
  "icon": METRIC_ICON_CATEGORY.WORKSPACE
}, {
  "key": "Total Bytes Processed",
  "title": TOKENS.METRIC_TOTAL_BYTES_PROCESSED,
  "icon": METRIC_ICON_CATEGORY.DATA,
  "formatter": function formatter(bytes) {
    return (0,utils/* FormatFileSize */.XH)(bytes);
  }
}, {
  "key": "Average Bytes Processed",
  "title": TOKENS.METRIC_AVERAGE_BYTES_PROCESSED,
  "icon": METRIC_ICON_CATEGORY.DATA,
  "formatter": function formatter(bytes) {
    return (0,utils/* FormatFileSize */.XH)(bytes);
  }
}, {
  "key": "Average Processing Time",
  "title": TOKENS.METRIC_AVERAGE_PROCESSING_TIME,
  "icon": METRIC_ICON_CATEGORY.TIME
}, {
  "key": "Success Rate",
  "title": TOKENS.METRIC_SUCCESS_RATE,
  "icon": METRIC_ICON_CATEGORY.SUCCESS,
  "formatter": function formatter(rate) {
    return (0,utils/* toFixed */.Mg)(rate) + "%";
  }
}, {
  "key": "Failure Rate",
  "title": TOKENS.METRIC_FAILURE_RATE,
  "icon": METRIC_ICON_CATEGORY.ERROR,
  "formatter": function formatter(rate) {
    return (0,utils/* toFixed */.Mg)(rate) + "%";
  },
  "negative": true
}, {
  "key": "SLA Violations",
  "title": TOKENS.METRIC_SLA_VIOLATIONS,
  "icon": METRIC_ICON_CATEGORY.MESSAGE,
  "href": LOGS_PAGE_SETTINGS.SLA_TAB.HREF,
  "storagekey": LOGS_PAGE_SETTINGS.SLA_TAB.STORAGE_KEY,
  "filter": {
    "searchText": "",
    "selectedMap": {
      "previousstatus": ["4"]
    }
  },
  "linkLabel": TOKENS.VIEW_DETAILS,
  "noTrend": true,
  "licenseTier": "enterprise"
}, {
  "key": "At Risk SLAs",
  "title": TOKENS.METRIC_AT_RISK_SLAS,
  "icon": METRIC_ICON_CATEGORY.ERROR,
  "href": LOGS_PAGE_SETTINGS.SLA_TAB.HREF,
  "storagekey": LOGS_PAGE_SETTINGS.SLA_TAB.STORAGE_KEY,
  "filter": {
    "searchText": "",
    "selectedMap": {
      "currentstatus": ["2"]
    }
  },
  "linkLabel": TOKENS.VIEW_DETAILS,
  "noTrend": true,
  "licenseTier": "enterprise"
}];
var PERIOD_LIST = [{
  "key": "Today",
  "title": TOKENS.PERIOD_TODAY,
  "label": TOKENS.PAST_OVER_TODAY,
  threshold: Number.MIN_SAFE_INTEGER
}, {
  "key": "24 Hours",
  "title": TOKENS.PERIOD_HOURS_24,
  threshold: Number.MIN_SAFE_INTEGER
}, {
  "key": "3 Days",
  "title": TOKENS.PERIOD_DAYS_3,
  threshold: 1
}, {
  "key": "7 Days",
  "title": TOKENS.PERIOD_DAYS_7,
  threshold: 3
}, {
  "key": "30 Days",
  "title": TOKENS.PERIOD_DAYS_30,
  threshold: 7
}, {
  "key": "3 Months",
  "title": TOKENS.PERIOD_MONTHS_3,
  threshold: 30
}, {
  "key": "12 Months",
  "title": TOKENS.PERIOD_MONTHS_12,
  threshold: 90
}];
var EDI_DOCUMENTS_DESC = {
  "100": "Insurance Plan Description",
  "101": "Name and Address Lists",
  "102": "Associated Data",
  "103": "Abandoned Property Filings",
  "104": "Air Shipment Information",
  "105": "Business Entity Filings",
  "106": "Motor Carrier Rate Proposal",
  "107": "Request for Motor Carrier Rate Proposal",
  "108": "Response to a Motor Carrier Rate Proposal",
  "109": "Vessel Content Details",
  "110": "Air Freight Details and Invoice",
  "111": "Individual Insurance Policy and Client Information",
  "112": "Property Damage Report",
  "113": "Election Campaign and Lobbyist Reporting",
  "120": "Vehicle Shipping Order",
  "121": "Vehicle Service",
  "124": "Vehicle Damage",
  "125": "Multilevel Railcar Load Details",
  "126": "Vehicle Application Advice",
  "127": "Vehicle Baying Order",
  "128": "Dealer Information",
  "129": "Vehicle Carrier Rate Update",
  "130": "Student Educational Record (Transcript)",
  "131": "Student Educational Record (Transcript) Acknowledgment",
  "132": "Human Resource Information",
  "133": "Educational Institution Record",
  "135": "Student Aid Origination Record",
  "138": "Educational Testing and Prospect Request and Report",
  "139": "Student Loan Guarantee Result",
  "140": "Product Registration",
  "141": "Product Service Claim Response",
  "142": "Product Service Claim",
  "143": "Product Service Notification",
  "144": "Student Loan Transfer and Status Verification",
  "146": "Request for Student Educational Record (Transcript)",
  "147": "Response to Request for Student Educational Record (Transcript)",
  "148": "Report of Injury, Illness or Incident",
  "149": "Notice of Tax Adjustment or Assessment",
  "150": "Tax Rate Notification",
  "151": "Electronic Filing of Tax Return Data Acknowledgment",
  "152": "Statistical Government Information",
  "153": "Unemployment Insurance Tax Claim or Charge Information",
  "154": "Secured Interest Filing",
  "155": "Business Credit Report",
  "157": "Notice of Power of Attorney",
  "158": "Tax Jurisdiction Sourcing",
  "159": "Motion Picture Booking Confirmation",
  "160": "Transportation Automatic Equipment Identification",
  "161": "Train Sheet",
  "163": "Transportation Appointment Schedule Information",
  "170": "Revenue Receipts Statement",
  "175": "Court and Law Enforcement Notice",
  "176": "Court Submission",
  "179": "Environmental Compliance Reporting",
  "180": "Return Merchandise Authorization and Notification",
  "185": "Royalty Regulatory Report",
  "186": "Insurance Underwriting Requirements Reporting",
  "187": "Premium Audit Request and Return",
  "188": "Educational Course Inventory",
  "189": "Application for Admission to Educational Institutions",
  "190": "Student Enrollment Verification",
  "191": "Student Loan Pre-Claims and Claims",
  "194": "Grant or Assistance Application",
  "195": "Federal Communications Commission (FCC) License Application",
  "196": "Contractor Cost Data Reporting",
  "197": "Real Estate Title Evidence",
  "198": "Loan Verification Information",
  "199": "Real Estate Settlement Information",
  "200": "Mortgage Credit Report",
  "201": "Residential Loan Application",
  "202": "Secondary Mortgage Market Loan Delivery",
  "203": "Secondary Mortgage Market Investor Report",
  "204": "Motor Carrier Load Tender",
  "205": "Mortgage Note",
  "206": "Real Estate Inspection",
  "210": "Motor Carrier Freight Details and Invoice",
  "211": "Motor Carrier Bill of Lading",
  "212": "Motor Carrier Delivery Trailer Manifest",
  "213": "Motor Carrier Shipment Status Inquiry",
  "214": "Transportation Carrier Shipment Status Message",
  "215": "Motor Carrier Pickup Manifest",
  "216": "Motor Carrier Shipment Pickup Notification",
  "217": "Motor Carrier Loading and Route Guide",
  "219": "Logistics Service Request",
  "220": "Logistics Service Response",
  "222": "Cartage Work Assignment",
  "223": "Consolidators Freight Bill and Invoice",
  "224": "Motor Carrier Summary Freight Bill Manifest",
  "225": "Response to a Cartage Work Assignment",
  "227": "Trailer Usage Report",
  "228": "Equipment Inspection Report",
  "240": "Motor Carrier Package Status",
  "242": "Data Status Tracking",
  "244": "Product Source Information",
  "245": "Real Estate Tax Service Response",
  "248": "Account Assignment/Inquiry and Service/Status",
  "249": "Animal Toxicological Data",
  "250": "Purchase Order Shipment Management Document",
  "251": "Pricing Support",
  "252": "Insurance Producer Administration",
  "255": "Underwriting Information Services",
  "256": "Periodic Compensation",
  "259": "Residential Mortgage Insurance Explanation of Benefits",
  "260": "Application for Mortgage Insurance Benefits",
  "261": "Real Estate Information Request",
  "262": "Real Estate Information Report",
  "263": "Residential Mortgage Insurance Application Response",
  "264": "Mortgage Loan Default Status",
  "265": "Real Estate Title Insurance Services Order",
  "266": "Mortgage or Property Record Change Notification",
  "267": "Individual Life, Annuity and Disability Application",
  "268": "Annuity Activity",
  "269": "Health Care Benefit Coordination Verification",
  "270": "Eligibility, Coverage or Benefit Inquiry",
  "271": "Eligibility, Coverage or Benefit Information",
  "272": "Property and Casualty Loss Notification",
  "273": "Insurance/Annuity Application Status",
  "274": "Healthcare Provider Information",
  "275": "Patient Information",
  "276": "Health Care Claim Status Request",
  "277": "Health Care Information Status Notification",
  "278": "Health Care Services Review Information",
  "280": "Voter Registration Information",
  "283": "Tax or Fee Exemption Certification",
  "284": "Commercial Vehicle Safety Reports",
  "285": "Commercial Vehicle Safety and Credentials Information Exchange",
  "286": "Commercial Vehicle Credentials",
  "288": "Wage Determination",
  "290": "Cooperative Advertising Agreements",
  "300": "Reservation (Booking Request) (Ocean)",
  "301": "Confirmation (Ocean)",
  "303": "Booking Cancellation (Ocean)",
  "304": "Shipping Instructions",
  "309": "Customs Manifest",
  "310": "Freight Receipt and Invoice (Ocean)",
  "311": "Canada Customs Information",
  "312": "Arrival Notice (Ocean)",
  "313": "Shipment Status Inquiry (Ocean)",
  "315": "Status Details (Ocean)",
  "317": "Delivery/Pickup Order",
  "319": "Terminal Information",
  "322": "Terminal Operations and Intermodal Ramp Activity",
  "323": "Vessel Schedule and Itinerary (Ocean)",
  "324": "Vessel Stow Plan (Ocean)",
  "325": "Consolidation of Goods In Container",
  "326": "Consignment Summary List",
  "350": "Customs Status Information",
  "352": "Customs Carrier General Order Status",
  "353": "Customs Events Advisory Details",
  "354": "Customs Automated Manifest Archive Status",
  "355": "Customs Acceptance/Rejection",
  "356": "Customs Permit to Transfer Request",
  "357": "Customs In-Bond Information",
  "358": "Customs Consist Information",
  "359": "Customs Customer Profile Management",
  "361": "Carrier Interchange Agreement (Ocean)",
  "362": "Cargo Insurance Advice of Shipment",
  "404": "Rail Carrier Shipment Information",
  "410": "Rail Carrier Freight Details and Invoice",
  "412": "Trailer or Container Repair Billing",
  "414": "Rail Carhire Settlements",
  "417": "Rail Carrier Waybill Interchange",
  "418": "Rail Advance Interchange Consist",
  "419": "Advance Car Disposition",
  "420": "Car Handling Information",
  "421": "Estimated Time of Arrival and Car Scheduling",
  "422": "Equipment Order",
  "423": "Rail Industrial Switch List",
  "424": "Rail Carrier Services Settlement",
  "425": "Rail Waybill Request",
  "426": "Rail Revenue Waybill",
  "429": "Railroad Retirement Activity",
  "431": "Railroad Station Master File",
  "432": "Rail Deprescription",
  "433": "Railroad Reciprocal Switch File",
  "434": "Railroad Mark Register Update Activity",
  "435": "Standard Transportation Commodity Code Master",
  "436": "Locomotive Information",
  "437": "Railroad Junctions and Interchanges Activity",
  "440": "Shipment Weights",
  "451": "Railroad Event Report",
  "452": "Railroad Problem Log Inquiry or Advice",
  "453": "Railroad Service Commitment Advice",
  "455": "Railroad Parameter Trace Registration",
  "456": "Railroad Equipment Inquiry or Advice",
  "460": "Railroad Price Distribution Request or Response",
  "463": "Rail Rate Reply",
  "466": "Rate Request",
  "468": "Rate Docket Journal Log",
  "470": "Railroad Clearance",
  "475": "Rail Route File Maintenance",
  "485": "Ratemaking Action",
  "486": "Rate Docket Expiration",
  "490": "Rate Group Definition",
  "492": "Miscellaneous Rates",
  "494": "Rail Scale Rates",
  "500": "Medical Event Reporting",
  "501": "Vendor Performance Review",
  "503": "Pricing History",
  "504": "Clauses and Provisions",
  "511": "Requisition",
  "517": "Material Obligation Validation",
  "521": "Income or Asset Offset",
  "527": "Material Due-In and Receipt",
  "536": "Logistics Reassignment",
  "540": "Notice of Employment Status",
  "561": "Contract Abstract",
  "567": "Contract Completion Status",
  "568": "Contract Payment Management Report",
  "601": "Customs Export Shipment Information",
  "603": "Transportation Equipment Registration",
  "620": "Excavation Communication",
  "625": "Well Information",
  "650": "Maintenance Service Order",
  "715": "Intermodal Group Loading Plan",
  "753": "Request for Routing Instructions",
  "754": "Routing Instructions",
  "805": "Contract Pricing Proposal",
  "806": "Project Schedule Reporting",
  "810": "Invoice",
  "811": "Consolidated Service Invoice/Statement",
  "812": "Credit/Debit Adjustment",
  "813": "Electronic Filing of Tax Return Data",
  "814": "General Request, Response or Confirmation",
  "815": "Cryptographic Service Message",
  "816": "Organizational Relationships",
  "818": "Commission Sales Report",
  "819": "Joint Interest Billing and Operating Expense Statement",
  "820": "Payment Order/Remittance Advice",
  "821": "Financial Information Reporting",
  "822": "Account Analysis",
  "823": "Lockbox",
  "824": "Application Advice",
  "826": "Tax Information Exchange",
  "827": "Financial Return Notice",
  "828": "Debit Authorization",
  "829": "Payment Cancellation Request",
  "830": "Planning Schedule with Release Capability",
  "831": "Application Control Totals",
  "832": "Price/Sales Catalog",
  "833": "Mortgage Credit Report Order",
  "834": "Benefit Enrollment and Maintenance",
  "835": "Health Care Claim Payment/Advice",
  "836": "Procurement Notices",
  "837": "Health Care Claim",
  "838": "Trading Partner Profile",
  "839": "Project Cost Reporting",
  "840": "Request for Quotation",
  "841": "Specifications/Technical Information",
  "842": "Nonconformance Report",
  "843": "Response to Request for Quotation",
  "844": "Product Transfer Account Adjustment",
  "845": "Price Authorization Acknowledgment/Status",
  "846": "Inventory Inquiry/Advice",
  "847": "Material Claim",
  "848": "Material Safety Data Sheet",
  "849": "Response to Product Transfer Account Adjustment",
  "850": "Purchase Order",
  "851": "Asset Schedule",
  "852": "Product Activity Data",
  "853": "Routing and Carrier Instruction",
  "854": "Shipment Delivery Discrepancy Information",
  "855": "Purchase Order Acknowledgment",
  "856": "Ship Notice/Manifest",
  "857": "Shipment and Billing Notice",
  "858": "Shipment Information",
  "859": "Freight Invoice",
  "860": "Purchase Order Change Request - Buyer Initiated",
  "861": "Receiving Advice/Acceptance Certificate",
  "862": "Shipping Schedule",
  "863": "Report of Test Results",
  "864": "Text Message",
  "865": "Purchase Order Change Acknowledgment/Request - Seller Initiated",
  "866": "Production Sequence",
  "867": "Product Transfer and Resale Report",
  "868": "Electronic Form Structure",
  "869": "Order Status Inquiry",
  "870": "Order Status Report",
  "871": "Component Parts Content",
  "872": "Residential Mortgage Insurance Application",
  "873": "Commodity Movement Services",
  "874": "Commodity Movement Services Response",
  "875": "Grocery Products Purchase Order",
  "876": "Grocery Products Purchase Order Change",
  "877": "Manufacturer Coupon Family Code Structure",
  "878": "Product Authorization/De-authorization",
  "879": "Price Information",
  "880": "Grocery Products Invoice",
  "881": "Manufacturer Coupon Redemption Detail",
  "882": "Direct Store Delivery Summary Information",
  "883": "Market Development Fund Allocation",
  "884": "Market Development Fund Settlement",
  "885": "Retail Account Characteristics",
  "886": "Customer Call Reporting",
  "887": "Coupon Notification",
  "888": "Item Maintenance",
  "889": "Promotion Announcement",
  "890": "Contract & Rebate Management Transaction",
  "891": "Deduction Research Report",
  "893": "Item Information Request",
  "894": "Delivery/Return Base Record",
  "895": "Delivery/Return Acknowledgment or Adjustment",
  "896": "Product Dimension Maintenance",
  "920": "Loss or Damage Claim - General Commodities",
  "924": "Loss or Damage Claim - Motor Vehicle",
  "925": "Claim Tracer",
  "926": "Claim Status Report and Tracer Reply",
  "928": "Automotive Inspection Detail",
  "940": "Warehouse Shipping Order",
  "943": "Warehouse Stock Transfer Shipment Advice",
  "944": "Warehouse Stock Transfer Receipt Advice",
  "945": "Warehouse Shipping Advice",
  "947": "Warehouse Inventory Adjustment Advice",
  "980": "Functional Group Totals",
  "990": "Response to a Load Tender",
  "993": "Secured Receipt or Acknowledgment",
  "996": "File Transfer",
  "997": "Functional Acknowledgment",
  "998": "Set Cancellation",
  "999": "Implementation Acknowledgment",
  "APERAK": "Application error and acknowledgement message",
  "APSINQ": "IATA EDIFACT Application/Product Status Inquiry",
  "APSRES": "IATA EDIFACT Application/Product Status Response",
  "ASQSRM": "IATA EDIFACT Airport Resource Management Query/Flight Report",
  "ASRSRM": "IATA EDIFACT Airport Resource Response",
  "AUTACK": "Secure authentication and acknowledgement message",
  "AUTHOR": "Authorization message",
  "AVLREQ": "Availability request - interactive message",
  "AVLRSP": "Availability response - interactive message",
  "BALANC": "Balance message",
  "BANSTA": "Banking status message",
  "BAPLIE": "Bayplan/stowage plan occupied and empty locations message",
  "BAPLTE": "Bayplan/stowage plan total numbers message",
  "BERMAN": "Berth management message",
  "BMISRM": "Bulk marine inspection summary report message",
  "BOPBNK": "Bank transactions and portfolio transactions report message",
  "BOPCUS": "Balance of payment customer transaction report message",
  "BOPDIR": "Direct balance of payment declaration message",
  "BOPINF": "Balance of payment information from customer message",
  "BUSCRD": "Business credit report message",
  "CALINF": "Vessel call information message",
  "CASINT": "Request for legal administration action in civil proceedings message",
  "CASRES": "Legal administration response in civil proceedings message",
  "CHACCO": "Chart of accounts message",
  "CLASET": "Classification information set message",
  "CLTREQ": "IATA EDIFACT Clear/Terminate Request",
  "CLTRES": "IATA EDIFACT Clear/Terminate Response",
  "CNTCND": "Contractual conditions message",
  "COACSU": "Commercial account summary message",
  "COARRI": "Container discharge/loading report message",
  "CODECO": "Container gate-in/gate-out report message",
  "CODENO": "Permit expiration/clearance ready notice message",
  "COEDOR": "Container stock report message",
  "COHAOR": "Container special handling order message",
  "COLREQ": "Request for a documentary collection message",
  "COMDIS": "Commercial dispute message",
  "CONAPW": "Advice on pending works message",
  "CONDPV": "Direct payment valuation message",
  "CONDRA": "Drawing administration message",
  "CONDRO": "Drawing organisation message",
  "CONEST": "Establishment of contract message",
  "CONITT": "Invitation to tender message",
  "CONPVA": "Payment valuation message",
  "CONQVA": "Quantity valuation message",
  "CONRPW": "Response of pending works message",
  "CONTEN": "Tender message",
  "CONTRL": "Syntax and Service Report",
  "CONWQD": "Work item quantity determination message",
  "COPARN": "Container announcement message",
  "COPAYM": "Contributions for payment",
  "COPINO": "Container pre-notification message",
  "COPRAR": "Container discharge/loading order message",
  "COREOR": "Container release order message",
  "COSTCO": "Container stuffing/stripping confirmation message",
  "COSTOR": "Container stuffing/stripping order message",
  "CREADV": "Credit advice message",
  "CREEXT": "Extended credit advice message",
  "CREMUL": "Multiple credit advice message",
  "CURREQ": "IATA EDIFACT Currency Information Request",
  "CURRES": "IATA EDIFACT Currency Information Response",
  "CUSCAR": "Customs cargo report message",
  "CUSDEC": "Customs declaration message",
  "CUSEXP": "Customs express consignment declaration message",
  "CUSPED": "Periodic customs declaration message",
  "CUSREP": "Customs conveyance report message",
  "CUSRES": "Customs response message",
  "DAPLOS": "Data plot sheet message",
  "DBQBSM": "IATA EDIFACT Baggage Source",
  "DBQBTM": "IATA EDIFACT Baggage Transfer",
  "DBQPUM": "IATA EDIFACT Baggage Process and Unload",
  "DCQBPR": "IATA EDIFACT Boarding Pass Reprint Request",
  "DCQCKF": "IATA EDIFACT Flight Check-in Update Request",
  "DCQCKI": "IATA EDIFACT Through Check-In Request",
  "DCQCKU": "IATA EDIFACT Through Check-In Update Request",
  "DCQCKX": "IATA EDIFACT Through Check-In Cancel Request",
  "DCQFMI": "IATA EDIFACT Flight Management Request",
  "DCQLCI": "IATA EDIFACT Local Check-in Request",
  "DCQPLF": "IATA EDIFACT Passenger List Function Request",
  "DCQRCM": "IATA EDIFACT Flight Reaccommodation",
  "DCQSMF": "IATA EDIFACT Seat Map Function Request",
  "DCRCKA": "IATA EDIFACT Through Check-In Response",
  "DCRFMI": "IATA EDIFACT Flight Management Response",
  "DCRLCI": "IATA EDIFACT Local Check-in Response",
  "DCRSMF": "IATA EDIFACT Seat Map Function Response",
  "DEBADV": "Debit advice message",
  "DEBMUL": "Multiple debit advice message",
  "DEBREC": "Debts recovery message",
  "DELFOR": "Delivery schedule message",
  "DELJIT": "Delivery just in time message",
  "DESADV": "Despatch advice message",
  "DESTIM": "Equipment damage and repair estimate message",
  "DGRECA": "Dangerous goods recapitulation message",
  "DIRDEB": "Direct debit message",
  "DIRDEF": "Directory definition message",
  "DMRDEF": "Data maintenance request definition message",
  "DMSTAT": "Data maintenance status report/query message",
  "DOCADV": "Documentary credit advice message",
  "DOCAMA": "Advice of an amendment of a documentary credit message",
  "DOCAMI": "Documentary credit amendment information message",
  "DOCAMR": "Request for an amendment of a documentary credit message",
  "DOCAPP": "Documentary credit application message",
  "DOCARE": "Response to an amendment of a documentary credit message",
  "DOCINF": "Documentary credit issuance information message",
  "DWQDLI": "IATA EDIFACT Deadload Information",
  "DWRDLI": "IATA EDIFACT Deadload Response",
  "EBIREQ": "IATA EDIFACT Excess Baggage Information Request",
  "EBIRES": "IATA EDIFACT Excess Baggage Information Response",
  "ENTREC": "Accounting entries message",
  "FARREQ": "IATA EDIFACT Fares Display Request",
  "FARRES": "IATA EDIFACT Fares Display Response",
  "FINCAN": "Financial cancellation message",
  "FINPAY": "Multiple interbank funds transfer message",
  "FINSTA": "Financial statement of an account message",
  "FLIREQ": "IATA EDIFACT Flight Information Request",
  "FLIRES": "IATA EDIFACT Flight Information Response",
  "FTAREQ": "IATA EDIFACT Frequent Traveller Account Information/Enrollment Request",
  "FTARES": "IATA EDIFACT Frequent Traveller Account Information/Enrollment Response",
  "FTVREQ": "IATA EDIFACT Frequent Traveller Verification Request",
  "FTVRES": "IATA EDIFACT Frequent Traveller Verification Response",
  "GENRAL": "General purpose message",
  "GESMES": "Generic statistical message",
  "GOVCBR": "Government cross border regulatory message",
  "HANMOV": "Cargo/goods handling and movement message",
  "HSFREQ": "IATA EDIFACT Hybrid Screen Format Request",
  "HSFRES": "IATA EDIFACT Hybrid Screen Format Response",
  "HWPREQ": "IATA EDIFACT Hybrid Wrap-up Request",
  "HWPRES": "IATA EDIFACT Hybrid Wrap-up Response",
  "ICASRP": "Insurance claim assessment and reporting message",
  "ICSOLI": "Insurance claim solicitor\u2019s instruction message",
  "IFCSUM": "Forwarding and consolidation summary message",
  "IFLIRR": "Flight Inventory details Response Message",
  "IFTCCA": "Forwarding and transport shipment charge calculation message",
  "IFTDGN": "Dangerous goods notification message",
  "IFTFCC": "International transport freight costs and other charges message",
  "IFTIAG": "Dangerous cargo list message",
  "IFTICL": "Cargo insurance claims message",
  "IFTMAN": "Arrival notice message",
  "IFTMBC": "Booking confirmation message",
  "IFTMBF": "Firm booking message",
  "IFTMBP": "Provisional booking message",
  "IFTMCA": "Consignment advice message",
  "IFTMCS": "Instruction contract status message",
  "IFTMIN": "Instruction message",
  "IFTRIN": "Forwarding and transport rate information message",
  "IFTSAI": "Forwarding and transport schedule and availability information message",
  "IFTSTA": "International multimodal status report message",
  "IFTSTQ": "International multimodal status request message",
  "IHCEBI": "Interactive health insurance eligibility and benefits inquiry and response",
  "IHCLME": "Health care claim or encounter request and response -interactive message",
  "IMPDEF": "EDI implementation guide definition message",
  "INFCON": "Infrastructure condition message",
  "INFENT": "Enterprise accounting information message",
  "INSDES": "Instruction to despatch message",
  "INSPRE": "Insurance premium message",
  "INSREQ": "Inspection request message",
  "INSRPT": "Inspection report message",
  "INVOIC": "IATA EDIFACT Invoice",
  "INVRPT": "Inventory report message",
  "IPPOAD": "Insurance policy administration message",
  "IPPOMO": "Motor insurance policy message",
  "ISENDS": "Intermediary system enablement or disablement message",
  "ITAREQ": "IATA EDIFACT Inventory Adjustment Request",
  "ITARES": "IATA EDIFACT Inventory Adjustment Response",
  "ITPREQ": "IATA EDIFACT Itinerary Pricing Request",
  "ITPRES": "IATA EDIFACT Itinerary Pricing Response",
  "ITRRPT": "In transit report detail message",
  "JAPRES": "Job application result message",
  "JINFDE": "Job information demand message",
  "JOBAPP": "Job application proposal message",
  "JOBCON": "Job order confirmation message",
  "JOBMOD": "Job order modification message",
  "JOBOFF": "Job order message",
  "JUPREQ": "Justified payment request message",
  "KEYMAN": "Security key and certificate management message",
  "LEDGER": "Ledger message",
  "LREACT": "Life reinsurance activity message",
  "LRECLM": "Life reinsurance claims message",
  "MEDPID": "Person identification message",
  "MEDPRE": "Medical prescription message",
  "MEDREQ": "Medical service request message",
  "MEDRPT": "Medical service report message",
  "MEDRUC": "Medical resource usage and cost message",
  "MEQPOS": "Means of transport and equipment position message",
  "MOVINS": "Stowage instruction message",
  "MSCONS": "Metered services consumption report message",
  "NMEREQ": "IATA EDIFACT Passenger Name Update Request",
  "NMERES": "IATA EDIFACT Passenger Name Update Response",
  "ORDCHG": "Purchase order change request message",
  "ORDERS": "Purchase order message",
  "ORDRSP": "Purchase order response message",
  "OSTENQ": "Order status enquiry message",
  "OSTRPT": "Order status report message",
  "PAOREQ": "IATA EDIFACT Product Availability Offering Request",
  "PAORES": "IATA EDIFACT Product availability Offering Response",
  "PARTIN": "Party information message",
  "PASREQ": "Travel, tourism and leisure product application status request - interactive message",
  "PASRSP": "Travel, tourism and leisure product application status response - interactive message",
  "PAXLST": "EDIFACT Passenger List",
  "PAYDUC": "Payroll deductions advice message",
  "PAYEXT": "Extended payment order message",
  "PAYMUL": "Multiple payment order message",
  "PAYORD": "Payment order message",
  "PNREXC": "IATA EDIFACT PNR Data Exchange",
  "PNRREQ": "IATA EDIFACT PNR Data Request",
  "PRICAT": "Price/sales catalogue message",
  "PRIHIS": "Pricing history message",
  "PROCST": "Project cost reporting message",
  "PRODAT": "Product data message",
  "PRODEX": "Product exchange reconciliation message",
  "PROINQ": "Product inquiry message",
  "PROSRV": "Product service message",
  "PROTAP": "Project tasks planning message",
  "PRPAID": "Insurance premium payment message",
  "QALITY": "Quality data message",
  "QUEREQ": "IATA EDIFACT Queue Request",
  "QUERES": "IATA EDIFACT Queue Response",
  "QUOTES": "Quote message",
  "RDRMES": "Raw data reporting message",
  "REBORD": "Reinsurance bordereau message",
  "RECADV": "Receiving advice message",
  "RECALC": "Reinsurance calculation message",
  "RECECO": "Credit risk cover message",
  "RECLAM": "Reinsurance claims message",
  "RECORD": "Reinsurance core data message",
  "REGENT": "Registration of enterprise message",
  "RELIST": "Reinsured objects list message",
  "REMADV": "Remittance advice message",
  "REPREM": "Reinsurance premium message",
  "REQDOC": "Request for document message",
  "REQOTE": "Request for quote message",
  "RESETT": "Reinsurance settlement message",
  "RESMSG": "Reservation message",
  "RESREQ": "Reservation request - interactive message",
  "RESRSP": "Reservation response - interactive message",
  "RETACC": "Reinsurance technical account message",
  "RETANN": "Announcement for returns message",
  "RETINS": "Instruction for returns message",
  "RPCALL": "Repair call message",
  "SAFHAZ": "Safety and hazard data message",
  "SANCRT": "International movement of goods governmental regulatory message",
  "SBPREQ": "IATA EDIFACT Advance Seat Assignment and Boarding Pass Request",
  "SBPRES": "IATA EDIFACT Advance Seat Assignment and Boarding Pass Response",
  "SKDREQ": "Schedule request - interactive message",
  "SKDSLT": "IATA EDIFACT Airport Clearance/Movement Advice",
  "SKDUPD": "Schedule update - interactive message",
  "SLSFCT": "Sales forecast message",
  "SLSRPT": "Sales data report message",
  "SMPREQ": "IATA EDIFACT Seat Map Request",
  "SMPRES": "IATA EDIFACT Seat Map Response",
  "SOCADE": "Social administration message",
  "SPORES": "IATA EDIFACT Specific Product Offering Response",
  "SQCACK": "IATA EDIFACT Selective Query Control Acknowledgement",
  "SQCADV": "IATA EDIFACT Selective Query Control Advice",
  "SSIMOD": "Modification of identity details message",
  "SSRECH": "Worker's insurance history message",
  "SSREGW": "Notification of registration of a worker message",
  "SSRREQ": "IATA EDIFACT Special Services Request",
  "SSRRES": "IATA EDIFACT Special Services Response",
  "STATAC": "Statement of account message",
  "STLRPT": "Settlement transaction reporting message",
  "SUPCOT": "Superannuation contributions advice message",
  "SUPMAN": "Superannuation maintenance message",
  "SUPRES": "Supplier response message",
  "TANSTA": "Tank status report message",
  "TAXCON": "Tax control message",
  "TIQREQ": "Travel, tourism and leisure information inquiry request -interactive message",
  "TIQRSP": "Travel, tourism and leisure information inquiry response -interactive message",
  "TKCREQ": "IATA EDIFACT Ticketing Control Request",
  "TKCRES": "IATA EDIFACT Ticketing Control Response",
  "TKCUAC": "IATA EDIFACT Ticketing Unsolicited Airport Control Request",
  "TKTREQ": "IATA EDIFACT Ticketing Request",
  "TKTRES": "IATA EDIFACT Ticketing Response",
  "TNLRES": "IATA EDIFACT Traveller Name List Response",
  "TPFREP": "Terminal performance message",
  "TSDUPD": "Timetable static data update - interactive message",
  "TUPREQ": "Travel, tourism and leisure data update request -interactive message",
  "TUPRSP": "Travel, tourism and leisure data update response -interactive message",
  "UTILMD": "Utilities master data message",
  "UTILTS": "Utilities time series message",
  "VATDEC": "Value added tax message",
  "VERMAS": "Verified gross mass message",
  "VESDEP": "Vessel departure message",
  "WASDIS": "Waste disposal information message",
  "WKGRDC": "Work grant decision message",
  "WKGRRE": "Work grant request message",
  "WRPREQ": "IATA EDIFACT Wrap-up Request",
  "WRPRES": "IATA EDIFACT Wrap-up Response"
};
// EXTERNAL MODULE: ./src/data/connectors2/prototypes/index.ts + 10 modules
var connectors2_prototypes = __webpack_require__(10094);
;// CONCATENATED MODULE: ./src/dashboard/Dashboard.jsx
function Dashboard_typeof(o) { "@babel/helpers - typeof"; return Dashboard_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Dashboard_typeof(o); }
var Dashboard_excluded = ["disabled"];
function Dashboard_extends() { return Dashboard_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, Dashboard_extends.apply(null, arguments); }
function Dashboard_objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = Dashboard_objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function Dashboard_objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function Dashboard_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function Dashboard_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? Dashboard_ownKeys(Object(t), !0).forEach(function (r) { Dashboard_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Dashboard_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Dashboard_defineProperty(e, r, t) { return (r = Dashboard_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function Dashboard_toPropertyKey(t) { var i = Dashboard_toPrimitive(t, "string"); return "symbol" == Dashboard_typeof(i) ? i : i + ""; }
function Dashboard_toPrimitive(t, r) { if ("object" != Dashboard_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Dashboard_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Dashboard_slicedToArray(r, e) { return Dashboard_arrayWithHoles(r) || Dashboard_iterableToArrayLimit(r, e) || Dashboard_unsupportedIterableToArray(r, e) || Dashboard_nonIterableRest(); }
function Dashboard_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Dashboard_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return Dashboard_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Dashboard_arrayLikeToArray(r, a) : void 0; } }
function Dashboard_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function Dashboard_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function Dashboard_arrayWithHoles(r) { if (Array.isArray(r)) return r; }






















var Chart = /*#__PURE__*/react.lazy(function () {
  return __webpack_require__.e(/* import() */ "apexcharts").then(__webpack_require__.bind(__webpack_require__, 17242));
});
var store = function store(state, _ref) {
  var _window, _window2;
  var _ref2 = Dashboard_slicedToArray(_ref, 3),
    type = _ref2[0],
    value = _ref2[1],
    workspaceId = _ref2[2];
  var newState = Dashboard_objectSpread({}, state);
  switch (type) {
    case "period":
      newState.period = value;
      break;
    case "metrics":
      newState.metrics = value;
      break;
    case "workspaces":
      newState.workspaces = value;
      break;
    case "types":
      newState.types = value;
      break;
    case "documents":
      newState.documents = value;
      break;
    case "hide":
      newState.hide = value;
      break;
    case "revert":
      newState = Dashboard_objectSpread(Dashboard_objectSpread(Dashboard_objectSpread({}, DEFAULT_STORE), value), {}, {
        editing: true
      });
      break;
    case "cancel":
      newState = Dashboard_objectSpread(Dashboard_objectSpread({}, DEFAULT_STORE), value);
      break;
    case "save":
      // Save to the dashboard.json later.
      newState.editing = false;
      break;
    case "editing":
      newState.editing = value;
      return newState;
    case "update":
      return newState;
    default:
      return state;
  }
  var storage = (_window = window) === null || _window === void 0 || (_window = _window.localStorage) === null || _window === void 0 ? void 0 : _window.getItem(DASHBOARD_STORE_KEY);
  try {
    storage = JSON.parse(storage);
  } catch (_unused) {
    // ignored
  } finally {
    if (storage == null) storage = {};
  }
  storage[workspaceId ? workspaceId.toLowerCase() : ""] = Dashboard_objectSpread(Dashboard_objectSpread({}, newState), {}, {
    editing: undefined
  });
  (_window2 = window) === null || _window2 === void 0 || (_window2 = _window2.localStorage) === null || _window2 === void 0 || _window2.setItem(DASHBOARD_STORE_KEY, JSON.stringify(storage));
  return newState;
};
var initStore = function initStore(workspaceId) {
  var _window3, _window4;
  var storage = (_window3 = window) === null || _window3 === void 0 || (_window3 = _window3.localStorage) === null || _window3 === void 0 ? void 0 : _window3.getItem(DASHBOARD_STORE_KEY);
  try {
    storage = JSON.parse(storage);
  } catch (_unused2) {
    storage = null;
  }
  var state = null;
  if (storage) {
    try {
      state = storage[workspaceId ? workspaceId.toLowerCase() : ""];
      state = Dashboard_objectSpread(Dashboard_objectSpread(Dashboard_objectSpread({}, DEFAULT_STORE), state), {}, {
        editing: false
      });
    } catch (_unused3) {
      state = DEFAULT_STORE;
    }
  } else {
    state = DEFAULT_STORE;
  }
  if (((_window4 = window) === null || _window4 === void 0 || (_window4 = _window4.rsb) === null || _window4 === void 0 || (_window4 = _window4.dashboard) === null || _window4 === void 0 ? void 0 : _window4.maxDays) == null) return state;
  var period = PERIOD_LIST.filter(function (period) {
    return state.period == period.key;
  });
  if (period.length > 0 && window.rsb.dashboard.maxDays > period[0].threshold) return state;
  for (var index = PERIOD_LIST.length; index-- > 0;) {
    if (window.rsb.dashboard.maxDays > PERIOD_LIST[index].threshold) {
      return Dashboard_objectSpread(Dashboard_objectSpread({}, state), {}, {
        period: PERIOD_LIST[index].key
      });
    }
  }
  return Dashboard_objectSpread(Dashboard_objectSpread({}, state), {}, {
    period: PERIOD_LIST[0].key
  });
};
var getStartTime = function getStartTime(period) {
  var date = new Date();
  date.setMilliseconds(0);
  if (period.toLowerCase() == "today") {
    date.setHours(0, 0, 0, 0);
  } else {
    var interval = period.match(/^\d+/g)[0];
    if (period.endsWith("Hours")) {
      date.setHours(date.getHours() - interval);
    } else if (period.endsWith("Months")) {
      date.setMonth(date.getMonth() - interval);
    } else {
      date.setDate(date.getDate() - interval);
    }
  }
  return date.toISOString();
};
function getDiffValueDesc(periodKey) {
  var item = PERIOD_LIST.filter(function (period) {
    return period.key === periodKey;
  })[0];
  return item.label ? item.label.toLowerCase() : TOKENS.OVER_THE_PAST + " " + item.title.toLowerCase();
}
var initChartData = function initChartData(entities) {
  var _entities;
  entities = ((_entities = entities) === null || _entities === void 0 ? void 0 : _entities.map(function (entity) {
    return {
      success: Number(entity.success || 0),
      error: Number(entity.error || 0)
    };
  })) || [];
  var data = [{
    name: TOKENS.ERRORS,
    data: entities.map(function (entity) {
      return entity.error;
    }),
    values: []
  }, {
    name: TOKENS.SUCCESSFUL,
    data: entities.map(function (entity) {
      return entity.success;
    }),
    values: []
  }];
  var stat = entities.reduce(function (stat, entity) {
    var total = entity.success + entity.error;
    if (total > 0) {
      stat.sum += total;
      stat.count++;
      stat.min = Math.min(total, stat.min);
      stat.max = Math.max(total, stat.max);
    }
    return stat;
  }, {
    min: Number.MAX_SAFE_INTEGER,
    max: 0,
    sum: 0,
    count: 0
  });
  if (stat.count > 1 && stat.max > 0 && stat.min > 0 && stat.max / stat.min > 100) {
    var avg = Math.ceil(stat.sum / stat.count);
    var degree = 80;
    if (avg < stat.max) {
      var delta = Math.log((stat.max - avg) / (avg - stat.min) + Math.E - 1);
      var dx = Math.max(Math.ceil((stat.max - degree * stat.min) / (degree + delta) * delta), 1);
      stat.max -= dx;
    }
    stat.min = Math.ceil(stat.max / degree);
    data.forEach(function (row) {
      return row.values = row.data.slice();
    });
    entities.forEach(function (entity, index) {
      var total = entity.success + entity.error;
      if (total > stat.max) {
        var diff = total - stat.max;
        var ds = Math.min(Math.round(diff * entity.success / total), entity.success > 0 ? entity.success - 1 : 0);
        data[0].data[index] = entity.error - diff + ds;
        data[1].data[index] = entity.success - ds;
      } else if (total > 0 && total < stat.min) {
        var _diff = stat.min - total;
        var _ds = Math.round(_diff * entity.success / total);
        data[0].data[index] = entity.error + _diff - _ds;
        data[1].data[index] = entity.success + _ds;
      }
    });
  }
  return data;
};
var withEdit = function withEdit(Component) {
  var EditComponent = /*#__PURE__*/react.forwardRef(function (props, ref) {
    var _useState = (0,react.useState)(false),
      _useState2 = Dashboard_slicedToArray(_useState, 2),
      edit = _useState2[0],
      setEdit = _useState2[1];
    var disabled = props.disabled,
      compProps = Dashboard_objectWithoutProperties(props, Dashboard_excluded);
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("a", {
      className: "dashboard-operation ps-1 ".concat(disabled && "disabled"),
      onClick: disabled ? undefined : function () {
        return setEdit(!edit);
      }
    }, TOKENS.EDIT), edit && /*#__PURE__*/react.createElement(Component, Dashboard_extends({
      ref: ref,
      edit: edit,
      onDone: setEdit.bind(null, false)
    }, compProps)));
  });
  if (false) {}
  return EditComponent;
};
var CardLayout = /*#__PURE__*/react.memo(function (_ref3) {
  var className = _ref3.className,
    children = _ref3.children;
  if (!children || children.length <= 0) return null;
  var cardPerRow = Math.ceil(children.length / Math.ceil(children.length / 4));
  var rows = [];
  for (var index = 0; index < children.length; index += cardPerRow) {
    rows.push(children.slice(index, index + cardPerRow));
  }
  return /*#__PURE__*/react.createElement("div", {
    className: className
  }, rows.map(function (row, index) {
    return /*#__PURE__*/react.createElement("div", {
      className: "row card-row g-4",
      key: "row-".concat(index)
    }, row.map(function (child) {
      return /*#__PURE__*/react.createElement("div", {
        key: child.key,
        className: "col-md-6 col-lg-" + 12 / Math.max(row.length, 2)
      }, child);
    }));
  }));
});
var CardContainer = function CardContainer(_ref4) {
  var title = _ref4.title,
    className = _ref4.className,
    toolbar = _ref4.toolbar,
    children = _ref4.children;
  return /*#__PURE__*/react.createElement(Card/* default */.A, {
    className: "card-container ".concat(className ? className + "-container" : "")
  }, /*#__PURE__*/react.createElement(Card/* default */.A.Body, null, /*#__PURE__*/react.createElement("div", {
    className: "d-flex"
  }, title && /*#__PURE__*/react.createElement("p", {
    className: "illustration ps-2 ps-8"
  }, title), toolbar && /*#__PURE__*/react.createElement("div", {
    className: "ms-auto text-end"
  }, toolbar)), /*#__PURE__*/react.createElement("div", {
    className: "card-container-body ".concat(className !== null && className !== void 0 ? className : "")
  }, children)));
};
var DashboardAlert = function DashboardAlert(props) {
  var _props$type;
  var _useState3 = (0,react.useState)(true),
    _useState4 = Dashboard_slicedToArray(_useState3, 2),
    _ = _useState4[0],
    reRender = _useState4[1];
  var changed = (0,react.useRef)(true);
  var closeAlert = function closeAlert() {
    changed.current = false;
    reRender(!_);
  };
  (0,react.useEffect)(function () {
    var _props$timeout;
    var timeout = (_props$timeout = props.timeout) !== null && _props$timeout !== void 0 ? _props$timeout : 5000;
    if (timeout > 0 && changed.current && props.message) {
      var timer = setTimeout(closeAlert, timeout);
      return function () {
        changed.current = true;
        clearTimeout(timer);
      };
    }
  }, [props]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, changed.current && props.message && /*#__PURE__*/react.createElement(Alert/* default */.A, {
    className: "py-0 my-0",
    variant: (_props$type = props.type) !== null && _props$type !== void 0 ? _props$type : "danger",
    onClose: closeAlert,
    dismissible: true
  }, props.code && /*#__PURE__*/react.createElement(Alert/* default */.A.Heading, null, props.code), /*#__PURE__*/react.createElement("p", null, props.message)));
};
var FadeTransition = function FadeTransition(_ref5) {
  var state = _ref5.state,
    children = _ref5.children;
  var nodeRef = (0,react.useRef)(null);
  return /*#__PURE__*/react.createElement(SwitchTransition/* default */.A, null, /*#__PURE__*/react.createElement(CSSTransition/* default */.A, {
    key: state,
    nodeRef: nodeRef,
    addEndListener: function addEndListener(done) {
      return nodeRef.current.addEventListener("transitionend", done, false);
    },
    classNames: "fade"
  }, /*#__PURE__*/react.createElement("div", {
    ref: nodeRef,
    className: "fade-container"
  }, children)));
};
var DashboardCardLoading = function DashboardCardLoading(props) {
  var _props$title;
  return /*#__PURE__*/react.createElement(CardContainer, {
    title: (_props$title = props.title) !== null && _props$title !== void 0 ? _props$title : TOKENS.LOADING,
    className: props.className
  }, /*#__PURE__*/react.createElement(Placeholder/* default */.A, {
    as: "p",
    animation: "glow",
    "aria-hidden": "true"
  }, Array.from(Array(props.rows || 11).keys()).map(function (index) {
    return /*#__PURE__*/react.createElement(Placeholder/* default */.A, {
      key: index,
      className: "py-2 my-2",
      xs: 12
    });
  })));
};
var ItemsSelectorEditModal = withEdit(function (_ref6) {
  var edit = _ref6.edit,
    title = _ref6.title,
    description = _ref6.description,
    items = _ref6.items,
    min = _ref6.min,
    max = _ref6.max,
    selectAllEnabled = _ref6.selectAllEnabled,
    onSave = _ref6.onSave,
    onDone = _ref6.onDone;
  var saveBtn = (0,react.useRef)();
  var selectedItems = (0,react.useRef)(null);
  var handleChanged = (0,react.useCallback)(function (items) {
    if (items.length < min) {
      var _saveBtn$current$clas;
      (_saveBtn$current$clas = saveBtn.current.classList) === null || _saveBtn$current$clas === void 0 || _saveBtn$current$clas.add("disabled");
      selectedItems.current = null;
    } else {
      var _saveBtn$current$clas2;
      (_saveBtn$current$clas2 = saveBtn.current.classList) === null || _saveBtn$current$clas2 === void 0 || _saveBtn$current$clas2.remove("disabled");
      selectedItems.current = items;
    }
  }, []);
  var handleSave = (0,react.useCallback)(function () {
    selectedItems.current && onSave && onSave(selectedItems.current);
    onDone && onDone();
  }, [onSave, onDone]);
  return /*#__PURE__*/react.createElement(Modal/* default */.A, Dashboard_extends({
    className: "dashboard-modal",
    show: edit,
    onHide: onDone,
    animation: false,
    backdrop: "static"
  }, (0,utils/* onInputEnterDown */.yb)(handleSave)), /*#__PURE__*/react.createElement(Modal/* default */.A.Header, {
    className: "py-1",
    closeButton: true
  }, /*#__PURE__*/react.createElement(Modal/* default */.A.Title, null, title)), /*#__PURE__*/react.createElement(Modal/* default */.A.Body, null, /*#__PURE__*/react.createElement("p", null, description), /*#__PURE__*/react.createElement(searchable_item_selector, {
    items: items,
    onChange: handleChanged,
    selectAllEnabled: selectAllEnabled == true,
    max: max
  })), /*#__PURE__*/react.createElement(Modal/* default */.A.Footer, null, /*#__PURE__*/react.createElement(Button/* default */.A, {
    variant: "outline-secondary",
    onClick: onDone
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa fa-remove"
  }), "\xA0", TOKENS.CANCEL), /*#__PURE__*/react.createElement(Button/* default */.A, {
    variant: "primary",
    ref: saveBtn,
    onClick: handleSave
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa fa-save"
  }), "\xA0", TOKENS.SAVE)));
});
var QueryMetricCard = (0,utils/* withQuery */.VL)(/*#__PURE__*/react.memo(function (_ref7) {
  var title = _ref7.title,
    loading = _ref7.loading,
    negative = _ref7.negative,
    formatter = _ref7.formatter,
    current = _ref7.current,
    previous = _ref7.previous,
    period = _ref7.period,
    icon = _ref7.icon,
    hover = _ref7.hover,
    noTrend = _ref7.noTrend;
  var diffValueDesc = (0,react.useMemo)(function () {
    return getDiffValueDesc(period);
  }, [period]);
  return /*#__PURE__*/react.createElement(metric_card, {
    title: title,
    loading: loading,
    negative: negative,
    value: formatter(current || 0),
    diffValue: noTrend ? "N/A" : formatter(current - previous || 0),
    diffValueDesc: diffValueDesc,
    icon: icon,
    hover: hover
  });
}));
var TrendChart = (0,utils/* withQuery */.VL)(/*#__PURE__*/react.memo(function (_ref8) {
  var _entities2;
  var loading = _ref8.loading,
    period = _ref8.period,
    entities = _ref8.entities;
  entities = loading || entities.length > 0 ? entities : [{
    time: "",
    success: 0,
    error: 0
  }];
  var data = loading ? [{
    name: TOKENS.LOADING,
    data: function (count) {
      if (count <= 3) return [4, 10, 4];else if (count <= 7) return [2, 8, 4, 6, 10, 6, 4];else return [2, 6, 10, 6, 2, 6, 10, 6, 2, 6, 10, 6, 2, 6, 10, 6, 2, 6, 10, 6, 2, 6, 10, 6, 2, 6, 10, 6, 2, 6, 10, 6].slice(0, count || 9);
    }(period.toLowerCase() === "today" ? new Date().getHours() + 1 : period.match(/^\d+/g)[0]),
    values: []
  }] : initChartData(entities);
  var options = loading ? {
    title: {
      text: TOKENS.MESSAGES,
      floating: true
    },
    chart: {
      type: "bar",
      stacked: true,
      toolbar: {
        show: false
      },
      animations: {
        enabled: false
      }
    },
    tooltip: {
      enabled: false
    },
    states: {
      hover: {
        filter: {
          type: "none"
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#E0E6EA"],
    plotOptions: {
      bar: {
        columnWidth: "80%"
      }
    },
    xaxis: {
      labels: {
        show: false
      }
    },
    yaxis: {
      show: false
    },
    grid: {
      borderColor: "#f1f1f1",
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      },
      position: "back"
    }
  } : {
    title: {
      text: TOKENS.MESSAGES,
      floating: true
    },
    chart: {
      type: "bar",
      fontFamily: "Segoe UI",
      stacked: true,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: true,
        allowMouseWheelZoom: false
      }
    },
    colors: ["#A94442", "#2193D6"],
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "right",
      fontSize: "13px",
      markers: {
        width: 8,
        height: 8,
        radius: 8
      },
      itemMargin: {
        vertical: 15
      },
      offsetY: -10,
      inverseOrder: true
    },
    grid: {
      yaxis: {
        lines: {
          show: true
        }
      }
    },
    xaxis: {
      categories: (_entities2 = entities) === null || _entities2 === void 0 ? void 0 : _entities2.map(function (entity) {
        return entity.time;
      }),
      tickPlacement: "on",
      labels: {
        show: true
      }
    },
    yaxis: {
      show: true
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      enabled: true,
      followCursor: true,
      custom: function custom(_ref9) {
        var series = _ref9.series,
          dataPointIndex = _ref9.dataPointIndex;
        return "<div class='d-flex flex-column' style='font-size:13px;line-height:17px;margin:12px;'>" + "<span style='font-weight:700;'>" + entities[dataPointIndex].time + "</span>" + "<span style='padding-top:4px;'><span style='background:#2193D6;height:8px;width:8px;border-radius:8px;display:inline-block;'></span>&nbsp;&nbsp;" + TOKENS.SUCCESSFUL + ":&nbsp;&nbsp;" + (data[1].values[dataPointIndex] || series[1][dataPointIndex]) + "</span>" + "<span style='padding-top:4px;'><span style='background:#A94442;height:8px;width:8px;border-radius:8px;display:inline-block;'></span>&nbsp;&nbsp;" + TOKENS.ERRORS + ":&nbsp;&nbsp;" + (data[0].values[dataPointIndex] || series[0][dataPointIndex]) + "</span>" + "</div>";
      }
    }
  };
  return /*#__PURE__*/react.createElement(CardContainer, {
    className: "messages-chart"
  }, /*#__PURE__*/react.createElement(arc_suspense/* default */.A, null, /*#__PURE__*/react.createElement(Chart, {
    options: options,
    series: data,
    type: "bar",
    width: "100%",
    height: "100%"
  })));
}));
var normalizeEntities = function normalizeEntities(entities) {
  return entities.map(function (entity) {
    var row = {};
    Object.keys(entity).forEach(function (key) {
      return row[key] = Number(entity[key]) || entity[key];
    });
    row.activeid = entity.activeid;
    if (row.transactions <= 0 && row.previoustransactions <= 0) {
      row.transactionstrend = row.successratetrend = row.rawsuccessrate = 0;
      row.successrate = "-";
    } else {
      row.rawsuccessrate = row.successrate;
      row.transactionstrend = row.transactions - row.previoustransactions;
      row.successratetrend = (0,utils/* toFixed */.Mg)(row.successrate - row.previoussuccessrate) + "%";
      row.successrate = (0,utils/* toFixed */.Mg)(row.successrate) + "%";
    }
    delete row.previoustransactions;
    delete row.previoussuccessrate;
    return row;
  });
};
var successRateSortingFn = function successRateSortingFn(lhs, rhs) {
  var diff = lhs.original.rawsuccessrate - rhs.original.rawsuccessrate;
  return diff > 0 ? 1 : diff < 0 ? -1 : 0;
};
var TransactionsByWorkspace = (0,utils/* withQuery */.VL)((0,utils/* withLoading */.$A)(/*#__PURE__*/react.memo(function (_ref10) {
  var entities = _ref10.entities,
    title = _ref10.title,
    activeWorkspaces = _ref10.activeWorkspaces,
    dispatch = _ref10.dispatch;
  entities = (0,react.useMemo)(function () {
    return normalizeEntities(entities);
  }, [entities]);
  var workspaceItems = (0,react.useMemo)(function () {
    return entities.map(function (entity) {
      return {
        name: entity.activeid,
        selected: activeWorkspaces && activeWorkspaces.includes(entity.activeid)
      };
    });
  }, [entities, activeWorkspaces]);
  var rows = activeWorkspaces && activeWorkspaces.length > 0 ? entities.filter(function (row) {
    return activeWorkspaces.includes(row.activeid);
  }) : entities;
  var data = rows.length == entities.length ? rows : rows.map(function (row) {
    return Dashboard_objectSpread(Dashboard_objectSpread({}, row), {}, {
      count: rows.count
    });
  });
  var columns = [{
    header: TOKENS.WORKSPACE,
    accessorKey: "activeid",
    type: "link",
    link: function link(row) {
      var _window5;
      return ((_window5 = window) === null || _window5 === void 0 || (_window5 = _window5.rsb) === null || _window5 === void 0 || (_window5 = _window5.connectorList) === null || _window5 === void 0 || (_window5 = _window5[row.activeid.toLowerCase()]) === null || _window5 === void 0 ? void 0 : _window5.workspaceType) == "Regular" ? "flows.rst#" + encodeURIComponent(row.activeid) : "edi.rst#" + encodeURIComponent(row.activeid) + "|workflow";
    }
  }, {
    header: TOKENS.TRANSACTIONS,
    accessorKey: "transactions",
    type: "trend"
  }, {
    header: TOKENS.SUCCESSFUL,
    accessorKey: "successrate",
    type: "trend",
    sortingFn: successRateSortingFn
  }];
  return /*#__PURE__*/react.createElement(CardContainer, {
    className: "card-table-container",
    title: title,
    toolbar: /*#__PURE__*/react.createElement(ItemsSelectorEditModal, {
      title: TOKENS.TRANSACTIONS_BY_WORKSPACE,
      description: TOKENS.ACTIVE_WORKSPACES_EDIT_MODAL_DESC,
      disabled: workspaceItems.length <= 0,
      items: workspaceItems,
      min: 1,
      selectAllEnabled: true,
      onSave: function onSave(workspaces) {
        return dispatch(["workspaces", workspaces]);
      }
    })
  }, /*#__PURE__*/react.createElement(metric_list, {
    data: data,
    columns: columns,
    initialSorting: [{
      id: "transactions",
      desc: true
    }]
  }));
}), DashboardCardLoading));
var TransactionsByConnectorId = (0,utils/* withQuery */.VL)((0,utils/* withLoading */.$A)(/*#__PURE__*/react.memo(function (_ref11) {
  var entities = _ref11.entities,
    title = _ref11.title,
    activeTypes = _ref11.activeTypes,
    dispatch = _ref11.dispatch;
  entities = (0,react.useMemo)(function () {
    return normalizeEntities(entities);
  }, [entities]);
  var prototypes = (0,connectors2_prototypes/* useConnectorPrototypesStore */.ps)(function (state) {
    return state.prototypes;
  });
  var connectorTypes = (0,react.useMemo)(function () {
    var result = [];
    if (prototypes.size > 0) {
      Array.from(prototypes.values()).filter(function (prototype) {
        var _prototype$releaseSta;
        return ((_prototype$releaseSta = prototype.releaseStatus) === null || _prototype$releaseSta === void 0 ? void 0 : _prototype$releaseSta.toLowerCase()) !== "removed";
      }).forEach(function (type) {
        result.push({
          name: type.type,
          displayName: type.releaseStatus.toLowerCase() == "deprecated" ? type.name + " [" + TOKENS.DEPRECATED + "]" : type.name,
          deprecated: type.releaseStatus.toLowerCase() == "deprecated",
          selected: activeTypes && activeTypes.includes(type.type),
          icon: /*#__PURE__*/react.createElement("span", {
            className: "app-icon app-icon-" + type.type.toLowerCase().replace(/^cdata(.+)$/, "$1")
          }, "\xA0")
        });
      });
      result.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
    }
    return result;
  }, [activeTypes, prototypes]);
  var connectorData = (0,react.useMemo)(function () {
    return entities.map(function (connector) {
      var _window6;
      var workspaceId = connector.activeid.substring(0, connector.activeid.indexOf(":"));
      var connectorId = connector.activeid.substring(connector.activeid.indexOf(":") + 1);
      return Dashboard_objectSpread(Dashboard_objectSpread({}, connector), {}, {
        connectorId: connectorId,
        connectorType: ((_window6 = window) === null || _window6 === void 0 || (_window6 = _window6.rsb) === null || _window6 === void 0 || (_window6 = _window6.connectorList) === null || _window6 === void 0 || (_window6 = _window6[workspaceId.toLowerCase()]) === null || _window6 === void 0 || (_window6 = _window6.connectors) === null || _window6 === void 0 || (_window6 = _window6[connectorId.toLowerCase()]) === null || _window6 === void 0 ? void 0 : _window6.type) || ""
      });
    });
  }, [entities]);
  var rows = activeTypes && activeTypes.length > 0 ? connectorData.filter(function (row) {
    return activeTypes.includes(row.connectorType);
  }) : connectorData;
  var data = rows.length == entities.length ? rows : rows.map(function (row) {
    return Dashboard_objectSpread(Dashboard_objectSpread({}, row), {}, {
      count: rows.count
    });
  });
  var columns = [{
    header: TOKENS.CONNECTOR_ID,
    accessorKey: "activeid",
    render: function render(row) {
      var _window7;
      var workspaceId = row.activeid.substring(0, row.activeid.indexOf(":"));
      var href = ((_window7 = window) === null || _window7 === void 0 || (_window7 = _window7.rsb) === null || _window7 === void 0 || (_window7 = _window7.connectorList) === null || _window7 === void 0 || (_window7 = _window7[workspaceId.toLowerCase()]) === null || _window7 === void 0 ? void 0 : _window7.workspaceType) == "Regular" ? "flows.rst#" + encodeURIComponent(row.activeid).replace("%3A", "|") + "|settings" : "edi.rst#" + encodeURIComponent(workspaceId) + "|workflow";
      return /*#__PURE__*/react.createElement("a", {
        href: href
      }, /*#__PURE__*/react.createElement("span", {
        className: "app-icon app-icon-" + row.connectorType.toLowerCase()
      }, "\xA0"), row.connectorId);
    }
  }, {
    header: TOKENS.TRANSACTIONS,
    accessorKey: "transactions",
    type: "trend"
  }, {
    header: TOKENS.SUCCESSFUL,
    accessorKey: "successrate",
    type: "trend",
    sortingFn: successRateSortingFn
  }];
  return /*#__PURE__*/react.createElement(CardContainer, {
    className: "card-table-container",
    title: title,
    toolbar: /*#__PURE__*/react.createElement(ItemsSelectorEditModal, {
      title: TOKENS.TRANSACTIONS_BY_CONNECTOR_ID,
      description: TOKENS.ACTIVE_CONNECTORS_EDIT_MODAL_DESC,
      disabled: connectorTypes.length <= 0,
      items: connectorTypes,
      min: 1,
      selectAllEnabled: true,
      onSave: function onSave(types) {
        return dispatch(["types", types]);
      }
    })
  }, /*#__PURE__*/react.createElement(metric_list, {
    data: data,
    columns: columns,
    initialSorting: [{
      id: "transactions",
      desc: true
    }]
  }));
}), DashboardCardLoading));
var EDIDocuments = (0,utils/* withQuery */.VL)((0,utils/* withLoading */.$A)(/*#__PURE__*/react.memo(function (_ref12) {
  var entities = _ref12.entities,
    editing = _ref12.editing,
    title = _ref12.title,
    documents = _ref12.documents,
    hide = _ref12.hide,
    period = _ref12.period,
    dispatch = _ref12.dispatch,
    workspaceId = _ref12.workspaceId;
  var _useMemo = (0,react.useMemo)(function () {
      return [documents && documents.length > 0 ? documents.map(function (type) {
        var entity = entities.filter(function (row) {
          return row.type === type;
        });
        return entity != null && entity.length > 0 ? entity[0] : {
          type: type,
          current: 0,
          previous: 0
        };
      }) : entities.slice(0, 2), entities.map(function (document) {
        return {
          name: document.type,
          displayName: document.type + ": " + EDI_DOCUMENTS_DESC[document.type],
          selected: documents && documents.includes(document.type)
        };
      })];
    }, [entities, documents]),
    _useMemo2 = Dashboard_slicedToArray(_useMemo, 2),
    cards = _useMemo2[0],
    ediItems = _useMemo2[1];
  var diffValueDesc = (0,react.useMemo)(function () {
    return getDiffValueDesc(period);
  }, [period]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "d-flex ".concat(!editing && (hide || entities.length <= 0) && "hidden")
  }, /*#__PURE__*/react.createElement("p", {
    className: "section-header row-pt"
  }, title), editing && /*#__PURE__*/react.createElement("div", {
    className: "ms-auto align-self-center text-end"
  }, /*#__PURE__*/react.createElement("span", {
    className: "dashboard-operation me-1 me-8"
  }, /*#__PURE__*/react.createElement("input", {
    type: "checkbox",
    checked: hide,
    onChange: function onChange(e) {
      return dispatch(["hide", e.target.checked, workspaceId]);
    }
  }), /*#__PURE__*/react.createElement("span", {
    className: "hide-text",
    onClick: function onClick() {
      return dispatch(["hide", !hide, workspaceId]);
    } // Toggle the 'hide' state
    ,
    style: {
      cursor: "default"
    } // Add pointer cursor
  }, TOKENS.HIDE)), ediItems.length > 0 && /*#__PURE__*/react.createElement(ItemsSelectorEditModal, {
    title: TOKENS.EDI_DOCUMENTS,
    description: TOKENS.EDI_DOCUMENTS_EDIT_MODAL_DESC,
    onSave: function onSave(documents) {
      return dispatch(["documents", documents]);
    },
    items: ediItems,
    min: 2,
    max: 8,
    disabled: hide
  }))), /*#__PURE__*/react.createElement(CardLayout, {
    className: "edi-documents ".concat((hide || entities.length <= 0) && "hidden")
  }, (cards.length > 0 ? cards : entities.slice(0, 2)).map(function (document) {
    var _document$current;
    return /*#__PURE__*/react.createElement(metric_card, {
      key: document.type,
      title: document.type + ": " + EDI_DOCUMENTS_DESC[document.type],
      value: (_document$current = document.current) !== null && _document$current !== void 0 ? _document$current : 0,
      diffValue: document.current - document.previous || 0,
      diffValueDesc: diffValueDesc
    });
  })));
}), function (_ref13) {
  var editing = _ref13.editing,
    hide = _ref13.hide;
  return /*#__PURE__*/react.createElement("div", {
    className: !editing && hide ? "hidden" : undefined
  }, /*#__PURE__*/react.createElement("p", {
    className: "section-header row-pt"
  }, TOKENS.EDI_DOCUMENTS), /*#__PURE__*/react.createElement(DashboardCardLoading, {
    className: "edi-documents-loading",
    title: "",
    rows: 3
  }));
}));
var RecentMessages = (0,utils/* withQuery */.VL)((0,utils/* withLoading */.$A)(/*#__PURE__*/react.memo(function (_ref14) {
  var entities = _ref14.entities,
    title = _ref14.title,
    workspaceId = _ref14.workspaceId;
  var handleClick = function handleClick(event) {
    var _window8, _window9;
    event.preventDefault();
    var state = (_window8 = window) === null || _window8 === void 0 || (_window8 = _window8.localStorage) === null || _window8 === void 0 ? void 0 : _window8.getItem(LOGS_PAGE_SETTINGS.FILTER_STORE_KEY);
    var filter = state ? JSON.parse(state) : {};
    if (workspaceId) {
      filter["messageLogs"] = {
        selectedMap: {
          workspace: [workspaceId]
        }
      };
    } else {
      delete filter.messageLogs;
    }
    (_window9 = window) === null || _window9 === void 0 || (_window9 = _window9.localStorage) === null || _window9 === void 0 || _window9.setItem(LOGS_PAGE_SETTINGS.FILTER_STORE_KEY, JSON.stringify(filter));
    window.location.href = "activity.rst";
  };
  return /*#__PURE__*/react.createElement(CardContainer, {
    title: title,
    className: "card-table-container recent-messages",
    toolbar: /*#__PURE__*/react.createElement("a", {
      href: "#",
      onClick: handleClick,
      className: "dashboard-operation"
    }, TOKENS.SEE_ALL)
  }, /*#__PURE__*/react.createElement(MessageLogs/* MessageLogs */.ZF, {
    data: entities !== null && entities !== void 0 ? entities : []
  }));
}), DashboardCardLoading));
var propTypes = {
  /* Append className */
  className: (prop_types_default()).string,
  workspaceId: (prop_types_default()).string
};
var propsDefaults = {
  className: null,
  workspaceId: null
};
var Dashboard = function Dashboard(_ref15) {
  var _window12, _window15, _window$rsb$dashboard, _window16;
  var className = _ref15.className,
    workspaceId = _ref15.workspaceId;
  var prototypes = (0,connectors2_prototypes/* useConnectorPrototypesStore */.ps)(function (state) {
    return state.prototypes;
  });
  var _useReducer = (0,react.useReducer)(store, initStore(workspaceId)),
    _useReducer2 = Dashboard_slicedToArray(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];
  var data = (0,react.useRef)(Object.create(null));
  var handleError = (0,react.useCallback)(function (error, url, params, props) {
    return data.current.error = {
      error: error,
      code: props.title || params.MetricType || params.Type || url
    }, dispatch(["update", data.current.error, workspaceId]);
  }, [workspaceId]);
  var periodList = (0,react.useMemo)(function () {
    var _window10, _window11;
    if (((_window10 = window) === null || _window10 === void 0 || (_window10 = _window10.rsb) === null || _window10 === void 0 || (_window10 = _window10.dashboard) === null || _window10 === void 0 ? void 0 : _window10.maxDays) === null || ((_window11 = window) === null || _window11 === void 0 || (_window11 = _window11.rsb) === null || _window11 === void 0 || (_window11 = _window11.dashboard) === null || _window11 === void 0 ? void 0 : _window11.maxDays) < 0) return PERIOD_LIST;
    return PERIOD_LIST.filter(function (period) {
      return window.rsb.dashboard.maxDays > period.threshold;
    });
  }, []);
  var licenseTier = (_window12 = window) === null || _window12 === void 0 || (_window12 = _window12.rsb) === null || _window12 === void 0 || (_window12 = _window12.dashboard) === null || _window12 === void 0 ? void 0 : _window12.licenseTier;
  var metricList = (0,react.useMemo)(function () {
    return METRIC_LIST.filter(function (item) {
      return !item.licenseTier || (0,paid_feature_obj/* IsLicenseSufficient */.Y)(licenseTier, item.licenseTier);
    });
  }, [licenseTier]);
  var metricCards = (0,react.useMemo)(function () {
    if (prototypes.size < 1) return;
    var cards = state.metrics.length > 0 ? metricList.filter(function (item) {
      return state.metrics.includes(item.key);
    }) : metricList;
    return cards.map(function (metric) {
      var handleClick = function handleClick(event) {
        var _window13, _window14;
        event.preventDefault();
        var state = (_window13 = window) === null || _window13 === void 0 || (_window13 = _window13.localStorage) === null || _window13 === void 0 ? void 0 : _window13.getItem(LOGS_PAGE_SETTINGS.FILTER_STORE_KEY);
        var filter = state ? JSON.parse(state) : {};
        var tempFilter = metric.filter;
        if (metric.category) {
          var listStr = "";
          Array.from(prototypes.values()).forEach(function (prototype) {
            if (prototype.licenseTier == metric.category) {
              listStr += (listStr.length > 0 ? ", " : "") + "\"" + prototype.type + "\"";
            }
          });
          tempFilter = JSON.parse(tempFilter.replace("\"" + metric.category + "List\"", listStr));
        }
        if (workspaceId) {
          tempFilter.selectedMap.workspace = [workspaceId];
        }
        filter[metric.storagekey] = tempFilter;
        (_window14 = window) === null || _window14 === void 0 || (_window14 = _window14.localStorage) === null || _window14 === void 0 || _window14.setItem(LOGS_PAGE_SETTINGS.FILTER_STORE_KEY, JSON.stringify(filter));
        window.location.href = metric.href;
      };
      return /*#__PURE__*/react.createElement(QueryMetricCard, Dashboard_extends({
        key: metric.key,
        url: "src/dashboardGetMetric.rsb",
        params: JSON.stringify({
          "Period": state.period,
          "MetricType": metric.key,
          "WorkspaceId": workspaceId
        }),
        onError: handleError,
        period: state.period,
        formatter: utils/* toFixed */.Mg,
        hover: metric.href ? /*#__PURE__*/react.createElement("a", {
          href: "#",
          onClick: handleClick
        }, metric.linkLabel || TOKENS.SEE_ALL) : null
      }, metric));
    });
  }, [prototypes, state.metrics, state.period, workspaceId]);
  var error = data.current.error;
  data.current.error = null;
  var keyMetuicsPart = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/react.createElement("p", {
    className: "section-header row-pt"
  }, TOKENS.KEY_METRICS), /*#__PURE__*/react.createElement("div", {
    className: "ms-auto align-self-center text-end"
  }, state.editing && /*#__PURE__*/react.createElement(ItemsSelectorEditModal, {
    title: TOKENS.KEY_METRICS,
    description: TOKENS.KEY_METRICS_EDIT_MODAL_DESC,
    onSave: function onSave(metrics) {
      return dispatch(["metrics", metrics, workspaceId]);
    },
    items: metricList.map(function (metric) {
      return {
        name: metric.key,
        displayName: metric.title,
        selected: state.metrics && state.metrics.includes(metric.key)
      };
    }),
    min: 2,
    max: 8
  }))), /*#__PURE__*/react.createElement(CardLayout, {
    className: "key-metrics"
  }, metricCards));
  var ediDocumentsPart = /*#__PURE__*/react.createElement(EDIDocuments, {
    url: "src/dashboardGetEDIMetrics.rsb",
    params: JSON.stringify({
      "Period": state.period,
      "WorkspaceId": workspaceId
    }),
    onError: handleError,
    title: TOKENS.EDI_DOCUMENTS,
    period: state.period,
    documents: state.documents,
    editing: state.editing,
    hide: state.hide,
    dispatch: dispatch,
    workspaceId: workspaceId,
    multiple: true
  });
  return /*#__PURE__*/react.createElement("div", {
    className: "dashboard mb-3 mb-16 " + (className ? className : "")
  }, /*#__PURE__*/react.createElement("div", {
    className: "dashboard-header d-flex"
  }, (workspaceId == null || workspaceId == "") && /*#__PURE__*/react.createElement("p", {
    className: "dashboard-title"
  }, TOKENS.DASHBOARD), /*#__PURE__*/react.createElement("div", {
    className: "dashboard-toolbar d-flex align-self-center me-1 " + (workspaceId == null || workspaceId == "" ? "ms-auto" : "")
  }, /*#__PURE__*/react.createElement("span", {
    className: "dashboard-toolbar-text ms-auto me-2 me-8"
  }, TOKENS.SHOW_DATA_FOR_THE_PAST), /*#__PURE__*/react.createElement(DropdownButton/* default */.A, {
    className: "ps-2 ps-8",
    variant: "outline-secondary",
    title: periodList.filter(function (period) {
      return state.period == period.key || periodList.length == 1;
    })[0].title
  }, periodList.map(function (period) {
    return /*#__PURE__*/react.createElement(Dropdown/* default */.A.Item, {
      key: period.key,
      onClick: function onClick() {
        return dispatch(["period", period.key, workspaceId]);
      },
      active: state.period == period.key
    }, period.title);
  })), /*#__PURE__*/react.createElement(FadeTransition, {
    state: state.editing === true
  }, !state.editing ? /*#__PURE__*/react.createElement(Button/* default */.A, {
    className: "dashboard-operation ms-2 ms-8",
    variant: "outline-secondary",
    onClick: function onClick() {
      return dispatch(["editing", true, workspaceId]), data.current.previous = state;
    }
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa-solid fa-pen-to-square"
  }), "\xA0", TOKENS.EDIT) : /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Button/* default */.A, {
    className: "dashboard-operation ms-2 ms-8",
    variant: "outline-secondary",
    onClick: function onClick() {
      return dispatch(["revert", data.current.previous, workspaceId]);
    }
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa-solid fa-rotate-left"
  }), "\xA0", TOKENS.REVERT), /*#__PURE__*/react.createElement(Button/* default */.A, {
    className: "dashboard-operation ms-2 ms-8",
    variant: "outline-secondary",
    onClick: function onClick() {
      return dispatch(["cancel", data.current.previous, workspaceId]);
    }
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa-solid fa-xmark"
  }), "\xA0", TOKENS.CANCEL), /*#__PURE__*/react.createElement(Button/* default */.A, {
    className: "dashboard-operation ms-2 ms-8",
    variant: "primary",
    onClick: function onClick() {
      return dispatch(["save", null, workspaceId]);
    }
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa fa-save"
  }), "\xA0", TOKENS.SAVE))))), ((_window15 = window) === null || _window15 === void 0 || (_window15 = _window15.rsb) === null || _window15 === void 0 || (_window15 = _window15.dashboard) === null || _window15 === void 0 ? void 0 : _window15.diskspaceerror) && /*#__PURE__*/react.createElement(DashboardAlert, {
    code: TOKENS.DISKUSAGE,
    message: (0,utils/* FormatString */.FJ)(TOKENS.DISKUSAGE_WARNING, (_window$rsb$dashboard = (_window16 = window) === null || _window16 === void 0 || (_window16 = _window16.rsb) === null || _window16 === void 0 || (_window16 = _window16.dashboard) === null || _window16 === void 0 ? void 0 : _window16.diskspacethreshold) !== null && _window$rsb$dashboard !== void 0 ? _window$rsb$dashboard : 80),
    timeout: -1
  }), /*#__PURE__*/react.createElement(DashboardAlert, {
    code: (error === null || error === void 0 ? void 0 : error.code) || TOKENS.DASHBOARD,
    message: error === null || error === void 0 ? void 0 : error.error
  }), workspaceId == null || workspaceId == "" ? /*#__PURE__*/react.createElement(react.Fragment, null, keyMetuicsPart) : /*#__PURE__*/react.createElement(react.Fragment, null, ediDocumentsPart), /*#__PURE__*/react.createElement("p", {
    className: "section-header row-pt"
  }, TOKENS.TRENDS), /*#__PURE__*/react.createElement(TrendChart, {
    url: "src/dashboardGetTrend.rsb",
    params: JSON.stringify({
      "Period": state.period,
      "WorkspaceId": workspaceId
    }),
    period: state.period,
    onError: handleError,
    multiple: true
  }), (workspaceId == null || workspaceId == "") && /*#__PURE__*/react.createElement(CardLayout, {
    className: "active-lists row-pt"
  }, /*#__PURE__*/react.createElement(TransactionsByWorkspace, {
    key: TOKENS.TRANSACTIONS_BY_WORKSPACE,
    url: "src/dashboardGetActiveMetrics.rsb",
    params: JSON.stringify({
      "Period": state.period,
      "Type": "Workspaces",
      "WorkspaceId": workspaceId
    }),
    onError: handleError,
    title: TOKENS.TRANSACTIONS_BY_WORKSPACE,
    activeWorkspaces: state.workspaces,
    dispatch: dispatch,
    multiple: true
  }), /*#__PURE__*/react.createElement(TransactionsByConnectorId, {
    key: TOKENS.TRANSACTIONS_BY_CONNECTOR_ID,
    url: "src/dashboardGetActiveMetrics.rsb",
    params: JSON.stringify({
      "Period": state.period,
      "Type": "Connectors",
      "WorkspaceId": workspaceId
    }),
    onError: handleError,
    title: TOKENS.TRANSACTIONS_BY_CONNECTOR_ID,
    activeTypes: state.types,
    dispatch: dispatch,
    multiple: true
  })), workspaceId == null || workspaceId == "" ? /*#__PURE__*/react.createElement(react.Fragment, null, ediDocumentsPart) : /*#__PURE__*/react.createElement(react.Fragment, null, keyMetuicsPart), /*#__PURE__*/react.createElement("p", {
    className: "section-header row-pt"
  }, TOKENS.MESSAGES), /*#__PURE__*/react.createElement(RecentMessages, {
    url: "src/messages.rsd",
    params: JSON.stringify({
      "$top": 25,
      "$filter": "timestamp ge '" + getStartTime(state.period) + "'" + (workspaceId ? " and (firstworkspaceid eq '" + workspaceId + "' or lastworkspaceid eq '" + workspaceId + "')" : ""),
      "$orderBy": "timestamp DESC"
    }),
    onError: handleError,
    title: TOKENS.RECENT_MESSAGES,
    workspaceId: workspaceId,
    multiple: true
  }));
};
Dashboard.prototype = propTypes;
Dashboard.defaultProps = propsDefaults;

/***/ }),

/***/ 29567:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5338);
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15877);
/* harmony import */ var _utils_sessionKeeper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43629);





var dashboard = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById("dashboard"));
dashboard.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Dashboard__WEBPACK_IMPORTED_MODULE_2__/* .Dashboard */ .x, null));
var sessionKeeper = new _utils_sessionKeeper__WEBPACK_IMPORTED_MODULE_3__/* .SessionKeeper */ .j();
sessionKeeper.start();

/***/ }),

/***/ 82460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZF: () => (/* binding */ MessageLogs),
/* harmony export */   aO: () => (/* binding */ buildTextQuery),
/* harmony export */   dw: () => (/* binding */ buildHeaderFilters),
/* harmony export */   oy: () => (/* binding */ initTrackedFilters),
/* harmony export */   qV: () => (/* binding */ sendGetRequest),
/* harmony export */   uN: () => (/* binding */ updateTrackedHeaderFilters)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _components_arc_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57491);
/* harmony import */ var _react_shared_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29029);
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25337);
/* harmony import */ var _components_table_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1295);
/* harmony import */ var _components_alert_DismissibleAlert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95631);
/* harmony import */ var _components_message_view_TransactionDetailCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24112);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64709);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(98313);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }











var PreviewMessageModal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.all(/* import() */[__webpack_require__.e("react"), __webpack_require__.e("vendors-node_modules_codemirror_autocomplete_dist_index_js-node_modules_codemirror_commands_d-ffc779"), __webpack_require__.e("vendors-node_modules_codemirror_language_dist_index_js"), __webpack_require__.e("vendors-node_modules_codemirror_lang-sql_dist_index_js-node_modules_codemirror_dist_index_js"), __webpack_require__.e("vendors-node_modules_handlebars_dist_cjs_handlebars_js-node_modules_fast-xml-parser_src_xmlpa-5f70ec"), __webpack_require__.e("vendors-node_modules_cdata-icon_dist_esm_index_js-node_modules_cdata-ui_dist_esm_index_js"), __webpack_require__.e("vendors-node_modules_react-hook-form_dist_index_esm_mjs"), __webpack_require__.e("src_components_arc-codemirror_CopyCodeButton_jsx-src_components_arc-codemirror_FormatCodeButton_jsx"), __webpack_require__.e("src_components_preview-message_index_jsx"), __webpack_require__.e("vendors"), __webpack_require__.e("src_components_utils_arcHooks_ts-src_components_arc-codemirror_index_scss-src_components_prev-2218ee0")]).then(__webpack_require__.bind(__webpack_require__, 84925));
});
function sendGetRequest(_x, _x2) {
  return _sendGetRequest.apply(this, arguments);
}
function _sendGetRequest() {
  _sendGetRequest = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(url, params) {
    var _response$data$items;
    var response, items, error;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return _react_shared_axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.get(url, {
            params: _objectSpread({
              "@json": true
            }, params)
          });
        case 2:
          response = _context5.sent;
          items = (_response$data$items = response.data.items) !== null && _response$data$items !== void 0 ? _response$data$items : [];
          error = (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__/* .getResultErrorMessage */ .hz)(items);
          return _context5.abrupt("return", {
            error: error,
            items: items
          });
        case 6:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _sendGetRequest.apply(this, arguments);
}
function buildCommonFilters(connectorList) {
  var connectorTypes = new Set();
  var workspaces = new Set();
  var connectorIds = [];
  for (var _i = 0, _Object$entries = Object.entries(connectorList); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      workspace = _Object$entries$_i[1];
    workspaces.add(workspace.id);
    for (var _i2 = 0, _Object$entries2 = Object.entries(workspace.connectors); _i2 < _Object$entries2.length; _i2++) {
      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
        connector = _Object$entries2$_i[1];
      connectorTypes.add(connector.type);
      connectorIds.push(connector.id);
    }
  }
  return [{
    odataKey: "timestamp",
    label: _constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .x.DateRange,
    options: [],
    isDatePicker: true
  }, {
    odataKey: "connectorType",
    label: _constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .x.ConnectorTypes,
    options: Array.from(connectorTypes).sort(),
    isDatePicker: false,
    mergeCheckItems: false
  }, {
    odataKey: "workspace",
    label: _constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .x.Workspaces,
    options: Array.from(workspaces).sort(),
    isDatePicker: false
  }, {
    odataKey: "connectorId",
    label: _constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .x.ConnectorIDs,
    options: connectorIds.sort(),
    isDatePicker: false
  }, {
    odataKey: "lastStatus",
    label: _constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .x.Status,
    options: ["Error", "Pending", "Skipped", "Success", "Warning"],
    isDatePicker: false
  }];
}
function buildHeaderFilters(trackedFilters) {
  var filters = [];
  var keyList = Object.keys(trackedFilters).sort();
  keyList.forEach(function (key) {
    filters.push({
      odataKey: key,
      label: key,
      options: trackedFilters[key],
      isDatePicker: false
    });
  });
  return filters;
}
function updateTrackedHeaderFilters(_x3, _x4, _x5) {
  return _updateTrackedHeaderFilters.apply(this, arguments);
}
function _updateTrackedHeaderFilters() {
  _updateTrackedHeaderFilters = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(label, updatedFilters, trackedFilters) {
    var _result$items$2;
    var rsp, _result$items$, _result, headerNames, _list, valueFilter, result, list;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          if (!updatedFilters.find(function (name) {
            return name === label;
          })) {
            _context6.next = 2;
            break;
          }
          return _context6.abrupt("return", null);
        case 2:
          rsp = {};
          if (!(_constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .x.TrackedHeaders === label)) {
            _context6.next = 16;
            break;
          }
          _context6.next = 6;
          return sendGetRequest("src/getMessageHeaders.rsb");
        case 6:
          _result = _context6.sent;
          if (!_result.error) {
            _context6.next = 10;
            break;
          }
          rsp.error = _result.error;
          return _context6.abrupt("return", rsp);
        case 10:
          headerNames = {};
          _list = (_result$items$ = _result.items[0]) === null || _result$items$ === void 0 ? void 0 : _result$items$.list;
          if (Array.isArray(_list)) {
            _list.sort().forEach(function (header) {
              return headerNames[header] = null;
            });
          } else if (_list) {
            // Only one item. It is string type.
            headerNames[_list] = null;
          }
          rsp.trackedFilters = _objectSpread(_objectSpread({}, headerNames), trackedFilters);
          rsp.updatedFilters = [].concat(_toConsumableArray(updatedFilters), [label]);
          return _context6.abrupt("return", rsp);
        case 16:
          valueFilter = "fieldname eq " + (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__/* .odataEscape */ .H7)(label);
          _context6.next = 19;
          return sendGetRequest("src/getMessageHeaders.rsb", {
            valueFilter: valueFilter
          });
        case 19:
          result = _context6.sent;
          if (!result.error) {
            _context6.next = 23;
            break;
          }
          rsp.error = result.error;
          return _context6.abrupt("return", rsp);
        case 23:
          list = (_result$items$2 = result.items[0]) === null || _result$items$2 === void 0 ? void 0 : _result$items$2.list;
          if (Array.isArray(list)) {
            trackedFilters[label] = list.sort();
          } else if (list) {
            trackedFilters[label] = [list];
          } else {
            trackedFilters[label] = [];
          }
          rsp.trackedFilters = _objectSpread({}, trackedFilters);
          rsp.updatedFilters = [].concat(_toConsumableArray(updatedFilters), [label]);
          return _context6.abrupt("return", rsp);
        case 28:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _updateTrackedHeaderFilters.apply(this, arguments);
}
function buildTextQuery(text, nonHeaderBuilder) {
  var filter = "";
  var searchableHeaderFilter = "";
  var groups = parseTextFilter(text);
  for (var i = 0; i < groups.length; i++) {
    var part = groups[i];
    var newFilter = null;
    var newSearchableHeaderFilter = null;
    var pos = part.indexOf(":");
    if (pos > 0) {
      newSearchableHeaderFilter = "(fieldname eq " + (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__/* .odataEscape */ .H7)(part.substring(0, pos)) + ")";
      if (pos < part.length - 1) {
        newSearchableHeaderFilter = "(" + newSearchableHeaderFilter + " and substringof(" + (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__/* .odataEscape */ .H7)(part.substring(pos + 1)) + ", fieldvalue) eq True)";
      }
    } else if (pos === 0) {
      newSearchableHeaderFilter = "(substringof(" + (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__/* .odataEscape */ .H7)(part.substring(1)) + ", fieldvalue) eq True)";
    } else {
      newFilter = nonHeaderBuilder(part);
    }
    if (newFilter) {
      if (filter) {
        filter += " and " + newFilter;
      } else {
        filter = newFilter;
      }
    }
    if (newSearchableHeaderFilter) {
      if (searchableHeaderFilter) {
        searchableHeaderFilter += " and " + newSearchableHeaderFilter;
      } else {
        searchableHeaderFilter = newSearchableHeaderFilter;
      }
    }
  }
  return [filter, searchableHeaderFilter];
}
function parseTextFilter(text) {
  var groups = [];
  var parts = text.split(" ");
  var section = "";
  for (var i = 0; i < parts.length; ++i) {
    if (parts[i].length === 0) {
      continue;
    }
    if (parts[i] === ":") {
      section = section + ":";
      continue;
    }
    if (section.length === 0) {
      section = parts[i];
      continue;
    }
    if (section.endsWith(":")) {
      groups.push(section + parts[i]);
      section = "";
    } else {
      groups.push(section);
      section = parts[i];
    }
  }
  if (section.length > 0) {
    groups.push(section);
  }
  return groups;
}
function buildODataQuery2(selectedMap, commonFilters, headerFilters) {
  var odataQuery = "";
  var trackedHeaderQuery = "";
  var trackedHeaders = [];
  var previousTrackedHeader = null;
  selectedMap.forEach(function (idList, label) {
    if (idList.length <= 0) {
      return;
    }
    var query = "";
    if (label === _constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .x.TrackedHeaders) {
      return;
    } else {
      var filter = _components_table_filter__WEBPACK_IMPORTED_MODULE_4__/* .TableFilter */ .r.getFilter(label, commonFilters, null);
      if (!filter) {
        filter = _components_table_filter__WEBPACK_IMPORTED_MODULE_4__/* .TableFilter */ .r.getFilter(label, null, headerFilters);
        if (!filter) {
          return;
        }
        trackedHeaders.push(filter.odataKey);
        if (trackedHeaderQuery === "") {
          query = _components_table_filter__WEBPACK_IMPORTED_MODULE_4__/* .TableFilter */ .r.odataInArray("fieldvalue", idList);
          query = "(fieldname eq ".concat((0,_components_utils__WEBPACK_IMPORTED_MODULE_3__/* .odataEscape */ .H7)(filter.odataKey), " and ").concat(query, ")");
          trackedHeaderQuery = query;
          previousTrackedHeader = label;
        } else {
          query = _components_table_filter__WEBPACK_IMPORTED_MODULE_4__/* .TableFilter */ .r.odataInArray((0,_components_utils__WEBPACK_IMPORTED_MODULE_3__/* .odataEscape */ .H7)(filter.odataKey), idList);
          if (previousTrackedHeader) {
            // rebuild OData filter for the previous tracked header
            trackedHeaderQuery = _components_table_filter__WEBPACK_IMPORTED_MODULE_4__/* .TableFilter */ .r.odataInArray((0,_components_utils__WEBPACK_IMPORTED_MODULE_3__/* .odataEscape */ .H7)(previousTrackedHeader), selectedMap.get(previousTrackedHeader));
            previousTrackedHeader = null;
          }
          trackedHeaderQuery += " and " + query;
        }
        return;
      }
      if (filter.isDatePicker) {
        query = _components_table_filter__WEBPACK_IMPORTED_MODULE_4__/* .TableFilter */ .r.getDateQuery(filter.odataKey, idList);
      } else {
        query = _components_table_filter__WEBPACK_IMPORTED_MODULE_4__/* .TableFilter */ .r.odataInArray(filter.odataKey, idList);
      }
    }
    if (odataQuery === "") {
      odataQuery = query;
    } else if (query) {
      odataQuery += " and " + query;
    }
  });
  return [odataQuery, trackedHeaderQuery, trackedHeaders];
}
function buildODataQuery(commonFilters, headerFilters, searchText, selectedMap) {
  var connectorTypes = "";
  var workspaceIds = [];
  var connectorIds = [];
  if (selectedMap.has(_constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .x.ConnectorTypes)) {
    connectorTypes = selectedMap.get(_constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .x.ConnectorTypes).join(",");
    selectedMap["delete"](_constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .x.ConnectorTypes);
  }
  if (selectedMap.has(_constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .x.Workspaces)) {
    workspaceIds = selectedMap.get(_constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .x.Workspaces);
    selectedMap["delete"](_constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .x.Workspaces);
  }
  if (selectedMap.has(_constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .x.ConnectorIDs)) {
    connectorIds = selectedMap.get(_constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .x.ConnectorIDs);
    selectedMap["delete"](_constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .x.ConnectorIDs);
  }
  var _buildODataQuery = buildODataQuery2(selectedMap, commonFilters, headerFilters),
    _buildODataQuery2 = _slicedToArray(_buildODataQuery, 3),
    msgQuery = _buildODataQuery2[0],
    headerQuery = _buildODataQuery2[1],
    headerList = _buildODataQuery2[2];
  var headerFilter = headerQuery;
  var filter = "";
  var transactionsFilter = "";
  if (searchText) {
    searchText = searchText.trim();
    var _buildTextQuery = buildTextQuery(searchText.trim(), function (text) {
        return "(substringof(".concat((0,_components_utils__WEBPACK_IMPORTED_MODULE_3__/* .odataEscape */ .H7)(text), ", messageid) eq True or substringof(").concat((0,_components_utils__WEBPACK_IMPORTED_MODULE_3__/* .odataEscape */ .H7)(text), ", lastfilename) eq True)");
      }),
      _buildTextQuery2 = _slicedToArray(_buildTextQuery, 2),
      textFilter = _buildTextQuery2[0],
      textHeaderFilter = _buildTextQuery2[1];
    if (textFilter) {
      filter = filter ? "(".concat(filter, ") and (").concat(textFilter, ")") : textFilter;
    }
    if (textHeaderFilter) {
      headerFilter = headerFilter ? "".concat(headerFilter, " and ").concat(textHeaderFilter) : textHeaderFilter;
    }
  }
  if (msgQuery) {
    filter = filter ? "(".concat(filter, ") and (").concat(msgQuery, ")") : msgQuery;
  }
  if (workspaceIds.length > 0) {
    if (transactionsFilter.length > 0) {
      transactionsFilter = "(" + transactionsFilter + ") and ";
    }
    transactionsFilter += "(" + _components_table_filter__WEBPACK_IMPORTED_MODULE_4__/* .TableFilter */ .r.odataInArray("WorkspaceId", workspaceIds) + ")";
  }
  if (connectorIds.length > 0) {
    if (transactionsFilter.length > 0) {
      transactionsFilter = "(" + transactionsFilter + ") and ";
    }
    transactionsFilter += "(" + _components_table_filter__WEBPACK_IMPORTED_MODULE_4__/* .TableFilter */ .r.odataInArray("ConnectorId", connectorIds) + ")";
  }
  if (headerList && headerList.length > 1) {
    return {
      filter: filter,
      headerFilter: headerFilter,
      multipleHeaders: headerList.join(","),
      connectorTypes: connectorTypes,
      transactionsFilter: transactionsFilter
    };
  } else {
    return {
      filter: filter,
      headerFilter: headerFilter,
      multipleHeaders: "",
      connectorTypes: connectorTypes,
      transactionsFilter: transactionsFilter
    };
  }
}

/**
 * To build the initial OData query filter by local storage when the page loading at first.
 */
function buildInitQuery(commonFilters, headerFilters, browserStorageKey) {
  var val = _components_table_filter__WEBPACK_IMPORTED_MODULE_4__/* .TableFilter */ .r.loadFilter(browserStorageKey, commonFilters);
  return buildODataQuery(commonFilters, headerFilters, val.searchText, val.selectedMap);
}

/**
 * To initialize the tracked header filters by local storage
 */
function initTrackedFilters(browserStorageKey) {
  var filters = {};
  var tf = _components_table_filter__WEBPACK_IMPORTED_MODULE_4__/* .TableFilter */ .r.loadFilter(browserStorageKey, null);
  var selectedMap = tf.selectedMap;
  if (!selectedMap.has(_constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .x.TrackedHeaders)) {
    return filters;
  }
  var list = selectedMap.get(_constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .x.TrackedHeaders);
  list.forEach(function (key) {
    if (!selectedMap.has(key)) {
      return;
    }
    var options = selectedMap.get(key);
    filters[key] = options && options.length > 0 ? options : null;
  });
  return filters;
}
function tableColumns(connectorList, onPreview) {
  return [{
    id: "timestamp",
    header: "Date/Time",
    accessorKey: "timestamp",
    size: 220,
    cell: function cell(props) {
      return (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__/* .FormatTimestamp */ .W9)(props.getValue());
    }
  }, {
    id: "firstworkspaceid",
    header: "Flow Start and Last Processed",
    accessorKey: "firstworkspaceid",
    size: 500,
    cell: function cell(props) {
      var _connectorList$props$, _connectorList$props$2, _connectorList$props$3, _connectorList$props$4;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "app-icon app-icon-" + ((_connectorList$props$ = connectorList[props.row.original.firstworkspaceid.toLowerCase()]) === null || _connectorList$props$ === void 0 || (_connectorList$props$ = _connectorList$props$.connectors[props.row.original.firstconnectorid.toLowerCase()]) === null || _connectorList$props$ === void 0 || (_connectorList$props$ = _connectorList$props$.type.toLowerCase()) === null || _connectorList$props$ === void 0 ? void 0 : _connectorList$props$.replace(/^cdata(.+)$/, "$1"))
      }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        href: (connectorList === null || connectorList === void 0 || (_connectorList$props$2 = connectorList[props.row.original.firstworkspaceid.toLowerCase()]) === null || _connectorList$props$2 === void 0 ? void 0 : _connectorList$props$2.workspaceType) != "Regular" ? "edi.rst#" + encodeURIComponent(props.row.original.firstworkspaceid) + "|workflow" : "flows.rst#" + encodeURIComponent(props.row.getValue("firstworkspaceid")) + "|" + encodeURIComponent(props.row.original.firstconnectorid) + "|settings",
        rel: "noreferrer"
      }, props.row.original.firstconnectorid), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "far fa-arrow-right flow-start-end-icon"
      }), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "app-icon app-icon-" + ((_connectorList$props$3 = connectorList[props.row.original.lastworkspaceid.toLowerCase()]) === null || _connectorList$props$3 === void 0 || (_connectorList$props$3 = _connectorList$props$3.connectors[props.row.original.lastconnectorid.toLowerCase()]) === null || _connectorList$props$3 === void 0 || (_connectorList$props$3 = _connectorList$props$3.type.toLowerCase()) === null || _connectorList$props$3 === void 0 ? void 0 : _connectorList$props$3.replace(/^cdata(.+)$/, "$1"))
      }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        href: (connectorList === null || connectorList === void 0 || (_connectorList$props$4 = connectorList[props.row.original.lastworkspaceid.toLowerCase()]) === null || _connectorList$props$4 === void 0 ? void 0 : _connectorList$props$4.workspaceType) != "Regular" ? "edi.rst#" + encodeURIComponent(props.row.original.lastworkspaceid) + "|workflow" : "flows.rst#" + encodeURIComponent(props.row.original.lastworkspaceid) + "|" + encodeURIComponent(props.row.original.lastconnectorid) + "|settings",
        rel: "noreferrer"
      }, props.row.original.lastconnectorid));
    }
  }, {
    id: "lastfilename",
    header: "Latest Message",
    accessorKey: "lastfilename",
    cell: function cell(props) {
      var handlerCellClick = function handlerCellClick() {
        onPreview({
          workspaceId: props.row.original.lastworkspaceid,
          connectorId: props.row.original.lastconnectorid,
          messageId: props.row.original.messageid,
          filename: props.row.original.messageid + ".eml"
        });
      };
      return props.row.original.lastbatchmsgcount > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "javascript-link",
        href: (0,_Utils__WEBPACK_IMPORTED_MODULE_8__/* .BuildBatchGroupDetailLink */ .zx)(props.row.original.lastworkspaceid, props.row.original.lastconnectorid, "", props.row.original.messageid, true)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "far fa-table"
      }), "View Batch Group Messages" + " (" + props.row.original.lastbatchmsgcount + ")") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "javascript-link",
        onClick: handlerCellClick
      }, props.getValue());
    }
  }, {
    id: "processingtime",
    header: "Total Processing Time",
    accessorKey: "processingtime",
    size: 230,
    cell: function cell(props) {
      return (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__/* .FormatProcessingTime */ ._c)(props.getValue());
    }
  }, {
    id: "laststatus",
    header: "Status",
    accessorKey: "laststatus",
    size: 200,
    cell: function cell(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__/* .FormatStatus */ .gn)(props.getValue()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "status-details me-2",
        href: (0,_Utils__WEBPACK_IMPORTED_MODULE_8__/* .BuildMessageDetailLink */ .fe)(null, null, null, props.row.original.messageid)
      }, "View Details"));
    }
  }];
}
function renderRowDetail(row) {
  var otherInfo = [{
    name: _constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .x.CardMessageID,
    value: row.original.messageid
  }, {
    name: _constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .x.CardProcessingTime,
    value: (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__/* .FormatTimestamp */ .W9)(row.original.starttimestamp)
  }, {
    name: _constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .x.CardFileSize,
    value: (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__/* .FormatFileSize */ .XH)(row.original.lastfilesize)
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_message_view_TransactionDetailCard__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    workspaceId: row.original.lastworkspaceid,
    connectorId: row.original.lastconnectorid,
    messageId: row.original.messageid,
    otherInfo: otherInfo,
    showDetails: true
  });
}
function NormalMessageLogs(_ref) {
  var tableRef = _ref.tableRef,
    onFetchData = _ref.onFetchData,
    connectorList = _ref.connectorList,
    onPreview = _ref.onPreview,
    setError = _ref.setError;
  /* const */
  var browserStorageKey = "messageLogs";
  var commonFilters = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    return buildCommonFilters(connectorList);
  }, [connectorList]);

  /* state */
  var initialTrackedFilters = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    return initTrackedFilters(browserStorageKey);
  }, []);
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(initialTrackedFilters),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    trackedFilters = _React$useState2[0],
    setTrackedFilters = _React$useState2[1];
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState([]),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    updatedFilters = _React$useState4[0],
    setUpdatedFilters = _React$useState4[1];
  var headerFilters = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    return buildHeaderFilters(trackedFilters);
  }, [updatedFilters]);
  var initialQuery = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    return buildInitQuery(commonFilters, headerFilters, browserStorageKey);
  }, []);

  /* variable */
  var tableApiRef = tableRef || {};
  tableApiRef.reloadMessageLogs = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return onReload();
        case 2:
          return _context.abrupt("return", _context.sent);
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  var onToggle = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(label, nextShow) {
      var rsp;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (nextShow) {
              _context2.next = 2;
              break;
            }
            return _context2.abrupt("return");
          case 2:
            if (!commonFilters.find(function (filter) {
              return filter.label === label;
            })) {
              _context2.next = 4;
              break;
            }
            return _context2.abrupt("return");
          case 4:
            _context2.next = 6;
            return updateTrackedHeaderFilters(label, updatedFilters, trackedFilters);
          case 6:
            rsp = _context2.sent;
            if (rsp) {
              _context2.next = 9;
              break;
            }
            return _context2.abrupt("return");
          case 9:
            if (rsp.error) {
              setError({
                message: rsp.error
              });
            } else {
              setTrackedFilters(_objectSpread({}, rsp.trackedFilters));
              setUpdatedFilters(_toConsumableArray(rsp.updatedFilters));
            }
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function onToggle(_x6, _x7) {
      return _ref3.apply(this, arguments);
    };
  }();
  var onSearch = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(odataQuery, searchText, selectedMap) {
      var filter;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            filter = buildODataQuery(commonFilters, headerFilters, searchText, selectedMap);
            _context3.prev = 1;
            _context3.next = 4;
            return tableApiRef.setUrlParams({
              "$filter": filter.filter,
              "$messageHeaderFilter": filter.headerFilter,
              $multipleheaders: filter.multipleHeaders,
              connectorTypes: filter.connectorTypes,
              transactionsFilter: filter.transactionsFilter
            });
          case 4:
            _context3.next = 9;
            break;
          case 6:
            _context3.prev = 6;
            _context3.t0 = _context3["catch"](1);
            setError(_context3.t0);
          case 9:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[1, 6]]);
    }));
    return function onSearch(_x8, _x9, _x10) {
      return _ref4.apply(this, arguments);
    };
  }();
  var onReload = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            setUpdatedFilters([]);
            _context4.next = 3;
            return tableApiRef.reload();
          case 3:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function onReload() {
      return _ref5.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_table_filter__WEBPACK_IMPORTED_MODULE_4__/* .TableFilter */ .r, {
    storageKey: browserStorageKey,
    commonFilters: commonFilters,
    moreFilters: headerFilters,
    moreFilterLabel: _constants__WEBPACK_IMPORTED_MODULE_7__/* .TOKENS */ .x.TrackedHeaders,
    onChange: onSearch,
    onToggle: onToggle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_arc_table__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    columns: tableColumns(connectorList, onPreview),
    url: "src/messages.rsd",
    urlParams: {
      "$messageHeaderFilter": initialQuery.headerFilter,
      "$filter": initialQuery.filter,
      $multipleheaders: initialQuery.multipleHeaders,
      connectorTypes: initialQuery.connectorTypes,
      transactionsFilter: initialQuery.transactionsFilter
    },
    initialSorting: [{
      id: "timestamp",
      desc: true
    }],
    tableApiRef: tableApiRef,
    enableRowDetail: true,
    renderRowDetail: renderRowDetail,
    onError: setError,
    tableBodyRowProps: {
      className: "detail-row"
    },
    onFetchData: onFetchData,
    storageName: "MessageLogs"
  }));
}
function ServerSideMessageLogs(_ref6) {
  var data = _ref6.data,
    connectorList = _ref6.connectorList,
    onPreview = _ref6.onPreview,
    onError = _ref6.onError;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_arc_table__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    columns: tableColumns(connectorList, onPreview),
    url: null,
    data: data,
    initialSorting: [{
      id: "timestamp",
      desc: true
    }],
    enableRowDetail: true,
    renderRowDetail: renderRowDetail,
    onError: onError,
    paging: false,
    tableBodyRowProps: {
      className: "detail-row"
    }
  }));
}
function MessageLogs(_ref7) {
  var _window$rsb$connector, _window;
  var data = _ref7.data,
    tableRef = _ref7.tableRef,
    onFetchData = _ref7.onFetchData;
  /* const */
  var serverSideData = data != null;
  var connectorList = (_window$rsb$connector = (_window = window) === null || _window === void 0 || (_window = _window.rsb) === null || _window === void 0 ? void 0 : _window.connectorList) !== null && _window$rsb$connector !== void 0 ? _window$rsb$connector : {};
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0__.useState({
      show: false
    }),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    preview = _React$useState6[0],
    setPreview = _React$useState6[1];
  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_0__.useState(""),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    errorMessage = _React$useState8[0],
    setErrorMessage = _React$useState8[1];
  var setError = function setError(error) {
    if (error !== null && error !== void 0 && error.message) {
      setErrorMessage(error.message);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(PreviewMessageModal, {
    show: preview.show,
    workspaceId: preview.workspaceId,
    connectorId: preview.connectorId,
    messageId: preview.messageId,
    filename: preview.filename,
    onHide: function onHide() {
      return setPreview({
        show: false
      });
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_alert_DismissibleAlert__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    type: "error",
    message: errorMessage,
    onClose: function onClose() {
      return setErrorMessage(null);
    }
  }), serverSideData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ServerSideMessageLogs, {
    data: data,
    connectorList: connectorList,
    onError: setError,
    onPreview: setPreview
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NormalMessageLogs, {
    tableRef: tableRef,
    onFetchData: onFetchData,
    connectorList: connectorList,
    setError: setError,
    onPreview: setPreview
  }));
}

/***/ }),

/***/ 98313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XY: () => (/* binding */ BuildOutputMessagesDetailLink),
/* harmony export */   fe: () => (/* binding */ BuildMessageDetailLink),
/* harmony export */   zx: () => (/* binding */ BuildBatchGroupDetailLink)
/* harmony export */ });
function BuildMessageDetailLink(workspaceId, connectorId, direction, messageId, batchGroupId) {
  var urlParams = new URLSearchParams();
  if (workspaceId != null) urlParams.append("workspaceId", workspaceId);
  if (connectorId != null) urlParams.append("connectorId", connectorId);
  if (direction != null) urlParams.append("direction", direction);
  if (batchGroupId != null) urlParams.append("batchGroupId", batchGroupId);
  urlParams.append("messageId", messageId);
  return "activity.rst?" + urlParams.toString();
}
function BuildBatchGroupDetailLink(workspaceId, connectorId, direction, batchGroupId, isLog) {
  var urlParams = new URLSearchParams();
  urlParams.append("workspaceId", workspaceId);
  urlParams.append("connectorId", connectorId);
  urlParams.append("direction", direction);
  urlParams.append("batchGroupId", batchGroupId);
  urlParams.append("isLog", isLog);
  return "activity.rst?" + urlParams.toString();
}
function BuildOutputMessagesDetailLink(workspaceId, connectorId, inputMessageId) {
  var urlParams = new URLSearchParams();
  urlParams.append("workspaceId", workspaceId);
  urlParams.append("connectorId", connectorId);
  urlParams.append("inputMessageId", inputMessageId);
  return "activity.rst?" + urlParams.toString();
}

/***/ }),

/***/ 64709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ TOKENS)
/* harmony export */ });

var TOKENS = {
  DateRange: '[Date Range]',
  ConnectorTypes: 'Connector Types',
  ConnectorIDs: 'Connector Ids',
  Workspaces: 'Workspaces',
  Status: 'Status',
  Directions: 'Directions',
  TrackedHeaders: 'Filter by Tracked Headers',
  SenderID: 'Sender Id',
  ReceiverID: 'Receiver Id',
  IncomingType: 'Incoming Transaction Type',
  OutgoingType: 'Outgoing Transaction Type',
  AccessMethod: 'Methods',
  AccessUser: 'Users',
  AccessURL: 'URLs',
  AccessRemoteIP: 'Remote IPs',
  AuditAction: 'Actions',
  AuditUser: 'Users',
  CardMessageID: 'Message Id:',
  CardProcessingTime: 'Message Origination Timestamp:',
  CardFileSize: 'File Size:',
  SlaPreviousStatus: 'Previous Status',
  SlaCurrentStatus: 'Current Status',
  SlaStatusNotStarted: 'Not Started',
  SlaStatusInProgress: 'In Progress',
  SlaStatusAtRisk: 'At Risk',
  SlaStatusSuccess: 'Success',
  SlaStatusViolated: 'Violated',
  SlaColumnConnectorId: 'Connector Id',
  SlaColumnWorkspaceId: 'Workspace',
  SlaColumnPreviousStatus: 'Previous Status',
  SlaColumnCurrentStatus: 'Current Status',
  SlaColumnTimeRemaining: 'Time Remaining',
  // CommitDetailModal
  TabFileChanges: 'File Changes',
  TabDetails: 'Details'
};

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

/***/ 10094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Vr: () => (/* reexport */ AnyAction),
  fb: () => (/* reexport */ ConnectorOperation),
  Ex: () => (/* reexport */ SettingDefOtherNames),
  y6: () => (/* reexport */ SettingStyle),
  Q5: () => (/* reexport */ useConnectorConnectionDefsStore),
  AC: () => (/* reexport */ useConnectorEventDefsStore),
  nZ: () => (/* reexport */ useConnectorProfileDefsStore),
  ps: () => (/* reexport */ useConnectorPrototypesStore),
  E6: () => (/* reexport */ useConnectorSettingDefsStore)
});

// EXTERNAL MODULE: ./node_modules/zustand/esm/vanilla.mjs
var vanilla = __webpack_require__(97283);
// EXTERNAL MODULE: ./node_modules/zustand/esm/index.mjs
var esm = __webpack_require__(7282);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(46219);
// EXTERNAL MODULE: ./src/data/utils/index.ts + 2 modules
var data_utils = __webpack_require__(32037);
;// CONCATENATED MODULE: ./src/data/connectors2/prototypes/utils.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function serializePrototypes(prototypes) {
    return JSON.stringify(Array.from(prototypes.values()).map(prototype => (Object.assign(Object.assign({}, prototype), { supportedOperations: prototype.getActionOperation(AnyAction) }))));
}
function deserializePrototypes(text) {
    const plainPrototypes = JSON.parse(text);
    const prototypes = plainPrototypes.map(buildPrototype);
    return new utils/* CaseInsensitiveMap */.Y(prototypes.map(prototype => [prototype.type, prototype]));
}
function fetchPrototypes(etag, savedPrototypes) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0,data_utils/* fetch */.hd)({
            url: "src/connectorPrototypes.rsd?@json",
            method: "GET",
            headers: (etag && savedPrototypes) ? { "x-cdata-if-none-match": etag } : {},
            validateStatus: function (status) {
                return (status >= 200 && status < 300) || status === 304;
            }
        }).then(({ data, response }) => {
            if (response.status === 304) {
                return {
                    prototypes: savedPrototypes,
                    etag: etag
                };
            }
            if (isErrorResult(data)) {
                throw new Error(data.errorMessage);
            }
            const prototypes = new utils/* CaseInsensitiveMap */.Y();
            data.forEach((prototypeResult) => {
                const prototype = buildPrototype(prototypeResult);
                prototypes.set(prototype.type, prototype);
            });
            return {
                prototypes: prototypes,
                etag: response.headers["x-cdata-etag"] || undefined
            };
        });
    });
}
//////////////////////////////////
// Internal Methods
//////////////////////////////////
function isErrorResult(data) {
    return data.errorCode !== undefined;
}
function buildPrototype(prototypeResult) {
    const actionDef = prototypeResult.actionDef && Object.assign(Object.assign({}, prototypeResult.actionDef), { options: prototypeResult.actionDef.options.map(actionOption => (Object.assign(Object.assign({}, actionOption), { operations: actionOption.operations }))) });
    return {
        type: prototypeResult.type,
        name: prototypeResult.name,
        desc: prototypeResult.desc,
        helpLocation: prototypeResult.helpLocation,
        licenseTier: prototypeResult.licenseTier,
        releaseStatus: prototypeResult.releaseStatus,
        iconLocation: prototypeResult.iconLocation,
        actionDef: actionDef,
        enableInputTransform: prototypeResult.enableInputTransform,
        enableOutputTransform: prototypeResult.enableOutputTransform,
        getActionOperation: getActionOperation.bind(null, prototypeResult.supportedOperations, actionDef),
        hasTestFile: prototypeResult.hasTestFile,
        isSupportRequeue: prototypeResult.isSupportRequeue,
        isRetriableTransform: prototypeResult.isRetriableTransform,
        isSupportCheckPending: prototypeResult.isSupportCheckPending,
        supportSharedConnection: prototypeResult.supportSharedConnection,
    };
}
function getActionOperation(supportedOperations, actionDef, actionName) {
    var _a;
    if (actionName === AnyAction) {
        return supportedOperations;
    }
    else if (actionDef) {
        return (_a = actionDef.options.find(option => option.value.toLowerCase() === (actionName === null || actionName === void 0 ? void 0 : actionName.toLowerCase()))) === null || _a === void 0 ? void 0 : _a.operations;
    }
    else {
        return [];
    }
}

;// CONCATENATED MODULE: ./src/data/connectors2/prototypes/store.ts



const AnyAction = `@@@${new Date().getTime()}@@@`;
function createConnectorPrototypesStore(initialState) {
    return (0,vanilla/* createStore */.y)()(() => (initialState !== null && initialState !== void 0 ? initialState : {
        ready: false,
        etag: "",
        prototypes: new utils/* CaseInsensitiveMap */.Y(),
    }));
}
const storeRef = {
    store: null,
};
let nextFetchTimestamp = 0;
function useConnectorPrototypesStore(selector) {
    const key = "cdata.arc.connector.prototypes";
    if (storeRef.store == null) {
        if (localStorage.getItem(key + ".disableCache") == null) {
            const savedPrototypes = localStorage.getItem(key);
            if (savedPrototypes) {
                storeRef.store = createConnectorPrototypesStore({ ready: true, etag: localStorage.getItem(key + ".etag"), prototypes: deserializePrototypes(savedPrototypes) });
            }
        }
    }
    if (storeRef.store == null)
        storeRef.store = createConnectorPrototypesStore();
    if (Date.now() >= nextFetchTimestamp) {
        nextFetchTimestamp = Date.now() + 1000; // do fetch per 1s
        fetchPrototypes(storeRef.store.getState().etag, storeRef.store.getState().prototypes).then(result => {
            if (result && result.prototypes !== storeRef.store.getState().prototypes) {
                localStorage.setItem(key, serializePrototypes(result.prototypes));
                localStorage.setItem(key + ".etag", result.etag);
                storeRef.store.setState({ ready: true, etag: result.etag, prototypes: result.prototypes });
            }
        });
    }
    return (0,esm/* useStore */.Pj)(storeRef.store, selector);
}
/* Test */
if (typeof window.beforeEach === "function") {
    window.beforeEach(() => {
        storeRef.store = null;
    });
}

;// CONCATENATED MODULE: ./src/data/connectors2/prototypes/types.ts
var ConnectorOperation;
(function (ConnectorOperation) {
    ConnectorOperation["ActiveSend"] = "ActiveSend";
    ConnectorOperation["ActiveReceive"] = "ActiveReceive";
    ConnectorOperation["PassiveSend"] = "PassiveSend";
    ConnectorOperation["PassiveReceive"] = "PassiveReceive";
    ConnectorOperation["Transform"] = "Transform";
    ConnectorOperation["ScheduledTransform"] = "ScheduledTransform";
})(ConnectorOperation || (ConnectorOperation = {}));

;// CONCATENATED MODULE: ./src/data/connectors2/prototypes/eventDefs/utils.ts
var utils_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function fetchEventDefs(type, etag, savedEventDefs) {
    return utils_awaiter(this, void 0, void 0, function* () {
        return (0,data_utils/* fetch */.hd)({
            url: `src/connectorEventDefs.rsd?@json&type=${encodeURIComponent(type)}`,
            method: "GET",
            headers: (etag && savedEventDefs) ? { "x-cdata-if-none-match": etag } : {},
            validateStatus: function (status) {
                return (status >= 200 && status < 300) || status === 304;
            }
        }).then(({ data, response }) => {
            if (response.status === 304) {
                return {
                    defs: savedEventDefs,
                    etag: etag
                };
            }
            if (utils_isErrorResult(data)) {
                throw new Error(data.errorMessage);
            }
            return {
                defs: data.map(buildEventDef),
                etag: response.headers["x-cdata-etag"] || undefined
            };
        });
    });
}
//////////////////////////////////
// Internal Methods
//////////////////////////////////
function utils_isErrorResult(data) {
    return data.errorCode !== undefined;
}
function buildEventDef(eventDefResult) {
    return {
        name: eventDefResult.name,
        label: eventDefResult.label,
        description: eventDefResult.description,
        supportOperations: eventDefResult.supportOperations,
        inputs: eventDefResult.inputs.map(input => ({ name: input.name, description: input.description })),
        outputs: eventDefResult.outputs.map(output => ({ name: output.name, description: output.description })),
    };
}

;// CONCATENATED MODULE: ./src/data/connectors2/prototypes/eventDefs/store.ts



function createConnectorEventDefsStore(initialState) {
    return (0,vanilla/* createStore */.y)()(() => (initialState !== null && initialState !== void 0 ? initialState : {
        ready: false,
        etag: "",
        defs: [],
    }));
}
const storeCache = new utils/* CaseInsensitiveMap */.Y;
const nextFetchTimestamps = new utils/* CaseInsensitiveMap */.Y();
function useConnectorEventDefsStore(type, selector) {
    const key = `cdata.arc.connector.eventDefs.${type === null || type === void 0 ? void 0 : type.toLowerCase()}`;
    if (!storeCache.has(type)) {
        if (localStorage.getItem("cdata.arc.connector.prototypes.disableCache") == null) {
            const savedEventDefs = localStorage.getItem(key);
            if (savedEventDefs) {
                storeCache.set(type, createConnectorEventDefsStore({ ready: true, etag: localStorage.getItem(key + ".etag"), defs: JSON.parse(savedEventDefs) }));
            }
        }
        if (!storeCache.has(type)) {
            storeCache.set(type, createConnectorEventDefsStore());
        }
    }
    const store = storeCache.get(type);
    if (!nextFetchTimestamps.has(type) || Date.now() >= nextFetchTimestamps.get(type)) {
        nextFetchTimestamps.set(type, Date.now() + 1000); // do fetch per 1s
        fetchEventDefs(type, store.getState().etag, store.getState().defs).then(result => {
            if (result && result.defs !== store.getState().defs) {
                localStorage.setItem(key, JSON.stringify(result.defs));
                localStorage.setItem(key + ".etag", result.etag);
                store.setState({ ready: true, etag: result.etag, defs: result.defs });
            }
        });
    }
    return (0,esm/* useStore */.Pj)(store, selector);
}
/* Test */
if (typeof window.beforeEach === "function") {
    window.beforeEach(() => {
        storeCache.clear();
    });
}

;// CONCATENATED MODULE: ./src/data/connectors2/prototypes/eventDefs/index.ts



// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// CONCATENATED MODULE: ./src/data/connectors2/prototypes/settingDefs/utils.ts
var settingDefs_utils_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function fetchSettingDefs(type, category, etag, savedSettingDefs) {
    return settingDefs_utils_awaiter(this, void 0, void 0, function* () {
        return (0,data_utils/* fetch */.hd)({
            url: `src/connectorSettingDefs.rsd?@json&type=${encodeURIComponent(type)}&category=${encodeURIComponent(category)}`,
            method: "GET",
            headers: (etag && savedSettingDefs) ? { "x-cdata-if-none-match": etag } : {},
            validateStatus: function (status) {
                return (status >= 200 && status < 300) || status === 304;
            }
        }).then(({ data, response }) => {
            if (response.status === 304) {
                return {
                    defs: savedSettingDefs,
                    etag: etag
                };
            }
            if (settingDefs_utils_isErrorResult(data)) {
                throw new Error(data.errorMessage);
            }
            return {
                defs: data.map(buildSettingDef),
                etag: response.headers["x-cdata-etag"] || undefined
            };
        });
    });
}
function serializeSettingDefs(settingDefs) {
    return JSON.stringify(settingDefs.map(settingDef => (Object.assign(Object.assign({}, settingDef), { others: Object.fromEntries(Array.from(settingDef.others.entries())) }))));
}
function deserializeSettingDefs(text) {
    const plainSettingDefs = JSON.parse(text);
    return plainSettingDefs.map(settingDef => (Object.assign(Object.assign({}, settingDef), { others: new utils/* CaseInsensitiveMap */.Y(Object.entries(settingDef.others)) })));
}
//////////////////////////////////
// Internal Methods
//////////////////////////////////
function buildSettingDef(settingDefResult) {
    const settingDefOthers = new utils/* CaseInsensitiveMap */.Y(Object.entries(settingDefResult.others));
    return {
        name: settingDefResult.name,
        style: settingDefResult.style,
        default: settingDefResult.default,
        description: settingDefResult.description,
        tab: settingDefResult.tab,
        section: settingDefResult.section,
        label: settingDefResult.label,
        others: settingDefOthers,
    };
}
function settingDefs_utils_isErrorResult(data) {
    return data.errorCode !== undefined;
}

;// CONCATENATED MODULE: ./src/data/connectors2/prototypes/settingDefs/store.ts




function createConnectorSettingDefsStore(initialState) {
    return (0,vanilla/* createStore */.y)()(() => initialState);
}
const store_storeCache = new utils/* CaseInsensitiveMap */.Y;
const store_nextFetchTimestamps = new utils/* CaseInsensitiveMap */.Y();
function useSettingDefsStore(type, category, selector) {
    const types = react.useMemo(() => Array.isArray(type) ? type : [type], [type]);
    const storesMap = useInitializedStores(types, category);
    const [states, setStates] = react.useState(() => new utils/* CaseInsensitiveMap */.Y(Array.from(storesMap.entries()).map(([type, store]) => [type, store.getState()])));
    const selectedStates = react.useMemo(() => types.map(type => {
        if (states.has(type)) {
            return selector(states.get(type));
        }
        else if (storesMap.get(type)) {
            return selector(storesMap.get(type).getState());
        }
        else {
            return undefined;
        }
    }), [types, states, storesMap, selector]);
    react.useEffect(() => {
        const callbacks = Array.from(storesMap.values()).map(store => store.subscribe((newState) => {
            setStates(prev => new utils/* CaseInsensitiveMap */.Y(Array.from(prev.entries()).concat([[newState.type, newState]])));
        }));
        return () => callbacks.forEach(callback => callback());
    }, [storesMap, setStates]);
    return typeof type === "string" ? selectedStates[0] : selectedStates;
}
function useInitializedStores(types, category) {
    return react.useMemo(() => new utils/* CaseInsensitiveMap */.Y(types.map(type => {
        const key = `cdata.arc.connector.settingDefs.${type === null || type === void 0 ? void 0 : type.toLowerCase()}.${category === null || category === void 0 ? void 0 : category.toLowerCase()}`;
        const cacheKey = `${type}/${category}`;
        let store = store_storeCache.get(cacheKey);
        if (store == null) {
            if (localStorage.getItem("cdata.arc.connector.prototypes.disableCache") == null) {
                const savedSettingDefs = localStorage.getItem(key);
                if (savedSettingDefs) {
                    store = createConnectorSettingDefsStore({ ready: true, etag: localStorage.getItem(key + ".etag"), type, defs: deserializeSettingDefs(savedSettingDefs) });
                }
            }
            if (store == null) {
                store = createConnectorSettingDefsStore({ ready: false, etag: "", type, defs: [] });
            }
            store_storeCache.set(cacheKey, store);
        }
        if (!store_nextFetchTimestamps.has(cacheKey) || Date.now() >= store_nextFetchTimestamps.get(cacheKey)) {
            store_nextFetchTimestamps.set(cacheKey, Date.now() + 1000); // do fetch per 1s
            fetchSettingDefs(type, category, store.getState().etag, store.getState().defs).then(result => {
                if (result && result.defs !== store.getState().defs) {
                    localStorage.setItem(key, serializeSettingDefs(result.defs));
                    localStorage.setItem(key + ".etag", result.etag);
                    store.setState({ ready: true, etag: result.etag, defs: result.defs });
                }
            });
        }
        return [type, store];
    })), [types, category]);
}
function useConnectorSettingDefsStore(type, selector) {
    return useSettingDefsStore(type, "Setting", selector);
}
function useConnectorProfileDefsStore(type, selector) {
    return useSettingDefsStore(type, "Profile", selector);
}
function useConnectorConnectionDefsStore(type, selector) {
    return useSettingDefsStore(type, "Connection", selector);
}
/* Test */
if (typeof window.beforeEach === "function") {
    window.beforeEach(() => {
        store_storeCache.clear();
    });
}

;// CONCATENATED MODULE: ./src/data/connectors2/prototypes/settingDefs/types.ts
var SettingStyle;
(function (SettingStyle) {
    SettingStyle["Action"] = "Action";
    SettingStyle["Auth"] = "Auth";
    SettingStyle["Boolean"] = "Boolean";
    SettingStyle["Collection"] = "Collection";
    SettingStyle["ConnectionName"] = "SharedConnectionName";
    SettingStyle["Execution"] = "Execution";
    SettingStyle["Default"] = "Default";
    SettingStyle["HiddenSettings"] = "HiddenSettings";
    SettingStyle["IPList"] = "IPList";
    SettingStyle["KeyValue"] = "KeyValue";
    SettingStyle["MultiSelect"] = "MultiSelect";
    SettingStyle["Number"] = "Number";
    SettingStyle["Password"] = "Password";
    SettingStyle["PGPPrivateKey"] = "PGPPrivateKey";
    SettingStyle["PGPPublicKey"] = "PGPPublicKey";
    SettingStyle["PrivateCertificate"] = "PrivateCertificate";
    SettingStyle["PublicCertificate"] = "PublicCertificate";
    SettingStyle["PublicEndpoint"] = "PublicEndpoint";
    SettingStyle["Select"] = "Select";
    SettingStyle["Test"] = "Test";
})(SettingStyle || (SettingStyle = {}));
var SettingDefOtherNames;
(function (SettingDefOtherNames) {
    SettingDefOtherNames["ActionOptions"] = "Options";
    SettingDefOtherNames["ActionOptionDesc"] = "OptionDesc";
    SettingDefOtherNames["ActionOptionName"] = "OptionName";
    SettingDefOtherNames["ActionOptionOperation"] = "OptionOperation";
    SettingDefOtherNames["ActionOptionHidden"] = "OptionHidden";
    SettingDefOtherNames["AuthDataKey"] = "AuthDataKey";
    SettingDefOtherNames["AuthOAuthMode"] = "AuthOAuthMode";
    SettingDefOtherNames["AuthOAuthModeWhen"] = "AuthOAuthModeWhen";
    SettingDefOtherNames["AuthAuthenticatedLabel"] = "AuthAuthenticatedLabel";
    SettingDefOtherNames["AuthAuthenticatedIcon"] = "AuthAuthenticatedIcon";
    SettingDefOtherNames["AuthUnauthenticatedLabel"] = "AuthUnauthenticatedLabel";
    SettingDefOtherNames["AuthUnauthenticatedIcon"] = "AuthUnauthenticatedIcon";
    SettingDefOtherNames["BooleanName"] = "BooleanName";
    SettingDefOtherNames["BooleanDisplayType"] = "DisplayType";
    SettingDefOtherNames["CertIncludeAny"] = "CertIncludeAny";
    SettingDefOtherNames["CertPasswordConfig"] = "CertPasswordConfig";
    SettingDefOtherNames["DefaultMultiline"] = "DefaultMultilines";
    SettingDefOtherNames["DefaultMultilineRows"] = "DefaultMultilinesRows";
    SettingDefOtherNames["NumberMax"] = "NumberMax";
    SettingDefOtherNames["NumberMin"] = "NumberMin";
    SettingDefOtherNames["PublicEndpointPath"] = "Path";
    // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
    SettingDefOtherNames["SelectOptions"] = "Options";
    SettingDefOtherNames["SelectOptionNames"] = "OptionNames";
    SettingDefOtherNames["SelectOptionDescs"] = "OptionDescs";
    SettingDefOtherNames["SelectOptionHiddenWhen"] = "OptionHiddenWhen";
    // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
    SettingDefOtherNames["SelectDisplayType"] = "DisplayType";
    SettingDefOtherNames["ExecutionScript"] = "ExecutionScript";
    SettingDefOtherNames["ExecutionExecutingLabel"] = "ExecutionExecutingLabel";
    SettingDefOtherNames["ExecutionLabelIcon"] = "ExecutionLabelIcon";
    SettingDefOtherNames["TabIcon"] = "TabIcon";
    SettingDefOtherNames["TabCustomUI"] = "TabCustomUI";
    SettingDefOtherNames["SectionColumn"] = "SectionColumn";
    SettingDefOtherNames["SectionPlaceholder"] = "SectionPlaceholder";
    SettingDefOtherNames["SectionDescription"] = "SectionDescription";
    SettingDefOtherNames["SectionLabelHidden"] = "SectionLabelHidden";
    SettingDefOtherNames["CustomUI"] = "CustomUI";
    // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
    SettingDefOtherNames["PasswordDisplayType"] = "DisplayType";
    SettingDefOtherNames["Readonly"] = "Readonly";
    SettingDefOtherNames["Required"] = "Required";
    SettingDefOtherNames["RequiredWhen"] = "RequiredWhen";
    SettingDefOtherNames["DisabledWhen"] = "DisabledWhen";
    SettingDefOtherNames["HiddenWhen"] = "HiddenWhen";
    SettingDefOtherNames["LabelWhen"] = "LabelWhen";
    SettingDefOtherNames["MaxLength"] = "MaxLength";
    SettingDefOtherNames["MinLength"] = "MinLength";
    SettingDefOtherNames["HiddenSettingNames"] = "HiddenSettingNames";
    SettingDefOtherNames["InternalSetting"] = "InternalSetting";
    SettingDefOtherNames["PasswordCertPassword"] = "CertificatePassword";
    SettingDefOtherNames["PGPKeyPasswordConfig"] = "PGPKeyPasswordConfig";
    SettingDefOtherNames["KeyValuePlaceholder"] = "KeyValuePlaceholder";
    SettingDefOtherNames["KeyValueAddText"] = "KeyValueAddText";
    SettingDefOtherNames["TestTestingLabel"] = "TestTestingLabel";
    SettingDefOtherNames["TestLabelIcon"] = "TestLabelIcon";
    SettingDefOtherNames["InitValue"] = "InitValue";
})(SettingDefOtherNames || (SettingDefOtherNames = {}));

;// CONCATENATED MODULE: ./src/data/connectors2/prototypes/settingDefs/index.ts



;// CONCATENATED MODULE: ./src/data/connectors2/prototypes/index.ts






/***/ }),

/***/ 22002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: () => (/* reexport */ Setting),
  w: () => (/* reexport */ Settings)
});

// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(46219);
;// CONCATENATED MODULE: ./src/data/types/settings/types.ts

class Setting {
    constructor(name, value, vaultId) {
        this._name = name;
        this._value = value !== null && value !== void 0 ? value : null;
        this._vaultId = vaultId !== null && vaultId !== void 0 ? vaultId : null;
    }
    get name() { return this._name; }
    get value() { return this._value; }
    set value(value) { this._value = value; }
    get valueAsBool() { var _a; return ((_a = this._value) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === "true"; }
    get valueAsNumber() { return parseFloat(this._value); }
    get valueAsList() { return this._value.split(",").map(value => value.trim()); }
    get vaultId() { return this._vaultId; }
    set vaultId(vaultId) { this._vaultId = vaultId; }
}
function cloneSetting(setting) {
    return new Setting(setting.name, setting.value, setting.vaultId);
}
class Settings extends utils/* CaseInsensitiveMap */.Y {
    constructor(settings) {
        let entries = [];
        if (settings instanceof Settings) {
            entries = Array.from(settings.entries());
        }
        else if (Array.isArray(settings)) {
            entries = settings;
        }
        entries = entries.map(([key, setting]) => [key, cloneSetting(setting)]);
        super(entries);
    }
}

;// CONCATENATED MODULE: ./src/data/types/settings/index.ts


;// CONCATENATED MODULE: ./src/data/types/index.ts



/***/ }),

/***/ 32037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  hd: () => (/* reexport */ fetch),
  Uc: () => (/* reexport */ fetchSettings),
  Xx: () => (/* reexport */ updateSettings)
});

// UNUSED EXPORTS: buildSetting

// EXTERNAL MODULE: ../../.react-shared/axios/index.jsx
var axios = __webpack_require__(29029);
;// CONCATENATED MODULE: ./src/data/utils/fetch.ts

function parseJsonData(response) {
    var _a;
    if (response.status == 200 || response.status == 304 || response.status == 412 && response.headers["last-modified"]) {
        if (((_a = response.data.items) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            const data = response.data.items[0].jsondata;
            if (data) {
                const dataObj = JSON.parse(data);
                if (dataObj === null || dataObj === void 0 ? void 0 : dataObj.errorMessage) {
                    throw new Error(dataObj.errorMessage);
                }
                return dataObj;
            }
            else if (response.data.items[0]["rsb:emessage"]) {
                throw new Error(response.data.items[0]["rsb:emessage"]);
            }
            else {
                throw new Error("Unknown Result: " + response.data);
            }
        }
        else {
            return {};
        }
    }
    else {
        throw new Error(`${response.status}: ${response.statusText}`);
    }
}
function isAllowed(privileges, action) {
    return privileges.some((privilege) => privilege.action === action && privilege.allowed);
}
function isAccessControl(obj) {
    return typeof obj === "object" && "privileges" in obj;
}
function fetch(options) {
    return new Promise((resolve, reject) => {
        axios/* default */.A.request(Object.assign(Object.assign({}, options), { headers: Object.assign(Object.assign({}, options.headers), { "Cache-Control": "no-cache, no-store, max-age=0" }) })).then((response) => {
            try {
                const data = parseJsonData(response);
                if (isAccessControl(data)) {
                    data.isAllowed = isAllowed.bind(null, data.privileges);
                }
                else if (Array.isArray(data) && data.length > 0) {
                    data.forEach((item) => { isAccessControl(item) && (item.isAllowed = isAllowed.bind(null, item.privileges)); });
                }
                resolve({ data, response });
            }
            catch (error) {
                reject(error);
            }
        }).catch((error) => {
            reject(error);
        });
    });
}

// EXTERNAL MODULE: ./src/data/types/index.ts + 2 modules
var types = __webpack_require__(22002);
// EXTERNAL MODULE: ./src/components/utils/index.js + 1 modules
var utils = __webpack_require__(25337);
;// CONCATENATED MODULE: ./src/data/utils/fetchSettings.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function fetchSettings(url, settingsKey, parameters) {
    return __awaiter(this, void 0, void 0, function* () {
        const urlObj = new URL(url, "http://placeholder");
        if (parameters) {
            for (const key in parameters) {
                urlObj.searchParams.append(key, parameters[key]);
            }
        }
        return fetch({
            url: urlObj.toString().substring(urlObj.origin.length + 1),
            method: "GET",
        }).then(({ data, response }) => {
            var _a;
            const settings = new types/* Settings */.w();
            for (const key in data.settings) {
                const setting = buildSetting(data.settings[key]);
                settings.set(setting.name, setting);
            }
            (0,utils/* setResourceLastModified */.A3)(settingsKey, (_a = response === null || response === void 0 ? void 0 : response.headers) === null || _a === void 0 ? void 0 : _a["last-modified"]);
            return settings;
        });
    });
}
function updateSettings(url, settings, settingsKey, parameters) {
    return __awaiter(this, void 0, void 0, function* () {
        return fetch({
            url: url,
            method: "PUT",
            data: {
                JsonData: JSON.stringify(Object.assign(Object.assign({}, parameters), { settings: Array.from(settings.entries()).reduce((acc, [name, setting]) => (Object.assign(Object.assign({}, acc), { [name.toLowerCase()]: { name: setting.name, value: setting.value, vaultId: setting.vaultId } })), {}) })),
            },
            headers: { "If-Unmodified-Since": (0,utils/* getResourceLastModified */.G4)(settingsKey) },
        }).then(({ data, response }) => {
            var _a;
            const settings = data.settings ? new types/* Settings */.w() : undefined;
            for (const key in data.settings) {
                const setting = buildSetting(data.settings[key]);
                settings.set(setting.name, setting);
            }
            (0,utils/* setResourceLastModified */.A3)(settingsKey, (_a = response === null || response === void 0 ? void 0 : response.headers) === null || _a === void 0 ? void 0 : _a["last-modified"]);
            const result = {
                userMessage: data.userMessage,
                warning: data.warning,
                settings: settings
            };
            return result;
        });
    });
}
function buildSetting(result) {
    return new types/* Setting */.B(result.name, result.value, result.vaultId);
}

;// CONCATENATED MODULE: ./src/data/utils/index.ts




/***/ }),

/***/ 38318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ CaseInsensitiveMap)
/* harmony export */ });
class CaseInsensitiveMap extends Map {
    constructor(iterable) {
        super();
        this._names = new Map();
        Array.from(iterable !== null && iterable !== void 0 ? iterable : []).forEach(([key, value]) => this.set(key, value));
    }
    get(key) {
        return super.get(this._names.get(key === null || key === void 0 ? void 0 : key.toLowerCase()));
    }
    set(key, value) {
        const lowerKey = key === null || key === void 0 ? void 0 : key.toLowerCase();
        const realKey = this._names.get(lowerKey);
        !realKey && this._names.set(lowerKey, key);
        return super.set(realKey || key, value);
    }
    has(key) {
        return super.has(this._names.get(key === null || key === void 0 ? void 0 : key.toLowerCase()));
    }
    delete(key) {
        return super.delete(this._names.get(key === null || key === void 0 ? void 0 : key.toLowerCase()));
    }
}


/***/ }),

/***/ 46219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* reexport safe */ _CaseInsensitiveMap__WEBPACK_IMPORTED_MODULE_0__.Y)
/* harmony export */ });
/* harmony import */ var _CaseInsensitiveMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38318);



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
/******/ __webpack_require__.O(0, ["react","vendors"], () => (__webpack_exec__(29567)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);