"use strict";
(self["webpackChunkcdata_arc"] = self["webpackChunkcdata_arc"] || []).push([["src_components_preview-message_index_jsx"],{

/***/ 57845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ Tokens)
/* harmony export */ });

var Tokens = {
  BinaryContent: 'Unable to preview binary message content.',
  RawView: 'Raw View',
  UnableToPrint: 'Unable to print in raw view',
  Print: 'Print'
};

/***/ }),

/***/ 84925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PreviewMessageModal)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Modal.js + 6 modules
var Modal = __webpack_require__(48032);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/FormCheck.js + 1 modules
var FormCheck = __webpack_require__(84663);
// EXTERNAL MODULE: ./node_modules/@codemirror/view/dist/index.js + 1 modules
var dist = __webpack_require__(36898);
// EXTERNAL MODULE: ./node_modules/codemirror/dist/index.js
var codemirror_dist = __webpack_require__(6363);
// EXTERNAL MODULE: ./node_modules/@codemirror/state/dist/index.js + 1 modules
var state_dist = __webpack_require__(31638);
// EXTERNAL MODULE: ./node_modules/@codemirror/lang-xml/dist/index.js + 1 modules
var lang_xml_dist = __webpack_require__(97701);
// EXTERNAL MODULE: ./node_modules/@codemirror/lang-json/dist/index.js + 1 modules
var lang_json_dist = __webpack_require__(28858);
// EXTERNAL MODULE: ./node_modules/@codemirror/lang-sql/dist/index.js
var lang_sql_dist = __webpack_require__(49075);
// EXTERNAL MODULE: ./src/components/arc-codemirror/CopyCodeButton.jsx
var CopyCodeButton = __webpack_require__(27771);
// EXTERNAL MODULE: ./src/components/arc-codemirror/FormatCodeButton.jsx
var FormatCodeButton = __webpack_require__(38673);
// EXTERNAL MODULE: ./src/components/utils/index.js + 1 modules
var utils = __webpack_require__(25337);
// EXTERNAL MODULE: ./src/components/printView/index.ts + 21 modules
var printView = __webpack_require__(23246);
;// CONCATENATED MODULE: ./src/components/preview-message/constants.js

var TOKENS = {
  DOWNLOAD_MESSAGE: 'Download Message',
  WARN_BINARY_CONTENT: 'Unable to preview binary message content.',
  DOWNLOAD_LOG: 'Download Log',
  WARN_ERROR: 'Error',
  WARN_WARNING: 'Warning',
  RawView: 'Raw View',
  UnableToPrint: 'Unable to print in raw view',
  Print: 'Print'
};

// EXTERNAL MODULE: ./src/components/preview-message2/constants.js
var constants = __webpack_require__(57845);
;// CONCATENATED MODULE: ./src/components/preview-message/index.jsx
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }















var Editor = /*#__PURE__*/function (_React$Component) {
  function Editor(props) {
    var _this;
    _classCallCheck(this, Editor);
    _this = _callSuper(this, Editor, [props]);
    _defineProperty(_this, "createEditorState", function (content, type) {
      var languageConf = new state_dist/* Compartment */.xx();
      var language = null;
      if (!type) {
        language = null;
      } else if (type.toLowerCase() === "json") {
        language = languageConf.of((0,lang_json_dist/* json */.Pq)());
      } else if (type.toLowerCase() === "xml") {
        language = languageConf.of((0,lang_xml_dist/* xml */._n)());
      } else if (type.toLowerCase() === "sql") {
        language = languageConf.of((0,lang_sql_dist/* sql */.ll)());
      } else if (type.toLowerCase() === "text") {
        language = null;
      }
      var minHeightEditor = dist/* EditorView */.Lz.theme({
        ".cm-content, .cm-gutter": {
          minHeight: "350px"
        }
      });
      if (language) {
        return state_dist/* EditorState */.$t.create({
          doc: content,
          extensions: [state_dist/* EditorState */.$t.readOnly.of(true), codemirror_dist/* basicSetup */.oQ, minHeightEditor, language]
        });
      } else {
        return state_dist/* EditorState */.$t.create({
          doc: content,
          extensions: [state_dist/* EditorState */.$t.readOnly.of(true), minHeightEditor, codemirror_dist/* basicSetup */.oQ]
        });
      }
    });
    _defineProperty(_this, "renderEditorContent", function (content, type) {
      type = type || _this.props.type;
      _this.editor.setState(_this.createEditorState(content, type));
    });
    _defineProperty(_this, "getText", function () {
      return _this.editor.state.doc.toString();
    });
    _this.codeMirror = /*#__PURE__*/react.createRef();
    return _this;
  }
  _inherits(Editor, _React$Component);
  return _createClass(Editor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.editor = new dist/* EditorView */.Lz({
        state: this.createEditorState(this.props.content, this.props.type),
        parent: this.codeMirror.current
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.editor) {
        this.renderEditorContent(this.props.content, this.props.type);
      }
      return /*#__PURE__*/react.createElement("div", {
        className: "well mb-0"
      }, /*#__PURE__*/react.createElement("div", {
        className: "event-editor arc-codemirror-container"
      }, (this.props.type.toLowerCase() === "json" || this.props.type.toLowerCase() === "xml" || this.props.type.toLowerCase() === "edi") && /*#__PURE__*/react.createElement(FormatCodeButton/* default */.A, {
        getText: this.getText,
        type: this.props.type,
        setText: this.renderEditorContent
      }), /*#__PURE__*/react.createElement(CopyCodeButton/* default */.A, {
        getText: this.getText
      }), /*#__PURE__*/react.createElement("div", {
        ref: this.codeMirror,
        className: "editor"
      })));
    }
  }]);
}(react.Component);
function PreviewMessageModal(_ref) {
  var show = _ref.show,
    workspaceId = _ref.workspaceId,
    connectorId = _ref.connectorId,
    messageId = _ref.messageId,
    direction = _ref.direction,
    filename = _ref.filename,
    isfile = _ref.isfile,
    onHide = _ref.onHide,
    batchGroupId = _ref.batchGroupId;
  if ((0,utils/* renderReactModalByParent */.wf)("PreviewMessageModal", {
    show: show,
    workspaceId: workspaceId,
    connectorId: connectorId,
    messageId: messageId,
    direction: direction,
    filename: filename,
    isfile: isfile,
    onHide: onHide,
    batchGroupId: batchGroupId
  })) return null;
  var downloadUrlBase = "";
  var downloadBtnText = "";
  var fileExt = filename === null || filename === void 0 ? void 0 : filename.split(".").pop();
  switch (fileExt) {
    case "eml":
      downloadUrlBase = "src/downloadMessage.rst?source=" + (isfile ? "MessageMgr" : "Log");
      downloadBtnText = TOKENS.DOWNLOAD_MESSAGE;
      break;
    default:
      downloadUrlBase = "src/downloadLogs.rst?";
      downloadBtnText = TOKENS.DOWNLOAD_LOG;
      break;
  }
  var urlParams = "&workspaceId=" + encodeURIComponent(workspaceId ? workspaceId : "");
  urlParams += "&ConnectorId=" + encodeURIComponent(connectorId ? connectorId : "");
  urlParams += "&MessageId=" + encodeURIComponent(messageId ? messageId : "");
  urlParams += "&Filename=" + encodeURIComponent(filename ? filename : "");
  urlParams += "&isFile=" + (isfile ? "true" : "false");
  var printViewHandle = (0,react.useRef)(null);
  var _usePrintView = (0,printView/* usePrintView */.mX)({
      workspaceId: workspaceId,
      connectorId: connectorId,
      messageId: messageId,
      direction: direction,
      filename: filename,
      isFile: isfile
    }),
    _usePrintView2 = _slicedToArray(_usePrintView, 4),
    ready = _usePrintView2[0],
    error = _usePrintView2[1],
    document = _usePrintView2[2],
    view = _usePrintView2[3];
  var _React$useMemo = react.useMemo(function () {
      if (!ready || !view) return ["", "", "Send", "", "plaintext", null];else if (error) return ["", "", "Send", "", "plaintext", {
        type: "error",
        message: error
      }];else if (view.warning) return [view.filename, view.lastModified, view.direction, view.warning, "plaintext", {
        type: "warning",
        message: view.warning
      }];
      return [view.filename, view.lastModified, view.direction, view.content, view.type, view.type === "binary" ? {
        type: "warning",
        message: constants/* Tokens */.D.BinaryContent
      } : null];
    }, [ready, error, document, view]),
    _React$useMemo2 = _slicedToArray(_React$useMemo, 6),
    name = _React$useMemo2[0],
    timestamp = _React$useMemo2[1],
    directionInLog = _React$useMemo2[2],
    content = _React$useMemo2[3],
    type = _React$useMemo2[4],
    alert = _React$useMemo2[5];
  var _React$useState = react.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    rawView = _React$useState2[0],
    setRawView = _React$useState2[1];
  react.useEffect(function () {
    if (!show) return;
    return function () {
      return setRawView(false);
    };
  }, [show]);
  var renderBody = function renderBody(alert, type, content) {
    if (alert != null) {
      return /*#__PURE__*/react.createElement("div", {
        className: "templateResult form-result-static alert alert-dismissible alert-" + alert.type + " mb-0"
      }, /*#__PURE__*/react.createElement("main", null, alert.message));
    } else if (rawView || document == null) {
      return /*#__PURE__*/react.createElement(Editor, {
        content: content,
        type: type
      });
    } else {
      return /*#__PURE__*/react.createElement(printView/* PrintView */.Bq, {
        ref: printViewHandle,
        document: document
      });
    }
  };
  if (show) {
    var title = filename;
    if (alert != null) {
      if (alert.type === "danger") {
        title = TOKENS.WARN_ERROR;
      } else {
        title = TOKENS.WARN_WARNING;
      }
    } else if (ready) {
      title = name + " [" + timestamp + "]";
    }
    return /*#__PURE__*/react.createElement(Modal/* default */.A, {
      className: "react-bootstrap-modal",
      show: show,
      onHide: onHide,
      dialogClassName: "preview-message",
      size: "xl",
      backdrop: "static"
    }, /*#__PURE__*/react.createElement(Modal/* default */.A.Header, null, /*#__PURE__*/react.createElement(Modal/* default */.A.Title, {
      className: "text-break"
    }, title), /*#__PURE__*/react.createElement("div", {
      className: "d-flex ms-auto align-items-center"
    }, document != null && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(FormCheck/* default */.A, {
      type: "switch",
      className: "d-flex align-items-center",
      label: TOKENS.RawView,
      checked: rawView,
      onChange: function onChange() {
        return setRawView(!rawView);
      }
    }), /*#__PURE__*/react.createElement("a", {
      className: "text-secondary mx-3" + (rawView ? " opacity-50" : ""),
      role: "button",
      onClick: function onClick() {
        var _printViewHandle$curr, _printViewHandle$curr2;
        return !rawView && ((_printViewHandle$curr = printViewHandle.current) === null || _printViewHandle$curr === void 0 || (_printViewHandle$curr2 = _printViewHandle$curr.triggerPrint) === null || _printViewHandle$curr2 === void 0 ? void 0 : _printViewHandle$curr2.call(_printViewHandle$curr));
      },
      "data-tooltip-id": "reactTooltip",
      "data-tooltip-content": rawView ? TOKENS.UnableToPrint : TOKENS.Print
    }, /*#__PURE__*/react.createElement("i", {
      className: "fa-regular fa-print fa-lg"
    }))), ready && view.filename != null && /*#__PURE__*/react.createElement("a", {
      className: "text-secondary me-2",
      href: downloadUrlBase + urlParams + "&direction=" + directionInLog,
      download: "download.txt",
      "data-tooltip-id": "reactTooltip",
      "data-tooltip-content": downloadBtnText
    }, /*#__PURE__*/react.createElement("i", {
      className: "fa-regular fa-download fa-lg"
    })), /*#__PURE__*/react.createElement("button", {
      type: "button",
      className: "btn-close",
      "aria-label": "Close",
      onClick: onHide
    }))), /*#__PURE__*/react.createElement(Modal/* default */.A.Body, {
      className: (!ready ? "modal-body-loading" : "") + " " + (alert != null ? "p-24" : "")
    }, !ready ? /*#__PURE__*/react.createElement("i", {
      className: "fa fa-spinner fa-spin spinner-!ready",
      style: {
        fontSize: "56px"
      }
    }) : renderBody(alert, type, content)));
  }
}
PreviewMessageModal.defaultProps = {
  show: true,
  workspaceId: "Default",
  isfile: false
};
PreviewMessageModal.propTypes = {
  show: (prop_types_default()).bool,
  workspaceId: (prop_types_default()).string,
  connectorId: (prop_types_default()).string,
  messageId: (prop_types_default()).string,
  direction: (prop_types_default()).string,
  filename: (prop_types_default()).string,
  isfile: (prop_types_default()).bool,
  onHide: (prop_types_default()).func,
  batchGroupId: (prop_types_default()).string
};

