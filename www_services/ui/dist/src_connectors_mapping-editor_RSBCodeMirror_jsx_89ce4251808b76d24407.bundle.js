"use strict";
(self["webpackChunkcdata_arc"] = self["webpackChunkcdata_arc"] || []).push([["src_connectors_mapping-editor_RSBCodeMirror_jsx","src_connectors_mapping-editor_CodeEditor_tsx-_80190","src_connectors_mapping-editor_CodeEditor_tsx-_80191","src_connectors_mapping-editor_CodeEditor_tsx-_80192"],{

/***/ 98251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6363);
/* harmony import */ var _codemirror_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36898);
/* harmony import */ var _codemirror_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31638);
/* harmony import */ var _codemirror_commands__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45230);
/* harmony import */ var _codemirror_lang_xml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97701);
/* harmony import */ var _CopyCodeButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27771);
/* harmony import */ var _FormatCodeButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38673);
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }










var ArcCodeMirror = function ArcCodeMirror(_ref) {
  var _extensions$find;
  var className = _ref.className,
    text = _ref.text,
    _ref$lineWrapping = _ref.lineWrapping,
    lineWrapping = _ref$lineWrapping === void 0 ? true : _ref$lineWrapping,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    _ref$autoFocus = _ref.autoFocus,
    autoFocus = _ref$autoFocus === void 0 ? true : _ref$autoFocus,
    _ref$copyCode = _ref.copyCode,
    copyCode = _ref$copyCode === void 0 ? true : _ref$copyCode,
    lineSeparator = _ref.lineSeparator,
    _ref$extensions = _ref.extensions,
    extensions = _ref$extensions === void 0 ? [(0,_codemirror_lang_xml__WEBPACK_IMPORTED_MODULE_3__/* .xml */ ._n)()] : _ref$extensions,
    selection = _ref.selection,
    editorAPI = _ref.editorAPI,
    onChange = _ref.onChange;
  var view = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var viewRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var lastModifiedTime = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(-1);
  var language = ((_extensions$find = extensions.find(function (ext) {
    var _ext$language;
    return ((_ext$language = ext.language) === null || _ext$language === void 0 || (_ext$language = _ext$language.name) === null || _ext$language === void 0 ? void 0 : _ext$language.length) > 0;
  })) === null || _extensions$find === void 0 || (_extensions$find = _extensions$find.language) === null || _extensions$find === void 0 ? void 0 : _extensions$find.name) || "unknown";
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var timer = null;
    var doc = text || "";
    extensions = [codemirror__WEBPACK_IMPORTED_MODULE_4__/* .basicSetup */ .oQ, _codemirror_view__WEBPACK_IMPORTED_MODULE_5__/* .keymap */ .w4.of(_codemirror_commands__WEBPACK_IMPORTED_MODULE_6__/* .standardKeymap */ .ZR)].concat(_toConsumableArray(extensions));
    lineWrapping && extensions.push(_codemirror_view__WEBPACK_IMPORTED_MODULE_5__/* .EditorView */ .Lz.lineWrapping);
    extensions.push(_codemirror_state__WEBPACK_IMPORTED_MODULE_7__/* .EditorState */ .$t.readOnly.of(readOnly));
    (lineSeparator === null || lineSeparator === void 0 ? void 0 : lineSeparator.length) > 0 && extensions.push(_codemirror_state__WEBPACK_IMPORTED_MODULE_7__/* .EditorState */ .$t.lineSeparator.of(lineSeparator));
    view.current = new _codemirror_view__WEBPACK_IMPORTED_MODULE_5__/* .EditorView */ .Lz({
      state: _codemirror_state__WEBPACK_IMPORTED_MODULE_7__/* .EditorState */ .$t.create({
        doc: doc,
        selection: selection,
        extensions: extensions
      }),
      parent: viewRef.current,
      dispatch: function dispatch(transaction, view) {
        if (onChange && transaction.state.doc.toString() !== view.state.doc.toString()) {
          var _text = transaction.state.doc.toString();
          timer && clearTimeout(timer);
          timer = setTimeout(function () {
            lastModifiedTime.current = new Date().getTime();
            onChange.call(null, _text);
          }, 50);
        }
        view.update([transaction]);
      }
    });
    !readOnly && autoFocus && view.current.focus();
    return function () {
      timer && clearTimeout(timer);
      view.current.destroy();
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var doc = text || "";
    var timer = null;
    if (new Date().getTime() - lastModifiedTime.current > 100 && view.current.state.doc.toString() !== doc) {
      timer = setTimeout(function () {
        lastModifiedTime.current = -1;
        setText(doc);
      }, 100);
    } else {
      lastModifiedTime.current = -1;
    }
    return function () {
      return timer && clearTimeout(timer);
    };
  }, [text]);
  var setText = function setText(text) {
    view.current.dispatch(view.current.state.update({
      changes: {
        from: 0,
        to: view.current.state.doc.length,
        insert: text
      }
    }));
    view.current.focus();
  };
  var getText = function getText() {
    return view.current.state.doc.toString();
  };
  if (editorAPI) {
    var moveCursor = function moveCursor(offset) {
      if (!offset) return;
      var selection = view.current.state.selection.ranges[0].toJSON();
      selection.anchor += offset;
      selection.head += offset;
      view.current.update([view.current.state.update({
        selection: selection
      })]);
      view.current.focus();
    };
    var API = editorAPI.current || editorAPI;
    API.replace = function (text) {
      var changes = ["from", "to"].reduce(function (changes, key) {
        changes[key] = view.current.state.selection.ranges[0][key];
        return changes;
      }, {
        insert: text
      });
      view.current.dispatch(view.current.state.update({
        changes: changes
      }));
      moveCursor(text.length);
    };
    API.move = moveCursor;
    API.getText = getText;
    API.setText = setText;
    API.left = function () {
      var chars = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      while (chars-- > 0) (0,_codemirror_commands__WEBPACK_IMPORTED_MODULE_6__/* .cursorCharLeft */ .Cv)(view.current);
    };
    API.right = function () {
      var chars = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      while (chars-- > 0) (0,_codemirror_commands__WEBPACK_IMPORTED_MODULE_6__/* .cursorCharRight */ .xt)(view.current);
    };
    API.selectAll = function () {
      return (0,_codemirror_commands__WEBPACK_IMPORTED_MODULE_6__/* .selectAll */ .Ub)(view.current);
    };
    API["delete"] = function () {
      return (0,_codemirror_commands__WEBPACK_IMPORTED_MODULE_6__/* .deleteCharForward */ .be)(view.current);
    };
    API.undo = function () {
      return (0,_codemirror_commands__WEBPACK_IMPORTED_MODULE_6__/* .undo */ .tN)(view.current);
    };
    API.undoAble = function () {
      return (0,_codemirror_commands__WEBPACK_IMPORTED_MODULE_6__/* .undoDepth */ .mk)(view.current.state) > 0;
    };
    API.redo = function () {
      return (0,_codemirror_commands__WEBPACK_IMPORTED_MODULE_6__/* .redo */ .ZS)(view.current);
    };
    API.redoAble = function () {
      return (0,_codemirror_commands__WEBPACK_IMPORTED_MODULE_6__/* .redoDepth */ .mL)(view.current.state) > 0;
    };
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "arc-codemirror-container"
  }, (language.toLowerCase() === "json" || language.toLowerCase() === "xml" || language.toLowerCase() === "edi") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormatCodeButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    getText: getText,
    type: language,
    setText: setText
  }), copyCode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CopyCodeButton__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    getText: getText
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "arc-codemirror ".concat(className || ""),
    ref: viewRef
  }));
};
ArcCodeMirror.propTypes = {
  /**
   * The class name.
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  /**
   * The text.
   */
  text: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  /**
   * Enables line wrapping in the editor?
   */
  lineWrapping: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
  /**
   * Enables readonly in the editor?
   */
  readOnly: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
  /**
   * The line separator..
   */
  lineSeparator: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  /**
   * The extensions.
   */
  extensions: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().array),
  /**
   * The selection.
   */
  selection: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
  /**
   * The codemirror editor API.
   */
  editorAPI: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
  /**
   * Event: onChange(text).
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArcCodeMirror);

/***/ }),

