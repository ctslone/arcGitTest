"use strict";
(self["webpackChunkcdata_arc"] = self["webpackChunkcdata_arc"] || []).push([["modals"],{

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

/***/ 13543:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Button.js
var Button = __webpack_require__(25615);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Modal.js + 6 modules
var Modal = __webpack_require__(48032);
// EXTERNAL MODULE: ../../.react-shared/axios/index.jsx
var axios = __webpack_require__(29029);
;// CONCATENATED MODULE: ./src/modals/LicenseWarningModal.jsx
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }






function LicenseWarningModal(_ref) {
  var title = _ref.title,
    message = _ref.message,
    messageHtml = _ref.messageHtml,
    timeout = _ref.timeout,
    track = _ref.track,
    show = _ref.show,
    onHide = _ref.onHide;
  var closeBtn = (0,react.useRef)(null);
  (0,react.useEffect)(function () {
    var interval = show && timeout > 0 ? setInterval(function () {
      if (--timeout > 0) {
        closeBtn.current.innerText = "Close" + "(" + timeout + "s)";
      } else {
        var _closeBtn$current$cla;
        clearInterval(interval);
        interval = null;
        closeBtn.current.innerText = "Close";
        (_closeBtn$current$cla = closeBtn.current.classList) === null || _closeBtn$current$cla === void 0 || _closeBtn$current$cla.remove("disabled");
      }
    }, 1000) : null;
    return function () {
      return interval && clearInterval(interval);
    };
  }, [show, timeout]);
  var handleClose = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            onHide && onHide();
            _context.t0 = track;
            if (!_context.t0) {
              _context.next = 5;
              break;
            }
            _context.next = 5;
            return axios/* default */.A.post("api/profile.rsd?@json", {
              "type": "Application",
              "LicenseWarnDate": new Date().toISOString()
            });
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleClose() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react.createElement(Modal/* default */.A, {
    className: "arc-modal react-bootstrap-modal",
    show: show,
    onHide: handleClose,
    backdrop: "static",
    keyboard: timeout <= 0
  }, /*#__PURE__*/react.createElement(Modal/* default */.A.Header, null, /*#__PURE__*/react.createElement(Modal/* default */.A.Title, null, title || "License Warning")), /*#__PURE__*/react.createElement(Modal/* default */.A.Body, null, (message || !messageHtml) && /*#__PURE__*/react.createElement("p", null, message), !message && messageHtml && /*#__PURE__*/react.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: messageHtml
    }
  })), /*#__PURE__*/react.createElement(Modal/* default */.A.Footer, null, /*#__PURE__*/react.createElement(Button/* default */.A, {
    ref: closeBtn,
    variant: "outline-secondary",
    className: timeout > 0 ? "disabled" : "",
    onClick: handleClose
  }, "Close" + (show && timeout > 0 ? "(" + timeout + "s)" : ""))));
}
LicenseWarningModal.propTypes = {
  /**
   * The license waring title.
   */
  title: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).element]),
  /**
   * The license waring message.
   */
  message: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).element]),
  /**
   * The license waring HTML message.
   */
  messageHtml: (prop_types_default()).string,
  /**
   * Show timeout?
   */
  timeout: (prop_types_default()).number,
  /**
   * Track the license warning date?
   */
  track: (prop_types_default()).bool,
  /**
   * Show the modal?
   */
  show: (prop_types_default()).bool,
  /**
   * Handle modal hide event.
   */
  onHide: (prop_types_default()).func
};
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Placeholder.js + 2 modules
var Placeholder = __webpack_require__(24288);
// EXTERNAL MODULE: ./src/components/utils/index.js + 1 modules
var utils = __webpack_require__(25337);
;// CONCATENATED MODULE: ./src/modals/TermsModal.jsx
function TermsModal_typeof(o) { "@babel/helpers - typeof"; return TermsModal_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, TermsModal_typeof(o); }
function TermsModal_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ TermsModal_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == TermsModal_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(TermsModal_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function TermsModal_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function TermsModal_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { TermsModal_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { TermsModal_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }








function TermsModal(_ref) {
  var logoutLink = _ref.logoutLink,
    show = _ref.show,
    onHide = _ref.onHide;
  var terms = (0,react.useRef)(null);
  var version = (0,react.useRef)(new Date().toISOString());
  (0,react.useEffect)(function () {
    var controller = new AbortController();
    show && TermsModal_asyncToGenerator(/*#__PURE__*/TermsModal_regeneratorRuntime().mark(function _callee() {
      var response;
      return TermsModal_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios/* default */.A.get("src/getTerms.rsb", {
              signal: controller.signal,
              params: {
                "@json": true,
                nonce: (0,utils/* securityRand */.ct)()
              }
            });
          case 2:
            response = _context.sent;
            if (response.data.items && response.data.items.length > 0) {
              version.current = response.data.items[0].version;
              terms.current.innerHTML = response.data.items[0].content;
            }
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
    return function () {
      return controller.abort();
    };
  }, [show]);
  var handleAgree = /*#__PURE__*/function () {
    var _ref3 = TermsModal_asyncToGenerator(/*#__PURE__*/TermsModal_regeneratorRuntime().mark(function _callee2() {
      return TermsModal_regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios/* default */.A.get("src/admin/agreeTerms.rsb", {
              params: {
                "nonce": (0,utils/* securityRand */.ct)(),
                agreedtermsversion: version.current
              }
            });
          case 2:
            onHide && onHide();
          case 3:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function handleAgree() {
      return _ref3.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react.createElement(Modal/* default */.A, {
    className: "arc-modal react-bootstrap-modal",
    show: show,
    backdrop: "static",
    keyboard: false
  }, /*#__PURE__*/react.createElement(Modal/* default */.A.Header, null, /*#__PURE__*/react.createElement(Modal/* default */.A.Title, null, "Terms and Conditions")), /*#__PURE__*/react.createElement(Modal/* default */.A.Body, null, /*#__PURE__*/react.createElement("div", {
    ref: terms,
    className: "well lic-content mb-0"
  }, /*#__PURE__*/react.createElement(Placeholder/* default */.A, {
    as: "p",
    animation: "glow",
    "aria-hidden": "true"
  }, Array.from(Array(12).keys()).map(function (index) {
    return /*#__PURE__*/react.createElement(Placeholder/* default */.A, {
      key: index,
      className: "pt-2 my-2",
      xs: 12
    });
  })))), /*#__PURE__*/react.createElement(Modal/* default */.A.Footer, null, /*#__PURE__*/react.createElement(Button/* default */.A, {
    variant: "outline-secondary",
    "data-loading-text": "Cancelling"
  }, /*#__PURE__*/react.createElement("a", {
    href: logoutLink,
    style: {
      color: "black"
    }
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa-solid fa-right-from-bracket"
  }), "\xA0\xA0", "Log out")), /*#__PURE__*/react.createElement(Button/* default */.A, {
    variant: "primary",
    "data-loading-text": "Processing",
    onClick: handleAgree
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa-regular fa-square-check"
  }), "\xA0\xA0", "I Agree")));
}
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Form.js + 9 modules
var Form = __webpack_require__(44324);
// EXTERNAL MODULE: ./src/components/alert/DismissibleAlert.tsx
var DismissibleAlert = __webpack_require__(95631);
;// CONCATENATED MODULE: ./src/modals/LoadingButton.jsx
var _excluded = ["loading", "loadingText"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }



function LoadingButton(_ref) {
  var loading = _ref.loading,
    loadingText = _ref.loadingText,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement(Button/* default */.A, _extends({}, props, {
    disabled: loading || props.disabled,
    onClick: !loading && !props.disabled ? props.onClick : null
  }), loading ? loadingText : /*#__PURE__*/react.createElement(react.Fragment, null, props.children));
}
LoadingButton.propTypes = {
  /**
   * The loading state.
   */
  loading: (prop_types_default()).bool,
  /**
  * The loading text.
  */
  loadingText: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).element]).isRequired
};
;// CONCATENATED MODULE: ./src/modals/RegisterModal.jsx
function RegisterModal_typeof(o) { "@babel/helpers - typeof"; return RegisterModal_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, RegisterModal_typeof(o); }
function RegisterModal_extends() { return RegisterModal_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, RegisterModal_extends.apply(null, arguments); }
function RegisterModal_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ RegisterModal_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == RegisterModal_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(RegisterModal_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == RegisterModal_typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != RegisterModal_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != RegisterModal_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function RegisterModal_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function RegisterModal_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { RegisterModal_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { RegisterModal_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }









function RegisterModal(_ref) {
  var _arguments = arguments;
  var prodName = _ref.prodName,
    csrfToken = _ref.csrfToken,
    show = _ref.show,
    onHide = _ref.onHide;
  var _useState = (0,react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    message = _useState2[0],
    setMessage = _useState2[1];
  var _useState3 = (0,react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    registeringType = _useState4[0],
    setRegisteringType = _useState4[1];
  var from = (0,react.useRef)(null);
  var formData = (0,react.useRef)({});
  var handleChange = function handleChange(event) {
    formData.current[event.target.name] = event.target.value;
  };
  var handleRegister = /*#__PURE__*/function () {
    var _ref2 = RegisterModal_asyncToGenerator(/*#__PURE__*/RegisterModal_regeneratorRuntime().mark(function _callee(register, event) {
      var _response$data$items, response, error, _error$response;
      return RegisterModal_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            event === null || event === void 0 || event.preventDefault();
            if (!(register && !from.current.checkValidity())) {
              _context.next = 5;
              break;
            }
            from.current.reportValidity();
            _context.next = 22;
            break;
          case 5:
            setRegisteringType(register);
            _context.prev = 6;
            _context.next = 9;
            return axios/* default */.A.get("src/admin/register.rst", {
              params: _objectSpread(_objectSpread({
                "nonce": (0,utils/* securityRand */.ct)()
              }, formData.current), {}, {
                "register": register,
                "csrftoken": csrfToken
              })
            });
          case 9:
            response = _context.sent;
            setRegisteringType(null);
            error = (0,utils/* getResultErrorMessage */.hz)((_response$data$items = response.data.items) !== null && _response$data$items !== void 0 ? _response$data$items : []);
            if (error) {
              setMessage({
                type: "error",
                message: error
              });
            } else if (register) {
              onHide === null || onHide === void 0 || onHide.apply(null, _arguments);
            }
            _context.next = 19;
            break;
          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](6);
            setRegisteringType(null);
            setMessage({
              type: "error",
              message: _context.t0.message || _context.t0.stack || ((_error$response = _context.t0.response) === null || _error$response === void 0 ? void 0 : _error$response.statusText)
            });
          case 19:
            _context.prev = 19;
            if (!register) {
              setRegisteringType(null);
              onHide === null || onHide === void 0 || onHide.apply(null, null);
            }
            return _context.finish(19);
          case 22:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[6, 15, 19, 22]]);
    }));
    return function handleRegister(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react.createElement(Modal/* default */.A, {
    className: "arc-modal arc-modal-register react-bootstrap-modal modal-lg",
    show: show,
    onHide: handleRegister.bind(null, false),
    backdrop: "static",
    onEscapeKeyDown: function onEscapeKeyDown(event) {
      return handleRegister.call(null, false, event);
    }
  }, /*#__PURE__*/react.createElement(Modal/* default */.A.Header, {
    closeButton: true
  }, /*#__PURE__*/react.createElement(Modal/* default */.A.Title, null, "Register Your Product")), /*#__PURE__*/react.createElement(Modal/* default */.A.Body, null, message && /*#__PURE__*/react.createElement(DismissibleAlert/* default */.A, RegisterModal_extends({}, message, {
    onClose: setMessage.bind(null, null)
  })), /*#__PURE__*/react.createElement("p", null, (0,utils/* evalTemplate */.Xb)("Please complete the following information to register your copy of $prodName$. This allows us to continue to provide you with the most up-to-date information about new product releases and security updates.", {
    prodName: prodName
  })), /*#__PURE__*/react.createElement(Form/* default */.A, {
    ref: from
  }, /*#__PURE__*/react.createElement(Form/* default */.A.Group, {
    className: "row mb-3"
  }, /*#__PURE__*/react.createElement(Form/* default */.A.Label, {
    htmlFor: "registerModal_name",
    className: "col-md-4 control-label col-form-label"
  }, "Name:"), /*#__PURE__*/react.createElement("div", {
    className: "col-md-5"
  }, /*#__PURE__*/react.createElement(Form/* default */.A.Control, {
    type: "text",
    className: "form-control",
    name: "name",
    id: "registerModal_name",
    placeholder: "Name",
    required: true,
    onChange: handleChange
  }))), /*#__PURE__*/react.createElement(Form/* default */.A.Group, {
    className: "row mb-3"
  }, /*#__PURE__*/react.createElement(Form/* default */.A.Label, {
    htmlFor: "registerModal_email",
    className: "col-md-4 control-label col-form-label"
  }, "Email:"), /*#__PURE__*/react.createElement("div", {
    className: "col-md-5"
  }, /*#__PURE__*/react.createElement(Form/* default */.A.Control, {
    type: "email",
    className: "form-control",
    name: "email",
    id: "registerModal_email",
    placeholder: "Email",
    required: true,
    onChange: handleChange
  }))), /*#__PURE__*/react.createElement(Form/* default */.A.Group, {
    className: "row mb-3"
  }, /*#__PURE__*/react.createElement(Form/* default */.A.Label, {
    htmlFor: "registerModal_phone",
    className: "col-md-4 control-label col-form-label"
  }, "Phone Number:"), /*#__PURE__*/react.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/react.createElement(Form/* default */.A.Control, {
    type: "text",
    className: "form-control",
    name: "phone",
    id: "registerModal_phone",
    placeholder: "Phone Number",
    required: true,
    onChange: handleChange
  }))), /*#__PURE__*/react.createElement(Form/* default */.A.Group, {
    className: "row mb-3"
  }, /*#__PURE__*/react.createElement(Form/* default */.A.Label, {
    htmlFor: "registerModal_title",
    className: "col-md-4 control-label col-form-label"
  }, "Job Title:"), /*#__PURE__*/react.createElement("div", {
    className: "col-md-5"
  }, /*#__PURE__*/react.createElement(Form/* default */.A.Control, {
    type: "text",
    className: "form-control",
    name: "title",
    id: "registerModal_title",
    placeholder: "Job Title",
    required: true,
    onChange: handleChange
  }))), /*#__PURE__*/react.createElement(Form/* default */.A.Group, {
    className: "row mb-3"
  }, /*#__PURE__*/react.createElement(Form/* default */.A.Label, {
    htmlFor: "registerModal_company",
    className: "col-md-4 control-label col-form-label"
  }, "Company:"), /*#__PURE__*/react.createElement("div", {
    className: "col-md-5"
  }, /*#__PURE__*/react.createElement(Form/* default */.A.Control, {
    type: "text",
    className: "form-control",
    name: "company",
    id: "registerModal_company",
    placeholder: "Company",
    required: true,
    onChange: handleChange
  }))), /*#__PURE__*/react.createElement(Form/* default */.A.Group, {
    className: "row mb-3"
  }, /*#__PURE__*/react.createElement(Form/* default */.A.Label, {
    htmlFor: "registerModal_address",
    className: "col-md-4 control-label col-form-label"
  }, "Address:"), /*#__PURE__*/react.createElement("div", {
    className: "col-md-5"
  }, /*#__PURE__*/react.createElement(Form/* default */.A.Control, {
    type: "text",
    className: "form-control",
    name: "address",
    id: "registerModal_address",
    placeholder: "Address",
    required: true,
    onChange: handleChange
  }))), /*#__PURE__*/react.createElement(Form/* default */.A.Group, {
    className: "row mb-3"
  }, /*#__PURE__*/react.createElement(Form/* default */.A.Label, {
    htmlFor: "registerModal_city",
    className: "col-md-4 control-label col-form-label"
  }, "City:"), /*#__PURE__*/react.createElement("div", {
    className: "col-md-5"
  }, /*#__PURE__*/react.createElement(Form/* default */.A.Control, {
    type: "text",
    className: "form-control",
    name: "City",
    id: "registerModal_city",
    placeholder: "City",
    required: true,
    onChange: handleChange
  }))), /*#__PURE__*/react.createElement(Form/* default */.A.Group, {
    className: "row mb-3"
  }, /*#__PURE__*/react.createElement(Form/* default */.A.Label, {
    htmlFor: "registerModal_state",
    className: "col-md-4 control-label col-form-label"
  }, "State:"), /*#__PURE__*/react.createElement("div", {
    className: "col-md-5"
  }, /*#__PURE__*/react.createElement(Form/* default */.A.Control, {
    type: "text",
    className: "form-control",
    name: "state",
    id: "registerModal_state",
    placeholder: "State",
    required: true,
    onChange: handleChange
  }))), /*#__PURE__*/react.createElement(Form/* default */.A.Group, {
    className: "row mb-3"
  }, /*#__PURE__*/react.createElement(Form/* default */.A.Label, {
    htmlFor: "registerModal_zip",
    className: "col-md-4 control-label col-form-label"
  }, "Zip Code:"), /*#__PURE__*/react.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/react.createElement(Form/* default */.A.Control, {
    type: "text",
    className: "form-control",
    name: "zip",
    id: "registerModal_zip",
    placeholder: "Zip Code",
    required: true,
    onChange: handleChange
  }))), /*#__PURE__*/react.createElement(Form/* default */.A.Group, {
    className: "row mb-3"
  }, /*#__PURE__*/react.createElement(Form/* default */.A.Label, {
    htmlFor: "registerModal_country",
    className: "col-md-4 control-label col-form-label"
  }, "Country or Region:"), /*#__PURE__*/react.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react.createElement(Form/* default */.A.Select, {
    "aria-label": "United States",
    name: "country",
    id: "registerModal_country",
    onChange: handleChange
  }, /*#__PURE__*/react.createElement("option", {
    value: "United States"
  }, "United States"), /*#__PURE__*/react.createElement("option", {
    value: "Afghanistan"
  }, "Afghanistan"), /*#__PURE__*/react.createElement("option", {
    value: "Albania"
  }, "Albania"), /*#__PURE__*/react.createElement("option", {
    value: "American Samoa"
  }, "American Samoa"), /*#__PURE__*/react.createElement("option", {
    value: "Andorra"
  }, "Andorra"), /*#__PURE__*/react.createElement("option", {
    value: "Angola"
  }, "Angola"), /*#__PURE__*/react.createElement("option", {
    value: "Anguilla"
  }, "Anguilla"), /*#__PURE__*/react.createElement("option", {
    value: "Antigua"
  }, "Antigua"), /*#__PURE__*/react.createElement("option", {
    value: "Argentina"
  }, "Argentina"), /*#__PURE__*/react.createElement("option", {
    value: "Armenia"
  }, "Armenia"), /*#__PURE__*/react.createElement("option", {
    value: "Aruba"
  }, "Aruba"), /*#__PURE__*/react.createElement("option", {
    value: "Australia"
  }, "Australia"), /*#__PURE__*/react.createElement("option", {
    value: "Austria"
  }, "Austria"), /*#__PURE__*/react.createElement("option", {
    value: "Azerbaijan"
  }, "Azerbaijan"), /*#__PURE__*/react.createElement("option", {
    value: "Bahamas"
  }, "Bahamas"), /*#__PURE__*/react.createElement("option", {
    value: "Bahrain"
  }, "Bahrain"), /*#__PURE__*/react.createElement("option", {
    value: "Bangladesh"
  }, "Bangladesh"), /*#__PURE__*/react.createElement("option", {
    value: "Barbados"
  }, "Barbados"), /*#__PURE__*/react.createElement("option", {
    value: "Belarus"
  }, "Belarus"), /*#__PURE__*/react.createElement("option", {
    value: "Belgium"
  }, "Belgium"), /*#__PURE__*/react.createElement("option", {
    value: "Benin"
  }, "Benin"), /*#__PURE__*/react.createElement("option", {
    value: "Bermuda"
  }, "Bermuda"), /*#__PURE__*/react.createElement("option", {
    value: "Belize"
  }, "Belize"), /*#__PURE__*/react.createElement("option", {
    value: "Bolivia"
  }, "Bolivia"), /*#__PURE__*/react.createElement("option", {
    value: "Bosnia-Herzegovina"
  }, "Bosnia-Herzegovina"), /*#__PURE__*/react.createElement("option", {
    value: "Botswana"
  }, "Botswana"), /*#__PURE__*/react.createElement("option", {
    value: "Brazil"
  }, "Brazil"), /*#__PURE__*/react.createElement("option", {
    value: "British Virgin Is."
  }, "British Virgin Is."), /*#__PURE__*/react.createElement("option", {
    value: "Brunei"
  }, "Brunei"), /*#__PURE__*/react.createElement("option", {
    value: "Bulgaria"
  }, "Bulgaria"), /*#__PURE__*/react.createElement("option", {
    value: "Burkina Faso"
  }, "Burkina Faso"), /*#__PURE__*/react.createElement("option", {
    value: "Burundi"
  }, "Burundi"), /*#__PURE__*/react.createElement("option", {
    value: "Cambodia"
  }, "Cambodia"), /*#__PURE__*/react.createElement("option", {
    value: "Cameroon"
  }, "Cameroon"), /*#__PURE__*/react.createElement("option", {
    value: "Canada"
  }, "Canada"), /*#__PURE__*/react.createElement("option", {
    value: "Cape Verde"
  }, "Cape Verde"), /*#__PURE__*/react.createElement("option", {
    value: "Chad"
  }, "Chad"), /*#__PURE__*/react.createElement("option", {
    value: "Cayman Islands"
  }, "Cayman Islands"), /*#__PURE__*/react.createElement("option", {
    value: "Chile"
  }, "Chile"), /*#__PURE__*/react.createElement("option", {
    value: "China"
  }, "China"), /*#__PURE__*/react.createElement("option", {
    value: "Colombia"
  }, "Colombia"), /*#__PURE__*/react.createElement("option", {
    value: "Congo"
  }, "Congo"), /*#__PURE__*/react.createElement("option", {
    value: "Congo, Democratic Republic of"
  }, "Congo, Democratic Republic of"), /*#__PURE__*/react.createElement("option", {
    value: "Cook Islands"
  }, "Cook Islands"), /*#__PURE__*/react.createElement("option", {
    value: "Croatia"
  }, "Croatia"), /*#__PURE__*/react.createElement("option", {
    value: "Costa Rica"
  }, "Costa Rica"), /*#__PURE__*/react.createElement("option", {
    value: "Cyprus"
  }, "Cyprus"), /*#__PURE__*/react.createElement("option", {
    value: "Czech Republic"
  }, "Czech Republic"), /*#__PURE__*/react.createElement("option", {
    value: "Denmark"
  }, "Denmark"), /*#__PURE__*/react.createElement("option", {
    value: "Djibouti"
  }, "Djibouti"), /*#__PURE__*/react.createElement("option", {
    value: "Dominica"
  }, "Dominica"), /*#__PURE__*/react.createElement("option", {
    value: "Dominican Republic"
  }, "Dominican Republic"), /*#__PURE__*/react.createElement("option", {
    value: "East Timor"
  }, "East Timor"), /*#__PURE__*/react.createElement("option", {
    value: "Ecuador"
  }, "Ecuador"), /*#__PURE__*/react.createElement("option", {
    value: "Egypt"
  }, "Egypt"), /*#__PURE__*/react.createElement("option", {
    value: "El Salvador"
  }, "El Salvador"), /*#__PURE__*/react.createElement("option", {
    value: "Equatorial Guinea"
  }, "Equatorial Guinea"), /*#__PURE__*/react.createElement("option", {
    value: "Eritrea"
  }, "Eritrea"), /*#__PURE__*/react.createElement("option", {
    value: "Estonia"
  }, "Estonia"), /*#__PURE__*/react.createElement("option", {
    value: "Ethiopia"
  }, "Ethiopia"), /*#__PURE__*/react.createElement("option", {
    value: "Faeroe Islands"
  }, "Faeroe Islands"), /*#__PURE__*/react.createElement("option", {
    value: "Fiji"
  }, "Fiji"), /*#__PURE__*/react.createElement("option", {
    value: "Finland"
  }, "Finland"), /*#__PURE__*/react.createElement("option", {
    value: "France"
  }, "France"), /*#__PURE__*/react.createElement("option", {
    value: "French Guiana"
  }, "French Guiana"), /*#__PURE__*/react.createElement("option", {
    value: "French Polynesia"
  }, "French Polynesia"), /*#__PURE__*/react.createElement("option", {
    value: "Gabon"
  }, "Gabon"), /*#__PURE__*/react.createElement("option", {
    value: "Gambia"
  }, "Gambia"), /*#__PURE__*/react.createElement("option", {
    value: "Georgia"
  }, "Georgia"), /*#__PURE__*/react.createElement("option", {
    value: "Germany"
  }, "Germany"), /*#__PURE__*/react.createElement("option", {
    value: "Ghana"
  }, "Ghana"), /*#__PURE__*/react.createElement("option", {
    value: "Gibraltar"
  }, "Gibraltar"), /*#__PURE__*/react.createElement("option", {
    value: "Greece"
  }, "Greece"), /*#__PURE__*/react.createElement("option", {
    value: "Greenland"
  }, "Greenland"), /*#__PURE__*/react.createElement("option", {
    value: "Grenada"
  }, "Grenada"), /*#__PURE__*/react.createElement("option", {
    value: "Guadeloupe"
  }, "Guadeloupe"), /*#__PURE__*/react.createElement("option", {
    value: "Guam"
  }, "Guam"), /*#__PURE__*/react.createElement("option", {
    value: "Guatemala"
  }, "Guatemala"), /*#__PURE__*/react.createElement("option", {
    value: "Guinea"
  }, "Guinea"), /*#__PURE__*/react.createElement("option", {
    value: "Guyana"
  }, "Guyana"), /*#__PURE__*/react.createElement("option", {
    value: "Haiti"
  }, "Haiti"), /*#__PURE__*/react.createElement("option", {
    value: "Honduras"
  }, "Honduras"), /*#__PURE__*/react.createElement("option", {
    value: "Hong Kong"
  }, "Hong Kong"), /*#__PURE__*/react.createElement("option", {
    value: "Hungary"
  }, "Hungary"), /*#__PURE__*/react.createElement("option", {
    value: "Iceland"
  }, "Iceland"), /*#__PURE__*/react.createElement("option", {
    value: "India"
  }, "India"), /*#__PURE__*/react.createElement("option", {
    value: "Indonesia"
  }, "Indonesia"), /*#__PURE__*/react.createElement("option", {
    value: "Iraq"
  }, "Iraq"), /*#__PURE__*/react.createElement("option", {
    value: "Ireland"
  }, "Ireland"), /*#__PURE__*/react.createElement("option", {
    value: "Israel"
  }, "Israel"), /*#__PURE__*/react.createElement("option", {
    value: "Italy"
  }, "Italy"), /*#__PURE__*/react.createElement("option", {
    value: "Ivory Coast"
  }, "Ivory Coast"), /*#__PURE__*/react.createElement("option", {
    value: "Jamaica"
  }, "Jamaica"), /*#__PURE__*/react.createElement("option", {
    value: "Japan"
  }, "Japan"), /*#__PURE__*/react.createElement("option", {
    value: "Jordan"
  }, "Jordan"), /*#__PURE__*/react.createElement("option", {
    value: "Kazakhstan"
  }, "Kazakhstan"), /*#__PURE__*/react.createElement("option", {
    value: "Kenya"
  }, "Kenya"), /*#__PURE__*/react.createElement("option", {
    value: "Kuwait"
  }, "Kuwait"), /*#__PURE__*/react.createElement("option", {
    value: "Kyrgyzstan"
  }, "Kyrgyzstan"), /*#__PURE__*/react.createElement("option", {
    value: "Laos"
  }, "Laos"), /*#__PURE__*/react.createElement("option", {
    value: "Latvia"
  }, "Latvia"), /*#__PURE__*/react.createElement("option", {
    value: "Lebanon"
  }, "Lebanon"), /*#__PURE__*/react.createElement("option", {
    value: "Lesotho"
  }, "Lesotho"), /*#__PURE__*/react.createElement("option", {
    value: "Liberia"
  }, "Liberia"), /*#__PURE__*/react.createElement("option", {
    value: "Liechtenstein"
  }, "Liechtenstein"), /*#__PURE__*/react.createElement("option", {
    value: "Lithuania"
  }, "Lithuania"), /*#__PURE__*/react.createElement("option", {
    value: "Luxembourg"
  }, "Luxembourg"), /*#__PURE__*/react.createElement("option", {
    value: "Macau"
  }, "Macau"), /*#__PURE__*/react.createElement("option", {
    value: "Macedonia"
  }, "Macedonia"), /*#__PURE__*/react.createElement("option", {
    value: "Madagascar"
  }, "Madagascar"), /*#__PURE__*/react.createElement("option", {
    value: "Malaysia"
  }, "Malaysia"), /*#__PURE__*/react.createElement("option", {
    value: "Malawi"
  }, "Malawi"), /*#__PURE__*/react.createElement("option", {
    value: "Maldives"
  }, "Maldives"), /*#__PURE__*/react.createElement("option", {
    value: "Mali"
  }, "Mali"), /*#__PURE__*/react.createElement("option", {
    value: "Malta"
  }, "Malta"), /*#__PURE__*/react.createElement("option", {
    value: "Marshall Islands"
  }, "Marshall Islands"), /*#__PURE__*/react.createElement("option", {
    value: "Martinique"
  }, "Martinique"), /*#__PURE__*/react.createElement("option", {
    value: "Mauritania"
  }, "Mauritania"), /*#__PURE__*/react.createElement("option", {
    value: "Mauritius"
  }, "Mauritius"), /*#__PURE__*/react.createElement("option", {
    value: "Mexico"
  }, "Mexico"), /*#__PURE__*/react.createElement("option", {
    value: "Micronesia"
  }, "Micronesia"), /*#__PURE__*/react.createElement("option", {
    value: "Moldova"
  }, "Moldova"), /*#__PURE__*/react.createElement("option", {
    value: "Monaco"
  }, "Monaco"), /*#__PURE__*/react.createElement("option", {
    value: "Mongolia"
  }, "Mongolia"), /*#__PURE__*/react.createElement("option", {
    value: "Montserrat"
  }, "Montserrat"), /*#__PURE__*/react.createElement("option", {
    value: "Morocco"
  }, "Morocco"), /*#__PURE__*/react.createElement("option", {
    value: "Mozambique"
  }, "Mozambique"), /*#__PURE__*/react.createElement("option", {
    value: "Namibia"
  }, "Namibia"), /*#__PURE__*/react.createElement("option", {
    value: "Nepal"
  }, "Nepal"), /*#__PURE__*/react.createElement("option", {
    value: "Netherlands"
  }, "Netherlands"), /*#__PURE__*/react.createElement("option", {
    value: "Netherlands Antilles"
  }, "Netherlands Antilles"), /*#__PURE__*/react.createElement("option", {
    value: "New Caledonia"
  }, "New Caledonia"), /*#__PURE__*/react.createElement("option", {
    value: "New Zealand"
  }, "New Zealand"), /*#__PURE__*/react.createElement("option", {
    value: "Nicaragua"
  }, "Nicaragua"), /*#__PURE__*/react.createElement("option", {
    value: "Niger"
  }, "Niger"), /*#__PURE__*/react.createElement("option", {
    value: "Nigeria"
  }, "Nigeria"), /*#__PURE__*/react.createElement("option", {
    value: "Norway"
  }, "Norway"), /*#__PURE__*/react.createElement("option", {
    value: "Oman"
  }, "Oman"), /*#__PURE__*/react.createElement("option", {
    value: "Pakistan"
  }, "Pakistan"), /*#__PURE__*/react.createElement("option", {
    value: "Paraguay"
  }, "Paraguay"), /*#__PURE__*/react.createElement("option", {
    value: "Palau"
  }, "Palau"), /*#__PURE__*/react.createElement("option", {
    value: "Palestine Autonomous"
  }, "Palestine Autonomous"), /*#__PURE__*/react.createElement("option", {
    value: "Panama"
  }, "Panama"), /*#__PURE__*/react.createElement("option", {
    value: "Papua New Guinea"
  }, "Papua New Guinea"), /*#__PURE__*/react.createElement("option", {
    value: "Peru"
  }, "Peru"), /*#__PURE__*/react.createElement("option", {
    value: "Philippines"
  }, "Philippines"), /*#__PURE__*/react.createElement("option", {
    value: "Poland"
  }, "Poland"), /*#__PURE__*/react.createElement("option", {
    value: "Portugal"
  }, "Portugal"), /*#__PURE__*/react.createElement("option", {
    value: "Puerto Rico"
  }, "Puerto Rico"), /*#__PURE__*/react.createElement("option", {
    value: "Qatar"
  }, "Qatar"), /*#__PURE__*/react.createElement("option", {
    value: "Reunion"
  }, "Reunion"), /*#__PURE__*/react.createElement("option", {
    value: "Romania"
  }, "Romania"), /*#__PURE__*/react.createElement("option", {
    value: "Russian Federation"
  }, "Russian Federation"), /*#__PURE__*/react.createElement("option", {
    value: "Rwanda"
  }, "Rwanda"), /*#__PURE__*/react.createElement("option", {
    value: "Saipan"
  }, "Saipan"), /*#__PURE__*/react.createElement("option", {
    value: "Saudi Arabia"
  }, "Saudi Arabia"), /*#__PURE__*/react.createElement("option", {
    value: "Senegal"
  }, "Senegal"), /*#__PURE__*/react.createElement("option", {
    value: "Seychelles"
  }, "Seychelles"), /*#__PURE__*/react.createElement("option", {
    value: "Singapore"
  }, "Singapore"), /*#__PURE__*/react.createElement("option", {
    value: "Slovak Republic"
  }, "Slovak Republic"), /*#__PURE__*/react.createElement("option", {
    value: "Slovenia"
  }, "Slovenia"), /*#__PURE__*/react.createElement("option", {
    value: "South Africa"
  }, "South Africa"), /*#__PURE__*/react.createElement("option", {
    value: "South Korea"
  }, "South Korea"), /*#__PURE__*/react.createElement("option", {
    value: "Spain"
  }, "Spain"), /*#__PURE__*/react.createElement("option", {
    value: "Sri Lanka"
  }, "Sri Lanka"), /*#__PURE__*/react.createElement("option", {
    value: "St Kitts/Nevis"
  }, "St Kitts/Nevis"), /*#__PURE__*/react.createElement("option", {
    value: "St Lucia"
  }, "St Lucia"), /*#__PURE__*/react.createElement("option", {
    value: "St Vincent"
  }, "St Vincent"), /*#__PURE__*/react.createElement("option", {
    value: "Suriname"
  }, "Suriname"), /*#__PURE__*/react.createElement("option", {
    value: "Swaziland"
  }, "Swaziland"), /*#__PURE__*/react.createElement("option", {
    value: "Sweden"
  }, "Sweden"), /*#__PURE__*/react.createElement("option", {
    value: "Switzerland"
  }, "Switzerland"), /*#__PURE__*/react.createElement("option", {
    value: "Syria"
  }, "Syria"), /*#__PURE__*/react.createElement("option", {
    value: "Taiwan"
  }, "Taiwan"), /*#__PURE__*/react.createElement("option", {
    value: "Tanzania"
  }, "Tanzania"), /*#__PURE__*/react.createElement("option", {
    value: "Thailand"
  }, "Thailand"), /*#__PURE__*/react.createElement("option", {
    value: "Togo"
  }, "Togo"), /*#__PURE__*/react.createElement("option", {
    value: "Trinidad/Tobago"
  }, "Trinidad/Tobago"), /*#__PURE__*/react.createElement("option", {
    value: "Tunisia"
  }, "Tunisia"), /*#__PURE__*/react.createElement("option", {
    value: "Turkey"
  }, "Turkey"), /*#__PURE__*/react.createElement("option", {
    value: "Turkmenistan"
  }, "Turkmenistan"), /*#__PURE__*/react.createElement("option", {
    value: "Turks & Caicos"
  }, "Turks & Caicos"), /*#__PURE__*/react.createElement("option", {
    value: "U.A.E."
  }, "U.A.E."), /*#__PURE__*/react.createElement("option", {
    value: "U.S. Virgin Islands"
  }, "U.S. Virgin Islands"), /*#__PURE__*/react.createElement("option", {
    value: "Uganda"
  }, "Uganda"), /*#__PURE__*/react.createElement("option", {
    value: "Ukraine"
  }, "Ukraine"), /*#__PURE__*/react.createElement("option", {
    value: "United Kingdom"
  }, "United Kingdom"), /*#__PURE__*/react.createElement("option", {
    value: "United States"
  }, "United States"), /*#__PURE__*/react.createElement("option", {
    value: "Uruguay"
  }, "Uruguay"), /*#__PURE__*/react.createElement("option", {
    value: "Uzbekistan"
  }, "Uzbekistan"), /*#__PURE__*/react.createElement("option", {
    value: "Vanuatu"
  }, "Vanuatu"), /*#__PURE__*/react.createElement("option", {
    value: "Vatican City"
  }, "Vatican City"), /*#__PURE__*/react.createElement("option", {
    value: "Venezuela"
  }, "Venezuela"), /*#__PURE__*/react.createElement("option", {
    value: "Vietnam"
  }, "Vietnam"), /*#__PURE__*/react.createElement("option", {
    value: "Wallis & Futuna"
  }, "Wallis & Futuna"), /*#__PURE__*/react.createElement("option", {
    value: "Yemen"
  }, "Yemen"), /*#__PURE__*/react.createElement("option", {
    value: "Yugoslavia"
  }, "Yugoslavia"), /*#__PURE__*/react.createElement("option", {
    value: "Zambia"
  }, "Zambia"), /*#__PURE__*/react.createElement("option", {
    value: "Zimbabwe"
  }, "Zimbabwe")))))), /*#__PURE__*/react.createElement(Modal/* default */.A.Footer, null, /*#__PURE__*/react.createElement(LoadingButton, {
    variant: "outline-secondary",
    onClick: handleRegister.bind(null, false),
    loading: registeringType === false,
    loadingText: "Cancelling..."
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa fa-times"
  }), "\xA0\xA0", "Not Now"), /*#__PURE__*/react.createElement(LoadingButton, {
    variant: "primary",
    onClick: handleRegister.bind(null, true),
    loading: registeringType === true,
    loadingText: "Registering..."
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa fa-user-plus"
  }), "\xA0\xA0", "Register")));
}
;// CONCATENATED MODULE: ./src/modals/index.jsx
var _window;
function modals_slicedToArray(r, e) { return modals_arrayWithHoles(r) || modals_iterableToArrayLimit(r, e) || modals_unsupportedIterableToArray(r, e) || modals_nonIterableRest(); }
function modals_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function modals_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return modals_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? modals_arrayLikeToArray(r, a) : void 0; } }
function modals_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function modals_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function modals_arrayWithHoles(r) { if (Array.isArray(r)) return r; }






function OrderedModalGroup(props) {
  var _arguments = arguments;
  var _useState = (0,react.useState)(Math.max(props.index || 0, 0)),
    _useState2 = modals_slicedToArray(_useState, 2),
    index = _useState2[0],
    setIndex = _useState2[1];
  if (props.unmountOnExit && index >= props.children.length) return null;
  return /*#__PURE__*/react.createElement(react.Fragment, null, props.children.map(function (child, childIndex) {
    if (childIndex === index) return /*#__PURE__*/react.cloneElement(child, {
      show: true,
      onHide: function onHide() {
        var _child$props;
        if (((_child$props = child.props) === null || _child$props === void 0 || (_child$props = _child$props.onHide) === null || _child$props === void 0 ? void 0 : _child$props.apply(null, _arguments)) !== false) {
          var onNext = function onNext() {
            var _props$onDone;
            setIndex(childIndex + 1);
            childIndex >= props.children.length - 1 && ((_props$onDone = props.onDone) === null || _props$onDone === void 0 ? void 0 : _props$onDone.call(null, childIndex, true));
          };
          if (props.interval > 0 && childIndex < props.children.length) {
            setIndex(-1);
            setTimeout(onNext, props.interval);
          } else {
            onNext();
          }
        } else {
          var _props$onDone2;
          setIndex(props.children.length);
          (_props$onDone2 = props.onDone) === null || _props$onDone2 === void 0 || _props$onDone2.call(null, childIndex, false);
        }
      }
    });else return child;
  }));
}
var modals = document.createElement("div");
document.getElementsByTagName("body")[0].appendChild(modals);
client.createRoot(modals).render(/*#__PURE__*/react.createElement(OrderedModalGroup, {
  interval: 300,
  unmountOnExit: true
}, (_window = window) === null || _window === void 0 || (_window = _window.rsb) === null || _window === void 0 || (_window = _window.app) === null || _window === void 0 ? void 0 : _window.modals.map(function (modal, index) {
  var _modal$type;
  switch ((_modal$type = modal.type) === null || _modal$type === void 0 ? void 0 : _modal$type.toLowerCase()) {
    case "terms":
      return /*#__PURE__*/react.createElement(TermsModal, {
        key: index,
        logoutLink: modal.logoutLink
      });
    case "register":
      return /*#__PURE__*/react.createElement(RegisterModal, {
        key: index,
        prodName: modal.prodName,
        csrfToken: modal.csrfToken
      });
    case "license":
      return /*#__PURE__*/react.createElement(LicenseWarningModal, {
        key: index,
        title: modal.title,
        messageHtml: modal.message,
        timeout: modal.timeout,
        track: modal.track
      });
    default:
      return null;
  }
})));

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

/***/ 87963:
/***/ ((module) => {

module.exports = {};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["react","vendors"], () => (__webpack_exec__(13543)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);