/***/ }),

/***/ 23246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Bq: () => (/* reexport */ PrintView),
  mX: () => (/* reexport */ usePrintView)
});

// UNUSED EXPORTS: renderTemplate, xmlToJson

// EXTERNAL MODULE: ./node_modules/fast-xml-parser/src/xmlparser/XMLParser.js + 9 modules
var XMLParser = __webpack_require__(54221);
// EXTERNAL MODULE: ./node_modules/handlebars/dist/cjs/handlebars.js
var handlebars = __webpack_require__(60639);
var handlebars_default = /*#__PURE__*/__webpack_require__.n(handlebars);
;// CONCATENATED MODULE: ./src/components/printView/handlebars/helpers/utils.ts
const COMPARISON_OPERATORS = {
    eq: (lhs, rhs) => lhs == rhs,
    eqs: (lhs, rhs) => lhs === rhs,
    ne: (lhs, rhs) => lhs != rhs,
    nes: (lhs, rhs) => lhs !== rhs,
    lt: (lhs, rhs) => lhs < rhs,
    lte: (lhs, rhs) => lhs <= rhs,
    gt: (lhs, rhs) => lhs > rhs,
    gte: (lhs, rhs) => lhs >= rhs,
};
const parseNumberArgs = (args) => args.slice(0, -1).flatMap(arg => Array.isArray(arg) ? arg : [arg]).map(arg => typeof arg === "string" ? parseFloat(arg) : arg);
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const getPropValue = (obj, propPath) => propPath.split(".").reduce((current, key) => {
    if (!current)
        return undefined;
    else if (Array.isArray(current))
        return current[Number(key)];
    else
        return current[key];
}, obj);
const getElementName = (segmentTag, index) => segmentTag + String(index).padStart(2, "0");
const utils_define = (helpers) => (register) => register(helpers);

;// CONCATENATED MODULE: ./src/components/printView/handlebars/helpers/string.ts

const stringHelpers = {};
["charAt", "concat", "includes", "endsWith", "indexOf", "lastIndexOf", "padEnd", "padStart", "repeat", "replace", "replaceAll", "search", "slice", "split", "startsWith", "substring", "toLowerCase", "toUpperCase", "trim", "trimStart", "trimEnd"].forEach((method) => {
    stringHelpers[method] = (context, str, ...args) => typeof str === "string" ? str[method](...args) : "";
});
stringHelpers["capitalize"] = (context, str) => capitalize(str);
stringHelpers["equals"] = (context, lhs, rhs) => lhs === rhs;
stringHelpers["truncate"] = (context, str, length) => {
    if (!str)
        return "";
    if (typeof str !== "string")
        str = String(str);
    if (str.length <= length)
        return str;
    return str.substring(0, length);
};
stringHelpers["ellipsis"] = (context, str, length, padding = "...") => {
    if (!str)
        return "";
    if (typeof str !== "string")
        str = String(str);
    if (str.length <= length)
        return str;
    return str.substring(0, length) + padding;
};
stringHelpers["ljust"] = (context, str, length, padding = " ") => {
    if (!str)
        return "";
    if (typeof str !== "string")
        str = String(str);
    if (str.length >= length)
        return str;
    return str.padEnd(length, padding);
};
stringHelpers["rjust"] = (context, str, length, padding = " ") => {
    if (!str)
        return "";
    if (typeof str !== "string")
        str = String(str);
    if (str.length >= length)
        return str;
    return str.padStart(length, padding);
};
/* harmony default export */ const string = (utils_define(stringHelpers));

;// CONCATENATED MODULE: ./src/components/printView/handlebars/helpers/math.ts