/***/ 14739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _RSBExpLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7438);
/* harmony import */ var _CodeEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63625);




var RSBCodeMirror = function RSBCodeMirror(_ref) {
  var _ref$text = _ref.text,
    text = _ref$text === void 0 ? "" : _ref$text,
    editorAPI = _ref.editorAPI,
    onChange = _ref.onChange,
    validator = _ref.validator,
    footer = _ref.footer;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CodeEditor__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "rsb-exp-container",
    helpUrl: "help.rst#Introduction-to-ArcScript",
    validator: validator,
    footer: footer,
    text: text,
    editorAPI: editorAPI,
    onChange: onChange,
    lineSeparator: decodeURIComponent("%0A"),
    extensions: [_RSBExpLanguage__WEBPACK_IMPORTED_MODULE_1__/* .RSBExpLanguage */ .r7, _RSBExpLanguage__WEBPACK_IMPORTED_MODULE_1__/* .RSBExpHighlighter */ .UY],
    selection: {
      anchor: text.length - (text.startsWith("[") && text.endsWith("]") ? 1 : 0)
    }
  });
};
RSBCodeMirror.propTypes = {
  /**
   * The text.
   */
  text: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  /**
   * The editor Api.
   */
  editorAPI: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  /**
   * Event: onChange.
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RSBCodeMirror);

/***/ }),

