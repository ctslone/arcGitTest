"use strict";
(self["webpackChunkcdata_arc"] = self["webpackChunkcdata_arc"] || []).push([["src_connectors_mapping-editor_MappingTestModal_tsx","src_connectors_mapping-editor_CodeEditor_tsx-_80190","src_connectors_mapping-editor_CodeEditor_tsx-_80192","src_connectors_mapping-editor_CodeEditor_tsx-_80191"],{

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

/***/ 61032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25615);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48032);
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(75056);
/* harmony import */ var react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(89567);
/* harmony import */ var _components_arc_suspense__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20289);
/* harmony import */ var _components_alert_DismissibleAlert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95631);
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25337);
/* harmony import */ var _CodeEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63625);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29471);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97865);
/* harmony import */ var _edi_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86755);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};














var TestButtonStatus;
(function (TestButtonStatus) {
    TestButtonStatus[TestButtonStatus["Init"] = 0] = "Init";
    TestButtonStatus[TestButtonStatus["Testing"] = 1] = "Testing";
    TestButtonStatus[TestButtonStatus["Tested"] = 2] = "Tested";
    TestButtonStatus[TestButtonStatus["Retesting"] = 3] = "Retesting";
})(TestButtonStatus || (TestButtonStatus = {}));
const validateInput = (xml) => {
    var _a;
    if ((xml === null || xml === void 0 ? void 0 : xml.length) > 0 && xml.match(/\s+xsi:\w+/) && !xml.match(/\s+xmlns:xsi\s*=/)) {
        const match = xml.match(/<[^>]+>/);
        if (match && ((_a = match[0]) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            xml = xml.replace(match[0], match[0].substring(0, match[0].length - 1) + " xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">");
        }
    }
    return (0,_helper__WEBPACK_IMPORTED_MODULE_5__/* .validateXML */ .KY)(xml);
};
const MappingTestModal = (props) => {
    var _a, _b;
    const [inputKey, setInputKey] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("xml");
    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.inputData);
    const [inputHeaders, setInputHeaders] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
    const [inputErr, setInputErr] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [outputKey, setOutputKey] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("xml");
    const [output, setOutput] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({ messageData: "", headers: [] });
    const [outputMessage, setOutputMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [testBtnStatus, setTestBtnStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(TestButtonStatus.Init);
    const file = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const inputHeaderNames = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => { var _a; return (((_a = props.getInputHeaderNames) === null || _a === void 0 ? void 0 : _a.call(props)) || []).map(name => name.trim().replace(/#.*$/, "")).filter(name => name); }, [props.getInputHeaderNames]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        setInput(props.inputData);
    }, [props.inputData]);
    if (!props.show || (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__/* .renderReactModalByParent */ .wf)("Mapping.MappingTestModal", props))
        return null;
    const handleTest = () => __awaiter(void 0, void 0, void 0, function* () {
        var _c, _d, _e;
        setTestBtnStatus(TestButtonStatus.Testing);
        setOutputMessage(null);
        try {
            const messageName = ((_d = (_c = file.current) === null || _c === void 0 ? void 0 : _c.files[0]) === null || _d === void 0 ? void 0 : _d.name) || "test.xml";
            let statusMessage = null;
            const item = yield props.onTest(input, messageName, inputHeaders, (error) => {
                statusMessage = { type: "error", message: (0,_components_utils__WEBPACK_IMPORTED_MODULE_3__/* .FormatString */ .FJ)(_constants__WEBPACK_IMPORTED_MODULE_6__/* .TOKENS */ .xZ.TEST_ERROR, error) };
                setOutput({ messageData: "", headers: [] });
            });
            if (item) {
                let newOutput = {
                    messageData: ((_e = item.messageData) === null || _e === void 0 ? void 0 : _e.trim()) || _constants__WEBPACK_IMPORTED_MODULE_6__/* .TOKENS */ .xZ.NO_OUTPUT,
                    headers: item.messageHeaders
                };
                props.resolveOutput && (newOutput = props.resolveOutput(newOutput));
                setOutput(newOutput);
                statusMessage = statusMessage || { type: item.messageStatus, message: item.messageStatusMessage };
            }
            setOutputMessage(statusMessage);
        }
        finally {
            setTestBtnStatus(TestButtonStatus.Tested);
        }
    });
    const handleUpload = (e) => {
        setInputErr(null);
        if (e.target.files[0].size > _constants__WEBPACK_IMPORTED_MODULE_6__/* .FILE_SIZE_THRESHOLD */ .R8) {
            e.stopPropagation();
            setInputErr(_constants__WEBPACK_IMPORTED_MODULE_6__/* .TOKENS */ .xZ.FILE_TOO_LARGE);
            return;
        }
        const reader = new FileReader();
        reader.onload = () => {
            changeInput(reader.result, true);
        };
        reader.readAsText(e.target.files[0]);
    };
    const changeInput = (text, validate) => {
        setInput(text);
        onValidateInput(text, validate);
    };
    const handleRevert = () => {
        setInput(props.inputData);
        setInputHeaders({});
        setTestBtnStatus(TestButtonStatus.Init);
        setOutputMessage(null);
        setOutput({ messageData: "", headers: [] });
    };
    const changeHeader = (name, e) => {
        const newHeaders = Object.assign({}, inputHeaders);
        newHeaders[name] = e.target.value;
        setInputHeaders(newHeaders);
    };
    const onValidateInput = (text, validate) => {
        if (!text) {
            return;
        }
        let err = null;
        if (text.length > _constants__WEBPACK_IMPORTED_MODULE_6__/* .FILE_SIZE_THRESHOLD */ .R8) {
            err = _constants__WEBPACK_IMPORTED_MODULE_6__/* .TOKENS */ .xZ.FILE_TOO_LARGE;
        }
        else if (validate) {
            const error = validateInput(text);
            err = error.length > 0 ? _constants__WEBPACK_IMPORTED_MODULE_6__/* .TOKENS */ .xZ.SOURCE_XML_IS_INVALID + error : null;
        }
        setInputErr(err);
        return err;
    };
    const renderSourceLabel = () => {
        if (props.inputHeaderIcon && props.inputHeaderDescription) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "test-panel-header" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "d-flex align-items-center" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "split-header-icon d-flex align-items-center justify-content-center me-2" }, props.inputHeaderIcon),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "split-header-body d-flex flex-column align-items-start" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "h4 my-0" }, props.inputHeader),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "text-secondary" }, props.inputHeaderDescription))));
        }
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "test-panel-header d-flex align-items-center" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "h4 my-0" }, props.inputHeader));
    };
    const renderDestinationLabel = () => {
        let testBtnText = "";
        let testBtnVariant = "";
        let testBtnIcon = "";
        switch (testBtnStatus) {
            case TestButtonStatus.Init:
                testBtnText = props.title || _constants__WEBPACK_IMPORTED_MODULE_6__/* .TOKENS */ .xZ.TEST_MAPPING;
                testBtnIcon = "fa-regular fa-play";
                testBtnVariant = "primary" + (props.disabled ? " disabled" : "");
                break;
            case TestButtonStatus.Testing:
                testBtnText = _constants__WEBPACK_IMPORTED_MODULE_6__/* .TOKENS */ .xZ.TESTING;
                testBtnIcon = "fa-regular fa-play";
                testBtnVariant = "primary disabled";
                break;
            case TestButtonStatus.Retesting:
                testBtnText = _constants__WEBPACK_IMPORTED_MODULE_6__/* .TOKENS */ .xZ.TESTING;
                testBtnIcon = "fa-solid fa-arrows-rotate";
                testBtnVariant = "outline-secondary disabled";
                break;
            case TestButtonStatus.Tested:
                testBtnText = _constants__WEBPACK_IMPORTED_MODULE_6__/* .TOKENS */ .xZ.RETEST;
                testBtnIcon = "fa-solid fa-arrows-rotate";
                testBtnVariant = "outline-secondary" + (props.disabled ? " disabled" : "");
                break;
        }
        const btnGroups = react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "split-header-btn-group ms-auto" },
            testBtnStatus === TestButtonStatus.Tested && react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, { variant: "outline-secondary", className: "border-0 me-2", onClick: handleRevert, "data-tooltip-id": "reactTooltip", "data-tooltip-content": _constants__WEBPACK_IMPORTED_MODULE_6__/* .TOKENS */ .xZ.RESET_OUTPUT },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa-solid fa-rotate-left" })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, { className: "px-3 py-2", variant: testBtnVariant, onClick: handleTest },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "pe-2 " + testBtnIcon }),
                testBtnText));
        if (props.outputHeaderDescription && props.outputHeaderIcon) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "test-panel-header" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "d-flex align-items-center" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "split-header-icon d-flex align-items-center justify-content-center me-2" }, props.outputHeaderIcon),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "split-header-body d-flex flex-column align-items-start" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "h4 my-0" }, props.outputHeader),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "text-secondary" }, props.outputHeaderDescription)),
                    btnGroups));
        }
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "test-panel-header d-flex align-items-center" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "h4 my-0" }, props.outputHeader),
            btnGroups);
    };
    const renderSourceEditor = () => {
        if (null === input || undefined === input) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "masker" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "d-flex flex-column text-center" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa-regular fa-file fa-2xl mb-4" })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, props.emptyInputTip)));
        }
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_arc_suspense__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "text-secondary" }, props.inputResultDescription),
            props.inputResultDescription && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "h6" }, props.inputResultHeader || _constants__WEBPACK_IMPORTED_MODULE_6__/* .TOKENS */ .xZ.INPUT),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CodeEditor__WEBPACK_IMPORTED_MODULE_4__["default"], { text: input, readOnly: props.inputEditorReadOnly || props.disabled, onChange: (text) => changeInput(text, true), validator: react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null,
                    _constants__WEBPACK_IMPORTED_MODULE_6__/* .TOKENS */ .xZ.XML,
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { "data-tooltip-id": "reactTooltip", "data-tooltip-content": !inputErr ? _constants__WEBPACK_IMPORTED_MODULE_6__/* .TOKENS */ .xZ.VALID_XML : _constants__WEBPACK_IMPORTED_MODULE_6__/* .TOKENS */ .xZ.INVALID_XML, className: !inputErr ? "px-2 fa fa-check-circle text-success" : "px-2 fa fa-xmark-circle text-danger" })), controllerExtension: props.inputEditorReadOnly || !props.enableUpload ? null : react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, { variant: "outline-secondary", size: "sm", className: "border-white d-flex align-items-center justify-content-center", "data-tooltip-id": "reactTooltip", "data-tooltip-content": _constants__WEBPACK_IMPORTED_MODULE_6__/* .TOKENS */ .xZ.UPLOAD_FILE, disabled: props.disabled, onClick: () => { var _a; return (_a = file.current) === null || _a === void 0 ? void 0 : _a.click(); } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-upload" })), footer: props.inputEditorExtension }));
    };
    const renderDestinationEditor = () => {
        if (output.messageData.length <= 0) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "masker" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "d-flex flex-column text-center" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa-regular fa-clipboard-list-check fa-2xl mb-4" })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, props.emptyOutputTip)));
        }
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_arc_suspense__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "text-secondary" }, props.outputResultDescription),
            props.outputResultDescription && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "h6" }, props.outputResultHeader || _constants__WEBPACK_IMPORTED_MODULE_6__/* .TOKENS */ .xZ.OUTPUT),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CodeEditor__WEBPACK_IMPORTED_MODULE_4__["default"], { className: "me-3", text: output.messageData, validator: react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null,
                    _constants__WEBPACK_IMPORTED_MODULE_6__/* .TOKENS */ .xZ.XML,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "px-2 fa fa-check-circle text-success" })), readOnly: true }));
    };
    const renderAlert = () => {
        const nodes = [];
        if (outputMessage) {
            nodes.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: "outputMessage", className: `text-break alert alert-${outputMessage.type === "error" ? "danger" : outputMessage.type} alert-dismissible rounded-0 mb-0 w-100 d-flex pe-4`, role: "alert", style: { whiteSpace: "pre-wrap" } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, outputMessage.message),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, { as: "a", variant: "outline-secondary", className: "ms-auto download-logs", href: "src/downloadTestConnectionLog.rst?testconnectiontype=connector&WorkspaceId=" + encodeURIComponent(props.connectorInfo.workspaceId) + "&ConnectorId=" + encodeURIComponent(props.connectorInfo.connectorId), download: "testConnection.log" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-download pe-2" }),
                    _constants__WEBPACK_IMPORTED_MODULE_6__/* .TOKENS */ .xZ.DOWNLOAD_LOGS)));
        }
        if (inputErr) {
            nodes.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_alert_DismissibleAlert__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, { type: "error", message: inputErr, className: "rounded-0 mb-0 w-100", onClose: null }));
        }
        return nodes;
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, { className: `react-bootstrap-modal mapping-modal mapping-test-modal ${(_a = props.className) !== null && _a !== void 0 ? _a : ""}`, show: props.show, backdrop: "static", size: "xl", onHide: props.onClose, onEscapeKeyDown: props.onClose },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A.Header, { className: "py-0", closeButton: true },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A.Title, { className: "d-flex w-100" }, props.title),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "d-flex ms-auto" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: props.helpUrl || ("help.rst#MappingConfig|" + _edi_constants__WEBPACK_IMPORTED_MODULE_7__/* .LinkTokens */ .z.TestMapping), target: "_blank", rel: "noreferrer", className: "me-3 text-secondary" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-question-circle-o" })))),
        renderAlert(),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A.Body, { className: "p-0 d-flex" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "test-panel source-panel w-50" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { ref: file, type: "file", className: "d-none", accept: ".xml", onChange: handleUpload }),
                renderSourceLabel(),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", { className: "mt-auto mb-1" }),
                inputHeaderNames.length > 0 ?
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, { className: "fw-bold pt-0", activeKey: inputKey, onSelect: setInputKey },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, { eventKey: "xml", title: _constants__WEBPACK_IMPORTED_MODULE_6__/* .TOKENS */ .xZ.XML }, renderSourceEditor()),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, { eventKey: "headers", title: _constants__WEBPACK_IMPORTED_MODULE_6__/* .TOKENS */ .xZ.HEADERS }, inputHeaderNames.map(header => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: header, className: "mb-3 me-3" },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "fw-bold" }, header),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "text", className: "form-control", value: inputHeaders[header] || "", onChange: event => changeHeader(header, event) }))))))
                    :
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "tab-content" }, renderSourceEditor())),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "vr mt-0" }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "test-panel destination-panel w-50" },
                renderDestinationLabel(),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", { className: "mt-auto mb-1" }),
                ((_b = output.headers) === null || _b === void 0 ? void 0 : _b.length) > 0 ?
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, { className: "fw-bold pt-0", activeKey: outputKey, onSelect: setOutputKey },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, { eventKey: "xml", title: _constants__WEBPACK_IMPORTED_MODULE_6__/* .TOKENS */ .xZ.XML }, renderDestinationEditor()),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, { eventKey: "headers", title: _constants__WEBPACK_IMPORTED_MODULE_6__/* .TOKENS */ .xZ.HEADERS }, output.headers.map(header => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: header.name, className: "mb-3 me-3" },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "fw-bold" }, header.name),
                            header.value.reverse().map((value, index) => react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { key: index, type: "text", className: `form-control mt-${Math.min(index, 1)}`, defaultValue: value, disabled: true, readOnly: true })))))))
                    :
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "tab-content" }, renderDestinationEditor())))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MappingTestModal);


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


/***/ })

}]);