const mathHelpers = {};
["floor", "ceil", "round", "abs", "sqrt", "log", "log10", "log2", "exp", "sin", "cos", "tan", "asin", "acos", "atan", "trunc"].forEach(method => {
    mathHelpers[method === "log" ? "mathLog" : method] = (context, a) => {
        const num = typeof a === "string" ? parseFloat(a) : a;
        if (typeof num !== "number" || isNaN(num))
            return "";
        return Math[method](num);
    };
});
["add", "sub", "mul", "div", "mod", "pow", "atan2"].forEach(method => {
    mathHelpers[method] = (context, ...args) => {
        const numbers = parseNumberArgs([].concat(args, context));
        if (numbers.length !== 2 || !numbers.every(n => typeof n === "number" && !isNaN(n)))
            return "";
        const lhs = numbers[0];
        const rhs = numbers[1];
        switch (method) {
            case "add":
                return lhs + rhs;
            case "sub":
                return lhs - rhs;
            case "mul":
                return lhs * rhs;
            case "div":
                return lhs / rhs;
            case "mod":
                return lhs % rhs;
            case "pow":
                return Math.pow(lhs, rhs);
            case "atan2":
                return Math.atan2(lhs, rhs);
            default:
                return "";
        }
    };
});
["max", "min", "avg", "sum"].forEach(method => {
    mathHelpers[method] = (context, ...args) => {
        const numbers = parseNumberArgs([].concat(args, context));
        if (numbers.length === 0 || !numbers.every(n => typeof n === "number" && !isNaN(n)))
            return "";
        switch (method) {
            case "max":
                return Math.max(...numbers);
            case "min":
                return Math.min(...numbers);
            case "avg":
                return numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length;
            case "sum":
                return numbers.reduce((acc, cur) => acc + cur, 0);
            default:
                return "";
        }
    };
});
mathHelpers["random"] = (context) => Math.random();
mathHelpers["randomInt"] = (context, r1, r2) => {
    const min = typeof r1 === "string" ? parseFloat(r1) : r1;
    if (r2 == null) {
        if (typeof min !== "number" || isNaN(min))
            return "";
        return Math.floor(Math.random() * (min + 1));
    }
    else {
        const max = typeof r2 === "string" ? parseFloat(r2) : r2;
        if (typeof min !== "number" || typeof max !== "number" || isNaN(min) || isNaN(max))
            return "";
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};
/* harmony default export */ const math = (utils_define(mathHelpers));

;// CONCATENATED MODULE: ./src/components/printView/handlebars/helpers/array.ts

const arrayHelpers = {};
const parseHash = (hash) => {
    if (!hash)
        return [];
    const conditionKeys = Object.keys(hash);
    if (conditionKeys.length === 0)
        return [];
    return conditionKeys.map(fullKey => {
        let prop = fullKey.replace(/___/g, ".");
        const parts = prop.split("_");
        let op = parts.pop();
        if (op in COMPARISON_OPERATORS) {
            prop = parts.join("_");
        }
        else {
            op = "eqs";
        }
        prop = prop.split(".").filter(Boolean).join(".");
        return (item) => COMPARISON_OPERATORS[op](getPropValue(item, prop), hash[fullKey]);
    });
};
arrayHelpers["array"] = (context, ...arr) => arr;
arrayHelpers["join"] = (context, arr, separator = ",") => {
    if (!Array.isArray(arr))
        return "";
    return arr.join(separator);
};
arrayHelpers["first"] = (context, arr) => {
    if (!Array.isArray(arr) || arr.length === 0)
        return "";
    return arr[0];
};
arrayHelpers["last"] = (context, arr) => {
    if (!Array.isArray(arr) || arr.length === 0)
        return "";
    return arr[arr.length - 1];
};
arrayHelpers["contains"] = (context, arr, item) => {
    if (!Array.isArray(arr))
        return false;
    return arr.includes(item);
};
arrayHelpers["sort"] = (context, arr, property) => {
    if (!Array.isArray(arr))
        return [];
    if (property) {
        return [...arr].sort((lhs, rhs) => {
            const aVal = typeof lhs === "object" && lhs !== null ? getPropValue(lhs, property) : lhs;
            const bVal = typeof rhs === "object" && rhs !== null ? getPropValue(rhs, property) : rhs;
            if (aVal < bVal)
                return -1;
            else if (aVal > bVal)
                return 1;
            else
                return 0;
        });
    }
    else {
        return [...arr].sort();
    }
};
arrayHelpers["unique"] = (context, arr) => {
    if (!Array.isArray(arr))
        return [];
    return [...new Set(arr)];
};
arrayHelpers["reverse"] = (context, arr) => {
    if (!Array.isArray(arr))
        return [];
    return arr.slice().reverse();
};
arrayHelpers["arrayify"] = (context, value) => {
    return value ? (Array.isArray(value) ? value : [value]) : [];
};
arrayHelpers["countIf"] = (context, arr, predicate) => {
    if (!Array.isArray(arr))
        return 0;
    if (typeof predicate === "function")
        return arr.filter((item, index) => predicate(item, index, arr)).length;
    else
        return arr.filter(item => item === predicate).length;
};
arrayHelpers["filter"] = function (context, list) {
    if (!list)
        return [];
    if (!Array.isArray(list))
        list = [list];
    if (list.length === 0 || !context.hash)
        return list;
    const conditions = parseHash(context.hash);
    if (conditions.length === 0)
        return list;
    return list.filter((item) => conditions.every(cond => cond(item)));
};
arrayHelpers["find"] = function (context, list) {
    if (!list)
        return null;
    if (!Array.isArray(list))
        list = [list];
    if (!list || list.length === 0)
        return null;
    if (!context.hash)
        return list[0];
    const conditions = parseHash(context.hash);
    if (conditions.length === 0)
        return list[0];
    return list.find((item) => conditions.every(cond => cond(item)));
};
arrayHelpers["map"] = (context, arr, property) => {
    if (!Array.isArray(arr))
        return [];
    return arr.map(item => getPropValue(item, property));
};
arrayHelpers["flatten"] = (context, arr) => {
    if (!Array.isArray(arr))
        return [arr];
    return arr.flatMap(item => Array.isArray(item) ? item : [item]);
};
/* harmony default export */ const array = (utils_define(arrayHelpers));

;// CONCATENATED MODULE: ./src/components/printView/handlebars/helpers/date.ts

const dateHelpers = {};
const FORMAT_MAP = {
    "yyyy": "(?<year>\\d{4})",
    "MM": "(?<month>\\d{2})",
    "dd": "(?<day>\\d{2})",
    "hh": "(?<hours>\\d{2})",
    "HH": "(?<hours>\\d{2})",
    "mm": "(?<minutes>\\d{2})",
    "ss": "(?<seconds>\\d{2})",
    "SSS": "(?<milliseconds>\\d{3})"
};
const TIME_ZONE = (() => {
    const offset = new Date().getTimezoneOffset();
    const hours = Math.floor(Math.abs(offset) / 60);
    const minutes = Math.abs(offset) % 60;
    const sign = offset <= 0 ? "+" : "-";
    return `${sign}${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
})();
const formatDate = (date, format) => {
    if ((format === null || format === void 0 ? void 0 : format.length) > 0) {
        const year = String(date.getFullYear());
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        const milliseconds = String(date.getMilliseconds()).padStart(3, "0");
        return format
            .replace("yyyy", year)
            .replace("yy", year.substr(-2))
            .replace("MM", month)
            .replace("dd", day)
            .replace("hh", hours)
            .replace("HH", hours)
            .replace("mm", minutes)
            .replace("ss", seconds)
            .replace("SSS", milliseconds)
            .replace("ZZZ", TIME_ZONE);
    }
    const options = {
        hour12: false,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        fractionalSecondDigits: 3
    };
    return new Intl.DateTimeFormat("default", options).format(date);
};
dateHelpers["date"] = (context, ...args) => {
    const numbers = parseNumberArgs([].concat(args, context));
    if (numbers.length < 3 || !numbers.every(n => typeof n === "number" && !isNaN(n)))
        return "";
    // Year, month, day, hour, minute, second, millisecond
    while (numbers.length < 7)
        numbers.push(0);
    return formatDate(new Date(numbers[0], numbers[1] - 1, numbers[2], numbers[3], numbers[4], numbers[5], numbers[6]));
};
dateHelpers["toDate"] = (context, dateString, format = "yyyy-MM-dd HH:mm:ss.SSS", outputFormat) => {
    if (!dateString)
        return "";
    if (typeof dateString !== "string")
        dateString = String(dateString);
    if (!outputFormat && (format === "yyyyMMdd" || format === "yyMMdd"))
        outputFormat = "yyyy-MM-dd";
    let regexPattern = format;
    Object.keys(FORMAT_MAP).forEach(key => {
        regexPattern = regexPattern.replace(key, FORMAT_MAP[key]);
    });
    regexPattern = regexPattern.replace("yy", "(?<short_year>\\d{2})");
    const regex = new RegExp(`^${regexPattern}$`);
    const match = dateString.match(regex);
    if (!match) {
        const date = new Date(dateString);
        return isNaN(date.getTime()) ? dateString : formatDate(date, outputFormat);
    }
    const groups = match.groups || {};
    if (!groups.year && groups.short_year != null) {
        const currentYear = new Date().getFullYear();
        let year = parseInt(groups.short_year) + Math.floor(currentYear / 100) * 100;
        if (year > currentYear)
            year -= 100;
        groups.year = "" + year;
    }
    const date = new Date(parseInt(groups.year) || 0, (parseInt(groups.month) || 1) - 1, parseInt(groups.day) || 1, parseInt(groups.hours) || 0, parseInt(groups.minutes) || 0, parseInt(groups.seconds) || 0, parseInt(groups.milliseconds) || 0);
    return isNaN(date.getTime()) ? dateString : formatDate(date, outputFormat);
};
dateHelpers["timezone"] = (context) => TIME_ZONE;
dateHelpers["now"] = (context, outputFormat) => formatDate(new Date(), outputFormat);
dateHelpers["dateAdd"] = (context, dt, amount, unit = "days", outputFormat) => {
    const date = typeof dt === "string" ? new Date(dt) : dt;
    if (!(date instanceof Date) || isNaN(date.getTime()))
        return "";
    switch (unit) {
        case "years":
            date.setFullYear(date.getFullYear() + amount);
            break;
        case "months":
            date.setMonth(date.getMonth() + amount);
            break;
        case "days":
            date.setDate(date.getDate() + amount);
            break;
        case "hours":
            date.setHours(date.getHours() + amount);
            break;
        case "minutes":
            date.setMinutes(date.getMinutes() + amount);
            break;
        case "seconds":
            date.setSeconds(date.getSeconds() + amount);
            break;
        default:
            date.setDate(date.getDate() + amount);
    }
    return formatDate(date, outputFormat);
};
/* harmony default export */ const date = (utils_define(dateHelpers));

// EXTERNAL MODULE: ./src/components/utils/index.js + 1 modules
var utils = __webpack_require__(25337);
;// CONCATENATED MODULE: ./src/components/printView/handlebars/helpers/comparison.ts


const comparisonHelpers = {};
Object.keys(COMPARISON_OPERATORS).forEach(op => {
    comparisonHelpers[op] = (context, lhs, rhs) => COMPARISON_OPERATORS[op](lhs, rhs);
});
comparisonHelpers["and"] = (context, ...args) => {
    return args.every(val => (0,utils/* getValueAsBool */.CO)(val, false));
};
comparisonHelpers["or"] = (context, ...args) => {
    return args.some(val => (0,utils/* getValueAsBool */.CO)(val, false));
};
comparisonHelpers["not"] = (context, value) => {
    return !(0,utils/* getValueAsBool */.CO)(value, false);
};
/* harmony default export */ const comparison = (utils_define(comparisonHelpers));

;// CONCATENATED MODULE: ./src/components/printView/handlebars/helpers/regex.ts

const regexHelpers = {};
regexHelpers["match"] = (context, str, pattern, flags = "") => {
    if (typeof str !== "string" || typeof pattern !== "string")
        return false;
    try {
        const regex = new RegExp(pattern, flags);
        return regex.test(str);
    }
    catch (e) {
        return false;
    }
};
regexHelpers["replaceRegex"] = (context, str, pattern, replacement, flags = "") => {
    if (typeof str !== "string" || typeof pattern !== "string")
        return str;
    try {
        const regex = new RegExp(pattern, flags);
        return str.replace(regex, replacement);
    }
    catch (e) {
        return str;
    }
};
regexHelpers["extract"] = (context, str, pattern, flags = "") => {
    if (typeof str !== "string" || typeof pattern !== "string")
        return "";
    try {
        const regex = new RegExp(pattern, flags);
        const match = str.match(regex);
        return match ? match[0] : "";
    }
    catch (e) {
        return "";
    }
};
regexHelpers["extractAll"] = (context, str, pattern, flags = "g") => {
    if (typeof str !== "string" || typeof pattern !== "string")
        return [];
    try {
        const regex = new RegExp(pattern, flags);
        const matches = str.matchAll(regex);
        return Array.from(matches).map(match => match[0]);
    }
    catch (e) {
        return [];
    }
};
/* harmony default export */ const regex = (utils_define(regexHelpers));

;// CONCATENATED MODULE: ./src/components/printView/handlebars/helpers/file.ts

const fileHelpers = {};
const getFilename = (path) => {
    if (typeof path !== "string")
        return "";
    return path.split(/[\\/]+/).filter(Boolean).pop() || "";
};
fileHelpers["getFilename"] = (context, path) => getFilename(path);
fileHelpers["getExt"] = (context, path) => {
    const filename = getFilename(path);
    if (!filename)
        return "";
    const dotIndex = filename.lastIndexOf(".");
    return dotIndex >= 0 ? filename.substring(dotIndex) : "";
};
fileHelpers["getFilenameNoExt"] = (context, path) => {
    const filename = getFilename(path);
    if (!filename)
        return "";
    const dotIndex = filename.lastIndexOf(".");
    return dotIndex >= 0 ? filename.substring(0, dotIndex) : filename;
};
fileHelpers["getDirectory"] = (context, path) => {
    if (typeof path !== "string")
        return "";
    const parts = path.split(/[\\/]+/);
    while (parts.length > 1 && parts.pop() === "")
        ;
    return parts.join("/") || ".";
};
fileHelpers["pathCombine"] = (context, ...args) => {
    const paths = args;
    if (paths.length === 0)
        return "";
    return paths.join("/").replace(/[\\/]+/g, "/");
};
fileHelpers["normalizePath"] = (context, path) => {
    if (typeof path !== "string")
        return "";
    return path.replace(/[\\/]+/g, "/").replace(/\/$/, "");
};
/* harmony default export */ const file = (utils_define(fileHelpers));

;// CONCATENATED MODULE: ./src/components/printView/handlebars/helpers/misc.ts


const miscHelpers = {};
const def = (str, defaultValue = "") => str == null || str === "" ? defaultValue : str;
miscHelpers["isNull"] = (context, str) => str == null;
miscHelpers["isEmpty"] = (context, str) => str === "";
miscHelpers["null"] = (context, str, defaultValue = "") => def(str, defaultValue);
miscHelpers["def"] = (context, str, defaultValue = "") => str == null || str === "" ? defaultValue : str;
miscHelpers["empty"] = (context, str, defaultValue = "") => str === "" ? defaultValue : str;
miscHelpers["ifTrue"] = (context, str, defaultValue = false) => (0,utils/* getValueAsBool */.CO)(str, defaultValue);
miscHelpers["formatString"] = (context, pattern, ...args) => (0,utils/* formatString */.JT)(pattern, ...args);
miscHelpers["base64Encode"] = (context, str) => (0,utils/* base64Encode */.KA)(str);
miscHelpers["base64Decode"] = (context, str) => (0,utils/* base64Decode */.u)(str);
miscHelpers["xmlEscape"] = (context, text) => (0,utils/* xmlEscape */.fX)(text);
miscHelpers["equalIgnoreCase"] = (context, lhs, rhs) => (0,utils/* equalIgnoreCase */.Hd)(lhs, rhs);
miscHelpers["keys"] = (context, obj) => obj == null ? [] : Object.keys(obj);
miscHelpers["values"] = (context, obj) => obj == null ? [] : Object.values(obj);
miscHelpers["isObject"] = (context, obj) => obj !== null && typeof obj === "object" && !Array.isArray(obj);
miscHelpers["json"] = (context, obj) => JSON.stringify(obj);
miscHelpers["getElementName"] = (context, segmentTag, index) => getElementName(segmentTag, index);
miscHelpers["lookupEx"] = (context, obj, propPath, defaultValue = "") => def(getPropValue(obj, propPath), defaultValue);
miscHelpers["toFixed"] = (context, number, fractionDigits = 2) => (0,utils/* toFixed */.Mg)(number, fractionDigits);
miscHelpers["length"] = (context, obj) => {
    const length = obj === null || obj === void 0 ? void 0 : obj["length"];
    if (typeof length === "number")
        return length;
    else if (typeof length === "function")
        return length.call(obj);
    else
        return 0;
};
miscHelpers["dict"] = (context, ...pairs) => {
    const dict = Object.create(null);
    for (let i = 0; i < pairs.length; i += 2) {
        dict[pairs[i]] = pairs[i + 1];
    }
    return dict;
};
/* harmony default export */ const misc = (utils_define(miscHelpers));

;// CONCATENATED MODULE: ./src/components/printView/handlebars/helpers/blocks.ts


const blockHelpers = {};
Object.keys(COMPARISON_OPERATORS).forEach(op => {
    blockHelpers["if" + capitalize(op)] = function (context, lhs, rhs) {
        return (COMPARISON_OPERATORS[op](lhs, rhs)) ? context.fn(this) : context.inverse(this);
    };
});
blockHelpers["loop"] = function (context, ...args) {
    var _a;
    const ranger = (_a = args.map(arg => typeof arg === "string" ? parseFloat(arg) : arg)) !== null && _a !== void 0 ? _a : [];
    if (ranger.length == 0)
        ranger.splice(0, 0, 0, 10);
    else if (ranger.length == 1)
        ranger.splice(0, 0, 0);
    let accum = "";
    for (let current = ranger[0]; current < ranger[1]; ++current) {
        const frame = context.createFrame(context.data || {});
        frame.index = current - ranger[0];
        frame.first = (current === ranger[0]);
        frame.last = (current === ranger[1] - 1);
        accum += context.fn(current, { data: frame });
    }
    return accum;
};
blockHelpers["groupBy"] = function (context, array, property) {
    var _a;
    if (!Array.isArray(array))
        return "";
    const groups = {};
    array.forEach(item => {
        const group = getPropValue(item, property);
        if (!groups[group])
            groups[group] = [];
        groups[group].push(item);
    });
    const keys = Object.keys(groups);
    if ((0,utils/* getValueAsBool */.CO)((_a = context.hash) === null || _a === void 0 ? void 0 : _a["sort"], false))
        keys.sort();
    let accum = "";
    keys.forEach((group, index) => {
        const frame = context.createFrame(context.data || {});
        frame.index = index;
        frame.first = (index === 0);
        frame.last = (index === keys.length - 1);
        accum += context.fn({ group, items: groups[group] }, { data: frame });
    });
    return accum;
};
blockHelpers["toList"] = function (context, items) {
    return "<ul>" + items.map((item) => "<li>" + context.fn(item) + "</li>").join("") + "</ul>";
};
blockHelpers["switch"] = function (context, value) {
    const frame = context.createFrame(context.data || {});
    frame.caseMap = new Map();
    frame.defaultFn = null;
    context.fn(this, { data: frame });
    if (frame.caseMap.has(value)) {
        return frame.caseMap.get(value).call(this);
    }
    else if (frame.defaultFn) {
        return frame.defaultFn.call(this);
    }
    else {
        return "";
    }
};
blockHelpers["case"] = function (context, ...values) {
    const frame = context.data || {};
    if (!frame.caseMap)
        return "";
    const templateFn = context.fn.bind(context, this);
    for (const value of values) {
        frame.caseMap.set(value, templateFn);
    }
    return "";
};
blockHelpers["default"] = function (context) {
    const frame = context.data || {};
    frame.defaultFn = context.fn.bind(context, this);
    return "";
};
blockHelpers["ifFirst"] = function (context) {
    const frame = context.data || {};
    return frame.first ? context.fn(this) : context.inverse(this);
};
blockHelpers["ifLast"] = function (context) {
    const frame = context.data || {};
    return frame.last ? context.fn(this) : context.inverse(this);
};
blockHelpers["ifIndex"] = function (context, index) {
    const frame = context.data || {};
    return frame.index === index ? context.fn(this) : context.inverse(this);
};
blockHelpers["foreach"] = function (context, ...args) {
    const root = args.length === 2 ? args[0] : this;
    const jPath = args.length === 2 ? args[1] : args[0] || "";
    const nodes = (jPath || "").split(".").filter(Boolean).reduce((parents, name) => {
        const matched = parents.filter((node) => name in node).map((node) => node[name]);
        return matched.flatMap(node => Array.isArray(node) ? node : [node]);
    }, Array.isArray(root) ? root : [root]);
    if (!nodes || nodes.length <= 0)
        return context.inverse(this);
    let accum = "";
    nodes.forEach((node, index) => {
        const frame = context.createFrame(context.data || {});
        frame.index = index;
        frame.first = (index === 0);
        frame.last = (index === nodes.length - 1);
        accum += context.fn(node, { data: frame });
    });
    return accum;
};
/* harmony default export */ const blocks = (utils_define(blockHelpers));

;// CONCATENATED MODULE: ./src/components/printView/handlebars/helpers/edi.ts

// Qualifiers.
const EDIFACT_MESSAGE_TYPES = {
    "APERAK": "Application error and acknowledgement",
    "AUTHOR": "Authorization",
    "BALANC": "Balance",
    "BANSTA": "Banking status",
    "BAPLIE": "Bayplan/stowage plan occupied and empty locations",
    "BERMAN": "Berth management",
    "BMISRM": "Bulk marine inspection summary report",
    "BOPBNK": "Bank transactions and portfolio transactions report",
    "BOPCUS": "Balance of payment customer transaction report",
    "BOPDIR": "Direct balance of payment declaration",
    "BOPINF": "Balance of payment information from customer",
    "BUSCRD": "Business credit report",
    "CALINF": "Vessel call information",
    "CASINT": "Request for legal administration action in civil proceedings",
    "CASRES": "Legal administration response in civil proceedings",
    "CHACCO": "Chart of accounts",
    "CLASET": "Classification information set",
    "CNTCND": "Contractual conditions",
    "COACSU": "Commercial account summary",
    "COARRI": "Container discharge/loading report",
    "CODECO": "Container gate-in/gate-out report",
    "CODENO": "Permit expiration/clearance ready notice",
    "COEDOR": "Container stock report",
    "COHAOR": "Container special handling order",
    "COLREQ": "Request for a documentary collection",
    "COMDIS": "Commercial dispute",
    "CONAPW": "Advice on pending works",
    "CONDPV": "Direct payment valuation",
    "CONDRA": "Drawing administration",
    "CONDRO": "Drawing organisation",
    "CONEST": "Establishment of contract",
    "CONITT": "Invitation to tender",
    "CONPVA": "Payment valuation",
    "CONQVA": "Quantity valuation",
    "CONRPW": "Response of pending works",
    "CONTEN": "Tender",
    "CONTRL": "Syntax and service report",
    "CONWQD": "Work item quantity determination",
    "COPARN": "Container announcement",
    "COPAYM": "Contributions for",
    "COPINO": "Container pre-notification",
    "COPRAR": "Container discharge/loading order",
    "COREOR": "Container release order",
    "COSTCO": "Container stuffing/stripping confirmation",
    "COSTOR": "Container stuffing/stripping order",
    "CREADV": "Credit advice",
    "CREEXT": "Extended credit advice",
    "CREMUL": "Multiple credit advice",
    "CUSCAR": "Customs cargo report",
    "CUSDEC": "Customs declaration",
    "CUSEXP": "Customs express consignment declaration",
    "CUSPED": "Periodic customs declaration",
    "CUSREP": "Customs conveyance report",
    "CUSRES": "Customs response",
    "DAPLOS": "Data plot sheet",
    "DEBADV": "Debit advice",
    "DEBMUL": "Multiple debit advice",
    "DEBREC": "Debts recovery",
    "DELFOR": "Delivery schedule",
    "DELJIT": "Delivery just in time",
    "DESADV": "Despatch advice",
    "DESTIM": "Equipment damage and repair estimate",
    "DGRECA": "Dangerous goods recapitulation",
    "DIRDEB": "Direct debit",
    "DIRDEF": "Directory definition",
    "DMRDEF": "Data maintenance request definition",
    "DMSTAT": "Data maintenance status report/query",
    "DOCADV": "Documentary credit advice",
    "DOCAMA": "Advice of an amendment of a documentary credit",
    "DOCAMI": "Documentary credit amendment information",
    "DOCAMR": "Request for an amendment of a documentary credit",
    "DOCAPP": "Documentary credit application",
    "DOCARE": "Response to an amendment of a documentary credit",
    "DOCINF": "Documentary credit issuance information",
    "ENTREC": "Accounting entries",
    "FINCAN": "Financial cancellation",
    "FINPAY": "Multiple interbank funds transfer",
    "FINSTA": "Financial statement of an account",
    "GENRAL": "General purpose",
    "GESMES": "Generic statistical",
    "GOVCBR": "Government cross border regulatory",
    "HANMOV": "Cargo/goods handling and movement",
    "ICASRP": "Insurance claim assessment and reporting",
    "ICSOLI": "Insurance claim solicitor's instruction",
    "IFCSUM": "Forwarding and consolidation summary",
    "IFTCCA": "Forwarding and transport shipment charge calculation",
    "IFTDGN": "Dangerous goods notification",
    "IFTFCC": "International transport freight costs and other charges",
    "IFTICL": "Cargo insurance claims",
    "IFTMAN": "Arrival notice",
    "IFTMBC": "Booking confirmation",
    "IFTMBF": "Firm booking",
    "IFTMBP": "Provisional booking",
    "IFTMCA": "Consignment advice",
    "IFTMCS": "Instruction contract status",
    "IFTMIN": "Instruction",
    "IFTRIN": "Forwarding and transport rate information",
    "IFTSAI": "Forwarding and transport schedule and availability information",
    "IFTSTA": "International multimodal status report",
    "IFTSTQ": "International multimodal status request",
    "IMPDEF": "EDI implementation guide definition",
    "INFCON": "Infrastructure condition",
    "INFENT": "Enterprise accounting information",
    "INSDES": "Instruction to despatch",
    "INSPRE": "Insurance premium",
    "INSREQ": "Inspection request",
    "INSRPT": "Inspection report",
    "INVOIC": "Invoice",
    "INVRPT": "Inventory report",
    "IPPOAD": "Insurance policy administration",
    "IPPOMO": "Motor insurance policy",
    "ISENDS": "Intermediary system enablement or disablement",
    "ITRRPT": "In transit report detail",
    "JAPRES": "Job application result",
    "JINFDE": "Job information demand",
    "JOBAPP": "Job application proposal",
    "JOBCON": "Job order confirmation",
    "JOBMOD": "Job order modification",
    "JOBOFF": "Job order",
    "JUPREQ": "Justified payment request",
    "LEDGER": "Ledger",
    "LREACT": "Life reinsurance activity",
    "LRECLM": "Life reinsurance claims",
    "MEDPID": "Person identification",
    "MEDPRE": "Medical prescription",
    "MEDREQ": "Medical service request",
    "MEDRPT": "Medical service report",
    "MEDRUC": "Medical resource usage and cost",
    "MEQPOS": "Means of transport and equipment position",
    "MOVINS": "Stowage instruction",
    "MSCONS": "Metered services consumption report",
    "ORDCHG": "Purchase order change request",
    "ORDERS": "Purchase order",
    "ORDRSP": "Purchase order response",
    "OSTENQ": "Order status enquiry",
    "OSTRPT": "Order status report",
    "PARTIN": "Party information",
    "PAXLST": "Passenger list",
    "PAYDUC": "Payroll deductions advice",
    "PAYEXT": "Extended payment order",
    "PAYMUL": "Multiple payment order",
    "PAYORD": "Payment order",
    "PRICAT": "Price/sales catalogue",
    "PRIHIS": "Pricing history",
    "PROCST": "Project cost reporting",
    "PRODAT": "Product data",
    "PRODEX": "Product exchange reconciliation",
    "PROINQ": "Product inquiry",
    "PROSRV": "Product service",
    "PROTAP": "Project tasks planning",
    "PRPAID": "Insurance premium payment",
    "QALITY": "Quality data",
    "QUOTES": "Quote",
    "RDRMES": "Raw data reporting",
    "REBORD": "Reinsurance bordereau",
    "RECADV": "Receiving advice",
    "RECALC": "Reinsurance calculation",
    "RECECO": "Credit risk cover",
    "RECLAM": "Reinsurance claims",
    "RECORD": "Reinsurance core data",
    "REGENT": "Registration of enterprise",
    "RELIST": "Reinsured objects list",
    "REMADV": "Remittance advice",
    "REPREM": "Reinsurance premium",
    "REQDOC": "Request for document",
    "REQOTE": "Request for quote",
    "RESETT": "Reinsurance settlement",
    "RESMSG": "Reservation",
    "RETACC": "Reinsurance technical account",
    "RETANN": "Announcement for returns",
    "RETINS": "Instruction for returns",
    "RPCALL": "Repair call",
    "SAFHAZ": "Safety and hazard data",
    "SANCRT": "International movement of goods governmental regulatory",
    "SLSFCT": "Sales forecast",
    "SLSRPT": "Sales data report",
    "SOCADE": "Social administration",
    "SSIMOD": "Modification of identity details",
    "SSRECH": "Worker's insurance history",
    "SSREGW": "Notification of registration of a worker",
    "STATAC": "Statement of account",
    "STLRPT": "Settlement transaction reporting",
    "SUPCOT": "Superannuation contributions advice",
    "SUPMAN": "Superannuation maintenance",
    "SUPRES": "Supplier response",
    "TANSTA": "Tank status report",
    "TAXCON": "Tax control",
    "TPFREP": "Terminal performance",
    "UTILMD": "Utilities master data",
    "UTILTS": "Utilities time series",
    "VATDEC": "Value added tax",
    "VERMAS": "Verified gross mass",
    "VESDEP": "Vessel departure",
    "WASDIS": "Waste disposal information",
    "WKGRDC": "Work grant decision",
    "WKGRRE": "Work grant request",
};
const X12_FUNCTIONAL_IDENTIFIER_CODE = {
    "AA": "Account Analysis (822)",
    "AB": "Logistics Service Request (219)",
    "AC": "Associated Data (102)",
    "AD": "Individual Life, Annuity and Disability Application (267)",
    "AE": "Premium Audit Request and Return (187)",
    "AF": "Application for Admission to Educational Institutions (189)",
    "AG": "Application Advice (824)",
    "AH": "Logistics Service Response (220)",
    "AI": "Automotive Inspection Detail (928)",
    "AK": "Student Educational Record (Transcript) Acknowledgment (131)",
    "AL": "Set Cancellation (998)",
    "AM": "Item Information Request (893)",
    "AN": "Return Merchandise Authorization and Notification (180)",
    "AO": "Income or Asset Offset (521)",
    "AP": "Abandoned Property Filings (103)",
    "AQ": "Customs Manifest (309)",
    "AR": "Warehouse Stock Transfer Shipment Advice (943)",
    "AS": "Transportation Appointment Schedule Information (163)",
    "AT": "Animal Toxicological Data (249)",
    "AU": "Customs Status Information (350)",
    "AV": "Customs Carrier General Order Status (352)",
    "AW": "Warehouse Inventory Adjustment Advice (947)",
    "AX": "Customs Events Advisory Details (353)",
    "AY": "Customs Automated Manifest Archive Status (354)",
    "AZ": "Customs Acceptance/Rejection (355)",
    "BA": "Customs Permit to Transfer Request (356)",
    "BB": "Customs In-Bond Information (357)",
    "BC": "Business Credit Report (155)",
    "BD": "Customs Consist Information (358)",
    "BE": "Benefit Enrollment and Maintenance (834)",
    "BF": "Business Entity Filings (105)",
    "BG": "Customs Customer Profile Management (359)",
    "BL": "Motor Carrier Bill of Lading (211)",
    "BS": "Shipment and Billing Notice (857)",
    "CA": "Purchase Order Change Acknowledgment/Request - Seller Initiated (865)",
    "CB": "Unemployment Insurance Tax Claim or Charge Information (153)",
    "CC": "Clauses and Provisions (504)",
    "CD": "Credit/Debit Adjustment (812)",
    "CE": "Cartage Work Assignment (222)",
    "CF": "Corporate Financial Adjustment Information (844 and 849)",
    "CH": "Car Handling Information (420)",
    "CI": "Consolidated Service Invoice/Statement (811)",
    "CJ": "Manufacturer Coupon Family Code Structure (877)",
    "CK": "Manufacturer Coupon Redemption Detail (881)",
    "CL": "Election Campaign and Lobbyist Reporting (113)",
    "CM": "Component Parts Content (871)",
    "CN": "Coupon Notification (887)",
    "CO": "Cooperative Advertising Agreements (290)",
    "CP": "Electronic Proposal Information (251, 805)",
    "CQ": "Commodity Movement Services Response (874)",
    "CR": "Rail Carhire Settlements (414)",
    "CS": "Cryptographic Service Message (815)",
    "CT": "Application Control Totals (831)",
    "CU": "Commodity Movement Services (873)",
    "CV": "Commercial Vehicle Safety and Credentials Information Exchange (285)",
    "CW": "Educational Institution Record (133)",
    "D3": "Contract Completion Status (567)Transaction set for reporting the administrative closure status of physically completed contracts",
    "D4": "Contract Abstract (561, 890)",
    "D5": "Contract Payment Management Report (568)",
    "DA": "Debit Authorization (828)",
    "DD": "Shipment Delivery Discrepancy Information (854)",
    "DF": "Market Development Fund Allocation (883)",
    "DI": "Dealer Information (128)",
    "DM": "Equipment Order (422)",
    "DS": "Data Status Tracking (242)",
    "DX": "Direct Exchange Delivery and Return Information (894, 895)",
    "EC": "Educational Course Inventory (188)",
    "ED": "Student Educational Record (Transcript) (130)",
    "EI": "Railroad Equipment Inquiry or Advice (456)",
    "EN": "Equipment Inspection (228)",
    "EO": "Transportation Equipment Registration (603)",
    "EP": "Environmental Compliance Reporting (179)",
    "ER": "Revenue Receipts Statement (170)",
    "ES": "Notice of Employment Status (540)",
    "EV": "Railroad Event Report (451)",
    "EX": "Excavation Communication (620)",
    "FA": "Functional or Implementation Acknowledgment Transaction Sets (997, 999)",
    "FB": "Freight Invoice (859)",
    "FC": "Court and Law Enforcement Information (175, 176)",
    "FG": "Motor Carrier Loading and Route Guide (217)",
    "FR": "Financial Reporting (821, 827)",
    "FT": "File Transfer (996)",
    "GC": "Damage Claim Transaction Sets (920, 924, 925, 926)",
    "GE": "General Request, Response or Confirmation (814)",
    "GF": "Response to a Load Tender (990)",
    "GL": "Intermodal Group Loading Plan (715)",
    "GP": "Grocery Products Invoice (880)",
    "GR": "Statistical Government Information (152)",
    "GT": "Grant or Assistance Application (194)",
    "HB": "Eligibility, Coverage or Benefit Information (271)",
    "HC": "Health Care Claim (837)",
    "HI": "Health Care Services Review Information (278)",
    "HN": "Health Care Information Status Notification (277)",
    "HP": "Health Care Claim Payment/Advice (835)",
    "HR": "Health Care Claim Status Request (276)",
    "HS": "Eligibility, Coverage or Benefit Inquiry (270)",
    "HU": "Human Resource Information (132)",
    "HV": "Health Care Benefit Coordination Verification (269)",
    "IA": "Air Freight Details and Invoice (110, 980)",
    "IB": "Inventory Inquiry/Advice (846)",
    "IC": "Rail Advance Interchange Consist (418)",
    "ID": "Insurance/Annuity Application Status (273)",
    "IE": "Insurance Producer Administration (252)",
    "IF": "Individual Insurance Policy and Client Information (111)",
    "IG": "Direct Store Delivery Summary Information (882)",
    "IH": "Commercial Vehicle Safety Reports (284)",
    "IJ": "Report of Injury, Illness or Incident (148)",
    "IM": "Motor Carrier Freight Details and Invoice (210, 980)",
    "IN": "Invoice Information (810)",
    "IO": "Ocean Shipment Billing Details (310, 312, 980)",
    "IR": "Rail Carrier Freight Details and Invoice (410, 980)",
    "IS": "Estimated Time of Arrival and Car Scheduling (421)",
    "JB": "Joint Interest Billing and Operating Expense Statement (819)",
    "KM": "Commercial Vehicle Credentials (286)",
    "LA": "Federal Communications Commission (FCC) License Application (195)",
    "LB": "Lockbox (823)",
    "LI": "Locomotive Information (436)",
    "LN": "Property and Casualty Loss Notification (272)",
    "LR": "Logistics Reassignment (536)",
    "LS": "Asset Schedule (851)",
    "LT": "Student Loan Transfer and Status Verification (144)",
    "MA": "Motor Carrier Summary Freight Bill Manifest (224)",
    "MC": "Request for Motor Carrier Rate Proposal (107)",
    "MD": "Department of Defense Inventory Management (527)Transactions related to the interchange of information involving material in the supply, control, and distribution systems and financial management of the Department of Defense or other participating agencies",
    "ME": "Mortgage Origination (198, 200, 201, 245, 261, 262, 263, 833, 872)",
    "MF": "Market Development Fund Settlement (884)",
    "MG": "Mortgage Servicing Transaction Sets (203, 206, 259, 260, 264, 266)",
    "MH": "Motor Carrier Rate Proposal (106)",
    "MI": "Motor Carrier Shipment Status Inquiry (213)",
    "MJ": "Secondary Mortgage Market Loan Delivery (202)",
    "MK": "Response to a Motor Carrier Rate Proposal (108)",
    "MM": "Medical Event Reporting (500)",
    "MN": "Mortgage Note (205)",
    "MO": "Maintenance Service Order (650)",
    "MP": "Motion Picture Booking Confirmation (159)",
    "MQ": "Consolidators Freight Bill and Invoice (223)",
    "MR": "Multilevel Railcar Load Details (125)",
    "MS": "Material Safety Data Sheet (848)",
    "MT": "Electronic Form Structure (868)",
    "MV": "Material Obligation Validation (517)",
    "MW": "Rail Waybill Response (427)",
    "MX": "Material Claim (847)",
    "MY": "Response to a Cartage Work Assignment (225)",
    "MZ": "Motor Carrier Package Status (240)",
    "NC": "Nonconformance Report (842)",
    "NL": "Name and Address Lists (101)",
    "NP": "Notice of Power of Attorney (157)",
    "NR": "Secured Receipt or Acknowledgment (993)",
    "NT": "Notice of Tax Adjustment or Assessment (149)",
    "OC": "Cargo Insurance Advice of Shipment (362)",
    "OG": "Order Group - Grocery (875, 876)",
    "OR": "Organizational Relationships (816)",
    "OW": "Warehouse Shipping Order (940)",
    "PA": "Price Authorization Acknowledgment/Status (845)",
    "PB": "Railroad Parameter Trace Registration (455)",
    "PC": "Purchase Order Change Request - Buyer Initiated (860)",
    "PD": "Product Activity Data (852)",
    "PE": "Periodic Compensation (256)",
    "PF": "Annuity Activity (268)",
    "PG": "Insurance Plan Description (100)",
    "PH": "Pricing History (503)",
    "PI": "Patient Information (275)",
    "PJ": "Project Schedule Reporting (806)",
    "PK": "Project Cost Reporting (839) and Contractor Cost Data Reporting (196)",
    "PL": "Railroad Problem Log Inquiry or Advice (452)",
    "PN": "Product Source Information (244)",
    "PO": "Purchase Order (850)",
    "PQ": "Property Damage Report (112)",
    "PR": "Purchase Order Acknowledgment (855)",
    "PS": "Planning Schedule with Release Capability (830)",
    "PT": "Product Transfer and Resale Report (867)",
    "PU": "Motor Carrier Shipment Pickup Notification (216)",
    "PV": "Purchase Order Shipment Management Document (250)",
    "PW": "Healthcare Provider Information (274)",
    "PY": "Payment Cancellation Request (829)",
    "QG": "Product Information (878, 879, 888, 889, 896)",
    "QM": "Transportation Carrier Shipment Status Message (214)",
    "QO": "Ocean Shipment Status Information (313, 315)",
    "RA": "Payment Order/Remittance Advice (820)",
    "RB": "Railroad Clearance (470)",
    "RC": "Receiving Advice/Acceptance Certificate (861)",
    "RD": "Royalty Regulatory Report (185)",
    "RE": "Warehouse Stock Receipt Advice (944)",
    "RF": "Request for Routing Instructions (753)",
    "RG": "Routing Instructions (754)",
    "RH": "Railroad Reciprocal Switch File (433)",
    "RI": "Routing and Carrier Instruction (853)",
    "RJ": "Railroad Mark Register Update Activity (434)",
    "RK": "Standard Transportation Commodity Code Master (435)",
    "RL": "Rail Industrial Switch List (423)",
    "RM": "Railroad Station Master File (431)",
    "RN": "Requisition Transaction (511)Transaction set for ordering equipment and material. Can also be used to inquire about, amend, or terminate the original order",
    "RO": "Ocean Booking Information (300, 301, 303)",
    "RP": "Commission Sales Report (818)",
    "RQ": "Request for Quotation (840) and Procurement Notices (836)",
    "RR": "Response to Request For Quotation (843)",
    "RS": "Order Status Information (869, 870)",
    "RT": "Report of Test Results (863)",
    "RU": "Railroad Retirement Activity (429)",
    "RV": "Railroad Junctions and Interchanges Activity (437)",
    "RW": "Rail Revenue Waybill (426)",
    "RX": "Rail Car Hire Rate Negotiation",
    "RY": "Request for Student Educational Record (Transcript) (146)",
    "RZ": "Response to Request for Student Educational Record (Transcript) (147)",
    "SA": "Air Shipment Information (104)",
    "SB": "Rail Carrier Services Settlement (424)",
    "SC": "Price/Sales Catalog (832, 897)",
    "SD": "Student Loan Pre-Claims and Claims (191)",
    "SE": "Shipper's Export Declaration (601)",
    "SF": "Customs Manifest (309)",
    "SH": "Ship Notice/Manifest (856)",
    "SI": "Shipment Information (858)",
    "SJ": "Transportation Automatic Equipment Identification (160)",
    "SL": "Student Aid Origination Record (135, 139)",
    "SM": "Motor Carrier Load Tender (204)",
    "SN": "Rail Route File Maintenance (475)",
    "SO": "Ocean Shipment Information (304, 311, 317, 319, 322, 323, 324, 325, 326, 361)",
    "SP": "Specifications/Technical Information (841)",
    "SQ": "Production Sequence (866)",
    "SR": "Rail Carrier Shipment Information (404, 419)",
    "SS": "Shipping Schedule (862)",
    "ST": "Railroad Service Commitment Advice (453)",
    "SU": "Account Assignment/Inquiry and Service/Status (248)",
    "SV": "Student Enrollment Verification (190)",
    "SW": "Warehouse Shipping Advice (945)",
    "TA": "Electronic Filing of Tax Return Data Acknowledgment (151)",
    "TB": "Trailer or Container Repair Billing (412)",
    "TD": "Trading Partner Profile (838)",
    "TE": "Tax or Fee Exemption Certification (283)",
    "TF": "Electronic Filing of Tax Return Data (813)",
    "TI": "Tax Information Exchange (826)",
    "TJ": "Tax Jurisdiction Sourcing (158)",
    "TM": "Motor Carrier Delivery Trailer Manifest (212)",
    "TN": "Tax Rate Notification (150)",
    "TO": "Real Estate Title Services (197, 199, 265, 485, 486)",
    "TP": "Rail Rate Transactions (460, 463, 466, 468, 485, 486, 490, 492, 494)",
    "TR": "Train Sheet (161)",
    "TT": "Educational Testing and Prospect Request and Report (138)",
    "TU": "Trailer Usage Report (227)",
    "TX": "Text Message (864)",
    "UA": "Retail Account Characteristics (885)",
    "UB": "Customer Call Reporting (886)",
    "UC": "Secured Interest Filing (154)",
    "UD": "Deduction Research Report (891)",
    "UI": "Underwriting Information Services (255)",
    "UP": "Motor Carrier Pickup Manifest (215)",
    "UW": "Insurance Underwriting Requirements Reporting (186)",
    "VA": "Vehicle Application Advice (126)",
    "VB": "Vehicle Baying Order (127)",
    "VC": "Vehicle Shipping Order (120)",
    "VD": "Vehicle Damage (124)",
    "VE": "Vessel Content Details (109)",
    "VH": "Vehicle Carrier Rate Update (129)",
    "VI": "Voter Registration Information (280)",
    "VS": "Vehicle Service (121)",
    "WA": "Product Service Transaction Sets (140, 141, 142, 143)",
    "WB": "Rail Carrier Waybill Interchange (417)",
    "WG": "Vendor Performance Review (501, 892)",
    "WI": "Wage Determination (288)",
    "WL": "Well Information (625)",
    "WR": "Shipment Weights (440)",
    "WT": "Rail Waybill Request (425)",
};
const X12_TRANSACTION_SET_IDENTIFIER_CODE = {
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
    "260": "Application for Mortgage Insurance BenefitsA claim filed for mortgage insurance benefits",
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
    "432": "Rail Car Hire Rate Negotiation",
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
    "511": "RequisitionTransaction set for ordering equipment and material from a supply distribution system; this can also be used to inquire about, amend, or terminate the original order",
    "517": "Material Obligation ValidationTransaction set for verifying the continued need for open orders. Can also be used to confirm open order quantities and request reinstatement of previously cancelled open orders",
    "521": "Income or Asset Offset",
    "527": "Material Due-In and ReceiptTransaction set for reporting material dues-in, anticipated receipts, and receipts",
    "536": "Logistics ReassignmentTransaction set for reporting information needed by a new manager when transferring inventory management responsibility between organizations",
    "540": "Notice of Employment Status",
    "561": "Contract AbstractA summary of the essential elements of a contract, sufficient to enable the contract administration process to commence",
    "567": "Contract Completion StatusTransaction set for reporting the administrative closure status of physically completed contracts",
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
    "892": "Trading Partner Performance Measurements",
    "893": "Item Information Request",
    "894": "Delivery/Return Base Record",
    "895": "Delivery/Return Acknowledgment or Adjustment",
    "896": "Product Dimension Maintenance",
    "897": "Data Synchronization",
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
};
const ediHelpers = {};
// Helpers.
ediHelpers["Code0065"] = (context, messageType) => EDIFACT_MESSAGE_TYPES[messageType] || messageType;
ediHelpers["CodeGS01"] = (context, code) => X12_FUNCTIONAL_IDENTIFIER_CODE[code] || code;
ediHelpers["CodeST01"] = (context, messageType) => X12_TRANSACTION_SET_IDENTIFIER_CODE[messageType] || messageType;
// Block helpers.
// X12: PER: Administrative Communications Contact (365, 364)
// X12: PO1: Baseline Item Data (235, 234)
ediHelpers["segmentQualifiers"] = function (context, segment, startElementIndex = 1) {
    var _a;
    if (!segment || typeof segment !== "object")
        return context.inverse(this);
    const elementNames = Object.keys(segment);
    if (startElementIndex >= elementNames.length)
        return context.inverse(this);
    const segTag = (_a = elementNames.find(name => name && !name.startsWith("@") && /^.+\d\d$/.test(name))) === null || _a === void 0 ? void 0 : _a.slice(0, -2);
    if (!segTag)
        return context.inverse(this);
    const qualifiers = [];
    const values = [];
    while (startElementIndex < elementNames.length) {
        const qualifier = getPropValue(segment, getElementName(segTag, startElementIndex++));
        const value = getPropValue(segment, getElementName(segTag, startElementIndex++));
        if (qualifier) {
            qualifiers.push(qualifier);
            values.push(value || "");
        }
    }
    if (qualifiers.length <= 0)
        return context.inverse(this);
    let accum = "";
    qualifiers.forEach((qualifier, index) => {
        const frame = context.createFrame(context.data || {});
        frame.index = index;
        frame.first = (index === 0);
        frame.last = (index === qualifiers.length - 1);
        accum += context.fn({ qualifier, value: values[index] }, { data: frame });
    });
    return accum;
};
// Hierarchical Package Structure
// X12:     856     - HLLoop1   - S,O,T,P,I
// EDIFACT: DESADV  - CPSLoop1  - 5,4,3,2,1
ediHelpers["hierarchy"] = function (context, loops, idProp, parentIdProp, levelProp, orders = []) {
    if (!loops || !Array.isArray(loops))
        return context.inverse(this);
    const roots = [];
    const byParentId = loops.some(loop => getPropValue(loop, parentIdProp));
    const hierarchyMap = new Map();
    loops.forEach((loop, index) => {
        const levelCode = getPropValue(loop, levelProp);
        const levelOrder = levelCode != null && levelCode !== "" ? orders.indexOf(levelCode) : orders.length;
        const hierarchy = {
            loop,
            index,
            id: getPropValue(loop, idProp),
            parentId: getPropValue(loop, parentIdProp),
            levelCode,
            hierarchyLevel: 1,
            children: [],
        };
        const parentHierarchy = byParentId ? hierarchyMap.get(hierarchy.parentId) : Array.from(Array(levelOrder).keys()).reverse().reduce((parent, index) => parent !== null && parent !== void 0 ? parent : hierarchyMap.get(index), null);
        if (parentHierarchy) {
            hierarchy.hierarchyLevel = parentHierarchy.hierarchyLevel + 1;
            parentHierarchy.children.push(hierarchy);
            !parentHierarchy && Array.from({ length: orders.length - levelOrder - 1 }, (_, i) => i + levelOrder + 1).forEach(i => hierarchyMap.delete(i));
        }
        else {
            roots.push(hierarchy);
            !parentHierarchy && hierarchyMap.clear();
        }
        hierarchyMap.set(byParentId ? hierarchy.id : levelOrder, hierarchy);
    });
    const processHierarchy = (hierarchy, index, siblings) => {
        const frame = context.createFrame(context.data || {});
        frame.index = hierarchy.index;
        frame.first = hierarchy.index == 0;
        frame.last = hierarchy.index == loops.length - 1;
        frame.top = (hierarchy.hierarchyLevel === 1);
        frame.inner = hierarchy.children.length <= 0;
        frame.id = hierarchy.id;
        frame.parentId = hierarchy.parentId;
        frame.levelCode = hierarchy.levelCode;
        frame.hierarchyLevel = hierarchy.hierarchyLevel;
        frame.hierarchyIndex = index;
        frame.hierarchyFirst = index == 0;
        frame.hierarchyLast = index == siblings.length - 1;
        frame.siblings = siblings.map(l => l.loop);
        return `<div class='hierarchy hierarchy-${hierarchy.hierarchyLevel}${hierarchy.children.length <= 0 ? " hierarchy-inner" : ""}${hierarchy.levelCode != null && hierarchy.levelCode !== "" ? " level-" + hierarchy.levelCode : ""}'>${context.fn(hierarchy.loop, { data: frame }) + hierarchy.children.map(processHierarchy).join("")}</div>`;
    };
    return `<div class='hierarchy-container'>${roots.map(processHierarchy).join("")}</div>`;
};
ediHelpers["indent"] = ediHelpers["hierarchy"];
ediHelpers["indentHL"] = function (context, loops) {
    const hlLoops = loops != null ? loops : getPropValue(this, "HLLoop1");
    return ediHelpers["indent"](context, hlLoops, "HL.HL01", "HL.HL02", "HL.HL03", ["S", "O", "T", "P", "I"]);
};
ediHelpers["indentCPS"] = function (context, loops) {
    const cpsLoops = loops != null ? loops : getPropValue(this, "CPSLoop1");
    return ediHelpers["indent"](context, cpsLoops, "CPS.CPS01", "CPS.CPS02", "CPS.CPS03", [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
};
/* harmony default export */ const edi = (utils_define(ediHelpers));

;// CONCATENATED MODULE: ./src/components/printView/handlebars/helpers/ctx.ts

const ctxHelpers = {};
ctxHelpers["get"] = (context, key, defaultValue) => { var _a; return (_a = context.data.__ctx__[key]) !== null && _a !== void 0 ? _a : defaultValue; };
ctxHelpers["set"] = (context, key, value) => {
    context.data.__ctx__[key] = value;
};
ctxHelpers["append"] = (context, key, ...values) => {
    if (!key)
        return;
    if (!context.data.__ctx__[key])
        context.data.__ctx__[key] = [];
    context.data.__ctx__[key].push(...values);
};
ctxHelpers["clear"] = (context, key) => {
    if ((key === null || key === void 0 ? void 0 : key.length) > 0)
        delete context.data.__ctx__[key];
    else
        context.data.__ctx__ = Object.create(null);
};
/* harmony default export */ const ctx = (utils_define(ctxHelpers));

;// CONCATENATED MODULE: ./src/components/printView/handlebars/partials.ts
const PARTIALS = {
    ediPartyCard: "<div class=\"party-card\">" +
        "  <b>{{title}}</b>" +
        "  <span>{{PARTY.NAD.NAD06}} {{PARTY.NAD.NAD02.NAD0201}}</span>" +
        "  {{#each PARTY.RFFLoop2}}" +
        "    {{#if RFF.RFF01.RFF0102}}<span>{{RFF.RFF01.RFF0102}}: {{RFF.RFF01.RFF0103}}</span>{{/if}}" +
        "  {{/each}}" +
        "  {{#if PARTY.NAD.NAD07}}<span>{{#if (isObject PARTY.NAD.NAD07)}}{{PARTY.NAD.NAD07.NAD0701}}{{else}}{{PARTY.NAD.NAD07}}{{/if}}</span>{{/if}}" +
        "  <span>{{PARTY.NAD.NAD08}}, {{PARTY.NAD.NAD09}}</span>" +
        "  {{#each PARTY.CTALoop1}}" +
        "    <span>{{CTA.CTA02.CTA0202}}</span>" +
        "    <span>{{#each COM}}{{#if (match COM01.COM0102 'TE|EM' 'i')}}{{COM01.COM0101}} {{/if}}{{/each}}</span>" +
        "  {{/each}}" +
        "</div>",
    x12PER: "{{#if PER.PER02}}<span>{{PER.PER02}}</span>{{/if}}{{#if PER.PER03}}<span>{{#segmentQualifiers PER 3}}{{#if (match qualifier 'TE|EM' 'i')}}{{this.value}} {{/if}}{{/segmentQualifiers}}</span>{{/if}}",
    x12PartyCard: "<div class=\"party-card\">" +
        " <b>{{title}}</b>" +
        " <span>{{PARTY.N1.N102}} {{PARTY.N1.N104}} {{PARTY.N2.N201}} {{PARTY.N2.N202}}</span>" +
        " {{#if PARTY.N3.N302}}<span>{{PARTY.N3.N301}} {{PARTY.N3.N302}}</span>{{/if}}" +
        " {{#if PARTY.N4.N402}}<span>{{PARTY.N4.N401}} {{PARTY.N4.N402}}</span>{{/if}}" +
        " {{> x12PER PER=PER}}" +
        "</div>"
};
/* harmony default export */ const partials = (PARTIALS);

;// CONCATENATED MODULE: ./src/components/printView/handlebars/constants.ts
const Tokens = {
    HelperMissing: "Missing helper: {0}({1}).",
    PropertyMissing: "Missing property: {0}.",
    BlockHelperMissing: "Helper '{0}' not found. Printing block: {1}.",
};

// EXTERNAL MODULE: external "{}"
var external_ = __webpack_require__(87963);
;// CONCATENATED MODULE: ./src/components/printView/handlebars/index.ts
















const handlebars_handlebars = handlebars_default().create();
const createFrame = (handlebars_default()).createFrame;
const register = (helpers) => {
    Object.keys(helpers).forEach(name => {
        if (false) {}
        handlebars_handlebars.registerHelper(name, function (...args) {
            const options = args[args.length - 1];
            const helperArgs = args.slice(0, -1);
            const context = Object.assign(Object.assign({}, options), { createFrame });
            return helpers[name].apply(this, [context, ...helperArgs]);
        });
    });
};
// Register helpers
string(register);
math(register);
array(register);
date(register);
comparison(register);
regex(register);
file(register);
misc(register);
blocks(register);
edi(register);
ctx(register);
// Handle hooks for missing helpers.
handlebars_handlebars.registerHelper("helperMissing", function (...args) {
    const options = args[args.length - 1];
    return new (handlebars_default()).SafeString((0,utils/* formatString */.JT)(args.length > 1 ? Tokens.HelperMissing : Tokens.PropertyMissing, options.name, args.slice(0, -1)));
});
handlebars_handlebars.registerHelper("blockHelperMissing", function (context, options) {
    return (0,utils/* formatString */.JT)(Tokens.BlockHelperMissing, options.name, options.fn(context));
});
Object.keys(partials).forEach(name => {
    handlebars_handlebars.registerPartial(name, partials[name]);
});
/* harmony default export */ const printView_handlebars = (handlebars_handlebars);

;// CONCATENATED MODULE: ./src/components/printView/helper.ts



function xmlToJson(xml, category) {
    if (!xml)
        return "{}";
    const options = {
        attributeNamePrefix: "@",
        textNodeName: "#text",
        ignoreAttributes: [new RegExp("xmlns(:\\S+)?|xsi(:\\S+)?|schemaLocation(:\\S+)?|noNamespaceSchemaLocation(:\\S+)?")],
        ignoreDeclaration: true,
        ignorePiTags: true,
    };
    const isEDI = (category === null || category === void 0 ? void 0 : category.length) > 0 && ["edi", "eancom", "edifact", "hl7", "iatapadis", "tradacoms", "vda", "x12"].includes(category.toLowerCase());
    if (isEDI) {
        const loopPaths = [];
        let txName = "";
        options.transformTagName = (tagName) => tagName.replace(/\./g, "_");
        options.updateTag = (tagName, jPath, attrs) => {
            if (!attrs)
                return true;
            const typeAttr = Object.keys(attrs).find(attr => (0,utils/* equalIgnoreCase */.Hd)(attr, "@type"));
            if (!typeAttr)
                return true;
            if ((0,utils/* equalIgnoreCase */.Hd)(attrs[typeAttr], "TransactionSet")) {
                txName = tagName;
                return "Transaction"; // TX-00401-850 ==> Transaction
            }
            else if ((0,utils/* equalIgnoreCase */.Hd)(attrs[typeAttr], "Loop")) {
                loopPaths.push(txName ? jPath.replace(txName, "Transaction") : jPath);
            }
            return true;
        };
        options.isArray = (tagName, jPath, isLeafNode) => !isLeafNode && loopPaths.includes(jPath);
    }
    const parser = new XMLParser/* default */.A(options);
    const json = parser.parse(xml);
    if (isEDI && json["Interchange"] && json["Interchange"]["TransactionSet"]) {
        const newGroup = { TransactionSet: json["Interchange"]["TransactionSet"] };
        if (json["Interchange"]["FunctionalGroup"] == null) {
            json["Interchange"]["FunctionalGroup"] = newGroup;
        }
        else {
            if (!Array.isArray(json["Interchange"]["FunctionalGroup"]))
                json["Interchange"]["FunctionalGroup"] = [json["Interchange"]["FunctionalGroup"]];
            json["Interchange"]["FunctionalGroup"].push(newGroup);
        }
        delete json["Interchange"]["TransactionSet"];
    }
    return JSON.stringify(json);
}
function renderTemplate(template, json) {
    const data = JSON.parse(json || "{}");
    const templateFn = printView_handlebars.compile(template);
    return templateFn(data, { data: { __ctx__: Object.create(null) } });
}

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ../../.react-shared/axios/index.jsx
var axios = __webpack_require__(29029);
;// CONCATENATED MODULE: ./src/components/printView/constants.ts
const constants_Tokens = {
    NoTemplateFound: "No template found.",
    NoMessageFound: "No message found.",
    PrintView: "Print View",
};

;// CONCATENATED MODULE: ./src/components/printView/hooks.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function usePrintView(message, print = true) {
    const [ready, setReady] = react.useState(false);
    const [error, setError] = react.useState(null);
    const [view, setView] = react.useState(null);
    react.useEffect(() => {
        setReady(false);
        setError(null);
        setView(null);
        if (!message.workspaceId || !message.connectorId || !message.messageId || !message.filename)
            return;
        const controller = new AbortController();
        (() => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const view = {};
            try {
                const { error, items } = yield (0,utils/* fetchData */.Fd)(controller, "src/previewMessage.rsb", { WorkspaceId: message.workspaceId, ConnectorId: message.connectorId, MessageId: message.messageId, Filename: message.filename, BatchGroupId: message.batchGroupId, Direction: message.direction, IsFile: message.isFile, LoadOnly: !print, });
                if (error) {
                    setError(error);
                }
                else if ((items === null || items === void 0 ? void 0 : items.length) > 0) {
                    view.filename = items[0].filename;
                    view.fileSize = Number(items[0].filesize || "0");
                    view.lastModified = items[0].lastmodified;
                    view.documentType = items[0].documenttype;
                    view.content = items[0].content;
                    view.type = items[0].type;
                    view.category = items[0].category;
                    view.direction = items[0].direction || message.direction;
                    view.warning = items[0].warning;
                    view.viewContent = items[0].viewcontent;
                    view.viewContentType = items[0].viewcontenttype;
                    view.viewError = items[0].viewerror;
                    view.hasTemplate = ((_a = view.viewContent) === null || _a === void 0 ? void 0 : _a.length) > 0 || (0,utils/* getValueAsBool */.CO)(items[0].hastemplate, false);
                    view.templateType = items[0].templatetype;
                    view.templatePrimaryId = items[0].templateprimaryid;
                }
                else {
                    setError(constants_Tokens.NoMessageFound);
                }
            }
            catch (error) {
                if (!axios/* default */.A.isCancel(error))
                    setError(error.message || error);
            }
            finally {
                setView(view);
                setReady(true);
            }
        }))();
        return () => controller.abort();
    }, [message.workspaceId, message.connectorId, message.messageId, message.filename, message.batchGroupId, message.direction, message.isFile, print,]);
    const document = react.useMemo(() => {
        if (!ready || !view || !view.hasTemplate || (error === null || error === void 0 ? void 0 : error.length) > 0)
            return null;
        return {
            parse: () => __awaiter(this, void 0, void 0, function* () {
                return ({
                    templateKey: { type: view.templateType, primaryId: view.templatePrimaryId },
                    toJson: () => ((0,utils/* equalIgnoreCase */.Hd)(view.viewContentType, "xml") ? xmlToJson(view.viewContent, view.category) : view.viewContent) || "{}"
                });
            })
        };
    }, [ready, error, view]);
    return react.useMemo(() => [ready, error, document, view], [ready, error, document, view]);
}

// EXTERNAL MODULE: ./node_modules/cdata-icon/dist/esm/index.js + 3 modules
var esm = __webpack_require__(27335);
// EXTERNAL MODULE: ./node_modules/cdata-ui/dist/esm/index.js + 252 modules
var dist_esm = __webpack_require__(22647);
// EXTERNAL MODULE: ./node_modules/zustand/esm/vanilla.mjs
var vanilla = __webpack_require__(97283);
// EXTERNAL MODULE: ./node_modules/zustand/esm/index.mjs
var zustand_esm = __webpack_require__(7282);
// EXTERNAL MODULE: ./src/data/utils/index.ts + 2 modules
var data_utils = __webpack_require__(32037);
;// CONCATENATED MODULE: ./src/data/template/store.ts
var store_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function fetchTemplates(set, key) {
    var _a;
    return store_awaiter(this, void 0, void 0, function* () {
        const templates = [];
        return (0,data_utils/* fetch */.hd)({
            url: `src/templates.rsd?@json${key != null ? ("&type=" + encodeURIComponent((_a = key.type) !== null && _a !== void 0 ? _a : "")) : ""}`,
            method: "GET",
        }).then(({ data }) => {
            data.forEach((template) => templates.push(template));
            return templates;
        }).finally(() => set((state) => ({ ready: true, templates })));
    });
}
function getTemplate(set, key) {
    return store_awaiter(this, void 0, void 0, function* () {
        const currentTemplate = [];
        return (0,data_utils/* fetch */.hd)({
            url: `src/templates.rsd?@json&type=${encodeURIComponent(key.type || "(null)")}&primaryId=${encodeURIComponent(key.primaryId || "(null)")}`,
            method: "GET",
        }).then(({ data: template }) => {
            template.creationTime > 0 && template.lastModifiedTime > 0 && currentTemplate.push(template);
            return template;
        }).finally(() => currentTemplate.length > 0 && set((state) => {
            const templates = [...state.templates];
            const index = templates.findIndex((t) => t.type === currentTemplate[0].type && t.primaryId === currentTemplate[0].primaryId);
            if (index >= 0) {
                templates[index] = currentTemplate[0];
            }
            else {
                templates.push(currentTemplate[0]);
            }
            return { templates };
        }));
    });
}
function createTemplate(set, key, content) {
    return store_awaiter(this, void 0, void 0, function* () {
        const newTemplate = [];
        return (0,data_utils/* fetch */.hd)({
            url: `src/templates.rsd?@json&type=${encodeURIComponent(key.type || "(null)")}&primaryId=${encodeURIComponent(key.primaryId || "(null)")}&content=${encodeURIComponent(content || "")}`,
            method: "POST",
        }).then(({ data: template }) => {
            template.creationTime > 0 && template.lastModifiedTime > 0 && newTemplate.push(template);
            return template;
        }).finally(() => newTemplate.length > 0 && set((state) => {
            const templates = [...state.templates];
            const index = templates.findIndex((t) => t.type === newTemplate[0].type && t.primaryId === newTemplate[0].primaryId);
            if (index >= 0) {
                templates[index] = newTemplate[0];
            }
            else {
                templates.push(newTemplate[0]);
            }
            return { templates };
        }));
    });
}
function updateTemplate(set, key, content) {
    return store_awaiter(this, void 0, void 0, function* () {
        const currentTemplate = [];
        return (0,data_utils/* fetch */.hd)({
            url: `src/templates.rsd?@json&type=${encodeURIComponent(key.type || "(null)")}&primaryId=${encodeURIComponent(key.primaryId || "(null)")}&content=${encodeURIComponent(content)}`,
            method: "PUT",
        }).then(({ data: template }) => {
            template.creationTime > 0 && template.lastModifiedTime > 0 && currentTemplate.push(template);
            return template;
        }).finally(() => currentTemplate.length > 0 && set((state) => {
            const templates = [...state.templates];
            const index = templates.findIndex((t) => t.type === currentTemplate[0].type && t.primaryId === currentTemplate[0].primaryId);
            if (index >= 0) {
                templates[index] = currentTemplate[0];
            }
            else {
                templates.push(currentTemplate[0]);
            }
            return { templates };
        }));
    });
}
function deleteTemplate(set, key) {
    return store_awaiter(this, void 0, void 0, function* () {
        const currentTemplate = [];
        return (0,data_utils/* fetch */.hd)({
            url: `src/templates.rsd?@json&type=${encodeURIComponent(key.type || "(null)")}&primaryId=${encodeURIComponent(key.primaryId || "(null)")}`,
            method: "GET",
        }).then(({ data: template }) => {
            template.creationTime > 0 && template.lastModifiedTime > 0 && currentTemplate.push(template);
            return template;
        }).finally(() => currentTemplate.length > 0 && set((state) => {
            const templates = state.templates.filter((t) => t.type !== currentTemplate[0].type || t.primaryId !== currentTemplate[0].primaryId);
            return { templates };
        }));
    });
}
function createTemplateStore() {
    return (0,vanilla/* createStore */.y)()((set) => ({
        ready: false,
        templates: [],
        fetch: fetchTemplates.bind(null, set),
        create: createTemplate.bind(null, set),
        get: getTemplate.bind(null, set),
        update: updateTemplate.bind(null, set),
        delete: deleteTemplate.bind(null, set),
    }));
}
const templateStoreCache = {};
function useTemplateStore(selector) {
    let needsFetch = false;
    if (templateStoreCache.store == null) {
        templateStoreCache.store = createTemplateStore();
        needsFetch = true;
    }
    const fetch = (0,zustand_esm/* useStore */.Pj)(templateStoreCache.store, (state) => state.fetch);
    if (needsFetch) {
        fetch();
    }
    return (0,zustand_esm/* useStore */.Pj)(templateStoreCache.store, selector);
}

;// CONCATENATED MODULE: ./src/data/template/index.ts



// EXTERNAL MODULE: ./src/components/utils/arcHooks.ts
var arcHooks = __webpack_require__(17518);
// EXTERNAL MODULE: ./node_modules/react-dom/server.browser.js
var server_browser = __webpack_require__(65848);
;// CONCATENATED MODULE: ./src/components/printView/PrintView.tsx
var PrintView_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};








const PrintView = react.forwardRef(function PrintView(props, ref) {
    const { document, fallback, className } = props, rest = __rest(props, ["document", "fallback", "className"]);
    const wrapperRef = react.useRef(null);
    const iframeRef = react.useRef(null);
    const [html, setHtml] = react.useState(null);
    const [error, setError] = react.useState(null);
    const [ready, getTemplate] = useTemplateStore(state => [state.ready, state.get]);
    const appVersion = (0,arcHooks/* useAppVersion */.h_)();
    const loadingNode = react.useMemo(() => fallback || react.createElement("div", { className: "p-24" },
        react.createElement(esm/* CDataIcon */.B, { icon: "spinner-scale", iconStyle: esm/* IconStyle */.p.Regular, spin: true })), [fallback]);
    react.useEffect(() => {
        setHtml("");
        setError(null);
        if (!(document === null || document === void 0 ? void 0 : document.parse))
            return;
        (() => PrintView_awaiter(this, void 0, void 0, function* () {
            try {
                const metadata = yield document.parse();
                const template = yield getTemplate(metadata.templateKey);
                if (!template.content) {
                    setError(constants_Tokens.NoTemplateFound);
                    return;
                }
                const json = metadata.toJson();
                setHtml(renderTemplate(template.content, json || "{}") || "");
            }
            catch (error) {
                console.error(error);
                setError(error.message || error);
            }
        }))();
    }, [document === null || document === void 0 ? void 0 : document.parse, getTemplate]);
    const blobUrl = react.useMemo(() => {
        const content = ready && html != null && error == null ? html : server_browser.renderToString(ready && error != null ? react.createElement(dist_esm/* Alert */.Fc, { open: true, variant: "error" },
            react.createElement(esm/* CDataIcon */.B, { icon: "exclamation-triangle", className: "me-4" }),
            error) : loadingNode);
        const srcDoc = `
    <!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <base href="${window.location.origin}/" />
      <script src="ui/dist/reboot.bundle.js?${appVersion}" defer></script>
      <link type="text/css" href="ui/dist/reboot.css?${appVersion}" rel="stylesheet"/>
    </head>
    <body class="background-layer-primary d-flex w-100 h-100 p-0">
      <div class="print-view-container d-flex flex-column flex-fill min-height-0 w-100 overflow-auto">
        <style>.print-view-container > * { flex: 1 0 0; overflow-x: clip; }</style>
        ${content}
      </div>
    </body>
    </html>`;
        return URL.createObjectURL(new Blob([srcDoc], { type: "text/html" }));
    }, [appVersion, ready, error, html, loadingNode]);
    react.useEffect(() => {
        return () => URL.revokeObjectURL(blobUrl);
    }, [blobUrl]);
    react.useEffect(() => {
        const iframe = iframeRef.current;
        if (!iframe)
            return;
        const removeEventListeners = [() => void 0];
        const handleIframeLoad = () => {
            try {
                const handleKeyDown = (e) => {
                    var _a;
                    const clonedEvent = new KeyboardEvent(e.type, {
                        key: e.key,
                        code: e.code,
                        ctrlKey: e.ctrlKey,
                        metaKey: e.metaKey,
                        altKey: e.altKey,
                        shiftKey: e.shiftKey,
                        bubbles: true,
                        cancelable: true,
                    });
                    (_a = wrapperRef.current) === null || _a === void 0 ? void 0 : _a.dispatchEvent(clonedEvent);
                };
                const disabledContextMenu = (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                };
                const iframeDoc = iframe.contentWindow.document;
                iframeDoc.addEventListener("keydown", handleKeyDown);
                iframeDoc.addEventListener("contextmenu", disabledContextMenu);
                removeEventListeners[0] = () => {
                    iframeDoc.removeEventListener("keydown", handleKeyDown);
                    iframeDoc.removeEventListener("contextmenu", disabledContextMenu);
                };
            }
            catch (error) {
                console.error(error);
            }
        };
        iframe.addEventListener("load", handleIframeLoad);
        return () => {
            removeEventListeners[0]();
            iframe.removeEventListener("load", handleIframeLoad);
        };
    }, [iframeRef]);
    react.useImperativeHandle(ref, () => ({
        triggerPrint: () => {
            var _a;
            const contentWindow = (_a = iframeRef.current) === null || _a === void 0 ? void 0 : _a.contentWindow;
            if (!contentWindow)
                return false;
            contentWindow.focus();
            contentWindow.print();
            return true;
        },
    }), [iframeRef]);
    return (react.createElement("div", { tabIndex: -1, ref: wrapperRef, className: `w-100 h-100 border-0 ${className !== null && className !== void 0 ? className : ""}` },
        react.createElement("iframe", Object.assign({ title: constants_Tokens.PrintView, className: "w-100 h-100" }, rest, { ref: iframeRef, src: blobUrl }))));
});

;// CONCATENATED MODULE: ./src/components/printView/index.ts






/***/ })

}]);