/***/ 63625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CodeEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25615);
/* harmony import */ var _codemirror_lang_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28858);
/* harmony import */ var _codemirror_lang_sql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49075);
/* harmony import */ var _codemirror_lang_xml__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97701);
/* harmony import */ var _components_arc_codemirror__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98251);
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25337);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86227);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97865);










function CodeEditor(props) {
    var _a, _b;
    const extensions = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        var _a;
        if (((_a = props.extensions) === null || _a === void 0 ? void 0 : _a.length) > 0)
            return props.extensions;
        else if (props.language == "JSON")
            return [(0,_codemirror_lang_json__WEBPACK_IMPORTED_MODULE_5__/* .json */ .Pq)()];
        else if (props.language == "SQL")
            return [(0,_codemirror_lang_sql__WEBPACK_IMPORTED_MODULE_6__/* .sql */ .ll)()];
        else if (props.language == "XML")
            return [(0,_codemirror_lang_xml__WEBPACK_IMPORTED_MODULE_7__/* .xml */ ._n)()];
        else
            return props.extensions;
    }, [props.extensions, props.language]);
    const editorAPI = react__WEBPACK_IMPORTED_MODULE_0__.useRef({ undoAble: () => false, redoAble: () => false });
    const handleCopy = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        (0,_components_utils__WEBPACK_IMPORTED_MODULE_2__/* .copyToClipboard */ .lW)(editorAPI.current.getText());
        return null;
    }, []);
    const { tooltip, handleClick, resetTooltip } = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useStatefulTooltip */ .R)(_constants__WEBPACK_IMPORTED_MODULE_4__/* .TOKENS */ .xZ.TOOLTIP_COPY_CODE, null, _constants__WEBPACK_IMPORTED_MODULE_4__/* .TOKENS */ .xZ.TOOLTIP_COPIED, handleCopy);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        if (!props.editorAPI)
            return;
        const API = props.editorAPI.current || props.editorAPI;
        if (API && editorAPI.current) {
            for (const key in editorAPI.current) {
                API[key] = editorAPI.current[key];
            }
        }
    }, [editorAPI.current]);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "code-editor" + (props.readOnly ? " readonly" : "") },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "code-editor-header d-flex align-items-center px-3 py-2" },
            props.validator,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "d-flex align-items-center gap-2 ms-auto code-editor-menu" }, props.controller || react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                !props.readOnly && react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, { variant: "outline-secondary", size: "sm", className: "border-white d-flex align-items-center justify-content-center", "data-tooltip-id": "reactTooltip", "data-tooltip-content": _constants__WEBPACK_IMPORTED_MODULE_4__/* .TOKENS */ .xZ.TOOLTIP_UNDO, disabled: !((_a = editorAPI.current.undoAble) === null || _a === void 0 ? void 0 : _a.call(null)), onClick: () => editorAPI.current.undo() },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-undo" })),
                !props.readOnly && react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, { variant: "outline-secondary", size: "sm", className: "border-white d-flex align-items-center justify-content-center", "data-tooltip-id": "reactTooltip", "data-tooltip-content": _constants__WEBPACK_IMPORTED_MODULE_4__/* .TOKENS */ .xZ.TOOLTIP_REDO, disabled: !((_b = editorAPI.current.redoAble) === null || _b === void 0 ? void 0 : _b.call(null)), onClick: () => editorAPI.current.redo() },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-redo" })),
                !props.readOnly && react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, { variant: "outline-secondary", size: "sm", className: "border-white d-flex align-items-center justify-content-center", "data-tooltip-id": "reactTooltip", "data-tooltip-content": _constants__WEBPACK_IMPORTED_MODULE_4__/* .TOKENS */ .xZ.TOOLTIP_CLEAR_CODE, disabled: !props.text, onClick: () => editorAPI.current.setText("") },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-trash" })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, { variant: "outline-secondary", size: "sm", className: "border-white d-flex align-items-center justify-content-center", "data-tooltip-id": "reactTooltip", "data-tooltip-content": tooltip, onClick: handleClick, onMouseLeave: resetTooltip },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-copy" })),
                props.helpUrl && react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { "data-tooltip-id": "reactTooltip", "data-tooltip-content": _constants__WEBPACK_IMPORTED_MODULE_4__/* .TOKENS */ .xZ.TOOLTIP_ARC_SCRIPT_DOCUMENT, href: props.helpUrl, target: "_blank", rel: "noreferrer", className: "text-secondary d-flex align-items-center justify-content-center" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-question-circle-o" })),
                props.controllerExtension))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "code-editor-body" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_arc_codemirror__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, props, { extensions: extensions, copyCode: false, editorAPI: editorAPI }))),
        props.footer &&
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "code-editor-footer d-flex align-items-center px-3 py-2" }, props.footer));
}


