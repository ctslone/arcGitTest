"use strict";
(self["webpackChunkcdata_arc"] = self["webpackChunkcdata_arc"] || []).push([["src_components_arc-codemirror_index_jsx"],{

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

/***/ 6363:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   oQ: () => (/* binding */ basicSetup)
/* harmony export */ });
/* unused harmony export minimalSetup */
/* harmony import */ var _codemirror_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36898);
/* harmony import */ var _codemirror_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31638);
/* harmony import */ var _codemirror_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15874);
/* harmony import */ var _codemirror_commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45230);
/* harmony import */ var _codemirror_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54528);
/* harmony import */ var _codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47404);
/* harmony import */ var _codemirror_lint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51419);









// (The superfluous function calls around the list of extensions work
// around current limitations in tree-shaking software.)
/**
This is an extension value that just pulls together a number of
extensions that you might want in a basic editor. It is meant as a
convenient helper to quickly set up CodeMirror without installing
and importing a lot of separate packages.

Specifically, it includes...

 - [the default command bindings](https://codemirror.net/6/docs/ref/#commands.defaultKeymap)
 - [line numbers](https://codemirror.net/6/docs/ref/#view.lineNumbers)
 - [special character highlighting](https://codemirror.net/6/docs/ref/#view.highlightSpecialChars)
 - [the undo history](https://codemirror.net/6/docs/ref/#commands.history)
 - [a fold gutter](https://codemirror.net/6/docs/ref/#language.foldGutter)
 - [custom selection drawing](https://codemirror.net/6/docs/ref/#view.drawSelection)
 - [drop cursor](https://codemirror.net/6/docs/ref/#view.dropCursor)
 - [multiple selections](https://codemirror.net/6/docs/ref/#state.EditorState^allowMultipleSelections)
 - [reindentation on input](https://codemirror.net/6/docs/ref/#language.indentOnInput)
 - [the default highlight style](https://codemirror.net/6/docs/ref/#language.defaultHighlightStyle) (as fallback)
 - [bracket matching](https://codemirror.net/6/docs/ref/#language.bracketMatching)
 - [bracket closing](https://codemirror.net/6/docs/ref/#autocomplete.closeBrackets)
 - [autocompletion](https://codemirror.net/6/docs/ref/#autocomplete.autocompletion)
 - [rectangular selection](https://codemirror.net/6/docs/ref/#view.rectangularSelection) and [crosshair cursor](https://codemirror.net/6/docs/ref/#view.crosshairCursor)
 - [active line highlighting](https://codemirror.net/6/docs/ref/#view.highlightActiveLine)
 - [active line gutter highlighting](https://codemirror.net/6/docs/ref/#view.highlightActiveLineGutter)
 - [selection match highlighting](https://codemirror.net/6/docs/ref/#search.highlightSelectionMatches)
 - [search](https://codemirror.net/6/docs/ref/#search.searchKeymap)
 - [linting](https://codemirror.net/6/docs/ref/#lint.lintKeymap)

(You'll probably want to add some language package to your setup
too.)

This extension does not allow customization. The idea is that,
once you decide you want to configure your editor more precisely,
you take this package's source (which is just a bunch of imports
and an array literal), copy it into your own code, and adjust it
as desired.
*/
const basicSetup = /*@__PURE__*/(() => [
    (0,_codemirror_view__WEBPACK_IMPORTED_MODULE_0__/* .lineNumbers */ .$K)(),
    (0,_codemirror_view__WEBPACK_IMPORTED_MODULE_0__/* .highlightActiveLineGutter */ .Wu)(),
    (0,_codemirror_view__WEBPACK_IMPORTED_MODULE_0__/* .highlightSpecialChars */ .N$)(),
    (0,_codemirror_commands__WEBPACK_IMPORTED_MODULE_1__/* .history */ .b6)(),
    (0,_codemirror_language__WEBPACK_IMPORTED_MODULE_2__/* .foldGutter */ .Lv)(),
    (0,_codemirror_view__WEBPACK_IMPORTED_MODULE_0__/* .drawSelection */ .VH)(),
    (0,_codemirror_view__WEBPACK_IMPORTED_MODULE_0__/* .dropCursor */ .A)(),
    _codemirror_state__WEBPACK_IMPORTED_MODULE_3__/* .EditorState */ .$t.allowMultipleSelections.of(true),
    (0,_codemirror_language__WEBPACK_IMPORTED_MODULE_2__/* .indentOnInput */ .WD)(),
    (0,_codemirror_language__WEBPACK_IMPORTED_MODULE_2__/* .syntaxHighlighting */ .y9)(_codemirror_language__WEBPACK_IMPORTED_MODULE_2__/* .defaultHighlightStyle */ .Zt, { fallback: true }),
    (0,_codemirror_language__WEBPACK_IMPORTED_MODULE_2__/* .bracketMatching */ .SG)(),
    (0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_4__/* .closeBrackets */ .wm)(),
    (0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_4__/* .autocompletion */ .yU)(),
    (0,_codemirror_view__WEBPACK_IMPORTED_MODULE_0__/* .rectangularSelection */ .D4)(),
    (0,_codemirror_view__WEBPACK_IMPORTED_MODULE_0__/* .crosshairCursor */ .HJ)(),
    (0,_codemirror_view__WEBPACK_IMPORTED_MODULE_0__/* .highlightActiveLine */ .dz)(),
    (0,_codemirror_search__WEBPACK_IMPORTED_MODULE_5__/* .highlightSelectionMatches */ .gN)(),
    _codemirror_view__WEBPACK_IMPORTED_MODULE_0__/* .keymap */ .w4.of([
        ..._codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_4__/* .closeBracketsKeymap */ .Bc,
        ..._codemirror_commands__WEBPACK_IMPORTED_MODULE_1__/* .defaultKeymap */ .pw,
        ..._codemirror_search__WEBPACK_IMPORTED_MODULE_5__/* .searchKeymap */ .Eo,
        ..._codemirror_commands__WEBPACK_IMPORTED_MODULE_1__/* .historyKeymap */ .cL,
        ..._codemirror_language__WEBPACK_IMPORTED_MODULE_2__/* .foldKeymap */ .f7,
        ..._codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_4__/* .completionKeymap */ .OO,
        ..._codemirror_lint__WEBPACK_IMPORTED_MODULE_6__/* .lintKeymap */ .$w
    ])
])();
/**
A minimal set of extensions to create a functional editor. Only
includes [the default keymap](https://codemirror.net/6/docs/ref/#commands.defaultKeymap), [undo
history](https://codemirror.net/6/docs/ref/#commands.history), [special character
highlighting](https://codemirror.net/6/docs/ref/#view.highlightSpecialChars), [custom selection
drawing](https://codemirror.net/6/docs/ref/#view.drawSelection), and [default highlight
style](https://codemirror.net/6/docs/ref/#language.defaultHighlightStyle).
*/
const minimalSetup = /*@__PURE__*/(/* unused pure expression or super */ null && ((() => [
    highlightSpecialChars(),
    history(),
    drawSelection(),
    syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
    keymap.of([
        ...defaultKeymap,
        ...historyKeymap,
    ])
])()));




/***/ })

}]);