/***/ }),

/***/ 86227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useStatefulTooltip)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function useStatefulTooltip(tooltip, doingTooltip, successTooltip, onClick, delay = 3000) {
    const [tip, setTooltip] = react__WEBPACK_IMPORTED_MODULE_0__.useState(tooltip);
    const resetTooltip = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => setTooltip(tooltip), [setTooltip, tooltip]);
    const handleClick = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => __awaiter(this, void 0, void 0, function* () {
        setTooltip(doingTooltip || tooltip);
        try {
            const error = yield onClick();
            setTooltip((error === null || error === void 0 ? void 0 : error.length) > 0 ? error : successTooltip);
        }
        catch (err) {
            setTooltip(err.message || err);
        }
    }), [resetTooltip, onClick, doingTooltip, successTooltip]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        if (tip === tooltip)
            return;
        const timer = setTimeout(resetTooltip, delay);
        return () => clearTimeout(timer);
    }, [tip, delay]);
    return {
        tooltip: tip,
        handleClick,
        resetTooltip
    };
}


/***/ }),

/***/ 28858:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Pq: () => (/* binding */ json)
});

// UNUSED EXPORTS: jsonLanguage, jsonParseLinter

// EXTERNAL MODULE: ./node_modules/@lezer/lr/dist/index.js
var dist = __webpack_require__(48820);
// EXTERNAL MODULE: ./node_modules/@lezer/highlight/dist/index.js
var highlight_dist = __webpack_require__(43720);
;// CONCATENATED MODULE: ./node_modules/@lezer/json/dist/index.js



const jsonHighlighting = (0,highlight_dist/* styleTags */.pn)({
  String: highlight_dist/* tags */._A.string,
  Number: highlight_dist/* tags */._A.number,
  "True False": highlight_dist/* tags */._A.bool,
  PropertyName: highlight_dist/* tags */._A.propertyName,
  Null: highlight_dist/* tags */._A.null,
  ", :": highlight_dist/* tags */._A.separator,
  "[ ]": highlight_dist/* tags */._A.squareBracket,
  "{ }": highlight_dist/* tags */._A.brace
});

// This file was generated by lezer-generator. You probably shouldn't edit it.
const parser = dist/* LRParser */.U1.deserialize({
  version: 14,
  states: "$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#ClOOQO'#Cr'#CrQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CtOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59W,59WO!iQPO,59WOVQPO,59QOqQPO'#CmO!nQPO,59`OOQO1G.k1G.kOVQPO'#CnO!vQPO,59aOOQO1G.r1G.rOOQO1G.l1G.lOOQO,59X,59XOOQO-E6k-E6kOOQO,59Y,59YOOQO-E6l-E6l",
  stateData: "#O~OeOS~OQSORSOSSOTSOWQO_ROgPO~OVXOgUO~O^[O~PVO[^O~O]_OVhX~OVaO~O]bO^iX~O^dO~O]_OVha~O]bO^ia~O",
  goto: "!kjPPPPPPkPPkqwPPPPk{!RPPP!XP!e!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",
  nodeNames: "⚠ JsonText True False Null Number String } { Object Property PropertyName : , ] [ Array",
  maxTerm: 25,
  nodeProps: [
    ["isolate", -2,6,11,""],
    ["openedBy", 7,"{",14,"["],
    ["closedBy", 8,"}",15,"]"]
  ],
  propSources: [jsonHighlighting],
  skippedNodes: [0],
  repeatNodeCount: 2,
  tokenData: "(|~RaXY!WYZ!W]^!Wpq!Wrs!]|}$u}!O$z!Q!R%T!R![&c![!]&t!}#O&y#P#Q'O#Y#Z'T#b#c'r#h#i(Z#o#p(r#q#r(w~!]Oe~~!`Wpq!]qr!]rs!xs#O!]#O#P!}#P;'S!];'S;=`$o<%lO!]~!}Og~~#QXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#m~#pR!Q![#y!c!i#y#T#Z#y~#|R!Q![$V!c!i$V#T#Z$V~$YR!Q![$c!c!i$c#T#Z$c~$fR!Q![!]!c!i!]#T#Z!]~$rP;=`<%l!]~$zO]~~$}Q!Q!R%T!R![&c~%YRT~!O!P%c!g!h%w#X#Y%w~%fP!Q![%i~%nRT~!Q![%i!g!h%w#X#Y%w~%zR{|&T}!O&T!Q![&Z~&WP!Q![&Z~&`PT~!Q![&Z~&hST~!O!P%c!Q![&c!g!h%w#X#Y%w~&yO[~~'OO_~~'TO^~~'WP#T#U'Z~'^P#`#a'a~'dP#g#h'g~'jP#X#Y'm~'rOR~~'uP#i#j'x~'{P#`#a(O~(RP#`#a(U~(ZOS~~(^P#f#g(a~(dP#i#j(g~(jP#X#Y(m~(rOQ~~(wOW~~(|OV~",
  tokenizers: [0],
  topRules: {"JsonText":[0,1]},
  tokenPrec: 0
});



// EXTERNAL MODULE: ./node_modules/@codemirror/language/dist/index.js
var language_dist = __webpack_require__(15874);
;// CONCATENATED MODULE: ./node_modules/@codemirror/lang-json/dist/index.js



/**
Calls
[`JSON.parse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
on the document and, if that throws an error, reports it as a
single diagnostic.
*/
const jsonParseLinter = () => (view) => {
    try {
        JSON.parse(view.state.doc.toString());
    }
    catch (e) {
        if (!(e instanceof SyntaxError))
            throw e;
        const pos = getErrorPosition(e, view.state.doc);
        return [{
                from: pos,
                message: e.message,
                severity: 'error',
                to: pos
            }];
    }
    return [];
};
function getErrorPosition(error, doc) {
    let m;
    if (m = error.message.match(/at position (\d+)/))
        return Math.min(+m[1], doc.length);
    if (m = error.message.match(/at line (\d+) column (\d+)/))
        return Math.min(doc.line(+m[1]).from + (+m[2]) - 1, doc.length);
    return 0;
}

/**
A language provider that provides JSON parsing.
*/
const jsonLanguage = /*@__PURE__*/language_dist/* LRLanguage */.bj.define({
    name: "json",
    parser: /*@__PURE__*/parser.configure({
        props: [
            /*@__PURE__*/language_dist/* indentNodeProp */.Oh.add({
                Object: /*@__PURE__*/(0,language_dist/* continuedIndent */.mz)({ except: /^\s*\}/ }),
                Array: /*@__PURE__*/(0,language_dist/* continuedIndent */.mz)({ except: /^\s*\]/ })
            }),
            /*@__PURE__*/language_dist/* foldNodeProp */.b_.add({
                "Object Array": language_dist/* foldInside */.yd
            })
        ]
    }),
    languageData: {
        closeBrackets: { brackets: ["[", "{", '"'] },
        indentOnInput: /^\s*[\}\]]$/
    }
});
/**
JSON language support.
*/
function json() {
    return new language_dist/* LanguageSupport */.Yy(jsonLanguage);
}




/***/ })

}]);